---
description: Seeed Studio XIAO RP2350 のピンマルチプレクシング
title: ピンマルチプレクシング (Arduino)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /ja/XIAO_RP2350_Pin_Multiplexing
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ピンマルチプレクシング (Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio XIAO RP2350 は豊富なインターフェースを備えています。**19個のデジタルI/O**は**PWMピン**として使用でき、**3つのアナログ入力**は**ADCピン**として使用できます。また、**UART、I2C、SPI**などの4つのシリアル通信インターフェースをサポートしています。このWikiはこれらのインターフェースについて学び、次のプロジェクトでそれらを実装するのに役立ちます！

## 準備

現在、XIAO RP2350 のピン使用に関して互換性の問題があるため、いくつかの問題が発生しています。この問題は修正済みであり、Raspberry Pi公式ライブラリが統合されています。現在のバージョンは4.2.0で、次のバージョン**4.2.1**で更新が完了する予定です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

その間、以下の手順でファイルを置き換えてください。**Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350（Arduinoライブラリのアドレス）**に移動し、[こちらをクリックしてファイルをダウンロード](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip)してください。完了後、作業を楽しむことができます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## デジタル

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RP2350 を拡張ボードに取り付け、Groveケーブルを使用して拡張ボードの**A0/D0**インターフェースにGrove LEDを接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御します。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
// 使用するピンを定義
int LED_BUILTIN = D0;
// setup関数はリセットを押すかボードに電源を入れたときに1回実行されます
void setup() {
  // デジタルピンLED_BUILTINを出力として初期化
  pinMode(LED_BUILTIN, OUTPUT);
}

// loop関数は永遠に繰り返し実行されます
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // LEDをオンにする (HIGHは電圧レベル)
  delay(1000);                      // 1秒待機
  digitalWrite(LED_BUILTIN, LOW);   // 電圧をLOWにしてLEDをオフにする
  delay(1000);                      // 1秒待機
}
```
### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>

## デジタルをPWMとして使用

XIAO RP2350のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したり、その他の機能を実現することができます。

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

XIAO RP2350を拡張ボードに取り付け、Groveケーブルを使用してGrove LEDを拡張ボードの**A0/D0**インターフェースに接続してください。最後に、USB-Cケーブルを使用してXIAOをコンピュータに接続します。

### ソフトウェア実装

この例では、PWM出力を使用してライトの明るさを制御する方法を示します。

```cpp
int LED_pin = D0;    // デジタルピン10に接続されたLED

void setup() {
  // LEDピンを出力として宣言
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 最小値から最大値まで5ポイントずつ増加してフェードイン
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }

  // 最大値から最小値まで5ポイントずつ減少してフェードアウト
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // 値を設定（範囲は0から255）
    analogWrite(LED_pin, fadeValue);
    // 30ミリ秒待機して減光効果を確認
    delay(30);
  }
}
```

### 効果

プログラムが正常に実行されると、以下のような動作効果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

XIAO MG24(Sense) 開発ボードには12ビットのADCが搭載されており、アナログセンサーの値を高解像度で読み取ることができます。これにより、より正確な値を取得することが可能です。

次に、ADCの特性を反映するために2つのセンサーを選択します。

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
        <th>Grove - ラウドネスセンサー</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductloudness20sensor.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Loudness-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア実装

``` cpp
int loudness;

void setup()
{
    Serial.begin(9600);// シリアル通信を初期化
}

void loop()
{
    loudness = analogRead(A0);// A0ピンからアナログデータを読み取る
    Serial.println(loudness);
    delay(200);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

Arduino IDEを使用する際、シリアル通信は多くのプロジェクトにおいて重要な部分です。  
Arduino IDEでシリアル通信を使用するには、まずシリアルモニターウィンドウを開く必要があります。これは、ツールバーの**シリアルモニター**アイコンをクリックするか、**Ctrl+Shift+M**のショートカットキーを押すことで行えます。

### 一般的な使用法

よく使用されるシリアル関数には以下のものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- シリアルポートにデータを読みやすい形式で送信します。
- `Serial.write()` -- シリアルポートにバイナリデータを送信します。
- `Serial.available()` -- シリアルポートから読み取れるデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから1バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信が完了するまで待機します。

これらのシリアル関数を使用することで、Arduinoボードとコンピュータ間でデータを送受信でき、インタラクティブなプロジェクトを作成する可能性が広がります。

以下はサンプルプログラムです：

```c
void setup() {
  // シリアル通信を9600ビット/秒で初期化
  Serial.begin(9600);
}

void loop() {
  // シリアルポートにデータを送信
  Serial.println("Hello World!");

  // シリアルポートからデータを読み取る
  if (Serial.available() > 0) {
    // 受信したバイトを読み取る
    char incomingByte = Serial.read();
    // 受信したバイトをシリアルモニターに表示
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // ループを繰り返す前に1秒待機
  delay(1000);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### Serial1の使用方法

上記のXIAO RP2350のピン図に基づいて、特定のパラメータを確認すると、TXとRXピン（D6, D7）があることがわかります。  
使用方法は非常に似ていますが、D6, D7ピンを監視するために**シリアルポートモニタリングツール**を使用する必要があります。  
次に、D6, D7ピンを使用して**Serial1**を使用します。

:::tip
通常、**Serial**を使用してデバイスとコンピュータ間で通信を行い、プログラム内で何が起こっているかを確認します。

これに基づいて、このデバイスを別のデバイスと通信させたい場合は、**Serial1**を使用します。
:::

```c
void setup() {
    Serial1.begin(115200);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

XIAO RP2350 には I2C インターフェースが搭載されており、多くのセンサーのデータ送信や解析、さらには一部の OLED スクリーンの使用に利用できます。

### ハードウェア準備

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio XIAO 用拡張ベース（Grove OLED付き）</th>
        <th>Grove - DHT20 温湿度センサー</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

DHT20 センサーは I2C プロトコルを使用しているため、XIAO 拡張ボードの I2C ポートを使用してセンサーデータを取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### ソフトウェア実装

この例では、Seeed Studio XIAO RP2350 用拡張ベースを使用して DHT20 センサーのデータを取得する方法を紹介します。

ステップ 1. Seeed Studio XIAO RP2350 を拡張ボードに取り付け、Type-C ケーブルを接続します。

ステップ 2. **Grove Temperature And Humidity Sensor** ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

ステップ 3. ライブラリを Arduino に追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

ステップ 4. ダウンロードしたライブラリから DHTtester デモを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

DHT20 を使用するため、以下のコードのように DHT20 のコードをアンコメントする必要があります。

```c
// 各種 DHT 湿度/温度センサーのテスト用スケッチ
// 作成者: ladyada, パブリックドメイン

#include "Grove_Temperature_And_Humidity_Sensor.h"

// 使用するセンサーのタイプをアンコメントしてください！
//#define DHTTYPE DHT11   // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
//#define DHTTYPE DHT10   // DHT 10
#define DHTTYPE DHT20   // DHT 20

/*注意: DHT10 と DHT20 は他の DHT* センサーと異なり、I2C インターフェースを使用します（ワイヤー1本ではありません）*/
/*したがって、ピンを定義する必要はありません。*/
// #define DHTPIN 2     // 接続するピン（DHT10 と DHT20 は定義不要）
// DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22
DHT dht(DHTTYPE);         //   DHT10 DHT20 はピンを定義不要

// センサーのピン1（左側）を +5V に接続
// センサーのピン2を DHTPIN に接続
// センサーのピン4（右側）を GROUND に接続
// ピン2（データ）からピン1（電源）に 10K 抵抗を接続

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx テスト開始!");
    Wire.begin();

    /*WIO link を使用する場合、電源ピンをプルアップする必要があります。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // 温度または湿度の読み取りには約 250 ミリ秒かかります！
    // センサーの読み取り値は最大 2 秒前の値である可能性があります（非常に遅いセンサーです）

    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("湿度: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("温度: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("温度と湿度の値を取得できませんでした。");
    }

    delay(1500);
}
```

### 効果

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

XIAO RP2350 チップは複数の周辺機器を統合しており、その中には外部SPIデバイス（フラッシュメモリ、ディスプレイ、センサーなど）を接続するためのSPIインターフェースが含まれています。XIAO RP2350は高速SPI転送モードもサポートしており、最大80 MHzのSPI転送速度を実現できます。これにより、ほとんどのSPIデバイスのデータ転送ニーズを満たすことができます。

### ハードウェア準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RP2350</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

上記のハードウェアを準備した後、ジャンパーワイヤーを使用してXIAOとOLEDのSPIインターフェースを接続します。以下の表を参考に配線してください。

|XIAO RP2350| OLED Display|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### ソフトウェア実装

次に、以下のプログラムを例として、SPIインターフェースを使用してOLED画面を制御する方法を紹介します。

u8g2ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

`setup()`関数では、`U8G2_SH1107_128X128_1_4W_HW_SPI`クラスが適切なコンストラクタ引数を使用してインスタンス化されます。この引数は、チップセレクト（cs）、データ/コマンド（dc）、リセットに使用されるピンを指定します。その後、`u8g2.begin()`関数を呼び出してディスプレイを初期化します。

`loop()`関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()`関数を使用して新しいコンテンツでディスプレイを更新します。`u8g2.firstPage()`関数は書き込み用のディスプレイバッファを設定し、`u8g2.nextPage()`関数は更新されたコンテンツを表示します。このdo-whileループは、プログラムが停止するまでコンテンツが継続的に表示されることを保証します。

全体として、このコードはU8g2ライブラリを使用してOLEDディスプレイを制御し、テキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>

## 仕上げ
XIAO RP2350 ピンの基本的な機能について学びましたね。さあ、これを使って楽しみましょう！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>



## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>