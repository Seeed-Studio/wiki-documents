---
description: 在 MicroBlocks 上使用 XIAO RP2350。
title: XIAO RP2350 与 MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/cn/xiao_rp2350_microblocks/
---

## XIAO RP2350 与 MicroBlocks

### MicroBlocks

MicroBlocks 是一种积木式语言，使初学者（9 岁到成人）可以轻松为微控制器编程。尽管看起来很简单，MicroBlocks 却是一种功能强大的编程语言，其性能优于 MicroPython；它能够控制 GPIO 引脚，并通过 I2C、SPI 和串口与外设通信；还提供了近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型开发和测试，因为它具有快速、交互式的开发周期。

### XIAO RP2350 引脚图和硬件特性

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2350" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

引脚 0..18 为 GPIO 引脚。（**注意：GPIO 11-18 是在板子背面的焊盘。**）
引脚 0..2 可用作模拟输入。该板在引脚 19 上有一个黄色用户 LED（反向）
以及一个在引脚 20 上的 RGB LED（NeoPixel）。

### 安装 MicroBlocks 固件

要进入 bootloader 模式，按住小的 B（boot）按钮，同时点击 R（reset）按钮。一个名为 **RP2350** 的虚拟 USB 驱动器会出现。

下载[固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2)，
从 [vm 文件夹](https://microblocks.fun/downloads/latest/vm)
然后将该文件拖到虚拟 USB 驱动器上。

固件会开始安装，几秒钟后，虚拟 USB 驱动器会消失。
你可以忽略任何关于磁盘未正确弹出的警告。

### 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供供电的线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

在菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

在对话框中选择你的开发板，然后点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

当开发板连接成功时，会出现一个绿色圆点和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编码环境，因此你可以一边编写一边测试。
点击积木和脚本即可运行它们。
将积木拖入脚本区域并组合起来以创建脚本。

你的代码会存储在持久化的闪存中，即使开发板
未连接到 MicroBlocks 编辑器时也能运行。
位于 **when started** 积木下的脚本会在开发板上电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了众多内置积木外，MicroBlocks 还有近 200 个库，
用于支持更多功能和外设。
点击 **Add Library** 按钮即可添加库。

### 示例

下面这个脚本会让黄色用户 LED 闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

下面这个脚本会让 RGB NeoPixel 变换颜色：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
中包含了更多示例。

## 特别鸣谢

特别感谢 MicroBlocks 的 John 撰写本文。

### MicroBlocks 资源

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
