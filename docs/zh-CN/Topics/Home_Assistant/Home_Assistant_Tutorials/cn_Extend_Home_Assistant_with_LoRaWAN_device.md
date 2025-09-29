---
description: 使用 LoRaWAN 设备扩展 Home Assistant（XIAO-ESP32-S3）
title: 使用 LoRaWAN 设备扩展 Home Assistant（XIAO-ESP32-S3）
keywords:
- LoRaWAN
- Home Assistant
- XIAO ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ha_xiao_esp32
last_update:
  date: 1/10/2023
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao1.png" alt="pir" width={1000} height="auto" /></p>

### 介绍

Home Assistant 是一个开源智能家居平台系统，用户可以轻松地将自己的物联网设备连接到系统中进行统一管理。然而，Home Assistant 的主要特点不仅仅是实现各种传感设备的查看，而是实现跨平台设备的自动联动，只有这样的智能家居平台才足以具有活力。


### 将 LoRaWAN 传感器添加到 Home Assistant

#### Arduino 程序代码

* **硬件**

如下所示，将 XIAO 安装到扩展板上，同时将 E5 模块连接到板子的 GND、3V3、SDA-4 和 SL-5 引脚

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao-hardware.png" alt="pir" width={700} height="auto" /></p>


* **软件**

对以下代码进行一定的修改，例如修改 LoRa 通信模块的 AppKEY 和其他必要信息，以便能够接入 LoRaWAN，然后通过命令：AT+CMSGHEX 修改我们要发送的数据。例如，我在这里通过模拟温度和湿度来发送数据

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
  Serial.begin(115200); // 初始化串口通信
  Serial1.begin(9600, SERIAL_8N1, 44, 43);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
{
    is_exist = true;
    
    // 发送 AT+ID 命令
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // 命令发送成功并收到响应
        // 返回的数据可以在 recv_buf 中找到
        Serial.print("接收到的 ID 数据: ");
        Serial.println(recv_buf);
    } else {
        // 命令发送失败或未收到响应。
        Serial.println("获取 ID 数据失败。");
    }

    // 其他命令
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
    Serial.print("未找到 E5 模块。\r\n");
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
                    Serial.print("加入失败！\r\n\r\n");
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
                    Serial.print("发送失败！\r\n\r\n");
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

#### ChirpStack 配置

在 ChirpStack 中创建一个新的设备配置文件，并在有效载荷编解码器中填入以下代码：

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

然后点击 `Submit`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao3.png" alt="pir" width={800} height="auto" /></p>


如下图所示，接收到了相关数据，表明数据发送成功

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao4.png" alt="pir" width={700} height="auto" /></p>


#### Home Assistant 配置

按照以下教程完成 Home Assistant 集成的安装：[SenseCAP Integration for Home Assistant](https://wiki.seeedstudio.com/cn/home_assistant_sensecap/)。等待几分钟后，我们可以看到设备 XIAO-ESP32-S3 已被识别，该设备中有两个实体，即温度和湿度，这正是我们刚才发送的两个数据。并且已经在 Home Assistant 中被识别为相应的传感器实体。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao6.png" alt="pir" width={700} height="auto" /></p>


将设备添加到概览后，我们已经完成了将 XIAO 添加到 Home Assistant 的所有流程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png" alt="pir" width={700} height="auto" /></p>


### 讨论

Home Assistant 是一个非常强大的智能家居开源系统，我们可以将各种设备连接到这个平台，智能家居生态变得越来越大，你可以想象使用 XIAO 可以控制 Apple HomePod？通过本教程，我们已经将 XIAO 连接到了 Home Assistant，这只是一个开始。同样，我们可以将关键传感器连接到 Home Assistant 来实现更多有趣的功能，整个智能家居生态将变得越来越大。

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