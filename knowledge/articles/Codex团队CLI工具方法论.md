---
title: "Codex 团队的 CLI 工具方法论"
type: article
date_added: 2026-04-11
source: "https://developers.openai.com/codex/use-cases/agent-friendly-clis"
author: "Nick Baumann (OpenAI Codex Team)"
tags: [codex, cli, agent-tools, mcp, skill]
via: "Twitter书签 @dotey"
---

## 概述

OpenAI Codex 团队的 Nick Baumann 分享了一个核心方法论：与其每次把一堆文档、日志、API 输出丢给 AI 去啃，不如给它造几个专用的命令行小工具。

## 核心思想

MCP 连接器解决的是"能不能访问"的问题，但原始数据太大、太杂时，AI 处理也费劲。更好的做法是把常用操作封装成：
- 带参数的 CLI 命令
- 输出稳定 JSON
- 有帮助文档
- 可预测的错误处理

Codex 本身擅长用命令行：搜索、加 flag 筛选、管道输出、组合命令。

## 实践案例

### 1. codex-threads：检索历史对话

在本地建索引，搜索、定位、读取历史会话。典型用法：找到做得好的对话，提炼成 skill。

```bash
codex-threads --json sync
codex-threads --json messages search "build a CLI" --limit 20
codex-threads --json threads resolve "tweet idea"
codex-threads --json threads read <session-id>
```

### 2. slack-cli：精准找 Slack 信息

搜索、定位具体消息链、拉上下文、引用关键消息。

```bash
slack-cli search "app server auth" --all-pages --max-pages 3 --json
slack-cli resolve-permalink "https://openai.slack.com/archives/..."
slack-cli read-thread L143 123522523239.633199 --json
```

### 3. typefully-cli：社交内容管理

只暴露常用操作，配套 skill 规定：不许自动发布、排期或删除，除非明确要求。

```bash
typefully-cli --json drafts list --social-set <id> --limit 20
typefully-cli --json drafts create --social-set <id> --body-file draft.json
```

## 关键要点

- 如果你反复给 AI 喂同一类乱糟糟的数据，就给它造个命令
- CLI + Skill 组合：CLI 提供操作，Skill 规定使用规则
- 输出 JSON 格式，方便 AI 解析和组合

## 适用范围

这个思路对 Claude Code 同样适用。核心一句话：反复解释同一类数据 = 该造个 CLI 了。

## 相关链接

- [原文](https://developers.openai.com/codex/use-cases/agent-friendly-clis)
- [cli-creator skill](https://github.com/openai/skills/tree/main/skills/.curated/cli-creator)
- [原始推文](https://x.com/dotey/status/2042777337398210713)