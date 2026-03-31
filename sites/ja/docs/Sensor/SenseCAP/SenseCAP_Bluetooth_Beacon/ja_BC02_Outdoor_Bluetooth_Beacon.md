---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC02 屋外用 Bluetooth Beacon
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/bc02-outdoor-bluetooth-beacon.webp
slug: /bluetooth_beacon02_for_sensecap_tracker
sku: 113991456
last_update:
  date: 03/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/bluetooth_beacon02_for_sensecap_tracker/
---

BLE（Bluetooth Low Energy）ロケーションビーコンは、一定間隔で Bluetooth 信号を送信する小型ワイヤレスデバイスです。これらの信号は、[**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html) のような Bluetooth 対応デバイスによって検出され、ビーコンとの距離を把握することで、屋内測位、資産トラッキングなどのアプリケーション向けに位置情報ベースのソリューションを構築できます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-113991456-outdoor-bluetooth-beacon.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Outdoor-Bluetooth-Beacon-p-6468.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
<br />

:::tip バージョン比較
![バージョン比較](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### 特長

- **Bluetooth® LE 5.0**
- **長寿命バッテリー**：交換可能なリチウム電池、デフォルト設定で 7 年以上。
- **長距離伝送**：見通しの良い場所で最大 75m。
- **堅牢で耐久性に優れる**：過酷な環境向けに IP68 防水および IK08 耐衝撃

## 展開ガイドライン

- Bluetooth ビーコンは通常、地上 2.5〜3m の高さに設置し、水平方向の間隔は 5〜10m とします。環境に応じて、縦列配置または三角形パターンで均等に分散配置することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 展開戦略はシナリオによって異なります。例えば屋内では、中央（密）配置や三角グリッド分布（疎）などがあります。屋内の廊下では、幅約 3m の廊下にはセンターライン配置、より広い廊下には 2 列配置が選択できます。高層建物（階高 > 4m）では天井への設置は避けてください。その代わりに、約 5m 間隔で壁面または低い位置に設置します。屋外の開けた空間では三角グリッドパターンで配置します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>赤は誤った例で、青は正しい例です。</i></center>

- 多湿環境では、長時間水にさらされることを防ぐため、展開時に製品の防水等級を考慮してください。

- 製品を設置する際は、金属、ガラス、その他の遮蔽物から距離を取り、コーナー付近には設置しないでください。

:::tip
本展開ガイドラインはあくまで参考情報です。実際の展開は、顧客の測位アルゴリズム、製品設置環境、およびテスト条件に基づいてカスタマイズしてください。
:::

### 磁石吸着による取り付け手順

#### 取り付け条件

- 製品を取り付ける工具または設置面の材質は、磁石で吸着できる機器またはブラケットの表面である必要があります。
- 推奨取り付け温度範囲：20〜40℃；
- 製品を取り付ける際は、できるだけコーナー、周囲の他の磁場、大きな障害物から離してください。

#### 取り付け手順

製品の磁気接触面を、取り付け対象のブラケットまたは機器の表面に直接吸着させてください。

:::tip
磁石付き製品は、一般的な製品（磁石吸着なし）よりも重量が重いため、落下の危険を避けるために、天井などの面への取り付けは推奨しません。
:::

### 3M 接着テープ／釘不要接着剤による取り付け手順

#### 取り付け条件

- 製品を取り付けるプラットフォーム材の表面は、セラミック、ガラス／エポキシ樹脂、アクリル、PBT、ABS、PC、硬質 PVC などの平坦で乾燥した面である必要があります。両面テープの種類によって粘着性や施工性が異なるため、グレーのテクスチャがある壁面、完全に乾いていない面、劣化・多湿の壁面（セメント、石膏ボードなど）にデフォルトの両面テープを使用することは推奨されません。剥がれ落ちるリスクがあります。
- 推奨取り付け温度範囲：20〜40℃；
- 製品は金属、ガラスシールド、その他の遮蔽物から離して設置してください。また、コーナー付近には配置しないでください。

#### 取り付け手順

- 取り付け前：貼り付け対象のプラットフォームまたは工具の表面を清掃し、貼り付け面が乾燥しており、ほこりがないことを確認します。
- 貼り付け時：両面テープを手または工具でデバイスに貼り付け、1〜2 秒間押さえます。この押さえ作業を数回繰り返し、製品の両面テープまたは釘不要接着剤と貼り付け面との密着性を高めます。

:::tip
低温環境または過酷な環境で製品を取り付ける必要がある場合は、両面テープ＋強力な釘不要接着剤を併用して取り付けることを推奨します。釘不要接着剤の詳細については、弊社営業担当までお問い合わせください。
:::

### 仕様

**一般仕様**

|パラメータ| 値 |
| :-: | :-: |
|材質| ABS+PC |
|色|Yellow|
|IP 等級| IP68 |
|IK 等級| IK08 |
|寸法(L\*W\*H)|115\*100\*29mm|
|重量| 169.1g（電池含む）|
|バッテリー|リチウムイオン電池,4000mAh|
|チップ|nRF52 series|
|Bluetooth バージョン|BLE 5.0|
|Bluetooth プロトコル|iBeacon|
|動作温度|-40~85°C|
|動作湿度| 0~95%RH,結露なきこと|
|送信電力| -40~+4dBm|
|送信間隔|  100ms~5s|
|送信距離| 見通しの良い場所で最大 75m|
|バッテリー寿命|<p>7 年以上</p><p>（デフォルト設定時）。</p><p></p>|

**デフォルト送信パラメータ**

|**パラメータ**|**デフォルト値**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|測定電力|-59dBm|
|送信電力|0dBm|
|Adv 間隔|300ms|
|パスワード|seeed123 （英字と数字）|

**互換性情報**

|**システム**|**デバイス**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>