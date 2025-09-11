---
description: SenseCAP_T1000_tracker_Introduction
title: はじめに
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 9/11/2023
  author: Jessie
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) は、GNSS/Wi-Fi/Bluetoothを利用して屋内外での正確な位置追跡を行うコンパクトなLoRaWAN®トラッカーです。自己地理適応機能、ローカルデータストレージ、そして数ヶ月間の印象的なバッテリー寿命を誇ります。さらに、温度、光、モーションセンサーを搭載しており、様々な位置ベースのアプリケーションに最適です。

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
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|

:::

## 機能

### 正確な位置特定

GNSS、Wi-Fi、BLE、3つの測位技術により、屋内外両方のソリューションを提供します。

**GNSS測位（屋外）**

トラッカーは衛星システム（GPS/BeiDou/その他）を介して屋外で位置を取得し、LoRaワイヤレスでサーバーにデータをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi測位（屋内）**

トラッカーは近くのWi-Fi/BluetoothのMACアドレスとRSSIをスキャンし、LoRaWANを通じてアップロードします。アプリケーションサーバーは、MACアドレスと信号強度（RSSI）に基づいて実際の地理的位置を計算する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### オフラインデータストレージ

1000件以上のレコードをローカルに保存可能です。1時間のアップロード間隔での保存容量は40日を超えます。

LoRaWAN信号カバレッジが弱い場合やネットワークカバレッジがない場合、データは保存され、次のサイクルで入力されます。デバイスがLoRaWANネットワークカバレッジのあるエリアに戻ると、オフラインデータを自動的に送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 地域間適応性

T1000は、シームレスなグローバルLoRaWAN®地域切り替えを提供し、検出された位置座標に基づいて適切なLoRaWAN®周波数プランに自動調整し、ヨーロッパ、汎アメリカ、その他の地域で最適なパフォーマンスを確保します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数ヶ月のバッテリー寿命

LR1110を搭載し、低消費電力を特徴とし、GPSのみモードで1時間のアップロード間隔でバッテリーは3ヶ月持続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png" alt="pir" width={800} height="auto" /></p>

### 温度、光、モーションセンサー

温度・光センサーが含まれており、移動中の環境データを追跡できます。例えば、温度データは食品/ワクチンが悪くなる可能性を推測するために使用できます。光データは、望ましくない目に見られているかどうかを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 位置証明のための分散型ゲートウェイネットワーク

Heliumの分散型ネットワークは、すべてのゲートウェイがその位置を共有し、Heliumがこれらの位置の真正性を検証する信頼メカニズム上に構築されています。T1000でHeliumを使用する場合、ゲートウェイの位置をクロスチェックすることで、T1000のおおよその位置を把握できます。これにより、他のネットワークと比較してデータの妥当性を高める追加の検証レイヤーが提供されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 緊急レポート

異常を検出するモーションセンサー、緊急レポート用のSOSボタン、高頻度データ送信への自動切り替え

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png" alt="pir" width={800} height="auto" /></p>

## アプリケーション

- 国際資産追跡
- 捜索救助
- 機器監視

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 仕様

### モデル仕様

ユーザー向けに2つの異なるソリューションを提供し、A、B、C、Dの4つのバージョンがあります。T1000 A/Bは通常のGNSS測位をサポートし、T1000 C/DはLoRa Cloud Geolocation Serviceをサポートします。

- **T1000-A/T1000-B**: 特別な暗号化なしのGNSSデータ。

- **T1000-C/T1000-D**: Semtech LoRa Edgeによって暗号化されたGNSSデータ、GNSSデータは[LoRa Cloud](https://www.loracloud.com/)を通じて復号化する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-11@1.5x.png" alt="pir" width={800} height="auto" /></p>

### 一般パラメータ

|製品モデル|T1000-A/T1000-B/T1000-C/T1000-D|
| :- | :- |
|バックホール|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1、アプリ経由で設定|
|LoRaWANチャネルプラン|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>範囲: -20 to 60℃;</p><p>精度: ± 1℃ (最小 ±0.5℃、最大 ±1℃)</p><p>分解能: 0.1℃</p>|
|光|0 to 100% (0%は暗闇、100%は最も明るい)|
|3軸加速度計|動きを検出する3軸加速度計|
|LEDとブザー|ステータスを示す1xLEDと1xブザー|
|ボタン|操作とイベントトリガー用の1xボタン (SOS)|
|アンテナ|内蔵 (GNSS/LoRa/Wi-Fi/BLE)|
|通信距離|2 to 5km (ゲートウェイアンテナ、設置、環境に依存)|
|IP等級|IP65|
|寸法|85 x 55 x 6.5 mm|
|デバイス重量|32g|
|動作温度|-20℃ to +60<a name="ole_link12"></a>℃|
|動作湿度|5% - 95% (結露なし)|
|認証|CE /FCC /TELEC /RoHS /REACH|

**位置情報**

|GNSS コンステレーション|<p>T1000-A/B: GPS/GLONASS/Galileo/BeiDou/QZSS</p><p>T1000-C/D: GPS/ BeiDou</p>|
| :- | :- |
|GNSS 感度|-145dBm コールドスタート / -160 dBm トラッキング|
|GNSS 位置精度|2.5m CEP 50%|
|Wi-Fi 測位|パッシブスキャン、スキャンした4つのMACアドレスをアップロード|
|Bluetooth 測位|Beaconのスキャンした最良信号3つのMACアドレスをアップロード|
|データキャッシュ|LoRaWANネットワークがない場合、1000データをキャッシュ|

**バッテリー**

|バッテリー容量|充電式リチウムバッテリー、700mAh|
| :- | :- |
|\*バッテリー寿命推定|1回の充電で4ヶ月（1時間ごとのアップリンク、GNSSデータのみ）|
|バッテリー寿命監視|定期的なアップリンクバッテリーレベル|
|充電ケーブル（アダプター別売）|USB磁気充電ケーブル、1メートル|
|<a name="ole_link9"></a>電源入力電圧|4.7 to 5.5V DC|
|充電温度制限|0 to +45℃（温度範囲を超えると、充電が制限され、LEDが高速点滅します）|
