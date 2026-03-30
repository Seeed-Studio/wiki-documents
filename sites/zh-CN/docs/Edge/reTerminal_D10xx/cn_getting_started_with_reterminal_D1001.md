---
description: 本文将指导你快速上手 reTerminal D1001。
title: reTerminal D1001 入门指南
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 03/06/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal D1001 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 产品介绍

### 概述
reTerminal D1001 是一款由乐鑫最新高性能 **ESP32-P4** 芯片驱动的智能大屏交互终端。面向需要高性能图形显示、视频处理和语音交互的 AIoT 应用场景，它依托 ESP32-P4 强大的 400MHz 双核 RISC-V 处理器和丰富的多媒体外设接口，能够轻松应对复杂的边缘计算和多媒体任务。

### 核心特性
*   **强大处理能力，支持丰富界面**：基于 ESP32-P4，这是一颗 32 位 RISC-V 双核处理器（HP Core 400MHz），配备 32 MB PSRAM 和内置 JPEG 编解码引擎，可为图形界面、流畅的实时交互以及复杂的边缘 AI 任务提供所需性能。
*   **8 英寸触控显示屏，丰富 HMI 支持**：8 英寸 800 × 1280 电容式触控显示屏，通过 MIPI-DSI 驱动，支持竖屏和横屏模式（通过 IMU），为构建精美仪表盘、智能控制面板及其他以 UI 为中心的嵌入式设备提供充足空间。
*   **集成无线连接**：板载 ESP32-C6 提供无线通信，支持 Wi-Fi 6（2.4 GHz）和 Bluetooth 5（LE）。主处理器通过 SDIO 接口与连接子系统通信，为互联设备和物联网应用提供可靠的无线网络能力。
*   **摄像头接口，支持视觉开发**：配备 2MP MIPI-CSI 摄像头（SC2356），支持最高 1600 × 1200@30 fps，可开箱即用地实现图像采集、实时预览和嵌入式视觉开发。
*   **语音与音频能力**：双麦克风和内置扬声器支持语音输入、声音采集和多媒体播放。借助 ES7210 音频 ADC 提供的回声消除功能，为 AI 助手和语音应用带来清晰的语音采集效果。
*   **丰富扩展能力**：提供 GPIO、I2C、UART 等扩展接口，以满足多种传感器和执行器的连接需求。

<!--
### Target Users & Applications
*   **Target Users**:
    *   **Embedded Developers**: Professionals seeking high-performance, low-cost HMI solutions to replace Linux/Android.
    *   **Smart Home Integrators**: Teams needing customized central control panels and smart switches.
    *   **Geeks & Makers**: Enthusiasts exploring the limits of ESP32 performance and developing desktop gadgets or smart terminals.
*   **Applications**: Smart Home Control Panels, Industrial HMI Panels, AI Voice Assistants, Video Surveillance Terminals, Educational Development Kits.
-->


### 硬件规格

| 功能模块 | 详细参数 | 备注 |
| :--- | :--- | :--- |
| **主处理器** | **ESP32-P4NRW32** | 400MHz 双核 RISC-V，32MB PSRAM |
| **存储** | 32MB Nor Flash | 支持 MicroSD 卡扩展 |
| **无线连接** | Wi-Fi 6 & Bluetooth 5 (LE) | 由 ESP32-C6 提供（SDIO 接口） |
| **显示** | 8 英寸 MIPI-DSI 触摸屏 | 分辨率：800x1280 <br /> 亮度：250 cd/㎡ <br /> 驱动 IC：9365DA-H3 <br /> 触控 IC：GSL3670（电容式） |
| **摄像头** | 2MP (SC2356) | 分辨率：1608x1208 <br /> 接口：MIPI-CSI |
| **音频** | **Codec**: ES8311 <br /> **ADC**: ES7210 <br /> **PA**: NS4150B (2W@8Ω) <br /> **输入**: 双麦克风阵列 | 高保真音频输入/输出 |
| **网络扩展** | mPCIe 插槽 | 支持 USB 2.0 信号，可选配 4G 模块 |
| **传感器** | 6 轴 IMU (LSM6DS3TR) | 加速度计 + 陀螺仪，支持屏幕自动旋转 |
| **接口与按键** | USB Type-C（供电/调试）<br /> 双排 2.54mm 扩展排针 <br /> BOOT/Reset（针孔）<br /> 电源按键 | 支持短按休眠 / 长按开关机 |
| **电源管理** | 2500mAh 锂电池 <br /> RTC 纽扣电池座 | USB Type-C 5V 输入 <br /> 充电指示灯与状态 RGB LED |


## 使用 ESP-IDF 入门

本节将引导你完成开发环境的搭建，并运行出厂演示固件，体验 reTerminal D1001 的强大功能。

### 配置 ESP-IDF 开发环境

**步骤 1. 安装 ESP-IDF**

使用乐鑫最新的跨平台安装工具 **ESP-IDF Installation Manager**。

1.  **下载 ESP-IDF**：访问 [ESP-IDF Installation Manager 下载页面](https://dl.espressif.cn/dl/eim/)，选择 **Offline Installer** 选项卡，选择 **Windows** 版本（推荐 v5.4.2+），点击 **Download** 获取 `.zst` 和 `.exe` 文件。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **从离线包安装**：运行安装程序（`eim-gui-windows-x64.exe`），选择 **Install from archive**（会自动检测离线安装包），选择安装路径（推荐使用默认路径；避免使用中文或空格），然后点击 **Start Installation**。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **完成安装**：安装完成后，点击 **Install Driver** 以完成配置。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**步骤 2. 安装 Visual Studio Code 与 ESP-IDF 扩展**

1.  下载并安装 [Visual Studio Code](https://code.visualstudio.com/)。
    *   安装过程中，建议勾选 **"Add 'Open with Code' action to Windows Explorer file context menu"**，以便快速从资源管理器中打开项目文件夹。
2.  打开 VS Code，点击侧边栏中的 **Extensions** 图标（或使用 `Ctrl + Shift + X`）打开扩展视图。
3.  在搜索框中输入 `ESP-IDF`，找到 **ESP-IDF** 扩展并点击 **Install** 进行安装。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### 获取固件仓库
从 GitHub 下载官方 reTerminal D1001 仓库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

### 编译并烧录演示固件
1.  **打开项目**：使用 VS Code 打开克隆下来的 `reTerminal-D1001` 文件夹。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    请务必打开项目中的 `examples/factory_firmware` 目录。直接打开根目录可能会导致编译失败。
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **设置目标芯片**：
    *   在 VS Code 底部状态栏中，将目标芯片选择为 `esp32p4`。
    *   或在终端中运行：`idf.py set-target esp32p4`。
3.  **选择烧录模式**：
    *   在烧录前选择正确的烧录模式。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **编译、烧录并监视串口**：
    *   通过 USB Type-C 将设备连接到电脑。
    *   点击 VS Code 状态栏中的 **"Flash"（火焰图标）** 按钮，一键完成编译、烧录并启动监视器。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### 体验演示功能
固件烧录成功后，设备会自动重启。你可以按如下方式与设备交互：

*   **电源与屏幕控制**：长按绿色按键超过 3 秒开机。短按按键可关闭屏幕，再次短按可点亮屏幕。
*   **流畅的界面交互**：体验流畅的滑动切换和应用启动动画。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **摄像头预览**：打开 Camera App 查看实时画面。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **传感器演示**：旋转设备以观察屏幕自动旋转效果，或查看其他传感器数据。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## 资源

*   **硬件文档**：
    *   [reTerminal D1001 主板 V1.0 原理图和 PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [reTerminal D1001 原理图（PDF）](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **数据手册**：
    *   [ESP32-P4NRW32 数据手册](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [ESP32-C6 数据手册](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [显示屏数据手册（GJX080C13-31BY）](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [IMU 传感器数据手册（LSM6DS3TR）](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [摄像头模组数据手册（SC2356）](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

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
