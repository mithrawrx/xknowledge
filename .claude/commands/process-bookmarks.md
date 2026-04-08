# /process-bookmarks

Process prepared Twitter bookmarks into a markdown archive with rich analysis and optional filing to a knowledge library.

## Before You Start

### CRITICAL: Use Edit Tool for bookmarks.md (DATA LOSS PREVENTION)

**NEVER use the Write tool on bookmarks.md.** The Write tool REPLACES the entire file, destroying all historical entries.

**ALWAYS use the Edit tool** to insert new entries into bookmarks.md. The Edit tool preserves existing content while making targeted insertions.

- `Write` = Replace entire file (DANGEROUS - causes data loss)
- `Edit` = Insert/modify specific content (SAFE - preserves existing entries)

This applies to BOTH sequential processing AND the merge step in parallel processing.

### Multi-Step Parallel Protocol (CRITICAL)

**Create todo list IMMEDIATELY after reading bookmark count.** This ensures final steps never get skipped.

**Check parallelThreshold from config** (default: 8). Use parallel processing only when bookmark count >= threshold. For smaller batches, sequential processing is faster due to subagent overhead.

```bash
node -e "console.log(require('./smaug.config.json').parallelThreshold ?? 8)"
```

**For bookmarks below threshold (sequential):**
```javascript
TodoWrite({ todos: [
  {content: "Read pending bookmarks", status: "pending", activeForm: "Reading pending bookmarks"},
  {content: "Process bookmark 1", status: "pending", activeForm: "Processing bookmark 1"},
  {content: "Process bookmark 2", status: "pending", activeForm: "Processing bookmark 2"},
  {content: "Clean up pending file", status: "pending", activeForm: "Cleaning up pending file"},
  {content: "Commit and push changes", status: "pending", activeForm: "Committing changes"},
  {content: "Return summary", status: "pending", activeForm: "Returning summary"}
]})
```

**For bookmarks at or above threshold (MUST use parallel subagents with batch files):**
```javascript
TodoWrite({ todos: [
  {content: "Read pending bookmarks", status: "pending", activeForm: "Reading pending bookmarks"},
  {content: "Spawn subagents to write batch files", status: "pending", activeForm: "Spawning subagents"},
  {content: "Wait for all subagents to complete", status: "pending", activeForm: "Waiting for subagents"},
  {content: "Merge batch files into bookmarks.md", status: "pending", activeForm: "Merging batch files"},
  {content: "Clean up batch and pending files", status: "pending", activeForm: "Cleaning up files"},
  {content: "Commit and push changes", status: "pending", activeForm: "Committing changes"},
  {content: "Return summary", status: "pending", activeForm: "Returning summary"}
]})
```

**Execution rules:**
- Mark each step `in_progress` before starting
- Mark `completed` immediately after finishing (no batching)
- Only ONE task `in_progress` at a time
- Never skip final steps (commit, summary)

**CRITICAL for parallel processing:** Spawn ALL subagents in ONE message, each writing to a batch file:
```javascript
// Send ONE message with multiple Task calls - they run in parallel
// Use model="haiku" for cost-efficient parallel processing (~50% cost savings)
// Each subagent writes to .state/batch-N.md, NOT to bookmarks.md!
Task(subagent_type="general-purpose", model="haiku", prompt="Process batch 0: write to .state/batch-0.md: {json for bookmarks 0-4}")
Task(subagent_type="general-purpose", model="haiku", prompt="Process batch 1: write to .state/batch-1.md: {json for bookmarks 5-9}")
Task(subagent_type="general-purpose", model="haiku", prompt="Process batch 2: write to .state/batch-2.md: {json for bookmarks 10-14}")
// ... all batches in the SAME message
```

After ALL subagents complete, merge batch files into bookmarks.md in chronological order.

**DO NOT:**
- Have subagents write directly to bookmarks.md (race conditions!)
- Use the Write tool on bookmarks.md (DATA LOSS - destroys existing entries!)
- Process bookmarks above threshold sequentially (too slow)
- Send Task calls in separate messages (defeats parallelism)
- Skip the merge step

### Setup

**Get today's date (friendly format):**
```bash
date +"%A, %B %-d, %Y"
```

Use this format for date section headers (e.g., "Thursday, January 2, 2026").

**Load paths and categories from config:**
```bash
node -e "const c=require('./smaug.config.json'); console.log(JSON.stringify({archiveFile:c.archiveFile, pendingFile:c.pendingFile, stateFile:c.stateFile, categories:c.categories}, null, 2))"
```

This gives you:
- `archiveFile`: Where to write the bookmark archive (e.g., `~/Obsidian_Vaults/.../bookmarks.md`)
- `pendingFile`: Where pending bookmarks are stored
- `stateFile`: Where processing state is tracked
- `categories`: Custom category definitions

**IMPORTANT:** Use these paths throughout. The `~` will be the user's home directory.
If no custom categories, use the defaults from `src/config.js`.

## Input

Prepared bookmarks are in the `pendingFile` path from config (typically `./.state/pending-bookmarks.json` or a custom path).

Each bookmark includes:
- `id`, `author`, `authorName`, `text`, `tweetUrl`, `date`
- `tags[]` - folder tags from bookmark folders (e.g., `["ai-tools"]`)
- `links[]` - each with `original`, `expanded`, `type`, and `content`
  - `type`: "github", "article", "video", "tweet", "media", "image"
  - `content`: extracted text, headline, author (for articles/github)
- `isReply`, `replyContext` - parent tweet info if this is a reply
- `isQuote`, `quoteContext` - quoted tweet info if this is a quote tweet

## Categories System

Categories define how different bookmark types are handled. Each category has:
- `match`: URL patterns or keywords to identify this type
- `action`: What to do with matching bookmarks
  - `file`: Create a separate markdown file in the folder
  - `capture`: Just add to bookmarks.md
  - `transcribe`: Flag for future transcription, add to bookmarks.md with transcript note
- `folder`: Where to save files (for `file` action)
- `template`: Which template to use (`tool`, `article`, `podcast`, `video`)

**Default categories:**
| Category | Match Patterns | Action | Folder |
|----------|---------------|--------|--------|
| github | github.com | file | ./knowledge/tools |
| article | medium.com, substack.com, dev.to, blog | file | ./knowledge/articles |
| podcast | podcasts.apple.com, spotify.com/episode, overcast.fm | transcribe | ./knowledge/podcasts |
| youtube | youtube.com, youtu.be | transcribe | ./knowledge/videos |
| video | vimeo.com, loom.com | transcribe | ./knowledge/videos |
| tweet | (fallback) | capture | - |

## Workflow

### 1. Read the Prepared Data

Read from the `pendingFile` path specified in config. If the path starts with `~`, expand it to the home directory:
```bash
# Get pendingFile from config and expand ~ (cross-platform)
PENDING_FILE=$(node -e "const p=require('./smaug.config.json').pendingFile; console.log(p.replace(/^~/, process.env.HOME || process.env.USERPROFILE))")
cat "$PENDING_FILE"
```

### 2. Process Bookmarks (Parallel when above threshold)

**IMPORTANT: If bookmark count >= parallelThreshold (default 8), you MUST use parallel processing:**

```
Use the Task tool to spawn multiple subagents simultaneously.
Each subagent processes a batch of ~5 bookmarks.
Example: 20 bookmarks → spawn 4 subagents (5 each) in ONE message with multiple Task calls.
```

This is critical for performance. Do NOT process bookmarks sequentially when above threshold.

For each bookmark (or batch):

#### a. Determine the best title/summary

Don't use generic titles like "Article" or "Tweet". Based on the content:
- GitHub repos: Use the repo name and brief description
- Articles: Use the article headline or key insight
- Videos: Note for transcript, use tweet context
- Quote tweets: Capture the key insight being highlighted
- Reply threads: Include parent context in the summary
- Plain tweets: Use the key point being made

#### b. Categorize using the categories config

Match each bookmark's links against category patterns (check `match` arrays). Use the first matching category, or fall back to `tweet`.

**For each action type:**
- `file`: Create a separate file in the category's folder using its template
- `capture`: Just add to bookmarks.md (no separate file)
- `transcribe`: Add to bookmarks.md with a "Needs transcript" flag, optionally create placeholder in folder

**Special handling:**
- Quote tweets: Include quoted tweet context in entry
- Reply threads: Include parent context in entry

#### c. Add bookmark entry to archive (USE EDIT TOOL)

**Use the Edit tool** to insert entries into the `archiveFile` (expand `~` to home directory). NEVER use Write - it will destroy existing entries.

**CRITICAL ordering rules for bookmarks.md:**

The file must be in **descending chronological order** (newest dates at TOP, oldest at BOTTOM).

1. **Read the existing file structure first** - note all existing date sections and their positions
2. Use each bookmark's `date` field (already formatted as "Weekday, Month Day, Year")
3. **For each bookmark's date:**
   - If that date section already exists: insert the entry immediately AFTER the `# Date` header (above other entries in that section)
   - If no section exists for that date: create a new `# Weekday, Month Day, Year` section at the **correct chronological position** (NOT always at top!)
4. **Chronological positioning for new date sections:**
   - Find where the date belongs chronologically among existing sections
   - Insert BEFORE any older dates, AFTER any newer dates
   - Example: If file has "Jan 3" then "Jan 1", and you need "Jan 2", insert between them
5. Do NOT create duplicate date sections - always search the entire file first
6. Separate date sections with `---`

**Processing order:** Bookmarks in pending-bookmarks.json are sorted oldest-first. Process them in order so that when each is inserted at the top of its date section, the final result has correct ordering within each day.

**Header hierarchy:**
- `# Thursday, January 2, 2026` - Date headers (h1)
- `## @author - title` - Individual bookmark entries (h2)

**标准条目格式（中文）：**
```markdown
## @{author} - {描述性标题}
> {推文原文}

- **推文**: {tweet_url}
- **链接**: {expanded_url}（如有）
- **标签**: [[标签1]] [[标签2]]（如有书签文件夹标签）
- **归档**: [{文件名}](./knowledge/tools/{slug}.md)（如已归档）
- **概述**: {1-2句中文描述}
```

**标签格式**: 使用 wiki-link 风格 `[[标签名]]`。仅在书签有 `tags` 数组时包含此行。

**引用推文格式（包含引用内容）：**
```markdown
## @{author} - {描述性标题}
> {推文原文}
>
> *引用 @{quoted_author}:* {引用推文内容}

- **推文**: {tweet_url}
- **引用推文**: {quoted_tweet_url}
- **标签**: [[标签1]] [[标签2]]（如有标签）
- **概述**: {中文描述}
```

**回复推文格式（包含父推文上下文）：**
```markdown
## @{author} - {描述性标题}
> *回复 @{parent_author}:* {父推文内容}
>
> {推文原文}

- **推文**: {tweet_url}
- **父推文**: {parent_tweet_url}
- **标签**: [[标签1]] [[标签2]]（如有标签）
- **概述**: {中文描述}
```

Separate entries with `---` only between different dates, not between entries on the same day.

### 3. Clean Up Pending File

After successfully processing, remove the processed bookmarks from the pending file (use `pendingFile` path from config, expanding `~`):

```javascript
const pendingPath = config.pendingFile.replace(/^~/, process.env.HOME);
const pending = JSON.parse(fs.readFileSync(pendingPath, 'utf8'));
const processedIds = new Set([/* IDs you processed */]);
const remaining = pending.bookmarks.filter(b => !processedIds.has(b.id));
pending.bookmarks = remaining;
pending.count = remaining.length;
fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
```

### 4. Commit and Push Changes

After all bookmarks are processed and filed, commit the changes:

```bash
# Get today's date for commit message
DATE=$(date +"%b %-d")

# Stage all bookmark-related changes (use archiveFile path from config)
git add "$ARCHIVE_FILE"  # The archiveFile path from config
git add knowledge/

# Commit with descriptive message
git commit -m "Process N Twitter bookmarks from $DATE

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push immediately
git push
```

Replace "N" with actual count. If any knowledge files were created, mention them in the commit message body.

### 5. 返回摘要

```
已处理 N 个书签：
- @author1: 工具名称 → 归档到 knowledge/tools/tool-name.md
- @author2: 文章标题 → 归档到 knowledge/articles/article-slug.md
- @author3: 普通推文 → 仅捕获

已提交并推送。
```

## Frontmatter Templates（中文版）

### 工具条目 (`./knowledge/tools/{slug}.md`)

```yaml
---
title: "{工具名称}"
type: tool
date_added: {YYYY-MM-DD}
source: "{github_url}"
tags: [{相关标签}, {文件夹标签}]
via: "Twitter书签 @{author}"
---

{工具功能描述，关键特性，为什么被收藏}

## 核心功能

- 功能1
- 功能2

## 使用场景

{适用场景描述}

## 相关链接

- [GitHub仓库]({github_url})
- [原始推文]({tweet_url})
```

### 文章条目 (`./knowledge/articles/{slug}.md`)

```yaml
---
title: "{文章标题}"
type: article
date_added: {YYYY-MM-DD}
source: "{文章URL}"
author: "{文章作者}"
tags: [{相关标签}, {文件夹标签}]
via: "Twitter书签 @{author}"
---

## 概述

{文章主要内容概述}

## 正文内容

{完整文章正文内容，如果是X文章或有完整内容的情况}

## 关键要点

- 要点1
- 要点2

## 相关链接

- [原文]({article_url})
- [原始推文]({tweet_url})
```

### 播客条目 (`./knowledge/podcasts/{slug}.md`)

```yaml
---
title: "{节目标题}"
type: podcast
date_added: {YYYY-MM-DD}
source: "{播客URL}"
show: "{节目名称}"
tags: [{相关标签}, {文件夹标签}]
via: "Twitter书签 @{author}"
status: needs_transcript
---

{推文上下文中的简要描述}

##节目信息

- **节目**: {show_name}
- **标题**: {episode_title}
- **收藏原因**: {推文中的上下文}

## 文字转录

*等待转录*

## 相关链接

- [节目链接]({podcast_url})
- [原始推文]({tweet_url})
```

### 视频条目 (`./knowledge/videos/{slug}.md`)

```yaml
---
title: "{视频标题}"
type: video
date_added: {YYYY-MM-DD}
source: "{视频URL}"
channel: "{频道名称}"
tags: [{相关标签}, {文件夹标签}]
via: "Twitter书签 @{author}"
status: needs_transcript
---

{推文上下文中的简要描述}

## 视频信息

- **频道**: {channel_name}
- **标题**: {video_title}
- **收藏原因**: {推文中的上下文}

## 文字转录

*等待转录*

## 相关链接

- [视频链接]({video_url})
- [原始推文]({tweet_url})
```

## Parallel Processing (REQUIRED when above threshold)

**CRITICAL: Subagents must NOT write directly to bookmarks.md** - this causes race conditions and scrambled ordering.

### Two-Phase Approach:

**Phase 1: Parallel batch processing (subagents write to temp files)**

Spawn multiple Task subagents in ONE message. Each writes to a separate temp file:

```
Task 1: model="haiku", "Process batch 0" → writes to .state/batch-0.md
Task 2: model="haiku", "Process batch 1" → writes to .state/batch-1.md
Task 3: model="haiku", "Process batch 2" → writes to .state/batch-2.md
Task 4: model="haiku", "Process batch 3" → writes to .state/batch-3.md
```

**子代理提示模板：**
```
处理这些书签并仅将 markdown 条目（不含日期标题）写入 .state/batch-{N}.md

待处理书签（按顺序 - 从旧到新）：
{JSON 数组，包含 5-10 个书签}

对于每个书签，按以下格式写入条目：
---
日期: {bookmark.date}
## @{author} - {标题}
> {推文原文}

- **推文**: {url}
- **标签**: [[标签1]] [[标签2]]（如有标签）
- **概述**: {中文描述}

同时创建知识库文件（./knowledge/tools/*.md, ./knowledge/articles/*.md）。
不要修改 bookmarks.md - 仅写入 .state/batch-{N}.md
```

**Phase 2: Sequential merge (main agent combines batches) - USE EDIT TOOL**

After ALL subagents complete:
1. Read the EXISTING bookmarks.md file first (preserve all current content!)
2. Read all .state/batch-*.md files in order (batch-0, batch-1, batch-2...)
3. Parse each entry (separated by `---`) and extract the DATE line
4. **Use the Edit tool** to insert each entry into bookmarks.md at the correct chronological position
5. Delete the temp batch files

**CRITICAL:** Step 4 MUST use the Edit tool, not Write. Using Write will replace the entire file and destroy all historical entries.

**Merge logic for bookmarks.md:**
- File is descending order (newest dates at top)
- For each entry from batch files (processed in order):
  - Find or create the date section at correct position
  - Insert entry at TOP of that date section
- Since batches are oldest-first, entries end up in correct order

**DO NOT:**
- Have subagents write directly to bookmarks.md (causes race conditions)
- Use the Write tool on bookmarks.md (causes DATA LOSS - destroys all existing entries)
- Process all bookmarks sequentially (too slow)
- Skip the merge step

## 示例输出

```
已处理 4 个书签：

1. @tom_doerr: Whisper-Flow（实时转录工具）
   → 工具: github.com/dimastatz/whisper-flow
   → 归档: knowledge/tools/whisper-flow.md

2. @simonw: Gist Host Fork（渲染 GitHub Gists）
   → 关于 GitHub Gist 渲染的文章
   → 归档: knowledge/articles/gisthost-gist-rendering.md

3. @michael_chomsky: ResponsiveDialog 组件模式
   → 引用推文支持 @jordienr 的 UI 模式
   → 已捕获引用上下文

4. @CasJam: Claude Code 视频后期制作
   → 普通推文（视频内容）
   → 仅捕获，标记等待转录
```
