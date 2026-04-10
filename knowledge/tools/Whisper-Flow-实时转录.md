---
title: "Whisper Flow"
type: tool
date_added: 2026-01-02
source: "https://github.com/dimastatz/whisper-flow"
tags: [speech-to-text, real-time, transcription, whisper, python]
via: "Twitter 书签 @tom_doerr"
---

Whisper Flow 是一个使用 OpenAI Whisper 模型进行实时音频转录的 Python 框架。与传统批量处理（上传整个文件后转录）不同，Whisper Flow 接受持续的音频数据流，并立即生成增量转录结果。

采用滑动窗口方法实现流式处理，在语音处理过程中输出部分结果，语音段完成后输出最终结果。

## 核心功能

- 实时流式音频转录
- 说话过程中增量输出部分结果
- 可配置的窗口式音频分块
- 词错误率 (WER) 基准测试支持
- 亚秒级延迟目标
- LibriSpeech 基准兼容

## 技术栈

- Python/PyPI 包
- OpenAI Whisper 集成
- 流式架构
- 语音转文本优化

## 使用场景

- 会议或直播实时转录
- 实时无障碍功能
- 实时字幕系统
- 音频处理自动化

## 相关链接

- [GitHub 仓库](https://github.com/dimastatz/whisper-flow)
- [原始推文](https://x.com/tom_doerr/status/2006262985182834881)