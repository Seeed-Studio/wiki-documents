---
description: Extend Home Assistant with LoRaWAN device (XIAO-ESP32-S3)
title: Extend Home Assistant with LoRaWAN device (XIAO-ESP32-S3)
keywords:
- LoRaWAN
- Home Assistant
- XIAO ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ha_xiao_esp32
last_update:
  date: 1/10/2023
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao1.png" alt="pir" width={1000} height="auto" /></p>

### Introduction

Home Assistant is an open source smart home platform system, and user can easily connect their own Internet of Things devices to the system for unified management. However, the main special point of the Home Assistant is not just to realize the view of various sensing devices, but to realize the automatic linkage of cross-platform device, only such a smart home platform is enough to have vitality.

### Add LoRaWAN Sensors to Home Assistant

#### Arduino Program Code

- **Hardware**

As shown below, install XIAO onto the expansion board while connecting the E5 module to the GND, 3V3, SDA-4 and SL-5 pins of the board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao-hardware.png" alt="pir" width={700} height="auto" /></p>

- **Software**

Make certain modifications to the following code, such as modifying the AppKEY and other essential information of LoRa communication module, so as to be able to access LoRaWAN, and then modify the data we want to send by command: AT+CMSGHEX. For example, I send data by simulating temp and humi here

```cpp
# include <Arduino.h>

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 25;
int humi = 56;


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
  Serial.begin(115200); // Initialize serial communication
  Serial1.begin(9600, SERIAL_8N1, 44, 43);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
{
    is_exist = true;
    
    // Send AT+ID Command
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // Command sent successfully and response received
        // The returned data can be found in recv_buf
        Serial.print("Received ID data: ");
        Serial.println(recv_buf);
    } else {
        // The command failed to be sent or no response was received.
        Serial.println("Failed to get ID data.");
    }

    // Other Commands
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"\r\n");
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
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret)
                {
                    recv_prase(recv_buf);
                }
                else
                {
                    Serial.print("Send failed!\r\n\r\n");
                }
                delay(30000);
            }
        }
        else
        {
            delay(1000);
        }
    temp++;
    humi++;
}
```

#### ChirpStack Configuration

Create a new Device profiles in ChirpStack, and fill in the Payload codec with the following code:

```cpp
function decodeUplink(input, port) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes']
   bytes = bytes2HexString(bytes)
  
    decoded.temp = parseInt(bytes.slice(0, 4), 16);
 decoded.humi = parseInt(bytes.slice(-4), 16);

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao3.png" alt="pir" width={800} height="auto" /></p>

As shown in the following figure, the relevant data is received, indicating that the data is successfully sent

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao4.png" alt="pir" width={700} height="auto" /></p>

#### Home Assistant Configuration

Complete the installation of the Home Assistant intergration with the following tutorial:[SenseCAP Integration for Home Assistant](https://wiki.seeedstudio.com/home_assistant_sensecap/). Wait for a few minutes, we can see that the device XIAO-ESP32-S3 has been recognized, and there are two entities in this device, namely Temperature and Humidity, which are the two data we have sent just now. And have been identified as the corresponding sensor entities in the Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao6.png" alt="pir" width={700} height="auto" /></p>

After adding the device to the overview, we have completed all the process of adding XIAO to the Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png" alt="pir" width={700} height="auto" /></p>

### Discussion

Home Assistant is a very powerful smart home open source system, we can connect a variety of devices to this platform, the smart home ecology becomes larger and larger, you can imagine using XIAO can control Apple HomePod? Through this tutorial, we have connected XIAO to the Home Assistant, and this is just the beginning. Similarly, we can connect the key sensor to the Home Assistant to achieve more interesting functions, and the whole smart home ecology will become bigger and bigger.

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
