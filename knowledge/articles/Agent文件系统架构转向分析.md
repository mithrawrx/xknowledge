---
type: article
title: Agent 文件系统：从喂给模型记忆到让模型自己翻文件
source: article
url: https://yage.ai/share/agent-filesystem-survey-20260507.html
author: 鸭哥 (@grapeot)
date: Friday, May 8, 2026
tags: ["AI Agent", "文件系统", "MCP", "Anthropic", "Vercel", "Manus"]
---

# Agent 文件系统：从喂给模型记忆到让模型自己翻文件

**Source**: [Agent 文件系统：从喂给模型记忆到让模型自己翻文件](https://yage.ai/share/agent-filesystem-survey-20260507.html)

**Via**: @grapeot (鸭哥) on Friday, May 8, 2026

## 概述

Anthropic 将 MCP 工具定义改为让 agent 从文件系统按需加载，token 从 150K 降至 2K，节省 98.7%。文章对比了 Anthropic、Vercel、Manus 等四家公司在 agent 文件系统方向的设计判断差异，分析了这一架构转向的前因后果和四个盲区。

## 核心观点

- Anthropic 的 MCP 工具加载优化：token 从 150K 降到 2K
- Vercel 模板主张不使用向量数据库
- Manus 的核心是将文件系统作为 context
- 四家公司各自的设计判断存在显著差异

## 收藏原因

AI Agent 架构设计的重要转向分析，文件系统作为上下文管理的新范式，对构建高效 agent 系统有指导意义。
