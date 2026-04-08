---
title: "Claude Island"
type: tool
date_added: 2026-04-05
source: "https://github.com/farouqaldori/claude-island"
tags: [macos, swift, claude-code, notifications, dynamic-island, productivity]
via: "Twitter 书签 @dotey"
---

Claude Island 是一款原生 macOS 应用，使用 Swift 编写，通过 Dynamic Island（现代 Mac 的刘海区域）提供 Claude Code 通知。它在 Dynamic Island 中显示可展开的覆盖层，让用户无需切换上下文即可监控 Claude Code 的活动。

这款工具对于频繁使用 Claude Code 的开发者特别有价值，希望在不打断当前工作流程的情况下了解后台任务、完成状态和状态更新。

## 核心功能

- **Dynamic Island 集成** - 原生 macOS Dynamic Island 通知支持
- **Swift 原生应用** - 完全使用 Swift 构建，优化 macOS 性能
- **可展开覆盖层** - 点击从刘海区域展开通知详情
- **无上下文切换** - 不离开当前应用即可监控 Claude Code
- **实时状态** - 跟踪 Claude Code 活动和完成情况
- **轻量级** - 最小化系统资源占用

## 架构设计

应用与 Claude Code 的通知系统集成：
1. 监听 Claude Code 事件和状态变化
2. 在 Dynamic Island 区域显示通知
3. 提供可展开的 UI 显示详细信息
4. 支持多个并发通知

## 技术细节

- **语言:** Swift
- **平台:** macOS（需要支持 Dynamic Island 的 Mac）
- **仓库:** github.com/farouqaldori/claude-island
- **Star 数:** 1726+
- **使用场景:** Claude Code 工作流监控、效率提升

## 使用场景

- 监控长时间运行的 Claude Code 任务
- 跟踪后台 Claude Code 操作
- Claude Code 工作时保持高效
- 无需切换窗口快速查看状态

## 相关链接

- [GitHub 仓库](https://github.com/farouqaldori/claude-island)
- [原始推文 @dotey](https://x.com/dotey/status/2040850151405707702)
- [相关推文 @i5ting](https://x.com/i5ting/status/2041006014603182089)