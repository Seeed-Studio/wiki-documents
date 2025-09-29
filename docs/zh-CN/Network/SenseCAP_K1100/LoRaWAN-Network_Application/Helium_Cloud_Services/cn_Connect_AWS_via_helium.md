---
description: AWS IoT 平台集成
title: AWS IoT 平台集成
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connect_AWS_via_helium
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 通过 Helium 连接 AWS IOT Core

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/AWS_IOT_Monitor.png" /></div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、二氧化碳、电导率以及一体化 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>SenseCAP 工业传感器</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

## 介绍 AWS IoT Core

AWS IoT Core 提供了将您的 IoT 设备连接到其他设备和 AWS 云服务的云服务。AWS IoT 提供了设备软件，可以帮助您将 IoT 设备集成到基于 AWS IoT 的解决方案中。如果您的设备可以连接到 AWS IoT，那么 AWS IoT 可以将它们连接到 AWS 提供的云服务。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/what-is-aws-iot.png" /></div>

AWS IoT 允许您为您的解决方案选择最合适和最新的技术。为了帮助您管理和支持现场的 IoT 设备，AWS IoT Core 支持以下协议：

- MQTT（消息队列遥测传输）
- 基于 WSS（安全 WebSocket）的 MQTT
- HTTPS（超文本传输协议 - 安全）
- LoRaWAN®（长距离广域网）

AWS IoT Core 是一个强大的产品，允许开发人员在 AWS 云上构建基于设备的应用程序和服务。而通过 Helium Console 的集成可以自动化安全连接设备到 AWS IoT Core 的复杂过程。

:::note
您可能需要为 AWS IoT Core 支付费用以体验本教程的全部内容。您可以在[此处](https://calculator.aws/#/estimate)估算详细的费用和成本。

根据我们提供的代码的发送频率（大约每 15 秒发送一次数据），一个月内将发送大约 178,560 条消息，消息大小约为 3 到 4 KB，每月费用约为 0.18 美元。
<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/K1100/66.png"/></div>
:::

## 注册 AWS IoT Core

请访问 [AWS IoT Core 网站](https://portal.aws.amazon.com/billing/signup#/start/email) 并注册一个账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/45.png" /></div>

填写您的注册邮箱地址和用户名，您将收到来自 AWS 的一封包含六位数验证码的邮件，用于完成注册。

输入您的验证码后，注册完成。使用您刚刚填写的邮箱地址登录 AWS IoT Core。

登录后，您需要继续填写个人信息，例如密码和联系方式。然后，您需要绑定一张信用卡以验证您的个人信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/46.png" /></div>

当我们登录到 AWS IoT Core 控制台时，只需选择 **Root user** 进行登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/48.png" /></div>

## 创建 AWS IoT Core 的访问权限

在 AWS 上创建一个具有有限权限的新用户，以供此集成使用。

1. 打开 [AWS 控制台](https://console.aws.amazon.com/)。

2. 点击左上角的 **Services** 菜单，进入 **Security, Identity, & Compliance**，然后点击 **IAM**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/47.png" /></div>

我们现在将创建一个新的 **用户**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/49.png" /></div>

设置用户名并仅选择 **Access key - Programmatic access**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/50.png" /></div>

在下一页中，选择 **Attach existing policies directly**，然后在 **Filter Policies** 框中输入 **AWSIoTConfigAccess**，并勾选该行左侧的复选框。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/55.png" /></div>

对于其他页面，我们保持默认或留空，只需点击右下角的 **Next**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/51.png" /></div>

我们现在为新创建的用户附加一个策略，以定义他们拥有的权限。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/52.png" /></div>

:::note

请确保您记录并安全存储这些密钥，因为您将无法再次访问它们！
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/56.png" /></div>

## 在 Helium 中添加 AWS IoT Core 集成

我们可以返回到 [Helium 控制台](https://console.helium.com/integrations)，创建 AWS IoT Core 到 Helium 的集成。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/43.png" /></div>

在新页面中点击 **Add Integration**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/44.png" /></div>

使用 **创建 AWS IoT Core 访问权限** 中生成的 Access Key 和 Secret Key 分别填写 Helium 的 AWS IoT Core 集成。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/57.png" /></div>

在 Region 中，需要填写与 AWS IoT Core 服务器所在地址相同的区域代码。这可以在 AWS IoT Core 控制台右上角的用户名处找到。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/61.png" /></div>

高亮区域可以由用户调整。例如，这里我选择了服务器所在的区域为 **US East (N. Virginia)**，区域代码为 **us-east-1**。相应地，在 Helium 的 Region 中需要填写 **us-east-1**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/62.png" /></div>

Topic 字段是此集成将设备的上行消息发布到的 AWS IoT MQTT 主题。

最后，我们为新的集成命名并点击 Create Integration。您的新集成现在已准备好使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/58.png" /></div>

## 将集成连接到设备

现在，使用 Helium 控制台中的点击和拖动界面，将设备连接到功能（解码器）并连接到 AWS IoT Core，如[之前](https://wiki.seeedstudio.com/cn/Helium-Introduction/#helium-console-flows)所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/59.png" /></div>

此时，按照[之前的步骤](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#upload-code-send-data-to-helium)再次上传代码，Wio Terminal 将重新连接到 Helium 并上传数据。

我们还可以通过检查串口监视器返回的数据来了解数据发送是否成功。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

在 AWS IoT Core 控制台中，搜索 **IoT Core** 以访问数据管理界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/60.png" /></div>

- 在 **Monitor** 面板中，您可以查看并设置多个数据检测面板，以更直观地查看传感器数据的接收情况。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_1.png" /></div>

- 在 **AWS IoT Core -> All devices -> Things** 中，您可以查看当前设备的 ID 信息，还可以在 **AWS IoT Core -> All devices -> Things -> Activity** 中查看数据的活动状态。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/63.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_4.png" /></div>

- 您可以在 **AWS IoT Core -> MQTT test client** 中查看数据的上行消息。

在 **Subscribe to a topic** 选项卡中，输入 topicName 以订阅您的设备发布消息的主题。对于入门示例应用程序，订阅 **#**，它会订阅所有消息主题。

主题消息日志页面 **#** 打开，并且 **#** 出现在 **Subscriptions** 列表中。如果您在配置设备时运行了示例程序，您应该会在 **#** 消息日志中看到设备发送到 AWS IoT 的消息。当订阅的主题接收到消息时，消息日志条目将显示在 Publish 部分下方。

发布到订阅主题的消息会在接收时显示在消息日志中，最新消息排在最前面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/64.png" /></div>

接收到的消息类似于下图所示。对我们有用的数据通常是 **payload** 后面的内容，它显示了传感器的值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/65.png" /></div>

至此，我们已经完成了 Helium 与 AWS IoT Core 的全部集成。如果您希望通过 AWS IoT Core 对数据进行更多操作，可以参考 [AWS IoT Core 文档中心](https://docs.aws.amazon.com/iot/index.html) 以继续深入学习。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>