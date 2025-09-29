---
description: プロジェクト 2 - デジタル入力 v1.0b
title: プロジェクト 2 - デジタル入力 v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Two-Digital_Input_v1.0b
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト 2 - デジタル入力 v1.0b
category: チュートリアル
oldwikiname:  プロジェクト 2 - デジタル入力 v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
--- -->

このプロジェクトの目的は、ボタングローブとチルトスイッチグローブを使用して、2つの形式のデジタル入力をデモンストレーションすることです。ボタンを押すとLEDが点灯し、チルトスイッチを作動させるとLEDが点灯します。

**配線方法:**

1. LEDモジュールをD1/D2デジタルI/Oジャックに接続します（プロジェクト1と同様）。

2. ArduinoのピンD1はGroveのSIGコネクタを介してLEDに電力を供給し、ArduinoのピンD2はLED GroveのNCコネクタに接続します。

3. チルトスイッチグローブをD5/D6デジタルI/Oジャックに接続します。

4. チルトスイッチグローブのSIGコネクタは、ArduinoのD5デジタル入力に高または低の信号を送信します。

5. ボタンモジュールをD7/D8入力ジャック（2列目）に接続します。

6. ボタングローブはSIGコネクタを使用して、ArduinoのD7デジタル入力に信号を送信します。
![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg)

_**次のArduinoスケッチをアップロードしてください:**_

```cpp
// プロジェクト 2 - デジタル入力
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

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