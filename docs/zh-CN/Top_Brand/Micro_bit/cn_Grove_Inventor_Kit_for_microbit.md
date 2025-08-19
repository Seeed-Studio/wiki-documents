---
description: Grove_Inventor_Kit_for_microbit
title: Grove Inventor Kit for microbit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Inventor_Kit_for_microbit
last_update:
  date: 01/05/2022 
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>


BBC micro:bit 是一款口袋大小的计算机，无需太多电子和编程知识就能轻松实现您的创意。通过 micro:bit，您可以挖掘出无数种创作可能性，从机器人到乐器。然而，如果您想创造更多东西，仅仅一个 micro:bit 是远远不够的，这就是我们向您介绍 Grove Inventor Kit for micro:bit 的原因。

Grove Inventor Kit for Micro:bit 为您的 micro:bit 带来无限可能。该套件的核心板是 Grove shield for micro:bit，通过它您可以使用大量的 Grove 模块，包括传感器、显示器、执行器来与 micro:bit 交互。如果您从未使用过 grove 并且不知道什么是 grove，这里有 Grove 的介绍。您只需要知道，有了 Grove，就不再需要焊接或跳线了。您的原型制作将变得更加简单和便捷。

我们已经准备了 8 个 grove 模块让您开始使用 micro:bit。通过这些 grove 模块，您可以测量距离并显示它，使用手势播放不同的音乐，或者为您的桌子或房间制作一个智能守卫。我们已经准备了所有必要的库（包）供免费下载。如果您是 micro:bit 的初学者，不用担心，因为我们还准备了 12 个不同的项目，可以一步步教您。如果您是高级用户，这个套件将帮助您创建比其他人更有创意的项目。


:::note

micro:bit 的输出电压约为 3.0V，使用 microbit 或 AA 电池为电路供电可能会导致需要高输入电压和驱动电流的 Grove 模块（例如 Grove - Ultrasonic Ranger）出现故障。为了使这类 Grove 正常工作，请使用 Grove shield for microbit 上的 micro-USB 端口为电路供电。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

  - 酷炫的扩展板，具有丰富便捷的外设；
  - 10 个精心挑选的 Grove 模块，可与 micro:bit 配合使用；
  - 12 个精彩项目让您快速入门；
  - 详细的说明文档。


##  硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

###  **零件清单**

<table align="center">
  <tbody>
  <tr>
    <td><h3>零件名称</h3></td>
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

如果您是第一次接触 Micro:bit，您需要了解一些基本知识。您可以点击[**这里**](https://microbit.org/code/)了解更多关于 Micro:bit 的信息。

Micro:bit 提供两种类型的编辑器 - JavaScript 块编辑器和 Python 编辑器。JavaScript 块编辑器支持图形化编程，易于学习。因此本教程基于 JavaScript 块编辑器。

在您开始使用我们的套件之前，有两个简单的步骤，之后我们就可以开始编程了。

#### 步骤1. 打开编辑器

请点击打开 **[JavaScript 块编辑器](https://makecode.microbit.org/)**，您将看到一个图形化编程网页。

#### 步骤2. 添加 Grove 包
  - 点击右上角的齿轮 > 选择 **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

  - 输入项目 URL：**github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

  - 现在您可以在工具栏中找到 **Grove**。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### 演示 1. 手势识别

手势传感器可以识别 9 种不同的手势，在这个演示中，您将学习如何在 micro:bit 上显示识别到的手势名称。

#### 零件清单

<table align="center">
  <tbody>
  <tr>
    <td><h3>零件名称</h3></td>
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
  - 通过 Grove Universal 4 pin cable 将 Grove-Gesture 连接到 micro:bit 的 **I2C** 端口。
  - 通过 Micro-USB 线缆将 micro:bit 连接到 PC。

:::warning

插入 micro:bit 时请确保 LED 阵列朝上，否则可能会损坏电路板。

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### 软件
  - 步骤1：

  添加 On Gesture 块
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

  - 步骤2：

  选择 Right，这样传感器就可以识别您从右向左移动手的动作。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

  - 步骤3：

  添加 Basic 块 **show string** 并将其嵌入到 Gesture 块中。然后双击 "Hello!"，将其更改为 "Right"。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

  - 步骤4：

  以同样的方式添加 "Left" 和 "Clockwise"，并将 **show icon** 嵌入到 "Clockwise" 中。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

  - 步骤5：

  完成以上所有步骤后，将项目重命名为 "gesture"。然后您可以将项目下载到您的电路板。点击左下角的 **Download**，将文件 **microbit-gesture.hex** 下载到 MICROBIT 的闪存中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  现在享受您的项目吧。

:::tip
  您可以通过颜色找到块。例如，如果您不知道 **show icon** 在哪里，由于它是蓝色的，而模块 **Basic** 也是蓝色的，您可以在这里找到它。简单有效，不是吗？
:::

### 演示 2. 超声波测距仪

在这个演示中，您将学习如何使用超声波传感器测量距离并在显示器上显示数值。

#### 零件清单

<table align="center">
  <tbody>
  <tr>
    <td><h3>零件名称</h3></td>
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
插入 micro:bit 时请确保 LED 阵列朝上，否则可能会损坏电路板。
:::

  - 通过 Grove Universal 4 pin cable 将 Grove-Ultrasonic Ranger 连接到 micro:bit 的 **P0/P14** 端口。
  - 通过 Grove Universal 4 pin cable 将 Grove-4-Digit Display 连接到 micro:bit 的 **P1/P15** 端口。
  - 通过 Micro-USB 线缆将 micro:bit 连接到 PC。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### 软件

  - 步骤1：

  添加 basic 块 **on start**，然后添加变量块 **set item to 0**，将 'items' 重命名为 'Display'。如果您已成功添加 Grove 包，将 "0" 替换为 Grove 块 4-Digit Display at P1 and P15。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

  - 步骤2：

  添加基础块 forever，然后添加 Grove 块项目 show number 0，将 'item' 重命名为 'Display'，将 '0' 替换为 Grove 块 Ultrasonic Sensor (in cm) at P0。

  - 步骤3：

  添加基础块 pause (ms) (100)。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

  - 步骤4：

  将项目重命名为 "Ultrasonic Meter"，下载并享受。


## 在线原理图查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

  [**Grove Inventor Kit for micro:bit 用户手册**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit 入门视频**](http://microbit.org/start/)

  [**关于 micro:bit**](http://microbit.org/about/)

  [**micro:bit 硬件**](http://microbit.org/guide/hardware/)

  [**micro:bit 应用程序**](http://microbit.org/code/)

  [**Grove Shield for microbit_eagle file.zip**](https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>