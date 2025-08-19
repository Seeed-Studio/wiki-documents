---
description: ReSpeaker XVF3800 USB 4麦克风阵列是一款专业的圆形麦克风阵列，具有AEC、波束成形、噪声抑制和360°语音捕获功能。与XIAO ESP32S3配对，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 USB麦克风阵列与XIAO ESP32S3入门指南
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_xiao_getting_started
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB 4麦克风阵列与XIAO ESP32S3

## 概述

**ReSpeaker XVF3800 USB 4麦克风阵列**是一款基于XMOS XVF3800的专业圆形4麦克风阵列。它具有AEC、AGC、DoA、波束成形、VAD、噪声抑制、去混响和360°语音捕获（最远5米）功能。它还支持双操作模式，非常适合高级语音应用。与Xiao ESP32S3结合使用时，控制ReSpeaker XVF3800 USB变得更加强大，释放无限可能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **芯片升级**：从XVF3000升级到XVF3800
  
- **四麦克风阵列**：4个高性能麦克风呈圆形排列，支持360°远场语音捕获，最远距离5米
  
- **先进音频处理**：由XVF3800驱动，具有AEC、多波束成形、去混响、DoA检测、动态噪声抑制、60dB AGC范围

- **唯一设备序列号**：内置SN支持多设备部署和高级设备管理

- **双操作模式**：USB即插即用模式可即时连接PC，INT-Device（I2S）模式可与嵌入式系统集成——可通过相应切换固件，使用USB或I2C命令进行配置

- **开源兼容**：适用于USB主机（Windows、macOS、Raspberry Pi OS）和I2S主机（XIAO系列、ESP32、Arduino）。

- **视觉反馈**：可编程RGB LED和状态指示器显示设备状态和语音活动

- **相等或更好的音频质量**：与之前的型号相比


## 硬件概述


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要组件

| **组件/特性**       | **描述**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **主音频处理器**      | **XMOS XVF3800**，处理音频处理，包括AEC、波束成形、噪声抑制等。       |
| **麦克风阵列**          | **四个PDM MEMS麦克风**呈圆形排列，支持**360°远场语音捕获（5米）**。 |
| **音频编解码器**               | **TLV320AIC3104**，处理音频转换和输出。                                              |
| **RGB LED**                  | **12个WS2812**可单独寻址的RGB LED，用于视觉反馈（如状态、语音活动）。 |
| **静音按钮**               | 按下可**静音/取消静音**麦克风输入。                                                       |
| **静音指示LED**        | 点亮（通常为红色）表示音频已静音。                                               |
| **复位按钮**              | 板/系统的硬件复位。                                                                 |
| **USB Type-C端口**           | 用于**电源和数据**（符合USB Audio Class 2.0标准）。                                    |
| **3.5mm AUX耳机插孔**  | 耳机或有源扬声器的音频输出。                                                      |
| **扬声器连接器**         | **JST扬声器接口**，支持**5W功放扬声器**。                                       |
| **调试焊盘**                | **XTAG4**或其他编程器的调试访问。                                                     |
| **I2C和I2S接头**         | 暴露的接头，用于与外部设备进行**I2C和I2S通信**。                             |
| **未使用的IO焊盘（XIAO）**     | 连接到XIAO模块的额外I/O焊盘。                                                 |
| **I2S和I2C通信**   | 支持使用这些协议连接到外部主机，如Raspberry Pi、PC等。             |
| **USB和INT-Device模式**    | 双模式操作：即插即用USB或通过I2S的内部INT设备模式。                          |
| **唯一序列号**      | 内置**设备SN**用于识别和多设备管理。                               |
| **开源兼容性** | 适用于**Arduino、Raspberry Pi、PC/Mac**，并与**XIAO系列**兼容。                   |
| **先进音频特性**   | AEC、波束成形、去混响、**DoA检测**、基于DNN的噪声抑制、60dB AGC。         |
| **视觉反馈**           | 设备状态和音频活动通过**RGB LED模式**和**状态指示器**显示。            |
| **音频质量**             | 等于或优于**之前基于XVF3000的设计**。                                         |


### XIAO ESP32S3支持 

- 立体声I2S输入/输出，具有多种输出选项；I2C接口用于配置和管理XVF3800参数。
- 通过IO引脚复位XIAO
- 接口和焊盘

### 引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### 板载WIFI天线

当使用XIAO ESP32S3时，无需外部天线——只需连接天线插槽即可使用内置PCB天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO概述

reSpeaker XVF3800提供3个输入引脚（GPI）和5个输出引脚（GPO）用于外部控制。您可以使用这些引脚读取按钮状态或控制硬件，如静音LED、放大器或LED。

| **引脚名称** | **方向** | **功能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | 输入 (RO)    | 静音按钮状态（释放时为高电平）              |
| X1D13        | 输入 (RO)    | 悬空                                             |
| X1D34        | 输入 (RO)    | 悬空                                             |
| X0D11        | 输出 (RW)   | 悬空                                             |
| X0D30        | 输出 (RW)   | 静音LED + 麦克风静音控制（高电平 = 静音）            |
| X0D31        | 输出 (RW)   | 放大器使能（低电平 = 使能）                     |
| X0D33        | 输出 (RW)   | WS2812 LED电源控制（高电平 = 开启）                 |
| X0D39        | 输出 (RW)   | 悬空                                             |

## 烧录I2S固件

要将reSpeaker XVF3800与XIAO ESP32S3配合使用，请确保reSpeaker XVF3800固件是I2S版本。
查看固件烧录以烧录最新的I2S固件。请访问[此部分](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。


:::note
要与XIAO ESP32S3配合工作，您需要烧录I2S固件。但是，它不支持USB DFU。如果您已经在使用USB固件，可以进入安全模式来烧录固件。这种方法更加灵活，因为它同时支持USB DFU和I2C DFU。要了解更多信息，请访问此[部分](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#safe-mode)。
:::

## 软件准备

### 安装Arduino IDE

根据您的操作系统下载并安装稳定版本的Arduino IDE

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>下载Arduino IDE</strong>
  </a>
</div>

<br />


 #### 安装Arduino-ESP32

要使用开发板管理器开始安装过程，请按照以下步骤操作：

* 安装1.8版本或更高版本的当前上游Arduino IDE。当前版本可在[arduino.cc](https://www.arduino.cc/en/Main/Software)网站获取。

* 启动Arduino并打开`设置`窗口。


* 在附加开发板管理器网址字段中输入上述发布链接之一。您可以添加多个网址，用逗号分隔。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>


* 从侧边栏打开`开发板管理器`，搜索`ESP32`并点击`安装`。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>


* 重启Arduino IDE。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>