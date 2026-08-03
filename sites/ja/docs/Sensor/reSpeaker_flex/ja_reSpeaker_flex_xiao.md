---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、円形および直線状の交換可能な 4 マイクアレイにより、ロボット工学やスマートデバイスに最適な、正確な 360° または指向性の音声収音を実現します。
title: reSpeaker Flex と Xiao ESP32S3 のはじめかた
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_introduction/
---

# reSpeaker Flex と XIAO ESP32S3

## 概要

reSpeaker Flex ESP32 バージョンは、コアボード上にあらかじめはんだ付けされた XIAO ESP32S3 モジュールを統合しており、ワイヤレス制御とエッジ処理のための Wi-Fi および Bluetooth 接続を提供します。XMOS XVF3800 ボイスプロセッサによって駆動されるこのシステムは、マイクアレイボードが柔軟な 24 ピン FPC ケーブルを介してコアボードに接続される同じモジュラーアーキテクチャを維持しており、機器筐体内で柔軟に配置できます。円形および直線状の 4 マイクアレイの両方をサポートし、360° 全方位収音または前方指向性の収音のいずれかを実現します。システムは USB（UAC 2.0）または I2S で動作でき、統合された ESP32S3 により、IoT 接続、ローカル制御、および組み込みアプリケーションとの容易な統合が可能になります。


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

## 特徴 

- **分離型モジュラー設計**: コアボードとマイクアレイボードは物理的に分離されており、FPC フラットケーブルで接続されることで、あらゆる製品筐体内で柔軟に配置できます

- **マイク構成の選択肢**: 同じコアボードを使用し、円形 4 マイクアレイ（360° 収音、44mm 間隔）または直線状 4 マイクアレイ（180° 前方指向性、33mm 間隔）を交換して使用可能

- **XMOS XVF3800 オーディオ処理**: AEC、AGC、DoA、多チャンネルビームフォーミング、VAD、ノイズ抑圧、残響除去を含むフル機能のオーディオ DSP

- **2 つの動作モード**: PC や SBC とプラグアンドプレイで接続できる USB UAC 2.0、組み込み機器へ直接統合するための I2S モード

- **デュアル USB 接続**: USB-C ポートと PH2.0 ロッキングポートの両方が、UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**: JST コネクタ経由で 10W 4Ω スピーカーを駆動可能で、3.5mm AUX ヘッドホン出力を備えています

- **XIAO ESP32S3 対応**: 事前にはんだ付けされたモジュールにより Wi-Fi/Bluetooth を追加し、I2S および I2C バスが XVF3800 に直接配線されているため、ワイヤレス制御とオーディオ転送が可能

- **柔軟なファームウェア**: デュアル USB ファームウェアバリエーション（2 チャンネルおよび 6 チャンネル）、I2S ファームウェア、dfu-util による DFU アップグレード、および電源再投入後も保持される設定

- **Python SDK**: Python 経由で録音フォーマット、音量、アルゴリズムパラメータ、およびチャンネルルーティングを調整可能


## 主なコンポーネント 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）。AEC、ビームフォーミング、DoA、ノイズ抑圧など、すべてのオーディオ DSP を処理 |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換および DAC 出力を処理 |
| **FPC マイクアレイインターフェース** | ロッキングラッチ付き 24 ピン FPC コネクタ。2 本の GPIO ラインを備えた最大 8 マイクアレイをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロッキングラッチ付きコネクタ。USB-C ポートと同じ UAC 2.0 オーディオおよび DFU を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動されるサイド出力のヘッドホン端子 |
| **スピーカー JST コネクタ** | 最大 10W 4Ω スピーカーを駆動する縦型実装コネクタ。スピーカーを直結するためのはんだパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷をサポート（P1 優先） |
| **RST ボタン** | XVF3800 用のハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けると、ファームウェアリカバリ用のセーフモードに入ります |
| **PWR LED** | 電源オンを示す緑色インジケータ |
| **デバッグパッド** | XMOS XTAG4 用の予備パッド（工場出荷時は未はんだ付け） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO 用のピンヘッダ／パッドを外部に引き出し |
| **取付穴** | 4 × M3 取付穴 |
| **XIAO ESP32S3** | ホストデバイスとして使用する際に XIAO ESP32S3 をはんだ付け可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO および周辺機能拡張に使用可能 |

### 円形アレイボード 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 44 mm 間隔で円形レイアウトに配置された 4× PDM MEMS マイク |
| **収音パターン** | 360° 全方位の音声収音 |
| **インターフェース** | コアボードへの FPC コネクタ |
| **取付** | エンクロージャや筐体への固定用 3 × M3 取付穴 |




### 直線状アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 33 mm 間隔で直線レイアウトに配置された 4× PDM MEMS マイク |
| **収音パターン** | 約 180° の前方収音パターンで、背面の音を抑制 |
| **インターフェース** | FPC コネクタ。ケーブルは側面または背面から配線可能 |
| **取付** | 2 × M3 取付穴 |


### XIAO ESP32S3 対応 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 のオーディオ処理パイプラインに Wi-Fi および Bluetooth 接続を追加できます。XIAO を含む SKU（-C4-1 および -L4-1）には、このモジュールが実装済みで出荷されます。ベース SKU（-C4-0 および -L4-0）では、このフットプリントは未実装のままです。
XIAO が実装されている場合、XIAO と XVF3800 の間には次の接続が配線されています。

- **I2S バス** — 再生および録音用のデュアルバスで、双方向のオーディオストリーミングのために BCLK、MCLK、LRCLK を共有
- **I2C バス** — XIAO から XVF3800 の設定パラメータを読み書きするために使用
- **RST ライン** — XIAO は専用 IO ピンを介して XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザー拡張用にラベル付きピンヘッダ／パッドへ引き出し

### ピンヘッダ 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 FPC ケーブル 

FPC マイクアレイインターフェースは、ロッキングラッチ付きの 24 ピン、0.5mm ピッチコネクタで、同梱されている 20cm の FPC フラットケーブルはこのコネクタにキーイングされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 電源 | マイク電源 | 3.3V 電源 |
| 2 | MIC_VDD | 電源 | マイク電源 | 電源安定性向上のためのデュアルピン |
| 3 | GND | GND | 電源リターングラウンド | 電源 GND |
| 4 | MIC_CLK | Out | グローバルクロック信号 | コア信号、2–4 MHz |
| 5 | GND | GND | クロックシールド用グラウンド | クロック専用グラウンド |
| 6 | MIC_D1 | In | データライン 1 | CH1 マイク |
| 7 | GND | GND | D1 アイソレーショングラウンド | |
| 8 | MIC_D2 | In | データライン 2 | CH2 マイク |
| 9 | GND | GND | D2 アイソレーショングラウンド | |
| 10 | MIC_D3 | In | データライン 3 | CH3 マイク |
| 11 | GND | GND | D3 アイソレーショングラウンド | |
| 12 | MIC_D4 | In | データライン 4 | CH4 マイク |
| 13 | GND | GND | D4 アイソレーショングラウンド | |
| 14 | MIC_D5 | In | データライン 5 | CH5 マイク |
| 15 | GND | GND | D5 アイソレーショングラウンド | |
| 16 | MIC_D6 | In | データライン 6 | CH6 マイク |
| 17 | GND | GND | D6 アイソレーショングラウンド | |
| 18 | MIC_D7 | In | データライン 7 | CH7 マイク |
| 19 | GND | GND | D7 アイソレーショングラウンド | |
| 20 | MIC_D8 | In | データライン 8 | CH8 マイク |
| 21 | GND | GND | D8 アイソレーショングラウンド | |
| 22 | GPIO_1 | I/O | 汎用入出力 | 拡張機能 |
| 23 | GPIO_2 | I/O | 汎用入出力 | 拡張機能 |
| 24 | GND | GND | GPIO シールド用グラウンド | GPIO ノイズを吸収 |

## はじめに

:::note
最適な音声収音性能とオーディオアルゴリズムの正しい動作を確保するために、デバイス背面の Microphone Port（Mic Inlet / Sound Hole）が音源の方向を向くようにしてください。マイクポートは、Seeed Studio ロゴが印刷されている側にあります。 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

### ハードウェアの準備 

- USB Type-C ケーブル 
- ホストコンピュータ または Raspberry Pi 


### I2S ファームウェアを書き込む 

reSpeaker Flex を XIAO ESP32S3 と一緒に使用するには、reSpeaker Flex のファームウェアが `I2S` バージョンであることを確認してください。最新の `I2S` ファームウェアを書き込むには、Firmware Flash を確認してください。詳しくは [セクション](https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/#ファームウェアを更新) をご覧ください。


:::note
通常、XIAO ESP32S3 を搭載した reSpeaker Flex には、I2S バージョン用に設定された工場出荷時ファームウェアが搭載されています。
:::

## ソフトウェアの準備

### Arduino IDE をインストール

お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします

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

Boards Manager を使用してインストールを開始するには、次の手順に従ってください：

- Arduino IDE の最新版（1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトにあります。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- 上記のリリースリンクのいずれかを Additional Board Manager URLs フィールドに入力します。複数の URL をカンマで区切って追加できます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

### 補助ライブラリ 

:::note
提供されているサンプルを実行するには、[Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) をインストールしてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


