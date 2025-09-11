---
description: ReSpeaker XVF3800 USB 4-Mic Arrayの使用開始—USB または I2C 経由で音声キャプチャとクロスプラットフォームサポートを特徴とする高性能音声インターフェースモジュール。

title: reSpeaker XVF3800 USB Mic Array の使用開始
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /ja/respeaker_xvf3800_introduction
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

# ReSpeaker XVF3800 の使用開始

## 概要

ReSpeaker XVF3800 USB 4-Mic Array は、XMOS XVF3800 を搭載したプロフェッショナル 4 マイク円形アレイで、AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、360° 音声キャプチャ（最大 5m）、および高度な音声アプリケーション向けのデュアル動作モードを特徴としています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **チップアップグレード** : XVF3000 から XVF3800 へ
  
- **クアッドマイクロフォンアレイ** : 円形パターンの 4 つの高性能マイクで、最大 5 メートルの 360° 遠距離音声キャプチャ
  
- **高度なオーディオ処理** : XVF3800 による AEC、マルチビームフォーミング、残響除去、DoA 検出、動的ノイズ抑制、60dB AGC 範囲

- **固有のデバイスシリアル番号** : 内蔵 SN により、マルチデバイス展開と高度なデバイス管理が可能

- **デュアル動作モード** : PC への即座接続のための USB プラグアンドプレイモードと、組み込みシステムとの統合のための INT-Device（I2S）モード—ファームウェアを適宜切り替えることで USB または I2C コマンドで設定可能

- **オープンソース対応** : USB ホスト（Windows、macOS、Raspberry Pi OS）および I2S ホスト（XIAO シリーズ、ESP32、Arduino）で動作

- **視覚的フィードバック** : プログラマブル RGB LED とステータスインジケータがデバイス状態と音声アクティビティを表示

- **同等以上のオーディオ品質** : 以前のモデルと比較して

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要コンポーネント

| **コンポーネント / 機能**       | **説明**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ**      | **XMOS XVF3800**、AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当。       |
| **マイクロフォンアレイ**          | 円形パターンの**クアッドPDM MEMSマイクロフォン**、**360°遠距離音声キャプチャ（5m）**をサポート。 |
| **オーディオコーデック**               | **TLV320AIC3104**、オーディオ変換と出力を処理。                                              |
| **RGB LED**                  | **12個のWS2812**個別アドレス可能RGB LED、視覚的フィードバック用（ステータス、音声アクティビティなど）。 |
| **ミュートボタン**               | 押すとマイクロフォン入力を**ミュート/ミュート解除**。                                                       |
| **ミュートインジケータLED**        | 点灯（通常は赤）してオーディオがミュートされていることを表示。                                               |
| **リセットボタン**              | ボード/システムのハードウェアリセット。                                                                 |
| **USB Type-Cポート**           | **電源とデータ**の両方に使用（USB Audio Class 2.0準拠）。                                    |
| **3.5mm AUXヘッドフォンジャック**  | ヘッドフォンまたはアクティブスピーカー用のオーディオ出力。                                                      |
| **スピーカーコネクタ**         | **JSTスピーカーインターフェース**、**5W増幅スピーカー**をサポート。                                       |
| **デバッグパッド**                | **XTAG4**または他のプログラマー用のデバッグアクセス。                                                     |
| **I2C & I2Sヘッダー**         | 外部デバイスとの**I2CおよびI2S通信**用の露出ヘッダー。                             |
| **未使用IOパッド（XIAO）**     | XIAOモジュールに接続された追加のI/Oはんだパッド。                                                 |
| **I2S & I2C通信**   | これらのプロトコルを使用してRaspberry Pi、PCなどの外部ホストへの接続をサポート。             |
| **USB & INT-デバイスモード**    | デュアルモード動作：プラグアンドプレイUSBまたはI2S経由の内部INTデバイスモード。                          |
| **ユニークシリアル番号**      | 識別とマルチデバイス管理用の内蔵**デバイスSN**。                               |
| **オープンソース互換性** | **Arduino、Raspberry Pi、PC/Mac**で動作し、**XIAOシリーズ**と互換性あり。                   |
| **高度なオーディオ機能**   | AEC、ビームフォーミング、残響除去、**DoA検出**、DNNベースのノイズ抑制、60dB AGC。         |
| **視覚的フィードバック**           | **RGB LEDパターン**と**ステータスインジケータ**によるデバイス状態とオーディオアクティビティの表示。            |
| **オーディオ品質**             | **従来のXVF3000ベース設計**と同等またはそれ以上。                                         |

:::note
ReSpeaker XVF3800は2つのバリエーションで提供されています—XIAOなしのものと、XIAO ESP32S3をオンボードで搭載したものです。XIAOなしのバージョンは、デフォルトのUSBファームウェアで動作します。XIAO統合バージョンを使用するには、**INT-Device (I2S) モード**用にビルドされたファームウェアをフラッシュする必要があります。詳細なセットアップ手順については、[公式wikiガイド](docs/Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/respeaker_xvf3800_with_xiao_intro.md)を参照してください。
:::

### XIAO ESP32S3 サポート

- 複数の出力オプションを持つステレオI2S入力/出力；XVF3800パラメータの設定と管理のためのI2Cインターフェース。
- IOピンによるXIAOリセット
- インターフェースとはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800は、外部制御用に3つの入力ピン（GPI）と5つの出力ピン（GPO）を公開しています。これらを使用してボタンの状態を読み取ったり、ミュートLED、アンプ、LEDなどのハードウェアを制御したりできます。

| **ピン名** | **方向** | **機能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | 入力 (RO)    | ミュートボタンステータス（リリース時にハイ）              |
| X1D13        | 入力 (RO)    | フローティング                                             |
| X1D34        | 入力 (RO)    | フローティング                                             |
| X0D11        | 出力 (RW)   | フローティング                                             |
| X0D30        | 出力 (RW)   | ミュートLED + マイクミュート制御（ハイ = ミュート）            |
| X0D31        | 出力 (RW)   | アンプ有効化（ロー = 有効）                     |
| X0D33        | 出力 (RW)   | WS2812 LED電源制御（ハイ = オン）                 |
| X0D39        | 出力 (RW)   | フローティング                                             |

## はじめに

### ハードウェアの準備

- USB Type-C ケーブル  
- ホストコンピュータまたは Raspberry Pi

### ソフトウェアの準備

### 開封後の使用方法

#### DOA (Direction of Arrival)

音声の入力方向に従って LED アレイが動作する様子を体験できます。

<div align="center">
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

ReSpeaker の**ミュートボタン**は、マイクアレイからの**音声キャプチャを一時的に無効にする**ために使用されます。
ミュートボタンを押すと何が起こりますか？

- **マイクがミュートされます** — 外部の音声はキャプチャまたは処理されなくなります。
- **赤色 LED が点灯**して**ミュートモードがアクティブ**であることを示します。
- これは、ReSpeaker が**コンピュータやホストデバイスにオーディオ入力を送信しない**ことを意味します。

**Audacity で試してみる**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### リセットボタン

リセット（RST）ボタンは XVF3800 のハードウェアリセットを提供します。押すと、チップが再起動し、完全な電源サイクルと同様に、システムを最初から再初期化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### スピーカー接続

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドフォンジャックまたはオンボード JST スピーカーインターフェースのいずれかを使用してスピーカーを接続する方法を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### セーフモード

セーフモードは ReSpeaker XVF3800 の特別なリカバリモードで、USB DFU または I2C 経由でファームウェアをフラッシュできます（Raspberry Pi や ESP32 などのデバイス用）。以前に I2S ファームウェアをフラッシュして USB ファームウェアに戻したい場合は、セーフモードに入り、USB DFU を使用して USB ファームウェアを再フラッシュできます。

:::note
ReSpeaker XVF3800 の各タイプのファームウェアは、異なる更新方法をサポートしています：

- **USB ファームウェア**は**USB DFU のみ**をサポートしており、USB 接続を使用してデバイスを更新できます。ただし、**I2C DFU はサポートしていません**。
  
- **I2S ファームウェア**はその逆で、**I2C DFU** をサポートしており、I2C インターフェース経由でファームウェアを更新できますが、**USB DFU はサポートしていません**。
  
- Factory パーティションに保存されている**セーフモードファームウェア**は最も柔軟性があります。**USB DFU と I2C DFU の両方**をサポートしています。

:::

**セーフモードを使用するタイミング**

- ファームウェアが正常に動作していない場合（例：USB が検出されない、LED が期待通りに点灯しない）。
- 新しいファームウェアを再フラッシュする必要があるが、現在のファームウェアが応答しない場合。
- 誤って間違ったものをフラッシュしてしまい、復旧したい場合。

**セーフモードに入る方法**

- デバイスを完全に電源オフします。
- ミュートボタンを押し続けます。
- ミュートボタンを押し続けながら、電源を再接続します。
- 赤色 LED が点滅し始めます — これでデバイスがセーフモードに入ったことが確認できます。
- これで、デバイスは Factory パーティションに保存されているセーフモードファームウェアを実行します。

### ファームウェアの更新

USB ケーブルを使用して reSpeaker XVF3800 を PC に接続します。XMOS のファームウェアをフラッシュするには、XMOS USB-C ポート（3.5mm ジャックポートの近く）を使用する必要があることに注意してください。

#### DFU Util のインストール

[`dfu-util`](http://dfu-util.sourceforge.net/) は、USB 経由でデバイスファームウェアアップグレードを行うためのコマンドラインツールです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして展開します（例：`D:\dfu-util-0.11-binaries\win64\`）  
  [ダウンロードリンク](http://dfu-util.sourceforge.net/)

- `dfu-util.exe` へのパスをシステムの `Path` 変数に追加します：  
  `マイコンピュータ > プロパティ > 詳細設定 > 環境変数 > Path`

- **コマンドプロンプト**（`cmd`）を開いてインストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- ReSpeaker XVF3800を接続し、デバイスの検出を確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 以下のエラーが発生した場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 下記のドライバーインストール手順を実行してください。

- [Zadig](https://zadig.akeo.ie/)をインストール  
  - Zadigを開く → `Options > List All Devices`  
  - `reSpeaker 3800`または`reSpeaker XVF3800 4-Mic Array`を選択  
  - **WinUSB**ドライバーをインストール  
  - デバイスの電源を入れ直す  
  - `dfu-util -l`を再実行して検出を確認する

</TabItem>

 <TabItem value="macos" label="macOS">

- Homebrewでdfu-utilをインストール：

```bash
brew install dfu-util
```

- デバイスが検出されているかを確認します：

```bash
dfu-util -l
```

**期待される出力:**

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

- XVF3800を接続し、検出を確認します：

```bash
sudo dfu-util -l
```

**期待される出力:**

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

ファームウェアをここからダウンロードしてください。[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- 以下のコマンドを実行してファームウェアを書き込みます

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- Linuxでは、sudoで実行してください

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- `-R` オプションは、フラッシュ後に自動的にボードを再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- `dfu-util -l` コマンドで再度ファームウェアバージョンを確認し、新しいファームウェアがフラッシュされていることを確認してください

## 録音と再生

<Tabs>
<TabItem value="windows" label="Windows">

### Audacity のセットアップ（Windows）

1. **Audacity** を開く
2. **Audio Setup > Audio Settings** に移動

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. 以下のように設定：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. **OK** をクリック
2. 準備完了 — 録音を開始してください！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity のセットアップ（macOS）

1. **Audacity** を開く
2. **Audio Setup** に移動し、**Recording Device** として **reSpeaker 3800** を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** に移動し、以下のように設定：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK** をクリック
5. 録音準備完了！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Pi での録音（コマンドライン）

1. **サウンドカード番号を確認**：

```bash
arecord -l
```

Example output:

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

3. **再生**:

```bash
aplay -D plughw:4,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストール（まだインストールしていない場合）**

Raspberry Pi でターミナルを開きます。以下のコマンドを実行して Pi-Apps をインストールします

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。メニューに新しいPi-Appsアイコンが表示されます。

2. **Pi-Apps経由でAudacityをインストール**

3. **オーディオ入力と出力を設定**

- ツールバーの「Audio Setup」をクリックします。
- ドロップダウンメニューから「Audio Settings」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settingsウィンドウで：
  - 正しいRecording Device（例：reSpeaker XVF3800）を選択します。
  - 適切なPlayback Device（例：reSpeaker XVF3800）を選択します。
  - Raspberry Piでの最適な互換性のため、HostがALSAに設定されていることを確認します。
- OKをクリックして設定を適用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **オーディオの録音と再生**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## reSpeaker XVF3800の制御方法

reSpeaker XVF3800には、ユーザーがデバイスの動作を設定し、パラメータデータを設定または読み取り、デバイスにパラメータデータを保存できる制御インターフェースが搭載されています。ユーザーはUSBまたはI2Cインターフェース経由でデバイスを制御できます。reSpeaker XVF3800の制御インターフェースに簡単に接続するため、サンプルホストアプリケーションxvf_host（Linux、macOS、Raspberry Pi OS用）またはxvf_host.exe（Windows用）が提供されています。

[こちら](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)からダウンロード

:::note
xvf_host経由での制御についてさらに詳しく知りたい場合は、この[記事](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)をお読みください。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windowsユーザー

- ReSpeaker XVF3800がUSB経由で接続されていることを確認
- `xvf_host.exe`を以下のようなフォルダに解凍：

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

期待される出力:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**LED制御**

| コマンド | 例 | 説明 |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=オフ, 1=ブリーズ, 2=レインボー, 3=ソリッド, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | 16進数カラーを設定（オレンジ） |
| `led_speed` | `xvf_host.exe led_speed 1` | エフェクト速度を設定 |
| `led_brightness` | `xvf_host.exe led_brightness 255` | 明度を設定 |
| `led_gammify` | `xvf_host.exe led_gammify 1` | ガンマ補正を有効化 |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | DoAベース/方向カラーを設定 |


🟠 例（ブリーズオレンジ）：

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

**入力の読み取り:**

```bash
xvf_host.exe GPI_READ_VALUES
```

出力例: `GPI_READ_VALUES 1 0 0`

この例では、戻り値 1 0 0 は、Pin X1D09 がハイレベル、Pin X1D13 がローレベル、Pin X1D34 がローレベルであることを意味します。

**出力の読み取り:**

```bash
xvf_host.exe GPO_READ_VALUES
```

出力例: `GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値 0 0 0 1 0 は、Pin X0D11 がローレベル、Pin X0D30 がローレベル、Pin X0D31 がハイレベル、Pin X0D33 がハイレベル、Pin X0D39 がローレベルであることを意味します。

**出力設定:**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # Turn ON mute LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # Turn OFF mute LED
```

**到達方向 (DoA)**

- DoA は誰かが話している方向を教えてくれます。
- ReSpeaker XVF3800 の **LED リング** はライトを使って方向を表示します。
- `xvf_host` ツールを使って DoA 値を読み取ることもできます。

DoA 値を確認するコマンド

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**: 最初の固定リスニング方向
- **Focused beam 2**: 2番目の固定リスニング方向
- **Free running beam**: 常にスキャニング方向
- **Auto selected beam**: 最適な音声のために選択された最終ビーム（DoA表示に使用）

**音声表示**

- Speech Energyは音声信号の強さを示します — 音声ボリュームメーターのようなものです。
- 誰かが話しているかどうか、どの程度大きく/近くにいるかを検出するために使用されます。
- ノイズ、エコー、距離がエネルギー値に影響を与える可能性があります。

Speech Energyをチェックするコマンド：

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Focused beam 1**: 第1ビームのエネルギー
- **Focused beam 2**: 第2ビームのエネルギー
- **Free running beam**: スキャニングビームのエネルギー
- **Auto selected beam**: 最終出力用に選択されたビームのエネルギー

**オーディオ出力チャンネル**

- XVF3800は**2つのオーディオチャンネル**を提供します：
  - **左チャンネル**: クリーンな後処理済みオーディオ
  - **右チャンネル**: ASRビームまたはエコー/リファレンスデータ

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
- **デフォルト設定では十分でない場合に使用してください。**

 一般的なパラメータ：

| パラメータ             | 意味                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | スピーカー入力ゲイン（エコー信号）             |
| **AUDIO_MGR_MIC_GAIN**   | マイク入力ゲイン（マイクの聞こえる音量） |
| **AUDIO_MGR_SYS_DELAY**  | マイクとスピーカー信号間の遅延         |
| **PP_AGCMAXGAIN**        | 最大自動ゲイン制御レベル              |
| **AEC_ASROUTGAIN**       | ASRビーム出力のゲイン                      |


より詳細なドキュメントと高度なコマンドについては、公式GitHubリポジトリをご覧ください：  
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### Raspberry Pi用

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

期待される結果:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**I2Cの使用:**

```bash
./xvf_host --use i2c VERSION
```

---

**LED制御（Windowsと同様、./ を前に付ける）**

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

**入力を読み取る:**

```bash
./xvf_host GPI_READ_VALUES
```

出力例: `GPI_READ_VALUES 1 0 0`

この例では、戻り値 1 0 0 は、ピン X1D09 がハイレベル、ピン X1D13 がローレベル、ピン X1D34 がローレベルであることを意味します。

**出力の読み取り:**

```bash
./xvf_host GPO_READ_VALUES
```

出力例: `GPO_READ_VALUES 0 1 1 0 0`

この例では、戻り値 0 0 0 1 0 は、Pin X0D11 がローレベル、Pin X0D30 がローレベル、Pin X0D31 がハイレベル、Pin X0D33 がハイレベル、Pin X0D39 がローレベルであることを意味します。

**出力設定:**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```

**到達方向 (DoA)**

- DoA は誰かが話している方向を教えてくれます。
- ReSpeaker XVF3800 の **LED リング** は、ライトを使って方向を表示します。
- `xvf_host` ツールを使用して DoA 値を読み取ることもできます。

DoA 値を確認するコマンド

```bash
./xvf_host AEC_AZIMUTH_VALUES
````

Example Output

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**: 最初の固定リスニング方向
- **Focused beam 2**: 2番目の固定リスニング方向
- **Free running beam**: 常にスキャンする方向
- **Auto selected beam**: 最適な音声のために選択された最終ビーム（DoA表示に使用）

**音声表示**

- Speech Energyは音声信号の強さを示します — 音声ボリュームメーターのようなものです。
- 誰かが話しているかどうか、どの程度大きく/近くにいるかを検出するために使用されます。
- ノイズ、エコー、距離がエネルギー値に影響を与える可能性があります。

Speech Energyを確認するコマンド：

```bash
./xvf_host AEC_SPENERGY_VALUES
```

出力例

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Focused beam 1**: 第1ビームのエネルギー
- **Focused beam 2**: 第2ビームのエネルギー
- **Free running beam**: スキャニングビームのエネルギー
- **Auto selected beam**: 最終出力用に選択されたビームのエネルギー

**オーディオ出力チャンネル**

- XVF3800は**2つのオーディオチャンネル**を提供します：

  - **左チャンネル**: クリーンな後処理済みオーディオ
  - **右チャンネル**: ASRビームまたはエコー/リファレンスデータ

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
- **デフォルト設定では十分でない場合に使用してください。**

一般的なパラメータ：

| パラメータ                  | 意味                                        |
| -------------------------- | ---------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | スピーカー入力ゲイン（エコー信号）               |
| **AUDIO_MGR_MIC_GAIN**  | マイク入力ゲイン（マイクが聞き取る音量） |
| **AUDIO_MGR_SYS_DELAY** | マイクとスピーカー信号間の遅延          |
| **PP_AGCMAXGAIN**         | 最大自動ゲイン制御レベル               |
| **AEC_ASROUTGAIN**        | ASRビーム出力のゲイン                       |

より詳細なドキュメントと高度なコマンドについては、公式GitHubリポジトリをご覧ください：
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## ReSpeaker XVF3800のPythonサンプル

USBまたはI2C経由でデバイスを制御するためのPythonサンプルを用意しています。

:::note
Pythonスクリプトでxvf_hostを使用した制御についてさらに詳しく知りたい場合は、この[記事](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)をお読みください。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windows向け

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

Pythonがインストールされており、ReSpeaker XVF3800がUSB経由で接続されていることを確認してください。

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### Raspberry Pi用

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

`xvf_host` が実行可能であり、ボードが USB または I2C 経由で接続されていることを確認してください。

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

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
