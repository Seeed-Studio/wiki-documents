---
description: 基于 XIAO ESP32S3 和 Wio-SX1262 套件的 Meshtastic
title: XIAO ESP32-S3 与 Wio-SX1262 套件快速上手
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) 是一个开源、离网、去中心化的 Mesh 网络，构建于经济实惠、低功耗的设备之上。Seeed Studio 为爱好者和工业用户提供了种类齐全、开箱即用的 Meshtastic 设备。XIAO ESP32S3 与 Wio-SX1262 套件是面向 Meshtastic 开发者和创客的灵活解决方案。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>
## 烧录固件

:::note
如果你是在 **2024 年 10 月 24 日** 之前购买的 XIAO ESP32S3 与 Wio-SX1262 套件，请按照本分步教程将固件烧录到你的设备上。请 `don't use NRF-OTA` 来更新固件，否则可能导致设备完全损坏。
:::

**步骤 1**：首先，打开浏览器并访问 https://flasher.meshtastic.org/#，需要使用 Chrome 或 Edge 浏览器。

**步骤 2**：然后，使用合适的 USB 线将设备连接到电脑。你可能需要先关机，然后在插入 USB 线的同时**按住 BOOT 按钮不放**。

**步骤 3**：按照页面上提供的说明执行后续烧录操作。将 Device 选择为 "**Seeed XIAO S3**"，Firmware 选择为**最新**版本，然后点击 "**Flash**"。如果你想覆盖之前的固件，别忘了勾选 "**Full Erase and Install**"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## 软件概览

Meshtastic 为用户提供了多平台软件可供选择，包括 Android 应用、Apple 应用和 Web 客户端。它还为开发者提供了 Python CLI、Linux Native 以及多种集成方式。

具体信息请参考 [Meshtastic 官方网站](https://meshtastic.org/docs/software/)。

- [Android App](https://meshtastic.org/docs/category/android-app/)：Android 应用可在 F-Droid 仓库和 Google Play 商店获取。它允许你通过蓝牙、Wi-Fi（在同一网络时）或 USB On-The-Go（OTG）从 Android 手机连接到 Meshtastic 设备。
- [Apple App](https://meshtastic.org/docs/category/apple-apps/)：可在 App Store 获取。默认情况下，iOS 版 Meshtastic 应用支持使用原生离线 Apple 地图。
- [Web Client](https://meshtastic.org/docs/software/web-client/)：Meshtastic Web 是一个直接在浏览器中运行的 Meshtastic 客户端。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/)：Python pip 包会安装一个名为 "meshtastic" 的命令行可执行文件，它以 JSON 形式显示在网络上传输的数据包，并让你查看来自 Meshtastic 设备的串口调试信息。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/)：得益于 Portduino 框架，设备软件也可以在原生 Linux 机器上运行。
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/)：Meshtastic 生态系统具有很高的可扩展性，能够轻松与众多现有软件产品和项目进行集成。

## 设备连接

在使用 Meshtastic 之前，需要先完成设备连接。连接方式有两种。第一种是使用扩展板，对应的信息会显示在屏幕上，然后可以根据显示的信息在对应平台上进行配置。第二种是将 XIAO 与 Wio-SX1262 模块连接，并使用串口工具获取节点 ID 和密码。

### 连接电池

XIAO ESP32S3 内置电源管理芯片，可通过电池为 XIAO ESP32S3 独立供电，也可以通过 XIAO ESP32S3 的 USB 口为电池充电。

如果你想为 XIAO 连接电池，我们建议你购买合格的可充电 `3.7V lithium` 电池，并带有 `protection circuit`。焊接电池时，请注意区分正负极。电源负极应连接在靠近 USB 口的一侧，电源正极则连接在远离 USB 口的一侧。



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### 连接扩展板

在烧录固件并下载 Meshtastic 应用后，扩展板将成为一个非常好的连接工具，并可用于额外的应用，例如轻松添加 Grove 传感器和模块。

**步骤 1**：确保要连接的设备（例如“device”）已开启并处于可被发现的状态。同时在手机上打开 Meshtastic 应用。

**步骤 2**：在 Meshtastic 应用中，右下角有一个 "+" 图标。点击它让应用开始扫描附近可连接的设备，然后选择 OLED 屏幕上显示的对应设备 ID。

**步骤 3**：正确选择后，输入 OLED 屏幕上显示的验证码。按下按钮可以切换显示内容。

**按键功能：**

- 单击一次切换屏幕。
- 连按两次进行广播。
- 连按三次切换 GPS 模式。

**步骤 4**：设置 Lora 区域，然后设备会重启。

**步骤 5**：重启完成后，可以在 Meshtastic 应用和 OLED 屏幕上查看设备状态。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 串口工具

选择一个你喜欢的串口调试工具。下面以 Mac 上的 Comtool 为例。选择 **serial** 连接，选择**对应的端口**，将波特率配置为 **115200**，并打开 **RTS 和 DTR**。打开连接后即可看到连接数据。
搜索 "**nodenum**" 来找到对应的节点 ID。其默认**密码为 123456**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenum 的最后四位数字就是 Meshtastic 应用中发现的设备编号 ID。例如，"nodenum 0x9e20d02c" 在 Meshtastic 中对应 "Meshtastic_d02c"。
:::


### 连接 SX-1262

SX-1262 可以通过 B2B 接口连接到 Xiao ESP32-S3。SX-1262 使用 SPI 与 Xiao ESP32-S3 通信。

下图展示了 XIAO ESP32S3 与 Wio-SX1262 之间的 B2B 引脚映射关系。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
兼容的 SX-1262 只能在该套件中购买。
:::
## 与 Wio Tracker T1000-E 通信

**步骤 1**：按照该[文档](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#入门指南-1)连接 Wio Tracker T1000-E。

**步骤 2**：确保以下设置与你在 XIAO ESP32S3 Meshtastic 配置中的设置保持一致。

1. 设备激活与设置

- 确保两台设备都已开启并处于正常工作状态。
- 设备的无线通信功能（如 Bluetooth、LoRa 等）应处于启用状态。检查相关设置，确保没有被意外关闭或限制。

2. 距离与信号强度

- 两台设备之间的距离不能太远。经过初步测试，XIAO ESP32S3 for Meshtastic 搭配 2 dBm IPEX 天线的通信距离超过 2.5 km。一般来说，在更开阔的环境中可以超过 20 km。

3. 网络设置

- 确保设备处于相同的网络模式或信道设置。可以通过 Meshtastic APP 轻松将其设置为相同的“lora region”和“Modem preset”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**步骤 3**：与 Wio Tracker T1000-E 通信

连接完成后，你就可以通过 Meshtastic 网络开始收发消息。消息可以是文本消息，也可能根据设备和应用的功能支持其他特性。你还可以监控网络活动，查看当前有哪些设备已连接并处于活动状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 传感器连接

在 Meshtastic 应用中，搭配 XIAO esp32s3 套件的 Wio-SX1262 能够支持多种传感器。当与 XIAO 扩展板配合使用时，它可以支持众多 Grove 传感器，请查看[此处](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)。此外，当与 GNSS 扩展模块组合使用时，它构成了 Meshtastic 中具备 GPS 功能的最小模块。

### 温湿度传感器

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 温度与湿度传感器</th>
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

**步骤 1**：连接 XIAO 扩展板上的 Grove DHT20 传感器

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

Meshtastic 固件中有多个配置部分，这些部分被拆分开来，以便可以作为小型管理员消息通过 mesh 发送。

| 名称 | 描述 |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth 配置选项包括：Enabled、Pairing Mode 和 Fixed PIN。 |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Channels 配置选项包括：Index、Role 和 Settings。 |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Device 配置选项包括：Device Role、Serial Output、Debug Log 和 Factory Reset。 |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Display 配置选项包括：Screen On Duration、Auto Carousel Interval、Always Point North 和 GPS Format。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa 配置选项包括：Region、Modem Preset、Max Hops、Transmit Power、Bandwidth、Spread Factor、Coding Rate、Frequency Offset、Transmit Disabled 和 Ignore Incoming Array。 |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Network 配置选项包括：WiFi Enabled、WiFi SSID、WiFi PSK、WiFi Mode 和 NTP Server。 |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Position 配置选项包括：GPS Enabled、GPS Update Interval、GPS Attempt Time、Fixed Position、Smart Broadcast、Broadcast Interval 和 Position Packet Flags。 |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Power 配置选项包括：Charge Current、Power Saving、Shutdown after losing power、ADC Multiplier Override Wait Bluetooth Interval、Light Sleep Interval 和 Minimum Wake Interval。 |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | User 配置选项包括：Long Name、Short Name 和 Is Licensed。 |

### 模块配置

模块包含在固件中，允许用户扩展其 mesh 或设备的功能。

| 名称 | 描述 |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | 调整 NCP5623 I2C RGB LED 的亮度。 |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | 在特定设备上启用对 Codec2 语音通信的支持。 |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | 设置若干预定义消息，通过使用旋转编码器等输入设备可直接从设备发送。 |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 配置一个 GPIO 引脚以监控指定的高/低状态并发送文本警报。 |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | 传入消息可以使用你连接到设备的电路（LED、蜂鸣器等）来提醒你。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | 将数据包转发到 MQTT 服务器。这允许本地 mesh 上的用户通过互联网与另一个 mesh 上的用户通信。 |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| 将 0 跳邻居的信息发送到 mesh。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | 统计经过某个节点的 BLE 和 WiFi 设备数量。 |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | 以一定间隔发送带有 GPS 位置的消息，以测试你的设备可以通信的距离。需要（至少）一个设备设置为发送端，一个设置为接收端。接收端将把所有接收到的消息记录到 CSV 中。 |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | 通过 mesh 远程设置和读取 GPIO 状态。 |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | 通过串口发送字符串，在 mesh 上发送消息。 |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 在设备上存储消息，以便在断开连接的客户端重新加入 mesh 后进行投递。 |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | 将传感器连接到设备，并以固定间隔向 mesh 发送测量数据。 |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | 跟踪用于将消息跳转到特定目标的节点。 |
## 资源
- **[PDF]**[兼容 Xiao ESP32-S3 的 SX1262 原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D 文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 套件 Kicad 库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 尺寸图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [外壳 3D 文件](https://www.thingiverse.com/thing:6888371)
## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board 掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
