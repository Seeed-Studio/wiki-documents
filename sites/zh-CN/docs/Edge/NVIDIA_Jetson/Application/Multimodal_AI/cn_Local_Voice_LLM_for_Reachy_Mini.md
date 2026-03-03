---
description: 本 wiki 详细介绍了如何使用 reComputer Mini J501 和 Reachy Mini Lite 的硬件组合部署和操作一个完全本地化的语音交互机器人助手。该指南涵盖了安装 Ollama 服务器、配置本地语音模型和对话应用程序，最终实现一个无需互联网连接的离线、低延迟语音对话系统。它展示了一个完整的端到端项目，涵盖硬件设置、软件部署和工作系统的最终演示。
title: 在 reComputer Mini 上为 Reachy Mini 部署本地语音 LLM！
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /local_voice_llm_on_recomputer_jetson_for_reachy_mini
last_update:
  date: 01/06/2026
  author: youjiang
---

双重 Mini！本项目将构建一个完全本地化、低延迟、高隐私的语音交互机器人助手系统。以 reComputer Mini J501 边缘计算设备为核心，部署本地语音识别、大语言模型和语音合成服务。使用开源机器人平台 Reachy Mini 作为人机交互的物理终端，实现具有感知、对话和行动能力的具身智能交互体验。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/workflow.png" />
</div>

## 前提条件
- reComputer Mini J501 套件
- Reachy Mini Lite

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 套件 </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
请确保您的 Jetson 设备包含[载板](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)、Jetson 模块和[散热系统](https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html)，并且已安装 JP6.2 操作系统。
:::

:::info
在配置软件之前，请将 Reachy Mini 连接到 reComputer Mini J501 的 Type-A 端口。
:::


## 部署软件应用程序

**步骤 1.** 在 reComputer Jetson 中安装并运行 ollama 推理服务器。

在 reComputer Jetson 的终端窗口（`Ctrl + Alt + T`）中运行以下命令。

```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the required model
ollama pull llama3.2-vision:11b
```
:::note
模型下载大约需要 10 分钟。请耐心等待。
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/ollama.png" />
</div>

**步骤 2.** 安装对话应用程序。

在 reComputer Jetson 的终端窗口中运行以下命令。

:::note
如果您想在 conda 虚拟环境中配置运行时环境，请在执行以下安装命令之前使用 `conda activate <name>` 命令激活目标环境。
:::

```bash
cd Downloads
git clone https://github.com/Seeed-Projects/reachy-mini-loacl-conversation.git
cd reachy-mini-loacl-conversation
pip install -r requirements.txt -i https://pypi.jetson-ai-lab.io/
pip install "reachy-mini"
```

:::info
更多安装信息请参考[这里](https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/tree/master)。
:::


**步骤 3.** 启动应用程序。

在 reComputer Jetson 的终端窗口中运行以下命令来启动 reachy mini 守护进程。

```bash
reachy-mini-daemon
```

打开另一个终端并执行：

```bash
# Set environment variables
export OLLAMA_HOST="http://localhost:11434"
export OLLAMA_MODEL="qwen2.5:7b"
export COQUI_MODEL_NAME="tts_models/zh-CN/baker/tacotron2-DDC-GST"
export DEFAULT_VOLUME="1.5"

# Start the voice assistant
python main.py
```
<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/launch_app.png" />
</div>

:::info
这里使用中文模型进行演示。您可以根据需要替换为其他语言的模型。
:::


## 效果演示

程序正常启动后，我们可以使用键盘上的 `R` 键和 `S` 键来控制开始和停止录音。录音停止后，程序将调用本地大语言模型生成响应。

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://ollama.com/download/linux
- https://github.com/modelscope/FunASR
- https://github.com/coqui-ai/TTS
- https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/

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
