---
description: 本文介绍如何在 reComputer Jetson 设备上部署 Live VLM WebUI，以实现实时视觉语言模型（VLM）交互和评估。测试表明，整个工作流程可以在 16GB 内存的硬件上运行，但推理速度相对较慢。
title: 在 reComputer Jetson 上部署 Live VLM WebUI
keywords:
- reComputer
- Jetson
- VLM
- Live VLM WebUI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /cn/deploy_live_vlm_webui_on_jetson
last_update:
  date: 12/26/2025
  author: Youjiang
---


# 在 reComputer Jetson 上部署 Live VLM WebUI

## 简介

Live VLM WebUI 是一个用于实时视觉语言模型交互和基准测试的通用 Web 界面。它可以将您的网络摄像头流传输到任何 VLM 并获得实时 AI 驱动的分析 - 非常适合测试模型、基准性能以及探索跨多个领域和硬件平台的视觉 AI 功能。

本教程将向您展示如何在 reComputer Super J4012 上部署 Live VLM WebUI。

<!-- <div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/webui.png" />
</div> -->


## 前提条件
- reComputer Super J4012
- USB 摄像头

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
        <th> reComputer Super J4012 </th>
        <th> USB 摄像头 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
请确保您的 Jetson 设备已安装 Jetpack 6.2 操作系统。
:::

:::info
在配置软件之前，请将 USB 摄像头连接到 reComputer Super J4012 的 Type-A 端口。
:::


## 部署 Live VLM WebUI

步骤 1. 在 reComputer Jetson 中安装并运行 ollama。

在 reComputer Jetson 的终端窗口中运行以下命令。

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2-vision:11b
```
:::note
模型下载大约需要 10 分钟。请耐心等待。
:::

步骤 2. 安装 Live VLM WebUI。

在 reComputer Jetson 的终端窗口中运行以下命令。

```bash
# Install dependencies
sudo apt install openssl python3-pip

# Install the package
python3 -m pip install --user live-vlm-webui

# Add to PATH (one-time setup)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Run it
live-vlm-webui
```

步骤 3. 配置并启动 Live VLM WebUI。

如果应用程序运行成功，您可以在浏览器中输入 `https://localhost:8090` 来打开 WebUI。


- 在 VLM API Configuration 中，选择 `ollama` 推理引擎和您刚刚下载的 `llama3.2-vision` 模型。
- 在 Camera and App Control 中，选择 `USB Camera`。
- 点击 Run 按钮后，您可以等待后端的推理结果。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/config.png" />
</div>

## 效果演示

整个工作流程可以在配备 16GB 内存的 reComputer Super J4012 设备上正常运行。但是，在实际测试中发现推理速度非常慢。

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/GrdIRkmiXUc" title="Deploy Live LLM WebUI on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://ollama.com/download/linux
- https://github.com/NVIDIA-AI-IOT/live-vlm-webui


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