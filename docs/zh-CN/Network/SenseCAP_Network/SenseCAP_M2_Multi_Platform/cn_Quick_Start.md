---
description: Quick_Start
title: 快速开始
keywords:
- gateway
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
---


## POE 连接

SenseCAP M2 支持 PoE（以太网供电），兼容 IEEE 802.3 af 标准。

:::tip
如果您的调制解调器/路由器不支持 PoE，您需要一个额外的 PoE 交换机作为 PSE（供电设备）提供 40V-57V 直流电源。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## 网关网络配置

将天线和电源适配器连接到网关。
电源 LED 将显示红色，大约 15 秒后，顶部的指示灯将闪烁绿色，表示网关正在启动。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

有两种连接互联网的方式。选择适合您的方式。

### 以太网连接

将以太网电缆连接到以太网端口，如果网关成功连接到互联网，顶部的指示灯将显示稳定的绿色。

### WIFI 连接

用户有两种方式登录 Luci 配置页面。

#### 通过路由器访问

- 步骤 1：将您的设备连接到以太网电缆，并将您的 PC 连接到同一路由器。

:::note 您的 PC 和设备应连接到同一路由器/网络。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：获取您设备的 IP 地址

在您的路由器管理页面上查看您设备的 IP 地址。

- 步骤 3：获取您设备的用户名和密码

您可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：登录 Luci

在浏览器中输入您设备的 IP 地址进入 Luci 页面。
然后输入您设备的用户名和密码进行登录。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### 通过设备 AP 热点访问

- 步骤 1：打开设备 AP 热点。

按住按钮 5 秒直到蓝色指示灯缓慢闪烁进入配置模式。

- 步骤 2：连接到 AP 热点。
AP 热点名称为 SenseCAP_XXXXXX（6 位 MAC 地址），默认密码为 12345678；将您的计算机连接到此 AP 热点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- 步骤 3：获取您设备的用户名和密码

您可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：登录本地控制台

在浏览器中输入 IP 地址（192.168.168.1）进入本地控制台。然后输入您设备的用户名和密码，点击登录按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### 连接到 WIFI

- 步骤 1：点击 `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：点击 `Scan` 按钮扫描 WIFI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：选择您的 WI-FI 加入网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：提交 Wi-Fi 密码，然后点击 `Submit` 和 Save。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

然后点击 Save and Apply 应用您的设置。

如果网关成功连接到 WIFI，顶部的指示灯将显示稳定的绿色。

### 蜂窝连接（适用于 4G 版本）

- 步骤 1：将您的 SIM 卡插入 Nano-SIM 卡槽

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- 步骤 2：登录 Luci 页面，点击 `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：设置 APN 信息，点击 `Save and Apply` 应用您的设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
为了减少数据消耗，请查看[低数据消耗模式配置](https://wiki.seeedstudio.com/cn/traffic_saving_config)。
:::

### 信道计划设置

导航到 `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

设置完成后，点击 `Save&Apply`。

### 检查网关连接状态

网关上电后，您有两种方式检查网关工作状态：

#### LED 指示灯

<table>
<tr><th colspan="2" valign="top"><b>模式</b></th><th colspan="1" valign="top"><b>描述</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>绿色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">网关健康且互联网连接良好。</td></tr>
<tr><td colspan="1" valign="top">缓慢闪烁</td><td colspan="1" valign="top">网关正在启动，请等待。</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>蓝色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top"><p>网关已准备好进行互联网连接。</p><p>需要进一步配置。</p></td></tr>
<tr><td colspan="1" valign="top">缓慢闪烁</td><td colspan="1" valign="top">配置模式，如果没有活动将在 5 分钟后自动退出。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>快速闪烁</p></td><td colspan="1" valign="top">按住按钮 30 秒直到指示灯显示快速闪烁将触发恢复出厂设置。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>橙色</p></td><td colspan="1" valign="top"><p></p><p>缓慢闪烁</p></td><td colspan="1" valign="top">固件正在更新，请不要关闭网关电源或断开互联网连接。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>白色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top">网关仅有出厂固件，连接到互联网时将自动更新到最新固件。</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>红色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">硬件问题或互联网连接失败。</td></tr>
<tr><td colspan="1" valign="top">缓慢闪烁</td><td colspan="1" valign="top">网关未连接到 LNS。</td></tr>
</table>

#### SenseCAP Mate APP

在 SenseCAP Mate App 中，当网关连接到网络时，`在线状态` 显示为 `在线`。
请参考下一章节获取 SenseCAP App。

## 绑定网关

SenseCAP Mate APP 支持设备配置和远程管理。

- 步骤 1：下载 SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- 步骤 2：登录 APP
如果这是您第一次使用 SenseCAP 平台，请先注册一个账户。

:::tip
请选择全球服务器位置。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- 步骤 3：添加设备

点击右上角的 `+` 并选择添加设备
然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

设置您的设备名称和位置。然后确认您的设置。
绑定成功后，您将在设备目录中看到您的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## 连接 SenseCAP 传感器

- 步骤 1：添加设备

点击右上角的 `+` 并选择添加设备
然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- 步骤 2：选择频率计划

点击 `设置`，设置平台和频率，频率应与您的网关频率匹配。

例如：如果您的网关是 US915 版本，那么您需要将传感器设置为 US915 频率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway 无法连接到 Helium 网络。
:::

有关 SenseCAP 传感器的更多配置，请参考：SenseCAP Sensors

## SenseCAP Portal 和 Mate APP

SenseCAP Mate APP 和 SenseCAP Portal 可用于检查您的设备状态和设备管理。

- [App Store 上的 iOS 版 SenseCAP Mate APP](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [Google Play Store 上的 Android 版 SenseCAP Mate APP](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### 网关信息

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看网关信息

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### 传感器数据

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看传感器数据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
