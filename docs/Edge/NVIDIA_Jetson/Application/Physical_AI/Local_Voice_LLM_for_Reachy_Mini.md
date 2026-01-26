---
description: This wiki details how to deploy and operate a fully local voice-interactive robotic assistant using the hardware combination of reComputer Mini J501 and Reachy Mini Lite. The guide walks through installing the Ollama server, configuring local speech models and conversation applications, ultimately achieving an offline, low-latency voice conversation system that requires no internet connection. It presents a complete end-to-end project, covering hardware setup, software deployment, and a final demonstration of the working system.
title: Deploy local voice LLM on reComputer Mini for Reachy Mini! 
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.webp
slug: /local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk
sku: E2025123101
last_update:
  date: 01/06/2026
  author: youjiang
---

Double Mini! This project will build a fully localized, low-latency, and high-privacy voice interactive robotic assistant system. Centered around the reComputer Mini J501 edge computing device, it deploys local speech recognition, large language model, and speech synthesis services. Using the open-source robotic platform Reachy Mini as the physical terminal for human-computer interaction, it achieves an embodied intelligent interactive experience that is perceptive, conversational, and actionable.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/workflow.png" />
</div>

## Prerequisites
- reComputer Mini J501 Kit
- Reachy Mini Lite

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 Kit </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Please ensure that your Jetson device includes the [carrier board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html), Jetson module, and [cooling system](https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html), and that the JP6.2 operating system is installed.
:::

:::info
Before configuring the software, please connect the Reachy Mini to the Type-A port of the reComputer Mini J501.
:::


## Deploy Software Applications

**Step1.** Install and run ollama inference server in reComputer Jetson.

Run the following command in the terminal window(`Ctrl + Alt + T`) on reComputer Jetson.

```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the required model
ollama pull llama3.2-vision:11b
```
:::note
The model download will take approximately 10 minutes. Please wait patiently.
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/ollama.png" />
</div>

**Step2.** Install conversation application.

Run the following command in the terminal window on reComputer Jetson.

:::note
If you want to configure the runtime environment in a conda virtual environment, please use the `conda activate <name>` command to activate the target environment before executing the following installation commands.
:::

```bash
cd Downloads
git clone https://github.com/Seeed-Projects/reachy-mini-loacl-conversation.git
cd reachy-mini-loacl-conversation
pip install -r requirements.txt -i https://pypi.jetson-ai-lab.io/
pip install "reachy-mini"
```

:::info
Please refer [here](https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/tree/master) for more installation information.
:::


**Step3.** Launch application.

Run the following command in the terminal window on reComputer Jetson to launch reachy mini daemon.

```bash
reachy-mini-daemon
```

Open another terminal and execute:

```bash
# Set environment variables
export OLLAMA_HOST="http://localhost:11434"
export OLLAMA_MODEL="qwen2.5:7b"
export COQUI_MODEL_NAME="tts_models/zh-CN/baker/tacotron2-DDC-GST"
export DEFAULT_VOLUME="1.5"

# Start the voice assistant
python main.py
```
<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/launch_app.png" />
</div>

:::info
Here, a Chinese model is used for the demonstration. You can replace it with models in other languages according to your needs.
:::


## Effect Demonstration

After the program starts normally, we can use the `R` key and `S` key on the keyboard to control starting and stopping the recording. Once the recording is stopped, the program will call the local large language model to generate a response.

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References

- https://ollama.com/download/linux
- https://github.com/modelscope/FunASR
- https://github.com/coqui-ai/TTS
- https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/

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
