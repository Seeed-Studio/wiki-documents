---
title: XIAO STM32C5 と MicroPython
description: Seeed Studio XIAO STM32C5 に MicroPython をインストールし、GPIO、ソフトウェア生成のサーボ制御信号、および CAN を使用して実用的なアプリケーションを構築する方法を学びます。
keywords:
  - xiao
  - stm32
  - stm32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_micropython
sku: 100036669
last_update:
  date: 09/02/2026
  author: Zeller
createdAt: '2026-09-01'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_with_micropython/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_micropython.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 概要

[MicroPython](https://github.com/micropython/micropython/wiki) は、性能が重要なコード向けにネイティブコード出力をサポートする Python インタプリタです。マイコンやリソース制約の厳しいシステム向けに最適化された、Python 3.6+ のコア機能のサブセットを提供します。CPython とは異なっており、その違いについては [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) のページで詳しく読むことができます。

## ハードウェアの準備

始める前に、XIAO STM32C5 開発ボードを用意する必要があります。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO STM32C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## MicroPython ファームウェアの書き込み

XIAO STM32C5 をブートローダーモードにして、`.uf2` ファームウェアファイルをボードの USB マスストレージドライブにコピーすることで、MicroPython ファームウェアを更新します。

1. XIAO STM32C5 MicroPython ファームウェアのアーカイブをダウンロードして展開します。

- **📄[Firmware]** [XIAO STM32C5 MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao-stm32c5-micropython-firmware.zip)

2. XIAO STM32C5 を USB で PC に接続します。**Reset** ボタンを素早く 2 回押してブートローダーモードに入ります。**XIAOC5BOOT** という名前の USB ドライブが表示されるはずです。展開したアーカイブから **micropython-xiao-stm32c5.uf2** をそのドライブにコピーします。ファームウェアのインストールが完了すると、ボードは自動的に再起動します。

:::tip
**XIAOC5BOOT** が表示されない場合は、USB ケーブルを抜き差ししてから、再度 **Reset** を 2 回押してください。USB ケーブルがデータ転送に対応していることを確認してください。
:::

## [Thonny IDE](https://thonny.org/) のインストール

使用している環境に合ったバージョンを選んでインストールします。ここでは Windows システムにインストールするため、Windows 版を選択しています。

使用したい Python バージョンに応じた指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
その後は、デフォルトの手順に従って設定を進めるだけです。


### インタプリタの設定

- Thonny IDE を開き、XIAO STM32C5 用にインタプリタとシリアルポートを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_1.png" style={{width:800, height:'auto'}}/></div>
- ファームウェアの書き込みが完了し、Thonny が XIAO STM32C5 に接続されると、Shell ペインに MicroPython ファームウェア情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/mpy_2.png" style={{width:800, height:'auto'}}/></div>
## ピンマップ

:::tip

- 完全なピン配置の詳細については、[XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#ハードウェア概要) を参照してください。

:::

| ピン / 信号 | GPIO | 機能 | MicroPython での使用方法 |
|---|---|---|---|
| D0 / A0 | PA0 | ADC1_IN0 / GPIO | `XiaoADC(0)` / `XiaoPin(0)` |
| D1 / A1 | PA1 | ADC1_IN1 / GPIO | `XiaoADC(1)` / `XiaoPin(1)` |
| D2 / A2 | PA2 | ADC1_IN2 / GPIO | `XiaoADC(2)` / `XiaoPin(2)` |
| D3 / A3 | PA3 | ADC1_IN3 / GPIO | `XiaoADC(3)` / `XiaoPin(3)` |
| D4 | PB7 | I2C1 SDA / GPIO | ヘッダー I2C データ |
| D5 | PB6 | I2C1 SCL / GPIO | ヘッダー I2C クロック |
| D6 | PA9 | USART1 TX / GPIO | UART 送信 |
| D7 | PA10 | USART1 RX / GPIO | UART 受信 |
| D8 | PE2 | SPI3 SCK / GPIO | ハードウェア SPI クロック |
| D9 | PB0 | SPI3 MISO / GPIO | ハードウェア SPI データ入力 |
| D10 | PB15 | SPI3 MOSI / GPIO | ハードウェア SPI データ出力 |
| D11 | PB8 | GPIO / FDCAN1 RX 対応 | 現在のファームウェアでは FDCAN1 は有効になっていません |
| D12 | PB9 | GPIO / FDCAN1 TX 対応 | 現在のファームウェアでは FDCAN1 は有効になっていません |
| D13 | PB5 | FDCAN2 RX / GPIO | `XiaoCAN("can0", ...)` |
| D14 | PB13 | FDCAN2 TX / GPIO | `XiaoCAN("can0", ...)` |
| D15 / CAN_STB | PB14 | CAN トランシーバ スタンバイ | Low：通常動作、High：スタンバイ |
| CAN_H | — | CAN FD 差動バス High | オンボード CAN トランシーバ出力、GPIO ではありません |
| CAN_L | — | CAN FD 差動バス Low | オンボード CAN トランシーバ出力、GPIO ではありません |
| BAT_EN | PA15 | バッテリ測定イネーブル | `XiaoPin("bat_en", Pin.OUT)` |
| BAT_READ | PA4 | ADC1_IN4 | `XiaoADC("vbat")`；バッテリ電圧はおおよそ ADC 電圧 × 2 |
| IMU_SDA | PB4 | I2C2 SDA | オンボード LSM6DS3TR-C データ |
| IMU_SCL | PB3 | I2C2 SCL | オンボード LSM6DS3TR-C クロック |
| IMU_INT | PC13 | IMU INT1 | `XiaoPin("imu_int", Pin.IN)` |
| IMU_HEATER_PWM | PA8 | TIM1_CH1 PWM | `XiaoPWM(0)` |
| USER_LED | PB12 | GPIO 出力 | `XiaoPin("led", Pin.OUT)`；アクティブ Low |


## LED 点滅

デジタルピンは主に、高レベルと低レベルの論理を出力することで、外部センサやアクチュエータのオン・オフ制御を実現します。Grove Base for XIAO 拡張ボードと標準 Grove 周辺モジュールを組み合わせることで、このセクションでは XIAO STM32C5 上のデジタルピンの低レベルドライバロジックと実用的な呼び出し方法について詳しく説明します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - LED Pack</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-led-pack-all-2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアプログラム

この例では、XIAO STM32C5 の D1 ピンをデジタル出力として使用し、外部 LED を点滅させます。

1. Thonny で **File > New** を選択してファイルを作成し、次のコードを入力します。

```py
# Copyright (c) 2026 Seeed Technology Co., Ltd.
# SPDX-License-Identifier: Apache-2.0
#
# Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.

import time
from machine import Pin
from boards.xiao import XiaoPin

SLEEP_TIME_MS = 1000
D1_PIN = 1

# D1 corresponds to PA1.
d1_gpio = XiaoPin(D1_PIN, Pin.OUT)

# Match GPIO_OUTPUT_ACTIVE in the Zephyr example.
led_state = True
d1_gpio.value(1)

try:
    while True:
        led_state = not led_state
        d1_gpio.value(1 if led_state else 0)

        print("LED state:", "ON" if led_state else "OFF")
        time.sleep_ms(SLEEP_TIME_MS)

except KeyboardInterrupt:
    # Turn the output off when the script is stopped.
    d1_gpio.value(0)
    print("Blinky stopped")
```

2. **Run > Run current script** を選択するか、**F5** キーを押します。

### 結果

スクリプトが開始すると、D1 に接続された外部 LED が 1 秒間隔で点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

## サーボモータを駆動する

PWM は、デジタル出力 GPIO に基づいて実装されたタイミング波形出力機能です。一定の周波数でピンレベルを高速に切り替え、1 サイクル内の High レベルのデューティ比を動的に調整することで、周辺機器に等価なアナログ信号を出力します。実際のエンジニアリング応用では、PWM はサーボモータの精密な角度制御や LED の滑らかな明るさ調整などに広く利用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアプログラム

この例では、XIAO STM32C5 の D0 をサーボの制御信号ピンとして使用します。タイミングはハードウェア PWM ペリフェラルではなくソフトウェアで生成されます。

1. Thonny で **File > New** を選択してファイルを作成し、次のコードを入力します：

```py
import time
from machine import Pin
from boards.xiao import XiaoPin

SERVO_PIN = 0                  # D0 / PA0
SERVO_PERIOD_US = 20_000       # 50 Hz
SERVO_MIN_US = 1_000           # Approximately 0 degrees
SERVO_MAX_US = 2_000           # Approximately 180 degrees

servo = XiaoPin(SERVO_PIN, Pin.OUT)
servo.value(0)


def output_servo_frame(angle):
    """Output one 20 ms servo-control frame."""
    angle = max(0, min(180, angle))

    pulse_us = SERVO_MIN_US + (
        angle * (SERVO_MAX_US - SERVO_MIN_US) // 180
    )

    frame_start = time.ticks_us()

    servo.value(1)
    time.sleep_us(pulse_us)
    servo.value(0)

    elapsed = time.ticks_diff(time.ticks_us(), frame_start)
    remaining = SERVO_PERIOD_US - elapsed

    if remaining > 0:
        time.sleep_us(remaining)


def hold_angle(angle, duration_ms):
    """Keep the servo at an angle for the specified duration."""
    frames = max(1, duration_ms // 20)

    for _ in range(frames):
        output_servo_frame(angle)


try:
    print("Software servo control started on D0")

    hold_angle(90, 1000)

    while True:
        for angle in range(0, 181):
            output_servo_frame(angle)

        for angle in range(180, -1, -1):
            output_servo_frame(angle)

except KeyboardInterrupt:
    print("Servo control stopped")

finally:
    servo.value(0)
```

2. **Run > Run current script** を選択するか、**F5** を押します。

### 結果

スクリプトが開始すると、サーボはおおよそ 0° から 180° まで往復し、再び 0° に戻る動作を繰り返します。ループは 20 ms の制御フレームごとに 1° ずつ指令値を進めます。これは、実行オーバーヘッドおよびサーボ自身の機械的制限を除いて、公称 50°/s（約 0.87 rad/s）の指令スイープ速度に相当します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

## CAN 経由で DM-J4310-2EC モーターを駆動する

XIAO STM32C5 は 2 つの CAN FD インターフェースを提供します。1 つは外付け CAN トランシーバと共に使用するためのロジックレベルの送受信信号を出力します。もう 1 つはオンボードの TCAN3403-Q1 CAN FD トランシーバに接続されており、CAN_H と CAN_L を介して CAN バスに直接接続できます。CAN FD は、より大きなペイロードと高いデータフェーズビットレートをサポートしつつ Classical CAN との互換性を維持しており、自動車用電子機器、産業用制御、ロボット工学、分散センサーネットワークに適しています。

オンボードの CAN FD 回路には、切り離し可能な 120 Ω の終端抵抗も含まれています。ボードがバスの端にある場合はこの抵抗を有効にします。ボードがバスの途中にある場合、または XIAO 側のバス端にすでに別の 120 Ω 抵抗が取り付けられている場合は、これを切り離します。トランシーバは、CAN 通信が使用されていないときの消費電力を低減するためのスタンバイ制御もサポートしています。

- 参考用法: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/ja/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

### ハードウェアの準備

- XIAO STM32C5 × 1
- コンピュータと USB Type-C データケーブル
- モーターに適した安定化 24 V DC 電源
- DM-J4310-2EC モーター × 1
- XT30 2+2 電源分離ボード

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>XT30 2+2 Power Separation Board</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
         <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-100094243--seeed-gripper-01.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
            <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100045091-xt30-2_2-power-separationboard.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
         <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
   <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### ソフトウェアプログラム

:::caution
モーターには 24 V 電源が必要です。適切な電流定格を持つ、規格に準拠した電流制限付き電源を使用してください。配線を変更する前には必ず電源を切り、初期テスト中はモーターに負荷をかけないようにし、XIAO の GND をモーター電源のマイナス端子に接続してください。不適切な電源や配線は、機器の損傷や安全上の危険を引き起こす可能性があります。
:::

1. Damiao ホストコンピュータ設定ソフトウェアを使用して、モーターの **CAN ID** を `0x001`、**Master ID** を `0x011` に設定します。詳細については、[Getting Started with the Damiao 43 Series Motors](https://wiki.seeedstudio.com/ja/damiao_series/) を参照してください。

- モーターを XIAO STM32C5 の背面の CAN_H および CAN_L パッドに接続します。オンボードトランシーバは D13/PB5（RX）、D14/PB13（TX）、D15/PB14（スタンバイ）を使用します。通常動作のために D15 を Low に駆動します。

2. Thonny で **File > New** を選択してファイルを作成し、次のプログラムを `driver_dm4310.py` として保存します：

<details>

<summary>driver_dm4310.py</summary>

```py
"""Drive a Damiao DM-J4310-2EC V1.1 from XIAO STM32C5.
This motor example uses Classical CAN at 1 Mbit/s (fd=False), although the board supports CAN FD.
Protocol: classic CAN 2.0B at 1 Mbit/s, Damiao speed mode.

Wiring:
    XIAO CAN_H -> motor CAN_H
    XIAO CAN_L -> motor CAN_L
    XIAO GND   -> motor GND / 24 V negative
    Motor VCC  -> external 24 V positive

Use 120-ohm termination at both ends of the CAN bus. Never connect the
MCU-side CAN TX/RX pins directly to the motor.
"""

import struct
import time
from machine import Pin
from boards.xiao import XiaoCAN, XiaoPin


# Motor and CAN configuration.
DM_MOTOR_ID = 0x001
DM_MASTER_ID = 0x011
DM_CAN_BITRATE = 1_000_000

DM_CONTROL_ID = 0x200 + DM_MOTOR_ID
DM_PARAM_ID = 0x7FF

DM_CMD_ENABLE = 0xFC
DM_CMD_DISABLE = 0xFD
DM_CMD_CLEAR_ERROR = 0xFB

DM_PARAM_WRITE = 0x55
DM_REG_CTRL_MODE = 0x0A
DM_CTRL_MODE_SPEED = 3

DM_VMAX_RAD_S = 30.0

CONTROL_PERIOD_MS = 20
GEAR_PERIOD_MS = 5_000
FEEDBACK_PRINT_MS = 500
START_DELAY_MS = 3_000

# Same speed sequence as the Zephyr example.
SPEED_SEQUENCE = (0.0, 3.0, 6.0, 10.0, 6.0, 3.0)


def send_control(can, command):
    payload = bytes((0xFF, 0xFF, 0xFF, 0xFF,
                     0xFF, 0xFF, 0xFF, command))
    can.send(DM_CONTROL_ID, payload)


def write_u32_parameter(can, register, value):
    payload = struct.pack(
        "<HBBI",
        DM_MOTOR_ID,
        DM_PARAM_WRITE,
        register,
        value,
    )
    can.send(DM_PARAM_ID, payload)


def send_speed(can, speed_rad_s):
    can.send(DM_CONTROL_ID, struct.pack("<f", float(speed_rad_s)))


def decode_feedback(frame):
    """Return decoded Damiao feedback, or None for an unrelated frame."""
    if frame is None or len(frame) < 2:
        return None

    can_id = frame[0]
    data = frame[1]

    if data is None or len(data) < 8:
        return None

    motor_id = data[0] & 0x0F
    if motor_id != (DM_MOTOR_ID & 0x0F):
        return None

    fault = data[0] >> 4
    position_raw = (data[1] << 8) | data[2]
    velocity_raw = (data[3] << 4) | (data[4] >> 4)
    torque_raw = ((data[4] & 0x0F) << 8) | data[5]

    velocity_rad_s = (
        (velocity_raw / 4095.0) * 2.0 - 1.0
    ) * DM_VMAX_RAD_S

    return {
        "can_id": can_id,
        "motor_id": motor_id,
        "fault": fault,
        "position_raw": position_raw,
        "velocity_raw": velocity_raw,
        "velocity_rad_s": velocity_rad_s,
        "torque_raw": torque_raw,
        "mos_temperature": data[6],
        "rotor_temperature": data[7],
    }


def print_feedback(feedback):
    print(
        "FB id=0x{:03X} motor={} err=0x{:X} pos=0x{:04X} "
        "vel=0x{:03X} {:.2f}rad/s tq=0x{:03X} mos={}C rotor={}C".format(
            feedback["can_id"],
            feedback["motor_id"],
            feedback["fault"],
            feedback["position_raw"],
            feedback["velocity_raw"],
            feedback["velocity_rad_s"],
            feedback["torque_raw"],
            feedback["mos_temperature"],
            feedback["rotor_temperature"],
        )
    )


def drain_feedback(can, duration_ms, print_frames=False):
    deadline = time.ticks_add(time.ticks_ms(), duration_ms)

    while time.ticks_diff(deadline, time.ticks_ms()) > 0:
        frame = can.recv(0)
        if frame is None:
            time.sleep_ms(5)
            continue

        feedback = decode_feedback(frame)
        if print_frames and feedback is not None:
            print_feedback(feedback)


def initialise_motor(can):
    # Clear error -> select speed mode -> enable.
    send_control(can, DM_CMD_CLEAR_ERROR)
    drain_feedback(can, 100)

    write_u32_parameter(can, DM_REG_CTRL_MODE, DM_CTRL_MODE_SPEED)
    drain_feedback(can, 100)

    send_control(can, DM_CMD_ENABLE)
    drain_feedback(can, 100)


def stop_motor(can):
    """Best-effort controlled stop followed by motor disable."""
    if can is None:
        return

    try:
        # Repeat zero speed briefly so the motor receives the stop request.
        for _ in range(5):
            send_speed(can, 0.0)
            time.sleep_ms(CONTROL_PERIOD_MS)
        send_control(can, DM_CMD_DISABLE)
        time.sleep_ms(50)
    except Exception as exc:
        print("Motor stop warning:", exc)


def main():
    can = None
    can_stb = None

    try:
        print("XIAO STM32C5 DM-J4310-2EC speed-mode driver")
        print(
            "motor_id=0x{:03X} master_id=0x{:03X} bitrate={}Mbps".format(
                DM_MOTOR_ID,
                DM_MASTER_ID,
                DM_CAN_BITRATE // 1_000_000,
            )
        )

        # PB14 / D15 is active-high standby. Drive it low for normal mode.
        can_stb = XiaoPin(15, Pin.OUT)
        can_stb.value(0)
        time.sleep_ms(10)

        can = XiaoCAN(
            "can0",
            bitrate=DM_CAN_BITRATE,
            data_bitrate=2_000_000,
            fd=False,
            loopback=False,
        )

        print("Check wiring and keep the motor unloaded.")
        print("Starting in {} seconds...".format(START_DELAY_MS // 1000))
        time.sleep_ms(START_DELAY_MS)

        initialise_motor(can)
        print("Motor enabled in speed mode")

        sequence_index = 0
        speed = SPEED_SEQUENCE[sequence_index]
        print("Target speed: {:.2f} rad/s".format(speed))

        next_gear = time.ticks_add(time.ticks_ms(), GEAR_PERIOD_MS)
        last_feedback_print = time.ticks_ms()

        while True:
            now = time.ticks_ms()

            if time.ticks_diff(now, next_gear) >= 0:
                sequence_index = (sequence_index + 1) % len(SPEED_SEQUENCE)
                speed = SPEED_SEQUENCE[sequence_index]
                print("Target speed: {:.2f} rad/s".format(speed))
                next_gear = time.ticks_add(next_gear, GEAR_PERIOD_MS)

            send_speed(can, speed)

            # Drain every queued frame so the MicroPython CAN queue cannot fill.
            while True:
                frame = can.recv(0)
                if frame is None:
                    break

                feedback = decode_feedback(frame)
                if feedback is None:
                    continue

                if time.ticks_diff(now, last_feedback_print) >= FEEDBACK_PRINT_MS:
                    print_feedback(feedback)
                    last_feedback_print = now

            time.sleep_ms(CONTROL_PERIOD_MS)

    except KeyboardInterrupt:
        print("User requested stop")
    except Exception as exc:
        print("Motor driver error:", exc)
        raise
    finally:
        stop_motor(can)

        if can is not None:
            try:
                can.deinit()
            except Exception:
                pass

        if can_stb is not None:
            try:
                can_stb.value(1)
            except Exception:
                pass

        print("Motor disabled; CAN transceiver in standby")


if __name__ == "__main__":
    main()

```

</details>

3. **Run > Run current script** を選択するか、**F5** を押します。

### 結果

モーターが有効になると、DM-J4310 は `0 → 3 → 6 → 10 → 6 → 3 rad/s` の目標速度を 5 秒ごとに切り替えながら循環します。Shell には、選択された目標速度とデコードされたモーターフィードバックデータが表示されます。このサンプルでは、オンボード LED は制御しません。

:::tip

XIAO STM32C5 の CAN_H をモーターの CAN_H に、CAN_L を CAN_L に接続します。また、グラウンド同士も接続してください。差動ラインを逆にしたり、共通グラウンドを接続しなかったりすると、通信ができない場合があります。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>
## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
