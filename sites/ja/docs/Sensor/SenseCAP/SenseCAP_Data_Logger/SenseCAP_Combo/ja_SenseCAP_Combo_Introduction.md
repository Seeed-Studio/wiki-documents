---
description: SenseCAP Combo 5-in-1 Sensor with 4G の概要
title: 概要
keywords:
  - SenseCAP Combo
  - Data Logger
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /sensecap_combo_introduction
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/ja/sensecap_combo_introduction/
---

# SenseCAP Combo 5-in-1 Sensor with 4G 概要

## 概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo-intro.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

<br />

[**SenseCAP Combo 5-in-1 Sensor with 4G**](https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html) は、マルチパラメータ環境モニタリング向けに設計された、使いやすく安定した低消費電力デバイスです。気温、湿度、気圧、照度、CO₂ を測定します。 

さらに、[Splitter](https://www.seeedstudio.com/RS485-p-4880.html) を使用して最大 10 個の外部 Modbus-RTU RS485 センサを接続でき、市場に出回っているほとんどのセンサとの高い互換性を備えています。 

データ伝送には 4G Cat.1 接続と MQTT プロトコルを使用し、ユーザーサーバーへデータをアップロードします。ソーラーパネルと 5200mAh の充電式リチウムイオンバッテリを搭載しており、停電時や雨天時でも 2 週間以上連続動作が可能です。また、直接 DC 電源による給電にも対応しています。 

データ損失を防ぐため、電波が弱い場合や通信が中断した場合でも、最大 500,000 件のデータをローカルにキャッシュできます。通信が回復すると、自動的にデータがアップロードされます。ユーザーはローカル接続を介して履歴データを直接エクスポートすることもできます。 

プラグアンドプレイでの展開を想定して設計されており、吊り下げおよびポールマウントの両方の設置方法に対応しているため、初心者でも簡単に設置できます。防水性と耐 UV 性のある素材で構成され、厳しい耐久性基準を満たしているため、温室のような過酷な環境にも最適です。

## 特長

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo.jpg" alt="Software Platform" width={800} height="auto" /></p>

- **統合マルチセンサ:** 本デバイスには、気温、湿度、気圧、照度、CO₂ などの内蔵センサが搭載されています（利用可能なオプションはカスタマイズ内容によって異なります）。

- **高い拡張性:** RS485 インターフェースを備え、[Splitter](https://www.seeedstudio.com/RS485-p-4880.html) を介して最大 10 個の外部センサを接続できます。標準 Modbus-RTU RS485 センサをサポートし、外部デバイスに給電するための 5V および 12V 電源出力を提供します。

- **信頼性の高いデータキャッシュ:** 4G 信号が弱い、または利用できない場合、ロガーは最大 500,000 件のデータをローカルに保存できます。接続が回復するとデータは自動的にアップロードされ、履歴ファイルは Excel 形式でエクスポートできます。

- **柔軟な電源オプション:** 主に内蔵ソーラーパネルと内蔵バッテリで動作しますが、外部 DC 電源にも対応しています。

- **低消費電力:** 内蔵 5200mAh バッテリにより、ソーラー充電がない場合や停電時でも 2 週間以上動作可能です。

- **容易なメンテナンス:** OTA（Over-the-Air）によるリモートファームウェア更新に対応しており、現地での保守作業を削減できます。

- **温室での運用:** 温室や屋内農業環境向けに設計されており、0°C ～ 40°C の範囲で安定して動作します。

- **耐候性設計:** IPX5 等級および耐 UV 素材により、雨や経年劣化から保護され、さまざまな環境で使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance.png" alt="Software Platform" width={800} height="auto" /></p>

## システムアーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/System Architecture.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

SenseCAP Combo 5-in-1 Sensor with 4G は、4G Cat.1 ネットワークを介して SenseCAP Cloud Platform にデータをアップロードします。ユーザーは [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) または SenseCraft APP を通じて、リアルタイムデータの閲覧、デバイス管理、履歴データの取得が可能です。さらに、HTTP API、MQTT API、WebSocket API を提供しており、さらなる開発やシステム統合に利用できます。

## オールインワンソフトウェアプラットフォームによる管理

[SenseCAP Cloud Platform](https://sensecap.seeed.cc/portal/#/login) と SenseCraft APP とシームレスに連携し、QR コードによるデバイスバインディング、リアルタイムデータモニタリング、リモートパラメータ設定、データキャッシュ、サードパーティ連携のための API アクセスまで、エンドツーエンドのソリューションを提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/system.png" alt="Software Platform" width={800} height="auto" /></p>

## 取り付け方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Installation Methods.png" alt="Software Platform" width={800} height="auto" /></p>

SenseCAP Combo は、さまざまな展開シナリオに対応するため、2 種類の取り付け方法をサポートします。

### 吊り下げ取り付け

本体上部の取り付け穴にワイヤーを通して吊り下げることができます。この方法は、温室など上部構造物が利用できる屋内環境に適しています。

### ポールマウント取り付け

本体をブラケット（パッケージには含まれません）を使用してポールに取り付けることができます。この方法は、屋外の圃場など開けた場所での展開に最適です。

## アプリケーション

SenseCAP Combo 5-in-1 Sensor with 4G は、さまざまなシナリオにおけるマルチパラメータ環境モニタリングに最適なソリューションです。以下の用途で広く利用されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Applications.png" alt="Software Platform" width={800} height="auto" /></p>

- **スマート温室**: 作物の生育条件を最適化するために、温度、湿度、CO₂、照度、気圧をリアルタイムで監視します。RS485 を介して外部土壌センサを接続し、包括的な環境データを収集できます。
- **スマート農業**: 露地栽培、果樹園、ブドウ園などにおける屋外環境モニタリングに使用し、マイクロクライメートの変化を追跡して精密農業の意思決定を支援します。
- **環境モニタリング**: 研究施設、産業現場、都市環境における大気質および気象パラメータの監視に利用されます。携帯電話回線の電波が弱い地域でも、信頼性の高いデータキャッシュにより長期データロギングが可能です。

## 仕様

### 一般仕様

| パラメータ | 仕様 |
|-----------|---------------|
| 電源タイプ | Type-C インターフェース、5V / 2A 入力 |
| 拡張インターフェース | 1x RS485 (Modbus-RTU) |
| 接続可能センサ数 | Splitter を使用して最大 10 個の外部センサをサポート |
| 外部センサ電源出力 | 12V / 0.35A, 5V / 0.35A |
| プロトコル | MQTT プロトコル；Sensor Hub Configuration Tool NG を使用してユーザーサーバーを設定可能 |
| 4G Cat.1 | グローバル周波数帯 / APN 設定可能；Micro SIM カード / 3FF<br />LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/B18/B19/B20/B25/B26/B28<br />LTE-TDD: B34/B38/B39/B40/B41/B66/B71 |
| データキャッシュ | 最大 500,000 件のキャッシュレコードをローカル保存 / ローカルエクスポート対応 |
| アンテナ | 内蔵アンテナ |
| スイッチ / LED インジケータ | 1x 電源スイッチ、2x LED インジケータ |
| IP 等級 | IPX5、PCBA 防水処理 |
| 耐 UV 等級 | F1 |
| エンクロージャ材質 | PC/ASA |
| 動作温度 | 0°C ~ 40°C <br />**注:** 本デバイスの動作温度は、同梱の電源アダプタによって制限されており、電源アダプタの対応動作温度範囲は 0°C ～ 40°C です。<br />電源アダプタは屋内使用専用です。電源アダプタを屋外環境に直接さらさないでください。適切な保護を確保するため、電源アダプタは防水エンクロージャまたは制御盤内に設置する必要があります。|
| 充電温度 | 0°C ~ 40°C |
| 動作湿度 | 0 ~ 100 % RH（結露なきこと） |
| バッテリ | 5200mAh, 3.7V 充電式リチウムイオンバッテリ |
| ソーラーパネル | 最大出力 1W |
| 取り付け方法 | 吊り下げまたはポールマウント（吊り下げにはワイヤー、ポールマウントにはブラケットが必要。いずれもパッケージには含まれません） |
| 寸法 | 202 * 202 * 175 mm |
| 正味重量 | 0.8 kg |

### センサ仕様

| パラメータ | 範囲 | 精度 | 分解能 |
|-----------|-------|----------|------------|
| 気温 | -40°C ~ +85°C | ±0.2°C | 0.01°C |
| 湿度 | 0 ~ 100% RH（結露なきこと） | ±2% RH | 0.01% RH |
| 露点（T/H アルゴリズムによる算出） | -100°C ~ 80°C | ±2°C | 0.01°C |
| 気圧 | 300 ~ 1200 hPa | 1 hPa | 10 Pa |
| 照度 | 0 ~ 200,000 Lux | ±5% | 5 Lux |
| CO₂ | 0 - 10,000 ppm | ±50 ppm ±3% \* 読み値 (0 - 5,000 ppm); <br /> ±5% (5,000 - 10,000 ppm) | 1 ppm |

:::note
追加の環境パラメータを必要とするプロジェクト向けに、拡張センサオプションを含むカスタマイズ構成も利用可能です。カスタマイズに関するお問い合わせは、techsupport@seeed.io までご連絡ください。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-2.png" alt="Software Platform" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-3.png" alt="Software Platform" width={800} height="auto" /></p>

## 同梱物

|  名称 | 数量 |
|------|----------|
| SenseCAP Combo 5-in-1 Sensor with 4G | 1 |
| USB Type-C ケーブル | 1 |
| 電源アダプタ | 1 |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
