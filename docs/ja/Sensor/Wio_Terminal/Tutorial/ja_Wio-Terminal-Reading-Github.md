---
description: Wio Terminalを使用してGitHubにアクセスする
title: Wio Terminalを使用してGitHubにアクセスする
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Reading-Github
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalでGitHubリポジトリの統計情報を取得する

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" /></div>

このWikiでは、Wio Terminalを使用して**HTTPS**サーバーにアクセスする方法を紹介します。これにより、Wio Terminalを使用してインターネットからリアルタイムデータを取得することができます！ここでは、Wio TerminalがWi-Fiに接続され、GitHubからデータを取得します。

これを応用して、天気情報やYouTubeの統計情報など、他のAPIを利用したデモを実装することも可能です。

## 必要な部品リスト

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal バッテリーチャーシス](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 特徴

- HTTPSサーバーに接続可能

- GitHubからリポジトリの統計情報を取得

- 任意のGitHubリポジトリに変更可能

## 必要なArduinoライブラリ

- LCDスクリーンライブラリ`Seeed_Arduino_LCD`をインストールしてください。詳細は[Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/)をご覧ください。

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson)リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

  - 次に、ArduinoJsonライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`ArduinoJson`ファイルを選択してください。

- HTTPS接続に関する詳細は[**こちら**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code)をご覧ください。

## Arduinoの手順

- [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h)ヘッダーファイルをダウンロードして、LCDライブラリに含まれるフリーフォントの略称を使用できるようにします。このヘッダーファイルをArduinoスケッチと同じ場所に配置してください。

- 完全なコードを[こちら](https://files.seeedstudio.com/wiki/Wio-Terminal/res/GitHubStats.zip)からダウンロードするか、以下のコードをコピーしてください。

- コードをアップロードします。

## 完全なコード

**注意:** `ssid`と`password`をネットワークWi-Fiの情報に変更してください。

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "yourNetworkName"; // ネットワーク名
const char* password = "yourNetworkPassword"; // ネットワークパスワード

// 29*27
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

const char*  server = "api.github.com";  // サーバーURL

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

// x.509クライアント証明書を使用する場合
//const char* test_client_key = "";   // クライアント検証用
//const char* test_client_cert = "";  // クライアント検証用

String github_data;

WiFiClientSecure client;

void setup() {
    // シリアルを初期化し、ポートが開くのを待つ
    Serial.begin(115200);
    delay(100);

    Serial.print("SSIDに接続中: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor((320 - tft.textWidth("Wi-Fiに接続中.."))/2, 120);
    tft.print("Wi-Fiに接続中..");

    // Wi-Fiネットワークへの接続を試みる
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // 再試行のため1秒待つ
        delay(1000);
    }

    Serial.print("接続完了: ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("接続完了!"))/2, 120);
    tft.print("接続完了!");

    getData();
}

void loop() {
    // 何もしない
}

void getData() {
    client.setCACert(test_root_ca);
  //client.setCertificate(test_client_key); // クライアント検証用
  //client.setPrivateKey(test_client_cert); // クライアント検証用

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("サーバーに接続中.."))/2, 120);
    tft.print("サーバーに接続中..");

    Serial.println("\nサーバーへの接続を開始...");
    if (!client.connect(server, 443)) {
        Serial.println("接続失敗!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("接続失敗!"))/2, 120);
        tft.print("接続失敗!");
    } else {
        Serial.println("サーバーに接続成功!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("サーバーに接続成功!"))/2, 120);
        tft.print("サーバーに接続成功!");

        // HTTPリクエストを作成
        client.println("GET https://api.github.com/repos/micropython/micropython HTTP/1.0");
        client.println("Host: api.github.com");
        client.println("User-Agent: Seeed-Studio");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("ヘッダー受信完了");
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
        Serial.println("接続を閉じます");          
    }

    // ArduinoJsonでデータを解析します。詳細はArduinoJsonをご確認ください。
    const size_t capacity = 2*JSON_OBJECT_SIZE(18) + JSON_OBJECT_SIZE(77) + 6050;
    DynamicJsonDocument doc(capacity);
    deserializeJson(doc, github_data);

    int subscribers_count = doc["subscribers_count"];
    int forks = doc["forks"];
    int stargazers_count = doc["stargazers_count"];

    Serial.println(subscribers_count);
    Serial.println(forks);
    Serial.println(stargazers_count);

    // TFTスクリーンセッション
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
    tft.drawString("ウォッチャー: ",60, 68);
    tft.drawString("スター: ",60, 128);
    tft.drawString("フォーク: ",60, 188);

    tft.drawNumber(subscribers_count, 165, 68);
    tft.drawNumber(stargazers_count, 130, 128);
    tft.drawNumber(forks, 130, 188);
}
```
