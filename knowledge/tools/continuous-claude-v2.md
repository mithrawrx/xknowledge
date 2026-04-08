---
title: "Continuous Claude v2"
type: tool
date_added: 2026-01-02
source: "https://github.com/parcadei/Continuous-Claude-v2"
tags: [claude-code, context-management, agents, mcp, state-persistence]
via: "Twitter 书签 @parcadei"
---

Continuous Claude v2 是一个 Python 框架，解决 Claude Code 工作流中的上下文管理和会话连续性挑战。通过持久状态、账本式跟踪和隔离上下文窗口，实现复杂多会话工作流、智能体编排和高效 token 管理。

对于构建复杂 Claude Code 应用的开发者特别有价值，需要在会话间保持状态、协调多个智能体、避免 MCP 工具执行污染上下文。

## 核心功能

- **会话连续性** - 通过账本和交接在会话间保持状态
- **账本系统** - 持久状态跟踪，结构化推理历史
- **交接协议** - 无上下文丢失地从上一会话恢复工作
- **MCP 执行隔离** - 运行 MCP 代码不污染主上下文
- **智能体编排** - 协调多个子智能体，隔离上下文窗口
- **钩子系统** - SessionStart、PreToolUse、PostToolUse 等生命周期钩子
- **Token 效率** - 紧凑账本和智能上下文加载
- **产物索引** - 跟踪会话间的产物和成果
- **Braintrust 集成** - 会话追踪和复合学习

## 架构

框架提供完整会话生命周期：
1. **SessionStart** - 加载账本、加载交接、呈现学习
2. **Working** - PreToolUse 预检、PostToolUse 处理、UserPrompt
3. **PreCompact** - 自动交接生成、可选手动阻塞
4. **SessionEnd** - 标记成果、清理、学习

## 核心概念

- **账本 (Ledger)** - 持久连续性记录，包含推理和成果
- **交接 (Handoff)** - 会话间恢复上下文，带产物索引
- **技能 (Skills)** - 可复用操作（commit、create_handoff、resume_handoff）
- **智能体 (Agents)** - 隔离上下文窗口的自治子智能体
- **钩子 (Hooks)** - 自定义会话逻辑的扩展点
- **产物索引** - SQLite+FTS5 用于产物搜索和成果跟踪

## 技术细节

- **语言:** Python
- **仓库:** github.com/parcadei/Continuous-Claude-v2
- **Star 数:** 1400+
- **使用场景:** 多会话开发、智能体工作流、复杂 Claude Code 项目

## 使用场景

- 构建生产级 Claude Code 应用
- 多会话功能开发，状态延续
- 编排多个 AI 智能体处理复杂任务
- 研究和实验工作流
- token 高效的长期智能体系统

## 相关链接

- [GitHub 仓库](https://github.com/parcadei/Continuous-Claude-v2)
- [原始推文](https://x.com/parcadei/status/2005755875701776624)