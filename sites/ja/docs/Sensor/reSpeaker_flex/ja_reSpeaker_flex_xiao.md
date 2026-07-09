---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、円形および線形の交換可能な 4 マイクアレイにより、ロボット工学やスマートデバイスに最適な、高精度な 360° または指向性の音声キャプチャを実現します。
title: XIAO ESP32S3 搭載 reSpeaker Flex 入門ガイド
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3

image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_introduction/
---

# reSpeaker Flex with XIAO ESP32S3

## 概要

reSpeaker Flex ESP32 バージョンは、コアボード上に予めはんだ付けされた XIAO ESP32S3 モジュールを統合しており、ワイヤレス制御とエッジ処理のための Wi-Fi および Bluetooth 接続を提供します。XMOS XVF3800 ボイスプロセッサを搭載した本システムは、マイクアレイボードがフレキシブルな 24 ピン FPC ケーブルを介してコアボードに接続されるという同じモジュラーアーキテクチャを採用しており、デバイス筐体内部での柔軟な配置が可能です。円形および線形の 4 マイクアレイの両方をサポートし、360° の無指向性キャプチャまたは前方指向のピックアップのいずれかを実現できます。本システムは USB（UAC 2.0）または I2S で動作でき、統合された ESP32S3 により、IoT 接続、ローカル制御、組み込みアプリケーションとの容易な統合が可能になります。


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## 特長 

- **分離型モジュラー設計**: コアボードとマイクアレイボードは物理的に分離されており、FPC フラットケーブルで接続されることで、あらゆる製品筐体内に柔軟に配置できます

- **マイク構成の選択肢**: 同一のコアボードを使用し、円形 4 マイクアレイ（360° ピックアップ、44mm 間隔）または線形 4 マイクアレイ（180° 前方指向、33mm 間隔）を切り替え可能

- **XMOS XVF3800 オーディオ処理**: AEC、AGC、DoA、多チャネルビームフォーミング、VAD、ノイズ抑圧、残響抑圧を含むフル機能のオーディオ DSP

- **デュアル動作モード**: PC や SBC とプラグアンドプレイ接続できる USB UAC 2.0 モードと、組み込み用途向けの直接統合が可能な I2S モード

- **デュアル USB 接続**: USB-C ポートと PH2.0 ロック式ポートの両方が、UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**: JST コネクタ経由で 10W 4Ω スピーカーを駆動可能で、3.5mm AUX ヘッドホン出力を備えています

- **XIAO ESP32S3 サポート**: 予めはんだ付けされたモジュールにより Wi-Fi/Bluetooth 機能を追加し、I2S および I2C バスが XVF3800 に直接配線されているため、ワイヤレス制御とオーディオ転送が可能です

- **柔軟なファームウェア**: デュアル USB ファームウェアバリアント（2 チャネルと 6 チャネル）、I2S ファームウェア、`dfu-util` による DFU アップグレード、電源再投入後も維持される設定

- **Python SDK**: Python 経由で、録音フォーマット、音量、アルゴリズムパラメータ、およびチャネルルーティングを調整可能


## 主なコンポーネント 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）。AEC、ビームフォーミング、DoA、ノイズ抑圧など、すべてのオーディオ DSP を処理します |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換と DAC 出力を処理します |
| **FPC マイクアレイインターフェース** | ロックラッチ付き 24 ピン FPC コネクタ。最大 8 マイクアレイおよび 2 本の GPIO ラインをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロックラッチ付きコネクタ。USB-C ポートと同じ UAC 2.0 オーディオおよび DFU 機能を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動されるサイド出力のヘッドホン端子 |
| **スピーカー JST コネクタ** | 最大 10W・4Ω のスピーカーを駆動可能な垂直実装コネクタ。スピーカーを直配線するためのはんだパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷に対応（P1 優先） |
| **RST ボタン** | XVF3800 用ハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けると、ファームウェアリカバリ用のセーフモードに入ります |
| **PWR LED** | 緑色の電源オンインジケータ |
| **デバッグパッド** | XMOS XTAG4 用の予備パッド（工場出荷時は未はんだ付け） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO 用のピンヘッダ／パッドを外部に引き出し |
| **取付穴** | 4 × M3 取付穴 |
| **XIAO ESP32S3** | ホストデバイスとして XIAO ESP32S3 をはんだ付けして使用可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO や周辺機器拡張に利用可能 |

### 円形アレイボード 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4× PDM MEMS マイクロフォン。44 mm 間隔で円形レイアウトに配置 |
| **集音パターン** | 360° の無指向性オーディオキャプチャ |
| **インターフェース** | コアボードへ接続する FPC コネクタ |
| **取付** | エンクロージャや筐体への固定用 3 × M3 取付穴 |




### 線形アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4× PDM MEMS マイクロフォン。33 mm 間隔で線形レイアウトに配置 |
| **集音パターン** | 約 180° の前方指向性ピックアップパターンで、背面からの音を抑制します |
| **インターフェース** | FPC コネクタ。ケーブルは側面または背面から配線可能 |
| **取付** | 2 × M3 取付穴 |

### XIAO ESP32S3 サポート 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 のオーディオ処理パイプラインに加えて Wi-Fi および Bluetooth 接続を実現します。XIAO を含む SKU（-C4-1 および -L4-1）には、このモジュールがあらかじめ実装されて出荷されます。ベース SKU（-C4-0 および -L4-0）では、このフットプリントは未実装のままです。
XIAO が実装されている場合、XIAO と XVF3800 の間には次の接続が行われます:

- **I2S バス** — 再生と録音用のデュアルバス。BCLK、MCLK、LRCLK を共有し、両方向へのオーディオストリーミングを実現
- **I2C バス** — XIAO から XVF3800 の設定パラメータを読み書きするために使用
- **RST ライン** — XIAO は専用 IO ピンを介して XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザ拡張用としてラベル付きピンヘッダ／パッドに引き出し

### ピンヘッダ 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 FPC ケーブル 

FPC マイクアレイインターフェースは、ロックラッチ付きの 24 ピン・0.5mm ピッチコネクタであり、同梱されている 20cm の FPC フラットケーブルはこのコネクタに合わせてキー加工されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 電源 | マイクロフォン電源 | 3.3V 供給 |
| 2 | MIC_VDD | 電源 | マイクロフォン電源 | 電源安定性向上のためのデュアルピン |
| 3 | GND | GND | 電源リターン GND | 電源 GND |
| 4 | MIC_CLK | Out | グローバルクロック信号 | コア信号、2–4 MHz |
| 5 | GND | GND | クロックシールド用 GND | クロック専用 GND |
| 6 | MIC_D1 | In | データライン 1 | CH1 マイク |
| 7 | GND | GND | D1 アイソレーション GND | |
| 8 | MIC_D2 | In | データライン 2 | CH2 マイク |
| 9 | GND | GND | D2 アイソレーション GND | |
| 10 | MIC_D3 | In | データライン 3 | CH3 マイク |
| 11 | GND | GND | D3 アイソレーション GND | |
| 12 | MIC_D4 | In | データライン 4 | CH4 マイク |
| 13 | GND | GND | D4 アイソレーション GND | |
| 14 | MIC_D5 | In | データライン 5 | CH5 マイク |
| 15 | GND | GND | D5 アイソレーション GND | |
| 16 | MIC_D6 | In | データライン 6 | CH6 マイク |
| 17 | GND | GND | D6 アイソレーション GND | |
| 18 | MIC_D7 | In | データライン 7 | CH7 マイク |
| 19 | GND | GND | D7 アイソレーション GND | |
| 20 | MIC_D8 | In | データライン 8 | CH8 マイク |
| 21 | GND | GND | D8 アイソレーション GND | |
| 22 | GPIO_1 | I/O | 汎用入出力 | 拡張機能 |
| 23 | GPIO_2 | I/O | 汎用入出力 | 拡張機能 |
| 24 | GND | GND | GPIO シールド用 GND | GPIO ノイズを吸収 |

## はじめに

### ハードウェアの準備 

- USB Type-C ケーブル 
- ホストコンピュータまたは Raspberry Pi 


### I2S ファームウェアを書き込む 

reSpeaker Flex を XIAO ESP32S3 と一緒に使用するには、reSpeaker Flex のファームウェアが `I2S` バージョンであることを確認してください。最新の `I2S` ファームウェアを書き込むには、Firmware Flash を確認してください。[section](https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/#update-firmware) を参照してください。


:::note
通常、XIAO ESP32S3 を搭載した reSpeaker Flex には、I2S バージョン用に設定されたファクトリーファームウェアがプリインストールされています。
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

Boards Manager を使ってインストールを開始するには、次の手順に従ってください。

- Arduino IDE の最新版（バージョン 1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトにあります。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- 上記のリリースリンクのいずれかを「Additional Board Manager URLs」フィールドに入力します。複数の URL をカンマ区切りで追加することができます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

### 補助ライブラリ

:::note
提供されているサンプルを実行するために、[Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) をインストールしてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。お客様が製品をできるだけ快適にご利用いただけるよう、様々なサポートをご用意しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


