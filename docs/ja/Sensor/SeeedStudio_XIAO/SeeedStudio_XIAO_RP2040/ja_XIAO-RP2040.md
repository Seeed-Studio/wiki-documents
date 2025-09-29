---
description: 概要
title: Seeed Studio XIAO RP2040 入門ガイド
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /ja/XIAO-RP2040
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO RP2040 入門ガイド

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040は、Seeed Studio XIAO SAMD21と同じくらい小さいですが、より強力です。一方では、最大133MHzまでの柔軟なクロックで動作する強力なデュアルコアRP2040プロセッサを搭載しており、これは低消費電力マイクロコントローラです。Seeed Studio XIAO RP2040には264KBのSRAMと2MBのオンボードフラッシュメモリも搭載されており、より多くのプログラムを保存して実行することができます。一方で、この小さなボードは処理性能が良好でありながら、消費電力は少なくて済みます。  
総合的に、親指ほどの小さなサイズ（21x17.8mm）で設計されており、ウェアラブルデバイスや小規模プロジェクトに使用できます。

Seeed Studio XIAO RP2040には14個のGPIOピンがあり、そのうち11個のデジタルピン、4個のアナログピン、11個のPWMピン、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース、1個のSWDボンディングパッドインターフェースがあります。

Seeed Studio XIAO RP2040は、Seeed Studio XIAO拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## **特徴**

- 強力なMCU：デュアルコアARM Cortex M0+プロセッサ、最大133MHzまでの柔軟なクロック
- 豊富なオンチップリソース：264KBのSRAMと2MBのオンボードフラッシュメモリ
- 柔軟な互換性：Micropython/Arduino/CircuitPythonをサポート
- 簡単なプロジェクト操作：ブレッドボード対応＆SMD設計、背面にコンポーネントなし
- 小型サイズ：ウェアラブルデバイスや小規模プロジェクト向けの親指サイズ（21x17.8mm）
- 複数のインターフェース：11個のデジタルピン、4個のアナログピン、11個のPWMピン、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース、1個のSWDボンディングパッドインターフェース

## **仕様**

|項目|値|
|---|---|
|CPU|最大133MHzのデュアルコアARM Cortex M0+プロセッサ|
|フラッシュメモリ|2MB|
|SRAM|264KB|
|デジタルI/Oピン|11|
|アナログI/Oピン|4|
|PWMピン|11|
|I2Cインターフェース|1|
|SPIインターフェース|1|
|UARTインターフェース|1|
|電源供給・ダウンロードインターフェース| Type-C|
|電源|3.3V/5V DC|
|寸法|21×17.8×3.5mm|

## **ハードウェア概要**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
一般的なI/Oピンについて：
MCUの動作電圧は3.3Vです。一般的なI/Oピンに接続される電圧入力が3.3Vより高い場合、チップの損傷を引き起こす可能性があります。

電源供給ピンについて：
内蔵DC-DCコンバータ回路により5V電圧を3.3Vに変換できるため、VIN-PINおよび5V-PINを介して5V電源でデバイスに電力を供給できます。

XIAO RP2040は現在バッテリー電源供給のみをサポートしており、バッテリーが接続されている間はType-Cに接続できません。安全上のリスクを引き起こす可能性があります。

使用時は注意し、シールドカバーを持ち上げないでください。
:::

### **ブートローダーモードに入る**

ユーザーのプログラミングプロセスが失敗した場合、Seeed Studio XIAO RP2040ポートが消失することがあります。以下の操作でこの問題を解決できます：

- 「B」ボタンを長押しします。
- Seeed Studio XIAO PR2040をコンピュータに接続します。
- コンピュータにディスクドライバが表示されます。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。RP2040チップには2つのパーティションがあり、1つはブートローダー、もう1つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

### **リセット**

Seeed Studio XIAO RP2040をリセットしたい場合は、以下の手順を実行してください：

- Seeed Studio XIAO RP2040をコンピュータに接続します。
- 「R」ピンを**一度**押します。

注意：内蔵プログラマブル単色LED（赤、青、緑）の動作は、Arduino上のものとは逆になります。Seeed Studio XIAO RP2040では、有効にするためにピンをローに引く必要があります。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCADファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagleファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 DXF寸法図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagleフットプリント](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3Dモデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO RP2040 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
