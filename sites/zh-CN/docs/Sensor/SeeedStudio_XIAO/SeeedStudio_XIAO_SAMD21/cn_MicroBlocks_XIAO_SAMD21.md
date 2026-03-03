---
description: 在 MicroBlocks 上使用 XIAO SAMD21。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /cn/xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO SAMD21 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9 岁到成人）能够轻松地为微控制器编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

### XIAO SAMD21 引脚图和硬件特性

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

与所有 XIAO 开发板一样，这块开发板有 11 个 GPIO 引脚，引脚 0..10。所有引脚都可以用于模拟输入和数字及模拟输出。
引脚 1..10 支持脉宽调制（PWM）输出，与其他 Xiao 开发板相同。

与其他开发板不同，这块开发板上的引脚 0 是一个 **10 位数模转换器**（DAC）。将引脚 0 设置为 0 到 1023 之间的数字，可以使引脚输出 0 到 3.3 伏之间的稳定电压。（相比之下，PWM 输出一系列数字脉冲，其中数字决定脉冲宽度。）DAC 引脚可用于生成音频或其他模拟信号。

这块开发板有一个黄色用户 LED（引脚 13）和蓝色 RX/TX LED（引脚 11 和 12）。
所有 LED 都是反向的：将相关引脚设置为 LOW 来点亮 LED。

RX/TX LED 可以被 MicroBlocks 使用，但有一个注意事项。
MicroBlocks 不断与开发板交换数据，
所以在使用 MicroBlocks 编辑器时，RX/TX LED 会明亮地闪烁。
由于这种闪烁会分散注意力，RX/TX LED 默认被禁用，
只有当脚本设置相关引脚时才会启用。
考虑到这一点，当 IDE 未连接时，RX/TX LED 可能很有用。

## 安装 MicroBlocks 固件

在这块开发板上进入引导加载程序模式比较棘手，因为没有启动按钮。使用导线快速短接 USB 端口左侧的两个 RST 引脚触点两次：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

成功时，黄色用户 LED 灯会缓慢地淡入淡出，
并且会出现一个名为 **Arduino** 的虚拟 USB 驱动器。

从 MicroBlocks [固件文件夹](https://microblocks.fun/downloads/latest/vm)
下载[固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2)，
然后将文件拖到虚拟 USB 驱动器上。

固件将安装，几秒钟后，虚拟 USB 驱动器将消失。
您可以忽略任何关于磁盘未正确弹出的警告。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到您的计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

从菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

从对话框中选择您的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

当开发板连接时，会出现一个绿色圆圈和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编程环境，因此您可以边编程边测试。
点击积木块和脚本来运行它们。
将积木块拖到脚本面板中并组装它们来创建脚本。

您的代码存储在持久闪存中，即使开发板
未连接到 MicroBlocks 编辑器也可以运行。
**when started** 积木块下的脚本在开发板通电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了许多内置积木块外，MicroBlocks 还有近 200 个库
支持额外的功能和外设。
点击 **Add Library** 按钮来添加库。

## 示例

这个脚本将闪烁黄色用户 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[积木块参考](https://wiki.microblocks.fun/en/reference_manual)
包含许多其他示例。

## 项目演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

对于更全面的项目演示，创客 [Luis](https://www.hackster.io/luis_a_la_m) 使用 XIAO SAMD21、Grove Shield for XIAO 和 LED 矩阵构建了一个 8x8 LED Neo-pixel 设备，您可以使用 MicroBlocks 绘制令人惊叹的像素图案，而无需编写复杂的代码。详细的分步教程可以在 [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15) 上找到。


## 特别感谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木块参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
