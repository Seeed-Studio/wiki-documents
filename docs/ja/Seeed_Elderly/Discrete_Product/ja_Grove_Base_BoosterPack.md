---
description: GGrove Base BoosterPack
title: Grove Base BoosterPack
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_BoosterPack
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/110020004%205.jpg)

BoosterPackは、センサー、ディスプレイ、ワイヤレスモジュールなどの追加機能を提供するために、さまざまなLaunchPadキットの上に積み重ねることができるプラグインモジュールです。Grove Base BoosterPackは、LaunchPad/BoosterPackエコシステムに歓迎される追加機能であり、Seeed StudioのGroveモジュールの増え続けるラインナップにどのLaunchPadでもインターフェースできるようにします。Grove Base BoosterPackは、センサー、アクチュエータ、ディスプレイ、ライト、モーターなど、標準化されたコネクタを備えた100以上のGroveモジュールを迅速にプロトタイプするための便利で簡単な方法を提供します。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/Grove_Web_idea.jpg)

**Groveとは？**

Groveは、電子機器を組み立てるためのモジュール式で使いやすいツールセットであり、ブロック構築アプローチを採用しています。Groveシステムは、ベースシールドと標準化されたコネクタを備えた多数のモジュールで構成されています。ベースシールドは、さまざまなGroveモジュールとインターフェースするために、任意のマイクロコントローラを簡単に接続できるようにします。各Groveモジュールは独自の機能を提供し、モジュール全体のコレクションは、単純なプッシュボタンから複雑な心拍センサーまで、幅広い機能を拡張します。各モジュールには明確なドキュメントとデモコードが付属しており、迅速に開始するのに役立ちます。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/IMG_GROVE.JPG)

**LaunchPadとは？**

LaunchPadは、Texas Instrumentsによる評価キットのセットです。LaunchPad評価キットに新しい機能を導入するために、BoosterPackを提供します。これは、LaunchPadベースボードの上にフィットするプラグインボードとして機能します。これにより、センサー、アクチュエータ、ディスプレイ、ライト、モーターなど、標準化されたコネクタを備えた100以上のGroveモジュールを簡単かつ便利に使用する方法を提供します。

## 特徴
---
* Seeedstudioが新たに発売したGrove Base BoosterPackを紹介します。これにより、Texas Instruments LaunchPadがGroveファミリーと密接に接続され、センサー、アクチュエータ、ディスプレイ、ライト、モーターなどの幅広いプロトタイプと組み合わせが可能になります。

* Grove Base BoosterPackには、13個のGrove 4ピン標準インターフェースがあり、5つのアナログ、5つのデジタル、3つのシリアルポートを含みます。MSP430 LaunchPadに基づいたLaunchPad上のプラグアンドプレイ拡張モジュールとして機能します。また、TI MSP430との接続方法に関するさまざまなチュートリアルを提供しており、参考プロトタイプとして11種類のプロジェクトを提供しています。これにより、創造性を導く便利な方法が提供されます。

* Grove BoosterPackには赤色LEDが搭載されています。これにより、電源供給を示します。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/BoosterpackpinMapping.jpg)

## Grove Base BoosterPackの使用方法
---
### 40ピンLaunchPadの使用

例: MSP-EXP430F5529LP、EK-TM4C123GXLなど

BoosterPackは、「内側の20ピン」[21-40]を活用するように設計されています。ピンは以下の表に示すように接続されています。

以下の表を使用して、開発者はGroveコネクタ「J6」に接続されたGroveモジュール（例: ポテンショメータ/回転ノブ）からアナログ値を読み取ることができます。EnergiaのanalogRead(24) API呼び出しを使用します。

| コネクタタイプ | Groveコネクタラベル | GND | VCC | SIG1 (BoosterPackピンへの接続) | SIG0 (BoosterPackピンへの接続) * |
|---|---|---|---|---|---|
| アナログ | J5 | GND | 3.3V | 23 (アナログ対応ピン) | 22 (アナログ対応ピン) |
| アナログ | J6 | GND | 3.3V | 25 (アナログ対応ピン) | 24 (アナログ対応ピン) |
| アナログ | J7 | GND | 3.3V | 26 (アナログ対応ピン) | 25 (アナログ対応ピン) |
| アナログ | J8 | GND | 3.3V | 27 (アナログ対応ピン) | 26 (アナログ対応ピン) |
| アナログ | J9 | GND | 3.3V | 28 (アナログ対応ピン) | 27 (アナログ対応ピン) |
| I2C | J10 | GND | 3.3V | 10 (I2C SDA) | 9 (I2C SCL) |
| UART | J11 | GND | 3.3V | 4 (UART to MCU) | 3 (UART from MCU) |
| SPI | J12 | GND | 3.3V | 14 (SPI MISO) | 7 (SPI CLK) |
| デジタル | J13 | GND | 3.3V | 39 (デジタル/PWMピン) | 40 (デジタル/PWMピン) |
| デジタル | J14 | GND | 3.3V | 38 (デジタル/PWMピン) | 39 (デジタル/PWMピン) |
| デジタル | J15 | GND | 3.3V | 37 (デジタル/PWMピン) | 38 (デジタル/PWMピン) |
| デジタル | J16 | GND | 3.3V | 36 (デジタル/PWMピン) | 37 (デジタル/PWMピン) |
| デジタル | J17 | GND | 3.3V | 35 (デジタル/PWMピン) | 36 (デジタル/PWMピン) |

### 20ピンLaunchPadの使用

20ピンLaunchPadを使用している場合は、ジャンパーまたはジャンパーワイヤーを使用して、GroveコネクタとBoosterPackコネクタ間の適切な接続を行うことができます。

特定のLaunchPadのピンアウト図を使用して、Groveモジュールを適切なピンに物理的/電気的に接続することができます。各LaunchPadのピンアウト図は以下で利用可能です:
[https://energia.nu/pin-maps/](https://energia.nu/pin-maps/)

これらのピン図を使用することで、必要な機能を持つピンを特定できます。例えば、アナログ Grove モジュール（例：ポテンショメータノブ）を使用するために Grove コネクタ J5 を利用したい場合、Energia のピンマップを使用して BoosterPack コネクタのアナログ対応ピンを特定できます。ジャンパーワイヤを使用して、ピン番号 22 を利用可能なアナログ対応ピンに接続することができます。例えば、MSP-EXP430G2 LaunchPad を使用している場合、ジャンパーまたはケーブルを使用してピン 22 をピン 2 に接続することが可能です。

## 対応製品
---
### Grove リスト

<!-- * [1. ブザー](/ja/Grove-Buzzer#With_TI_LaunchPad)

* [2. リレー](/ja/Grove-Relay#With_TI_LaunchPad)

* [3. 4桁デジタルディスプレイ](/ja/Grove-4-Digit_Display#With_TI_LaunchPad)

* [4. 回転角センサー](/ja/Grove-Rotary_Angle_Sensor#With_TI_LaunchPad)

* [5. 光センサー](/ja/Grove-Light_Sensor#With_TI_LaunchPad)

* [6. 音センサー](/ja/Grove-Sound_Sensor#With_TI_LaunchPad)

* [7. PIRモーションセンサー](/ja/Grove-PIR_Motion_Sensor#With_TI_LaunchPad)

* [8. 湿度センサー](/ja/Grove-Moisture_Sensor#With_TI_LaunchPad)

* [9. 超音波レンジャーセンサー](/ja/Grove-Ultrasonic_Ranger#With_TI_LaunchPad)

* [10. 温湿度センサー](/ja/Grove-TemperatureAndHumidity_Sensor) -->

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [ハードウェア Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip)

- [Grove Starter Kit For LaunchPad ユーザーマニュアル](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove%20Starter%20Kit%20Manual.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>