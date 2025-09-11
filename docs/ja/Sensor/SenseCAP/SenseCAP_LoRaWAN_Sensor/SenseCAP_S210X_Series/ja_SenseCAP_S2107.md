---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_S2107
last_update:
  date: 05/15/2025
  author: KeweiLee
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# 製品説明

SenseCAP LoRaWAN® S2107 温度センサーは、-50°C～300°Cの範囲で温度を測定します。広範囲の温度検出と産業シナリオに対応可能な高精度温度センサー PT1000 を搭載しています。  
Pt1000 センサー（1000オーム温度センサー）は、最も一般的なプラチナ抵抗温度計の一種です。S2107 は PT1000 センサー用の三線式回路をサポートし、最大3つのセンサーを同時に接続することができます。  
直接接触温度は、多くのシナリオ、特に液体検出、食品モニタリング、保管冷蔵チェーン、産業用ボイラー、水産養殖ソリューションにおいて重要な指標です。S2107 は、内蔵 Bluetooth により OTA（Over-The-Air）に最適化されており、迅速なセットアップと更新が可能です。LoRa と IP66 設計の恩恵を受け、このセンサーは安定性と信頼性を備え、低消費電力を維持しながら長距離伝送をカバーします。有線デバイスとは異なり、バッテリー駆動であるため、展開の作業負荷と複雑さを軽減し、数分で分解および設置が可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# 特徴

- 世界中の LoRaWAN® ネットワークに対応：さまざまなタイプの LoRaWAN® ゲートウェイと互換性があり、LoRaWAN® ネットワークへの迅速な接続を実現（863MHz～928MHz のユニバーサル周波数プランをサポート）。
- 長距離通信 & バッテリー駆動：都市部での通信距離は最大2km、見通しの良い環境では最大10km。標準的な Li-SOCl2 バッテリー（タイプ：ER34615）で駆動し、最大10年間のバッテリー寿命を実現。
- 過酷な環境での使用に対応：-40℃～85℃の動作温度範囲と IP66 等級の筐体により、屋外使用、高い紫外線曝露、豪雨、粉塵環境などに適応。
- 簡単な設定と校正：SenseCAP Mate アプリを使用して、コード不要で設定と校正を完了可能。
- **ローカルストレージ：LoRaWAN ネットワークが切断された場合、デバイスは最大2000件のアップリンク記録をローカルに保存可能**。

# 応用分野

- 液体検出
- 食品モニタリング
- 保管冷蔵チェーン
- 水産養殖ソリューション

# 仕様

|**温度**||
| :- | :- |
|範囲|<p>-50 ～ 300 ℃ </p><p>(その他の範囲はカスタマイズ可能、営業担当にお問い合わせください)</p>|
|精度|±0.5℃|
|分解能|0.1℃|
|**一般パラメータ**||
|製品モデル|S2107|
|マイクロコントローラー|Wio-E5|
|サポートプロトコル|LoRaWAN v1.0.3 Class A|
|内蔵 Bluetooth|アプリツールでパラメータ変更可能|
|LoRaWAN チャネルプラン|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|最大送信出力|19dBm|
|感度|-136dBm@SF12 BW=125KHz|
|通信距離|2 ～ 10 km（ゲートウェイアンテナと環境に依存）|
|IP 等級|IP66|
|動作温度|-40 ～ +85 °C (LoRa DTU);-50 ～ 200℃(ケーブル); -50 ～ 300℃ (プローブ)|
|動作湿度|0 ～ 100 %RH（結露しないこと）|
|デバイス重量|360g|
|ケーブル長|3メートル|
|認証|CE / FCC / RoHS / TELEC|
|**バッテリー（機器内蔵）**||
|バッテリー寿命|最大10年\*\*|
|バッテリー容量|19Ah（非充電式）|
|バッテリータイプ|標準 D サイズ SOCl2 バッテリー|

# S2107 に 3 つの PT1000 センサーを追加する方法

## ハードウェア準備

3 つの PT1000 センサーを図のように配線します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## ソフトウェア準備

SenseCAP Mate アプリを使用して PT1000 センサーを設定します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# ペイロードデコーダ

## デコーダコード

SenseCAP [S210X デコーダ](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X) をご参照ください。

## データ解析例

温度センサー測定パケット：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

オフラインから復旧時に送信されるパケット：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

S2107 のバッテリー情報：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# SenseCAP 技術サポート

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>