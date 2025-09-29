---
description: Grove - Joint v2.0
title: Grove - Joint v2.0
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Joint_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg)

Grove - Joint v2.0 は Seeeduino Lotus と多くの類似点を共有しています。これはミニ ATMEGA328 マイクロコントローラ開発ボードです。Atmel ATMEGA328P-MU と CH340 を使用しています。ATMEGA328P-MU は高性能で低消費電力の AVR 8ビットマイクロコントローラです。CH340 は USB バス変換チップで、USB をシリアルインターフェースに変換できます。Grove - Joint v2.0 には I<sup>2</sup>C ポートと 2 つのデジタル I/O を含む 2 つの Grove インターフェースが搭載されています。また、バッテリー駆動にも対応しています。これを使って簡単なアプリケーションを作成することができます。

## 仕様

* マイクロコントローラ: ATmega328P-MU
* 動作電圧: 5V
* デジタル I/O ピン: 2
* I2C ポート: 1
* アナログ入力チャンネル: 2 (I<sup>2</sup>C と多重化)
* 各 I/O ピンの DC 電流: 40 mA
* フラッシュメモリ: 32 KB (ATmega328P-MU)
* RAM: 2 KB (ATmega328P-MU)
* EEPROM: 1 KB (ATmega328P-MU)
* クロックスピード: 12 MHz

## ハードウェア概要

以下は Grove - Joint モジュールのブロック図で、以下の部品で構成されています。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg)

* **バッテリーインターフェース** - このモジュールはバッテリー駆動が可能です。
* **光センサー** - ボード上に光センサーがあり、**A0** ピンに接続されています。
* **ステータス LED** - ボードのステータスを示す 3 つの LED があります。TX(**D1**)、RX(**D0**)、および L(**D10**)。
* **入力ポート** - 入力ポートは Grove I<sup>2</sup>C インターフェースであり、2 つのアナログチャンネル(**A4** & **A5**)も含みます。
* **出力ポート** - 出力ポートも Grove インターフェースで、2 つのデジタル I/O (**D3** & **D5**) を含みます。
* **ボタン** - ボタンは **D2** に接続されており、スイッチとしても使用できます。
* **Micro USB ポート** - 電源供給およびコードのダウンロードに使用できます。
* **電源 LED** - LED+ は VCC に接続され、LED- は **D6** に接続されています。**D6** を HIGH に設定すると、この LED をオフにして電力を節約できます。
* **CHRG LED** - LED+ は VCC に接続され、LED- は **A3** に接続されています。**A3** を HIGH に設定すると、この LED をオフにして電力を節約できます。

## アプリケーションアイデア

* バッテリー駆動のおもちゃ
* ミニアプリケーション
* ウェアラブル電子機器
* ベビーモニター

## はじめに

それでは、このミニ Arduino ボードを使い始めましょう。

### ドライバのインストール

Grove - Joint v2.0 は CH340 を使用してコードをダウンロードします。そのため、ドライバをインストールする必要があります。

##### Windows/Linux

Windows オペレーティングシステムのシリアルアプリケーションプログラムと完全に互換性があります。

1. コンピュータの USB ポートに接続します。
2. デバイスマネージャーで確認します。
3. ポートが見つからない場合は、[こちら](http://www.wch.cn/downloads.php?name=pro&amp;proid=5)からドライバをダウンロードしてください。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg)

##### Mac OS

ドライバを以下からダウンロードしてください: [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

Mac OS Yosemite の場合:

1. CH340/CH341 ドライバパッケージをダウンロードしてインストールします。
2. ターミナルプログラムを開きます (/Applications/Utilities/ にあります)。
3. 以下のコマンドを入力します: `sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`
4. sudo のパスワードを入力します。
5. コンピュータを再起動します。

Yosemite ではドライバが署名されていないため、署名されたドライバチェックをバイパスする必要があります。

Mac の設定を元に戻したい場合は、以前の設定にブート引数を再定義するか、以下のようにブート引数をクリアしてください: `sudo nvram -d boot-args`

現在のブート引数を確認するには、以下を入力します: `sudo nvram boot-args`

### 準備

Grove - Joint v2.0 のデモを作成するために、以下のモジュールが必要です。

* [Grove Rotary Angle Sensor](https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html)
* [Digital RGB LED Flexi-Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html)

Grove - Joint は Arduino と互換性があります。
Arduino を初めて使用する場合は、[Getting_Started_with_Seeeduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Seeeduino/) を参照して Arduino の旅を始めてください。

### ハードウェアのインストール

Grove - Joint には、上記の 2 つのモジュールを接続するための 2 つの Grove ソケットがあります。それらは以下の通りです。

* Grove Rotary Angle Sensor - Grove 入力ポートに接続
* Digital RGB LED Flexi-Strip - Grove 出力ポートに接続

以下の図を参照してください。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg)

### ソフトウェアの作業

Grove - Joint を micro USB ケーブルでコンピュータに接続します。ステータス LED が点滅しない場合は、ボタンを押してください。

[こちら](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar)をクリックしてテストコードをダウンロードし、任意のフォルダ（例: D ドライブやデスクトップ）に解凍してください。

Arduino IDE を起動し、[ファイル] > [環境設定] をクリックして、ダウンロードしたテストコードの絶対パスをスケッチブックの場所に追加します。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg)

設定後、Arduino を再起動し、[ファイル] > [スケッチブック] をクリックして Grove-Joint デモを選択すると、テストコードが表示されます。

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg)

[ツール] > [ボード] をクリックして Arduino Fio を選択し、対応するシリアルポートを選択します。

### 結果の確認

アップロードが完了したら、角度センサーを回転させると、RGB LED が順番に点灯するのがわかります。

### バッテリーの電圧を取得

Battery+ は A2 に接続されています。このピンを読み取ることでバッテリーの電圧を取得できます。

以下のコードをアップロードしてバッテリーの電圧を取得してください。

```
// Grove - Joint バッテリー取得

const int pinBattery = A2;

int getAnalogData(int pin)
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum+=analogRead(pin);
    }
    return (sum>>5);
}
void setup()
{
    Serial.begin(9600);
    Serial.println("Grove - Joint V2 テスト - バッテリー");
}

void loop()
{
    int value = getAnalogData(pinBattery);

    float voltage = value/1023.0*5.0;
    Serial.print(voltage, 2);
    Serial.println(" V");
    delay(1000);
}
```

**注意**: Grove Joint を PC に接続するとバッテリーが充電されるため、読み取った電圧が正確でない場合があります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

*   [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar)

*   [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>