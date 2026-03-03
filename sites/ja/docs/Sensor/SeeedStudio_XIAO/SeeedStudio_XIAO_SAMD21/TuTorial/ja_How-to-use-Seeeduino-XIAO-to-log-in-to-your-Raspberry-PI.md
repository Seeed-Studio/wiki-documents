---
description: Seeed Studio XIAO SAMD21 をRaspberry PIに接続する
title: Seeed Studio XIAO SAMD21 をRaspberry PIに接続する
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 を使用してRaspberry PIにログインする方法

Raspberry Piを使用する際に、以下のような状況は非常に困ることがあります：周りに余分なHDMIディスプレイがない、マウスとキーボードの接続が困難、USB to Serialアダプターでraspberry piにログインしようとするが高価すぎる。今、Seeed Studio XIAO SAMD21 があれば、すべての問題が簡単に解決されます。

## ハードウェア

## 必要な材料

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [ジャンパーケーブル x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-Cケーブル x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### ハードウェア接続

- **ステップ 1.** Raspberry PIの **TX** をSeeed Studio XIAO SAMD21の **RX** に接続

- **ステップ 2.** Raspberry PIの **RX** をSeeed Studio XIAO SAMD21の **TX** に接続

- **ステップ 3.** Raspberry PIの **GND** をSeeed Studio XIAO SAMD21の **GND** に接続

- **ステップ 4.** Seeed Studio XIAO SAMD21 をType-CケーブルでPCに接続

- **ステップ 5.** raspberry piを電源に接続

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## ソフトウェア

Raspberry Pi公式システムがインストールされているTFカード上のconfig.txtファイルを見つけて、最後に以下の一行を追加してください：

```c
enable_uart=1
```

### Seeed Studio XIAO SAMD21 の設定

- **ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/Main/Software) を開き、[こちらのリンク](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software) に従ってSeeed Studio XIAO SAMD21 を追加します。

- **ステップ 2.** 以下のコードをArduino IDEにコピーし、Seeed Studio XIAO SAMD21 にコードをアップロードします。

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // put your setup code here, to run once:
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // put your main code here, to run repeatedly:
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### Puttyの設定

- **ステップ 1.** [こちらのリンク](https://www.putty.org/) に従ってPuttyをダウンロードしてインストールします

- **ステップ 2.** シリアルポートのボーレートを115200に設定します（これはデフォルトのシリアルポートボーレートです。Raspberry Piのシリアルポートボーレートと一致していれば正しく通信できます。）

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **ステップ 3.** ターミナルウィンドウに起動情報が表示されます。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

これでSeeed Studio XIAO SAMD21 を通じてRaspberry Piにアクセスできるようになりました！

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>