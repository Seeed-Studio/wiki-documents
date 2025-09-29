---
description: Arduino互換ボード用のFirmata
title: Arduino互換ボード用のFirmata
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Firmata
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Firmataチュートリアル: Arduino互換ボードでFirmataを使用する方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-py-js.png"/></div>

## Firmataとは

**[Firmata](http://firmata.org/wiki/Main_Page)** は、組み込みシステムとホストコンピュータを接続する中間プロトコルであり、プロトコルチャネルとしてデフォルトでシリアルポートを使用します。ArduinoプラットフォームはFirmataの標準的なリファレンス実装です。Arduino IDEにはFirmataのサポートが組み込まれています。

これは、オンボードのArduino Coreを備えた[Odyssey-X86](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)と完全に連携します。つまり、Firmataプロトコルを使用して、さまざまなプログラミング言語でArduino Coreを簡単に制御できます。このチュートリアルでは、Windows OSをベースにしています。

*参考: [Firmata Protocols](https://github.com/firmata/protocol)*

## Arduino IDEを使用してFirmataファームウェアを焼く

Arduino IDEバージョン1.6.X以降にはFirmataファームウェアが含まれているため、Arduino IDEを使用してArduino CoreにFirmataファームウェアを焼くことができます。

:::note
[Arduino IDE](https://www.arduino.cc/en/Main/Software)はこちらからダウンロードできます。
:::

- Arduino IDEを開き、`Examples` -> `Firmata` -> `StandardFirmata`に移動します:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-1.jpg"/></div>

- `StandardFirmata.ino`が表示されます。正しいボードとポートを選択し、**Upload**をクリックします:

:::note
Odyssey用のボードライブラリをインストールしていない場合は、[**こちら**](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105/#using-the-arduino-core-atsamd21g18-in-windows)を参照してインストールしてください。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-2.jpg"/></div>

- アップロードが完了すると、次のように表示されます:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-3.jpg"/></div>

これで、Arduino FirmataファームウェアがOdyssey-X86のArduino Coreにフラッシュされました！

## Firmataファームウェアのテスト

Firmataファームウェアをテストするには、**Microsoft Store**に移動し、**Windows Remote Arduino Experience**を検索してダウンロードします。ダウンロード後、USB接続、ボード、ボーレートを選択してArduino Coreに接続できます:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Remote-Arduino.jpg"/></div>

接続後、対応するピンにLEDを接続してファームウェアをテストできます:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-test.jpg"/></div>

## Pythonを使用してFirmataを解釈する

Firmataプロトコルを実装するライブラリを使用すると、コンピュータ、スマートフォン、タブレットなどからマイクロコントローラプラットフォーム上で動作するFirmataファームウェアと通信できます。

**[pyFirmata](https://github.com/tino/pyFirmata)** はFirmataプロトコルのPythonインターフェースであり、Python3で動作します。

### pyFirmataのインストール

:::note
Python3が必要です。
:::

pipを使用してインストールします:

```sh
pip install pyfirmata
```

### D13に接続されたLEDを点滅させる

**注意:** `COM4`をArduinoのUSB COMに変更してください。

シンプルなLEDモジュールの場合、[Grove - LEDモジュール](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)を使用してテストできます！

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # ポートを変更してください
print("D13の点滅を開始します")
while True:
    board.digital[13].write(1)
    sleep(1)
    board.digital[13].write(0)
    sleep(1)
```

### A0でアナログ信号を読み取る

```py
#!/usr/bin/env python3
from pyfirmata import Arduino,util
import time
import sys

board = Arduino('COM4') # ポートを変更してください
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()
print ("読み取り開始")
for i in range(10):
    time.sleep(1)
    print(board.analog[0].read())

board.analog[0].disable_reporting()
```

### D6でPWM出力を行う

D6に接続されたLEDにPWM信号を出力します。

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # ポートを変更してください
lenPin = board.get_pin('d:6:p') # PWMピン
print("PWM信号の出力を開始します")
while True:
    for i in range(0, 101, 4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
    for i in range(100, -1, -4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
```

これで、Pythonスクリプト（または他の言語）を使用してOdyssey-X86のArduino Coreを制御できるようになります。これは、リアルタイム要件がそれほど重要でない状況（例: Pythonを使用してWebサーバーを構築し、Arduinoでリレーを制御する場合）で非常に便利です。

**注意:** 詳細なAPIリファレンスについては、[pyFirmata API](https://pypi.org/project/pyFirmata/)をご覧ください。

:::note
Firmataのより高度なPython使用法については、[pymata4](https://github.com/MrYsLab/pymata4)を検討してください。
:::

## JavaScriptを使用してFirmataを解釈する

Firmataプロトコルを介してArduino Coreを制御する際にPythonを使用するのと同様に、JavaScriptなどの他のプログラミング言語を選択することもできます！これは公式のFirmataチームによって実装されており、詳細は[**firmata.js**](https://github.com/firmata/firmata.js)で確認できます。

### firmata.jsの使い方

:::note
        **`node.js`** がPCにインストールされていることを確認してください。
:::

- 新しいプロジェクトを作成します：

```sh
mkdir js && cd js
npm init -y
npm install --save firmata # firmata.jsをインストール
```

### D13に接続されたLEDを点滅させる

```java
const Board = require("firmata");
const pin = 13;

// 初期化
Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const board = new Board(port.path);
  // 接続待機
  board.on("ready", () => {
    console.log("準備完了！");
    let state = 1;
    // ピンを出力モードに設定
    board.pinMode(pin, board.MODES.OUTPUT);
    setInterval(() => {
      console.log("状態変更");
      board.digitalWrite(pin, (state ^= 1));
    }, 500);
  });
});
```

### A0でアナログ信号を読み取る

アナログ信号をテストするには、[Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)を使用することができます！

```java
const Board = require('firmata');
const Pin = 0;

// 初期化
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    var board = new Board(port.path);
    // 接続待機
    board.on("ready", function() {
        console.log("準備完了！");
        // アナログ値を読み取る
        board.analogRead(Pin, function(value) {
            console.log("アナログ値: ", value);
        });
    });
});
```

### D6でPWM出力を行う

```java
var Board = require('firmata');
const LED = 6;

var brightness = 0;
var fadeAmount = 5;

// 初期化
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    const board = new Board(port.path);
    // 接続待機
    board.on("ready", function() {
        console.log("準備完了！");
        // ピンをPWMモードに設定
        board.pinMode(LED, board.MODES.PWM);

        // LEDのPWM信号
        function fadeLed() {
            brightness += fadeAmount;
            if (brightness == 0 || brightness == 255) {
                fadeAmount = -fadeAmount;
            }
            board.analogWrite(LED, brightness);
            setTimeout(fadeLed, 30);
        }
        console.log("呼吸するような点滅");
        fadeLed();
    });
});
```

### I2C信号

firmata.jsはI2CおよびUART通信もサポートしており、以下は[Grove - 3-Axis Digital Accelerometer(ADXL345)(±16g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)を使用した例です：

- **ハードウェア接続:**

<div align="center"><img width ="{550}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-ADXL345.png"/></div>

```java
const Board = require("firmata");

Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const register = {
    POWER: 0x2D,
    RANGE: 0x31,
    READ: 0xB2,
  };

  const board = new Board(port.path);

  board.on("ready", function() {
    console.log("準備完了");

    const adxl345 = 0x53;
    const sensitivity = 0.00390625;

    // I2Cを有効化
    this.i2cConfig();

    // 電源を切り替えてリセット
    this.i2cWrite(adxl345, register.POWER, 0);
    this.i2cWrite(adxl345, register.POWER, 8);

    // 範囲を設定（これは2G範囲）
    this.i2cWrite(adxl345, register.RANGE, 8);

    // レジスタを読み取り位置に設定し、6バイトを要求
    this.i2cRead(adxl345, register.READ, 6, data => {
      const x = (data[1] << 8) | data[0];
      const y = (data[3] << 8) | data[2];
      const z = (data[5] << 8) | data[4];

      // 16ビットをラップしてクランプ
      const X = (x >> 15 ? ((x ^ 0xFFFF) + 1) * -1 : x) * sensitivity;
      const Y = (y >> 15 ? ((y ^ 0xFFFF) + 1) * -1 : y) * sensitivity;
      const Z = (z >> 15 ? ((z ^ 0xFFFF) + 1) * -1 : z) * sensitivity;

      console.log("X: ", X);
      console.log("Y: ", Y);
      console.log("Z: ", Z);
    });
  });
});
```

**注意:** さらに詳しいAPIリファレンスについては、[firmata.js](https://github.com/firmata/firmata.js/tree/master/packages/firmata.js)を訪問し、例を確認してください。