---
title: Arduino で使う XIAO nRF54LM20A Sense
description: この記事では、Arduino IDE を使用して Seeed Studio XIAO nRF54LM20A Sense を開発する方法を紹介します。
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense を Arduino で使う

このセクションでは、Arduino 開発に必要なハードウェアとソフトウェアの準備について説明します。以下の手順に従うことで、開発環境のセットアップ、Arduino IDE の設定、XIAO ボードをプログラミングできる状態にすることができます。セットアップが完了すれば、提供されているサンプルスケッチをすばやくビルド、書き込み、テストできます。

## はじめに

### ハードウェアの準備

次のものを用意してください：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
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
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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


### ソフトウェア

XIAO nRF54LM20A は Arduino IDE での開発をサポートしています。始める前に、Arduino IDE をインストールして設定してください。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くおすすめします。
:::

- **Step 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Arduino アプリケーションを起動します。

- **Step 3.** **Arduino IDE** > **Settings** を開き、**Additional Boards Manager URLs** を見つけて、次の URL を追加します：

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Step 4.** **Tools** > **Board** > **Boards Manager** に移動し、**nRF54L15 Boards** を検索してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Step 5.** ボードを接続した後、Arduino IDE で次のボードを選択します：

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### プログラムの書き込み

次の例では、シンプルな点滅プログラムを使用します。

**Step 1.** テスト用に **Blink** のサンプルコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** **Upload** をクリックして、スケッチをコンパイルして書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

動作例：

プログラムを書き込んでリセットボタンを押すと、L インジケータが 1 秒間隔で点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>



## デジタル

デジタルピンは、High と Low の論理レベルを切り替えることで、外部センサやアクチュエータを制御するためによく使用されます。このセクションでは、Grove Button と Grove Buzzer を Grove Base for XIAO と組み合わせて使用し、XIAO nRF54LM20A 上での基本的なデジタル入力と出力をデモします。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置によると、**D0 / P1.00** は Grove Button 用、**D1 / P1.31** は Grove Buzzer 用として使用できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

新しい Arduino スケッチを作成し、次のコードを書き込んでください。

```cpp
#define BUTTON_PIN 0
#define BUZZER_PIN 1

int last_val = LOW;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("=== Grove Button + Buzzer (Digital Mode) ===");

  pinMode(BUTTON_PIN, INPUT);

  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);

  Serial.println("Button:  D0 (input)");
  Serial.println("Buzzer:  D1 (output)");
  Serial.println("Press the button to turn on the buzzer...");
}

void loop() {
  int val = digitalRead(BUTTON_PIN);

  digitalWrite(BUZZER_PIN, val);

  if (val != last_val) {
    Serial.print("Button ");
    Serial.print(val ? "PRESSED " : "released");
    Serial.print(" -> Buzzer ");
    Serial.println(val ? "ON" : "OFF");

    last_val = val;
  }

  delay(10);
}
```

### 結果

スケッチを書き込んだ後、ボタンを押すとブザーが鳴り、Serial Monitor にボタンとブザーの状態が表示されます。

:::tip

Serial Monitor のボーレートを **115200** に設定してください。

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM は、一定の周波数でタイミング制御されたデジタル波形を出力し、デューティ比を変化させることでアナログ制御信号を近似します。サーボの角度制御、LED の明るさ調整、モータの速度制御など、滑らかな出力制御が必要な用途によく使用されます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置によると、**D0 / P1.00** は **Grove Servo** の PWM 制御ピンとして使用できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

新しい Arduino スケッチを作成し、PWM サーボ制御を実装して、PWM 周期などのパラメータを設定します。

```cpp
#include <Arduino.h>

#define SERVO_PIN PIN_D0

#define SERVO_FREQ_HZ      50
#define SERVO_PERIOD_US    20000
#define SERVO_MIN_US       500
#define SERVO_MAX_US       2500

#define STEP_FWD_MS        30
#define STEP_RET_MS        30

#define PWM_RESOLUTION     16
#define PWM_MAX_VALUE      65535UL

static void set_angle(int degrees)
{
  if (degrees < 0) degrees = 0;
  if (degrees > 180) degrees = 180;

  uint32_t pulse_us = SERVO_MIN_US +
                      (uint32_t)((uint64_t)degrees *
                                 (SERVO_MAX_US - SERVO_MIN_US) / 180UL);

  uint32_t duty = (uint32_t)((uint64_t)pulse_us *
                             PWM_MAX_VALUE / SERVO_PERIOD_US);

  analogWrite(SERVO_PIN, duty);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("=== boot ===");
  Serial.println("Servo control started on P1.0 / PIN_D0");

  pinMode(SERVO_PIN, OUTPUT);

  analogWriteResolution(PWM_RESOLUTION);
  analogWritePinFrequency(SERVO_PIN, SERVO_FREQ_HZ);

  set_angle(0);
  delay(500);
}

void loop()
{
  for (int a = 0; a <= 180; a++) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_FWD_MS);
  }

  for (int a = 180; a >= 0; a--) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_RET_MS);
  }
}
```

### 結果

スケッチを書き込むと、サーボは約 1 秒あたり 33 度の速度で 0° から 180° まで回転し、その後 0° に戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

同時に、現在のサーボ角度が USB シリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_2.png" style={{width:800, height:'auto'}}/></div>

## アナログ

アナログ入力は、外部センサからの連続した電圧をデジタル値に変換するアナログ・デジタルコンバータ（ADC）に基づいています。ADC の生データ値は、土壌水分、バッテリー電圧、温度などの実用的な測定値にマッピングできます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置によると、**A0 / P1.00** はアナログ入力ピンとして使用できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

新しい Arduino スケッチを作成し、**A0 / P1.00** からアナログ値を読み取り、USB シリアル経由で 500 ms ごとに ADC の生データ値を出力します。

```cpp
#include <Arduino.h>

#define ADC_PIN A0

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("ADC demo - XIAO nRF54LM20A Arduino");
  Serial.println("Reading analog input on P1.00 / AIN0 / A0");

  analogReadResolution(12);
}

void loop()
{
  int raw = analogRead(ADC_PIN);

  Serial.print("ADC raw: ");
  Serial.println(raw);

  delay(500);
}
```

### 結果

プログラムを書き込んだ後、Grove-Capacitive Soil Moisture Sensor を家庭の鉢植えに挿し込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
PC 上でシリアルポートアシスタントを開き、出力値を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

電圧リファレンス読み取り表
| 状態     | センサ出力電圧 | 期待される ADC 生データ値|
| -------------- | -------------- | ---------------- |
| 空気中（乾燥） | 約 2.0–2.4V      | 約 3400–4095       |
| 湿った土壌中       | 約 1.3–1.8V      | 約 2200–3000       |
| 完全に水に浸した状態   | 約 0.8–1.2V      | 約 1365–2048       |

:::

:::caution

部品の個体差により、同じ環境でもモジュールごとの測定値が異なる場合があります。

:::

## UART

Universal Asynchronous Receiver/Transmitter（UART）は標準的な非同期シリアルプロトコルです。共通のクロックを必要とせず、両方のデバイスは同じ設定のボーレートを使用して通信します。TX と RX をクロス接続し、GND を共有することで、UART はコンソールログ、モジュールのデバッグ、低帯域幅のポイントツーポイント通信のためのシンプルな全二重リンクを提供します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置によると、**D6 / P1.08** と **D7 / P1.09** は外部 UART 通信用の TX および RX ピンとして使用できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

新しい Arduino スケッチを作成します。このサンプルでは、外部 UART を通じて起動メッセージを送信し、受信した文字をエコーバックし、定期的にハートビートメッセージを出力します。

<details>

<summary>Arduino スケッチ</summary>

```cpp
#include <Arduino.h>

#define RX_BUF_SIZE 128
#define TX_BUF_SIZE 256
#define HEARTBEAT_INTERVAL_MS 5000

static char rx_buf[RX_BUF_SIZE];
static size_t rx_buf_pos = 0;
static char tx_buf[TX_BUF_SIZE];

static uint32_t heartbeat_count = 0;
static unsigned long last_heartbeat = 0;

static void uart_send_string(const char *str)
{
  Serial1.print(str);
}

static void handle_complete_line()
{
  rx_buf[rx_buf_pos] = '\0';

  if (rx_buf_pos > 0) {
    Serial.print("Received: ");
    Serial.println(rx_buf);

    uart_send_string("\r\nYou sent: ");
    uart_send_string(rx_buf);
  }

  uart_send_string("\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

static void process_rx_byte(char c)
{
  static bool last_was_cr = false;

  if (c == '\r' || c == '\n') {
    if (c == '\n' && last_was_cr) {
      last_was_cr = false;
      return;
    }

    uart_send_string("\r\n");
    handle_complete_line();
    last_was_cr = (c == '\r');
    return;
  }

  last_was_cr = false;

  Serial1.write(c);

  if (rx_buf_pos < RX_BUF_SIZE - 1) {
    rx_buf[rx_buf_pos++] = c;
    return;
  }

  uart_send_string("\r\n[Warning] Input too long, buffer cleared.\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("========================================");
  Serial.println("  UART demo for XIAO nRF54LM20A");
  Serial.println("========================================");

  Serial1.begin(115200);

  uart_send_string("\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("  UART demo for XIAO nRF54LM20A\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("\r\n");
  uart_send_string("Pin Configuration:\r\n");
  uart_send_string("  TX: P1.08 / D6\r\n");
  uart_send_string("  RX: P1.09 / D7\r\n");
  uart_send_string("  Baud Rate: 115200\r\n");
  uart_send_string("\r\n");
  uart_send_string("Type something and press Enter to see it echoed.\r\n");
  uart_send_string("\r\n");

  Serial.println("UART demo started. Waiting for data...");
  Serial.println("Connect USB-TTL RX to D6/TX, TX to D7/RX, and GND to GND.");

  last_heartbeat = millis();
}

void loop()
{
  while (Serial1.available() > 0) {
    char c = (char)Serial1.read();
    process_rx_byte(c);
  }

  unsigned long now = millis();
  if (now - last_heartbeat >= HEARTBEAT_INTERVAL_MS) {
    last_heartbeat = now;
    heartbeat_count++;

    snprintf(tx_buf, sizeof(tx_buf),
             "\r\n[Heartbeat #%lu] UART running...\r\n",
             (unsigned long)heartbeat_count);

    uart_send_string(tx_buf);

    Serial.print("Heartbeat #");
    Serial.print(heartbeat_count);
    Serial.println(" sent");
  }

  delay(10);
}

```

</details>

### 結果

1. 表の順番に従って配線します

| XIAO nRF54LM20A | CH340 |
| --------------- | ----- |
| VBUS            | 5V    |
| GND             | GND   |
| P1.08 - TX      | RX    |
| P1.09 - RX      | TX    |

2. パソコンでシリアルポートモニタリングソフトを開きます。起動時に、外部 UART が設定されたピン情報を出力します。デフォルトでは、文字列 `[Heartbeat #number] UART running...` が定期的に出力されます。外部シリアルツールに文字を入力して Enter キーを押すと、ボードは受信した行をエコーバックします。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_uart_1.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C は同期式の半二重通信プロトコルで、データ用の SDA とクロック用の SCL の 2 本のラインを使用します。複数のデバイスがアドレッシングによって同じバスを共有できるため、I2C はセンサ、IMU、温湿度モジュール、小型 OLED ディスプレイなどで一般的に使用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置によると、**D4 / P1.03** と **D5 / P1.07** を I2C の SDA および SCL ピンとして設定できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. **Arduino IDE** > **Tools** > **Manage Libraries...** から次のライブラリをインストールします：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/11.png" style={{width:400, height:'auto'}}/></div>

- Adafruit SSD1306
- Adafruit GFX Library
- Adafruit BusIO

2. 新しい Arduino スケッチを作成し、OLED を初期化してテキストを表示します。

<details>

<summary>Arduino スケッチ</summary>

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_W 128
#define OLED_H 64
#define OLED_ADDR 0x3C
#define OLED_RESET -1

#define OLED_SDA PIN_D4
#define OLED_SCL PIN_D5

Adafruit_SSD1306 display(OLED_W, OLED_H, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("SSD1306 OLED test with pull-ups");

  Wire.setPins(OLED_SDA, OLED_SCL);
  Wire.begin();
  Wire.setClock(100000);

  pinMode(OLED_SDA, INPUT_PULLUP);
  pinMode(OLED_SCL, INPUT_PULLUP);
  delay(20);

  Serial.print("SDA idle = ");
  Serial.println(digitalRead(OLED_SDA));
  Serial.print("SCL idle = ");
  Serial.println(digitalRead(OLED_SCL));

  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR, true, false)) {
    Serial.println("SSD1306 init failed");
    while (1) {
      delay(1000);
    }
  }

  Serial.println("SSD1306 init OK");

  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);

  display.setCursor(28, 20);
  display.println("Hello XIAO");

  display.setCursor(24, 36);
  display.println("nRF54LM20A");

  display.display();
}

void loop() {
}
```

</details>

### 結果

プログラムの実行後、テキスト **Hello XIAO nRF54LM20A** が OLED に表示され、初期化ステータスが USB シリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI は高速な同期式全二重通信プロトコルです。タイミング用の専用 SCLK ライン、データ用の MOSI および MISO ライン、ターゲットデバイスを選択するための CS/SS ラインを使用します。SPI はシンプルなハードウェアで高いスループットを提供できるため、フラッシュストレージ、SD カード、高リフレッシュレートディスプレイ、高速センサなどで広く使用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. **Arduino IDE** > **Tools** > **Manage Libraries...** から次のライブラリをインストールします：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/10.png" style={{width:400, height:'auto'}}/></div>

- Adafruit GC9A01A
- Adafruit GFX Library
- Adafruit BusIO

2. 新しい Arduino スケッチを作成し、単色で画面を塗りつぶすロジックを書きます。

<details>

<summary>Arduino スケッチ</summary>

```cpp
#include <Arduino.h>
#include <Adafruit_GFX.h>
#include <Adafruit_GC9A01A.h>

#define TFT_CS    PIN_D1
#define TFT_DC    PIN_D3
#define TFT_MOSI  PIN_D10
#define TFT_SCLK  PIN_D8
#define TFT_RST   -1
#define TFT_BL    PIN_D6

#define LCD_W  240
#define LCD_H  240

#define COLOR_BLACK   0x0000U
#define COLOR_WHITE   0xFFFFU
#define COLOR_RED     0xF800U
#define COLOR_GREEN   0x07E0U
#define COLOR_BLUE    0x001FU
#define COLOR_YELLOW  0xFFE0U
#define COLOR_CYAN    0x07FFU
#define COLOR_MAGENTA 0xF81FU
#define COLOR_ORANGE  0xFD20U

Adafruit_GC9A01A tft(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);

static void fill_screen(uint16_t color)
{
  tft.fillScreen(color);
}

static void demo_solid_colors()
{
  static const uint16_t colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_CYAN, COLOR_BLUE, COLOR_MAGENTA,
  };

  static const char *names[] = {
    "RED", "ORANGE", "YELLOW", "GREEN", "CYAN", "BLUE", "MAGENTA",
  };

  for (int i = 0; i < 7; i++) {
    Serial.print("Solid: ");
    Serial.println(names[i]);

    fill_screen(colors[i]);
    delay(600);
  }
}

static void demo_color_bars()
{
  static const uint16_t bar_colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_BLUE, COLOR_MAGENTA,
  };

  const int BAR_W = LCD_W / 6;

  for (int i = 0; i < 6; i++) {
    tft.fillRect(i * BAR_W, 0, BAR_W, LCD_H, bar_colors[i]);
  }

  Serial.println("Color bars");
  delay(2000);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("GC9A01 demo - XIAO nRF54LM20A Arduino");

  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);

  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(COLOR_BLACK);

  Serial.println("Display ready, starting demo loop");
}

void loop()
{
  demo_solid_colors();
  demo_color_bars();
}
```

</details>
<br/>

### 結果

スケッチを書き込むと、プログラムは赤、オレンジ、黄、緑、シアン、青、マゼンタの順に画面を更新し、その後カラフルなストライプ模様を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>

シリアルモニタの出力は次のとおりです：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/8-spi-4.png" style={{width:600, height:'auto'}}/></div>

## Special Thanks

XIAO nRF54LM20A 用の Arduino 対応を提供してくれた **lolren** に特別な感謝を申し上げます。コードと README は分かりやすく有用です。XIAO nRF54LM20A を Arduino と一緒に使う方法についてさらに知りたい場合は、以下の GitHub リンクを参照してください。

- [Arduino Core Repository](https://github.com/lolren/nrf54-arduino-core)
- [Author's GitHub Homepage](https://github.com/lolren)


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
