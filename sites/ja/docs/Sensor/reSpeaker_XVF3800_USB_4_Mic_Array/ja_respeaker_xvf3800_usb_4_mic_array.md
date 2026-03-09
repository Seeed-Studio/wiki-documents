---
description: ReSpeaker XVF3800 USB 4-Mic Array の使用を開始しましょう。これは、USB または I2C を介した音声キャプチャとクロスプラットフォーム対応を備えた高性能音声インターフェースモジュールです。
title: reSpeaker XVF3800 USB Mic Array 入門ガイド
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_xvf3800_introduction
sku: 101991441,114993701
last_update:
  date: 11/10/2025
  author: Kasun Thushara
createdAt: '2025-08-20'
updatedAt: '2026-03-06'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/
---

# ReSpeaker XVF3800 入門ガイド

## 概要

ReSpeaker XVF3800 USB 4-Mic Array は、XMOS XVF3800 を搭載したプロフェッショナル向け 4 マイク円形アレイで、AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、360° 音声キャプチャ（最大 5m）、および高度な音声アプリケーション向けの 2 つの動作モードを備えています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特長

- **チップのアップグレード** :XVF3000 から XVF3800 へ

- **4 マイクアレイ** :4 つの高性能マイクを円形に配置し、最大 5 メートルの 360° 遠距離音声キャプチャに対応

- **高度なオーディオ処理** :XVF3800 による AEC、マルチビームフォーミング、残響除去、DoA 検出、動的ノイズ抑制、60dB の AGC レンジ

- **一意のデバイスシリアル番号** :内蔵 SN により、複数デバイスの展開や高度なデバイス管理が可能

- **2 つの動作モード** :PC にすぐ接続できる USB プラグアンドプレイモードと、組み込みシステムと統合するための INT-Device（I2S）モード—ファームウェアを切り替えることで USB または I2C コマンド経由で設定可能

- **オープンソース互換** :USB ホスト（Windows、macOS、Raspberry Pi OS）および I2S ホスト（XIAO シリーズ、ESP32、Arduino）で動作します。

- **視覚的フィードバック** :プログラム可能な RGB LED とステータスインジケータにより、デバイス状態や音声アクティビティを表示

- **同等以上の音質** :従来モデルと比較して同等またはそれ以上の音質

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主なコンポーネント

| **コンポーネント / 機能**       | **説明**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ**      | **XMOS XVF3800**。AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当します。       |
| **マイクアレイ**          | 円形配置の **4 つの PDM MEMS マイク** で、**360° 遠距離音声キャプチャ（5m）** に対応します。 |
| **オーディオコーデック**               | **TLV320AIC3104**。オーディオの変換と出力を担当します。                                              |
| **RGB LED**                  | 視覚的フィードバック（例：ステータス、音声アクティビティ）用の **12 個の WS2812** 個別制御 RGB LED。 |
| **ミュートボタン**               | 押すとマイク入力を **ミュート/ミュート解除** します。                                                       |
| **ミュートインジケータ LED**        | オーディオがミュートされていることを示すために（通常は赤色で）点灯します。                                               |
| **リセットボタン**              | ボード/システムのハードウェアリセット。                                                                 |
| **USB Type-C ポート**           | **電源とデータ** の両方に使用されます（USB Audio Class 2.0 準拠）。                                    |
| **3.5mm AUX ヘッドホンジャック**  | ヘッドホンまたはアクティブスピーカー用のオーディオ出力。                                                      |
| **スピーカーコネクタ**         | **JST スピーカーインターフェース** で、**5W アンプ内蔵スピーカー** をサポートします。                                       |
| **デバッグパッド**                | **XTAG4** などのプログラマ向けデバッグアクセス。                                                     |
| **I2C & I2S ヘッダ**         | 外部デバイスとの **I2C および I2S 通信** 用に引き出されたヘッダ。                             |
| **未使用 IO パッド（XIAO）**     | XIAO モジュールに接続された追加の I/O はんだパッド。                                                 |
| **I2S & I2C 通信**   | これらのプロトコルを使用して Raspberry Pi、PC などの外部ホストへの接続をサポートします。             |
| **USB & INT-Device モード**    | 2 つの動作モード：プラグアンドプレイ USB または I2S を介した内部 INT デバイスモード。                          |
| **一意のシリアル番号**      | 識別および複数デバイス管理のための内蔵 **デバイス SN**。                               |
| **オープンソース互換性** | **Arduino、Raspberry Pi、PC/Mac** で動作し、**XIAO シリーズ** と互換性があります。                   |
| **高度なオーディオ機能**   | AEC、ビームフォーミング、残響除去、**DoA 検出**、DNN ベースのノイズ抑制、60dB AGC。         |
| **視覚的フィードバック**           | **RGB LED パターン** と **ステータスインジケータ** によりデバイス状態とオーディオアクティビティを表示します。            |
| **音質**             | **従来の XVF3000 ベース設計** と同等またはそれ以上。                                         |

:::note
ReSpeaker XVF3800 には 2 つのバリエーションがあり、1 つは XIAO なし、もう 1 つは XIAO ESP32S3 をオンボード搭載したモデルです。XIAO なしバージョンはデフォルトの USB ファームウェアで動作します。XIAO 統合バージョンを使用するには、**INT-Device（I2S）モード** 用にビルドされたファームウェアを書き込む必要があります。詳細なセットアップ手順については、[公式 wiki ガイド](/ja/respeaker_xvf3800_xiao_getting_started) を参照してください。
:::

### XIAO ESP32S3 サポート

- 複数の出力オプションを備えたステレオ I2S 入出力；XVF3800 のパラメータ設定と管理用の I2C インターフェース。
- IO ピン経由の XIAO リセット
- インターフェースおよびはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800 には、外部制御用に 3 本の入力ピン（GPI）と 5 本の出力ピン（GPO）が用意されています。これらを使用してボタン状態を読み取ったり、ミュート LED、アンプ、LED などのハードウェアを制御したりできます。

| **ピン名** | **方向** | **機能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | ミュートボタンの状態（離したとき High）              |
| X1D13        | Input (RO)    | 未接続                                             |
| X1D34        | Input (RO)    | 未接続                                             |
| X0D11        | Output (RW)   | 未接続                                             |
| X0D30        | Output (RW)   | ミュート LED + マイクミュート制御（High = ミュート）            |
| X0D31        | Output (RW)   | アンプ有効化（Low = 有効）                     |
| X0D33        | Output (RW)   | WS2812 LED 電源制御（High = オン）                 |
| X0D39        | Output (RW)   | 未接続                                             |

## はじめに

### ハードウェアの準備

- USB Type-C ケーブル  
- ホストコンピュータまたは Raspberry Pi

### ソフトウェアの準備

### 開封してすぐに使う

#### DOA（到来方向）

LED アレイが入力音声の方向に追従する様子を体験できます。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 プラグアンドプレイ：起動ライトショーと DOA デモ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

#### ミュートボタン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

ReSpeaker 上の **ミュートボタン** は、マイクアレイからの **音声キャプチャを一時的に無効化** するために使用します。
ミュートボタンを押すとどうなりますか？

- **マイクがミュートされ**、外部の音声はキャプチャも処理もされなくなります。
- **赤色 LED が点灯し**、**ミュートモードが有効** であることを示します。
- つまり、ReSpeaker はコンピュータやホストデバイスに **いかなる音声入力も送信しません**。

**Audacity で試してみましょう**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### リセットボタン

リセット（RST）ボタンは XVF3800 のハードウェアリセットを提供します。押すとチップが再起動し、システムが最初から再初期化され、完全な電源再投入と同じ動作を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### スピーカー接続

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドホンジャックまたはオンボードの JST スピーカーインターフェースを使用してスピーカーを接続する方法を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### セーフモード

セーフモードは ReSpeaker XVF3800 上の特別なリカバリモードで、Raspberry Pi や ESP32 などのデバイス向けに USB DFU または I2C を介してファームウェアを書き込むことができます。以前に I2S ファームウェアを書き込んでいて USB ファームウェアに戻したい場合は、セーフモードに入って USB DFU を使用し、USB ファームウェアを書き戻すことができます。

:::note
ReSpeaker XVF3800 上の各種ファームウェアは、それぞれ異なる更新方法をサポートしています。

- **USB ファームウェア** は **USB DFU** のみをサポートしており、USB 接続を使用してデバイスを更新できます。ただし、**I2C DFU には対応していません**。

- **I2S ファームウェア** はその逆で、**I2C DFU** をサポートしており、I2C インターフェース経由でファームウェア更新が可能ですが、**USB DFU には対応していません**。

- Factory パーティションに保存されている **Safe Mode ファームウェア** が最も柔軟です。これは **USB DFU と I2C DFU の両方** をサポートします。

:::

**Safe Mode を使用するタイミング**

- ファームウェアが正しく動作していない（例：USB が認識されない、LED が想定どおりに点灯しない）場合。
- 新しいファームウェアを書き込みたいが、現在のファームウェアが応答しない場合。
- 誤ったファームウェアを書き込んでしまい、復旧したい場合。

**Safe Mode への入る方法**

- デバイスの電源を完全にオフにします。
- Mute ボタンを押し続けます。
- Mute ボタンを押したまま、電源を再接続します。
- 赤色 LED が点滅し始めます — これでデバイスが Safe Mode になったことが確認できます。
- これでデバイスは Factory パーティションに保存されている Safe Mode ファームウェアで動作します。

### ファームウェアの更新

公式 GitHub リポジトリには 3 種類のファームウェアが用意されています。用途に応じて適切なファームウェアを選択して書き込むことができます。詳細およびダウンロードについては、[Github Link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY) を参照してください。

:::note 
必ずリポジトリ全体をダウンロードしてください。 
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB ファームウェアは、USB ハードウェアインターフェースを介して通信する際に、**Windows、Linux、macOS** などのホスト OS で使用することを想定しています。

2 つのファームウェアバリエーションがあります。**respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin** は **2 チャンネル** オーディオを提供し、**respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin** は **6 チャンネル** オーディオを提供します。どちらのファームウェアも **16 kHz** サンプリングレート、**32 ビット** 深度で動作します。

これらのファームウェアファイルは [this link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb) から確認できます。



| ファームウェア | チャンネル数 | 備考 |
|---------|----------|-------|
| respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin | 2 | 処理済み 2 チャンネル出力 <br /> チャンネル 0: Conference <br /> チャンネル 1: ASR |
| respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin | 6 | チャンネル 0: 処理済みオーディオ (Conference) <br /> チャンネル 1: 処理済みオーディオ (ASR) <br /> チャンネル 2: Mic 0 生データ <br /> チャンネル 3: Mic 1 生データ <br /> チャンネル 4: Mic 2 生データ <br /> チャンネル 5: Mic 3 生データ |


</TabItem>

 <TabItem value="I2S" label="I2S">

I2S ファームウェアは、**XIAO ESP32S3** などのマイコンホストにデバイスを接続して使用することを想定しています。この構成では、音声データは I2S プロトコルを使用して送信されます。

ファームウェアファイル **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** は [here](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s) から入手できます。このファームウェアは **32 ビット** 深度の **2 チャンネル** オーディオをサポートします。

| ファームウェア | チャンネル数 | 備考 |
|---------|----------|-------|
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | 処理済み 2 チャンネル出力 <br /> チャンネル 0: Conference <br /> チャンネル 1: ASR |

</TabItem>

<TabItem value="HA" label="HA">

Home Assistant ファームウェアは、Home Assistant との統合向けに特別に設計された、もう 1 つの I2S ベースのファームウェアです。この最適化されたファームウェアは 48 kHz サンプリングレートの 2 チャンネルオーディオを使用し、Home Assistant 環境内での互換性とパフォーマンスを向上させます。
ファームウェアは [here](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main) から確認できます。



| ファームウェア | チャンネル数 | 備考 |
|---------|----------|-------|
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | 処理済み 2 チャンネル出力 <br /> チャンネル 0: ASR <br /> チャンネル 1: ウェイクワード |

  </TabItem>
</Tabs>



reSpeaker XVF3800 を USB ケーブルで PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（3.5mm ジャックポートの近く）を使用する必要があることに注意してください。



#### DFU Util のインストール

[`dfu-util`](http://dfu-util.sourceforge.net/) は、USB 経由で Device Firmware Upgrade を行うためのコマンドラインツールです。



<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして展開します（例：`D:\dfu-util-0.11-binaries\win64\`）。  
  [Download Link](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` へのパスを追加します。  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- **Command Prompt**（`cmd`）を開き、インストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- ReSpeaker XVF3800 を接続し、デバイスが検出されるか確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 次のようなメッセージが表示された場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 以下のドライバインストール手順に進んでください。

- [Zadig](https://zadig.akeo.ie/) をインストールします。  
  - Zadig を開き、`Options > List All Devices` を選択します。  
  - `reSpeaker 3800` または `reSpeaker XVF3800 4-Mic Array` を選択します。  
  - **WinUSB** ドライバをインストールします。  
  - デバイスの電源を入れ直します。  
  - `dfu-util -l` を再度実行し、検出を確認します。

</TabItem>

 <TabItem value="macos" label="macOS">

- Homebrew を使って dfu-util をインストールします：

```bash
brew install dfu-util
```

- デバイスが検出されているか確認します：

```bash
dfu-util -l
```

**想定される出力：**

```
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

</TabItem>

<TabItem value="linux" label="Linux">

- dfu-util をインストールします：

```bash
sudo apt install dfu-util
```

- XVF3800 を接続し、検出を確認します：

```bash
sudo dfu-util -l
```

**想定される出力：**

```bash
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

  </TabItem>
</Tabs>

#### ファームウェアの書き込み

GitHub から完全なファームウェアリポジトリをダウンロードします：[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- 次のコマンドを実行してファームウェアを書き込みます。

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- Linux では sudo を付けて実行します。

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- `-R` オプションは、書き込み後にボードを自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- 新しいファームウェアが書き込まれたことを確認するために、`dfu-util -l` コマンドで再度ファームウェアバージョンを確認します。

## 録音と再生

<Tabs>
<TabItem value="windows" label="Windows">

### Audacity のセットアップ（Windows）

1. **Audacity** を開きます。
2. **Audio Setup > Audio Settings** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. 次のように設定します：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. **OK** をクリックします。
2. 準備完了です — 録音を開始しましょう！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity のセットアップ（macOS）

1. **Audacity** を開きます。
2. **Audio Setup** に移動し、**Recording Device** として **reSpeaker 3800** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** に移動し、次のように設定します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK** をクリックします。
5. 録音の準備完了です！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Pi での録音（コマンドライン）

1. **サウンドカード番号を確認します**：

```bash
arecord -l
```

出力例：

```
**** List of CAPTURE Hardware Devices ****
card 4: Array [reSpeaker XVF3800 4-Mic Array], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

 この場合、**カード番号は 4 です**

---

2. **音声を録音する（5 秒）**：

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `4` を実際のサウンドカード番号に置き換えます

---

3. **ALSA 上で ReSpeaker XVF3800 の音量を調整する**

```bash
alsamixer
```

alsamixer では、左右の矢印キーを使用して正しいサウンドデバイスに移動します。上矢印キーで音量を上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**：

```bash
aplay -D plughw:4,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストールする（まだインストールしていない場合）**

Raspberry Pi でターミナルを開きます。次のコマンドを実行して Pi-Apps をインストールします

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。メニューに新しい Pi-Apps アイコンが表示されます。

2. **Pi-Apps 経由で Audacity をインストールする**

3. **オーディオ入力と出力を設定する**

- ツールバーの "Audio Setup" をクリックします。
- ドロップダウンメニューから "Audio Settings" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settings ウィンドウで：
  - 正しい Recording Device を選択します（例：reSpeaker XVF3800）。
  - 適切な Playback Device を選択します（例：reSpeaker XVF3800）。
  - Raspberry Pi での互換性を高めるため、Host が ALSA に設定されていることを確認します。
- 設定を適用するには OK をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声の録音と再生**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## reSpeaker XVF3800 の制御方法

reSpeaker XVF3800 には、デバイスの動作を設定し、パラメータデータを設定または読み取り、デバイス上にパラメータデータを保存できる制御インターフェースが搭載されています。ユーザーは USB または I2C インターフェースを介してデバイスを制御できます。サンプルホストアプリケーションとして、Linux、macOS、Raspberry Pi OS 向けの xvf_host、Windows 向けの xvf_host.exe が提供されており、reSpeaker XVF3800 の制御インターフェースに簡単に接続できます。

[Here](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control) からダウンロードします

:::note
xvf_host を介した制御についてさらに詳しく知りたい場合は、この[記事](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)をお読みください。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windows ユーザー

- ReSpeaker XVF3800 が USB 経由で接続されていることを確認します
- `xvf_host.exe` を次のようなフォルダに解凍します：

```text
C:\Tools\xvf_host\
```

---

**インストールを確認する**

```bash
cd C:\Tools\xvf_host
xvf_host.exe --help
```

---

**デバイス接続を確認する**

```bash
xvf_host.exe VERSION
```

期待される出力：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

---

**LED 制御**

| コマンド | 例 | 説明 |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=off、1=breath、2=rainbow、3=solid、4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | 16 進カラー（オレンジ）を設定 |
| `led_speed` | `xvf_host.exe led_speed 1` | エフェクト速度を設定 |
| `led_brightness` | `xvf_host.exe led_brightness 255` | 輝度を設定 |
| `led_gammify` | `xvf_host.exe led_gammify 1` | ガンマ補正を有効化 |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | DoA のベース色／方向色を設定 |

🟠 例（オレンジのブレスエフェクト）：

```bash
xvf_host.exe led_effect 1
xvf_host.exe led_color 0xff8800
xvf_host.exe led_speed 1
xvf_host.exe led_brightness 255
```

**設定**

```bash
xvf_host.exe save_configuration 1
xvf_host.exe clear_configuration 1
```

---

**GPIO 制御**

**入力を読み取る：**

```bash
xvf_host.exe GPI_READ_VALUES
```

出力例：`GPI_READ_VALUES 1 0 0`

この例では、戻り値 1 0 0 は、ピン X1D09 が High レベル、ピン X1D13 が Low レベル、ピン X1D34 が Low レベルであることを意味します。

**出力を読み取る：**

```bash
xvf_host.exe GPO_READ_VALUES
```

出力例：`GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値 0 0 0 1 0 は、ピン X0D11 が Low レベル、ピン X0D30 が Low レベル、ピン X0D31 が High レベル、ピン X0D33 が High レベル、ピン X0D39 が Low レベルであることを意味します。

**出力を設定する：**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # Turn ON mute LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # Turn OFF mute LED
```

**到来方向（DoA）**

- DoA は、誰かがどの方向から話しているかを示します。
- ReSpeaker XVF3800 の **LED リング** は、光で方向を表示します。
- `xvf_host` ツールを使用して DoA の値を読み取ることもできます。

DoA の値を確認するコマンド

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**：1 つ目の固定リスニング方向
- **Focused beam 2**：2 つ目の固定リスニング方向
- **Free running beam**：常に方向をスキャン
- **Auto selected beam**：最適な音声のために最終的に選択されたビーム（DoA 表示に使用）

**音声インジケータ**

- Speech Energy は、音声信号の強さを示します — 音声の音量メーターのようなものです。
- 誰かが話しているかどうか、またその大きさ／近さを検出するために使用されます。
- ノイズ、エコー、距離によってエネルギー値は影響を受けます。

 Speech Energy を確認するコマンド：

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Focused beam 1**：1 つ目のビームのエネルギー
- **Focused beam 2**：2 つ目のビームのエネルギー
- **Free running beam**：スキャンしているビームのエネルギー
- **Auto selected beam**：最終出力に選択されたビームのエネルギー

**オーディオ出力チャネル**

- XVF3800 は **2 つのオーディオチャネル**を提供します：
  - **左チャネル**：クリーンなポストプロセス済みオーディオ
  - **右チャネル**：ASR ビームまたはエコー／リファレンスデータ

これらのチャネルを**再ルーティング**して、別のソースを出力させることができます。

コマンド例

左チャネルを Amplified Microphone 0 に設定

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```

右チャネルを Far End（リファレンス）データに設定

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```

出力例：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**チューニングパラメータ（音質をさらに良くする！）**

- これらの設定は、**エコーキャンセル**、**ノイズ抑制**、**ゲイン**などを改善するのに役立ちます。
- **デフォルト設定で十分でない場合に使用してください。**

 一般的なパラメータ：

| パラメータ             | 意味                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | スピーカー入力ゲイン（エコー信号）             |
| **AUDIO_MGR_MIC_GAIN**   | マイク入力ゲイン（マイクがどれだけ大きく聞こえるか） |
| **AUDIO_MGR_SYS_DELAY**  | マイク信号とスピーカー信号の間の遅延         |
| **PP_AGCMAXGAIN**        | 自動ゲイン制御の最大レベル              |
| **AEC_ASROUTGAIN**       | ASR ビーム出力のゲイン                      |

より詳細なドキュメントや高度なコマンドについては、公式 GitHub リポジトリを参照してください：  
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### Raspberry Pi の場合

- XVF3800 を USB または I2C で接続します
- `xvf_host` を実行可能にします：

```bash
cd /path/to/xvf_host
chmod +x xvf_host
```

---

**インストールを確認する**

```bash
./xvf_host --help
./xvf_host VERSION
```

期待される結果：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**I2C を使用する：**

```bash
./xvf_host --use i2c VERSION
```

---

**LED 制御（Windows と同じ、先頭に ./ を付ける）**

```bash
./xvf_host led_effect 1
./xvf_host led_color 0xff8800
./xvf_host led_speed 1
./xvf_host led_brightness 255
```

**設定**

```bash
./xvf_host save_configuration 1
./xvf_host clear_configuration 1
```

---

**GPIO 制御**

```bash
chmod +x ./xvf_host
```

**入力を読み取る：**

```bash
./xvf_host GPI_READ_VALUES
```

出力例：`GPI_READ_VALUES 1 0 0`

この例では、戻り値 1 0 0 は、ピン X1D09 が High レベル、ピン X1D13 が Low レベル、ピン X1D34 が Low レベルであることを意味します。

**出力を読み取る：**

```bash
./xvf_host GPO_READ_VALUES
```

出力例：`GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値 0 0 0 1 0 は、ピン X0D11 が Low レベル、ピン X0D30 が Low レベル、ピン X0D31 が High レベル、ピン X0D33 が High レベル、ピン X0D39 が Low レベルであることを意味します。

**出力を設定する：**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```

**到来方向（DoA）**

- DoA は、誰かがどの方向から話しているかを示します。
- ReSpeaker XVF3800 の **LED リング** は、光で方向を表示します。
- `xvf_host` ツールを使用して DoA の値を読み取ることもできます。

DoA の値を確認するコマンド

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**：1 つ目の固定リスニング方向
- **Focused beam 2**：2 つ目の固定リスニング方向
- **Free running beam**：常に方向をスキャン
- **Auto selected beam**：最適な音声のために最終的に選択されたビーム（DoA 表示に使用）

**音声インジケータ**

- Speech Energy は、音声信号の強さを示します — 音声の音量メーターのようなものです。
- 誰かが話しているかどうか、またその大きさ／近さを検出するために使用されます。
- ノイズ、エコー、および距離はエネルギー値に影響を与える可能性があります。

音声エネルギーを確認するコマンド：

```bash
./xvf_host AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Focused beam 1**: 最初のビームのエネルギー
- **Focused beam 2**: 2 番目のビームのエネルギー
- **Free running beam**: 走査ビームのエネルギー
- **Auto selected beam**: 最終出力に選択されたビームのエネルギー

**オーディオ出力チャネル**

- XVF3800 は **2 つのオーディオチャネル** を提供します：

  - **左チャネル**: クリーンなポストプロセス済みオーディオ
  - **右チャネル**: ASR ビームまたはエコー／リファレンスデータ

これらのチャネルを**再ルーティング**して、異なるソースを出力させることができます。

コマンド例

左チャネルを増幅マイク 0 に設定

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

右チャネルを Far End（リファレンス）データに設定

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

出力例：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**チューニングパラメータ（音質をさらに良くしよう！）**

- これらの設定は、**エコーキャンセル**、**ノイズ抑制**、**ゲイン** などを改善するのに役立ちます。
- **デフォルト設定では十分でない場合に使用してください。**

一般的なパラメータ：

| パラメータ                  | 意味                                              |
| -------------------------- | ------------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | スピーカー入力ゲイン（エコー信号）               |
| **AUDIO_MGR_MIC_GAIN**  | マイク入力ゲイン（マイクがどれだけ大きく聞こえるか） |
| **AUDIO_MGR_SYS_DELAY** | マイク信号とスピーカー信号の間の遅延             |
| **PP_AGCMAXGAIN**         | 自動ゲイン制御の最大レベル                       |
| **AEC_ASROUTGAIN**        | ASR ビーム出力のゲイン                           |

より詳細なドキュメントや高度なコマンドについては、公式 GitHub リポジトリを参照してください：
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## トラブルシューティング

### スピーカー出力の再生音量が十分でないですか？

Linux 上で **ReSpeaker XVF3800** のスピーカー出力音量が小さすぎる場合、XVF3800 サウンドカードの **ALSA ミキサーレベル** を調整する必要があるかもしれません。出力音量を上げるには、以下の手順に従ってください。

**ステップ 1: ALSA ミキサーを開く**

1. ターミナルを開きます。
2. 次のコマンドを入力し、**Enter** キーを押します：

   ```bash
   alsamixer
   ```
**ステップ 2: XVF3800 サウンドカードを選択**

1. **F6** キーを押してサウンドカード選択メニューを開きます。
2. **上下矢印キー** を使用して **XVF3800** サウンドカードを選択します。
3. **Enter** キーを押して選択を確定します。

**ステップ 3: PCM-1 の音量を調整**

1. **左右矢印キー** を使用して **PCM-1** に移動します。
2. **上矢印キー** を使用して音量レベルを **100%** まで上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**ステップ 4: ALSA 設定を保存**

1. **ESC** キーを押して `alsamixer` を終了します。
2. XVF3800 の接続を外す前に、次のコマンドを実行して設定を保存します：

```bash
   sudo alsactl store
   ```

**ステップ 5: 追加オプション（PulseAudio の使用）**

ALSA レベルを調整してもまだ音がはっきり聞こえない場合は、より詳細な音量調整のために **PulseAudio Volume Control** をインストールしてみてください：

```bash
sudo apt install pavucontrol -y
```

その後、**pavucontrol** を開き、必要に応じて出力音量を 100% を超えて上げることができます。

### USB ドライバを再インストールした後、ReSpeaker が録音も再生もできません

デバイスマネージャーで ReSpeaker に関連するすべてのドライバをアンインストールしてください。これで問題が解決しました。

### ファームウェアを書き込んだ後、Windows でサウンドデバイスとして使用できませんか？

スタートメニューを開き、「Device manager」と入力します。関連する reSpeaker XVF 3800 デバイスを見つけて右クリックし、Uninstall devices を選択します。その後、デバイスを再起動します（USB を抜き差し）。すると Windows が正しいサウンドカードドライバを再インストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

## リソース

- [ReSpeaker XVF3800 3D ファイル](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [ReSpeaker XVF3800 3D-Enclosure-Up ファイル](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [ReSpeaker XVF3800 3D-Enclosure-Down ファイル](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
