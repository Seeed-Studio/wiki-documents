---
description: reComputer R1225 LoRaWAN 网关快速上手
title:  快速上手
keywords:
- 网关
- SenseCAP
- 边缘控制器
- reComputer R1225 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/13/2026
  author: Kian
---

## 供电连接

### 使用电源适配器供电

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 支持 12&#126;24V 的交流额定电压或 9&#126;36V 的直流电压供电。电源通过 2 针电源端子排连接器接入。要对 reComputer R1225 接地，可以将接地线固定在电源端子左上角的螺丝上。

:::note
该供电方案采用桥式整流二极管进行反接保护，兼容交流和直流输入。这确保了**无论电源正负极如何接入**，电路都不会损坏。通过使用桥式整流器，输出电压极性在输入直流极性变化时仍保持不变，从而提供有效的反接保护。
:::

### PoE 供电

安装 PoE 模块后，reComputer R1225 的 ETH0 接口可以支持 PoE 供电，从而通过以太网为设备供电，既方便又高效。该选项简化了安装过程并减少了所需布线数量，非常适合电源受限或电源插座不易获得的应用场景。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

:::tip
需要注意的是，随 reComputer R1225 提供的 PoE 模块符合 IEEE 802.3af 标准，最大可提供 12.95W 的功率。**因此，如果需要连接 SSD 或 4G 模块等高功耗外设，PoE 供电可能无法满足需求**。在这种情况下，建议改用 AC/DC 端子供电，以确保设备稳定可靠运行。
:::

## 访问 Seeed Gateway OS 管理界面

### 通过路由器访问

- 步骤 1：将 R1225 连接到一根以太网网线，并将电脑连接到同一台路由器

:::note
 你的电脑和设备应连接到同一台路由器/同一网络。
:::

#### 网络连接示意图

首次使用 R1225 时，如果附近有路由器和以太网网线，可以选择通过有线连接的方式将 R1225 接入网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了 Wifi，即使不插网线，也可以通过访问路由器分配的 IP 进入管理界面-->

:::tip
在初始设置过程中，如果你已经配置了 Wi-Fi，即使没有插入以太网网线，只要电脑和 R1225 连接到同一个 Wi-Fi 网络，也可以通过输入 R1225 的 IP 地址访问 Luci 界面。
:::

- 步骤 2：获取设备的 IP 地址

在路由器管理页面中查看设备的 IP 地址。

- 步骤 3：获取设备的用户名和密码

  - 用户名：admin
  - 密码：null  （**首次登录无需密码**）

- 步骤 4：登录 Luci

在浏览器中输入设备的 IP 地址进入 Luci 页面。
然后输入设备的用户名和密码进行登录，并点击 Login 按钮。

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>

### 通过设备 AP 热点访问

- 步骤 1：开启 R1225

- 步骤 2：连接到 AP 热点

  - SSID：R1225-XXXX（**SN 的后 4 位数字**）
  - 密码：1234567890

reComputer R1225 首次上电时会自动启用热点模式。热点的默认 SSID 为 “R1225-XXXX（**SN 的后 4 位数字**）”，默认密码为 “1234567890”，请将电脑连接到此 AP 热点。

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={400} height="auto" /></p>

- 步骤 3：获取设备的用户名和密码

  - 用户名：admin
  - 密码：null  （**首次登录无需密码**）

- 步骤 4：登录 Luci

在浏览器中输入 IP 地址（192.168.168.1）进入本地控制台。然后输入设备的用户名和密码，并点击 Login 按钮。

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## R1225 网络配置

### 以太网连接

### WIFI 连接

- 步骤 1：点击 `Network` - `Wireless`

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- 步骤 2：点击 `Scan` 按钮扫描 WIFI

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- 步骤 3：选择你的 WI-FI 加入网络

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- 步骤 4：输入 Wi-Fi 密码，然后点击 `Submit` 并保存

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

然后点击 Save and Apply 以应用你的设置

如果网关成功连接到 WIFI，顶部的指示灯会常亮绿色

### 蜂窝网络连接（适用于 4G 版本）

- 步骤 1：将 SIM 卡插入 Nano-SIM 卡槽

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- 步骤 2：登录 Luci 页面，并点击 `Network` - `Cellular`

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- 步骤 3：设置 APN 信息，并点击 `Save and Apply` 以应用你的设置

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## R1225 LoRaWAN 配置

### 选择内置 Chirpstack 平台

### 信道计划设置

### 绑定 R1225 LoRaWAN 网关

### 检查网关连接状态
