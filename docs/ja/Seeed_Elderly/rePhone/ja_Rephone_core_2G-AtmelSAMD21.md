---
description: Rephone Core 2G-AtmelSAMD21
title: Rephone Core 2G-AtmelSAMD21
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Rephone_core_2G-AtmelSAMD21
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg)

RePhoneは、Seeed Studioによって作られた最もユニークで興味深い開発ボードプラットフォームの1つです。KickStarterの舞台に初めて登場して以来、RePhoneは世界中のメーカーから多くの注目と支持を受けてきました。RePhoneを使用すると、自分だけの特別な電話をDIYするだけでなく、周囲のものにセルラー接続を付加することができます。

RePhone Core 2G-AtmelSAMD21 v1.0は、新しいArduino互換のRePhone Core 2Gボードで、AtmelのSAMD21とSIM800Hをベースにしています。RePhone Core 2G-AtmelSAMD21 v1.0のほとんどの機能は、Xadow – GSM+BLEと同じで、GSM、GPRS、Bluetoothなどの豊富な通信プロトコルを提供し、850/900/1800/1900Mzのクアッドバンドをサポートし、2G Nano SDカードをサポートします。しかし、AtmelのSAMD21とSIM800Hの組み合わせにより、Xadow – GSM+BLEと比較して消費電力が大幅に削減されています。高性能で低消費電力のRePhone Coreを探しているなら、この新しいRePhone Core 2Gモジュールが最適な選択です。

:::note:
    RePhone Core 2G-AtmelSAMD21 v1.0は、Xadow v2.0のすべてに互換性がありますが、Xadow 1.54インチタッチスクリーンを除きます。
    GSMまたはGPRS機能を使用する場合、USBからの電力が不足して通信に失敗する可能性があるため、ボードにバッテリーを接続してください。
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)

:::warning
    この製品には**リポバッテリーは含まれていません**。また、Bazaarではリポバッテリーの販売も行っていません。3.7Vのリポバッテリーであれば使用可能です。

    この製品には**マイク、スピーカー、3.5mmハンドセット入力は含まれていません**。これらの機能を使用するには、[Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)を購入する必要があります。
:::

## 特徴
---
### Arduino/プロセッサ

* ATSAMD21G18 @ 48MHz、3.3Vロジック/電源
* Arduino互換（Arduino Zeroブートローダーに基づく）
* リチウムバッテリー管理チップを内蔵
* ユーザーボタン

### SIM800H

* クアッドバンド850/900/1800/1900MHz
* GPRSマルチスロットクラス12/10
* GPRSモバイルステーションクラスB
* GSM 2/2+標準に準拠
    * クラス4 (2 W @850/900MHz)
    * クラス1 (1 W @1800/1900MHz)
* Bluetooth: 3.0+EDR互換
* FM: バンド範囲76~109MHz、50KHzステップで調整
* ATコマンドによる制御 3GPP TS 27.007, 27.005およびSIMCOM拡張ATコマンドセット
* SIM USAT
* 低消費電力
* 動作温度範囲: -40 ~ +85 °C

## 仕様
---
| 項目 | 値 |
|--------------|-------------------------------------|
| マイクロコントローラー | ATSAMD21G18, 32ビットARM Cortex M0+ |
| 動作電圧 | 3.3V |
| I/OピンあたりのDC電流 | 7 mA |
| フラッシュメモリ | 256 KB |
| SRAM | 32 KB |
| EEPROM | なし |
| クロックスピード | 48 MHz |
| 長さ | 68 mm |
| 幅 | 30 mm |
| 重量 | 12 g |

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png)

* **1- **11ピン Xadow コネクタ
* **2- **ユーザーボタン (D3)
* **3- **プログラミングおよび電源供給用 Micro USB コネクタ
* **4- **35ピン Xadow コネクタ
* **5- **Jst1.0 バッテリーコネクタ
* **6- **Nano SIMカード (iPhone 5/6/7と同じ)
* **7- **ATSAMD21G18 IC
* **8- **充電状態モニターLED
    * 点滅 - バッテリー未挿入
    * 点灯 - 充電中
    * 消灯 - 充電完了
* **9- **IC - ETA6003([データシート](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf))
* **A- **SWDデバッグポート
* **B- **アンテナコネクタ
* **C- **I/O PINパッド
* **D- **SIM800H

## ピンマップ

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)

:::tip
    [こちらをクリック](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)して拡大画像を表示してください。
:::
:::note
    * INT1 は D7 に接続
    * INT2 は D12 に接続
:::

## Arduino IDE

[最新のArduino IDE](https://www.arduino.cc/en/Main/Software)をダウンロードしてインストールした後、いくつか設定が必要です。
Arduino IDEを開き、**ファイル > 環境設定**をクリックします。
以下のコードを**追加のボードマネージャURL**にコピーし、**OK**をクリックします。

```c
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png)

次に、**ツール > ボード > ボードマネージャ**に進みます。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png)

**インストール**ボタンをクリックし、ボードがインストールされるまで数分待ちます。

インストールが完了すると、**ツール > ボード**の一番下にRePhone core 2G-AtmelSAMD21が表示されます。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png)

### ドライバのインストール (Windowsの場合)

初めてボードを挿入すると、RePhone 2G SAMD21という名前のUSB COMデバイスが表示され、ドライバのインストールが必要です。以下のボタンをクリックしてボード用のドライバをダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)

ドライバが正常にインストールされたことを確認するには、デバイスマネージャを開き、**RePhone 2G SAMD21**が存在するか確認してください。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png)

### Hello World

では、最初のデモ「Hello World」をボードにアップロードしてみましょう。

Arduino IDEを開き、以下のコードをコピーします：

```c
void setup()
{
    SerialUSB.begin(115200);
}

void loop()
{
    SerialUSB.println("Hello world!");
    delay(1000);
}
```

その後、

* **ツール > ボード > RePhone core 2G-AtmelSAMD21**をクリック
* **ツール > ポート**をクリックして正しいポート番号を選択します。(*COM1は選択しないでください*)

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png)

次に、Arduino IDEの左上にある**アップロード**ボタンをクリックします。数秒後、スケッチが正常にアップロードされます。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png)

アップロードが成功すると、赤い文字でいくつかの情報が表示されます。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png)

Arduino IDEのシリアルモニタを開くと、毎秒「Hello World」が表示されるはずです。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png)

## ATコマンドモード
---
RePhone Core 2GボードはATコマンドモードをサポートしています。SIM800HのTX/RXはAtmelSAMD21のSerial1(D0/D1)に接続されています。

以下のコードをコピーしてボードにアップロードしてください。

```c
#include "atmelsamd21_gprs.h"

void setup()
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");
    gsm.preInit();                  // 電源オン

    while(0 != gsm.init())
    {
        SerialUSB.println("GSM初期化エラー。");
        delay(2000);
    }

    SerialUSB.println("GSM初期化成功。");
}

void loop()
{
    while(SerialUSB.available())Serial1.write(SerialUSB.read());
    while(Serial1.available())SerialUSB.write(Serial1.read());
}
```

シリアルモニターを開き、***GSM初期化成功。*** がモニターに表示されるのを待ちます。その後、コマンドを入力できます。
"AT"と入力して"OK"を取得してみてください。

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png)

:::tip
    すべてのコマンドは新しい行(\r\n)で終了する必要があります。
:::
以下のボタンをクリックして、詳細なATコマンドドキュメントを取得してください。

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

## サンプル
---
このモジュールの動作を示すために、多くのサンプルを用意しました。
最初に以下を行ってください：

1. nano SIMカードを挿入する
2. アンテナを挿入する
3. リポバッテリーがある場合は、ボードに接続する

**File > Examples** をクリックすると、これらのサンプルを開くことができます。

### AtmelSAMD21_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Bluetooth経由で音楽を再生
* **GSM_GPRS_HTTP_GET**: [mbed.org](http://mbed.org)からhello.txtをHTTP GET
* **GSM_Receive_SMS**: SMSを受信
* **GSM_Voice_Call**: 音声通話を受信

### RePhone_API_for_Arduino

* **gps_test**: [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)のサンプル
* **ledmatrix_test**: [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)のサンプル
* **nfc_test**: [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)のサンプル
* **sensorhub_test**: [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)のサンプル
* **ws2812_test**: [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)のサンプル

### rephone_button

* **button_test**: オンボードボタンのテスト

### rephone_lcm

* **lcm_display_test**: LCDディスプレイのサンプル

### rephone_menu_all

* **rephone_menu_test**

### TwilioMessage

* **message_test**: Twilioメッセージの送受信

## RePhoneファミリー
機能を拡張するためのいくつかのチェーン可能なアドオンモジュールがあります – Xadow Audio、Xadow LED 5x7、Xadow Basic Sensors、Xadow Duino、Xadow GPS v2、Xadow NFC v2。

| GPS v2 | Basic Sensors | NFC v2 |
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[詳細を見る](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[詳細を見る](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[詳細を見る](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

| LED 5 x 7 | Audio | Xadow GSM Breakout |
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[詳細を見る](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[詳細を見る](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[詳細を見る](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [PDF形式の回路図](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf)
- [EAGLE形式の回路図](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip)
- [ドライバ](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)
- [ETA6003のデータシート](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf)
- [SIM800HのATコマンド](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf)
- [上記すべてをダウンロード](https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>