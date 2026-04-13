---
description: reSpeaker Flex は XMOS XVF3800 を搭載した高性能なモジュラー式音声システムで、円形および直線状の交換可能な 4 マイクアレイにより、ロボットやスマートデバイスに最適な、正確な 360° または指向性の音声取得を実現します。
title: reSpeaker Flex 入門ガイド
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/
---
# reSpeaker Flex 入門ガイド

reSpeaker Flex は XMOS XVF3800 プロセッサを中心に構築されたモジュラー式・分割アーキテクチャの音声処理システムで、ロボットやインテリジェントな対話端末向けに特別に設計されています。一般的な一体型マイクアレイとは異なり、Flex ではコア処理ボードとマイクアレイボードが分離されており、両者は柔軟な FPC リボンケーブルで接続されます。これにより、マイクアレイを製品筐体内の任意の物理位置に組み込みつつ、処理用電子回路は別の場所に配置することができます。
このシステムは 2 種類の交換可能なマイクアレイ構成をサポートします。すなわち、全方位 360° 収音用の**円形 4 マイクアレイ**と、背面方向の音を抑制しつつ前方の音を指向的に収音する**直線状 4 マイクアレイ**です。どちらのボードも共通の 24 ピン FPC インターフェースを介して同じコアボードに接続され、システムは USB（UAC 2.0 プラグアンドプレイ）または I2S モードで動作し、組み込み用途に統合できます。さらに、オプションの XIAO ESP32S3 モジュールをコアボード上にはんだ付けすることで、ワイヤレス接続や拡張制御機能を追加できます。

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

## 特徴 

- **分割モジュラー設計**：コアボードとマイクアレイボードが物理的に分離されており、FPC リボンケーブルで接続することで、任意の製品シャーシ内に柔軟に配置可能

- **マイク構成の選択肢**：同じコアボードを使用しつつ、円形 4 マイクアレイ（360° 収音、44mm 間隔）または直線状 4 マイクアレイ（180° 前方指向性、33mm 間隔）を交換して使用可能

- **XMOS XVF3800 オーディオ処理**：AEC、AGC、DoA、多チャンネルビームフォーミング、VAD、ノイズ抑制、残響除去といったオーディオ処理機能をフル搭載

- **2 つの動作モード**：PC や SBC とプラグアンドプレイ接続できる USB UAC 2.0、組み込み統合向けの I2S モード

- **デュアル USB 接続**：USB-C ポートと PH2.0 ロックポートの両方が UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**：JST コネクタ経由で 10W 4 オームのスピーカー駆動に対応し、3.5mm AUX ヘッドホン出力を搭載

- **XIAO ESP32S3 対応（オプション）**：はんだ付けモジュールにより Wi-Fi / Bluetooth が追加され、I2S および I2C バスが XVF3800 に直接配線されることで、ワイヤレス制御やオーディオ転送が可能

- **柔軟なファームウェア**：デュアル USB ファームウェアバリエーション（2 チャンネルおよび 6 チャンネル）、I2S ファームウェア、dfu-util による DFU アップグレード、および電源再投入後も保持される設定

- **Python SDK**：録音フォーマット、音量、アルゴリズムパラメータ、およびチャンネルルーティングを Python 経由で調整可能

## 主な構成要素 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）。AEC、ビームフォーミング、DoA、ノイズ抑制など、すべてのオーディオ DSP を処理 |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換および DAC 出力を担当 |
| **FPC マイクアレイインターフェース** | ロックラッチ付き 24 ピン FPC コネクタ。最大 8 マイクアレイおよび 2 本の GPIO ラインをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロックラッチ付きコネクタ。USB-C ポートと同じ UAC 2.0 オーディオおよび DFU を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動される側面出力のヘッドホンジャック |
| **スピーカー JST コネクタ** | 最大 10W 4Ω のスピーカーを駆動できる縦型実装コネクタ。スピーカーを直配線するためのはんだパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷をサポート（P1 優先） |
| **RST ボタン** | XVF3800 用のハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けることで、ファームウェアリカバリ用のセーフモードに入る |
| **PWR LED** | 電源オンを示す緑色インジケータ |
| **デバッグパッド** | XMOS XTAG4 用に予約されたパッド（工場出荷時は未はんだ） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO が引き出されたピンヘッダ／パッド |
| **取り付け穴** | M3 取り付け穴 ×4 |
| **XIAO ESP32S3** | ホストデバイスとして使用する際に XIAO ESP32S3 をはんだ付けして搭載可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO および周辺機能拡張として使用可能 |





### 円形アレイボード 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4 個の PDM MEMS マイク（44 mm 間隔）を円形レイアウトで配置 |
| **収音パターン** | 360° の全方位オーディオキャプチャ |
| **インターフェース** | コアボードに接続する FPC コネクタ |
| **取り付け** | エンクロージャーや筐体に固定するための M3 取り付け穴 ×3 |




### 直線アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4 個の PDM MEMS マイク（33 mm 間隔）を直線レイアウトで配置 |
| **収音パターン** | 約 180° の前方収音パターンで、背面の音を抑制 |
| **インターフェース** | FPC コネクタ。ケーブルは側面または背面から配線可能 |
| **取り付け** | M3 取り付け穴 ×2 |


### XIAO ESP32S3 対応 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 のオーディオ処理パイプラインに Wi-Fi および Bluetooth 接続機能を追加できます。XIAO を含む SKU（-C4-1 および -L4-1）では、このモジュールがあらかじめ実装されています。ベース SKU（-C4-0 および -L4-0）では、このフットプリントは未実装のままです。
XIAO が実装されている場合、以下の接続が XIAO と XVF3800 の間で配線されています。

- **I2S バス** — 再生および録音用のデュアルバスで、BCLK、MCLK、LRCLK を共有し、双方向のオーディオストリーミングを実現
- **I2C バス** — XIAO から XVF3800 の設定パラメータを読み書きするために使用
- **RST ライン** — 専用 IO ピン経由で、XIAO から XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザー拡張用としてラベル付きピンヘッダ／パッドに引き出し



### ピンヘッダ 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 FPC ケーブル 

FPC マイクアレイインターフェースは、ロックラッチ付き 24 ピン・0.5mm ピッチのコネクタで、同梱の 20cm FPC リボンケーブルはこのコネクタに合わせてキーイングされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 電源 | マイク電源 | 3.3V 供給 |
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

### ハードウェアの準備 

- USB Type-C ケーブル 
- ホストコンピュータ または Raspberry Pi 

### ソフトウェアの準備 

### 開封後すぐの使い方 

#### リセット 

リセット（RST）ボタンは、reSpeaker Flex に対してハードウェアリセットを行います。押すとチップが再起動し、電源を完全に入れ直した場合と同じように、システムを最初から再初期化します。

#### スピーカー接続 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドホンジャックまたはオンボードの JST スピーカーインターフェースを使用してスピーカーを接続する方法を確認できます。

#### セーフモード 

**Safe Mode** は **reSpeaker Flex** 上の特別なリカバリモードで、**USB DFU** または I2C（Raspberry Pi や **ESP32** などのデバイス向け）を介してファームウェアを書き込むことができます。

以前に **I2S ファームウェア** を書き込んでいて、**USB ファームウェア** に戻したい場合は、**Safe Mode** に入って **USB DFU** を使用して USB ファームウェアを書き直すことができます。

:::note
- USB ファームウェア
    - USB DFU のみをサポートします。
    - USB 接続を介してデバイスを更新できます。
    - I2C DFU はサポートしません。
- I2S ファームウェア
    - I2C DFU をサポートします。
    - I2C インターフェース経由でのファームウェア更新が可能です。
    - USB DFU はサポートしません。
- Safe Mode ファームウェア
    - Factory パーティションに保存されています。
    - USB DFU と I2C DFU の両方をサポートします。
    - 最も柔軟なリカバリ用ファームウェアです。

:::

**以下のような状況で Safe Mode を使用します**

- ファームウェアが**正しく動作していない**（たとえば、**USB が認識されない**）場合。
- **新しいファームウェアを書き込みたい**が、現在のファームウェアが**応答しない**場合。
- **誤って別のファームウェアを書き込んでしまい**、デバイスを復旧したい場合。


 **Safe Mode へ入る方法** 

- デバイスの電源を**完全にオフ**にします。
- **Boot ボタンを押し続けます**。
- **Boot ボタンを押したまま、電源を再接続します。**
- **赤色 LED が点滅**し始めたら、デバイスが **Safe Mode** に入ったことが確認できます。
これでデバイスは、Factory パーティションに保存されている **Safe Mode ファームウェア** を実行しています。


### ファームウェアの更新 

公式 GitHub リポジトリには 3 種類のファームウェアが用意されています。用途に応じて、適切なファームウェアを選択して書き込むことができます。詳細およびダウンロードについては、Github の [Link](https://github.com/respeaker/reSpeaker_Flex) を参照してください。 

:::note 
必ずリポジトリ全体をダウンロードしてください。
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB ファームウェアは、USB ハードウェアインターフェース経由で通信する際に、**Windows、Linux、macOS** などのホスト OS とともに使用することを目的としています。
2 つのファームウェアバリアントが用意されています。2 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin** と、6 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin** です。どちらのファームウェアも 16 kHz サンプリングレート、32 ビット深度で動作します。

これらのファームウェアファイルは、このリンクから確認できます。

| ファームウェア                         | チャンネル数 | 備考                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 チャンネル | 16 kHz、円形マイクアレイを使用した 6 チャンネル             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 チャンネル | 16 kHz、リニアマイクアレイを使用した 6 チャンネル               |
| respeaker_flex_ua-io16-cir.bin     | 2 チャンネル | 16 kHz、円形マイクアレイを使用したステレオ出力          |
| respeaker_flex_ua-io16-lin.bin     | 2 チャンネル | 16 kHz、リニアマイクアレイを使用したステレオ出力            |
| respeaker_flex_ua-io48-cir.bin     | 2 チャンネル | 48 kHz、円形マイクアレイを使用したステレオ出力          |
| respeaker_flex_ua-io48-lin.bin     | 2 チャンネル | 48 kHz、リニアマイクアレイを使用したステレオ出力            |

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>

 <TabItem value="I2S" label="I2S">

I2S ファームウェアは、XIAO ESP32S3 のようなマイコンホストにデバイスを接続して使用する場合を想定しています。この構成では、音声データは I2S プロトコルを使用して送信されます。ファームウェアファイル **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** はここで入手できます。このファームウェアは、16 kHz サンプリングレート、32 ビット深度の 2 チャンネルオーディオをサポートします。

| ファームウェア                                      | チャンネル数 | 備考                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、円形マイクアレイ   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、リニアマイクアレイ|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、円形マイクアレイ|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、リニアマイクアレイ|

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>
</Tabs>

### DFU Util のインストール


`dfu-util` は、USB 経由で Device Firmware Upgrade を行うためのコマンドラインツールです。

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして解凍します（例：`D:\dfu-util-0.11-binaries\win64\`）。  
  [Download Link](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` へのパスを追加します。  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- **Command Prompt**（`cmd`）を開き、インストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- reSpeaker Flex を接続し、デバイスが認識されているか確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 次のようなメッセージが表示された場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 続いて、以下のドライバインストール手順を実行してください。

- [Zadig](https://zadig.akeo.ie/) をインストールします。  
  - Zadig を開き、`Options > List All Devices` を選択します。  
  - `reSpeaker XVF3800 Flex` を選択します。  
  - **WinUSB** ドライバをインストールします。  
  - デバイスの電源を入れ直します。  
  - 再度 `dfu-util -l` を実行して、認識を確認します。

</TabItem>

 <TabItem value="macos" label="macOS">

- Homebrew を使って dfu-util をインストールします：

```bash
brew install dfu-util
```

- デバイスが認識されているか確認します：

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

- XVF3800 を接続し、認識を確認します：

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

GitHub から reSpeaker Flex XVF 3800 の完全なファームウェアリポジトリをダウンロードします。

- 次のコマンドを実行してファームウェアを書き込みます。

    - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- Linux では、sudo を付けて実行します。

    - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin



## USB ファームウェアで録音と再生を行う 


<Tabs>
<TabItem value="windows" label="Windows">

### Audacity の設定（Windows）

1. **Audacity** を開きます。
2. **Audio Setup > Audio Settings** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. 次のように設定します：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. **OK** をクリックします。
2. 準備完了です — 録音を開始しましょう！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity の設定（macOS）

1. **Audacity** を開きます。
2. **Audio Setup** を開き、**Recording Device** として **reSpeaker 3800 Flex** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** に移動し、以下のように設定します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK** をクリックします
5. これで録音の準備ができました！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Pi での録音（コマンドライン）

1. **サウンドカード番号を確認します**：

```bash
arecord -l
```

出力例：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 この場合、**カード番号は 3 です**

---

2. **音声を録音します（5 秒）**：

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `3` を実際のサウンドカード番号に置き換えてください

---

3. **ALSA で reSpeaker XVF3800 の音量を調整する**

```bash
alsamixer
```

alsamixer では、左右の矢印キーを使用して正しいサウンドデバイスに移動します。上向き矢印キーで音量を上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**：

```bash
aplay -D plughw:3,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストールします（まだインストールしていない場合）**

Raspberry Pi でターミナルを開きます。Pi-Apps をインストールするには、次のコマンドを実行します

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。メニューに新しい Pi-Apps アイコンが表示されます。

2. **Pi-Apps から Audacity をインストールします**

3. **音声入力と出力を設定します**

- ツールバーの "Audio Setup" をクリックします。
- ドロップダウンメニューから "Audio Settings" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settings ウィンドウで：
  - 正しい Recording Device を選択します（例：reSpeaker XVF3800 Flex）。
  - 適切な Playback Device を選択します（例：reSpeaker XVF3800 Flex）。
  - Raspberry Pi での互換性を高めるために、Host が ALSA に設定されていることを確認します。
- 設定を適用するために OK をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声を録音・再生します**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>


## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



