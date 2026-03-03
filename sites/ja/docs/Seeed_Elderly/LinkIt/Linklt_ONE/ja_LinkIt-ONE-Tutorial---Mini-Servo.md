---
description: LinkIt ONE チュートリアル - ミニサーボ
title: LinkIt ONE チュートリアル - ミニサーボ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt-ONE-Tutorial---Mini-Servo
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

サーボモーター（サーボ）は、小型ロボットやその他の機械で角度位置を制御するために一般的に使用されます。小型のギアボックスで包まれており、タイミング制御パルスによって位置が決定されます。このセクションでは、ポテンショメーターを使用してミニサーボの角度位置を制御します。

**必要なもの**

*   LinkIt One x 1

*   ブレークボード x 1
*   スライドポテンショメーター 10kΩ x 1

*   サーボ x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg)

**コード**

以下のボタンをクリックしてキット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルを Arduino IDE の **Examples** フォルダに解凍してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L7_Servo_
```
#include <Servo.h>

Servo myservo;              // サーボオブジェクトを作成してサーボを制御
int potpin = A0;             // ポテンショメーターを接続するためのアナログピン
int val;                    // アナログピンから値を読み取るための変数

void setup()
{
    myservo.attach(9);                  // ピン9にサーボオブジェクトを接続
}

void loop() {
    val = analogRead(potpin);          // ポテンショメーターの値を読み取る（0から1023の値）
    val = map(val, 0, 1023, 0, 179);   // サーボで使用するために値をスケール変換（0から180の値）
    myservo.write(val);                // スケール変換された値に基づいてサーボ位置を設定
    delay(15);                         // サーボが位置に到達するまで待機
}
```

**トラブルシューティング**

*   サーボには3つのピンがあり、それぞれの機能に応じて色分けされています。黄色はアナログポート、赤は正極、暗褐色はグランドです。機能に応じて接続を行ってください。

*   ボードに5V電源が接続されていることを確認してください。

**改善方法**

ミニステアリングが動作した場合、ポテンショメーターを使用して回転速度を調整することができます。以下のコードをアップロードして異なる機能を実現してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L7_Servo_Speed_

**さらにアイデア**

2つのサーボモーターを同時に制御してロボットを作るにはどうすればよいでしょうか？

**参考**

<!-- *   [The Basics](/ja/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/ja/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/ja/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/ja/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/ja/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/ja/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/ja/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/ja/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/ja/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

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