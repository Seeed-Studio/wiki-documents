---
description: This wiki provides step-by-step instructions for deploying the Dia text-to-speech model on NVIDIA Jetson devices, demonstrating its impressive real-time speech synthesis capabilities. It covers dependency installation, configuration adjustments, and includes a practical demonstration using the reComputer J4012 with Jetson Orin NX to showcase high-quality audio generation.
title: Deploy Dia on reComputer Jetson
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
---

# Deploy Dia on reComputer Jetson

## Introduction

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    The rapid advancement of AI-powered speech synthesis has enabled high-quality, real-time text-to-speech (TTS) applications across various domains. Among these, Dia stands out as an efficient and expressive neural speech generation model capable of producing natural-sounding audio with minimal computational overhead. This makes it particularly suitable for deployment on edge devices, such as the NVIDIA Jetson series, which are widely used in embedded AI applications due to their balance of performance and power efficiency.
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    In this article, we explore the process of deploying the Dia TTS model on a Jetson device and demonstrate its performance during inference.
</div>


## Prerequisites

- Jetson device with more than 8GB of memory.
- The jetson device needs to be pre-flashed with the jetpack [6.1](https://wiki.seeedstudio.com/reComputer_Intro/) operating system or later.

:::note
In this wiki, we will accomplish the following tasks using the [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), but you can also try using other Jetson devices.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Getting Started

### Hardware Connection
- Connect the Jetson device to the network, mouse, keyboard, and monitor.

:::note
Of course, you can also remotely access the Jetson device via SSH over the local network.
:::

### Install Dependencies

1. Please download and unzip the appropriate dependencies for your Jetson device from [here](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. On your Jetson device, execute the following command in the terminal to install:

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### Download and Install Dia

1. Clone Dia's source code on your Jetson device using this terminal command:

```bash
git clone https://github.com/nari-labs/dia.git
```

2. Edit the installation file.

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    Comment out the torch, torchaudio, and triton-related settings. Using Vim, open pyproject.toml and disable lines 19–22.
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
Remember to save the changes before exiting.
:::

3. install the running env for dia.

```bash
pip install -e .
pip install numpy==1.26.4
```

4. launch Dia

```bash
export GRADIO_SERVER_NAME=0.0.0.0
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/launch.png" />
</div>

:::info
To facilitate remote access to the Gradio WebUI, I reconfigured the GRADIO_SERVER_NAME environment variable.
:::


## Demonstration

In the demonstration video, I used DeepSeek to generate a dialogue introducing Seeed Studio, and then directly input the text to generate audio with DIA. Even though my prompt didn’t employ any special techniques, the quality of the generated audio was still incredibly impressive.

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

## References
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>