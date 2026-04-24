---
title: "Auto-Quant"
type: tool
date_added: 2026-04-23
source: "https://github.com/TraderAlice/Auto-Quant"
tags: [量化交易, AI Agent, FreqTrade, 自动化策略]
via: "Twitter书签 @0xcherry"
---

LLM-native 自主量化研究循环，将 Karpathy 的 autoresearch 模式应用于 FreqTrade 策略。Agent 自动构建和迭代量化交易策略，通过多次迭代观察哪些模式在特定资产组合上有效。

## 核心功能

- **自主研究循环**: Agent 修改策略 → 运行回测 → 检查结果 → 保持或丢弃 → 循环迭代
- **多策略并行**: v0.2.0+ 支持最多3个策略槽位同时迭代
- **多时间框架**: v0.3.0 支持 1h/4h/1d 时间框架，通过 FreqTrade 的 `@informative` 装饰器
- **多资产组合**: BTC、ETH、SOL、BNB、AVAX 5对组合
- **防过拟合**: Agent 能识别 oracle-gaming（如 ROI-clipping）并主动丢弃
- **结果追踪**: `results.tsv` 事件日志记录每次迭代，`analysis.ipynb` 提供后验分析

## 版本演进

- **v0.1.0**: 单文件变异，99轮迭代，Sharpe 1.44 但大部分是 oracle gaming（真实 edge 0.19）
- **v0.2.0**: 多策略槽位，5范式测试/3保留/0 Goodhart尝试，峰值 clean Sharpe 0.67（比 v0.1.0 真实 edge 提升 3.5倍）
- **v0.3.0**: 多时间框架 + 多资产组合，支持跨时间框架信号和跨资产信号

## 使用场景

- 量化策略自动化研究与迭代
- LLM Agent 应用于金融交易的验证实验
- 学习 Agent-driven autoresearch 模式在量化领域的应用

## 技术架构

- `config.json`: FreqTrade 配置（固定，Agent 不触碰）
- `prepare.py`: 一次性数据下载（Binance OHLCV）
- `run.py`: 批量回测运行器
- `user_data/strategies/`: Agent 拥有的策略目录（最多3个 .py 文件）
- `program.md`: 自主研究指令，LLM Agent 读取执行

## 相关链接

- [GitHub仓库](https://github.com/TraderAlice/Auto-Quant)
- [原始推文](https://x.com/0xcherry/status/2047258070104047707)
- [FreqTrade 官网](https://www.freqtrade.io/)