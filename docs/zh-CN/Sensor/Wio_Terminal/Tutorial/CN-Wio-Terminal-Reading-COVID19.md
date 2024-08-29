---
description:  Reading Coronavirus Live Data using Wio Terminal
title:  使用Wio终端读取冠状病毒COVID-19实时数据
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Reading-COVID19
last_update:
  date: 3/07/2024
  author: jessie
---

# 使用Wio终端读取冠状病毒COVID-19实时数据

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" /></div>

本Wiki是对 [使用Wio终端读取GitHub存储库统计信息](https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/)的统计, 修改后可以访问 [Coronavirus COVID19 API](https://covid19api.com/) 并解析数据，将实时COVID-19数据显示在LCD屏幕上。

## 零件清单

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal 电池底盘](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 特点

- 连接到https服务器

- 获取COVID-19实时数据API

- 按钮按下以刷新数据

## 所需的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`, 请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 访问 [ArduinoJson](https://github.com/bblanchon/ArduinoJson) 存储库并将整个存储库下载到本地驱动器。

  - 现在，可以将ArduinoJson库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `ArduinoJson` 文件。

- 有关Https连接的更多信息，请访问 [**此处**](https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code)。

## Arduino说明

- 下载 [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) 头文件，以便可以在LCD库中使用自由字体的缩写。请确保将此头文件放在与Arduino Sketch相同的位置。

- 下载 [此处](http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip) 的完整代码或复制以下代码。

- 上传代码。

## 完整代码

**注:** 将代码中的 `ssid` 和 `password` 更改为您的无线网络Wi-Fi的名称和密码。

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "YourNetworkName";
const char* password = "yourNetworkPassword";

const char*  server = "api.covid19api.com";  // Server URL

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

// You can use x.509 client certificates if you want
//const char* test_client_key = "";   //to verify the client
//const char* test_client_cert = "";  //to verify the client

String data;

WiFiClientSecure client;

void setup() {
    //Initialize serial and wait for port to open:
    Serial.begin(115200);
    delay(100);

    pinMode(WIO_KEY_C, INPUT_PULLUP);

    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setFreeFont(FMB12);
    tft.setCursor((320 - tft.textWidth("Connecting to Wi-Fi.."))/2, 120);
    tft.print("Connecting to Wi-Fi..");

    // attempt to connect to Wifi network:
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // wait 1 second for re-trying
        delay(1000);
    }

    Serial.print("Connected to ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("Connected!"))/2, 120);
    tft.print("Connected!");

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
  //client.setCertificate(test_client_key); // for client verification
  //client.setPrivateKey(test_client_cert); // for client verification

    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE);
    tft.setCursor((320 - tft.textWidth("Conectting to Server.."))/2, 120);
    tft.print("Connecting to Server..");

    Serial.println("\nStarting connection to server...");
    if (!client.connect(server, 443)) {
        Serial.println("Connection failed!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connection failed!"))/2, 120);
        tft.print("Connection failed!");
    } else {
        Serial.println("Connected to server!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connected to Server!"))/2, 120);
        tft.print("Connected to Server!");

        // Make a HTTP request:
        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");
        client.println("Host: api.covid19api.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("headers received");
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
        Serial.println("closing connection");
    }

    //ArduinoJson to parse data, plesae check ArduinoJson for more info
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
    tft.drawString("COVID-19 Dashboard/Global",20,10);

    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));

    tft.setFreeFont(FM9);
    tft.drawString("Total Confirmed", 75, 50);
    tft.drawString("Total Deaths",95, 110);
    tft.drawString("Total Recovered",75, 170);

    tft.setFreeFont(FMB12);
    tft.setTextColor(TFT_RED);
    tft.drawNumber(TotalConfirmed, 110, 75);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawNumber(TotalDeaths, 120, 135);
    tft.setTextColor(TFT_GREEN);
    tft.drawNumber(TotalRecovered, 110, 195);
}
```
