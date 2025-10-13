---
description: 在 Nvidia Jetson 上的实时字幕录制器
title: 实时字幕录制器
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Real Time Subtitle Recoder on Nvidia Jetson
last_update:
  date: 02/23/2024
  author: Jiahao

no_comments: false # for Disqus

---

# 在 Nvidia Jetson 上的语音字幕生成

## 介绍

如今，我们每天都有很多会议，但有些会议内容并不打算公开。将会议内容发送到云端进行录制并返回字幕可能对会议隐私构成重大威胁。最重要的是，如果网络延迟，您将丢失会议内容。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

在这里我们向您介绍[在 Jetson 上的语音字幕生成](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson)，它可以提供实时语音转字幕服务，同时避免互联网上的信息泄露。会议内容可以使用 AI 模型以字幕形式转录并显示在屏幕上，这可以保护会议隐私并减少会议记录员的工作量。

## 硬件设置

- [reComputer](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products)（或其他基于 Jetson 的设备）

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

- [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products)（或其他 USB 接口麦克风）

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png"
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

- 硬件连接

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## 准备运行环境

#### 步骤1. 安装 Riva ASR 服务器：

请参考[此 wiki](https://wiki.seeedstudio.com/cn/Local_Voice_Chatbot/#install-riva-server)来安装 Riva ASR 服务器。

在您的终端中（Ctrl+Alt+T），输入 ```sudo docker ps```，您将看到类似以下内容，这意味着您已完成第一步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### 步骤2. 安装 flask：

打开终端（`Ctrl+Alt+T`）并使用以下命令安装 flask：

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)
```

如果您看到类似以下内容，说明您已经完成了这一步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### 步骤3. 升级 pip setuptools wheel：

```shell
# riva client
git clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients
cd python-clients
sudo pip3 install --upgrade pip setuptools wheel
pip3 install --no-cache-dir --verbose -r requirements.txt
python3 setup.py --verbose bdist_wheel
pip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl
python3 -c 'import riva.client; print(riva.client.__version__)'
```

在您的终端中（Ctrl+Alt+T），输入 ```pip --version``` 您将看到类似以下内容，这意味着您已完成 pip 升级。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

在您的终端中（Ctrl+Alt+T），输入 ```python3 -c 'import setuptools; print(setuptools.__version__)``` 如果您得到类似以下内容，这意味着您已升级 setuptools。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

在您的终端中（Ctrl+Alt+T），输入 ```wheel version``` 您将看到类似以下内容，这意味着您已完成 wheel 升级。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### 步骤4. 安装 pyaudio：

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```

如果您的终端显示如下内容，说明您已完成最后一步，恭喜！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## 让我们运行它

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 项目展望

在这个项目中，我们使用 [Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart) 来实时捕获麦克风输入的数据并在网页上显示。未来我们将添加更多应用，如将一种语言翻译成另一种语言，以及提供更快的响应速度。
