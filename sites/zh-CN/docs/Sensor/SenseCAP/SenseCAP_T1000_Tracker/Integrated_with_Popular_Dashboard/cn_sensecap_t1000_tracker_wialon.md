---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title:  Wialon 集成
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 6/4/2024
  author: Jessie
---


[Wialon](https://wialon.com/) 是一个用于 GPS 监控和物联网的车队管理软件平台，在全球 150 多个国家跟踪超过 370 万个移动和固定设备，由 2500 多家合作伙伴公司、700 家硬件制造商、数百家基于 Wialon 的解决方案开发商组成。

本章内容将指导用户如何将 SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Wialon 平台。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请查看[快速入门](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker)，首先将您的 SenseCAP T1000 Tracker 连接到 SenseCAP Cloud。

## 在 SenseCAP 门户获取 SenseCAP API

登录 [SenseCAP Portal](https://sensecap.seeed.cc/portal)，导航到 `Access API keys`，点击 `Create Access Key`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

然后您将获得 `API ID` 和 `Access API keys`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Wialon 配置

登录 [Wialon Hosting](https://hosting.wialon.com/?lang=en)。

**Wialon Hosting** 是一个用于 GPS 监控和物联网的平台，数据存储和管理在我们的数据中心。

### 添加设备

导航到 **Units** 选项卡并点击 **New** 添加新设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

为您的设备命名，选择 `Device Type` 为 `SenseCAP API`，点击扳手图标填写属性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**：sensecap.seeed.cc<br/>
**API ID**：SenseCAP Portal 中的 API ID<br/>
**API Password**：SenseCAP Portal 中的 Access API keys<br/>
**Unique ID**：您设备的 EUI。

保持您的设备在线，然后您可以在地图上看到位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### 地理围栏（可选）

地理围栏是地图上用于监控目的的限定区域。

导航到 `Geofences` 选项卡并点击 `New` 添加新的地理围栏。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* 指定地理围栏名称。
* 选择类型。
* 在地图上标记地理围栏的中心（双击所需位置）。
* 指定地理围栏半径。
* 点击 `Save`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>