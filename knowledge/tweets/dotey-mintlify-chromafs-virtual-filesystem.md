---
title: "Mintlify ChromaFs Virtual Filesystem"
type: tweet
date_added: 2026-04-02
author: "@dotey"
tweet_id: ""
tags: []
via: "Twitter书签"
---

## 完整内容

文档平台 Mintlify 发了一篇工程博客，讲了一件挺有意思的事：他们给自家 AI 文档助手造了一套假的文件系统，叫 ChromaFs，让 AI 以为自己在用 grep、cat、ls 这些命令浏览文件，实际上每个命令都被拦截、翻译成了数据库查询。
>
效果很直接：会话启动时间从原来沙箱方案的 46 秒降到 100 毫秒，每次对话的边际计算成本几乎为零。


## 链接内容

### 文章: 未知标题

> Your first conversation with Hermes Agent — from install to chatting in 2 minutes

On this page

This guide walks you through installing Hermes Agent, setting up a provider, and having your first conversation. By the end, you&#x27;ll know the key features and how to explore further.

1. Install Hermes Agent
​

Run the one-line installer:

# Linux / macOS / WSL2 / Android (Termux)

curl

-fsSL

 https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh 

|

bash

Android / Termux

If you&#x27;re installing on a phone, see the dedicated 
Termux guide
 for the tested manual path, supported extras, and current Android-specific limitations.

Windows Users

Install 
WSL2
 first, then run the command above inside your WSL2 terminal.

After it finishes, reload your shell:

source

 ~/.bashrc   

# or source ~/.zshrc

2. Set Up a Provider
​

The installer configures your LLM provider automatically. To change it later, use one of these commands:

hermes model       

# Choose your LLM provider and model

hermes tools       

# Configure which tools are enabled

hermes setup       

# Or configure everything at once

hermes model
 walks you through selecting an inference provider:

Provider

What it is

How to set up

Nous Portal

Subscription-based, zero-config

OAuth login via 
hermes model

OpenAI Codex

ChatGPT OAuth, uses Codex models

Device code auth via 
hermes model

Anthropic

Claude models directly (Pro/Max or API key)

hermes model
 with Claude Code auth, or an Anthropic API key

OpenRouter

Multi-provider routing across many models

Enter your API key

Z.AI

GLM / Zhipu-hosted models

Set 
GLM_API_KEY
 / 
ZAI_API_KEY

Kimi / Moonshot

Moonshot-hosted coding and chat models

Set 
KIMI_API_KEY

MiniMax

International MiniMax endpoint

Set 
MINIMAX_API_KEY

MiniMax China

China-region MiniMax endpoint

Set 
MINIMAX_CN_API_KEY

Alibaba Cloud

Qwen models via DashScope

Set 
DASHSCOPE_API_KEY

Hugging Face

20+ open models via unified router (Qwen, DeepSeek, Kimi, etc.)

Set 
HF_TOKEN

Kilo Code

KiloCode-hosted models

Set 
KILOCODE_API_KEY

OpenCode Zen

Pay-as-you-go access to curated models

Set 
OPENCODE_ZEN_API_KEY

OpenCode Go

$10/month subscription for open models

Set 
OPENCODE_GO_API_KEY

DeepSeek

Direct DeepSeek API access

Set 
DEEPSEEK_API_KEY

GitHub Copilot

GitHub Copilot subscription (GPT-5.x, Claude, Gemini, etc.)

OAuth via 
hermes model
, or 
COPILOT_GITHUB_TOKEN
 / 
GH_TOKEN

GitHub Copilot ACP

Copilot ACP agent backend (spawns local 
copilot
 CLI)

hermes model
 (requires 
copilot
 CLI + 
copilot login
)

Vercel AI Gateway

Vercel AI Gateway routing

Set 
AI_GATEWAY_API_KEY

Custom Endpoint

VLLM, SGLang, Ollama, or any OpenAI-compatible API

Set base URL + API key

tip

You can switch providers at any time with 
hermes model
 — no code changes, no lock-in. When configuring a custom endpoint, Hermes will prompt for the context window size and auto-detect it when possible. See 
Context Length Detection
 for details.

3. Start Chatting
​

hermes

That&#x27;s it! You&#x27;ll see a welcome banner with your model, available tools, and skills. Type a message and press Enter.

❯ What can you help me with?

The agent has access to tools for web search, file operations, terminal commands, and more — all out of the box.

4. Try Key Features
​

Ask it to use the terminal
​

❯ What&#x27;s my disk usage? Show the top 5 largest directories.

The agent will run terminal commands on your behalf and show you the results.

Use slash commands
​

Type 
/
 to see an autocomplete dropdown of all commands:

Command

What it does

/help

Show all available commands

/tools

List available tools

/model

Switch models interactively

/personality pirate

Try a fun personality

/save

Save the conversation

Multi-line input
​

Press 
Alt+Enter
 or 
Ctrl+J
 to add a new line. Great for pasting code or writing detailed prompts.

Interrupt the agent
​

If the agent is taking too long, just type a new message and press Enter — it interrupts the current task and switches to your new instructions. 
Ctrl+C
 also works.

Resume a session
​

When you exit, hermes prints a resume command:

hermes 

--continue

# Resume the most recent session

hermes 

-c

# Short form

5. Explore Further
​

Here are some things to try next:

Set up a sandboxed terminal
​

For safety, run the agent in a Docker container or on a remote server:

hermes config 

set

 terminal.backend 

docker

# Docker isolation

hermes config 

set

 terminal.backend 

ssh

# Remote server

Connect messaging platforms
​

Chat with Hermes from your phone or other surfaces via Telegram, Discord, Slack, WhatsApp, Signal, Email, or Home Assistant:

hermes gateway setup    

# Interactive platform configuration

Add voice mode
​

Want microphone input in the CLI or spoken replies in messaging?

pip 

install

&quot;hermes-agent[voice]&quot;

# Optional but recommended for free local speech-to-text

pip 

install

 faster-whisper

Then start Hermes and enable it inside the CLI:

/voice on

Press 
Ctrl+B
 to record, or use 
/voice tts
 to have Hermes speak its replies. See 
Voice Mode
 for the full setup across CLI, Telegram, Discord, and Discord voice channels.

Schedule automated tasks
​

❯ Every morning at 9am, check Hacker News for AI news and send me a summary on Telegram.

The agent will set up a cron job that runs automatically via the gateway.

Browse and install skills
​

hermes skills search kubernetes

hermes skills search react 

--source

 skills-sh

hermes skills search https://mintlify.com/docs 

--source

 well-known

hermes skills 

install

 openai/skills/k8s

hermes skills 

install

 official/security/1password

hermes skills 

install

 skills-sh/vercel-labs/json-render/json-render-react 

--force

Tips:

Use 
--source skills-sh
 to search the public 
skills.sh
 directory.

Use 
--source well-known
 with a docs/site URL to discover skills from 
/.well-known/skills/index.json
.

Use 
--force
 only after reviewing a third-party skill. It can override non-dangerous policy blocks, but not a 
dangerous
 scan verdict.

Or use the 
/skills
 slash command inside chat.

Use Hermes inside an editor via ACP
​

Hermes can also run as an ACP server for ACP-compatible editors like VS Code, Zed, and JetBrains:

pip 

install

-e

&#x27;.[acp]&#x27;

hermes acp

See 
ACP Editor Integration
 for setup details.

Try MCP servers
​

Connect to external tools via the Model Context Protocol:

# Add to ~/.hermes/config.yaml

mcp_servers

:

github

:

command

:

 npx

args

:

[

&quot;-y&quot;

,

&quot;@modelcontextprotocol/server-github&quot;

]

env

:

GITHUB_PERSONAL_ACCESS_TOKEN

:

&quot;ghp_xxx&quot;

Quick Reference
​

Command

Description

hermes

Start chatting

hermes model

Choose your LLM provider and model

hermes tools

Configure which tools are enabled per platform

hermes setup

Full setup wizard (configures everything at once)

hermes doctor

Diagnose issues

hermes update

Update to latest version

hermes gateway

Start the messaging gateway

hermes --continue

Resume last session

Next Steps
​

CLI Guide

 — Master the terminal interface

Configuration

 — Customize your setup

Messaging Gateway

 — Connect Telegram, Discord, Slack, WhatsApp, Signal, Email, or Home Assistant

Tools &amp; Toolsets

 — Explore available capabilities

## 收藏原因

值得保存的推文内容。

## 相关链接

- [原始推文]()

