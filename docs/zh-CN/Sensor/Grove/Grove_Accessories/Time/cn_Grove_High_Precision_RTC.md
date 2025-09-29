---
title: Grove - 高精度 RTC（实时时钟）
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove_High_Precision_RTC/
slug: /cn/Grove_High_Precision_RTC
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - 高精度 RTC 基于时钟芯片 PCF85063TP，它是一种 CMOS 实时时钟（RTC）和日历，优化了低功耗。偏移寄存器允许对时钟进行微调。所有地址和数据通过 I2C 总线串行传输，最大总线速度为 400 kbit/s。

与 [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html) 相比，该模块可以提供更准确的结果，并为外围设备提供可编程时钟输出以及分钟和半分钟中断。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## 特性

---

- 工作电压：5V/3.3V
- 基于 32.768 kHz 石英晶体提供年、月、日、星期、小时、分钟和秒
- 低电流：典型值为 0.22 uA（VDD = 3.3 V，Tamb = 25 ℃）
- 400 kHz 双线 I2C 总线接口（VDD = 1.8 V 至 5.5 V）
- 为外围设备提供可编程时钟输出（32.768 kHz、16.384 kHz、8.192 kHz、4.096 kHz、2.048 kHz、1.024 kHz 和 1 Hz）
- 分钟和半分钟中断
- 振荡器停止检测功能
- 内部上电复位（POR）
- 可编程偏移寄存器用于频率调整
- 接口：Grove - I2C（SCL、SDA、VCC、GND）
- 尺寸：20*40mm
- 即用型 Arduino 库

## 支持的平台

## 接口功能

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

1. Grove 接口  
2. 可编程时钟输出接口  
3. 分钟和半分钟中断输出接口  
4. 时钟芯片 PCF85063TP  
5. CR1225 电池座  

## 应用场景

---

- 数码相机  
- 数码摄像机  
- 打印机  
- 复印机  
- 电池供电设备  

## 入门指南

在本节之后，您只需几个步骤即可让 **Grove - 高精度 RTC** 运行起来。

### 准备工作

现在我们为 Grove - 高精度 RTC 模块制作一个演示，在这个演示中我们将使用终端查看数据。以下是我们需要的物品：

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1  
- [Grove - 高精度 RTC](https://www.seeedstudio.com/)*1  

如果这是您第一次使用 [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)，请参考 [Seeeduino Lotus 的 wiki](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus/)。

Seeeduino Lotus 完全兼容 Arduino，使用起来和 Arduino 一样简单。

如果这是您第一次使用 Arduino，请访问 [这里](https://arduino.cc) 开始您的 Arduino 之旅。

### 硬件连接

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) 是 Seeeduino 和 Base Shield 的组合。我们可以将 RTC 模块直接连接到 I2C 插座，如下图所示。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### 下载库

点击下载库并安装它（[如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)）。

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### 打开示例

安装库后，请重新启动 Arduino，点击 File>Examples>SetTimeAndDisplay。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### 查看结果

上传完成后，您可以打开串行监视器查看结果。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
- [Grove - 高精度 RTC 库和示例](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)  
- [Grove - 高精度 RTC Eagle 文件](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)  
- [Grove - 高精度 RTC 原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)  
- [PCF85063TP 数据手册](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)  
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)  

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>