---
description: Grove NodeMCU V1.0 底板扩展板
title: Grove NodeMCU V1.0 底板扩展板
keywords:
- Wio_Series 
- Wio_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_Shield_for_NodeMCU_V1.0
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Grove Base Shield for NodeMCU V1.0
category: Others
bzurl: https://www.seeedstudio.com/Grove-Base-BoosterPack-p-2177.html
oldwikiname:  Grove Base Shield for NodeMCU V1.0
prodimagename: Base_Shield_for_NodeMCU1.jpg
surveyurl: https://www.research.net/r/Grove_Base_Shield_for_NodeMCU_V1
sku:  105020008
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/img/Base_Shield_for_NodeMCU1.jpg)

Grove NodeMCU 底板扩展板是一个扩展板，帮助您在名为 NodeMCU 的 ESP8266 WIFI 开发套件上使用 Grove 传感器。您可以在 NodeMCU 固件中使用 Lua 脚本语言运行 Grove 传感器。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-BoosterPack-p-2177.html)

## 特性

---

* 兼容所有 Grove 模块

* 5 个数字连接器 (D3-D8)

* 1 个模拟连接器 (A0)

* 2 个 I2C 接口

* 无 SPI 接口

* UART/D9-D10 连接器

* 电源指示 LED

## 接口功能

---
底板扩展板的目的是允许任何微处理器输入和输出引脚轻松连接到 Grove 单元。有关底板的更详细检查，请参考以下图表：

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/img/Base_Shield_for_NodeMCU2.jpg)

:::note

1. 引脚的交错对齐 - 即，D3 接口处理 D3 和 D5，D5 接口处理 D5 和 D6，下一个 D6 和 D7，依此类推。<br />
2. 没有 D4 接口。<br />
3. UART 接口可以与 D9、D10 端口复用，I2C 接口可以与 D1、D2 端口复用。<br />
4. 同时使用四个 I2C 接口不会冲突，因为每个 I2C 设备都有自己的地址。<br />
5. 没有 SPI 接口。因为没有 Grove 模块使用 SPI 接口。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_sch_pcb.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
* [Grove NodeMCU 底板扩展板原理图 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_sch_pcb.rar)

* [Grove NodeMCU 底板扩展板 v1.0.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_pdf_v1.0.rar)

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