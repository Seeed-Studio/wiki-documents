---
sidebar_position: 2
description: 使用 XIAO ESP32C3 连接到 SenseCraft 数据平台 AI 顾问获取种植建议
title: 种植建议
keywords:
- sensecraft data platform
- xiao
- AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft-data-platform/applications/planting-advice
aliases:
  - /cn/xiao_esp32c3_sensecapai
last_update:
  date: 06/06/2025
  author: Jancee
---

:::tip note
SenseCAP 平台正式更名为 `SenseCraft 数据平台`！
:::

# 使用 XIAO ESP32C3 连接到 SenseCraft 数据平台获取种植建议

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

在此期间，Seeed Studio 的 SenseCraft 数据平台开发并发布了新的 AI 功能。目前 SenseCraft 数据平台上 AI 顾问的主要功能专注于为种植者提供建设性的种植建议，并将在不久的将来更新更丰富的 AI 功能！

本教程将连接 XIAO ESP32 系列与 `SenseCraft 数据平台`，详细介绍如何使用 XIAO 和 Grove 系列传感器将数据上传到平台，并基于这些传感器数值从 AI 获得建设性建议。

## 入门指南

### 硬件准备

本教程中将使用的三个硬件是 XIAO ESP32C3、Grove Base for XIAO 和 Grove SHT40 温湿度传感器。为了方便接线，我们使用 XIAO 扩展板，您可以根据实际需要进行购买。

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
          <th>Grove - 温湿度传感器(SHT40)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### 软件准备

如果这是您第一次使用 XIAO ESP32C3，那么您需要先阅读这个 Wiki 来学习如何在 Arduino 中配置一个良好的开发环境。

- [Seeed Studio XIAO ESP32C3 入门指南](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)

此外，本教程也兼容 [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)，您也可以使用 XIAO ESP32S3 来完成本教程的内容。

- [Seeed Studio XIAO ESP32S3 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#software-preparation)

由于使用了 SHT40 传感器，您还需要在 Arduino 中添加以下两个库，以确保程序能够顺利运行。

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 获取温湿度数据

如下图所示，请将 Grove SHT40 温湿度传感器连接到 XIAO 的 IIC 接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

然后为 XIAO ESP32C3 上传以下程序来驱动 SHT40 传感器工作，并开始获取空气中的温湿度值。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

打开Arduino IDE的串口监视器，选择波特率为115200并观察结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## SenseCraft数据平台HTTPS API介绍 -- 上传传感器数据

现在我们知道了如何从SHT40传感器获取数据，让我们开始学习`SenseCraft数据平台`的以下API调用规则。您可以通过点击下面的按钮直接跳转到SenseCraft文档中心来了解如何使用`SenseCraft数据平台`的API。

- [SenseCraft文档中心](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

SenseCraft数据平台接收传感器数据的基本原理是使用EUI、Key作为认证信息，通过POST方式上报设备数据。

HTTPS服务器地址：

```
https://sensecap.seeed.cc/deviceapi
```

### 关于 Header

在 POST 中，您需要在 Header 中添加认证信息，这是设备的 **EUI** 和 **Key** 的 base64 加密数据，采用以下基本格式。

```
authorization = Device base64(EUI:Key)
```

### 关于接口

设备用于上报传感器数据的服务器路径为：`/kit/message_uplink`，模式为 **POST**，以下请求参数可用且被允许。

<table align="center">
 <tr>
     <th>名称</th>
        <th>类型</th>
        <th>描述</th>
 </tr>
 <tr>
     <td align="center">- requestId</td>
     <td align="center">string</td>
     <td align="center">设备端每次上报数据时生成的 uuidv4，确保每条消息的值都不同。</td>
 </tr>
 <tr>
     <td align="center">- timestamp</td>
     <td align="center">string</td>
     <td align="center">消息发送时的毫秒时间戳。</td>
 </tr>
 <tr>
     <td align="center">- intent</td>
     <td align="center">string</td>
     <td align="center">当前固定为 "event"。</td>
 </tr>
 <tr>
     <td align="center">- deviceEui</td>
     <td align="center">string</td>
     <td align="center">设备 EUI。</td>
 </tr>
 <tr>
     <td align="center">- deviceKey</td>
     <td align="center">string</td>
     <td align="center">设备密钥。</td>
 </tr>
    <tr>
     <td align="center">- events</td>
     <td align="center">[object]</td>
     <td align="center">上报数据采集和设备状态的事件数组。</td>
 </tr>
    <tr>
     <td align="center">-- name</td>
     <td align="center">string</td>
     <td align="center">事件名称。</td>
 </tr>
    <tr>
     <td align="center">-- value</td>
     <td align="center">[object]</td>
     <td align="center">事件值。</td>
 </tr>
    <tr>
     <td align="center">-- timestamp</td>
     <td align="center">string</td>
     <td align="center">数据采集时的毫秒时间戳。</td>
 </tr>
</table>

以下是发送传感器上传数据的示例。

```json
{
    "requestId": "aaaa-aaaa-aaaa-aaaa",
    "timestamp": "1691026791405",
    "intent": "event",
    "deviceEui": "2CF7xxxxxxx00002",
    "deviceKey": "38xxxxxxxxxxxxxxxxxxxxC0EE76C3CD",
    "events": [
        {
            "name": "measure-sensor",
            "value": [
                {
                    "channel": "1",
                    "measurements": {
                        "4097": "31.38",
                        "4098": "59.60"
                    },
                    "measureTime": "1691026791405"
                }
            ]
        },
        {
            "name": "update-channel-info",
            "value": [
                {
                    "channel": "1",
                    "sensorType": "1001",
                    "status": "normal"
                }
            ],
            "timestamp": "1691026791405"
        }
    ]
}
```

## 上传温湿度数据到 SenseCraft 数据平台

一旦我们理解了上述规则，我们就可以开始编写 HTTPS 程序，将我们的 SHT40 温湿度数据上传到 SenseCraft 数据平台。

### 步骤 1. 注册并登录 SenseCraft 数据平台

您可以点击下面的链接直接进入 SenseCraft 数据平台国际站。如果这是您第一次使用 SenseCraft 的服务，您可能需要注册一个账户。

- [SenseCraft 数据平台网站](https://sensecap.seeed.cc)

登录 SenseCraft 数据平台后会进入控制台界面。我们需要添加一个自己的套件，请点击左侧菜单栏中的 **DevelopKit**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

然后点击左上角的 **Create DevelopKit**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

然后只需选择 **MIG Develop Kit** 并点击 **Confirm** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

接下来，您将能够在仪表板中看到您创建的设备，通常是第一个。点击该设备的"Connect"按钮将显示该设备的 **EUI** 和 **KEY** 信息。请保存它们，我们将在接下来的步骤中使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 获取认证信息

SenseCraft 的认证信息接口需要基于 Base64 的 **EUI:KEY** 加密。

例如，您的 EUI 是 `2CF7F11003900000`，Key 是 `06C42483D7155E7006C42483D7155E70`。那么您可以通过终端中的以下命令获取 Base64 加密的认证信息。

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

请保留认证信息，我们稍后将在程序中将其用作 **apiKey**。

### 步骤 3. 获取传感器类型编号

上传中包含了我们要报告的传感器类型编号和传感器名称。这样 SenseCraft 就知道我们从哪个传感器上传数据以及数据的单位是什么。

对于这一部分，请参考 SenseCraft 文档中心提供的传感器和数值编号对照表。

- [测量 ID 列表](https://sensecap-docs.seeed.cc/measurement_list.html)

- [传感器类型列表](https://sensecap-docs.seeed.cc/sensor_types_list.html)

如何使用这两个文档，我们将以本文中使用的 SHT40 传感器为例，为您介绍说明。SHT40 传感器是一个可以同时测量温度和湿度数据的传感器。所以它有一个传感器类型的代码和两个（温度、湿度）数值的代码。

传感器类型的代码我们需要在[传感器类型列表](https://sensecap-docs.seeed.cc/sensor_types_list.html)中查找。我们找到了一个温湿度传感器，代码为 **1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

我们所说的传感器数值的代码实际上就是图中的测量 ID，**4097** 和 **4098**。您也可以在[测量 ID 列表](https://sensecap-docs.seeed.cc/measurement_list.html)中找到它们，并检查这些数值的单位是否与您的传感器匹配。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
如果您在表格中找不到适合您的传感器类型。您可能需要使用传感器编号为 **4165** 到 **4174** 的自定义类型。传感器数值可能是无单位的。
:::

### 步骤 4. 安装必要的库

首先是 **NTPClient** 库，它可以使用 XIAO 网络功能来获取当前时间戳。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

接下来是 **ArduinoJson** 库，它可以更容易地帮助我们解析 SenseCraft 返回给我们的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 通过程序上传传感器数据

以下是上传 SHT40 数据的程序。请注意，以下宏定义只有在修改为适合您的情况时才应使用。

```cpp
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors
```

其中 ssid 和 password 指的是您的网络名称和密码。apiKey 指的是我们在**步骤 2**中获得的取证信息。deviceEUI 和 deviceKey 是您的设备 EUI 和密钥，这些也是在**步骤 2**中获得的。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors

const char* ntpServer = "pool.ntp.org";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, ntpServer);

char sensecapServer[] = "https://sensecap.seeed.cc/deviceapi/kit/message_uplink";

SensirionI2CSht4x sht4x;

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }

    wifiConnect();

    timeClient.begin();  // Initialize the NTP client
    timeClient.update(); // update timestamp
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }

    HTTPClient https;
    if (https.begin(sensecapServer)) {  // HTTPS
      https.addHeader("Content-Type", "application/json"); 
      String author = String("Device ") + apiKey;
      https.addHeader("authorization", author);
      String payload = String("{\"requestId\": \"aaaa-aaaa-aaaa-aaaa\", \"timestamp\": \"");
      timeClient.update(); // update timestamp
      uint64_t timestamp = timeClient.getEpochTime() * 1000ULL; // GET timestamp
      payload += String(timestamp);
      payload += String("\", \"intent\": \"event\", \"deviceEui\": \"");
      payload += deviceEUI;
      payload += String("\", \"deviceKey\": \"");
      payload += deviceKey;
      payload += String("\", \"events\": [{\"name\": \"measure-sensor\", \"value\": [{\"channel\": \"1\", \"measurements\": {\"");
      payload += dataNum_1;
      payload += String("\": \"");
      payload += String(temperature);
      payload += String("\", \"");
      payload += dataNum_2;
      payload += String("\": \"");
      payload += String(humidity);
      payload += String("\"}, \"measureTime\": \"");
      payload += String(timestamp);
      payload += String("\"}]}, {\"name\": \"update-channel-info\", \"value\": [{\"channel\": \"1\", \"sensorType\": \"");
      payload += sensorType;
      payload += String("\", \"status\": \"normal\"}], \"timestamp\": \"");
      payload += String(timestamp);
      payload += String("\"}]}");
      Serial.println(payload);
      int httpCode = https.POST(payload);   // start connection and send HTTP header
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = https.getString();
        Serial.println(payload);
      }
      else{
        Serial.print("[HTTP] ERROR: ");
        Serial.println(httpCode);
      }
    }
    else{
      Serial.println("[HTTPS] Unable to connect");
      delay(1000);
    }
    delay(300000);
}
```

打开串口监视器，当你打开它时，程序将开始执行，当你收到如图所示的响应时，这意味着 SenseCraft 已成功接收到你的一次数据上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
SenseCraft 接收数据上传的最小时间间隔为五分钟。
:::

## `SenseCraft 数据平台` HTTP API 介绍 -- 获取 AI 建议

接下来，让我们学习如何使用下面的 `SenseCraft 数据平台` API。使用我们随时间变化的传感器数据作为参考，从 AI 获取建议。

SenseCraft AI 的接口调用流程大致如下。

- 通过接口 I 获取账户下支持在 AIGC 中使用的设备和测量值 ID。
- 使用接口 I 获得的结果作为参数之一，调用接口 II 获取 AIGC 结果。
  - 由于 AIGC 生成时间可能较长，接口 I 在首次调用时将返回一个 **resource_id**，然后前端将使用 **resource_id** 轮询响应结果。当响应的代码为 **11338** 时，表示 AIGC 仍在推理过程中，需要使用 **resource_id** 再次调用接口 II，直到返回最终结果。
  - 接口 II 对同一账户在五分钟内最多有十次请求的流量限制。

HTTPS 服务器地址：

```
https://sensecap.seeed.cc/openapi
```

### 关于接口 I

设备用于上报传感器数据的服务器路径为：`/ai/view_suggestion_by_measurements`，模式为 **POST**，以下请求参数可用且被允许。

<table align="center">
 <tr>
     <th>名称</th>
        <th>描述</th>
        <th>备注</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">选择语言</td>
     <td align="center">1:中文，2:英文。默认中文。</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">位置</td>
     <td align="center">位置，例如"深圳"。</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">作物或动物</td>
     <td align="center">要咨询的作物或动物，例如"苹果"。</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">设备数据查询时间</td>
     <td align="center">1: 30天 2: 180天 3: 360天。默认30天</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">设备测量类型</td>
     <td align="center">最多六个</td>
 </tr>
    <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">设备 EUI</td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">--- channel_index</td>
     <td align="center">通道号</td>
     <td align="center">此值目前固定为1。</td>
 </tr>
    <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">测量值编号</td>
     <td align="center"></td>
 </tr>
</table>

以下是调用接口 I 的示例。

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ]
}
```

### 关于接口 II

接口 I 的结构和框架与接口 II 基本相同，唯一的区别是在末尾添加了一个额外的 **resource_id**。以下是可用和允许的请求参数。

<table align="center">
 <tr>
     <th>名称</th>
        <th>描述</th>
        <th>备注</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">选择语言</td>
     <td align="center">1:中文，2:英文。默认中文。</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">位置</td>
     <td align="center">位置，例如"深圳"。</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">作物或动物</td>
     <td align="center">要咨询的作物或动物，例如"苹果"。</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">设备数据查询时间</td>
     <td align="center">1: 30天 2: 180天 3: 360天。默认30天</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">设备测量类型</td>
     <td align="center">最多六个</td>
 </tr>
  <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">设备 EUI</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">--- channel_index</td>
     <td align="center">通道号</td>
     <td align="center">此值目前固定为1。</td>
 </tr>
  <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">测量值编号</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">- resource_id</td>
     <td align="center">缓存凭证</td>
     <td align="center">在已经提出问题并获得返回结果的情况下，携带此参数轮询后端，直到返回AI的结果。</td>
 </tr>
</table>

以下是获取AI建议的示例。

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ],
  "resource_id": "openAi:ask:424326279298784:1691053698953"
}
```

## XIAO ESP32C3 获取 SenseCraft AI 顾问

### 步骤 6. 创建 API 访问权限

如果您想调用 SenseCraft 的 AIGC 接口，那么您需要在 SenseCraft 中准备 API ID 和 API 访问密钥。在仪表板的左侧菜单栏中选择 **Access API keys**。然后点击顶部的 **Create Access Key**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

复制创建的 **Access Key ID** 和 **Access API Key**。请妥善保管它们，我们将在后续步骤中使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 编写和上传程序

按照上述接口指南，我们可以编写一个程序，让 SenseCraft 使用我们 SHT40 的温湿度数据来为我们返回种植建议。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <base64.h>
#include <ArduinoJson.h>

//#define DEBUG 1

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* username = "YOUR-API-ID";
const char* accesskey = "YOUR-ACCESS-API-KEY";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity

char sensecapAIServer[] = "https://sensecap.seeed.cc/openapi/ai/view_suggestion_by_measurements";

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) {
      delay(100);
  }
  wifiConnect();
}

String splicePayload(int mode, String resource_id = ""){
  String payload = String("{\"lang\": \"2\", \"crop\": \"");  // 1:Chinese 2:English
  payload += crop;
  payload += String("\", \"location\": \"");
  payload += location;
  payload += String("\", \"time_range\": \"");                    // 1:30 days, 2:180 days, 3:360 days
  payload += timerange;
  payload += String("\", \"measurements\": [{\"dev_eui\": \"");
  payload += deviceEUI;
  payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
  payload += dataNum_1;
  payload += String("\", \"");
  payload += dataNum_2;
  payload += String("\"]}]}");
  
  //If you need values for other sensors
//    payload += String(", {\"dev_eui\": \"");
//    payload += deviceEUI_2;
//    payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
//    payload += dataNum_3;
//    payload += String("\"]}]}");

  if(mode == 1){
    payload += String("]}");
  }
  else if(mode == 2){
    // If a query code has been obtained. mode = 2
    payload += String("], \"resource_id\": \"");
    payload += resource_id;
    payload += String("\"}");
  }
  
  Serial.println(payload);
  return payload;
}

void loop() {
  // put your main code here, to run repeatedly:
  HTTPClient https;
  if (https.begin(sensecapAIServer)) {  // HTTPS
    https.addHeader("Content-Type", "application/json");
    String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
    https.addHeader("Authorization", "Basic " + base64Credentials);
    
    String payload = splicePayload(1);

    int httpCode = https.POST(payload);   // start connection and send HTTP header
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
#ifdef DEBUG
      Serial.println(response);
#endif
      
      // get resource_id
      DynamicJsonDocument doc(1024);
      deserializeJson(doc, response);
      String resource_id = doc["data"]["resource_id"].as<String>();
      Serial.println("resource_id: " + resource_id);

      String payload = splicePayload(2, resource_id);

      do{
        delay(2000);
        https.addHeader("Content-Type", "application/json");
        String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
        https.addHeader("Authorization", "Basic " + base64Credentials);
        
        int httpCode = https.POST(payload);   // start connection and send HTTP header
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String response = https.getString();
#ifdef DEBUG
          Serial.println(response);
#endif
          
          // Parsing JSON Responses
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, response);
          String code = doc["code"].as<String>();
          Serial.println("status: " + code);
          if(code == "0"){
            DynamicJsonDocument doc(1024);
            deserializeJson(doc, response);
            String suggest = doc["data"].as<String>();
            Serial.println("SenseCraft AI gives the following planting advice: ");
            Serial.println(suggest);
            break;
          }
          else if(code == "11396"){
            Serial.println("Timeout. Please wait five minutes.");
            break;
          }
          else Serial.println("Waiting for a reply...");
        }
      }while(1);
    }
    else{
      Serial.print("[HTTP] ERROR: ");
      Serial.println(httpCode);
    }
  }
  else{
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
  }
  Serial.println("The next query will be in five minutes, so please do not query too often to avoid having your account restricted from use!");
  delay(300000);
}
```

这里有一些需要注意的参数。在代码开头，宏定义 `DEBUG` 被注释掉了。如果取消注释这一行，那么程序可以执行并打印每次 SenseCraft 返回的消息。

在 `DEBUG` 下面是需要根据您的账户和设备进行更改的信息。例如，如果您不是在种植苹果且位置不在深圳，那么您需要更改为适合您情况的内容。

```cpp
// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity
```

除此之外，代码中还有两行用于解析访问API。

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

例如，您在**步骤 6**中获得的 API ID 和 API Key 分别是 `N0AV094KBPH1J9PX` 和 `5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`。那么这行代码您应该更改为：

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

上传此程序，您将看到上传消息并持续循环查看AI返回的答案结果，直到返回结果为止。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

至此，恭喜您已经掌握了XIAO接入SenseCraft的所有知识和内容，我们非常欢迎您使用我们的XIAO和SenseCraft来发挥更多的创造力！

## 故障排除

### Q1: 为什么在获取AI答案后得到空结果？

这可能是由于接口超时导致的，您可以等到下次查询发送后再检查结果。请注意，此结果只能获取一次，之后结果会立即被清除，无法再次查询。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
