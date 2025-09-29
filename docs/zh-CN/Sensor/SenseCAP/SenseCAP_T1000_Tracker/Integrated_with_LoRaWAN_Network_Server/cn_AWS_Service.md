---
description: 将 SenseCAP T1000 追踪器连接到 AWS
title: AWS 云服务
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /cn/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 12/4/2024
  author: Leo
---

# 为 SenseCAP T1000 追踪器使用 AWS 云服务

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) 提供云服务，将您的 IoT 设备连接到其他设备和 AWS 云服务。AWS IoT 提供设备软件，可以帮助您将 IoT 设备集成到基于 AWS IoT 的解决方案中。如果您的设备可以连接到 AWS IoT，AWS IoT 可以将它们连接到 AWS 提供的云服务。

登录到 [AWS IoT 控制台](https://console.aws.amazon.com/iot/home)

:::info
如果您没有 AWS 账户，请点击[这里](https://portal.aws.amazon.com/billing/signup)创建一个。
:::

## 添加网关

导航到 `Internet of Things`，然后点击 `IoT Core`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

在左侧菜单中，选择 `LPWAN devices` → `Gateways`，点击 `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`：您网关的 EUI，您可以在设备标签上找到它。<br/>
`Frequency`：网关的频段。<br/>
`Name`：为您的网关命名（可选）<br/>
`SubBand`：可选地，您还可以指定 LoRaWAN 配置数据，例如您想要使用的子频段和可以控制流量流动的过滤器。有关更多信息，请参阅[使用 AWS IoT Core for LoRaWAN 配置无线资源位置](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## 配置您的网关

### 网关证书

为了验证您的网关以便它可以与 AWS IoT 安全通信，您的 LoRaWAN 网关必须向 AWS IoT Core for LoRaWAN 提供私钥和证书。

点击 `Create certificate`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

下载并保存证书文件和服务器信任证书。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

里面应该有四个文件，您稍后将使用它们来配置网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### 网关权限

如果您还没有为您的账户创建 IoTWirelessGatewayCertManagerRole IAM 角色，请在继续添加网关之前创建该角色。
没有此角色，您的网关将无法与 AWS IoT 通信。

选择角色：`IoT Wireless Gateway Cert Manager Role`，然后提交配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

复制 CUPS URL，我们将在下一步中使用它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### 网关配置

登录到网关的 Luci 配置页面，查看[入门指南](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf)了解更多详情。

导航到 `LoRa` > `LoRa Network`。

`Mode`：Basic Station<br/>
`Gateway EUI`：您的网关 eui<br/>
`Server`：CUPS Server<br/>
`URL`：我们之前复制的 CUPS URL<br/>
`Authentication Mode`：TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

复制我们之前下载的证书文件的内容（证书可以以文本形式打开）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

导航到网关页面并选择您已添加的网关。

在网关详情页面的 LoRaWAN 特定详情部分，您将看到连接状态以及接收到最后一次上行链路的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## 添加配置文件

可以定义设备和服务配置文件来描述常见的设备配置。这些配置文件描述了设备共享的配置参数，以便更容易添加这些设备。AWS IoT Core for LoRaWAN 支持设备配置文件和服务配置文件。

### 添加设备配置文件

导航到 `Devices` > `Profiles`，点击 `Add device profile`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

提供设备配置文件名称，选择您用于设备和网关的频段（RfRegion），并将其他设置保持为默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### 添加服务配置文件

导航到 `Devices` > `Profiles`，点击 `Add service profile`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

建议您保持 `AddGWMetaData` 设置启用，这样您将收到每个有效载荷的额外网关元数据，例如数据传输的 RSSI 和 SNR。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### 添加目标

导航到 `Devices` > `Destination`，点击 `Add destination`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

在这里选择 `Publish to AWS IoT Core Message Broker` 并命名目标的 `MQTT topic`

权限：选择现有服务角色 > `IoT Wireless Gateway Cert Manager Role`

:::info
目标名称只能包含字母数字、-（连字符）和 _（下划线）字符，不能包含任何空格。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## 添加 LoRaWAN 设备

### 添加无线设备

导航到 `LPWAN devices` > `Devices`，点击 `Add wireless device`。

`Wireless device specification`：OTAAv1.0x

`DevEUI/APP EUI/APP key`：可以在 SenseCAP Mate APP 中找到，查看 [Get_Started](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker/#get-started) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

选择您在上一步中创建的设备配置文件和目标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

导航到设备页面并选择您之前添加的设备。

在无线设备详情页面的详情部分，您将看到接收日期。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## 配置解码器

### 创建消息规则

导航到 `Message routing` 选项卡 → `Rules`，然后点击 `Create Rule` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

为您的规则命名并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

这里我们根据 [添加目标](#add-destination) 填入 `t1000-raw`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

向下滚动到 `Rule actions` 部分，从 `Action 1` 中选择 `Lambda`，然后点击 `Create a Lambda function`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: 为您的函数命名。<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

点击 `Create function` 按钮创建新函数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

创建函数后，会跳转到函数的配置页面。我们稍后会配置它，所以现在先回到规则页面。

点击刷新按钮并选择您之前创建的 Lambda 函数。然后点击 `Next` 进入步骤 4。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

检查规则的所有详细信息是否正确，然后点击 `Create` 创建规则。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### 配置 Lambda 函数

回到 `Message routing` 选项卡 → `Rules`，选择您之前创建的规则。

从 `Actions` 中点击 `Lambda`，然后点击链接进入 Lambda 函数配置页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

在以下函数配置页面上，将 `index.mjs` 文件重命名为 `index.js`，删除所有代码并替换为来自 [资源](#resource) 的脚本，然后点击 `Deploy` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip 注意
根据您的设备替换 `region` 和 `device id`。
:::

配置解码器后，点击 `Configuration` → `Permissions` → `Edit`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

点击底部的 `View the xxxxxxxxxxx` 角色。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

点击 `Add permissions` → `Attach policies`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

搜索 `AdministratorAccess`，勾选左侧的复选框，然后点击 `Add Permissions`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### 检查数据

在 `MQTT test client` 页面检查数据，输入 `#` 并点击 `Subscribe` 按钮，您将看到数据。

T1000 Tracker 的原始载荷从 `t1000-raw` 发布，解码后的数据从 `tracker/measurement` 发布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## 资源

[SenseCAP T1000 Tracker AWS 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)
