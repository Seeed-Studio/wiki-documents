---
description: reComputer R1225 LoRaWAN 网关快速上手
title: reComputer R1225 LoRaWAN 网关快速上手
keywords:
  - 网关
  - SenseCAP
  - 边缘控制器
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/25/2026
  author: Kian
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/cn/r1225_quick_start/
updatedAt: '2026-03-30'
---
# 快速上手

## 供电连接

### 使用电源适配器供电

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 支持 12&#126;24V 的额定 AC 电压或 9&#126;36V 的 DC 电压供电。电源通过 2 针电源端子排连接器接入。要对 reComputer R1225 接地，可以将接地线固定在电源端子左上角位置的螺丝上。

:::note
该电源方案使用桥式整流二极管进行反接保护，兼容 AC 和 DC 输入。这确保了**无论电源的正负极如何接入**，电路都不会损坏。通过使用桥式整流器，可以在不受输入 DC 极性影响的情况下保持输出电压极性固定，从而提供有效的反向极性保护。
:::

### PoE 供电

安装 PoE 模块后，reComputer R1225 的 ETH0 端口即可支持 PoE 供电，通过以太网为设备供电，既方便又高效。这种方式简化了安装过程并减少了所需布线，非常适合电源资源有限或电源插座不易获得的应用场景。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::tip
需要注意的是，随 reComputer R1225 提供的 PoE 模块符合 IEEE 802.3af 标准，最大供电能力为 12.95W。**因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 供电可能无法满足需求**。在这种情况下，建议改用 AC/DC 端子供电，以确保设备稳定可靠运行。
:::

## 访问 Seeed Gateway OS

### 通过路由器访问

- 步骤 1：将 R1225 接入以太网网线，并将电脑连接到同一台路由器

:::note
 你的电脑和设备应连接到同一台路由器/同一网络。
:::

#### 网络连接示意图

首次使用 R1225 时，如果附近有路由器和以太网网线，你可以选择通过有线连接的方式将 R1225 接入网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram1.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了 Wifi，即使不插网线，也可以通过访问路由器分配的 IP 进入管理界面-->

:::tip
如果已经配置了 Wi-Fi，只要你的电脑和 R1225 处于同一网络，即使没有插以太网网线，也可以通过 R1225 的 IP 地址访问 LuCI 界面。
:::

- 步骤 2：获取设备的 IP 地址

在路由器管理页面中查看你设备的 IP 地址。

- 步骤 3：获取设备用户名和密码

  - 用户名：admin
  - 密码：null  (**首次登录无需密码**)

- 步骤 4：登录 Luci

在浏览器中输入设备的 IP 地址进入 Luci 页面。
然后输入设备的用户名和密码进行登录，并点击 Login 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

### 通过设备 AP 热点访问

:::caution
R1225 首次开机时，其 Wi-Fi 热点默认保持开启 5 分钟。之后 R1225 的热点将自动关闭。
:::

- 步骤 1：开启 R1225

插上 reComputer R1225 LoRaWAN 网关电源，设备会自动开机。

- 步骤 2：连接到 AP 热点

  - SSID：R1225-XXXX（**SN 的后 4 位数字**）
  - 密码：1234567890

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_AP.png" alt="pir" width={450} height="auto" /></p>

reComputer R1225 首次上电时会自动启用热点模式。热点的默认 SSID 为 “R1225-XXXX（**SN 的后 4 位数字**）”，默认密码为 “1234567890”，请将电脑连接到此 AP 热点。

- 步骤 3：获取设备的 IP 地址

连接到 SSID 为 R1225-XXXX 的 AP 后，点击右上角的详情图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi.png" alt="pir" width={450} height="auto" /></p>

点击打开系统设置中的“网络和 Internet”页面，然后滚动到页面底部找到 IP 地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi2.png" alt="pir" width={450} height="auto" /></p>

- 步骤 4：获取设备用户名和密码

  - 用户名：admin
  - 密码：null  (**首次登录无需密码**)

- 步骤 5：登录 Luci

在浏览器中输入 IP 地址（192.168.2.1）进入本地控制台。  
然后输入设备的用户名和密码，并点击 Login 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

## R1225 网络配置

### 以太网连接

以太网为即插即用，无需进行任何配置。
<!--补充图片和内容-->

### WiFi 连接

- 步骤 1：点击 `Network` - `Wi-Fi`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi1.png" alt="pir" width={200} height="auto" /></p>

- 步骤 2：点击 `Scan` 按钮扫描 WiFi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：选择你的 Wi-Fi 加入网络

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi3.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：输入 Wi-Fi 密码，然后点击 `Submit` 并保存

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi5.png" alt="pir" width={800} height="auto" /></p>

- 步骤 5：点击 `Save & Apply` 以应用配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi6.png" alt="pir" width={800} height="auto" /></p>

### 蜂窝网络连接（4G 版本）

- 步骤 1：将 SIM 卡插入 Nano-SIM 卡槽

请使用我们提供的导轨卡扣插入 SIM 卡槽旁边的小孔，然后再插入你的 SIM 卡。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE.png" alt="pir" width={400} height="auto" /></p>

- 步骤 2：登录 Luci 页面，并点击 `Network` - `LTE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE1.png" alt="pir" width={200} height="auto" /></p>

- 步骤 3：设置 APN 信息，然后点击 `Save & Apply` 以应用配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE2.png" alt="pir" width={800} height="auto" /></p>

## R1225 LoRaWAN 配置

- 步骤 1：点击 `LoRa` - `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa1.png" alt="pir" width={200} height="auto" /></p>

- 步骤 2：勾选 `Enable LoRa functionality`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：点击 `Save & Apply` 以应用配置

### 信道计划设置

- 步骤 1：进入 `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan1.png" alt="pir" width={200} height="auto" /></p>

- 步骤 2：选择 `Region` 和 `Channel-plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：点击 `Save & Apply` 以应用配置

### 选择内置 Chirpstack 平台

:::tip
R1225 预装了 ChirpStack（开源 LoRaWAN 网络服务器）。
:::

- 步骤 1：选择 `Platform Type` - `ChirpStack`

- 步骤 2：查看 **EUI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack1.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：点击左下角的 `Open ChirpStack Application Server`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack2.png" alt="pir" width={800} height="auto" /></p>

- 步骤 4：登录 Chirpstack 云平台

  - 用户名/邮箱：admin

  - 密码：admin

默认的用户名和密码都是 “admin”

然后点击 `Submit` 进入 Chirpstack 平台界面

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack3.png" alt="pir" width={800} height="auto" /></p>

### 绑定 R1225 LoRaWAN 网关

- 步骤 5：导航到 `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

- 步骤 6：输入 `Gateway Name` 和 `Gateway ID (EUI: 64)`

  - 网关名称：你的网关的名称

  - 网关 ID(EUI64)：网关 EUI 可以在设备标签或本地控制台上找到

  - 统计间隔（秒）：网关发送统计信息的预期间隔（单位：秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

然后点击 `Submit`

### 检查网关连接状态

完成所有配置步骤后，网关应在 ChirpStack 平台上显示为 **`Online`**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack6.png" alt="pir" width={800} height="auto" /></p>

#### 网关数据

导航到 Gateways，选择你想要检查的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack7.png" alt="pir" width={800} height="auto" /></p>
