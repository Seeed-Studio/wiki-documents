---
description: reSpeaker Flex は XMOS XVF3800 を搭載した高性能なモジュラー音声システムで、円形および直線型の交換可能な 4 マイクアレイにより、精密な 360° あるいは指向性のある音声収音が可能で、ロボットやスマートデバイスに最適です。
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

reSpeaker Flex は XMOS XVF3800 プロセッサを中心に構成されたモジュラー型スプリットアーキテクチャ音声処理システムで、ロボットや知能対話端末向けに特別に設計されています。従来の一体型マイクアレイとは異なり、Flex ではコア処理ボードとマイクアレイボードが分離されており、両者はフレキシブルな FPC フラットケーブルで接続されます。これにより、アレイ部分を製品筐体内の任意の物理的な位置に組み込む一方で、処理用電子回路は別の場所に配置できます。
本システムは 2 種類の交換可能なマイクアレイ構成をサポートします。すなわち、全方位 360° 収音用の**円形 4 マイクアレイ**と、背面方向を抑制した前方指向収音用の**直線型 4 マイクアレイ**です。どちらのボードも標準化された 24 ピン FPC インターフェースを介して同一のコアボードに接続され、システムは USB（UAC 2.0 プラグアンドプレイ）または I2S モードで動作し、組み込み用途に統合可能です。オプションとして XIAO ESP32S3 モジュールをコアボード上にはんだ付けすることで、ワイヤレス接続や拡張制御機能を追加できます。

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



### 直線型マイクシリーズ 

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

- **分離モジュラー設計**：コアボードとマイクアレイボードが物理的に分離され、FPC フラットケーブルで接続されることで、任意の製品シャーシ内に柔軟に配置可能

- **マイク構成の選択肢**：同一コアボードを用いて、円形 4 マイクアレイ（360° ピックアップ、44mm 間隔）または直線型 4 マイクアレイ（180° 前方指向性、33mm 間隔）を切り替え可能

- **XMOS XVF3800 オーディオ処理**：AEC、AGC、DoA、多チャネルビームフォーミング、VAD、ノイズ抑圧、残響除去を含むフル機能 DSP

- **2 つの動作モード**：PC や SBC とプラグアンドプレイで接続できる USB UAC 2.0、組み込み統合用の I2S モード

- **デュアル USB 接続**：USB-C ポートおよび PH2.0 ロック式ポートの両方が、UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**：JST コネクタ経由で 10W 4Ω スピーカー駆動に対応し、3.5mm AUX ヘッドホン出力を搭載

- **XIAO ESP32S3 対応（オプション）**：はんだ付けモジュールにより Wi-Fi / Bluetooth を追加し、I2S および I2C バスを XVF3800 に直接配線してワイヤレス制御および音声転送を実現

- **柔軟なファームウェア構成**：2 チャネル版と 6 チャネル版の 2 種類の USB ファームウェア、I2S ファームウェア、dfu-util による DFU アップグレード、および電源再投入後も保持される設定

- **Python SDK**：録音フォーマット、音量、アルゴリズムパラメータ、チャネルルーティングを Python 経由で調整可能

## 主なコンポーネント 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）、AEC、ビームフォーミング、DoA、ノイズ抑圧など、すべてのオーディオ DSP を処理 |
| **オーディオコーデック** | TLV320AIC3104、オーディオ変換および DAC 出力を処理 |
| **FPC マイクアレイインターフェース** | ロックラッチ付き 24 ピン FPC コネクタで、2 本の GPIO ラインを備えた最大 8 マイクアレイをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロックラッチ付きコネクタで、USB-C ポートと同じ UAC 2.0 オーディオおよび DFU 機能を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動される側面出力のヘッドホン端子 |
| **スピーカー JST コネクタ** | 最大 10W・4Ω スピーカーを駆動可能な縦型実装コネクタで、直付け用スピーカーパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷に対応（P1 優先） |
| **RST ボタン** | XVF3800 用ハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けることで、ファームウェア復旧用のセーフモードに入る |
| **PWR LED** | 電源オンを示す緑色インジケータ |
| **デバッグパッド** | XMOS XTAG4 用の予約パッド（工場出荷時は未実装） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO を引き出したピンヘッダ／パッド |
| **取付穴** | 4 × M3 取付穴 |
| **XIAO ESP32S3** | ホストデバイスとして使用する際に XIAO ESP32S3 をはんだ付け可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO および周辺機能拡張に利用可能 |





### 円形アレイボード 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 44 mm ピッチで円形に配置された 4× PDM MEMS マイク |
| **収音パターン** | 360° 全方位収音 |
| **インターフェース** | コアボードと接続する FPC コネクタ |
| **取り付け** | エンクロージャやハウジングに固定するための 3 × M3 取付穴 |




### 直線型アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 33 mm ピッチで直線状に配置された 4× PDM MEMS マイク |
| **収音パターン** | およそ 180° の前方指向収音で、背面からの音を抑制 |
| **インターフェース** | FPC コネクタ；ケーブルは側面または背面から配線可能 |
| **取り付け** | 2 × M3 取付穴 |


### XIAO ESP32S3 サポート 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 のオーディオ処理パイプラインに Wi-Fi および Bluetooth 接続機能を追加できます。XIAO を含む SKU（-C4-1 および -L4-1）では、このモジュールが実装済みで出荷され、ベース SKU（-C4-0 および -L4-0）ではフットプリントは未実装のままです。
XIAO を搭載した場合、XIAO と XVF3800 の間には以下の接続が行われます。

- **I2S バス** — 再生用と録音用のデュアルバスで、双方向のオーディオストリーミングのために BCLK、MCLK、LRCLK を共有
- **I2C バス** — XIAO から XVF3800 の構成パラメータを読み書きするために使用
- **RST ライン** — XIAO は専用 IO ピンを介して XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザー拡張用にラベル付きピンヘッダ／パッドへ引き出し済み

オンボードアンテナ非搭載の XIAO ESP32S3 用に、FPC Wi-Fi アンテナが全ての XIAO 搭載バリアントに付属しています。

### ピンヘッダ 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 ピン FPC ケーブル 

FPC マイクアレイインターフェースは、ロックラッチ付きの 24 ピン・0.5mm ピッチコネクタであり、同梱の 20cm FPC フラットケーブルはこのコネクタにキーイングされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能の説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 電源 | マイク電源 | 3.3V 電源 |
| 2 | MIC_VDD | 電源 | マイク電源 | 電源安定性向上のためのデュアルピン |
| 3 | GND | GND | 電源リターングランド | 電源 GND |
| 4 | MIC_CLK | Out | グローバルクロック信号 | コア信号、2–4 MHz |
| 5 | GND | GND | クロックシールド用グランド | クロック専用グランド |
| 6 | MIC_D1 | In | データライン 1 | CH1 マイク |
| 7 | GND | GND | D1 アイソレーショングランド | |
| 8 | MIC_D2 | In | データライン 2 | CH2 マイク |
| 9 | GND | GND | D2 アイソレーショングランド | |
| 10 | MIC_D3 | In | データライン 3 | CH3 マイク |
| 11 | GND | GND | D3 アイソレーショングランド | |
| 12 | MIC_D4 | In | データライン 4 | CH4 マイク |
| 13 | GND | GND | D4 アイソレーショングランド | |
| 14 | MIC_D5 | In | データライン 5 | CH5 マイク |
| 15 | GND | GND | D5 アイソレーショングランド | |
| 16 | MIC_D6 | In | データライン 6 | CH6 マイク |
| 17 | GND | GND | D6 アイソレーショングランド | |
| 18 | MIC_D7 | In | データライン 7 | CH7 マイク |
| 19 | GND | GND | D7 アイソレーショングランド | |
| 20 | MIC_D8 | In | データライン 8 | CH8 マイク |
| 21 | GND | GND | D8 アイソレーショングランド | |
| 22 | GPIO_1 | I/O | 汎用入出力 | 拡張機能 |
| 23 | GPIO_2 | I/O | 汎用入出力 | 拡張機能 |
| 24 | GND | GND | GPIO シールド用グランド | GPIO ノイズを吸収 |

## はじめに

### ハードウェアの準備

- USB Type-C ケーブル
- ホストコンピュータ または Raspberry Pi

### ソフトウェアの準備

### 開封後すぐの使い方

#### リセット

リセット（RST）ボタンを押すと reSpeaker Flex にハードウェアリセットがかかり、チップが再起動してシステムが最初から再初期化されます。これは完全な電源の入れ直しと同じ動作です。

#### スピーカー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

ここでは、オーディオ出力の好みに応じて、3.5mm AUX ヘッドホンジャックまたはオンボードの JST スピーカーインターフェースのいずれかを使用してスピーカーを接続する方法を確認できます。

#### セーフモード

**Safe Mode** は **reSpeaker Flex** 上の特別なリカバリーモードで、**USB DFU** または I2C（Raspberry Pi や **ESP32** などのデバイス向け）経由でファームウェアを書き込むことができます。

以前に **I2S ファームウェア** を書き込んでいて、**USB ファームウェア** に戻したい場合は、**Safe Mode** に入って **USB DFU** を使用して USB ファームウェアを書き込みし直すことができます。

:::note
- USB ファームウェア
    - USB DFU のみをサポートします。
    - USB 接続を通してデバイスを更新できます。
    - I2C DFU はサポートしていません。
- I2S ファームウェア
    - I2C DFU をサポートします。
    - I2C インターフェース経由でファームウェア更新が可能です。
    - USB DFU はサポートしていません。
- セーフモードファームウェア
    - Factory パーティションに保存されています。
    - USB DFU と I2C DFU の両方をサポートします。
    - 最も柔軟なリカバリーファームウェアです。

:::

**次のような場合に Safe Mode を使用します**

- ファームウェアが**正しく動作していない**（例：**USB が認識されない**）場合。
- **新しいファームウェアを書き込みたい**が、現在のファームウェアが**応答しない**場合。
- **誤って間違ったファームウェアを書き込んでしまい**、デバイスを復旧したい場合。


 **Safe Mode に入る手順**

- デバイスの電源を**完全にオフ**にします。
- **Boot ボタンを押し続けます。**
- **Boot ボタンを押したまま、電源を再接続します。**
- **赤色 LED が点滅し始めたら**、デバイスが **Safe Mode** に入ったことを示します。
これでデバイスは Factory パーティションに保存されている **セーフモードファームウェア** を実行しています。


### ファームウェアの更新

公式 GitHub リポジトリには 3 つのファームウェアバージョンが用意されています。用途に応じて適切なファームウェアを選択して書き込むことができます。詳細とダウンロードについては Github の [Link](https://github.com/respeaker/reSpeaker_Flex) を参照してください。

:::note 
リポジトリ全体をダウンロードする必要があることを確認してください。
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB ファームウェアは、USB ハードウェアインターフェースを介して通信する **Windows、Linux、macOS** などのホストオペレーティングシステムでの使用を目的としています。
ファームウェアには 2 つのバリエーションがあります。2 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin** と、6 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin** です。どちらのファームウェアも、16 kHz サンプリングレートおよび 32 ビット深度で動作します。

これらのファームウェアファイルはこのリンクから参照できます。

| ファームウェア                         | チャンネル数 | 備考                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 チャンネル | 16 kHz、円形マイクアレイを使用した 6 チャンネル             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 チャンネル | 16 kHz、直線マイクアレイを使用した 6 チャンネル               |
| respeaker_flex_ua-io16-cir.bin     | 2 チャンネル | 16 kHz、円形マイクアレイを使用したステレオ出力          |
| respeaker_flex_ua-io16-lin.bin     | 2 チャンネル | 16 kHz、直線マイクアレイを使用したステレオ出力            |
| respeaker_flex_ua-io48-cir.bin     | 2 チャンネル | 48 kHz、円形マイクアレイを使用したステレオ出力          |
| respeaker_flex_ua-io48-lin.bin     | 2 チャンネル | 48 kHz、直線マイクアレイを使用したステレオ出力            |

reSpeaker Flex を USB ケーブルで PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>

 <TabItem value="I2S" label="I2S">

I2S ファームウェアは、XIAO ESP32S3 などのマイコンホストにデバイスを接続して使用することを想定しています。この構成では、音声データは I2S プロトコルを使用して送信されます。ファームウェアファイル **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** はここで利用できます。このファームウェアは、16 kHz サンプリングレート・32 ビット深度の 2 チャンネルオーディオをサポートします。

| ファームウェア                                      | チャンネル数 | 備考                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、円形マイクアレイ   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、直線マイクアレイ|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、円形マイクアレイ|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、直線マイクアレイ|

reSpeaker Flex を USB ケーブルで PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要があることに注意してください。

</TabItem>
</Tabs>

### DFU Util のインストール


`dfu-util` は USB を介して Device Firmware Upgrade を行うためのコマンドラインツールです。

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして解凍します。例：`D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` のパスを追加します。  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- **Command Prompt**（`cmd`）を開き、インストールを確認します：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- reSpeaker Flex を接続し、デバイスが検出されているか確認します：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 次のようなメッセージが表示された場合：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 以下のドライバーインストール手順に進んでください。

- [Zadig](https://zadig.akeo.ie/) をインストールします。  
  - Zadig を開き、`Options > List All Devices` を選択します。  
  - `reSpeaker XVF3800 Flex` を選択します。  
  - **WinUSB** ドライバーをインストールします。  
  - デバイスの電源を入れ直します。  
  - 再度 `dfu-util -l` を実行して検出を確認します。

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

**期待される出力：**

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

**期待される出力：**

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

- 次のコマンドを実行してファームウェアを書き込みます

    - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- Linux では sudo を付けて実行します

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
2. これで準備完了です。録音を開始しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity の設定（macOS）

1. **Audacity** を開きます。
2. **Audio Setup** に移動し、**Recording Device** として **reSpeaker 3800 Flex** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** に進み、以下のように設定します:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方に設定）
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. **OK** をクリックします
5. 録音の準備完了です！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Raspberry Pi での録音（コマンドライン）

1. **サウンドカード番号を確認する**:

```bash
arecord -l
```

出力例:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 この場合、**カード番号は 3** です

---

2. **音声を録音する（5 秒間）**:

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `3` を実際のサウンドカード番号に置き換えてください

---

3. **ALSA 上で reSpeaker XVF3800 の音量を調整する**

```bash
alsamixer
```

alsamixer では、左右の矢印キーを使用して正しいサウンドデバイスに移動します。上矢印キーで音量を上げることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**:

```bash
aplay -D plughw:3,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストールする（まだインストールしていない場合）**

Raspberry Pi 上でターミナルを開きます。Pi-Apps をインストールするために次のコマンドを実行します

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。メニューに新しい Pi-Apps アイコンが表示されます。

2. **Pi-Apps 経由で Audacity をインストールする**

3. **オーディオ入力と出力を設定する**

- ツールバーで "Audio Setup" をクリックします。
- ドロップダウンメニューから "Audio Settings" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settings ウィンドウで次のように設定します:
  - 正しい Recording Device を選択します（例: reSpeaker XVF3800 Flex）。
  - 適切な Playback Device を選択します（例: reSpeaker XVF3800 Flex）。
  - Raspberry Pi での互換性を高めるため、Host が ALSA に設定されていることを確認します。
- 設定を適用するには OK をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声を録音して再生する**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>


## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が当社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



