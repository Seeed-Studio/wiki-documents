---
description: Grove - FM接收器
title: Grove - FM接收器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-FM_Receiver
last_update:
  date: 3/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - FM Receiver
category: Sensor
bzurl: https://seeedstudio.com/Grove-FM-Receiver-p-1841.html
oldwikiname: Grove_-_FM_Receiver
prodimagename: Grove_FM_Receiver_Photo.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove FM Receiver.jpg
surveyurl: https://www.research.net/r/Grove-FM_Receiver
sku: 107020005
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
--- -->

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove_FM_Receiver_Photo.jpg)

Grove - FM 接收器是一款宽带 FM 接收模块，该模块基于 SX6119，它提供了真正的单片语音 FM 接收器，内置放大器、VCO（压控振荡器）、滤波器和解调器。多功能按钮为用户提供了更大的控制便利。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-FM-Receiver-p-1841.html)

## 特点

- Grove 接口
- FM 接收器，调谐范围覆盖 64 MHz 至 108 MHz，包括东欧（OIRT）、日本、欧洲和美国频段
- 低功耗
- 多功能按钮
- LED 指示灯
- 耳机接口

:::提示
更多关于 Grove 模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
上述提到的支持平台只是模块软件或理论兼容性的指示。在大多数情况下，我们只针对 Arduino 平台提供软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/示例代码，因此用户需要编写自己的软件库。
:::

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove-FM_v2.0_Top.jpg)

- ①：耳机接口：可以驱动 16 欧姆或 32 欧姆的耳机或音频设备。
- ②：多功能按钮：调节音量和选择频道

  - 按下中心：打开 FM/关闭 FM（长按 1 秒）
  - 向上：音量增加
  - 向下：音量减小
  - 向左：向下搜索频道
  - 向右：向上搜索频道

- ③：Grove 接口
- ④：LED 指示灯

  - FM 关闭：LED 灯熄灭
  - FM 打开：LED 灯亮起
  - FM 搜索：LED 灯闪烁

## 使用说明

**所需部件列表：**

- Grove - USB 电源
- Grove - FM 接收器
- Mini 线缆
- 音频设备（耳机或扬声器）

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove-FM_Receiver_Photo.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- [Grove - FM 接收器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_eagle.zip)
- [原理图 pdf](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_sch_pdf.pdf)
- [SX6119原理图](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/SX6119_收音IC_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_FM_Receiver -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
