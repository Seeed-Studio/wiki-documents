---
description: Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)
title: Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"/></div>

このセンサーは、Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) のアップグレード版です。ヘッド部分に2つのGNDポートを追加して安定性を向上させるとともに、前面のピン間隔を広げて、配線が偶然接触して短絡を引き起こすのを防止しています。

**Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** は、多チャンネルの近接容量式タッチセンサーです。このモジュールは以下の3つの機能を備えた3-in-1モジュールです：容量検知、タッチ検知、近接検知。

**容量検知**: このモジュールは、一定の直流電流容量検知方式を使用しています。10 pFから2000 pF以上の容量を、最大0.01 pFの解像度で測定できます。

**タッチ検知**: 電極の容量データが取得されると、容量の基準値と比較して電極のタッチ/リリース状態が判定されます。

**近接検知**: MPR121の新機能の1つは、近接検知システムです。これにより、システムのすべての電極を合計して1つの大きな電極を作成することが可能です。

Freescale MPR121をベースにしたこのセンサーは、完全に独立した12個の電極を備え、自動構成機能を内蔵しています。I2Cインターフェースのおかげで、1つのGroveポートで12個の電極信号をすべて検出でき、I2Cアドレスは0X5Bから0X5Dまでハードウェアで設定可能です。これにより、複数の**Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** を1つのシステムで使用してチャンネルを拡張することが可能になり、最大36個の電極を含むタッチシステムを構築できます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン変更

|項目| Grove - 12 Key Capacitive I2C Touch Sensor V2 | Grove - I2C Touch Sensor |
|---|---|---|
|メインチップ|MPR121|MPR121|
|I2Cアドレス|変更可能(0X5B ~ 0X5D)|変更不可(0X5A)|
|タッチセンサー感知器|x|√|
|入力インターフェース|ワニ口クリップインターフェース|DIP 2ピンメスヘッダー|
|コストパフォーマンス|高い|低い|
|リリース時期|2018年9月11日|2015年10月31日|

## 特徴

- 内部10ビットADC
- 各電極入力の独立した自動キャリブレーションを統合
- 完全に独立した電極と内蔵自動構成機能
- I2Cインターフェース、IRQ（割り込み）出力で電極状態の変化を通知
- ハードウェアで設定可能なI2Cアドレス
- 12個の電極/容量検知入力（うち8個はLED駆動およびGPIOとして多機能）
- 各電極入力の充電電流と充電時間の自動構成
- 各電極に対して個別のタッチおよびリリース閾値を設定可能で、ヒステリシスと電極独立性を提供
- 2つのGNDピンを追加し、ピン間隔を拡大して安全な取り扱いを実現

## アプリケーション

- PC周辺機器
- MP3プレーヤー
- リモコン
- 携帯電話
- 照明制御

## ハードウェア概要

### ピンマップ

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"/></div>

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"/></div>

:::tip
CH0 ~ CH11については、電極の静電容量データが取得されると、静電容量の基準値と比較して電極のタッチ/リリース状態が決定されます。また、各チャンネルごとに基準値を個別に設定することができます。Pin12 ~ Pin19は多機能であり、GPIOまたはLEDドライバとして設定することができます。詳細については、Freescaleのアプリケーションノート [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## プロジェクト

この製品の紹介ビデオと簡単なデモです。ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**リーフピアノ**: タッチセンサーと葉をピアノの鍵盤として使用してピアノを作りました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Scratchで遊ぶ**: タッチセンサーを使ってScratchゲームを遊ぶ方法は？

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>