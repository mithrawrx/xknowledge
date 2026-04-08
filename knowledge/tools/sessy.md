---
title: "Sessy"
type: tool
date_added: 2026-01-02
source: "https://github.com/marckohlbrugge/sessy"
tags: [email, observability, aws-ses, monitoring, self-hosted]
via: "Twitter 书签 @marckohlbrugge"
---

Sessy 是一个开源的 Amazon SES 邮件可观测性平台。提供精美的自托管界面，用于监控和分析邮件投递、退信、投诉、打开、点击等事件，无需依赖昂贵的商业 SES 包装服务。

Marc Köhlbrugge 从 Postmark 切换到 AWS SES 后，为了节省成本和提高投递率，但怀念 Postmark 的精美监控 UI。他没有付费使用另一个 VC 支持的包装服务，而是创建了一个可以自托管的开源替代方案。

## 核心功能

- **事件时间线** - 单一视图展示所有邮件事件（发送、投递、退信、投诉、打开、点击）
- **自托管** - 在自己的基础设施上运行，不是 SaaS
- **成本低** - 消除昂贵的 SES 包装服务费用
- **精美 UI** - 专业邮件监控界面
- **开源** - O'Saasy 许可证，社区维护
- **Docker 支持** - Docker 轻松部署

## 技术细节

- **语言:** Ruby (Rails)
- **许可证:** O'Saasy（开源且商业友好）
- **仓库:** github.com/marckohlbrugge/sessy
- **Star 数:** 199
- **状态:** 生产可用（BetaList 使用中），活跃开发
- **灵感来源:** 基于 @37signals 的 Fizzy

## 安装

Docker 最简单的部署方式：

```bash
docker run -p 80:80 \
  -e SECRET_KEY_BASE=$(openssl rand -hex 64) \
  -e DISABLE_SSL=true \
  -v sessy:/rails/storage \
  ghcr.io/marckohlbrugge/sessy:main
```

## 使用场景

- 监控 AWS SES 邮件投递率
- 跟踪邮件事件和用户互动
- 商业邮件监控服务的低成本替代
- 注重隐私团队的自托管邮件可观测性

## 相关链接

- [GitHub 仓库](https://github.com/marckohlbrugge/sessy)
- [原始推文](https://x.com/marckohlbrugge/status/2005972157445333371)
- [灵感来源: 37signals 的 Fizzy](https://github.com/basecamp/fizzy)