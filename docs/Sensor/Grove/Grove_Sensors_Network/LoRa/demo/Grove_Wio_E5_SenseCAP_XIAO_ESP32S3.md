---
description: Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino
title: Grove - Wio-E5 SenseCAP Cloud with XIAO ESP32S3
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Wio_E5_SenseCAP_XIAO_ESP32S3
last_update:
  date: 2/2/2024
  author: Yvonne
---

# Grove - Wio-E5 and XIAO ESP32S3 on SenseCAP Cloud with Arduino

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"/></div>


The integration of Wio-E5 with XIAO-ESP32-S3 through Arduino presents a robust platform for IoT project development. This guide is designed to assist you in establishing a seamless connection between Wio-E5 and XIAO-ESP32-S3, enabling a wide range of applications and functionalities.

I will lead you through the process of utilizing **XIAO-ESP32-S3, Grove-Wio-E5, and Grove-Temperature & Humidity Sensor** for LoRa communication. Tailored for both beginners and intermediate enthusiasts, this tutorial offers step-by-step instructions for the setup and implementation of wireless communication using LoRa technology. The goal is to empower you with the skills to effectively employ XIAO-ESP32-S3 for LoRa communication. In the final stages, we will utilize **ChirpStack** to display the collected data in **Home Assistant**.

## Implementation

### Arduino Program Code

### Software

Make certain modifications to the following code, such as modifying the AppKEY and other essential information of LoRa communication module, so as to be able to access LoRaWAN, and then modify the data we want to send by command: AT+CMSGHEX. For example, I send data by simulating temp and humi here.

```

# include <Arduino.h>
#include "Wire.h"
#include "DHT.h"

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int sensorPin = A1;
#define DHTTYPE DHT20   // DHT 20
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin


static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    Serial1.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (p_ack == NULL)
    {
        return 0;
    }

    do
    {
        while (Serial1.available() > 0)
        {
            ch = Serial1.read();
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
  Serial1.begin(9600, SERIAL_8N1, 44, 43);
  Wire.begin();
  dht.begin();

  if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
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
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X%04X\"\r\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100),analogRead(sensorPin));
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


### ChirpStack Configuration

ChirpStack  is an open-source Internet of Things (IoT) solution designed for building and managing LoRaWAN networks. It provides a comprehensive set of tools and services to assist users in deploying, managing, and monitoring LoRaWAN networks, including gateways, network servers, application servers, and devices. For information on how to connect to ChirpStack, please refer to this [link](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration).

After creating a new device profile in ChirpStack, fill in the payload codec with the following code:

```
function decodeUplink(input) {
    var decoded = {
        temp: 0,
        humi: 0,
      	moisture: 0
    };
    var bytes = input['bytes'];
    bytes = bytes2HexString(bytes);

    // 假设数据以100倍的比例进行了编码
    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
    decoded.humi = parseInt(bytes.slice(4,8), 16) / 100;
    decoded.moisture = parseInt(bytes.slice(-4), 16);

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
        },
      	{
            type: 'moisture',
            measurementId: 4103,
            measurementValue: decoded.moisture
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


#### Click **Submit**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"/></div>

As shown in the following figure, the relevant data is received, indicating that the data is successfully sent.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"/></div>


Decoding alone may not provide a visually intuitive representation of sensor data. In such cases, we can utilize user-friendly platforms, with Home Assistant being a prime example.


### Application: Integrate with Home Assistant

**Home Assistant** is an open-source smart home automation platform designed to enable users to integrate, control, and automate various smart devices and services. It supports interoperability with a wide range of smart home devices, allowing users to create customized automation scenarios and smart home control systems. If we can integrate  XIAO-ESP32-S3 with Home Assistant, it will diversify the development possibilities for XIAO-ESP32-S3.

Both ChirpStack and Home Assistant have built-in MQTT plugin integration. This allows them to communicate data through the MQTT protocol, facilitating the transmission of sensor data from the gateway (equipped with an MQTT plugin) to Home Assistant.

You can also integrate Wio-E5 with XIAO-ESP32-S3 into Home Assistant. Please refer to this [tutorial](https://wiki.seeedstudio.com/home_assistant_sensecap/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Step 3:** Click Send and Test the sensor by clicking **Measure**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"/></div>

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
