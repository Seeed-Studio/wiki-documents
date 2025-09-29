---
description: Arduinoボード向けSPIユーザーガイド
title: Arduinoボード向けSPIユーザーガイド
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-SPI
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ArduinoソフトウェアSPIユーザーガイド

I2Cやシリアル通信と同様に、[**SPI**](https://www.arduino.cc/en/reference/SPI)もソフトウェアを使用して仮想化することで、物理的な制約を克服することができます。ここでは、ArduinoでソフトウェアSPIを使用する例を紹介します。

**SPIとは**

シリアル・ペリフェラル・インターフェース（SPI）は、マイクロコントローラーが短距離で1つ以上の周辺機器と迅速に通信するために使用する同期シリアルデータプロトコルです。また、2つのマイクロコントローラー間の通信にも使用できます。

## ソフトウェアSPIの例

1. [SoftSPI](https://github.com/MajenkoLibraries/SoftSPI)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、SoftSPIライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`SoftSPI`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

```cpp
#include <SPI.h>
#include <SoftSPI.h>

// 新しいSPIポートを作成:
// ピン2 = MOSI,
// ピン3 = MISO,
// ピン4 = SCK
SoftSPI mySPI(2, 3, 4);

void setup() {
  mySPI.begin();
  Serial.begin(9600);
  }

void loop() {
  static uint8_t v = 0;

  Serial.print("送信する値: ");
  Serial.print(v, HEX);
  uint8_t in = mySPI.transfer(v);
  Serial.print(" 受信した値: ");
  Serial.print(in, HEX);
  Serial.println(v == in ? " 合格" : " 不合格");
  delay(1000);
  v++;
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>