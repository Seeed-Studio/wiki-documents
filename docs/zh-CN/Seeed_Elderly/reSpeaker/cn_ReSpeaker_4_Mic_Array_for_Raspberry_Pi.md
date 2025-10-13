---
description: ReSpeaker 4-Mic Array for Raspberry Pi
title: ReSpeaker 4-Mic Array for Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi 是一款专为 Raspberry Pi 设计的四麦克风扩展板，适用于 AI 和语音应用。这意味着我们可以构建一个更强大、更灵活的语音产品，集成 Amazon Alexa Voice Service、Google Assistant 等服务。

与 [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) 不同，这款板子基于 AC108 开发，这是一个高度集成的四通道 ADC，具有 I2S/TDM 输出转换功能，用于高清语音捕获，使设备能够在 3 米半径内拾取声音。此外，这个 4-Mics 版本配备了一个 LED 环，包含 12 个 APA102 可编程 LED。通过这 4 个麦克风和 LED 环，Raspberry Pi 将具备进行 VAD（语音活动检测）、估算 DOA（到达方向）、执行 KWS（关键词搜索）并通过 LED 环显示方向的能力，就像 Amazon Echo 或 Google Home 一样。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 特性

- Raspberry Pi 兼容（支持 Raspberry Pi Zero 和 Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+ 和 Raspberry Pi 4B）
- 4 个麦克风
- 3 米半径语音捕获
- 2 个 Grove 接口
- 12 个 APA102 用户 LED
- 软件算法：VAD（语音活动检测）、DOA（到达方向）和 KWS（关键词搜索）

注意：ReSpeaker 4-Mic Array for Raspberry Pi 上没有音频输出接口。它仅用于语音捕获。我们可以使用 Raspberry Pi 上的[耳机插孔](https://www.raspberrypi.org/documentation/configuration/audio-config.md)进行音频输出。

## 应用创意

- 语音交互应用
- AI 助手

## 硬件概述

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC：4 个模拟麦克风
- LED：12 个 APA102 可编程 RGB LED，连接到 SPI 接口
- Raspberry Pi 40 针排针：兼容 Raspberry Pi Zero 和 Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+ 和 Raspberry Pi 4
- AC108：高度集成的四通道 ADC，具有 I2S/TDM 输出转换功能
- I2C：Grove I2C 端口，连接到 I2C-1
- GPIO12：Grove 数字端口，连接到 GPIO12 和 GPIO13

注意：如果您使用 APA102 RGB LED，请确保首先向 `GPIO5` 写入 HIGH 以启用 LED 的 VCC。

## 开始使用

**将 ReSpeaker 4-Mic Array 连接到 Raspberry Pi**

将 ReSpeaker 4-Mic Array 安装到 Raspberry Pi 上，在堆叠 ReSpeaker 4-Mic Array for Raspberry Pi 时，请确保引脚正确对齐。

注意：不允许热插拔 ReSpeaker 4-Mic Array。这会损坏 respeaker。

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**安装驱动程序**

确保您在 Pi 上运行的是[最新的 Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/)。*(更新于 2021.06.30)*

- 步骤 1. 获取 Seeed 声卡源代码，安装并重启。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

- 步骤 2. 然后在树莓派上选择音频输出:

```sh
sudo raspi-config
# Select 1 System options
# Select S2 Audio
# Select your preferred Audio output device
# Select Finish
```

- 步骤 3. 检查声卡名称是否如下所示：

```sh
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

如果我们想要更改 `alsa` 设置，可以使用 `sudo alsactl --file=ac108_asound.state store` 来保存它。当我们需要再次使用这些设置时，将其复制到：`sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- 步骤 4. 打开 Audacity 并选择 **AC108 & 4 channels** 作为输入，选择 **bcm2835 alsa: - (hw:0:0)** 作为输出进行测试：

```sh
sudo apt update
sudo apt install audacity
audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- 或者，如果您使用的是 Lite Raspbian Pi OS 镜像且没有 GUI，您可以使用 `arecord` 录音并使用 `aplay` 播放：

```
sudo apt-get install sox                             //for audio conversion
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
sox hello.wav -c 2 stereo.wav                        // convert to stereo
aplay stereo.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

## 使用概述

要运行以下示例，请将 [4mics_hat 仓库](https://github.com/respeaker/4mics_hat.git) 克隆到您的树莓派上

```
git clone https://github.com/respeaker/4mics_hat.git
```

下面示例中提到的所有 Python 脚本都可以在此仓库中找到。要安装必要的依赖项，请从 mic_hat 仓库文件夹运行

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LED**

每个板载 APA102 LED 都有一个额外的驱动芯片。驱动芯片负责通过其输入线接收所需的颜色，然后保持这个颜色直到接收到新的命令。

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- 步骤 1. 激活 SPI：

```bash
sudo raspi-config
```

1. 选择 "Interfacing Options"
2. 选择 "SPI"
3. 选择启用 SPI
4. 最后，退出工具

- 步骤 2. 然后运行示例代码，现在我们可以看到 LED 像 Alexa 助手一样闪烁。

```bash
python3 interfaces/pixels.py
```

### 使用 Python 录制声音

我们使用 [PyAudio python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来通过 Python 录制声音。

首先，运行以下脚本来获取 2 Mic pi hat 的设备索引号：

```bash
python3 recording_examples/get_device_index.py
```

您将看到如下所示的设备 ID。

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

要录制声音，请使用 nano 或其他文本编辑器打开 ```recording_examples/record.py``` 文件，并将 `RESPEAKER_INDEX = 2` 更改为您系统上 ReSpeaker 的索引号。然后运行 python 脚本 record.py 进行录制：

```bash
python3 recording_examples/record.py
```

- 步骤 6. 如果您想从 4 个通道中提取通道 0 的数据，请查看 ```record_one_channel.py``` 的内容。对于其他通道 X，请将 [0::4] 更改为 [X::4]。

```bash
python3 recording_examples/record_one_channel.py
```

要播放录制的样本，您可以使用 aplay 系统实用程序，例如

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## 实时声源定位和跟踪

[ODAS](https://github.com/introlab/odas) 代表开放式嵌入式听觉系统。这是一个专门用于执行声源定位、跟踪、分离和后滤波的库。

- 步骤 1. 获取 [ODAS](https://github.com/introlab/odas.git) 并构建它。

我们将调用的可执行文件将在 bin 目录中生成

```bash
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
cd ~/Desktop
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- 步骤 2. 获取 [ODAS Studio](https://github.com/introlab/odas_web) 并运行它。

Install nodejs v12.22 and npm 6.14.

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

确保已安装相关的编译工具

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

使用 npm 安装 odas_web 依赖项

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

我们的目的是安装相关的依赖模块而无需重新构建，因此我们可以忽略重新构建过程中的错误。然后运行 npm start。

```bash
npm start
```

或者我们可以将Python降级到2.7版本来构建旧的election-rebuild模块。（我们不必执行这一步）

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

- 步骤 3. odascore 将位于 **~/Desktop/odas/build/bin/odaslive**，配置文件位于 **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg**。

我们需要修改配置以将声卡指定为我们的设备

```bash
arecord -l  #type this commond  make sure u have arecord installed
```

你会看到类似以下的输出

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

在 cfg 配置文件中，修改 18th 行的声卡指定

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# Then type :18
# Then press Enter
# Then press i
# Change card = YOUR CARD ;  # We found in "arecord -l"
# For mine is
# card = 3 ;
# Then type  :wq  # To save the configuration file
```

然后我们打开 odas web 界面，在这里我们可以在 **Local System Monitor** 界面中查看系统监控数据，并在 **ODAS Control** 界面中选择控制内核和要读取的配置文件。

启动 odas web GUI

```bash
cd ~/Desktop/odas_web
npm start
```

点击 **ODAS Core** 下方的空白区域调出文件浏览器，选择 "~/Desktop/odas/build/bin/odaslive" 中的核心路径

点击 **ODAS Config** 下方的空白区域调出文件浏览器，选择 "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg" 中的配置路径

正确配置后将如下所示

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## 使用 Picovoice 在边缘启用语音识别

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **使企业能够通过私有语音 AI 快速创新和差异化**。使用我们的语音识别和[**自然语言理解 (NLU) 技术**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)围绕您的品牌和产品构建统一的 AI 策略。

**Seeed 已与 Picovoice 合作，为开发者使用 [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) 在边缘提供语音识别解决方案。**

Picovoice 是一个端到端平台，用于按照您的条件构建语音产品。它能够创建类似于 Alexa 和 Google 的语音体验。但它完全在设备上运行 100%。Picovoice 的优势包括：

- **私密性**：所有内容都在离线处理。本质上符合 HIPAA 和 GDPR 合规性。
- **可靠性**：无需持续连接即可运行。
- **零延迟**：边缘优先架构消除了不可预测的网络延迟。
- **准确性**：对噪声和混响具有弹性。在很大程度上优于基于云的替代方案。
- **跨平台**：一次设计，随处部署。使用熟悉的语言和框架构建。

### Picovoice 与 ReSpeaker 4-Mic Array 入门指南

**步骤 1.** 请在进行以下操作之前，先按照**上述 ReSpeaker 4-Mic Array 与 Raspberry Pi 的分步教程**进行操作。

**注意：** 请确保 `Audacity` 和 `APA102` LED 在 ReSpeaker 4-Mic Array 与 Raspberry Pi 上正常工作。

**步骤 2.** 打开终端并输入以下命令安装 `pyaudio` 驱动程序。

```sh
pip3 install pyaudio
```

**注意**：请确保您的树莓派已安装 `pip3`

**步骤 3.** 在终端中输入以下命令来**安装适用于 ReSpeaker 4-Mic Array 的 Picovoice 演示程序**。

```sh
pip3 install pvrespeakerdemo
```

### 演示用法

该演示在树莓派上使用 ReSpeaker 4-Mic 阵列配合 Picovoice 技术来控制 LED。**此演示由唤醒词"`Picovoice`"触发，并准备执行后续操作，如打开和关闭 LED，以及改变 LED 颜色。**

安装完成后，在终端中输入此命令来运行演示：

```sh
picovoice_respeaker_demo
```

### Voice Commands

以下是此演示的语音命令：

- **Picovoice**

The demo outputs:

```txt
wake word
```

- **Turn on the lights**

你应该看到灯亮起，并在终端中看到以下消息：

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

命令列表显示在终端上：

```config
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

另外，您也可以尝试使用此命令来改变颜色：

- **Picovoice，把灯光设置为橙色**

通过以下命令关闭灯光：

- **Picovoice，关闭所有灯**

**演示视频展示**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### 演示源代码

该演示使用 **[Picovoice SDK](https://github.com/Picovoice/picovoice)** 构建。演示源代码可在 GitHub 上获取：[Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### 不同的唤醒词

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) 包含在 Apache 2.0 许可下的免费示例唤醒词，包括主要语音助手（例如 "**`Hey Google`**"、"**`Alexa`**"）以及有趣的唤醒词如 "**`Computer`**" 和 "**`Jarvis`**"。

### 自定义语音命令

灯光控制命令由 Picovoice *语音转意图上下文* 定义。您可以使用 Picovoice Console 通过输入允许的语法来设计和训练上下文。您可以在编辑时使用麦克风按钮在浏览器中测试您的更改。前往 [Picovoice Console](https://picovoice.ai/console/) 并注册账户。使用 **Rhino 语音转意图编辑器** 创建上下文，然后为 Raspberry Pi 训练它们。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 多唤醒词示例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

为了展示 Picovoice 的能力，我们还准备了使用 ReSpeaker 4-Mic Array 与 Raspberry Pi 的多唤醒词示例！不同的唤醒词可以设置为执行特定任务。

*此包包含一个命令行演示，用于使用 Porcupine 控制 ReSpeaker 4-mic 麦克风阵列 LED。*

### Porcupine

**Porcupine** 是一个高精度且轻量级的唤醒词引擎。它能够构建始终监听的语音应用程序。它具有以下特点：

- 使用在真实环境中训练的深度神经网络。
- 紧凑且计算高效。非常适合物联网应用。
- 跨平台。支持 Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64) 和网页浏览器。此外，企业客户可以访问 ARM Cortex-M SDK。
- 可扩展。它可以检测多个始终监听的语音命令，而不会增加运行时占用空间。
- 自助服务。开发者可以使用 [Picovoice Console](https://picovoice.ai/console/) 训练自定义唤醒词模型。

#### 多唤醒词入门指南

在终端中运行以下命令来安装演示驱动程序：

```sh
pip3 install ppnrespeakerdemo
```

#### Multi Wake Word Usage

驱动程序安装完成后，在终端中运行以下命令：

```sh
porcupine_respeaker_demo
```

等待演示初始化并在终端中打印 `[Listening]`。说：

> Picovoice

The demo outputs:

```text
detected 'Picovoice'
```

现在灯光设置为 `绿色`。说：

> Alexa

灯光现在设置为 `黄色`。说：

> Terminator

来关闭灯光。

#### 唤醒词对应颜色

以下是此演示中支持的唤醒词对应的颜色：

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### 多唤醒词示例源代码

请在此处查看此示例的完整源代码：[Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Picovoice 技术支持

如果您在使用 Picovoice 时遇到技术问题，请访问 **[Picovoice](https://github.com/Picovoice)** 进行讨论。

## 常见问题

**Q1：当我们运行 kws_doa.py 并说 snow boy 时没有响应**

A2：请运行 audacity 确保 4 个通道都正常。如果有一个通道没有数据，当我们说 snow boy 时就不会有响应。

**Q2：运行 "sudo pip install pyaudio" 时出现 #include "portaudio.h" 错误。**

A3：请运行以下命令来解决此问题。

```sh
sudo apt-get install portaudio19-dev
```

**Q3: ...WARNING: memory leak will occur if overlay removed... 消息出现在 journalctl 中**

A4: 当驱动程序首次加载时（启动后），确实存在一次性的小内存丢失。但是，由于这是每次启动或每次加载时发生的，而典型用户每次启动只需要加载驱动程序一次，因此每次启动丢失几个字节的跟踪并不重要。所以这只是一个小问题，不太可能以实际方式影响任何用户，除了每次启动时看到关于内存丢失的令人担忧的消息。

## 资源

- **[PDF]** [ReSpeaker 树莓派 4 麦克风阵列(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
- **[DXF]** [ReSpeaker 树莓派 4 麦克风阵列 v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
- **[3D]** [ReSpeaker 树莓派 4 麦克风阵列 v1.0 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
- **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
- **[驱动程序]** [Seeed-Voice 驱动程序](https://github.com/respeaker/seeed-voicecard)
- **[算法]** [算法包括 DOA、VAD、NS](https://github.com/respeaker/mic_array)
- **[语音引擎]** [语音引擎项目，提供创建语音启用对象的构建模块](https://github.com/voice-engine/voice-engine)
- **[算法]** [AEC](https://github.com/voice-engine/ec)

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
