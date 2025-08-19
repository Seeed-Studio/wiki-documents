---
description: 基于 XIAO ESP32S3 和 Wio-SX1262 Kit 的 Meshtastic
title: XIAO ESP32-S3&Wio SX1262 Kit
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /cn/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---

Meshtastic 是一个开源、离网、去中心化的网状网络，旨在运行于价格低廉、低功耗的设备上。Seeed Studio 为爱好者和工业用户提供了一系列即用型的 Meshtastic 设备。XIAO ESP32S3 和 Wio-SX1262 Kit 是一个灵活的解决方案，适用于 Meshtastic 开发者和创客。

## 刷写固件

:::note
如果您在 **2024 年 10 月 24 日**之前购买了 XIAO ESP32S3 和 Wio-SX1262 Kit，请按照以下分步教程将固件刷写到您的设备上。
:::

**步骤 1**：首先，打开浏览器并访问 https://flasher.meshtastic.org/#，需要使用 Chrome 或 Edge 浏览器。

**步骤 2**：然后，使用合适的 USB 数据线将设备连接到电脑。您可能需要关闭设备，然后**按住 BOOT 按钮**的同时插入 USB 数据线。

**步骤 3**：按照提供的说明执行后续的刷写操作。选择设备为 "**Seeed XIAO S3**"，固件选择**最新版本**，然后点击 "**Flash**"。如果您想覆盖之前的固件，不要忘记勾选 "**Full Erase and Install**"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## 软件概览

Meshtastic 为用户提供了多种平台软件可供选择，包括 Android 应用、Apple 应用和 Web 客户端。它还为开发者提供了 Python CLI、Linux Native 和集成方法。

有关具体信息，请参考 [Meshtastic 官方网站](https://meshtastic.org/docs/software/)。

* [Android 应用](https://meshtastic.org/docs/category/android-app/): Android 应用可在 F-Droid 仓库和 Google Play 商店中获取。这允许您通过蓝牙、Wi-Fi（如果在同一网络中）或 USB On-The-Go (OTG) 从 Android 手机连接到您的 Meshtastic 设备。
* [Apple 应用](https://meshtastic.org/docs/category/apple-apps/): 可在 App Store 中获取。默认情况下，iOS 版 Meshtastic 应用支持使用原生离线 Apple 地图。
* [Web 客户端](https://meshtastic.org/docs/software/web-client/): Meshtastic Web 是一个直接在浏览器中运行的 Meshtastic 客户端。
* [Python CLI](https://meshtastic.org/docs/software/python/cli/): Python pip 包会安装一个 "meshtastic" 命令行可执行文件，该文件以 JSON 格式显示网络上传输的数据包，并让您查看 Meshtastic 设备的串行调试信息。
* [Linux Native](https://meshtastic.org/docs/software/linux-native/): 设备软件还可以通过 Portduino 框架在原生 Linux 机器上运行。
* [Meshtastic 集成](https://meshtastic.org/docs/software/integrations/): Meshtastic 生态系统高度可扩展，允许轻松集成到许多现有的软件产品和项目中。

## 设备连接

在使用 Meshtastic 之前，需要先连接设备。有两种连接方法。第一种是使用扩展板，相关信息会显示在显示屏上。然后，可以根据显示的信息在相应的平台上进行配置。第二种是连接 XIAO 和 Wio-SX1262 模块，并使用串口工具获取节点 ID 和密码。

### 方法 1：连接到扩展板

在刷入固件并下载 Meshtastic 应用后，扩展板是一个很好的连接工具，同时还可以轻松添加 Grove 传感器和模块等附加应用。

**步骤 1**：确保要连接的设备（例如“设备”）已开启并处于可被发现的状态。在手机上打开 Meshtastic 应用。

**步骤 2**：在 Meshtastic 应用中，点击右下角的“+”图标，让应用开始扫描附近可连接的设备。然后选择 OLED 显示屏上显示的对应设备 ID。

**步骤 3**：正确选择后，输入 OLED 显示屏上显示的代码。按下按钮切换显示内容。

**按钮功能：**

* 按一次切换屏幕。
* 按两次进行广播。
* 按三次切换 GPS 模式。

**步骤 4**：设置 LoRa 区域，然后设备将重新启动。

**步骤 5**：完成重启后，可以在 Meshtastic 应用和 OLED 显示屏上检查设备状态。

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="将 Wio-SX1262 与 XIAO ESP32S3 套件配置为 Meshtastic 设备" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 方法 2：串口工具

选择一个你喜欢的串口调试工具。以下以 mac 上的 Comtool 为例。选择 **串口** 连接，选择 **对应的端口**，将波特率配置为 **115200**，并开启 **RTS 和 DTR**。打开连接后，你可以看到连接数据。

搜索 "**nodenum**" 来找到对应的节点 ID。其默认 **密码为 123456**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
`nodenum` 的最后四位数字是 Meshtastic 应用发现的设备编号 ID。例如，"nodenum 0x9e20d02c" 在 Meshtastic 中显示为 "Meshtastic_d02c"。
:::

## 与 Wio Tracker T1000-E 通信

**步骤 1**. 按照 [wiki](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#get-started-1) 连接 Wio Tracker T1000-E。

**步骤 2**. 确保以下设置与你在 XIAO ESP32S3 上的 Meshtastic 配置相同。

1. 设备激活和设置
- 确保两个设备都已开启并处于正常工作状态。
- 设备的无线通信功能（如蓝牙、LoRa 等）应已启用。检查相关设置，确保未意外关闭或受到限制。

2. 距离和信号强度
- 两个设备之间的距离不能太远。经过初步测试，使用 2 dbm IPEX 天线的 XIAO ESP32S3 的 Meshtastic 通信距离超过 2.5 公里。一般来说，在更开阔的环境中，通信距离可超过 20 公里。

3. 网络设置
- 确保设备处于相同的网络模式或频道设置。可以通过 Meshtastic 应用轻松设置相同的“LoRa 区域”和“调制解调器预设”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**步骤 3**. 与 Wio Tracker T1000-E 通信

连接后，你可以通过 Meshtastic 网络开始发送和接收消息。消息可以是基于文本的，也可以根据设备和应用的功能支持其他特性。你还可以监控网络活动，查看当前连接和活动的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="将 Wio-SX1262 与 XIAO ESP32S3 套件配置为 Meshtastic 设备" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 传感器连接

在 Meshtastic 应用中，Wio-SX1262 与 XIAO ESP32S3 套件能够支持多种传感器。当与 XIAO 扩展板结合使用时，它可以支持许多 Grove 传感器，请查看[这里](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)。此外，当与 GNSS 附加模块结合使用时，它成为 Meshtastic 中最小的具有 GPS 功能的模块。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**步骤 1**：将 Grove DHT20 传感器连接到 XIAO 扩展板

**步骤 2**：在 Meshtastic 应用中启用 `Detection Sensor`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS 传感器

<div class="table-center">
  <table align="center">
    <tr>
      <th>用于 XIAO 的 L76K GNSS 模块</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 初始配置

:::note
更多详情，请参考 [Meshtastic](https://meshtastic.org/docs)。
:::

### 无线电配置

Meshtastic 固件中有多个配置部分，这些部分被分解为小型管理消息，可以通过网状网络发送。

| 名称 | 描述 |
| ---- | ---- |
| [蓝牙](https://meshtastic.org/docs/configuration/radio/bluetooth/) | 蓝牙配置选项包括：启用、配对模式和固定 PIN。 |
| [频道](https://meshtastic.org/docs/configuration/radio/channels/) | 频道配置选项包括：索引、角色和设置。 |
| [设备](https://meshtastic.org/docs/configuration/radio/device/) | 设备配置选项包括：设备角色、串行输出、调试日志和恢复出厂设置。 |
| [显示](https://meshtastic.org/docs/configuration/radio/display/) | 显示配置选项包括：屏幕开启时长、自动轮播间隔、始终指向北方和 GPS 格式。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa 配置选项包括：区域、调制解调器预设、最大跳数、发射功率、带宽、扩频因子、编码率、频率偏移、禁用发射和忽略传入数组。 |
| [网络](https://meshtastic.org/docs/configuration/radio/network/) | 网络配置选项包括：WiFi 启用、WiFi SSID、WiFi PSK、WiFi 模式和 NTP 服务器。 |
| [位置](https://meshtastic.org/docs/configuration/radio/position/) | 位置配置选项包括：GPS 启用、GPS 更新间隔、GPS 尝试时间、固定位置、智能广播、广播间隔和位置数据包标志。 |
| [电源](https://meshtastic.org/docs/configuration/radio/power/) | 电源配置选项包括：充电电流、省电模式、断电后关闭、ADC 倍增器覆盖等待蓝牙间隔、轻度睡眠间隔和最小唤醒间隔。 |
| [用户](https://meshtastic.org/docs/configuration/radio/user/) | 用户配置选项包括：长名称、短名称和是否已授权。 |

### 模块配置

模块包含在固件中，允许用户扩展其网状网络或设备的功能。

| 名称 | 描述 |
| ---- | ---- |
| [环境光](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | 调整 NCP5623 I2C RGB LED 的亮度。 |
| [音频](https://meshtastic.org/docs/configuration/module/audio/) | 在某些设备上启用 Codec2 语音通信支持。 |
| [预设消息](https://meshtastic.org/docs/configuration/module/canned-message/) | 设置若干预定义消息，通过输入设备（如旋钮编码器）直接从设备发送。 |
| [检测传感器](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 配置一个 GPIO 引脚以监控指定的高/低状态并发送文本警报。 |
| [外部通知](https://meshtastic.org/docs/configuration/module/external-notification/) | 通过连接到设备的电路（如 LED、蜂鸣器等）提醒收到的消息。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | 将数据包转发到 MQTT 服务器。这允许本地网状网络上的用户通过互联网与另一个网状网络上的用户通信。 |
| [邻居信息](https://meshtastic.org/docs/configuration/module/neighbor-info/) | 向网状网络发送 0 跳邻居的信息。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | 统计经过节点的 BLE 和 WiFi 设备数量。 |
| [范围测试](https://meshtastic.org/docs/configuration/module/range-test/) | 以一定间隔发送带有 GPS 位置的消息，以测试设备的通信距离。需要至少一个设备设置为发送器，一个设备设置为接收器。接收器将所有收到的消息记录到 CSV 文件中。 |
| [远程硬件](https://meshtastic.org/docs/configuration/module/remote-hardware/) | 通过网状网络远程设置和读取 GPIO 状态。 |
| [串行模块](https://meshtastic.org/docs/configuration/module/serial/) | 通过串行端口发送字符串，在网状网络中传递消息。 |
| [存储与转发](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 在设备上存储消息，以便在断开连接的客户端重新加入网状网络后进行传递。 |
| [遥测](https://meshtastic.org/docs/configuration/module/telemetry/) | 将传感器连接到设备，并定期将读数传输到网状网络。 |
| [路由追踪](https://meshtastic.org/docs/configuration/module/traceroute/) | 跟踪消息传递到特定目的地时使用的节点跳数。 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>