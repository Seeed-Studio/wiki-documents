---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac 集成
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_trackpac
last_update:
  date: 10/26/2023
  author: Jessie
---

[Trackpac](https://trackpac.io/) 是一个创新的物联网（IoT）仪表板管理系统，旨在简化各种物联网设备的监督、控制和通知流程。这些设备涵盖了多种功能，包括追踪器、温度传感器、湿度传感器、液位指示器和其他基于传感器的数据测量工具。

本章内容将指导用户如何将 [SenseCAP T1000 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Trackpac。


## 配置设备

请查看[快速入门](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker/)以正确设置您的设备。

选择平台为 `Other Platform`，将 `APP EUI` 配置为推荐值：
```cpp 
545241434B504143
```

:::tip
如果您想要更改回来，执行 `reset` 将恢复原始密钥。
:::

然后复制 `Device EUI`、`APP EUI` 和 `APP key`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## 配置 Trackpac 门户


登录到 [Trackpac 门户](https://v2.trackpac.io)。

### 添加设备

导航到 `Devices`，点击 `+` 图标添加新设备。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

选择 `Enter Keys Manually`，为您的设备命名，并配置 `Device EUI`、`APP EUI`、`APP key`。

**LoRaWAN Network**: Helium

:::note
查看 [Helium 网络覆盖](https://explorer.helium.com/)。
:::

**Device Type**: SenseCAP T1000

然后点击 `Add Device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## 追踪

现在您的 SenseCAP T1000 已成功与 Trackpac 集成，您可以查看数据了。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## 添加地理围栏（可选）


在添加地理围栏之前，您需要先添加联系人。

导航到 `Contacts` 部分，点击右上角的 `+` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

输入 `Name` 并 `Select Contact Type`：在提供的字段中，输入联系人的姓名。选择您要添加的联系人类型——他们是通过短信、电子邮件还是两者接收警报。

在相应字段中输入联系人的电子邮件和/或电话号码。

输入所有必要信息后，点击 `Add` 按钮完成并添加联系人。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

导航到 `Geofences` 选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


点击 `+` 箭头。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


输入地理围栏名称并设置半径：使用滑块或输入字段设置地理围栏的半径（以米为单位）。

**配置警报**：开启或关闭是否要在跨越地理围栏边界时接收警报。

* Out of Hours：指定是否只在特定时间之外接收警报。

* Start and End Time：如果选择了"Out of Hours"，输入您不想接收警报的时间范围。

**选择警报联系人**：

通过输入姓名或点击框并从列表中选择，选择哪些已保存的联系人应该接收地理围栏警报。

**设置地理围栏中心**：

* Click on the Map：使用鼠标点击您想要设置为地理围栏中心的位置。

* Use Geolocate：或者，您可以使用地理定位功能（通常表示为指南针或位置图标）缩放到您的当前位置并将其设置为地理围栏中心。

点击 `Add Geofence` 保存。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


然后当追踪器进入或离开地理围栏时，您将收到警报。