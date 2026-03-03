---
description: 以太网扩展板 V1.0
title: 以太网扩展板 V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Ethernet_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Ethernet Shield V1.0
category: 已停产
bzurl:
oldwikiname: Ethernet_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V1-0
sku:
tags:

--- -->
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg)

以太网扩展板可以立即为Arduino项目提供互联网连接功能。板载的Wiz5100以太网控制器可处理多达四个TCP和UDP连接，只需将其堆叠到Arduino上即可创建您自己的网络设备。通过板载指示灯轻松检查连接状态。通过两排额外的引脚排针进一步扩展您的设计，这些排针可连接到扩展板和原型板。

**型号：** [ARD124B2P](https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102)

## 特性 ##

- 标准Arduino和Arduino Mega兼容

- Arduino以太网库兼容

- 标准RJ45以太网插座

- 16K字节内部缓冲区

- 所有功能的指示LED

- 易于访问的复位按钮

- 用于0.1"网格原型板的标准引脚排针

- 多达4个TCP/UDP网络连接

## 规格 ##

 |项目| 最小值| 典型值| 最大值| 单位
 |---|---|---|---|---|
 |**电压**|3.5|5|5.5|V|
 |**电流**| 120| 210| 350| mA|
|**尺寸**| 72.6x58.4x23.2||| mm|
 |**支持的连接**| TCP/UDP||| /|
 |**净重**|24.2|||g|

## 接口功能 ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png)
**RJ45** - 以太网端口

**Power LED** - 电源

**RST LED(红色)** - 复位时为红色

**LINK LED** - 链路正常时常亮，在TX或RX状态时闪烁

**SPD LED** - 指示灯表示链路速度为100Mbps

**FDX LED** - 指示灯表示全双工模式状态

**Coll LED** - 指示灯表示存在冲突活动

**Rx LED** - 指示灯表示存在接收活动

**Tx LED** - 指示灯表示存在发送活动

**Reset KEY** - 按下时复位以太网扩展板和Arduino

### Arduino上的引脚使用 ###

**D0** - 未使用

**D1** - 未使用

**D2** - 连接W5100的INT引脚

**D3** - 控制W5100的复位

**D4** - 未使用

**D5** - 未使用

**D6** - 未使用

**D7** - 未使用

**D8** - 未使用

**D9** - 未使用

**D10** - 用于SPI片选

**D11** - 用于SPI MOSI

**D12** - 用于SPI MISO

**D13** - 用于SPI SCK

**D14(A0)** - 未使用

**D15(A1)** - 未使用

**D16(A2)** - 未使用

**D17(A3)** - 未使用

**D18(A4)** - 未使用

**D19(A5)** - 未使用

## 使用方法 ##

### 硬件安装 ###

通过RJ45连接器将以太网扩展板与互联网连接，通过USB线缆将Arduino与PC连接。将以太网扩展板插入Arduino板：
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg)

### 软件 ###

- 打开Arduino IDE(1.0)，在以太网库中打开**WebServer**示例：

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg) ![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg)

- 在**工具-开发板**中选择相应的Arduino板，如Arduino UNO或Duemilanove或其他；在**工具-串口**中选择您正在使用的COM端口。

- 打开您的网络浏览器并输入网址：192.168.1.177，您将看到Arduino板作为Web服务器的操作结果：

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg)

## 版本跟踪 ##

|版本| 描述|发布日期|
|---|---|---|
|v1.0|V1.0发布|2012/3/29|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[入门指南]**[以太网扩展板入门指南](https://arduino.cc/en/Guide/ArduinoEthernetShield)
- **[Eagle]**[以太网扩展板Eagle文件](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip)
- **[PDF]**[W5100_ethernet_shield PCB](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf)
- **[PDF]**[W5100_ethernet_shield SCH](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf)

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