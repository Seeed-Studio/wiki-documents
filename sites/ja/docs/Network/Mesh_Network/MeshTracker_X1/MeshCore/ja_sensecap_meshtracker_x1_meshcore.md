---
description: Meshcore 用 SenseCAP MeshTracker X1 の使用を開始します。デバイスの取り付け、ファームウェアの書き込み、デバイス接続について案内します。
title: SenseCAP MeshTracker X1 で MeshCore を始める
keywords:
  - トラッカー
  - Meshtastic
  - デュアルバンド GNSS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/
---

## ファームウェアの書き込み


<Tabs>
<TabItem value="111" label="Web Flasher 経由">

USB ケーブルでデバイスをコンピュータに接続します。 

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP MeshTracker X1` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**ステップ1 フラッシュ消去**

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入ったことを確認してください。

"Flashing erase firmware:100%" と表示されれば、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**ステップ2 ファームウェアの書き込み**

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入ったことを確認してください。

進行バーが最後まで埋まれば、フラッシュが完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="ドラッグ＆ドロップ">
USB ケーブルでデバイスをコンピュータに接続します。

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP MeshTracker X1` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**ステップ1 フラッシュ消去**

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

DFU モードに手動で入る：デバイスのボタンを押し続け、そのまま **素早く** USB ケーブルでデバイスをコンピュータに接続し、白い ⚪️ LED が点灯するまでボタンを押し続けます。

:::warning
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

10〜15 秒後に `X1` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseDragDisk.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

**ステップ2 ファームウェアの書き込み**

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/VersionSelection.png" alt="pir" width={500} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Firmwareuf2.png" alt="pir" width={500} height="auto" /></p>

DFU モードに手動で入る：デバイスのボタンを押し続け、そのまま **素早く** USB ケーブルでデバイスをコンピュータに接続し、白い ⚪️ LED が点灯するまでボタンを押し続けます。

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

### APP 接続

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

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分の地域に合わせて設定する必要があります。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後、デバイスを再起動してください。そうしないと設定が有効になりません。

**リージョン一覧**

|**リージョンコード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の[LoRa パラメータ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)の設定を続けることができます。


## 高度な設定

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

MeshCore では、なりすまし防止のために署名された、名前・位置情報・公開暗号鍵を手動でブロードキャストできます。アドバタイズボタンをクリックすると、そのデータが LoRa 経由でブロードキャストされます。MeshCore ではこれを Advert と呼びます。Advert には「zero hop」と「flood」の 2 つの方法があります。

- **Zero hop** は、あなたの Advert が届く範囲のすべての相手に一度だけブロードキャストされ、それで終了することを意味します。
- **Flooded** は、一度ブロードキャストされた後、それを受信したすべてのリピーターによって繰り返し送信されることを意味します。

APP から Advert を送信できます。また、デバイスの Advert ページから直接 Advert を送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公開メッセージ

LoRa を設定した後、プライマリチャンネルでメッセージを送信できます。同じ周波数帯にいる近くのすべての人がそれを受信します。


### プライベートメッセージ

2 台のデバイスは、お互いの Advert を両方とも受信したときにのみ接続を確立します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ


### デバイス ID の確認方法

MAC アドレスの `last four digits` がデバイス ID です

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

## トラブルシューティング

### デバイスの電源が入らない

- 動作確認済みの USB ケーブルを使用して、バッテリーにシステムを起動するのに十分な電力があることを確認するために、1～2 時間連続して `charge the device` してください。

- 充電後もデバイスが反応しない場合は、次の手順で `perform a hard reset` を行います。USB ケーブルを抜きます。ボタンを押し続けたまま USB ケーブルを接続し、ボタンを押したままにします。約 3 秒間押し続けてから離します。これによりシステムが強制的にリセットされます。

 - それでも改善しない場合は、USB ケーブルをコンピュータに接続します。デバイスのボタンを押し続けたまま、デバイスをコンピュータに接続し、PC にディスクがポップアップ表示されるかどうかを確認します。表示される場合は、ブートローダーを再インストールしてください。

### デバイスがブートループに陥る

**現象の説明：**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法：**

- ステップ 1：DFU モードに手動で入ることを試します。デバイスのボタンを押し続けたまま、**素早く** 2 回充電ケーブルを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

白色 LED が点灯し続けている場合、デバイスは DFU モードになっています。

:::note
DFU モードへの移行を成功させるには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

- ステップ 2：フラッシュを消去します

- ステップ 3：ファームウェアを書き込みます

### ブートローダーのインストール


- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

**ステップ 1：Adafruit-nrfutil のインストール**

Windows ユーザーは、「Win」キーと「r」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」を押します。これでコマンドラインを開くことができます。 

MAC ユーザーは、「Command」キーと「Space」キーを押して Spotlight を開きます。その後「termial」と入力し、「Return」を押します。これでコマンドラインを開くことができます。 

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで、Python と pip が正しくインストールされているかどうかを確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」および「pip xxx」と表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

以下は最新バージョンをインストールするための推奨方法です。

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します。

```
python -m pip show adafruit-nrfutil
```

こちらがインストール場所です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前の手順で表示されたインストール場所をコピーし、次のように追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2：ポート番号の確認**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーは、デバイスマネージャーを開き、`port` に移動します。デバイス接続後に新たに表示されたポート番号が、そのデバイスのポート番号です。

Mac ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**ステップ 3：ブートローダーの書き込み**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに対応する正しいポートに置き換えてください。

- **Windows の場合**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

COMXX をお使いの COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します。

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 一部のデバイスでは、このコマンドを入力した後にポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。

- **その他の OS の場合**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing)に従ってアプリケーションファームウェアを書き込むことができます。


**2) デバイスが DFU モードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯し続けるまでこの操作を繰り返してください。ライトが点灯し続ける状態になれば、デバイスは DFU モードに戻ることができます。その後、[flash bootloader](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#bootloader-installation) -> [erase flash](https://wiki.seeedstudio.sensecap_meshtracker_x1_meshcore/#firmware-flashing) -> [flash the firmware](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing) の順に実行します。

**3) デバイスが DFU モードに入れず、シリアルポートも表示されない場合**

- デバイスのボタンを押し続けたまま充電ケーブルを接続し、すぐにボタンを離します。PC にディスクがポップアップ表示された後、シリアルポートが表示される場合があります。

- それでも改善しない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート（support@sensecapmx.com）にお問い合わせください。**

 ### デバイスが自動的に電源オフになる

- **現象の説明**

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない状態や、設定中の状態など、以下の状態にあるときにデバイスを手動で強制的に再起動または電源オフしたことが原因である可能性があります。

- **トラブルシューティング**

 [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#firmware-flashing)してフラッシュ消去を実行します。 


### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは、性能が低いと見なされます。

      最良の信号効果を得るために、開けていて遮るものが少なく、干渉の少ない場所で本デバイスを使用してください。


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
