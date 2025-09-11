---
description: Seeed Studio XIAO SAMD21 を Nanase とともに
title: Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-by-Nanase
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD21 を Nanase とともに始める

本ドキュメントは、[@nanase\_coder](https://twitter.com/nanase_coder) 氏による以下の記事を参考に作成しました：
[コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)
Nanase さん、素晴らしい情報をありがとうございます！

## ドキュメント

**Seeeduino XIAO** の使用に関するドキュメントは2種類あり、それぞれ異なる分野に焦点を当てています。以下の表を参考にしてください：

|[**Seeed によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)|[**Nanase によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21 入門|Seeed Studio XIAO SAMD21 と MicroSD カード（SPI）|
|Seeed Studio XIAO SAMD21 GPIO の使用方法|Seeed Studio XIAO SAMD21 と GPS（UART）|
|Seeed Studio XIAO SAMD21 リソース|シングルサイクル IOBUS|

## 特徴

* ARM Cortex M0 + CPU (SAMD21G18) 48MHz
* 256 KB フラッシュメモリ、32 KB SRAM
* USB Type-C
* SPI、I2C、UART、DMA 対応
* コインサイズ（21mm x 17.8mm）
* ロジックレベル：3.3V

基板の裏面には部品がなく、すべてのピンがカステレートホール（半田付け用の穴）を備えているため、他の基板に簡単に半田付けできます。

### 部品リスト

- 1 x Seeeduino XIAO
- 2 x 7ピンヘッダー
- 4 x パスター

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

カステレートホール：

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様

|  | 仕様 |
| --- | --- |
| CPU | ARM Cortex-M0+ CPU(SAMD21G18)、最大48MHz（32.768 kHzから倍増） |
| ストレージ | 256KB フラッシュメモリ、32KB SRAM |
| I/O ピン | 14 GPIO ピン、11 アナログピン、11 デジタルピン、1 DAC 出力ピン |
| ピン機能 | SPI、I2C、UART、PWM、外部割り込み、SWD（パワーパッド） |
| ロジックレベル | 3.3V |
| LED | 1 ユーザー LED、1 電源 LED、シリアルポートダウンロード用の2つの LED |
| 電源 | USB Type-C インターフェース、背面のパワーパッド |
| サイズ | 21x17.8x3.5mm |

ご覧の通り、これは SAMD タイプの Arduino であり、Arduino MKR シリーズに似ています。そのため、これらのために書かれたライブラリは技術的に Seeed Studio XIAO SAMD21 でも使用可能です。一方で、Arduino Uno のような ATmega タイプの Arduino とは異なるため、ATmega の特定のレジスタに依存するライブラリは使用できません。

GPIO の14ピンは、側面の11ピン、リセットピン、背面の SWD（SWDIO、SWCLK）を指します。

ピン機能の UART は USB 経由のシリアルとは異なり、`Serial1` を使用して操作できます。

## ボードをリセットする

[こちら](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して、Arduino IDE に Seeed Studio XIAO SAMD21 を追加する方法を学んでください。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21 にはリセットボタンがありません。その代わりにリセットパッドがあります。
このリセットパッドを短絡し、GND を適用することでボードをリセットします。

## ブートローダーモード

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

プログラムがクラッシュしたり、スケッチをアップロードできなくなることがあります。この場合、ボードを2回リセットしてブートローダーモードに入ることができます。このモードでは、LED がゆっくり点滅し、Seeed Studio XIAO SAMD21 は USB メモリデバイスとして認識されます。シリアルポートは通常モードとは分離され、ボード上の以前のプログラムを実行せずに常にスケッチ書き込みモードになります。

ブートローダーモードから通常モードに戻るには、スケッチをアップロードするか、再度素早く2回リセットしてください。

PC が Seeed Studio XIAO SAMD21 を USB デバイスとして認識しない場合にブートローダーモードに入ると、LED が高速で点滅します。

## LCD

オリジナルの Arduino と同様に、サンプルスケッチから Basics > Blink を選択してアップロードします。

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

オリジナルの Arduino とは異なり、LOW で点灯し、HIGH で消灯します。

### 点滅可能な2つの内蔵 LED

公式ウェブサイトでは、他の2つの内蔵 LED を「シリアルポートダウンロード用の2つの LED」と説明しています。しかし、回路図を見ると、これらの RX および TX LED に接続された物理ピンはありません。

[USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627) を見ると、シリアル USB の送受信が発生するたびに `digitalWrite` によって点灯することがわかります。つまり、これら2つの LED はプログラム可能です。

```cpp
uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)
{
    if (!_usbConfiguration)
        return -1;

#ifdef PIN_LED_RXL
    if (rxLEDPulse == 0)
        digitalWrite(PIN_LED_RXL, LOW);

    rxLEDPulse = TX_RX_LED_PULSE_MS;
#endif
```

具体的なピン番号は、SAMD Arduino のように `variant.h / variant.cpp` に記載されており、Seeeduino XIAO の場合、以下のように 11 と 12 に割り当てられています。

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

以下は、3つの LED を点滅させるスケッチです。RX と TX の LED は青色です。

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(PIN_LED2, LOW);
  digitalWrite(PIN_LED3, LOW);
  delay(1000);
}
```

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" alt="pir" width={600} height="auto" /></p>

## インターフェース

### USB CDC 経由のシリアル通信

ATmega 系の Arduino とは異なり、Seeed Studio XIAO SAMD21 のシリアル通信の実態は USB CDC です。つまり、通常のシリアル通信よりも高速に動作することが可能です。

そのため、`Serial.begin(speed)` でボーレートを指定しても意味はありませんが、それ以外は通常のシリアル通信と同様に使用できます。

### 速度の測定

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

[このスケッチ](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e)を使用して、Seeed Studio XIAO SAMD21 から PC への転送速度を測定しました。PC から Seeed Studio XIAO SAMD21 への転送速度も同じであるはずです。

横軸はバッファサイズ（`Serial.write(buf, len)` を使用して一度に送信するサイズ）です。
1 バイトずつ送信すると、0.11 Mbps（14.53 KB/s）しか得られませんが、64 バイトを送信すると、6.30 Mbps（805.86 KB/s）と大幅に高速化します。内部バッファのサイズが 64 バイトであることが推測されます。

上記のように、シリアル通信中に LED が点滅しますが、これによる速度低下はほとんどありませんでした。

### SPI（MicroSD カード）

Seeed Studio XIAO SAMD21 のロジックレベルは 3.3V です。つまり、レベルシフタを使用せずに SPI 経由で microSD カードを扱うことができます。
SPI の一部の機能は ATmega 系 Arduino とは異なるため、詳細は[こちら](https://qiita.com/nanase/items/406a8a848d1b259d3af4)を確認してください。

ここでは、秋月電子の [microSD カードスロット DIP キット](http://akizukidenshi.com/catalog/g/gK-05488/) を使用して microSD カードを読み取ります。

Arduino のサンプルコードを使用しますが、`SD.begin(cs_pin)` のパラメータには `SS` を指定します。`variant.h` によると、SS = 4 で、これは D4 / A4 / SDA ピンと同じです。もちろん、他のピンを指定することも可能です。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd" alt="pir" width={600} height="auto" /></p>

```cpp
#include <SPI.h>
#include <SD.h>

File myFile;

void setup() {
  Serial.begin(9600);
  while (!Serial) ;

  Serial.print("SDカードを初期化中... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA ピン
    Serial.println("初期化に失敗しました！");
    while (1) ;
  }
  Serial.println("初期化完了。");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("test.txt に書き込み中...");
    myFile.println("テスト 1, 2, 3.");

    myFile.close();
    Serial.println("完了。");
  }
  else
    Serial.println("test.txt のオープンエラー");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt の内容:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("test.txt のオープンエラー");
}

void loop() { }
```

結果:

```
SDカードを初期化中...初期化完了。
test.txt に書き込み中...完了。
test.txt の内容:
テスト 1, 2, 3.
```

### I2C

I2C も利用可能です。3.3V デバイスはレベルシフタなしで直接接続できます。

今回は BME280 を使用して温度、湿度、気圧を測定しました。BME280 は 3.3V で動作するため、レベルシフタなしで接続可能です。Arduino と BME280 の接続に関する詳細な手順は[こちら](https://qiita.com/nanase/items/f34e03c29410add9c4d0)を確認してください。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c" alt="pir" width={600} height="auto" /></p>

```cpp
#include <Wire.h>
#include "SparkFunBME280.h"

BME280 sensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sensor.beginI2C(); // Wire を用いて I2C 接続開始
}

void loop() {
  Serial.print("Temp: ");
  Serial.print(sensor.readTempC(), 2);

  Serial.print(" °C, Humidity: ");
  Serial.print(sensor.readFloatHumidity(), 2);

  Serial.print(" %, Pressure: ");
  Serial.print(sensor.readFloatPressure() / 100.0, 1);
  Serial.println(" hPa");

  delay(5000);
}
```

結果:

```
温度: 22.05 °C, 湿度: 44.99 %, 気圧: 1009.0 hPa
温度: 22.05 °C, 湿度: 44.72 %, 気圧: 1008.9 hPa
温度: 22.06 °C, 湿度: 44.81 %, 気圧: 1008.9 hPa
```

### UART

前述の通り、物理的なUARTピンはUSB CDCのピンとは異なります。`Serial1`はTXおよびRXピンを使用したシリアル通信に使用されます。

今回は、Seeed Studio XIAO SAMD21をGPS受信機キットに接続し、PCからNMEA情報を取得します。Xiaoを使用することで、GPSキットとPCシリアル間のブリッジとして非常に簡単な作業になります。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a" alt="pir" width={600} height="auto" /></p>

```cpp
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = (char)Serial.read();
    Serial1.write(c);
  }

  if (Serial1.available()) {
    char c = (char)Serial1.read();
    Serial.write(c);
  }
}
```

このたびはGPSFoxを使用してNMEA情報を閲覧します。座標は簡単に測定できます。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>


## その他

### DMA

SAMDタイプのArduinoの特徴の一つとして、XiaoではDMAを使用できます。DMAの詳細については[こちら](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma)を参照してください。

### シングルサイクルIOBUS

Cortex M0+ には、GPIO出力を1クロックサイクルで操作できる[シングルサイクルIOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview)という機能があります。特定のレジスタに書き込むことで、論理の反転、ピンの無効化、またはピンのドライブ電流の変更が可能です。

### DigitalWrite

digitalWriteを使ってパルスを生成することができます。これは、どのArduinoボードでも動作する方法であり、オーバーヘッドを繰り返すだけです。

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                     \
  digitalWrite(PIN_A7, HIGH); \
  digitalWrite(PIN_A7, LOW);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Use Registers

You can also create a pulse by directly operating the register without using `digitalWrite`.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                                                             \
  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \
  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### シングルサイクルIOBUSの使用

[こちら](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/)で紹介されている `IOBUS.h` を使用します。

```cpp
#include "IOBUS.h"

#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)
#define PIN_NUM digitalPinToIOPin(PIN_A7)

void setup() {
  IOBUS::pinMode(PIN_NUM, OUTPUT, true);
}

#define P IOBUS::toggleOutput(PIN_NUM);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

|  | DigitalWrite | レジスタ操作 | シングルサイクルIOBUS |
| --- | --- | --- | --- |
| 波形 |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| 周波数 | 333 kHz | 6 MHz | 24 MHz |
| パルス生成に必要なクロック数 | 144 | 8 | 2 |

ロジックは1サイクル（48MHz）で確実に反転できます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>