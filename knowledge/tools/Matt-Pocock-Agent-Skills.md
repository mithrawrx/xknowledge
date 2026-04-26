---
title: "Matt Pocock's Agent Skills"
type: tool
date_added: 2026-04-26
source: "https://github.com/mattpocock/skills"
tags: [agent-skills, claude-code, engineering, tdd, planning]
via: "Twitter书签 @vikingmute"
---

TS 大神 Matt Pocock 的个人 Agent Skills 集合，直接从他的 .claude 目录扒出来的实战技能，没有过度包装。

## 核心功能

**Planning & Design:**
- `to-prd`: 将对话上下文直接合成 PRD 并提交 GitHub issue
- `to-issues`: 将任何计划/规范拆解成可独立抓取的 GitHub issues
- `grill-me`: **让 AI 疯狂毫不留情地审视你的计划**，直到每个分支决策都想清楚达成共识
- `design-an-interface`: 并行子代理生成多个截然不同的接口设计
- `request-refactor-plan`: 通过用户访谈创建详细重构计划

**Development:**
- `tdd`: 红绿重构循环的测试驱动开发
- `triage-issue`: 探索代码库调查 bug，定位根因并提交修复计划
- `improve-codebase-architecture`: 发现代码库的深化机会

**Tooling & Setup:**
- `setup-pre-commit`: Husky + lint-staged + Prettier + 类型检查 + 测试
- `git-guardrails-claude-code`: 阻止危险 git 命令的 Claude Code hooks

**Writing & Knowledge:**
- `write-a-skill`: 创建结构化的新 skills
- `edit-article`: 重构文章、改善清晰度、精简文字
- `ubiquitous-language`: 从对话提取 DDD 风格的通用语言词汇表
- `obsidian-vault`: 搜索、创建、管理 Obsidian 笔记

## 使用场景

适合想要学习"真正的工程师思维"的开发者。这些 skills 不是为教学而造的完美框架，而是 Matt 日常使用的实战工具集。

## 特点

- 有活人气息，直接从个人配置扒出
- 从 Planning → Development → Tooling → Writing 的完整工程师工作流
- `grill-me` 特别值得体验：AI 会毫不留情地审视你的每个决策

## 相关链接

- [GitHub仓库](https://github.com/mattpocock/skills)
- [原始推文](https://x.com/vikingmute/status/2048301287545184658)
- [Newsletter订阅](https://www.aihero.dev/s/skills-newsletter)