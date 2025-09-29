---
description: Arduinoボード向けシリアルユーザーガイド
title: Arduinoボード向けシリアルユーザーガイド
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-Serial
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Arduinoソフトウェアシリアルユーザーガイド

Arduinoハードウェアは、ピン0と1（ハードウェアシリアル）で**シリアル通信**をサポートしていますが、これらのピンがすでに使用中である場合や、デバッグのためにさらに多くのシリアルポートが必要な場合には、[**ソフトウェアシリアル**](https://www.arduino.cc/en/Reference/softwareSerial)が解決策となる場合があります。

ここでは、Arduinoでソフトウェアシリアルを使用する方法を例を用いて説明します！

## ソフトウェアシリアルの例

```cpp
/*
RXはデジタルピン2（他のデバイスのTXに接続）
TXはデジタルピン3（他のデバイスのRXに接続）
*/

#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.println("おやすみなさい、月よ！");

  mySerial.begin(9600);
  mySerial.println("こんにちは、世界？");
}

void loop()
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

実際には、シリアル無線透過モジュールやシリアルセンサーなど、他のシリアルデバイスを使用することもできます。標準である限り、シリアルデバイスはほぼ同じ方法でプログラムされます。

## 複数のソフトウェアシリアルの使用

複数のシリアルデバイスを接続する必要がある場合、複数のソフトウェアシリアルポートを作成することが可能です。ただし、ハードウェアの制限により、Arduino UNOは一度に1つのソフトウェアシリアルしかリスニングできません。以下は複数のソフトウェアシリアルの例です：

```cpp
#include <SoftwareSerial.h>
SoftwareSerial serialOne(2, 3); // ソフトウェアシリアル1
SoftwareSerial serialTwo(8, 9); // ソフトウェアシリアル2

void setup() {
  Serial.begin(9600);
  while (!Serial) { // シリアルが準備完了するまで待機
  }

  serialOne.begin(9600);
  serialTwo.begin(9600);
}

void loop() {
  serialOne.listen(); // シリアル1をリスニング

  Serial.println("ポート1からのデータ：");
  while (serialOne.available() > 0) {
    char inByte = serialOne.read();
    Serial.write(inByte);
  }

  Serial.println();

  serialTwo.listen(); // シリアル2をリスニング

  Serial.println("ポート2からのデータ：");
  while (serialTwo.available() > 0) {
    char inByte = serialTwo.read();
    Serial.write(inByte);
  }

  Serial.println();
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>