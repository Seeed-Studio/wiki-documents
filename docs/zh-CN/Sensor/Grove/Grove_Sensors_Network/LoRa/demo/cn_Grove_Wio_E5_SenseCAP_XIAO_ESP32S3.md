---
description: Grove - Wio-E5 与 XIAO-ESP32-S3 通过 Arduino 使用
title: Grove - Wio-E5 与 XIAO ESP32S3 使用演示
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3
last_update:
  date: 2/2/2024
  author: Yvonne
---

# 如何通过 Arduino 将 XIAO ESP32S3 与 LoRa 模块配合使用

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"/></div>


Wio-E5 与 XIAO-ESP32-S3 通过 Arduino 的集成为物联网项目开发提供了一个强大的平台。本指南旨在帮助您建立 Wio-E5 和 XIAO-ESP32-S3 之间的无缝连接，实现广泛的应用和功能。

我将引导您完成使用 **XIAO-ESP32-S3、Grove-Wio-E5 和 Grove-温湿度传感器** 进行 LoRa 通信的过程。本教程专为初学者和中级爱好者量身定制，提供使用 LoRa 技术设置和实现无线通信的分步说明。目标是让您掌握有效使用 XIAO-ESP32-S3 进行 LoRa 通信的技能。在最后阶段，我们将利用 **ChirpStack** 在 **Home Assistant** 中显示收集的数据。

## 实现

### Arduino 程序代码

### 软件

对以下代码进行某些修改，例如修改 LoRa 通信模块的 AppKEY 和其他基本信息，以便能够接入 LoRaWAN，然后通过命令 AT+CMSGHEX 修改我们要发送的数据。例如，我在这里通过模拟温度和湿度来发送数据。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <DHT.h>

// 接收数据的缓冲区
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int sensorPin = A1;          // 定义传感器引脚
#define DHTTYPE DHT20        // 使用 DHT 20 类型
DHT dht(DHTTYPE);            // 初始化温湿度 DHT 传感器

// 发送 AT 命令并在超时时间内检查预期响应的函数
static int at_send_check_response(char *expected_ack, int timeout_ms, char *command_format, ...) {
    int character;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, command_format);
    Serial1.printf(command_format, args);
    Serial.printf(command_format, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (expected_ack == NULL) {
        return 0;
    }

    do {
        while (Serial1.available() > 0) {
            character = Serial1.read();
            recv_buf[index++] = character;
            Serial.print((char)character);
            delay(2);
        }

        if (strstr(recv_buf, expected_ack) != NULL) {
            return 1;
        }
    } while (millis() - startMillis < timeout_ms);
    return 0;
}

// 解析接收消息的函数
static void recv_parse(char *message) {
    if (message == NULL) {
        return;
    }
    char *start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    start = strstr(message, "RX");
    if (start && (1 == sscanf(start, "RX: \"%d\"\r\n", &data))) {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.println(led);
        digitalWrite(LED_BUILTIN, led ? LOW : HIGH);
    }

    start = strstr(message, "RSSI");
    if (start && (1 == sscanf(start, "RSSI %d,", &rssi))) {
        Serial.print("RSSI:");
        Serial.println(rssi);
    }
    
    start = strstr(message, "SNR");
    if (start && (1 == sscanf(start, "SNR %d", &snr))) {
        Serial.print("SNR :");
        Serial.println(snr);
    }
}

void setup() {
    Serial.begin(115200); // 初始化串口通信
    Serial1.begin(9600, SERIAL_8N1, 44, 43);
    Wire.begin();
    dht.begin();

    // 基本 AT 命令检查模块是否存在
    if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
        is_exist = true;

        // 发送 AT+ID 命令获取设备 ID
        if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
            Serial.print("Received ID data: ");
            Serial.println(recv_buf);
        } else {
            Serial.println("Failed to get ID data.");
        }

        // 其他配置命令
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3D\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        
        delay(200);
        is_join = true;
    } else {
        is_exist = false;
        Serial.println("No E5 module found.");
    }
}

void loop() {
    float temp_hum_val[2] = {0};
    if (is_exist) {
        int ret = 0;
        if (is_join) {
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret) {
                is_join = false;
            } else {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.println("JOIN failed!");
                delay(5000);
            }
        } else {
            if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X%04X\"\r\n", int(temp_hum_val[1] * 100), int(temp_hum_val[0] * 100), analogRead(sensorPin));
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret) {
                    recv_parse(recv_buf);
                } else {
                    Serial.println("Send failed!");
                }
            }
            delay(30000);
        }
    } else {
        delay(1000);
    }
}
```


### ChirpStack 配置

ChirpStack 是一个开源的物联网（IoT）解决方案，专为构建和管理 LoRaWAN 网络而设计。它提供了一套全面的工具和服务，帮助用户部署、管理和监控 LoRaWAN 网络，包括网关、网络服务器、应用服务器和设备。有关如何连接到 ChirpStack 的信息，请参考此[链接](https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)。

在 ChirpStack 中创建新的设备配置文件后，使用以下代码填写有效载荷编解码器：

```js
function decodeUplink(input) {
  var decoded = {
    temp: 0,
    humi: 0,
    moisture: 0,
  };
  var bytes = input["bytes"];
  bytes = bytes2HexString(bytes);

  // Assuming the data is encoded at a ratio of 100 times
  decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
  decoded.humi = parseInt(bytes.slice(4, 8), 16) / 100;
  decoded.moisture = parseInt(bytes.slice(-4), 16);

  let messages = [
    {
      type: "temp",
      measurementId: 4097,
      measurementValue: decoded.temp,
    },
    {
      type: "humi",
      measurementId: 4098,
      measurementValue: decoded.humi,
    },
    {
      type: "moisture",
      measurementId: 4103,
      measurementValue: decoded.moisture,
    },
  ];

  var result = {};
  result.messages = messages;
  return { data: result };
}

/**
 * Convert to an 8-digit binary number with 0s in front of the number
 * @param arr
 * @returns {string}
 */
function toBinary(arr) {
  let binaryData = arr.map((item) => {
    let data = parseInt(item, 16).toString(2);
    let dataLength = data.length;
    if (data.length !== 8) {
      for (let i = 0; i < 8 - dataLength; i++) {
        data = `0` + data;
      }
    }
    return data;
  });
  let ret = binaryData.toString().replace(/,/g, "");
  return ret;
}

function bytes2HexString(arrBytes) {
  var str = "";
  for (var i = 0; i < arrBytes.length; i++) {
    var tmp;
    var num = arrBytes[i];
    if (num < 0) {
      tmp = (255 + num + 1).toString(16);
    } else {
      tmp = num.toString(16);
    }
    if (tmp.length === 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}
```


#### 点击 **Submit**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"/></div>

如下图所示，接收到相关数据，表明数据发送成功。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"/></div>


仅仅解码可能无法提供传感器数据的直观视觉表示。在这种情况下，我们可以利用用户友好的平台，Home Assistant 就是一个典型的例子。


### 应用：与 Home Assistant 集成

**Home Assistant** 是一个开源的智能家居自动化平台，旨在让用户能够集成、控制和自动化各种智能设备和服务。它支持与各种智能家居设备的互操作性，允许用户创建定制的自动化场景和智能家居控制系统。如果我们能够将 XIAO-ESP32-S3 与 Home Assistant 集成，这将使 XIAO-ESP32-S3 的开发可能性更加多样化。

ChirpStack 和 Home Assistant 都内置了 MQTT 插件集成。这使它们能够通过 MQTT 协议进行数据通信，便于将传感器数据从网关（配备 MQTT 插件）传输到 Home Assistant。

您也可以将 Wio-E5 与 XIAO-ESP32-S3 集成到 Home Assistant 中。请参考此[教程](https://wiki.seeedstudio.com/cn/home_assistant_sensecap/)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **步骤 3：** 点击发送并通过点击 **Measure** 测试传感器

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>