---
description: Seeed Studio XIAO SAMD21 入門ガイド
title: Seeed Studio XIAO SAMD21 入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_sarted.webp
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-11'
url: https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO SAMD21 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_1.jpg" alt="pir" width={400} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 概要

以前は Seeeduino XIAO と呼ばれていた Seeed Studio XIAO SAMD21 は、[Arduino と互換性のある、強力な親指サイズの開発ボードシリーズである Seeed Studio XIAO ファミリ](https://www.seeedstudio.com/xiao-series-page)の最初の製品です。低消費電力マイコンである強力な ATSAMD21G18A-MU を搭載しています。一方で、この小さなボードは処理性能に優れる一方で、必要とする電力は少なくなっています。非常に小型に設計されており、ウェアラブルデバイスや小規模なプロジェクトに使用できます。

Seeed Studio XIAO SAMD21 には 14 本のピンがあり、そのうち 11 本をデジタルインターフェース、11 本をアナログインターフェース、10 本を PWM インターフェース（d1〜d10）、1 本を DAC 出力ピン D0、1 つを SWD パッドインターフェース、1 つを I2C インターフェース、1 つを SPI インターフェース、1 つを UART インターフェースとして使用でき、シリアル通信インジケータ（T/R）、点滅用 LED（L）はピンの多重化によって実現されています。LED（Power, L, RX, TX）の色はそれぞれ緑、黄、青、青です。さらに、Seeed Studio XIAO SAMD21 には Type-C インターフェースがあり、電源供給とコードの書き込みが可能です。リセットボタンは 2 つあり、それらを短絡させることでボードをリセットできます。

Microchip の SAMD21G18A ARM Cortex-M0+ 32 ビットプロセッサを搭載した XIAO SAMD21 Plus は、小型で多用途な XIAO SAMD21 に、柔軟性と拡張性をさらに高めた機能をもたらします。Arduino、MicroPython、PlatformIO との互換性を含むすべての強力な機能を維持しつつ、Plus バリアントでは、再設計されたキャッスレーションと背面パッドレイアウトにより、16 個の追加 GPIO、統合 Li-ion バッテリーマネジメント、専用の Reset および Boot ボタン、オンボードのプログラマブル WS2812 RGB LED を提供します。高度な IoT プロジェクト、バッテリー駆動のウェアラブル、組み込みアプリケーション、量産向け SoM 設計に最適です。

## ドキュメント

**Seeed Studio XIAO SAMD21** の使い方に関するドキュメントが 2 種類あり、それぞれ異なる分野に焦点を当てています。参考として以下の表を確認してください。

|[**Seeed によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)|[**Nanase によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21 入門ガイド|Seeed Studio XIAO SAMD21 と MicroSD カード（SPI）|
|Seeed Studio XIAO SAMD21 GPIO の使い方|Seeed Studio XIAO SAMD21 と GPS（UART）|
|Seeed Studio XIAO SAMD21 リソース|シングルサイクル IOBUS|

<!-- ### CircuitPython on Seeed Studio XIAO SAMD21

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-CircuitPython). -->

## 特徴

- 強力な MCU：Microchip ATSAMD21G18A Arm® Cortex®-M0+ プロセッサ（48 MHz）、256 KB フラッシュ、32 KB SRAM、ネイティブ USB 対応。
- 拡張された I/O：XIAO SAMD21 Plus は標準の 14 ピン XIAO レイアウトを維持しつつ、1.27 mm ピッチ背面 SMD キャッスレーションにより 16 個の GPIO を追加し、PWM、DAC、I2C、UART、SPI、I2S、SWD をサポートします。
- 統合電源管理：Li-ion バッテリーの直接接続、オンボード充電、逆流保護、充電状態インジケータに対応。
- 柔軟な開発環境：Arduino IDE、PlatformIO、CircuitPython、TinyGo と互換。
- コンパクトでエコシステム対応：21 × 17.8 mm のブレッドボード対応 XIAO フォームファクタを維持しつつ、拡張ボードやカスタムキャリア設計向けに標準化された XIAO Plus 背面レイアウトを採用。

## 仕様

<!-- | Product Name | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Processor** | ARM Cortex-M0+ processor running at up to 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interface** | GPIO Pin x14<br/>Digital Pin x11<br/>Analog Pin x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Onboard** | User LED x1<br/>Power LED x1<br/>Status LEDs for Serial Communication (TX/RX Indicators) x2 |
| **Wireless Connectivity** | / |
| **Power** | Input voltage (Type-C): 5V<br/>Input voltage (BAT): 5V |
| **Max Output** | 5V@500mA<br/>3.3V@200mA |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exhibition for XIAO Series - Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/xiao_topic_page/ ) |
| **Working Temperature** | -40 to 85°C |
| **Dimensions** | 21×17.8mm |
| **Variants** | [Seeed Studio XIAO SAMD21 (Pre-Soldered) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) | -->

<table>
  <tbody>
    <tr>
      <th>Product Name</th>
      <td>Seeed Studio XIAO SAMD21</td>
      <td>Seeed Studio XIAO SAMD21 Plus</td>
    </tr>
    <tr>
      <th>Chipset</th>
      <td colspan="2">
        <a href="https://www.microchip.com/en-us/product/atsamd21g18">
          Microchip SAMD21G18
        </a>
      </td>
    </tr>
    <tr>
      <th>Processor</th>
      <td colspan="2">Arm® Cortex®-M0+ プロセッサ（最大 48 MHz 動作）</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td colspan="2">32 KB SRAM</td>
    </tr>
    <tr>
      <th>Flash</th>
      <td colspan="2">256 KB Flash</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>
        GPIO Pin ×14<br />
        Digital Pin ×11<br />
        Analog Pin ×11<br />
        DAC ×1<br />
        I2C ×1<br />
        UART ×1<br />
        SPI ×1
      </td>
      <td>
        GPIO Pin ×30<br />
        Digital Pin ×27<br />
        Analog Pin ×11<br />
        DAC ×1<br />
        I2C ×2<br />
        UART ×1<br />
        SPI ×1<br />
        I2S ×1
      </td>
    </tr>
    <tr>
      <th>Onboard</th>
      <td>
        User LED ×1<br />
        Power LED ×1<br />
        TX/RX Status LED ×2
      </td>
      <td>
        User LED ×1<br />
        Reset Button ×1<br />
        Boot Button ×1
      </td>
    </tr>
    <tr>
      <th>Battery Management</th>
      <td>なし</td>
      <td>オンボード PMIC</td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        入力電圧（Type-C）：5 V<br />
        BAT 入力：非対応
      </td>
      <td>
        入力電圧（Type-C）：5 V<br />
        BAT 入力：3.7 V 単セル Li-ion/LiPo バッテリー
      </td>
    </tr>
    <tr>
      <th>BAT-to-3V3 Backflow Protection</th>
      <td>なし</td>
      <td>あり</td>
    </tr>
    <tr>
      <th>Working Temperature</th>
      <td colspan="2">-40°C ～ 85°C</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td colspan="2">21 × 17.8 mm</td>
    </tr>
    <tr>
      <th>Software Compatibility</th>
      <td colspan="2">
        Arduino、PlatformIO、MicroPython、CircuitPython、Zephyr など
      </td>
    </tr>
  </tbody>
</table>

## **ハードウェア概要**

<Tabs>
<TabItem value="XIAO SAMD21" label="XIAO SAMD21" default>

### XIAO SAMD21 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO SAMD21 Plus" label="XIAO SAMD21 Plus">

### XIAO SAMD21 Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
一般的な I/O ピンについて：
MCU の動作電圧は 3.3V です。一般的な I/O ピンに接続される入力電圧が 3.3V を超えると、チップが損傷する可能性があります。

電源ピンについて：
内蔵の DC-DC コンバータ回路は 5V を 3.3V に変換でき、VIN-PIN および 5V-PIN を介して 5V 電源でデバイスに給電することができます。

XIAO SAMD21 の背面にある VIN および GND パッドは、特に充電式リチウムバッテリー（LiPo/Li-Ion）を直接接続するために設計されていないことを理解することが重要です。このボードには、安全な動作に必要なバッテリーマネジメント回路が搭載されていません。これらのパッドは、ボード内蔵の保護ダイオードをバイパスする代替の電源入力ポイントにすぎません。プロジェクトをバッテリーで駆動したい場合は、充電と保護機能を備えた専用の外部バッテリーマネジメントモジュールを使用し、そのモジュールの安定化出力を XIAO の 5V ピンに接続する必要があります。

使用時には十分注意し、シールドカバーを持ち上げないでください。
:::

## ピンマップ

<!-- | XIAO Pin        | Function      | Chip Pin  |   Description      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Power Input/Output     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Power Output           |
|D0             |  Analog         |   PA02                                |     GPIO, ADC            |
| D1            |   Analog        |   PA04                                |        GPIO, ADC         |
| D2            |     Analog      | PA10                                  |    GPIO, ADC             |
| D3            |    Analog       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analog,SDA   	| PA08		                              | GPIO, I2C Data, ADC        |
| D5            |  Analog,SCL     |	PA09	                                |	GPIO, I2C Clock, ADC       |
| D6            | Analog,TX       |  	PB08	                               |	GPIO, UART Transmit, ADC |  
| D7            |Analog,RX	      |  PB09	                                |   	GPIO, UART Receive, ADC |
|D8             | Analog,SPI_SCK  | 	PA07	                              |	GPIO, SPI Clock, ADC   |
|D9             | Analog,SPI_MISO |  	PA05                                |		GPIO, SPI Data, ADC  |
|D10            | Analog,SPI_MOSI |  PA06	                                | 	GPIO, SPI Data         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Red      |
|USER_LED       |                 |   PA17	                              |	User Light_Yellow      | -->

| XIAO Pin    | 機能               | XIAO SAMD21   | XIAO SAMD21 Plus | 説明                                                         |
| :---------- | :----------------- | :------------ | :---------------- | :--------------------------------------------------------- |
| 5V          | VBUS               | VBUS          | VBUS              | USB 5 V 電源入力/出力                                       |
| GND         | GND                | GND           | GND               | グラウンド                                                   |
| 3V3         | 3V3_OUT            | 3V3_OUT       | 3V3_OUT           | 3.3 V 電源出力                                              |
| D0          | A0 / DAC           | PA02          | PA02              | GPIO、ADC AIN0、DAC 出力；ハードウェア PWM なし             |
| D1          | A1                 | PA04          | PA04              | GPIO、ADC AIN4                                              |
| D2          | A2                 | PA10          | PA10              | GPIO、ADC AIN18                                             |
| D3          | A3                 | PA11          | PA11              | GPIO、ADC AIN19                                             |
| D4          | SDA0               | PA08          | PA08              | GPIO、ADC AIN16、I2C データ                                  |
| D5          | SCL0               | PA09          | PA09              | GPIO、ADC AIN17、I2C クロック                                |
| D6          | TX                 | PB08          | PB08              | GPIO、ADC AIN2、UART 送信                                   |
| D7          | RX                 | PB09          | PB09              | GPIO、ADC AIN3、UART 受信                                   |
| D8          | SCK                | PA07          | PA07              | GPIO、ADC AIN7、SPI クロック                                |
| D9          | MISO               | PA05          | PA05              | GPIO、ADC AIN5、SPI データ入力                              |
| D10         | MOSI               | PA06          | PA06              | GPIO、ADC AIN6、SPI データ出力                              |
| D11         | TX_LED             | PA19          | -                 | XIAO SAMD21 上の内部 TX LED；Plus では未定義               |
| D12         | GPIO               | PA18 (RX_LED) | PA28              | Plus 拡張 GPIO                                              |
| D13         | SCL1               | PA17 (USER_LED) | PA17            | Plus 拡張 GPIO および I2C1 クロック                         |
| D14         | SDA1               | -             | PA16              | Plus 拡張 GPIO および I2C1 データ                           |
| D15         | GPIO               | -             | PA15              | Plus 拡張 GPIO                                              |
| D16         | GPIO               | -             | PA14              | Plus 拡張 GPIO                                              |
| D17         | GPIO               | -             | PA13              | Plus 拡張 GPIO                                              |
| D18         | GPIO               | -             | PA12              | Plus 拡張 GPIO                                              |
| D19         | I2S_SD             | -             | PA19              | Plus 拡張 GPIO および I2S データ                            |
| D20         | I2S_SCK            | -             | PA20              | Plus 拡張 GPIO および I2S クロック                          |
| D21         | I2S_WS             | -             | PA21              | Plus 拡張 GPIO および I2S ワードセレクト                    |
| D22         | GPIO               | -             | PB10              | Plus 拡張 GPIO                                              |
| D23         | GPIO               | -             | PB11              | Plus 拡張 GPIO                                              |
| D24         | GPIO               | -             | PB23              | Plus 拡張 GPIO                                              |
| D25         | GPIO               | -             | PA23              | Plus 拡張 GPIO                                              |
| D26         | GPIO               | -             | PB2               | Plus 拡張 GPIO                                              |
| D27         | GPIO               | -             | PA18              | Plus 拡張 GPIO                                              |
| VBAT_EN     | バッテリー有効化  | -             | PB2               | Plus 上のバッテリー電源制御                                 |
| AIN11_VBAT  | 電圧読み取り       | -             | PB3               | Plus 上のバッテリー電圧を読み取る                           |
| Reset       | RESETN             | RESETN        | RESETN            | アクティブ Low リセット入力、パッケージピン 40              |
| TX_LED      | LED                | PA19          | -                 | オリジナルボードの TX インジケータ、アクティブ Low          |
| RX_LED      | LED                | PA18          | -                 | オリジナルボードの RX インジケータ、アクティブ Low          |
| USER_LED    | LED                | PA17          | -                 | オリジナルボードのユーザー LED、アクティブ Low             |
| POWER_LED   | 電源インジケータ  | 3V3           | -                 | オリジナルボードの緑色電源 LED；MCU GPIO ではない           |
| RGB_LED     | WS2812B データ     | -             | PA27              | Plus のアドレス指定可能 RGB LED データ                     |
| USER_BUTTON | ボタン             | -             | PB22              | Plus のユーザーボタン、アクティブ Low                       |
| VBAT_EN     | バッテリー ADC 有効化 | -          | PB02              | バッテリー電圧測定を有効化                                  |
| AIN11_VBAT  | バッテリー ADC     | -             | PB03 / AIN11      | 1/2 分圧を通したバッテリー電圧                              |
| CHARGE_LED  | 充電インジケータ   | -             | -                 | Plus のハードウェア制御充電 LED；MCU GPIO ではない          |
| SWDIO       | SWD デバッグ       | PA31          | PA31              | Serial Wire Debug データ                                    |
| SWCLK       | SWD デバッグ       | PA30          | PA30              | Serial Wire Debug クロック                                  |

## ブートローダーモードに入る

### XIAO SAMD21 の場合

ユーザーのプログラミング処理が失敗したとき、Seeed Studio XIAO SAMD21 のポートが消えてしまうことがあります。次の操作を行うことでこの問題を解決できます：

- Seeed Studio XIAO SAMD21 をコンピュータに接続します。
- ピン配置図の RST ピンを、ピンセットまたは短絡線を使って 2 回ショートさせます。
- オレンジ色の LED が点滅し、その後点灯します。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び現れます。samd21 チップには 2 つのパーティションがあり、1 つはブートローダー、もう 1 つはユーザープログラムです。製品は出荷時に、システムメモリ内にブートローダーコードを書き込みます。上記の手順を実行することでモードを切り替えることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### XIAO SAMD21 Plus の場合

XIAO SAMD21 Plus をコンピュータに接続します。Reset ボタンを連続して 2 回押すと、ブートローダーモードに入ります。

### リセット

Seeed Studio XIAO SAMD21 をリセットしたい場合は、次の手順を実行します：

- Seeed Studio XIAO SAMD21 をコンピュータに接続します。
- ピンセットまたは短絡線を使って、RST ピンを**1 回だけ**ショートさせます
- オレンジ色の LED が点滅し、その後点灯します。

注意：内蔵 LED の動作は Arduino 上のものとは逆です。Seeed Studio XIAO SAMD21 では、ピンを Low にしなければなりませんが、他のマイコンでは High にする必要があります。  

### 割り込み

Seeed Studio XIAO SAMD21 上のすべてのピンは割り込みをサポートしますが、5 番ピンと 7 番ピンの 2 本は同時には使用できません。割り込みの詳細については[こちら](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)を参照してください。

## 入門ガイド

### ハードウェア

**必要な部材**

- Seeed Studio XIAO SAMD21 x1
- コンピュータ x1
- USB Type-C ケーブル x1

:::tip

一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、手元の USB ケーブルがデータ転送に対応しているか分からない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) を確認してください。
:::

- Step 1. Seeed Studio XIAO SAMD21 と Type-C ケーブルを準備します。

- Step 2. Seeed Studio XIAO SAMD21 をコンピュータに接続します。その後、黄色の電源 LED が点灯するはずです。

### ソフトウェア

:::note

初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino) を参照することを強くお勧めします。
:::

- **Step 1. Arduino ソフトウェアをインストールする必要があります。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Arduino アプリケーションを起動する**

事前にダウンロードした Arduino アプリケーション（arduino.exe）をダブルクリックします。

:::note

Arduino ソフトウェアが別の言語で起動した場合は、設定ダイアログで変更できます。詳細は [Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages) を参照してください。
:::

- **Step 2. Blink サンプルを開く**  

LED 点滅サンプルスケッチを開きます：**File > Examples >01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Step 3. Seeeduino を Arduino IDE に追加する**

**File > Preference** をクリックし、Additional Boards Manager URLs に以下の URL を入力します：

```url
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

**Tools-> Board-> Boards Manager...** をクリックし、検索欄にキーワード "**Seeed Studio XIAO SAMD21**" を入力します。**Seeed SAMD Boards** が表示されるので、インストールします。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

#### XIAO SAMD21 ブリンク

- **ステップ 4. ボードとポートを選択する**

ボードをインストールしたら、**Tools-> Board** をクリックし、**Seeed Studio XIAO** を探して選択します。これで Arduino IDE 用の Seeed Studio XIAO SAMD21 ボードの設定は完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Tools | Serial Port メニューから Arduino ボードのシリアルデバイスを選択します。これは通常 COM3 以降です（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。確認するには、Arduino ボードを取り外してからメニューを再度開き、消えた項目が Arduino ボードになります。ボードを再接続し、そのシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5. プログラムを書き込む**  

あとは、環境内の **Upload** ボタンをクリックするだけです。数秒待ち、書き込みが成功すると、ステータスバーに "Done uploading." というメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 書き込みが完了してから数秒後、ボード上の 13 番ピン (L) の LED が（オレンジ色で）点滅し始めるはずです。そうなればおめでとうございます！Arduino が正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

:::note
最大フラッシュサイズは 8 KB です。詳細については、リソースセクションの ATSAMD21G18A-MU データシートを参照してください。
:::

#### XIAO SAMD21 Plus ブリンク

XIAO SAMD21 Plus では、L (LED) ピンは削除されています。その代わりに RGB_LED があり、ピン PA27 を介して制御されます。

‑ 対象ボードを XIAO M0 Plus に変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_1.png" alt="pir" width={800} height="auto" /></p>

- Adafruit_NeoPixel ライブラリをインストールし、最新バージョンに更新します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_2.png" alt="pir" width={800} height="auto" /></p>

‑ 以下のスニペットにコードを置き換えます。RGB_LED 用のピンは PA27 で、PIN_LED_RGB として再定義されています。

:::caution

RGB LED を過度な明るさで動作させると、眼精疲労や目の損傷を引き起こす可能性があります。適切な目の保護具の使用を推奨します。

:::

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

‑ Upload をクリックしてプログラムを書き込みます。完了すると、RGB‑LED が点灯します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_3.gif" alt="pir" width={600} height="auto" /></p>

:::note
最大フラッシュサイズは 8 KB です。詳細については、リソースセクションの ATSAMD21G18A-MU データシートを参照してください。
:::

## ピン多重化

ピンを自分で設定する必要はなく、ピンを使用した後は関数を直接呼び出すことができます。

### デジタル入力と出力

- ピン 6 をデジタルピンとして使用します：

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

### AnalogRead

- ピン 6 をアナログピンとして使用します：

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### シリアル

- ピン 6 を UART の TX ピンとして使用します（UART の RX ピンはピン 7 です）：

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

### I2C

- ピン 5 を IIC の SCL ピンとして使用します（IIC の SDA ピンはピン 4 です）：

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

### SPI

- ピン 8 を SPI の SCK ピンとして使用します（SPI の MISO ピンはピン 9、MOSI ピンはピン 10 です）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

### QTouch

QTouch の使用方法については、サンプルプロジェクトを提供しています：[How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

### アナログ入力と出力

PWM ベースの「アナログ出力」を備えているだけでなく、SAMD21 にはデジタル‑アナログコンバータ（DAC）という形で真のアナログ出力機能もあります。このモジュールは 0～3.3V のアナログ電圧を生成できます。より自然な音のオーディオを生成したり、アナログデバイスを制御するための一種の「デジタルポテンショメータ」として使用したりできます。

DAC は Arduino のピン A0 でのみ使用可能で、analogWrite(A0, `<value>`) を使用して制御します。DAC は最大 10 ビット分解能まで設定できます（セットアップ内で必ず [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) を呼び出してください）。これは、0 から 1023 までの値が 0 から 3.3V の間のどこかの電圧を設定することを意味します。

DAC に加えて、SAMD21 の ADC チャンネルも ATmega328 とは異なり、最大 12 ビット分解能を備えています。つまり、アナログ入力値は 0～4095 の範囲となり、0～3.3V の電圧を表します。ADC を 12 ビットモードで使用するには、セットアップ内で [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) を呼び出してください。

**DAC をシリアルプロットする**

ここでは、DAC と ADC の両方を示す例を紹介します。実験をセットアップするには、A0 を A1 に接続します — A0 にアナログ電圧を印加し、それを A1 で読み取ります。これは、これまでのチュートリアルの中で最もシンプルな回路です：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
Seeed Studio XIAO SAMD21 は [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用しています。
:::

このスケッチは、A0 に 0～3.3V の値を持つ正弦波出力を生成します。次に A1 を使用してその出力を ADC に読み込み、0～3.3V の電圧に変換します。

もちろん、シリアルモニタを開いて電圧値のストリームを確認することもできます。しかし、テキストだけでは正弦波をイメージしにくい場合は、Tools > Serial Plotter から Arduino の新しい Serial Plotter を確認してみてください。  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

コードを提供してくださった [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) 氏に感謝します。関連するすべての機能は彼によって開発・提供されました。

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**結果**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## バッテリーの使用

:::note

背面に BAT バッテリーコネクタを備えているのは XIAO SAMD21 Plus のみですので、ご注意ください。

:::

XIAO SAMD21 Plus は、3.7V リチウムバッテリーを電源入力として使用できます。配線方法については、次の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

はんだ付けの際には、正極と負極を短絡させてバッテリーや機器を焼損させないよう十分注意してください。バッテリーに電力が残っている場合は、決して基板にはんだ付けしないでください。基板の回路が焼損するおそれがあります。回路に通電した状態で短絡させることは大きな危険を伴うため、アダプタの使用を推奨します。

:::

### バッテリー電圧読み取りの例

回路図によると、**SGM40567-4.2XG/TR** は単セルリチウムバッテリーの充電を行い、充電電流はおよそ **200 mA** です。充電中は **Charge_LED** が点滅します。<br/>

バッテリー電圧の測定は、**TPS22916CNYFPR** ロードスイッチを **PB2/VBAT_EN** で制御することで行い、待機時の消費電力を低減します。バッテリー電圧は 1/2 に分圧され、**PB3/AIN11_VBAT** ADC ピンを通して測定されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read.png" style={{width:800, height:'auto'}}/></div>
<br/>

バッテリー電圧は抵抗分圧回路を用いて測定されます。ADC が読み取る電圧は実際のバッテリー電圧の半分であるため、ソフトウェア側で ADC の測定値に 2 を掛けて実際のバッテリー電圧を求める必要があります。

Arduino コアでは、PB02 と PB03 はそれぞれピン番号 31 と 32 にマッピングされています。次のように定義します：

```cpp
// VBAT_EN on PB02
#define PIN_VBAT_EN  (31u)

// AIN11_VBAT on PB03
#define PIN_VBAT_ADC (32u)
```

<details>

<summary>バッテリー読み取りの例</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // R5 = R6 = 10 kΩ

float readBatteryVoltage() {
  digitalWrite(PIN_VBAT_EN, HIGH);
  delay(10);

  analogRead(PIN_VBAT_ADC);  // Discard a stale reading

  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(PIN_VBAT_ADC);
    delay(2);
  }

  digitalWrite(PIN_VBAT_EN, LOW);

  float adcRaw = sum / static_cast<float>(samples);
  float adcVoltage = adcRaw * ADC_VREF / ADC_MAX;

  return adcVoltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(PIN_VBAT_EN, OUTPUT);
  digitalWrite(PIN_VBAT_EN, LOW);

  analogReadResolution(12);  // SAMD21 ADC: 0–4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

低消費電力アプリケーションでは、バッテリー電圧の測定が完了したら **BAT_EN** を無効にして、分圧抵抗による静止時の消費電力を低減してください。

:::

- バッテリー充電中は **Charge_LED** が点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- バッテリー電圧測定結果：リチウムイオンバッテリーの測定電圧は、バッテリーに印字されている公称値と異なる場合があります。必ず実際の測定値を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## サンプルアプリケーション

- [Seeed Studio XIAO SAMD21 を使用して Raspberry PI にログインする方法](https://wiki.seeedstudio.com/ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信インターフェース](https://wiki.seeedstudio.com/ja/XIAO-SPI-Communication-Interface)

- [Raspberry Pi を使用して故障した XIAO を復旧する方法](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。共有してくれた John_Doe に感謝します。

## リソース

### XIAO SAMD21

**ハードウェア設計**
- **📄[データシート]** [Atmel SAMD21G18 データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[回路図]** [XIAO SAMD21 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [XIAO SAMD21 KiCad プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [XIAO SAMD21 Eagle プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置シート]** [XIAO SAMD21 ピン配置シート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [DXF 形式の XIAO 寸法](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D モデル]** [XIAO SAMD21 3D モデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**ソフトウェア & ツール**
- **📄[工場出荷時ファームウェア]** [XIAO SAMD21 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

### XIAO SAMD21 Plus

**ハードウェア設計**
- **📄[データシート]** [Atmel SAMD21G18 データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[回路図]** [XIAO SAMD21 Plus 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21Plus_260422.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [XIAO SAMD21 Plus KiCad プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21-Plus_V1.0_SCH&PCB_20260422.zip)  
  - [XIAO SAMD21 Plus Eagle プロジェクト](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置シート]** [XIAO SAMD21 Plus ピン配置シート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-PLUS-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D 寸法]** [DXF 形式の XIAO 寸法](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D モデル]** [XIAO SAMD21 Plus 3D モデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
