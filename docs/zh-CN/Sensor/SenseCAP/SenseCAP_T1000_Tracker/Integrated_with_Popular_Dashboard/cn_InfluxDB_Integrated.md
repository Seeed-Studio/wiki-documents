---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) 是一个开源时间序列数据库，专注于海量时间序列数据的高性能读取、高性能写入、高效存储和实时分析。除了 HTTP 和 UDP 等原生协议外，它还兼容 CollectD、Graphite、OpenTSDB 和 Prometheus 等组件的通信协议。广泛应用于 DevOps 监控、物联网监控、实时分析等场景。

本章内容将指导用户如何通过 TTN 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 InfluxDB。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请查看[将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN) 以首先将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 准备工作

在设置 InfluxDB 之前，我们需要安装 Telegraf 代理（版本 1.9.2 或更高）。

[Telegraf 配置](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## 设置 InfluxDB Cloud

登录到您的 [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### 创建存储桶

在 **Buckets** 选项卡上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

点击 **Create Bucket** 按钮创建一个新的存储桶。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

为您的存储桶命名，选择数据在数据库中保留的时间，然后点击 **Create**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### 生成令牌

导航到 **API TOKENS** 选项卡，点击 **GENERATE API TOKEN** 按钮创建令牌。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## 配置 Telegraf

### MQTT 集成

本节向您展示如何使用 MQTT Consumer 插件配置您的 Telegraf 代理，用于连接到 TTS MQTT 服务器。

导航到 **TELEGRAF** 选项卡，点击 **CREATE CONFIGURATION**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

选择我们之前创建的存储桶，然后选择系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

为您的配置命名，选择 Create and Verify，然后点击 Finish。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

按照 InfluxDB Cloud 2.0 设置中描述的方式下载 Telegraf 配置文件后，通过添加以下行并根据您的 MQTT 服务器信息进行修改来更新它：

```cpp
[[inputs.mqtt_consumer]]
#
#MQTT broker URLs to be used. The format is scheme://host:port, schema can be tcp, ssl, or ws.
  servers = ["tcp://localhost:1883"]
#
#Topics to subscribe to
  topics = ["#"]
#
#Username and password
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
#Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
#Define the message format
  data_format = "json"
```

:::info
您可以在以下选项卡中查看 TTS 信息。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

接下来，您需要从 Tokens 选项卡复制之前生成的令牌，并将其导出为环境变量以供 InfluxDB 输出插件使用，或者您可以直接在配置文件中将其作为令牌值传递。您可以通过在终端中使用以下命令来设置环境变量：

```cpp
INFLUX_TOKEN="paste your token here"
```

在终端中使用以下命令运行 Telegraf 代理：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### HTTP 集成

本节将向您展示如何使用 HTTP Listener v2 插件配置 Telegraf 代理，以及如何在 The Things Stack 上创建相应的 Webhook 集成。

按照 InfluxDB Cloud 2.0 设置中的描述，更新您之前下载的 Telegraf 配置，添加以下行并根据您的设置进行修改：

```cpp
[[inputs.http_listener_v2]]
#
# Address and port to host HTTP listener on
  service_address = ":8080"
#
# Path to listen to
  path = "/telegraf"
#
# HTTP methods to accept
  methods = ["POST"]
#
# Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
# Define the message format
  data_format = "json"
```

从 Tokens 选项卡复制生成的令牌，并将其用作 Telegraf 配置文件中输出插件的令牌值，或者在终端中使用以下命令将其导出为环境变量：

```cpp
INFLUX_TOKEN="paste your token here"
```

通过在终端中运行以下命令来启动 Telegraf 代理：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## 数据浏览器

选择您的浏览器类型，在筛选窗口的下拉菜单中选择 **_measurement**，并勾选 **mqtt_consumer** 框。然后您可以选择要监控的主题和参数。

**位置数据**

FROM: 您的存储桶 <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

您也可以点击右上角的 **SAVE AS** 将此浏览器保存为仪表板单元格。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## 仪表板（可选）

仪表板是您实时可视化和交互数据的地方。您可以根据需要自定义仪表板。

导航到 **Dashboard** 选项卡并点击 **Create Dashbaord**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>
