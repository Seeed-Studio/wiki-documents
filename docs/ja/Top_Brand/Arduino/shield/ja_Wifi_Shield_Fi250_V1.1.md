---
description: Wifi Shield (Fi250) V1.1
title: Wifi Shield (Fi250) V1.1
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Shield_Fi250_V1.1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Wifi Shield (Fi250) V1.1
category: Shield
bzurl: https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html
oldwikiname:  Wifi Shield (Fi250) V1.1
prodimagename:  Fi250_board1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_Fi250_V1_1
sku:    103030027
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board1.jpg)

Wifi Shield (Fi250) V1.1 は、Arduino 用の経済的なインターネットソリューションです。この Wi-Fi モジュールは IEEE 802.11b/g/n モードをサポートし、最大速度は 65Mbit/s に達します。Wifi Shield (Fi250) V1.1 はオンボードアンテナを組み合わせており、小型のボックス内でプロジェクトを簡単に構築できます。このモジュールには UFL コネクタが備わっており、追加のアンテナを使用して信号範囲を改善することができます。ボード上にはキーがあり、1 回押すだけで Wi-Fi シールドを AP モードに変更できます。このモジュールにはコンピュータインターフェースソフトウェアがあり、USB-UART コンバータを介してモジュールを制御およびアップグレードできます。

Wi-Fi シールドには Micro SD カードソケットが含まれており、Wi-Fi シールドが TCP または UDP サーバーとして動作しているときにレコーダーのように機能します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html)

## 仕様

| 項目 | 仕様 |
|------|------|
| モジュール | WIZnet FI250 |
| 動作電圧 | 5V または 3.3V (自動選択) |
| 電流 | 300mA (最大) |
| シングルバンド | 2.4GHz IEEE 802.11b/g/n |
| アンテナ | オンボード PCB アンテナ (UFL コネクタを予約) |
| メモリ | 1MB フラッシュメモリ、128KB SRAM、1MB シリアルフラッシュ |
| インターフェース | UART (デフォルト) / SPI (ファームウェアアップグレード) |
| 寸法 | 69.0x53.5x23.5 mm |
| 重量 | 25g |

## 使用方法

---
このデモでは Arduino Leonardo を使用します。ハードウェアシリアルポートを使用することをお勧めします。ソフトウェアは Wi-Fi モジュールとの通信に十分な速さではありません。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board.jpg)

### TCP クライアント

Wifi Shield (Fi250) ライブラリをインストールし、デモコード Wizfi250_Client をダウンロードします。

```cpp
/*
//このデモは Arduino Leonardo または Seeeduino Lite を使用します。ジャンパーを D0-WIFI_TX, D1_WIFI_RX に接続します。ブートピンは接続しないでください。
*/
#include <Arduino.h>
#include "WizFi250.h"

#define SSID      "STEST" //SSID を設定
#define KEY       "87654321" //パスフレーズを設定
#define AUTH       "WPA2" //暗号化タイプを設定


#define  HOST_IP       "192.168.168.185" //TCP サーバーの IP を設定
#define  REMOTE_PORT    9090 //ポートを設定
#define LOCAL_PORT      1234  //ポートを設定

#define spi_CS  8

WizFi250 wizfi250(&Serial1);
boolean returnValue=false;
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    Serial.println("--------- WIZFI250 TEST --------");
    // Wizfi250 の初期化を待つ
    delay(1000);
    Serial.println("Join " SSID );
    wizfi250.reset();
    delay(1000);
    wizfi250.sendCommand("AT+WLEAVE\r");
    delay(1000);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
        Serial.println("Please Restart");
    } else {

        Serial.println("Successfully join " SSID);
        wizfi250.sendCommand("AT+WSTAT\r");
        delay(5);
        char c;
        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
        delay(2000);
        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);
        if(returnValue)
        Serial.println("Now you can send data to Server or receive data from Server!");
    }
}
void loop() {
    if(wizfi250.available()) {
        Serial.print((char)wizfi250.read());
    }
    if(Serial.available()) {
        wizfi250.print((char)Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client.bmp)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client_arduino.png)

### HTTP 接続

Wifi Shield (Fi250) ライブラリをインストールし、デモコード Wizfi250_http をダウンロードします。

```cpp
/*
//このデモは Arduino Leonardo または Seeeduino Lite を使用します。ジャンパーを D0-WIFI_TX, D1_WIFI_RX に接続します。ブートピンは接続しないでください。
*/
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WizFi250.h"

#define SSID      "STEST"   //SSID を設定
#define KEY       "87654321" //パスフレーズを設定
#define AUTH       "WPA2" //暗号化タイプを設定

#define TSN_HOST_IP        "74.125.128.103" //google.com サーバー
//#define TSN_HOST_IP        "115.239.210.26" //baidu.com サーバー
//#define TSN_HOST_IP      "192.168.1.254"      // ブロードキャスト
#define TSN_REMOTE_PORT    80
#define LOCAL_PORT     9000

#define spi_CS  8

//SoftwareSerial sprintSerial(4,5);   // ソフトウェアシリアルポートは安定していません。
WizFi250 wizfi250(&Serial1);
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    digitalWrite(spi_CS,HIGH);
    Serial.println("--------- WIZFI250 TEST --------");
    // Wizfi250 の初期化を待つ
    delay(1000);
    Serial.println("Join " SSID );
    delay(10);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
    } else {
        Serial.println("Successfully join  "  SSID);

        wizfi250.clear();

        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);
        delay(10);
        wizfi250.send("GET / HTTP/1.1\r\n\r\n");
    }
    char c;
    for(int i=0;i<320;i++){
        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
    }
}
void loop() {
    while (wizfi250.available()) {
        Serial.write(wizfi250.read());
    }
    while (Serial.available()) {
        wizfi250.write(Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_HTTP.jpg)

### モジュールのリセット

* モジュールを工場出荷時の設定にリセットする必要がある場合は、ファンクションボタンを高速で3回押してください。MODEとWIFI LEDが点滅し、モジュールがリセットされるのを待ちます。

* モジュールがデフォルトにリセットされると、ボーレートが115200に変更されますのでご注意ください。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_reset.png)

### ワンプレスでAPモード設定

* APモードに簡単に入ることができます。ファンクションボタンを押し、WIFI LEDが赤に変わるのを待ちます。その後、WiFi信号「WizFi250_AP_*******」をスキャンできます。

* WiFi Shield Fi250のリセットボタンを押すことでAPモードを終了します。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI2350_AP.png)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI250APshow.png)

### ファームウェアのアップグレード

ファームウェア（F/W）のアップグレード手順は以下の通りです：  
<big>WiFi Shield（Fi250）をUART経由で直接接続します。UartSBeeやその他のUARTツールを使用できます。</big>

ファームウェアをアップグレードする前に、モジュールをプログラムモードに設定する必要があります（BOOTジャンパーピンをショートしてください）。  
<big>[wizfi250firmware](http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start)</big>

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_update_firmware副本.png)

1つ目のアクション

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware1.png)

2つ目のアクション

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware2.png)

3つ目のアクション

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware3.png)

* アップデートが成功したら、ジャンパーを移動してモジュールを再起動してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Wifi_Shield_(Fi250)_V1.1_sch_pcb.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip)

* [Wizfi250_programmer_s_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_programmer_s_guide.pdf)

* [Wizfi250_quick_start_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_quick_start_guide.pdf)

* [Wizfi250_datasheet.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_datasheet.pdf)

* [Wizfi250 library](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250.zip)

* [PDF_Wifi_Shield_(Fi250)_V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wifi_Shield-Fi250-V1.1.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>