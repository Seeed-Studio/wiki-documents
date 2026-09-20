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
  date: 9/19/2026
  author: Janet
createdAt: '2023-09-21'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/cn/faq_for_SenseCAP_T1000/
---


## 位置相关

### GPS 定位精度

GPS 卫星在太空中以一定的精度广播其信号，但你接收到的结果还取决于其他因素，包括卫星几何分布、信号阻挡、大气状况以及接收机设计特性/质量。

许多因素会降低 GPS 定位精度。常见原因包括：

- 由于建筑物、桥梁、树木等造成的卫星信号阻挡
- 室内或地下使用
- 信号在建筑物或墙壁上的反射（“多路径”）

因此，在开阔无遮挡的区域，你会获得更好的 GPS 信号，从而得到更准确的定位结果。

### 为什么没有 GPS 位置信息？

- 当追踪器在室内时，可能无法获取 GPS 位置。GNSS 定位需要开阔的室外环境。如果你在室内，由于信号较弱，GPS 定位可能会超时。请确保设备放置在室外以保证 GPS 精度。

- 确保设备正确安装，使设备正面朝上，以避免天线位置被遮挡

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

如果你的 T1000 无法提供 GNSS 位置信息，请按照以下排查步骤检查设备配置、安装环境以及 GNSS 定位状态。


#### 1. 检查设备安装环境

GNSS 性能会受到设备安装环境的影响。

请确保：

- **T1000 的正面没有被遮挡**。
- 设备未放置在金属外壳内，或被可能严重阻挡 GNSS 信号的材料包围。
- 设备附近**没有金属物体**。
- 在**开阔的室外环境**中测试设备，并且视野中有清晰的天空。


#### 2. 增加 GNSS 扫描时间

GNSS 扫描时间决定了 T1000 在一次定位操作中搜索 GNSS 卫星的时长。

如果 GNSS 扫描时间过短，设备可能没有足够时间获得有效的 GNSS 定位结果，尤其是在设备首次测试或 GNSS 信号相对较弱的环境中。

请在 SenseCraft App 中打开 T1000 的**通用设置（General settings）**，并增加 **GNSS Scan Time**。

GNSS 扫描时间的最大值为 **120 秒**。

> **提示：** 为了排查问题，我们建议先使用较长的 GNSS 扫描时间，以判断问题是否与卫星搜索可用时间有关。

#### 3. 在 LoRaWAN 上行载荷中检查 GNSS 定位状态

如果 T1000 仍然无法提供位置信息，请检查**原始 LoRaWAN 上行载荷**。

上行载荷中包含定位结果和定位状态。通过检查原始载荷，你可以判断：

- GNSS 扫描是否超时；
- 是否使用了其他定位方式；

例如，以下载荷是 GNSS 扫描超时的一个示例：

`110100000064a763a0014100002f`

在此示例中，第一个字节 11 表示定位状态和传感器数据包，第二个字节 01 表示 GNSS 扫描超时且未能获取位置信息。你可以在 T1000 载荷格式文档中找到更多详细信息。


#### 4. 提供原始 LoRaWAN 上行载荷

如果在检查以上项目后问题仍然存在，请提供来自 T1000 的**多条原始 LoRaWAN 上行载荷**，并通过 techsupport@seeed.io 联系我们的技术支持团队。


### 为什么 Wi-Fi 或蓝牙定位没有在 SenseCAP App 地图上显示？

- Wi-Fi 定位需要调用第三方地图解析服务，由用户自行调用进行解析。目前 Mate App 仅支持 GNSS 定位显示。

- 蓝牙定位依赖蓝牙 Beacon 及其对应位置进行精确追踪。

## 网络相关

### Helium 网络

:::caution note
对于使用 **EU868**/**RU864** 频段的用户：

**不建议**将上报间隔设置为小于 4 分钟。

如果你将上报间隔设置为小于 4 分钟，可能会注意到设备上行数据的时间戳与当前时间不一致。
:::

**原因说明如下：**

鉴于 EU868 频段的 [1% 占空比](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) 限制，设备每次上行发送后必须耐心等待大约 4 分钟。此外，Helium 网络仅在累积 20 个连续且 `ADR` 位为 1 的上行数据包后，才会启动数据速率和发射功率的校正机制。

因此，如果你设置的上报间隔小于 4 分钟，实时数据会暂时缓存在 RAM 中，直到 Helium 网络触发数据速率和功率校正后再进行上传。

### 如何获取密钥

在设置页面中，选择 SenseCAP 以外的平台即可获取密钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## 按键相关

### 入网

长按按键 3 秒，绿灯会慢闪一次，然后再按一次按键，绿灯会呈呼吸灯效果，随后设备会尝试加入 LoRaWAN 网络。

### 强制重启

按住按键不放，然后连接充电线，连接后松开按键，绿灯会呈呼吸灯效果，随后设备会被强制重启。

## 电池相关

### 电池寿命

电池寿命取决于上行间隔、传感器使用情况、LoRa 传输距离以及工作温度等因素。预测的电池寿命基于典型工作环境（25°C），仅供参考。实际电池寿命可能有所差异。

#### EU868（1C/SF12）

|上报间隔|1 分钟|5 分钟|60 分钟|1 天|
|--|--|--|--|--|
|电池寿命（天）|2.62|27.21|106.78|209.3|

#### US915（1C/SF9）

|上报间隔|1 分钟|5 分钟|60 分钟|1 天|
|--|--|--|--|--|
|电池寿命（天）|3.02|37.52|117.32|210.7|

如需详细的电池寿命计算，请参考 [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)。

### 充电状态

|状态|指示灯|
|----|----|
|充电中| LED 每 3 秒闪烁一次。|
|已充满| LED 常亮。|
|充电异常|当设备在低于 0°C 或高于 45°C 的情况下充电时，设备会进入充电保护状态，无法充电。<br/>LED 会快速闪烁。|

:::caution 充电异常告警
如果在充电时指示灯 `flashes quickly`，可能是电源电压不足或接触不良。

请检查你的电源，或尝试更换其他电源适配器。
:::

### 充满电需要多长时间？

通常需要大约 **2 小时** 才能充满电。

### 充电时可以继续上传数据吗？

可以，设备在充电时仍可继续上传数据。

## 传感器相关

### 没有传感器数据

为了节省电量，温度/光照传感器功能默认关闭，因此你需要先在 SenseCAP Mate APP 中将其开启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## 缓存数据

### 工作原理

当 LoRaWAN 信号较弱或没有网络覆盖时，数据会保存在设备中。当设备回到有 LoRaWAN 网络覆盖的区域后，会先发送实时数据，然后再上传缓存数据。

在每个上报周期内，设备会先上传最新位置，然后再上传缓存数据。
每个周期只会上报少量历史数据包，因此不会影响占空比。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意

由于设备最多只能缓存约 1000 条离线数据，如果你长时间处于没有 LoRaWAN 网络覆盖的地方，当离线数据达到上限时，一些旧数据会被新数据覆盖，因此你可能会“丢失”部分数据。

## 如何批量配置

请参考 [快速上手](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) 完成第一个设备的配置，然后点击右上角的 `Template` 模块。

点击 `Save as Template`，为你的模板命名，然后点击 `Confirm`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

之后在配置其他设备时，你可以直接选择已保存的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

如果你想将模板分享给其他人，可以选择 `Copy Link to Share` 或 `Download Template`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

其他用户可以通过复制共享 URL 或导入模板文件来使用你的模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## 如何退出 DFU 模式

在固件升级失败后，设备可能会进入 DFU 模式。你可以在 SenseCraft app 中看到设备名称 `SENSECAP_GR_DFU_XXXX`，并且 LED 指示灯会持续闪烁。

- 在 DFU 模式下，如果 3 分钟内无操作，设备会自动退出。

- 如果你希望立即退出，可以长按按键 3 秒，设备会重启并恢复正常工作。

如果你发现设备在单击、长按 3 秒或长按 10 秒后仍无法退出 DFU 模式，请按照以下步骤操作：

**步骤 1：在 SenseCraft APP 中连接设备**

按照前面的步骤进入 T1000 的蓝牙配置页面，连接设备后你将看到如下页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**步骤 2：上传固件文件**

点击 `Upload Firmware File`，选择 bin 文件来烧录固件。

如需最新固件文件，请联系 **techsupport@seeed.io**

## 时间戳错误

如果你发现载荷中的时间戳错误，请将固件升级到最新版本。

更多详情请查看 [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/cn/fm_release_for_SenseCAP_T1000/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## 应用相关错误

### 我可以在 SenseCraft App 中查看设备状态和数据吗？

如果设备已连接到 SenseCAP Cloud，你可以在 SenseCraft App 中直接查看设备状态和数据，例如在线状态、传感器数据和定位信息。

如果设备连接到其他 LoRaWAN 云平台，设备信息和数据将不会同步到 SenseCraft App。在这种情况下，你需要在所使用的 LoRaWAN 平台上查看对应的设备状态和上行数据。

## 集成

集成应用可以通过多种方式完成，具体取决于你的需求和目标。以下是一些常见的集成方式：

- **SenseCAP API**：

使用应用程序编程接口（API）是让你的应用与其他应用或服务进行通信的一种常见方式，你可以将设备连接到 SenseCAP Cloud，然后使用 SenseCAP API 获取数据。

SenseCAP API 供用户管理物联网设备和数据使用。它结合了三种类型的 API 方法：HTTP 协议、MQTT 协议和 WebSocket 协议。

更多详情请查看 [SenseCAP API](https://wiki.seeedstudio.com/cn/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/)。

- **LoRaWAN Network Server**：

你可以使用 [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，然后直接使用内置的 LoRaWAN Network Server 进行集成。

更多详情请查看 [LNS Configuration](https://wiki.seeedstudio.com/cn/SenseCAP_m2_LNS_config)。

## 如何在 T1000 上重置 DevNonce

当设备多次进行 OTAA 入网尝试时，可能会出现 DevNonce 问题。

在长期反复入网尝试后，DevNonce 计数器可能会达到上限，导致设备无法再正常入网。

一个典型的情况是：
- 设备已使用很长时间，但某一天开始无法成功入网，即使设备频段计划与网关频段计划匹配。 
- 在服务器端查看设备日志时，会发现重复出现 DevNonce 溢出错误。

如果 T1000 因 DevNonce 问题而无法加入 LoRaWAN 网络，请联系 Seeed 技术支持团队（techsupport@seeed.io）。我们可以提供专用固件来清除或重置 DevNonce，使设备能够再次正常加入 LoRaWAN 网络。

