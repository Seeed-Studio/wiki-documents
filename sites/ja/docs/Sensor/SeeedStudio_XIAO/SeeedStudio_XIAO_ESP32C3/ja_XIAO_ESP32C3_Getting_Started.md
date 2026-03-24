---
description: Seeed Studio XIAO ESP32C3 を使い始める
title: Seeed Studio XIAO ESP32C3 を使い始める
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO ESP32C3 を使い始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## はじめに

**Seeed Studio XIAO ESP32C3** は、Espressif の **ESP32-C3** WiFi/Bluetooth デュアルモードチップをベースとした IoT 向けミニ開発ボードで、効率的なアーキテクチャを備えた **32-bit RISC-V CPU** により高い演算性能を発揮します。**IEEE 802.11 b/g/n WiFi** および **Bluetooth 5 (BLE)** プロトコルをサポートし、優れた高周波特性を備えています。また、ワイヤレスアプリケーションの信号強度を高めるための外部アンテナが付属しています。さらに、**小型で精巧なフォームファクタ** と **片面実装可能なデザイン** を兼ね備えています。豊富なインターフェースを備え、**11 本のデジタル I/O** は **PWM ピン** として、**4 本のアナログ I/O** は **ADC ピン** として使用できます。**UART、I2C、SPI** など 4 種類のシリアルインターフェースをサポートします。基板上には小型の **リセットボタン** と **ブートローダーモードボタン** も搭載されています。XIAO ESP32C3 は [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) および [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board) と完全な互換性がありますが、Seeeduino XIAO Expansion board については、基板上の SWD スプリングコンタクトは互換性がありません。

上記の特長から、XIAO ESP32C3 は **高性能・低消費電力・高コストパフォーマンスな IoT ミニ開発ボード** として位置付けられており、**低消費電力 IoT アプリケーションやワイヤレスウェアラブルアプリケーション** に適しています。

この wiki では、XIAO ESP32C3 をすばやく使い始める方法を紹介します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

### 仕様
<table>
  <tr>
    <th>パラメータ</th>
    <th>説明</th>
  </tr>
  <tr>
    <td>プロセッサ</td>
    <td>ESP32-C3 SoC<br/>最大 160 MHz で動作する、4 ステージパイプラインを備えた RISC-V シングルコア 32-bit チッププロセッサ</td>
  </tr>
  <tr>
    <td>ワイヤレス</td>
    <td>完全な 2.4GHz Wi-Fi サブシステム<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <td>オンチップメモリ</td>
    <td>400KB SRAM &amp; 4MB フラッシュ</td>
  </tr>
  <tr>
    <td>インターフェース</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC<br/>1x Reset ボタン<br/>1x Boot ボタン</td>
  </tr>
  <tr>
    <td>寸法</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <td>電源（標準）</td>
    <td>最大 3.3V 出力電流: 500mA<br/>試験条件: BAT ピン入力 @ 3.8V<br/>供給能力: 3A<br/>充電電流: 380mA（高速）/ 40mA（トリクル）<br/>入力電圧 (VIN): 5V<br/>入力電圧 (BAT): 3.7V</td>
  </tr>
  <tr>
    <td>ディープスリープ時消費電力</td>
    <td>ディープスリープモード: 44 μA</td>
  </tr>
  <tr>
    <td>Wi-Fi 有効時消費電力</td>
    <td>アクティブモード: 75 mA<br/>Modem-sleep モード: 25 mA<br/>Light-sleep モード: 4 mA</td>
  </tr>
  <tr>
    <td>BLE 有効時消費電力</td>
    <td>Modem-sleep モード: 27 mA<br/>Light-sleep モード: 10 mA</td>
  </tr>
  <tr>
    <td>動作温度</td>
    <td>-40°C ～ 85°C</td>
  </tr>
</table>
### 特長

- **高性能 CPU:** ESP32-C3、最大 160 MHz で動作する 32­bit RISC­-V シングルコアプロセッサ
- **完全な Wi­Fi サブシステム:**  IEEE 802.11b/g/n プロトコルに準拠し、Station モード、SoftAP モード、SoftAP + Station モード、およびプロミスキャスモードをサポート
- **Bluetooth LE サブシステム:** Bluetooth 5 および Bluetooth mesh の機能をサポート
- **超低消費電力:** ディープスリープ時の消費電力は約 43μA
- **優れた RF 性能:** 外部 RF アンテナ付属
- **バッテリ充電チップ:** リチウムバッテリの充放電管理をサポート
- **豊富なオンチップリソース:** 400KB の SRAM と 4MB のオンボードフラッシュメモリ
- **超小型サイズ:** 親指ほどの大きさ (21x17.8mm) の XIAO シリーズのクラシックなフォームファクタで、ウェアラブルデバイスや小型プロジェクトに最適
- **信頼性の高いセキュリティ機能:** AES-128/256、Hash、RSA、HMAC、デジタル署名およびセキュアブートをサポートする暗号ハードウェアアクセラレータ
- **豊富なインターフェース:** 1xI2C、1xSPI、2xUART、11xGPIO(PWM)、4xADC、1xJTAG ボンディングパッドインターフェース
- 片面実装コンポーネント、表面実装設計

## ハードウェア概要

> *A3(GP105) - ADC2 を使用しており、誤ったサンプリング信号により動作しなくなる場合があります。信頼性の高いアナログ読み取りには、代わりに ADC1(A0/A1/A2) を使用してください。ESP32-C3 のデータシートを参照してください。

<table align="center">
 <tr>
     <th>XIAO ESP32C3 表面インジケータ図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 裏面インジケータ図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 ピン一覧</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
        <!--
        Image Description: This image is the official pinout diagram of the Seeed Studio XIAO ESP32-C3 development board.
        The diagram shows:
        - The top view of the XIAO ESP32-C3 board.
        - GPIO pin mappings, digital/analog labels, power pins, and function-specific roles (I2C, UART, SPI).
        - Color-coded labels for each pin type.
        Pin layout from left to right (as seen in the image):
        === LEFT SIDE PINS (top to bottom) ===
        - GPIO2    | A0  | D0   → Analog-capable (ADC1)
        - GPIO3    | A1  | D1   → Analog-capable (ADC1)
        - GPIO4    | A2  | D2   → Analog-capable (ADC1)
        - GPIO5    | A3 (crossed out) | D3 → Analog-capable via ADC2 (not recommended)
        - GPIO6    | SDA | D4   → I2C data line
        - GPIO7    | SCL | D5   → I2C clock line
        - GPIO21   | TX  | D6   → UART TX (Transmit)
        === RIGHT SIDE PINS (top to bottom) ===
        - 5V       → Power input/output
        - GND      → Ground
        - 3V3      → 3.3V power output
        - D10      | MOSI | GPIO10 → SPI MOSI (not analog-capable)
        - D9       | MISO | GPIO9  → SPI MISO (not analog-capable)
        - D8       | SCK  | GPIO8  → SPI clock (not analog-capable)
        - D7       | RX   | GPIO20 → UART RX (Receive)
        === Pin Function Color Legend (as shown in image) ===
        - Blue: Digital pin labels (D0–D10)
        - Pink: Analog pin labels (A0–A2); A3 is crossed out due to ADC2 instability
        - Green: GPIO number
        - Teal: I2C function (SDA, SCL)
        - Gray: UART function (TX, RX)
        - Purple: SPI function (MOSI, MISO, SCK)
        - Black: GND
        - Red: Power pins (5V, 3V3)
        === Footnote in Image ===
        "A3(GPIO5) - Uses ADC2, which may become inoperative due to false sampling signals. 
        For reliable analog reads, use ADC1 instead. Refer to the ESP32-C3 datasheet."
        === Notes ===
        - Only A0, A1, and A2 are officially supported analog pins using ADC1.
        - A3 (GPIO5) is crossed out and discouraged due to ADC2 reliability issues.
        - GPIO0, GPIO1 are not shown as analog pins in this image, though technically ADC1-capable.
        - GPIOs 8–10, 20–21 are not usable for analog input.
        - This layout helps developers identify safe and recommended pin functions when designing circuits or writing firmware.
        End of XIAO ESP32-C3 pinout description.
        -->
 </tr>
</table>

 ## **ピンマップ**
| XIAO ピン        | 機能  | チップピン  | 代替機能                  | 説明          |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | 電源入力/出力   |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | 電源出力         |
| D0              | Analog    | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analog    | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analog    | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analog    | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, I2C データ       |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, I2C クロック      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, UART 送信  |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, UART 受信   |
| D8              | SCK       | GPIO8     |                                     | GPIO, SPI クロック      |
| D9              | MISO      | GPIO9     |                                     | GPIO, SPI データ       |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, SPI データ       |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | ブートモードに入る      |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | UFL アンテナ          |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### 電源ピン

- 5V - これは USB ポートからの 5V 出力です。外部電源入力としても使用できますが、このピンと外部電源の間には必ず何らかのダイオード（ショットキー、信号用、電力用）を、アノードをバッテリー側、カソードを 5V ピン側にして接続する必要があります。
- 3V3 - これはオンボードレギュレータからの安定化出力です。700mA まで取り出すことができます
- GND - 電源/データ/信号用グラウンド

### ストラップピン

ESP32C3 のチップマニュアルによると、チップ内の **GPIO2**、**GPIO8**、**GPIO9** はストラップピンであり、これらのピンの High / Low レベル設定によってチップが異なるブートモードに入る場合があります。これらのピンを使用する際はこの点に注意してください。そうしないと、XIAO が常にプログラムをアップロードできなかったり、実行できなかったりする原因になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## はじめに

まず、XIAO ESP32C3 をコンピュータに接続し、ボードに LED を接続して、Arduino IDE から簡単なコードを書き込み、接続した LED を点滅させることでボードが正常に動作しているか確認します。

### ハードウェアの準備

次のものを用意します：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip

一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。

:::

- **ステップ 1.** USB Type-C ケーブルで XIAO ESP32C3 をコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **ステップ 2.** 次のように D10 ピンに LED を接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Note:** LED に流れる電流を制限し、過電流による LED の焼損を防ぐために、必ず直列に抵抗（約 150Ω）を接続してください。

### ソフトウェアの準備

- **ステップ 1.** お使いのオペレーティングシステムに応じて、最新版の Arduino IDE をダウンロードしてインストールします

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **ステップ 2.** Arduino アプリケーションを起動します

- **ステップ 3.** Arduino IDE に ESP32 ボードパッケージを追加します

**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード "**esp32**" を入力し、**esp32** の最新版を選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **ステップ 4.** ボードとポートを選択します

**Board**

**Tools > Board > ESP32 Arduino** に移動し、"**XIAO_ESP32C3**" を選択します。ボードのリストは少し長いので、一番下までスクロールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Port**

**Tools > Port** に移動し、接続されている XIAO ESP32C3 のシリアルポート名を選択します。通常は COM3 以降になります（**COM1** と **COM2** はハードウェアシリアルポート用に予約されていることが多いです）。

### 最初の Blink プログラムを実行する

- **ステップ 1.** 下記のコードを Arduino IDE にコピーします

上の図のように、`D10` が LED に接続されていることを確認してください。

```cpp

// define led according to pin diagram in article
const int led = D10; // there is no LED_BUILTIN available for the XIAO ESP32C3.

void setup() {
  // initialize digital pin led as an output
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on 
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait for a second
}
```

- **ステップ 2.** **Upload** ボタンをクリックして、コードをボードに書き込みます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

書き込みが完了すると、接続した LED が 1 秒間隔で点滅するのが確認できます。これは接続が成功したことを意味し、これで XIAO ESP32C3 を使ったさらに多くのプロジェクトを探索できます。

## バッテリーの使用

XIAO ESP32C3 は、3.7V リチウムバッテリーを電源入力として使用することができます。配線方法については、次の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
はんだ付けの際に、正極と負極を短絡させてバッテリーや機器を焼損させないよう、十分注意してください。
:::

**バッテリー使用上の注意：**

1. 仕様を満たした、認定済みのバッテリーを使用してください。
2. バッテリー使用中でも、XIAO はデータケーブルを介してコンピュータ機器に接続できます。XIAO には内蔵の回路保護チップが搭載されており、安全です。
3. XIAO ESP32C3 は、バッテリー駆動時には（特定のプログラムを書き込んでいない限り）LED が点灯しません。LED の状態だけで XIAO ESP32C3 が動作しているかどうかを判断せず、必ずご自身のプログラムに基づいて適切に判断してください。
4. 申し訳ありませんが、現在のところソフトウェアによって残りのバッテリー残量を確認する方法はありません（利用可能なチップのピンが残っていないため）ので、定期的にバッテリーを充電するか、マルチメータを使用してバッテリー残量を確認する必要があります。

### バッテリー電圧の確認

ESP32C3 のピン数の制約により、他の XIAO シリーズと同じ数の GPIO を XIAO ESP32C3 で利用できるようにするため、エンジニアはバッテリー電圧測定用に割り当てる余分なピンを確保できませんでした。

しかし、バッテリー電圧測定専用のピンを使用したい場合は、[msfujino](https://forum.seeedstudio.com/u/msfujino) 氏の素晴らしい工夫を参考にすることができます。XIAO ESP32C3 のために多くの経験と労力を共有してくださった [msfujino](https://forum.seeedstudio.com/u/msfujino) 氏に、ここで特別な感謝を申し上げます。

基本的な動作の考え方は次のとおりです：バッテリー電圧を 200k で 1/2 に分圧し、A0 ポートに接続することで、電圧を監視できるようにします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

データシート上では、公称 2500mV フルスケールの AD 変換とされていますが、チップごとのばらつきが大きく、実際には ±10% 程度あります。私のチップではフルスケールが 2700mV でした。

幸いなことに、各チップの較正補正値はフューズ領域に書き込まれており、`analogReadMilliVolts()` 関数を使用することで、特別なことをしなくても補正済みの電圧値を読み取ることができます。

AD 変換の結果とマルチメータで測定した電圧はよく一致しており、誤差は約 5mV で、実用上問題ありません。

また、特に通信中にはスパイク状の誤差が発生するため、これを除去するには 16 回の平均化が必要でした。

以下は、バッテリー電圧をテストするための手順です。

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
上記の内容は Seeed Studio フォーラムユーザー **msfujino** 氏によるもので、元の投稿はこちらです：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
上記に基づいてバッテリー電圧を測定しようとする場合は、十分な実作業スキルと、より高度なはんだ付けスキルを身につけていることを推奨するとともに、バッテリーの短絡など危険な行為には十分注意してください。
:::

## ディープスリープモードとウェイクアップ

XIAO ESP32C3 は、ディープスリープモードとウェイクアップ機能をサポートするように設計されています。これら 2 つの機能の使用方法について、以下に使用例を示します。

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

もしXIAOがディープスリープに入る前に素早くシリアルモニタをオンにできれば、下図のようなメッセージ出力が確認できます。これはXIAOが現在「スリープ中」であることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
ディープスリープモードに入ると、XIAOのポートは表示されなくなり、再びポート番号を確認するにはXIAOをウェイクアップさせる必要があります！
:::

このプログラムでは、**D1** のローレベルでウェイクアップするようにしています。つまり、D1ピンにボタンを接続しておけば、そのボタンを押したときにXIAOが起動します。

:::caution
XIAO ESP32-C3はGPIOウェイクアップとタイマーウェイクアップをサポートしており、ウェイクアップに対応しているピンはD0〜D3です。
:::

## トラブルシューティング

### Q1: Arduino IDEでボードにコードを書き込むときに処理が止まってしまう

まず、ボードをPCに接続した状態で **RESET BUTTON** を1回押して、ボードをリセットしてみてください。それでも解決しない場合は、**BOOT BUTTON** を押し続けたままボードをPCに接続し、**BOOT** ボタンを離して **bootloader mode** に入ってください。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されない

上記の **Q1** と同じ手順に従ってください。

### Q3: ブートローダを工場出荷時ファームウェアで書き直したい

ボードを **USB Type-C** 経由でPCに接続し、**ESP RF Test Tool** を使用して工場出荷時ファームウェアのブートローダを書き込むだけで行えます。

- **ステップ 1.** **BOOT BUTTON** を押し続けたままXIAO ESP32C3をPCに接続し、**bootloader mode** に入ります

- **ステップ 2.** 接続されたら、BOOT BUTTONを離します

- **ステップ 3.** [このページ](https://www.espressif.com/en/support/download/other-tools) にアクセスし、**ESP RF Test Tool and Test Guide** をダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ 4.** **.zip** を解凍し、`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` に移動して **EspRFTestTool_v2.8_Manual.exe** を開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 5.** ChipTypeとして **ESP32C3**、COMポート、BaudRateとして **115200** を選択し、**open** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

次のような出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 6.** **Flash** を選択し、**Select Bin** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **ステップ 7.** [XIAO ESP32C3の工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) をダウンロードして選択します。

- **ステップ 8.** 最後に **Load Bin** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

書き込みが成功すると、次のような出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub リポジトリ

- [XIAO ESP32C3 MicroPython リポジトリ](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## リソース

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-C3 Datasheet](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf )
- **📄[回路図]** [XIAO ESP32-C3 Schematic](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_SCH_260116.pdf )
- **🗃️[PCB設計ファイル]** 
  - [XIAO ESP32-C3 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_KiCad_260116.zip )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-C3 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx )

**メカニカル**
- **📄[2D寸法]** [XIAO ESP32-C3 DXF形式寸法図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip )
- **🗃️[2D寸法]** [XIAO ESP32-C3 ボトムパッドデータ](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32C3_v1.2_Dimensioning.zip )
- **📄[3Dモデル]** [XIAO ESP32-C3 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1 )

**ソフトウェア & ツール**
- **🗃️[工場出荷時ファームウェア]** [XIAO ESP32-C3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin )
- **🔗[MicroPython ライブラリ]** [XIAO ESP32-C3 MicroPython ライブラリ](https://github.com/IcingTomato/micropython_xiao_esp32c3 )
- **🔗[Platform IO]** [Seeed Studio XIAO ESP32-C3 用 PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html )

**その他**
- **🔗[Wiki]** [First Look at the Seeed Studio XIAO ESP32-C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html )  
  - XIAO ESP32C3の優れたイントロで、主な機能と基本的な使い方をカバーしています。
- **📄[ドキュメント]** [XIAO ESP32-C3 低消費電力レポート](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/Low_Power_Consumption.pdf )

## コース用リソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)



## 参考資料

<JetsonLeadQuote
  buttonText="見積もり依頼"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
