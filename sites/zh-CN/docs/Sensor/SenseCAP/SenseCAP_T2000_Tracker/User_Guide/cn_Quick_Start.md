---
description: SenseCAP_T2000_tracker 入门指南
title: 快速开始
keywords:
  - SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /Get_Started_with_SenseCAP_T2000_tracker
sku: 100082900,100057727,100087298
last_update:
  date: 1/5/2026
  author: Janet
createdAt: '2025-12-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T2000_tracker/
---

# SenseCAP T2000 Tracker 入门指南

本章节将向您展示如何使用 SenseCraft App 快速设置您的 SenseCAP T2000 Tracker。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
请确保您有 LoRaWAN 网络覆盖，如 Helium、TTN 或其他 LoRaWAN 网络。没有 LoRaWAN 网络，设备无法将数据发送到云端。使用追踪器最简单的方法是配合 `SenseCAP LoRaWAN Gateway` 和 `SenseCraft app`。
:::

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/krE6HBgWnRA?si=CRcLRApl1NZUHhqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-A/B 分解图</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-C 带太阳能板分解图</div>  
<br />

### 工作环境

SenseCAP T2000 Tracker 设计在特定温度范围内可靠运行，以确保稳定性能和电池安全。请确保设备在这些温度范围内使用和充电，以避免性能下降或电池问题。

| 参数 | T2000-A / T2000-B | T2000-C 带太阳能板|
|---------|------------------|--------|
| 工作温度 | -40 °C ~ 85 °C | -20 °C ~ 60 °C |
| 充电温度 | / | 0 °C ~ 45 °C |

## 设备功能

### 工作模式

为了适应不同的应用场景，SenseCAP T2000 追踪器有几种不同的工作模式，您可以根据需要进行选择。

| **工作模式** | **描述** | **场景** |
| - | - | - |
| 待机模式 | <ul><li>仅上传心跳包，只包含电池信息。</li><li>可以使用 LoRa 下行命令获取位置。</li></ul> | 如果您需要长时间定位设备，并且设备可以在充电前长时间运行，云平台可以发出位置请求命令来定位设备。 |
| 周期模式 | 设置一个间隔，设备定期上传位置、3 轴加速度计数据和电池信息。 | 推荐用于大多数场景<ul><li>资产追踪</li><li>牲畜监控</li></ul> |
| 事件模式 | 根据 3 轴加速度计传感器调整上传间隔，包括运动事件、静止超时和冲击事件。每当触发事件时，设备将上传位置、3 轴加速度计数据和电池信息。 | 当您需要监控追踪对象的运动状态时推荐使用。 |

### 传感器功能

SenseCAP T2000 Tracker 配备了 3 轴加速度计。

- 您可以在 SenseCraft App 中选择启用或禁用传感器（默认禁用）。
- 您可以根据应用需求配置 3 轴加速度计的相应阈值，触发运动/静止事件和冲击事件。

### 数据缓存

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache2.png" alt="pir" width={800} height="auto" /></p>

设备可以缓存数据，可以通过蓝牙配置开启 `Location Data Cache` 来启用。设备上传确认包。当 LoRaWAN 信号覆盖较弱或没有网络覆盖时，设备在上传数据时无法收到 ACK。在这种情况下，数据将被保存并进入下一个周期。当设备在某个时刻成功上传数据时，它将发送离线数据。

设备首先上传实时位置数据。一旦平台为该上行链路返回 ACK，追踪器开始上传本地存储的缓存数据，从最旧的条目开始，以避免覆盖较新的数据。

缓存上行间隔已设置为 40 秒。缓存数据将以此间隔连续发送，直到触发新的实时位置上行链路或平台在过程中停止返回 ACK。

可以缓存的最大数据量为 1000 条记录。

点击 `Clear Cache` 按钮将清除所有缓存数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache.png" alt="pir" width={800} height="auto" /></p>

### 按钮功能

#### 磁性附件说明

| **状态**        | **操作** |
|-------------------|--------------|
| 开机          | 将磁铁靠近传感器区域并快速敲击 4 次。绿灯亮起时开机成功。 |
| 关机         | 将磁铁靠近传感器区域并快速敲击 4 次。绿灯亮起时关机成功。 |
| 蓝牙开启      | 将磁铁靠近传感器区域并快速敲击 2 次。蓝灯闪烁时启用蓝牙扫描。 |
| 蓝牙关闭     | 将磁铁靠近传感器区域并快速敲击 2 次。 |

#### LED 状态指示器

| 状态              | LED 颜色 | 指示模式        |
|---------------------|-----------|--------------------------|
| 开机            | 绿色     | 持续亮 1 秒         |
| 关机           | 绿色     | 持续亮 1 秒         |
| 加入网络     | 绿色     | 呼吸灯          |
| 加入成功        | 绿色     | 快速闪烁 5 次       |
| 加入失败           | 红色       | 快速闪烁 5 次       |
| 蓝牙搜索    | 蓝色      | 连续慢闪    |
| 蓝牙已连接 | 蓝色      | 持续亮                |
| 防拆报警        | 红色       | 连续快闪    |
| 固件更新   | 绿色     | 连续慢闪    |
| 进入 DFU 模式      | 绿色     | 持续亮                |

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_PowerOn.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">开机/关机</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_GreenBreathingLight.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">开机后，绿色呼吸灯</div>
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Bluetooth.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">进入/退出蓝牙模式</div>  

<br />

:::info Note

- 如果不使用设备，建议关闭设备。
- 首次开机时，建议在户外测试，因为 GPS 需要通过卫星更新时间。
- 请确保频段与您的网关频率匹配。
:::

## 入门指南

### 连接到 SenseCraft App

- **步骤 1**：下载 SenseCraft App

SenseCraft App 用于配置 LoRa 参数、间隔、将设备绑定到您的账户并查看设备基本信息。

- 对于 iOS，请在 App Store 中搜索 "SenseCraft" 并下载。
- 对于 Android，请在 Google Store 中搜索 "SenseCraft" 并下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：添加设备

登录 SenseCraft APP。
点击右上角的 '+' 标签，然后扫描设备标签上的二维码。
点击 'Add to account'，然后您可以 'Configure' 设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

将磁铁靠近传感器区域并快速敲击 4 次以开机，然后追踪器将自动进入蓝牙配对（如果追踪器已开机，快速敲击 2 次以手动进入蓝牙配对），并通过 SN 选择设备。

有 2 种配置模式：

- **快速配置**：为了快速开始，您可以选择快速配置基本参数
- **高级配置**：要设置更多参数，请查看以下步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### 快速配置

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qne730YZtSo?si=jLYLlO8r6SgnYIEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

对于快速配置，您只需要设置以下参数：

- **频率**：应与您的网关相同。
- **上行间隔**：周期模式（默认模式）的上行间隔，您可以通过 "User" 页面上的 "Device Bluetooth Configuration" 设置其他模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

追踪器在退出蓝牙配对模式后将尝试加入 LoRaWAN 网络，尝试加入网络时绿色呼吸灯闪烁，如果网络成功加入则快速闪烁 5 次。

### 高级配置

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ROjXT6D8xtA?si=roC5PW9Cce4Jp1Kl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

- 打开应用程序，在 `User` 页面中点击 `Device Bluetooth Configuration`。然后选择 `SenseCAP Asset Tracker T2000` 进入 `Setup` 来配置追踪器。
- 按照上述步骤进入蓝牙配对模式。
- 通过 S/N（S/N 在设备标签上）选择设备，并选择 `Advanced Configuration`。然后，进入后将显示追踪器的基本信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

总共有四个配置页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

在 `Information` - `Basic` 页面中点击 `Measure`，然后您将获得传感器数值：

1. **三轴加速度计（X / Y / Z 值）**

- 设备报告沿 X、Y 和 Z 轴的加速度值。这些读数帮助用户了解设备在运行或安装期间的姿态、运动或振动状态。

2. **防拆按钮状态**
- Pressed：设备已安全安装
- Not Pressed：设备未完全安装或已被移除

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Measure.png" alt="pir" width={800} height="auto" /></p>

<br />

#### LoRa 参数设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Platform.png" alt="pir" width={800} height="auto" /></p>

**平台**

<table align="center">
  <tbody>
    <tr>
    <td><h4>平台</h4></td>
    <td><h4>描述</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>默认平台。
必须与 SenseCAP Gateway 一起使用。SenseCAP 构建了一个专有的 TTN 服务器，使传感器在与 SenseCAP 网关配对时可以开箱即用。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 户外网关</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 室内网关</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>当有 Helium 网络覆盖时，数据可以通过 Helium 上传。设备运行在 SenseCAP 的私有 Helium 控制台上。用户无需在 Helium 控制台上创建设备，可与 SenseCraft App 和 Portal 开箱即用。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium 覆盖范围</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>将设备连接到您的公共 [Helium console](https://console.helium.com)</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>将设备连接到您的 [TTN(TTS) server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>其他 LoRaWAN 网络服务器</td>
    </tr>
  </tbody>
</table>

**频率计划**

追踪器制造时支持 863MHz~928MHz 的通用频率计划。每个设备可以支持 8 个频率计划，包括 EU868、US915、AU915、AS923-1-TTN、AS923-2-TTN、IN865、KR920 和 RU864。

<table align="center">
  <tbody>
    <tr>
    <td><h4>参数</h4></td>
    <td><h4>描述</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>频率计划</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
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

:::info 注意
不同国家和 LoRaWAN 网络服务器使用不同的频率计划。<br />
对于 Helium 网络，请参考：[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
对于 The Things Network，请参考：[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
如果您不确定您所在地区需要哪个频段，请咨询我们的技术支持团队或参考 [RP002-1.0.0 LoRaWAN® Regional Parameters](https://lora-alliance.org/wp-content/uploads/2019/11/rp_2-1.0.0_final_release.pdf) 获取详细的区域频率信息。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_FrequencyPlan.jpg" alt="pir" width={400} height="auto" /></p>

**激活类型**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_LoRaSetup.png" alt="pir" width={800} height="auto" /></p>

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

<br />

#### 工作模式设置

请根据您的需要设置工作模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_WorkMode.png" alt="pir" width={800} height="auto" /></p>

<table>
<tr><th colspan="1"><b>参数</b></th><th colspan="1"><b>描述</b></th><th colspan="1"><b>默认值 / 注意</b></th></tr> <tr><td colspan="1">心跳间隔</td><td colspan="1">当设备在心跳间隔内没有上传数据时，将触发心跳数据包。此数据包仅包含电池信息。</td><td colspan="1">默认 720 分钟。</td></tr> <tr><td colspan="1">启用三轴传感器</td><td colspan="1">如果打开此开关，将收集并上传三轴传感器数据，但会增加功耗。</td><td colspan="1">默认关闭。</td></tr> <tr><td colspan="1">启用拆卸报警</td><td colspan="1">如果打开此开关，设备在安装后被移除时会激活报警。</td><td colspan="1">默认启用。</td></tr> <tr><td colspan="1">拆卸报警持续时间（分钟）</td><td colspan="1">此参数指定拆卸报警触发后设备持续报告的时间，每分钟发送一个带有报警事件的实时位置数据包。</td><td colspan="1">此设置仅在启用拆卸报警时可见。默认 3 分钟。</td></tr> <tr><td colspan="1" rowspan="3">工作模式</td><td colspan="1"><b>待机模式</b></td><td colspan="1">根据心跳间隔上传心跳数据包（仅电池电量）。</td></tr> <tr><td colspan="1"><b>周期模式</b></td><td colspan="1">根据上行间隔上传位置和传感器数据。</td></tr> <tr><td colspan="1"><b>事件模式</b></td><td colspan="1">基于运动和冲击等测量值设置阈值触发条件，并在没有事件触发时调整上行间隔。</td></tr> <tr><td colspan="1">上行间隔（分钟）</td> <td colspan="1"><b>周期模式</b></td> <td colspan="1">定期定位并上传数据。默认 60 分钟。更高频率会增加功耗。</td></tr> <tr><td colspan="1">恢复所有设置</td><td colspan="2">将所有配置参数恢复到出厂设置，包括 LoRa、工作模式和地理定位。</td></tr>
</table>

<br />

对于事件模式，有三个事件：

<table>
<tr><th><b>事件模式</b></th><th colspan="2"><b>描述</b></th></tr>
<tr><td>上行间隔 – 非事件（分钟）</td><td>这是未触发事件时的上传间隔。</td><td><p>默认 60 分钟。</p><p>范围：1~10080 分钟。</p></td></tr>
<tr><td rowspan="2">震动事件</td><td>当震动事件启用时，追踪器的震动将触发数据报告，包括震动事件、位置和传感器数据。</td><td>默认关闭。</td></tr>
<tr><td>3 轴运动阈值（mg）</td><td>默认为 300。当加速度超过 300mg 时，触发震动事件。</td></tr>
<tr><td rowspan="3">运动事件</td><td>当加速度超过设定值时，设备开始移动，当 2 分钟内无运动时，设备停止移动。根据开始移动和停止移动设置上传间隔。</td><td>默认关闭。</td></tr>
<tr><td>3 轴运动阈值（mg）</td><td>默认为 30。当加速度超过 30mg 时，判断设备处于运动状态，当低于此值 2 分钟时，判断设备处于静止状态。</td></tr>
<tr><td>运动时上行间隔（分钟）</td><td>设置设备处于运动状态时当前状态的上传间隔。</td></tr>
<tr><td rowspan="2">静止事件</td><td colspan="2">当设备在某个位置静止超过一定时间时，触发静止超时事件。</td></tr>
<tr><td>静止超时（分钟）</td><td>默认为 360 分钟。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### 地理定位模式设置

追踪器支持通过 GNSS、Wi-Fi（仅 T2000-B 支持）和蓝牙进行定位。

- **GNSS**：可以通过 GPS 和其他卫星定位直接获取经纬度，然后通过 LoRa 上传数据。
- **Wi-Fi**：被动扫描，通过 LoRa 上传扫描到的 5 个 MAC 地址。
- **BLE**：通过 LoRa 上传扫描到的 5 个信标 MAC 地址。

<table>
<tr><th><b>地理定位策略</b></th><th colspan="2"><b>描述</b></th></tr>
<tr><td rowspan="9"><b>地理定位策略</b></td><td>仅 GNSS</td><td>默认使用 GNSS。仅使用 GNSS 进行定位。</td></tr>
<tr><td>仅 Wi-Fi</td><td>仅使用 Wi-Fi 扫描进行定位。</td></tr>
<tr><td>仅蓝牙</td><td>仅使用蓝牙扫描进行定位。</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>优先使用 GNSS，再使用 Wi-Fi。如果 GNSS 失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td>GNSS + 蓝牙</td><td>优先使用 GNSS，再使用蓝牙。如果 GNSS 失败，则在一个地理定位周期内使用蓝牙。</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>优先使用 Wi-Fi，再使用 GNSS。如果 Wi-Fi 失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td>蓝牙 + GNSS</td><td>优先使用蓝牙，再使用 GNSS。如果蓝牙失败，则在一个地理定位周期内使用 GNSS。</td></tr>
<tr><td>蓝牙 + Wi-Fi</td><td>优先使用蓝牙，再使用 Wi-Fi。如果蓝牙失败，则在一个地理定位周期内使用 Wi-Fi。</td></tr>
<tr><td>蓝牙 + Wi-Fi + GNSS</td><td>依次使用蓝牙、Wi-Fi 和 GNSS 进行定位（一种定位方式失败后切换到下一种定位方式）。</td></tr>
<tr><td><b>GNSS 最大扫描时间（秒）</b></td><td>等待 GNSS 获取粗略位置定位的最大时间。</td><td><p>默认为 60 秒。</p><p>不建议修改，时间越长，功耗越大。</p></td></tr>
<tr><td><b>iBeacon 扫描超时（秒）</b></td><td>在蓝牙定位下，设备扫描周围蓝牙信标以获取粗略位置定位的最大时间。</td><td><p>默认为 3 秒。</p><p>范围 1~10 秒。</p></td></tr>
<tr><td><b>组 UUID（十六进制）</b></td><td>允许追踪器仅扫描和报告 UUID 与指定模式匹配的蓝牙信标，有助于过滤无关信标。</td><td><p>设置 UUID 过滤器，最多 16 字节。例如，如果设置为 '01 02 03 04'，将过滤具有模式 '01 02 03 04 xx xx ...' 的信标</p></td></tr>
<tr><td><b>位置数据缓存</b></td><td>当无法通过 LoRa 上传数据时，数据会本地保存（最多 1000 条记录），并在 LoRa 覆盖恢复时上传。</td><td><p>默认关闭。</p></td></tr>
<tr><td><b>清除缓存</b></td><td colspan="2">清除所有历史缓存数据。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

配置完所有参数后，点击 "Send"。
如果不需要修改参数，退出蓝牙配置，返回主页。
此时，设备发起 LoRa 网络接入请求。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### 设备数据查看

#### SenseCraft 应用

在应用中查看位置。
绑定设备后，进入设备页面，点击右上角按钮查看设备的历史位置数据。
点击过滤器选择查看 'All/GNSS/BLE/Wi-Fi' 等定位模式下的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

点击 `History`，您可以查看选定日期的所有历史定位数据。
点击右上角的定位图标查看所有 `Positioning Abnormal` 记录。当 GNSS、Wi-Fi 或蓝牙扫描超时时，相关事件将显示在此页面上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_DataView2.png" alt="pir" width={800} height="auto" /></p>

如果设备触发拆卸报警，在触发期间每个数据包旁边将显示红色报警图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

当触发拆卸报警时，会向您的手机发送报警通知消息。此外，拆卸报警将出现在应用的 `Device` 和 `Details` 页面上，并伴有通知窗口，帮助用户快速检查设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm_Message.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

[SenseCAP Portal](https://sensecap.seeed.cc/portal/#/dashboard) 的主要功能是管理 SenseCAP 设备和存储数据。它基于微软安全可靠的云服务 Azure 构建。用户可以申请账户并将所有设备绑定到此账户。SenseCAP Portal 提供网页门户和 API。网页门户包括仪表板、设备管理、数据管理和访问密钥管理。API 向用户开放以供进一步开发。

- **仪表板：** 包括设备概览、公告、场景数据和数据图表等。
- **设备管理：** 管理 SenseCAP 设备。
- **数据管理：** 管理数据，包括数据表和图表部分，提供搜索数据的方法。
- **子账户系统：** 注册具有不同权限的子账户。
- **访问密钥管理：** 管理访问密钥（用于访问 API 服务），包括密钥创建、密钥更新和密钥检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录 [SenseCAP Portal](http://sensecap.seeed.cc)

如果您已通过应用创建账户，可以直接登录。

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

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
