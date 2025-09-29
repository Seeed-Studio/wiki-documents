---
description: 将 SenseCAP T1000 追踪器连接到 Loriot
title: 连接到 Loriot
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 12/12/2023
  author: KeweiLee
---


[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN 网络服务器 (LNS) 是硬件无关的，支持市场上的每一种 LoRaWAN® 网关和传感器。

:::info
如果您没有 Loriot 账户，请前往[这里](https://loriot.io/register.html)，在您所在地区选择一个 LORIOT 社区公共服务器并注册一个新账户。
:::

## 添加网络

网络简单来说就是 LoRaWAN 网关的集合，提供了一个高效的环境来监控和管理您的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

当添加新网关时，需要将其分配到一个网络中，它可以单独存在，也可以与其他网关的集合一起存在。

将网关分组到网络中的典型方法是按地理位置、型号、客户或任何最适合您的结构。

对于一个网络中可以包含多少个网关没有限制（只要在账户网关限制内），但每个网关只能属于一个网络。

### 添加您的第一个网关

通过添加您的第一个网关来启动您的 LoRaWAN 网络！您也可以按照 Loriot 的[逐步指南](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station)来注册网关或基站。

我们在这里创建一个网关（Basics Station Semtech）作为示例。导航到 `Network`，然后点击您刚刚添加的网络。点击 `Add Gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

在页面下半部分会出现网关列表，通过点击相关网关型号的图片来选择它。
要注册网关，需要输入网关的 eth0 MAC 地址（六个用冒号分隔的八位字节）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

最后可以设置其位置，可以通过两种不同的方式定义。要么在地图上选择位置，要么填写所需信息来手动注册地址。

### 配置您的网关证书

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

在 `Certificate` 页面中，您将找到网络服务器地址、网络服务器端口，并能够下载或复制 TLS CA 证书以配置您的网关型号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

在您网关的用户界面中，选择"LoRa Basics Station"作为操作模式。请确保使用上一步获得的信息配置地址、端口和服务器证书。这是为了在网关和 LORIOT 网络管理系统之间建立连接。

返回到 LORIOT 的用户界面，验证您的 LoRa Basics™ Station 现在已在线并与 LORIOT 网络管理系统正常运行。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>


## 添加应用程序

[应用程序](https://docs.loriot.io/display/NMS/Create+a+New+Application)简单来说就是我们注册、管理和组织设备的地方，并为设备数据选择输出目标。
当添加新设备时，它被分配到一个应用程序，这告知服务器您的设备注册在哪个应用程序中以及您选择的数据输出的详细信息。

只要设备总数不超过用户的账户限制，任何数量的设备都可以添加到应用程序中，无论传感器类型或制造商如何。

通常，一个应用程序将包含特定用例的所有设备（例如智能建筑中的所有传感器）或相同类型的设备（例如温度传感器）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>


### 添加您的第一个设备（SenseCAP T1000 追踪器）


点击 `Enroll Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

LORIOT 网络服务器支持 LoRaWAN 1.0.x 和 1.1 设备。设备可以通过两种不同的注册过程添加。OTAA（空中激活）是大多数设备的推荐选项，但 ABP（个性化激活）也可用。使用 SenseCAP Mate App 蓝牙成功连接到追踪器后，您可以在此选项卡上获取 OTAA 信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

将平台设置为其他平台，然后复制设备 EUI/APP EUI/APP Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

最后，选择 Enroll。添加设备后，您将能够在 Loriot 上看到数据流。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>