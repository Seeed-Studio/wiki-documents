---
description: 使用 EEZ Studio 为 Seeed ePaper 产品设计专业的基于 LVGL 的界面，然后通过 PlatformIO 部署——适用于 reTerminal E 系列和 XIAO ePaper Display Board (EE04)。
title: 使用 EEZ Studio 开发
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
  date: 06/26/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-06-26'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 EEZ Studio 开发

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

本指南将带你完成以下流程：使用可视化设计工具 [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) 设计专业用户界面，生成 LVGL 代码，并通过 PlatformIO 将其部署到 Seeed ePaper 产品上。对于每一块受支持的开发板，流程都是相同的——唯一的差异是显示分辨率和开发板环境，我们会通过选项卡来区分。

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
      <td align="center">通用驱动板——可搭配我们任意 24-pin 或 50-pin 的 Seeed ePaper 屏幕使用</td>
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

EEZ Studio 是一个现代的可视化编程和 UI 设计环境，最初为测试与测量仪器以及嵌入式设备而构建。它将拖拽式 GUI 设计、脚本编写和设备集成工具结合在一起，使开发者、工程师和创客能够快速创建专业界面，而无需从零开始。

简而言之，EEZ Studio 充当了硬件与软件之间的桥梁，让你可以更高效地设计、原型验证和部署用户体验。

### 为什么要使用 EEZ Studio？

- **可视化界面设计** —— 使用所见即所得编辑器创建复杂 UI。
- **快速原型开发** —— 快速测试和验证设计想法。
- **跨平台** —— 构建可在多个操作系统和嵌入式目标上运行的应用。
- **硬件集成** —— 可直接连接实验室仪器、物联网设备和自定义开发板。
- **开源** —— 社区驱动的工具集，可选付费高级支持。

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
            <td>闭源商业产品，需要授权许可</td>
        </tr>
        <tr>
            <th>工作流程</th>
            <td>在同一环境中完成原型设计、仿真并控制真实设备</td>
            <td>主要用于生成 UI 代码，再编译进嵌入式工程</td>
        </tr>
    </tbody>
</table>

## 步骤 1：安装 EEZ Studio

从[官方网站](https://www.envox.eu/studio/studio-introduction/)下载适用于你操作系统的 EEZ Studio。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/30.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 2：创建 LVGL 项目

在 EEZ Studio 界面顶部点击 **CREATE**。在左侧选择 **LVGL** 模板：

- **Name** —— 为你的项目命名（本文中我们使用 `EEZ_UI`）。
- **LVGL Version** —— 从下拉框中选择 `9.5.0`。
- **Location** —— 选择保存项目文件的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/31.png" style={{width:1000, height:'auto'}}/></div>

### 项目设置

点击工具栏上的 ⚙️ 图标打开 Project Settings（项目设置）。

在 **General → Display** 下，为**你的硬件**设置分辨率：

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(E1001 上的 7.5" 单色屏和 E1002 上的 7.3" Spectra 6 屏共享相同的 800×480 分辨率。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/32.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1003" label="reTerminal E1003">

- **Display width**: 1872
- **Display height**: 1404

(E1003 上的 10.3" 单色面板使用 1872×1404 分辨率。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/36.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1004" label="reTerminal E1004">

- **Display width**: 1200
- **Display height**: 1600

(E1004 上的 13.3" Spectra 6 面板使用 1200×1600 分辨率。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/37.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(请将数值设置为与你插在 EE04 上的 Seeed ePaper 屏幕相匹配。下面的示例使用的是 5.83" 648×480 单色屏。)

</TabItem>
</Tabs>

## 步骤 3：设计 UI

UI 设计直接决定用户体验。EEZ Studio 允许你通过拖拽组件快速搭建界面，并使用 **Styles**、**Fonts**、**Bitmaps**、**Themes** 和 **Groups** 来控制视觉效果。

推荐的在线资源：

- [Coolors](https://coolors.co/) —— 配色方案生成器
- [PeisekA](https://peiseka.com/) —— 色卡
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) —— 图标库
- [Google Fonts](https://fonts.google.com/) —— 免费字体

右侧边栏：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/33.png" style={{width:1000, height:'auto'}}/></div>

- **Styles** —— 用于统一和复用界面元素的视觉属性。
- **Bitmaps** —— 背景、图标、Logo。
- **Fonts** —— 文本渲染和多语言支持。
- **Themes** —— 亮/暗等顶层主题样式。
- **Groups** —— 布局辅助工具。

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

**步骤 3.** 通过右侧的 **Bitmaps** 面板添加位图并命名，然后将 **Image** 小部件拖到画布上并绑定你的位图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 从 Visualiser 分组中添加一条 **Line**，并配置其 **Points**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 添加一个 **Label**，选择颜色，然后通过右侧的 **Fonts** 面板添加字体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## 步骤 4：生成代码

在设计完成之后：

1. **保存** —— 按 Control + S 保存。如果你使用的是 macOS，请按 Command + S 保存。
2. **预览** —— 点击 **Run** 启动模拟器并预览 UI。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/35.png" style={{width:600, height:'auto'}}/></div>

3. **编译 / 构建** — 点击 ✓ 图标检查错误，然后点击扳手图标生成 UI 代码、图像数据和字体数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/34.png" style={{width:600, height:'auto'}}/></div>

绿色的 **Build successful** 消息表示代码生成成功。输出会保存到项目的 **`src/ui`** 文件夹中（如果你愿意，可以将其重命名为 `src/EEZ_UI`）。

## 步骤 5：设置 PlatformIO

使用 PlatformIO 部署 EEZ Studio 的输出。PlatformIO 提供 Seeed ePaper 产品所需的项目结构、开发板环境、库依赖和构建设置。

如果这是你第一次在 Seeed ePaper 产品上使用 PlatformIO，请按照下面链接的设置指南配置你的开发环境。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/epaper_work_with_platformio/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>PlatformIO 指南</font></span></strong>
    </a>
</div><br />

:::tip
PlatformIO 设置指南涵盖了开发板定义、库依赖和构建配置——完成后，请返回此处继续。
:::

## 步骤 6：下载 EEZ Studio PlatformIO 模板

打开 reTerminal E 系列固件中心（Firmware Hub）：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>打开 Firmware Hub</font></span></strong>
    </a>
</div><br />

在 Firmware Hub 页面上：

1. 在 **Official Platforms** 下找到 **EEZ Studio** 卡片，并点击展开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/38.png" style={{width:800, height:'auto'}}/></div>

2. 选择你的设备——**E1001**、**E1002**、**E1003** 或 **E1004**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/39.png" style={{width:800, height:'auto'}}/></div>

3. 页面会显示该模板的分步使用指南。点击 **Download project template** 按钮获取 PlatformIO 项目 ZIP 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/40.png" style={{width:800, height:'auto'}}/></div>

## 步骤 7：部署 EEZ Studio 项目

下载模板后，用 EEZ Studio 生成的文件替换模板中的 UI。

1. 解压下载的模板。
2. 在安装了 PlatformIO 扩展的 VS Code 中打开解压后的项目文件夹。
3. 进入模板项目中的 `src/ui` 目录。
4. 将 `src/ui` 中的所有文件替换为在步骤 4 中由 EEZ Studio 导出的文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/41.png" style={{width:800, height:'auto'}}/></div>

5. 在 PlatformIO 工具栏中，为你的开发板选择正确的环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/42.png" style={{width:1000, height:'auto'}}/></div>

6. 点击 **Build** 进行编译，然后点击 **Upload** 将固件烧录到你的设备。

:::tip
模板已经包含了你的设备所需的全部驱动和 LVGL 配置。你只需要替换 UI 文件即可。
:::

### 最终界面

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

## 参考与资源

- [EEZ Studio PlatformIO 模板与源代码](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/EEZStudio)

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
