---
description: 基于 Wio-SX1262 和 XIAO esp32s3 模块的 Meshtastic
title: Meshtastic 入门指南
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /cn/wio_sx1262_xiao_esp32s3_for_meshtastic
sidebar_position: 2
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---

Meshtastic 是一个开源、离网、去中心化的网状网络，专为在经济实惠的低功耗设备上运行而构建。Seeed Studio 为爱好者和工业用户提供了全面的即用型 Meshtastic 设备。XIAO ESP32S3 & Wio-SX1262 套件是为 meshtastic 开发者和创客提供的灵活解决方案。

## 刷写固件

:::note
如果您购买的 XIAO ESP32S3 & Wio-SX1262 套件是在 **2024年10月24日** 之前购买的，请按照此分步教程将固件刷写到您的设备上。
:::

**步骤 1**：首先，打开浏览器并访问 https://flasher.meshtastic.org/# 需要 Chrome 或 Edge 浏览器。

**步骤 2**：然后，使用合适的 USB 线将设备连接到 PC。您可能需要关闭设备，然后在插入 USB 线时**按住 BOOT 按钮**。

**步骤 3**：按照以下提供的说明执行后续的刷写操作。选择设备为"**Seeed XIAO S3**"，固件为**最新**版本，然后点击"**Flash**"。如果您想覆盖之前的固件，不要忘记勾选"**Full Erase and Install**"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## 软件概述

Meshtastic 为用户提供了多个平台软件可供选择，包括 Android 应用、Apple 应用、网页客户端。它还为开发者提供了 Python CLI、Linux Native 和集成方法。

具体信息请参考 [Meshtastic 官方网站](https://meshtastic.org/docs/software/)。

- [Android App](https://meshtastic.org/docs/category/android-app/)：Android 应用程序可在 F-Droid 仓库和 Google Play 商店获取。这允许您通过蓝牙、Wi-Fi（如果在同一网络中）或 USB On-The-Go (OTG) 从您的 Android 手机连接到您的 Meshtastic 设备。
- [Apple App](https://meshtastic.org/docs/category/apple-apps/)：可在应用商店获取。默认情况下，iOS 版 Meshtastic 应用支持使用原生离线 Apple 地图。
- [Web Client](https://meshtastic.org/docs/software/web-client/)：Meshtastic Web 是一个直接在您的浏览器中运行的 Meshtastic 客户端。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/)：python pip 包安装了一个"meshtastic"命令行可执行文件，它将通过网络发送的数据包显示为 JSON，并让您查看来自 meshtastic 设备的串行调试信息。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/)：得益于 Portduino 框架，设备软件也可以在原生 Linux 机器上运行。
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/)：Meshtastic 生态系统具有高度可扩展性，允许与许多现有软件产品和项目轻松集成。

## 设备连接

在使用 Meshtastic 之前，需要先连接设备。有两种连接方法。第一种是使用扩展板，相应的信息会显示在显示屏上。然后，可以根据反映的信息在相应平台上进行配置。第二种是连接 XIAO 和 Wio-SX1262 模块，使用串口工具获取节点 ID 和密码。

### 方法 1：连接到扩展板

刷写固件并下载 Meshtastic 应用程序后，扩展板将是连接和附加应用程序（如轻松添加 grove 传感器和模块）的好工具。

**步骤 1**：确保要连接的设备（如"设备"）已开启并处于可发现状态。在手机上打开 Meshtastic 应用程序。

**步骤 2**：在 Meshtastic 应用程序中，右下角有一个"+"图标。点击它让应用程序开始扫描附近可连接的设备。然后选择 OLED 显示屏上显示的相应设备 ID。

**步骤 3**：正确选择后，输入 OLED 显示屏上显示的代码。按下按钮切换显示。

**按钮功能：**

- 按一次切换屏幕。
- 按两次广播。
- 按三次切换 GPS 模式。

**步骤 4**：设置 Lora 区域，然后设备将重启。

**步骤 5**：完成重启后，可以在 Meshtastic 应用程序和 OLED 显示屏上检查设备状态。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 方法 2：串口工具

选择您喜欢的串口调试工具。我将以 mac 上的 Comtool 为例。选择**串口**连接，选择**相应端口**，将波特率配置为 **115200**，并打开 **RTS 和 DTR**。打开连接，您可以看到连接数据。
搜索"**nodenum**"以找到相应的节点 ID。其默认**密码是 123456**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenum 的最后四位数字是 meshtastic 应用程序发现的设备编号 ID。例如，"nodenum 0x9e20d02c" 在 meshtastic 中是 "Meshtastic_d02c"。
:::

## 与 Wio Tracker T1000-E 通信

**步骤 1**. 按照[说明文档](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#get-started-1)连接 Wio Tracker T1000-E。

**步骤 2**. 确保以下设置与您在 XIAO ESP32S3 上的 Meshatastic 配置相同。

1. 设备激活和设置

- 确保两个设备都已开启并处于正常工作状态。
- 设备的无线通信功能（如蓝牙、LoRa 等）应该启用。检查相关设置以确保没有意外关闭或受到限制。

2. 距离和信号强度

- 两个设备之间的距离不能太远。经过初步测试，带有 2 dbm IPEX 天线的 XIAO ESP32S3 for Meshtastic 的通信距离超过 2.5 公里。一般来说，在更开阔的环境中，可以超过 20 公里。

3. 网络设置

- 确保设备处于相同的网络模式或信道设置。使用 Meshtastic APP 轻松设置相同的'lora region'和'Modem preset'。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**步骤 3**. 与 Wio Tracker T1000-E 通信

连接后，您可以开始通过 Meshtastic 网络发送和接收消息。消息可以是基于文本的，或者根据设备和应用程序的功能可能支持其他功能。您还可以监控网络活动并查看当前连接和活跃的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 传感器连接

在 meshtastic 应用中，Wio-SX1262 与 XIAO esp32s3 套件能够支持广泛的传感器。当与 XIAO 扩展板结合使用时，它可以支持众多 grove 传感器，请查看[这里](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)。此外，当与 GNSS 附加模块结合时，它形成了 meshtastic 中具有 GPS 功能的最小模块。

### 温湿度传感器

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 温湿度传感器</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**步骤 1**：将 XIAO 扩展板的 Grove DHT20 传感器连接

**步骤 2**：在 Meshtastic APP 中启用 `Detection Sensor`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS 传感器

<div class="table-center">
  <table align="center">
    <tr>
      <th>适用于 XIAO 的 L76K GNSS 模块</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 初始配置

:::note
更多详细信息，请参考 [Meshtastic](https://meshtastic.org/docs)。
:::

### 无线电配置

Meshtastic 固件中有几个配置部分，这些部分被分开，以便可以作为小的管理消息通过网格发送。

| 名称 | 描述 |
| ---- | ---- |
| [蓝牙](https://meshtastic.org/docs/configuration/radio/bluetooth/) | 蓝牙配置选项包括：启用、配对模式和固定 PIN。 |
| [频道](https://meshtastic.org/docs/configuration/radio/channels/) | 频道配置选项包括：索引、角色和设置。 |
| [设备](https://meshtastic.org/docs/configuration/radio/device/) | 设备配置选项包括：设备角色、串行输出、调试日志和恢复出厂设置。 |
| [显示](https://meshtastic.org/docs/configuration/radio/display/) | 显示配置选项包括：屏幕开启持续时间、自动轮播间隔、始终指向北方和 GPS 格式。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa 配置选项包括：区域、调制解调器预设、最大跳数、发射功率、带宽、扩频因子、编码率、频率偏移、禁用发射和忽略传入数组。 |
| [网络](https://meshtastic.org/docs/configuration/radio/network/) | 网络配置选项包括：WiFi 启用、WiFi SSID、WiFi PSK、WiFi 模式和 NTP 服务器。 |
| [位置](https://meshtastic.org/docs/configuration/radio/position/) | 位置配置选项包括：GPS 启用、GPS 更新间隔、GPS 尝试时间、固定位置、智能广播、广播间隔和位置数据包标志。 |
| [电源](https://meshtastic.org/docs/configuration/radio/power/) | 电源配置选项包括：充电电流、省电模式、断电后关机、ADC 乘数覆盖等待蓝牙间隔、轻度睡眠间隔和最小唤醒间隔。 |
| [用户](https://meshtastic.org/docs/configuration/radio/user/) | 用户配置选项包括：长名称、短名称和是否已授权。 |

### 模块配置

模块包含在固件中，允许用户扩展其网格或设备的功能。

| 名称 | 描述 |
| ---- | ---- |
| [环境照明](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | 调整 NCP5623 I2C RGB LED 的亮度。 |
| [音频](https://meshtastic.org/docs/configuration/module/audio/) | 在特定设备上启用对 Codec2 语音通信的支持。 |
| [预设消息](https://meshtastic.org/docs/configuration/module/canned-message/) | 设置多个预定义消息，通过使用旋转编码器等输入设备直接从设备发送。 |
| [检测传感器](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 配置一个 GPIO 引脚来监控指定的高/低状态并发送文本警报。 |
| [外部通知](https://meshtastic.org/docs/configuration/module/external-notification/) | 传入的消息能够使用您连接到设备的电路（LED、蜂鸣器等）来提醒您。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | 将数据包转发到 MQTT 服务器。这允许本地网格上的用户通过互联网与另一个网格上的用户通信。 |
| [邻居信息](https://meshtastic.org/docs/configuration/module/neighbor-info/)| 向网格发送 0 跳邻居的信息。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | 计算经过节点的 BLE 和 Wifi 设备数量。 |
| [距离测试](https://meshtastic.org/docs/configuration/module/range-test/) | 定期发送带有 GPS 位置的消息来测试设备可以通信的距离。需要（至少）一个设备设置为发送器，一个设置为接收器。接收器将把所有传入的消息记录到 CSV 文件中。 |
| [远程硬件](https://meshtastic.org/docs/configuration/module/remote-hardware/) | 通过网格远程设置和读取 GPIO 状态。 |
| [串口模块](https://meshtastic.org/docs/configuration/module/serial/) | 通过串口发送字符串来跨网格发送消息。 |
| [存储转发](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 在设备上存储消息，以便在断开连接的客户端重新加入网格后进行传递。 |
| [遥测](https://meshtastic.org/docs/configuration/module/telemetry/) | 将传感器连接到设备并定期向网格传输读数。 |
| [路由跟踪](https://meshtastic.org/docs/configuration/module/traceroute/) | 跟踪用于将消息跳转到特定目的地的节点。 |

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
