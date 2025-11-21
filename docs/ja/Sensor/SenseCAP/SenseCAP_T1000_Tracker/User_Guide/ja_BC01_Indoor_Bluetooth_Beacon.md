---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 屋内 Bluetooth ビーコン
keywords:
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /ja/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/29/2025
  author: Zeke
---

BLE（Bluetooth Low Energy）ロケーションビーコンは、定期的に Bluetooth 信号を送信する小型のワイヤレスデバイスです。これらの信号は、SenseCAP T1000 Tracker などの Bluetooth 対応デバイスで検出でき、ビーコンとの近接性を判定することで、屋内測位、資産追跡、その他のアプリケーション向けの位置ベースソリューションを構築できます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

### Bluetooth 屋内測位システム

GPS は屋外での位置特定能力を実証しています。現在、私たちは屋内測位にも移行する傾向があり、Bluetooth ビーコンが屋内での精密測位を可能にします。SenseCAP T1000 Tracker と組み合わせて屋内測位ソリューションを構築します。

対象エリアに Bluetooth ビーコンを配置すると、トラッカーがビーコンから送信される信号を受信し、測位精度はメートルレベル（2-3メートル）になります。資産追跡、ルート計画、逆車検索などの機能を実現でき、ミニプログラムやアプリに統合できます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
詳細については[屋内測位システム](https://wiki.seeedstudio.com/ja/IPS_For_SenseCAP_T1000_Traker)をご確認ください。
:::

### 特徴

- **Bluetooth® LE 5.0**
- **長いバッテリー寿命**: 交換可能なリチウムバッテリー、5年以上（デフォルト設定で0dBm/500ms）。
- **長距離伝送**: 開放エリアで最大120メートル。
- **高い互換性**: iOS 7.0+ および Android 4.3+ システムと互換性あり

### ボタン機能

|電源オン|電源オフ|
| :-: | :-: |
|製品の背面カバーを開き、ボタンを3秒間長押しすると、青色LEDが5秒間点灯し、起動成功を示します。|電源オン状態で、製品の背面カバーを開き、ボタンを3秒間長押しすると、青色LEDが5回点滅してシャットダウン成功を示します。|

## 配置ガイドライン

- Bluetooth ビーコンは通常、地上2.5-3m の高さに配置され、水平間隔は5-10m です。これらのビーコンは、環境に応じて列状配置または三角形パターンで均等に配置できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 配置戦略はシナリオによって異なります。例えば、屋内設定では中央（狭い）配置または三角格子分布（疎）が含まれる場合があります。屋内廊下では、中心線配置（約3m幅の廊下）または二列配置（より広い廊下）のオプションがあります。高層建物（階高 > 4m）での天井取り付けは避けてください。代わりに、約5m間隔で壁または低レベル設置を選択してください。屋外では、開放空間に三角格子パターンを使用してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>赤いものは間違った例で、青いものは正しい例です。</i></center>

- 湿度の高い環境では、配置時に製品の防水等級を考慮し、長時間の水への露出を防いでください。

- 製品を配置する際は、金属、ガラス、その他の障害物から距離を保ち、角の近くに配置しないでください。

:::tip
配置ガイドラインは参考用です。実際の配置は、顧客の測位アルゴリズム、製品設置環境、テスト条件に基づいてカスタマイズする必要があります。
:::

### 磁石吸着設置手順

#### 設置条件

- 製品設置用のツールまたはプラットフォーム材料テーブルは、磁石で引き付けることができる機器またはブラケットの表面である必要があります；
- 推奨設置温度範囲：20~40°C；
- 製品を設置する際は、角、その他の周囲の磁場、大きな障害物から離すようにしてください。

#### 設置手順

製品の磁気接触面を、設置するブラケットまたは機器の表面に直接吸着させることができます。

:::tip
磁気製品の体積は一般製品（磁石吸着なし）よりも重いため、落下のリスクを避けるために、このような製品を天井などの表面に設置することは推奨されません。
:::

### 3M接着剤/釘なし接着剤設置手順

#### 設置条件

- 製品を設置するプラットフォーム材料の表面は、セラミック、ガラス/エポキシ樹脂、アクリル、PBT、ABS、PC、硬質PVCなどの平坦で乾燥した表面である必要があります。異なる両面テープモデルの粘着性と設置可能性の違いにより、灰色のテクスチャ、不完全な乾燥、老化、湿度のある壁（セメント、石膏ボードなど）でのデフォルト両面テープの使用は推奨されません。剥離のリスクがあります；
- 推奨設置温度範囲：20~40℃；
- 製品は金属、ガラス遮蔽、その他の障害物から離して設置する必要があります；製品は角の近くに配置しないでください。

#### 設置手順

- 設置前：貼り付けるアプリケーションプラットフォームまたはツールの表面を清掃し、貼り付け面が乾燥してほこりがないことを確認してください；
- 貼り付け時は、両面テープを手またはツールでデバイスに貼り付け、1-2秒間押してください。数回押すことを繰り返して、製品の両面テープまたは釘なし接着剤とアプリケーション貼り付け面をより良く接着させてください。

:::tip
低温環境または過酷な環境で製品を設置する必要がある場合は、最良の効果を得るために両面テープ + 強力釘なし接着剤を使用して製品を設置することを推奨します。釘なし接着剤の詳細については、営業スタッフにお問い合わせください。
:::

### 仕様

**一般仕様**

|UUID|PC|
| :-: | :-: |
|色|白|
|IP等級|なし|
|寸法(L\*W\*H)|Φ50\*20.5mm|
|重量|39g（バッテリー含む）|
|バッテリー|リチウムバッテリー、2400mAh|
|チップ|nRF52 シリーズ|
|Bluetooth バージョン|BLE 5.0|
|Bluetooth プロトコル|iBeacon|
|センサー|加速度計サポート|
|LED|含まれる|
|アプリ|BeaconSET|
|動作温度|-30~60°C|
|バッテリー寿命|<p>5年以上</p><p>（デフォルト設定で0dBm/500ms）。</p><p></p>|

**デフォルトブロードキャストパラメータ**

|**パラメータ**|**デフォルト値**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|測定電力|-59dBm|
|Tx 電力|-30 - +4dBm、デフォルト 0dBm|
|Adv 間隔|100ms~10s、デフォルト 500ms|
|パスワード|seeed123 （文字と数字）|
|シリアル ID|なし|
|デバイス名|BC01 （1-7文字）|
|接続モード|はい/いいえ|
|ソフトリブート|seeed123 （パスワードと同じ）|
|バッテリーサービス|<p>バッテリーアイコン表示、リアルタイム検出</p><p>フルグリッドは100%</p>|

**互換性情報**

|**システム**|**デバイス**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,など。</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,など。</p><p></p>|

## 設定

- **ステップ 1**: `Beaconset` アプリをダウンロード

- **ステップ 2**: ビーコンに接続します。ビーコンラベルにも記載されているMACアドレスで区別できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3**: 設定

必要に応じてパラメータを変更し、`Save` をクリックします。プロンプトが表示されたら、パスワード `seeed123` を入力して確認してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
