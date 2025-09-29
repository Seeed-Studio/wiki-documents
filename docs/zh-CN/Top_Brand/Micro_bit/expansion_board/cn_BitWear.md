---
description: Micro_bit bitwear
title: BitWear
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BitWear
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991110-809f156c-23cb-47b0-82fd-15fc1e221ba2.png#align=left&display=inline&height=670&originHeight=670&originWidth=1021&size=0&status=done&style=none&width=1021) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/1.png)

## 介绍
BitWear 是一个低成本的紧凑型配件，专为 micro:bit 用户制作有趣的可穿戴设备。BitWear 通过 5 颗螺丝（M3x5mm）简单地连接到 micro:bit 上，并由两节 CR2032 电池供电，电池被安全地夹在其中，除非拧开 BitWear，否则无法取出。板载有一个振动马达、一个蜂鸣器和一个可寻址 RGB LED，全部为您的有趣可穿戴项目而设计。我们对 BitWear 的设计目标是在最小化空间占用的同时最大化 micro:bit 功能，为新的 micro:bit 用户提供丰富的可穿戴体验。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991124-7551ded4-89b3-4524-8ea2-d43cf23c85dd.png#align=left&display=inline&height=547&originHeight=547&originWidth=1099&size=0&status=done&style=none&width=1099) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/2.png)


:::note
用户需要单独准备两节 CR2032 电池和五颗 M3*5 螺丝。
:::

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991126-2181a46f-99d0-4ee3-b587-3c82a082af0b.png#align=left&display=inline&height=527&originHeight=527&originWidth=995&size=0&status=done&style=none&width=995) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/3.png)


:::tip
测试程序时，请不要先在 BitWear 上安装电池。使用 USB 电缆代替提供电源并确保程序传输。只有在程序完成并需要离线实现时才安装电池。
:::

## 教程
以下是一些相关教程，帮助您开始使用 BitWear。


### 1. 唤醒闹钟

#### 1.1 实现
这是一个可以唤醒您的神奇设备！项目完成后，使用双面胶将设备固定在您的背部。慢慢弯腰，就像您要睡着一样，看看它是否能发出提醒。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991109-4bb68ed4-02eb-4499-b6df-bcebc2efe496.png#align=left&display=inline&height=522&originHeight=522&originWidth=928&size=0&status=done&style=none&width=928) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/4.png)

#### 1.2 编写程序
首先，添加一个 forever 块。在其中连接 show icon 块。保持这个心形图标。
接下来，添加一个 IF-THEN 语句。将比较块 < 连接到其中。在块内，将输入选项卡中的 acceleration (mg) 块添加到左侧框中；并在右侧框中输入 800。
然后，转到音乐选项卡，在下方连接 start melody (dadadum) repeating (once) 块。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991101-b137ce8c-40cc-4e0f-a08b-a8b867c44cf6.png#align=left&display=inline&height=461&originHeight=461&originWidth=1303&size=0&status=done&style=none&width=1303) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/5.png)

#### 1.3 连接设备
将 BitWear 连接到 micro:bit 上。使用 USB 电缆将 micro:bit 和您的 PC 连接在一起。确保 micro:bit 上的 LED 指示灯亮起。

#### 1.4 下载程序
您已经在[之前的教程](https://docproxy.tinkergen.com/web/#/2?page_id=329)中了解了如何下载程序，可以简化为以下步骤：重命名程序，点击"下载"按钮并将其发送到 micro:bit。

#### 1.5 运行程序
打开 BitWear 上的电源开关，看看程序是否能正常运行。


### 2. 光线检测器
#### 2.1 实现

连接 BitWear 后，如果光线水平大于 80，micro:bit 显示笑脸；如果不是，BitWear 振动，micro:bit 显示悲伤的脸并播放 Baddy 旋律。（指定的光线水平在实际场景中可能有所不同；您可以根据需要进行调整。）
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991125-adfecd70-04c0-4415-9c82-829929c8e68c.png#align=left&display=inline&height=494&originHeight=494&originWidth=878&size=0&status=done&style=none&width=878) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/6.png)

#### 2.2 编写程序
请注意，MakeCode 不提供控制 BitWear 的块。因此我们需要在 MakeCode 中手动添加扩展以确保一切正常。现在让我们学习如何做到这一点！
如何添加 BitWear 扩展：
转到 MakeCode：
[https://makecode.microbit.org](https://makecode.microbit.org/)

<!-- - 步骤 1：创建一个新项目以进入工作区。点击蓝色栏上的齿轮图标（设置）。![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991129-3a81d155-0279-412d-a66f-28ab0f9530cb.png#align=left&display=inline&height=496&originHeight=496&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/7.png)

- 步骤 2：从下拉列表中选择扩展，这将带您到扩展页面。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991368-facfd798-ea8e-4703-89d8-78114f26d22e.png#align=left&display=inline&height=638&originHeight=638&originWidth=834&size=0&status=done&style=none&width=834) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/8.png)

- 步骤 3：在搜索框中输入 BitWear 扩展的地址：[https://github.com/TinkerGen/pxt-BitWear](https://github.com/TinkerGen/pxt-BitWear)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991151-7ca03e5e-ce2a-4c82-b993-788be270b4e7.png#align=left&display=inline&height=455&originHeight=455&originWidth=1007&size=0&status=done&style=none&width=1007) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/9.png)

> 如果提示扩展不存在，请关闭浏览器并重新进入 MakeCode 再试一次。

- 步骤 4：点击扩展包，这会带你回到工作区。你会看到 BitWear 扩展已成功添加。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991400-25ce2189-c8b8-461d-ae36-98595d4c26a4.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/10.png)

添加扩展后，让我们继续进行任务。


首先，添加一个无限循环块，并在其中连接一个 IF-THEN-ELSE 语句。
按照这个程序逻辑和代码：如果光照强度大于 80，那么 micro:bit 将显示笑脸；如果不是，BitWear 将振动，micro:bit 将显示悲伤的脸并播放 Baddy 旋律。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991145-87f4c2d0-d211-489c-8886-8d5f257f1968.png#align=left&display=inline&height=635&originHeight=635&originWidth=1264&size=0&status=done&style=none&width=1264) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/11.png)

#### 2.3 连接设备
将 BitWear 连接到 micro:bit 上。使用 USB 线将 micro:bit 和你的电脑连接在一起。确保 micro:bit 上的 LED 指示灯亮起。
#### 2.4 下载程序
你已经在之前的教程中了解了如何下载程序，可以简化为以下步骤：重命名程序，点击"下载"按钮并将其发送到 micro:bit。
#### 2.5 运行程序
打开 BitWear 上的电源开关，看看程序是否能正常运行。

:::note
由于 micro:bit 没有内置光传感器，micro:bit 使用 LED 矩阵来感知周围的光线。LED 执行器不断转换为输入信号并对电压衰减持续时间进行采样，这大致与环境光照强度成正比。
:::

## 课程材料
你可以通过这个地址在我们的在线学习平台 Make2Learn 上查看关于 micro:bit 和 BitWear 的相关课程材料：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)


## 附件
#### [附件：BitWear 教程源代码](https://tinkergen.com/filedownload/179236)

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