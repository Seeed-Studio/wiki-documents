---
description: 使用 XIAO ESP32S3 和 Wio-SX1262 搭建 Meshtastic MQTT 网关的指南，将 LoRa 自组网桥接到互联网，实现全球消息互通。
title: 搭建 MQTT 网关
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/2/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么你需要 Meshtastic + mqtt

将 MQTT 与 Meshtastic 集成，可以通过桥接远距离网络来扩展离网通信能力。这样可以实现全球消息传递，在网状信号较弱时提供备份，并通过互联网确保更快的消息投递。非常适合偏远地区和紧急情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## 硬件准备

搭建 Meshtastic 网关需要一台既能运行 LoRa 又能运行 Wifi 的设备。另外，如果你希望通过 mqtt 共享位置信息，可以额外添加一个 GPS 模块。

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
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买🖱️</font></span></strong>
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

在使用 Meshtastic 之前，需要先连接好设备。这里有两种连接方式。第一种是使用扩展板，相应的信息会显示在屏幕上。然后可以根据显示的信息，在对应的平台上进行配置。第二种是将 XIAO 与 Wio-SX1262 模块连接起来，并使用串口工具获取节点 ID 和密码。

### 连接电池

XIAO ESP32S3 内置电源管理芯片，可以通过电池为 XIAO ESP32S3 独立供电，也可以通过 XIAO ESP32S3 的 USB 口为电池充电。

如果你想为 XIAO 连接电池，我们建议你购买合格的可充电 `3.7V lithium` 电池，并带有 `protection circuit`。焊接电池时，请注意区分正负极。电源负极应连接在靠近 USB 口的一侧，电源正极应连接在远离 USB 口的一侧。

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
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

**1**：首先，打开浏览器并访问 https://flasher.meshtastic.org/# ，需要使用 Chrome 或 Edge 浏览器。

**2**：然后，使用合适的 USB 线将设备连接到电脑。你可能需要先断电，然后在插入 USB 线的同时**按住 BOOT 按钮**。

**3**：按照页面提供的说明执行后续刷写操作。将 Device 选择为 "**Seeed XIAO S3**"，Firmware 选择为**最新**版本，然后点击 "**Flash**"。如果你想覆盖之前的固件，别忘了勾选 "**Full Erase and Install**"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### 步骤 2 检查你的 Device ID



Device ID 通常是 MAC 地址的最后四位数字。你可以打开串口监视器进行查看。

通过 USB 线连接设备。然后[点击这里](https://flasher.meshtastic.org/#)进入 Meshtastic web flasher。点击 `Open the serial port monitor`。将 Device 选择为 `Seeed XIAO S3` 或 `Tiny USB XXX`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>

在串口日志中检查你的 Device ID。例如，下方日志表明 Device ID 为 24c0。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3 APP 连接

打开 Meshtastic Android app，并通过蓝牙连接到你的设备。默认 PIN 码为 123456

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### 步骤 4 设置 Xiao ESP32S3 Mesh-mqtt 网关

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa 配置**
- 将 region 从 UNSET 修改为你所在的国家/地区（例如，欧洲选择 EU868，美国选择 US 等）。
- 选择 `OK to MQTT`
- 点击 Send
- 设备会自动重启并重新连接。设备会自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT 配置**

- 你可以使用默认的 `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev) 和 `Password`(large4cats)。 
- 选择 `MQTT Enabled`
- 选择 `MQTT Client Proxy Enabled`
- （可选）如果你希望其他 mqtt 用户在地图上看到你，请选择 `Map Reporting` 和 `I agree`。
- 点击 Send
- 设备会自动重启并重新连接。设备会自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. Chanel 配置**

- 为你的主 chanel 打开 `Uplink enabled` 和 `Downlink enabled`
- 点击 Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. 网络配置**

完成此配置后，你的设备将无法再通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID 和密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa 配置**
- 将 region 从 UNSET 修改为你所在的国家/地区（例如，欧洲选择 EU868，美国选择 US 等）。
- 选择 `OK to MQTT`
- 点击 Send
- 设备会自动重启并重新连接。设备会自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT 配置**

- 你可以使用默认的 `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev) 和 `Password`(large4cats)。 
- 选择 `MQTT Enabled`
- 选择 `MQTT Client Proxy Enabled`
- （可选）如果你希望其他 mqtt 用户在地图上看到你，请选择 `Map Reporting` 和 `I agree`。
- 点击 Send
- 设备会自动重启并重新连接。设备会自动重启并重新连接，这可能需要 30 秒到 2 分钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. Chanel 配置**

- 为你的主 chanel 打开 `Uplink enabled` 和 `Downlink enabled`
- 点击 Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. 网络配置**

完成此配置后，你的设备将无法再通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID 和密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## 消息发送

现在你可以通过互联网与其他人进行通信了。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Message Testing.png" style={{width:600, height:'auto'}}/></div> 

如果你有另一台与 ESP32S3 MQTT 网关处于同一频段的 Meshtastic 设备，它也可以通过 ESP32S3 与互联网上的其他人进行消息传递。

