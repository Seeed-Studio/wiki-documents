---
description: 一个完全本地化的语音交互式 AI 助手，结合了语音转文本（STT）、文本转语音（TTS）和使用 Ollama 和 NVIDIA Riva 的本地大语言模型（LLMs）。它完全运行在边缘设备（如 NVIDIA Jetson）上，实现私密、实时和自然的语音对话，无需依赖云服务。
title: Jetson 上的聊天机器人
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /local_chatbot_recomputer
last_update:
  date: 01/29/2025
  author: kourosh
createdAt: '2025-11-03'
updatedAt: '2025-11-06'
url: https://wiki.seeedstudio.com/cn/local_chatbot_recomputer/
---

# 使用本地 LLMs、STT 和 TTS 构建语音交互式聊天机器人

这个项目将**完全语音交互式 AI 助手**的梦想变为现实——完全**在本地硬件上运行**，无需依赖云服务。  
通过结合**语音转文本（STT）**、**文本转语音（TTS）**和使用**Ollama**的**本地大语言模型（LLMs）**，该系统实现了人机之间自然、私密和实时的对话。

整个设置在 Docker 容器内运行，可以部署在**NVIDIA Jetson 设备**、**边缘计算机**或任何具有 GPU 加速的基于 Linux 的系统上。

---

## 项目概述

该项目的目标是创建一个**语音驱动的聊天机器人**，能够：

- 实时监听您的语音。
- 使用本地**ASR（自动语音识别）**理解您的语音。
- 使用**本地 LLM**生成智能回复。
- 使用**TTS（文本转语音）**自然地说出这些回复。

所有组件都是自包含的并在本地运行，让您完全控制自己的数据——无云依赖、无延迟、无隐私担忧。

---

## 系统组件

### 1. 语音转文本（STT）模块

实时将您的语音输入转换为文本。  
主要特性：

- 使用**NVIDIA Riva ASR**进行快速、准确的转录。  
- 支持多种语言。  
- 针对边缘设备进行优化。

### 2. 文本转语音（TTS）模块

将聊天机器人的回复转换为自然的语音输出。  
亮点：

- 多语言、富有表现力和逼真的语音合成。  
- 由**NVIDIA Riva TTS**提供支持。  
- 低延迟——非常适合交互式对话。

### 3. 本地 LLM（Ollama）

聊天机器人的核心是**Ollama**，一个用于高效运行现代 LLMs 的本地推理引擎。  
特性：

- 离线操作（无需互联网）。  
- 即使在 Jetson 设备上也能实时响应。  
- 上下文保持，实现流畅、连贯的对话。  
- 支持各种模型，包括 Llama、Phi、Gemma、Mistral 等。

### 4. 用户交互层

简单直观的界面允许用户：

- 通过按钮或命令启动或停止语音交互。  
- 查看实时转录和聊天机器人回复。  
- 享受从语音到语音的流畅、低延迟通信。

---

## 本地设置 Ollama

我们将首先安装 [Jetson Containers](https://github.com/dusty-nv/jetson-containers) 来轻松管理和部署我们在 Docker 中的服务。

```bash
# Install Jetson Container tools
git clone https://github.com/dusty-nv/jetson-containers
bash jetson-containers/install.sh
```

安装完成后，拉取并运行**Ollama**容器：

```bash
jetson-containers run --name ollama $(autotag ollama)
ollama run llama3.2:1b
```

💡 **提示：**从较小的模型（如 `llama3.2:1b`）开始测试您的配置，然后再扩展。

在 [ollama.com/library](https://ollama.com/library) 上可用的模型：

| 模型 | 参数 | 大小 | 命令 |
|-------|-------------|------|----------|
| Llama 3.2 | 3B | 2.0 GB | `ollama run llama3.2` |
| Llama 3.2 | 1B | 1.3 GB | `ollama run llama3.2:1b` |
| Llama 3.2 Vision | 11B | 7.9 GB | `ollama run llama3.2-vision` |
| Phi 3 Mini | 3.8B | 2.3 GB | `ollama run phi3` |
| Gemma 2 | 9B | 5.5 GB | `ollama run gemma2` |
| Mistral | 7B | 4.1 GB | `ollama run mistral` |

如果您使用的是**NVIDIA Jetson AGX**，您可以舒适地运行中型到大型模型。对于较小的 Jetson，请坚持使用轻量级模型（1B–3B）。

直接在终端中运行 Ollama 或通过提供的 Python 脚本 `ollama_run.py` 运行。

```bash
python3 ollama_run.py
```

**示例：**

终端使用  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/terminal_ollama.gif" width="700"/>

Python 集成  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/ollama_python.gif" width="700"/>

---

## NVIDIA Riva：STT 和 TTS

为了实现真正的语音交互，我们使用**NVIDIA Riva**，这是一个 GPU 加速的工具包，提供：

- **自动语音识别（ASR）**  
- **文本转语音（TTS）**  
- **神经机器翻译（NMT）**（可选）

它可以部署在任何地方——从云端到嵌入式设备，如**Jetson 系列**。

### 步骤 1：获取您的 NGC API 密钥

1. 登录到 [NVIDIA NGC](https://catalog.ngc.nvidia.com/)。
2. 创建一个**API 密钥**并将其保存在本地——您需要它来访问 Riva 资源。

### 步骤 2：在 Jetson 上配置 NGC

```bash
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

在提示时使用您的 API 密钥。

### 步骤 3：在 Jetson 上安装 Riva

确保您运行的是**JetPack 6.0**（或在[支持矩阵](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/support-matrix.html)中检查兼容性）。

```bash
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.16.0
cd riva_quickstart_v2.13.1
```

在 `config.sh` 中，禁用未使用的服务以节省资源：

```bash
service_enabled_nlp=false
service_enabled_nmt=false
```

然后通过编辑 `/etc/docker/daemon.json` 配置 Docker 使用 NVIDIA 运行时：

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```

重启 Docker：

```bash
sudo systemctl restart docker
```

最后，初始化并启动 Riva：

```bash
sudo bash riva_init.sh
sudo bash riva_start.sh
```

---

## 运行聊天机器人

一切准备就绪后，运行主应用程序：

```bash
git clone https://github.com/kouroshkarimi/local_chatbot_jetson.git
cd local_chatbot_jetson
python3 app.py --list-input-devices
python3 app.py --list-output-devices
python3 app.py --input-device <your_input_id> --output-device <your_output_id>
```

您现在可以**与您的助手对话**，它将**倾听、思考并回话**——全部在本地进行，由您的 Jetson 提供支持。

---

## 主要优势

- 🔒 100% 私密——数据不会离开您的设备  
- ⚡ 实时响应——针对低延迟进行优化  
- 🌐 多语言——支持多种语言和口音  
- 🧩 模块化——每个组件都可以替换或扩展  
- 🖥️ 边缘友好——可部署在 Jetson 或标准 Linux 系统上

---

## 未来改进

- 与**视觉模块**集成以实现多模态交互  
- 在 TTS 中支持**自定义语音克隆**  
- 跨会话的**记忆持久化**以实现更自然的对话  
- Web 或移动界面

---

## 🎉 享受您的对话！

恭喜——您刚刚构建了自己的**语音启用、隐私优先的 AI 助手**。  
现在坐下来，与您的机器人对话，享受探索人机交互未来的乐趣。🤖💬

> "与机器人愉快对话 :)"

---

## 参考资料

1. [基于 Jetson 和 LlamaIndex 的本地 RAG](https://wiki.seeedstudio.com/cn/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [本地语音聊天机器人：在 reComputer 上部署 Riva 和 Llama2](https://wiki.seeedstudio.com/cn/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [语音转文本（STT）和文本转语音（TTS）](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ 贡献者项目

- 该项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 特别感谢 [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/cn/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
