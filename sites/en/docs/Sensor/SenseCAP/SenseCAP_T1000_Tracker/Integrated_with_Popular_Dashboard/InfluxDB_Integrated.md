---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB Integrated(via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) is an open source time series database, focusing on high-performance reading, high-performance writing, efficient storage and real-time analysis of massive time series data. In addition to native protocols such as HTTP and UDP, it is also compatible with communication protocols of components such as CollectD, Graphite, OpenTSDB, and Prometheus. Widely used in DevOps monitoring, IoT monitoring, real-time analysis and other scenarios.

The content of this chapter will guide users how to connect the [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) to InfluxDB through TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.

## Preparation

Before ste up the InfluxDB, we need to in install the Telegraf agent (version 1.9.2 or higher) .

[Telegraf Configuration](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## Setup InfluxDB Cloud

Log in to your [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### Create Bucket

On the **Buckets** tab.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

Click the **Create Bucket** button to create a new bucket.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

Name your bucket, choose how long the data will remain in the database and then click **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### Generate Tokens

Navigate to **API TOKENS** tab and click the **GENERATE API TOKEN** button to create a token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Configure the Telegraf

### MQTT Integration

This section shows you how to configure your Telegraf agent with MQTT Consumer plugin used for connecting to TTS MQTT Server.

Navigate to **TELEGRAF** tab and click **CREATE CONFIGURATION**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

Select your bucket we created before, and select system.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

Name your configuration, select Create and Verify and then Finish.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

Once you have downloaded the Telegraf configuration file as described in InfluxDB Cloud 2.0 Setup, update it by adding the following lines and modifying them according to your MQTT server info:

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
You can check the TTS info on the following tab.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

Next, you need to copy the previously generated token from the Tokens tab and export it to an environmental variable to be used by the InfluxDB output plugin, or you can simply pass it directly as a token value in the configuration file. You can set the environmental variable by using the following command in your terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Run the Telegraf agent in your terminal with the following command:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### HTTP Integration

This section shows you how to configure the Telegraf agent with HTTP Listener v2 plugin and how to create a belonging Webhook integration on The Things Stack.

Update the Telegraf configuration you previously downloaded as described in InfluxDB Cloud 2.0 Setup by adding the following lines and modifying them according to your setup:

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

Copy the generated token from the Tokens tab and use it as a token value for the output plugin in your Telegraf configuration file, or export it to an environmental variable with the following command in your terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Start the Telegraf agent by running the following command in the terminal:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## Data Explorer

Select your explorer type, select **_measurement** on the drop-down menu in the Filter window and tick the **mqtt_consumer** box. Then you can choose the topic and parameter you wish to monitor.

**Location Data**

FROM: Your bucket <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

You can also click **SAVE AS** in the upper right corner to save this explorer as a Dashboard cell.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## Dashboards(Optional)

A dashboard is where you visualize and interact with data in real time. You can customize the dashboard according to your needs.

Navigate to **Dashboard** tab and click **Create Dashbaord**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>
