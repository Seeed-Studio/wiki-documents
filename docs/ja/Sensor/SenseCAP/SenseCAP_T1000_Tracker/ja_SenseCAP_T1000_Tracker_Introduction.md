---
description: SenseCAP_T1000_tracker_Introduction
title: 概要
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 10/11/2025
  author: Twelve
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) は、GNSS/Wi-Fi/Bluetooth を利用して屋内外での正確な位置追跡を行うコンパクトな LoRaWAN® トラッカーです。自己地理適応機能、ローカルデータストレージ、そして数ヶ月間の驚異的なバッテリー寿命を誇ります。さらに、温度、光、モーションセンサーを搭載しており、様々な位置ベースアプリケーションに最適です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>

---

:::tip バージョン比較

||対応ネットワーク|温度|光|加速度計|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## 特徴

### 正確な位置測定

GNSS、Wifi、BLE の 3 つの位置測定技術により、屋内外両方のソリューションを提供します。

**GNSS 位置測定（屋外）**

トラッカーは衛星システム（GPS/BeiDou/その他）を介して屋外での位置を取得し、LoRa ワイヤレスでサーバーにデータをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi / Bluetooth 位置測定（屋内）**

トラッカーは近くの Wi-Fi/Bluetooth の MAC アドレスと RSSI をスキャンし、LoRaWAN を通じてアップロードします。アプリケーションサーバーは MAC アドレスと信号強度（RSSI）に基づいて実際の地理的位置を計算する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### オフラインデータストレージ

1000 件以上のレコードをローカルに保存可能です。1 時間のアップロード間隔でのストレージ容量は 40 日を超えます。

LoRaWAN 信号カバレッジが弱い場合やネットワークカバレッジがない場合、データは保存され、次のサイクルで入力されます。デバイスが LoRaWAN ネットワークカバレッジのあるエリアに戻ると、オフラインデータを自動的に送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 地域間適応性

T1000 はシームレスなグローバル LoRaWAN® 地域切り替えを提供し、検出された位置座標に基づいて適切な LoRaWAN® 周波数プランに自動調整し、ヨーロッパ、汎アメリカ、その他の地域で最適なパフォーマンスを確保します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数ヶ月のバッテリー寿命

LR1110 を搭載し、低消費電力を特徴とし、ほとんどのモデルで GNSS のみモード、モーションセンサー無効で 1 時間のアップロード間隔において 3 ヶ月以上のバッテリー寿命を実現します。
（バッテリー寿命は周波数帯、位置測定モード、データアップロード間隔などの設定パラメータによって異なる場合があります。詳細については[バッテリー寿命計算](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)を参照してください）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### 温度、光、モーションセンサー

温度・光センサーを搭載し、移動中の環境データを追跡します。例えば、温度データは食品/ワクチンが劣化する可能性を推測するために使用できます。光データは望ましくない目に見られているかどうかを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 位置証明のための分散ゲートウェイネットワーク

Helium の分散ネットワークは、すべてのゲートウェイが位置を共有し、Helium がこれらの位置の真正性を検証する信頼メカニズム上に構築されています。T1000 で Helium を使用する場合、ゲートウェイの位置をクロスチェックすることで、T1000 のおおよその位置を把握できます。これにより、他のネットワークと比較してデータの妥当性を高める追加の検証レイヤーが提供されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 緊急レポート

異常を検出するモーションセンサー、緊急レポート用の SOS ボタン、高頻度データ送信への自動切り替え

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## アプリケーション

- 国際資産追跡
- 捜索救助
- 機器監視

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 仕様

### モデル仕様

ユーザー向けに 2 つの異なるソリューションを提供し、A、B、E の 3 つのバージョンがあります。

- **T1000-A/T1000-B**: これら 2 つのバージョンは **LoRaWAN ネットワーク**用に設計されており、屋内（Wi-Fi + Bluetooth）+ 屋外位置測定（GNSS）をサポートします。T1000-A は温度センサー、光センサー、モーションセンサーを含む基本機能を搭載し、T1000-B はこれらのセンサーなしで提供されます。

- **T1000-E**: オープンソースソフトウェアを特徴とし、**LoRaWAN** 用と **Meshtastic** 用の 2 つの別々のバージョンで利用可能です。両方とも完全なソースコードを提供し、開発者が機能を自由にカスタマイズおよび拡張できます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### 一般パラメータ

|製品モデル|T1000-A/T1000-B/T1000-E|
| :- | :- |
|バックホール|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1、アプリ経由で設定|
|LoRaWAN チャンネルプラン|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>範囲: -20 to 60℃;</p><p>精度: ± 1℃ (最小 ±0.5℃、最大 ±1℃)</p><p>分解能: 0.1℃</p>|
|光|0 to 100% (0% は暗闇、100% は最も明るい)|
|3軸加速度計|動きを検出する 3軸加速度計|
|LED とブザー|ステータスを示す 1xLED と 1x ブザー|
|ボタン|操作とイベントトリガー（SOS）用の 1x ボタン|
|アンテナ|内蔵（GNSS/LoRa/Wi-Fi/BLE）|
|通信距離|2 to 5km（ゲートウェイアンテナ、設置、環境に依存）|
|IP等級|IP65|
|寸法|85 x 55 x 6.5 mm|
|デバイス重量|32g|
|動作温度|-20℃ to +60<a name="ole_link12"></a>℃|
|動作湿度|5% - 95%（結露なし）|
|認証|CE /FCC /TELEC /RoHS /REACH|

**位置**

|GNSS 衛星群|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|GNSS 感度|-145dBm コールドスタート / -160 dBm トラッキング|
|GNSS 位置精度|2\.5m CEP 50%|
|Wi-Fi 位置測定|パッシブスキャン、スキャンした 4 つの MAC アドレスをアップロード|
|Bluetooth 位置測定|Beacon の最良信号 3 つの MAC アドレスをアップロード|
|データキャッシュ|LoRaWAN ネットワークがない場合に 1000 データをキャッシュ|

**バッテリー**

|バッテリー容量|充電式リチウムバッテリー、700mAh|
| :- | :- |
|\*バッテリー寿命推定|1 回の充電で 4 ヶ月（1 時間ごとのアップリンク、GNSS データのみ）|
|バッテリー寿命監視|定期的なアップリンクバッテリーレベル|
|充電ケーブル（アダプター別売）|USB マグネット充電ケーブル、1 メートル|
|<a name="ole_link9"></a>電源入力電圧|4\.7 to 5.5V DC|
|充電温度制限|0 to +45℃（温度範囲を超えると充電が制限され、LED が高速点滅します）|
