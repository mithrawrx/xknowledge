---
name: fireworks-tech-graph
url: https://github.com/yizhiyanhua-ai/fireworks-tech-graph
stars: 1522
category: tool
tags: [claude-code, skill, diagram, svg, technical-diagram, ai-agent]
date_added: 2026-04-10
---

# fireworks-tech-graph - 技术图生成 Skill

Claude Code skill for generating production-quality SVG+PNG technical diagrams. 用一句话描述系统架构，即可生成专业级 SVG+PNG 技术图。

## 功能特点

- **7 种视觉风格**: Flat Icon、Dark Terminal、Blueprint、Notion Clean、Glassmorphism、Claude Official、OpenAI Official
- **14 种图表类型**: 支持所有 UML 图表类型，以及 AI/Agent 领域常见 Pattern（RAG、Mem0、Agentic Search、Multi-Agent、Tool Call 等）
- **智能语义编码**: 自动分配语义形状和颜色（蓝色主流程、橙色控制流、绿色读写）
- **高清导出**: SVG + 1920px PNG 一键导出

## 使用示例

```text
画一张 Multi-Agent 协作图：Orchestrator 调度 3 个 SubAgent，
分别负责搜索、计算和代码执行，最后汇聚到 Aggregator 输出结果，玻璃态风格
```

然后它会:
1. 识别图类型 → Agent 架构图
2. 分配语义形状 → Orchestrator 用六边形，Agent 用六边形，存储用圆柱体
3. 用语义颜色编码箭头 → 蓝色主流程、橙色控制流、绿色读写
4. 自动导出 SVG + 1920px PNG

## 来源

- 推文: https://x.com/brad_zhang2024/status/2042628758264517098
- GitHub: https://github.com/yizhiyanhua-ai/fireworks-tech-graph