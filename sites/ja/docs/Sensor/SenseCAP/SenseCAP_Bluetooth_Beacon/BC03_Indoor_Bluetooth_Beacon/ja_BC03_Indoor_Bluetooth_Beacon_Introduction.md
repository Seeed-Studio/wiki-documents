---
title: はじめに
description: SenseCAP_Bluetooth_Beacon_for_Tracker_Introduction
keywords:
  - ビーコン
  - SenseCAP
  - BLE
  - 位置決め
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_introduction
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/bluetooth_beacon03_for_tracker_introduction/
---

# BC03 屋内 Bluetooth ビーコン概要

SenseCAP BC03 屋内 Bluetooth ビーコンは、一定間隔で Bluetooth 信号を送信する小型の無線デバイスです。これらの信号は、[**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html) のような Bluetooth 対応デバイスによって検出され、ビーコンとの距離を推定することで、屋内測位、資産トラッキングなどの位置情報ソリューションを構築し、近接検知とメートルレベルの屋内測位を実現します。


![BC03](https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
<br />

:::tip バージョン比較
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

## Bluetooth 屋内測位システム

GPS は屋外では有効ですが、屋内では性能に制限があります。屋内環境に BC03 Bluetooth ビーコンを配置することで、SenseCAP トラッカーはビーコン信号をスキャンし、RSSI 値に基づいて距離を推定できます。測位アルゴリズムと組み合わせることで、**メートルレベルの屋内測位精度（約 2～3 メートル）** を実現します。

代表的なアプリケーションシナリオは次のとおりです：

* 資産トラッキング
* 人員位置情報
* 経路分析
* 屋内ナビゲーション

このソリューションは、クラウドプラットフォーム、モバイルアプリケーション、ミニプログラムに統合できます。

![Indoor Positioning](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

SenseCAP BLE Beacons と SenseCAP LoRaWAN Trackers とシームレスに連携するよう設計された、オープンソースの Bluetooth 屋内測位システムを提供しています。
このソリューションは完全にオープンソースでカスタマイズ可能であり、ユーザーは GitHub リポジトリに基づいて独自のバックエンドサービスを構築・変更・統合できます。

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
詳細については、[Indoor Positioning System](https://wiki.seeedstudio.com/ja/solutions/indoor-positioning-bluetooth-lorawan-tracker/) を確認してください。
:::

## 特長
---

* **Bluetooth® LE 5.0**
* **超低消費電力**：交換可能なリチウム電池、**5 年以上の電池寿命**（0 dBm / 500 ms、デフォルト設定）
* **長距離伝送**：見通しの良い環境で最大 **130 m**
* **簡単な設置**：絶縁フィルムを引き抜いて貼り付けるだけで設置でき、施工コストを削減します。
* **UV 保護**：UV 殺菌ランプなどのシナリオに適しており、外観を損ないません。
* **柔軟な設定**：アドバタイジング間隔と送信電力を設定可能
* **高い互換性**：iOS 7.0+ および Android 4.3+ と互換
* **オプションの加速度センサー対応**：動きや振動検知用の PCBA フットプリントを予備搭載

---
:::info
BC03 は高利得全方向性 BLE アンテナ、低消費電力設計、およびユーザーインタラクション機能を備えています：

* **ビーコン送信機能の強化**
BLE アドバタイジングの安定性と RSSI の一貫性を最適化し、複雑な環境における屋内測位精度と堅牢性を向上させます。
* **アンテナ設計**
優れた放射効率と指向性の一貫性を持つオンボードアンテナにより、設置方向を厳密に調整することなく、より長い通信距離と安定した通信を実現します。
* **より長いバッテリー寿命**
低消費電力設計をさらに最適化しました。同一設定（0 dBm / 500 ms）の下で、BC03 は大規模かつ長期的な展開を実現します。
* **LED ステータスの追加**
青色 LED により、電源投入時および動作中の直感的なデバイスステータスフィードバックを提供し、デバイスの起動およびアップグレード状態を表示します。
:::

## 仕様

### 一般仕様

| 項目                | 説明                          |
| ------------------- | ----------------------------- |
| 材質                | ABS（耐 UV）                  |
| 色                  | 白                            |
| IP 等級             | なし                          |
| 寸法(L\*W\*H)       | Φ50*20.5mm                    |
| 重量                | 約 45 g（電池含む）           |
| バッテリー           | リチウムイオン電池、2400 mAh  |
| チップ              | nRF52 シリーズ                |
| Bluetooth バージョン | BLE 5.0（BLE 4.1 と下位互換） |
| Bluetooth プロトコル | iBeacon                       |
| センサー            | 加速度センサー（オプション） |
| LED                 | 1 × 青色 LED                  |
| アプリ              | SenseCraft APP                |
| 動作温度            | -20 ～ 60 °C                  |
| バッテリー寿命      | > 5 年（デフォルト設定で 0 dBm / 500 ms） |

### デフォルトブロードキャストパラメータ

| パラメータ           | デフォルト値                       |
| -------------------- | ---------------------------------- |
| UUID                 | 5EEEDBCA-AC02-43B0-B0CF-C6EB07647825
 |
| Major                | デバイスの MAC アドレス（下位 2 バイト）から自動割り当て |
| Minor                | デバイスの MAC アドレス（上位 2 バイト）から自動割り当て |
| Measured Power       | -59 dBm              |
| Tx Power             | -40 ~ +4dBm（デフォルト 0dBm）   |
| Advertising Interval | 20ms ~ 30s（デフォルト 500ms）  |
| Password             | 12345678                       |
| Device Name          | 03                             |

### 互換性情報

| システム     | デバイス                                   |
| ------------ | ----------------------------------------- |
| BLE          | BLE 4.1+                                  |
| iOS 7.0+     | iPhone 4S、iPhone 5/5C/5S、iPhone 6/6Plus/6S/6S Plus、iPhone 7/7Plus、iPad mini/mini2/4/Air/Pro など      |
| Android 4.3+ | Samsung、XIAOMI、HUAWEI、ONEPLUS、vivo、OPPO など |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択できる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>