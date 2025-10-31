---
description: This wiki guides you through deploying DeepSeek models on reComputer Jetson devices using Ollama, showcasing efficient AI inference with minimal power consumption.
title: Quickly Deploy DeepSeek on reComputer Jetson
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /deploy_deepseek_on_jetson
last_update:
  date: 02/08/2025
  author: Youjiang
---


# Quickly Deploy DeepSeek on reComputer Jetson

## Introduction

DeepSeek is a cutting-edge AI model suite optimized for efficiency, accuracy, and real-time processing. With advanced optimization for edge computing, DeepSeek enables fast, low-latency AI inference directly on Jetson devices, reducing dependency on cloud computing while maximizing performance.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

This wiki provides a step-by-step guide to deploying [DeepSeek](https://www.deepseek.com/) models on reComputer Jetson devices for efficient AI inference on the edge.

## Prerequisites

- Jetson device with more than 8GB of memory.
- The jetson device needs to be pre-flashed with the jetpack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/) operating system or later.

:::note
In this wiki, we will accomplish the following tasks using the [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), but you can also try using other Jetson devices.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Getting Started

### Hardware Connection
- Connect the Jetson device to the network, mouse, keyboard, and monitor.

:::note
Of course, you can also remotely access the Jetson device via SSH over the local network.
:::

### Install Ollama Inference Engine

Ollama is a lightweight and efficient inference engine designed for running large language models (LLMs) locally with minimal setup. It simplifies the deployment of AI models by providing an easy-to-use interface and optimized runtime for various hardware configurations, including Jetson devices.

To install Ollama, open the terminal window on the Jetson device and run the following command:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

This script will automatically download and set up Ollama on your system, enabling seamless local inference for AI applications.

### Load and Run DeepSeek

Ollama now supports various versions of the DeepSeek models, allowing us to deploy different model sizes based on our needs. For demonstration purposes, we will use the default DeepSeek-R1 7B model.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
This command downloads and prepares the DeepSeek model for local inference using Ollama.
Once the model has finished loading, you can enter your query in the terminal window.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## Effect Demonstration

In the demonstration video, the Jetson device operates at just 20W yet achieves an impressive inference speed.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html


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