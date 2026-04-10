---
title: "Karpathy 的 LLM Wiki 火了，我改造了一下，比原版更好用"
type: article
date_added: 2026-04-07
source: "https://x.com/i/article/2041163929674715136"
author: "范凯说 AI | Kai on AI"
tags: [llm-wiki, knowledge-management, karpathy, obsidian]
via: "Twitter书签 @fankaishuoai"
---

## 概述

范凯分享了对 Karpathy LLM Wiki 方案的改造实践。他从两层架构扩展为五层（Notes → Knowledge → Software → LifeOS → Writing），增加了输入统一入口和产出层，并引入确认机制让 AI 先报计划再执行，解决了自动分类不准确的问题。

## 正文内容

Karpathy 的 LLM Wiki 方案全网刷屏，我拿来跑了一遍。方案很漂亮，但对内容创作者来说有三个硬伤。改了三个地方之后，900 多篇笔记现在全部自动管理。

### Karpathy 想解决什么问题

一句话：别让 AI 每次都从零开始帮你想，让它帮你把知识攒起来。

知识像滚雪球一样越攒越多，交叉引用越来越密，AI 对你的领域理解越来越深。

### Karpathy 方案的核心设计

**三层架构**：原始输入、加工产物、操作规则，三件事分开管。

**三个核心动作**：
- Ingest（入库）— 新资料进来时，AI 读一遍，写摘要，判断该放哪
- Query（查询）— 问 AI 问题，在 Wiki 里搜相关内容综合回答，同时改进知识库
- Lint（健康检查）— 定期扫描，找出孤岛页面、过时内容、矛盾概念

### 我的方案：五层架构

从三层变成五层：

```
Notes/（输入层）
  ├── Clippings/    网页剪藏
  ├── Inbox/        碎片想法
  └── Conversation/ 跟 AI 的有价值对话
        ↓ Ingest 分发
Knowledge/（知识层）    方法论、读书笔记、原创思考
Software/（技能层）      工具技巧、开发思考、产品研发计划
LifeOS/（行动层）        投资、健康、保险、联系人
        ↓ 素材调用
Writing/（产出层）       视频脚本、文章、运营 SOP
```

**关键改进**：
1. 输入只留一个口子 — 全部先进 Notes/，统一流程分发
2. 确认机制 — AI 先列出分发方案，我看一眼确认了再动手
3. 交叉引用少即是多 — 只建最强关联，不追求覆盖率

### 实践原则

1. 一个入口，多个终点
2. 结构够用就行
3. AI 建议，你拍板
4. 链接宜少不宜多
5. 对话也是知识
6. 存着不用等于没有
7. 索引到目录，不到文件
8. 不绑定工具（AGENTS.md 兼容多种 Agent）

## 关键要点

- Karpathy 方案优雅但不适合内容创作者，缺少产出层
- 五层架构让知识落地变成行动和产品
- 确认机制避免 AI 分类不准确导致的返工
- 链接只建强关联，维护成本低

## 相关链接

- [原文](https://x.com/i/article/2041163929674715136)
- [Karpathy's LLM Wiki Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [原始推文](https://x.com/fankaishuoai/status/2041387467040055685)