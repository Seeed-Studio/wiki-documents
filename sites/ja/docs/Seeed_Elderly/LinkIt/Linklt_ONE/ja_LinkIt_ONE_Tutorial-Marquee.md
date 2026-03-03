---
description: LinkIt ONE チュートリアル - マーキー
title: LinkIt ONE チュートリアル - マーキー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Marquee
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

前のセクションでは1つのLEDのみを使用しましたが、今回は3つのLEDを使用して華やかな光の効果を表示します。図4.2に示すように接続を行い、以下のコードをアップロードして、どのような変化が起こるか観察してください。

**必要なもの**

*   LinkIt One x 1
*   ブレイクボード x 1

*   抵抗 330Ω, 1kΩ x 3

*   5mm LED x 3

*   トランジスタ (2N3904) x 3

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ダウンロードしたファイルをArduino IDEの**Examples**フォルダに解凍してください。

デモコードにアクセスするには、以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L4_Control_LEDs_
```
const int pinLed1    = 2;                       // LED1のピン
const int pinLed2    = 3;                       // LED2のピン
const int pinLed3    = 4;                       // LED3のピン

void setup()
{
    pinMode(pinLed1, OUTPUT);                   // すべてのピンをOUTPUTに設定
    pinMode(pinLed2, OUTPUT);
    pinMode(pinLed3, OUTPUT);
}


void loop()
{
    digitalWrite(pinLed4, LOW);                 // LED4をオフ
    digitalWrite(pinLed1, HIGH);                // LED1をオン
    delay(100);

    digitalWrite(pinLed1, LOW);                 // LED1をオフ
    digitalWrite(pinLed2, HIGH);                // LED2をオン

    delay(100);

    digitalWrite(pinLed2, LOW);                 // LED2をオフ
    digitalWrite(pinLed3, HIGH);                // LED3をオン

    delay(100);

    digitalWrite(pinLed3, LOW);                 // LED3をオフ
    digitalWrite(pinLed4, HIGH);                // LED4をオン

    delay(100);
}
```

**トラブルシューティング**

*   LEDの極性を確認してください。

*   LEDが正しいポートピンに接続されていることを確認してください。

**改善方法**

同じブレッドボード接続で以下のコードをアップロードすると、異なる点滅効果を得ることができます。

デモコードにアクセスするには、以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L4_Control_LEDs_Speed_

**さらなるアイデア**

既存のコードを修正して、LEDの点滅頻度を増加させてみてください。

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

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>