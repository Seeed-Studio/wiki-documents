---
description: This article describes how to deploy Live VLM WebUI on a reComputer Jetson device to enable real-time Vision-Language Model (VLM) interaction and evaluation. Testing shows that the entire workflow can run on hardware with 16GB of memory, but the inference speed is relatively slow.
title: Deploy Live VLM WebUI on reComputer Jetson
keywords:
- reComputer
- Jetson
- VLM
- Live VLM WebUI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /deploy_live_vlm_webui_on_jetson
last_update:
  date: 12/26/2025
  author: Youjiang
---


# Deploy Live VLM WebUI on reComputer Jetson

## Introduction

Live VLM WebUI is a universal web interface for real-time Vision Language Model interaction and benchmarking. It can stream your webcam to any VLM and get live AI-powered analysis - perfect for testing models, benchmarking performance, and exploring vision AI capabilities across multiple domains and hardware platforms.

This wiki will show you how to deploy Live VLM WebUI on the reComputer Super J4012.

<!-- <div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/webui.png" />
</div> -->


## Prerequisites
- reComputer Super J4012
- USB Camera

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
        <th> reComputer Super J4012 </th>
        <th> USB Camera </th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Please ensure that your Jetson device has the Jetpack 6.2 operating system installed.
:::

:::info
Before configuring the software, please connect the USB camera to the Type-A port of the reComputer Super J4012.
:::


## Deploy Live VLM WebUI

Step1. Install and run ollama in reComputer Jetson.

Run the following command in the terminal window on reComputer Jetson.

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2-vision:11b
```
:::note
The model download will take approximately 10 minutes. Please wait patiently.
:::

Step2.  Install the Live VLM WebUI.

Run the following command in the terminal window on reComputer Jetson.

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

Step3.Configure and launch Live VLM WebUI.

If the application runs successfully, you can open the WebUI by entering `https://localhost:8090` in the browser.


- In VLM API Configuration, select the `ollama` inference engine and the `llama3.2-vision` model you just downloaded.
- In Camera and App Control, select `USB Camera`.
- After clicking the Run button, you can wait for the inference results from the backend.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/config.png" />
</div>

## Effect Demonstration

The entire workflow can run normally on a reComputer Super J4012 device with 16GB of memory. However, during actual testing, it was found that the inference speed is very slow.

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/GrdIRkmiXUc" title="Deploy Live LLM WebUI on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References
- https://ollama.com/download/linux
- https://github.com/NVIDIA-AI-IOT/live-vlm-webui


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