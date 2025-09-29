---
description: Seeed Studio XIAO SAMD21 with Nanase
title: Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-by-Nanase
last_update:
  date: 1/11/2023
  author: shuxu hu
---


# Seeed Studio XIAO SAMD21 Nanaseによる入門ガイド

これは [@nanase_coder](https://twitter.com/nanase_coder) によって書かれた文書です。（元の日本語文書からSeeedが翻訳：[コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)）。Nanaseさん、この情報を共有していただき、ありがとうございます！

## ドキュメント

**Seeeduino XIAO** の使用方法に関する2つのドキュメントがあり、それぞれ異なる分野に焦点を当てています。参考として以下の表をご確認ください：

|[**Seeedによるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)|[**Nanaseによるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21 はじめに|Seeed Studio XIAO SAMD21 with MicroSDカード(SPI)|
|Seeed Studio XIAO SAMD21 GPIO 使用方法|Seeed Studio XIAO SAMD21 with GPS(UART)|
|Seeed Studio XIAO SAMD21 リソース|Single Cycle IOBUS|

## 機能

- ARM Cortex M0 + CPU (SAMD21G18) 48MHz
- 256 KB Flash、32 KB SRAM
- USB Type-C
- SPI、I2C、UART、DMA利用可能
- コインサイズ（21mm x 17.8mm）
- ロジックレベル：3.3V

基板の裏面には部品がなく、すべてのピンにキャステレーテッドホールがあるため、他の基板への半田付けが簡単です。

### パーツリスト

- 1 x Seeeduino XIAO
- 2 x 7ピンヘッダー
- 4 x パスター

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

キャステレーテッドホール：

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様

|  | 仕様 |
| --- | --- |
| CPU | ARM Cortex-M0+ CPU(SAMD21G18) 最大48MHzで動作（32.768 kHzから逓倍） |
| ストレージ | 256KB Flash、32KB SRAM |
| I/O PINs | 14 GPIO PINs、11アナログピン、11デジタルピン、1 DAC出力ピン |
|ピン機能  |SPI、I2C、UART、PWM、外部割り込み、SWD（パワーパッド）  |
| ロジックレベル | 3.3V |
| LED： |1ユーザーLED、1電源LED、シリアルポートダウンロード用2つのLED   |
| 電源 | USB Type-Cインターフェース、背面の電源パッド|
| サイズ | 21x17.8x3.5mm |

ご覧の通り、これはSAMDタイプのArduinoであり、Arduino MKRシリーズに似ているため、技術的には、それらのために書かれたライブラリはSeeed Studio XIAO SAMD21で使用できます。一方で、Arduino UnoのようなATmegaタイプのArduinoとは異なるため、ATmegaの特定のレジスタに依存するライブラリは使用できません。

GPIO 14ピンは、側面の11ピン、リセットピン、および背面のSWD（SWDIO、SWCLK）を指します。

ピン機能のUARTは、USB経由のシリアルとは異なり、`Serial1`で操作できます。

## ボードのリセット

[こちら](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を確認し、Seeed Studio XIAO SAMD21をArduino IDEに追加する方法について学習してください。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21にはリセットボタンがありません。代わりに、リセットパッドがあります。
このリセットパッドをショート接続し、GNDを適用してボードをリセットします。

## ブートローダーモード

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

時々プログラムがクラッシュしたり、スケッチをアップロードできない場合があります。ボードを2回リセットしてブートローダーモードに入ることができます。このモードでは、LEDがゆっくりと点滅し、Seeed Studio XIAO SAMD21はUSBメモリデバイスとして認識されます。シリアルポートは通常モードから分離され、ボード上の以前のプログラムを実行することなく、常にスケッチ書き込みモードになります。

ブートローダーモードから通常モードに戻るには、スケッチをアップロードするか、再度素早く2回リセットします。

Seeed Studio XIAO SAMD21がPCによってUSBデバイスとして認識されていない時にブートローダーモードに入ると、LEDが急速に点滅します。

## LCD

元のArduinoと同様に、サンプルスケッチからBasics> Blinkを選択してアップロードします。

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

元のArduinoとは逆に、LOWでオンになり、HIGHでオフになります。

### 2つの点滅可能な内蔵LED

公式ウェブサイトでは、他の2つの内蔵LEDを`シリアルポートダウンロード用の2つのLED`として説明しています。しかし、回路図を見ると、これらのRXとTX LEDに接続された物理的なピンはありません。

[USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627)を見ると、シリアルUSB送信/受信が発生するたびに`digitalWrite`によってオンになることがわかります。これは、この2つのLEDがプログラム可能であることを意味します。

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

具体的なピン番号は、SAMD Arduinoのように`variant.h / variant.cpp`で定義されており、Seeeduino XIAOの場合は以下のように11と12に割り当てられています。

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

以下は3つのLEDを点滅させるスケッチです。RXとTXのLEDは青色です。

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

### USB CDC経由のシリアル通信

ATmegaタイプのArduinoとは異なり、Seeed Studio XIAO SAMD21のシリアル通信の実際の状態はUSB CDCです。つまり、通常のシリアル通信よりも高速に実行できます。

したがって、`Serial.begin(speed)`でボーレートを指定することは意味がありませんが、それ以外は通常のシリアルとして使用できます。

### 速度測定

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

[このスケッチ](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e)を使用してSeeed Studio XIAO SAMD21からPCへの転送速度を測定しました。PCからSeeed Studio XIAO SAMD21への転送速度も同じはずです。

横軸はバッファサイズ（`Serial.write(buf, len)`を使用して一度に送信）です。
1バイトずつ送信すると0.11 Mbps（14.53 KB/s）しか得られませんが、64バイト送信すると6.30 Mbps（805.86 KB/s）と大幅に高速になります。内部バッファのサイズが64バイトであることが推測できます。

上記のように、シリアル通信でLEDが点滅しますが、これによる速度低下はほとんどありませんでした。

### SPI（MicroSDカード）

Seeed Studio XIAO SAMD21のロジックレベルは3.3Vです。つまり、レベルシフターなしでSPI経由でmicroSDカードを扱うことができます。
SPIの一部機能はATmegaタイプのArduinoとは異なります。詳細については[こちら](https://qiita.com/nanase/items/406a8a848d1b259d3af4)をご確認ください。

ここでは秋月電子の[micro SDカードスロットDIPキット](http://akizukidenshi.com/catalog/g/gK-05488/)を使用してmicroSDカードを読み取ります。

ここではArduinoのサンプルコードを使用しますが、`SD.begin(cs_pin)`のパラメータは`SS`として指定されています。variant.hによると、SS = 4で、これはD4 / A4 / SDAピンと同じです。もちろん、他のピンを指定することもできます。

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

  Serial.print("Initializing SD card... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA pin
    Serial.println("initialization failed!");
    while (1) ;
  }
  Serial.println("initialization done.");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");

    myFile.close();
    Serial.println("done.");
  }
  else
    Serial.println("error opening test.txt");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("error opening test.txt");
}

void loop() { }
```

結果：

```
Initializing SD card...initialization done.
Writing to test.txt...done.
test.txt:
testing 1, 2, 3.
```

### I2C

I2Cも利用可能です。3.3Vデバイスはレベルシフターなしで直接接続できます。

今回は、BME280を使用して温度と湿度、大気圧を測定しました。BME280は3.3Vで動作するため、レベルシフターなしで接続できます。ArduinoとBME280の接続の詳細な手順については[こちら](https://qiita.com/nanase/items/f34e03c29410add9c4d0)を確認してください。

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
Temp: 22.05 °C, Humidity: 44.99 %, Pressure: 1009.0 hPa
Temp: 22.05 °C, Humidity: 44.72 %, Pressure: 1008.9 hPa
Temp: 22.06 °C, Humidity: 44.81 %, Pressure: 1008.9 hPa
```

### UART

前述のように、物理的なUARTピンはUSB CDCのピンとは異なります。`Serial1`はTXピンとRXピンを使用したシリアル通信に使用されます。

今回は、Seeed Studio XIAO SAMD21をGPS受信機キットに接続し、PCからNMEA情報を取得します。Xiaoを使用すると非常に簡単な作業で、GPSキットとPCシリアル間のブリッジとしての役割を果たします。

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

今回はGPSFoxを使用してNMEA情報を閲覧します。座標を簡単に測定できます。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## その他

### DMA

SAMD型Arduinoの機能の一つとして、XiaoでDMAを使用できます。DMAの詳細については[こちら](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma)を確認してください。

### 単一サイクル IOBUS

Cortex M0+には[Single Cycle IOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview)という機能があり、GPIO出力を1クロックサイクルで操作できます。特定のレジスタに書き込むことで、論理を反転させたり、ピンを無効にしたり、ピンの駆動電流を変更したりできます。

### DigitalWrite

digitalWriteを使用してパルスを作成できます。これはどのArduinoボードでも動作する方法ですが、オーバーヘッドを繰り返すだけです。

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

### レジスタを使用する

`digitalWrite`を使用せずに、レジスタを直接操作してパルスを作成することもできます。

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

### 単一サイクルを使用 IOBUS

We use `IOBUS.h` introduced [here](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/).

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

|  | DigitalWrite | Registers | Single Cycle IOBUS |
| --- | --- | --- | --- |
| 波形 |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| 周波数 | 333 kHz | 6 MHz | 24 MHz |
| パルス生成に必要なクロックサイクル数 | 144 | 8 | 2 |

ロジックは確実に1サイクル（48MHz）で反転できます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
