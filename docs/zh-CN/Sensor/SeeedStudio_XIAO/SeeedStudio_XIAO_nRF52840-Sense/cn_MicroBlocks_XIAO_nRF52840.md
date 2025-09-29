---
description: 在 MicroBlocks 上使用 XIAO nRF52840。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /cn/xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO nRF52840 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式编程语言，让初学者（9 岁到成人）能够轻松地为微控制器编程。尽管看起来简单，MicroBlocks 实际上是一种功能强大的编程语言，性能比 MicroPython 更好；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设接口；拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型设计和测试，因为它具有快速、交互式的开发周期。

## XIAO nRF52840 引脚图和硬件特性

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

这块开发板的一个重要优势是其低功耗的 Nordic 无线电，允许 MicroBlocks 通过蓝牙低功耗（BLE）无线编程开发板。

引脚 0..10 是 GPIO 引脚。引脚 0..5 可以作为模拟输入。
这块开发板还有三个小型 LED：红色（引脚 11，用户 LED）、蓝色（引脚 12）和绿色（引脚 13）。
所有 LED 都是反向的：将相关引脚设置为 LOW 来点亮 LED。

Sense 版本还包括板载 PDM 麦克风、温度传感器和 6 轴 LSM6DS3TR-C IMU，这些都由 MicroBlocks 的"Microphone"、"Basic Sensors"和"Motion"库支持。

## 安装 MicroBlocks 固件

要进入引导加载程序模式，快速双击复位按钮。
（复位按钮非常小，当 USB 端口朝上时位于 USB 端口的左侧。）

将出现一个名为 **XIAO-SENSE** 的虚拟 USB 驱动器。

从 MicroBlocks [固件文件夹](https://microblocks.fun/downloads/latest/vm)下载[固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2)，然后将文件拖到虚拟 USB 驱动器上。

固件将安装，几秒钟后，虚拟 USB 驱动器将消失。
您可以忽略任何关于磁盘未正确弹出的警告。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到您的计算机。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

从菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 您也可以通过在连接菜单中选择 **connect (BLE)** 来无线连接。

从对话框中选择您的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

当开发板连接时，将出现绿色圆圈和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

如果您的 Xiao nRF52840 有自己的电源，您也可以通过在连接菜单中选择"connect (BLE)"来在不使用 USB 线的情况下连接到它。

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编程环境，因此您可以边编程边测试。
点击积木块和脚本来运行它们。
将积木块拖到脚本面板中并组装它们来创建脚本。

您的代码存储在持久闪存中，即使开发板未连接到 MicroBlocks 编辑器也可以运行。
**when started** 积木块下的脚本在开发板通电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了许多内置积木块外，MicroBlocks 还有近 200 个库来支持额外的功能和外设。
点击 **Add Library** 按钮来添加库。

## 示例

这个脚本将闪烁红色用户 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

这个脚本将循环闪烁红色、蓝色和绿色 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

[积木块参考](https://wiki.microblocks.fun/en/reference_manual)包含许多额外的示例。

## 特别感谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [网站](https://microblocks.fun)

- [用户指南](https://wiki.microblocks.fun/en/ide)

- [积木块参考](https://wiki.microblocks.fun/en/reference_manual)

- [库参考](https://wiki.microblocks.fun/en/libraries)

- [学习指南](https://learn.microblocks.fun)
