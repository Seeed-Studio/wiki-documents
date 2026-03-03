---
description: LinkIt ONE チュートリアル - Hello World
title: LinkIt ONE チュートリアル - Hello World
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Hello_World
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

前のセクションでは、電子部品を使ってLEDを制御する方法について理解しましたが、今回はソフトウェアを使ってLEDを自動制御するトリックを試してみましょう。このセクションで提供されているコードをアップロードするだけです。このコードは、最初にLEDを点灯させ、3秒後に消灯するように設計されています。それでは、LinkItボードを使い始めましょう。

**必要なもの**

*   LinkIt One x 1

*   ブレークボード x 1

*   抵抗 330Ω, 1kΩ x 1

*   5mm LED x 1

*   トランジスタ（2N3904）x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ダウンロードしたファイルをArduino IDEの**Examples**フォルダに解凍してください。

デモコードにアクセスするには、以下を開きます：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L2_Control_LED_
```
const int pinLED = 3;                      // LEDはD13に接続

void setup()
{
    pinMode(pinLED, OUTPUT);                // D13をOUTPUTに設定
}

void loop()
{
    digitalWrite(pinLED, HIGH);             // LEDを点灯
    delay(3000);
    digitalWrite(pinLED, LOW);              // LEDを消灯
    delay(100);
}
```

**トラブルシューティング**

*   コードのアップロードに問題がありますか？

    *   この場合、転送ポートの選択が間違っている可能性があります。"Tools&gt; Serial port&gt;"で修正してください。

*   プロセスを停止できませんか？

    *   コードが無限ループで実行されている場合に発生します。このプロセスを終了するには、ボードから電源を切断してください。

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg)

**改善する方法**

前のセクションでは、コンデンサを使用してLEDの明るさを徐々に増加させ、徐々に減少させました。今回はコンデンサを使用せず、コードを変更するだけで同じことを行います。

デモコードを開くには：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L2_Breath_LED_

**さらなるアイデア**

コードを変更してLEDの周波数をどのように変えることができますか？

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