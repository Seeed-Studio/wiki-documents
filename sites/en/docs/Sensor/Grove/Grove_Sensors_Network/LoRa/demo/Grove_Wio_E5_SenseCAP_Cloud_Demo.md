---
description: How to Use Arduino Uno R4 with LoRa Module
title: Grove - Wio-E5 Used with Arduino Uno R4 Demo
keywords:
- LoRaWAN
- Home Assistant
- Arduino UNO R4
- Wio E5
slug: /Grove_Wio_E5_SenseCAP_Cloud_Demo
last_update:
  date: 2/02/2024
  author: JoJang
---

# How to Use Arduino Uno R4 with LoRa Module on Home Assistant

### Introduction


The **Arduino UNO R4** is an integrated tool with enhanced processing capabilities and additional peripherals, making it an excellent prototype and learning tool for both beginners and experienced electronics enthusiasts. However, if you possess an Arduino UNO R4 and desire ultra-low power and long-range message transmission capabilities, I recommend incorporating the Grove Wio-E5.

The **Grove Wio-E5** is a user-friendly LoRa module. LoRa is well-suited for applications that require transmitting small amounts of data at low bit rates, offering longer transmission distances compared to technologies like WiFi, Bluetooth, or ZigBee. These characteristics make LoRa particularly suitable for operation in low-power modes.

Next, I will guide you on how to use the **Arduino UNO R4, Grove-Wio-E5, and Grove-Temperature & Humidity Sensor** for LoRa communication. This tutorial is designed to provide comprehensive instructions for beginners and intermediate enthusiasts on setting up and implementing wireless communication based on LoRa. It aims to help you master the skills of using Arduino UNO R4 for LoRa communication. Finally, through **ChirpStack**, we will display the data in **Home Assistant**.



### Implementation

#### Arduino Program Code

* **Hardware**

In this tutorial, we will use the Arduino UNO R4 WiFi development board and the Grove - Wio-E5. As shown in the picture below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg" alt="pir" width={700} height="auto" /></p>



<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino UNO R4</th>
        <th>Grove-Wio-E5</th>
        <th>Grove-Temperature & Humidity Sensor</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>



We need to connect the pins on the Grove Wio-E5 to their counterparts on the R4 board. The table below.
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
            <th align="center">Grove-Temperature & Humidity Sensor</th>
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

The hardware required for the project is complete.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png" alt="pir" width={700} height="auto" /></p>

* **Software**

The following code is written based on Arduino Uno R4, with custom sensors added to the R4 board. It reads the sensor values and assigns them directly.

```cpp
# include <Arduino.h>
# include <SoftwareSerial.h>
#include "Wire.h"
#include "DHT.h"

#define DHTTYPE DHT20   // DHT 20
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

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
    char cmd_buffer[256];  // Adjust the buffer size as needed
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    vsprintf(cmd_buffer, p_cmd, args);  // Format the command string
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


#### ChirpStack Configuration

**ChirpStack**  is an open-source Internet of Things (IoT) solution designed for building and managing LoRaWAN networks. It provides a comprehensive set of tools and services to assist users in deploying, managing, and monitoring LoRaWAN networks, including gateways, network servers, application servers, and devices. For information on how to connect to ChirpStack, please refer to the following link: [Chirpstack-Configuration](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)


After creating a new device profile in ChirpStack, fill in the payload codec with the following code:

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


Then click `Submit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png" alt="pir" width={700} height="auto" /></p>



As shown in the following figure, the relevant data is received, indicating that the data is successfully sent.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png" alt="pir" width={700} height="auto" /></p>

Decoding alone may not provide a visually intuitive representation of sensor data. In such cases, we can utilize user-friendly platforms, with Home Assistant being a prime example.


### Application: Integrate with Home Assistant

Home Assistant is an open-source smart home automation platform designed to enable users to integrate, control, and automate various smart devices and services. It supports interoperability with a wide range of smart home devices, allowing users to create customized automation scenarios and smart home control systems. If we can integrate Arduino UNO R4 with Home Assistant, it will diversify the development possibilities for Arduino UNO R4.

Both ChirpStack and Home Assistant have built-in MQTT plugin integration. This allows them to communicate data through the MQTT protocol, facilitating the transmission of sensor data from the gateway (equipped with an MQTT plugin) to Home Assistant.

You can also integrate Arduino Uno R4 into Home Assistant. Please refer to this tutorial: [home_assistant_sensecap](https://wiki.seeedstudio.com/home_assistant_sensecap/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png" alt="pir" width={700} height="auto" /></p>
