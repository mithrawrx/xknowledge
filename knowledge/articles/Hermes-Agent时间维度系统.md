---
title: "Hermes Agent：当工具开始拥有时间"
type: article
date_added: 2026-04-11
source: "https://x.com/i/article/2042805844459597824"
author: "BruceBlue"
tags: [hermes, agent, memory, skills, infrastructure, long-term]
via: "Twitter书签 @BruceBlue"
---

## 概述

一篇深入分析 Hermes Agent 的长文，探讨它如何将 Agent 从一次性会话推进成带有时间维度的持续性系统，实现记忆、技能沉淀、任务委派和结果回投的完整闭环。

## 核心框架

### 三层架构（blocmates框架）

1. **Knowledge Layer**: 内建 memory、会话搜索、skills、可选 Honcho
2. **Execution Layer**: child agents、工具系统、MCP、persistent access
3. **Output Layer**: cron、gateway、Slack/Discord/Telegram/Web UI

### 内建记忆系统

- `MEMORY.md`: 记录环境事实、约定、经验
- `USER.md`: 记录用户画像与偏好
- `state.db`: 历史会话库，支持全文检索

记忆注入方式：会话开始时作为 frozen snapshot 注入，新记忆落盘后下次会话生效。

### Skills System

渐进式披露的三层读取：
- Level 0: skills_list() - 技能目录
- Level 1: skill_view(name) - 完整技能内容
- Level 2: skill_view(name, path) - 具体参考文件

### OpenClaw迁移

```bash
hermes claw migrate --dry-run  # 预览迁移
hermes claw migrate            # 运行迁移
hermes claw migrate --preset full  # 包含 secrets
```

迁移对象映射：
- SOUL.md → ~/.hermes/SOUL.md
- MEMORY.md → ~/.hermes/memories/MEMORY.md
- skills → ~/.hermes/skills/openclaw-imports/

## 关键洞见

- "当工具开始拥有时间，它和人的关系也就变了"
- 真正迁移的是工作方式，不只是文件
- Agent 首次像协议一样拥有状态，像账户一样拥有历史
- 人不再是系统的 CPU，而是目标设定者、边界制定者与结果验收者

## 实战建议

1. 安装本体：`hermes model` / `hermes gateway setup` / `hermes`
2. 用 `--dry-run` 预览迁移再决定
3. 跑固定高频任务积累真实方法
4. 配消息出口和图形界面
5. 再考虑 Honcho、远程部署、多代理分工

## 相关链接

- [原文](https://x.com/i/article/2042805844459597824)
- [Hermes Agent官网](https://hermes-agent.nousresearch.com)
- [Web UI仓库](https://github.com/nesquena/hermes-webui)
- [原始推文](https://x.com/BruceBlue/status/2042868542421504399)