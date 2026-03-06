---
description: ReSpeaker USB Mic Array
title: reSpeaker USB Mic Array
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker-USB-Mic-Array
sku: 107990193
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/ReSpeaker-USB-Mic-Array/
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/ReSpeaker-USB-Mics-box-preview.jpg)

:::important 
该产品现已停产 (EOL)。
如果你计划购买或开始一个新项目，我们强烈推荐使用[**XVF3000**](https://wiki.seeedstudio.com/cn/respeaker_mic_array_v3.0/)，这是更新且仍在支持的替代产品。
该产品已不再生产或进行主动维护。
:::

一个开箱即用的语音采集设备，就是客户的声音。

在过去的一年中，[Respeaker Mic Array V2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) 以开发板的形式已经销售超过 1 万片。客户不断要求提供带外壳的完整设备，而考虑到声学原理，要自己设计外壳对他们来说具有挑战性。

现在 Seeed 给出的答案就是 ReSpeaker USB Mic Array：

- 一个具有精心设计声学结构的开箱即用设备，为客户集成到其解决方案中提供了灵活性。
- 提供注塑外壳，可节省产品上市时间和模具成本。

ReSpeaker USB Mic Array 内部 PCBA 与 Respeaker Mic Array V2.0 之间的差异：

- 优化的电源电路
- 将音频插孔和 micro USB 接口移到了背面。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 远场语音采集
- 支持 USB Audio Class 1.0 (UAC 1.0)
- 四麦克风阵列
- 12 颗可编程 RGB LED 指示灯
- 语音算法和特性
  - 语音活动检测
  - 到达方向
  - 波束成形
  - 噪声抑制
  - 去混响
  - 声学回声消除

## 规格

- 来自 XMOS 的 XVF-3000
- 4 个高性能数字麦克风
- 支持远场语音采集
- 片上语音算法
- 12 颗可编程 RGB LED 指示灯  
- 麦克风：ST MP34DT01TR-M  
- 灵敏度：-26 dBFS（全向）  
- 声学过载点：120 dBSPL  
- 信噪比：61 dB  
- 电源：通过 Micro USB 提供 5V 直流电
- 尺寸：70mm（直径）  
- 3.5mm 音频插孔输出接口
- 功耗：5V，LED 亮时 180mA，LED 灭时 170mA
- 最大采样率：16Khz

## 硬件概览

![](https://files.seeedstudio.com/wiki/ReSpeaker-Mic-Array-v2.1/img/hardware_overview.jpg)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000：**
集成了高级 DSP 算法，包括声学回声消除 (AEC)、波束成形、去混响、噪声抑制和增益控制。

- **<font face="" size="3" font color="ff0000">②</font> 数字麦克风：**
MP34DT01-M 是一款超小型、低功耗、全向数字 MEMS 麦克风，由电容式传感元件和 IC 接口构成。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED：**
三色 RGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USB 接口：**
为麦克风阵列供电并进行控制。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mm 耳机插孔：**
输出音频，我们可以将有源音箱或耳机插入此接口。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960：**
WM8960 是一款低功耗立体声编解码器，带有 D 类扬声器驱动器，可在 8 Ω 负载上每通道提供 1 W 功率。

**系统框图**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

## 应用

- USB 语音采集
- 智能音箱
- 智能语音助手系统
- 录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 车载语音助手
- 其他语音交互场景

## 入门指南

:::note
ReSpeaker USB Mic Array 兼容 Windows、Mac、Linux 系统和 andriod。下面的脚本在 Python2.7 上测试通过。
:::

### 更新固件

下面是差异对比表。

| 固件                               | 通道数 | 说明                                                                                          |
|------------------------------------|----------|-----------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin             | 1        | 为 ASR 处理后的音频                                                                          |
| 6_channels_firmware.bin            | 6        | 通道 0：为 ASR 处理后的音频，通道 1-4：4 个麦克风的原始数据，通道 5：回放（出厂固件） |

**对于 Linux：** Mic 阵列支持 USB DFU。我们开发了一个 python 脚本 dfu.py，通过 USB 来更新固件。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download 1_channel_firmware.bin

```

下面是固件下载结果。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**对于 Windows/Mac：** 我们不建议使用 Windows/Mac 和 Linux 虚拟机来更新固件。

### 开箱演示

下面是使用 6 通道固件的声学回声消除示例。

- 步骤 1. 将 USB 线连接到 PC，并将音频插孔连接到扬声器。

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/_DAS5930.jpg)

- 步骤 2. 在 PC 端选择 mic array v2.1 作为输出设备。
- 步骤 3. 启动 audacity 进行录音。
- 步骤 4. 先在 PC 端播放音乐，然后再说话。
- 步骤 5. 我们会看到如下所示的 audacity 界面，请点击 **Solo** 来听每个通道的音频。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

通道 0 音频（由算法处理）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg"></source>
</audio>

通道 1 音频（Mic1 原始数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg"></source>
</audio>

通道 5 音频（回放数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg"></source>
</audio>

下面是关于 DOA 和 AEC 的视频。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/gGVQ-9f7azs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 安装 DFU 和 LED 控制驱动  

- **Windows：** 音频录制和回放在默认情况下工作良好。仅在 Windows 上控制 LED 和 DSP 参数时才需要安装 Libusb-win32 驱动。我们使用 [一个方便的工具 - Zadig](http://zadig.akeo.ie/) 为 `SEEED DFU` 和 `SEEED Control` 安装 libusb-win32 驱动（ReSpeaker Mic Array 在 Windows 设备管理器中有 2 个设备）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    请确保选择的是 libusb-win32，而不是 WinUSB 或 libusbK。
:::

- **MAC：** 不需要驱动。
- **Linux：** 不需要驱动。

### 调参

**对于 Linux/Mac/Windows：** 我们可以配置一些内置算法的参数。

- 获取完整参数列表，更多信息请参考 FAQ。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 示例 #1，我们可以关闭自动增益控制 (AGC)：

```
sudo python tuning.py AGCONOFF 0
```

- 示例 #2，我们可以查看 DOA 角度。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### 控制 LED

我们可以通过 USB 控制 ReSpeaker USB Mic Array 的 LED。该 USB 设备具有 Vendor Specific Class 接口，可用于通过 USB 控制传输发送数据。我们参考了 [pyusb python library](https://github.com/pyusb/pyusb)，并由此实现了 [usb_pixel_ring python library](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)。

LED 控制命令通过 pyusb 的 usb.core.Device.ctrl_transfer() 发送，其参数如下：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

下面是 usb_pixel_ring 的 API。

| 命令 | 数据                           | API                            | 说明                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | trace 模式，LED 的变化取决于 VAD* 和 DOA*                                                                |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | mono 模式，将所有 RGB LED 设置为单一颜色，例如 Red(0xFF0000)、Green(0x00FF00)，Blue(0x0000FF)         |
| 2       | [0]                            | pixel_ring.listen()            | listen 模式，与 trace 模式类似，但不会关闭 LED                                                       |
| 3       | [0]                            | pixel_ring.speak()             | wait 模式                                                                                                         |
| 4       | [0]                            | pixel_ring.think()             | speak 模式                                                                                                        |
| 5       | [0]                            | pixel_ring.spin()              | spin 模式                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.customize()         | custom 模式，为每个 LED 设置各自的颜色                                                                        |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 设置亮度，范围：0x00~0x1F                                                                                  |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | 设置调色板，例如 pixel_ring.set_color_palette(0xff0000, 0x00ff00) 与 pixel_ring.think() 一起使用 |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 设置中心 LED：0 - 关闭，1 - 打开，其他 - 取决于 VAD                                                            |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 显示音量，范围：0 ~ 12                                                                                        |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | 设置模式，0 - Google Home 模式，其他 - Echo 模式                                                       |

**适用于 Linux：** 下面是一个控制 LED 的示例。请按照以下命令运行演示程序。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

下面是 usb_mic_array.py 的代码。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
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

**适用于 Windows/Mac：** 下面是一个控制 LED 的示例。

- 步骤 1. 下载 pixel_ring。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- 步骤 2. 创建一个 [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py)，将以下代码写入其中并运行 'python led_control.py'

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
    如果你在屏幕上看到 "None" 被打印出来，请重新安装 libusb-win32 驱动。
:::

### DOA（声源到达方向）

**适用于 Windows/Mac/Linux：** 下面是一个查看 DOA 的示例。绿色 LED 是语音方向的指示灯。关于角度，请参考硬件概述。  

- 步骤 1. 下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 步骤 2. 在 usb_4_mic_array 文件夹下创建一个 [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py)，将以下代码写入其中并运行 'sudo python DOA.py'

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- 步骤 3. 我们将会看到如下所示的 DOA。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD（语音活动检测）

**适用于 Windows/Mac/Linux：** 下面是一个查看 VAD 的示例。红色 LED 是 VAD 的指示灯。

- 步骤 1. 下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 步骤 2. 在 usb_4_mic_array 文件夹下创建一个 [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py)，将以下代码写入其中并运行 'sudo python VAD.py'

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- 步骤 3. 我们将会看到如下所示的 DOA。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
对于 VAD 的阈值，我们也可以使用 GAMMAVAD_SR 来设置。更多细节请参考 [Tuning](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/#调优)。
:::

### 提取语音

我们使用 [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) 通过 USB 提取语音。

**适用于 Linux：**  我们可以使用以下命令来录制或播放语音。

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

我们也可以使用 python 脚本来提取语音。

- 步骤 1，我们需要运行以下脚本来获取 Mic Array 的设备索引号：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- 步骤 2，将以下代码复制并粘贴到 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 中。

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

- 步骤 4，运行 'sudo python get_index.py'，我们将会看到如下所示的设备 ID。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- 步骤 5，将 `RESPEAKER_INDEX = 2` 修改为索引号。运行 python 脚本 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 来录制一段语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
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

- 步骤 6. 如果你想从 6 个通道中提取通道 0 的数据，请参考以下代码。对于其他通道 X，请将 [0::6] 改为 [X::6]。

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 3  # refer to input device id
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
    # extract channel 0 data from 6 channels, if you want to extract channel 1, please change to [1::6]
    a = np.fromstring(data,dtype=np.int16)[0::6]
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

**适用于 Windows：**

- 步骤 1. 我们运行以下命令来安装 pyaudio。

```
 pip install pyaudio
```

- 步骤 2. 使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- 步骤 3. 修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 中的设备索引和通道数，然后提取语音。

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
    如果我们看到 "Error: %1 is not a valid Win32 application."，请安装 Python Win32 版本。
:::

**适用于 MAC：**

- 步骤 1. 我们运行以下命令来安装 pyaudio。

```
 pip install pyaudio
```

- 步骤 2. 使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- 步骤 3. 修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 中的设备索引和通道数，然后提取语音。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

### 实时声源定位与跟踪

[ODAS](https://github.com/introlab/odas) 代表 Open embeddeD Audition System。这是一个专门用于执行声源定位、跟踪、分离和后滤波的库。让我们来玩一玩它。

**适用于 Linux：**

- 步骤 1. 获取 ODAS 并进行构建。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- 步骤 2. 获取 [ODAS Studio](https://github.com/introlab/odas_web/releases) 并将其打开。

- 步骤 3. odascore 位于 **odas/bin/odaslive**，**配置文件**为 [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg)。

- 步骤 4. 使用包含 4 路原始音频数据的 6_channels_firmware.bin 升级麦克风阵列。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 常见问题

**Q1：内置算法的参数**

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

**Q2：ImportError: No module named usb.core**

A2：运行 sudo pip install pyusb 来安装 pyusb。

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

**Q3：是否有 Raspberry alexa 应用的示例？**

A3：有的，我们可以将 mic array v2.0 连接到 Raspberry 的 USB 端口，并按照 [Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) 来与 alexa 进行语音交互。

**Q4：是否有 Mic array v2.1 在 ROS 系统上的示例？**

A4：有的，感谢 Yuki 分享了用于集成 [ReSpeaker USB Mic Array with ROS (Robot Operating System) Middleware](https://github.com/furushchev/respeaker_ros) 的软件包。

**Q5：如何让 3.5mm 音频口在 USB 端口输出的同时也接收信号？**

A5：请下载[新固件](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin)，并按照 [How to update firmware](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/#update-firmware) 来烧录 XMOS。

**Q6：运行 "sudo pip install pyaudio" 时出现 #include "portaudio.h" 错误。**

A6：请运行以下命令来解决该问题。

```
sudo apt-get install portaudio19-dev
```

## 资源

- **[PDF]** [ReSpeaker USB Mic Array 尺寸](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/dimension.pdf)
- **[DWG]** [ReSpeaker USB Mic Array 外壳 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/case.dwg)
- **[PDF]** [XVF3000 产品简介](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
