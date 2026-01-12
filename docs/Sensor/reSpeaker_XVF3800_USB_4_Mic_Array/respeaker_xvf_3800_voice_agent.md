---
description: Build your own local voice agent using Whisper, Ollama, and NVIDIA Jetson. Step-by-step guide for GPU setup, speech-to-text, LLM, TTS, and offline voice AI.
title: Deploying an Offline Smart Voice Assistant End-to-End
keywords:
- reSpeaker
- TTS
- STT
- LLM
- Voice Assistant
- Speech Recognition
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_voice_assistant
last_update:
  date: 12/16/2025
  author: Kasun Thushara
---

## Overview

This project demonstrates a fully local smart voice assistant designed for smart offices and smart spaces. It uses the ReSpeaker XVF3800 microphone array for high-quality voice capture, combined with on-device speech-to-text (STT) for accurate transcription. A local large language model (LLM) processes user queries intelligently without relying on the cloud, ensuring privacy and low latency. Text-to-speech (TTS) generates natural voice responses, enabling real-time interaction. The system is ideal for environments such as offices, malls, kiosks, and meeting rooms where secure, offline voice control is essential.

## Hardware Required

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Jetson AGX Orin 32GB H01 Kit</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Prepare the Devices

#### ReSpeaker XVF3800 – USB Firmware Installation

Ensure the ReSpeaker XVF3800 USB Mic Array is updated with the latest firmware before use.

- Follow the official firmware update guide:

  - ReSpeaker XVF3800 Firmware Update [Seeed Studio Wiki](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware)

This step ensures stable USB audio input and compatibility with downstream speech processing pipelines.

#### NVIDIA Jetson AGX Orin – Initial Setup

If your Jetson AGX Orin is not yet set up, flash it with the appropriate JetPack version.

- Official setup guide:

  - Jetson AGX Orin 32GB H01 Flash JetPack [Seeed Studio Wiki](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/#prerequisites)

After flashing and booting into Ubuntu, update the system and install JetPack components:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

### CUDA Environment Configuration

#### Check Installed CUDA Version

Verify which CUDA directories are available:

```bash
ls /usr/local
```

You should see a folder such as `cuda`, `cuda-12.x`, or similar.

#### Add CUDA Paths Permanently

Edit your shell configuration file:

```bash
nano ~/.bashrc
```

Add the following lines at the bottom (replace with your actual CUDA version):

```bash
# CUDA paths
export PATH=/usr/local/cuda-(your_version)/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-(your_version)/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

Apply the changes:

```bash
source ~/.bashrc
```

#### Verify CUDA Installation

Confirm CUDA is correctly installed and accessible:

```bash
nvcc --version
```

If the CUDA version is displayed, GPU support is ready.

### Install Whisper with GPU Support

#### Clone Whisper Repository

Whisper is built from source to enable CUDA acceleration.

- Repository:

  - [https://github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)

Install required dependencies:

```bash
sudo apt-get install libsdl2-dev
```

#### Build Whisper with CUDA Enabled

From the `whisper.cpp` directory, run:

```bash
cmake -B build -DGGML_CUDA=1 -DWHISPER_SDL2=ON
cmake --build build -j --config Release
```

This compiles Whisper with GPU acceleration and SDL support.

#### Download Whisper Model

Download the Whisper model from Hugging Face:

- Model:

  - ggml-base-q8_0.bin

Place the downloaded model inside the `models/` directory:

```bash
whisper.cpp/models/
```

#### Run Whisper Server

Start the Whisper server with GPU support:

```bash
cd whisper.cpp
./build/bin/whisper-server \
  -m models/ggml-base.en.bin \
  --host 0.0.0.0 \
  --port 8080 \
  --gpu
```

This launches a real-time speech-to-text server accessible over the network.

### Install Ollama for Local LLM Inference

Ollama officially supports NVIDIA Jetson devices and provides CUDA-accelerated local LLM execution.

Install Ollama using the official installer:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Run the Gemma 3 model:

```bash
ollama run gemma3:4b
```

## Smart Voice AI Assistant – Quick Start Guide

### Architecture Summary

1. **Wake Word Detection** – Listens continuously for a predefined activation phrase.
2. **Speech-to-Text (STT)** – Converts user speech into text using a local speech recognition engine.
3. **RAG-powered LLM** – Retrieves relevant context from a vector database and generates intelligent responses using a local LLM.
4. **Text-to-Speech (TTS)** – Converts the generated response into natural-sounding speech.

All processing is performed locally to ensure low latency, data privacy, and offline capability.

Project repository:

- [https://github.com/KasunThushara/LocalVoiceAssistant.git](https://github.com/KasunThushara/LocalVoiceAssistant)

Clone the repo

```bash
git clone https://github.com/KasunThushara/LocalVoiceAssistant.git
```

### Quick Start

#### Install Dependencies

Ensure Python and required system dependencies are installed, then run:

```bash
pip install -r requirements.txt
```

#### Download a Text-to-Speech (TTS) Model

This project uses **Piper TTS** models. Below is an example using a male English voice (Amy):

```bash
# Example: female voice (amy)
wget -O models/en_US-amy-low.onnx \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx

wget -O models/en_US-amy-low.onnx.json \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx.json
```

You may replace this with any compatible Piper voice model as needed.

#### Download Embedding Model (One-Time Setup)

The embedding model is required for building the vector database used by the RAG pipeline.

```bash
python download_sentence_tf.py
```

This step only needs to be run once.

#### Build the Vector Database

Create or rebuild the vector database used for contextual retrieval:

```bash
python test_scripts/rebuild_vector.py
```

This process indexes your documents and prepares them for fast semantic search.

#### Run the Application

Start the Smart Voice AI Assistant:

```bash
python app.py
```

Once running, the system will listen for the wake word and respond to voice queries in real time.

## References

- [Whisper Server Example:](https://github.com/ggml-org/whisper.cpp/tree/master/examples/server)
- [Whisper Repository:](https://github.com/ggml-org/whisper.cpp)
- [Ollama Model Library:](https://ollama.com/library/gemma3)
- [Ollama on Jetson Guide:](https://www.jetson-ai-lab.com/tutorial_ollama.html)

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
