---
description: XIAO ESP32-C3 与 MicroBlocks
title: XIAO ESP32-C3 与 MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /cn/xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-C3 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9 岁到成人）能够轻松地为微控制器编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

### XIAO ESP32C3 引脚图和硬件特性

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

该开发板通过外部天线（已提供）提供 Wi-Fi 和 BLE 连接功能。

该开发板有 11 个 GPIO 引脚（引脚 0..10）。引脚 0..3 可以作为模拟输入。

该开发板**没有**内置用户 LED；
请在引脚 10 和地之间连接外部 LED 以使用 MicroBlocks 的"设置用户 LED"积木。

### 安装 MicroBlocks 固件

该开发板的 MicroBlocks 固件可以直接从 MicroBlocks 编辑器安装。

使用数据 USB 线（**不是**仅供电线）将开发板连接到计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。

在齿轮菜单中启用"高级模式"：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

从展开的齿轮菜单中选择**从 microblocks.fun 安装 ESP 固件**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

选择 **xiao_esp32_c3**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

出现提示时，使用"连接"按钮（插头图标）打开与开发板的 USB 连接。当固件安装过程开始时，会出现进度指示器：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

固件安装需要 30 到 60 秒。在完成之前不要切换浏览器标签页。

固件安装完成后，您可以将开发板连接到 MicroBlocks 并开始编程！

## 引导加载程序模式

在 ESP32 开发板上安装 MicroBlocks 固件时，通常不需要手动进入引导加载程序模式。

如果需要进入引导加载程序模式，请按住 B（引导）按钮
同时按下并释放 R（复位）按钮。
您也可以在按住 B 按钮的同时将开发板连接到计算机。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击**连接**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

从菜单中选择**连接 (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 您也可以通过在连接菜单中选择**连接 (BLE)** 来无线连接。

从对话框中选择您的开发板并点击**连接**按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

开发板连接后会出现绿色圆圈和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编程环境，因此您可以边编程边测试。
点击积木和脚本来运行它们。
将积木拖到脚本面板中并组装它们来创建脚本。

您的代码存储在持久闪存中，即使开发板
未连接到 MicroBlocks 编辑器也可以运行。
**当启动时**积木下的脚本在开发板通电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了许多内置积木外，MicroBlocks 还有近 200 个库
支持额外的功能和外设。
点击**添加库**按钮来添加库。

## 示例

虽然该开发板没有内置用户 LED，
但如果您在引脚 10 和地之间连接一个 LED，这个脚本会让它闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[积木参考](https://wiki.microblocks.fun/en/reference_manual)
包含许多其他示例。

## 特别感谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
