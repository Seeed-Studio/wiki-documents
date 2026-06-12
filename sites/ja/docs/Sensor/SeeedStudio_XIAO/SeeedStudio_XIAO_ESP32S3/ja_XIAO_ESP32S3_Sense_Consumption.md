---
description: XIAO ESP32 Sense で異なるスリープモード時の消費電力を使用する
title: XIAO ESP32S3 Sense スリープモード
keywords:
  - Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /XIAO_ESP32S3_Consumption
last_update:
  date: 08/27/2024
  author: Jason
createdAt: '2024-08-28'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Consumption/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/background02.png" style={{width:800, height:'auto'}}/></div>

ここでは、これらの低消費電力スリープモードの使い方を示す、いくつかの簡単な例を紹介します。すべての ESP32 ボードは多用途ですが、ここで使用している開発ボードは XIAO ESP32S3 Sense です。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Deep-Sleep

### 概要

Deep-Sleep モードでは、ESP32 は CPU、RAM の大部分、および APB_CLK からクロック供給されるすべてのデジタル周辺機能の電源をオフにします。電源が維持されるコンポーネントは次のとおりです：

- RTC コントローラ
- ULP コプロセッサ
- RTC FAST メモリ
- RTC SLOW メモリ

### ウェイクアップ方法

- **タイマーウェイクアップ：**タイマーを設定することで、指定した時間が経過すると ESP32 を自動的に起動させることができます。

- **タッチパッド割り込みウェイクアップ：**タッチパッドのアクティビティによってデバイスを起動でき、ユーザー操作が必要なアプリケーションに適しています。

- **外部ウェイクアップ：**ESP32 は外部信号（例：ボタン押下）によって起動でき、低消費電力アプリケーションに最適です。

- **ULP コプロセッサ動作によるウェイクアップ：**ULP コプロセッサは独立して動作し、特定の条件を監視してメイン CPU を起動できるため、電力を節約できます。

- **GPIO ウェイクアップ：**GPIO ピン状態（High または Low）の変化によってデバイスを起動でき、さまざまなセンサや周辺機器に柔軟に対応できます。

以下に、XIAO ESP32 S3 Sense で DeepSleep モードを使用する 3 つの簡単な例を示します。

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

### 詳細な説明

```cpp
#define uS_TO_S_FACTOR 1000000ULL 
```

- マクロを定義してマイクロ秒を秒に変換します。1000000ULL はマイクロ秒を秒に変換するための係数です。

```cpp
#define TIME_TO_SLEEP  5     
```

- ESP32 がスリープする時間を設定するマクロを定義します。この例では 5 秒です。

```cpp
RTC_DATA_ATTR int bootCount = 0;
```

- `RTC_DATA_ATTR` 属性を持つ整数変数 `bootCount` を宣言します。これにより、Deep-Sleep 中も値が保持されます。

```cpp
void print_wakeup_reason() {
```

- ESP32 が起動した理由を出力する `print_wakeup_reason()` という名前の関数を定義します。

```cpp
esp_sleep_wakeup_cause_t wakeup_reason;
```

- ウェイクアップ要因を保存するために、`esp_sleep_wakeup_cause_t` 型の変数 `wakeup_reason` を宣言します。

```cpp
wakeup_reason = esp_sleep_get_wakeup_cause();
```

- 関数 `esp_sleep_get_wakeup_cause()` を呼び出してウェイクアップの理由を取得し、その結果を変数 `wakeup_reason` に代入します。

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

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（リアルタイムクロック）I/O 用に設定された GPIO ピンで検出された外部信号によって ESP32 が起動したことを示します。通常、ボタンやセンサがトリガされたときのスリープからの復帰に使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : RTC コントローラによって管理される GPIO ピン上の外部信号が原因で起動したことを示します。EXT0 と異なり、EXT1 は複数のピンを扱うことができ、指定したいずれかのピンの状態が変化したとき（Low または High になるなど）に起動できます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、あらかじめ設定されたタイマー時間が経過した後に ESP32 が起動したことを示します。ユーザー操作を必要とせずに定期的なタスクを実行するアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : タッチパッドイベントによって ESP32 が起動したことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : このウェイクアップ理由は、ULP（Ultra-Low Power）プログラムによって起動がトリガされたことを意味します。ULP はメイン CPU が Deep-Sleep 中でも動作でき、特定の条件が満たされたときに ESP32 を起動できるため、バッテリー消費を最小限に抑えた低消費電力動作が可能です。

```cpp
++bootCount;
```

- 起動回数をインクリメントし、デバイスが再起動するたびにその回数を出力します。

```cpp
print_wakeup_reason();
```

- ESP32 のウェイクアップ理由を出力します。

```cpp
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

Serial.println("Going to sleep now");
Serial.flush();
esp_deep_sleep_start();
Serial.println("This will never be printed");
```

- `esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);`指定した時間が経過した後に ESP32 を起動させるタイマーを有効にします。
- `Serial.flush();`スリープに入る前に、すべてのシリアルデータが送信されるようにします。
- `esp_deep_sleep_start();`ESP32 を Deep-Sleep モードに移行させます。

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

### 詳細な説明

```cpp
#include "driver/rtc_io.h"
```

- RTC GPIO にアクセスするための RTC I/O ドライバをインクルードします。

```cpp
#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)  
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33    
RTC_DATA_ATTR int bootCount = 0;
```

- 16 進数で表した 2 ^ GPIO_NUMBER
- 1 = EXT0 ウェイクアップ、0 = EXT1 ウェイクアップ
- 使用できるのは RTC IO のみ - ESP32 ピンの例

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

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（Real-Time Clock）I/O 用に設定された GPIO ピンで検出された外部信号により ESP32 が起床したことを示します。これは通常、ボタンやセンサーがトリガーされたときにスリープから復帰するために使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : このウェイクアップ理由は、RTC コントローラによって管理される GPIO ピン上の外部信号によって起床したことを示します。EXT0 と異なり、EXT1 は複数のピンを扱うことができ、指定されたピンのいずれかの状態が変化したとき（例：Low または High になる）に起床できます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、あらかじめ設定されたタイマー時間の経過後に ESP32 が起床したことを示します。これは、ユーザー操作を必要とせずに定期的なタスクを実行する必要があるアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : このウェイクアップ理由は、タッチパッドイベントによって ESP32 が起床したことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` :  このウェイクアップ理由は、ULP（Ultra-Low Power）プログラムによってウェイクアップがトリガーされたことを意味します。ULP はメイン CPU がディープスリープ中でも動作でき、特定の条件が満たされたときに ESP32 を起床させることで、バッテリー消費を最小限に抑えた低消費電力動作を可能にします。

```cpp
  Serial.begin(115200);
  delay(1000);  
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
```

- `++bootCount;`ブート回数をインクリメントし、再起動のたびに表示します
- `print_wakeup_reason();` ESP32 のウェイクアップ理由を表示します

```cpp
#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);
```

- `esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);`指定した GPIO ピンが High になったときに EXT0 ウェイクアップを有効にします。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` ウェイクアップ GPIO ピンのプルアップ抵抗を無効にします。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` ウェイクアップ GPIO ピンのプルダウン抵抗を有効にします。

```cpp
#else  
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO);  
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
```

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`EXT1 ウェイクアップ
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33 を GND に接続し、High でウェイクアップできるようにします
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`  High でウェイクアップできるように PULL_UP を無効にします

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`  ext1 を使用する場合は、このように使用します
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33 を GND に接続し、High でウェイクアップできるようにします
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` High でウェイクアップできるように PULL_UP を無効にします

```cpp
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
```

- `esp_deep_sleep_start();`ESP32 をディープスリープモードに移行させます。

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

### 詳細なメモ

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif
```

- 対象が ESP32 かどうかを確認します
- ESP32 用のタッチ感度のしきい値を定義します
- 対象が ESP32S2 または ESP32S3 かどうかを確認します
- ESP32S2/S3 用に、より高いタッチ感度のしきい値を定義します
- 対象が上記のいずれでもない場合
- その他のターゲット向けのデフォルトのしきい値を定義します

```cpp
RTC_DATA_ATTR int bootCount = 0; // Declare a variable to count boots, stored in RTC memory.
touch_pad_t touchPin; // Declare a variable to hold the touchpad pin status.

void print_wakeup_reason() { // Function to print the reason for waking up.
  esp_sleep_wakeup_cause_t wakeup_reason; // Variable to hold the wakeup reason.

  wakeup_reason = esp_sleep_get_wakeup_cause(); // Get the cause of the wakeup.
```

- `RTC_DATA_ATTR int bootCount = 0;`RTC メモリに保存される、ブート回数をカウントする変数を宣言します。
- `touch_pad_t touchPin;`タッチパッドピンの状態を保持する変数を宣言します。
- `void print_wakeup_reason()` ウェイクアップ理由を表示する関数です。
- `esp_sleep_wakeup_cause_t wakeup_reason;`ウェイクアップ理由を保持する変数です。
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

- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC（Real-Time Clock）I/O 用に設定された GPIO ピンで検出された外部信号により ESP32 が起床したことを示します。これは通常、ボタンやセンサーがトリガーされたときにスリープから復帰するために使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : このウェイクアップ理由は、RTC コントローラによって管理される GPIO ピン上の外部信号によって起床したことを示します。EXT0 と異なり、EXT1 は複数のピンを扱うことができ、指定されたピンのいずれかの状態が変化したとき（例：Low または High になる）に起床できます。
- `ESP_SLEEP_WAKEUP_TIMER` : このウェイクアップ理由は、あらかじめ設定されたタイマー時間の経過後に ESP32 が起床したことを示します。これは、ユーザー操作を必要とせずに定期的なタスクを実行する必要があるアプリケーションに有用です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : このウェイクアップ理由は、タッチパッドイベントによって ESP32 が起床したことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` :  このウェイクアップ理由は、ULP（Ultra-Low Power）プログラムによってウェイクアップがトリガーされたことを意味します。ULP はメイン CPU がディープスリープ中でも動作でき、特定の条件が満たされたときに ESP32 を起床させることで、バッテリー消費を最小限に抑えた低消費電力動作を可能にします。

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

- `case 0:`GPIO 4 でタッチが検出されました。
- `case 1:`GPIO 0 でタッチが検出されました。
- `case 2:`GPIO 2 でタッチが検出されました。
- `case 3:`GPIO 15 でタッチが検出されました。
- `case 4:`GPIO 13 でタッチが検出されました。
- `case 5:`GPIO 12 でタッチが検出されました。
- `case 6:`GPIO 14 でタッチを検出。
- `case 7:`GPIO 27 でタッチを検出。
- `case 8:`GPIO 33 でタッチを検出。
- `case 9:`GPIO 32 でタッチを検出。
- `default:`タッチが検出されなかった場合のデフォルトケース。

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

- `++bootCount;` 起動回数をインクリメントします。

- `print_wakeup_reason();` ウェイクアップ理由を出力します。
- `print_wakeup_touchpad();` タッチパッドのウェイクアップ状態を出力します。

- `#if CONFIG_IDF_TARGET_ESP32` ターゲットが ESP32 かどうかを確認します
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義されたしきい値で T3 のタッチウェイクアップを有効にします。
- `touchSleepWakeUpEnable(T7, THRESHOLD);` 定義されたしきい値で T7 のタッチウェイクアップを有効にします。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義されたしきい値で T3 のタッチウェイクアップを有効にします。

- `esp_deep_sleep_start();` ESP32 をディープスリープモードに移行させます。

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
ディープスリープモードに入った後にプログラムを書き込み直すには、boot ボタンを押し続けたまま reset ボタンを押して ESP32 を再起動してください。
:::

### 実行結果の表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/deep.png" style={{width:700, height:'auto'}}/></div>

## ライトスリープ

### 概要

ライトスリープモードは、ESP32 におけるもう一つの低消費電力モードであり、素早い応答時間を維持しつつデバイスの電力を節約できます。このモードでは CPU コアは停止しますが、RAM と一部のペリフェラルは電源が入ったままのため、特定のイベントに応じてデバイスをすばやくウェイクアップできます。

ライトスリープは、低消費電力でありながら WiFi や Bluetooth への接続を維持する必要があるアプリケーションに最適で、無線通信モジュールをアクティブな状態に保つことができます。

### ウェイクアップ方法

- **タイマーウェイクアップ：** デバイスは指定した時間が経過した後にウェイクアップでき、これにより定期的なタスクを実行できます。
- **外部割り込みウェイクアップ：** ESP32 は、ボタン押下やその他のハードウェア割り込みなどの外部信号によってウェイクアップできます。
- **ネットワークアクティビティウェイクアップ：** デバイスは受信したネットワークパケットに応答してウェイクアップでき、常にアクティブ状態にしておくことなく効率的な通信を実現します。
- **GPIO ウェイクアップ：** 特定の GPIO ピンを設定して、状態変化や信号などのイベントが発生したときにライトスリープからデバイスをウェイクアップさせることができます。

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

### 詳細な説明

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
```

- FreeRTOS ライブラリをインクルードします

```cpp
const int sleepTime = 10000; 
const int ledPin = LED_BUILTIN; 
```

- スリープ時間を 10 秒に設定します
- 内蔵 LED ピンを使用します

```cpp
void ledTask(void *pvParameters): 
```

- LED の状態を制御する FreeRTOS タスクを定義します。

```cpp
digitalWrite(ledPin, HIGH); 
Serial.println("LED is ON"); 
vTaskDelay(pdMS_TO_TICKS(1000)); 
digitalWrite(ledPin, LOW);
Serial.println("LED is OFF"); 
vTaskDelete(NULL); 
```

- `vTaskDelay(pdMS_TO_TICKS(1000));`LED を 1 秒間点灯させます
- `vTaskDelete(NULL);`現在のタスクを削除します

```cpp
esp_sleep_enable_timer_wakeup(sleepTime * 1000);
Serial.println("Going to sleep now..."); 
esp_light_sleep_start(); 
xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL); 
delay(1000); 
```

- `esp_sleep_enable_timer_wakeup(sleepTime * 1000);`ウェイクアップ用のタイマーを設定します
- `esp_light_sleep_start();` ライトスリープモードに入ります
- `xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);`LED 制御タスクを作成します

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light_led.gif" style={{width:300, height:'auto'}}/></div>

## Modem-Sleep

### 概要

Modem Sleep モードは ESP32 におけるもう 1 つの重要な低消費電力モードで、Deep Sleep モードとは異なります。Modem Sleep モードは主に ESP32 の無線通信モジュール向けに最適化されています。

このモードでは、ESP32 の WiFi/Bluetooth モジュールがスリープ状態に入り、CPU コアは動作し続けます。これにより、ESP32 は一定の無線接続性を維持しつつ、消費電力を大幅に削減できます。

### ウェイクアップ方法

- タイマーによるウェイクアップ

- 外部割り込みによるウェイクアップ

- タスクによるウェイクアップ

- ネットワークアクティビティによるウェイクアップ

### コード実装

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

### 詳細な説明

```cpp
#include "WiFi.h"
```

- WiFi 機能を有効にするために WiFi ライブラリをインクルードします。

```cpp
Serial.println("Connecting to WiFi...");
```

- WiFi への接続を開始することを示すメッセージを出力します。

```cpp
WiFi.begin("****", "****");
```

- 指定した WiFi ネットワークへの接続を開始します。

```cpp
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
```

- WiFi に正常に接続されるまでループします。

```cpp
WiFi.setSleep(true);
```

- 省電力のために modem sleep モードを有効にします。

```cpp
WiFi.setSleep(false);
```

- WiFi を有効にするために modem sleep モードを無効にします。

```cpp
if (WiFi.status() == WL_CONNECTED) {
```

- WiFi の状態を確認します。

```cpp
WiFi.setSleep(true);
```

- 再度 modem sleep モードを有効にします。

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light.png" style={{width:700, height:'auto'}}/></div>

## スリープ機能の応用

上記の簡単な例を踏まえて、次は一歩進めて、これらのスリープ機能を ESP32 S3 Sense センサー上で使用してみましょう。

### ソフトウェアの準備

この記事を始める前に、まだ XIAO ESP32S3 Sense 上のすべてのハードウェア機能を使用したことがない場合は、いくつかのソフトウェアインストールの準備が完了していることを確認してください。

ここでは 3 つの機能について紹介します。詳細は次のリンクから確認できます。

- [Micrphone Use](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/)：XIAO ESP32S3 Sense 上のマイクを使用して周囲の音量を取得し、音声を録音する方法を学びます。

- [MicroSD](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/)：MicroSD カードをデータ保存に使用する方法を理解し、プロジェクト内でファイルを保存および取得できるようにします。

- [Camera Use](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/)：XIAO ESP32S3 Sense 上のカメラモジュールを使用して写真撮影や動画録画を行う方法を習得します。

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

このコードは、ESP32 カメラモジュールをベースにした画像キャプチャシステムを実装しており、60 秒ごとに自動で写真を撮影し、SD カードに保存できます。`void setup()` 関数ではカメラと SD カードを初期化し、デバイスの状態を確認します。`void loop()` 関数ではカメラが撮影可能かどうかを確認し、条件を満たす場合は `photo_save()` 関数を呼び出して画像を保存し、保存後に 10 秒間の Deep Sleep 状態に入って省電力化を行います。

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

このコードは、I2S インターフェースを使用して音声データを取得する機能を実装しています。`void setup()` 関数ではシリアルポートと I2S インターフェースを初期化し、`void loop()` 関数ではウェイクアップタイマーを有効にしてタスク `void i2sTask(void *pvParameters)` を作成します。このタスクは音声サンプルを読み取り、毎秒有効なデータを出力する役割を担います。タスクが 10 回実行された後、3 秒間の遅延を行い、自身を削除します。

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

### 詳細な説明

このコードは、ESP32 カメラモジュールを使用した画像キャプチャと Wi-Fi 経由での接続を実装しています。`void setup()` 関数では、シリアルポート、カメラ、および Wi-Fi 接続が初期化されます。初期化が成功すると、ユーザーが接続できるように Wi-Fi アドレスが出力されます。`void loop()` 関数では、10 秒ごとに Wi-Fi の状態を確認し、カメラの操作がない場合は省電力のために Wi-Fi をスリープモードに設定します。`cameraOperation()` 関数が呼び出されるたびに、最後の操作時刻が更新され、イベントの間は Wi-Fi 接続が維持されるようになっています。

</TabItem>

</Tabs>

:::tip
これらのコードはそのままでは使用できません。カメラに関するヘッダーファイルを追加する必要があります。XIAO ESP32 S3 に関する上記のサンプルを確認してください。
:::

## まとめ

### Deep Sleep モードを使用する理由

デバイスのバッテリー寿命を延ばすために、機能性を損なうことなく電力節約を最大化します。
適したシナリオ：バッテリー寿命が重要となるアプリケーション、例えばリモートセンサーノード、ウェアラブルデバイス、その他の低消費電力 IoT デバイスなど。ウェイクアップ時間は比較的遅いものの、このトレードオフには十分な価値があります。

### Modem Sleep モードを使用する理由

ネットワーク接続を維持しながら、無線通信モジュールの消費電力を最適化します。
適したシナリオ：ネットワーク接続を維持する必要がありつつ、低消費電力も求められるアプリケーション、例えば断続的に動作する IoT デバイスなど。Modem Sleep は、無線モジュールの消費電力を大幅に削減しつつ、高速なウェイクアップ応答を提供できます。

### 総括

これら 3 つのスリープモードは、開発者に対して電力と性能の異なるトレードオフの選択肢を提供し、アプリケーションの具体的な要件に応じて柔軟に選択できます。バッテリー寿命が求められるデバイスには Deep Sleep モードが適しており、ネットワーク接続を維持する必要がある IoT デバイスには Modem Sleep モードが最適な選択となります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
