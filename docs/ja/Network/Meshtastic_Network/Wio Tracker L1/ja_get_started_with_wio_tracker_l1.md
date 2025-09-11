---
description: Wio Tracker L1シリーズの使用開始
title: Wio Tracker L1の使用開始
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /ja/get_started_with_meshtastic_wio_tracker_l1
sidebar_position: 2
last_update:
  date: 6/17/2025
  author: Jessie
---


## 使用開始

:::note
フラッシュを消去しないでください。デバイスが損傷する可能性があります。
:::

### ファームウェアのフラッシュ

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。

対象デバイスを`Seeed Wio Tracker L1`に選択し、最新のファームウェアを選択して、`Flash`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode`をクリックすると、`Tracker L1`という名前のシリアルポートが表示されます。それをクリックして接続すると、`Tracker L1`という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにドラッグしてください。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされるはずです。

### デバイスの電源投入

USBケーブルを接続してデバイスをアクティベートしてください。

### アプリ経由での接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOSアプリ">

- Bluetoothパネルで対象デバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- ディスプレイに表示されたコードを入力し、`OK`をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Androidアプリ">

- `+`をクリックして対象デバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは`123456`）、`OK`をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOSアプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Androidアプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**地域リスト**

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**電力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的なリストについては、[国別LoRa地域](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868**は、1時間ごとのデューティサイクル制限10%を遵守する必要があり、これは1時間のローリングベースで毎分計算されます。制限に達した場合、再び許可されるまでデバイスは送信を停止します。
:::

デバイスにLoRa地域を設定したので、ニーズに合わせて[LoRa設定](https://meshtastic.org/docs/configuration/radio/lora/)の設定を続けることができます。

### FAQ

#### DFUモードへの手動入力

デバイスをPCに接続し、`Reset`ボタンを2回押してください。黄色のLEDが点灯し続け、`Tracker L1`という名前の新しいUSBドライブがPCに表示されます。

#### DFUモードからの退出

`Reset`ボタンを1回押してDFUモードを終了してください。