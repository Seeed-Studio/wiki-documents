---
description: Grove Shield for Seeed Studio XIAO に組み込みバッテリーマネジメントチップを搭載
title: Grove Shield for XIAO with battery management chip
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概要

Seeed Studio Grove Base for XIAO は、**[Seeed Studio XIAO](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)** 用のプラグアンドプレイ型 Grove 拡張ボードです。オンボードのバッテリーマネジメントチップとバッテリー接続パッドを使用することで、リチウムバッテリーで Seeed Studio XIAO に簡単に電力を供給し、充電することができます。オンボードの 8 つの Grove コネクタには、2 つの Grove I2C と 1 つの UART が含まれています。これにより、Seeed Studio XIAO と Seeed の Grove システムをつなぐブリッジとして機能します。また、Flash SPI 接続パッドを使用して Seeed Studio XIAO にフラッシュメモリを追加し、メモリ容量を拡張することができ、Seeed Studio XIAO にさらなる可能性を提供します。

オンボードのバッテリーマネジメントチップとバッテリー接続パッドを使用することで、3.7V のリチウムバッテリーで Seeed Studio XIAO に簡単に電力を供給し、充電することができます。これにより、特にウェアラブルプロジェクトにおいて、より柔軟でポータブルな設計が可能になります。また、プロジェクトの実際のニーズに応じて、オンボードの PCB スタンプホールを通じてボードを分割することもできます（分割後の寸法はわずか 25*39mm）。これにより、さらに小型化され、重量も 13g から 10g に軽減されます。
<!-- 図に問題あり 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

拡張ボードとして、Seeed Studio Grove Base for XIAO は Seeed Studio XIAO の 14 ピンすべてを引き出し、オンボードの電源スイッチと充電状態インジケータライトにより、より使いやすくなっています。また、上級開発者向けに SPI-Flash 接続パッドを備えており、Seeed Studio XIAO にフラッシュメモリを追加してメモリ容量を拡張することができます。これにより、Seeed Studio XIAO にさらなる可能性を提供します。

Seeed Studio XIAO のフォームファクタに基づき、すべての Seeed Studio XIAO ボードは [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) と [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) の両方をサポートしています。ピンの間にはわずかな違いがあり、Pinout を参照することで簡単に管理できます。

:::note
この製品には Seeed Studio XIAO ボードは含まれていません。必要な場合は [こちら](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) をクリックしてください。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

#### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### ピン配置説明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 特徴

- オンボードリチウムバッテリー充電および管理機能
- Groveコネクタ（Grove IIC x 2、Grove UART x 1）、すべての14 GPIOが引き出し可能
- コンパクトで分割可能なデザイン
- Flash SPIボンディングパッドを予約
- オンボード電源スイッチと充電状態インジケーターライト

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 3.7Vリチウムバッテリー|
|負荷容量|800mA|
|充電電流|400mA（最大）|
|動作温度|-40°C ～ 85°C|
|保存温度|-55°C ～ 150°C|
|Groveインターフェース|I2C *2 / UART* 1|

## アプリケーション

- ウェアラブルデバイス
- 高速プロトタイピング
- Groveモジュールのテスト
- 小型サイズを必要とするプロジェクト

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### 必要な材料

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

#### Grove-Doppler Radarの外部ヘッダーピンの説明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|ピン番号|信号名|ピン説明|
|---|---|----|
|1|DIV_OUT|BGT24LTR11からの周波数分周出力|
|2|GND|グラウンド|
|3|VCC_5V_EXT|外部+5.0V入力電源ピン（最大=5.5V）|
|4|VTUNE|VCO周波数調整電圧|
|5|IFQ_HG|BGT24LTR11 Qチャンネルアナログ信号出力-第2ゲインステージ|
|6|IFI_HG|BGT24LTR11 Iチャンネルアナログ信号出力-第2ゲインステージ|
|7|PWM_OUT|CCU4を使用した外部ユーザー設定可能GPIO|
|8|OUT1|外部GPIOピン（ユーザー設定可能）|
|9|OUT2|外部GPIOピン（ユーザー設定可能）|

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
USBケーブル、Doppler RadarインターフェースをSeeed Studio XIAO拡張ボードインターフェースに慎重に接続してください。そうしないとポートが損傷する可能性があります。
:::

- **ステップ 1.** Groveケーブルを使用してDoppler RadarをSeeed Studio XIAO拡張ボードに接続します。

- **ステップ 2.** USBケーブルを使用してSeeed Studio XIAOをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行し、結果がArduino IDEの**シリアルモニター**画面に表示されます。

### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar)をダウンロードします。

- **ステップ 2.** **Seeed_Arduino_DopplerRadar**ファイル全体をコピーし、Arduino IDEのライブラリファイルに貼り付けます。

- **ステップ 3.** Arduino IDEで**BGT24LTR11_DETECTION_TARGET**ファイルを開きます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

#### ソフトウェアコード

```cpp
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // 初期設定コードをここに記述します。一度だけ実行されます。
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->ターゲット検出モード
        MODE 1 -->I/Q ADCモード
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // メインコードをここに記述します。繰り返し実行されます。
    uint16_t state = 0;
    ShowSerial.print("ターゲット速度:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> ターゲット接近
    //1 --> ターゲット離脱
    //0 --> ターゲット未検出
    if (state == 2) {
        ShowSerial.println("ターゲット接近");
    } else if (state == 1) {
        ShowSerial.println("ターゲット離脱");
    }
    delay(200);
}
```

:::success
  すべてが正常に動作している場合、**シリアルモニター**で以下のような結果を確認できます。
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radarの結果" title="デモ" />
    <figcaption><b>図3</b>. <i>物体が接近していない場合</i></figcaption>
  </figure>
</div>

レーダーに物体が接近または通過している場合、結果は以下のように変化します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radarの結果" title="デモ" />
    <figcaption><b>図3</b>. <i>物体が接近している場合</i></figcaption>
  </figure>
</div>

:::note
センサーが検出可能な最小速度精度は52cm/sで、これは0.52m/s、3.6km/h、2.23mphに相当します。また、関数`getSpeed()`が返す結果は52cm/sの倍数であり、絶対値として返されます。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Seeed Studio Grove Base for XIAOの添付ファイル](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) レーダーモジュール通信プロトコル v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 データシート](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## プロジェクト

<p><iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お客様のニーズや好みに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>