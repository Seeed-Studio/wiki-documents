---
description: Grove_Inventor_Kit_for_microbit
title: Grove Inventor Kit for microbit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Inventor_Kit_for_microbit
sku: 103100063, 103030195, 110060762
last_update:
  date: 01/05/2022
  author: Eico
no_comments: false
createdAt: '2023-01-10'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/Grove_Inventor_Kit_for_microbit/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>

BBC micro:bit 是一款口袋大小的计算机，即使没有太多电子和编程知识，也能轻松实现你的创意。通过 micro:bit 你可以挖掘出无数创作可能，从机器人到乐器应有尽有。然而，如果你想创造更多东西，仅仅 1 块 micro:bit 远远不够，这就是我们向你介绍 Grove Inventor Kit for micro:bit 的原因。

Grove Inventor Kit for Micro:bit 为你的 micro:bit 带来无限可能。此套件中的核心板是 Grove shield for micro:bit，借助它你可以使用大量 Grove 模块，包括传感器、显示器、执行器等，与 micro:bit 进行交互。如果你从未使用过，也不知道 Grove 是什么，这里有 Grove 的介绍。你只需要知道，有了 Grove，就不再需要焊接或杜邦线。你的原型制作将变得更简单、更方便。

我们已经准备好了 8 个 Grove 模块，帮助你快速上手 micro:bit。利用这些 Grove 模块，你可以测量距离并将其显示出来，用手势来播放不同的音乐，或者为你的桌面或房间制作一个智能守卫。我们已经准备好了所有必要的库（软件包），可免费下载。如果你是 micro:bit 初学者，也不用担心，因为我们还准备了 12 个不同的项目，手把手教你一步步完成。如果你是高级用户，这套件将帮助你做出比别人更有创意的项目。

:::note

micro:bit 的输出电压大约为 3.0V，使用 micro:bit 或 AA 电池为电路供电，可能会导致某些需要较高输入电压和驱动电流的 Grove 模块（例如 Grove - Ultrasonic Ranger）工作异常。为了让这类 Grove 模块正常工作，请使用 Grove shield for microbit 上的 micro-USB 端口为电路供电。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 酷炫的扩展盾，外设丰富且使用方便；
- 精选 10 个适用于 micro:bit 的 Grove 模块；
- 12 个精彩项目，帮助你快速上手；
- 文档说明详尽完善。

## 硬件总览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

### **零件清单**

<table align="center">
  <tbody>
  <tr>
    <td><h3>部件名称</h3></td>
    <td><h3>数量</h3></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Rotary Angle Sensor(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Speaker </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Light Sensor v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Red LED</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro USB Cable - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>12 Projects Manual</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Alligator Cable</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Cable</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## 入门指南

### Micro:bit 基础知识

如果这是你第一次接触 Micro:bit，你需要了解一些基本知识。你可以点击[**这里**](https://microbit.org/code/)查看更多关于 Micro:bit 的信息。

Micro:bit 提供两种编辑器——JavaScript Block Editor 和 Python Editor。JavaScript Block Editor 支持图形化编程，容易上手。因此本教程基于 JavaScript Block Editor。

在享受我们的套件之前，有两个简单的步骤，完成之后我们就可以开始编程了。

#### 步骤 1. 打开编辑器

请点击打开 **[JavaScript Block Editor](https://makecode.microbit.org/)**，你将看到一个图形化编程网页。

#### 步骤 2. 添加 Grove 软件包

- 点击右上角的齿轮图标 > 选择 **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

- 输入项目 URL：**github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

- 现在你可以在工具栏中找到 **Grove**。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### 示例 1. 手势识别

手势传感器可以识别 9 种不同的手势，在本示例中，你将学习如何在 micro:bit 上显示识别到的
手势名称。

#### 零件清单

<table align="center">
  <tbody>
  <tr>
    <td><h3>部件名称</h3></td>
    <td><h4>数量</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>

  </tbody></table>

#### 连接

- 将 **micro:bit** 插入 **Grove Shield for micro:bit**。
- 通过一根 Grove 通用 4 线缆，将 Grove-Gesture 连接到 micro:bit 的 **I2C** 端口。
- 通过 Micro-USB 线将 micro:bit 连接到电脑。

:::warning

当你插入 micro:bit 时，请确保 LED 阵列朝上，否则可能会损坏电路板。

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### 软件

- 步骤 1：

  添加 On Gesture 积木块
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

- 步骤 2：

  选择 Right，这样当你将手从右向左移动时，传感器就可以识别出来。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

- 步骤 3：

  添加 Basic 模块中的 **show string** 积木，并将其嵌入 Gesture 积木中。然后双击 "Hello!"，将其改为 "Right"。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

- 步骤 4：

  以同样的方式添加 "Left" 和 "Clockwise"，并在 "Clockwise" 中嵌入 **show icon**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

- 步骤 5：

  当你完成以上所有步骤后，将项目重命名为 "gesture"。然后你就可以把项目下载到开发板上了。点击左下角的 **Download**，将文件 **microbit-gesture.hex** 下载到 MICROBIT 的闪存中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  现在尽情享受你的项目吧。

:::tip
  你可以通过颜色来找到积木块。例如，如果你不知道 **show icon** 在哪里，由于它是蓝色的，而 **Basic** 模块也是蓝色的，你就可以在这里找到它。简单又高效，不是吗？
:::

### 示例 2. 超声波测距仪

在本示例中，你将学习如何使用超声波传感器测量距离，并在
显示器上显示数值。

#### 零件清单

<table align="center">
  <tbody>
  <tr>
    <td><h3>部件名称</h3></td>
    <td><h4>数量</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### 连接

- 将 **micro:bit** 插入 **Grove Shield for micro:bit**。

:::warning
please make sure the LED Array is faced up when you plug the micro:bit, or you may damage the board.
:::

- 通过一根 Grove 通用 4 线缆，将 Grove-Ultrasonic Ranger 连接到 micro:bit 的 **P0/P14** 端口。
- 通过一根 Grove 通用 4 线缆，将 Grove-4-Digit Display 连接到 micro:bit 的 **P1/P15** 端口。
- 通过 Micro-USB 线将 micro:bit 连接到电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### 软件

- 步骤 1：

  添加 Basic 模块中的 **on start** 积木块，然后添加变量积木 **set item to 0**，将 ‘items’ 重命名为 ‘Display’。如果你已经成功添加 Grove 软件包，将 “0” 替换为 Grove 积木 4-Digit Display at P1 and P15。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

- 步骤 2：

  添加 basic 模块 forever，然后添加 Grove 模块 item show number 0，将“item”重命名为“Display”，并将“0”替换为 Grove 模块 Ultrasonic Sensor (in cm) at P0。

- 步骤 3：

  添加 basic 模块 pause (ms) (100)。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

- 步骤 4：

  将项目重命名为 "Ultrasonic Meter"，下载并开始体验。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

  [**Grove Inventor Kit for micro:bit 用户手册**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit 入门视频**](http://microbit.org/start/)

  [**关于 micro:bit**](http://microbit.org/about/)

  [**micro:bit 硬件**](http://microbit.org/guide/hardware/)

  [**micro:bit 应用**](http://microbit.org/code/)

  [**Grove Shield for micro:bit eagle 项目**](https://files.seeedstudio.com/products/103100063/Res/Grove_Shield_for_microbit_v2.2_SCH-PCB_220406.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
