---
description: USB 转 UART 5V/3V3
title: USB 转 UART 5V/3V3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/USB_To_Uart_5V_3V3
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB 转 UART 5V/3V3 是一个基于 CH340 的 USB 转串口适配器。CH340 是一种 USB 总线转换芯片，可以实现 USB 转串口接口、USB 转 IrDA 红外或 USB 转打印机接口。该模块兼容 5V 和 3V3，可用于上传代码或与 MCU 通信。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)

## 特性

---

* 全速 USB 设备接口，符合 USB 2.0 规范

* 兼容 3.3V 和 5V 的 I/O

* 支持波特率从 2400bps 到 115200bps

* 硬件全双工串口接口，设置收发缓冲区

* LED 指示灯

## 规格

---

* 工作电压：DC 5V

* 工作电流：&lt;10mA

* 操作系统：Windows、Linux、Mac

## 接口功能

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3V3.jpg)

* ①：电源指示灯
* ②：Micro USB

* ③：TX 指示灯

* ④：RX 指示灯
* ⑤：UART 接口

* ⑥：VCC 开关：选择 5V 或 3V3

## 使用方法

---
**驱动安装**

USB 转 UART 5V/3V3 用作 USB 转串口接口，需要安装驱动。

**Windows/Linux**

完全兼容 Windows 操作系统中的串口应用程序。

* 1) 使用 USB 端口将设备连接到电脑。

* 2) 等待片刻，您可以在设备管理器中找到它。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/CH340_Driver.jpg)

* 3) 如果找不到端口，请从 [这里](http://www.wch.cn/download/CH341SER_ZIP.html) 下载驱动。

**Mac OS**

驱动下载：[http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

在 Mac OS Yosemite 上：

* 1) 安装 CH340 驱动

* 2) 打开终端程序（位于 /Applications/Utilities/）

* 3) 输入命令：sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

* 4) 输入密码；

* 5) 重启电脑；

如果您想恢复 Mac 的设置，可以通过重新定义 boot-arg 为之前的设置，或者清除 boot-args，如下所示：sudo nvram -d boot-args

<big>硬件</big>

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_Download.jpg)

您应该按照此方式连接您的电路。

<big>示例</big>

我们可以通过 USB 转 UART 5V/3V3 下载代码到 Seeeduino Ethernet。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

注意，您需要选择正确的板类型和 COM 端口。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [USB 转 UART 5V/3V3 v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip)

* [PDF 格式原理图](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_v1.pdf)

* [CH340 数据手册](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/CH340DS1_EN.PDF)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时获得最佳体验。以下是几种沟通方式，满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>