---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: 常见问题
keywords:
  - Tracker
  - FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 2/14/2026
  author: Janet
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/faq_for_SenseCAP_T1000/
---


## 位置相关

### GPS 定位精度

GPS 卫星在太空中以一定的精度广播其信号，但你接收到的结果还取决于其他因素，包括卫星几何结构、信号阻挡、大气状况以及接收机的设计特性/质量。

许多因素都会降低 GPS 定位精度。常见原因包括：

- 由于建筑物、桥梁、树木等造成的卫星信号阻挡
- 室内或地下使用
- 信号在建筑物或墙壁上的反射（“多路径”）

因此，在开阔无遮挡的区域，你会获得更好的 GPS 信号，从而获得更准确的定位结果。

### 为什么没有 GPS 位置信息？

- 当追踪器在室内时，可能无法获取 GPS 位置。GNSS 定位需要开阔的室外环境。如果你在室内，由于信号较弱，GPS 定位可能会超时。请确保设备放置在室外以保证 GPS 精度。

- 确保正确安装设备，使设备正面朝上，以避免天线位置被遮挡

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### 为什么 Wi-Fi 或 Bluetooth 位置没有显示在 SenseCAP App 地图上？

- Wi-Fi 定位需要第三方地图解析服务，必须由用户调用进行解析。目前，Mate App 仅支持 GNSS 定位显示。

- Bluetooth 定位依赖于 Bluetooth 信标及其各自的位置来实现精确追踪。请勿遮挡天线的位置。

## 网络相关

### Helium 网络

:::caution note
对于使用 **EU868**/**RU864** 区域的用户：

**不建议**将上行上传间隔设置为小于 4 分钟。

如果你将上传间隔设置为小于 4 分钟，你可能会注意到设备上行数据的时间戳与当前时间不对齐。
:::

**原因如下**：

鉴于 EU868 区域的 [1% duty cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) 限制，设备每次上行发送后必须耐心等待大约 4 分钟。此外，Helium 网络仅在累积 20 个连续且 [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) 位为 1 的上行数据包后，才会启动数据速率和功率校正。

因此，如果你设置的上传间隔小于 4 分钟，实时数据会暂时存储在 RAM 中，直到 Helium 网络触发数据速率和功率校正后再进行上传。

### 如何获取密钥

在设置页面中，选择 SenseCAP 以外的平台来获取密钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## 按钮相关

### 入网

长按按钮 3 秒，绿灯会慢闪一次，然后再按一次按钮，绿灯会呼吸闪烁，之后设备会尝试加入 LoRaWAN 网络。

### 强制重启

按住按钮不放，然后连接充电线，连接后松开按钮，绿灯会呼吸闪烁，随后设备会被强制重启。

## 电池相关

### 电池寿命

电池寿命取决于上行间隔、传感器使用情况、LoRa 传输距离和工作温度等因素。预测的电池寿命基于典型工作环境（25°C），仅供参考。实际电池寿命可能有所不同。

#### EU868(1C/SF12)

|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|3.02|37.52|117.32|210.7|

如需详细的电池寿命计算，请参考 [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)。

### 充电状态

|Status|Indicator|
|----|----|
|Charging| The LED will flash once every 3 seconds.|
|Fully charged| The LED will stay always on.|
|Charging anomaly|When the device is charged below 0 ° C or above 45 ° C, the device will enter the charge protection state and cannot be charged.<br/>The LED will flash rapidly.|

:::caution Charging abnormality Alarm
If the indicator `flashes quickly` while charging, it may be that the power voltage is insufficient or poor contact.

Please check your power supply or try another power adaptor.
:::

### 充满电需要多长时间？

通常需要大约 **2 小时** 才能完全充满。

### 充电时可以继续上传数据吗？

可以，设备在充电时仍然可以继续上传数据。

## 传感器相关

### 没有传感器数据

为节省电量，温度/光照传感器功能默认是关闭的，因此你需要先在 SenseCAP Mate APP 中将其开启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## 缓存数据

### 工作原理

当 LoRaWAN 信号较弱或没有网络覆盖时，数据会保存在设备中。当设备回到有 LoRaWAN 网络覆盖的区域时，它会先发送实时数据，然后再上传缓存数据。

在每个上传周期内，它会先上传最新位置，然后再上传缓存数据。
每个周期只会上传少量历史数据包，因此不会影响 duty cycle。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意

由于设备最多只能缓存约 1,000 条离线数据，如果你长时间处于没有 LoRaWAN 网络覆盖的地方，当离线数据达到上限时，一些旧数据会被新数据覆盖，因此你可能会“丢失”部分数据。

## 如何批量配置

请查看 [Quick Start](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) 来完成第一个设备的设置，然后点击右上角的 `Template` 模块。

点击 `Save as Template`，为你的模板命名，然后点击 `Confirm`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

之后在配置其他设备时，你可以直接选择你保存的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

如果你想将模板分享给其他人，可以选择 `Copy Link to Share` 或 `Download Template`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

其他用户可以通过复制共享的 URL 或导入模板文件来使用你的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## 如何退出 DFU 模式

在固件升级失败后，设备可能会进入 DFU 模式。你可以在 SenseCraft app 中看到设备名称 `SENSECAP_GR_DFU_XXXX`，并且 LED 灯会持续闪烁。

- 在 DFU 模式下，如果 3 分钟内无操作，设备会自动退出。

- 如果你希望立即退出，可以长按按钮 3 秒，设备会重启并恢复正常工作。

如果你发现设备在单击、长按 3 秒或长按 10 秒后仍无法退出 DFU 模式，请按以下步骤操作：

**步骤 1：在 SenseCraft APP 中连接设备**

按照之前的步骤进入 T1000 的 Bluetooth 配置页面，连接设备后你会看到如下页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**步骤 2：上传固件文件**

点击 `Upload Firmware File`，选择 bin 文件来烧录固件。

如需最新固件文件，请联系 **techsupport@seeed.io**

## 时间戳错误

如果你发现载荷中的时间戳错误，请将固件升级到最新版本。

更多详情请查看 [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/cn/fm_release_for_SenseCAP_T1000/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## 集成

根据你的需求和目标，集成应用可以通过多种方式完成。以下是一些常见的集成选项：

- **SenseCAP API**:

使用 Application Programming Interface (API) 是让你的应用与其他应用或服务进行通信的常见方式，你可以将设备连接到 SenseCAP Cloud，然后使用 SenseCAP API 获取数据。

SenseCAP API 供用户管理物联网设备和数据使用。它结合了三种类型的 API 方法：HTTP 协议、MQTT 协议和 WebSocket 协议。

更多详情请查看 [SenseCAP API](https://wiki.seeedstudio.com/cn/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/)。

- **LoRaWAN Network Server**：

你可以使用 [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，然后可以直接使用内置的 LoRaWAN Network Server 进行集成。

更多详情请查看 [LNS Configuration](https://wiki.seeedstudio.com/cn/SenseCAP_m2_LNS_config)。
