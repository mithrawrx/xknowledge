---
title: "Claude Code Rust索引器TS重写提速3倍"
type: tweet
date_added: 2026-04-10
author: "@lxfater"
tweet_id: "2042407796969521424"
tags: [claude-code, rust, typescript, performance]
via: "Twitter书签"
---

## 完整内容

Boris Cherny 把 Claude Code 里一个 Rust 写的索引器，用 TS 重写了一遍：速度快了 3 倍

你用 Claude Code 打 @ 的时候，它会帮你搜文件

这个搜索背后跑的是一个 Rust 索引器，通过 NAPI 调用，速度确实快

但在大代码库上，直接跑不动了

所以 Boris 没去修 Rust，直接让 Opus 把整个索引器移植成 TS

他给 Opus 的第一条 prompt 就是：把 Rust+NAPI 的文件索引编译成原生 TS，跑通原来的测试，然后证明新方案更快

跑完之后他又问，还有什么能优化的？在大 monorepo 里跑一下，P99 要压到 10ms 以下

结果出来了，但他打 @ 的时候还是觉得有点卡，就让 Opus 接着改

改到最后他说，手感很好了，上吧

几个小时就搞出了一个 PR，TS 写的，比原来的 Rust 还快

P99 从 46.80ms 降到 15.25ms
P50 从 17.78ms 降到 8.55ms
P95 从 22.56ms 降到 14.61ms

P99 快了整整 3 倍

但 TS 怎么可能比 Rust 快？瓶颈根本不在语言

NAPI 的桥接开销没了，预计算也不会阻塞主线程了，Opus 在过程中还找到了 8 项算法优化

快不快，跟语言没关系

## 引用推文

> @bcherny: Just got a nice DM from a big enterprise customer using Claude Code in one of the world's biggest codebases. Here's how we made @-mentions 3x faster in large enterprise codebases

## 收藏原因

展示了 AI（Claude Opus）在实际工程中的能力：将 Rust 代码移植到 TS，不仅跑通测试，还优化出比原版更快的性能。关键洞察是性能瓶颈不在语言本身，而是 NAPI 桥接开销和算法优化。

## 相关链接

- [原始推文](https://x.com/lxfater/status/2042407796969521424)
- [引用推文](https://x.com/bcherny/status/2042352720489955539)