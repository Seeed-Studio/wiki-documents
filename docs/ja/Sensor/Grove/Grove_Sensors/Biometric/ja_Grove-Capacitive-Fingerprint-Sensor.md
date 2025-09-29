---
description: Grove - 容量性指紋スキャナー/センサー
title: Grove - 容量性指紋スキャナー/センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Capacitive-Fingerprint-Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-connect.jpg" /></div>

Grove - 容量性指紋スキャナー/センサーは、KCT203半導体指紋認識モジュールを基にしており、高性能MCU、垂直RFプッシュ型指紋センサー、およびタッチセンシングデバイスを含んでいます。このモジュールは、小型サイズ、小さな指紋テンプレート、低消費電力、高信頼性、高速指紋認識など、多くの利点を備えています。さらに、このモジュールには指紋認識が成功したかどうかを示すかわいらしいRGBライトが付いている点も特筆すべきです。

このシステムは高性能指紋アルゴリズムを搭載しており、自己学習機能が優れています。指紋認識が成功するたびに、最新の挑戦特徴値を指紋データベースに統合することで、指紋特徴を継続的に改善し、より良い体験を提供します。

Groveドライバーボードには電力レベルシフト回路を追加しているため、このモジュールは3.3Vおよび5Vシステムの両方で動作可能です。また、Grove UARTコネクタと提供されているArduinoライブラリを使用することで、簡単にArduino指紋センサー/スキャナーを構築できます。

以前にGrove光学指紋センサーをリリースしましたが、今回はGrove - 容量性指紋スキャナー/センサーをお届けします。それでは、両センサーの違いは何でしょうか？以下に両センサーの長所と短所を示し、ニーズに最適なものを選べるようにします。

製品|長所|短所
-----|-----|----
[Grove - 容量性指紋スキャナー/センサー](https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html)|生体特性を識別可能、生命体のみを識別、高い安全性、小型サイズ、低消費電力、高精度|耐摩耗性が低い、汗、汚れ、指の摩耗などに影響を受けやすい
[Grove - 光学指紋センサー](https://www.seeedstudio.com/Grove-Fingerprint-Sensor.html)|耐摩耗性が強い、環境適応性が良い、安定性が高い|サイズが大きい、消費電力が高い、精度が比較的低い、生命体を識別できない、安全性が低い

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 内蔵2KByteストレージ：最大100個の指紋をサポート
- 強力な自己学習機能：使用するほど認識精度が向上
- 選択可能なセキュリティレベル
- 小型サイズ、低消費電力、待機モードで10uA

新しいセンサーは内部アルゴリズムが更新され、認識精度が向上しましたが、使用されるライブラリやコードは変更されていません。

## アプリケーション

- 指紋ロックデバイス：ドアロック、金庫、ステアリングホイールロック、南京錠、銃ロックなど
- 指紋サインイン、アクセス制御システム

## 仕様

| パラメータ | 値 |
|---|---|
| CPU | GD32 |
| 指紋テンプレート保存数 | 最大 100 |
| コネクタ | Grove UART |
| センサー解像度 | 508 DPI |
| センサーピクセル | 160*160 |
| 誤拒否率 | &lt;1% |
| 誤受入率 | &lt;0.005% |
| マッチ応答時間 (1:N モード) | &lt;350ms |
| マッチ応答時間 (1:1 モード) | &lt;7ms |
| センサーサイズ | Φ14.9mm |
| フレームサイズ | Φ19mm |
| 消費電力 | フルスピード: ≤40 mA; スリープ: ≤12uA |
| 動作電圧 | 3.3V/5V |
| 動作温度 | -20~70℃ |
| ESD保護 | 非接触 15KV、接触 8KV |

## ピンアウト

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-pin.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::注意
上記で言及されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

| Seeeduino V4.2 | ベースシールド | Grove - 静電容量式指紋スキャナー/センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank">今すぐ購入</a>|

:::注意
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーのケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 静電容量式指紋スキャナー/センサーをGrove-Base Shieldのポート **D2** に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/connect.jpg" /></div>

:::注意
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - 静電容量式指紋スキャナー/センサー |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5V または 3.3V | 赤                | VCC |
| D3             | 白                | RX  |
| D2             | 黄                | TX  |

#### ソフトウェア

:::注意
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開きます。パスは次の通りです：**File --> Examples --> Seeed_Arduino_KCT202 --> full_process**。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/path.jpg" /></div>

2. または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーすることもできます。

```cpp

/*

    Copyright (c) 2019 Seeed Technology Co., Ltd.
    Website    : www.seeed.cc
    Author     : downey
    Create Time: Jun 2019
    Change Log :

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#elif defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
    #define uart Serial
    FingerPrint_KCT202<Uart, Serial_> kct202;
#elif defined(ARDUINO_ARCH_SAMD)
    #define debug  SerialUSB
    #define uart Serial1
    FingerPrint_KCT202<Uart, Serial_> kct202;
#else
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#endif





Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

void setup(void) {
    debug.begin(115200);
    kct202.begin(uart, debug);
}

uint16_t finger_num;
void loop() {
    // 最初のパラメータは確認する指紋 ID です。
    // 0xffff を設定すると、すべての指紋テンプレートを検索して一致を試みます。
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                                 LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    debug.println(" ");
    debug.println("指をタッチパッドに置いてください。");
    debug.println("指紋を確認します。");
    debug.println(" ");
    debug.println(" ");
    debug.println(" ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
        debug.println("確認成功！");
        debug.print("あなたの指紋テンプレート ID = ");
        debug.println(finger_num, HEX);
    }
    delay(2000);
}
```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合があるため、最初の方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定してください。

- **ステップ 6.** 指をタッチパッドに置いてください。

:::tip
すべてが正常に動作している場合、シリアルモニタを開くと以下のように表示されるかもしれません：
:::

```cpp
使用方法:
    指をタッチパッドに置いてください
    4回繰り返すか、連続して押してください
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.0.0.0.C. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.1.0.E. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.1.0.F. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.2.0.F. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.2.0.10. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.3.0.10. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.3.0.11. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.4.0.11. 
 
***********************************************************
指をタッチパッドに置いてください
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.4.0.12.EF.1.FF.FF.FF.FF.7.0.5.0.4.F0.1.0.EF.1.FF.FF.FF.FF.7.0.5.0.5.F1.1.2.EF.1.FF.FF.FF.FF.7.0.5.0.6.F2.1.4. 
 
登録成功！
Uart===> : EF.1.FF.FF.FF.FF.1.0.8.32.0.FF.FF.0.7.2.40. 
 
 
指をタッチパッドに置いてください。
指紋を確認します。
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.0.0.0.0.0.0.F. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.1.0.0.0.0.0.10. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.5.0.1.0.64.0.79. 
 
確認成功！
あなたの指紋テンプレート ID = 1
Uart===> : EF.1.FF.FF.FF.FF.1.0.3.D.0.11. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.3.0.0.A. 
 
操作成功。
削除成功！
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/reg/Grove-Capacitive-Fingerprint-Scanner_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Capacitive Fingerprint Scanner/Sensor eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/res/Grove-Capacitive-Fingerprint-Scanner_SCH&PCB.zip)

- **[Zip]** [Grove - Capacitive Fingerprint Scanner/Sensor コード](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202/archive/master.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>