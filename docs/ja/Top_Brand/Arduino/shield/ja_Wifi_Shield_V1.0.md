---
description: Wifi Shield V1.0
title: Wifi Shield V1.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Wifi Shield V1.0
category: 廃止
bzurl:
oldwikiname: Wifi_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-0
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg)

このWifi ShieldはRN171 WiFiモジュールを利用しており、Arduino/Seeeduinoにシリアルイーサネット機能を提供します。このシールドを使用すれば、わずか2つのピンでデバイスを802.11b/gワイヤレスネットワークに接続できます。独立したアンテナを備えており、広範囲をカバーし、より強力な信号を送信できます。一般的なTCP、UDP、FTP通信プロトコルをサポートしており、スマートホームネットワーク、ロボット制御、個人用気象ステーションなど、ほとんどのワイヤレスネットワークプロジェクトのニーズを満たすことができます。このシールド用に簡単で便利なコマンドセットを用意しており、簡潔なコードで機能を実行できます。

# 特徴 #

- Arduino、Seeeduino、Arduino Mega、Seeeduino Megaに対応

- UARTで最大1 Mbps、SPIスレーブで最大2 Mbpsのホストデータレート

- シールド上のRN171のUARTシリアルポートはジャンパーでArduinoに接続可能

- RN171のSPIピンはそのままブレークアウト

- 2つのGroveコネクタを備え、I2CおよびデジタルIO GroveモジュールをArduinoに簡単に接続可能

- 安全なWiFi認証：WEP-128、WPA-PSK（TKIP）、WPA2-PSK（AES）

- 内蔵ネットワークアプリケーション：DHCPクライアント、DNSクライアント、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP

# 仕様 #

| 項目 | 最小 | 標準 | 最大 | 単位 |
|------|------|------|------|------|
| 電圧 | 3.3 | 5 | 5.5 | VDC |
| 電流 | 25 | 60 | 400 | mA |
| 送信出力 | 0-10 | | | dBm |
| 周波数 | 2402-2480 | | | MHz |
| ネットワーク速度 | 802.11bで1-11 Mbps/802.11gで6-54 Mbps | | | |
| 寸法 | 60x56x19 | | | mm |
| 正味重量 | 20±2 | | | g |

# インターフェース機能

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg)

# 使用方法 #

ここで提供する例は、このWifi Shieldをイーサネットに接続し、シールドと仮想サーバー間でデータ交換を開始する方法を示しています。

### ハードウェアのインストール ###

受け取ったパッケージには、Wifi Shield、アンテナ、アンテナコネクタが含まれているはずです。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg)

以下の画像のようにこれらの部品を組み立てます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg)

シールドをArduino/Seeeduinoに取り付けます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg)

では、コードを書き始めましょう。

### ソフトウェアプログラミング ###

まず、Arduino1.0がコンピュータにインストールされていることを確認してください。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg)
[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)をダウンロードし、..\arduino-1.0\librariesのパスを通じてArduinoのライブラリファイルに解凍します。
Arduino-1.0で新しいスケッチを開き、以下のコードをスケッチにコピーします。

```cpp
#include "Wifly.h"
#include <SoftwareSerial.h>
WiflyClass Wifly(2,3);
void setup()
{
 Serial.begin(9600);//PCとの通信にハードウェアシリアルを使用
 Wifly.init();//Wifiシールドを初期化
 Wifly.setConfig("SSID","PASSWORD");//ルーターのSSIDとパスワードを設定
 Wifly.join("SSID");
 Wifly.checkAssociated();
 while(!Wifly.connect("192.168.1.164","90"));//リモートサービスに接続
 Wifly.writeToSocket("Connected!");
}
void loop()
{
 if(Wifly.canReadFromSocket())
 {
   Serial.print(Wifly.readFromSocket());
 }
 if(Serial.available())
 {
   Wifly.print((char)Serial.read());
 }
}

```

このスケッチを特定の設定に応じていくつか修正する必要があります。

1. WiFiモジュールのシリアルポートに接続するピンを選択

```txt
WiflyClass Wifly(2,3);

```

ここでのパラメータ2と3は、それぞれソフトウェアシリアルポートのRXとTXを表します。これに基づき、以下の画像のようにD2とD3のピンをショートさせる必要があります。ピン番号は自由に変更できますが、対応するショートピンの変更を忘れないでください。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg)

2. ワイヤレスネットワーク情報を入力

```
Wifly.setConfig("SSID","PASSWORD");//ルーターのSSIDとパスワードを設定
Wifly.join("SSID");
```

ターゲットネットワークの名前をSSIDに、パスワードをPASSWORDに入力します。例えば、China-NETに接続したい場合で、そのパスワードが12345678であれば、このコード行は以下のように変更されます：

```
Wifly.setConfig("China-NET","12345678");//ルーターのSSIDとパスワードを設定
Wifly.join("China-NET");
```

**注意:**

1. ルーターのセキュリティタイプはWEP-128、WPA-PSK（TKIP）、WPA2-PSK（AES）のみサポート

2. ルーターはインターネットに接続されている必要があります

3. リモートサーバーの情報を入力

```
while(!Wifly.connect("192.168.1.164","90"));//リモートサービスに接続
```

上記の行では、「192.168.1.164」は仮想サーバーのリモートIPアドレス、「90」はポート情報です。

テスト目的で、TCPクライアントソフトウェア[YFTCPServer.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip)とシリアルポートソフトウェア[SCCOM](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip)を提供しています。

TCPクライアントソフトウェアを開くと以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg)

ソフトウェアから得た情報に基づいてコードを変更してください。

```
while(!Wifly.connect("192.168.1.164","90"));//リモートサービスに接続
```

スケッチをアップロードしてください。

次に、まずTCPクライアントソフトウェアを実行し、その後シリアルポートソフトウェアを実行します。「OpenCom」ボタンをクリックし、仮想ソフトウェアの画面に"&lt;--Connected!"というメッセージが表示されるまで待機してください。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg)

これで、このシリアルポートソフトウェアを介してWifi Shieldと通信することができます。

RN171に関する詳細な情報については、こちらからデータシートをダウンロードできます：[RN171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース #

- **[Eagle]**[Wifi Shield Eagle File](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip)
- **[PDF]**[wifi Shield V1.0 PCB](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf)
- **[PDF]**[wifi Shield V1.0 SCH](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf)
- **[Datasheet]**[RN171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)
- **[Library]**[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>