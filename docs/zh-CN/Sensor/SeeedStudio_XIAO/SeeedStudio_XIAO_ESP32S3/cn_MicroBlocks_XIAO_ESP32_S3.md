---
description: 在 MicroBlocks 上使用 XIAO ESP32-S3。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /cn/xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-S3 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9 岁到成人）能够轻松地为微控制器编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

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

该开发板的 MicroBlocks 固件可以直接从 MicroBlocks 编辑器安装。

使用数据 USB 线（**不是**仅供电线）将开发板连接到计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。

在齿轮菜单中启用"advanced mode"：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

从展开的齿轮菜单中选择 **install ESP firmware from microblocks.fun**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

选择 **xiao esp32 s3**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

出现提示时，使用 "Connect" 按钮（插头图标）打开与开发板的 USB 连接。当固件安装过程开始时，会出现进度指示器：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

固件安装需要 30 到 60 秒。在完成之前不要切换浏览器标签页。

固件安装完成后，您可以将开发板连接到 MicroBlocks 并开始编程！

## 引导加载程序模式

在 ESP32 开发板上安装 MicroBlocks 固件时，通常不需要手动进入引导加载程序模式。

如果需要进入引导加载程序模式，请在按下并释放 R（复位）按钮的同时按住 B（引导）按钮。
您也可以在按住 B 按钮的同时将开发板连接到计算机。

**USB 连接器两侧的小 B 和 R 按钮很难按；
您可能需要使用指甲或小工具来按压它们。**

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

从菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 您也可以通过在连接菜单中选择 **connect (BLE)** 进行无线连接。

从对话框中选择您的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

开发板连接后会出现绿色圆圈和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编程环境，因此您可以边编程边测试。
点击积木块和脚本来运行它们。
将积木块拖到脚本面板中并组装它们来创建脚本。

您的代码存储在持久闪存中，即使开发板未连接到 MicroBlocks 编辑器也可以运行。
**when started** 积木块下的脚本在开发板通电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了许多内置积木块外，MicroBlocks 还有近 200 个库
来支持额外的功能和外设。
点击 **Add Library** 按钮来添加库。

## 示例

这个脚本将闪烁黄色用户 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[积木块参考](https://wiki.microblocks.fun/en/reference_manual)包含许多其他示例。

## 项目演示

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
为了更全面的演示，创客 [Zeller](https://www.hackster.io/Zeller) 使用 XIAO ESP32S3、XIAO 扩展板以及 Grove 扬声器和 Grove 按钮配件创建了一个情绪播放器。使用 MicroBlocks，您可以创建自己喜欢的图案和音乐，而无需编写复杂的代码。详细的分步教程可以在 [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef) 上找到。

## 特别感谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木块参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
