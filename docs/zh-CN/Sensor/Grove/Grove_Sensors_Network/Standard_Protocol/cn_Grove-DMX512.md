---
title: Grove - DMX512
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Sensor_communication/
slug: /cn/Grove-DMX512
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_01.jpg)

Grove – DMX512 是一个从 Grove 接口到 DMX512 接口（工业标准 EIA-485 接口）的适配器。该模块基于 SN75176 芯片，可以平衡传输线路并满足 ANSI 标准 EIA-485 接口要求。现在可以方便地为 Arduino 控制舞台灯光和 DMX512 控制台。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-DMX512-p-1447.html)

## 特性

---

* Grove 接口和标准 EIA-485 接口

* 易于使用

* 实用性强

## 使用方法

---
Arduino 可以通过使用 Grove - DXM512 模块轻松控制 DMX512 设备。以 LED 水晶魔球灯为例。具体操作如下：

* 将 Grove - DMX512 的 Grove 接口连接到 Grove - Base Shield 的 D3 端口，并将 Grove - Base Shield 插入 Arduino。

* 使用 DMX 线缆将 Grove - DMX512 的 DMX512 接口连接到 LED 水晶魔球灯的 DMXIN 接口。并为 LED 水晶魔球灯供电。

* 将 LED 水晶魔球灯设置为 DMX512 控制模式。此时控制面板显示"A001"。

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_Usage.jpg)

* 下载 [文件：DmxSimple 库](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip) 并将其解压到 Arduino IDE 的 libraries 文件夹中，路径为：..\arduino-1.0.1\libraries。

* 通过路径直接打开代码：File -> Example -> DmxSimple -> Fadup1。

* 您可以看到一个有趣的场景。尝试修改代码来享受乐趣。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
* [SN75176 数据手册](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Sn75176a.pdf)

* [Grove - DMX512 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip)

* [DmxSimple 库](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip)

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