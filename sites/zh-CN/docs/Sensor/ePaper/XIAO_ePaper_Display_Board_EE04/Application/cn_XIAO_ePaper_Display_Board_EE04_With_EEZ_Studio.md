---
description: 使用 EEZ Studio 的 EE04 ePaper 显示屏
title: 使用 EEZ Studio 的 EE04 ePaper 显示板（ESP32-S3）
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /epaper_ee04_eezstudio
last_update:
  date: 09/28/2025
  author: Zeller
createdAt: '2025-10-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/epaper_ee04_eezstudio/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:600, height:'auto'}}/></div>

本教程使用 XIAO ePaper 显示板（ESP32-S3）- EE04，基于 EEZ Studio，通过使用 Arduino IDE 编译和上传程序。

## [EEZ Studio](https://www.envox.eu/studio/studio-introduction/)

EEZ Studio 代表了一个独特的解决方案，当需要快速开发吸引人的 GUI 和远程控制设备进行测试和测量（T&M）自动化时。

由一个在设计资源受限的[复杂](https://www.envox.eu/eez-bb3)嵌入式设备方面拥有第一手经验的团队创建，EEZ Studio 使用**拖**拽和**放置**以及流程图可视化编程来设计响应式桌面和嵌入式 GUI。一系列内部开发的组件和操作以及 [LVGL](https://github.com/lvgl/lvgl) 支持（8.x 和 9.x 版本）和现成的项目模板和示例，使快速原型制作以及最终应用程序的开发成为可能。

### 硬件

在开始阅读本教程之前，请确保您已准备好下面列出的所有必要物品。

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper 显示板（ESP32-S3）- EE04</th>
        <th>5.83 英寸单色 ePaper</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_Pre_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 创建项目

在顶部，选择 **Create**，然后点击 **LVGL**，在相邻的 **PROJECT SETTING** 部分，设置所需的参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name：项目名称
- LVGL version：选择版本 9.x
- Location：存储工程文件的位置，可以设置为默认路径或根据实际需求自定义。
- Project file path：工程文件的路径。此路径稍后会用到（此路径是计算机上的默认路径；您也可以自定义路径）

### 工程页面介绍

以下是 EEZ Studio 中基于 LVGL 的 UI 绘制的一些基本设置和控件，以及项目文件的构建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- 顶部（从左到右）：

  - Save：保存项目

  - Check：检查项目

  - Build：构建项目并生成文件

  - Settings：修改参数设置

  - Edit：在主页面上编辑和绘制

  - Run：预览创建设计的绘制效果

  - Debug：调试绘制的界面

- Pages：管理页面。点击 **+** 添加新页面

- Widgets Structure：组件管理，允许您直观地管理和选择您的组件

- Variables：连接 UI 组件、Flow 逻辑和 Action Script 的核心数据管理机制

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties：用于设置和查看对象或组件的属性参数

- Components Palette：提供可选组件列表，可以拖拽到设计界面中使用

- Styles：定义和应用统一字体的样式规则以保持一致性

- Fonts：管理项目中使用的字体资源及其大小设置

- Bitmaps：导入和管理位图资源文件，如图像和图标

- Themes：创建和应用统一的颜色主题和视觉样式套件

- Groups：组合和管理多个组件以实现同时操作和批量控制

### 构建项目文件

此项目是为**分辨率为 648*480 的 5.83 英寸单色电子墨水显示屏**设计的。因此，需要修改一些关键参数。

**步骤 1.** 选择 **Settings**，然后在 **General** 选项卡中，将 **Display width** 和 **Display height** 分别更改为 648 和 480。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 修改生成的文件

- 将文件夹路径 **src/ui** 重命名为 **src/EEZ_UI**；EEZ Studio 生成的所有代码文件都将存储在此文件夹中。

- 在 **Build** 选项卡中，将 **LVGL include** 更改为 **lvgl.h**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 构建项目

- 返回 **Main** 界面，将 **Hello World** 拖到屏幕中央。
- 在 **STYLE** 选项卡中，调整字体大小或颜色。
- 选择构建项目的选项。如果 **OUTPUT** 面板中没有显示错误，则项目已成功构建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

接下来，将构建的项目文件部署到 **Arduino IDE**，然后将它们上传到相应的硬件设备进行显示。

### Arduino IDE 设置

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software) 并启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div><br />

**步骤 2.** 向 Arduino IDE 添加 ESP32 开发板支持。

在 Arduino IDE 中，转到 **File > Preferences** 并将以下 URL 添加到 **Additional Boards Manager URLs** 字段：

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包。

导航到 **Tools > Board > Boards Manager**，搜索 **esp32** 并安装 Espressif Systems 的 ESP32 包。

**步骤 4.** 选择正确的开发板。

转到 **Tools > Board > ESP32 Arduino** 并选择 **XIAO_ESP32S3_PLUS**。

**步骤 5.** 使用 USB-C 线缆将您的 reTerminal E 系列 ePaper 显示屏连接到计算机。

**步骤 6.** 从 **Tools > Port** 选择正确的端口。

### 导入 Seeed_GFX 库

我们将使用 Seeed_GFX 库，它为各种 Seeed Studio 显示设备提供全面支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 通过在 Arduino IDE 中添加 ZIP 文件来安装库。转到 **Sketch > Include Library > Add .ZIP Library** 并选择下载的 ZIP 文件。

:::tip
如果您之前安装了 TFT_eSPI 库，您可能需要暂时从 Arduino 库文件夹中删除或重命名它以避免冲突，因为 Seeed_GFX 是 TFT_eSPI 的分支，为 Seeed Studio 显示屏添加了额外功能。
:::

**步骤 3.** 从 Seeed_GFX 库打开彩色示例草图：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**步骤 4.** 创建新的 `driver.h` 文件

[Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/)

- 在工具页面上输入您正在使用的显示屏的规格。这里，选择的显示屏是 **5.83 英寸单色 ePaper 屏幕（UC8179）**，驱动板是 **XIAO ePaper 显示板（ESP32-S3）- EE04**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

- 复制程序并将其保存到 `driver.h`。

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
如果您选择错误，屏幕将不显示任何内容。
因此请确保您的设备或组件类型正确。
:::

### 部署到 Arduino

**步骤 1.** 添加文件 `e1002_display.c`、`e1002_display.h`、`lv_conf.h` 和 lvgl 库。开发板应选择为 XIAO_ESP32S3。

- [点击获取相关文件](https://wiki.seeedstudio.com/cn/epaper_ee04_eezstudio/#reference--resources)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 将生成的 EEZ_UI 代码文件添加到库文件夹中（Arduino IDE 库的默认存储路径为 `C:\Users\Users_name\Documents\Arduino\Libraries`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 将程序上传到设备。

<details>

<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

int32_t page_index;

e1002_driver_t e1002_driver;

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "UI Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  ui_init();
  page_index = SCREEN_ID_MAIN;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

}

void loop()
{
  lv_timer_handler();
  ui_tick();


  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

# 代码说明  

1. **头文件包含**：包含 TFT 显示库、LVGL 图形库、UI 界面定义文件（`ui.h`）和电子纸显示驱动（`e1002_display.h`）。  

2. **全局变量**：  
   - `page_index`：用于记录当前显示页面的索引。  
   - `e1002_driver`：电子纸显示的驱动对象。  

3. **setup() 函数（初始化）**：  
   - 初始化串口通信（波特率：115200）用于打印调试信息。  
   - 打印 LVGL 库版本信息（例如："Smart Home Dashboard - LVGL Vx.x.x"）。  
   - 初始化电子纸显示（`e1002_display_init`）。  
   - 初始化 UI 界面（`ui_init`）。  
   - 设置初始页面为"主屏幕"（`SCREEN_ID_MAIN`）并加载它。  
   - 刷新电子纸显示以显示初始界面。  

4. **loop() 函数（主循环）**：  
   - 处理 LVGL 定时器和事件（`lv_timer_handler`）。  
   - 处理 UI 界面的计划任务（`ui_tick`）。  
   - 检查电子纸显示是否需要刷新（`e1002_display_should_refresh`）；如果需要，则执行刷新并打印日志。  
   - 每 10 毫秒循环一次以确保系统响应性。  

</details>

效果演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## UI 设计  

接下来，我们将演示一个使用 EEZ Studio 创建的 UI 示例，以进一步说明其在界面设计方面的能力。

在使用 EEZ Studio 设计 LVGL 界面时，您可能会发现以下工具特别有用：

- 用于快速创建、调整和导出配色方案的在线调色板生成器：[Color](https://coolors.co/)  
- 用于查找和匹配网页配色方案的在线调色板工具：[Color Chart](https://peiseka.com/)  
- 用于下载和管理图标的大型矢量图标库平台：[Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- 用于浏览和下载商业可用字体的免费字体资源网站：[Font](https://fonts.google.com/)  

### UI 绘制介绍  

- 效果图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1_1.png" style={{width:800, height:'auto'}}/></div>  

此 UI 由四个组件组成：

- Label  
- Line  
- Checkbox  
- Image  

**步骤 1.** 更改画布背景颜色  

默认背景颜色为白色；您可以根据自己的喜好进行更改。  

- 选择要更改背景颜色的画布。  

- 勾选 **Color** 选项，然后选择您喜欢的十六进制颜色代码。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2_1.png" style={{width:800, height:'auto'}}/></div>  

**步骤 2.** 添加 Label  

- 将 **Label** 组件拖入画布，然后选择所需的字体大小和颜色。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1_2.png" style={{width:800, height:'auto'}}/></div>  

**步骤 3.** 添加线条  

- 将 **Line** 组件拖入画布，并在 **Points** 部分设置起点和终点以确定线条的长度和位置。参考点：0,0 0,0 0,0 0,0,648,0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1_2.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 添加位图  

- 点击右侧边栏中的 **Bitmaps** 选项并添加所需的图像。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1_2.png" style={{width:800, height:'auto'}}/></div>  

- 根据需要为图像命名。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2_2.png" style={{width:800, height:'auto'}}/></div>  

- 将 **Image** 组件拖放到画布中，并使用 **Scale** 选项设置其大小。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3_2.png" style={{width:800, height:'auto'}}/></div>  

**步骤 5.** 添加 Checkbox  

- 将 **Checkbox** 组件拖入画布，输入内容，然后调整字体大小和颜色。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1_2.png" style={{width:800, height:'auto'}}/></div>  

### 部署和演示  

- 部署  
  - 添加头文件：`driver.h`、`e1002_display.c`、`e1002_display.h` 和 `lv_conf.h`。  
  - 将 **EEZ_UI** 文件添加到 Arduino IDE 的库文件夹中。  

完整参考代码：[EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{

  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{0
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

</details>

- 效果演示：<br/>
这里显示了三个不同的 UI 界面，**XIAO ePaper Display Board (ESP32-S3) – EE04** 利用其三个板载按钮在这些界面之间切换。每个按钮对应的界面为：<br/>
KEY1: Smart<br/>
KEY2: Industry<br/>
KEY3: Game

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

## 参考资料与资源

- 驱动相关文件（点击下载）
  - [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
  - [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
  - [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

- 5.83" 3D 外壳
  - [前面板](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [后面板](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

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
