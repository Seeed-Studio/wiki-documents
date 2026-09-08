---
description: 基于 Wio-Trcker L2 的 Meshtastic MQTT 网关设置教程。实现全球消息通信，在网状网络信号较弱时提供备份，并通过互联网确保更快速的消息传递。
title: MQTT 网关
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png
slug: /set_up_mqtt_gateway_l2
sku: 100029766
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/set_up_mqtt_gateway_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么需要 Meshtastic + mqtt

将 MQTT 与 Meshtastic 集成，可以通过桥接远距离网络来扩展离网通信能力。这可以实现全球消息通信，在网状网络信号较弱时提供备份，并通过互联网确保更快速的消息传递，非常适合偏远地区和紧急情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png" style={{width:900, height:'auto'}}/></div>

## 硬件准备

搭建 Meshtastic 网关需要一台既能运行 LoRa 又能运行 Wifi 的设备。另外，如果你希望通过 mqtt 共享网关的位置，可以添加一个 GPS 模块。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div>

## 设置

### 步骤 1 刷写固件

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将目标设备选择为 `Seeed Wio Tracker L2` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

打开设备电源，点击 `Enter DFU Mode`，会出现一个名为 `Tracker L2` 的串口，点击并连接它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

然后点击 “Flash”。如果你想覆盖之前的固件，别忘了勾选 “Full Erase and Install”。

### 步骤 2 检查你的设备 ID

<Tabs>
<TabItem value="23" label="查看设备背面">
MAC 地址的 `最后四位数字` 即为设备 ID

例如，下方设备的设备 ID 为 `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="通过串口工具">
访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。<br/>

 点击 `Open Serial Monitor`，将设备连接到电脑，查看串口日志，关键字为 `using nodenum`。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### 步骤 3 APP 连接

<Tabs>

<TabItem value="3" label="MUI">

进入 `Setting` 页面，点击 `Reboot/Shutdown`，然后点击 `Bluetooth icon`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

设备将以蓝牙模式重启。屏幕上会显示蓝牙配对码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

设备始终处于蓝牙配对模式，无需额外操作。

</TabItem>
</Tabs>

[Click here](https://meshtastic.org/downloads/) 下载 Meshtastic APP。

将你的设备与手机 APP 配对。

<Tabs>

<TabItem value="5" label="IOS">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入屏幕上显示的代码，然后点击 `Pair` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- 输入屏幕上显示的代码，然后点击 `OK` 连接设备。

<p style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### 步骤 4 设置 Xiao ESP32S3 Mesh-mqtt 网关

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa 配置**
- 将区域从 UNSET 更改为你的国家/地区（例如，欧洲为 EU868，美国为 US 等）。
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

完成此配置后，你的设备将无法通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID（Wifi 名称）和 Wifi 密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. APP 连接**

现在你的设备无法再通过蓝牙连接，但可以通过网络连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa 配置**
- 将区域从 UNSET 更改为你的国家/地区（例如，欧洲为 EU868，美国为 US 等）。
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

完成此配置后，你的设备将无法通过蓝牙连接到 APP，但可以通过网络连接到 APP。

- 填写 SSID（Wifi 名称）和 Wifi 密码。你要使用的 wifi 应为 2.4G。
- 点击 Send
- 设备会自动重启。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. APP 连接**

现在你的设备无法再通过蓝牙连接，但可以通过网络连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## 消息发送

现在你可以通过互联网与其他人进行通信。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

如果你有另一台与 MQTT 网关处于同一频段的 Meshtastic 设备，它也可以通过 L2 网关与互联网上的其他人进行消息传输。

