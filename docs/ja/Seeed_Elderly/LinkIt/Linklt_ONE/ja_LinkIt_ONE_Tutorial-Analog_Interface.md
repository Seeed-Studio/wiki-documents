---
description: LinkIt ONE チュートリアル - アナログインターフェース
title: LinkIt ONE チュートリアル - アナログインターフェース
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Analog_Interface
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

前のセクションでは、デジタルインターフェースを使用して回路の入力と出力を制御する方法を学びました。このセクションでは、ポテンショメータ（可変抵抗器）と呼ばれるアナログデバイスを使用して出力を変化させる方法を学びます。ポテンショメータは、0〜5Vの範囲で電圧を変化させるために使用されます。MPUは0〜1023の範囲で電圧値を読み取ります。これを使用してLEDの明るさを制御することができます（PWMシミュレーション出力インターフェース）。ポテンショメータを時計回りに回すと、LEDが徐々に明るくなります。反時計回りに回すと、明るさが減少します。

**必要なもの**

*   LinkIt One x 1

*   ブレークボード x 1

*   抵抗 330Ω, 10kΩ, 1kΩ x 1

*   5mm LED x 1

*   スライドポテンショメータ 10kΩ x 1

*   トランジスタ（2N3904） x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_2.jpg)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルをArduino IDEの**Examples**フォルダに解凍してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L6_Analog_Ctrl_LED_
```
const int led = 3;
const int pot = A0;

void setup()
{
    // 初期化は不要
}

void loop()
{
    int val = analogRead(pot);              // ポテンショメータから値を取得
    val = map(val, 0, 1023, 0, 255);        // 値を0〜255に変換
    analogWrite(led, val);                  // LEDのPWMを設定
    delay(10);
}
```
**トラブルシューティング**

*   ピンインターフェースの問題？

    *   入力をアナログピンではなくデジタルピンに接続している場合、回路が正しく動作しない可能性があります。

*   動作しない？

    *   ポテンショメータには3つのピンがあります。中央のピンをアナログインターフェースに接続しているか確認してください。そうでない場合、回路が正しく動作しない可能性があります。

**改善方法**

ポテンショメータを使用してLEDのちらつき頻度を制御するには、以下のコードをアップロードしてください。

デモコードを開くには：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L6_Flashing_LED_

**その他のアイデア**

ポテンショメータの戻り値を使用して他に何ができるでしょうか？

**参考**
<!-- 
*   [基本](/ja/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/ja/LinkIt_ONE_Tutorial-Hello_World)

*   [プッシュボタン](/ja/LinkIt_ONE_Tutorial-Push_Button)

*   [マルキュー](/ja/LinkIt_ONE_Tutorial-Marquee)

*   [カラフルな世界](/ja/LinkIt_ONE_Tutorial-Colorful_World)

*   [アナログインターフェース](/ja/LinkIt_ONE_Tutorial-Analog_Interface)

*   [ミニサーボ](/ja/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光センサー](/ja/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMSでLEDを制御](/ja/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [ウェブページで温度を取得](/ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

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