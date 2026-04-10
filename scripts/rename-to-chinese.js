#!/usr/bin/env node
/**
 * 将英文文件名翻译为中文
 * 读取文件内容，生成简洁的中文文件名
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const TWEETS_DIR = path.join(ROOT_DIR, 'knowledge', 'tweets');
const BOOKMARKS_FILE = path.join(ROOT_DIR, 'bookmarks.md');

// 中文文件名映射（基于文件内容手动生成）
const chineseNameMap = {
  'AIAdoptionPlaybook.md': 'AI采用指南.md',
  'AIAdoptionQuote.md': 'AI采用引言.md',
  'AIalignmentandinterpretabilityresources.md': 'AI对齐与可解释性资源.md',
  'AIJobDisplacementRealityCheck.md': 'AI替代工作的现实检验.md',
  'AlwaysDo(11Imperatives).md': 'AlwaysDo十一条准则.md',
  'AppScreen3Dscreenshotmockups.md': 'AppScreen 3D截图样机.md',
  'ArticleShare.md': '文章分享.md',
  'AwesomeClaudeCodePluginsList.md': 'ClaudeCode插件精选列表.md',
  'BitcoinFaucetRevivalAfter16Years.md': '比特币水龙头16年后回归.md',
  'BreakFreeiOSSideloadingTool.md': 'BreakFree iOS侧载工具.md',
  'BrowserbasecloudbrowserpluginforClaudeCo.md': 'Browserbase云浏览器插件.md',
  'CCMirrorreleaseannouncement.md': 'CCMirror发布公告.md',
  'Chromegamechangeraddition.md': 'Chrome重大更新.md',
  'ClaudeChromeBrowserIntegration.md': 'Claude Chrome浏览器集成.md',
  'ClaudeCodeforvideopost-production.md': 'ClaudeCode视频后期制作.md',
  'ClaudeCodeonboardingpromptfornon-technic.md': 'ClaudeCode非技术用户入门提示.md',
  'ClaudeCodeprompttemplatefornon-technical.md': 'ClaudeCode非技术用户模板.md',
  'ClaudeCodesandboxingdocslink.md': 'ClaudeCode沙箱文档链接.md',
  'ClaudeCodeusecaseuncertainty.md': 'ClaudeCode使用场景困惑.md',
  'ClaudeHUDPluginConcept.md': 'Claude HUD插件概念.md',
  'ClaudeHUDPlugin.md': 'Claude HUD插件.md',
  'CLI-AnythingProjectDefense.md': 'CLI-Anything项目辩护.md',
  'ContentOperatingSystemVision.md': '内容操作系统愿景.md',
  'ContinuousClaudev2ContextManagement.md': 'ContinuousClaude v2上下文管理.md',
  'Crosspostapplaunch.md': 'Crosspost应用发布.md',
  'DigitalBrainskillforClaudeCode.md': 'ClaudeCode数字大脑技能.md',
  'DockerMCPToolkitforTokenSavings.md': 'Docker MCP工具包节省Token.md',
  'GeminiInteractiveDiagramLearningTool.md': 'Gemini交互式图表学习工具.md',
  'GeminiInteractiveImagesforLearning.md': 'Gemini交互式图像学习.md',
  'GistHostForkofGistPreview.md': 'GistHost预览工具分支.md',
  'GistHostImprovedGitHubGistHTMLPreview.md': 'GistHost改进的Gist预览.md',
  'GLM4.7BeastPerformance.md': 'GLM-4.7性能野兽.md',
  'GLM4.7CodingModelAssessment.md': 'GLM-4.7编程模型评估.md',
  'GLM4.7FirstImpressions.md': 'GLM-4.7初体验.md',
  'GLM4.7PricingEnthusiasm.md': 'GLM-4.7定价热议.md',
  'Gitsafetyhooksfordestructivecommandpreve.md': 'Git危险命令安全钩子.md',
  'HermesAgentvsOpenClaw对比分析.md': 'HermesAgent与OpenClaw对比.md',
  'IndieDeveloperEarningsReflection.md': '独立开发者收入反思.md',
  'Karpathydramaticallybehindcommentary.md': 'Karpathy自叹落后引热议.md',
  'KarpathyIdeaFile推广.md': 'Karpathy Idea File推广.md',
  'KarpathyLLMWiki中文解读.md': 'Karpathy LLM Wiki中文解读.md',
  'Lovableforvideosgainingtraction.md': 'Lovable视频功能获关注.md',
  'MarkwhenKeyboard-DrivenTimelineTool.md': 'Markwhen键盘驱动时间线工具.md',
  'MarkwhenKeyboard-FirstTimelineTool.md': 'Markwhen键盘优先时间线工具.md',
  'MintlifyChromaFsVirtualFilesystem.md': 'Mintlify虚拟文件系统ChromaFs.md',
  'nash_su-LLMWiki可视化客户端即将开源.md': 'LLMWiki可视化客户端即将开源.md',
  'OsaurusMacAIAgentDemo.md': 'Osaurus Mac AI智能体演示.md',
  'OsaurusmacOSLLMServerwithAIAgentCapabili.md': 'Osaurus macOS LLM服务器.md',
  'PRDwithPassingTestsApproach.md': 'PRD配合测试通过的开发方法.md',
  'QuickSmaugImplementationSuccess.md': '快速实现Smaug成功.md',
  'Replywithscreenshotimage.md': '截图回复功能.md',
  'ResponsiveDialogComponentPattern.md': '响应式对话框组件模式.md',
  'ReverseEngineeringClaudeChromeforRemoteB.md': '逆向Claude Chrome远程浏览器.md',
  'SessyOpen-SourceEmailObservabilityforAWS.md': 'Sessy AWS SES邮件可观测性.md',
  'SessyOpen-SourceSESEmailObservability.md': 'Sessy开源SES邮件监控.md',
  'ShippingatInferenceSpeed.md': '推理速度发布.md',
  'SmaugProjectResponse.md': 'Smaug项目回应.md',
  'Smartphoneaddictionanddopamineregulation.md': '智能手机成瘾与多巴胺调节.md',
  'StaticNavbarsCanBeCoolToo.md': '静态导航栏也可以很酷.md',
  'StenoAIlocalmeetingtranscription.md': 'StenoAI本地会议转录.md',
  'StopGuessingWhyaProcessisRunning.md': '停止猜测进程运行原因.md',
  'streamdownvsreact-markdown.md': 'StreamDown对比ReactMarkdown.md',
  'Summarize.shHoverToolbarforLinkPreviews.md': 'Summarize.sh链接预览悬浮工具栏.md',
  'Summarize.shLinkPreviewToolbar.md': 'Summarize.sh链接预览工具栏.md',
  'uselayoutsAnimatedReactComponentsLibrary.md': 'uselayouts动画React组件库.md',
  'Videopost.md': '视频帖子.md',
  'VoyraCloudVPSandCryptoTradingTools.md': 'VoyraCloud VPS与加密交易工具.md',
  'Whisper-FlowReal-TimeAudioTranscription.md': 'Whisper-Flow实时音频转录.md',
  'UnwatchedRSSYouTubeplayer.md': 'Unwatched RSS YouTube播放器.md'
};

// 主流程
const files = fs.readdirSync(TWEETS_DIR).filter(f => f.endsWith('.md'));
console.log(`📝 处理 ${files.length} 个文件\n`);

// 检查哪些文件需要翻译（英文名）
const chineseRegex = /[\u4e00-\u9fa5]/;
const englishFiles = files.filter(f => !chineseRegex.test(f.replace('.md', '')));

console.log(`📊 英文文件名: ${englishFiles.length} 个\n`);

const renames = [];
for (const filename of englishFiles) {
  const newName = chineseNameMap[filename];
  if (newName) {
    renames.push({ oldName: filename, newName });
    console.log(`${filename} → ${newName}`);
  } else {
    console.log(`⚠️  未找到映射: ${filename}`);
  }
}

if (renames.length === 0) {
  console.log('\n✅ 没有需要重命名的文件');
  process.exit(0);
}

console.log(`\n📋 将重命名 ${renames.length} 个文件\n`);

// 执行重命名
let success = 0;
for (const { oldName, newName } of renames) {
  const oldPath = path.join(TWEETS_DIR, oldName);
  const newPath = path.join(TWEETS_DIR, newName);

  try {
    if (fs.existsSync(newPath)) {
      console.log(`⚠️  跳过（已存在）: ${newName}`);
      continue;
    }
    fs.renameSync(oldPath, newPath);
    success++;
  } catch (error) {
    console.log(`❌ 失败: ${error.message}`);
  }
}

console.log(`\n✅ 成功: ${success} 个`);

// 更新 bookmarks.md
if (success > 0) {
  console.log('\n📚 更新 bookmarks.md...');
  let content = fs.readFileSync(BOOKMARKS_FILE, 'utf8');
  for (const { oldName, newName } of renames) {
    content = content.split(`./knowledge/tweets/${oldName}`).join(`./knowledge/tweets/${newName}`);
    content = content.split(`[${oldName}]`).join(`[${newName}]`);
  }
  fs.writeFileSync(BOOKMARKS_FILE, content);
  console.log('   已更新');
}