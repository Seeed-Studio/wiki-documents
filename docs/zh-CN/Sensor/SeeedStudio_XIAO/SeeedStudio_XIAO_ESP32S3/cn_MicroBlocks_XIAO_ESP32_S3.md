---
description: 在 MicroBlocks 上使用 XIAO ESP32-S3。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /cn/xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# 在 MicroBlocks 上使用 XIAO ESP32-S3

## MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9岁到成人）能够轻松地对微控制器进行编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

## XIAO ESP32S3 引脚图和硬件特性

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

该开发板通过外部天线（已提供）提供 Wi-Fi 和 BLE 连接功能。

该开发板有 11 个 GPIO 引脚（引脚 0..10）。
Sense 版本在摄像头板上有两个额外的 GPIO 引脚（引脚 11..12）。
引脚 0..5 和 8..10 可以作为模拟输入。

引脚 13 是黄色用户 LED（反向逻辑）。

Sense 版本包含一个扩展板，配有摄像头（OV2640 摄像头，分辨率为 1600x1200，或 OV3660，分辨率为 2048x1536）和数字麦克风。

**注意：MicroBlocks 尚未实现摄像头支持，但将来可能会添加。**

## 安装 MicroBlocks 固件

可以直接从 MicroBlocks 编辑器安装此开发板的 MicroBlocks 固件。

使用数据 USB 线（**不是**仅供电线）将开发板连接到计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。

在齿轮菜单中启用"高级模式"：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

从扩展的齿轮菜单中选择 **install ESP firmware from microblocks.fun**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

选择 **xiao esp32 s3**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

出现提示时，使用"连接"按钮（插头图标）打开与开发板的 USB 连接。当固件安装过程开始时，将出现进度指示器：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

固件安装需要 30 到 60 秒。在完成之前不要切换浏览器标签页。

固件安装完成后，您可以将开发板连接到 MicroBlocks 并开始编程！

## 引导加载程序模式

在ESP32开发板上安装MicroBlocks固件时，通常不需要手动进入引导加载程序模式。

如果需要进入引导加载程序模式，请在按下并释放R（复位）按钮的同时按住B（引导）按钮。
您也可以在按住B按钮的同时将开发板连接到计算机。

**USB连接器两侧的小B和R按钮很难按；
您可能需要使用指甲或小工具来按压它们。**

## 将开发板连接到MicroBlocks

使用数据USB线（**不是**仅供电线）将开发板连接到计算机。

在Chrome或Edge浏览器中运行[MicroBlocks编辑器](https://microblocks.fun/run/microblocks.html)。
点击**连接**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

从菜单中选择**连接（USB）**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 您也可以通过在连接菜单中选择**连接（BLE）**来进行无线连接。

从对话框中选择您的开发板并点击**连接**按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

当开发板连接成功时，会出现绿色圆圈和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## 在MicroBlocks中编程

MicroBlocks是一个**实时**编程环境，因此您可以边编程边测试。
点击积木块和脚本来运行它们。
将积木块拖入脚本面板并组装它们来创建脚本。

您的代码存储在持久闪存中，即使开发板未连接到MicroBlocks编辑器也可以运行。
**当开始**积木块下的脚本会在开发板通电时运行。

MicroBlocks支持并发。最多可以同时运行十个脚本。

除了许多内置积木块外，MicroBlocks还有近200个库
来支持额外的功能和外设。
点击**添加库**按钮来添加库。

## 示例

这个脚本将使黄色用户LED闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[积木块参考](https://wiki.microblocks.fun/en/reference_manual)
包含许多额外的示例。

## 特别感谢

特别感谢MicroBlocks的John撰写本文。

## MicroBlocks资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木块参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
