---
description: XIAO ePaper Display Board(nRF52840) - EN05 入门指南
sku: 100085486
title: EN05 入门指南
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 10/20/2026
  author: Nemo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/cn/epaper_en05/
updatedAt: '2026-10-20'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EN05 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO nRF52840 Plus** 提供算力，EN05 显示板支持多种 24-Pin ePaper 显示屏。它配备用于连接额外传感器的扩展 IO 端口、带电源开关的 JST 2.0 mm 电池接口、板载充电 IC，并集成了 3 个用户按键。非常适合超低功耗的 ePaper 项目，例如智能姓名牌、电子价签、会议室门牌和便携式信息看板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **由 XIAO nRF52840 Plus 驱动：** 连接兼容的 ePaper 显示屏即可立即工作，板载 NFC 接口可用于轻触配置、配对或触发内容更新。
- **多样化显示支持：** 兼容多种 24-Pin ePaper 显示屏，可满足不同项目对 24-Pin ePaper 显示屏的需求。
- **扩展 IO 端口：** 可连接额外的传感器，例如温湿度传感器，以增强功能。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效的电源管理和节能。
- **广泛的软件兼容性：** 无论你偏好使用 Arduino 还是 PlatformIO 编程，这块驱动板都能满足需求，为你的项目提供最大灵活性。

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
      <th>无线</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>ePaper 接口</th>
      <td>SPI FPC 24-Pin 0.5mm</td>
    </tr>
    <tr>
      <th>电池接口</th>
      <td>JST 2.0mm（3.7V 锂电池）</td>
    </tr>
    <tr>
      <th>开关</th>
      <td>硬件电源滑动开关</td>
    </tr>
    <tr>
      <th>按键</th>
      <td>1x 复位按键（侧边安装）<br />3x 用户按键（侧边安装）</td>
    </tr>
    <tr>
      <th>PCB 厚度</th>
      <td>1.2mm</td>
    </tr>
  </tbody>
</table>

### ePaper 板选择指南

<table>
    <thead>
        <tr>
            <th>产品</th>
            <th>ePaper Display Board EN05</th>
<th><a href="https://wiki.seeedstudio.com/cn/epaper_EN04/">ePaper Display Board EN04</a></th>
<th><a href="https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO 系列</td>
            <td>XIAO 系列</td>
        </tr>
        <tr>
            <th>兼容的 ePaper 显示屏</th>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper 接口</th>
            <td>FPC 24 Pin, 0.5mm</td>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>电池接口</th>
            <td>JST 2.0mm</td>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>开关</th>
            <td>电池电源 ON/OFF</td>
            <td>电池电源 ON/OFF</td>
            <td>/</td>
            <td>电池电源 ON/OFF</td>
        </tr>
        <tr>
            <th>按键</th>
            <td>1x 复位按键<br />3x 用户按键</td>
            <td>1x 复位按键<br />3x 用户按键</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>扩展 IO 端口</th>
            <td>连接额外传感器</td>
            <td>/</td>
            <td>连接其他控制器</td>
            <td>连接额外传感器</td>
        </tr>
    </tbody>
</table>

### 应用场景

- **智能姓名牌**：打造超低功耗的会议或员工胸牌，可显示姓名、日程或二维码，并通过 NFC 轻触配置内容更新。
- **电子价签**：构建电池供电的价签，在单次充电后可运行数月，仅在价格变更时刷新。
- **会议室门牌**：在会议室外显示房间状态、预订信息和即将开始的活动，同时保持极低功耗。
- **环境传感仪表板**：将扩展 IO 端口与温湿度等传感器结合，在始终可见的 ePaper 屏幕上显示实时环境数据。
- **便携信息看板**：携带轻量、由电池供电的显示屏，用于任务清单、笔记或参考信息，即使断电也能保持可读。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/HardwareOverview_EN05.png" style={{width:900, height:'auto'}}/></div>

### 支持的 ePaper 显示屏

EN05 支持以下 24-Pin SPI ePaper 显示屏：

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple Color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### 用户按键

EN05 提供 3 个用户可编程按键，可用于多种控制用途。所有按键为低电平有效——按下时读取为 LOW，松开时读取为 HIGH。

在 EN05 上，这 3 个按键与 XIAO nRF52840 Plus 的连接如下：

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
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D9</td>
    </tr>
  </tbody>
</table>

:::note
用户按键是可编程的，可以配置为多种功能，例如页面切换、模式选择，或在你的 ePaper 项目中触发特定操作。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/EN05_Buttons.png" style={{width:700, height:'auto'}}/></div>

### 电池接口

EN05 配备 JST 2.0 mm 电池接口和板载充电 IC，非常适合电池供电的低功耗 ePaper 项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/battery.png" style={{width:700, height:'auto'}}/></div>

## 使用 Arduino 入门

### 安装 Seeed GFX2 库

EN05 的所有 ePaper 示例都基于 **Seeed_GFX2** Arduino 库构建，该库支持在[支持的 ePaper 显示屏](#支持的-epaper-显示屏)章节中列出的所有 ePaper 显示屏。下面的示例以 **7.5-inch Monochrome ePaper (800 x 480)** 为例。

**步骤 1. 下载 Seeed_GFX2 库**

访问 [Seeed_GFX2 GitHub 仓库](https://github.com/Seeed-Studio/Seeed_GFX2)，点击绿色的 **Code** 按钮，并选择 **Download ZIP** 将库下载到你的电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**步骤 2. 将库添加到 Arduino IDE**

打开 Arduino IDE，依次进入 **Sketch → Include Library → Add .ZIP Library...**，然后选择刚刚下载的 ZIP 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### 配置并烧录程序

1. 依次进入 **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. 如果你尚未配置 XIAO nRF52840 的开发板支持，请打开 **Tools → Board → Boards Manager...**，搜索 **Seeed nRF52 Boards** 并安装——注意这是常规的 **Seeed nRF52 Boards** 软件包，**不是** *Seeed nRF52 mbed-enabled Boards*。有关详细的设置说明，请参考 [XIAO BLE 软件设置指南](https://wiki.seeedstudio.com/cn/XIAO_BLE/#软件设置)。

3. 在 **Tools → Board** 中选择 **Seeed XIAO nRF52840 Plus**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

4. 通过 USB Type-C 连接开发板，选择对应的串口，然后点击 **Upload**。上传完成后，电子墨水屏会刷新并显示示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.png" style={{width:300, height:'auto'}}/></div>

:::note
以上示例路径以 7.5 英寸黑白屏为例。对于其他受支持的屏幕，只需在 **XIAO ePaper Display Board - EN05** 下选择与你的屏幕型号匹配的文件夹——每块屏幕都附带 **HelloWorld**、**Bitmap_&lt;screen_model&gt;**（例如 `Bitmap_7_5_inch_Monochrome`）和 **Custom_Demo** 示例。
:::

## 软件概览

#### 基础按键读取示例

此示例演示如何检测三个按键的按下，并在串口监视器中打印消息。

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (from the EN05 schematic V1.11)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D9
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 9;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

## 资源
- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN05/XIAO_ePaper_Display_Board_EN05_V1.11_SCH&PCB_260420.zip)

## 故障排查

**Q1：上电后电子墨水屏没有任何显示。**

- **检查 FPC 线缆方向。** 确保电子墨水屏的 FPC 线缆插入方向正确。反向插入可能导致屏幕无显示，甚至损坏屏幕。
- **按下 RESET 按钮。** 在烧录固件或接通电源后，按一次复位按钮以触发屏幕刷新。

**Q2：屏幕显示内容乱码或只部分刷新。**

- **确认屏幕型号选择。** 在 Arduino 示例中，确保选择了与你的屏幕完全一致的型号（尺寸和颜色类型）。选择错误的型号会导致显示异常。
- **等待完整刷新。** 电子墨水屏使用完整刷新周期——在刷新过程中出现的局部刷新或残影是正常现象，刷新完成后会消失。

**Q3：使用电池供电时，开发板无法上电。**

- **检查电源开关。** 将电池电源开关拨到 ON 位置——当开关关闭时，开发板不会从电池取电。
- **确认 JST 接插件极性。** 确保 JST 2.0 mm 电池接插件以正确极性插入。电池极性反接可能损坏硬件。连接前请确认接插件上的 +/− 标记。
- **给电池充电。** 如果电池完全耗尽，开发板可能无法启动。请连接 USB Type-C 给电池充电后再尝试。

**Q4：电脑无法识别开发板，或没有出现串口。**

- **按下 RESET 按钮。** 在开发板通过 USB 连接电脑的情况下，按下并松开 RESET 按钮以重新枚举 USB 端口，然后再尝试。
- **使用支持数据传输的 USB 线。** 有些 USB 线仅供电，不支持数据传输。请更换为已知可用的数据线。
- **检查 USB 接口。** 尝试电脑上的其他 USB 接口——部分接口可能存在供电或驱动问题。

**Q5：Arduino IDE 上传失败。**

- **选择正确的开发板。** 进入 **Tools** → **Board**，确保选择的是 **Seeed XIAO nRF52840 Plus**，不要选择其他 XIAO 板卡型号。
- **选择正确的端口。** 进入 **Tools** → **Port**，选择与你的开发板对应的串口。如果没有端口出现，请检查 USB 线和连接情况。
- **必要时进入 bootloader 模式。** 如果上传持续失败，双击 RESET 按钮进入 bootloader 模式，然后重新选择端口并再次上传。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
