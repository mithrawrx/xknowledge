---
title: "GBrain"
type: tool
date_added: 2026-04-10
source: "https://github.com/garrytan/gbrain"
tags: [ai-agent, knowledge-base, openclaw, hermes, memory]
via: "Twitter书签 @garrytan"
stars: 6163
language: TypeScript
---

GBrain 是 Garry Tan 开发的 AI Agent Brain 系统，让你的 AI agent 具备完美记忆能力，可管理 10,000+ markdown 文件的知识库。

## 核心功能

- **全量记忆召回** - Agent 每次响应前先查询知识库，对话后自动写入新知识
- **PGLite 数据库** - 无需服务器，2 秒启动本地数据库
- **向量搜索** - 支持 OpenAI embeddings，可选 Anthropic 查询扩展
- **自动技能生成** - 从对话中自动沉淀为技能文档
- **集成生态** - 支持邮件、日历、语音、Twitter 等数据源

## 使用场景

- 个人知识库管理（会议、邮件、想法、日程）
- OpenClaw/Hermes Agent 的记忆系统
- AI agent 越用越聪明的底层支持

## 快速开始

```bash
# 安装
git clone https://github.com/garrytan/gbrain.git ~/gbrain && cd ~/gbrain
curl -fsSL https://bun.sh/install | bash
bun install && bun link

# 初始化
gbrain init
gbrain import ~/brain/ --no-embed
gbrain embed --stale
gbrain query "key themes across these documents?"
```

## 关键特性

- **~30 分钟部署** - Agent 帮你完成配置，只需回答 API key 问题
- **需要前沿模型** - 推荐 Claude Opus 4.6 或 GPT-5.4 Thinking
- **MIT 开源** - 完全可审计，支持自定义扩展

## 相关链接

- [GitHub仓库](https://github.com/garrytan/gbrain)
- [OpenClaw](https://openclaw.ai)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [原始推文](https://x.com/garrytan/status/2042497872114090069)