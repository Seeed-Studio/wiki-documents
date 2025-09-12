---
description: SenseCAP Solar Node for Meshtastic & LoRa の使用開始
title: SenseCAP Solar Node の使用開始
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /ja/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 4/27/2025
  author: Jessie
---


## 使用開始

正式な展開の前に、まずノードをテストして設定してください。

### ファームウェアのフラッシュ

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。

対象デバイスを`Seeed SenseCAP Solar Node`に選択し、最新のファームウェアを選択して、`Flash`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode`をクリックすると、`XIAO-xxx`という名前のシリアルポートが表示されます。それをクリックして接続すると、`XIAO-xxx`という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにドラッグしてください。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされるはずです。

### バッテリーとGPSモジュールの取り付け（オプション）

:::tip
推奨バッテリー：18650リチウムイオンバッテリー3.6V（ボタントップ）。
:::

P1-Proバージョンには内蔵バッテリーとGPSモジュールが搭載されています。P1バージョンの場合、必要に応じてユーザーが手動でバッテリーとGPSモジュールを取り付ける必要があります。

- ステップ1：すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- ステップ2：バッテリーとGPSモジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- ステップ3：シェルを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
シェルが適切に取り付けられ、ネジがしっかりと締められていることを確認して、デバイスの防水性を維持してください。
:::

### デバイスの電源投入

USBケーブルを接続してデバイスをアクティベートします。

### アプリ経由での接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Bluetoothパネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し（デフォルトコードは`123456`）、`OK`をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- `+`をクリックして対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは`123456`）、`OK`をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**地域リスト**

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**電力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的なリストについては、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868**は、1時間ごとのデューティサイクル制限10%を遵守する必要があり、これは1時間のローリングベースで毎分計算されます。制限に達した場合、再び許可されるまでデバイスは送信を停止します。
:::

デバイスにLoRa地域を設定したので、ニーズに合わせて[LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)の設定を続けることができます。

## Installation

:::danger note
デバイスは長期間屋外で使用されるため、パネルを水平位置に設置することは避けてください。水の蓄積を防ぐため、傾斜または斜めの設置を推奨します。さらに、すべてのネジがしっかりと締められ、カバーが適切に取り付けられていることを確認してください。防水保護を強化するため、追加のシール対策を適用することも検討してください。
:::

- **部品リスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>

- ステップ1：ワッシャーとネジを使用して、部品1をデバイスの底部に接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ2：ユニバーサルジョイント（部品2）とブラケット（部品3）をネジで接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ3：RFケーブル（部品4）とアンテナ（部品5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ3：フープリングを適切な位置に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ4：ユニバーサルジョイントブラケットを接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ5：ネジを緩め、ユニバーサルジョイントを適切な位置に調整してから、ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ6：アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## FAQ

### Power Consumption

消費電力は主にデータ送信頻度やGPS更新レートなどの要因に依存します。
以下の数値は参考値のみです。実際の消費量は実際の使用条件によって異なる場合があります。

- **シャットダウンスリープモード消費電力**

|説明|消費量|
|---|---|
|GPS_LED動作電流|1.02 mA|
|電源投入済みだが未アクティブ|56.195 μA|
|電源投入済みでアクティブ|611 μA|

**例：**

|バッテリー容量|バッテリー寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **アクティブモード消費電力**

|モード|電流|
|---|---|
|静的電流|10.65 mA|
|EU868送信電流|157.74 mA|
|US915送信電流|205.22 mA|
|GPS動作電流|50 mA|
|GPS_LED動作電流|1.02 mA|

詳細については[Solar Node Battery Life Calculation Table](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Solar%20Node%20Battery%20Life%20Calculation%20Table.xlsx)をご確認ください
