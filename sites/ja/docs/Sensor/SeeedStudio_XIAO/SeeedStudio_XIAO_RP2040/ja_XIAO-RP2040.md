---
description: 概要
title: Seeed Studio XIAO RP2040 入門ガイド
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/XIAO-RP2040/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO RP2040 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.jpg" alt="pir" width={400} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 概要

Seeed Studio XIAO RP2040 シリーズには、**XIAO RP2040** と **XIAO RP2040 Plus** が含まれます。両方のボードは同じ Raspberry Pi RP2040 マイクロコントローラを搭載しており、最大 133 MHz で動作するデュアルコア Arm Cortex-M0+ プロセッサと 264 KB の SRAM を備えています。各ボードには 2 MB のオンボード Flash メモリも搭載されています。その結果、同じコア処理性能を発揮し、同じ RP2040 ソフトウェアエコシステムを共有します。

2 つのボードの主な違いは、外部に引き出されている GPIO の数、利用可能な周辺接続、およびオンボードの電源管理機能です。

標準の XIAO RP2040 は一般的な 14 ピンの XIAO フットプリントを採用しており、11 本の GPIO ピンと 3 本の電源ピンで構成されています。11 本のデジタル I/O ピンはすべて PWM に対応しており、そのうち 4 本はアナログ入力もサポートします。このボードは、コンパクトな 21 × 17.8 mm のフォームファクタで I2C、UART、SPI、SWD インターフェースを提供します。

XIAO RP2040 Plus は、同じ一般的な 14 ピン XIAO レイアウトを維持しつつ、ボードの背面と側面に 15 個の GPIO はんだパッドを追加しています。これにより、外部に引き出されるデジタル I/O ピンの総数は 11 本から 26 本に増加します。また、第 2 の I2C インターフェース、専用の USB D+/D− パッド、BAT+、BAT−、BAT_EN を含むバッテリー関連の接続も追加されています。

バッテリー駆動アプリケーション向けに、XIAO RP2040 Plus にはオンボード PMIC、バッテリー充電インジケータ、および BAT から 3V3 への逆流保護が統合されています。これらの追加機能により、Plus バージョンはカスタムキャリアボード、SMD 実装、バッテリー駆動デバイス、そしてより多くの I/O リソースを必要とするプロジェクトにより適しています。

Seeed Studio XIAO RP2040 は Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- **高性能 RP2040 MCU:** 最大 133 MHz で動作するデュアルコア Arm Cortex-M0+ プロセッサ
- **豊富なメモリリソース:** 264 KB の SRAM と 2 MB のオンボード Flash メモリ
- **幅広いソフトウェア互換性:** Arduino、PlatformIO、MicroPython、CircuitPython、TinyGo、Rust、Zephyr などをサポート
- **共通の XIAO フットプリント:** 両バージョンとも標準の 14 ピン XIAO レイアウトを維持し、11 本の GPIO ピンと 3 本の電源ピンを含みます
- **コンパクトなフォームファクタ:** ウェアラブルデバイスやスペースに制約のある用途向けの親指サイズ 21 × 17.8 mm デザイン
- **標準 XIAO RP2040 インターフェース:** 11 本のデジタル I/O ピン、4 本のアナログ入力ピン、11 本の PWM 対応ピン、I2C、UART、SPI、SWD
- **拡張された XIAO RP2040 Plus の I/O:** 合計 26 本のデジタル I/O ピンとなる 15 個の GPIO パッドを追加し、第 2 の I2C インターフェースと専用 USB D+/D− パッドを搭載
- **統合バッテリー管理:** XIAO RP2040 Plus にはオンボード PMIC、バッテリー充電インジケータ、専用バッテリー接続、および BAT から 3V3 への逆流保護が含まれます
- **柔軟な実装オプション:** ブレッドボード対応の共通ピンに加え、キャッスレーテッドエッジと SMD 対応パッドを備え、カスタムキャリアボードに対応

## 仕様

<table>
  <thead>
    <tr>
      <th>製品名</th>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio XIAO RP2040 Plus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>チップセット</strong></td>
      <td colspan="2">
        <a href="https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040">
          Raspberry Pi RP2040
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>プロセッサ</strong></td>
      <td colspan="2">デュアル Cortex-M0+（最大 133 MHz）</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">264 KB SRAM</td>
    </tr]
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB オンボード Flash</td>
    </tr>
    <tr>
      <td><strong>インターフェース</strong></td>
      <td>
        GPIO ピン × 14<br/>
        デジタルピン × 11<br/>
        アナログピン × 4<br/>
        PWM ピン × 11<br/>
        I2C × 1<br/>
        UART × 1<br/>
        SPI × 1
      </td>
      <td>
        GPIO ピン × 29<br/>
        追加 GPIO パッド × 15<br/>
        デジタルピン × 26<br/>
        アナログピン × 4<br/>
        PWM × 26<br/>
        I2C × 2<br/>
        UART × 1<br/>
        SPI × 1
      </td>
    </tr>
    <tr>
      <td><strong>オンボード</strong></td>
      <td>
        User LED × 1<br/>
        Power LED × 1<br/>
        Green LED × 1<br/>
        Blue LED × 1<br/>
        Red LED × 1<br/>
        RGB LED × 1<br/>
        Reset ボタン × 1<br/>
        Boot ボタン × 1
      </td>
      <td>
        User LED × 1<br/>
        Power LED × 1<br/>
        Charge LED（バッテリー充電インジケータ）× 1<br/>
        RGB LED × 1<br/>
        Reset ボタン × 1<br/>
        Boot ボタン × 1
      </td>
    </tr>
    <tr>
      <td><strong>バッテリー管理（PMIC）</strong></td>
      <td>なし</td>
      <td>オンボード PMIC</td>
    </tr>
    <tr>
      <td><strong>電源</strong></td>
      <td colspan="2">
        入力電圧（Type-C）：5V<br/>
        入力電圧（BAT）：5V
      </td>
    </tr>
    <tr>
      <td><strong>BAT から 3V3 への逆流保護</strong></td>
      <td>なし</td>
      <td>あり</td>
    </tr>
    <tr>
      <td><strong>ソフトウェア互換性</strong></td>
      <td colspan="2">
        Arduino、PlatformIO、MicroPython、CircuitPython、TinyGo、Rust、Zephyr、および
        <a href="https://wiki.seeedstudio.com/ja/xiao_topic_page/">今後追加予定</a>
      </td>
    </tr>
    <tr>
      <td><strong>動作温度</strong></td>
      <td colspan="2">-40°C ～ 85°C</td>
    </tr>
    <tr>
      <td><strong>寸法</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
    <tr>
      <td><strong>バリエーション</strong></td>
      <td>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html">
          Seeed Studio XIAO RP2040 3 個パック
        </a>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html">
          Seeed Studio XIAO RP2040 端子はんだ付け済み
        </a>
      </td]
      <td>Seeed Studio XIAO RP2040 Plus</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

<Tabs>
<TabItem value="XIAO RP2040" label="XIAO RP2040" default>

### XIAO RP2040 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO RP2040 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO RP2040 Plus" label="XIAO RP2040 Plus">

### XIAO RP2040 Plus 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### XIAO RP2040 Plus 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
一般的な I/O ピンについて：
MCU の動作電圧は 3.3V です。一般的な I/O ピンに接続される入力電圧が 3.3V を超えると、チップが損傷する可能性があります。

電源ピンについて：
内蔵の DC-DC コンバータ回路は 5V 電圧を 3.3V に変換でき、VIN-PIN および 5V-PIN を介して 5V 電源でデバイスに給電することができます。

XIAO RP2040 は現在、バッテリー電源のみをサポートしており、バッテリー接続中に Type-C を接続することはできません。安全上のリスクとなる可能性があります。

使用時には十分注意し、シールドカバーを持ち上げないでください。
:::

## **ピンマップ**

| XIAO ピン | 機能                  | XIAO RP2040  | XIAO RP2040 Plus | 説明                                                           |
| :--------- | :--------------------- | :----------- | :---------------- | :----------------------------------------------------------- |
| 5V         | VBUS                   | VBUS         | VBUS              | USB 5 V 電源入力/出力                                         |
| GND        | GND                    | GND          | GND               | グラウンド                                                     |
| 3V3        | 3V3_OUT                | 3V3_OUT      | 3V3_OUT           | 3.3 V 電源出力                                                |
| D0         | A0                     | GPIO26       | GPIO26            | GPIO、ADC0                                                    |
| D1         | A1                     | GPIO27       | GPIO27            | GPIO、ADC1                                                    |
| D2         | A2                     | GPIO28       | GPIO28            | GPIO、ADC2                                                    |
| D3         | A3                     | GPIO29       | GPIO29            | GPIO、ADC3                                                    |
| D4         | SDA0                   | GPIO6        | GPIO6             | GPIO、I2C0 データ                                             |
| D5         | SCL0                   | GPIO7        | GPIO7             | GPIO、I2C0 クロック                                           |
| D6         | TX                     | GPIO0        | GPIO0             | GPIO、UART 送信                                               |
| D7         | RX                     | GPIO1        | GPIO1             | GPIO、UART 受信                                               |
| D8         | SCK                    | GPIO2        | GPIO2             | GPIO、SPI クロック                                            |
| D9         | MISO                   | GPIO4        | GPIO4             | GPIO、SPI データ入力                                          |
| D10        | MOSI                   | GPIO3        | GPIO3             | GPIO、SPI データ出力                                          |
| D11        | —                      | —            | —                 | 外部ピンとしては使用不可                                      |
| D12        | GPIO                   | —            | GPIO18            | Plus 専用拡張 GPIO                                            |
| D13        | SCL1                   | —            | GPIO21            | Plus 専用 I2C1 クロック                                       |
| D14        | SDA1                   | —            | GPIO20            | Plus 専用 I2C1 データ                                         |
| D15        | GPIO                   | —            | GPIO19            | Plus 専用拡張 GPIO                                            |
| D16        | GPIO                   | —            | GPIO22            | Plus 専用拡張 GPIO                                            |
| D17        | GPIO                   | —            | GPIO23            | Plus 専用拡張 GPIO                                            |
| D18        | —                      | —            | —                 | 外部ピンとしては使用不可                                      |
| D19        | GPIO                   | —            | GPIO5             | Plus 専用拡張 GPIO                                            |
| D20        | GPIO                   | —            | GPIO13            | Plus 専用拡張 GPIO                                            |
| D21        | GPIO                   | —            | GPIO14            | Plus 専用拡張 GPIO                                            |
| D22        | GPIO                   | —            | GPIO15            | Plus 専用拡張 GPIO                                            |
| D23        | GPIO                   | —            | GPIO16            | Plus 専用拡張 GPIO                                            |
| D24        | GPIO                   | —            | GPIO17            | Plus 専用拡張 GPIO                                            |
| D25        | GPIO                   | —            | GPIO10            | Plus 専用拡張 GPIO                                            |
| D26        | GPIO                   | —            | GPIO9             | Plus 専用拡張 GPIO                                            |
| D27        | GPIO                   | —            | GPIO8             | Plus 専用拡張 GPIO                                            |
| Reset      | RUN                    | RUN          | RUN               | リセット入力                                                  |
| Boot       | RP2040_BOOT            | RP2040_BOOT  | RP2040_BOOT       | ブートローダーモードに入る                                   |
| USER_LED_R | 赤チャンネル           | GPIO17       | —                 | XIAO RP2040 上の RGB LED 赤チャンネルを直接制御              |
| USER_LED_G | 緑チャンネル           | GPIO16       | —                 | XIAO RP2040 上の RGB LED 緑チャンネルを直接制御              |
| USER_LED_G | 青チャンネル           | GPIO25       | —                 | XIAO RP2040 上の RGB LED 青チャンネルを直接制御              |
| RGB_LED    | WS2812B データ         | —            | GPIO12/NEOPIX     | 単線 WS2812B カラーデータ制御                                 |
| RGB_EN     | WS2812B イネーブル     | —            | GPIO11            | WS2812B 電源を有効化；カラーデータピンではない               |
| User LED   | ユーザー制御 LED       | —            | GPIO25            | XIAO RP2040 Plus 上の独立したユーザー LED                    |
| BAT_EN     | バッテリー有効         | —            | GPIO24            | Plus 上のバッテリー電源制御                                  |
| CHARGE_LED | 充電インジケータ       | —            | —                 | ハードウェア制御の充電状態 LED；ユーザー GPIO ではない       |
| SWDIO      | SWD デバッグ           | SWDIO        | RP2040_SWDIO      | Serial Wire Debug データ                                      |
| SWCLK      | SWD デバッグ           | SWCLK        | RP2040_SWCLK      | Serial Wire Debug クロック                                   |
| USB_D+     | USB                    | -            | USB_DP      | USB 1.1 フルスピード データ（プラス）                         |
| USB_D-     | USB                    | -            | USB_DM      | USB 1.1 フルスピード データ（マイナス）                       |

### ブートローダーモードに入る

ユーザーのプログラミング処理が失敗した場合、Seeed Studio XIAO RP2040 のポートが消えてしまうことがあります。次の操作を行うことで、この問題を解決できます。

- **B** ボタンを長押しします。
- Seeed Studio XIAO PR2040 をコンピュータに接続します。
- コンピュータにディスクドライブが表示されます。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。RP2040 チップには 2 つのパーティションがあり、1 つはブートローダー、もう 1 つはユーザープログラムです。本製品は出荷時にシステムメモリ内にブートローダーコードを書き込んでいます。上記の手順を実行することで、モードを切り替えることができます。

### リセット

Seeed Studio XIAO RP2040 をリセットしたい場合は、次の手順を実行してください。

- Seeed Studio XIAO RP2040 をコンピュータに接続します。
- **R** ピンを**1 回**押します。

注意：内蔵のプログラマブル単色 LED（赤、青、緑）は、Arduino 上のものとは動作が逆になっています。Seeed Studio XIAO RP2040 では、そのピンを有効にするには Low に引き下げる必要があります。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.png" alt="pir" width={800} height="auto" /></p>

## バッテリーの使用

:::note

背面に BAT バッテリーコネクタを備えているのは XIAO RP2040 Plus のみですので、ご注意ください。

:::

XIAO RP2040 Plus は、3.7V リチウムバッテリーを電源入力として使用することができます。配線方法については、以下の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

はんだ付けの際、正極と負極を短絡させてバッテリーや機器を損傷しないよう、十分注意してください。バッテリーに電力が残っている場合は、決して基板にはんだ付けしないでください。基板が焼損するおそれがあります。回路に通電した状態で短絡させることは重大なリスクを伴うため、アダプタの使用を推奨します。

:::

### バッテリー電圧読み取りの例

回路図によると、XIAO RP2040 Plus は **SGM40567-4.2XG/TR** リチウムイオンバッテリーチャージャ IC を使用して、単セルリチウムイオンバッテリーに定電流・定電圧充電を行います。充電状態は点滅する **Charge_LED** によって示されます。<br/>

バッテリー電圧測定回路は、**TPS22916CNYFPR** ロードスイッチを使用して測定経路を有効または無効にします。バッテリー電圧を測定する必要があるとき、MCU は **BAT_EN (GPIO24)** を介して測定経路を有効にし、デバイスがスタンバイモードの間のバッテリー消費を低減します。<br/>

さらに、**SGM4875XXDM6G/TR** アナログスイッチを使用して ADC 入力チャネルを切り替えます。**GPIO24/BAT_EN** によって制御され、バッテリー測定信号と別のアナログ入力信号のどちらを **A3 (GPIO29) ADC** ピンに接続するかを選択し、ADC ピンを多重利用できるようにします。

:::tip

A3 ピンを ADC 入力としてバッテリー電圧の測定に使用している場合、同時に汎用 I/O ピンとして使用することはできません。ピン割り当ての際には必ずこの点を考慮してください。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_charge.png" style={{width:800, height:'auto'}}/></div>
<br/>

バッテリー電圧は抵抗分圧回路を用いて測定されます。ADC が読み取る電圧は実際のバッテリー電圧の半分であるため、ソフトウェア側で ADC の測定値に 2 を掛けて実際のバッテリー電圧を得る必要があります。

<details>

<summary>バッテリー読み取り例</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX  = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // 10k / 10k voltage divider

float readBatteryVoltage() {
  // Enable voltage divider circuit and analog switch simultaneously
  digitalWrite(BAT_EN, HIGH);

  // Wait for U2 output, RC filter and ADC input to stabilize
  delay(10);

  // Discard one possibly stale ADC reading
  analogRead(A3);

  // Multiple sampling and averaging to reduce noise
  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(A3);
    delay(2);
  }

  // Turn off immediately after measurement to avoid continuous power consumption by divider resistors
  digitalWrite(BAT_EN, LOW);

  float adcRaw = sum / (float)samples;
  float a3Voltage = adcRaw * ADC_VREF / ADC_MAX;

  return a3Voltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(BAT_EN, OUTPUT);
  digitalWrite(BAT_EN, LOW);  // Disable detection circuit by default

  analogReadResolution(12);   // RP2040 Plus ADC: 0~4095
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

低消費電力アプリケーションでは、バッテリー電圧の測定が完了したら **BAT_EN** を無効にして、分圧抵抗によって生じる静止電力消費を低減してください。

:::

- バッテリー充電中は **Charge_LED** が点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- バッテリー電圧測定結果：リチウムイオンバッテリーの測定電圧は、バッテリーに印字されている公称値と異なる場合があります。必ず実際の測定値を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_detection.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

### XIAO RP2040

**ハードウェア設計**
- **📄[Datasheet]** [Raspberry Pi RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [XIAO RP2040 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB Design Files]** 
  - [ XIAO RP2040 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Eagle プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2040 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**メカニカル設計**
- **📄[2D Dimensions]** [DXF 形式の XIAO RP2040 寸法図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D Model]** [ XIAO RP2040 3D モデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

### XIAO RP2040 Plus

**ハードウェア設計**
- **📄[Datasheet]** [Raspberry Pi RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [XIAO RP2040 Plus 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_SCH.pdf )
- **🗃️[PCB Design Files]** 
  - [ XIAO RP2040 Plus KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
  - [XIAO RP2040 Plus Eagle プロジェクト](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2040 Plus ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Plus-pinout.xlsx)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## コース用リソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
