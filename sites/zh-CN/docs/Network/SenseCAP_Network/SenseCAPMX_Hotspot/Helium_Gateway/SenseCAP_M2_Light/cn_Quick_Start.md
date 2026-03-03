---
description: SenseCAP M2 Light Gateway 快速入门
title: SenseCAP M2 Light Gateway 快速入门
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start
last_update:
  date: 03/23/2023
  author: Yvonne
---

## **步骤 1：连接 SenseCAP M2**

将天线、电源适配器和以太网线（非必需）连接到热点设备并通电。

**电源 LED** 将显示为**红色**，大约 15 秒后（如果使用 PoE 供电，等待时间会稍长一些），顶部指示灯将闪烁**绿色**，表示热点设备正在启动。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**PoE 连接**

SenseCAP M2 支持 PoE（以太网供电），兼容 IEEE 802.3 af 标准。如果您的调制解调器/路由器不支持 PoE，您需要一个额外的 PoE 交换机作为 PSE（供电设备）提供 40V-57V 直流电源。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **步骤 2：将 SenseCAP M2 连接到 APP**

- 安装 Helium [钱包应用](https://docs.helium.com/wallets/helium-wallet-app)和 SenseCAP Hotspot 应用

为您的 SenseCAP Hotspot 应用创建一个账户。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- 选择"Helium"并将您的 Helium 钱包链接到 SenseCAP Hotspot 应用。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- 在钱包页面点击"Onboard New Hotspot"并选择"SenseCAP M2"进行配置

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- 按住 M2 的按钮 5 秒直到蓝色指示灯缓慢闪烁进入配置模式，然后按照应用中的说明连接 SenseCAP M2。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**注意**：请为 SenseCAP M2 Light Hotspot 选择"**SenseCAP M2**"。如果您周围有多个热点设备，您可以通过热点名称下方的 6 位 MAC 地址来识别热点设备。

- 设置 Wi-Fi 连接

点击"Scan Networks"，选择 Wi-Fi 并输入密码；或者如果您已经使用以太网线或 SIM 卡（4G 版本），请点击"Use Ethernet Instead"。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **步骤 3：将 SenseCAP M2 添加到区块链**

- 设置并确认您热点设备的位置，然后将您的热点设备添加到区块链。

**注意：** SenseCAP M2 Light Hotspot 的购买价格已包含 40 美元的 Helium 网络激活费和首次位置断言费 10 美元（总价值 50 美元）。您可以设置位置并在需要时更改到另一个位置，但每次将热点设备移动到新位置时，您需要再次支付 10 美元的位置断言费。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

现在您已经将 SenseCAP M2 添加到区块链（指示灯将闪烁白色），但您的设备仍然**无法提供 Helium 覆盖**，请查看步骤 4 来激活您的热点设备。

## **步骤 4：激活 SenseCAP M2 Light Hotspot**

[![如何兑换 SenseCAP 许可证卡](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)

- 使用您的 SenseCAP Hotspot App 账户登录 [SenseCAP Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard)

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- 点击 **兑换许可证** 并输入您兑换卡上的兑换码。

**注意**：请不要与他人分享您的兑换码。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)

- 点击确认按钮，然后您将收到一个许可证。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- 点击 **应用** 并选择您要激活的热点。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- 然后您的热点将开始提供 Helium LoRaWAN 覆盖，设备上的指示灯将变为绿色。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)

#### **购买 SenseCAP M2 Light Hotspot 许可证**

[![如何购买 SenseCAP 许可证](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

许可证过期后，您可以直接从 [SenseCAP Hotspot Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) 购买并将其应用到您的设备，无需再次购买兑换卡。

- 访问许可证页面并点击 **购买许可证** 按钮

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- 选择许可证计划和数量，然后点击结账按钮

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- 确认您的订单并使用 PayPal 付款

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- 然后您可以在 **许可证** 列表中查看您的许可证

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- 点击 **应用** 并选择您要激活的热点。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- 然后您的热点将开始提供 Helium LoRaWAN 覆盖，设备上的指示灯将变为绿色。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)
