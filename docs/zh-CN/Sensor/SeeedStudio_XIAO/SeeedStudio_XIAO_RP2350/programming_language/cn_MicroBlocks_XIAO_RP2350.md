---
description: 在 MicroBlocks 上使用 XIAO RP2350。
title: XIAO RP2350 与 MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /cn/xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

## XIAO RP2350 与 MicroBlocks

### MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9 岁到成人）能够轻松地为微控制器编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

### XIAO RP2350 引脚图和硬件特性

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

引脚 0..18 是 GPIO 引脚。（**注意：GPIO 11-18 是板子背面的焊盘。**）
引脚 0..2 可以作为模拟输入。该板在引脚 19 上有一个黄色用户 LED（反向）
和在引脚 20 上有一个 RGB LED（NeoPixel）。

### 安装 MicroBlocks 固件

要进入引导加载程序模式，按住小的 B（引导）按钮的同时点击 R（复位）按钮。将出现一个名为 **RP2350** 的虚拟 USB 驱动器。

从 [vm 文件夹](https://microblocks.fun/downloads/latest/vm) 下载 [固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2)，
然后将文件拖到虚拟 USB 驱动器上。

固件将安装，几秒钟后，虚拟 USB 驱动器将消失。
您可以忽略任何关于磁盘未正确弹出的警告。

### 将板子连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将板子连接到您的计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **连接**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

从菜单中选择 **连接（USB）**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

从对话框中选择您的板子并点击 **连接** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

当板子连接时，将出现一个绿色圆圈和板子名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### 在 MicroBlocks 中编程

MicroBlocks 是一个 **实时** 编程环境，因此您可以边编程边测试。
点击积木块和脚本来运行它们。
将积木块拖到脚本面板中并组装它们来创建脚本。

您的代码存储在持久闪存中，即使板子未连接到 MicroBlocks 编辑器也可以运行。
**当启动时** 积木块下的脚本在板子通电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了许多内置积木块外，MicroBlocks 还有近 200 个库
支持额外的功能和外设。
点击 **添加库** 按钮来添加库。

### 示例

这个脚本将闪烁黄色用户 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

这个脚本将使 RGB NeoPixel 改变颜色：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

[积木块参考](https://wiki.microblocks.fun/en/reference_manual)
包含许多额外的示例。

## 特别感谢

特别感谢 MicroBlocks 的 John 撰写本文。

### MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木块参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)

- [Learning Guides](https://learn.microblocks.fun)
