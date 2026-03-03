---
description: 通过 TTN 连接到 Datacake
title: 通过 TTN 连接到 Datacake
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /cn/how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 6/10/2025
  author: Zeno
---

# 通过 TTN 连接到 Datacake

## Datacake
Datacake 是一个多功能的低代码物联网平台。它使任何人都能快速构建自定义物联网应用程序，无需编码，并可一键将其转换为白标解决方案。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## 步骤1：连接到 TTN
请参考"[如何将 S210X 传感器连接到 The Things Network](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)"

**注意：** 请在平台设置中选择 **"Other Platform"**。

## 步骤2：从 TTN 上传数据到 Datacake

(1)创建新账户，网站：`https://datacake.co/`  
(2)点击 **"Devices" -> "Add Device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

(3)选择 **"LoranWAN"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

(4)选择 **"New Product from template"** 并搜索 **"Seeed"**，然后选择产品

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

(5)选择 **"The Things Stack V3"**，然后点击 **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

(6)输入 **"DEVEUI"** 和 **"NAME"**，然后点击 **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

-   选择 **"Free"**  
-   点击 **"Add 1 device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

(7)为后续 Webhook 认证创建 API 密钥
-   导航到您的 Datacake 工作区并从侧边栏选择"Members"。  
-   从标签栏选择"API Users"并切换到 API Users 标签。 
-   点击右上角的"Add API User"按钮

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

-   为您的 API 用户输入名称
-   接下来从工作区权限列表中选择"Devices"
-   点击"Add Permission for all Devices in Workspace"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

-   选择"Can record measurements"
-   按"Save"创建令牌

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

-   点击"Copy"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

此 API 令牌现在对您工作区中的所有设备有效。每次创建新设备时，此令牌都会自动适用于该设备。

如果您有兴趣仅为选定设备创建令牌，您可以导航到设备中并从那里选择令牌。但您必须在此处省略"工作区中的所有设备"权限。

(8)在 TTN 上创建集成
-   在 TTN 应用程序的侧边栏中选择"Webhooks"
-   选择"Add webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

-   选择"Datacake"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

-   为您的 Webhook ID 输入名称
-   输入从 Datacake 复制的令牌
-   选择"Create Datacake webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

(9)配置下行链路  
为了能够在您的 TTI 应用程序上排队下行链路，您需要在 Datacake 设备上提供额外的详细信息。要设置配置，请进入相应设备的 LoRaWAN 设置。
-   切换回 Datacake
-   选择"configuration"并向下滚动一点

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

-   选择"Change"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

-   在这里您需要用在 TTN 控制台中找到的信息填写 4 个文本框。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

-   对于 TTS Device ID，这是您在 TTN 应用程序中设备的 ID。您可以在这里找到它：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

-   对于 TTI Server URL，这是您的 TTN 实例向公众开放的 URL。对于公共 TTNv3：`eu1.cloud.thethings.network`

-   对于 TTI App ID，这是您在 TTN 上应用程序的 ID：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

-   创建 TTI API 密钥
-   选择"API keys"然后点击"Add APIkey"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

-   输入名称
-   设置相应的权限以允许排队下行链路
-   点击"Create API key"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

-   创建 API 密钥后，您将看到通知
-   请将您的密钥复制到剪贴板，因为它只会显示一次！
-   将此密钥粘贴到 Datacake 上的设备设置中

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

-   最终设置：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**注意：不要忘记点击"Update"**

-   成功配置下行链路

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

(10)添加有效载荷解码器  
将您的有效载荷解码器复制到这里：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

您也可以在 GitHub 上找到 [SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main)。