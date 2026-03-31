---
description: Meshcore と LoRa 用 SenseCAP Solar Node の使用を開始します。デバイスの取り付け、ファームウェアの書き込み、デバイス接続について案内します。
title: SenseCAP Solar Node で MeshCore を使い始める
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/6/2026
  author: Michelle Huang
createdAt: '2026-03-06'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/
updatedAt: '2026-03-24'
---

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信処理が完了していない
2. 設定中である
:::

## ファームウェアの書き込み

### 方法1 Web Flasher を使用

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://flasher.meshcore.co.uk/) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。別のファームウェアを書き込みたい場合は、[click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュの消去

`Enter DFU Mode` をクリックし、「Solar Node」または「TinyUSB serial」という名前のシリアルポートを選択します。その後、`Erase Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

`Erase Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから再度 `Erase Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

"Flashing erase firmware:100%" と表示されたら、デバイスの消去は正常に完了しています。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### ファームウェアの書き込み

ファームウェアのバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックし、「P1 Pro」または「TinyUSB」 serial という名前のシリアルポートを選択します。その後、`Flash` をクリックしてシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

`Flash` をクリックしても反応がない場合は、`Enter DFU` をもう一度クリックしてから再度 `Flash` をクリックし、DFU モードに正常に入っていることを確認してください。

進行バーが最後まで埋まったら、フラッシュが完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法2 ドラッグ＆ドロップ

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。 

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://flasher.meshcore.co.uk/) にアクセスします。 

`Community Firmware` グループで `Seeed Studio SenseCAP Solar` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。別のファームウェアを書き込みたい場合は、[click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュの消去

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして、手動で DFU モードに入ります。10〜15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを、ポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは表示されなくなります。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

#### ファームウェアの書き込み

最新のファームウェアバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

RST ボタンをダブルクリックして、手動で DFU モードに入ります。10〜15 秒後に `Xiao-Boot` または `Solar Node` という名前のディスクがポップアップ表示されます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

ダウンロードした UF2 ファイルを、ポップアップしたディスクにドラッグします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

ファームウェアの書き込みが正常に完了すると、そのディスクは表示されなくなります。この時点ではデバイス内にファームウェアがないため、デバイスは自動的には再起動しません。

## はじめに

本格的な展開の前に、まずノードのテストと設定を行ってください。

### 取り付け

#### デバイスの組み立て

:::danger note
本デバイスは長期間屋外で使用されるため、パネルを水平に設置することは避けてください。水たまりを防ぐため、傾斜または斜めに設置することを推奨します。さらに、すべてのネジがしっかり締め付けられていること、およびカバーが正しく取り付けられていることを確認してください。防水性能をさらに高めるために、追加のシーリング処理を施すことも検討してください。
:::

- **部品リスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Step1: ワッシャーとネジを使用して、部品 1 をデバイスの底面に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step2: ユニバーサルジョイント（部品 2）とブラケット（部品 3）をネジで接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step3: RF ケーブル（部品 4）とアンテナ（部品 5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step4: 適切な位置にフープリングを取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step5: ユニバーサルジョイントブラケットを接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step6: ネジを緩めてユニバーサルジョイントを適切な位置に調整し、その後ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Step7: アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### バッテリーと GPS モジュールの取り付け（オプション）

:::tip
バッテリーを取り付ける、または交換する必要がある場合は、`Button-top` 18650（3.6V）バッテリーを使用してください。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro バージョンにはバッテリーと GPS モジュールが内蔵されていますが、P1 バージョンでは必要に応じてユーザーがバッテリーと GPS モジュールを手動で取り付ける必要があります。
:::



- Step 1: すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Step 2: バッテリーと GPS モジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Step 3: ケースを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
デバイスの防水性を維持するため、ケースが正しく取り付けられ、ネジがしっかりと締め付けられていることを確認してください。
:::

#### （オプション）アンテナのアップグレード

- この動画を見ながら、アンテナをガラス繊維製アンテナに交換することができます。

より高い利得のアンテナが必要な場合は、[860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) アンテナと [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) アンテナをお勧めします。

### デバイスの電源を入れる

デバイスは USB ケーブルを接続してアクティベートする必要があります。青色の Mesh LED が約 3 秒間点灯し、これがデバイスの電源が正常にオンになったことを意味します。 

青色の Mesh LED ライトは、アドバタイズを送信するまで点灯しません。

:::tip
USB ケーブルを挿してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::


### 設定

- **Step1 初期設定**

MeshCore を LoRa デバイスに初めて書き込むときは、その国や地域で合法な周波数を使用できるように、サーバーデバイスの周波数を設定する必要があります。

中継器を設定するには[Click here](https://config.meshcore.dev/) をクリックします。

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

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、これは 1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイス上で LoRa リージョンを設定したので、ニーズに合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

- **Step2 アドバタイズ送信**

"send advert" をクリックして、他の Meshcore デバイスがこの中継器を認識できるようにします。すると、この中継器がデバイスリストに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

初期設定の後、クリックします。 

- **Step3(オプション) 管理者ログイン**

中継器のデフォルト管理者パスワードは `password` です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

ログイン後、設定ページが表示されます。ここで中継器の設定を調整できます。

中継器の位置を表示したい場合は、GPS を有効にすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

また、アドバタイズのブロードキャスト間隔を調整することもできます。`auto zero hop advert` の間隔範囲は 60〜240 分です。`auto flood advert` の間隔範囲は 3〜168 時間です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### パスの設定

中継器をルートに追加する前に、中継器を使って先にアドバタイズを送信する必要がある場合があります。中継器は一定間隔で自動的にアドバタイズを送信します。この間隔は複数時間（デフォルトでは 3 時間）になることがあります。そのため、手動でアドバタイズを送信するか、そうでなければ待つ必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

メッセージ送信パスを手動で設定できます。Bluetooth コンパニオンデバイスをスマートフォンのアプリに接続します。プライベートメッセージウィンドウを開きます。その後、検出された中継器を選択してパスを構成できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

パスを設定すると、伝送方式は「n hop」に変更されます。例えば、ルートに中継器を 1 台追加すると、1 hop に変更されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## FAQ

### ブートループ

- 原因 

これは通常、ファームウェアの書き込み失敗が原因です。ファームウェアを書き込む際は、接続を安定した状態に保ってください。 

- トラブルシューティング

ファームウェアを再書き込みするには、[Click here](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase) をクリックしてください。

### デバイスが文鎮化した場合

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーの書き込み

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

**Step1: Adafruit-nrfutil のインストール**

Windows ユーザーは、"Win" キーと "r" キーを押し、ポップアップウィンドウに "cmd" と入力して "Enter" をクリックします。これでコマンドラインを開くことができます。 

Mac ユーザーは、"Command" キーと "Space" キーを押して Spotlight を開きます。その後 "termial" と入力して "Return" をクリックします。これでコマンドラインを開くことができます。 

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

その後、「Python xxx」と「pip xxx」が表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールできます：

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

これがインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前の手順で表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドでは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows での Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

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

`.exe`（Windows の場合）付きの .exe ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**Step2: ポート番号の確認**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Mac ユーザーの場合の例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: ブートローダーの書き込み**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください：

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
COMXX を自分の COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 このコマンドを入力した後、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。


- **その他の OS の場合**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、[アプリケーションファームウェアを書き込む](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/#flash-erase)ことができます。

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境によって総合的に決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号状態を得るために、開けていて障害物が少なく、干渉の少ない場所でデバイスを使用してください。

### 充電電流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus の最大充電電流は 200 mA です。充電管理チップ CN3165 は 0.99A です。したがって最大充電電流は 1A です。

## リソース
- [Solar Node バッテリー寿命計算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
