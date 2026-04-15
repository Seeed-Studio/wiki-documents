---
description: Web USB またはドラッグ＆ドロップで Wio Tracker L1 Pro に MeshCore ファームウェアを書き込む方法と、LoRa の地域設定、GPS、メッセージ送信のためのアプリ設定ガイド。
title: Wio Tracker L1 Pro で MeshCore をはじめよう
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/
---

## ファームウェアの書き込み

### 方法1 Web Flasher を使用

デバイスを USB ケーブルでコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) を開きます。

`Community Firmware` グループで `Seeed Studio Wio Tracker L1 Pro` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

`Enter DFU Mode` をクリックし、「L1 Pro」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから再度 `Erase Flash` をクリックし、DFU モードに正しく入っていることを確認してください。

"Flashing erase firmware:100%" と表示されれば、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

`Enter DFU Mode` をクリックし、「L1 Pro」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから再度 `Flash` をクリックし、DFU モードに正しく入っていることを確認してください。

進行バーが最後までいっぱいになれば、Flash が完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

デバイスを USB ケーブルでコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) を開きます。

`Community Firmware` グループで `Seeed Studio Wio Tracker L1 Pro` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

RST ボタンを 2 回クリックして、手動で DFU モードに入ります。10〜15 秒後に `TRACKER L1` という名前のディスクが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを表示されたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的に再起動しません。

#### ファームウェアの書き込み

最新バージョンのファームウェアを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

RST ボタンを 2 回クリックして、手動で DFU モードに入ります。10〜15 秒後に `TRACKER L1` という名前のディスクが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを表示されたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的に再起動しません。

## 設定

### デバイスの電源を入れる

電源スイッチを上方向に上げてオンにします。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### APP の入手

Google Store または Apple Store からダウンロードします。または [click here](https://meshcore.co.uk/apps.html) をクリックして Meshcore APP を入手します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### アプリで接続する

`Connect` をクリックし、対象デバイスを選択します。デフォルトのデバイス ID は `Meshcore-MAC Address` です。MAC アドレスはデバイス底面のラベルに記載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

デバイス画面に表示される PIN コードを入力し、`Pair` をクリックしてデバイスに接続します。

:::tip
接続に失敗する場合は、スマートフォンの Bluetooth リストを開き、そのデバイスを `forget` または `Unpair` してから、再度接続をお試しください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Web インターフェースで接続する（BLE）

1. [MeshCore Web App](https://app.meshcore.nz/) を開き、**Settings** アイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. **BLE** タブを選択し、**Scan Now** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. システムの Bluetooth ポップアップでデバイス（例: MeshCore-xxxxxx）を選択し、**Pair** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. 求められたら、デバイス画面に表示される Bluetooth パスキーを入力し、**OK** をクリックします。このパスキーは `123456` ではありません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. ステータスが接続済みに変わり、ノードが MeshCore インターフェース上に表示されるまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### LoRa の設定

メッシュ通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯を制御するもので、お住まいの地域に合わせて設定する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後、デバイスを再起動してください。再起動しないと設定が反映されません。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の[LoRa パラメータ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-一般)を続けて設定できます。

### GPS の設定

GPS を使用したい場合は、有効に設定してください。

APP の `Position Settings` に移動して GPS を有効にできます。または、デバイスの GPS 画面に移動し、4 方向ジョイスティックを押して GPS のオン／オフを切り替えることもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### ブザーの設定

User ボタンを 4 回押すことで、ブザーのオン／オフを切り替えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## メッセージ送信

サポートされているデバイスを 2 台お持ちで、近くに MeshCore ユーザーがあまりいない場合は、両方に BLE Companion ファームウェアを書き込むことで、近くの友人や家族との通信にデバイスを利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### アドバタイズ

MeshCore では、なりすまし防止のために署名された、自分の名前・位置情報・公開暗号鍵を手動でブロードキャストすることができます。アドバタイズボタンをクリックすると、そのデータが LoRa 経由でブロードキャストされます。MeshCore ではこれを Advert と呼びます。アドバタイズには「zero hop」と「flood」の 2 つの方法があります。

- **Zero hop** は、自分のアドバタイズが届く範囲の誰にでもブロードキャストされ、それで終了することを意味します。
- **Flooded** は、ブロードキャストされた後、それを受信したすべてのリピーターによって繰り返し送信されることを意味します。

アプリでアドバタイズを送信できます。また、デバイスのアドバタイズページから直接送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### 公開メッセージ

LoRa を設定した後、プライマリチャネルでメッセージを送信できます。同じ周波数帯にいる近くのすべての人がそれを受信します。

### プライベートメッセージ

2 台のデバイスは、互いのアドバタイズを両方とも受信したときにのみ接続を確立します。

## FAQ

### デバイスがブリック状態 & ブートローダーのインストール

**説明：**

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。独自のファームウェアを書き込んだ後、デバイスが完全に動作しなくなった場合は、ブートローダーを再インストールしてみてください。

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

- ステップ 1：[ブートローダーをダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- ステップ 2：DFU モードに入る

  RST ボタンを 2 回クリックして DFU モードに入ります。ディスク名「Tracker L1」が表示されます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- ステップ 3：ブートローダーファイルを貼り付ける

  ディスク上のすべてのファイルを、ダウンロードしたブートローダーファイルで上書きします。

- ステップ 4：ファームウェアを書き込む

  上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#ファームウェアの書き込み-1)に従ってアプリケーションファームウェアを書き込むことができます。[DFU モードに手動で入る](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#dfu-モードに入れない--dfu-モードに手動で入る)必要がある場合があります。

### DFU に入れない & DFU モードへ手動で入る

デバイスを PC に接続し、`Reset` ボタンをダブルプレスします。黄色の LED が点灯したままになり、`Tracker L1` という名前の新しい USB ドライブが PC に表示されます。

### DFU モードの終了

`User` ボタンを 1 回押して DFU モードを終了します。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスを起動した後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートのログがしばらく動作した後、停止してしまう。

 これは、メッセージ送信プロセスが完了していない、設定処理中である、などの状態で、デバイスを手動かつ強制的に再起動または電源オフしたことが原因である可能性があります。

#### トラブルシューティング

[Flash Erase](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#flash-erase-1) でファームウェアを消去します

### 工場出荷時設定へのリセット

デフォルト設定に戻したい場合は、ファクトリーリセットを実行できます。ファクトリーリセットを行う方法は 2 つあります。

- [Flash Erase](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#flash-erase-1) でファームウェアを消去する

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### 信号品質

- **SNR** は通信リンクの品質を表します。通常のデバイスは -7 dB より高い値で動作します。SNR が -10 dB より低いデバイスは、性能が低いことを示しています。

- **RSSI** は、デバイスとその周囲の環境によって決まります。通常のデバイスは -110 dBm より高い値で動作します。RSSI が -115 dBm より低いデバイスは、性能が低いと見なされます。

    最良の信号状態を得るために、障害物がなく干渉の少ない開けた場所でデバイスを使用してください。

### 対応アンテナ

L1 Pro のアンテナ交換が必要な場合は、[ここをクリック](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)して入手してください。

## リソース

- [ブートローダー](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D プリント用参照ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新しい 4 方向ジョイスティック) 3D プリント用参照ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 エンクロージャーデザインチャレンジ](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形ファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストおよびバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
