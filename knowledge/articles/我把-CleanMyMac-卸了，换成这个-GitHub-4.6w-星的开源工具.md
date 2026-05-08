---
title: 我把 CleanMyMac 卸了，换成这个 GitHub 4.6w 星的开源工具
author: 阿蔺A-Lin
source: X/Twitter Article
url: https://x.com/i/article/2044029172528623617
archived: 2026-04-14
---

# 我把 CleanMyMac 卸了，换成这个 GitHub 4.6w 星的开源工具

**作者**: 阿蔺A-Lin
**来源**: [https://x.com/i/article/2044029172528623617](https://x.com/i/article/2044029172528623617)

## 内容摘要

电脑越用垃圾越多，甚至我系统数据已经用了 268GB，实在是令人匪夷所思。
CleanMyMac 我用过一段，效果很难评价。macOS 自带的存储管理更是差劲
这两年 AI 强大之后，大家用 AI...

## 内容节选

我把 CleanMyMac 卸了，换成这个 GitHub 4.6w 星的开源工具

电脑越用垃圾越多，甚至我系统数据已经用了 268GB，实在是令人匪夷所思。

CleanMyMac 我用过一段，效果很难评价。macOS 自带的存储管理更是差劲

这两年 AI 强大之后，大家用 AI 清电脑也分了两派：一派放得很开，一句"帮我清垃圾"就让 AI 自由发挥；另一派完全不敢碰，怕它误删重要东西，宁可手动翻文件夹。

两派都有点矫枉过正。AI 黑盒摸不到边界，纯手动又太累。

中间其实有更稳的做法，用大神写的、逻辑清晰、边界明确的开源工具。今天这个 Mole 就是这种。

免费开源，GitHub 4.6w Star，作者是 tw93 大佬  @HiTw93
项目地址：https://github.com/tw93/Mole

站在巨人肩膀上，比两个极端都稳。

---

操作很简单，跟着走就行，核心就三个命令：

```bash
brew install mole      # 安装
mo clean --dry-run     # 预览能清多少，不动手
mo clean               # 确认后执行
```

下面详细讲怎么用，还有两个必须提醒的安全点。

---

## 1️⃣ 安装

终端里敲：

```bash
brew install mole

```

没装 Homebrew 的用这个：

```bash
curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash
```

装完就能用 mo 这个命令了。

## 2️⃣先看看你的 Mac 现在什么状况

```bash
mo status

```

我这台机器 Health 评分 69 分。磁盘 436G...

## 原始推文

https://t.co/3i7T0TrV4I

## 归档信息

- **推文链接**: https://x.com/alin_zone/status/2044034594891280556
- **归档日期**: 2026-04-14
