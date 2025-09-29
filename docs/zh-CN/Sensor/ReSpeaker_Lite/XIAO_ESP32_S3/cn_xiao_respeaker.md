---
description: 将 ReSpeaker Lite 与 XIAO ESP32S3 集成
title: ReSpeaker Lite 语音助手套件
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiao_respeaker
last_update:
  date: 7/1/2024
  author: Jessie
---


由 XMOS XU316 AI 声音和音频芯片组驱动，这是一个高性能开源语音助手开发套件。该套件集成了 ReSpeaker Lite 双麦克风阵列和强大的 [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) 处理器，提供卓越的语音识别、降噪和语音处理能力。该套件通过 ESPHome 提供与 Home Assistant 的固件集成，非常适合智能语音助手和家庭自动化应用。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

### 特性

* **预焊接 ESP32 控制器**：强大的 XIAO ESP32S3 通过 I2S 引脚预焊接，为进一步开发和集成提供免焊接体验。
* **用于远场语音捕获的双麦克风阵列**：2 个高性能数字麦克风可以捕获和提取远场语音和声音（最远 3 米），即使在嘈杂环境中也能使用双麦克风输入消除点噪声。
* **板载 AI ASR 算法**：由 XMOS XU-316 AI 声音和音频芯片驱动，该套件包含用于干扰消除 (IC)、声学回声消除、噪声抑制和自动增益控制 (AGC) 的自然语言理解算法，实现高质量语音捕获。
* **拥抱开源**：作为开源硬件，它兼容 Arduino、PlatformIO、MicroPython、CircuitPython 进行进一步开发。
* **兼容流行的语音助手**：该套件允许您构建自己的自然语言处理器，并通过 ESPHome 连接到 Home Assistant、Amazon Alexa Voice Service、Google Assistant 或云语音转文本服务，使您能够向程序提问和发出语音命令。
* **板载 RGB LED**：该套件配备可编程 WS2812 RGB LED，支持自定义效果并为您的应用程序提供可视化界面。


### 规格

|**双麦克风阵列**|提供高质量音频输入。|
| :- | :- |
|**电源指示灯**|通电时点亮。|
|**RGB 灯**|可编程 WS2812，提供视觉反馈。|
|**静音指示灯**|按下静音按钮时亮红灯。|
|**USR 按钮**|用户定义按钮。|
|**静音按钮**|按下时静音音频输入。|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|用于进一步开发和集成。|
|**XU316 核心处理器**|负责音频处理和传输。|
|**外部电源焊盘**|支持外部 5V 电源。|
|**USB Type-C 端口**|用于电源和数据传输。|
|**扬声器连接器**|用于音频输出。支持 5W 放大器扬声器。|
|**3.5mm 耳机插孔**|输出音频，我们可以将有源扬声器或耳机插入此端口。|
|**外部电源焊盘 1** |XU316 上未使用的 IO 引脚。|
|**外部电源焊盘 2**|XIAO ESP32 上未使用的 IO 引脚。|
|**JTAG**|用于调试和编程 XU316。|


### 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### 引脚图

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>


|**1**|**双麦克风阵列**|提供高质量音频输入。|
| :- | :- | :- |
|**2**|**电源指示灯**|通电时点亮。|
|**3**|**RGB 灯**|可编程 WS2812，提供可视化界面|
|**4**|**静音指示灯**|按下静音按钮时亮红灯。|
|**5**|**USR 按钮**|用户定义按钮。|
|**6**|**静音按钮**|按下时静音音频输入。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **（可选）**|用于进一步开发和集成。|
|**8**|**XU316 核心处理器**|负责音频处理和传输。|
|**9**|**外部电源焊盘**|支持外部 5V 电源。|
|**10**|**USB Type-C 端口**|用于电源和数据传输。|
|**11**|**扬声器连接器**|用于音频输出。支持 5W 放大器扬声器。|
|**12**|**3.5mm 耳机插孔**|输出音频，我们可以将有源扬声器或耳机插入此端口。|
|**13**|**外部电源焊盘 1**|XIAO ESP32 上未使用的 IO 引脚。|
|**14**|**外部电源焊盘 2**|XU316 上未使用的 IO 引脚。|
|**15**|**JTAG**|用于调试和编程 XU316。|


### 刷写 I2S 固件


要将 ReSpeaker Lite 与 XIAO ESP32S3 一起使用，请确保 ReSpeaker Lite 的固件是 I2S 版本。

查看[固件刷写](https://wiki.seeedstudio.com/cn/reSpeaker_usb_v3/#update-firmware)来刷写最新的 I2S 固件。


### 软件准备

#### 安装 Arduino IDE

根据您的操作系统下载并安装稳定版本的 Arduino IDE。

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
 </div>

<br></br>


#### 安装 Arduino-ESP32

要使用开发板管理器开始安装过程，请按照以下步骤操作：

* 安装当前上游的 Arduino IDE 1.8 版本或更高版本。当前版本可在 [arduino.cc](https://www.arduino.cc/en/Main/Software) 网站获取。

* 启动 Arduino 并打开 `Settings` 窗口。


* 将上述发布链接之一输入到附加开发板管理器网址字段中。您可以添加多个网址，用逗号分隔。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>


* 从侧边栏打开 `Boards Manager`，搜索 `ESP32` 并点击 `INSTALL`。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>


* 重启 Arduino IDE。


#### 安装 ReSpeaker Lite 库


我们为用户提供了一个库以便快速开始：

将此项目克隆到 Arduino 库文件夹中，例如使用以下命令：

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

或者将库下载为 `zip` 文件并在 Arduino IDE 中将其添加到库中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>


### 常见问题

* **刷写 USB 固件后在 Windows 上无法检测到 ReSpeaker Lite USB 声音设备？**


- 打开开始菜单并输入 `Device manager`。找到 `ReSpeaker Lite` 设备，右键点击它并选择 `Uninstall device`。选择 `Delete the driver software for this device` 并点击 `Uninstall`。之后，重启设备，Windows 将为其重新安装正确的声卡驱动程序。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>


### 资源

[ReSpeaker Lite XMOS 固件](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)