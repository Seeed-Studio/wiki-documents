---
description: RFID 控制 LED
title: RFID 控制 LED
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RFID_Control_LED
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: RFID Control LED
category: Tutorial
oldwikiname:  RFID Control LED
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
--- -->

125KHz RFID 读卡器可以从 RFID 标签读取数据。它可以用于一些物联网或智能控制系统。

本演示将向您展示如何从 RFID 标签读取数据，并控制一个 LED。

**所需硬件：**

* Arduino

* 125KHz RFID 读卡器

* RFID 标签

**电路：**

RFID 读卡器连接到 D2、D3。

![](https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png)

**代码：**

RFID 读卡器模块具有内部控制 IC，使其易于控制。当有 RFID 标签靠近读卡器时，它将通过 UART 输出标签的 ID。

您可以在代码中对不同的 ID 进行一些处理。

以下代码没有判断 ID，无论什么标签靠近读卡器，都可以改变 LED 的状态。

打开 Arduino IDE，点击 File -> Sketchbook -> RFID Reader。

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