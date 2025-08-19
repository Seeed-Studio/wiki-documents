---
description: Seeed Studio XIAO ESP32C3 の使い方
title: Seeed Studio XIAO ESP32C3 の使い方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_Getting_Started
sku: 113991054
type: gettingstarted
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32C3 の使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## はじめに

**Seeed Studio XIAO ESP32C3** は、Espressif の **ESP32-C3** WiFi/Bluetooth デュアルモードチップをベースにした IoT ミニ開発ボードで、効率的なアーキテクチャにより強力な計算性能を提供する **32ビット RISC-V CPU** を搭載しています。優れた無線周波数性能を持ち、**IEEE 802.11 b/g/n WiFi** および **Bluetooth 5 (BLE)** プロトコルをサポートしています。このボードには外部アンテナが付属しており、無線アプリケーションの信号強度を向上させます。また、**小型で洗練されたフォームファクター**と**片面実装可能なデザイン**を兼ね備えています。豊富なインターフェースを備え、**11個のデジタル I/O** は **PWM ピン**として、**3個のアナログ I/O** は **ADC ピン**として使用できます。**UART、I2C、SPI** などの4つのシリアルインターフェースをサポートしています。さらに、小型の**リセットボタン**と**ブートローダーモードボタン**がボード上にあります。XIAO ESP32C3 は、[Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) および [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-Expansion-Board) と完全互換性があります。ただし、Seeeduino XIAO Expansion board では、ボード上の SWD スプリングコンタクトは互換性がありません。

上記の特徴を考慮すると、XIAO ESP32C3 は**高性能、低消費電力、コスト効率の高い IoT ミニ開発ボード**として位置付けられ、**低消費電力 IoT アプリケーションや無線ウェアラブルアプリケーション**に適しています。

この Wiki では、XIAO ESP32C3 をすぐに使い始める方法を紹介します！

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
            <td>ESP32-C3 32ビット RISC-V @160MHz</td>
            <td>SAMD21 M0+@48MHz</td>
            <td>RP2040 デュアルコア M0+@133MHz</td>
            <td>nRF52840 M4F@64MHz</td>
            <td>nRF52840 M4F@64MHz</td>
        </tr>
        <tr>
            <th>無線接続</th>
            <td>WiFi および Bluetooth 5 (BLE)</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
        </tr>
        <tr>
            <th>メモリ</th>
            <td>400KB SRAM、4MB オンボード Flash</td>
            <td>32KB SRAM 256KB FLASH</td>
            <td>264KB SRAM 2MB オンボード Flash</td>
            <td>256KB RAM、1MB Flash、2MB オンボード Flash</td>
            <td>256KB RAM、1MB Flash、2MB オンボード Flash</td>
        </tr>
        <tr>
            <th>内蔵センサー</th>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>6 DOF IMU (LSM6DS3TR-C)、PDM マイク</td>
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
            <td>リセット/ブートボタン</td>
            <td>N/A</td>
            <td>リセット/ブートボタン</td>
            <td>リセットボタン</td>
            <td>リセットボタン</td>
        </tr>
        <tr>
            <th>オンボード LED</th>
            <td>充電 LED</td>
            <td>N/A</td>
            <td>フルカラー RGB/3-in-one LED</td>
            <td>3-in-one LED/充電 LED</td>
            <td>3-in-one LED/充電 LED</td>
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
            <td>Arduino/MicroPython</td>
            <td>Arduino/CircuitPython</td>
            <td colspan="3" align="center">Arduino/MicroPython/CircuitPython</td>
        </tr>
    </tbody>
</table>


### 特徴

- **強力な CPU:** ESP32-C3、32ビット RISC-V シングルコアプロセッサ、最大 160 MHz で動作
- **完全な Wi-Fi サブシステム:** IEEE 802.11b/g/n プロトコルに準拠し、ステーションモード、SoftAP モード、SoftAP + ステーションモード、プロミスキャスモードをサポート
- **Bluetooth LE サブシステム:** Bluetooth 5 および Bluetooth メッシュの機能をサポート
- **超低消費電力:** ディープスリープ時の消費電力は約 43μA
- **優れた RF 性能:** 外部 RF アンテナを含む
- **バッテリー充電チップ:** リチウムバッテリーの充放電管理をサポート
- **豊富なオンチップリソース:** 400KB の SRAM、および 4MB のオンボードフラッシュメモリ
- **超小型サイズ:** 親指サイズ (21x17.8mm)、XIAO シリーズのクラシックなフォームファクターでウェアラブルデバイスや小型プロジェクトに最適
- **信頼性の高いセキュリティ機能:** AES-128/256、ハッシュ、RSA、HMAC、デジタル署名、セキュアブートをサポートする暗号化ハードウェアアクセラレータ
- **豊富なインターフェース:** 1xI2C、1xSPI、2xUART、11xGPIO(PWM)、4xADC、1xJTAG ボンディングパッドインターフェース
- 片面部品、表面実装デザイン

## ハードウェア概要

> *A3(GP105) - ADC2を使用しますが、誤ったサンプリング信号により動作しなくなる可能性があります。信頼性の高いアナログ読み取りを行うには、ADC1(A0/A1/A2)を使用してください。詳細はESP32-C3のデータシートを参照してください。

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
	</tr>
</table>

### 電源ピン

- 5V - これはUSBポートからの5V出力です。このピンを電圧入力として使用することもできますが、外部電源とこのピンの間にダイオード（ショットキー、信号、電力）を挿入し、アノードをバッテリー側、カソードを5Vピン側に接続する必要があります。
- 3V3 - これはオンボードレギュレーターからの安定化出力です。700mAを引き出すことができます。
- GND - 電源/データ/信号のグランド

### ストラッピングピン

ESP32C3のチップマニュアルによると、チップ内の**GPIO2**、**GPIO8**、および**GPIO9**はストラッピングピンです。これらのピンの高低レベル設定により、チップが異なるブートモードに入る可能性があります。この点に注意しないと、XIAOがプログラムのアップロードや実行を常に妨げる可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## はじめに

まず、XIAO ESP32C3をコンピュータに接続し、LEDをボードに接続して、Arduino IDEから簡単なコードをアップロードします。これにより、ボードが正常に動作しているかどうかを確認するために接続されたLEDを点滅させます。

### ハードウェア準備

以下を準備してください：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip

一部のUSBケーブルは電力供給のみ可能で、データ転送ができません。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)を確認してください。

:::

- **ステップ 1.** USB Type-Cケーブルを使用してXIAO ESP32C3をコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **ステップ 2.** LEDをD10ピンに以下のように接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意:** LEDに流れる電流を制限し、過電流によるLEDの焼損を防ぐために、約150Ωの抵抗を直列に接続してください。

### ソフトウェア準備

- **ステップ 1.** オペレーティングシステムに応じて、最新バージョンのArduino IDEをダウンロードしてインストールします。

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **ステップ 2.** Arduinoアプリケーションを起動します。

- **ステップ 3.** Arduino IDEにESP32ボードパッケージを追加します。

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：
`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスにキーワード"**esp32**"を入力して、最新バージョンの**esp32**を選択し、インストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **ステップ 4.** ボードとポートを選択します。

**ボード**

**Tools > Board > ESP32 Arduino**に移動し、"**XIAO_ESP32C3**"を選択します。ボードリストは少し長いので、下までスクロールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**ポート**

**Tools > Port**に移動し、接続されたXIAO ESP32C3のシリアルポート名を選択します。通常、これはCOM3以上になります（**COM1**および**COM2**は通常ハードウェアシリアルポート用に予約されています）。

### 最初のBlinkプログラムを実行する

- **ステップ 1.** 以下のコードをArduino IDEにコピーします。

`D10`が上記の図のようにLEDに接続されていることを確認してください。

```cpp

// 記事内のピン図に基づいてLEDを定義
const int led = D10; // XIAO ESP32C3にはLED_BUILTINはありません。

void setup() {
  // デジタルピンledを出力として初期化
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // LEDを点灯
  delay(1000);               // 1秒待機
  digitalWrite(led, LOW);    // LEDを消灯
  delay(1000);               // 1秒待機
}
```

- **ステップ 2.** **Upload**ボタンをクリックしてコードをボードにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

アップロードが完了すると、接続されたLEDが1秒間隔で点滅するのが確認できます。これで接続が成功したことを意味し、XIAO ESP32C3を使ったさらなるプロジェクトを探索する準備が整いました！

## バッテリー使用

XIAO ESP32C3は、3.7Vリチウムバッテリーを電源入力として使用することが可能です。配線方法については以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
はんだ付けの際に、正極と負極を短絡させてバッテリーや機器を損傷しないよう注意してください。
:::

**バッテリー使用に関する注意事項:**

1. 規格に適合した認定バッテリーを使用してください。
2. バッテリー使用中でもXIAOをデータケーブルを介してコンピュータデバイスに接続することができます。XIAOには内蔵の回路保護チップが搭載されており、安全です。
3. バッテリー駆動時にはXIAO ESP32C3のLEDが点灯しません（特定のプログラムを書き込んでいない限り）。LEDの状態でXIAO ESP32C3が動作しているかどうかを判断せず、プログラムによって合理的に判断してください。
4. 現時点ではソフトウェアを通じてバッテリー残量を確認する方法はありません（チップのピンが不足しているため）。定期的にバッテリーを充電するか、マルチメーターを使用してバッテリー残量を確認してください。

### バッテリー電圧の確認

ESP32C3のピン数の制約により、エンジニアはバッテリーの電圧測定用にピンを割り当てることができませんでした。これは、XIAO ESP32C3が他のXIAOシリーズと同じ数のGPIOを利用可能にするためです。

しかし、バッテリー電圧測定用に別のピンを使用したい場合は、[msfujino](https://forum.seeedstudio.com/u/msfujino)の天才的な操作を参考にすることができます。また、XIAO ESP32C3に関する経験と努力を共有してくださった[msfujino](https://forum.seeedstudio.com/u/msfujino)に特別な感謝を申し上げます。

基本的な操作のアイデアは以下の通りです: バッテリー電圧を200kで1/2に分圧し、A0ポートに接続することで電圧を監視できるようにします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

データシートによると、名目上は2500mVがフルスケールAD変換ですが、チップごとに±10%の大きなばらつきがあります。私のチップではフルスケールが2700mVでした。

幸いにも、各チップの校正補正値はフューズ領域に書き込まれており、`analogReadMilliVolts()`関数を使用することで、特別な操作をせずに補正された電圧値を読み取ることができます。

AD変換の結果とマルチメーターで測定した電圧は、約5mVの誤差で一致しており、実用上問題ありません。

さらに、特に通信中にはスパイクのような誤差が発生し、それを除去するために16回平均化する必要がありました。

以下はバッテリー電圧をテストする手順です。

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // 補正付きADC   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // 減衰比1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
上記はSeeed Studioフォーラムユーザー**msfujino**によるもので、元の投稿は以下にあります:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。
バッテリー電圧を測定する際は、十分な実践スキルと優れたはんだ付けスキルを持っていることを推奨します。また、バッテリーの短絡などの危険な行為には十分注意してください。
:::

## ディープスリープモードとウェイクアップ

XIAO ESP32C3は、ディープスリープモードとウェイクアップ機能をサポートするように設計されています。これら2つの機能を使用するために、以下の使用例を提供します。

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 16進数で2^33

RTC_DATA_ATTR int bootCount = 0;

/*
ESP32がスリープから目覚めた理由を出力するメソッド
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("ULPプログラムによるウェイクアップ"); break;
    default : Serial.printf("ディープスリープによるウェイクアップではありません: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); // シリアルモニターを開くための時間を確保

  // 起動回数をインクリメントして、毎回再起動時に出力
  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));

  // ESP32のウェイクアップ理由を出力
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  // 今すぐスリープに入る
  Serial.println("今からスリープに入ります");
  esp_deep_sleep_start();
  Serial.println("このメッセージは決して表示されません");
}

void loop(){
  // この関数は呼び出されません
}
```

シリアルモニターをXIAOがディープスリープに入る前に素早くオンにすると、以下のようなメッセージが表示されます。これはXIAOが「スリープ状態」であることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
ディープスリープモードに入ると、XIAOのポートが消えます。ポート番号を再び確認するには、ウェイクアップする必要があります！
:::

このプログラムでは、**D1**の低レベル信号を使用してウェイクアップしています。つまり、D1ピンにボタンを接続し、ボタンを押すことでXIAOがウェイクアップします。

:::caution
現在、XIAO ESP32C3はGPIOウェイクアップのみをサポートしており、ウェイクアップをサポートするピンはD0～D3のみです。他のピンではこのプログラムは動作しない可能性があります。
:::


## トラブルシューティング

### Q1: Arduino IDEがコードをボードにアップロードする際にフリーズする

まず、ボードをPCに接続した状態で**リセットボタン**を一度クリックしてリセットを試してください。それでも解決しない場合は、**BOOTボタン**を押しながらボードをPCに接続し、**BOOTボタン**を離して**ブートローダーモード**に入ります。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されない

上記の**Q1**と同じ手順を試してください。

### Q3: ブートローダーを工場出荷時のファームウェアで再フラッシュしたい

ボードを**USB Type-C**でPCに接続し、**ESP RF Test Tool**を使用して工場出荷時のファームウェアでブートローダーを再フラッシュできます。

- **ステップ1.** **BOOTボタン**を押しながらXIAO ESP32C3をPCに接続して**ブートローダーモード**に入ります

- **ステップ2.** 接続後、BOOTボタンを離します

- **ステップ3.** [このページ](https://www.espressif.com/en/support/download/other-tools)にアクセスし、**ESP RF Test Tool and Test Guide**をダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ4.** **.zip**を解凍し、`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual`に移動して**EspRFTestTool_v2.8_Manual.exe**を開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **ステップ5.** **ESP32C3**をChipTypeとして選択し、COMポート、**115200**をBaudRateとして選択し、**open**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **ステップ6.** **Flash**を選択し、**Select Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **ステップ7.** [XIAO ESP32C3の工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)をダウンロードして選択します。

- **ステップ8.** 最後に**Load Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

フラッシュが成功すると以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub リポジトリ

- [XIAO ESP32C3 MicroPython リポジトリ](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## リソース

<!-- - **[PDF]** [Seeed Studio XIAO ステップバイステップコース](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 データシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 DXF形式寸法図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython ライブラリ](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Link]** [Seeed Studio XIAO ESP32 用 Platform IO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [Seeed Studio XIAO ESP32C3 初見](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html) XIAO ESP32C3 の概要、主要な機能と基本的な使用方法をカバーした素晴らしい紹介。
- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) XIAO ボードで Arduino と TinyML を習得するための優れたガイド。
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>