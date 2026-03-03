---
description: プロジェクト5 – リレー制御
title: プロジェクト5 – リレー制御
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Five-Relay_Control
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト5 – リレー制御
category: チュートリアル
oldwikiname:  プロジェクト5 – リレー制御
prodimagename:
surveyurl: https://www.research.net/r/Project_Five-Relay_Control
--- -->

このプロジェクトでは、リレーを使用する方法を説明します。ボタンを使用して、ボタン1でリレーをオンにし、ボタン2でオフにします。前述のように、リレーは250V、10アンペアのピーク電圧に対応できます。

低電圧やマイクロエレクトロニクスに精通している場合でも、主電源電圧を扱う資格がない場合は、作業を完了するために有資格の電気技師に相談してください。

ツインボタンをD1/D2入力ジャックに接続します。

ツインボタンGroveの赤いボタンはD1コネクタを使用してArduinoのD1デジタル入力に信号を送信し、緑のボタンはD2コネクタを使用してArduinoのD2デジタル入力に信号を送信します。

リレーをD6/D7入力ジャックに接続します。

ArduinoのD6ピンはD1コネクタ上のリレーに信号を送信します。リレーGroveの赤いライトはリレーがオンかオフかを示し、リレーが切り替わるときにクリック音がします。

![](https://files.seeedstudio.com/wiki/Project_Five-Relay_Control/img/Conn-five.jpg)

_**次のArduinoスケッチをアップロードしてください：**_

```cpp
// プロジェクト5 - リレー制御
//

void setup()
{
  pinMode(1, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  if (digitalRead(1)==HIGH)
  {
    digitalWrite(6, HIGH);
    delay(100);
  }
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(6, LOW);
  }
}
```

<font color="magenta">
XBeeキャリアを使用する場合、リレーを確実に引き込むために、XBeeキャリア上のMOSFETが十分な電力を供給できるように、出力16を低に設定する必要があることに注意してください。
</font>

リレーを高または低に設定した後のdelay関数の理由は、スケッチを一時停止させるためです。これにより、0.1秒間ボタンを無視します。これは一般的に「ソフトウェアデバウンス」として知られています。この例では必須ではないように見えるかもしれませんが、このようにすることは良い習慣です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>