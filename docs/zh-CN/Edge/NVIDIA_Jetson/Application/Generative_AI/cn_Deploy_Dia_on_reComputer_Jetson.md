---
description: 本维基提供了在 NVIDIA Jetson 设备上部署 Dia 文本转语音模型的分步指南，展示其令人印象深刻的实时语音合成功能。内容涵盖依赖项安装、配置调整，并通过使用搭载 Jetson Orin NX 的 reComputer J4012 进行实际演示，展示高质量音频生成。
title: 在 reComputer Jetson 上部署 Dia
keywords:
- reComputer
- Jetson
- LLM
- Dia
- 音频
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /cn/deploy_dia_on_jetson
last_update:
  date: 2025/05/16
  author: Youjiang
---

# 在 reComputer Jetson 上部署 Dia

## 简介

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    随着 AI 驱动的语音合成技术的快速发展，高质量、实时的文本转语音（TTS）应用已广泛应用于各个领域。在这些技术中，Dia 脱颖而出，作为一种高效且富有表现力的神经语音生成模型，能够以极低的计算开销生成自然的音频。这使得它特别适合部署在边缘设备上，例如 NVIDIA Jetson 系列，这些设备因其性能与能效的平衡而广泛应用于嵌入式 AI 应用。
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    在本文中，我们将探讨如何在 Jetson 设备上部署 Dia TTS 模型，并展示其推理过程中的性能表现。
</div>


## 前置条件

- 内存大于 8GB 的 Jetson 设备。
- Jetson 设备需要预先刷入 Jetpack [6.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/) 操作系统或更高版本。

:::note
在本维基中，我们将使用 [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) 完成以下任务，但您也可以尝试使用其他 Jetson 设备。
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

## 入门指南

### 硬件连接
- 将 Jetson 设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络使用 SSH 远程访问 Jetson 设备。
:::

### 安装依赖项

1. 请从[这里](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0)下载并解压适合您的 Jetson 设备的依赖项。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. 在 Jetson 设备上，在终端中执行以下命令进行安装：

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### 下载并安装 Dia

1. 使用以下终端命令在 Jetson 设备上克隆 Dia 的源代码：

```bash
git clone https://github.com/nari-labs/dia.git
```

2. 编辑安装文件。

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    注释掉与 torch、torchaudio 和 triton 相关的设置。使用 Vim 打开 pyproject.toml 并禁用第 19–22 行。
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
记得在退出前保存更改。
:::

3. 安装 Dia 的运行环境。

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
为了方便远程访问 Gradio WebUI，我重新配置了 GRADIO_SERVER_NAME 环境变量。
:::


## 演示

在演示视频中，我使用 DeepSeek 生成了一段介绍 Seeed Studio 的对话，然后直接将文本输入到 DIA 中生成音频。尽管我的提示没有使用任何特殊技巧，但生成的音频质量仍然令人印象深刻。

```txt
[S1] 嘿，你听说过 Seeed Studio 吗？
[S2] 当然！这是一家专注于开源硬件的公司，对吧？
[S1] 没错！他们提供各种开发板、传感器模块和边缘计算设备，非常适合创客、工程师和开发者快速实现他们的想法。
[S2] 是的，他们的 Grove 生态系统非常有名——模块化设计让硬件连接变得超级简单，不需要复杂的焊接或布线。
[S1] 确实如此！他们还运营 Seeed Fusion，提供小批量 PCB 制造和组装服务，这对初创公司和硬件创业者来说非常棒。
[S2] 此外，他们的社区和文档非常完善，许多项目都是开源的，对初学者非常友好！
[S1] 总之，如果你对 DIY 智能硬件或物联网项目感兴趣，Seeed Studio 是一个很棒的选择！
[S2] 完全同意！
```

<div align="center">
    <iframe width="900" height="506" src="https://www.youtube.com/embed/g9jQzwnsHr0" title="在 reComputer Jetson 上部署 Dia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>