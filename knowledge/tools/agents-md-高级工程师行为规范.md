---
title: "agents-md - 高级工程师行为规范"
type: tool
date_added: 2026-04-21
source: "https://github.com/TheRealSeanDonahoe/agents-md"
tags: [AI Agent, Claude Code, Codex, Cursor, 编程代理]
via: "Twitter书签 @QingQ77"
---

一个扔进项目根目录的 AGENTS.md 文件，让 Claude Code、Codex、Cursor 这类编程代理一上来就按高级工程师的方式干活。

## 核心功能

- **反抗盲目顺从**: 代理会在你犯错时反驳，不再盲目执行错误指令
- **最小必要修改**: 只做最小必要修改，不擅自重构无关代码
- **强制验证循环**: 先跑验证再报告完成，不声称"完成"后代码却跑不动
- **歧义主动询问**: 遇到歧义时主动询问，不自信地选错路径
- **精简规则**: 约200行，只有两个可编辑部分（项目上下文和项目经验积累）

## 使用场景

适用于所有使用 AI 编程代理的项目，帮助代理遵循"高级工程师"行为规范。通过创建 CLAUDE.md 和 GEMINI.md 符号链接，可实现一份文件统一管理所有代理的行为。

## 安装方式

```bash
curl -o AGENTS.md https://raw.githubusercontent.com/TheRealSeanDonahoe/agents-md/main/AGENTS.md
ln -s AGENTS.md CLAUDE.md
ln -s AGENTS.md GEMINI.md
```

## 设计理念

综合了 Karpathy 的四大编程代理失败原则和 Boris Cherny 的 Claude Code 工作流，解决 AI 编程代理的常见问题：
- 自信地选错路径
- 过度重构无关代码
- 完成报告但代码无法运行
- 歧义时猜测而非询问

## 相关链接

- [GitHub仓库](https://github.com/TheRealSeanDonahoe/agents-md)
- [原始推文](https://x.com/QingQ77/status/2046395996016419050)