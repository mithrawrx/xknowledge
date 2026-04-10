---
title: "Hermes Agent"
type: tool
date_added: 2026-04-07
source: "https://github.com/NousResearch/hermes-agent"
tags: [ai-agent, llm, knowledge-management, nous-research]
via: "Twitter书签 @wangray"
---

Hermes Agent 是 Nous Research 开源的自进化 AI 智能体框架，具有闭环学习循环能力。现已内置 Karpathy 的 LLM-Wiki 功能，可直接创建知识库。GitHub 星标超过 33,720。

## 核心功能

- **闭环学习循环** - Agent 自动从经验创建技能，使用过程中自我改进，建立用户模型
- **内置 LLM-Wiki** - 支持 Karpathy 的知识管理方法论，用 `/llm-wiki` 命令创建知识库
- **多平台支持** - Telegram、Discord、Slack、WhatsApp、Signal、CLI 等多入口
- **多模型切换** - 支持 Nous Portal、OpenRouter、OpenAI、自定义 endpoint 等
- **自动技能生成** - 完成复杂任务后自动沉淀为技能文档，下次直接调用
- **双层记忆体系** - MEMORY.md 常驻关键信息 + SQLite 全量历史检索

## 使用场景

- 个人知识库管理（配合 Obsidian）
- 长期 AI 助手培养（越用越聪明）
- 多渠道统一 AI 接入
- AI 研究和训练轨迹生成

## 快速开始

```bash
# 安装
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 启动对话
hermes

# 使用 LLM-Wiki
hermes update
# 然后在对话中输入: /llm-wiki <research topic>
```

## 相关链接

- [GitHub仓库](https://github.com/NousResearch/hermes-agent)
- [官方文档](https://hermes-agent.nousresearch.com/docs/)
- [原始推文](https://x.com/wangray/status/2041384982485315737)