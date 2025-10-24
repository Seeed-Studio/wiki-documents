---
description: This wiki provides a tutorial on how to use Llava on the reComputer Industrial J4012 to monitor your warehouse and control the warning light colors via RS485, helping to ensure warehouse safety.
title: Use Llava to guard your warehouse
keywords:
- Multimodal 
- LLava
- RS485
- VLM
image: https://files.seeedstudio.com/wiki/reComputer-Industrial/reComputer-Industrial-J4012.webp
slug: /vlm
last_update:
  date: 10/10/2025
  author: Jiahao Li
---

# How to use LLaVa on the reComputer Industrial J4012 to monitor your warehouse

## Introduction

This wiki describes deploying a VLM (Visual Learning Model) on the [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), using a USB camera as the input for the VLM. When the system detects a safe situation, the signal light will turn green via RS485 control. In dangerous situations, such as a fire or the presence of someone with a weapon, the signal light will turn yellow. When the light sensor detects the signal from the warehouse light being turned off via RS485, the signal light will turn red.

## Prerequisites

<div align="center">
    <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

> **Note on Required Components:**
> In addition to the Jetson, the following RS485 components are required:
>
> - An RS485 hub to split one interface into two.
> - An RS485 color-changing light.
> - An RS485 light sensor.

## Initialize system environment

1. After installing the initial system with JP6, you need to check the installation of `CUDA` and other libraries. You can verify and install them by running `sudo apt-get install nvidia-jetpack`.

2. Install [ollama](https://ollama.com/download) use command like below:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

3. Run [LLaVa](https://ollama.com/library/llava-llama3) with ollama like below:

```bash
ollama run llava-llama3:8b
```

## Install project

1. Use command like below to install uv

```bash
pip install uv
```

2. Clone project

```bash
git clone https://github.com/Seeed-Projects/VLM-Guard.git
```

3. Use uv to sync the environment

```bash
cd VLM_Guard
uv sync
source .venv/bin/activate
```

## Run project

1. Use the script below to run the project.

```bash
./start_demo.sh
```

2. Open a web browser, then input `localhost:5002` to open the application interface

## Result

As demonstrated in the video, the warehouse light indicates green during normal operations, yellow in dangerous situations such as when someone is holding a knife, and red when the light sensor detects no light—signaling a failure in the warehouse lighting, while also allowing interaction with historical data and queries via the VLM model for desired information.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/J0sS-1zQid8?list=PLpH_4mf13-A1EnNUgEMTsy2PxejFllSGM" title="Build a Local AI Watchdog for Industrial Safety with reComputer J4012 powered by NVIDIA Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
