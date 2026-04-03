---
description: reSpeaker Flex は XMOS XVF3800 を搭載した高性能なモジュラー音声システムで、円形および線形の交換可能な 4 マイクアレイにより、ロボットやスマートデバイスに最適な、精密な 360° または指向性の音声取得を実現します。
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

reSpeaker Flex は XMOS XVF3800 プロセッサを中核としたモジュラー分離アーキテクチャの音声処理システムで、ロボットおよびインテリジェントインタラクション端末向けに特別設計されています。従来の一体型マイクアレイとは異なり、Flex ではコア処理ボードとマイクアレイボードを分離し、柔軟な FPC フラットケーブルで接続します。これにより、マイクアレイを製品筐体内の任意の物理位置に組み込みつつ、処理回路を別の場所に配置できます。
本システムは 2 つの交換可能なマイクアレイ構成をサポートします。すなわち、全方位 360° 取得用の**円形 4 マイクアレイ**と、背面抑圧付き前方指向の**線形 4 マイクアレイ**です。いずれのボードも共通の 24 ピン FPC インターフェースを介して同じコアボードに接続され、システムは USB（UAC 2.0 プラグアンドプレイ）または組み込み向け統合用の I2S モードで動作します。オプションとして XIAO ESP32S3 モジュールをコアボード上にはんだ付けでき、無線接続と拡張制御を追加できます。

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



### 線形マイクシリーズ 

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

- **分離モジュラー設計**：コアボードとマイクアレイボードを物理的に分離し、FPC フラットケーブルで接続することで、任意の製品筐体内に柔軟に配置可能

- **マイク構成の選択肢**：同一のコアボードを用いて、円形 4 マイクアレイ（360° ピックアップ、44mm ピッチ）または線形 4 マイクアレイ（前方 180° 指向性、33mm ピッチ）を切り替え可能

- **XMOS XVF3800 オーディオ処理**：AEC、AGC、DoA、多チャンネルビームフォーミング、VAD、ノイズ抑圧、残響除去を含むフル機能のオーディオ DSP

- **2 つの動作モード**：PC や SBC とプラグアンドプレイで使用できる USB UAC 2.0 と、組み込み用途向けの直接統合用 I2S モード

- **デュアル USB 接続**：USB-C ポートと PH2.0 ロック式ポートの両方が、UAC 2.0 オーディオおよび DFU ファームウェアアップグレードに対応

- **オンボードスピーカーアンプ**：JST コネクタ経由で 10W 4Ω スピーカーを駆動可能、3.5mm AUX ヘッドホン出力付き

- **XIAO ESP32S3 対応（オプション）**：はんだ付けモジュールにより Wi-Fi/Bluetooth を追加し、I2S および I2C バスを XVF3800 に直接接続して無線制御とオーディオ転送を実現

- **柔軟なファームウェア**：2 チャンネルおよび 6 チャンネルの 2 種類の USB ファームウェア、I2S ファームウェア、`dfu-util` による DFU アップグレード、および電源再投入後も保持される設定

- **Python SDK**：Python 経由で録音フォーマット、音量、アルゴリズムパラメータ、チャンネルルーティングを調整可能

## 主な構成要素 

### コアボード

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **メインオーディオプロセッサ** | XMOS XVF3800（ファームウェア v3.2.1）。AEC、ビームフォーミング、DoA、ノイズ抑圧など、すべてのオーディオ DSP を処理 |
| **オーディオコーデック** | TLV320AIC3104。オーディオ変換および DAC 出力を処理 |
| **FPC マイクアレイインターフェース** | ロックラッチ付き 24 ピン FPC コネクタ。2 本の GPIO ライン付きで最大 8 マイクアレイをサポート |
| **USB-C ポート** | UAC 2.0 オーディオ、DFU ファームウェアアップグレード、および電源供給 |
| **PH2.0 ポート** | ロックラッチ付きコネクタ。USB-C ポートと同等の UAC 2.0 オーディオおよび DFU を提供 |
| **3.5 mm AUX ジャック** | オンボード DAC から駆動されるサイド出力ヘッドホン端子 |
| **スピーカー JST コネクタ** | 最大 10W/4Ω スピーカーを駆動可能な縦型コネクタ。直結用のスピーカーはんだパッドも用意 |
| **外部電源端子** | システム全体に 12V を供給し、10W スピーカー負荷に対応（P1 優先） |
| **RST ボタン** | XVF3800 用のハードウェアリセット |
| **SafeMode（ブート）ボタン** | 電源投入時に押し続けることで、ファームウェアリカバリ用のセーフモードに入る |
| **PWR LED** | 電源オンを示す緑色インジケータ |
| **デバッグパッド** | XMOS XTAG4 用の予約パッド（工場出荷時は未はんだ付け） |
| **XMOS 3800 IO ヘッダ** | I2C、I2S、5V/GND、スピーカーピン、および残りの XVF3800 IO を引き出したピンヘッダ／パッド |
| **取付穴** | M3 取付穴 × 4 |
| **XIAO ESP32S3** | ホストデバイスとして使用する際に XIAO ESP32S3 をはんだ付け可能 |
| **XIAO ESP32S3 GPIO** | 残りの GPIO は IO および周辺拡張に使用可能 |





### 円形アレイボード 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/circle.png" alt="pir" width={500} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4× PDM MEMS マイクを 44mm ピッチで円形に配置 |
| **ピックアップパターン** | 360° 全方位の音声取得 |
| **インターフェース** | コアボードへの FPC コネクタ |
| **取付** | エンクロージャや筐体への固定用 M3 取付穴 × 3 |




### 線形アレイボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/linear.png" alt="pir" width={500} height="auto" /></p>

| コンポーネント / 機能 | 説明 |
|--------------------|------------|
| **マイク** | 4× PDM MEMS マイクを 33mm ピッチで線形に配置 |
| **ピックアップパターン** | 約 180° の前方ピックアップパターンで、背面の音を抑圧 |
| **インターフェース** | FPC コネクタ。ケーブルは側面または背面から配線可能 |
| **取付** | M3 取付穴 × 2 |


### XIAO ESP32S3 対応 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

reSpeaker Flex コアボードには、Seeed Studio XIAO ESP32S3 モジュールをはんだ付けするための専用フットプリントが用意されており、XVF3800 の音声処理パイプラインに Wi-Fi および Bluetooth 接続機能を追加できます。XIAO を含む SKU（-C4-1 および -L4-1）には、このモジュールが実装済みで出荷されます。ベース SKU（-C4-0 および -L4-0）では、このフットプリントは未実装のままです。
XIAO が実装されている場合、XIAO と XVF3800 の間には次の接続が行われます。

- **I2S バス** — 再生および録音用のデュアルバスで、BCLK、MCLK、LRCLK を共用し、双方向のオーディオストリーミングを実現
- **I2C バス** — XIAO から XVF3800 の設定パラメータを読み書きするためのバス
- **RST ライン** — 専用 IO ピンを介して、XIAO から XVF3800 にハードウェアリセットをかけることが可能
- **残りの XIAO IO** — ユーザー拡張用として、ラベル付きピンヘッダ／パッドに引き出し

オンボードアンテナ非搭載の XIAO ESP32S3 用に、FPC Wi-Fi アンテナが全ての XIAO 搭載バリアントにアクセサリとして同梱されています。

### ピンヘッダ 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### 24 ピン FPC ケーブル 

FPC マイクアレイインターフェースは、ロックラッチ付きの 24 ピン・0.5mm ピッチコネクタで、同梱の 20cm FPC フラットケーブルはこのコネクタに合わせてキーイングされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| ピン | 信号名 | 種類 | 機能説明 | 備考 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 電源 | マイク電源 | 3.3V 電源 |
| 2 | MIC_VDD | 電源 | マイク電源 | 電源安定性を高めるための二重ピン |
| 3 | GND | GND | 電源リターングラウンド | 電源 GND |
| 4 | MIC_CLK | Out | グローバルクロック信号 | コア信号、2–4 MHz |
| 5 | GND | GND | クロックシールド用グラウンド | クロック専用グラウンド |
| 6 | MIC_D1 | In | データライン 1 | CH1 マイク |
| 7 | GND | GND | D1 アイソレーション用グラウンド | |
| 8 | MIC_D2 | In | データライン 2 | CH2 マイク |
| 9 | GND | GND | D2 アイソレーション用グラウンド | |
| 10 | MIC_D3 | In | データライン 3 | CH3 マイク |
| 11 | GND | GND | D3 アイソレーション用グラウンド | |
| 12 | MIC_D4 | In | データライン 4 | CH4 マイク |
| 13 | GND | GND | D4 アイソレーション用グラウンド | |
| 14 | MIC_D5 | In | データライン 5 | CH5 マイク |
| 15 | GND | GND | D5 アイソレーション用グラウンド | |
| 16 | MIC_D6 | In | データライン 6 | CH6 マイク |
| 17 | GND | GND | D6 アイソレーション用グラウンド | |
| 18 | MIC_D7 | In | データライン 7 | CH7 マイク |
| 19 | GND | GND | D7 アイソレーション用グラウンド | |
| 20 | MIC_D8 | In | データライン 8 | CH8 マイク |
| 21 | GND | GND | D8 アイソレーション用グラウンド | |
| 22 | GPIO_1 | I/O | 汎用入出力 | 拡張機能 |
| 23 | GPIO_2 | I/O | 汎用入出力 | 拡張機能 |
| 24 | GND | GND | GPIO シールド用グラウンド | GPIO ノイズの吸収 |

## はじめに

### ハードウェアの準備

- USB Type-C ケーブル
- ホストコンピュータ または Raspberry Pi

### ソフトウェアの準備

### 箱から出してすぐに使う

#### リセット

リセット（RST）ボタンを押すと reSpeaker Flex にハードウェアリセットがかかり、チップが再起動してシステムが最初から再初期化されます。これは、完全な電源の入れ直しと同じ動作です。

#### スピーカー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

ここでは、音声出力の好みに応じて、3.5mm AUX ヘッドホンジャック、またはオンボードの JST スピーカーインターフェースのいずれかを使用してスピーカーを接続する方法を確認できます。

#### セーフモード

**Safe Mode** は **reSpeaker Flex** 上の特別なリカバリモードで、**USB DFU** または Raspberry Pi や **ESP32** のようなデバイス向けの I2C を介してファームウェアを書き込むことができます。

以前に **I2S ファームウェア**を書き込んでいて、**USB ファームウェア**に戻したい場合は、**Safe Mode** に入って **USB DFU** を使用して USB ファームウェアを書き直すことができます。

:::note
- USB ファームウェア
    - USB DFU のみをサポートします。
    - USB 接続を通してデバイスを更新できます。
    - I2C DFU はサポートしません。
- I2S ファームウェア
    - I2C DFU をサポートします。
    - I2C インターフェースを介したファームウェア更新を可能にします。
    - USB DFU はサポートしません。
- Safe Mode ファームウェア
    - Factory パーティションに格納されています。
    - USB DFU と I2C DFU の両方をサポートします。
    - これは最も柔軟なリカバリ用ファームウェアです。

:::

**次のような場合に Safe Mode を使用します**

- ファームウェアが**正しく動作していない**（例えば、**USB が検出されない**）場合。
- **新しいファームウェアを書き込み**たいが、現在のファームウェアが**応答しない**場合。
- **誤ったファームウェアを書き込んでしまい**、デバイスを復旧したい場合。


 **Safe Mode に入る方法**

- デバイスの電源を**完全に切ります**。
- **Boot ボタンを押し続けます**。
- **Boot ボタンを押し続けたまま、電源を再接続します。**
- **赤色 LED が点滅し始め**、デバイスが **Safe Mode** に入ったことが確認できます。
これでデバイスは、Factory パーティションに格納されている **Safe Mode ファームウェア**を実行しています。


### ファームウェアの更新

公式 GitHub リポジトリには 3 つのファームウェアバージョンが用意されています。用途に応じて適切なファームウェアを選択し、書き込むことができます。詳細およびダウンロードについては Github の [Link](https://github.com/respeaker/reSpeaker_Flex) を参照してください。

:::note 
必ずリポジトリ全体をダウンロードしてください。
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB ファームウェアは、USB ハードウェアインターフェース経由で通信する際に、**Windows、Linux、macOS** などのホスト OS と共に使用するよう設計されています。
利用可能なファームウェアには 2 つのバリエーションがあります。2 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin** と、6 チャンネルオーディオを提供する **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin** です。どちらのファームウェアも、16 kHz サンプリングレート、32 ビット深度で動作します。

これらのファームウェアファイルはこのリンクから確認できます

| ファームウェア                         | チャンネル数 | 備考                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 チャンネル | 16 kHz、円形マイクアレイを使用した 6 チャンネル          |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 チャンネル | 16 kHz、リニアマイクアレイを使用した 6 チャンネル        |
| respeaker_flex_ua-io16-cir.bin     | 2 チャンネル | 16 kHz、円形マイクアレイを使用したステレオ出力           |
| respeaker_flex_ua-io16-lin.bin     | 2 チャンネル | 16 kHz、リニアマイクアレイを使用したステレオ出力         |
| respeaker_flex_ua-io48-cir.bin     | 2 チャンネル | 48 kHz、円形マイクアレイを使用したステレオ出力           |
| respeaker_flex_ua-io48-lin.bin     | 2 チャンネル | 48 kHz、リニアマイクアレイを使用したステレオ出力         |

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要がある点に注意してください。

</TabItem>

 <TabItem value="I2S" label="I2S">

I2S ファームウェアは、XIAO ESP32S3 のようなマイコンホストにデバイスを接続して使用することを想定しています。この構成では、音声データは I2S プロトコルを使って送信されます。ファームウェアファイル **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** はここで入手できます。このファームウェアは、16 kHz サンプリングレート、32 ビット深度の 2 チャンネルオーディオをサポートします。

| ファームウェア                                      | チャンネル数 | 備考                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、円形マイクアレイ   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 チャンネル | 16 kHz、ステレオ出力、リニアマイクアレイ|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、円形マイクアレイ|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 チャンネル | 48 kHz、ステレオ出力、リニアマイクアレイ|

USB ケーブルで reSpeaker Flex を PC に接続します。XMOS のファームウェアを書き込むには、XMOS USB-C ポート（RST ボタンの近く）を使用する必要がある点に注意してください。

</TabItem>
</Tabs>

### DFU Util のインストール


`dfu-util` は、USB 経由で Device Firmware Upgrade を行うためのコマンドラインツールです。

<Tabs>
<TabItem value="windows" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードして展開します（例：`D:\dfu-util-0.11-binaries\win64\`）  
  [Download Link](http://dfu-util.sourceforge.net/)

- システムの `Path` 変数に `dfu-util.exe` へのパスを追加します：  
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
> 下記のドライバインストール手順を実行してください。

- [Zadig](https://zadig.akeo.ie/) をインストールします  
  - Zadig を開き → `Options > List All Devices` を選択  
  - `reSpeaker XVF3800 Flex` を選択  
  - **WinUSB** ドライバをインストール  
  - デバイスの電源を入れ直す（Power-cycle）  
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

GitHub から reSpeaker Flex XVF 3800 の完全なファームウェアリポジトリをダウンロードします

- 次のコマンドを実行してファームウェアを書き込みます

    - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- Linux では sudo を付けて実行します

    - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin



## USB ファームウェアで録音と再生を行う


<Tabs>
<TabItem value="windows" label="Windows">

### Audacity の設定（Windows）

1. **Audacity** を開きます
2. **Audio Setup > Audio Settings** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. 次のように設定します：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. **OK** をクリックします
2. 準備完了です — 録音を開始しましょう！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Audacity の設定（macOS）

1. **Audacity** を開きます
2. **Audio Setup** に移動し、**Recording Device** として **reSpeaker 3800 Flex** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. **Audio Setting** に移動して以下のように設定します：

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

2. **音声を録音する（5 秒間）**：

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 `3` を実際のサウンドカード番号に置き換えてください

---

3. **ALSA で reSpeaker XVF3800 の音量を調整する**

```bash
alsamixer
```

alsamixer では、左右の矢印キーで正しいサウンドデバイスに移動します。上矢印キーで音量を上げます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **再生**：

```bash
aplay -D plughw:3,0 output.wav
```

### Raspberry Pi での録音（Audacity）

1. **Pi-Apps をインストールします（まだインストールしていない場合）**

Raspberry Pi でターミナルを開きます。次のコマンドを実行して Pi-Apps をインストールします

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

インストールが完了するまで待ちます。メニューに新しい Pi-Apps アイコンが表示されます。

2. **Pi-Apps から Audacity をインストールします**

3. **オーディオ入力と出力を設定します**

- ツールバーの "Audio Setup" をクリックします。
- ドロップダウンメニューから "Audio Settings" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Audio Settings ウィンドウで：
  - 正しい Recording Device を選択します（例：reSpeaker XVF3800 Flex）。
  - 適切な Playback Device を選択します（例：reSpeaker XVF3800 Flex）。
  - Raspberry Pi で最も高い互換性を得るために、Host が ALSA に設定されていることを確認します。
- 設定を適用するために OK をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **音声を録音して再生します**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>


## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご使用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



