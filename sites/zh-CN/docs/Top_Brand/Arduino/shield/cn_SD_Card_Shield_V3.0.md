---
description: SD卡扩展板 V3.0
title: SD卡扩展板 V3.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SD_Card_Shield_V3.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: SD Card Shield V3.0
category: Discontinued
bzurl:
oldwikiname: SD_Card_Shield_V3.0
prodimagename:
surveyurl: https://www.research.net/r/SD_Card_Shield_V3-0
sku:   
--- -->
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_shield.jpg)

SD卡v3.0扩展板为您的Arduino项目增加存储功能。它支持SD、SDHC或MicroSD TF卡。使用板载拨动开关选择SD卡类型。该扩展板支持使用一种且仅一种格式的SD卡，要么是SD/SDHC，要么是MicroSD。在使用SD或MicroSD卡之前，请将扩展板的"SELECT"开关设置到正确的位置：朝向SD/SDHC插槽，或朝向MicroSD插槽。

SD卡扩展板v3.0仅使用Arduino的SPI端口。该扩展板也是可堆叠的，因此可以在上面叠加其他扩展板。板上有用于I2C和UART端口的Grove兼容接口。

SD卡扩展板v3.0使用引脚10作为片选。请确保其他堆叠的扩展板不使用同一个引脚。请参阅此扩展板的v4.0版本，该版本使用引脚4。

以下几行是用户添加的：此扩展板适用于Arduino Mega 2560，您只需要进行适当的连接。4或10 →53，11→51，12 →50，13 →52。只要确保不将其他任何东西分配给这些引脚，这种安排就能正常工作。

**型号：[INT106D1P](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)**

## 特性  

* Arduino/Seeeduino兼容<font color="red">（不兼容Mega）</font>

* Grove兼容
* 支持SD卡、Micro SD卡和SDHC卡
* 3.3v和5v逻辑电压兼容
* 2.6~3.6v直流电源供电

## 规格  

| 项目 | 最小值 | 典型值 | 最大值 | 单位 |
|------|-----|---------|-----|------|
| 电压 | 2.7 | 3.3 | 3.6 | V |
| 电流 | 0.159 | 40 | 200 | mA |
| 支持的卡类型 | SD卡(≤2G)；Micro SD卡(≤2G)；SDHC卡(≤16G) | | | / |
| 尺寸 | 57.15x44.70x19.00 | | | mm |
| 净重 | 16.6 | | | g |

## 接口功能  

![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_Card_interface.png)
 **D10** – 用于SPI的CS
 **D11** – 用于SPI的MOSI
 **D12** – 用于SPI的MISO
 **D13** – 用于SPI的SCK
 **Grove连接器** - 一个用于Uart串口，另一个用于I2C端口。

## 使用方法  

### 硬件安装  

将SD卡扩展板插到Arduino上；将您的SD卡插入插槽，确保卡选择器指向正确的方向（标准卡或micro）。然后用USB线将Arduino连接到PC。
 **<font color="red">警告：不要同时将SD卡和microSD卡插入扩展板。</font>**
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_shield_hardware.jpg)

### 软件  

首先您需要获得一张[SD卡或micro SD卡](https://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182)，然后如有必要，将SD卡格式化为FAT16或FAT32。
按照以下截图格式化SD卡：
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format.jpg) ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format2.jpg)

1. 下载最新版本的**SdFat for Arduino**。

2. 解压此包并将其放入Arduino-1.0程序：..\arduino-1.0\libraries。

3. 选择相应的Arduino板，如Arduino UNO或Duemilanove或其他，以及您正在使用的COM端口。

4. 上传_**Sdinfo**_示例程序。以下图像是串口监视器的结果。当然您也可以上传其他示例程序。
![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_software.jpg)
5. 如果出现错误，请重新检查所有步骤，并确保SD卡正常工作。如果这些都无法解决问题，请尝试更换SD卡。
完成后，您可以查看其他库示例，了解如何使用GPS或实时时钟进行读取、写入和示例日志记录。尽情享受吧！

## 常见问题

1. SD卡无法初始化。

2. 请将SD卡重新格式化为FAT/FTA32格式。如果仍然无法工作，建议下载[SD Formatter](https://www.sdcard.org/downloads/formatter_3/)并使用此软件重新格式化SD卡。

## 版本跟踪

| 版本 | 描述 | 发布日期 |
|----------|-------------|---------|
| v3.0 | V3.0 发布 | 2012/3/29 |
| v3.1 | 电压调节器升级为 MIC5205 | 2012/5/10 |

## SD Card Shield v3.1 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SD Card Shield v3.0 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Eagle]**  [SD Card Shield v3.1 Eagle文件](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip)

* **[PDF]**[SD Card Shield pdf](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD%20Card%20Shield.pdf)

* **[PDF]**   [SD Card Shield v3.1 PDF文件](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD_Card_Shield.pdf)

* **[Eagle]**   [SD Card Shield v3.0 Eagle文件](https://wiki.seeedstudio.com/cn/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>