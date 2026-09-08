---
description: Meshcore と LoRa 用 SenseCAP Solar Node の使用を開始します。デバイスの設置、ファームウェア書き込み、デバイス接続について案内します。
title: MeshCore を使い始める
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 8/17/2026
  author: Advent Jiang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/
updatedAt: '2026-08-17'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中である
:::

## ファームウェアの書き込み

### 方法1 Web Flasher 経由

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

`Enter DFU Mode` をクリックし、「Solar Node」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されれば、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

ファームウェアのバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

MeshCore ファームウェアのバージョンによって、LoRa TX インジケータと電源ボタンの動作が異なります。デバイスの状態を判断する前に、現在使用しているファームウェアのバージョンを必ず確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/version-different.png" alt="pir" width={800} height="auto" /></p>

:::note
**ファームウェアバージョンの違い（LoRa TX インジケータ）**

以下の図ではインジケータ LED に番号が振られているので、色の説明がどの LED を指しているかを簡単に識別できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

- **No.12 - Yellow LED**: ソーラー入力 / 光状態インジケータ。
- **No.13 - Blue LED**: LoRa TX インジケータ。
- **No.14 - White LED**: LoRa TX インジケータ。

MeshCore のファームウェアバージョンによって、LoRa TX 時に点灯する物理 LED が異なります：

- v1.12.0 ～ v1.14.0: LoRa TX 中は青色 LED（No.13）が点滅します。
- v1.14.1 ～ v1.15.x: LoRa TX 中は白色 LED（No.14）が点滅します。
- v1.16.0 以降: LoRa TX 中は再び青色 LED（No.13）が点滅します。
- バージョンによって青または白の点滅が見えても、ハードウェアの故障を意味するものではありません。

赤、緑、黄の LED は主にハードウェアの電源状態インジケータであり、MeshCore の TX インジケータのバージョン差とは関係ありません：

- 赤: 主にデバイスが充電中であることを示します。
- 緑: 主に充電完了を示します。
- 黄（No.12）: 主にソーラー入力 / 光状態を示します。
:::

`Enter DFU Mode` をクリックし、「P1 Pro」または「TinyUSB」シリアルという名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後まで埋まれば、フラッシュが完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして DFU モードに手動で入ります。10～15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは表示されなくなります。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

#### ファームウェアの書き込み

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして DFU モードに手動で入ります。10～15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは表示されなくなります。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

## はじめに

本格的な展開の前に、まずノードのテストと設定を行ってください。

### 取り付け

#### デバイスの組み立て

:::danger note
本デバイスは長期間屋外で使用されるため、パネルを水平に設置することは避けてください。水たまりを防ぐため、傾斜または斜めに設置することを推奨します。さらに、すべてのネジがしっかり締め付けられ、カバーが正しく取り付けられていることを確認してください。防水性能を高めるために、追加のシーリング処理を施すことも検討してください。
:::

- **部品リスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Step1: ワッシャーとネジを使用して、部品1をデバイスの底面に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step2: ユニバーサルジョイント（部品2）とブラケット（部品3）をネジで接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step3: RF ケーブル（部品4）とアンテナ（部品5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step4: 適切な位置にフープリングを取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step5: ユニバーサルジョイントブラケットを取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ6: ネジを緩め、ユニバーサルジョイントを適切な位置に調整してから、ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ7: アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### バッテリーと GPS モジュールの取り付け（オプション）

:::tip
バッテリーを取り付ける、または交換する必要がある場合は、`Button-top` 18650（3.6V）バッテリーを使用してください。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro バージョンにはバッテリーと GPS モジュールが内蔵されていますが、P1 バージョンでは、必要に応じてユーザーがバッテリーと GPS モジュールを手動で取り付ける必要があります。
:::



- ステップ1: すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- ステップ2: バッテリーと GPS モジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- ステップ3: ケースを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
デバイスの防水性能を維持するために、ケースが正しく取り付けられ、ネジがしっかりと締め付けられていることを確認してください。
:::

#### （オプション）アンテナのアップグレード

- この動画を見ながら、アンテナをグラスファイバー製のものに交換できます。

より高利得のアンテナが必要な場合は、[860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) アンテナと [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) アンテナをお勧めします。

### デバイスの電源を入れる

デバイスは USB ケーブルを接続してアクティベートする必要があります。起動時には、青色 LED が約 3 秒間点灯し、デバイスの電源が正常に入ったことを示します。

TX LED は、Solar Node 自身が LoRa データを送信するとき（例えばアドバタイズ送信時）のみ点滅します。データ受信では TX LED は点灯しません。LoRa 送信中の LED の色はファームウェアバージョンによって異なります。上記のファームウェアバージョンの違いを参照してください。

:::tip
**電源ボタン（電源オン/オフ）**

- MeshCore v1.14.0 以前: 電源ボタンの長押しによる電源オン/オフはサポートされていません。電源ボタンを長押ししても反応がない場合は、ボタンの故障ではなく、このファームウェアバージョンでの正常な動作です。
- MeshCore v1.14.1 以降: 電源ボタンを約 `3s` 長押しすると、デバイスの電源をオン/オフできます。短く白色の光が点滅し、デバイスが正常にオン/オフ されていることを示します。

**ボタンの説明**

- **Power Button**: 電源オン/オフ（v1.14.1 以降でサポート）。
- **Reset Button**: デバイスの再起動 / DFU または Bootloader モードへの移行。

電源ボタンの長押しと、Reset ボタンのダブルクリックを混同しないでください。
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### 設定

- **ステップ1 初期設定**

MeshCore を LoRa デバイスに初めて書き込んだときは、その国や地域で合法な周波数を使用できるように、サーバーデバイスの周波数を設定する必要があります。

[Click here](https://config.meshcore.io/) からリピーターを設定します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

LoRa リージョンを変更して設定を保存します。その後デバイスを `Reboot` してください。そうしないと設定は有効になりません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**リージョン一覧**

|**Region Code**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があります。これは 1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::


- **ステップ2 Advert の送信**

"send advert" をクリックして、他の Meshcore デバイスからこのリピーターが見えるようにします。その後、このリピーターはデバイスリストに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

**Send Advert** をクリックすると、Solar Node が能動的に 1 回 LoRa 送信（TX）を行うため、対応するファームウェアバージョンの TX LED が短く点滅します:

- v1.12.0 ～ v1.14.0: 青色 LED が点滅
- v1.14.1 ～ v1.15.x: 白色 LED が点滅
- v1.16.0 以降: 青色 LED が点滅

TX LED は、Solar Node 自身が LoRa データ（TX）を送信していることを示します。受信（RX）インジケータではありません。

- **ステップ3（オプション）管理者ログイン**

リピーターのデフォルト管理者パスワードは `password` です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

ログイン後、設定ページが表示されます。ここでリピーターの設定を調整できます。

リピーターの位置を表示したい場合は、GPS を有効にできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

また、Advert のブロードキャスト間隔も調整できます:

- **Advert interval**: Local / zero-hop Advert の送信間隔。間隔範囲は 60～240 分です。
- **Flood advert interval**: Flood Advert の送信間隔。間隔範囲は 3～168 時間です。

実際の Advert 周期は、現在のファームウェアバージョンとデバイスに保存されている設定に依存するため、設定ページ上の `Advert interval` と `Flood advert interval` の実際の値を常に参照してください。ある間隔が `0` に設定されている場合、その自動 Advert は無効になります。

**注意:** MeshCore v1.16.0 以降、デフォルトの Flood advert interval は 12 時間から 47 時間に変更されました。そのため、自動 Advert を待ってデバイスを検証することは推奨しません。TX と LED を確認するには、**Send Advert** をクリックして、能動的に 1 回の LoRa 送信をトリガーしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### パスの設定

ルートにリピーターを追加する前に、まずリピーターを使って Advert を送信する必要がある場合があります。リピーターは、デバイスに保存されている `Advert interval` と `Flood advert interval` に従って、一定間隔で自動的に Advert を送信します。これらの間隔はファームウェアバージョンと現在のデバイス設定に依存し、数時間に及ぶことがあります。自動 Advert を待つのではなく、**Send Advert** をクリックしてすぐにトリガーすることをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

メッセージ送信のパスを手動で設定できます。Bluetooth コンパニオンデバイスをスマートフォンのアプリに接続します。プライベートメッセージウィンドウを開きます。その後、検出されたリピーターを選択してパスを構成できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

パスを設定すると、送信方式は「n hop」に変更されます。例えば、ルートにリピーターを 1 台追加すると、1 hop に変更されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

:::note
MeshCore Repeater は、受信したすべての LoRa パケットを再送するわけではありません。

- **ケース 1**: Companion がデータを送信 → Solar Node がそれを受信（RX）→ 応答や転送が不要 → Solar Node は LoRa 送信（TX）を行わない → TX LED は点滅しない。これは正常です。
- **ケース 2**: Solar Node がデータを受信 → 応答または転送が必要 → Solar Node が LoRa 送信（TX）を行う → TX LED が対応するファームウェアバージョンの色で点滅します。

Solar Node が LoRa データを正常に受信しても、TX LED が点滅するとは限りません。TX LED は、Solar Node 自身が LoRa データを送信していることのみを示します。

例えば、ネットワーク内に Companion が 1 台と Solar Node Repeater が 1 台だけある場合、Companion がデータを送信した後、Solar Node はパケットを再送する必要なく正常に受信できることがあります。この場合、TX LED が点滅しないからといって、リピーターが異常であると直接判断することはできません。
:::

## デバイスが正常に動作していることを確認する

検証の前に、Solar Node デバイスのみを使用しているのか、あるいは MeshCore Companion デバイスも併用しているのかを確認してください。

リピーターモードでは、以下の動作が期待されます:

- デバイスを USB 接続すると、オンライン状態になり、設定が可能です。
- USB 電源を抜くと、デバイスはバッテリーモードに切り替わり、リピーターとして動作を継続します。
- Solar Node 自身が LoRa データを送信するとき、TX LED は対応するファームウェアバージョンの色で短く点滅します。これは正常であり、LoRa の動作を示します。
- Solar Node Repeater は、Companion デバイスと一緒に使用しない限り、単体でスマートフォン接続デバイスのように動作することは想定されていません。

リピーターが正しく動作しているかを確認するには、以下の2つのアクティブな検証手順に従ってください。自動アドバタイズを待つことを主な検証方法として頼りにしないでください。

### 手順 1: Solar Node の送信 (TX) を確認する

1. Solar Node を USB で接続します。
2. MeshCore 設定ページを開きます: [https://config.meshcore.io/](https://config.meshcore.io/)。
3. **Send Advert** をクリックします。
4. Solar Node 上の TX LED を観察します。

Solar Node がアドバタイズを送信するとき、TX LED は対応するファームウェアバージョンの色で短く点滅します:

- v1.12.0 ～ v1.14.0: 青色 LED
- v1.14.1 ～ v1.15.x: 白色 LED
- v1.16.0 以降: 青色 LED

Companion は Solar Node のアドバタイズを受信できるはずです。これにより、Solar Node → Companion 方向の LoRa 送信 (TX) が能動的に検証されます。

### 手順 2: Ping を使って双方向通信を確認する

1. Companion デバイスで Solar Node Repeater のコンタクトを開き、**Ping** 機能を使用します。

Ping が成功すれば、通信の両方向が同時に検証されます:

- Companion → Solar Node: 受信 (RX)
- Solar Node → Companion: 送信 (TX) 応答

Solar Node が Ping 応答を送信するとき、TX LED は対応するファームウェアバージョンの色で短く点滅します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="別の MeshCore デバイスからの Ping で Solar Node リピーターを検証" width={700} height="auto" /></p>

:::note
TX LED は受信 (RX) インジケータではありません。Solar Node がパケットを受信するだけで、応答や転送の必要がない場合、LED はまったく点滅しないことがあります。
:::

:::tip
デバイスが動作しているかを確認するために自動アドバタイズを待つことは推奨しません。アドバタイズ間隔は非常に長くなる場合があります。**Send Advert** を使用して、送信 (TX) をすぐに能動的にトリガーしてください。
:::

:::note
モバイルアプリは主に Companion デバイスと一緒に使用され、リピーターと直接使用するものではありません。リピーター自体は、通常の Bluetooth 接続のスマートフォンアクセサリのようには動作しません。
:::

LED の動作と USB 接続状態が上記の説明と一致していれば、通常はリピーターが正常に動作していることを示します。

## FAQ

### ブートループ

- 原因

これは通常、ファームウェアの書き込み失敗が原因です。ファームウェアを書き込む際は、接続を安定した状態に保ってください。

- トラブルシューティング

ファームウェアを書き直すには、[こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase)してください。

### デバイスが文鎮化した (bricked)

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーを書き込む

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを必ず確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

**Step1: Adafruit-nrfutil のインストール**

Windows ユーザーは、"Win" キーと "R" キーを押し、ポップアップウィンドウに "cmd" と入力して "Enter" を押します。これでコマンドラインを開くことができます。

Mac ユーザーは、"Command" キーと "Space" キーを押して Spotlight を開きます。その後 "termial" と入力し、"Return" を押します。これでコマンドラインを開くことができます。

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで、Python と pip が正しくインストールされているかを確認します。

```
python --version
```

```
python -m pip --version
```

その後に "Python xxx" と "pip xxx" が表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールできます:

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します:

```
python -m pip show adafruit-nrfutil
```

これがインストール場所です:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前の手順で表示されたインストール場所をコピーし、次のように追加します:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows での Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには:

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようと設定されている可能性があります。その場合は `--user` フラグを使用してください:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には推奨されません）:

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（Windows および MacOS）を生成するには、次のコマンドを実行します:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 内にあります（Windows の場合は `.exe` が付きます）。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**Step2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合の例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Mac ユーザーの場合の例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダー zip パッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。その際、デバイスに対応する正しいポートに置き換えてください:

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
COMXX を自分の COM 番号に変更してください。例えば、デバイスが COM6 の場合、コマンドを次のように変更します:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 このコマンドを入力した後、一部のデバイスではポート番号が変わることがあります。インストールに失敗した場合は、再度ポート番号を確認してください。


- **その他の OS の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、[アプリケーションファームウェアを書き込む](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase)ことができます。

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB より高い値で動作します。SNR が -10 dB より低いデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm より高い値で動作します。RSSI が -115 dBm より低いデバイスは、性能が低いと見なされます。

      最良の信号状態を得るために、開けた障害物の少ないエリアで、干渉が最小限となるようにデバイスを使用してください。

### 充電電流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus の最大充電電流は 200 mA です。充電管理チップ CN3165 は 0.99A です。そのため、最大充電電流は 1A となります。

### データ送信時に Solar Node が青ではなく白で点滅するのはなぜですか？

これは MeshCore ファームウェアバージョンの違いであり、ハードウェアの故障ではありません:

- v1.12.0 ～ v1.14.0: 青色 LED TX
- v1.14.1 ～ v1.15.x: 白色 LED TX
- v1.16.0 以降: 青色 LED TX

v1.14.1 ～ v1.15.x で白く点滅しても、ハードウェアの故障を意味するものではありません。

### 電源ボタンを長押ししても電源を切れないのはなぜですか？

電源ボタンの長押しによる電源オン/オフは、MeshCore v1.14.1 以降でサポートされています。v1.14.0 以前では、電源ボタンを長押ししても反応はなく、これはそのファームウェアバージョンにおける正常な動作です。

### Solar Node が長時間点滅しないのはなぜですか？

- TX LED は、Solar Node 自身が LoRa 送信 (TX) を行ったときにのみ点滅します。
- 受信 (RX) では必ずしも TX LED が点滅するとは限りません。
- リピーターは受信したすべてのパケットを転送するわけではありません。
- 自動アドバタイズの間隔は非常に長くなることがあります。
- v1.16.0 以降、デフォルトの Flood アドバタイズ間隔は 47 時間です。
- すぐに確認する必要がある場合は、**Send Advert** を使用してください。

## リソース
- [Solar Node バッテリー寿命計算表](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>