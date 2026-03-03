---
description: プロジェクト3 – アナログ入力 v1.0b
title: プロジェクト3 – アナログ入力 v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Three-Analog_Input_v1b
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト3 – アナログ入力 v1.0b
category: チュートリアル
oldwikiname:  プロジェクト3 – アナログ入力 v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
--- -->

このスケッチの目的は、ポテンショメータ Grove を使用してアナログ入力の一形態を示すことです。これを使用して、プロジェクト1で作成した点滅するLEDの遅延時間を設定します。

LEDモジュールをプロジェクト1および2と同様に、D1/D2デジタルI/Oジャックに接続します。  
ArduinoのピンD1はLED GroveのSIGコネクタに電力を供給し、ArduinoのピンD2はLED GroveのNCコネクタに接続します。

ポテンショメータモジュールをアナログA0/A1入力ジャックに接続します。

ポテンショメータモジュールはそのSIG出力でアナログ電圧を生成し、これがA0/A1入力ジャックのArduino A0アナログ入力に接続されます。

![](https://files.seeedstudio.com/wiki/Project_Three-Analog_Input_v1b/img/Analog_Input_v1.0b.jpg)

_**次に、以下のArduinoスケッチをアップロードしてください:**_

```cpp
// プロジェクト3 - アナログ入力
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

遅延値の最大値は1023です。これはanalogRead()関数によって返される値の上限です。数学関数を使用して遅延範囲を拡大または縮小することもできます。

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