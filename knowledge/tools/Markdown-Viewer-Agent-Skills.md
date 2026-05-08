---
title: "Markdown Viewer Agent Skills"
type: tool
date_added: 2026-04-11
source: "https://github.com/markdown-viewer/skills"
tags: [Claude Code, 图表生成, 可视化, PlantUML]
via: "Twitter书签 @xicilion"
---

专为 AI Coding Agent 打造的图表生成技能集，14 个 skills 覆盖 5 种渲染引擎，一句话即可生成专业级可视化内容。

## 核心功能

- **14 个 Skills**: 覆盖 UML、云架构、网络拓扑、安全架构、数据分析、IoT、流程图等
- **5 种渲染引擎**: PlantUML、Vega-Lite、Infographic、Canvas、HTML/CSS 嵌入
- **6000+ 精选矢量图标**: mxgraph stencil 图标库
- **100+ 图例模板**: 架构图、流程图、状态图、部署图等
- **一键安装**: `npx skills add markdown-viewer/skills`

## 使用场景

- 技术文档中需要快速插入架构图、流程图
- AI Agent 辅助开发时自动生成可视化内容
- 企业架构文档、微服务架构图的快速绘制
- 数据可视化和信息图表的生成

## 技术细节

### 独立 Skills（带代码围栏）

| Skill | Code Fence | 用途 |
|-------|------------|------|
| vega | `vega-lite` / `vega` | 数据图表（柱状、折线、热力图等）|
| infographic | `infographic` | 70+ YAML 模板（KPI 卡片、时间线、SWOT 等）|
| canvas | `canvas` | JSON Canvas 格式的思维导图、知识图谱 |

### PlantUML Skills

| Skill | 用途 |
|-------|------|
| uml | 14 种 UML 图（类图、序列图、状态图等）|
| cloud | AWS/Azure/GCP/K8s 云架构图标 |
| network | 网络拓扑（Cisco 设备图标）|
| security | IAM、加密、防火墙架构 |
| archimate | 企业架构 ArchiMate 建模 |
| bpmn | 业务流程建模 |
| data-analytics | ETL/数据仓库/ML 流程图 |
| iot | IoT 设备/边缘计算图 |
| mindmap | PlantUML 原生思维导图 |

### HTML/CSS 嵌入 Skills

| Skill | 用途 |
|-------|------|
| architecture | 13 layouts × 12 styles 层级架构图 |
| infocard | 13 layouts × 14 styles 信息卡片 |

## 相关链接

- [GitHub仓库](https://github.com/markdown-viewer/skills)
- [原始推文](https://x.com/xicilion/status/2042848369450848424)