---
description: Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）
title: Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）は、LoRa-E5 STM32WLE5JC を搭載し、ARM Cortex M4 超低消費電力 MCU コアと LoRa SX126x によって駆動される無線モジュールです。このモジュールは、EU868 & US915 周波数で LoRa および LoRaWAN プロトコルをサポートし、(G)FSK、BPSK、(G)MSK、LoRa 変調を提供します。Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）は、ボード上の Grove コネクタを使用して簡単に接続することで、開発ボードに超長距離伝送機能を付与することができます。

旧バージョン [Grove - LoRa Radio](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html)（[RFM95 超長距離トランシーバーモジュール](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html) によって駆動）をアップグレードしたものとして、Grove LoRa-E5 は [LoRa-E5 STM32WLE5JC モジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) を組み込んだ高性能で使いやすい無線 LoRa モジュールであり、LoRaWAN プロトコルをサポートしています。

LoRa-E5 LoRaWAN STM32WLE5JC モジュールは、Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）に統合された主要な機能部分です。このモジュールは、ARM Cortex M4 超低消費電力 MCU コアと LoRa SX126x を組み込んだ LoRaWAN モジュールであり、世界初の LoRa RF と MCU チップを1つの小型モジュールに統合したものです。(G)FSK、BPSK、(G)MSK、LoRa 変調をサポートし、FCC および CE 認証を取得しています。（[LoRa-E5 wiki](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) で LoRa-E5 の詳細を学ぶ）

LoRa-E5 と RFM95 チップの比較:
![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

Wio Terminal LoRaWan シャーシ（アンテナ内蔵 LoRa-E5 および GNSS、EU868/US915）を開発ボードに接続することで、UART 接続を介して AT コマンドを使用して LoRa-E5 を簡単に操作および制御することができます。Grove LoRa-E5 は、IoT デバイスの開発、テスト、そしてスマート農業、スマートオフィス、スマート産業などの長距離、超低消費電力 IoT シナリオにおいて優れた選択肢となります。このモジュールは、-40℃ ~ 85℃ の広い動作温度範囲、高感度（-136 dBm ～ -137 dBm）、および 10 dBm ～ 22 dBm の出力電力を備えた産業標準で設計されています。

## 特徴

- LoRa-E5 (STM32WLE5JC) 搭載
- EU868/US915周波数帯でLoRaWANプロトコルをサポート
- 最大10kmの超長距離送信範囲（開放空間での理想値）
- UART接続を介したATコマンドによる簡単な制御
- プラグアンドプレイのGroveインターフェースによる迅速なプロトタイピング
- 超低消費電力と高性能

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Size-08.png)

1. LoRa-E5 STM32WLE5JC ([データシート](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))
2. MHF IPEXコネクタ
3. ワイヤアンテナ
4. Groveコネクタ
5. LEDインジケータ

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 仕様

|                    | 一般的なパラメータ    |
|--------------------|-----------------------|
| 電圧供給:          | 3.3V/5V               |
| 出力電力:          | 最大+20 dBm（3.3V時） |
| 動作周波数         | 868/915MHz            |
| プロトコル         | LoRaWAN               |
| 感度               | -116.5dBm ~ -136dBm   |
| 変調方式           | LoRa, (G)FSK, (G)MSK, BPSK |
| 電流               | スリープモードでわずか60uA |
| サイズ             | 20*40mm               |
| 動作温度           | -40℃ ~ 85℃           |

## 部品リスト

|        製品         |        数量         |
|-----------------------|----------------------|
| Wio Terminal LoRaWanシャーシ（アンテナ内蔵LoRa-E5およびGNSS、EU868/US915）  | *1 |
| アンテナ | *1  |

## 応用例

- LoRaWAN GPSトラッカー
- LoRaWAN フィールドテスター
- スマート農業
- スマートシティ
- スマート工場
- Wio Terminalを使用したLoRaデバイスの迅速なプロトタイピング
- 長距離無線通信アプリケーションの開発
- LoRaおよびLoRaWANアプリケーションの学習と研究

# はじめに

**必要な材料**

| Wio Terminal | LoRaWan シャーシ | バッテリーシャーシ |
|------------------|-----------------|-------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/Wio-Terminal-Wiki.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-14.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/45.png)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)|

# プロジェクト 1: WioTerminal LoRaWAN ゲートウェイテスター

## 概要

LoRaWAN ゲートウェイテスターは、多目的なポータブルツールで、LoRaWAN ゲートウェイのカバレッジを検出できます。その後、信号が正常な範囲内にあるかどうかを知らせます。このツールは、LoRaWAN ネットワークの展開を容易にするために設計されており、LoRaWAN ゲートウェイの最適な設置場所を決定するのに役立ちます。

このツールを開発する前に、LoRa テスター市場を調査しましたが、価格は通常 200 ドルから 500 ドルの範囲であり、一部の製品にはネットワーク信号、現在時刻、ステータス、その他の重要な情報を報告するバックエンドアプリケーションが欠けていることがわかりました。そのため、より多機能で低コストのバージョンを自分たちで作ることにしました。このプロジェクトは [**Paul Pinault**](https://github.com/disk91/WioLoRaWANFieldTester) の [**WioLoRaWANFieldTester**](https://www.disk91.com/2021/technology/lora/low-cost-lorawan-field-tester/) レポートに基づいています。彼のリンクにアクセスできることを光栄に思い、彼の貢献に感謝します。Paul Pinault の洗練された Wio Terminal 用 UI を LoRa-E5 と GNSS モジュールと組み合わせて、LoRaWAN ゲートウェイテスターの機能を実現しました。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%9C%BA%E6%99%AF%E5%9B%BE2.jpg" /></div>

## 特徴

- 操作モードの選択メニュー（電源制御、SF、テスト回数入力など）
- 各種ネットワークセグメントに対応（EU868、US915、US915HYBRID、AS923、KR920、IN865）
- LoRa デバイス接続およびアップリンク・ダウンリンクのステータスを表示
- 過去のテスト結果のバックアップ
- RSSI と SNR のグラフィカル表示
- アップリンクおよびダウンリンク回数、パケット損失の可能性を表示
- GPS 位置情報の報告、現在時刻、衛星数を表示
- LoRa デバイス情報を表示（DevEui、APPEui、Appkey、ファームウェアバージョンなど）
- DevEui、APPEui、Appkey の定義

## ハードウェア

このプロジェクトで使用されるハードウェアは、市場のほとんどの製品よりも手頃な価格で、総コストは 100 ドル未満です。

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Wio Terminal シャーシ - バッテリー (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
- [**Wio Terminal シャーシ - LoRa-E5 と GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 使用方法

### Wio Terminal の説明

LoRaWAN Gateway Testerは基本的に、定期的にゲートウェイにフレームを送信し、その後サーバーに転送します（アップリンク）。その後、ACKステータスを待機します。LoRaテスターが応答を受信しない場合、設定された回数に達するまで同じフレームを送信し続けます。一方、ACKはLoRaテスターに応答（ダウンリンク）を返し、メッセージがバックエンドサービスに転送されたことを示します。この情報は最終的にWio Terminalの画面に表示されます。
このプロジェクトはArduinoプラットフォームに基づいているため、Arduino IDEとさまざまなArduinoライブラリを使用します。Wio Terminalを初めて使用する場合は、こちらのガイドを参考にしてください：[**Wio Terminal の使い方**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)。

必要なライブラリ:

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**LovyanGFX**](https://github.com/lovyan03/LovyanGFX)

### 注意

コードをアップロードする際は、スレーブモードを選択してください。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

### TheThingsNetwork コンソール設定

このプロジェクトでは、[**TheThingsNetwork**](https://www.thethingsnetwork.org) プラットフォームでLoRaテスターをテストします。以下に手順を示します：

ステップ 1: [**TTNウェブサイト**](https://www.thethingsnetwork.org) にアクセスしてアカウントを作成し、ゲートウェイに移動してデバイスの設定を開始します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png" /></div>

ステップ 2: ゲートウェイデバイスを追加します：

- オーナー
- ゲートウェイID
- ゲートウェイEUI
- ゲートウェイ名

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png" /></div>

ステップ 3: アプリケーションを追加します：

- オーナー
- アプリケーションID
- アプリケーション名

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png" /></div>

ステップ 4：LoRaノードを追加します：

- ブランド（Sense CAPを選択）
- モデル（LoRa-E5を選択）
- ハードウェアバージョン（デフォルト）
- ファームウェアバージョン（デフォルト）
- プロファイル（地域はあなたの所在地に応じて設定）
- 周波数プラン
- AppEUI
- DEVEUI
- AppKey
- エンドデバイスID

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png" /></div>

ステップ 5: データをデコードするコードを追加します：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png" /></div>

```cpp
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.latitude   = (bytes[3] | (bytes[2]<<8) | (bytes[1]<<16)  | (bytes[0]<<24)) /1000000;
    decoded.longitude  = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.altitude   = (bytes[9] | (bytes[8]<<8));
    decoded.satellites = bytes[9];
  }
 
  return decoded;
}
```

ステップ 5: TheThingsNetworkで結果を確認します

ゲートウェイに移動し、「ライブデータ」をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_data.png" /></div>

### Wio Terminal の説明

各LoRaデバイスには固有のシリアル番号があります。LoRaデバイスをWio Terminalに接続すると、最初のページにDEVEUI、APPEUI、APPKEYが表示されます。サーバーにLoRa IDとゲートウェイIDを入力する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/rola_tester_ID.png" /></div>

RSSIとSNRデータがあり、ACK応答を受信した後に信号とSNRバーおよびパケット損失が表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/RSSI.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/SNR.png" /></div>

このデバイスにはGPS機能もありますが、衛星の収集に影響を与える可能性があるため、閉鎖空間での使用は推奨されません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/GPS.png" /></div>

## 回路図

PCBとコンポーネントの詳細については、ボードディレクトリを確認してください。  
以下は、DiY実装用に簡略化された回路図です。  
詳細が必要な場合は、ファイルリストを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/LORA_PCB.png" /></div>

## エンクロージャ

3Dプリントされたエンクロージャは、PCBA WioTerminal Chassis HおよびPCBファイルのファイルリストにあります。すべての設計が含まれています。また、FreeCadのソースファイルも含まれているため、必要に応じて修正や改善が可能です。

3Dプリントの動作は以下の通りです：

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/feature.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/preview.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/back.png"/></div>

# プロジェクト 2: WioTerminalを使用したLoRaノード - IoTスマートガーデンモニター

## 概要

IoTスマートガーデンモニターは、Wio Terminalシャーシ-LoRa-E5およびGNSSをIoTデバイスとして使用します。このデバイスは基本的にフレームをゲートウェイに送信し、サーバーに転送します（アップリンク）。この場合、GPS、温度、湿度などのデータをフレームにまとめてアップロードすることができます。また、必要に応じて他のセンサーのデータを追加することも可能です。ACKがLoRaデバイスに応答（ダウンリンク）を返すと、接続状態が「接続済み」に切り替わり、Wio Terminalに表示されます。これにより、メッセージがバックエンドサービスに渡され、TheThingsNetworkプラットフォームでデータを確認できます。他のプラットフォームも使用可能ですが、前提としてそのプラットフォームがWio Terminalシャーシ-LoRa-E5およびGNSSをサポートしている必要があります。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%B8%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E5%9C%BA%E6%99%AF%E5%9B%BE.jpg"/></div>

## 特徴

- LoRaデバイスは、DevEui、APPEui、Appkeyを最初のページに表示できます。
- 現在の温度、湿度、現在時刻を表示できます。
- 経度、緯度、衛星数を表示します。
- デバイスとTTNの接続状態を表示します。

## ハードウェア

このデモでは、以下のデバイスリストが必要です：

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminalシャーシ - バッテリー (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

- [**Grove - 温度＆湿度センサー (DHT11)**](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)

- [**Wio Terminalシャーシ - LoRa-E5およびGNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 使用方法

このプロジェクトはArduinoプラットフォームに基づいており、Arduino IDEとさまざまなArduinoライブラリを使用します。Wio Terminalを初めて使用する場合は、[**Wio Terminalのクイックスタートガイド**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)をご覧ください。

必要なライブラリ：

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**Grove_Temperature_And_Humidity_Sensor**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

### TheThingsNetworkコンソール設定

このプロジェクトでは、[**TheThingsNetwork**](https://www.thethingsnetwork.org)プラットフォームでLoRaテスターをテストします。手順は以下の通りです：

ステップ1：[**TTNウェブサイト**](https://www.thethingsnetwork.org)にアクセスしてアカウントを作成し、ゲートウェイに移動してデバイスを設定します。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png"/></div>

ステップ2：ゲートウェイデバイスを追加：

- 所有者
- ゲートウェイID
- ゲートウェイEUI
- ゲートウェイ名

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png"/></div>

ステップ3：アプリケーションを追加：

- 所有者
- アプリケーションID
- アプリケーション名

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png"/></div>

ステップ4：LoRaノードを追加：

- ブランド（Sense CAPを選択）
- モデル（LoRa-E5を選択）
- ハードウェアバージョン（デフォルト）
- ファームウェアバージョン（デフォルト）
- プロファイル（地域は所在地に応じて設定）
- 周波数プラン
- AppEUI
- DEVEUI
- AppKey
- エンドデバイスID

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png"/></div>

ステップ5：データをデコードするコードを追加：

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png"/></div>

```cpp
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
    decoded.latitude   = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.longitude  = (bytes[11] | (bytes[10]<<8) | (bytes[9]<<16)  | (bytes[8]<<24)) /1000000;
    decoded.altitude   = (bytes[15] | (bytes[14]<<8) | (bytes[13]<<16) | (bytes[12]<<24))/100;
    decoded.satellites = bytes[16];
  }
 
  return decoded;
}
 
```

ステップ5：TheThingsNetworkで結果を確認

ゲートウェイに移動し、「ライブデータ」をクリックします。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_dataTEMP1.png"/></div>

### 注意

コードをアップロードする際は、スレーブモードを選択してください。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

各LoRaデバイスには固有のシリアル番号があります。LoRaデバイスをWio Terminalに接続すると、最初のページにdeveui、appeui、appkeyが表示されます。この情報を使用して、サーバーにLoRa IDとゲートウェイIDを入力する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/temp_ID.png" /></div>

2ページ目には、温度、湿度、現在時刻、経度、緯度、衛星数が表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TEMP_GPS_DATA.png" /></div>

## PlatformIO

PlatformIOコードも提供しています。

[IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor](https://github.com/IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor)

[IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester](https://github.com/IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester)

## リソース

データシート:

- [Wio Terminal Chassis - LoRa-E5 and GNSS v1.2.zip](http://files.seeedstudio.com/wiki/LoRa_WioTerminal/res/WioTerminalChassis-LoRa-E5andGNSSv1.2SCH&PCB.zip)
- [LoRa-E5 データシートと仕様](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
- [LoRa-E5 ATコマンド仕様](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

認証:

- [LoRa-E5-HF 認証 CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [LoRa-E5-HF FCC認証 -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [LoRa-E5-HF FCC認証 -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)

関連SDK:

- [STM32WLシリーズ用STM32Cube MCUパッケージ](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

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