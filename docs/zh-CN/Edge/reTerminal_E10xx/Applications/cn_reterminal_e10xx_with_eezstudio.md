---
description: 使用 EEZStudio 并部署到 Arduino 用于应用目的
title: reTerminal E 系列 ePaper 显示屏与 EEZ Studio 配合使用
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /cn/reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E 系列 ePaper 显示屏与 EEZ Studio 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## 介绍

本指南将引导您使用可视化设计工具 [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) 为 reTerminal E 系列设计专业的用户界面。您将学习如何创建 UI 元素、生成必要的代码，并最终使用 Arduino IDE 将其部署到设备上。这个过程允许您构建具有出色可见性和超低功耗的自定义界面，非常适合 HMI 应用。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 什么是 EEZ Studio？

EEZ Studio 是一个现代化的可视化编程和 UI 设计环境，主要用于构建测试和测量仪器、嵌入式设备以及其他交互式应用的用户界面。它结合了拖放式 GUI 设计、脚本功能和设备集成工具，使开发者、工程师和创客能够快速创建专业界面，而无需从头开始。

简而言之，EEZ Studio 充当硬件和软件之间的桥梁，使您能够更高效地设计、原型制作和部署用户体验。

### 为什么使用 EEZ Studio？

- 可视化界面设计 – 使用所见即所得编辑器创建复杂的 UI，减少手动编码的需要。
- 快速原型制作 – 快速测试和验证设计想法，节省开发时间和成本。
- 跨平台支持 – 构建可在多个操作系统和嵌入式目标上运行的应用程序。
- 硬件集成 – 直接连接和控制实验室仪器、IoT 设备和自定义板卡。
- 开源生态系统 – 受益于社区驱动的工具集，具有透明性和灵活性。

使用 EEZ Studio，您可以在很短的时间内从概念转向工作原型，同时确保您的设计既专业又能适应未来的需求。

### 与 SquareLine Studio 的区别

虽然 EEZ Studio 和 SquareLine Studio 都是 GUI 设计工具，但它们专注于不同的目标和用户场景：

<table class="EEZStudio-table">
    <thead>
        <tr>
            <th>方面</th>
            <th>EEZ Studio</th>
            <th>SquareLine Studio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>主要用途</th>
            <td>专为测试和测量仪器、嵌入式系统以及硬件/软件集成而设计</td>
            <td>专注于为嵌入式系统构建 GUI（特别是使用 LVGL）</td>
        </tr>
        <tr>
            <th>目标用户</th>
            <td>工程师、产品开发者、创客、实验室/测试仪器设计师</td>
            <td>嵌入式 UI 开发者、爱好者、IoT 产品设计师</td>
        </tr>
        <tr>
            <th>硬件集成</th>
            <td>与仪器、测量设备和自动化系统直接集成</td>
            <td>主要专注于显示/UI 生成，不涉及外部设备集成</td>
        </tr>
        <tr>
            <th>开源</th>
            <td>社区驱动、透明、可扩展，提供付费技术支持</td>
            <td>闭源商业产品，需要许可证</td>
        </tr>
        <tr>
            <th>工作流程</th>
            <td>可以在一个环境中进行原型制作、仿真和控制真实设备</td>
            <td>主要生成 UI 代码以编译到嵌入式项目中</td>
        </tr>
    </tbody>
</table>

## EEZ Studio 入门

### EEZ Studio 安装

[EEZ Studio 安装链接](https://www.envox.eu/studio/studio-introduction/) 访问下载链接后，选择与您的计算机兼容的系统版本进行下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## 创建项目

### 启动新的 LVGL 项目

在 EEZ Studio 界面顶部，点击 "CREATE" 按钮。
在左侧的项目模板列表中，找到并选择 "LVGL" 项目。

- `Name:` 为您的项目文件命名，为了方便在我们文章中解释后续内容，我们在这里将其称为 EEZ_UI。
- `LVGL Version:` 指定项目使用的 LVGL 库版本。从下拉菜单中选择 9.x。
- `Location:` 指定项目文件在您计算机上的存储路径。默认路径通常指向您的 EEZ Studio 下载或安装目录中的默认项目文件夹（例如，C:\Users\YourUser\Documents\EEZ Studio\Projects 或类似路径）。如果您需要更改存储位置，请点击 Location 文本框右侧的文件夹图标（或省略号 ...）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### 项目设置配置

在为 E-paper reTerminal 构建 LVGL UI 项目时，您需要正确配置 EEZ Studio 项目设置，以确保生成的 UI 文件与您的 Arduino 或嵌入式环境兼容。

步骤 1. 打开项目设置

点击顶部工具栏上的 ⚙️（Settings）图标，如下所示。
这将在工作区右侧打开项目设置面板。

步骤 2. 配置构建输出和 LVGL 包含

在 General → Build 下，找到以下字段：

- LVGL include: 输入 lvgl.h 以在编译期间包含正确的 LVGL 头文件。

💡 这确保生成的 UI 代码在构建期间能够正确引用 LVGL 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

步骤 3. 设置显示分辨率

接下来，仍在 Settings → General 下，配置您显示器的分辨率：
- Display width: 800
- Display height: 480

🧩 这些参数定义了 UI 布局和坐标映射的目标 E-paper 屏幕分辨率。
确保这些值与您的特定 E-paper 型号匹配（例如，7.5 英寸 E-paper – 800×480）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### 项目参数设置和 UI 界面设计

### UI 界面设计

UI（用户界面）设计在嵌入式产品开发中至关重要，因为它直接决定了用户体验。一个美观、直观且响应迅速的界面不仅能提升产品的可用性，还能增强其整体吸引力。

在 EEZ Studio 中，您可以通过拖放组件快速组装界面。利用样式、字体、位图和主题等工具精确控制视觉效果，打造专业且独特的用户体验。

以下是推荐工具的介绍：

- [颜色](https://coolors.co/)
- [色彩图表](https://peiseka.com/)
- [图标](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [字体](https://fonts.google.com/)

**最右侧组件介绍**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: 用于统一和重用界面元素的视觉属性，确保一致性和高效维护。
- Bitmap: 常用于背景、图标、徽标等，以增强视觉呈现。
- Fonts: 确保文本清晰可读，同时支持多语言内容和品牌样式。
- Themes: 定义整体界面美学，支持快速切换如明暗模式。
- Groups: 将多个小部件组织在一起，便于统一管理和布局。

在本教程中，我将指导您设计网站或应用程序主页的 UI。一旦您掌握了核心技术，您就能够轻松应用它们来创建任何您想要的界面。

此页面由五个组件组成：

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

步骤 1. 更改画布的背景颜色

- 选择需要更改背景颜色的画布。
- 勾选 Color，然后选择您偏好的十六进制颜色代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

步骤 2 .添加面板

- 从 Basic 部分将 Panel 组件拖拽到画布上，并调整其宽度和高度。

- 勾选 Color，然后选择您偏好的十六进制颜色代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

步骤 3 .添加位图

- 点击最右侧边栏中的 Bitmaps 图标来添加图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- 为您选择的图像命名；稍后您需要根据命名约定来选择图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- 从 Basic 组将 Image 组件拖拽到画布上，然后选择您的图像并使用 Scale 设置大小。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

步骤 4 .添加线条

- 从 Visualiser 组将 Line 组件拖拽到画布上。设置 Points 的起点和终点来确定线条的长度和高度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

步骤 5 .添加标签

- 从 Basic 组将 Label 组件拖拽到画布上，然后选择您的字体颜色和字体格式设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- 点击最右列的 Fonts 框来添加您的字体格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- 设置字体名称和大小

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

以上概述了这五个组件的基本用法。您可以根据参考图或您自己设计的 UI 界面来排列它们。

### 代码生成和部署

完成 UI 设计后，您需要保存项目并在模拟器中预览。验证后，执行构建操作以生成可在目标硬件上执行的代码文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 1 .保存项目**

点击界面顶部的保存图标（软盘形状，位于 "OPEN" 按钮旁边）来保存您的项目。

**步骤 2 .预览设计**

点击工具栏中的运行图标（播放按钮）来启动模拟器并交互式预览 UI 效果。

**步骤 3 .构建项目**

点击编译图标（对勾按钮）来检查项目中的语法或逻辑错误。
点击构建图标（扳手按钮）来生成 UI 代码、图像数据和字体数据等文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**步骤 4 .确认构建成功**

完成后，EEZ Studio 显示绿色提示 "Build successful"，表示代码已成功生成。

## 环境准备

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

在 Arduino IDE 中，转到 **File > Preferences** 并将以下 URL 添加到 "Additional Boards Manager URLs" 字段：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包。

导航到 **Tools > Board > Boards Manager**，搜索 "esp32" 并安装 Espressif Systems 的 ESP32 包。

**步骤 4.** 选择正确的开发板。

转到 **Tools > Board > ESP32 Arduino** 并选择 **XIAO_ESP32S3**。

**步骤 5.** 使用 USB-C 线缆将您的 reTerminal E 系列 ePaper 显示屏连接到计算机。

**步骤 6.** 从 **Tools > Port** 选择正确的端口。

## ePaper 显示屏编程

**reTerminal E1001 配备 7.5 英寸黑白 ePaper 显示屏**，而 **reTerminal E1002 配备 7.3 英寸全彩 ePaper 显示屏**。两种显示屏都在各种照明条件下提供出色的可视性，功耗极低，非常适合需要始终开启显示且功耗最小的工业应用。

### 使用 Seeed_GFX 库

要控制 ePaper 显示屏，我们将使用 Seeed_GFX 库，该库为各种 Seeed Studio 显示设备提供全面支持。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 通过在 Arduino IDE 中添加 ZIP 文件来安装库。转到 **Sketch > Include Library > Add .ZIP Library** 并选择下载的 ZIP 文件。

:::note
如果您之前安装了 TFT_eSPI 库，您可能需要暂时从 Arduino 库文件夹中删除或重命名它以避免冲突，因为 Seeed_GFX 是 TFT_eSPI 的分支，为 Seeed Studio 显示屏添加了额外功能。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programming reTerminal E1001" default>
#### 编程 reTerminal E1001（7.5 英寸黑白 ePaper）

让我们探索一个简单的示例，演示在黑白 ePaper 显示屏上的基本绘图操作。

**步骤 1.** 从 Seeed_GFX 库打开示例代码：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**步骤 2.** 在与您的代码相同的文件夹中创建一个名为 `driver.h` 的新文件。您可以通过点击 Arduino IDE 中的箭头按钮并选择 "New Tab"，然后将其命名为 `driver.h` 来完成此操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 转到 [Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/) 并从设备列表中选择 **reTerminal E1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programming reTerminal E1002">

#### 编程 reTerminal E1002（7.3 英寸全彩 ePaper）

全彩 ePaper 显示屏支持红色、黑色和白色，允许更丰富的视觉界面。

**步骤 1.** 从 Seeed_GFX 库打开彩色示例代码：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**步骤 2.** 按照之前相同的过程，在与您的代码相同的文件夹中创建一个名为 `driver.h` 的新文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 转到 [Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/) 并从设备列表中选择 **reTerminal E1002**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## 将 EEZ Studio 项目部署到 Arduino

首先，在 'Tools' 菜单栏中找到 OPI PSRAM 并打开它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

这两个底层驱动文件需要添加到我们的项目目录中。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

将以下项目文件（包括四个文件）移植到 Arduino 库中，以便在 Arduino 项目中使用。
`EEZ_UI 文件`是在 EEZStudio 构建过程中生成的。您需要找到保存它的路径。

- 🔗 **[ZIP]** [代码](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

这是运行 UI 的主要 Arduino 代码：
三个按钮对应三个不同的屏幕，从绿色开始：依次为 HOME\Workstation\Plant。

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 3;
const int BUTTON_KEY1 = 4;
const int BUTTON_KEY2 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

e1002_driver_t e1002_driver;

void setup()
{
    String LVGL_Arduino = "Automotive Dashboard Demo - LVGL ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() +
                    "." + lv_version_patch();
    Serial.begin(115200);
    Serial.println(LVGL_Arduino);
    Serial.println("Initializing 6-color e-paper display...");
    e1002_display_init(&e1002_driver);

    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    lastKey0State = digitalRead(BUTTON_KEY0);
    lastKey1State = digitalRead(BUTTON_KEY1);
    lastKey2State = digitalRead(BUTTON_KEY2);

    ui_init();
    page_index = SCREEN_ID_HOME;
    loadScreen((ScreensEnum)page_index);
    Serial.println("Boot: Main Screen");
}

void loop()
{
    lv_timer_handler();
    ui_tick();
    delay(50);

    bool currentKey0State = digitalRead(BUTTON_KEY0);
    bool currentKey1State = digitalRead(BUTTON_KEY1);
    bool currentKey2State = digitalRead(BUTTON_KEY2);

    if (lastKey0State == HIGH && currentKey0State == LOW) {
        page_index = SCREEN_ID_HOME;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Main Screen");
        delay(50);
    }

    if (lastKey1State == HIGH && currentKey1State == LOW) {
        page_index = SCREEN_ID_WORKSTATION;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Plant Screen");
        delay(50);
    }

    if (lastKey2State == HIGH && currentKey2State == LOW) {
        page_index = SCREEN_ID_PLANT;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Setting Screen");
        delay(50);
    }

    lastKey0State = currentKey0State;
    lastKey1State = currentKey1State;
    lastKey2State = currentKey2State;

    if (e1002_display_should_refresh(&e1002_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1002_display_refresh(&e1002_driver);
        Serial.println("Display refresh complete");
    }

    delay(10);
}

```

- `e1002_display_init():` 初始化电子墨水显示屏硬件并设置其操作参数。

- `pinMode(..., INPUT_PULLUP):` 将按钮引脚配置为输入模式并启用内部上拉电阻。这确保了当按钮未按下时引脚保持高电平（HIGH），当按下时连接到地，变为低电平（LOW）。

- `ui_init()` 和 `loadScreen():` 这些函数初始化 LVGL 用户界面库并加载指定的屏幕

- `lv_timer_handler():` 这是 LVGL 库中的一个重要函数，用于处理 LVGL 内的定时器事件，如动画和屏幕更新。

- `if (lastKey0State == HIGH && currentKey0State == LOW):` 这一行是按键事件检测的核心。它检查按键状态是否从未按下变为按下。

- 当条件满足时，程序更新 `page_index` 并调用 `loadScreen()` 函数加载新页面。

- 状态更新：`lastKey0State = currentKey0State;` 这一行至关重要。它保存当前按键状态以供下一次 `loop()` 迭代使用，使下一次状态比较成为可能。

- 电子墨水刷新：`e1002_display_should_refresh()` 和 `e1002_display_refresh()` 管理电子墨水屏幕刷新。与 LCD 屏幕不同，电子墨水无法实时刷新。它通常需要在特定间隔进行选择性或全屏刷新以节省电力并延长寿命。此代码实现了按需刷新机制。

- `delay(10)`: 这是一个简单的软件防抖措施，防止程序将物理按键抖动误解为多次按压。

## 界面显示图

<div class="table-center">
  <table align="center">
    <tr>
      <th>主页</th>
      <th>工作站页面</th>
      <th>照片页面</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
