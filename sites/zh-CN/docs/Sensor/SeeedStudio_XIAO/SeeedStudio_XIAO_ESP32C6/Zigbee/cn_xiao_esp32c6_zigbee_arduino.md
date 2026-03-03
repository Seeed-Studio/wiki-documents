---
description: 在本教程中，我们将踏上使用 XIAO ESP32C6 开发板探索 Zigbee 应用开发的旅程。XIAO ESP32C6 是一款紧凑而强大的开发板，搭载 ESP32-C6 芯片，提供集成的 Wi-Fi 和蓝牙低功耗 (BLE) 连接功能。通过利用 ESP Zigbee SDK，我们可以充分发挥 XIAO ESP32C6 的潜力，并扩展其功能以包含 Zigbee 功能。
title: XIAO ESP32C6 Zigbee 快速入门指南 (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /cn/xiao_esp32c6_zigbee_arduino
last_update:
  date: 11/25/2024
  author: Spencer
---

## 概述

本教程指导您在 Seeed Studio **XIAO ESP32C6** 开发板上实现 [Zigbee](https://en.wikipedia.org/wiki/Zigbee) 应用。该开发板由 ESP32-C6 芯片驱动，结合了 **Wi-Fi**、**蓝牙低功耗 (BLE)** 和 **Zigbee** 连接功能，使其成为 **物联网应用** 的完美选择。本指南中的示例使用 **esp-arduino Zigbee SDK** 来实现 Zigbee 功能。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### 您将学到什么

:::note 前提条件：Arduino 开发环境设置

如果您还没有准备好 Arduino IDE，请参考 **[入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#software-preparation)**。确保 **esp-arduino 板版本** 为 **v3.0.6 或更高版本**，该版本支持 Zigbee 功能。

:::

本指南专注于使用 XIAO ESP32C6 的 Zigbee 功能的要点，确保清楚理解其实际应用：

1. [Zigbee 概述](#zigbee_overview)：了解 Zigbee 协议及其网络结构。
2. [Zigbee Arduino 示例](#examples)：在 ESP32-C6 上实现 Zigbee 示例，如灯泡和开关。

## Zigbee 概述 {#zigbee_overview}

Zigbee 是一种基于 IEEE 802.15.4 标准的 **低功耗**、**低带宽** 无线通信协议。它专为 **家庭自动化**、**智慧城市** 和 **工业控制** 等物联网场景量身定制，提供强大的网状网络功能，在动态环境中实现可靠通信。

### Zigbee 数据模型

Zigbee 通信依赖于 **Zigbee 集群库 (ZCL)**，它定义了设备如何组织其功能并进行交互。关键组件包括：

1. **设备类型**
    Zigbee 设备（例如开关、传感器、灯）具有预定义的特定行为，按功能分组到 **集群** 中。

2. **集群**
    集群是以下内容的逻辑分组：

   - **属性**：表示设备状态，如亮度或温度。
   - **命令**：触发动作，如打开灯或将亮度设置为 50%。

   示例：

   - **开/关集群**：控制二进制状态如电源。
   - **电平控制集群**：调整强度或亮度。
   - **温度测量集群**：发送温度读数。
   - **场景集群**：保存和调用预设配置。

3. **属性和命令**
    属性存储设备数据（例如状态、配置），而命令启动动作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee 网络架构

Zigbee 网络由三种主要节点类型组成：

1. **Zigbee 协调器 (ZC)**  
   - 作为网络的中央枢纽。  
   - 处理网络创建、设备认证和地址分配。  
   - 负责初始化和管理网络。  
   - 每个 Zigbee 网络只能有 **一个协调器**。  

2. **Zigbee 路由器 (ZR)**  
   - 通过在设备之间中继消息来扩展网络范围。  
   - 支持其他设备加入网络。  
   - 通常由市电供电以确保持续运行和可靠的消息中继。  
   - 电池供电的路由器是可能的，但由于更高的能耗需求而不太常见。  

3. **Zigbee 终端设备 (ZED)**  
   - 轻量级和节能设备，与父节点（协调器或路由器）通信。  
   - 不向其他设备路由消息。  
   - 针对电池操作进行优化，通常进入睡眠模式以节省能源。

:::note

- **寻址和路由**：
  - Zigbee 使用 16 位寻址方案。设备通过直接和间接寻址的混合进行通信。  
  - 路由决策由路由器使用 AODV（按需距离矢量）等算法做出。  

- **电源管理**：
  - Zigbee 终端设备针对低功耗进行了优化。它们通常在睡眠模式下运行，只在需要时唤醒。  
  - 路由器和协调器通常由市电供电以确保持续可用性。

:::

#### 网络拓扑

Zigbee 支持三种主要网络拓扑，具体取决于应用需求和环境：

#### 1. 网状拓扑

- 单个协调器和多个路由器形成自愈、强健的网络。  
- 如果通信路径中断，设备可以动态重新路由消息，确保高可靠性。  
- 适用于需要广泛覆盖和冗余的大规模网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **关键特性**：  
  - 动态重新路由确保高可靠性。  
  - 支持具有可扩展覆盖范围的大型网络。  
  - 自愈机制增加容错能力。  

#### 2. 树形拓扑

- 协调器作为分层结构的根，路由器形成分支。  
- 每个分支可以有多个终端设备或其他路由器，创建树状结构。  
- 通信依赖于分层路径，这引入了潜在的单点故障。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **关键特性**：  
  - 适用于结构化环境。  
  - 比网状网络更容易设置和管理。  
  - 容易受到分支故障的影响，这可能会断开整个子网络。  

#### 3. 星形拓扑

- 所有设备直接与协调器通信。  
- 部署简单，但协调器是单点故障。  
- 最适合设备靠近协调器的小型网络。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **关键特性**：  
  - 易于设置和管理。  
  - 由于范围和设备容量限制，可扩展性有限。  
  - 依赖协调器进行所有通信降低了容错能力。  

在快速了解这些概念后，让我们开始在 XIAO ESP32C6 上进行 Zigbee 开发。

## Arduino 示例 {#examples}

参考 [Zigbee 示例 - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)

### 示例 1：灯泡和灯开关 {#Light_Bulb_switch}

首先，准备两个 XIAO ESP32C6，一个作为 **Zigbee 灯泡**，另一个作为 **Zigbee 灯开关**。

使用 `Zigbee_On_Off_Light` 和 `Zigbee_On_Off_Switch` 示例来了解支持 Zigbee 的设备如何在实际场景中交互。准备好开始了吗？让我们深入开发！

#### Zigbee 灯泡

确保您为 Zigbee 模式选择了 `Zigbee ED(end device)`。

一些常量：

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` 用于控制内置 LED。
- `BUTTON_PIN` 用于恢复出厂设置按钮。
- `ZIGBEE_LIGHT_ENDPOINT` 表示灯泡的 Zigbee 端点，它在网络中充当服务标识符。

##### 定义 Zigbee 灯设备

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

这行代码定义了一个带有端点 ID 的 `ZigbeeLight` 对象。端点用于表示 Zigbee 设备内的不同功能。

##### 设备状态控制函数

`setLED()` 函数控制 LED 状态：

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

`setLED()` 函数接受一个布尔值并相应地设置 LED 状态，根据输入值打开或关闭它。

##### `setup()` 函数

`setup()` 函数初始化设备，包括 LED、按钮和 Zigbee 设置。

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

首先，我们将 LED 引脚配置为输出并初始关闭它。

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

按钮引脚配置为带有内部上拉电阻的输入。

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

这设置了设备的制造商和型号名称，有助于在 Zigbee 网络上识别它。

```cpp
  zbLight.onLightChange(setLED);
```

这将 `setLED()` 注册为回调函数，每当灯状态发生变化时都会调用该函数。

```cpp
  Zigbee.addEndpoint(&zbLight);
```

我们将 `zbLight` 作为端点添加到 Zigbee 核心。这允许其他 Zigbee 设备与此端点交互。

```cpp
  Zigbee.begin();
```

最后，我们调用 `Zigbee.begin()` 来初始化 Zigbee 协议栈并启动设备作为网络中的终端设备。

##### `loop()` 函数

主循环处理按钮按下以执行恢复出厂设置：

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // Key debounce handling
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

此代码检查按钮是否被按下：

- 如果按下，它会等待 100 毫秒（用于防抖处理）。
- 如果按钮保持按下超过 3 秒，它会通过调用`Zigbee.factoryReset()`触发恢复出厂设置。

当用户因网络或配对问题需要重新配置设备时，此功能非常有用。

:::tip
官方例程仍在持续更新中，我们的文档可能无法第一时间同步最新程序，如有差异，请以**[Espressif 的程序示例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**为准。
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino functions **************************/
void setup() {
  // Init LED and turn it OFF (if LED_PIN == RGB_BUILTIN, the rgbLedWrite() will be used under the hood)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Init button for factory reset
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  //Optional: set Zigbee device name and model
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Set callback function for light change
  zbLight.onLightChange(setLED);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeLight endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbLight);

  // When all EPs are registered, start Zigbee. By default acts as ZIGBEE_END_DEVICE
  log_d("Calling Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Checking button for factory reset
  if (digitalRead(BUTTON_PIN) == LOW) {  // Push button pressed
    // Key debounce handling
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // If key pressed for more than 3secs, factory reset Zigbee and reboot
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Zigbee 灯光开关

在这里，XIAO ESP32C6 作为**Zigbee 协调器**，负责控制其他 Zigbee 设备。这里的**Zigbee 开关**代表控制器，它绑定到 Zigbee 灯光设备并通过开关灯等命令来控制它。

##### 包含和定义

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER`定义为`5`。它代表开关的端点。就像在灯泡示例中一样，端点号用于定义 Zigbee 设备内的特定功能。
- `GPIO_INPUT_IO_TOGGLE_SWITCH`指向 GPIO 引脚`9`，它作为开关按钮。
- `PAIR_SIZE()`是一个用于计算给定数组大小的宏，这里用于处理按钮配置。

##### 开关配置类型和函数

代码定义了几个与开关功能相关的枚举和数据结构：

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`**枚举开关可以执行的不同功能，如开灯、关灯、切换、调节亮度等。
- **`SwitchData`**是一个将 GPIO 引脚与特定功能配对的结构体，这允许在添加具有不同功能的多个按钮时更好地组织。
- **`SwitchState`**表示用户交互期间开关的不同状态（例如，空闲、按下、释放）。

##### 实例化 Zigbee 开关

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`**是一个定义按钮功能的数组。这里，连接到`GPIO 9`的按钮将用于切换灯的开关。
- **`zbSwitch`**创建一个`ZigbeeSwitch`实例，端点号为`5`。

##### Zigbee 函数和 GPIO 中断处理

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`**在按钮被按下时调用。在这种情况下，它发送一个 Zigbee 命令来切换灯光。

###### 处理 GPIO 事件

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`**是处理 GPIO 引脚中断的中断服务例程（ISR）。它在按钮被按下时将事件放入队列中。

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`**根据参数`enabled`是`true`还是`false`来启用或禁用 GPIO 中断。

##### 设置函数

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **串行通信初始化**：初始化串行用于调试。
- **设备信息**：设置制造商和型号，允许多个设备绑定，并向 Zigbee 核心添加端点。
- **网络初始化**：重启后打开 Zigbee 网络`180`秒以允许设备加入。
- **按钮初始化**：为按钮设置 GPIO 引脚，创建队列来处理 GPIO 中断，并将中断附加到按钮。
- **等待绑定**：协调器等待直到它绑定到灯光设备后才继续。一旦绑定，它会打印绑定的设备信息。

##### 循环函数

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- **循环函数**通过从中断队列（`gpio_evt_queue`）读取并相应地更新`buttonState`来管理按钮按下。
- 当按钮被按下并释放（`SWITCH_RELEASE_DETECTED`）时，调用`onZbButton()`回调来切换灯光。
- 每**10 秒**，打印绑定的灯光用于监控目的。

:::tip
官方例程仍在持续更新中，我们的文档可能无法第一时间同步最新程序，如有差异，请以**[Espressif 的程序示例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**为准。
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee functions **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Send toggle command to the light
    zbSwitch.lightToggle();
  }
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino functions **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  //Optional: set Zigbee device name and model
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  //Optional to allow multiple light to bind to the switch
  zbSwitch.allowMultipleBinding(true);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  //Open network for 180 seconds after boot
  Zigbee.setRebootOpenNetwork(180);

  // Init button switch
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* create a queue to handle gpio event from isr */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // When all EPs are registered, start Zigbee with ZIGBEE_COORDINATOR mode
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  //Wait for switch to bound to a light:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Optional: read manufacturer and model name from the bound light
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  //List all bound lights
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Handle button switch in loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* check if there is any queue received, if yes read out the buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* callback to button_handler */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // print the bound lights every 10 seconds
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### 演示

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

恭喜您成功完成了 Zigbee 控制照明项目！还有许多令人兴奋的 Zigbee 应用等待您去探索。继续保持出色的工作！

## 参考资料

- [Zigbee Examples- Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 gets a Zigbee wrapper library](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

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
