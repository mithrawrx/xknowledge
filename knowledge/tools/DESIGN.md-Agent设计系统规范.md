---
title: "DESIGN.md - Agent 设计系统规范"
type: tool
date_added: 2026-04-22
source: "https://github.com/google-labs-code/design.md"
tags: [design-system, agent, coding-agent, design-tokens, UI]
via: "Twitter书签 @Gorden_Sun"
---

Google 开源的设计系统规范文件格式，让 Agent 读完这份文件就能持续按照品牌规范生成 UI，能跨工具、跨项目复用。

## 核心概念

DESIGN.md 结合机器可读的设计 tokens（YAML front matter）和人类可读的设计说明（markdown 正文）。Tokens 给 Agent 精确数值，正文告诉它们为什么这些值存在以及如何应用。

## 文件结构

```markdown
---
name: Heritage
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
rounded:
  sm: 4px
  md: 8px
---

## Overview
Architectural Minimalism meets Journalistic Gravitas...
```

## CLI 工具

- **lint**: 验证 DESIGN.md，检查 token 引用、WCAG 对比度、结构问题
- **diff**: 比较两个版本，检测 token 级别和 prose 回退

## Token 类型

| 类型 | 格式 | 示例 |
|-----|-----|-----|
| Color | # + hex (sRGB) | "#1A1C1E" |
| Dimension | 数值 + 单位 | 48px, -0.02em |
| Token Reference | {path.to.token} | {colors.primary} |
| Typography | fontFamily, fontSize 等 | 对象结构 |

## 章节顺序

必须按此顺序：Overview → Colors → Typography → Layout → Elevation → Shapes → Components → Do's and Don'ts

## 相关链接

- [GitHub 仓库](https://github.com/google-labs-code/design.md)
- [原始推文](https://x.com/Gorden_Sun/status/2046947310631035017)