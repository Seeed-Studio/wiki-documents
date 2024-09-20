---
description:  在NVIDIA Jetson Orin上部署Whisper进行实时语音转文字
title:  在NVIDIA Jetson Orin上部署Whisper进行实时语音转文字
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: Whisper_on_Jetson_for_Real_Time_Speech_to_Text

last_update:
  date: 03/14/2024
  author: Jiahao

no_comments: false # for Disqus

---

# 在NVIDIA Jetson Orin上部署Whisper进行实时语音转文字

## 引言

实时语音转文字（STT）系统在现代应用中扮演着至关重要的角色，从语音助手到转录服务。以下是一些流行的STT模型：Whisper、Riva、DeepSpeech、Google Cloud Speech-to-Text API、Microsoft Azure Speech Service、IBM Watson Speech to Text、Kaldi、Wit.ai等。以高性能和能效著称的NVIDIA Jetson Orin为在边缘部署此类要求高的应用提供了一个有前景的平台。

[Whisper](https://github.com/openai/whisper), 是一个利用深度学习的先进STT系统，以其准确性和效率而脱颖而出。[Riva](https://github.com/nvidia-riva)是NVIDIA开发的一套全面的多模态对话AI框架。通过在Jetson Orin上部署Whisper或Riva，开发者可以利用其强大的GPU和CPU核心，以及Tensor Cores等硬件加速技术，实现低延迟的实时STT。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

在这本维基中，我们向您介绍[实时Whisper在Jetson上的部署](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git)，这种集成使得设备上直接进行语音处理成为可能，消除了对持续网络连接的需求，增强了隐私性和安全性。此外，我们将比较在相同的Jetson Orin设备上部署时Whisper和Riva的推理速度。最终，将Whisper部署在Jetson Orin上使开发者能够构建健壮、高效的STT应用程序，这些应用程序在智能家居到工业自动化等多个领域提供高准确性和低延迟的性能。


## 硬件设置
### 硬件组件
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer(或其他基于Jetson的设备)
      </th>
      <th>reSpeaker (或其他USB接口麦克风)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products">
				<strong><span><font color={'FFFFFF'} size={"4"}> 现在获取一台 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products">
				<strong><span><font color={'FFFFFF'} size={"4"}> 现在获取一台 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 硬件连接
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## 准备运行环境

#### 步骤1. 安装依赖项：

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000
```
#### 步骤2. 测试环境：

```shell
python test.py
```
如果你在终端看到如下信息，说明你已经成功安装了所需的库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

在你的终端(Ctrl+Alt+T)中，输入 ``` ffmpeg -version``` 如果得到类似以下的信息，则表示你已经安装了ffmpeg。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## 让我们运行它

```shell
python main.py
``` 
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Riva vs Whisper

Riva以其高级的人工智能驱动的语音识别和自然语言处理而闻名，能够为用户提供实时的转录、翻译和对话分析。

Whisper是一个自动语音识别（ASR）系统，训练了680,000小时的网络收集的多语言和多任务监督数据。此外，它支持多种语言的转录，以及将这些语言翻译成英语。

在即将发布的对比视频中，我们将比较[Riva](https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/)和Whisper在Nvidia Jetson上开发的语音到文本的能力。



<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 项目展望

在这个项目里，我们使用Whisper从麦克风输入实时捕获数据，并将其显示在网页上。未来，我们将增强Whisper的实时处理能力，以进一步减少延迟并提高语音识别的准确性，并探索与其他AI服务或API的集成，以增强应用程序的功能。