---
description: Atmel AVRISP STK500 USB ISP 编程器
title: Atmel AVRISP STK500 USB ISP 编程器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Atmel_AVRISP_STK500_USB_ISP_Programmer
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/Avrisp_stk500_usb.jpg)

<!-- <p style=":center"><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## 特性
- 支持多种 ATMEL AVR 微控制器。
- 可与 AVR Studio 或 WINAVR (GCC) 配合使用。
  
:::note   
   如果无法下载 ATMEL AVR Studio 4.13，请下载 avrstudio7，建议下载最新版本的 AvrStudio。工具选择 stk500。
:::

## 应用场景
- AVR 编程
- AVR 烧录 Bootloader

## 支持的设备
|                       |                       |                     |                       |
|-----------------------|-----------------------|---------------------|-----------------------|
| AT90S1200             | AT90S2313             | AT90S2323           | AT90S2343             |
| AT90S4433             | AT90S8515             | AT90S8535           | ATmega128             |
| ATmega1280            | ATmega1281            | ATmega128RZAV       | ATmega128RZBV         |
| ATmega16              | ATmega161             | ATmega162           | ATmega163             |
| ATmega164P            | ATmega164P Automotive | ATmega165           | ATmega168             |
| ATmega168 Automotive  | ATmega168P            | ATmega169           | ATmega16A             |
| ATmega16U4            | ATmega2560            | ATmega2561          | ATmega256RZAV         |
| ATmega256RZBV         | ATmega32              | ATmega323           | ATmega324P            |
| ATmega324P automotive | ATmega325             | ATmega3250          | ATmega3250P           |
| ATmega325P            | ATmega328P            | ATmega329           | ATmega3290            |
| ATmega3290P           | ATmega329P            | ATmega32A           | ATmega32U4            |
| ATmega48              | ATmega48 Automotive   | ATmega48P           | ATmega64              |
| ATmega640             | ATmega644             | ATmega644P          | ATmega644P Automotive |
| ATmega645             | ATmega6450            | ATmega649           | ATmega6490            |
| ATmega8535            | ATmega88              | ATmega88 Automotive | ATmega88P             |
| ATtiny12              | ATtiny13              | ATtiny13A           | ATtiny15L             |
| ATtiny2313            | ATtiny26              | ATtiny88            |                       |

## 硬件连接
<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG)

<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg)

## 示例：烧录 Bootloader 到 Arduino UNO

- 1.如何连接：参考上图
- 2.安装光盘中的 AVRISP 驱动程序。
- 3.下载并安装 AVR STUDIO4.19。

:::warning
    光盘中包含 AVR STUDIO4.13 软件。
:::
- 4.烧录 Bootloader 到 Arduino UNO

    - 步骤 1. 打开 AVR STUDIO4.19
    - 步骤 2. 连接到 STK500

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP0.jpg)

    - 步骤 3. 选择平台

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-3.jpg)

    - 步骤 4. 选择设备 "ATmega328P"
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-4.jpg)

    - 步骤 5. 选择 Bootloader > 路径:\arduino-1.0\hardware\arduino\bootloaders\optiboot\optiboot_atmega328.hex
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-5.png)

    - 步骤 6. 编程

## 资源

- [USB 驱动](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/USB+Driver/CH341SER.EXE)
- [aStudio4b528](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/aStudio4b528/aStudio413b528.exe)
- [AVRISP 用户指南](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/res/AVRISP.chm)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时获得最佳体验。以下是几种沟通方式，满足不同需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>