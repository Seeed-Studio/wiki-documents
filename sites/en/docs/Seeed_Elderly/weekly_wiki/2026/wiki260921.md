---
description: Weekly Wiki
title: Weekly Wiki
keywords:
  - weekly wiki
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
last_update:
  date: 09/21/2026
  author: Frank
createdAt: '2022-12-20'
updatedAt: '2026-09-21'
---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IndexWiki/logo.png" /></div>

## Greetings

This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it.

✨ For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts👍.

Today is September 21st, and a brand new week has begun! Check out what Seeed Studio did last week!

## Latest Wiki Launched

### [Control reBot Arm using voice with reSpeaker Clip](https://wiki.seeedstudio.com/control_rebot_arm_using_voice_with_respeaker_clip/)

<div class="video-container">
  <iframe width="800" height="400" src="https://www.youtube.com/embed/OdBwXYKzoio" title="ReSpeaker Lite with XIAO ESP32S3 Home Assistant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>

This wiki explains how to control the reBot Arm B601-DM using natural voice commands with reSpeaker Clip. It covers real-time audio streaming, voice activity detection, speech-to-text, and LLM-based intent recognition. You will also learn how to set up the project and run voice-controlled actions on either a simulated or real robotic arm.

</div>

### [reComputer Rugged J401 for Industrial Vision](http://localhost:3000/ai_robotics_recomputer_rugged_j401_cv_demo)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki introduces several ways computer vision can be used on industrial forklifts. The example uses reComputer Rugged J401 as the edge controller. Its IP66 enclosure, M12 connectors, vibration resistance, four PoE ports, and Jetson Orin NX allow it to sit close to the cameras and run the vision workloads locally.

</div>

### [Deploy TensorRT-Model-Connect on Jetson AGX Orin](https://wiki.seeedstudio.com/ai_robotics_deploy_tensorrt_model_connect_on_jetson/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TRTMC/trtmc_wiki_cover.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki shows how to run [NVIDIA TensorRT-Model-Connect](https://github.com/NVIDIA/TensorRT-Model-Connect) (TRTMC) on a Seeed reComputer powered by **Jetson AGX Orin**. After the native runtime is built, the path is short: start from a Hugging Face checkpoint, produce a TensorRT `.bundle` on the device, and run text generation. There is no separate x86 host and no ONNX export step.

</div>

### [Deploy ONVIF on reCamera](https://wiki.seeedstudio.com/recamera_onvif/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/guides/image-13.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki explains how to deploy ONVIF on reCamera for local network discovery and video streaming. It covers deploying the ONVIF service with SenseCraft Solution and verifying the RTSP video stream. You will also learn how to connect reCamera to ONVIF-compatible clients such as Home Assistant, Frigate, NVRs, and VMS platforms.

</div>

### [AI Image Transmission over MeshCore with MeshTracker X1](https://wiki.seeedstudio.com/meshcore_ai_image_transmission_x1/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png" alt="MeshCore Open Image Transmission" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki explains how to transmit images over a MeshCore network using MeshTracker X1 and MeshCore Open. It uses AI-based ultra-low bitrate image compression to reduce images to compact data that can be transmitted over low-bandwidth LoRa mesh networks and reconstructed on the receiving device. This makes visual information sharing possible for outdoor exploration, emergency response, remote monitoring, and other off-grid scenarios.

The same Image Transmission feature is also available for [SenseCAP Card Tracker T1000-E](https://wiki.seeedstudio.com/meshcore_ai_image_transmission_t1000e/), [Wio Tracker L1](https://wiki.seeedstudio.com/meshcore_ai_image_transmission_l1/), and [Wio Tracker L2](https://wiki.seeedstudio.com/meshcore_ai_image_transmission_l2/).

</div>

### [EasySkyMesh IoT Firmware for Wio Tracker L1](https://wiki.seeedstudio.com/easyskymesh_wio_tracker_l1/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki explains how to install and use EasySkyMesh IoT firmware on the Wio Tracker L1. It covers firmware flashing, power-saving features, and configuration for different MeshCore roles. You will also learn how to connect supported I2C sensors for low-power monitoring and IoT applications.

</div>

<!-- ## Existing Wiki Updated

### [NFC Usage on Seeed Studio XIAO nRF52840 (Sense)](https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/)

We have updated the [NFC Usage on Seeed Studio XIAO nRF52840 (Sense)](https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/) guide with the new XIAO_nRF52840_NFC library, expanded antenna tuning instructions, setup verification, and practical NFC tag examples. -->

## The Efforts of Contributor

<!-- ### [Building a Voice-Interactive Chatbot with Local LLMs, STT, and TTS](https://wiki.seeedstudio.com/local_chatbot_recomputer/)

This project brings the dream of a **fully voice-interactive AI assistant** to life — running entirely **on local hardware**, without reliance on cloud services.  
By combining **Speech-to-Text (STT)**, **Text-to-Speech (TTS)**, and **Local Large Language Models (LLMs)** using **Ollama**, the system enables natural, private, and real-time conversations between humans and machines. The entire setup runs inside Docker containers and can be deployed on **NVIDIA Jetson devices**, **edge computers**, or any Linux-based system with GPU acceleration. -->

- Check on [GitHub](https://github.com/orgs/Seeed-Studio/projects/6) for more information.
- We will be really appreciate if you can [share your ideas](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35179519) with us!

## Past Weekly wiki

<details>
<summary>Click here</summary>

<!-- - [weekly wiki on 2024.1.08th](/Seeed_Elderly/weekly_wiki/2024/wiki240108)
- [weekly wiki on 2024.1.15th](/Seeed_Elderly/weekly_wiki/2024/wiki240115)
- [weekly wiki on 2024.1.22nd](/Seeed_Elderly/weekly_wiki/2024/wiki240122)
- [weekly wiki on 2024.1.29th](/Seeed_Elderly/weekly_wiki/2024/wiki240129)
- [weekly wiki on 2024.2.19th](/Seeed_Elderly/weekly_wiki/2024/wiki240219)
- [weekly wiki on 2024.2.26th](/Seeed_Elderly/weekly_wiki/2024/wiki240226)
- [weekly wiki on 2024.3.04th](/Seeed_Elderly/weekly_wiki/2024/wiki240304)
- [weekly wiki on 2024.3.11th](/Seeed_Elderly/weekly_wiki/2024/wiki240311)
- [weekly wiki on 2024.3.18th](/Seeed_Elderly/weekly_wiki/2024/wiki240318)
- [weekly wiki on 2024.3.25th](/Seeed_Elderly/weekly_wiki/2024/wiki240325)
- [weekly wiki on 2024.4.01st](/Seeed_Elderly/weekly_wiki/2024/wiki240401)
- [weekly wiki on 2024.4.08th](/Seeed_Elderly/weekly_wiki/2024/wiki240408)
- [weekly wiki on 2024.4.15th](/Seeed_Elderly/weekly_wiki/2024/wiki240415)
- [weekly wiki on 2024.4.22nd](/Seeed_Elderly/weekly_wiki/2024/wiki240422)
- [weekly wiki on 2024.4.29th](/Seeed_Elderly/weekly_wiki/2024/wiki240429)
- [weekly wiki on 2024.5.06th](/Seeed_Elderly/weekly_wiki/2024/wiki240506)
- [weekly wiki on 2024.5.13th](/Seeed_Elderly/weekly_wiki/2024/wiki240513)
- [weekly wiki on 2024.5.20th](/Seeed_Elderly/weekly_wiki/2024/wiki240520)
- [weekly wiki on 2024.5.27th](/Seeed_Elderly/weekly_wiki/2024/wiki240527)
- [weekly wiki on 2024.6.03rd](/Seeed_Elderly/weekly_wiki/2024/wiki240603)
- [weekly wiki on 2024.6.10th](/Seeed_Elderly/weekly_wiki/2024/wiki240610)
- [weekly wiki on 2024.6.17th](/Seeed_Elderly/weekly_wiki/2024/wiki240617)
- [weekly wiki on 2024.6.24th](/Seeed_Elderly/weekly_wiki/2024/wiki240624)
- [weekly wiki on 2024.7.01st](/Seeed_Elderly/weekly_wiki/2024/wiki240701)
- [weekly wiki on 2024.7.08th](/Seeed_Elderly/weekly_wiki/2024/wiki240708)
- [weekly wiki on 2024.7.16th](/Seeed_Elderly/weekly_wiki/2024/wiki240716)
- [weekly wiki on 2024.7.22nd](/Seeed_Elderly/weekly_wiki/2024/wiki240722)
- [weekly wiki on 2024.7.29th](/Seeed_Elderly/weekly_wiki/2024/wiki240729)
- [weekly wiki on 2024.8.05th](/Seeed_Elderly/weekly_wiki/2024/wiki240805)
- [weekly wiki on 2024.8.12th](/Seeed_Elderly/weekly_wiki/2024/wiki240812)
- [weekly wiki on 2024.8.19th](/Seeed_Elderly/weekly_wiki/2024/wiki240819)
- [weekly wiki on 2024.8.26th](/Seeed_Elderly/weekly_wiki/2024/wiki240826)
- [weekly wiki on 2024.9.02nd](/Seeed_Elderly/weekly_wiki/2024/wiki240902)
- [weekly wiki on 2024.9.09th](/Seeed_Elderly/weekly_wiki/2024/wiki240909)
- [weekly wiki on 2024.9.16th](/Seeed_Elderly/weekly_wiki/2024/wiki240918)
- [weekly wiki on 2024.9.23rd](/Seeed_Elderly/weekly_wiki/2024/wiki240923)
- [weekly wiki on 2024.9.30th](/Seeed_Elderly/weekly_wiki/2024/wiki240930)
- [weekly wiki on 2024.10.07th](/Seeed_Elderly/weekly_wiki/2024/wiki241007)
- [weekly wiki on 2024.10.14th](/Seeed_Elderly/weekly_wiki/2024/wiki241014)
- [weekly wiki on 2024.10.21th](/Seeed_Elderly/weekly_wiki/2024/wiki241021)
- [weekly wiki on 2024.10.28th](/Seeed_Elderly/weekly_wiki/2024/wiki241028)
- [weekly wiki on 2024.11.04th](/Seeed_Elderly/weekly_wiki/2024/wiki241104)
- [weekly wiki on 2024.11.11th](/Seeed_Elderly/weekly_wiki/2024/wiki241111)
- [weekly wiki on 2024.11.18th](/Seeed_Elderly/weekly_wiki/2024/wiki241118)
- [weekly wiki on 2024.11.25th](/Seeed_Elderly/weekly_wiki/2024/wiki241125)
- [weekly wiki on 2024.12.02nd](/Seeed_Elderly/weekly_wiki/2024/wiki241202)
- [weekly wiki on 2024.12.09th](/Seeed_Elderly/weekly_wiki/2024/wiki241209)
- [weekly wiki on 2024.12.16th](/Seeed_Elderly/weekly_wiki/2024/wiki241216)
- [weekly wiki on 2024.12.23rd](/Seeed_Elderly/weekly_wiki/2024/wiki241223)
- [weekly wiki on 2024.12.30th](/Seeed_Elderly/weekly_wiki/2024/wiki241230) -->
- [weekly wiki on 2025.1.06th](/Seeed_Elderly/weekly_wiki/2025/wiki250106)
- [weekly wiki on 2025.1.13th](/Seeed_Elderly/weekly_wiki/2025/wiki250113)
- [weekly wiki on 2025.1.20th](/Seeed_Elderly/weekly_wiki/2025/wiki250120)
- [weekly wiki on 2025.1.27th](/Seeed_Elderly/weekly_wiki/2025/wiki250127)
- [weekly wiki on 2025.2.10th](/Seeed_Elderly/weekly_wiki/2025/wiki250210)
- [weekly wiki on 2025.2.17th](/Seeed_Elderly/weekly_wiki/2025/wiki250217)
- [weekly wiki on 2025.2.24th](/Seeed_Elderly/weekly_wiki/2025/wiki250224)
- [weekly wiki on 2025.3.03rd](/Seeed_Elderly/weekly_wiki/2025/wiki250303)
- [weekly wiki on 2025.3.10th](/Seeed_Elderly/weekly_wiki/2025/wiki250310)
- [weekly wiki on 2025.3.17th](/Seeed_Elderly/weekly_wiki/2025/wiki250317)
- [weekly wiki on 2025.3.24th](/Seeed_Elderly/weekly_wiki/2025/wiki250324)
- [weekly wiki on 2025.3.31st](/Seeed_Elderly/weekly_wiki/2025/wiki250331)
- [weekly wiki on 2025.4.07th](/Seeed_Elderly/weekly_wiki/2025/wiki250407)
- [weekly wiki on 2025.4.14th](/Seeed_Elderly/weekly_wiki/2025/wiki250414)
- [weekly wiki on 2025.4.21st](/Seeed_Elderly/weekly_wiki/2025/wiki250421)
- [weekly wiki on 2025.4.28th](/Seeed_Elderly/weekly_wiki/2025/wiki250428)
- [weekly wiki on 2025.5.05th](/Seeed_Elderly/weekly_wiki/2025/wiki250505)
- [weekly wiki on 2025.5.12th](/Seeed_Elderly/weekly_wiki/2025/wiki250512)
- [weekly wiki on 2025.5.19th](/Seeed_Elderly/weekly_wiki/2025/wiki250519)
- [weekly wiki on 2025.5.26th](/Seeed_Elderly/weekly_wiki/2025/wiki250526)
- [weekly wiki on 2025.6.02nd](/Seeed_Elderly/weekly_wiki/2025/wiki250602)
- [weekly wiki on 2025.6.09th](/Seeed_Elderly/weekly_wiki/2025/wiki250609)
- [weekly wiki on 2025.6.16th](/Seeed_Elderly/weekly_wiki/2025/wiki250616)
- [weekly wiki on 2025.6.23rd](/Seeed_Elderly/weekly_wiki/2025/wiki250623)
- [weekly wiki on 2025.6.30th](/Seeed_Elderly/weekly_wiki/2025/wiki250630)
- [weekly wiki on 2025.7.07th](/Seeed_Elderly/weekly_wiki/2025/wiki250707)
- [weekly wiki on 2025.7.14th](/Seeed_Elderly/weekly_wiki/2025/wiki250714)
- [weekly wiki on 2025.7.21st](/Seeed_Elderly/weekly_wiki/2025/wiki250721)
- [weekly wiki on 2025.7.28th](/Seeed_Elderly/weekly_wiki/2025/wiki250728)
- [weekly wiki on 2025.8.04th](/Seeed_Elderly/weekly_wiki/2025/wiki250804)
- [weekly wiki on 2025.8.11th](/Seeed_Elderly/weekly_wiki/2025/wiki250811)
- [weekly wiki on 2025.8.18th](/Seeed_Elderly/weekly_wiki/2025/wiki250818)
- [weekly wiki on 2025.8.25th](/Seeed_Elderly/weekly_wiki/2025/wiki250825)
- [weekly wiki on 2025.9.01st](/Seeed_Elderly/weekly_wiki/2025/wiki250901)
- [weekly wiki on 2025.9.08th](/Seeed_Elderly/weekly_wiki/2025/wiki250908)
- [weekly wiki on 2025.9.15th](/Seeed_Elderly/weekly_wiki/2025/wiki250915)
- [weekly wiki on 2025.9.22nd](/Seeed_Elderly/weekly_wiki/2025/wiki250922)
- [weekly wiki on 2025.9.29th](/Seeed_Elderly/weekly_wiki/2025/wiki250929)
- [weekly wiki on 2025.10.13th](/Seeed_Elderly/weekly_wiki/2025/wiki251013)
- [weekly wiki on 2025.10.20th](/Seeed_Elderly/weekly_wiki/2025/wiki251020)
- [weekly wiki on 2025.10.27th](/Seeed_Elderly/weekly_wiki/2025/wiki251027)
- [weekly wiki on 2025.11.03rd](/Seeed_Elderly/weekly_wiki/2025/wiki251103)
- [weekly wiki on 2025.11.10th](/Seeed_Elderly/weekly_wiki/2025/wiki251110)
- [weekly wiki on 2025.11.17th](/Seeed_Elderly/weekly_wiki/2025/wiki251117)
- [weekly wiki on 2025.11.24th](/Seeed_Elderly/weekly_wiki/2025/wiki251124)
- [weekly wiki on 2025.12.01st](/Seeed_Elderly/weekly_wiki/2025/wiki251201)
- [weekly wiki on 2025.12.08th](/Seeed_Elderly/weekly_wiki/2025/wiki251208)
- [weekly wiki on 2025.12.15th](/Seeed_Elderly/weekly_wiki/2025/wiki251215)
- [weekly wiki on 2025.12.22nd](/Seeed_Elderly/weekly_wiki/2025/wiki251222)
- [weekly wiki on 2025.12.29th](/Seeed_Elderly/weekly_wiki/2025/wiki251229)
- [weekly wiki on 2026.1.05th](/Seeed_Elderly/weekly_wiki/2026/wiki260105)
- [weekly wiki on 2026.1.12th](/Seeed_Elderly/weekly_wiki/2026/wiki260112)
- [weekly wiki on 2026.1.19th](/Seeed_Elderly/weekly_wiki/2026/wiki260119)
- [weekly wiki on 2026.1.26th](/Seeed_Elderly/weekly_wiki/2026/wiki260126)
- [weekly wiki on 2026.2.02nd](/Seeed_Elderly/weekly_wiki/2026/wiki260202)
- [weekly wiki on 2026.2.09th](/Seeed_Elderly/weekly_wiki/2026/wiki260209)
- [weekly wiki on 2026.3.02nd](/Seeed_Elderly/weekly_wiki/2026/wiki260302)
- [weekly wiki on 2026.3.09th](/Seeed_Elderly/weekly_wiki/2026/wiki260309)
- [weekly wiki on 2026.3.16th](/Seeed_Elderly/weekly_wiki/2026/wiki260316)
- [weekly wiki on 2026.3.23rd](/Seeed_Elderly/weekly_wiki/2026/wiki260323)
- [weekly wiki on 2026.3.30th](/Seeed_Elderly/weekly_wiki/2026/wiki260330)
- [weekly wiki on 2026.4.06th](/Seeed_Elderly/weekly_wiki/2026/wiki260406)
- [weekly wiki on 2026.4.13th](/Seeed_Elderly/weekly_wiki/2026/wiki260413)
- [weekly wiki on 2026.4.20th](/Seeed_Elderly/weekly_wiki/2026/wiki260420)
- [weekly wiki on 2026.4.27th](/Seeed_Elderly/weekly_wiki/2026/wiki260427)
- [weekly wiki on 2026.5.11th](/Seeed_Elderly/weekly_wiki/2026/wiki260511)
- [weekly wiki on 2026.5.18th](/Seeed_Elderly/weekly_wiki/2026/wiki260518)
- [weekly wiki on 2026.5.25th](/Seeed_Elderly/weekly_wiki/2026/wiki260525)
- [weekly wiki on 2026.6.01st](/Seeed_Elderly/weekly_wiki/2026/wiki260601)
- [weekly wiki on 2026.6.08th](/Seeed_Elderly/weekly_wiki/2026/wiki260608)
- [weekly wiki on 2026.6.15th](/Seeed_Elderly/weekly_wiki/2026/wiki260615)
- [weekly wiki on 2026.6.22nd](/Seeed_Elderly/weekly_wiki/2026/wiki260622)
- [weekly wiki on 2026.6.29th](/Seeed_Elderly/weekly_wiki/2026/wiki260629)
- [weekly wiki on 2026.7.06th](/Seeed_Elderly/weekly_wiki/2026/wiki260706)
- [weekly wiki on 2026.7.13th](/Seeed_Elderly/weekly_wiki/2026/wiki260713)
- [weekly wiki on 2026.7.20th](/Seeed_Elderly/weekly_wiki/2026/wiki260720)
- [weekly wiki on 2026.7.27th](/Seeed_Elderly/weekly_wiki/2026/wiki260727)
- [weekly wiki on 2026.8.03rd](/Seeed_Elderly/weekly_wiki/2026/wiki260803)
- [weekly wiki on 2026.8.10th](/Seeed_Elderly/weekly_wiki/2026/wiki260810)
- [weekly wiki on 2026.8.17th](/Seeed_Elderly/weekly_wiki/2026/wiki260817)
- [weekly wiki on 2026.8.24th](/Seeed_Elderly/weekly_wiki/2026/wiki260824)
- [weekly wiki on 2026.8.31st](/Seeed_Elderly/weekly_wiki/2026/wiki260831)
- [weekly wiki on 2026.9.07th](/Seeed_Elderly/weekly_wiki/2026/wiki260907)
- [weekly wiki on 2026.9.14th](/Seeed_Elderly/weekly_wiki/2026/wiki260914)

</details>
