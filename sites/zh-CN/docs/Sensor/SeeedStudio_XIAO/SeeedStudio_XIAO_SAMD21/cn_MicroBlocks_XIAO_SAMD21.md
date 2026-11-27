---
description: 在 MicroBlocks 上使用 XIAO SAMD21。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-10-31'
url: https://wiki.seeedstudio.com/cn/xiao_samd21_microblocks/
---

# XIAO SAMD21 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式语言，使初学者（9 岁到成人）可以轻松为微控制器编程。尽管看起来很简单，MicroBlocks 却是一种功能强大的编程语言，其性能优于 MicroPython；它能够控制 GPIO 引脚，并通过 I2C、SPI 和串口与外设通信；还提供近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型开发和测试，因为它具有快速、交互式的开发周期。

### XIAO SAMD21 引脚图与硬件特性

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

与所有 XIAO 开发板一样，该开发板有 11 个 GPIO 引脚，引脚编号为 0..10。所有引脚都可用于模拟输入以及数字和模拟输出。
引脚 1..10 支持脉宽调制（PWM）输出，与其他 XIAO 开发板相同。

与其他开发板不同的是，该开发板上的引脚 0 是一个**10 位数模转换器**（DAC）。将引脚 0 设为 0 到 1023 之间的数值，会使该引脚输出 0 到 3.3 伏之间的稳定电压。（相比之下，PWM 输出的是一系列数字脉冲，数值决定脉冲宽度。）DAC 引脚可用于生成音频或其他模拟信号。

该开发板有一个黄色用户 LED（引脚 13）和蓝色 RX/TX LED（引脚 11 和 12）。
所有 LED 都是反向的：将对应引脚设为 LOW 即可点亮 LED。

RX/TX LED 可以由 MicroBlocks 使用，但有一个注意事项。
MicroBlocks 会持续与开发板交换数据，
因此在使用 MicroBlocks 编辑器时，RX/TX LED 会频繁闪烁。
由于这种闪烁会分散注意力，RX/TX LED 默认是禁用的，
只有当脚本设置了对应引脚时才会启用。
考虑到这一点，当 IDE 未连接时，RX/TX LED 会很有用。

## 安装 MicroBlocks 固件

在该开发板上进入 bootloader 模式有点棘手，因为没有 boot 按钮。请使用一根导线快速将 USB 口左侧的两个 RST 引脚触点短接两次：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

如果操作成功，黄色用户 LED 会缓慢地渐亮渐灭，
并且会出现一个名为 **Arduino** 的虚拟 USB 驱动器。

从 MicroBlocks [固件文件夹](https://microblocks.fun/downloads/latest/vm)
下载[固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2)，
然后将该文件拖到虚拟 USB 驱动器上。

固件会开始安装，几秒钟后虚拟 USB 驱动器会消失。
你可以忽略任何关于磁盘未正确弹出的警告。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供供电的线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

在菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

在对话框中选择你的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

当开发板连接成功时，会出现一个绿色圆点和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编码环境，因此你可以边写边测。
点击积木和脚本即可运行它们。
将积木拖入脚本区域并拼装起来以创建脚本。

你的代码会存储在持久化的闪存中，即使开发板
未连接到 MicroBlocks 编辑器也能运行。
位于 **when started** 积木下的脚本会在开发板上电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了众多内置积木外，MicroBlocks 还有近 200 个库，
用于支持更多功能和外设。
点击 **Add Library** 按钮即可添加库。

## 示例

下面这个脚本会让黄色用户 LED 闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
中包含许多其他示例。

## 项目演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

对于更全面的项目演示，创客 [Luis](https://www.hackster.io/luis_a_la_m) 使用 XIAO SAMD21、Grove Shield for XIAO 和 LED 点阵搭建了一个 8x8 LED Neo-pixel 设备，你可以使用 MicroBlocks 在其上绘制惊艳的像素图案，而无需编写复杂代码。分步教程可在 [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15) 上找到。


## 特别鸣谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
