---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC02 屋外用 Bluetooth ビーコン
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/bc02-outdoor-bluetooth-beacon.webp
slug: /bluetooth_beacon02_for_sensecap_tracker
sku: 113991456
last_update:
  date: 04/02/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/ja/bluetooth_beacon02_for_sensecap_tracker/
---
BLE（Bluetooth Low Energy）ロケーションビーコンは、一定間隔で Bluetooth 信号を送信する小型のワイヤレスデバイスです。これらの信号は、[**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html) などの Bluetooth 対応デバイスによって検出され、ビーコンとの距離を判定することで、屋内測位、資産トラッキングなどのアプリケーション向けに位置情報ベースのソリューションを構築できます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-113991456-outdoor-bluetooth-beacon.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Outdoor-Bluetooth-Beacon-p-6468.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
<br />

:::tip バージョン比較
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### 特長

- **Bluetooth® LE 5.0**
- **長寿命バッテリー**：交換可能な Li/SOCl2 バッテリー、デフォルト設定で 7 年以上。
- **長距離通信**：見通しの良い場所で最大 75m。
- **堅牢で耐久性に優れる**：過酷な環境向けの IP68 防水および IK08 耐衝撃性能

## 展開ガイドライン

- Bluetooth ビーコンは通常、地面から 2.5〜3m の高さに設置し、水平方向の間隔は 5〜10m とします。設置環境に応じて、縦列状に配置するか、三角形パターンで均等に分散配置することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 展開戦略はシナリオによって異なります。例えば屋内環境では、中央（密）配置や三角グリッド（疎）配置が考えられます。屋内の廊下では、幅約 3m の廊下にはセンターライン配置を、それより広い廊下には 2 列配置を採用できます。高層階（階高 > 4m）での天井設置は避けてください。その代わり、壁面または低い位置に約 5m 間隔で設置します。屋外の開けたスペースでは、三角グリッドパターンで配置します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>赤は誤った例、青は正しい例です。</i></center>

- 多湿環境では、長時間の水没を防ぐため、展開時に製品の防水等級を考慮してください。

- 設置の際は、金属、ガラス、その他の遮蔽物から距離をとり、コーナー付近には設置しないでください。

:::tip
本展開ガイドラインは参考情報にすぎません。実際の展開は、顧客側の測位アルゴリズム、製品の設置環境、およびテスト条件に基づいてカスタマイズする必要があります。
:::

### マグネット吸着による取り付け手順

#### 取り付け条件

- 製品を取り付ける工具や設置面の素材は、マグネットで吸着できる機器またはブラケットの表面である必要があります。
- 推奨取り付け温度範囲：20〜40℃；
- 製品を取り付ける際は、できるだけコーナーや周囲の他の磁場、大きな障害物から離してください。

#### 取り付け手順

製品の磁気接触面を、取り付け対象のブラケットや機器の表面に直接吸着させてください。

:::tip
磁石付き製品は、一般的な製品（マグネット吸着なし）よりも重量が重くなるため、落下リスクを避けるために天井などの面への取り付けは推奨しません。
:::

### 3M 接着剤／釘不要接着剤による取り付け手順

#### 取り付け条件

- 製品を取り付ける設置面は、セラミック、ガラス／エポキシ樹脂、アクリル、PBT、ABS、PC、硬質 PVC などの平坦で乾燥した表面である必要があります。両面テープの種類によって粘着性や施工性が異なるため、グレーのテクスチャ、乾燥不良、経年劣化、多湿（セメント、石膏ボードなど）の壁面に付属の両面テープを使用することは推奨されません。脱落のリスクがあります。
- 推奨取り付け温度範囲：20〜40℃；
- 製品は金属、ガラスシールドまたはその他の障害物から離して設置してください。製品はコーナー付近に配置しないでください。

#### 取り付け手順

- 取り付け前：貼り付け対象となる設置面や工具の表面を清掃し、貼り付け面が乾燥しており、ほこりがないことを確認します。
- 貼り付け時：両面テープを手または工具でデバイスに貼り付け、1〜2 秒間押さえつけます。この押さえ付けを数回繰り返し、製品の両面テープまたは釘不要接着剤と設置面との密着性を高めてください。

:::tip
低温環境または過酷な環境に製品を設置する必要がある場合は、両面テープ＋強力な釘不要接着剤を併用して取り付けることを推奨します。釘不要接着剤の詳細については、弊社営業担当までお問い合わせください。
:::

### 仕様

**一般仕様**

|Parameters| Value |
| :-: | :-: |
|Material| ABS+PC |
|Color|Yellow|
|IP rate| IP68 |
|IK rate| IK08 |
|Dimension(L\*W\*H)|115\*100\*29mm|
|Weight| 169.1g(include battery)|
|Battery|Li/SOCl2 battery,4000mAh|
|Chip|nRF52 series|
|Bluetooth Version|BLE 5.0|
|Bluetooth Protocol|iBeacon|
|Working temperature|-40~85°C|
|Working Humidity| 0~95%RH,no condensation|
|Broadcasting Power| -40~+4dBm|
|Broadcasting Frequency|  100ms~5s|
|Broadcasting Distance| Up to 75 meters in open areas|
|Battery life|<p>More than 7 years</p><p>(in default configuration).</p><p></p>|

**デフォルトのブロードキャストパラメータ**

|**Parameters**|**Default Value**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Measured power|-59dBm|
|Transmission Power|0dBm|
|Adv Interval|300ms|
|Password|seeed123 （英数字）|

**互換性情報**

|**System**|**Devices**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>