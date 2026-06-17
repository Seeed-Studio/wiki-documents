---
description: Weekly Wiki
title: Weekly Wiki
keywords:
  - weekly wiki
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
last_update:
  date: 06/15/2026
  author: Frank
createdAt: '2022-12-20'
updatedAt: '2026-06-15'
---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IndexWiki/logo.png" /></div>

## Greetings

This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it.

✨ For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts👍.

Today is June 15th, and a brand new week has begun! Check out what Seeed Studio did last week!

## Latest Wiki Launched

### [Getting Started with Seeed Studio XIAO nRF54LM20A Sense](https://wiki.seeedstudio.com/xiao_nrf54lm20a_getting_started/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

Seeed Studio XIAO nRF54LM20A Sense is a compact, ultra-low-power wireless development board built around Nordic Semiconductor’s nRF54LM20A SoC. It combines a 128 MHz Arm Cortex-M33 processor, 512 KB RAM, 2 MB on-chip NVM, multiprotocol 2.4 GHz wireless connectivity, onboard IMU, digital microphone, 8MB external flash, IPEX antenna connector, and nPM1300 PMIC for advanced battery-powered IoT, wearable, smart sensing, and edge AI applications.

</div>

### [Wio-S3 Wireless Module Introduction](https://wiki.seeedstudio.com/wio-s3_wireless_module_introduction/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

[Wio-S3 wireless module](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) is embedded with the [ESP32-S3R8](https://www.espressif.com/en/products/socs/esp32-s3/) dual core Xtensa® LX7 MCU and the long range [SX1262 LoRa chip](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262). It supports LoRaWAN frequency plan on EU868, US915 and more, as well as **2.4GHz Wi-Fi and BLE 5.0 connectivity**. It integrates 16MB Flash and 8MB PSRAM, making it ideal for edge AI processing.

</div>

### [Driving E-Paper and SD Card with XIAO nRF54LM20A Sense](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_epaper_and_sdcard/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/epaper_1.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

The XIAO nRF54LM20A supports development with peripheral modules of the XIAO series and is fully compatible with the entire development ecosystem of XIAO products. This article demonstrates its ecosystem compatibility using the ePaper driver and MicroSD card read/write functions of the XIAO series as examples.

</div>

### [AI Voice Interaction Demo Based on reCamera](https://wiki.seeedstudio.com/ai_voice_assitant_with_recamera/)

<div align="center">
  <video width="600" controls>
    <source src="https://raw.githubusercontent.com/hunter5299/Node-Red-project/main/reCamera_ai_voice_assitant/testVedioFinal.mp4" type="video/mp4" />
    Your browser does not support video playback.
  </video>
</div>

<div style={{ textAlign: "justify" }}>

This project demonstrates a way to interact with reCamera through natural language. After visual reasoning triggers audio recording, reCamera sends the recording to the server, processes it through the complete **STT (Speech-to-Text) → LLM (Large Language Model Reasoning) → TTS (Text-to-Speech)** pipeline, and the synthesized voice is returned to reCamera for playback, enabling natural language conversation.

</div>

### [RTSP to WebRTC Real-Time Video Streaming with reCamera](https://wiki.seeedstudio.com/rtsp_to_webrtc_with_recamera/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This project streams reCamera's video through the **RTSP protocol**, transmits inference results to the PC via the **mqtt out** node, then merges the RTSP stream with inference results on the PC side and converts it to **WebRTC** format, allowing any browser to play the inference video stream in real time without plugins.

</div>

### [ESPHome Cookbook: RTC, SD Card & Microphone (reTerminal E Series)](https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_rtc_sd_microphone/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This project uses **ESPHome** to enable reTerminal E Series' onboard **PCF8563 RTC**, **microSD card detection**, and **PDM microphone**, synchronizes RTC time with **Home Assistant**, displays real-time status on the ePaper screen, and provides ready-to-use YAML examples for **reTerminal E1001** and **E1002**.

</div>

### [Real-Time QR Code Recognition on reCamera](https://wiki.seeedstudio.com/recamera_qrcode_udp/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This example demonstrates how to build a **real-time QR code recognition system** using reCamera. The system captures live video frames through the camera, decodes QR codes using the **ZXing** library, and pushes the video frames (JPEG) along with the recognition results to a PC via **UDP** for display.

</div>

### [JetPack 7.2 Deep Dive: What Changes for Jetson AGX Orin Inference?](https://wiki.seeedstudio.com/jetpack72_deep_dive/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/flash-page.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This FAQ summarizes why JetPack 7.2 matters for Jetson AGX Orin users, what Seeed measured when comparing JetPack 7.2 with JetPack 6.2, and how to evaluate an upgrade path with Seeed Jetson DevelopTool.

</div>

<!-- ## Existing Wiki Updated

### [Meshtastic Firmware Source Code Practical Tutorial](https://wiki.seeedstudio.com/meshtastic_source_code_practical_tutorial_solar_node/)

We have added a new project: [Project B – XIAO ESP32S3 Environmental Telemetry Node](https://wiki.seeedstudio.com/meshtastic_source_code_practical_tutorial_solar_node/#project-b-xiao-esp32s3-environmental-telemetry-node). -->

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

</details>
