---
description: reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus は、コンパクトな 44 mm 円形 4 マイクアレイに、はんだ付け済みの ESP32-S3 モジュールを組み合わせ、XMOS XVF3800 音声パイプラインに Wi-Fi/Bluetooth、I2S オーディオ、I2C 制御を追加します。
title: reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 入門ガイド
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - ESP32S3
  - xvf3800
  - i2s microphone array
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png
slug: /respeaker_44mm_xiao_getting_started
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/
---
# reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 入門ガイド

{/* TODO(image): バリアントごとに製品レンダーを追加する — wiki_44mm_images/README.txt を参照 */}

## 概要

reSpeaker XVF3800 USB 44mm with XIAO ESP32-S3 Plus は、XMOS XVF3800 をベースにしたプロフェッショナルな円形 4 マイクアレイです。AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、および最大 5 m の 360° 音声収音を備え、USB と I2S の両方の動作をサポートします。アレイと XIAO ESP32-S3 Plus を組み合わせることで、Wi-Fi と Bluetooth に加えてローカルホストプロセッサが追加され、PC なしで音声パイプラインを制御およびストリーミングできます。

このボードは標準の 44 mm アレイと同じ **44 mm マイクピッチ** を維持しているため、同じエンクロージャに収まり、XIAO モジュールは背面に直接はんだ付けされ、XVF3800 とは I2S および I2C で接続されています。

{/* TODO: href="#" の値を、公開後に Seeed Studio 製品ページの URL に置き換える。 */}

<div class="table-center">
<table>
  <tr>
    <td align="center" width="320" valign="top">
      <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32S3 Plus" style={{maxWidth: 300, maxHeight: 300}} />
      </div>
    </td>
    <td align="center" width="320" valign="top">
      {/* TODO(image): ケース + XIAO のレンダーが利用可能になったら差し替える */}
      <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_case.png" alt="reSpeaker XVF3800 44mm with case and XIAO ESP32S3 Plus" style={{maxWidth: 300, maxHeight: 300}} />
      </div>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <p><strong>reSpeaker XVF3800 4-Mic Array 44mm with XIAO ESP32-S3 Plus</strong><br />
      <code>SKU 100066841</code><br />
      はんだ付け済み XIAO ESP32-S3 Plus 搭載の PCBA、I2S ファームウェア</p>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="#" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td align="center" valign="top">
      <p><strong>reSpeaker XVF3800 4-Mic Array 44mm with Case &amp; XIAO ESP32-S3 Plus</strong><br />
      <code>SKU 100065276</code><br />
      PCBA + エンクロージャ + はんだ付け済み XIAO ESP32-S3 Plus</p>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="#" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## 特長

- **コンパクトな 44 mm デザイン**：マイクピッチを 66 mm から 44 mm に縮小し、省スペース製品への組み込みが容易な小型ボードを実現。

- **XIAO ESP32-S3 Plus をオンボード搭載**：はんだ付け済みモジュールにより Wi-Fi と Bluetooth が追加され、I2S オーディオと I2C 制御が XVF3800 に直接配線されています。

- **高度なオーディオ処理**：XMOS XVF3800 による AEC、AGC（60 dB レンジ）、マルチチャネルビームフォーミング、DoA、VAD、動的ノイズ抑制、残響除去を搭載し、すべて調整可能。

- **高音質オーディオ**：既存の 66 mm ピッチ reSpeaker XVF3800 Circular 4-Mic Array と同等の音質。

- **2 つの動作モード**：プラグアンドプレイ用の USB Audio Class 2.0、またはファームウェアで選択可能な XIAO やその他の組み込みホスト向け I2S/INT-Device モード。

- **柔軟な接続性とアップデート**：USB および I2C による設定と DFU ファームウェア更新。

- **一意のデバイス識別**：マルチデバイス管理、識別、データトラッキングのために UUID の読み書きが可能。

- **プログラマブルな RGB フィードバック**：24 個の WS2812 LED がデバイスステータス、起動アニメーション、DoA 方向を表示し、XIAO にルーティングすることも可能。

- **3 つのカスタマイズ可能なボタン**：デフォルトでは音量アップ、音量ダウン、ミュートで、XVF3800 と XIAO パッドの間で切り替え可能。

- **幅広いプラットフォーム互換性**：Windows、macOS、Raspberry Pi OS などの USB ホストに加え、XIAO シリーズ、ESP32、Arduino との I2S 連携に対応。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

## 入門ガイド（I2S ファームウェアと USB ファームウェア）

デフォルトでは、reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus は **I2S ファームウェア** が書き込まれた状態で出荷されます。I2S モードでは、このボードは USB デバイスとしては **認識されません**。

関連するファームウェアを書き込むことで、I2S モードと USB モードを切り替えることができます。**Safe Mode** を使用してボードを USB デバイスとして起動し、ファームウェアの書き込み、更新、モード切り替えを行います。

:::note
最適な音声収音とオーディオアルゴリズムの正しい動作を確保するため、デバイス背面のマイクポート（マイクインレット / サウンドホール）を音源の方向に向けてください。マイクポートは Seeed Studio ロゴが印刷されている側にあります。

{/* TODO(image): mic_inlet_orientation.jpg — マイクポート / Seeed ロゴ側 */}
:::

### I2S ファームウェアを書き込む

このアレイを XIAO ESP32-S3 Plus と一緒に使用するには、XVF3800 が `I2S` ファームウェアで動作しており、最新バージョンに更新されていることを確認してください。イントロダクションページの [Update Firmware](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#ファームウェアを更新する) セクションを参照してください。

:::note
I2S ファームウェアは、このモードではボードが USB デバイスとして列挙されないため、USB DFU をサポートしません。代わりに [Safe Mode](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#セーフモード) に入ってください。工場出荷時の Safe Mode ファームウェアは USB DFU と I2C DFU の両方をサポートしているため、常に復旧および再書き込みが可能です。
:::

## ハードウェア概要

{/* TODO(image): xiao_soldered.jpg — XIAO ESP32-S3 Plus がはんだ付けされたボード */}

XIAO モジュールはボード背面の USB-C コネクタと XMOS I/O パッドの隣に配置されています。残りの I/O はすべてラベル付きパッドに引き出されているため、追加のキャリアボードなしで周辺機器を駆動できます。

### 主なコンポーネント

| コンポーネント / 機能 | 説明 |
|--------------------|-------------|
| **メインオーディオプロセッサ** | XMOS XVF3800。AEC、ビームフォーミング、ノイズ抑制、DoA 検出を処理 |
| **マイクアレイ** | 44 mm ピッチの円形レイアウトに配置された 4 個の PDM MEMS マイク、360° 遠距離収音 |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換および DAC 出力 |
| **アンプ** | LM48511 クラス D オーディオアンプ |
| **RGB LED** | 個別制御可能な RGB LED（WS2812）× 24 |
| **カスタマイズ可能なボタン** | 物理ボタン 3 個。デフォルトは音量アップ / 音量ダウン / ミュートで、XIAO にルーティング可能 |
| **ミュートインジケータ LED** | マイクがミュートされている間点灯する赤色 LED |
| **USB Type-C ポート** | 5 V 電源、UAC 2.0 オーディオ、制御、および DFU |
| **スピーカーコネクタ** | 5 W 4 Ω スピーカー用の垂直 JST コネクタと 3.5 mm AUX ジャック |
| **XIAO ESP32-S3 Plus** | I2S、I2C、RST、ボタン、LED ルーティングを備えたはんだ付け済みモジュール |
| **オンボードアンテナ** | Wi-Fi/Bluetooth 用 PCB アンテナ。外部フィーダ用 IPEX コネクタ付き |

電源、デバッグ、拡張パッドを含むピンレベルの完全な一覧については、イントロダクションページの [Main Components](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#メインコンポーネント) を参照してください。

### XIAO ESP32-S3 Plus サポート

XIAO ESP32-S3 Plus は XVF3800 およびオンボードのボタンと LED に接続されています。

- **ステレオ I2S 入出力**：デュアルバス（再生および録音）構成で、BCLK、MCLK、LRCLK を共有し、複数の出力オプションに対応。
- **I2C インターフェース**：XIAO から XVF3800 のパラメータを設定および管理。
- **リセットライン**：XIAO は専用 IO ピンを介して XVF3800 にハードウェアリセットをかけることが可能。
- **インターフェースおよびはんだパッド**：残りの XIAO I/O はユーザー拡張用にラベル付きパッドへ引き出し。
- **柔軟なボタンおよび LED ルーティング**：スイッチにより、3 つのボタンと LED チェーンを XVF3800 または XIAO のどちらかに接続可能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_esp32s3_plus_schematic.png" alt="XIAO ESP32-S3 Plus schematic on the 44mm array" width={900} height="auto" /></p>

この回路図では、U24 が XIAO ESP32-S3 Plus のフットプリントを示しています。D4/D5 は I2C を、D6–D10 は I2S バスと MCLK を、D11 はボタン/LED ルーティングの選択を、D12 は I2C 割り込みを担い、D15–D19 は LED チェーン、マイク有効/ミュート、および音量ボタンを駆動します。

| XIAO ピン | 信号 | 機能 |
|----------|--------|----------|
| D0 | `XIAO_D0` | 空き GPIO |
| D1 | `XIAO_D1` | 空き GPIO |
| D2 | `XIAO_D2` | 空き GPIO |
| D3 | `XIAO_D3` | 空き GPIO |
| D4 | `I2C_SDA` | XVF3800 への I2C データ |
| D5 | `I2C_SCL` | XVF3800 への I2C クロック |
| D6 | `I2S_DATA1` | I2S 録音データ（RX） |
| D7 | `I2S_DATA0` | I2S 再生データ（TX） |
| D8 | `I2S_LRCK` | I2S LR クロック |
| D9 | `I2S_BCLK` | I2S ビットクロック |
| D10 | `MCLK` | I2S マスタークロック |
| D11 | `XIAO_D11_SWITCH` | ボタン / LED ルーティングスイッチ制御 |
| D12 | `I2C_INT` | I2C 割り込み |
| D13 | `XIAO_D13` | 空き GPIO |
| D14 | `XIAO_D14` | 空き GPIO |
| D15 | `WS2812_DIN_XIAO` | WS2812 LED データ（XIAO にルーティングされている場合） |
| D16 | `MIC_OEN_XIAO` | マイク有効 |
| D17 | `MIC_Mute_XIAO` | マイクミュート制御 |
| D18 | `Audio_Down_XIAO` | 音量ダウンボタン |
| D19 | `Audio_Up_XIAO` | 音量アップボタン |

### ピンアウト

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO expansion pads on the 44mm array" width={600} height="auto" /></p>

パッド上のシルク印刷ラベルは、以下の表と一致しています。XVF3800 と共有されている信号には印が付いており、それ以外は自由に使用できる XIAO の GPIO です。



XIAO ピン番号付きで引き出されているパッドは、次の ESP32-S3 GPIO に対応します。

| XIAO ESP32-S3 Plus ピン | ESP32-S3 GPIO |
|------------------------|---------------|
| D0 | GPIO1 |
| D2 | GPIO2 |
| D3 | GPIO4 |
| D13 | GPIO40 |
| D14 | GPIO41 |

XIAO の完全なピン配置およびツールチェーンの詳細については、[XIAO ESP32S3 Getting Started](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) ページを参照してください。

### オンボード Wi-Fi アンテナ

XIAO ESP32-S3 Plus を使用する場合、外部アンテナは不要です。アンテナスロットを接続するだけで、内蔵の PCB アンテナを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/on_board_antenna.jpg" alt="オンボードアンテナスロット" width={400} height="auto" /></p>

アンテナスロットの横にある IPEX コネクタは、別の経路で配線したい場合に、適切な RF ケーブルを使用して XIAO モジュールからオンボードアンテナへ信号を供給できます。

## ソフトウェアの準備

### Arduino IDE のインストール

お使いのオペレーティングシステム用の安定版 Arduino IDE をダウンロードしてインストールします。

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Arduino IDE をダウンロード</strong>
  </a>
</div>

<br />

#### Arduino-ESP32 のインストール

Boards Manager を通して ESP32 ボードサポートをインストールするには：

- Arduino IDE の最新版（バージョン 1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトにあります。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- 下記のリリースリンクを **Additional Board Manager URLs** フィールドに入力します。複数の URL をカンマ区切りで追加できます。

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_preferences.png" alt="ボードマネージャ URL を設定した Arduino IDE の環境設定" width={900} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_boards_manager.png" alt="ESP32 をインストールしている Arduino IDE の Boards Manager" width={900} height="auto" /></p>

- Arduino IDE を再起動します。

### 補助ライブラリ

:::note
提供されているサンプルを実行するために、[Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) をインストールしてください。
:::

## リソース

- [reSpeaker XVF3800 44mm の紹介](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/)
- [ファームウェアと Python 制御（GitHub）](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools)
- [XMOS XVF3800 ドキュメント](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
