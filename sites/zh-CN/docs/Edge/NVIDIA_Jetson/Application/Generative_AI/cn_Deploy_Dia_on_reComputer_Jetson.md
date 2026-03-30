---
description: 本wiki提供了在NVIDIA Jetson设备上部署Dia文本转语音模型的分步说明，展示了其令人印象深刻的实时语音合成能力。它涵盖了依赖项安装、配置调整，并包含了使用配备Jetson Orin NX的reComputer J4012展示高质量音频生成的实际演示。
title: 在reComputer Jetson上部署Dia
keywords:
  - reComputer
  - Jetson
  - LLM
  - Dia
  - Audio
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /deploy_dia_on_jetson
last_update:
  date: 05/16/2025
  author: Youjiang
createdAt: '2025-08-07'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/cn/deploy_dia_on_jetson/
---

# 在reComputer Jetson上部署Dia

## 介绍

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    AI驱动的语音合成技术的快速发展使得高质量、实时的文本转语音（TTS）应用能够在各个领域中得到应用。在这些技术中，Dia作为一个高效且富有表现力的神经语音生成模型脱颖而出，能够以最小的计算开销产生自然的音频。这使得它特别适合部署在边缘设备上，例如NVIDIA Jetson系列，由于其性能和功耗效率的平衡，这些设备在嵌入式AI应用中被广泛使用。
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    在本文中，我们探索了在Jetson设备上部署Dia TTS模型的过程，并演示了其在推理过程中的性能。
</div>


## 先决条件

- 具有超过8GB内存的Jetson设备。
- Jetson设备需要预先刷入jetpack [6.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/)操作系统或更高版本。

:::note
在本wiki中，我们将使用[reComputer J4012 - 配备NVIDIA® Jetson™ Orin™ NX 16GB的边缘AI计算机](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)来完成以下任务，但您也可以尝试使用其他Jetson设备。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 开始使用

### 硬件连接
- 将 Jetson 设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络使用 SSH 远程访问 Jetson 设备。
:::

### 安装依赖项

1. 请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0)下载并解压适合您的 Jetson 设备的相应依赖项。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. 在您的 Jetson 设备上，在终端中执行以下命令进行安装：

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### Download and Install Dia

1. 使用以下终端命令在您的 Jetson 设备上克隆 Dia 的源代码：

```bash
git clone https://github.com/nari-labs/dia.git
```

2. 编辑安装文件。

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    注释掉 torch、torchaudio 和 triton 相关的设置。使用 Vim 打开 pyproject.toml 并禁用第 19-22 行。
</div>

```bash
cd dia
vim pyproject.toml
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/comment_out.png" />
</div>

:::note
记住在退出前保存更改。
:::

3. 安装 dia 的运行环境。

```bash
pip install -e .
pip install numpy==1.26.4
```

4. 启动 Dia

```bash
export GRADIO_SERVER_NAME=0.0.0.0
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/launch.png" />
</div>

:::info
为了便于远程访问 Gradio WebUI，我重新配置了 GRADIO_SERVER_NAME 环境变量。
:::


## 演示

在演示视频中，我使用 DeepSeek 生成了一段介绍 Seeed Studio 的对话，然后直接将文本输入到 DIA 中生成音频。尽管我的提示词没有使用任何特殊技巧，生成的音频质量仍然令人印象深刻。

```txt
[S1] Hey, have you heard of Seeed Studio?
[S2] Of course! It's a company focused on open-source hardware right?
[S1] Exactly! They offer a wide range of development boards, sensor modules, and edge computing devices, perfect for makers, engineers, and developers to quickly bring their ideas to life.
[S2] Yeah, and their Grove ecosystem is really famous—its modular design makes hardware connections super easy, no messy soldering or wiring needed.
[S1] True! They also run Seeed Fusion, providing small-batch PCB manufacturing and assembly services, which is great for startups and hardware entrepreneurs.
[S2] Plus, their community and documentation are well-developed, and many of their projects are open-source, making them beginner-friendly!
[S1] In short, if you're into DIY smart hardware or IoT projects, Seeed Studio is an awesome choice!
[S2] Couldn’t agree more!
```

<div class="video-container">
    <iframe width="900" height="506" src="https://www.youtube.com/embed/g9jQzwnsHr0" title="Deploy Dia on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


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