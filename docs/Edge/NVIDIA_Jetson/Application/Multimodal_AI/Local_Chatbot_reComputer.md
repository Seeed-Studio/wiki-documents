---
description: A fully local, voice-interactive AI assistant that combines Speech-to-Text (STT), Text-to-Speech (TTS), and local Large Language Models (LLMs) using Ollama and NVIDIA Riva.It runs entirely on edge devices like NVIDIA Jetson — enabling private, real-time, and natural voice conversations without relying on the cloud.
title: Chatbot on Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /local_chatbot_recomputer
last_update:
  date: 01/29/2025
  author: kourosh
---

# Building a Voice-Interactive Chatbot with Local LLMs, STT, and TTS

This project brings the dream of a **fully voice-interactive AI assistant** to life — running entirely **on local hardware**, without reliance on cloud services.  
By combining **Speech-to-Text (STT)**, **Text-to-Speech (TTS)**, and **Local Large Language Models (LLMs)** using **Ollama**, the system enables natural, private, and real-time conversations between humans and machines.

The entire setup runs inside Docker containers and can be deployed on **NVIDIA Jetson devices**, **edge computers**, or any Linux-based system with GPU acceleration.

---

## Project Overview

The goal of this project is to create a **voice-driven chatbot** capable of:

- Listening to your voice in real time.
- Understanding your speech using local **ASR (Automatic Speech Recognition)**.
- Generating intelligent responses using a **local LLM**.
- Speaking those responses naturally using **TTS (Text-to-Speech)**.

All components are self-contained and run locally, giving you full control over your data — no cloud dependencies, no latency, no privacy concerns.

---

## System Components

### 1. Speech-to-Text (STT) Module

Transforms your spoken input into text in real time.  
Key features:

- Fast, accurate transcription using **NVIDIA Riva ASR**.  
- Support for multiple languages.  
- Optimized for edge devices.

### 2. Text-to-Speech (TTS) Module

Converts chatbot responses into natural-sounding voice output.  
Highlights:

- Multilingual, expressive, and realistic speech synthesis.  
- Powered by **NVIDIA Riva TTS**.  
- Low latency — perfect for interactive conversations.

### 3. Local LLM (Ollama)

At the heart of the chatbot is **Ollama**, a local inference engine for running modern LLMs efficiently.  
Features:

- Offline operation (no internet needed).  
- Real-time responses even on Jetson devices.  
- Context retention for smooth, coherent dialogue.  
- Supports various models including Llama, Phi, Gemma, Mistral, and more.

### 4. User Interaction Layer

A simple, intuitive interface allows users to:

- Start or stop voice interaction via buttons or commands.  
- See live transcriptions and chatbot responses.  
- Enjoy smooth, low-latency communication from voice to voice.

---

## Setting Up Ollama Locally

We’ll start by installing [Jetson Containers](https://github.com/dusty-nv/jetson-containers) to easily manage and deploy our services inside Docker.

```bash
# Install Jetson Container tools
git clone https://github.com/dusty-nv/jetson-containers
bash jetson-containers/install.sh
```

Once installed, pull and run the **Ollama** container:

```bash
jetson-containers run --name ollama $(autotag ollama)
ollama run llama3.2:1b
```

💡 **Tip:** Start with smaller models (like `llama3.2:1b`) to test your configuration, then scale up.

Available models on [ollama.com/library](https://ollama.com/library):

| Model | Parameters | Size | Command |
|-------|-------------|------|----------|
| Llama 3.2 | 3B | 2.0 GB | `ollama run llama3.2` |
| Llama 3.2 | 1B | 1.3 GB | `ollama run llama3.2:1b` |
| Llama 3.2 Vision | 11B | 7.9 GB | `ollama run llama3.2-vision` |
| Phi 3 Mini | 3.8B | 2.3 GB | `ollama run phi3` |
| Gemma 2 | 9B | 5.5 GB | `ollama run gemma2` |
| Mistral | 7B | 4.1 GB | `ollama run mistral` |

If you’re using an **NVIDIA Jetson AGX**, you can comfortably run medium to large models. For smaller Jetsons, stick with lightweight models (1B–3B).

Run Ollama either directly in terminal or through the provided Python script `ollama_run.py`.

```bash
python3 ollama_run.py
```

**Examples:**

Terminal usage  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/terminal_ollama.gif" width="700"/>

Python integration  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/ollama_python.gif" width="700"/>

---

## NVIDIA Riva: STT and TTS

To enable real voice interaction, we use **NVIDIA Riva**, a GPU-accelerated toolkit that provides:

- **Automatic Speech Recognition (ASR)**  
- **Text-to-Speech (TTS)**  
- **Neural Machine Translation (NMT)** (optional)

It can be deployed anywhere — from the cloud to embedded devices like the **Jetson series**.

### Step 1: Get Your NGC API Key

1. Log in to [NVIDIA NGC](https://catalog.ngc.nvidia.com/).
2. Create an **API key** and save it locally — you’ll need it to access Riva resources.

### Step 2: Configure NGC on Jetson

```bash
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

Use your API key when prompted.

### Step 3: Install Riva on Jetson

Ensure you’re running **JetPack 6.0** (or check compatibility in the [Support Matrix](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/support-matrix.html)).

```bash
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.16.0
cd riva_quickstart_v2.13.1
```

In `config.sh`, disable unused services to save resources:

```bash
service_enabled_nlp=false
service_enabled_nmt=false
```

Then configure Docker to use the NVIDIA runtime by editing `/etc/docker/daemon.json`:

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```

Restart Docker:

```bash
sudo systemctl restart docker
```

Finally, initialize and start Riva:

```bash
sudo bash riva_init.sh
sudo bash riva_start.sh
```

---

## Running the Chatbot

Once everything is ready, run the main application:

```bash
git clone https://github.com/kouroshkarimi/local_chatbot_jetson.git
cd local_chatbot_jetson
python3 app.py --list-input-devices
python3 app.py --list-output-devices
python3 app.py --input-device <your_input_id> --output-device <your_output_id>
```

You can now **speak to your assistant**, and it will **listen, think, and talk back** — all locally, powered by your Jetson.

---

## Key Advantages

- 🔒 100% private – no data leaves your device  
- ⚡ Real-time response – optimized for low latency  
- 🌐 Multilingual – supports multiple languages and accents  
- 🧩 Modular – each component can be replaced or extended  
- 🖥️ Edge-friendly – deployable on Jetson or standard Linux systems

---

## Future Improvements

- Integration with **vision modules** for multimodal interaction  
- Support for **custom voice cloning** in TTS  
- **Memory persistence** across sessions for more natural dialogue  
- Web or mobile interface

---

## 🎉 Enjoy Your Conversations!

Congratulations — you’ve just built your own **voice-enabled, privacy-first AI assistant**.  
Now sit back, talk to your robot, and have fun exploring the future of human-AI interaction. 🤖💬

> “HAVE A GOOD CONVERSATION WITH ROBOTS :)”

---

## References

1. [Local RAG based on Jetson with LlamaIndex](https://wiki.seeedstudio.com/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [Local Voice Chatbot: Deploy Riva and Llama2 on reComputer](https://wiki.seeedstudio.com/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [Speech to Text (STT) and Text to Speech (TTS)](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- A special thanks to [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553) for his dedicated efforts. Your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

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
