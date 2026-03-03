---
description: XIAO ePaper 显示板(nRF52840) - EN04 入门指南
title: XIAO ePaper 显示板(nRF52840) - EN04 入门指南
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 11/25/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper 显示板 EN04 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper 显示板 EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 简介

由 **XIAO nRF52840** Plus 驱动，显示板 EN04 支持 **24 针**和 **50 针**电子纸显示屏。它配备 JST 2.0 mm 电池连接器和电源开关、内置充电 IC、NFC 功能，并配有一个复位按钮和三个用户按钮。非常适合低功耗电子纸项目，如数字标牌、电子标签和便携式信息板。

### 特性

- **由 XIAO nRF52840 Plus 驱动：** 连接兼容的电子纸显示屏后即可立即工作。
- **多功能显示支持：** 兼容多种电子纸屏幕，支持 24 针和 50 针接口，通过跳线帽轻松切换。
- **带开关的电池连接器：** 提供简单的电池连接并集成开关，实现高效的电源管理和节能。
- **用户友好的按钮：** 包括 1 个复位按钮和 3 个用户可编程按钮，为项目加速和自定义功能提供灵活性。

### 规格参数

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
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>电子纸连接器</th>
      <td>FPC 24 针 0.5mm<br />FPC 50 针 0.5mm</td>
    </tr>
    <tr>
      <th>电池连接器</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>开关</th>
      <td>电池电源开/关</td>
    </tr>
    <tr>
      <th>电源供应</th>
      <td>- 3.7V 锂电池<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>按钮</th>
      <td>- 1x 复位按钮<br />- 3x 用户按钮</td>
    </tr>
  </tbody>
</table>

### 电子纸板选择指南

<table>
    <thead>
        <tr>
            <th>产品</th>
            <th>电子纸显示板 EN04</th>
<th><a href="https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board/">电子纸扩展板</a></th>
<th><a href="https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/">电子纸驱动板</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO 系列</td>
            <td>XIAO 系列</td>
        </tr>
        <tr>
            <th>兼容的电子纸显示屏</th>
            <td>24 针电子纸<br />50 针电子纸</td>
            <td>24 针电子纸</td>
            <td>24 针电子纸</td>
        </tr>
        <tr>
            <th>电子纸连接器</th>
            <td>FPC 24 针，0.5mm<br />FPC 50 针，0.5mm</td>
            <td>FPC 24 针 0.5mm</td>
            <td>FPC 24 针 0.5mm</td>
        </tr>
        <tr>
            <th>电池连接器</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>开关</th>
            <td>电池电源开/关</td>
            <td>/</td>
            <td>电池电源开/关</td>
        </tr>
        <tr>
            <th>按钮</th>
            <td>1x 复位按钮<br />3x 用户按钮</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>扩展 IO 端口</th>
            <td>/</td>
            <td>连接其他控制器</td>
            <td>连接额外传感器</td>
        </tr>
    </tbody>
</table>

### 应用场景

- **智能家居仪表板**：显示实时信息，如天气更新、日历事件和来自各种智能家居设备的通知。
- **能耗监控**：显示智能电表的能耗数据，帮助房主更有效地跟踪和管理能源使用。
- **安全警报**：显示安全事件的警报和通知，如运动检测或门窗传感器激活。
- **智能恒温器显示**：显示温度和湿度水平，以及智能恒温器的控制设置。
- **数字相框**：创建支持 WiFi 的数字相框，可以显示来自智能家居网络的图像。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

<!-- :::tip

This version XIAO ePaper Display Board(nRF52840) - EN04 does not support NFC functionality.

::: -->

### 支持的电子纸

#### 24 针连接器

- [1.54 英寸电子纸 - 单色 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13 英寸电子纸 - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13 英寸电子纸 - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 英寸电子纸 - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9 英寸电子纸 - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2 英寸电子纸 - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26 英寸电子纸 - 单色 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83 英寸电子纸 - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5 英寸电子纸 - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5 英寸电子纸 - 三色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper 显示板时，请确保根据电子纸显示屏类型设置跳线：

- 对于 24 针电子纸显示屏 → 将跳线设置为 24 针

⚠️ 使用错误的跳线设置可能导致电子纸无法显示或显示异常内容。在通电前请务必仔细检查跳线位置。

:::

#### 50 针连接器

- [7.3 英寸 Spectra6 电子纸](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.jpg" style={{width:600, height:'auto'}}/></div>
:::tip
使用 XIAO ePaper 显示板时，请确保根据电子纸显示屏类型设置跳线：
- 对于 50 针电子纸显示屏 → 将跳线设置为 50 针

⚠️ 使用错误的跳线设置可能导致电子纸无法显示或显示异常内容。在通电前请务必仔细检查跳线位置。

:::

## 软件概述

### 安装 Seeed GFX 库

:::tip
此库与 TFT 库具有相同功能但不兼容。如果您已安装 TFT 库或其他类似的显示库，请先卸载它们。
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

选择您的设备类型，它将生成一些代码。复制这些代码，我们稍后会使用它们。

:::tip
如果您选择错误，屏幕将不显示任何内容。

所以请确保您的设备或组件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/6.jpg" style={{width:800, height:'auto'}}/></div>

下载库后，转到 **Sketch** -> **Include Library** -> **Add .ZIP Library** 并选择下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

有 4 个基本示例，打开您喜欢的基本示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：显示不同大小的文字和形状。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## 开始使用

这里，我们以 7.5 英寸显示屏为例。所有 24 针屏幕的步骤都相同；唯一的区别是在驱动程序中选择适当的屏幕尺寸。

创建一个**新的 "driver.h" 文件**并将这些代码粘贴到其中。代码应该如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN04
```

之后，转到 **Tools** -> **Board** -> **XIAO ESP32S3** 和 **Tools** -> **Port** -> **选择您的开发板连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/7.jpg" style={{width:1000, height:'auto'}}/></div>

现在您将在电子纸屏幕上看到反馈！以下是 Helloworld 示例的结果。（如果没有显示任何内容，请按下复位按钮）

:::tip
⚠️ 注意：电子纸排线方向
将电子纸显示屏连接到 XIAO 电子纸显示板时，请确保 FPC 排线插入方向正确。

⚠️ 不要反向连接！倒置插入排线可能导致电子纸无法显示，甚至损坏屏幕/开发板。
下图显示了正确的连接方式：
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.jpg" style={{width:500, height:'auto'}}/></div>

### XIAO 电子纸显示板(nRF52840) - EN04 上的用户按钮

EN04 具有三个用户可编程按钮，可用于各种控制目的。本节演示如何使用 Arduino 读取按钮状态并响应按钮按下。

在 EN04 上，三个按钮连接到 XIAO nRF52840 Plus：

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


所有按钮都是低电平有效，意味着按下时读取为 LOW，释放时读取为 HIGH。

基本按钮读取示例

此示例演示如何检测按钮按下并向串行监视器打印消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.jpg" style={{width:500, height:'auto'}}/></div>

<br></br>

```cpp
// Define button pin (GPIO2 corresponds to Arduino digital pin 2)
const int KEY_PIN = 2;

void setup() {
  // Initialize serial port (baud rate 9600, nRF52840 compatible with default Serial)
  Serial.begin(9600);
  // Wait for serial port initialization to complete (for nRF52840 Bluetooth module serial buffer)
  while (!Serial) delay(10);

  // Configure button pin as input mode with internal pull-up resistor enabled
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Button Detection Program Started");
  Serial.println("Press the button connected to GPIO2 to see output...");
}

void loop() {
  // Read button state (INPUT_PULLUP mode: LOW = pressed, HIGH = not pressed)
  int keyState = digitalRead(KEY_PIN);

  // Detect if button is pressed (low level)
  if (keyState == LOW) {
    // 50ms delay for debounce handling (avoids false triggers from mechanical button bounce)
    delay(50);
    // Read state again to confirm (ensure stable press)
    if (digitalRead(KEY_PIN) == LOW) {
      // Print specified content via serial port
      Serial.println("Hello. This is key1");

      // Wait for button release (prevent repeated printing during long press)
      while (digitalRead(KEY_PIN) == LOW) {
        delay(10); // Short delay to reduce CPU usage
      }
    }
  }

  // Short delay in main loop for performance optimization
  delay(10);
}
```

### XIAO 电子纸显示板(nRF52840) - EN04 上的用户电池

使用电池供电时：

- 设备将在刷新之间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，满电通常可使用 3 个月）

- 当电池电量低于 20% 时，设备将在右上角显示低电量图标

:::tip
如果您想自己编写代码来读取电池电压，在 analogRead() 函数之前添加 10ms 延迟会更精确。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.jpg" style={{width:600, height:'auto'}}/></div>

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
- **[ZIP]** [Seeed Studio XIAO 电子纸显示屏 EN04 原理图和 PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


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
