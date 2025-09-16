---
description: 60GHz 毫米波呼吸心跳检测传感器套件与 XIAO ESP32C6 (MR60BHA2) 入门指南
title: MR60BHA2 入门指南
keywords:
- mmwave
- radar
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /cn/getting_started_with_mr60bha2_mmwave_kit
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# 60GHz 毫米波呼吸心跳检测传感器套件与 XIAO ESP32C6 (MR60BHA2) 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div><br />

介绍我们为 XIAO 设计的先进**毫米波传感器模块**，旨在为[跌倒检测](https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/)和心跳监测提供前沿的监控解决方案。这些模块由强大的 XIAO ESP32 微控制器驱动，内置 Wi-Fi 和蓝牙连接功能，提供精确可靠的检测能力。无论您需要实时监测跌倒还是以敏感精度跟踪心跳，我们的模块都配备了最先进的技术，包括可定制的 RGB LED 和环境光感应。通过 Grove GPIO 端口的便捷扩展选项，这些多功能模块非常适合广泛的应用场景，从智能家居集成到医疗保健监测。

## 特性

- **Wi-Fi 和蓝牙功能**：两个模块都由 XIAO ESP32 驱动，预装 ESPHome 固件，确保快速设置和定制。
<!-- - **跌倒检测模块**：
  - **精确跌倒检测**：覆盖 3x3x3 米区域，检测角度为 100° x 40°。
  - **静态存在检测**：监测最远 6 米的静止个体。 -->
- **心跳检测模块**：
  - **敏感心跳监测**：可检测最远 1.5 米的心跳。
  - **静态存在检测**：监测最远 6 米的静止个体。
- **环境感应**：
  - **BH1750 光传感器**：测量 1 到 65,535 勒克斯的环境光。
  - **WS2812 RGB LED**：可定制 LED，用于视觉反馈和 DIY 项目。
- **可扩展连接**：包含 Grove GPIO 端口，用于添加额外的传感器和模块。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 规格

| **通用参数**   |                                      |
| ------------------------ | ------------------------------------ |
| **毫米波固件**      | 呼吸和心跳检测 |
| **检测范围**      | 人体静态存在检测：最远6米<br />呼吸和心跳检测：1.5米|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **按钮**               | 复位 |
| **光传感器**         | BH1750 范围：1至65,535勒克斯，可调测量范围最高达100,000勒克斯 |
| **连接性**         | 1个GPIO端口（D0、D10） |
| **排针间距**   | 2.54mm |
| **电源供应**         | 5V/1A输入 |
| **功耗**    | 0.5w：待机模式<br />0.8w：激活模式<br />1.4w：与Grove继电器状态配合工作 |

## 应用

- 安全系统
- 健康监测
- 智能家居自动化
- 老年护理

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## 入门指南

### 安装方法和感应范围

**方法1.** 侧面安装，建议雷达安装高度与被测人员胸部高度一致，模块位置与胸部位置距离≤1.5m

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" style={{width:600, height:'auto'}}/></div>

**方法2.** 倾斜安装。对于睡眠呼吸和心率检测需求，可以采用倾斜安装方式。要求雷达安装在床头正上方1m高度处，向下倾斜45°朝向床的中央，控制雷达与胸腔的距离在1.5m以内。雷达法线方向对准主要检测位置，确保雷达能够检测到呼吸和心跳数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
请在开放空间中使用此模块，并在检测范围内避免以下场景，以防止对模块造成干扰：

- 多个雷达安装距离过近
- 风吹动窗帘和摇摆植物
- 水流和水膜
- 大面积金属和镜面反射
- 透过玻璃和薄木板检测
- 安装位置容易产生振动
- 使用劣质电源

:::

### 软件准备（Arduino）

:::info 注意

默认情况下，MR60BHA2 预装了 [XIAO ESP32C6](/xiao_esp32c6_getting_started)，但它兼容各种其他微控制器进行通信和集成。

:::

如果这是您第一次在 XIAO 系列中使用 Arduino，请按照适合您开发板的设置指南进行操作：

- **XIAO ESP32S3**：参考 [XIAO ESP32S3 入门指南](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)。
- **XIAO ESP32C3**：按照 [Seeed Studio XIAO ESP32C3 入门指南](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/) 进行操作。
- **XIAO ESP32C6**：按照 [Seeed Studio XIAO ESP32C6 入门指南](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/) 进行操作。

设置好开发板后，请按照以下步骤操作：

1. **下载 Seeed mmWave 库**：

   - 从 GitHub 下载 [Seeed mmWave 库](https://github.com/Love4yzp/Seeed-mmWave-library)。

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **在 Arduino IDE 中安装库**：
   - 打开 Arduino IDE。
   - 导航到 **项目 > 加载库 > 添加 .ZIP 库...**。
   - 选择下载的 `.zip` 文件来安装库。
3. **连接您的 XIAO 开发板**：
   - 通过 USB 将您的 XIAO 开发板连接到计算机。
   - 在 Arduino IDE 中，转到 **工具 > 开发板** 并选择您的 XIAO 开发板型号。
   - 在 **工具 > 端口** 下选择正确的端口。
4. **加载示例代码**：
   - 转到 **文件 > 示例 > Seeed Arduino mmWave**。
   - 选择心跳检测的相关示例。
   - 查看代码并进行必要的调整。
5. **上传代码**：
   - 点击 **上传** 将代码烧录到您的 XIAO 开发板。
   - 在 Arduino IDE 中打开 **串口监视器** 查看实时传感器数据。

<!-- ## Hardware Connections -->

### 使用方法

本节提供示例代码片段，帮助您快速开始使用 Seeed Arduino mmWave 库的各种功能，包括呼吸监测、RGB LED 控制和光感应。

#### 呼吸模块

此示例演示如何使用 **MR60BHA2** 传感器进行呼吸和心跳监测。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// Set up serial communication depending on the board type
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);
}

void loop() {
if (mmWave.update(100)) {
 float total_phase, breath_phase, heart_phase;
 if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {
   Serial.printf("total_phase: %.2f\t", total_phase);
   Serial.printf("breath_phase: %.2f\t", breath_phase);
   Serial.printf("heart_phase: %.2f\n", heart_phase);
 }

 float breath_rate;
 if (mmWave.getBreathRate(breath_rate)) {
   Serial.printf("breath_rate: %.2f\n", breath_rate);
 }

 float heart_rate;
 if (mmWave.getHeartRate(heart_rate)) {
   Serial.printf("heart_rate: %.2f\n", heart_rate);
 }

 float distance;
 if (mmWave.getDistance(distance)) {
   Serial.printf("distance: %.2f\n", distance);
 }
}
}
```

Arduino 串口监视器的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

如果返回的数据不是 `0`，则表示在检测范围内存在生物。

#### 人体检测

此示例演示如何使用 **MR60BHA2** 传感器进行人体检测。

:::caution
请确保您已将 MR60BHA2 模块的[固件升级](#module-firmware-upgrade)到最新版本。  
最新固件添加了人体存在检测和人体对象相关功能。
:::

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
  Serial.begin(115200);
  mmWave.begin(&mmWaveSerial);
}

void loop() {
  if (mmWave.update(100)) {
    if (mmWave.isHumanDetected()) {
        Serial.printf("-----Human Detected-----\n");
    }

    PeopleCounting target_info;
    if (mmWave.getPeopleCountingTargetInfo(target_info)) {
        Serial.printf("-----Got Target Info-----\n");
        Serial.printf("Number of targets: %zu\n", target_info.targets.size());

        for (size_t i = 0; i < target_info.targets.size(); i++) {
            const auto& target = target_info.targets[i];
            Serial.printf("Target %zu:\n", i + 1);
            Serial.printf("  x_point: %.2f\n", target.x_point);
            Serial.printf("  y_point: %.2f\n", target.y_point);
            Serial.printf("  dop_index: %d\n", target.dop_index);
            Serial.printf("  cluster_index: %d\n", target.cluster_index);
            Serial.printf("  move_speed: %.2f cm/s\n", target.dop_index * RANGE_STEP);
        }
    }
    // delay(500);
  }
}
```

Arduino串口监视器的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
呼吸和心率可在1.5米范围内检测到，存在检测范围为1.5到6米。  
当1.5米范围内有人时，模块将进入心跳和呼吸检测模式。   
在此模式下，人体检测功能的灵敏度可能会降低。  
:::

<!-- 
### Fall Module

This example shows how to use the **MR60FDA2** sensor for fall detection.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60FDA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);

delay(1000);

uint32_t sensitivity = 15;
float height = 3.0, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

if (mmWave.setInstallationHeight(height)) {
 Serial.printf("setInstallationHeight success: %.2f\n", height);
} else {
 Serial.println("setInstallationHeight failed");
}

if (mmWave.setThreshold(threshold)) {
 Serial.printf("setThreshold success: %.2f\n", threshold);
} else {
 Serial.println("setThreshold failed");
}

if (mmWave.setSensitivity(sensitivity)) {
 Serial.printf("setSensitivity success %d\n", sensitivity);
} else {
 Serial.println("setSensitivity failed");
}

if (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,
                             rect_XR, rect_ZF, rect_ZB)) {
 Serial.printf("height: %.2f\tthreshold: %.2f\tsensitivity: %d\n", height,
               threshold, sensitivity);
 Serial.printf(
     "rect_XL: %.2f\trect_XR: %.2f\trect_ZF: %.2f\trect_ZB: %.2f\n", rect_XL,
     rect_XR, rect_ZF, rect_ZB);
} else {
 Serial.println("getRadarParameters failed");
}
}

void loop() {
if (mmWave.update(100)) {
 bool is_human = mmWave.getHuman();
 if (is_human) {
   Serial.printf("People Exist: %s\n", is_human ? "true" : "false");
 }

 bool is_fall = mmWave.getFall();
 if (is_fall) {
   Serial.printf("isFall: %s\n", is_fall ? "true" : "false");
 }
}
}
``` -->

#### Blink RGB LED

This example demonstrates how to control an RGB LED using the NeoPixel library.

- **Step 1.** Download the `Adafruit_NeoPixel` library

Navigate to **Sketch > Include Liarbry > Manage Libraries...**, and search **Adafruit_NeoPixel**, install the lastest version.

- **Step 2.** Copy following code to a new sketch:

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>

const int pixelPin = D1;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
Serial.begin(115200);
pixels.begin();
pixels.clear();
pixels.show();
}

void loop() {
for (int i = 0; i < 10; i++) {
 pixels.setPixelColor(0, pixels.Color(255, 0, 0));
 pixels.show();
 delay(100);
 pixels.setPixelColor(0, pixels.Color(0, 0, 0));
 pixels.show();
 delay(100);
}

for (int i = 255; i >= 0; i--) {
 pixels.setPixelColor(0, pixels.Color(i, 0, 0));
 pixels.show();
 delay(10);
}
}
```

- **步骤 3.** 选择正确的开发板和端口号来上传程序。

程序成功上传后，您将看到毫米波传感器模块右侧的RGB LED开始闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### 光传感器 (BH1750)

此示例展示如何使用BH1750传感器读取光强度值。

- **步骤 1.** 下载 `hp_BH1750` 库

导航到 **Sketch > Include Library > Manage Libraries...**，搜索 **hp_BH1750**，安装最新版本。

- **步骤 2.** 将以下代码复制到新的草图中：

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("No BH1750 sensor found!");
 while (true) {}
}

Serial.printf("conversion time: %dms\n", BH1750.getMtregTime());
BH1750.start();
}

void loop() {
if (BH1750.hasValue()) {
 float lux = BH1750.getLux();
 Serial.println(lux);

 BH1750.start();
}
}
```

- **步骤 3.** 选择正确的开发板和端口号来上传程序。

Arduino 串口监视器的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## 呼吸模块 API

此示例使用 `SEEED_MR60BHA2` 类与 MR60BHA2 传感器进行接口通信，用于心率和呼吸监测。以下是每个关键函数的功能：

- **`mmWave.begin(&mmWaveSerial)`**：
  - 使用指定的串口接口初始化传感器通信。它建立 XIAO 开发板与 MR60BHA2 传感器之间的连接。

- **`mmWave.update(100)`**：
  - 更新传感器数据。参数 `100` 是以毫秒为单位的超时值，指定等待传感器提供新数据的时间。如果在此时间范围内有新数据可用，函数返回 `true`。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**：
  - 检索与心率和呼吸活动相关的相位信息。
  - `total_phase` 表示总体相位偏移，而 `breath_phase` 和 `heart_phase` 分别特定于呼吸和心跳活动。

- **`mmWave.getBreathRate(float &rate)`**：
  - 获取传感器检测到的当前呼吸频率。频率通过引用变量 `rate` 返回。

- **`mmWave.getHeartRate(float &rate)`**：
  - 检索传感器检测到的当前心率。心率通过引用变量 `rate` 返回。

- **`mmWave.getDistance(float &distance)`**：
  - 获取从传感器到检测对象（例如人体）的距离。此函数对于理解检测信号的范围很有用。

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**：
  - 检索点云信息。它只是实现了消息类型的接收，没有数据是正常的。
  - `PeopleCounting` 结构包含检测到的目标向量。每个目标包括以下属性：
    - `x_point`：目标的 X 坐标（以米为单位）。
    - `y_point`：目标的 Y 坐标（以米为单位）。
    - `dop_index`：多普勒指数，表示目标的速度。
      - 实际移动速度（以 cm/s 为单位）可以计算为：`dop_index * RANGE_STEP`，其中 `RANGE_STEP` 是速度分辨率。
    - `cluster_index`：目标的簇 ID，用于识别场景中的单个目标。

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**：
  - 检索检测到的目标信息。
  - `PeopleCounting` 结构包含检测到的目标向量。每个目标包括以下属性：
    - `x_point`：目标的 X 坐标（以米为单位）。
    - `y_point`：目标的 Y 坐标（以米为单位）。
    - `dop_index`：多普勒指数，表示目标的速度。
      - 实际移动速度（以 cm/s 为单位）可以计算为：`dop_index * RANGE_STEP`，其中 `RANGE_STEP` 是速度分辨率。
    - `cluster_index`：目标的簇 ID，用于识别场景中的单个目标。

- **`mmWave.isHumanDetected()`**：
  - 返回是否检测到人类。

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here's what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Sets the installation height of the radar, which is crucial for accurate fall detection. The `height` parameter specifies the height (in meters) at which the sensor is installed, with a valid range typically between 1 and 5 meters.

- **`mmWave.setThreshold(float threshold)`**:
  - Sets the fall detection threshold. This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Adjusts the sensitivity of the radar for fall detection. The sensitivity value typically ranges from 3 to 10, with higher values making the sensor more responsive to potential falls.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables.

- **`mmWave.getHuman()`**:
  - Checks if a human presence is detected by the radar. Returns `true` if a human is detected, and `false` otherwise.

- **`mmWave.getFall()`**:
  - Determines whether a fall has been detected. This function returns `true` if a fall is detected and `false` if not.-->

## 模块固件升级

:::caution
修改雷达固件是一项有风险的操作，因此请务必仔细阅读本节内容，然后谨慎地按照每个步骤进行操作。请注意，如果某个步骤执行不正确，雷达可能会变砖或无法使用。

**特别注意，如果您购买的是跌倒雷达 MR60FDA2，请不要通过以下方式非法刷写固件，这肯定会导致您的设备变砖！！！！**
:::

首先，将 XIAO ESP32C6 和 MR60BHA2 模块连接在一起。然后使用以下代码对 XIAO 进行编程。

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

void setup() {
  // Initialize the serial communication for debugging
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for Serial to initialize
  }

  // Initialize the mmWaveSerial communication
  mmWaveSerial.begin(115200);
}

void loop() {
  // Check if there is data available from mmWaveSerial
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // Forward data to Serial
  }

  // Check if there is data available from Serial
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // Forward data to mmWaveSerial
  }
}
```

:::tip
上述代码的功能是将模块的串口透明传输到 XIAO 的 USB 串口，从而通过 XIAO 升级模块的固件。  
请在升级过程中将 XIAO 连接到您的 PC。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

您将看到模块发送的原始数据。

然后您需要在此处下载并解压 OTA 工具和固件。

:::note
固件 1.6.5 有以下更新：
1. 修复了人体静止时有时无法检测到呼吸和心率的问题。
:::

- **MR60BHA2 固件升级工具**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 固件 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

<details>

<summary>点击此处预览旧版本</summary>

- **MR60BHA2 固件 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 固件 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
固件 1.6.4 有以下更新：
1. 优化了呼吸和心率检测功能，修复了身体小幅运动导致数据丢失的错误。  
2. 增强了 3D 存在检测功能：可在 1.5 米内检测呼吸和心率，在 1.5 到 6 米范围内检测存在。  
3. 增加了人员检测功能，能够在 6 米范围内检测多达三个人。
:::

</details>

1. 检查并连接到串口（将波特率设置为 115200）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 点击"REQUEST UPDATE"进入升级模式：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 如果打印出"C"或"43"，表示模块已进入升级模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. 选择要升级的固件。选择后，将自动进入升级状态。 

升级完成后，将自动跳转到正常模式。如果没有跳转，请断电重启，然后使用 OTA 工具查看串口数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. 升级完成后，您可以使用 OTA 工具读取版本和原始数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. 升级完成后，您需要重新刷写 XIAO ESP32C6 的固件。

:::tip
如果在上述步骤中您操作不当导致异常发生，并且一直无法尝试重新烧录固件且雷达无法正常工作，那么雷达可能由于固件损坏而变砖。尝试恢复设备的唯一方法是参考**[此处](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**的文件和文档。但是，请理解我们不为因操作不当而变砖的设备提供技术支持和协助。
:::

## 开放定制化

想要定制套件以适应您的独特应用？

有关定制毫米波模块时的3D点云数据生成和干扰区域配置的更多信息。Seeed提供一站式研发定制和制造服务，助力从概念到生产的快速开发。请联系我们：[iot@seeed.cc](mailto:iot@seeed.cc) 了解更多信息。

:::danger 定制服务说明
雷达的固件和算法不开源，雷达的复杂参数如3D点云、检测距离、范围等需要定制服务，可能涉及额外的定制费用和最小起订量。
:::

## 资源

- **STL**: [毫米波3D外壳](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub仓库**: 在[Seeed毫米波库GitHub页面](https://github.com/Love4yzp/Seeed-mmWave-library)访问完整代码库和文档。
- **ESPHome文档**: 有关进一步定制和集成，请参考[ESPHome文档](https://esphome.io/)。
- **MR60BHA2固件升级工具**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2固件v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)
- **MR60BHA2 GUI软件**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **毫米波传感器原理图V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2模块技术规格**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frame接口手册**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **通过Jlink的雷达固件恢复方法**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)


## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
