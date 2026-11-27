---
description: 搭配 MicroBlocks 的 XIAO ESP32-C3
title: 搭配 MicroBlocks 的 XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c3_microblocks/
---

# 搭配 MicroBlocks 的 XIAO ESP32-C3

## MicroBlocks

MicroBlocks 是一种积木式语言，使初学者（9 岁到成人）也能轻松为微控制器编程。尽管看起来很简单，MicroBlocks 却是一种功能强大的编程语言，其性能优于 MicroPython；能够控制 GPIO 引脚，并通过 I2C、SPI 和串口与外设通信；还提供近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型开发和测试，因为它具有快速、交互式的开发流程。

### XIAO ESP32C3 引脚图和硬件特性

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

该开发板通过外置天线（已提供）同时支持 Wi-Fi 和 BLE 连接。

该开发板有 11 个 GPIO 引脚（引脚 0..10）。引脚 0..3 可用作模拟输入。

该开发板**没有**板载用户 LED；
要使用 MicroBlocks 的 "set user LED" 积木，请在引脚 10 和地之间连接一个外接 LED。

### 安装 MicroBlocks 固件

此开发板的 MicroBlocks 固件可以直接从 MicroBlocks 编辑器中安装。

使用数据 USB 线（**不是**仅供电线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。

在齿轮菜单中启用“高级模式”：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

在展开的齿轮菜单中选择 **install ESP firmware from microblocks.fun**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

选择 **xiao_esp32_c3**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

当出现提示时，使用“Connect”按钮（插头图标）打开与开发板的 USB 连接。固件安装过程开始后，会出现进度指示器：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

固件安装大约需要 30 到 60 秒。在完成之前不要切换浏览器标签页。

固件安装完成后，你就可以将开发板连接到 MicroBlocks 并开始编程了！

## 启动加载器模式

在为 ESP32 开发板安装 MicroBlocks 固件时，通常不需要手动进入启动加载器模式。

如有需要，要进入启动加载器模式，请按住 B（boot）按钮，
同时按下并松开 R（reset）按钮。
你也可以在按住 B 按钮的同时，将开发板连接到电脑。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

在菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：**你也可以在连接菜单中选择 **connect (BLE)** 以无线方式连接。

在对话框中选择你的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

连接成功后，会显示一个绿色圆点和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编码环境，因此你可以边写代码边测试。
点击积木和脚本即可运行它们。
将积木拖入脚本区域并组合起来以创建脚本。

你的代码会存储在持久化的闪存中，即使开发板
未连接到 MicroBlocks 编辑器也能运行。
位于 **when started** 积木下的脚本会在开发板上电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了众多内置积木外，MicroBlocks 还有近 200 个库，
用于支持更多功能和外设。
点击 **Add Library** 按钮以添加库。

## 示例

虽然该开发板没有板载用户 LED，
但如果你在引脚 10 和地之间连接一个 LED，下面这个脚本就会让它闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
中包含许多其他示例。

## 特别鸣谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
