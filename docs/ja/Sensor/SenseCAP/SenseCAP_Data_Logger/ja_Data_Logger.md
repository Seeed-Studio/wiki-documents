---
description: SenseCAP S2100 LoRaWAN データロガー
title: SenseCAP S2100 LoRaWAN データロガー
keywords:
- SenseCAP データロガー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP S2100 LoRaWAN データロガー

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

SenseCAP S2100 データロガーは、MODBUS-RTU RS485/アナログ/GPIOセンサーに接続できる多用途デバイスで、データを簡単にLoRaWANネットワークに送信できます。このデバイスは、LoRaおよびIP66設計により、優れた安定性と信頼性を備え、超低消費電力を維持しながら長距離伝送をカバーします。屋外での使用に最適で、バッテリーで駆動するか、12V外部電源に接続してさらに柔軟に使用できます。12V電源に接続すると、交換可能な内蔵バッテリーがバックアップ電源として機能します。さらに、S2100 データロガーは内蔵BluetoothによりOTA（Over-The-Air）に最適化されており、セットアップや更新が迅速かつ簡単です。さらに、S2110コンバーターを使用することで、S2100 データロガーはGroveセンサーに接続でき、DIY産業レベルのLoRaWANセンサーや小規模展開に最適な選択肢となります。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# 特徴
- **多様なセンサーとの高い互換性**: MODBUS-RTU RS485/アナログ(4 ~ 20mA/0~10V)/GPIO(レベル/パルス)センサーをサポート。
- **世界中のLoRaWAN®ネットワークに対応**: LoRaWAN® V1.0.3プロトコルに対応し、LoRaWAN®ゲートウェイと連携可能。（863MHz ~ 928MHzのユニバーサル周波数プランをサポート）
- **長距離通信と交換可能なバッテリー駆動**: LoRaWAN®無線通信により、19Ah内蔵バッテリーと外部12V DCでデバイスを供給可能。都市部で2km、見通しの良い環境で10kmの超広範囲通信を実現。
- **過酷な環境での使用に対応**: -40℃ ~ 85℃の動作温度とIP66規格の筐体により、屋外使用、高UV暴露、豪雨、粉塵環境などに適応。
- **リモート設定と管理**: Seeedが提供するSenseCAP Mate APPおよびSenseCAP Portalを使用して、データのリモート管理と設定が可能。

# 仕様
## インターフェース
|項目|値|
|---|---|
|電流入力|4～20 mA (2チャンネル)|
|電圧入力|0～10V (2チャンネル)|
|RS485|RS485 Modbus-RTUプロトコル|

## 一般パラメータ

|項目|値|
|---|---|
|製品モデル|SenseCAP S2100|
|マイクロコントローラー|Wio-E5|
|対応プロトコル|LoRaWAN v1.0.3 Class A|
|内蔵Bluetooth|パラメータ変更およびデータ変換アルゴリズム設定用アプリツール|
|長距離チャネルプラン|IN865/EU868/US915/AU915/AS923|
|最大送信出力|19dBm|
|感度|-136dBm@SF12 BW=125KHz|
|通信距離|2～10km（環境に依存）|
|IP等級|IP66|
|動作温度|-40 ～ +85 °C|
|動作湿度|0 ～ 100 %RH（結露しないこと）|
|デバイス重量|280g|
|認証|CE / FCC / RoHS|

## バッテリー（機器内蔵）
|項目|値|
|---|---|
|バッテリー寿命|最大10年|
|バッテリー容量|19Ah（充電不可）|
|バッテリータイプ|標準DサイズSOCl2バッテリー|

# アーキテクチャ

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>

# 電源オプション

- **オプション1**: データロガーは周期モードで動作可能。内蔵の19Ah標準DサイズLi-SOCl2バッテリーで駆動し、オンラインで簡単に購入可能。追加の電源なしで屋外環境に設置・展開可能です。

- **オプション2**: データロガーは外部12V DC電源で定常電力モードで動作可能。対応するジャンクションボックスキットを提供しており、データロガーを迅速に組み立てることができます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>

# 異なるインターフェースの産業用センサーをサポート

S2100 LoRaWAN データロガーは単一チャネルコレクターであり、以下のプロトコルのいずれか1つのみを同時にサポートします：

- **RS485**: 標準RS485 Modbus-RTUプロトコルをサポート
- **アナログ**: 2 x 0 ~ 10V または 2 x 4 ~ 20mA
- **GPIO**: 1 x GPIO、レベルまたはパルス信号を収集

:::tip
**Modbus-RTU**: このプロトコルは主にRS-232またはRS-485シリアルインターフェースを使用して通信を行い、市場にあるすべての商用SCADA、HMI、OPCサーバー、およびデータ収集ソフトウェアプログラムでサポートされています。これにより、Modbus互換機器を新規または既存の監視および制御アプリケーションに非常に簡単に統合できます。

**GPIO**: General Purpose Input/Outputの略です。マイクロコントローラーを他の電子デバイスに接続するための標準インターフェースです。たとえば、センサー、ダイオード、ディスプレイ、System-on-Chipモジュールなどと使用できます。
:::

# アプリケーション

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>