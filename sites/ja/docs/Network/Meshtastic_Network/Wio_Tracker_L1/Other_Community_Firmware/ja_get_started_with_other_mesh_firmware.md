---
description: Web USB またはドラッグ＆ドロップで Wio Tracker L1 Pro に MeshCore ファームウェアを書き込む方法と、LoRa リージョン、GPS、メッセージ送信のためのアプリ設定ガイド。
title: Wio Tracker L1 Pro で MeshCore を使い始める
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## ファームウェアの書き込み

### 方法1 Web Flasher 経由

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。

`Community Firmware` グループで `Seeed Studio Wio Tracker L1 Pro` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

`Enter DFU Mode` をクリックし、「L1 Pro」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されれば、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

`Enter DFU Mode` をクリックし、「L1 Pro」または「TinyUSB」 serial という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後まで埋まったら、Flash が完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。

:::warning
データ転送中は USB ケーブルを抜かないでください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。

`Community Firmware` グループで `Seeed Studio Wio Tracker L1 Pro` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Flash 消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして DFU モードに手動で入ります。10～15 秒後に `TRACKER L1` という名前のディスクがポップアップ表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

#### ファームウェアの書き込み

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして DFU モードに手動で入ります。10～15 秒後に `TRACKER L1` という名前のディスクがポップアップ表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了するとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

## 設定

### デバイスの電源を入れる

電源スイッチを上方向に上げてオンにします。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### APP を入手

Google Store または Apple Store からダウンロードします。または [click here](https://meshcore.io/#download) をクリックして Meshcore APP を入手します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### アプリ経由で接続

`Connect` をクリックし、対象デバイスを選択します。デフォルトのデバイス ID は `Meshcore-MAC Address` です。MAC アドレスはデバイス底面のラベルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

デバイス画面に表示されている PIN コードを入力し、`Pair` をクリックしてデバイスに接続します。

:::tip
接続に失敗する場合は、スマートフォンの Bluetooth リストを開き、そのデバイスを `forget` または `Unpair` してから、再度接続をお試しください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Web インターフェース経由で接続（BLE）

1. [MeshCore Web App](https://app.meshcore.nz/) を開き、**Settings** アイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. **BLE** タブを選択し、**Scan Now** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. システムの Bluetooth ポップアップでデバイス（例：MeshCore-xxxxxx）を選択し、**Pair** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. 指示に従い、デバイス画面に表示されている Bluetooth パスキーを入力し、**OK** をクリックします。このパスキーは `123456` ではありません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. ステータスが接続済みに変わり、MeshCore インターフェースに自分のノードが表示されるまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### LoRa の設定

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯を制御し、自分がいる地域に合わせて設定する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後、デバイスを再起動してください。再起動しないと設定が反映されません。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の[LoRa パラメータ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)を引き続き設定できます。

### GPS の設定

GPS を使用したい場合は、有効に設定してください。

APP の `Position Settings` に移動して GPS を有効にできます。または、デバイスの GPS ページに移動し、四方向ジョイスティックを押して GPS をオンまたはオフにすることもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### ブザーの設定

ユーザーボタンを4回押して、ブザーのオン／オフを制御します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

### センサーの設定

Wio Tracker L1 には、出荷時に MeshCore ファームウェア `1.12` がプリインストールされています。内蔵 Grove コネクタ経由の Grove センサー対応はファームウェア `1.13` で追加されており、最新リリースは `1.16` です。

:::note
Grove センサーには、ファームウェア `1.13` 以降が必要です。デバイスがまだ工場出荷時の `1.12` のままの場合は、[Method1 via Web Flasher](#method1-via-web-flasher) に従い、最新バージョンを選択してください。
:::

`1.13` 以降では、L1 の内蔵 Grove コネクタを通じて、温度、湿度、空気質などの環境センサーを、はんだ付けや追加ハードウェアなしで簡単に統合できるようになります。対応する Grove センサーをコネクタに接続すると、自動的に認識されます。

## メッセージ送信

対応デバイスを2台お持ちで、近くに MeshCore ユーザーがあまりいない場合は、両方を BLE Companion ファームウェアに書き換えることで、近くの友人や家族との通信に自分のデバイスを利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### アドバタイズ

MeshCore では、自分の名前、位置情報、および公開暗号鍵を手動でブロードキャストできます。これらはなりすまし防止のために署名もされています。アドバタイズボタンをクリックすると、そのデータが LoRa 経由でブロードキャストされます。MeshCore ではこれを Advert と呼びます。アドバタイズには「ゼロホップ」と「フラッド」の2つの方法があります。

- **ゼロホップ** は、自分のアドバタイズが届く範囲の相手に一度だけ送信され、それで終了することを意味します。
- **フラッド** は、一度送信された後、それを受信したすべてのリピーターによって繰り返し送信されることを意味します。

アプリ上でアドバタイズを送信できます。また、デバイスのアドバタイズページから直接送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### 公開メッセージ

LoRa を設定した後、プライマリチャンネルでメッセージを送信できます。同じ周波数帯にいる近くの人は全員、そのメッセージを受信します。

### プライベートメッセージ

2台のデバイスは、互いのアドバタイズを両方とも受信したときにのみ接続を確立します。

## FAQ

### デバイスがブリックした場合とブートローダーの復旧 {#device-bricked--bootloader-installation}

**説明：**

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。独自ファームウェアを書き込んだ後にデバイスが完全に動作しなくなった場合は、ブートローダーの再インストールも試すことができます。

ブートローダーは、`adafruit-nrfutil` を使用して USB シリアルポート（Serial DFU）経由で復旧します。

:::danger note
書き込み中はケーブル接続を安定させ、シリアルポート番号が変わったとしても、**絶対に**ケーブルを抜かないでください。
:::

**ステップ 1：準備**

- Wio Tracker L1 シリーズデバイス（L1 / L1 Pro）
- 動作確認済みの USB データケーブル（充電専用ケーブルは不可）
- Python 3 と pip がインストールされた Windows / macOS / Linux PC
- ブートローダーパッケージ：[Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — ZIP を展開しないでください；`adafruit-nrfutil` は ZIP のまま使用します

**ステップ 2：adafruit-nrfutil をインストール**

<Tabs>
<TabItem value="windows" label="Windows">

Python 3 と pip が利用可能か確認します（pip がない場合は、先に `python -m ensurepip --upgrade` を実行してください）：

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

次にインストールと確認を行います（このガイドでテストしたバージョンは `0.5.3.post16` です）：

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

pip がない場合は、先に `python3 -m ensurepip --upgrade` を実行してください。

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

pip がない場合は、先に `python3 -m ensurepip --upgrade` を実行してください。

</TabItem>
</Tabs>

:::note
常に `adafruit-nrfutil version` でバージョンを確認してください。`adafruit-nrfutil --version` は使用しないでください。
:::

**ステップ 3：シリアルポートを確認**

デバイスのシリアルポートを確認します — 以下の例は PC によって異なります：

<Tabs>
<TabItem value="windows" label="Windows">

**デバイス マネージャー → ポート (COM と LPT)** を開きます。例：

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

デバイスは `/dev/cu.usbmodemXXXX` として表示されます。

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

デバイスは通常 `/dev/ttyACM0` として表示されます；何も表示されない場合は `ls /dev/ttyUSB*` も試してください。

</TabItem>
</Tabs>

**ステップ 4：ブートローダーを書き込む**

ステップ 3 で確認したポートに置き換えます：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

ZIP がターミナルのカレントフォルダにない場合は、`--package` に ZIP のフルパスを指定します。例：`"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`。

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**ステップ 5：シリアルポートの変更に対応する**

`--touch 1200` はデバイスを DFU モードで再起動させるため、通常シリアルポートが変更され、最初のコマンドは次のようなトレースバックで停止する場合があります：

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

これは失敗ではありません — デバイスはすでに新しいポートで DFU モードに入っています。テストした Windows PC の例では、`COM43` から `COM45` に変更されました：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="DFU serial port after re-enumeration in Windows Device Manager" width={600} height="auto" /></p>

**USB ケーブルは接続したままにしてください。** 新しいポートを探し（**デバイス マネージャー → ポート (COM と LPT)** を更新するか、`ls /dev/cu.*` / `ls /dev/ttyACM*` を再実行します）、`--touch 1200` なしで新しいポートに対して再度書き込みを行います：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**ステップ 6：結果を確認する**

出力の最後が `Device programmed.` で終わっていれば、書き込みは成功です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil output ending with Device programmed" width={600} height="auto" /></p>

その後、PC 上に UF2 ドライブが表示されます（テストした Windows PC のスクリーンショット）。ボリュームラベルはブートローダービルドによって異なり、テストしたユニットでは `XIAO-BOOT` と表示されましたが、これは合否の基準ではありません；ドライブ名や `INFO_UF2.TXT` の内容で結果を判断しないでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="UF2 drive appears after bootloader flashing" width={600} height="auto" /></p>

**ステップ 7：アプリケーションファームウェアを再インストールする**

:::warning
ブートローダーを復旧しても、アプリケーションファームウェアは再インストールされません — 再度ファームウェアを書き込むまで、デバイスには動作するファームウェアがありません。
:::

上記の手順を完了したら、[Firmware Flashing](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#firmware-flashing) に従ってアプリケーションファームウェアを書き込んでください。

**トラブルシューティング**

- インストール後に `adafruit-nrfutil` が認識されない：Python のユーザースクリプトディレクトリ（Windows では `Scripts`、macOS/Linux ではホームディレクトリ配下の `bin`）が PATH に含まれていません — それを PATH に追加するか、`--user` なしで再インストールしてください。
- ポートがビジー／アクセス拒否：シリアルモニタ、Web フラッシャーのタブ、Arduino IDE など、そのポートを使用しているものを閉じてください。
- `Touched serial port ...` の後に `FileNotFoundError: could not open port ...` が表示される：デバイスが新しいポートで DFU モードに入っています — ステップ 5 に従ってください。
- DFU モードに入れない：[Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#unable-to-enter-dfu--entering-dfu-mode-manually) を参照してください。

**手動 DFU 復旧**

もし `--touch 1200` でデバイスをDFUモードに入れられない場合（例：ファームウェアがまったく反応しない場合）、手動でDFUモードに入ります：デバイスを接続し、`Reset` をダブルクリックします（黄色LEDが点灯したままになります）、ステップ3と同様にDFUシリアルポートを探し、そのポートに対して `--touch 1200` なしでステップ5のコマンドを実行します。成功時の表示はステップ6と同じです。

### DFU に入れない場合 & DFU モードへの手動移行

デバイスをPCに接続し、`Reset` ボタンを素早く2回押します — 黄色LEDが点灯したままになり、PC上にDFUシリアルポートが現れます。

このモードでブートローダを書き込むには、[Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#device-bricked--bootloader-installation) に従いますが、`--touch 1200` は省略します — デバイスはすでにDFUモードにあります。

### DFU モードの終了

`Reset` ボタンを1回押してDFUモードを終了します。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートのログがしばらく動作した後、停止します。

 これは、デバイスが次の状態にあるときに、手動で強制的に再起動または電源オフしたことが原因である可能性があります：メッセージ送信プロセスが完了していない、設定中である……

#### トラブルシューティング

[Flash Erase](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#flash-erase-1) でファームウェアを消去します

### 工場出荷時リセット

デフォルト設定に戻したい場合は、工場出荷時リセットを実行できます。工場出荷時リセットを行う方法は2つあります。

- [Flash Erase](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#flash-erase-1) でファームウェアを消去します

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは、一般的に -7 dB より高い値で動作します。SNR が -10 dB 未満のデバイスは、性能が低いことを示します。

- **RSSI** は、デバイスとその周囲の環境の両方によって決まります。通常のデバイスは、一般的に -110 dBm より高い値で動作します。RSSI が -115 dBm 未満のデバイスは、性能が低いと見なされます。

    最良の信号効果を得るために、干渉が最小限で、開けていて障害物のない場所でデバイスを使用してください。

### 互換アンテナ

L1 Pro 用のアンテナ交換が必要な場合は、[click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) から入手できます。

## リソース

- [ブートローダ（シリアル DFU パッケージ）](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) 3D プリント参照ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新しい4方向ジョイスティック) 3D プリント参照ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 エンクロージャーデザインチャレンジ](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形ファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストおよびバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

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