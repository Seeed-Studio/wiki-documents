---
description: 基于 Wio-SX1262 和 XIAO esp32s3 模块的 Lorawan 传感器节点
title: LoRaWAN 传感器节点
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /cn/wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sidebar_position: 4
last_update:
  date: 10/23/2024
  author: Evelyn Chen
---

# 将 XIAO ESP32S3 & Wio-SX1262 套件配置为 LoRaWAN 传感器节点

## 简介

本 wiki 提供了将 XIAO ESP32S3 & Wio-SX1262 套件配置为 LoRaWAN 传感器节点的分步指南，包括连接 DHT20 温湿度传感器、添加 M2 LoRaWAN 网关，以及将数据发送到 The Things Network LNS 平台。还涵盖了格式解码器的配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## 前提条件

- XIAO ESP32S3 & Wio-SX1262 套件
- DHT20 温湿度传感器
- XIAO 扩展板
- M2 LoRaWAN 室内网关
- The Things Network 账户访问权限

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 套件</th>
      <th>XIAO 扩展板</th>
      <th>DHT20 温湿度传感器</th>
      <th>M2 LoRaWAN 室内网关</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 硬件设置

1. 将 Wio-SX1262 模块连接到 XIAO ESP32S3。
2. 将 DHT20 传感器（I2C grove 连接器）和 XIAO ESP32S3 & Wio-SX1262 套件连接到 XIAO 扩展板。
3. 将套件连接到您的 PC。
4. 将 M2 网关连接到电源和以太网端口。

## 视频说明

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 在 TTN 上注册和设置

前往 https://www.thethingsnetwork.org/get-started 并注册 - 就像任何其他网站一样。这些说明适用于 TTS Sandbox。

前往 [TTS Sandbox 的说明](https://www.thethingsnetwork.org/get-started) 并注册。
确认您的电子邮件地址后，您可以登录到 [控制台](https://console.cloud.thethings.network/)。如果您有任何疑问，可以在 [the things network 论坛](https://www.thethingsnetwork.org/forum/) 上提问。您使用完全相同的详细信息登录。

### 在 TTN 上注册网关

首先注册您的网关更简单。我以 [SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html) 为例。

对于您的个人 LoRaWAN 网关，您可以在 [这里](https://www.thethingsindustries.com/docs/gateways/) 了解关键概念和故障排除。

### 在 TTN 上创建新应用程序

应用程序就像一个盒子，用来保存一些设备 - 通常做同样的事情 - 在大型部署中，这可能是 1,000 个类似的设备。刚开始时，可能只有几个，所以不需要担心如何划分您的使用。

登录控制台后，您可以进入应用程序来创建您的第一个应用程序。ID 必须全部小写或数字，不能有空格，破折号可以，并且必须在整个 TTN 社区中是唯一的 - 所以 first-app 会被拒绝 - 您可以使用 your-username-first-app，因为这很可能是唯一的。名称和描述供您自己使用，是可选的。

### 在 TTN 上注册终端设备

**步骤 1**. 前往您在上一步中创建的应用程序。

**步骤 2**. 点击创建新的终端设备

在您的应用程序摘要右侧大约一半的位置有一个大蓝色按钮 **+ Register end device**。点击此按钮为您的第一个设备创建设置。

**步骤 3**. 输入终端设备详细信息

您正在使用第三方 LoRaWAN 堆栈制作自己的设备，因此设备存储库中不会有条目，所以选择 '**Enter end device specifics manually**'。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**步骤 4**. 输入设备详细信息

选择适合您所在地区的 **Frequency plan**。考虑到几乎所有国家都有关于您使用什么频率的法律，所以不要有创意。对于欧洲，请使用推荐选项。对于其他地区，使用标记为 'TTN 使用' 的条目。在这种情况下，选择 **868 MHz**。

选择 **LoRaWAN 1.1.0** - 列表中的最后一个 - 最新规范。**RadioLib 使用 RP001 Regional Parameters 1.1 revision A**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

此时您将被要求提供您的 **JoinEUI**。由于这是一个 DIY 设备，我们使用 RadioLib，您可以按照 LoRa Alliance TR007 技术建议文档的建议使用 **全零**。一旦您输入了全零并点击确认，您将被要求提供 **DevEUI**、**AppKey** 和 **NwkKey**。最好让控制台 **生成** 它们，这样它们就能正确格式化。

您的终端设备 ID 可以更改以使设备更易识别。与您的硬件相关的内容有帮助 - 比如 **test-device**。然后您可以点击蓝色的 '**Register device**'。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**步骤 5**. 将设备详细信息复制到 Arduino 上的配置文件

然后您需要将设备详细信息复制到 RadioLib 的 **配置文件** 中。有按钮可以将项目复制到剪贴板，这样您就不必手动输入它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## 配置 XIAO ESP32S3 和 Wio-SX1262 套件作为 LoRaWAN 传感器节点

该代码使用 Arduino 编写，旨在配置 Wio-SX1262 模块与 XIAO ESP32S3 开发板，使其作为 LoRaWAN 传感器节点。它连接 DHT20 传感器来读取温湿度数据，并通过 LoRaWAN 将这些数据发送到 The Things Network。

### 为 XIAO ESP32S3 和 DHT20 传感器安装必要的库

- 为 XIAO ESP32S3 安装 Arduino 环境

参考 https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation。

- 安装 `DHT20` 传感器库
包：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⬇️</font></span></strong>
    </a>
</div>

- 安装 `RadioLib` 库
注意：安装 **版本 6.6.0**，否则代码将无法编译。

### 设置

**步骤 1**. 填写 LoRaWAN 设备认证和网络访问参数

`RADIOLIB_LORAWAN_JOIN_EUI` 和 `RADIOLIB_LORAWAN_DEV_EUI` 用于设备加入 LoRaWAN 网络时的设备识别。就像在一个大型在线社区中一样，这两个参数是设备的"身份证"，让网络知道哪个设备正在请求加入。

`RADIOLIB_LORAWAN_APP_KEY` 和 `RADIOLIB_LORAWAN_NWK_KEY` 用于安全认证和网络访问控制。它们类似于进入网络社区的"密码"，确保只有拥有正确密钥的设备才能与网络安全通信。此外，它们可以根据应用程序（由 APP_KEY 区分）和网络（由 NWK_KEY 区分）的权限来限制设备的操作。

只需将参数从 TTN **复制** 到配置文件中。

1. 这里定义了一个名为 `RADIOLIB_LORAWAN_JOIN_EUI` 的宏。如果这个宏在其他地方没有定义，它将被设置为十六进制的 `全零` 值。
  
```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. 同样，定义了 `RADIOLIB_LORAWAN_DEV_EUI` 宏，表示 `DevEUI`（设备唯一标识符），这里设置了一个特定的十六进制值，用于设备加入 LoRaWAN 网络时的设备识别。

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

1. 定义了 `RADIOLIB_LORAWAN_APP_KEY` 和 `RADIOLIB_LORAWAN_NWK_KEY` 宏，分别代表 AppKey 和 NwkKey，用于安全认证和网络访问控制。

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. 定义了以下宏，代表 `LoRaWAN 上行链路参数`。这些参数用于配置发送到 LoRaWAN 网络的上行链路载荷。

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**步骤 2**. 选择 LoRaWAN 区域参数

LoRaWAN 通信有多个区域选择，包括 `EU868`（欧洲 868 MHz 频段）、`US915`（美国 915 MHz 频段）、`AU915`（澳大利亚 915 MHz 频段）、`AS923`（亚洲 923 MHz 频段）、`IN865`（印度 865 MHz 频段）、`KR920`（韩国 920 MHz 频段）、`CN780`（中国 780 MHz 频段）和 `CN500`。

代码行 const `LoRaWANBand_t Region = EU868;` 将 LoRaWAN 通信的区域设置为 EU868。这意味着设备将被配置为在欧洲 868 MHz 频段内运行。

对于 US915 和 AU915 定义了一个子频段变量。在这种情况下，它被设置为 0。注释表明这个子频段变量专门用于 US915 和 AU915 区域，尽管在这个代码片段中它没有用于 EU868 区域。

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // For US915 and AU915
```

### 读取传感器数据并发送 LoRa 上行载荷

通过 LoRa 通信读取并发送传感器数据。转换为带有小数精度的字节允许在上行载荷中更准确地表示温度和湿度值。

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convert temperature and humidity to bytes with decimal precision
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## 刷写固件

完整的固件包在这里：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⬇️</font></span></strong>
    </a>
</div>

请下载并将其刷写到 XIAO ESP32S3。对于首次使用 XIAO ESP32S3，请参考[这里的刷写教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#software-preparation)。

## 设置载荷格式化器

载荷格式化器用于将从传感器接收到的原始数据转换为人类可读的格式。在这种情况下，载荷格式化器用于将从 DHT20 传感器接收到的原始数据转换为 JSON 格式。

格式化器类型：`Custom Javascript formatter`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## 监控 LoRaWAN 数据

对于特定设备活动，请在中间列表中点击设备。设备的主菜单有设备概览、实时数据等选项。点击**实时数据**或活动框上方的链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## 资源

- [代码包](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
