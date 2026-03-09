---
description: 使用 Whisper、Ollama 和 NVIDIA Jetson 构建您自己的本地语音助手。GPU 设置、语音转文本、LLM、TTS 和离线语音 AI 的分步指南。
title: 端到端部署离线智能语音助手
keywords:
  - reSpeaker
  - TTS
  - STT
  - LLM
  - Voice Assistant
  - Speech Recognition
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_voice_assistant
last_update:
  date: 12/16/2025
  author: Kasun Thushara
createdAt: '2025-12-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/respeaker_voice_assistant/
---

## 概述

本项目展示了一个专为智能办公室和智能空间设计的完全本地化智能语音助手。它使用 ReSpeaker XVF3800 麦克风阵列进行高质量语音捕获，结合设备端语音转文本（STT）进行准确转录。本地大语言模型（LLM）智能处理用户查询，无需依赖云端，确保隐私和低延迟。文本转语音（TTS）生成自然的语音响应，实现实时交互。该系统非常适合办公室、商场、信息亭和会议室等需要安全离线语音控制的环境。

## 所需硬件

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Jetson AGX Orin 32GB H01 Kit</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 准备设备

#### ReSpeaker XVF3800 – USB 固件安装

确保 ReSpeaker XVF3800 USB 麦克风阵列在使用前已更新至最新固件。

- 遵循官方固件更新指南：

  - ReSpeaker XVF3800 固件更新 [Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)

此步骤确保稳定的 USB 音频输入和与下游语音处理管道的兼容性。

#### NVIDIA Jetson AGX Orin – 初始设置

如果您的 Jetson AGX Orin 尚未设置，请使用适当的 JetPack 版本进行刷写。

- 官方设置指南：

  - Jetson AGX Orin 32GB H01 刷写 JetPack [Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/#prerequisites)

刷写并启动到 Ubuntu 后，更新系统并安装 JetPack 组件：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

### CUDA 环境配置

#### 检查已安装的 CUDA 版本

验证哪些 CUDA 目录可用：

```bash
ls /usr/local
```

您应该看到一个文件夹，如 `cuda`、`cuda-12.x` 或类似的。

#### 永久添加 CUDA 路径

编辑您的 shell 配置文件：

```bash
nano ~/.bashrc
```

在底部添加以下行（替换为您的实际 CUDA 版本）：

```bash
# CUDA paths
export PATH=/usr/local/cuda-(your_version)/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-(your_version)/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

应用更改：

```bash
source ~/.bashrc
```

#### 验证 CUDA 安装

确认 CUDA 已正确安装并可访问：

```bash
nvcc --version
```

如果显示了 CUDA 版本，则 GPU 支持已准备就绪。

### 安装支持 GPU 的 Whisper

#### 克隆 Whisper 仓库

Whisper 从源代码构建以启用 CUDA 加速。

- 仓库：

  - [https://github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)

安装所需依赖项：

```bash
sudo apt-get install libsdl2-dev
```

#### 启用 CUDA 构建 Whisper

从 `whisper.cpp` 目录运行：

```bash
cmake -B build -DGGML_CUDA=1 -DWHISPER_SDL2=ON
cmake --build build -j --config Release
```

这将编译支持 GPU 加速和 SDL 支持的 Whisper。

#### 下载 Whisper 模型

从 Hugging Face 下载 Whisper 模型：

- 模型：

  - ggml-base-q8_0.bin

将下载的模型放置在 `models/` 目录中：

```bash
whisper.cpp/models/
```

#### 运行 Whisper 服务器

启动支持 GPU 的 Whisper 服务器：

```bash
cd whisper.cpp
./build/bin/whisper-server \
  -m models/ggml-base.en.bin \
  --host 0.0.0.0 \
  --port 8080 \
  --gpu
```

这将启动一个可通过网络访问的实时语音转文本服务器。

### 安装 Ollama 进行本地 LLM 推理

Ollama 官方支持 NVIDIA Jetson 设备，并提供 CUDA 加速的本地 LLM 执行。

使用官方安装程序安装 Ollama：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

运行 Gemma 3 模型：

```bash
ollama run gemma3:4b
```

## 智能语音 AI 助手 – 快速入门指南

### 架构概述

1. **唤醒词检测** – 持续监听预定义的激活短语。
2. **语音转文本（STT）** – 使用本地语音识别引擎将用户语音转换为文本。
3. **RAG 驱动的 LLM** – 从向量数据库检索相关上下文，并使用本地 LLM 生成智能响应。
4. **文本转语音（TTS）** – 将生成的响应转换为自然的语音。

所有处理都在本地执行，以确保低延迟、数据隐私和离线能力。

项目仓库：

- [https://github.com/KasunThushara/LocalVoiceAssistant.git](https://github.com/KasunThushara/LocalVoiceAssistant)

克隆仓库

```bash
git clone https://github.com/KasunThushara/LocalVoiceAssistant.git
```

### 快速入门

#### 安装依赖项

确保已安装 Python 和所需的系统依赖项，然后运行：

```bash
pip install -r requirements.txt
```

#### 下载文本转语音（TTS）模型

本项目使用 **Piper TTS** 模型。以下是使用男性英语语音（Amy）的示例：

```bash
# Example: female voice (amy)
wget -O models/en_US-amy-low.onnx \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx

wget -O models/en_US-amy-low.onnx.json \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx.json
```

您可以根据需要将其替换为任何兼容的 Piper 语音模型。

#### 下载嵌入模型（一次性设置）

嵌入模型是构建 RAG 管道使用的向量数据库所必需的。

```bash
python download_sentence_tf.py
```

此步骤只需运行一次。

#### 构建向量数据库

创建或重建用于上下文检索的向量数据库：

```bash
python test_scripts/rebuild_vector.py
```

此过程索引您的文档并为快速语义搜索做准备。

#### 运行应用程序

启动智能语音 AI 助手：

```bash
python app.py
```

运行后，系统将监听唤醒词并实时响应语音查询。

## 参考资料

- [Whisper 服务器示例：](https://github.com/ggml-org/whisper.cpp/tree/master/examples/server)
- [Whisper 仓库：](https://github.com/ggml-org/whisper.cpp)
- [Ollama 模型库：](https://ollama.com/library/gemma3)
- [Jetson 上的 Ollama 指南：](https://www.jetson-ai-lab.com/tutorial_ollama.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
