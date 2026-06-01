---
description: 适用于 XIAO ePaper Driver Board（EE0x）系列的 PlatformIO 使用手册——硬件概览、项目初始化、库配置，以及在 ESP32-S3 上的端到端编程。文中以 EE04 为示例；EE02 / EE03 / EE05 共享相同的工作流程。
title: PlatformIO 使用手册
keywords:
  - ePaper 显示屏
  - PlatformIO
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/pio_show_1.webp
sidebar_position: 2
slug: /ee04_with_platformio
aliases:
  - /ee0x_with_platformio
last_update:
  date: 04/28/2026
  author: Zeller
createdAt: '2025-10-09'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/ee04_with_platformio/
---

# PlatformIO 使用手册：XIAO ePaper Driver Board（EE0x）

:::tip 本手册覆盖整个 EE0x 系列
适用于 **EE02 / EE03 / EE04 / EE05**。由于这四块板都基于相同的 XIAO ESP32-S3，并使用相同的 `Seeed_GFX` 驱动流水线，因此项目配置、库列表和代码模式完全一致；它们之间唯一的差别，是你在 `driver.h` 的[配置工具](https://seeed-studio.github.io/Seeed_GFX/)中选择的 `BOARD_SCREEN_COMBO` 值。

**示例工程：EE04 + 7.5" 800×480 单色 ePaper 屏幕。** 你只需在 `driver.h` 中替换为自己的板卡 + 屏幕组合，其余工作流程（按键 GPIO、电池 ADC、仪表盘 UI、按键驱动的页面切换）都可以直接沿用。
:::

:::note 想用 Arduino 吗？
本手册**专门面向 PlatformIO**。如果你更倾向于使用 **Arduino IDE**（这是我们 ePaper 产品线更常见的路径），请参考 **[使用 Arduino](/cn/epaper_work_with_arduino)** 获取平台级指南，参考 [reTerminal E 系列 — ePaper 显示屏使用手册](/cn/reterminal_e10xx_with_arduino) 获取显示渲染示例，以及 [reTerminal E 系列 — 板载外设使用手册](/cn/reterminal_e10xx_with_arduino_peripherals) 获取硬件级示例（LED、蜂鸣器、按键、SHT4x、电池、microSD），这些示例同样适用于 EE0x 板卡。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:500, height:'auto'}}/></div>

## PlatformIO 介绍

PlatformIO 是一个功能强大且高度可扩展的嵌入式系统开发生态。它无缝集成了对大量开发板和微控制器的支持，提供了极高的灵活性。PlatformIO 的突出优势在于其卓越的可扩展性：即使你的特定开发板未被原生支持，也可以通过其架构轻松定义自定义开发板。

更重要的是，PlatformIO 为熟悉 Arduino 的开发者架起了桥梁，只需引入相关库，就可以编译和部署 Arduino 风格的代码。

### 硬件准备

你需要准备一块 XIAO ePaper Display Board EE04，以及一块支持尺寸范围内的屏幕。本教程中使用的是一块 24 针接口的 800×480 7.5 英寸墨水屏作为示例。
<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.5" 单色 eInk</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/7.5-inch-elink_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 下载 Vscode

根据你所使用的系统下载 [Vscode](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### 安装 PlatformIO

打开 VSCode，点击扩展（Extensions），搜索 PlatformIO 并选择安装。安装完成后，重启 VSCode。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 新建项目

- 打开 PIO Home 界面并选择 `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name：为你的项目命名
- Board：选择 Seeed Studio XIAO ESP32S3
- Framework：选择 Ardunio
- Location：工程文件的路径可以设置为自定义路径，也可以选择默认路径。
- 点击 "Finish" 并等待创建完成。然后在工作区中打开该项目文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### 添加 Seeed GFX 库

:::tip
此库与 TFT 库具有相同的功能，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

我们将使用 Seeed_GFX 库，它为多种 Seeed Studio 显示设备提供了完整支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 将解压后的文件移动到项目文件的 `lib` 目录下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 添加 `driver.h` 文件

[Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/)

- 在工具页面中，选择你正在使用的屏幕规格。这里选择的是 7.5 英寸单色电子纸屏幕。
- 驱动板选择 XIAO ePaper Display Board EE04，然后会生成对应的驱动代码。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
如果选择错误，屏幕将不会显示任何内容。
所以请务必确认你的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- 在 PlatfromIO 项目文件的 `lib` 目录下新建一个 `driver` 文件夹，然后添加 `driver.h` 文件。复制生成的头文件代码，并按 Ctrl + S 保存。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### 上传

将代码复制到 `main.cpp`，点击 `Build`，完成后再上传。

```cpp
#include "TFT_eSPI.h"

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h
EPaper epaper;
#endif

void setup()
{
#ifdef EPAPER_ENABLE
    epaper.begin();
    epaper.fillScreen(TFT_WHITE);

    epaper.fillCircle(25, 25, 15, TFT_BLACK);
    epaper.fillRect(epaper.width() - 40,  10, 30, 30, TFT_BLACK);

    for (int i = 0; i < epaper.height() / 80; i++)
    {
        epaper.setTextSize(i + 1);
        epaper.drawLine(10, 70 + 60 * i, epaper.width() - 10, 70 + 60 * i, TFT_BLACK);
        epaper.drawString("Hello EE04", 10, 80 + 60 * i);
    }

    epaper.update(); // update the display

#endif
}

void loop()
{
    // put your main code here, to run repeatedly:
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_upload_2.png" style={{width:800, height:'auto'}}/></div>

- 效果演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### 用户按键

EE04 提供了三个用户可编程按键，可用于多种控制用途。本节演示如何读取按键状态，并使用 Arduino 对按键按下做出响应。

在 EE04 上，这三个按键连接到 ESP32-S3 的：

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

所有按键均为低电平有效，这意味着按下时读取为 LOW，松开时读取为 HIGH。

基础按键读取示例

此示例演示如何检测按键按下，并向串口监视器打印消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
#include <Arduino.h>
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

代码说明：

- **核心函数解析**

1. **`pinMode(pin, mode)`**  
   - 作用：配置引脚模式。  
   - 这里使用 `INPUT_PULLUP` 模式以启用内部上拉电阻。这样在按键未按下时，引脚默认输出高电平（HIGH），按键按下（与地相连）时输出低电平（LOW）。

2. **`digitalRead(pin)`**  
   - 作用：读取指定引脚的电平状态（HIGH 或 LOW）。  
   - 在循环中使用它实时获取按键当前状态，以便判断按键是否被触发。

3. **`Serial.begin(baud)`** 和 **`Serial.println()`**  
   - 前者用于初始化串口通信（波特率为 115200），后者用于向串口输出文本信息，用来在监视器中显示按键状态。

4. **`delay(ms)`**  
   - 作用：让程序暂停指定的毫秒数。  
   - 这里有两个使用场景：一是在 `setup()` 中等待串口连接；二是在按键状态变化后延时 50ms，通过“等待抖动消失”实现硬件消抖，防止误触发。

- **核心逻辑解析**

1. **状态对比检测**  
   - 记录每个按键的“上一次状态”（如 `lastKey0State`），并在循环中读取“当前状态”。  
   - 如果“当前状态 ≠ 上一次状态”，则说明按键被触发（按下或松开）。

2. **按键动作判断**  
   - 当状态由 HIGH 变为 LOW：判定为“按下”（输出 "pressed"）。  
   - 当状态由 LOW 变为 HIGH：判定为“松开”（输出 "released"）。  
   - 每次状态变化后，将“上一次状态”更新为当前状态，作为下一次比较的参考。

3. **循环执行**  
   - `loop()` 函数会无限循环运行，反复执行“读取状态 → 比较状态 → 输出结果”的过程，从而实现实时检测。

- 效果演示：

串口监视器可以显示串口的状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_button_1.png" style={{width:800, height:'auto'}}/></div>

### 电池电压

- XIAO ePaper Display Board EE04 使用 3.7V - 4.2V 锂电池供电。此外，它还提供了一个 ADC 接口，方便你测量电压并实时监测电池电压。
- ADC 测量引脚为 `A0 (GPIO1)`，ADC 使能引脚为 `D5 (GPIO_6)`。

连接：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_0.png" style={{width:600, height:'auto'}}/></div><br/>

用于监测电池电压的程序，仅供参考。

```cpp
#include <Arduino.h>

#define BATTERY_ADC A0  // Battery voltage ADC pin
#define ADC_EN 6        // ADC enable pin
#define VOLTAGE_DIVIDER_RATIO 2.0  // Voltage divider ratio (adjust based on your resistor values) ((R1+R2)/R2) 

// Function to read battery voltage
static float readBatteryVoltage() {
  int sum = 0;
  // Read multiple samples for better accuracy
  for (int i = 0; i < 10; i++) {
    sum += analogRead(BATTERY_ADC);
    delay(2);
  }
  int adcValue = sum / 10;

  // Calculate actual battery voltage
  // Formula: voltage = (ADC_value / 4095) * 3.3V * divider_ratio
  float voltage = (adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO;

  return voltage;
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  analogReadResolution(12);  // Set ADC resolution to 12 bits
  pinMode(BATTERY_ADC, INPUT);

  pinMode(ADC_EN, OUTPUT);
  digitalWrite(ADC_EN, HIGH);  // Enable ADC
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery Voltage: ");
  Serial.print(batteryVoltage, 2);
  Serial.println(" V");

  delay(500);  // Read every 0.5 seconds
}
```

代码说明：

- 主要功能：

  - **电池电压采集**：通过 ADC 引脚读取分压后的电池电压（电池电压可能超过 Arduino 的 ADC 参考电压，因此需要先进行分压）。
  - **精度优化**：通过多次采样取平均值来减小电路噪声干扰。
  - **电压换算**：将 ADC 的数字信号转换为实际电池电压（考虑分压比和参考电压）。
  - **串口输出**：周期性地通过串口打印测得电压，方便外部设备（如电脑）查看。

- 核心函数与作用

  - `setup()`（初始化函数）

    - **作用**：在程序启动时运行一次，用于配置硬件和参数。
    - **关键操作**：
      - `Serial.begin(115200)`：初始化串口通信（波特率 115200），用于输出电压数据。
      - `analogReadResolution(12)`：将 ADC 分辨率设置为 12 位（读取范围：0~4095），以获得更高精度。
      - `pinMode(BATTERY_ADC, INPUT)`：将电池检测引脚（A0）设置为输入模式，用于接收模拟信号。
      - `pinMode(ADC_EN, OUTPUT)` 和 `digitalWrite(ADC_EN, HIGH)`：使能 ADC 模块（低功耗应用中可仅在测量时打开）。

  - `loop()`（主循环函数）

    - **作用**：在初始化完成后反复运行，实现周期性电压检测与输出。
    - **关键操作**：
      - 调用 `readBatteryVoltage()` 获取当前电池电压。
      - 使用 `Serial.print()`/`Serial.println()` 以格式化方式打印电压（保留 2 位小数，例如 "Battery Voltage: 3.82 V"）。
      - `delay(500)`：设置两次测量之间的间隔为 0.5 秒。

  - `readBatteryVoltage()`（核心测量函数）

    - **作用**：读取 ADC 信号，对结果进行优化，并换算为实际电压。
    - **关键操作**：
      - **多次平均采样**：读取 ADC 10 次，累加后取平均值（降低噪声）。
      - `analogRead(BATTERY_ADC)`：从 A0 引脚读取模拟电压（返回 0~4095）。
      - `delay(2)`：两次采样之间间隔 2ms，以提高稳定性。
      - **电压计算**：使用公式 `(adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO` 得到真实电池电压。
      - 返回计算得到的电压值（float 类型），供 `loop()` 使用。

- 效果演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_1.png" style={{width:800, height:'auto'}}/></div>

## UI 设计

EE04 可以帮助你实现各种创意设计，例如仪表盘和图像显示。配合按键使用，可以实现多页面之间的切换。下面是一个仪表盘示例。

:::tip
在本示例中，仪表盘的绘制操作是基于 LVGL 库完成的。

LVGL 官方文档：[LVGL docs](https://docs.lvgl.io/master/examples.html#get-started)
:::

### 软件

- 添加 LVGL 库。在 PIO Home 界面的 Library 工具中搜索 LVGL，然后选择将该库添加到当前项目。建议选择 9.0 或以上版本的 LVGL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_1.png" style={{width:800, height:'auto'}}/></div>

- 在 **lib** 目录中
  - 创建 **dashboard** 文件夹，然后创建 `dashboard_ui.cpp` 和 `dashboard_ui.h` 文件。这些文件主要用于存放基于 LGVL 的绘图代码。
  - 创建 **e1001_display** 文件夹，并添加屏幕驱动文件 `e1001_display.c` 和 `e1001_display.h`
  - 创建 **lvgl_conf** 文件夹，并添加 LVGL 的配置文件 `lv_conf.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_2.png" style={{width:800, height:'auto'}}/></div><br/>

完整参考代码：[EE04_Dashboard_ui.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_dashboard_ui.zip)

<details>

<summary>main.cpp 代码</summary>

```cpp
/*
 * Seeed reTerminal E1001 Multi-UI Demo
 * - All hardware I/O and e-paper driver work happens here.
 * - All runtime parameters and debug logs live here.
 * - dashboard_ui.cpp is a pure LVGL UI layer (no driver calls, no runtime params).
 *
 * UI switching:
 *   KEY0 (GPIO2) → Vehicle Dashboard
 *   KEY1 (GPIO3) → Smart Home
 *   KEY2 (GPIO5) → Super Mario (default)
 */

#include <TFT_eSPI.h>
#include <lvgl.h>

#include "dashboard_ui.h"  // Pure UI layer
#include "e1001_display.h" // E1001 e-paper driver (init/refresh in this file only)

/* ============ Global driver object ============ */
static e1001_driver_t e1001_driver;

/* ============ Current UI ============ */
static UIType current_ui = UI_SUPER_MARIO;

/* ============ Smart Home runtime parameters (tuned here) ============ */
static String smh_location = "New York";
static String smh_weather = "Sunny";
static float smh_temperature = 22.5f;
static int smh_humidity = 45;
static float smh_batt_voltage = 12.4f;
static int smh_batt_capacity = 85;
static int smh_wifi_signal = 4; // 0..4

/* ============ Vehicle runtime parameters (tuned here) ============ */
static int veh_speed = 85;        // km/h
static int veh_rpm = 2800;        // RPM
static int veh_fuel = 75;         // %
static int veh_engine_temp = 82;  // °C
static char veh_gear = 'D';       // gear char
static long veh_odometer = 86531; // km
static bool veh_seatbelt = true;  // indicator example

/* ---------------------------------------------------------------
 * LVGL periodic tick (moved here from dashboard_ui.cpp)
 * --------------------------------------------------------------- */
void ui_update_loop()
{
    lv_timer_handler();
    delay(50);
}

/* ---------------------------------------------------------------
 * Rebuild the active screen for a given UI type (moved here)
 * --------------------------------------------------------------- */
void load_ui(UIType type)
{
    lv_obj_clean(lv_scr_act());
    current_ui = type;

    switch (type)
    {
    case UI_VEHICLE_DASHBOARD:
        create_vehicle_dashboard_ui();
        break;
    case UI_SMART_HOME:
        create_smarthome_ui();
        break;
    case UI_SUPER_MARIO:
    default:
        create_supermario_ui();
        break;
    }
}

/* ---------------------------------------------------------------
 * Helper to apply Smart Home params to the active UI (if loaded)
 * --------------------------------------------------------------- */
static void apply_smarthome_params()
{
    update_temperature(smh_temperature);
    update_humidity(smh_humidity);
    update_battery_voltage(smh_batt_voltage);
    update_battery_capacity(smh_batt_capacity);
    update_wifi_signal(smh_wifi_signal);
    update_weather_status(smh_weather.c_str());
    update_location(smh_location.c_str());

    // Example to-do placeholders (UI has checkboxes already)
    add_todo_item("Water plants");
    add_todo_item("Check security");
    add_todo_item("Update firmware");
    add_todo_item("Check smart plugs");
}

/* -------------------------------------------------------------
 * Helper to apply Vehicle params to the active UI (if loaded)
 * ------------------------------------------------------------- */
static void apply_vehicle_params()
{
    update_speed_gauge(veh_speed);
    update_rpm_gauge(veh_rpm);
    update_fuel_level(veh_fuel);
    update_engine_temp(veh_engine_temp);
    update_gear_position(veh_gear);
    update_odometer(veh_odometer);
    set_warning_indicator(0, veh_seatbelt);
}

/* -------------------------------------------------------------
 * Switch UI (rebuilds the UI and applies current parameters)
 * ------------------------------------------------------------- */
static void switch_ui(UIType next_ui)
{
    if (next_ui == current_ui)
        return;

    current_ui = next_ui;
    load_ui(current_ui);

    if (current_ui == UI_VEHICLE_DASHBOARD)
    {
        Serial.println("[UI] Loaded Vehicle Dashboard");
        apply_vehicle_params();
    }
    else if (current_ui == UI_SMART_HOME)
    {
        Serial.println("[UI] Loaded Smart Home");
        apply_smarthome_params();
    }
    else
    {
        Serial.println("[UI] Loaded Super Mario");
    }

    // Trigger an e-paper refresh immediately after rebuilding UI
    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Setup
 * ------------------------------------------------------------- */
void setup()
{
    Serial.begin(115200);
    Serial.println("LVGL Multi-UI + E1001 e-paper demo starting...");

    // Configure keys (active LOW due to INPUT_PULLUP)
    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    // Initialize e-paper (includes LVGL/timer/display config handled by your driver)
    Serial.println("Initializing E1001 e-paper driver...");
    e1001_display_init(&e1001_driver);
    Serial.println("E1001 init done.");

    // Default UI: Super Mario
    current_ui = UI_SUPER_MARIO;
    load_ui(current_ui);
    Serial.println("Default UI created: Super Mario");

    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Loop: button-based UI switching + LVGL ticks + e-paper refresh
 * ------------------------------------------------------------- */
void loop()
{
    // Handle UI switching (debounced)
    if (digitalRead(BUTTON_KEY0) == LOW)
    { // Vehicle
        switch_ui(UI_VEHICLE_DASHBOARD);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY1) == LOW)
    { // Smart Home
        switch_ui(UI_SMART_HOME);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY2) == LOW)
    { // Super Mario
        switch_ui(UI_SUPER_MARIO);
        delay(300);
    }

    // Drive LVGL internal timers only (no driver I/O in UI layer)
    ui_update_loop();

    // Check if e-paper refresh is needed (driver logic stays here)
    if (e1001_display_should_refresh(&e1001_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1001_display_refresh(&e1001_driver);
        Serial.println("Display refresh complete.");
    }
}
```

</details>

### 效果演示

按下 EE04 板上的按键可以切换到对应的 UI 界面：

- KEY1: 车辆仪表盘
- KEY2: 智能家居仪表盘
- KEY3: 超级马里奥
- 默认: 超级马里奥

<div class="table-center">
<table align="center">
    <tr>
        <th>超级马里奥</th>
        <th>车辆</th>
        <th>智能家居</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_3.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

### 资源

- **7.5" 单色电子墨水外壳（3D 模型）**: [从 Printables 下载](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
