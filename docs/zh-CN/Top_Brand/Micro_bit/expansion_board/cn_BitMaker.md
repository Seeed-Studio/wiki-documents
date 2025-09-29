---
description: Micro_bit BitMaker
title: BitMaker
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BitMaker
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249977-72e43eb6-aa32-4fa3-8e31-d49d1110d946.png#height=466&id=TVoRI&originHeight=466&originWidth=800&originalType=binary&ratio=1&size=0&status=done&style=none&width=800) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/1.png)

## 介绍
BitMaker 是一个信用卡大小的即插即用扩展板，它将 Grove 模块与 micro:bit 连接起来。它集成了 4 个 RGB LED、1 个内置蜂鸣器用于播放旋律，以及 6 个 Grove 端口（其中一个是 I2C 端口），允许 micro:bit 连接数百个模块，如传感器、执行器、通信模块和显示器。


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656250001-d4b242c7-636e-430b-8565-1503c4272f34.png#height=384&id=zyWSH&originHeight=384&originWidth=1123&originalType=binary&ratio=1&size=0&status=done&style=none&width=1123) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/2.png)

:::note
在您将程序下载到 micro:bit 后，请确保 BitMaker 通过 micro USB 线缆连接到电源。
:::

## 教程
以下是一些相关教程，帮助您开始使用 BitMaker。


### 1. 迷你音乐播放器

#### 1.1 实现

这是一个很酷的音乐播放器，可以播放生日歌并闪烁黄色、绿色的灯光。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249956-97e452a2-7a79-46f5-ab56-4f84a2333b3a.png#height=337&id=Q8LWx&originHeight=337&originWidth=599&originalType=binary&ratio=1&size=0&status=done&style=none&width=599) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/3.png)

#### 1.2 编写程序
请注意，在 MakeCode 中我们没有控制 RGB LED 的积木块。因此我们需要在 MakeCode 中添加 Neopixel 扩展来确保一切正常工作。让我们现在学习如何做到这一点！
[如何添加 Neopixel 扩展]
让我们前往 MakeCode：[https://makecode.microbit.org](https://makecode.microbit.org/)

- 步骤 1 点击 MakeCode 蓝色栏上的齿轮图标（设置）。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249950-b8584720-ef46-4f7f-83ac-0f6ac745f224.png#height=549&id=f8O2j&originHeight=549&originWidth=1124&originalType=binary&ratio=1&size=0&status=done&style=none&width=1124) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/4.png)

- 步骤 2 从下拉列表中选择"扩展"，这将带您到扩展页面。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249951-f3c071db-d274-45d5-b10e-f83303155562.png#height=653&id=Zd6ki&originHeight=653&originWidth=853&originalType=binary&ratio=1&size=0&status=done&style=none&width=853) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/5.png)

- 步骤 3 在搜索框中输入 Neopixel 扩展的地址：[https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249966-9061a1f4-eaea-4070-9416-d32bc76663f6.png#height=826&id=Gpf25&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/6.png)

> 如果提示此扩展不存在，请关闭浏览器并重试。

- 步骤 4 点击扩展包，这将带您回到主页。您将看到 Neopixel 扩展已成功添加。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249970-0c17f823-8b1c-4ea0-8e65-74fae74c493b.png#height=826&id=rHYia&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/7.png)

在我们添加扩展后，让我们继续任务。


:::note
如果您想添加 BitMaker 扩展，请按照上述相同的说明操作。BitMaker 扩展：[https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
:::

首先，添加一个"当开机时"积木块。转到"音乐"选项卡，在下面连接"开始重复播放旋律"积木块。在此积木块中选择生日歌。然后拖放"无限循环"积木块。将初始 LED 数量设置为 4 并确认颜色格式。按照这个程序逻辑：灯带首先闪烁红色；0.5 秒后，灯带闪烁绿色并再次暂停 0.5 秒。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249961-3f674736-8e2a-4dd3-bab0-f2177cd17f71.png#height=514&id=FqxUe&originHeight=514&originWidth=1193&originalType=binary&ratio=1&size=0&status=done&style=none&width=1193) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

#### 1.3 连接设备
直接将 micro:bit 滑入 BitMaker，注意不要插反。然后用 USB 线缆将 micro:bit 连接到您的 PC。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有，您需要拔掉 USB 线缆并重新连接设备。

#### 1.4 下载程序
您已经在[之前的教程](#)中了解了如何下载程序，可以简单总结为以下步骤：重命名程序，点击"下载"按钮并将其发送到 micro:bit。
<!-- [previous tutorials](#https://docproxy.tinkergen.com/web/#/2?page_id=329) -->

#### 1.5 运行程序
打开 BitMaker 上的开关，看看 micro:bit 是否能正常工作。


### 2. 其他教程
如开头所述，BitMaker 能够将 Grove 模块与 micro:bit 连接起来。我们在 [4.3 BitGadget Kit](#) 中提供了具体教程，向您展示如何做到这一点。如果您有一些 Grove 模块，请继续按照教程开始您的项目。如果您没有，请访问我们的 TinkerGen 商店购买！

> BitMaker 与所有 Grove 模块兼容。
<!-- [4.3 BitGadget Kit](#https://docproxy.tinkergen.com/web/#/2?page_id=325)  -->

## 课程材料
您可以通过以下地址在我们的在线学习平台 Make2Learn 上查看关于 micro:bit 和 BitMaker 的课程材料：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 附件
附件：https://files.seeedstudio.com/wiki/microbit_wiki_page/microbit-music player.hex

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