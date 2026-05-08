---
title: "khazix-skills 深度研究方法论"
type: tool
date_added: 2026-04-14
source: "https://github.com/KKKKhazix/khazix-skills"
tags: [深度研究, AI方法论, Claude Code, Skill]
via: "Twitter书签 @chenchengpro"
---

Khazix Skills 是数字生命卡兹克开源的 AI 工具箱，包含横纵分析法深度研究框架和微信公众号长文写作 Skill。两年打磨积累，现已完整开源。

## 核心功能

**横纵分析法 (hv-analysis)**
- 纵轴：沿时间线还原事物完整故事，从诞生到现在，理清历史与因果
- 横轴：当下时间点做竞品对比，理解位置与差异
- 交叉分析：发现单独看任何一条轴都看不到的东西

**khazix-writer 写作 Skill**
- 五种文章原型：调查实验型、产品体验型、现象解读型、工具分享型、方法论分享型
- 写作技法：长短句节奏、口语化打断、知识顺嘴带出、私人视角连接公共议题
- 四层自检体系：L1硬规则扫描 → L2风格检查 → L3内容审查 → L4人味终审

## 技术特点

- 并行子 Agent 分三路收集信息（纵向历史、横向竞品、补充资料）
- 接入 arXiv API 查论文
- 自动生成排版精美的 A4 PDF 报告
- 根据研究对象类型自动调整侧重（产品/公司/人物）

## 反向约束设计

- 禁用冒号和破折号、禁用直引号
- 禁用「说白了」「本质上」「综上所述」「值得注意的是」等 AI 死亡标记词
- 禁止编造案例、禁止模糊称呼
- 人机分工：AI 负责找证据、扩写、背景知识；人类负责一手观察、核心创意、真实情感

## 安装方式

**通过 Agent 安装**
```
安装这个 skill：https://github.com/KKKKhazix/khazix-skills
```

**手动安装**
- Claude Code: `~/.claude/skills/`
- OpenClaw: `~/.openclaw/skills/`
- Codex: `~/.agents/skills/`

## 使用场景

- 快速建立陌生领域的认知框架（13分钟出一万字报告）
- 深度研究产品版本迭代和功能对比
- 研究公司融资历程和商业模式
- 研究人物职业轨迹和同领域对比
- 写作高质量公众号长文

## 相关链接

- [GitHub仓库](https://github.com/KKKKhazix/khazix-skills)（4652 stars, Python）
- [横纵分析法公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA)
- [写作 Skill 公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg)
- [原始推文](https://x.com/chenchengpro/status/2044063181610594722)