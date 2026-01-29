---
description: Seeed Studio XIAO ESP32C3 入門ガイド
title: Seeed Studio XIAO ESP32C3 入門ガイド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C3 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## はじめに

**Seeed Studio XIAO ESP32C3** は、Espressif **ESP32-C3** WiFi/Bluetooth デュアルモードチップをベースとした IoT ミニ開発ボードで、効率的なアーキテクチャで強力なコンピューティング性能を提供する **32 ビット RISC-V CPU** を搭載しています。優れた無線周波数性能を持ち、**IEEE 802.11 b/g/n WiFi** および **Bluetooth 5 (BLE)** プロトコルをサポートしています。このボードには、ワイヤレスアプリケーションの信号強度を向上させるための外部アンテナが付属しています。また、**小型で精巧なフォームファクタ** と **片面実装設計** を組み合わせています。豊富なインターフェースを備え、**PWM ピン** として使用できる **11 個のデジタル I/O** と **ADC ピン** として使用できる **4 個のアナログ I/O** を搭載しています。**UART、I2C、SPI** などの 4 つのシリアルインターフェースをサポートしています。ボード上には小さな **リセットボタン** と **ブートローダーモードボタン** もあります。XIAO ESP32C3 は [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) および [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board) と完全に互換性がありますが、Seeeduino XIAO Expansion board については、ボード上の SWD スプリングコンタクトは互換性がありません。

上記で強調した機能に関して、XIAO ESP32C3 は **高性能、低消費電力、コスト効率の高い IoT ミニ開発ボード** として位置づけられ、**低消費電力 IoT アプリケーションおよびワイヤレスウェアラブルアプリケーション** に適しています。

この wiki では、XIAO ESP32C3 を素早く始める方法を紹介します！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

### 仕様

<table>
    <thead>
        <tr>
            <th>項目</th>
            <th>Seeed Studio XIAO ESP32C3</th>
            <th>Seeeduino XIAO</th>
            <th>Seeed XIAO RP2040</th>
            <th>Seeed XIAO nRF52840</th>
            <th>Seeed XIAO nRF52840 Sense</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>プロセッサ</th>
            <td>ESP32-C3 32-bit RISC-V @160MHz</td>
            <td>SAMD21 M0+@48MHz</td>
            <td>RP2040 Dual-core M0+@133Mhz</td>
            <td>nRF52840 M4F@64MHz</td>
            <td>nRF52840 M4F@64MHz</td>
        </tr>
        <tr>
            <th>ワイヤレス接続</th>
            <td>WiFi and Bluetooth 5 (BLE)</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
        </tr>
        <tr>
            <th>メモリ</th>
            <td>400KB SRAM, 4MB onboard Flash</td>
            <td>32KB SRAM 256KB FLASH</td>
            <td>264KB SRAM 2MB onboard Flash</td>
            <td>256KB RAM, 1MB Flash 2MB onboard Flash</td>
            <td>256KB RAM,1MB Flash 2MB onboard Flash</td>
        </tr>
        <tr>
            <th>内蔵センサー</th>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
        </tr>
        <tr>
            <th>インターフェース</th>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
        </tr>
        <tr>
            <th>PWM/アナログピン</th>
            <td>11/4</td>
            <td>11/11</td>
            <td>11/4</td>
            <td>11/6</td>
            <td>11/6</td>
        </tr>
        <tr>
            <th>オンボードボタン</th>
            <td>Reset/ Boot Button</td>
            <td>N/A</td>
            <td>Reset/ Boot Button</td>
            <td>Reset Button</td>
            <td>Reset Button</td>
        </tr>
        <tr>
            <th>オンボード LED</th>
            <td>Charge LED</td>
            <td>N/A</td>
            <td>Full-color RGB/ 3-in-one LED</td>
            <td>3-in-one LED/ Charge LED</td>
            <td>3-in-one LED/ Charge LED</td>
        </tr>
        <tr>
            <th>バッテリー充電チップ</th>
            <td>ETA4054S2F</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>BQ25101</td>
            <td>BQ25101</td>
        </tr>
        <tr>
            <th>プログラミング言語</th>
            <td>Arduino/ MicroPython</td>
            <td>Arduino/ CircuitPython</td>
            <td colspan="3" align="center">Arduino/ MicroPython/ CircuitPython</td>
        </tr>
    </tbody>
</table>

### 特徴

- **強力な CPU：** ESP32-C3、最大 160 MHz で動作する 32 ビット RISC-V シングルコアプロセッサ
- **完全な Wi-Fi サブシステム：** IEEE 802.11b/g/n プロトコルに準拠し、Station モード、SoftAP モード、SoftAP + Station モード、プロミスキャスモードをサポート
- **Bluetooth LE サブシステム：** Bluetooth 5 および Bluetooth mesh の機能をサポート
- **超低消費電力：** ディープスリープ時の消費電力は約 43μA
- **優れた RF 性能：** 外部 RF アンテナ付属
- **バッテリー充電チップ：** リチウムバッテリーの充放電管理をサポート
- **豊富なオンチップリソース：** 400KB の SRAM と 4MB のオンボードフラッシュメモリ
- **超小型サイズ：** ウェアラブルデバイスや小型プロジェクト向けの親指サイズ（21x17.8mm）XIAO シリーズクラシックフォームファクタ
- **信頼性の高いセキュリティ機能：** AES-128/256、Hash、RSA、HMAC、デジタル署名、セキュアブートをサポートする暗号化ハードウェアアクセラレータ
- **豊富なインターフェース：** 1xI2C、1xSPI、2xUART、11xGPIO（PWM）、4xADC、1xJTAG ボンディングパッドインターフェース
- 片面部品、表面実装設計

## ハードウェア概要

> *A3（GP105）- ADC2 を使用しており、偽のサンプリング信号により動作しなくなる可能性があります。信頼性の高いアナログ読み取りには、代わりに ADC1（A0/A1/A2）を使用してください。ESP32-C3 データシートを参照してください。

<table align="center">
 <tr>
     <th>XIAO ESP32C3 前面表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 背面表示図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 ピンリスト</th>
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
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, I2C Data       |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, I2C Clock      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, UART Transmit  |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, UART Receive   |
| D8              | SCK       | GPIO8     |                                     | GPIO, SPI Clock      |
| D9              | MISO      | GPIO9     |                                     | GPIO, SPI Data       |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, SPI Data       |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | Enter Boot Mode      |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | UFL antenna          |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### 電源ピン

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電力）を配置し、アノードをバッテリー側、カソードを5Vピン側にする必要があります。
- 3V3 - これはオンボードレギュレータからの調整済み出力です。700mAまで引き出すことができます
- GND - 電源/データ/信号グランド

### ストラッピングピン

ESP32C3のチップマニュアルによると、チップ内の**GPIO2**、**GPIO8**、**GPIO9**はストラッピングピンであり、これらのピンのハイレベルとローレベルの設定により、チップが異なるブートモードに入る可能性があります。これらのピンを使用する際はこの点にご注意ください。そうでないと、XIAOがプログラムのアップロードや実行を常に妨げられる可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## 入門ガイド

まず、XIAO ESP32C3をコンピュータに接続し、ボードにLEDを接続して、Arduino IDEから簡単なコードをアップロードし、接続されたLEDを点滅させることでボードが正常に機能しているかを確認します。

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

:::tip

一部のUSBケーブルは電力供給のみでデータ転送ができません。USBケーブルをお持ちでない場合や、お使いのUSBケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。

:::

- **ステップ 1.** USB Type-CケーブルでXIAO ESP32C3をコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **ステップ 2.** 以下のようにD10ピンにLEDを接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意：** LEDを通る電流を制限し、LEDを焼損させる過電流を防ぐため、必ず抵抗（約150Ω）を直列に接続してください

### ソフトウェアの準備

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDEの最新バージョンをダウンロードしてインストールします

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **ステップ 2.** Arduinoアプリケーションを起動します

- **ステップ 3.** Arduino IDEにESP32ボードパッケージを追加します

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスにキーワード"**esp32**"を入力し、**esp32**の最新バージョンを選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **ステップ 4.** ボードとポートを選択します

**ボード**

**Tools > Board > ESP32 Arduino**に移動し、"**XIAO_ESP32C3**"を選択します。ボードリストは少し長いので、下までスクロールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**ポート**

**Tools > Port**に移動し、接続されたXIAO ESP32C3のシリアルポート名を選択します。これはCOM3以上である可能性が高いです（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。

### 最初のBlinkプログラムを実行する

- **ステップ 1.** 以下のコードをArduino IDEにコピーします

上図のように`D10`がLEDに接続されていることを確認してください。

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

- **ステップ 2.** **Upload**ボタンをクリックしてコードをボードにアップロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

アップロードが完了すると、接続されたLEDが1秒間隔で点滅するのが確認できます。これは接続が成功したことを意味し、XIAO ESP32C3でより多くのプロジェクトを探索できるようになりました！

## バッテリーの使用

XIAO ESP32C3は3.7Vリチウムバッテリーを電源入力として使用することができます。配線方法については以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
はんだ付けの際は、正極と負極を短絡させてバッテリーや機器を焼損させないよう十分注意してください。
:::

**バッテリー使用に関する注意事項：**

1. 仕様に適合した適格なバッテリーを使用してください。
2. XIAOはバッテリー使用中でもデータケーブルでコンピュータデバイスに接続できます。XIAOには回路保護チップが内蔵されているため安全です。
3. XIAO ESP32C3はバッテリー駆動時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO ESP32C3が動作しているかどうかを判断せず、プログラムによって合理的に判断してください。
4. 申し訳ございませんが、現在ソフトウェアを通じてバッテリー残量を確認する方法はありません（利用可能なチップピンがないため）。定期的にバッテリーを充電するか、マルチメーターでバッテリーレベルを確認する必要があります。

### バッテリー電圧の確認

ESP32C3のピン数の制限により、XIAO ESP32C3が他のXIAO シリーズと同じ数のGPIOを持つことを保証するため、エンジニアはバッテリーの電圧測定に割り当てる追加のピンがありませんでした。

しかし、バッテリー電圧測定用に別のピンを使用したい場合は、[msfujino](https://forum.seeedstudio.com/u/msfujino)の天才的な操作を参考にできます。XIAO ESP32C3のために共有されたすべての経験と努力について、[msfujino](https://forum.seeedstudio.com/u/msfujino)に特別な感謝を表したいと思います。

基本的な動作アイデアは：バッテリー電圧を200kで1/2に分圧してA0ポートに接続し、電圧を監視できるようにすることです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

データシートでは公称2500mVフルスケールAD変換とありますが、チップごとに大きなばらつきがあり、実際には±10%です。私のチップは2700mVフルスケールでした。

幸い、各チップの校正済み補正値がヒューズ領域に書き込まれており、`analogReadMilliVolts()`関数を使用することで、特別な処理をすることなく補正された電圧値を読み取ることができます。

AD変換の結果とマルチメーターで測定した電圧は、約5mVの誤差でよく一致しており、実用上問題ありません。

また、特に通信中にスパイク状のエラーが発生したため、これを除去するために16回平均化する必要がありました。

以下はバッテリー電圧をテストする手順です。

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
上記はSeeed Studioフォーラムユーザー**msfujino**からのもので、元の投稿は：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)です。
上記に基づいてバッテリー電圧測定を試みる前に、優れた実践スキルとより良いはんだ付けスキルを持つことをお勧めし、バッテリーの短絡などの危険な行為には注意してください。
:::

## ディープスリープモードとウェイクアップ

XIAO ESP32C3はディープスリープモードとウェイクアップ機能をサポートするよう設計されています。これら2つの機能の使用について、以下の使用例を提供します。

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

XIAOがディープスリープに入る前にシリアルモニターを素早く開くことができれば、以下に示すようなメッセージ出力を確認できます。これは、XIAOが現在「スリープ状態」にあることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
ディープスリープモードに入った後、XIAOのポートは消失し、再度ポート番号を確認するには起動する必要があります！
:::

プログラムでは、**D1**のローレベルを使用してウェイクアップしています。これは、ピンD1にボタンを接続し、ボタンを押すとXIAOがウェイクアップすることを意味します。

:::caution
XIAO ESP32-C3はGPIOウェイクアップとタイマーウェイクアップをサポートしており、ウェイクアップをサポートするピンはD0〜D3です。
:::

## トラブルシューティング

### Q1: Arduino IDEでボードにコードをアップロードする際にスタックする

まず、ボードがPCに接続されている状態で**RESETボタン**を一度クリックしてボードをリセットしてみてください。それでも解決しない場合は、**BOOTボタン**を押し続けながらボードをPCに接続し、その後ボタンを離して**ブートローダーモード**に入ってください。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されない

上記の**Q1**と同じ解決方法に従ってください。

### Q3: ブートローダーを工場出荷時ファームウェアで再フラッシュしたい

**USB Type-C**でボードをPCに接続し、**ESP RF Test Tool**を使用してブートローダーを工場出荷時ファームウェアで再フラッシュできます。

- **ステップ1.** **BOOTボタン**を押し続けながらXIAO ESP32C3をPCに接続して**ブートローダーモード**に入る

- **ステップ2.** 接続後、BOOTボタンを離す

- **ステップ3.** [このページ](https://www.espressif.com/en/support/download/other-tools)にアクセスして**ESP RF Test Tool and Test Guide**をダウンロードする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ4.** **.zip**を展開し、`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual`に移動して**EspRFTestTool_v2.8_Manual.exe**を開く

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **ステップ5.** ChipTypeとして**ESP32C3**、COMポート、BaudRateとして**115200**を選択し、**open**をクリックする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **ステップ6.** **Flash**を選択し、**Select Bin**をクリックする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **ステップ7.** [XIAO ESP32C3の工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)をダウンロードして選択する。

- **ステップ8.** 最後に**Load Bin**をクリックする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

フラッシュが成功すると以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHubリポジトリ

- [XIAO ESP32C3 MicroPython Repo](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## リソース

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 データシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCADライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagleライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 DXF寸法図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagleフットプリント](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPythonライブラリ](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Link]** [Platform IO for Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [First Look at the Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  XIAO ESP32C3の優れた入門ガイドで、主要機能と基本的な使用方法をカバーしています。
- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) XIAOボードでArduinoとTinyMLをマスターするための優れたガイドです。
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
