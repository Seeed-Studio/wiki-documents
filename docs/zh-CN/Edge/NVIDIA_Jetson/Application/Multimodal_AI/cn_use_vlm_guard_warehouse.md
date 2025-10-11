---
description: 本教程介绍如何在 reComputer Industrial J4012 上使用 Llava 监控您的仓库，并通过 RS485 控制警示灯颜色，帮助确保仓库安全。
title: 使用 Llava 守护您的仓库
keywords:
- Multimodal 
- LLava
- RS485
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/vlm
last_update:
  date: 10/10/2025
  author: Jiahao Li
---

# 如何在 reComputer Industrial J4012 上使用 LLaVa 监控您的仓库

## 介绍

本教程介绍在 [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) 上部署 VLM（视觉学习模型），使用 USB 摄像头作为 VLM 的输入。当系统检测到安全情况时，信号灯将通过 RS485 控制变为绿色。在危险情况下，如火灾或有人持有武器时，信号灯将变为黄色。当光传感器通过 RS485 检测到仓库灯光被关闭的信号时，信号灯将变为红色。

## 前提条件

<div align="center">
    <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

> **所需组件说明：**
> 除了 Jetson 之外，还需要以下 RS485 组件：
>
> - 一个 RS485 集线器，用于将一个接口分成两个。
> - 一个 RS485 变色灯。
> - 一个 RS485 光传感器。

## 初始化系统环境

1. 使用 JP6 安装初始系统后，您需要检查 `CUDA` 和其他库的安装。您可以通过运行 `sudo apt-get install nvidia-jetpack` 来验证和安装它们。

2. 使用如下命令安装 [ollama](https://ollama.com/download)：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

3. 使用 ollama 运行 [LLaVa](https://ollama.com/library/llava-llama3)，如下所示：

```bash
ollama run llava-llama3:8b
```

## 安装项目

1. 使用如下命令安装 uv

```bash
pip install uv
```

2. 克隆项目

```bash
git clone https://github.com/Seeed-Projects/VLM-Guard.git
```

3. 使用 uv 同步环境

```bash
cd VLM_Guard
uv sync
source .venv/bin/activate
```

## 运行项目

1. 使用下面的脚本运行项目。

```bash
./start_demo.sh
```

2. 打开网页浏览器，然后输入 `localhost:5002` 打开应用程序界面

## 结果

如视频所示，仓库灯在正常操作期间显示绿色，在危险情况下（如有人持刀）显示黄色，当光传感器检测不到光线时显示红色——表示仓库照明故障，同时还允许通过 VLM 模型与历史数据和查询进行交互以获取所需信息。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/J0sS-1zQid8?list=PLpH_4mf13-A1EnNUgEMTsy2PxejFllSGM" title="Build a Local AI Watchdog for Industrial Safety with reComputer J4012 powered by NVIDIA Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
