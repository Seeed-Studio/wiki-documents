---
description: 如何在 Home Assistant 上使用 Arduino Uno R4 与 LoRa 模块
title: Grove - Wio-E5 与 Arduino Uno R4 演示
keywords:
- LoRaWAN
- Home Assistant
- Arduino UNO R4
- Wio E5
slug: /cn/Grove_Wio_E5_SenseCAP_Cloud_Demo
last_update:
  date: 2/02/2024
  author: JoJang
---

# 如何在 Home Assistant 上使用 Arduino Uno R4 与 LoRa 模块

### 介绍


**Arduino UNO R4** 是一个集成工具，具有增强的处理能力和额外的外设，使其成为初学者和经验丰富的电子爱好者的优秀原型和学习工具。但是，如果您拥有 Arduino UNO R4 并希望获得超低功耗和长距离消息传输能力，我建议结合使用 Grove Wio-E5。

**Grove Wio-E5** 是一个用户友好的 LoRa 模块。LoRa 非常适合需要以低比特率传输少量数据的应用，与 WiFi、蓝牙或 ZigBee 等技术相比，提供更长的传输距离。这些特性使 LoRa 特别适合在低功耗模式下运行。

接下来，我将指导您如何使用 **Arduino UNO R4、Grove-Wio-E5 和 Grove-温湿度传感器** 进行 LoRa 通信。本教程旨在为初学者和中级爱好者提供关于设置和实现基于 LoRa 的无线通信的全面指导。它旨在帮助您掌握使用 Arduino UNO R4 进行 LoRa 通信的技能。最后，通过 **ChirpStack**，我们将在 **Home Assistant** 中显示数据。



### 实现

#### Arduino 程序代码

* **硬件**

在本教程中，我们将使用 Arduino UNO R4 WiFi 开发板和 Grove - Wio-E5。如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg" alt="pir" width={700} height="auto" /></p>



<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino UNO R4</th>
        <th>Grove-Wio-E5</th>
        <th>Grove-温湿度传感器</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>



我们需要将 Grove Wio-E5 上的引脚连接到 R4 板上的对应引脚。下表显示了连接方式。
<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove Wio-E5</th>
        </tr>
        <tr>
            <td align="center">Pin 2</td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">Pin 7</td>
            <td align="center">RX</td>
        </tr>
        <tr>
            <td align="center">3.3V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>
</div>

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove-温湿度传感器</th>
        </tr>
        <tr>
            <td align="center">A5</td>
            <td align="center">SCL</td>
        </tr>
        <tr>
            <td align="center">A4</td>
            <td align="center">SDA</td>
        </tr>
        <tr>
            <td align="center">5V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>
</div>

项目所需的硬件已完成。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png" alt="pir" width={700} height="auto" /></p>

* **软件**

以下代码基于 Arduino Uno R4 编写，在 R4 板上添加了自定义传感器。它读取传感器值并直接分配它们。

```cpp
# include <Arduino.h>
# include <SoftwareSerial.h>
#include "Wire.h"
#include "DHT.h"

#define DHTTYPE DHT20   // DHT 20
DHT dht(DHTTYPE);         //   DHT10 DHT20 不需要定义引脚

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 1;
int humi = 56;

SoftwareSerial mySerial(2, 7); // Rx, Tx


static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    char cmd_buffer[256];  // 根据需要调整缓冲区大小
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    vsprintf(cmd_buffer, p_cmd, args);  // 格式化命令字符串
    mySerial.print(cmd_buffer);
    Serial.print(cmd_buffer);
    va_end(args);
    delay(50);
    startMillis = millis();


    if (p_ack == NULL)
    {
        Serial.println("p_ack none");
        return 0;
    }

    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.print("rssi:");
        Serial.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.print("snr :");
        Serial.print(snr);
    }
}

void setup() {
  Serial.begin(115200); // 初始化串口通信
  Wire.begin();
  dht.begin();
  if (!mySerial.begin(9600, SERIAL_8N1)) {
        Serial.println("Failed to init soft serial");
        while (1);
    }

  if (at_send_check_response("+AT: OK", 200, "AT\r\n"))
{
    is_exist = true;
    
    // 发送 AT+ID 命令
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // 命令成功发送并且收到响应
        // 可以在 recv_buf 中找到返回的数据
        Serial.print("Received ID data: ");
        Serial.println(recv_buf);
    } else {
        // 命令发送失败或者没有收到响应
        Serial.println("Failed to get ID data.");
    }

    // 其他设置命令
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3D\"\r\n");
    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
    
    delay(200);
    is_join = true;
}
else
{
    is_exist = false;
    Serial.print("No E5 module found.\r\n");
}
}


void loop() {
    float temp_hum_val[2] = {0};
    if(is_exist)
    {
        Serial.println("success");
        delay(1000);
    }

    if (is_exist)
        {
            int ret = 0;
            if (is_join)
            {

                ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
                if (ret)
                {
                    is_join = false;
                }
                else
                {
                    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                    Serial.print("JOIN failed!\r\n\r\n");
                    delay(5000);
                }
            }
            else
            {
              if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100));
                Serial.print(temp_hum_val[0]);
                Serial.println(temp_hum_val[1]);
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret)
                {
                    recv_prase(recv_buf);
                }
                else
                {
                    Serial.print("Send failed!\r\n\r\n");
                }
              }
                delay(30000);
            }
        }
        else
        {
            delay(1000);
        }
}
```

#### ChirpStack 配置

**ChirpStack** 是一个开源的物联网（IoT）解决方案，专为构建和管理 LoRaWAN 网络而设计。它提供了一套全面的工具和服务，帮助用户部署、管理和监控 LoRaWAN 网络，包括网关、网络服务器、应用服务器和设备。有关如何连接到 ChirpStack 的信息，请参考以下链接：[Chirpstack-Configuration](https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)


在 ChirpStack 中创建新的设备配置文件后，使用以下代码填写有效载荷编解码器：

```javascript
function decodeUplink(input) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes'];
    bytes = bytes2HexString(bytes);

    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
    decoded.humi = parseInt(bytes.slice(-4), 16) / 100;

    let messages = [
        {
            type: 'temp',
            measurementId: 4097,
            measurementValue: decoded.temp
        },
        {
            type: 'humi',
            measurementId: 4098,
            measurementValue: decoded.humi
        }
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
  function toBinary (arr) {
    let binaryData = arr.map((item) => {
      let data = parseInt(item, 16)
        .toString(2)
      let dataLength = data.length
      if (data.length !== 8) {
        for (let i = 0; i < 8 - dataLength; i++) {
          data = `0` + data
        }
      }
      return data
    })
    let ret = binaryData.toString()
      .replace(/,/g, '')
    return ret
  }
  
  
  function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
      var tmp
      var num = arrBytes[i]
      if (num < 0) {
        tmp = (255 + num + 1).toString(16)
      } else {
        tmp = num.toString(16)
      }
      if (tmp.length === 1) {
        tmp = '0' + tmp
      }
      str += tmp
    }
    return str
  }
```


然后点击 `Submit`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png" alt="pir" width={700} height="auto" /></p>



如下图所示，接收到了相关数据，表明数据发送成功。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png" alt="pir" width={700} height="auto" /></p>

仅仅解码可能无法提供传感器数据的直观视觉表示。在这种情况下，我们可以利用用户友好的平台，其中 Home Assistant 就是一个典型例子。


### 应用：与 Home Assistant 集成

Home Assistant 是一个开源的智能家居自动化平台，旨在让用户能够集成、控制和自动化各种智能设备和服务。它支持与各种智能家居设备的互操作性，允许用户创建定制的自动化场景和智能家居控制系统。如果我们能够将 Arduino UNO R4 与 Home Assistant 集成，这将使 Arduino UNO R4 的开发可能性更加多样化。

ChirpStack 和 Home Assistant 都内置了 MQTT 插件集成。这使它们能够通过 MQTT 协议进行数据通信，便于将传感器数据从网关（配备 MQTT 插件）传输到 Home Assistant。

您也可以将 Arduino Uno R4 集成到 Home Assistant 中。请参考此教程：[home_assistant_sensecap](https://wiki.seeedstudio.com/cn/home_assistant_sensecap/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png" alt="pir" width={700} height="auto" /></p>