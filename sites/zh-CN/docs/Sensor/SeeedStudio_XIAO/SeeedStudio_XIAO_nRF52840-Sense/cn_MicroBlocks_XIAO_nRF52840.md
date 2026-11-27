---
description: 在 MicroBlocks 上使用 XIAO nRF52840。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/cn/xiao_ble_microblocks/
---

# XIAO nRF52840 与 MicroBlocks

## MicroBlocks

MicroBlocks 是一种积木式语言，使初学者（9 岁到成人）可以轻松为微控制器编程。尽管看起来很简单，MicroBlocks 却是一种功能强大的编程语言，其性能优于 MicroPython；能够控制 GPIO 引脚并通过 I2C、SPI 和串口与外设通信；并且拥有近 200 个扩展库。事实上，一些硬件设计师更喜欢使用 MicroBlocks 进行快速原型开发和测试，因为它具有快速、交互式的开发周期。

## XIAO nRF52840 引脚图和硬件特性

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

这块板子的一个巨大优势是其低功耗 Nordic 射频模块，它允许 MicroBlocks 通过 Bluetooth Low Energy (BLE) 无线编程该板子。

引脚 0..10 是 GPIO 引脚。引脚 0..5 可用作模拟输入。
该板子还有三个微型 LED：红色（引脚 11，用户 LED）、蓝色（引脚 12）和绿色（引脚 13）。
所有 LED 都是反向的：将对应引脚设为 LOW 即可点亮 LED。

Sense 版本还包括板载 PDM 麦克风、温度传感器和 6 轴 LSM6DS3TR-C IMU，这些都由 MicroBlocks 的 "Microphone"、"Basic Sensors" 和 "Motion" 库提供支持。

## 安装 MicroBlocks 固件

要进入 bootloader 模式，请快速按下复位按钮两次。
（复位按钮非常小，当 USB 口朝上时，它位于 USB 口的左侧。）

一个名为 **XIAO-SENSE** 的虚拟 USB 驱动器会出现。

从 MicroBlocks 的 [firmware 文件夹](https://microblocks.fun/downloads/latest/vm)下载[固件文件](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2)，然后将该文件拖到虚拟 USB 驱动器上。

固件将开始安装，几秒钟后，虚拟 USB 驱动器会消失。
你可以忽略任何关于磁盘未正确弹出的警告。

## 将开发板连接到 MicroBlocks

使用数据 USB 线（**不是**仅供电线）将开发板连接到电脑。

在 Chrome 或 Edge 浏览器中运行 [MicroBlocks 编辑器](https://microblocks.fun/run/microblocks.html)。
点击 **connect**（插头图标）按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

在菜单中选择 **connect (USB)**：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：**你也可以在连接菜单中选择 **connect (BLE)** 以无线方式连接。

在对话框中选择你的开发板并点击 **connect** 按钮：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

当开发板连接成功时，会出现一个绿色圆点和开发板名称：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

如果你的 Xiao nRF52840 有自己的电源，你也可以在连接菜单中选择 "connect (BLE)"，无需 USB 线即可连接。

## 在 MicroBlocks 中编程

MicroBlocks 是一个**实时**编码环境，因此你可以一边编写一边测试。
点击积木和脚本即可运行它们。
将积木拖到脚本区域并组合起来以创建脚本。

你的代码会存储在持久化的闪存中，即使开发板未连接到 MicroBlocks 编辑器也能运行。
位于 **when started** 积木下的脚本会在开发板上电时运行。

MicroBlocks 支持并发。最多可以同时运行十个脚本。

除了众多内置积木外，MicroBlocks 还有近 200 个库，用于支持更多功能和外设。
点击 **Add Library** 按钮以添加库。

## 示例

下面这个脚本会让红色用户 LED 闪烁：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

下面这个脚本会依次点亮红、蓝和绿三色 LED：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) 中包含更多示例。

## 特别鸣谢

特别感谢 MicroBlocks 的 John 撰写本文。

## MicroBlocks 资源

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
