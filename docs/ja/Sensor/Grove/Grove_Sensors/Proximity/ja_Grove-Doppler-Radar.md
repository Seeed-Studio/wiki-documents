---
title: Grove-Doppler-Radar
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Doppler-Radar/
slug: /ja/Grove-Doppler-Radar
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)



<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>



物体までの距離を計算したり、動きがあるかどうかを検出するシステムをどのように構築しますか？通常、距離測定には超音波センサーやLiDARセンサーを使用し、動きの検出にはPIRモーションセンサーを使用します。しかし、これらすべての機能をより正確に実行し、さらに移動物体の速度検出や物体の角度検出などの機能も実行できるオールインワンモジュールがあるとしたらどうでしょうか？信じられますか？私たちはこれらの従来のモジュールを動き検知アプリケーションで使用することに疲れており、新しい技術を統合したより良いソリューションを提供したいと考えました。そして…Groveの歴史上初めて、レーダー技術に基づいたGroveモジュールをお届けすることに非常に興奮しています！

これがGrove – Doppler Radarです。

Grove – Doppler Radarは、BGT24LTR11シリコンゲルマニウムMMICに基づいており、24GHzのレーダートランシーバーです。Arm® Cortex®-M0に基づいたXMC1302 MCUによって駆動されます。このモジュールはコンパクトなパッケージで提供され、非常に低消費電力で高精度の測定を実現します。このモジュールの高周波数により、物体を通して高い浸透力を持ち、設置時に外部に露出する必要がなく、物体の背後に配置することができます。これにより、セキュリティシステムで非常に役立ちます。また、高温、ほこり、雨などの厳しい気象条件下でも動作可能です。

## 特徴

- Groveファミリー初のレーダーセンサー
- 簡単に設置できるコンパクトサイズ
- 軽量設計でUAVアプリケーションに適応
- 長時間使用可能な低消費電力
- 高精度測定を可能にする24GHzトランシーバーMMIC
- 電磁波を使用した高速応答
- ESD保護によりESDストライクによるシステム障害を防止
- 高い浸透力により物体の背後に設置可能
- 厳しい気象条件（温度、光、ほこり、雨）でも動作を維持

## 仕様
|項目|値|
|---|---|
|MMIC	|BGT24LTR11|
|MCU	|XMC1302 Arm® Cortex®-M0|
|送信周波数	|最小: 24GHz|
|標準|21.125GHz|
|最大|24.25GHz|
|出力電力 (EIRP)	|7dBm @ 25°C|
|更新時間|	300ms|
|通信インターフェース	|UART (115200)|
|検出距離	|10m @ 0dBsm|
|標準検出フィールド|65° / 水平方向 (-6dB); 22° / 垂直方向 (-6dB)|
|供給電圧	|3.3-5V|
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

ドップラーレーダーは、送信機（TXアンテナ）から移動物体に向けて正確な周波数の電磁放射波を送信することで動作します。電磁放射波が物体に接触すると、受信機（RXアンテナ）に向かって戻ってきます。しかし、移動物体から反射された波は、放射された元の周波数とは異なる周波数を持つようになります。この周波数の変化を使用して、移動物体の速度を計算することができます。

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## 対応プラットフォーム
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

#### 必要な材料

| Seeeduino XIAO | Grove-Doppler-Radar| XIAO Expansion Board|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[近日発売](https://www.seeedstudio.com/)|

#### ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### 外部ヘッダー - ピン説明

|ピン番号|信号名|ピン説明|
|---|---|----|
|1| DIV_OUT	|BGT24LTR11からの周波数分周出力 |
|2|GND|グランド|
|3|VCC_5V_EXT|外部+5.0V入力電源ピン（最大=5.5V）|
|4|VTUNE|VCO周波数調整電圧|
|5|IFQ_HG|BGT24LTR11 Qチャンネル - アナログ信号出力 - 第2ゲインステージ|
|6|IFI_HG|BGT24LTR11 Iチャンネル - アナログ信号出力 - 第2ゲインステージ|
|7|PWM_OUT|CCU4を使用した外部ユーザー設定可能GPIO|
|8|OUT1|外部GPIOピン（ユーザー設定可能）|
|9|OUT2|外部GPIOピン（ユーザー設定可能）|

#### ハードウェア接続

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    USBケーブル、ドップラーレーダーインターフェースをSeeeduino XIAO拡張ボードインターフェースに慎重に接続してください。そうしないとポートが損傷する可能性があります。

- **ステップ 1.** Groveケーブルを使用してドップラーレーダーをSeeeduino XIAO拡張ボードに接続します。

- **ステップ 2.** USBケーブルを使用してSeeeduino XIAOをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行し、結果はArduino IDEの**シリアルモニター**画面に表示されます。
:::

#### ソフトウェア

:::tip
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)をダウンロードします。

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
    // 初回実行時にセットアップコードを記述
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
    // 繰り返し実行されるメインコード
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
		すべてが正常に動作すれば、**シリアルモニター**で以下のような結果を見ることができます:
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図3</b>. <i> オブジェクトが接近していない場合</i></figcaption>
</figure>
</div>

レーダーにオブジェクトが接近または通過すると、結果は以下のように変化します:

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図3</b>. <i>オブジェクトが接近している場合</i></figcaption>
</figure>
</div>

:::note
    センサーが検出可能な最小速度精度は52cm/sであり、これは0.52m/s、3.6km/h、2.23mphに相当します。さらに、関数getSpeed()によって返される結果は52cm/sの倍数であり、それに応じて絶対値となります。
:::

## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>