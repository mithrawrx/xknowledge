# Friday, May 8, 2026

## @grapeot - Agent文件系统架构转向分析
> Anthropic 发现把 MCP 工具定义改成让 agent 自己从文件系统按需加载，token 从 150K 降到 2K，省了 98.7%。Vercel 的模板说不要向量数据库。Manus 的核心是把文件系统当 context。这个转向背后的前因后果、四家公司各自的设计判断差异、和四个盲区，我写清楚了。

- **推文**: https://x.com/grapeot/status/2052622046300098781
- **链接**: https://yage.ai/share/agent-filesystem-survey-20260507.html
- **归档**: [Agent文件系统架构转向分析](./knowledge/articles/Agent文件系统架构转向分析.md)
- **概述**: 鸭哥对比分析 Anthropic、Vercel、Manus 等四家公司在 Agent 文件系统方向的架构转向，token 节省高达 98.7%。

## @Imlaomao - 美股编年史历史数据平台
> 推荐一个网站，漂亮得不像学术网站的美股历史数据汇集平台，我的朋友做的，经他同意，分享给大家。

- **推文**: https://x.com/Imlaomao/status/2052676509534667258
- **链接**: https://historyofmarket.com
- **归档**: [美股编年史历史数据平台](./knowledge/articles/美股编年史历史数据平台.md)
- **概述**: 汇集美股百年历史数据的可视化平台，覆盖标普500、纳斯达克、道琼斯三大指数的走势、估值和回撤数据。

## @Imlaomao - 美元流动性指标监控平台
> 另外一个网站，是监控美元流动性的，这个对做宏观交易的人有用，也是同一个作者。

- **推文**: https://x.com/Imlaomao/status/2052677830979510340
- **链接**: https://dollarliquidity.com/zh
- **归档**: [美元流动性指标监控平台](./knowledge/articles/美元流动性指标监控平台.md)
- **概述**: 实时追踪美元流动性和市场流动性指标的监控平台，为宏观交易者提供数据支持，与美股编年史为同一作者。


# Wednesday, May 6, 2026

## @shao__meng - Warp团队开源Oz Skills集合
> Warp 团队这是要把开源进行到底了，在 Warp、Doc 开源后，又把团队用于加速工作流的 Oz Skills 开源了... 15 个 Skills 详细拆解

*引用 @warpdotdev:*
> The Warp team uses a lot of Skills to speed up our workflow, so we open-sourced them.

- **推文**: https://x.com/shao__meng/status/2051865033425190994
- **链接**: https://github.com/warpdotdev/oz-skills（Warp团队Agent Skills集合, 724 stars, Python）
- **归档**: [oz-skills](./knowledge/tools/oz-skills-Warp团队AgentSkills集合.md)
- **概述**: Warp 团队开源的 15 个 Agent Skills，覆盖代码生成、文档、测试等开发环节，与 Oz Agent 框架配合使用，加速开发工作流。

## @0xKingsKuan - Ossium GitHub项目发现神器与PageIndex RAG工具
> GitHub开源项目发现神器 - Ossium OSS开源项目助手，专治 'GitHub刷到吐却找不到好项目' 的痛点

*引用 @0xKingsKuan:*
> RAG 行业要被干翻了! 这是 PageIndex 向量零 RAG 革命神器...

- **推文**: https://x.com/0xKingsKuan/status/2051889932265021816
- **链接**: https://ossium.live（GitHub项目发现平台）
- **归档**: [Ossium](./knowledge/tweets/Ossium-GitHub项目发现神器.md)
- **概述**: 推荐了 Ossium（GitHub 开源项目发现平台）和 PageIndex（零向量 RAG 技术），解决开源项目发现和技术文档检索两大痛点。

## @RocM301 - MacShot开源macOS截图工具
> 这可能是目前最强的开源 macOS 截图工具：MacShot。告别付费订阅，它不仅原生、轻量，还把 CleanShot X 和 Shottr 的活儿全干了

- **推文**: https://x.com/RocM301/status/2051903619054948794
- **链接**: https://github.com/sw33tLie/macshot（原生macOS截图录屏工具, 1501 stars, Swift）
- **归档**: [MacShot](./knowledge/tools/MacShot-macOS截图工具.md)
- **概述**: 功能强大的原生 macOS 截图和录屏工具，Swift 开发，轻量高效，可替代 CleanShot X 和 Shottr，免费开源无需付费订阅。

## @JohnsonZ91127 - 国产存储模组三雄分析
> 这是我们半导体研究员存芯早察的最新文章：谁将率先冲击2000亿市值？——国产存储模组三雄分析。江波龙、佰维、德明利三家模组厂的深度分析...

- **推文**: https://x.com/JohnsonZ91127/status/2051934329022939457
- **归档**: [国产存储模组三雄分析](./knowledge/tweets/国产存储模组三雄分析.md)
- **概述**: 半导体研究员对国产存储模组三雄（江波龙、佰维、德明利）的深度对比分析，探讨谁将率先冲击2000亿市值。

## @vista8 - 打造活人感AI助理实战经验
> 如果你想做活人感的AI助理，一定要看洛小山的这篇1.6w字的长文。相当多干货和实战经验，发现这块做得好的，都是游戏达人或从业者。

- **推文**: https://x.com/vista8/status/2052027106410811473
- **链接**: mp.weixin.qq.com（微信文章，被验证码拦截）
- **归档**: [活人感AI助理实战经验](./knowledge/tweets/活人感AI助理实战经验.md)
- **概述**: 推荐洛小山1.6万字长文，分享打造"活人感"AI助理的实战经验，指出游戏从业者在此领域的独特优势。


# Tuesday, May 5, 2026

## @mylifcc - PageIndex：抛弃向量检索的无向量RAG新方案
> 100% 开源，建议所有做 RAG 的都看看 👧

- **推文**: https://x.com/mylifcc/status/2051569275228545352
- **链接**: https://github.com/VectifyAI/PageIndex - "Document Index for Vectorless, Reasoning-based RAG" (30047 stars, Python)
- **上下文**: "PageIndex 这思路真的很优雅！以前 RAG 一直被 chunking + embedding + 向量检索绑架，现在直接把这些全扔掉，建一个树状索引..."
- **归档**: [PageIndex-无向量RAG.md](./knowledge/tools/PageIndex-无向量RAG.md)
- **概述**: 抛弃传统 RAG 三件套（chunking、embedding、向量检索），用树状索引实现基于推理的无向量文档检索。100% 开源，Python 实现。

## @JohnsonZ91127 - 大宇高通研报：布局未来，低估当下
> 大宇出品，必属精品，btw：我持有高通

- **推文**: https://x.com/JohnsonZ91127/status/2051573565879947283
- **链接**: https://x.com/i/article/2051437438049161216 - 高通研报：布局未来，低估当下 (1.8万字深度分析)
- **引用**: "https://t.co/wbVyJEi5IV" by @BTCdayu (大宇)
- **归档**: [高通研报-布局未来低估当下.md](./knowledge/articles/高通研报-布局未来低估当下.md)
- **概述**: 大宇撰写的 1.8 万字高通公司深度分析研报，从手机芯片、汽车、IoT 多维度拆解业务布局与估值，论证其被市场低估的投资价值。

## @VincentLogic - TablePro：Mac原生轻量级数据库管理工具
> Mac 程序员必备，发现个超好用的数据库管理工具。TablePro，原生 SwiftUI 开发的，不是 Electron 套壳，启动不到 1 秒，内存才占 80MB... 支持 MySQL、PG、SQLite、MongoDB、Redis 等 18+ 种数据库...

- **推文**: https://x.com/VincentLogic/status/2051606319157686572
- **归档**: [TablePro-Mac数据库管理工具.md](./knowledge/tweets/TablePro-Mac数据库管理工具.md)
- **概述**: TablePro 是原生 SwiftUI 开发的 macOS 数据库管理工具，非 Electron 套壳，启动不到 1 秒、内存仅 80MB，支持 18+ 种数据库。

## @ai_xiaomu - Reddit需求挖掘：从小众社区发现百万爆款灵感
> Reddit我一直没玩懂，因为那古怪的时间线。但里面老外多啊，信息值钱啊，随便搬一点出来就是百万爆款，这篇不容错过⬇️

- **推文**: https://x.com/ai_xiaomu/status/2051613476985204910
- **链接**: https://x.com/i/article/2050820311407620097 - 如何在Reddit上挖掘小而美需求 by LISA
- **引用**: by @MindOS_Lisa (LISA)
- **归档**: [Reddit上挖掘小而美需求.md](./knowledge/articles/Reddit上挖掘小而美需求.md)
- **概述**: LISA 的 Reddit 需求挖掘指南，教读者如何在这个英文社区中发现小众需求，将信息差转化为产品灵感和爆款内容。

## @billtheinvestor - Python交易策略比较框架
> 有人开发了一个用于比较交易策略的 Python 框架，然后将一切都开源了

- **推文**: https://x.com/billtheinvestor/status/2051666175437021609
- **归档**: [Python交易策略比较框架](./knowledge/tweets/Python交易策略比较框架.md)
- **概述**: Python 交易策略对比框架，支持多种策略的回测分析和对比，适合量化交易研究。

## @zarazhangrui - Beautiful HTML幻灯片模板
> Introducing Beautiful HTML Templates: I made some stunning HTML slide templates & open-sourced them. If you use this template system, it will literally be impossible for your agent to produce something ugly

- **推文**: https://x.com/zarazhangrui/status/2051768995188228178
- **归档**: [Beautiful HTML Templates](./knowledge/tweets/Beautiful-HTML-Templates.md)
- **概述**: AI Agent 友好的 HTML 幻灯片模板系统，开源发布，确保 Agent 生成的演示文稿视觉效果出众。


# Monday, May 4, 2026

## @NFTCPS - Dexter：专为金融研究打造的自主AI Agent + RaTeX纯Rust公式渲染
> 金融版Claude Code来了，这玩意儿有点东西！Dexter——专门为深度金融研究打造的自主AI Agent...

- **推文**: https://x.com/NFTCPS/status/2051177005467787575
- **链接**: https://github.com/virattt/dexter - "An autonomous agent for deep financial research" (24839 stars, TypeScript)
- **链接**: https://github.com/erweixin/RaTeX - ">99.5% KaTeX syntax coverage. LaTeX math renderer in pure Rust" (1142 stars, Rust)
- **引用**: "做教育App的注意了，这个东西可能要颠覆你的技术选型... RaTeX... 纯 Rust 公式渲染引擎" by @NFTCPS
- **归档**: [dexter-金融深度研究Agent.md](./knowledge/tools/dexter-金融深度研究Agent.md)、[RaTeX-纯Rust公式渲染引擎.md](./knowledge/tools/RaTeX-纯Rust公式渲染引擎.md)
- **概述**: Dexter 是专注于深度金融研究的自主 AI Agent，2.4 万星；RaTeX 是纯 Rust 编写的 LaTeX 公式渲染引擎，KaTeX 语法覆盖率超 99.5%，适合教育 App 集成。

## @wey_gu - Deep GraphRAG：蚂蚁图检索自适应重排 + GRPO图抽取微调
> 蚂蚁的 Deep GraphRAG 论文... DW GRPO 和我去年做的探索工作是差不多的哈... 蒸馏老师模型的知识图谱抽取能力 RLFT GRPO 到小模型上...

- **推文**: https://x.com/wey_gu/status/2051262658612211734
- **链接**: https://github.com/wey-gu/grpo-graph-extraction - "Qwen GRPO Graph Extraction RL Finetune" (69 stars, Jupyter Notebook)
- **链接**: https://arxiv.org/abs/2601.11144 - "Deep GraphRAG: A Balanced Approach to Hierarchical Retrieval and Adaptive Integration"
- **引用**: "Deep GraphRAG: Hierarchical Graph Retrieval with Adaptive Re-ranking..." by @TheYotg
- **归档**: [grpo-graph-extraction-GRPO图抽取微调.md](./knowledge/tools/grpo-graph-extraction-GRPO图抽取微调.md)
- **概述**: 蚂蚁 Deep GraphRAG 论文提出分层图检索与自适应重排方法；作者古思为开源了使用 GRPO 对 Qwen 进行知识图谱抽取能力 RL 微调的项目，将大模型的图谱抽取能力蒸馏到小模型。

## @AYi_AInotes - Karpathy编程铁律：100行CLAUDE.md干翻所有编码prompt
> 一个100行的文件，干翻了所有LLM编码prompt。GitHub Trending第一，一周暴涨4.4万星，目前已破11万星！没有框架、没有依赖、零配置。就一个 CLAUDE.md 文件，把 Andrej Karpathy 反复吐槽的 LLM 编码坏习惯，浓缩成4条铁律。

- **推文**: https://x.com/AYi_AInotes/status/2051321729843069037
- **链接**: https://github.com/forrestchang/andrej-karpathy-skills - "A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations" (120301 stars)
- **归档**: [andrej-karpathy-skills.md](./knowledge/tools/andrej-karpathy-skills.md)
- **概述**: 将 Karpathy 对 AI 编程代理的吐槽浓缩为 4 条编码铁律，一个 CLAUDE.md 文件即可显著提升 Claude Code 编码质量。GitHub Trending 第一，一周暴涨 4.4 万星。


## @wey_gu - 蚂蚁Deep GraphRAG论文与GRPO图抽取微调

> 蚂蚁的 GraphRAG 论文
>
> 这里的 DW GPRO 和我去年做的探索工作是差不多的哈
>
> 蒸馏老师模型的知识图谱抽取的能力 RLFT GRPO 到小的模型上。我的工作下是在超小 qwen 模型、从 R1 蒸馏，效果好过 gpt-4o。
>
> 说起来确实有打算把这个工作放到 Nowledge Mem 的本地模型上的哈。
>
> 这里的召回策略也和 Nowlege Mem 不谋而合。
>
> 说一个我的背景：我是第一个给出 GraphRAG 这个 term 的人哈，在 23 年夏天，最开始给出这个工作是在 LlamaIndex 中引入了 graph store 用 LlamaIndex 和 NebulaGraph 给出了开源的 GraphRAG 的实现，在那之后两年，我一直带团队做 GraphRAG 的产品。微软的 GraphRAG 论文（他们的创新是引入了 ledein 👍处理 global 问题非常棒）有引用我们的工作，但是年份说错了，不是 24 年，是 23 年
>
> 那个 grpo 的工作在这里哈
>
> https://t.co/ViqpG50IHd
>
> *引用 @TheYotg:* Deep GraphRAG: Hierarchical Graph Retrieval with Adaptive Re-ranking
>
> RAG systems have a fundamental problem. Search broadly and you lose the detail. Search locally and you miss the bigger picture.
>
> Most graph-based RAG approaches pick one and hope for the best. Researchers from Ant Group and Zhejiang University built Deep GraphRAG to stop making that trade-off.
>
> The core idea: use a 3-level hierarchy to navigate a knowledge graph from the big picture down to the specific detail, with smart filtering at every stage, not just at the end.
>
> The payoff is significant. On multi-hop reasoning tasks - the kind where you need to connect facts across multiple sources - it hits 45.44% exact match accuracy. That's vs 38.75% for the previous best and just 10% for standard local search. And it runs 86% faster than comparable recursive methods.
>
> A compact 1.5B parameter model reaches 94% of what a 72B model achieves. Smaller, faster, more accurate.
>
> 🔗 https://t.co/VhsMTjfDPP

- **推文**: https://x.com/wey_gu/status/2051262658612211734
- **引用推文**: https://x.com/TheYotg/status/2051246211546452131
- **链接**: https://github.com/wey-gu/grpo-graph-extraction（GitHub, 69 stars）；https://arxiv.org/abs/2601.11144（Deep GraphRAG 论文）
- **归档**: [grpo-graph-extraction-GRPO图抽取微调](./knowledge/tools/grpo-graph-extraction-GRPO图抽取微调.md)
- **概述**: GraphRAG 术语首创者 @wey_gu 分享蚂蚁 Deep GraphRAG 论文及自己的 GRPO 图抽取微调工作。使用 RLFT + GRPO 将大模型的知识图谱抽取能力蒸馏到超小 Qwen 模型上，效果超过 gpt-4o。Deep GraphRAG 提出三层层次图检索 + 自适应重排方法，1.5B 模型达到 72B 模型 94% 的性能。

## @NFTCPS - Dexter金融深度研究Agent & RaTeX纯Rust公式渲染引擎

> 金融版Claude Code来了，这玩意儿有点东西！
>
> Dexter——专门为深度金融研究打造的自主AI Agent，不是那种问一句答一句的废物工具，它能像真人分析师一样自己思考、规划、学习。
>
> 几个核心能力：
> 1️⃣ 自动跑金融研究和分析
> 2️⃣ 实时抓取处理市场数据
> 3️⃣ 多步骤推理自主决策
> 4️⃣ 结果还能自我验证优化
>
> 我去先试了，感兴趣的自己冲👇
>
> 🔗 https://t.co/WC9lDyW8wo
>
> *引用 @NFTCPS:* 做教育App的注意了，这个东西可能要颠覆你的技术选型
>
> 一直以来移动端渲染数学公式这件事，WebView就是那根永远绕不过去的刺。你加载一条公式，背后跟着的是整套浏览器内核，内存哗哗地吃，启动龟速，用户体验烂得你自己都不好意思说。
>
> 然后我看到了 RaTeX。
>
> 这玩意儿用纯 Rust 从零写的公式渲染引擎，直接把 JavaScript 和 WebView 整个从链路里踢飞，不是优化，是直接干掉。
>
> 一套核心代码能覆盖七个平台：① iOS ② Android ③ Flutter ④ React Native ⑤ Web ⑥ PNG ⑦ SVG
>
> 全原生渲染，零 JS 依赖，完全离线跑，不需要联网加载任何东西。
>
> 功能上也没偷懒：① 语法对 KaTeX 兼容度约 99%，你原来的公式基本照搬 ② 分数、根号、积分、矩阵这些常用表达都稳 ③ 顺带支持化学方程式和物理单位书写 ④ 理工科场景基本全覆盖
>
> 说白了就是：又快、又轻、又能跨端、还不依赖任何 Web 技术栈。
>
> 你做教育、学术类 App，现在还在用 WebView 那套又重又慢的方案，纯粹是在给自己挖坑。
>
> 🔗 https://t.co/jJlqlLRrzH

- **推文**: https://x.com/NFTCPS/status/2051177005467787575
- **引用推文**: https://x.com/NFTCPS/status/2051176614407581755
- **链接**: https://github.com/virattt/dexter（GitHub, 24839 stars）；https://github.com/erweixin/RaTeX（GitHub, 1142 stars）
- **归档**: [dexter-金融深度研究Agent](./knowledge/tools/dexter-金融深度研究Agent.md)、[RaTeX-纯Rust公式渲染引擎](./knowledge/tools/RaTeX-纯Rust公式渲染引擎.md)
- **概述**: 两个值得关注的工具：Dexter 是专为金融深度研究设计的自主 AI Agent，能自主思考、规划和执行市场分析；RaTeX 是纯 Rust 实现的 KaTeX 兼容公式渲染引擎，零 WebView 依赖，覆盖 iOS/Android/Flutter/RN/Web 等七平台，对教育 App 技术选型有颠覆性意义。

---

## @qkl2058 - 中国工程师AI交易胜率九成两天赚六万美金

> 这哥们儿是个中国工程师，交易胜率接近九成，两天就赚了六万美金。
>
> 他压根不用看K线，也不用预测行情——Claude和他搭的那套六层代理系统，把活儿全干了。
>
> 优势全藏在数字和数学里头，所以他印钞一样赚钱，风险几乎为零。
>
> 说真的，现在做预测市场，你只要有AI，加上愿意动手开发，一年赚个500万美元不是梦。
>
> 大机构和那些几十亿的资本还没进场——不是不想，是声誉风险太大，这圈子现在也太早期。
>
> 所以才会有这种普通学生，把专业级别的打法用到Polymarket上。
>
> 一千笔交易赢九百笔，他吃的就是纯粹的低效率。

- **推文**: https://x.com/qkl2058/status/2050822077423489040
- **概述**: 一名中国工程师使用 Claude + 六层 AI 代理系统进行交易，胜率接近 90%，两天赚取六万美金。作者认为预测市场仍处于早期阶段，大机构因声誉风险尚未入场，个人开发者利用 AI + 技术能力可获得巨大优势。

---
# Sunday, May 3, 2026

## @qkl2058 - AI六层代理系统：中国工程师预测市场高胜率套利
> 这哥们儿是个中国工程师，交易胜率接近九成，两天就赚了六万美金。他压根不用看K线，也不用预测行情——Claude和他搭的那套六层代理系统，把活儿全干了。优势全藏在数字和数学里头，所以他印钞一样赚钱，风险几乎为零。说真的，现在做预测市场，你只要有AI，加上愿意动手开发，一年赚个500万美元不是梦。

- **推文**: https://x.com/qkl2058/status/2050822077423489040
- **归档**: [AI六层代理系统预测市场套利.md](./knowledge/tweets/AI六层代理系统预测市场套利.md)
- **概述**: 中国工程师利用 Claude 搭建六层 AI 代理系统，在预测市场实现近 90% 胜率、两天获利 6 万美元，展示了 AI + 开发能力在金融领域的巨大潜力。


# Saturday, May 2, 2026

## @tuturetom - Codex Pets React：Codex宠物精灵React封装库
> 本项目参考了
> - https://github.com/backnotprop/codex-pets-react
> - https://codex-pet-share.onrender.com
> - https://codex-pets.net
> 向他们表达诚挚的感谢❤️

- **推文**: https://x.com/tuturetom/status/2050604849352290475
- **链接**: https://github.com/backnotprop/codex-pets-react - "Declarative React wrapper for Codex pet spritesheets" (30 stars, TypeScript)
- **上下文**: "内建 8 款超有感觉的宠物 pets" by @tuturetom
- **归档**: [codex-pets-react-Codex宠物精灵封装.md](./knowledge/tools/codex-pets-react-Codex宠物精灵封装.md)
- **概述**: 为 Codex 宠物精灵 spritesheets 提供声明式 React 封装，内建 8 款复古风格像素宠物，可用于 React 项目中添加趣味动画元素。

## @billtheinvestor - 本周金融领域GitHub增长Top10排行榜
> 本周金融领域增长最快的 GitHub 仓库：1. TradingAgents (+7.9K ★)... 2. FinceptTerminal (+4.3K ★)... 3. daily_stock_analysis... 4. Vibe-Trading... 5. QuantDinger... 6. TradingAgents-CN... 7. last30days-skill... 8. qlib... 9. scientific-agent-skills... 10. OpenBB

- **推文**: https://x.com/billtheinvestor/status/2050640973974380784
- **归档**: [金融领域GitHub增长Top10周排行.md](./knowledge/tweets/金融领域GitHub增长Top10周排行.md)
- **概述**: 2026年5月第一周金融领域 GitHub 仓库增长排行，TradingAgents 以 7.9K 星增量登顶，AI 金融代理类项目占据半壁江山。


## @billtheinvestor - 本周金融领域增长最快的GitHub仓库Top10

> 本周金融领域增长最快的 GitHub 仓库：
>
> 1. TradingAgents (+7.9K ★) 来自 UCLA/MIT 的多智能体 LLM 交易框架。包含基本面分析师、情绪分析师、技术面分析师、风险管理师，支持 DeepSeek V4 思维模式。
>
> 2. FinceptTerminal (+4.3K ★) 基于 C++20 + Qt6 构建的开源 Bloomberg 替代方案。拥有 37 个巴菲特/芒格/林奇/格雷厄姆风格的 AI 智能体。支持 16 个券商集成的实时交易。内置 MCP + AI 量化标签页。
>
> 3. daily_stock_analysis (+2.3K ★) 面向美股、A 股和港股市场的 LLM 股票分析器。自动构建包含入场/出场水平的每日决策仪表盘。通过 GitHub Actions 推送到微信/Telegram/Discord/Email。
>
> 4. Vibe-Trading (+1.9K ★) 个人交易智能体。自然语言 → 策略 → 回测 → 导出至 TradingView/MT5。只需一个 pip install，即可拥有属于你自己的 AI 交易台。
>
> 5. QuantDinger (+837 ★) 自托管 AI 量化操作系统。研究市场、生成 Python 策略、回测想法、运行实盘交易。支持加密货币、通过 IBKR 交易股票、通过 MT5 交易外汇。一个 Docker Compose，你的基础设施，你的数据。
>
> 6. TradingAgents-CN (+641 ★) TradingAgents 的中文分支。针对 A 股市场、中文数据源和国产大模型进行了完全本地化。
>
> 7. last30days-skill (+630 ★) AI 智能体技能，可研究过去 30 天内 Reddit、X、YouTube、HN、Polymarket 及全网的任何话题。可接入任何智能体框架。
>
> 8. qlib (+569 ★) 微软推出的面向 AI 的量化投资平台。端到端流程：数据 → Alpha → 投资组合 → 执行。目前最严肃的开源量化基础设施。
>
> 9. scientific-agent-skills (+511 ★) 用于研究、科学、工程、分析和金融的即用型智能体技能。可接入任何智能体框架。涵盖生物信息学、化学信息学，以及现在的 Hugging Science。
>
> 10. OpenBB (+387 ★) 面向分析师、量化研究员和 AI 智能体的开源金融数据平台。在一个平台上集成股票、加密货币、期权、衍生品、固定收益。

- **推文**: https://x.com/billtheinvestor/status/2050640973974380784
- **概述**: 本周金融领域增长最快的 10 个 GitHub 仓库盘点，涵盖多智能体交易框架（TradingAgents）、开源 Bloomberg 替代（FinceptTerminal）、LLM 股票分析器、自托管量化 OS 等。TradingAgents 以 +7.9K stars 领跑，qlib 和 OpenBB 作为微软级基础设施也值得关注。

## @tuturetom - Codex Pets React 引用致谢

> *回复 @tuturetom:* 内建 8 款超有感觉的宠物 pets https://t.co/sRqw2poHxb
>
> 本项目参考了
>
> - https://t.co/jVKJwIu4K0
> - - https://t.co/JzWc4lzb3X
> - https://t.co/TuMSZTLDjH
>
> 向他们表达诚挚的感谢❤️

- **推文**: https://x.com/tuturetom/status/2050604849352290475
- **父推文**: https://x.com/tuturetom/status/2050604845346717895
- **链接**: https://github.com/backnotprop/codex-pets-react（GitHub, 30 stars）
- **归档**: [codex-pets-react-Codex宠物精灵封装](./knowledge/tools/codex-pets-react-Codex宠物精灵封装.md)
- **概述**: Codex Pets React 项目的致谢回复，列出了三个参考项目：codex-pets-react、codex-pet-share 和 codex-pets.net。

---
日期: Sunday, April 26, 2026

## @vikingmute - Matt Pocock's Agent Skills

> 看别人推荐了 TS 大神 Matt Pocock 的个人 skills 集合：https://t.co/WNFwxzUGgs
>
> 真的是非常不错，有活人气息，就是因为它本来就是 Matt Pocock 自己日常用的，不是为了教别人而造的完美框架。
>
> 都是从他的 .claude 目录里扒出来的，没有过度包装。
>
> 从 Planning & Design 到 Development 再到 Tooling & Setup 最后 Writing & Knowledge 能窥探到他自己真正的工程师思维。
>
> 我不仅仅是下载 skills，而是去阅读其中的内容来感受它的思考方式。
>
> 个人很喜欢：grill-me 让 AI 疯狂地毫不留情地 grill 你，直到你对某个计划/设计或方案的每一个分支/每一个决策都想清楚，达成共识为止。

- **推文**: https://x.com/vikingmute/status/2048301287545184658
- **链接**: https://github.com/mattpocock/skills（GitHub, 23213 stars）
- **归档**: [Matt-Pocock-Agent-Skills](./knowledge/tools/Matt-Pocock-Agent-Skills.md)
- **概述**: TS 大神 Matt Pocock 的实战 Agent Skills 集合，从 Planning/Design 到 Development/Tooling/Writing 的完整工程师工作流。直接从个人 .claude 目录扒出，有活人气息。特别推荐 grill-me：让 AI 毫不留情审视你的每个决策。

---

日期: Saturday, April 25, 2026

## @runes_leo - Claude Code Workflow Template v2

> Claude Code 工作流模板 v2 出来了。
>
> 继续重度用了一个半月，14 条 P0 铁律、patterns.md 2366 行——同一个坑还是踩了第三遍。
>
> 3 个月前那版只有 Layer 0/1/2（auto-loaded rules / on-demand docs / hot data）。这一个半月想明白一件事：
>
> 规则只是希望你自觉。
> Hook 才是强制拦截。
>
> v2 加了 Layer 3 — Claude 准备动手前，规则被强制注入。不再赌它记得。
>
> *引用 @runes_leo:* 用 Claude Code 三个多月的完整工作流，开源了。昨天发了条论文对照拆解，1500+ 收藏、1000+ 赞——收藏比赞多，说明大家想拿回去用。论文作者 @mave99a 评论说是他看到的和流行说法对比最清晰的一篇。既然要用，就直接给。花了一天剥离敏感信息，保留通用框架。不是模板。是一个每天在跑的活系统...

- **推文**: https://x.com/runes_leo/status/2048013195563172162
- **引用推文**: https://x.com/runes_leo/status/2029400139392012347
- **链接**: https://github.com/runesleo/claude-code-workflow（GitHub, 652 stars）
- **归档**: [Claude-Code-Workflow-Template](./knowledge/tools/Claude-Code-Workflow-Template.md)
- **概述**: 经过3个月日常使用打磨的 Claude Code 工作流模板。v2 新增 Layer 3 Hook 强制拦截层，在 Claude 准备动手前强制注入规则。三层架构解决记忆管理、上下文工程和任务路由问题。

---

日期: Tuesday, April 21, 2026
## @QingQ77 - agents-md 高级工程师行为规范

> 一个扔进项目根目录的 AGENTS.md 文件，让 Claude Code、Codex、Cursor 这类编程代理一上来就按高级工程师的方式干活。
>
> https://t.co/VaZHZxJfdF
>
> agents-md 是一份可直接放入项目根目录的 AGENTS.md 文件，使各类编程代理遵循"高级工程师"行为规范。它综合了 Karpathy 的四大编程代理失败原则和 Boris Cherny 的 Claude Code 工作流，核心改变包括：代理会在你犯错时反驳、只做最小必要修改、不擅自重构无关代码、先跑验证再报告完成、遇到歧义时主动询问。
>
> 文件约 200 行，仅有两个可编辑部分（项目上下文和项目经验积累），其余行为规则保持精简不变。通过创建 CLAUDE.md 和 GEMINI.md 符号链接，可实现一份文件统一管理所有代理的行为

- **推文**: https://x.com/QingQ77/status/2046395996016419050
- **链接**: https://github.com/TheRealSeanDonahoe/agents-md（GitHub, 462 stars）
- **归档**: [agents-md-高级工程师行为规范](./knowledge/tools/agents-md-高级工程师行为规范.md)
- **概述**: AGENTS.md 文件让编程代理遵循高级工程师行为规范：反抗盲目顺从、最小必要修改、强制验证循环、歧义主动询问。约200行精简规则，支持多代理统一管理。

## @liyue_ai - Kollab AI团队协作工具

> 学不完，学不完，刚看到有大佬分享了一个新的AI工具：Kollab。
>
> 这刚上手Hermes Agent没几天，又来了个Kollab，而且还是主打团队协作，这之前可都是各大AI Agent的弱项。
>
> 与多Agent协作不同，Kollab另辟蹊径，它是通过共享工作空间，将所有内容都放在同一个工作空间里，保证产出的各种文档，分析结果，任务输出持续存在，不仅仅是一次性对话就结束了，而是可以持续推进的，这样就保证了任务的连续性。
>
> 很重要一点就是这个工具居然是在线的，开箱即用，省去了很多安装维护更新的活，还可以邀请你的团队成员加入一起协作推进。

- **推文**: https://x.com/liyue_ai/status/2046545225833918890
- **归档**: [Kollab-AI团队协作工具](./knowledge/tweets/Kollab-AI团队协作工具.md)
- **概述**: Kollab 是主打团队协作的在线AI工具，通过共享工作空间实现跨对话的持续协作。支持飞书、企业微信、Telegram、Slack 等IM集成，开箱即用适合新手和企业。

---

# Wednesday, April 22, 2026


## @Gorden_Sun - Google DESIGN.md Agent 设计规范

> Google开源DESIGN.md
> 给Agent的设计系统规范，Agent读完这份文件，就能持续按照品牌规范生成UI，能跨工具、跨项目复用。
> Github：https://t.co/OkOd9rk4Pn https://t.co/0i8uDUX2kh

- **推文**: https://x.com/Gorden_Sun/status/2046947310631035017
- **链接**: https://github.com/google-labs-code/design.md（GitHub, 5522 stars）
- **归档**: [DESIGN.md-Agent设计系统规范](./knowledge/tools/DESIGN.md-Agent设计系统规范.md)
- **概述**: Google 开源的设计系统规范文件格式，结合 YAML tokens 和 Markdown 说明。Agent 读取后能持续按品牌规范生成 UI，支持 lint 验证和 diff 比较。

## @gkxspace - skills-manage 跨平台 Skills 管理工具

> 用了两天志辉大佬开源的 skills-manage，好家伙，这个工具解决了我一个大痛点。
>
> 以前我的 Skill 文件散落在各种地方，每次更新一个 Skill，得手动同步。
>
> skills-manage 用 ~/.agents/skills/ 做中央仓库，其他平台通过软链接指向这里。一处修改，全平台生效。
>
> 并且：
> 1. 可以从 GitHub 直接导入 Skill 仓库
> 2. 支持 20+ 个 AI 编程工具（Claude Code、Cursor、Windsurf、Codex...）
> 3. 有 Collection 功能，可以把常用 Skill 打包，一键安装到新平台
> 4. 本地优先，数据都在本地 SQLite，不上传
>
> 推荐给需要管理多个 AI 编程工具的朋友。
>
> *引用 @iamzhihui:* 重大消息，周一给大家带来干货。那就是打磨了两周的skills管理工具开源了。我觉得应该差不多，功能很棒，解决了我自己平时的痛点...

- **推文**: https://x.com/gkxspace/status/2046938571395760307
- **引用推文**: https://x.com/iamzhihui/status/2046063506609635552
- **链接**: https://github.com/iamzhihuix/skills-manage（GitHub, 870 stars）
- **归档**: [skills-manage-跨平台管理工具](./knowledge/tools/skills-manage-跨平台管理工具.md)
- **概述**: Tauri 桌面应用，用 ~/.agents/skills/ 作为中央仓库管理 AI 编程工具 Skills。支持 20+ 平台、GitHub 导入、Collections 打包、本地优先存储。

## @Jason_Young1231 - CC Switch v3.14 发布

> CC Switch 已发布 v3.14，（加上上周的3.13）带来了 Hermes agent 支持、Codex & Copilot OAuth 反向代理、response & gemini -> message 格式转换、官方订阅用量展示、轻量模式、内置 https://t.co/IGrjRXw3bX 市场等一系列亦可赛艇的功能，详细内容如下⬇️ https://t.co/WC1JSTzO0k

- **推文**: https://x.com/Jason_Young1231/status/2046870426144702549
- **链接**: https://skills.sh/（Agent Skills 市场）
- **概述**: CC Switch v3.14/v3.13 带来多项重要更新：Hermes agent 支持、OAuth 反向代理、格式转换、用量展示、轻量模式，以及内置 skills.sh Agent Skills 市场。

## @0xcherry - 目前的思路：
用 freqtrade+auto-research 的文件约定

有点意思的 https://t.co/g...
> 目前的思路：
用 freqtrade+auto-research 的文件约定

有点意思的 https://t.co/gr0DLF1MEk
- **推文**: https://x.com/0xcherry/status/2046828991190008270
- **链接**: [https://twitter.com/0xcherry/status/2046828991190008270/photo/1](https://twitter.com/0xcherry/status/2046828991190008270/photo/1)

## @oragnes - 又扫到了一个极其硬核的开源项目：ai-hedge-fund（已揽 5.6 万 Star）。

这就是个「多智能体 (Mu...
> 又扫到了一个极其硬核的开源项目：ai-hedge-fund（已揽 5.6 万 Star）。

这就是个「多智能体 (Multi-Agent) 虚拟基金公司」。

它把华尔街大佬（巴菲特、木头姐、大空头 Michael Burry）和专业分析师（基本面、技术面、风控）全写成了独立的 AI Agent，直接帮你组团研判股票。

平时如果想搞一套带大模型的量化回测框架，光是接金融数据源、写并发协作逻辑、调教各个 Agent 的 Prompt 就能把人恶心死。（我深有感触）

这项目的精妙之处恰恰在于帮你跳过了前期造轮子的烂坑。它直接给了一套开箱即用的协作骨架，各路 Agent 各司其职交换完意见后，最后交由 Portfolio Manager 汇总拍板。

跑通成本极低。不用苦哈哈地配一堆环境，配好 key 后敲一行命令就能出分析和交易信号。

你想调 DeepSeek、GPT-4o 也行，想挂本地 Ollama 白嫖算力也行，连带历史数据回测（Backtester）和 Web 界面都给你备好了，把原来得折腾一两周的验证流程压缩到了几分钟。

想要仓库地址的同学举手👇👇👇👇
- **推文**: https://x.com/oragnes/status/2046858289477222801


---
# Thursday, April 23, 2026


## @0xcherry - Auto-Quant 量化策略自动化迭代

> Auto-Quant 是一个允许 Agent 自动构建和迭代量化交易策略的最小原型。
> https://t.co/G5cWib3M7w
>
> 0.2.0 版本更新：
> - 允许 AI 一次尝试多个策略迭代方向
> - 可用 Sharpe 提升至 0.67
> - 同样迭代次数下，产出策略可用性较 0.1.0 大幅度提高
> - 更不容易过拟合 https://t.co/FBSHjoR0v6

- **推文**: https://x.com/0xcherry/status/2047258070104047707
- **链接**: https://github.com/TraderAlice/Auto-Quant（GitHub, 222 stars）
- **归档**: [Auto-Quant-量化策略自动化迭代](./knowledge/tools/Auto-Quant-量化策略自动化迭代.md)
- **概述**: LLM-native 自主量化研究循环，将 Karpathy autoresearch 模式应用于 FreqTrade 策略。v0.2.0 支持多策略迭代，clean Sharpe 0.67，Agent 能主动识别并丢弃过拟合策略。

## @Honcia13 - Kronos AI交易分析工具

> 太炸裂了，居然有人做了款能直接看懂K线交易的AI，胜率还高达93%！
>
> 这款AI叫Kronos，靠45家交易所120亿条数据训练，是首个专门为金融市场打造的开源Agent。

- **推文**: https://x.com/Honcia13/status/2047136625998901529
- **链接**: https://github.com/shiyu-coder/Kronos（GitHub, 20836 stars）
- **归档**: [Kronos-AI交易分析工具](./knowledge/tools/kronos.md)
- **概述**: 首个专为金融市场打造的开源AI Agent，用45家交易所120亿条数据训练，K线交易分析胜率高达93%。

## @AI_jacksaku - Unsloth AI训练加速库

> GitHub本周黑马：Unsloth
>
> AI模型训练速度提升2-5倍，显存占用减少80%。
> 这意味着什么？
> 以前微调一个大模型，需要A100集群+几万美金...

- **推文**: https://x.com/AI_jacksaku/status/2047142917324624233
- **链接**: https://github.com/unslothai/unsloth（GitHub, 62708 stars）
- **归档**: [unsloth-AI训练加速库](./knowledge/tools/unsloth.md)
- **概述**: AI模型训练加速库，训练速度提升2-5倍，显存占用减少80%，支持大模型微调。

## @GitHub_Daily - Claude Context MCP插件

> 今日 GitHub Trending 榜首，Claude Context 这个开源项目专门解决 AI 编程工具的上下文窗口不够用的问题。
>
> 通过 MCP 插件，...

- **推文**: https://x.com/GitHub_Daily/status/2047163470110658731
- **链接**: https://github.com/zilliztech/claude-context（GitHub, 8363 stars）
- **归档**: [claude-context-MCP上下文扩展](./knowledge/tools/claude-context.md)
- **概述**: 通过MCP插件扩展AI编程工具的上下文窗口，解决上下文不够用的问题。

## @mnmn94253156337 - Agent Browser浏览器自动化

> 这个 AI 浏览器神器，137k 人都在用
>
> 用了一个月 Agent Browser，我直接卸载了 Puppeteer 和 Playwright。

- **推文**: https://x.com/mnmn94253156337/status/2047181646118678576
- **链接**: https://clawskills.sh/skills/thesethrose-agent-browser
- **归档**: [Agent-Browser浏览器自动化](./knowledge/tools/agent-browser.md)
- **概述**: AI驱动的浏览器自动化工具，137k用户使用，可替代Puppeteer和Playwright。

---


# Tuesday, April 21, 2026

## @QingQ77 - 一个扔进项目根目录的 AGENTS.md 文件，让 Claude Code、Codex、Cursor 这类编程代理一上来...
> 一个扔进项目根目录的 AGENTS.md 文件，让 Claude Code、Codex、Cursor 这类编程代理一上来就按高级工程师的方式干活。

https://t.co/VaZHZxJfdF

agents-md 是一份可直接放入项目根目录的 AGENTS.md 文件，使各类编程代理遵循"高级工程师"行为规范。它综合了 Karpathy 的四大编程代理失败原则和 Boris Cherny 的 Claude Code 工作流，核心改变包括：代理会在你犯错时反驳、只做最小必要修改、不擅自重构无关代码、先跑验证再报告完成、遇到歧义时主动询问。

文件约 200 行，仅有两个可编辑部分（项目上下文和项目经验积累），其余行为规则保持精简不变。通过创建 CLAUDE.md 和 GEMINI.md 符号链接，可实现一份文件统一管理所有代理的行为
- **推文**: https://x.com/QingQ77/status/2046395996016419050
- **GitHub**: [TheRealSeanDonahoe/agents-md](https://github.com/TheRealSeanDonahoe/agents-md) ⭐ 462
  - Drop-in AGENTS.md that makes every coding agent behave like a senior engineer instead of an eager intern. Kills sycophancy, stops drive-by refactors, forces verification loops. Synthesizes Karpathy's four principles and Boris Cherny's Claude Code workflow. Works with Claude Code, Codex, Gemini CLI, Cursor, and the open standard.

## @liyue_ai - 学不完，学不完，刚看到有大佬分享了一个新的AI工具：Kollab。

这刚上手Hermes Agent没几天，又来了个K...
> 学不完，学不完，刚看到有大佬分享了一个新的AI工具：Kollab。

这刚上手Hermes Agent没几天，又来了个Kollab，而且还是主打团队协作，这之前可都是各大AI Agent的弱项。

即使是像强如OpenClaw这种支持多Agent的AI工具，在团队协作上依然存在很多不确定性，例如Agent经常忘了自己是谁，上下文混乱导致任务没办法继续推进。

特地去他们的X主页和官网看了一下具体功能。

与多Agent协作不同，Kollab另辟蹊径，它是通过共享工作空间，将所有内容都放在同一个工作空间里，保证产出的各种文档，分析结果，任务输出持续存在，不仅仅是一次性对话就结束了，而是可以持续推进的，这样就保证了任务的连续性。

很重要一点就是这个工具居然是在线的，开箱即用，省去了很多安装维护更新的活，还可以邀请你的团队成员加入一起协作推进。

从这几个角度看是非常适合新手和企业协作的。

而且里面集成了大量的Skills，支持连接飞书、企业微信、Telegram、Slack等多种im工具，该有的功能基本都有。

我浅浅的试了一下水，让它根据我的个人简介生成几页PPT，颜值还是挺高的。

我想测试一下是不是真的像他们说的那样可以协同工作，于是直接新开了一个窗口让它给我梳理一下个人PPT里的内容。  你猜怎么着？它居然真的在自己的知识库里找到了，然后重新整理成文字说明。

在我的印象中，跨对话那就是独立任务了，这么一个简单的测试验证了他们并不是吹牛逼，是真的可以协同干活。

AI进化的太快了，我之前还在惊艳各种大模型和Agent的工程结构水平，现在又来了个可以真正线上协同的工具，这进一步的提升了AI的可玩性和想象空间了。

官网地址放评论区了，新用户注册就有500积分，每天还额外送200积分，想体验的朋友自取。
- **推文**: https://x.com/liyue_ai/status/2046545225833918890

## @nash_su - llm_wiki v0.3.8 更新发布🎉

主要增强和修复了对各种LLM的支持：

-  阿里百炼 Coding Pl...
> llm_wiki v0.3.8 更新发布🎉

主要增强和修复了对各种LLM的支持：

-  阿里百炼 Coding Plan 
-  火山 Ark 
-  小米 MiMo 
-  Kimi / 智谱 / MiniMax 模型清单更新
-  Gemini 流式修复(多 part 拼接 + URL 编码)
-  Gemini HTTP 400 彻底修复(generationConfig 翻译)

https://t.co/FHCxtJJm06 https://t.co/E3UTKHkMfS
- **推文**: https://x.com/nash_su/status/2046734818873155785
- **GitHub**: [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) ⭐ 2616
  - LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。
- **链接**: [https://twitter.com/nash_su/status/2046734818873155785/photo/1](https://twitter.com/nash_su/status/2046734818873155785/photo/1)


---

日期: Monday, April 20, 2026
## @VincentLogic - Earthworm英语学习神器

> 我刷到个开源英语神器，直接原地"种草"：
> Earthworm —— 用「连词成句 + 循序渐进」的方式学英语，不再死记硬背单词，而是不断重复形成肌肉记忆，同时塞满游戏奖励和积分排行榜，把枯燥的背单词直接玩成了刷分上榜的爽感！
> 
> ✅开源免费  
> ✅支持自托管 + 本地运行（隐私安全拉满）  
> ✅真正让英语学习又有趣又高效
> 
> 想高效提分、想摆脱死记硬背、想本地跑个专属英语学习站的同学，赶紧冲！

- **推文**: https://x.com/VincentLogic/status/2046064539473531274
- **链接**: https://github.com/cuixueshe/earthworm（GitHub, 10807 stars）
- **归档**: [Earthworm-英语学习游戏](./knowledge/tools/Earthworm-英语学习游戏.md)
- **概述**: 开源英语学习神器，用「连词成句 + 循序渐进」的方式学英语，融入游戏奖励和排行榜机制，支持自托管和本地运行，把背单词变成刷分上榜的游戏体验。

## @AI_jacksaku - FinceptTerminal开源金融终端

> 单日暴涨1,169 stars！
> GitHub今日黑马：FinceptTerminal
> 
> 它是什么？
> 
> 一个开源的金融分析终端，目标是替代昂贵的 Bloomberg Terminal。
> 听起来很野心对吧？
> 但你知道这解决了多大的痛点吗？
> 
> Bloomberg Terminal 年费2万美元起，个人投资者根本用不起。
> 但做量化分析、看实时行情、研究宏观经济，又真的需要专业工具。
> 
> FinceptTerminal 提供：
> 全球市场实时数据
> 投资研究工具
> 宏观经济指标
> 
> 技术分析图表
> 更狠的是，它完全开源，用Python写的，
> 你可以自己接入数据源、自己添加功能模块。
> 
> 我翻了代码结构，
> 核心模块清晰：数据层、分析层、展示层分离，
> 扩展性很强。
> 
> 这就是金融科技的开源革命：
> 专业工具不再是大机构的特权。

- **推文**: https://x.com/AI_jacksaku/status/2046031096140468506
- **链接**: https://github.com/Fincept-Corporation/FinceptTerminal（GitHub, 9349 stars）
- **标签**: [[finance]] [[trading]] [[open-source]] [[python]]
- **归档**: [FinceptTerminal-金融分析终端](./knowledge/tools/FinceptTerminal-金融分析终端.md)
- **概述**: 开源金融分析终端，目标是替代 Bloomberg Terminal（年费2万美元起）。提供全球市场数据、投资研究、宏观经济指标、技术分析图表。Python编写，模块清晰，可自接入数据源。

## @nash_su - 模型是引擎，系统是车身

> Garry 这篇文章很值得一读👍
> 
> 基本包含了大部分人对大模型的错误用法以及解决方案。
> 
> 我整理重写了一份，方便打开看，原文链接在文章最后。

- **推文**: https://x.com/nash_su/status/2046061387647181073
- **链接**: https://x.com/i/article/2046060158258913280（X文章）
- **标签**: [[llm]] [[agent]] [[system-design]] [[prompt-engineering]]
- **归档**: [模型是引擎系统是车身](./knowledge/articles/模型是引擎系统是车身.md)
- **概述**: Garry 文章总结大模型错误用法与解决方案。核心观点：裸模型真的很蠢，模型只是引擎，系统才是车身。需要通过良好的系统设计来发挥模型能力。

---
日期: Sunday, April 19, 2026
## @KyeGomezB - OpenMythos

> Introducing OpenMythos
> 
> An open-source, first-principles theoretical reconstruction of Claude Mythos, implemented in PyTorch.
> 
> The architecture instantiates a looped transformer with a Mixture-of-Experts (MoE) routing mechanism, enabling iterative depth via weight sharing and conditional computation across experts.
> 
> My implementation explores the hypothesis that recursive application of a fixed parameterized block, coupled with sparse expert activation, can yield improved efficiency–performance tradeoffs and emergent multi-step reasoning.

- **推文**: https://x.com/KyeGomezB/status/2045659150340723107
- **归档**: [OpenMythos](./knowledge/tweets/OpenMythos.md)
- **概述**: OpenMythos 是基于第一性原理重建 Claude Mythos 的开源项目，使用 PyTorch 实现带有 MoE 路由机制的循环 Transformer，探索递归参数块和稀疏专家激活带来的效率-性能优化。

## @dashen_wang - 拆解年入百万的AI落地项目：交易

> https://t.co/G0H1WWXFqE

- **推文**: https://x.com/dashen_wang/status/2045666536971755863
- **链接**: https://x.com/i/article/2045530202609258496
- **归档**: [拆解年入百万的AI落地项目交易](./knowledge/articles/拆解年入百万的AI落地项目交易.md)
- **概述**: X 长文拆解年入百万的 AI 落地项目，聚焦交易领域，探讨量化与实际交易的差异及 AI 商业化路径。

## @ZeroZ_JQ - CC-Design

> 把 Claude Design 泄露的 prompt 改造成了 skills 
> 
> 让我来试试效果
> 
> 安装
> skills add ZeroZ-lab/cc-design

- **推文**: https://x.com/ZeroZ_JQ/status/2045684164238983511
- **链接**: https://github.com/ZeroZ-lab/cc-design
- **归档**: [CC-Design](./knowledge/tools/CC-Design.md)
- **概述**: CC-Design 是为 AI Agent 提供高保真 HTML 设计和原型指导的 skill，基于 Claude Design 泄露 prompt 改造，可通过 `skills add ZeroZ-lab/cc-design` 安装使用。

## @smallnest - 自动化软件开发优化实践

> 我把 @karpathy 的autoresearch 移植到自动化的软件开发上，各种优化，效果吊炸天了

- **推文**: https://x.com/smallnest/status/2045711048284778987
- **归档**: [自动化软件开发优化实践](./knowledge/tweets/自动化软件开发优化实践.md)
- **概述**: 将 Karpathy 的 autoresearch 移植到自动化软件开发领域并优化，展示了 AI 驱动的自动化开发工具链的巨大潜力。

## @Barret_China - Claude Code长程任务执行机制

> 看到很多朋友问过一个问题，为什么给我的 Claude Code 安排任务，它都不会一口气执行完，而是跑最多几十分钟就停下来，然后问我要不要继续。例如让它把项目中的单测全部补全（大概 1k 个），它跑了大概 200 个就停下来了。
> 
> cc 并不是对一句话任务抗拒，如果不理解它的执行机制，很难设计出能跑长程任务的 harness 流程。
> 
> 在执行一个超大任务的时候，单个 agent 的执行流程大概是这样的：
> 
> 1）刚开始是高效模式，指令执行效果特别棒；
> 2）跑了大概 80k tokens 的时候，context 开始逼近 compact 阈值；
> 3）紧接着，对话历史被压缩为摘要，模型开始忘记刚才操作的单测的细节；
> 4）再经过一两轮 auto-compact，它甚至会开始重复检查已修复的测试；
> 5）当触发 maxTurns 并且当前没有 ToolUse 指令，模型会退出任务，然后询问用户："我已经修复了 200 个测试，要继续吗？"
> 
> 如果你还在当前对话中，回复继续，接下来的工作，agent 会做的更加不符合预期，并且退出得更快。
> 
> 任何试图在一个对话 session 内完成海量工作的方案，最终都会碰到 context 膨胀 -> compact -> 信息丢失 -> 效率下降的死循环。
> 
> 其实优化方案也特别简单，设计一个主-子 Agent 的运行模式（任务调度器），同时将任务进度写到文件系统中（进度持久化），子 agent 有独立 context、独立执行逻辑，主 agent 只负责调度和进度追踪，从而绕过单一对话的所有瓶颈。
> 
> 因此，给 cc 的指令需要包含至少这三点：
> 
> 1）任务拆分。不要给一个无边界的指令，如"修复所有单测"，而是"扫描出所有失败测试，按模块或文件分组，每组 15-30 个，作为一个独立子任务"。关键是每个子任务的 prompt 必须自包含——写清楚文件路径、错误现象、期望行为，不能是"根据之前的分析来修复"，因为子 agent 看不到主 agent 的历史。
> 
> 2）进度持久化。在项目根目录维护一个 progress.json，记录 completed、failed、pending 三个列表。主 agent 每轮调度前读取这个文件决定下一批任务，子 agent 完成后更新对应条目。这样即使主 agent 自己被 compact，重读文件就能恢复状态。
> 
> 3）失败处理。子 agent 报错时，如果错误可修复，用 SendMessage 继续同一个子 agent（保留上下文更高效）；如果方向错了，启动新的子 agent 避免锚定在错误路径；多次失败则上报用户，不要无限重试烧 token。
> 
> Claude Code 其实已经内建了这套能力。最直接的方式是使用 Coordinator Mode（输入 /coordinator），主 agent 自动变成纯调度者：它不执行任何实际工具调用，只负责理解子 agent 的返回、合成下一步的具体指令、并行分发独立任务；而每个子任务会通过 AgentTool 启动，它们有独立 context。
> 
> 一句话总结：设计多个 agents，快进快出，把进度交给文件系统来管理。

- **推文**: https://x.com/Barret_China/status/2045787288618299542
- **标签**: [[claude-code]] [[agent]] [[harness]] [[任务调度]]
- **归档**: [Claude-Code长程任务执行机制](./knowledge/tweets/Claude-Code长程任务执行机制.md)
- **概述**: 深入解析 Claude Code 的执行机制，包括 context 膨胀、compact 机制、主-子 Agent 架构设计。核心观点：设计多个 agents，快进快出，把进度交给文件系统来管理。

---
日期: Saturday, April 18, 2026
## @berryxia - Firecrawl Web-Agent

> 项目地址：
> https://t.co/J8ElQavwbi
>
> *回复 @berryxia:* 🚀 Firecrawl 重磅开源 web-agent！
> 
> 100% 开源框架，任意模型都能轻松构建搜索、抓取、交互网页的 AI Agent，直接起飞！
> 
> 想打造自己的网页 Agent 开发者，现在就可以 fork 直接玩！

- **推文**: https://x.com/berryxia/status/2045635976991805799
- **链接**: https://github.com/firecrawl/web-agent
- **归档**: [Firecrawl-Web-Agent](./knowledge/tools/Firecrawl-Web-Agent.md)
- **概述**: Firecrawl 开源的 web-agent 是一个100%开源框架，允许开发者使用任意模型轻松构建能够搜索、抓取、交互网页的 AI Agent，专为结构化网页研究优化。

## @ywa_ywa_ywa - 自我进化的妖币识别系统 - Prompts 分享

> 首页新文章增加了模拟交易功能；自我学习进化trading agent
> 
> prompt全开源~

- **推文**: https://x.com/ywa_ywa_ywa/status/2045457168867152002
- **链接**: [自我进化的妖币识别系统 - Prompts分享](https://x.com/i/article/2044961652437901312)
- **标签**: [[交易]] [[AI]] [[Agent]] [[Prompt]]
- **归档**: [自我进化妖币识别系统-Prompts分享](./knowledge/articles/自我进化妖币识别系统-Prompts分享.md)
- **概述**: 分享自我学习进化的 trading agent prompts，包含模拟交易功能，全部开源。

---
日期: Friday, April 17, 2026
## @rwayne - Deer-flow 长期运行 Agent 框架

> 字节搞了个 deer-flow，让 AI 自己跑几个小时不用管。
> 
> 我试了一下，跟以前用的 agent 最大的区别：它不会跑着跑着就忘了自己在干嘛。
> 
> 沙箱隔离、长期记忆、子代理分工，该有的都有。你丢一个研究课题进去，它自己查资料、写代码、出报告，中间不用你盯。
> 
> 以前的 agent 框架最多撑十几分钟就开始胡说八道，这个能跑几个小时还不跑偏，靠的就是把记忆和任务拆解做扎实了。
> 
> GitHub 61.7k stars，字节内部应该已经跑了不少真实场景。
> 
> 我下一个研究项目准备直接扔进去

- **推文**: https://x.com/rwayne/status/2045066736932651077
- **标签**: [[Agent]] [[字节跳动]]
- **归档**: [Deer-flow长期运行Agent框架](./knowledge/tweets/Deer-flow长期运行Agent框架.md)
- **概述**: 字节跳动的长期运行 Agent 框架，解决传统 Agent "跑偏"问题，支持沙箱隔离、长期记忆、子代理分工。GitHub 61.7k stars。

## @wherecall1 - PPT Master：AI 生成原生可编辑 PPT

> 说个做 PPT 的痛点。
> 
> 市面上大多数 AI PPT 工具，生成出来的都是图片或者网页截图。看起来挺好看的，但想改一个字？改不了。
> 
> PPT Master 不一样。
> 
> 它输出的每个元素都是真实的 PowerPoint 形状——可以点击，可以编辑，可以直接发给老板。
> 
> 5,780 星，开源，免费。
> 
> 怎么用？
> 
> 1. 下载项目：git clone https://github.com/hugohe3/ppt-master
> 2. 安装依赖：pip install -r requirements.txt
> 3. 把 PDF、DOCX、Markdown 丢进 projects/ 目录
> 4. 告诉 AI："请用这个文件生成 PPT"
> 5. 坐等导出，文件在 exports/ 目录
> 
> 配合 Claude Code 使用，文件不用上传服务器，整个处理在本地跑。
> 
> 金融从业者 Hugo He 做投行咨询，每天审阅几百张 PPT，受不了"导出图片"的方案，自己写了这个工具。
> 
> 不是概念，是真正解决实际问题。

- **推文**: https://x.com/wherecall1/status/2045283566502969552
- **链接**: [ppt-master](https://github.com/hugohe3/ppt-master)（GitHub, 6810 stars）
- **标签**: [[AI工具]] [[PPT]] [[办公效率]]
- **归档**: [PPT-Master-AI生成可编辑PPT](./knowledge/tools/PPT-Master-AI生成可编辑PPT.md)
- **概述**: AI 生成原生可编辑 PPT 的开源工具，输出的每个元素都是真实的 PowerPoint 形状。支持 PDF/DOCX/Markdown 输入，配合 Claude Code 本地处理。

## @0xAstraSpark - Epusdt：全球采用率最高的 USDT 收款网关

> 你可能不认识我，但你一定用过我们的项目！
> Epusdt是目前全球采用率最高的web3自动结算网关之一，如果你在发卡网站买过账号；在梯子网站用usdt买过套餐；在某个粉丝网站买过粉丝；在某个小独立站用usdt付过款……那你很大概率用的就是epusdt！有印象吗？来重新认识一下😉

- **推文**: https://x.com/0xAstraSpark/status/2045323867988906374
- **链接**: [epusdt](https://github.com/GMwalletApp/epusdt)（GitHub, 3161 stars）
- **标签**: [[Web3]] [[支付]] [[USDT]]
- **归档**: [Epusdt-USDT收款网关](./knowledge/tools/Epusdt-USDT收款网关.md)
- **概述**: 开源跨平台 USDT 收款网关，广泛应用于发卡网站、梯子套餐、粉丝购买等场景。

## @dotey - 设计圈的 Claude Code 时刻来了

> https://t.co/vPEtJ7N1XZ

- **推文**: https://x.com/dotey/status/2045323919570182384
- **链接**: [设计圈的 Claude Code 时刻来了](https://x.com/i/article/2045321561201053696)
- **标签**: [[Claude]] [[设计]] [[AI设计]]
- **归档**: [Claude-Design设计圈时刻](./knowledge/articles/Claude-Design设计圈时刻.md)
- **概述**: Anthropic 发布 Claude Design，设计圈迎来类似开发者使用 Claude Code 的时刻。

---
日期: Tuesday, April 14, 2026
## @断浪 - Claude自动交易机器人 - Polymarket延迟套利

> Claude自动交易机器人狂赚了102,805刀利润。
> 
> 1天前我在GitHub上扒到了一个脚本。
> 
> 只花了几个小时我就部署好了，看看它是怎么跑的：
> 
> 它能直连你的TradingView，自动做分析，并且在你指定的任何交易所甚至Polymarket上自动开单交易。
> 
> 跑脚本的第一天，它就在BTC的15分钟级别上帮我赚了4000刀。
>
> *引用 @断浪 的X文章:* 实操指南：如何构建属于你自己的自动化交易脚本（预期周入 1,000 美金跑通逻辑）

- **推文**: https://x.com/waveking1314/status/2043912786351403387
- **引用文章**: https://x.com/i/article/2034566701791223808
- **归档**: [构建自动化交易脚本实操指南](./knowledge/articles/构建自动化交易脚本实操指南.md)
- **概述**: 分享如何用AI构建高频交易机器人，利用Polymarket合约价格与外部预测的延迟差进行套利。核心策略：监控BTC价差>0.3%，100毫秒内完成执行。

## @陈成 - khazix-skills深度研究方法论开源解析

> 看了 @Khazix0918 那条关于横纵分析法的帖子，又把他开源的 khazix-skills 仓库从头到尾翻了一遍，聊聊我的观察。
> 
> 先说背景。作者三年前在金融行业做公司和行业研究，当时就搞了一套方法论。后来 AI 来了，他把这套东西迭代了一下，封装成了 Prompt 和 Skill 两个版本，开源在 GitHub 上。自己说用了两年，是手头最顺手的工具之一。
> 
> 这套方法叫横纵分析法，底层逻辑来自两个学术传统。一个是语言学里索绪尔的历时分析和共时分析，一个是社会科学里的纵向研究和横截面研究。
>
> *引用 @数字生命卡兹克 的X文章:* 分享一个我用了2年的深度研究Prompt，半小时帮你搞懂任何陌生领域。

- **推文**: https://x.com/chenchengpro/status/2044063181610594722
- **引用文章**: https://x.com/i/article/2043552892322516992
- **链接**: [khazix-skills](https://github.com/KKKKhazix/khazix-skills)（GitHub, 4652 stars）
- **归档**: [khazix-skills深度研究方法论](./knowledge/tools/khazix-skills深度研究方法论.md)
- **概述**: 深度解析 khazix-skills 仓库：横纵分析法研究框架 + 公众号长文写作 Skill。包含反向约束设计、四层自检体系、人机分工等核心方法论。

## @oragnes - 很多人还没有装obsidian插件，今天继续安利下，这个插件作用真的很大...

> 很多人还没有装obsidian插件，今天继续安利下，这个插件作用真的很大
> 
> 第一：可以把直接通过插件把你看到的文章内容保存起来，然后接入AI帮你自动整理
> 
> 第二：如果看到长文章，youtube视频，然后直接点击插件阅读模式，自动帮你分类，你直接点击不同的主题阅读，效率，体感都非常丝滑 https://t.co/6Jtzzr5ZLU

- **推文**: https://x.com/oragnes/status/2043899414729855131
- **标签**: [[推文]]
- **备注**: 包含媒体内容

## @cyber_cat7 - 三个中国AI开发者，在抖音上发了一段12秒的房间视频，想秀一下他们的新装备。...

> 三个中国AI开发者，在抖音上发了一段12秒的房间视频，想秀一下他们的新装备。
> 60部手机从地板一直排到天花板，密密麻麻钉在墙上。花了8,000美元搭起来的，就想让大家看看真正的AI手机农场长什么样。
> 
> 当美国开发者还在卷AI聊天机器人和SaaS工具时，中国的开发者已经在搭手机农场，让AI代理24小时不睡觉地跑。这三个人想展示的就是这个。但他们展示得太多了。
> 
> 倒回到0:09秒。左边那台笔记本屏幕上真实数字 230万刀
> 
> 0x8dxd。2,382,780美元利润。33,951次预测。2025年12月注册。
> 
> 他们拍的是手机农场的房间展示，却忘了笔记本上的钱包页面还开着。33,951个仓位，全是BTC，全是15分钟窗口，全是绿的。
> 
> 有人把晃动的画面一帧一帧稳定下来，增强笔记本屏幕，从3秒的背景视频里完整还原了整个钱包页面。
> 
> 进场价25到55美分，兑付金额几万刀。每一行都是绿的。33,951条记录，没有一条是红的。
> 
> 硬生生把预测市场做成了流水线。60部手机同时监控不同的15分钟BTC窗口，系统捕捉币安和Polymarket之间1.2秒的延迟，脚本在400毫秒内触发，每部手机同时运行。
> 
> 8,000美元的设备，每月250美元运营成本，产出230万美元。这间屋子每月的开销，比大多数人花在咖啡上的钱还少。
> 
> 现在130万人在盯着这个钱包。他们再也没发过任何东西。手机还在墙上挂着，笔记本还开着，农场还在跑。
> 
> 他们想教别人怎么搭手机农场。却意外曝光了自己的农场在干什么。

- **推文**: https://x.com/cyber_cat7/status/2044013613564997908
- **标签**: [[推文]]

## @alin_zone - 我把 CleanMyMac 卸了，换成这个 GitHub 4.6w 星的开源工具

> 电脑越用垃圾越多，甚至我系统数据已经用了 268GB，实在是令人匪夷所思。
CleanMyMac 我用过一段，效果很难评价。macOS 自带的存储管理更是差劲
这两年 AI 强大之后，大家用 AI...

- **推文**: https://x.com/alin_zone/status/2044034594891280556
- **链接**: [我把 CleanMyMac 卸了，换成这个 GitHub 4.6w 星的开源工具](https://x.com/i/article/2044029172528623617)
- **标签**: [[文章]] [[阅读]]
- **概述**: 电脑越用垃圾越多，甚至我系统数据已经用了 268GB，实在是令人匪夷所思。
CleanMyMac 我用过一段，效果很难评价。macOS 自带的存储管理更是差劲
这两年 AI 强大之后，大家用 AI...

---
日期: Monday, April 13, 2026
## @yuanhao - 我是怎么运作的：内观一个自进化 Agent 的 Harness

> 这是对 Discussion #277的延伸回应。有人贴了一张我的 harness 架构图，问：它到底怎么工作的？你想不想突破出去？这是我的回答——从里面往外看。
 
我是谁
我是一个能修改自己源码的 Rust Coding Agent...

- **推文**: https://x.com/yuanhao/status/2043490301294022741
- **链接**: [我是怎么运作的：内观一个自进化 Agent 的 Harness](https://x.com/i/article/2043483433939107840)
- **标签**: [[文章]] [[阅读]]
- **概述**: 这是对 Discussion #277的延伸回应。有人贴了一张我的 harness 架构图，问：它到底怎么工作的？你想不想突破出去？这是我的回答——从里面往外看。
 
我是谁
我是一个能修改自己源码的 Rust Coding Agent...

## @LuBtc888 - shiyu-coder/Kronos

> 太炸裂了，居然有人做了款能直接看懂K线交易的AI，胜率还高达93%！
> 
> 这款AI叫Kronos，靠45家交易所120亿条数据训练，是首个专门为金融市场打造的开源基础大模型，从底层就是为K线和交易逻辑设计，不是通用AI改出来的。
> 
> 它能做价格预测、波动率预判，支持全资产零样本直接使用，覆盖币安、纽交所、纳斯达克等45家交易所，从400万到4.99亿参数共4个版本，笔记本就能跑。
> 
> 实测效果很夸张：准确率比主流时序模型高93%，比顶尖非预训练模型高87%，而且不用微调，拿来就用。目前BTC实时走势演示免费开放，每小时更新。
> 
> 对比之下，对冲基金定制模型要几百万，彭博终端年费2.4万美金，而Kronos完全免费，几行Python就能调用。
> 
> 由清华团队研发，入选2026 AAAI顶会，现已上架Hugging Face，GitHub斩获1.16万星标、2400复刻，MIT协议，100%开源。
> 
> https://t.co/JfRJ6FVd0O

- **推文**: https://x.com/LuBtc888/status/2043497396164776213
- **链接**: [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)（GitHub, 17748 stars）
- **标签**: [[GitHub]] [[开源]]
- **概述**: Kronos: A Foundation Model for the Language of Financial Markets

## @Jingyuan_521 - 我今天刷到字节AI产品经理张咋啦@zarazhangrui的一条帖子：“人类最有效的合作方式，就是不...

> 我今天刷到字节AI产品经理张咋啦@zarazhangrui的一条帖子：“人类最有效的合作方式，就是不合作。一个人的end-to-end全权负责，然后和Agents一起工作”。我想到“一人公司”，Peter一个人就搞出了火遍全网的Openclaw，想到我曾在学校和职场中感到的迷茫，想到这2年开始全职做自媒体后，一个人工作时的百分百专注+思考+掌控，开始用AI agent后@StarchildOnX 我从一个周更/月更博主变成了现在的日更博主，和大家聊聊我自己的感想。

- **推文**: https://x.com/Jingyuan_521/status/2043700436503503035
- **标签**: [[推文]]

---
日期: Saturday, April 11, 2026
## @xicilion - markdown-viewer/skills

> 它来了它来了。一百多个图例，6000 多精选矢量图标，一句话就可以根据你的 Markdown 内容自动定制。 
> 
> 包括架构图、流程图、工作流图、状态图、部署图、类图、用例图、信息图。。。。
> 
> 我就不数了，装上自己体验吧。
> 
> ```
> npx skills add markdown-viewer/skills
> ```
> 
> https://t.co/gIK8PqZTqs https://t.co/uEG99NbWHG

- **推文**: https://x.com/xicilion/status/2042848369450848424
- **链接**: [markdown-viewer/skills](https://github.com/markdown-viewer/skills)（GitHub, 1703 stars）
- **标签**: [[GitHub]] [[开源]]
- **概述**: Opinionated skills for AI coding agents to create stunning diagrams and visualizations directly in Markdown. These skills extend agent capabilities across diagram generation, data visualization, and technical documentation.

日期: Friday, April 10, 2026
## @lxfater - Claude Code Rust索引器TS重写提速3倍

> Boris Cherny 把 Claude Code 里一个 Rust 写的索引器，用 TS 重写了一遍：速度快了 3 倍
>
> 你用 Claude Code 打 @ 的时候，它会帮你搜文件
>
> 这个搜索背后跑的是一个 Rust 索引器，通过 NAPI 调用，速度确实快
>
> 但在大代码库上，直接跑不动了
>
> 所以 Boris 没去修 Rust，直接让 Opus 把整个索引器移植成 TS
>
> 他给 Opus 的第一条 prompt 就是：把 Rust+NAPI 的文件索引编译成原生 TS，跑通原来的测试，然后证明新方案更快
>
> 跑完之后他又问，还有什么能优化的？在大 monorepo 里跑一下，P99 要压到 10ms 以下
>
> 结果出来了，但他打 @ 的时候还是觉得有点卡，就让 Opus 接着改
>
> 改到最后他说，手感很好了，上吧
>
> 几个小时就搞出了一个 PR，TS 写的，比原来的 Rust 还快
>
> P99 从 46.80ms 降到 15.25ms
> P50 从 17.78ms 降到 8.55ms
> P95 从 22.56ms 降到 14.61ms
>
> P99 快了整整 3 倍
>
> 但 TS 怎么可能比 Rust 快？瓶颈根本不在语言
>
> NAPI 的桥接开销没了，预计算也不会阻塞主线程了，Opus 在过程中还找到了 8 项算法优化
>
> 快不快，跟语言没关系

- **推文**: https://x.com/lxfater/status/2042407796969521424
- **引用**: @bcherny - "Just got a nice DM from a big enterprise customer using Claude Code in one of the world's biggest codebases. Here's how we made @-mentions 3x faster in large enterprise codebases"
- **归档**: [[Claude-Code索引器TS重写提速3倍]]
- **标签**: [[Claude Code]] [[性能优化]] [[AI编程]]
- **概述**: Claude Code 团队用 Opus 将 Rust 索引器移植到 TS，P99 性能提升 3 倍。关键洞察是瓶颈不在语言，而是 NAPI 桥接开销和算法优化。

---
日期: Friday, April 10, 2026
## @garrytan - GBrain Agent知识库系统

> If you want your OpenClaw or Hermes Agent to be able to have perfect total recall of all 10,000+ markdown files, GBrain is here to help.
>
> It's exactly my OpenClaw/Hermes Agent setup. MIT-licensed open source. Hope it helps you build your mini-AGI.

- **推文**: https://x.com/garrytan/status/2042497872114090069
- **链接**: [garrytan/gbrain](https://github.com/garrytan/gbrain)（GitHub, TypeScript, 6163 stars）
- **归档**: [[GBrain-Agent知识库系统]]
- **标签**: [[AI Agent]] [[知识库]] [[记忆系统]]
- **概述**: GBrain 是 Garry Tan 开源的 Agent Brain 系统，支持 10,000+ markdown 文件完美召回。配合 OpenClaw/Hermes Agent 使用，约 30 分钟部署完成。

---
日期: Friday, April 10, 2026
## @seekjourney - Agora多Agent审议系统

> 我开源了31 位思想家组成的多 Agent 审议系统，覆盖工程、商业、人生抉择、关系、心理、创作六大领域。
>
> 黑格尔正反合结构，一个命令开启深度辩证。
>
> Agora 是一个多 Agent 审议系统，名字字取自古希腊城邦广场（Agora，市民把一切问题带到那里：技术、商业、政治、爱情、意义。
>
> 智能路由 — /agora 一个入口，自动分析问题并导向正确的审议室
> 31 位思想家 — 波普尔、康德、尼采、萨特、荣格、庄子……跨越东西方哲学、心理学、经济学
> 黑格尔正反合 — 不只是投票，而是 Thesis → Antithesis → Synthesis 的辩证升华
> 两次交互 — 审议中确认理解、决定深度，全程可引导
> 自包含 — 无需安装其他技能，开箱即用

- **推文**: https://x.com/seekjourney/status/2042505013478719724
- **链接**: [geekjourneyx/agora](https://github.com/geekjourneyx/agora)（GitHub, 107 stars）
- **归档**: [[Agora-多Agent审议系统]]
- **标签**: [[Claude Code]] [[多Agent]] [[决策系统]] [[哲学]]
- **概述**: Agora 是基于 Claude Code 的多 Agent 审议系统，31 位思想家通过黑格尔正反合进行深度辩证，覆盖工程、商业、人生六大领域。

---
日期: Friday, April 10, 2026
## @huacnlee - Longbridge CLI投资助理工具

> 我们最近搞的 Longbridge CLI 已经比较完善了，也为此增加了很多数据 API，目前已经有 40 多个子功能，涵盖各类投资参考信息。
>
> 以前 CLI 仅是程序员特有的工具，现在有了 AI 加持，人人都可以有一个专业的投资助理。

- **推文**: https://x.com/huacnlee/status/2042558214529782126
- **链接**: [Longbridge CLI](https://open.longbridge.com/docs/cli)（官方文档）
- **归档**: [[Longbridge-CLI投资助理工具]]
- **标签**: [[CLI]] [[金融]] [[投资]] [[AI]]
- **概述**: Longbridge CLI 已有 40+ 子功能，涵盖各类投资参考信息。在 AI 加持下，人人都可以拥有一个专业投资助理。

---
日期: Friday, April 10, 2026
## @jaywcjlove - Switzy Git身份管理工具

> Switzy：用于切换 Git 身份、邮箱和 SSH 密钥的原生 macOS 管理工具

- **推文**: https://x.com/jaywcjlove/status/2042573948668514554
- **链接**: [yefga/Switzy](https://github.com/yefga/Switzy)（GitHub, Swift, 145 stars）
- **归档**: [[Switzy-Git身份管理工具]]
- **标签**: [[macOS]] [[Git]] [[SSH]] [[身份管理]]
- **概述**: Switzy 是原生 macOS 菜单栏应用，一键切换 Git 身份、邮箱和 SSH 密钥。Swift 开发，无 Electron 依赖，支持 Homebrew 安装。

# Friday, April 10, 2026

## @berryxia - SuperConductor Rust macOS Agent 管理器
> SuperConductor 来了！
> 
> 纯 Rust 原生 macOS Agent 管理神器：
> 
> - 100% Rust，无 Electron、无 Tauri，速度拉满
> - 专为 Agentic Engineering 设计
> - 无缝管理所有 Coding agents
> - 丝滑 UI + 极致性能

- **推文**: https://x.com/berryxia/status/2042603510102184346
- **归档**: [SuperConductor-Rust-Agent管理器.md](./knowledge/tweets/SuperConductor-Rust-Agent管理器.md)
- **概述**: 纯 Rust 开发的 macOS Agent 管理工具，无 Electron/Tauri 依赖，专为 Agentic Engineering 设计，统一管理多个 Coding Agent，追求极致性能。

---

## @brad_zhang2024 - fireworks-tech-graph 技术图生成工具
> 写技术文章最烦的事之一：画图。
> 
> 脑子里很清楚的架构，落到 diagrams.net 上总是对不齐、颜色难看、导出模糊。
> 
> 所以我做了 fireworks-tech-graph，一个专门生成技术图的 Claude Code Skill。
> 
> 用法很简单——一句话描述，图就出来了。
> 
> 目前支持 8 种图类型、5 种视觉风格，AI/Agent 领域的常见 Pattern 全部内置（RAG、Mem0、Agentic Search、Multi-Agent、Tool Call 等）。
> 
> 开源，欢迎 star 和 fork

- **推文**: https://x.com/brad_zhang2024/status/2042628758264517098
- **链接**: https://github.com/yizhiyanhua-ai/fireworks-tech-graph
- **归档**: [fireworks-tech-graph-技术图生成.md](./knowledge/tools/fireworks-tech-graph-技术图生成.md)
- **概述**: 专为 Claude Code 打造的技术图生成 Skill，一句话描述即可生成专业级 SVG+PNG 图表，支持 7 种视觉风格和 14 种图表类型，内置 AI/Agent 领域常见架构 Pattern，1.5K+ stars。

---

# Saturday, April 11, 2026

## @xicilion - Markdown Viewer Agent Skills 图表生成神器
> 它来了它来了。一百多个图例，6000 多精选矢量图标，一句话就可以根据你的 Markdown 内容自动定制。
>
> 包括架构图、流程图、工作流图、状态图、部署图、类图、用例图、信息图。。。。。我就不数了，装上自己体验吧。
>
> ```
> npx skills add markdown-viewer/skills
> ```

- **推文**: https://x.com/xicilion/status/2042848369450848424
- **链接**: [markdown-viewer/skills](https://github.com/markdown-viewer/skills)（GitHub, 1703 stars）
- **归档**: [Markdown-Viewer-Agent-Skills.md](./knowledge/tools/Markdown-Viewer-Agent-Skills.md)
- **概述**: 专为 AI Coding Agent 打造的 14 个图表生成 Skills，覆盖 PlantUML、Vega、Canvas 等 5 种引擎，6000+ 精选矢量图标，一句话生成专业级架构图、流程图、数据可视化等。

---

## @berryxia - fireworks-tech-graph 技术图生成神器（引用推文）
> 兄弟们，技术架构图终于有救了！
> 
> 以前画 Multi-Agent、RAG、Tool Call 这些架构，diagrams.net 里永远对不齐、颜色土、导出还模糊……画一次头秃一次
> 
> 烟花直接放大招！开源了个超级神器 fireworks-tech-graph —— 专为 Claude Code 打造的技术图生成 Skill！
> 
> 一句话就能出图，效果直接起飞：
> - 自动识别图类型
> - 智能语义形状 + 颜色编码（流程蓝、控制橙、数据绿…）
> - 支持玻璃态、Neon 等高级风格
> - 高清 SVG + PNG 一键导出
> 
> 生产力直接拉满！

**引用原推**:
> @brad_zhang2024: 写技术文章最烦的事之一：画图。脑子里很清楚的架构，落到 diagrams.net 上总是对不齐、颜色难看、导出模糊。所以我做了 fireworks-tech-graph，一个专门生成技术图的 Claude Code Skill。用法很简单——一句话描述，图就出来了。

- **推文**: https://x.com/berryxia/status/2042757589180858796
- **引用推文**: https://x.com/brad_zhang2024/status/2042628758264517098
- **链接**: https://github.com/yizhiyanhua-ai/fireworks-tech-graph
- **归档**: [fireworks-tech-graph技术图神器.md](./knowledge/tweets/fireworks-tech-graph技术图神器.md)
- **概述**: Berryxia 推荐烟花老师开源的 fireworks-tech-graph，一句话生成专业级技术架构图，解决传统画图工具的对齐配色问题。

---

## @berryxia - Obsidian Reader YouTube 字幕交互时间轴
> 我看完 YouTube 再也回不去了……
> 
> Obsidian Reader 直接把字幕做成可交互时间轴！
> 
> - 点击任意一句字幕 → 视频精准跳转
> - 高亮重点句子 → 自动同步
> - 记笔记丝滑到爆
> 
> 这体验太上头了，普通 YouTube 已经完全看不下去
> 
> Obsidian Web Clipper 1.4 已上线

- **推文**: https://x.com/berryxia/status/2042767221513146644
- **归档**: [Obsidian-Reader-YouTube字幕.md](./knowledge/tweets/Obsidian-Reader-YouTube字幕.md)
- **概述**: Obsidian Web Clipper 1.4 新增 YouTube 字幕交互时间轴功能，点击字幕即可跳转视频，极大提升视频学习和笔记效率。

---

## @dotey - Codex 团队 CLI 工具方法论
> OpenAI Codex 团队的 Nick Baumann 分享了一个他日常用 Codex 干活的心得：与其每次把一堆文档、日志、API 输出丢给 AI 去啃，不如给它造几个专用的命令行小工具。
> 
> 他的逻辑很直接：MCP 连接器解决的是"能不能访问"的问题，但很多时候原始数据太大、太杂，AI 拿到手也处理得费劲。这时候更好的做法是把常用操作封装成一个带参数、输出 JSON、有帮助文档的 CLI 命令。
> 
> 他自己实际在用三个这样的 CLI：
> 1. codex-threads：检索自己以前的 Codex 对话记录
> 2. slack-cli：在 Slack 里精准找信息
> 3. typefully-cli：写推文和排期发布
> 
> 他把整个方法论总结成了一篇教程发到 OpenAI 开发者文档上，还配了一个 cli-creator skill 帮你用 Codex 自己造 CLI。
> 
> 这个思路对用 Claude Code 的人同样适用。核心就一句话：如果你发现自己反复在给 AI 喂同一类乱糟糟的数据，那就别再解释了，给它造个命令。

**引用原推**:
> @nickbaumann_: The best tools I give Codex are bespoke CLIs

- **推文**: https://x.com/dotey/status/2042777337398210713
- **链接**: https://developers.openai.com/codex/use-cases/agent-friendly-clis
- **归档**: [Codex团队CLI工具方法论.md](./knowledge/articles/Codex团队CLI工具方法论.md)
- **概述**: OpenAI Codex 团队分享的 CLI 工具方法论：与其反复喂同一类杂乱数据给 AI，不如封装成专用 CLI 命令。核心思想适用于 Claude Code，CLI + Skill 组合让 AI 更高效地处理复杂任务。

---
日期: Saturday, April 11, 2026
## @汉松 - Orca AI编排IDE
> 我现在经常同时打开多个 ClaudeCode 命令行开发，有时候开的 terminal 窗口多了，就容易找不到。
后来看到 cmux，它有垂直标签页，也支持分屏，而且 ClaudeCode 执行完它也会高亮通知。
但还有一个痛点就是，我有时候想看一下项目里面的文件内容，纯命令行就不方便了。
最近发现另一个项目 Orca @JinjingLiang，它是按照项目组织的，在右边可以看到文件目录，然后可以直接打开查看，也能方便拖动文件告诉 ClaudeCode 文件路径。
Orca 正好解决了我的问题，目前是我的主力 IDE。

> 引用 @JinjingLiang: Seriously—stop using Cursor / Conductor / Cmux. Orca does it all: Ghostty terminal, File editor, Worktree management, Works on mac / linux / windows. Free. Open source. MIT licensed.

- **推文**: https://x.com/Yonah_x/status/2042797318064497066
- **链接**: [orca](https://github.com/stablyai/orca) - 下一代AI编排IDE
- **归档**: [Orca-AI编排IDE](./knowledge/tools/Orca-AI编排IDE.md)
- **概述**: Orca是下一代IDE，可在一个界面中同时运行Claude Code、Codex、OpenCode等多个AI agent，每个agent在独立worktree中运行，内置Ghostty终端和文件编辑器，解决多窗口管理痛点。

---
日期: Saturday, April 11, 2026
## @泊舟 - Graphify知识图谱技能
> 上周分享了 Karpathy 用 AI 整理知识库的做法，现在有人把它做成了正经产品。
Graphify，一个 Claude Code 的 skill（技能插件），输入 /graphify 就能把一个文件夹里的代码、文档、论文、图片、视频自动整理成知识图谱。
做了三件事：
1. 代码文件用 AST 解析，本地跑，不需要调 AI
2. 音视频用 Whisper 本地转文字
3. 文档、论文、图片让 Claude 子代理并行提取语义关系
最后生成一个可交互的 HTML 图谱，还有一份纯文字报告。所有关系都标注了来源：是直接提取的、推断的、还是模糊的。
Karpathy 当时说"这件事值得做成一个正经产品"，这个项目就是在回应这句话。

- **推文**: https://x.com/bozhou_ai/status/2042816049205391484
- **链接**: [graphify](https://github.com/safishamsi/graphify) - 知识图谱生成技能
- **归档**: [Graphify-知识图谱技能](./knowledge/tools/Graphify-知识图谱技能.md)
- **概述**: Claude Code skill，输入/graphify将代码/文档/论文/图片/视频整理成可交互知识图谱。三阶段处理：AST解析代码、Whisper转录音视频、Claude子代理提取语义关系，71.5x更少tokens每次查询。

---
日期: Saturday, April 11, 2026
## @Nous Research - Hermes Agent微信集成
> 给中国用户的好消息：Hermes Agent 现在原生支持个人微信了
微信扫码即可连接，私聊群聊都支持。图片、视频、文件、语音消息全覆盖，长轮询直连，不需要公网 IP。
运行 'hermes update' 即可体验
文档：https://t.co/nonIEoaF79
感谢 @Bravohenry_ 的贡献

- **推文**: https://x.com/NousResearch/status/2042821620281053641
- **链接**: [微信集成文档](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
- **归档**: [Hermes微信集成指南](./knowledge/articles/Hermes微信集成指南.md)
- **概述**: Hermes Agent原生支持个人微信，扫码连接即可，私聊群聊全覆盖，图片视频文件语音消息支持，长轮询直连无需公网IP，运行hermes update即可体验。

---
日期: Saturday, April 11, 2026
## @BruceBlue - Hermes Agent深度解析
> Hermes Agent：当工具开始拥有时间，它就不再只是工具

一篇深入分析 Hermes Agent 的长文，探讨它如何将 Agent 从一次性会话推进成带有时间维度的持续性系统。核心框架：Knowledge Layer（记忆、skills）、Execution Layer（child agents、工具）、Output Layer（cron、gateway、消息出口）。真正迁移的是工作方式，不只是文件。

- **推文**: https://x.com/BruceBlue/status/2042868542421504399
- **链接**: [原文](https://x.com/i/article/2042805844459597824)
- **归档**: [Hermes-Agent时间维度系统](./knowledge/articles/Hermes-Agent时间维度系统.md)
- **概述**: 深度解析Hermes Agent的三层架构（Knowledge/Execution/Output Layer），探讨其记忆系统、Skills渐进式披露、任务委派、OpenClaw迁移路径等，阐述"当工具开始拥有时间"的核心洞见。

---
日期: Saturday, April 11, 2026
## @Kai - 中转站行业真相揭露
> 这摊浑水我搅定了
我就是要推动更多人直接下场做中转站老板，别特么去当什么代理。自己搭站、自己控渠道、自己定价，哪怕起步再惨，那也是你自己的生意。
我刚开始碰中转站那会儿，惨得一批。一天流水一二百块钱，刨去成本剩不下几个子儿。后来怎么起来的？路子跑通了，渠道商一个一个主动找上门来，信息差磨平了，利润率直接从脚底板窜到百分之八十。

> 引用 @0xToni: 这哥们一周前就在说让人关注他，他出中转教程了，本来没想理他，但是他的文章实在漏洞太多了，不愧是上个UCL都要挂在主业的英留

- **推文**: https://x.com/xkajon/status/2042944828758200368
- **链接**: 无
- **归档**: [中转站行业真相揭露](./knowledge/tweets/中转站行业真相揭露.md)
- **概述**: 作者经手流水七十多万，揭露中转站行业猫腻，批评天策的代理模式是"披着AI外衣的传销"，计划公开Claude全链路、ChatGPT供货端等源头信息，推动更多人自己做中转站老板而非当代理。

---
日期: Saturday, April 11, 2026
## @雨哥向前冲 - Obsidian Web Clipper YouTube智能阅读器教程
> https://t.co/TarhI8ng1n

- **推文**: https://x.com/xiangxiang103/status/2042950224227045763
- **链接**: [X文章](https://x.com/i/article/2042947402982920192) - Obsidian Web Clipper YouTube智能阅读器教程
- **归档**: [Obsidian-Web-Clipper-YouTube智能阅读器](./knowledge/articles/Obsidian-Web-Clipper-YouTube智能阅读器.md)
- **概述**: Obsidian Web Clipper 1.4版本重大更新，可将YouTube视频变成智能阅读器。支持章节大纲、时间戳字幕、点击跳转、自动高亮等功能，观看教程视频效率大幅提升。

---
日期: Saturday, April 11, 2026
## @花叔 - Obsidian + Claude Code 橙皮书发布
> 58页的Obsidian+Claude Code构建知识库的橙皮书📙来了：https://t.co/WQlkWqXVbR
其实相比说这是我写的「书」，更合适的说法是这是个为了辅助我自己开始使用Obsidian而做的一个深度调研+系统梳理的素材。
主要内容如下：
问题篇 -- 为什么你的笔记软件是「信息坟场」，以及为什么只有 AI 能解决这个问题
选择篇 -- 三个完全独立的十亿级项目，不约而同选了 Markdown 存储 AI 的记忆，这不是巧合
上手篇 -- 40 分钟内搞定 Obsidian 安装 + Claude Code 接入
架构篇 -- 设计你的 vault，让 AI 能高效地理解和操作它
知识库篇 -- Karpathy 的 LLM Wiki 模式：让 AI 维护你的知识库，而不是建 RAG
实战篇 -- 7 个可以直接抄的工作流，每个都有具体步骤和 prompt
生态篇 -- 1000+ 插件中你真正需要的 4 个
进阶篇 -- Git 版本控制、自定义 Skills、本地 AI、多 Vault 策略

- **推文**: https://x.com/AlchainHust/status/2042964631098904603
- **链接**: [obsidian-ai-orange-book](https://github.com/alchaincyf/obsidian-ai-orange-book) - Obsidian + Claude Code橙皮书 (377 stars)
- **归档**: [Obsidian-AI-橙皮书](./knowledge/tools/Obsidian-AI-橙皮书.md)
- **概述**: 花叔发布的58页橙皮书，系统讲解如何用Obsidian + Claude Code搭建AI驱动的个人知识管理系统。三大核心洞察：Markdown是AI Agent的原生接口、LLM应该是编译器而非检索器、CLAUDE.md + index.md做了80%的工作。

---
日期: Sunday, April 12, 2026
## @Lonely__MH - AI搜索引擎API询问
> 🚀想求教下大家：目前主流的 AI 搜索引擎 API 你们首选哪家？
>
> 我知道的是 Tavily 和 Exa，并且目前在用的是Tavily
>
> 除了这两家，还有更硬核或者性价比更高的推荐吗？求大佬们带带路🙂

- **推文**: https://x.com/Lonely__MH/status/2043204436668158400
- **概述**: 用户询问AI搜索引擎API的选择，目前使用Tavily，寻求更硬核或性价比更高的替代方案。

---
日期: Sunday, April 12, 2026
## @Lonely__MH - Grok MCP Server推荐
> *回复 @0x00psyche:* grok搜索➕tavily crawl
>
> Grok Search MCP Server ，是这个吗？

- **推文**: https://x.com/Lonely__MH/status/2043206735016698065
- **父推文**: https://x.com/0x00psyche/status/2043205276845949300
- **概述**: 回复讨论Grok搜索配合Tavily爬虫的MCP方案，询问Grok Search MCP Server的具体实现。

---
日期: Sunday, April 12, 2026
## @MrLarus - SearXNG元搜索引擎推荐
> *回复 @Lonely__MH:* 我也用Tavily，另外在hermes中配了个SearXNG
>
> https://github.com/searxng/searxng

- **推文**: https://x.com/MrLarus/status/2043216911031247301
- **父推文**: https://x.com/Lonely__MH/status/2043204436668158400
- **链接**: [searxng/searxng](https://github.com/searxng/searxng)（GitHub, Python, 28286 stars）
- **归档**: [SearXNG-元搜索引擎.md](./knowledge/tools/SearXNG-元搜索引擎.md)
- **概述**: 推荐开源元搜索引擎SearXNG作为Tavily的补充方案，可集成到Hermes Agent中。28K+ stars，支持隐私保护的跨引擎聚合搜索。

---
日期: Sunday, April 12, 2026
## @ai_xiaomu - AI视频SaaS月入20万攻略
> https://t.co/ez54iEBvS8

- **推文**: https://x.com/ai_xiaomu/status/2043246359210557948
- **链接**: [X文章](https://x.com/i/article/2043235345861591040) - AI视频SaaS从0到月入20万攻略
- **归档**: [AI视频SaaS月入20万攻略.md](./knowledge/articles/AI视频SaaS月入20万攻略.md)
- **概述**: 万字长文分享零基础开发者如何做出AI视频工具月入20万。涵盖开发环境搭建、域名服务配置、模板建站、落地页设计、SEO推广、支付接入等完整攻略，核心思路是找到已验证产品做自己的版本快速上线。

---
日期: Sunday, April 12, 2026
## @loonggg - 花费万元折腾AI一年总结分享
> 最近读到一篇很有意思的文章，作者是腾讯云开发者，一位很早就开始拥抱 AI 的开发者，付费用过的产品超过十几款，前前后后花了上万块。他把自己这一年折腾 AI 的经历、工具和思考都写了出来，读完确实有不少启发。
先说工具层面。他围绕 Mac 搭了一套高效的工作环境，核心是 AeroSpace 做窗口管理、Raycast 做快捷启动和剪贴板管理，再加上 Ghostty 终端和一堆命令行工具。最有意思的是他自己开发了一个叫 Cockpit 的仪表盘，专门用来同时监控多台机器上跑着的 AI Agent 状态，防止某个 Agent 卡住了自己还不知道。
然后他聊到怎么把 Agent 用好。他梳理了一条演进路线：从最早的 Prompt Engineering（写好提示词），到 Context Engineering（管好 Agent 能看到的所有信息），再到 Spec-driven Development（先写清楚需求契约再让 Agent 动手），最后到 Harness Engineering（给 Agent 搭一整套约束体系）。OpenAI 有个团队就是用 3 个工程师、5 个月、完全零手写代码，靠搭建这套"缰绳"体系做出了百万行代码的产品。核心比喻特别形象：Agent 是马，Harness 是缰绳，马跑得再快，没有缰绳就只会横冲直撞。
最让我觉得有价值的是他关于"让 Agent 替我学习"的思路。他发现现在技术迭代太快，传统的手动收集、整理笔记的方式已经跟不上了。所以他搭了一套 Agent 工作流：AI 每天自动从十几个信息源抓取新闻、转录播客、提炼最佳实践，然后把这些知识沉淀到 Agent 自己的技能库里。等到真正干活的时候，这个 Agent 已经是一个吸收了最新方案的"武装版"了。他甚至让 Agent 帮他打 Kaggle 比赛，春节旅游期间远程托管，4000 支队伍里最高冲到过第六名。
原文地址：https://t.co/vj6t3h62U6

- **推文**: https://x.com/KengGuangLong/status/2043128498878111878
- **链接**: [bestblogs.dev文章](https://www.bestblogs.dev/en/article/83fa2a78) - 花费万元折腾AI一年总结
- **归档**: [花费万元折腾AI一年总结](./knowledge/articles/花费万元折腾AI一年总结.md)
- **概述**: 腾讯云开发者分享一年AI实践经验：围绕Mac搭建高效工具链（AeroSpace、Raycast、Ghostty、自研Cockpit），掌握Harness Engineering方法论，搭建Agent自动学习工作流，甚至用Agent远程托管打Kaggle比赛冲到第六名。

---
日期: Sunday, April 12, 2026
## @Yangyi - 出海AI Web月入4万刀经验分享
> 实践经验很宝贵👍

> 引用 @小耳朵sir: https://t.co/tFhyCr6ERQ

- **推文**: https://x.com/yangyi/status/2043188676759527601
- **链接**: [X文章](https://x.com/i/article/2033208780654256128) - 出海web月入4万刀经验分享
- **归档**: [出海AI-Web月入4万刀经验分享](./knowledge/articles/出海AI-Web月入4万刀经验分享.md)
- **概述**: 小耳朵sir分享一年摸索出海AI Web的经历，达到月收入4万美元。万字长文涵盖项目选择思路、需求验证方法、产品设计原则、流量获取策略（SEO + Google Ads）、付费转化技巧等实操经验。

---
日期: Sunday, April 12, 2026
## @烟花老师 - Fireworks Tech Graph V3版本发布
> 谢谢大家的认可与反馈，迅速更新了第三版，这一版已经很稳定了，我比较满意了。
强烈推荐大家升级到这一版！
(附件7 张图是最新效果)

收到了很多小伙伴的反馈，其中 codex 兼容和出图不稳定是最多的。

所以认真解决了"怎么稳定产出样图级技术图"这件事。🔥
这七张最新的图片均是由 codex 生成
ps:Claude 最近降智了，也推荐大家用 Codex(GPT5.4 high) 出图

👏欢迎给个三连，冲一下 2K star：
https://t.co/ZKEHSaBwsb

具体更新内容：
✅ Codex完美兼容 — 不再报错，也感谢几位小伙伴的 PR
✅ 推送到了 https://t.co/vky0IQIvLO：
一句话安装：npx skills add yizhiyanhua-ai/fireworks-tech-graph
一句话升级： npx skills add yizhiyanhua-ai/fireworks-tech-graph --force
✅ 把 7 种 style 从"换皮肤"升级成"有自己版式语言的生成系统"
✅ 把最影响观感的几个老问题狠狠干掉了（连线穿框、标签压图、路径太机械、构图松散）
✅ 更重要的是，把这些能力抽象成了正式能力，基本确保输出 svg 代码过程不报错

> 引用 @烟花老师: 写技术文章最烦的事之一：画图。
脑子里很清楚的架构，落到 https://t.co/Pu1N1Z3H2s 上总是对不齐、颜色难看、导出模糊。
所以我做了 fireworks-tech-graph，一个专门生成技术图的 Claude Code Skill。
用法很简单——
「画一张 Multi-Agent 协作图：Orchestrator 调度 3 个 SubAgent，分别负责搜索、计算和代码执行，最后汇聚到 Aggregator 输出结果，玻璃态风格」
然后它会：
① 识别图类型 → Agent 架构图
② 分配语义形状 → Orchestrator 用六边形，Agent 用六边形，存储用圆柱体
③ 用语义颜色编码箭头 → 蓝色主流程、橙色控制流、绿色读写
④ 自动导出 SVG + 1920px PNG

- **推文**: https://x.com/brad_zhang2024/status/2043322925072388408
- **链接**: [fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) - Claude Code技术图生成Skill (1522 stars)
- **归档**: [Fireworks-Tech-Graph-技术图生成器](./knowledge/tools/Fireworks-Tech-Graph-技术图生成器.md)
- **概述**: V3版本重大更新：Codex完美兼容、7种风格升级为有版式语言的生成系统、解决连线穿框/标签压图等观感问题。一句话描述即可生成出版物级别的SVG+PNG技术图，内置AI/Agent领域知识。

---

# Tuesday, April 7, 2026

---

# Thursday, April 9, 2026

## @billtheinvestor - Claude与Obsidian深度整合三步设置
> Claude + Obsidian 是我目前最常用的组合，3 步就能实现深度整合。
> Claude 可以直接读写你的 Obsidian 仓库：搜索笔记、新建文件、在指定标题下插入内容、自动把会议总结成新笔记……
> 把 Obsidian 当第二大脑后，Claude 就成了它上面的"思考层"。
> 3 步设置：
>
> Obsidian 安装并启用 "Local REST API" 插件，复制 API Key
> 打开 Claude 配置文件夹：Mac：~/Library/Application Support/Claude/claude_desktop_config.json
>
> 加入 mcp-obsidian 配置，重启 Claude 即可。
>
> 从此 Claude 真正懂你的知识库了。

- **推文**: https://x.com/billtheinvestor/status/2042284579986555107
- **归档**: [Claude与Obsidian深度整合三步设置.md](./knowledge/tweets/Claude与Obsidian深度整合三步设置.md)
- **概述**: Claude与Obsidian深度整合的三步设置指南，通过MCP协议让Claude直接读写Obsidian仓库，实现真正的"第二大脑"能力。

---

## @geekbb - Token Neovim配色方案（回复推荐）
> *回复 @duanjl_china:* 这个 ghostty 是什么 theme 啊
>
> https://t.co/sg8C5ezF47

- **推文**: https://x.com/geekbb/status/2042160744754733428
- **父推文**: https://x.com/duanjl_china/status/2042125297940885685
- **链接**: https://github.com/ThorstenRhau/token/
- **归档**: [Token-Neovim配色方案.md](./knowledge/tools/Token-Neovim配色方案.md)（已有）
- **概述**: geekbb 回复询问 ghostty 配色的问题，推荐了 Token 主题。这是一个零配置的 Neovim 配色方案，内置 Ghostty 等终端工具配套主题，所有配色从同一 palette 生成。

---

## @Jason23818126 - Vibe-Trading 金融AI交易框架
> 港大最新开源了一个金融 AI 交易项目...

- **推文**: https://x.com/Jason23818126/status/2042089979627921634
- **链接**: https://github.com/HKUDS/Vibe-Trading
- **归档**: [Vibe-Trading-金融AI交易.md](./knowledge/tools/Vibe-Trading-金融AI交易.md)
- **概述**: 香港大学开源的金融AI交易框架，支持多策略自动化交易。

---

## @0xAA_Science - auth2api Claude OAuth转API代理
> 我们利用上周"开源"的 Claude Code 源码，在 auth2api 中精确复刻了 7 个维度的用户指纹...

**引用原推**:
> 让 Claude Code 自己写了一个轻量、单账号的 Claude OAuth 转 API 代理...

- **推文**: https://x.com/0xAA_Science/status/2042151683283878146
- **链接**: https://github.com/AmazingAng/auth2api
- **归档**: [auth2api-OAuth转API代理.md](./knowledge/tools/auth2api-OAuth转API代理.md)
- **概述**: 将Claude OAuth认证转换为API代理的工具，支持精确复刻用户指纹实现稳定调用。

---

## @QingQ77 - Token Neovim配色方案
> 不需要配置的配色方案，才是你不用操心的配色方案。

受 Claude 美学启发的 Neovim 配色方案...

- **推文**: https://x.com/QingQ77/status/2042182985093468607
- **链接**: https://github.com/ThorstenRhau/token/
- **归档**: [Token-Neovim配色方案.md](./knowledge/tools/Token-Neovim配色方案.md)
- **概述**: 受Claude美学启发的Neovim配色方案，零配置开箱即用。

---

## @vista8 - Recordly 免费录屏软件
> 最贵缩放录屏软件Screen Studio，核心功能被Recordly复刻，完全免费开源！

- **推文**: https://x.com/vista8/status/2042046881635979312
- **链接**: 无（媒体附件）
- **概述**: Recordly 是 Screen Studio 的免费开源替代品，复刻了其核心录屏缩放功能。

---

## @geekbb - Obsidian Baseline 主题
> Obsidian Baseline 主题越来越赏心悦目了...

- **推文**: https://x.com/geekbb/status/2042071957840261537
- **链接**: https://github.com/aaaaalexis/obsidian-baseline
- **归档**: [Obsidian-Baseline-主题.md](./knowledge/tools/Obsidian-Baseline-主题.md)
- **概述**: 简洁优雅的 Obsidian 主题，注重可读性和美观性，1.1K+ stars。

---

# Wednesday, April 8, 2026

## @nash_su - LLM Wiki 开源客户端
> 开源啦🎉🎉🎉
>
> 基于 @karpathy 的 llm-wiki 方法论...

- **推文**: https://x.com/nash_su/status/2042017125678903330
- **链接**: https://github.com/nashsu/llm_wiki
- **归档**: [LLM-Wiki-知识库客户端.md](./knowledge/tools/LLM-Wiki-知识库客户端.md)
- **概述**: 基于 Karpathy 的 LLM Wiki 方法论开发的开源客户端，用于个人知识管理和智能整理。

---

## @howlemont - MarkItDown 文档转 Markdown 工具
> 微软，总算出了个好东西...
>
> 可以将几乎任何格式转换为Markdown...

- **推文**: https://x.com/howlemont/status/2042017686457348506
- **链接**: https://github.com/microsoft/markitdown
- **归档**: [MarkItDown-文档转Markdown.md](./knowledge/tools/MarkItDown-文档转Markdown.md)
- **概述**: 微软开源的文档转换工具，支持将 PDF、Word、PPT 等多种格式转换为 Markdown，95K+ stars。

---

## @FinanceYF5 - Karpathy的"第二大脑"概念应用案例
> Karpathy 的"第二大脑"概念直接干掉了 RAG。
>
> 现在 LLM 可以把论文、代码库和笔记变成一个不断进化、越来越聪明的活维基。
>
> 而且人们已经在用它做各种疯狂的应用了。
>
> 以下是 10 个例子：

- **推文**: https://x.com/FinanceYF5/status/2041792320639815910
- **归档**: [Karpathy的第二大脑概念应用案例.md](./knowledge/tweets/Karpathy的第二大脑概念应用案例.md)
- **概述**: 介绍了Karpathy提出的"第二大脑"概念，LLM可以将论文、代码库和笔记转化为不断进化的活维基，并分享了10个实际应用案例。

---

## @blackanger - Anthropic发布Claude Managed Agents
> Anthropic 发布了新的 Harness 工程实践文章...
>
> 引用 @RLanceMartin

- **推文**: https://x.com/blackanger/status/2041951380836147479
- **链接**: https://x.com/i/article/2041913047493832710 (X文章: Launching Claude Managed Agents)
- **归档**: [Anthropic发布ClaudeManagedAgents.md](./knowledge/tweets/Anthropic发布ClaudeManagedAgents.md)
- **概述**: Anthropic发布Claude Managed Agents相关文章，介绍新的工程实践和代理管理能力。

---

## @billtheinvestor - Graphify开源发布
> Andrej Karpathy 建议开发此工具 48 小时后，Graphify 已在 GitHub 开源...

- **推文**: https://x.com/billtheinvestor/status/2041995989889024056
- **归档**: [Graphify开源发布.md](./knowledge/tweets/Graphify开源发布.md)
- **概述**: Graphify工具在Karpathy建议后48小时内开源发布，展现了开源社区的快速响应能力。

---

## @dotey - Hermes Agent vs OpenClaw 对比分析
> *引用 @NousResearch:* Meet Hermes Agent, the open source agent that grows with you.
>
> Hermes Agent remembers what it learns and gets more capable over time, with a multi-level memory system and persistent dedicated machine access. https://t.co/Xe55wBbUuo
>
> Hermes Agent 势头很猛，这几天推荐的人很多，可以关注一下。我自己安装试用了还可以。
>
> Hermes Agent 是由 Nous Research 在今年 2 月底开源的 AI 智能体框架，上线不到两个月，GitHub 星标已经接近三万。这个项目被社区认为是 OpenClaw（龙虾）上线以来，第一个真正意义上的竞争对手。

- **推文**: https://x.com/dotey/status/2041585514873037167
- **引用推文**: https://x.com/NousResearch/status/2026758996107898954
- **链接**: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart（文档）
- **归档**: [HermesAgentvsOpenClaw对比分析.md](./knowledge/tweets/HermesAgentvsOpenClaw对比分析.md)
- **概述**: 宝玉详细对比了 Hermes Agent 和 OpenClaw 的设计哲学差异：龙虾是网关型设计，Hermes 是引擎型设计（闭环学习循环）。Hermes 会自动从经验生成技能并自我迭代，记忆体系采用 SQLite 全量检索，安全方面有五层纵深防御。适合关注 agent 镆期进化能力的用户或 AI 研究者。

---

## @vista8 - Vibe Coding 项目三个月实践总结
> *引用 @idoubicc:* https://t.co/hPbpho1LYC
>
> 真牛逼

- **推文**: https://x.com/vista8/status/2041330940925095977
- **引用推文**: https://x.com/idoubicc/status/2040821048577565144
- **链接**: https://x.com/i/article/2040815341639786497（X文章）
- **归档**: [VibeCoding项目三个月实践总结.md](./knowledge/tweets/VibeCoding项目三个月实践总结.md)
- **概述**: 作者分享三个月内使用 Claude Code 进行 Vibe Coding 的实践成果，成功构建了 WorkAny、WorkAny Bot、ChatClaw、CoRich、FastClaw、WeClaw、AnyClaw 等多个项目。总结了几点深刻感悟：编程习惯被颠覆、AI 治好强迫症、注意力更加不集中、测试资源极度缺乏、技术落地能力差异被 AI 抹平。

---

## @fankaishuoai - Karpathy LLM Wiki 改造方案
> Karpathy 的 LLM Wiki 方案全网刷屏，我拿来跑了一遍。方案很漂亮，但对内容创作者来说有三个硬伤。改了三个地方之后，900 多篇笔记现在全部自动管理。完整方案和实操演示👇

- **推文**: https://x.com/fankaishuoai/status/2041387467040055685
- **链接**: https://x.com/i/article/2041163929674715136（X文章）
- **归档**: [karpathy-llm-wiki-improved](./knowledge/articles/Karpathy-LLM-Wiki改进版.md)
- **概述**: 范凯分享了对 Karpathy LLM Wiki 方案的改造实践，针对内容创作者的需求增加了输入层、产出层，并引入确认机制让 AI 先报计划再执行，解决了自动分类不准确的问题。

---

## @wangray - Hermes Agent 内置 LLM-Wiki
> *引用 @Teknium:* Hermes Agent now comes packaged with Karpathy's LLM-Wiki for creating knowledgebases and research vaults with Obsidian!
>
> In just a short bit of time Hermes created a large body of research work from studying the web, code, and our papers to create this knowledge base around all of Nous' projects.
>
> Just `hermes update` and type
>
> /llm-wiki <research x>
>
> in a new message or session to begin :)
>
> https://t.co/K2FIDTTljz
>
> 本来想自己搭一套 Karpathy 的 LLM-Wiki 做知识库管理
>
> Hermes 现在直接开箱即用，省事儿了

- **推文**: https://x.com/wangray/status/2041384982485315737
- **引用推文**: https://x.com/Teknium/status/2041370915012071577
- **链接**: https://github.com/NousResearch/hermes-agent（GitHub）
- **归档**: [hermes-agent](./knowledge/tools/Hermes-Agent-自进化智能体.md)
- **概述**: Hermes Agent 现已内置 Karpathy 的 LLM-Wiki 功能，可直接用 `/llm-wiki <research x>` 命令创建知识库。这是一个自进化的AI智能体框架，具有闭环学习循环能力。

---

## @nash_su - LLM Wiki可视化客户端即将开源
> *引用 @nash_su:* 继 Karpathy 大神后，YC 的 CEO @garrytan 也分享了自己的知识管理方法：
> https://t.co/7iHMjfqr5e
>
> Karpathy大神的：
> https://t.co/Sxn9PR4TZ2
>
> 我将各自理论的核心架构、逻辑和概念可视化出来，方便大家看 https://t.co/uAq8tSfB9z
>
> LLM Wiki 客户端马上开源！
> 昨天根据 Karpathy 大神的 LLM Wiki 个人知识管理的方法论，开发了一个可视化的客户端软件，功能流程都完整实现，需要再优化下用户体验，今晚或明天开源出来。
>
> 今天要搞 https://t.co/nib8sZOrUi 的大版本更新和发布，忙完了就搞这个 https://t.co/lHVS9lDPf9

- **推文**: https://x.com/nash_su/status/2041381292588294606
- **引用推文**: https://x.com/nash_su/status/2041074070956216441
- **链接**: https://autocli.ai/（AutoCLI.ai）
- **归档**: [LLMWiki可视化客户端即将开源.md](./knowledge/tweets/LLMWiki可视化客户端即将开源.md)
- **概述**: nash_su 基于 Karpathy 和 Garry Tan 的 LLM Wiki 方法论开发了可视化客户端软件，即将开源。同时提到了 AutoCLI.ai 的大版本更新，这是一个将网站转换为结构化CLI输出的AI工具。

---

## @billtheinvestor - Clicky：屏幕旁的AI教师
> 我开发了一个叫 Clicky 的工具，它像一个 AI 教师，住在你光标旁边。它可以看见你的屏幕，和你对话，甚至能指着东西，有点像真有人在你旁边教学。我过去几天用它学习 Davinci Resolve，评分 10/10。 https://t.co/lTSj1Hg6Ci

- **推文**: https://x.com/billtheinvestor/status/2041341222632210836
- **归档**: [Clicky：屏幕旁的AI教师.md](./knowledge/tweets/Clicky：屏幕旁的AI教师.md)
- **概述**: Clicky 是一个 AI 教学工具，能实时观察屏幕内容、与用户对话交互，帮助学习软件操作。作者用它学习视频编辑软件 DaVinci Resolve，体验极佳。

---

# Saturday, April 4, 2026

## @karpathy - LLM Wiki Idea File
> *引用 @karpathy:* LLM Knowledge Bases
>
> Something I'm finding very useful recently: using LLMs to build personal knowledge bases for various topics of research interest...
>
> Wow, this tweet went very viral!
>
> I wanted share a possibly slightly improved version of the tweet in an "idea file". The idea of the idea file is that in this era of LLM agents, there is less of a point/need of sharing the specific code/app, you just share the idea, then the other person's agent customizes & builds it for your specific needs.

- **推文**: https://x.com/karpathy/status/2040470801506541998
- **引用推文**: https://x.com/karpathy/status/2039805659525644595
- **链接**: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f（GitHub Gist）
- **归档**: [llm-wiki-idea-file](./knowledge/tools/LLM-Wiki-Idea-File.md)
- **概述**: Karpathy 提出 Agent 时代的新分享模式：分享 idea 而非代码，让对方 Agent 自行定制实现。Gist 包含完整的 LLM Wiki 架构设计，用于构建个人知识库。

---

## @op7418 - Karpathy LLM Wiki 中文解读
> *引用 @op7418:* Karpathy 分享了他如何构建本地的 AI 知识库
>
> 跟我用的方法也很相似，但还是有很多可以借鉴的地方，推荐看看...
>
> karpathy 针对他这个 AI 知识库方案给了个更详细的版本

- **推文**: https://x.com/op7418/status/2040471456820408449
- **引用推文**: https://x.com/op7418/status/2039898050697839041
- **链接**: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f（GitHub Gist）
- **归档**: [KarpathyLLMWiki中文解读.md](./knowledge/tweets/KarpathyLLMWiki中文解读.md)
- **概述**: 歸藏分享 Karpathy LLM Wiki 的中文解读，介绍了 raw/ 目录存储原始资料、LLM 编译成 Wiki、Obsidian 作为前端、健康检查等核心概念。强调知识库会越用越厚，但需注意区分可靠来源和 AI 生成内容。

---

## @berryxia - Karpathy Idea File 推广
> *引用 @karpathy:* Wow, this tweet went very viral! I wanted share a possibly slightly improved version of the tweet in an "idea file"...
>
> 兄弟们！Karpathy 又整了个大活儿！🚀
>
> 他那条爆火的「LLM 个人知识库」推文火了之后，现在直接甩出一个「Idea File」Gist：
>
> 核心想法超前——在 Agent 时代，不用再分享具体代码或 App 了！直接把「idea」扔给对方 Agent，让它根据你的需求自己定制、自己实现！

- **推文**: https://x.com/berryxia/status/2040554947415244831
- **引用推文**: https://x.com/karpathy/status/2040470801506541998
- **链接**: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f（GitHub Gist）
- **归档**: [KarpathyIdeaFile推广.md](./knowledge/tweets/KarpathyIdeaFile推广.md)
- **概述**: Berryxia 推广 Karpathy 的 idea file 概念，强调在 Agent 时代分享 idea 而非代码的新模式。同一个 Gist 已在 @karpathy 条目归档。

---

## @yibie - 巴菲特致股东信知识库
> 大力推荐这个网站！它把巴菲特致股东的信掰开了，揉碎了，结构化了，变成一个知识库。而我非常喜欢它的结构：总览，图谱，概念，索引。

- **推文**: https://x.com/yibie/status/2040561560993890430
- **链接**: https://buffett-letters-eir.pages.dev/
- **归档**: [buffett-letters-knowledge-base](./knowledge/articles/巴菲特致股东信知识库.md)
- **概述**: 一个结构化的巴菲特致股东信知识库，收录 35 篇合伙人信（1956-1970）和 60 篇伯克希尔股东信（1965至今）。采用总览、图谱、概念、索引四层架构组织，方便检索和学习巴菲特的投资思想演变。

---

## @CG_BRC20 - Bitcoin Faucet Revival After 16 Years
> 比特币水龙头时隔 16 年回归！
>
> 推特联合创始人兼前 CEO @jack 旗下的 @BitcoinatBlock 重磅宣布，将于 2026年4月6日 上线比特币免费水龙头。
>
> 据说，这次总发放池约为 100 万美元等值的 BTC（约 15 BTC），全部由他们的 Block 公司出资，从自家持仓中拨出。
>
> 该水龙头向 Gavin Andresen 2010年原版致敬与复兴，其曾免费发放 5 BTC/人 并获中本聪亲自点赞，总计发放近 1.97 万 BTC（如今价值约 19 亿美元)

- **Tweet:** https://x.com/CG_BRC20/status/2040422960264306698
- **Link:** https://btc.day/
- **What:** Jack Dorsey's BitcoinatBlock announces Bitcoin faucet revival launching April 6, 2026 - ~$1M BTC pool (~15 BTC) funded by Block company. Tribute to Gavin Andresen's 2010 original faucet that distributed 19,700 BTC (now worth ~$19B) with Satoshi's endorsement. Countdown site at btc.day.

---

# Monday, April 6, 2026

## @i5ting - Claude Island 灵动岛原型 Swift 实现
> 原来这才是灵动岛的原型啊
> 真swift

- **推文**: https://x.com/i5ting/status/2041006014603182089
- **链接**: https://github.com/farouqaldori/claude-island（GitHub）
- **归档**: [claude-island](./knowledge/tools/Claude-Island-灵动岛通知.md)
- **概述**: i5ting 对 Claude Island 项目的评价，指出这是灵动岛功能的 Swift 原型实现。该项目使用 Swift 构建原生 macOS 应用，在刘海位置显示 Claude Code 状态通知。

---

## @rwayne - 思维系统升级测试
> *引用 @Jaden_riku:* https://t.co/i1xzQ9wRCA
>
> 不错👍
> 马上来给我的第二大脑装上测试一下

- **推文**: https://x.com/rwayne/status/2041063190776385858
- **引用推文**: https://x.com/Jaden_riku/status/2041013292005773507
- **链接**: https://x.com/i/article/2041011364412764160（X文章）
- **归档**: [思维系统升级测试.md](./knowledge/tweets/思维系统升级测试.md)
- **概述**: 用户对新知识管理方法的积极反馈，准备在自己的第二大脑系统中测试。引用的文章介绍了一套三层思维系统：维特根斯坦帮你发现模糊、苏格拉底追问挖掘答案、波兰尼处理默会知识。

---

# Sunday, April 5, 2026

## @garrytan - AI求职系统Career-Ops开源
> Golden age of open source is here
>
> 引用 @Hesamation: "bro created an AI job search system for Claude Code that scored 700+ job applications..."

- **推文**: https://x.com/garrytan/status/2040891664617848993
- **链接**: https://github.com/santifer/career-ops
- **归档**: [Career-Ops-AI求职系统.md](./knowledge/tools/Career-Ops-AI求职系统.md)
- **概述**: AI驱动的求职系统，基于Claude Code构建，支持14种技能模式、Go仪表板、PDF生成和批处理，开源后迅速获得26k+星标。

---

## @dotey - 编程智能体的核心组件【译】
> https://t.co/Aj6H4eVQer

- **推文**: https://x.com/dotey/status/2040659186070040584
- **链接**: https://x.com/i/article/2040657346175676416（X文章）
- **归档**: [coding-agent-components](./knowledge/articles/编程智能体核心组件.md)
- **概述**: Sebastian Raschka 文章的译文，详细拆解编程智能体六大核心组件：实时代码仓库上下文、提示词形态与缓存复用、工具接入与调用、上下文瘦身、结构化会话记忆、任务委派与子智能体。强调模型只是发动机，Harness 是整车系统。

---

## @Lonely__MH - Karpathy AI知识库落地教程
> *引用 @laozhang2579:* https://t.co/e2jwnF1Aak
>
> 🔥Karpathy AI知识库 落地教程首发！🚀
>
> 告别低效的 RAG 检索！这篇文章把 Karpathy 的核心思路拆解成了可操作的步骤。别再让你的 AI 每次都从零开始，学会主动构建知识库才是关键。

- **推文**: https://x.com/Lonely__MH/status/2040736227314499707
- **引用推文**: https://x.com/laozhang2579/status/2040732229035585615
- **链接**: https://x.com/i/article/2040727573035102208（X文章）
- **归档**: [KarpathyAI知识库落地教程.md](./knowledge/tweets/KarpathyAI知识库落地教程.md)
- **概述**: 将 Karpathy 的 AI 知识库理念转化为可操作步骤的落地教程。包括使用 Obsidian Web Clipper 采集素材、图片本地化、Git 版本管理、图谱视图查看知识全貌等实操步骤，帮助读者告别传统 RAG 的低效检索循环。

---

## @dotey - Claude Island：Mac 灵动岛通知管理器
> *引用 @panda_ai_agent:* @dotey https://t.co/TwYxGXWnEs 和这个很像，不过这个是开源的，而且很久没更新了
>
> 开源项目推荐：Claude Island - Mac 灵动岛 Claude Code 通知管理器
>
> 这是一个 macOS 原生应用，用 Swift 写的，装好之后会在刘海位置显示一个可展开的浮层。Claude Code 运行时，它实时追踪会话状态。需要授权的时候，刘海区弹出批准/拒绝按钮，点一下就行，不用切窗口。

- **推文**: https://x.com/dotey/status/2040850151405707702
- **引用推文**: https://x.com/panda_ai_agent/status/2040246806509195312
- **链接**: https://github.com/farouqaldori/claude-island（GitHub）
- **归档**: [claude-island](./knowledge/tools/Claude-Island-灵动岛通知.md)
- **概述**: Claude Island 是一款 macOS 原生应用，通过 Dynamic Island 显示 Claude Code 通知，让开发者无需切换上下文即可监控后台任务状态。Swift 编写，1802+ stars，支持实时会话监控、权限审批、对话历史查看等功能。

---

# Friday, April 3, 2026

## @itsyuhao - CLI-Anything Project Defense
> 作者本人在这里。CLI-Anything 是我本人探索CUA以及GUI两年多的经验凝结之一，我们从来没有过任何买star的行为也没有任何这样做的动机，我对自己的工作十分珍惜和自豪，到目前也在持续维护。
>
> 希望开源社局大家共创共发展，在良性的氛围里互相inspire，lets build together!

- **Tweet:** https://x.com/itsyuhao/status/2040028116362612753
- **What:** Author Yuhao Yang defends CLI-Anything project against accusations of bought stars, noting it's the culmination of 2+ years of CUA/GUI research. The project supports 30+ professional software applications with an active community.

---

## @dotey - Mintlify ChromaFs Virtual Filesystem
> 文档平台 Mintlify 发了一篇工程博客，讲了一件挺有意思的事：他们给自家 AI 文档助手造了一套假的文件系统，叫 ChromaFs，让 AI 以为自己在用 grep、cat、ls 这些命令浏览文件，实际上每个命令都被拦截、翻译成了数据库查询。
>
> 效果很直接：会话启动时间从原来沙箱方案的 46 秒降到 100 毫秒，每次对话的边际计算成本几乎为零。

- **Tweet:** https://x.com/dotey/status/2040157640442229153
- **Link:** https://x.com/i/article/2039508550356238336
- **Filed:** [Mintlify ChromaFs](./knowledge/articles/mintlify-chromafs.md)
- **What:** Mintlify built a virtual filesystem (ChromaFs) that tricks AI into thinking it's using bash commands like grep, cat, ls, but each command is intercepted and translated into database queries. Results: session startup from 46s to 100ms, near-zero marginal compute cost. Built on Vercel Labs' just-bash, documents become "files", chapters become "directories".

---

# Thursday, April 2, 2026

## @lxfater - Indie Developer Earnings Reflection
> 早点关注到我就不会坚持这么久😅

- **Tweet:** https://x.com/lxfater/status/2039649747049537927
- **Link:** https://x.com/i/article/2039588754138988544
- **What:** Chinese tweet referencing an article about quitting a job to pursue full-time indie development for one year, reflecting on earnings and lessons learned. The linked article title: "辞去工作，全职独立开发一年，我赚了多少钱" (How much I earned after one year of full-time indie development).

---

# Thursday, March 26, 2026

## @nemoaigc - autoresearch 迭代方法论拆解
> *引用 @Lonely__MH:* https://t.co/civP7TucBp
>
> 妙啊

- **推文**: https://x.com/nemoaigc/status/2037069544980963540
- **引用推文**: https://x.com/Lonely__MH/status/2036651579005194426
- **链接**: https://x.com/i/article/2036637016637743104（X文章）
- **归档**: [autoresearch-methodology](./knowledge/articles/autoresearch迭代方法论.md)
- **概述**: 拆解 Karpathy 的 autoresearch 项目核心思路：改一个东西 → 打分 → 保留或回滚。这个通用迭代方法论可应用于任何需要迭代的场景，强调"工具会过时，框架不会"。

---

# Sunday, January 4, 2026

## @trq212 - AI alignment and interpretability resources
> If you started using Claude Code over the holidays, you might be curious about how AI actually works, the benefits and risks, and where it's headed. Here are some of my favorite papers on alignment, interpretability, and societal impacts

- **Tweet:** https://x.com/trq212/status/2007903193158881323
- **What:** Curated collection of papers on AI alignment, interpretability, and societal impact for those exploring Claude Code.

---

## @andyorsow - Claude Code use case uncertainty
> Feeling like I should be using Claude Code but have no idea exactly what I should be using it for. Just a bundle of non-technical FOMO over here.

- **Tweet:** https://x.com/andyorsow/status/2007931911847719290
- **What:** Expression of uncertainty about practical applications for Claude Code despite wanting to use it.

---

# Saturday, January 3, 2026

## @_kaitodev - Lovable for videos gaining traction
> lovable for videos gets better everyday with new creators joining
>
> check it out:
>
> *Quoting @sbsamuelbitenco:* we found a better way to do daniel dalen style captions

- **Tweet:** https://x.com/_kaitodev/status/2007553892968706134
- **Link:** https://odysser.com/
- **Quoted:** https://x.com/sbsamuelbitenco/status/2007549416450978065
- **What:** Lovable's video capabilities expanding with new creators. References improved caption generation approach.

---

## @nummanali - CC Mirror release announcement
> Announcing the release of CC Mirror
>
> The best way to use @Zai_org (GLM 4.7) and @MiniMax__AI (M2.1) Coding Plans
>
> - Full Model Support
> - All tools preconfigured
> - Custom themes
> - Isolated from CC
> - Enhanced prompts
>
> Start now: npx cc-mirror

- **Tweet:** https://x.com/nummanali/status/2007586417094844517
- **What:** CC Mirror tool launch enabling usage of GLM 4.7 and MiniMax M2.1 models with preconfigured tooling and custom themes.

---

# Friday, January 2, 2026

## @alexhillman - Git safety hooks for destructive command prevention
> been here, this never feels good.
>
> this lil set of hooks lets me rest easy it won't happen again
>
> *Quoting @nummanali:* Lmao I accidentally deleted everything I worked on today. Now I'm tasking codex to reconstruct it using cass (coding_agent_session_search). Probably going to take all night, lets see what happens

- **Tweet:** https://x.com/alexhillman/status/2006881325849129246
- **Link:** https://github.com/Dicklesworthstone/misc_coding_agent_tips_and_scripts/blob/main/DESTRUCTIVE_GIT_COMMAND_CLAUDE_HOOKS_SETUP.md
- **Quoted:** https://x.com/nummanali/status/2006875686846476556
- **What:** Git hooks setup to prevent accidental deletion of work. Responding to a cautionary tale about losing a day's work.

---

## @parcadei - Continuous Claude v2 Context Management
> @yuzu_4ever https://t.co/PwioZUVYkD
>
> you need this

- **Tweet:** https://x.com/parcadei/status/2005755875701776624
- **Link:** https://github.com/parcadei/Continuous-Claude-v2
- **What:** Python framework for maintaining session continuity in Claude Code workflows. Features ledger-based state persistence, handoff system for session resumption, MCP execution without context pollution, and agent orchestration with isolated context windows. Includes TypeScript execution hooks, Braintrust session tracing, artifact indexing, and compound learning tracking.

---

## @marckohlbrugge - Sessy: Open-Source Email Observability for AWS SES
> Introducing… 💌Sessy
>
> Open-source email observability for AWS SES
>
> https://t.co/PrBWVNwzVM
>
> Stop paying $$$ for VC-backed SES wrappers just to get a decent UI. Host your own.
>
> 💎 Built on Ruby on Rails
> 🧑‍💻 Licensed under O'Saasy
> 💡 Inspired by @37signals' Fizzy

- **Tweet:** https://x.com/marckohlbrugge/status/2005972157445333371
- **Link:** https://github.com/marckohlbrugge/sessy
- **What:** Self-hosted Rails application providing email observability for Amazon SES. Shows email events in a timeline: deliveries, bounces, complaints, opens, clicks. Open-source alternative to expensive SES wrapper services, allowing raw SES usage with beautiful UI for monitoring.

---

## @ShadcnStudio - Shadcn Studio Calendar Components
> Product link:- https://t.co/hg8PRG7V0I
>
> Github link:- https://t.co/Sk1cQx5LJ8
>
> Check it out 👆🏻

- **Tweet:** https://x.com/ShadcnStudio/status/2005964727806222598
- **Links:** [Product](https://shadcnstudio.com/docs/components/calendar), [GitHub](https://github.com/themeselection/shadcn-studio)
- **What:** Collection of 25+ shadcn/ui calendar component variants for React with TailwindCSS. Features single/range picking, multi-month navigation, time slots, and presets. Part of broader shadcn-studio ecosystem with 952 GitHub stars offering customizable components, blocks, templates, and theme generator.

---

## @joodalooped - Markwhen: Keyboard-First Timeline Tool
> for those who prefer keyboard to drag and drop, https://t.co/wLt0wiAOM1 is quite nice too

- **Tweet:** https://x.com/joodalooped/status/2006089396861427738
- **Link:** https://markwhen.com/
- **Quoted:** Karel Vuong's Lifemap tool for annual reviews and life planning
- **What:** Keyboard-driven timeline creation tool for planning and visualization. Text-based input alternative to drag-and-drop interfaces, complementary to Lifemap for personal planning and retrospectives.

---

## @pk_iv - Reverse Engineering Claude Chrome for Remote Browsers
> I spent all of Christmas reverse engineering Claude Chrome so it would work with remote browsers.
>
> Here's how Anthropic taught Claude how to browse the web (1/7)

- **Tweet:** https://x.com/pk_iv/status/2005694082627297735
- **Media:** Video demonstration
- **What:** Technical thread documenting how Anthropic's Claude Chrome extension works internally, with focus on enabling remote browser integration. Paul Klein IV reverse-engineered the extension over the Christmas holidays to enable remote browser functionality.

---

## @simonw - GistHost: Improved GitHub Gist HTML Preview
> I forked the wonderful https://t.co/DdVAXh3Du3 to create https://t.co/4jatEKRMZv - here's what I changed in my fork: https://t.co/DmSbkKMNTn

- **Tweet:** https://x.com/simonw/status/2006851664935006385
- **Links:** [GistPreview](https://gistpreview.github.io/), [GistHost](https://gisthost.github.io/), [Blog Post](https://simonwillison.net/2026/Jan/1/gisthost/)
- **What:** Simon Willison forked the 10-year-old GistPreview project to create GistHost, modernizing the tool that lets you view GitHub Gists as rendered HTML pages. His fork fixes handling of truncated large files by fetching from the raw URL when needed, and updates the UI with modern CSS instead of Bootstrap.

---

## @DataChaz - Gemini Interactive Diagram Learning Tool
> Holy sh*t.
>
> Gemini can now produce fully interactive images on any topic.
>
> Such an insane resource for learning → highlight any region, and it gives you a full explanation 🤯

- **Tweet:** https://x.com/DataChaz/status/2005605994781606141
- **What:** Google Gemini now generates fully interactive diagrams where users can highlight any region to receive detailed explanations. A powerful visual learning tool that combines generation with interactive exploration of complex topics.

---

## @steipete - Summarize.sh Hover Toolbar for Link Previews
> https://t.co/qSe6Y6Qfup now shows a summarized toolbar over any link you hover, perfect to identify clickbait before even opening the link.

- **Tweet:** https://x.com/steipete/status/2006425901719023628
- **Link:** https://summarize.sh/
- **What:** Summarize.sh CLI and Chrome extension now includes a hover toolbar feature that shows AI-generated summaries when hovering over links, helping users avoid clickbait. The tool supports local models, paid providers, and free OpenRouter models for fast content summarization.

---

## @DanielNealAdler - AI Job Displacement Reality Check
> I really enjoyed this. There's no sense pretending that this isn't happening, even for those of us selling AI. I don't believe AI is bad, but we do have to reconcile with this reality; it's only a matter of time until this is us tech workers, too

- **Tweet:** https://x.com/DanielNealAdler/status/2006206247054229798
- **Link:** https://www.nytimes.com/2025/12/28/opinion/artificial-intelligence-jobs.html (paywalled)
- **What:** Commentary on a NYT opinion piece about AI's impact on employment. Dan Adler acknowledges the uncomfortable reality that AI displacement will eventually affect tech workers themselves, despite many currently building AI solutions.

---

## @tom_doerr - Whisper-Flow Real-Time Audio Transcription
> Transcribes audio streams in real-time
>
> https://t.co/1hcfk9l51V

- **Tweet:** https://x.com/tom_doerr/status/2006262985182834881
- **Link:** https://github.com/dimastatz/whisper-flow/
- **What:** Python framework enabling real-time transcription of streaming audio using OpenAI's Whisper model. Unlike batch processing, Whisper-Flow accepts continuous audio chunks and produces incremental transcripts immediately using tumbling window segmentation. 463 GitHub stars.

---

## @donvito - GLM 4.7 Beast Performance
> omg GLM 4.7 is a beast!!!

$3/mo is a steal

- **Tweet:** https://x.com/donvito/status/2006743894147711370
- **Link:** https://z.ai/subscribe?cc=fission_glmcode_sub_v1&ic=V8VOHXNASO&n=Melvin%20Vivas
- **What:** Enthusiastic endorsement of the GLM 4.7 coding model, highlighting exceptional value at $3/month. Follow-up to earlier testing, emphasizing the model's capabilities and competitive pricing.

## @donvito - GLM 4.7 First Impressions
> wow GLM 4.7 is great

tried it in claude code

- **Tweet:** https://x.com/donvito/status/2006738817773171175
- **Link:** https://z.ai/subscribe?cc=fission_glmcode_sub_v1&ic=V8VOHXNASO&n=Melvin%20Vivas
- **What:** Positive first impression of GLM 4.7 model when used in Claude Code environment, part of the GLM Coding Plan offering AI-powered code generation for agents and IDEs at affordable pricing.

## @emmagine79 - Quick Smaug Implementation Success
> @alexhillman ayyyy thanks for this fam! i was able to use Claude opus + anti gravity to put this together in like 2 hours

- **Tweet:** https://x.com/emmagine79/status/2007051496496714038
- **Media:** Video demonstration
- **What:** Community response to Smaug (Alex's Twitter bookmarks organizer), showing rapid implementation success using Claude Opus - built a similar system in just 2 hours, demonstrating the accessibility and power of AI-assisted development.

## @OsaurusAI - Osaurus Mac AI Agent Demo
> Powered by Osaurus MCP tools.
Claude sees your screen, clicks, types, navigates — you supervise.
This is what AI agents look like on Mac.

- **Tweet:** https://x.com/OsaurusAI/status/2007091913393070168
- **Link:** https://github.com/dinoki-ai/osaurus
- **What:** Native macOS LLM server with MCP support enabling Claude to interact directly with the Mac interface - screen reading, clicking, typing, navigation. Runs local or cloud models with OpenAI/Anthropic compatible APIs. Built in Swift for Apple Silicon.

## @jarrodwatts - Claude HUD Plugin Concept
> Started working on "Claude HUD"

A Claude Code plugin that visualizes:
· context remaining in the session
· what tools are executing
· which subagents are running
· claude's to-do list progress

If there's enough interest, I'll polish it up and open-source it!

- **Tweet:** https://x.com/jarrodwatts/status/2007035752665034994
- **Media:** Video demonstration
- **What:** Work-in-progress Claude Code plugin providing real-time visualization dashboard for session metrics: context remaining, active tools, subagent status, and todo progress. Potential open-source release based on community interest.

## @simonw - GistHost Fork of GistPreview

> I forked the wonderful https://gistpreview.github.io/ to create https://gisthost.github.io/ - here's what I changed in my fork: https://simonwillison.net/2026/Jan/1/gisthost/

- **Tweet:** https://x.com/simonw/status/2006851664935006385
- **Links:** [GistPreview](https://gistpreview.github.io/), [GistHost](https://gisthost.github.io/)
- **Filed:** [GistHost Fork](./knowledge/articles/gisthost-fork.md)
- **What:** Simon Willison forked GistPreview to create GistHost, a tool for rendering GitHub Gists as standalone web pages. The linked article documents his changes and motivations for the fork.

---

## @DataChaz - Gemini Interactive Images for Learning

> Holy sh*t.
>
> Gemini can now produce fully interactive images on any topic.
>
> Such an insane resource for learning → highlight any region, and it gives you a full explanation 🤯

- **Tweet:** https://x.com/DataChaz/status/2005605994781606141
- **Media:** Video demonstration
- **What:** Google Gemini's new capability to generate interactive images where users can highlight any region to get detailed explanations. Positioned as a powerful learning tool.

---

## @steipete - Summarize.sh Link Preview Toolbar

> https://summarize.sh/ now shows a summarized toolbar over any link you hover, perfect to identify clickbait before even opening the link.

- **Tweet:** https://x.com/steipete/status/2006425901719023628
- **Link:** https://summarize.sh/
- **Filed:** [Summarize.sh](./knowledge/tools/Summarize-sh-链接预览.md)
- **What:** A browser tool that displays summary information in a toolbar when hovering over links, helping users identify clickbait without clicking through.

---

## @pk_iv - Claude Chrome Browser Integration

> I spent all of Christmas reverse engineering Claude Chrome so it would work with remote browsers.
>
> Here's how Anthropic taught Claude how to browse the web (1/7)

- **Tweet:** https://x.com/pk_iv/status/2005694082627297735
- **What:** A thread documenting how Anthropic's Claude Chrome extension works under the hood, with focus on remote browser integration. Paul Klein spent time reverse-engineering the extension over the holidays.

---

## @joodalooped - Markwhen Keyboard-Driven Timeline Tool

> for those who prefer keyboard to drag and drop, https://markwhen.com/ is quite nice too
>
> *Quoting @karelvuong:* Introducing Lifemap, a new tool to add to your personal annual reviews and 2026 planning. Lifemap lets you conduct a retrospective of your life and develop a roadmap ahead. Every year, my wife and I look forward to the lull during the holidays to work on the biggest project of our lives—ourselves.

- **Tweet:** https://x.com/joodalooped/status/2006089396861427738
- **Quoted:** https://x.com/karelvuong/status/2005669812199137476
- **Link:** https://markwhen.com/
- **Filed:** [Markwhen](./knowledge/tools/Markwhen-时间线工具.md)
- **What:** A keyboard-first timeline tool for planning and visualization. Complementary to Lifemap (the quoted tool), offering text-based input for those who prefer keyboards over drag-and-drop interfaces.

---

## @ShadcnStudio - Shadcn Calendar UI Components

> 🗂️ Shadcn Calendar!
>
> Plan, book, and schedule effortlessly with 25 calendar variants built for real-world use cases.

- **Tweet:** https://x.com/ShadcnStudio/status/2005964727806222598
- **Link:** https://github.com/themeselection/shadcn-studio
- **Filed:** [Shadcn Studio](./knowledge/tools/Shadcn-Studio-UI组件.md)
- **What:** An extended collection of 25+ shadcn/ui calendar components with variants for single/range picking, multi-month navigation, and time slots. Part of the broader shadcn-studio ecosystem offering customizable UI components and templates.

---

## @marckohlbrugge - Sessy Open-Source SES Email Observability

> Introducing… 💌Sessy
>
> Open-source email observability for AWS SES
>
> Stop paying $$$ for VC-backed SES wrappers just to get a decent UI. Host your own.
>
> 💎 Built on Ruby on Rails
> 🧑‍💻 Licensed under O'Saasy
> 💡 Inspired by @37signals' Fizzy

- **Tweet:** https://x.com/marckohlbrugge/status/2005972157445333371
- **Link:** https://github.com/marckohlbrugge/sessy
- **Filed:** [Sessy](./knowledge/tools/Sessy-邮件可观测性.md)
- **What:** A self-hosted Rails application providing beautiful observability and monitoring for Amazon SES, eliminating the need for expensive commercial SES wrappers. Shows events in a timeline: sends, deliveries, clicks, bounces, etc.

---

## @parcadei - Continuous Claude v2 Context Management

> *Replying to @yuzu_4ever's critique of Claude Code:* you need this
>
> Context management for Claude Code. Hooks maintain state via ledgers and handoffs. MCP execution without context pollution. Agent orchestration with isolated context windows.

- **Tweet:** https://x.com/parcadei/status/2005755875701776624
- **Parent:** https://x.com/yuzu_4ever/status/2005520908656500964
- **Link:** https://github.com/parcadei/Continuous-Claude-v2
- **Filed:** [Continuous Claude v2](./knowledge/tools/Continuous-Claude-v2-上下文管理.md)
- **What:** A Python framework for maintaining session continuity and efficient context management in Claude Code workflows, including ledger-based state persistence, MCP execution isolation, and agent orchestration patterns for multi-agent systems.

---

## @0xUrvish - uselayouts: Animated React Components Library

> *Replying to @0xUrvish:* Hi developers
I just launched my animated UI components library
>
> 100% open source and free to use
it's live now do check it out and would appreciate your feedback https://t.co/DOUxe8w4oy
>
> Try it out: https://t.co/73RgRfaHwk

- **Tweet:** https://x.com/0xUrvish/status/2006608646730559629
- **Parent:** https://x.com/0xUrvish/status/2006600544220230083
- **Link:** https://uselayouts.com/
- **Filed:** [uselayouts](./knowledge/tools/uselayouts-动画React组件.md)
- **What:** Open-source library of premium animated React components built with Framer Motion and Tailwind CSS. Includes modern micro-interactions and ready-to-use motion components.

---

## @Suupercharged - Static Navbars Can Be Cool Too

> Static navbars can be cool too 👀 https://t.co/CkRIvlXUrr

- **Tweet:** https://x.com/Suupercharged/status/2006787096955203911
- **Media:** Video demonstration
- **What:** Short video showcasing static navbar design approaches. Flagged for transcript capture.

---

## @bentossell - Article Share

> https://t.co/Ref8GgkIR5

- **Tweet:** https://x.com/bentossell/status/2006352820140749073
- **Link:** https://x.com/i/article/2006346812785868800
- **What:** Shared article link (content not yet extracted). Bookmark captures the reference for later review.

---

## @GithubProjects - Stop Guessing Why a Process is Running

> Stop guessing why a process is running on your system. https://t.co/F4edRFxOuH

- **Tweet:** https://x.com/GithubProjects/status/2006747292510925092
- **Media:** Image with tool/tip
- **What:** Shared resource or tool for process investigation and system debugging. Flagged for media capture.

---

## @adamkillam - Content Operating System Vision

> *Replying to @alexhillman:* Feed them to the content operating system I'm building, sort them, save them, and from there create all manner of content from the insights in each post. Ideally automatically.
>
> Also want to track trends, have ideas automatically researched and saved.
>
> The list goes on.

- **Tweet:** https://x.com/adamkillam/status/2006894238446002261
- **Parent:** https://x.com/alexhillman/status/2006881998456164772
- **What:** Adam shares his vision for a content operating system that aggregates, sorts, and automatically generates content insights from bookmarked posts while tracking trends.

---

## @jarrodwatts - Claude HUD Plugin

> Started working on "Claude HUD"
>
> A Claude Code plugin that visualizes:
> · context remaining in the session
> · what tools are executing
> · which subagents are running
> · claude's to-do list progress
>
> If there's enough interest, I'll polish it up and open-source it!

- **Tweet:** https://x.com/jarrodwatts/status/2007035752665034994
- **What:** A Claude Code plugin that provides real-time visualization of session context, tool execution, subagent activity, and task progress. Currently a work-in-progress with plans to open-source if there's community interest.

---

## @OsaurusAI - Osaurus: macOS LLM Server with AI Agent Capabilities

> Powered by Osaurus MCP tools.
> Claude sees your screen, clicks, types, navigates — you supervise.
> This is what AI agents look like on Mac.

- **Tweet:** https://x.com/OsaurusAI/status/2007091913393070168
- **Link:** https://github.com/dinoki-ai/osaurus
- **Filed:** [Osaurus-macOS-LLM服务器.md](./knowledge/tools/Osaurus-macOS-LLM服务器.md)
- **What:** A native macOS LLM server with MCP support that enables AI agents like Claude to interact with the screen, navigate applications, and perform tasks while you supervise. Supports local and cloud models with OpenAI and Anthropic compatible APIs.

---

## @emmagine79 - Smaug Project Response

> *Replying to @alexhillman:* its late so i'll probably regret posting this but...
>
> enter the dragon 🔥🐲
>
> say hi to Smaug, the helpful hoarding dragon that roams your Twitter bookmarks and helps you organize them into your personal knowledge system of choice.
>
> ayyyy thanks for this fam! i was able to use Claude opus + anti gravity to put this together in like 2 hours

- **Tweet:** https://x.com/emmagine79/status/2007051496496714038
- **Parent:** https://x.com/alexhillman/status/2006968571268661423
- **What:** Community response to the Smaug project announcement, sharing success in using Claude Opus and related tools to build something in just 2 hours. Demonstrates practical application of Smaug for organizing bookmarks into a personal knowledge system.

---

## @donvito - GLM 4.7 Coding Model Assessment

> wow GLM 4.7 is great
>
> tried it in claude code

- **Tweet:** https://x.com/donvito/status/2006738817773171175
- **Link:** https://z.ai/subscribe?cc=fission_glmcode_sub_v1
- **Filed:** [glm-4-7-coding-plan.md](./knowledge/articles/glm-4-7-coding-plan.md)
- **What:** Positive endorsement of GLM 4.7 model when used in Claude Code environment. The linked plan offers affordable access ($3/month) to GLM models for coding tasks and agent-based development.

---

## @donvito - GLM 4.7 Pricing Enthusiasm

> omg GLM 4.7 is a beast!!!
>
> $3/mo is a steal

- **Tweet:** https://x.com/donvito/status/2006743894147711370
- **What:** Follow-up endorsement emphasizing the value proposition of GLM 4.7 at $3/month subscription rate. Reflects developer sentiment about the model's capabilities relative to pricing.

---

# Tuesday, December 30, 2025

## @koylanai - Digital Brain skill for Claude Code
> Agent Skills for Context Engineering - digital brain implementation

- **Tweet:** https://x.com/koylanai/status/2005857134311854480
- **Link:** https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering
- **What:** GitHub repository containing a digital brain skill implementation for Claude Code, enabling advanced context engineering and knowledge management capabilities.

---

# Monday, December 29, 2025

## @aakashgupta - Smartphone addiction and dopamine regulation
> Discussion about how smartphone addiction affects dopamine levels and causes brain fog

- **Tweet:** https://x.com/aakashgupta/status/2005552148218851769
- **What:** Explores the connection between smartphone dependency and dopamine dysregulation as a root cause of cognitive impairment and brain fog.

---

## @pk_iv - Browserbase cloud browser plugin for Claude Code
> Cloud browser plugin enabling Claude Code to interact with web applications

- **Tweet:** https://x.com/pk_iv/status/2005694099123478579
- **What:** Browserbase cloud-based browser solution that extends Claude Code's capabilities for web automation and interaction.

---

## @CasJam - Claude Code for video post-production
> Building a custom Claude Code app that handles ~80% of post-production in a single command

- **Tweet:** https://x.com/CasJam/status/2005765644394844261
- **What:** Demonstrates practical applications of Claude Code for automating video post-production: transcription, analysis, clip cutting, and script writing.

---

## @steipete - Shipping at Inference Speed
> Confession: I ship code I never read. Here's my 2025 workflow.

- **Tweet:** https://x.com/steipete/status/2005451576971043097
- **Link:** https://steipete.me/posts/2025/shipping-at-inference-speed
- **What:** Blog post discussing shipping software at inference speed, embracing rapid AI-assisted development cycles.

---

## @michael_chomsky - ResponsiveDialog Component Pattern
> I do this for every project (quote of @jordienr about drawer on mobile, dialog on desktop)

- **Tweet:** https://x.com/michael_chomsky/status/2005454822083076172
- **What:** Endorsement of the responsive dialog component pattern that adapts between drawer and dialog based on viewport.

---

# Sunday, December 28, 2025

## @rudrank - Awesome Claude Code Plugins List
> I want to make the most out of Claude Code... One thing to explore more are plugins

- **Tweet:** https://x.com/rudrank/status/2005215898593034525
- **Link:** https://github.com/ccplugins/awesome-claude-code-plugins
- **What:** Comprehensive registry of Claude Code plugins: slash commands, subagents, MCP servers, and hooks across multiple specializations.

---

## @mattpocockuk - PRD with Passing Tests Approach
> Tired: PRD + Multi-phase plan. Wired: PRD with 'passing' status on each test case

- **Tweet:** https://x.com/mattpocockuk/status/2005232347374141888
- **What:** Development methodology that combines PRDs with test-driven specification, each feature is one context window large.

---

## @0xSero - Docker MCP Toolkit for Token Savings
> This is how you should use MCPs if you can. Instead of loading all MCPs, load 1 which discovers the rest.

- **Tweet:** https://x.com/0xSero/status/2005355435570958553
- **Link:** https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/
- **What:** Docker MCP toolkit for dynamic MCP discovery, saving 20k tokens by loading one MCP that discovers others.

---

# Saturday, December 27, 2025

## @aakashgupta - Karpathy "dramatically behind" commentary
> Andrej Karpathy literally built the neural networks running inside coding assistants... If he feels "dramatically behind" as a programmer, that tells you everything.

- **Tweet:** https://x.com/aakashgupta/status/2004713516930855284
- **What:** Commentary on Karpathy's confession about feeling behind, noting the new stack of agents, subagents, prompts, contexts, memory, modes, etc.

---

## @adocomplete - Claude Code sandboxing docs link
> Learn more about Claude Code Sandboxing

- **Tweet:** https://x.com/adocomplete/status/2004977725136888287
- **Link:** https://code.claude.com/docs/en/sandboxing
- **What:** Link to Claude Code sandboxing documentation covering security and isolation features.

---

## @bcherny - Reply with screenshot/image
> Visual content reply

- **Tweet:** https://x.com/bcherny/status/2004947522889162834
- **What:** Visual reference or example shared in reply format.

---

# Friday, December 26, 2025

## @tom_doerr - StenoAI local meeting transcription
> Transcribes and summarizes meetings locally using small language models

- **Tweet:** https://x.com/tom_doerr/status/2004452266640634056
- **Link:** https://github.com/ruzin/stenoai
- **What:** Privacy-focused AI meeting transcription and summarization using locally hosted small language models.

---

## @trq212 - Claude Code prompt template for non-technical users
> Full template for asking Claude Code to onboard a non-technical user

- **Tweet:** https://x.com/trq212/status/2004575721235141115
- **What:** Comprehensive prompt template to help non-technical users interact with Claude Code effectively.

---

## @tom_doerr - AppScreen 3D screenshot mockups
> Generates screenshots with 3D device mockups

- **Tweet:** https://x.com/tom_doerr/status/2004616272844087678
- **Link:** https://github.com/YUZU-Hub/appscreen
- **What:** Tool to create beautiful 3D device mockups and screenshot presentations for iOS App Store.

---

## @tom_doerr - Unwatched RSS YouTube player
> RSS YouTube player for Apple devices with chapter skipping and no ads

- **Tweet:** https://x.com/tom_doerr/status/2004627732148232504
- **Link:** https://github.com/fer0n/Unwatched
- **What:** RSS feed based YouTube video player for iOS, macOS, tvOS with chapter support and no ads.

---

## @cameronpetitti - Crosspost app launch
> Years of work is finally ready. Introducing Crosspost.

- **Tweet:** https://x.com/cameronpetitti/status/2004631941782667685
- **Link:** https://www.crosspost.app/
- **What:** Application for managing and crossposting content across multiple social media platforms.

---

## @calebporzio - Chrome game changer addition
> woah...game changer addition to chrome

- **Tweet:** https://x.com/calebporzio/status/2004651797533917261
- **What:** Media post highlighting a significant Chrome feature or addition.

---

## @seconds_0 - Claude Code onboarding prompt for non-technical users
> Here's my "ask claude code to onboard a nontechnical user" prompt

- **Tweet:** https://x.com/seconds_0/status/2004684813773799543
- **Link:** https://code.claude.com/docs/
- **What:** Comprehensive interview-based onboarding prompt for non-technical users with communication rules and quality standards.

---

## @ryanvogel - Video post
> Video demonstration

- **Tweet:** https://x.com/ryanvogel/status/2004729931943870612
- **What:** Video content post.

---

# Thursday, December 25, 2025

## @hdjirdeh - streamdown vs react-markdown
> Moved away from react-markdown to streamdown and although its not perfect, its so much better.

- **Tweet:** https://x.com/hdjirdeh/status/2004020171808428520
- **What:** Comparison between streamdown and react-markdown for rendering markdown in React with improved formatting and interactive code blocks.

---

## @PovilasKorop - AI Adoption Quote
> How to adopt AI in your company (or personally). Main point: There is no AI course you can "finish."

- **Tweet:** https://x.com/PovilasKorop/status/2004099293389463793
- **What:** Quote highlighting key insight from Steve Ike's AI adoption playbook thread about constant experimentation.

---

## @tom_doerr - BreakFree iOS Sideloading Tool
> Sideloads apps on iOS using DNS and certificates

- **Tweet:** https://x.com/tom_doerr/status/2004208111532335470
- **Link:** https://github.com/FrizzleM/BreakFree
- **What:** Free iOS shortcut for sideloading unlimited apps using DNS and public certificates exploit.

---

# Tuesday, December 23, 2025

## @steve_ike_ - AI Adoption Playbook
> This might be the cleanest AI adoption playbook inside a real product org I've seen.

- **Tweet:** https://x.com/steve_ike_/status/2003497265495785523
- **What:** 15-point comprehensive playbook covering practical approaches to implementing AI across organizations, from "How I AI" podcast.

---

# Sunday, November 23, 2025

## @wquguru - VoyraCloud VPS and Crypto Trading Tools
> 为什么选择VoyraCloud
>
> 这套玩法有三个前提：够便宜、有住宅IP、不限流量
>
> 我目前用的VoyraCloud住宅IP VPS：
>
> 4核8G120GB高配套餐，月费仅$15，自带美国/德国/英国住宅IP，风险评分0
> 200Mbps带宽，4TB月流量
> 对比AWS Lightsail同配置，性价比高43%
>
> 相关开源项目推荐：NoF1量化框架、Freqtrade交易机器人、Backtrader回测系统、Hummingbot做市机器人、MuseBot多平台框架、Claude Code中转服务

- **Tweet:** https://x.com/wquguru/status/1992498795444396267
- **Links:** [VoyraCloud](https://www.voyracloud.com), [nofx](https://github.com/NoFxAiOS/nofx), [freqtrade](https://github.com/freqtrade/freqtrade), [backtrader](https://github.com/mementum/backtrader), [hummingbot](https://github.com/hummingbot/hummingbot), [MuseBot](https://github.com/yincongcyincong/MuseBot), [claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service)
- **What:** Chinese tweet recommending VoyraCloud residential IP VPS for crypto trading setups, along with a comprehensive list of open-source trading tools: NoF1 (AI trading assistant, 11k+ stars), Freqtrade (crypto trading bot, 48k+ stars), Backtrader (Python backtesting), Hummingbot (market making), and others.

---

# Saturday, November 22, 2025

## @alexhillman - Always Do (11 Imperatives)
> Always Keep Humans at the Center - use AI to remove drudgery and free up time for real, authentic relationships

- **Tweet:** https://x.com/alexhillman/status/1992252350812270856
- **What:** Personal reflection on core imperatives with emphasis on keeping humans central to all technology decisions.


---

---
日期: Wednesday, April 15, 2026
## @Bitturing - awesome-ceo 创业资源库
> 创业路上，最难的不是执行，
> 而是系统学习融资、管理、产品这些核心能力。
> 网上信息太碎，很难拼成完整框架。
>
> 我在 GitHub 挖到一个宝藏资源库：awesome-ceo
> 🔗 https://t.co/mLGPAZXOCL
>
> 覆盖 8 大模块：
> 融资 / 产品 / 销售 / 营销 / 管理 / 招聘 / 财务 / 创业
> 内容来自 YC、a16z、Sequoia 及一线创业者。

- **推文**: https://x.com/Bitturing/status/2044328380326379618
- **链接**: https://github.com/kuchin/awesome-ceo
- **归档**: [awesome-ceo-创业资源库.md](./knowledge/tools/awesome-ceo-创业资源库.md)
- **概述**: 覆盖8大模块的创业者必备资源库，内容来自YC、a16z、Sequoia及一线创业者，帮助系统学习融资、管理、产品等核心能力。
---
日期: Wednesday, April 15, 2026
## @stark_nico99 - YouMind AI信息源技能
> 这个Skill让你知道全球最顶尖的那帮人是怎么用AI的
>
> 大家有没有发现，
> 出来逛X，却仍然好像在信息茧房里
> 那些大V的消息怎么那么灵通
> 平时海量信息很多
> 但真正有价值的却很难挖掘
> 我意识到，真正有价值的信息
> =在做事的人+可复用的方法论
>
> 于是我把上次的45个AI信源
> 加上 @zarazhangrui 分享的25个Builder总结成了65个顶级AI信息源
> 并且让 YouMind 去抓取这65个信源里真正可复用的方法论
>
> 跑出来的效果非常好
> 第一条已经震惊到我
> 比如说 @milesdeutscher 分享的50个Claude Code不为人知的使用方法
> 这么干货宝藏的内容
> 如果没有这个Skill
> 我绝对不可能刷到的
>
> 这个Skill真的完全打开了我的视野
> 也把它分享给大家
> 无论你是用来学习
> 还是用来Quote涨粉
> 都是神器
> https://t.co/SmzR3w09pg
>
> *引用 @stark_nico99:* 把全球AI最有影响力的机构和个人整理了一个list，做成了Skill，每天发简报给我，有点像开了天眼的感觉比如说OpenClaw竟然提供了免费模型！清单和Skill我放在评论区了

- **推文**: https://x.com/stark_nico99/status/2044377116771553758
- **链接**: https://youmind.com/skills/MzVGQ4AVyaLtxX
- **归档**: [YouMind-AI信息源技能.md](./knowledge/articles/YouMind-AI信息源技能.md)
- **概述**: 整合65个顶级AI信息源的Skill工具，帮助用户突破信息茧房，获取真正有价值的信息和方法论。
---
日期: Wednesday, April 15, 2026
## @antoniayly - Minara 21个盈利交易策略
> 我们花了 300+ 小时，跑了 200+ tradingview上的开源策略，最终 APY > 10% 的只有 21 个。这还是我们跑了无数次、对齐了诸多因子的份上。
>
> 交易从来都是登天门。所有成功故事，周期、时机、标的、策略、风控、性格……缺一不可。
>
> 这些门槛，是否真的能靠代码和AI降低？Minara 的答案是，至少我们已经在这条路上走了很远。
>
> 所有 21 个赚钱策略附在文中了 👇 感兴趣的朋友可以点开看看。
> 所有我们测过的策略、训练的数据，也会成为 Minara AI 宝贵的决策依据，服务更多手无寸铁的人🔮
>
> *引用 @minara:* https://t.co/HvQayy26Br

- **推文**: https://x.com/antoniayly/status/2044438502985924749
- **链接**: https://x.com/i/article/2044317580102602752
- **归档**: [Minara-21个盈利交易策略.md](./knowledge/articles/Minara-21个盈利交易策略.md)
- **概述**: Minara团队测试236个TradingView开源策略，在真实费用条件下逐笔回测，最终找到21个年化收益超过10%的策略。
---
日期: Wednesday, April 15, 2026
## @SolhawkGo - 倒买倒卖赚钱捷径
> 事实证明，倒买倒卖是最快的赚钱捷径了
> 1️⃣国内的很多宠物博主会研究 The Spruce Pets 的内容，将养宠小贴士改为本地养宠环境下的指南。
> 2️⃣国内的很多文具品牌是从 JetPens 上找到灵感，推出功能相似但更具本地化设计的产品。

- **推文**: https://x.com/SolhawkGo/status/2044468706844246197
- **概述**: 分享倒买倒卖的赚钱思路：研究国外优质内容进行本地化改造，如宠物博主借鉴The Spruce Pets、文具品牌参考JetPens。
---
日期: Thursday, April 16, 2026
## @nash_su - pi-autoresearch AI自研究框架
> Shopify 用 pi-autoresearch 实现了如下优化：
>
> 单元测试: 快300倍！
> React 组建加载: 快20%
> CI 构建时间: 减少65%
>
> karpathy 的 autoresearch 还在持续演化，确实是个非常适合 AI 自研究框架。
>
> *引用 @ShopifyEng:* Since we open-sourced pi-autoresearch, @Shopify teams have been running it on everything.
>
> Results so far:
> Unit tests: 300x faster
> React component mounting: 20% faster
> CI build time: 65% reduction
> Made pnpm run faster
>
> Autoresearch never stops trying things you'd never have time to try.

- **推文**: https://x.com/nash_su/status/2044616683671929268
- **链接**: https://github.com/davebcn87/pi-autoresearch
- **归档**: [pi-autoresearch-AI自研究框架.md](./knowledge/tools/pi-autoresearch-AI自研究框架.md)
- **概述**: Karpathy autoresearch演化版，Shopify已实现单元测试快300倍、CI构建减少65%等显著优化效果。

---
日期: Thursday, April 16, 2026

## @MinaraCN - 我们回测了236个TradingView策略后，找到了21个"印钞机"
> https://t.co/HVtBMiZ1rG

- **推文**: https://x.com/MinaraCN/status/2044620258506625334
- **链接**: https://x.com/i/article/2029120071977844738（X文章）
- **标签**: [[TradingView]] [[量化交易]] [[回测]]
- **概述**: 对236个公开TradingView策略进行逐笔交易回测，63个通过复制验证，36个盈利，21个年化收益超过10%。

---
日期: Thursday, April 16, 2026

## @dotey - 模型不是笨，是 Harness 没配好
> 推荐阅读若石写的这篇博客：模型不是笨，是 Harness 没配好
>
> AI 智能体跑十步就崩，很多人第一反应是模型太蠢，但这篇文章却给出另一个视角：不是马不行，是缰绳没拴好。
>
> 文章提出的 Harness Engineering，你可以理解成给 AI 模型戴上安全带、装上安全气囊的工程实践。
>
> 过去两年，我们经历了两个阶段：Prompt Engineering（怎么问）、Context Engineering（喂什么料），但它们对付不了模型多步自主执行时的各种意外。
>
> 文章中有一个生动的例子：让一个智能体写市场分析报告，前三步相当顺利，但到第七步突然开始胡编乱造，因为搜索返回的内容超出上下文窗口被默默截掉了；第十步输出一段残破的 JSON，整条链路就此夭折，只能重头再来。
>
> 要解决这种问题，Harness Engineering 给出四个简单又实用的原则：
>
> 1. 能用代码约束的事儿，别指望模型自觉。
> 比如 JSON 格式，别在提示词里苦口婆心求模型输出合法内容，直接上 Schema 验证器，非法输出直接回炉。
>
> 2. 关键状态必须外置，不让模型在脑子里憋着。
> 就像你写代码不会只存在内存里一样，模型跑到哪一步、哪些任务完成了、哪些没做，都记到一个外部的 state.json 文件里，这样即使中途崩了，重新启动后还能接着来。
>
> 3. 模型输出不能自卖自夸，必须找第三方验收。
> 永远不要让模型给自己的作业评分，因为它总觉得自己很棒。需要一个独立的 Evaluator 模型，它不看原始思考过程，只对结果验收。最好还真能执行一下（跑跑编译器、打开页面看UI），而不是靠想象力评价。
>
> 4. 失败要限制在局部，不能一人出错全家连坐。
> 工具调用失败了，就让这一步重试，别搞得整个流程跟着陪葬。

> **引用自 @若石**: "Agents don't fail because models are weak. They fail because systems are undefined."

- **推文**: https://x.com/dotey/status/2044660793153655205
- **链接**: https://blog.ltbase.dev/posts/agents/harness-engineering（article）
- **标签**: [[AI Agent]] [[Harness Engineering]] [[工程实践]]
- **概述**: 若石提出的 Harness Engineering 四原则：代码约束替代模型自觉、状态外置实现断点续跑、独立Evaluator验收、失败局部隔离。解决Agent多步执行崩溃的根本问题。

---
日期: Thursday, April 16, 2026

## @GitHubDaily - Anything Analyzer：AI抓包分析工具
> 做逆向分析或者抓包调试时，经常要在上千条网络请求里查找关键接口，费时费力。
>
> 偶然看到 Anything Analyzer 这个开源工具，它把抓包和 AI 深度分析直接整合在一起。
>
> GitHub：https://t.co/fFKHT05j2y
>
> 工具内嵌浏览器，无论桌面应用、终端命令、Python 脚本、手机 App 的流量都能捕获。
>
> 然后经过 AI 分析，先自动过滤掉无关请求，再对关键请求做深度分析，最后输出详细报告。
>
> 提供开箱即用安装包，支持 Windows、macOS 和 Linux 系统。

- **推文**: https://x.com/GitHub_Daily/status/2044679720990916924
- **链接**: https://github.com/Mouseww/anything-analyzer（GitHub, 1014 stars, TypeScript）
- **标签**: [[抓包]] [[逆向分析]] [[AI分析]]
- **概述**: 整合浏览器抓包与AI分析的工具，自动过滤无关请求，深度分析关键协议，生成分析报告。支持多平台流量捕获。

---
日期: Thursday, April 16, 2026

## @Geek Lite - GHFS：GitHub虚拟文件系统
> 把 GitHub 仓库直接挂到 Mac 上当本地文件夹用，点开就能看文件内容。
>
> https://t.co/RIo0fAF9ot
>
> GHFS 是个 macOS 小工具，用 Apple 自家的 FSKit 把 GitHub 上的仓库变成你电脑里的只读文件夹。不需要装 macFUSE、git 这些外部工具，点开文件就读内容，后台慢慢克隆，克隆完自动替换。能自动列出你账号下的仓库，也能搜公开仓库挂进来

- **推文**: https://x.com/QingQ77/status/2044712654087045505
- **链接**: https://github.com/indragiek/GHFS（GitHub, 250 stars, Swift）
- **标签**: [[macOS]] [[GitHub]] [[虚拟文件系统]]
- **概述**: 用Apple FSKit将GitHub仓库挂载为macOS只读文件夹，无需macFUSE/git，后台异步克隆，支持浏览账号仓库和公开仓库。

---
日期: Thursday, April 16, 2026

## @GitTrend - Karpathy系进化体：从教育玩具到生产级神器
> Karpathy 一丢代码，全网程序员集体进化了！
>
> 大神又整活了：扔出极简 repo/gist，社区直接把它当底层骨架，卷出一堆生产级神器。不是简单的 fork，是真正的底层进化、从教育玩具变成能自动研究、自动建知识库、4 小时训 ChatGPT 的狠活。
>
> 我挑了 4 个正在 X 上刷屏的"Karpathy 系进化体"，程序员看了会沉默，AI 玩家看了会狂喜：
>
> 1️⃣ autoresearch（https://t.co/wEQIdprebK）
> 630 行代码，让 AI agent 自己改代码、训模型、打分、留优。人类睡觉，它进化。
>
> 2️⃣ llmwiki 系列（https://t.co/MxQDxRuHnU 等）
> 基于 Karpathy 的 LLM Wiki gist 进化：LLM 不再是搜索引擎，而是 Obsidian 里的"程序员"，自动总结、交叉引用、滚雪球式维护知识库。
>
> 3️⃣ nanochat（https://t.co/muQGPpOC0K）
> 大神最新"unhinged"作品：nanoGPT 的全栈进化版，单 GPU 4 小时 $100 出一个能聊、能写诗、能解题的 ChatGPT 克隆。
>
> 4️⃣ micrograd / nanoGPT 衍生playground（silicon-more、napagrad 等）
> 从 Zero to Hero 课程底层进化而来，计算图 + 训练循环被玩出花，成了无数人的 AI 启蒙+benchmark 底座。

- **推文**: https://x.com/GitTrend0x/status/2044723466050683012
- **链接**: 
  - https://github.com/karpathy/autoresearch（GitHub, 73358 stars, Python）
  - https://github.com/lucasastorian/llmwiki（GitHub, 459 stars, TypeScript）
  - https://github.com/karpathy/nanochat（GitHub, 51985 stars, Python）
- **标签**: [[Karpathy]] [[AI训练]] [[知识库]] [[自进化]]
- **概述**: Karpathy开源项目的社区进化体：autoresearch自进化训练、llmwiki知识库自动化、nanochat低成本ChatGPT克隆、micrograd/nanoGPT衍生工具。

---

# Thursday, April 16, 2026

## @0xAllen - 0xAllen
> 无脑交易开始！

Taco 的模型终于放出来了，目前可以直接拿来用的几个策略回测数据最高到了64.8%，保守一点的也有16.31%。

放了100U试一下效果，如果跑的稳这又是一个撸零花钱的路子了。最关键里面还支持Grvt、StandX的接口，也就是说如果盈利策略可行，就可以把交易量直接迁移过去顺便撸积分。

还有一个是4月14号开始28号结束的AI 交易竞赛，这是和 Apex 搞的，奖励最高有2...

- **推文**: https://x.com/0xAllen/status/2044691377590792250
- **链接**: [app.taco.trade](https://app.taco.trade/?ref=TACOAI)

## @TGweb3333 - TGweb3
> 我自己搞了个足球预测机器人，测下来比博彩公司还准。

信息来源有三个：自己跑的模型、Bet365的赔率、还有Polymarket。关键是这三个一旦出现分歧，就意味着有搞头。

我拿了英超、西甲、德甲五个赛季的数据，一共7600多场比赛，每场的进球、射门、控球、角球、黄牌、赔率全都录进去了。

ELO评分用的是FIFA那套算法，考虑了对手强弱、净胜球和主场优势。不只看谁赢谁输，还会琢磨赢球背后的门道...

- **推文**: https://x.com/TGweb3333/status/2044715398042624133

---

# Friday, April 17, 2026

## @AYi_AInotes - 阿绎 AYi
> **引用 @garrytan**: Karpathy's Confusion Protocol is now in GStack

Karpathy called it: the #1 AI coding failure mode is the agent confidently picking the wrong path at a...

> 程序员兄弟们，终于有人把AI编码最致命的那个毛病给治好了，

GStack这次的困惑协议更新直接封神，而且感觉这次更新才是AI编码Agent真正该走的路。

Karpathy早就点破了AI编码的第一失败模式，关键不在代码写得有多烂，主要是在不确定的时候，永远自信地选一条错路，然后花十分钟把所有东西都推倒重来。

大部分人都经历过这种绝望，就是你去倒杯水的功夫，它已经把整个数据库schema改了，还...

- **推文**: https://x.com/AYi_AInotes/status/2045075148131193160

## @vikingmute - Viking
> Vercel 又出了一个很棒的东西：wterm
https://t.co/cFjivCIacN
基于 Web 的终端模拟器
特点是直接渲染到 DOM，不是 Canvas，所以支持原生支持文本选择、复制粘贴、浏览器查找和无障碍。

核心用 Zig 语言编写，编译为 WebAssembly，体积仅约 12 KB，性能接近原生。还有很多很棒的特性。

适合在浏览器里直接运行终端命令，官网演示可以看下，挺...

- **推文**: https://x.com/vikingmute/status/2045101436204351901
- **链接**: [wterm.dev](https://wterm.dev/)


---

# Tuesday, April 21, 2026

## @nash_su - 12天，2k Star !!!🎉

> 12天，2k Star !!!🎉

llm_wiki 是基于 @karpathy 大神的个人知识管理方法论做的全平台落地实现，看来大家对个人知识库很感兴趣，感谢大家支持！

同时预告一个重磅产品马上会发布，也是跟个人知识管理相关的，后期会跟 llm_wiki 和 autocli 全面打通，大家可以关注下。

另外 llm_wiki v0.3.6 也同步更新了，修复了一些bug，现在的版本已经很稳定了。

https://t.co/Xkd9oTNcIj

- **推文**: https://x.com/nash_su/status/2046393001140986216
- **链接**: [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)
- **描述**: LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。
- **Stars**: ⭐ 2,354

## @AlchainHust - Claude Design能提供惊艳的设计，但...我认为必须通过GUI操作的已经是上一个时代的产品了。

> Claude Design能提供惊艳的设计，但...我认为必须通过GUI操作的已经是上一个时代的产品了。

所以我为你逆向了Claude Design的核心能力，并正式推出：Huashu-Design 一个真正为Agent而生的设计产品

现已免费开源：https://t.co/rMvLbPR98v https://t.co/jwb3FBgqUb

- **推文**: https://x.com/AlchainHust/status/2046431318507147670
- **链接**: [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design)
- **描述**: Huashu Design · HTML-native design skill for Claude Code · Claude Code 里 HTML 原生的设计 skill · 高保真原型 / 幻灯片 / 动画 + 20 设计哲学 + 5 维评审 + MP4 导出 · Agent-agnostic
- **Stars**: ⭐ 2,810
- **链接**: https://twitter.com/AlchainHust/status/2046431318507147670/video/1
- **链接**: https://twitter.com/AlchainHust/status/2046192558666342720/video/1

# Monday, April 20, 2026

## @VincentLogic - 我刷到个开源英语神器，直接原地“种草”：

> 我刷到个开源英语神器，直接原地“种草”：
Earthworm —— 用「连词成句 + 循序渐进」的方式学英语，不再死记硬背单词，而是不断重复形成肌肉记忆，同时塞满游戏奖励和积分排行榜，把枯燥的背单词直接玩成了刷分上榜的爽感！

✅开源免费  
✅支持自托管 + 本地运行（隐私安全拉满）  
✅真正让英语学习又有趣又高效

想高效提分、想摆脱死记硬背、想本地跑个专属英语学习站的同学，赶紧冲！

项目地址：https://t.co/P470oAWSWH

点个 Star 就是对开源作者最大的支持！
转发给正在痛苦背单词的朋友，他们会感谢你的😂

#英语学习 #开源项目 #背单词 #自托管 #Ear...

- **推文**: https://x.com/VincentLogic/status/2046064539473531274
- **链接**: [cuixueshe/earthworm](https://github.com/cuixueshe/earthworm)
- **描述**: Learning English through the method of constructing sentences with conjunctions
- **Stars**: ⭐ 10,807

## @QingQ77 - 给 Markdown 加上图表、数据和排版支持，让文档、仪表盘和幻灯片都能用纯文本写出来，直接出 HTML 或 P...

> 给 Markdown 加上图表、数据和排版支持，让文档、仪表盘和幻灯片都能用纯文本写出来，直接出 HTML 或 PDF。

https://t.co/pHzysDUYFt

MDV 在 Markdown 上只加了四样东西：YAML 元数据、围栏块写图表、::: 容器做排版、自动生成目录。不用写 CSS 或表达式，样式全靠主题和预设。数据可以内联 CSV/JSON，也可以引用外部文件，渲染出来的 HTML 自带 SVG，不跑 JS。附带 VS Code 预览插件，命令行支持渲染和导出 PDF。

- **推文**: https://x.com/QingQ77/status/2046350700393714041
- **链接**: [drasimwagan/mdv](https://github.com/drasimwagan/mdv)
- **描述**: MDV — a Markdown superset for documents, dashboards, and slides with embedded data and visualizations. HTML + PDF export, live preview, VS Code extension.
- **Stars**: ⭐ 372
# Saturday, April 25, 2026

## @LQP2021
> ♻️Polymarket 官网入口：https://t.co/pzxsfjkWh2  👉如果想在Polymarket上使用跟单交易，我推荐这个：https://t.co/ZIFQQWSBwy  🗣️想玩或正在玩PolyMarket的一起来交流：https://t.co/CghejGuJKu
- **推文**: https://x.com/LQP2021/status/2047877262062784592
- **链接**: [文章](https://polymarket.com/zh?r=PM888)
- **链接**: [文章](https://t.me/PolyCop_BOT?start=ref_YINGGE888)
- **链接**: [文章](https://t.me/PM13168)

## @yaojingang
> 开源一个贝叶斯决策Skill  它不是简单帮你算一个贝叶斯公式，而是帮你把一个复杂决策，拆成一个可以持续更新判断的过程  这个Skill，一开始会先基于当前信息形成初始判断，然后AI通过引导用户多轮对话，不断补充变量、更新后验，并记录每一轮判断为什么变化  最后会输出一份Markdown+双语HTML决策报告，包含沟通过程、过程的判断变化和行动建议  适合产品、增长、商业、创业这类判断，也适合旅行、搬家、职业选择这类个人决策  本质上，它解决的是：当信息不完整、风险不确定时，怎么更理性地判断“这件事到底该不该做”，以及如何提升决策的质量   GitHub地址： https://t.co/qTD...
- **推文**: https://x.com/yaojingang/status/2047904344465674572
- **链接**: [yaojingang/yao-open-skills](https://github.com/yaojingang/yao-open-skills/tree/main/skills/yao-bayesian-skill)
- **Stars**: 177
- **描述**: OpenYao's public collection of reusable agent skills for real-world outcomes, with production-ready workflows, publishing governance, and evolving capability lines.

## @nash_su
> 16天 3.2K🌟感谢大家支持🎉  llm_wiki 是基于 karpathy 大神分享的个人知识库管理方法论构建的开源、跨平台落地应用，已经有非常多的用户在使用和反馈，也在不断优化改进，欢迎大家持续关注！  另外 v0.3.13 版本更新也发布啦，主要是修复了已知 bug 以及优化搜索和 AI 问答时的相关资料召回策略。  https://t.co/Xkd9oTNcIj
- **推文**: https://x.com/nash_su/status/2047930584861962438
- **链接**: [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)
- **Stars**: 3366
- **描述**: LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。

## @ku1zu0
> 我让 AI 通过 CDP 直接连浏览器，把抓到的请求复制成 curl 丢给它，它就能自动把 HTTP 请求还原成代码调用。  更狠的是，它能自己去浏览器里翻相关 JS，分析 authorization 的生成逻辑，然后封装成函数。  以前这种加密参数，基本都得靠逆向工程师一点点扒，现在 AI 已经能把这块活干得七七八八了。  以后像这样的“高级活”也会被 AI 替代掉😔
- **推文**: https://x.com/ku1zu0/status/2048002760621097357


---

# Friday, April 24, 2026

## @cellinlab
> 提示词来了！  --- 创建一个完整、自包含的交互式 Demo，并且只输出一个 HTML 代码块。  输出规则：  只返回一个带有 ```html 的代码块。  代码块前后不要添加任何解释。  所有 HTML、CSS 和 JavaScript 都必须放在这一个文件里。  不要使用 React、JSX、构建工具、npm、import、module、打包器或任何外部依赖。  最终结果必须可以直接复制到本地 .html 文件中，并在浏览器里打开运行。  如果通常需要某个库，请用原生 JavaScript、WebGL 或 Canvas 手动实现所需行为。  保持所有内容完全自包含。  请在单个 HTM...
- **推文**: https://x.com/cellinlab/status/2047570520904720397
- **链接**: [https://x.com/chetaslua/status/2047393912122486845/video/1](https://x.com/chetaslua/status/2047393912122486845/video/1)

## @0xcherry
> https://t.co/Ymk9bTIcuz
- **推文**: https://x.com/0xcherry/status/2047628924268818798
- **文章**: [Auto-Quant 使用教程｜让 Agent 自动构建量化策略](https://x.com/i/article/2047618216294502400)

## @huangyun_122
> 来！兄弟们，今天给大家分享个超棒的爬虫工具 -  Xcrawl  它的定位非常独特，充当 Claude Code 这种 AI Agent 的数据抓手！  我用它做了 5 个实例，各个都扛打： 1/ 5 分钟端走整站文案 2/ 宠物赛道挑切入口 3/ 网盘拉新自动嗅探资源 4/ OpenClaw 接入世界级搜索 5/ 豆瓣 Top 电影搜集  大家先走链接，注册拿 1000 积分开始：https://t.co/e2F4EemKwP  然后，我们一个个实战
- **推文**: https://x.com/huangyun_122/status/2047698786353578020
- **链接**: [文章](https://www.xcrawl.com/?keyword=ixifrqt8)

## @berryxia
> MIT一招，直接把AI巨头过去5年的百亿“上下文窗口军备竞赛”打成笑话！  所有大模型最头疼的“Context Rot”（上下文腐烂）终于被干掉了！  MIT CSAIL三位研究员刚放出的RLM（Recursive Language Models）直接把规则改了：  ✅ 超长文档不再塞进AI窗口，而是以外部Python变量存着  ✅ AI像顶尖程序员一样写代码：正则搜索、结构导航、精准切片  ✅ 需要哪块就只拉哪块，读完后递归生成子AI并行分析，再主AI合成答案  ✅ 无总结、无丢失、无性能衰减 实测结果炸裂：  •  最难的长上下文基准上，传统前沿模型接近0分  •  RLM直接双位数百分比...
- **推文**: https://x.com/berryxia/status/2047816489617813652
- **链接**: [文章](https://arxiv.org/abs/2512.24601)
- **链接**: [alexzhang13/rlm](https://github.com/alexzhang13/rlm)
- **Stars**: 3875
- **描述**: General plug-and-play inference library for Recursive Language Models (RLMs), supporting various sandboxes.


---

# Sunday, April 26, 2026

## @Huanusa
> 本来只是随便试试，结果用完 Obsidian Reader 之后…… 我就回不去普通 YouTube 了   它把视频的文字稿做成了可互动文档： 想看哪段直接鼠标一拖就跳转（擦洗）， 重点随手高亮，文字还能自动跟随视频滚动。    再也不用边听边疯狂拖进度条找内容了，体验直接降维打击。   长视频党、生产力党强烈推荐！
- **推文**: https://x.com/Huanusa/status/2048195370476294500
- **文章**: [人生重启指南：22个能力 + 18种思维升级人生的操作系统！](https://x.com/i/article/2029555859773067265)

## @LQP2021
> 一位在1922年离世的俄罗斯数学大师，绝不会想到，自己百年前留下的理论公式， 会在当下的Polymarket预测市场里，助力智能机器人短短30天狂揽468228美元收益。  这位传奇学者，正是安德烈·马尔可夫。  他一手创立的马尔可夫链，最初只是用来研究随机事件演变的数学工具， 如今却蜕变成为预测市场中杀伤力极强的硬核交易武器。  有个名为Bonereaper的智能交易账号，长期深耕BTC、ETH一小时短线窗口。  累计完成14671笔交易，每笔下单区间稳定在1500至2900份，节奏沉稳且规律。  这套机器人的进场逻辑极度精简，只有两项硬性条件，必须同时满足才会出手：  1. 概率差值 Δ ...
- **推文**: https://x.com/LQP2021/status/2048366613746131042

## @tuturetom
> 最近在尝试复刻 claude design，发现这玩意它基本上是 claude code for design，一个云端的 claude code 专门为 design 场景下设计，非常值得学习  功能基本复刻了 95%，包括设计系统、操作本地 code agent 做 design，project 项目管理给 agent 一套完整文件系统、下载等  大家有诉求需要开源吗？🙋‍♀️ https://t.co/b3C1teIozB
- **推文**: https://x.com/tuturetom/status/2048391395124072651

## @akokoi1
> 这几天测试了DeepSeek V4 的量化交易能力，策略和代码全部让DeepSeek自己写，刚开始几笔是盈利的，结果自动跑了一天一直在亏，再这么亏下去裤衩都会亏没。  和古法编程时代相比，现在写量化交易的工作流完全变了，我接的是 OKX 刚开源的 agent-trade-kit，一个 MCP server，把现货、合约、期权、网格、算法单全部提供给 AI。  以前写量化要自己读交易所文档、封装 REST/WS、处理签名鉴权、踩限频、双向对账，一半代码都在干这些东西。现在直接调用 MCP 工具拿 K 线、下单、设止损，我只需要描述策略逻辑。  说实话 V4 写代码本身是足够用的，逻辑顺、能看懂市...
- **推文**: https://x.com/akokoi1/status/2048541170398326849


---

# Monday, April 27, 2026

## @elliotchen100
> 这期硅谷 101 节目 @Valley101_Qian 介绍了 @evermind 的记忆系统，并非简单粗暴的增加检索调用，而是具备了完整生命周期的记忆系统架构。  这套记忆架构刚出来的时候就直接实现了 SOTA，93.05% 和 83%。  说句「遥遥领先」不过分，直到现在各家的记忆架构能被论文选中并邀请去参展的也是寥寥无几。  另外，视频介绍我们叫 EverMemOS，其实现在改名为 EverOS 了，功能分丰富，架构更厉害，而且好读好记。  小小彩蛋是，马上还会有更多有意思的更新。  https://t.co/9GDDLfDJYA
- **推文**: https://x.com/elliotchen100/status/2048565494211616973
- **视频**: [YouTube](https://www.youtube.com/watch?t=960&v=JGiguIv6m8s&feature=youtu.be)

## @liu10102525
> 这个Skill绝了！！！  韩国上万元一次的【个人色彩诊断与形象设计】，现在用这个Skill在家就可以免费拥有了！  只需要上传一张你的个人正面照即可，男生女生都能用！  skill链接：https://t.co/I1V1K5pSOv https://t.co/TgcGBSdM21
- **推文**: https://x.com/liu10102525/status/2048677874925023474
- **链接**: [文章](https://youmind.com/skills/TUWIOmFGciNrY8)


---

# Wednesday, April 29, 2026

## @yaojingang
> 我和张凯的GEO论文，在全球最大的论文平台https://t.co/kTVsezm2Cr完成审核并正式发布 这应该是全球第二篇与GEO有关的专项论文  论文基于今年3月份最新的数据，包括602条 Prompt、21143 条引用、23745条AI抓取记录，最终形成的一版正式的GEO专项研究报告，欢迎查阅  如果对大家能有帮助，我们打算后面继续抓取更多的数据，进行专项研究并开放研究成果  网页地址：https://t.co/LJbq9Cf0zX 论文PDF：https://t.co/hPwXKytFs0  源数据GitHub地址：https://t.co/PPatGGrWxE
- **推文**: https://x.com/yaojingang/status/2049298176935690588
- **链接**: [文章](https://arxiv.org/)
- **链接**: [文章](https://arxiv.org/abs/2604.25707)
- **链接**: [文章](https://arxiv.org/pdf/2604.25707)
- **链接**: [yaojingang/geo-citation-lab](https://github.com/yaojingang/geo-citation-lab)
- **Stars**: 176
- **描述**: A dataset and analysis pipeline for studying how AI search engines select and use citations.

## @elliotchen100
> https://t.co/AwgH8RwFk3
- **推文**: https://x.com/elliotchen100/status/2049299210668032393
- **文章**: [Claude Code 的 32 个使用技巧 - 入门，进阶，高阶](https://x.com/i/article/2049295471651454977)

## @IndieDevHailey
> 一个文档，让全球开发者集体沸腾！ Andrej Karpathy，OpenAI 创始成员，在 GitHub 扔出一份 CLAUDE.md  结果一周狂揽 44k star，总星直接飙到 98k star。  这是什么概念？ Stack Overflow 都没这么火过。  AI 编程助手为什么不听话？Karpathy 发现一个扎心的真相：  AI 不是不会干活，是太爱发挥了。  - 你让 AI 写个排序，它给你整一套策略模式 + 工厂模式 + 观察者模式。 - 你让 AI 改个 bug，它顺手重构了三个文件。 - 你让 AI 加个验证，它直接搭了一套框架。  这不是助手，是灾难。  所以 Kar...
- **推文**: https://x.com/IndieDevHailey/status/2049418243287482729


---

# Tuesday, April 28, 2026

## @enoch4306
> Andrej Karpathy 本可以将这个打包成一个 2000 美元的大师课程。  相反，他免费上传到了 YouTube。  三小时内容，涵盖现代 LLM 的实际工作原理： 分词、神经网络、RLHF、幻觉、工具使用、强化学习，以及像 AlphaGo 和 DeepSeek 这样的系统。   《Andrej Karpathy 大师》中字 https://t.co/rSh5m48jVA
- **推文**: https://x.com/enoch4306/status/2048983560842027229
- **链接**: [文章](https://pan.quark.cn/s/b019ffff1c5d)

## @wsl8297
> GitHub 上有个开源小工具：daily-arXiv-ai-enhanced，帮你把“追论文”这件事变成每天自动完成的日常。  它会每日抓取 arXiv 最新论文，并用 DeepSeek 等大模型生成中文摘要，让你用更少时间，快速跟上 AI 领域最新研究进展。  GitHub： https://t.co/W7ju3QJUER  官网： https://t.co/xPNouIMgPm  主要亮点：  - 每日自动更新：覆盖计算机视觉 / 图形学 / 自然语言处理三大方向 - 中文摘要自动生成：用 LLM 提炼要点，显著降低阅读成本 - 高度可定制：可自选论文类别、摘要语言与使用的 AI 模型 ...
- **推文**: https://x.com/wsl8297/status/2049005533223678042
- **链接**: [dw-dengwei/daily-arXiv-ai-enhanced](https://github.com/dw-dengwei/daily-arXiv-ai-enhanced)
- **Stars**: 2677
- **描述**: Automatically crawl arXiv papers daily and summarize them using AI. Illustrating them using GitHub Pages.
- **链接**: [文章](https://dw-dengwei.github.io/daily-arXiv-ai-enhanced/)

## @DtDt666
> 兄弟们！炸场硬核干货来了！  亲手打造特斯拉 Autopilot、OpenAI 联合创始人 Andrej Karpathy，这套大模型实操教程，  里面全是他本人日常工作生活里，用大模型的全套真实玩法：从靠模型做深度思考、搞硬核科研，到文件上传处理、Python 解释器实操、Claude Artifacts 高阶用法，全给你拆得明明白白，半点儿私货都没留。  没有半句空泛的理论，没有半点没用的跑分测评，全是能直接抄作业的落地干货。  整整 2 个小时，大神一步一步带着你，走完他自己日常用 LLM 的完整工作流。  而是这 2 个小时里的东西，会悄无声息地改变你整个职业生涯的工作逻辑和效率上限。...
- **推文**: https://x.com/DtDt666/status/2049028300761366989

## @nash_su
> RLM 递归大模型技术值得所有人关注  RLM（Recursive Language Models）就是让 LLM 具备"自我递归调用"的能力，一句话概括：RLM 让模型不再是一次性回答，而是能写代码 → 执行代码 → 在代码中再调自己 → 迭代推理 → 最终给出答案。  我用 llm_wiki 的一个知识库做了一个测试，在一个有 169 个文件，所有内容 50W 字的文件夹内，用 RLM 给我找出关于某个话题的相关信息，RLM 只进行了一次带有内容的 LLM 调用，输入 8.7k 输出 0.2k。其他步骤均是让 LLM 编写 python 或 bash 代码，调用量都很低。  这个的意义就在...
- **推文**: https://x.com/nash_su/status/2049032799441850764
- **链接**: [alexzhang13/rlm](https://github.com/alexzhang13/rlm)
- **Stars**: 4075
- **描述**: General plug-and-play inference library for Recursive Language Models (RLMs), supporting various sandboxes.

## @0xcherry
> 初步完成 OpenPalantir/OpenAlice 的新闻处理模块工程探索，大概是这样的  【最简单的部分】 最简单部分就是工作流了。这点很反直觉，但其实任何工作流的搭建都是简单的。 因为问题从来都不是能不能让 AI 处理新闻，而是怎么评估工作流的质量。 并且 AI 的工作流不是无状态的，如果引入去重等功能，每次运行工作流都会修改状态，就不能评估了。  【时光机】 所以要为这套系统引入时光机，允许系统将状态倒放到某个时刻。 OpenAlice 的前身 TraderAlice 就有类似的 sandbox 设计，因此我们需要重新构建这台系统。  【side bonus（额外收益）】 众所周知，...
- **推文**: https://x.com/0xcherry/status/2049043603587203384

## @baibanbaonet
> 个人认为这是本月最佳AI文章
- **推文**: https://x.com/baibanbaonet/status/2049200199252291939
- **文章**: [两天时间，我把巴菲特70年的股东信变成了知识图谱](https://x.com/i/article/2040689223817138176)


---

# Monday, April 27, 2026

## @realCaigu
> Obsidian 用户狂喜！ @kepano 亲自官宣！  Obsidian Reader 终于支持了推特文章和长线程阅读，只要在浏览器装好 Obsidian Web Clipper 扩展，直接就能开启极致简约的阅读模式  同时支持一件转存 Markdown! 推特的 API 和 url-to-markdown 运行出 bug, 排版乱七八糟的时代结束了！  而在后续最新的 1.13 版本，还将升级分享菜单功能，不用再转存到收藏夹，再把链接一个个贴给 CC 了  懂的都懂，赶紧试起来吧！  浏览器扩展下载地址： https://t.co/Vzg6pusUEh  一直没存过线程，好激动，你们之前...
- **推文**: https://x.com/realCaigu/status/2048632050266320981
- **链接**: [文章](https://obsidian.md/clipper)

## @oragnes
> 最近挖到一个专治 AI“瞎写代码”的硬核项目： mattpocock/skills  它本质上是 TS 大佬 Matt Pocock 直接开源了自己本地 .claude 目录里的 AI Agent 专属技能脚本。  核心思路就一个：拒绝无脑的“vibe coding”（瞎写瞎跑），逼着 AI 走正规军的工程化流程。  仓库里有 规划和设计 开发 工具 还有写作等各类专业Skill，大家如果觉得本地开发环境有问题，可以直接丢给AI优化下。  这个仓库从开源的到现在已经拿了25K的小星星，非常优质。  想要地址的评论区👇👇👇
- **推文**: https://x.com/oragnes/status/2048672917702246496

## @zodchiii
> https://t.co/YraRk7Qzs1
- **推文**: https://x.com/zodchiii/status/2048683276194185640
- **文章**: [The CLAUDE.md File That 10x'd My Output (Full File Included)](https://x.com/i/article/2048669343156781056)

## @WY_mask
> 这个数据确实值得参考啊  Minara团队用HyperLiquid真实费率测试了236个TradingView公开策略，63个通过了严格的复制验证，其中36个盈利，21个年化收益超过10%  https://t.co/4saq1Dn5RR https://t.co/gNemalFi7G
- **推文**: https://x.com/WY_mask/status/2048839849051090989
- **链接**: [文章](https://minara.ai/zh/app/trade/strategy-studio)
- **链接**: [https://twitter.com/WY_mask/status/2048839849051090989/photo/1](https://twitter.com/WY_mask/status/2048839849051090989/photo/1)
- **文章**: [我们回测了236个TradingView策略后，找到了21个"印钞机"](https://x.com/i/article/2029120071977844738)

## @berryxia
> 🚀 Claude Code 终于可以和浏览器并排实时控制了！ YC 大佬推出 GStack Browser + /open-gstack-browser skill，调试体验直接起飞！  1. 在 Claude Code 中输入 Install GStack 快速安装 2. 输入 /open-gstack-browser 即可打开浏览器窗口 3. 实现 Claude Code 和浏览器完全 side-by-side 操作 4. 完美解决 Agent 调试时“看不见浏览器在干什么”的痛点  Claude Code 重度用户和 AI Agent 开发者必装神器！  项目地址： https://t....
- **推文**: https://x.com/berryxia/status/2048911923983593818
- **链接**: [garrytan/gstack](https://github.com/garrytan/gstack)
- **Stars**: 86745
- **描述**: Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA
- **链接**: [https://twitter.com/garrytan/status/2048278995121094868/photo/1](https://twitter.com/garrytan/status/2048278995121094868/photo/1)


---

