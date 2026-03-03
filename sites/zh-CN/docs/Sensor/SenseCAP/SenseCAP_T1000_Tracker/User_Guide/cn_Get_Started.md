---
description: Get_Started_with_SenseCAP_T1000_tracker
title: 快速入门
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 2/14/2026
  author: Janet
---


本章节将指导你通过 SenseCAP Mate APP 来设置 SenseCAP T1000 Tracker。

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 用户指南 </font></span></strong>
    </a>
</div>
<br />

:::caution note
请确保你所在区域有 LoRaWAN 网络覆盖，例如 Helium、TTN 或其他 LoRaWAN 网络。没有 LoRaWAN 网络，设备将无法向云端发送数据。使用追踪器最简单的方式是搭配 `SenseCAP LoRaWAN Gateway` 和 `SenseCraft app`。
:::

## 设备功能

### 工作模式

为了适应不同的使用场景，SenseCAP T1000 tracker 提供了多种不同的工作模式，你可以根据需要进行选择。

|**工作模式**|**描述**|**场景**|
| - | - | - |
|Standby Mode|<p>仅上传心跳包，只包含电池信息。</p><p>可以通过 LoRa 下行指令获取位置信息。</p>|如果你需要长时间对设备进行定位，并且设备在充电前可以长时间运行，云平台可以下发定位请求指令来定位设备。|
|Periodic Mode|设置一个时间间隔，设备会按照该间隔周期性上传位置信息和传感器数据。|此模式推荐用于大多数场景。|
|Event Mode|根据追踪器的温度、光照和加速度传感器来调整上传间隔，包括温度事件、光照事件、运动事件、静止超时和震动事件。|可用于复杂场景，例如重要物品运输监控。但功耗会大幅增加。|

### 传感器功能

SenseCAP T1000 Tracker 配备了 3 个传感器：温度传感器、光照传感器和三轴加速度计。
你可以选择启用或禁用这些传感器：

- 关闭所有传感器，你也可以选择无传感器版本以降低成本。
- 仅启用温度和光照传感器，以低功耗方式周期性监测数据。
- 当将温度、光照和加速度计作为触发条件时，传感器将始终保持供电，设备功耗会大幅增加。

|**传感器**|**描述**|
| - | - |
|Temperature|<p>这是一个板载独立温度传感器，**精度为 ±0.5~1℃**。需要注意的是，由于它与外壳有一定隔离，这里可能会存在一定的温度测量延迟。</p><p>量程：-20 至 60℃；精度：±1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃</p>|
|Light|<p>光照传感器监测的并非实际流明值，而是从黑暗到明亮的光照百分比。主要可用于防拆监控以及一些对光敏感的监控场景。</p><p>量程：0 至 100%（0% 为黑暗，100% 为最亮）</p>|
|3-Axis Accelerometer|通过设置加速度阈值来触发运动事件和震动事件。|

### 数据缓存

设备支持数据缓存，可以通过蓝牙配置中打开 "GNSS Data Cache" 来启用。设备会上传确认报文。当 LoRaWAN 信号覆盖较弱或无网络覆盖时，设备在上传数据时无法收到 ack。在这种情况下，数据会被保存并进入下一个周期。当设备在某个时刻成功上传数据时，会一并发送离线数据。最多可缓存 1000 条记录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 按键功能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>Actions</b></th><th colspan="1"><b>Description</b></th><th colspan="1"><b>LED Status</b></th><th colspan="1"><b>Buzzer</b></th></tr>
<tr><td colspan="1" rowspan="2">长按按键 3 秒</td><td colspan="1">如果追踪器处于关机状态，长按按键 3 秒可开机。蓝牙配对会自动激活，用户可以使用 app 扫描并连接。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">上升音调提示音</td></tr>
<tr><td colspan="1">如果设备已开机，长按按键 3 秒可激活蓝牙配对。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">无</td></tr>
<tr><td colspan="1">长按按键 9 秒</td><td colspan="1">关机。</td><td colspan="1">无</td><td colspan="1">下降音调提示音</td></tr>
<tr><td colspan="1">加入 LoRa 网络</td><td colspan="1">退出蓝牙设置后，尝试加入 LoRaWAN 网络。</td><td colspan="1">尝试入网时为呼吸灯闪烁，成功入网后快速闪烁。</td><td colspan="1">成功入网时会有一段快速而欢快的提示音</td></tr>
<tr><td colspan="1" rowspan="2">单击一次</td><td colspan="1">获取位置/传感器数据并上传，同时立即触发 "Press once" 事件。</td><td colspan="1">LED 常亮 2 秒</td><td colspan="1">数据上传成功时会有一声提示音。</td></tr>
<tr><td colspan="1">如果已开启蓝牙配对，单击一次可关闭蓝牙。</td><td colspan="1">LED 熄灭</td><td colspan="1">无</td></tr>
<tr><td colspan="1" rowspan="3">连续按两次</td><td colspan="1">如果 SOS 设置为单次模式，双击按键将激活单次 SOS 模式，并上传一次位置/传感器数据和 SOS 事件。</td><td colspan="1">随声音闪烁</td><td colspan="1">3 秒报警声</td></tr>
<tr><td colspan="1">如果 SOS 设置为连续模式，双击按键将激活连续 SOS 模式。位置、传感器数据和 SOS 事件将每分钟上传一次，连续 30 次后自动结束。</td><td colspan="1">随声音闪烁</td><td colspan="1">持续报警声</td></tr>
<tr><td colspan="1">再次双击两次退出 SOS 模式</td><td colspan="1">无</td><td colspan="1">无</td></tr>
<tr><td colspan="1">进入 DFU 模式</td><td colspan="1">在固件升级失败后，设备可能会进入 DFU 模式。你可以在 SenseCraft app 中看到设备名称 `SENSECAP_GR_DFU_XXXX`。 <br />
在 DFU 模式下，如果 3 分钟内无操作，设备会自动退出。
如果你希望立即退出，可以长按按键 3 秒，设备将重启并恢复正常工作。</td><td colspan="1">LED 灯持续闪烁</td><td colspan="1">无</td></tr>
</table>

:::info Note

- 建议在设备不使用时将其关机。
- 首次开机时，建议在室外进行测试，因为 GPS 需要通过卫星更新时间。
- 请确保频段与你的网关频段一致。
:::

## 开始使用

### 连接 SenseCAP Mate App

- **步骤 1**：下载 SenseCAP Mate App

SenseCAP Mate App 用于配置 LoRa 参数、上报间隔、将设备绑定到你的账号以及查看设备的基本信息。

- 对于 iOS，请在 App Store 中搜索 “SenseCAP Mate” 并下载。
- 对于 Android，请在 Google Store 中搜索 “SenseCAP Mate” 并下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：添加设备

登录 SenseCAP Mate APP。
点击右上角的 'Add Device' 选项卡，然后扫描设备标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

长按按键 3 秒，然后按 SN 选择设备。

有 2 种配置模式：

- **快速配置**：为了快速开始，您可以选择快速配置基本参数
- **高级配置**：要设置更多参数，请查看以下步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### 快速配置

对于快速配置，您只需要设置以下参数：

- **Frequency**: 需要与网关保持一致。
- **Uplink interval**: Periodic Mode（默认模式）的上行间隔，你可以在 “User” 页面中的 “Device Bluetooth Configuration” 设置其他模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

Tracker 将尝试加入 LoRaWAN 网络，尝试入网时为呼吸灯闪烁，成功入网后快速闪烁，并伴随一段快速而欢快的提示音。

### 高级配置

- 长按按键 3 秒开机，然后会自动开启蓝牙配对，用户可以使用 app 扫描并连接。
- 打开 App 并点击 “Tracker T1000”。选择 “Setup” 来配置追踪器。
- 按 S/N 选择设备（S/N 位于设备标签上）。进入后会显示传感器的基本信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

点击 “Measure”，即可获取传感器数值：

|Temperature|量程：-20 至 60℃；精度：±1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃|
| - | - |
|Light|0 至 100%（0% 为黑暗，100% 为最亮）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa 参数设置

追踪器在生产时即支持 863MHz~928MHz 的通用频率计划，一个 SKU 即可覆盖。每一台设备都可以支持 7 种频率计划。

<table align="center">
  <caption> <h2>平台</h2> </caption>
  <tbody>
    <tr>
    <td><h4>平台</h4></td>
    <td><h4>描述</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>默认平台。
必须与 SenseCAP Gateway 搭配使用。SenseCAP 构建了一个专有的 TTN 服务器，使传感器在与 SenseCAP gateway 配对后即可开箱即用。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA 室外网关</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA 室内网关</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>在有 Helium 网络覆盖的情况下，可以通过 Helium 上传数据。设备运行在 SenseCAP 的私有 Helium console 上。用户无需在 Helium console 上创建设备，即可通过 SenseCAP Mate App 和 Portal 开箱即用。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium 覆盖范围</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>将设备连接到你的公共 Helium console</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>将设备连接到你的 TTN(TTS) 服务器</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>其他 LoRaWAN 网络服务器</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>参数</h4></td>
    <td><h4>描述</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>默认 EU868</td>
    </tr>
        <tr>
    <td>Packet Policy</td>
    <td>1C</td>
    <td>LoRaWAN 使用确认报文</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>默认开启</td>
    <td>LoRaWAN 参数，建议保持默认开启</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>当 “Platform” 从其他平台切换回 SenseCAP 时，需要恢复 LoRa 参数（EUI/App EUI/App Key 等）</td>
    <td>当你需要将 LoRa 参数恢复为出厂默认值时，可以使用此功能</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

该传感器支持两种入网方式，默认使用 OTAA。

|**参数**|**描述**|
| - | - |
|OTAA (default)|Over The Air Activation，通过 Device EUI、App EUI 和 App Key 加入网络。|
|ABP|Activation By Personalization，通过 DevAddr、NwkSkey 和 AppSkey 加入网络。|

设备默认使用 OTAA 加入 LoRaWAN 网络。因此，可以设置 Device EUI、App EUI 和 App Key。

|**参数**|**类型**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16，十六进制，从 0 ~ F|
|App EUI|16，十六进制，从 0 ~ F|
|App Key|32，十六进制，从 0 ~ F|

:::info Note
当使用 SenseCAP 平台时，EUI、APP EUI 和 APP Key 是固定的，并且与传感器标签上的信息相同。<br />
当选择将传感器用于 Helium 或 TTN 等公共平台时，EUI 不会改变，传感器会生成新的固定 App EUI 和 App Key 用于网络接入。<br />
如需批量获取 EUI 信息，请联系我们的销售团队。
:::

<table>
<tr><th colspan="1" valign="top"><b>Frequency</b></th><th colspan="1" valign="top"><b>Common Name</b></th><th colspan="2" valign="top"><b>Sub-band</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">子频段 1 到 8（默认子频段 2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">子频段 1 到 8（默认子频段 2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN 频率计划</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN 频率计划</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Helium 频率计划</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info 注意
不同国家和 LoRaWAN 网络服务器使用不同的频率计划。<br />
对于 Helium 网络，请参考：[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
对于 The Things Network，请参考：[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### 工作模式设置

请根据你的需求设置工作模式。

<table>
<tr><th colspan="1"><b>Parameters</b></th><th colspan="1"><b>Description</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Heartbeat Interval</td><td colspan="1">当设备在心跳间隔内没有上传数据时，将触发一个心跳报文。该报文仅包含电池信息。</td><td colspan="1">默认 720 分钟。</td></tr>
<tr><td colspan="1">Enable Temp&Light</td><td colspan="1">如果打开此开关，将采集并上传温度和光照数据，但会增加功耗。</td><td colspan="1">默认关闭。</td></tr>
<tr><td colspan="1" rowspan="2">SOS Report Mode</td><td colspan="1">Single</td><td colspan="1"><a name="ole_link7"></a>如果 SOS 设置为 Single 模式，双击按键将启用单次 SOS 模式，并上传一次位置信息/传感器数据和 SOS 事件</td></tr>
<tr><td colspan="1">Continuous</td><td colspan="1"><p>默认使用 Continuous。</p><p>如果 SOS 设置为 Continuous 模式，双击按键将开启 SOS 的连续模式，每 1 分钟上传一次位置、传感器数据和 SOS 事件，连续 30 次后自动结束</p></td></tr>
<tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1">Standby Mode</td><td colspan="1">根据心跳间隔上传心跳报文（仅电池电量）。</td></tr>
<tr><td colspan="1">Periodic Mode</td><td colspan="1">根据上传间隔上传位置和传感器数据。</td></tr>
<tr><td colspan="1">Event Mode</td><td colspan="1"><a name="ole_link15"></a>根据温度、光照和运动等测量值设置阈值触发条件，并在触发后调整上传间隔。</td></tr>
<tr><td colspan="1">Uplink Interval (min) – Periodic Mode</td><td colspan="1">周期性定位并上传数据。</td><td colspan="1"><p>默认 60 分钟。</p><p>频率越高，功耗越大。</p></td></tr>
<tr><td colspan="1">Restore All Settings</td><td colspan="1">将所有配置参数恢复为出厂设置，包括 LoRa、Work Mode 和 Geolocation。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

对于 Event Mode，有五种事件：

<table>
<tr><th><b>Event Mode</b></th><th><b>Description</b></th><th></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td><a name="ole_link16"></a>这是在未触发任何事件时的上传间隔。</td><td><p>默认 60 分钟。</p><p>范围：1~10080 分钟。</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>当启用 Shock Event 时，追踪器受到震动将触发一次数据上报，包括震动事件、位置信息和传感器数据。</td><td>默认关闭。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>默认值为 300。当加速度超过 300mg 时，触发 Shock Event。</td></tr>
<tr><td rowspan="3">Motion Event</td><td>当加速度超过设定值时，设备开始运动；当 2 分钟内没有运动时，设备运动停止。可根据开始运动和停止运动分别设置上传间隔。</td><td>默认关闭。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>默认值为 30。当加速度超过 30mg 时，判定设备处于运动状态；当连续 2 分钟低于该值时，判定设备处于静止状态。</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>设置设备处于运动状态时当前状态的上传间隔。</td></tr>
<tr><td rowspan="2">Motionless Event</td><td>当设备在某一位置静止超过一定时间时，将触发静止超时事件。</td><td></td></tr>
<tr><td>Motionless Timeout(min)</td><td>默认 360 分钟。</td></tr>
<tr><td rowspan="4">Temperature Event</td><td>如果启用 Temperature Event，你可以根据温度设置上传间隔。</td><td>例如，Uplink Interval=10，Value≥30，如果温度高于 30 °C，设备将以 10 分钟的间隔上传位置信息。</td></tr>
<tr><td>Sample Interval (s)</td><td><p>默认 30 秒。</p><p>每 30 秒检测一次温度。当触发阈值时，上传位置信息和传感器数据。</p></td></tr>
<tr><td>上行间隔（分钟）</td><td>当温度超过阈值时，将按照此间隔上传位置信息和传感器数据。</td></tr>
<tr><td>数值规则</td><td>可以设置四种阈值规则中的一种。</td></tr>
<tr><td rowspan="3">光照事件</td><td>如果启用光照事件，您可以根据温度设置上传间隔。</td><td>例如，Uplink Interval=10，Value≥30，如果温度高于 30 %，设备将以 10 分钟的间隔上传位置信息。</td></tr>
<tr><td>上行间隔（分钟）</td><td>当光照超过阈值时，将按照此间隔上传位置信息和传感器数据。</td></tr>
<tr><td>数值规则</td><td>可以设置四种阈值规则中的一种。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 地理定位模式设置

该追踪器支持通过 GNSS、Wi-Fi 和 Bluetooth 进行定位。

- **GNSS**：可以通过 GPS 等卫星定位直接获取经纬度，然后通过 LoRa 上传数据。
- **Wi-Fi**：被动扫描，通过 LoRa 上传扫描到的 4 个 MAC 地址。
- **BLE**：通过 LoRa 上传扫描到的 Beacon 的 3 个最佳信号 MAC 地址。

<table>
<tr><th colspan="1"><b>地理定位</b></th><th colspan="1"><b>描述</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">地理定位策略</td><td colspan="1">Only GNSS</td><td colspan="1"><p>默认使用 GNSS。</p><p>仅使用 GNSS 进行定位。</p></td></tr>
<tr><td colspan="1">Only Wi-Fi</td><td colspan="1">仅使用 Wi-Fi 扫描进行定位。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">在 GNSS 之前使用 Wi-Fi。如果 Wi-Fi 失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">在 Wi-Fi 之前使用 GNSS。如果 GNSS 失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">Only Bluetooth</td><td colspan="1">仅使用 Bluetooth 扫描进行定位。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">在 Wi-Fi 之前使用 Bluetooth。如果 Bluetooth 失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">在 GNSS 之前使用 Bluetooth。如果 Bluetooth 失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">依次使用 Bluetooth、Wi-Fi 和 GNSS 进行定位（某一种定位方式失败后切换到下一种定位方式）。</td></tr>
<tr><td colspan="1">GNSS Timeout</td><td colspan="1"><p>等待 GNSS 获取粗略位置修正的最长时间</p></td><td colspan="1"><p>默认是 60s。</p><p>不建议修改，时间越长，功耗越大。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSS Data Cache</td><td colspan="1">当无法通过 LoRa 上传数据时，数据会保存在本地，并在 LoRa 信号恢复时上传。</td><td colspan="1">默认关闭。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

配置完所有参数后，点击 “Send”。
如果不需要修改任何参数，退出 Bluetooth 配置，返回主页。此时，设备会发起 LoRa 入网请求。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### 设备数据查看

#### SenseCAP Mate App

在 APP 上查看位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portal 的主要功能是管理 SenseCAP 设备并存储数据。它构建在微软安全可靠的云服务 Azure 之上。用户可以申请账号并将所有设备绑定到该账号。SenseCAP Portal 提供 Web 门户和 API。Web 门户包括 Dashboard、Device Management、Data Management 和 Access Key Management。API 向用户开放以便进行进一步开发。

- **Dashboard：** 包括 Device Overview、Announcement、Scene Data 和 Data Chart 等。
- **Device Management：** 管理 SenseCAP 设备。
- **Data Management：** 管理数据，包括 Data Table 和 Graph 部分，提供数据查询方法。
- **Subaccount System：** 注册具有不同权限的子账号。
- **Access Key Management：** 管理 Access Key（用于访问 API 服务），包括 Key Create、Key Update 和 Key Check。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录 [SenseCAP Portal](http://sensecap.seeed.cc)

如果您已经通过 APP 创建了账号，可以直接登录。

1) 选择注册账号，输入邮箱信息并点击 "register"，注册邮件将发送到用户邮箱

2) 打开 "SenseCAP…" 邮件，点击跳转链接，填写相关信息并完成注册

3) 返回登录界面并完成登录

更多详情请查看 [SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API 供用户管理物联网设备和数据使用。它包括 3 种 API 方式：HTTP 协议、MQTT 协议和 Websocket 协议。

- 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或历史数据。
- 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
- 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。

更多详情请查看 [API User Guide](https://sensecap-docs.seeed.cc/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
