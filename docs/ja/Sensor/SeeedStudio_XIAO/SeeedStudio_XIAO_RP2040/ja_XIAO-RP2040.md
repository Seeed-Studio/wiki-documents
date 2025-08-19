---
description: 概要
title: Seeed Studio XIAO RP2040 の使い方
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /ja/XIAO-RP2040
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO RP2040 の使い方

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040 は、Seeed Studio XIAO SAMD21 と同じくらい小型ですが、より強力です。一方で、強力なデュアルコア RP2040 プロセッサを搭載しており、柔軟なクロックで最大 133 MHz で動作可能な低消費電力マイクロコントローラです。Seeed Studio XIAO RP2040 には 264KB の SRAM と 2MB のオンボードフラッシュメモリも搭載されており、より多くのプログラムを保存して実行できます。他方、この小型ボードは処理性能が高い一方で、消費電力が少ないという特徴があります。  
全体として、親指サイズ（21x17.8mm）の小型設計で、ウェアラブルデバイスや小型プロジェクトに使用できます。

Seeed Studio XIAO RP2040 には 14 の GPIO ピンがあり、そのうち 11 本がデジタルピン、4 本がアナログピン、11 本が PWM ピン、1 本が I2C インターフェース、1 本が UART インターフェース、1 本が SPI インターフェース、1 本が SWD ボンディングパッドインターフェースです。

Seeed Studio XIAO RP2040 は、Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## **特徴**

- 強力な MCU: デュアルコア ARM Cortex M0+ プロセッサ、柔軟なクロックで最大 133 MHz で動作
- 豊富なオンチップリソース: 264KB の SRAM と 2MB のオンボードフラッシュメモリ
- 柔軟な互換性: Micropython/Arduino/CircuitPython をサポート
- 簡単なプロジェクト操作: ブレッドボード対応 & SMD 設計、背面に部品なし
- 小型サイズ: 親指サイズ（21x17.8mm）でウェアラブルデバイスや小型プロジェクトに最適
- 多様なインターフェース: 11 本のデジタルピン、4 本のアナログピン、11 本の PWM ピン、1 本の I2C インターフェース、1 本の UART インターフェース、1 本の SPI インターフェース、1 本の SWD ボンディングパッドインターフェース

## **仕様**

|項目|値|
|---|---|
|CPU|デュアルコア ARM Cortex M0+ プロセッサ（最大 133MHz）|
|フラッシュメモリ|2MB|
|SRAM|264KB|
|デジタル I/O ピン|11|
|アナログ I/O ピン|4|
|PWM ピン|11|
|I2C インターフェース|1|
|SPI インターフェース|1|
|UART インターフェース|1|
|電源供給およびダウンロードインターフェース|Type-C|
|電源|3.3V/5V DC|
|寸法|21×17.8×3.5mm|

## **ハードウェア概要**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
一般的な I/O ピンについて:  
MCU の動作電圧は 3.3V です。一般的な I/O ピンに接続される電圧入力が 3.3V を超えると、チップが損傷する可能性があります。

電源供給ピンについて:  
内蔵の DC-DC コンバータ回路は 5V 電圧を 3.3V に変換できるため、VIN-PIN および 5V-PIN を介して 5V 電源でデバイスに電力を供給できます。

XIAO RP2040 は現在、バッテリー電源供給のみをサポートしており、バッテリーが接続されている場合に Type-C を接続することはできません。これは安全上のリスクを引き起こす可能性があります。

使用時には注意し、シールドカバーを持ち上げないでください。
:::

### **ブートローダーモードに入る**

ユーザーのプログラミングプロセスが失敗した場合、Seeed Studio XIAO RP2040 のポートが消えることがあります。この問題は以下の操作で解決できます:

- 「B」ボタンを長押しします。
- Seeed Studio XIAO RP2040 をコンピュータに接続します。
- コンピュータにディスクドライブが表示されます。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。RP2040 チップには 2 つのパーティションがあり、1 つはブートローダー、もう 1 つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを焼き付けています。上記の手順を実行することでモードを切り替えることができます。

### **リセット**

Seeed Studio XIAO RP2040 をリセットしたい場合は、以下の手順を実行してください:

- Seeed Studio XIAO RP2040 をコンピュータに接続します。
- 「R」ピンを**1 回**押します。

注意: 内蔵のプログラム可能な単色 LED（赤、青、緑）の動作は Arduino のものとは逆です。Seeed Studio XIAO RP2040 では、ピンを Low に引き下げることで有効になります。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

<!-- - **[PDF]** [Seeed Studio XIAO ステップバイステップコース](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 寸法 (DXF)](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D モデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO RP2040 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。お客様のご希望やニーズに応じたコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>