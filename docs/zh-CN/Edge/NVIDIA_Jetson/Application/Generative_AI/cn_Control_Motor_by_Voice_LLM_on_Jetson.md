---
description: 本wiki介绍了基于Jetson平台的语音控制电机解决方案，详细说明了所需硬件、连接方法和软件部署步骤。
title: 在Jetson上通过语音LLM控制电机
keywords:
- reComputer
- Jetson
- LLM
- Motor
- Qwen
- Function Calling
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /cn/control_motor_by_voice_llm_on_jetson
last_update:
  date: 08/19/2025
  author: Youjiang
---


# 在Jetson上通过语音LLM控制电机

## 介绍

本wiki基于Jetson平台（reComputer Robotics J4012）构建了一个端到端的语音控制电机系统，集成了语音识别、边缘大语言模型（LLM）意图理解和硬件控制，实现自然的人机交互——用户可以通过简单的语音命令（例如"顺时针旋转90度"）来控制MyActuator X系列电机。

## 前提条件
- reComputer Robotics J4012
- reSpeaker XVF3800
- MyActuator X系列电机

<table align="center">
    <tr>
        <th>reComputer Robotics J4012</th>
        <th>reSpeaker XVF3800</th>
        <th>MyActuator X系列电机</th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## 硬件连接

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.jfif" />
</div>

## 开始使用

整个系统的工作流程包括三个步骤：

1. ASR：麦克风捕获用户的音频命令，并使用 Whisper 将其转换为文本。
2. 函数调用：大语言模型根据用户的输入指令生成满足要求的电机控制参数。
3. 电机控制：调用相应的控制程序驱动电机旋转到指定位置。

接下来，我们将详细解释每个步骤的实现。

### 安装 Whisper 服务器

首先，我们需要安装 Whisper 服务以启用 ASR 功能。请在 Jetson 设备上打开终端窗口并运行以下命令。

```bash
git clone https://github.com/jjjadand/whisper-stable4curl
cd whisper-stable4curl
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
cmake --build build -j --config Release
```

如果一切顺利，您将在终端窗口中看到以下日志。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/whisper.png" />
</div>

然后我们启动 Whisper 推理服务：

```bash
./build/bin/whisper-stream -m ./models/ggml-base.en-q5_1.bin -t 8 --step 0 --length 7000 -vth 0.7 --keep 1200
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/launch_whisper.png" />
</div>

### 安装 Ollama

Ollama 是一个极其用户友好的边缘计算 LLM 推理框架，只需一条命令即可在 Jetson 上部署。在您的 Jetson 设备上打开一个新的终端窗口并执行：

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5
```

:::info
这里，我们使用 Qwen 2.5 大语言模型来理解用户的意图。
:::

### 安装电机控制脚本

执行以下命令来启动电机控制脚本：

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


## 效果演示


<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/ORv8x0aSXfQ" title="🤖 Voice-Controlled Robot: Full Pipeline from Speech Recognition to Motor Control!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>