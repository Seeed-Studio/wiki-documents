---
description: reSpeaker XVF3800 に接続された ESP32-S3 USB オーディオ & コントロールブリッジ向け Arduino ファームウェア。1 本のネイティブ USB 接続で、ステレオキャプチャ、ステレオ再生、および I2C 経由で reSpeaker XVF3800 を制御する CDC シリアルインターフェースを提供します。
title: reSpeaker XVF3800 USB オーディオブリッジ with XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
  - USB Audio
  - I2S
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_i2s_usb_bridge
last_update:
  date: 10/12/2026
  author: Kasun Thushara
createdAt: '2026-10-12'
updatedAt: '2026-10-12'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_i2s_usb_bridge/
---

# reSpeaker XVF3800 USB オーディオブリッジ with XIAO ESP32S3

## 概要

このプロジェクトは、**reSpeaker XVF3800 に接続された ESP32-S3 USB オーディオ & コントロールブリッジ向け Arduino ファームウェア**を提供します。1 本のネイティブ USB 接続で、**ステレオキャプチャ**、**ステレオ再生**、および **I2C** 経由で reSpeaker XVF3800 を制御する **CDC シリアルインターフェース**を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## ファームウェアの特長

- フルスピード USB 上での USB Audio Class 1 (UAC1) キャプチャおよび再生。
- ステレオ符号付き 32 ビットリトルエンディアン PCM、および 32 ビット Philips I2S スロット。
- 16 kHz または 48 kHz 動作と I2S クロックソースをコンパイル時に選択可能。
- USB キャプチャと再生を同時に実行。USB と I2S は同じ公称サンプルレートを使用。
- 再生バッファリングとソフトウェアクロックドリフト補正、ホスト側 USB ボリュームおよびミュート制御（マスターおよび各チャンネル個別）。
- 再生ボリューム処理やソフトウェアリサンプリングを行わないキャプチャ。
- USB CDC コマンドを reSpeaker XVF3800 の I2C 制御インターフェースへ転送し、Python ホストユーティリティおよび読み取り専用のオーディオ/USB 診断を提供。
- ESP32-S3 のハードウェア FIFO 制約内にデュプレックスオーディオと CDC を収める、プロジェクトローカルな TinyUSB DWC2 ドライバと USB ディスクリプタ。

## オーディオモード

`bridge_config.h` 内の `BRIDGE_MODE` を設定し、スケッチ全体を再ビルドします。**マクロ名の Master と Slave は reSpeaker XVF3800 の役割を表します。** ESP32-S3 はその逆の役割を使用します。

| モード | サンプルレート | reSpeaker の役割 | ESP32-S3 の役割 | クロックソース |
| --- | --- | --- | --- | --- |
| `BRIDGE_I2S_MASTER_48K` | 48 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_MASTER_16K` | 16 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_SLAVE_16K` | 16 kHz | Slave | Master | ESP32-S3 |

reSpeaker XVF3800 は、対応するサンプルレートと I2S 役割に合わせて構成されたファームウェアで動作している必要があります。ブリッジは reSpeaker を構成したり書き込んだりしません。モード選択には再コンパイルが必要であり、実行時のレート切り替えや 16/48 kHz 変換はありません。

## 必要なもの

- ネイティブ USB を備えた ESP32-S3 ボード。提供されているプロファイルは Seeed Studio XIAO ESP32S3 を対象としています。
- Espressif ボードパッケージが利用可能な Arduino IDE または Arduino CLI。
- Arduino-ESP32 **3.3.11**。

別途 USB オーディオライブラリを用意する必要はありません。ピン留めされたコアバージョンを使用してください。ローカルの USB ドライバオーバーライドとディスクリプタは、その TinyUSB 実装に依存しています。

## ビルド設定（Arduino IDE）

`reSpeaker_ESP32S3_USB_BRIDGE.ino` を開き、Arduino-ESP32 3.3.11 をインストール/選択し、次の設定を使用します：

| 設定項目 | 値 |
| --- | --- |
| Board | Seeed Studio XIAO_ESP32S3 |
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Disabled |
| Upload Mode | USB-OTG CDC (TinyUSB) |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz |
| PSRAM | Disabled |

まとめると：**USB Mode = USB-OTG (TinyUSB); CDC/MSC/DFU On Boot = Disabled; CPU = 240 MHz; PSRAM = Disabled.**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/arduino_settings.jpg" alt="pir" width={400} height="auto" /></p>

このファームウェアは独自の CDC インターフェースを作成するため、CDC On Boot は無効のままにしておく必要があります。ピン留めされた CLI プロファイルでは、`CDCOnBoot=cdc` が Disabled に対応します。スケッチはこれら 3 つの USB 設定をコンパイル時にチェックします。Upload Mode は、コアが別個のアップロードモードマクロを定義していないため、`ARDUINO_FQBN` を通じてチェックされます。CLI プロファイルは、1200 ボーのリセットを要求しダウンロードポートを待機するために、明示的に `UploadMode=cdc` を選択します。

<!-- TODO: add Arduino IDE build settings screenshot here -->

**Verify** を選択してコンパイルし、その後 **Upload** を実行します。

## ダウンロードとインストール

1. GitHub からファームウェアをダウンロードします：[reSpeaker_ESP32S3_USB_BRIDGE](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)。
2. ダウンロードしたリポジトリの内容をすべて、新しいフォルダ `Documents\Arduino\reSpeaker_ESP32S3_USB_BRIDGE` にコピーします。`.ino`、ヘッダ、`.cpp` ファイル、`sketch.yaml`、`host\`、`src\`、`docs` を含むすべてのファイルをコピーしてください。`.ino` ファイルだけをコピーするのは不十分です。
3. 新しいフォルダ内の `bridge_config.h` を編集し、16 kHz モードを選択します。次のいずれかを使用している場合：

```cpp
// #define BRIDGE_MODE BRIDGE_I2S_MASTER_48K
#define BRIDGE_MODE BRIDGE_I2S_SLAVE_16K
```

4. Arduino IDE で **File > Sketchbook > reSpeaker_ESP32S3_USB_BRIDGE** を開きます（フォルダ名は `.ino` と一致しています）。

## USB 列挙の確認

USB ケーブルを一度抜き、再接続します。次のデバイスが表示されるはずです：

- **CDC シリアルポート**（例：Windows では `COM5`）— これは制御ポートです。
- `BRIDGE I2S Slave 16k` という名前の**オーディオデバイス**（ステレオ、32 ビット、16 kHz 入出力）。

続行する前に、シリアルモニタなど、そのポートを使用しているプログラムをすべて閉じてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/device_tree.jpg" alt="pir" width={800} height="auto" /></p>

## 制御側の確認（ホストツール）

リポジトリから `host` フォルダに入り、依存関係をインストールします：

```sh
cd host
python -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python bridge_host.py --list-ports
python bridge_host.py --port COMx --ping
python bridge_host.py --port COMx VERSION
```

`COMx` の `x` を実際の COM ポート番号に置き換えてください。Linux または macOS では、`source .venv/bin/activate` で仮想環境を有効化し、`COMx` の代わりに `/dev/ttyACM0` や `/dev/cu.usbmodemXXXX` のようなパスを使用します。

期待される結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/listports.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/ping.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/mic_again.jpg" alt="pir" width={800} height="auto" /></p>

<!-- TODO: add host tool output screenshot here -->

## オーディオテスト

- **再生:** ステレオ 32 ビット 16 kHz の WAV ファイルを `BRIDGE I2S Slave 16k` 出力に再生します。音声は reSpeaker のコーデック/スピーカーから出力されるはずです。
- **キャプチャ:** 16 kHz ステレオ 32 ビットオーディオを入力から録音します。

**参考 Audacity スナップショット**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/audio_settings.jpg" alt="pir" width={600} height="auto" /></p>

<!-- TODO: add audio test screenshot here -->

## リソース

- [reSpeaker_ESP32S3_USB_BRIDGE ファームウェア（GitHub）](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)
- `README.md` — ファームウェア概要、オーディオモード、ビルド手順。
- `PLAYBACK.md` — オーディオ配線、再生バッファリング、診断、およびオーディオ/USB ステータス。
- `CONTROL.md` — I2C 配線、Python ホストユーティリティ、および CDC シリアルプロトコル。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
