---
description: 本文介绍如何使用 TRMNL 7.5 英寸（OG）DIY 套件与 Arduino 配合工作。
title: 与 Arduino 配合使用
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /cn/ogdiy_kit_works_with_arduino
sidebar_position: 4
last_update:
  date: 06/29/2025
  author: Allen
---


# 在 Arduino 中开始使用 TRMNL 7.5" (OG) DIY 套件

## 介绍

TRMNL 7.5" (OG) DIY 套件是一个多功能开发平台，以强大的 XIAO ESP32-S3 Plus 作为其核心。这个 DIY 套件结合了 ESP32-S3 的处理能力和美观的 7.5 英寸电子纸显示屏，为低功耗信息显示项目创造了完美的基础。本指南专注于使用 Arduino 框架对 TRMNL DIY 套件进行编程，为您提供利用其各种硬件功能的基本知识。

## 入门指南

在深入了解具体功能之前，让我们为 TRMNL 7.5" (OG) DIY 套件设置开发环境。

### 设备安装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 排线与 XIAO ePaper 显示板上的连接器对齐，然后固定锁扣以确保牢固连接。  

:::tip
FPC 排线的金属面应朝上，否则不会显示任何内容。

请按照下面的安装教程操作，很多人都会弄错。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 连接器，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**  

:::tip
请注意屏幕的柔性排线非常脆弱。操作时要小心。如果损坏，整个屏幕将停止工作。
:::
从[资源部分](#resources)打印开源外壳部件并在内部组装组件。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

首先，组装驱动板和电池。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

测试 TRMNL 套件是否工作正常。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

将屏幕插入外壳并让 FPC 排线伸出。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

连接 FPC 延长线并组装整个外壳。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 型外壳的组装方式非常相似。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果您的 TRMNL 套件距离路由器较远，您可以将天线移到外壳外面。这样会有更好的性能。
:::

### 环境准备

要使用 Arduino 对 TRMNL DIY 套件进行编程，您需要设置支持 ESP32 的 Arduino IDE。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software) 并启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div><br />

**步骤 2.** 向 Arduino IDE 添加 ESP32 开发板支持。

在 Arduino IDE 中，转到 **File > Preferences** 并将以下 URL 添加到"Additional Boards Manager URLs"字段：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包。

导航到 **Tools > Board > Boards Manager**，搜索"esp32"并安装 Espressif Systems 的 ESP32 包。

**步骤 4.** 选择正确的开发板。

转到 **Tools > Board > ESP32 Arduino** 并选择"XIAO_ESP32S3_PLUS"。

**步骤 5.** 使用 USB-C 线缆将您的 TRMNL DIY 套件连接到计算机。

**步骤 6.** 从 **Tools > Port** 选择正确的端口。

## Arduino 示例

现在让我们通过 Arduino 代码示例探索 TRMNL DIY 套件的主要功能。

### 用户按钮

TRMNL DIY 套件具有三个用户可编程按钮（D1、D2、D4）和一个复位按钮。让我们创建一个简单的示例来检测按钮按下。

#### 按钮测试示例

此示例将读取三个用户按钮的状态并将其状态打印到串行监视器。

```cpp
// TRMNL DIY Kit - Button Test Example

// Define button pins
const int BUTTON_D1 = D1;  // First user button
const int BUTTON_D2 = D2;  // Second user button
const int BUTTON_D4 = D4;  // Third user button

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Button Test");

  // Configure button pins as inputs with internal pull-up resistors
  pinMode(BUTTON_D1, INPUT_PULLUP);
  pinMode(BUTTON_D2, INPUT_PULLUP);
  pinMode(BUTTON_D4, INPUT_PULLUP);
}

void loop() {
  // Read button states (buttons are LOW when pressed because of pull-up resistors)
  bool d1Pressed = !digitalRead(BUTTON_D1);
  bool d2Pressed = !digitalRead(BUTTON_D2);
  bool d4Pressed = !digitalRead(BUTTON_D4);

  // Print button states if any button is pressed
  if (d1Pressed || d2Pressed || d4Pressed) {
    Serial.print("Button D1: ");
    Serial.print(d1Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D2: ");
    Serial.print(d2Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D4: ");
    Serial.println(d4Pressed ? "PRESSED" : "released");

    // Add a small delay to avoid repeated readings
    delay(200);
  }
}
```

**代码工作原理：**

1. 我们为三个用户按钮（D1、D2、D4）定义引脚常量。

2. 在 `setup()` 函数中，我们初始化串行通信并将按钮引脚配置为带内部上拉电阻的输入。

3. 在 `loop()` 函数中，我们读取每个按钮的状态。由于我们使用上拉电阻，当按钮被按下时引脚读取为 LOW。

4. 我们反转读数（使用 `!` 操作符），使 `true` 表示"按下"，`false` 表示"释放"。

5. 如果任何按钮被按下，我们将所有按钮的状态打印到串行监视器。

6. 小延迟防止按钮被按住时快速重复读取。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/6_button_test_serial.png" style={{width:1000, height:'auto'}}/></div>

### 电池电压监测

TRMNL 7.5" (OG) DIY 套件包含一个用于监测连接到引脚 D0 (GPIO1) 的电池电压的电路。此设计的一个重要特性是它还包含一个控制引脚 (GPIO6) 来启用/禁用 ADC 电源，这有助于在不主动测量时节省电池电量。

#### 电池电压监测示例

```cpp
// TRMNL DIY Kit - Battery Voltage Monitoring Example

#define BATTERY_PIN 1       // GPIO1 (A0) - BAT_ADC
#define ADC_EN_PIN 6        // GPIO6 (A5) - ADC_EN

const float CALIBRATION_FACTOR = 0.968;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Battery Voltage Monitoring Example");

  // Configure ADC_EN
  pinMode(ADC_EN_PIN, OUTPUT);
  digitalWrite(ADC_EN_PIN, LOW);  // Start with ADC disabled to save power

  // Configure ADC
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);
}

void loop() {
  // Read battery voltage
  float voltage = readBatteryVoltage();

  // Print the results
  Serial.print("Battery Voltage: ");
  Serial.print(voltage, 2);  // Print with 2 decimal places
  Serial.println("V");

  // Determine battery level
  String batteryStatus;
  if (voltage >= 4.0) {
    batteryStatus = "Full";
  } else if (voltage >= 3.7) {
    batteryStatus = "Good";
  } else if (voltage >= 3.5) {
    batteryStatus = "Medium";
  } else if (voltage >= 3.2) {
    batteryStatus = "Low";
  } else {
    batteryStatus = "Critical";
  }

  Serial.print("Battery Status: ");
  Serial.println(batteryStatus);
  Serial.println();

  // Wait for a while before the next reading
  delay(5000);  // 5 seconds
}

float readBatteryVoltage() {
  // Enable ADC
  digitalWrite(ADC_EN_PIN, HIGH);
  delay(10);  // Short delay to stabilize

  // Read 30 times and average for more stable readings
  long sum = 0;
  for(int i = 0; i < 30; i++) {
    sum += analogRead(BATTERY_PIN);
    delayMicroseconds(100);
  }

  // Disable ADC to save power
  digitalWrite(ADC_EN_PIN, LOW);

  // Calculate voltage
  float adc_avg = sum / 30.0;
  float voltage = (adc_avg / 4095.0) * 3.6 * 2.0 * CALIBRATION_FACTOR;

  return voltage;
}
```

**代码工作原理：**

1. 我们定义两个重要的引脚：

- `BATTERY_PIN` (GPIO1/A0): 连接到电池电压分压器

- `ADC_EN_PIN` (GPIO6/A5): 控制 ADC 测量电路的电源

2. 我们定义了一个 `CALIBRATION_FACTOR` (0.968) 来微调电压读数的准确性。

3. 在 `setup()` 函数中：

- 我们初始化串口通信

- 将 ADC_EN 引脚配置为输出并设置为 LOW（禁用）以节省电源

- 将 ADC 分辨率设置为 12 位（0-4095）

- 为电池引脚配置适当的衰减

4. 在 `loop()` 函数中：

- 我们调用 `readBatteryVoltage()` 来获取当前电池电压

- 我们将电压打印到串口监视器

- 我们根据电压阈值确定并显示电池状态

- 我们等待 5 秒钟再进行下一次读数

5. `readBatteryVoltage()` 函数：

- 通过将 ADC_EN_PIN 设置为 HIGH 来启用 ADC 电路

- 短暂等待电路稳定

- 进行 30 次读数并取平均值以获得更稳定的结果

- 禁用 ADC 电路以节省电源

- 使用以下参数计算实际电池电压：

  - 平均 ADC 读数
  - ADC 分辨率（4095）
  - 参考电压（3.6V）
  - 电压分压器系数（2.0）
  - 校准系数（0.968）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/7_battery_monitor_serial.png" style={{width:1000, height:'auto'}}/></div>

**节能设计：**

此实现的一个关键特性是能够在不使用时禁用电池测量电路。TRMNL DIY Kit 专为低功耗设计，这种方法通过仅在需要实际测量时为电压分压器电路供电来帮助延长电池寿命。

校准系数（0.968）补偿了电压分压器中的元件公差，有助于确保准确的读数。如果您发现读数与万用表测量结果相比始终存在偏差，则可能需要对您的特定板子稍微调整此值。

进行多次读数并取平均值有助于减少噪声并提供更稳定的电压测量，这对于电池监控尤其重要，因为小的电压变化对于确定剩余容量可能很重要。

## ePaper 显示屏

TRMNL 7.5" (OG) DIY Kit 配备了一块美观的 7.5 英寸黑白 ePaper 显示屏，在各种光照条件下都能提供清晰的可见性和超低功耗。在本节中，我们将探索如何使用 Arduino 设置和控制 ePaper 显示屏。

### 硬件设置

在开始编程之前，让我们确保 ePaper 显示屏正确连接到 TRMNL 板：

**步骤 1.** 将 ePaper 显示屏连接到驱动板上的 24 针连接器。连接器支持盲插，因此您不会插错。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/8_connect_display.png" style={{width:600, height:'auto'}}/></div>

**步骤 2.** 插入排线后，通过关闭锁定机构来固定它。

:::caution
排线很脆弱，容易损坏。尽量避免侧向弯曲。
:::

**步骤 3.** 确保跳线连接板上的 24Pin 和 GND 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/10_jumper_setting.png" style={{width:700, height:'auto'}}/></div>

### 软件设置

为了控制 ePaper 显示屏，我们将使用 Seeed_GFX 库，它为各种 Seeed Studio 显示设备提供全面支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 通过在 Arduino IDE 中添加 ZIP 文件来安装库。转到 **Sketch > Include Library > Add .ZIP Library** 并选择下载的 ZIP 文件。

:::note
如果您之前安装了 TFT_eSPI 库，您可能需要暂时从 Arduino 库文件夹中删除或重命名它以避免冲突，因为 Seeed_GFX 是 TFT_eSPI 的分支，具有附加功能。
:::

**步骤 3.** 从 Seeed_GFX 库中打开示例代码：**File > Seeed_GFX > Examples > ePaper > Basic > Clock**

**步骤 4.** 通过点击示例选项卡旁边的箭头并选择 "New Tab"，在与您的 Arduino 代码相同的文件夹中创建一个名为 `driver.h` 的新文件。

**步骤 5.** 将新文件命名为 `driver.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

**步骤 6.** 转到 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并选择 "TRMNL 7.5" (OG) DIY Kit"，如图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/13_display_config_tool.png" style={{width:700, height:'auto'}}/></div>

**步骤 7.** 复制生成的代码并将其粘贴到您创建的 `driver.h` 文件中。代码应该如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

步骤 8. 现在您可以将示例上传到您的 TRMNL DIY Kit 并看到 ePaper 显示屏的运行效果！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/18_upload_sketch.jpg" style={{width:700, height:'auto'}}/></div>

### 基础 ePaper 显示屏示例

让我们探索一个简单的模拟时钟示例，演示如何在 ePaper 显示屏上绘制图形。[此示例](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/Clock/Clock.ino)创建了一个带有时针、分针和秒针的经典时钟表盘。

```cpp
#include <SPI.h>
#include <TFT_eSPI.h> // Hardware-specific library

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h

EPaper epaper = EPaper(); // Invoke custom library

float sx = 0, sy = 1, mx = 1, my = 0, hx = -1, hy = 0; // Saved H, M, S x & y multipliers
float sdeg = 0, mdeg = 0, hdeg = 0;
uint16_t osx = 120, osy = 120, omx = 120, omy = 120, ohx = 120, ohy = 120; // Saved H, M, S x & y coords
uint16_t x0 = 0, x1 = 0, yy0 = 0, yy1 = 0;
uint32_t targetTime = 0; // for next 1 second timeout

static uint8_t conv2d(const char *p);                                                // Forward declaration needed for IDE 1.6.x
uint8_t hh = conv2d(__TIME__), mm = conv2d(__TIME__ + 3), ss = conv2d(__TIME__ + 6); // Get H, M, S from compile time

bool initial = 1;

#endif

void setup(void)
{
#ifdef EPAPER_ENABLE
  epaper.begin();
  epaper.setRotation(0);

  epaper.fillScreen(TFT_WHITE);

  epaper.setTextColor(TFT_BLACK, TFT_WHITE); // Adding a background colour erases previous text automatically

  // Draw clock face
  epaper.fillCircle(120, 120, 118, TFT_BLACK);
  epaper.fillCircle(120, 120, 110, TFT_WHITE);

  // Draw 12 lines
  for (int i = 0; i < 360; i += 30)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 114 + 120;
    yy0 = sy * 114 + 120;
    x1 = sx * 100 + 120;
    yy1 = sy * 100 + 120;

    epaper.drawLine(x0, yy0, x1, yy1, TFT_BLACK);
  }

  // Draw 60 dots
  for (int i = 0; i < 360; i += 6)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 102 + 120;
    yy0 = sy * 102 + 120;
    // Draw minute markers
    epaper.drawPixel(x0, yy0, TFT_BLACK);

    // Draw main quadrant dots
    if (i == 0 || i == 180)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
    if (i == 90 || i == 270)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
  }

  epaper.fillCircle(120, 121, 3, TFT_BLACK);

  // Draw text at position 120,260 using fonts 4
  // Only font numbers 2,4,6,7 are valid. Font 6 only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : . - a p m
  // Font 7 is a 7 segment font and only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : .
  epaper.drawCentreString("Time flies", 120, 260, 4);

  epaper.update();

  targetTime = millis() + 1000;
#endif
}

void loop()
{
#ifdef EPAPER_ENABLE
  if (targetTime < millis())
  {
    targetTime += 1000;
    ss++; // Advance second
    if (ss == 60)
    {
      ss = 0;
      mm++; // Advance minute
      if (mm > 59)
      {
        mm = 0;
        hh++; // Advance hour
        if (hh > 23)
        {
          hh = 0;
        }
      }
    }

    // Pre-compute hand degrees, x & y coords for a fast screen update
    sdeg = ss * 6;                     // 0-59 -> 0-354
    mdeg = mm * 6 + sdeg * 0.01666667; // 0-59 -> 0-360 - includes seconds
    hdeg = hh * 30 + mdeg * 0.0833333; // 0-11 -> 0-360 - includes minutes and seconds
    hx = cos((hdeg - 90) * 0.0174532925);
    hy = sin((hdeg - 90) * 0.0174532925);
    mx = cos((mdeg - 90) * 0.0174532925);
    my = sin((mdeg - 90) * 0.0174532925);
    sx = cos((sdeg - 90) * 0.0174532925);
    sy = sin((sdeg - 90) * 0.0174532925);

    if (ss == 0 || initial)
    {
      initial = 0;
      // Erase hour and minute hand positions every minute
      epaper.drawLine(ohx, ohy, 120, 121, TFT_WHITE);
      ohx = hx * 62 + 121;
      ohy = hy * 62 + 121;
      epaper.drawLine(omx, omy, 120, 121, TFT_WHITE);
      omx = mx * 84 + 120;
      omy = my * 84 + 121;
    }

    // Redraw new hand positions, hour and minute hands not erased here to avoid flicker
    epaper.drawLine(osx, osy, 120, 121, TFT_WHITE);
    osx = sx * 90 + 121;
    osy = sy * 90 + 121;
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);
    epaper.drawLine(ohx, ohy, 120, 121, TFT_BLACK);
    epaper.drawLine(omx, omy, 120, 121, TFT_BLACK);
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);

    epaper.fillCircle(120, 121, 3, TFT_BLACK);
    epaper.update();
  }
#endif
}

#ifdef EPAPER_ENABLE
static uint8_t conv2d(const char *p)
{
  uint8_t v = 0;
  if ('0' <= *p && *p <= '9')
    v = *p - '0';
  return 10 * v + *++p - '0';
}
#endif
```

**时钟示例的工作原理：**

这个优雅的示例在 ePaper 显示屏上创建了一个经典的模拟时钟。让我们分解一下它是如何工作的：

1. **初始化和配置：**
   - 代码使用 `#ifdef EPAPER_ENABLE` 条件编译，确保只在支持电子纸显示屏的硬件上运行。
   - 我们声明变量来跟踪时钟指针的位置和它们的先前位置。
   - 初始时间基于使用 `__TIME__` 宏的草图编译时间设置。

2. **Setup 函数：**
   - 我们使用 `epaper.begin()` 初始化电子纸显示屏。
   - 使用 `epaper.fillScreen(TFT_WHITE)` 将显示屏填充为白色作为背景。
   - 我们将时钟表面绘制为带有白色内部的黑色圆圈。
   - 小时标记绘制为围绕圆周的 12 条线。
   - 分钟标记绘制为 60 个点，在整点位置有特殊强调。
   - 在时钟表面的中心绘制一个小黑圆圈。
   - 在显示屏底部添加文本 "Time flies"。
   - 最后，调用 `epaper.update()` 来更新物理显示屏。

3. **Loop 函数：**
   - 每秒（当 `millis()` 超过 `targetTime` 时），我们更新时钟指针。
   - 我们根据需要递增秒、分钟和小时。
   - 我们根据当前时间计算每个指针的角度。
   - 使用三角函数计算指针的位置：
     - 时针：每小时 30 度（加上分钟的调整）
     - 分针：每分钟 6 度（加上秒的调整）
     - 秒针：每秒 6 度
   - 为了减少不必要的更新并延长显示屏的使用寿命，我们只在每分钟（当秒 = 0 时）擦除和重绘时针和分针。
   - 秒针每秒更新一次，通过擦除其先前位置并在新位置绘制。
   - 绘制所有指针后，我们刷新中心点并调用 `epaper.update()` 来更新物理显示屏。

4. **辅助函数：**
   - `conv2d` 函数将数字的字符串表示转换为整数值，用于解析编译时的小时、分钟和秒值。

**关于此示例的重要说明：**

1. **显示更新：** 与 LCD 或 OLED 显示屏不同，ePaper 显示屏不是为频繁更新而设计的。此示例每秒更新显示屏，这对于演示目的是可以的，但在实际应用中，您可能希望更新频率更低以延长显示屏的使用寿命。

2. **部分更新：** 此示例通过仅擦除和重绘显示屏的必要部分来演示部分更新，这比刷新整个屏幕更高效。

3. **条件编译：** `#ifdef EPAPER_ENABLE` 指令确保代码仅在系统中正确配置电子纸显示屏时才编译和运行。

4. **绘图函数：** 示例展示了各种绘图函数：
   - `fillCircle()` 用于创建时钟表面
   - `drawLine()` 用于绘制时钟指针和小时标记
   - `drawPixel()` 和 `fillCircle()` 用于分钟标记
   - `drawCentreString()` 用于居中文本

这个模拟时钟示例为在 TRMNL 7.5" (OG) DIY Kit 的 ePaper 显示屏上创建您自己的图形应用程序提供了一个很好的起点。

### 绘图和文本函数

Seeed_GFX 库提供了许多在显示屏上绘图的函数：

- `display.drawPixel(x, y, color)`：绘制单个像素
- `display.drawLine(x0, y0, x1, y1, color)`：绘制线条
- `display.drawRect(x, y, w, h, color)`：绘制矩形轮廓
- `display.fillRect(x, y, w, h, color)`：绘制填充矩形
- `display.drawCircle(x, y, r, color)`：绘制圆形轮廓
- `display.fillCircle(x, y, r, color)`：绘制填充圆形
- `display.drawTriangle(x0, y0, x1, y1, x2, y2, color)`：绘制三角形轮廓
- `display.fillTriangle(x0, y0, x1, y1, x2, y2, color)`：绘制填充三角形
- `display.setCursor(x, y)`：设置文本光标位置
- `display.setTextColor(color)`：设置文本颜色
- `display.setTextSize(size)`：设置文本大小（1-6）
- `display.print("text")`：在光标位置打印文本
- `display.println("text")`：打印文本并换行

此单色显示屏的可用颜色为：

- `GxEPD_BLACK`：黑色像素
- `GxEPD_WHITE`：白色像素

记住在绘图操作后调用 `display.update()` 来更新物理显示屏。

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
