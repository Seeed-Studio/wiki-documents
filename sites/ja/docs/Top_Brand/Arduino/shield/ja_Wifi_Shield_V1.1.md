---
description: Wifi Shield V1.1
title: Wifi Shield V1.1
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Shield_V1.1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Wifi Shield V1.1‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Shield_V1.1‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-1
sku:
tags:
--- -->

このWifi ShieldはRN171 WiFiモジュールを利用して、Arduino/Seeeduinoにシリアルイーサネット機能を提供します。このシールドを使用すれば、802.11b/gワイヤレスネットワークにデバイスを接続するのに必要なピンは2つだけです。独立したアンテナを備えており、広範囲をカバーし、より強力な信号を送信することができます。一般的なTCP、UDP、FTP通信プロトコルをサポートしており、このWifi Shieldはスマートホームネットワーク、ロボット制御、個人用気象ステーションなど、ほとんどのワイヤレスネットワークプロジェクトのニーズを満たすことができます。このシールド用に簡単で便利なコマンドセットを準備しており、簡潔なコードで機能を実行することができます。

## 仕様 ##

- 電圧：3.3~5.5 V

- 電流：25~400mA

- 送信出力：0-10 dBm

- 周波数：2402~2480 MHz

- チャンネル：0~13

- ネットワーク速度：802.11bの場合1-11 Mbps / 802.11gの場合6-54 Mbps

- 寸法：60X56X19 mm

- 重量：24±1 g

- WiFi認証のセキュリティ：WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- 内蔵ネットワークアプリケーション：DHCPクライアント、DNSクライアント、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg)

- **RN-171：** WIFLY GSX 802.11 b/g ワイヤレスLANモジュール。

- **ソフトウェアシリアルポート設定エリア：** RN171のRXとTXとして使用するデジタルピンを選択します。

- **リセットボタン：** Wifi Shieldをリセットします。

- **ステータスインジケータの説明：**
  - 接続が存在しない場合、2つのLED(D1,D5)が交互に点滅します。
  - ルーターに接続後、Association to APステータスインジケータ(D1)が点滅します。
  - ルーターとTCPサーバーに接続後、APステータスインジケータ(D1)が常時点灯します。

## 始め方 ##

### デモ: Wifly_Test ###

[Wifi Shieldライブラリ](https://github.com/Seeed-Studio/WiFi_Shield)をGitHubからダウンロードし、Arduinoのライブラリフォルダに解凍してください。

```cpp
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // または WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX
SoftwareSerial uart(2, 3);
WiFly wifly(&uart);
//WiFly wifly(&Serial1);     // leonardoの場合、ハードウェアシリアル - Serial1を使用

void setup() {
  uart.begin(9600);

  Serial.begin(9600);
  Serial.println("--------- WIFLY TEST --------");

  // wiflyの初期化を待つ
  delay(3000);

  uart.begin(9600);     // WiFly UART ボーレート: 9600

  wifly.reset();

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  // WiFlyのパラメータを取得
  wifly.sendCommand("get everthing\r");
  char c;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
  }

  if (wifly.commandMode()) {
    Serial.println("コマンドモードに入ります。「exit」(\\r付き)を送信してコマンドモードを終了します");
  }
}

void loop() {
  while (wifly.available()) {
    Serial.write(wifly.read());
  }

  while (Serial.available()) {
    wifly.write(Serial.read());
  }
}
```

1. ソフトウェアシリアルポートのD2(RX)とD3(TX)をWiFi ShieldのTXとRXに接続します。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg)

2. コードを変更してアクセスポイント情報を更新します。

```
#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // または WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN
```

3. スケッチをArduinoにダウンロードし、シリアルモニターを開き、ボーレートを9600に設定し、Enterキーをキャリッジリターンに設定します。WiFi Shieldはいくつかのメッセージを出力し、コマンドモードに入ります。コマンドモードでは、いくつかのコマンドを入力して操作できます：

  **get wlan** - WLAN情報を取得

  **join** - ネットワークに参加

  **ping** seeedstudio.com - Seeedにpingを送信！

  その他のコマンドについては、[WiFiモジュールユーザーマニュアル](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)を参照してください。

  ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png)

4. さらに使用するには、WiFi Shieldライブラリの他の例を試してください。

### その他のデモ ###

## トラブルシューティング ##

WiFi Shieldがコマンドに応答しない場合は、[こちらのガイド](https://seeeddoc.github.io/Wifly_171_troubleshooting/)に従って工場出荷時のリセットを試してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]** [WiFi Shield Eagle ファイル](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip)
- **[PDF]**[WiFi Shield V1.1 PCB](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf)
- **[PDF]**[WiFi Shield V1.1 SCH](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf)
- **[Datasheet]**[RN-171 データシート](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf)
- **[Library]**[WiFi Shield ライブラリ](https://github.com/Seeed-Studio/WiFi_Shield)
- **[Manual]**[WiFi モジュールユーザーマニュアル](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>