---
description: SenseCAP_T1000_tracker_紹介
title: 紹介
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) は、GNSS/Wi-Fi/Bluetooth を活用したコンパクトな LoRaWAN® トラッカーで、屋内外での正確な位置追跡を可能にします。自己地理適応機能、ローカルデータストレージ、そして数ヶ月間のバッテリー寿命を誇ります。また、温度、光、モーションセンサーを搭載しており、さまざまな位置情報ベースのアプリケーションに最適です。

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

## 特徴

### 正確な位置測定

GNSS、Wi-Fi、BLE の3つの位置測定技術を使用し、屋内外でのソリューションを提供します。

**GNSS測位（屋外）**

トラッカーは衛星システム（GPS/BeiDou/その他）を通じて屋外で位置を取得し、そのデータを LoRa 無線でサーバーにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi測位（屋内）**

トラッカーは近くの Wi-Fi/Bluetooth の MAC アドレスと RSSI をスキャンし、それを LoRaWAN を通じてアップロードします。アプリケーションサーバーは、MAC アドレスと信号強度（RSSI）に基づいて実際の地理的位置を計算する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### オフラインデータストレージ

1000件以上の記録をローカルに保存可能です。1時間ごとのアップロード間隔で、ストレージ容量は40日以上に相当します。

LoRaWAN 信号のカバレッジが弱い場合やネットワークカバレッジがない場合、データは保存され、次のサイクルで入力されます。デバイスが LoRaWAN ネットワークカバレッジのあるエリアに戻ると、オフラインデータが自動的に送信されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 地域を跨ぐ適応性

T1000 は、グローバルな LoRaWAN® 地域切り替えをシームレスに提供し、検出された位置座標に基づいて適切な LoRaWAN® 周波数プランに自動調整します。これにより、ヨーロッパ、パンアメリカなどで最適なパフォーマンスを確保します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数ヶ月間のバッテリー寿命

LR1110 によって駆動され、低消費電力を特徴とするこのバッテリーは、GPS のみのモードで1時間ごとのアップロード間隔で3ヶ月間持続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png" alt="pir" width={800} height="auto" /></p>

### 温度、光、モーションセンサー

温度および光センサーが含まれており、移動中の環境データを追跡できます。例えば、温度データは食品やワクチンが劣化する可能性を推測するために使用できます。光データは、意図しない目に見られているかどうかを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 位置の証明のための分散型ゲートウェイネットワーク

Helium の分散型ネットワークは、すべてのゲートウェイがその位置を共有し、Helium がこれらの位置の信頼性を検証する信頼メカニズムに基づいて構築されています。T1000 を Helium と一緒に使用する場合、ゲートウェイの位置をクロスチェックすることで、T1000 のおおよその位置を把握できます。これにより、他のネットワークと比較してデータの信頼性が向上します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 緊急報告

モーションセンサーで異常を検知し、緊急報告用の SOS ボタンを備え、高頻度データ送信に自動的に切り替えます。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png" alt="pir" width={800} height="auto" /></p>

## アプリケーション

* 国際資産追跡
* 捜索救助
* 機器モニタリング

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

 
## 仕様

### モデル仕様

ユーザー向けに2つの異なるソリューションを提供しており、A、B、C、Dの4つのバージョンがあります。T1000 A/Bは通常のGNSS測位をサポートし、T1000 C/DはLoRa Cloud Geolocation Serviceをサポートします。

* **T1000-A/T1000-B**: 特別な暗号化なしのGNSSデータ。

* **T1000-C/T1000-D**: Semtech LoRa Edgeを介して暗号化されたGNSSデータ。GNSSデータは[LoRa Cloud](https://www.loracloud.com/)を通じて復号する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-11@1.5x.png" alt="pir" width={800} height="auto" /></p>



### 一般パラメータ

|製品モデル|T1000-A/T1000-B/T1000-C/T1000-D|
| :- | :- |
|バックホール|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1、アプリ経由で設定|
|LoRaWAN チャネルプラン|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>範囲: -20～60℃;</p><p>精度: ± 1℃ (最小 ±0.5℃、最大 ±1℃)</p><p>分解能: 0.1℃</p>|
|光|0～100% (0%は暗闇、100%は最も明るい)|
|3軸加速度計|動きを検出する3軸加速度計|
|LEDとブザー|1xLEDと1xブザーでステータスを表示|
|ボタン|1xボタンで操作およびイベント（SOS）をトリガー|
|アンテナ|内部（GNSS/LoRa/Wi-Fi/BLE）|
|通信距離|2～5km（ゲートウェイアンテナ、設置、環境に依存）|
|IP等級|IP65|
|寸法|85 x 55 x 6.5 mm|
|デバイス重量|32g|
|動作温度|-20℃～+60<a name="ole_link12"></a>℃|
|動作湿度|5% - 95%（結露なし）|
|認証|CE /FCC /TELEC /RoHS /REACH|

**位置情報**

|GNSSコンステレーション|<p>T1000-A/B: GPS/GLONASS/Galileo/BeiDou/QZSS</p><p>T1000-C/D: GPS/ BeiDou</p>|
| :- | :- |
|GNSS感度|-145dBm コールドスタート / -160 dBm トラッキング|
|GNSS位置精度|2.5m CEP 50%|
|Wi-Fi測位|パッシブスキャン、スキャンした4つのMACアドレスをアップロード|
|Bluetooth測位|信号が最も強い3つのビーコンのMACアドレスをアップロード|
|データキャッシュ|LoRaWANネットワークがない場合に1000データをキャッシュ|

**バッテリー**

|バッテリー容量|充電式リチウムバッテリー、700mAh|
| :- | :- |
|\*バッテリー寿命の推定|1回の充電で4ヶ月（1時間ごとにアップリンク、GNSSデータのみ）|
|バッテリー寿命モニタリング|定期的にバッテリーレベルをアップリンク|
|充電ケーブル（アダプターは含まれません）|USB磁気充電ケーブル、1メートル|
|<a name="ole_link9"></a>電源入力電圧|4.7～5.5V DC|
|充電温度制限|0～+45℃（温度範囲を超えると充電が制限され、LEDが高速点滅）|