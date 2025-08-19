---
description: 通过 Zigbee 将 Seeed Studio IoT 按钮连接到 Home Assistant
title: 通过 Zigbee 将 Seeed Studio IoT 按钮连接到 Home Assistant
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /cn/seeed_iot_button_with_zigbee
last_update:
  date: 03/14/2025
  author: Citric
---

# 通过 Zigbee 将 Seeed Studio IoT 按钮连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

在本教程中，我们将向您展示如何使用 Zigbee 将 Seeed Studio IoT 按钮连接到 Home Assistant。Seeed Studio IoT 按钮内置 ESP32-C6 芯片，具有 Zigbee 功能，使其成为智能家居的多功能设备。您将学习如何刷写 Zigbee 固件、将其与 Home Assistant 配对，甚至通过 Arduino 开发自定义按钮的行为。

## 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT 按钮</th>
      <th>Zigbee 协调器（例如 Home Assistant Connect ZBT-1）</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio IoT 按钮是一个多功能智能按钮，内置 ESP32-C6 芯片。它是一个完整的独立设备，可以通过 Zigbee 与 Home Assistant 集成，用于控制各种设备和触发自动化。凭借其 ESP32-C6 芯片，它提供低功耗和可靠的连接性。

## 功能概述（基于最新固件）

- **多动作按钮检测**
  - 单击、双击和三击。
  - 短长按（按住 1-5 秒）。
  - 长按（按住 > 5 秒）触发 Zigbee 恢复出厂设置。
  - 立即报告按下和释放事件，用于实时自动化。

- **四个 Zigbee 端点**
  - **端点 10：** 反映物理按钮实时状态的主二进制传感器（按下时为开，释放时为关）。
  - **端点 11：** 通过**单击**切换的虚拟开关。
  - **端点 12：** 通过**双击**切换的虚拟开关。
  - **端点 13：** 通过**短长按**切换的虚拟开关。

- **电池监控（仅限 IoT 按钮 V2）**
  - 通过 ADC 读取电池电压，并应用指数移动平均（EMA）滤波器以获得平滑、稳定的读数。
  - 向 Zigbee 报告电压（以 0.01V 为单位）和电池百分比。
  - 低电量状态（< 20%）驱动红色 LED 指示器。

- **LED 反馈**
  - RGB WS2812 LED 为点击动作提供视觉反馈（呼吸、闪烁、彩虹效果）。
  - 蓝色状态 LED 指示 Zigbee 连接状态。
  - 红色状态 LED（仅限 V2）指示低电量状态。

- **电源管理**
  - 在 2 分钟不活动后自动进入睡眠模式以节省电力。
  - V1 使用轻度睡眠，V2 使用带 RTC 状态保持的深度睡眠，确保按钮点击状态不会丢失。
  - 按下按钮时立即从睡眠中唤醒。

## 使用 Arduino 开发自定义 Zigbee 固件

如果您想自定义 IoT Button 的行为，可以使用 Arduino 开发自己的 Zigbee 固件。

### 步骤 1：为 ESP32-C6 设置 Arduino IDE

1.  安装最新版本的 Arduino IDE。
2.  添加 ESP32 开发板支持：
    -   转到 **File > Preferences**。
    -   在"Additional Boards Manager URLs"字段中添加 `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`。
    -   转到 **Tools > Board > Boards Manager**。
    -   搜索"esp32"并安装最新版本（确保是 **3.2.1 版本或以上**）。

### 步骤 2：安装所需库

IoT Button 固件使用 `FastLED` 库来实现 RGB 效果，以及包含在 ESP32 Arduino 包中的 Espressif Zigbee SDK。`FastLED` 库可以通过 Arduino 库管理器安装。

1.  转到 **Sketch > Include Library > Manage Libraries...**。

2.  搜索"FastLED"并安装 Daniel Garcia 开发的库。

### 步骤 3：配置 Arduino IDE 进行 Zigbee 开发

1.  选择正确的开发板：
    -   **Tools > Board > ESP32 Arduino > ESP32C6 Dev Module**

2.  配置 Zigbee 设置：
    -   **Tools > Zigbee Mode > Zigbee End Device**
    -   **Tools > Partition Scheme > Zigbee 4MB with spiffs**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### 步骤 4：创建您的自定义固件

新固件是一个独立的 Arduino 草图。它支持 IoT Button V1 和 V2 硬件、高级按钮事件检测（单击、双击、三击、短按/长按）、电池监控（V2）、丰富的 LED 反馈，以及使用 FreeRTOS 任务的强大 Zigbee 集成。

#### 硬件版本选择

代码默认为 **IoT Button V2** 编译。要为 V1 编译，您必须取消注释代码顶部的相应行：

<details>

<summary>点击此处预览完整代码</summary>

```cpp
// #define IOT_BUTTON_V1  // Uncomment this line to select to compile the iot button v1 version
#define IOT_BUTTON_V2  // Comment out or remove this line if compiling for V1
```

#### 示例固件

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

// 日志宏开关
#define ENABLE_LOGGING  // 注释掉此行以禁用日志

#ifdef ENABLE_LOGGING
#define LOG_PRINTLN(x) Serial.println(x)
#define LOG_PRINTF(x, ...) Serial.printf(x, __VA_ARGS__)
#else
#define LOG_PRINTLN(x)
#define LOG_PRINTF(x, ...)
#endif

// #define IOT_BUTTON_V1  //取消注释此行以选择编译物联网按钮v1版本
#define IOT_BUTTON_V2  //取消注释此行以选择编译物联网按钮v2版本

#if !defined(IOT_BUTTON_V1) && !defined(IOT_BUTTON_V2)
#define IOT_BUTTON_V2
#endif

#define BUTTON_PIN_BITMASK(GPIO) (1ULL  <<GPIO)

/* 硬件配置 */
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
const float ALPHA = 0.1; // EMA的平滑因子
#endif

/* 按钮配置 */
const uint32_t MULTI_CLICK_TIME = 300;             // 多次点击的最大间隔时间 (ms)
const uint32_t SHORT_LONG_PRESS_TIME = 1000;       // 短长按的最小时间 (1秒)
const uint32_t LONG_PRESS_TIME = 5000;             // 长按的最小时间 (5秒)
const uint32_t DEBOUNCE_TIME = 20;                 // 防抖时间 (ms)
const uint32_t INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2分钟不活动超时 (ms)

/* LED配置 */
CRGB rgbs[NUM_RGBS];

/* 按钮事件 */
enum class ButtonEvent
{
  PRESS,            // 按下
  RELEASE,          // 释放
  SINGLE_CLICK,     // 单击
  DOUBLE_CLICK,     // 双击
  TRIPLE_CLICK,     // 三击
  SHORT_LONG_PRESS, // 短长按 (1-5秒)
  LONG_PRESS        // 长按 (>5秒)
};

/* Zigbee 配置 */
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

/* 全局变量 */
QueueHandle_t eventQueue;

uint32_t pressStartTime = 0;
uint32_t lastReleaseTime = 0;
uint8_t clickCount = 0;
bool longPressTriggered = false;
bool clickSequenceActive = false; // 跟踪点击序列是否正在进行
TaskHandle_t clickTimeoutTaskHandle = NULL;
uint32_t lastActivityTime = 0;  // 跟踪最后按钮活动以进入睡眠
volatile bool isAwake = true;   // 跟踪设备唤醒/睡眠状态
bool lastConnected = false;     // 跟踪之前的Zigbee连接状态
bool zigbeeInitialized = false; // 跟踪Zigbee初始化状态

#if defined(IOT_BUTTON_V2)
// 用于按钮状态持久化的RTC变量
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
  LOG_PRINTLN("进入睡眠模式...");
  Serial.flush();
#if defined(IOT_BUTTON_V2)
  // 在深度睡眠前将按钮状态保存到RTC内存
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
  LOG_PRINTLN("从睡眠中唤醒。");
#if defined(IOT_BUTTON_V2)
  // 深度睡眠后从RTC内存恢复按钮状态
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
        LOG_PRINTLN("按钮按下");
        zbIoTButton.on();
        break;
      case ButtonEvent::RELEASE:
        LOG_PRINTLN("按钮释放");
        zbIoTButton.off();
        break;
      case ButtonEvent::SINGLE_CLICK:
        LOG_PRINTLN("单击");
        rainbowEffect(1000);
        switch1Status = !switch1Status;
        zbSwitch1.toggle();
        break;
      case ButtonEvent::DOUBLE_CLICK:
        LOG_PRINTLN("双击");
        breathingEffect(CRGB::Green, 1000);
        switch2Status = !switch2Status;
        zbSwitch2.toggle();
        break;
      case ButtonEvent::TRIPLE_CLICK:
        LOG_PRINTLN("三击");
        breathingEffect(CRGB::Blue, 1000);
        // 三击没有特定的开关，可以自定义
        break;
      case ButtonEvent::SHORT_LONG_PRESS:
        LOG_PRINTLN("短长按");
        breathingEffect(CRGB::Yellow, 1000);
        switch3Status = !switch3Status;
        zbSwitch3.toggle();
        break;
      case ButtonEvent::LONG_PRESS:
        LOG_PRINTLN("长按 - 恢复出厂设置");
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
    vTaskSuspend(NULL); // 挂起直到被ISR恢复
    if (!isAwake)
    {
      wakeUp();
    }
    uint32_t startTime = millis();
    bool possiblyReleased = false;

    // 按下的初始防抖
    vTaskDelay(pdMS_TO_TICKS(DEBOUNCE_TIME));
    if (digitalRead(BUTTON_PIN) == LOW)
    { // 按下确认
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
      { // 仍然按下
        if (!longPressTriggered && (millis() - pressStartTime >= LONG_PRESS_TIME))
        {
          longPressTriggered = true;
          ButtonEvent event = ButtonEvent::LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
          clickSequenceActive = false; // 长按后结束序列
        }
        else if (!longPressTriggered && (millis() - pressStartTime >= SHORT_LONG_PRESS_TIME) && (clickCount == 0))
        {
          // 只有在序列中的第一次按下时才触发短长按
          longPressTriggered = true; // 使用相同标志防止重复触发
          ButtonEvent event = ButtonEvent::SHORT_LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
        }
        vTaskDelay(pdMS_TO_TICKS(10));
      }
      else
      { // 释放
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

        // 等待可能的下一次点击
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
          clickSequenceActive = false; // 结束序列
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
  // 用第一个有效读数初始化EMA
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

      // 应用指数移动平均 (EMA)
      emaVoltage = ALPHA * currentVoltage + (1 - ALPHA) * emaVoltage;

      batteryPercentage = ((emaVoltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)) * 100.0;
      if (batteryPercentage > 100.0)
        batteryPercentage = 100.0;
      if (batteryPercentage < 0.0)
        batteryPercentage = 0.0;

      uint16_t voltageToReport = (uint16_t)(emaVoltage * 100); // 以0.01V为单位报告
      uint8_t percentageToReport = (uint8_t)(batteryPercentage);

      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_VOLTAGE_ID, &voltageToReport, false);
      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_PERCENTAGE_REMAINING_ID, &percentageToReport, false);

      LOG_PRINTF("电池电压: %.2fV, 百分比: %.1f%%\n", emaVoltage, batteryPercentage);

      if (batteryPercentage < 20)
      {
        digitalWrite(RED_LED_PIN, HIGH);
      }
      else
      {
        digitalWrite(RED_LED_PIN, LOW);
      }
    }
    vTaskDelay(60000 / portTICK_PERIOD_MS); // 每分钟更新一次
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
    LOG_PRINTLN("Zigbee 协议栈已初始化");
    esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
    break;
  case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
  case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
    if (err_status == ESP_OK)
    {
      LOG_PRINTLN("设备在Zigbee协议栈中启动");
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    else
    {
      LOG_PRINTF("初始化Zigbee协议栈失败 (状态: %s)\n", esp_err_to_name(err_status));
    }
    break;
  case ESP_ZB_BDB_SIGNAL_STEERING_COMPLETE:
    if (err_status == ESP_OK)
    {
      esp_zb_ieee_addr_t extended_pan_id;
      esp_zb_get_extended_pan_id(extended_pan_id);
      LOG_PRINTF("成功加入网络, PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, 信道: %d",
                 extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                 extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                 esp_zb_get_current_channel());
      zigbeeInitialized = true;
    }
    else
    {
      LOG_PRINTF("网络引导失败 (状态: %s)\n", esp_err_to_name(err_status));
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    break;
  default:
    LOG_PRINTF("ZDO信号: %d, 状态: %s\n", sig_type, esp_err_to_name(err_status));
    break;
  }
}

void setup()
{
  setupHardware();
  LOG_PRINTLN("硬件已初始化");

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
      LOG_PRINTF("Zigbee 连接状态: %s\n", connected ? "已连接" : "已断开");
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

文档可能不会与代码更新同步，您也可以点击下面的按钮获取最新的程序。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/Seeed_IoT_Button_Zigbee/Seeed_IoT_Button_Zigbee.ino" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击这里 🖱️</font></span></strong>
    </a>
</div>

### 步骤 5：上传并测试您的固件

1.  通过 USB 将您的 IoT 按钮连接到计算机。
2.  在 Arduino IDE 中选择正确的端口。
3.  点击**上传**按钮。
4.  打开**串口监视器**（波特率 115200）查看调试信息。
5.  刷写完成后，按钮就可以进行配对了。

### 步骤 6：在 Home Assistant 中设置 Zigbee

在配对您的 IoT 按钮之前，您需要在 Home Assistant 中设置 Zigbee 协调器：

1.  **安装 Zigbee 协调器**：将 Zigbee 协调器（如 Home Assistant Connect ZBT-1）连接到您的 Home Assistant 服务器。
2.  **设置 Zigbee Home Automation (ZHA)**：
    -   转到**设置 > 设备与服务**。
    -   点击"**添加集成**"并搜索"**Zigbee Home Automation**"。
    -   按照提示使用您的协调器设置 ZHA。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7：将 IoT 按钮与 Home Assistant 配对

1.  在 Home Assistant 中，转到**设置 > 设备与服务 > Zigbee Home Automation**。
2.  点击您的 Zigbee 协调器设备。
3.  点击"**添加设备**"将协调器置于配对模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4.  按一次 IoT 按钮上的按钮来唤醒它并启动配对。如果无法配对，请尝试按住按钮超过 5 秒钟以触发恢复出厂设置，这也会将其置于配对模式。
5.  Home Assistant 应该会发现 IoT 按钮为"**Seeed Studio IoT_Button**"。
6.  按照提示完成配对过程。您将看到一个具有多个实体（一个二进制传感器和三个开关）的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 8：在 Home Assistant 中创建自动化

配对完成后，您可以基于按钮的操作创建自动化。固件将不同的点击类型公开为单独的开关，使自动化变得简单。

1.  转到**设置 > 自动化与场景 > 创建自动化**。
2.  选择"**设备**"作为触发器类型。
3.  在设备列表中找到您的 IoT 按钮。
4.  从列表中选择所需的触发器。ZHA 将不同的点击公开为设备操作，例如：
    -   "单击"（来自端点 11 上的虚拟开关）
    -   "双击"（来自端点 12 上的虚拟开关）
    -   "长按"（来自端点 13 上的虚拟开关）
5.  配置按下按钮时要执行的操作。
6.  保存自动化。

在 Home Assistant YAML 中使用**双击**切换灯光的示例自动化：

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # 替换为您按钮的设备 ID
    type: "remote_button_double_press" # 确切的类型可能有所不同，请从 UI 中选择
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## 结论

具有 Zigbee 功能的 Seeed Studio IoT 按钮提供了一种多功能且节能的方式来控制您的智能家居。无论您使用预构建的固件还是开发自己的自定义解决方案，该按钮都为在 Home Assistant 中触发复杂自动化提供了简单的接口。

通过利用 ESP32-C6 的内置 Zigbee 功能，IoT 按钮可以在电池供电下长时间运行，同时与您的智能家居生态系统保持可靠的连接。

## 故障排除

### Q1：为什么我的设备在更换电池后总是掉线且无法连接到互联网？我可以确认电池是有电的。

电池取出后，由于 18650 电池的芯片保护策略，需要通过充电的 USB 电源线稍微激活一下才能正常工作。

## 资源

- **[GITHUB]** [Seeed IoT Button Github 仓库](https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button 原理图 PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button 原理图与 PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>