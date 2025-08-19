---
description: Connect Seeed Studio IoT Button To Home Assistant via Zigbee
title: Connect Seeed Studio IoT Button To Home Assistant via Zigbee
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /seeed_iot_button_with_zigbee
last_update:
  date: 03/14/2025
  author: Citric
---

# Connect Seeed Studio IoT Button To Home Assistant via Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

In this tutorial, we will show you how to connect the Seeed Studio IoT Button to Home Assistant using Zigbee. The Seeed Studio IoT Button features a built-in ESP32-C6 chip with Zigbee functionality, making it a versatile device for your smart home. You'll learn how to flash the Zigbee firmware, pair it with Home Assistant, and even customize the button's behavior through Arduino development.

## Materials Required

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
      <th>Zigbee Coordinator (e.g., Home Assistant Connect ZBT-1)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

The Seeed Studio IoT Button is a versatile smart button with a built-in ESP32-C6 chip. It's a complete, standalone device that can be integrated with Home Assistant via Zigbee to control various devices and trigger automations. With its ESP32-C6 chip, it offers low power consumption and reliable connectivity.

## Functional Overview (based on the latest firmware)

- **Multi-action button detection**
  - Single, double, and triple click.
  - Short long-press (holding for 1-5 seconds).
  - Long-press (holding for > 5 seconds) triggers a Zigbee factory reset.
  - Immediate press and release events are reported for real-time automations.

- **Four Zigbee Endpoints**
  - **Endpoint 10:** A main binary sensor that reflects the physical button's real-time state (on for pressed, off for released).
  - **Endpoint 11:** A virtual switch toggled by a **single click**.
  - **Endpoint 12:** A virtual switch toggled by a **double click**.
  - **Endpoint 13:** A virtual switch toggled by a **short long-press**.

- **Battery Monitoring (IoT Button V2 only)**
  - Reads battery voltage via ADC and applies an Exponential Moving Average (EMA) filter for smooth, stable readings.
  - Reports both voltage (in 0.01V units) and battery percentage to Zigbee.
  - A low-battery status (< 20%) drives the red LED indicator.

- **LED Feedback**
  - An RGB WS2812 LED provides visual feedback (breathing, blink, rainbow effects) for click actions.
  - A blue status LED indicates the Zigbee connection status.
  - A red status LED (V2 only) indicates a low-battery condition.

- **Power Management**
  - Automatically enters sleep mode after 2 minutes of inactivity to conserve power.
  - Utilizes light-sleep for V1 and deep-sleep with RTC state retention for V2, ensuring button click states are not lost.
  - Wakes instantly from sleep upon a button press.

## Developing Custom Zigbee Firmware with Arduino

If you want to customize the behavior of your IoT Button, you can develop your own Zigbee firmware using Arduino.

### Step 1: Set Up Arduino IDE for ESP32-C6

1.  Install the latest version of Arduino IDE.
2.  Add ESP32 board support:
    -   Go to **File > Preferences**.
    -   Add `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` to the "Additional Boards Manager URLs" field.
    -   Go to **Tools > Board > Boards Manager**.
    -   Search for "esp32" and install the latest version (ensure it is **version 3.2.1 or above**).

### Step 2: Install Required Libraries

The IoT Button firmware uses the `FastLED` library for RGB effects and the Espressif Zigbee SDK, which is included in the ESP32 Arduino package. The `FastLED` library can be installed via the Arduino Library Manager.

1.  Go to **Sketch > Include Library > Manage Libraries...**.

2.  Search for "FastLED" and install the library by Daniel Garcia.

### Step 3: Configure Arduino IDE for Zigbee Development

1.  Select the correct board:
    -   **Tools > Board > ESP32 Arduino > ESP32C6 Dev Module**

2.  Configure Zigbee settings:
    -   **Tools > Zigbee Mode > Zigbee End Device**
    -   **Tools > Partition Scheme > Zigbee 4MB with spiffs**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### Step 4: Create Your Custom Firmware

The new firmware is a self-contained Arduino sketch. It supports both IoT Button V1 and V2 hardware, advanced button event detection (single, double, triple click, short/long press), battery monitoring (V2), rich LED feedback, and robust Zigbee integration using FreeRTOS tasks.

#### Hardware Version Selection

The code compiles for **IoT Button V2** by default. To compile for V1, you must uncomment the corresponding line at the top of the code:

<details>

<summary>Click here to preview the full code</summary>

```cpp
// #define IOT_BUTTON_V1  // Uncomment this line to select to compile the iot button v1 version
#define IOT_BUTTON_V2  // Comment out or remove this line if compiling for V1
```

#### Example Firmware

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include <FastLED.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>
#include <esp_sleep.h>
#include "driver/rtc_io.h"

// Logging macro switch
#define ENABLE_LOGGING  // Comment out to disable logging

#ifdef ENABLE_LOGGING
#define LOG_PRINTLN(x) Serial.println(x)
#define LOG_PRINTF(x, ...) Serial.printf(x, __VA_ARGS__)
#else
#define LOG_PRINTLN(x)
#define LOG_PRINTF(x, ...)
#endif

// #define IOT_BUTTON_V1  //Uncomment this line to select to compile the iot button v1 version
#define IOT_BUTTON_V2  //Uncomment this line to select to compile the iot button v2 version

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
const uint32_t INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2 minutes inactivity timeout (ms)

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
  LONG_PRESS        // Long press (>5 seconds)
};

/* Zigbee Configuration */
#define BUTTON_ENDPOINT 10
#define SWITCH1_ENDPOINT 11
#define SWITCH2_ENDPOINT 12
#define SWITCH3_ENDPOINT 13
ZigbeeBinary zbIoTButton = ZigbeeBinary(BUTTON_ENDPOINT);
ZigbeeBinary zbSwitch1 = ZigbeeBinary(SWITCH1_ENDPOINT);
ZigbeeBinary zbSwitch2 = ZigbeeBinary(SWITCH2_ENDPOINT);
ZigbeeBinary zbSwitch3 = ZigbeeBinary(SWITCH3_ENDPOINT);
bool buttonStatus = false;
RTC_DATA_ATTR bool switch1Status = false;
RTC_DATA_ATTR bool switch2Status = false;
RTC_DATA_ATTR bool switch3Status = false;

/* Global Variables */
QueueHandle_t eventQueue;

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

#if defined(IOT_BUTTON_V2)
// RTC variables for button state persistence
RTC_DATA_ATTR uint32_t pressStartTimeRTC = 0;
RTC_DATA_ATTR uint32_t lastReleaseTimeRTC = 0;
RTC_DATA_ATTR uint8_t clickCountRTC = 0;
RTC_DATA_ATTR bool longPressTriggeredRTC = false;
RTC_DATA_ATTR bool clickSequenceActiveRTC = false;

float emaVoltage = 0.0;
float batteryPercentage = 100.0;
#endif

void IRAM_ATTR button_isr()
{
  portYIELD_FROM_ISR(xTaskResumeFromISR(clickTimeoutTaskHandle));
}

void setupHardware()
{
  Serial.begin(115200);
#if defined(IOT_BUTTON_V1)
  pinMode(BLUE_LED_PIN, OUTPUT);
  digitalWrite(BLUE_LED_PIN, LOW);
  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
#elif defined(IOT_BUTTON_V2)
  pinMode(BLUE_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  digitalWrite(BLUE_LED_PIN, LOW);
  digitalWrite(RED_LED_PIN, LOW);
  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);
#endif
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void enterSleep()
{
  isAwake = false;
  LOG_PRINTLN("Entering sleep mode...");
  Serial.flush();
#if defined(IOT_BUTTON_V2)
  // Save button state to RTC memory before deep sleep
  pressStartTimeRTC = pressStartTime;
  lastReleaseTimeRTC = lastReleaseTime;
  clickCountRTC = clickCount;
  longPressTriggeredRTC = longPressTriggered;
  clickSequenceActiveRTC = clickSequenceActive;
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK(BUTTON_PIN), ESP_EXT1_WAKEUP_ALL_LOW);
  esp_deep_sleep_start();
#elif defined(IOT_BUTTON_V1)
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK(BUTTON_PIN), ESP_EXT1_WAKEUP_ALL_LOW);
  esp_light_sleep_start();
#endif
}

void wakeUp()
{
  isAwake = true;
  lastActivityTime = millis();
  LOG_PRINTLN("Woke up from sleep.");
#if defined(IOT_BUTTON_V2)
  // Restore button state from RTC memory after deep sleep
  pressStartTime = pressStartTimeRTC;
  lastReleaseTime = lastReleaseTimeRTC;
  clickCount = clickCountRTC;
  longPressTriggered = longPressTriggeredRTC;
  clickSequenceActive = clickSequenceActiveRTC;
#endif
}

void breathingEffect(CRGB color, int duration)
{
  uint32_t startTime = millis();
  while (millis() - startTime < duration)
  {
    float brightness = (exp(sin(millis() / 2000.0 * PI)) - 0.36787944) * 108.0;
    rgbs[0] = color;
    rgbs[0].nscale8_video(brightness);
    FastLED.show();
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
}

void blinkEffect(CRGB color, int times, int delayTime)
{
  for (int i = 0; i < times; i++)
  {
    rgbs[0] = color;
    FastLED.show();
    vTaskDelay(delayTime / portTICK_PERIOD_MS);
    rgbs[0] = CRGB::Black;
    FastLED.show();
    vTaskDelay(delayTime / portTICK_PERIOD_MS);
  }
}

void rainbowEffect(int duration)
{
  uint32_t startTime = millis();
  uint8_t hue = 0;
  while (millis() - startTime < duration)
  {
    rgbs[0] = CHSV(hue++, 255, 255);
    FastLED.show();
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
}

void buttonTask(void *pvParameters)
{
  ButtonEvent event;
  while (1)
  {
    if (xQueueReceive(eventQueue, &event, portMAX_DELAY) == pdPASS)
    {
      lastActivityTime = millis();
      switch (event)
      {
      case ButtonEvent::PRESS:
        LOG_PRINTLN("Button Pressed");
        zbIoTButton.on();
        break;
      case ButtonEvent::RELEASE:
        LOG_PRINTLN("Button Released");
        zbIoTButton.off();
        break;
      case ButtonEvent::SINGLE_CLICK:
        LOG_PRINTLN("Single Click");
        rainbowEffect(1000);
        switch1Status = !switch1Status;
        zbSwitch1.toggle();
        break;
      case ButtonEvent::DOUBLE_CLICK:
        LOG_PRINTLN("Double Click");
        breathingEffect(CRGB::Green, 1000);
        switch2Status = !switch2Status;
        zbSwitch2.toggle();
        break;
      case ButtonEvent::TRIPLE_CLICK:
        LOG_PRINTLN("Triple Click");
        breathingEffect(CRGB::Blue, 1000);
        // No specific switch for triple click, can be customized
        break;
      case ButtonEvent::SHORT_LONG_PRESS:
        LOG_PRINTLN("Short Long Press");
        breathingEffect(CRGB::Yellow, 1000);
        switch3Status = !switch3Status;
        zbSwitch3.toggle();
        break;
      case ButtonEvent::LONG_PRESS:
        LOG_PRINTLN("Long Press - Factory Reset");
        blinkEffect(CRGB::Red, 5, 200);
        esp_zb_factory_reset();
        break;
      }
    }
  }
}

void clickTimeoutTask(void *pvParameters)
{
  while (1)
  {
    vTaskSuspend(NULL); // Suspend until resumed by ISR
    if (!isAwake)
    {
      wakeUp();
    }
    uint32_t startTime = millis();
    bool possiblyReleased = false;

    // Initial debounce for press
    vTaskDelay(pdMS_TO_TICKS(DEBOUNCE_TIME));
    if (digitalRead(BUTTON_PIN) == LOW)
    { // Press confirmed
      if (!buttonStatus)
      {
        buttonStatus = true;
        pressStartTime = millis();
        longPressTriggered = false;
        clickSequenceActive = true;
        ButtonEvent event = ButtonEvent::PRESS;
        xQueueSend(eventQueue, &event, portMAX_DELAY);
      }
    }

    while (clickSequenceActive)
    {
      if (digitalRead(BUTTON_PIN) == LOW)
      { // Still pressed
        if (!longPressTriggered && (millis() - pressStartTime >= LONG_PRESS_TIME))
        {
          longPressTriggered = true;
          ButtonEvent event = ButtonEvent::LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
          clickSequenceActive = false; // End sequence after long press
        }
        else if (!longPressTriggered && (millis() - pressStartTime >= SHORT_LONG_PRESS_TIME) && (clickCount == 0))
        {
          // Trigger short long press only if it's the first press in a sequence
          longPressTriggered = true; // Use same flag to prevent re-trigger
          ButtonEvent event = ButtonEvent::SHORT_LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
        }
        vTaskDelay(pdMS_TO_TICKS(10));
      }
      else
      { // Released
        if (buttonStatus)
        {
          buttonStatus = false;
          ButtonEvent event = ButtonEvent::RELEASE;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
          lastReleaseTime = millis();
          if (!longPressTriggered)
          {
            clickCount++;
          }
        }

        // Wait for potential next click
        uint32_t timeSinceRelease = millis() - lastReleaseTime;
        if (timeSinceRelease >= MULTI_CLICK_TIME)
        {
          if (clickCount > 0 && !longPressTriggered)
          {
            ButtonEvent event;
            if (clickCount == 1)
              event = ButtonEvent::SINGLE_CLICK;
            else if (clickCount == 2)
              event = ButtonEvent::DOUBLE_CLICK;
            else
              event = ButtonEvent::TRIPLE_CLICK;
            xQueueSend(eventQueue, &event, portMAX_DELAY);
          }
          clickCount = 0;
          clickSequenceActive = false; // End sequence
        }
        vTaskDelay(pdMS_TO_TICKS(10));
      }
    }
  }
}

void zigbeeTask(void *pvParameters)
{
  while (1)
  {
    if (isAwake)
    {
      esp_zb_cli_main_loop_iteration();
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}

#if defined(IOT_BUTTON_V2)
void batteryTask(void *pvParameters)
{
  // Initialize EMA with the first valid reading
  float voltage = 0;
  do
  {
    voltage = analogRead(BATTERY_ADC_PIN) / 4095.0 * 3.3 * 2;
    vTaskDelay(100 / portTICK_PERIOD_MS);
  } while (voltage < MIN_VOLTAGE);
  emaVoltage = voltage;

  while (1)
  {
    if (isAwake)
    {
      uint32_t total = 0;
      for (int i = 0; i < SAMPLE_COUNT; i++)
      {
        total += analogRead(BATTERY_ADC_PIN);
        vTaskDelay(1 / portTICK_PERIOD_MS);
      }
      float currentVoltage = (total / (float)SAMPLE_COUNT) / 4095.0 * 3.3 * 2;

      // Apply Exponential Moving Average (EMA)
      emaVoltage = ALPHA * currentVoltage + (1 - ALPHA) * emaVoltage;

      batteryPercentage = ((emaVoltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)) * 100.0;
      if (batteryPercentage > 100.0)
        batteryPercentage = 100.0;
      if (batteryPercentage < 0.0)
        batteryPercentage = 0.0;

      uint16_t voltageToReport = (uint16_t)(emaVoltage * 100); // Report in 0.01V units
      uint8_t percentageToReport = (uint8_t)(batteryPercentage);

      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_VOLTAGE_ID, &voltageToReport, false);
      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_PERCENTAGE_REMAINING_ID, &percentageToReport, false);

      LOG_PRINTF("Battery Voltage: %.2fV, Percentage: %.1f%%\n", emaVoltage, batteryPercentage);

      if (batteryPercentage < 20)
      {
        digitalWrite(RED_LED_PIN, HIGH);
      }
      else
      {
        digitalWrite(RED_LED_PIN, LOW);
      }
    }
    vTaskDelay(60000 / portTICK_PERIOD_MS); // Update every minute
  }
}
#endif

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
  uint32_t *p_sg_p       = signal_struct->p_app_signal;
  esp_err_t err_status = signal_struct->esp_err_status;
  esp_zb_app_signal_type_t sig_type = *p_sg_p;

  switch (sig_type)
  {
  case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
    LOG_PRINTLN("Zigbee stack initialized");
    esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
    break;
  case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
  case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
    if (err_status == ESP_OK)
    {
      LOG_PRINTLN("Device started up in Zigbee stack");
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    else
    {
      LOG_PRINTF("Failed to initialize Zigbee stack (status: %s)\n", esp_err_to_name(err_status));
    }
    break;
  case ESP_ZB_BDB_SIGNAL_STEERING_COMPLETE:
    if (err_status == ESP_OK)
    {
      esp_zb_ieee_addr_t extended_pan_id;
      esp_zb_get_extended_pan_id(extended_pan_id);
      LOG_PRINTF("Successfully joined network, PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, Channel: %d",
                 extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                 extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                 esp_zb_get_current_channel());
      zigbeeInitialized = true;
    }
    else
    {
      LOG_PRINTF("Steering failed (status: %s)\n", esp_err_to_name(err_status));
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    break;
  default:
    LOG_PRINTF("ZDO signal: %d, status: %s\n", sig_type, esp_err_to_name(err_status));
    break;
  }
}

void setup()
{
  setupHardware();
  LOG_PRINTLN("Hardware Initialized");

  esp_zb_cfg_t zb_cfg;
  esp_zb_param_list_t *param_list = (esp_zb_param_list_t *)malloc(sizeof(esp_zb_param_list_t));
  param_list->param_list_length = 0;
  esp_zb_platform_config_t config = {
      .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
      .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
  };
  zb_cfg.esp_zb_role = ESP_ZB_DEVICE_TYPE_ED;
  zb_cfg.install_cfg = config;
  zb_cfg.param_list = param_list;
  esp_zb_init(&zb_cfg);

  esp_zb_attribute_list_t *iot_button_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(iot_button_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &buttonStatus);
  esp_zb_attribute_list_t *switch1_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch1_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch1Status);
  esp_zb_attribute_list_t *switch2_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch2_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch2Status);
  esp_zb_attribute_list_t *switch3_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch3_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch3Status);

#if defined(IOT_BUTTON_V2)
  esp_zb_attribute_list_t *power_config_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG);
  esp_zb_power_config_cluster_add_attr(power_config_cluster, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_VOLTAGE_ID, 0);
  esp_zb_power_config_cluster_add_attr(power_config_cluster, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_PERCENTAGE_REMAINING_ID, 0);
#endif

  esp_zb_ep_list_t *ep_list = esp_zb_ep_list_create();
  esp_zb_ep_list_add_ep(ep_list, iot_button_cluster, BUTTON_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch1_cluster, SWITCH1_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch2_cluster, SWITCH2_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch3_cluster, SWITCH3_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
#if defined(IOT_BUTTON_V2)
  esp_zb_ep_list_add_ep(ep_list, power_config_cluster, HA_POWER_CONFIG_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
#endif

  esp_zb_device_register(ep_list);
  esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
  esp_zb_start(false);
  esp_zb_set_app_signal_callback(esp_zb_app_signal_handler);

  eventQueue = xQueueCreate(10, sizeof(ButtonEvent));
  xTaskCreate(buttonTask, "ButtonTask", 4096, NULL, 5, NULL);
  xTaskCreate(clickTimeoutTask, "ClickTimeoutTask", 4096, NULL, 10, &clickTimeoutTaskHandle);
  xTaskCreate(zigbeeTask, "ZigbeeTask", 4096, NULL, 4, NULL);
#if defined(IOT_BUTTON_V2)
  xTaskCreate(batteryTask, "BatteryTask", 4096, NULL, 3, NULL);
#endif

  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), button_isr, CHANGE);
  lastActivityTime = millis();
}

void loop()
{
  if (isAwake)
  {
    bool connected = esp_zb_is_device_joined();
    if (connected != lastConnected)
    {
      LOG_PRINTF("Zigbee connection status: %s\n", connected ? "Connected" : "Disconnected");
      lastConnected = connected;
    }
    digitalWrite(BLUE_LED_PIN, connected ? HIGH : LOW);

    if (millis() - lastActivityTime > INACTIVITY_TIMEOUT)
    {
      enterSleep();
    }
  }
  vTaskDelay(100 / portTICK_PERIOD_MS);
}
```

</details>

The documentation may not be up to date with code updates, you can also click the button below to get the latest procedures.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/Seeed_IoT_Button_Zigbee/Seeed_IoT_Button_Zigbee.ino" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Click Here 🖱️</font></span></strong>
    </a>
</div>

### Step 5: Upload and Test Your Firmware

1.  Connect your IoT Button to your computer via USB.
2.  Select the correct port in Arduino IDE.
3.  Click the **Upload** button.
4.  Open the **Serial Monitor** (baud rate 115200) to view debug information.
5.  Once flashing is complete, the button is ready to be paired.

### Step 6: Set Up Zigbee in Home Assistant

Before pairing your IoT Button, you need to set up a Zigbee coordinator in Home Assistant:

1.  **Install a Zigbee Coordinator**: Connect a Zigbee coordinator like the Home Assistant Connect ZBT-1 to your Home Assistant server.
2.  **Set Up Zigbee Home Automation (ZHA)**:
    -   Go to **Settings > Devices & Services**.
    -   Click "**Add Integration**" and search for "**Zigbee Home Automation**".
    -   Follow the prompts to set up ZHA with your coordinator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Step 7: Pair the IoT Button with Home Assistant

1.  In Home Assistant, go to **Settings > Devices & Services > Zigbee Home Automation**.
2.  Click on your Zigbee coordinator device.
3.  Click "**Add Device**" to put the coordinator in pairing mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4.  Press the button on your IoT Button once to wake it and initiate pairing. If it doesn't pair, try holding the button for more than 5 seconds to trigger a factory reset, which will also put it into pairing mode.
5.  Home Assistant should discover the IoT Button as "**Seeed Studio IoT_Button**".
6.  Follow the prompts to complete the pairing process. You will see a device with multiple entities (a binary sensor and three switches).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### Step 8: Create Automations in Home Assistant

Once paired, you can create automations based on the button's actions. The firmware exposes different click types as separate switches, making automation simple.

1.  Go to **Settings > Automations & Scenes > Create Automation**.
2.  Select "**Device**" as the trigger type.
3.  Find your IoT Button in the device list.
4.  Select the desired trigger from the list. ZHA will expose the different clicks as device actions, for example:
    -   "Single press" (from the virtual switch on Endpoint 11)
    -   "Double press" (from the virtual switch on Endpoint 12)
    -   "Long press" (from the virtual switch on Endpoint 13)
5.  Configure the actions you want to perform when the button is pressed.
6.  Save the automation.

Example automation in Home Assistant YAML to toggle a light with a **double click**:

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

## Conclusion

The Seeed Studio IoT Button with Zigbee functionality offers a versatile and power-efficient way to control your smart home. Whether you use the pre-built firmware or develop your own custom solution, the button provides a simple interface for triggering complex automations in Home Assistant.

By leveraging the ESP32-C6's built-in Zigbee capabilities, the IoT Button can operate for extended periods on battery power while maintaining reliable connectivity with your smart home ecosystem.

## Troubleshooting

### Q1: Why does my device keep dropping out and not being able to connect to the internet after replacing the battery? I can confirm that the battery is charged.

After the battery has been removed, due to the chip protection strategy of the 18650 battery, it needs to be activated a bit by a charged USB power cable to work properly.

## Resources

- **[GITHUB]** [Seeed IoT Button Github Repository](https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div> 