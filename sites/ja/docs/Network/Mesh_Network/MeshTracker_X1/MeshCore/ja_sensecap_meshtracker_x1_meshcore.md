---
description: Meshcore 用 SenseCAP MeshTracker X1 の使用を開始します。デバイスの取り付け、ファームウェア書き込み、デバイス接続について案内します。
title: MeshCore を使い始める
keywords:
  - トラッカー
  - Meshtastic
  - デュアルバンド GNSS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/
---

# SenseCAP MeshTracker X1 で MeshCore を使い始める

## ファームウェアの書き込み


<Tabs>
<TabItem value="111" label="Web Flasher 経由">

USB ケーブルでデバイスをコンピュータに接続します。 

:::warning
データ転送中は必ず USB ケーブルを接続したままにしてください。そうしないとデバイスが破損するおそれがあります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP MeshTracker X1` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。別のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**ステップ1 フラッシュ消去**

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入ったことを確認してください。

"Flashing erase firmware:100%" と表示されたら、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**ステップ2 ファームウェア書き込み**

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入ったことを確認してください。

進行バーが最後まで埋まったら、Flash が完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="ドラッグ＆ドロップ">
USB ケーブルでデバイスをコンピュータに接続します。

:::warning
データ転送中は必ず USB ケーブルを接続したままにしてください。そうしないとデバイスが破損するおそれがあります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP MeshTracker X1` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。別のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**ステップ1 フラッシュ消去**

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

DFU モードに手動で入ることを試します。デバイスのボタンを押し続け、その後 **素早く** USB ケーブルでデバイスをコンピュータに接続し、白い ⚪️ LED が点灯するまでボタンを押し続けます。

:::warning
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

10〜15 秒後に `X1` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseDragDisk.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

**ステップ2 ファームウェア書き込み**

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/VersionSelection.png" alt="pir" width={500} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Firmwareuf2.png" alt="pir" width={500} height="auto" /></p>

DFU モードに手動で入ることを試します。デバイスのボタンを押し続け、その後 **素早く** USB ケーブルでデバイスをコンピュータに接続し、白い ⚪️ LED が点灯するまでボタンを押し続けます。

:::warning
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

10〜15 秒後に `X1` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/UF2FirmwareDrag.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的に再起動します。

</TabItem>

</Tabs>

## 設定

### デバイスの電源を入れる

ボタンを押して電源を入れます。LED が点灯し、上昇するメロディー音が鳴ります。

### デバイスの電源を切る

ボタンを 3 秒間押し続けて電源を切ります。LED が消灯し、下降するメロディー音が鳴ります。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### APP への接続

Google Store または Apple Store からダウンロードします。または [click here](https://meshcore.io/#download) をクリックして Meshcore APP を入手します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

#
`Connect` をクリックし、対象デバイスを選択します。デフォルトのデバイス ID は `Meshcore-MAC Address` です。MAC アドレスはデバイス背面で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

デフォルトの PIN コード `123456` を入力し、`Pair` をクリックしてデバイスに接続します。

:::tip
接続に失敗した場合は、スマートフォンの Bluetooth リストを開き、そのデバイスを `forget` または `Unpair` してから、再度接続をお試しください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### LoRa の設定

メッシュ通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御するもので、お住まいの地域に合わせて設定する必要があります。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後、デバイスを再起動してください。そうしないと設定が有効になりません。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の[LoRa パラメータ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)の設定を続けることができます。


## 詳細設定

### Web インターフェース経由で接続（BLE）

1. [MeshCore Web App](https://app.meshcore.nz/) を開き、**Settings** アイコンをクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={800} height="auto" /></p>

2. **BLE** タブを選択し、**Scan Now** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={800} height="auto" /></p>

3. システムの Bluetooth ポップアップでデバイス（例：Meshcore-xxxxxx）を選択し、**Pair** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={800} height="auto" /></p>

4. プロンプトが表示されたら、デフォルトの Bluetooth パスキー `123456` を入力し、**OK** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={800} height="auto" /></p>

5. ステータスが接続済みに変わり、MeshCore インターフェースにノードが表示されるまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={800} height="auto" /></p>

### GPS の設定

GPS を使用したい場合は、有効に設定してください。 

APP の `Position Settings` に移動して GPS を有効にできます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>


## メッセージ送信

対応デバイスを 2 台お持ちで、近くに MeshCore ユーザーがあまりいない場合は、両方を BLE Companion ファームウェアに書き換えることで、近くの友人や家族と通信するためにデバイスを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/MeshCoreFramework.png" alt="pir" width={800} height="auto" /></p>

### アドバタイズ

MeshCore では、なりすまし防止のため署名された、名前・位置情報・公開暗号鍵を手動でブロードキャストできます。アドバタイズボタンをクリックすると、そのデータが LoRa 経由でブロードキャストされます。MeshCore ではこれを Advert と呼びます。アドバタイズには「ゼロホップ」と「フラッド」の 2 つの方法があります。

- **Zero hop** は、アドバタイズが届く範囲のすべての相手に対して一度だけブロードキャストされることを意味します。
- **Flooded** は、一度ブロードキャストされた後、それを受信したすべてのリピーターによって繰り返し送信されることを意味します。

APP からアドバタイズを送信できます。また、デバイスのアドバタイズページから直接送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公開メッセージ

LoRa を設定した後、プライマリチャンネルでメッセージを送信できます。同じ周波数帯にいる近くのすべての人がそれを受信します。


### プライベートメッセージ

2 台のデバイスは、お互いのアドバタイズを両方とも受信したときにのみ接続を確立します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### ボタンショートカット

X1 Companion ファームウェア（v1.18.0 以降）は、ボタンのマルチプレスショートカットをサポートしています。各クリックは前のクリックから 0.5 秒以内である必要があります。

| ボタン操作 | 機能 |
| --- | --- |
| ダブルプレス | Advert を送信 |
| トリプルプレス | アラートモードを切り替え：Buzz+Vibe → Buzz のみ → Vibe のみ → サイレント |
| クアドラプルプレス | GPS のオン / オフを切り替え |
| 長押し 3 秒（充電ケーブル接続時） | 強制リセット / DFU モードに入る |

:::note
- トリプルプレス時、新しいアラートモードはビープ音および／またはバイブレーションで確認されるため、アプリを開かずにモードを切り替えることができます。
- ボタンを 4 回以上押した場合は、常にクアドラプルプレスとして扱われます。
- 長押し動作（再起動と DFU モード）の詳細については、[How to reboot the device](#how-to-reboot-the-device) を参照してください。
:::

### アラートと通知の動作

メッセージが到着すると、**アプリが接続されているかどうかに関係なく** デバイスが振動します。受信メッセージ用のブザーのメロディーは、**アプリが接続されていないときのみ** 再生されるため、アプリとデバイスの両方で二重に通知されることはありません。

- アラートモードの変更は自動的に保存され、再起動後も保持されます。
- `Alerts: Silent`（トリプルプレス）に切り替えた後は、ビープ音やバイブレーションによる確認はありません。もう一度トリプルプレスして `Alerts: Buzz+Vibe` に戻すと、再びビープ音とバイブレーションが行われます。

### ステータス LED インジケーター

RGB ステータス LED は、デバイスの状態を示すために異なる色を使用します：

| LED の動作 | 意味 |
| --- | --- |
| レインボースイープ（約 1.2 秒） | 電源オン中 |
| レインボースイープ（約 0.8 秒） | 新しいメッセージを受信 |
| 緑の短い点滅（4 秒ごと） | 通常のハートビート — すべて正常、未読メッセージなし |
| 青の短い点滅 | アプリ接続中 |
| アンバーの点滅（4 秒ごと） | 未読メッセージあり |
| 赤の短い点滅 | バッテリー残量低下（3.5 V 未満） |
| アンバーのブリージング | 充電中（未読メッセージがない場合） |
| 暗い緑の点灯 | 充電完了 |

複数の条件が同時に当てはまる場合の優先順位：**赤（バッテリー残量低下） > アンバー（未読） > 青（接続中） > 緑（ハートビート）**。充電インジケーター（ブリージング / 緑の点灯）は未読メッセージがない場合にのみ表示されるため、未読メッセージのリマインダーを隠してしまうことはありません。

### バッテリーと充電

- アプリに表示されるバッテリー残量（%）は、3.0 V（0%）から 4.2 V（100%）までを線形にマッピングしたものです。
  - これは MeshCore Companion ファームウェアに適用されます。Meshtastic ファームウェアは代わりに、[Battery Mapping](#battery-mapping) に示されている OCV ルックアップテーブルを使用します。
- バッテリー電圧が **3.5 V** を下回ると、ステータス LED が赤く点滅し始めます。赤い点滅が見えたらデバイスを充電してください。
- 充電中は LED がアンバーでブリージングし、フル充電になると（未読メッセージがない限り）暗い緑で点灯したままになります。

### デバイス ID の確認方法

MAC アドレスの `最後の 4 桁` がデバイス ID です

例えば、以下のデバイスのデバイス ID は `A0D4` となります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>


### デバイスの再起動方法

 ボタンを押し続けたまま充電ケーブルを接続し、すぐにボタンを離します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260818150011.gif" alt="pir" width={300} height="auto" /></p>

 :::note
  ボタンを押し続けたまま充電ケーブルを接続し、そのまま 3 秒以上押し続けると、デバイスを強制的に DFU モードに入れます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

   DFU モードから抜けたい場合は、ボタンを押し続けたまま充電ケーブルを接続し、すぐにボタンを離してください。

 :::

### メッセージを受信できないのはなぜですか？

デバイスが接続されているように見えるのにメッセージを受信しない場合は、次の項目を順番に確認してください：

1. **同じチャンネル**：両方のデバイスで同じチャンネルが選択されていることを確認してください（グループチャンネルの場合、チャンネル名と事前共有キーが完全に一致している必要があります）。
2. **同じ LoRa リージョン / 周波数**：両方のデバイスが同じリージョン、したがって同じ周波数に設定されている必要があります。[Configure the LoRa](#configure-the-lora) を参照してください。
3. **通信可能な距離内**：MeshCore は見通しの良い環境に適した LoRa 伝送を使用します。屋外の開けた場所では屋内よりもはるかに遠くまで届きますが、壁・建物・地形によって到達距離は大きく低下します。両方のデバイスを開けた場所に移動して、再度お試しください。
4. **電波状況**：両方のデバイスで信号品質レポートを確認し、[Signal Quality](#signal-quality) を参照してください。信号が悪い場合は、最寄りのノードとの距離を縮めるか、両端の間にリピーターを追加してください。

## トラブルシューティング

### ファームウェア更新失敗 / OTA 復旧

SenseCAP MeshTracker X1 が起動に失敗する、応答しなくなる、またはファームウェア更新後に白い ⚪️ LED が点灯したままになる場合、デバイスが DFU モードでスタックしている可能性があります。次の手順をお試しください：

1. DFU モードから抜けるために強制再起動します：USB 充電ケーブルを抜き、デバイスのボタンを押し続けたまま USB 充電ケーブルを接続し、すぐにボタンを離します。ボタンを押し続けないでください — ケーブル接続後 3 秒以上押し続けると、デバイスは再び DFU モードに入ってしまいます。
2. デバイスが正常に起動するか確認します。起動しない場合は、USB データケーブルでデバイスをコンピュータに接続し、[Firmware Flashing](#firmware-flashing) ガイドに従って DFU モードに入り、フラッシュを消去して MeshCore ファームウェアを再インストールしてください。
3. それでもデバイスを復旧できない場合は、[Bootloader Installation](#bootloader-installation) に従ってブートローダーを書き込み直し、その後アプリケーションファームウェアを再インストールしてください。

ファームウェアの消去または書き込み中に、強制再起動を行ったり USB ケーブルを抜いたりしないでください。デバイスが DFU モードに入れない、またはコンピュータに認識されない場合は、テクニカルサポートにお問い合わせください。

### デバイスの電源が入らない

- 動作確認済みの USB ケーブルを使用して、`デバイスを充電` し続けて 1〜2 時間放置し、バッテリーにシステムを起動するのに十分な電力があることを確認してください。

- 充電後もデバイスが反応しない場合は、次の手順で `ハードリセットを実行` してください：USB ケーブルを抜きます。ボタンを押し続けたまま USB ケーブルを接続し、すぐにボタンを離します。これによりシステムが強制リセットされます。

 - それでも改善しない場合は、USB ケーブルをコンピュータに接続します。デバイスのボタンを押し続けたまま、デバイスをコンピュータに接続し、PC にディスクがマウントされるかどうかを確認してください。マウントされる場合は、ブートローダーを再インストールしてください。

### デバイスがブートループから抜け出せない

**現象：**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法：**

- ステップ 1：DFU モードへの手動移行を試します：デバイスのボタンを押し続けたまま、**素早く** USB ケーブルでデバイスをコンピュータに接続し、白い ⚪️ LED が点灯するまでボタンを押し続けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

白色 LED が点灯したままの場合、デバイスは DFU モードになっています。

:::note
DFU モードへの移行を成功させるには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

- ステップ 2：フラッシュを消去

- ステップ 3：ファームウェアを書き込み

### ブートローダーのインストール


- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の最中に接続を切断しないようにしてください。
:::

**ステップ 1：Adafruit-nrfutil のインストール**

Windows ユーザーは、「Win」キーと「r」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」を押します。これでコマンドラインを開くことができます。 

MAC ユーザーは、「Command」キーと「Space」キーを押して Spotlight を開きます。その後「termial」と入力し、「Return」を押します。これでコマンドラインを開くことができます。 

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで Python と pip が正しくインストールされているかどうかを確認します。

```
python --version
```

```
python -m pip --version
```

その後に "Python xxx" と "pip xxx" が表示されるはずです。表示されない場合は、Python をもう一度インストールしてください。

以下は最新バージョンをインストールするための推奨方法です：

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

こちらがインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの場合、パスを手動で追加する必要がある場合があります。前のステップで表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合は、デバイスマネージャーを開き、`port` に移動します。デバイス接続後に新たに表示されたポート番号が、そのデバイスのポート番号です。

Mac ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**ステップ 3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ダウンロードしたブートローダー zip パッケージがあるディレクトリに移動し、以下のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください：

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

COMXX を自分の COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 このコマンドを入力すると、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。

- **その他の OS の場合**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、この[ステップ](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing)に従ってアプリケーションファームウェアを書き込むことができます。


**2) デバイスが DFU モードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯したままになるまでこれを繰り返してください。ライトが点灯したままになれば、デバイスが DFU モードに戻れることを意味します。その後、[ブートローダーの書き込み](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#bootloader-installation) -> [フラッシュの消去](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing) -> [ファームウェアの書き込み](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing) を行ってください。

**3) デバイスが DFU モードに入れず、シリアルポートも表示されない場合**

- デバイスのボタンを押し続けたまま充電ケーブルを接続し、その直後にボタンを離します。PC 上にディスクが表示されたら、シリアルポートが見える場合があります。

- それでもうまくいかない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート（support@sensecapmx.com）までご連絡ください。**

 ### デバイスが自動的に電源オフになる

- **現象の説明**

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない状態や、設定中の状態などで、手動で強制的にデバイスを再起動または電源オフしたことが原因である可能性があります。

- **トラブルシューティング**

 [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing)してフラッシュ消去を実行してください。 


### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB より高い値で動作します。SNR が -10 dB より低いデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm より高い値で動作します。RSSI が -115 dBm より低いデバイスは、性能が低いと見なされます。 

      最良の信号状態を得るために、障害物が少なく干渉の少ない開けた場所でデバイスを使用してください。

### バッテリーマッピング

```bash
#define OCV_ARRAY 4290, 4118, 4002, 3889, 3798, 3728, 3677, 3643, 3594, 3500, 3100
```

## テクニカルサポート & 製品ディスカッション

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
