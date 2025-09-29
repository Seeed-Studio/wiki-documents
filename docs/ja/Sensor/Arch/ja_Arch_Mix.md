---
description: Arch Mix
title: Arch Mix
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_Mix
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Arch_Mix/img/main1.jpg)

Arch Mixは、NXP i.MX RT1052プロセッサ（3020 CoreMark/1284 DMIPS @ 600 MHz）をベースにした薄型で軽量な開発ボードです。これにより、大規模なコードや高いリアルタイム性が求められるアプリケーションに特に適した産業用制御に適しています。

i.MX RT1052は、NXPが提供するArm Cortex®-M7コアの高度な実装を特徴とする新しいプロセッサファミリです。現在、i.MX RT1052は最高性能のCortex-M7ソリューションであり、3036 CoreMarksを提供し、LPC1788マイクロコントローラの13倍の性能を発揮します。高速性能に加え、高速なリアルタイム応答性も提供します。また、i.MX RT1050はLCDディスプレイ、基本的な2Dグラフィックス、カメラインターフェース、SPDIF、I2Sオーディオインターフェースなど、豊富なオーディオおよびビデオ機能を備えています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Arch-Mix-p-2901.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
Arch Mixの初期ファームウェアはRT-Threadであり、これは非推奨です。このWikiに従ってArduinoブートローダーをArch Mixにフラッシュし、Arduino開発ボードとして使用してください。
:::

## アプリケーションアイデア

- 産業用制御
- スマートビルディング
- 産業用ヒューマンマシンインターフェース
- 自動化およびプロセス制御
- ロボット

## 特徴

- ARM® Cortex®-M7 600MHzマイクロコントローラ（NXP i.MX RT1052）
- 超高速システムロード速度
- 豊富な周辺インターフェース：RMII、CAN、I2C、UART、CSI、I2S、ADC、SPDIF IN/OUT、SWD
- RT1052/1050の他のデモボードよりも小型：67mm x 39mm

## 仕様

| パラメータ | 値 |
|----|----|
| **プロセッサ：NXP i.MX RT1052** ||
| プラットフォーム | ARM Cortex-M7 MPCore |
| 周波数 | 600 MHz |
| ブートROM | 96KB |
| オンチップRAM | 512KB |
| **メモリ** ||
| SDRAM | 32MB |
| QSPIフラッシュ | 8MB |
| HyperFlash（オプション） | 64MB |
| **接続性** ||
| USB 2.0ホスト | x1 |
| USB 2.0 OTG、およびDC 5V電源入力 | x1 |
| ブート構成DIPスイッチ | x1 |
| LED | 電源LED x1<br />ユーザーRGB LED x1 |
| ボタン | リセットボタン x1、オン/オフボタン x1、ユーザーボタン x1 |
| 24ビットRGB LCDインターフェース | x1 |
| Micro SDカードコネクタ | x1 |
| RTC 3Vバッテリーコネクタ | x1 |
| 22ピンヘッダー | RMII、CAN、I2C、UART、CSI、I2S、<br /> ADC、SPDIF IN/OUT、SWD |

<div align="center"><b>表1.</b><i>仕様</i></div>

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" /></a></p>
  <figcaption><b>図1</b>. <i>前面ハードウェア概要</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" /></a></p>
  <figcaption><b>図2</b>. <i>背面ハードウェア概要</i></figcaption>
</figure>
</div>

:::note
<font color="red"><b>*0</b></font> Arch MixをUSB OTGポートで電源供給する必要があります。USB HOSTとUSB OTGの違いについては、[こちら](https://www.quora.com/What-is-the-difference-between-USB-host-VS-USB-OTG)をご確認ください。
<br />
<br />
<font color="red"><b>*1</b></font> フラッシュには2つのオプションを提供しています。64M HyperFlash（U7-デフォルトDNP）または8M QSPIフラッシュ（U11-デフォルト選択）を使用できます。
<br />
<br />
<font color="red"><b>*2</b></font> USB OTGでボードに電源を供給した後、このボタンを押し続ける（約3〜5秒）ことでシステムをオン/オフできます。
<br />
<br />
<font color="red"><b>*3</b></font> このポートは1.25mm CR2032バッテリーポートであり、Li-Poバッテリーを接続しないでください。RTC機能を使用する場合は、Amazonや他のウェブサイトで「CR2032 Battery with Wire Leads」を検索してください。
:::

**電源**

Micro-USB **OTG**ポートを通じて電源を供給してください。

:::caution

- 入力電源電圧は5Vで、5.5Vを超えてはいけません。  
- すべてのデジタルおよびアナログIOインターフェースレベルは3.3Vです。3.3Vを超える入力をしないでください。そうしないとCPUが損傷する可能性があります。  
- RTCのバッテリー電源インターフェース（J6）には約3Vのボタン電池のみを接続できます。電圧は3.6Vを超えてはいけません。
:::

**スイッチ**

Arch Mixは、HyperFlash、QSPI Flash、SDカードの3つの異なるブートモードに構成できます。デフォルトではQSPI Flashを使用します。ブートモードを変更する場合は、DIPスイッチを対応する位置に変更する必要があります。

DEVICE | BOOT_CFG | SW1の4つのキーの値
---|---|---
HyperFlash|0x02_00|0 , 1 , 1 , 0
QSPI Flash|0x00_00|0 , 0 , 1 , 0
SD|0x00_40|1 , 0 , 1 , 0

<div align="center"><b>表2.</b><i>ブート構成</i></div>

**ボタン**

このボードには3つのボタンがあります。機能表をご確認ください。

名前|機能|詳細
---|---|---
SW2|ユーザーボタン|ユーザー設定用。この開発ボードではNo.125ピンがSW2です。
SW3|リセット|システムリセット。このボタンを押すとシステムが再起動します。
SW4|電源オン/オフ|このボタンを押し続ける（約3〜5秒）ことでシステムをオン/オフします。

<div align="center"><b>表3.</b><i>ボタン機能表</i></div>

**LCDインターフェース**

ご覧の通り、このボードには50ピンのLCDインターフェースがあり、最大1366 x 768 WXGA解像度をサポートします。このボード用のLCDスクリーンが必要な場合は、LCD8000シリーズスクリーンを使用できます。以下のリンクをご確認ください。

[NXPのLCD](https://www.nxp.com/support/developer-resources/software-development-tools/i.mx-developer-resources/evaluation-kit-for-the-i.mx-6ull-and-6ulz-applications-processor:MCIMX6ULL-EVK?tab=Buy_Parametric_Tab#/)  
[EmbestのLCD](http://www.embest-tech.com/prod_view.aspx?TypeId=118&Id=277)

### ピン配置

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" /></a></p>
  <figcaption><b>図3</b>. <i>ピン配置。画像をクリックして元のファイルを表示</i></figcaption>
</figure>
</div>

:::tip
NXP i.MX RT1050プロセッサのほとんどのピンには多重化機能があります。詳細なピン多重化については、以下の添付ファイルをクリックしてご覧ください。
:::

[Arch Mix ピン定義表](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

### ブロック図

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" /></a></p>
  <figcaption><b>図4</b>. <i>Arch Mix ブロック図。画像をクリックすると元のファイルを表示できます。</i></figcaption>
</figure>
</div>

### 寸法図

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" /></a></p>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" /></a></p>
  <figcaption><b>図5</b>. <i>基板寸法、単位(mm)</i></figcaption>
</figure>
</div>

## Arch MixへのArduinoブートローダーの書き込み

Arch Mixに**Arduinoブートローダー**をフラッシュして、Arduinoボードのように使用することができます！これは市場で最も強力な（Cortex M7）Arduinoボードの1つかもしれません。

### スイッチ設定

スイッチが以下の順序で**QSPI**から実行されることを確認してください：

- **0010**

### 必要なハードウェア

- Arch Mix x 1

- **J-Linkデバッグプローブ** x 1

### 始め方

- PCのOSに応じて、公式サイトから[**J-Flash**](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)ソフトウェアをダウンロードしてインストールします。

- **J-Flashのインストールパス**を見つけ、以下の変更を行います。

- インストールされた場所に移動します：`SEGGER/JLink_V686/Devices/NXP/iMXRT105x`

> 例えば、macOSの場合、インストールパスは次のようになります：`/Applications/SEGGER/JLink_V686/Devices/NXP/iMXRT105x`

- **[iMXRT105x.zip](https://files.seeedstudio.com/wiki/Arch_Mix/res/iMXRT105x.zip)**をダウンロードして解凍し、このパスにファイルを貼り付けて置き換えます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/1.png"/></div>

- `SEGGER/JLink_V686`のルートディレクトリに戻ると、**`JLinkDevices.xml`**という名前のファイルがあるはずです。このファイルをエディタで開き、`NXP_iMXRT105x_`を検索します。いくつかのオプションが表示されるはずです。以下のコードを、図で示されているセクションと同じ場所にコピー＆ペーストします：

```xml
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1051QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1052QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/2.png"/></div>

- ファイルを保存します。

- これでJ-Flashが設定され、J-Flashソフトウェアを開くことができます。

- 新しいJ-Flashプロジェクトを作成し、チップとして**MCIMXRT1052QSPI**を選択します。フィルタを使用してこのチップを見つけることができます。このチップが表示されない場合は、以前のJ-Flash設定に問題がある可能性があるため、再度確認してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/3.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/4.png"/></div>

- [**Arduino Bootloader for Arch Mix**](https://files.seeedstudio.com/wiki/Arch_Mix/res/bootloader.hex)をここからダウンロードします。また、[**ソースコード**](https://github.com/Seeed-Studio/ArduinoCore-imxrt)をGitHubで確認することもできます。

- このhexブートローダーをJ-Flashにドラッグします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/5.png"/></div>

- **J-LinkのSWDピンをArch MixのSWDピンに接続**します。
  - DIOをDIOに接続
  - CLKをCLKに接続
  - GNDをGNDに接続

- J-Flashの左上のドロップダウンメニューから**Target** -> **Connect**を選択します。接続されると、以下が表示されます：

> 接続できない場合は、J-LinkとArch Mixの配線を再度確認してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/6.png"/></div>

- **Target** -> **Production Programming**を選択して、ブートローダーをArch Mixにフラッシュします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/7.png"/></div>

- Arch Mixをリセットすると、Arduinoブートローダーがフラッシュされます！

### Arduinoの始め方

- Arduino IDEにArch Mixボードライブラリを追加します：

Arduino IDEを開き、**ファイル** > **環境設定**をクリックし、以下のURLを**追加のボードマネージャURL**にコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

**ツール** > **ボード** > **ボードマネージャ**をクリックし、ボードマネージャでArch Mixを検索します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/IDE.png"/></div>

- LED点滅の例スケッチを開きます：**ファイル** > **スケッチ例** > **01.Basics** > **Blink**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/></div>

- **ツール** > **ボード**メニューで、Arduinoに対応するエントリを選択します。Arch Mixを選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/board.png"/></div>

- 正しいポートを選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/port.png"/></div>

- アップロードをクリックすると、Arch MixのLEDが点滅を開始します！これで強力なCortex M7ボードを手に入れました！

:::note
Arduinoのピンマップについては、[こちら](https://github.com/Seeed-Studio/ArduinoCore-imxrt/blob/master/variants/arch_mix/variant.h)を参照してください。
:::

## NXPBooTUtilityを使用してArduinoブートローダーをフラッシュする

**J-Linkをお持ちでない場合**でも、[**NXP Boot Utility**](https://github.com/JayHeng/NXP-MCUBootUtility)を使用してブートローダーをフラッシュする方法があります。ただし、**このツールはWindowsのみ対応**です。

- [NXP Boot Utility](https://github.com/JayHeng/NXP-MCUBootUtility)をダウンロードします。

```sh
git clone https://github.com/JayHeng/NXP-MCUBootUtility
```

- **NXP-MCUBootUtility**フォルダに移動し、`NXP-MCUBootUtility/bin`に進んで**NXP-MCUBootUtility.exe**を開きます。

- アーチミックスの**Rxピン**を**3.3Vピン**にメスジャンパーワイヤーで接続し、**スイッチを0001に調整**します。

- アーチミックスをコンピュータに接続すると、以下の画面が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-1.png"/></div>

- **Boot Device Configuration**をクリックし、Flashを選択して**OK**をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-2.png"/></div>

- **Connect to ROM**をクリックしてダウンロードモードに入ります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-3.png"/></div>

- ブートローダーを選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-4.png"/></div>

- **All in One Action**をクリックすると、ブートローダーがアーチミックスにダウンロードされます！

- フラッシュが完了したら、**スイッチを0010に戻し**、リセットボタンを押します。これで、NXP Boot Utilityを使用してアーチミックスにArduinoブートローダーがフラッシュされました！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>スイッチを0010に戻して、QSPIフラッシュからブートし、Arduino開発ボードとして動作するようにしてください。</p>
  </div>
</div>

## リソース

[Arch Mix Firmware Guide](https://files.seeedstudio.com/wiki/Arch_Mix/res/micropython_firmware.pdf)  
[ツール](https://files.seeedstudio.com/wiki/GM6020/res/Firmware_and_Tools.zip)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Mix/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [回路図](https://files.seeedstudio.com/wiki/Arch_Mix/res/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip)
- **[ZIP]** [ファームウェアとツール](#)
- **[PDF]** [PDF形式のWiki](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch_Mix.pdf)
- **[PDF]** [i.MX RT1050データシート](https://files.seeedstudio.com/wiki/Arch_Mix/res/i.MX%20RT1050.pdf)
- **[PDF]** [寸法図](https://files.seeedstudio.com/wiki/Arch_Mix/res/ARCH%20MIX_V1.0_Dimension.pdf)
- **[xlsx]** [Arch Mix_v1.0_ピン機能](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>