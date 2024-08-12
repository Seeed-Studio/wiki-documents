---
description: 开始使用reComputer J1020v2
title: 开始使用reComputer J1020v2
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# 开始使用reComputer J1020v2

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## 介绍
Jetson系列的reComputer是搭载NVIDIA先进AI嵌入式系统的紧凑边缘计算机：J10（Jetson Nano 4GB）和J20（Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products)  8GB和Jetson Xavier 16GB）。具有丰富的扩展模块、工业外围设备和热管理功能，reComputer for Jetson旨在帮助您通过将流行的DNN模型和ML框架部署到边缘，并利用高性能进行推断，加速和扩展下一代AI产品。



reComputer J1020 v2 是一款功能强大且紧凑的智能边缘盒子，采用Jetson Nano生产模块构建，将现代人工智能性能带入边缘。内置的J202载板与Jetson Nano开发人员套件具有相同的尺寸，包括4个USB 3.0端口，M.2 Key M插槽，HDMI和DP接口。整个系统还包括风扇和电源适配器。

对于人工智能初学者，如果你想获得关键的人工智能技能，并深入学习深度学习。[英伟达深度学习学院（DLI）](https://www.nvidia.com/en-us/training/)提供实践性、动手操作的培训和认证。请查阅 Seeed [wiki](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Started_Guide/) 指南，包括如何开始使用Jetson Nano以及构建不同的项目。


对解决方案提供商来说，reComputer J1020 v2预装了Jetpack 4.6.1，配有丰富的I/O接口，这款AI盒简化了开发并适用于部署在边缘AI解决方案提供商的领域，涵盖视频分析、物体检测、自然语言处理、医学成像和各个智慧城市、安全、工业自动化、智能工厂等行业的机器人技术。

## 特点

- **NVIDIA Jetson Nano Dev Kit 替代品：**采用 Jetson Nano 4GB Production 模块构建的掌上边缘人工智能设备，扩展了丰富的 I/O 接口：GPIO、CSI、千兆以太网、4 个 USB 3.0 Type A，内置 16 GB eMMC 存储，可通过此处查看 SSD 存储扩展。
- **128 个 NVIDIA CUDA® 核心提供 0.5 TFLOPs（FP16）**，可运行用于图像分类、目标检测、分割和语音处理等应用的人工智能框架和模型。
- **预安装 NVIDIA Jetpack**，JetPack SDK 包括了面向板级支持包（BSP）、Linux 操作系统、NVIDIA CUDA、cuDNN 和 TensorRT 等深度学习、计算机视觉、GPU 计算和多媒体处理等软件库。
- **支持整个** [Jetson 软件堆栈](https://developer.nvidia.com/embedded/develop/software) 和由 Seeed Edge AI 合作伙伴提供的各种 [开发者工具](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/)，用于构建快速而强大的人工智能应用。

## 规格说明

<table>
  <thead>
    <tr>
      <th>规格说明</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Module</td>
      <td colspan='2'>Jetson Nano 4GB (production version)</td>
      <td>Nano (not production version)</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Card not included)</td>
    </tr>
    <tr>
      <td>SD Card Slot</td>
      <td>Included (On the carrier board)</td>
      <td>-</td>
      <td>Included (On the module)</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)
      </td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Gigabit Ethernet</td>
      <td colspan='3' align='center'>1*RJ45 Gigabit Ethernet Connector (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Type A; 
2 * USB 2.0 Type A;
1 * USB Type C for device mode;
1 * USB Type C for 5V power input</td>
      <td>4 * USB 3.0 Type-A ；
1 * Micro-USB port for device mode;</td>
      <td>4 * USB 3.0 Type-A; 
1 * Micro-USB port for 5V power input  or for device mode</td>
    </tr>
    <tr>
      <td>CSI Camera Connect</td>
      <td colspan='3' align='center'>2*CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1*HDMI Type A</td>
      <td colspan='2' align='center'>1*HDMI Type A; 
1*DP</td>
    </tr>
    <tr>
      <td>FAN</td>
      <td colspan='3' align='center'>1* FAN connetcor (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1*M.2 Key E</td>
      <td>1*M.2 Key E (Disabled)</td>
      <td>1*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1*RTC Socket</td>
      <td>1*RTC Socket
1*RTC 2-pin</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Multifunctional port</td>
      <td colspan='3' align='center'>1* 40-Pin header</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>	
9-12V Power adapter not included(Barrel Jack 5.5/2.5mm)</td>
      <td>DC Jack 5V⎓4A；
Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (with case)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack to reComputer J1020v2

:::info
请参考此[wiki](/reComputer_J1010_J101_Flash_Jetpack)页面，获取更多信息，因为J1020v2使用J101载板。
:::