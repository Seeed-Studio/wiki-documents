---
description: Wio Tracker Meshtastic® Kit ファームウェア書き込み
title: ファームウェア書き込み
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/flash_meshtastic_kit
last_update:
  date: 6/17/2024
  author: Jessie
---

このチュートリアルでは、Meshtasticネットワークを使用したいユーザー向けに、[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)をMeshtasticバージョンに書き込む方法をガイドします。

:::tip
ボードをLoRaWANバージョンに戻したい場合は、この[チュートリアル](https://wiki.seeedstudio.com/flash_to_wio_tracker/)をご確認ください。
:::

### 準備

- Wio Tracker 1110 Board x 1
- コンピュータ x 1
- USB Type-Cケーブル x 1

### 配線

USBケーブルを使用してDev BoardをPCに接続します。

### ブートローダーの書き込み

<Tabs>
<TabItem value="uf2" label="UF2">

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

`Reset`ボタンをダブルクリックすると、PCに`WM1110_BOOT`ドライブが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2`ファイルをドライブにドラッグします。ダウンロードが自動的に実行され、その後ドライブがログアウトします。

</TabItem>
<TabItem value="serial" label="Serial">

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**ステップ1: Adafruit-nrfutilのインストール**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="PyPIからのインストール">

これは推奨される方法で、最新バージョンをインストールします：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからのインストール">

PyPiでのインストールに問題がある場合やツールを変更したい場合は、この方法を使用してください。まず、このリポジトリをクローンしてフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドは`python3`を使用していますが、Windowsの場合、python 3.xのWindowsインストールではまだpython.exeという名前を使用しているため、`python`に変更する必要がある場合があります。

ホームディレクトリのユーザー空間にインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install`を実行する際に権限エラーが発生する場合、`pip3`が古いかシステムディレクトリにインストールしようとしています。その場合は`--user`フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には推奨されません）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行可能バイナリを生成するには（WindowsとMacOS）、以下のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

.exeは`Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`にあります（Windowsの場合は`.exe`付き）。
便宜上、%PATH%内のディレクトリなど、他の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ブートローダーの書き込み**

ボードの`Reset`ボタンをダブルクリックして、以下のコマンドを実行します：

- **Windows用**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **その他**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

シリアルポートをデバイスポートに置き換えてください。例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### アプリケーションのダウンロード

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)を使用してファームウェアをダウンロードしてコピーできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

デバイスを`Seeed Wio WM1110 Tracker`と最新のファームウェアを選択し、`UF2`ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

`Reset`ボタンをダブルクリックすると、PCに`WM1110_BOOT`ドライブが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`.uf2`ファイルをドライブにドラッグします。ダウンロードが自動的に実行され、その後ドライブがログアウトします。

:::tip
このエラープロンプトは無視してください。デバイスは実際には正常にアップグレードされています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="Serial">

ボードの`Reset`ボタンをダブルクリックして、以下のコマンドを実行します：

- **Windows用**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **その他**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

書き込み成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>
  
</TabItem>
</Tabs>