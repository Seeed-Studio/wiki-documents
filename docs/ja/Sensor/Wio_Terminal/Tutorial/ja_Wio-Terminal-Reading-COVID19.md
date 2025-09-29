---
description: Wio Terminal を使用してコロナウイルスのライブデータを読み取る
title: Wio Terminal を使用してコロナウイルスのライブデータを読み取る
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Reading-COVID19
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を使用してコロナウイルス COVID-19 のライブデータを読み取る

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" /></div>

このウィキは [Wio Terminal を使用して Github リポジトリの統計を読み取る](https://wiki.seeedstudio.com/ja/Wio-Terminal-Reading-Github/) の改良版であり、[Coronavirus COVID19 API](https://covid19api.com/) にアクセスしてデータを解析し、LCD 画面にライブ COVID-19 データを表示するように変更されています。

## 必要な部品

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal バッテリーチャーシス](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 特徴

- HTTPS サーバーに接続

- COVID-19 ライブデータ API を取得

- ボタンを押してデータを更新

## 必要な Arduino ライブラリ

- LCD 画面ライブラリ `Seeed_Arduino_LCD` をインストールしてください。詳細は [Wio Terminal LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) を参照してください。

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

  - 次に、ArduinoJson ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `ArduinoJson` ファイルを選択します。

- HTTPS 接続に関する詳細は、[**こちら**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code) を参照してください。

## Arduino の手順

- [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) ヘッダーファイルをダウンロードして、LCD ライブラリに含まれるフリーフォントの省略形を使用できるようにします。このヘッダーファイルを Arduino スケッチと同じ場所に配置してください。

- 完全なコードを [こちら](http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip) からダウンロードするか、以下をコピーしてください。

- コードをアップロードします。

## 完全なコード

**注意:** `ssid` と `password` をネットワーク Wi-Fi に合わせて変更してください。

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "YourNetworkName"; // ネットワーク名
const char* password = "yourNetworkPassword"; // ネットワークパスワード

const char*  server = "api.covid19api.com";  // サーバーURL

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

// x.509 クライアント証明書を使用する場合
//const char* test_client_key = "";   // クライアント検証用
//const char* test_client_cert = "";  // クライアント検証用

String data;

WiFiClientSecure client;

void setup() {
    // シリアルを初期化し、ポートが開くのを待つ
    Serial.begin(115200);
    delay(100);

    pinMode(WIO_KEY_C, INPUT_PULLUP);

    Serial.print("SSID に接続中: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setFreeFont(FMB12);
    tft.setCursor((320 - tft.textWidth("Wi-Fi に接続中.."))/2, 120);
    tft.print("Wi-Fi に接続中..");

    // Wi-Fi ネットワークへの接続を試みる
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // 再試行のため 1 秒待機
        delay(1000);
    }

    Serial.print("接続完了: ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("接続完了!"))/2, 120);
    tft.print("接続完了!");

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
  //client.setCertificate(test_client_key); // クライアント検証用
  //client.setPrivateKey(test_client_cert); // クライアント検証用

    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE);
    tft.setCursor((320 - tft.textWidth("サーバーに接続中.."))/2, 120);
    tft.print("サーバーに接続中..");

    Serial.println("\nサーバーへの接続を開始...");
    if (!client.connect(server, 443)) {
        Serial.println("接続失敗!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("接続失敗!"))/2, 120);
        tft.print("接続失敗!");
    } else {
        Serial.println("サーバーに接続完了!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("サーバーに接続完了!"))/2, 120);
        tft.print("サーバーに接続完了!");

        // HTTP リクエストを作成
        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");
        client.println("Host: api.covid19api.com");
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
          data = line;
        }
        Serial.println(data);
        client.stop();
        Serial.println("接続を終了");
    }

    // ArduinoJson を使用してデータを解析、詳細は ArduinoJson を参照
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
    tft.drawString("COVID-19 ダッシュボード/グローバル",20,10);

    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));

    tft.setFreeFont(FM9);
    tft.drawString("総感染者数", 75, 50);
    tft.drawString("総死亡者数",95, 110);
    tft.drawString("総回復者数",75, 170);

    tft.setFreeFont(FMB12);
    tft.setTextColor(TFT_RED);
    tft.drawNumber(TotalConfirmed, 110, 75);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawNumber(TotalDeaths, 120, 135);
    tft.setTextColor(TFT_GREEN);
    tft.drawNumber(TotalRecovered, 110, 195);
}
```
