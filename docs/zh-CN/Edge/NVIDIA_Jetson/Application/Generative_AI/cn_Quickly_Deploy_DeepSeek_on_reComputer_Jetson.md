---
description: 本文档将指导您使用 Ollama 在 reComputer Jetson 设备上部署 DeepSeek 模型，展示高效的 AI 推理和低功耗表现。
title: 快速在 reComputer Jetson 上部署 DeepSeek
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /cn/deploy_deepseek_on_jetson
last_update:
  date: 2025/08/02
  author: Youjiang
---


# 快速在 reComputer Jetson 上部署 DeepSeek

## 简介

DeepSeek 是一套前沿的 AI 模型套件，专为高效性、准确性和实时处理而优化。通过针对边缘计算的高级优化，DeepSeek 能够直接在 Jetson 设备上实现快速、低延迟的 AI 推理，减少对云计算的依赖，同时最大化性能。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

本文档提供了在 reComputer Jetson 设备上部署 [DeepSeek](https://www.deepseek.com/) 模型的分步指南，以实现高效的边缘 AI 推理。

## 前置条件

- 具有 8GB 以上内存的 Jetson 设备。
- Jetson 设备需预先刷入 Jetpack [5.1.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/) 或更高版本的操作系统。

:::note
在本文档中，我们将使用 [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) 来完成以下任务，但您也可以尝试使用其他 Jetson 设备。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 快速开始

### 硬件连接
- 将 Jetson 设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络使用 SSH 远程访问 Jetson 设备。
:::

### 安装 Ollama 推理引擎

Ollama 是一个轻量级且高效的推理引擎，专为本地运行大语言模型（LLMs）而设计，设置简单。它通过提供易于使用的界面和针对各种硬件配置（包括 Jetson 设备）的优化运行时，简化了 AI 模型的部署。

要安装 Ollama，请在 Jetson 设备的终端窗口中运行以下命令：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

此脚本将自动下载并设置 Ollama，使您的系统能够无缝地进行本地 AI 推理。

### 加载并运行 DeepSeek

Ollama 现在支持多种版本的 DeepSeek 模型，使我们能够根据需求部署不同大小的模型。为了演示，我们将使用默认的 DeepSeek-R1 7B 模型。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
此命令将下载并准备 DeepSeek 模型，以便使用 Ollama 进行本地推理。
模型加载完成后，您可以在终端窗口中输入查询。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## 效果演示

在演示视频中，Jetson 设备仅以 20W 的功耗运行，却实现了令人印象深刻的推理速度。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/cn/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>