---
description: XIAO ESP32 Sense 異なるスリープモードの消費電力の使用
title: XIAO ESP32S3 Sense スリープモード
keywords:
  - Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /XIAO_ESP32S3_Consumption
last_update:
  date: 08/27/2024
  author: Jason
createdAt: '2025-05-27'
updatedAt: '2025-09-24'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Consumption/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/background02.png" style={{width:800, height:'auto'}}/></div>

ここでは、これらの低消費電力スリープモードの使用を実演するためのいくつかの簡単な例を紹介します。すべてのESP32ボードは多機能であり、この文脈で使用している開発ボードはXIAO ESP32S3 Senseです。

## ハードウェア概要

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Deep-Sleep

### 概要

Deep-Sleepモードでは、ESP32はCPU、RAMの大部分、およびAPB_CLKでクロックされるすべてのデジタル周辺機器の電源を切ります。電源が供給されたままの部品は以下のみです：

- RTCコントローラー
- ULPコプロセッサー
- RTC FASTメモリ
- RTC SLOWメモリ

### ウェイクアップ方法

- **タイマーウェイクアップ：**ESP32はタイマーを設定することで、指定された時間後に自動的にウェイクアップできます。

- **タッチパッド割り込みウェイクアップ：**タッチパッドの動作によってデバイスをウェイクアップでき、ユーザーインタラクションが必要なアプリケーションに適しています。

- **外部ウェイクアップ：**ESP32は外部信号（ボタン押下など）によってウェイクアップでき、低消費電力アプリケーションに最適です。

- **ULPコプロセッサーアクティビティウェイクアップ：**ULPコプロセッサーは独立して動作し、特定の条件を監視してメインCPUをウェイクアップして電力を節約できます。

- **GPIOウェイクアップ：**GPIOピンの状態変化（HighまたはLow）によってデバイスをウェイクアップでき、様々なセンサーや周辺機器に柔軟性を提供します。

以下に、XIAO ESP32 S3 SenseでDeepSleepモードを使用する3つの簡単な例を示します。

### コード実装

<Tabs>
<TabItem  value="DeepSleepExample1" label="TimerWakeUP" default>

```cpp

#define uS_TO_S_FACTOR 1000000ULL 
#define TIME_TO_SLEEP  5       

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000);  


  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));


  print_wakeup_reason();


  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

  Serial.println("Going to sleep now");
  Serial.flush();
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop() {

}
```

### 詳細な注記

```cpp
#define uS_TO_S_FACTOR 1000000ULL 
```

- マイクロ秒を秒に変換するマクロを定義します。1000000ULLはマイクロ秒を秒に変換するために使用される係数です。

```cpp
#define TIME_TO_SLEEP  5     
```

- ESP32がスリープする時間を設定するマクロを定義します。この場合は5秒です。

```cpp
RTC_DATA_ATTR int bootCount = 0;
```

- 整数変数 `bootCount` を `RTC_DATA_ATTR` 属性で宣言します。これにより、ディープスリープ中でもその値を保持できます。

```cpp
void print_wakeup_reason() {
```

- ESP32が起動した理由を出力する`print_wakeup_reason()`という名前の関数を定義します。

```cpp
esp_sleep_wakeup_cause_t wakeup_reason;
```

- ウェイクアップイベントの原因を格納するために、`esp_sleep_wakeup_cause_t` 型の変数 `wakeup_reason` を宣言します。

```cpp
wakeup_reason = esp_sleep_get_wakeup_cause();
```

- 関数 `esp_sleep_get_wakeup_cause()` を呼び出してウェイクアップの理由を取得し、`wakeup_reason` 変数に代入します。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
}
```

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（リアルタイムクロック）I/O用に設定されたGPIOピンで検出された外部信号により、ESP32がウェイクアップしたことを示します。これは通常、ボタンやセンサーがトリガーされたときのスリープからのウェイクアップに使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : これは、RTCコントローラーによって管理されるGPIOピンの外部信号によってウェイクアップが引き起こされたことを示します。EXT0とは異なり、EXT1は複数のピンを処理でき、指定されたピンのいずれかが状態を変更したとき（例：ローまたはハイになる）にウェイクアップできます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、ESP32が事前定義されたタイマー期間後にウェイクアップしたことを意味します。これは、ユーザーの操作を必要とせずに定期的なタスクを実行する必要があるアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : これは、タッチパッドイベントによりESP32がウェイクアップしたことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : このウェイクアップ理由は、ULP（超低消費電力）プログラムによってウェイクアップがトリガーされたことを意味します。ULPはメインCPUがディープスリープ中でも動作でき、特定の条件が満たされたときにESP32をウェイクアップできるため、最小限のバッテリー消費で低消費電力動作が可能になります。

```cpp
++bootCount;
```

- デバイスが再起動するたびに起動回数をインクリメントして出力します。

```cpp
print_wakeup_reason();
```

- ESP32のウェイクアップ理由を出力します。

```cpp
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

Serial.println("Going to sleep now");
Serial.flush();
esp_deep_sleep_start();
Serial.println("This will never be printed");
```

- `esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);`指定した時間後にESP32をウェイクアップするタイマーを有効にします。
- `Serial.flush();`スリープに入る前にすべてのシリアルデータが送信されることを確認します。
- `esp_deep_sleep_start();`ESP32をディープスリープモードに移行させます。

</TabItem>

<TabItem value="DeepSleepExample2" label="ExternalWakeUp" default>

```cpp

#include "driver/rtc_io.h"

#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO) 
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33   
RTC_DATA_ATTR int bootCount = 0;


void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  print_wakeup_reason();

#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1); 

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);

#else 
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO); 
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
#endif

  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop() {
}
```

### 詳細な注記

```cpp
#include "driver/rtc_io.h"
```

- RTC GPIO にアクセスするための RTC I/O ドライバーをインクルードします。

```cpp
#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)  
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33    
RTC_DATA_ATTR int bootCount = 0;
```

- 16進数での2 ^ GPIO_NUMBER
- 1 = EXT0ウェイクアップ、0 = EXT1ウェイクアップ
- RTC IOのみ許可 - ESP32ピンの例

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
}
```

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（リアルタイムクロック）I/O用に設定されたGPIOピンで検出された外部信号により、ESP32がウェイクアップしたことを示します。これは通常、ボタンやセンサーがトリガーされたときのスリープからのウェイクアップに使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : これは、RTCコントローラーによって管理されるGPIOピンの外部信号によってウェイクアップが引き起こされたことを示します。EXT0とは異なり、EXT1は複数のピンを処理でき、指定されたピンのいずれかが状態を変更したとき（例：ローまたはハイになる）にウェイクアップできます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、ESP32が事前定義されたタイマー期間後にウェイクアップしたことを意味します。これは、ユーザーの操作を必要とせずに定期的なタスクを実行する必要があるアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : これは、タッチパッドイベントによりESP32がウェイクアップしたことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : このウェイクアップ理由は、ULP（超低消費電力）プログラムによってウェイクアップがトリガーされたことを意味します。ULPはメインCPUがディープスリープ中でも動作でき、特定の条件が満たされたときにESP32をウェイクアップできるため、最小限のバッテリー消費で低消費電力動作が可能になります。

```cpp
  Serial.begin(115200);
  delay(1000);  
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
```

- `++bootCount;` 起動回数をインクリメントし、再起動のたびに出力する
- `print_wakeup_reason();` ESP32のウェイクアップ理由を出力する

```cpp
#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);
```

- `esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);`指定したGPIOピンがハイになったときにEXT0ウェイクアップを有効にします。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` ウェイクアップGPIOピンのプルアップ抵抗を無効にします。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` ウェイクアップGPIOピンのプルダウン抵抗を有効にします。

```cpp
#else  
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO);  
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
```

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`EXT1 WAKEUP
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33はHIGHでウェイクアップするためにGNDに接続されています
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`  HIGHでのウェイクアップを可能にするためにPULL_UPを無効にします

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`  ext1を使用する場合は、このように使用します
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33はHIGHでウェイクアップするためにGNDに接続されています
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` HIGHでのウェイクアップを可能にするためにPULL_UPを無効にします

```cpp
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
```

- `esp_deep_sleep_start();`ESP32をディープスリープモードに移行させます。

</TabItem>

<TabItem value="DeepSleepExample3" label="TouchWakeUp" default>

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif

RTC_DATA_ATTR int bootCount = 0;
touch_pad_t touchPin;

void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}

void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("Touch detected on GPIO 4"); break;
    case 1:  Serial.println("Touch detected on GPIO 0"); break;
    case 2:  Serial.println("Touch detected on GPIO 2"); break;
    case 3:  Serial.println("Touch detected on GPIO 15"); break;
    case 4:  Serial.println("Touch detected on GPIO 13"); break;
    case 5:  Serial.println("Touch detected on GPIO 12"); break;
    case 6:  Serial.println("Touch detected on GPIO 14"); break;
    case 7:  Serial.println("Touch detected on GPIO 27"); break;
    case 8:  Serial.println("Touch detected on GPIO 33"); break;
    case 9:  Serial.println("Touch detected on GPIO 32"); break;
    default: Serial.println("Wakeup not by touchpad"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("Touch detected on GPIO %d\n", touchPin);
  } else {
    Serial.println("Wakeup not by touchpad");
  }
#endif
}

void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop() {

}
```

### Detailed Notes

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif
```

- ターゲットがESP32かどうかをチェック
- ESP32のタッチ感度の閾値を定義
- ターゲットがESP32S2またはESP32S3かどうかをチェック
- ESP32S2/S3のより高いタッチ感度閾値を定義
- ターゲットが上記のいずれでもない場合
- 他のターゲット用のデフォルト閾値を定義

```cpp
RTC_DATA_ATTR int bootCount = 0; // Declare a variable to count boots, stored in RTC memory.
touch_pad_t touchPin; // Declare a variable to hold the touchpad pin status.

void print_wakeup_reason() { // Function to print the reason for waking up.
  esp_sleep_wakeup_cause_t wakeup_reason; // Variable to hold the wakeup reason.

  wakeup_reason = esp_sleep_get_wakeup_cause(); // Get the cause of the wakeup.
```

- `RTC_DATA_ATTR int bootCount = 0;`ブート回数をカウントする変数を宣言し、RTCメモリに保存します。
- `touch_pad_t touchPin;`タッチパッドピンの状態を保持する変数を宣言します。
- `void print_wakeup_reason()` ウェイクアップの理由を出力する関数。
- `esp_sleep_wakeup_cause_t wakeup_reason;`ウェイクアップの理由を保持する変数。
- `wakeup_reason = esp_sleep_get_wakeup_cause();` ウェイクアップの原因を取得します。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
}
```

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（リアルタイムクロック）I/O用に設定されたGPIOピンで検出された外部信号により、ESP32がウェイクアップしたことを示します。これは通常、ボタンやセンサーがトリガーされたときのスリープからのウェイクアップに使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : これは、RTCコントローラーによって管理されるGPIOピンの外部信号によってウェイクアップが引き起こされたことを示します。EXT0とは異なり、EXT1は複数のピンを処理でき、指定されたピンのいずれかが状態を変更したとき（例：ローまたはハイになる）にウェイクアップできます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、ESP32が事前定義されたタイマー期間後にウェイクアップしたことを意味します。これは、ユーザーの操作を必要とせずに定期的なタスクを実行する必要があるアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : これは、タッチパッドイベントによりESP32がウェイクアップしたことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : このウェイクアップ理由は、ULP（超低消費電力）プログラムによってウェイクアップがトリガーされたことを意味します。ULPはメインCPUがディープスリープ中でも動作でき、特定の条件が満たされたときにESP32をウェイクアップできるため、最小限のバッテリー消費で低消費電力動作が可能になります。

```cpp
void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("Touch detected on GPIO 4"); break;
    case 1:  Serial.println("Touch detected on GPIO 0"); break;
    case 2:  Serial.println("Touch detected on GPIO 2"); break;
    case 3:  Serial.println("Touch detected on GPIO 15"); break;
    case 4:  Serial.println("Touch detected on GPIO 13"); break;
    case 5:  Serial.println("Touch detected on GPIO 12"); break;
    case 6:  Serial.println("Touch detected on GPIO 14"); break;
    case 7:  Serial.println("Touch detected on GPIO 27"); break;
    case 8:  Serial.println("Touch detected on GPIO 33"); break;
    case 9:  Serial.println("Touch detected on GPIO 32"); break;
    default: Serial.println("Wakeup not by touchpad"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("Touch detected on GPIO %d\n", touchPin);
  } else {
    Serial.println("Wakeup not by touchpad");
  }
#endif
}
```

- `case 0:`GPIO 4でタッチが検出されました。
- `case 1:`GPIO 0でタッチが検出されました。
- `case 2:`GPIO 2でタッチが検出されました。
- `case 3:`GPIO 15でタッチが検出されました。
- `case 4:`GPIO 13でタッチが検出されました。
- `case 5:`GPIO 12でタッチが検出されました。
- `case 6:`GPIO 14でタッチが検出されました。
- `case 7:`GPIO 27でタッチが検出されました。
- `case 8:`GPIO 33でタッチが検出されました。
- `case 9:`GPIO 32でタッチが検出されました。
- `default:`タッチが検出されない場合のデフォルトケース。

```cpp
void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}
```

- `++bootCount;` ブートカウントをインクリメントします。

- `print_wakeup_reason();` ウェイクアップの理由を出力します。
- `print_wakeup_touchpad();` タッチパッドのウェイクアップ状態を出力します。

- `#if CONFIG_IDF_TARGET_ESP32` ターゲットがESP32かどうかをチェックします
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義された閾値でT3のタッチウェイクアップを有効にします。
- `touchSleepWakeUpEnable(T7, THRESHOLD);` 定義された閾値でT7のタッチウェイクアップを有効にします。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義された閾値でT3のタッチウェイクアップを有効にします。

- `esp_deep_sleep_start();` ESP32をディープスリープモードに移行させます。

</TabItem>

<TabItem value="DeepSleepExample4" label="SmoothBink_ULP" default>

```cpp
#include <Arduino.h> // Include the Arduino core library
#include "esp32/ulp.h" // Include ESP32 ULP-related library
#include "driver/rtc_io.h" // Include RTC GPIO driver library
#include "soc/rtc_io_reg.h" // Include RTC IO register definitions

#define RTC_dutyMeter 0 // Define the storage location for dutyMeter
#define RTC_dir       4 // Define the storage location for direction
#define RTC_fadeDelay 12 // Define the storage location for fadeDelay

uint32_t *fadeCycleDelay = &RTC_SLOW_MEM[RTC_fadeDelay]; // Point to the fadeDelay location in RTC_SLOW_MEM
#define ULP_START_OFFSET 32 // Define the starting offset for the ULP program

RTC_DATA_ATTR uint32_t ULP_Started = 0; // Variable to indicate if the ULP program has started
// Time-to-Sleep
#define uS_TO_S_FACTOR 1000000ULL // Conversion factor from microseconds to seconds
#define TIME_TO_SLEEP  5 // Time to enter deep sleep (in seconds)

void ulp_setup() { // ULP setup function
  if (ULP_Started) { // If ULP has already started, return
    return;
  }
  *fadeCycleDelay = 5; // Initialize fadeCycleDelay to 5
  ULP_Started = 1; // Mark ULP as started

  const gpio_num_t MeterPWMPin = GPIO_NUM_2; // Define the PWM pin
  rtc_gpio_init(MeterPWMPin); // Initialize GPIO
  rtc_gpio_set_direction(MeterPWMPin, RTC_GPIO_MODE_OUTPUT_ONLY); // Set the pin as output
  rtc_gpio_set_level(MeterPWMPin, 0); // Set the initial pin level to low

  const uint32_t MeterPWMBit = rtc_io_number_get(MeterPWMPin) + RTC_GPIO_OUT_DATA_S; // Get the bit for the PWM pin

  enum labels { // Define labels for the ULP program
    INIFINITE_LOOP,
    RUN_PWM,
    NEXT_PWM_CYCLE,
    PWM_ON,
    PWM_OFF,
    END_PWM_CYCLE,
    POSITIVE_DIR,
    DEC_DUTY,
    INC_DUTY,
  };

  // Define the ULP program
  const ulp_insn_t ulp_prog[] = {
    // Initial value setup
    I_MOVI(R0, 0), // Move 0 to register R0
    I_ST(R0, R0, RTC_dutyMeter), // Store the value of R0 in dutyMeter
    I_MOVI(R1, 1), // Move 1 to register R1
    I_ST(R1, R0, RTC_dir), // Store the value of R1 in dir

    M_LABEL(INIFINITE_LOOP), // Define the infinite loop label
    
    I_MOVI(R3, 0), // Move 0 to R3
    I_LD(R3, R3, RTC_fadeDelay), // Load the value from fadeDelay into R3
    M_LABEL(RUN_PWM), // Define the run PWM label

    I_MOVI(R0, 0), // Move 0 to R0
    I_LD(R0, R0, RTC_dutyMeter), // Load the value from dutyMeter into R0
    M_BL(NEXT_PWM_CYCLE, 1), // Branch to the next PWM cycle
    I_WR_REG(RTC_GPIO_OUT_W1TS_REG, MeterPWMBit, MeterPWMBit, 1), // Set the PWM pin high
    M_LABEL(PWM_ON), // Define the PWM ON label
    M_BL(NEXT_PWM_CYCLE, 1), // Branch to the next PWM cycle
    // I_DELAY(8), // Commented out delay instruction
    I_SUBI(R0, R0, 1), // Decrement R0 by 1
    M_BX(PWM_ON), // Go back to the PWM ON label

    M_LABEL(NEXT_PWM_CYCLE), // Define the next PWM cycle label
    I_MOVI(R0, 0), // Move 0 to R0
    I_LD(R0, R0, RTC_dutyMeter), // Load the value from dutyMeter into R0
    I_MOVI(R1, 100), // Move 100 to R1
    I_SUBR(R0, R1, R0), // R0 = R1 - R0
    M_BL(END_PWM_CYCLE, 1), // Branch to the end PWM cycle label
    I_WR_REG(RTC_GPIO_OUT_W1TC_REG, MeterPWMBit, MeterPWMBit, 1), // Set the PWM pin low
    M_LABEL(PWM_OFF), // Define the PWM OFF label
    M_BL(END_PWM_CYCLE, 1), // Branch to the end PWM cycle label
    // I_DELAY(8), // Commented out delay instruction
    I_SUBI(R0, R0, 1), // Decrement R0 by 1
    M_BX(PWM_OFF), // Go back to the PWM OFF label
    M_LABEL(END_PWM_CYCLE), // Define the end PWM cycle label

    I_SUBI(R3, R3, 1), // Decrement R3 by 1
    I_MOVR(R0, R3), // Move R3 to R0
    M_BGE(RUN_PWM, 1), // If R3 >= 0, branch to RUN_PWM

    I_MOVI(R1, 0), // Move 0 to R1
    I_LD(R1, R1, RTC_dutyMeter), // Load the value from dutyMeter into R1
    I_MOVI(R0, 0), // Move 0 to R0
    I_LD(R0, R0, RTC_dir), // Load the value from dir into R0

    M_BGE(POSITIVE_DIR, 1), // If R0 >= 0, branch to POSITIVE_DIR

    I_MOVR(R0, R1), // Move R1 to R0
    M_BGE(DEC_DUTY, 1), // If R1 >= 0, branch to DEC_DUTY
    I_MOVI(R3, 0), // Move 0 to R3
    I_MOVI(R2, 1), // Move 1 to R2
    I_ST(R2, R3, RTC_dir), // Store the value of R2 in dir
    M_BX(INC_DUTY), // Branch to INC_DUTY label
    M_LABEL(DEC_DUTY), // Define DEC_DUTY label
    I_SUBI(R0, R0, 2), // Decrement R0 by 2
    I_MOVI(R2, 0), // Move 0 to R2
    I_ST(R0, R2, RTC_dutyMeter), // Store the value of R0 in dutyMeter
    M_BX(INIFINITE_LOOP), // Go back to the infinite loop label

    M_LABEL(POSITIVE_DIR), // Define POSITIVE_DIR label
  
    I_MOVR(R0, R1), // Move R1 to R0
    M_BL(INC_DUTY, 100), // Branch to INC_DUTY label with parameter 100
    I_MOVI(R2, 0), // Move 0 to R2
    I_ST(R2, R2, RTC_dir), // Store the value of R2 in dir
    M_BX(DEC_DUTY), // Branch to DEC_DUTY label
    M_LABEL(INC_DUTY), // Define INC_DUTY label
    I_ADDI(R0, R0, 2), // Increment R0 by 2
    I_MOVI(R2, 0), // Move 0 to R2
    I_ST(R0, R2, RTC_dutyMeter), // Store the value of R0 in dutyMeter
  
    M_BX(INIFINITE_LOOP), // Go back to the infinite loop label
  };
  // Run the ULP program
  size_t size = sizeof(ulp_prog) / sizeof(ulp_insn_t); // Calculate the size of the ULP program
  ulp_process_macros_and_load(ULP_START_OFFSET, ulp_prog, &size); // Load the ULP program
  esp_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_ON); // Configure power management for RTC peripherals
  ulp_run(ULP_START_OFFSET); // Start the ULP program
}

void setup() { // Arduino setup function
  Serial.begin(115200); // Initialize serial communication at 115200 baud rate

  ulp_setup(); // Call the ULP setup function
  Serial.printf("\nStarted smooth blink with delay %ld\n", *fadeCycleDelay); // Print startup information

  if (*fadeCycleDelay < 195) { // If fadeCycleDelay is less than 195
    *fadeCycleDelay += 10; // Increase fadeCycleDelay
  } else {
    *fadeCycleDelay = 5; // Otherwise, reset fadeCycleDelay to 5
  }
  Serial.println("Entering in Deep Sleep"); // Print entering deep sleep information
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR /*/ 4*/); // Set timer wakeup
  esp_deep_sleep_start(); // Enter deep sleep
}

void loop() { // Arduino loop function
  // Empty loop
}
```

</TabItem>

</Tabs>

:::tip
ディープスリープモードに入った後にプログラムを再書き込みするには、ブートボタンを押し続けながらリセットボタンを押してESP32を再起動してください。
:::

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/deep.png" style={{width:700, height:'auto'}}/></div>

## ライトスリープ

### 概要

ライトスリープモードは、ESP32のもう一つの低消費電力モードで、デバイスが素早い応答時間を維持しながらエネルギーを節約することを可能にします。このモードでは、CPUコアは停止しますが、RAMと一部の周辺機器は電源が供給されたままで、特定のイベントに応答してデバイスが素早く起動できます。

ライトスリープは、低消費電力が必要でありながらWiFiやBluetoothへの接続を維持する必要があるアプリケーションに最適です。無線通信モジュールをアクティブな状態に保つことができるためです。

### ウェイクアップ方法

- **タイマーウェイクアップ：** デバイスは指定された時間後に起動でき、定期的なタスクの実行が可能になります。
- **外部割り込みウェイクアップ：** ESP32は、ボタンの押下やその他のハードウェア割り込みなどの外部信号によって起動できます。
- **ネットワークアクティビティウェイクアップ：** デバイスは受信ネットワークパケットに応答して起動でき、常にアクティブ状態でなくても効率的な通信が可能になります。
- **GPIOウェイクアップ：** 特定のGPIOピンを設定して、状態変化や信号などのイベントが発生したときにライトスリープからデバイスを起動させることができます。

### コード実装

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

const int sleepTime = 10000;
const int ledPin = LED_BUILTIN; 

void ledTask(void *pvParameters) {
  digitalWrite(ledPin, HIGH);
  Serial.println("LED is ON");
  vTaskDelay(pdMS_TO_TICKS(1000));
  digitalWrite(ledPin, LOW);
  Serial.println("LED is OFF");
  
  vTaskDelete(NULL); 
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  Serial.println("Setup complete. Going to sleep...");
}

void loop() {
  esp_sleep_enable_timer_wakeup(sleepTime * 1000);
  Serial.println("Going to sleep now...");
  esp_light_sleep_start();

  xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);
  
  delay(1000);
}
```

### 詳細な注記

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
```

- FreeRTOSライブラリをインクルード

```cpp
const int sleepTime = 10000; 
const int ledPin = LED_BUILTIN; 
```

- スリープ時間を10秒に設定
- 内蔵LEDピンを使用

```cpp
void ledTask(void *pvParameters): 
```

- LEDの状態を制御するFreeRTOSタスクを定義します。

```cpp
digitalWrite(ledPin, HIGH); 
Serial.println("LED is ON"); 
vTaskDelay(pdMS_TO_TICKS(1000)); 
digitalWrite(ledPin, LOW);
Serial.println("LED is OFF"); 
vTaskDelete(NULL); 
```

- `vTaskDelay(pdMS_TO_TICKS(1000));`LEDを1秒間オンに保つ
- `vTaskDelete(NULL);`現在のタスクを削除する

```cpp
esp_sleep_enable_timer_wakeup(sleepTime * 1000);
Serial.println("Going to sleep now..."); 
esp_light_sleep_start(); 
xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL); 
delay(1000); 
```

- `esp_sleep_enable_timer_wakeup(sleepTime * 1000);`ウェイクアップ用のタイマーを設定
- `esp_light_sleep_start();` ライトスリープモードに入る
- `xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);`LED制御タスクを作成

### Results Show

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light_led.gif" style={{width:300, height:'auto'}}/></div>

## Modem-Sleep

### Introduction

Modem Sleepモードは、ESP32のもう一つの重要な低消費電力モードで、Deep Sleepモードとは異なります。Modem Sleepモードは主にESP32のワイヤレス通信モジュールに最適化されています。

このモードでは、ESP32のWiFi/Bluetoothモジュールがスリープ状態に入り、CPUコアはアクティブなままです。これにより、ESP32は一定レベルのワイヤレス接続を維持しながら、消費電力を大幅に削減できます。

### Wake-up Methods

- Timer Wake-up

- External Interrupt Wake-up

- Task Wake-up

- Network Activity Wake-up

### Code Realization

```cpp
#include "WiFi.h"

void setup() {
    Serial.begin(115200);
    Serial.println("Connecting to WiFi...");

    WiFi.begin("****", "****");

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
 
    WiFi.setSleep(true); 
    Serial.println("Modem-Sleep enabled.");
}

void loop() {

    Serial.println("Running...");

    delay(5000);

    WiFi.setSleep(false); 
    Serial.println("Modem-Sleep disabled. WiFi is active.");

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("Still connected to WiFi.");
    } else {
        Serial.println("WiFi disconnected.");
    }

    delay(5000);
    WiFi.setSleep(true); 
    Serial.println("Modem-Sleep enabled.");
}
```

### 詳細な注記

```cpp
#include "WiFi.h"
```

- WiFi機能を有効にするためにWiFiライブラリをインクルードします。

```cpp
Serial.println("Connecting to WiFi...");
```

- WiFiへの接続が開始されることを示すメッセージを出力します。

```cpp
WiFi.begin("****", "****");
```

- 指定されたWiFiネットワークへの接続を開始します。

```cpp
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
```

- WiFiへの接続が成功するまでループする。

```cpp
WiFi.setSleep(true);
```

- モデムスリープモードを有効にして電力を節約します。

```cpp
WiFi.setSleep(false);
```

- モデムスリープモードを無効にしてWiFiをアクティブにします。

```cpp
if (WiFi.status() == WL_CONNECTED) {
```

- WiFiの状態を確認します。

```cpp
WiFi.setSleep(true);
```

- モデムスリープモードを再度有効にします。

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light.png" style={{width:700, height:'auto'}}/></div>

## スリープ機能アプリケーション

上記のシンプルな例を踏まえて、さらに一歩進んで、これらのスリープ機能をESP32 S3 Senseセンサーで使用してみましょう。

### ソフトウェア準備

この記事を始める前に、XIAO ESP32S3 Senseのすべてのハードウェア機能をまだ活用していない場合は、いくつかのソフトウェアインストール準備を完了していることを確認してください。

ここでは3つの機能の紹介があり、以下のリンクを通じてより詳しい情報を見つけることができます：

- [マイクロフォンの使用](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/)：XIAO ESP32S3 Senseのマイクロフォンを使用して周囲の音レベルを捉え、音声を録音する方法を学びます。

- [MicroSD](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/)：データストレージにMicroSDカードを使用する方法を理解し、プロジェクトでファイルを保存および取得できることを確認します。

- [カメラの使用](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/)：XIAO ESP32S3 Senseのカメラモジュールを使用して写真を撮影し、動画を録画する方法をマスターします。

### コード実装

<Tabs>
<TabItem  value="SleepApplication1" label="Deep-Sleep" default>

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; 
int imageCount = 1;                
bool camera_sign = false;        
bool sd_sign = false;             


void photo_save(const char * fileName) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  writeFile(SD, fileName, fb->buf, fb->len);
  
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\r\n", path);

    File file = fs.open(path, FILE_WRITE);
    if (!file) {
        Serial.println("Failed to open file for writing");
        return;
    }
    if (file.write(data, len) == len) {
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while (!Serial); 

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; 
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true; 

  if (!SD.begin(21)) {
    Serial.println("Card Mount Failed");
    return;
  }
  
  uint8_t cardType = SD.cardType();
  
  if (cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if (cardType == CARD_MMC) {
    Serial.println("MMC");
  } else if (cardType == CARD_SD) {
    Serial.println("SDSC");
  } else if (cardType == CARD_SDHC) {
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; 

  Serial.println("Photos will begin shortly, please be ready.");
}

void loop() {
  if (camera_sign && sd_sign) {
    unsigned long now = millis();
  
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture: %s\r\n", filename);
      Serial.println("Entering deep sleep for 10 seconds...");
      
      esp_sleep_enable_timer_wakeup(10000000); 
      esp_deep_sleep_start(); 
      
    }
  }
}
```

### 詳細な説明

このコードは、ESP32カメラモジュールに基づく画像キャプチャシステムを実装しており、60秒ごとに自動的に写真を撮影してSDカードに保存することができます。`void setup()`関数では、カメラとSDカードを初期化してデバイスの状態を確認し、`void loop()`関数では、カメラが写真を撮影できるかどうかをチェックし、条件が満たされた場合は`photo_save()`関数を呼び出して画像を保存し、保存後は省電力のために10秒間のディープスリープ状態に入ります。

</TabItem>

<TabItem  value="SleepApplication2" label="Light-Sleep" default>

```cpp
#include <ESP_I2S.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

I2SClass I2S;

const int sleepTime = 10000;

void i2sTask(void *pvParameters) {
  Serial.println("start collecting");
  for (int i = 0; i < 10; i++) {
    int sample = I2S.read();
    if (sample && sample != -1 && sample != 1) {
      Serial.println(sample);
    }
    vTaskDelay(pdMS_TO_TICKS(1000));
  }
  vTaskDelay(pdMS_TO_TICKS(3000));
  vTaskDelete(NULL);
}

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    ;
  }

  I2S.setPinsPdmRx(42, 41);

  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1);
  }
}

void loop() {
  esp_sleep_enable_timer_wakeup(sleepTime * 1000);
  xTaskCreate(i2sTask, "I2S Task", 2048, NULL, 1, NULL);
  
  Serial.println("Going to sleep now...");
  esp_light_sleep_start();

  delay(1000);
}
```

### 詳細な説明

このコードは、I2Sインターフェースを使用してオーディオデータをキャプチャする機能を実装しています。`void setup()`関数では、シリアルポートとI2Sインターフェースが初期化されます。`void loop()`関数では、ウェイクアップタイマーが有効化され、`void i2sTask(void *pvParameters)`タスクが作成されます。このタスクは、オーディオサンプルの読み取りと、毎秒有効なデータの出力を担当します。タスクが10回実行された後、3秒間遅延してから自身を削除します。

</TabItem>

<TabItem  value="SleepApplication3" label="Modem-Sleep" default>

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3
#include "camera_pins.h"

const char *ssid = "******";
const char *password = "******";

void startCameraServer();
void setupLedFlash(int pin);

unsigned long lastCameraOperationTime = 0;
const unsigned long sleepDelay = 10000;

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);
    s->set_brightness(s, 1);
    s->set_saturation(s, -2);
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  delay(10000);

  if (WiFi.getSleep()) {
    Serial.println("WiFi is in sleep mode.");
  } else {
    Serial.println("WiFi is active.");
  }

  if (millis() - lastCameraOperationTime > sleepDelay) {
    WiFi.setSleep(true);
    Serial.println("No camera operation. WiFi is now in sleep mode.");
  } else {
    WiFi.setSleep(false);
  }
  cameraOperation();
}

void cameraOperation() {
  lastCameraOperationTime = millis();
}
```

### 詳細な注記

このコードは、画像キャプチャとWi-Fi経由での接続にESP32カメラモジュールを使用することを実装しています。`void setup()`関数では、シリアルポート、カメラ、Wi-Fi接続が初期化されます。初期化が成功すると、プログラムはユーザーが接続するためのWi-Fiアドレスを出力します。`void loop()`関数では、コードは10秒ごとにWi-Fiステータスをチェックし、カメラ操作がない場合、Wi-Fiは電力を節約するためにスリープモードに設定されます。`cameraOperation()`関数を呼び出すたびに、最後の操作時間が更新され、イベント中にWi-Fi接続が維持されることを保証します。

</TabItem>

</Tabs>

:::tip
これらのコードは直接使用することはできません。カメラに関するヘッダーファイルを追加する必要があります。上記のXIAO ESP32 S3に関する例を確認してください。
:::

## まとめ

### なぜDeep Sleepモードを使用するのか

機能を損なうことなく電力節約を最大化し、デバイスのバッテリー寿命を延ばすためです。
適用シナリオ：リモートセンサーノード、ウェアラブルデバイス、その他の低電力IoTデバイスなど、バッテリー寿命が重要なアプリケーション。ウェイクアップ時間は比較的遅いですが、このトレードオフは価値があります。

### なぜModem Sleepモードを使用するのか

ネットワーク接続を維持しながら、無線通信モジュールの電力消費を最適化するためです。
適用シナリオ：ネットワーク接続を維持する必要があるが、低電力も必要とするアプリケーション、例えば間欠的に動作するIoTデバイス。Modem Sleepは、高速なウェイクアップ応答を提供しながら、無線モジュールの電力消費を大幅に削減できます。

### 総括

これら3つのスリープモードは、開発者に異なる電力/性能のトレードオフオプションを提供し、アプリケーションの具体的な要件に基づいて柔軟に選択できます。バッテリー寿命要件があるデバイスには、Deep Sleepモードが良い選択です。ネットワーク接続を維持する必要があるIoTデバイスには、Modem Sleepモードが最適な選択です。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
