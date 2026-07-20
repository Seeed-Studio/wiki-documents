---
description: バッテリ管理チップを内蔵した Seeed Studio XIAO 用 Grove シールド
title: バッテリ管理チップ搭載 Grove Shield for XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
sku: 103020312
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/ja/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概要

Seeed Studio Grove Base for XIAO は、**[Seeed Studio XIAO](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)** 用のプラグアンドプレイ型 Grove 拡張ボードです。オンボードのバッテリ管理チップとバッテリ接続パッドにより、リチウムバッテリで Seeed Studio XIAO に簡単に電源を供給し、充電することができます。オンボードの 8 つの Grove コネクタには、2 つの Grove I2C と 1 つの UART が含まれます。これは Seeed Studio XIAO と Seeed の Grove システムのブリッジとして機能します。Flash SPI 接続パッドにより、Seeed Studio XIAO に Flash を追加してメモリ容量を拡張でき、Seeed Studio XIAO にさらなる可能性をもたらします。

オンボードのバッテリ管理チップとバッテリ接続パッドにより、3.7V リチウムバッテリで Seeed Studio XIAO に簡単に電源を供給し、充電することができるため、特にウェアラブルなどのプロジェクトを、より柔軟かつ携帯性の高いものにできます。さらに、プロジェクトの実際のニーズに応じて、オンボードの PCB スタンプホールに沿ってボードを分割することもでき（分割後のサイズは 25×39mm）、より小型化できるだけでなく、重量も 13g から 10g に減らすことができます。
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

拡張ボードとして、Seeed Studio Grove Base for XIAO は Seeed Studio XIAO から 14 本すべてのピンを引き出しており、オンボードの電源スイッチと充電状態インジケータライトにより、さらに使いやすくなっています。さらに、このシールドには、Seeed Studio XIAO に Flash を追加してメモリ容量を拡張したい上級開発者向けに SPI-Flash 接続パッドも用意されており、Seeed Studio XIAO にさらなる可能性を提供します。

Seeed Studio XIAO のフォームファクタにより、すべての Seeed Studio XIAO ボードは [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) と [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) の両方をサポートします。ピンにはわずかな違いがありますが、Pinout を参照すれば簡単に扱うことができます。

:::note
本製品には Seeed Studio XIAO ボードは含まれていません。必要な場合は[こちら](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)をクリックしてください。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

#### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### ピン配置の説明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 特徴

- オンボードのリチウムバッテリ充電および管理機能
- Grove コネクタ（Grove IIC × 2、Grove UART × 1）、14 本すべての GPIO を引き出し
- コンパクトで分割可能なデザイン
- Flash SPI 接続パッドを確保
- オンボード電源スイッチおよび充電状態インジケータライト

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 3.7V リチウムバッテリ|
|負荷容量|800mA|
|充電電流| 500mA（最大）|
|動作温度|- 40°C ～ 85°C|
|保管温度|-55°C ～ 150°C|
|Grove インターフェース|I2C × 2 / UART × 1|

## 応用例

- ウェアラブルデバイス
- ラピッドプロトタイピング
- Grove モジュールのテスト
- 小型サイズを必要とするプロジェクト

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### 必要な材料

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Grove-Doppler Radar 用外部ヘッダーピンの説明

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|ピン番号|信号名|ピンの説明|
|---|---|----|
|1| DIV_OUT |BGT24LTR11 からの周波数分周出力|
|2|GND|グラウンド|
|3|VCC_5V_EXT|外部 +5.0V 入力電源ピン（最大 = 5.5V）|
|4|VTUNE|VCO 周波数調整電圧|
|5|IFQ_HG|BGT24LTR11 Q チャネル・アナログ信号出力 - 第 2 利得段|
|6|IFI_HG|BGT24LTR11 I チャネル・アナログ信号出力 - 第 2 利得段|
|7|PWM_OUT|CCU4 を備えた外部ユーザー設定可能 GPIO|
|8|OUT1|外部 GPIO ピン（ユーザー設定可能）|
|9|OUT2|外部 GPIO ピン（ユーザー設定可能）|

### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
USB ケーブルおよび Doppler Radar インターフェースを、Seeed Studio XIAO 拡張ボードのインターフェースに優しく挿し込んでください。そうしないとポートを破損するおそれがあります。
:::

- **Step 1.** Grove ケーブルを使用して、Doppler Radar を Seeed Studio XIAO 拡張ボードに接続します。

- **Step 2.** USB ケーブルで Seeed Studio XIAO を PC に接続します。

- **Step 3.** コードをダウンロードします。ソフトウェアの章を参照してください。

- **Step 4.** コードを実行すると、その結果が Arduino IDE の **Serial Monitor** の画面に表示されます。

### ソフトウェア

:::note
Arduino を扱うのが初めての場合は、作業を始める前に [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::

- **Step 1.** [デモコード](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar)をダウンロードします。

- **Step 2.** **Seeed_Arduino_DopplerRadar** フォルダ全体をコピーし、Arduino IDE のライブラリフォルダに貼り付けます。

- **Step 3.** Arduino IDE で **BGT24LTR11_DETECTION_TARGET** ファイルを開きます。

- **Step 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[How to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

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
    // put your setup code here, to run once:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->detection target mode
        MODE 1 -->I/Q ADC mode
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // put your main code here, to run repeatedly:
    uint16_t state = 0;
    ShowSerial.print("target speed:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> target approach
    //1 --> target leave
    //0 --> Not Found target
    if (state == 2) {
        ShowSerial.println("target approach");
    } else if (state == 1) {
        ShowSerial.println("target leave");
    }
    delay(200);
}
```

:::success
  すべてが正常に動作していれば、**Serial Monitor** を開くと次のような結果が表示されます：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>図 3</b>. <i> 物体が接近していない状態</i></figcaption>
  </figure>
</div>

また、レーダーに物体が接近したり通過したりすると、結果は次のように変化します：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>図 3</b>. <i>物体が接近している状態</i></figcaption>
  </figure>
</div>

:::note
このセンサが検出可能な最小速度精度は 52cm/s であり、これは 0.52m/s、3.6km/h、2.23mph に相当します。さらに、関数 `getSpeed()` によって返される結果は 52cm/s の倍数であり、絶対値として返されます。
:::

## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) レーダーモジュール通信プロトコル v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 データシート](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)
- **[ZIP]** [Grove Shield for Seeeduino XIAO v1.2 回路図 & PCB (KiCad)](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.2_KiCad_SCH_PCB.zip)
- **[PDF]** [Grove Shield for Seeeduino XIAO v1.0 回路図](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0_SCH.pdf)

## プロジェクト

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
