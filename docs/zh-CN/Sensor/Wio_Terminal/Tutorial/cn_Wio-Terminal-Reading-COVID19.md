---
description: 使用 Wio Terminal 读取冠状病毒实时数据
title: 使用 Wio Terminal 读取冠状病毒实时数据
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Reading-COVID19
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 使用 Wio Terminal 读取冠状病毒 COVID-19 实时数据

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" /></div>

本教程是对[从 Wio Terminal 读取 Github 仓库统计信息](https://wiki.seeedstudio.com/cn/Wio-Terminal-Reading-Github/)的修改版本，修改后可以访问[冠状病毒 COVID19 API](https://covid19api.com/)并解析数据，在 LCD 屏幕上显示实时 COVID-19 数据。

## 零件清单

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal 电池底座](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 功能特性

- 连接到 https 服务器

- 获取 COVID-19 实时数据 API

- 按下按钮刷新数据

## 所需的 Arduino 库

- 安装 LCD 屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 访问 [ArduinoJson](https://github.com/bblanchon/ArduinoJson) 仓库并将整个仓库下载到本地驱动器。

  - 现在，可以将 ArduinoJson 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择刚刚下载的 `ArduinoJson` 文件。

- 有关 Https 连接的更多信息，请访问[**这里**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code)。

## Arduino 说明

- 下载 [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) 头文件，以便可以使用 LCD 库中包含的免费字体的缩写。请确保将此头文件放在与 Arduino 草图相同的位置。

- 在[这里](http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip)下载完整代码或复制以下内容。

- 上传代码。

## 完整代码

**注意：** 将 `ssid` 和 `password` 更改为您的网络 Wi-Fi。

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "YourNetworkName";
const char* password = "yourNetworkPassword";

const char*  server = "api.covid19api.com";  // 服务器 URL

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\n"
                            "MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\n"
                            "DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\n"
                            "SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\n"
                            "GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\n"
                            "AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\n"
                            "q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\n"
                            "SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\n"
                            "Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\n"
                            "a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\n"
                            "/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\n"
                            "AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\n"
                            "CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\n"
                            "bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\n"
                            "c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\n"
                            "VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\n"
                            "ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\n"
                            "MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\n"
                            "Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\n"
                            "AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\n"
                            "uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\n"
                            "wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\n"
                            "X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\n"
                            "PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\n"
                            "KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n"
                            "-----END CERTIFICATE-----\n";

// 如果需要，您可以使用 x.509 客户端证书
//const char* test_client_key = "";   //用于验证客户端
//const char* test_client_cert = "";  //用于验证客户端

String data;

WiFiClientSecure client;

void setup() {
    //初始化串口并等待端口打开：
    Serial.begin(115200);
    delay(100);

    pinMode(WIO_KEY_C, INPUT_PULLUP);

    Serial.print("尝试连接到 SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setFreeFont(FMB12);
    tft.setCursor((320 - tft.textWidth("正在连接 Wi-Fi.."))/2, 120);
    tft.print("正在连接 Wi-Fi..");

    // 尝试连接到 Wifi 网络：
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // 等待 1 秒后重试
        delay(1000);
    }

    Serial.print("已连接到 ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("已连接!"))/2, 120);
    tft.print("已连接!");

    getData();
}

int lastState = 1;
void loop()
{
    int currentState = digitalRead(WIO_KEY_C);
    if (currentState == 0) {
      if (currentState != lastState) {
        getData();
      }
      lastState = !lastState;
    }
}

void getData() {
    client.setCACert(test_root_ca);
  //client.setCertificate(test_client_key); // 用于客户端验证
  //client.setPrivateKey(test_client_cert); // 用于客户端验证

    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE);
    tft.setCursor((320 - tft.textWidth("正在连接服务器.."))/2, 120);
    tft.print("正在连接服务器..");

    Serial.println("\n开始连接到服务器...");
    if (!client.connect(server, 443)) {
        Serial.println("连接失败!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("连接失败!"))/2, 120);
        tft.print("连接失败!");
    } else {
        Serial.println("已连接到服务器!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("已连接到服务器!"))/2, 120);
        tft.print("已连接到服务器!");

        // 发出 HTTP 请求：
        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");
        client.println("Host: api.covid19api.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("已接收头部信息");
                break;
            }
        }

        while(client.available())
        {
          String line = client.readStringUntil('\r');
          data = line;
        }
        Serial.println(data);
        client.stop();
        Serial.println("关闭连接");
    }

    //使用 ArduinoJson 解析数据，更多信息请查看 ArduinoJson
    const size_t capacity = JSON_OBJECT_SIZE(3) + 50;
    DynamicJsonDocument doc(capacity);
    deserializeJson(doc, data);

    long TotalConfirmed = doc["TotalConfirmed"];
    long TotalDeaths = doc["TotalDeaths"];
    long TotalRecovered = doc["TotalRecovered"];

// -----------------LCD---------------------

    tft.fillScreen(tft.color565(24,15,60));
    tft.setFreeFont(FF17);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawString("COVID-19 仪表板/全球",20,10);

    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));

    tft.setFreeFont(FM9);
    tft.drawString("总确诊数", 75, 50);
    tft.drawString("总死亡数",95, 110);
    tft.drawString("总康复数",75, 170);

    tft.setFreeFont(FMB12);
    tft.setTextColor(TFT_RED);
    tft.drawNumber(TotalConfirmed, 110, 75);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawNumber(TotalDeaths, 120, 135);
    tft.setTextColor(TFT_GREEN);
    tft.drawNumber(TotalRecovered, 110, 195);
}
```