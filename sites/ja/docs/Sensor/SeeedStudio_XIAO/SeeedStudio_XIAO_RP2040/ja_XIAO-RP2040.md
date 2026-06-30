---
description: 概要
title: Seeed Studio XIAO RP2040 入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/XIAO-RP2040/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO RP2040 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040 は Seeed Studio XIAO SAMD21 と同じくらい小型ですが、より高性能です。一方で、強力なデュアルコア RP2040 プロセッサを搭載しており、柔軟なクロックで最大 133 MHz で動作できる低消費電力マイクロコントローラです。Seeed Studio XIAO RP2040 には 264KB の SRAM と 2MB のオンボード Flash メモリも搭載されており、より多くのプログラムを保存して実行できます。他方で、この小さなボードは処理性能に優れる一方で、必要とする電力は少なくて済みます。  
まとめると、親指ほどの小さなサイズ（21x17.8mm）で設計されており、ウェアラブルデバイスや小規模プロジェクトに使用できます。

Seeed Studio XIAO RP2040 には 14 本の GPIO ピンがあり、そのうち 11 本がデジタルピン、4 本がアナログピン、11 本が PWM ピン、1 つの I2C インターフェース、1 つの UART インターフェース、1 つの SPI インターフェース、1 つの SWD ボンディングパッドインターフェースがあります。

Seeed Studio XIAO RP2040 は Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## **特長**

- 強力な MCU：デュアルコア ARM Cortex M0+ プロセッサ、柔軟なクロックで最大 133 MHz で動作
- 豊富なオンチップリソース：264KB の SRAM、および 2MB のオンボード Flash メモリ
- 柔軟な互換性：Micropython/Arduino/CircuitPython をサポート
- プロジェクトの実装が容易：ブレッドボード対応 & SMD 設計、背面に部品なし
- 小型サイズ：親指ほどの小ささ（21x17.8mm）で、ウェアラブルデバイスや小規模プロジェクト向け
- 複数のインターフェース：11 本のデジタルピン、4 本のアナログピン、11 本の PWM ピン、1 つの I2C インターフェース、1 つの UART インターフェース、1 つの SPI インターフェース、1 つの SWD ボンディングパッドインターフェース

## **仕様**

| 製品名 | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **チップセット** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **プロセッサ** | 最大 133 MHz で動作するデュアル Cortex M0+ プロセッサ |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB オンボード Flash |
| **インターフェース** | GPIO ピン x14<br/>デジタルピン x11<br/>アナログピン x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **オンボード** | ユーザー LED（3 色）x1<br/>電源 LED x1<br/>RGB LED x1<br/>リセットボタン x1<br/>ブートボタン x1 |
| **無線接続** | / |
| **電源** | 入力電圧 (Type-C)：5V<br/>入力電圧 (BAT)：5V |
| **低消費電力モード（代表値）** | / |
| **ソフトウェア互換性** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [XIAO シリーズ展示 \| Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/xiao_topic_page/) |
| **動作温度** | -20°C-70°C |
| **寸法** | 21x17.8mm |
| **バリエーション** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **ハードウェア概要**

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::caution
汎用 I/O ピンについて：
MCU の動作電圧は 3.3V です。汎用 I/O ピンに 3.3V を超える電圧を入力すると、チップが損傷する可能性があります。

電源ピンについて：
内蔵の DC-DC コンバータ回路は 5V 電圧を 3.3V に変換でき、VIN-PIN および 5V-PIN を介して 5V 電源でデバイスに給電することができます。

XIAO RP2040 は現在、バッテリー電源供給のみに対応しており、バッテリー接続中に Type-C を接続することはできません。安全上のリスクとなる可能性があります。

使用時には十分注意し、シールドカバーを持ち上げないでください。
:::

## **ピンマップ**
| XIAO ピン        | 機能     | チップピン          | 説明                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | 電源入力/出力                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | 電源出力                         |
| D0              | アナログ      | GPIO26                                   | GPIO, ADC                            |
| D1              | アナログ      | GPIO27                                   | GPIO, ADC                            |
| D2              | アナログ      | GPIO28                                   | GPIO, ADC                            |
| D3              | アナログ      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, I2C データ                       |
| D5              | SCL         | GPIO7                                    | GPIO, I2C クロック                      |
| D6              | TX          | GPIO0                                    | GPIO, UART 送信                  |
| D7              | RX,CSn      | GPIO1                                    | GPIO, UART 受信,CSn               |
| D8              | SCK         | GPIO2                                    | GPIO, SPI クロック                      |
| D9              | MISO        |GPIO4                                    | GPIO, SPI データ                       |
| D10             | MOSI        | GPIO3                                    | GPIO, SPI データ                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | ブートモードに入る                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | GPIO12                       | RGB LED                              |
| USER_LED_R      |             | GPIO17                           | ユーザー制御の赤色 RGB LED ピン      |
| USER_LED_B      |             | GPIO25                            | ユーザー制御の青色 RGB LED ピン     |
| USER_LED_G      |             | GPIO16                          | ユーザー制御の緑色 RGB LED ピン    |

### **ブートローダーモードに入る**

ユーザーのプログラミング処理が失敗した場合、Seeed Studio XIAO RP2040 のポートが消えてしまうことがあります。この問題は次の操作で解決できます。

- 「B」ボタンを長押しします。
- Seeed Studio XIAO PR2040 をコンピュータに接続します。
- コンピュータにディスクドライブが表示されます。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。RP2040 チップには 2 つのパーティションがあり、1 つはブートローダー、もう 1 つはユーザープログラムです。製品は出荷時にシステムメモリ内にブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

### **リセット**

Seeed Studio XIAO RP2040 をリセットしたい場合は、次の手順を実行します。

- Seeed Studio XIAO RP2040 をコンピュータに接続します。
- 「R」ピンを**1 回**押します。

注意：内蔵のプログラマブル単色 LED（赤、青、緑）は、Arduino 上のものとは動作が逆になっています。Seeed Studio XIAO RP2040 では、ピンを Low に引き下げることで有効になります。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

**ハードウェア設計**
- **📄[データシート]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[回路図]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB 設計ファイル]** 
  - [ XIAO RP2040 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Eagle プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO RP2040 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [XIAO RP2040 DXF 形式寸法](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D モデル]** [ XIAO RP2040 3D モデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
