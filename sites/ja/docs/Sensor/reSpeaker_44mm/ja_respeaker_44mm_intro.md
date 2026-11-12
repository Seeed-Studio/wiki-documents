---
description: reSpeaker XVF3800 4-Mic Array 44mm は、XMOS XVF3800 を搭載したコンパクトな円形ボイスモジュールで、44 mm のマイク間ピッチ、360° の遠距離集音、AEC/AGC/DoA/ビームフォーミング、24 個の RGB LED、3 つのボタン、USB または I2S 動作に対応します。
title: reSpeaker XVF3800 44mm 4-Mic Array 入門ガイド
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - xvf3800
  - 4 mic array
  - xmos voice
  - usb microphone array
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_introduction
sku: 100040880,100020767,100066841,100065276,100052499
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/
---
# reSpeaker XVF3800 44mm 4-Mic Array 入門ガイド

{/* TODO: Banner}

reSpeaker XVF3800 4-Mic Array 44mm は、XMOS XVF3800 オーディオプロセッサを中心に構成されたコンパクトな円形の音声処理モジュールで、音声認識、音声制御、スマートアシスタント、ロボティクス向けに設計されています。4 つの PDM MEMS マイクロフォンがリング状に配置され、**44 mm ピッチ**を実現しており、66 mm ピッチの reSpeaker XVF3800 Circular 4-Mic Array よりも明らかに小さい基板サイズで 360° の遠距離集音を実現しつつ、同じ XMOS 処理プラットフォームと同等のオーディオ品質を維持しています。

このモジュールは、Acoustic Echo Cancellation（AEC）、60 dB のレンジを持つ Automatic Gain Control（AGC）、マルチチャネルビームフォーミング、到来方向（DoA）検出、Voice Activity Detection（VAD）、動的ノイズ抑圧、残響除去といった XVF3800 の音声パイプライン全体を実行し、これらはすべてユーザー調整可能なパラメータを備えています。24 個の WS2812 RGB LED のリング、3 つの物理ボタン（音量アップ、音量ダウン、ミュート）、ハードウェアミュートインジケータにより、箱から出してすぐに使用できます。また、USB Audio Class 2.0 と I2S モードに対応しており、プラグアンドプレイ用途と組み込み用途の両方をカバーします。オプションの XIAO ESP32-S3 Plus を基板上に直接はんだ付けでき、オプションのスピーカー拡張ボードを追加すると、5 W スピーカーと 1200 mAh バッテリーを利用できます。

## 製品ラインアップ

{/* TODO: replace the five href="#" values with the Seeed Studio product page URLs once they are published. */}

<table align="center">
  <tr>
    <th>Variant</th>
    <th>SKU</th>
    <th>Contents</th>
    <th>Order</th>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm</strong></td>
    <td><code>100040880</code></td>
    <td>単体 PCBA、USB ファームウェア書き込み済み</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case</strong></td>
    <td><code>100020767</code></td>
    <td>PCBA + エンクロージャ</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With XIAO ESP32S3 Plus</strong></td>
    <td><code>100066841</code></td>
    <td>PCBA + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case and XIAO ESP32S3 Plus</strong></td>
    <td><code>100065276</code></td>
    <td>PCBA + エンクロージャ + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker Sound Base</strong></td>
    <td><code>100052499</code></td>
    <td>5 W 4 Ω スピーカー、1200 mAh バッテリー、USB-C 充電、電源スイッチ</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## 特長

- **コンパクトな 44 mm デザイン**：マイクのピッチを 66 mm から 44 mm に縮小し、基板の直径を小さくすることで、スペースに制約のある製品にも収まるようにしています。

- **XMOS XVF3800 オーディオ処理**：AEC、AGC（60 dB レンジ）、マルチチャネルビームフォーミング、DoA、VAD、動的ノイズ抑圧、残響除去に対応し、パラメータを調整可能です。

- **高音質**：既存の 66 mm ピッチ reSpeaker XVF3800 Circular 4-Mic Array と同等の性能を目指して設計されています。

- **2 つの動作モード**：PC や SBC とプラグアンドプレイで使える USB Audio Class 2.0、または組み込みホスト向けの I2S/INT-Device モードに対応し、ファームウェアで選択します。

- **柔軟な制御とアップデート**：USB または I2C 経由で設定可能で、書き込まれているファームウェアに応じて USB DFU および I2C DFU をサポートします。

- **一意のデバイス識別**：複数デバイスの管理、識別、データトラッキングのために UUID/SN を読み書きできます。

- **プログラム可能な RGB フィードバック**：24 個の WS2812 LED がデバイスステータス、起動アニメーション、DoA 方向を表示し、ミュート状態は専用の赤色 LED で表示されます。

- **3 つのカスタマイズ可能なボタン**：デフォルトでは XMOS プロセッサに接続され、音量アップ、音量ダウン、ミュートとして動作しますが、スイッチで XIAO 側に切り替えることもできます。

- **スピーカー対応**：オンボード Class D アンプ、5 W 4 Ω スピーカー用の垂直 JST スピーカーコネクタ、3.5 mm AUX ジャック、直結スピーカー用のはんだパッドを備えています。

- **幅広いプラットフォーム互換性**：Windows、macOS、Raspberry Pi OS などの USB ホストに対応し、さらに XIAO、ESP32、Arduino クラスのボードとの I2S 連携も可能です。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

基板の表面には 4 つのマイクロフォンと最外周の 24 個の RGB LED が実装されており、エンクロージャに組み込んだ後も音響ポートとライトリングが見えるようになっています。裏面には USB-C コネクタ、3.5 mm ジャック、JST スピーカーコネクタ、リセットボタン、XIAO ESP32-S3 Plus フットプリント、およびすべてのブレークアウトパッドが配置されています。

### 主なコンポーネント

| コンポーネント / 機能 | 説明 |
|--------------------|-------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）で、AEC、ビームフォーミング、ノイズ抑圧、DoA 検出など音声パイプライン全体を処理 |
| **マイクアレイ** | 44 mm ピッチの円形レイアウトに配置された 4 個の PDM MEMS マイクロフォンで、360° の遠距離集音に対応 |
| **オーディオコーデック** | TLV320AIC3104 によるオーディオ変換および DAC 出力 |
| **アンプ** | LM48511 Class D オーディオアンプ |
| **RGB LED** | ステータスおよびオーディオアクティビティ表示用の 24 個の WS2812 個別制御 RGB LED |
| **カスタマイズ可能なボタン** | 3 つの物理ボタンで、XVF3800 に接続されている場合はデフォルトで音量アップ、音量ダウン、ミュートとして動作 |
| **ボタン接続切り替え** | 3 つのボタンを XVF3800 と XIAO モジュールパッドのどちらに接続するかを切り替えるスイッチ |
| **ミュートインジケータ LED** | マイクがミュートされている間点灯する赤色 LED。電源投入時はオーディオはミュート解除状態です。 |
| **セーフモード起動** | 電源投入時にミュートボタンを押し続けるとリカバリーファームウェアで起動 |
| **オンボードアンテナ** | 対応する XIAO 無線モジュールを実装した場合にワイヤレス通信をサポート |
| **USB Type-C ポート** | 5 V 電源入力および UAC オーディオ、制御、DFU 用の USB データ |
| **USB Power Delivery（USB PD）** | 基板の動作と 5 W スピーカー駆動のための USB-C 電源入力構成 |
| **3.5 mm AUX ジャック** | オンボード DAC からのサイドマウント型ヘッドホン / ライン出力 |
| **スピーカーコネクタ** | 5 W 以上の 4 Ω スピーカー用の垂直 JST コネクタで、直結スピーカー用のはんだパッドも用意 |
| **外部電源パッド** | システム全体向けの代替電源入力 |
| **デバッグインターフェース** | XMOS のプログラミングとデバッグ用の XTAG4 互換パッド（コネクタは未実装） |
| **XVF3800 I2C インターフェース** | INT-Device モードでの制御および設定用に XVF3800 の I2C ピンを引き出し |
| **XVF3800 I2S インターフェース** | INT-Device モードで外部ホスト向けオーディオ用に XVF3800 の I2S ピンを引き出し |
| **電源および GND ヘッダ** | 外部連携用の 5 V および GND ブレークアウト |
| **XVF3800 GPIO パッド** | 外部制御用の追加 XVF3800 I/O |
| **XIAO ESP32-S3 Plus フットプリント** | I2S、I2C、リセット、ボタン、LED ルーティングに対応したはんだ付け用モジュール位置 |
| **IPEX アンテナコネクタ** | 適切な RF ケーブルでオンボードアンテナを XIAO のアンテナインターフェースに接続 |
| **取付穴** | エンクロージャに合わせた固定用の穴 |

### XIAO ESP32-S3 Plus サポート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO ESP32-S3 Plus expansion pads" width={700} height="auto" /></p>

XIAO ESP32-S3 Plus は基板の裏面に直接はんだ付けできます。実装すると、XVF3800 およびオンボードのボタンや LED に接続されます。

| 機能 | 説明 |
|---------|-------------|
| **XIAO ESP32-S3 Plus サポート** | 統合音声処理とアプリケーション開発のために、XIAO ESP32-S3 Plus モジュールをアレイ上に直接はんだ付け可能 |
| **XVF3800 通信** | 録音および再生用の I2S（BCLK、MCLK、LRCLK を共有）と、XVF3800 の制御および設定用の I2C |
| **XVF3800 リセット制御** | XIAO から XVF3800 をハードウェアリセットできる RST 関連 GPIO |
| **柔軟なボタンおよび LED ルーティング** | オンボードのボタンと LED を XVF3800 と XIAO の GPIO パッドのどちらに接続するかを切り替え、カスタム制御やフィードバックを実現 |
| **拡張 GPIO アクセス** | XVF3800 の I/O エリアと揃えたラベル付きパッド上に、残りの XIAO I/O を引き出し、センサーや周辺機器、アプリケーション用ハードウェアを接続可能 |
| **外部アンテナ接続** | RF フィーダーケーブルを用いてオンボードアンテナを XIAO のアンテナインターフェースに接続するための IPEX コネクタ |

{/* TODO(image): xiao_soldered.jpg — XIAO ESP32-S3 Plus soldered on the board */}

### reSpeaker Sound Base（スピーカー拡張）

このスピーカー拡張により、マイクアレイをスタンドアロンのボイス端末に変えることができます。**5 W・4 Ω スピーカー**、**1200 mAh 充電式バッテリー**、充電および電源管理回路、USB-C 充電ポート、物理電源スイッチを組み合わせ、アレイ筐体の底面にクリップまたはスライドして取り付けられるモジュラーエンクロージャとして提供されます。

- エンクロージャは取り外し可能で、ユーザーがバッテリーとスピーカーを交換できます。
- 露出している XMOS I/O コネクタは、2 枚のボード間でスピーカー出力、5 V 電源、およびバッテリーレベル信号を伝送します。
- 充電用 LED リングは充電中にバッテリー残量を表示し、バッテリーが接続されていないときは消灯したままです。
- スイッチは出力のみを制御し、スイッチをオフにしても充電は継続されます。

{/* TODO(image): speaker_expansion.jpg — speaker expansion attached to the array */}

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xmos_io_pinout.jpg" alt="XMOS XVF3800 I/O header" width={600} height="auto" /></p>


XVF3800 の I/O エリアは、INT-Device 動作用およびスピーカー拡張用に必要なバスを引き出しています。お使いのリビジョンでの正確なパッド順序については、シルク印刷に従ってください。

| 信号 | 説明 |
|--------|-------------|
| **3V3** | 外部ロジック用 3.3 V 電源レール |
| **GND** | グラウンド |
| **MCLK** | I2S マスタークロック |
| **BCLK** | I2S ビットクロック |
| **LRCK** | I2S 左/右（ワード）クロック |
| **DATA0** | I2S データ（録音パス） |
| **DATA1** | I2S データ（再生パス） |
| **SDA / SCL** | XVF3800 用 I2C 制御バス |
| **CS_N / CLK / MISO** | 対応ペリフェラル用 SPI 信号 |
| **Speaker pins** | 外部スピーカー用スピーカー出力（オンボード JST コネクタと共有） |

XIAO フットプリントはさらに、残りのモジュール I/O（D0、D2、D3、D13、D14、3V3、GND）をラベル付きパッドとして引き出しているため、別途キャリアボードを用意しなくてもペリフェラルを配線できます。

{/* TODO(image): respeaker_44mm_pinout_schematic.png — labeled schematic to replace the close-up photos */}

### GPIO 概要

XVF3800 は、ボタン検出、音量、ミュート、アンプ有効化、LED 電源、およびペリフェラル通信のための設定可能な GPIO を公開しています。

| ピン名 | 機能 | 説明 |
|----------|----------|-------------|
| **X1D09** | ミュートボタン状態（GPI） | ミュートボタンの状態を読み取り、離されていると High になります |
| **X1D13** | 音量アップ | 音量アップボタンの信号を受け取ります |
| **X1D34** | 音量ダウン | 音量ダウンボタンの信号を受け取ります |
| **X0D11** | I2C 初期化 | I2C の初期化および関連制御に使用されます |
| **X0D30** | ミュート LED / マイクミュート制御 | ミュートインジケータ LED とマイクミュート機能を駆動します |
| **X0D31** | アンプ有効化 | オーディオアンプを有効/無効にします |
| **X0D33** | WS2812 LED 電源制御 | WS2812 RGB LED 回路への電源を制御します |
| **X0D39** | SPI MOSI | 対応ペリフェラル用 SPI マスター出力/スレーブ入力データ |

## はじめに

### ハードウェアの準備

- USB Type-C ケーブル
- ホストコンピュータ、または Raspberry Pi
- オプション：再生用 5 W 4 Ω スピーカー
- オプション：ワイヤレス / 組み込み動作用の XIAO ESP32-S3 Plus

### ソフトウェアの準備

- テスト用の録音および再生に **Audacity**
- ファームウェア更新用の **dfu-util**
- パラメータ調整用の `pyusb` を備えた **Python 3**

### 開封直後の使い方

:::note
最適な音声収音とオーディオアルゴリズムの正しい動作を確保するため、デバイス背面のマイクポート（マイク開口部 / サウンドホール）を音源の方向に向けてください。マイクポートは Seeed Studio ロゴが印刷されている側にあります。

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

#### DoA（到来方向）

LED リングは入力音声の方向に追従するため、ソフトウェアなしで検出された角度を確認できます。DoA の値は、独自アプリケーション向けに USB/I2C 経由でも読み取ることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/doa_demo.gif" alt="DoA LED ring following the voice" width={600} height="auto" /></p>

#### ミュートボタン

ミュートボタンは、一時的にマイクアレイからのキャプチャを無効にします。

- マイクはミュートされ、外部の音声はこれ以上キャプチャも処理もされません。
- ミュートが有効な間は赤色 LED が点灯します。
- ホストへはオーディオ入力が送信されません。
- ボタンをもう一度押すとアレイのミュートが解除されます。デバイスはミュート解除状態で起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/mute_demo.gif" alt="Mute button and red status LED" width={600} height="auto" /></p>

#### 音量アップ / ダウン

残り 2 つのボタンは、XVF3800 にルーティングされている場合、デフォルトで再生音量を調整します。これらはワンショット制御であり、押すたびに音量が 1 段階変化します。同じレベルは、Python 制御ツールまたは OS のミキサーからホスト側で設定することもできます。

#### リセットボタン

リセット（RST）ボタンは XVF3800 のハードウェアリセットを行います。これを押すとチップが再起動し、完全な電源再投入とまったく同じように、システムが最初から再初期化されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/reset_demo.gif" alt="Reset button behaviour" width={600} height="auto" /></p>

#### スピーカー接続

スピーカーは、オーディオ出力の好みに応じて、オンボード JST コネクタまたは 3.5 mm AUX ジャック経由で接続できます。オンボードの LM48511 アンプから駆動する場合は、4 Ω 5 W のスピーカーを JST コネクタに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/speaker_connection.jpg" alt="Speaker connected to the JST connector" width={600} height="auto" /></p>

#### セーフモード

**Safe Mode** は、USB DFU または I2C DFU 経由でファームウェアを書き込むためのリカバリモードです。以前に I2S ファームウェアを書き込んで USB ファームウェアに戻したい場合や、ボードが認識されなくなった場合に使用します。

| ファームウェア | USB DFU | I2C DFU |
|----------|---------|---------|
| **USB ファームウェア** | Yes | No |
| **I2S ファームウェア** | No | Yes |
| **Safe Mode ファームウェア**（Factory パーティション） | Yes | Yes |

**Safe Mode を使用するタイミング**

- ファームウェアが正しく動作していない（USB が検出されない、LED の動作がおかしいなど）。
- 現在のファームウェアが応答せず、再書き込みが必要な場合。
- 誤ったファームウェアを書き込んでしまい、ボードを復旧したい場合。

**Safe Mode に入る方法**

1. デバイスの電源を完全に切ります。
2. **Mute** ボタンを押し続けます。
3. 押し続けたまま、電源を再接続します。
4. 赤色 LED が点滅し始めます — デバイスは現在、Factory パーティションから Safe Mode ファームウェアを実行しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/safe_mode_demo.gif" alt="Red LED blinking in Safe Mode" width={600} height="auto" /></p>

## ファームウェアの更新

公式 GitHub リポジトリには 2 種類のファームウェアイメージが用意されています：

- Windows、Linux、macOS などのホストシステム向け **USB ファームウェア**
- XIAO ESP32-S3 Plus などのマイコンホスト向け **I2S ファームウェア**

:::note
GitHub からファームウェアファイルをダウンロードする際に **「名前を付けて保存」** を使用しないでください — バイナリが破損します。リポジトリをクローンするか、**Download ZIP** を使用して、含まれるすべてのファイルをまとめて取得してください。
:::

リポジトリ： [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)

### USB ファームウェア

USB ファームウェアは UAC 2.0 サウンドカードとして認識され、Windows、Linux、macOS ホスト向けに設計されています。

| ファームウェアイメージ | USB オーディオプロファイル |
|----------------|-------------------|
| `respeaker_44mm_usb_c48k2ch_v1.0.0.bin` | 48 kHz、2 チャンネル USB オーディオ |

ファームウェアディレクトリには USB Audio Class ディスクリプタのダンプは含まれていません。書き込み後、録音アプリケーションを設定する前に、ホストが報告するフォーマットを必ず確認してください — デバイスディスクリプタで確認せずに、サンプル幅や追加のサンプルレート/チャンネル構成を想定しないでください。

### I2S ファームウェア

I2S ファームウェアは、XIAO ESP32-S3 Plus などのマイコンホストにアレイを接続する場合に使用します。オーディオは I2S 経由で送信され、XVF3800 は I2C 経由で制御されます。

| ファームウェア | チャンネル数 | 備考 |
|----------|----------|-------|
| `respeaker_44mm_i2s_c48k2ch_v1.0.0.bin` | 2 | 処理済み 2 チャンネル出力：チャンネル 0 = Conference、チャンネル 1 = ASR |

XMOS ファームウェアを書き込むには、USB ケーブルでボードを PC に接続します。3.5 mm オーディオジャックの近くにある **XMOS USB-C ポート** を使用してください。

### DFU Util のインストール

`dfu-util` は、USB 経由で Device Firmware Upgrade を行うためのコマンドラインツールです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして展開し、例として `D:\dfu-util-0.11-binaries\win64\` に配置します

  [ダウンロードリンク](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` へのパスを追加します：

  `My Computer > Properties > Advanced > Environment Variables > Path`

- **Command Prompt**（`cmd`）を開き、インストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_version.png" alt="dfu-util version output" width={700} height="auto" /></p>

- reSpeaker XVF3800 44mm を接続し、デバイスが検出されていることを確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_list.png" alt="dfu-util list output" width={800} height="auto" /></p>

> 次のメッセージが表示された場合：
> `Cannot open DFU device 2886:0024 ... (LIBUSB_ERROR_NOT_SUPPORTED)`
> 以下のドライバインストールを続行してください。

- [Zadig](https://zadig.akeo.ie/) をインストールします
  - Zadig を開き → `Options > List All Devices`
  - `reSpeaker 3800 44 mm` または `reSpeaker XVF3800 4-Mic Array 44mm` を選択します
  - **WinUSB** ドライバをインストールします
  - デバイスの電源を入れ直します
  - `dfu-util -l` を再度実行して検出を確認します

</TabItem>

<TabItem value="macos" label="macOS">

- Homebrew を使って dfu-util をインストールします：

```bash
brew install dfu-util
```

- デバイスが検出されていることを確認します：

```bash
dfu-util -l
```

**想定される出力：**

```text
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>

<TabItem value="linux" label="Linux">

- dfu-util をインストールします：

```bash
sudo apt install dfu-util
```

- ボードを接続し、認識されていることを確認します：

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

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>
</Tabs>

### ファームウェアを書き込む

- 次のコマンドを実行し、`-D` で書き込みたい `.bin` ファイルを指定します：

```bash
dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- Linux では `sudo` を付けて実行します：

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

`-R` オプションは、書き込み後にボードを自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_flash.png" alt="dfu-util flashing output" width={800} height="auto" /></p>

新しいファームウェアバージョンが動作していることを確認するために、再度 `dfu-util -l` を実行します。

## 録音と再生

<Tabs>
<TabItem value="windows" label="Windows">

### Audacity のセットアップ（Windows）

1. **Audacity** を開きます。
2. **Audio Setup > Audio Settings** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_setup.png" alt="Audacity Audio Setup menu" width={800} height="auto" /></p>

3. 次のように設定します：
   - **Host**: `Windows WASAPI`
   - **Playback Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
   - **Project Sample Rate**: `48000 Hz`
   - **Default Sample Rate**: `48000 Hz`
   - **Default Sample Format**: `32-bit float`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_settings.jpg" alt="Audacity Audio Settings dialog" width={800} height="auto" /></p>

4. **OK** をクリックします — これで録音の準備ができました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_recording.jpg" alt="Audacity recording waveform" width={800} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity のセットアップ（macOS）

1. **Audacity** を開きます。
2. **Audio Setup** を開き、**Recording Device > reSpeaker XVF3800 4-Mic 44mm** を選択します。
3. **Audio Settings** を開き、次のように設定します：
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
   - **Project Sample Rate**: `48000 Hz`
   - **Default Sample Rate**: `48000 Hz`
   - **Default Sample Format**: `32-bit float`
4. **OK** をクリックして録音を開始します。

:::note
macOS では、**System Settings > Privacy & Security > Microphone** で Audacity にマイクの権限を付与する必要があります。
:::

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### コマンドラインから録音する

1. カード番号を確認します：

```bash
arecord -l
```

`reSpeaker XVF3800 4-Mic 44mm` という名前のエントリを探し、そのカード番号（例：`card 3`）をメモします。

2. 5 秒間の音声を録音します：

```bash
arecord -D plughw:3,0 -c 2 -r 48000 -f S32_LE -d 5 output.wav
```

`3` を実際のカード番号に置き換えてください。

3. 再生します：

```bash
aplay -D plughw:3,0 output.wav
```

4. 必要に応じて `alsamixer` で音量を調整します（トラブルシューティングを参照）。

### Audacity で録音する

1. 例えば Pi-Apps を使って Audacity をインストールします：

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

2. **Audio Setup > Audio Settings** を開き、次のように選択します：
   - **Host**: `ALSA`
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Playback Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
3. **OK** をクリックして録音を開始します。

</TabItem>
</Tabs>

## チューニングパラメータ

チューニングにより、内蔵オーディオアルゴリズムを設定し、XMOS チップと直接やり取りできます。パラメータ設定とデバイスとの対話のために、Python 制御インターフェースが提供されています。

[**Python Control Directory**](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm/tree/main/python_control)

提供されているスクリプトを使用して、次のことができます：

- 内蔵オーディオアルゴリズムのパラメータを設定する
- DoA（到来方向）データを取得する
- VAD（音声活動検出）データを取得する
- オンボード LED を制御する
- 音声処理パイプラインを制御する
- デバイス UUID を読み書きする
- 信号を USB 出力チャネルにルーティングする

**システム要件**

- Python 3.6 以降
- `pyusb` Python ライブラリ
- `libusb` システムライブラリ

### インストールと依存関係

```bash
pip install pyusb
```

Windows では、`libusb-package` の pip パッケージが libusb を提供する最も簡単な方法です。Linux では、パッケージマネージャーから libusb をインストールします。

### 使い方

**基本構文**

```bash
python xvf_host.py [options] command [--values value(s)...]
```

**コマンドオプション**

| Option | Description |
|--------|-------------|
| `-l`, `--list` | サポートされているすべてのコマンドを詳細情報付きで一覧表示します |
| `--vid` | USB ベンダー ID を設定します（デフォルト：`0x2886`） |
| `--pid` | USB プロダクト ID を設定します。省略した場合、デバイスは VID によって自動検出されます |
| `--values` | 書き込みコマンドに値を指定します（オプション）。10 進または 16 進（`0x7B`） |

### 使用例

**1. 利用可能なすべてのコマンドを一覧表示する**

```bash
python xvf_host.py --list
```

**2. ファームウェアバージョンを読み取る**

```bash
python xvf_host.py VERSION
```

```text
VERSION: [1, 0, 0]
```

報告されるタプルは、書き込んだファームウェアに対応しています。

**3. 到来方向（Direction of Arrival）を読み取る**

```bash
python xvf_host.py DOA_VALUE
```

```text
DOA_VALUE: [135]
```

角度は 0〜359 度で報告されます。

**4. LED の色を設定する**

```bash
python xvf_host.py LED_COLOR --values 0xFF0000
```

**5. LED の明るさを設定する**

```bash
python xvf_host.py LED_BRIGHTNESS --values 50
```

**6. マイクアレイのジオメトリを読み取る**

```bash
python xvf_host.py AEC_MIC_ARRAY_GEO
```

```text
AEC_MIC_ARRAY_GEO:
[0.033, -0.033, 0.000,
 0.033,  0.033, 0.000,
-0.033,  0.033, 0.000,
-0.033, -0.033, 0.000]
```

値は、ビームフォーマーで使用されるマイクの X/Y 座標（メートル単位）です。音響測定やキャリブレーションを行う前に、報告されたジオメトリがボードのマイクピッチおよび書き込んだファームウェアイメージと一致していることを確認してください。

### USB 出力チャネルの選択

USB ファームウェアは、`AUDIO_MGR_OP_L` と `AUDIO_MGR_OP_R` を通じてステレオ出力に信号をルーティングします。各コマンドは 2 つの値を取ります：`category`（信号グループ）と `source`（そのグループ内の信号）です。現在のルーティングを読み取るには `--values` を省略します。

```bash
python xvf_host.py AUDIO_MGR_OP_L
python xvf_host.py AUDIO_MGR_OP_L --values 6 3
python xvf_host.py AUDIO_MGR_OP_R --values 1 0
```

最後の 2 つのコマンドは、自動的に選択されたビームを左チャネルに、未処理のマイク 0 を右チャネルにルーティングします。未処理のマイクストリームは音声強調をバイパスし、通常は処理済みオーディオよりも音量が小さくなります。

ルーティングを保存して、再起動後も保持されるようにします：

```bash
python xvf_host.py SAVE_CONFIGURATION --values 1
```

## トラブルシューティング

### Linux でスピーカー再生が小さすぎる

XVF3800 サウンドカードには独自の ALSA ミキサーレベルがあります。再生音量が小さすぎる場合：

1. ミキサーを開きます：

   ```bash
   alsamixer
   ```

2. **F6** を押し、`reSpeaker XVF3800 4-Mic 44mm` カードを選択して **Enter** を押します。
3. 矢印キーで **PCM-1** を選択し、100% まで上げます。
4. **ESC** で終了し、設定を保存します：

   ```bash
   sudo alsactl store
   ```

5. それでも音が小さい場合は、PulseAudio Volume Control をインストールし、出力を 100% 以上に上げます：

   ```bash
   sudo apt install pavucontrol -y
   ```

### 書き込み後に Windows でボードがサウンドデバイスとして表示されない

**Device Manager** を開き、関連する reSpeaker エントリを見つけて、それぞれを右クリックし **Uninstall device** を選択します。その後、USB ケーブルを抜き差しすると、Windows が正しいサウンドカードドライバーを再インストールします。

### `dfu-util -l` が LIBUSB_ERROR_NOT_SUPPORTED を報告する

WinUSB ドライバーが DFU インターフェースにバインドされていません。[Zadig](https://zadig.akeo.ie/) をインストールし、`Options > List All Devices` を有効にして、`reSpeaker 3800 44 mm` を選択し、**WinUSB** をインストールしてからボードの電源を入れ直し、再度 `dfu-util -l` を実行します。

### ボードがまったく列挙されない

**Safe Mode** に入ります（電源投入中にミュートボタンを押し続け、赤色 LED が点滅するまで待つ）、その後 USB ファームウェアを書き直します。Safe Mode ファームウェアは USB DFU と I2C DFU の両方をサポートしているため、常に復旧可能です。

## リソース

- [reSpeaker XVF3800 44mm firmware and Python control (GitHub)](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [XMOS XVF3800 documentation](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

{/* TODO: 機構ファイルが公開されたら、ここに 2D DXF と 3D STEP のダウンロードを追加する */}

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
