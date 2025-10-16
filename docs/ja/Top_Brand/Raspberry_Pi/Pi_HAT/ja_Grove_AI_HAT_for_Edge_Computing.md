---
description: Grove AI HAT for Edge Computing
title: Grove AI HAT for Edge Computing
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_AI_HAT_for_Edge_Computing
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

Grove AI HAT for Edge Computing（以下「Grove AI HAT」と呼ぶ）は、Sipeed MAix M1 AI MODULEを中心に構築されており、内部にKendryte K210プロセッサを搭載しています。これは低コストながら強力なRaspberry Pi AI HATであり、Raspberry PiがエッジでAIを実行するのを支援します。また、エッジコンピューティングアプリケーションのために独立して動作することも可能です。

MAix M1は、デュアルコア64ビットCPU、230GMULps 16ビットKPU（ニューラルネットワークプロセッサ）、DP&SPをサポートするFPU（浮動小数点ユニット）、および8つのマイクをサポートするAPU（オーディオプロセッサ）を備えた強力なRISC-V 600MHz AIモジュールです。

強力なKendryte K210プロセッサに加えて、Grove AI HAT for Edge Computingボードは豊富な周辺機器を提供します：I2C/UART/SPI/I2S/PWM/GPIO。このHATはLCDおよびカメラインターフェースも提供しており、Sipeed 2.4インチQVGA LCDおよびDVPカメラをサポートします。これにより、AIビジョンプロジェクトがより便利になります。<a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Sipeed MAix BiT Kit for RISC-V AI+IoT</a>と同様に、カメラとLCDを含むキットを近日中にリリースする予定です。AI音声認識アプリケーション向けには、高品質のマイクを追加しました。また、ロボットやモーションアプリケーション向けには、オンボードの3軸加速度センサーを搭載しており、外部センサーと比較してより正確で使いやすいです。

私たちはこれまでにさまざまなSipeed AI製品をリリースしてきましたが、Grove化する時が来たと信じています。そして、数百種類のGroveセンサーやGroveアクチュエーターをAIアプリケーションに活用できるようにしました。これがGrove AI HAT for Edge Computingの登場理由です。このHATには6つのGroveコネクタを追加しました。これには、1xデジタルIO、2xアナログIO、1xI2C、1xUART、1xPWMが含まれます。さらに、<a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>に基づいて、Linux、Windows、Mac OS Xなどの開発環境をサポートしています。

このボードがエッジコンピューティング、AIビジョン、音声認識、その他のAIプロジェクトに役立つことを願っています。ぜひ楽しんでください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- プロセッサ：Sipeed MAIX-Iモジュール（WiFiなし）（初のRISC-V 64 AIモジュール、K210内蔵）
- 1x USB 2.0デバイス、Type C（電源およびプログラミング用）
- 6x Groveインターフェース：1xデジタルIO、1x PWM、1x I2C、1x UART、2x ADCを含む
- 1x電源LED、1xブートLED
- 1xリセットボタン、1xブートボタン
- 1x LCDインターフェース
- 1xカメラインターフェース
- 1xデジタルマイク
- 1x加速度センサー
- 1x JTAG & ISP UARTピンヘッダー
- 2x 20ピンヘッダー（I2C、UART、SPI、I2S、PWM、GPIOを含む）

## 仕様

| パラメータ | 値 |
|---|---|
| CPU | K210 RISC-V デュアルコア 64ビット, 400MHz (最大 600MHz) |
| FPU | IEEE754-2008 準拠の高性能パイプライン FPU |
| KPU (ニューラルネットワークプロセッサ) | • 主流のトレーニングフレームワークが特定の制約ルールに従ってトレーニングした固定小数点モデルをサポート<br />• 1x1 および 3x3 畳み込みカーネルをサポート<br />• 任意の形式の活性化関数をサポート<br />• リアルタイム動作のためにサポートされるニューラルネットワークパラメータサイズの最大値は 5MiB ～ 5.9MiB |
| デバッグサポート | 高速 UART および JTAG インターフェースによるデバッグ |
| 電源電圧 | 5V<br />5.5V を超えないこと |
| IO 電圧 | 3.3V |
| 動作環境温度 | -20 ～ 70℃ |
| ADC | オンボード 16ビット ADC |
| 3軸加速度計 | ADXL345 ±2 g/±4 g/±8 g/±16 g |
| マイク | 感度: -26 dB; SNR: 61 dB |
| GPIO | Raspberry Pi 互換の 2x 20 ピンヘッダー |
| Grove インターフェース | 1x デジタル IO, 1x PWM, 1x I2C, 1x UART, 2x ADC |
| USB インターフェース | USB 2.0 デバイス, Type C (電源およびプログラミング用) |
| LCD インターフェース | 8ビット MCU LCD 24P 0.5mm FPC コネクタ |
| DVP カメラインターフェース | 24P 0.5mm FPC コネクタ |
| ボタン | 1x リセットボタン, 1x ブートボタン (ユーザーボタンとして使用可能) |
| LED | 1x 電源 LED, 1x ブート LED (ユーザー LED として使用可能) |

:::caution

- すべてのデジタルおよびアナログ IO インターフェースレベルは 3.3V です。3.3V を超える入力をしないでください。そうしないと CPU が損傷する可能性があります。  
- 入力電源電圧は 5V で、5.5V を超えることはできません。
:::

## 応用例

- エッジコンピューティング向け AI
- スマートビルディング
- 医療機器
- 自動化およびプロセス制御
- ロボット

## ハードウェア概要

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing hardware overview" title="hardware overview" />
  <figcaption><b>図 1</b>. <i>Grove AI HAT for Edge Computing ハードウェア概要</i></figcaption>
</figure>
</div>

## 対応プラットフォーム

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

#### デジタルデモ

**必要な材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- USB Type C ケーブル x1

##### ハードウェア接続

1. Grove - LED を Grove AI HAT の Grove **J2** ポート (D13 ピン) に接続します。  
2. Grove AI HAT を USB Type C ポート経由でコンピュータに接続します。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>図 8</b>. <i>ハードウェア接続</i></figcaption>
</figure>
</div>

#### アナログデモ

**必要な材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- USB Type C ケーブル x1

##### ハードウェア接続

1. Grove - Round Force Sensor (FSR402) を Grove AI HAT の Grove **J11** ポート (A0 ピン) に接続します。  
2. Grove AI HAT を USB Type C ポート経由でコンピュータに接続します。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>図 9</b>. <i>ハードウェア接続</i></figcaption>
</figure>
</div>

#### 顔検出デモ

**必要な材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [OV2640 カメラ](https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [2.4 インチ TFT LCD](https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- USB Type C ケーブル x1

##### ハードウェア接続

a. OV2640 カメラを Grove AI HAT の 24 ピン FPC カメラコネクタに接続します。  
b. 2.4 インチ TFT LCD を Grove AI HAT の 24 ピン FPC LCD コネクタに接続します。  
c. Grove AI HAT を USB Type C ポート経由でコンピュータに接続します。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>図 12</b>. <i>顔検出デモのハードウェア接続</i></figcaption>
</figure>
</div>

## リソース

- **[PDF]** [Grove AI HAT for Edge Computing 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [Accelerometers_Sensor_datasheet データシート](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [ADS1115 データシート](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>