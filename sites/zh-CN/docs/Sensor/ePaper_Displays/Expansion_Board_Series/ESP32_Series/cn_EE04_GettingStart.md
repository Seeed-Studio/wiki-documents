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
  date: 09/16/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-09-16'
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

由 **XIAO ESP32-S3** Plus 提供算力，显示板 EE04 支持 **24-pin** 和 **50-pin** 两种 ePaper 显示屏。其配备带电源开关的 JST 2.0 mm 电池接口、板载充电 IC，并集成 1 个复位按键和 3 个用户按键。非常适合用于低功耗 ePaper 项目，例如数字标牌、电子标签和便携式信息看板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **由 XIAO ESP32-S3 Plus 驱动：** 连接兼容的 ePaper 显示屏后即可立即工作。
- **多样化显示支持：** 兼容多种 ePaper 屏幕，通过跳线帽轻松切换，支持 24-Pin 和 50-Pin 接口。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 包含 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。
- **低功耗设计**：适用于电池供电的 ePaper 应用，在默认设置下满电通常可使用 3 个月。

### 规格

| 参数 | 描述 |
|-----------|-------------|
| 处理器 | XIAO ESP32-S3 Plus |
| ePaper 接口 | FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm |
| 电池接口 | JST 2.0mm |
| 开关 | 电池电源 ON/OFF |
| 电源供给 | - 3.7V 锂电池<br />- USB Type-C |
| 按键 | - 1x 复位按键<br />- 3x 用户按键 |

### ePaper 板选择指南

| 产品 | ePaper Display Board EE04 | [ePaper Breakout](https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board/) | [ePaper Driver Board](https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/) |
|---------|---------------------------|---------------|-----------------|
| 处理器 | XIAO ESP32-S3 Plus | XIAO 系列 | XIAO 系列 |
| 兼容 ePaper 显示屏 | 24 Pin ePaper<br />50 Pin ePaper | 24 Pin ePaper | 24 Pin ePaper |
| ePaper 接口 | FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm | FPC 24 Pin 0.5mm | FPC 24 Pin 0.5mm |
| 电池接口 | JST 2.0mm | / | JST 2.0mm |
| 开关 | 电池电源 ON/OFF | / | 电池电源 ON/OFF |
| 按键 | 1x 复位按键<br />3x 用户按键 | / | / |
| 扩展 IO 端口 | / | 连接其他控制器 | 连接额外传感器 |

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

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 296x128](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Flexible Monochrome 296x128](https://www.seeedstudio.com/2-9-Flexible-Monochrome-ePaper-Display-with-296x128-Pixels-p-5780.html)
- [2.9-inch ePaper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：

- 对于 24 Pin ePaper 显示屏 → 将跳线设置为 24 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

#### 50-Pin 接口

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：
- 对于 50 Pin ePaper 显示屏 → 将跳线设置为 50 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

### 按键

EE04 配备 1 个复位按键和 3 个用户可编程按键，为用户交互和项目自定义提供了灵活性。

| 按键 | GPIO | 功能 |
|--------|------|----------|
| KEY0 | GPIO2_D1/A1 | 用户按键（可编程） |
| KEY1 | GPIO3_D2/A2 | 用户按键（可编程） |
| KEY2 | GPIO5_D4/A4 | 用户按键（可编程） |
| RESET | - | 复位按键 |

:::note
用户按键是可编程的，可配置为多种功能，例如页面切换、模式选择，或在 ePaper 项目中触发特定操作。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

### 跳线帽选择

EE04 支持 24-pin 和 50-pin 两种 ePaper 显示屏。请使用跳线帽为你的屏幕选择正确的引脚配置：

- **24-pin 模式**：将跳线帽插在 24-pin 一侧
- **50-pin 模式**：将跳线帽插在 50-pin 一侧

:::caution
请确保跳线帽根据 ePaper 显示屏的引脚数量正确放置。错误的跳线帽位置可能导致显示问题，甚至损坏屏幕。
:::

### 电池接口

该板载有一个带电源开关的 JST 2.0mm 电池接口，可使用 3.7V 锂电池为设备供电，适用于便携式应用。板载充电 IC 支持通过 USB Type-C 为电池充电。

当设备由电池供电时，下列现象是 SenseCraft Seeedash 固件本身固有的正常行为。

- 设备会在两次刷新之间自动进入低功耗模式
- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）
- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

## SenseCraft Seeedash 入门

本节将引导你将 EE04 连接到 SenseCraft Seeedash 平台，从而轻松实现无线更新屏幕内容。

:::note
**本指南使用的是哪块屏幕？** 与单一面板的板卡不同，EE04 支持多种 ePaper 面板（参见上文 **支持的 ePaper** 部分）。本指南全程以 **7.5-inch Monochrome ePaper (800 x 480)** 为示例——下文所有截图均基于该面板。如果你使用的是其他屏幕，只需在步骤 2 烧录固件时选择自己的面板型号；其余步骤完全相同。
:::

:::caution
**首次上电没有欢迎界面？这是正常现象。** 由于 EE04 支持多种 ePaper 面板，出厂固件不会预先为任何特定屏幕烧录。当你连接屏幕并为全新板卡上电时，显示屏很可能保持空白——这并**不**意味着板卡或屏幕损坏。你需要先烧录与屏幕型号匹配的 SenseCraft Seeedash 固件（见下方步骤 2）；烧录完成后，欢迎界面和网络配置界面才会出现。
:::
### 设备安装

**步骤 1. 连接屏幕与主板**
小心地将 ePaper 屏幕的 FPC 线缆连接到 EE04 驱动板上的连接器，并确保锁扣机构已牢固锁紧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/Connect.gif" style={{width:800, height:'auto'}}/></div>

**步骤 2. 为你的屏幕烧录 HMI 固件**

保持 EE04 板通过 USB Type-C **数据** 线连接到电脑（同一根线同时用于供电和烧录），然后：

1. 访问 [SenseCraft Seeedash 平台](https://sensecraft.seeed.cc/hmi) 并登录你的账号。
2. 在左侧菜单中打开 **Tools** → **Firmware Flasher**。
3. 在设备列表中选择 **XIAO EE04 DIY Kit**。
4. 选择与你板子上连接的屏幕型号相匹配的固件条目。**本教程中我们使用 7.5" 单色显示屏 800 x 480** — 如果你的屏幕不同，请在此选择你自己的面板。
5. 点击 **Flash**，在弹出的窗口中选择你的开发板串口，等待烧录完成。

:::tip
如果没有出现串口，请按下板上的 **RESET** 按钮后重试。同时确保你的 USB-C 线缆支持数据传输，而不仅仅是充电。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_7.png" style={{width:800,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
固件烧录完成后，开发板会自动重启。屏幕会先显示欢迎界面，然后刷新到网络配置界面。这表明设备已准备好连接 Wi-Fi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_1.png" style={{width:300,height:'auto'}}/></div>


### 网络配置

**步骤 4. 通过手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码。根据手机上的提示输入本地 Wi-Fi 的 SSID 和密码，将 EE04 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**步骤 5. 获取配对码**
网络配置成功后，屏幕会再次刷新并显示一个唯一的 **Pair Code（配对码）**。下一步你将需要使用此配对码。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_2.png" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft Seeedash 上绑定设备**
前往 [SenseCraft Seeedash 平台](https://sensecraft.seeed.cc/hmi/device)。登录你的账号。进入设备管理页面并选择 "New Device"。输入你的电子墨水屏上显示的配对码（Pair Code）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**     
在 SenseCraft Seeedash 平台上，选择适用于 7.5 英寸屏幕的模板来创建一个新界面，或上传一张图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_5.png" style={{width:500, height:'auto'}}/></div>

**步骤 8. 应用你的图片**
完成后，点击 "Apply" 按钮并选择你的 EE04 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_6.png" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**
最后，EE04 会接收数据并将你的新内容刷新到 7.5 英寸屏幕上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_4.png" style={{width:300, height:'auto'}}/></div>


## Arduino 入门

### 安装 Seeed GFX2 库

:::tip
该库与 TFT 库具有相同的功能，并且**不**与其兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

下载库文件后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### 配置并烧录程序

如图所示，通过以下菜单路径找到示例程序：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE04 → 7.5-inch ePaper - Monochrome 800x480 → 7_5_inch_Monochrome_HelloWorld

:::note
本教程以 **7.5-inch Monochrome ePaper (800 x 480)** 为示例。如果你使用的是其他屏幕，请在 `EE04` 目录下打开与你的面板型号相匹配的示例文件夹。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo_1.png" style={{width:800, height:'auto'}}/></div>

之后，依次进入 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。 

请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你就可以在电子墨水屏上看到反馈了！下面是 HelloWorld 示例的显示效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo.png" style={{width:300, height:'auto'}}/></div>

## 软件概览

### XIAO ePaper Display Board(ESP32-S3) - EE04 上的用户按键

本节演示如何使用 Arduino 读取按键状态并响应按键按下。
所有按键为低电平有效，这意味着按下时读取为 LOW，松开时读取为 HIGH。
基础按键读取示例
此示例演示如何检测按键按下并向串口监视器打印消息。

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

### XIAO ePaper Display Board(ESP32-S3) - EE04 上的用户电池

当使用电池供电时：

- 设备会在两次刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备会在右上角显示低电量图标

:::tip
如果你想自己编写代码来读取电池电压，在调用 analogRead() 函数前增加 10ms 延时会更加精确。
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

## 资源

- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 原理图](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Grabcad 3D 文件](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE04 原理图和 PCB](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
