---
title: ユーザーガイド
description: SenseCAP_Bluetooth_Beacon_for_Tracker_User_Guide
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - 位置測位
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_user_guide
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/bluetooth_beacon03_for_tracker_user_guide/
---

# BC03 屋内 Bluetooth Beacon ユーザーガイド

![BC03](https://files.seeedstudio.com/wiki/BC03/6-BC03-Bluetooth-Beacon.jpg)

## 電源 & LED

* **電源オン**: 背面にあるバッテリータブを引き抜くだけです。BC03 は自動的に起動し、デバイスの LED インジケーターが点灯します。
* **電源オフ**: 本製品は連続動作を前提として設計されており、物理的な電源ボタンはありません。電源を切るには、バッテリーを手動で取り外す必要があります。

## 配置ガイドライン

* 推奨設置高さ: 地上から **2.5～3 m**
* 推奨間隔: 精度要件に応じて **5～10 m**
* 配置パターン:
  * 開放空間には三角グリッド配置
  * 廊下には単列または二列配置

![Deployment Example 1](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png)

補足事項:

* 天井高が **4 m** を超える環境では天井設置を避けてください
* Beacon を**金属面、ガラスシールド、コーナー**から離して設置してください
* 多湿環境では、防水・防湿などの環境保護要件を考慮してください

![Deployment Example 2](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png)

*赤い例は誤った配置、青い例は正しい配置です。*

:::note
配置ガイドラインはあくまで参考です。実際の配置は、位置測位アルゴリズムおよび現場でのテスト結果に基づいて最適化してください。
:::

## 取り付け手順

### 3M 両面テープによる取り付け

#### 取り付け条件

* 適した表面: セラミック、ガラス、エポキシ樹脂、アクリル、ABS、PC、硬質 PVC
* セメント、石膏ボードなどの粗い面、湿った面、劣化した面には推奨されません
* 推奨取り付け温度: **20～40°C**

#### 取り付け手順

1. 取り付け面を清掃し、乾燥させます
2. 絶縁フィルムを引き抜き、そのまま貼り付けて取り付けます
3. 1～2 秒間しっかり押さえ、密着を確保するために数回繰り返します

:::note
低温または過酷な環境では、強力な釘不要接着剤と両面テープを併用することを推奨します。
:::

## 設定

BC03 は、**SenseCraft APP** および生産ツールを通じてパラメータ設定と一括プロビジョニングをサポートします。

- **ステップ 1**: `SenseCraft` APP をダウンロード

    - iOS の場合、App Store で「SenseCraft」と検索してダウンロードしてください。
    - Android の場合、Google Store で「SenseCraft」と検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>


- **ステップ 2**: Beacon の接続 & 設定

User ページで `Device Bluetooth Configuration` をクリックし、`Bluetooth Beacon` を選択してから `BC03` を選びます。その後、Device List ページに入ります。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration.png)

デバイスの MAC アドレスに基づいて、設定する Beacon を選択します。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration2.png)

デバイスの UUID、MAJOR、MINOR、送信電力、送信間隔、およびパスワードを変更できます。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration3.png)

**一括設定**

Save & Batch Configuration をクリックし、デバイス数とパスワードを入力して一括設定を開始します。進行バーが完了したら、一括設定された Beacon ファイルをダウンロードし、設定状況を確認できます。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration4.png)


- **ステップ 3**: RSSI カーブの表示

Beacon を選択し、RSSI Curve をクリックします。動的な RSSI カーブを確認できます。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_view.png)

:::tip
デバイス数が少ない場合（≤ 7～8 台）は、各デバイスを手動で設定することを推奨します。より大規模な展開では、一括設定を使用してください。複数デバイスを扱う際に、より高い安定性を提供します。
:::

## Bluetooth 屋内位置測位システム

GPS は屋外では高い性能を発揮しますが、オフィス、倉庫、病院、ショッピングモールなどの屋内環境では衛星信号が遮られることがよくあります。高精度な屋内位置測位を実現するために、BC03 Bluetooth Beacon と SenseCAP トラッカーを組み合わせて使用します。

**動作原理**

**1. BC03 Beacon の配置**
BC03 Beacon を固定位置に設置します。必ず   
[Deployment Guidelines](#配置ガイドライン) に厳密に従ってください。そうでない場合、配置結果が満足のいくものにならない可能性があります。 
各 Beacon は継続的に Bluetooth 信号を送信します。

**2. トラッカーが Beacon 信号をスキャン**
SenseCAP LoRaWAN トラッカーが周囲の Beacon 信号をスキャンし、RSSI を測定します。

**3. 距離推定**
システムは RSSI 値に基づいて、トラッカーと各 Beacon 間の相対距離を推定します。

**4. 位置計算**
位置測位アルゴリズムを用いて、システムがデバイスの位置を算出します。

位置測位アルゴリズムと組み合わせることで、**メートルレベルの屋内位置測位精度（約 2～3 m）** を実現できます。

代表的なアプリケーションシナリオは次のとおりです:

* **資産トラッキング:** 倉庫や工場内の高価な設備の位置を特定します。
* **人員位置測位:** 病院、鉱山、建設現場などで作業者の安全を確保します。
* **動線分析:** 小売店舗やオフィス空間における人の流れやヒートマップを分析します。
* **屋内ナビゲーション:** 大規模施設内の訪問者にリアルタイム位置情報を提供します。

このソリューションは、クラウドプラットフォーム、モバイルアプリケーション、ミニプログラムに統合できます。

![BC03](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

SenseCAP BLE Beacon と SenseCAP LoRaWAN Tracker とシームレスに連携する、オープンソースの Bluetooth 屋内位置測位システムを提供しています。

このソリューションは完全にオープンソースでカスタマイズ可能であり、ユーザーは GitHub リポジトリに基づいて独自のバックエンドサービスを構築・変更・統合できます。

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
詳細については、[Indoor Positioning System](https://wiki.seeedstudio.com/ja/solutions/indoor-positioning-bluetooth-lorawan-tracker/) を確認してください。
:::

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>