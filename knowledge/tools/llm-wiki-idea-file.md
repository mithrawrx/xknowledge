---
title: "LLM Wiki Idea File"
type: tool
date_added: 2026-04-04
source: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
tags: [knowledge-management, llm, wiki, obsidian]
via: "Twitter书签 @karpathy"
---

Karpathy 分享的 LLM Wiki 概念，提出了在 Agent 时代的新分享模式：不分享具体代码或 App，而是分享"idea"——让对方的 Agent 根据需求自己定制和实现。

## 核心概念

### Idea File 模式

在 LLM Agent 时代，分享的方式发生变化：
- 传统方式：分享具体代码/App
- 新方式：分享抽象的 idea，让对方 Agent 定制实现

### LLM Wiki 架构

**数据摄入层 (raw/)**:
- 文章、论文、代码仓库、数据集、图片等原始资料
- 使用 Obsidian Web Clipper 剪藏网页文章
- 热键下载图片到本地，方便 LLM 引用

**Wiki 编译层**:
- LLM 增量编译 raw/ 数据为 wiki（.md 文件集合）
- 自动创建摘要、索引、概念条目
- 添加反向链接，建立知识关联

**前端界面 (IDE)**:
- Obsidian 作为可视化前端
- 查看 raw 数据、编译后的 wiki、可视化结果
- LLM 维护所有数据，用户很少直接编辑

**问答系统**:
- Wiki 规模足够大后（如 100 篇文章、40 万字）
- 可向 LLM 提复杂问题，自动研究答案
- LLM 自动维护索引文件和文档摘要
- 小规模下无需复杂 RAG

**输出格式**:
- Markdown 文件
- 幻灯片（Marp 格式）
- matplotlib 可视化图片
- 输出可"归档"回 wiki，知识越积越厚

**健康检查 (Linting)**:
- 发现不一致数据
- 补充缺失信息
- 发现关联，生成新文章候选
- 提升数据完整性

## 核心功能

- 增量构建：持续添加原始资料，wiki 不断扩展
- 自动交叉引用：概念自动链接
- 多格式输出：文章、幻灯片、图表
- Q&A 能力：基于 wiki 回答复杂问题
- 健康检查：发现矛盾、补全信息

## 使用场景

- 研究笔记整理与管理
- 个人知识库构建
- 项目文档自动维护
- 学习资料系统化整理

## 相关链接

- [GitHub Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [原始推文](https://x.com/karpathy/status/2040470801506541998)
- [引用的原始推文](https://x.com/karpathy/status/2039805659525644595)（LLM Wiki 概念介绍）