---
title: "grpo-graph-extraction - Qwen GRPO图抽取RL微调"
type: tool
date_added: 2026-05-04
source: "https://github.com/wey-gu/grpo-graph-extraction"
tags: [GraphRAG, 知识图谱, GRPO, RL微调, Qwen, 蚂蚁]
stars: 69
language: Jupyter Notebook
via: "Twitter书签 @wey_gu"
---

使用 GRPO（Group Relative Policy Optimization）对 Qwen 模型进行知识图谱抽取能力的 RL 微调，将大模型的图谱抽取能力蒸馏到小模型上。

## 核心方法

- **RLFT + GRPO**: 使用强化学习微调技术优化图谱抽取能力
- **知识蒸馏**: 将教师模型（大模型）的图谱抽取能力蒸馏到小模型
- **Qwen 基础**: 基于 Qwen 模型进行微调
- **Jupyter Notebook**: 提供可交互的实验代码

## 研究背景

与蚂蚁 Deep GraphRAG 论文密切相关。Deep GraphRAG 提出分层图检索与自适应重排方法，该项目展示了如何通过 GRPO 训练小模型获得大模型的图谱抽取能力，降低 GraphRAG 落地成本。

## Deep GraphRAG 论文

- 论文: [Deep GraphRAG: A Balanced Approach to Hierarchical Retrieval and Adaptive Integration](https://arxiv.org/abs/2601.11144)
- 核心思路: 分层图检索 + 自适应重排，平衡检索效率与召回质量

## 相关链接

- [GitHub仓库](https://github.com/wey-gu/grpo-graph-extraction)
- [原始推文](https://x.com/wey-gu/status/2051262658612211734)
- [arXiv论文](https://arxiv.org/abs/2601.11144)
