---
description: SenseCAP S2100 LoRaWAN データロガー
title: SenseCAP S2100 LoRaWAN データロガー
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---


# SenseCAP S2100 LoRaWAN データロガー

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

SenseCAP S2100 データロガーは、MODBUS-RTU RS485/アナログ/GPIO センサーに接続でき、LoRaWAN ネットワークへのデータ送信を簡単に行える多用途デバイスです。LoRa と IP66 設計により、このデバイスは優れた安定性と信頼性を誇り、超低消費電力を維持しながら長距離伝送をカバーできます。屋外使用に最適で、バッテリー駆動または 12V 外部電源接続により、さらなる柔軟性を提供します。12V 電源に接続した場合、交換可能な内蔵バッテリーがバックアップ電源として機能します。さらに、S2100 データロガーは内蔵 Bluetooth により OTA に最適化されており、セットアップとアップデートが迅速かつ簡単です。さらに、S2110 コンバーターにより S2100 データロガーは Grove センサーに接続でき、DIY 産業レベル LoRaWAN センサーや小規模展開に優れた選択肢となります。
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# 特徴

- 異なるセンサーとの強力な互換性：すべての MODBUS-RTU RS485/アナログ（4 ~ 20mA/0~10V）/ GPIO（レベル/パルス）センサーをサポート。
- 世界中の LoRaWAN® ネットワークとの互換性：LoRaWAN® V1.0.3 プロトコルと互換性があり、LoRaWAN® ゲートウェイと連携可能。（863MHz ~928MHz のユニバーサル周波数プランをサポート）。
- 長距離 & 交換可能バッテリー駆動：LoRaWAN® ワイヤレス伝送により、S2100 は 19Ah 内蔵バッテリーと外部 12V DC 電源供給をサポートし、都市部で 2km、見通し環境で 10km の超広域伝送範囲を実現。
- 過酷な環境での使用を想定した設計：-40℃ ~ 85℃ の動作温度と IP66 定格筐体により、屋外使用、高 UV 曝露、大雨、粉塵環境などに適用。
- リモート設定と管理：Seeed は SenseCAP Mate APP と SenseCAP Portal を提供し、ユーザーがリモートでデータ管理と設定を行えます。

# 仕様

## インターフェース

|項目|値|
|---|---|
|電流入力|4 to 20 mA（2チャンネル）|
|電圧入力|0 to 10V（2チャンネル）|
|RS485|RS485 Modbus-RTU プロトコル|

## 一般パラメータ

|項目|値|
|---|---|
|製品モデル|SenseCAP S2100|
|マイクロコントローラー|Wio-E5|
|サポートプロトコル|LoRaWAN v1.0.3 Class A|
|内蔵 Bluetooth|パラメータ変更とデータ変換アルゴリズム設定用アプリツール|
|長距離チャンネルプラン|IN865/EU868/US915/AU915/ AS923|
|最大送信電力|19dBm|
|感度|-136dBm@SF12 BW=125KHz|
|通信距離|2 to 10km（環境に依存）|
|IP 定格|IP66|
|動作温度|-40 to +85 °C|
|動作湿度|0 to 100 %RH（結露なし）|
|デバイス重量|280g|
|認証|CE / FCC / RoHS|

## バッテリー（機器に含まれる）

|項目|値|
|---|---|
|バッテリー寿命|最大 10 年|
|バッテリー容量|19Ah（非充電式）|
|バッテリータイプ|標準 D サイズ SOCl2 バッテリー|

# アーキテクチャ

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>

# 電源オプション

- オプション 1：データロガーは周期モードで動作可能。オンラインで簡単に購入できる内蔵 19Ah 標準 D サイズ Li-SOCl2 バッテリーで駆動し、追加電源なしで屋外環境に設置・展開できます。

- オプション 2：データロガーは外部 12V DC 電源で定電力モードで動作可能。データロガーを迅速に組み立てられるマッチングジャンクションボックスキットを提供します。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>

# 異なるインターフェースの産業用センサーをサポート

S2100 LoRaWAN データロガーは単一チャンネルコレクターで、一度に以下のプロトコルの一つのみをサポートします：

RS485：標準 RS485 Modbus-RTU プロトコルをサポート
アナログ：2 x 0 ~ 10V または 2 x 4 ~ 20mA。
GPIO：1 x GPIO、レベルまたはパルス信号を収集

:::tip
Modbus-RTU：このプロトコルは主に通信用に RS-232 または RS-485 シリアルインターフェースを使用し、市場のすべての商用 SCADA、HMI、OPC サーバー、データ取得ソフトウェアプログラムでサポートされています。これにより、Modbus 互換機器を新規または既存の監視制御アプリケーションに統合することが非常に簡単になります。

GPIO：General Purpose Input/Output の略。マイクロコントローラーを他の電子デバイスに接続するために使用される標準インターフェース。例えば、センサー、ダイオード、ディスプレイ、System-on-Chip モジュールと使用できます。
:::

# アプリケーション

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>