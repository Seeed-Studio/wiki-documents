---
title: Grove - MP3 v2.0
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-MP3_v2.0/
slug: /ja/Grove-MP3_v2.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0は、小型でコンパクトなオーディオモジュールです。このモジュールは、MP3、WAV、WMV形式のオーディオファイルに対して、ランダム再生や特定ファイルの再生など、さまざまな操作をサポートします。シリアル通信を使用することで、すべての事前定義されたコマンドやコマンドの組み合わせを利用して、音楽ファイルに対するすべての操作を実行できます。また、このモジュールはFAT16やFAT32などの一般的なファイルシステムにも対応しています。Grove UARTインターフェース、3.5 mmオーディオジャック、micro-SDスロットを備えており、このモジュールを使用することで、静かなアプリケーションに音を追加することができます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## バージョン

| 製品バージョン       | 変更点               | リリース日       |
|-------------------|------------------|---------------|
|  Grove - MP3 v1.0 | 初期リリース          | 2013年4月28日  |
|  Grove - MP3 v2.0 | KT403Aに変更        | 2015年12月15日 |

## 特徴

- オーディオファイルに対する一般的な操作
- オンボードmicro-SDスロットと3.5 mmオーディオジャック
- 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)のサンプルレートをサポート
- 24ビットDAC出力、最大90 dBの動的出力範囲、信号対雑音比85 dB
- MP3、WMV、WAVオーディオ形式およびFAT16、FAT32ファイルシステムに対応
- 合計10段階のイコライゼーションを内蔵

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## アプリケーションアイデア

- あらゆるアプリケーション向けの中間レベルのオーディオモジュール。

## 仕様

| パラメータ                                   | 値                                                                                                             |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 入力                                        | 5 V (DC)                                                                                                          |
| 動作電流（信号出力なしの状態）               | 15 mA未満                                                                                                        |
| 動作電流                                   | 40 mA未満                                                                                                        |
| チップ                                      | KT403A [(データシート)](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| チップLDO出力電圧                           | 3.3 V                                                                                                             |
| チップ出力電流                              | 最大100mA                                                                                                         |
| 対応ファイル形式                            | MP3, WAV, WMA                                                                                                     |
| SDカードの最大対応メモリ                    | 8 GB                                                                                                             |
| サンプリングレート                           | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)                                                           |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoでの使用方法

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57)|

:::note
    音楽が入ったSDカードと、3.5mmオーディオジャックを備えたヘッドセット/イヤホンまたはステレオも必要です。
:::

- **ステップ2.** Grove-MP3 v2.0をGrove-Base ShieldのポートD2に接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-MP3 v2.0をSeeeduinoに直接接続することもできます。
:::
| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| D3            | 白                   |
| D2            | 黄                  |

#### ソフトウェア

- **ステップ1.** [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) をGithubからダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** **Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player**の例を選択してArduinoにアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
- **ステップ4.** 以下のようにCOMターミナルに情報が表示されます。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

:::note
    高度なプログラミングのために、KT403Aチップの[データシート](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)をダウンロードできます。
:::

- **ステップ5.** 関連するコマンドを入力して音楽を再生してください。

:::tip
    このライブラリはAVR/SAMD/STM32F4デバイスをサポートしており、ハードウェアおよびソフトウェアシリアルの両方に対応しています。
:::
シリアルポートには2種類あります。一つはCOMSerialで、Grove-MP3モジュールとの通信ポートを指します。もう一つはShowSerialで、PCとの接続に使用されるシリアル情報表示ポートを指します。

ほとんどのArduinoボードには少なくとも1つのシリアルがありますが、一部のボードには複数のシリアルがあります（Arduino Megaには4つのシリアルがあります）。デジタルピン0（RX）と1（TX）で通信し、USBを介してコンピュータとも通信します。そのため、ピンD0とピンD1にUARTデバイスを接続する場合、USB経由でプログラムをダウンロードする前にそれらを取り外す必要があります。そうしないとアップロードが失敗する原因となります。ハードウェアシリアルポートの数よりも多くのシリアルポートが必要な場合は、ソフトウェアシリアルを使用できます。ソフトウェアシリアルは、シリアルハードウェアをエミュレートするためにソフトウェアを使用します。ソフトウェアシリアルはデータの送受信にArduinoコントローラの多くの助けを必要とするため、ハードウェアシリアルほど高速または効率的ではありません。シリアルに関する詳細は、[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/)を参照してください。

- **AVR:** 以下の例では、ソフトウェアシリアルをCOMSerial（Grove-MP3モジュールと接続）として定義します。すべてのデジタルピンがソフトウェアシリアルに使用できるわけではありません。詳細なピンについては[Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial)を参照してください。ハードウェアシリアルをShowSerial（PCと接続）として定義します。Arduino Megaを使用する場合、ハードウェアシリアルをShowSerialに接続し、他のSerial1/Serial2/Serial3をCOMSerialに接続できます。そのため、AVR Megaの設定を参照してください。

- **SAMD:** 以下の例では、SAMDはソフトウェアシリアルをサポートしていません。ハードウェアシリアル**Serial1**を使用してGrove-MP3モジュールと通信し、**SerialUSB**を使用してPCにメッセージを表示します。

- **STM32F4:** 以下の例では、ハードウェアシリアル**Serial**を使用してGrove-MP3モジュールと通信し、**SerialUSB**を使用してPCにメッセージを表示します。

:::note
    シリアルに関する詳細情報については、[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/)を参照してください。
:::

```cpp
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

KT403A<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

KT403A<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

KT403A<HardwareSerial> Mp3Player;
#endif
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-MP3_v2.0_Schematic files](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[ライブラリ]** [Grove-Serial MP3 Player V2.0 Libraries](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- **[データシート]** [KT403A Datasheet](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## プロジェクト

**Cayenneを使用したArduinoベースのセキュリティプロジェクト**: Arduinoを使用したホームセキュリティプロジェクト。侵入者が検出された際にSMS/メールで通知。許可された人物には個別のメッセージを送信。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**リーフピアノ**: タッチセンサーと葉をピアノの鍵盤として使用してピアノを作成しました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

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