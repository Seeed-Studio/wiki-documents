---
description: LinkIt Smart 7688 v2.0 扩展板
title: LinkIt Smart 7688 v2.0 扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Breakout_for_LinkIt_Smart_7688_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

:::danger
由于 MediaTek Labs 已关闭，所有相关链接已失效。如果需要下载相关文件，请访问以下链接搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

---
**LinkIt Smart 7688 v2.0 扩展板**是一款集成了 Grove 接口的扩展板，专为 LinkItTM Smart 7688 开发板设计。该扩展板可以帮助初学者快速入门，因为它通过简化布线节省了大量工作并使原型制作更加容易。它配备了 USB、以太网和 3.5mm 音频接口，并支持 I2C、UART 等串行总线。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg)

**版本追踪**

|产品版本         |发布日期         |支持状态         |备注                  |
|------------------|----------------|----------------|-----------------------|
|版本 1.0         |2015 年 11 月   |支持            |无                    |
|版本 2.0         |2016 年 4 月    |支持            |参见新功能            |

**新功能：**

* 支持录音功能。
* 对于 3.5mm 手机连接器（音频插孔），支持 OMTP 和 CTIA 协议。您可以通过切换开关选择任一协议。关于如何切换协议，请向下滚动页面阅读 **如何在 OMTP 和 CTIA 之间切换手机连接器协议**。

[![点击购买](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html)

## 特性
---
* Grove 接口使布线更简单，并支持使用 Grove 模块进行扩展。
* USB 主机
* 音频输出
* 以太网接口
* 经济实惠
* 支持录音功能
* 可在 OMTP 和 CTIA 之间切换

## 应用场景
---
* 物联网/网关设备
* 机器人
* 智能多媒体设备
* 教学与学习

## 规格
---
|输入电压         |工作电压         |
|:---------------:|:---------------:|
|5.0V（通过 USB 电源接口） |3.3V|

:::note
调试引脚、以太网引脚和 USB Type-A 主机引脚连接到 MT7688，其他引脚连接到 ATmega32U4。
:::

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_hardware_connections_1200_s.jpg)

|硬件            |数量|硬件            |数量|硬件            |数量|
|----------------|---|----------------|---|----------------|---|
|调试端口        |1  |耳机端口        |1  |辅助引脚        |2  |
|以太网端口      |1  |切换协议引脚    |6  |Grove 接口  |3  |
|USB Type-A      |1  |立体声扬声器驱动接口|1|耳机端口        |1  |

### 关于 Grove 接口

如果您曾使用过 Seeed 的 [Grove](https://www.seeedstudio.com/wiki/Grove_System) 产品，您一定会爱上这种模块。有了这种接口，您可以告别跳线和焊接工作，并通过这些功能模块制作更强大的应用。

### 如何在 OMTP 和 CTIA 之间切换手机连接器协议

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_switch_procotol_1200_.jpg)

如果您比较 V1.0 和 V2.0，可以注意到在右下角有六个引脚和两个跳线帽。这些引脚用于切换手机连接器协议。当您将两个小跳线帽设置到左侧四个引脚时，使用 OMTP 协议；当您将两个小跳线帽设置到右侧四个引脚（如上图所示）时，使用 CTIA 协议。如下图所示：

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_CTIA_OMTP_Switch_Manner.JPG)

请注意，要使用录音功能，您需要将板载固件更新到 LinkIt Smart 7688 扩展板固件（版本 v0.9.2 及以上）。

:::note
* 由于板载闪存的读写速度有限，我们建议使用外部存储设备。
:::


## 开始使用
---
在本教程中，您将使用 LinkIt Smart 7688 V2.0 的扩展板制作一个简单的 MP3 播放器。

### 所需材料
除了 LinkIt Smart 7688 V2.0 的扩展板外，以下是应用所需的其他材料。在开始之前，请确保您手头有所有材料，或者您可以访问 Seeed [Bazaar](https://www.seeedstudio.com/) 获取它们。

|LinkIt Smart 7688 × 1|USB 数据线（A 型到 micro B 型）× 2|UARTBee × 1|跳线 × 3|
|:---:|:---:|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/linkit%20smart%207688.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/jw100n.jpg)|
|[立即购买](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html)|[立即购买](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[立即购买](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[立即购买](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

以下两项您可能已经拥有：
- 立体声扬声器（带 3.5 mm 音频线）× 1
- USB 闪存盘（内含 MP3 格式的音频文件）× 1

**步骤1：** 请参考[这里](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688#Getting_Started)将您的 LinkIt Smart 7688 连接到互联网。

:::note
    您可以将跳线插入 MT7688 的 UART2 端口，而不是将它们焊接到 Pin 8、Pin 9 和 Pin GND。
:::
:::note
    在极少数情况下，您可能无法成功连接到互联网，请重启嵌入式操作系统。
:::
**步骤2：** 使用 USB 转串口适配器打开一个控制台。

**步骤3：** 按如下方式连接所有部件：

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_demo_connection_New.jpg)

:::note
    这是 LinkIt Smart 7688 扩展板（v1.0）的连接示意图。
:::
**步骤4：** 在控制台中输入 **cd /Media/USB-A1** 进入 USB 文件夹。

**步骤5：** 使用 OpenWRT 上安装的工具 **Madplay** 播放音乐，在控制台中输入 **madplay filename.mp3**。

**步骤6：** 现在您将听到音乐播放。


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---

* [原理图文件](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)
* [LinkIt Smart 7688](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688)
* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* [购买 LinkIt Smart 7688](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## 项目

**Smart Vendy** 跟踪供应商销售情况，以便有效管理需要购买的库存，从而在机器售罄之前进行补货。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sainath-komakula/smart-vendy-cd197e/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>