---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: E5 Bluetooth Beacon
keywords:
- BLE
- 位置測定
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

BLE（Bluetooth Low Energy）ロケーションビーコンは、小型の無線デバイスで、定期的にBluetooth信号を送信します。これらの信号は、SenseCAP T1000 TrackerのようなBluetooth対応デバイスによって検出され、ビーコンとの近接性を判断することで、屋内位置測定、資産追跡、その他のアプリケーション向けの位置ベースのソリューションを構築することができます。



<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>


### Bluetooth屋内位置測定システム

GPSは屋外での位置測定能力を証明してきました。現在では、屋内位置測定にも注目が集まっており、Bluetoothビーコンが屋内での精密な位置測定を可能にします。SenseCAP T1000 Trackerと組み合わせて、屋内位置測定ソリューションを構築できます。


ターゲットエリアにBluetoothビーコンを配置し、トラッカーがビーコンから送信される信号を受信します。位置測定の精度はメートルレベル（2～3メートル）で、資産追跡、ルート計画、車両逆検索などの機能を実現できます。また、ミニアプリやアプリに統合することも可能です。



<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
詳細については、[屋内位置測定システム](https://wiki.seeedstudio.com/ja/IPS_For_SenseCAP_T1000_Traker)をご確認ください。
:::



### 特徴

* **Bluetooth® LE 5.0**
* **長寿命バッテリー**：交換可能なリチウムバッテリー、デフォルト設定（0dBm/500ms）で5年以上使用可能。
* **長距離伝送**：開けた場所で最大120メートル。
* **高い互換性**：iOS 7.0+およびAndroid 4.3+システムに対応。



### ボタン機能
|電源オン|電源オフ|
| :-: | :-: |
|製品の背面カバーを開け、ボタンを3秒間押し続けると、青色LEDが5秒間点灯し、起動が成功します。|電源オンの状態で、製品の背面カバーを開け、ボタンを3秒間押し続けると、青色LEDが5回点滅し、シャットダウンが成功したことを示します。|



## 配置ガイドライン 

* Bluetoothビーコンは通常、地上から2.5～3mの高さに配置され、水平間隔は5～10mです。これらのビーコンは、環境に応じて列状または三角形のパターンで均等に配置することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>


* 配置戦略はシナリオによって異なります。例えば、屋内環境では中央（狭い）配置や三角形グリッド分布（広い）を採用することがあります。屋内の廊下では、幅約3mの廊下には中央線配置、より広い廊下には二列配置が適しています。高層建物（床の高さ > 4m）では天井への設置を避け、壁や低い位置に約5m間隔で設置することをお勧めします。屋外では、開けた場所に三角形グリッドパターンを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>赤い例は誤った配置例、青い例は正しい配置例です。</i></center>

* 湿度の高い環境では、製品の防水等級を考慮し、長時間の水への曝露を防ぐようにしてください。

* 製品を設置する際は、金属、ガラス、その他の障害物から距離を保ち、角に近づけないようにしてください。

:::tip
配置ガイドラインは参考用です。実際の配置は、顧客の位置測定アルゴリズム、製品設置環境、およびテスト条件に基づいてカスタマイズする必要があります。
:::

### 磁石吸着設置手順

#### 設置条件

* 製品設置用のツールまたはプラットフォームの素材は、磁石で吸着可能な機器やブラケットの表面である必要があります。
* 推奨設置温度範囲：20～40°C。
* 製品を設置する際は、角や周囲の磁場、大きな障害物からできるだけ離してください。

#### 設置手順

製品の磁石接触面を、設置対象のブラケットや機器の表面に直接吸着させます。

:::tip
磁石付き製品は一般的な製品（磁石吸着なし）よりも重量があるため、天井などの表面に設置することは避け、落下のリスクを防ぐことをお勧めします。
:::



### 3M接着剤/釘なし接着剤設置手順

#### 設置条件

* 製品を設置するプラットフォーム素材の表面は、セラミック、ガラス/エポキシ樹脂、アクリル、PBT、ABS、PC、硬質PVCなどの平坦で乾燥した表面である必要があります。異なる両面接着剤のモデルによる粘着性や設置性の違いにより、灰色のテクスチャ、乾燥不完全、老朽化、湿気のある壁（セメント、石膏ボードなど）には、デフォルトの両面接着剤の使用は推奨されません。剥がれるリスクがあります。
* 推奨設置温度範囲：20～40℃。
* 製品は金属、ガラス遮蔽、その他の障害物から離して設置してください。また、角に近づけて設置しないでください。

#### 設置手順

* 設置前：貼り付け対象のプラットフォームやツールの表面を清掃し、貼り付け面が乾燥しており、ほこりがないことを確認してください。
* 貼り付け時：両面テープをデバイスに貼り付け、手やツールで1～2秒間押し付けます。数回押し付けを繰り返し、両面テープまたは釘なし接着剤が製品と貼り付け面にしっかりと接着するようにします。

:::tip
製品を低温環境や過酷な環境で設置する必要がある場合は、両面テープと強力な釘なし接着剤を使用して設置することをお勧めします。最適な効果を得るために、釘なし接着剤については営業担当者にお問い合わせください。
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
|チップ|nRF52シリーズ|
|Bluetoothバージョン|BLE 5.0|
|Bluetoothプロトコル|iBeacon|
|センサー|加速度計対応|
|LED|含まれる|
|アプリ|BeaconSET|
|動作温度|-30~60°C|
|バッテリー寿命|<p>5年以上</p><p>(デフォルト設定で0dBm/500msの場合)</p><p></p>|


**デフォルトのブロードキャストパラメータ**


|**パラメータ**|**デフォルト値**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|測定電力|-59dBm|
|Tx Power|-30 - +4dBm、デフォルト0dBm|
|Adv Interval|100ms~10s、デフォルト500ms|
|パスワード|minew123 （英数字）|
|シリアルID|なし|
|デバイス名|E5 (1-7文字)|
|接続モード|はい/いいえ|
|ソフトリブート|minew123 （パスワードと同じ）|
|バッテリーサービス|<p>バッテリーアイコン表示、リアルタイム検出</p><p>満充電は100%</p>|


**互換性情報**

|**システム**|**デバイス**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Proなど。</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO など。</p><p></p>|



## 設定


* **ステップ 1**: `Beaconset` アプリをダウンロードします。


* **ステップ 2**: ビーコンに接続します。MACアドレスで識別することができ、ビーコンラベルにも記載されています。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>


* **ステップ 3**: 設定

必要に応じてパラメータを変更し、`保存` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>