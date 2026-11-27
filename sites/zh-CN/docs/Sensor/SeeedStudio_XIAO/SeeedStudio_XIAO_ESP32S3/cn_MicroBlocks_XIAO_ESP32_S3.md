---
description: 在 MicroBlocks 上使用 XIAO ESP32-S3。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-11-28'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_microblocks/
---

# XIAO ESP32-S3 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式语言，使初学者（9 岁到成人）可以轻松为微控制器编程。尽管看起来很简单，MicroBlocks 却是一种功能强大的编程语言，其性能优于 MicroPython；它能够控制 GPIO 引脚，并通过 I2C、SPI 和串口与外设通信；还提供了近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型开发和测试，因为它具有快速、交互式的开发周期。

## XIAO ESP32S3 引脚图和硬件特性

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3sense" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

该开发板通过外置天线（已提供）支持 Wi-Fi 和 BLE 连接。

该开发板具有 11 个 GPIO 引脚（引脚 0..10）。
Sense 版本在摄像头板上额外提供两个 GPIO 引脚（引脚 11..12）。
引脚 0..5 和 8..10 可用作模拟输入。

引脚 13 是黄色用户 LED（反向）。

Sense 版本包含一个带摄像头的扩展板（配备分辨率为 1600x1200 的 OV2640 摄像头或分辨率为 2048x1536 的 OV3660 摄像头）以及一个数字麦克风。

**注意：MicroBlocks 中尚未实现摄像头支持，但未来可能会添加。**

## 安装 MicroBlocks 固件

此开发板的 MicroBlocks 固件可以直接从 MicroBlocks 编辑器中安装。

使用数据 USB 线（**不是**仅供电线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。

在齿轮菜单中启用“高级模式”：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

在展开的齿轮菜单中选择 **install ESP firmware from microblocks.fun**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

选择 **xiao esp32 s3**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

当出现提示时，使用“Connect”按钮（插头图标）打开与开发板的 USB 连接。当固件安装过程开始时，会出现进度指示器：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

固件安装需要 30 到 60 秒。在完成之前不要切换浏览器标签页。

固件安装完成后，你就可以将开发板连接到 MicroBlocks 并开始编程了！

## 启动加载器模式

在为 ESP32 开发板安装 MicroBlocks 固件时，通常不需要手动进入启动加载器模式。

如有需要，要进入启动加载器模式，请按住 B（boot）按钮，同时按下并松开 R（reset）按钮。
你也可以在按住 B 按钮的同时将开发板连接到电脑。

**USB 接口两侧的小 B 和 R 按钮很小，不太好按；
你可能需要用指甲或小工具来按它们。**

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

当开发板连接成功时，会显示一个绿色圆点和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编码环境，因此你可以一边编写一边测试。
点击积木和脚本即可运行它们。
将积木拖入脚本区域并组合起来以创建脚本。

你的代码会存储在持久化的闪存中，即使开发板未连接到 MicroBlocks 编辑器也能运行。
位于 **when started** 积木下的脚本会在开发板上电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了众多内置积木外，MicroBlocks 还有近 200 个库，
用于支持更多功能和外设。
点击 **Add Library** 按钮即可添加库。

## 示例

此脚本会让黄色用户 LED 闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) 中包含许多其他示例。

## 项目演示

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
为了进行更全面的演示，创客 [Zeller](https://www.hackster.io/Zeller) 使用 XIAO ESP32S3、XIAO 扩展板以及 Grove 扬声器和 Grove 按钮配件制作了一个 Mood Player。借助 MicroBlocks，你无需编写复杂代码就能创建自己喜欢的灯光模式和音乐。带有详细说明的分步教程可在 [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef) 上找到。

## 特别鸣谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
