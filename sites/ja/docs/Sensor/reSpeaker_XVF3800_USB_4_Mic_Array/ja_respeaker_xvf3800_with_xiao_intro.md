---
description: ReSpeaker XVF3800 USB 4-Mic Array は、AEC、ビームフォーミング、ノイズ抑制、360° ボイスキャプチャを備えたプロフェッショナルな円形マイクアレイです。XIAO ESP32S3 と組み合わせることで、スマートデバイス、ロボット、IoT アプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性を体験してください。
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
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 マイクロフォンアレイ with XIAO ESP32S3

## 概要

**ReSpeaker XVF3800 USB 4-Mic Array** は、XMOS XVF3800 をベースにしたプロフェッショナルな円形の 4 マイクロフォンアレイです。AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響抑圧、および 360° 音声キャプチャ（最大 5 メートル）を備えています。また、デュアル動作モードをサポートしており、高度な音声アプリケーションに最適です。Xiao ESP32S3 と組み合わせることで、ReSpeaker XVF3800 USB の制御はさらに強力になり、無限の可能性が広がります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特長

- **チップのアップグレード** ：XVF3000 から XVF3800 へ

- **4 マイクロフォンアレイ** ：4 つの高性能マイクを円形配置し、最大 5 メートルの 360° 遠距離音声キャプチャを実現

- **高度なオーディオ処理** ：XVF3800 により駆動され、AEC、マルチビームフォーミング、残響抑圧、DoA 検出、動的ノイズ抑制、60dB の AGC レンジをサポート

- **一意のデバイスシリアル番号** ：内蔵 SN により、複数デバイスの展開や高度なデバイス管理が可能

- **デュアル動作モード** ：USB プラグアンドプレイモードで PC と即座に接続可能、INT-Device（I2S）モードで組み込みシステムと統合可能 ― ファームウェアを切り替えることで USB または I2C コマンドから設定可能

- **オープンソース互換** ：USB ホスト（Windows、macOS、Raspberry Pi OS）および I2S ホスト（XIAO シリーズ、ESP32、Arduino）で動作

- **視覚的フィードバック** ：プログラム可能な RGB LED とステータスインジケータにより、デバイス状態や音声アクティビティを表示

- **同等またはそれ以上の音質** ：従来モデルと比較しても同等またはそれ以上の音質

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主なコンポーネント

| **コンポーネント / 機能**     | **説明**                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ** | **XMOS XVF3800**。AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当。                      |
| **マイクロフォンアレイ**       | 円形配置の **4 つの PDM MEMS マイクロフォン** で、**360° 遠距離音声キャプチャ（5m）** をサポート。     |
| **オーディオコーデック**       | **TLV320AIC3104**。オーディオの変換および出力を担当。                                                |
| **RGB LED**                   | 個別制御可能な **12 個の WS2812 RGB LED** により、ステータスや音声アクティビティなどを視覚的に表示。 |
| **ミュートボタン**             | 押すことでマイク入力を **ミュート/ミュート解除** します。                                            |
| **ミュートインジケータ LED**   | オーディオがミュートされていることを示すために点灯（通常は赤）。                                     |
| **リセットボタン**             | ボード/システムのハードウェアリセット。                                                              |
| **USB Type-C ポート**         | **電源およびデータ** 用（USB Audio Class 2.0 準拠）。                                                 |
| **3.5mm AUX ヘッドホンジャック** | ヘッドホンまたはアクティブスピーカー用のオーディオ出力。                                            |
| **スピーカーコネクタ**         | **JST スピーカーインターフェース**。**5W アンプ内蔵スピーカー** をサポート。                         |
| **デバッグパッド**             | **XTAG4** などのプログラマ向けデバッグアクセス。                                                     |
| **I2C & I2S ヘッダ**           | 外部デバイスとの **I2C および I2S 通信** 用のヘッダを実装。                                          |
| **未使用 IO パッド（XIAO）**   | XIAO モジュールに接続された追加の I/O はんだパッド。                                                 |
| **I2S & I2C 通信**             | これらのプロトコルを使用して Raspberry Pi、PC などの外部ホストと接続可能。                           |
| **USB & INT-Device モード**    | デュアルモード動作：プラグアンドプレイ USB モード、または I2S を介した内部 INT デバイスモード。      |
| **一意のシリアル番号**         | 識別および複数デバイス管理のための **デバイス SN** を内蔵。                                         |
| **オープンソース互換性**       | **Arduino、Raspberry Pi、PC/Mac** で動作し、**XIAO シリーズ** と互換。                               |
| **高度なオーディオ機能**       | AEC、ビームフォーミング、残響抑圧、**DoA 検出**、DNN ベースのノイズ抑制、60dB AGC をサポート。       |
| **視覚的フィードバック**       | **RGB LED パターン** と **ステータスインジケータ** により、デバイス状態とオーディオアクティビティを表示。 |
| **音質**                       | **従来の XVF3000 ベース設計** と同等またはそれ以上。                                                 |

### XIAO ESP32S3 サポート

- 複数の出力オプションを備えたステレオ I2S 入出力、および XVF3800 パラメータの設定と管理用 I2C インターフェース。
- IO ピン経由での XIAO リセット
- インターフェースおよびはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### オンボード WIFI アンテナ

XIAO ESP32S3 を使用する場合、外部アンテナは不要です。アンテナスロットを接続するだけで、内蔵の PCB アンテナを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800 には、外部制御用に 3 本の入力ピン（GPI）と 5 本の出力ピン（GPO）が用意されています。これらを使用して、ボタン状態を読み取ったり、ミュート LED、アンプ、LED などのハードウェアを制御できます。

| **ピン名** | **方向**     | **機能**                                             |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | ミュートボタン状態（リリース時 High）                |
| X1D13        | Input (RO)    | 未接続                                              |
| X1D34        | Input (RO)    | 未接続                                              |
| X0D11        | Output (RW)   | 未接続                                              |
| X0D30        | Output (RW)   | ミュート LED + マイクミュート制御（High = ミュート） |
| X0D31        | Output (RW)   | アンプ有効（Low = 有効）                             |
| X0D33        | Output (RW)   | WS2812 LED 電源制御（High = オン）                   |
| X0D39        | Output (RW)   | 未接続                                              |

## I2S ファームウェアを書き込む

reSpeaker XVF3800 を XIAO ESP32S3 と一緒に使用するには、reSpeaker XVF3800 のファームウェアが I2S バージョンであることを確認してください。
最新の I2S ファームウェアを書き込むには Firmware Flash を確認してください。[このセクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェアを更新) を参照してください。

:::note
XIAO ESP32S3 と動作させるには、I2S ファームウェアを書き込む必要があります。ただし、USB DFU はサポートしていません。すでに USB ファームウェアを使用している場合は、セーフモードに入ってファームウェアを書き込むことができます。この方法は USB DFU と I2C DFU の両方をサポートするため、より柔軟です。詳しくは、[このセクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#セーフモード) を参照してください。
:::

## ソフトウェアの準備

### Arduino IDE をインストール

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

#### Arduino-ESP32 をインストール

Boards Manager を使用してインストールを開始するには、次の手順に従ってください。

- Arduino IDE の最新版（1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) サイトで入手できます。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- Additional Board Manager URLs フィールドに、上記のリリースリンクのいずれかを入力します。複数の URL を入力する場合は、カンマで区切って追加できます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

### サポートライブラリ 

:::note
提供されているサンプルを実行するには、[Arduino Audio Tools ライブラリ](https://github.com/pschatzmann/arduino-audio-tools) をインストールしてください。
:::


## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
