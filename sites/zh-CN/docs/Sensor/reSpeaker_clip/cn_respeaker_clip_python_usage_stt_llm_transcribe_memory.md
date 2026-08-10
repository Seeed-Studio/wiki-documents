---
description: 了解如何使用 Python SDK 构建带有记忆层的 reSpeaker Clip 应用。本教程涵盖 BLE 和 Wi-Fi 通信、音频录制、转录、说话人分离、摘要生成，以及针对重复讨论的本地记忆匹配。
title: 使用 Python SDK 为 reSpeaker Clip 构建带记忆层的自定义应用
keywords:
  - reSpeaker Clip
  - 记忆层
  - Python SDK
  - 转录
  - 说话人分离
  - 摘要
  - Firebase
  - SQL
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app_with_memory
sku: 100020126
last_update:
  date: 07/31/2026
  author: Kasun Thushara
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_python_build_app_with_memory/
---

## 介绍

本指南展示如何将 reSpeaker Clip 打造成一款语音驱动助手，它不仅可以对录音进行转录、说话人分离或摘要生成，还能记住之前说过的话。通过在 Python SDK 工作流之上添加记忆层，你的应用可以将新的转录内容与过去的对话进行比较，并在检测到类似讨论时通知你。

最终，你将获得一个实用基础，用于在 reSpeaker Clip 上构建智能会议助手、个人笔记记录器或语音驱动的知识类应用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="reSpeaker Clip memory app" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 工作原理

1. 通过 BLE（默认）或 Wi-Fi 连接到 Clip。
2. 从应用中开始录音。当你讲话时，音频会在后台从设备进行流式传输。
3. 停止录音。同步完成后，应用会：
   - 将合并后的音频编码为 `.ogg`（Opus），
   - 使用 PyAV 将其转换为 16kHz 单声道 `.wav`，
   - 运行所选的转录、说话人分离或摘要生成流水线，
   - 在得到的转录文本上运行记忆层，
   - 通过现有 WebSocket 将结果和任何记忆通知发送到浏览器。
4. 每段录音都会连同回放和处理控制一起存储，如果你重新处理录音，会再次运行记忆检查。

## 本版本的不同之处

记忆层在语音处理之后增加了一个新步骤：

```text
reSpeaker Clip -> record -> STT / diarization / summary
                                  |
                                  v
                            embed transcript locally
                                  |
                                  v
                    compare with previous recordings
                                  |
                         match found or no match
```

关键能力：

- 记忆层不会存储音频。只会保留转录文本、嵌入向量、时间戳和匹配元数据。
- 默认的本地向量存储在 `data/` 文件夹下使用 JSON 和 NumPy 文件，因此无需云服务即可工作。
- 如果发现相似录音，应用可以显示类似“你之前讨论过这个”的角落弹窗提示。
- 记忆层是附加功能。如果没有找到匹配，它不会阻塞转录或摘要本身。

## 支持的工作流

该应用支持四种工作流模式：

- **Transcription 选项卡** — 基于 Groq 的纯文本转录。
- **Diarization 选项卡** — 基于 Speechmatics 的带说话人标签转录。
- **Summary 选项卡** — Groq 转录加 AI 生成的会议纪要。
- **记忆层** — 在每次录音上运行，与使用哪个选项卡无关。

## API 密钥

每个选项卡使用各自的服务提供商设置：

- **Groq** — 用于转录和摘要生成。
- **Speechmatics** — 用于说话人分离和说话人标注。
- **Firebase** — 可选，如果你想为记忆层切换到基于 Firestore 的存储选项。

密钥不会被硬编码。它们可以在当前服务器会话中临时存储于内存中，或在本地持久化以供后续使用。

## 环境要求

- Python 3.10 及以上
- 一台已配对的 reSpeaker Clip 设备，用于真实录音和流式传输
- 无需单独安装 ffmpeg，因为 PyAV 已内置编解码器
- 对于希望探索 Firebase 或其他基于数据库的记忆存储的团队，可选用云端集成

## 安装与配置

### Linux / macOS

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
python app/main.py
```

### Windows（PowerShell）

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

Copy-Item .env.example .env
python app/main.py
```

然后打开 `http://localhost:5000`。

如果想使用 Wi-Fi 传输而不是 BLE：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## 项目结构

```text
respeaker-stt-memory/
├── clip/                     # vendored Clip SDK for BLE and Wi-Fi device control
├── app/
│   ├── main.py               # FastAPI app for device control, recording, and memory hooks
│   ├── audio_convert.py      # converts audio to 16kHz mono WAV
│   ├── config.py             # runtime settings and provider keys
│   ├── llm/
│   ├── stt/
│   ├── memory/               # memory layer implementation
│   │   ├── config.py         # threshold and model settings
│   │   ├── embeddings.py     # local embedding generation
│   │   ├── local_store.py    # local vector store
│   │   └── memory_service.py # matching and memory orchestration
│   └── static/
├── data/                     # local memories.json and memories.npy
├── recordings/               # synced audio and transcript outputs
├── requirements.txt
```

## 记忆层调优

你可以通过调整相似度阈值和搜索上限来改变记忆层的行为：

- **MEMORY_SIMILARITY_THRESHOLD** — 如果你希望匹配更少，就提高该值；如果希望召回更多，就降低该值。
- **MEMORY_SEARCH_LIMIT** — 控制在应用阈值之前要考虑多少个最近邻。

这些数值应基于真实使用情况进行调优，而不是凭空猜测。

## 超越本地存储的扩展

默认实现使用基于本地 JSON 和 NumPy 的存储，这使你可以在没有云依赖的情况下轻松尝试这一思路。如果你之后希望拥有更集中或更易搜索的后端，该设计也兼容更广泛的方案，例如基于 Firebase 的存储或基于 SQL 的持久化，适用于希望构建结构化长期记忆的团队。

这使得该项目既适合作为原型的起点，也适合作为更偏向生产环境的语音应用基础。

## 界面概览

添加你的 Groq API 密钥或 Speechmatics API 密钥，开始录音，在完成时停止。随后应用会显示一条简短的弹窗通知，展示本次会话的结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_memory_demo.png" alt="Transcription interface" width={800} height="auto" /></p>

## Firebase 概览

如果你想探索基于云的记忆体验，可以将 Firebase 作为可选扩展，用于在多设备之间存储和共享记忆。实际操作中，你只需准备好云端部分并配置后端使用它。应用的本地记忆工作流仍然是默认选项，而切换到 Firebase 只需要在后端做一个小调整，将记忆层指向云端存储而不是本地文件。

更多信息请[查看](https://github.com/KasunThushara/reSpeaker_Clip_Memory/tree/main/firebase)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
