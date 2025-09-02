---
sidebar_position: 2
description: Using XIAO ESP32C3 to connect to SenseCraft Data Platform AI Advisor for planting advice
title: Planting Advice
keywords:
- sensecraft data platform
- xiao
- AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-data-platform/applications/planting-advice
aliases:
  - /xiao_esp32c3_sensecapai
last_update:
  date: 06/06/2025
  author: Jancee
---

:::tip note
SenseCAP Platform is officially renamed as `SenseCraft Data Platform`!
:::

# Using XIAO ESP32C3 to connect to SenseCraft Data Platform for planting advice

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

During this time, Seeed Studio's SenseCraft Data platform developed and released new AI features. Currently the main features of AI Advisor on SenseCraft Data Platform are focused on providing constructive planting advice to growers, and will be updated with richer AI features in the near future!

This tutorial, then, will bridge the XIAO ESP32 series with the `SenseCraft Data platform`, detailing how to use the XIAO and Grove series sensors to upload data to platform and get constructive suggestions from the AI based on these sensor values.

## Getting Started

### Hardware Preparation

The three pieces of hardware that will be used in this tutorial are the XIAO ESP32C3, the Grove Base for XIAO, and the Grove SHT40 temperature and humidity sensor. For the convenience of wiring, we use the XIAO expansion board, which you can purchase according to your actual needs.

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
          <th>Grove - Temperature & Humidity Sensor(SHT40)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### Software Preparation

If this is your first time using the XIAO ESP32C3, then you can need to read this Wiki first to learn to configure a good development environment in Arduino.

- [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup)

Also, this tutorial is compatible with [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), you can also use XIAO ESP32S3 to complete the content of this tutorial.

- [Getting Started with Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation)

Since the SHT40 sensor is used, you also need to add the following two libraries well in Arduino to ensure that the program can run smoothly.

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 Getting Temperature and Humidity Data

As shown in the figure below, please connect the Grove SHT40 temperature and humidity sensor to the IIC interface of the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

Then upload the following program for the XIAO ESP32C3 to drive the SHT40 sensor to work and start getting the temperature and humidity values in the air.

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

Open the serial monitor of Arduino IDE and select the baud rate as 115200 and observe the result.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## Introduction to SenseCraft Data Platform HTTPS API -- Upload Sensor Data

Now that we know how to get data from the SHT40 sensor, let's start by learning the following API call rules for `SenseCraft Data Platform`. You can read about using the `SenseCraft Data Platform`s API by clicking the button below to jump directly to the SenseCraft Documentation Center.

- [SenseCraft Document Center](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

The basic principle of SenseCraft Data Platform to receive sensor data is to use EUI, Key as the authentication information and report the device data by POST.

HTTPS Server Address:

```
https://sensecap.seeed.cc/deviceapi
```

### About Header

In POST, you need to add the authentication information in the Header, which is the base64 encrypted data of the device's **EUI** and **Key** in the following basic format.

```
authorization = Device base64(EUI:Key)
```

### About Interface

The server path to be used by the device to report sensor data is: `/kit/message_uplink`, the mode is **POST**, and the following request parameters are available and allowed.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Type</th>
        <th>Description</th>
 </tr>
 <tr>
     <td align="center">- requestId</td>
     <td align="center">string</td>
     <td align="center">The uuidv4 is generated on the device side each time data is reported, ensuring that the value is different for each message.</td>
 </tr>
 <tr>
     <td align="center">- timestamp</td>
     <td align="center">string</td>
     <td align="center">Millisecond timestamp when the message was sent.</td>
 </tr>
 <tr>
     <td align="center">- intent</td>
     <td align="center">string</td>
     <td align="center">Currently fixed to "event".</td>
 </tr>
 <tr>
     <td align="center">- deviceEui</td>
     <td align="center">string</td>
     <td align="center">Device EUI.</td>
 </tr>
 <tr>
     <td align="center">- deviceKey</td>
     <td align="center">string</td>
     <td align="center">Device Key.</td>
 </tr>
    <tr>
     <td align="center">- events</td>
     <td align="center">[object]</td>
     <td align="center">An array of events where data collection and device status is reported.</td>
 </tr>
    <tr>
     <td align="center">-- name</td>
     <td align="center">string</td>
     <td align="center">Event Name.</td>
 </tr>
    <tr>
     <td align="center">-- value</td>
     <td align="center">[object]</td>
     <td align="center">Event Value.</td>
 </tr>
    <tr>
     <td align="center">-- timestamp</td>
     <td align="center">string</td>
     <td align="center">Millisecond timestamp at the time of data collection.</td>
 </tr>
</table>

The following is an example of sending sensor upload data.

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

## Upload temperature and humidity data to SenseCraft Data Platform

Once we understand the above rules, we can start writing the HTTPS program to upload the temperature and humidity data of our SHT40 for SenseCraft Data Platform.

### Step 1. Register and login to SenseCraft Data Platform

You can click on the link below to go directly to the SenseCraft Data Platform International site. If this is your first time using SenseCraft's services, you may need to register for an account.

- [SenseCraft Data Platform Website](https://sensecap.seeed.cc)

Logging in to SenseCraft Data Platform takes you to the console screen. We need to add a kit of our own, please click **DevelopKit** on the left menu bar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

Then click **Create DevelopKit** in the upper left.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

Then just select the **MIG Develop Kit** and click the **Confirm** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

Next, you'll be able to see the device you created in the dashboard, usually the first one. Clicking on the "Connect" button for that device will display the **EUI** and **KEY** information for that device. Please save them, we will use them in the next steps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Obtaining Forensic Information

SenseCraft's interface for authentication information requires Base64-based **EUI:KEY** encryption.

For example, your EUI is `2CF7F11003900000` and Key is `06C42483D7155E7006C42483D7155E70`. then you can get the Base64 encrypted forensic information by the following commands in the terminal.

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

Please keep the authentication information, we will use it as the **apiKey** in the program later.

### Step 3. Obtaining the number of the sensor type

Included in the upload is the number of the sensor type and sensor name that we are reporting. This is so that SenseCraft knows what sensor we are uploading data from and what units the data is in.

For this section, please refer to the numbered cross-reference table of sensors and values provided in the SenseCraft Documentation Center.

- [List of Measurement IDs](https://sensecap-docs.seeed.cc/measurement_list.html)

- [List of Sensor Types](https://sensecap-docs.seeed.cc/sensor_types_list.html)

How to use these two documents, we will use the SHT40 sensor used in this article as an example, to give you an introduction to explain. The SHT40 sensor is a sensor that can measure both temperature and humidity data. So he has a code for the sensor type and two codes for the (temperature, humidity) values.

The code for a sensor type we need to look up in [List of Sensor Types](https://sensecap-docs.seeed.cc/sensor_types_list.html). We found a temperature and humidity sensor with the code **1001**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

The codes for the sensor values we're talking about are actually the Measurement IDs in the diagram, **4097** and **4098**. you can also find them in the [List of Measurement IDs](https://sensecap-docs.seeed.cc/measurement_list.html) and check to see if the units of these values match your sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
If you can't find the right type of sensor for you in the table. You may need to use a custom type with a sensor number of **4165** to **4174**. the sensor value may be unitless.
:::

### Step 4. Install the necessary libraries

First is the **NTPClient** library, which can use XIAO networking to get the current timestamp.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

Next is the **ArduinoJson** library, which makes it easier to help us parse what SenseCraft returns to us.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### Step 5. Uploading sensor data through the program

The following is the procedure for uploading SHT40 data. Please note that the following macro definitions should only be used if they are modified to suit your situation.

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

Where ssid and password refer to your network name and password. apiKey refers to the forensic information we obtained in **Step 2**. deviceEUI and deviceKey are your device EUI and Key, which were also obtained in **Step 2**.

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

Turn on the serial monitor, when you turn it on, the program will start to execute, when you receive the response as shown in the figure, it means that SenseCraft has successfully received one of your data uploads.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
The minimum time interval for SenseCraft to receive data uploads is five minutes.
:::

## Introduction to `SenseCraft Data Platform`'s HTTP API -- Getting AI Advice

Next, let's learn how to use `SenseCraft Data Platform`'s API below. Use our sensor data over time as a reference to get suggestions from the AI.

The interface call process for SenseCraft AI is roughly as follows.

- Obtain the device and measurement value IDs under the account that are supported for use in AIGC via the interface I.
- Using the result obtained by interface I as one of the parameters, interface II is called to obtain the AIGC result.
  - Since the AIGC generation time may be long, the interface I will return a **resource_id** when it is called for the first time, and then the front-end will use the **resource_id** to poll for the result of the response. When the code of the response is **11338**, it means that the AIGC is still in the process of inference, and the interface II needs to be called again with the **resource_id** until the final result is returned.
  - Interface II has a flow limit of up to ten requests within five minutes for the same account.

HTTPS Server Address:

```
https://sensecap.seeed.cc/openapi
```

### About Interface I

The server path to be used by the device to report sensor data is: `/ai/view_suggestion_by_measurements`, the mode is **POST**, and the following request parameters are available and allowed.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Description</th>
        <th>Note</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Select language</td>
     <td align="center">1:Chinese, 2:English. Default Chinese.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Location</td>
     <td align="center">Location, e.g. "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Crop or animal</td>
     <td align="center">Crop or animal to be consulted, e.g. "apple".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Device data inquiry time</td>
     <td align="center">1: 30 days 2: 180 days 3: 360 days. Default 30 days</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Device measurement types</td>
     <td align="center">Up to six</td>
 </tr>
    <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">Device EUI</td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Channel number</td>
     <td align="center">This value is currently fixed at 1.</td>
 </tr>
    <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Measurement value number</td>
     <td align="center"></td>
 </tr>
</table>

The following is an example of calling the Interface I.

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

### About Interface II

The structure and framework of Interface I is largely the same as Interface II, with the only difference being the addition of an extra **resource_id** at the end. The following request parameters are available and allowed.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Description</th>
        <th>Note</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Select language</td>
     <td align="center">1:Chinese, 2:English. Default Chinese.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Location</td>
     <td align="center">Location, e.g. "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Crop or animal</td>
     <td align="center">Crop or animal to be consulted, e.g. "apple".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Device data inquiry time</td>
     <td align="center">1: 30 days 2: 180 days 3: 360 days. Default 30 days</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Device measurement types</td>
     <td align="center">Up to six</td>
 </tr>
  <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">Device EUI</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Channel number</td>
     <td align="center">This value is currently fixed at 1.</td>
 </tr>
  <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Measurement value number</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">- resource_id</td>
     <td align="center">Cached Credentials</td>
     <td align="center">In the case where a question has been asked and the returned result is obtained, carry this parameter to poll the backend until the result of the AI is returned.</td>
 </tr>
</table>

The following is an example of getting AI advice.

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

## XIAO ESP32C3 Getting SenseCraft AI Advisor

### Step 6. Create API Access

If you want to call the AIGC interface of SenseCraft, then you need to prepare the API ID and API Access Key in SenseCraft. Select **Access API keys** in the left menu bar of the dashboard. Then click **Create Access Key** at the top.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

Copy the created **Access Key ID** and **Access API Key**. Please keep them safe and we will use them in the following steps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### Step 7. Write and upload programs

Following the interface guidelines above, we can then write a program that allows SenseCraft to use the temperature and humidity data from our SHT40 to return planting recommendations to us.

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

Here, there are some parameters to keep an eye on. At the beginning of the code, a macro definition `DEBUG` is commented out. if this line is uncommented, then the program can be executed to print the message returned each time SenseCraft returns.

Below `DEBUG` is the information that needs to be changed depending on your account and device. For example, if you are not growing apples and the location is not Shenzhen, then you need to change it to suit your situation.

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

In addition to this, there are two lines in the code that parse the Access API.

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

For example, the API ID and API Key you obtained in **step 6** are `N0AV094KBPH1J9PX` and `5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`, respectively. Then this line of code you should change to:

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

Upload this program and you will see the message upload and keep looping through the results of the answers returned by the AI until the results are returned.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

At this point, congratulations you have mastered all the knowledge and content of XIAO access SenseCraft, we very much welcome you to use our XIAO and SenseCraft to utilize more of your creativity!

## Troubleshooting

### Q1: Why am I getting null results after getting AI answers?

This may be due to an interface timeout, you can wait until the next query is sent before checking the results. Please note that this result can only be fetched once, after that the result is immediately erased and can no longer be queried.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
