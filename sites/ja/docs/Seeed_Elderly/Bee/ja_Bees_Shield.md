---
description: Bees Shield
title: Bees Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bees_Shield
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像を入力してください](https://files.seeedstudio.com/wiki/Bees_Shield/img/bees%20shield.jpg)

Bees_Shieldは、複数のBeeスタイル（XBee、GPRS Bee、Bluetooth Beeなど）とのインターフェースをこれまで以上に簡単にします。2つのBeeスタイルの20ピン2.0ピッチソケットに加えて、大型のプロトタイピングエリアと、カスタマイズ可能なソフトウェアシリアルポートを備えており、プロトタイピングが容易になります。

[![今すぐ購入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Bees-Shield-p-672.html)

## バージョン
---------------

| リビジョン | 説明  | リリース日        |
|----------|--------------|----------------|
| v2.12| 初回公開リリース| 2010年6月8日  |


## 特徴
-------------------
- デュアルBeeタイプソケット
- 各XBee用の3つのインジケータLED（ON/Sleep、RSSI、ASSOC）
- フルサイズで自由なドリル穴
- 各XBee用のリセットボタン
- ベースボード用のリセットボタン
- 最大500mAを3.3Vで供給
- 各Beeの完全なブレークアウト
- FTDI-USB / ベースボードとの通信の切り替え可能

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees%20Shield%20Hardware.jpg)

## 対応プラットフォーム
-------------------

## はじめに
-------------------
### Bee1での使用

#### 接続
- XBeeモジュールをBee1ソケットに差し込み、以下のようにジャンパーを設定します。Bee1 SoftwareSerialを使用して通信を行います。

| Arduino ピン   | Bee1 ピン     |
| :------------- | :-------------|
| デジタルピン7   | Bee1_TX       |
| デジタルピン8   | Bee1_RX       |

- Bees ShieldをArduinoに差し込みます。
- USBケーブルを使用してArduinoをPCに接続します。

#### ソフトウェア
- 以下のコードをArduinoにコピーしてアップロードします。

```
#include <SoftwareSerial.h>
SoftwareSerial mySerial(7, 8);

void setup() {
  Serial.begin(9600);
  Serial.println("Goodnight moon!");

  // SoftwareSerialポートのデータレートを設定
  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop() {
  // 繰り返し実行
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```
- アップロードが完了したら、シリアルモニタを開きます。

### Bee2での使用

#### 接続
- RFbeeモジュールをBee2ソケットに差し込み、スイッチをUSB側に切り替えます。

:::note
    スケッチをBee2にアップロードしていない場合は、スイッチをAtmega側に切り替えてください。ArduinoがATmega168を使用している場合は動作しません。シリアル通信を通過させるには少なくともATmega328が必要です。
:::
- Bees ShieldをArduinoに差し込みます。
- USBケーブルを使用してArduinoをPCに接続します。

#### ソフトウェア
- 以下のコードをArduinoにコピーしてアップロードし、まずAtmega ICのUart0ポートを無効化します。

```
void setup() {
   DDRD=0x00;
}

void loop() {}
```

### Bee2を使用したワイヤレスArduinoプログラミング

#### 接続
- ワイヤレスプログラミング用にボード上のJP1ブロックをハンダ付けします。
- Bees ShieldをArduinoに差し込みます。

#### ソフトウェア
- [Xbee設定プロファイル](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip)をダウンロードし、X-CTUを使用して送信側Xbeeに設定します。
- ワイヤレスプログラミングを使用します。

#### 拡張機能

- まず、Bees Shieldに2つの8ピンメスヘッダーと2つの6ピンメスヘッダーをハンダ付けします。
- 拡張後、小型シールド（例：ミュージックシールド）をBees Shieldに挿入し、ワイヤレスで制御することができます。

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees-Shield-expan2.jpg)


## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
-------------------
- **[Eagle]** [Bees_Shield Eagleファイル](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip)
- **[PDF]** [Bees_Shield回路図](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20Sch.pdf)
- **[PDF]** [Bees_Shield PCB](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20PCB.pdf)
- **[ツール]** [Xbee設定プロファイル](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>