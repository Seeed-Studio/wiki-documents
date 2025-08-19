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

ReSpeaker 4-Mic Array for Raspberry Pi 是一款为 Raspberry Pi 设计的四麦克风扩展板，专用于 AI 和语音应用。这意味着我们可以构建一个更强大、更灵活的语音产品，集成 Amazon Alexa 语音服务、Google Assistant 等功能。

与 [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) 不同，这款扩展板基于 AC108 开发，AC108 是一款高度集成的四通道 ADC，具有 I2S/TDM 输出转换功能，可实现高质量语音捕捉，使设备能够在 3 米半径范围内拾取声音。此外，这款 4-Mics 版本还配备了一个带有 12 个 APA102 可编程 LED 的 LED 环。借助这 4 个麦克风和 LED 环，Raspberry Pi 可以实现 VAD（语音活动检测）、估算 DOA（到达方向）、执行 KWS（关键词搜索），并通过 LED 环显示方向，就像 Amazon Echo 或 Google Home 一样。

<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## 特性

* 兼容 Raspberry Pi（支持 Raspberry Pi Zero 和 Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+ 和 Raspberry Pi 4B）
* 4 个麦克风
* 3 米半径语音捕捉
* 2 个 Grove 接口
* 12 个 APA102 用户 LED
* 软件算法：VAD（语音活动检测）、DOA（到达方向）和 KWS（关键词搜索）

注意：ReSpeaker 4-Mic Array for Raspberry Pi 上没有音频输出接口，仅用于语音捕捉。我们可以使用 Raspberry Pi 上的 [耳机插孔](https://www.raspberrypi.org/documentation/configuration/audio-config.md) 进行音频输出。

## 应用场景

* 语音交互应用
* AI 助手

## 硬件概览

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

* MIC：4 个模拟麦克风
* LED：12 个 APA102 可编程 RGB LED，连接到 SPI 接口
* Raspberry Pi 40 针头：兼容 Raspberry Pi Zero 和 Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+ 和 Raspberry Pi 4
* AC108：高度集成的四通道 ADC，具有 I2S/TDM 输出转换功能
* I2C：Grove I2C 端口，连接到 I2C-1
* GPIO12：Grove 数字端口，连接到 GPIO12 和 GPIO13

注意：如果使用 APA102 RGB LED，请确保首先将 `GPIO5` 设置为 HIGH，以启用 LED 的 VCC。

## 入门指南

**将 ReSpeaker 4-Mic Array 连接到 Raspberry Pi**

将 ReSpeaker 4-Mic Array 安装到 Raspberry Pi 上，确保在堆叠 ReSpeaker 4-Mic Array 时针脚正确对齐。

注意：不允许热插拔 ReSpeaker 4-Mic Array，这会损坏设备。

![连接图1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![连接图2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**安装驱动**

确保您的 Raspberry Pi 正在运行 [最新的 Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/)。（*更新于 2021.06.30*）

* 第一步：获取 Seeed 声卡源代码，安装并重启。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

* 第二步：然后在 Raspberry Pi 上选择音频输出：

```sh
sudo raspi-config
# 选择 1 系统选项
# 选择 S2 音频
# 选择您偏好的音频输出设备
# 选择完成
```

* 第三步：检查声卡名称是否如下所示：

```sh
pi@raspberrypi:~ $ arecord -L
null
    丢弃所有样本（播放）或生成零样本（捕获）
jack
    JACK 音频连接工具包
pulse
    PulseAudio 声音服务器
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    默认音频设备
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    直接样本混合设备
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    直接样本监听设备
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    无任何转换的直接硬件设备
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    带有所有软件转换的硬件设备
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB 流输出
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB 流输出
```

如果我们需要更改 `alsa` 设置，可以使用 `sudo alsactl --file=ac108_asound.state store` 保存设置。当需要再次使用这些设置时，可以将其复制到：`sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

* 第四步：打开 Audacity，选择 **AC108 & 4 channels** 作为输入，选择 **bcm2835 alsa: - (hw:0:0)** 作为输出进行测试：

```sh
sudo apt update
sudo apt install audacity
audacity                      // 运行 Audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

* 如果您使用的是 Lite Raspbian Pi OS 镜像且没有 GUI，可以使用 `arecord` 录音并使用 `aplay` 播放：

```
sudo apt-get install sox                             // 用于音频转换
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // 仅支持 4 通道
sox hello.wav -c 2 stereo.wav                        // 转换为立体声
aplay stereo.wav                                      // 确保默认设备
                                                     // 音频将通过 Raspberry Pi 的音频插孔输出
```

## 使用概述

要运行以下示例，请将 [4mics_hat 仓库](https://github.com/respeaker/4mics_hat.git) 克隆到您的 Raspberry Pi 上：

```
git clone https://github.com/respeaker/4mics_hat.git
```

所有在下面示例中提到的 Python 脚本都可以在此仓库中找到。要安装必要的依赖项，请在 mic_hat 仓库文件夹中运行以下命令：

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LED**

每个板载 APA102 LED 都有一个额外的驱动芯片。驱动芯片负责通过其输入线接收所需的颜色，并保持该颜色直到接收到新的命令。

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

* 第一步：激活 SPI：

```bash
sudo raspi-config
```

1. 选择 "Interfacing Options"
2. 选择 "SPI"
3. 选择启用 SPI
4. 最后，退出工具

* 第二步：然后运行示例代码，现在我们可以看到 LED 像 Alexa 助手一样闪烁。

```bash
python3 interfaces/pixels.py
```

### 使用 Python 录制声音

我们使用 [PyAudio Python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来录制声音。

首先，运行以下脚本以获取 2 Mic pi hat 的设备索引号：

```bash
python3 recording_examples/get_device_index.py
```

您将看到如下设备 ID：

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

要录制声音，请使用 nano 或其他文本编辑器打开 ```recording_examples/record.py``` 文件，并将 `RESPEAKER_INDEX = 2` 更改为您系统中 ReSpeaker 的索引号。然后运行 Python 脚本 record.py 进行录音：

```bash
python3 recording_examples/record.py
```

* 第六步：如果您想从 4 个通道中提取通道 0 的数据，请查看 ```record_one_channel.py``` 的内容。对于其他通道 X，请将 [0::4] 更改为 [X::4]。

```bash
python3 recording_examples/record_one_channel.py
```

要播放录制的样本，您可以使用 aplay 系统工具，例如：

```bash
aplay -f cd -Dhw:0 output.wav #用于立体声
aplay -D plughw:0,0 output_one_channel.wav #用于单声道的一个通道
```

## 实时声音源定位与跟踪

[ODAS](https://github.com/introlab/odas) 是 Open embeddeD Audition System 的缩写。这是一个专门用于执行声音源定位、跟踪、分离和后过滤的库。

* 第一步：获取 [ODAS](https://github.com/introlab/odas.git) 并构建它。

可执行文件将在 bin 目录中生成：

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

* 第二步：获取 [ODAS Studio](https://github.com/introlab/odas_web) 并运行它。

安装 nodejs v12.22 和 npm 6.14：

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

确保安装了相关的编译工具：

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

使用 npm 安装 odas_web 的依赖项：

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

我们的目标是安装相关的依赖模块而无需重新构建，因此可以忽略重建期间的错误。然后运行 npm start：

```bash
npm start
```

或者我们可以将 Python 降级到 2.7 来构建旧的 election-rebuild 模块。（此步骤可以跳过）

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

* 第三步：odascore 位于 **~/Desktop/odas/build/bin/odaslive**，配置文件位于 **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg**。

我们需要修改配置以将声卡指定为我们的设备：

```bash
arecord -l  #运行此命令确保已安装 arecord
```

您将看到类似以下的输出：

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

在配置文件的第 18 行更改声卡指定：

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# 然后输入 :18
# 按 Enter
# 按 i
# 更改 card = YOUR CARD ;  # 我们在 "arecord -l" 中找到的
# 我的配置为：
# card = 3 ;
# 然后输入 :wq  # 保存配置文件
```

然后我们打开 odas 的 Web 界面，在 **Local System Monitor** 界面中可以看到系统监控数据，并在 **ODAS Control** 界面中选择控制核心和读取的配置文件。

启动 odas Web GUI：

```bash
cd ~/Desktop/odas_web
npm start
```

点击 **ODAS Core** 下的空白部分以调出文件浏览器，并选择核心路径为 "~/Desktop/odas/build/bin/odaslive"。

点击 **ODAS Config** 下的空白部分以调出文件浏览器，并选择配置路径为 "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg"。

正确配置后将如下所示：

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## 在边缘启用语音识别功能：Picovoice

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **帮助企业快速创新并通过私有语音 AI 实现差异化**。利用我们的语音识别和 [**自然语言理解 (NLU) 技术**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)，围绕您的品牌和产品构建统一的 AI 策略。

**Seeed 已与 Picovoice 合作，为开发者提供基于 [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) 的边缘语音识别解决方案。**

Picovoice 是一个端到端的平台，可根据您的需求构建语音产品。它支持创建类似 Alexa 和 Google 的语音体验，但完全在设备上运行。Picovoice 的优势包括：

* **隐私保护**：所有处理均离线完成，天然符合 HIPAA 和 GDPR 标准。
* **可靠性**：无需持续网络连接即可运行。
* **零延迟**：边缘优先架构消除了不可预测的网络延迟。
* **高准确性**：对噪声和混响具有强大的抗干扰能力，性能远超基于云的替代方案。
* **跨平台**：一次设计，随处部署。使用熟悉的语言和框架进行构建。

### 使用 ReSpeaker 4-Mic Array 搭配 Picovoice 入门指南

**步骤 1.** 请先完成 **上述关于 ReSpeaker 4-Mic Array 与 Raspberry Pi 的分步教程**。

**注意：** 请确保 `Audacity` 和 `APA102` LED 在 ReSpeaker 4-Mic Array 与 Raspberry Pi 上正常工作。

**步骤 2.** 打开终端并输入以下命令安装 `pyaudio` 驱动。

```sh
pip3 install pyaudio
```

**注意：** 请确保您的 Raspberry Pi 上已安装 `pip3`

**步骤 3.** 在终端中输入以下命令以 **安装适用于 ReSpeaker 4-Mic Array 的 Picovoice 演示程序**。

```sh
pip3 install pvrespeakerdemo
```

### 演示使用方法

该演示利用 Raspberry Pi 上的 ReSpeaker 4-Mic Array 和 Picovoice 技术来控制 LED。**此演示通过唤醒词 "`Picovoice`" 触发，并准备执行后续操作，例如打开和关闭 LED，以及更改 LED 颜色。**

安装完成后，在终端中输入以下命令运行演示：

```sh
picovoice_respeaker_demo
```

### 语音命令

以下是此演示的语音命令：

* **Picovoice**

演示输出：

```txt
wake word
```

* **Turn on the lights**

您应该看到灯光打开，并在终端中显示以下消息：

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

终端中显示的命令列表如下：

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

此外，您可以尝试以下命令更改颜色：

* **Picovoice, set the lights to orange**

关闭灯光：

* **Picovoice, turn off all lights**

**演示视频展示**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### 演示源代码

该演示基于 **[Picovoice SDK](https://github.com/Picovoice/picovoice)** 构建。演示源代码可在 GitHub 上找到：[Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### 不同的唤醒词

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) 包含免费样本唤醒词，采用 Apache 2.0 许可，包括主要语音助手（例如 "**`Hey Google`**"、"**`Alexa`**"）以及有趣的唤醒词（例如 "**`Computer`**" 和 "**`Jarvis`**"）。

### 自定义语音命令

灯光命令由 Picovoice 的 *Speech-to-Intent context* 定义。您可以使用 Picovoice Console 输入允许的语法来设计和训练上下文。通过麦克风按钮在浏览器中编辑时测试您的更改。访问 [Picovoice Console](https://picovoice.ai/console/) 并注册账户。使用 **Rhino Speech-to-Intent 编辑器** 创建上下文，然后为 Raspberry Pi 训练它们。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 多唤醒词示例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

为了展示 Picovoice 的能力，我们还准备了使用 ReSpeaker 4-Mic Array 和 Raspberry Pi 的多唤醒词示例！不同的唤醒词可以设置为执行特定任务。

*此包包含一个命令行演示，用于使用 Porcupine 控制 ReSpeaker 4-Mic 麦克风阵列的 LED。*

### Porcupine

**Porcupine** 是一个高精度且轻量级的唤醒词引擎。它支持构建始终监听的语音应用程序。其特点包括：

* 使用在真实环境中训练的深度神经网络。
* 紧凑且计算效率高，非常适合物联网。
* 跨平台支持。支持 Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64) 和网页浏览器。此外，企业客户还可以访问 ARM Cortex-M SDK。
* 可扩展性强。可以检测多个始终监听的语音命令，而不会增加运行时开销。
* 自助服务。开发者可以使用 [Picovoice Console](https://picovoice.ai/console/) 训练自定义唤醒词模型。

#### 多唤醒词入门

在终端中运行以下命令以安装演示驱动：

```sh
pip3 install ppnrespeakerdemo
```

#### 多唤醒词使用方法

在安装驱动后，在终端中运行以下命令：

```sh
porcupine_respeaker_demo
```

等待演示初始化并在终端中打印 `[Listening]`。然后说：

> Picovoice

演示输出：

```text
detected 'Picovoice'
```

灯光现在设置为 `绿色`。然后说：

> Alexa

灯光现在设置为 `黄色`。然后说：

> Terminator

以关闭灯光。

#### 唤醒词与颜色

以下是与此演示支持的唤醒词相关联的颜色：

* ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
* ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
* ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
* ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
* ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
* ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
* ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
* ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
* ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### 多唤醒词示例源代码

请查看此示例的完整源代码：[Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Picovoice技术支持

如果您在使用Picovoice时遇到技术问题，请访问 **[Picovoice](https://github.com/Picovoice)** 进行讨论。

## 常见问题

**Q1: 运行 `kws_doa.py` 并说 `snow boy` 时没有响应**

A2: 请运行 Audacity 确保4个通道正常工作。如果有一个通道没有数据，当我们说 `snow boy` 时将不会有响应。

**Q2: 运行 `sudo pip install pyaudio` 时出现 `#include "portaudio.h"` 错误**

A3: 请运行以下命令解决问题：

```sh
sudo apt-get install portaudio19-dev
```

**Q3: 在 `journalctl` 中出现 `...WARNING: memory leak will occur if overlay removed...` 消息**

A4: 在驱动首次加载（启动后）时确实会出现一次性的小内存损失。然而，由于这是每次启动或加载时发生的情况，而典型用户每次启动只需加载一次驱动，因此每次启动丢失几字节内存并不会产生影响。因此，这只是一个小问题，不太可能对用户产生实际影响，除了看到有关每次启动内存损失的警告消息。

## 资源

* **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
* **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
* **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
* **[AC108]** [AC108数据表](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
* **[驱动]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[算法]** [算法包括DOA、VAD、NS](https://github.com/respeaker/mic_array)
* **[语音引擎]** [语音引擎项目，提供创建语音启用对象的构建模块](https://github.com/voice-engine/voice-engine)
* **[算法]** [AEC](https://github.com/voice-engine/ec)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>