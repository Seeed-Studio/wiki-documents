---
description: バッテリー管理チップ内蔵Seeed Studio XIAO用Groveシールド
title: バッテリー管理チップ内蔵XIAO用Groveシールド
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 1/10/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## 概要

Seeed Studio Grove Base for XIAOは、**[Seeed Studio XIAO](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)**用のプラグアンドプレイGrove拡張ボードです。オンボードのバッテリー管理チップとバッテリー接続パッドにより、Seeed Studio XIAOをリチウムバッテリーで簡単に電源供給し、充電することができます。8つのGroveコネクタがオンボードに搭載されており、2つのGrove I2Cと1つのUARTが含まれています。これはSeeed Studio XIAOとSeeedのGroveシステムの橋渡しとして機能します。Flash SPI接続パッドにより、Seeed Studio XIAOにFlashを追加してメモリ空間を拡張でき、Seeed Studio XIAOにより多くの可能性を提供します。

オンボードのバッテリー管理チップとバッテリー接続パッドにより、Seeed Studio XIAOをリチウム3.7Vバッテリーで簡単に電源供給し、充電することができ、プロジェクト、特にウェアラブルプロジェクトをより柔軟でポータブルにします。プロジェクトの実際のニーズに応じて、オンボードのPCBスタンプホールを通してボードを分割することもでき（分割後の寸法は25*39mmのみ）、より小さくし、重量も13gから10gに軽減されます！
<!-- 図に問題があります
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

拡張ボードとして、Seeed Studio Grove Base for XIAOはSeeed Studio XIAOから14のピンアウトをすべて引き出し、オンボードの電源スイッチと充電状態インジケーターライトにより、よりユーザーフレンドリーになっています。このシールドは、Seeed Studio XIAOにFlashを追加してメモリ空間を拡張する必要がある上級開発者のためにSPI-Flash接続パッドも確保しており、Seeed Studio XIAOにより多くの可能性を提供します。

Seeed Studio XIAOフォームファクターとして、すべてのSeeed Studio XIAOボードは[Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)と[Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)の両方をサポートします。ピン間にわずかな違いがあり、ピンアウトを参照すれば簡単に管理できます。

:::note
この製品にはSeeed Studio XIAOボードは含まれていません。必要な場合は[こちら](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)をクリックしてください。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

#### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### ピンアウト説明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## 機能

- オンボードリチウムバッテリー充電・管理機能
- Groveコネクタ（Grove IIC x 2、Grove UART x 1）、全14個のGPIOを引き出し
- コンパクトで分割可能な設計
- フラッシュSPIボンディングパッド予約済み
- オンボード電源スイッチと充電状態インジケーターライト

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 3.7Vリチウムバッテリー|
|負荷容量|800mA|
|充電電流|400mA（最大）|
|動作温度|-40°C～85°C|
|保存温度|-55°C～150°C|
|Groveインターフェース|I2C *2 / UART* 1|

## アプリケーション

- ウェアラブルデバイス
- ラピッドプロトタイピング
- Grove モジュールテスト
- 小型サイズが必要なプロジェクト

## サポートプラットフォーム

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
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 図に問題があります<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Grove-Doppler Radarの外部ヘッダーピン説明

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|ピン番号|信号名|ピン説明|
|---|---|----|
|1| DIV_OUT |BGT24LTR11からの分周器出力 |
|2|GND|グランド|
|3|VCC_5V_EXT|外部+5.0V入力電源ピン（最大=5.5V）|
|4|VTUNE|VCO周波数調整電圧|
|5|IFQ_HG|BGT24LTR11 Qチャンネルアナログ信号出力-第2ゲインステージ|
|6|IFI_HG|BGT24LTR11 Iチャンネルアナログ信号出力-第2ゲインステージ|
|7|PWM_OUT|CCU4を使用した外部ユーザー設定可能GPIO|
|8|OUT1|外部GPIOピン（ユーザー設定可能）|
|9|OUT2|外部GPIOピン（ユーザー設定可能）|

### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
USBケーブル、Doppler Radarインターフェースを Seeed Studio XIAO 拡張ボードインターフェースに優しく差し込んでください。そうしないとポートを損傷する可能性があります。
:::

- **ステップ 1.** Groveケーブルを使用してDoppler RadarをSeeed Studio XIAO拡張ボードに接続します。

- **ステップ 2.** USBケーブルを使用してSeeed Studio XIAOをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行すると、結果がArduino IDEの**シリアルモニター**の画面に表示されます。

### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar)をダウンロードします。

- **ステップ 2.** **Seeed_Arduino_DopplerRadar**ファイル全体をコピーして、Arduino IDEライブラリファイルに貼り付けます。

- **ステップ 3.** Arduino IDEで**BGT24LTR11_DETECTION_TARGET**ファイルを開きます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[How to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

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
  すべてが順調に進めば、**シリアルモニター**で以下のような結果を確認できます：
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>図 3</b>. <i> 物体が接近していない状態</i></figcaption>
  </figure>
</div>

レーダーに物体が接近したり通り過ぎたりすると、結果は以下のように変化します：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>図 3</b>. <i>物体が接近している状態</i></figcaption>
  </figure>
</div>

:::note
センサーが検出可能な最小速度精度は52cm/sで、これは0.52m/s、3.6km/h、2.23mphに相当します。さらに、getSpeed()関数によって返される結果は52cm/sの倍数であり、絶対値として表示されます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Seeed Studio Grove Base for XIAO の添付ファイル](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) レーダーモジュール通信プロトコル v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 データシート](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## プロジェクト

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
