---
description: 将 Wio Tracker 1110 连接到 TTN
title: 将 Wio Tracker 连接到 LoRa Cloud™ Locator
keywords: 
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 10/23/2023
  author: Jessie
---


本文档详细介绍了如何设置 [Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 并在 [LoRa Cloud™ Locator](https://locator.loracloud.com) 中进行配置的分步说明。

## 网关设置

### 在 LoRa Cloud™ Locator 上添加网关

登录到 [LoRa Cloud™ Locator 网页](https://locator.loracloud.com)。

导航到 `GATEWAY SETTINGS`，点击 `Add New Gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>

输入网关 EUI 并根据您的位置选择正确的 LoRaWAN® 频段。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>

点击 `Create`，您应该会看到一个包含新网关支持文件（证书、密钥）的弹出窗口。确保您点击下载并将文件保存到安全位置（您可能需要允许浏览器下载多个文件）。下载的文件包括：

- **cups_url.txt**：包含您的网关应该用来指向 CUPS 服务器的 URL
- **cups.trust**：包含 CUPS 信任证书
- **cups.crt**：包含用于连接到 CUPS 服务器的证书
- **cups.key**：包含用于连接到 CUPS 服务器的私钥

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### 设置网关

然后我们需要配置 [SenseCAP M2 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，查看[快速入门](https://wiki.seeedstudio.com/cn/quick_start_with_M2_MP/)了解更多详情。

登录到 Luci 页面，导航到 `LoRa` > `LoRa Network`

- **步骤 1**：LoRa 网络设置
导航到 **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2**：将模式设置为 Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3**：Basic Station 设置：

2. **Gateway EUI**：它将自动获取连接网关的 EUI

3. **Server**：选择 CUPS

4. **URL**：复制您的 `cups_url.txt` 文件中的 URL。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>

```cpp
示例：https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>

5. **Authentication Mode**：TLS Server and Client Authentication

6. **trust**/**certificate**/**key**：复制我们之前下载的文件内容。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

设置完成后点击 `Save & Apply`。

一旦您的网关配置正确，其状态应该切换为 `Connected`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>

## 设备设置

### 设置设备

请查看[将 Wio Tracker 1110 开发板连接到 TTN](https://wiki.seeedstudio.com/cn/connect_wio_tracker_to_TTN/) 来选择平台为 TTN。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

### 在 LoRa Cloud™ Locator 上添加设备

然后回到 LoRa Cloud™ Locator 网页，导航到 `DEVICE SETTINGS`，点击 `Add New Device`。

**Tracker type**：`LoRa Basics™ Modem SDK`

选择 APPKey 作为激活模式，然后复制我们之前定义的 Dev EUI、Join EUI 和 APP key。
**Network**：`The Things Network Community`，并选择您的区域集群，然后点击 `Create` 添加您的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

一旦设备成功加入网络，您可以在这里看到它的消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

然后导航到 `TRACKING`，您现在可以查看位置了。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>
