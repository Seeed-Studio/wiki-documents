---
title: Grove - High Precision RTC (Real Time Clock)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove_High_Precision_RTC/
slug: /cn/Grove_High_Precision_RTC
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - 高精度RTC是基于时钟芯片PCF85063TP设计的，这是一款针对低功耗优化设计的CMOS实时时钟（RTC）和日历芯片。偏移寄存器可用于对时钟进行微调。所有地址和数据都通过I2C总线串行传输，最大总线速度为400 kbit/s。

与[Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)相比，这款模块可以提供更精确的结果。此外，它还为外围设备提供了可编程的时钟输出，以及分钟和半分钟的中断功能。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## 特性

---

- 工作电压：5V/3.3V
- 基于32.768 kHz石英晶体提供年、月、日、星期、小时、分钟和秒
- 低电流：在VDD = 3.3 V和Tamb = 25 ℃时的典型值为0.22 uA
- 400 kHz两线I2C总线接口（VDD = 1.8 V至5.5 V）
- 可编程时钟输出，用于外围设备（32.768 kHz、16.384 kHz、8.192 kHz、4.096 kHz、2.048 kHz、1.024 kHz和1 Hz）
- 分钟和半分钟中断
- 振荡器停止检测功能
- 内部上电复位（POR）
- 可编程偏移寄存器，用于频率调整
- 接口：Grove - I2C（SCL,SDA,VCC,GND）
- 尺寸：20*40mm
- 配备即用型Arduino库

## 支持的平台

## 接口功能

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

1. Grove接口
2. 可编程时钟输出接口
3. 分钟和半分钟中断输出接口
4. 时钟芯片PCF85063TP
5. CR1225电池座

## 应用思路

- 数码相机
- 数字摄像机
- 打印机
- 复印机
- 电池供电设备

## 入门指南

完成本部分后，您只需几个步骤即可使**Grove - 高精度RTC**模块运行起来。

### 准备工作

现在我们将为Grove - 高精度RTC模块制作一个演示，在这个演示中，我们将使用一个终端来查看数据。以下是我们为此演示所需使用的工具。

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1
- [Grove - High Precision RTC](https://www.seeedstudio.com/)*1

如果您是第一次使用[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)，请参考[Seeeduino Lotus的wiki](https://wiki.seeedstudio.com/Seeeduino_Lotus/)。

Seeeduino Lotus与Arduino完全兼容，使用起来与Arduino一样简单。

如果您是第一次使用Arduino，请从这里[开始](https://arduino.cc/)，开始您的Arduino之旅。

### 连接硬件

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) 是 Seeeduino 和 Base Shield 的结合体。我们可以像下面图片所示那样，直接将 RTC 模块连接到 I2C 插槽上。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### 下载库文件

点击下载库文件并安装它（[如何安装Arduino库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)）。

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### 打开示例程序

安装库文件后，请重新启动Arduino，然后点击“文件”>“示例”>“SetTimeAndDisplay”。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### 查看结果

上传完成后，您可以打开串行监视器查看结果。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

---
- [Grove - 高精度 RTC 库和示例](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
- [Grove - 高精度 RTC Eagle 文件](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)
- [Grove - 高精度RTC 原理图pdf 文件](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)
- [PCF85063TP 数据手册](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时能够尽可能顺利。我们提供多种沟通渠道，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
