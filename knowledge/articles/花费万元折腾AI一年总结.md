---
title: "花费万元折腾AI一年总结"
type: article
date_added: 2026-04-12
source: "https://www.bestblogs.dev/en/article/83fa2a78"
author: "腾讯云开发者"
tags: [ai-agent, harness-engineering, claude-code, mac-toolchain, knowledge-management]
via: "Twitter书签 @KengGuangLong"
---

## 概述

一位腾讯云开发者分享了一年来在AI领域投入上万元的实践经验。涵盖Mac工具链优化、Harness Engineering方法论、Agent学习工作流搭建，以及Kaggle竞赛实战。

## 正文内容

### 工具层面

围绕 Mac 搭建高效工作环境：
- **AeroSpace** - 窗口管理
- **Raycast** - 快捷启动和剪贴板管理
- **Ghostty** - 终端
- **Cockpit** - 自研仪表盘，监控多台机器上的 AI Agent 状态

### Agent 用好方法论

演进路线：
1. **Prompt Engineering** - 写好提示词
2. **Context Engineering** - 管好 Agent 能看到的所有信息
3. **Spec-driven Development** - 先写清楚需求契约再让 Agent 动手
4. **Harness Engineering** - 给 Agent 搭一整套约束体系

核心比喻：Agent 是马，Harness 是缰绳。马跑得再快，没有缰绳就只会横冲直撞。

OpenAI 有团队用 3 个工程师、5 个月、完全零手写代码，靠搭建"缰绳"体系做出百万行代码产品。

### 让 Agent 替我学习

技术迭代太快，传统手动收集整理笔记方式已跟不上。搭建 Agent 工作流：
- AI 每天自动从十几个信息源抓取新闻
- 转录播客、提炼最佳实践
- 把知识沉淀到 Agent 自己的技能库

真正干活时，Agent 已是吸收了最新方案的"武装版"。

甚至让 Agent 帮打 Kaggle 比赛，春节旅游期间远程托管，4000支队伍里最高冲到第六名。

### Jagged Intelligence

Karpathy 提出的概念：AI 的能力分布跟人类很不一样。最好的办法是持续使用、慢慢建立直觉，把 AI 当成无话不谈的好朋友。

## 关键要点

- Harness Engineering 是 Agent 用好的关键方法论
- 让 Agent 自动学习、整理知识，形成"武装版"技能库
- Agent 可远程托管完成复杂任务（如 Kaggle 竞赛）
- AI 能力分布与人类不同，需要持续使用建立直觉

## 相关链接

- [原文](https://www.bestblogs.dev/en/article/83fa2a78)
- [原始推文](https://x.com/KengGuangLong/status/2043128498878111878)