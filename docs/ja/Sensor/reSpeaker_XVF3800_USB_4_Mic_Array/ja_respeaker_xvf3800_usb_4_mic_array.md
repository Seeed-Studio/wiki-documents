---
description: ReSpeaker XVF3800 USB 4-Mic Arrayの使用開始—USB または I2C 経由でクロスプラットフォーム対応と音声キャプチャ機能を備えた高性能音声インターフェースモジュール。

title: reSpeaker XVF3800 USB Mic Array の使用開始
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /ja/respeaker_xvf3800_introduction
last_update:
  date: 11/10/2025
  author: Kasun Thushara
---

# ReSpeaker XVF3800 の使用開始

## 概要

ReSpeaker XVF3800 USB 4-Mic Array は、XMOS XVF3800 を搭載したプロフェッショナル 4 マイク円形アレイで、AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、360° 音声キャプチャ（最大 5m）、および高度な音声アプリケーション向けのデュアル動作モードを特徴としています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **チップアップグレード** ：XVF3000 から XVF3800 へ

- **クアッドマイクロフォンアレイ** ：円形パターンの 4 つの高性能マイクで、最大 5 メートルの 360° 遠距離音声キャプチャ

- **高度なオーディオ処理** ：AEC、マルチビームフォーミング、残響除去、DoA 検出、動的ノイズ抑制、60dB AGC 範囲を備えた XVF3800 搭載

- **固有デバイスシリアル番号** ：内蔵 SN により、マルチデバイス展開と高度なデバイス管理が可能

- **デュアル動作モード** ：即座の PC 接続用 USB プラグアンドプレイモードと、組み込みシステムとの統合用 INT-Device（I2S）モード—ファームウェアを適切に切り替えることで USB または I2C コマンド経由で設定可能

- **オープンソース互換** ：USB ホスト（Windows、macOS、Raspberry Pi OS）および I2S ホスト（XIAO シリーズ、ESP32、Arduino）で動作

- **視覚的フィードバック** ：プログラム可能な RGB LED とステータスインジケータがデバイス状態と音声アクティビティを表示

- **同等以上のオーディオ品質** ：前モデルと比較して

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要コンポーネント

| **コンポーネント / 機能**       | **説明**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ**      | **XMOS XVF3800**、AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当       |
| **マイクロフォンアレイ**          | 円形パターンの**クアッド PDM MEMS マイクロフォン**、**360° 遠距離音声キャプチャ（5m）**をサポート |
| **オーディオコーデック**               | **TLV320AIC3104**、オーディオ変換と出力を処理                                              |
| **RGB LED**                  | 視覚的フィードバック用の**12x WS2812** 個別アドレス可能 RGB LED（例：ステータス、音声アクティビティ） |
| **ミュートボタン**               | 押すとマイクロフォン入力を**ミュート/ミュート解除**                                                       |
| **ミュートインジケータ LED**        | オーディオがミュートされていることを示すために点灯（通常は赤色）                                               |
| **リセットボタン**              | ボード/システムのハードウェアリセット                                                                 |
| **USB Type-C ポート**           | **電源とデータ**の両方に使用（USB Audio Class 2.0 準拠）                                    |
| **3.5mm AUX ヘッドフォンジャック**  | ヘッドフォンまたはアクティブスピーカー用のオーディオ出力                                                      |
| **スピーカーコネクタ**         | **JST スピーカーインターフェース**、**5W 増幅スピーカー**をサポート                                       |
| **デバッグパッド**                | **XTAG4** またはその他のプログラマー用のデバッグアクセス                                                     |
| **I2C & I2S ヘッダー**         | 外部デバイスとの **I2C および I2S 通信**用の露出ヘッダー                             |
| **未使用 IO パッド（XIAO）**     | XIAO モジュールに接続された追加の I/O はんだパッド                                                 |
| **I2S & I2C 通信**   | これらのプロトコルを使用して Raspberry Pi、PC などの外部ホストへの接続をサポート             |
| **USB & INT-Device モード**    | デュアルモード動作：プラグアンドプレイ USB または I2S 経由の内部 INT デバイスモード                          |
| **固有シリアル番号**      | 識別とマルチデバイス管理用の内蔵**デバイス SN**                               |
| **オープンソース互換性** | **Arduino、Raspberry Pi、PC/Mac** で動作し、**XIAO シリーズ**と互換性あり                   |
| **高度なオーディオ機能**   | AEC、ビームフォーミング、残響除去、**DoA 検出**、DNN ベースのノイズ抑制、60dB AGC         |
| **視覚的フィードバック**           | **RGB LED パターン**と**ステータスインジケータ**によるデバイス状態とオーディオアクティビティの表示            |
| **オーディオ品質**             | **以前の XVF3000 ベース設計**と同等以上                                         |

:::note
ReSpeaker XVF3800 は 2 つのバリアントで提供されます—XIAO なしのものと、XIAO ESP32S3 をオンボードで搭載したものです。XIAO なしのバージョンはデフォルトの USB ファームウェアで動作します。XIAO 統合バージョンを使用するには、**INT-Device（I2S）モード**用にビルドされたファームウェアをフラッシュする必要があります。詳細なセットアップ手順については、[公式 wiki ガイド](docs/Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/respeaker_xvf3800_with_xiao_intro.md)を参照してください。
:::

### XIAO ESP32S3 サポート

- 複数の出力オプションを持つステレオ I2S 入出力；XVF3800 パラメータの設定と管理用 I2C インターフェース
- IO ピン経由の XIAO リセット
- インターフェースとはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800 は外部制御用に 3 つの入力ピン（GPI）と 5 つの出力ピン（GPO）を公開しています。これらを使用してボタンの状態を読み取ったり、ミュート LED、アンプ、LED などのハードウェアを制御したりできます。

| **ピン名** | **方向** | **機能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | 入力（RO）    | ミュートボタンステータス（リリース時にハイ）              |
| X1D13        | 入力（RO）    | フローティング                                             |
| X1D34        | 入力（RO）    | フローティング                                             |
| X0D11        | 出力（RW）   | フローティング                                             |
| X0D30        | 出力（RW）   | ミュート LED + マイクミュート制御（ハイ = ミュート）            |
| X0D31        | 出力（RW）   | アンプ有効化（ロー = 有効）                     |
| X0D33        | 出力（RW）   | WS2812 LED 電源制御（ハイ = オン）                 |
| X0D39        | 出力（RW）   | フローティング                                             |

## 使用開始

### ハードウェア準備

- USB Type-C ケーブル  
- ホストコンピュータまたは Raspberry Pi

### ソフトウェア準備

### 開封後の使用

#### DOA（到来方向）

入力音声の方向に従う LED アレイを体験できます。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 Plug & Play: Boot Light Show and DOA Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

#### ミュートボタン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

ReSpeaker の**ミュートボタン**は、マイクロフォンアレイからの**音声キャプチャを一時的に無効化**するために使用されます。
ミュートボタンを押すと何が起こりますか？

- **マイクロフォンがミュートされます** — 外部の音声はもはやキャプチャまたは処理されません。
- **赤色 LED が点灯**して**ミュートモードがアクティブ**であることを示します。
- これは ReSpeaker が**コンピュータやホストデバイスにオーディオ入力を送信しない**ことを意味します。

**Audacity で試してみる**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### リセットボタン

リセット（RST）ボタンは XVF3800 のハードウェアリセットを提供します—押すと、チップが再起動し、完全な電源サイクルと同様に、システムを最初から再初期化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### スピーカー接続

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドフォンジャックまたはオンボード JST スピーカーインターフェースのいずれかを使用してスピーカーを接続する方法を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### セーフモード

セーフモードは ReSpeaker XVF3800 の特別なリカバリモードで、USB DFU または I2C 経由でファームウェアをフラッシュできます—Raspberry Pi や ESP32 などのデバイス用です。以前に I2S ファームウェアをフラッシュして USB ファームウェアに戻したい場合は、セーフモードに入り、USB DFU を使用して USB ファームウェアを再フラッシュできます。

:::note
ReSpeaker XVF3800 の各タイプのファームウェアは異なる更新方法をサポートしています：

- **USB ファームウェア**は**USB DFU のみ**をサポートしており、USB 接続を使用してデバイスを更新できることを意味します。ただし、**I2C DFU はサポートしていません**。

- **I2S ファームウェア**はその逆で—**I2C DFU** をサポートしており、I2C インターフェース経由でファームウェア更新が可能ですが、**USB DFU はサポートしていません**。

- **セーフモードファームウェア**は、Factoryパーティションに保存されており、最も柔軟性があります。**USB DFUとI2C DFUの両方**をサポートしています。

:::

**セーフモードを使用するタイミング**

- ファームウェアが正常に動作しない場合（例：USBが検出されない、LEDが期待通りに点灯しない）。
- 新しいファームウェアを再フラッシュする必要があるが、現在のファームウェアが応答しない場合。
- 誤って間違ったものをフラッシュしてしまい、復旧したい場合。

**セーフモードに入る方法**

- デバイスの電源を完全に切ります。
- Muteボタンを押し続けます。
- Muteボタンを押し続けながら、電源を再接続します。
- 赤色LEDが点滅し始めます — これでデバイスがセーフモードに入ったことが確認できます。
- これで、デバイスはFactoryパーティションに保存されているセーフモードファームウェアを実行します。

### ファームウェアの更新

reSpeaker XVF3800をUSBケーブルでPCに接続します。XMOSのファームウェアをフラッシュするには、XMOS USB-Cポート（3.5mmジャックポートの近く）を使用する必要があることに注意してください。

#### DFU Utilのインストール

[`dfu-util`](http://dfu-util.sourceforge.net/)は、USB経由でDevice Firmware Upgradeを行うためのコマンドラインツールです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz`をダウンロードして展開します（例：`D:\dfu-util-0.11-binaries\win64\`）  
  [ダウンロードリンク](http://dfu-util.sourceforge.net/)

- `dfu-util.exe`へのパスをシステムの`Path`変数に追加します：  
  `マイコンピュータ > プロパティ > 詳細設定 > 環境変数 > Path`

- **コマンドプロンプト**（`cmd`）を開いてインストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- ReSpeaker XVF3800を接続してデバイスの検出を確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 次のエラーが表示される場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 以下のドライバーインストール手順に進んでください。

- [Zadig](https://zadig.akeo.ie/)をインストールします  
  - Zadigを開く → `Options > List All Devices`  
  - `reSpeaker 3800`または`reSpeaker XVF3800 4-Mic Array`を選択  
  - **WinUSB**ドライバーをインストール  
  - デバイスの電源を入れ直す  
  - `dfu-util -l`を再実行して検出を確認します。

</TabItem>

 <TabItem value="macos" label="macOS">

- Homebrewでdfu-utilをインストールします：

```bash
brew install dfu-util
```

- デバイスが検出されるかを確認します：

```bash
dfu-util -l
```

**期待される出力：**

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

- dfu-utilをインストールします：

```bash
sudo apt install dfu-util
```

- XVF3800を接続して検出を確認します：

```bash
sudo dfu-util -l
```

**期待される出力：**

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

#### ファームウェアのフラッシュ

ファームウェアをここからダウンロードしてください。[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- 次のコマンドを実行してファームウェアをフラッシュします

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- Linuxでは、sudoで実行します

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- `-R`オプションは、フラッシュ後に自動的にボードを再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- `dfu-util -l`コマンドで再度ファームウェアバージョンを確認し、新しいファームウェアがフラッシュされたことを確認します

## 録音と再生

<Tabs>
<TabItem value="windows" label="Windows">

### Audacityの設定（Windows）

1. **Audacity**を開きます
2. **Audio Setup > Audio Settings**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. 設定：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project**と**Default Sample Rate**の両方）
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. **OK**をクリックします
2. 準備完了 — 録音を開始してください！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacityの設定（macOS）

1. **Audacity**を開きます
2. **Audio Setup**に移動し、**Recording Device**として**reSpeaker 3800**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting**に移動して設定：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project**と**Default Sample Rate**の両方）
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK**をクリックします
5. 録音準備完了！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Piでの録音（コマンドライン）

1. **サウンドカード番号を見つける**：

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

 この場合、**カード番号は4**です

---

2. **音声を録音（5秒間）**：

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `4`を実際のサウンドカード番号に置き換えてください

---

3. **ALSAでのReSpeaker XVF3800の音量調整**

```bash
alsamixer
```

alsamixerでは、左右の矢印キーを使用して正しいサウンドデバイスに移動します。上矢印キーを使用して音量を上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**：

```bash
aplay -D plughw:4,0 output.wav
```

### Raspberry Piでの録音（Audacity）

1. **Pi-Appsのインストール（まだインストールされていない場合）**

Raspberry Piでターミナルを開きます。次のコマンドを実行してPi-Appsをインストールします

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。新しいPi-Appsアイコンがメニューに表示されます。

2. **Pi-Apps経由でAudacityをインストール**

3. **音声入力と出力の設定**

- ツールバーの "Audio Setup" をクリックします。
- ドロップダウンメニューから "Audio Settings" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settingsウィンドウで：
  - 正しいRecording Device（例：reSpeaker XVF3800）を選択します。
  - 適切なPlayback Device（例：reSpeaker XVF3800）を選択します。
  - Raspberry Piでの最適な互換性のため、HostがALSAに設定されていることを確認します。
- OKをクリックして設定を適用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声の録音と再生**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## reSpeaker XVF3800の制御方法

reSpeaker XVF3800には、ユーザーがデバイスの動作を設定し、パラメータデータを設定または読み取り、デバイスにパラメータデータを保存できる制御インターフェースが搭載されています。ユーザーはUSBまたはI2Cインターフェース経由でデバイスを制御できます。reSpeaker XVF3800の制御インターフェースに簡単に接続するために、サンプルホストアプリケーションxvf_host（Linux、macOS、Raspberry Pi OS用）またはxvf_host.exe（Windows用）が提供されています。

[ここ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)からダウンロードしてください

:::note
xvf_hostによる制御についてさらに詳しく知りたい場合は、この[記事](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)をお読みください。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windowsユーザー

- ReSpeaker XVF3800がUSB経由で接続されていることを確認します
- `xvf_host.exe`を次のようなフォルダに解凍します：

```text
C:\Tools\xvf_host\
```

---

**インストールの確認**

```bash
cd C:\Tools\xvf_host
xvf_host.exe --help
```

---

**デバイス接続の確認**

```bash
xvf_host.exe VERSION
```

期待される出力：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

---

**LED制御**

| コマンド | 例 | 説明 |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=オフ, 1=呼吸, 2=レインボー, 3=単色, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | 16進数カラーを設定（オレンジ） |
| `led_speed` | `xvf_host.exe led_speed 1` | エフェクト速度を設定 |
| `led_brightness` | `xvf_host.exe led_brightness 255` | 明度を設定 |
| `led_gammify` | `xvf_host.exe led_gammify 1` | ガンマ補正を有効化 |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | DoAベース/方向カラーを設定 |

🟠 例（オレンジ呼吸）：

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

**GPIO制御**

**入力の読み取り：**

```bash
xvf_host.exe GPI_READ_VALUES
```

出力例：`GPI_READ_VALUES 1 0 0`

この例では、戻り値1 0 0は、ピンX1D09がハイレベル、ピンX1D13がローレベル、ピンX1D34がローレベルであることを意味します。

**出力の読み取り：**

```bash
xvf_host.exe GPO_READ_VALUES
```

出力例：`GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値0 0 0 1 0は、ピンX0D11がローレベル、ピンX0D30がローレベル、ピンX0D31がハイレベル、ピンX0D33がハイレベル、ピンX0D39がローレベルであることを意味します。

**出力の設定：**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # Turn ON mute LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # Turn OFF mute LED
```

**到来方向（DoA）**

- DoAは誰かが話している方向を教えてくれます。
- ReSpeaker XVF3800の**LEDリング**は、ライトを使って方向を表示します。
- `xvf_host`ツールを使ってDoA値を読み取ることもできます。

DoA値を確認するコマンド

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **フォーカスビーム1**：最初の固定リスニング方向
- **フォーカスビーム2**：2番目の固定リスニング方向
- **フリーランニングビーム**：常にスキャンしている方向
- **自動選択ビーム**：最適なオーディオのために選択された最終ビーム（DoA表示に使用）

**音声表示**

- 音声エネルギーは音声信号の強さを示します — 音声ボリュームメーターのようなものです。
- 誰かが話しているかどうか、どのくらい大きく/近くにいるかを検出するために使用されます。
- ノイズ、エコー、距離がエネルギー値に影響を与える可能性があります。

 音声エネルギーを確認するコマンド：

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **フォーカスビーム1**：最初のビームのエネルギー
- **フォーカスビーム2**：2番目のビームのエネルギー
- **フリーランニングビーム**：スキャンビームのエネルギー
- **自動選択ビーム**：最終出力に選択されたビームのエネルギー

**オーディオ出力チャンネル**

- XVF3800は**2つのオーディオチャンネル**を提供します：
  - **左チャンネル**：クリーンで後処理されたオーディオ
  - **右チャンネル**：ASRビームまたはエコー/リファレンスデータ

これらのチャンネルを**再ルーティング**して、異なるソースを出力することができます。

コマンド例

左チャンネルを増幅マイク0に設定

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```

右チャンネルをFar End（リファレンス）データに設定

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```

出力例：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**チューニングパラメータ（音質を向上させる！）**

- これらの設定は**エコーキャンセレーション**、**ノイズ抑制**、**ゲイン**などの改善に役立ちます。
- **デフォルト設定が十分でない場合に使用してください。**

 一般的なパラメータ：

| パラメータ             | 意味                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | スピーカー入力ゲイン（エコー信号）             |
| **AUDIO_MGR_MIC_GAIN**   | マイク入力ゲイン（マイクが聞く音量） |
| **AUDIO_MGR_SYS_DELAY**  | マイクとスピーカー信号間の遅延         |
| **PP_AGCMAXGAIN**        | 最大自動ゲイン制御レベル              |
| **AEC_ASROUTGAIN**       | ASRビーム出力のゲイン                      |

より詳細なドキュメントと高度なコマンドについては、公式GitHubリポジトリをご覧ください：  
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### Raspberry Pi向け

- XVF3800をUSBまたはI2C経由で接続
- `xvf_host`を実行可能にする：

```bash
cd /path/to/xvf_host
chmod +x xvf_host
```

---

**インストールの確認**

```bash
./xvf_host --help
./xvf_host VERSION
```

期待される出力：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**I2Cの使用：**

```bash
./xvf_host --use i2c VERSION
```

---

**LED制御（Windowsと同じ、./を前に付ける）**

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

**GPIO制御**

```bash
chmod +x ./xvf_host
```

**入力の読み取り：**

```bash
./xvf_host GPI_READ_VALUES
```

出力例：`GPI_READ_VALUES 1 0 0`

この例では、戻り値1 0 0は、ピンX1D09がハイレベル、ピンX1D13がローレベル、ピンX1D34がローレベルであることを意味します。

**出力の読み取り：**

```bash
./xvf_host GPO_READ_VALUES
```

出力例：`GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値0 0 0 1 0は、ピンX0D11がローレベル、ピンX0D30がローレベル、ピンX0D31がハイレベル、ピンX0D33がハイレベル、ピンX0D39がローレベルであることを意味します。

**出力の設定：**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```

**到来方向（DoA）**

- DoAは誰かが話している方向を教えてくれます。
- ReSpeaker XVF3800の**LEDリング**は、ライトを使って方向を表示します。
- `xvf_host`ツールを使ってDoA値を読み取ることもできます。

DoA値を確認するコマンド

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **フォーカスビーム1**：最初の固定リスニング方向
- **フォーカスビーム2**：2番目の固定リスニング方向
- **フリーランニングビーム**：常にスキャンしている方向
- **自動選択ビーム**：最適なオーディオのために選択された最終ビーム（DoA表示に使用）

**音声表示**

- 音声エネルギーは音声信号の強さを示します — 音声ボリュームメーターのようなものです。
- 誰かが話しているかどうか、どのくらい大きく/近くにいるかを検出するために使用されます。
- ノイズ、エコー、距離がエネルギー値に影響を与える可能性があります。

音声エネルギーを確認するコマンド：

```bash
./xvf_host AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **フォーカスビーム1**：最初のビームのエネルギー
- **フォーカスビーム2**：2番目のビームのエネルギー
- **フリーランニングビーム**：スキャンビームのエネルギー
- **自動選択ビーム**：最終出力に選択されたビームのエネルギー

**オーディオ出力チャンネル**

- XVF3800は**2つのオーディオチャンネル**を提供します：

  - **左チャンネル**：クリーンで後処理されたオーディオ
  - **右チャンネル**：ASRビームまたはエコー/リファレンスデータ

これらのチャンネルを**再ルーティング**して、異なるソースを出力することができます。

コマンド例

左チャンネルを増幅マイク0に設定

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

右チャンネルをFar End（リファレンス）データに設定

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

出力例：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**チューニングパラメータ（音質を向上させる！）**

- これらの設定は**エコーキャンセレーション**、**ノイズ抑制**、**ゲイン**などの改善に役立ちます。
- **デフォルト設定が十分でない場合に使用してください。**

一般的なパラメータ：

| パラメータ                  | 意味                                        |
| -------------------------- | ---------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | スピーカー入力ゲイン（エコー信号）               |
| **AUDIO_MGR_MIC_GAIN**  | マイク入力ゲイン（マイクが聞く音量） |
| **AUDIO_MGR_SYS_DELAY** | マイクとスピーカー信号間の遅延          |
| **PP_AGCMAXGAIN**         | 最大自動ゲイン制御レベル               |
| **AEC_ASROUTGAIN**        | ASRビーム出力のゲイン                       |

より詳細なドキュメントと高度なコマンドについては、公式GitHubリポジトリをご覧ください：
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## ReSpeaker XVF3800のPython例

USBまたはI2C経由でデバイスを制御するためのPython例を用意しました。

:::note
Pythonスクリプトでxvf_hostを使った制御についてさらに詳しく知りたい場合は、この[記事](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)をお読みください。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windows向け

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

PythonがインストールされていることとReSpeaker XVF3800がUSB経由で接続されていることを確認してください。

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### Raspberry Pi向け

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

`xvf_host`が実行可能であることと、ボードがUSBまたはI2C経由で接続されていることを確認してください。

</TabItem>
</Tabs>

`test.py` ファイルは以下のように探索できます。これは参考用です。

``` bash
import subprocess
import sys
import time

# Path to your xvf_host binary
XVF_HOST_PATH = "./xvf_host"  # Change this if xvf_host is in a different location

def run_command(*args):
    """Run a command using the xvf_host tool."""
    command = ["sudo", XVF_HOST_PATH] + list(map(str, args))
    try:
        print(f"Running: {' '.join(command)}")
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, text=True)
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:\n", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Example: Get device version
    run_command("VERSION")
    time.sleep(0.005)

    # Example: Set LED to breath mode with orange color
    run_command("led_effect", 1)
    time.sleep(0.005)
    run_command("led_color", "0xff8800")
    time.sleep(0.005)
    run_command("led_speed", 1)
    time.sleep(0.005)
    run_command("led_brightness", 255)
    time.sleep(0.005)

    # Example: Save current configuration
    #run_command("save_configuration", 1)

    # Uncomment to clear config
    run_command("clear_configuration", 1)
    time.sleep(0.005)

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>

## トラブルシューティング

### スピーカー出力からの再生音が十分でない場合

Linux で **ReSpeaker XVF3800** のスピーカー出力音量が低すぎる場合、XVF3800 サウンドカードの **ALSA ミキサーレベル** を調整する必要があります。出力音量を上げるには、以下の手順に従ってください。

**ステップ 1: ALSA ミキサーを開く**

1. ターミナルを開きます。
2. 以下のコマンドを入力し、**Enter** を押します：

   ```bash
   alsamixer
   ```
**ステップ 2: XVF3800 サウンドカードを選択する**

1. **F6** を押してサウンドカード選択メニューを開きます。
2. **上下矢印キー** を使用して **XVF3800** サウンドカードをハイライトします。
3. **Enter** を押して選択を確定します。

**ステップ 3: PCM-1 音量を調整する**

1. **左右矢印キー** を使用して **PCM-1** に移動します。
2. **上矢印キー** を使用して音量レベルを **100%** まで上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**ステップ 4: ALSA 設定を保存する**

1. **ESC** を押して `alsamixer` を終了します。
2. XVF3800 を取り外す前に、以下のコマンドを実行して設定を保存します：

```bash
   sudo alsactl store
   ```

**ステップ 5: 追加オプション（PulseAudio を使用）**

ALSA レベルを調整した後でも音がはっきり聞こえない場合は、より詳細な音量調整のために **PulseAudio Volume Control** をインストールしてみてください：

```bash
sudo apt install pavucontrol -y
```

その後、**pavucontrol** を開いて、必要に応じて出力音量を 100% を超えて上げることができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
