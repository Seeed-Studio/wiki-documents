---
title: I2C
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-IO-I2C/
slug: /ja/Wio-Terminal-IO-I2C
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal の Grove I2C ポートの使用方法

このリポジトリでは、Wio Terminal の Grove I2C ポートの使用方法を示します。Grove エコシステムを使用して、このプラグアンドプレイ機能を簡単に利用できます！

## ポート設定

Wio Terminal の Grove I2C ポートを使用するには、I2C を使用する Grove センサーを Wio Terminal の物理的な I2C ポートに接続するだけです。

**注意:** Arduino IDE にセンサーライブラリを含めることを忘れないでください。詳細については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

## サンプルコード

この例では、Grove LCD を使用してデモを行います。これは RGB LCD ライブラリの `HelloWorld` サンプルです。

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup()
{
    // LCD の列数と行数を設定します:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // LCD にメッセージを表示します。
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // カーソルを列 0、行 1 に設定します
    // (注意: 行 1 は 2 番目の行で、カウントは 0 から始まります):
    lcd.setCursor(0, 1);
    // リセット後の秒数を表示します:
    lcd.print(millis()/1000);

    delay(100);
}
```

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>