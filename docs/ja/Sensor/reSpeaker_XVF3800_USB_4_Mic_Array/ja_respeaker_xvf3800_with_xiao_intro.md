---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご確認ください。

title: reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3の使用開始ガイド
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_xiao_getting_started
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB 4 マイクロフォンアレイ（XIAO ESP32S3付き）

## 概要

**ReSpeaker XVF3800 USB 4-Mic Array**は、XMOS XVF3800をベースとしたプロフェッショナルな円形4マイクロフォンアレイです。AEC、AGC、DoA、ビームフォーミング、VAD、ノイズ抑制、残響除去、360°音声キャプチャ（最大5メートル）を特徴としています。また、デュアル動作モードをサポートしており、高度な音声アプリケーションに最適です。Xiao ESP32S3と組み合わせることで、ReSpeaker XVF3800 USBの制御がさらに強力になり、無限の可能性を解き放ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **チップアップグレード** :XVF3000からXVF3800へ
  
- **クアッドマイクロフォンアレイ** :円形パターンの4つの高性能マイクで、最大5メートルの360°遠距離音声キャプチャ
  
- **高度なオーディオ処理** :XVF3800を搭載し、AEC、マルチビームフォーミング、残響除去、DoA検出、動的ノイズ抑制、60dB AGC範囲を実現

- **固有のデバイスシリアル番号** :内蔵SNにより、マルチデバイス展開と高度なデバイス管理が可能

- **デュアル動作モード** :PCへの即座接続のためのUSBプラグアンドプレイモードと、組み込みシステムとの統合のためのINT-Device（I2S）モード—ファームウェアを適宜切り替えることで、USBまたはI2Cコマンドで設定可能

- **オープンソース対応** :USBホスト（Windows、macOS、Raspberry Pi OS）およびI2Sホスト（XIAOシリーズ、ESP32、Arduino）で動作

- **視覚的フィードバック** :プログラマブルRGB LEDとステータスインジケーターがデバイス状態と音声アクティビティを表示

- **同等以上のオーディオ品質** :従来モデルと比較して

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要コンポーネント

| **コンポーネント / 機能**       | **説明**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **メインオーディオプロセッサ**      | **XMOS XVF3800**、AEC、ビームフォーミング、ノイズ抑制などのオーディオ処理を担当。       |
| **マイクロフォンアレイ**          | 円形パターンの**クアッドPDM MEMSマイクロフォン**、**360°遠距離音声キャプチャ（5m）**をサポート。 |
| **オーディオコーデック**               | **TLV320AIC3104**、オーディオ変換と出力を処理。                                              |
| **RGB LED**                  | **12個のWS2812**個別アドレス可能RGB LED、視覚的フィードバック用（ステータス、音声アクティビティなど）。 |
| **ミュートボタン**               | 押すとマイクロフォン入力を**ミュート/ミュート解除**。                                                       |
| **ミュートインジケータLED**        | 点灯（通常は赤色）してオーディオがミュートされていることを表示。                                               |
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

### XIAO ESP32S3 サポート

- 複数の出力オプションを持つステレオI2S入力/出力；XVF3800パラメータの設定と管理のためのI2Cインターフェース。
- IOピンによるXIAOリセット
- インターフェースとはんだパッド

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### オンボードWIFIアンテナ

XIAO ESP32S3を使用する場合、外部アンテナは不要です。アンテナスロットを接続するだけで内蔵PCBアンテナを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO 概要

reSpeaker XVF3800は外部制御用に3つの入力ピン（GPI）と5つの出力ピン（GPO）を公開しています。これらを使用してボタンの状態を読み取ったり、ミュートLED、アンプ、LEDなどのハードウェアを制御したりできます。

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

## I2Sファームウェアのフラッシュ

reSpeaker XVF3800をXIAO ESP32S3で使用するには、reSpeaker XVF3800のファームウェアがI2Sバージョンであることを確認してください。
最新のI2Sファームウェアをフラッシュするには、Firmware Flashを確認してください。[このセクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#update-firmware)をご覧ください。

:::note
XIAO ESP32S3で動作させるには、I2Sファームウェアをフラッシュする必要があります。ただし、USB DFUはサポートされていません。すでにUSBファームウェアを使用している場合は、セーフモードに入ってファームウェアをフラッシュできます。この方法はUSB DFUとI2C DFUの両方をサポートするため、より柔軟です。詳細については、この[セクション](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#safe-mode)をご覧ください。
:::

## ソフトウェアの準備

### Arduino IDEのインストール

お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールしてください

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Arduino IDEをダウンロード</strong>
  </a>
</div>

<br />

#### Arduino-ESP32のインストール

Boards Managerを使用してインストールプロセスを開始するには、以下の手順に従ってください：

- 1.8レベル以降の現在のアップストリームArduino IDEをインストールしてください。現在のバージョンは[arduino.cc](https://www.arduino.cc/en/Main/Software)ウェブサイトにあります。

- Arduinoを起動し、`Settings`ウィンドウを開きます。

- Additional Board Manager URLsフィールドに上記のリリースリンクの1つを入力してください。複数のURLを追加する場合は、カンマで区切って入力できます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
