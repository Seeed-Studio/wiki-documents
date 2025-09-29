---
description: マトリックスクロック
title: マトリックスクロック
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Matrix_Clock
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-ProductImagePlain.jpg)

マトリックスクロックは、LEDマトリックスディスプレイに時間を表示する、単一基板で非常にコンパクトなArduino互換のクロックです。このディスプレイと豊富なファームウェアライブラリにより、分ごとのアニメーション遷移が可能です。

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClockRear.jpg)![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Buttons.jpg)

Arduino Leonardoをベースにしたマトリックスクロックは、Arduino IDEと完全に互換性があり、USB Microケーブルを介して新しいスケッチをアップロードすることで簡単に更新またはカスタマイズできます。コインセルで駆動されるリアルタイムクロックカレンダーは、電源が切れているときでも時間と日付を追跡します。また、マトリックスクロックは音楽アラームを再生することができ、異なるメロディーに簡単に再プログラム可能です。そのコンパクトな形状により、ポケットウォッチスタイルのハウジングなど、さまざまなハウジングに収めることができます。ポータビリティが求められる場合、ユニットはバッテリー駆動が可能で、スリープ機能（拡張ピンの1つをグラウンドに接続することで）を使用してバッテリー寿命を延ばすことができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Matrix-Clock-p-1824.html)

## 特徴
---
* 16x8 LEDマトリックスディスプレイ
* ATMEGA32U4マイクロコントローラー
* コインセル駆動のリアルタイムクロックカレンダー
* テキサス・インスツルメンツ製TLC5920 LEDドライバー
* 4つのボタン
* 圧電スピーカー出力
* スリープモード入力
* 2つの電源入力、USB Microコネクタまたは6V - 9V DC入力（通常はVinで駆動、USB電源が接続されると切り替え）

## 使用方法
---

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Mode.jpg)

## 仕様

| 項目 | 仕様 |
|---|---|
| マイクロコントローラー | Atmel ATmega32u4（TQFP-44パッケージ） |
| 動作電圧 | 5V USB駆動または6V～9V |
| 電源および通信 | USB Micro B |
| 消費電流 | 通常動作時の平均約90mA、最大300mA |
| LEDマトリックス | 2x 8x8 3mm緑色LED |
| クロック速度 | マイクロコントローラー16MHz、RTCC 32.7 |
| SRAM | 2.5 KB |
| EEPROM | 1 KB |
| フラッシュメモリ | 32 KB |
| 拡張ヘッダー | Gnd, Vin, 5V, Sleep, Piezo-, Piezo+ |

## 回路図
---
- [MatrixClock-Schematic-MC201V1-Rev1.pdf](https://wiki.seeedstudio.com/ja/images/c/c3/MatrixClock-Schematic-MC201V1-Rev1.pdf)

## PCB
---
![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-PCB.jpg)

## ライセンス

[http://i.creativecommons.org/l/by-sa/4.0/88x31.png](http://i.creativecommons.org/l/by-sa/4.0/88x31.png)

Matrix Clock V1 by Dan Hamerは、[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)の下でライセンスされています。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>