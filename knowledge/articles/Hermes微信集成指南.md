---
title: "Hermes Agent微信集成指南"
type: article
date_added: 2026-04-11
source: "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin"
author: "Nous Research"
tags: [hermes, wechat, messaging, agent]
via: "Twitter书签 @Nous Research"
---

Hermes Agent 现在原生支持个人微信连接，通过 iLink Bot API 实现微信扫码接入，支持私聊和群聊，覆盖图片、视频、文件、语音消息，使用长轮询直连无需公网 IP。

## 核心功能

- **微信扫码连接**: 个人微信账号通过扫码即可接入 Hermes Agent
- **私聊群聊支持**: 两种聊天模式全覆盖
- **多媒体消息**: 图片、视频、文件、语音消息全覆盖
- **长轮询直连**: 不需要公网 IP，适合国内用户

## 使用方法

运行 `hermes update` 即可体验新功能。

## 技术细节

- 通过 iLink Bot API 连接个人微信
- 支持完整的 Hermes Agent 功能
- 与 CLI、Slack、Discord、Telegram 等入口并行使用

## 相关链接

- [官方文档](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
- [Hermes Agent官网](https://hermes-agent.nousresearch.com)
- [GitHub仓库](https://github.com/NousResearch/hermes-agent)
- [原始推文](https://x.com/NousResearch/status/2042821620281053641)