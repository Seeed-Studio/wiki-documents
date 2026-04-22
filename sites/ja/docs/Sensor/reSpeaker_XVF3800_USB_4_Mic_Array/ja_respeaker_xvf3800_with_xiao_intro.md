---
description: ReSpeaker XVF3800 USB 4-Mic Array は、AEC、ビームフォーミング、ノイズ抑制、360° 音声キャプチャを備えたプロフェッショナルな円形マイクアレイです。XIAO ESP32S3 と組み合わせることで、スマートデバイス、ロボット工学、IoT アプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性を体験してください。
title: reSpeaker XVF3800 USB Mic Array と XIAO ESP32S3 の入門ガイド
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_getting_started
sku: 114993700
last_update:
  date: 8/20/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 Microphone Array with XIAO ESP32S3

## 概要

**ReSpeaker XVF3800 USB 4-Mic Array** は、XMOS XVF3800 をベースにしたプロフェッショナルな円形 4 マイクアレイです。AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、そして 360° 音声キャプチャ（最大 5m）を備えています。また、デュアル動作モードをサポートしており、高度な音声アプリケーションに最適です。Xiao ESP32S3 と組み合わせることで、ReSpeaker XVF3800 USB の制御はさらに強力になり、無限の可能性が広がります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **チップのアップグレード** :XVF3000 から XVF3800 へ

- **4 マイクアレイ** :円形配置の 4 つの高性能マイクにより、最大 5 メートルの 360° 遠距離音声キャプチャが可能

- **高度なオーディオ処理** :XVF3800 による AEC、マルチビームフォーミング、残響除去、DoA 検出、動的ノイズ抑制、60dB の AGC レンジ

- **一意のデバイスシリアル番号** :内蔵 SN により、マルチデバイス展開や高度なデバイス管理が可能

- **デュアル動作モード** :PC に即座に接続できる USB プラグアンドプレイモードと、組み込みシステムと統合するための INT-Device（I2S）モードをサポートし、ファームウェアを切り替えることで USB または I2C コマンドから設定可能

- **オープンソース互換** :USB ホスト（Windows、macOS、Raspberry Pi OS）および I2S ホスト（XIAO シリーズ、ESP32、Arduino）で動作

- **視覚的フィードバック** :プログラム可能な RGB LED とステータスインジケータにより、デバイス状態や音声アクティビティを表示

- **同等以上の音質** :従来モデルと比較して同等またはそれ以上の音質

## 入門ガイド（I2S と USB ファームウェア）

デフォルトでは、reSpeaker XVF3800 USB 4 Microphone Array with XIAO ESP32S3 は **I2S ファームウェア** を使用します。I2S モードでは **USB デバイス** としては検出されません。

関連するファームウェアをインストールすることで、I2S モードと USB モードを切り替えることができます。セーフモードを使用してデバイスを USB デバイスとして接続し、ファームウェアを更新したりモードを切り替えたりするためにファームウェアを書き込みます。

### I2S ファームウェアを書き込む

reSpeaker XVF3800 を XIAO ESP32S3 と一緒に使用するには、reSpeaker XVF3800 のファームウェアが I2S バージョンであり、最新バージョンに更新されていることを確認してください。
この [セクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェアを更新する) を参照してください。

:::note
XIAO ESP32S3 と連携させるには、I2S ファームウェアを書き込む必要があります。ただし、I2S ファームウェアは USB DFU をサポートしていないため（デバイスは USB デバイスとして検出されません）、USB DFU と I2C DFU の両方をサポートするセーフモードに切り替えてください。詳しくは、この [セクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#セーフモード) を参照してください。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主なコンポーネント

| **コンポーネント / 機能**      | **説明**                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ** | **XMOS XVF3800**。AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当します。               |
| **マイクアレイ**              | 円形配置の **4 つの PDM MEMS マイク** により、**360° 遠距離音声キャプチャ（5m）** をサポートします。 |
| **オーディオコーデック**       | **TLV320AIC3104**。オーディオの変換と出力を担当します。                                             |
| **RGB LED**                   | 視覚的フィードバック（例：ステータス、音声アクティビティ）用の **12 個の WS2812** 個別制御 RGB LED。 |
| **ミュートボタン**            | 押すとマイク入力を **ミュート/ミュート解除** します。                                                |
| **ミュートインジケータ LED**  | 音声がミュートされていることを示すために点灯します（通常は赤）。                                    |
| **リセットボタン**            | ボード/システムのハードウェアリセット。                                                              |
| **USB Type-C ポート**         | **電源とデータ** の両方に使用されます（USB Audio Class 2.0 準拠）。                                 |
| **3.5mm AUX ヘッドホンジャック** | ヘッドホンまたはアクティブスピーカー用のオーディオ出力。                                            |
| **スピーカーコネクタ**        | **JST スピーカーインターフェース**。**5W アンプ内蔵スピーカー** をサポートします。                  |
| **デバッグパッド**            | **XTAG4** などのプログラマ用デバッグアクセス。                                                       |
| **I2C & I2S ヘッダ**          | 外部デバイスとの **I2C および I2S 通信** 用にヘッダを引き出しています。                              |
| **未使用 IO パッド（XIAO）**  | XIAO モジュールに接続された追加の I/O はんだパッド。                                                 |
| **I2S & I2C 通信**            | これらのプロトコルを使用して Raspberry Pi、PC などの外部ホストへの接続をサポートします。            |
| **USB & INT-Device モード**   | デュアルモード動作：プラグアンドプレイ USB または I2S を介した内部 INT デバイスモード。             |
| **一意のシリアル番号**        | 識別およびマルチデバイス管理のための内蔵 **デバイス SN**。                                           |
| **オープンソース互換性**      | **Arduino、Raspberry Pi、PC/Mac** で動作し、**XIAO シリーズ** と互換性があります。                  |
| **高度なオーディオ機能**      | AEC、ビームフォーミング、残響除去、**DoA 検出**、DNN ベースのノイズ抑制、60dB AGC。                 |
| **視覚的フィードバック**      | **RGB LED パターン** と **ステータスインジケータ** によりデバイス状態とオーディオアクティビティを表示します。 |
| **音質**                      | **従来の XVF3000 ベース設計** と同等またはそれ以上。                                                |

### XIAO ESP32S3 サポート

- 複数の出力オプションを備えたステレオ I2S 入出力と、XVF3800 パラメータの設定および管理用の I2C インターフェース。
- IO ピン経由の XIAO リセット
- インターフェースおよびはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### オンボード WIFI アンテナ

XIAO ESP32S3 を使用する場合、外部アンテナは不要です。アンテナスロットを接続するだけで、内蔵 PCB アンテナを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800 は、外部制御用に 3 本の入力ピン（GPI）と 5 本の出力ピン（GPO）を公開しています。これらを使用してボタン状態を読み取ったり、ミュート LED、アンプ、LED などのハードウェアを制御したりできます。

| **ピン名** | **方向**     | **機能**                                           |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | ミュートボタンの状態（リリース時 High）             |
| X1D13        | Input (RO)    | 浮動                                               |
| X1D34        | Input (RO)    | 浮動                                               |
| X0D11        | Output (RW)   | 浮動                                               |
| X0D30        | Output (RW)   | ミュート LED + マイクミュート制御（High = ミュート） |
| X0D31        | Output (RW)   | アンプ有効（Low = 有効）                            |
| X0D33        | Output (RW)   | WS2812 LED 電源制御（High = オン）                  |
| X0D39        | Output (RW)   | 浮動                                               |

## ソフトウェアの準備

### Arduino IDE のインストール

お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

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

Boards Manager を使用してインストールを開始するには、次の手順に従ってください。

- Arduino IDE の最新版（1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトにあります。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- 上記のリリースリンクのいずれかを「Additional Board Manager URLs」フィールドに入力します。複数の URL をカンマ区切りで追加できます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

### 補助ライブラリ 

:::note
提供されているサンプルを実行するには、[Arduino Audio Tools ライブラリ](https://github.com/pschatzmann/arduino-audio-tools) をインストールしてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
