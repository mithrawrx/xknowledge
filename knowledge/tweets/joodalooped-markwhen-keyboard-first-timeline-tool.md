---
title: "Markwhen: Keyboard-First Timeline Tool"
type: tweet
date_added: 2026-01-02
author: "@joodalooped"
tweet_id: ""
tags: []
via: "Twitter书签"
---

## 完整内容

for those who prefer keyboard to drag and drop, https://t.co/wLt0wiAOM1 is quite nice too


## 链接内容

### 文章: Markwhen

Markwhen

noun

/mɑrk·wɛn/

see also: 

markwhen documentation 

 A markdown-like 
journal language
 for plainly writing 
 logs 
, 
 gantt charts 
, 
 blogs 
, 
 feeds 
, 
 notes 
, 
 journals 
, 
 diaries 
, 
 todos 
, 
 timelines 
, 
 calendars 
 or 
 anything that happens over time 
. 

Markwhen input

Basic Syntax

Groups

Tags

Checklists

Links

Timezones

Recurrences

Frontmatter

Properties

 Output 

JSON

Timeline

Calendar

Oneview

{
  &quot;events&quot;: {
    &quot;propOrder&quot;: [],
    &quot;tags&quot;: [],
    &quot;title&quot;: &quot;&quot;,
    &quot;children&quot;: [
      {
        &quot;firstLine&quot;: {
          &quot;full&quot;: &quot;2025-04-09: Single date&quot;,
          &quot;datePart&quot;: &quot;2025-04-09&quot;,
          &quot;rest&quot;: &quot; Single date&quot;,
          &quot;restTrimmed&quot;: &quot;Single date&quot;
        },
        &quot;properties&quot;: {},
        &quot;propOrder&quot;: [],
        &quot;textRanges&quot;: {
          &quot;whole&quot;: {
            &quot;from&quot;: 0,
            &quot;to&quot;: 24,
            &quot;type&quot;: &quot;event&quot;
          },
          &quot;datePart&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 0,
            &quot;to&quot;: 10
          },
          &quot;definition&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 0,
            &quot;to&quot;: 10
          }
        },
        &quot;dateRangeIso&quot;: {
          &quot;fromDateTimeIso&quot;: &quot;2025-04-09T00:00:00.000+00:00&quot;,
          &quot;toDateTimeIso&quot;: &quot;2025-04-10T00:00:00.000Z&quot;
        },
        &quot;tags&quot;: [],
        &quot;supplemental&quot;: [],
        &quot;matchedListItems&quot;: [],
        &quot;isRelative&quot;: false
      },
      {
        &quot;firstLine&quot;: {
          &quot;full&quot;: &quot;2025-01-22 / 2026-10-24: Date range&quot;,
          &quot;datePart&quot;: &quot;2025-01-22 / 2026-10-24&quot;,
          &quot;rest&quot;: &quot; Date range&quot;,
          &quot;restTrimmed&quot;: &quot;Date range&quot;
        },
        &quot;properties&quot;: {},
        &quot;propOrder&quot;: [],
        &quot;textRanges&quot;: {
          &quot;whole&quot;: {
            &quot;from&quot;: 24,
            &quot;to&quot;: 61,
            &quot;type&quot;: &quot;event&quot;
          },
          &quot;datePart&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 24,
            &quot;to&quot;: 47
          },
          &quot;definition&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 24,
            &quot;to&quot;: 47
          }
        },
        &quot;dateRangeIso&quot;: {
          &quot;fromDateTimeIso&quot;: &quot;2025-01-22T00:00:00.000+00:00&quot;,
          &quot;toDateTimeIso&quot;: &quot;2026-10-25T00:00:00.000Z&quot;
        },
        &quot;tags&quot;: [],
        &quot;supplemental&quot;: [],
        &quot;matchedListItems&quot;: [],
        &quot;isRelative&quot;: false
      },
      {
        &quot;firstLine&quot;: {
          &quot;full&quot;: &quot;Dec 1 2025: Supports multiple date formats&quot;,
          &quot;datePart&quot;: &quot;Dec 1 2025&quot;,
          &quot;rest&quot;: &quot; Supports multiple date formats&quot;,
          &quot;restTrimmed&quot;: &quot;Supports multiple date formats&quot;
        },
        &quot;properties&quot;: {},
        &quot;propOrder&quot;: [],
        &quot;textRanges&quot;: {
          &quot;whole&quot;: {
            &quot;from&quot;: 61,
            &quot;to&quot;: 128,
            &quot;type&quot;: &quot;event&quot;
          },
          &quot;datePart&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 61,
            &quot;to&quot;: 71
          },
          &quot;definition&quot;: {
            &quot;type&quot;: &quot;dateRange&quot;,
            &quot;from&quot;: 61,
            &quot;to&quot;: 71
          }
        },
        &quot;dateRangeIso&quot;: {
          &quot;fromDateTimeIso&quot;: &quot;2025-12-01T00:00:00.000Z&quot;,
          &quot;toDateTimeIso&quot;: &quot;2025-12-02T00:00:00.000Z&quot;
        },
        &quot;tags&quot;: [],
        &quot;supplemental&quot;: [
          {
            &quot;raw&quot;: &quot;And longer descriptions&quot;,
            &quot;type&quot;: &quot;text&quot;
          }
        ],
        &quot;matchedListItems&quot;: [],
        &quot;isRelative&quot;: false
      }
    ]
  },
  &quot;ids&quot;: {},
  &quot;ranges&quot;: [
    {
      &quot;type&quot;: &quot;dateRange&quot;,
      &quot;from&quot;: 0,
      &quot;to&quot;: 10
    },
    {
      &quot;type&quot;: &quot;dateRangeColon&quot;,
      &quot;from&quot;: 10,
      &quot;to&quot;: 11
    },
    {
      &quot;type&quot;: &quot;dateRange&quot;,
      &quot;from&quot;: 24,
      &quot;to&quot;: 47
    },
    {
      &quot;type&quot;: &quot;dateRangeColon&quot;,
      &quot;from&quot;: 47,
      &quot;to&quot;: 48
    },
    {
      &quot;type&quot;: &quot;dateRange&quot;,
      &quot;from&quot;: 61,
      &quot;to&quot;: 71
    },
    {
      &quot;type&quot;: &quot;dateRangeColon&quot;,
      &quot;from&quot;: 71,
      &quot;to&quot;: 72
    }
  ],
  &quot;foldables&quot;: {
    &quot;24&quot;: {
      &quot;startIndex&quot;: 59,
      &quot;endIndex&quot;: 60,
      &quot;type&quot;: &quot;event&quot;,
      &quot;foldStartIndex&quot;: 59,
      &quot;startLine&quot;: 1
    },
    &quot;61&quot;: {
      &quot;startIndex&quot;: 103,
      &quot;endIndex&quot;: 127,
      &quot;type&quot;: &quot;event&quot;,
      &quot;foldStartIndex&quot;: 103,
      &quot;startLine&quot;: 3
    }
  },
  &quot;header&quot;: {},
  &quot;parseMessages&quot;: [],
  &quot;documentMessages&quot;: [
    {
      &quot;type&quot;: &quot;warning&quot;,
      &quot;message&quot;: &quot;Timezone not specified. Specifying a `timezone` in the header is highly recommended.&quot;
    }
  ],
  &quot;parser&quot;: {
    &quot;version&quot;: &quot;1.0.1&quot;
  }
}

Meridiem

noun

/mə·ˈri·dē·əm/

see also: 

meridiem documentation 

 A markwhen and markdown editor that supports 
 collaborative editing 
, 
 custom commands 
, 
 snippets 
, 
 custom visualizations 
, 
 autocomplete 
, 
 event highlighting 
, and 
 more 
. 

 Download (macOS arm64 beta) 

v0.2.15

2026-01-04

 Meridiem Editor 

Open in new tab -&gt; 

Remark.ing

verb gerund

/rəˈmärkˈiNG/

see also: 

remarking documentation 

 Writing with markwhen: Each entry becomes a tweet-like remark 

meridiem.markwhen.com/
bella/recipes.raw 

remark.ing/
bella/recipes

Sign in with Meridiem to get started

Documentation

Example

Meridiem

VS Code extension

Obsidian plugin

Discord

Remark.ing

Github

This website

mark-when/landing2

General issue tracking

mark-when/markwhen

Obsidian Plugin

mark-when/obsidian-plugin

Markwhen CLI

mark-when/mw

Timeline

mark-when/timeline

Parser

mark-when/parser

VS Code Extension

mark-when/vscode

View client library

mark-when/view-client

Calendar

mark-when/calendar

C2

mark-when/c2

Resume

mark-when/resume

## 收藏原因

值得保存的推文内容。

## 相关链接

- [原始推文]()

