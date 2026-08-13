---
description: reSpeaker Flex は XMOS XVF3800 を搭載した高性能なモジュラー音声システムで、円形および直線状の交換可能な 4 マイクアレイにより、360° 全方位または指向性の高い音声を精密に収音でき、ロボットやスマートデバイスに最適です。
title: reSpeaker Flex 入門ガイド
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/
---
# reSpeaker Flex 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex-banner.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex は XMOS XVF3800 プロセッサを中心に構成されたモジュラー型・分離アーキテクチャの音声処理システムで、ロボットやインテリジェントインタラクション端末向けに特別に設計されています。従来の一体型マイクアレイとは異なり、Flex ではコア処理ボードとマイクアレイボードが分離されており、両者は柔軟な FPC フラットケーブルで接続されます。これにより、マイクアレイを製品筐体内の任意の物理位置に組み込む一方で、処理用エレクトロニクスを別の場所に配置することができます。
本システムは 2 種類の交換可能なマイクアレイ構成をサポートします。全方位 360° 収音用の**円形 4 マイクアレイ**と、背面方向を抑圧した前方指向性の**直線状 4 マイクアレイ**です。どちらのボードも標準化された 24 ピン FPC インターフェースを介して同じコアボードに接続され、システムは USB（UAC 2.0 プラグアンドプレイ）または I2S モードで動作し、組み込み統合が可能です。オプションとして、XIAO ESP32S3 モジュールをコアボード上にはんだ付けすることで、ワイヤレス接続と拡張制御機能を追加できます。

### 円形マイクシリーズ

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
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

### 直線マイクシリーズ

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear</th>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## 特長

- **分離型モジュラー設計**：コアボードとマイクアレイボードが物理的に分離されており、FPC フラットケーブルで接続することで、任意の製品シャーシ内に柔軟に配置可能

- **マイク構成の選択肢**：同一のコアボードを使用し、円形 4 マイクアレイ（360° 収音、44mm 間隔）または直線状 4 マイクアレイ（180° 前方指向性、33mm 間隔）を交換して利用可能

- **XMOS XVF3800 オーディオ処理**：AEC、AGC、DoA、多チャンネルビームフォーミング、VAD、ノイズ抑圧、残響除去などのフル機能 DSP を搭載

- **2 つの動作モード**：PC や SBC とプラグアンドプレイで接続できる USB UAC 2.0、組み込み統合向けの I2S モード

- **デュアル USB 接続**：USB-C ポートと PH2.0 ロック式ポートの両方が UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**：JST コネクタ経由で 10W 4Ω スピーカーを駆動可能で、3.5mm AUX ヘッドホン出力を搭載

- **XIAO ESP32S3 対応（オプション）**：はんだ付けモジュールにより Wi-Fi/Bluetooth を追加し、I2S および I2C バスを XVF3800 に直接配線してワイヤレス制御とオーディオ転送を実現

- **柔軟なファームウェア**：2 チャンネル版と 6 チャンネル版の 2 種類の USB ファームウェア、I2S ファームウェア、dfu-util による DFU アップグレード、電源再投入後も保持される設定

- **Python SDK**：Python 経由で録音フォーマット、音量、アルゴリズムパラメータ、チャンネルルーティングを調整可能

## 主なコンポーネント

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）。AEC、ビームフォーミング、DoA、ノイズ抑圧など、すべてのオーディオ DSP を処理 |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換および DAC 出力を処理 |
| **FPC マイクアレイインターフェース** | ロックラッチ付き 24 ピン FPC コネクタ。最大 8 マイクアレイと 2 本の GPIO ラインをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロックラッチ付きコネクタ。USB-C ポートと同じ UAC 2.0 オーディオおよび DFU 機能を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動される側面出力のヘッドホン端子 |
| **スピーカー JST コネクタ** | 最大 10W・4Ω のスピーカーを駆動する縦型実装コネクタ。スピーカーを直結するためのはんだパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷をサポート（P1 優先） |
| **RST ボタン** | XVF3800 用のハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けると、ファームウェアリカバリ用のセーフモードで起動 |
| **PWR LED** | 電源オンを示す緑色インジケータ |
| **デバッグパッド** | XMOS XTAG4 用の予備パッド（工場出荷時は未はんだ付け） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO を引き出したピンヘッダ／パッド |
| **取付穴** | 4 × M3 取付穴 |
| **XIAO ESP32S3** | ホストデバイスとして使用する際に XIAO ESP32S3 をはんだ付け可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO および周辺機能拡張に利用可能 |

### 円形アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 44 mm 間隔で円形に配置された 4× PDM MEMS マイク |
| **収音パターン** | 360° 全方位の音声収音 |
| **インターフェース** | コアボードに接続する FPC コネクタ |
| **取付** | エンクロージャや筐体への固定用 3 × M3 取付穴 |

### 直線アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 33 mm 間隔で直線状に配置された 4× PDM MEMS マイク |
| **収音パターン** | 約 180° の前方指向性収音パターンで、背面の音を抑圧 |
| **インターフェース** | FPC コネクタ。ケーブルは側面または背面から配線可能 |
| **取付** | 2 × M3 取付穴 |




### XIAO ESP32S3 対応

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 のオーディオ処理パイプラインに Wi-Fi および Bluetooth 接続機能を追加できます。XIAO を含む SKU（-C4-1 および -L4-1）では、このモジュールがあらかじめ実装されています。ベース SKU（-C4-0 および -L4-0）では、このフットプリントは未実装のままです。
XIAO が実装されている場合、XIAO と XVF3800 の間には次の接続が行われます。

- **I2S バス** — 再生および録音用のデュアルバスで、BCLK、MCLK、LRCLK を共有し、双方向のオーディオストリーミングを実現
- **I2C バス** — XIAO から XVF3800 の設定パラメータを読み書きするために使用
- **RST ライン** — XIAO は専用 IO ピンを介して XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザー拡張用にラベル付きピンヘッダ／パッドへ引き出し

### ピンヘッダ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### 24 FPC ケーブル

FPC マイクアレイインターフェースは、ロックラッチ付きの 24 ピン・0.5mm ピッチコネクタで、同梱の 20cm FPC フラットケーブルはこのコネクタにキーイングされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Power | マイク用電源 | 3.3V 電源 |
| 2 | MIC_VDD | Power | マイク用電源 | 電源安定性向上のためのデュアルピン |
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

### ハードウェアの準備

- USB Type-C ケーブル
- ホストコンピュータ または Raspberry Pi

### ソフトウェアの準備

### 開封後すぐの使い方

:::note
最適な音声収音性能とオーディオアルゴリズムの正しい動作を確保するために、デバイス背面のマイクポート（Mic Inlet / Sound Hole）が音源の方向を向くようにしてください。マイクポートは、Seeed Studio ロゴが印刷されている側にあります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

#### リセット

リセット（RST）ボタンは、押されたときに reSpeaker Flex にハードウェアリセットを行います。チップを再起動し、最初からシステムを再初期化するため、完全な電源再投入と同じ動作になります。

#### スピーカー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドホンジャックまたはオンボードの JST スピーカーインターフェースのいずれかを使用してスピーカーを接続する方法を示しています。

#### FPC 接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-orientation.png" alt="pir" width={600} height="auto" /></p>

FPC ケーブルを接続する前に、接点側と補強板側を確認してください。ケーブルを MIC コネクタに挿入する際は、露出した接点がコネクタ内部の金属接点側を向き、補強板側が外側を向くようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-connection.png" alt="pir" width={600} height="auto" /></p>

MIC コネクタのロックタブを開き、正しい向きで FPC ケーブルを挿入し、タブを閉じて接続を固定します。

#### セーフモード

**Safe Mode** は **reSpeaker Flex** 上の特別なリカバリモードで、**USB DFU** または I2C（**ESP32** などのデバイス向け）経由でファームウェアを書き込むことができます。

以前に **I2S ファームウェア** を書き込んでいて、**USB ファームウェア** に戻したい場合は、**Safe Mode** に入って **USB DFU** を使用して USB ファームウェアを書き直すことができます。

:::note

- USB ファームウェア
  - USB DFU のみをサポートします。
  - USB 接続を介してデバイスを更新できます。
  - I2C DFU はサポートしません。
- I2S ファームウェア
  - I2C DFU をサポートします。
  - I2C インターフェース経由でファームウェアを更新できます。
  - USB DFU はサポートしません。
- Safe Mode ファームウェア
  - Factory パーティションに保存されています。
  - USB DFU と I2C DFU の両方をサポートします。
  - 最も柔軟なリカバリ用ファームウェアです。

:::

**次のような場合に Safe Mode を使用します**

- ファームウェアが**正しく動作していない**（例：**USB が認識されない**）場合。
- **新しいファームウェアを書き込みたい**が、現在のファームウェアが**応答しない**場合。
- **誤って間違ったファームウェアを書き込んでしまい**、デバイスを復旧したい場合。

 **Safe Mode に入る方法**

- デバイスの電源を**完全にオフ**にします。
- **Boot ボタンを押し続けます。**
- **Boot ボタンを押したまま、電源を再接続します。**
DFU util コマンドラインツールを使用して DFU パーティションを確認します。詳細は、以下の **Install DFU Util** セクションを参照してください。

### ファームウェアの更新

公式 GitHub リポジトリには 3 種類のファームウェアバージョンが用意されています。用途に応じて適切なファームウェアを選択して書き込むことができます。詳細およびダウンロードについては、Github の [Link](https://github.com/respeaker/reSpeaker_Flex) を参照してください。

:::note
リポジトリ全体をダウンロードする必要があることに注意してください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB ファームウェアは、USB ハードウェアインターフェースを介して通信する際に、**Windows、Linux、macOS** などのホスト OS で使用することを想定しています。
これらのファームウェアファイルはこのリンクから確認できます。

| ファームウェア                         | チャンネル数 | 備考                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 チャンネル | 16 kHz、円形マイクアレイを使用した 6 チャンネル             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 チャンネル | 16 kHz、線形マイクアレイを使用した 6 チャンネル               |
| respeaker_flex_ua-io16-cir.bin     | 2 チャンネル | 16 kHz、円形マイクアレイを使用した 2 チャンネル出力          |
| respeaker_flex_ua-io16-lin.bin     | 2 チャンネル | 16 kHz、線形マイクアレイを使用した 2 チャンネル出力            |
| respeaker_flex_ua-io48-cir.bin     | 2 チャンネル | 48 kHz、円形マイクアレイを使用した 2 チャンネル出力          |
| respeaker_flex_ua-io48-lin.bin     | 2 チャンネル | 48 kHz、線形マイクアレイを使用した 2 チャンネル出力            |

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>

 <TabItem value="I2S" label="I2S">

I2S ファームウェアは、XIAO ESP32S3 のようなマイコンホストにデバイスを接続して使用することを想定しています。この構成では、音声データは I2S プロトコルを使用して送信されます。ファームウェアファイル **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** はここで入手できます。このファームウェアは、16 kHz サンプリングレート、32 ビット深度の 2 チャンネルオーディオをサポートします。

| ファームウェア                                      | チャンネル数 | 備考                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、円形マイクアレイ   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、線形マイクアレイ|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、円形マイクアレイ|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、線形マイクアレイ|

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>
</Tabs>

### DFU Util のインストール

`dfu-util` は、USB 経由で Device Firmware Upgrade を行うためのコマンドラインツールです。

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして展開します（例：`D:\dfu-util-0.11-binaries\win64\`）。  
  [Download Link](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` へのパスを追加します：  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- **Command Prompt**（`cmd`）を開き、インストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- reSpeaker Flex を接続し、デバイスが検出されるか確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 次のようなメッセージが表示された場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 以下のドライバインストール手順に進んでください。

- [Zadig](https://zadig.akeo.ie/) をインストールします。  
  - Zadig を開き、`Options > List All Devices` を選択します。  
  - `reSpeaker XVF3800 Flex` を選択します。  
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

### ファームウェアを書き込む

GitHub から reSpeaker Flex XVF 3800 用の完全なファームウェアリポジトリをダウンロードします。

- 次のコマンドを実行してファームウェアを書き込みます。

  - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- Linux では、sudo を付けて実行します。

  - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

## USB ファームウェアで録音と再生を行う

<Tabs>
<TabItem value="windows" label="Windows">

### Audacity のセットアップ（Windows）

1. **Audacity** を開きます。
2. **Audio Setup > Audio Settings** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. 次のように設定します：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **サンプルフォーマット**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. **OK** をクリックします
2. 準備完了です — 録音を開始しましょう！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity のセットアップ (macOS)

1. **Audacity** を開きます
2. **Audio Setup** に移動し、**Recording Device** として **reSpeaker 3800 Flex** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** を開き、次のように設定します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK** をクリックします
5. 録音の準備ができました！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Pi での録音（コマンドライン）

1. **サウンドカード番号を確認する**：

```bash
arecord -l
```

出力例：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 この場合、**カード番号は 3** です

---

2. **音声を録音する（5 秒）**：

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `3` を実際のサウンドカード番号に置き換えてください

---

3. **ALSA 上で reSpeaker XVF3800 の音量を調整する**

```bash
alsamixer
```

alsamixer では、左右の矢印キーを使用して正しいサウンドデバイスに移動します。上矢印キーを使用して音量を上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**：

```bash
aplay -D plughw:3,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストールする（まだインストールしていない場合）**

Raspberry Pi でターミナルを開きます。Pi-Apps をインストールするために次のコマンドを実行します

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
  - 正しい Recording Device を選択します（例：reSpeaker XVF3800 Flex）。
  - 適切な Playback Device を選択します（例：reSpeaker XVF3800 Flex）。
  - Raspberry Pi での互換性を高めるため、Host が ALSA に設定されていることを確認します。
- 設定を適用するために OK をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声の録音と再生**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## パラメータをどのようにチューニングしますか？

チューニングにより、ユーザーは内蔵オーディオアルゴリズムのパラメータを設定し、XMOS チップと直接通信することができます。

パラメータ設定とデバイスとのやり取りのために、専用の Python 制御インターフェースが提供されています。


[**Python Control Directory**](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control)

提供されている Python スクリプトを使用して、次のことができます：

* 内蔵オーディオアルゴリズムのパラメータを設定
* DoA（到来方向）データを取得
* VAD（音声活動検出）データを取得
* オンボード LED を制御
* 音声処理パイプラインを制御
* XMOS デバイスと直接通信

**システム要件**

Python 制御インターフェースを使用するには、以下の依存関係が必要です：

* Python 3.6 以降
* `pyusb` Python ライブラリ
* `libusb` システムライブラリ


### インストールと依存関係

必要な Python 依存関係を次のコマンドでインストールします：

```bash
pip install pyusb
```

オペレーティングシステムによっては、`libusb` パッケージを別途インストールする必要がある場合があります。

---

### 使い方

**基本構文**

```bash
python xvf_host.py [options] command [value(s)...]
```

---

**コマンドオプション**

| オプション        | 説明                                                   |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | サポートされているすべてのコマンドと詳細情報を一覧表示 |
| `--vid`        | USB ベンダー ID を設定（デフォルト: `0x2886`）        |
| `--pid`        | USB プロダクト ID を設定（デフォルト: `0x001A`）      |
| `--values`     | 書き込みコマンドに渡す値を指定（オプション）          |

---

### 使用例

**1. 利用可能なすべてのコマンドを一覧表示**

```bash
python xvf_host.py --list
```

サポートされているすべてのコマンドとその説明を表示します。

---

**2. ファームウェアバージョン情報を読み取る**

```bash
python xvf_host.py VERSION
```

デバイスから現在のファームウェアバージョン情報を読み取り、表示します。

---

**3. DOA（到来方向）値を読み取る**

```bash
python xvf_host.py DOA_VALUE
```

マイクアレイによって検出された現在の到来方向（DOA）値を取得します。

## トラブルシューティング

### スピーカー出力からの再生音量が十分でない場合は？

Linux で **reSpeaker Flex** のスピーカー出力音量が小さすぎる場合、XVF3800 サウンドカードの **ALSA ミキサーレベル** を調整する必要があるかもしれません。出力音量を上げるには、以下の手順に従ってください。

**ステップ 1: ALSA ミキサーを開く**

1. ターミナルを開きます。
2. 次のコマンドを入力し、**Enter** を押します：

   ```bash
   alsamixer
   ```

**ステップ 2: XVF3800 Flex サウンドカードを選択する**

1. **F6** を押してサウンドカード選択メニューを開きます。
2. **上下の矢印キー** を使用して **XVF3800 Flex** サウンドカードを選択します。
3. **Enter** を押して選択を確定します。

**ステップ 3: PCM-1 の音量を調整する**

1. **左右の矢印キー** を使用して **PCM-1** に移動します。
2. **上矢印キー** を使用して音量レベルを **100%** まで上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**ステップ 4: ALSA 設定を保存する**

1. **ESC** を押して `alsamixer` を終了します。
2. reSpeaker Flex を取り外す前に、次のコマンドを実行して設定を保存します：

```bash
   sudo alsactl store
   ```

**ステップ 5: 追加オプション（PulseAudio の使用）**

ALSA レベルを調整してもまだ音がはっきり聞こえない場合は、より詳細な音量調整のために **PulseAudio Volume Control** をインストールしてみてください：

```bash
sudo apt install pavucontrol -y
```

その後、**pavucontrol** を開き、必要に応じて出力音量を 100% を超えて上げることができます。

### ファームウェアを書き込んだ後、Windows でサウンドデバイスとして使用できない？

スタートメニューを開き、「Device manager」と入力します。関連する reSpeaker Flex デバイスを見つけて右クリックし、Uninstall devices を選択します。その後、デバイスを再起動します（USB を抜き差しします）。すると Windows が正しいサウンドカードドライバを再インストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>


## リソース

- [reSpeaker Flex XVF3800 Circular 2D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_2d.dxf)
- [reSpeaker Flex XVF3800 Linear 2D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear_2d.dxf)
- [reSpeaker Flex XVF3800 Core Board 2D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate_2d.dxf)
- [reSpeaker Flex XVF3800 Circular 3D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_260210.step)
- [reSpeaker Flex XVF3800 Linear 3D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear.step)
- [reSpeaker Flex XVF3800 Core Board 3D ファイル](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate.step)



## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
