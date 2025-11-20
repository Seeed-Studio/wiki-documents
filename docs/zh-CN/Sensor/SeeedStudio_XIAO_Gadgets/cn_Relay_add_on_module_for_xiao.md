---
title: XIAO 继电器扩展模块
description: XIAO 继电器扩展模块是 Seeed Studio 设计的智能模块，用于控制交流供电设备。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /cn/relay_add_on_module_for_xiao
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Allen
  date: 12/02/2024
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## 概述

XIAO 继电器扩展模块是 Seeed Studio 设计的智能模块，用于控制交流供电设备。它的特点是结合 XIAO，通过 ESPHome 接入 Home Assistant 来控制各种电器，让您的家居更智能！

### 主要特性和规格

| 参数               | 值           |
|-------------------------|----------------|
| 继电器引脚               | D1            |
| 工作电压       | 5V             |
| 工作电流       | 1A           |
| 继电器寿命              | 100,000 次   |
| 最大开关电压    | 250VAC       |
| 最大开关电流    | 10A             |
| 电气耐久性    | 1.5x10^4 次操作 (10A 250VAC，阻性负载，85°C，1 秒开 9 秒关)|

更多信息，[点击此处下载 PDF 文件](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf)。

## 入门指南

如果您想完整地跟随本教程，您需要准备以下物品。除了 XIAO ESP32 C3，您也可以使用其他 ESP32 系列产品，如 XIAO ESP32 C6 和 XIAO ESP32 S3。本项目的最终目标是在 Home Assistant 中控制继电器模块。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>继电器模块</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

本教程的内容将大致经过以下步骤。

1. [选择您的 Home Assistant 环境](#选择您的-Home-Assistant-环境)
2. 在 Home Assistant 中安装和配置 ESPHome
3. [配置 XIAO ESP32C3 和 ESPHome 连接](#配置-XIAO-ESP32C3-和-ESPHome-连接)
4. [将继电器模块添加到 Home Assistant 仪表板](#将继电器模块添加到-Home-Assistant-仪表板)

### 快速刷写固件

我们为 XIAO 创建了一个快速刷写固件页面，您可以直接使用下面的网站为您拥有的 XIAO 刷写继电器固件，无需编程。该网站将自动检测您连接的 XIAO 芯片，无需选择，直接刷写与 ESP32 芯片对应的 XIAO 固件版本。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>固件刷写器 🖱️</font></span></strong>
    </a>
</div>

## 选择您的 Home Assistant 环境

在本教程中，我们不会详细介绍如何安装 Home Assistant 环境，我们假设您已经有一个正常工作的 Home Assistant 设备。

如果您希望学习如何安装 Home Assistant，那么您可以参考[官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用 x86 设备安装 Home Assistant，因为这是安装带有 Supervised 的 Home Assistant 最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

根据上表，安装 **Home Assistant OS** 和 **Home Assistant Supervised** 是最合适的，这将为您省去很多麻烦。如果您在 OpenWRT 上使用 Docker 运行 Home Assistant（例如使用 LinkStar H68K），请不要担心，我们也会为您提供详细的参考说明。

我们还为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考它们。

- [在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)
- [在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)
- [在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)

## 步骤 1. 安装 ESPHome

如果您安装了 Home Assistant OS，它有一个附加组件商店，这使得安装 ESPHome 变得更加容易。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

在附加组件商店中，您可以搜索并安装 ESPHome。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## 步骤 2. 将固件上传到 XIAO ESP32C3

我们为 XIAO 创建了一个快速刷写固件页面，您可以直接使用下面的网站为您拥有的 XIAO 刷写继电器固件，无需编程。该网站将自动检测您连接的 XIAO 芯片，无需选择，直接刷写与 ESP32 芯片对应的 XIAO 固件版本。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>固件刷写器 🖱️</font></span></strong>
    </a>
</div>

## 步骤 3. 将继电器模块添加到 Home Assistant 仪表板

刷写固件后，您可以看到有一个名为 **seedstudio-relay-module** 的无线网络。请连接到此网络并在浏览器中输入 `192.168.4.1` 来为您的设备配置网络。请使用与您的 Home Assistant 相同的网络。

转到 **setting**，然后 **Devices & services**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

在 **Discovered** 区域，您将找到 XIAO，点击 **CONGFIUGE**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

选择一个区域或保持默认，点击 **FINISH**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

之后，点击 **Devices**，找到 **xiao_esp32c3**（您之前命名的）并点击进入

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

这里是 ESPHome 设备页面，您可以添加一些自动化等。现在我们需要将其添加到仪表板，所以点击它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

点击 **NEXT** 然后点击 **ADD TO DASHBOARD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

现在，点击左侧的 **Overview**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

您将看到继电器控制出现在这里

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### 步骤 7. 使用继电器模块控制台灯

我们可以点击开关来查看继电器是否工作正常。如果您在点击开关时看到板上的小绿灯亮起，说明工作正常！

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
我用这个继电器模块改造了我的小台灯。切断正极线并将其插入继电器模块的两个端口中。您可以在下面的视频中看到效果。这个继电器模块无法为 XIAO 供电，所以请记住使用电池或 USB 线缆为 XIAO 供电。

:::warning
请注意用电安全，通电期间不要触摸继电器。
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

恭喜您成功完成了 XIAO 继电器模块的学习之旅！让我们做更多有趣的改造吧！

## 资源

[PDF] **[XIAO 继电器扩展模块原理图](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_SCH.pdf)**

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
