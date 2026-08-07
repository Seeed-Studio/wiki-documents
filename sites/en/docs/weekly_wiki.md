---
description: Weekly Wiki
title: Weekly Wiki
keywords:
  - weekly wiki
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
last_update:
  date: 08/03/2026
  author: Frank
createdAt: '2022-12-20'
updatedAt: '2026-08-03'
---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IndexWiki/logo.png" /></div>

## Greetings

This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it.

✨ For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts👍.

Today is August 3rd, and a brand new week has begun! Check out what Seeed Studio did last week!

## Latest Wiki Launched

### [JetPack 7.2 Resource Hub](https://wiki.seeedstudio.com/jetpack_7_2_resource_hub/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/other/jp72-front.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This page organizes the JetPack 7.2 resources currently available for Seeed Studio NVIDIA Jetson products. Use it as the starting point for understanding the new software stack, selecting a supported image, migrating an existing JetPack 6.x project, restoring peripheral drivers, and deploying optimized AI workloads.

</div>

### [reCamera Pro and Home Assistant Integration: Sound-Triggered Photo Alert](https://wiki.seeedstudio.com/recamera_pro_ha_sound_alert/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This wiki explains how to integrate reCamera Pro with Home Assistant (HA) to automatically send a custom message and a current camera snapshot to the Home Assistant dashboard when a specific sound is detected. Using the MQTT protocol for bidirectional communication, when reCamera Pro detects a specified sound (e.g., "help") with a confidence level exceeding a threshold, it automatically sends an alert message and a live image to HA.

</div>

### [Reachy Mini Home Assistant integration](https://wiki.seeedstudio.com/reachymini_development_cases_home_assistant/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-home.webp" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

Want Reachy Mini to control your smart home devices — Mi Home (Xiaomi), Aqara, Midea, Haier, and more (such as refrigerators and air conditioners)? This project explains in detail how to control them with Reachy Mini, no code required. You can even hand this document directly to an AI and let it install and set everything up for you.

</div>

### [reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 WebSocket Audio Streaming](https://wiki.seeedstudio.com/respeaker_xvf3800_xiao_websocket_audio_stream/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This guide describes how to capture audio from an XVF3800 microphone array using an ESP32-S3 (XIAO ESP32S3), record 5 seconds of 48 kHz stereo 32-bit PCM audio, and store the data in PSRAM to handle large audio buffers. The recorded audio is then transmitted over Wi-Fi to a Python-based WebSocket server, where it is received and saved as a standard WAV file. This approach is well suited for applications such as voice capture, remote audio logging, and speech processing pipelines including speech-to-text (STT) and machine-learning–based audio analysis.

</div>

### [Convert and deploy a custom YOLO detection model in the reCamera web interface](https://wiki.seeedstudio.com/recamera_model_export_online/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-5.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This document introduces how to convert and deploy custom YOLO models on reCamera, including ONNX file upload, cloud conversion, model deployment, and real-time detection preview.

</div>

### [Reachy Mini Voice Control for SO-ARM](https://wiki.seeedstudio.com/reachymini_development_cases_gripper_voice_control/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This case uses the Reachy Mini conversation app to open and close the SO-ARM follower arm gripper with voice commands — **without modifying the official source code**, using the app's built-in external tools mechanism.

</div>

### [Build Your Own App for reSpeaker Clip adding memory Layer using Python SDK](https://wiki.seeedstudio.com/respeaker_clip_python_build_app_with_memory/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

This guide shows how to turn the reSpeaker Clip into a voice-powered assistant that not only transcribes, diarizes, or summarizes recordings, but also remembers what was said before. By adding a memory layer on top of the Python SDK workflow, your app can compare new transcripts with past conversations and notify you when it detects a similar discussion. The result is a practical foundation for building smart meeting assistants, personal note takers, or voice-driven knowledge apps with the reSpeaker Clip.

</div>

### [Bring Voice AI to Your Business System with Face Verification](https://wiki.seeedstudio.com/solutions/mcp-face-auth-integration/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-face-architecture.png" alt="pir" width={800} height="auto" /></p>

<div style={{ textAlign: "justify" }}>

What we supply is a small robot that stands on your customer's floor, holds a conversation, and knows who it is talking to. An operator walks up with their hands full, says "stock out forty units of the M16 bearings," and the transaction lands in your system attributed to the person the camera recognized — not to whatever name was spoken. Microphone array, wake word, speech, language model and face recognition arrive as one tuned product, with a fully on-premises build for customers whose audio cannot leave the site. What is left is the part only you can do: connecting it to your platform. That connection is an **MCP server in front of your own system** — you do not adopt our platform.

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

</details>
