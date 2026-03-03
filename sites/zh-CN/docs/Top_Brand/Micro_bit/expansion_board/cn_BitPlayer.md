---
description: Micro_bit BitPlayer
title: BitPlayer
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BitPlayer
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608299-82ca0e88-02a3-4a72-bb27-0d6e31d508f5.png#height=609&id=HttEj&originHeight=609&originWidth=904&originalType=binary&ratio=1&size=0&status=done&style=none&width=904) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/1.png)

## 介绍
BitPlayer 为您提供灵感和兴奋感，让您创造出便携式钢琴或智能计算器等作品。为了更便于携带和使用，BitPlayer 放弃了典型游戏控制器会使用的全按钮设计，转而采用 2 轴操纵杆。它还包括另外 6 个可编程按钮，标记为 L、R、A、B、C 和 D。此外，BitPlayer 本身配备了蜂鸣器、振动马达和 Grove I2C 端口，为孩子们提供生动互动的游戏体验。通过在 BitPlayer 中安装 2 节 AAA 电池，您可以轻松地在任何地方享受 DIY 项目。经过测试，BitPlayer 可以在蓝牙定位距离约 10 米范围内与其他设备交互。如果您想实现遥控车，我们建议您也准备一个 [BitCar](https://docproxy.tinkergen.com/web/#/2?page_id=357)。


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608604-b8c61682-56cb-4c53-aa80-90e45003792c.png#height=907&id=yenfN&originHeight=907&originWidth=905&originalType=binary&ratio=1&size=0&status=done&style=none&width=905) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/2.png)

## 教程
以下是一些相关教程，帮助您开始使用 BitPlayer。


### 1. 手指速度游戏
#### 1.1 实现
在这个项目中，我们将通过操纵操纵杆来依次点亮 LED。光线将像循环的正方形一样在屏幕上运行。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608313-1eb60ba3-e82b-4cea-baa3-0eba2906910c.png#height=266&id=FXfhp&originHeight=266&originWidth=473&originalType=binary&ratio=1&size=0&status=done&style=none&width=473) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/3.png)

#### 1.2 编写程序
请注意，在 MakeCode 中我们没有控制 BitPlayer 的积木块。因此我们需要在 MakeCode 中添加 BitPlayer 扩展以确保一切正常运行。让我们现在学习如何做到这一点！
【如何添加 BitPlayer 扩展】
让我们进入 MakeCode：[https://makecode.microbit.org](https://makecode.microbit.org/)

- 步骤 1 点击 MakeCode 蓝色栏上的齿轮图标（设置）。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608337-28675e0d-cba2-4fcd-9e95-ea566db99f46.png#height=489&id=URYAb&originHeight=489&originWidth=1000&originalType=binary&ratio=1&size=0&status=done&style=none&width=1000) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/4.png)

- 步骤 2 从下拉列表中选择"扩展"，这将带您进入扩展页面。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608593-1510b8dd-4f3f-49b2-8145-fd6e87b854db.png#height=699&id=AAz5P&originHeight=699&originWidth=914&originalType=binary&ratio=1&size=0&status=done&style=none&width=914) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/5.png)

- 步骤 3 在搜索框中输入 BitPlayer 扩展的地址：[https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608308-08990569-fce3-4dc8-a07a-ad1c3f1182e1.png#height=937&id=b9Blo&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/6.png)

> 如果提示此扩展不存在，请关闭浏览器并重新进入 MakeCode。

<!-- - 步骤 4 点击扩展包，这将带您回到工作区。您将看到 BitPlayer 扩展已成功添加。![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608597-2ade6798-937e-47e0-8215-99e146f6d983.png#height=937&id=jyFxX&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/7.png)

让我们继续完成任务。
首先，添加一个"当开机时"积木块。让我们创建 3 个变量，命名为 LED 开启、x 坐标和 y 坐标。
接下来，将变量"LED 开启"设置为具有有序对（x 坐标，y 坐标）的精灵。这个有序对最初将从（0，0）开始。<br />
然后，按照这个程序逻辑进行编码：如果操纵杆向上拉，y 坐标将变化 -1；如果操纵杆向下拉，y 坐标将变化 1；如果操纵杆向左拉，x 坐标将变化 -1；如果操纵杆向右拉，x 坐标将变化 1。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608356-3c424c72-15e0-4ee2-895e-4eee6ec085a1.png#height=699&id=GohIO&originHeight=699&originWidth=1434&originalType=binary&ratio=1&size=0&status=done&style=none&width=1434) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/8.png)

#### 1.3 连接设备
直接将 micro:bit 滑入 BitPlayer，注意不要反向插入。然后用 USB 线将 micro:bit 连接到您的 PC。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有，您需要拔掉 USB 线并重新连接到设备。
#### 1.4 下载程序
您已经在[之前的教程](https://docproxy.tinkergen.com/web/#/2?page_id=329)中了解了如何下载程序，可以简单总结为以下步骤：重命名程序，点击"下载"按钮并发送到 micro:bit。
#### 1.5 运行程序
打开 BitPlayer 上的开关，看看 micro:bit 是否能正常工作。


### 2. 遥控车
参见 [BitCar 教程 4。](https://docproxy.tinkergen.com/web/#/2?page_id=357)

## 课程材料
您可以通过以下地址在我们的在线学习平台 Make2Learn 上查看关于 micro:bit 和 BitPlayer 的课程材料：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

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