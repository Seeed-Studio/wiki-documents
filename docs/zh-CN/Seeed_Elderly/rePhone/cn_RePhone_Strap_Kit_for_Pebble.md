---
description:  RePhone Strap Kit for Pebble
title:  RePhone Strap Kit for Pebble
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RePhone_Strap_Kit_for_Pebble
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble3-04.png)

RePhone（Xadow）模块的引入让您的智能手表更加智能。基于 [Pebble Time 背面的新智能配件端口](http://developer.getpebble.com/guides/hardware/)，我们将纤薄小巧的 RePhone 模块——Xadow GPS v2 和 Xadow NFC v2，集成到 Pebble 的现有生态系统中，从内置电子设备的角度帮助提升其功能。Xadow Pebble Time Adapter 通过使用单线串行协议的 Smartstrap 接口，使 RePhone（Xadow）模块能够与 Pebble Time 通信。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

##  规格
---
###   Xadow Adapter for Pebble 的底座

背框上的“GND”和“PWR”意味着您可以在不取下外壳的情况下为 Pebble Time 充电。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble_base_2.png)

###   Xadow GPS v2
---
<!-- 有关此模块的更多信息，请查看 [**Xadow GPS V2 Wiki 页面**](/cn/Xadow_GPS_V2)。 -->

<table>
<tr>
<td> 微控制器 </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> 核心 </td>
<td> ARM® 32位 Cortex® -M0+CPU </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 3.3 ~ 6 V（通过断路引脚） </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 48 MHz </td>
</tr>
<tr>
<td> 功耗 </td>
<td> 18mA@跟踪，21mA@获取 </td>
</tr>
<tr>
<td> 节能模式 </td>
<td> 典型值 3mA@AlwaysLocateTM，7uA@备份模式，180uA@待机模式 </td>
</tr>
<tr>
<td> 通道 </td>
<td> 22（跟踪）/ 66（获取） </td>
</tr>
<tr>
<td> 更新速率 </td>
<td> 1Hz（默认），最高可达 10Hz </td>
</tr>
<tr>
<td> 水平位置精度 </td>
<td> &lt;2.5m CEP </td>
</tr>
<tr>
<td> 速度精度 </td>
<td> &lt;0.1m/s </td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 最大 515m/s </td>
</tr>
<tr>
<td> 冷/暖启动（带 EASYTM） </td>
<td> 215s/5s </td>
</tr>
<tr>
<td> 获取灵敏度 </td>
<td> -145dBm </td>
</tr>
<tr>
<td> 跟踪灵敏度 </td>
<td> -163dBm </td>
</tr>
<tr>
<td> 工作温度 </td>
<td> -40℃ 至 85℃ </td>
</tr>
<tr>
<td> 协议 </td>
<td> NMEA 0183/PMTK </td>
</tr>
<tr>
<td> 天线类型 </td>
<td> 芯片天线 </td>
</tr>
<tr>
<td> 接口 </td>
<td> 通过 I2C（7位地址 0x05）与 Xadow GSM+BLE 接口 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow NFC v2

<!-- 有关此模块的更多信息，请查看 [**Xadow NFC v2 Wiki 页面**](/cn/Xadow_NFC_v2)。 -->

<table>
<tr>
<td> 微控制器 </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> 核心 </td>
<td> ARM® 32位 Cortex® -M0+CPU </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 3.3 ~ 6V（通过断路引脚） </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> 工作电流 </td>
<td> 待机时 5mA；读写时 55mA </td>
</tr>
<tr>
<td> 射频 </td>
<td> 13.56 MHz </td>
</tr>
<tr>
<td> 支持的协议 </td>
<td> ISO/IEC 14443 Type A 和 ISO/IEC 14443 Type B </td>
</tr>
<tr>
<td> 最大工作距离 </td>
<td> ~28mm（取决于当前天线尺寸） </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8” </td>
</tr>
</table>

###   Xadow 电池 100mAh

<table>
<tr>
<td> 电压 </td>
<td> 3.3 V </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8” </td>
</tr>
</table>

## 组装过程
---
在日常使用中，模块均匀地放置在手表的每一侧，并通过 FPC 电缆互连。模块与适配器之间的连接设计为可扩展形式，以避免意外的连接脱落。Pebble Time 的充电端口仍可通过适配器背面进行日常充电。

以下是 RePhone Strap Kit for Pebble Time 的组装过程示意图：

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_assembly3.png)

## 下载 Xadow APP for Pebble Time
---
您可以按照说明下载 Xadow APP for Pebble Time，并在您的 Pebble Time 上访问 GPS 信息和标签 ID。

Demo App 可从以下链接下载：[https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw)。您可以从智能手机下载，也可以从 PC 发送到智能手机。然后选择使用手机中的 "Pebble Time" 应用打开它。您将有一个选项将 Demo App 安装到您的 Pebble Time。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

## 编程指南
---
### 与适配器通信

适配器的固件实现了 Pebble 官方文档中描述的协议：[http://developer.getpebble.com/guides/hardware/smartstrap-protocol/](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

因此，可以从 watchapp 端调用的资源如下：

<table>
<tr>
<th>服务</th>
<th>属性</th>
<th>读/写</th>
<th>数据类型</th>
<th>数据</th>
</tr>
<tr>
<td>0x0 原始数据</td>
<td>0x0 原始数据</td>
<td>读写</td>
<td>uint8 *buffer</td>
<td>适配器端没有处理程序，为适配器固件程序员保留扩展性</td>
</tr>
<tr>
<td>0x2003 电池服务</td>
<td>0x1001 获取电池电压</td>
<td>读</td>
<td>uint16</td>
<td>表带电池的电压，单位为伏特，精度为 1/100。例如，电压为 3.70V，将表示为 370。</td>
</tr>
<tr>
<td>0x2003 电池服务</td>
<td>0x1002 启用或禁用使用表带电池为 Pebble 充电</td>
<td>读写</td>
<td>uint8</td>
<td>0：不为 Pebble 充电。1：为 Pebble 充电。</td>
</tr>
<tr>
<td>0x2001 位置和导航服务</td>
<td>0x0001 位置</td>
<td>读</td>
<td>sint32[2]</td>
<td>当前经纬度，单位为度，精度为 1/10^7。数据中纬度在前，经度在后。例如，Pebble HQ 的位置为 (37.4400662, -122.1583808)，将表示为 {374400662, -1221583808}。</td>
</tr>
<tr>
<td>0x2001 位置和导航服务</td>
<td>0x0003 速度</td>
<td>读</td>
<td>uint16</td>
<td>当前速度，单位为米/秒，精度为 1/100。例如，1.5 m/s 将表示为 150。</td>
</tr>
<tr>
<td>0x2001 位置和导航服务</td>
<td>0x1001 海拔</td>
<td>读</td>
<td>uint16</td>
<td>当前海拔，单位为米，精度为 1/100。例如，100m 将表示为 10000。</td>
</tr>
<tr>
<td>0x2001 位置和导航服务</td>
<td>0x0101 GPS 卫星</td>
<td>读</td>
<td>uint8</td>
<td>GPS 卫星的数量（通常通过 NMEA 报告）。注意，此数字表示可见卫星的数量。</td>
</tr>
<tr>
<td>0x2001 位置和导航服务</td>
<td>0x0102 GPS 修正质量</td>
<td>读</td>
<td>uint8</td>
<td>GPS 修正质量（通过 NMEA 报告）。可能的值列在 [NMEA 规范](http://www.gpsinformation.org/dale/nmea.htm#GGA) 中。</td>
</tr>
<tr>
<td>0x1E01 NFC 服务</td>
<td>0x1001 获取 NFC 标签的 UID</td>
<td>读</td>
<td>uint8 *</td>
<td>UID 将以可变长度返回，可在 SmartstrapReadHandler 中通过参数长度指示。
 **此属性可在 SmartstrapNotifyHandler 中通知。** </td>
</tr>
<tr>
<td>0x1E01 NFC 服务</td>
<td>0x1002 读取 NDEF 数据</td>
<td>读</td>
<td>uint8 *</td>
<td>NDEF 数据将以可变长度返回，可在 SmartstrapReadHandler 中通过参数长度指示。</td>
</tr>
<tr>
<td>0x1E01 NFC 服务</td>
<td>0x1003 写入 NDEF 数据</td>
<td>写</td>
<td>uint8 *</td>
<td>将 uint8 缓冲区写入 NFC 标签</td>
</tr>
<tr>
<td>0x1E01 NFC 服务</td>
<td>0x1004 擦除 NDEF 数据</td>
<td>写</td>
<td>任意类型</td>
<td>写入任意内容或空内容以触发擦除。</td>
</tr>
</table>

Demo Pebble App 的源代码可从 GitHub 下载：[https://github.com/Seeed-Studio/Xadow_Strap](https://github.com/Seeed-Studio/Xadow_Strap)

此应用仅用于部分属性调用的演示，请随意基于 GPS、NFC 等功能构建您自己的精彩 Pebble 应用。

### 编程适配器

适配器基于 LPC11U35 构建，并运行 mbed 软件。初始固件位于 mbed.org。请查看：[https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

适配器的 Eagle 原理图可从以下链接下载：[https://www.seeedstudio.com/wiki/images/f/f8/Xadow_Pebble_Time_Adapter.rar](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

构建固件二进制文件后，您可以按照以下步骤将二进制文件刷入适配器。

1) 改装 USB 电缆并将电线焊接到焊盘上

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Hack_USB_cable-03.png)

2) 确保电池断开连接并将 USB 插入 PC。

3) 短接 "ISP" 和 "GND" 引脚。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/ShortISP_GND.PNG)

4) 插入电池以启动适配器

5) 在您的电脑上会出现一个 USB 驱动器，打开它并删除磁盘内的所有内容，然后将固件二进制文件复制到磁盘中。

6) 关闭电源后重新打开，固件已更新。

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意/项目，并对未来模块的开发提出反馈。于是，我们创建了 RePhone 社区。

现在加入 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)吧！我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

### 常见问题解答

一些在 RePhone 社区中常见的问题已被收集并回答在主题 **["RePhone 常见问题解答 (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** 中，该主题会在有新的常见问题出现时持续更新。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
以下链接提供了 Xadow Pebble Time Adapter 的原理图：

*   [_Xadow Pebble Time Adapter eagle 文件_](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

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