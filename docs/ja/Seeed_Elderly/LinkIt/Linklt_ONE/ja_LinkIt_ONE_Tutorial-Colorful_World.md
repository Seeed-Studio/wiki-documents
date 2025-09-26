---
description: LinkIt ONE チュートリアル - カラフルな世界
title: LinkIt ONE チュートリアル - カラフルな世界
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Colorful_World
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**私たちが行うこと**

LEDの制御方法を学んだので、次は色の組み合わせの基本的なアイデアを組み合わせてみましょう。R（赤）、G（緑）、B（青）は基本色であり、これらの色を異なる割合で混ぜることでさまざまな色を作り出すことができます。RGB LEDは4つのピンを持ち、長いリードが正極で、他の3つのリードはRGB色を制御するためのものです。図5.2に示すように接続を行い、コードをアップロードしてください。

**必要なもの**

*   LinkIt One x 1

*   ブレイクボード x 1

*   抵抗 330Ω、10kΩ、1kΩ x 3

*   8mm RGB LED x 1
*   トランジスタ（2N3904） x 3
*   ボタン x 3

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_2.jpg)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルを解凍して、Arduino IDEの**Examples**フォルダに保存してください。

デモコードにアクセスするには、以下を開いてください：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L5_Color_Pannel_
```
const int ledR = 2;
const int ledB = 3;
const int ledG = 4;

const int buttonR = 5;
const int buttonG = 6;
const int buttonB = 7;

void setup()
{
    pinMode(ledR, OUTPUT);                          // すべてのLEDピンをOUTPUTに設定
    pinMode(ledG, OUTPUT);
    pinMode(ledB, OUTPUT);

    pinMode(buttonR, INPUT);                        // すべてのボタンピンをINPUTに設定
    pinMode(buttonG, INPUT);
    pinMode(buttonB, INPUT);
}

void loop()
{
    int stateR = 1-digitalRead(buttonR);            // ボタンの状態を取得
    int stateG = 1-digitalRead(buttonG);
    int stateB = 1-digitalRead(buttonB);

    digitalWrite(ledR, stateR);                     // LEDを設定
    digitalWrite(ledG, stateG);
    digitalWrite(ledB, stateB);

    delay(10);
}
```
**トラブルシューティング**

*   色が正しく表示されない

    *   LEDには4つのピンがあるため、接続にエラーが発生する可能性があります。すべての制御ピンが正しいリードに接続されていることを確認してください。

*   赤みがかった外観？

    *   RGB LEDでは、赤色は他の2色よりも同じ電圧で高い強度を持っています。全体の色調を調和させるために、赤色LEDの強度を大きな抵抗値で減らしてみてください。

**改善方法**

もっと多くの色を得たいですか？RGB値を連続的に上昇させる2つのボタンを追加することで、さらに多くの色を見つけることができます。2つのアナログ出力インターフェースをリンクする回路を構築してみてください（RGB値を高くまたは低く調整）。コードはすでに定義されています。（PWMアナログ出力を使用すると、アナログ0-1023の出力値を取得できます。）

デモコードを開くには：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L5_Colourful_RGB_

**さらなるアイデア**

RGB値を下げるコードをどのように拡張しますか？

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

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>