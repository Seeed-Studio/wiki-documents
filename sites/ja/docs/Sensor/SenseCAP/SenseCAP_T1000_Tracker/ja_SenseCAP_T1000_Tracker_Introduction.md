---
description: SenseCAP_T1000_tracker_Introduction
title: 紹介
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker/Introduction
sku: 114993073, 114993169, 114993168, 113991194, 114993207, 114993208, 114993106, E2025081201, E2025081501
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2023-08-14'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker/Introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) は、GNSS/Wi-Fi/Bluetooth を活用して屋内外で高精度な位置情報を追跡できるコンパクトな LoRaWAN® トラッカーです。自己地理適応機能、ローカルデータストレージ、そして数か月に及ぶ優れたバッテリー寿命を備えています。さらに、温度・照度・モーションセンサーを搭載しており、さまざまな位置情報ベースのアプリケーションに最適です。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

---

:::tip バージョン比較

||対応ネットワーク|温度|照度|加速度センサー|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## 特長

### 高精度な測位

GNSS、WiFi、BLE の 3 つの測位技術により、屋内外の両方に対応したソリューションを提供します。

**GNSS 測位（屋外）**

トラッカーは衛星システム（GPS/BeiDou/その他）を介して屋外で位置情報を取得し、そのデータを LoRa 無線でサーバーにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi / Bluetooth 測位（屋内）**

トラッカーは周囲の Wi-Fi/Bluetooth の MAC アドレスと RSSI をスキャンし、LoRaWAN を通じてアップロードします。アプリケーションサーバー側で、MAC アドレスと信号強度（RSSI）に基づいて実際の地理的位置を計算する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### オフラインデータストレージ

ローカルに 1000 件以上の記録を保存可能です。アップロード間隔を 1 時間に設定した場合、40 日以上のデータを保存できます。

LoRaWAN 信号のカバレッジが弱い、またはネットワークカバレッジがない場合、データは保存され、次のサイクルに繰り越されます。デバイスが LoRaWAN ネットワークのカバレッジエリアに戻ると、自動的にオフラインデータを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 地域をまたいだ適応性

T1000 は、検出した位置座標に基づいて適切な LoRaWAN® 周波数プランに自動調整することで、グローバルな LoRaWAN® リージョン切り替えをシームレスに実現し、ヨーロッパ、パンアメリカなど世界各地で最適なパフォーマンスを保証します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数か月のバッテリー寿命

LR1110 を搭載し低消費電力設計となっているため、多くのモデルでは GNSS のみモードかつモーションセンサー無効、アップロード間隔 1 時間の条件で、3 か月以上のバッテリー寿命を実現できます。
(バッテリー寿命は、周波数帯、測位モード、データアップロード間隔などの設定パラメータによって変動する場合があります。詳細については、[Battery Life Calculation](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx) を参照してください)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### 温度・照度・モーションセンサー

温度センサーと照度センサーを搭載しており、移動中の環境データを継続的に記録できます。例えば、温度データから食品やワクチンが劣化した可能性を推定できます。照度データからは、意図しない第三者に見られたかどうかを把握できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 位置の正当性を担保する分散型ゲートウェイネットワーク

Helium の分散型ネットワークは、すべてのゲートウェイが自らの位置情報を共有し、Helium がその位置の真正性を検証するという信頼メカニズムの上に構築されています。T1000 とともに Helium を使用する場合、ゲートウェイの位置を相互参照することで、T1000 のおおよその位置を把握できます。これにより、他のネットワークと比較してデータの信頼性がさらに高まります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 緊急レポート

異常を検知するモーションセンサー、緊急通報用の SOS ボタン、高頻度データ送信への自動切り替え機能を備えています。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## アプリケーション

- 国際的な資産追跡
- 捜索救助
- 設備監視

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 仕様

### モデル仕様

本製品は 2 種類のソリューションを提供しており、A、B、E の 3 バージョンがあります。

- **T1000-A/T1000-B**: これら 2 つのバージョンは **LoRaWAN ネットワーク**向けに設計されており、屋内（Wi-Fi + Bluetooth）および屋外（GNSS）測位をサポートします。T1000-A は温度センサー、照度センサー、モーションセンサーなどの基本機能を備えていますが、T1000-B にはこれらのセンサーは搭載されていません。

- **T1000-E**: オープンソースソフトウェアを採用しており、**LoRaWAN** 用と **Meshtastic** 用の 2 つの独立したバージョンが用意されています。どちらもソースコードが完全公開されており、開発者は機能を自由にカスタマイズおよび拡張できます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### 一般パラメータ

|製品モデル|T1000-A/T1000-B/T1000-E|
| :- | :- |
|バックホール|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1、App 経由で設定|
|LoRaWAN チャネルプラン|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>範囲: -20 ～ 60℃</p><p>精度: ± 1℃（最小 ±0.5℃、最大 ±1℃）</p><p>分解能: 0.1℃</p>|
|照度|0 ～ 100%（0% は暗闇、100% は最も明るい状態）|
|3 軸加速度センサー|動きを検知する 3 軸加速度センサー|
|LED とブザー|ステータス表示用 1xLED および 1x ブザー|
|ボタン|操作およびイベント（SOS）トリガー用 1x ボタン|
|アンテナ|内蔵（GNSS/LoRa/Wi-Fi/BLE）|
|通信距離|2 ～ 5km（ゲートウェイアンテナ、設置条件、環境に依存）|
|IP 等級|IP65|
|寸法|85 x 55 x 6.5 mm|
|デバイス重量|32g|
|動作温度|-20℃ ～ +60<a name="ole_link12"></a>℃|
|動作湿度|5% - 95%（結露なきこと）|
|認証|CE /FCC /TELEC /RoHS /REACH|

**位置情報**

|GNSS コンステレーション|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|GNSS 感度|-145dBm コールドスタート / -160 dBm トラッキング|
|GNSS 位置精度|2\.5m CEP 50%|
|Wi-Fi 測位|パッシブスキャン、スキャンした 4 つの MAC アドレスをアップロード|
|Bluetooth 測位|Beacon のスキャンしたうち信号が最も強い 3 つの MAC アドレスをアップロード|
|データキャッシュ|LoRaWAN ネットワークがない場合に 1000 件のデータをキャッシュ|

**バッテリー**

|バッテリー容量|充電式リチウムバッテリー、700mAh|
| :- | :- |
|\*バッテリー寿命の目安|1 回の充電で約 4 か月（1 時間ごとにアップリンク、GNSS データのみ）|
|バッテリー寿命モニタリング|バッテリーレベルを定期的にアップリンク|
|充電ケーブル（アダプターは含まれません）|USB マグネット充電ケーブル、1 メートル|
|<a name="ole_link9"></a>電源入力電圧|4\.7 ～ 5.5V DC|
|充電温度制限|0 ～ +45℃（この温度範囲を超えると充電が制限され、LED が高速点滅します）|
