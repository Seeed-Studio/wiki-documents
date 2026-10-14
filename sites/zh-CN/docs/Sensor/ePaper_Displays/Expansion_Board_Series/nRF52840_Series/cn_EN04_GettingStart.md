---
description: XIAO ePaper Display Board(nRF52840) - EN04 入门指南
title: EN04 入门指南
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 10/8/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/cn/epaper_EN04/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EN04 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO nRF52840** Plus 提供动力，显示板 EN04 支持 **24-pin** 和 **50-pin** 两种 ePaper 显示屏。它配备带电源开关的 JST 2.0 mm 电池连接器、内置充电 IC，并带有一个复位按键和三个用户按键。非常适合用于低功耗 ePaper 项目，例如数字标牌、电子标签和便携式信息板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **由 XIAO nRF52840 Plus 驱动：** 连接兼容的 ePaper 显示屏后即可立即工作。
- **多样化显示支持：** 兼容多种 ePaper 屏幕，支持 24-Pin 和 50-Pin 接口，并可通过跳线帽轻松切换。
- **带开关的电池连接器：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 包含 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。

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
      <th>ePaper 连接器</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>电池连接器</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>开关</th>
      <td>电池电源 ON/OFF</td>
    </tr>
    <tr>
      <th>电源</th>
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
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
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
            <th>兼容的 ePaper 显示屏</th>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper 连接器</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>电池连接器</th>
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
            <th>按键</th>
            <td>1x 复位按键<br />3x 用户按键</td>
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


### 应用

- **智能家居仪表盘**：显示天气更新、日历事件以及来自各类智能家居设备的通知等实时信息。
- **能耗监测**：显示来自智能电表的能耗数据，帮助用户更高效地跟踪和管理能源使用。
- **安防告警**：显示安防事件的告警和通知，例如运动检测或门/窗传感器触发。
- **智能恒温器显示**：显示温度和湿度水平，以及智能恒温器的控制设置。
- **数字相框**：创建一个支持 WiFi 的数字相框，用于显示来自智能家居网络的图片。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

### 支持的 ePaper 显示屏

#### 24-Pin 连接器

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple Color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.png" style={{width:800, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：

- 对于 24 Pin ePaper 显示屏 → 将跳线设置为 24 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

#### 50-Pin 连接器

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.png" style={{width:800, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper Display Board 时，请务必根据 ePaper 显示屏类型正确设置跳线：

- 对于 50 Pin ePaper 显示屏 → 将跳线设置为 50 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。上电前请务必再次确认跳线位置。

:::

### 用户按键

EN04 提供三个用户可编程按键，可用于多种控制用途。所有按键为低电平有效——按下时读取为 LOW，松开时读取为 HIGH。

在 EN04 上，这三个按键与 XIAO nRF52840 Plus 的连接如下：

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
      <td>D4 / A4</td>
    </tr>
  </tbody>
</table>

:::note
用户按键是可编程的，可配置为多种功能，例如页面切换、模式选择，或在 ePaper 项目中触发特定操作。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.png" style={{width:500, height:'auto'}}/></div>

### 电池连接器

EN04 配备 JST 2.0 mm 电池连接器和内置充电 IC，非常适合用于电池供电的低功耗 ePaper 项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.png" style={{width:600, height:'auto'}}/></div>

## 使用 Arduino 入门

### 安装 Seeed GFX2 库

EN04 的所有 ePaper 示例都基于 **Seeed_GFX2** Arduino 库构建，该库支持在[支持的 ePaper 显示屏](#支持的-epaper-显示屏)章节中列出的所有 ePaper 显示屏。下面的示例以 **7.5-inch Monochrome ePaper (800 x 480)** 为例。

**步骤 1. 下载 Seeed_GFX2 库**

访问 [Seeed_GFX2 GitHub 仓库](https://github.com/Seeed-Studio/Seeed_GFX2)，点击绿色的 **Code** 按钮，并选择 **Download ZIP** 将库下载到你的电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**步骤 2. 将库添加到 Arduino IDE**

打开 Arduino IDE，依次点击 **Sketch → Include Library → Add .ZIP Library...**，然后选择刚刚下载的 ZIP 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### 配置并烧录程序

1. 依次点击 **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN04 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_01.png" style={{width:300, height:'auto'}}/></div>

2. 在 **Tools → Board** 中选择 **Seeed XIAO nRF52840 Plus**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:800, height:'auto'}}/></div>

3. 通过 USB Type-C 连接开发板，选择对应的串口，然后点击 **Upload**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.png" style={{width:800, height:'auto'}}/></div>

:::note
上面的示例路径以 7.5 英寸黑白屏为例。对于其他受支持的屏幕，只需在 **XIAO ePaper Display Board - EN04** 下选择与你的屏幕型号匹配的文件夹即可——每块屏幕都附带 **HelloWorld**、**Bitmap** 和 **Custom_Demo** 示例（7.5 英寸三色屏除外，它仅附带 **HelloWorld** 和 **Custom_Demo**）。
:::

## 软件概览

#### 基础按键读取示例

此示例演示如何检测三个按键的按下，并将消息打印到串口监视器。

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (verified on hardware)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D4 / A4 / P0.04
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 4;

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

#### 电池电压读取示例

此示例演示如何读取电池电压并将其打印到串口监视器。

:::tip
如果你想自己编写代码来读取电池电压，在调用 analogRead() 函数前增加 10ms 延时会更精确。
:::

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

#define VOLTAGE_PIN A0 //P0.02
#define ADC_ENABLE_PIN A5 //P0.05

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

## 故障排查

**Q1：上电后 ePaper 屏幕没有任何显示。**

- **DIY 套件未预装固件。** XIAO EN04 DIY 套件出厂时不预装 ePaper 固件——首次上电出现空白或黑屏是正常现象。
- **检查 FPC 线缆方向。** 确保 ePaper 的 FPC 线缆以正确方向插入。反向插入可能导致空白屏幕，并有可能损坏屏幕。
- **按下 RESET 按钮。** 在烧录固件或接通电源后，按一次复位按钮以触发屏幕刷新。

**Q2：屏幕显示内容乱码或只部分刷新。**

- **确认跳帽设置。** EN04 支持 24-Pin 和 50-Pin 两种 ePaper 屏幕——跳帽必须与屏幕类型匹配。24-pin 屏幕将跳帽设置为 24 Pin，50-pin 屏幕设置为 50 Pin。
- **确认屏幕型号选择。** 在 Arduino 示例中，确保选择了与你的屏幕完全一致的型号（尺寸和颜色类型）。选择错误的型号会导致显示异常。
- **等待完整刷新。** ePaper 屏幕采用完整刷新周期——在刷新过程中出现的局部刷新或残影是正常现象，刷新完成后会消失。

**Q3：使用电池供电时，开发板无法上电。**

- **检查电源开关。** 将电池电源开关拨到 ON 位置——当开关关闭时，开发板不会从电池取电。
- **确认 JST 接插件极性。** 确保 JST 2.0 mm 电池接插件的极性连接正确。电池极性反接可能损坏硬件。连接电池前请核对接插件上的 +/− 标记。
- **给电池充电。** 如果电池已完全放电，开发板可能无法启动。请连接 USB Type-C 给电池充电后再尝试。

**Q4：Seeedash Firmware Flasher 无法检测到开发板。**

- **按下 RESET 按钮。** 在开发板通过 USB 连接电脑的情况下，按下并松开 RESET 按钮以重新枚举 USB 端口，然后再次尝试检测。
- **使用支持数据传输的 USB 线。** 有些 USB 线仅供电而不支持数据传输。请更换为已知良好的数据线。
- **检查 USB 接口。** 尝试电脑上的其他 USB 接口——部分接口可能存在供电或驱动问题。

**Q5：Arduino IDE 上传失败。**

- **选择正确的开发板。** 进入 **Tools** → **Board**，确保选择的是 **Seeed XIAO nRF52840 Plus**。不要选择其他 XIAO 板卡型号。
- **选择正确的端口。** 进入 **Tools** → **Port**，选择与你的开发板对应的串口。如果没有端口出现，请检查 USB 线和连接情况。
- **必要时进入 bootloader 模式。** 如果上传持续失败，双击 RESET 按钮进入 bootloader 模式，然后重新选择端口并再次上传。

## 资源
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
