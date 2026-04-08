---
title: "Mintlify ChromaFs: Virtual Filesystem for AI Documentation"
type: article
date_added: 2026-04-03
source: "https://x.com/i/article/2039508550356238336"
author: "Mintlify Engineering"
tags: [ai, rag, filesystem, documentation, engineering]
via: "Twitter bookmark from @dotey"
---

Mintlify engineered a virtual filesystem called **ChromaFs** that allows their AI documentation assistant to browse documentation using familiar bash commands (grep, cat, ls), while each command is intercepted and translated into database queries.

## Key Innovation

Instead of traditional RAG with vector search, Mintlify gives the AI a filesystem metaphor - documents become "files", chapters become "directories". The AI can use grep for exact string matching, cat to read full pages, and find to traverse the structure.

## Performance Results

- **Session startup**: 46 seconds → 100 milliseconds (with previous sandbox approach)
- **Marginal compute cost**: Near-zero (reuses existing database infrastructure)
- **Annual savings**: ~$70,000+ (compared to microVM sandbox approach at 850k monthly conversations)

## Technical Implementation

Built on Vercel Labs' **just-bash** (a TypeScript-rewritten bash subset) with pluggable filesystem interface:

- Each document page = one "file"
- Each chapter = one "directory"
- grep parameters parsed, Chroma metadata query for coarse filtering, batch prefetch to cache, then just-bash does exact match in memory
- Permissions handled by pruning the file tree at initialization - unauthorized paths invisible to AI
- All write operations return "read-only filesystem" error - stateless, no cleanup concerns

## Why This Matters

The Hacker News discussion highlighted a key insight: RAG's "R" (Retrieval) can be any method - full-text search, SQL queries, or filesystem navigation. Vector search became the default when models couldn't effectively use tools. Now with improved tool calling and reasoning, letting AI decide how to find information is more flexible than preset retrieval pipelines.

## When to Use This Approach

Best suited for:
- Structured technical documentation with clear hierarchy
- High requirement for exact string matching (code syntax, specific terms)
- Cost-sensitive production environments

Less suited for:
- Unstructured internal knowledge bases without hierarchy
- Scenarios where semantic similarity is more important than exact matches

## Links

- [Original Article](https://x.com/i/article/2039508550356238336)
- [Original Tweet](https://x.com/dotey/status/2040157640442229153)
- [just-bash GitHub](https://github.com/vercel-labs/just-bash)