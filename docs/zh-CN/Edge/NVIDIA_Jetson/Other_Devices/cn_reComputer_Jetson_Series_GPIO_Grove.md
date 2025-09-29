---
description: 创建一个包含丰富内容的文档页面。
title: reComputer 系列的 GPIO 和 Grove
keywords:
  - Edge
  - reComputer 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_GPIO_Grove
last_update:
  date: 11/21/2022
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer Jetson 的 GPIO 和 Grove

## Jetson 扩展接口

GPIO（通用输入/输出）端口位于 Jetson 载板的顶部边缘。它看起来像两排长长的金属引脚，您可以将功能端口（如 LED 和开关）连接到板上，以便在您创建的程序下进行控制。这些引脚可用于输入和输出。

下图是 Jetson-10-1-A 载板上 40 引脚 GPIO 的引脚描述。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/59.png" alt="pir" width={500} height="auto" /></p>

您可能想要查看有关扩展引脚的详细信息并学习如何配置它们，在 NVIDIA Jetson Linux 开发者指南的[配置 Jetson 扩展接头](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#)文档中，您将学习如何操作 Jetson-IO 并添加对自定义硬件的支持。

## 将 Jetson 连接到 Grove 系统

Grove 是一个开源、模块化、即用型工具集，采用积木式方法来组装电子设备。与使用面包板和各种电子元件组装项目的传统复杂学习方法相比，Grove 显著简化了学习和使用过程。

- [了解 Grove 系统](https://wiki.seeedstudio.com/cn/Grove/)

## 使用 Grove PiHAT 和 NVIDIA Jetson Nano 创造更多 AI 可能性

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/regpio.jpg" alt="pir" width={500} height="auto" /></p>

如果您想要将 [Grove 传感器](https://www.seeedstudio.com/category/Grove-c-1003.html)应用到 Jetson Nano 中，最好的方法是获取 [grove.py](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md) 和 [Python 库](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md)，这将帮助您在几分钟内开始您的项目！点击[这里](https://www.seeedstudio.com/blog/2019/06/13/create-more-ai-possibilities-with-grove-pihat-for-nvidia-jetson-nano/)获取更多信息。

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