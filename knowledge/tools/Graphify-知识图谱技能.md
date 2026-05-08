---
title: "Graphify - 知识图谱生成技能"
type: tool
date_added: 2026-04-11
source: "https://github.com/safishamsi/graphify"
stars: 23473
language: Python
tags: [knowledge-graph, claude-code, skill, rag, graphrag]
via: "Twitter书签 @泊舟"
---

Graphify 是一个 AI coding assistant skill，在 Claude Code、Codex、OpenCode、Cursor、Gemini CLI 等工具中输入 `/graphify`，就能将代码、文档、论文、图片、视频自动整理成可交互的知识图谱。

## 核心功能

- **三阶段处理流程**:
  1. AST 解析代码结构（无需LLM，本地运行）
  2. Whisper 本地转录音视频
  3. Claude 子代理并行提取文档、论文、图片的语义关系

- **输出产物**:
  - `graph.html`: 可交互图谱，点击节点、搜索、按社区过滤
  - `GRAPH_REPORT.md`: 关键节点、意外关联、建议问题
  - `graph.json`: 持久化图谱，数周后可查询无需重读
  - `cache/`: SHA256 缓存，重运行只处理变更文件

- **关系标注**: EXTRACTED（直接提取）、INFERRED（推断，含置信度）、AMBIGUOUS（待审核）

## 技术特点

- **无嵌入聚类**: 使用 Leiden 社区检测，基于图拓扑而非向量嵌入
- **多模态支持**: 代码、PDF、Markdown、截图、白板照片、视频音频
- **22种语言**: Python、JS、TS、Go、Rust、Java、C++等

## Karpathy 响应

这是对 Karpathy `/raw` 知识库方法的工程实现，71.5x 更少 tokens 每次查询，跨会话持久化。

## 相关链接

- [GitHub仓库](https://github.com/safishamsi/graphify)
- [PyPI安装](https://pypi.org/project/graphifyy/)
- [原始推文](https://x.com/bozhou_ai/status/2042816049205391484)