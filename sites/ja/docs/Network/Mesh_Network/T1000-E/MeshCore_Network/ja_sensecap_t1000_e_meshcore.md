---
description: Meshcore 用 SenseCAP Card Tracker T1000-E の使用を開始します。デバイスのインストール、ファームウェア書き込み、デバイス接続について案内します。
title: MeshCore を使い始める
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.webp
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/
---

## ファームウェア書き込み

### 方法1 Web Flasher 経由

USB ケーブルでデバイスをコンピュータに接続します。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[MeshCore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP T1000-E` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されたら、デバイスは正常に消去されています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェア書き込み

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後まで埋まったら、Flash が完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[MeshCore Web Flasher](https://meshcore.io/flasher) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP T1000-E` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

DFU モードに手動で入ります：デバイスのボタンを押し続け、**素早く** 充電ケーブルを 2 回接続します。緑色の LED が点灯し続けます。

:::warning
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

10〜15 秒後に `T1000-E` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

ファームウェアが正常に書き込まれるとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

#### ファームウェア書き込み

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

DFU モードに手動で入ります：デバイスのボタンを押し続け、**素早く** 充電ケーブルを 2 回接続します。緑色の LED が点灯し続けます。

:::warning
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

10〜15 秒後に `T1000-E` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルをポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアが正常に書き込まれるとディスクは消えます。デバイスは自動的に再起動します。

## 設定

### デバイスの電源オン

ボタンを押して電源を入れます。LED が点灯し、下降するメロディーが鳴ります。

### デバイスの電源オフ

ボタンを 3 秒間押し続けて電源を切ります。LED が消灯し、下降するメロディーが鳴ります。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### APP の入手

Google Store または Apple Store からダウンロードします。または [click here](https://meshcore.io/#download) をクリックして MeshCore APP を入手します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### アプリ経由で接続

`Connect` をクリックし、対象デバイスを選択します。デフォルトのデバイス ID は `Meshcore-MAC Address` です。MAC アドレスはデバイスの背面で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

デフォルトの PIN コード `123456` を入力し、`Pair` をクリックしてデバイスに接続します。

:::tip
接続に失敗した場合は、スマートフォンの Bluetooth リストを開き、そのデバイスを `forget` または `Unpair` してから、再度接続をお試しください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Web インターフェース経由で接続（BLE）

1. [MeshCore Web App](https://app.meshcore.nz/) を開き、**Settings** アイコンをクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. **BLE** タブを選択し、**Scan Now** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. システムの Bluetooth ポップアップでデバイス（例：Meshcore-xxxxxx）を選択し、**Pair** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. プロンプトが表示されたら、デフォルトの Bluetooth パスキー `123456` を入力し、**OK** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. ステータスが接続済みに変わり、MeshCore インターフェースにノードが表示されるまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### LoRa の設定

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、あなたの地域に応じて設定する必要があります。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後、デバイスを再起動してください。そうしないと設定が有効になりません。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の[LoRa パラメータ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-一般)の設定を続けることができます。

### GPS の設定

GPS を使用したい場合は、有効に設定してください。 

APP の `Position Settings` に移動して GPS を有効にできます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

### ボタン

|Button Action|Description|
|--|--|
|Press for 3s|電源オン/オフ|
|Double-click|ブロードキャスト広告|
|Triple-click|ブザー切り替え|
|Quadruple-click|GPS 切り替え|

## メッセージ送信

対応デバイスを2台お持ちで、近くにMeshCoreユーザーがあまりいない場合は、両方をBLE Companionファームウェアに書き換えることで、近くの友人や家族との通信に自分のデバイスを利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### アドバタイズ

MeshCoreでは、自分の名前、位置情報、および公開暗号鍵を手動でブロードキャストできます。これらの情報にはなりすまし防止のために署名も付与されます。アドバタイズボタンをクリックすると、そのデータがLoRa経由でブロードキャストされます。MeshCoreではこれをAdvertと呼びます。アドバタイズには「ゼロホップ」と「フラッド」の2つの方法があります。

- **Zero hop** は、自分のアドバタイズが届く範囲の相手に一度だけ送信され、それで終了することを意味します。
- **Flooded** は、一度送信されたアドバタイズが、それを受信したすべてのリピーターによって再送信されることを意味します。

アプリからアドバタイズを送信できます。また、デバイスのアドバタイズページから直接送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公開メッセージ

LoRaを設定した後、プライマリチャンネルでメッセージを送信できます。同じ周波数帯にいる近くの人は全員、そのメッセージを受信します。


### プライベートメッセージ

2台のデバイスは、お互いのアドバタイズを両方とも受信したときにのみ接続を確立します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### デバイスを再起動する方法

 ボタンを押し続けたまま、充電ケーブルを接続します。

## トラブルシューティング

### デバイスの電源が入らない

- デバイスを1〜2時間充電する

- 充電ケーブルを交換する

 - それでも改善しない場合は、デバイスのボタンを押し続けたまま充電ケーブルを接続し、PCにディスクが表示されるか確認してください。表示された場合は、[こちらをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-the-bootloader)してブートローダーを再インストールしてください。

### デバイスがブートループに陥る

**現象:**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法:**

- ステップ1: 手動でDFUモードに入ることを試します。デバイスのボタンを押し続けたまま、**素早く**充電ケーブルを2回接続します。緑色のLEDが点灯し続けます。

:::note
DFUモードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ2: フラッシュを消去する

- ステップ3: ファームウェアを書き込む

### デバイスがブリックした

#### 説明

デバイスが反応せず、LEDも点灯せず、アプリとペアリングできません。

**1) デバイスがDFUモードに入ることはできるが、その場合はブートローダーの書き込みを試してください。**

#### ブートローダーを書き込む

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを必ず確認し、書き込み中に**絶対に**ケーブルを抜かないでください。
:::

**ステップ1: Adafruit-nrfutil のインストール**

Windowsユーザーは、「Win」キーと「R」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」を押します。これでコマンドラインを開くことができます。 

Macユーザーは、「Command」キーと「Space」キーを押してSpotlightを開き、「termial」と入力して「Return」を押します。これでコマンドラインを開くことができます。 

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで、pythonとpipが正しくインストールされているか確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」と「pip xxx」が表示されるはずです。表示されない場合は、Pythonを再インストールしてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールできます。

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します。

```
python -m pip show adafruit-nrfutil
```

こちらがインストール場所です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windowsユーザーは、パスを手動で追加する必要がある場合があります。前のステップで表示されたインストール場所をコピーし、次のように追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPiでのインストールに問題がある場合や、このツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windowsの場合は、Python 3.x のインストールでも実行ファイル名が python.exe のままなので、`python` に変更する必要があるかもしれません。

ホームディレクトリのユーザースペースにインストールするには:

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時に権限エラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようとしている可能性があります。その場合は `--user` フラグを使用してください。

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）:

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（WindowsおよびMacOS）を生成するには、次のコマンドを実行します。

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`（Windowsの場合は `.exe` 付き）にあります。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ポート番号を確認する**

デバイスをPCに接続し、ポート番号を確認します。

Windowsユーザーの場合の例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Macユーザーの場合の例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーのzipパッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください。

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```
COMXX を自分のCOM番号に変更してください。例えば、デバイスがCOM6の場合、コマンドを次のように変更します。

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 一部のデバイスは、このコマンドを入力した後にポート番号が変わることがあります。そのため、インストールに失敗した場合は、再度ポート番号を確認してください。

- **その他のOSの場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、[ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#firmware-flashing)してアプリケーションファームウェアを書き込んでください。

**2) デバイスがDFUモードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます。

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯し続けるまで繰り返し試してください。ライトが点灯し続ける状態になれば、デバイスがDFUモードに戻ったことを意味します。その後、[ブートローダー](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-the-bootloader) -> [フラッシュ消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-erase) -> [ファームウェア書き込み](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-firmware) の順に実行します。

**3) デバイスがDFUモードに入れず、シリアルポートも表示されない場合**

- デバイスのボタンを押し続けたまま充電ケーブルを接続します。PCにディスクが表示された後、シリアルポートが見える場合があります。

- それでも改善しない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート support@sensecapmx.com までご連絡ください。**

### ファームウェア書き込みに失敗する

- **シリアルポートでデータを受信しない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスがDFUモードになっているか確認してください。DFUモード中は緑色のライトが点灯し続けます。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいか確認するか、別のポートを試してください。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートのログがしばらく流れた後に停止します。

 これは、デバイスが次の状態にあるときに、メッセージ送信プロセスが完了していない、設定中である……などの状況で、手動かつ強制的に再起動または電源オフしたことが原因である可能性があります。

 #### トラブルシューティング

 [flash-erase](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-erase) を実行します。 

 ### 工場出荷時リセット
デフォルト設定に戻したい場合は、工場出荷時リセットを行うことができます。工場出荷時リセットを行う方法は 2 つあります。

- デバイスを [Flash erase](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#flash-erase) します。その後、最新のファームウェアを書き込みます。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。 

      最良の信号効果を得るために、開けた障害物のないエリアで、干渉が最小限となる環境でデバイスを使用してください。

### Pogo ピン定義

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## リソース

- [SenseCAP T1000 Tracker データシート](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E for Meshtastic 消費テストおよびバッテリー寿命計算](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

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