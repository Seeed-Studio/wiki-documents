---
description: 基于 XIAO ESP32S3 和 Wio-SX1262 套件的 Meshtastic MQTT 网关设置教程。可实现全球消息通信，在网状网络信号较弱时提供备份，并通过互联网确保更快速的消息传递。
title: 设置 MQTT 网关
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么需要 Meshtastic + mqtt

将 MQTT 与 Meshtastic 集成，可以通过桥接远距离网络来扩展离网通信能力。这可以实现全球消息通信，在网状网络信号较弱时提供备份，并通过互联网确保更快速的消息传递，非常适合偏远地区和紧急情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## 硬件准备

搭建 Meshtastic 网关需要一台既能运行 LoRa 又能运行 Wifi 的设备。此外，如果你希望通过 mqtt 共享网关的位置，可以添加一个 GPS 模块。

<table align="center">
<tbody><tr>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>（可选）L76K GNSS 模块</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## 硬件安装

### 连接电池

XIAO ESP32S3 内置电源管理芯片，可让 XIAO ESP32S3 通过电池独立供电，或通过 XIAO ESP32S3 的 USB 口为电池充电。

如果你想为 XIAO 连接电池，我们建议你购买合格的可充电 `3.7V lithium` 电池，并带有 `protection circuit`。焊接电池时，请注意区分正负极。电源负极应连接在靠近 USB 口的一侧，电源正极应连接在远离 USB 口的一侧。

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 连接 SX-1262

SX-1262 可以通过 B2B 接口连接到 Xiao ESP32-S3。SX-1262 使用 SPI 与 Xiao ESP32-S3 通信。
:::warning
兼容的 SX-1262 只能在套件中购买。
:::

### （可选）连接 L76K GNSS 模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:600, height:'auto'}}/></div>

## 设置

### 步骤 1 刷写固件

**1**：首先，打开浏览器并访问 https://flasher.meshtastic.org/#，需要使用 Chrome 或 Edge 浏览器。

**2**：然后，使用合适的 USB 线将设备连接到电脑。你可能需要先关机，然后在插入 USB 线的同时**按住 BOOT 按钮**。

**3**：按照页面提供的说明执行后续刷写操作。将 Device 选择为 "**Seeed XIAO S3**"，Firmware 选择为**最新**版本，然后点击 "**Flash**"。如果你想覆盖之前的固件，别忘了勾选 "**Full Erase and Install**"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### 步骤 2 查看你的 Device ID

Device ID 通常是 MAC 地址的最后四位数字。你可以打开串口监视器进行查看。

通过 USB 线连接设备。然后[点击这里](https://flasher.meshtastic.org/#)进入 Meshtastic 网页刷写工具。点击 `Open the serial port monitor`。将 Device 选择为 `Seeed XIAO S3` 或 `Tiny USB XXX`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>

在串口日志中查看你的 Device ID。例如，下方日志表明 Device ID 为 24c0。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3 APP 连接

打开 Meshtastic Android 应用，并通过蓝牙连接到你的设备。默认 PIN 码为 123456

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### 步骤 4 设置 Xiao ESP32S3 Mesh-mqtt 网关

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa 配置**
- 将 region 从 UNSET 修改为你的国家/地区（例如，欧洲为 EU868，美国为 US 等）。
- 选择 `OK to MQTT`
- 点击 Send
- 设备会自动重启并重新连接。设备将自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT 配置**

- 你可以使用默认的 `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev) 和 `Password`(large4cats)。 
- 选择 `MQTT Enabled`
- 选择 `MQTT Client Proxy Enabled`
- （可选）如果你希望其他 mqtt 用户在地图上看到你，请选择 `Map Reporting` 和 `I agree`。
- 点击 Send
- 设备会自动重启并重新连接。设备将自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. 通道配置**

- 为你的主通道打开 `Uplink enabled` 和 `Downlink enabled`
- 点击 Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. 网络配置**

完成此配置后，你的设备将无法再通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID（Wifi 名称）和 Wifi 密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. APP 连接**

现在你的设备无法再通过蓝牙连接，但你可以通过网络进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa 配置**
- 将 region 从 UNSET 修改为你的国家/地区（例如，欧洲为 EU868，美国为 US 等）。
- 选择 `OK to MQTT`
- 点击 Send
- 设备会自动重启并重新连接。设备将自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT 配置**

- 你可以使用默认的 `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev) 和 `Password`(large4cats)。 
- 选择 `MQTT Enabled`
- 选择 `MQTT Client Proxy Enabled`
- （可选）如果你希望其他 mqtt 用户在地图上看到你，请选择 `Map Reporting` 和 `I agree`。
- 点击 Send
- 设备会自动重启并重新连接。设备将自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. 通道配置**

- 为你的主通道打开 `Uplink enabled` 和 `Downlink enabled`
- 点击 Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. 网络配置**

完成此配置后，你的设备将无法再通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID（Wifi 名称）和 Wifi 密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. APP 连接**

现在你的设备无法再通过蓝牙连接，但你可以通过网络进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## 消息发送

现在你可以通过互联网与其他人进行通信。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

如果你有另一台与 ESP32S3 MQTT 网关处于同一频段的 Meshtastic 设备，它也可以通过 ESP32S3 与互联网上的其他人进行消息传输。

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

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