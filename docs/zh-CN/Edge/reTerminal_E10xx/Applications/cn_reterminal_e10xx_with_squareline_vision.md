---
description: 本文提供了如何在 SquareLine 上为 reTerminal E 系列纸质显示屏创建 UI 界面的说明。
title: reTerminal E 系列 ePaper 显示屏与 SquareLine Vision 配合使用
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /cn/reterminal_e10xx_with_squareline_vision
sidebar_position: 3
last_update:
  date: 10/29/2025
  author: Zovey
---

# reTerminal E 系列 ePaper 显示屏与 SquareLine Vision 配合使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## 简介

当您想要创建自己的智能终端时，您肯定希望这个设备拥有一个吸引人且优雅的用户界面。[LVGL](https://lvgl.io/) 可以实现这一点。它是最受欢迎的免费开源嵌入式图形库，可为任何 MCU、MPU 和显示类型创建美观的 UI。使用这个库，您可以创建大量美观的嵌入式用户界面。特别是在使用我们的 reTerminal E 系列 ePaper 产品时，吸引人的界面是不可或缺的一部分。然而，编写 LVGL 库代码也是一项非常复杂的任务。因此，本教程主要旨在介绍一个编辑器，它允许您通过简单地拖放控件来绘制 UI。所见即所得（What You See Is What You Get）的创建方法可以更好地掌握最终的呈现效果，在绘制 UI 后，您可以将其导出为 LVGL 的 UI 文件，这大大简化了开发人员的开发过程。这个工具的名称是 SquareLine Vision，是 LVGL 的可视化前端工具。

[SquareLine Vision](https://vision.squareline.io/) 是一个基于浏览器（Web）或 Web 兼容环境的 UI 开发环境，专门用于快速设计嵌入式系统（如带屏幕的设备）的用户界面（UI）。
它也是一个**设计 + 导出代码**工具：您在平台上设计界面，然后可以将设计导出为代码或资源，用于在嵌入式设备上运行。

## SquareLine Vision 的特性

- **可视化 UI 设计** – 使用拖放编辑器可视化设计美观、交互式的界面，无需手动创建 LVGL 代码。
- **快速嵌入式原型制作** – 在桌面或目标硬件上即时预览和验证您的 UI，大大减少设计到设备的迭代时间。
- **LVGL 驱动的导出** – 无缝将您的设计导出为干净的基于 LVGL 的源代码，准备在嵌入式设备、微控制器或仿真环境中编译。

使用 SquareLine Vision，您可以在几分钟内从概念到交互式嵌入式 UI 原型——结合设计灵活性、实时预览和生产就绪的 LVGL 输出，加速您的整个产品开发周期。

### 所需材料

要完成本教程，请准备以下 reTerminal E 系列设备之一：

:::note
截至目前，SquareLine Vision 仅兼容 reTerminal E1002，尚不支持 reTerminal E1001。但是，官方团队已经在进行必要的适配工作。
:::

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


## [SquareLine Vision](https://vision.squareline.io/) 入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### 组件介绍

整个 SquareLine Vision 平台可以分为两个部分：**启动器**和**应用程序界面**。
在**启动器**界面上，我们可以看到以下三个主要功能：
- 项目
- 处理导入
- 控制账户设置

当您开始绘制 UI 时，您将了解五个工具：
- 层次结构系统
- 屏幕管理
- 样式选项
- 各种小部件类型
- 如何利用事件、触发器和动作

当您对平台的整体组织结构和工具有清晰的了解时，这将对您个人项目的制作非常有帮助。接下来，我将基于我们的 reTerminal E1002 创建一个项目。

## 创建项目

### 启动新的 LVGL 项目

在 SquareLine Vision 启动器界面的顶部，点击 `Create new` 按钮。然后，选择 `Seeed Studio` 查看我们的产品。选择 `reTerminal E1002` 来创建项目。
此项目的固定设置为：
- `Resolution`：800x480
- `Offset`：0(x), 0(y)
- `Rotation`：0°
- `Shape`：Rectangle
- `Color Depth`：32 bit
- `LVGL version`：9.1
- `Theme`：Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.png" style={{width:600, height:'auto'}}/></div>

:::tip
我们已经支持 SenseCAP Watcher 和 reTerminal E1002 设备。未来，我们还将支持更多来自 Seeed Studio 的产品。
:::

### 导入现有的 .slvp 项目
如果您已经有一个 .slvp 文件，您可以直接将其导入为项目。我们提供了两个与天气相关的仪表板。您可以直接在下面下载它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 epaper</th>
      <th>Seeed Weather 13 epaper</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 项目参数设置和 UI 界面设计

一旦您进入工程界面，您可以看到四个主要区域：

- 区域 1 是**层次结构**，主要用于管理 UI 元素的结构。
- 区域 2 是**模拟器**，显示 UI 并用于查看每个 UI 的呈现效果。
- 区域 3 是**检查器**，为当前选定的元素提供详细控制。
- 区域 4 是**工具栏**，位于应用程序界面的顶部，允许轻松访问许多工具和功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### UI 界面设计

UI（用户界面）设计在嵌入式产品开发中至关重要，因为它直接决定用户体验。一个美观、直观且响应迅速的界面不仅增强了产品的可用性，还提升了其整体吸引力。

在 SquareLine Vision 中，您可以通过拖放组件快速组装界面。利用样式、字体、位图和主题等工具精确控制视觉效果，打造专业且独特的用户体验。

:::tip
本教程仅涵盖此项目中出现的控件。但是，SquareLine Vision 提供许多其他功能，如动画、事件和不同字体。如果您想进一步探索此工具，请参考[官方教程](https://docs.vision.squareline.io/docs/overview)。
:::

#### 层次结构介绍

在这里您可以将小部件嵌套在彼此内部，创建父子关系，其中容器小部件成为父级，其内部的元素成为子小部件。可以看到这张图片由各种容器、图像和文本组成。这三个控件都可以在工具栏中找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### 检查器介绍

此面板允许您查看和修改屏幕、容器、小部件和其他 UI 元素的属性。此外，可能还有因小部件类型而异的特殊设置。当我选择"background img"时，我可以在检查器中看到与 img 相关的所有组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### 工具栏介绍

工具栏包括项目配置、保存项目、访问帮助、报告问题、修改项目视图、下载项目代码以及直接在 SquareLine Vision 中以播放模式启动项目的选项。

- **菜单**：从这里，您可以访问保存工作、导出项目、调整项目设置以及返回启动器屏幕的功能。
- **项目名称**：显示当前项目的名称。
- **计划**：显示用户当前的订阅计划。
- **编辑器/动画模式**：在两个不同的工作环境之间切换
- **组件**：通过三个下拉菜单访问 UI 元素，这些菜单按逻辑分组组件，便于为您的项目找到合适的组件。
- **撤销/重做**：允许在设计更改中向后和向前步进，支持无风险的实验。
- **播放模式**：启动预览和测试 UI 仿真。
- **发送错误报告**：提供对错误报告系统的直接访问。
- **用户**：显示当前在您项目中工作的所有活跃用户，支持协作设计工作。
- **视图选项**：您可以切换小地图显示并在专用输入字段中输入精确的缩放百分比值。
- **版本**：显示您的项目运行的当前 SquareLine Vision 版本，确保您了解软件环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### 代码生成和项目结构

SquareLine Vision 导出器生成基于 LVGL 的 GUI 代码，以结构化方式组织，以分离关注点并使代码可维护。导出的代码遵循模块化架构，在 GUI 初始化、屏幕管理、事件、样式和动画之间有明确的分离。

#### 项目结构

```shell
exported_project/
├── GUI/                    # Main GUI folder (or 'ui' for Studio format)
│   ├── Content/            # GUI content files
│   │   ├── screens/        # Individual screen source files
│   │   ├── images/         # Generated image source files
│   │   └── fonts/          # Font source files
│   ├── Behavior/           # Event and animation related files
│   │   ├── GUI_Events.c    # Event handler implementations
│   │   └── GUI_Animations.c # Animation and timeline definitions
│   ├── Framework/          # GUI framework files
│   │   └── LVGL/           # LVGL library files
│   ├── GUI.c               # Main GUI implementation
│   ├── GUI.h               # Main GUI header
│   ├── GUI_variables.c     # GUI object declarations
│   ├── GUI_GlobalStyles.c  # Global style definitions
│   ├── CMakeLists.txt      # CMake build configuration
│   └── filelist.txt        # List of all GUI source files
├── lv_conf.h               # LVGL configuration file
├── main.c                  # Application entry point
├── HAL.c                   # Hardware abstraction layer
├── CMakeLists.txt          # Main CMake configuration
├── build.sh                # Build script
└── run.sh                  # Run script
```

#### 关键组件

GUI 子系统的主要接口。提供以下高级功能：

- `GUI_load()`：完整的 GUI 初始化，包括 HAL 和 LVGL
- `GUI_init()`：基本 GUI 初始化
- `GUI_refresh()`：更新 GUI 状态（调用 LVGL 处理程序
- `GUI_initContent()`：初始化屏幕和组件
- `GUI_initTheme()`：设置 GUI 主题
- `GUI_loadFirstScreen()`：加载初始屏幕

## 程序烧录

E1002 的主控模块是 ESP32-S3。如果您想使用 PlatformIO 对 reTerminal E 系列电子纸显示屏进行编程，您需要在 `.ini` 文件中设置支持 ESP32 的选项。

:::tip
如果这是您第一次使用 PlatformIO，我们强烈建议您参考 [Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html)。
:::

### 使用示例

### PlatformIO 设置

- **步骤 1**：在官方网站安装 [PlatformIO](https://platformio.org/platformio-ide)。如果您尚未安装 PlatformIO 软件，可以点击上面的链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **步骤 2**：在 VScode 扩展中搜索 `platformio`。出现的第一个图标就是您需要的。只需点击 `Install` 开始下载。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3**：依次打开 PlatformIO 插件。然后，点击 `Open` 按钮，通过点击 `Open Project` 选择本地 PlatformIO 项目来打开它。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### 参考例程

我们提供了两个现有的例程，每个都有不同的 UI 界面，可以显示实时天气仪表板。它们还与 [OpenWeather](https://openweathermap.org/)（一个提供全球天气数据的服务平台）集成，以获取实时气候变化。您只需要从 OpenWeather 获取 API KEY 并连接到 WIFI 即可正常使用它们。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 电子纸</th>
      <th>Seeed Weather 13 电子纸</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里获取</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里获取</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **步骤 1**：在 VScode 中打开文件夹，等待相关依赖项完全下载。打开项目后，打开 `.ini` 文件并按 `Ctrl+S`。此时，项目的依赖项将自动开始下载。当您看到 `Project has been successfully updated` 时，表示下载过程已完成。当出现 `successful` 字样时，将立即表示安装已成功完成。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **步骤 2**：打开 **OpenWeather** 并获取您自己的 API KEY
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **步骤 3**：在 `main.cpp` 中修改您的 `WIFI_SSID`、`WIFI_PASSWORD` 和 `OW_API_KEY`。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **步骤 4**：使用 USB 数据线将 reTerminal 连接到计算机，并为烧录过程选择适当的串口。然后点击 `upload` 按钮执行烧录过程。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  当终端上出现以下内容时，表示烧录过程已成功。随后，reTerminal 将自动更新屏幕图像。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## 结果展示

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 电子纸</th>
      <th>Seeed Weather 13 电子纸</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

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
