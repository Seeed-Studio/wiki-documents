---
title: Seeed Studio XIAO ESP32-C5 入門ガイド
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /ja/xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
---

## はじめに

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 仕様

<table>
    <thead>
        <tr>
            <th>項目</th>
            <th>Seeed Studio XIAO ESP32-C5</th>
            <th>Seeed Studio XIAO ESP32-S3</th>
            <th>Seeed Studio XIAO ESP32-C3</th>
            <th>Seeed Studio XIAO ESP32-C6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>プロセッサ</th>
            <td>ESP32-C5 RISC-V 32-bit @240 MHz</td>
            <td>ESP32R8N8 32-bit Xtensa LX7 dual-core @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>ワイヤレス接続</th>
            <td>**2.4 GHz & 5 GHz デュアルバンド Wi-Fi 6** および Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi および Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi および Bluetooth 5 (LE)</td>
            <td> 2.4 GHz Wi-Fi 6、Bluetooth 5 (LE)</td>
        </tr>
        <tr>
            <th>メモリ</th>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>400 KB SRAM, 4 MB Flash</td>
            <td>512KB SRAM , 4MB Flash</td>
        </tr>
        <tr>
            <th>インターフェース</th>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
        </tr>
        <tr>
            <th>PWM/アナログピン</th>
            <td>11 / 5</td>
            <td>11 / 9</td>
            <td>11 / 4</td>
            <td>11 / 7</td>
        </tr>
        <tr>
            <th>オンボードボタン</th>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset button / Boot button</td>
        </tr>
        <tr>
            <th>オンボードLED</th>
            <td>Charge / USER LED</td>
            <td>Charge / USER LED</td>
            <td>Charge LED</td>
            <td>Charge / USER LED</td>
        </tr>
        <tr>
            <th>バッテリー充電チップ</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### 特徴

- **強力なCPU:** ESP32-C5、最大240MHzで動作する32ビットRISC-Vシングルコアプロセッサ
- **完全なWi-Fiサブシステム:** IEEE 802.11 a/b/g/n/ac/ax準拠のデュアルバンドWi-Fi 6サブシステム（2.4 GHzおよび5 GHz）、Station、SoftAP、同時SoftAP+Station動作、およびプロミスキャス（モニタ）モードをサポート。
- **Bluetooth LEサブシステム:** Bluetooth 5およびBluetoothメッシュの機能をサポート
- **優れたRF性能:** 外部RFアンテナが付属。
- **バッテリー充電チップ:** リチウムバッテリーの充放電管理をサポート。
- **豊富なオンチップリソース:** 384 KBオンチップSRAM、320 KB ROM
- **超小型サイズ:** 親指ほどの小ささ（21x17.8mm）XIAOシリーズクラシックフォームファクタで、ウェアラブルデバイスや小型プロジェクトに最適
- **信頼性の高いセキュリティ機能**: AES-128/256、SHAファミリーハッシュ、HMAC、専用デジタル署名ペリフェラル、およびSecure Boot（V2）をサポートする暗号化ハードウェアアクセラレータ。
- **豊富なインターフェース**: 1×I2C、1×SPI、2×UART、最大11×GPIO（PWM対応）、5×ADCチャンネル、およびJTAG（裏面のパッド）ボンディングパッドインターフェース。
- 片面実装部品、表面実装設計

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO ESP32-C5 表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-C5 ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

 ## **ピンマップ**
| XIAOピン                | 機能   | チップピン  | 代替機能       | 説明                  |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | 電源入力/出力           |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | 電源出力                 |
| D0                     | Analog     | GPIO1     | LP_UART_DSRN,LP_GPIO1    | GPIO、ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN,LP_GPIO0    | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO、I2Cデータ               |
| D5                     | SCL        | GPIO24    |                          | GPIO、I2Cクロック              |
| D6                     | TX         | GPIO11    |                          | GPIO、UART送信          |
| D7                     | RX         | GPIO12    |                          | GPIO、UART受信           |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO、SPIクロック              |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO、SPIデータ               |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO、SPIデータ               |
| MTDO                   |            | GPIO5     |                          | JTAG                         |
| MTDI                   |            | GPIO3     |                          | JTAG、ADC                    |
| MTCK                   |            | GPIO4     |                          | JTAG、ADC                    |
| MTMS                   |            | GPIO2     |                          | JTAG、ADC                    |
| ADC_BAT                |            | GPIO6    |                          | BAT電圧値を読み取り   |
| ADC_CRL                |            | GPIO26    |                          | 電力節約のため測定回路を制御（有効/無効）。   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | Bootモードに入る              |
| U.FL-R-SMT1            |            | LNA_IN    |                          | UFLアンテナ                  |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_Red                  |
| USER_LED               |            | GPIO27    |                          | ユーザーライト_Yellow            |
## 入門ガイド

XIAO ESP32-C5をより早く使い始められるように、以下のハードウェアとソフトウェアの準備を読んでXIAOを準備してください。

### ハードウェア

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
一部のUSBケーブルは電力供給のみで、データ転送ができません。USBケーブルをお持ちでない場合、またはお持ちのUSBケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::

### ソフトウェア

XIAO ESP32-C5の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
  </div>
  <br></br>

- **ステップ 2.** Arduinoアプリケーションを起動します。
- **ステップ 3.**  BOARDS MANAGER を開く -> **esp32** を検索 -> バージョン3.3.5以上をインストール

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### プログラムのアップロード

以下では点灯プログラムを例に説明します

**ステップ 1.** **XIAO_ESP32C5** と PORT を選択します。PORT が分からない場合は、XIAO_ESP32C5 を再挿入して取り外し、確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** スケッチにコードを貼り付けます

**LED_BUILTIN** は開発ボード上の **L LED** に対応しています。

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**ステップ 3.** クリックしてアップロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

効果のデモンストレーション：

プログラムをアップロードすると、L インジケーターライトが 1 秒間隔で点滅し、同時にシリアルモニターに LED ON と LED OFF が印刷されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## ディープスリープモード

XIAO ESP32-C5 はディープスリープとウェイクアップ機能を備えています。この例では、ピン **D0** のハイレベルトリガーを使用してデバイスをディープスリープから起動します。<br/>
これは設定可能なオプションであることに注意することが重要です。ハードウェアは異なる回路設計に対応するため、ハイレベルとローレベルの両方のトリガーをサポートしています。

```cpp
#define WAKEUP_PIN D0 // LP_GPIO1

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    case ESP_SLEEP_WAKEUP_GPIO : Serial.println("Wakeup caused by GPIO"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000);

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();

  pinMode(WAKEUP_PIN, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);

  uint64_t mask = 1ULL << WAKEUP_PIN;
  esp_deep_sleep_enable_gpio_wakeup(mask, ESP_GPIO_WAKEUP_GPIO_HIGH);

  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);

  delay(2000);  //Delay time depends on the serial port / Give the PC time to stabilize
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
}

void loop(){}
```

XIAO がディープスリープに入る前にシリアルモニターを開くのが十分に早ければ、以下に示すようなメッセージ出力を見ることができます。これは XIAO が現在**スリープ状態**であることを意味します。その後、ボタンを押すことで表示と起動を確認することもできます。デバイスが起動されたかどうかを確認するために、**L LED** のオン・オフ状態を観察することもできます。起動されると、点滅効果を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
ディープスリープモードに入った後、XIAO のポートは消失し、再びポート番号を確認するには起動する必要があります！
:::

:::caution
現在、XIAO ESP32-C5 は GPIO ウェイクアップのみをサポートしており、ウェイクアップをサポートするピンは D0～D1 のみです。このプログラムは他のピンでは動作しない可能性があります。
:::

## バッテリーの使用

XIAO ESP32-C5 は 3.7V リチウムバッテリーを電源供給入力として使用することができます。配線方法については、以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
はんだ付けの際は、正極と負極を短絡させてバッテリーと機器を焼損させないよう注意してください。
:::

**バッテリーの使用に関する注意事項：**

1. 仕様に適合する認定されたバッテリーを使用してください。
2. XIAO はバッテリーを使用しながらデータケーブル経由でコンピューターデバイスに接続できます。XIAO には回路保護チップが内蔵されているため安全です。
3. XIAO ESP32-C5 がバッテリーで電源供給されている場合、**C LED** が点灯します。これを充電管理が実行されているかどうかを判断する基準として使用できます。

### バッテリー電圧の確認

XIAO ESP32-C5 は SGM40567 バッテリー充電チップと TPS22916CYFPR バッテリー電圧取得チップを搭載しています。**BAT_VOLT_PIN_EN** を有効にしてバッテリー電圧取得機能を起動し、**BAT_VOLT_PIN** を通じてバッテリー電圧を読み取ることができます。

:::tip
XIAO ESP32C5 では、BAT_VOLT_PIN に対応するピンは GPIO6 で、BAT_VOLT_PIN_EN に対応するピンは GPIO26 です。
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , HIGH);
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(BAT_VOLT_PIN ); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

- **`analogReadMilliVolts(BAT_Voltage_Read)`**

  - この関数は `BAT_VOLT_PIN` ピンから現在のアナログ電圧を読み取り、ミリボルト（mV）単位で校正された電圧値を返すために使用されます。
  - 生の ADC 値のみを提供する従来の `analogRead()` とは異なり、`analogReadMilliVolts()` はチップに埋め込まれた工場校正パラメータを自動的に適用します。これにより、より高い精度、電圧測定における線形性の向上が実現され、手動での ADC から電圧への変換が不要になります。
  - 電圧サンプリングプロセス中、`for` ループを通じて **16 回の繰り返しサンプリング**が実行され、結果が累積されます。複数回サンプリングの目的は、過渡ノイズと離散エラーを抑制し、測定安定性を向上させることです。最後に、累積値をサンプル数（16）で割って、よりスムーズで信頼性の高い平均電圧値を取得します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
データシートによると、ESP32-C5 の有効測定範囲は 0～3300 mV をカバーしています。そのため、XIAO ESP32-C5 の内蔵バッテリー電圧取得回路は、電圧分割用に 2 つの 100K 抵抗で設計されており、正確な値の読み取りを可能にしています。
:::

## リソース

- **[PDF]** [ESP32-C5 データシート](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf)
- **[PCB 設計ファイル]** [XIAO ESP32-C5 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip)
- **[回路図]** [XIAO ESP32-C5 回路図](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
