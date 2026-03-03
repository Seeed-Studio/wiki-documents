---
description: SenseCAP & Node-RED 到 Grafana
title: SenseCAP & Node-RED 到 Grafana
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_SenseCAP_to_grafana
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 通过 Node-RED 将 SenseCAP 连接到 Grafana

**SenseCAP K1100 - 传感器原型套件** 是 Seeed Studio 集中 LoRa® 通信技术和边缘智能产品精华的代表，旨在让 LoRa® 和物联网应用的部署和掌握变得更加简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、EC 传感器以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

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
          <strong>S2100 <br /> 数据记录器</strong>
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
          <strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong>
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

## Grafana

Grafana 是一个开源解决方案，用于运行数据分析，提取有意义的指标以理解海量数据，并通过酷炫的可定制仪表板监控我们的应用程序。Grafana 可以连接到几乎所有可能的数据源，通常称为数据库，例如 Graphite、Prometheus、Influx DB、ElasticSearch、MySQL、PostgreSQL 等。作为一个开源解决方案，Grafana 还允许我们从头开始编写插件，以集成多个不同的数据源。该工具帮助我们在一段时间内研究、分析和监控数据，技术上称为时间序列分析。

它通过提供相关数据帮助我们跟踪用户行为、应用程序行为、生产或预生产环境中出现错误的频率、错误类型以及上下文场景。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png" alt="pir" width={800} height="auto" /></p>

本章内容将继续使用前面介绍的 Node-RED，并使用 Grafana 来可视化来自 InfluxDB 2.4 实例的数据。

在开始之前，请准备以下内容。

1. 如果您尚未安装或不知道什么是 Node-RED，请参考 [Node-RED & SenseCAP 教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/)。

2. 首先将 SenseCAP 部署到 InfluxDB 的 Node-RED，详细信息可以在 wiki 中找到 [通过 Node-RED 将 SenseCAP 连接到 InfluxDB](https://wiki.seeedstudio.com/cn/K1100_SenseCAP_to_influxdb/)。

## 创建 MQTT 节点

**步骤 1.** 启动 Node-RED

通过在终端中输入命令 `node-red` 启动 Node-RED，然后打开浏览器并在地址栏中输入 [http://localhost:1880](http://localhost:1880) 来访问 Node-RED 的编辑器。

**步骤 2.** 创建 MQTT 节点

我们使用 **Network -> mqtt in** 节点，并按照 [之前的教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/#mqtt-node) 中的要求配置 SenseCAP API 格式的 mqtt。

- 服务器：openstream.api.sensecap.seeed.cc
- 端口：1883
- 协议：MQTT V3.1.1
- 客户端 ID：格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>` 您的组织 ID。我们已经在 [获取 SenseCAP API](/cn/K1100_sensecap_node-red#get-the-sensecap-api) 中获得。
  - `<Random ID>` 使用您自己随机生成的数字或小写字母。

- 主题格式：`/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已经在获取 SenseCAP API 中获得。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">传感器设备的唯一标识。此信息可以在 Grove - Wio E5 背面的贴纸上找到，也可以在 SenseCAP 控制台设备中找到。</td>
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

配置完成后，请点击右上角的 **Deploy** 按钮以检查配置是否成功。如果填写正确，则会显示 **Connected** 字样。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 启动 InfluxDB OSS

:::tip
您可以参考 InfluxDB 提供的详细[教程](https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb)，完成 InfluxDB 的安装和部署，该教程兼容不同的系统。以下将以 Windows 11 系统为例，指导安装过程。
:::

**步骤 1.** 下载 InfluxDB v2.4

请点击[这里](https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip)下载 InfluxDB v2.4 的 zip 文件。

将下载的压缩包解压到 `C:\Program Files\InfluxData\`，并根据需要重命名文件。

**步骤 2.** 启动 InfluxDB

在 Powershell 中，进入 `C:\Program Files\InfluxData\influxdb` 目录，并通过运行 influxd 守护进程启动 InfluxDB：

```shell
cd -Path 'C:\Program Files\InfluxData\influxdb'
.\influxd
```

:::tip
请使用 Powershell 或 WSL 执行 influx 和 influxd 命令。本文档中的命令行示例假设 influx 和 influxd 已安装在系统 `PATH` 中。如果这些二进制文件未安装在您的 `PATH` 中，请将示例中的 influx 和 influxd 替换为 `.\influx` 和 `.\influxd`。
:::

默认情况下，InfluxDB 使用 TCP 端口 `8086` 通过 [InfluxDB HTTP API](https://docs.influxdata.com/influxdb/v2.4/reference/api/) 进行客户端与服务器之间的通信。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png" /></div>

## 配置 InfluxDB

**步骤 1.** 注册 InfluxDB 账户

继续完成上述步骤，并在打开的页面上注册一个账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png" /></div>

请记录下您在此处设置的 **组织名称（Organisation Name）**，我们将在后续的 Node RED 配置中使用它。

**步骤 2.** 获取 URL

默认情况下，InfluxDB 使用 TCP 端口 `8086` 通过 InfluxDB HTTP API 进行客户端与服务器之间的通信。

```
http://localhost:8086/
```

在本节中，InfluxDB 的 URL 如上所示，请记录下来，我们将在后续的 Node RED 配置中使用它。

**步骤 3.** 获取 API Token

进入如下所示的 API Tokens 页面，为 Node RED 创建一个新的 API 接口，并记录下生成的 Token。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png" /></div>

## 配置 Node-RED

**步骤 1.** 下载 InfluxDB Paletts

点击右上角菜单栏并选择设置（Settings）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

在 **Paletts -> Install** 中搜索并安装 **node-red-contrib-influxdb**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

从左侧的存储栏中添加 **influx.batch**，双击它进入配置页面，然后点击编辑按钮以编辑 **influx.batch** 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**步骤 2.** 编辑 **influx.batch** 节点：

- **Version**: 2.0
- **URL**: http://localhost:8086/
- **TOKEN**: 您在 **获取 API Token** 部分生成的 Token。

完成后，点击右上角的 **Add** 按钮返回 influx.batch 的属性页面，此时请填写您的组织名称（Organisation Name）和存储桶名称（Bucket name）。

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

如果您想查看数据的日志信息，可以在函数节点之后添加一个调试节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

一旦 Wio Terminal 开始启动并工作，并开始将数据发送到 SenseCAP PaaS 服务器，我们就可以在 Node-RED 调试日志中查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## 配置 Grafana

**步骤 1.** 安装 Grafana

Grafana 可以安装在许多不同的操作系统上。有关最低硬件和软件要求的列表以及安装 Grafana 的说明，请参考 [安装 Grafana](https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/)。

以 Windows 11 为例，从 [Grafana 网站](https://grafana.com/grafana/download?platform=windows) 下载安装包并双击打开进行安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png" /></div>

**步骤 2.** 登录 Grafana

打开您的网页浏览器并访问 `http://localhost:3000/`。Grafana 默认监听的 HTTP 端口是 `3000`，除非您配置了其他端口。

在登录页面，输入用户名和密码为 `admin`。

点击 **Sign in**。如果成功，您将看到提示更改密码的页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png" /></div>

**步骤 3.** 添加数据源

在主页面，我们点击左下角的齿轮图标，然后点击 **Add data source**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png" /></div>

从可用数据源列表中选择 InfluxDB。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png" /></div>

**步骤 4.** 配置 InfluxDB 数据源

在数据源配置页面，为您的 InfluxDB 数据源输入一个名称。

然后，选择或输入以下内容：

- **查询语言**: Flux  
- 在 HTTP 下，执行以下操作：
  - **URL**: http://localhost:8086/  
- 在 Auth 下，执行以下操作：
  - 关闭 **Basic auth**。  
- 在 InfluxDB 详细信息下，执行以下操作：
  - **Organization**: 组织 ID。组织 ID 可以在 InfluxDB 的 **About** 页面查看。
  - **Token**: 您的 InfluxDB API 令牌。
  - **Default Bucket**: Flux 查询中使用的默认存储桶。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png" /></div>

点击 **Save & Test**。Grafana 尝试连接到 InfluxDB 2.4 数据源并返回测试结果。如果一切顺利，您将看到以下输出消息。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png" /></div>

## 查询和可视化数据

在配置好 InfluxDB 连接后，可以使用 Grafana 和 Flux 查询并可视化存储在 InfluxDB 实例中的时间序列数据。

有关使用 Grafana 的更多信息，请参阅 [Grafana 文档](https://grafana.com/docs/)。如果您刚开始学习 Flux，请参阅 [Flux 入门](https://docs.influxdata.com/flux/v0.x/get-started/)。

我们也欢迎您向我们提交您的数据仪表板，我们期待看到您的作品！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>