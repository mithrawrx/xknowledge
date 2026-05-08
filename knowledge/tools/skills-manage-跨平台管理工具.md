---
title: "skills-manage - 跨平台 AI Agent Skills 管理工具"
type: tool
date_added: 2026-04-22
source: "https://github.com/iamzhihuix/skills-manage"
tags: [ai, claude-code, cursor, skills, desktop-app, tauri]
via: "Twitter书签 @gkxspace"
---

Tauri 桌面应用，统一管理 AI 编程工具的 Skills 文件。使用 ~/.agents/skills/ 作为中央仓库，其他平台通过软链接指向这里，一处修改全平台生效。

## 核心功能

- 中央 skill 库 + 各平台安装/卸载流程
- Claude Code 原生 skills 和市场插件 skills 统一视图
- Markdown 预览、源码查看、AI 解释生成
- Collections 功能：打包常用 Skills，一键安装到新平台
- 本地磁盘项目级 skill 库发现扫描
- 市场浏览、GitHub 仓库导入（带认证和重试）
- 大型 skill 库快速搜索：延迟查询、懒加载索引、虚拟化
- 双语 UI、Catppuccin 主题、强调色、引导流程

## 支持平台

支持 20+ AI 编程工具：Claude Code、Codex CLI、Cursor、Gemini CLI、Windsurf、OpenCode、KiloCode、Aider、Copilot、Augment 等。

支持 Lobster 系列：OpenClaw（开爪）、QClaw（千爪）、EasyClaw（简爪）、WorkBuddy（打工搭子）等。

## 隐私与安全

- 本地优先存储：元数据、collections、扫描结果、设置、AI 解释缓存都在本地 SQLite
- 无遥测：不含分析、崩溃报告、使用追踪
- 网络访问按需触发：仅在使用市场同步/导入功能时发起请求

## 相关链接

- [GitHub 仓库](https://github.com/iamzhihuix/skills-manage)
- [原始推文](https://x.com/gkxspace/status/2046938571395760307)