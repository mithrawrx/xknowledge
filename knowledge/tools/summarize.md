---
title: "Summarize"
type: tool
date_added: 2026-01-02
source: "https://summarize.sh"
tags: [summarization, cli, chrome-extension, content-extraction]
via: "Twitter 书签 @steipete"
---

Summarize 是双模式工具（CLI + Chrome 扩展），用于提取和总结网页内容、PDF、图片和媒体。采用真实提取管道加备用机制，支持多种 LLM 服务商（本地、付费和免费模型）。

包含智能链接总结工具栏，悬停时显示，帮助在打开前识别标题党或低价值内容。

## 核心功能

- **CLI 模式**: 可脚本化总结，JSON/Markdown 输出
- **Chrome 扩展**: 侧边栏一键总结标签页
- 真实提取管道，Firecrawl 备用
- 媒体管道，优先提取文字稿
- Whisper 备用处理视频/音频
- 服务商无关：本地网关、付费服务商、OpenRouter 免费模型
- 结构化输出，包含指标和诊断信息

## 支持内容类型

- URL 和网页
- PDF 文件
- 图片
- YouTube 视频（提取文字稿）
- 播客
- 音频/视频文件

## 安装和使用

```bash
npm i -g @steipete/summarize
summarize "https://example.com/article"
```

## 相关链接

- [官网](https://summarize.sh/)
- [GitHub 仓库](https://github.com/steipete/summarize)
- [文档](https://summarize.sh/docs)
- [原始推文](https://x.com/steipete/status/2006425901719023628)