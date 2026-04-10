#!/usr/bin/env node
/**
 * 将 tools 和 articles 目录的文件名改为中文
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const BOOKMARKS_FILE = path.join(ROOT_DIR, 'bookmarks.md');

// 中文文件名映射
const nameMap = {
  // tools
  'auth2api.md': 'auth2api-OAuth转API代理.md',
  'backtrader.md': 'Backtrader-Python回测框架.md',
  'career-ops.md': 'Career-Ops-AI求职系统.md',
  'claude-island.md': 'Claude-Island-灵动岛通知.md',
  'continuous-claude-v2.md': 'Continuous-Claude-v2-上下文管理.md',
  'freqtrade.md': 'Freqtrade-加密货币交易机器人.md',
  'gisthost.md': 'GistHost-Gist预览工具.md',
  'hermes-agent.md': 'Hermes-Agent-自进化智能体.md',
  'llm-wiki-idea-file.md': 'LLM-Wiki-Idea-File.md',
  'llm-wiki.md': 'LLM-Wiki-知识库客户端.md',
  'markitdown.md': 'MarkItDown-文档转Markdown.md',
  'markwhen.md': 'Markwhen-时间线工具.md',
  'nofx.md': 'NoFx-无效果框架.md',
  'obsidian-baseline.md': 'Obsidian-Baseline-主题.md',
  'osaurus.md': 'Osaurus-macOS-LLM服务器.md',
  'sessy.md': 'Sessy-邮件可观测性.md',
  'shadcn-studio.md': 'Shadcn-Studio-UI组件.md',
  'summarize.md': 'Summarize-sh-链接摘要.md',
  'summarize-sh.md': 'Summarize-sh-链接预览.md',
  'token-neovim-theme.md': 'Token-Neovim配色方案.md',
  'uselayouts.md': 'uselayouts-动画React组件.md',
  'vibe-trading.md': 'Vibe-Trading-金融AI交易.md',
  'whisper-flow.md': 'Whisper-Flow-实时转录.md',
  // articles
  'autoresearch-methodology.md': 'autoresearch迭代方法论.md',
  'buffett-letters-knowledge-base.md': '巴菲特致股东信知识库.md',
  'coding-agent-components.md': '编程智能体核心组件.md',
  'karpathy-ai-knowledge-base-tutorial.md': 'Karpathy-AI知识库落地教程.md',
  'karpathy-llm-wiki-improved.md': 'Karpathy-LLM-Wiki改进版.md',
  'vibe-coding-projects.md': 'Vibe-Coding实践项目.md'
};

const dirs = [
  { path: path.join(ROOT_DIR, 'knowledge', 'tools'), name: 'tools' },
  { path: path.join(ROOT_DIR, 'knowledge', 'articles'), name: 'articles' }
];

let totalRenamed = 0;

for (const dir of dirs) {
  console.log(`\n📁 处理 ${dir.name} 目录:\n`);

  const files = fs.readdirSync(dir.path).filter(f => f.endsWith('.md'));

  for (const filename of files) {
    const newName = nameMap[filename];

    if (!newName) {
      console.log(`⚠️  未找到映射: ${filename}`);
      continue;
    }

    const oldPath = path.join(dir.path, filename);
    const newPath = path.join(dir.path, newName);

    try {
      if (fs.existsSync(newPath)) {
        console.log(`⏭️  已存在: ${newName}`);
        continue;
      }
      fs.renameSync(oldPath, newPath);
      console.log(`✅ ${filename} → ${newName}`);
      totalRenamed++;
    } catch (error) {
      console.log(`❌ 失败: ${error.message}`);
    }
  }
}

// 更新 bookmarks.md
if (totalRenamed > 0) {
  console.log('\n📚 更新 bookmarks.md...');
  let content = fs.readFileSync(BOOKMARKS_FILE, 'utf8');

  for (const [oldName, newName] of Object.entries(nameMap)) {
    content = content.split(`./knowledge/tools/${oldName}`).join(`./knowledge/tools/${newName}`);
    content = content.split(`./knowledge/articles/${oldName}`).join(`./knowledge/articles/${newName}`);
    content = content.split(`[${oldName}]`).join(`[${newName}]`);
  }

  fs.writeFileSync(BOOKMARKS_FILE, content);
  console.log('   已更新归档链接');
}

console.log(`\n📊 完成: 重命名 ${totalRenamed} 个文件`);