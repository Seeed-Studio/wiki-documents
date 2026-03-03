---
description: プロジェクト2 – デジタル入力
title: プロジェクト2 – デジタル入力
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Two-Digital_Input
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト2 – デジタル入力
category: チュートリアル
oldwikiname:  プロジェクト2 – デジタル入力
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-The_Basics
--- -->

このプロジェクトの目的は、ボタンとチルトスイッチを使用して、2つの形式のデジタル入力を示すことです。いずれかのボタンを押すと、それぞれのLEDが点灯し、チルトスイッチを作動させると両方のLEDが点灯します。

1. プロジェクト1と同様に、LEDをD1/D2デジタルI/Oジャックに接続します。

2. ArduinoのピンD1はGroveのD1コネクタ上の赤色LEDに電力を供給し、ArduinoのピンD2はGroveのD2コネクタ上の緑色LEDに電力を供給します。

3. チルトスイッチをD5/D6デジタルI/Oジャックに接続します。

4. チルトスイッチGroveのD1コネクタは、ArduinoのD5デジタル入力に高または低の信号を送ります。

5. ツインボタンGroveをD7/D8入力ジャック（2列目）に接続します。

6. ツインボタンGroveの赤いボタンはD1コネクタを使用してArduinoのD7デジタル入力に信号を送り、緑のボタンはD2コネクタを使用してArduinoのD8デジタル入力に信号を送ります。

7.

![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input/img/Conn-two.jpg)

_**次のArduinoスケッチをアップロードしてください:**_

```cpp
// プロジェクト2 - デジタル入力
//

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
    pinMode(8, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        digitalWrite(2, HIGH);
        delay(100);
        digitalWrite(1, LOW);
        digitalWrite(2, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }
    if (digitalRead(8)==HIGH)
    {
        digitalWrite(2, HIGH);
        delay(200);
        digitalWrite(2, LOW);
    }
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>