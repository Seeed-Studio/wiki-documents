---
description: Zigbee を介して Seeed Studio IoT Button を Home Assistant に接続する
title: Zigbee を介して Seeed Studio IoT Button を Home Assistant に接続する
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /seeed_iot_button_with_zigbee
sku: 113110044
last_update:
  date: 03/14/2025
  author: Citric
createdAt: '2025-03-14'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/seeed_iot_button_with_zigbee/
---

# Zigbee を介して Seeed Studio IoT Button を Home Assistant に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

このチュートリアルでは、Zigbee を使用して Seeed Studio IoT Button を Home Assistant に接続する方法を紹介します。Seeed Studio IoT Button は Zigbee 機能を備えた ESP32-C6 チップを内蔵しており、スマートホーム向けの多用途なデバイスです。Zigbee ファームウェアの書き込み方法、Home Assistant とのペアリング方法、さらに Arduino 開発によるボタン動作のカスタマイズ方法まで学ぶことができます。

## 必要なもの

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
      <th>Zigbee コーディネーター（例：Home Assistant Connect ZBT-1）</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio IoT Button は ESP32-C6 チップを内蔵した多用途なスマートボタンです。単体で完結したデバイスであり、Zigbee を介して Home Assistant と連携させることで、さまざまなデバイスの制御やオートメーションのトリガーとして利用できます。ESP32-C6 チップにより、低消費電力かつ信頼性の高い接続が可能です。

## 機能概要（最新ファームウェアに基づく）

- **マルチアクションボタン検出**
  - シングル、ダブル、トリプルクリック。
  - 短い長押し（1〜5 秒間押し続ける）。
  - 長押し（5 秒以上押し続ける）で Zigbee のファクトリーリセットを実行。
  - Zigbee コーディネーターに接続されている間は、ボタン操作がリアルタイムで報告されます。未接続時に記録された押下は、再接続後にまとめて報告されます。

- **4 つの Zigbee エンドポイント**
  - **エンドポイント 10：** 物理ボタンのリアルタイム状態（押下中はオン、離すとオフ）を反映するメインのバイナリセンサー。
  - **エンドポイント 11：** **シングルクリック**でトグルされる仮想スイッチ。
  - **エンドポイント 12：** **ダブルクリック**でトグルされる仮想スイッチ。
  - **エンドポイント 13：** **短い長押し**でトグルされる仮想スイッチ。

- **バッテリー監視（IoT Button V2 のみ）**
  - ADC を介してバッテリー電圧を読み取り、指数移動平均（EMA）フィルタを適用して滑らかで安定した値を取得します。
  - 電圧（0.01V 単位）とバッテリー残量（％）の両方を Zigbee に報告します。
  - バッテリー残量が少ない状態（20％未満）では赤色 LED インジケーターが点灯します。

- **LED フィードバック**
  - RGB WS2812 LED が、呼吸、点滅、レインボーなどのエフェクトでクリック操作に対する視覚的フィードバックを提供します。
  - 青色ステータス LED は Zigbee 接続状態を示します。
  - 赤色ステータス LED（V2 のみ）はバッテリー残量低下を示します。

- **電源管理**
  - Zigbee コーディネーターに接続されている場合は約 30 秒、未接続の場合は約 2 分間操作がないと自動的にスリープします。
  - V1 ではライトスリープ、V2 では RTC 状態保持付きのディープスリープを利用し、ボタンクリック状態が失われないようにします。
  - ボタンが押されるとスリープから即座に復帰します。

## Arduino を使ったカスタム Zigbee ファームウェア開発

IoT Button の動作をカスタマイズしたい場合は、Arduino を使用して独自の Zigbee ファームウェアを開発できます。

### ステップ 1：ESP32-C6 用に Arduino IDE をセットアップする

1. 最新版の Arduino IDE をインストールします。
2. ESP32 ボードサポートを追加します：
    - **File > Preferences** に移動します。
    - 「Additional Boards Manager URLs」フィールドに `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` を追加します。
    - **Tools > Board > Boards Manager** に移動します。
    - 「esp32」を検索し、最新版をインストールします（**バージョン 3.2.1 以上**であることを確認してください）。

### ステップ 2：必要なライブラリをインストールする

IoT Button のファームウェアは、RGB エフェクト用に `FastLED` ライブラリを使用し、Zigbee 用には ESP32 Arduino パッケージに含まれる Espressif Zigbee SDK を使用します。`FastLED` ライブラリは Arduino ライブラリマネージャからインストールできます。

1. **Sketch > Include Library > Manage Libraries...** に移動します。

2. 「FastLED」を検索し、Daniel Garcia によるライブラリをインストールします。

### ステップ 3：Zigbee 開発用に Arduino IDE を設定する

1. 正しいボードを選択します：
    - **Tools > Board > ESP32 Arduino > XIAO ESP32C6**

2. Zigbee 設定を構成します：
    - **Tools > Zigbee Mode > Zigbee End Device**
    - **Tools > Partition Scheme > Zigbee 4MB with spiffs**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### ステップ 4：カスタムファームウェアを作成する

新しいファームウェアは自己完結型の Arduino スケッチです。IoT Button V1 と V2 の両ハードウェアをサポートし、高度なボタンイベント検出（シングル、ダブル、トリプルクリック、短押し／長押し）、バッテリー監視（V2）、豊富な LED フィードバック、そして FreeRTOS タスクを用いた堅牢な Zigbee 統合を備えています。

#### ハードウェアバージョンの選択

コードはデフォルトで **IoT Button V2** 向けにコンパイルされます。V1 向けにコンパイルするには、コード先頭の該当行のコメントを解除する必要があります：

:::caution device version
正しいデバイスバージョンを必ず確認してください。現在市場で入手可能な IoT Button はすべて V1 です。
:::

<details>

<summary>ここをクリックしてコード全体をプレビュー</summary>

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
// FastLED 3.10.7+ declares the RISC-V interrupt helpers with FL_NO_EXCEPT
// (= noexcept on ESP) in riscv.hpp but defines them without it in the new
// riscv.cpp.hpp, so any RISC-V build (ESP32-C3/C6) fails with "declaration
// ... has a different exception specifier". The mismatch is compiled inside
// FastLED's own unity-build unit (src/fl/build/platforms+.cpp), so a #define
// here only fixes the sketch unit -- the empty FL_NO_EXCEPT override must
// also be injected for every unit via the compile command line; CI does this
// with -DFL_NO_EXCEPT= in build.extra_flags (.github/workflows/ci.yml).
// The define below is kept for documentation and IDE builds; drop both once
// the mismatch is fixed upstream (FastLED#4869).
#define FL_NO_EXCEPT
#include <FastLED.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>
#include <esp_sleep.h>
#include "driver/rtc_io.h"
#include <Preferences.h>

// Release builds inject the published GitHub release tag as a token.
#define STRINGIFY_TOKEN(value) #value
#define STRINGIFY(value) STRINGIFY_TOKEN(value)
#ifndef FIRMWARE_VERSION
#define FIRMWARE_VERSION development
#endif

// Logging macro switch
#define ENABLE_LOGGING // Comment out to disable logging

#ifdef ENABLE_LOGGING
#define LOG_PRINTLN(x) Serial.println(x)
#define LOG_PRINTF(x, ...) Serial.printf(x, __VA_ARGS__)
#else
#define LOG_PRINTLN(x)
#define LOG_PRINTF(x, ...)
#endif

// #define IOT_BUTTON_V1  //Uncomment this line to select to compile the iot button v1 version
// #define IOT_BUTTON_V2  //Uncomment this line to select to compile the iot button v2 version

#if !defined(IOT_BUTTON_V1) && !defined(IOT_BUTTON_V2)
#define IOT_BUTTON_V2
#endif

#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)

/* Hardware Configuration */
#if defined(IOT_BUTTON_V1)
const uint8_t BUTTON_PIN = 9;
const uint8_t BLUE_LED_PIN = 2;
const uint8_t RGB_ENABLE_PIN = 18;
const uint8_t RGB_PIN = 19;
const uint8_t NUM_RGBS = 1;
#elif defined(IOT_BUTTON_V2)
const uint8_t BUTTON_PIN = 2;
const uint8_t BLUE_LED_PIN = 3;
const uint8_t RED_LED_PIN = 14;
const uint8_t RGB_ENABLE_PIN = 18;
const uint8_t RGB_PIN = 19;
const uint8_t NUM_RGBS = 1;
const uint8_t BATTERY_ADC_PIN = 1;
const uint8_t BATTERY_ENABLE_PIN = 0;
const int SAMPLE_COUNT = 10;
const float MIN_VOLTAGE = 2.75;
const float MAX_VOLTAGE = 4.2;
const float ALPHA = 0.1; // Smoothing factor for EMA
#endif

/* Button Configuration */
const uint32_t MULTI_CLICK_TIME = 300;             // Maximum time between clicks for multi-click (ms)
const uint32_t SHORT_LONG_PRESS_TIME = 1000;       // Minimum time for short long press (1 second)
const uint32_t LONG_PRESS_TIME = 5000;             // Minimum time for long press (5 seconds)
const uint32_t DEBOUNCE_TIME = 20;                 // Debounce time (ms)
const uint32_t SLEEP_TIMEOUT_DISCONNECTED = 2 * 60 * 1000; // 2 minutes when disconnected (for configuration) (ms)
const uint32_t SLEEP_TIMEOUT_CONNECTED = 30 * 1000; // 30 seconds when connected (ms)
const uint32_t REPORT_SPACING_TIME = 200;           // Reports carry the value at send time, so hold each replayed value (ms)

/* LED Configuration */
CRGB rgbs[NUM_RGBS];

/* Button Events */
enum class ButtonEvent
{
  PRESS,            // Pressed
  RELEASE,          // Released
  SINGLE_CLICK,     // Single click
  DOUBLE_CLICK,     // Double click
  TRIPLE_CLICK,     // Triple click
  SHORT_LONG_PRESS, // Short long press (1-5 seconds)
  LONG_PRESS,       // Long press (>5 seconds)
  ZIGBEE_CONNECTED  // Zigbee (re)connected; queued with button events so switch reports stay in order
};

/* Zigbee Configuration */
#define BUTTON_ENDPOINT 10
#define SWITCH1_ENDPOINT 11
#define SWITCH2_ENDPOINT 12
#define SWITCH3_ENDPOINT 13

class VersionedZigbeeBinary : public ZigbeeBinary
{
public:
  explicit VersionedZigbeeBinary(uint8_t endpoint) : ZigbeeBinary(endpoint) {}

  bool setSoftwareBuildId(const char *version)
  {
    const size_t versionLength = strlen(version);
    if (versionLength > ZB_MAX_NAME_LENGTH)
    {
      return false;
    }

    esp_zb_attribute_list_t *basicCluster =
        esp_zb_cluster_list_get_cluster(_cluster_list, ESP_ZB_ZCL_CLUSTER_ID_BASIC, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE);
    if (basicCluster == nullptr)
    {
      return false;
    }

    char zclVersion[ZB_MAX_NAME_LENGTH + 2] = {};
    zclVersion[0] = static_cast<char>(versionLength);
    memcpy(zclVersion + 1, version, versionLength);
    return esp_zb_basic_cluster_add_attr(basicCluster, ESP_ZB_ZCL_ATTR_BASIC_SW_BUILD_ID, zclVersion) == ESP_OK;
  }
};

class InitialStateZigbeeBinary : public ZigbeeBinary
{
public:
  explicit InitialStateZigbeeBinary(uint8_t endpoint) : ZigbeeBinary(endpoint) {}

  bool setInitialBinaryInput(bool input)
  {
    esp_zb_attribute_list_t *binaryInputCluster =
        esp_zb_cluster_list_get_cluster(_cluster_list, ESP_ZB_ZCL_CLUSTER_ID_BINARY_INPUT, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE);
    return binaryInputCluster != nullptr &&
           esp_zb_cluster_update_attr(binaryInputCluster, ESP_ZB_ZCL_ATTR_BINARY_INPUT_PRESENT_VALUE_ID, &input) == ESP_OK;
  }
};

VersionedZigbeeBinary zbIoTButton(BUTTON_ENDPOINT);
InitialStateZigbeeBinary zbSwitch1(SWITCH1_ENDPOINT);
InitialStateZigbeeBinary zbSwitch2(SWITCH2_ENDPOINT);
InitialStateZigbeeBinary zbSwitch3(SWITCH3_ENDPOINT);
bool buttonStatus = false;
RTC_DATA_ATTR bool switch1Status = false;
RTC_DATA_ATTR bool switch2Status = false;
RTC_DATA_ATTR bool switch3Status = false;
// Last switch states reported to the network, replayed on reconnect so offline changes arrive as transitions
RTC_DATA_ATTR bool switch1Reported = false;
RTC_DATA_ATTR bool switch2Reported = false;
RTC_DATA_ATTR bool switch3Reported = false;

/* Global Variables */
QueueHandle_t eventQueue;

Preferences preferences;
float voltageOffset = 0; // Default voltage offset value (positive: subtract if measured high, negative: add if measured low)

uint32_t pressStartTime = 0;
uint32_t lastReleaseTime = 0;
uint8_t clickCount = 0;
bool longPressTriggered = false;
bool clickSequenceActive = false; // Tracks if a click sequence is in progress
TaskHandle_t clickTimeoutTaskHandle = NULL;
uint32_t lastActivityTime = 0;  // Tracks last button activity for sleep
volatile bool isAwake = true;   // Tracks device awake/sleep state
bool lastConnected = false;     // Track previous Zigbee connection state
bool zigbeeInitialized = false; // Track Zigbee initialization status
bool zigbeeConnected = false; // Track Zigbee connection status for battery sampling
volatile bool zigbeeStatesSynced = false; // Button and switch states replayed since the last (re)connect
uint32_t pendingButtonPresses = 0;        // Presses not yet reported, e.g. the one that woke the device
bool disableSleep = false; // Flag to disable automatic sleep

#if defined(IOT_BUTTON_V2)
// RTC variables for button state persistence
RTC_DATA_ATTR uint32_t pressStartTimeRTC = 0;
RTC_DATA_ATTR uint32_t lastReleaseTimeRTC = 0;
RTC_DATA_ATTR uint8_t clickCountRTC = 0;
RTC_DATA_ATTR bool longPressTriggeredRTC = false;
RTC_DATA_ATTR bool clickSequenceActiveRTC = false;
RTC_DATA_ATTR float lastBatteryPercentageRTC = 100.0;

float batteryPercentage = 100.0;
float emaVoltage = 0.0;

#endif

#if defined(IOT_BUTTON_V2)
/********************* Battery Functions **************************/
void measureBattery()
{
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  vTaskDelay(50 / portTICK_PERIOD_MS); // Increased delay for ADC stabilization and gate delay

  // Take multiple samples and compute average
  float adcSum = 0;
  for (int i = 0; i < SAMPLE_COUNT; i++)
  {
    adcSum += analogRead(BATTERY_ADC_PIN);
    vTaskDelay(5 / portTICK_PERIOD_MS); // Small delay between samples
  }
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  float adcAverage = adcSum / SAMPLE_COUNT;
  float voltage = (adcAverage / 4095.0) * 3.3 * 4.0 + voltageOffset; // Apply divider ratio and calibration offset
  if (voltage < 0) voltage = 0; // Prevent negative voltage

  if (voltage < MIN_VOLTAGE)
  {
    emaVoltage = 0.0;
    batteryPercentage = 0.0;
    lastBatteryPercentageRTC = 0.0;
    LOG_PRINTF("Battery voltage: %.2fV (too low or not connected), EMA voltage: %.2fV, Percentage: %.2f%%\n",
               voltage, emaVoltage, batteryPercentage);
  }
  else
  {
    // Update EMA
    if (emaVoltage == 0.0)
    {
      emaVoltage = voltage;
    }
    else
    {
      emaVoltage = ALPHA * voltage + (1 - ALPHA) * emaVoltage;
    }

    // Calculate battery percentage from emaVoltage
    // Lookup table algorithm: precise mapping of lithium battery discharge curve
    float localBatteryPercentage;
    if (emaVoltage >= 4.15f) localBatteryPercentage = 100.0f;
    else if (emaVoltage >= 4.0f) localBatteryPercentage = 96.3f + (emaVoltage - 4.0f) * 24.5f;
    else if (emaVoltage >= 3.7f) localBatteryPercentage = 53.3f + (emaVoltage - 3.7f) * 143.5f;
    else if (emaVoltage >= 3.5f) localBatteryPercentage = 6.1f + (emaVoltage - 3.5f) * 235.7f;
    else if (emaVoltage >= 3.0f) localBatteryPercentage = (emaVoltage - 3.0f) * 12.3f;
    else localBatteryPercentage = 0.0f;

    // Clamp to 0-100 range
    localBatteryPercentage = constrain(localBatteryPercentage, 0.0f, 100.0f);

    // Anti-jitter logic: ensure numerical stability
    if (localBatteryPercentage > lastBatteryPercentageRTC && (localBatteryPercentage - lastBatteryPercentageRTC) < 5.0f) {
    batteryPercentage = lastBatteryPercentageRTC;
    } else {
        batteryPercentage = localBatteryPercentage;
        lastBatteryPercentageRTC = batteryPercentage;
    }

    LOG_PRINTF("Battery voltage: %.2fV, EMA voltage: %.2fV, Percentage: %.2f%% (stored: %.2f%%)\n",
               voltage, emaVoltage, localBatteryPercentage, batteryPercentage);
  }
}
#endif

/********************* FreeRTOS Tasks **************************/
void breathingLedTask(void *pvParameters)
{
  LOG_PRINTLN("Breathing LED");
  uint8_t hue = random8();    // Random color hue
  for (int i = 0; i < 1; i++) // one breathing cycle
  {
    // Brighten
    for (int brightness = 0; brightness <= 255; brightness += 5)
    {
      rgbs[0] = CHSV(hue, 255, brightness);
      FastLED.show();
      vTaskDelay(20 / portTICK_PERIOD_MS);
    }
    // Dim
    for (int brightness = 255; brightness >= 0; brightness -= 5)
    {
      rgbs[0] = CHSV(hue, 255, brightness);
      FastLED.show();
      vTaskDelay(20 / portTICK_PERIOD_MS);
    }
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
  vTaskDelete(NULL);
}

void blinkLedTask(void *pvParameters)
{
  LOG_PRINTLN("Blink LED");
  uint8_t rand = random8();
  for (int i = 0; i < 2; i++)
  {
    rgbs[0] = CHSV(rand, 255, 255); // Random color
    FastLED.show();
    vTaskDelay(200 / portTICK_PERIOD_MS);
    rgbs[0] = CRGB::Black;
    FastLED.show();
    vTaskDelay(200 / portTICK_PERIOD_MS);
  }
  vTaskDelete(NULL);
}

void rainbowLedTask(void *pvParameters)
{
  LOG_PRINTLN("Rainbow LED");
  for (int hue = 0; hue < 128; hue += 10)
  {
    rgbs[0] = CHSV(hue, 255, 255);
    FastLED.show();
    vTaskDelay(100 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
  vTaskDelete(NULL);
}

void clickTimeoutTask(void *pvParameters)
{
  uint32_t localClickCount = clickCount;
  uint32_t localLastReleaseTime = lastReleaseTime;

  while (millis() - localLastReleaseTime < MULTI_CLICK_TIME)
  {
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  ButtonEvent event;
  switch (localClickCount)
  {
  case 1:
    event = ButtonEvent::SINGLE_CLICK;
    break;
  case 2:
    event = ButtonEvent::DOUBLE_CLICK;
    break;
  case 3:
    event = ButtonEvent::TRIPLE_CLICK;
    break;
  default:
    vTaskDelete(NULL);
    return;
  }
  xQueueSend(eventQueue, &event, 0);

  clickCount = 0;
  clickSequenceActive = false;
  clickTimeoutTaskHandle = NULL;

  vTaskDelete(NULL);
}

// --- Button Task Refactor ---
static bool debounceButton(bool currentState, uint32_t currentTime, uint32_t &lastDebounceTime)
{
  if (currentTime - lastDebounceTime < DEBOUNCE_TIME)
  {
    vTaskDelay(1 / portTICK_PERIOD_MS);
    return true;
  }
  return false;
}

static void handleButtonPress(uint32_t currentTime)
{
  pressStartTime = currentTime;
  ButtonEvent event = ButtonEvent::PRESS;
  xQueueSend(eventQueue, &event, 0);
  lastActivityTime = millis();

  if (clickSequenceActive && (currentTime - lastReleaseTime <= MULTI_CLICK_TIME))
  {
    clickCount++;
    if (clickTimeoutTaskHandle != NULL)
    {
      vTaskDelete(clickTimeoutTaskHandle);
      clickTimeoutTaskHandle = NULL;
    }
  }
  else
  {
    clickCount = 1;
    clickSequenceActive = true;
  }
  longPressTriggered = false;
}

static void handleButtonRelease(uint32_t currentTime)
{
  uint32_t pressDuration = currentTime - pressStartTime;
  ButtonEvent event = ButtonEvent::RELEASE;
  xQueueSend(eventQueue, &event, 0);
  lastActivityTime = millis();

  if (!longPressTriggered)
  {
    if (pressDuration >= LONG_PRESS_TIME)
    {
      event = ButtonEvent::LONG_PRESS;
      longPressTriggered = true;
      clickSequenceActive = false;
      clickCount = 0;
      xQueueSend(eventQueue, &event, 0);
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
    }
    else if (pressDuration >= SHORT_LONG_PRESS_TIME)
    {
      event = ButtonEvent::SHORT_LONG_PRESS;
      longPressTriggered = true;
      clickSequenceActive = false;
      clickCount = 0;
      xQueueSend(eventQueue, &event, 0);
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
    }
    else
    {
      lastReleaseTime = currentTime;
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
      xTaskCreate(clickTimeoutTask, "ClickTimeout", 2048, NULL, 1, &clickTimeoutTaskHandle);
    }
  }
}

static void checkLongPress(uint32_t currentTime)
{
  if (currentTime - pressStartTime >= LONG_PRESS_TIME)
  {
    ButtonEvent event = ButtonEvent::LONG_PRESS;
    longPressTriggered = true;
    clickSequenceActive = false;
    clickCount = 0;
    xQueueSend(eventQueue, &event, 0);
    lastActivityTime = millis();
    if (clickTimeoutTaskHandle != NULL)
    {
      vTaskDelete(clickTimeoutTaskHandle);
      clickTimeoutTaskHandle = NULL;
    }
  }
}

void buttonTask(void *pvParameters)
{
  uint32_t lastDebounceTime = 0;
  bool lastState = false;

  // Check if woken up by button press
  if (esp_sleep_get_wakeup_cause() == ESP_SLEEP_WAKEUP_EXT1)
  {
    bool currentState = (digitalRead(BUTTON_PIN) == LOW);
    if (currentState)
    {
      handleButtonPress(millis());
    }
  }

  while (1)
  {
    bool currentState = (digitalRead(BUTTON_PIN) == LOW);
    uint32_t currentTime = millis();

    if (debounceButton(currentState, currentTime, lastDebounceTime))
      continue;

    if (currentState != lastState)
    {
      lastDebounceTime = currentTime;
      lastState = currentState;
      if (currentState)
      {
        handleButtonPress(currentTime);
      }
      else
      {
        handleButtonRelease(currentTime);
      }
    }
    else if (currentState && !longPressTriggered)
    {
      checkLongPress(currentTime);
    }

    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}

static void reportSwitchState(ZigbeeBinary &zbSwitch, bool state, bool &reportedState)
{
  zbSwitch.setBinaryInput(state);
  if (zbSwitch.reportBinaryInput())
  {
    reportedState = state;
  }
}

void mainTask(void *pvParameters)
{
  ButtonEvent event;
  while (1)
  {
    if (xQueueReceive(eventQueue, &event, portMAX_DELAY) == pdTRUE)
    {
      switch (event)
      {
      case ButtonEvent::PRESS:
        if (buttonStatus == false)
        {
          buttonStatus = true;
          LOG_PRINTLN("Button Pressed");
          if (zigbeeStatesSynced && Zigbee.connected())
          {
            zbIoTButton.setBinaryInput(buttonStatus);
            zbIoTButton.reportBinaryInput();
          }
        }
        break;

      case ButtonEvent::RELEASE:
        if (buttonStatus == true)
        {
          buttonStatus = false;
          LOG_PRINTLN("Button Released");
          if (zigbeeStatesSynced && Zigbee.connected())
          {
            zbIoTButton.setBinaryInput(buttonStatus);
            zbIoTButton.reportBinaryInput();
          }
          else
          {
            pendingButtonPresses++;
          }
        }
        break;

      case ButtonEvent::SINGLE_CLICK:
        LOG_PRINTLN("Single Click");
        switch1Status = !switch1Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch1, switch1Status, switch1Reported);
        }
        xTaskCreate(breathingLedTask, "BreathingLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::DOUBLE_CLICK:
        LOG_PRINTLN("Double Click");
        switch2Status = !switch2Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch2, switch2Status, switch2Reported);
        }
        xTaskCreate(blinkLedTask, "BlinkLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::TRIPLE_CLICK:
        LOG_PRINTLN("Triple Click");
        if (zigbeeInitialized && Zigbee.connected())
        {
          // Add any specific Zigbee action here if needed
        }
        break;

      case ButtonEvent::SHORT_LONG_PRESS:
        LOG_PRINTLN("Short Long Press");
        switch3Status = !switch3Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch3, switch3Status, switch3Reported);
        }
        xTaskCreate(rainbowLedTask, "RainbowLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::LONG_PRESS:
        LOG_PRINTLN("Long Press\nReset Zigbee");
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        if (zigbeeInitialized)
        {
          Zigbee.factoryReset();
        }
        break;

      case ButtonEvent::ZIGBEE_CONNECTED:
      {
        // Replay last reported states first so offline changes, like the wake click, arrive as transitions
        zbSwitch1.setBinaryInput(switch1Reported);
        zbSwitch1.reportBinaryInput();
        zbSwitch2.setBinaryInput(switch2Reported);
        zbSwitch2.reportBinaryInput();
        zbSwitch3.setBinaryInput(switch3Reported);
        zbSwitch3.reportBinaryInput();
        bool switchesChanged =
            switch1Status != switch1Reported || switch2Status != switch2Reported || switch3Status != switch3Reported;
        if (pendingButtonPresses > 0 || switchesChanged)
        {
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        // Presses come before the switch changes they caused, matching the order while connected
        for (; pendingButtonPresses > 0; pendingButtonPresses--)
        {
          zbIoTButton.setBinaryInput(true);
          zbIoTButton.reportBinaryInput();
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
          zbIoTButton.setBinaryInput(false);
          zbIoTButton.reportBinaryInput();
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        if (buttonStatus)
        {
          zbIoTButton.setBinaryInput(true);
          zbIoTButton.reportBinaryInput();
        }
        if (switch1Status != switch1Reported)
        {
          reportSwitchState(zbSwitch1, switch1Status, switch1Reported);
        }
        if (switch2Status != switch2Reported)
        {
          reportSwitchState(zbSwitch2, switch2Status, switch2Reported);
        }
        if (switch3Status != switch3Reported)
        {
          reportSwitchState(zbSwitch3, switch3Status, switch3Reported);
        }
        if (switchesChanged)
        {
          // Keep a click queued during the sync from replacing these values before they are sent
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        zigbeeStatesSynced = true;
        break;
      }
      }
    }
  }
}

#if defined(IOT_BUTTON_V1)
void ledTask(void *pvParameters)
{
  pinMode(BLUE_LED_PIN, OUTPUT);
  while (1)
  {
    if (isAwake)
    {
      if (!zigbeeInitialized || !Zigbee.connected()) // Blink when not connected or not initialized
      {
        digitalWrite(BLUE_LED_PIN, LOW); // On
        vTaskDelay(500 / portTICK_PERIOD_MS);
        digitalWrite(BLUE_LED_PIN, HIGH); // Off
        vTaskDelay(500 / portTICK_PERIOD_MS);
      }
      else
      {
        digitalWrite(BLUE_LED_PIN, LOW); // On when connected
      }
    }
    else
    {
      digitalWrite(BLUE_LED_PIN, HIGH); // Off during sleep
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}
#elif defined(IOT_BUTTON_V2)
void ledTask(void *pvParameters)
{
  pinMode(BLUE_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  bool ledState = false;

  while (1)
  {
    if (isAwake)
    {
      bool isLowBattery = (batteryPercentage < 20.0);
      bool isConnected = zigbeeInitialized && Zigbee.connected();
      uint8_t activeLedPin = isLowBattery ? RED_LED_PIN : BLUE_LED_PIN;
      uint8_t inactiveLedPin = isLowBattery ? BLUE_LED_PIN : RED_LED_PIN;

      if (isConnected)
      {
        digitalWrite(activeLedPin, LOW);
        digitalWrite(inactiveLedPin, HIGH);
      }
      else
      {
        ledState = !ledState;
        digitalWrite(activeLedPin, ledState ? LOW : HIGH);
        digitalWrite(inactiveLedPin, HIGH);
      }
    }
    else
    {
      digitalWrite(BLUE_LED_PIN, HIGH);
      digitalWrite(RED_LED_PIN, HIGH);
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}
#endif

#if defined(IOT_BUTTON_V2)
void batteryTask(void *pvParameters)
{
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);

  while (1)
  {
    measureBattery();
    if (zigbeeInitialized && Zigbee.connected())
    {
      zbIoTButton.setBatteryVoltage((uint8_t)(emaVoltage * 100)); // Unit: 0.01V
      zbIoTButton.setBatteryPercentage((uint8_t)batteryPercentage);
      zbIoTButton.reportBatteryPercentage();
    }
    vTaskDelay(30000 / portTICK_PERIOD_MS); // Check every 30 seconds
  }
}
#endif

void sleepTask(void *pvParameters)
{
  while (1)
  {
    uint32_t sleepTimeout = zigbeeConnected ? SLEEP_TIMEOUT_CONNECTED : SLEEP_TIMEOUT_DISCONNECTED;
    if (isAwake && !disableSleep && (millis() - lastActivityTime > sleepTimeout))
    {
      LOG_PRINTLN("Entering sleep due to inactivity");
#if defined(IOT_BUTTON_V1)
      isAwake = false;
      digitalWrite(BLUE_LED_PIN, HIGH);
      esp_sleep_enable_gpio_wakeup();
      digitalWrite(BLUE_LED_PIN, HIGH); // Turn off LED
      gpio_wakeup_enable((gpio_num_t)BUTTON_PIN, GPIO_INTR_LOW_LEVEL);
      digitalWrite(RGB_ENABLE_PIN, LOW);
      esp_light_sleep_start();
      digitalWrite(RGB_ENABLE_PIN, HIGH);
      LOG_PRINTLN("Woke up from light sleep");
      isAwake = true;
      digitalWrite(BLUE_LED_PIN, LOW); // Turn on LED
#elif defined(IOT_BUTTON_V2)
      // Save button state to RTC memory
      pressStartTimeRTC = pressStartTime;
      lastReleaseTimeRTC = lastReleaseTime;
      clickCountRTC = clickCount;
      longPressTriggeredRTC = longPressTriggered;
      clickSequenceActiveRTC = clickSequenceActive;

      digitalWrite(BLUE_LED_PIN, HIGH);
      digitalWrite(RED_LED_PIN, HIGH);
      digitalWrite(RGB_PIN, LOW);
      digitalWrite(RGB_ENABLE_PIN, LOW);
      static gpio_num_t WAKEUP_GPIO = (gpio_num_t)BUTTON_PIN;
      esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_LOW);
      esp_deep_sleep_start();
#endif
    }
    vTaskDelay(10000 / portTICK_PERIOD_MS); // Check every 10 seconds
  }
}

/********************* Zigbee Functions **************************/
void onZigbeeConnected()
{
  if (!zigbeeInitialized)
  {
    return;
  }
#if defined(IOT_BUTTON_V2)
  measureBattery();                                           // Ensure latest battery data
  zbIoTButton.setBatteryVoltage((uint8_t)(emaVoltage * 100)); // Unit: 0.01V
  zbIoTButton.setBatteryPercentage((uint8_t)batteryPercentage);
  zbIoTButton.reportBatteryPercentage();
#endif
  ButtonEvent event = ButtonEvent::ZIGBEE_CONNECTED;
  xQueueSend(eventQueue, &event, portMAX_DELAY);
}

void zigbeeSetupTask(void *pvParameters)
{
  zbIoTButton.addBinaryInput();
  zbIoTButton.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbIoTButton.setBinaryInputDescription("Button");
  zbSwitch1.addBinaryInput();
  zbSwitch1.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch1.setBinaryInputDescription("Switch1");
  zbSwitch2.addBinaryInput();
  zbSwitch2.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch2.setBinaryInputDescription("Switch2");
  zbSwitch3.addBinaryInput();
  zbSwitch3.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch3.setBinaryInputDescription("Switch3");
  zbSwitch1.setInitialBinaryInput(switch1Reported);
  zbSwitch2.setInitialBinaryInput(switch2Reported);
  zbSwitch3.setInitialBinaryInput(switch3Reported);

  // Set Zigbee device information
#if defined(IOT_BUTTON_V1)
  zbIoTButton.setManufacturerAndModel("Seeed Studio", "IoT_Button");
#elif defined(IOT_BUTTON_V2)
  zbIoTButton.setManufacturerAndModel("Seeed Studio", "IoT Button V2");
  zbIoTButton.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);
#endif
  if (!zbIoTButton.setSoftwareBuildId(STRINGIFY(FIRMWARE_VERSION)))
  {
    LOG_PRINTLN("Failed to set Zigbee software build ID");
  }

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbIoTButton);
  Zigbee.addEndpoint(&zbSwitch1);
  Zigbee.addEndpoint(&zbSwitch2);
  Zigbee.addEndpoint(&zbSwitch3);
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 10000;

  Zigbee.setTimeout(10000); // Set timeout for Zigbee Begin to 10s (default is 30s)
  LOG_PRINTLN("Starting Zigbee...");
  if (!Zigbee.begin(&zigbeeConfig, false))
  {
    LOG_PRINTLN("Zigbee failed to start!");
    LOG_PRINTLN("Please try holding down the 5S key for a long time to reset zigbee");
    zigbeeInitialized = false;
  }
  else
  {
    LOG_PRINTLN("Zigbee started successfully!");
    zigbeeInitialized = true;
  }

  vTaskDelete(NULL); // Terminate the task after completion
}

/********************* Arduino Setup **************************/
void setup()
{
  Serial.begin(115200);

  LOG_PRINTLN("Zigbee IoT Button Starting...");

  // Initialize NVS and load voltage offset
  preferences.begin("iot_button", false);
  voltageOffset = preferences.getFloat("voltage_offset", 0);
  LOG_PRINTF("Loaded voltage offset: %.2f\n", voltageOffset);
#if defined(IOT_BUTTON_V2)
  // Restore button state from RTC memory
  pressStartTime = pressStartTimeRTC;
  lastReleaseTime = lastReleaseTimeRTC;
  clickCount = clickCountRTC;
  longPressTriggered = longPressTriggeredRTC;
  clickSequenceActive = clickSequenceActiveRTC;
#endif

  // Initialize button pin
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
#if defined(IOT_BUTTON_V2)
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
#endif

  // Initialize LED
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
  FastLED.setBrightness(50);

  // Create event queue
  eventQueue = xQueueCreate(10, sizeof(ButtonEvent));
  if (eventQueue == NULL)
  {
    LOG_PRINTLN("Failed to create event queue!");
    ESP.restart();
  }

#if defined(IOT_BUTTON_V2)
  // Check if woken up by button press and handle immediately
  if (esp_sleep_get_wakeup_cause() == ESP_SLEEP_WAKEUP_EXT1)
  {
    uint32_t currentTime = millis();
    if (digitalRead(BUTTON_PIN) == LOW)
    {
      handleButtonPress(currentTime);
    }
  }
#endif

  // Create FreeRTOS tasks
  xTaskCreate(buttonTask, "ButtonTask", 2048, NULL, 4, NULL);
  xTaskCreate(ledTask, "LedTask", 1024, NULL, 0, NULL);
  xTaskCreate(mainTask, "MainTask", 2048, NULL, 3, NULL);
  xTaskCreate(sleepTask, "SleepTask", 2048, NULL, 2, NULL);
  xTaskCreate(zigbeeSetupTask, "ZigbeeSetup", 2048, NULL, 1, NULL);
#if defined(IOT_BUTTON_V2)
  xTaskCreate(batteryTask, "BatteryTask", 2048, NULL, 1, NULL);
#endif
}

/********************* Serial Command Handling **************************/
void handleSerialCommand(String command)
{
  if (command.startsWith("set_offset "))
  {
    String valueStr = command.substring(11);
    float newOffset = valueStr.toFloat();
    voltageOffset = newOffset;
    preferences.putFloat("voltage_offset", voltageOffset);
    LOG_PRINTF("Voltage offset set to: %.2f\n", voltageOffset);
  }
  else if (command == "get_offset")
  {
    LOG_PRINTF("Current voltage offset: %.2f\n", voltageOffset);
  }
  else if (command == "disable_sleep")
  {
    disableSleep = true;
    Serial.println("Automatic sleep disabled");
  }
  else if (command == "enable_sleep")
  {
    disableSleep = false;
    Serial.println("Automatic sleep enabled");
  }
  else if (command == "help")
  {
    Serial.println("Available commands:");
    Serial.println("  set_offset <value>  - Set voltage calibration offset (e.g., set_offset -0.22 if measured voltage is high)");
    Serial.println("                        Positive value: subtract from measured voltage");
    Serial.println("                        Negative value: add to measured voltage");
    Serial.println("  get_offset          - Get current voltage offset");
    Serial.println("  disable_sleep       - Disable automatic sleep mode");
    Serial.println("  enable_sleep        - Enable automatic sleep mode");
    Serial.println("  help                - Show this help");
  }
  else
  {
    Serial.println("Unknown command. Type 'help' for available commands.");
  }
}

/********************* Arduino Loop **************************/
void loop()
{
  if (zigbeeInitialized)
  {
    bool currentConnected = Zigbee.connected();
    if (currentConnected && !lastConnected)
    {
      LOG_PRINTLN("Zigbee connected!");
      zigbeeConnected = true;
      onZigbeeConnected();
    }
    else if (!currentConnected && lastConnected)
    {
      LOG_PRINTLN("Zigbee disconnected!");
      zigbeeConnected = false;
      zigbeeStatesSynced = false;
    }
    lastConnected = currentConnected;
    if (!currentConnected)
    {
      LOG_PRINTLN("Zigbee not connected, retrying...");
      vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
    else
    {
      vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
  }
  else
  {
    vTaskDelay(1000 / portTICK_PERIOD_MS); // Keep loop running even if Zigbee fails
  }

  // Handle serial commands
  if (Serial.available())
  {
    String command = Serial.readStringUntil('\n');
    command.trim();
    handleSerialCommand(command);
  }
}
```

</details>

ドキュメントはコードの更新に追従できていない場合があります。最新の手順を入手するには、以下のボタンをクリックしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/Seeed_IoT_Button_Zigbee/Seeed_IoT_Button_Zigbee.ino" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Click Here 🖱️</font></span></strong>
    </a>
</div>

### ステップ 5: ファームウェアを書き込み、テストする

1. IoT Button を USB 経由でコンピュータに接続します。
2. Arduino IDE で正しいポートを選択します。
3. **Upload** ボタンをクリックします。
4. **Serial Monitor**（ボーレート 115200）を開き、デバッグ情報を確認します。
5. 書き込みが完了したら、ボタンはペアリングできる状態になります。

### ステップ 6: Home Assistant で Zigbee をセットアップする

IoT Button をペアリングする前に、Home Assistant で Zigbee コーディネーターをセットアップする必要があります：

1. **Zigbee コーディネーターをインストールする**: Home Assistant Connect ZBT-1 などの Zigbee コーディネーターを Home Assistant サーバーに接続します。
2. **Zigbee Home Automation (ZHA) をセットアップする**:
    - **Settings > Devices & Services** に移動します。
    - "**Add Integration**" をクリックし、"**Zigbee Home Automation**" を検索します。
    - 画面の指示に従って、コーディネーターで ZHA をセットアップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7: IoT Button を Home Assistant とペアリングする

1. Home Assistant で **Settings > Devices & Services > Zigbee Home Automation** に移動します。
2. Zigbee コーディネーターのデバイスをクリックします。
3. "**Add Device**" をクリックして、コーディネーターをペアリングモードにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4. IoT Button のボタンを 1 回押してウェイクアップし、ペアリングを開始します。ペアリングされない場合は、5 秒以上ボタンを押し続けてファクトリーリセットを実行し、ペアリングモードに入れてみてください。
5. Home Assistant は IoT Button を "**Seeed Studio IoT_Button**" として検出するはずです。
6. 画面の指示に従ってペアリングプロセスを完了します。バイナリセンサーと 3 つのスイッチを含む複数のエンティティを持つデバイスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 8: Home Assistant でオートメーションを作成する

ペアリングが完了したら、ボタンの動作に基づいてオートメーションを作成できます。ファームウェアは異なるクリックタイプを個別のスイッチとして公開するため、オートメーションの設定が簡単です。

1. **Settings > Automations & Scenes > Create Automation** に移動します。
2. トリガータイプとして "**Device**" を選択します。
3. デバイス一覧から IoT Button を探します。
4. 一覧から目的のトリガーを選択します。ZHA は異なるクリックをデバイスアクションとして公開します。例：
    - "Single press"（Endpoint 11 上の仮想スイッチ）
    - "Double press"（Endpoint 12 上の仮想スイッチ）
    - "Long press"（Endpoint 13 上の仮想スイッチ）
5. ボタンが押されたときに実行したいアクションを設定します。
6. オートメーションを保存します。

Home Assistant の YAML で **double click** によってライトをトグルするオートメーションの例：

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## まとめ

Zigbee 機能を備えた Seeed Studio IoT Button は、スマートホームを制御するための多用途で省電力な方法を提供します。ビルド済みファームウェアを使用する場合でも、独自のカスタムソリューションを開発する場合でも、このボタンは Home Assistant で複雑なオートメーションをトリガーするためのシンプルなインターフェースを提供します。

ESP32-C6 の内蔵 Zigbee 機能を活用することで、IoT Button はスマートホームエコシステムとの信頼性の高い接続を維持しながら、バッテリー駆動で長期間動作できます。

## トラブルシューティング

### Q1: バッテリーを交換した後、デバイスが頻繁に切断されてインターネットに接続できません。バッテリーが充電されていることは確認済みです

バッテリーを取り外した後、18650 バッテリーのチップ保護戦略により、正常に動作させるには、充電された USB 電源ケーブルで少しだけ活性化する必要があります。

## リソース

- **[GITHUB]** [Seeed IoT Button Github Repository](https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
