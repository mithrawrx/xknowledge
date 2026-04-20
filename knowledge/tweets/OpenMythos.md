---
title: OpenMythos
type: tweet
author: KyeGomezB
date: 2026-04-19
tags:
  - ai-model
  - pytorch
  - moe
  - transformer
---

# OpenMythos

An open-source, first-principles theoretical reconstruction of Claude Mythos, implemented in PyTorch.

## 概述

OpenMythos 是一个开源项目，基于第一性原理重建 Claude Mythos 架构。它实例化了一个带有混合专家(MoE)路由机制的循环 Transformer，通过权重共享和专家条件计算实现迭代深度。该项目探索了一个假设：通过固定参数化块的递归应用，结合稀疏专家激活，可以获得更好的效率-性能权衡和涌现的多步推理能力。

## 来源

- 推文: https://x.com/KyeGomezB/status/2045659150340723107