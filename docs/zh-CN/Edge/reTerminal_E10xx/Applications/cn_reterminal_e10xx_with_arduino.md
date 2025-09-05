---
description: 本文介绍如何让 reTerminal E 系列 ePaper 显示屏与 Arduino 配合工作。
title: reTerminal E 系列 ePaper 显示屏与 Arduino 配合工作
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /cn/reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 Arduino 中开始使用 reTerminal E 系列 ePaper 显示屏

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

## 介绍

reTerminal E 系列代表了 Seeed Studio 在工业 HMI 解决方案方面的最新进展，以 ESP32-S3 作为主控制器并集成了 ePaper 显示屏。本指南将引导您使用 Arduino IDE 对 reTerminal E 系列设备上的 ePaper 显示屏进行编程，使您能够创建具有出色可见性和超低功耗的自定义界面和应用程序。

### 所需材料

要完成本教程，请准备以下 reTerminal E 系列设备之一：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
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
    </tr>
  </table>
</div>

### 环境准备

要使用 Arduino 对 reTerminal E 系列 ePaper 显示屏进行编程，您需要设置支持 ESP32 的 Arduino IDE。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### Arduino IDE 设置

**步骤 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software) 并启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div><br />

**步骤 2.** 向 Arduino IDE 添加 ESP32 开发板支持。

在 Arduino IDE 中，转到 **文件 > 首选项**，并将以下 URL 添加到"附加开发板管理器网址"字段：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包。

导航到 **工具 > 开发板 > 开发板管理器**，搜索"esp32"并安装 Espressif Systems 的 ESP32 包。

**步骤 4.** 选择正确的开发板。

转到 **工具 > 开发板 > ESP32 Arduino** 并选择 **XIAO_ESP32S3**。

**步骤 5.** 使用 USB-C 线缆将您的 reTerminal E 系列 ePaper 显示屏连接到计算机。

**步骤 6.** 从 **工具 > 端口** 选择正确的端口。

## ePaper 显示屏编程

**reTerminal E1001 配备 7.5 英寸黑白 ePaper 显示屏**，而 **reTerminal E1002 配备 7.3 英寸全彩 ePaper 显示屏**。两种显示屏都在各种照明条件下提供出色的可见性和超低功耗，使其成为需要始终开启显示且功耗最小的工业应用的理想选择。

### 使用 Seeed_GFX 库

要控制 ePaper 显示屏，我们将使用 Seeed_GFX 库，该库为各种 Seeed Studio 显示设备提供全面支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 通过在 Arduino IDE 中添加 ZIP 文件来安装库。转到 **项目 > 加载库 > 添加 .ZIP 库** 并选择下载的 ZIP 文件。

:::note
如果您之前安装了 TFT_eSPI 库，您可能需要暂时从 Arduino 库文件夹中删除或重命名它以避免冲突，因为 Seeed_GFX 是 TFT_eSPI 的分支，为 Seeed Studio 显示屏添加了额外功能。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="编程 reTerminal E1001" default>

#### 编程 reTerminal E1001（7.5 英寸黑白 ePaper）

让我们探索一个简单的示例，演示黑白 ePaper 显示屏上的基本绘图操作。

**步骤 1.** 从 Seeed_GFX 库打开示例代码：**文件 > 示例 > Seeed_GFX > ePaper > Basic > HelloWorld**

**步骤 2.** 在与您的代码相同的文件夹中创建一个名为 `driver.h` 的新文件。您可以通过单击 Arduino IDE 中的箭头按钮并选择"新建选项卡"，然后将其命名为 `driver.h` 来完成此操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 转到 [Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/) 并从设备列表中选择 **reTerminal E1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

**步骤 5.** 将代码上传到您的 reTerminal E1001。您应该看到显示屏显示各种图形，包括线条、文本和形状，演示基本绘图功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/148.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1002" label="编程 reTerminal E1002">

#### 编程 reTerminal E1002（7.3 英寸全彩 ePaper）

全彩 ePaper 显示屏支持红色、黑色和白色，允许创建更丰富的视觉界面。

**步骤 1.** 从 Seeed_GFX 库打开彩色示例代码：**文件 > 示例 > Seeed_GFX > ePaper > Colorful > HelloWorld**

**步骤 2.** 在与您的代码相同的文件夹中创建一个名为 `driver.h` 的新文件，按照之前相同的过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 转到 [Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/) 并从设备列表中选择 **reTerminal E1002**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

**步骤 5.** 将代码上传到您的 reTerminal E1002。显示屏将显示彩色图形，演示 ePaper 显示屏的全彩功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/149.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 使用 GxEPD2 库

除了 Seeed_GFX，您还可以使用 `GxEPD2` 库来驱动 reTerminal 的 ePaper 显示屏。`GxEPD2` 是一个功能强大且流行的库，支持广泛的电子纸显示屏。

**安装 GxEPD2 库**

为了确保您拥有最新功能和设备支持，最好从其 GitHub 存储库手动安装 `GxEPD2` 库。

**步骤 1.** 转到 GxEPD2 GitHub 存储库。单击"Code"按钮，然后选择"Download ZIP"将库保存到您的计算机。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">

    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 在 Arduino IDE 中，从下载的文件安装库。导航到 **Sketch > Include Library > Add .ZIP Library...** 并选择您刚刚下载的 ZIP 文件。

**步骤 3.** `GxEPD2` 库需要 `Adafruit GFX Library` 才能正常工作，您也必须安装它。最简单的方法是通过库管理器：转到 **Tools > Manage Libraries...**，搜索 "Adafruit GFX Library"，然后点击 "Install"。

:::note
虽然 `GxEPD2` 在 Arduino 库管理器中可用以方便使用，但那里的版本通常可能过时。GitHub 仓库是最新版本的权威来源，包含最新功能、错误修复和对最新电子纸显示屏的支持。因此，直接从 GitHub 下载库是确保您拥有最新代码的推荐方法。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001 GxEPD2" label="编程 reTerminal E1001" default>

#### 编程 reTerminal E1001（黑白屏幕）

这是使用 `GxEPD2` 库在 reTerminal E1001 的黑白电子纸显示屏上显示 "Hello World!" 的示例代码。将 `EPD_SELECT` 设置为 `0` 以选择 E1001 的驱动程序。

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
<TabItem value="Programming reTerminal E1002 GxEPD2" label="编程 reTerminal E1002">

#### 编程 reTerminal E1002（全彩屏幕）

对于 reTerminal E1002，您只需将 `EPD_SELECT` 的值更改为 `1`。这将为 7.3 英寸全彩电子纸显示屏选择适当的驱动程序。其余代码保持不变。

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
电子纸显示屏的刷新速度相对较慢（通常全刷新需要 1-3 秒）。这是正常行为，是超低功耗和无背光下优异可视性的权衡。
:::

## reTerminal 硬件使用例程

现在让我们通过 Arduino 代码示例探索 reTerminal E 系列的主要功能。

### LED 控制

reTerminal E 系列有一个板载 LED，可以通过 GPIO6 控制。注意 LED 逻辑是反向的（LOW = 开，HIGH = 关）。

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

reTerminal E 系列包含一个位于 GPIO7 的蜂鸣器，可以产生各种音调和警报声。

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

**Buzzer Functions:**

- `digitalWrite()`: Simple ON/OFF control for basic beeps
- `tone(pin, frequency, duration)`: Generate specific frequencies for melodies or alerts
- `noTone(pin)`: Stop tone generation

**Common Alert Patterns:**

- Single beep: Confirmation
- Double beep: Warning
- Triple beep: Error
- Continuous: Critical alert

### User Buttons

The reTerminal E Series features three user-programmable buttons that can be used for various control purposes. This section demonstrates how to read button states and respond to button presses using Arduino.

The reTerminal E Series has three buttons connected to the ESP32-S3:

- **KEY0** (GPIO3): Right button (Green Button)
- **KEY1** (GPIO4): Middle button
- **KEY2** (GPIO5): Left button

All buttons are active-low, meaning they read LOW when pressed and HIGH when released.

#### Basic Button Reading Example

This example demonstrates how to detect button presses and print messages to the serial monitor.

```cpp
// reTerminal E Series - 按钮测试
// 基于硬件原理图

// 根据原理图定义按钮引脚
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// 按钮状态变量
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // 初始化串口通信
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // 等待串口连接
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - 按钮测试");
  Serial1.println("=================================");
  Serial1.println("按任意按钮查看输出");
  Serial1.println();

  // 配置按钮引脚为输入
  // 硬件已有上拉电阻，所以使用 INPUT 模式
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // 读取初始状态
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("设置完成。准备检测按钮按下...");
}

void loop() {
  // 读取当前按钮状态
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // 检查 KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) 按下！");
    } else {
      Serial1.println("KEY0 (GPIO3) 释放！");
    }
    lastKey0State = key0State;
    delay(50); // 防抖延迟
  }

  // 检查 KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) 按下！");
    } else {
      Serial1.println("KEY1 (GPIO4) 释放！");
    }
    lastKey1State = key1State;
    delay(50); // 防抖延迟
  }

  // 检查 KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) 按下！");
    } else {
      Serial1.println("KEY2 (GPIO5) 释放！");
    }
    lastKey2State = key2State;
    delay(50); // 防抖延迟
  }

  delay(10); // 小延迟以防止过度占用 CPU
}
```

**How the Code Works:**

1. **Pin Definition**: We define constants for each button's GPIO pin number.

2. **Pin Configuration**: In `setup()`, we configure each button pin as `INPUT`.

3. **Button Detection**: In `loop()`, we continuously check each button's state using `digitalRead()`. When a button is pressed, the pin reads LOW.

4. **Debouncing**: A simple 200ms delay after each button press prevents multiple detections from a single press due to mechanical bounce.

5. **Serial Output**: Each button press triggers a message to the serial monitor for debugging and verification.

---

**Step 1.** Upload the code to your reTerminal E Series device.

**Step 2.** Open the Serial Monitor in Arduino IDE (Tools > Serial Monitor).

**Step 3.** Set the baud rate to 115200.

**Step 4.** Press each button and observe the output in the Serial Monitor.

Expected output when pressing buttons:

```
=================================
reTerminal E Series - 按钮测试
=================================
按任意按钮查看输出

KEY0 (GPIO3) 按下！
KEY0 (GPIO3) 释放！
KEY1 (GPIO4) 按下！
KEY1 (GPIO4) 释放！
KEY2 (GPIO5) 按下！
KEY2 (GPIO5) 释放！
```

### Environmental Sensor (SHT4x)

The reTerminal E Series includes an integrated SHT4x temperature and humidity sensor connected via I2C.

#### Installing Required Libraries

Install two libraries via Arduino Library Manager (**Tools > Manage Libraries...**):

1. Search and install "**Sensirion I2C SHT4x**"
2. Search and install "**Sensirion Core**" (dependency)

#### Basic Temperature and Humidity Example

```cpp
// reTerminal E Series - SHT40 温湿度传感器示例

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// reTerminal E Series 串口配置
#define SERIAL_RX 44
#define SERIAL_TX 43

// reTerminal E Series I2C 引脚
#define I2C_SDA 19
#define I2C_SCL 20

// 创建传感器对象
SensirionI2cSht4x sht4x;

void setup() {
    // 为 reTerminal E Series 初始化 Serial1
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x 基础示例");

    // 使用自定义引脚初始化 I2C
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // 初始化传感器
    sht4x.begin(Wire, 0x44);

    // 读取并打印序列号
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("执行 serialNumber()时出错：");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("序列号：");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // 测量间隔等待 5 秒

    float temperature;
    float humidity;

    // 高精度测量温湿度
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("执行 measureHighPrecision()时出错：");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("温度：");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("湿度：");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Setup Function:**

1. **Serial Initialization**: Uses `Serial1` with pins 44 (RX) and 43 (TX) specific to reTerminal E Series
2. **I2C Initialization**: Configures I2C with pins 19 (SDA) and 20 (SCL)
3. **Sensor Initialization**: Calls `sht4x.begin(Wire, 0x44)` to initialize the SHT4x sensor at address 0x44
4. **Serial Number Reading**: Reads and displays the sensor's unique serial number for verification

**Loop Function:**

1. **Delay**: Waits 5 seconds between measurements to avoid oversampling
2. **Measurement**: Uses `measureHighPrecision()` for accurate readings (takes ~8.3ms)
3. **Error Handling**: Checks for errors and converts them to readable messages using `errorToString()`
4. **Display Results**: Prints temperature in Celsius and relative humidity percentage

**Expected Output**

```
SHT4x 基础示例
序列号：331937553

温度：27.39°C 湿度：53.68%
温度：27.40°C 湿度：53.51%
温度：27.38°C 湿度：53.37%
```

### Battery Management System

The reTerminal E Series includes battery voltage monitoring capability through an ADC pin with voltage divider circuit.

#### Simple Battery Voltage Monitoring

```cpp
// reTerminal E Series - 简单电池电压读取

// 串口配置
#define SERIAL_RX 44
#define SERIAL_TX 43

// 电池监控引脚
#define BATTERY_ADC_PIN 1      // GPIO1 - 电池电压 ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - 电池监控使能

void setup() {
  // 初始化串口
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("电池电压监控");

  // 配置电池监控使能引脚
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // 启用电池监控

  // 配置 ADC
  analogReadResolution(12);  // 12 位分辨率
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // 让电路稳定
}

void loop() {
  // 启用电池监控
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // 读取毫伏电压
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // 禁用电池监控
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // 计算实际电池电压（由于分压器为 2 倍）
  float batteryVoltage = (mv / 1000.0) * 2;

  // 打印电压
  Serial1.print("电池：");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**Code Explanation:**

- GPIO1 reads the divided battery voltage through ADC
- GPIO21 enables the battery monitoring circuit
- The actual battery voltage is twice the measured voltage due to the voltage divider
- For a fully charged LiPo battery, expect around 4.2V
- When battery is low, voltage drops to around 3.3V

**Expected Output**

```
电池电压监控

电池：4.18 V
电池：4.19 V
电池：4.18 V
```

### Using the MicroSD Card

For applications requiring additional storage, such as a digital photo frame or data logging, the reTerminal E Series includes a MicroSD card slot.

Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
The reTerminal E Series only supports MicroSD cards up to 64GB formatted with the **Fat32** file system.
:::

#### Basic SD Card Operations: Listing Files

This example demonstrates how to initialize the SD card, detect when it is inserted or removed, and list all the files and directories in its root. The code is identical for both the **reTerminal E1001** and **reTerminal E1002**.


将以下代码复制到您的 Arduino IDE 草图中。

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

- **引脚定义：** 代码首先定义了用于 MicroSD 卡插槽的 GPIO 引脚。请注意，SPI 引脚（`MOSI`、`SCK`）与电子纸显示屏共享，但单独的片选（`SD_CS_PIN`）和专用的 SPI 实例（`spiSD`）确保它们可以独立使用。
- **SPI 初始化：** 我们实例化一个新的 SPI 对象 `spiSD(HSPI)`，以使用 ESP32 的第二个硬件 SPI 控制器（HSPI）。这是避免与其他 SPI 设备冲突的最佳实践。
- **卡检测：** `isCardInserted()` 函数读取 `SD_DET_PIN`。在 reTerminal 硬件上，当卡存在时，此引脚被拉低。
- **挂载/卸载：** `mountSD()` 函数启用卡的电源，使用正确的引脚配置 HSPI 总线，并调用 `SD.begin()` 初始化文件系统。`unmountSD()` 释放资源。
- **文件列表：** `listRoot()` 打开根目录（`/`），`listDir()` 是一个递归函数，遍历文件系统，打印所有文件和目录的名称。
- **`setup()`：** 初始化 `Serial1` 用于输出，配置卡检测引脚，并执行初始检查以查看设备启动时是否已插入卡。
- **`loop()`：** 代码不是持续检查卡，而是使用非阻塞计时器（`millis()`）每秒检查一次卡状态的变化。如果检测到变化（插入或移除卡），它会挂载或卸载卡并将状态打印到串行监视器。

##### 预期结果

1. 将代码上传到您的 reTerminal。
2. 打开 Arduino IDE 的串行监视器（**工具 > 串行监视器**）。
3. 确保波特率设置为 **115200**。

您将看到与以下操作对应的输出：

- **启动时没有卡：** 监视器将打印 `[SD] No card detected at startup...`
- **当您插入卡时：** 监视器将打印 `[SD] Card inserted.`，然后是卡上所有文件和目录的完整列表。
- **当您移除卡时：** 监视器将打印 `[SD] Card removed.`

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

这个综合示例结合了前面章节的功能。我们将编写一个程序，从 MicroSD 卡读取位图（`.bmp`）图像文件并在 reTerminal 的电子纸屏幕上显示。这展示了设备的实际应用。

程序将在 SD 卡的根目录中查找名为 `test.bmp` 的文件。

#### 准备工作

在运行代码之前，您必须正确准备 MicroSD 卡和图像文件。这是确保图像正确显示的最关键步骤。

**1. 格式化 MicroSD 卡**

准备一张 MicroSD 卡（建议 64GB 或更小）并使用 **FAT32** 文件系统格式化。

**2. 准备图像文件**

准备图像的方法根据您的 reTerminal 型号略有不同。请按照与您的设备匹配的指南进行操作。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="适用于 reTerminal E1001（黑白屏幕）" default>

黑白屏幕只能显示黑白像素。虽然我们的代码可以实时将彩色图像转换为灰度，但通过**在计算机上预先将图像转换为高质量灰度图像**，您将获得更好的对比度和细节。

1. **调整图像大小：** 将您的图片调整为 **800x480 像素**。

2. **转换为灰度（推荐）：** 在图像编辑器中，首先将图像转换为灰度。在 **GIMP** 中：
    - 转到菜单 **颜色 > 去色 > 去色...**。选择"亮度"等模式以获得最佳效果。

3. **保存为标准 BMP：** 按照彩色屏幕指南的相同步骤保存文件。即使图像是灰度的，将其保存为 24 位 BMP 可确保与代码的最大兼容性。
    - 转到 **文件 > 导出为...**，命名为 `test.bmp`。
    - 在导出对话框中，在 **高级选项** 下，选择 **"24 位：R8 G8 B8"**。
    - 点击 **导出**。

4. **复制到 SD 卡：** 将最终的 `test.bmp` 文件复制到 MicroSD 卡的根目录。

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="适用于 reTerminal E1002（彩色屏幕）">

彩色屏幕可以显示 6 种颜色：黑色、白色、红色、黄色、蓝色和绿色。提供的代码包含一个"最近颜色"算法，智能地将源图像中的任何颜色映射到屏幕上最佳的可用颜色。为了获得最佳效果，请按照以下步骤操作：

1. **调整图像大小：** 使用任何图像编辑器，将您的图片调整为 **800x480 像素**。

2. **保存为标准 BMP：** 代码设计用于读取 **未压缩** 的 24 位或 32 位 BMP 文件。使用专业图像编辑器是确保格式正确的最佳方法。我们推荐免费开源软件 **GIMP**：
    - 在 GIMP 中打开调整大小后的图像。
    - 转到菜单 **文件 > 导出为...**。
    - 将文件命名为 `test.bmp` 并点击 **导出**。
    - 在出现的"将图像导出为 BMP"对话框中，展开 **高级选项**。
    - 选择 **"24 位：R8 G8 B8"**。这是最兼容的未压缩格式。
    - 点击 **导出**。


3. **复制到 SD 卡：** 将最终的 `test.bmp` 文件复制到 MicroSD 卡的根目录。

</TabItem>
</Tabs>

如果您想使用现成的图像进行测试，可以使用 GxEPD2 提供的[示例图像](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps)。

#### 代码

这是最终验证过的代码。它包含所有必要的检查和高级颜色匹配算法。只需将 `EPD_SELECT` 宏设置为 `0`（用于 E1001 黑白屏）或 `1`（用于 E1002 彩色屏）。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="For reTerminal E1001 (B&W Screen)" default>

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
<TabItem value="For reTerminal E1002 (Color Screen)" label="For reTerminal E1002 (Color Screen)">

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

#### How It Works

- **`setup()`**: The `setup` function initializes all necessary hardware in sequence: the Serial port for debugging, the shared SPI bus, the e-paper display, and finally the SD card. If all initializations are successful, it makes a single call to `drawBmp()` to perform the main task.
- **`drawBmp()`**: This is the core function. It opens the BMP file, parses the header to read its dimensions and properties, and performs crucial validation checks. It specifically checks for unsupported compression types and provides a helpful error message if it finds one.
- **Drawing Loop**: The function reads the image from the SD card one row at a time. For each pixel in the row, it extracts the Red, Green, and Blue color values.
- **Color Handling**: This is where the logic splits based on the `EPD_SELECT` macro:
  - **For Color (E1002)**: It calls `findNearestColor(r, g, b)`. This function calculates the "distance" between the pixel's color and each of the 6 colors in the screen's palette. It returns the palette color with the smallest distance, ensuring the most accurate possible color representation.
  - **For B&W (E1001)**: It uses a standard luminance formula (`r * 0.299 + g * 0.587 + b * 0.114`) to convert the RGB color to a single brightness value. If this value is below a threshold (128), the pixel is drawn as black; otherwise, it's drawn as white.

#### Upload and Run

1. In the Arduino IDE, make sure you have the correct board selected (`XIAO_ESP32S3`).
2. Set the `EPD_SELECT` macro at the top of the code to `1` for the reTerminal E1002 or `0` for the E1001.
3. Insert your prepared MicroSD card into the reTerminal.
4. Upload the code.
5. Open the Serial Monitor at a baud rate of `115200`. You will see the progress logs, and after a few moments, the image will be rendered on the e-paper display.

:::tip About Refresh Speed
The screen refresh speed may be slow, sometimes the screen will not respond until 2~3 minutes after uploading the program.
:::

## Troubleshooting

### Q1: Why does the reTerminal's ePaper display not show anything or refresh when running the code above?

This issue may occur if you have inserted a MicroSD card into the reTerminal. The reason is that the MicroSD card and the ePaper display share the same SPI bus on the reTerminal. If a MicroSD card is inserted but its enable (chip select) pin is not properly managed, it can cause a conflict on the SPI bus. Specifically, the MicroSD card may hold the BUSY line high, which prevents the ePaper display from functioning correctly—resulting in no display updates or refreshes.

```cpp
// 初始化 SD 卡
pinMode(SD_EN_PIN, OUTPUT);
digitalWrite(SD_EN_PIN, HIGH);
pinMode(SD_DET_PIN, INPUT_PULLUP);
```

To resolve this, you must ensure that the MicroSD card is properly enabled using the code provided above. The code initializes and enables the MicroSD card by setting the correct pin states, which prevents SPI bus conflicts and allows both the SD card and the ePaper display to work together. Always use the recommended initialization code when using a MicroSD card with the reTerminal to avoid such issues.

If the MicroSD card is not used inside your project, we recommend powering down the device and removing the card before running the display program. If the card has been inserted into the reTerminal, you will need to add the above code to ensure that you can get the screen to display properly, regardless of whether you are using a MicroSD card or not.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

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
