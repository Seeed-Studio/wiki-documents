---
description: 连接到 Helium 网络
title: 连接到 Helium 网络
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 11/26/2023
  author: Leo
---

# 连接到 Helium 网络

## Helium 控制台

Helium 控制台是由 Helium 基金会托管的基于 Web 的设备管理工具，允许开发者在 Helium 网络上注册、认证和管理他们的设备。除了设备管理之外，控制台还提供称为集成的预构建连接，通过 HTTPs 或 MQTT 路由设备数据；或直接连接到云服务，如 AWS IoT。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## 连接到 Helium 网络

### 创建新账户

请访问 &lt;https://console.helium.com/&gt;，并注册您的账户。

### 设置传感器

(1) 打开 SenseCAP Mate 应用

(2) 按住按钮 3 秒钟，LED 将以 1 秒频率闪烁。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) 请点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) 通过 S/N（标签）选择传感器。然后，进入后将显示传感器的基本信息。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### 通过 SenseCAP Mate 应用设置传感器频率

根据网关的频段设置相应的频段。

(1) 点击"Setting"并选择平台为"**Helium**"。

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) 选择频率计划，如果网关是 US915，将传感器设置为 US915。

(3) 点击"Send"按钮，将设置发送到传感器使其生效。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) 点击"Home"按钮，应用将断开蓝牙连接。

然后，传感器将重启。

(5) 当设备从蓝牙断开连接时，LED 亮起 **15 秒**，然后像**呼吸灯**一样闪烁。

(6) 成功加入网络后，LED **快速闪烁 2 秒**。

# Helium 控制台配置

## 添加新设备

(1) 点击"Devices" –> "Add New Device"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) 输入 Device EUI、App EUI、App Key：详情请参考 SenseCAP mate 应用。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) 保存设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4）添加新标签，然后将标签添加到设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## 在 Helium 上检查数据

(1) 进入设备详情页面并找到 REAL TIME PACKETS。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) 给传感器上电，它将显示原始数据。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## 将数据从 Helium 上传到 Datacake

### 创建 Datacake 账户

(1) 创建新账户，网站：&lt;https://datacake.co/&gt;

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) 点击 "Edit Profile" -> "API" -> 获取 API token。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### 在 Helium 控制台添加新集成

(1) 点击 "Integrations" -> "Add New Integration" -> "Datacake"。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) 输入 Datacake Token（参考[该部分](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)）并为您的集成命名。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### 在 Helium 上配置流程

(1) 点击 "Flows"。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) 将标签拖拽到空白位置。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) 将集成拖拽到空白位置。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) 连接两个模块。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) 保存更改。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### 在 Datacake 上添加传感器

(1) 返回 Datacake 仪表板，点击 "Device" -> "Add Device"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) 搜索 "Seeed"，您可以直接选择一些传感器。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) 选择传感器模板。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) 选择 "Helium"。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) 输入您的设备 EUI 和名称。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) 选择您的计划并添加设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### 从 Datacake 检查数据

点击调试按钮，它将显示调试日志。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
