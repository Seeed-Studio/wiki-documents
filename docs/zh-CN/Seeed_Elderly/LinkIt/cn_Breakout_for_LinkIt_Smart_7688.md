---
description: LinkIt Smart 7688 的扩展板
title: LinkIt Smart 7688 的扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Breakout_for_LinkIt_Smart_7688
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

:::danger
由于 MediaTek Labs 的关闭，所有相关链接已失效。如果您需要下载相关文件，请通过以下链接搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

**LinkIt Smart 7688 的扩展板**是一款集成了 Grove 接口的扩展板，专为 LinkItTM Smart 7688 开发板设计。该扩展板通过简化布线节省了大量工作，使原型制作更加轻松。它将帮助初学者快速入门，支持 I2C、UART 等串行总线，并配备 USB、以太网和 3.5mm 音频接口。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

## 特性
---
* Grove 接口简化了布线，并支持通过 Grove 模块进行扩展。

* USB 主机

* 音频输出

* 以太网接口

* 经济实惠

## 应用场景
---
* 物联网/网关设备

* 机器人

* 智能多媒体设备

* 教学与学习

## 规格
---
<table>
  <tr>
    <td> 输入电压 </td>
    <td> 5.0V（通过 USB 电源接口）</td>
  </tr>
  <tr>
    <td> 工作电压 </td>
    <td> 3.3V</td>
  </tr>
  <tr>
    <td colspan="2"> 调试引脚、以太网引脚和 USB Type-A 主机引脚连接到 MT7688，其他引脚连接到 ATmega32U4。</td>
  </tr>
</table>

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Grove 接口**

<!-- 连接丰富的 [Grove](/cn/Grove_System) 接口功能模块。通过这种接口，您无需跳线或焊接工作，可以使用这些功能模块制作更强大的应用。 -->

:::note
    **注意** 我们将在下一版本的产品中为该扩展板添加音频录制功能。
:::

本节将向高级用户展示如何为该扩展板添加录音功能。

1. 下载页面底部的原理图文件。打开名为 **Breakout for LinkIt Smart7688 v1.0 brd.pdf** 的文件，找到 **MIC Input** 部分。移除以下组件：电感 L6 和电容 C21。这将为该扩展板添加录音功能。**注意** 此方法仅适用于 LinkIt Smart 7688 固件版本 0.9.3 及以上。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/To_use_recording_function_on_version_1.0.png)

2. 对于初学者，我们建议您购买 [Breakout for LinkIt Smart 7688 v2.0](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142)。

### **零件清单**

<table>
  <tr>
    <th>零件名称</th>
    <th>数量</th>
  </tr>
  <tr>
    <td> LinkIt Smart 7688 的扩展板 </td>
    <td> 1PCS </td>
  </tr>
</table>

## 入门指南

### 所需材料

* LinkIt Smart 7688 × 1

* USB 数据线（Type-A 至 Micro Type-B）× 2

* USB 转串口适配器 × 1

* 跳线 × 3

* 立体声（带 3.5mm 音频线）× 1

* USB 闪存驱动器（内含 MP3 格式音频文件）× 1

### 播放音乐

<!-- 1.参考 [这里](/cn/LinkIt_Smart_7688#Getting_Started) 将您的 LinkIt Smart 7688 连接到互联网。
 -->

:::note
    - 您可以将跳线插入 MT7688 UART2 接口，而无需将其焊接到 Pin 8、Pin 9 和 Pin GND。
    - 在少数情况下，您可能无法成功连接到互联网，请重启嵌入式操作系统。
:::
2. 使用 USB 转串口适配器打开一个控制台。

3. 按如下方式连接所有部件：

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4. 在控制台中输入 **cd /Media/USB-A1** 进入 USB 文件夹。

5. 使用 OpenWRT 上安装的工具 **Madplay** 播放音乐，输入 **madplay filename.mp3**。

6. 现在您将听到音乐。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [原理图文件](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

<!-- * [LinkIt Smart 7688](/cn/LinkIt_Smart_7688) -->

* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

* [购买 LinkIt Smart 7688](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>