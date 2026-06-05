---
title: Grove-Doppler-Radar
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Doppler-Radar/
slug: /Grove-Doppler-Radar
sku: 109020021
last_update:
  date: 05/28/2026
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Grove-Doppler-Radar/
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

物体までの距離を計算したり、動きが存在するかどうかを検出できるシステムを、どのように構築しますか？通常、距離測定には超音波センサやLiDARセンサを、動きの検出にはPIRモーションセンサを使用します。もし、これらすべての機能をより高精度に実現でき、さらに移動物体の速度検出や物体の角度検出といった機能までこなせるオールインワンモジュールがあると言ったらどうでしょう。信じられますか？私たちはモーションセンシング用途でこれら従来型モジュールを使うことに飽き、新しい技術を統合した、より優れたソリューションを皆さんに届けたいと考えました。そうして……Grove の歴史上初めて、レーダー技術に基づく Grove モジュールをお届けできることを、とても嬉しく思います！

これが Grove – Doppler Radar です。

Grove – Doppler Radar は、24GHz レーダートランシーバである BGT24LTR11 シリコンゲルマニウム MMIC をベースにしています。Arm® Cortex®-M0 を搭載した XMC1302 MCU によって駆動されます。コンパクトなパッケージで、非常に低消費電力で動作し、高精度な測定を提供します。このモジュールの高い周波数により、物体を高いレベルで透過できるため、設置時にモジュールを外部に露出させる必要はなく、物体の背後に配置することができます。これはセキュリティシステムにおいて非常に有用です。また、高温、粉じん、雨などの過酷な気象条件下でも動作可能です。

## 特長

- Grove ファミリー初のレーダーベースセンサ
- コンパクトサイズで設置が容易
- 軽量設計で UAV アプリケーションに最適
- 長時間使用に適した低消費電力
- 高精度測定のための 24GHz トランシーバ MMIC
- 電磁波を用いた高速応答
- ESD ストライクによるシステム障害を防ぐ ESD 保護
- 高い透過性により、物体の背後に設置可能
- 過酷な気象条件（温度、光、粉じん、雨）下でも動作を維持

## 仕様

|項目|値|
|---|---|
|MMIC |BGT24LTR11|
|MCU |XMC1302 Arm® Cortex®-M0|
|送信周波数 |最小: 24GHz|
|標準|21.125GHz|
|最大|24.25GHz|
|出力電力 (EIRP) |7dBm @ 25°C|
|更新時間| 300ms|
|通信インターフェース |UART (115200)|
|検出距離 |10m @ 0dBsm|
|標準検出フィールド|65° / 水平 (-6dB); 22° / 垂直 (-6dB)|
|電源電圧 |3.3-5V|
|重量|5g|

## 応用例

- スマートホーム
- スマートビルディング
- 自動ドア
- 照明制御
- 産業用ロボット
- 侵入者警報システム
- UAV

### このモジュールでのドップラーレーダー技術の動作原理

ドップラーレーダーは、送信機（TX アンテナ）から、正確に制御された周波数の電磁放射波を移動する物体に向けて送信することで動作します。電磁放射波が物体に接触すると、その波は受信機（RX アンテナ）に向かって戻ってきます。しかし、波が移動する物体で反射されたとき、その波の周波数は、元々送信されたときの周波数とは異なるものになります。そして、この周波数の変化を利用して、移動物体の速度を計算することができます。

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

#### 必要な部材

| Seeeduino XIAO | Grove-Doppler-Radar| XIAO Expansion Board|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Coming SOON](https://www.seeedstudio.com/)|

#### ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### 外部ヘッダーピンの説明

|ピン番号|信号名|ピンの説明|
|---|---|----|
|1| DIV_OUT |BGT24LTR11 からの周波数分周器出力 |
|2|GND|グラウンド|
|3|VCC_5V_EXT|外部 +5.0V 入力電源ピン（最大=5.5V）|
|4|VTUNE|VCO 周波数調整電圧|
|5|IFQ_HG|BGT24LTR11 Q チャネル・アナログ信号出力 - 第 2 利得段|
|6|IFI_HG|BGT24LTR11 I チャネル・アナログ信号出力 - 第 2 利得段|
|7|PWM_OUT|CCU4 を備えた外部ユーザー設定可能 GPIO|
|8|OUT1|外部 GPIO ピン（ユーザー設定可能）|
|9|OUT2|外部 GPIO ピン（ユーザー設定可能）|

#### ハードウェア接続

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    USB ケーブルを接続し、Doppler Radar インターフェースを Seeeduino XIAO 拡張ボードのインターフェースに優しく挿し込んでください。そうしないとポートを破損するおそれがあります。

- **ステップ 1.** Doppler Radar を Grove ケーブルで Seeeduino XIAO 拡張ボードに接続します。

- **ステップ 2.** Seeeduino XIAO を USB ケーブルで PC に接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェアの項目を参照してください。

- **ステップ 4.** コードを実行すると、結果が Arduino IDE の **Serial Monitor** の画面に表示されます。

:::

#### ソフトウェア

:::tip
        Arduino を初めて扱う場合は、作業を始める前に [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)をダウンロードします。

- **ステップ 2.** **Seeed_Arduino_DopplerRadar** フォルダ全体をコピーし、Arduino IDE のライブラリフォルダに貼り付けます。

- **ステップ 3.** Arduino IDE で **BGT24LTR11_DETECTION_TARGET** ファイルを開きます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[How to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

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
  すべてがうまくいけば、Arduino IDE の **Serial Monitor** で次のような結果を確認できます。
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図 3</b>. <i> 物体が接近していない状態</i></figcaption>
</figure>
</div>

また、レーダーに物体が接近したり通過したりすると、結果は次のように変化します。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図 3</b>. <i>物体が接近している状態</i></figcaption>
</figure>
</div>

## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## 技術サポート & 製品ディスカッション

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

弊社製品をお選びいただきありがとうございます。弊社は、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様それぞれのご希望やニーズにお応えするため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
