---
description: Micro_bit Microsoft MakeCode
title: Microsoft MakeCode
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Microsoft_MakeCode
last_update:
  date: 12/29/2023
  author: Seraphina
---


[Microsoft MakeCode](https://makecode.microbit.org/) micro:bit 编辑器允许您使用基于块的编程语言对 micro:bit 进行编程。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918056-6a0b823f-6422-4d5a-875a-269bd63f20a0.png#align=left&display=inline&height=829&originHeight=829&originWidth=1255&size=0&status=done&style=none&width=1255) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/1.png)

## 如何添加扩展（或包）

大多数 micro:bit 的硬件扩展（例如电机控制器）也为 MakeCode 编辑器提供了扩展（或包）。将扩展添加到您的项目中可以让您更轻松地控制扩展板的功能。以下内容将逐步向您展示如何添加扩展：

1. 通过点击设置图标找到扩展页面的入口：

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918045-91e397f1-e091-48d8-b7bd-ca956ccd04da.png#align=left&display=inline&height=397&originHeight=397&originWidth=397&size=0&status=done&style=none&width=397) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/2.png)

或者在高级 => 扩展块类别中。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918102-c76ae196-9eac-4da4-a424-34e6e1e2843d.png#align=left&display=inline&height=397&originHeight=397&originWidth=397&size=0&status=done&style=none&width=397) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/3.png)

2. 通过关键词搜索扩展（例如 'bitkit'）
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918091-b1dfb28b-34ca-4b13-9b3c-d8016ee16c6f.png#align=left&display=inline&height=423&originHeight=423&originWidth=755&size=0&status=done&style=none&width=755) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/4.png)


或者输入 github URL（例如 [https://github.com/seeed-studio/pxt-grove-zero-for-microbit](https://github.com/seeed-studio/pxt-grove-zero-for-microbit)）

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918098-85a5078a-5400-4400-9844-13fe1c92226d.png#align=left&display=inline&height=439&originHeight=439&originWidth=765&size=0&status=done&style=none&width=765) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/5.png)

3. 点击扩展，块和 JavaScript 定义将自动加载到编辑器中，如下所示。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918092-687cc94e-c992-4cda-81fc-46efd75f0b6c.png#align=left&display=inline&height=825&originHeight=825&originWidth=1257&size=0&status=done&style=none&width=1257) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/6.png)


## 编程步骤

- 步骤 1：访问 MakeCode：[https://makecode.microbit.org/](https://makecode.microbit.org/)

- 步骤 2：使用 USB 线将 micro:bit 连接到您的 PC。成功连接后，micro:bit 背面的电源指示灯将亮起。打开"此电脑"，您将看到列表中有一个 MICROBIT 驱动器。

- 步骤 3：创建一个新项目，这将带您进入工作区，如下所示。让我们编写一个简单的程序，在 LED 矩阵上显示心形图案。完成后继续下一步。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918301-9ce6d080-3fa8-4196-9018-53a08ae4f046.png#align=left&display=inline&height=150&originHeight=150&originWidth=206&size=0&status=done&style=none&width=206) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/7.png)

- 步骤 4：将程序下载到 micro:bit。为您的项目命名一个标题，例如显示心形图标。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918254-c10baa7a-f1b7-46a7-baf9-63b5865897e8.png#align=left&display=inline&height=73&originHeight=73&originWidth=698&size=0&status=done&style=none&width=698) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/8.png)


首先，点击界面左下角的"下载"，在弹出的对话框中选择"另存为"来保存 .hex 文件。接下来，在另一个弹出的对话框中，选择 MICROBIT 驱动器并点击"保存"（如果找不到"另存为"，您需要自己搜索下载的 .hex 文件，然后将其复制或拖拽到 MICROBIT 驱动器上）。下载时，指示灯会闪烁，但过程完成后会变为稳定状态。

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