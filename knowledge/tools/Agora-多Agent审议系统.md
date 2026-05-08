---
title: "Agora 多Agent审议系统"
type: tool
date_added: 2026-04-10
source: "https://github.com/geekjourneyx/agora"
tags: [claude-code, multi-agent, deliberation, philosophy, decision-making]
via: "Twitter书签 @seekjourney"
stars: 107
---

Agora 是一个基于 Claude Code 构建的多 Agent 审议系统，覆盖工程、商业、人生抉择、关系、心理、创作六大领域。31 位思想家通过黑格尔正反合结构进行深度辩证。

## 核心功能

- **智能路由** - `/agora` 一个入口，自动分析问题导向正确审议室
- **31 位思想家** - 波普尔、康德、尼采、萨特、荣格、庄子等跨东西方哲学家
- **黑格尔正反合** - Thesis → Antithesis → Synthesis 辩证升华，不只是投票
- **两次交互** - 审议中确认理解、决定深度，全程可引导
- **自包含** - 无需安装其他技能，开箱即用

## 六大审议室

| 审议室 | 命令 | 领域 | 典型问题 |
|--------|------|------|---------|
| 锻造坊 | `/forge` | 工程与架构 | 架构决策、代码问题 |
| 集市 | `/bazaar` | 商业与战略 | 定价、市场策略 |
| 神谕所 | `/oracle` | 人生十字路口 | 辞职、人生方向 |
| 火炉边 | `/hearth` | 关系与家庭 | 情感、家庭沟通 |
| 诊疗室 | `/clinic` | 心理韧性 | 拖延、倦怠恢复 |
| 工作坊 | `/atelier` | 创造性突破 | 写作卡壳、创作流程 |

## 使用模式

```text
/agora 要不要辞职去创业？          # 智能路由
/forge --quick "架构问题"          # 快速模式
/forge --duo "张力探索"            # 双人辩证
/oracle --full "人生问题"          # 全面板
```

## 快速开始

```bash
# 安装
npx skills add https://github.com/geekjourneyx/agora

# 或手动安装
git clone https://github.com/geekjourneyx/agora.git ~/.claude/skills/agora
```

## 审议协议

8 步结构化流程：解析 → 证据收集 → 问题重述 → 第一轮分析 → 深度门控 → 黑格尔交叉审查 → 协调者综合 → 最终裁决。

## 相关链接

- [GitHub仓库](https://github.com/geekjourneyx/agora)
- [Council of High Intelligence](https://github.com/0xNyk/council-of-high-intelligence)
- [原始推文](https://x.com/seekjourney/status/2042505013478719724)
