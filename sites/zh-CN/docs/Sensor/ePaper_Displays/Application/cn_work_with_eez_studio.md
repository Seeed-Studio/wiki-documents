---
description: 使用 EEZ Studio 为 Seeed ePaper 产品设计专业的基于 LVGL 的界面，然后通过 Arduino IDE 部署——适用于 reTerminal E 系列和 XIAO ePaper Display Board（EE04）。
title: 使用 EEZ Studio
keywords:
  - ePaper 显示屏
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

本指南将带你完成以下流程：使用可视化设计工具 [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) 设计专业用户界面，生成 LVGL 代码，并通过 Arduino IDE 将其部署到 Seeed ePaper 产品上。对于每一块受支持的开发板，流程都是相同的——唯一的差异在于显示分辨率和驱动配置常量，我们会通过选项卡的方式呈现出来。

## 兼容硬件

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" 单色 / 7.3" Spectra 6 / 10.3" 单色 / 13.3" Spectra 6</td>
      <td align="center">通用驱动——可搭配我们任意 24-pin 或 50-pin 的 Seeed ePaper 屏幕使用</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 什么是 EEZ Studio？

EEZ Studio 是一个现代化的可视化编程和 UI 设计环境，最初是为测试与测量仪器以及嵌入式设备打造的。它将拖拽式 GUI 设计、脚本编写和设备集成工具结合在一起，使开发者、工程师和创客能够在不必从零开始的情况下快速创建专业界面。

简而言之，EEZ Studio 充当了硬件与软件之间的桥梁，让你可以更高效地设计、原型验证并部署用户体验。

### 为什么要使用 EEZ Studio？

- **可视化界面设计**——使用所见即所得编辑器创建复杂 UI。
- **快速原型开发**——快速测试和验证设计想法。
- **跨平台**——构建可在多个操作系统和嵌入式目标上运行的应用。
- **硬件集成**——可直接连接实验室仪器、物联网设备和自定义开发板。
- **开源**——由社区驱动的工具集，可选付费高级支持。

### EEZ Studio 与 SquareLine Studio 的对比

两者都是 GUI 设计工具，但面向的用户群体略有不同：

<table>
    <thead>
        <tr><th>方面</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>主要用途</th>
            <td>测试与测量仪器、嵌入式系统、软硬件集成</td>
            <td>嵌入式 GUI，尤其是基于 LVGL 的界面</td>
        </tr>
        <tr>
            <th>目标用户</th>
            <td>工程师、产品开发者、创客、实验/测试仪器设计者</td>
            <td>嵌入式 UI 开发者、爱好者、物联网产品设计者</td>
        </tr>
        <tr>
            <th>硬件集成</th>
            <td>可直接集成仪器、测量设备和自动化系统</td>
            <td>以 UI 生成为主，对外部设备集成较少</td>
        </tr>
        <tr>
            <th>开源情况</th>
            <td>社区驱动、透明且可扩展（提供高级付费支持）</td>
            <td>闭源商业产品，采用授权许可模式</td>
        </tr>
        <tr>
            <th>工作流</th>
            <td>在同一环境中完成原型设计、仿真并控制真实设备</td>
            <td>主要用于生成 UI 代码并编译进嵌入式工程</td>
        </tr>
    </tbody>
</table>

## 步骤 1：安装 EEZ Studio

从[官方网站](https://www.envox.eu/studio/studio-introduction/)下载适用于你操作系统的 EEZ Studio。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## 步骤 2：创建 LVGL 项目

在 EEZ Studio 界面顶部点击 **CREATE**。在左侧选择 **LVGL** 模板：

- **Name**——为你的项目起一个名字（本文中我们使用 `EEZ_UI`）。
- **LVGL Version**——在下拉框中选择 `9.x`。
- **Location**——选择保存项目文件的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### 项目设置

点击工具栏上的 ⚙️ 图标打开 Project Settings。

在 **General → Build** 下：

- **LVGL include**：输入 `lvgl.h`，以便生成的代码在构建时能正确引用 LVGL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

在 **General → Display** 下，为**你的硬件**设置分辨率：

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(E1001 上的 7.5" 单色屏和 E1002 上的 7.3" Spectra 6 屏共享相同的 800×480 分辨率。)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; 单色">

- **Display width**: 648
- **Display height**: 480

(请将数值设置为你插在 EE04 上的那块 Seeed ePaper 屏幕的分辨率。下面的示例使用的是 5.83" 648×480 单色屏。)

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

## 步骤 3：设计 UI

UI 设计直接决定用户体验。EEZ Studio 允许你通过拖拽组件，并结合使用 **Styles**、**Fonts**、**Bitmaps**、**Themes** 和 **Groups** 来控制视觉效果，从而快速搭建界面。

推荐的在线资源：

- [Coolors](https://coolors.co/)——配色方案生成器
- [PeisekA](https://peiseka.com/)——色卡
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)——图标库
- [Google Fonts](https://fonts.google.com/)——免费字体

右侧边栏：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- **Styles**——用于统一和复用界面元素的视觉属性。
- **Bitmaps**——背景、图标、Logo。
- **Fonts**——文本渲染和多语言支持。
- **Themes**——浅色/深色等顶层样式。
- **Groups**——布局辅助工具。

### 示例布局（Hello World + Panel + Image + Line + Label）

在本教程中，我们将用五个组件构建一个简单的主页：

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 1.** 更改画布背景颜色——选中画布，勾选 **Color**，并选择一个十六进制颜色值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 2.** 将一个 **Panel** 拖到画布上，调整其宽度/高度，并选择颜色。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 3.** 通过右侧的 **Bitmaps** 面板添加位图并命名，然后将 **Image** 组件拖到画布上并绑定你的位图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 从 Visualiser 分组中添加一条 **Line**，并配置它的 **Points**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 添加一个 **Label**，选择颜色，然后通过右侧的 **Fonts** 面板添加字体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## 步骤 4：生成代码

在设计完成之后：

1. **保存**——点击 **OPEN** 旁边的软盘图标。
2. **预览**——点击 **Run** 启动模拟器并预览 UI。
3. **编译 / 构建**——点击 ✓ 图标检查错误，然后点击扳手图标生成 UI 代码、图像数据和字体数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

绿色的 **Build successful** 消息表示代码生成成功。输出会放在项目的 **`src/ui`** 文件夹中（如果你愿意，可以将其重命名为 `src/EEZ_UI`）。

## 步骤 5：配置 Arduino IDE

要将 EEZ Studio 的输出部署到 Seeed ePaper 设备，需要先为 Arduino IDE 配置 ESP32 支持。

:::tip
如果你是第一次使用 Arduino，请先参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

1. **安装** [Arduino IDE](https://www.arduino.cc/en/software)。

   <div class="download_arduino_container" style={{textAlign: 'center'}}>
       <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
         <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
       </a>
   </div><br />

2. **添加 ESP32 开发板支持**：在 **File → Preferences** 中，将以下内容添加到 **Additional Boards Manager URLs**：

   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```

3. **安装 ESP32 软件包**：**Tools → Board → Boards Manager**，搜索 `esp32`，安装 Espressif Systems 软件包。

4. **为你的硬件选择开发板**：

   <Tabs groupId="eez-hardware">
   <TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3**

   </TabItem>
   <TabItem value="ee04" label="EE04 + 5.83&quot; mono">

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3_PLUS**

   同时在 **Tools** 菜单中启用 **OPI PSRAM**。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. 通过 USB-C **连接** 设备，并在 **Tools → Port** 中选择正确的串口。

## 步骤 6：安装 Seeed_GFX 库

我们使用 Seeed_GFX 库，它为 Seeed 显示设备提供了全面支持。

1. 从 GitHub 下载：

   <div class="github_container" style={{textAlign: 'center'}}>
       <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
       <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong>
       </a>
   </div><br />

2. 在 Arduino 中选择 **Sketch → Include Library → Add .ZIP Library**，然后选择刚刚下载的 ZIP 文件。

   :::note
   如果你之前安装过 `TFT_eSPI`，请暂时从 Arduino 库文件夹中移除或重命名它，以避免冲突——`Seeed_GFX` 是 `TFT_eSPI` 的一个分支，针对 Seeed 显示屏增加了额外功能。
   :::

3. **打开正确的示例草图**：

   - 彩色显示屏：**File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**
   - 单色显示屏：**File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**

4. 在与你的草图相同的文件夹中创建一个 `driver.h` 文件（使用 Arduino IDE 中的新标签箭头）。

5. 打开 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，选择你的硬件，复制生成的配置，并粘贴到 `driver.h` 中。具体内容会因硬件不同而有所差异：

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

适用于 **reTerminal E1001**（7.5" 黑白，UC8179）：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

适用于 **reTerminal E1002**（7.3" 全彩，UC8179C）：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

适用于 **EE04 + 5.83" 单色（UC8179）**：

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

如果你在 EE04 上更换了不同尺寸的屏幕，请在配置工具中重新生成 `driver.h`，并保留 `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04` 这一行。

:::tip
如果选择错误，屏幕将不会显示任何内容——请仔细检查屏幕和驱动板的组合。
:::

</TabItem>
</Tabs>

## 步骤 7：将 EEZ Studio 项目部署到 Arduino

将 EEZ Studio 的输出和平台驱动辅助文件添加到你的草图文件夹中，然后进行上传。

### 所有硬件通用的驱动文件

下载以下辅助文件，并将它们放在 `.ino` 文件旁边：

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

对于 EE04，你还需要 `lv_conf.h` 和 LVGL 库——见下方 EE04 选项卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

### 复制 EEZ_UI 输出

将生成的 `EEZ_UI` 文件夹（来自 EEZ Studio 项目的 `src/`）复制到 Arduino 的 libraries 文件夹中（通常为 `~/Documents/Arduino/Libraries`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

### 编写草图并上传

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

参考草图——通过三个按键（KEY0/KEY1/KEY2）循环切换三个页面：**HOME**、**Workstation**、**Plant**。

完整参考代码：[E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

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

说明：

- `e1002_display_init()` 初始化电子墨水显示硬件。
- `pinMode(..., INPUT_PULLUP)` 将按键引脚配置为带内部上拉的输入。
- `ui_init()` 和 `loadScreen()` 初始化 LVGL 并加载指定界面。
- `lv_timer_handler()` 处理 LVGL 的定时器和动画。
- `if (lastKeyXState == HIGH && currentKeyXState == LOW)` 这些代码块对 HIGH→LOW 边沿进行消抖并更新页面。
- `e1002_display_should_refresh()` / `e1002_display_refresh()` 按需管理电子墨水屏的刷新。

#### 最终显示效果

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

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

对于 EE04，你还需要：

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- 在 Arduino IDE 中安装 LVGL 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

将生成的 **EEZ_UI** 文件夹复制到 `~/Documents/Arduino/Libraries`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

参考示例草图——通过三个板载按键（KEY1/KEY2/KEY3 = 引脚 2 / 3 / 5）循环切换三个页面：**Smart**、**Industry**、**Game**。

完整参考代码：[EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)

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
{
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

#### 最终显示界面

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>
</div>

</TabItem>
</Tabs>

## 参考与资源

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)
- [参考项目 — E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- [参考项目 — EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)
- 适用于 5.83" 的 3D 外壳 — [front](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step) / [back](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

</TabItem>
</Tabs>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
