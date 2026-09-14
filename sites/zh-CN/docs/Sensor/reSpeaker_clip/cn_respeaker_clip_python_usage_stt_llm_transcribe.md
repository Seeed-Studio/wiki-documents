---
description: 了解如何使用 Python SDK 构建你自己的 reSpeaker Clip 应用，实现实时 Live STT（RTC 流式传输）、转写、说话人分离和摘要等工作流。本教程涵盖 BLE 与 Wi-Fi 通信、RTC 音频流、音频录制、文件同步、设备配置等内容。
title: 使用 Python SDK 为 reSpeaker Clip 构建具备 Live STT、转写、说话人分离和摘要功能的应用
keywords:
  - reSpeaker clip
  - Live STT
  - RTC
  - 实时
  - 转写
  - 说话人分离
  - STT
  - 摘要
  - sdk
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 08/27/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_python_build_app/
---

## 介绍

**reSpeaker STT Web** 将 reSpeaker Clip 转变为一款智能的、由 AI 驱动的语音与会议助手，把嵌入式音频硬件与现代 Web 和云端 AI 技术连接起来。通过 BLE 或 Wi-Fi，它会持续从设备同步录音，并通过强大的语音与语言 AI 流水线进行处理。它还增加了一个**实时 Live STT 选项卡**，通过 BLE（RTC 模式）流式传输 Clip 的麦克风音频，并在你说话的同时将其转写为文本。

借助专门的工作流来实现**实时语音转文本**、**语音转写**、**说话人分离**以及**AI 生成的会议摘要**，用户可以将对话转化为结构化、可执行的信息——无论是即时还是事后处理。该项目基于 Python 和模块化架构构建，为开发者和嵌入式工程师提供了一个灵活的基础，用 reSpeaker Clip 构建下一代语音与 AI 应用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>

## 工作原理

该应用有**四个选项卡**。**Live STT** 选项卡是实时的；另外三个会先录制到 SD 卡，在你停止后再处理。

**Live STT（实时，仅 BLE）：**
1. 通过 BLE 连接到 Clip（自动扫描，或扫描后选择特定设备）。
2. 按下 **Start Streaming**。后端发送 `AT+START=RTC`（实时会话，不会写入 SD 卡），然后发送 `AT+DOWNLOAD=<session>` 开始流式传输。
3. Clip 通过 BLE（File Data 特征值）每帧推送一个**20 ms 的 Opus 数据包**。
4. 后端将每个数据包解码为 PCM，运行**分层 VAD**（WebRTC + 自适应能量门限），并且只将完整的**语音话语**发送到 Groq——静音永远不会被上传。
5. 转写结果会作为文本行通过 WebSocket 实时推送到浏览器；`listening`/`SPEAKING` 指示器显示 VAD 状态。
6. 按下 **Stop** 以刷新最后一个话语并拆除流（`AT+STOP`）。

**录制并处理选项卡（BLE 或 WiFi）：**
1. 通过 BLE（默认）或 WiFi 连接到 Clip。
2. 选择一个选项卡并点击 Start。设备在录制的同时会在后台将音频流出（持续同步——与原始 `clip-web` 工具相同）。你从哪个选项卡开始录制，就决定了这段录音将运行哪条处理流水线。
3. 停止录音。一旦最终同步完成，应用会：
   - 将合并后的音频编码为 `.ogg`（Opus），
   - 将其转换为 16kHz 单声道 `.wav`（通过 PyAV——无需单独安装 ffmpeg），
   - **Transcription 选项卡：** 将 `.wav` 发送到 Groq，获取纯文本结果。
   - **Diarization 选项卡：** 将 `.wav` 发送到 Speechmatics，并使用 `diarization: "speaker"`，获取词级 JSON 转写结果，并将其分组为说话人轮次（`S1`、`S2` 等）。
   - **Summary 选项卡：** 将 `.wav` 发送到 Groq 进行转写，然后将转写文本传给 Groq 的聊天 API（`openai/gpt-oss-20b`），生成结构化的会议纪要（标题、关键点、行动项、决策）。
   - 通过现有的 WebSocket 将结果推送到浏览器。
4. 每个选项卡都有自己的“Recordings”列表（按会话录制时所用的流水线进行过滤），每条录音都支持回放以及 Process/Re-run 按钮。

> Live STT 会话从不会存储在 SD 卡上，因此不会出现在 Recordings 列表中——转写文本本身就是输出结果。

## API 密钥

每个选项卡都有自己的 Settings 卡片——Live STT、Transcription 和 Summary 选项卡上使用 Groq 密钥（共享——设置一次，三个选项卡都可用），Diarization 选项卡上使用 Speechmatics 密钥。没有任何密钥被硬编码或提交。密钥在服务器进程生命周期内保存在内存中。勾选“Remember on this machine”可以同时将它们持久化到 `app/settings.local.json`（已加入 .gitignore），以便在重启后仍然可用。

- **Groq：** 在 https://console.groq.com 获取密钥——用于实时 STT（`whisper-large-v3-turbo`，按话语调用）、转写（`whisper-large-v3-turbo`）和摘要（`openai/gpt-oss-20b` 聊天补全）。
- **Speechmatics：** 在 https://portal.speechmatics.com 获取密钥——使用带有 `diarization: "speaker"` 的批处理 REST API（提交 → 轮询 → 获取 JSON 转写 → 分组成说话人轮次），默认使用 `enhanced` 工作点。详见其文档中的 [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization)。

## 项目结构

```
respeaker-stt-clip-rtc/
├── clip/                       # vendored Clip SDK (BLE/WiFi device control, RTC stream callbacks)
├── app/
│   ├── main.py                 # FastAPI app: device control + recording + live STT + pipelines
│   ├── stream.py               # RTCStreamManager: BLE RTC stream -> decode -> VAD -> Groq -> WebSocket
│   ├── opus_decode.py          # PyAV raw-Opus -> int16 PCM decoder (48 kHz, 20 ms frames)
│   ├── vad.py                  # StreamVAD: WebRTC VAD AND adaptive energy gate + hangover/pre-roll
│   ├── demo_sample_packets.json  # bundled Opus packets for no-hardware demo mode
│   ├── audio_convert.py        # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py               # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py             # STTProvider interface
│   │   ├── groq_provider.py    # transcribe() / transcribe_bytes() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html          # UI — Live STT + three record tabs, settings, results
├── reference/web/              # original browser-only Web Bluetooth streaming reference
├── docs/                       # project documentation
└── requirements.txt
```

每个已同步的录音都会生成一个 `meta.json`（在录制开始时写入，记录该会话属于哪条流水线），并在处理完成后生成一个 `transcript.json`。Live STT 输出是实时流式传输的，不会持久化到磁盘。

## 环境要求

- Python 3.10+
- 无需单独安装 ffmpeg——WAV 转换使用 PyAV（PyPI 上的 `av`），其自带打包好的编解码库，包括 Windows 平台
- 用于 WebRTC VAD 层的 `webrtcvad-wheels`（如果无法安装，会自动回退到自适应能量门限）
- 一台已配对的 reSpeaker Clip 设备（BLE），用于实际录音——没有硬件就无法体验这一部分
- 对于 **Live STT** 选项卡：一台运行支持 **RTC 实时流式传输** 固件（`AT+START=RTC`）的 Clip，并使用 BLE 传输（RTC 流式传输仅支持 BLE）

## 安装与配置

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

然后打开 `http://localhost:5000`。

如果希望使用 WiFi 传输而不是 BLE（仅限录制选项卡——Live STT 需要 BLE）：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## 界面概览

### Live STT（RTC 流式传输）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-6.jpg" alt="pir" width={800} height="auto"/></p>

顶部的设备卡在所有选项卡之间共享——扫描附近的 Clip，从下拉列表中选择你的设备，然后点击 **Connect**。如果 Connect 在 Windows 上因 BLE 配对错误而失败，请使用 **Re-pair & Connect** 清除失效的绑定关系。

1. 在 Live STT 设置卡片中添加你的 **Groq API key**。
2. **Connect** 到 Clip（BLE 自动扫描，或从扫描结果中选择的设备）。
3. 按下 **Start Streaming**。开始说话——每个话语（语音后跟随静音）都会被转写，并实时显示在转写框中。指示器会显示 `listening` / `SPEAKING`。
4. 调整 **WebRTC VAD aggressiveness**（0–3）和 **energy threshold (dB)** 滑块，以微调静音被过滤的“激进程度”。
5. 按下 **Stop** 以刷新任何未完成的话语并结束流。

手边没有硬件？勾选 **Demo (no device)**——打包的 Opus 数据包会通过完全相同的 decode → VAD → Groq 流水线回放，这样你可以先验证密钥和参数设置。

### Transcription

添加你的 Groq API key。按下录音按钮，当你想停止时再按下停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization

添加你的 Speechmatics API key。按下录音按钮，当你想停止时再按下停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary

添加你的 Groq API key。按下录音按钮，当你想停止时再按下停止。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>

## 技术支持与产品交流

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
