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
updatedAt: '2026-09-18'
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
1. メッセージ送信処理が完了していない
2. 設定中である
:::

## ファームウェアの書き込み

### 方法1 Web Flasher 経由

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

`Enter DFU Mode` をクリックし、「Solar Node」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されたら、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

ファームウェアのバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

MeshCore ファームウェアのバージョンによって、LoRa TX インジケータと電源ボタンの動作が異なります。デバイスの状態を判断する前に、現在使用しているファームウェアのバージョンを必ず確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/version-different.png" alt="pir" width={800} height="auto" /></p>

:::note
**ファームウェアバージョンの違い（LoRa TX インジケータ）**

以下の図ではインジケータ LED に番号が振られているため、色の説明がどの LED を指しているかを簡単に識別できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

- **No.12 - 黄色 LED**: ソーラー入力 / 光の状態インジケータ。
- **No.13 - 青色 LED**: LoRa TX インジケータ。
- **No.14 - 白色 LED**: LoRa TX インジケータ。

MeshCore ファームウェアのバージョンによって、LoRa TX 用に点灯する物理 LED が異なります。

- v1.12.0 ～ v1.14.0: LoRa TX 中は青色 LED（No.13）が点滅します。
- v1.14.1 ～ v1.15.x: LoRa TX 中は白色 LED（No.14）が点滅します。
- v1.16.0 以降: LoRa TX 中は再び青色 LED（No.13）が点滅します。
- バージョンによって青色または白色の点滅が見えても、ハードウェアの故障を示すものではありません。

赤、緑、黄色の LED は主にハードウェアの電源状態インジケータであり、MeshCore TX インジケータのバージョン差とは関係ありません。

- 赤: 主にデバイスが充電中であることを示します。
- 緑: 主に充電完了を示します。
- 黄色（No.12）: 主にソーラー入力 / 光の状態を示します。
:::

`Enter DFU Mode` をクリックし、「P1 Pro」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後まで埋まったら、Flash が完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして、手動で DFU モードに入ります。10～15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを、ポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

#### ファームウェアの書き込み

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして、手動で DFU モードに入ります。10～15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを、ポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

## はじめに

本格的な展開の前に、まずノードのテストと設定を行ってください。

### 取り付け

#### デバイスの組み立て

:::danger note
本デバイスは長期間屋外で使用されるため、パネルを水平に設置することは避けてください。水たまりを防ぐため、傾斜または斜めに取り付けることを推奨します。さらに、すべてのネジがしっかり締め付けられていること、およびカバーが正しく取り付けられていることを確認してください。防水性を高めるために、追加のシーリング処理を施すことも検討してください。
:::

- **部品リスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- ステップ1: ワッシャーとネジを使用して、部品1をデバイスの底面に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ2: ユニバーサルジョイント（部品2）とブラケット（部品3）をネジで接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ3: RF ケーブル（部品4）とアンテナ（部品5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ4: 適切な位置にフープリングを取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ5: ユニバーサルジョイントブラケットを接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ6：ネジを緩め、ユニバーサルジョイントを適切な位置に調整してから、ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ7：アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### バッテリーと GPS モジュールの取り付け（オプション）

:::tip
バッテリーを取り付ける、または交換する必要がある場合は、`Button-top` 18650（3.6V）バッテリーを使用してください。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro バージョンにはバッテリーと GPS モジュールが内蔵されていますが、P1 バージョンでは、必要に応じてユーザーがバッテリーと GPS モジュールを手動で取り付ける必要があります。
:::



- ステップ1：すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- ステップ2：バッテリーと GPS モジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- ステップ3：筐体を組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
筐体が正しく取り付けられ、デバイスの防水性を維持できるようにネジがしっかりと締め付けられていることを確認してください。
:::

#### （オプション）アンテナのアップグレード

- この動画を見ながら、アンテナをガラス繊維製アンテナに交換することができます。

より高利得のアンテナが必要な場合は、[860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) アンテナと [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) アンテナをお勧めします。

### デバイスの電源オン

デバイスは、電源が供給されるとすぐに起動します。USB、バッテリー、またはソーラー電源を接続すると、電源オンリセットで MCU が動作を開始します（電源オンはすべてのファームウェアバージョンで動作します）。ファームウェア v1.14.1 以降では、デバイスがオフ状態のときに電源ボタンを短く押して離すことでも、デバイスを起動できます。

デバイスが正常に電源オンされたことを確認するには、次の 2 つの確実な方法のいずれかを使用します。

1. 電源オンから約 16 秒後に TX LED が 1 回点滅します。起動後、デバイスは自動的にアドバタイズを送信し、その送信の瞬間に TX LED が点滅して、デバイスがオンであることを示します。
2. あるいは `https://meshcore.io/flasher` を開き、Console をクリックしてシリアル経由でデバイスに接続し、`ver` コマンドを送信します。有効なバージョン文字列が返ってくれば、デバイスは正常に電源オンされ、ファームウェアが正常に動作しています。

TX LED は、Solar Node 自身が LoRa データを送信しているとき（たとえばアドバタイズ送信時）のみ点滅します。データ受信時には TX LED は点灯しません。TX LED の色はファームウェアバージョンによって異なります（上記「Firmware Version Differences」を参照）：v1.12.0～v1.14.0 = 青、v1.14.1～v1.15.0 = 白、v1.16.0 以降 = 青です。

:::tip
**電源ボタン（電源オン／オフ）**

MeshCore v1.14.0 以前は、電源ボタンの長押しによる電源オン／オフをサポートしていません。電源をオンにするには、電源（USB / バッテリー / ソーラー — いずれか 1 つの電源で動作可能）を供給してください。これらのファームウェアバージョンでは、電源ボタンでデバイスの電源をオフにすることはできません。これはボタンの故障ではなく、仕様上の正常な動作です。

MeshCore v1.14.1 以降では、電源ボタンは次のようにサポートされています。

- 電源オン：電源を供給するか、またはデバイスがオフのときに電源ボタンを短く押して起動します。
- 電源オフ：電源ボタンを約 1.5 秒間長押ししてから離すと、オフ状態に入ります。

注意：電源のオン／オフ操作そのものではインジケーター LED は点灯しません。ファームウェアは LoRa データ送信時にのみ TX LED を点滅させ、その色はバージョンに応じて青または白になります。

**ボタンのリファレンス**

- **Power Button**：電源オン／オフ（v1.14.1 以降でサポート）。
- **Reset Button**：デバイスの再起動／DFU または Bootloader モードへの移行。

Power の長押しと Reset のダブルクリックを混同しないでください。
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

LoRa リージョンを変更して設定を保存します。その後デバイスを `Reboot` してください。そうしないと設定が有効になりません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::


- **ステップ2 アドバタイズ送信**

"send advert" をクリックして、他の Meshcore デバイスがこのリピーターを認識できるようにします。その後、デバイス一覧にリピーターが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

**Send Advert** をクリックすると、Solar Node が能動的に 1 回 LoRa 送信（TX）を行うため、対応するファームウェアバージョンの TX LED が短く点滅するはずです。

- v1.12.0 ～ v1.14.0：青色 LED が点滅
- v1.14.1 ～ v1.15.x：白色 LED が点滅
- v1.16.0 以降：青色 LED が点滅

TX LED は、Solar Node 自身が LoRa データ（TX）を送信していることを示します。受信（RX）インジケーターではありません。

- **ステップ3（オプション）管理者ログイン**

リピーターのデフォルト管理者パスワードは `password` です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

ログイン後、設定ページが表示されます。ここでリピーターの設定を調整できます。

リピーターの位置を表示したい場合は、GPS を有効にすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

また、アドバタイズのブロードキャスト間隔を調整することもできます。

- **Advert interval**：ローカル／ゼロホップアドバタイズの送信間隔。間隔範囲は 60～240 分です。
- **Flood advert interval**：Flood アドバタイズの送信間隔。間隔範囲は 3～168 時間です。

実際のアドバタイズ周期は、現在のファームウェアバージョンとデバイスに保存されている設定に依存するため、設定ページ上の `Advert interval` と `Flood advert interval` の実際の値を常に参照してください。ある間隔が `0` に設定されている場合、その自動アドバタイズは無効になります。

**注意：** MeshCore v1.16.0 以降、デフォルトの Flood アドバタイズ間隔は 12 時間から 47 時間に変更されています。そのため、自動アドバタイズを待ってデバイスを検証することは推奨しません。TX と LED を確認するには、**Send Advert** をクリックして、1 回の LoRa TX を能動的にトリガーしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### パスの設定

リピーターをルートに追加する前に、まずリピーターからアドバタイズを送信する必要がある場合があります。リピーターは、デバイスに保存されている `Advert interval` と `Flood advert interval` に従って、一定間隔で自動的にアドバタイズを送信します。これらの間隔はファームウェアバージョンと現在のデバイス設定に依存し、数時間に及ぶことがあります。自動アドバタイズを待つのではなく、**Send Advert** をクリックしてすぐにトリガーすることをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

メッセージ送信パスを手動で設定できます。Bluetooth コンパニオンデバイスをスマートフォンのアプリに接続します。プライベートメッセージウィンドウを開き、検出されたリピーターを選択してパスを構成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

パスを設定すると、送信方式は「n hop」に変更されます。たとえば、ルートにリピーターを 1 台追加すると、1 hop に変更されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

:::note
MeshCore Repeater は、受信したすべての LoRa パケットを再送信するわけではありません。

- **ケース 1**: Companion がデータを送信 → Solar Node がそれを受信（RX）→ 応答や転送が不要 → Solar Node は TX を実行しない → TX LED は点滅しません。これは正常です。
- **ケース 2**: Solar Node がデータを受信 → 応答または転送が必要 → Solar Node が LoRa TX を実行 → TX LED が対応するファームウェアバージョンの色で点滅します。

Solar Node が LoRa データを正常に受信しても、TX LED が点滅するとは限りません。TX LED は Solar Node 自身が LoRa データを送信していることのみを示します。

例えば、ネットワーク内に Companion が 1 台と Solar Node Repeater が 1 台だけの場合、Companion がデータを送信した後、Solar Node はパケットを再送する必要なく正常に受信することがあります。この場合、TX LED が点滅しないからといって、Repeater が異常であると直接判断することはできません。
:::

## デバイスが正常に動作しているか確認する

検証の前に、Solar Node デバイス 1 台のみを使用しているのか、あるいは他に MeshCore Companion デバイスもセットアップに含まれているのかを確認してください。

リピーターモードでは、以下の動作が期待されます：

- デバイスを USB 接続すると、オンライン状態になり、設定が可能です。
- USB 電源を抜くと、デバイスはバッテリーモードに切り替わり、リピーターとして動作を継続します。
- Solar Node 自身が LoRa データを送信する際、TX LED は対応するファームウェアバージョンの色で短く点滅します。これは正常であり、LoRa の動作を示します。
- Solar Node Repeater は、Companion デバイスと一緒に使用しない限り、単体で電話に接続されるデバイスのように動作することは想定されていません。

リピーターが正常に動作しているか正しく検証するには、以下の 2 つの能動的な検証ステップに従ってください。自動アドバタイズを待つことを主な検証方法として頼らないでください。

### ステップ 1: Solar Node の TX を検証する

1. Solar Node を USB で接続します。
2. MeshCore 設定ページを開きます: [https://config.meshcore.io/](https://config.meshcore.io/)。
3. **Send Advert** をクリックします。
4. Solar Node 上の TX LED を観察します。

Solar Node がアドバタイズを送信するとき、TX LED は対応するファームウェアバージョンの色で短く点滅するはずです：

- v1.12.0 ～ v1.14.0: 青色 LED
- v1.14.1 ～ v1.15.x: 白色 LED
- v1.16.0 以降: 青色 LED

Companion は Solar Node のアドバタイズを受信できるはずです。これにより、Solar Node → Companion 方向の LoRa TX が能動的に検証されます。

### ステップ 2: Ping を使って双方向通信を検証する

1. Companion デバイスで Solar Node Repeater の連絡先を開き、**Ping** 機能を使用します。

Ping が成功すれば、通信の両方向が同時に検証されます：

- Companion → Solar Node: RX
- Solar Node → Companion: TX 応答

Solar Node が Ping 応答を送信するとき、TX LED は対応するファームウェアバージョンの色で短く点滅するはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="Verify Solar Node repeater with Ping from another MeshCore device" width={700} height="auto" /></p>

:::note
TX LED は RX インジケーターではありません。Solar Node がパケットを受信するだけで、応答や転送が不要な場合、LED はまったく点滅しないことがあります。
:::

:::tip
アドバタイズ間隔が非常に長くなる場合があるため、デバイスが動作しているかどうかを確認するために自動アドバタイズを待つことは推奨しません。**Send Advert** を使用して、TX をすぐに能動的にトリガーしてください。
:::

:::note
モバイルアプリは主に Companion デバイスと一緒に使用するものであり、Repeater と直接使用するものではありません。Repeater 自体は、通常の Bluetooth 接続のスマートフォンアクセサリのようには動作しません。
:::

LED の動作と USB 接続状態が上記の説明と一致していれば、通常はリピーターが正常に動作していることを示します。

## FAQ

### ブートループ

- 原因 

これは通常、ファームウェアの書き込み失敗が原因です。ファームウェアを書き込む際は、接続を安定した状態に保ってください。 

- トラブルシュート

[ここをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase)して、ファームウェアを書き直してください。

### デバイスが文鎮化した

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーを書き込む

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

**ステップ 1: Adafruit-nrfutil のインストール**

Windows ユーザーは、"Win" キーと "R" キーを押し、ポップアップウィンドウに "cmd" と入力して "Enter" を押します。これでコマンドラインを開くことができます。 

Mac ユーザーは、"Command" キーと "Space" キーを押して Spotlight を開きます。その後 "termial" と入力し、"Return" を押します。これでコマンドラインを開くことができます。 

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで、python と pip が正しくインストールされているかどうかを確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」および「pip xxx」と表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールします：

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

これはインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前のステップで表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windows の場合は、Python 3.x のインストールでも実行ファイル名が python.exe のままなので、`python` に変更する必要があるかもしれません。

ホームディレクトリのユーザースペースにインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようと設定されている可能性があります。その場合は `--user` フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（Windows および MacOS）を生成するには、次のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`（Windows の場合は `.exe` 付き）にあります。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ 2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Mac ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに対応する正しいポートに置き換えてください：

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
COMXX を自分の COM 番号に変更してください。例えば、デバイスが COM6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 このコマンドを入力した後、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。


- **その他の OS の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、[アプリケーションファームウェアを書き込む](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase)ことができます。

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB より上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm より上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号状態を得るために、開けた障害物の少ない場所で、干渉が最小限となるようにデバイスを使用してください。

### 充電電流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus の最大充電電流は 200 mA です。充電管理チップ CN3165 は 0.99A です。そのため、最大充電電流は 1A です。

### データ送信時に、Solar Node が青ではなく白で点滅するのはなぜですか？

これはハードウェアの故障ではなく、MeshCore ファームウェアバージョンの違いによるものです：

- v1.12.0 ～ v1.14.0: 青色 LED 送信
- v1.14.1 ～ v1.15.x: 白色 LED 送信
- v1.16.0 以降: 青色 LED 送信

v1.14.1 ～ v1.15.x で白く点滅しても、ハードウェアの故障を示すものではありません。

### 電源ボタンを押し続けても電源をオフにできないのはなぜですか？

電源ボタンの長押しによる電源オン／オフは、MeshCore v1.14.1 以降でサポートされています。v1.14.0 以前では、電源ボタンを長押ししても反応がなく、これはそのファームウェアバージョンにおける正常な動作です。

### Solar Node が長時間点滅しないのはなぜですか？

- TX LED は、Solar Node 自身が LoRa 送信を行ったときにのみ点滅します。
- 受信（RX）では必ずしも TX LED は点灯しません。
- 中継器（Repeater）は、受信したすべてのパケットを転送するわけではありません。
- 自動アドバタイズ間隔は非常に長くなる場合があります。
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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>