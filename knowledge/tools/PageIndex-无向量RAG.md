---
title: "PageIndex - 无向量推理RAG的文档索引"
type: tool
date_added: 2026-05-05
source: "https://github.com/VectifyAI/PageIndex"
tags: [RAG, 知识库, 文档索引, AI, Python, 推理]
stars: 30047
language: Python
via: "Twitter书签 @mylifcc"
---

100% 开源的文档索引方案，抛弃传统 RAG 的 chunking + embedding + 向量检索三件套，采用树状索引实现基于推理的无向量 RAG。

## 核心功能

- **无向量检索**: 不再依赖 chunking、embedding 和向量数据库
- **树状索引**: 为文档构建层级化索引结构，通过推理定位内容
- **100% 开源**: Python 实现，可直接使用
- **轻量高效**: 省去向量化带来的存储和计算开销

## 设计理念

传统 RAG 被 chunking + embedding + 向量检索"绑架"，PageIndex 提出更优雅的思路：像人一样通过索引和推理来定位信息，而不是暴力向量匹配。

## 适用场景

- 需要精准检索而非模糊匹配的知识库
- 向量化成本过高或效果不佳的场景
- 追求可解释性的 RAG 应用

## 相关链接

- [GitHub仓库](https://github.com/VectifyAI/PageIndex)
- [原始推文](https://x.com/mylifcc/status/2051569275228545352)
