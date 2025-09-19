---
description: SeeedStudio BeagleBone® Green Eco入門ガイド
title: Seeed Studio BeagleBone® Green Eco
keywords:
- Beagle_Bone_Green_Eco
image: https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Seeed-Studio-BeagleBoneR-Green-Eco.webp
slug: /ja/getting_started_with_seeedstudio_beaglebone_green_eco
last_update:
  date: 9/18/2025
  author: Atom Yang
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1-102111198-Seeed-Studio-BeagleBoneR-Green-Eco.jpg" /></div>

**Seeed Studio BeagleBone® Green Eco**は、BeagleBoard.org®財団と共同開発された産業グレードのオープンソースシングルボードコンピュータで、堅牢な**TI AM3358 SoC**を搭載しています。この「Eco」バージョンは高効率を目指して設計されており、最適化されたエネルギー消費を確保するために先進的なTI電源管理チップ（TPS6521403）を組み込んでいます。16GBの大容量オンボードeMMCストレージとギガビットイーサネットポートによる高速ネットワーク接続を備え、要求の厳しいアプリケーションに十分対応できます。シームレスなハードウェアプロトタイピングのために、2つのシグネチャGroveコネクタを統合し、Seedの豊富なGroveセンサーとモジュールのエコシステムへの直接的でハンダ付け不要のアクセスを提供します。

Linuxを10秒以内で起動し、USBケーブル1本だけで5分以内に開発を開始できます。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Eco-p-6540.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## 特徴

**特徴1：強力なコア＆リアルタイム処理**

* TI AM3358 1GHz ARM® Cortex-A8プロセッサを統合し、処理を高速化するNEON™ SIMDコプロセッサを搭載しています。また、産業オートメーションやロボティクスに重要な決定論的で低遅延制御のためのデュアルコアプログラマブルリアルタイムユニット（PRU-ICSS）も含まれています。

**特徴2：エコフレンドリーな電源管理**

* PFMモードと動的電圧スケーリングなどの機能を備えた先進的なTI TPS6521403 PMICを使用しています。これにより電力消費が大幅に最適化され、エネルギーに敏感なアプリケーションやバッテリー駆動アプリケーションに理想的です。

**特徴3：4倍のストレージ容量＆10倍のネットワーク速度**

* 16GBのオンボードeMMCストレージ（4倍の増加）で大幅に向上し、ギガビットイーサネットポートで接続性をアップグレードし、高速で安定したネットワーク通信のために前世代の最大10倍の帯域幅を提供します。

**特徴4：豊富でモダンな接続性**

* ギガビットイーサネットポートと電源・データ用のモダンなUSB Type-Cポートを含む、アップグレードされた高速インターフェースを搭載しています。迅速なプロトタイピングのために、2つの内蔵Groveコネクタ（I2C & UART）Grove - Seeed Studioも含まれており、Seeed Studioの豊富なセンサーとアクチュエータのエコシステムへの簡単でハンダ付け不要の接続を可能にします。

**特徴5：開発準備完了**

* BeagleBoard.org®財団が指定したDebianソフトウェアイメージがプリロードされており、開発プロセスを合理化するための確立されたツールとライブラリを備えた堅牢で馴染みのあるLinux環境を提供します。

## 仕様

| カテゴリ   | 項目                  | Seeed Studio BeagleBone® Green Eco                                                                                     | Seeed Studio BeagleBone® Green                                                                 |
|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| プロセッサ  | コア                  | TI AM3358 1GHz ARM® Cortex-A8                                                                                          | TI AM3358 1GHz ARM® Cortex-A8                                                                 |
|            | アクセラレータ          | NEON浮動小数点ユニット＆3Dグラフィックスアクセラレータ                                                                     | NEON浮動小数点ユニット＆3Dグラフィックスアクセラレータ                                            |
| メモリ     | RAM                   | 512MB DDR3L, 800MHz                                                                                                    | 512MB DDR3L, 800MHz                                                                           |
|            | フラッシュストレージ         | **16GB eMMC (Kingston EMMC16G-WW28)**                                                                                  | 4GB 8-bit eMMC                                                                                |
|            | EEPROM                | 4KB                                                                                                                    | 4KB                                                                                    |
|            | 外部ストレージ      | microSDカードスロット、最大32GBサポート                                                                                 | microSDカードスロット、最大32GBサポート                                                        |
| 電源      | 電源管理      | **TI TPS6521403 PMIC**                                                                                                     | TI TPS65217C PMIC                                                                             |
|            | 電圧レギュレータ     | TI TPS62A01DRL (3.3V Buck converter);TI TPS74501PDRV (1.8V Always-On LDO);TI TPS2117DRL (Power Mux)            | TI TL5209DR (3.3V LDO Regulator)                                                              |
|            | 入力電圧         | 5V DC (USB Type-C経由)                                                                                                 | 5V DC (micro USB経由)                                                                         |
| インターフェース | USB                   | 1x USB 2.0 Host Type-A;1x USB 2.0 Type-C (電源＆デバイス通信)                                            | 1x USB client (電源＆通信);1x USB host                                                 |
|            | ネットワーク               | **ギガビットイーサネット (10/100/1000Mbps)**                                                                                 | イーサネット (10/100Mbit)                                                                         |
|            | 拡張ヘッダー     | 2x 46ピンヘッダー                                                                                                      | 2x 46ピンヘッダー                                                                             |
|            | Grove                 | 1x I2C, 1x UART2                                                                                                       | 1x I2C, 1x UART2                                                                              |
|            | ボタン               | 1x リセットボタン;1x ユーザー(ブート)ボタン                                                                               | 1x リセットボタン;1x ユーザー(ブート)ボタン;1x 電源ボタン                                  |
|            | インジケータ            | 1x 電源LED、4x ユーザープログラマブルLED                                                                                | 4x LED (ハートビート、microSD、CPU、eMMC)                                                       |
| 物理   | 寸法            | 86.4mm x 53.3mm x 18mm                                                                                                 | 86.4mm x 53.3mm x 18mm                                                                        |
|            | 重量                | 40g                                                                                                                    | 45g                                                                                           |
|            | 動作温度 | **-40 ~ 85℃**                                                                                                              | 0 ~ 75℃                                                                                       |



## アプリケーションアイデア

* モノのインターネット
* スマートハウス
* 産業
* オートメーション＆プロセス制御
* ヒューマンマシンインターフェース
* センサーハブ
* ロボット

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Hardware-Overview.png" /></div>

**BeagleBone® Green Ecoの機能ブロック図**
BeagleBone® Green EcoはTexas InstrumentsのAM335x ARM Cortex-A8プロセッサを中心に構築されており、多様な組み込みアプリケーションのための堅牢な基盤を提供します。以下は、ボードのハードウェアアーキテクチャを構成する主要コンポーネントと相互接続を示す機能ブロック図です。この図は、AM335x SoCがメモリ、ストレージ、周辺機器、および様々なI/Oオプションとどのようにインターフェースするかを示しています。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Functional-Block-Diagram.png" /></div>


**プロセッサ**
BeagleBone® Green EcoはTexas Instruments AM335x 1GHz ARM® Cortex-A8プロセッサを統合しており、単一のSoC内で計算処理、グラフィックス加速、リアルタイム制御機能を組み合わせています。アーキテクチャはNEON™ SIMDエンジンとVFPv3浮動小数点ユニットを備えたARMv7-Aを実装し、組み込みアプリケーションの電力効率を維持しながら複雑な計算タスクの効率的な実行を可能にします。
特徴的な機能は、メインARMプロセッサから独立して動作するデュアル32ビットRISCコアで構成されるプログラマブルリアルタイムユニットサブシステムおよび産業通信サブシステム（PRU-ICSS）です。これらのPRUは、サブマイクロ秒の応答時間での決定論的リアルタイム制御と、特殊な産業通信プロトコルの実装を可能にします。AM335xは、TIのProcessor SDKと開発環境を通じて、Linuxを含む高レベルオペレーティングシステムとリアルタイムオペレーティングシステムをサポートします。
* AM335x 1GHz ARM® Cortex-A8プロセッサ、15.0mm x 15.0mm、NFBGA (324)
* メディアと信号処理を高速化するNEON™ SIMDコプロセッサとVFPv3浮動小数点ユニット* PowerVR SGX™ Graphics Accelerator supporting OpenGL ES 2.0
* リアルタイム産業通信・制御用デュアル32ビットPRU-ICSS
* EtherCAT、PROFINET、PROFIBUSを含む産業インターフェースのサポート

**メモリとストレージ**
BeagleBone® Green Ecoには以下が含まれます：
* 1x 512MB (4Gb) DDR3L RAM (Kingston D2516ECMDXGJDI-U) 16ビットインターフェース付き
* 1x 16GB eMMCオンボードフラッシュストレージ (Kingston EMMC16G-WW28) MMC1 8ビットインターフェース付き
* 1x 32Kbit EEPROM (FMD FT24C32A-ELRT) I2C0経由で接続
* 拡張可能ストレージ用MMC0 4ビットインターフェース付きMicroSDカードスロット

**インターフェースと周辺機器**
BeagleBone® Green Ecoは以下をサポートします：
* ギガビットイーサネット接続
* 1x USB 2.0 Type-Cポート（電源と通信用）
* 1x USB 2.0ホストインターフェース、Type-A

**アプリケーション固有のケープをサポートする拡張コネクタ/ヘッダー**
* 2x 46ピンヘッダー
* 1x 6ピンUART0ヘッダー
* 2つのGroveコネクタ（1つはI2C、1つはUART）でGroveエコシステムのセンサーとアクチュエーターに簡単接続

**ヘッダーピン定義**

各デジタルI/Oピンには、GPIOを含む8つの異なるモードを選択できます。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1.png" /></div>

**65個の可能なデジタルI/O**

:::note
    GPIOモードでは、各デジタルI/Oは割り込みを生成できます。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/2.png" /></div>

**PWMとタイマー**

:::note
最大8つのデジタルI/Oピンをパルス幅変調器（PWM）で設定して、モーター制御用の信号を生成したり、疑似アナログ電圧レベルを作成したりできます。追加のCPUサイクルを消費しません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/3.png" /></div>

**アナログ入力**

:::note
アナログ入力ピンには1.8V以上を入力しないでください。これは8チャンネルの単一12ビットアナログ-デジタルコンバーターで、そのうち7チャンネルがヘッダーで利用可能です。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/4.png" /></div>


**UART**

:::note
UART0ピンにアクセスしてデバッグケーブルを接続するための専用ヘッダーがあります。5つの追加シリアルポートが拡張ヘッダーに接続されていますが、そのうち1つは単方向のみがヘッダーに接続されています。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/5.png" /></div>

**I2C**

:::note
最初のI2Cバスはケープアドオンボード上のEEPROMを読み取るために使用されており、その機能を妨げることなく他のデジタルI/O操作には使用できませんが、利用可能なアドレスで他のI2Cデバイスを追加することは可能です。2番目のI2Cバスは設定して使用できます。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/6.png" /></div>

**SPI**

:::note
    データを高速でシフトアウトするには、SPIポートの1つを使用することを検討してください。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/7.png" /></div>


## 入門ガイド

:::note
この章はWin10環境で書かれています。他のオペレーティングシステムでも手順は同様です。
:::

**ステップ1. Seeed Studio BeagleBone® GreenをUSB経由で接続**

付属のmicro USBケーブルを使用して、Seeed Studio BeagleBone® Greenをコンピューターに接続します。これによりボードに電源が供給され、開発インターフェースが提供されます。Seeed Studio BeagleBone® Greenはオンボードの2GBまたは4GB eMMCからLinuxを起動します。

Seeed Studio BeagleBone® Greenはフラッシュドライブとして動作し、ドキュメントとドライバーのローカルコピーを提供します。このインターフェースは新しいイメージでmicroSDカードを再設定するために使用することはできませんが、uEnv.txtファイルを使用してブートパラメーターを更新するために使用できます。

PWR LEDが点灯し続けているのが確認できます。10秒以内に、他のLEDがデフォルト設定で点滅しているのが確認できるはずです。

* D2は起動時にハートビートパターンで点滅するように設定されています
* D3は起動時にmicroSDカードアクセス中に点灯するように設定されています
* D4は起動時にCPUアクティビティ中に点灯するように設定されています
* D5は起動時にeMMCアクセス中に点灯するように設定されています

**ステップ2. ドライバーのインストール**

お使いのオペレーティングシステム用のドライバーをインストールして、BeagleへのUSB経由ネットワークアクセスを取得します。追加のドライバーによりボードへのシリアルアクセスが可能になります。

|オペレーティングシステム | USBドライバー | コメント |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bitインストーラー](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bitインストーラー](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[ネットワーク](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [シリアル](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | 両方のドライバーセットをインストールしてください。|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|ドライバーのインストールは必須ではありませんが、いくつかのudevルールが役立つ場合があります。|

:::note
    Windowsシステムの場合、以下にご注意ください：

* Windowsドライバー認証警告が2〜3回ポップアップする場合があります。「無視」、「インストール」、または「実行」をクリックしてください
* 32ビットまたは64ビットWindowsを実行しているかを確認するには、[こちら](https://support.microsoft.com/kb/827218)を参照してください。
* 最新のサービスリリースがないシステムでは、エラー（0xc000007b）が発生する場合があります。その場合は、[インストール](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523)してから再試行してください：
* Windowsの再起動が必要な場合があります。
* これらのドライバーはWindows 10まで動作することがテストされています
:::

:::note
追加のFTDI USB to serial/JTAG情報とドライバーは[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)から入手できます。
:::

:::note
追加のUSB to virtual Ethernet情報とドライバーは[https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/)と[https://joshuawise.com/horndis](https://joshuawise.com/horndis)から入手できます。
:::

**ステップ3. Beagleにブラウザでアクセス**

ChromeまたはFirefox（Internet Explorerは動作しません）を使用して、ボード上で実行されているWebサーバーにアクセスします。ボードの機能を示すプレゼンテーションが読み込まれます。キーボードの矢印キーを使用してプレゼンテーションをナビゲートします。

[http://192.168.7.2](http://192.168.7.2)をクリックして、Seeed Studio BeagleBone® Greenを起動します。
古いソフトウェアイメージでは、ネットワークを開始するためにBeagleBone®ドライブを取り出す必要があります。最新のソフトウェアイメージでは、この手順は不要です。

[![Click to view larger image](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**ステップ4. Cloud9 IDE**

ボード上にあるプログラムの編集を開始するには、Cloud9 IDEを使用できます。クリックしてください

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## 最新ソフトウェアへの更新

より良いパフォーマンスを維持するために、ボードを最新のソフトウェアに更新する必要があります。ここでは、ステップバイステップでその方法を説明します。

**ステップ1. 最新のソフトウェアイメージをダウンロード**

まず、こちらから適切なイメージをダウンロードする必要があります。

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://beagleboard.org/latest-images)

:::note
サイズの関係で、このダウンロードには30分以上かかる場合があります。
:::

ダウンロードするファイルは**.img.xz**拡張子を持ちます。これはSDカードのセクター単位の圧縮イメージです。

**ステップ2. 圧縮ユーティリティをインストールしてイメージを展開**

[7-zip](http://www.7-zip.org/download.html)をダウンロードしてインストールします。

:::note
    お使いのシステムに適したバージョンを選択してください。
:::

7-zipを使用してSDカードの**.imgファイル**を展開します

**ステップ3. SDカードプログラミングユーティリティをインストール**

[Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download)をダウンロードしてインストールします。必ずバイナリ配布版をダウンロードしてください。

**ステップ4. イメージをSDカードに書き込み**

まず、microSDカードをコンピューターに接続するためのSDアダプターが必要です。次に、Image Write for Windowsソフトウェアを使用して、展開したイメージをSDカードに書き込みます。

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

**Write**ボタンをクリックすると、プロセスが開始されます。

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

* デバイスの損傷に関する警告が表示される場合があります。書き込み先がSDカードを指している限り、これを受け入れても問題ありません。
* この時点でBeagleBone®をコンピューターに接続しないでください。
* このプロセスには最大10分かかる場合があります。
:::

**ステップ5. SDカードからボードを起動**

SDカードを（まず電源を切った）ボードに挿入します。その後、ボードはSDカードから起動します。

:::note
オンボードeMMCにイメージを書き込む必要がない場合は、この章の残りを読む必要はありません。そうでなければ続行してください。
:::

オンボードeMMCにイメージを書き込みたい場合は、ボードを起動してファイルを変更する必要があります。

**/boot/uEnv.txt**で：

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
以下に変更：

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

その後、4つのユーザーLEDが以下のように点灯します

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
上記のトレーシングライトが見つからない場合は、RESETボタンを押してボードをリセットしてください。
:::
フラッシュが完了すると、4つのUSRx LEDがすべて**消灯**します。最新のDebianフラッシャーイメージは、完了時に自動的にボードの電源を切ります。これには最大**10分**かかる場合があります。ボードの電源を切り、SDカードを取り外してから再度電源を入れて完了です。

## Seeed Studio BeagleBone® Green用Grove

Groveは、モジュラー式の標準化されたコネクタープロトタイピングシステムです。Groveは、エレクトロニクスを組み立てるためのビルディングブロックアプローチを採用しています。ジャンパーやはんだベースのシステムと比較して、接続、実験、構築が簡単で、学習システムを簡素化しますが、単純化しすぎることはありません。他のプロトタイプシステムの中には、レベルをビルディングブロックまで下げるものもあります。そのような方法で学べることは良いことですが、Groveシステムでは実際のシステムを構築することができます。物事を接続するには、ある程度の学習と専門知識が必要です。

以下に、Seeed Studio BeagleBone® Greenとうまく動作するGroveモジュールを一覧表示します。

|SKU        |名前|インターフェース|リンク|
|-----------|-----|-----|----------|
|101020054  |Grove - 3軸デジタル加速度センサー(+16g)     | I2C| [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3軸デジタル加速度センサー(+400g)    | I2C| [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3軸デジタルコンパス                 | I2C| [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3軸デジタルジャイロ                    | Analog| [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - 6軸加速度センサー&コンパス v2.0      | I2C| [リンク](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - 気圧センサー(BMP180)              | I2C| [リンク](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - 青色LED                               | I/O| [リンク](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - ボタン                                 |I/O| [リンク](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - ボタン(P)                             |I/O| [リンク](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - ブザー                                 |I/O| [リンク](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - チェーン可能RGB LED                     |I2C| [リンク](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - デジタル光センサー                 |I2C| [リンク](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - 指クリップ心拍センサー         |I2C| [リンク](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - 指クリップ心拍センサー（シェル付き） |I2C|[リンク](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [リンク](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - 緑色LED |I/O| [リンク](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [リンク](https://wiki.seeedstudio.com/ja/Grove-I2C_ADC/)|
|103020006 |Grove - I2C ハブ |I2C| [リンク](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [リンク](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [リンク](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - IR距離遮断器 |I/O| [リンク](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - OLEDディスプレイ 0.96'' |I2C| [リンク](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - OLEDディスプレイ 1.12'' |I2C| [リンク](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - 赤色LED |I/O| [リンク](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - リレー |I/O| [リンク](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - サーボ |I/O| [リンク](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - 音センサー |Analog| [リンク](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - スイッチ(P) |I/O| [リンク](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - 温度センサー |Analog| [リンク](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - 温湿度センサー Pro |Analog| [リンク](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Seeed Studio BeagleBone® Green用ケープ

プロジェクトを開始する際には、拡張ボードが必要になります。Seeed Studio BeagleBone® Green用のケープは既に多数あり、LCDディスプレイ、モータードライバー、HDMI拡張などが含まれています。以下にそのうちのいくつかをお勧めします。

|Grove ケープ| モーターブリッジケープ|HDMIケープ|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[今すぐ購入！](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[今すぐ購入！](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove ケープ| 5インチLCD|7インチLCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[今すぐ購入！](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[今すぐ購入！](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|


## 参考資料

ボードに関するより多くの情報を得るのに役立つ多くの参考資料があります。

* [BeagleBoardメインページ](https://beagleboard.org/)
* [BeagleBoardスタートガイド](https://beagleboard.org/getting-started)
* [トラブルシューティング](https://beagleboard.org/getting-started#troubleshooting)
* [ハードウェアドキュメント](https://beagleboard.org/getting-started#hardware)
* [BeagleBoardのプロジェクト](https://beagleboard.org/project)
* [Seeed Studio BeagleBone® Green EcoのCE認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-CE.pdf)
* [Seeed Studio BeagleBone® Green EcoのFCC認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-FCC.pdf)

## リソース

* **[PDF]** [AM335X データシート](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
* **[PDF]** [Seeed Studio BeagleBone Green Eco 回路図](https://files.seeedstudio.com/products/102111198/res/BeagleBone%20Green%20Eco_V1.0_SCH_250814.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

