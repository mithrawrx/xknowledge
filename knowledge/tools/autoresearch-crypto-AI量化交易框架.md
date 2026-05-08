---
title: "autoresearch-crypto"
type: tool
date_added: 2026-05-08
source: "https://github.com/chencore/autoresearch-crypto"
tags: [quant, crypto, AI, trading, evolution]
via: "Twitter书签 @wherecall1"
---

AI 驱动的加密货币量化交易策略自动研究框架。基于 Karpathy 的 autoresearch 范式改造，核心思路是让 AI Agent 自主从 11 种策略原型中搜索、竞争、进化出最优解，而非人工编写策略。

## 核心功能

- **11 种内置策略**: 混合动量、均值回归、剥头皮、网格、趋势跟踪、自适应混合等，覆盖震荡市、趋势市、高波动市
- **ATLAS 进化引擎**: 4 个 Agent 并行进化不同策略原型，优胜劣汰
- **GEPA 反思式学习**: 策略亏了会自动复盘记录假设，防止路径依赖
- **市场状态检测**: 自动分类趋势/震荡/高波动市场
- **多时间框架分析**: 跨 1m/5m/15m/1h/4h 时间框架集成信号
- **Maker/Taker 费率优化**: 混合执行，入场/止盈用 POST_ONLY(Maker)，止损用 IOC(Taker)
- **Walk-Forward 验证**: 多样本窗外测试
- **实盘对接**: 支持 Nado DEX 和 OKX

## 评分机制

评分函数不是裸夏普比率，而是 `Sharpe × (1-|MaxDD|)^-1 × TradePenalty × EdgeGuard`，防止 AI 为了刷收益去赌高杠杆。

## 使用流程

1. `prepare_crypto.py` 下载数据（ETHUSDT 5m 60d，约5分钟）
2. `search_eth_optimal.py` 策略搜索（AI 跑约20分钟）
3. `backtest_quant.py` 回测验证（带 Maker/Taker 费率 + 滑点建模）
4. `live_nado_quant.py` / `live_okx_quant.py` 实盘对接

## 技术栈

Python 3.10+，uv 包管理，可选 NVIDIA GPU（8GB+ VRAM 推荐）

## 相关链接

- [GitHub仓库](https://github.com/chencore/autoresearch-crypto)
- [原始推文](https://x.com/wherecall1/status/2052709653709254941)
