---
description: 连接到 The Things Network
title: 连接到 The Things Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /cn/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 11/25/2024
  author: Leo
---

# 连接到 The Things Network

## The Things Network

The Things Stack 是一个企业级 LoRaWAN 网络服务器，基于开源核心构建。The Things Stack 允许您在自己的硬件上或在云端构建和管理 LoRaWAN 网络。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)

## 连接到 The Things Network

### 创建新账户

TTN 网站：&lt;https://www.thethingsnetwork.org/&gt;

### 设置传感器

(1) 打开 SenseCAP Mate 应用

(2) 按住按钮 3 秒钟，LED 将以 1 秒频率闪烁。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) 请点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) 通过 S/N（标签）选择传感器。然后，进入后将显示传感器的基本信息。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)

### 通过 SenseCAP Mate 应用设置传感器频率

根据网关的频段设置相应的频段。

(1) 点击"Setting"并选择平台为"The Things Network"。

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png)

(2) 选择频率计划，如果您的网关是 US915，请将传感器设置为 US915。

![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

(3) 设备默认使用 OTAA 加入 LoRaWAN 网络。因此，我们可以在这里设置设备 EUI、App EUI 和 APP Key。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

|**参数**|**类型**|
| - | - |
|Device EUI|16 位，0 ~ F 的十六进制|
|App EUI|16 位，0 ~ F 的十六进制|
|App Key|32 位，0 ~ F 的十六进制|

(4) 设置数据包策略。传感器上行数据包策略有三种模式。

|**参数**|**描述**|
| - | - |
|2C+1N (默认)|2C+1N（2个确认数据包和1个非确认数据包）是最佳策略，该模式可以最大程度地降低数据包丢失率，但是设备在TTN中会消耗最多的数据包，或在Helium网络中消耗最多的数据积分。|
|1C|1C（1个确认）设备在从服务器收到1个接收确认数据包后将进入休眠状态。|
|1N|1N（1个非确认）设备只发送数据包然后开始休眠，无论服务器是否接收到数据。|

(5) 点击"发送"按钮，将设置发送到传感器以使其生效。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

(6) 点击"主页"按钮，应用程序将断开蓝牙连接。

然后，传感器将重新启动。

(7) 当设备与蓝牙断开连接时，LED 灯亮起 **5 秒钟**，然后闪烁为**呼吸灯**。

## TTN 配置

### 在 TTN 上注册网关

根据实际信息在 TTN 控制台上创建网关。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### 创建应用程序

在您的 TTN 控制台上创建应用程序。在应用程序中，您可以注册和管理终端设备及其网络数据。设置设备群后，使用我们众多集成选项之一将相关数据传递到您的外部服务。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## 将传感器添加到 TTN 控制台

(1) 选择您已创建的应用程序，然后点击"注册终端设备"来添加您的设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

(2) 在 LoRaWAN 设备存储库中选择终端设备。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

然后根据品牌，配置如下所示的项目。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0016.png)

- 终端设备品牌：选择 SenseCAP。
- 型号：选择您的传感器型号。（如果没有，请使用手动添加）
- 硬件/固件版本：通常选择最新版本。
- 配置文件（区域）/频率计划：从 SenseCAP Mate 应用程序获取

|**传感器频率**|**通用名称**|**描述**|
| - | - | - |
|EU863-870|EU868|欧洲 863-870 MHz（RX2 使用 SF9 - 推荐）|
|US902-928|US915|美国 902-928 MHz，FSB 2（TTN 使用）|
|AU915-928|AU915|澳大利亚 915-928 MHz，FSB 2（TTN 使用）|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|亚洲 920-923 MHZ|
||AS923-2||

不同国家和LoRaWAN网络服务器使用不同的频率计划。

对于Helium网络，请参考：

[Helium频率计划](https://docs.helium.com/lorawan-on-helium/frequency-plans)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

(3) 配置"配置信息"。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- JoinEUI：即**APP EUI**，您可以从SenseCAP Mate应用程序中获取。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)

- Device EUI/ App Key：通过SenseCAP Mate应用程序从配置页面获取。如下图所示。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

(4) 注册终端设备。

完成上述项目后，点击"Register end device"保存您的修改。

:::tip note
如果成功加入网络，LED将**快速闪烁2秒**。
:::

## 在TTN控制台检查数据

在数据页面上，数据包正在上传。有关载荷格式，请参考载荷解码部分。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)
