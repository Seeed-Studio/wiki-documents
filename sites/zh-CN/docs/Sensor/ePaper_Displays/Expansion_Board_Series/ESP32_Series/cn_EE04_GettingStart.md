---
description: XIAO ePaper Display Board(ESP32-S3) - EE04 入门指南
title: EE04 入门指南
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/25/2025
  author: Jason
createdAt: '2025-09-25'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EE04 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO ESP32-S3** Plus 提供算力，显示板 EE04 支持 **24-pin** 和 **50-pin** 两种 ePaper 显示屏。它配备带电源开关的 JST 2.0 mm 电池接口、内置充电 IC，并带有 1 个复位按键和 3 个用户按键。非常适合用于低功耗 ePaper 项目，例如数字标牌、电子标签和便携式信息看板。

### 特性

- **由 XIAO ESP32-S3 Plus 驱动：** 连接兼容的 ePaper 显示屏即可立即工作。
- **多样化显示支持：** 兼容多种 ePaper 屏幕，通过跳线帽轻松切换，支持 24-Pin 和 50-Pin 接口。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 包含 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。

### 规格

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>处理器</th>
      <td>XIAO ESP32-S3 Plus</td>
    </tr>
    <tr>
      <th>ePaper 接口</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>电池接口</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>开关</th>
      <td>电池电源 ON/OFF</td>
    </tr>
    <tr>
      <th>电源供给</th>
      <td>- 3.7V 锂电池<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>按键</th>
      <td>- 1x 复位按键<br />- 3x 用户按键</td>
    </tr>
  </tbody>
</table>

### ePaper 板选择指南

<table>
    <thead>
        <tr>
            <th>产品</th>
            <th>ePaper Display Board EE04</th>
<th><a href="https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>XIAO ESP32-S3 Plus</td>
            <td>XIAO 系列</td>
            <td>XIAO 系列</td>
        </tr>
        <tr>
            <th>兼容 ePaper 显示屏</th>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper 接口</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>电池接口</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>开关</th>
            <td>电池电源 ON/OFF</td>
            <td>/</td>
            <td>电池电源 ON/OFF</td>
        </tr>
        <tr>
            <th>扩展 IO 端口</th>
            <td>/</td>
            <td>连接其他控制器</td>
            <td>连接额外传感器</td>
        </tr>
        <tr>
            <th>扩展 IO 端口</th>
            <td>/</td>
            <td>连接其他控制器</td>
            <td>连接额外传感器</td>
        </tr>
    </tbody>
</table>

### 应用

- **智能家居仪表盘**：显示天气更新、日历事件以及来自各类智能家居设备的通知等实时信息。
- **能耗监测**：显示来自智能电表的能耗数据，帮助用户更高效地跟踪和管理能源使用。
- **安防告警**：显示安防事件的告警和通知，例如运动检测或门/窗传感器触发。
- **智能恒温器显示**：显示温度和湿度水平，以及智能恒温器的控制设置。
- **数字相框**：打造一款支持 WiFi 的数字相框，用于显示来自智能家居网络的图片。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

本版本 XIAO ePaper Display Board(ESP32-S3) - EE04 不支持 NFC 功能。

:::

### 支持的 ePaper

#### 24-Pin 接口

- [1.54 英寸 ePaper - 单色 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13 英寸 ePaper - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13 英寸 ePaper - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 英寸 ePaper - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9 英寸 ePaper - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2 英寸 ePaper - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26 英寸 ePaper - 单色 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83 英寸 ePaper - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5 英寸 ePaper - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5 英寸 ePaper - 三色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：

- 对于 24 Pin ePaper 显示屏 → 将跳线设置为 24 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

#### 50-Pin 接口

- [7.3 英寸 Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：
- 对于 50 Pin ePaper 显示屏 → 将跳线设置为 50 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

## 软件概览

### 安装 Seeed GFX 库

:::tip
该库与 TFT 库具有相同功能，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

向下滚动并打开此链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择你的设备类型，它会生成一些代码。复制这些代码，我们稍后会用到。

:::tip
如果选择错误，屏幕将不会显示任何内容。

所以请务必确认你的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/38.png" style={{width:800, height:'auto'}}/></div>

下载库之后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

库中有 4 个基础示例，打开一个你喜欢的基础示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：随机显示不同大小的文字和图形。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## 开始使用

这里以 5.83 英寸显示屏为例。所有 24-pin 屏幕的步骤相同，唯一的区别是在驱动中选择合适的屏幕尺寸。

创建一个 **新的 "driver.h" 文件**，并将这些代码粘贴进去。代码应类似如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/40.png" style={{width:1000, height:'auto'}}/></div>

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.86 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

之后，前往 **Tools** -> **Board** -> **XIAO ESP32S3** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.png" style={{width:1000, height:'auto'}}/></div>

现在你会在电子纸屏幕上看到反馈！下面是 Helloworld 示例的运行结果。

:::tip
⚠️ 注意：电子纸排线方向
将电子纸显示屏连接到 XIAO 电子纸显示板时，请确保 FPC 排线插入方向正确。

⚠️ 请勿反向插入连接器！将排线倒置插入可能导致电子纸无法显示，甚至损坏屏幕/电路板。
下图展示了正确的连接方式：
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.jpg" style={{width:500, height:'auto'}}/></div>

### XIAO 电子纸显示板(ESP32-S3) - EE04 上的用户按键

EE04 提供了 3 个用户可编程按键，可用于各种控制用途。本节演示如何使用 Arduino 读取按键状态并响应按键按下。

在 EE04 上，这 3 个按键连接到 XIAO ESP32-S3 Plus 的以下引脚：

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>GPIO2_D1/A1</th>
      <th>GPIO3_D2/A2</th>
      <th>GPIO5_D4/A4</th>
    </tr>
  </tbody>
</table>


所有按键为低电平有效，这意味着按下时读取为 LOW，松开时读取为 HIGH。

基础按键读取示例

此示例演示如何检测按键按下并向串口监视器打印消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
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

### XIAO 电子纸显示板(ESP32-S3) - EE04 的电池使用

当使用电池供电时：

- 设备会在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写代码读取电池电压，在 `analogRead()` 函数前加入 10ms 延时会更精确。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04battery.jpg" style={{width:700, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```

### 在 XIAO 电子纸显示板 (ESP32-S3) - EE04 上显示自定义图片

在 GFX 库中找到 Bitmap 示例并选择它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image1.png" style={{width:700, height:'auto'}}/></div>

请注意，你需要在项目目录中创建一个 driver.h 文件。[详情请点击了解更多。](#install-seeed-gfx-library)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image2.png" style={{width:700, height:'auto'}}/></div>

接下来，访问 SenseCraft HMI Tool：https://sensecraft.seeed.cc/hmi/tools/dither，并上传你希望显示的图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image3m.png" style={{width:700, height:'auto'}}/></div>

上传图片后，生成 C 数组（图像数据）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image4.png" style={{width:700, height:'auto'}}/></div>

复制数组内容。注意只复制十六进制数据，不要包含任何无关字符。

:::tip 
如果显示屏上的颜色与原始设计相比是反色的，请在生成代码前在 HMI 工具中勾选 Invert Colors 选项。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image5.png" style={{width:700, height:'auto'}}/></div>

将 Arduino 草图中 image.c 或 image.h 文件里的现有数组内容覆盖为你复制的数组。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image6.png" style={{width:700, height:'auto'}}/></div>

最后，将程序上传到你的 XIAO ESP32-S3。现在你应该能在电子纸屏幕上看到自定义图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image7.png" style={{width:700, height:'auto'}}/></div>

## 资源

- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 原理图](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Grabcad 3D 文件](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
