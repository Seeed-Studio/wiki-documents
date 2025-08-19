---
description: XIAO ESP32 Sense の異なるスリープモードにおける消費電力
title: XIAO ESP32S3 Sense スリープモード
keywords:
- スリープモード
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /ja/XIAO_ESP32S3_Consumption
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/background02.png" style={{width:800, height:'auto'}}/></div>


ここでは、これらの低消費電力スリープモードの使用例をいくつか簡単に示します。すべてのESP32ボードは汎用性が高く、ここで使用している開発ボードはXIAO ESP32S3 Senseです。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## ディープスリープ

### 概要
ディープスリープモードでは、ESP32はCPU、RAMの大部分、およびAPB_CLKからクロック供給されるすべてのデジタル周辺機器の電源をオフにします。電源が供給され続けるコンポーネントは以下の通りです：

- RTCコントローラー
- ULPコプロセッサ
- RTC FASTメモリ
- RTC SLOWメモリ

### ウェイクアップ方法

- **タイマーウェイクアップ：** ESP32は指定された時間後にタイマーを設定することで自動的にウェイクアップできます。

- **タッチパッド割り込みウェイクアップ：** タッチパッドの活動によってデバイスをウェイクアップでき、ユーザー操作が必要なアプリケーションに適しています。

- **外部ウェイクアップ：** ESP32は外部信号（例：ボタン押下）によってウェイクアップでき、低消費電力アプリケーションに最適です。

- **ULPコプロセッサ活動ウェイクアップ：** ULPコプロセッサは独立して動作し、特定の条件を監視してメインCPUをウェイクアップすることで電力を節約します。

- **GPIOウェイクアップ：** GPIOピンの状態（高または低）の変化によってデバイスをウェイクアップでき、さまざまなセンサーや周辺機器に柔軟性を提供します。


以下に、XIAO ESP32 S3 Senseを使用したディープスリープモードの3つの簡単な例を示します。


### コード実現

<Tabs>
<TabItem  value="DeepSleepExample1" label="タイマーウェイクアップ" default>

```cpp

#define uS_TO_S_FACTOR 1000000ULL 
#define TIME_TO_SLEEP  5       

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("ULPプログラムによるウェイクアップ"); break;
    default:                        Serial.printf("ディープスリープによるウェイクアップではありません: %d\n", wakeup_reason); break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000);  


  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));


  print_wakeup_reason();


  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("ESP32を毎 " + String(TIME_TO_SLEEP) + " 秒間スリープするよう設定");

  Serial.println("今からスリープします");
  Serial.flush();
  esp_deep_sleep_start();
  Serial.println("これは決して表示されません");
}

void loop() {

}
```


### 詳細な説明
```cpp
#define uS_TO_S_FACTOR 1000000ULL 
```
- マイクロ秒を秒に変換するためのマクロを定義します。1000000ULLはマイクロ秒を秒に変換するための係数です。

```cpp
#define TIME_TO_SLEEP  5     
```
- ESP32がスリープする時間を設定するマクロを定義します。この場合、5秒です。

```cpp
RTC_DATA_ATTR int bootCount = 0;
```
- `RTC_DATA_ATTR`属性を持つ整数変数`bootCount`を宣言します。この属性により、ディープスリープ中も値を保持できます。

```cpp
void print_wakeup_reason() {
```
- ESP32がウェイクアップした理由を出力する関数`print_wakeup_reason()`を定義します。

```cpp
esp_sleep_wakeup_cause_t wakeup_reason;
```
- ウェイクアップイベントの原因を格納するための型`esp_sleep_wakeup_cause_t`の変数`wakeup_reason`を宣言します。

```cpp
wakeup_reason = esp_sleep_get_wakeup_cause();
```
- `esp_sleep_get_wakeup_cause()`関数を呼び出してウェイクアップの原因を取得し、変数`wakeup_reason`に代入します。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("ULPプログラムによるウェイクアップ"); break;
    default:                        Serial.printf("ディープスリープによるウェイクアップではありません: %d\n", wakeup_reason); break;
}
```
- `ESP_SLEEP_WAKEUP_EXT0` : ESP32がRTC（リアルタイムクロック）I/Oに設定されたGPIOピンで検出された外部信号によってウェイクアップしたことを示します。通常、ボタンやセンサーがトリガーされた場合に使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : RTCコントローラーで管理されるGPIOピンの外部信号によるウェイクアップを示します。EXT0とは異なり、複数のピンを処理でき、指定されたピンのいずれかが状態を変化させた場合（例：低または高になる）にウェイクアップします。
- `ESP_SLEEP_WAKEUP_TIMER` : ESP32が事前に定義されたタイマー期間後にウェイクアップしたことを示します。ユーザー操作を必要としない定期的なタスクに役立ちます。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : タッチパッドイベントによるESP32のウェイクアップを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : ULP（超低消費電力）プログラムによるウェイクアップを意味します。ULPはメインCPUがディープスリープ中に動作し、特定の条件が満たされた場合にESP32をウェイクアップすることで、バッテリー消費を最小限に抑えながら低消費電力動作を可能にします。

```cpp
++bootCount;
```
- ブートカウントをインクリメントし、デバイスが再起動するたびにそれを表示します。

```cpp
print_wakeup_reason();
```
- ESP32のウェイクアップ理由を表示します。

```cpp
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

Serial.println("Going to sleep now");
Serial.flush();
esp_deep_sleep_start();
Serial.println("This will never be printed");
```

- `esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);` 指定された時間後にESP32をウェイクアップするタイマーを有効にします。
- `Serial.flush();` スリープに入る前にすべてのシリアルデータを送信します。
- `esp_deep_sleep_start();` ESP32をディープスリープモードにします。

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
- RTC GPIOにアクセスするためのRTC I/Oドライバをインクルードします。

```cpp
#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)  
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33    
RTC_DATA_ATTR int bootCount = 0;
```

- GPIO番号に基づく2の累乗を16進数で表現します。
- 1 = EXT0ウェイクアップ、0 = EXT1ウェイクアップ
- RTC IOのみが許可されます - ESP32のピン例

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
- `ESP_SLEEP_WAKEUP_EXT0` : このウェイクアップ理由は、RTC_IOに設定されたGPIOピンで検出された外部信号によってESP32がウェイクアップしたことを示します。通常、ボタンやセンサーがトリガーされたときに使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : この理由は、RTCコントローラーによって管理されるGPIOピンでの外部信号によってウェイクアップしたことを示します。EXT0とは異なり、EXT1は複数のピンを処理でき、指定されたピンのいずれかが状態を変えたとき（例えば、LOWからHIGH）にウェイクアップします。
- `ESP_SLEEP_WAKEUP_TIMER` : この理由は、事前に設定されたタイマー期間後にESP32がウェイクアップしたことを示します。ユーザーの操作を必要としない定期的なタスクに便利です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : この理由は、タッチパッドイベントによってESP32がウェイクアップしたことを示します。ウェイクアップ用に設定されたタッチパッドがタッチを検出すると、デバイスをスリープモードから復帰させることができます。
- `ESP_SLEEP_WAKEUP_ULP` : この理由は、ULP（超低消費電力）プログラムによってウェイクアップがトリガーされたことを意味します。ULPはメインCPUがディープスリープ中でも動作し、特定の条件が満たされた場合にESP32をウェイクアップできます。これにより、バッテリー消費を最小限に抑えた低消費電力動作が可能です。

```cpp
  Serial.begin(115200);
  delay(1000);  
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
```
- `  ++bootCount;` ブート番号をインクリメントし、再起動ごとに表示します。
- `  print_wakeup_reason();` ESP32のウェイクアップ理由を表示します。

```cpp
#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);
```

- `esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);` 指定されたGPIOピンがHIGHになるとEXT0ウェイクアップを有効にします。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` ウェイクアップGPIOピンのプルアップ抵抗を無効にします。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` ウェイクアップGPIOピンのプルダウン抵抗を有効にします。

```cpp
#else  
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO);  
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
```
-  `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);` EXT1ウェイクアップを有効にします。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33をGNDに接続し、HIGHでウェイクアップします。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` HIGHでウェイクアップするためにPULL_UPを無効にします。

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);` EXT1を使用する場合、このように使用します。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33をGNDに接続し、HIGHでウェイクアップします。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` HIGHでウェイクアップするためにPULL_UPを無効にします。

```cpp
  Serial.println("これからスリープモードに入ります");
  esp_deep_sleep_start();
  Serial.println("このメッセージは表示されません");
```
-  `esp_deep_sleep_start();`はESP32をディープスリープモードに移行させます。

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
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("ULPプログラムによるウェイクアップ"); break;
    default:                        Serial.printf("ディープスリープ以外の原因でウェイクアップしました: %d\n", wakeup_reason); break;
  }
}

void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("GPIO 4でタッチが検出されました"); break;
    case 1:  Serial.println("GPIO 0でタッチが検出されました"); break;
    case 2:  Serial.println("GPIO 2でタッチが検出されました"); break;
    case 3:  Serial.println("GPIO 15でタッチが検出されました"); break;
    case 4:  Serial.println("GPIO 13でタッチが検出されました"); break;
    case 5:  Serial.println("GPIO 12でタッチが検出されました"); break;
    case 6:  Serial.println("GPIO 14でタッチが検出されました"); break;
    case 7:  Serial.println("GPIO 27でタッチが検出されました"); break;
    case 8:  Serial.println("GPIO 33でタッチが検出されました"); break;
    case 9:  Serial.println("GPIO 32でタッチが検出されました"); break;
    default: Serial.println("タッチパッドによるウェイクアップではありません"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("GPIO %dでタッチが検出されました\n", touchPin);
  } else {
    Serial.println("タッチパッドによるウェイクアップではありません");
  }
#endif
}

void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("これからスリープモードに入ります");
  esp_deep_sleep_start();
  Serial.println("このメッセージは表示されません");
}

void loop() {

}
```

### 詳細な説明

```cpp
#if CONFIG_IDF_TARGET_ESP32
#define THRESHOLD 40 
#elif (CONFIG_IDF_TARGET_ESP32S2 || CONFIG_IDF_TARGET_ESP32S3)
#define THRESHOLD 5000 
#else                  
#define THRESHOLD 500  
#endif
```

-  ターゲットがESP32であるかを確認します。
-  ESP32用にタッチ感度の閾値を定義します。
-  ターゲットがESP32S2またはESP32S3であるかを確認します。
-  ESP32S2/S3用により高いタッチ感度の閾値を定義します。
-  上記以外のターゲットの場合
-  他のターゲット用にデフォルトの閾値を定義します。

```cpp
RTC_DATA_ATTR int bootCount = 0; // 起動回数をカウントする変数をRTCメモリに保存します。
touch_pad_t touchPin; // タッチパッドのピン状態を保持する変数を宣言します。

void print_wakeup_reason() { // ウェイクアップの理由を出力する関数。
  esp_sleep_wakeup_cause_t wakeup_reason; // ウェイクアップ理由を保持する変数。

  wakeup_reason = esp_sleep_get_wakeup_cause(); // ウェイクアップの原因を取得します。
```
- `RTC_DATA_ATTR int bootCount = 0;` 起動回数をカウントする変数をRTCメモリに保存します。
- `touch_pad_t touchPin;` タッチパッドのピン状態を保持する変数を宣言します。
- `void print_wakeup_reason()` ウェイクアップの理由を出力する関数。
- `esp_sleep_wakeup_cause_t wakeup_reason;` ウェイクアップ理由を保持する変数。
- `wakeup_reason = esp_sleep_get_wakeup_cause();` ウェイクアップの原因を取得します。

```cpp
  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("ULPプログラムによるウェイクアップ"); break;
    default:                        Serial.printf("ディープスリープ以外の原因でウェイクアップしました: %d\n", wakeup_reason); break;
}
```
- `ESP_SLEEP_WAKEUP_EXT0` : RTC_IOを使用したGPIOピンでの外部信号によるウェイクアップを示します。通常、ボタンやセンサーがトリガーされた場合に使用されます。
- `ESP_SLEEP_WAKEUP_EXT1` : RTCコントローラーで管理されるGPIOピンでの外部信号によるウェイクアップを示します。EXT0とは異なり、複数のピンを扱うことができ、指定されたピンのいずれかが状態を変化させた場合にウェイクアップします（例：LOWまたはHIGH）。
- `ESP_SLEEP_WAKEUP_TIMER` : 事前に設定されたタイマー期間後にウェイクアップしたことを示します。ユーザーの操作を必要としない定期的なタスクに便利です。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : タッチパッドイベントによるウェイクアップを示します。タッチパッドがタッチを検出すると、スリープモードから復帰します。
- `ESP_SLEEP_WAKEUP_ULP` : ULP（超低消費電力）プログラムによるウェイクアップを意味します。ULPはメインCPUがディープスリープ中に動作し、特定の条件が満たされた場合にESP32をウェイクアップできます。これにより、バッテリー消費を最小限に抑えた低消費電力動作が可能です。

```cpp
void print_wakeup_touchpad() {
  touchPin = esp_sleep_get_touchpad_wakeup_status();

#if CONFIG_IDF_TARGET_ESP32
  switch (touchPin) {
    case 0:  Serial.println("GPIO 4でタッチが検出されました"); break;
    case 1:  Serial.println("GPIO 0でタッチが検出されました"); break;
    case 2:  Serial.println("GPIO 2でタッチが検出されました"); break;
    case 3:  Serial.println("GPIO 15でタッチが検出されました"); break;
    case 4:  Serial.println("GPIO 13でタッチが検出されました"); break;
    case 5:  Serial.println("GPIO 12でタッチが検出されました"); break;
    case 6:  Serial.println("GPIO 14でタッチが検出されました"); break;
    case 7:  Serial.println("GPIO 27でタッチが検出されました"); break;
    case 8:  Serial.println("GPIO 33でタッチが検出されました"); break;
    case 9:  Serial.println("GPIO 32でタッチが検出されました"); break;
    default: Serial.println("タッチパッドによるウェイクアップではありません"); break;
  }
#else
  if (touchPin < TOUCH_PAD_MAX) {
    Serial.printf("GPIO %dでタッチが検出されました\n", touchPin);
  } else {
    Serial.println("タッチパッドによるウェイクアップではありません");
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
- `default:`タッチが検出されなかった場合のデフォルトケース。

```cpp
void setup() {
  Serial.begin(115200);
  delay(1000); 

  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));

  print_wakeup_reason();
  print_wakeup_touchpad();

#if CONFIG_IDF_TARGET_ESP32

  touchSleepWakeUpEnable(T3, THRESHOLD);
  touchSleepWakeUpEnable(T7, THRESHOLD);

#else 
  touchSleepWakeUpEnable(T3, THRESHOLD);

#endif

  Serial.println("これからスリープ状態に入ります");
  esp_deep_sleep_start();
  Serial.println("このメッセージは表示されません");
}
```

- `++bootCount;` 起動回数をインクリメントします。

- `print_wakeup_reason();` 起床理由を出力します。
- `print_wakeup_touchpad();` タッチパッドの起床状態を出力します。

- `#if CONFIG_IDF_TARGET_ESP32` ターゲットがESP32であるかを確認します。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義された閾値でT3のタッチ起床を有効にします。
- `touchSleepWakeUpEnable(T7, THRESHOLD);` 定義された閾値でT7のタッチ起床を有効にします。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 定義された閾値でT3のタッチ起床を有効にします。

- `esp_deep_sleep_start();` ESP32をディープスリープモードにします。

</TabItem>



<TabItem value="DeepSleepExample4" label="SmoothBink_ULP" default>

```cpp
#include <Arduino.h> // Arduinoコアライブラリをインクルード
#include "esp32/ulp.h" // ESP32 ULP関連ライブラリをインクルード
#include "driver/rtc_io.h" // RTC GPIOドライバライブラリをインクルード
#include "soc/rtc_io_reg.h" // RTC IOレジスタ定義をインクルード

#define RTC_dutyMeter 0 // dutyMeterの保存場所を定義
#define RTC_dir       4 // directionの保存場所を定義
#define RTC_fadeDelay 12 // fadeDelayの保存場所を定義

uint32_t *fadeCycleDelay = &RTC_SLOW_MEM[RTC_fadeDelay]; // RTC_SLOW_MEM内のfadeDelayの場所を指す
#define ULP_START_OFFSET 32 // ULPプログラムの開始オフセットを定義

RTC_DATA_ATTR uint32_t ULP_Started = 0; // ULPプログラムが開始されたかを示す変数
// スリープまでの時間
#define uS_TO_S_FACTOR 1000000ULL // マイクロ秒から秒への変換係数
#define TIME_TO_SLEEP  5 // ディープスリープに入る時間（秒）

void ulp_setup() { // ULPセットアップ関数
  if (ULP_Started) { // ULPがすでに開始されている場合は終了
    return;
  }
  *fadeCycleDelay = 5; // fadeCycleDelayを5に初期化
  ULP_Started = 1; // ULPを開始済みとしてマーク

  const gpio_num_t MeterPWMPin = GPIO_NUM_2; // PWMピンを定義
  rtc_gpio_init(MeterPWMPin); // GPIOを初期化
  rtc_gpio_set_direction(MeterPWMPin, RTC_GPIO_MODE_OUTPUT_ONLY); // ピンを出力専用に設定
  rtc_gpio_set_level(MeterPWMPin, 0); // 初期ピンレベルを低に設定

  const uint32_t MeterPWMBit = rtc_io_number_get(MeterPWMPin) + RTC_GPIO_OUT_DATA_S; // PWMピンのビットを取得

  enum labels { // ULPプログラムのラベルを定義
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

  // ULPプログラムを定義
  const ulp_insn_t ulp_prog[] = {
    // 初期値設定
    I_MOVI(R0, 0), // レジスタR0に0を移動
    I_ST(R0, R0, RTC_dutyMeter), // R0の値をdutyMeterに保存
    I_MOVI(R1, 1), // レジスタR1に1を移動
    I_ST(R1, R0, RTC_dir), // R1の値をdirに保存

    M_LABEL(INIFINITE_LOOP), // 無限ループラベルを定義
    
    I_MOVI(R3, 0), // R3に0を移動
    I_LD(R3, R3, RTC_fadeDelay), // fadeDelayから値をR3にロード
    M_LABEL(RUN_PWM), // RUN_PWMラベルを定義

    I_MOVI(R0, 0), // R0に0を移動
    I_LD(R0, R0, RTC_dutyMeter), // dutyMeterから値をR0にロード
    M_BL(NEXT_PWM_CYCLE, 1), // 次のPWMサイクルに分岐
    I_WR_REG(RTC_GPIO_OUT_W1TS_REG, MeterPWMBit, MeterPWMBit, 1), // PWMピンを高に設定
    M_LABEL(PWM_ON), // PWM ONラベルを定義
    M_BL(NEXT_PWM_CYCLE, 1), // 次のPWMサイクルに分岐
    // I_DELAY(8), // コメントアウトされた遅延命令
    I_SUBI(R0, R0, 1), // R0を1減算
    M_BX(PWM_ON), // PWM ONラベルに戻る

    M_LABEL(NEXT_PWM_CYCLE), // 次のPWMサイクルラベルを定義
    I_MOVI(R0, 0), // R0に0を移動
    I_LD(R0, R0, RTC_dutyMeter), // dutyMeterから値をR0にロード
    I_MOVI(R1, 100), // R1に100を移動
    I_SUBR(R0, R1, R0), // R0 = R1 - R0
    M_BL(END_PWM_CYCLE, 1), // END_PWM_CYCLEラベルに分岐
    I_WR_REG(RTC_GPIO_OUT_W1TC_REG, MeterPWMBit, MeterPWMBit, 1), // PWMピンを低に設定
    M_LABEL(PWM_OFF), // PWM OFFラベルを定義
    M_BL(END_PWM_CYCLE, 1), // END_PWM_CYCLEラベルに分岐
    // I_DELAY(8), // コメントアウトされた遅延命令
    I_SUBI(R0, R0, 1), // R0を1減算
    M_BX(PWM_OFF), // PWM OFFラベルに戻る
    M_LABEL(END_PWM_CYCLE), // END_PWMサイクルラベルを定義

    I_SUBI(R3, R3, 1), // R3を1減算
    I_MOVR(R0, R3), // R3をR0に移動
    M_BGE(RUN_PWM, 1), // R3 >= 0の場合、RUN_PWMに分岐

    I_MOVI(R1, 0), // R1に0を移動
    I_LD(R1, R1, RTC_dutyMeter), // dutyMeterから値をR1にロード
    I_MOVI(R0, 0), // R0に0を移動
    I_LD(R0, R0, RTC_dir), // dirから値をR0にロード

    M_BGE(POSITIVE_DIR, 1), // R0 >= 0の場合、POSITIVE_DIRに分岐

    I_MOVR(R0, R1), // R1をR0に移動
    M_BGE(DEC_DUTY, 1), // R1 >= 0の場合、DEC_DUTYに分岐
    I_MOVI(R3, 0), // R3に0を移動
    I_MOVI(R2, 1), // R2に1を移動
    I_ST(R2, R3, RTC_dir), // R2の値をdirに保存
    M_BX(INC_DUTY), // INC_DUTYラベルに分岐
    M_LABEL(DEC_DUTY), // DEC_DUTYラベルを定義
    I_SUBI(R0, R0, 2), // R0を2減算
    I_MOVI(R2, 0), // R2に0を移動
    I_ST(R0, R2, RTC_dutyMeter), // R0の値をdutyMeterに保存
    M_BX(INIFINITE_LOOP), // 無限ループラベルに戻る

    M_LABEL(POSITIVE_DIR), // POSITIVE_DIRラベルを定義
  
    I_MOVR(R0, R1), // R1をR0に移動
    M_BL(INC_DUTY, 100), // INC_DUTYラベルに分岐（パラメータ100）
    I_MOVI(R2, 0), // R2に0を移動
    I_ST(R2, R2, RTC_dir), // R2の値をdirに保存
    M_BX(DEC_DUTY), // DEC_DUTYラベルに分岐
    M_LABEL(INC_DUTY), // INC_DUTYラベルを定義
    I_ADDI(R0, R0, 2), // R0を2加算
    I_MOVI(R2, 0), // R2に0を移動
    I_ST(R0, R2, RTC_dutyMeter), // R0の値をdutyMeterに保存
  
    M_BX(INIFINITE_LOOP), // 無限ループラベルに戻る
  };
  // ULPプログラムを実行
  size_t size = sizeof(ulp_prog) / sizeof(ulp_insn_t); // ULPプログラムのサイズを計算
  ulp_process_macros_and_load(ULP_START_OFFSET, ulp_prog, &size); // ULPプログラムをロード
  esp_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_ON); // RTC周辺機器の電力管理を設定
  ulp_run(ULP_START_OFFSET); // ULPプログラムを開始
}

void setup() { // Arduinoセットアップ関数
  Serial.begin(115200); // シリアル通信を115200ボーレートで初期化

  ulp_setup(); // ULPセットアップ関数を呼び出し
  Serial.printf("\nスムーズな点滅を開始しました。遅延: %ld\n", *fadeCycleDelay); // 起動情報を出力

  if (*fadeCycleDelay < 195) { // fadeCycleDelayが195未満の場合
    *fadeCycleDelay += 10; // fadeCycleDelayを増加
  } else {
    *fadeCycleDelay = 5; // それ以外の場合、fadeCycleDelayを5にリセット
  }
  Serial.println("ディープスリープに入ります"); // ディープスリープ情報を出力
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR /*/ 4*/); // タイマー起床を設定
  esp_deep_sleep_start(); // ディープスリープに入る
}

void loop() { // Arduinoループ関数
  // 空のループ
}
```
</TabItem>

</Tabs>

:::tip
ディープスリープモードに入った後にプログラムを書き込み直すには、ブートボタンを押し続けながらリセットボタンを押してESP32を再起動してください。
:::

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/deep.png" style={{width:700, height:'auto'}}/></div>

## ライトスリープ

### 概要

ライトスリープモードは、ESP32のもう一つの低消費電力モードであり、迅速な応答時間を維持しながらエネルギーを節約することができます。このモードでは、CPUコアは停止しますが、RAMや一部の周辺機器は電源が入ったままなので、特定のイベントに応じて迅速にウェイクアップすることが可能です。

ライトスリープは、低消費電力を必要としながらもWiFiやBluetoothへの接続を維持する必要があるアプリケーションに最適です。このモードでは、無線通信モジュールをアクティブな状態に保つことができます。

### ウェイクアップ方法

- **タイマーウェイクアップ:** 指定された時間経過後にデバイスをウェイクアップさせ、定期的なタスクを実行できます。
- **外部割り込みウェイクアップ:** ボタンの押下や他のハードウェア割り込みなどの外部信号によってESP32をウェイクアップできます。
- **ネットワークアクティビティウェイクアップ:** 受信したネットワークパケットに応じてデバイスをウェイクアップさせ、アクティブ状態を維持せずに効率的な通信を可能にします。
- **GPIOウェイクアップ:** 特定のGPIOピンを設定して、状態の変化や信号が発生した際にデバイスをライトスリープからウェイクアップさせることができます。

### コード実現

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

- FreeRTOSライブラリをインクルードします。

```cpp
const int sleepTime = 10000; 
const int ledPin = LED_BUILTIN; 
```

- スリープ時間を10秒に設定します。
- 内蔵LEDピンを使用します。

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

- `vTaskDelay(pdMS_TO_TICKS(1000));` LEDを1秒間点灯させます。
- `vTaskDelete(NULL);` 現在のタスクを削除します。

```cpp
esp_sleep_enable_timer_wakeup(sleepTime * 1000);
Serial.println("Going to sleep now..."); 
esp_light_sleep_start(); 
xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL); 
delay(1000); 
```

- `esp_sleep_enable_timer_wakeup(sleepTime * 1000);` タイマーを設定してウェイクアップします。
- `esp_light_sleep_start();` ライトスリープモードに入ります。
- `xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);` LED制御タスクを作成します。

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light_led.gif" style={{width:300, height:'auto'}}/></div>

## モデムスリープ

### はじめに

モデムスリープモードは、ESP32のもう一つの重要な低消費電力モードであり、ディープスリープモードとは異なります。モデムスリープモードは、主にESP32の無線通信モジュールを最適化するために設計されています。

このモードでは、ESP32のWiFi/Bluetoothモジュールがスリープ状態に入り、CPUコアはアクティブなままです。これにより、ESP32は一定の無線接続を維持しながら、消費電力を大幅に削減することができます。

### ウェイクアップ方法

- タイマーウェイクアップ

- 外部割り込みウェイクアップ

- タスクウェイクアップ

- ネットワークアクティビティウェイクアップ

### コード実現

```cpp
#include "WiFi.h"

void setup() {
    Serial.begin(115200);
    Serial.println("WiFiに接続中...");

    WiFi.begin("****", "****");

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("接続中...");
    }
    Serial.println("WiFiに接続しました！");
 
    WiFi.setSleep(true); 
    Serial.println("モデムスリープが有効になりました。");
}

void loop() {

    Serial.println("実行中...");

    delay(5000);

    WiFi.setSleep(false); 
    Serial.println("モデムスリープが無効になりました。WiFiがアクティブです。");

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("WiFiにまだ接続されています。");
    } else {
        Serial.println("WiFiが切断されました。");
    }

    delay(5000);
    WiFi.setSleep(true); 
    Serial.println("モデムスリープが有効になりました。");
}
```

### 詳細な説明
```cpp
#include "WiFi.h"
```
- WiFi機能を有効にするためにWiFiライブラリをインクルードします。

```cpp
Serial.println("WiFiに接続中...");
```
- WiFi接続の開始を示すメッセージを出力します。

```cpp
WiFi.begin("****", "****");
```
- 指定されたWiFiネットワークへの接続を開始します。

```cpp
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("接続中...");
    }
    Serial.println("WiFiに接続しました！");
```
- WiFiに正常に接続されるまでループします。

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
- 再びモデムスリープモードを有効にします。

### 結果表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light.png" style={{width:700, height:'auto'}}/></div>



## スリープ機能の応用

上記の簡単な例を基に、次はこれらのスリープ機能をESP32 S3 Senseセンサーでさらに活用してみましょう。

### ソフトウェア準備

この記事を始める前に、XIAO ESP32S3 Senseのすべてのハードウェア機能をまだ使用していない場合は、いくつかのソフトウェアインストール準備を完了していることを確認してください。

以下は3つの機能の紹介で、詳細は以下のリンクから確認できます：

- [マイクの使用](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/): XIAO ESP32S3 Senseのマイクを使用して周囲の音量をキャプチャし、音声を記録する方法を学びます。

- [MicroSD](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/): MicroSDカードをデータストレージに使用する方法を理解し、プロジェクトでファイルを保存および取得できるようにします。

- [カメラの使用](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/): XIAO ESP32S3 Senseのカメラモジュールを使用して写真を撮影し、ビデオを記録する方法を習得します。


### コード実現


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
    Serial.println("カメラフレームバッファの取得に失敗しました");
    return;
  }
  writeFile(SD, fileName, fb->buf, fb->len);
  
  esp_camera_fb_return(fb);

  Serial.println("写真がファイルに保存されました");
}

void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("ファイルを書き込み中: %s\r\n", path);

    File file = fs.open(path, FILE_WRITE);
    if (!file) {
        Serial.println("ファイルの書き込み用オープンに失敗しました");
        return;
    }
    if (file.write(data, len) == len) {
        Serial.println("ファイルが書き込まれました");
    } else {
        Serial.println("書き込みに失敗しました");
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
    Serial.printf("カメラの初期化に失敗しました。エラーコード: 0x%x", err);
    return;
  }

  camera_sign = true; 

  if (!SD.begin(21)) {
    Serial.println("カードのマウントに失敗しました");
    return;
  }
  
  uint8_t cardType = SD.cardType();
  
  if (cardType == CARD_NONE) {
    Serial.println("SDカードが接続されていません");
    return;
  }

  Serial.print("SDカードの種類: ");
  if (cardType == CARD_MMC) {
    Serial.println("MMC");
  } else if (cardType == CARD_SD) {
    Serial.println("SDSC");
  } else if (cardType == CARD_SDHC) {
    Serial.println("SDHC");
  } else {
    Serial.println("不明");
  }

  sd_sign = true; 

  Serial.println("写真撮影が間もなく始まります。準備してください。");
}

void loop() {
  if (camera_sign && sd_sign) {
    unsigned long now = millis();
  
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("写真を保存しました: %s\r\n", filename);
      Serial.println("10秒間ディープスリープに入ります...");
      
      esp_sleep_enable_timer_wakeup(10000000); 
      esp_deep_sleep_start(); 
      
    }
  }
}
```

### 詳細な説明

このコードは、ESP32カメラモジュールを使用した画像キャプチャシステムを実装しており、60秒ごとに自動的に写真を撮影し、SDカードに保存します。`void setup()`関数では、カメラとSDカードが初期化され、デバイスの状態が確認されます。`void loop()`関数では、カメラが写真を撮影できるかどうかを確認し、条件が満たされた場合は`photo_save()`関数を呼び出して画像を保存します。その後、エネルギーを節約するために10秒間ディープスリープ状態に入ります。

</TabItem>

<TabItem value="SleepApplication2" label="ライトスリープ" default>

```cpp
#include <ESP_I2S.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

I2SClass I2S;

const int sleepTime = 10000;

void i2sTask(void *pvParameters) {
  Serial.println("データ収集を開始します");
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
    Serial.println("I2Sの初期化に失敗しました！");
    while (1);
  }
}

void loop() {
  esp_sleep_enable_timer_wakeup(sleepTime * 1000);
  xTaskCreate(i2sTask, "I2Sタスク", 2048, NULL, 1, NULL);
  
  Serial.println("スリープ状態に入ります...");
  esp_light_sleep_start();

  delay(1000);
}
```

### 詳細な説明

このコードは、I2Sインターフェースを使用してオーディオデータをキャプチャする機能を実装しています。`void setup()`関数では、シリアルポートとI2Sインターフェースが初期化されます。`void loop()`関数では、ウェイクアップタイマーが有効化され、`void i2sTask(void *pvParameters)`タスクが作成されます。このタスクはオーディオサンプルを読み取り、有効なデータを毎秒出力します。タスクが10回実行された後、3秒間遅延し、自身を削除します。

</TabItem>

<TabItem value="SleepApplication3" label="モデムスリープ" default>

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
    Serial.printf("カメラの初期化に失敗しました。エラーコード: 0x%x", err);
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
  Serial.println("WiFi接続完了");

  startCameraServer();

  Serial.print("カメラ準備完了！以下のURLで接続してください: 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("'");
}

void loop() {
  delay(10000);

  if (WiFi.getSleep()) {
    Serial.println("WiFiはスリープモードです。");
  } else {
    Serial.println("WiFiはアクティブです。");
  }

  if (millis() - lastCameraOperationTime > sleepDelay) {
    WiFi.setSleep(true);
    Serial.println("カメラ操作がありません。WiFiをスリープモードに設定しました。");
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

このコードは、ESP32カメラモジュールを使用して画像をキャプチャし、Wi-Fiを介して接続する機能を実装しています。`void setup()`関数では、シリアルポート、カメラ、およびWi-Fi接続が初期化されます。初期化が成功すると、プログラムはユーザーが接続するためのWi-Fiアドレスを出力します。`void loop()`関数では、10秒ごとにWi-Fiの状態を確認し、カメラ操作がない場合はWi-Fiをスリープモードに設定してエネルギーを節約します。`cameraOperation()`関数を呼び出すたびに、最後の操作時間が更新され、イベント中にWi-Fi接続が維持されます。

</TabItem>

</Tabs>

:::tip
これらのコードは直接使用することはできません。カメラに関するヘッダーファイルを追加する必要があります。上記のXIAO ESP32 S3の例を参照してください。
:::

## 結論として

### Deep Sleep モードを使用する理由
機能性を損なうことなく電力消費を最大限に抑えることで、デバイスのバッテリー寿命を延ばすことができます。  
適したシナリオ：バッテリー寿命が重要なリモートセンサーノード、ウェアラブルデバイス、その他の低消費電力IoTデバイスなどのアプリケーション。ウェイクアップ時間が比較的遅いものの、このトレードオフは価値があります。

### Modem Sleep モードを使用する理由
ネットワーク接続を維持しながら、ワイヤレス通信モジュールの電力消費を最適化します。  
適したシナリオ：ネットワーク接続を維持しつつ低消費電力が求められる、断続的に動作するIoTデバイスなどのアプリケーション。Modem Sleepは、ワイヤレスモジュールの電力消費を大幅に削減しつつ、高速なウェイクアップ応答を提供します。

### まとめ
これら3つのスリープモードは、開発者に対して異なる電力/性能のトレードオフオプションを提供し、アプリケーションの具体的な要件に基づいて柔軟に選択できます。バッテリー寿命が求められるデバイスにはDeep Sleepモードが適しており、ネットワーク接続を維持する必要があるIoTデバイスにはModem Sleepモードが最適な選択です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>