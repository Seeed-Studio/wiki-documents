---
description: What is TinyML
title: 什么是TinyML
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML
last_update:
  date: 3/05/2024
  author: jessie
---

# 什么是 TinyML?

TinyML是指在非常低功耗和小尺寸设备上运行优化的机器学习模型，例如各种微控制器。它是边缘机器学习或嵌入式机器学习的一个子集。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

将嵌入式ML放入一个特殊的类别，并赋予它自己的酷名字，是因为它具有一套独特的优点和限制。TinyML的吸引力在于微控制器广泛使用，体积小，能耗低，相对便宜。

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

为什么将嵌入式微控制器上的嵌入式机器学习放入一个特殊的类别，并赋予它自己的酷名字呢？

这是因为它具有一套独特的优点和限制。TinyML的吸引力在于微控制器（MCUs）广泛使用，体积小，能耗低，相对便宜。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

以ARM Cortex M0+和小巧的 [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 开发板为例，该开发板尺寸只有拇指大小（20×17.5mm），仅消耗1.33mAh的电量（意味着可以在150mAh电池上工作约112小时，如果处于深度睡眠状态，则更长时间），成本仅为4.3美元。

由于模型优化的最新进展和专门为微控制器上的机器学习模型推断而创建的框架的出现，现在可以为这些微小设备赋予更高的智能。我们现在可以在微控制器上部署神经网络，用于音频场景识别（例如大象活动或玻璃破碎声音）、唤醒词检测（用特定短语激活设备）甚至简单的图像识别任务。嵌入式微控制器设备可以用于给旧传感器带来新的生命和意义，例如使用安装在机械装置上的加速度计进行异常检测和预测性维护，或者用于区分各种类型的酒精饮料。 [this demo](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)!
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
TinyML的可能性是非常巨大的。
<br />

那么有哪些限制呢？主要的限制因素是微控制器的RAM/FLASH大小，无论你如何优化，你都无法将那个名为 [ YOLO9999](https://arxiv.org/abs/1612.08242) 的模型放入一个微小的微控制器中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

同样，自动语音识别也是如此-虽然可以实现简单的唤醒词（或声音命令）检测，但开放域语音识别超出微控制器的能力范围。目前而言是如此。

Seeed EDU团队推出了一门详细的逐步教程，教你如何使用Wio Terminal入门TinyML。

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

您可以通过点击下面的链接下载PDF格式的课程和课程材料。此外，您还可以在Seeed工作室博客和Hackster.io网站上找到独立的项目-课程中的项目和独立项目都使用Arduino IDE进行设备编程，使用Edge Impulse和Tensorflow Lite for Microcontrollers进行模型训练和推断。

:::注
课程和独立项目的主要区别在于，课程主要用于STEM教师作为开发自己教学材料的基础或作为即用型课程材料，而独立项目则适用于创客和黑客进行探索和改进。
:::

[Edge Impulse](https://www.edgeimpulse.com) 是一个用户友好的嵌入式设备机器学习开发平台，提供了初学者友好（但功能强大）的Web界面和工具包，用于整个TinyML流程，从数据收集到模型部署。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

另一方面，[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started) 虽然学习曲线较陡，但可以让您实现自己的模型训练和推断流程。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## 使用Wio Terminal进行TinyML课程

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### 下载 PDF

[ TinyML with Wio Terminal 课程的PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### 下载课程材料

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### 包含课程材料的Github存储库

[TinyML with Wio Terminal 课程的Github存储库](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## 无代码编程入门TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

旨在通过Wio Terminal和Codecraft图形编程向初学者介绍嵌入式机器学习的基础知识。

##### 下载 PDF

[无码编程入门TinyML课程PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## 技术支持 & 产品讨论


感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
