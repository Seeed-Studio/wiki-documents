---
description: 了解如何使用 Python SDK 构建你自己的 reSpeaker Clip 应用，实现转写、说话人分离和摘要工作流。本教程涵盖 BLE 和 Wi-Fi 通信、音频录制、文件同步、设备配置等内容。

title: 使用 Python SDK 为 reSpeaker Clip 构建具备转写、说话人分离和摘要功能的自定义应用
keywords:
  - reSpeaker clip
  - 转写
  - 说话人分离
  - 语音转文本
  - 摘要
  - sdk
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 07/21/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_python_build_app/
---

## 介绍 

**reSpeaker STT Web** 将 reSpeaker Clip 转变为一款智能的、由 AI 驱动的语音与会议助手，把嵌入式音频硬件与现代 Web 和云端 AI 技术连接起来。通过 BLE 或 Wi-Fi，它会持续从设备同步录音，并将其送入强大的语音与语言 AI 处理流水线。借助专门为**语音转写、说话人分离以及 AI 生成会议摘要**设计的工作流，用户可以将对话转化为结构化、可执行的信息。该项目基于 Python 和模块化架构构建，为开发者和嵌入式工程师提供了一个灵活的基础，用 reSpeaker Clip 打造下一代语音与 AI 应用。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 工作原理

1. 通过 BLE（默认）或 WiFi 连接到 Clip。
2. 选择一个标签页并点击 Start。设备在录音的同时会在后台持续传输音频（连续同步——与原始 `clip-web` 工具相同）。你从哪个标签页开始录制，就决定了这段录音将运行哪条处理流水线。
3. 停止录音。当最终同步完成后，应用会：
   - 将合并后的音频编码为 `.ogg`（Opus），
   - 将其转换为 16kHz 单声道 `.wav`（通过 PyAV——无需单独安装 ffmpeg），
    - **Transcription 标签页：** 将 `.wav` 发送到 Groq，获取纯文本结果。
    - **Diarization 标签页：** 将 `.wav` 发送到 Speechmatics，并使用 `diarization: "speaker"`，获取逐词级别的 JSON 转写结果，并将其分组为说话人轮次（`S1`、`S2` 等）。
    - **Summary 标签页：** 将 `.wav` 发送到 Groq 进行转写，然后把转写文本传给 Groq 的聊天 API（`openai/gpt-oss-20b`），生成结构化的会议纪要（标题、关键点、行动项、决策）。
    - 通过现有的 WebSocket 将结果推送到浏览器。
4. 每个标签页都有自己的“Recordings”列表（按会话录制时所使用的流水线进行过滤），并为每条录音提供播放和 Process/Re-run 按钮。


## API 密钥

每个标签页都有自己的 Settings 卡片——Transcription 和 Summary 标签页使用 Groq 密钥（共享——设置一次，两者可共用），Diarization 标签页使用 Speechmatics 密钥。没有任何密钥被硬编码或提交到仓库。密钥在服务器进程生命周期内保存在内存中。勾选“Remember on this machine”可以同时将它们持久化到 `app/settings.local.json`（已加入 gitignore），以便在重启后继续使用。

- **Groq：** 在 https://console.groq.com 获取密钥——同时用于转写（`whisper-large-v3-turbo`，快速的单次同步调用）和摘要（`openai/gpt-oss-20b` 聊天补全）。
- **Speechmatics：** 在 https://portal.speechmatics.com 获取密钥——使用带有 `diarization: "speaker"` 的批处理 REST API（提交 → 轮询 → 获取 JSON 转写 → 分组成说话人轮次），默认使用 `enhanced` 工作点。详见其文档中的 [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization)。

## 项目结构

```
respeaker-stt-web/
├── clip/                   # vendored Clip SDK (BLE/WiFi device control)
├── app/
│   ├── main.py              # FastAPI app: device control + recording + pipeline orchestration
│   ├── audio_convert.py     # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py            # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py          # STTProvider interface
│   │   ├── groq_provider.py         # transcribe() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html       # UI — three tabs, each with recording controls, settings, results
├── recordings/               # synced audio + meta.json + transcript.json per session (gitignored)
└── requirements.txt
```

## 环境要求

- Python 3.10+
- 无需单独安装 ffmpeg——WAV 转换使用 PyAV（PyPI 上的 `av`），其自带打包好的编解码库，包括在 Windows 上
- 一台已配对的 reSpeaker Clip 设备（BLE）用于实际录音——没有硬件就无法体验这一部分

## 安装与配置

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

然后在浏览器中打开 `http://localhost:5000`。

如果希望使用 WiFi 传输而不是 BLE：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```
## 界面概览

### Transcription
添加你的 Groq API 密钥。点击录音按钮，当你想停止时，再点击停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization
添加你的 Speechmatics API 密钥。点击录音按钮，当你想停止时，再点击停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary
添加你的 Groq API 密钥。点击录音按钮，当你想停止时，再点击停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
