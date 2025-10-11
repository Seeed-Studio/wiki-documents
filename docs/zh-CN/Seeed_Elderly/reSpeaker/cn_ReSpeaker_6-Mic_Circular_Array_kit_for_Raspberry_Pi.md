---
description: 适用于树莓派的 ReSpeaker 6-Mic 圆形阵列套件
title: 适用于树莓派的 ReSpeaker 6-Mic 圆形阵列套件
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)

Seeed 的 ReSpeaker 6-Mic 圆形阵列套件是一款为树莓派设计的扩展板，也称为 HAT。它是一个圆形麦克风阵列套件，配备六个麦克风，专为 AI 和语音应用而设计。这意味着您可以使用树莓派构建更强大、更灵活的语音产品，可以集成 Amazon Alexa Voice Service、Google Assistant 等。

适用于树莓派的 ReSpeaker 6-Mic 圆形阵列套件由两块板组成，一块是语音配件 HAT，另一块是六麦克风圆形阵列。

适用于树莓派的 ReSpeaker 6-Mic 圆形阵列套件在 Raspbian 系统中支持 8 个输入和 8 个输出通道。前 6 个输入通道用于麦克风录音，其余 2 个输入通道是播放的回声通道。前 2 个输出通道用于播放，其余 6 个输出通道为虚拟通道。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 2 个 ADC 芯片和 1 个 DAC 芯片
- 8 个输入和 8 个输出通道
- 六麦克风阵列
- Grove 支持
- 树莓派兼容（支持 Raspberry Pi Zero 和 Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4）
- 耳机和扬声器语音输出

## 规格

- 2 x X-Power AC108 ADC
- 6 x 高性能麦克风
- 1 x X-Power AC101 DAC
- 语音输出：
  - 3.5mm 耳机音频插孔
  - 扬声器插孔
- 兼容树莓派 40 针接头
- 麦克风：MSM321A3729H9CP
- 灵敏度：-22 dBFS（全向）
- 信噪比：59 dB
- 最大采样率：48Khz

## 应用

- 智能音箱
- 智能语音助手系统
- 录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 车载语音助手
- 其他需要语音命令的场景

## 硬件概述

**系统图**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**接口**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
连接后，请务必使用万用表确定电路的导通是否如上图所示。
:::

## 装配图

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## 入门指南

### 硬件

**前提条件**

ReSpeaker 6-Mic 圆形阵列    x1

[Raspberry Pi 3B 或 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB 数据线](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

耳机或扬声器                 x1

:::tip
实际上 ReSpeaker 6-Mic 圆形阵列支持 Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 model B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4，在本教程中我们使用的是 Raspberry Pi 3。
:::

**连接**

**步骤 1.**  通过排线将 *ReSpeaker Voice Accessory HAT* 与 *ReSpeaker 6-Mic 圆形阵列* 连接

**步骤 2.**  通过 40 针 GPIO 将 *ReSpeaker Voice Accessory HAT* 插入 *Raspberry Pi*

**步骤 3.**  将 *耳机* 插入 *3.5mm 耳机音频插孔* 或将 *扬声器* 插入 *JST 2.0 扬声器插孔*

**步骤 4.**  通过 micro-USB 数据线将 *Raspberry Pi* 与 *PC* 连接

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### 软件

**前提条件**

*方案 A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

您需要使用 *Putty* 或其他 *ssh* 工具来连接您的树莓派。在开始之前，请确保：

1- 打开您的树莓派的 *ssh* 功能以允许 putty 连接。如果您不知道如何打开 *ssh*，请搜索 `how to setup ssh raspberry pi`

2- 您的树莓派和您的 PC 在同一个 WiFi 网络上工作。如果您不知道如何配置 WiFi，请搜索 `how to setup wifi raspberry pi`

3- 获取您的树莓派的 ip 地址，如果您不知道如何获取 ip 地址，请参考 [树莓派官方文档](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- 使用 ip 地址通过 putty ssh 服务将树莓派与您的 PC 连接。

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

然后请输入主机名和密码。默认 ID 是 `pi`，密码是 `raspberry`。

```
login as: pi
pi@192.168.43.210's password:raspberry

```

现在您已经进入系统，可以在 putty 中输入命令并使用您的树莓派了。

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

要让这个套件与 alexa 或 dueros 配合工作，您需要打开一个网站来获取授权。因此您需要使用 *VNC Viewer* 登录您的亚马逊或百度账户。所以请确保您已经开启了树莓派的 *VNC* 服务。

或者您可以考虑方案 B。

*方案 B*

如果您厌倦了上述所有步骤，您可以直接使用 HDMI 显示器并将 USB 键盘和 USB 鼠标插入您的树莓派，这样也可以工作，简单易行。

**步骤 1. 安装 seeed-voicecard**

获取 seeed voice card 源代码并安装所有 linux 内核驱动程序。

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh   
sudo reboot

```

**步骤 2. 检查声卡**

点击下方的命令来检查录音设备。

```
pi@raspberrypi:~ $ arecord -L
```

It should be like:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard,
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Hardware device with all software conversions 
```

使用以下命令检查播放设备。

```
pi@raspberrypi:~ $ aplay -L
```

它应该像这样：

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard,
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Hardware device with all software conversions

```

**步骤 3. 录制并播放**

你可以先录制然后播放，或者可以同时录制和播放。

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

#Doing capture && playback the same time
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wav is a mono channel wave file to play
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
使用6麦克风圆形阵列套件（或4麦克风线性阵列套件）的开发者同时进行录制和播放的限制：

-1. 必须先开始录制，否则录制通道可能会出现混乱。

-2. 播放输出通道必须填充8个相同的通道数据或4个相同的立体声通道数据，否则扬声器或耳机可能无法输出任何声音。

-3. 如果您想同时播放和录制，aplay音乐文件必须是单声道的，否则您无法使用此命令进行播放。
:::

您也可以使用Audacity进行播放和录制。

:::tip
您应该通过VNC打开Audacity，或者您可以直接使用显示器打开它
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### 玩转LED灯

6麦克风圆形阵列中有12个GRB LED灯，您可以自己配置这些LED灯，现在让我们看看如何点亮它们。

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

您将看到LED灯亮起并运行。您可以参考 `python examples/respeaker_4mic_array.py` 文件来制作您自己的效果。

## 实时声源定位和跟踪

[ODAS](https://github.com/introlab/odas) 代表开放式嵌入式听觉系统。这是一个专门用于执行声源定位、跟踪、分离和后滤波的库。让我们来体验一下吧。

- 步骤 1. 获取 ODAS 并构建它。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- 步骤 2. 获取 [ODAS Studio](https://github.com/introlab/odas_web/releases) 并打开它。

- 步骤 3. odascore 将位于 **odas/bin/odaslive**，**配置文件** 位于 [这里](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg)。

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## 提取语音

我们使用 [PyAudio python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来提取语音。

- 步骤 1，我们需要运行以下脚本来获取 6 麦克风 pi hat 的设备索引号：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- 步骤 2, 复制下面的代码并粘贴到 get_index.py 中。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- 步骤 3，按 Ctrl + X 退出并按 Y 保存。

- 步骤 4，运行 'sudo python get_index.py'，我们将看到如下所示的设备 ID。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- 步骤 5，将 `RESPEAKER_INDEX = 2` 改为索引号。运行 Python 脚本 record.py 来录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- 步骤 6. 如果您想从 8 个通道中提取通道 0 的数据，请按照以下代码操作。对于其他通道 X，请将 [0::8] 更改为 [X::8]。

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # extract channel 0 data from 8 channels, if you want to extract channel 1, please change to [1::8]
    a = np.fromstring(data,dtype=np.int16)[0::8]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## DOA

### 基于关键词的DOA

**要求**

- pyaudio
- numpy
- snowboy

**安装**

安装 pyaudio、numpy 和 snowboy，使用 virtualenv 创建虚拟 python 环境。

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**Let's say snowboy**

- 步骤 1. 运行 kws_doa.py

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

这是 kws_doa.py 的代码

```python
"""
Search the keyword "snowboy".
After finding the keyword, Direction Of Arrival (DOA) is estimated.

Hardware: ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('detected {} at direction {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # wait a second to allow other threads to exit
    time.sleep(1)


if __name__ == '__main__':
    main()
```

- 步骤 2. 让我们说雪人，这里是 DOA 的输出。

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
detected 1 at direction 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222detected 1 at direction 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222detected 1 at direction 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 237.455170747
```

## 按钮

如果你想检查你的 respeaker_6-Mic 是否正确安装在树莓派上。按钮是一个好方法。我们可以使用下面的代码来检查。

```python

import RPi.GPIO as GPIO
import time

BUTTON = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

## 常见问题

**Q1: 麦克风阵列中只有6个麦克风，怎么会是8通道？**

A1: 这个阵列中有2个AC108芯片，每个AC108芯片有4通道输出。所以总共有8个通道，其中6个用于麦克风，其余2个是播放通道。

**Q2: 如果树莓派可以检测到ReSpeaker 2-mics hat，但无法检测到ReSpeaker 6-mics圆形阵列？**

A2: 请点击树莓派 -> 首选项 -> 树莓派配置，然后选择接口选项卡，确保1-Wire是禁用状态。

## 资源

- **[PDF]** [AC101 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [ReSpeaker 6麦克风语音配件HAT圆形阵列外壳文件](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [ReSpeaker 6麦克风语音配件HAT圆形阵列2D文件](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[驱动]** [Seeed-Voice 驱动](https://github.com/respeaker/seeed-voicecard)
- **[算法]** [包含DOA、VAD、NS的算法](https://github.com/respeaker/mic_array)
- **[语音引擎]** [语音引擎项目，提供创建语音功能对象的构建块](https://github.com/voice-engine/voice-engine)
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
