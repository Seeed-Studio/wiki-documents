---
description: Xadow - GPS V2
title: Xadow - GPS V2
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_GPS_V2
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.JPG)

基于 Quectel® 的 GPS L70 模块，Xadow GPS v2 集成了先进的 AGPS 技术 EASYTM（嵌入式辅助系统）和 AlwaysLocateTM 技术，即使在室内信号水平下也能实现高性能、超低功耗和快速定位。该模块配备了高灵敏度接收器（-163dBm 跟踪）和内置芯片天线，可在 66 个通道上跟踪多达 22 颗卫星，是导航项目的理想选择。该板还采用了新的 11 PIN Xadow 连接器，以提高模块连接的灵活性。

[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)

## 特性
---

- EASY™，无需外部存储器的先进 AGPS 技术
- 跟踪模式下超低功耗
- AlwaysLocate™，智能控制交替模式
- 高灵敏度
- 支持 QZSS
- 支持 DGPS、SBAS（WAAS/EGNOS/MSAS/GAGAN）
- 抗干扰，多音主动干扰消除器
- 内置芯片天线，效率高达 83%
- 内置 11 PIN Xadow 连接器，可与其他 Xadow 模块灵活连接
- 可堆叠、可链式连接、可缝合，与其他 Xadow 模块兼容

## 规格
---

|||
|---|---|
|**微控制器**|	Kinetis KL02|
|**核心**|	ARM® 32位 Cortex® -M0+CPU|
|**电源供应**	|3.3 - 6 V（通过断路引脚）|
|**闪存**|	32 KB|
|**SRAM**|	4 KB|
|**时钟速度**|	48 MHz|
|**功耗**	|18mA@跟踪，21mA@获取|
|**节能模式**|	典型值 3mA@AlwaysLocateTM，7uA@备份模式，180uA@待机模式|
|**通道**|	22（跟踪）/ 66（获取）|
|**更新速率**|	1Hz（默认），最高可达 10Hz|
|**水平定位精度**|	&lt;2.5m CEP|
|**速度精度**|	&lt;0.1m/s|
|**最大速度**|	最大 515m/s|
|**冷/热启动（使用 EASYTM）**|215s/5s|
|**获取灵敏度**|-145dBm|
|**跟踪灵敏度**|	-163dBm|
|**工作温度**|-40℃ 至 85℃|
|**协议	NMEA**|0183/PMTK|
|**天线类型**|	芯片天线|
|**接口**|	通过 I2C（7位地址 0x05）与 Xadow GSM+BLE 接口|
|**尺寸**|	25.37mm X 20.30mm / 1” × 0.8”

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.png)

## 关于全球定位系统 (GPS)
---
全球定位系统 (GPS) 是一个基于空间的导航系统，可在地球上或地球附近提供实时和全天候的地理位置、高度、行驶速度和时间信息，只要有四颗或更多 GPS 卫星的无障碍视线即可。它最初仅用于军事项目，现在任何拥有 GPS 接收器的人都可以自由使用。GPS 的典型应用包括汽车导航、时间传输、交通信号定时、防盗和跟踪设备等。

## Rephone 社区
---
[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对未来模块的开发提出反馈。于是，我们创建了 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)。

现在就加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 吧！让我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

**常见问题**

一些在 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 中经常被问到的问题已被收集并回答在主题“RePhone 常见问题解答 (FAQ)”中，该主题会随着新问题的出现不断更新。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}></div>

## 资源
---
我们会持续在 GitHub 页面上更新源代码：

- [Xadow GPS v2 源代码](https://github.com/WayenWeng/Xadow_GPS_v2/)
- [基于 Eclipse IDE 的 Xadow GPS v2 测试代码](https://github.com/WayenWeng/Xadow_GPS_v2_test/)

以下链接提供了 Xadow GPS v2 的原理图：

- [Xadow GPS v2 原理图文件](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip)

如果您发现 GPS 值与实际位置有些偏差，可能需要为 Xadow GPS V2 烧录新的固件：

- [了解如何使用 mbed 板烧录新固件](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/Burn_to_Xadow_modules.zip)

了解更多关于 GPS L70 和芯片天线的信息：

- [GPS L70 和芯片天线规格](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/GPS_L70_%26_Chip_Antenna.rar)

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