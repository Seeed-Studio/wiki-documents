---
description: 学习如何使用 Cursor 的 AI 驱动聊天功能，结合 XIAO ESP32C6 和传感器开发 Zigbee 应用程序
title: 使用 Cursor 创建 XIAO ESP32C6 的 Zigbee 项目
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /cn/use_cursor_create_zigbee_prj
last_update:
  date: 03/04/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 Cursor 创建 XIAO ESP32C6 的 Zigbee 项目

本指南将引导您使用 Cursor 的 AI 驱动聊天功能，结合 XIAO ESP32C6 和传感器开发 Zigbee 应用程序。在本教程结束时，您将能够独立使用 Cursor 的聊天功能，结合您的 XIAO 开发板和传感器开发 Zigbee 应用程序。

## 什么是 Cursor？

Cursor 是一个基于 Visual Studio Code 构建的 AI 驱动代码编辑器。它集成了强大的 AI 功能，可以帮助您更高效地编写、理解和调试代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### 为什么在嵌入式开发中使用 Cursor？

Cursor 为嵌入式软件开发提供了几个优势：

1. **代码生成**：Cursor 可以根据您的需求生成代码，节省您的时间和精力。
2. **上下文感知辅助**：Cursor 理解您的项目结构，可以提供相关建议。
3. **调试帮助**：Cursor 可以帮助识别和修复代码中的错误。
4. **学习工具**：对于初学者，Cursor 可以解释复杂概念并提供教育见解。
5. **效率**：Cursor 可以帮助您快速导航大型代码库并理解不熟悉的库。

对于像 XIAO ESP32C6 这样的嵌入式系统，Cursor 可以帮助您理解硬件特定的 API，为传感器交互生成样板代码，并解决硬件-软件集成问题。

## 所需材料

本教程需要以下材料：

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>Grove DHT11 温湿度传感器</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- Grove 线缆
- USB-C 线缆
- 安装了 Arduino IDE 的计算机
- Cursor 应用程序（我们将在下一节中安装）

:::tip
本教程以 DHT11 温湿度传感器为例。如果您有其他传感器，也可以随意尝试。为了获得最佳体验，我们建议使用 [ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk) 当前支持的传感器类型。这将确保兼容性，并在构建您的 Zigbee 项目时实现更流畅的实施。
:::

## 安装 Cursor

按照以下步骤在您的操作系统上安装 Cursor：

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. 访问 [Cursor 下载页面](https://cursor.sh/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 点击"Windows"。
3. 运行下载的安装程序。
4. 按照屏幕上的说明完成安装。

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. 访问 [Cursor 下载页面](https://cursor.sh/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 点击"MacOS"。
3. 打开下载的 .dmg 文件。
4. 将 Cursor 应用程序拖拽到您的应用程序文件夹。
5. 从应用程序文件夹中打开 Cursor。

</TabItem>
</Tabs>

## Cursor 订阅

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

Cursor 提供不同的订阅层级以满足各种用户需求：

**免费爱好者计划**

Cursor 可以通过爱好者计划免费下载和使用，包括：

- 2000 次补全
- 50 次慢速高级请求
- 两周的专业版功能试用

这个免费层级足以开始使用并探索 Cursor 的功能。

**付费计划**

对于更高级的功能和更高的使用限制，Cursor 提供付费订阅选项：

**专业版计划（$20/月）**

- 无限补全
- 每月 500 次快速高级请求
- 无限慢速高级请求

**商业版计划（$40/用户/月）**

- 所有专业版功能
- 在组织范围内强制执行隐私模式
- 集中团队计费
- 带有使用统计的管理仪表板
- SAML/OIDC SSO

您可以在 [Cursor 定价页面](https://www.cursor.com/pricing) 查看完整的定价详情。

重要的是要注意，无论您使用哪个计划，在 Cursor 中生成的所有代码都属于您，可以按您的意愿使用，包括用于商业目的。

## 设置 Cursor

安装 Cursor 后，按照以下步骤进行设置：

1. 启动 Cursor
2. 使用您的账户登录或创建新账户
3. 验证聊天面板是否可访问（通常在界面右侧）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## 打开 Zigbee 示例

在使用 Cursor 为您的项目生成代码时，提供示例代码可以显著提高生成项目的准确性。示例作为 Cursor 的参考点，让它能够理解您项目的结构、语法和特定要求。通过分析这些示例，Cursor 可以生成更精确和相关的代码，满足您的需求。

在我们的 Zigbee 项目中，找到合适的示例有助于 Cursor：

- 理解所需的特定功能
- 识别要使用的适当库和函数
- 生成与您使用的硬件和接口兼容的代码

通过提供相关示例，您可以确保生成的代码更有可能正常工作并满足项目要求，从而节省调试和修改的时间和精力。

现在，让我们定位并打开 ESP32 Arduino 包提供的 Zigbee 示例：

1. 首先，确保您已在 Arduino IDE 中安装了**最新的 ESP32 开发板包**：

- 打开 Arduino IDE
- 转到 **Tools > Board > Boards Manager**
- 搜索 **esp32**
- 找到 **esp32 by Espressif Systems**
- 点击 **Install** 或 **Update** 获取最新版本
- 等待安装完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. 导航到 Zigbee 示例目录：

以下路径以 ESP32 开发板包版本 3.1.3 为例。如果版本不同，请将 `3.1.3` 替换为您安装的版本号：

- 在 Windows 上：

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- On macOS:

```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. 打开 Cursor 并从文件菜单中选择 **Open Folder**。

4. 导航到步骤 2 中的 Zigbee 目录路径并点击 **Open**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>

## 选择合适的示例

在使用 Cursor 的聊天功能生成代码之前，您需要确定最适合作为起点的示例：

### 确定您的设备类型

Zigbee 设备通常分为两个主要类别，理解这一点对于选择正确的示例代码至关重要：

1. **传感器**：
   - 传感器是"感知"环境并收集数据的设备
   - 它们将来自现实世界的物理信息转换为电子信号
   - 传感器只"读取"数据，然后将其传输到网络

   - **示例**：
     - 温度传感器：测量周围温度
     - 湿度传感器：测量空气中的湿度水平
     - 光传感器：检测环境光强度
     - 运动传感器：检测附近是否有物体移动
     - 气体传感器：检测特定气体的浓度

2. **执行器**：
   - 执行器是"执行动作"的设备
   - 它们接收命令并影响物理世界
   - 执行器负责"改变"某些东西的状态

   - **示例**：
     - 灯开关：打开或关闭灯
     - 电机控制器：控制电机旋转
     - 继电器：控制大功率电气设备
     - 阀门控制器：控制水或空气流量
     - 门锁：锁定或解锁门

**如何确定您的设备类型**：

- 如果您的设备主要收集数据（读取信息），它是传感器
- 如果您的设备主要执行动作（改变状态），它是执行器
- 某些设备可能具有两种功能，在这种情况下，您应该根据主要功能进行选择

在我们的示例中，DHT11 是典型的传感器，因为它读取温度和湿度数据，但不改变环境。

### 识别接口类型

接下来，确定您的传感器使用的接口类型：

- **GPIO**：简单的数字或模拟引脚
- **I2C**：用于通信的双线接口
- **SPI**：串行外设接口
- **UART**：串行通信

DHT11 使用简单的 GPIO 接口，只有一条数据线。

### 检查 Zigbee 设备支持

在继续之前，重要的是验证您预期的设备类型是否受 ESP Zigbee SDK 支持。您可以在以下位置检查支持的设备类型：

- [ESP Zigbee 设备类型](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

此头文件包含 ESP 的 Zigbee 实现当前支持的所有设备类型。查看此文件以：

1. 确认您的设备类型受支持
2. 记录您需要的特定设备 ID 和集群 ID
3. 了解您的设备类型可用的功能

如果您的设备类型未列出，您可能需要：

- 选择符合您需求的类似支持设备类型
- 考虑实现自定义设备类型（高级）
- 联系 ESP 支持寻求指导

### 找到最接近的示例

浏览 Zigbee 库中的示例，找到最符合您需求的示例。对于我们的 DHT11 传感器，寻找如下示例：

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- 任何演示从 GPIO 传感器读取数据的示例

幸运的是，ESP 在其 Zigbee 示例中提供了"Zigbee_Temp_Hum_Sensor_Sleepy"示例，这完全符合我们创建温湿度传感器项目的需求。此示例演示了：

- 如何实现温湿度传感器设备
- 如何将设备配置为休眠终端设备以节省电力
- 如何定期报告传感器读数
- 如何处理 Zigbee 网络和数据传输

您可以在以下位置找到此示例：
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

此示例将作为我们基于 DHT11 的 Zigbee 传感器项目的绝佳起点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## 确定引脚连接

对于 XIAO ESP32C6 和 DHT11 传感器，我们需要决定使用哪些引脚：

1. DHT11 传感器需要一个数据引脚。

2. 我们将其连接到 XIAO ESP32C6 的 D0 引脚（GPIO1）。

:::tip
对于 XIAO 示例，只有 GPIO（数字/模拟）和 SPI 协议设备需要手动配置引脚。对于 I2C 和 UART 设备，引脚定义已在 XIAO 的板级包中预配置，因此您可以跳过此步骤。
:::

## 收集技术文档

拥有传感器的技术文档至关重要。如果您使用的是 Seeed 的产品，您可以在 **[Seeed Studio 官方 Wiki](https://wiki.seeedstudio.com/cn/)** 上找到传感器或执行器的详细文档和资源。Wiki 的资源部分还包含您可以提供给 Cursor 的 Grove 产品数据表。例如，对于本项目中使用的 DHT11 传感器：

- [Grove DHT11 Wiki 页面](https://wiki.seeedstudio.com/cn/Grove-TemperatureAndHumidity_Sensor/)

如果您使用的是其他制造商的传感器，请直接联系他们以获取必要的技术文档。

## 使用 Cursor 的聊天功能生成代码

现在我们拥有了所有必要的信息，可以使用 Cursor 的聊天功能来生成我们的 Zigbee 应用程序代码。

在这里您需要为 Cursor 的聊天功能创建一个提示。

### 传感器项目模板

如果您像我一样选择使用传感器作为设备，可以参考以下提示。

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Sensor details:
- Type: [sensor model]
- Connections: [pin connections]

Sensing specifications:
- Parameters to measure: [measurement values]
- Transmission frequency: [sending interval]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

让我们详细了解如何填写提示模板，并使用 DHT11 传感器提供一个示例：

1. **项目名称**：为您的项目选择一个描述性的名称
2. **传感器详细信息**：
   - 类型：指定确切的传感器型号
   - 连接：列出传感器与 XIAO ESP32C6 之间的所有引脚连接
3. **传感规格**：
   - 参数：列出您想要测量的内容（温度、湿度等）
   - 传输频率：您希望发送数据的频率（例如，每 5 秒一次）
4. **参考资料**：包含数据手册或文档的链接

以下是 DHT11 温湿度传感器项目的完整提示示例：

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: Zigbee_DHT11_XIAO

Sensor details:
- Type: DHT11 Temperature and Humidity Sensor
- Connections: DHT11 data pin connected to D2 of XIAO ESP32C6

Sensing specifications:
- Parameters to measure: Temperature (°C) and Relative Humidity (%)
- Transmission frequency: Every 1 hour

Reference materials:
- Documentation: 
  - DHT11 Sensor: https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

### 执行器项目模板

如果您想要使用执行器，可以使用以下提示模板。让我们看看如何为执行器项目构建提示：

```
Please refer to the code and then create an Arduino actuator project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Actuator details:
- Type: [actuator model]
- Connections: [pin connections]

Control specifications:
- Default behavior: [startup state]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

:::tip
在使用 Cursor 构建您的第一个项目时，建议从简单的基本功能开始，而不是复杂的逻辑和需求。这种方法可以显著降低 Cursor 生成错误代码的可能性。首先，让 Cursor 创建一个可以验证正常工作的基本程序。一旦您有了坚实的基础，就可以逐步添加更多功能和复杂性来增强您的项目。这种迭代方法可以产生更可靠和可维护的代码。
:::

在准备好包含项目所有具体细节的提示词后，请按照以下步骤操作：

1. 打开 Cursor 的聊天面板（通常通过点击侧边栏中的聊天图标）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. 找到最符合您项目需求的示例代码。对于我们的 DHT11 温湿度传感器项目，我们将使用"Zigbee_Temp_Hum_Sensor_Sleepy"示例。

3. 将示例代码文件从 Zigbee 示例目录拖放到 Cursor 聊天窗口中。这有助于 Cursor 理解 Zigbee 传感器实现的结构和要求。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. 将我们预先编写的提示词复制并粘贴到聊天输入框中，然后按 Enter 键。等待 Cursor 根据提示词和示例代码生成您的项目。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. 点击 **Accept** 按钮保存生成的代码。这将在您的工作区中创建项目文件。

## 检查生成的代码

在 Cursor 生成代码后，在上传到设备之前仔细检查代码是很重要的。以下是需要检查的关键方面：

1. 引脚配置

- 验证所有引脚分配是否与您的物理连接匹配
- 检查指定的引脚在 XIAO ESP32C6 上是否实际可用
- 确保不存在引脚冲突（例如，同一引脚用于多个目的）
- 确认引脚支持所需的功能（模拟、数字、I2C 等）

2. 功能检查

将生成的代码与您的需求进行比较：

- 是否实现了所有请求的功能？

例如，在它提供给我的程序中，引脚是按照 GPIO 编号定义的，这可能需要阅读 wiki，然后检查 XIAO 的 A/D 编号是否与正确的 GPIO 编号匹配，这比较麻烦。为此，我们可以要求 Cursor 以与 A/D 相同的方式使用引脚。

<details>

<summary>点击此处预览完整代码</summary>

```cpp
/**
 * @brief DHT11 Temperature and Humidity Sensor with Zigbee for XIAO ESP32C6
 * 
 * This example demonstrates how to create a Zigbee end device that measures temperature
 * and humidity using a DHT11 sensor and reports the data every hour.
 * 
 * Hardware Requirements:
 * - XIAO ESP32C6 board
 * - DHT11 Temperature and Humidity Sensor
 * 
 * Connections:
 * - DHT11 Data Pin -> D2 (GPIO8) of XIAO ESP32C6
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * The device operates as a Zigbee end device and goes into deep sleep between measurements
 * to conserve power.
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* Pin Definitions */
#define DHT_PIN 8  // D2 on XIAO ESP32C6
#define BOOT_BUTTON 9  // Boot button on XIAO ESP32C6

/* DHT11 Sensor Configuration */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee Configuration */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* Sleep Configuration */
#define uS_TO_S_FACTOR 1000000ULL  // Conversion factor for micro seconds to seconds
#define TIME_TO_SLEEP  3600        // Sleep for 1 hour (3600 seconds)

/* Global Variables */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ Sensor Functions *****************************/
void measureAndSleep() {
  // Read temperature and humidity from DHT11
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Check if readings are valid
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT11 sensor!");
    delay(1000);
    return;
  }

  // Update temperature and humidity values in Temperature sensor EP
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // Report temperature and humidity values
  zbTempSensor.report();
  Serial.printf("Reported temperature: %.2f°C, Humidity: %.2f%%\r\n", temperature, humidity);

  // Add small delay to allow the data to be sent before going to sleep
  delay(100);

  // Put device to deep sleep
  // Serial.println("Going to sleep for 1 hour");
  // esp_deep_sleep_start();
}

/********************* Arduino Setup **************************/
void setup() {
  Serial.begin(115200);
  
  // Initialize DHT11 sensor
  dht.begin();

  // Init button switch
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // Configure the wake up source
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // Set Zigbee device information
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // Set temperature measurement range (-20°C to 60°C for DHT11)
  zbTempSensor.setMinMaxValue(-20, 60);

  // Set tolerance for temperature measurement (±2°C accuracy for DHT11)
  zbTempSensor.setTolerance(2);

  // Configure humidity sensor (20-90% RH range for DHT11, ±5% RH accuracy)
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // Set power source to battery (assuming battery-powered operation)
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbTempSensor);

  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 second keep-alive

  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }

  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");

  // Allow time for connection establishment
  delay(1000);
}

/********************* Arduino Loop **************************/
void loop() {
  // Check boot button for factory reset
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // Debounce
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("Factory reset initiated. Rebooting in 1s...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // Measure sensor data and go to sleep
  measureAndSleep();
} 
```

</details>

您只需要选择想要更改的部分，输入提示词，然后按回车键即可。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 验证并上传程序

现在 Cursor 已经生成了我们的 Zigbee 项目代码，我们需要验证它是否能正常工作。最好的方法是使用 Arduino IDE，它为编译代码并将其上传到我们的 XIAO ESP32C6 开发板提供了优秀的工具。让我们切换到 Arduino IDE 并完成验证过程：

1. 在 Arduino IDE 中打开主文件。
2. 从开发板菜单中选择 **XIAO ESP32C6** 开发板。
3. 选择适当的端口。
4. 点击 **验证** 来编译代码。
5. 如果有任何错误，返回 Cursor 的聊天界面并寻求帮助修复它们。
6. 一旦代码成功编译，将其上传到您的 XIAO ESP32C6。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

如果一切顺利，您现在应该有一个可以被 Home Assistant 发现的 Zigbee 设备（前提是您的 Home Assistant 设置中有 Zigbee 网关）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## 使用 Cursor 进行故障排除

如果您在生成的代码中遇到问题，可以向 Cursor 寻求帮助：

1. 描述您面临的具体错误或问题
2. 包含来自 Arduino IDE 的任何错误消息
3. 要求 Cursor 建议修复或改进方案
4. 实施建议的更改并再次测试

Cursor 的 AI 在调试方面特别出色，通常能识别出手动难以发现的问题。

例如，如果您是第一次使用 Zigbee 功能或遇到编译错误，比如

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

由于疏忽，您总是可以向 Cursor 寻求指导。只需提示：

***我在 Arduino IDE 中遇到编译错误，提示 'Compilation error: #error Zigbee end device mode is not selected in Tools->Zigbee mode'。我应该怎么办？***

Cursor 可能会建议检查 Arduino IDE 中的工具菜单并选择适当的 Zigbee 模式：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

您可以向 Cursor 询问遇到的任何错误，它将帮助指导您完成解决过程。您可能想要询问的其他一些常见问题包括：

- 库安装问题
- 引脚配置错误
- 传感器连接问题
- 通信协议设置
- 电源管理问题

只需在提示中清楚地描述问题，Cursor 就会提供相关的建议和解决方案。

## 使用 Cursor 增强您的程序

在基本的 Zigbee 功能正常工作后，您可以使用 Cursor 为程序添加更多功能和改进。让我们看一个如何通过添加串口初始化检查来增强代码的示例。

这在开发和调试过程中特别有用，因为它确保您不会错过任何串口输出，在继续设置之前等待串口准备就绪。

1. 在 Cursor 中打开您的项目并在代码中找到 `setup()` 函数。

2. 在聊天面板中，描述您想要添加的内容。例如：
   "添加代码以在继续设置之前等待串口准备就绪"

3. Cursor 会建议如下修改：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

除了这些小的增强功能外，我们可以通过在基本功能之上实现节能功能来最大化 Zigbee 的价值。Zigbee 的关键优势之一是其低功耗能力，可以通过正确实现睡眠模式进一步优化。

以下是您可以要求 Cursor 为传感器项目添加深度睡眠功能的方法：

1. 打开聊天面板并请求深度睡眠实现：

***修改程序，使温度和湿度值每三小时报告一次。其余时间深度睡眠以节省电力。***

2. Cursor 会建议包含以下内容的代码修改：

- 更新睡眠持续时间
- 更新睡眠消息以获得更好的反馈
- 更新文档以反映新的报告间隔
- 返回深度睡眠 3 小时

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

这种功耗优化对于电池供电的传感器节点特别有价值，根据报告频率和传感器类型，可能将电池寿命从几天延长到几个月甚至几年。

Cursor 可以帮助您实现所有这些功能 - 在寻求帮助时只需在您的要求中具体说明即可。

## 结论

您现在已经学会了如何使用 Cursor 的 AI 驱动聊天功能为 XIAO ESP32C6 开发 Zigbee 应用程序。这种方法可以显著加快您的开发过程，并帮助您克服技术挑战。

随着您对 Cursor 越来越熟悉，您将发现更多利用其功能进行嵌入式项目开发的方法。请记住，提示的质量很大程度上影响生成代码的质量，因此在描述您的需求时要具体和详细。

本教程代表了使嵌入式开发更易于访问的重要进步。通过将 Cursor 等 AI 工具与 XIAO ESP32C6 等强大硬件相结合，我们正在降低物联网和传感器网络开发的准入门槛。这对以下人群特别有价值：

- 刚开始嵌入式系统之旅的初学者
- 希望加速原型开发过程的经验丰富的开发者
- 教授物联网和无线通信概念的教育工作者
- 想要创建智能家居解决方案的创客和爱好者

AI 辅助开发工具与 Zigbee 技术的集成为创建节能、可靠的无线传感器网络开辟了新的可能性。这种技术组合能够实现更快的开发周期，同时保持高代码质量，最终有助于推动物联网领域的创新。

:::tip
本文由 Citric 在 Cursor 的协助下撰写。
:::

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
