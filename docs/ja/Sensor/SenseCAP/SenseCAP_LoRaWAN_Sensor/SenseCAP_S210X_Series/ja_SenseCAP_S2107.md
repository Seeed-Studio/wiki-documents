---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_S2107
last_update:
  date: 9/25/2023
  author: KeweiLee
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# 製品説明

SenseCAP LoRaWAN® S2107温度センサーは、-50°C～300°Cの範囲で温度を測定します。広い温度範囲と産業用シナリオでの温度検出をサポートできる高精度温度センサーPT1000を搭載しています。
Pt1000センサー（1000オーム温度センサー）は、最も一般的な白金抵抗温度計のタイプです。S2107はPT1000センサー用の3線式回路をサポートし、最大3つのセンサーを同時に接続することができます。
直接接触温度は、特に液体検出、食品監視、保管コールドチェーン、産業用ボイラー、養殖ソリューションなど、多くのシナリオで重要な指標です。S2107は内蔵Bluetoothを備えたOTA用に特別に最適化されており、迅速なセットアップと更新を可能にします。LoRaとIP66設計の恩恵により、このセンサーは安定性と信頼性を特徴とし、低消費電力を維持しながら長距離伝送をカバーできます。有線デバイスとは異なり、バッテリー駆動であるため、展開の作業負荷と複雑さが軽減され、数分で分解・設置が可能です。


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# 特徴

- 世界中のLoRaWAN®ネットワークと互換性：さまざまなタイプのLoRaWAN®ゲートウェイと互換性があり、LoRaWAN®ネットワークとの高速接続を可能にします（863MHz～928MHzの汎用周波数プランをサポート）。
- 長距離＆バッテリー駆動：都市部で2km、見通し線で10kmの超広域伝送範囲。交換可能な標準Li-SOCl2バッテリー（タイプ：ER34615）で駆動し、最大10年のバッテリー寿命。
- 過酷な環境での使用を想定した設計：-40℃～85℃の動作温度とIP66定格エンクロージャーで、屋外使用、高UV露光、大雨、埃っぽい条件などに適しています。
- 簡単な設定とキャリブレーション：SenseCapはノーコード体験を提供し、ユーザーがSenseCAP Mate APPを通じて設定とキャリブレーションを完了できます。
- **ローカルストレージ：LoRaWANネットワークが切断された場合、デバイスは最大2000のアップリンクレコードをローカルに保存できます**。

# アプリケーション

- 液体検出
- 食品監視
- 保管コールドチェーン
- 養殖ソリューション

# 仕様

|**温度**||
| :- | :- |
|範囲|<p>-50～300℃ </p><p>（その他の範囲のカスタマイズについては営業にお問い合わせください）</p>|
|精度|±0.5℃|
|分解能|0.1℃|
|**一般パラメータ**||
|製品モデル|S2107|
|マイクロコントローラー|Wio-E5|
|サポートプロトコル|LoRaWAN v1.0.3 Class A|
|内蔵Bluetooth|パラメータ変更用アプリツール|
|LoRaWANチャンネルプラン|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|最大送信電力|19dBm|
|感度|-136dBm@SF12 BW=125KHz|
|通信距離|2～10km（ゲートウェイアンテナと環境に依存）|
|IP定格|IP66|
|動作温度|-40～+85°C（LoRa DTU）；-50～200℃（ケーブル）；-50～300℃（プローブ）|
|動作湿度|0～100%RH（結露なし）|
|デバイス重量|360g|
|ケーブル長|3メートル|
|認証|CE / FCC / RoHS / TELEC|
|**バッテリー（機器に含まれる）**||
|バッテリー寿命|最大10年\*\*|
|バッテリー容量|19Ah（充電不可）|
|バッテリータイプ|標準Dサイズ SOCl2バッテリー|

# S2107に3つのPT1000センサーを追加する方法

## ハードウェア準備

図に示すように3つのPT1000センサーを配線します
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## ソフトウェア準備

SenseCAP Mate Appを使用してPT1000センサーを設定します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# ペイロードデコーダー

## デコーダーコード

SenseCAP [S210X Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X)をご参照ください

## データ解析例

温度センサー測定パケット：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

オフラインから復旧時に送信されるパケット：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

S2107のバッテリー情報：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# SenseCAP技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>