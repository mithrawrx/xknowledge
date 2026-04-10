#!/usr/bin/env node
/**
 * 修复推文文件中的原始推文链接
 * 从 bookmarks.md 获取正确的推文 URL
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const BOOKMARKS_FILE = path.join(ROOT_DIR, 'bookmarks.md');
const TWEETS_DIR = path.join(ROOT_DIR, 'knowledge', 'tweets');

// 从 bookmarks.md 解析作者和推文 URL 的映射
function parseTweetUrls() {
  const content = fs.readFileSync(BOOKMARKS_FILE, 'utf8');
  const lines = content.split('\n');

  const urlMap = {}; // author -> [tweetUrl, tweetUrl, ...]

  let currentAuthor = null;

  for (const line of lines) {
    // 提取作者
    const authorMatch = line.match(/^## @(\w+)\s*-/);
    if (authorMatch) {
      currentAuthor = authorMatch[1];
      continue;
    }

    // 提取推文 URL（支持中英文格式：**推文**: 和 **Tweet:**）
    const tweetMatch = line.match(/\*\*(?:推文\*\*:|Tweet:\*\*)\s*(https:\/\/(?:x|twitter)\.com\/\w+\/status\/\d+)/i);
    if (tweetMatch && currentAuthor) {
      if (!urlMap[currentAuthor]) {
        urlMap[currentAuthor] = [];
      }
      urlMap[currentAuthor].push(tweetMatch[1]);
    }
  }

  return urlMap;
}

// 主流程
const urlMap = parseTweetUrls();
console.log(`📚 解析了 ${Object.keys(urlMap).length} 个作者的推文链接\n`);

const files = fs.readdirSync(TWEETS_DIR).filter(f => f.endsWith('.md'));
console.log(`📝 检查 ${files.length} 个文件\n`);

let fixed = 0;
let skipped = 0;
let noMatch = 0;

for (const filename of files) {
  const filepath = path.join(TWEETS_DIR, filename);
  let content = fs.readFileSync(filepath, 'utf8');

  // 检查是否需要修复
  if (!content.includes('原始推文]()')) {
    skipped++;
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
  const tweetUrls = urlMap[author];

  if (!tweetUrls || tweetUrls.length === 0) {
    noMatch++;
    console.log(`📭 ${filename}: 未找到 @${author} 的推文链接`);
    continue;
  }

  // 如果只有一个推文 URL，直接使用
  // 如果有多个，需要根据文件标题匹配
  let tweetUrl = tweetUrls[0];

  if (tweetUrls.length > 1) {
    // 从文件提取日期，尝试匹配
    const dateMatch = content.match(/date_added:\s*(\d{4}-\d{2}-\d{2})/);
    const fileDate = dateMatch ? dateMatch[1] : null;

    // 尝试从 bookmarks.md 找到对应日期的条目
    const bookmarkContent = fs.readFileSync(BOOKMARKS_FILE, 'utf8');
    const lines = bookmarkContent.split('\n');
    let currentDate = null;
    let foundUrl = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // 检测日期标题（中文格式）
      if (line.match(/^# (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),/)) {
        // 尝试解析日期
        const dateStr = line.replace(/^# /, '');
        // 简单匹配月份和日期
        const monthMap = {
          'January': '01', 'February': '02', 'March': '03', 'April': '04',
          'May': '05', 'June': '06', 'July': '07', 'August': '08',
          'September': '09', 'October': '10', 'November': '11', 'December': '12'
        };
        const dateParts = dateStr.match(/(\w+)\s+(\d+),?\s*(\d+)/);
        if (dateParts) {
          const month = monthMap[dateParts[1]] || '01';
          const day = dateParts[2].padStart(2, '0');
          const year = dateParts[3];
          currentDate = `${year}-${month}-${day}`;
        }
        continue;
      }

      // 检测日期标题（英文格式）
      if (line.match(/^# [A-Z][a-z]+, [A-Z][a-z]+ \d+, \d{4}$/)) {
        const dateStr = line.replace(/^# /, '');
        const monthMap = {
          'January': '01', 'February': '02', 'March': '03', 'April': '04',
          'May': '05', 'June': '06', 'July': '07', 'August': '08',
          'September': '09', 'October': '10', 'November': '11', 'December': '12'
        };
        const dateParts = dateStr.match(/(\w+)\s+(\d+),?\s*(\d+)/);
        if (dateParts) {
          const month = monthMap[dateParts[1]] || '01';
          const day = dateParts[2].padStart(2, '0');
          const year = dateParts[3];
          currentDate = `${year}-${month}-${day}`;
        }
        continue;
      }

      // 找到匹配作者的条目
      if (line.includes(`## @${author}`) && fileDate && currentDate === fileDate) {
        // 向下查找推文 URL
        for (let j = i; j < Math.min(i + 10, lines.length); j++) {
          const urlMatch = lines[j].match(/\*\*(?:推文|Tweet)\*\*:\s*(https:\/\/x\.com\/\w+\/status\/\d+)/);
          if (urlMatch) {
            foundUrl = urlMatch[1];
            break;
          }
        }
        if (foundUrl) break;
      }
    }

    if (foundUrl) {
      tweetUrl = foundUrl;
    }
  }

  // 修复链接
  content = content.replace(/- \[原始推文\]\(\)/g, `- [原始推文](${tweetUrl})`);
  fs.writeFileSync(filepath, content);
  console.log(`✅ ${filename}: ${tweetUrl}`);
  fixed++;
}

console.log(`\n📊 完成:`);
console.log(`   修复: ${fixed}`);
console.log(`   跳过（已有链接）: ${skipped}`);
console.log(`   未匹配: ${noMatch}`);
console.log(`   总计: ${files.length}`);