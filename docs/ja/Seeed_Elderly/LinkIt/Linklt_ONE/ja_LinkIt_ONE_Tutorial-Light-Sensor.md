---
description: LinkIt ONE チュートリアル - 光センサー
title: LinkIt ONE チュートリアル - 光センサー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Light-Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

新しいセンサーについて学び、それを使ってプロジェクトをさらに面白くする時が来ました。フォトレジスタ（光依存抵抗またはフォトセル）は、周囲の光の強度に応じて抵抗値が変化する光センサーです。ブザーは、電源に接続すると標準的な音を生成する電気音響デバイスです。これらのコンポーネントを使って実験を行いましょう。

**必要なもの**

*   LinkIt One x 1

*   ブレイクボード x 1

*   抵抗 10kΩ, 1kΩ, 330Ω x 1

*   ブザー x 1

*   フォトレジスタ x 1

*   トランジスタ（2N3904）x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_2.jpg)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルを解凍して、Arduino IDEの**Examples**フォルダに保存してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L8_Light_Control_Buzzer_
```
const int pinBuz   = 3;                        // LEDのピン定義
const int pinLight = A0;                        // 光センサーのピン定義

void setup()
{
    pinMode(pinBuz, OUTPUT);
    pinMode(pinLight, INPUT);
}

void loop()
{
    int value = analogRead(pinLight);
    value = map(value, 0, 1023, 255, 0);
    analogWrite(pinBuz, value);
    delay(100);
}
```
**トラブルシューティング**

*   光感知が動作しない？

    *   フォトレジスタのリード線の間隔が標準ではありません。リード線が短絡しやすいので注意深く確認してください。

*   音が出ない？

    *   ブザーのリード線が非常に短いです。ブレッドボードに正しく挿入されているか注意深く確認してください。

**改善する方法**

フォトレジスタを使用してブザーの音色をさらに制御してみましょう。フォトレジスタに当たる光の強度を変えることで、異なる音色を生成することができます。以下のコードをアップロードして違いを観察してください。

デモコードにアクセスするには以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L8_Buzzer_Music_

**さらにアイデアを広げる**

フォトセルを使用して、より面白いアプリケーションを作ることができます。光感知型のクリスマスギフトを作ってみてください。

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