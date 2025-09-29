---
description: Rephone Core 2G-Atmel32u4
title: Rephone Core 2G-Atmel32u4
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RePhone_core_2G-Atmel32u4
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cover.jpg)

RePhoneは、Seeed Studioによって作られた最もユニークで興味深い開発ボードプラットフォームの1つです。RePhoneを使用すると、自分だけの特別な電話をDIYするだけでなく、周囲のものにセルラー接続を付加することができます。RePhoneコアの初版はXadow – GSM+BLEでしたが、今回はより高性能で低消費電力の2つの新しいRePhoneコアエディションを提供します。その1つがRePhone Core 2G Atmel32u4 v1.0です。

RePhone Core 2G Atmel32u4 v1.0は、新しいArduino互換のRePhone Core 2Gボードで、Atmel32u4とSIM800Hをベースにしています。RePhone Core 2G Atmel32u4 v1.0のほとんどの機能はXadow – GSM+BLEと同じで、GSM、GPRS、Bluetoothなどの豊富な通信プロトコルを提供し、850/900/1800/1900MHzのクアッドバンドをサポートし、2G Nano SDカードをサポートします。しかし、Atmel32u4とSIM800Hの組み合わせにより、Xadow – GSM+BLEと比較して消費電力が大幅に削減されています。高性能で低消費電力のRePhoneコアを探しているなら、この新しいRePhone Core 2Gモジュールが最適な選択です。

さらに強力な新しいRePhone Core 2Gバージョンも提供しています。このバージョンはAtmelSAMD21+SIM800を採用しています。[こちら](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)をクリックして詳細をご覧ください。

:::warning
1. この製品には**リポバッテリーは含まれていません**。また、Bazaarではリポバッテリーの販売も行っていません。3.7Vのリポバッテリーであれば使用可能です。
2. この製品には**マイク、スピーカー、3.5mmハンドセット入力は含まれていません**。これらの機能を使用するには、[Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)を購入する必要があります。
:::

## 特徴

### Arduino/プロセッサ

* Atmega32u4が16MHzで動作
* Arduino IDEで動作（Arduino Leonardoブートローダーに基づく）
* リチウムバッテリー管理チップを内蔵
* ユーザーボタン搭載

### SIM800H

* クアッドバンド 850/900/1800/1900MHz
* GPRSマルチスロットクラス12/10
* GPRSモバイルステーションクラスB
* GSM 2/2+標準に準拠
    * クラス4 (2 W @850/900MHz)
    * クラス1 (1 W @1800/1900MHz)
* Bluetooth: 3.0+EDR互換
* FM: バンド範囲 76~109MHz、50KHzステップで調整可能
* ATコマンドによる制御 3GPP TS 27.007, 27.005およびSIMCOM拡張ATコマンドセット
* SIM USAT対応
* 低消費電力
* 動作温度範囲: -40 ~ +85 °C

## 仕様

| 項目 | 値 |
|--------------|-------------------------------------|
| マイクロコントローラー | Atmega32U4 |
| 動作電圧 | 3.3V |
| I/OピンあたりのDC電流 | 50 |
| フラッシュメモリ | 32 KB（うち4KBはブートローダーで使用） |
| SRAM | 2.5 KB |
| EEPROM | 1 KB |
| クロックスピード | 16 MHz |
| 長さ | 68 mm |
| 幅 | 30 mm |
| 重量 | 12 g |

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hw.png)

* **1- **11ピンXadowコネクタ
* **2- **ユーザーボタン（D3）
* **3- **プログラミングおよび電源用Micro USBコネクタ
* **4- **35ピンXadowコネクタ
* **5- **JST1.0バッテリーコネクタ
* **6- **Nano SIMカード（iPhone 5/6/7と同じ）
* **7- **Atmega32U4 IC
* **8- **充電状態モニターLED
    * 点滅 - バッテリー未挿入
    * 点灯 - 充電中
    * 消灯 - 充電完了
* **9- **IC - ETA6003（データシート）
* **A- **ICSPパッド
* **B- **アンテナコネクタ
* **C- **I/O PINパッド
* **D- **SIM800H

## ピンマップ

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)

:::tip
    [こちらをクリック](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)して画像を拡大表示してください。
:::
:::note
    * INT1はD7に接続されています
    * INT2はD12に接続されています
:::

## Arduino IDE

[最新のArduino IDE](https://www.arduino.cc/en/Main/Software)をダウンロードしてインストールした後、[こちら](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)をクリックしてArduino IDEにボードを追加してください。

### ドライバのインストール (Windowsの場合)

初めてボードを挿入すると、RePhone 2G SAMD21という名前のUSB COMデバイスが表示され、ドライバをインストールする必要があります。以下のボタンをクリックしてボード用のドライバをダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)

ドライバが正常にインストールされたことを確認するには、デバイスマネージャーを開き、**RePhone 2G 32U4**が存在するか確認してください。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/device_manager.png)

### Hello World

次に、最初のデモ「Hello World」をボードにアップロードします。

Arduino IDEを開き、以下のコードをコピーしてください：

```c
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.println("Hello world!");
    delay(1000);
}
```

その後、

* **ツール > ボード > RePhone core 2G-Atmel32u4**をクリックしてください。

RePhone core 2G-Atmel32u4が見つからない場合は、[SeeedボードをArduino IDEに追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を確認してください。

* **ツール > ポート**をクリックして正しいポート番号を選択してください。（*COM1は選択しないでください*）

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/arduino_ide.png)

次に、Arduino IDEの左上にある**アップロード**ボタンをクリックしてください。数秒後、スケッチが正常にアップロードされます。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload.png)

アップロードが成功すると、赤色でいくつかの情報が表示されます。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload_done.png)

Arduino IDEのシリアルモニターを開くと、毎秒「Hello World」が表示されます。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hello_world.png)

## ATコマンドモード

RePhone core 2GボードはATコマンドモードをサポートしています。SIM800HのTX/RXはAtemlSAMD21のSerial1(D0/D1)に接続されています。

以下のコードをコピーしてボードにアップロードしてください。

```c
#include "atmel32u4_gprs.h"

void setup()
{
    Serial.begin(9600);
    while(!Serial);

    Serial.println("SIM800 Serial Debug Test ...");
    gsm.preInit();

    while(0 != gsm.sendATTest())
    {
        Serial.println("sim800 init error!");
    }

    Serial.println("sim800 init O.K!");
}

void loop()
{
    gsm.ATDebug();
}
```

シリアルモニターを開き、***GSM init ok.***がモニターに表示されるのを待ちます。その後、コマンドを入力できます。
「AT」と入力して「OK」を取得してみてください。

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cmd.png)

:::tip
    すべてのコマンドは新しい行(\r\n)で終了する必要があります。
:::
以下のボタンをクリックして詳細なATコマンドのドキュメントを取得してください。

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

## 例

このモジュールの動作を示すために、多くの例を用意しました。  
最初に以下の手順を実行してください：

1. nano SIMカードを挿入する  
2. アンテナを接続する  
3. リポバッテリーをお持ちの場合は、ボードに接続する  

**File > Examples** をクリックすると、これらの例を開くことができます。

### Atmel32U4_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Bluetoothを介して音楽を再生する  
* **GSM_GPRS_HTTP_GET**: [mbed.org](http://mbed.org) から hello.txt をHTTP GETする  
* **GSM_Receive_SMS**: SMSを受信する  
* **GSM_Voice_Call**: 音声通話を受信する  
* **SIM800_Serial_Debug**: ATコマンドモード  

### RePhone_API_for_Arduino

* **gps_test**: [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html) の例  
* **ledmatrix_test**: [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html) の例  
* **nfc_test**: [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html) の例  
* **sensorhub_test**: [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html) の例  
* **ws2812_test**: [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html) の例  

### rephone_button

* **button_test**: オンボードボタンのテスト  

### rephone_lcm

* **lcm_display_test**: LCDディスプレイの例  

### rephone_menu_gsm

* **rephone_menu_test**  

## RePhone ファミリー

機能を拡張するためのいくつかのチェーン可能なアドオンモジュールがあります。これには、Xadow Audio、Xadow LED 5x7、Xadow Basic Sensors、Xadow Duino、Xadow GPS v2、Xadow NFC v2 が含まれます。

| GPS v2 | Basic Sensors | NFC v2 |
|--------|---------------|--------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg) |
| [詳細を見る](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html) | [詳細を見る](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html) | [詳細を見る](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html) |

| LED 5 x 7 | Audio | Xadow GSM Breakout |
|-----------|-------|--------------------|
| ![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg) | ![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg) | ![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg) |
| [詳細を見る](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html) | [詳細を見る](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) | [詳細を見る](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html) |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース

- [PDF形式の回路図](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)  
- [EAGLE形式の回路図](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip)  
- [ドライバ](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)  
- [ETA6003のデータシート](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/ETA6003.pdf)  
- [SIM800HのATコマンド](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/SIM800_AT.pdf)  
- [上記すべてをダウンロード](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/archive/master.zip)  

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>