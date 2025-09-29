---
description: リレーシールド V1.0
title: リレーシールド V1.0
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Relay_Shield_V1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---

name: リレーシールド V1.0
category: 廃止製品
bzurl:
oldwikiname: Relay-Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: <https://www.research.net/r/Relay-Shield_V1-0>
sku: 103030015
tags:
--- -->

リレーシールドは、4つの機械式リレーを備えたArduino互換のスマートモジュールで、高電圧を簡単に制御する方法を提供します。各チャンネルの最大スイッチング電力は35VDC 70Wです。外部9V DC電源を使用して、Arduino/SeeeduinoのデジタルIOで直接制御できます。XBeeフォームソケットと315/433MHz RFモジュールインターフェースを備えており、リレーシールドはリモート制御が可能で、ロボティクス、産業制御、スマートハウスなどで簡単に使用できます。
**注意:** シールドのピンがArduino UNOのUSBコネクタに接触しないように注意してください。
![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

## 特徴 ##

- Arduino/Seeeduino、Arduino Mega、Seeeduino Mega互換

- フォトカプラ回路付きの4つの機械式リレー

- 簡単に取り付けられるネジ穴付き

- 軽量

- 小型フォームファクタ

- ネイティブなArduino/Seeeduino互換性

- 拡張可能

## 仕様 ##

|  項目 | 最小 | 標準 | 最大 | 単位   |
|---|---|---|---|---|
|  **電圧** | 7 | 9 | 12 | VDC     |
|  **電流** | 8 | / | 250 | mA    |
|   **スイッチング電圧** | / | / | 35 | VDC   |
| **スイッチング電流** | / | / | 2 | A  |  
|   **周波数応答** | -1 | / | 1 | dB |  
|  **スイッチング電力** | / | / | 70 | W |
|  **リレー寿命** | 100,000 | / | / | サイクル  |
| **ESD接触放電** | ±4 | | | KV |
| **ESD空気放電** | ±8  |  |  | / |
|   **寸法** |   80.0x58.0x21.2 |   |   | mm  |
|   **正味重量** |  31±2 |   |   |  g |

## 注意事項 ##

**
[Arduino](/ja/Arduino)のUSBコネクタの上に電気テープを2層貼ってください。これにより、リレーシールドが接触するのを防ぎます。
35V DCを超える電圧で動作させないでください。
**

## インターフェース機能 ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg)

**高電圧接続用の4つのチャンネルグループ**

ターミナル1:

COM1- 共通ピン

NC1- 通常閉じている状態。D0が低に設定されている場合、NC1はCOM1と接続され、高に設定されると切断されます。

NO1- 通常開いている状態。D0が低に設定されている場合、NO1はCOM1と切断され、高に設定されると接続されます。

ターミナル2～4はターミナル1と同様ですが、制御ポートはD1～D3です。

**9V DC電源接続**

ターミナルとジャックの機能は内部で接続されているため、必要に応じてどちらかを選択できます。

**4つのオンボードリレーをIOで制御**

D0～D3の4ピンはArduinoのピン番号7～4に直接接続できるため、Arduinoで4つのリレーを簡単に制御できます。

**315/433MHz RF制御インターフェース**

GNDと5Vのピンと一緒に、これは315/433MHz RFエンコーダモジュール（Seeed Studioから別途購入可能）を使用して4つのリレーをリモートで制御するためのインターフェースです。

**Seeed RFBeeによる直接制御用XBeeフォームソケット**

4つのリレーは、RFBeeの4つのDIOポートを介して直接制御できます（Seeed Studioから別途購入可能）。

**RFBeeカスケード制御インターフェース**

RFBeeには12のDIOポートがあるため、1つのRFBeeを介してさらに2つのリレーシールド（8つのリレー）を制御できます。HUB1とHUB2はRFBeeのポート（4つを1グループとして）を引き出したもので、カスケードされたリレーシールドの315/433MHz RFインターフェースに接続されています。

## 使用方法 ##

### Arduino/Seeeduinoでの使用 ###

Relay Shieldは**Arduino**で直接制御することができます。

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg)

手順1. Relay Shieldを**Arduino** Duemilanove（または互換性のあるボード）に接続します。  
手順2. **Arduino**に9V DC電源を供給します。  
手順3. [サンプルコード](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)をダウンロードし、[Arduino IDE](https://arduino.cc/en/Main/Software)で実行します。

ArduinoをUSB接続で電源供給する場合でも、Relay Shieldに9V DC電源を供給する必要があります。そうしないとリレーが動作しません。

リレー1～4は、Arduinoのポート4～7を出力に設定し、`digitalWrite(portNumber, HIGH)`を実行することで動作させることができます。

COMxとNCx（通常閉）またはNOx（通常開）の接続を使用して、制御対象のデバイスに電力を供給します。

### [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)での使用 ###

#### 1つのRFBeeで1つの[Relay Shield](https://seeeddoc.github.io/Relay_Shield/)を制御する場合 ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

手順1. スレーブおよびマスターRFBee用の[Arduinoコード](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)をダウンロードします。  
手順2. スレーブRFBeeをRelay Shieldに接続します。  
手順3. Relay Shieldに9V DC電源を供給します。  
手順4. マスターRFBeeを[UartSBee](https://seeeddoc.github.io/UartSBee/)または他のアダプターで3.3V電源供給します。

#### 1つのRFBeeで3つのRelay Shieldを制御する場合 ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg)

手順1. スレーブおよびマスターRFBee用の[Arduinoコード](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)をダウンロードします。  
手順2. スレーブRFBeeをRelay Shieldに接続します。  
手順3. 2つ目および3つ目のRelay Shieldを母シールドに接続します。接続には315/433MHz RFピンをhub1およびhub2に接続します。（注：5V DCおよびGNDも接続する必要があります）。  
手順4. Relay Shieldに9V DC電源を供給します。（注：拡張されたRelay Shieldには追加の電源供給は不要です）。  
手順5. マスターRFBeeを[UartSBee](https://seeeddoc.github.io/UartSBee/)または他のアダプターで3.3V電源供給します。

### [315/433MHz RFモジュール](https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140)での使用 ###

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg)

手順1. レシーバーをRelay Shieldに接続し、はんだ付けします。  
手順2. Relay Shieldに9V DC電源を供給します。  
手順3. [送信機を制御](https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding)します。

## バージョントラッカー ##

## バージョントラッカー

| リビジョン | 説明 | リリース日 |
|---|---|---|
| Relay shield V1.0 | 初回公開リリース | 2010年3月31日 |
| Relay shield V1.1 | | |
| Relay shield V1.2 | | |
| Relay shield V1.3 | 1. 7805のパッケージ変更<br/>2. 端子がArduinoのUSBコネクタに触れないように変更<br/>3. Arduino使用時のマルチ電源供給に対する保護を追加<br/>4. リレーに接続される配線の厚さを追加<br/>5. シルクスクリーンを基板の裏面に変更<br/>6. オープンソースハードウェアのロゴを追加 | 2011年12月1日 |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[EAGLE]**  [Relay Shield Eagle ファイル](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip)

- **[PDF]**  [Relay_shield 回路図](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf)

- **[PDF]**  [Relay shield PCB](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf)

- **[CODE]**  [Arduino 用 Relay Shield デモコード](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)

- **[CODE]**  [RFBee で RelayShield を制御する Arduino コード](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>