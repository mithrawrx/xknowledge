---
title: "Switzy Git身份管理工具"
type: tool
date_added: 2026-04-10
source: "https://github.com/yefga/Switzy"
tags: [macos, git, ssh, identity-management]
via: "Twitter书签 @jaywcjlove"
stars: 145
language: Swift
---

Switzy 是一个轻量级 macOS 菜单栏应用，专为需要管理多个 Git 身份的开发者设计。一键切换不同的 Git 配置（姓名、邮箱、SSH 密钥），确保每次提交使用正确的凭证。

## 核心功能

- **即时身份切换** - 从菜单栏一键切换工作、个人、项目专用 Git 配置
- **SSH 密钥管理** - 在应用内直接生成和管理 SSH 密钥，无需终端操作
- **Premium UI** - 现代 glassmorphic 界面，完美融入 macOS
- **自动配置** - 切换时自动更新全局或本地 `.gitconfig`
- **Sparkle 更新** - 自动通知新版本，一键更新

## 安装方式

### Homebrew（推荐）

```bash
brew tap yefga/tap
brew install --cask switzy
```

### 手动安装

从 [Releases](https://github.com/yefga/Switzy/releases) 下载 DMG，拖入 Applications。

## 安全特性

官方发布版本经过 Apple 公证（Notarized），无安全警告。源码构建需执行"右键 → 打开"流程。

## 相关链接

- [GitHub仓库](https://github.com/yefga/Switzy)
- [原始推文](https://x.com/jaywcjlove/status/2042573948668514554)