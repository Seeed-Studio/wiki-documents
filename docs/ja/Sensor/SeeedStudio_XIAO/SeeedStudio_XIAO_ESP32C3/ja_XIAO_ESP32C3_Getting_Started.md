---
description: Seeed Studio XIAO ESP32C3の使用開始
title: Seeed Studio XIAO ESP32C3の使用開始
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_Getting_Started
sku: 113991054
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C3の使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## はじめに

**Seeed Studio XIAO ESP32C3**は、Espressif **ESP32-C3** WiFi/Bluetooth デュアルモードチップをベースとしたIoTミニ開発ボードで、効率的なアーキテクチャで強力なコンピューティング性能を提供する**32ビットRISC-V CPU**を搭載しています。優れた無線周波数性能を持ち、**IEEE 802.11 b/g/n WiFi**および**Bluetooth 5 (BLE)**プロトコルをサポートしています。このボードには、ワイヤレスアプリケーションの信号強度を向上させるための外部アンテナが付属しています。また、**小型で精巧なフォームファクター**と**片面実装可能な設計**を組み合わせています。豊富なインターフェースを備え、**PWMピン**として使用できる**11個のデジタルI/O**と、**ADCピン**として使用できる**4個のアナログI/O**を搭載しています。**UART、I2C、SPI**などの4つのシリアルインターフェースをサポートしています。ボード上には小さな**リセットボタン**と**ブートローダーモードボタン**もあります。XIAO ESP32C3は[Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)および[Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board)と完全に互換性がありますが、Seeeduino XIAO Expansion boardについては、ボード上のSWDスプリングコンタクトは互換性がありません。

上記で強調した機能に関して、XIAO ESP32C3は**高性能、低消費電力、コスト効率の高いIoTミニ開発ボード**として位置づけられ、**低消費電力IoTアプリケーションおよびワイヤレスウェアラブルアプリケーション**に適しています。

このwikiでは、XIAO ESP32C3を素早く使い始める方法を紹介します！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
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
            <th>オンボードLED</th>
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

### 機能

- **強力なCPU:** ESP32-C3、最大160MHzで動作する32ビットRISC-Vシングルコアプロセッサ
- **完全なWi-Fiサブシステム:** IEEE 802.11b/g/nプロトコルに準拠し、Stationモード、SoftAPモード、SoftAP + Stationモード、およびプロミスキャスモードをサポート
- **Bluetooth LEサブシステム:** Bluetooth 5およびBluetoothメッシュの機能をサポート
- **超低消費電力:** ディープスリープ時の消費電力は約43μA
- **優れたRF性能:** 外部RFアンテナを含む
- **バッテリー充電チップ:** リチウムバッテリーの充放電管理をサポート
- **豊富なオンチップリソース:** 400KBのSRAMと4MBのオンボードフラッシュメモリ
- **超小型サイズ:** 親指ほどの小ささ（21x17.8mm）XIAOシリーズの定番フォームファクターでウェアラブルデバイスや小型プロジェクトに最適
- **信頼性の高いセキュリティ機能:** AES-128/256、Hash、RSA、HMAC、デジタル署名、セキュアブートをサポートする暗号化ハードウェアアクセラレータ
- **豊富なインターフェース:** 1xI2C、1xSPI、2xUART、11xGPIO（PWM）、4xADC、1xJTAGボンディングパッドインターフェース
- 片面実装部品、表面実装設計

## ハードウェア概要

> *A3(GP105) - ADC2を使用しており、偽のサンプリング信号により動作不能になる可能性があります。信頼性の高いアナログ読み取りには、代わりにADC1（A0/A1/A2）を使用してください。ESP32-C3データシートを参照してください。

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
        画像説明：この画像はSeeed Studio XIAO ESP32-C3開発ボードの公式ピン配置図です。
        図には以下が示されています：
        - XIAO ESP32-C3ボードの上面図。
        - GPIOピンマッピング、デジタル/アナログラベル、電源ピン、および機能固有の役割（I2C、UART、SPI）。
        - 各ピンタイプの色分けされたラベル。
        ピンレイアウト（画像に表示されている通り）：
        === 左側ピン（上から下へ） ===
        - GPIO2    | A0  | D0   → アナログ対応（ADC1）
        - GPIO3    | A1  | D1   → アナログ対応（ADC1）
        - GPIO4    | A2  | D2   → アナログ対応（ADC1）
        - GPIO5    | A3（取り消し線） | D3 → ADC2経由でアナログ対応（推奨されない）
        - GPIO6    | SDA | D4   → I2Cデータライン
        - GPIO7    | SCL | D5   → I2Cクロックライン
        - GPIO21   | TX  | D6   → UART TX（送信）
        === 右側ピン（上から下へ） ===
        - 5V       → 電源入力/出力
        - GND      → グランド
        - 3V3      → 3.3V電源出力
        - D10      | MOSI | GPIO10 → SPI MOSI（アナログ対応なし）
        - D9       | MISO | GPIO9  → SPI MISO（アナログ対応なし）
        - D8       | SCK  | GPIO8  → SPIクロック（アナログ対応なし）
        - D7       | RX   | GPIO20 → UART RX（受信）
        === ピン機能色凡例（画像に表示） ===
        - 青：デジタルピンラベル（D0–D10）
        - ピンク：アナログピンラベル（A0–A2）；A3はADC2の不安定性により取り消し線
        - 緑：GPIO番号
        - ティール：I2C機能（SDA、SCL）
        - グレー：UART機能（TX、RX）
        - 紫：SPI機能（MOSI、MISO、SCK）
        - 黒：GND
        - 赤：電源ピン（5V、3V3）
        === 画像内の脚注 ===
        「A3（GPIO5） - ADC2を使用しており、偽のサンプリング信号により動作不能になる可能性があります。
        信頼性のあるアナログ読み取りには、代わりにADC1を使用してください。ESP32-C3データシートを参照してください。」
        === 注記 ===
        - A0、A1、A2のみがADC1を使用する公式にサポートされたアナログピンです。
        - A3（GPIO5）はADC2の信頼性の問題により取り消し線が引かれ、推奨されていません。
        - GPIO0、GPIO1は技術的にはADC1対応ですが、この画像ではアナログピンとして表示されていません。
        - GPIO 8–10、20–21はアナログ入力に使用できません。
        - このレイアウトは、回路設計やファームウェア作成時に安全で推奨されるピン機能を開発者が識別するのに役立ちます。
        XIAO ESP32-C3ピン配置説明の終わり。
        -->
 </tr>
</table>

### 電源ピン

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電源）を配置する必要があります。アノードをバッテリー側、カソードを5Vピン側に接続してください。
- 3V3 - これはオンボードレギュレータからの安定化出力です。700mAまで供給可能です
- GND - 電源/データ/信号グランド

### ストラッピングピン

ESP32C3のチップマニュアルによると、チップ内の**GPIO2**、**GPIO8**、**GPIO9**はストラッピングピンです。これらのピンのハイレベルとローレベルの設定により、チップが異なるブートモードに入る可能性があります。これらのピンを使用する際はこの点にご注意ください。そうでないと、XIAOへのプログラムのアップロードや実行が常にできなくなる可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## はじめに

まず、XIAO ESP32C3をコンピュータに接続し、ボードにLEDを接続して、Arduino IDEから簡単なコードをアップロードし、接続したLEDを点滅させることでボードが正常に動作しているかを確認します。

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

:::tip

一部のUSBケーブルは電源供給のみでデータ転送ができません。USBケーブルをお持ちでない場合、またはお使いのUSBケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。

:::

- **ステップ1.** USB Type-CケーブルでXIAO ESP32C3をコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **ステップ2.** 以下のようにD10ピンにLEDを接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意:** LEDを通る電流を制限し、LEDを焼損させる可能性のある過電流を防ぐため、必ず抵抗（約150Ω）を直列に接続してください

### ソフトウェアの準備

- **ステップ1.** お使いのオペレーティングシステムに応じて、Arduino IDEの最新版をダウンロードしてインストールします

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **ステップ2.** Arduinoアプリケーションを起動します

- **ステップ3.** Arduino IDEにESP32ボードパッケージを追加します

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスにキーワード"**esp32**"を入力し、**esp32**の最新版を選択してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **ステップ4.** ボードとポートを選択します

**ボード**

**Tools > Board > ESP32 Arduino**に移動し、"**XIAO_ESP32C3**"を選択します。ボードリストは少し長いので、下までスクロールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**ポート**

**Tools > Port**に移動し、接続されたXIAO ESP32C3のシリアルポート名を選択します。これは通常COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。

### 最初のBlinkプログラムを実行する

- **ステップ1.** 以下のコードをArduino IDEにコピーします

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

**ステップ 2.** **Upload** ボタンをクリックしてコードをボードにアップロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

アップロードが完了すると、接続されたLEDが1秒間隔で点滅するのが確認できます。これは接続が成功したことを意味し、XIAO ESP32C3でより多くのプロジェクトを探索できるようになりました！

## バッテリーの使用

XIAO ESP32C3は3.7Vリチウムバッテリーを電源入力として使用することができます。配線方法については以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
はんだ付けの際は、正極と負極をショートさせてバッテリーや機器を焼損させないよう十分注意してください。
:::

**バッテリー使用に関する注意事項：**

1. 仕様に適合した認定バッテリーを使用してください。
2. バッテリー使用中でもXIAOをデータケーブルでコンピューターデバイスに接続できます。XIAOには回路保護チップが内蔵されているため安全です。
3. XIAO ESP32C3はバッテリー駆動時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO ESP32C3が動作しているかどうかを判断せず、プログラムによって合理的に判断してください。
4. 申し訳ございませんが、現在ソフトウェアを通じてバッテリー残量を確認する方法はありません（利用可能なチップピンがないため）。定期的にバッテリーを充電するか、マルチメーターでバッテリーレベルを確認する必要があります。

### バッテリー電圧の確認

ESP32C3のピン数の制限により、エンジニアはXIAO ESP32C3が他のXIAOシリーズと同じ数のGPIOを確保するために、バッテリーの電圧測定用に追加のピンを割り当てることができませんでした。

しかし、バッテリー電圧測定用に別のピンを使用したい場合は、[msfujino](https://forum.seeedstudio.com/u/msfujino)の天才的な操作を参考にすることができます。XIAO ESP32C3のために共有されたすべての経験と努力に対して、[msfujino](https://forum.seeedstudio.com/u/msfujino)に特別な感謝を表したいと思います。

基本的な動作原理は：バッテリー電圧を200kで1/2に分圧してA0ポートに接続し、電圧を監視できるようにすることです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

データシートによると、公称2500mVフルスケールAD変換ですが、チップごとに大きなばらつきがあり、実際には±10%です。私のチップは2700mVフルスケールでした。

幸い、各チップの校正補正値はヒューズエリアに書き込まれており、`analogReadMilliVolts()`関数を使用することで、特別な処理をすることなく補正された電圧値を読み取ることができます。

AD変換の結果とマルチメーターで測定した電圧は、約5mVの誤差でよく一致しており、実用上問題ありません。

また、特に通信中にスパイク状のエラーが発生するため、これを除去するために16回平均化する必要がありました。

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
上記はSeeed Studioフォーラムユーザー**msfujino**によるもので、元の投稿は以下にあります：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。
上記に基づいてバッテリー電圧を測定する前に、優れた実践スキルとより良いはんだ付けスキルを身に付け、バッテリーのショートなどの危険な行為に注意することをお勧めします。
:::

## ディープスリープモードとウェイクアップ

XIAO ESP32C3は、ディープスリープモードとウェイクアップ機能をサポートするように設計されています。これら2つの機能の使用について、以下の使用例を提供します。

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

XIAOが十分に早くシリアルモニターをオンにしてディープスリープに入る前であれば、以下に示すようなメッセージ出力を見ることができます。これはXIAOが現在「スリープ状態」であることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
ディープスリープモードに入った後、XIAOのポートは消失し、再びポート番号を確認するにはウェイクアップする必要があります！
:::

プログラムでは、**D1**のローレベルを使用してウェイクアップしています。これは、ピンD1にボタンを接続し、ボタンを押すとXIAOがウェイクアップすることを意味します。

:::caution
現在、XIAO ESP32C3はGPIOウェイクアップのみをサポートしており、ウェイクアップをサポートするピンはD0〜D3のみです。このプログラムは他のピンでは動作しない可能性があります。
:::

## トラブルシューティング

### Q1: Arduino IDEでボードにコードをアップロードする際にスタックする

まず、ボードがPCに接続されている状態で**RESETボタン**を一度クリックしてボードをリセットしてみてください。それでも動作しない場合は、**BOOTボタン**を押し続け、**BOOT**ボタンを押し続けながらボードをPCに接続し、その後ボタンを離して**ブートローダーモード**に入ってください。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されない

上記の**Q1**と同じ回答に従ってください。

### Q3: ファクトリーファームウェアでブートローダーを再フラッシュしたい

**USB Type-C**経由でボードをPCに接続し、**ESP RF Test Tool**を使用してファクトリーファームウェアでブートローダーを再フラッシュできます。

- **ステップ1.** **BOOTボタン**を押し続け、XIAO ESP32C3をPCに接続して**ブートローダーモード**に入ります

- **ステップ2.** 接続後、BOOTボタンを離します

- **ステップ3.** [このページ](https://www.espressif.com/en/support/download/other-tools)にアクセスし、**ESP RF Test Tool and Test Guide**をダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ4.** **.zip**を展開し、`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual`に移動して**EspRFTestTool_v2.8_Manual.exe**を開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **ステップ5.** ChipTypeとして**ESP32C3**、COMポート、BaudRateとして**115200**を選択し、**open**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **ステップ6.** **Flash**を選択し、**Select Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **ステップ7.** [XIAO ESP32C3のファクトリーファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)をダウンロードして選択します。

- **ステップ8.** 最後に**Load Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

フラッシュが成功すると以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub リポジトリ

- [XIAO ESP32C3 MicroPython Repo](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## リソース

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 データシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3D モデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython ライブラリ](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Link]** [Platform IO for Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [First Look at the Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  XIAO ESP32C3 の優れた入門ガイドで、主要機能と基本的な使用方法をカバーしています。
- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) XIAO ボードでの Arduino と TinyML をマスターするための優れたガイドです。
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
