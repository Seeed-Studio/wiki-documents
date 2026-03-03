---
description: SenseCAP 与 Node-RED 到 InfluxDB
title: SenseCAP 与 Node-RED 到 InfluxDB
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_SenseCAP_to_influxdb
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# 通过 Node-RED 将 SenseCAP 连接到 InfluxDB

**SenseCAP K1100 - 传感器原型套件** 代表了 Seeed Studio 在 LoRa® 通信技术和边缘智能产品上的精华，旨在最简便地部署和掌握 LoRa® 和物联网应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、二氧化碳、电导率以及 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
          <strong>S2100 <br /> 数据记录仪</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 <br /> 空气温湿度</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 <br /> 光强</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 <br /> 空气温湿度 &amp; CO2</strong>
        </a>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
          <strong>S2104 <br /> 土壤湿度 &amp; 温度</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
          <strong>S2110 <br /> LoRaWAN® 控制器</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
          <strong>S2120 <br /> 8 合 1 气象站</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 关于 InfluxDB

**InfluxDB** 是一个开源的时序数据库，专注于高性能读取、高性能写入、高效存储以及海量时序数据的实时分析。除了支持 HTTP 和 UDP 等原生协议外，它还兼容 CollectD、Graphite、OpenTSDB 和 Prometheus 等组件的通信协议。广泛应用于 DevOps 监控、物联网监控、实时分析等场景。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/1.png" /></div>

本章节内容将继续使用前面介绍的 Node-RED，并通过 Node-RED 实现对 K1100 套件在 InfluxDB 中的管理。

如果您尚未安装或不了解什么是 Node-RED，请参考 [Node-RED & SenseCAP 教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/)。

## 创建 MQTT 节点

**步骤 1.** 启动 Node-RED

在终端中输入命令 `node-red` 启动 Node-RED，然后打开浏览器，在地址栏中输入 [http://localhost:1880](http://localhost:1880) 访问 Node-RED 的编辑器。

**步骤 2.** 创建 MQTT 节点

我们使用 **Network -> mqtt in** 节点，并按照 [之前的教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/#mqtt-node) 中的要求，以 SenseCAP API 的格式配置 MQTT。

- 服务器：openstream.api.sensecap.seeed.cc
- 端口：1883
- 协议：MQTT V3.1.1
- 客户端 ID：格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>` 您的组织 ID。我们已在 [获取 SenseCAP API](/cn/K1100_sensecap_node-red#get-the-sensecap-api) 中获取。
  - `<Random ID>` 使用您自己随机生成的数字或小写字母。

- 主题格式：`/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已在获取 SenseCAP API 中获取。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">传感器设备的唯一标识。此信息可以在 Grove - Wio E5 背面的标签上找到，也可以在 SenseCAP 控制台设备中找到。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">设备上连接传感器的物理接口。对于 K1100 套件，此处的默认值为 1。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">保留字段。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">测量值 ID。此 ID 可以在 <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP 文档</a> 的测量值 ID 部分中找到。</td>
    </tr>
  </tbody></table>

**步骤 3.** 验证 MQTT 节点

配置完成后，请点击右上角的 **Deploy** 按钮，检查配置是否成功。如果填写正确，则会显示 **Connected** 字样。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 配置 InfluxDB

**步骤 1.** 注册或登录 InfluxDB

如果您已经注册了 InfluxDB，请在 [InfluxDB 网站](https://www.influxdata.com/)上登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/2.png" /></div>

如果您尚未使用或注册 InfluxDB，请在 [此处](https://cloud2.influxdata.com/signup)完成注册并登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/3.png" /></div>

:::tip
注册时，可能会弹出一个页面要求您选择提供商，您可以根据自己的偏好选择，或者随意选择一个。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/4.png" /></div>

**步骤 2.** 获取 API Token

如下图所示，请点击 **Bucket**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/5.png" /></div>

然后点击 CREATE BUCKET。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/6.png" /></div>

在弹出的新窗口中输入名称，并选择免费的数据保留期限 - 30 天。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/7.png" /></div>

接着，如下图所示，请点击 **API Tokens**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100_influxdb/8.png" /></div>

然后选择创建一个 **Custom API Token**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/9.png" /></div>

为我们刚刚创建的 Bucket 授予 **read** 和 **write** 权限，然后点击下方的 Create 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/10.png" /></div>

创建完成后，您可以将 API Token 复制到剪贴板并保存。请将其保存到安全的位置，我们将在后续步骤中使用它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/11.png" /></div>

:::note
如果您关闭了此窗口，将无法再次获取该 API Token。
:::

## 配置 Node-RED

**步骤 1.** 下载 InfluxDB 插件

点击右上角菜单栏并选择 Settings。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

在 **Paletts -> Install** 中搜索并安装 **node-red-contrib-influxdb**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

从左侧的存储栏中添加 **influx.batch**，双击它进入配置页面，然后点击编辑按钮以编辑 **influx.batch** 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**步骤 2.** 编辑 **influx.batch** 节点：

- **Version**: 2.0。
- **URL**: 从 **Settings** -> **Orgnization Profile** 中获取。
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_influxdb/14.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/15.png" /></div>

- **TOKEN**: 在 **获取 API Token** 部分中生成的 Token。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/16.png" /></div>

完成后，点击右上角的 **Add** 按钮返回到 influx.batch 的属性页面，此时请填写您的组织名称（默认为您注册 InfluxDB 时使用的电子邮件地址）和 Bucket 名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**步骤 3.** 配置 function 节点

将数据上报到 InfluxDB 需要遵循特定的数据格式，因此需要添加一个 function 节点来处理数据格式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

从左侧的功能栏中拖出 function 节点，双击它进入编辑页面，然后将代码复制到 On Message 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var body = {}
    var value = payload.value
    if (measurementId == 4100) {
        body.co2 = value
        measurement = "co2"
    } else if (measurementId == 4103) {
        body.soilmoisture = value
        measurement = "soilmoisture"
    } else if (measurementId == 4150) {
        body.accelX = value
        measurement = "accelX"
    } else if (measurementId == 4151) {
        body.accelY = value
        measurement = "accelY"
    } else if (measurementId == 4152) {
        body.accelZ = value
        measurement = "accelZ"
    } else if (measurementId == 4192) {
        body.soundintensity = value
        measurement = "soundintensity"
    } else if (measurementId == 4193) {
        body.lightIntensity = value
        measurement = "lightIntensity"
    } else if (measurementId == 4195) {
        body.tvoc = value
        measurement = "tvoc"
    } else if (measurementId == 4097) {
        body.airtemperature = value
        measurement = "airtemperature"
    } else if (measurementId == 4098) {
        body.airhumidity = value
        measurement = "airhumidity"
    } else if (measurementId == 4175) {
        body.AIdetection_1 = value
        measurement = "AIdetection_1"
    } else if (measurementId == 4176) {
        body.AIdetection_2 = value
        measurement = "AIdetection_2"
    } else if (measurementId == 4177) {
        body.AIdetection_3 = value
        measurement = "AIdetection_3"
    } else if (measurementId == 4178) {
        body.AIdetection_4 = value
        measurement = "AIdetection_4"
    } else if (measurementId == 4179) {
        body.AIdetection_5 = value
        measurement = "AIdetection_5"
    } else if (measurementId == 4180) {
        body.AIdetection_6 = value
        measurement = "AIdetection_6"
    } else if (measurementId == 4181) {
        body.AIdetection_7 = value
        measurement = "AIdetection_7"
    } else if (measurementId == 4182) {
        body.AIdetection_8 = value
        measurement = "AIdetection_8"
    } else if (measurementId == 4183) {
        body.AIdetection_9 = value
        measurement = "AIdetection_9"
    } else if (measurementId == 4184) {
        body.AIdetection_10 = value
        measurement = "AIdetection_10"
    }
    msg.payload = [{
        measurement: measurement,
        fields: body,
        tags: {
            device: "SenseCAP K1100"
        },
        timestamp: new Date()
    }];
}
return msg;
```

然后我们连接所有节点并点击 **Deploy** 按钮，如果一切设置正确，您将能够看到 mqtt in 节点显示已连接。

如果您想查看数据的日志信息，可以在 function 节点之后添加一个 debug 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

一旦 Wio Terminal 开始启动并工作，并开始向 SenseCAP PaaS 服务器发送数据，我们就可以在 Node-RED 的调试日志中查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## 配置 InfluxDB 可视化仪表板

为了更直观地查看传感器数据，我们可以绘制一些折线图。

返回 InfluxDB Cloud 并点击 **CREATE DASHBOARD** 来 **ADD CELL**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/19.png" /></div>

如果 SenseCAP 已经开始向 InfluxDB 发送数据消息，那么您可以在此页面上看到传感器的标签。对于您想要显示的数据内容，只需勾选相应的框。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/23.png" /></div>

## 故障排除

> 问题1：为什么我在 Node-RED 中找不到 Palette？

答：如果您在设置中找不到 Palette，请检查启动 Node-RED 时终端是否有错误消息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最常见的情况是您的 npm 版本太旧，无法启动 Palette 编辑器。

如果您的情况如上所述，请以 **管理员身份运行 Powershell** 并输入以下命令来升级 npm。

```sh
npm install -g npm
```

然后重新启动 Node-RED 即可。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>