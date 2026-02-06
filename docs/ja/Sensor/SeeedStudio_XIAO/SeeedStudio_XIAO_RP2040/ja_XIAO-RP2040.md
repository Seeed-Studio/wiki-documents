---
description: 概要
title: Seeed Studio XIAO RP2040 入門ガイド
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /ja/XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO RP2040 入門ガイド

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040は、Seeed Studio XIAO SAMD21と同じくらい小さいですが、より強力です。一方では、最大133MHzまでの柔軟なクロック動作が可能な強力なデュアルコアRP2040プロセッサを搭載しており、これは低消費電力マイクロコントローラです。Seeed Studio XIAO RP2040には264KBのSRAMと2MBのオンボードフラッシュメモリも搭載されており、より多くのプログラムを保存・実行できます。一方で、この小さなボードは処理性能が良好でありながら、消費電力は少なくて済みます。
総合的に、親指ほどの小さなサイズ（21x17.8mm）で設計されており、ウェアラブルデバイスや小型プロジェクトに使用できます。

Seeed Studio XIAO RP2040には14個のGPIOピンがあり、そのうち11個のデジタルピン、4個のアナログピン、11個のPWMピン、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース、1個のSWDボンディングパッドインターフェースがあります。

Seeed Studio XIAO RP2040は、Seeed Studio XIAO拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## **特徴**

- 強力なMCU：デュアルコアARM Cortex M0+プロセッサ、最大133MHzまでの柔軟なクロック動作
- 豊富なオンチップリソース：264KBのSRAMと2MBのオンボードフラッシュメモリ
- 柔軟な互換性：Micropython/Arduino/CircuitPythonをサポート
- 簡単なプロジェクト操作：ブレッドボード対応＆SMD設計、背面に部品なし
- 小型サイズ：ウェアラブルデバイスや小型プロジェクト向けの親指ほどの小ささ（21x17.8mm）
- 複数のインターフェース：11個のデジタルピン、4個のアナログピン、11個のPWMピン、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース、1個のSWDボンディングパッドインターフェース

## **仕様**

| 製品名 | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **チップセット** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **プロセッサ** | 最大133MHzで動作するデュアルCortex M0+プロセッサ |
| **RAM** | 264KB SRAM |
| **フラッシュ** | 2MB オンボードフラッシュ |
| **インターフェース** | GPIOピン x14<br/>デジタルピン x11<br/>アナログピン x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **オンボード** | ユーザーLED（3色）x1<br/>電源LED x1<br/>RGB LED x1<br/>リセットボタン x1<br/>ブートボタン x1 |
| **ワイヤレス接続** | / |
| **電源** | 入力電圧（Type-C）：5V<br/>入力電圧（BAT）：5V |
| **低消費電力モード（標準）** | / |
| **ソフトウェア互換性** | Arduino、PlatformIO、MicroPython、CircuitPython、tinyGo、Rust、Zephyr、[Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/xiao_topic_page/) |
| **動作温度** | -20°C-70°C |
| **寸法** | 21x17.8mm |
| **バリエーション** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **ハードウェア概要**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
一般的なI/Oピンについて：
MCUの動作電圧は3.3Vです。一般的なI/Oピンに接続される電圧入力が3.3Vより高い場合、チップの損傷を引き起こす可能性があります。

電源供給ピンについて：
内蔵DC-DCコンバータ回路により5V電圧を3.3Vに変換できるため、VIN-PINと5V-PINを介して5V電源でデバイスに電力を供給できます。

XIAO RP2040は現在バッテリー電源供給のみをサポートしており、バッテリーが接続されている間はType-Cに接続できません。安全上のリスクを引き起こす可能性があります。

使用時は注意し、シールドカバーを持ち上げないでください。
:::

## **ピンマップ**
| XIAOピン        | 機能     | チップピン          | 説明                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | 電源入力/出力                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | 電源出力                         |
| D0              | Analog      | P26                                   | GPIO、ADC                            |
| D1              | Analog      | P27                                   | GPIO、ADC                            |
| D2              | Analog      | P28                                   | GPIO、ADC                            |
| D3              | Analog      | P29                                   | GPIO、ADC                            |
| D4              | SDA         | P6                                    | GPIO、I2Cデータ                       |
| D5              | SCL         | P7                                    | GPIO、I2Cクロック                      |
| D6              | TX          | P0                                    | GPIO、UART送信                  |
| D7              | RX,CSn      | P1                                    | GPIO、UART受信、CSn               |
| D8              | SCK         | P2                                    | GPIO、SPIクロック                      |
| D9              | MISO        | P4                                    | GPIO、SPIデータ                       |
| D10             | MOSI        | P3                                    | GPIO、SPIデータ                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | ブートモード開始                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | NEOPIX                       | RGB LED                              |
| USER_LED_R      |             | IO17_RGB-R                           | ユーザー制御赤色RGB LEDピン      |
| USER_LED_B      |             | IO25_RGB-B                            | ユーザー制御青色RGB LEDピン     |
| USER_LED_G      |             | IO16_RGB-G                           | ユーザー制御緑色RGB LEDピン    |

### **ブートローダーモードに入る**

ユーザーのプログラミングプロセスが失敗した場合、Seeed Studio XIAO RP2040のポートが消失することがあります。以下の操作でこの問題を解決できます：

- "B"ボタンを長押しします。
- Seeed Studio XIAO PR2040をコンピュータに接続します。
- コンピュータにディスクドライバが表示されます。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。RP2040チップには2つのパーティションがあり、1つはブートローダー、もう1つはユーザープログラムです。製品は工場出荷時にシステムメモリにブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

### **リセット**

Seeed Studio XIAO RP2040をリセットしたい場合は、以下の手順を実行してください：

- Seeed Studio XIAO RP2040をコンピュータに接続します。
- "R"ピンを**一度**押します。

注意：内蔵プログラマブル単色LED（赤、青、緑）の動作は、Arduinoのものとは逆になっています。Seeed Studio XIAO RP2040では、有効にするためにピンをローに引く必要があります。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

**ハードウェア設計**
- **📄[データシート]** [Raspberry Pi RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[回路図]** [XIAO RP2040 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB設計ファイル]** 
  - [ XIAO RP2040 KiCadプロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip )
  - [XIAO RP2040 Eagleプロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCadフットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCHシンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO RP2040 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**機械設計**
- **📄[2D寸法]** [XIAO RP2040 DXF寸法](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3Dモデル]** [ XIAO RP2040 3Dモデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート＆製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
