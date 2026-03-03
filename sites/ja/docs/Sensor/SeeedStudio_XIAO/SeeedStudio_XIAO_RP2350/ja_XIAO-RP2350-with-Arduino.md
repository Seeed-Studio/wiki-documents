---
description: XIAO RP2350 ボードで Arduino を使用する
title: Seeed Studio XIAO RP2350(Arduino) 入門ガイド
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /ja/xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 と Arduino

Seeed Studio XIAO RP2350 ボードは、[arduino-pico core](https://github.com/earlephilhower/arduino-pico) により Arduino でのプログラミングに対応しました。このガイドでは、RP2350 ボードで Arduino を使い始めるためのセットアップ手順を説明します。

## 特長

- **高性能 MCU ボード:** Raspberry Pi RP2350 チップを搭載し、対称型デュアル Arm Cortex-M33（FPU 搭載）@ 150MHz を備えています。
- **強化されたセキュリティ機能:** セキュアブートと暗号化ブートローダーを内蔵し、アプリケーションの安全性を確保します。
- **ソフトウェアサポート:** C/C++ および MicroPython に対応しており、プロジェクト開発やプロトタイピングを容易にします。
- **豊富なオンボードリソース:** RGB LED、2MB フラッシュ、520kB SRAM、19 本の多機能 GPIO（アナログ、デジタル、I²C、UART、SPI、PWM）を統合しています。
- **新たに 8 本の IO を拡張:** 既存の XIAO MCU と比較して、背面に 8 本の IO ピンが追加され、より複雑なアプリケーションをサポートします。
- **高効率な電源設計:** スリープモードでわずか 50μA の超低消費電力で、バッテリー駆動が可能です。内部 IO による直接的なバッテリー電圧測定により、バッテリーマネジメントシステム（BMS）を強化します。
- **親指サイズのコンパクト設計:** 21 x 17.8mm のサイズで、Seeed Studio のクラシックな XIAO フォームファクタを採用しており、省スペース用途に最適です。
- **量産に適した設計:** すべての部品を表面側に配置した表面実装デバイス（SMD）設計で、両側にスタンピングホールを備え、大量生産を容易にします。

## 仕様

<table>
  <tr>
    <th>製品</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>プロセッサ</th>
    <td>Raspberry Pi RP2040<br/>デュアル Cortex-M0+ @ 133MHz</td>
    <td>Raspberry Pi RP2350<br/>デュアル Cortex-M33 @ 150MHz, FPU</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>264kB SRAM</td>
    <td>520kB SRAM</td>
  </tr>
  <tr>
    <th>フラッシュ</th>
    <td>2MB オンボード</td>
    <td>2MB フラッシュ</td>
  </tr>
  <tr>
    <th>LED</th>
    <td>ユーザー LED x1<br/>電源 LED x1<br/>RGB LED x1</td>
    <td>ユーザー LED x1<br/>電源 LED x1<br/>RGB LED x1</td>
  </tr>
  <tr>
    <th>インターフェース</th>
    <td>11 ピン（すべて PWM）：<br/>アナログ x4<br/>デジタル x11<br/>I²C x1<br/>UART x1<br/>SPI x1</td>
    <td>19 ピン（すべて PWM）：<br/>アナログ x3<br/>デジタル x19<br/>I²C x2<br/>UART x2<br/>SPI x2</td>
  </tr>
  <tr>
    <th>ボタン</th>
    <td>RESET ボタン x1<br/>BOOT ボタン x1</td>
    <td>RESET ボタン x1<br/>BOOT ボタン x1</td>
  </tr>
  <tr>
    <th>セキュリティ</th>
    <td>-</td>
    <td>OTP、Secure Boot、Arm TrustZone</td>
  </tr>
  <tr>
    <th>ソフトウェア互換性</th>
    <td>Micropython / Arduino / CircuitPython をサポート</td>
    <td>Micropython / Arduino / C,C++ をサポート</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td>-20°C〜70°C</td>
    <td>-20°C〜70°C</td>
  </tr>
  <tr>
    <th>寸法</th>
    <td>21x17.8 mm</td>
    <td>21x17.8 mm</td>
  </tr>
</table>

## ハードウェア概要

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 表面ピン配置</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 裏面ピン配置</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 コンポーネント</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

ピン配置の詳細が必要ですか？下記の [Assets and Resources](#assets-と-resources) に移動してください。


## **ピンマップ**
| XIAO ピン               | 機能       | チップピン   | 代替機能              | 説明                                   |
| :---------------------: | :-------: | :----------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | 電源入力/出力                          |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | 電源出力                               |
| D0                      | Analog     | GPIO26       |                    | GPIO、ADC                            |
| D1                      | Analog     | GPIO27       |                    | GPIO、ADC                            |
| D2                      | Analog     | GPIO28       |                    | GPIO、ADC                            |
| D3                      | SPIO_CSn   | GPIO5        |                    | GPIO、SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO、I2C データ                      |
| D5                      | SCL1       | GPIO7        |                    | GPIO、I2C クロック                    |
| D6                      | TX0        | GPIO0        |                    | GPIO、UART 送信                       |
| D7                      | RX0        | GPIO1        |                    | GPIO、UART 受信                       |
| D8                      | SPIO_SCK   | GPIO2        |                    | GPIO、SPI クロック                    |
| D9                      | SPIO_MISO  | GPIO4        |                    | GPIO、SPI データ                      |
| D10                     | SPIO_MOSI  | GPIO3        |                    | GPIO、SPI データ                      |
| D11                     | RX1        | GPIO21       |                    | GPIO、UART 受信                       |
| D12                     | TX1        | GPIO20       |                    | GPIO、UART 送信                       |
| D13                     | SCL0       | GPIO17       |                    | GPIO、I2C クロック                    |
| D14                     | SDA0       | GPIO16       |                    | GPIO、I2C データ                      |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO、SPI データ                      |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO、SPI データ                      |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO、SPI クロック                    |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | BAT 電圧値を読み取る                  |
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | ブートモードに入る                    |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_Red                          |
| RGB LED                 |            | GPIO22       |                    | RGB LED                              |
| USER_LED                |            | GPIO25       |                    | ユーザーライト_イエロー               |
## 前提条件

始める前に、次のものを用意してください：

- RP2350 ボード
- Arduino IDE
- USB ケーブル

## ソフトウェアのセットアップ

### 1. Arduino IDE をインストールする

公式サイトから最新の Arduino IDE をダウンロードしてインストールします: [Arduino Software](https://www.arduino.cc/en/software)。

### 2. RP2350 ボードサポートを追加する

1. Arduino IDE を開き、**File** > **Preferences** に移動します。
2. **Additional Boards Manager URLs** フィールドに、次の URL を追加します:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. **OK** をクリックして設定を保存します。
4. **Tools** > **Board** > **Boards Manager** に移動します。
5. Boards Manager で **pico** を検索し、**Install** をクリックします。
6. インストール後、**Tools** > **Board** に移動し、下図に示すボードを選択します。

:::note
XIAO RP2350 ボードを完全にサポートするには、バージョン 4.2.0 以降をインストールしてください。
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. スケッチを書き込む

スケッチを書き込む前に、XIAO RP2350 を BOOT モードにします。次のいずれかの方法を使用します：

<Tabs>
<TabItem value="method1" label="方法 1: コンピュータに接続する前">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Boot を押し続ける -> ケーブルを接続する -> Boot を離す</em></div></div>

</TabItem>

<TabItem value="method2" label="方法 2: コンピュータに接続中">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Boot を押し続ける -> Reset をクリックする -> Boot を離す</em></div></div>

</TabItem>
</Tabs>

1. Arduino IDE を開き、新しいスケッチを作成します。
2. コードを書きます。たとえば、`Blink` のサンプルコードを使用します。
3. **Tools** > **Port** に移動し、RP2350 が接続されているポートを選択します。

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>


## アセット & リソース


**ハードウェア設計**
- **📄[データシート]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[回路図]** [XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO RP2350 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [XIAO RP2350 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[3D モデル]** [XIAO RP2350 3D Model](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**ソフトウェア & ツール**
- **📄[テスト用ファームウェア]** [XIAO RP2350 Low Power Test Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**その他**
- **📄[ドキュメント]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - Raspberry Pi Pico ボードのセットアップとプログラミングについて解説した包括的なガイドで、MicroPython や C/C++ を学びたい初心者に最適です。
- **📄[ドキュメント]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - MicroPython のセットアップチュートリアルと API をまとめた書籍です
- **📄[ドキュメント]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - Pico C/C++ SDK の API をまとめた書籍です
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Arduino-Pico Core Documentation]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## サポート & ディスカッション

Seeed の製品をご利用いただきありがとうございます。サポートやコミュニティでのディスカッションには、以下の複数のチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
