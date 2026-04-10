---
title: "Continuous Claude v2 Context Management"
type: tweet
date_added: 2026-01-02
author: "@parcadei"
tweet_id: ""
tags: []
via: "Twitter书签"
---

## 完整内容

@yuzu_4ever https://t.co/PwioZUVYkD
>
you need this


## 链接内容

### GitHub 项目: parcadei/Continuous-Claude-v3

**描述**: Context management for Claude Code. Hooks maintain state via ledgers and handoffs. MCP execution without context pollution. Agent orchestration with isolated context windows.

**Stars**: 3,685

**语言**: Python

**Topics**: agents, claude-code, claude-code-cli, claude-code-hooks, claude-code-mcp, claude-code-skills, claude-code-subagents, claude-skills, mcp

### README

# Continuous Claude

> A persistent, learning, multi-agent development environment built on Claude Code

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude-Code-orange.svg)](https://claude.ai/code)
[![Skills](https://img.shields.io/badge/Skills-109-green.svg)](#skills-system)
[![Agents](https://img.shields.io/badge/Agents-32-purple.svg)](#agents-system)
[![Hooks](https://img.shields.io/badge/Hooks-30-blue.svg)](#hooks-system)

**Continuous Claude** transforms Claude Code into a continuously learning system that maintains context across sessions, orchestrates specialized agents, and eliminates wasting tokens through intelligent code analysis.

## Table of Contents

- [Why Continuous Claude?](#why-continuous-claude)
- [Design Principles](#design-principles)
- [How to Talk to Claude](#how-to-talk-to-claude)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Core Systems](#core-systems)
  - [Skills (109)](#skills-system)
  - [Agents (32)](#agents-system)
  - [Hooks (30)](#hooks-system)
  - [TLDR Code Analysis](#tldr-code-analysis)
  - [Memory System](#memory-system)
  - [Continuity System](#continuity-system)
  - [Math System](#math-system)
- [Workflows](#workflows)
- [Installation](#installation)
- [Updating](#updating)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Why Continuous Claude?

Claude Code has a **compaction problem**: when context fills up, the system compacts your conversation, losing nuanced understanding and decisions made during the session.

**Continuous Claude solves this with:**

| Problem | Solution |
|---------|----------|
| Context loss on compaction | YAML handoffs - more token-efficient transfer |
| Starting fresh each session | Memory system recalls + daemon auto-extracts learnings |
| Reading entire files burns tokens | 5-layer code analysis + semantic index |
| Complex tasks need coordination | Meta-skills orchestrate agent workflows |
| Repeating workflows manually | 109 skills with natural language triggers |

**The mantra: Compound, don't compact.** Extract learnings automatically, then start fresh with full context.

### Why "Continuous"? Why "Compounding"?

The name is a pun. **Continuous** because Claude maintains state across sessions. **Compounding** because each session makes the system smarter—learnings accumulate like compound interest.

---

## Design Principles

An agent is five things: **Prompt + Tools + Context + Memory + Model**.

| Component | What We Optimize |
|-----------|------------------|
| **Prompt** | Skills inject relevant context; hooks add system reminders |
| **Tools** | TLDR reduces tokens; agents parallelize work |
| **Context** | Not just *what* Claude knows, but *how* it's provided |
| **Memory** | Daemon extracts learnings; recall surfaces them |
| **Model** | Becomes swappable when the other four are solid |

### Anti-Complexity

We resist plugin sprawl. Every MCP, subscription, and tool you add promises improvement but risks breaking context, tools, or prompts through clashes.

**Our approach:**
- **Time, not money** — No required paid services. Perplexity and NIA are optional, high-value-per-token.
- **Learn, don't accumulate** — A system that learns handles edge cases better than one that collects plugins.
- **Shift-left validation** — Hooks run pyright/ruff after edits, catching errors before tests.

The failure modes of complex systems are structurally invisible until they happen. A learning, context-efficient system doesn't prevent all failures—but it recovers and improves.

---

## How to Talk to Claude

**You don't need to memorize slash commands.** Just describe what you want naturally.

### The Skill Activation System

When you send a message, a hook injects context that tells **Claude** which skills and agents are relevant. Claude infers from a rule-based system and decides which tools to use.

```
> "Fix the login bug in auth.py"

🎯 SKILL ACTIVATION CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ CRITICAL SKILLS (REQUIRED):
  → create_handoff

📚 RECOMMENDED SKILLS:
  → fix
  → debug

🤖 RECOMMENDED AGENTS (token-efficient):
  → debug-agent
  → scout

ACTION: Use Skill tool BEFORE responding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Priority Levels

| Level | Meaning |
|-------|---------|
| ⚠️ **CRITICAL** | Must use (e.g., handoffs before ending session) |
| 📚 **RECOMMENDED** | Should use (e.g., workflow skills) |
| 💡 **SUGGESTED** | Consider using (e.g., optimization tools) |
| 📌 **OPTIONAL** | Nice to have (e.g., documentation helpers) |

### Natural Language Examples

| What You Say | What Activates |
|--------------|----------------|
| "Fix the broken login" | `/fix` workflow → debug-agent, scout |
| "Build a user dashboard" | `/build` workflow → plan-agent, kraken |
| "I want to understand this codebase" | `/explore` + scout agent |
| "What could go wrong with this plan?" | `/premortem` |
| "Help me figure out what I need" | `/discovery-interview` |
| "Done for today" | `create_handoff` (critical) |
| "Resume where we left off" | `resume_handoff` |
| "Research auth patterns" | oracle agent + perplexity |
| "Find all usages of this API" | scout agent + ast-grep |

### Why This Approach?

| Benefit | How |
|---------|-----|
| **More Discoverable** | Don't need to know commands exist |
| **Context-Aware** | System knows when you're 90% through context |
| **Reduces Cognitive Load** | Describe intent naturally, get curated suggestions |
| **Power User Friendly** | Still supports /fix, /build, etc. directly |

### Skill vs Workflow vs Agent

| Type | Purpose | Example |
|------|---------|---------|
| **Skill** | Single-purpose tool | `commit`, `tldr-code`, `qlty-check` |
| **Workflow** | Multi-step process | `/fix` (sleuth → premortem → kraken → commit) |
| **Agent** | Specialized sub-session | scout (exploration), oracle (research) |

[See detailed skill activation docs →](docs/skill-activation.md)

---

## Quick Start

### Prerequisites

- Python 3.11+
- [uv](https://github.com/astral-sh/uv) package manager
- Docker (for PostgreSQL)
- Claude Code CLI

### Installation

```bash
# Clone
git clone https://github.com/parcadei/Continuous-Claude-v3.git
cd Continuous-Claude-v3/opc

# Run setup wizard (12 steps)
uv run python -m scripts.setup.wizard
```

> **Note:** The `pyproject.toml` is in `opc/`. Always run `uv` commands from the `opc/` directory.

### What the Wizard Does

| Step | What It Does |
|------|--------------|
| 1 | Backup existing .claude/ config (if present) |
| 2 | Check prerequisites (Docker, Python, uv) |
| 3-5 | Database + API key configuration |
| 6-7 | Start Docker stack, run migrations |
| 8 | Install Claude Code integration (32 agents, 109 skills, 30 hooks) |
| 9 | Math features (SymPy, Z3, Pint - optional) |
| 10 | TLDR code analysis tool |
| 11-12 | Diagnostics tools + Loogle (optional) |


#### To Uninstall:

```
cd Continuous-Claude-v3/opc
  uv run python -m scripts.setup.wizard --uninstall
```

**What it does**

1. Archives your current setup → Moves ~/.claude to ~/.claude-v3.archived.<timestamp>
2. Restores your backup → Finds the most recent ~/.claude.backup.* (created during install) and restores it
3. Preserves user data → Copies these back from the archive:

  - history.jsonl (your command history)
  - mcp_config.json (MCP servers)
  - .env (API keys)
  - projects.json (project configs)
  - file-history/ directory
  - projects/ directory
4. Removes CC-v3 additions → Everything else (hooks, skills, agents, rules)


**Safety Features**

- Your current setup is archived with timestamp - nothing gets deleted
- The wizard asks for confirmation before proceeding
- It restores from the backup that was made during installation
- All your Claude Code settings stay intact


### Remote Database Setup

By default, CC-v3 runs PostgreSQL locally via Docker. For remote database setups:

#### 1. Database Preparation

```bash
# Connect to your remote PostgreSQL instance
psql -h hostname -U user -d continuous_claude

# Enable pgvector extension (requires superuser or rds_superuser)
CREATE EXTENSION IF NOT EXISTS vector;

# Apply the schema (from your local clone)
psql -h hostname -U user -d continuous_claude -f docker/init-schema.sql
```

> **Managed PostgreSQL tips:**
> - **AWS RDS**: Add `vector` to `shared_preload_libraries` in DB Parameter Group
> - **Supabase**: Enable via Database Extensions page
> - **Azure Database**: Use Extensions pane to enable pgvector

#### 2. Connection Configuration

Set `CONTINUOUS_CLAUDE_DB_URL` in `~/.claude/settings.json`:

```json
{
  "env": {
    "CONTINUOUS_CLAUDE_DB_URL": "postgresql://user:password@hostname:5432/continuous_claude"
  }
}
```

Or export before running Claude:

```bash
export CONTINUOUS_CLAUDE_DB_URL="postgresql://user:password@hostname:5432/continuous_claude"
claude
```

See `.env.example` for all available environment variables.

### First Session

```bash
# Start Claude Code
claude

# Try a workflow
> /workflow
```

### First Session Commands

| Command | What it does |
|---------|--------------|
| `/workflow` | Goal-based routing (Research/Plan/Build/Fix) |
| `/fix bug <description>` | Investigate and fix a bug |
| `/build greenfield <feature>` | Build a new feature from scratch |
| `/explore` | Understand the codebase |
| `/premortem` | Risk analysis before implementation |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CONTINUOUS CLAUDE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐             │
│  │   Skills    │    │   Agents    │    │    Hooks    │             │
│  │   (109)     │───▶│    (32)     │◀───│    (30)     │             │
│  └─────────────┘    └

...[内容过长已截断]

## 收藏原因

值得保存的推文内容。

## 相关链接

- [原始推文](https://x.com/parcadei/status/2005755875701776624)

