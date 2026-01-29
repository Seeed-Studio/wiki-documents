---
description: Weekly Wiki
title: Weekly Wiki
keywords:
- weeely wiki
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
last_update:
  date: 01/26/2026
  author: Frank
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IndexWiki/logo.png" /></div>

## Greetings

This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it.

✨ For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts👍.

Today is January 26th, and a brand new week has begun! Check out what Seeed Studio did last week!

## Latest Wiki Launched

### [Deploy local voice LLM on reComputer Mini for Reachy Mini](https://wiki.seeedstudio.com/local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk/)

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>

Double Mini! This project will build a fully localized, low-latency, and high-privacy voice interactive robotic assistant system. Centered around the reComputer Mini J501 edge computing device, it deploys local speech recognition, large language model, and speech synthesis services. Using the open-source robotic platform Reachy Mini as the physical terminal for human-computer interaction, it achieves an embodied intelligent interactive experience that is perceptive, conversational, and actionable.

</div>

### [Deploy NVBlox with Orbbec Camera on Jetson AGX Orin](https://wiki.seeedstudio.com/deploy_nvblox_jetson_agx_orin/)

<p style={{textAlign: 'center'}}><img src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) is a high-performance GPU-accelerated 3D mapping framework developed by NVIDIA for real-time robotic perception. Unlike monocular depth estimation models, NVBlox consumes true depth input from RGB-D cameras or stereo cameras to construct accurate 3D scene representations. This wiki demonstrates how to deploy Isaac ROS NVBlox on **Jetson AGX Orin** with **ROS 2** integration, using an **Orbbec RGB-D camera** and a mobile robot platform to achieve a fully on-device perception and navigation pipeline.

</div>

### [Deploy Whisper on Raspberry Pi AI box](https://wiki.seeedstudio.com/deploy_whisper_on_raspberry_pi_ai_box/)

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/openai/whisper/main/approach.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

[Whisper](https://github.com/openai/whisper) is a versatile, state-of-the-art Automatic Speech Recognition (ASR) and speech processing model developed by OpenAI. Unlike traditional speech-to-text systems, Whisper was trained on 680,000 hours of multilingual and multitask supervised data collected from the web. This massive and diverse dataset makes the model exceptionally robust to accents, background noise, and technical terminology. This guide provides a comprehensive walkthrough for the deployment and utilization of [Whisper](https://github.com/openai/whisper) on the Raspberry Pi AI Box.

</div>

### [reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3](https://wiki.seeedstudio.com/respeaker_xvf3800_xiao_getting_started/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

These two guides demonstrate how to use the **ReSpeaker XVF3800 USB Mic Array** together with the **Seeed Studio XIAO ESP32S3** to build embedded audio applications, covering both raw audio streaming and on-device voice intelligence features.

- **[HTTP Audio Streaming](https://wiki.seeedstudio.com/respeaker_xvf3800_xiao_http_audio_stream/)**  
  This guide shows how to capture audio from the XVF3800 using the XIAO ESP32S3, record 5 seconds of 16 kHz stereo 32-bit PCM audio, store it in PSRAM, and upload the audio over Wi-Fi to a Python-based Flask HTTP server as a standard WAV file.

- **[DoA and VAD](https://wiki.seeedstudio.com/respeaker_xvf3800_xiao_doa_vad/)**  
  This guide focuses on leveraging the XVF3800’s built-in **Voice Activity Detection (VAD)** and **Direction of Arrival (DoA)** capabilities. These inference results are computed internally by the XMOS XVF3800 and can be accessed by the host MCU over I2C, enabling features such as wake-on-voice, sound source localization, and direction-aware feedback without processing raw audio data on the MCU.

</div>

### [Seeed Studio XIAO ESP32-C5 Wi-Fi Throughput Testing Tool](https://wiki.seeedstudio.com/xaio_esp32c5_wifi_throughput_tester/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

The Seeed Studio XIAO ESP32-C5 features the ESP32-C5 as its core processor.The ESP32-C5 is the industry's first RISC-V microcontroller to support dual-band Wi-Fi 6 (802.11ax) in both the 2.4GHz and 5GHz bands. Boasting exceptional wireless performance, it holds significant potential for applications in smart homes, the Internet of Things (IoT), and various other scenarios. Next, we will use a Wi-Fi throughput testing tool to visually demonstrate the powerful data throughput capabilities of the XIAO ESP32-C5 based on Wi-Fi 6, across both the 2.4GHz and 5GHz frequency bands!

</div>

### [Deploying ESPresense on Seeed Studio XIAO ESP32-C3 with Home Assistant](https://wiki.seeedstudio.com/xiao-esp32c3-espresense/)

<div style={{ textAlign: "justify" }}>

This document describes how to integrate the open-source Bluetooth presence detection system, **ESPresense**, with the **Seeed Studio XIAO ESP32-C3**. The presence detection node based on the XIAO ESP32-C3 can work with the [MQTT Room component](https://www.home-assistant.io/components/sensor.mqtt_room/) of Home Assistant to enable indoor positioning.

</div>

### [Connecting SenseCAP T2000 Tracker to AWS IoT Core](https://wiki.seeedstudio.com/sensecap_t2000_tracker_aws/)

<div style={{ textAlign: "justify" }}>

This document describes how to connect the SenseCAP T2000 Tracker to AWS IoT Core. By following this guide, you will create and configure the required AWS IoT resources and enable secure and reliable data transmission from the SenseCAP T2000 to the AWS cloud for further data processing, storage, and visualization.

</div>

### [Connecting SenseCAP T2000 Tracker to Helium](https://wiki.seeedstudio.com/sensecap_t2000_tracker_helium/)

<div style={{ textAlign: "justify" }}>

This document explains how to connect the SenseCAP T2000 Tracker to the Helium LoRaWAN® network. By following this guide, you will configure the device and Helium network settings to enable the T2000 to join Helium and transmit tracking data over the decentralized LoRaWAN infrastructure for further processing and use.

</div>

<!-- ## Existing Wiki Updated

### [Deploying AI Models on SenseCAP A1102 Using SenseCraft AI](https://wiki.seeedstudio.com/deploy_ai_with_a1102/)

We have added a [Custom AI Model Deploying Process](https://wiki.seeedstudio.com/deploy_ai_with_a1102/#custom-ai-model-deploying-process). -->

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

</details>
