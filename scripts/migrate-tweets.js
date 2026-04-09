#!/usr/bin/env node
/**
 * 将 bookmarks.md 中未归档的书签转换为单独的 markdown 文件
 * 用法: node scripts/migrate-tweets.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const BOOKMARKS_FILE = path.join(ROOT_DIR, 'bookmarks.md');
const TWEETS_DIR = path.join(ROOT_DIR, 'knowledge', 'tweets');

// 确保目录存在
if (!fs.existsSync(TWEETS_DIR)) {
  fs.mkdirSync(TWEETS_DIR, { recursive: true });
}

// 读取 bookmarks.md
const content = fs.readFileSync(BOOKMARKS_FILE, 'utf8');

// 解析书签条目
function parseBookmarks(markdown) {
  const bookmarks = [];

  // 按日期分割
  const dateSections = markdown.split(/^# (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),/m);

  for (let i = 1; i < dateSections.length; i++) {
    const dateHeader = markdown.match(/^# ((?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),.+)$/m);
    const dateMatch = dateSections[i - 1] ? markdown.split(/^# /m)[i]?.match(/^(.+)/m) : null;
    const date = dateMatch ? dateMatch[1].trim() : '';

    const sectionContent = dateSections[i];

    // 分割单个书签条目
    const entries = sectionContent.split(/^## @/m).filter(e => e.trim());

    for (const entry of entries) {
      const bookmark = parseEntry('## @' + entry, date);
      if (bookmark) {
        bookmarks.push(bookmark);
      }
    }
  }

  return bookmarks;
}

function parseEntry(entryText, date) {
  // 提取作者和标题
  const titleMatch = entryText.match(/^## @(\w+)\s*-\s*(.+)$/m);
  if (!titleMatch) return null;

  const author = titleMatch[1];
  const title = titleMatch[2].trim();

  // 提取推文原文（引用块）
  const contentMatch = entryText.match(/^> (.+(?:\n>.*)*)/m);
  let tweetContent = contentMatch ? contentMatch[1].replace(/^> /gm, '') : '';

  // 检查是否有引用推文
  const quoteMatch = entryText.match(/\*\*引用原推\*\*:\s*\n> (.+)/s);
  if (quoteMatch) {
    const quotedContent = quoteMatch[1].replace(/^> /gm, '');
    tweetContent += '\n\n**引用内容:**\n' + quotedContent;
  }

  // 提取推文链接
  const tweetUrlMatch = entryText.match(/\*\*推文\*\*:\s*(https:\/\/x\.com\/\w+\/status\/(\d+))/);
  const tweetUrl = tweetUrlMatch ? tweetUrlMatch[1] : '';
  const tweetId = tweetUrlMatch ? tweetUrlMatch[2] : '';

  // 提取其他链接
  const linkMatch = entryText.match(/\*\*链接\*\*:\s*(.+)$/m);
  const link = linkMatch ? linkMatch[1].trim() : '';

  // 检查是否已有归档
  const archiveMatch = entryText.match(/\*\*归档\*\*:\s*\[([^\]]+)\]\(([^)]+)\)/);
  const hasArchive = !!archiveMatch;

  // 提取概述
  const summaryMatch = entryText.match(/\*\*概述\*\*:\s*(.+)$/m);
  const summary = summaryMatch ? summaryMatch[1].trim() : '';

  // 提取日期
  const dateMatch = date.match(/(.+),\s*(\w+\s+\d+,?\s*\d+)/);
  const dateAdded = dateMatch ? formatDate(dateMatch[2]) : new Date().toISOString().split('T')[0];

  return {
    author,
    title,
    tweetContent,
    tweetUrl,
    tweetId,
    link,
    hasArchive,
    summary,
    dateAdded,
    rawEntry: entryText
  };
}

function formatDate(dateStr) {
  // "April 9, 2026" -> "2026-04-09"
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };

  const match = dateStr.match(/(\w+)\s+(\d+),?\s*(\d+)/);
  if (!match) return new Date().toISOString().split('T')[0];

  const month = months[match[1]] || '01';
  const day = match[2].padStart(2, '0');
  const year = match[3];

  return `${year}-${month}-${day}`;
}

function createSlug(author, title) {
  // 创建文件名
  let slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50);

  return `${author}-${slug}`;
}

function createTweetFile(bookmark) {
  const slug = createSlug(bookmark.author, bookmark.title);
  const filename = `${slug}.md`;
  const filepath = path.join(TWEETS_DIR, filename);

  // 检查文件是否已存在
  if (fs.existsSync(filepath)) {
    console.log(`  ⏭️  已存在: ${filename}`);
    return null;
  }

  const frontmatter = `---
title: "${bookmark.title}"
type: tweet
date_added: ${bookmark.dateAdded}
author: "@${bookmark.author}"
tweet_id: "${bookmark.tweetId}"
tags: []
via: "Twitter书签"
---

## 完整内容

${bookmark.tweetContent}

## 收藏原因

${bookmark.summary || '值得保存的推文内容。'}

## 相关链接

- [原始推文](${bookmark.tweetUrl})
${bookmark.link && bookmark.link !== '无（媒体附件）' ? `- [相关链接](${bookmark.link})` : ''}
`;

  fs.writeFileSync(filepath, frontmatter);
  return filename;
}

// 主流程
console.log('🔍 开始处理存量书签...\n');

// 重新解析 - 更简单的方法
let updatedContent = content;
const lines = content.split('\n');
let currentDate = '';
let currentEntry = [];
let entries = [];

for (const line of lines) {
  if (line.match(/^# (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),/)) {
    currentDate = line.replace(/^# /, '');
  } else if (line.match(/^## @/)) {
    if (currentEntry.length > 0) {
      entries.push({ date: currentDate, content: currentEntry.join('\n') });
    }
    currentEntry = [line];
  } else if (currentEntry.length > 0) {
    currentEntry.push(line);
  }
}
// 添加最后一个条目
if (currentEntry.length > 0) {
  entries.push({ date: currentDate, content: currentEntry.join('\n') });
}

console.log(`📚 找到 ${entries.length} 个书签条目\n`);

let created = 0;
let skipped = 0;

for (const entry of entries) {
  const bookmark = parseEntry(entry.content, entry.date);
  if (!bookmark) {
    console.log('  ⚠️  无法解析条目');
    continue;
  }

  // 如果已有归档文件，跳过
  if (bookmark.hasArchive) {
    skipped++;
    continue;
  }

  // 创建推文文件
  const filename = createTweetFile(bookmark);
  if (filename) {
    created++;
    console.log(`  ✅ 创建: knowledge/tweets/${filename}`);

    // 更新 bookmarks.md 中的归档链接
    const oldEntry = entry.content;
    const newEntry = oldEntry.replace(
      /(- \*\*概述\*\*:)/,
      `- **归档**: [${filename}](./knowledge/tweets/${filename})\n$1`
    );

    if (oldEntry !== newEntry) {
      updatedContent = updatedContent.replace(oldEntry, newEntry);
    }
  }
}

// 写回更新后的 bookmarks.md
fs.writeFileSync(BOOKMARKS_FILE, updatedContent);

console.log(`\n📊 处理完成:`);
console.log(`   创建文件: ${created}`);
console.log(`   已有归档: ${skipped}`);
console.log(`   总计: ${entries.length}`);