---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB Integrated(TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/16/2023
  author: Jessie
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) is an open source time series database, focusing on high-performance reading, high-performance writing, efficient storage and real-time analysis of massive time series data. In addition to native protocols such as HTTP and UDP, it is also compatible with communication protocols of components such as CollectD, Graphite, OpenTSDB, and Prometheus. Widely used in DevOps monitoring, IoT monitoring, real-time analysis and other scenarios.

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

The content of this chapter will guide users how to connect the SenseCAP [T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig) to InfluxDB through TTN.





### Preparation

**Install Telegraf**

Before ste up the InfluxDB, we need to in install the Telegraf agent (version 1.9.2 or higher) .

[Telegraf Configuration](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

### Setup InfluxDB Cloud

Log in to your [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>


#### Create Bucket

On the "Buckets" tab.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

Click the "Create Bucket" button to create a new bucket.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

Name your bucket, choose how long the data will remain in the database and then click "Create".


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

#### Generate Tokens

Navigate to "API TOKENS" tab and click the "GENERATE API TOKEN" button to create a token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>


### Configure the Telegraf

Navigate to "TELEGRAF" tab and click "CREATE CONFIGURATION"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>



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

Next, you need to copy the previously generated token from the Tokens tab and export it to an environmental variable to be used by the InfluxDB output plugin, or you can simply pass it directly as a token value in the configuration file. You can set the environmental variable by using the following command in your terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Run the Telegraf agent in your terminal with the following command:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### Monitor Your Data

