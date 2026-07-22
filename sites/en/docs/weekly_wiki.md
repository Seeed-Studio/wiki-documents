---
description: Weekly Wiki
title: Weekly Wiki
keywords:
  - weekly wiki
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
last_update:
  date: 07/20/2026
  author: Frank
createdAt: '2022-12-20'
updatedAt: '2026-07-20'
---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IndexWiki/logo.png" /></div>

## Greetings

This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it.

✨ For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts👍.

Today is July 20th, and a brand new week has begun! Check out what Seeed Studio did last week!

## Latest Wiki Launched

### [Get Started with MeshTracker X1](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This guide walks you through getting started with the SenseCAP MeshTracker X1 for Meshtastic, covering Bluetooth pairing, LoRa configuration, firmware flashing, GPS and notification settings, as well as troubleshooting common device issues.

</div>

### [Seeed Studio XIAO nRF54LM20A Sense with Arduino](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_arduino/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This section walks you through the required hardware and software preparation for Arduino development. By following the steps below, you will set up your development environment, configure the Arduino IDE, and prepare your XIAO board for programming. Once the setup is complete, you can quickly build, upload, and test the provided example sketches.

</div>

### [Using reCamera Pro's Onboard IMU for Tilt and Shake Detection](https://wiki.seeedstudio.com/recamera_pro_imu_tilt_shake_detection/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This article explains how to use the reCamera Pro's onboard six-axis inertial measurement unit (IMU) — the ICM-42670-P gyroscope — to implement device tilt and shake detection. When the device is tilted or shaken, the system will play corresponding voice warnings through the onboard speaker. Through this tutorial, you will learn how to read raw gyroscope data via the Linux IIO driver, play warning sounds using the ALSA audio driver, and ultimately integrate a complete detection and alert program.

</div>

### [Train Image Classification Models Online Quickly with SenseCraft AI](https://wiki.seeedstudio.com/train_classification_model_online/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-5.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

SenseCraft AI offers a set of browser-based tools for training image classification models. There's no need to set up a local deep learning environment or write training code. Simply prepare images for different categories, and you can complete data collection, model training, performance preview, and device deployment online.

Online Training Entrance: [SenseCraft AI Online Training](https://sensecraft.seeed.cc/ai/training?trainTab=2)

</div>

### [reCamera Pro Acoustic Lab Usage](https://wiki.seeedstudio.com/recamera_pro_acoustic_lab_usage/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="pir" width={500} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

The reCamera Pro features a dedicated local sound training platform called the Acoustic Lab. Through this platform, users can collect environmental sound samples, train custom sound models, and deploy them as sound-triggered events without needing an internet connection. This article provides a detailed walkthrough of each functional module in the Acoustic Lab, covering the complete workflow from audio collection and model training to deployment and usage.

</div>

### [JetPack 7.2 Wireless Module Setup Guide](https://wiki.seeedstudio.com/jetpack72_ax210_ax200_wifi_setup_guide/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This guide explains how to restore Wi-Fi connectivity on Seeed Jetson devices running JetPack 7.2 by installing the required drivers and firmware for Intel AX210/AX200 and Realtek RTL8852BE wireless modules.

</div>

### [Industrial Vision Monitoring on Industrial](https://wiki.seeedstudio.com/industrial_vision_monitoring_on_industrial/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

Industrial vision AI enables real-time worksite safety monitoring by detecting worker presence, PPE compliance, and unsafe behaviors directly at the edge. This wiki demonstrates a reference solution on Seeed Industrial Jetson devices, using a USB camera for live browser streaming, YOLO for person and PPE detection, and a VLM for behavior hazard analysis. Both model types are replaceable, making the repository a flexible starting point for custom deployments.

</div>

## Existing Wiki Updated

### [NFC Usage on Seeed Studio XIAO nRF52840 (Sense)](https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/)

We have updated the [NFC Usage on Seeed Studio XIAO nRF52840 (Sense)](https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/) guide with the new XIAO_nRF52840_NFC library, expanded antenna tuning instructions, setup verification, and practical NFC tag examples.

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
- [weekly wiki on 2026.7.13rd](/Seeed_Elderly/weekly_wiki/2026/wiki260713)

</details>
