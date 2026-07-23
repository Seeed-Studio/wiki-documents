---
title: Seeed Studio XIAO ESP32-C5 入門ガイド
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_getting_started
last_update:
  date: 7/9/2026
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-15'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/
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
            <td>ESP32R8N8 32-bit Xtensa LX7 デュアルコア @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>無線接続</th>
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
            <td>リセット / ブートボタン</td>
            <td>リセット / ブートボタン</td>
            <td>リセット / ブートボタン</td>
            <td>リセットボタン / ブートボタン</td>
        </tr>
        <tr>
            <th>オンボード LED</th>
            <td>充電 / USER LED</td>
            <td>充電 / USER LED</td>
            <td>充電 LED</td>
            <td>充電 / USER LED</td>
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

### 特長

- **高性能 CPU：** ESP32-C5、最大 240 MHz で動作する 32 ビット RISC-V シングルコアプロセッサ
- **完全な Wi-Fi サブシステム：** IEEE 802.11 a/b/g/n/ac/ax に準拠したデュアルバンド Wi-Fi 6 サブシステム（2.4 GHz および 5 GHz）で、Station、SoftAP、SoftAP+Station 同時動作、およびプロミスキャス（モニタ）モードをサポートします。
- **Bluetooth LE サブシステム：** Bluetooth 5 および Bluetooth メッシュの機能をサポート
- **優れた RF 性能：** 外部 RF アンテナを搭載。
- **バッテリー充電チップ：** リチウムバッテリーの充放電管理をサポート。
- **豊富なオンチップリソース：** 384 KB オンチップ SRAM、320 KB ROM
- **超小型サイズ：** 親指ほどの大きさ（21x17.8mm）の XIAO シリーズクラシックフォームファクタで、ウェアラブルデバイスや小型プロジェクトに最適
- **信頼性の高いセキュリティ機能：** AES-128/256、SHA ファミリハッシュ、HMAC、専用デジタル署名ペリフェラル、および Secure Boot (V2) をサポートする暗号ハードウェアアクセラレータ。
- **豊富なインターフェース：** 1×I2C、1×SPI、2×UART、最大 11×GPIO（PWM 対応）、5×ADC チャネル、および JTAG（裏面パッド）のボンディングパッドインターフェース。
- 片面実装コンポーネント、表面実装設計

## ハードウェア概要

### 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## ピンマップ

| XIAO ピン              | 機能      | チップピン | 代替機能                    | 説明                          |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | 電源入力/出力                |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | 電源出力                     |
| D0                     | アナログ   | GPIO1     | LP_UART_DSRN, LP_GPIO1   | GPIO、ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN, LP_GPIO0   | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO、I2C データ             |
| D5                     | SCL        | GPIO24    |                          | GPIO、I2C クロック           |
| D6                     | TX         | GPIO11    |                          | GPIO、UART 送信              |
| D7                     | RX         | GPIO12    |                          | GPIO、UART 受信              |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO、SPI クロック           |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO、SPI データ             |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO、SPI データ             |
| MTDO                   |            | GPIO5     | LP_UART_TXD, LP_GPIO5    | JTAG                         |
| MTDI                   |            | GPIO3     | LP_I2C_SCL, LP_GPIO3     | JTAG、ADC                    |
| MTCK                   |            | GPIO4     | LP_UART_RXD, LP_GPIO4    | JTAG、ADC                    |
| MTMS                   |            | GPIO2     | LP_I2C_SDA, LP_GPIO2     | JTAG、ADC                    |
| ADC_BAT                |            | GPIO6    |                          | BAT 電圧値を読み取る         |
| ADC_CRL                |            | GPIO26    |                          | 省電力のため測定回路を制御（有効/無効）します。   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | ブートモードに入る           |
| U.FL-R-SMT1            |            | LNA_IN    |                          | UFL アンテナ                 |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_赤                   |
| USER_LED               |            | GPIO27    |                          | ユーザーライト_黄            |
## はじめに進める

XIAO ESP32-C5 をすばやく使い始められるようにするために、以下のハードウェアおよびソフトウェアの準備を読んで、XIAO を準備してください。

### ハードウェア

次のものを用意する必要があります：

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

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
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

### ソフトウェア

XIAO ESP32-C5 に推奨される開発ツールは Arduino IDE です。そのため、ソフトウェアの準備として Arduino のインストールを完了する必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **Step 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Arduino アプリケーションを起動します。
- **Step 3.**  BOARDS MANAGER を開き -> **esp32** を検索 -> バージョン 3.3.5 以上をインストールします

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### プログラムを書き込む

以下では、点灯プログラムを例として説明します。

**Step 1.** **XIAO_ESP32C5** とポートを選択します。ポートが分からない場合は、XIAO_ESP3-2C5 を抜き差しして確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** スケッチにコードを貼り付ける

**LED_BUILTIN** は、開発ボード上の **L LED** に対応しています。

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

**ステップ 3.** クリックしてアップロード

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

動作デモ：

プログラムをアップロードすると、L インジケータランプが 1 秒間隔で点滅し、同時にシリアルモニタには LED ON と LED OFF が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## ディープスリープモード

XIAO ESP32-C5 にはディープスリープおよびウェイクアップ機能が搭載されています。この例では、ピン **D0** のハイレベルトリガを利用して、ディープスリープからデバイスをウェイクアップします。<br/>
これは設定可能なオプションであり、ハードウェアはハイレベルおよびローレベルトリガの両方をサポートしているため、さまざまな回路設計に対応できることに注意してください。

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

もし XIAO がディープスリープに入る前に素早くシリアルモニタを起動できれば、下図のようなメッセージ出力を確認できます。これは、XIAO が現在**スリープ状態**であることを意味します。その後、ボタンを押すことで状態を確認し、起動させることもできます。また、デバイスがウェイクアップしたかどうかを確認するために、**L LED** のオン・オフ状態を観察することもできます。一度ウェイクアップすると、点滅動作を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
ディープスリープモードに入ると、XIAO のポートは認識されなくなり、再びポート番号を表示させるにはウェイクアップさせる必要があります！
:::

:::caution
XIAO ESP32-C5 は GPIO ウェイクアップおよびタイマーウェイクアップをサポートしています。低消費電力開発時にハードウェアデバッグ機能の喪失やファームウェア書き込みの難易度が増すことを防ぐため、JTAG（MTMS、MTDI、MTCK、MTDO）ピンは専用として確保し、ディープスリープモードのウェイクアップソースとして使用しないことを強く推奨します。
:::

## バッテリーの使用

XIAO ESP32-C5 は、3.7V リチウムバッテリーを電源入力として使用することができます。配線方法については、以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
はんだ付けの際には、正極と負極を短絡させてバッテリーや機器を損傷させないよう十分注意してください。
:::

**バッテリー使用上の注意：**

1. 規格を満たした認証済みバッテリーを使用してください。
2. バッテリー使用中でも、XIAO はデータケーブルを介してコンピュータ機器に接続できます。XIAO には保護回路チップが内蔵されているため、安全にご使用いただけます。
3. XIAO ESP32-C5 がバッテリーで給電されている場合、**C LED** が点灯します。これを基準として、充電管理が行われているかどうかを判断できます。

### バッテリー電圧の確認

XIAO ESP32-C5 には、バッテリー充電チップ SGM40567 とバッテリー電圧取得チップ TPS22916CYFPR が搭載されています。**BAT_VOLT_PIN_EN** を有効にすることでバッテリー電圧取得機能を起動し、**BAT_VOLT_PIN** を通じてバッテリー電圧を読み取ることができます。

:::tip
XIAO ESP32C5 では、BAT_VOLT_PIN に対応するピンは GPIO6、BAT_VOLT_PIN_EN に対応するピンは GPIO26 です。
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

  - この関数は、`BAT_VOLT_PIN` ピンから現在のアナログ電圧を読み取り、ミリボルト（mV）単位の較正済み電圧値を返すために使用されます。
  - 従来の `analogRead()` が生の ADC 値のみを返すのに対し、`analogReadMilliVolts()` はチップに組み込まれた工場出荷時の較正パラメータを自動的に適用します。これにより、より高い精度と電圧測定の直線性が得られ、手動での ADC から電圧への変換が不要になります。
  - 電圧サンプリング処理中は、`for` ループを通じて **16 回の繰り返しサンプリング** を行い、その結果を加算します。複数回サンプリングを行う目的は、一時的なノイズや離散誤差を抑制し、測定の安定性を向上させることです。最後に、累積値をサンプル数（16）で割ることで、より滑らかで信頼性の高い平均電圧値を得ます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
データシートによると、ESP32-C5 の有効測定範囲は 0～3300 mV をカバーしています。そのため、XIAO ESP32-C5 の内蔵バッテリー電圧取得回路は、2 つの 100K 抵抗による分圧設計となっており、値を正確に読み取ることができます。
:::

## リソース

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-C5 Datasheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf )
- **📄[回路図]** [XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO ESP32-C5 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-C5 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/XIAO_ESP32C5_Pinout.xlsx )

**メカニカル設計**
- **📄[3D モデル]** [XIAO ESP32-C5 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1 )

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
