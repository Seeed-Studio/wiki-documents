---
description: 什么是 TinyML
title: 什么是 TinyML
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 什么是 TinyML？

ML 正如你可能猜到的，代表机器学习，在大多数情况下（虽然不总是如此），现在指的是深度学习。TinyML 中的 Tiny 意味着 ML 模型经过优化，可以在功耗极低且占用空间很小的设备上运行，比如各种 MCU。它是边缘机器学习或嵌入式机器学习的一个子集。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

嵌入式设备有各种形状和尺寸，从"嵌入式超级计算机" Nvidia Jetson Xavier AGX 到最小的微控制器，例如 ESP32 或 Cortex M0。

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

为什么微控制器上的嵌入式机器学习被归为特殊类别，甚至有了自己的酷炫名称？

因为它有自己的一套优势和限制。TinyML 的吸引力实际上在于 MCU 无处不在、体积小、能耗低且相对便宜。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

以 ARM Cortex M0+ 和基于它构建的小巧 [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 开发板为例——该开发板只有拇指大小（21×17.8mm），功耗仅为 1.33 mAh（这意味着它可以在 150 mA 电池上工作约 112 小时，如果进入深度睡眠模式会更久），成本仅为 4.3 美元。

由于最近在模型优化方面的改进以及专门为在微控制器上运行机器学习模型推理而创建的框架的出现，现在可以为这些微型设备赋予更多智能。我们现在可以在微控制器上部署神经网络进行音频场景识别（例如大象活动或玻璃破碎声）、热词检测（用特定短语激活设备）甚至简单的图像识别任务。带有嵌入式微控制器的设备可以用来为旧传感器赋予新的生命和意义，比如使用安装在机械装置上的加速度计进行异常检测和预测性维护——或者区分各种酒类，如[这个演示](https://wiki.seeedstudio.com/cn/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)中所示！
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
TinyML 的可能性真的很巨大。
<br />

那么限制呢？主要的限制因素是 MCU 的 RAM/FLASH 大小——无论你优化得多好，都无法将[那个 YOLO9999](https://arxiv.org/abs/1612.08242) 塞进一个微型微控制器中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

自动语音识别也是如此——虽然简单的热词（或语音命令检测）是可能的，但开放域语音识别超出了 MCU 的能力范围。目前是这样。

Seeed EDU 团队推出了一个权威的分步课程，介绍如何使用 Wio Terminal 开始学习 TinyML。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

你可以通过点击下面的链接下载 PDF 格式的课程和课程材料。此外，你还可以找到之前在 Seeed studio 博客和 Hackster.io 网站上发布的独立项目——课程中的项目和独立项目都使用 Arduino IDE 来编程设备，并混合使用 Edge Impulse 和 Tensorflow Lite for Microcontrollers 进行模型训练和推理。

:::note
课程和独立项目的主要区别在于，课程主要旨在供 STEM 教师用作开发自己教学材料的基础或作为现成的课程材料，而独立项目则供创客和黑客探索和改进。
:::

[Edge Impulse](https://www.edgeimpulse.com) 是一个用户友好的边缘设备机器学习开发平台，为整个 TinyML 流水线提供初学者友好（但功能强大）的 Web 界面和工具包，从数据收集一直到模型部署。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

另一方面，[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started) 虽然学习曲线更陡峭，但允许你实现自己的模型训练和推理流水线。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## 《TinyML》与 Wio Terminal 课程

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### 下载 PDF

[《TinyML》与 Wio Terminal 课程 PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### 下载课程材料

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### 课程材料的 Github 仓库

[《TinyML》与 Wio Terminal 课程的 Github](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## 无代码编程入门《TinyML》

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

旨在通过 Wio Terminal 和 Codecraft 图形化编程向初学者介绍嵌入式机器学习的基础知识。

##### 下载 PDF

[无代码编程入门《TinyML》课程 PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

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