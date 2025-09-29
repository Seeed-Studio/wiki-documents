---
description: Xadow - Pebble Time 适配器
title: Xadow - Pebble Time 适配器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Pebble_Time_Adapter
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png)

RePhone (Xadow) 模块的引入让您的智能手表更加智能。基于 [Pebble Time 背面的新智能配件端口](http://developer.getpebble.com/guides/hardware/)，我们将纤薄小巧的 RePhone 模块——Xadow GPS v2 和 Xadow NFC v2，集成到 Pebble 的现有生态系统中，从内置电子设备的角度提升其功能。Xadow Pebble Time 适配器通过使用单线串行协议的 Smartstrap 接口，使 RePhone (Xadow) 模块能够与 Pebble Time 通信。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

规格
--------------

背框上的“GND”和“PWR”意味着您可以在不取下外壳的情况下为 Pebble Time 充电。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png)

硬件概述
-----------------

### 组装过程

在日常使用中，模块均匀地放置在手表的两侧，并通过 FPC 电缆连接。模块与适配器之间的连接设计为可扩展形式，以避免意外的连接脱落。适配器背面的 Pebble Time 充电端口仍然可用，用于手表的日常充电。

以下是 RePhone Strap Kit for Pebble Time 的组装过程示意图：

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png)

下载 Xadow APP for Pebble Time
--------------------------------------

您可以按照说明下载 Xadow APP for Pebble Time，在 Pebble Time 上访问 GPS 信息和标签 ID。

Demo App 可从 [pebbleapp_jack.pbw 下载地址](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw) 下载。您可以从智能手机下载或从 PC 发送到智能手机。然后选择使用手机中的“Pebble Time”App 打开它。您将有一个选项将 Demo App 安装到您的 Pebble Time。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

编程指南
-----------------

### 与适配器通信

适配器的固件实现了 Pebble 官方文档中描述的协议：[Pebble Smartstrap Protocol](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

因此，可以从手表应用端调用的资源如下：

<table>
<thead>
<tr class="header">
<th>服务</th>
<th>属性</th>
<th>读/写</th>
<th>数据类型</th>
<th>数据</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0x0 原始数据</td>
<td>0x0 原始数据</td>
<td>读写</td>
<td>uint8 *buffer</td>
<td>适配器端没有处理程序，留给适配器固件程序员扩展使用</td>
</tr>
<tr class="even">
<td>0x2003 电池服务</td>
<td>0x1001 获取电池电压</td>
<td>读</td>
<td>uint16</td>
<td>表带电池的电压，单位为伏特，精度为 1/100。例如，电压为 3.70V，将表示为 370。</td>
</tr>
<tr class="odd">
<td>0x2003 电池服务</td>
<td>0x1002 启用或禁用使用表带电池为 Pebble 充电</td>
<td>读写</td>
<td>uint8</td>
<td>0：不为 Pebble 充电。1：为 Pebble 充电。</td>
</tr>
<tr class="even">
<td>0x2001 位置和导航服务</td>
<td>0x0001 位置</td>
<td>读</td>
<td>sint32[2]</td>
<td>当前经纬度，单位为度，精度为 1/10^7。数据中纬度在前，经度在后。例如，Pebble HQ 的位置为 (37.4400662, -122.1583808)，将表示为 {374400662, -1221583808}。</td>
</tr>
<tr class="odd">
<td>0x2001 位置和导航服务</td>
<td>0x0003 速度</td>
<td>读</td>
<td>uint16</td>
<td>当前速度，单位为米/秒，精度为 1/100。例如，1.5 米/秒将表示为 150。</td>
</tr>
<tr class="even">
<td>0x2001 位置和导航服务</td>
<td>0x1001 海拔</td>
<td>读</td>
<td>uint16</td>
<td>当前海拔，单位为米，精度为 1/100。例如，100 米将表示为 10000。</td>
</tr>
<tr class="odd">
<td>0x2001 位置和导航服务</td>
<td>0x0101 GPS 卫星</td>
<td>读</td>
<td>uint8</td>
<td>GPS 卫星的数量（通常通过 NMEA 报告）。注意，这个数字是可见卫星的数量。</td>
</tr>
<tr class="even">
<td>0x2001 位置和导航服务</td>
<td>0x0102 GPS 定位质量</td>
<td>读</td>
<td>uint8</td>
<td>GPS 定位质量（通过 NMEA 报告）。可能的值列在 <a href="http://www.gpsinformation.org/dale/nmea.htm#GGA">NMEA 规范</a>中。</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC 服务</td>
<td>0x1001 获取 NFC 标签的 UID</td>
<td>读</td>
<td>uint8 *</td>
<td>UID 将以可变长度返回，可在 SmartstrapReadHandler 中通过参数长度指示。
<strong>此属性可以在 SmartstrapNotifyHandler 中通知。</strong></td>
</tr>
<tr class="even">
<td>0x1E01 NFC 服务</td>
<td>0x1002 读取 NDEF 数据</td>
<td>读</td>
<td>uint8 *</td>
<td>NDEF 数据将以可变长度返回，可在 SmartstrapReadHandler 中通过参数长度指示。</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC 服务</td>
<td>0x1003 写入 NDEF 数据</td>
<td>写</td>
<td>uint8 *</td>
<td>将 uint8 缓冲区写入 NFC 标签</td>
</tr>
<tr class="even">
<td>0x1E01 NFC 服务</td>
<td>0x1004 擦除 NDEF 数据</td>
<td>写</td>
<td>任意类型</td>
<td>写入任意内容或空内容以触发擦除。</td>
</tr>
</tbody>
</table>

演示 Pebble 应用的源代码可以在 GitHub 下载：[Xadow_Strap Repository](https://github.com/Seeed-Studio/Xadow_Strap)

此应用仅用于展示部分属性调用，请随意发挥想象，基于 GPS、NFC 等功能开发您自己的精彩 Pebble 应用。

### 编程适配器

适配器基于 LPC11U35 构建，并运行 mbed 软件。初始固件位于 mbed.org。请查看 [Xadow Smartstrap for Pebble](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

适配器的 Eagle 原理图可以在以下链接下载：[点击这里](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)

在构建固件二进制文件后，您可以按照以下步骤将二进制文件刷入适配器：

1) 改造 USB 数据线，并将线焊接到对应的焊盘上。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png)

2) 确保电池断开连接，并将 USB 插入电脑。

3) 短接 "ISP" 和 "GND" 引脚。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG)

4) 插上电池以启动适配器。

5) 您的电脑上会出现一个 USB 驱动器，打开它并删除磁盘中的所有内容，然后将固件二进制文件复制到磁盘中。

6) 断电后重新上电，固件已更新。

RePhone 社区
-----------------

[![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意/项目，并对模块未来的开发提出反馈。于是，我们创建了 RePhone 社区。

现在加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)！让我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Xadow Pebble Time Adapter Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)
- [RePhone 常见问题解答 (FAQs)](https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>