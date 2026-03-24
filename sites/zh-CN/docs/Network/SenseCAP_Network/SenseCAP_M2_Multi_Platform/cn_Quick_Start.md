---
description: 快速入门
title: 快速入门
keywords:
  - gateway
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
createdAt: '2023-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/quick_start_with_M2_MP/
---


## POE 连接

SenseCAP M2 支持 PoE（以太网供电），兼容 IEEE 802.3 af 标准。

:::tip
如果你的调制解调器/路由器不支持 PoE，你需要额外准备一个 PoE 交换机，作为 PSE（供电设备）提供 40V-57V 直流电源。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## 网关网络配置

将天线和电源适配器连接到网关。
电源指示灯会显示为红色，大约 15 秒后，顶部指示灯会闪烁绿色，表示网关正在启动。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

有两种方式连接到互联网。请选择适合你的方式。

### 以太网连接

将网线连接到以太网端口，如果网关成功连接到互联网，顶部指示灯会常亮绿色。

### WIFI 连接

用户有两种方式登录 Luci 配置页面。

#### 通过路由器访问

- 步骤 1：将你的设备连接到网线，并将你的电脑连接到同一台路由器

:::note
 你的电脑和设备应连接到同一台路由器/同一网络。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：获取设备的 IP 地址

在路由器管理页面查看你设备的 IP 地址。

- 步骤 3：获取设备用户名和密码

你可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：登录 Luci

在浏览器中输入设备的 IP 地址进入 Luci 页面。
然后输入设备的用户名和密码进行登录。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### 通过设备 AP 热点访问

- 步骤 1：打开设备 AP 热点

长按按键 5 秒，直到蓝色指示灯慢速闪烁，进入配置模式。

- 步骤 2：连接到 AP 热点
AP 热点名称为 SenseCAP_XXXXXX（6 位 MAC 地址），默认密码为 12345678；将你的电脑连接到此 AP 热点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- 步骤 3：获取设备用户名和密码

你可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：登录本地控制台

在浏览器中输入 IP 地址（192.168.168.1）进入本地控制台。然后输入设备的用户名和密码，并点击 Login 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### 连接到 WIFI

- 步骤 1：点击 `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：点击 `Scan` 按钮扫描 WIFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：选择你的 WI-FI 加入网络

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：输入 Wi-Fi 密码，然后点击 `Submit` 并保存

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

然后点击 Save and Apply 以应用你的设置

如果网关成功连接到 WIFI，顶部指示灯会常亮绿色

### 蜂窝网络连接（适用于 4G 版本）

- 步骤 1：将 SIM 卡插入 Nano-SIM 卡槽

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- 步骤 2：登录 Luci 页面，然后点击 `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：设置 APN 信息，然后点击 `Save and Apply` 以应用你的设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
为减少数据消耗，请查看 [Low Data Consumption Mode Config](https://wiki.seeedstudio.com/cn/traffic_saving_config)。
:::

### 信道计划设置

导航到 `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

设置完成后，点击 `Save&Apply`。

### 检查网关连接状态

网关上电后，你可以通过以下两种方式检查网关工作状态：

#### LED 指示灯

<table>
<tr><th colspan="2" valign="top"><b>模式</b></th><th colspan="1" valign="top"><b>说明</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>绿色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">网关状态正常，互联网连接良好。</td></tr>
<tr><td colspan="1" valign="top">慢闪</td><td colspan="1" valign="top">网关正在启动，请稍候。</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>蓝色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top"><p>网关已准备好进行互联网连接。</p><p>需要进一步配置。</p></td></tr>
<tr><td colspan="1" valign="top">慢闪</td><td colspan="1" valign="top">配置模式，如果无操作，5 分钟后会自动退出。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>快闪</p></td><td colspan="1" valign="top">长按按键 30 秒，直到指示灯快速闪烁，将触发出厂重置。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>橙色</p></td><td colspan="1" valign="top"><p></p><p>慢闪</p></td><td colspan="1" valign="top">固件正在更新，请不要关闭网关电源或断开网络。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>白色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top">网关仅带有出厂固件，连接到互联网后会自动更新到最新固件。</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>红色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">硬件故障或互联网连接失败。</td></tr>
<tr><td colspan="1" valign="top">慢闪</td><td colspan="1" valign="top">网关未连接到 LNS。</td></tr>
</table>

#### SenseCAP Mate APP

在 SenseCAP Mate App 中，当网关已连接到网络时，`Online status` 会显示为 `Online`。
获取 SenseCAP App 的方法请参考下一章节。

## 绑定网关

SenseCAP Mate APP 支持设备配置和远程管理。

- 步骤 1：下载 SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- 步骤 2：登录 APP
如果这是你第一次使用 SenseCAP 平台，请先注册账号。

:::tip
请选择 Global 作为服务器位置。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- 步骤 3：添加设备

点击右上角的 `+` 并选择 Add device
然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

设置你的设备名称和位置。然后确认你的设置。
绑定成功后，你将在设备目录中看到你的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## 连接 SenseCAP 传感器

- 步骤 1：添加设备

点击右上角的 `+` 并选择 Add device
然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- 步骤 2：选择频率计划

点击 `Settings`，设置平台和频率，频率应与你的网关频率一致。

例如：如果你的网关是 US915 版本，则需要将传感器设置为 US915 频率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway 无法连接到 Helium 网络。
:::

关于 SenseCAP 传感器的更多配置，请参考：SenseCAP Sensors

## SenseCAP Portal 和 Mate APP

SenseCAP Mate APP 和 SenseCAP Portal 可用于查看设备状态并进行设备管理。

- [适用于 iOS 的 SenseCAP Mate APP（App Store）](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [适用于 Android 的 SenseCAP Mate APP（Google Play Store）](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### 网关信息

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看网关信息

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### 传感器数据

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看传感器数据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
