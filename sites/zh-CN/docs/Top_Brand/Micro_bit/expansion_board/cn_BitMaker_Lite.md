---
description: Micro_bit BitMaker lite
title: BitMaker Lite
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BitMaker_lite
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-e058e745-c2f4-4263-8a0b-9c38faa4085d.png#align=left&display=inline&height=512&originHeight=512&originWidth=814&size=0&status=done&style=none&width=814) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

## 介绍
BitMaker Lite 是 BitMaker 的紧凑简化版本。它只有 3 个 Grove 接口，但这对于许多项目来说已经足够了。即插即用的便利性意味着您可以轻松使用 Grove 模块实现项目。内置的蜂鸣器也使许多有趣的音频项目成为可能，例如水果钢琴。如果您想访问更多 GPIO，BitMaker Lite 还提供了 micro:bit 所有可用引脚的引出，您可以焊接排针连接器来使用它们。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416911-961efb23-8578-4cfa-a224-29da21dcd517.png#align=left&display=inline&height=419&originHeight=419&originWidth=1156&size=0&status=done&style=none&width=1156) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/10.png)

## 教程
### 1. 音乐播放器
#### 1.1 实现

micro:bit 在开机时播放一次生日歌。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416918-8d8828f3-a79b-45ad-a721-186f3f7756fb.png#align=left&display=inline&height=399&originHeight=399&originWidth=709&size=0&status=done&style=none&width=709) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/11.png)

#### 1.2 编写程序
添加"当开机时"积木块，并从音乐选项卡中连接"开始播放旋律 (dadadum) 重复 (一次)"积木块。在此积木块中选择生日歌。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416887-1ca9e66a-ee00-4f89-83cf-7b8faafdfa3b.png#align=left&display=inline&height=171&originHeight=171&originWidth=535&size=0&status=done&style=none&width=535) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/12.png)

#### 1.3 连接设备
将 micro:bit 滑入 BitMaker Lite，注意不要插反。用 USB 线将 micro:bit 连接到您的电脑。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有，可能是 USB 线连接错误。

#### 1.4 下载程序
您已经在[之前的教程](https://docproxy.tinkergen.com/web/#/2?page_id=329)中了解了如何下载程序，可以简化为以下步骤：重命名程序，点击"下载"按钮并发送到 micro:bit。

#### 1.5 运行程序
打开 BitMaker Lite 上的开关，看看 micro:bit 是否播放生日歌。


### 2. 加速度计的乐趣
#### 2.1 实现

micro:bit 每次做不同手势时都会显示一个图案并相应地播放旋律。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416904-9f5c413e-032f-4651-8d51-303ca7f57420.png#align=left&display=inline&height=490&originHeight=490&originWidth=632&size=0&status=done&style=none&width=632) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/13.png)

#### 2.2 编写程序
按照程序逻辑和代码：<br />
开机时，micro:bit 显示心形图标。<br />
当 micro:bit 摇晃时，屏幕清空，什么都不显示。<br />
当标志朝正上方时，micro:bit 显示"北"箭头并播放"jump up"旋律。<br />
当标志朝正下方时，micro:bit 显示"南"箭头并播放"jump down"旋律。<br />
当 micro:bit 向左倾斜时，显示"西"箭头并播放"dadadum"旋律。<br />
当 micro:bit 向右倾斜时，显示"东"箭头并播放"entertainer"旋律。<br />
当屏幕朝上时，micro:bit 显示笑脸并播放"power up"旋律。<br />
当屏幕朝下时，micro:bit 显示哭脸并播放"power down"旋律。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416885-b70ab193-d5c2-47d1-ab29-bdb3452d6aa2.png#align=left&display=inline&height=741&originHeight=741&originWidth=982&size=0&status=done&style=none&width=982) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/14.png)

#### 2.3 连接设备
将 micro:bit 滑入 BitMaker Lite，注意不要插反。用 USB 线将 micro:bit 连接到您的电脑。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有，可能是 USB 线连接错误。

#### 2.4 下载程序
您已经在之前的教程中了解了如何下载程序，可以简化为以下步骤：重命名程序，点击"下载"按钮并发送到 micro:bit。

#### 2.5 运行程序
打开 BitMaker Lite 上的开关，看看程序是否能正常运行。

### 3. 其他项目

如开始所述，BitMaker Lite 能够将 Grove 模块与 micro:bit 连接起来。我们在 [4.2 BitStarter Kit](https://docproxy.tinkergen.com/web/#/2?page_id=403) 中提供了具体教程，向您展示如何做到这一点。如果您有一些 Grove 模块，请继续按照教程开始您的项目。如果您没有，请访问我们的 TinkerGen 商店并订购一些！

> BitMaker Lite 兼容所有 Grove 模块。

#### 添加扩展
要在使用 BitMaker Lite 时启用 Grove 模块，我们需要向 MakeCode 添加扩展。让我们了解如何做到这一点：

- 访问 MakeCode：[https://makecode.microbit.org](https://makecode.microbit.org/)
- 创建新项目进入工作区。点击蓝色栏上的齿轮图标（设置）。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416889-8342e086-2cdc-4416-bbbf-95d991f48444.png#align=left&display=inline&height=524&originHeight=524&originWidth=1072&size=0&status=done&style=none&width=1072) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/15.png)

- 从下拉列表中选择 Extensions，这将带您进入扩展页面。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-ee4ae33c-ffc2-44b8-a127-bf55f7e4e0e5.png#align=left&display=inline&height=712&originHeight=712&originWidth=931&size=0&status=done&style=none&width=931) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/16.png)

- 在搜索框中输入 BitMaker Lite 扩展的地址：[https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416930-10133e74-2d1f-41d1-9a3c-1c29482f27a3.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/17.png)

> 如果提示扩展不存在，请关闭浏览器并重新进入 MakeCode 再试一次。

- 点击扩展包，这将带您回到工作区。您将看到 Grove 扩展已成功添加。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416925-93ed4b5a-8d37-4841-be77-0d6564d01cc8.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/18.png)


## 课程材料
您可以在我们的在线学习平台 Make2Learn 上查看关于 micro:bit 和 BitMaker Lite 的相关课程材料，地址：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 附件
#### [附件：BitMaker Lite 教程源代码](https://tinkergen.com/filedownload/179268)

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