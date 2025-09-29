---
description: RFbee V1.1 - ワイヤレス Arduino 互換ノード
title: RFbee V1.1 - ワイヤレス Arduino 互換ノード
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RFbee_V1.1-Wireless_Arduino_compatible_node
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/rfbee1.jpg)

RFBeeは、デバイス間で簡単かつ柔軟なワイヤレスデータ伝送を提供するRFモジュールです。これは、完全に機能する**Arduino**として動作するAVR ATmega168をベースにしており、TI CC1101 RFトランシーバーにSPIを介して接続されています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/rfbee-v11-wireless-arduino-compatible-node-p-614.html)

バージョントラッカー
-------------------

| リビジョン | 説明                     | リリース日       |
|------------|--------------------------|------------------|
| v1.0       | 初回リリース             | 2010年3月5日    |
| v1.1       | 改訂版リリース           | 2010年8月27日   |
| v1.2       | MCUをATmega328に変更     | 2015年10月10日  |

特徴
--------

-   範囲: 屋内/都市部: 最大50m; 屋外見通し: 最大120m
-   受信感度: -95dBm
-   RFデータ伝送速度: 4,800bps; 76,800bps
-   動作周波数: 868MHz & 915MHz
-   通信タイプ: ポイントツーポイント、またはポイントツーマルチポイント
-   使いやすいシリアルインターフェースと豊富な拡張可能なポート
-   使いやすいATコマンド: 動作モード、シリアルボーレートなどの設定
-   オープンソースのハードウェアとファームウェア
-   Xbeeと互換性のあるソケットで、Xbeeソケットに差し込んで迅速に交換可能

<div class="admonition note">
<p class="admonition-title">注意</p>
Rx、Tx、VCC、GNDピンのみがXbeeと同一です。RFbeeはXbeeと通信できないため、RFbeeはワイヤレス接続の両端で使用する必要があります。
</div>

アプリケーションアイデア
-------------------

-   強力なRF制御
-   WSN（ワイヤレスセンサーネットワーク）の簡単な実装

仕様
--------------

| 仕様                     | 値                                                        |
|--------------------------|----------------------------------------------------------|
| マイクロプロセッサ       | ATmega168(バージョン < V1.2), ATmega328(バージョン >= 1.2) |
| PCBサイズ                | 24.38mmx32.94mmx0.8mm                                    |
| インジケータ             | なし                                                     |
| 電源供給                 | 3.3V                                                     |
| IO数                     | 9                                                        |
| ADC入力                 | 7(6はIOと多重化)                                         |
| プログラムインターフェース | USB                                                      |
| 接続性                   | XBeeと互換性のあるソケット                               |
| 通信プロトコル           | Uart(TTL)                                                |
| 動作周波数帯域           | ISM 868MHz & 915MHz                                      |
| 外形寸法                 | 24.38mmx32.94mmx15mm                                     |

### 電気的特性

| 仕様                     | 最小 | 標準 | 最大 | 単位 |
|--------------------------|------|------|------|------|
| 入力電圧                 | 3.0  | 3.3  | 3.6  | VDC  |
| 送信電流                 |      | 34.5 |      | mA   |
| 受信電流                 |      | 18.1 |      | mA   |
| 待機電流                 |      | 5.2  |      | mA   |
| 電源オフ電流             |      | &lt;0.3 |      | mA   |
| 動作温度                 | -50  |      | 125  | °C   |

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-pin.jpg)

| ピン     |  #  | パッドタイプ     | 説明                              | Arduinoピン番号           |
|----------|-----|------------------|-----------------------------------|---------------------------|
| 3V3      | 1   | 電源入力         | VCC, +3.3V                       | -                         |
| TX       | 2   | 出力             | Uart Txポート                    | 1(DIO)                    |
| RX       | 3   | 入力             | Uart Rxポート                    | 0(DIO)                    |
| PD4      | 4   | 入力/出力        | ATmega168 PD4                    | 4(DIO)                    |
|  !RESET  | 5   | 入力             | ATmega168リセットポート          |                           |
| PB1      | 6   | 入力/出力        | ATmega168 PB1                    | 9(DIO)                    |
| PB0      | 7   | 入力/出力        | ATmega168 PB0                    | 8(DIO)                    |
| PD7      | 8   | 入力/出力        | ATmega168 PD7                    | 7(DIO)                    |
|  DTR     | 9   | 入力             | ATmega168のプログラミング用       | -                         |
| GND      | 10  | GND              | GND                              | -                         |
| PC3      | 11  | 入力/出力        | ATmega168 PC3                    | 3(アナログ入力)/17(DIO)   |
| PC2      | 12  | 入力/出力        | ATmega168 PC2                    | 2(アナログ入力)/16(DIO)   |
| PC1      | 13  | 入力/出力        | ATmega168 PC1                    | 1(アナログ入力)/15(DIO)   |
| VREF     | 14  | 入力             | ATmega168 AREFポート             | -                         |
| PC0      | 15  | 入力/出力        | ATmega168 PC0                    | 0(アナログ入力)/14(DIO)   |
| ADC7     | 16  | 入力             | ATmega168 ADC7                   | 7(アナログ入力)           |
| PD5      | 17  | 入力/出力        | ATmega168 PD5                    | 5(DIO)                    |
| PD6      | 18  | 入力/出力        | ATmega168 PD6                    | 6(DIO)                    |
| PC5      | 19  | 入力/出力        | ATmega168 PC5                    | 5(アナログ入力)/19(DIO)   |
| PC4      | 20  | 入力/出力        | ATmega168 PC4                    | 4(アナログ入力)/18(DIO)   |

使用方法
-----

### ハードウェアのインストール

RFBeeは以下のように接続できます:

-   UartSBデバイスを使用してUSB経由でPCに接続。
-   XbeeShieldを介してSeeeduino（またはArduino）に接続。
-   Uartポートを持つ他のデバイスに接続。

<div class="admonition note">
<p class="admonition-title">注意</p>
UartSBeeデバイスとXbeeShieldは別売りです。
</div>

#### 図1: UartSBeeを使用したUSB接続（以下の写真は旧バージョンのUartSBeeを使用して示されています）

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure1.jpg)

#### 図2: XbeeShield（バージョン1）を介したSeeduino

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure2.jpg)

#### Uartを使用する任意のデバイス

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure3.jpg)

### 例

以下は、www.SeeedStudio.comのRFBeeトランシーバーをwww.rf-explorer.comのRF Explorerスペクトラムアナライザーと一緒に使用する方法に関するチュートリアルです。

#### RF Explorerで監視されるRFBee

RFBeeは、いくつかの簡単なAT ASCIIコマンド文字列を受け入れて基本的な設定を行うことができる便利なデバイスです。デジタルRF送信を試すのに理想的なツールです。

このサンプルコードはパブリックドメインであり、[こちら](http://micro.arocholl.com/download/RFBeeTutorial/Test_RFBee.pde)から入手可能です。Arduino IDE v0022でテストされています。

|                                                                              |                                                                              |                                                                              |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam1.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam2.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam3.jpg) |

##### 必要条件

RFBeeをホストするためにSeeeduino Stalker v02bを使用することができます。RFBeeをXBeeスロットに差し込むだけです。また、スケッチをアップロードするためにStalkerをPCに接続する方法が必要です。個人的にはCP2102 USBブリッジを使用しましたが、Seeedが推奨するUartSBeeを含む他のUSBブリッジも使用できます。

また、Arduino互換ボードを使用して同じことを行うこともできますが、RFBeeをCPUのRX/TXにXBee 2mmコネクタを使用して接続する必要があります。このコネクタは地元の店で入手するのが難しい場合があります。

最後に、Stalkerのポート2をGNDに、ポート3をGNDに接続するためのジャンパーケーブルが2本必要です。これらを簡単なスイッチとして使用して、RFBeeをさまざまな方法で設定します。この仕組みをよりよく理解するために、簡単なスケッチコードを確認し、独自の変更を加えてください。

RFExplorerおよびRFBeeのユーザーマニュアルにある程度精通している必要があります。そうでない場合、一部の手順が明確でないかもしれません。

##### RFBeeの設定

Stalkerにスクリプトをアップロードした後、ユニットの電源を完全にオフにして、StalkerとRFBeeの両方のATMegaが同時にリセットされ、クリーンな状態から開始するようにします。

ユニットの電源を再投入すると、StalkerのLEDが6回点滅した後に送信が開始されます。

RFExplorerは受信した電力と周波数を表示します。アンテナの向きを調整して、最適な電力応答を得てください。このチュートリアルでは915MHzでRFBeeを使用しますが、868MHzでも同等の結果が得られます。スケッチコードを確認し、RF Explorerがそのバンドにある場合は868MHz用にコード化された数行をコメント解除してください。

**詳細については、こちらをご覧ください** [micro.arocholl.com](http://micro.arocholl.com/index.php?option=com_content&view=article&id=53:tutorial-how-to-use-rf-explorer-to-monitor-a-rfbee&catid=40:article&Itemid=61)。

サポート
-------

### ファームウェアの更新方法

以下の手順でArduino IDEを使用してRFBeeのファームウェアを更新できます。この手順では、RFBeeをPCに接続する最も簡単な方法であるUartSBを使用することを前提としています。接続方法の詳細については、ハードウェアインストールのセクションを参照してください。

1. RFBeeをUartSBに接続し、スイッチをXBeeおよび3.3vに移動させてから、USBケーブルを介してコンピュータに接続します。
2. RFBeeファームウェアのソースコードをArduinoスケッチフォルダにダウンロードします。
3. Arduino IDEを開き、RFBee_vx_xプロジェクトを開きます。その後、[ツール]->[ボード]->[Arduino ProまたはPro Mini (3.3v, 8MHz) w/ATmega168]（バージョン>= V1.2の場合はATmega328）を選択します。ツールメニューから正しいシリアルポートを選択します。これでRFBeeファームウェアをアップロードできます。
4. 更新中に失われた場合は、RFBeeの設定変更を再適用します。
5. RFBeeはArduinoとして単独で動作できるため、必要に応じてファームウェアを追加または変更できます。

**RFBeeファームウェア:** [http://code.google.com/p/rfbee/downloads/list](http://code.google.com/p/rfbee/downloads/list)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [RFBee ユーザーマニュアル](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/rfbee-manual.pdf)
-   [Arduino 1.0 用 RFbee ファームウェア](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/RFbee_for_arduino1.0.zip)
-   [RFbee ファームウェア 1.1 (最新)](https://github.com/Seeed-Studio/RFBee)
-   [EAGLE ファイル形式の回路図とレイアウト](https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip)
-   [フォーラム](https://forum.seeedstudio.com/viewtopic.php?f=10&t=682&sid=7a9b1bed4f9fd10a9b1003ca1e48e756)

<!-- この Markdown ファイルは https://wiki.seeedstudio.com/ja/RFbee_V1.1-Wireless_Arduino_compatible_node/ から作成されました -->

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