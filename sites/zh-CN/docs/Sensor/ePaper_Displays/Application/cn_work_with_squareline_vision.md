---
description: 本文提供了在 SquareLine 上为 reTerminal E 系列纸屏创建 UI 界面的操作说明。
title: 使用 SquareLine Vision
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /reterminal_e10xx_with_squareline_vision
sidebar_position: 7
last_update:
  date: 10/29/2025
  author: Zovey
createdAt: '2025-11-03'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_squareline_vision/
---

# reTerminal E 系列电子纸显示屏搭配 SquareLine Vision 使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## 介绍

当你想要打造自己的智能终端时，一定希望这台设备拥有一个美观优雅的用户界面。 [LVGL](https://lvgl.io/) 可以实现这一点。它是目前最流行的免费开源嵌入式图形库，可为任意 MCU、MPU 和显示类型创建精美的 UI。借助该库，你可以创建大量漂亮的嵌入式用户界面。尤其是在使用我们的 reTerminal E 系列电子纸产品时，一个吸引人的界面是不可或缺的组成部分。然而，编写 LVGL 库代码本身也是一项非常复杂的工作。因此，本教程主要介绍一款编辑器，它允许你通过拖拽控件的方式来绘制 UI。所见即所得（WYSIWYG，What You See Is What You Get）的创作方式可以更好地把握最终呈现效果，并且在绘制完 UI 后，你可以将其导出为 LVGL 的 UI 文件，从而大大简化开发者的开发流程。这款工具的名称是 SquareLine Vision，是一款面向 LVGL 的可视化前端工具。

[SquareLine Vision](https://vision.squareline.io/) 是一个基于浏览器（Web）或 Web 兼容环境的 UI 开发环境，专门用于快速为嵌入式系统（例如带屏幕的设备）设计用户界面（UI）。
它同时也是一款**设计 + 导出代码**工具：你在平台上完成界面设计，然后即可将设计导出为在嵌入式设备上运行的代码或资源。 

## SquareLine Vision 的特性

- **可视化 UI 设计** – 通过拖拽式编辑器以可视化方式设计美观、交互式界面，无需手动编写 LVGL 代码。
- **快速嵌入式原型开发** – 可在桌面或目标硬件上即时预览和验证 UI，大幅缩短从设计到设备的迭代时间。
- **基于 LVGL 的导出** – 将设计无缝导出为干净的、基于 LVGL 的源代码，可直接在嵌入式设备、微控制器或仿真环境中编译运行。

借助 SquareLine Vision，你可以在几分钟内从概念走到可交互的嵌入式 UI 原型——将设计灵活性、实时预览以及可量产的 LVGL 输出结合起来，加速整个产品开发周期。

### 所需材料

要完成本教程，请准备以下 reTerminal E 系列设备之一，E1001 为黑白屏，E1002 为全彩屏：

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


## [SquareLine Vision](https://vision.squareline.io/) 入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### 组件介绍

整个 SquareLine Vision 平台可以分为两部分：**Launcher** 和 **应用界面（Application Interface）**。
在 **Launcher** 界面上，我们可以看到以下三个主要功能：
- 项目管理
- 处理导入
- 控制账户设置

当你开始绘制 UI 时，你将会接触到五个工具：
- 层级系统
- 屏幕管理
- 样式选项
- 各类组件（widget）类型
- 如何利用事件、触发器和动作

当你对平台的整体组织结构和工具有清晰的认识后，将会对你制作个人项目有很大帮助。接下来，我将基于我们的 reTerminal E1002 创建一个项目。

## 创建项目

### 新建一个 LVGL 项目

在 SquareLine Vision Launcher 界面的顶部，点击 `Create new` 按钮。然后选择 `Seeed Studio` 来查看我们的产品。选择 `reTerminal E1002` 来创建一个项目。
该项目的固定设置为：
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
我们已经支持 SenseCAP Watcher 以及 reTerminal E1001 和 E1002 设备。未来我们还会支持 Seeed Studio 的更多产品。
:::

### 导入已有的 .slvp 项目
如果你已经有一个 .slvp 文件，可以直接将其导入为项目。我们提供了两个与天气相关的仪表盘，你可以在下方直接下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>黑白天气界面</th>
      <th>全彩天气界面</th>
      <th>全彩天气界面 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.jpg" style={{width:250, height:'auto'}}/></div></td>
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
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Paper_Weather.slvp" target="_blank">
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

## 项目参数设置与 UI 界面设计

进入工程界面后，你可以看到四个主要区域：

- 区域 1 为 **Hierarchy**，主要用于管理 UI 元素的结构。 
- 区域 2 为 **Simulator**，用于显示 UI，并查看各个 UI 的呈现效果。 
- 区域 3 为 **Inspector**，为当前选中的元素提供详细的控制选项。 
- 区域 4 为 **Toolbar**，位于应用界面的顶部，可方便地访问许多工具和功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### UI 界面设计

UI（用户界面）设计在嵌入式产品开发中至关重要，它直接决定了用户体验。一个美观、直观且响应迅速的界面，不仅能提升产品的可用性，还能增强产品的整体吸引力。

在 SquareLine Vision 中，你可以通过拖拽组件的方式快速搭建界面。利用 Styles、Fonts、Bitmaps 和 Themes 等工具精细控制视觉效果，打造专业且具有独特风格的用户体验。

:::tip
本教程只涵盖本项目中出现的控件。然而，SquareLine Vision 还提供了许多其他功能，例如动画、事件以及不同的字体。如果你想进一步探索这款工具，请参考[官方教程](https://docs.vision.squareline.io/docs/overview)。
:::

#### Hierarchy 介绍

在这里，你可以将组件相互嵌套，创建父子关系，其中容器组件成为父组件，而其中的元素则成为子组件。可以看出，这张图片是由各种容器、图像和文本组成的。这三种控件都可以在工具栏中找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### Inspector 简介

此面板允许你查看和修改屏幕、容器、小部件以及其他 UI 元素的属性。此外，不同类型的小部件可能会有各自的特殊设置。当我选择“background img”时，我可以在 Inspector 中看到与该 img 相关的所有组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### Toolbar 简介

Toolbar 包含项目配置、保存项目、访问帮助、报告问题、修改项目视图、下载项目代码以及在 SquareLine Vision 中直接以播放模式启动项目等选项。

- **Menu**：在这里，你可以使用保存工作、导出项目、调整项目设置以及返回启动器界面的功能。
- **Project name**：显示当前项目的名称。
- **Plan**：显示用户当前的订阅计划。
- **Editor / Animation mode**：在两种不同的工作环境之间切换。
- **Widgets**：通过三个下拉菜单访问 UI 元素，这些菜单按逻辑对组件进行分组，便于为你的项目找到合适的小部件。
- **Undo / Redo**：允许在设计更改中向后和向前回退，支持无风险的尝试。
- **Play mode**：启动预览并测试 UI 模拟。
- **Send bug report**：提供直接访问错误报告系统的入口。
- **User(s)**：显示当前在你的项目中活动的所有用户，以支持协同设计。
- **View options**：你可以切换小地图显示，并在专用输入框中输入精确的缩放百分比值。
- **Version**：显示你的项目当前运行的 SquareLine Vision 版本，以确保你了解自己的软件环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### 代码生成与项目结构

SquareLine Vision 导出器会生成基于 LVGL 的 GUI 代码，并以结构化的方式进行组织，以实现关注点分离并提高代码的可维护性。导出的代码遵循模块化架构，在 GUI 初始化、屏幕管理、事件、样式和动画之间有清晰的分离。

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

GUI 子系统的主接口。提供以下高级功能：

- `GUI_load()`: Complete GUI initialization including HAL and LVGL
- `GUI_init()`: Basic GUI initialization
- `GUI_refresh()`: Updates GUI state (calls LVGL handler
- `GUI_initContent()`: Initializes screens and widgets
- `GUI_initTheme()`: Sets up the GUI theme
- `GUI_loadFirstScreen()`: Loads the initial screen

## 程序烧录

E1002 的主控模块是 ESP32-S3。如果你想使用 PlatformIO 为 reTerminal E 系列电子纸显示屏进行编程，你需要在 `.ini` 文件中设置支持 ESP32 的选项。

:::tip
如果这是你第一次使用 PlatformIO，我们强烈建议你参考 [Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html)。
:::

### 使用示例

### PlatformIO 设置

- **Step 1**：在官网下载并安装 [PlatformIO](https://platformio.org/platformio-ide)。如果你还没有安装 PlatformIO 软件，可以点击上方链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **Step 2**：在 VScode 的扩展中搜索 `platformio`。第一个出现的图标就是你需要的。只需点击 `Install` 即可开始下载。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **Step 3**：依次打开 PlatformIO 插件。然后点击 `Open` 按钮，通过点击 `Open Project` 选择本地的 PlatformIO 项目并将其打开。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### 参考示例

我们提供了三个现成的模板，每个模板都有不同的 UI 界面，可以显示实时天气仪表盘。它们还集成了 [OpenWeather](https://openweathermap.org/)（这是一个提供全球天气数据的服务平台），用于获取实时气候变化。你只需要从 OpenWeather 获取 API KEY，并连接 WIFI 即可正常使用它们。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Monochrome Weather </th>
      <th>Full Color Weather </th>
      <th>Full Color Weather 2</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/weather_gray.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **Step 1**：在 VScode 中打开该文件夹，并等待相关依赖全部下载完成。打开项目后，打开 `.ini` 文件并按下 `Ctrl+S`。此时，项目的依赖会自动开始下载。当你看到 `Project has been successfully updated` 时，表示下载过程已经完成。当出现 `successful` 这个单词时，就会立即表明安装已经成功完成。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **Step 2**：打开 **OpenWeather** 并获取你自己的 API KEY
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **Step 3**：在 `main.cpp` 中修改你的 `WIFI_SSID`、`WIFI_PASSWORD` 和 `OW_API_KEY`。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **Step 4**：使用 USB 数据线将 reTerminal 连接到电脑，并选择合适的串口进行烧录。然后点击 `upload` 按钮执行烧录过程。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  当终端出现如下内容时，表示烧录过程已经成功。随后，reTerminal 会自动更新屏幕图像。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## 结果展示

<div class="table-center">
  <table align="center">
    <tr>
      <th>单色天气</th>
      <th>全彩天气</th>
      <th>全彩天气 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/squareline_BW_template.jpeg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
