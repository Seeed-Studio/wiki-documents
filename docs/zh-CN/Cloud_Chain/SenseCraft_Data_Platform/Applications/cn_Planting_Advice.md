---
sidebar_position: 2
description: 使用 XIAO ESP32C3 连接 SenseCraft 数据平台 AI 顾问获取种植建议
title: 种植建议
keywords:
- sensecraft 数据平台
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

:::tip 提示
SenseCAP 平台已正式更名为 `SenseCraft 数据平台`！
:::

# 使用 XIAO ESP32C3 连接 SenseCraft 数据平台获取种植建议

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

近期，Seeed Studio 的 SenseCraft 数据平台开发并发布了新的 AI 功能。目前，SenseCraft 数据平台上的 AI 顾问的主要功能是为种植者提供建设性的种植建议，并将在不久的将来更新更多丰富的 AI 功能！

本教程将桥接 XIAO ESP32 系列与 `SenseCraft 数据平台`，详细说明如何使用 XIAO 和 Grove 系列传感器将数据上传到平台，并根据这些传感器值从 AI 获取建设性建议。

## 入门指南

### 硬件准备

本教程中将使用的三种硬件是 XIAO ESP32C3、Grove Base for XIAO 和 Grove SHT40 温湿度传感器。为了方便接线，我们使用了 XIAO 扩展板，您可以根据实际需求购买。

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
    <th>Grove - 温湿度传感器 (SHT40)</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### 软件准备

如果这是您第一次使用 XIAO ESP32C3，那么您需要先阅读此 Wiki，了解如何在 Arduino 中配置一个良好的开发环境。

- [Seeed Studio XIAO ESP32C3 入门指南](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)

此外，本教程也兼容 [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)，您也可以使用 XIAO ESP32S3 完成本教程的内容。

- [Seeed Studio XIAO ESP32S3 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#software-preparation)

由于使用了 SHT40 传感器，您还需要在 Arduino 中添加以下两个库，以确保程序能够顺利运行。

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 获取温湿度数据

如下图所示，请将 Grove SHT40 温湿度传感器连接到 XIAO 的 IIC 接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

然后上传以下程序到 XIAO ESP32C3，以驱动 SHT40 传感器工作并开始获取空气中的温度和湿度值。

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

打开 Arduino IDE 的串口监视器，选择波特率为 115200，并观察结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>


## SenseCraft 数据平台 HTTPS API 简介 -- 上传传感器数据

现在我们已经知道如何从 SHT40 传感器获取数据，接下来让我们学习 `SenseCraft 数据平台` 的以下 API 调用规则。您可以点击下方按钮直接跳转到 SenseCraft 文档中心，了解如何使用 `SenseCraft 数据平台` 的 API。

- [SenseCraft 文档中心](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

SenseCraft 数据平台接收传感器数据的基本原理是使用 EUI 和 Key 作为认证信息，通过 POST 报告设备数据。

HTTPS 服务器地址：

```
https://sensecap.seeed.cc/deviceapi
```

### 关于 Header

在 POST 请求中，需要在 Header 中添加认证信息，该信息是设备的 **EUI** 和 **Key** 按以下基本格式进行 base64 加密后的数据。

```
authorization = Device base64(EUI:Key)
```

### 关于接口

设备用于报告传感器数据的服务器路径为：`/kit/message_uplink`，模式为 **POST**，以下是可用和允许的请求参数。

<table align="center">
	<tr>
	    <th>名称</th>
        <th>类型</th>
        <th>描述</th>
	</tr>
	<tr>
	    <td align="center">- requestId</td>
	    <td align="center">string</td>
	    <td align="center">每次数据上报时设备端生成的 uuidv4，确保每条消息的值不同。</td>
	</tr>
	<tr>
	    <td align="center">- timestamp</td>
	    <td align="center">string</td>
	    <td align="center">消息发送时的毫秒级时间戳。</td>
	</tr>
	<tr>
	    <td align="center">- intent</td>
	    <td align="center">string</td>
	    <td align="center">目前固定为 "event"。</td>
	</tr>
	<tr>
	    <td align="center">- deviceEui</td>
	    <td align="center">string</td>
	    <td align="center">设备 EUI。</td>
	</tr>
	<tr>
	    <td align="center">- deviceKey</td>
	    <td align="center">string</td>
	    <td align="center">设备 Key。</td>
	</tr>
    <tr>
	    <td align="center">- events</td>
	    <td align="center">[object]</td>
	    <td align="center">一个事件数组，用于报告数据采集和设备状态。</td>
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
	    <td align="center">数据采集时的毫秒级时间戳。</td>
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

## 将温湿度数据上传到 SenseCraft 数据平台

在理解了上述规则后，我们可以开始编写 HTTPS 程序，将 SHT40 的温湿度数据上传到 SenseCraft 数据平台。

### 第 1 步：注册并登录 SenseCraft 数据平台

您可以点击以下链接直接访问 SenseCraft 数据平台国际站。如果这是您第一次使用 SenseCraft 的服务，您可能需要注册一个账户。

- [SenseCraft 数据平台网站](https://sensecap.seeed.cc)

登录 SenseCraft 数据平台后，您将进入控制台界面。我们需要添加一个自己的开发套件，请点击左侧菜单栏中的 **DevelopKit**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

然后点击左上角的 **Create DevelopKit**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

接着选择 **MIG Develop Kit** 并点击 **Confirm** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

接下来，您将在仪表板中看到您创建的设备，通常是第一个。点击该设备的 "Connect" 按钮，将显示该设备的 **EUI** 和 **KEY** 信息。请保存这些信息，我们将在后续步骤中使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### 第 2 步：获取认证信息

SenseCraft 的认证接口需要基于 Base64 的 **EUI:KEY** 加密。

例如，您的 EUI 是 `2CF7F11003900000`，Key 是 `06C42483D7155E7006C42483D7155E70`，那么您可以通过以下终端命令获取 Base64 加密的认证信息。

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

请保存认证信息，我们将在程序中将其用作 **apiKey**。

### 第 3 步：获取传感器类型编号

上传的数据中需要包含传感器类型编号和传感器名称，以便 SenseCraft 知道我们上传的是哪种传感器的数据以及数据的单位。

在本节中，请参考 SenseCraft 文档中心提供的传感器和数值编号交叉参考表。

- [测量 ID 列表](https://sensecap-docs.seeed.cc/measurement_list.html)

- [传感器类型列表](https://sensecap-docs.seeed.cc/sensor_types_list.html)

为了说明如何使用这些文档，我们将以本文使用的 SHT40 传感器为例进行介绍。SHT40 传感器是一种可以测量温度和湿度数据的传感器。因此，它有一个传感器类型代码和两个（温度、湿度）值的代码。

传感器类型代码需要在 [传感器类型列表](https://sensecap-docs.seeed.cc/sensor_types_list.html) 中查找。我们找到一个温湿度传感器，其代码为 **1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

我们提到的传感器值代码实际上是图表中的测量 ID，分别是 **4097** 和 **4098**。您也可以在 [测量 ID 列表](https://sensecap-docs.seeed.cc/measurement_list.html) 中找到它们，并检查这些值的单位是否与您的传感器匹配。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
如果您在表中找不到适合您的传感器类型，您可能需要使用传感器编号为 **4165** 到 **4174** 的自定义类型。传感器值可能是无单位的。
:::

### 第 4 步：安装必要的库

首先是 **NTPClient** 库，它可以使用 XIAO 网络获取当前时间戳。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

接下来是 **ArduinoJson** 库，它可以帮助我们更轻松地解析 SenseCraft 返回的数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### 第 5 步：通过程序上传传感器数据

以下是上传 SHT40 数据的程序。请注意，以下宏定义应根据您的实际情况进行修改后使用。

```cpp
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // 空气温度
const char* dataNum_2 = "4098";  // 空气湿度
const char* sensorType = "1001"; // 空气温湿度传感器
```

其中，ssid 和 password 分别指您的网络名称和密码。apiKey 是我们在 **第 2 步** 中获取的认证信息。deviceEUI 和 deviceKey 是您的设备 EUI 和 Key，同样是在 **第 2 步** 中获取的。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

// 替换为您的设备信息
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // 空气温度
const char* dataNum_2 = "4098";  // 空气湿度
const char* sensorType = "1001"; // 空气温湿度传感器

const char* ntpServer = "pool.ntp.org";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, ntpServer);

char sensecapServer[] = "https://sensecap.seeed.cc/deviceapi/kit/message_uplink";

SensirionI2CSht4x sht4x;

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("正在连接到 ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi 已连接！");
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
        Serial.print("执行 serialNumber() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("序列号：");
        Serial.println(serialNumber);
    }

    wifiConnect();

    timeClient.begin();  // 初始化 NTP 客户端
    timeClient.update(); // 更新时间戳
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("执行 measureHighPrecision() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("温度：");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("湿度：");
        Serial.println(humidity);
    }

    HTTPClient https;
    if (https.begin(sensecapServer)) {  // HTTPS
      https.addHeader("Content-Type", "application/json"); 
      String author = String("Device ") + apiKey;
      https.addHeader("authorization", author);
      String payload = String("{\"requestId\": \"aaaa-aaaa-aaaa-aaaa\", \"timestamp\": \"");
      timeClient.update(); // 更新时间戳
      uint64_t timestamp = timeClient.getEpochTime() * 1000ULL; // 获取时间戳
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
      int httpCode = https.POST(payload);   // 开始连接并发送 HTTP 头
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = https.getString();
        Serial.println(payload);
      }
      else{
        Serial.print("[HTTP] 错误：");
        Serial.println(httpCode);
      }
    }
    else{
      Serial.println("[HTTPS] 无法连接");
      delay(1000);
    }
    delay(300000);
}
```

打开串口监视器，当你打开它时，程序将开始执行。当你收到如图所示的响应时，表示 SenseCraft 已成功接收到你的数据上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
SenseCraft 接收数据上传的最小时间间隔为五分钟。
:::

## `SenseCraft 数据平台` HTTP API 介绍 -- 获取 AI 建议

接下来，让我们学习如何使用 `SenseCraft 数据平台` 的 API。通过时间序列的传感器数据作为参考，获取 AI 的建议。

SenseCraft AI 的接口调用流程大致如下：
- 通过接口 I 获取账户下支持 AIGC 使用的设备和测量值 ID。
- 使用接口 I 获取的结果作为参数之一，调用接口 II 获取 AIGC 结果。
  - 由于 AIGC 生成时间可能较长，接口 I 在首次调用时会返回一个 **resource_id**，前端需要使用 **resource_id** 轮询响应结果。当响应的代码为 **11338** 时，表示 AIGC 仍在推理过程中，此时需要再次使用 **resource_id** 调用接口 II，直到返回最终结果。
  - 接口 II 对同一账户的流量限制为五分钟内最多十次请求。

HTTPS 服务器地址：
```
https://sensecap.seeed.cc/openapi
```

### 关于接口 I

设备用于上报传感器数据的服务器路径为：`/ai/view_suggestion_by_measurements`，模式为 **POST**，以下是可用和允许的请求参数。

<table align="center">
	<tr>
	    <th>名称</th>
        <th>描述</th>
        <th>备注</th>
	</tr>
	<tr>
	    <td align="center">- lang</td>
	    <td align="center">选择语言</td>
	    <td align="center">1: 中文, 2: 英文。默认中文。</td>
	</tr>
	<tr>
	    <td align="center">- location</td>
	    <td align="center">位置</td>
	    <td align="center">位置，例如 "深圳"。</td>
	</tr>
	<tr>
	    <td align="center">- crop</td>
	    <td align="center">作物或动物</td>
	    <td align="center">需要咨询的作物或动物，例如 "苹果"。</td>
	</tr>
	<tr>
	    <td align="center">- time_range</td>
	    <td align="center">设备数据查询时间</td>
	    <td align="center">1: 30 天 2: 180 天 3: 360 天。默认 30 天。</td>
	</tr>
	<tr>
	    <td align="center">- measurements</td>
	    <td align="center">设备测量类型</td>
	    <td align="center">最多六个。</td>
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
	    <td align="center">通道编号</td>
	    <td align="center">该值目前固定为 1。</td>
	</tr>
    <tr>
	    <td align="center">--- measurement_ids</td>
	    <td align="center">测量值编号</td>
	    <td align="center"></td>
	</tr>
</table>

以下是调用接口 I 的示例：

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

接口 II 的结构和框架与接口 I 基本相同，唯一的区别是在末尾增加了一个 **resource_id**。以下是可用和允许的请求参数。

<table align="center">
	<tr>
	    <th>名称</th>
        <th>描述</th>
        <th>备注</th>
	</tr>
	<tr>
	    <td align="center">- lang</td>
	    <td align="center">选择语言</td>
	    <td align="center">1: 中文, 2: 英文。默认中文。</td>
	</tr>
	<tr>
	    <td align="center">- location</td>
	    <td align="center">位置</td>
	    <td align="center">位置，例如 "深圳"。</td>
	</tr>
	<tr>
	    <td align="center">- crop</td>
	    <td align="center">作物或动物</td>
	    <td align="center">需要咨询的作物或动物，例如 "苹果"。</td>
	</tr>
	<tr>
	    <td align="center">- time_range</td>
	    <td align="center">设备数据查询时间</td>
	    <td align="center">1: 30 天 2: 180 天 3: 360 天。默认 30 天。</td>
	</tr>
	<tr>
	    <td align="center">- measurements</td>
	    <td align="center">设备测量类型</td>
	    <td align="center">最多六个。</td>
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
	    <td align="center">通道编号</td>
	    <td align="center">该值目前固定为 1。</td>
	</tr>
  <tr>
	    <td align="center">--- measurement_ids</td>
	    <td align="center">测量值编号</td>
	    <td align="center"></td>
	</tr>
  <tr>
	    <td align="center">- resource_id</td>
	    <td align="center">缓存凭证</td>
	    <td align="center">在已提问并返回结果的情况下，携带此参数轮询后端，直到返回 AI 的结果。</td>
	</tr>
</table>

以下是获取 AI 建议的示例：

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

## XIAO ESP32C3 获取 SenseCraft AI Advisor

### 第 6 步：创建 API 访问

如果您希望调用 SenseCraft 的 AIGC 接口，则需要在 SenseCraft 中准备 API ID 和 API Access Key。在仪表板左侧菜单栏中选择 **Access API keys**，然后点击顶部的 **Create Access Key**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

复制创建的 **Access Key ID** 和 **Access API Key**。请妥善保管，我们将在后续步骤中使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### 第 7 步：编写并上传程序

根据上述接口指南，我们可以编写一个程序，让 SenseCraft 使用来自 SHT40 的温度和湿度数据，为我们提供种植建议。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <base64.h>
#include <ArduinoJson.h>

//#define DEBUG 1

// 替换为您的设备信息
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* username = "YOUR-API-ID";
const char* accesskey = "YOUR-ACCESS-API-KEY";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //空气温度
const char* dataNum_2 = "4098";  //空气湿度

char sensecapAIServer[] = "https://sensecap.seeed.cc/openapi/ai/view_suggestion_by_measurements";

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("正在连接到 ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi 已连接！");
  Serial.println(WiFi.localIP());
}

void setup() {
  // 初始化代码，仅运行一次
  Serial.begin(115200);
  while (!Serial) {
      delay(100);
  }
  wifiConnect();
}

String splicePayload(int mode, String resource_id = ""){
  String payload = String("{\"lang\": \"2\", \"crop\": \"");  // 1:中文 2:英文
  payload += crop;
  payload += String("\", \"location\": \"");
  payload += location;
  payload += String("\", \"time_range\": \"");                    // 1:30天, 2:180天, 3:360天
  payload += timerange;
  payload += String("\", \"measurements\": [{\"dev_eui\": \"");
  payload += deviceEUI;
  payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
  payload += dataNum_1;
  payload += String("\", \"");
  payload += dataNum_2;
  payload += String("\"]}]}");
  
  // 如果需要其他传感器的值
//    payload += String(", {\"dev_eui\": \"");
//    payload += deviceEUI_2;
//    payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
//    payload += dataNum_3;
//    payload += String("\"]}]}");

  if(mode == 1){
    payload += String("]}");
  }
  else if(mode == 2){
    // 如果已获得查询代码，mode = 2
    payload += String("], \"resource_id\": \"");
    payload += resource_id;
    payload += String("\"}");
  }
  
  Serial.println(payload);
  return payload;
}

void loop() {
  // 主代码，循环运行
  HTTPClient https;
  if (https.begin(sensecapAIServer)) {  // HTTPS
    https.addHeader("Content-Type", "application/json");
    String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
    https.addHeader("Authorization", "Basic " + base64Credentials);
    
    String payload = splicePayload(1);

    int httpCode = https.POST(payload);   // 开始连接并发送 HTTP 头
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
#ifdef DEBUG
      Serial.println(response);
#endif
      
      // 获取 resource_id
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
        
        int httpCode = https.POST(payload);   // 开始连接并发送 HTTP 头
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String response = https.getString();
#ifdef DEBUG
          Serial.println(response);
#endif
          
          // 解析 JSON 响应
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, response);
          String code = doc["code"].as<String>();
          Serial.println("状态: " + code);
          if(code == "0"){
            DynamicJsonDocument doc(1024);
            deserializeJson(doc, response);
            String suggest = doc["data"].as<String>();
            Serial.println("SenseCraft AI 提供以下种植建议：");
            Serial.println(suggest);
            break;
          }
          else if(code == "11396"){
            Serial.println("超时。请等待五分钟。");
            break;
          }
          else Serial.println("等待回复...");
        }
      }while(1);
    }
    else{
      Serial.print("[HTTP] 错误: ");
      Serial.println(httpCode);
    }
  }
  else{
    Serial.println("[HTTPS] 无法连接");
    delay(1000);
  }
  Serial.println("下一次查询将在五分钟后进行，请勿频繁查询以避免账户被限制使用！");
  delay(300000);
}
```

这里有一些参数需要注意。在代码开头，宏定义 `DEBUG` 被注释掉。如果取消注释该行，则程序可以执行并打印每次 SenseCraft 返回的消息。

以下 `DEBUG` 部分的信息需要根据您的账户和设备进行更改。例如，如果您种植的不是苹果，且位置不是深圳，那么您需要根据实际情况进行修改。

```cpp
// 替换为您的设备信息
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //空气温度
const char* dataNum_2 = "4098";  //空气湿度
```

除此之外，代码中还有两行用于解析 Access API 的内容。

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

例如，您在**步骤 6**中获得的 API ID 和 API Key 分别是 `N0AV094KBPH1J9PX` 和 `5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`，那么这行代码应修改为：

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

上传此程序后，您将看到消息上传，并持续循环显示 AI 返回的答案结果，直到结果返回。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

此时，恭喜您已经掌握了 XIAO 接入 SenseCraft 的所有知识和内容，我们非常欢迎您使用我们的 XIAO 和 SenseCraft 来发挥更多的创造力！

## 故障排查

### Q1: 为什么在获取 AI 答案后结果为空？

这可能是由于接口超时导致的，您可以等待下一次查询发送后再检查结果。请注意，此结果只能被获取一次，之后结果会立即被清除，无法再次查询。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>