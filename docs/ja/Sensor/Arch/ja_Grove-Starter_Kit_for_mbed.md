---
description: Grove - Starter Kit for mbed
title: Grove - Starter Kit for mbed
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Starter_Kit_for_mbed
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Grove%20Starter%20Kit%20for%20mbed%201.jpg)

**mbedとGroveについて**

mbedは、マイクロコントローラーを使用した迅速なプロトタイピングのためのオープンソース開発プラットフォームです。無料のソフトウェアライブラリ、ハードウェア設計、および開発ツールを提供し、プロジェクトを非常に簡単かつ迅速に構築できます。

Groveは、はんだ付けやブレッドボードを必要としない迅速なプロトタイピングのためのモジュラー電子プラットフォームです。

**このキットについて**

このキットは、mbedをできるだけ早く始められるように設計されています。mbedの世界を探索するためのプラグアンドプレイ型のGroveモジュールが多数含まれています。このキットの目的は、ハードウェアとソフトウェアに対する自信を持ちながら楽しむことです。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
## 始める
---
始めるために必要なものは以下の通りです：
- このキット
- [Arch](https://www.seeedstudio.com/Arch-p-1561.html)
- [USB Micro Bケーブル](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)
- インターネット接続可能なコンピュータ

### Hello, world

1.この[リンク](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:https://mbed.org/users/viswesr/code/Arch_GPIO_Ex1;platform:Seeeduino-Arch)をクリックして**mbedにサインアップまたはログイン**すると、mbedオンラインコンパイラが利用できます。

2.プログラムをインポートしてmain.cppを開くと、コードが表示されます。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Import_arch_gpio_ex1.png)

3.mbedオンラインIDEで、トップツールバーの「Compile」をクリックする（またはCTRL + Dを使用）と、コードがコンパイルされ、バイナリファイル - Arch_GPIO_Ex1_LPC11U24.binが生成されます。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Compile_mbed_program.png)

4.Archボードをコンピュータに接続し、**ボタンを長押し**すると、CRP DISABLDという名前のUSBドライブが表示されます。

5.firmware.binを削除し、Arch_GPIO_Ex1_LPC11U24.binをUSBドライブにコピーします。

6.**ボタンを短く押す**と、プログラムが実行され、LEDが点滅します。

```
#include "mbed.h"

/* GPIOピンをLEDを制御するための出力として設定します。'led'はユーザーが割り当てた名前で、
 'LED1'はこのArchプラットフォーム内でポートピンP1_8に与えられた内部名です。*/
DigitalOut led(LED1);

int main()
{
    while(1) {
        led = 1;    // LEDをオンにする。
        wait(0.5);  // 0.5秒待機。
        led = 0;    // LEDをオフにする。
        wait(0.5);  // 0.5秒待機。
    }
}
```

上記のプログラムは、mbed C/C++ SDKの**DigitalOut**クラスと**wait()**関数を使用しています。LED1はI/Oピン**P1_8**の別名であり、ArchボードではD1とラベル付けされています。LED1の状態は、**led**に0または1を書き込むことで変更されます。**wait()**関数は秒単位の遅延を生成します。**while()**ループ内で、**led**の状態が0.5秒ごとに連続して切り替えられます。

**DigitalOut**の詳細は[mbedハンドブックのDigitalOutページ](https://developer.mbed.org/handbook/DigitalOut)で確認できます。同様に、wait()関数は[waitページ](https://developer.mbed.org/handbook/Wait)に記載されています。

### フルーツピアノ

果物のバスケット、マイクロコントローラー、コンピュータを使って作られたピアノ。

このアイデアは[Makey Makey](http://makeymakey.com/)から来ていますが、異なるハードウェアとソフトウェアを使用しています。USBを備えたmbed対応マイクロコントローラーが使用されています。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Piano.png)
![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Fruit_Piano_Hardware.jpg)

**ハードウェア**
- Archボード
- 果物のバスケット
- AC電源付きコンピュータ
- いくつかのワイヤー

**ソフトウェア**
1.この[リンク](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:http://mbed.org/teams/Seeed/code/Fruit_Piano;platform:Seeeduino-Arch)をクリックして、プログラムをmbedオンラインコンパイラにインポートします。
2.コードをコンパイルしてバイナリファイル - Fruit_Piano_LPC11U24.binをダウンロードします。
3.Archボードをコンピュータに接続し、ボタンを長押しすると、CRP DISABLDという名前のUSBドライブが表示されます。
4.firmware.binを削除し、Arch_GPIO_Ex1_LPC11U24.binをUSBドライブにコピーします。
5.ボタンを短く押してプログラムを実行します。
6.いくつかのリンゴやバナナをArchボードのA0 - A5（P0_11 - P0_14、P0_16、P0_22）ピンに接続します。
7.[Fruit Piano](http://xiongyihui.github.io/piano/)を開いて演奏します。

## さらに詳しく、ステップバイステップで
---
- [デジタル入力 - ボタン: ボタンを使用してLEDを制御する](https://developer.mbed.org/teams/Seeed/wiki/Button)
- [アナログ入力 - ポテンショメータ: ポテンショメータを使用してLEDの点滅を制御する](https://developer.mbed.org/teams/Seeed/wiki/Potentiometer)
- [温度センサー: アナログ温度センサーを使用して温度計を作る](https://developer.mbed.org/teams/Seeed/wiki/Analog-Temperature-Sensor)
- [PWM出力 - ブザー: ブザーを使用してメロディを再生する](https://developer.mbed.org/teams/Seeed/wiki/Grove-Buzzer)
- [ディスプレイ: デジタル時計を作る](https://developer.mbed.org/teams/Seeed/wiki/Grove-4-Digit-Display)
- [温度計](https://developer.mbed.org/teams/Seeed/wiki/Thermometer)
- [赤外線キーボード](https://developer.mbed.org/teams/Seeed/wiki/Infrared-keybaord)
- [カラフルなライト](https://developer.mbed.org/teams/Seeed/wiki/Grove-Chainable-RGB-LED)
- [温度で色を制御する](https://developer.mbed.org/teams/Seeed/wiki/Temperature-Color)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>