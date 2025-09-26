---
description: LinkIt ONE チュートリアル - プッシュボタン
title: LinkIt ONE チュートリアル - プッシュボタン
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Push_Button
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

前章では、ソフトウェアとハードウェアがどのように動作するかについての概要を得ました。この章では、LEDの制御のためにソフトウェアとハードウェアを統合する方法を学びます。図3.2に示すようにブレッドボード接続を行い、コードをアップロードしてください。この回路は、左側のプッシュボタンを押すとLEDが点灯し、右側のプッシュボタンを押すとLEDが消灯する2方向スイッチとして動作します。

**必要なもの**

*   LinkIt One x 1

*   ブレッドボード x 1

*   抵抗 330Ω, 1kΩ x 1

*   抵抗 10kΩ x 2

*   5mm LED x 1

*   トランジスタ (2N3904) x 1

*   プッシュボタンスイッチ x 2

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg)

**接続図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg)

**コード**

以下のボタンをクリックしてキット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルをArduino IDEの**Examples**フォルダに解凍してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L3_Control_LED_Button_
```
const int pinLED = 3;                      // LEDはD13に接続

const int btnOn  = 5;                       // ボタンON
const int btnOff = 6;                       // ボタンOFF

void setup()
{
    pinMode(pinLED, OUTPUT);                // D13をOUTPUTに設定
    pinMode(btnOff, INPUT);                 // D2をINPUTに設定
    pinMode(btnOn, INPUT);
}

void loop()
{
    if(0 == digitalRead(btnOn))            // ボタンONが押された場合
    {
        digitalWrite(pinLED, HIGH);
    }

    if(0 == digitalRead(btnOff))
    {
        digitalWrite(pinLED, LOW);
    }
}
```

**改善する方法**

同じハードウェア接続を維持し、以下のコードをアップロードしてください。左側のプッシュボタンが押されると明るさが増し、右側のプッシュボタンが押されると明るさが減少します。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L3_Brightness_

**さらにアイデア**

LEDの点滅頻度が変化するようにコードをどのように修正しますか？

**参考**

<!-- *   [基本](/ja/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/ja/LinkIt_ONE_Tutorial-Hello_World)

*   [プッシュボタン](/ja/LinkIt_ONE_Tutorial-Push_Button)

*   [マーキー](/ja/LinkIt_ONE_Tutorial-Marquee)

*   [カラフルな世界](/ja/LinkIt_ONE_Tutorial-Colorful_World)

*   [アナログインターフェース](/ja/LinkIt_ONE_Tutorial-Analog_Interface)

*   [ミニサーボ](/ja/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光センサー](/ja/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMSでLEDを制御](/ja/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Webページで温度を取得](/ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

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