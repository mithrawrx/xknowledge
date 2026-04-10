#!/usr/bin/env node
/**
 * 修复推文文件中的 YAML frontmatter 问题
 * 主要是处理标题中的引号问题
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TWEETS_DIR = path.join(__dirname, '..', 'knowledge', 'tweets');

function fixFrontmatter(content) {
  // 提取 frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return content;

  const frontmatter = match[1];
  const body = content.slice(match[0].length);

  // 解析 frontmatter 行
  const lines = frontmatter.split('\n');
  const fixedLines = [];

  for (const line of lines) {
    // 处理 title 行
    if (line.startsWith('title:')) {
      const titleMatch = line.match(/^title:\s*"(.+)"$/);
      if (titleMatch) {
        let title = titleMatch[1];
        // 将中文引号替换为英文引号（转义）
        title = title.replace(/"/g, '\\"').replace(/"/g, '\\"');
        // 用单引号包裹，避免转义双引号的问题
        fixedLines.push(`title: '${title}'`);
        continue;
      }
    }
    fixedLines.push(line);
  }

  return `---\n${fixedLines.join('\n')}\n---${body}`;
}

// 主流程
const files = fs.readdirSync(TWEETS_DIR).filter(f => f.endsWith('.md'));
console.log(`🔍 检查 ${files.length} 个文件...\n`);

let fixed = 0;
let skipped = 0;

for (const filename of files) {
  const filepath = path.join(TWEETS_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf8');

  // 检查是否有问题的标题（包含未转义的引号）
  const titleMatch = content.match(/^title:\s*"(.+)"$/m);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.includes('"') || title.includes('"')) {
      const fixedContent = fixFrontmatter(content);
      fs.writeFileSync(filepath, fixedContent);
      console.log(`✅ ${filename}: 修复引号`);
      fixed++;
      continue;
    }
  }

  skipped++;
}

console.log(`\n📊 完成: 修复 ${fixed} 个文件，跳过 ${skipped} 个`);