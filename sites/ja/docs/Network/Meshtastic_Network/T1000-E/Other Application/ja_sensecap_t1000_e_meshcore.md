---
description: Meshcore 用 SenseCAP Card Tracker T1000-E の使用を開始します。デバイスの取り付け、ファームウェアの書き込み、デバイス接続について案内します。
title: SenseCAP T1000-E で始める MeshCore 入門
keywords:
  - トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/
---



## ファームウェアの書き込み

### 方法1 Web Flasher 経由

USB ケーブルでデバイスをコンピュータに接続します。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://flasher.meshcore.co.uk/) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP T1000-E` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されたら、デバイスは正常に消去されています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

`Enter DFU Mode` をクリックし、「nRF xxx」または「TinyUSB」という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後までいっぱいになったら、フラッシュが完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://flasher.meshcore.co.uk/) にアクセスします。 

`Community Firmware` グループで `Seeed Studio Wio Tracker T1000-E` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Companion Bluetooth` を選択します。Bluetooth Companion ファームウェアを書き込んだデバイスは APP に接続できます。その他のファームウェアを書き込みたい場合は、[click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) をクリックしてチュートリアルを参照してください。

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

#### ファームウェアの書き込み

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

ファームウェアが正常に書き込まれるとディスクは消えます。この時点ではデバイス内にファームウェアがないため、デバイスは自動的に再起動します。

## 設定

### デバイスの電源を入れる

ボタンを押して電源を入れます。LED が点灯し、上昇するメロディーが鳴ります。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### APP を入手

Google Store または Apple Store からダウンロードします。または [click here](https://meshcore.co.uk/apps.html) をクリックして Meshcore APP を入手します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### アプリ経由で接続

`Connect` をクリックして対象デバイスを選択します。デフォルトのデバイス ID は `Meshcore-MAC Address` です。MAC アドレスはデバイスの背面で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

デフォルトの PIN コード `123456` を入力し、`Pair` をクリックしてデバイスに接続します。

:::tip
接続に失敗した場合は、スマートフォンの Bluetooth リストを開き、そのデバイスを `forget` または `Unpair` してから、再度接続を試してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### LoRa の設定

メッシュ通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分の地域に合わせて設定する必要があります。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

その後デバイスを再起動してください。そうしないと設定が有効になりません。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868 MHz|869.4 - 869.65|10|27|

これでデバイスの LoRa リージョンを設定できたので、必要に応じて任意の [LoRa parameter](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) を引き続き設定できます。

### GPS の設定

GPS を使用したい場合は、有効に設定してください。 

APP の `Position Settings` に移動して GPS を有効にできます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

## メッセージ送信

対応デバイスを 2 台持っていて、近くに MeshCore ユーザーがあまりいない場合は、両方を BLE Companion ファームウェアに書き換えることで、近くの友人や家族との通信に自分のデバイスを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### アドバタイズ

MeshCore では、自分の名前、位置情報、およびなりすまし防止のために署名された公開暗号鍵を手動でブロードキャストできます。アドバタイズボタンをクリックすると、そのデータが LoRa 経由でブロードキャストされます。MeshCore ではこれを Advert と呼びます。アドバタイズには「zero hop」と「flood」の 2 つの方法があります。

- **Zero hop** は、自分のアドバタイズが届く範囲の相手に一度だけブロードキャストされ、それで終了することを意味します。
- **Flooded** は、一度ブロードキャストされた後、それを受信したすべてのリピーターによって再送信されることを意味します。

APP からアドバタイズを送信できます。また、デバイスのアドバタイズページから直接アドバタイズを送信することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公開メッセージ

LoRa を設定した後、プライマリチャンネルでメッセージを送信できます。同じ周波数帯にいる近くのすべての人がそれを受信します。


### プライベートメッセージ

2 台のデバイスは、お互いのアドバタイズを両方とも受信したときにのみ接続を確立します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### デバイスを再起動する方法

 ボタンを押し続けたまま、充電ケーブルを接続します。

## トラブルシューティング

### デバイスの電源が入らない

- デバイスを 1～2 時間充電します

- 充電ケーブルを交換します

 - それでも改善しない場合は、デバイスのボタンを押し続けたまま充電ケーブルを接続し、PC にディスクが表示されるかどうかを確認します。表示された場合は、ブートローダーを再インストールするために[ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#ブートローダーをフラッシュする)してください。

### デバイスがブートループに陥る

**説明：**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法：**

- ステップ 1: 手動で DFU モードに入ることを試します。デバイスのボタンを押し続けたまま、**素早く**充電ケーブルを 2 回接続します。緑色の LED が点灯したままになります。

:::note
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ 2: Flash を消去します

- ステップ 3: ファームウェアを書き込みます

### デバイスがブリックした

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーを書き込む

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理中に**絶対に**切断しないでください。
:::

**ステップ 1: Adafruit-nrfutil のインストール**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールします：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows での Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには:

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようと設定されている可能性があります。その場合は `--user` フラグを使用してください。

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）:

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

`.exe`（Windows の場合）付きの .exe ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ 2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。その際、デバイスに対応する正しいポートに置き換えてください。

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **その他の OS の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、[ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#ファームウェアの書き込み)してアプリケーションファームウェアを書き込んでください。

**2) デバイスが DFU モードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯したままになるまでこれを繰り返してください。これはデバイスが DFU モードに戻れたことを意味します。その後、[ブートローダー](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#ブートローダーをフラッシュする) -> [Flash の消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#Flash-消去) -> [ファームウェアの書き込み](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#ファームウェアの書き込み)を行います。

**3) デバイスが DFU モードに入れず、シリアルポートも表示されない場合**

- デバイスのボタンを押し続けたまま、充電ケーブルを接続します。PC にディスクが表示された後、シリアルポートが見える場合があります。

- それでも改善しない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート support@sensecapmx.com までご連絡ください。**

### ファームウェアの書き込みに失敗する

- **シリアルポートでデータを受信しない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスが DFU モードになっているか確認してください。DFU モード中は緑色のライトが点灯したままになります。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいか確認するか、別のポートを試してください。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートのログはしばらく動作した後、停止します。

 これは、メッセージ送信プロセスが完了していない、設定中であるなど、以下の状態のときにデバイスを手動で強制的に再起動または電源オフしたことが原因の可能性があります。

 #### トラブルシュート

[flash-erase](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#Flash-消去) を実行します。 

 ### 工場出荷時リセット
デフォルト設定に戻したい場合は、工場出荷時リセットを行うことができます。工場出荷時リセットを行う方法は 2 つあります。

- デバイスを[Flash erase](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/#Flash-消去)します。その後、最新のファームウェアを書き込みます。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。 

      最良の信号状態を得るために、干渉が最小限で、開けていて障害物のない場所でデバイスを使用してください。

## リソース

- [SenseCAP T1000 Tracker データシート](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [Meshtastic 用 T1000-E 消費テストおよびバッテリー寿命計算](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
