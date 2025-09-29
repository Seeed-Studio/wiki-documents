---
description: Seeed Studio XIAO ESP32C6の使用開始ガイド。
title: Seeed Studio XIAO ESP32C6の使用開始
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /ja/xiao_esp32c6_getting_started
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C6の使用開始

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## はじめに

Seeed Studio XIAO ESP32C6 は、高度に統合された [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) を搭載し、**2つの32ビットRISC-Vプロセッサ**上に構築されています。高性能（HP）プロセッサは**最大160MHzで動作**し、低消費電力（LP）32ビットRISC-Vプロセッサは最大20MHzでクロック動作可能です。チップには**512KBのSRAMと4MBのFlash**が搭載されており、より多くのプログラミング領域を提供し、IoT制御シナリオにより多くの可能性をもたらします。

XIAO ESP32C6 は**強化されたワイヤレス接続により、Matterにネイティブ対応**しています。ワイヤレススタックは**2.4GHz WiFi 6、Bluetooth® 5.3、Zigbee、およびThread（802.15.4）**をサポートしています。Threadに対応した初のXIAOメンバーとして、Matter準拠プロジェクトの構築に最適であり、スマートホームでの相互運用性を実現します。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 仕様

<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">製品</th>
            <th><Highlight color="#92c52a">XIAO ESP32C6</Highlight></th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">プロセッサ</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>2つの32ビットRISC-Vプロセッサ、高性能プロセッサは最大160MHz、低消費電力プロセッサは最大20MHzで動作</td>
            <td>最大160MHzで動作する4段パイプラインを持つRISC-Vシングルコア32ビットチッププロセッサ</td>
            <td>最大240MHzで動作するXtensa LX7デュアルコア32ビットプロセッサ</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">ワイヤレス</th>
            <td>完全な2.4GHz <strong>Wi-Fi 6</strong> サブシステム</td>
            <td colspan="2">完全な2.4GHz Wi-Fiサブシステム</td>
        </tr>
        <tr>
            <td>BLE: Bluetooth 5.0、Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0、Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0、Bluetooth Mesh</td>
        </tr>
        <tr>
            <td><strong>Zigbee、Thread、IEEE 802.15.4</strong></td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1" >オンチップメモリ</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2" >インターフェース</th>
            <td>1x UART、1x LP_UART、1x IIC、1x LP_IIC、1x SPI、11x GPIO(PWM)、7x ADC、1xSDIO 2.0 Slave</td>
            <td>1x UART、1x IIC、1x SPI、11x GPIO(PWM)、4x ADC</td>
            <td>1x UART、1x IIC、1x IIS、1x SPI、11x GPIO(PWM)、9x ADC、1x User LED、1x Charge LED</td>
        </tr>
        <tr>
            <td colspan="3">1x リセットボタン、1x ブートボタン</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">寸法</th>
            <td colspan="3">21 x 17.8 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">電源</th>
            <th colspan="1">入力電圧</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>回路動作電圧（動作準備完了）</th>
            <td colspan="2">USB:5V@9mA<br></br>BAT:3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>バッテリー充電電流</th>
            <td>100mA</td>
            <td>350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">消費電力モデル（供給電力: 3.8V）</th>
            <th>モデムスリープモデル</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th> ライトスリープモデル</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th> ディープスリープモデル</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">動作温度</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

### 機能

- **強化された接続性**: ***2.4*** GHz Wi-Fi 6 (802.11ax)、Bluetooth 5(LE)、およびIEEE 802.15.4無線接続を統合し、**Thread**および**Zigbee**プロトコルの適用を可能にします。
- **Matterネイティブ**: Matter準拠のスマートホームプロジェクトの構築をサポートし、異なるスマートデバイス間の相互運用性を確保します。
- **チップ上でのセキュリティ暗号化**: ESP32-C6を利用してセキュアブート、暗号化、および信頼実行環境（TEE）機能を提供し、スマートホームプロジェクトのセキュリティを強化します。
- **優れたRF性能**: 最大*80m*のBLE/Wi-Fi範囲を持つオンボードアンテナを搭載し、外部UFLアンテナを接続するためのインターフェースを提供し、信頼性の高い接続を確保します。
- **電力消費の活用**: *15* μAという低消費電力のディープスリープモードを含む4つの動作モードを提供し、リチウムバッテリー充電管理をサポートします。
- **デュアルRISC-Vプロセッサ**: 2つの32ビットRISC-Vプロセッサを搭載し、高性能プロセッサは最大160MHz、低電力プロセッサは最大*20 MHz*で動作可能です。
- **クラシックなXIAOデザイン**: 21 x 17.8mmの親指サイズのフォームファクターと片面実装設計を維持し、ウェアラブルデバイスなどのスペースが限られたプロジェクトに最適です。

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO ESP32C6 表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RF スイッチ

**RF スイッチ**機能により、`GPIO14`を設定することで内蔵セラミックアンテナと外部アンテナを切り替えることができます。この機能を有効にするには、*まず`GPIO3`をローレベルに設定する必要があります*。これによりRFスイッチ制御が有効になります。

- **GPIO14 ローレベル（デフォルト設定）**: デバイスは内蔵セラミックアンテナを使用します。
- **GPIO14 ハイレベル**: デバイスは外部アンテナに切り替わります。

デフォルトでは、`GPIO14`はローレベルに設定されており、内蔵アンテナが有効になっています。外部アンテナを使用するには、`GPIO14`をハイレベルに設定してください。外部アンテナを有効にするための`GPIO3`と`GPIO14`の設定に関するガイダンスについては、以下のサンプルコードを参照してください：

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // Activate RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Use external antenna
}
```

:::

## はじめに

XIAO ESP32C6 をより早く使い始められるように、以下のハードウェアとソフトウェアの準備をお読みになり、XIAO の準備を行ってください。

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部の USB ケーブルは電源供給のみ可能で、データ転送ができません。USB ケーブルをお持ちでない場合や、お使いの USB ケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) をご確認ください。
:::

#### ヘッダーのはんだ付け

XIAO ESP32C6 はデフォルトでピンヘッダーなしで出荷されるため、独自にピンヘッダーを準備し、XIAO の対応するピンにはんだ付けして、拡張ボードやセンサーに接続できるようにする必要があります。

XIAO ESP32C6 は小型サイズのため、ヘッダーをはんだ付けする際は注意深く行い、異なるピン同士をくっつけたり、シールドや他の部品にはんだを付着させたりしないでください。そうしないと、XIAO がショートしたり正常に動作しなくなる可能性があり、これによって生じる結果はユーザーの責任となります。

#### BootLoader モード

間違ったプログラムを使用して XIAO がポートを失ったり、正常に動作しなくなったりすることがあります。具体的な症状は以下の通りです：

- コンピュータに接続されているが、XIAO のポート番号が見つからない。
- コンピュータに接続されてポート番号は表示されるが、プログラムのアップロードに失敗する。

上記の2つの状況に遭遇した場合、XIAO を BootLoader モードにすることで、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は以下の通りです：

- **ステップ 1**. XIAO ESP32C6 の BOOT ボタンを離さずに押し続けます。
- **ステップ 2**. BOOT ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、BOOT ボタンを離します。
- **ステップ 3**. **Blink** プログラムをアップロードして、XIAO ESP32C6 の動作を確認します。

#### リセット

プログラムが異常に動作している場合、電源投入時に一度 Reset を押すことで、XIAO にアップロードされたプログラムを再実行させることができます。

電源投入時に BOOT キーを押し続けてから Reset キーを一度押すことでも、BootLoader モードに入ることができます。

### ソフトウェアの準備

XIAO ESP32C6 の推奨プログラミングツールは Arduino IDE のため、ソフトウェア準備の一環として Arduino のインストールを完了する必要があります。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。

また、XIAO ESP32C6 のオンボードパッケージには少なくともバージョン **2.0.8** が必要です。

:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDE の安定版をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **ステップ 2.** Arduino アプリケーションを起動します。
- **[ステップ 3](#add-board).** XIAO ESP32C6 オンボードパッケージを Arduino IDE に追加し、`OK` をクリックします。
- **ステップ 4.** Arduino IDE を閉じて再度開きます。

#### XIAO-C6 ボードの追加 {#add-board}

XIAO ESP32C6 ボードをインストールするには、以下の手順に従ってください：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 上記のボードマネージャーURLをArduino IDEの設定に追加してください。これは[Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide)から取得されています。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO ESP32C6ボードパッケージをダウンロードしてください。

:::note
esp32ボードのバージョンが`3.0.0`より大きい場合のみ利用可能です。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. `XIAO_ESP32C6`バリアントを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

これでコーディングを楽しんでください ✨。

#### 最初のBlinkプログラムを実行する

- **ステップ1.** Arduinoアプリケーションを起動してください。

- **ステップ2.** **File > Examples > 01.Basics > Blink**に移動し、プログラムを開いてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ3.** ボードモデルを**XIAO ESP32C6**に選択し、正しいポート番号を選択してプログラムをアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32C6の右側にあるオレンジ色のLEDが点滅していることを確認できます。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## バッテリー使用

XIAO ESP32C6 シリーズには内蔵電源管理チップが搭載されており、バッテリーで独立して電源供給したり、USBポート経由でバッテリーを充電したりできます。

XIAOにバッテリーを接続する場合は、認定された充電式3.7Vリチウムバッテリーの使用を推奨します。バッテリーをはんだ付けする際は、正極と負極の端子を慎重に区別してください。負極パッドは「D8」のシルクスクリーン印刷の近くの左側に、正極パッドは「D5」のシルクスクリーン印刷の近くの右側に配置する必要があります。

:::caution
バッテリー電源を使用する場合、5Vピンには電圧が存在しません。
:::

:::tip 赤色インジケーターライト

XIAO ESP32C6 には、[XIAO ESP32S3](/ja/xiao_esp32s3_getting_started/#battery-usage)と同様に、バッテリー充電用の赤色インジケーターライトがあります：

XIAO ESP32C6 の赤色ライトの動作は以下の通りです：

- バッテリーが接続されていない場合：
  - Type-Cケーブルが接続されると赤色ライトが点灯し、30秒後に消灯します。
- バッテリーが接続され、Type-Cケーブルが充電のために接続されている場合：
  - 赤色ライトが点滅します。
- Type-C接続でバッテリーが完全に充電された場合：
  - 赤色ライトが消灯します。

:::

## バッテリー電圧の読み取り

XIAO ESP32C6 でバッテリー電圧を監視するには、[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)と同様に、200kΩ抵抗を1:2構成ではんだ付けする必要があります。この設定により電圧が半分に減少し、A0アナログポート経由で安全に監視できます。

### サンプルコード

以下のコードは、A0ポートでADCを初期化し、16回の読み取りを平均してバッテリー電圧を計算し、分圧器の1:2減衰比を調整します。

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configure A0 as ADC input
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

このコードは、ADCから16回の測定を行い、それらを平均化し、電圧分割器の1:2の比率を補正して、バッテリー電圧を3桁の精度でボルト単位で出力します。

## ディープスリープモードとウェイクアップ

XIAO ESP32C6は完全なディープスリープモードとウェイクアップ機能を備えています。ここでは、ESPが提供するより一般的な2つの例を紹介します。

### デモ1：外部ウェイクアップによるディープスリープ

このコードは、外部トリガーをウェイクアップソースとしてディープスリープを使用する方法と、再起動時にデータを使用するためにRTCメモリにデータを保存する方法を示しています。

```cpp
/*
Hardware Connections
======================
Push Button to GPIO 0 pulled down with a 10K Ohm
resistor

NOTE:
======
Bit mask of GPIO numbers which will cause wakeup. Only GPIOs
which have RTC functionality can be used in this bit map.
For different SoCs, the related GPIOs are:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 bitmask for ext1

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

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1, ext0 
  don't support ESP32C6 so we use ext1.
  */

  //If you were to use ext1, you would use it like
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

### Demo2: タイマーウェイクアップによるディープスリープ

ESP32は効果的な省電力のためのディープスリープモードを提供しており、IoTアプリケーションにとって電力は重要な要素です。このモードでは、CPU、RAMの大部分、およびAPB_CLKからクロック供給されるすべてのデジタル周辺機器の電源が切断されます。チップの中で電源を供給し続けることができる部分は、RTCコントローラー、RTC周辺機器、およびRTCメモリのみです。

このコードは、タイマーでウェイクアップする最も基本的なディープスリープと、再起動時に使用するためにRTCメモリにデータを保存する方法を示しています。

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

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

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::tip
ディープスリープモードとウェイクアップ機能をより多く学んで使用したい場合は、Arduino IDEでESPがチップ用に公式に書いたより多くのサンプルプログラムを見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## リソース

- **[PDF]** [ESP32C6 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C6 KiCADライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Seeed Studio XIAO ESP32C6 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32C6 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C6 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32C6 Stepファイル](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
