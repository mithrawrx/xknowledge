---
title: "Fireworks Tech Graph 技术图生成器"
type: tool
date_added: 2026-04-12
source: "https://github.com/yizhiyanhua-ai/fireworks-tech-graph"
author: "烟花老师"
stars: 1522
tags: [claude-code, skill, svg, diagram, visualization, technical-diagram]
via: "Twitter书签 @brad_zhang2024"
---

## 概述

烟花老师开源的 Claude Code Skill，用自然语言描述系统架构，自动生成出版物级别的 SVG + PNG 技术图。支持7种视觉风格、14种图表类型，内置AI/Agent领域知识（RAG、Mem0、Multi-Agent等）。

## 核心功能

### 一句话生成技术图

```
「画一张 Multi-Agent 协作图：Orchestrator 调度 3 个 SubAgent，
分别负责搜索、计算和代码执行，最后汇聚到 Aggregator 输出结果，
玻璃态风格」
```

流程：
1. 识别图类型 → Agent架构图
2. 分配语义形状 → Orchestrator用六边形，Agent用六边形，存储用圆柱体
3. 语义颜色编码箭头 → 蓝色主流程、橙色控制流、绿色读写
4. 自动导出 SVG + 1920px PNG

### 7种视觉风格

| 风格 | 描述 |
|------|------|
| Style 1 - Flat Icon | 白底、语义箭头、分层系统 |
| Style 2 - Dark Terminal | 暗底、霓虹强调、等宽字体 |
| Style 3 - Blueprint | 深蓝底、网格线、青色描边 |
| Style 4 - Notion Clean | 极简白、单强调色 |
| Style 5 - Glassmorphism | 暗渐变底、毛玻璃卡片 |
| Style 6 - Claude Official | 暖奶油底、Anthropic品牌色 |
| Style 7 - OpenAI Official | 纯白底、OpenAI品牌色 |

### 内置AI/Agent领域知识

- RAG架构
- Mem0记忆系统
- Agentic Search
- Multi-Agent协作
- Tool Call流程
- 支持14种UML图表类型

### V3版本更新

- Codex完美兼容（不再报错）
- 7种style升级为有版式语言的生成系统
- 解决连线穿框、标签压图、路径机械、构图松散问题
- 抽象为正式能力：style_overrides、header_prefix、side_label等

## 安装使用

```bash
# 一句话安装
npx skills add yizhiyanhua-ai/fireworks-tech-graph

# 一句话升级
npx skills add yizhiyanhua-ai/fireworks-tech-graph --force
```

## 关键要点

- 用自然语言描述即可生成专业技术图
- 7种风格覆盖从极简到品牌定制
- 内置AI/Agent领域Pattern，无需手动设计形状
- 导出1920px PNG，适合文档和演示

## 相关链接

- [GitHub仓库](https://github.com/yizhiyanhua-ai/fireworks-tech-graph)
- [引用推文](https://x.com/brad_zhang2024/status/2042628758264517098)
- [原始推文](https://x.com/brad_zhang2024/status/2043322925072388408)