# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Smaug is a Twitter/X bookmarks archiver that fetches bookmarks via the bird CLI, expands t.co links, extracts content from linked pages (GitHub repos, articles, X long-form articles), and uses AI CLI tools (Claude Code or OpenCode) for intelligent categorization and filing to a markdown archive with optional knowledge library organization.

## Common Commands

```bash
# Development
npm install                  # Install dependencies (dayjs)
node --test                  # Run tests (uses Node's built-in test runner)

# CLI usage
node src/cli.js setup        # Interactive setup wizard
node src/cli.js fetch 20     # Fetch 20 bookmarks (default source from config)
node src/cli.js fetch --all  # Fetch ALL bookmarks with pagination
node src/cli.js fetch --source likes  # Fetch from likes instead
node src/cli.js run          # Full job: fetch + AI processing
node src/cli.js run -t       # Run with token usage tracking
node src/cli.js status       # Show current status

# Test single file
node --test test/config.test.js
```

## Architecture

### Two-Phase Workflow

1. **Fetch Phase** (`src/processor.js`): Fetches bookmarks via bird CLI, expands t.co links, extracts content from GitHub (via API), articles (via fetch), and X articles (via bird CLI search/read). Outputs prepared bookmarks to `pendingFile` (JSON).

2. **AI Processing Phase** (`src/job.js`): Invokes Claude Code or OpenCode CLI to process pending bookmarks using the `/process-bookmarks` command. The AI categorizes bookmarks, files them to the knowledge library, and writes to the archive.

### Key Modules

- `src/index.js` - Programmatic entry point, exports core functions
- `src/cli.js` - CLI commands: setup, fetch, process, run, status
- `src/processor.js` - Bookmark fetching, link expansion, content extraction
- `src/config.js` - Configuration loading (file + env + defaults), category definitions
- `src/job.js` - Scheduled job runner, AI CLI invocation, lock management, notifications

### Configuration

Config loaded from `smaug.config.json` (gitignored) or `smaug.config.example.json` as template. Supports:
- `source`: bookmarks, likes, or both
- `archiveFile`, `pendingFile`, `stateFile`: paths for data files
- `categories`: match patterns → actions (file/capture/transcribe) → folders
- `folders`: map bookmark folder IDs to tags
- `cliTool`: 'claude' or 'opencode' for AI processing
- `parallelThreshold`: minimum bookmarks before parallel processing (default: 8)

### Categories System

Categories define how different bookmark types are handled. Each has:
- `match`: URL patterns to identify type
- `action`: 'file' (create separate file), 'capture' (archive only), 'transcribe' (flag for future)
- `folder`: destination for filed items (e.g., `./knowledge/tools`)
- `template`: frontmatter template type

Default categories: github→tools, article→articles, x-article→articles, podcast→transcribe, youtube→transcribe, tweet→capture.

### AI Processing

The `.claude/commands/process-bookmarks.md` skill contains detailed instructions for the AI to:
- Read prepared bookmarks from pendingFile
- Categorize based on category patterns
- Write entries to archiveFile (using Edit tool - NEVER Write, which would destroy existing entries)
- Create knowledge files with proper frontmatter
- Process in parallel when bookmark count >= parallelThreshold (spawn haiku subagents for cost efficiency)

## Key Dependencies

- **bird CLI** (external, @steipete/bird): Twitter/X API wrapper for fetching bookmarks/likes. Requires auth_token and ct0 cookies. v0.5.0+ required for bookmarks support; git build needed for pagination (`--all` flag).
- **dayjs**: Date/timezone handling for bookmark dates
- Node.js 20+ required (ES modules, native test runner)

## Data Files

- `bookmarks.md`: Archive in descending chronological order (newest dates at top). Entries use h1 for dates, h2 for individual bookmarks.
- `.state/pending-bookmarks.json`: Prepared bookmarks awaiting AI processing
- `.state/bookmarks-state.json`: Last fetch timestamp, processed IDs
- `knowledge/tools/*.md`: Filed GitHub repos with tool frontmatter
- `knowledge/articles/*.md`: Filed articles with article frontmatter