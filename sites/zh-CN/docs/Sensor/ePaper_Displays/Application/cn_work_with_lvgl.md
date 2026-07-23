---
description: 使用 PlatformIO、Seeed_GFX 和 LVGL 在 Seeed reTerminal E 系列电子纸设备上构建一个简单的 LVGL 状态面板。
title: 使用 LVGL
keywords:
  - 电子纸显示屏
  - LVGL
  - Seeed_GFX
  - PlatformIO
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_lvgl
sidebar_position: 6
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/epaper_work_with_lvgl/
updatedAt: '2026-07-08'
---

# 使用 LVGL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/262.jpg" style={{width:1000, height:'auto'}}/></div>

LVGL 是一个面向嵌入式设备的开源图形库。它提供了现成的 UI 组件，例如标签、面板、进度条和布局工具，因此你可以在 C/C++ 中构建结构化界面，而无需手动绘制每一个像素。

本指南将使用 PlatformIO 创建一个简单的 **LVGL 电子纸状态面板**。示例默认以 **reTerminal E1001** 为目标，并为 reTerminal E1002、E1003 和 E1004 分别保留独立的 PlatformIO 环境。

该项目会渲染一个静态仪表盘，包含：

- 一个标题，
- 一个设备状态卡片，
- 一个网络状态卡片，
- 一个演示用电池卡片。

对于电子纸显示屏，这种静态 UI 工作流是一个很好的起点，因为只有在显示信息发生变化时，屏幕才需要刷新。

:::tip 在不搭建开发环境的情况下体验示例
如果你想在搭建开发环境之前，快速预览项目效果或体验基础演示固件，请打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。你可以选择受支持的 reTerminal E 系列设备，并直接通过浏览器烧录演示固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 固件烧录工具 🖱️</font></span></strong>
    </a>
</div><br />
:::

## 兼容硬件

准备以下 reTerminal E 系列设备之一。本指南中的 PlatformIO 项目默认使用 **reTerminal E1001** 作为环境。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" 黑白电子纸<br/>800 x 480</td>
      <td align="center">7.3" Spectra 6 色电子纸<br/>800 x 480</td>
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

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" 黑白电子纸<br/>1872 x 1404</td>
      <td align="center">13.3" Spectra 6 色电子纸<br/>1200 x 1600</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
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

## 项目工作原理

本示例主要包含两个部分：

- **LVGL** 创建 UI 对象，例如标签、卡片和进度条。
- **Seeed_GFX** 初始化电子纸显示屏，接收渲染后的像素，并刷新物理面板。

项目将这两部分放在不同的文件中：

<div class="table-center">
  <table align="center">
    <tr>
      <th>文件</th>
      <th>用途</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>定义 PlatformIO 开发板、库、编译标志和硬件环境。</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>为当前激活的硬件目标选择正确的 Seeed_GFX 驱动文件。</td>
    </tr>
    <tr>
      <td><code>include/driver_e1001.h</code> 到 <code>include/driver_e1004.h</code></td>
      <td>为每个 reTerminal E 系列型号存储 Seeed_GFX 的板卡与屏幕组合配置。</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>配置 LVGL 功能、色深和字体。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>初始化 Arduino、Seeed_GFX、LVGL、显示缓冲区以及电子纸刷新流程。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>创建 LVGL 状态面板布局。</td>
    </tr>
  </table>
</div>

## 步骤 1：安装 PlatformIO

本指南使用 PlatformIO 作为项目工作流。PlatformIO 会将开发板配置、库和源文件集中在一个文件夹中，使 LVGL 项目更易于构建和维护。

如果尚未安装 PlatformIO，请按照 [使用 PlatformIO](/cn/epaper_work_with_platformio) 中的步骤进行设置，然后再回到本指南。

安装完成后，打开 **Visual Studio Code**。你应该能在左侧活动栏中看到 PlatformIO 图标。

## 步骤 2：下载示例项目

LVGL 电子纸状态面板示例位于官方 reTerminal E 系列仓库中：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong>
    </a>
</div><br />

将该仓库下载到你的电脑，然后打开以下文件夹：

```text
OSHW-reTerminal-Series-E-D/examples/official/LVGLePaperStatusPanel
```

示例项目包含以下主要文件：

<div class="table-center">
  <table align="center">
    <tr>
      <th>文件</th>
      <th>功能说明</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>为 E1001、E1002、E1003 和 E1004 定义 PlatformIO 环境。</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>为当前构建环境选择正确的电子纸驱动配置。</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>配置本演示所使用的 LVGL 功能和字体。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>初始化显示屏、LVGL、渲染缓冲区以及电子纸刷新流程。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>创建显示在电子纸上的状态面板 UI。</td>
    </tr>
  </table>
</div>

## 步骤 3：在 PlatformIO 中打开项目

**步骤 1.** 打开 **Visual Studio Code**。

**步骤 2.** 点击左侧活动栏中的 **PlatformIO** 图标。

**步骤 3.** 点击 **PIO Home > Open**。

**步骤 4.** 点击 **Open Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/263.png" style={{width:1000, height:'auto'}}/></div>

**步骤 5.** 选择 `LVGLePaperStatusPanel` 文件夹。

**步骤 6.** 等待 PlatformIO 加载项目并安装所需库。

## 步骤 4：选择硬件环境

在项目根目录中打开 `platformio.ini`。默认环境为 `reterminal_e1001`。

```ini
[platformio]
default_envs = reterminal_e1001
```

对于 E1001，你可以保留默认设置。对于其他设备，将 `default_envs` 修改为对应的环境：

<div class="table-center">
  <table align="center">
    <tr>
      <th>设备</th>
      <th>PlatformIO 环境</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>reterminal_e1001</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>reterminal_e1002</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>reterminal_e1003</code></td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>reterminal_e1004</code></td>
    </tr>
  </table>
</div>

你也可以在不修改 `default_envs` 的情况下，通过 PlatformIO 终端构建特定环境。

## 步骤 5：构建并上传演示程序

使用 USB 线将 reTerminal E 系列设备连接到电脑。

要构建默认的 E1001 固件，请运行：

```bash
pio run
```

要构建特定目标，请添加 `-e` 和环境名称。例如：

```bash
pio run -e reterminal_e1001
```

要将固件上传到设备，请运行：

```bash
pio run -e reterminal_e1001 --target upload
```

上传完成后，打开串口监视器：

```bash
pio device monitor -b 115200
```

当示例程序正确启动时，串口监视器会显示：

```text
Seeed ePaper LVGL status panel starting.
LVGL status panel rendered.
```

ePaper 显示屏会刷新一次，并显示 LVGL 状态面板。

## 步骤 6：自定义并从 LVGL UI 中学习

在示例程序成功运行后，你可以开始将其作为一个小型 LVGL 学习项目进行修改。两个最重要的文件是：

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>Start Here When You Want To</th>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>更改传入 UI 的数值，例如设备状态、网络状态和电池百分比。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>更改屏幕标题、卡片布局、字体、颜色、标签和 LVGL 组件。</td>
    </tr>
  </table>
</div>

### 更改显示的数值

打开 `src/main.cpp`，在 `setup()` 中找到这一行：

```cpp
ui_status_panel_set_status("Ready", "Wi-Fi Standby", 76);
```

此函数会更新屏幕上的三个动态数值：

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>Meaning</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>显示在 Device 卡片中的设备状态文本。</td>
      <td><code>"Ready"</code></td>
    </tr>
    <tr>
      <td><code>network</code></td>
      <td>显示在 Network 卡片中的网络状态文本。</td>
      <td><code>"Wi-Fi Standby"</code></td>
    </tr>
    <tr>
      <td><code>battery_percent</code></td>
      <td>电池条的数值。该函数会将其限制在 0 到 100 之间。</td>
      <td><code>76</code></td>
    </tr>
  </table>
</div>

例如，将其更改为：

```cpp
ui_status_panel_set_status("Online", "Wi-Fi Connected", 95);
```

然后再次构建并上传项目：

```bash
pio run -e reterminal_e1001 --target upload
```

### 更改标题和卡片名称

打开 `src/ui_status_panel.cpp`。主标题在 `ui_status_panel_create()` 中创建：

```cpp
lv_label_set_text(title, "Seeed ePaper LVGL Panel");
```

你可以更改标题文本：

```cpp
lv_label_set_text(title, "My First LVGL Dashboard");
```

每个卡片是通过 `create_card()` 创建的。例如：

```cpp
lv_obj_t *status_card = create_card(screen, "Device", status_x, status_y, status_w, status_h, lv_palette_main(LV_PALETTE_RED));
lv_obj_t *network_card = create_card(screen, "Network", network_x, network_y, network_w, network_h, lv_palette_main(LV_PALETTE_BLUE));
lv_obj_t *battery_card = create_card(screen, "Battery Demo", battery_x, battery_y, battery_w, battery_h, lv_palette_main(LV_PALETTE_GREEN));
```

第二个参数是卡片标题。你可以将 `"Device"`、`"Network"` 和 `"Battery Demo"` 更改为与你自己的应用相匹配的名称。

### 更改颜色

该示例使用 LVGL 调色板颜色：

```cpp
lv_palette_main(LV_PALETTE_RED)
lv_palette_main(LV_PALETTE_BLUE)
lv_palette_main(LV_PALETTE_GREEN)
```

对于 reTerminal E1002 和 reTerminal E1004 等彩色 ePaper 型号，`src/main.cpp` 会将 LVGL 颜色映射到 ePaper 调色板。示例调色板包括白色、黑色、红色、黄色、绿色和蓝色。

对于 reTerminal E1001 和 reTerminal E1003 等黑白 ePaper 型号，相同的 UI 会根据亮度转换为黑白。较暗的颜色变为黑色，较亮的颜色变为白色。

这意味着你可以在四款设备上使用相同的 LVGL UI 代码，而显示驱动会为所选硬件转换最终像素。

### 更改布局

该示例使用 `platformio.ini` 中的 `EPAPER_LVGL_HOR_RES` 和 `EPAPER_LVGL_VER_RES` 来确定屏幕尺寸。在 `src/ui_status_panel.cpp` 中，这些数值在此处被使用：

```cpp
const int32_t screen_width = EPAPER_LVGL_HOR_RES;
const int32_t screen_height = EPAPER_LVGL_VER_RES;
const bool is_landscape = screen_width >= screen_height;
```

然后布局会为更宽的屏幕选择横向布局，为更高的屏幕选择纵向布局。这就是为什么同一个示例可以在 800 x 480 设备和更大的 ePaper 面板上运行。

作为一个简单的首次修改，可以调整间距数值：

```cpp
const int32_t margin = max_i32(32, screen_width / 20);
const int32_t gap = max_i32(20, screen_width / 40);
```

增大 `margin` 会在屏幕边缘留出更多空白。增大 `gap` 会在卡片之间留出更多空间。

### 添加你自己的数据

本示例中的电池数值是示例 UI 数据，因此屏幕会将其显示为演示数值。要连接真实的应用数据，请保留 UI 函数，并将你自己的数值传入其中：

```cpp
int battery_percent = 88;
ui_status_panel_set_status("Running", "Wi-Fi Connected", battery_percent);
```

对于 ePaper 项目，一个实用的工作流程是：

**步骤 1.** 在你的应用中读取或计算最新数据。

**步骤 2.** 将新数值传入 `ui_status_panel_set_status()`。

**步骤 3.** 当内容需要更改时刷新 ePaper 显示屏。

该示例在 `setup()` 中渲染一次，因为屏幕内容是静态的。对于传感器仪表盘、日历或状态监视器等应用，你可以在显示数据发生变化时更新数值并刷新面板。

## 资源

- **[Docs]** [LVGL 文档](https://docs.lvgl.io/)
- **[GitHub]** [LVGL](https://github.com/lvgl/lvgl)
- **[GitHub]** [Seeed_GFX 库](https://github.com/Seeed-Studio/Seeed_GFX)
- **[GitHub]** [LVGL ePaper 状态面板示例](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel)
- **[Tool]** [reTerminal E-Series 固件中心](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)
- **[Wiki]** [使用 PlatformIO 工作](/cn/epaper_work_with_platformio)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

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
