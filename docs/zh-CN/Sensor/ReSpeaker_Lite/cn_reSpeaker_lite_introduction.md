---
description: ReSpeaker Lite 入门指南
title: ReSpeaker Lite 入门指南
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
---

## 简介

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

由 XMOS XU316 AI 声音和音频芯片组驱动，这款开发板在音频处理方面表现出色，集成了双麦克风阵列，非常适合语音识别和语音控制。XU316 芯片具有先进的板载音频前端算法，提供干扰消除、回声消除和噪声抑制功能。它支持 I2S 和 USB 连接，兼容 Seeed Studio XIAO ESP32S3 (Sense)、Adafruit QT Py、Raspberry Pi 和 PC。

## 特性

- **远场语音捕获双麦克风阵列**：2 个高性能数字麦克风可捕获和提取远场语音（最远 3 米），即使在嘈杂环境中也能通过双麦克风输入消除点噪声。
- **板载 AI ASR 算法**：由 XMOS XU-316 AI 声音和音频芯片驱动，该套件包含自然语言理解算法，用于干扰消除 (IC)、声学回声消除、噪声抑制、语音噪声比 (VNR) 和自动增益控制 (AGC)，实现高质量语音捕获。
- **拥抱开源**：该板通过 I2S 兼容流行的硬件平台（XIAO ESP32S3 (Sense)、Adafruit QT Py），通过 USB（音频类 2.0 (UAC2)）兼容 Raspberry Pi、PC。
- **板载 RGB LED**：该板配有可编程 WS2812 RGB LED，支持自定义效果并为您的应用提供可视化界面。
- **外部电源支持**：该板支持外部 5V 电源，可灵活应用于不同场景。
- **用于自定义开发的 DFU**：该板支持通过 DFU-Util 进行自定义固件更新。

## 规格

|**核心芯片**|XMOS XU316|
| :- | :- |
|**数字麦克风**|高性能数字麦克风 \* 2|
|**灵敏度**|-26 dBFS|
|**声学过载点**|120 dBL|
|**信噪比**|64 dBA|
|**电源**|USB 5V，外部 5V|
|**尺寸**|35\*86 mm|
|**音频输出**|扬声器连接器 / 3.5mm 耳机插孔|
|**最大采样率**|16Khz|
|**扬声器**|支持 5W 功放扬声器。|

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## 引脚图

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**双麦克风阵列**|提供高质量音频输入。|
| :- | :- | :- |
|**2**|**电源指示灯**|通电时点亮。|
|**3**|**RGB 灯**|可编程 WS2812，提供可视化界面|
|**4**|**静音指示灯**|按下静音按钮时亮红灯。|
|**5**|**USR 按钮**|用户自定义按钮。|
|**6**|**静音按钮**|按下时静音音频输入。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **（可选）**|用于进一步开发和集成。|
|**8**|**XU316 核心处理器**|负责音频处理和传输。|
|**9**|**外部电源焊盘**|支持外部 5V 电源。|
|**10**|**USB Type-C 端口**|用于电源和数据传输。|
|**11**|**扬声器连接器**|用于音频输出。支持 5W 功放扬声器。|
|**12**|**3.5mm 耳机插孔**|输出音频，我们可以将有源扬声器或耳机插入此端口。|
|**13**|**外部电源焊盘 1**|XIAO ESP32 上未使用的 IO 引脚。|
|**14**|**外部电源焊盘 2**|XU316 上未使用的 IO 引脚。|
|**15**|**JTAG**|用于调试和编程 XU316。|

## 入门指南

### 开箱即用

ReSpeaker Lite 是一个即插即用的模块化语音接口，无需驱动程序，只需将其插入您的 PC，您将看到一个名为 'ReSpeaker Lite' 的语音设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### 更新固件

#### [固件下载](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
ReSpeaker Lite 板有 2 个版本：

要将其用作 USB 声音设备，请刷写 USB 版本固件（默认固件）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

要与 XIAO ESP32S3 一起使用，请刷写 I2S 版本固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### 接线

通过 USB 线缆将 ReSpeaker Lite 板连接到您的 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### 安装 DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) 是一个通过 USB 端口进行设备固件升级的命令行工具。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- 下载 `dfu-util-0.11-binaries.tar.xz` 并将其解压到您的本地系统，
  例如，D:\

- 切换目录到 `dfu-util.exe`<br/>
  例如，D:\dfu-util-0.11-binaries\win64\（如果您使用 win32，请将 win64 更改为 win32）

- 将 `dfu-util.exe` 的路径添加到系统环境变量 Path：`My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`。
 请注意，Path 变量中的路径由分号 ; 分隔。
 这将允许在命令提示符中全局执行 dfu-util。

- 打开开始菜单并输入 cmd。按回车键。在出现的终端中，使用 dfu-util -V 命令检查是否设置了 dfu-util.exe 路径：

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- 运行 `dfu-util -l` 检查是否检测到 ReSpeaker Lite：

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

:::tip
如果您遇到类似这样的 "Cannot open DFU device" 错误，请继续执行此步骤。如果没有，请转到步骤 3 刷写固件。
:::

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Cannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)
```

- 安装 [Zadig](https://zadig.akeo.ie/) 并打开它。点击 `Options` -> `List All Devices`。

- 从设备列表中找到 `ReSpeaker 2 Mics Array` 或 `ReSpeaker Lite` 或 DFU `FACTORY (Interface 3)`，安装 `WINUSB v6.x.xxxx.xxxxx` 驱动程序。

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- 安装完成后（需要几分钟时间），请重新上电并再次运行 `dfu-util -l`，现在应该能检测到 ReSpeaker Lite

</TabItem>

<TabItem value="mac" label="MacOS">

- 使用 [brew](https://brew.sh/) 安装 dfu-util：`brew install dfu-util`

- 运行 `dfu-util -l` 检查是否检测到 ReSpeaker Lite：

```
➜  ~ dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

<TabItem value="lin" label="Linux">

- 使用 apt 安装 dfu-util：`sudo apt install dfu-util`

- 运行 `sudo dfu-util -l` 检查是否检测到 ReSpeaker Lite：

```
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

</Tabs>

#### 刷写固件

- 将 ReSpeaker 板连接到您的 PC。

- 运行以下命令 `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`：
  - 在 Linux 上请运行 `sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`

```
C:\Users\yiping>dfu-util -R -e -a 1 -D D:\Downloads\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 2886:0019
Device DFU version 0101
Claiming USB DFU Interface...
Setting Alternate Interface #1 ...
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 0101
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%       270336 bytes
Download done.
DFU state(7) = dfuMANIFEST, status(0) = No error condition is present
DFU state(2) = dfuIDLE, status(0) = No error condition is present
Done!
Resetting USB to switch back to Run-Time mode
```

:::caution
刷写完成后，请重启板子。
:::

- 检查固件版本：

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## 对比

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>核心芯片</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>麦克风</p>|<p style={{textAlign: 'center'}}>PDM MEMS 麦克风 x2</p>|<p style={{textAlign: 'center'}}>PDM MEMS 麦克风 x4</p>|<p style={{textAlign: 'center'}}>模拟 MEMS 麦克风 x2</p>
|<p style={{textAlign: 'center'}}>语音捕获距离</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>灵敏度</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>声学过载点</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>信噪比</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>板载音频处理算法</p>|<ul><li>声学回声消除 (AEC)</li><li>自动增益控制 (AGC)</li><li>噪声抑制 (NS)</li><li>干扰消除 (IC)</li><li>语音噪声比 (VNR)</li></ul>|<ul><li>声学回声消除 (AEC)</li><li>自动增益控制 (AGC)</li><li>噪声抑制 (NS)</li><li>波束成形</li><li>到达方向 (DoA)</li><li>去混响</li><li>语音活动检测 (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>兼容硬件</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py 通过 I2S</li><li>Raspberry Pi</li><li>任何运行 Linux、macOS 和 Windows 的计算机或 SBC 通过 USB</li></ul>|<ul><li>Raspberry Pi</li><li>任何运行 Linux、macOS 和 Windows 的计算机或 SBC 通过 USB</li></ul>|仅限 Raspberry Pi|
|<p style={{textAlign: 'center'}}>适用于</p>|定向声音捕获，适用于线性或细长型设置|全向声音捕获和定位，最适合放置在开放和多方向环境的中心|定向声音捕获，适用于线性或细长型设置|

### 常见问题

- **找不到 `ReSpeaker Lite` 声音设备。**

 检查固件版本，确保固件是 USB 版本且版本号在 `2.0.5` 以上。

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 如果不是 USB 版本，请按照[此步骤](https://wiki.seeedstudio.com/cn/reSpeaker_usb_v3/#flash-firmware)刷写固件。

- **刷写 USB 固件后在 Windows 上无法检测到 ReSpeaker Lite USB 声音设备？**

- 打开开始菜单并输入 `Device manager`。找到 `ReSpeaker Lite` 设备，右键点击并选择 `Uninstall device`。选择 `Delete the driver software for this device` 并点击 `Uninstall`。之后，重启设备，Windows 将为其重新安装正确的声卡驱动程序。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### 资源

[ReSpeaker Lite XMOS 固件](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite 3D 文件](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
