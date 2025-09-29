---
title: Grove - 可変カラーLED
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Variable_Color_LED/
slug: /ja/Grove-Variable_Color_LED
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED_01.jpg)

このGroveモジュールは、1つの8mm RGB LEDで構成されています。5V DCで動作します。SIGピンがロジックHIGHのとき、RGB LEDが点灯します。Seeeduinoのデジタル出力での使用に最適で、パルス幅変調による制御も可能です。また、3つの可変抵抗を使用してRGB LEDの色を変更できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)

特徴
--------

- Grove互換
- 色の調整が可能

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

- おもちゃ
- 装飾

:::caution
    R、G、Bの可変抵抗を調整する際は、過度に回しすぎないように注意してください。
:::

仕様
-------------

| 項目              | 典型値 | 単位 |
|-------------------|---------|------|
| 動作電圧         | 5.0     | VDC  |
| 動作電流         | 20      | mA   |
| 可変抵抗         | &lt;1   | KΩ   |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

このモジュールの3つの抵抗（RED、GREEN、BLUE）は、それぞれR、G、Bチャンネルを制御します。3つの可変抵抗を調整することで、さまざまな色を出すことができます。ただし、可変抵抗を回す際は慎重に行ってください。

以下のスケッチは、明るさを制御する簡単なアプリケーションを示しています。下の図が示すように、可変カラーLEDはGrove - Base Shieldのデジタルポート9に接続されています。ハードウェアの接続は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Grove-Variable_Color_LED.jpg)

- 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

デモコード例：

```
int ledPin = 9;    // LEDがデジタルピン9に接続されています

void setup()  {
    // setupでは何も行いません
}

void loop()  {
    // 最小値から最大値まで5ポイントずつ増加させてフェードイン
    for(int fadeValue = 0; fadeValue <= 255; fadeValue +=5) {
        // 値を設定（範囲は0から255）：
        analogWrite(ledPin, fadeValue);
        // 30ミリ秒待機して減光効果を確認
        delay(30);
    }

    // 最大値から最小値まで5ポイントずつ減少させてフェードアウト
    for(int fadeValue = 255; fadeValue >= 0; fadeValue -=5) {
        // 値を設定（範囲は0から255）：
        analogWrite(ledPin, fadeValue);
        // 30ミリ秒待機して減光効果を確認
        delay(30);
    }
}
```

- コードをアップロードします。3つの可変抵抗を調整してみてください。きっと気に入るはずです。ぜひお試しください！

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Variable Color LED eagle_file](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Variable_Color_LED から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>