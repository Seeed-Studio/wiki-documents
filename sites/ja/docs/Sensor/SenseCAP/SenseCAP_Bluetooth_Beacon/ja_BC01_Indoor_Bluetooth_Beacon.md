---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC01 屋内 Bluetooth ビーコン
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon01_for_sensecap_tracker
sku: 113991194
last_update:
  date: 04/02/2026
  author: Janet
createdAt: '2023-10-19'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/ja/bluetooth_beacon01_for_sensecap_tracker/
---
BLE（Bluetooth Low Energy）ロケーションビーコンは、一定間隔で Bluetooth 信号を送信する小型のワイヤレスデバイスです。これらの信号は、[**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html) などの Bluetooth 対応デバイスによって検出され、ビーコンとの距離を判定し、屋内測位、資産トラッキングなどのアプリケーション向けに位置情報ベースのソリューションを構築できます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
<br />

:::tip バージョン比較
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### Bluetooth 屋内測位システム

GPS は屋外での位置特定能力がすでに実証されています。現在、私たちは屋内測位にも移行しつつあり、Bluetooth ビーコンによって屋内での高精度測位が可能になります。SenseCAP T1000 Tracker と組み合わせて、屋内測位ソリューションを構築できます。

対象エリアに Bluetooth ビーコンを展開すると、トラッカーがビーコンから送信される信号を受信し、測位精度はメートルレベル（2～3 メートル）となります。これにより、資産トラッキング、ルート計画、車両の逆検索などの機能を実現でき、ミニアプリやアプリへの統合も可能です。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
詳細については [Indoor Positioning System](https://wiki.seeedstudio.com/ja/IPS_For_SenseCAP_T1000_Traker) を参照してください。
:::

### 特長

- **Bluetooth® LE 5.0**
- **長寿命バッテリー**：交換可能な Li/SOCl2 バッテリー、5 年以上（デフォルト設定 0dBm/500ms）。
- **長距離伝送**：見通しの良い環境で最大 120 メートル。
- **高い互換性**：iOS 7.0+ および Android 4.3+ システムと互換

### ボタン機能

|電源オン|電源オフ|
| :-: | :-: |
|製品のバックカバーを開け、ボタンを 3 秒間長押しすると、青色 LED が 5 秒間点灯し、起動成功を示します。|電源オンの状態で製品のバックカバーを開け、ボタンを 3 秒間長押しすると、青色 LED が 5 回点滅し、電源オフ成功を示します。|

## 配置ガイドライン

- Bluetooth ビーコンは通常、地上から 2.5～3m の高さに設置し、水平方向の間隔は 5～10m とします。環境に応じて、縦列配置または三角形状に均等配置することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 配置戦略はシナリオによって異なります。例えば屋内環境では、中央（狭い）配置や三角格子（疎）配置が考えられます。屋内の廊下では、幅約 3m の場合は中心線上に配置し、より広い廊下では 2 列配置とします。高層ビル（階高 > 4m）では天井への設置は避け、代わりに壁面または低い位置に約 5m 間隔で設置してください。屋外の開けたスペースでは三角格子パターンで配置します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>赤は誤った例で、青は正しい例です。</i></center>

- 多湿な環境では、長時間の水への曝露を防ぐため、展開時に製品の防水等級を考慮してください。

- 製品を設置する際は、金属、ガラス、その他の障害物から距離を取り、コーナー付近には設置しないでください。

:::tip
これらの配置ガイドラインはあくまで参考情報です。実際の配置は、顧客の測位アルゴリズム、製品設置環境、およびテスト条件に基づきカスタマイズしてください。
:::

### 磁石吸着による取り付け手順

#### 取り付け条件

- 製品を取り付ける工具または台の材質面は、磁石で吸着可能な機器またはブラケットの表面である必要があります。
- 推奨取り付け温度範囲：20～40°C；
- 製品を取り付ける際は、できるだけコーナーや他の周囲磁場、大きな障害物から離してください。

#### 取り付け手順

製品の磁気接触面を、取り付け対象のブラケットまたは機器の表面に直接吸着させて固定します。

:::tip
磁石付き製品は、一般的な製品（磁石吸着なし）よりも重量が重くなるため、落下リスクを避けるためにも、このような製品を天井などの面に取り付けることは推奨しません。
:::

### 3M 接着テープ／釘不要接着剤による取り付け手順

#### 取り付け条件

- 製品を取り付ける台の表面は、セラミック、ガラス／エポキシ樹脂、アクリル、PBT、ABS、PC、硬質 PVC などの平坦で乾燥した面である必要があります。両面テープの種類によって粘着性や施工性が異なるため、グレーの質感がある壁面、未乾燥、劣化、湿気のある壁面（セメント、石膏ボードなど）にデフォルトの両面テープを使用することは推奨されません。剥落のリスクがあります。
- 推奨取り付け温度範囲：20～40℃；
- 製品は金属、ガラス遮蔽、その他の障害物から離して設置してください。また、コーナー付近に配置しないでください。

#### 取り付け手順

- 取り付け前：貼り付け対象の台や工具の表面を清掃し、貼り付け面が乾燥しており、ほこりがないことを確認します。
- 貼り付け時：両面テープを手または工具でデバイスに貼り付け、1～2 秒間押し付けます。この押し付けを数回繰り返し、製品の両面テープまたは釘不要接着剤と、貼り付け対象面との密着を高めます。

:::tip
低温環境または過酷な環境で製品を取り付ける必要がある場合は、両面テープ＋強力な釘不要接着剤を併用して取り付けることを推奨します。釘不要接着剤の詳細については、弊社営業担当までお問い合わせください。
:::

### 仕様

**一般仕様**

|材質|PC|
| :-: | :-: |
|色|白|
|IP 等級|なし|
|寸法 (L\*W\*H)|Φ50\*20.5mm|
|重量|39g（電池含む）|
|バッテリー|Li/SOCl2 バッテリー、2400mAh|
|チップ|nRF52 シリーズ|
|Bluetooth バージョン|BLE 5.0|
|Bluetooth プロトコル|iBeacon|
|センサー|加速度センサー対応|
|LED|搭載|
|APP|BeaconSET|
|動作温度|-30～60°C|
|バッテリー寿命|<p>5 年以上</p><p>（デフォルト設定 0dBm/500ms）。</p><p></p>|

**デフォルト送信パラメータ**

|**パラメータ**|**デフォルト値**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|測定電力|-59dBm|
|Tx Power|-30 - +4dBm、デフォルト 0dBm|
|アドバタイズ間隔|100ms～10s、デフォルト 500ms|
|Password|seeed123 （英字と数字）|
|シリアル ID|なし|
|デバイス名|BC01（1～7 文字）|
|接続モード|Yes/No|
|ソフトリブート|seeed123 （Password と同じ）|
|バッテリーサービス|<p>バッテリーアイコン表示、リアルタイム検出</p><p>フル表示で 100%</p>|

**互換性情報**

|**システム**|**デバイス**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S、iPhone 5/5C/5S、</p><p>iPhone 6/6Plus/6S/6SPlus、iPhone 7/7Plus、</p><p>iPad mini/mini2/4/Air/Pro など</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO など</p><p></p>|

## 設定

- **手順 1**：`Beaconset` APP をダウンロードします。

- **手順 2**：ビーコンに接続します。MAC アドレスで識別できます。MAC アドレスはビーコンのラベルにも記載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **手順 3**：設定

必要に応じてパラメータを変更し、`Save` をクリックします。プロンプトが表示されたら、Password `seeed123` を入力して確定します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
