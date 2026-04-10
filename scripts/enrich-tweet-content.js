#!/usr/bin/env node
/**
 * 从 bookmarks.md 补充推文文件的链接内容
 * 通过文件名匹配 bookmarks.md 中的条目
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const BOOKMARKS_FILE = path.join(ROOT_DIR, 'bookmarks.md');
const TWEETS_DIR = path.join(ROOT_DIR, 'knowledge', 'tweets');

// 展开 t.co 链接
async function expandTcoLink(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal
    });
    clearTimeout(timeout);

    return response.url || url;
  } catch (error) {
    return url;
  }
}

// 获取 GitHub 仓库信息
async function fetchGitHubInfo(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/\?]+)/);
  if (!match) return null;

  const owner = match[1];
  const repo = match[2].replace(/\.git$/, '');

  try {
    console.log(`    获取 GitHub: ${owner}/${repo}`);
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    const repoJson = await response.json();

    // 获取 README
    let readme = '';
    try {
      const readmeUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
      const readmeResponse = await fetch(readmeUrl, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });
      const readmeJson = await readmeResponse.json();
      if (readmeJson.content) {
        readme = Buffer.from(readmeJson.content, 'base64').toString('utf8');
        if (readme.length > 10000) {
          readme = readme.slice(0, 10000) + '\n\n...[内容过长已截断]';
        }
      }
    } catch (e) {
      console.log(`    README 获取失败: ${e.message}`);
    }

    return {
      name: repoJson.name,
      fullName: repoJson.full_name,
      description: repoJson.description || '暂无描述',
      stars: repoJson.stargazers_count,
      language: repoJson.language || 'Unknown',
      topics: repoJson.topics || [],
      readme,
      url: repoJson.html_url
    };
  } catch (error) {
    console.log(`    GitHub API 错误: ${error.message}`);
    return null;
  }
}

// 获取文章内容
async function fetchArticleContent(url) {
  try {
    console.log(`    获取文章: ${url}`);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeout);

    const text = await response.text();

    // 提取 title
    const titleMatch = text.match(/<title>([^<]+)<\/title>/i);
    let title = titleMatch ? titleMatch[1] : '';
    title = title.replace(/ \| .+$/, '').replace(/ - .+$/, '').trim();

    // 提取 og:description
    const ogDescMatch = text.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i) ||
                        text.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:description["']/i);

    // 提取 article 或 main 内容
    let bodyContent = '';
    const articleMatch = text.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    const mainMatch = text.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

    if (articleMatch) {
      bodyContent = articleMatch[1];
    } else if (mainMatch) {
      bodyContent = mainMatch[1];
    } else {
      const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      bodyContent = bodyMatch ? bodyMatch[1] : text;
    }

    // 清理 HTML
    bodyContent = bodyContent
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, '\n')
      .replace(/\n\s*\n/g, '\n\n')
      .trim();

    if (bodyContent.length > 15000) {
      bodyContent = bodyContent.slice(0, 15000) + '\n\n...[内容过长已截断]';
    }

    return {
      title: title || '未知标题',
      description: ogDescMatch ? ogDescMatch[1] : '',
      content: bodyContent,
      url
    };
  } catch (error) {
    console.log(`    文章获取错误: ${error.message}`);
    return null;
  }
}

// 获取 GitHub Gist 内容
async function fetchGistContent(url) {
  const match = url.match(/gist\.github\.com\/([^\/]+)\/([a-f0-9]+)/);
  if (!match) return null;

  const owner = match[1];
  const gistId = match[2];

  try {
    console.log(`    获取 Gist: ${owner}/${gistId}`);
    const apiUrl = `https://api.github.com/gists/${gistId}`;
    const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    const gistJson = await response.json();

    // 获取第一个文件的内容
    const files = Object.values(gistJson.files);
    if (files.length > 0) {
      const file = files[0];
      return {
        title: file.filename || 'Gist',
        description: gistJson.description || '',
        content: file.content || '',
        url: gistJson.html_url
      };
    }
    return null;
  } catch (error) {
    console.log(`    Gist 获取错误: ${error.message}`);
    return null;
  }
}

// 从 bookmarks.md 解析所有条目
function parseBookmarks() {
  const content = fs.readFileSync(BOOKMARKS_FILE, 'utf8');

  // 按日期分割
  const sections = content.split(/^# (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),/m);

  const bookmarks = [];
  let currentDate = '';

  // 重新解析获取日期
  const lines = content.split('\n');
  let currentEntry = null;
  let inEntry = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 日期标题
    if (line.match(/^# (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),/)) {
      currentDate = line.replace(/^# /, '');
      continue;
    }

    // 新条目
    if (line.match(/^## @/)) {
      if (currentEntry) {
        bookmarks.push(currentEntry);
      }
      const authorMatch = line.match(/^## @(\w+)\s*-\s*(.+)$/);
      currentEntry = {
        date: currentDate,
        author: authorMatch ? authorMatch[1] : '',
        title: authorMatch ? authorMatch[2].trim() : '',
        tweetUrl: '',
        link: '',
        linkType: '',
        tweetContent: '',
        rawLines: [line]
      };
      inEntry = true;
      continue;
    }

    // 收集条目内容
    if (inEntry && currentEntry) {
      currentEntry.rawLines.push(line);

      // 提取推文内容（引用块）
      if (line.startsWith('> ') && !line.startsWith('> *')) {
        currentEntry.tweetContent += line.slice(2) + '\n';

        // 从推文内容中提取 t.co 链接
        const tcoMatch = line.match(/https?:\/\/t\.co\/\w+/g);
        if (tcoMatch) {
          tcoMatch.forEach(link => {
            if (!currentEntry.extractedLinks) {
              currentEntry.extractedLinks = [];
            }
            if (!currentEntry.extractedLinks.includes(link)) {
              currentEntry.extractedLinks.push(link);
            }
          });
        }
      }

      // 提取推文链接（支持中英文格式）
      if (line.includes('**推文**:') || line.includes('**Tweet:**')) {
        const match = line.match(/x\.com\/\w+\/status\/(\d+)/);
        if (match) {
          currentEntry.tweetUrl = `https://x.com/${currentEntry.author}/status/${match[1]}`;
          currentEntry.tweetId = match[1];
        }
      }

      // 提取链接（支持中英文格式）
      if (line.includes('**链接**:') || line.includes('**Link:**')) {
        const match = line.match(/\*\*(?:链接|Link)\*\*:\s*(.+)$/);
        if (match) {
          let link = match[1].trim();
          // 清理链接
          link = link.split('（')[0].split(' ')[0];
          currentEntry.link = link;

          // 判断链接类型
          if (link.includes('github.com') && !link.includes('gist.github.com')) {
            currentEntry.linkType = 'github';
          } else if (link.includes('gist.github.com')) {
            currentEntry.linkType = 'gist';
          } else if (link.includes('x.com/i/article/')) {
            currentEntry.linkType = 'x-article';
          } else if (link.includes('youtube.com') || link.includes('youtu.be')) {
            currentEntry.linkType = 'youtube';
          } else if (!link.includes('无（媒体附件）') && !link.includes('x.com') && !link.includes('twitter.com')) {
            currentEntry.linkType = 'article';
          }
        }
      }

      // 也检查 What: 字段中是否包含链接
      if (line.includes('**What:**') && !currentEntry.link) {
        const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) {
          currentEntry.link = urlMatch[1];
          if (currentEntry.link.includes('github.com')) {
            currentEntry.linkType = 'github';
          } else if (currentEntry.link.includes('x.com/i/article/')) {
            currentEntry.linkType = 'x-article';
          } else if (!currentEntry.link.includes('x.com') && !currentEntry.link.includes('twitter.com')) {
            currentEntry.linkType = 'article';
          }
        }
      }
    }
  }

  // 添加最后一个条目
  if (currentEntry) {
    bookmarks.push(currentEntry);
  }

  return bookmarks;
}

// 生成文件名 slug
function generateSlug(author, title) {
  let slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50);
  return `${author}-${slug}`;
}

// 检查文件内容是否需要补充
function needsEnrichment(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');

  // 如果已经有链接内容部分，跳过
  if (content.includes('## 链接内容')) {
    return { needs: false, reason: '已有链接内容' };
  }

  // 提取完整内容部分
  const contentMatch = content.match(/## 完整内容\s*\n([\s\S]*?)\n## (收藏原因|相关链接)/);
  if (!contentMatch) {
    return { needs: false, reason: '格式异常' };
  }

  const mainContent = contentMatch[1].trim();

  // 如果内容少于 300 字符，需要补充
  if (mainContent.length < 300) {
    return { needs: true, reason: `内容过短 (${mainContent.length}字符)` };
  }

  return { needs: false, reason: '内容充足' };
}

// 更新推文文件
function updateTweetFile(filepath, bookmark, linkContent) {
  const content = fs.readFileSync(filepath, 'utf8');

  let linkSection = '\n## 链接内容\n\n';

  if (bookmark.linkType === 'github' && linkContent) {
    linkSection += `### GitHub 项目: ${linkContent.fullName}\n\n`;
    linkSection += `**描述**: ${linkContent.description}\n\n`;
    linkSection += `**Stars**: ${linkContent.stars.toLocaleString()}\n\n`;
    linkSection += `**语言**: ${linkContent.language}\n\n`;
    if (linkContent.topics.length > 0) {
      linkSection += `**Topics**: ${linkContent.topics.join(', ')}\n\n`;
    }
    linkSection += `### README\n\n${linkContent.readme || '暂无 README'}\n`;
  } else if (bookmark.linkType === 'gist' && linkContent) {
    linkSection += `### GitHub Gist: ${linkContent.title}\n\n`;
    if (linkContent.description) {
      linkSection += `**描述**: ${linkContent.description}\n\n`;
    }
    linkSection += `\`\`\`\n${linkContent.content}\n\`\`\`\n`;
  } else if (bookmark.linkType === 'article' && linkContent) {
    linkSection += `### 文章: ${linkContent.title}\n\n`;
    if (linkContent.description) {
      linkSection += `> ${linkContent.description}\n\n`;
    }
    linkSection += `${linkContent.content}\n`;
  } else if (bookmark.linkType === 'x-article') {
    linkSection += `### X 文章\n\n`;
    linkSection += `*X 文章内容需要通过 Twitter API 获取，原文链接: ${bookmark.link}*\n`;
  } else if (bookmark.linkType === 'youtube') {
    linkSection += `### YouTube 视频\n\n`;
    linkSection += `*视频内容需要转录，链接: ${bookmark.link}*\n`;
  }

  // 在 "## 收藏原因" 之前插入
  const insertPos = content.indexOf('## 收藏原因');
  if (insertPos === -1) {
    console.log(`    无法找到插入位置`);
    return false;
  }

  const newContent = content.slice(0, insertPos) + linkSection + '\n' + content.slice(insertPos);
  fs.writeFileSync(filepath, newContent);
  return true;
}

// 主流程
async function main() {
  console.log('🔍 开始处理存量推文文件...\n');

  // 解析 bookmarks.md
  const bookmarks = parseBookmarks();
  console.log(`📚 从 bookmarks.md 解析了 ${bookmarks.length} 个条目\n`);

  // 建立 author -> [bookmarks] 映射
  const bookmarksByAuthor = {};
  for (const bm of bookmarks) {
    if (!bookmarksByAuthor[bm.author]) {
      bookmarksByAuthor[bm.author] = [];
    }
    bookmarksByAuthor[bm.author].push(bm);
  }

  // 获取所有推文文件
  const tweetFiles = fs.readdirSync(TWEETS_DIR).filter(f => f.endsWith('.md'));
  console.log(`📝 找到 ${tweetFiles.length} 个推文文件\n`);

  let updated = 0;
  let skipped = 0;
  let noMatch = 0;
  let noLink = 0;

  for (const filename of tweetFiles) {
    const filepath = path.join(TWEETS_DIR, filename);

    // 检查是否需要补充
    const { needs, reason } = needsEnrichment(filepath);

    if (!needs) {
      skipped++;
      console.log(`⏭️  ${filename}: ${reason}`);
      continue;
    }

    // 从文件名提取作者
    const authorMatch = filename.match(/^([^-]+)/);
    if (!authorMatch) {
      noMatch++;
      console.log(`❓ ${filename}: 无法提取作者`);
      continue;
    }

    const author = authorMatch[1];
    const authorBookmarks = bookmarksByAuthor[author] || [];

    if (authorBookmarks.length === 0) {
      noMatch++;
      console.log(`❓ ${filename}: 未找到 ${author} 的书签条目`);
      continue;
    }

    // 找到匹配的书签（通过标题相似度或链接）
    let matchedBookmark = null;
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const titleMatch = fileContent.match(/^title: "(.+)"$/m);
    const fileTitle = titleMatch ? titleMatch[1].toLowerCase() : '';

    for (const bm of authorBookmarks) {
      // 检查是否有链接
      if (bm.link && bm.linkType) {
        // 如果只有一个有链接的条目，直接匹配
        if (!matchedBookmark) {
          matchedBookmark = bm;
        } else if (bm.title.toLowerCase().includes(fileTitle.slice(0, 20)) ||
                   fileTitle.includes(bm.title.toLowerCase().slice(0, 20))) {
          // 标题匹配
          matchedBookmark = bm;
          break;
        }
      } else if (bm.extractedLinks && bm.extractedLinks.length > 0) {
        // 如果有从推文内容提取的 t.co 链接
        if (!matchedBookmark) {
          matchedBookmark = bm;
        }
      }
    }

    // 如果没有找到链接但有 t.co 链接，尝试展开
    if (matchedBookmark && !matchedBookmark.link && matchedBookmark.extractedLinks) {
      console.log(`    发现 t.co 链接: ${matchedBookmark.extractedLinks.join(', ')}`);
      for (const tcoLink of matchedBookmark.extractedLinks) {
        const expanded = await expandTcoLink(tcoLink);
        console.log(`    展开: ${tcoLink} -> ${expanded}`);
        matchedBookmark.link = expanded;

        // 判断链接类型
        if (expanded.includes('github.com') && !expanded.includes('gist.github.com')) {
          matchedBookmark.linkType = 'github';
        } else if (expanded.includes('gist.github.com')) {
          matchedBookmark.linkType = 'gist';
        } else if (expanded.includes('x.com/i/article/')) {
          matchedBookmark.linkType = 'x-article';
        } else if (expanded.includes('youtube.com') || expanded.includes('youtu.be')) {
          matchedBookmark.linkType = 'youtube';
        } else if (!expanded.includes('x.com') && !expanded.includes('twitter.com')) {
          matchedBookmark.linkType = 'article';
        }

        if (matchedBookmark.linkType) break;
      }
    }

    if (!matchedBookmark) {
      noLink++;
      console.log(`📭 ${filename}: 无链接信息 (${reason})`);
      continue;
    }

    console.log(`🔗 ${filename}: 处理中 (${reason})`);
    console.log(`    匹配条目: @${matchedBookmark.author} - ${matchedBookmark.title}`);
    console.log(`    链接类型: ${matchedBookmark.linkType}`);
    console.log(`    链接: ${matchedBookmark.link}`);

    // 获取链接内容
    let linkContent = null;

    if (matchedBookmark.linkType === 'github') {
      linkContent = await fetchGitHubInfo(matchedBookmark.link);
    } else if (matchedBookmark.linkType === 'gist') {
      linkContent = await fetchGistContent(matchedBookmark.link);
    } else if (matchedBookmark.linkType === 'article') {
      linkContent = await fetchArticleContent(matchedBookmark.link);
    }

    // 更新文件
    if (matchedBookmark.linkType === 'x-article' || matchedBookmark.linkType === 'youtube' || linkContent) {
      const success = updateTweetFile(filepath, matchedBookmark, linkContent);
      if (success) {
        updated++;
        console.log(`    ✅ 已更新\n`);
      } else {
        console.log(`    ❌ 更新失败\n`);
      }
    } else {
      console.log(`    ❌ 无法获取链接内容\n`);
    }
  }

  console.log(`\n📊 处理完成:`);
  console.log(`   更新文件: ${updated}`);
  console.log(`   跳过（内容充足/已有链接内容）: ${skipped}`);
  console.log(`   无链接信息: ${noLink}`);
  console.log(`   未匹配: ${noMatch}`);
  console.log(`   总计: ${tweetFiles.length}`);
}

main().catch(console.error);