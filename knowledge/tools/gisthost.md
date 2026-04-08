---
title: "Gisthost"
type: tool
date_added: 2026-01-02
source: "https://github.com/simonwillison/gisthost"
tags: [github-gists, html-preview, developer-tools]
via: "Twitter 书签 @simonw"
---

gistpreview.github.io 的分支和现代化版本，让浏览器能渲染存储在 GitHub Gist 中的 HTML 文件。Simon Willison 更新了原项目（最后一次提交距今已有 10 年），采用现代 Web 实践和改进的 CSS。

工作原理：通过 GitHub API 获取 Gist 内容并在浏览器中渲染为 HTML，绕过 GitHub 默认以纯文本形式提供 Gist 文件的内容类型头。

## 核心功能

- 在浏览器中渲染 GitHub Gist 的 HTML 文件
- 现代化 CSS，比原版 gistpreview UX 更佳
- 直接链接格式: `https://gisthost.github.io/?{GIST_ID}/{filename}`
- 支持存储在 Gist 中的任意 HTML 文件

## 使用场景

- 快速 HTML/CSS/JS 原型和分享
- 作品集展示
- 交互式文档
- HTML/CSS 教学演示

## 相关链接

- [GitHub 仓库](https://github.com/simonwillison/gisthost)
- [在线工具](https://gisthost.github.io/)
- [原始推文](https://x.com/simonw/status/2006851664935006385)
- [博客文章](https://simonwillison.net/2026/Jan/1/gisthost/)