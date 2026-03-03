---
title: USB 转 UART 3V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /cn/USB_To_Uart_3V3
last_update:
  date: 02/03/2022
  author: jianjing Huang
---

<!-- ---
name: USB 转 UART 3V3
category: 已停产
bzurl:
oldwikiname: USB_To_Uart_3V3
prodimagename:
bzprodimageurl: https://www.research.net/r/USB_To_Uart_3V3
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB 转 UART 3V3 是一个基于 CH340 的 USB 转串口适配器。CH340 是一种 USB 总线转换芯片，可实现 USB 转串口接口/IrDA 红外/打印机接口的转换。此模块可用于上传代码或与 MCU 通信。

## 特性

* 全速 USB 设备接口，符合 USB 规范版本 2.0

* 支持波特率范围从 2400bps 到 115200bps。

* 硬件全双工串口接口，设置收发缓冲区

* LED 指示灯

## 规格

* 工作电压：DC 5V

* 工作电流：&lt;10mA

* 操作系统：Windows、Linux、Mac

## 接口功能

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_3V3_Interface.jpg)

* ①：电源指示灯
* ②：Micro USB

* ③：TX 指示灯

* ④：RX 指示灯
* ⑤：UART 接口

## 使用方法

#### 驱动安装  

USB 转 UART 5V/3V3 用作 USB 转串口接口，需要安装驱动。

##### Windows/Linux

完全兼容 Windows 操作系统中的串口应用程序。

* 1) 将设备通过 USB 接口连接到电脑。

* 2) 等待一分钟，可以在设备管理器中找到它。

* 3) 如果找不到端口，请从 [这里](http://wch-ic.com/download/list.asp?id=127) 下载驱动。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/CH340_Driver.jpg)

##### Mac OS

驱动下载：[http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

在 Mac OS Yosemite 上：

* 1) 安装 CH340 驱动

* 2) 打开终端程序（位于 /Applications/Utilities/）

* 3) 输入命令：sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

* 4）输入密码；

* 5）重启电脑；

如果需要恢复 Mac 的设置，可以通过重新定义 boot-arg 为之前的设置，或者清除 boot-args，如下所示：sudo nvram -d boot-args

#### 硬件

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_Download.jpg)

您应该按照此方式连接您的电路。

### 示例

我们可以通过 USB 转 UART 3V3 下载代码到 Seeeduino Ethernet。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

注意，您需要选择正确的板类型和 COM 端口。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Eagle]**[USB 转 UART 3V3 v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip)

* **[PDF]**[USB 转 UART_3V3 PDF](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.pdf)

* **[EAGLE]**[USB 转 UART_3V3 原理图](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.sch)

* **[PDF]**[原理图 PDF](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_SCH.pdf)

* **[Datasheet]**[CH340 数据手册](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>