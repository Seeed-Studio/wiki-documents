---
title: DSO Quad
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Quad/
slug: /ja/DSO_Quad
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad（DSO203としても知られる）は、一般的な電子工学作業向けのポケットサイズの4チャンネルデジタルオシロスコープです。ARM Cortex M3（STM32F103VCT6）をベースにしており、統合FPGAと高速ADCを備え、72MS/sのサンプリングレートを提供します。内部には2MBのUSBディスクがあり、波形キャプチャ、ユーザーアプリケーションの保存、ファームウェアのアップグレードに使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

## 特徴

---

* ポケットサイズで軽量
* 2つの36MS/sアナログチャンネル（シングルチャンネルに設定すると最大72MS/s）  
  **（.sysバージョンv1.31以降、2つの72MS/sアナログチャンネル、シングルチャンネルに設定すると最大144MS/sにアップグレード可能）**
* 2つのデジタルチャンネル
* 信号発生器
* 多様なトリガーオプション
* 簡単な波形保存
* ファームウェアアップグレード
* ユーザーアプリケーション
* オープンソース

**出典:** [機能サポート](http://www.downloadranking.com/privacypolicy.php)

## アプリケーションアイデア

---

### ユーザーアプリケーション

進行中のプロジェクト：

* GCCポート（FFT、スペクトログラム、さまざまな修正を含む） [pmos69とmarcosinによる](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

* 代替ユーザーインターフェース [gabonator1による](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

* デフォルトファームウェアのGCCポート [tmbincによる](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

* 周波数応答プロッター [jpaによる](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

* FFTサンプルアプリケーション [gabonator1による](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

* ロジックアナライザー [jpaによる](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

* Pawnプログラミング環境とさまざまなアプリケーション [jpaによる](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

* SYSのGCCへの移植: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

* テトリス [LinXによる](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>アイデア収集</big>

**アプリケーション**

* 「シンプルモード」 - 経験のない人々を助けるために、最も基本的な機能のみを利用可能にするモード。
* ["マルチメーターモード" - 基本的なマルチメーター機能（AC/DC VOM、ピーク/実効値/差分があると便利）](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)

  * 詳細は[こちら](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)
* プロトコル解析/データキャプチャ - シリアル、I2C、SPI、CAN
* LCR（uH、uF、R）測定機能 - 内蔵信号発生器を活用。外部コンポーネントが必要な3つの方法が存在 [例](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)
* 半導体アナライザー - DACを使用してダイオード/トランジスタの電圧応答をテストおよびチャート化（トランジスタのピン配置や極性の識別を含む）
* RFスペクトラムアナライザー
* 2D X-Yモード - アナログチャンネルを2軸でプロットし、デジタルチャンネルを「ビーム」有効/無効としてオプションで使用。
  * [何か](https://forum.seeedstudio.com/)が存在する？APP2.50にはまだ含まれていない。

* DMXデコーダー/アナライザーおよびジェネレーター（外部RS485 ICと組み合わせて使用） - 劇場技術者にとって非常に便利なガジェットになる。

* テレビモード（アナログTV）：フレーム/フィールド/ライン（フィールドA/Bを選択）またはライン番号を表示。ベクトルスコープ図を表示。コンテンツ（例：TV画像）を表示。

* 2台目のDSO Quadとの同期 - 4チャンネルのアナログ/デジタル信号を取得。USBscope50に類似。
  * 「波形出力」を使用して、マスターユニットがトリガーされたときにパルス/ステップを生成し、C/Dをスレーブのトリガーとして使用。

* USBリモートコントロールソフトウェアを作成 - LCDが壊れた場合でも、PCソフトウェアで使用可能。[HARDWAREから移動]
* データをPCにストリーム - PCをストレージバッファとして使用し、追加の処理能力を活用。PCはQuadではデコードできないI2Cワードやその他のプロトコルをデコード可能。[HARDWAREから移動]

* ホワイトノイズ機能 - 信号発生器の機能に追加。

**拡張**

* 周波数/時間の視点からのスペクトラムアナライザー表示
* 高速フーリエ変換（FFT） - 単一信号のスペクトラムデータを簡単に表示可能。

**ハードウェア/デバイス指向**

* SDR（ソフトウェア定義ラジオ） - USBフルスピード（12Mb/s）のみ対応。

* 10倍のプリアンプが非常に必要！
* メニューにアクセスしやすいベゼルボタンを追加。
* アナログチャンネルを2つ追加 - USBドングルを介して可能。

* 拡張デバイス用ポートを追加 - 拡張デバイスがRF生成や大振幅対応の信号発生器などの機能を提供可能に。特に+5Vおよび3.3V出力が有用。

**その他**

* 技術サポートスタッフ向けのサービスアプリケーション - 画面を分割して「ポート3、ピン5に信号があるか確認してください。ない場合はxyzが壊れている可能性があります」といった指示を表示可能。次のボタンを押すと、各ステップでテキスト、適切なタイムスケール、トリガー値などが選択される。

* ARMベースのスマートフォン向け - USBバージョンを作成し、スマートフォン用アプリを開発。スマートフォンをディスプレイ/タッチスクリーンディスプレイとして使用可能。

* アナログチャンネルと生成信号の両方で簡単な数学関数を実行可能。

* 完全に接地分離された2つの入力 - 同じ接地基準ではない入力を測定可能（例：Vellemanの2チャンネルパーソナルスコープのように）。
* 入力過電圧保護ダイオードを追加 - 高電圧スパイクからデバイスを保護。

* オーバーサンプリングとそのソフトウェア実装 - ノイズを低減し、有効ビット深度を向上。
* 特殊技術である等価時間サンプリング - 繰り返し信号の帯域幅を向上可能。

* 非ストレージモードでは、大きなオフスクリーンバッファに保存する代わりに、可視領域を常にスイープします。現在のバージョンではサンプルレートを50msに設定しています（例：オーディオ信号を観察するため）。しかし、画面は数秒ごとにしか更新されず、連続的に更新されるべきです。

* _さらにアイデアを追加してください..._

DSO Quadのアプリケーション開発に関する情報も参照してください。

## 仕様

---
| 項目 | 仕様 |
|------|------|
| アナログチャンネル *2 | [CH_A] [CH_B] |
| デジタルチャンネル *2 | [CH_C] [CH_D] |
| 垂直スケール | 20mV-10V/div (1-2-5 ステップ) x1プローブ / 200mV-100V/div (1-2-5 ステップ) x10プローブ |
| 垂直分解能 | 8ビット |
| 入力結合 | AC/DC |
| 最大入力電圧 | 80Vpp (x1プローブ) / 400Vpp (x10プローブ) |
| ストレージ | 各チャンネル4K / 単一チャンネル8K |
| ソフトウェアトリガータイプ | エッジ、パルス、レベル（追加予定） |
| ハードウェアトリガータイプ | エッジ |
| トリガーソース | CH1/CH2/EXT |
| トリガーモード | オート、ノーマル、シングル、スキャン、なし |
| テスト信号ジェネレーター | 10Hz～8MHz 2.8Vpp 方形波、デューティサイクル10～90%調整可能 / 10Hz～20kHz 2.8Vpp 正弦波、方形波、のこぎり波、三角波 |
| ストレージ | 内蔵2MB USBディスク、BMP、DATファイル |
| 自動測定 | Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty |
| カーソル測定 | レベル、電圧 |
| 表示モード | CH1, CH2, EXT, CH1+CH2, CH1-CH2 |
| サンプリングモード | リアルタイム |
| サンプリングレート | 30S/s - 72MS/s |
| 電源 | LiPoバッテリー |
| 寸法 | 98 * 60 * 14.5 (mm) |
| 重量 | 80g（バッテリーなし） |
| パック内付属品 | 2 mcxオシロスコーププローブ、2 mcxデジタルプローブ |

## コンポーネント

---
コアコンポーネントのデータシートへのリンクを追加してください。

| コンポーネント | 詳細 |
|----------------|------|
| CPU | 72 MHz - ARM 32ビット Cortex™-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp) |
| FPGA | ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf) |
| TFT | |
| ADC | AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf) |
| OPアンプ | OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf) |
| MOSFETスイッチ | |
| USBストレージ | |
| （ここにさらに追加） | |

## 注意事項

---
このデバイスを不適切に操作すると、身体的な怪我やデバイスの損傷を引き起こす可能性があります。必要なすべての注意事項を確認し、デバイスを使用する前にすべての文書を必ずお読みください。

## ファームウェアのアップグレード

---
この手順は現在、Windowsでのみ動作します。[Linux用の手順はこちら](/ja/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")。(2011-04-29) LinuxやMacでアップグレードディスクが動作するようになれば、初心者向けにこのプロセスを自動化するアプリケーションを作成するのは非常に簡単になるでしょう。また、アップグレードプログラムがハードウェアバージョンを確認し、誤ったファームウェアのアップロードを防ぐことも可能になるかもしれません。

### ファームウェアの入手先

[最新のファームウェアはこちら](https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip)。

また、[ソースからファームウェアをビルドする](/ja/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware")こともできます。

### バージョンに関する警告

**警告**: 特定のハードウェアバージョンに対応したファームウェアを使用することが重要です。ハードウェアバージョンはデバイスを起動した際のスプラッシュスクリーンに表示されます。ハードウェアバージョンが判別できない場合はフォーラムで助けを求めてください。誤ったファームウェアをアップロードすると、デバイスが使用不能になる可能性があります。

### アップグレード手順

(Windowsのみ) DSO QuadをミニUSBケーブルでPCに接続します。デバイスをオンにする際に"&gt;||"（再生/一時停止）ボタンを押し続けます。これでデバイスはファームウェアアップグレードモードになり、USBディスクがシステムに表示されます。ファームウェアファイルを1つずつコピーします。新しいファイルをコピーするたびに、デバイスはファイルを準備するために接続を切断します。ディスクが再接続されると、アップロードしたファイルの拡張子が変更されます（".rdy"はアップロードが正常に行われたことを意味します）。

ファイルをアップロードする順序は重要です。まず.hexファイルをアップロードします（順序は重要ではありません）。.BINファイルをアップロードするには、対応する.ADRファイルを最初にアップロードする必要があります。これにより、デバイスがバイナリファイルを配置する場所を認識します（例: まずCFG_FPGA.ADRをアップロードし、その後すぐにxxxxFPGA.BINをアップロードします）。間違えた場合は、すべてのファイルを削除して最初からやり直してください。

すべてのファームウェアファイルのアップロードが完了したら、デバイスをオフにしてアップグレードを完了します。再度デバイスを起動すると、ファームウェアバージョンが更新されているはずです。スプラッシュスクリーンでエラーが発生した場合は、上記の手順を慎重に従ってファームウェアを再度アップロードしてください。

詳細およびLinuxの手順はこちら: [DSO_Quad:Upgrading_Firmware](/ja/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")

### ファイルの説明

| ファイルタイプ | ファイル名形式 | 説明 |
|----------------|----------------|------|
| FPGAファイル | xxxxFPGA.BIN | FPGAの構成データ |
| ロゴファイル | logo_xxx.BIN | 任意の16色64*256 .BMPファイル（ファイルサイズ=46.9KB）を作成し、拡張子を.INFに変更します。これはスプラッシュスクリーンに表示される画像です。 |
| システムファイル | SYS_xxxx.hex | ???（説明が必要） |
| アプリケーションファイル | APP_xxxx.hex | ???（説明が必要） |
| アドレスファイル | xxxx.ADR | これらのファイルは、次にアップロードする.BINファイルをデバイスが配置する場所を指定します。FPGAファイル用とLOGOファイル用にそれぞれ1つずつあります。ファイル名は対応するファイルが分かるように命名されています。 |

**注意:** 新しいバージョンが利用可能になると、これらのファイル名が若干異なる場合があります。xは時間とともに変化する可能性のある値を表します。

### メモリレイアウト

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg)

| 開始 | 終了 | サイズ | 備考 |
|------|------|--------|------|
| 0x00000 | 0x03fff | 16384 | DFU |
| 0x04000 | 0x0bfff | 32768 | SYS |
| 0x0c000 | 0x13fff | 32768 | APP1（デフォルト） |
| 0x14000 | 0x1bfff | 32768 | APP2 |
| 0x1c000 | 0x23fff | 32768 | APP3 |
| 0x24000 | 0x2bfff | 32768 | APP4 |
| 0x2c000 | 0x3d7ff | 71680 | FPGAビットストリーム（データシートでは最大サイズが533KBitと記載されているため、これは少し大きい） |
| 0x3d800 | 0x3ffff | 10240 | ロゴ（bmp, 256x64, 4ビット） |

注意: フラッシュのベースアドレスは0x08000000ですが、BOOT0が低い場合、チップによって0x00000000にミラーリングされます。

## 関連ページ

* [DSO Quad:キャリブレーション](https://wiki.seeedstudio.com/ja/DSO_Quad-Calibration)

* [DSO Quad:ファームウェアのアップグレード](https://wiki.seeedstudio.com/ja/DSO_Quad/#upgrading-firmware)

* [DSO Quad:ベータハードウェア](https://wiki.seeedstudio.com/ja/DSO_Quad-Beta_HW)

## 外部リンク

1. Seeedstudio ブログ [[6]](https://www.seeedstudio.com/blog/tag/dso-quad/)

2. flickr上の写真集 [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)

3. [BMW検査におけるDS203の応用 (中国語、英語に自動翻訳)](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[オリジナルページ](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54)] - BMWの作業員がDSO203を使用して車両を検査しました。手のひらサイズで便利な性能に加え、DSO203はBMWバス：FlexRayの検査において完璧に動作しました。

## リソース

---

* [最新のV2.72ファームウェア](https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip)
* [回路図とファームウェア (HW2.2 ~ HW2.72)](https://wiki.seeedstudio.com/ja/DSO_Quad/#upgrading-firmware)

* [HW2.6用リソース付きディスカッションボード](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)

* [DS203_yijian_app_user_manual.rar‎](https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar)

* [DSO Quad マニュアル](https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>