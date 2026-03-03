---
description: This wiki introduces a voice-controlled motor solution based on the Jetson platform, detailing the required hardware, connection methods, and software deployment steps.
title: Control Motor by Voice LLM on Jetson
keywords:
- reComputer
- Jetson
- LLM
- Motor
- Qwen
- Function Calling
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /control_motor_by_voice_llm_on_jetson
last_update:
  date: 08/19/2025
  author: Youjiang
---


# Control Motor by Voice LLM on Jetson

## Introduction

This wiki builds an end-to-end voice-controlled motor system based on the Jetson platform (reComputer Robotics J4012), integrating speech recognition, edge large language model (LLM) intent understanding, and hardware control to enable natural human-machine interaction—users can control MyActuator X Series Motors with simple voice commands (e.g., "Rotate 90 degrees clockwise").

## Prerequisites
- reComputer Robotics J4012
- reSpeaker XVF3800
- MyActuator X Series Motors

<table align="center">
    <tr>
        <th>reComputer Robotics J4012</th>
        <th>reSpeaker XVF3800</th>
        <th>MyActuator X Series Motors</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-motor.png" style={{width:250, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## Hardware Connection

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.jfif" />
</div>

## Getting Started

The workflow of the entire system involves three steps:

1. ASR: The microphone captures audio commands from the user and converts them into text using Whisper.
2. Function Calling: The large language model generates motor control parameters that meet the requirements based on the user's input instructions.
3. Motor Control: The appropriate control program is called to drive the motor to rotate to the specified position.

Next, we will explain the implementation of each step in detail.

### Install Whisper Server

First, we need to install the Whisper service to enable ASR functionality. Please open a terminal window on the Jetson device and run the following command.

```bash
git clone https://github.com/jjjadand/whisper-stable4curl
cd whisper-stable4curl
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
cmake --build build -j --config Release
```

If everything goes well, you will see the following logs in the terminal window.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/whisper.png" />
</div>

Then we launch the Whisper inference service:

```bash
./build/bin/whisper-stream -m ./models/ggml-base.en-q5_1.bin -t 8 --step 0 --length 7000 -vth 0.7 --keep 1200
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/launch_whisper.png" />
</div>

### Install Ollama

Ollama is an extremely user-friendly edge computing LLM inference framework that can be deployed on Jetson with just a single command. Open a new terminal window on your Jetson device and execute:

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5
```

:::info
Here, we use the Qwen 2.5 large language model to understand the user's intent.
:::

### Install Motor Control Script

Execute the following command to start the motor control script:

```bash
git clone https://github.com/yuyoujiang/voice_control.git
cd voice_control
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/motor_control.png" />
</div>


## Effect Demonstration


<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/ORv8x0aSXfQ" title="🤖 Voice-Controlled Robot: Full Pipeline from Speech Recognition to Motor Control!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


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