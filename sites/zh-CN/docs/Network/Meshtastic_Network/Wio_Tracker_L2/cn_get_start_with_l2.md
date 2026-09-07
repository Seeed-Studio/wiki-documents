---
description: 开始使用 Wio Tracker L2 系列。指导设备安装、固件烧录和设备连接。
title: 开始使用 Wio Tracker L2
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /get_started_with_meshtastic_wio_tracker_l2
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l2/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。

1. 尚未完成消息传输过程
2. 正在配置中
:::

## 烧录固件


访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将目标设备选择为 `Seeed Wio Tracker L2` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

打开设备电源，点击 `Enter DFU Mode`，此时会出现名为 `Tracker L2` 的串口，点击并连接它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

然后点击 "Flash"。如果你想覆盖之前的固件，请不要忘记勾选 "Full Erase and Install"。

## 入门指南


### UI 切换


<Tabs>

<TabItem value="1" label="MUI to BaseUI">
进入 Setting 页面 **->** 选择 `Reboot/Shutdown` **->** 长按蓝牙图标 **->** 点击 `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
当你 `long-press` 蓝牙图标时，会弹出 BaseUI 切换弹窗。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

如果你只是点击蓝牙图标，你会进入蓝牙模式。如果出现这种情况，长按屏幕上显示的蓝牙图标，设备会自动重启回到 MUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI to MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### 手机连接

**步骤 1. 进入蓝牙连接模式**

<Tabs>

<TabItem value="3" label="MUI">

进入 `Setting` 页面，点击 `Reboot/Shutdown`，然后点击 `Bluetooth icon`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

:::tip
在使用 MUI 时，请先切换到蓝牙配对模式，再与手机配对。否则你的手机无法识别设备。
:::

设备随后会以蓝牙模式重启。屏幕上会显示蓝牙配对码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

设备始终处于蓝牙配对模式，无需额外操作。

</TabItem>
</Tabs>

**步骤 2. 下载 Meshtastic APP**

[Click here](https://meshtastic.org/downloads/) 下载 Meshtastic APP。

**步骤 3. 与设备配对**

<Tabs>

<TabItem value="5" label="IOS">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入屏幕上显示的配对码，然后点击 `Pair` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- 输入屏幕上显示的配对码，然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更完整的列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期，每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

<Tabs>

<TabItem value="7" label="Configure on MUI">

进入 `Setting` 页面，点击 `LeoR Region`，设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="8" label="Configure on BaseUI">

进入 `LoRa Info` 页面，点击 `Region`，选择区域后点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BaseUILoRa.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configure on Phone">

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)。

### 地图使用

<Tabs>

<TabItem value="10" label="Offline Map">

**步骤 1. 启用 GPS**

你需要启用 GPS 才能获取位置信息。可以在设备上通过 `long pressing the position icon` 直接进行配置。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

你也可以在手机 APP 上进行配置。

**步骤 2. SD 卡准备**

你需要在 SD 卡中进行格式化并安装地图。关于 SD 卡使用的详细教程，请点击此处查看。

**步骤 3. 安装 SD 卡**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**步骤 4. 查看地图**

等待地图加载。成功连接 Wi-Fi 并获取位置信息后，设备会显示离线地图。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Online Map">

**步骤 1. 启用 GPS**

你需要启用 GPS 才能获取位置信息。可以在设备上通过 `long pressing the position icon` 直接进行配置。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

你也可以在手机 APP 上进行配置。

**步骤 2. 设置并启用 Wifi**

设置 Wifi 名称和密码。可以在设备上直接操作。 

:::tip

连接的 Wifi 需要为 2.4G。设备无法使用 5G Wifi。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

当 wifi IP 为空且 wifi 图标为灰色时，表示 Wifi 已禁用；当显示 wifi IP 且 wifi 图标为白色时，表示 Wifi 已启用。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

长按 `Wifi` 图标可切换状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>



**步骤 3. 查看地图**

等待地图加载。成功连接 Wi-Fi 并获取位置信息后，设备会显示在线地图。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


## 高级用法

### 通过网站连接

如果你想在网站上发送文本消息并与其他节点通信，现在可以将设备连接到 [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0)。

  **步骤 1**：切换到 BaseUI

  **步骤 2**：打开网站

[Click here](https://client.meshtastic.org/messages/broadcast/0) 进入网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  **步骤 3**：添加新设备

    点击 "+ New Connection"。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    选择串口方式。打开设备管理器查看设备连接到哪个端口。在弹出窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    你的设备会显示在列表中。点击进行连接。如果连接成功，你可以直接在网页上看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### 配置 GPS

你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则，定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### 传感器连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SensorConnection.png" alt="pir" width={500} height="auto" /></p>

你可以通过 Grove 接口为设备添加传感器。以下传感器已经验证与设备上的 Grove 接口兼容。

<table>
  <tr>
    <th colspan="2">传感器类型</th>
    <th colspan="1">传感器型号</th>
  </tr>
  <tr>
    <td rowspan="4">环境传感器</td>
    <td>气压</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>温度 & 湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度 & 湿度 & 气压</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率 & 血氧饱和度 SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- 启用 Telemetry 以获取传感器数据。如果你想在 OLED 屏幕上显示传感器数据，请启用 `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 启用 Telemetry 以获取传感器数据。如果你想在 OLED 屏幕上显示传感器数据，请启用 `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### 其他功能

<Tabs>

<TabItem value="12" label="MUI">

<Tabs>

<TabItem value="13" label="Menu Bar">
| 交互方式 | 效果 |
|---|---|
| 长按主页图标 | 重新同步 |
| 长按节点列表图标 | 进入节点筛选页面 |
| 长按设置图标 | 关闭屏幕 |

</TabItem>


<TabItem value="15" label="Home Page">

| 交互方式 | 效果 |
|---|---|
| 点击消息图标| 跳转到消息页面 |
| 点击节点图标 | 跳转到节点页面 |
| 点击时钟图标| 实时时间/运行时间切换 |
| 长按 LoRa 图标| LoRa 发射 关闭/开启|
| 长按通知图标| 通知 启用/禁用|
| 点击通知图标| 声音/横幅/声音与横幅 切换|
| 长按 GPS 图标| GPS 开/关|
| 长按 WiFi 图标| WiFi 开/关|
| 长按 MQTT 图标| MQTT 开/关|
| 点击二维码图标| 显示设备二维码 |

</TabItem>

<TabItem value="16" label="Node Page">
| 交互方式 | 效果 |
|---|---|
| 点击某个节点| 显示详细信息|
| 长按某个节点| 进入私聊|
| 查看某个节点位置| 在地图中显示该节点位置|

</TabItem>

<TabItem value="17" label="Channel Page">
长按某个频道以禁用/启用通知。选择并点击某个频道进入聊天窗口。

</TabItem>

<TabItem value="18" label="Message Page">
长按某个聊天以删除它。选择并点击某个聊天进入聊天窗口。

</TabItem>

<TabItem value="19" label="Setting Page">

| 交互方式 | 效果 |
|---|---|
| 用户短名称 | 修改设备短名称|
| 用户长名称 | 修改设备长名称|
| 屏幕密码 | 为设备启动设置密码 |
| 配置密码 | 为配置更改设置密码 |
| 区域 | 配置 LoRa 区域|
| 调制解调器预设| 配置 LoRa 预设 |
| 频道 | 编辑频道|
| 设备角色 | 配置角色 |
| WiFi | 设置 Wifi SSID 和密码 |
| 屏幕超时| 设置屏幕超时时间|
| 屏幕亮度| 设置屏幕亮度|
| 主题| 在深色和浅色背景之间切换主题 |
| 屏幕校准 | 校准屏幕|
| 语言| 切换显示语言|
| 恢复出厂设置 | 配置恢复为默认值 |
| NodeDB 重置 | 清除节点数据 |
| 清除聊天记录 | 清除聊天记录 |
| 重启（绿色图标） | 设备重启 |
| 关机（红色图标） | 设备关机 |

</TabItem>

<TabItem value="20" label="Tool">
| 交互方式 | 效果 |
|---|---|
| Mesh Detector| 显示检测到的活动节点 |
| Signal Scanner| 显示所选节点的 RSSI 和 SNR |
| Trace Route| 显示所选节点的路由路径 |
| Statistic | 显示数据包解码信息 |
| Packet Log | 显示设备日志|

</TabItem>
</Tabs>

</TabItem>

<TabItem value="13" label="BaseUI">

<Tabs>

<TabItem value="21" label="Home">
| 交互方式 | 效果 |
|---|---|
| 选择 "Sleep Screen" | 临时关闭显示；按用户按键唤醒 |
| 选择 "Send Position" | 手动向 Mesh 上的节点广播设备位置（加快发现速度） |

</TabItem>

<TabItem value="23" label="Node">

导航到 "Node Action"

| 交互方式 | 效果 |
|---|---|
| 选择 "Favorite" | 将所选节点标记为收藏|
| 选择 "Trace Route" | 对所选节点执行路由跟踪 |

</TabItem>

<TabItem value="24" label="Position">
| 交互方式 | 效果 |
|---|---|
| 选择 "GPS Toggle" | GPS 开/关|
| 选择 "GPS Format" | 切换 GPS 格式|
| 选择 "Compass Headings" | 在动态、固定和冻结北向之间切换 |
| 选择 "Compass Calibrate" | 启动 30 秒的指南针校准流程 |
</TabItem>

<TabItem value="25" label="LoRa">
| 交互方式 | 效果 |
|---|---|
| 选择 "LoRa Region" | 选择 LoRa 区域 |
| 选择 "Device Role" | 在不同设备角色之间切换 |
| 选择 "Radio Preset" | 从可用预设中进行选择|

</TabItem>

<TabItem value="26" label="System">
| 交互方式 | 效果 |
|---|---|
| 选择 "Notifications" | 启用/禁用蜂鸣声|
| 选择 "Bluetooth Toggle" | 启用/禁用 Bluetooth|
| 选择 "Reboot/Shutdown" | 手动重启或关闭设备|

</TabItem>

</Tabs>

</TabItem>
</Tabs>

## 常见问题

### 设备无法通过 BLE 与手机配对

- 使用 MUI 时，请先切换到 Bluetooth Pairing 模式再与手机配对。否则你的手机无法识别设备。前往 `Setting` 页面，点击 `Reboot/Shutdown`，然后点击 `Bluetooth 图标`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

- 使用 BaseUI 时，在设置并启用 Wifi 之后，你只能通过网络将设备与手机 APP 连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

### 设备无法连接我的 Wifi

- 请确保你连接的是 `2.4g Wifi`。该设备无法与 5G Wifi 配对。通常手机热点可以在手机设置中调整为 2.4g，因此你可以先测试手机热点。

- 在设置 Wifi 名称和 Wifi 密码后，请启用 Wifi。

当 wifi IP 为空且 wifi 图标为灰色时，表示 Wifi 已禁用。当显示 wifi IP 且 wifi 图标为白色时，表示 Wifi 已启用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

### 设备自动关机

**现象描述**

- 设备开机后，过一段时间会自动关机或重启。
- 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息发送过程、正在配置中等……

**排查步骤**

你需要执行 flash 擦除，然后重新烧录最新固件。

### 恢复出厂设置

如果你想恢复到默认设置，可以执行恢复出厂设置。你可以通过两种方式进行恢复出厂设置。

<Tabs>

<TabItem value="7" label="Configure on MUI">

前往 `Setting` 页面，点击 `Configure Reset`，选择 `Factory Reset`，然后点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="pir" width={900} height="auto" /></p>

设备将以默认配置重启。

</TabItem>

<TabItem value="9" label="在手机上配置">

在 App 上点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

</TabItem>

</Tabs>

### 私信失败

#### NodeDB 重置

NodeDB 是本地数据库，用于存储当前 Mesh 网络中已发现节点的信息。如果你遇到无法与某个节点通信的情况，可能是因为你的 nodedB 中存储了该节点的过时信息，你需要对其进行更新。

<Tabs>

<TabItem value="7" label="在 MUI 上配置">

进入 `Setting` 页面，点击 `Configure Reset`，选择 `NodedB Reset`，然后点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="pir" width={900} height="auto" /></p>

设备将会重启。

</TabItem>

<TabItem value="9" label="在手机上配置">

打开 App 并连接到目标设备。进入 **Settings**->**Device**->**Device Config**->**Reset NodeDB**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

</TabItem>
</Tabs>


#### 交换用户信息

每个节点都会周期性地发送自己的节点信息，使 Mesh 中的其他节点能够“看到”和“识别”它。两个节点需要彼此交换各自的节点信息，才能相互通信。如果你无法与列表中的某个节点收发私信，可以在 App 中手动提示它们交换信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 重新生成私钥

两个节点需要彼此知道对方的私钥，才能相互通信。如果某个节点在私信传输中持续失败，请尝试为其重新生成私钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

重启故障设备以使配置生效。

:::note
在重新生成密钥后，其他设备需要重新连接该节点。因此，最好在其他设备的节点列表中删除该节点。
:::

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的区域使用设备。


<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
