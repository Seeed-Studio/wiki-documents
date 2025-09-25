---
description: XIAO ESP32 Sense 使用不同睡眠模式的功耗
title: XIAO ESP32S3 Sense 睡眠模式
keywords:
- Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /cn/XIAO_ESP32S3_Consumption
last_update:
  date: 08/27/2024
  author: Jason
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/background02.png" style={{width:800, height:'auto'}}/></div>

在这里，我将展示一些简单的示例来演示这些低功耗睡眠模式的使用。所有 ESP32 开发板都是多功能的，我在此上下文中使用的开发板是 XIAO ESP32S3 Sense。

## 硬件概览

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 深度睡眠

### 介绍

在深度睡眠模式下，ESP32 会关闭 CPU、大部分 RAM 以及所有由 APB_CLK 时钟驱动的数字外设。只有以下组件保持供电：

- RTC 控制器
- ULP 协处理器
- RTC 快速存储器
- RTC 慢速存储器

### 唤醒方法

- **定时器唤醒：**ESP32 可以通过设置定时器在指定时间后自动唤醒。

- **触摸板中断唤醒：**设备可以通过触摸板活动唤醒，适用于需要用户交互的应用。

- **外部唤醒：**ESP32 可以通过外部信号（如按钮按压）唤醒，非常适合低功耗应用。

- **ULP 协处理器活动唤醒：**ULP 协处理器可以独立运行，监控特定条件并唤醒主 CPU 以节省功耗。

- **GPIO 唤醒：**设备可以通过 GPIO 引脚状态变化（高电平或低电平）唤醒，为各种传感器和外设提供灵活性。

下面给出三个 XIAO ESP32 S3 Sense 使用深度睡眠模式的简单示例。

### 代码实现

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

### Detailed Notes

```cpp
#define uS_TO_S_FACTOR 1000000ULL 
```

- 定义一个宏来将微秒转换为秒。1000000ULL是用于将微秒转换为秒的因子。

```cpp
#define TIME_TO_SLEEP  5     
```

- 定义一个宏来设置 ESP32 将进入睡眠状态的时间，在这种情况下为 5 秒。

```cpp
RTC_DATA_ATTR int bootCount = 0;
```

- 声明一个整型变量 `bootCount`，带有 `RTC_DATA_ATTR` 属性，这允许它在深度睡眠期间保持其值。

```cpp
void print_wakeup_reason() {
```

- 定义一个名为 `print_wakeup_reason()` 的函数，用于打印 ESP32 唤醒的原因。

```cpp
esp_sleep_wakeup_cause_t wakeup_reason;
```

- 声明一个类型为 `esp_sleep_wakeup_cause_t` 的变量 `wakeup_reason` 来存储唤醒事件的原因。

```cpp
wakeup_reason = esp_sleep_get_wakeup_cause();
```

- 调用函数 `esp_sleep_get_wakeup_cause()` 来获取唤醒原因并将其赋值给 `wakeup_reason` 变量。

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

- `ESP_SLEEP_WAKEUP_EXT0` : 此唤醒原因表示 ESP32 由于在配置为 RTC（实时时钟）I/O 的 GPIO 引脚上检测到外部信号而唤醒。这通常用于当按钮或传感器被触发时从睡眠中唤醒。
- `ESP_SLEEP_WAKEUP_EXT1` : 这表示唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并且可以在任何指定引脚改变状态时唤醒（例如，变为低电平或高电平）。
- `ESP_SLEEP_WAKEUP_TIMER` : 此唤醒原因表示 ESP32 在预定义的定时器持续时间后唤醒。这对于需要执行周期性任务而不需要用户交互的应用程序很有用。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : 这表示 ESP32 由于触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，它可以使设备退出睡眠模式。
- `ESP_SLEEP_WAKEUP_ULP` : 此唤醒原因意味着唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并且可以在满足某些条件时唤醒 ESP32，从而实现低功耗操作，最大限度地减少电池消耗。

```cpp
++bootCount;
```

- 每次设备重启时增加启动计数并打印出来。

```cpp
print_wakeup_reason();
```

- 打印 ESP32 唤醒的原因。

```cpp
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");

Serial.println("Going to sleep now");
Serial.flush();
esp_deep_sleep_start();
Serial.println("This will never be printed");
```

- `esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);`启用定时器在指定时间后唤醒ESP32。
- `Serial.flush();`确保在进入睡眠前发送所有串口数据。
- `esp_deep_sleep_start();`将ESP32置于深度睡眠模式。

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

### Detailed Notes

```cpp
#include "driver/rtc_io.h"
```

- 包含 RTC I/O 驱动程序以访问 RTC GPIO。

```cpp
#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)  
#define USE_EXT0_WAKEUP          1              
#define WAKEUP_GPIO              GPIO_NUM_33    
RTC_DATA_ATTR int bootCount = 0;
```

- 2 ^ GPIO_NUMBER 的十六进制表示
- 1 = EXT0唤醒，0 = EXT1唤醒
- 仅允许RTC IO - ESP32引脚示例

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

- `ESP_SLEEP_WAKEUP_EXT0` : 此唤醒原因表示 ESP32 由于在配置为 RTC（实时时钟）I/O 的 GPIO 引脚上检测到外部信号而唤醒。这通常用于当按钮或传感器被触发时从睡眠中唤醒。
- `ESP_SLEEP_WAKEUP_EXT1` : 这表示唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并且可以在任何指定引脚改变状态时唤醒（例如，变为低电平或高电平）。
- `ESP_SLEEP_WAKEUP_TIMER` : 此唤醒原因表示 ESP32 在预定义的定时器持续时间后唤醒。这对于需要执行周期性任务而不需要用户交互的应用程序很有用。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : 这表示 ESP32 由于触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，它可以使设备退出睡眠模式。
- `ESP_SLEEP_WAKEUP_ULP` : 此唤醒原因意味着唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并且可以在满足某些条件时唤醒 ESP32，从而实现低功耗操作，最大限度地减少电池消耗。

```cpp
  Serial.begin(115200);
  delay(1000);  
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
```

- `++bootCount;` 增加启动次数并在每次重启时打印
- `print_wakeup_reason();` 打印 ESP32 的唤醒原因

```cpp
#if USE_EXT0_WAKEUP
  esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);

  rtc_gpio_pullup_dis(WAKEUP_GPIO);
  rtc_gpio_pulldown_en(WAKEUP_GPIO);
```

- `esp_sleep_enable_ext0_wakeup(WAKEUP_GPIO, 1);`在指定的GPIO引脚变为高电平时启用EXT0唤醒。
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` 禁用唤醒GPIO引脚上的上拉电阻。
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` 启用唤醒GPIO引脚上的下拉电阻。

```cpp
#else  
  esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);

  rtc_gpio_pulldown_en(WAKEUP_GPIO);  
  rtc_gpio_pullup_dis(WAKEUP_GPIO);   
```

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`EXT1 唤醒
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33 连接到 GND 以便在高电平时唤醒
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);`  禁用上拉以允许在高电平时唤醒

- `esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_HIGH);`  如果你要使用 ext1，你可以这样使用
- `rtc_gpio_pulldown_en(WAKEUP_GPIO);` GPIO33 连接到 GND 以便在高电平时唤醒
- `rtc_gpio_pullup_dis(WAKEUP_GPIO);` 禁用上拉以允许在高电平时唤醒

```cpp
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
```

- `esp_deep_sleep_start();`使ESP32进入深度睡眠模式。

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

- 检查目标是否为 ESP32
- 为 ESP32 定义触摸灵敏度阈值
- 检查目标是否为 ESP32S2 或 ESP32S3
- 为 ESP32S2/S3 定义更高的触摸灵敏度阈值
- 如果目标不是上述任何一种
- 为其他目标定义默认阈值

```cpp
RTC_DATA_ATTR int bootCount = 0; // Declare a variable to count boots, stored in RTC memory.
touch_pad_t touchPin; // Declare a variable to hold the touchpad pin status.

void print_wakeup_reason() { // Function to print the reason for waking up.
  esp_sleep_wakeup_cause_t wakeup_reason; // Variable to hold the wakeup reason.

  wakeup_reason = esp_sleep_get_wakeup_cause(); // Get the cause of the wakeup.
```

- `RTC_DATA_ATTR int bootCount = 0;` 声明一个用于计算启动次数的变量，存储在RTC内存中。
- `touch_pad_t touchPin;` 声明一个用于保存触摸板引脚状态的变量。
- `void print_wakeup_reason()` 用于打印唤醒原因的函数。
- `esp_sleep_wakeup_cause_t wakeup_reason;` 用于保存唤醒原因的变量。
- `wakeup_reason = esp_sleep_get_wakeup_cause();` 获取唤醒的原因。

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

- `ESP_SLEEP_WAKEUP_EXT0` : 此唤醒原因表示 ESP32 由于在配置为 RTC（实时时钟）I/O 的 GPIO 引脚上检测到外部信号而唤醒。这通常用于当按钮或传感器被触发时从睡眠中唤醒。
- `ESP_SLEEP_WAKEUP_EXT1` : 这表示唤醒是由 RTC 控制器管理的 GPIO 引脚上的外部信号引起的。与 EXT0 不同，EXT1 可以处理多个引脚，并且可以在任何指定引脚改变状态时唤醒（例如，变为低电平或高电平）。
- `ESP_SLEEP_WAKEUP_TIMER` : 此唤醒原因表示 ESP32 在预定义的定时器持续时间后唤醒。这对于需要执行周期性任务而不需要用户交互的应用程序很有用。
- `ESP_SLEEP_WAKEUP_TOUCHPAD` : 这表示 ESP32 由于触摸板事件而唤醒。如果配置为唤醒的触摸板检测到触摸，它可以使设备退出睡眠模式。
- `ESP_SLEEP_WAKEUP_ULP` : 此唤醒原因意味着唤醒是由 ULP（超低功耗）程序触发的。ULP 可以在主 CPU 处于深度睡眠时运行，并且可以在满足某些条件时唤醒 ESP32，从而实现低功耗操作，最大限度地减少电池消耗。

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

- `case 0:`在 GPIO 4 上检测到触摸。
- `case 1:`在 GPIO 0 上检测到触摸。
- `case 2:`在 GPIO 2 上检测到触摸。
- `case 3:`在 GPIO 15 上检测到触摸。
- `case 4:`在 GPIO 13 上检测到触摸。
- `case 5:`在 GPIO 12 上检测到触摸。
- `case 6:`在 GPIO 14 上检测到触摸。
- `case 7:`在 GPIO 27 上检测到触摸。
- `case 8:`在 GPIO 33 上检测到触摸。
- `case 9:`在 GPIO 32 上检测到触摸。
- `default:`如果没有检测到触摸的默认情况。

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

- `++bootCount;` 增加启动计数。

- `print_wakeup_reason();` 打印唤醒原因。
- `print_wakeup_touchpad();` 打印触摸板唤醒状态。

- `#if CONFIG_IDF_TARGET_ESP32` 检查目标是否为ESP32
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 为T3启用触摸唤醒，使用定义的阈值。
- `touchSleepWakeUpEnable(T7, THRESHOLD);` 为T7启用触摸唤醒，使用定义的阈值。
- `touchSleepWakeUpEnable(T3, THRESHOLD);` 为T3启用触摸唤醒，使用定义的阈值。

- `esp_deep_sleep_start();` 将ESP32置于深度睡眠模式。

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
要在进入深度睡眠模式后重新烧录程序，请按住启动按钮，然后按下复位按钮来重启ESP32。
:::

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/deep.png" style={{width:700, height:'auto'}}/></div>

## 轻度睡眠

### 介绍

轻度睡眠模式是ESP32中的另一种低功耗模式，允许设备在节约能源的同时仍保持快速响应时间。在此模式下，CPU内核被暂停，但RAM和一些外设仍保持供电，使设备能够快速响应某些事件而唤醒。

轻度睡眠非常适合需要低功耗但仍需要保持WiFi或蓝牙连接的应用，因为它允许无线通信模块保持活跃状态。

### 唤醒方法

- **定时器唤醒：** 设备可以在指定时间段后唤醒，允许执行周期性任务。
- **外部中断唤醒：** ESP32可以通过外部信号唤醒，如按钮按压或其他硬件中断。
- **网络活动唤醒：** 设备可以响应传入的网络数据包而唤醒，实现高效通信而无需持续处于活跃状态。
- **GPIO唤醒：** 特定的GPIO引脚可以配置为在事件发生时从轻度睡眠中唤醒设备，如状态变化或信号。

### 代码实现

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

### Detailed Notes

```cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
```

- Incldue FreeRTOS library

```cpp
const int sleepTime = 10000; 
const int ledPin = LED_BUILTIN; 
```

- 将睡眠时间设置为 10 秒
- 使用内置的 LED 引脚

```cpp
void ledTask(void *pvParameters): 
```

- 定义一个 FreeRTOS 任务来控制 LED 状态。

```cpp
digitalWrite(ledPin, HIGH); 
Serial.println("LED is ON"); 
vTaskDelay(pdMS_TO_TICKS(1000)); 
digitalWrite(ledPin, LOW);
Serial.println("LED is OFF"); 
vTaskDelete(NULL); 
```

- `vTaskDelay(pdMS_TO_TICKS(1000));`保持LED开启1秒钟
- `vTaskDelete(NULL);`删除当前任务

```cpp
esp_sleep_enable_timer_wakeup(sleepTime * 1000);
Serial.println("Going to sleep now..."); 
esp_light_sleep_start(); 
xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL); 
delay(1000); 
```

- `esp_sleep_enable_timer_wakeup(sleepTime * 1000);`设置唤醒定时器
- `esp_light_sleep_start();` 进入轻度睡眠模式
- `xTaskCreate(ledTask, "LED Task", 2048, NULL, 1, NULL);`创建LED控制任务

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light_led.gif" style={{width:300, height:'auto'}}/></div>

## 调制解调器睡眠模式

### 介绍

调制解调器睡眠模式是ESP32中另一个重要的低功耗模式，它与深度睡眠模式不同。调制解调器睡眠模式主要针对ESP32的无线通信模块进行优化。

在此模式下，ESP32的WiFi/蓝牙模块进入睡眠状态，而CPU核心保持活跃。这使得ESP32能够在显著降低功耗的同时保持一定程度的无线连接能力。

### 唤醒方法

- 定时器唤醒

- 外部中断唤醒

- 任务唤醒

- 网络活动唤醒

### 代码实现

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

### Detailed Notes

```cpp
#include "WiFi.h"
```

- 包含 WiFi 库以启用 WiFi 函数。

```cpp
Serial.println("Connecting to WiFi...");
```

- 打印一条消息，指示正在开始连接到 WiFi。

```cpp
WiFi.begin("****", "****");
```

- 开始连接到指定的 WiFi 网络。

```cpp
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected to WiFi!");
```

- 循环直到成功连接到 WiFi。

```cpp
WiFi.setSleep(true);
```

- 启用调制解调器睡眠模式以节省电量。

```cpp
WiFi.setSleep(false);
```

- 禁用调制解调器睡眠模式以激活 WiFi。

```cpp
if (WiFi.status() == WL_CONNECTED) {
```

- Check the WiFi status.

```cpp
WiFi.setSleep(true);
```

- 重新启用调制解调器睡眠模式。

### 结果展示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/light.png" style={{width:700, height:'auto'}}/></div>

## 睡眠功能应用

通过上面的简单示例，现在让我们更进一步，在 ESP32 S3 Sense 传感器上使用这些睡眠功能。

### 软件准备

在开始本文之前，如果您还没有使用 XIAO ESP32S3 Sense 上的所有硬件功能，请确保您已经完成了一些软件安装准备工作。

以下是三个功能的介绍，您可以通过以下链接找到更多信息：

- [麦克风使用](https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_mic/)：学习如何使用 XIAO ESP32S3 Sense 上的麦克风来捕获环境声音级别并录制音频。

- [MicroSD](https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_filesystem/)：了解如何使用 MicroSD 卡进行数据存储，确保您可以在项目中保存和检索文件。

- [相机使用](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage/)：掌握如何使用 XIAO ESP32S3 Sense 上的相机模块拍照和录制视频。

### 代码实现

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

### 详细说明

这段代码实现了一个基于ESP32摄像头模块的图像捕获系统，可以每60秒自动拍摄一张照片并保存到SD卡中。在`void setup()`函数中，初始化摄像头和SD卡并确认设备状态；在`void loop()`函数中，检查摄像头是否可以拍照，如果满足条件，则调用`photo_save()`函数保存图像，并在保存后进入深度睡眠状态10秒以节省能耗。

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

### 详细说明

此代码实现了使用 I2S 接口捕获音频数据的功能。在 `void setup()` 函数中，初始化了串口和 I2S 接口；在 `void loop()` 函数中，启用了唤醒定时器并创建了一个任务 `void i2sTask(void *pvParameters)`，该任务负责读取音频采样并每秒打印有效数据。任务运行 10 次后，延迟 3 秒并删除自身。

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

### 详细说明

这段代码实现了使用 ESP32 摄像头模块进行图像捕获并通过 Wi-Fi 连接的功能。在 `void setup()` 函数中，初始化了串口、摄像头和 Wi-Fi 连接；如果初始化成功，程序会打印 Wi-Fi 地址供用户连接。在 `void loop()` 函数中，代码每 10 秒检查一次 Wi-Fi 状态，如果没有摄像头操作，Wi-Fi 将被设置为睡眠模式以节省能源。每次调用 `cameraOperation()` 函数都会更新最后操作的时间，以确保在事件期间 Wi-Fi 保持连接。

</TabItem>

</Tabs>

:::tip
这些代码不能直接使用，您需要添加关于摄像头的头文件，请查看上面关于 XIAO ESP32 S3 的示例。
:::

## 总结

### 为什么使用深度睡眠模式

在不影响功能的前提下最大化节能，以延长设备的电池寿命。
适用场景：电池寿命至关重要的应用，如远程传感器节点、可穿戴设备和其他低功耗物联网设备。虽然唤醒时间相对较慢，但这种权衡是值得的。

### 为什么使用调制解调器睡眠模式

优化无线通信模块的功耗，同时仍保持网络连接。
适用场景：需要保持网络连接但也需要低功耗的应用，如间歇工作的物联网设备。调制解调器睡眠可以显著降低无线模块的功耗，同时仍提供快速唤醒响应。

### 总结

这三种睡眠模式为开发者提供了不同的功耗/性能权衡选项，可以根据应用的具体要求灵活选择。对于有电池寿命要求的设备，深度睡眠模式是一个好选择；而对于需要保持网络连接的物联网设备，调制解调器睡眠模式是最佳选择。

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
