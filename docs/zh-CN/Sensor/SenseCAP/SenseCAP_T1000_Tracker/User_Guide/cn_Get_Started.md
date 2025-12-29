---
description: SenseCAP_T1000_追踪器入门指南
title: 快速入门
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 12/24/2025
  author: Janet
---


本章将指导您通过 SenseCAP Mate APP 设置 SenseCAP T1000 追踪器。

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
请确保您有 LoRaWAN 网络覆盖，如 Helium、TTN 或其他 LoRaWAN 网络。没有 LoRaWAN 网络，设备无法将数据发送到云端。使用追踪器最简单的方法是配合 `SenseCAP LoRaWAN Gateway` 和 `SenseCraft app`。
:::

## 设备功能

### 工作模式

为了适应不同的应用场景，SenseCAP T1000 追踪器有几种不同的工作模式，您可以根据需要进行选择。

|**工作模式**|**描述**|**场景**|
| - | - | - |
|待机模式|<p>仅上传心跳包，只包含电池信息。</p><p>可以使用 LoRa 下行命令获取位置。</p>|如果您需要长时间定位设备，并且设备可以在充电前长时间运行，云平台可以发出位置请求命令来定位设备。|
|周期模式|设置一个间隔，设备定期上传位置和传感器数据。|推荐在大多数场景中使用此模式。|
|事件模式|根据追踪器的温度、光照和加速度传感器调整上传间隔，包括温度事件、光照事件、运动事件、静止超时和冲击事件。|可用于复杂场景，如监控重要物品的运输。但功耗会大大增加。|

### 传感器功能

SenseCAP T1000 追踪器配备了 3 个传感器：温度传感器、光照传感器和 3 轴加速度计。
您可以选择启用或禁用这些传感器：

- 关闭所有传感器，但您也可以选择无传感器版本以降低成本。
- 仅启用温度和光照传感器，以低功耗定期监控数据。
- 当温度、照度和加速度计用作触发条件时，传感器将始终供电，设备功耗很大。

|**传感器**|**描述**|
| - | - |
|温度|<p>这是一个板载独立温度传感器，**精度为 ±0.5~1℃**。需要注意的是，这里可能存在一些温度测量延迟，因为它与外壳分离。</p><p>范围：-20 到 60℃；精度：± 1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃</p>|
|光照|<p>光照传感器监测的不是实际的流明值，而是从暗到亮的光照百分比。主要可用于防拆监控和一些光敏监控。</p><p>范围：0 到 100%（0% 为暗，100% 为最亮）</p>|
|3 轴加速度计|通过设置加速度值，触发运动事件和冲击事件。|

### 数据缓存

设备可以缓存数据，可以通过蓝牙配置开启"GNSS Data Cache"来启用。设备上传确认包。当 LoRaWAN 信号覆盖较弱或没有网络覆盖时，设备在上传数据时无法收到确认。在这种情况下，数据将被保存并进入下一个周期。当设备在某个时刻成功上传数据时，它将发送离线数据。最多可以缓存 1000 条记录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 按钮功能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>操作</b></th><th colspan="1"><b>描述</b></th><th colspan="1"><b>LED 状态</b></th><th colspan="1"><b>蜂鸣器</b></th></tr>
<tr><td colspan="1" rowspan="2">按住按钮 3 秒</td><td colspan="1">如果追踪器已关机，按住按钮 3 秒开机。蓝牙配对将自动激活，用户可以使用应用扫描并连接。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">上升旋律</td></tr>
<tr><td colspan="1">如果设备已开机，按住按钮 3 秒激活蓝牙配对。</td><td colspan="1">LED 每秒闪烁一次。</td><td colspan="1">无</td></tr>
<tr><td colspan="1">按住按钮 9 秒</td><td colspan="1">关机。</td><td colspan="1">无</td><td colspan="1">下降旋律</td></tr>
<tr><td colspan="1">加入 LoRa 网络</td><td colspan="1">退出蓝牙设置后，尝试加入 LoRaWAN 网络。</td><td colspan="1">尝试接入网络时呼吸灯闪烁，成功加入网络时快速闪烁</td><td colspan="1">成功加入网络时播放快速欢快的旋律</td></tr>
<tr><td colspan="1" rowspan="2">按一次</td><td colspan="1">获取位置/传感器数据，上传数据，并立即触发"按一次"事件。</td><td colspan="1">LED 亮 2 秒</td><td colspan="1">数据上传成功时会发出蜂鸣声。</td></tr>
<tr><td colspan="1">如果蓝牙配对已开启，按一次可以关闭蓝牙。</td><td colspan="1">LED 将熄灭</td><td colspan="1">无</td></tr>
<tr><td colspan="1" rowspan="3">连续按两次</td><td colspan="1">如果 SOS 设置为单次模式，双击按钮将激活单次 SOS 模式，上传一次位置/传感器数据和 SOS 事件。</td><td colspan="1">伴随声音闪烁</td><td colspan="1">3 秒报警声</td></tr>
<tr><td colspan="1">如果 SOS 设置为连续模式，双击按钮激活连续 SOS 模式。位置、传感器数据和 SOS 事件将每分钟上传一次，模式将在 30 次后自动结束。</td><td colspan="1">伴随声音闪烁</td><td colspan="1">持续报警声</td></tr>
<tr><td colspan="1">双击两次退出 SOS 模式</td><td colspan="1">无</td><td colspan="1">无</td></tr>
</table>

:::info 注意

- 如果不使用设备，建议关闭设备。
- 首次开机时，建议在户外测试，因为 GPS 需要通过卫星更新时间。
- 请确保频段与您的网关频率匹配。
:::

## 入门指南

### 连接到 SenseCAP Mate App

- **步骤 1**：下载 SenseCAP Mate App

SenseCAP Mate App 用于配置 LoRa 参数、间隔、将设备绑定到您的账户并查看设备基本信息。

- 对于 iOS，请在 App Store 中搜索"SenseCAP Mate"并下载。
- 对于 Android，请在 Google Store 中搜索"SenseCAP Mate"并下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：添加设备

登录 SenseCAP Mate APP。
点击右上角的"Add Device"选项卡，然后扫描设备标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

按住按钮 3 秒，然后通过 SN 选择设备。

有 2 种配置模式：

- **快速配置**：为了快速开始，您可以选择快速配置基本参数
- **高级配置**：要设置更多参数，请查看以下步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### 快速配置

对于快速配置，您只需要设置以下参数：

- **频率**：应与您的网关相同。
- **上行间隔**：周期模式（默认模式）的上行间隔，您可以通过"User"页面上的"Device Bluetooth Configuration"设置其他模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

追踪器将尝试加入 LoRaWAN 网络，尝试加入网络时呼吸灯闪烁，成功加入网络时快速闪烁并播放快速欢快的旋律。

### 高级配置

- 按住按钮 3 秒开机，然后自动开启蓝牙配对，用户可以使用应用扫描并连接。
- 打开 App 并点击"Tracker T1000"。选择"Setup"来配置追踪器。
- 通过 S/N 选择设备（S/N 在设备标签上）。然后，进入后将显示传感器的基本信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

点击"Measure"，然后您将获得传感器值：

|温度|范围：-20 到 60℃；精度：± 1℃（最小 0.5℃，最大 1℃）；分辨率：0.1℃|
| - | - |
|光照|0 到 100%（0% 为暗，100% 为最亮）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa 参数设置

追踪器制造时支持 863MHz~928MHz 的通用频率计划，一个 SKU 中包含。每个设备都可以支持 7 个频率计划。

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
必须与 SenseCAP Gateway 配合使用。SenseCAP 构建了一个专有的 TTN 服务器，使传感器在与 SenseCAP 网关配对时能够开箱即用。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 户外网关</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 室内网关</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>当有 Helium 网络覆盖时，数据可以通过 Helium 上传。设备运行在 SenseCAP 的私有 Helium 控制台上。用户无需在 Helium 控制台上创建设备，通过 SenseCAP Mate App 和门户即可开箱即用。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium 覆盖范围</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>将设备连接到您的公共 Helium 控制台</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>将设备连接到您的 TTN(TTS) 服务器</td>
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
    <td>频率计划</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>默认 EU868</td>
    </tr>
        <tr>
    <td>数据包策略</td>
    <td>1C</td>
    <td>LoRaWAN 使用确认数据包</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>默认开启</td>
    <td>LoRaWAN 参数，建议默认开启</td>
    </tr>
            <tr>
    <td>恢复 LoRa 配置</td>
    <td>当"平台"从其他平台切换回 SenseCAP 时，需要恢复 LoRa 参数（EUI/App EUI/ App Key 等）</td>
    <td>当您需要将 LoRa 参数恢复到出厂默认值时，可以使用此功能</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

传感器支持两种网络接入模式，默认为 OTAA。

|**参数**|**描述**|
| - | - |
|OTAA（默认）|空中激活，通过 Device EUI、App EUI 和 App Key 加入网络。|
|ABP|个性化激活，通过 DevAddr、NwkSkey 和 AppSkey 加入网络。|

设备默认使用 OTAA 加入 LoRaWAN 网络。因此，可以设置设备 EUI、App EUI 和 App Key。

|**参数**|**类型**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16 位，十六进制 0 ~ F|
|App EUI|16 位，十六进制 0 ~ F|
|App Key|32 位，十六进制 0 ~ F|

:::info 注意
使用 SenseCAP 平台时，EUI、APP EUI 和 APP Key 是固定的，与传感器标签相同。<br />
当传感器选择与 Helium 或 TTN 等公共平台一起使用时，EUI 不会改变，传感器将生成新的固定 App EUI 和 App Key 用于网络接入。<br />
要批量获取 EUI 信息，请联系我们的销售团队。
:::

<table>
<tr><th colspan="1" valign="top"><b>频率</b></th><th colspan="1" valign="top"><b>通用名称</b></th><th colspan="2" valign="top"><b>子频段</b></th></tr>
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

请根据您的需要设置工作模式。

<table>
<tr><th colspan="1"><b>参数</b></th><th colspan="1"><b>描述</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">心跳间隔</td><td colspan="1">当设备在心跳间隔内没有上传数据时，将触发心跳数据包。此数据包仅包含电池信息。</td><td colspan="1">默认 720 分钟。</td></tr>
<tr><td colspan="1">启用温度和光照</td><td colspan="1">如果打开此开关，将收集并上传温度和光照数据，但会增加功耗。</td><td colspan="1">默认关闭。</td></tr>
<tr><td colspan="1" rowspan="2">SOS 报告模式</td><td colspan="1">单次</td><td colspan="1"><a name="ole_link7"></a>如果 SOS 设置为单次模式，双击按钮将启用单次 SOS 模式，并上传一次位置/传感器数据和 SOS 事件</td></tr>
<tr><td colspan="1">连续</td><td colspan="1"><p>默认使用连续模式。</p><p>如果 SOS 设置为连续模式，双击按钮打开 SOS 连续模式，每 1 分钟上传一次位置、传感器数据和 SOS 事件，30 次后自动结束</p></td></tr>
<tr><td colspan="1" rowspan="3">工作模式</td><td colspan="1">待机模式</td><td colspan="1">根据心跳间隔上传心跳数据包（仅电池电量）。</td></tr>
<tr><td colspan="1">周期模式</td><td colspan="1">根据上传间隔上传位置和传感器数据。</td></tr>
<tr><td colspan="1">事件模式</td><td colspan="1"><a name="ole_link15"></a>根据温度、光照和运动等测量值设置阈值触发条件，并在触发后调整上传间隔。</td></tr>
<tr><td colspan="1">上传间隔（分钟）– 周期模式</td><td colspan="1">定期定位并上传数据。</td><td colspan="1"><p>默认 60 分钟。</p><p>频率越高，功耗越高。</p></td></tr>
<tr><td colspan="1">恢复所有设置</td><td colspan="1">将所有配置参数恢复到出厂设置，包括 LoRa、工作模式和地理定位。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

对于事件模式，有五个事件：

<table>
<tr><th><b>事件模式</b></th><th><b>描述</b></th><th></th></tr>
<tr><td>上传间隔 – 非事件（分钟）</td><td><a name="ole_link16"></a>这是没有事件触发时的上传间隔。</td><td><p>默认 60 分钟。</p><p>范围：1~10080 分钟。</p></td></tr>
<tr><td rowspan="2">震动事件</td><td>当启用震动事件时，跟踪器的震动将触发数据报告，包括震动事件、位置和传感器数据。</td><td>默认关闭。</td></tr>
<tr><td>三轴运动阈值（mg）</td><td>默认为 300。当加速度超过 300mg 时，触发震动事件。</td></tr>
<tr><td rowspan="3">运动事件</td><td>当加速度超过设定值时，设备开始运动，当 2 分钟内没有运动时，设备运动停止。根据开始运动和停止运动设置上传间隔。</td><td>默认关闭。</td></tr>
<tr><td>三轴运动阈值（mg）</td><td>默认为 30。当加速度超过 30mg 时，判断设备处于运动状态，当低于此值 2 分钟时，判断设备处于静止状态。</td></tr>
<tr><td>运动时上传间隔（分钟）</td><td>设置设备处于运动状态时当前状态的上传间隔。</td></tr>
<tr><td rowspan="2">静止事件</td><td>当设备在某个位置静止超过一定时间时，触发静止超时事件。</td><td></td></tr>
<tr><td>静止超时（分钟）</td><td>默认为 360 分钟。</td></tr>
<tr><td rowspan="4">温度事件</td><td>如果启用温度事件，您可以根据温度设置上传间隔。</td><td>例如，上传间隔=10，值≥30，如果温度高于 30°C，设备将以 10 分钟间隔上传位置。</td></tr>
<tr><td>采样间隔（秒）</td><td><p>默认 30 秒。</p><p>每 30 秒检测一次温度。当触发阈值时，上传位置和传感器数据。</p></td></tr>
<tr><td>上传间隔（分钟）</td><td>当温度超过阈值时，根据此间隔上传位置和传感器数据。</td></tr>
<tr><td>数值规则</td><td>可以设置四种阈值规则之一。</td></tr>
<tr><td rowspan="3">光照事件</td><td>如果启用光照事件，您可以根据温度设置上传间隔。</td><td>例如，上传间隔=10，值≥30，如果温度高于 30%，设备将以 10 分钟间隔上传位置。</td></tr>
<tr><td>上传间隔（分钟）</td><td>当光照超过阈值时，根据此间隔上传位置和传感器数据。</td></tr>
<tr><td>数值规则</td><td>可以设置四种阈值规则之一。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 地理定位模式设置

追踪器支持通过 GNSS、Wi-Fi 和蓝牙进行定位。

- **GNSS**：可以通过 GPS 和其他卫星定位直接获取经纬度，然后通过 LoRa 上传数据。
- **Wi-Fi**：被动扫描，通过 LoRa 上传扫描到的 4 个 MAC 地址。
- **BLE**：通过 LoRa 上传扫描到的 3 个信号最强的 Beacon MAC 地址。

<table>
<tr><th colspan="1"><b>地理定位</b></th><th colspan="1"><b>描述</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">地理定位策略</td><td colspan="1">仅 GNSS</td><td colspan="1"><p>默认使用 GNSS。</p><p>仅使用 GNSS 进行定位。</p></td></tr>
<tr><td colspan="1">仅 Wi-Fi</td><td colspan="1">仅使用 Wi-Fi 扫描进行定位。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">优先使用 Wi-Fi，再使用 GNSS。如果 Wi-Fi 失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">优先使用 GNSS，再使用 Wi-Fi。如果 GNSS 失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">仅蓝牙</td><td colspan="1">仅使用蓝牙扫描进行定位。</td></tr>
<tr><td colspan="1">蓝牙 + Wi-Fi</td><td colspan="1">优先使用蓝牙，再使用 Wi-Fi。如果蓝牙失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td colspan="1">蓝牙 + GNSS</td><td colspan="1">优先使用蓝牙，再使用 GNSS。如果蓝牙失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td colspan="1">蓝牙 + Wi-Fi + GNSS </td><td colspan="1">依次使用蓝牙、Wi-Fi 和 GNSS 进行定位（一种定位方式失败后切换到下一种定位方式）</td></tr>
<tr><td colspan="1">GNSS 超时</td><td colspan="1"><p>等待 GNSS 获取粗略位置</p><p>定位的最大时间</p></td><td colspan="1"><p>默认为 60 秒。</p><p>不建议修改，时间越长，功耗越大。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSS 数据缓存</td><td colspan="1">当无法通过 LoRa 上传数据时，数据会保存在本地，并在 LoRa 信号恢复时上传。</td><td colspan="1">默认关闭。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

配置完所有参数后，点击 "Send"。
如果不需要修改任何参数，退出蓝牙配置，返回主页。此时，设备发起 LoRa 网络接入请求。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### 设备数据查看

#### SenseCAP Mate App

在 APP 上查看位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portal 的主要功能是管理 SenseCAP 设备和存储数据。它基于微软安全可靠的云服务 Azure 构建。用户可以申请账户并将所有设备绑定到此账户。SenseCAP Portal 提供网页门户和 API。网页门户包括仪表板、设备管理、数据管理和访问密钥管理。API 向用户开放以供进一步开发。

- **仪表板：** 包括设备概览、公告、场景数据和数据图表等。
- **设备管理：** 管理 SenseCAP 设备。
- **数据管理：** 管理数据，包括数据表和图表部分，提供搜索数据的方法。
- **子账户系统：** 注册具有不同权限的子账户。
- **访问密钥管理：** 管理访问密钥（用于访问 API 服务），包括密钥创建、密钥更新和密钥检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录 [SenseCAP Portal](http://sensecap.seeed.cc)

如果您已通过 APP 创建账户，可以直接登录。

1) 选择注册账户，输入邮箱信息，点击 "register"，注册邮件将发送到用户邮箱

2) 打开 "SenseCAP…" 邮件，点击跳转链接，填写相关信息，完成注册

3) 返回登录界面，完成登录

查看 [SenseCAP Portal 用户指南](https://sensecap-docs.seeed.cc/quickstart.html) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API 供用户管理物联网设备和数据。它包括 3 种类型的 API 方法：HTTP 协议、MQTT 协议和 Websocket 协议。

- 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或历史数据。
- 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
- 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。

请查看 [API 用户指南](https://sensecap-docs.seeed.cc/) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
