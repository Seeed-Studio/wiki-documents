---
description: Wio Tracker Meshtastic® キットのファームウェア書き込み
title: ファームウェアの書き込み
keywords:
- Meshtastic
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/flash_meshtastic_kit
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このチュートリアルでは、[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) を Meshtastic バージョンに書き換える方法を説明します。これは、Meshtastic ネットワークを使用したいユーザー向けです。

:::tip
ボードを LoRaWAN バージョンに戻したい場合は、こちらの[チュートリアル](https://wiki.seeedstudio.com/ja/flash_to_wio_tracker/)をご確認ください。
:::

### 準備

* Wio Tracker 1110 ボード x 1
* コンピュータ x 1
* USB Type-C ケーブル x 1

### 配線

開発ボードを USB ケーブルを使用して PC に接続します。

### ブートローダーの書き込み

<Tabs>
<TabItem value="uf2" label="UF2">

* [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

`Reset` ボタンをダブルクリックすると、PC 上に `WM1110_BOOT` ドライブが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` ファイルをドライブにドラッグします。ダウンロードは自動的に開始され、完了するとドライブがログアウトします。

</TabItem>
<TabItem value="serial" label="シリアル">

* [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**ステップ1: Adafruit-nrfutil のインストール**

**必要条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="PyPI からのインストール">

最新バージョンをインストールする推奨方法です：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからのインストール">

PyPI からのインストールに問題がある場合やツールを変更したい場合に使用します。まず、このリポジトリをクローンしてフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windows では `python` に変更する必要がある場合があります。Windows の Python 3.x インストールでは `python.exe` が使用されるためです。

ホームディレクトリのユーザースペースにインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時に権限エラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようとしている可能性があります。その場合は `--user` フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールする場合（一般的には推奨されません）：
```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行可能バイナリ（Windows および MacOS）を生成するには、以下のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります（Windows の場合は `.exe` が付きます）。%PATH% にあるディレクトリなど、便利な場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ブートローダーの書き込み**

ボードの `Reset` ボタンをダブルクリックし、以下のコマンドを実行します：

* **Windows の場合**: 
```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

* **その他の場合**: 
```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

シリアルポートをデバイスのポートに置き換えてください。例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### アプリケーションのダウンロード

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) を使用してファームウェアをダウンロードおよびコピーできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

デバイスを `Seeed Wio WM1110 Tracker` に設定し、最新のファームウェアを選択して `UF2` ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

`Reset` ボタンをダブルクリックすると、PC 上に `WM1110_BOOT` ドライブが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`.uf2` ファイルをドライブにドラッグします。ダウンロードは自動的に開始され、完了するとドライブがログアウトします。

:::tip
このエラープロンプトは無視してください。デバイスは実際には正常にアップグレードされています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="シリアル">

ボードの `Reset` ボタンをダブルクリックし、以下のコマンドを実行します：

* **Windows の場合**: 

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

* **その他の場合**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

書き込み成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>
  
</TabItem>
</Tabs>