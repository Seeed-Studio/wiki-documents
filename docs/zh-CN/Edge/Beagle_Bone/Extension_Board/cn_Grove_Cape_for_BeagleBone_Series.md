---
description: Grove Cape for BeagleBone® 系列
title: Grove Cape for BeagleBone® 系列
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Cape_for_BeagleBone_Series
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove%20Cape%20for%20BeagleBone.jpg)

BeagleBone® 系列是一款真正的开源硬件，它是一种信用卡大小的 Linux 计算机，可以连接到互联网并运行诸如 Android 4.0 和 Ubuntu 等软件。通过 AM335x 720MHz ARM® 处理器提供的实时分析所需的丰富 I/O 和处理能力，BeagleBone® 可以通过 Cape 插件板扩展功能。

这款 Grove - Grove Cape for BeagleBone® 系列是 BeagleBone® 系列的扩展板，用于与丰富的 Grove 资源配合使用。板上有 6 个现成的 Grove 插座，涵盖 UART、I2C 和 ADC 等功能。通过这种方式，所有 Grove 模块都可以供 BeagleBone® 板访问。想用 BeagleBone® 制作一些项目并需要一些传感器或显示器吗？这款 Grove - Grove Cape for BeagleBone® 系列可以为您带来便利。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)

## 规格

---

* 电压：3.3~5V
* 电流：&lt;0.5uA
* 尺寸：69.9X54.8X17.5 mm
* 数字 I/O 端口电压保护
* 数字允许最大输入电压 5V
* 模拟输入通过分压电阻，比例为 1.8/5
* 模拟端口允许最大输入电压 5V

## 接口

---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove_Cape_for_BeagleBone_Series.jpg)

**J1, J5:** 可用于 I2C。

**J2, J6:** 可用于 UART。

**J3, J7:** 可用于 ADC。

以下是 Grove Cape for BeagleBone® 系列板上的引脚映射描述：

| Grove 接口 | Grove 引脚 | A/D | I²C | UART | BeagleBone® 引脚 | BeagleBone® 功能 |
|---|---|---|---|---|---|---|
| J1 | 1 | | SCL1 | | J8.17 | gpio[5]/ |
| J1 | 2 | | SDA1 | | J8.18 | gpio[4]/ |
| J5 | 1 | | SCL2 | | J8.19 | gpio[13]/ |
| J5 | 2 | | SDA2 | | J8.20 | gpio[12]/ |
| J2 | 1 | | | RX1 | J8.26 | gpio[14]/ |
| J2 | 2 | | | TX1 | J8.24 | gpio[15]/ |
| J6 | 1 | | | RX2 | J8.22 | gpio[2]/ |
| J6 | 2 | | | TX2 | J8.21 | gpio[3]/ |
| J3 | 1 | AIN0 | | | J8.39 | |
| J3 | 2 | AIN1 | | | J8.40 | |
| J7 | 1 | AIN2 | | | J8.37 | |
| J7 | 2 | AIN3 | | | J8.38 | |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Grove Cape for BeagleBone® 系列 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip)

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