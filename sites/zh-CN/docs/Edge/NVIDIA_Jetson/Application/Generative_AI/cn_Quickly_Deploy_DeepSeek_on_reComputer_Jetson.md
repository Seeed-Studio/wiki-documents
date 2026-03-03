---
description: 本wiki指导您使用Ollama在reComputer Jetson设备上部署DeepSeek模型，展示高效的AI推理和最小功耗。
title: 在reComputer Jetson上快速部署DeepSeek
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /cn/deploy_deepseek_on_jetson
last_update:
  date: 02/08/2025
  author: Youjiang
---


# 在reComputer Jetson上快速部署DeepSeek

## 介绍

DeepSeek是一个前沿的AI模型套件，针对效率、准确性和实时处理进行了优化。通过对边缘计算的高级优化，DeepSeek能够直接在Jetson设备上实现快速、低延迟的AI推理，减少对云计算的依赖，同时最大化性能。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

本wiki提供了在reComputer Jetson设备上部署[DeepSeek](https://www.deepseek.com/)模型的分步指南，用于在边缘进行高效的AI推理。

## 先决条件

- 内存超过8GB的Jetson设备。
- Jetson设备需要预先刷入jetpack [5.1.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/)操作系统或更高版本。

:::note
在本wiki中，我们将使用[reComputer J4012 - 搭载NVIDIA® Jetson™ Orin™ NX 16GB的边缘AI计算机](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)来完成以下任务，但您也可以尝试使用其他Jetson设备。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 开始使用

### 硬件连接
- 将Jetson设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络的SSH远程访问Jetson设备。
:::

### 安装Ollama推理引擎

Ollama是一个轻量级且高效的推理引擎，专为在本地运行大型语言模型（LLM）而设计，设置简单。它通过提供易于使用的界面和针对各种硬件配置（包括Jetson设备）优化的运行时，简化了AI模型的部署。

要安装Ollama，请在Jetson设备上打开终端窗口并运行以下命令：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

此脚本将自动下载并在您的系统上设置Ollama，为AI应用程序提供无缝的本地推理。

### 加载并运行DeepSeek

Ollama现在支持DeepSeek模型的各种版本，允许我们根据需要部署不同大小的模型。为了演示目的，我们将使用默认的DeepSeek-R1 7B模型。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
此命令下载并准备DeepSeek模型，用于使用Ollama进行本地推理。
模型加载完成后，您可以在终端窗口中输入您的查询。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## 效果演示

在演示视频中，Jetson设备仅以20W的功耗运行，却实现了令人印象深刻的推理速度。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html


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