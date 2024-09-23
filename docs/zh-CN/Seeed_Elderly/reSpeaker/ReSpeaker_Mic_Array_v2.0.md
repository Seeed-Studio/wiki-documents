---
description: ReSpeaker Mic Array v2.0
title: ReSpeaker Mic Array v2.0
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Mic_Array_v2.0
date: 4/14/2023
author: H
sku: 107990053
---
<!-- ---
name: ReSpeaker Mic Array v2.0
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker Mic Array v2.0
prodimagename:
surveyurl:
sku: 107990053
--- -->

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4_mic_array.png)

Seeed 的 ReSpeaker Mic Array v2.0 是基于 XVSM-2000 的 ReSpeaker Mic Array v1.0 的升级版本。v2.0 是基于 XMOS 的 XVF-3000 开发。它可以堆叠 (连接) 到 ReSpeaker Core 的顶部，显着改善语音交互体验。该主板集成了 4 个 PDM 麦克风，有助于将 ReSpeaker 的声学 DSP 性能提高到更高的水平。

ReSpeaker Mic Array v2.0 直接支持 USB Audio Class 1.0 (UAC 1.0)。所有主流的操作系统，如 Windows，MacOS，Linux 都与 UAC 1.0 兼容，因此它可以作为声卡运行而无需 ReSpeaker Core，但具有语音算法。

ReSpeaker Mic Array v2.0 有两个固件，一个包含语音算法，另一个仅捕获用于特殊用途的原始语音数据。

<!-- ![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG) -->
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 请点击此处购买 🖱️</font></span></strong>
    </a>
</div>

## 版本日志

| 产品版本          | 版本介绍                                                                  | 发布日期 |
|--------------------------|--------------------------------------------------------------------------|---------------|
| ReSpeaker Mic Array v1.0 | 初始版本                                                                  | 2016 年 8 月 15 日 |
| ReSpeaker Mic Array v2.0 | MCU 更换为 XVF-3000，Mic 从 7 减少到 4 | 2018 年 1 月 25 日  |

## 产品特性

- 远场语音捕获
- UAC 1.0
- 四麦阵列
- 12 个可编程 RGB LED 指示灯
- 语音算法和功能
- 语音活动检测 Voice Activity Detection
- DOA(只能输出角度)
- 波束成形
- 噪声抑制
- 消混响
- 声学回声消除

## 规格参数

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg" style={{tableLayout: 'fixed', width: 518}}>
  <colgroup>
    <col style={{width: 151}} />
    <col style={{width: 367}} />
  </colgroup>
  <tbody><tr>
      <th className="tg-031e">项</th>
      <th className="tg-031e">参数</th>
    </tr>
    <tr>
      <td className="tg-031e" rowSpan={7}>16 内核 XVF-3000</td>
      <td className="tg-031e">2 个 xCore 磁贴上的 16 个实时逻辑核心</td>
    </tr>
    <tr>
      <td className="tg-031e">dual issue 模式下内核共享最高可达 2400 MIPS</td>
    </tr>
    <tr>
      <td className="tg-yw4l">512KB 内部单周期 SRAM 和 2MB 内置闪存</td>
    </tr>
    <tr>
      <td className="tg-yw4l">16KB 内部 OTP (每块最大 8KB)</td>
    </tr>
    <tr>
      <td className="tg-yw4l">USB PHY，完全符合 USB 2.0 规范</td>
    </tr>
    <tr>
      <td className="tg-yw4l">可编程 I/O</td>
    </tr>
    <tr>
      <td className="tg-yw4l">支持 DFU 模式</td>
    </tr>
    <tr>
      <td className="tg-yw4l" rowSpan={7}>4 个数字麦克风 (型号 : MP34DT01-M)</td>
      <td className="tg-yw4l">单电源电压</td>
    </tr>
    <tr>
      <td className="tg-yw4l">低功耗</td>
    </tr>
    <tr>
      <td className="tg-yw4l">120 dB SPL 声学过载点</td>
    </tr>
    <tr>
      <td className="tg-yw4l">61 dB 信噪比</td>
    </tr>
    <tr>
      <td className="tg-yw4l">全方位的灵敏度</td>
    </tr>
    <tr>
      <td className="tg-yw4l">-26 dB FS 灵敏度</td>
    </tr>
    <tr>
      <td className="tg-yw4l">PDM 输出</td>
    </tr>
    <tr>
      <td className="tg-yw4l" rowSpan={2}>12 RGB LEDs (型号 : APA102)</td>
      <td className="tg-yw4l">256 级亮度</td>
    </tr>
    <tr>
      <td className="tg-yw4l">800kHz 线路数据传输</td>
    </tr>
    <tr>
      <td className="tg-yw4l" rowSpan={4}>音频输出</td>
      <td className="tg-yw4l">板载 3.5mm Aux 输出</td>
    </tr>
    <tr>
      <td className="tg-yw4l">WOLFSON WM8960</td>
    </tr>
    <tr>
      <td className="tg-yw4l">24 位或 16 位 16kHz 立体声输出</td>
    </tr>
    <tr>
      <td className="tg-yw4l">16 Ω @ 3.3 V 下输出功率为 40mW</td>
    </tr>
    <tr>
      <td className="tg-yw4l">尺寸</td>
      <td className="tg-yw4l">直径 70mm</td>
    </tr>
    <tr>
      <td className="tg-yw4l" rowSpan={2}>功率</td>
      <td className="tg-yw4l">Micro USB 或扩展接头供 5V 电源</td>
    </tr>
    <tr>
      <td className="tg-yw4l">功耗 190mA</td>
    </tr>
  </tbody></table>

## 硬件概述

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Hardware%20Overview.png)

- <font face="" size={3} font color="ff0000">①</font> **XMOS XVF-3000 :**
它集成了先进的 DSP 算法，包括声学回声消除 (AEC)，波束成形，去混响，噪声抑制和增益控制。

- <font face="" size={3} font color="ff0000">②</font> **Digital Microphone :**
MP34DT01-M 是一款超小型，低功耗，全方位的数字 MEMS 麦克风，内置电容式感应元件和 IC 接口。

- <font face="" size={3} font color="ff0000">③</font> **RGB LED :**
三色 RGB LED。

- <font face="" size={3} font color="ff0000">④</font> **USB Port :**
提供电源并控制麦克风阵列。

- <font face="" size={3} font color="ff0000">⑤</font> **3.5mm Headphone jack :**
输出音频，我们可以将有源音响或耳机插入此端口。

- <font face="" size={3} font color="ff0000">⑥</font> **WM8960 :**
WM8960 是一款低功耗立体声编解码器，采用 D 类扬声器驱动器，可为每个通道提供 1 W，总计 8 W 的负载。

### 引脚图

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Pin_Map.png)

## 尺寸图

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension.png)

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension1.png)

## 创意应用

- USB 语音捕获
- 智能音响
- 智能语音助理系统
- 录音机
- 语音会议系统
- 会议通信设备
- 语音互动机器人
- 车载语音助手
- 其他需要语音命令的场景

## 入门指导

!!!Note
    ReSpeaker Mic Array v2.0 兼容 Windows，Mac 和 Linux 系统。以下脚本在 Python2.7 上进行了测试。

### 安装 DFU 和 LED 控制驱动程序  

- **Windows :** 音频录制和播放运行良好。Windows 上仅需 Libusb-win32 驱动程序来控制 LED 指示灯。我们使用 [一个方便的工具 - Zadig](https://zadig.akeo.ie/)为 `SEEED DFU` 和 `SEEED Control` 安装 libusb-win32 驱动程序 (ReSpeaker Mic Array 在 Windows 设备管理器中会显示 2 个设备)。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

!!!Warning
    请确保选择 libusb-win32，而不是 WinUSB 或 libusbK。

- **MAC :** 无需安装驱动
- **Linux :** 无需安装驱动

### 更新固件

有2个固件。 一个包含 1 个通道数据，另一个包含 6 个通道数据。这里是差异表 :

| 固件版本             | 通道数 | 说明                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin | 1              | 为 ASR 处理音频                                                                                                                                                 |
| 6_channels_firmware.bin      | 6              |  通道 0 : ASR 处理音频，通道 1 : mic1 原始数据，通道 2 : mic2 原始数据，通道 3 : mic3 原始数据，通道 4 : mic4 原始数据，通道 5 : 合并播放 |

这是 audacity 刷 i6_firmware 后的录音
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

**对于 Linux 系统 :**  ReSpeaker Mic Array v2.0 支持 USB DFU。我们开发了一个 [python script dfu.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/dfu.py) 来通过 USB 更新固件。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 1_channel_firmware.bin  # 这个是参数可以在https://github.com/respeaker/usb_4_mic_array.git上查看可以选择下载固件哈
```

这是固件下载结果。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**对于 Windows 用户 :** 我们不建议使用 Windows 更新固件。

### 控制 LED

我们可以通过 USB 控制 ReSpeaker Mic Array V2 的 LED。USB 设备具有供应商特定的等级接口，可用于通过 USB 控制传输发送数据。我们引用 [pyusb python library](https://github.com/pyusb/pyusb) 并发布 [usb_pixel_ring python library](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)。

LED 控制命令由 pyusb 的 usb.core.Device.ctrl_transfer() 发送，其参数如下 :

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

这里是 usb_pixel_ring APIs。

| Command | Data                           | API                            | Note                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | trace mode, LEDs changing depends on VAD*and DOA*                                                                |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | mono mode, set all RGB LED to a single color, for example Red(0xFF0000), Green(0x00FF00)， Blue(0x0000FF)         |
| 2       | [0]                            | pixel_ring.listen()            | listen mode, similar with trace mode, but not turn LEDs off                                                       |
| 3       | [0]                            | pixel_ring.speak()             | wait mode                                                                                                         |
| 4       | [0]                            | pixel_ring.think()             | speak mode                                                                                                        |
| 5       | [0]                            | pixel_ring.spin()              | spin mode                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | custom mode, set each LED to its own color                                                                        |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | set brightness, range: 0x00~0x1F                                                                                  |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | set color palette, for example, pixel_ring.set_color_palette(0xff0000, 0x00ff00) together with pixel_ring.think() |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | set center LED: 0 - off, 1 - on, else - depends on VAD                                                            |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | show volume, range: 0 ~ 12                                                                                        |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | set pattern, 0 - Google Home pattern, others - Echo pattern                                                       |

**对于 Linux 系统 :** 这里是控制 LED 的示例。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

这里是 usb_mic_array.py 的代码。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    pixel_ring.change_pattern('echo')
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**对于 Windows 系统** 这里是控制 LED 的示例

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

用下面的代码创建一个 [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) 并运行 'python led_control.py'

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()

```

:::note
如果您在屏幕上看到 "None"，请重新安装 libusb-win32 驱动程序。
:::

### 调音

我们可以配置一些内置算法的参数。它适用于 Linux 和 Windows。

- 获取完整列表参数 :

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 例如，我们可以关闭自动增益控制 (AGC) :

```
python tuning.py AGCONOFF 0
```

同时，对应liunx我们也可以安装一个可视化的调音软件

```
sudo apt-get install pavucontrol
```

### 提取语音

使用 [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) 通过 USB 提取语音。

**对于 Linux 系统 :** 可以使用下面的命令来录制或播放语音。

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

我们也可以使用 python 脚本来提取语音。

- 步骤 1，我们需要运行以下脚本来获取麦克风阵列的设备索引号 :

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Step 2, 复制下面的代码并粘贴到 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py).

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Step 3, 按 Ctrl + X 退出并按 Y 保存。

- Step 4, 运行 'sudo python get_index.py'，我们将看到如下的设备 ID。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- Step 5, 将 `RESPEAKER_INDEX = 2` 更改为索引号。运行 python 脚本 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 来录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 1 # change base on firmwares, default_firmware.bin as 1 or i6_firmware.bin as 6
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

**对于 Windows 系统:** 我们首先运行命令 'pip install pyaudio'，然后使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 和 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 来提取语音。

:::Warning
如果看到 "Error: %1 is not a valid Win32 application."，请安装 Python Win32 版本。
:::

### 实时声源定位跟踪

[ODAS](https://github.com/introlab/odas) 代表 Open embeddeD Audition System。这是一个专门用于声源定位，追踪，分离和后期过滤的库。

**对于 Linux 用户:**

- Step 1. 获得 ODAS 并构建它。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Step 2. 获得 [ODAS Studio](https://github.com/introlab/odas_web/releases) 然后打开.

- Step 3. odascore 将位于 odas/bin/odascore，配置文件是 [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg)。请根据您的声卡号更改 odas.cfg。

- Step 4. 使用包含 4 声道原始音频数据的 i6_firmware.bin 更新麦克风阵列。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/live_data.png)

**对于 Windows 系统 :** 请参考 [ODAS](https://github.com/introlab/odas).

### 基于树莓派的free-avs

**step 1. 配置和安装相关依赖**

```
git clone https://github.com/respeaker/4mics_hat.git
cd ~/4mics_hat
sudo apt install libatlas-base-dev     # 安装 snowboy dependencies
sudo apt install python-pyaudio        # 安装pyaudio音频处理包
pip install ./snowboy*.whl             # 安装 snowboy for KWS
pip install ./webrtc*.whl              # 安装 webrtc for DoA
cd ~/
git clone https://github.com/voice-engine/voice-engine #write by seeed
cd voice-engine/
python setup.py bdist_wheel
pip install dist/*.whl
cd ~/
git clone https://github.com/respeaker/avs
cd avs                                 # install Requirements
python setup.py install
pip install avs==0.5.3
sudo apt install libgstreamer1.0-0
sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly 
sudo apt install gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tool
sudo apt install gstreamer1.0-plugins-good
sudo apt install python-gi gir1.2-gstreamer-1.0
pip install tornado==5.1.1
sudo apt install mpg123
```

**step 2. 取得授权**

在终端运行 alexa-auth ，然后登陆获取alexa的授权， 或者运行 dueros-auth 获取百度的授权。 授权的文件保存在/home/pi/.avs.json。
![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/auth.png)

:::note
如果我们在 alexa-auth 和 dueros-auth之间切换, 请先删除 /home/pi/.avs.json 。 这个是隐藏文件，请用 ls -la 显示文件。
:::

**step 3. 让我们High起来!**

```
cd ~/4mics_hat
nano ns_kws_doa_alexa_with_light.py
```

按照下面的信息更新下面代码的设置:

```
"""
Hands-free Voice Assistant with Snowboy and Alexa Voice Service.

Requirement:
    sudo apt-get install python-numpy
    pip install webrtc-audio-processing
    pip install spidev
"""


import time
import logging
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.ns import NS
from voice_engine.doa_respeaker_4mic_array import DOA
from avs.alexa import Alexa


def main():
    logging.basicConfig(level=logging.DEBUG)

    src = Source(rate=16000, channels=1, device_name='plughw:1,0')
    ch1 = ChannelPicker(channels=1, pick=1)
    ns = NS(rate=16000, channels=1)
    kws = KWS(model='snowboy')
    doa = DOA(rate=16000)
    alexa = Alexa()


    def on_detected(keyword):
        direction = doa.get_direction()
        logging.info('detected {} at direction {}'.format(keyword, direction))
        alexa.listen()

    kws.on_detected = on_detected

    src.link(ch1)
    ch1.link(ns)
    ns.link(kws)
    kws.link(alexa)

    src.link(doa)

    src.recursive_start()

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()


if __name__ == '__main__':
    main()
```

假如需要使用`mic-array`作为音频输出口的话则如下图进行设置
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/audio-output.png)
运行`PLAYER=mpg123 python ns_kws_doa_alexa_with_light.py`, 我们会在终端看到很多 debug 的消息. 当我们看到`status code: 204`的时候, 请说`snowboy`来唤醒 respeaker。接下来 respeaker 上的 led 灯亮起来, 我们可以跟他对话, 比如问，"谁是最帅的?" 或者 "播放刘德华的男人哭吧哭吧不是罪"。小伙伴，尽情的 High 起来吧。

## FAQ

**Q1: 内置算法的参数**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw Adaptive Echo Canceler updates inhibit.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
AECNORM          float 16 0.25 rw Limit on norm of AEC filter coefficients
AECPATHCHANGE    int 1 0 ro AEC Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
AECSILENCELEVEL  float 1 1e-09 rw Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))
AECSILENCEMODE   int 1 0 ro AEC far-end silence detection status.
                                                            0 = false (signal detected)
                                                            1 = true (silence detected)
AGCDESIREDLEVEL  float 0.99 1e-08 rw Target power level of the output signal.
                                                            [−inf .. 0] dBov (default: −23dBov = 10log10(0.005))
AGCGAIN          float 1000 1 rw Current AGC gain factor.
                                                            [0 .. 60] dB (default: 0.0dB = 20log10(1.0))
AGCMAXGAIN       float 1000 1 rw Maximum AGC gain factor.
                                                            [0 .. 60] dB (default 30dB = 20log10(31.6))
AGCONOFF         int 1 0 rw Automatic Gain Control.
                                                            0 = OFF
                                                            1 = ON
AGCTIME          float 1 0.1 rw Ramps-up / down time-constant in seconds.
CNIONOFF         int 1 0 rw Comfort Noise Insertion.
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA angle. Current value. Orientation depends on build configuration.
ECHOONOFF        int 1 0 rw Echo suppression.
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw Adaptive beamformer updates.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
FSBPATHCHANGE    int 1 0 ro FSB Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
FSBUPDATED       int 1 0 ro FSB Update Decision.
                                                            0 = false (FSB was not updated)
                                                            1 = true (FSB was updated)
GAMMAVAD_SR      float 1000 0 rw Set the threshold for voice activity detection.
                                                            [−inf .. 60] dB (default: 3.5dB 20log10(1.5))
GAMMA_E          float 3 0 rw Over-subtraction factor of echo (direct and early components). min .. max attenuation
GAMMA_ENL        float 5 0 rw Over-subtraction factor of non-linear echo. min .. max attenuation
GAMMA_ETAIL      float 3 0 rw Over-subtraction factor of echo (tail components). min .. max attenuation
GAMMA_NN         float 3 0 rw Over-subtraction factor of non- stationary noise. min .. max attenuation
GAMMA_NN_SR      float 3 0 rw Over-subtraction factor of non-stationary noise for ASR.
                                                            [0.0 .. 3.0] (default: 1.1)
GAMMA_NS         float 3 0 rw Over-subtraction factor of stationary noise. min .. max attenuation
GAMMA_NS_SR      float 3 0 rw Over-subtraction factor of stationary noise for ASR.
                                                            [0.0 .. 3.0] (default: 1.0)
HPFONOFF         int 3 0 rw High-pass Filter on microphone signals.
                                                            0 = OFF
                                                            1 = ON - 70 Hz cut-off
                                                            2 = ON - 125 Hz cut-off
                                                            3 = ON - 180 Hz cut-off
MIN_NN           float 1 0 rw Gain-floor for non-stationary noise suppression.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NN_SR        float 1 0 rw Gain-floor for non-stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NS           float 1 0 rw Gain-floor for stationary noise suppression.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
MIN_NS_SR        float 1 0 rw Gain-floor for stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
NLAEC_MODE       int 2 0 rw Non-Linear AEC training mode.
                                                            0 = OFF
                                                            1 = ON - phase 1
                                                            2 = ON - phase 2
NLATTENONOFF     int 1 0 rw Non-Linear echo attenuation.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw Non-stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw Non-stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro Current RT60 estimate in seconds
RT60ONOFF        int 1 0 rw RT60 Estimation for AES. 0 = OFF 1 = ON
SPEECHDETECTED   int 1 0 ro Speech detection status.
                                                            0 = false (no speech detected)
                                                            1 = true (speech detected)
STATNOISEONOFF   int 1 0 rw Stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw Stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw Transient echo suppression.
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD voice activity status.
                                                            0 = false (no voice activity)
                                                            1 = true (voice activity)
```

**Q2: ImportError: No module named usb.core**

A2: Run sudo pip install pyusb to install the pyusb.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**Q3: 能直接通过3.5mm耳机孔听到采样的声音吗?**

A5 不行的。3.5mm耳机孔音源来自于上位机，但是如果用树莓派的话可以通过执行arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd 达到目的

## 资源下载

- **[产品简介]** [ReSpeaker MicArray v2.0 Product Brief](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/ReSpeaker%20MicArray%20v2.0%20Product%20Brief.pdf)
- **[产品简介]** [XVF3000 Product Brief](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[芯片数据手册]** [XVF3000 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

## 技术支持

如果您有任何技术问题，请联系 techsupport@seeed.cc。或者将问题提交到我们的 [论坛](http://seeedstudio.com/forum/)。
