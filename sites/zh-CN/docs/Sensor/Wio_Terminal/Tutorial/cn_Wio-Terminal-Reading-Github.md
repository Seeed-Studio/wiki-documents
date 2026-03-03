---
description: 使用 Wio Terminal 访问 GitHub
title: 使用 Wio Terminal 访问 GitHub
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Reading-Github
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 从 Wio Terminal 读取 Github 仓库统计信息

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" /></div>

本教程介绍如何使用 Wio Terminal 访问 **HTTPS** 服务器，这意味着您可以使用 Wio Terminal 从互联网获取实时数据！在这里，Wio Terminal 连接到 Wi-Fi 并从 Github 获取数据。

通过这个功能，您可以将演示扩展到其他 API，例如获取天气信息、YouTube 统计数据等。

## 零件清单

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal 电池底座](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 功能特性

- 连接到 https 服务器

- 从 Github 获取仓库统计信息

- 可以更改为任何 Github 仓库

## 所需的 Arduino 库

- 安装 LCD 屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 访问 [ArduinoJson](https://github.com/bblanchon/ArduinoJson) 仓库并将整个仓库下载到您的本地驱动器。

  - 现在，ArduinoJson 库可以安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `ArduinoJson` 文件。

- 有关 Https 连接的更多信息，请访问 [**这里**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code)。

## Arduino 说明

- 下载 [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) 头文件，以便可以使用 LCD 库中包含的免费字体的缩写。请确保将此头文件放在与 Arduino 草图相同的位置。

- 在 [这里](https://files.seeedstudio.com/wiki/Wio-Terminal/res/GitHubStats.zip) 下载完整代码或复制以下内容。

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

const char* ssid     = "yourNetworkName";
const char* password = "yourNetworkPassword";

//29*27
const unsigned char watchIMG[] = {
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 
  0x00, 0xFC, 0x07, 0x00, 0x00, 0xFF, 0x1F, 0x00, 0x80, 0x1F, 0x3F, 0x00, 
  0xC0, 0x07, 0x7C, 0x00, 0xE0, 0x03, 0xF8, 0x00, 0xF0, 0xE1, 0xF0, 0x01, 
  0xF8, 0xF1, 0xF1, 0x01, 0xF8, 0xF8, 0xF1, 0x03, 0xFC, 0xF8, 0xF1, 0x03, 
  0xF8, 0xF0, 0xF1, 0x03, 0xF0, 0xF1, 0xF0, 0x01, 0xF0, 0x01, 0xF8, 0x00, 
  0xE0, 0x03, 0x78, 0x00, 0xC0, 0x07, 0x3E, 0x00, 0x80, 0xFF, 0x1F, 0x00, 
  0x00, 0xFE, 0x0F, 0x00, 0x00, 0xF8, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  };

const unsigned char starIMG[] = {
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 
  0x00, 0xC0, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0xE0, 0x01, 0x00, 
  0x00, 0xF0, 0x01, 0x00, 0x00, 0xF0, 0x03, 0x00, 0x00, 0xF8, 0x03, 0x00, 
  0x00, 0xF8, 0x07, 0x00, 0x00, 0xFE, 0x0F, 0x00, 0xFE, 0xFF, 0xFF, 0x1F, 
  0xFE, 0xFF, 0xFF, 0x0F, 0xFC, 0xFF, 0xFF, 0x07, 0xF8, 0xFF, 0xFF, 0x03, 
  0xF0, 0xFF, 0xFF, 0x01, 0xC0, 0xFF, 0xFF, 0x00, 0x80, 0xFF, 0x7F, 0x00, 
  0x00, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x3F, 0x00, 
  0x80, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x7F, 0x00, 0x80, 0xBF, 0x7F, 0x00, 
  0xC0, 0x1F, 0x7E, 0x00, 0xC0, 0x07, 0x78, 0x00, 0xC0, 0x01, 0x70, 0x00, 
  0x40, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  };

const unsigned char forkIMG[] = {
  0xF8, 0x00, 0x00, 0x00, 0xFE, 0x03, 0x00, 0x00, 0x0F, 0x07, 0x00, 0x01, 
  0x07, 0x07, 0xE0, 0x0F, 0x07, 0x07, 0x78, 0x1E, 0x9E, 0x07, 0x38, 0x38, 
  0xFC, 0x01, 0x38, 0x38, 0xF8, 0x00, 0x38, 0x3C, 0xF8, 0x00, 0xF0, 0x1F, 
  0xF8, 0x00, 0xE0, 0x07, 0xF8, 0x00, 0xC0, 0x07, 0xF8, 0x00, 0xE0, 0x07, 
  0xF8, 0x00, 0xE0, 0x07, 0xF8, 0x00, 0xF8, 0x03, 0xF8, 0x00, 0xFE, 0x01, 
  0xF8, 0xE0, 0xFF, 0x00, 0xF8, 0xFF, 0x7F, 0x00, 0xF8, 0xFF, 0x1F, 0x00, 
  0xF8, 0xFF, 0x03, 0x00, 0xF8, 0x1F, 0x00, 0x00, 0xF8, 0x03, 0x00, 0x00, 
  0xF8, 0x01, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00, 0xFC, 0x01, 0x00, 0x00, 
  0x9E, 0x07, 0x00, 0x00, 0x07, 0x07, 0x00, 0x00, 0x07, 0x07, 0x00, 0x00, 
  0x0F, 0x07, 0x00, 0x00, 0xFE, 0x03, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00, 
  };

const char*  server = "api.github.com";  // 服务器 URL

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIEsTCCA5mgAwIBAgIQBOHnpNxc8vNtwCtCuF0VnzANBgkqhkiG9w0BAQsFADBs\n"
                            "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\n"
                            "d3cuZGlnaWNlcnQuY29tMSswKQYDVQQDEyJEaWdpQ2VydCBIaWdoIEFzc3VyYW5j\n"
                            "ZSBFViBSb290IENBMB4XDTEzMTAyMjEyMDAwMFoXDTI4MTAyMjEyMDAwMFowcDEL\n"
                            "MAkGA1UEBhMCVVMxFTATBgNVBAoTDERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3\n"
                            "LmRpZ2ljZXJ0LmNvbTEvMC0GA1UEAxMmRGlnaUNlcnQgU0hBMiBIaWdoIEFzc3Vy\n"
                            "YW5jZSBTZXJ2ZXIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC2\n"
                            "4C/CJAbIbQRf1+8KZAayfSImZRauQkCbztyfn3YHPsMwVYcZuU+UDlqUH1VWtMIC\n"
                            "Kq/QmO4LQNfE0DtyyBSe75CxEamu0si4QzrZCwvV1ZX1QK/IHe1NnF9Xt4ZQaJn1\n"
                            "itrSxwUfqJfJ3KSxgoQtxq2lnMcZgqaFD15EWCo3j/018QsIJzJa9buLnqS9UdAn\n"
                            "4t07QjOjBSjEuyjMmqwrIw14xnvmXnG3Sj4I+4G3FhahnSMSTeXXkgisdaScus0X\n"
                            "sh5ENWV/UyU50RwKmmMbGZJ0aAo3wsJSSMs5WqK24V3B3aAguCGikyZvFEohQcft\n"
                            "bZvySC/zA/WiaJJTL17jAgMBAAGjggFJMIIBRTASBgNVHRMBAf8ECDAGAQH/AgEA\n"
                            "MA4GA1UdDwEB/wQEAwIBhjAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIw\n"
                            "NAYIKwYBBQUHAQEEKDAmMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2Vy\n"
                            "dC5jb20wSwYDVR0fBEQwQjBAoD6gPIY6aHR0cDovL2NybDQuZGlnaWNlcnQuY29t\n"
                            "L0RpZ2lDZXJ0SGlnaEFzc3VyYW5jZUVWUm9vdENBLmNybDA9BgNVHSAENjA0MDIG\n"
                            "BFUdIAAwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQ\n"
                            "UzAdBgNVHQ4EFgQUUWj/kK8CB3U8zNllZGKiErhZcjswHwYDVR0jBBgwFoAUsT7D\n"
                            "aQP4v0cB1JgmGggC72NkK8MwDQYJKoZIhvcNAQELBQADggEBABiKlYkD5m3fXPwd\n"
                            "aOpKj4PWUS+Na0QWnqxj9dJubISZi6qBcYRb7TROsLd5kinMLYBq8I4g4Xmk/gNH\n"
                            "E+r1hspZcX30BJZr01lYPf7TMSVcGDiEo+afgv2MW5gxTs14nhr9hctJqvIni5ly\n"
                            "/D6q1UEL2tU2ob8cbkdJf17ZSHwD2f2LSaCYJkJA69aSEaRkCldUxPUd1gJea6zu\n"
                            "xICaEnL6VpPX/78whQYwvwt/Tv9XBZ0k7YXDK/umdaisLRbvfXknsuvCnQsH6qqF\n"
                            "0wGjIChBWUMo0oHjqvbsezt3tkBigAVBRQHvFwY+3sAzm2fTYS5yh+Rp/BIAV0Ae\n"
                            "cPUeybQ=\n"
                            "-----END CERTIFICATE-----\n";

// 如果需要，您可以使用 x.509 客户端证书
//const char* test_client_key = "";   //用于验证客户端
//const char* test_client_cert = "";  //用于验证客户端

String github_data;

WiFiClientSecure client;

void setup() {
    //初始化串口并等待端口打开：
    Serial.begin(115200);
    delay(100);

    Serial.print("尝试连接到 SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setTextSize(2);
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

void loop() {
    // 什么都不做
}

void getData() {
    client.setCACert(test_root_ca);
  //client.setCertificate(test_client_key); // 用于客户端验证
  //client.setPrivateKey(test_client_cert); // 用于客户端验证

    tft.fillScreen(TFT_BLACK);
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
        client.println("GET https://api.github.com/repos/micropython/micropython HTTP/1.0");
        client.println("Host: api.github.com");
        client.println("User-Agent: Seeed-Studio");
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
          github_data = line;
        }
        //Serial.println(github_data);
        client.stop();
        Serial.println("关闭连接");          
    }

    //ArduinoJson 用于解析数据，请查看 ArduinoJson 获取更多信息
    const size_t capacity = 2*JSON_OBJECT_SIZE(18) + JSON_OBJECT_SIZE(77) + 6050;
    DynamicJsonDocument doc(capacity);
    deserializeJson(doc, github_data);

    int subscribers_count = doc["subscribers_count"];
    int forks = doc["forks"];
    int stargazers_count = doc["stargazers_count"];

    Serial.println(subscribers_count);
    Serial.println(forks);
    Serial.println(stargazers_count);

    //TFT 屏幕会话
    tft.setFreeFont(FSS9);
    tft.setTextSize(1);
    tft.setTextColor(TFT_WHITE);
    tft.fillScreen(TFT_BLACK);
    tft.drawString("MicroPython Github",20,10);
    tft.drawFastHLine(185,18,120 ,TFT_RED);
    tft.drawFastHLine(185,19,120 ,TFT_RED);
    tft.drawFastHLine(185,20,120 ,TFT_RED);
    tft.drawFastHLine(10,33,300 ,TFT_NAVY);
    tft.drawFastHLine(10,34,300 ,TFT_NAVY);
    tft.drawFastHLine(10,35,300 ,TFT_NAVY);

    tft.drawXBitmap(20,60, watchIMG, 29, 27, TFT_WHITE);
    tft.drawXBitmap(20,120, starIMG, 30, 30, TFT_WHITE);
    tft.drawXBitmap(20,180, forkIMG, 30, 30, TFT_WHITE);

    tft.setFreeFont(FMB9);
    tft.drawString("关注者: ",60, 68);
    tft.drawString("星标: ",60, 128);
    tft.drawString("分支: ",60, 188);

    tft.drawNumber(subscribers_count, 165, 68);
    tft.drawNumber(stargazers_count, 130, 128);
    tft.drawNumber(forks, 130, 188);
}
```