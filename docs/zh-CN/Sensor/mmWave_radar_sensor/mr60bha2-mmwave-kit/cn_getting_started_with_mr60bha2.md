---
description: 60GHz 毫米波呼吸和心跳检测传感器套件与 XIAO ESP32C6 (MR60BHA2) 入门指南
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

# 60GHz 毫米波呼吸和心跳检测传感器套件与 XIAO ESP32C6 (MR60BHA2) 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div><br />

介绍我们为 XIAO 设计的先进**毫米波传感器模块**，旨在为[跌倒检测](https://wiki.seeedstudio.com/cn/getting_started_with_mr60fda2_mmwave_kit/)和心跳监测提供前沿的监控解决方案。由强大的 XIAO ESP32 微控制器驱动，内置 Wi-Fi 和蓝牙连接功能，这些模块提供精确可靠的检测能力。无论您需要实时监测跌倒还是以敏感精度跟踪心跳，我们的模块都配备了最先进的技术，包括可定制的 RGB LED 和环境光感应。通过 Grove GPIO 端口的便捷扩展选项，这些多功能模块非常适合广泛的应用，从智能家居集成到医疗保健监测。

## 特性

- **Wi-Fi 和蓝牙支持**：两个模块都由预刷 ESPHome 固件的 XIAO ESP32 驱动，确保快速设置和定制。
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **心跳检测模块**：
  - **敏感心跳监测**：可检测最远 1.5 米的心跳。
  - **静态存在检测**：监测最远 6 米的静止人员。
- **环境感应**：
  - **BH1750 光传感器**：测量 1 到 65,535 勒克斯的环境光。
  - **WS2812 RGB LED**：可定制 LED，用于视觉反馈和 DIY 项目。
- **可扩展连接**：包含 Grove GPIO 端口，用于添加额外的传感器和模块。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## 规格参数

| **通用参数**   |                                      |
| ------------------------ | ------------------------------------ |
| **毫米波固件**      | 呼吸和心跳检测 |
| **检测范围**      | 人体静态存在检测：最远 6 米<br />呼吸和心跳检测：1.5 米|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | WS2812 RGB LED |
| **按钮**               | Rest |
| **光传感器**         | BH1750 范围：1 到 65,535 勒克斯，可调测量高达 100,000 勒克斯 |
| **连接性**         | 1 个 GPIO 端口 (D0, D10) |
| **排针间距**   | 2.54mm |
| **电源供应**         | 5V/1A 输入 |
| **功耗**    | 0.5w：待机模式<br />0.8w：激活模式<br />1.4w：与 Grove 继电器状态一起工作 |

## 应用

- 安防系统
- 医疗保健监测
- 智能家居自动化
- 老年护理

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## 入门指南

### 安装方法和感应范围

**方法 1.** 侧装，建议雷达安装高度与被测人员胸部高度一致，模块位置与胸部位置 ≤ 1.5m

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" style={{width:600, height:'auto'}}/></div>

**方法 2.** 倾斜安装。对于睡眠呼吸和心率检测需求，可采用倾斜安装方式。要求雷达安装在床头正上方 1m 高度，向床中央下倾 45°，雷达与胸腔距离控制在 1.5m 以内。雷达法线方向对准主要检测位置，确保雷达能够检测到呼吸和心跳数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
请在开放空间使用此模块，并在检测范围内避免以下情况，以防止对模块造成干扰：

- 多个雷达安装距离过近  
- 风吹动窗帘和摇摆植物
- 水流和水膜  
- 大面积金属和镜面反射  
- 透过玻璃和薄木板检测  
- 安装位置容易产生振动  
- 使用劣质电源  

:::

### 软件准备 (Arduino)

:::info 注意

默认情况下，MR60BHA2 预装了 [XIAO ESP32C6](/cn/xiao_esp32c6_getting_started)，但它兼容各种其他微控制器进行通信和集成。

:::

如果这是您第一次在 XIAO 系列中使用 Arduino，请按照适合您开发板的设置指南：

- **XIAO ESP32S3**：参考 [XIAO ESP32S3 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/)。
- **XIAO ESP32C3**：按照 [Seeed Studio XIAO ESP32C3 入门指南](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/)。
- **XIAO ESP32C6**：按照 [Seeed Studio XIAO ESP32C6 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/)。

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
   - 导航到 **Sketch > Include Library > Add .ZIP Library...**。
   - 选择下载的 `.zip` 文件来安装库。
3. **连接您的 XIAO 开发板**：
   - 通过 USB 将您的 XIAO 开发板连接到计算机。
   - 在 Arduino IDE 中，转到 **Tools > Board** 并选择您的 XIAO 开发板型号。
   - 在 **Tools > Port** 下选择正确的端口。
4. **加载示例代码**：
   - 转到 **File > Examples > Seeed Arduino mmWave**。
   - 选择心跳检测的相关示例。
   - 查看代码并进行必要的调整。
5. **上传代码**：
   - 点击 **Upload** 将代码刷入您的 XIAO 开发板。
   - 在 Arduino IDE 中打开 **Serial Monitor** 查看实时传感器数据。

<!-- ## Hardware Connections -->

### 使用方法

本节提供示例代码片段，帮助您快速开始使用 Seeed Arduino mmWave 库的各种功能，包括呼吸监测、RGB LED 控制和光感应。

#### 呼吸模块

此示例演示如何使用 **MR60BHA2** 传感器监测呼吸和心跳。

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

Arduino Serial Monitor 上的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

如果返回的数据不是 `0`，表示检测范围内存在生物。

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

Arduino Serial Monitor 上的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
呼吸和心率可在 1.5 米内检测到，存在检测范围为 1.5 到 6 米。  
当 1.5 米范围内有人时，模块将进入心跳和呼吸检测模式。
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

#### 闪烁 RGB LED

此示例演示如何使用 NeoPixel 库控制 RGB LED。

- **步骤 1.** 下载 `Adafruit_NeoPixel` 库

导航到 **Sketch > Include Liarbry > Manage Libraries...**，搜索 **Adafruit_NeoPixel**，安装最新版本。

- **步骤 2.** 将以下代码复制到新的草图中：

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

- **步骤 3.** 选择正确的开发板和端口号上传程序。

程序成功上传后，您将看到毫米波传感器模块右侧的 RGB LED 闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### 光传感器 (BH1750)

此示例展示如何使用 BH1750 传感器读取光强度值。

- **步骤 1.** 下载 `hp_BH1750` 库

导航到 **Sketch > Include Liarbry > Manage Libraries...**，搜索 **hp_BH1750**，安装最新版本。

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

- **步骤 3.** 选择正确的开发板和端口号上传程序。

Arduino Serial Monitor 上的输出如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## 呼吸模块 API

此示例使用 `SEEED_MR60BHA2` 类与 MR60BHA2 传感器接口进行心率和呼吸监测。以下是每个关键函数的功能：

- **`mmWave.begin(&mmWaveSerial)`**:
  - 使用指定的串行接口初始化传感器通信。它建立 XIAO 开发板与 MR60BHA2 传感器之间的连接。

- **`mmWave.update(100)`**:
  - 更新传感器数据。参数 `100` 是以毫秒为单位的超时值，指定等待传感器提供新数据的时间。如果在此时间范围内有新数据可用，函数返回 `true`。

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - 检索与心率和呼吸活动相关的相位信息。
  - `total_phase` 表示整体相位偏移，而 `breath_phase` 和 `heart_phase` 分别特定于呼吸和心跳活动。

- **`mmWave.getBreathRate(float &rate)`**:
  - 获取传感器检测到的当前呼吸频率。频率在引用变量 `rate` 中返回。

- **`mmWave.getHeartRate(float &rate)`**:
  - 检索传感器检测到的当前心率。心率在引用变量 `rate` 中返回。

- **`mmWave.getDistance(float &distance)`**:
  - 获取从传感器到检测对象（例如人体）的距离。此函数对于了解检测信号的范围很有用。

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - 检索点云信息。它只是实现消息类型的接收，没有数据是正常的。
  - `PeopleCounting` 结构包含检测到的目标向量。每个目标包括以下属性：
    - `x_point` : 目标的 X 坐标（以米为单位）。
    - `y_point` : 目标的 Y 坐标（以米为单位）。
    - `dop_index` : 多普勒指数，表示目标的速度。
      - 实际移动速度（以 cm/s 为单位）可以计算为：`dop_index * RANGE_STEP`，其中 `RANGE_STEP` 是速度分辨率。
    - `cluster_index` : 目标的簇 ID，用于识别场景中的单个目标。

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - 检索检测到的目标信息。
  - `PeopleCounting` 结构包含检测到的目标向量。每个目标包括以下属性：
    - `x_point` : 目标的 X 坐标（以米为单位）。
    - `y_point` : 目标的 Y 坐标（以米为单位）。
    - `dop_index` : 多普勒指数，表示目标的速度。
      - 实际移动速度（以 cm/s 为单位）可以计算为：`dop_index * RANGE_STEP`，其中 `RANGE_STEP` 是速度分辨率。
    - `cluster_index` : 目标的簇 ID，用于识别场景中的单个目标。

- **`mmWave.isHumanDetected()`**:
  - 返回是否检测到人体。

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here's what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - 设置雷达的安装高度，这对准确的跌倒检测至关重要。`height` 参数指定传感器安装的高度（以米为单位），有效范围通常在 1 到 5 米之间。

- **`mmWave.setThreshold(float threshold)`**:
  - 设置跌倒检测阈值。该值根据距离传感器的高度和距离确定雷达检测跌倒的灵敏度。

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - 调整雷达跌倒检测的灵敏度。灵敏度值通常范围从 3 到 10，数值越高，传感器对潜在跌倒的响应越敏感。

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - 检索雷达的当前配置参数，包括安装高度、跌倒检测阈值和灵敏度设置。这些参数通过引用变量返回。

- **`mmWave.getHuman()`**:
  - 检查雷达是否检测到人体存在。如果检测到人体则返回 `true`，否则返回 `false`。

- **`mmWave.getFall()`**:
  - 确定是否检测到跌倒。如果检测到跌倒，此函数返回 `true`，否则返回 `false`。-->

## 模块固件升级

:::caution
修改雷达固件是一项有风险的操作，因此请务必仔细阅读本节内容，然后仔细按照每个步骤操作。请注意，如果某个步骤执行不正确，雷达可能会变砖或无法使用。

**特别说明，如果您购买的是跌倒雷达 MR60FDA2，请不要通过以下方式非法刷写固件，这肯定会使您的设备变砖！！！！**
:::

:::tip
如果您不想阅读文本，也可以参考**[视频](https://youtu.be/uic8__FFzos)**来更新固件。由于下面会覆盖 XIAO 的 ESPHome 固件，您可能需要在更新雷达固件后在此[网页](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)上重新刷写 XIAO 的 ESPHome 固件。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uic8__FFzos?si=ijBJOLMk9Z5szwSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
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
固件 1.6.12 有以下更新：

1. 修复了在 1.5 米内静止时目标丢失的问题。

2. 优化了 0-3 米范围内移动目标的跟踪稳定性，解决了之前目标坐标不准确的问题。但是，报告刷新率有所降低。

3. 呼吸和心率准确性——本版本无更新。相关机器学习训练的持续优化正在进行中。将在月底左右发布固件更新以提高呼吸和心率准确性。之前的呼吸和心率算法存在根本问题，现已解决。

:::

- **MR60BHA2 固件升级工具**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 固件 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)

<details>

<summary>点击此处预览旧版本</summary>

- **MR60BHA2 固件 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
固件 1.6.4 有以下更新：

1. 优化了呼吸和心率检测功能，修复了身体小幅运动导致数据丢失的错误。  
2. 增强了 3D 存在检测功能：可在 1.5 米内检测呼吸和心率，可在 1.5 到 6 米范围内检测存在。  
3. 增加了人员检测功能，能够在 6 米范围内检测多达三个人。

:::

- **MR60BHA2 固件 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
固件 1.6.5 有以下更新：

1. 修复了人体静止时有时无法检测到呼吸和心率的问题。

:::

- **MR60BHA2 固件 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

:::note
固件 1.6.10 有以下更新：

1. 优化了呼吸机制，解决了屏气持续时间不减少的问题。
2. 增加了数据收集功能。

:::

</details>

1. 检查并连接到串口（将波特率设置为 115200）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. 点击 "REQUEST UPDATE" 进入升级模式：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. 如果打印出 "C" 或 "43"，表示模块已进入升级模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. 选择要升级的固件。选择后，将自动进入升级状态。

升级完成后，将自动跳转到正常模式。如果没有跳转，请断电重启，然后使用 OTA 工具查看串口数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. 升级完成后，您可以使用 OTA 工具读取版本和原始数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. 升级完成后，您需要重新刷写 XIAO ESP32C6 的固件。

:::tip
如果在上述步骤中您操作不当导致异常发生，无法再次尝试烧录固件且雷达无法正常工作，那么雷达可能因固件损坏而变砖。尝试恢复设备的唯一方法是参考**[此处](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**的文件和文档。但是，请理解我们不为因操作不当而变砖的设备提供技术支持和帮助。
:::

## 开放定制

想要定制套件以适应您的独特应用吗？

有关定制毫米波模块时的 3D 点云数据生成和干扰区域配置的更多信息。Seeed 提供一站式研发定制和制造服务，用于从概念到生产的快速开发。请联系我们：[iot@seeed.cc](mailto:iot@seeed.cc) 了解更多信息。

:::danger 定制服务说明
雷达的固件和算法不开源，雷达的复杂参数如 3D 点云、检测距离、范围等需要定制服务，这可能涉及额外的定制费用和 MOQ。
:::

## 资源

- **STL**: [毫米波 3D 外壳](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub 仓库**: 在 [Seeed mmWave Library GitHub 页面](https://github.com/Love4yzp/Seeed-mmWave-library)访问完整的代码库和文档。
- **ESPHome 文档**: 有关进一步定制和集成，请参考 [ESPHome 文档](https://esphome.io/)。
- **MR60BHA2 固件升级工具**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 固件 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)
- **MR60BHA2 GUI 软件**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **毫米波传感器原理图 V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2 模块技术规格**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frame 接口手册**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **通过 Jlink 的雷达固件恢复方法**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

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
