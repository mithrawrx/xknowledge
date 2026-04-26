---
title: "Claude Code Workflow Template"
type: tool
date_added: 2026-04-25
source: "https://github.com/runesleo/claude-code-workflow"
tags: [claude-code, workflow, memory-management, context-engineering]
via: "Twitter书签 @runes_leo"
---

经过3个月日常使用打磨的 Claude Code 工作流模板，包含记忆管理、上下文工程和任务路由系统。

## 核心功能

- **三层架构**: Layer 0 (自动加载规则) + Layer 1 (按需加载文档) + Layer 2 (热数据)
- **Hook 强制拦截**: v2 新增 Layer 3，在 Claude 准备动手前强制注入规则，不再赌它记得
- **任务路由**: 根据任务复杂度自动选择合适的模型层级 (Opus/Sonnet/Haiku/Codex/Local)
- **验证循环**: 强制验证后才报告完成，避免 "should work now" 的空承诺
- **进度自动保存**: 关闭窗口不丢工作，跨 session 不丢上下文

## 使用场景

适合每天使用 Claude Code 的开发者，尤其是：
- 需要跨多个项目协作
- 需要长时间 session 不漂移
- 想让 Claude 从"智能助手"变成"持续改进的开发伙伴"

## 架构细节

- `rules/`: 自动加载的行为规范 (~2K tokens)
- `docs/`: 按需加载的参考文档 (~1-3K each)
- `memory/`: 工作状态热数据 (today.md, projects.md, goals.md)
- `skills/`: 5个实战 Skill 定义
- `agents/`: 3个自定义 Agent (pr-reviewer, security-reviewer, performance-analyzer)

## 相关链接

- [GitHub仓库](https://github.com/runesleo/claude-code-workflow)
- [原始推文](https://x.com/runes_leo/status/2048013195563172162)