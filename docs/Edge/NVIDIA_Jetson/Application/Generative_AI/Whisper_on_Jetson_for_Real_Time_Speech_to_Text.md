---
description:  Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text
title:  Speech2Text with Whisper
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Whisper_on_Jetson_for_Real_Time_Speech_to_Text

last_update:
  date: 03/14/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text

## Introduction

Real-time speech-to-text (STT) systems play a vital role in modern applications, from voice assistants to transcription services. Here are some popular STT model: Whisper, Riva, DeepSpeech, Google Cloud Speech-to-Text API, Microsoft Azure Speech Service, IBM Watson Speech to Text, Kaldi, Wit.ai and so on. The NVIDIA Jetson Orin, known for its high-performance and energy efficiency, offers a promising platform for deploying such demanding applications at the edge.

[Whisper](https://github.com/openai/whisper), an advanced STT system leveraging deep learning, excels in accuracy and efficiency. [Riva](https://github.com/nvidia-riva) is a comprehensive, multimodal conversational AI framework developed by NVIDIA.By deploying Whisper or Riva on the Jetson Orin, developers can harness its powerful GPU and CPU cores, along with hardware acceleration technologies like Tensor Cores, to achieve real-time STT with low latency.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

In this wiki we introduce you [Real Time Whisper on Jetson](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git), this integration enables speech processing directly on the device, eliminating the need for constant network connectivity and enhancing privacy and security. Additionally, we will compare the inference speed of Whisper and Riva when deployed on the same Jetson Orin device. Ultimately, deploying Whisper on the Jetson Orin empowers developers to build robust, efficient STT applications that deliver high accuracy and low latency in various domains, from smart homes to industrial automation.

## Hardware Setup

### Hardware components

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer(Or other devices based on Jetson)</th>
      <th>reSpeaker (Or other USB interface microphones)</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### hardware connection

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Prepare the runtime environment

#### Step1. Install dependencies

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000
```

#### Step2. Test environment

```shell
python test.py
```

If you see the following information printed in the terminal, it means you have successfully installed the necessary libraries.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

In your terminal(Ctrl+Alt+T), input ```ffmpeg -version``` if you get something like following that means you have installed ffmpeg.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## Let's run it

```shell
python main.py
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Riva vs Whisper

Riva, known for its advanced AI-driven speech recognition and natural language processing, empowers users with real-time transcription, translation, and analysis of spoken conversations.

Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English.

In the upcoming comparative video, we'll compare ability of [Riva](https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/) and Whisper in Speech to Text developed on Nvidia Jetson.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Project Outlook

In this project, we use the Whisper to capture data from the microphone input in real-time and display it on a webpage. In the future, we will enhance the real-time processing capabilities of Whisper to further reduce latency and improve the accuracy of speech recognition and explore integration with other AI services or APIs to enhance the functionality of the application.
