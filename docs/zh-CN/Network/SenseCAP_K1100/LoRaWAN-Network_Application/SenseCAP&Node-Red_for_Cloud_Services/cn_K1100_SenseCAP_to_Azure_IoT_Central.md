---
description: SenseCAP & Node-RED 连接到 Microsoft Azure IoT Central
title: SenseCAP & Node-RED 连接到 Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_SenseCAP_to_Azure_IoT_Central
last_update:
  date: 1/12/2023
  author: shuxu hu
---

# 通过 Node-RED 将 SenseCAP 连接到 Azure IoT Central

**SenseCAP K1100 - 传感器原型套件** 是 Seeed Studio 集中 LoRa® 通信技术和边缘智能产品精华的代表，旨在让 LoRa® 和物联网应用的部署和掌握变得更加简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、EC 传感器以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) 是一组由 Microsoft 管理的云服务，用于连接、监控和控制数十亿个 IoT 设备。它包括设备和设备的安全性和操作系统，以及帮助企业构建、部署和管理 IoT 应用程序的数据和分析功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Microsoft Azure IoT Central

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) 是一个完全托管的全球 IoT SaaS（软件即服务）解决方案，使您能够轻松地大规模连接、监控和管理 IoT 设备。它具有高度的安全性，能够随着您的业务增长而扩展，确保您的投资具有可重复性，并与现有的业务应用程序集成。它还弥合了业务应用程序与 IoT 数据之间的差距。最后，它提供了集中管理功能，用于重新配置和更新您的设备。

本章内容将继续使用前面介绍的 Node-RED，并通过 Node-RED 实现对 Microsoft Azure IoT Central 中 K1100 套件的管理。

如果您尚未安装或不了解 Node-RED，请参考 [Node-RED & SenseCAP 教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/)。

## 安装 SenseCraft

**SenseCraft** 是一个开源软件平台，用于通过无代码方式构建智能传感器。它提供了一个开箱即用的完整解决方案，可以以最快速、最简单的方式感知现实世界、处理数据并将数据发送到云端，无需任何编程经验！它现在兼容 Wio Terminal。

通过使用 SenseCraft，我们可以直接将 K1100 套件的传感器值传输到 SenseCAP 平台，而无需编程。当然，这一切是通过 **LoRaWAN**® 实现的。

:::note
如果您希望通过 **WiFi (MQTT)** 访问 Azure IoT Central，请参考此 [Wiki](https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Azure-IoT-Central/)。
:::

**步骤 1.** 将固件下载到您的电脑

在 **Latest release** 下，点击 **SenseCraft-vx.x.uf2** 下载 .uf2 文件。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 2.** 将固件上传到 Wio Terminal

将 Wio Terminal 连接到电脑并打开电源，进入 **Bootloader 模式**：将电源开关向远离 "ON" 位置的方向滑动，松开，再次滑动并松开。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
当 Wio Terminal 进入 Bootloader 模式后，蓝色 LED 将以不同于闪烁的方式开始“呼吸”。
:::

打开电脑上的文件资源管理器，您会看到一个名为 **Arduino** 的新外部驱动器，将之前下载的 **.uf2 文件**拖入此 **Arduino 驱动器**。

现在我们已经成功将 SenseCraft 上传到 Wio Terminal。

## 创建 MQTT 节点

**步骤 1.** 启动 Node-RED

通过在终端中输入命令 `node-red` 启动 Node-RED，然后打开浏览器，在地址栏中输入 [http://localhost:1880](http://localhost:1880) 以访问 Node-RED 编辑器。

**步骤 2.** 创建 MQTT 节点

我们使用 **Network -> mqtt in** 节点，并按照 [前面的教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/#mqtt-node) 中的要求配置 SenseCAP API 格式的 mqtt。

- 服务器: openstream.api.sensecap.seeed.cc
- 端口: 1883
- 协议: MQTT V3.1.1
- 客户端 ID: 格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>` 您的组织 ID。我们已在 [获取 SenseCAP API](/cn/K1100_sensecap_node-red#get-the-sensecap-api) 中获得。
  - `<Random ID>` 使用您自己随机生成的数字或小写字母。

- 主题格式: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已在获取 SenseCAP API 中获得。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">传感器设备的唯一标识。此信息可以在 Grove - Wio E5 背面的标签上找到，也可以在 SenseCAP 控制台设备中找到。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">设备上连接传感器的物理接口。对于 K1100 套件，这里的默认值是 1。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">保留字段。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">测量值 ID。此 ID 可以在 <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP 文档</a> 的测量 ID 部分中找到。</td>
    </tr>
  </tbody></table>

**步骤 3.** 验证 MQTT 节点

配置完成后，请点击右上角的 **Deploy** 按钮，检查配置是否成功。如果填写正确，则会显示 **Connected** 字样。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 配置 Microsoft Azure IoT Central

**步骤 1.** 登录 Azure IoT Central

请访问 [Azure IoT Central](https://apps.azureiotcentral.com/home) 官方网站，从左侧导航菜单中点击 **Build**，然后点击 **Custom apps**。

如果您尚未登录 Azure IoT Central，此时需要完成注册/登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**步骤 2.** 填写 **Application name** 并在 **Pricing plan** 下选择 **Standard 0**。当您填写应用名称时，应用 URL 会自动生成。在本示例中，我们将以最低成本完成此任务。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
如果您是 Azure IoT Central 的新用户，我们建议选择 **Free**，这样不会产生费用。
:::
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**步骤 3.** 点击 **Create** 创建新应用。现在，您已成功设置 Azure IoT Central！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/3.png" /></div>

**步骤 4.** 创建设备模板

请通过点击左侧菜单栏中的 **Device templates** 创建一个新设备模板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

请选择 **Wio Terminal** 作为我们的模板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

然后点击 **Create**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

接着，一个现成的模板就创建好了。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**步骤 5.** 创建设备

点击左侧菜单栏中的 **Devices -> Seeed Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

点击 **New**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

点击 **Create** 按钮完成设备创建。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

创建设备后，您将在 **Device** 下看到刚刚创建的设备，请进入设备并点击左上角的 **Connect** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

这里我们需要以下信息：

```
ID scope
Device ID
Primary key
```

请记录下这些信息，我们将在接下来的步骤中使用。

## 配置 Node-RED

**步骤 1.** 下载 Azure IoT 插件

点击右上角菜单栏并选择设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

在 **Paletts -> Install** 中搜索并安装 **node-red-contrib-azure-iot-central**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png" /></div>

**步骤 2.** 配置 Azure IoT Central 节点

从左侧功能栏中拖出 Azure IoT Central 节点，双击它进入配置页面，然后点击编辑按钮编辑 Azure IoT Central 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png" /></div>

配置需要填写如下内容：

- 传输方式：MQTT
- 认证方式：SAS
- Scope ID
- Device ID
- Primary Key

后面三个参数正是我们在 **配置 Microsoft Azure IoT Central** 中获取的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png" /></div>

**步骤 3.** 配置功能节点

向 Azure IoT Central 报告数据需要遵循特定的数据格式，因此需要添加一个功能节点来处理数据格式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png" /></div>

从左侧功能栏中拖出功能节点，双击它进入编辑页面，然后将代码复制到 On Message 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if(length>=2){
        var measurementId = strs[length-1]
        var body = {}
        var value = payload.value
        if(measurementId==4100){
            body.co2 = value
        }else if(measurementId==4103){
            body.soilmoisture= value
        }else if(measurementId==4150){
            body.accelX= value
        }else if(measurementId==4151){
            body.accelY = value
        }else if(measurementId==4152){
            body.accelZ = value
        }else if(measurementId==4192){
            body.soundintensity = value
        }else if(measurementId==4193){
            body.lightIntensity = value
        }else if(measurementId==4195){
            body.tvoc = value
        }else if(measurementId==4097){
            body.airtemperature = value
        }else if(measurementId==4098){
            body.airhumidity = value
        }else if(measurementId==4175){
            body.AIdetection_1 = value
        }else if(measurementId==4176){
            body.AIdetection_2 = value
        }else if(measurementId==4177){
            body.AIdetection_3 = value
        }else if(measurementId==4178){
            body.AIdetection_4 = value
        }else if(measurementId==4179){
            body.AIdetection_5 = value
        }else if(measurementId==4180){
            body.AIdetection_6 = value
        }else if(measurementId==4181){
            body.AIdetection_7 = value
        }else if(measurementId==4182){
            body.AIdetection_8 = value
        }else if(measurementId==4183){
            body.AIdetection_9 = value
        }else if(measurementId==4184){
            body.AIdetection_10 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

然后我们连接所有节点并点击 **Deploy** 按钮，如果一切设置正确，你将看到 mqtt in 节点显示已连接。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png" /></div>

如果你想查看数据的日志信息，可以在功能节点后添加一个调试节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png" /></div>

一旦 Wio Terminal 开始启动并工作，并开始向 SenseCAP PaaS 服务器发送数据，我们就可以在 Azure IoT Central 上查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png" /></div>

## 数据展示

然而，由于我们尚未设置传感器的类型，因此在 **Raw data** 列中可见的数据被放置在 **Unmodeled data** 中，因此我们需要根据上述代码解析数据。

我们需要更改 **template** 中显示的模板样式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

完成更改后，只需点击 **Save**，然后点击 **Publish**。所有在 **Device template** 中的更改都需要按照此流程保存并发布后才能生效。

:::tip
请根据上面提供的 JavaScript 代码的名称填写此处的 **Display name**。
:::

当然，如果您想丰富数据仪表板页面，您还可以将其配置为在 Overview 中显示。

点击左侧导航菜单中的 **Overview**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

展开 **select a telemetry** 下拉菜单，选择您想要可视化的遥测数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

点击 **Add tile**，您将看到磁贴已添加到 Azure IoT Central 仪表板中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png" /></div>

**注意：** 您可以根据自己的喜好调整磁贴的大小或更改其可视化方式。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png" /></div>

接下来，根据您的喜好自定义传感器数据监控仪表板吧！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png" /></div>

## 故障排查

> 问题1：为什么我在 Node-RED 中找不到 Palette？

答：如果您在设置中找不到 Palette，请检查启动 Node-RED 时终端中的错误信息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最常见的情况是您的 npm 版本过旧，无法启动 Palette 编辑器。

如果您的情况如上所述，请以管理员身份运行 **Powershell**，并输入以下命令以升级 npm。

```sh
npm install -g npm
```

然后重新启动 Node-RED 即可。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>