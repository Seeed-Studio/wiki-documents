---
description: 本文介绍如何让 reTerminal E 系列电子纸显示屏在 Arduino 中工作。
title: reTerminal E 系列电子纸显示屏配合 Arduino 使用
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
createdAt: '2025-08-21'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 Arduino 中使用 reTerminal E 系列电子纸显示屏入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

## 介绍

reTerminal E 系列代表了 Seeed Studio 在工业 HMI 解决方案方面的最新进展，以 ESP32-S3 作为主控制器并集成电子纸显示屏。本文将引导你使用 Arduino IDE 为 reTerminal E 系列设备上的电子纸显示屏编程，使你能够创建具有出色可视性和超低功耗的自定义界面和应用。

### 所需材料

要完成本教程，请准备以下 reTerminal E 系列设备之一：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 环境准备

要使用 Arduino 为 reTerminal E 系列电子纸显示屏编程，你需要在 Arduino IDE 中配置 ESP32 支持。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### Arduino IDE 设置

**步骤 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software)，然后启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div><br />

**步骤 2.** 在 Arduino IDE 中添加 ESP32 开发板支持。

在 Arduino IDE 中，依次点击 **File > Preferences**，并在 "Additional Boards Manager URLs" 字段中添加以下 URL：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包。

依次点击 **Tools > Board > Boards Manager**，搜索 "esp32"，并安装 Espressif Systems 提供的 ESP32 包。

**步骤 4.** 选择正确的开发板。

依次点击 **Tools > Board > ESP32 Arduino**，然后选择 **XIAO_ESP32S3**。

**步骤 5.** 使用 USB-C 线将 reTerminal E 系列电子纸显示屏连接到电脑。

**步骤 6.** 在 **Tools > Port** 中选择正确的端口。

## 电子纸显示屏编程

**reTerminal E1001 配备 7.5 英寸黑白电子纸显示屏**，而 **reTerminal E1002 则配备 7.3 英寸全彩电子纸显示屏**。这两款显示屏在各种光照条件下都具有出色的可视性，并且功耗极低，非常适合需要始终点亮且功耗极低的工业应用场景。

### 使用 Seeed_GFX 库

为了控制电子纸显示屏，我们将使用 Seeed_GFX 库，它为多种 Seeed Studio 显示设备提供了全面支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 在 Arduino IDE 中通过添加 ZIP 文件的方式安装该库。依次点击 **Sketch > Include Library > Add .ZIP Library**，然后选择下载好的 ZIP 文件。

:::note
如果你之前安装过 TFT_eSPI 库，可能需要暂时从 Arduino 库文件夹中移除或重命名它，以避免冲突，因为 Seeed_GFX 是在 TFT_eSPI 基础上派生的，并为 Seeed Studio 显示屏增加了更多功能。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="为 reTerminal E1001 编程" default>

#### 为 reTerminal E1001 编程（7.5 英寸黑白电子纸）

下面我们通过一个简单示例来演示在黑白电子纸显示屏上进行基本绘图操作。

**步骤 1.** 打开 Seeed_GFX 库中的示例草图：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**步骤 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件。你可以点击 Arduino IDE 中的箭头按钮并选择 "New Tab"，然后将其命名为 `driver.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码，并将其粘贴到 `driver.h` 文件中。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

**步骤 5.** 将草图上传到 reTerminal E1001。你应该会看到显示屏上显示包括线条、文本和形状在内的各种图形，用于演示基本绘图功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/148.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1002" label="为 reTerminal E1002 编程">

#### 为 reTerminal E1002 编程（7.3 英寸全彩电子纸）

全彩电子纸显示屏支持红色、黑色和白色三种颜色，可以实现更加丰富的可视化界面。

**步骤 1.** 打开 Seeed_GFX 库中的彩色示例草图：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**步骤 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件，操作方式与之前相同。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1002**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码，并将其粘贴到 `driver.h` 文件中。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

**步骤 5.** 将草图上传到 reTerminal E1002。显示屏将展示彩色图形，以演示电子纸显示屏的全彩显示能力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/149.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1003" label="Programming reTerminal E1003">

#### 编程 reTerminal E1003（10.3 英寸电子纸）

按照相同的工作流程，使用 Seeed_GFX 库来配置并驱动 reTerminal E1003 上的电子纸。

**步骤 1.** 从 Seeed_GFX 库中打开一个示例草图：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**步骤 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/arduino_1.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1003**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/arduino_2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码，并将其粘贴到 E1003 的 `driver.h` 文件中。

```cpp
#define BOARD_SCREEN_COMBO 522 // reTerminal E1003 (ED103TC2)
```

**步骤 5.** 将草图上传到你的 reTerminal E1003，以验证图元绘制、文本渲染以及全屏刷新行为。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/arduino_3.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1004" label="Programming reTerminal E1004">

#### 编程 reTerminal E1004（13.3 英寸全彩电子纸）

使用 Seeed_GFX 库来配置并驱动 reTerminal E1004 上的 E Ink® Spectra™ 6 全彩电子纸显示屏。

**步骤 1.** 从 Seeed_GFX 库中打开彩色示例草图：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**步骤 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/arduino_1.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1004**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/arduino_2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码，并将其粘贴到 E1004 的 `driver.h` 文件中。

```cpp
#define BOARD_SCREEN_COMBO 523 // reTerminal E1004 (T133A01)
```

**步骤 5.** 将草图上传到你的 reTerminal E1004，以验证颜色渲染、图元绘制、文本渲染以及全屏刷新行为。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/arduino_3.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 使用 GxEPD2 库

除了 Seeed_GFX，你也可以使用 `GxEPD2` 库来驱动 reTerminal 的电子纸显示屏。`GxEPD2` 是一个功能强大且广受欢迎的库，支持多种电子纸显示屏。

**安装 GxEPD2 库**

为确保你拥有最新的功能和设备支持，最好从其 GitHub 仓库手动安装 `GxEPD2` 库。

**步骤 1.** 前往 GxEPD2 的 GitHub 仓库。点击 "Code" 按钮，然后选择 "Download ZIP" 将库下载到你的电脑。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 在 Arduino IDE 中，从下载的文件安装该库。依次进入 **Sketch > Include Library > Add .ZIP Library...**，然后选择你刚刚下载的 ZIP 文件。

**步骤 3.** `GxEPD2` 库需要 `Adafruit GFX Library` 才能运行，你也必须安装它。最简单的方式是通过库管理器：依次进入 **Tools > Manage Libraries...**，搜索 "Adafruit GFX Library"，然后点击 "Install"。

:::note
虽然为了方便，`GxEPD2` 也可以通过 Arduino Library Manager 获取，但其中的版本往往已经过时。GitHub 仓库才是最新版本的权威来源，其中包含最新的功能、错误修复以及对最新电子纸显示屏的支持。因此，直接从 GitHub 下载该库是推荐的方式，以确保你拥有最新的代码。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001 GxEPD2" label="Programming reTerminal E1001" default>

#### 编程 reTerminal E1001（黑白屏）

下面是使用 `GxEPD2` 库在 reTerminal E1001 的黑白电子纸显示屏上显示 “Hello World!” 的示例代码。将 `EPD_SELECT` 设置为 `0` 以选择 E1001 的驱动。

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  display.setTextColor(GxEPD_BLACK);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
<TabItem value="Programming reTerminal E1002 GxEPD2" label="Programming reTerminal E1002">

#### 编程 reTerminal E1002（全彩屏）

对于 reTerminal E1002，你只需要将 `EPD_SELECT` 的值改为 `1`。这将为 7.3 英寸全彩电子纸显示屏选择合适的驱动。其余代码保持不变。

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  // For the color screen, you can set different colors, e.g., GxEPD_BLACK, GxEPD_RED
  display.setTextColor(GxEPD_GREEN);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
</Tabs>

:::note
ePaper 显示屏的刷新率相对较慢（通常完全刷新需要 1-3 秒）。这是正常现象，是为了实现超低功耗以及在无背光情况下依然具有出色可视性所做的权衡。
:::

## reTerminal 硬件的使用示例

现在让我们通过 Arduino 代码示例来探索 reTerminal E 系列的主要特性。

### LED 控制

reTerminal E 系列带有一个板载 LED，可通过 GPIO6 控制。请注意，LED 逻辑是反向的（LOW = 亮，HIGH = 灭）。

```cpp
// reTerminal E Series - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

### 蜂鸣器控制

reTerminal E 系列在 GPIO7 上集成了一个蜂鸣器，可以发出不同的音调和提示音。

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**带音调的蜂鸣器**

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

**蜂鸣器函数：**

- `digitalWrite()`: 用于基本蜂鸣的简单开/关控制
- `tone(pin, frequency, duration)`: 生成特定频率，用于旋律或警报
- `noTone(pin)`: 停止产生音调

**常见提示音模式：**

- 单声蜂鸣：确认
- 双声蜂鸣：警告
- 三声蜂鸣：错误
- 持续蜂鸣：严重警报

### 用户按键

reTerminal E 系列配备了三个用户可编程按键，可用于各种控制用途。本节演示如何读取按键状态并使用 Arduino 响应按键按下。

reTerminal E 系列有三个连接到 ESP32-S3 的按键：

- **KEY0** (GPIO3)：右键（绿色按键）
- **KEY1** (GPIO4)：中键
- **KEY2** (GPIO5)：左键

所有按键为低电平有效，这意味着按下时读取为 LOW，松开时读取为 HIGH。

#### 基本按键读取示例

此示例演示如何检测按键按下并向串口监视器打印消息。

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

**代码工作原理：**

1. **引脚定义**：我们为每个按键的 GPIO 引脚号定义常量。

2. **引脚配置**：在 `setup()` 中，将每个按键引脚配置为 `INPUT`。

3. **按键检测**：在 `loop()` 中，我们持续使用 `digitalRead()` 检查每个按键的状态。当按键被按下时，引脚读取为 LOW。

4. **消抖**：在每次按键按下后加入简单的 200ms 延时，可防止由于机械抖动导致的一次按下被多次检测。

5. **串口输出**：每次按键按下都会向串口监视器发送一条消息，用于调试和验证。

---

**步骤 1.** 将代码上传到你的 reTerminal E 系列设备。

**步骤 2.** 在 Arduino IDE 中打开串口监视器（Tools > Serial Monitor）。

**步骤 3.** 将波特率设置为 115200。

**步骤 4.** 依次按下每个按键，并在串口监视器中观察输出。

按下按键时的预期输出：

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

### 环境传感器（SHT4x）

reTerminal E 系列集成了一个通过 I2C 连接的 SHT4x 温湿度传感器。

#### 安装所需库

通过 Arduino 库管理器安装两个库（**Tools > Manage Libraries...**）：

1. 搜索并安装 "**Sensirion I2C SHT4x**"
2. 搜索并安装 "**Sensirion Core**"（依赖库）

#### 基本温湿度示例

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");

    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;

    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Setup 函数：**

1. **串口初始化**：使用 `Serial1`，并将引脚 44（RX）和 43（TX）配置为 reTerminal E 系列专用串口
2. **I2C 初始化**：使用引脚 19（SDA）和 20（SCL）配置 I2C
3. **传感器初始化**：调用 `sht4x.begin(Wire, 0x44)` 在地址 0x44 初始化 SHT4x 传感器
4. **序列号读取**：读取并显示传感器的唯一序列号以进行验证

**Loop 函数：**

1. **延时**：在两次测量之间等待 5 秒，以避免过度采样
2. **测量**：使用 `measureHighPrecision()` 进行高精度测量（耗时约 8.3ms）
3. **错误处理**：检查错误并使用 `errorToString()` 将其转换为可读消息
4. **显示结果**：以摄氏度打印温度，并打印相对湿度百分比

**预期输出**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

### 电池管理系统

reTerminal E 系列通过带分压电路的 ADC 引脚实现电池电压监测功能。

#### 简单电池电压监测

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Battery Voltage Monitor");

  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring

  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;

  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**代码说明：**

- GPIO1 通过 ADC 读取分压后的电池电压
- GPIO21 用于使能电池监测电路
- 由于分压电路的存在，实际电池电压是测量电压的两倍
- 对于完全充电的锂聚合物电池，电压大约为 4.2V
- 当电池电量低时，电压会下降到大约 3.3V

**预期输出**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

### 使用 MicroSD 卡

对于需要额外存储空间的应用，例如数码相框或数据记录，reTerminal E 系列配备了一个 MicroSD 卡槽。

如果你计划将设备用作数码相框或需要额外存储空间，请插入一张 microSD 卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E 系列仅支持容量不超过 64GB 且使用 **Fat32** 文件系统格式化的 MicroSD 卡。
:::

#### 基本 SD 卡操作：列出文件

本示例演示如何初始化 SD 卡、检测其插入或移除状态，并列出其根目录中的所有文件和文件夹。该代码对 **reTerminal E1001** 和 **reTerminal E1002** 完全相同。

将以下代码复制到你的 Arduino IDE 草图中。

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

##### 代码说明

- **引脚定义：** 代码首先定义了用于 MicroSD 卡槽的 GPIO 引脚。请注意，SPI 引脚（`MOSI`、`SCK`）与电子纸显示屏共享，但通过单独的片选引脚（`SD_CS_PIN`）和独立的 SPI 实例（`spiSD`），可以确保它们被独立使用。
- **SPI 初始化：** 我们实例化了一个新的 SPI 对象 `spiSD(HSPI)`，以使用 ESP32 的第二个硬件 SPI 控制器（HSPI）。这是避免与其他 SPI 设备冲突的最佳实践。
- **卡检测：** `isCardInserted()` 函数读取 `SD_DET_PIN`。在 reTerminal 硬件上，当卡存在时，该引脚被拉低（LOW）。
- **挂载/卸载：** `mountSD()` 函数为卡供电、使用正确的引脚配置 HSPI 总线，并调用 `SD.begin()` 初始化文件系统。`unmountSD()` 用于释放资源。
- **文件列出：** `listRoot()` 打开根目录（`/`），而 `listDir()` 是一个递归函数，用于遍历文件系统并打印所有文件和目录的名称。
- **`setup()`：** 初始化用于输出的 `Serial1`，配置卡检测引脚，并在设备上电时执行一次初始检查，以查看是否已经插入了卡。
- **`loop()`：** 代码没有持续不断地检查卡，而是使用非阻塞定时器（`millis()`）每秒检查一次卡状态是否发生变化。如果检测到变化（插入或移除卡），则挂载或卸载卡，并将状态打印到串口监视器。

##### 预期结果

1. 将代码上传到你的 reTerminal。
2. 打开 Arduino IDE 的串口监视器（**Tools > Serial Monitor**）。
3. 确保波特率设置为 **115200**。

你将看到与以下操作相对应的输出：

- **启动时未插卡：** 监视器会打印 `[SD] No card detected at startup...`
- **插入卡时：** 监视器会打印 `[SD] Card inserted.`，随后会完整列出卡上所有文件和目录。
- **移除卡时：** 监视器会打印 `[SD] Card removed.`

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

### 高级示例：从 SD 卡显示 BMP 图像

这个综合示例结合了前面章节的功能。我们将编写一个程序，从 MicroSD 卡中读取一个 Bitmap（`.bmp`）图像文件，并将其显示在 reTerminal 的电子纸屏幕上。这展示了一个实用的、真实世界的应用场景。

程序会在 SD 卡的根目录中查找名为 `test.bmp` 的文件。

#### 准备工作

在运行代码之前，你必须正确准备 MicroSD 卡和图像文件。这是确保图像正确显示的最关键步骤。

**1. 格式化 MicroSD 卡**

准备一张 MicroSD 卡（推荐 64GB 或更小），并使用 **FAT32** 文件系统对其进行格式化。

**2. 准备图像文件**

根据你的 reTerminal 型号，准备图像的方法略有不同。请按照与你的设备匹配的指南进行操作。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="适用于 reTerminal E1001（黑白屏）" default>

黑白屏只能显示黑白像素。虽然我们的代码可以实时将彩色图像转换为灰度图像，但如果你**在电脑上预先将图像转换为高质量灰度图像**，将会获得更好的对比度和细节。

1. **调整图像尺寸：** 将图片调整为 **800x480 像素**。

2. **转换为灰度（推荐）：** 在你的图像编辑器中，先将图像转换为灰度。在 **GIMP** 中：
    - 打开菜单 **Colors > Desaturate > Desaturate...**。选择类似 “Luminosity” 的模式以获得最佳效果。

3. **保存为标准 BMP：** 按照彩色屏幕指南中的相同步骤保存文件。即使图像是灰度的，将其保存为 24 位 BMP 也能确保与代码具有最大的兼容性。
    - 进入 **File > Export As...**，将其命名为 `test.bmp`。
    - 在导出对话框中，在 **Advanced Options** 下选择 **"24 bits: R8 G8 B8"**。
    - 点击 **Export**。

4. **复制到 SD 卡：** 将最终的 `test.bmp` 文件复制到 MicroSD 卡的根目录。

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="适用于 reTerminal E1002（彩色屏）">

彩色屏可以显示 6 种颜色：黑、白、红、黄、蓝和绿。提供的代码包含一个“最近颜色”算法，可以智能地将源图像中的任意颜色映射到屏幕上最合适的可用颜色。为了获得最佳效果，请按照以下步骤操作：

1. **调整图像尺寸：** 使用任意图像编辑器，将图片调整为 **800x480 像素**。

2. **保存为标准 BMP：** 代码被设计为读取**未压缩的** 24 位或 32 位 BMP 文件。使用专业图像编辑器是确保格式正确的最佳方式。我们推荐免费开源软件 **GIMP**：
    - 在 GIMP 中打开已调整尺寸的图像。
    - 打开菜单 **File > Export As...**。
    - 将文件命名为 `test.bmp` 并点击 **Export**。
    - 在弹出的 “Export Image as BMP” 对话框中，展开 **Advanced Options**。
    - 选择 **"24 bits: R8 G8 B8"**。这是兼容性最高的未压缩格式。
    - 点击 **Export**。

3. **复制到 SD 卡：** 将最终的 `test.bmp` 文件复制到 MicroSD 卡的根目录。

</TabItem>
</Tabs>

如果你想使用现成的图像进行测试，可以使用 GxEPD2 提供的[示例图像](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps)。

#### 代码

下面是最终验证过的代码。它包含所有必要的检查以及高级颜色匹配算法。只需将 `EPD_SELECT` 宏设置为 `0`（对应 E1001 黑白屏）或 `1`（对应 E1002 彩色屏）。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="适用于 reTerminal E1001（黑白屏）" default>

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="适用于 reTerminal E1002（彩色屏幕）">

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
</Tabs>

#### 工作原理

- **`setup()`**：`setup` 函数按顺序初始化所有必要的硬件：用于调试的串口、共享的 SPI 总线、电子纸显示屏，最后是 SD 卡。如果所有初始化都成功，它会调用一次 `drawBmp()` 来执行主要任务。
- **`drawBmp()`**：这是核心函数。它打开 BMP 文件，解析文件头以读取其尺寸和属性，并执行关键的校验检查。它会特别检查是否存在不支持的压缩类型，如果发现，则提供有用的错误信息。
- **绘制循环**：该函数一次从 SD 卡读取图像的一行。对于该行中的每个像素，它会提取红、绿、蓝三种颜色值。
- **颜色处理**：这里的逻辑会根据 `EPD_SELECT` 宏进行分支：
  - **彩色屏（E1002）**：调用 `findNearestColor(r, g, b)`。该函数计算像素颜色与屏幕调色板中 6 种颜色之间的“距离”。它返回距离最小的调色板颜色，以确保尽可能准确的颜色呈现。
  - **黑白屏（E1001）**：使用标准亮度公式（`r * 0.299 + g * 0.587 + b * 0.114`）将 RGB 颜色转换为单一亮度值。如果该值低于阈值（128），则将像素绘制为黑色；否则绘制为白色。

#### 上传并运行

1. 在 Arduino IDE 中，确保选择了正确的开发板（`XIAO_ESP32S3`）。
2. 在代码顶部将 `EPD_SELECT` 宏设置为 `1` 以用于 reTerminal E1002，或设置为 `0` 以用于 E1001。
3. 将准备好的 MicroSD 卡插入 reTerminal。
4. 上传代码。
5. 以 `115200` 的波特率打开串口监视器。你将看到进度日志，几秒钟后，图像会被渲染到电子纸显示屏上。

:::tip 关于刷新速度
屏幕刷新速度可能较慢，有时在上传程序后 2~3 分钟屏幕才会有响应。
:::

## 故障排查

### Q1：为什么在运行上述代码时，reTerminal 的电子纸显示屏没有任何显示或刷新？

如果你在 reTerminal 中插入了 MicroSD 卡，可能会出现此问题。原因是 MicroSD 卡和电子纸显示屏在 reTerminal 上共享同一条 SPI 总线。如果插入了 MicroSD 卡，但其使能（片选）引脚未被正确管理，就会在 SPI 总线上产生冲突。具体来说，MicroSD 卡可能会一直将 BUSY 线保持为高电平，从而阻止电子纸显示屏正常工作——导致没有显示更新或刷新。

```cpp
// Initialize SD Card
pinMode(SD_EN_PIN, OUTPUT);
digitalWrite(SD_EN_PIN, HIGH);
pinMode(SD_DET_PIN, INPUT_PULLUP);
```

为了解决这个问题，你必须确保使用上面提供的代码正确启用 MicroSD 卡。该代码通过设置正确的引脚状态来初始化并启用 MicroSD 卡，从而防止 SPI 总线冲突，并使 SD 卡和电子纸显示屏能够同时工作。在 reTerminal 上使用 MicroSD 卡时，请务必使用推荐的初始化代码，以避免此类问题。

如果你的项目中不使用 MicroSD 卡，我们建议先关闭设备电源并取出卡片，然后再运行显示程序。如果卡已经插入 reTerminal，则无论你是否在使用 MicroSD 卡，都需要添加上述代码，以确保屏幕能够正常显示。

### Q2: 为什么我无法向 reTerminal 上传程序？

如果你在向 reTerminal 上传程序时遇到如下错误。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/158.png" style={{width:1000, height:'auto'}}/></div>

那么，很可能是你的 Arduino IDE 上传速率设置得过高。请将其更改为 115200 波特率以解决此问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/159.png" style={{width:400, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
