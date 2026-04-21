---
description: 使用 EEZStudio 并部署到 Arduino 以实现应用目的
title: 使用 EEZ Studio 工作
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
createdAt: '2025-09-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E 系列电子纸显示屏与 EEZ Studio 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## 介绍

本指南将带你使用可视化设计工具 [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) 为 reTerminal E 系列设计专业的用户界面。你将学习如何创建 UI 元素、生成所需代码，并最终通过 Arduino IDE 将其部署到设备上。该流程可以帮助你构建具有出色可视性和超低功耗的自定义界面，非常适合 HMI 应用。

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

### 什么是 EEZ Studio？

EEZ Studio 是一个现代化的可视化编程和 UI 设计环境，主要用于构建设备测试与测量仪器、嵌入式设备以及其他交互式应用的用户界面。它结合了拖拽式 GUI 设计、脚本能力和设备集成工具，使开发者、工程师和创客能够在无需从零开始的情况下快速创建专业界面。

简而言之，EEZ Studio 充当了硬件与软件之间的桥梁，使你能够更高效地设计、原型验证并部署用户体验。

### 为什么使用 EEZ Studio？

- 可视化界面设计 – 使用所见即所得编辑器创建复杂 UI，减少手写代码需求。
- 快速原型开发 – 快速测试和验证设计想法，节省开发时间和成本。
- 跨平台支持 – 构建可在多种操作系统和嵌入式目标上运行的应用。
- 硬件集成 – 可直接连接和控制实验仪器、物联网设备以及自定义板卡。
- 开源生态 – 受益于社区驱动的工具集，具备透明性和灵活性。

借助 EEZ Studio，你可以在极短时间内从概念走向可运行的原型，同时确保设计既专业又能适应未来需求。

### 与 SquareLine Studio 的区别

尽管 EEZ Studio 和 SquareLine Studio 都是 GUI 设计工具，但它们关注的目标和使用场景不同：

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
            <td>为测试与测量仪器、嵌入式系统以及软硬件集成而设计</td>
            <td>专注于为嵌入式系统构建 GUI（尤其是基于 LVGL）</td>
        </tr>
        <tr>
            <th>目标用户</th>
            <td>工程师、产品开发者、创客、实验/测试仪器设计人员</td>
            <td>嵌入式 UI 开发者、爱好者、物联网产品设计师</td>
        </tr>
        <tr>
            <th>硬件集成</th>
            <td>可直接集成仪器、测量设备和自动化系统</td>
            <td>主要聚焦于显示/UI 生成，而非外部设备集成</td>
        </tr>
        <tr>
            <th>开源情况</th>
            <td>社区驱动、透明、可扩展，并提供高级/付费技术支持</td>
            <td>闭源的商业产品，采用授权许可模式</td>
        </tr>
        <tr>
            <th>工作流程</th>
            <td>可在同一环境中完成原型设计、仿真以及对真实设备的控制</td>
            <td>主要用于生成 UI 代码，再编译进嵌入式工程</td>
        </tr>
    </tbody>
</table>

## EEZ Studio 入门

### EEZ Studio 安装

[EEZ Studio 安装链接](https://www.envox.eu/studio/studio-introduction/) 访问下载链接后，选择与你电脑系统兼容的版本进行下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## 创建项目

### 新建 LVGL 项目

在 EEZ Studio 界面顶部，点击 “CREATE” 按钮。
在左侧的项目模板列表中，找到并选择 “LVGL” 项目。

- `Name:` 为你的项目文件命名，为了便于后续文章内容的说明，我们在此将其命名为 EEZ_UI。
- `LVGL Version:` 指定项目使用的 LVGL 库版本。从下拉菜单中选择 9.x。
- `Location:` 指定项目文件在你电脑上的存储路径。默认路径通常指向 EEZ Studio 下载或安装目录中的默认项目文件夹（例如：C:\Users\YourUser\Documents\EEZ Studio\Projects 或类似路径）。如果需要更改存储位置，请点击 Location 文本框右侧的文件夹图标（或省略号 ...）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### 项目设置配置

在为电子纸 reTerminal 构建 LVGL UI 项目时，你需要正确配置 EEZ Studio 的 Project Settings，以确保生成的 UI 文件与 Arduino 或嵌入式环境兼容。

步骤 1. 打开 Project Settings

点击顶部工具栏中的 ⚙️（Settings）图标，如下图所示。
这将会在工作区右侧打开 Project Settings 面板。

步骤 2. 配置 Build Output 和 LVGL Include

在 General → Build 下，找到以下字段：

- LVGL include: 输入 lvgl.h，以便在编译时包含正确的 LVGL 头文件。

💡 这样可以确保生成的 UI 代码在构建过程中正确引用 LVGL 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

步骤 3. 设置显示分辨率

接下来，仍在 Settings → General 下，配置显示屏的分辨率：
- Display width: 800
- Display height: 480

🧩 这些参数定义了 UI 布局和坐标映射所针对的电子纸屏幕分辨率。
请确保这些数值与你的电子纸型号相匹配（例如，7.5 英寸电子纸 – 800×480）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### 项目参数设置与 UI 界面设计

### UI 界面设计

UI（用户界面）设计在嵌入式产品开发中至关重要，它直接决定了用户体验。一个美观、直观且响应迅速的界面，不仅能提升产品的易用性，还能增强整体吸引力。

在 EEZ Studio 中，你可以通过拖拽组件快速搭建界面。利用 Styles、Fonts、Bitmaps 和 Themes 等工具精细控制视觉效果，从而打造专业且具有辨识度的用户体验。

以下是推荐工具的介绍：

- [配色](https://coolors.co/)
- [色卡](https://peiseka.com/)
- [图标](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [字体](https://fonts.google.com/)

**最右侧组件介绍**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles：用于统一和复用界面元素的视觉属性，确保一致性并提高维护效率。
- Bitmap：常用于背景、图标、Logo 等，以增强视觉表现力。
- Fonts：确保文本清晰易读，同时支持多语言内容和品牌风格。
- Themes：定义整体界面美学，可快速切换如明暗模式等主题。
- Groups：将多个控件组织在一起，便于统一管理和布局。

在本教程中，我将带你设计一个网站或应用首页的 UI。当你掌握这些核心技巧后，就可以轻松将其应用到任何你想要创建的界面中。

本页面由五个组件构成：

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

步骤 1. 更改画布的背景颜色

- 选择需要更改背景颜色的画布。
- 勾选 Color，然后选择你偏好的十六进制颜色代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

Step 2 .Add Panel

- 从 Basic 部分拖拽 Panel 组件到画布上，并调整其宽度和高度。

- 勾选 Color，然后选择你偏好的十六进制颜色代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

Step 3 .Add Bitmaps

- 点击最右侧边栏中的 Bitmaps 图标以添加图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- 为你选择的图像命名；之后你需要根据命名规则来选择图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- 从 Basic 分组中拖拽 Image 组件到画布上，然后选择你的图像，并使用 Scale 设置大小。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

Step 4 .Add Line

- 从 Visualiser 分组中拖拽 Line 组件到画布上。设置 Points 的起点和终点以确定线条的长度和高度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

Step 5 .Add Label

- 从 Basic 分组中拖拽 Label 组件到画布上，然后选择你的字体颜色和字体格式设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- 点击最右侧列中的 Fonts 框以添加你的字体格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- 设置字体名称和大小

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

以上是这五个组件的基本用法。你可以根据参考示意图或自己设计的 UI 界面来进行排布。

### 代码生成与部署

完成 UI 设计后，你需要保存项目并在模拟器中预览。验证无误后，执行构建操作以生成可在目标硬件上运行的代码文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**Step 1 .Save Project**

点击界面顶部的 Save 图标（软盘形状，位于 “OPEN” 按钮旁边）以保存你的项目。

**Step 2 .Preview Design**

点击工具栏中的 Run 图标（播放按钮）以启动模拟器，并交互式预览 UI 效果。

**Step 3 .Build Project**

点击 Compile 图标（对勾按钮）以检查项目中的语法或逻辑错误。
点击 Build 图标（扳手按钮）以生成 UI 代码、图像数据和字体数据等文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**Step 4 .Confirming Successful Build**

完成后，EEZ Studio 会显示绿色提示 “Build successful”，表示代码已成功生成。

## 环境准备

要使用 Arduino 为 reTerminal E 系列 ePaper Display 编程，你需要在 Arduino IDE 中配置 ESP32 支持。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### Arduino IDE 设置

**Step 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software)，然后启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Step 2.** 在 Arduino IDE 中添加 ESP32 开发板支持。

在 Arduino IDE 中，进入 **File > Preferences**，并在 "Additional Boards Manager URLs" 字段中添加以下 URL：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** 安装 ESP32 开发板包。

导航到 **Tools > Board > Boards Manager**，搜索 "esp32"，并安装 Espressif Systems 提供的 ESP32 包。

**Step 4.** 选择正确的开发板。

进入 **Tools > Board > ESP32 Arduino**，并选择 **XIAO_ESP32S3**。

**Step 5.** 使用 USB-C 线将 reTerminal E 系列 ePaper Display 连接到电脑。

**Step 6.** 在 **Tools > Port** 中选择正确的端口。

## ePaper 显示屏编程

**reTerminal E1001 配备 7.5 英寸黑白 ePaper 显示屏**，而 **reTerminal E1002 配备 7.3 英寸全彩 ePaper 显示屏**。这两款显示屏在各种光照条件下都具有出色的可视性，并具备超低功耗，非常适合需要始终显示且功耗极低的工业应用。

### 使用 Seeed_GFX 库

为了控制 ePaper 显示屏，我们将使用 Seeed_GFX 库，它为多种 Seeed Studio 显示设备提供了全面支持。

**Step 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** 在 Arduino IDE 中通过添加 ZIP 文件来安装该库。进入 **Sketch > Include Library > Add .ZIP Library**，然后选择下载的 ZIP 文件。

:::note
如果你之前安装过 TFT_eSPI 库，可能需要暂时从 Arduino 库文件夹中移除或重命名它，以避免冲突，因为 Seeed_GFX 是在 TFT_eSPI 基础上派生的，并为 Seeed Studio 显示屏增加了额外功能。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programming reTerminal E1001" default>
#### Programming reTerminal E1001 (7.5-inch Black & White ePaper)

下面我们通过一个简单示例来演示在黑白 ePaper 显示屏上的基本绘图操作。

**Step 1.** 从 Seeed_GFX 库中打开示例草图：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Step 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件。你可以点击 Arduino IDE 中的箭头按钮并选择 "New Tab"，然后将其命名为 `driver.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1001**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programming reTerminal E1002">

#### Programming reTerminal E1002 (7.3-inch Full Color ePaper)

全彩 ePaper 显示屏支持红色、黑色和白色，可实现更加丰富的视觉界面。

**Step 1.** 从 Seeed_GFX 库中打开彩色示例草图：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Step 2.** 在与你的草图相同的文件夹中创建一个名为 `driver.h` 的新文件，操作过程与之前相同。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** 访问 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并在设备列表中选择 **reTerminal E1002**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** 复制生成的配置代码并将其粘贴到 `driver.h` 文件中。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## 将 EEZ Studio 项目部署到 Arduino

首先，在“Tools”菜单栏中找到 OPI PSRAM 并将其打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

需要将这两个底层驱动文件添加到我们的项目目录中。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

将以下项目文件（共四个文件）移植到 Arduino Library 中，以便在 Arduino 项目中使用。
`EEZ_UI file` 是在 EEZStudio 的构建过程中生成的。你需要找到保存它的路径。

- 🔗 **[ZIP]** [Code](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

下面是用于运行 UI 的主 Arduino 草图：
三个按键对应三个不同的界面，从绿色开始依次为：HOME\Workstation\Plant。

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

- `e1002_display_init():` 初始化电子墨水屏硬件并设置其工作参数。

- `pinMode(..., INPUT_PULLUP):` 将按键引脚配置为输入模式并启用内部上拉电阻。这样可以确保在按键未按下时引脚保持高电平（HIGH），按下时连接到地变为低电平（LOW）。

- `ui_init()` 和 `loadScreen():` 这些函数用于初始化 LVGL 用户界面库并加载指定的界面。

- `lv_timer_handler():` 这是 LVGL 库中的一个关键函数，用于处理 LVGL 内部的定时器事件，例如动画和界面更新。

- `if (lastKey0State == HIGH && currentKey0State == LOW):` 这一行是按键事件检测的核心。它检查按键状态是否从未按下变为按下。

- 当条件满足时，程序会更新 `page_index` 并调用 `loadScreen()` 函数来加载新页面。

- 状态更新：`lastKey0State = currentKey0State;` 这一行非常关键。它将当前按键状态保存下来，以便在下一次 `loop()` 循环中进行状态比较。

- 电子墨水屏刷新：`e1002_display_should_refresh()` 和 `e1002_display_refresh()` 用于管理电子墨水屏的刷新。与 LCD 屏不同，电子墨水屏无法实时刷新，通常需要在特定时间间隔进行局部或全屏刷新，以节省功耗并延长寿命。此代码实现了按需刷新的机制。

- `delay(10)`: 这是一个简单的软件消抖措施，用于防止程序将物理按键抖动误判为多次按下。

## 界面显示示意图

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

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
