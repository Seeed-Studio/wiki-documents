---
description: Getting Started with Grove Vision AI V2.
title: Grove Vision AI Module V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2
last_update:
  date: 3/12/2024
  author: guiyingzhao
---

# Grove Vision AI Module V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## 介绍

它是一个基于单片机的视觉AI模块，由Arm Cortex-M55和Ethos-U55驱动。它支持TensorFlow和PyTorch框架，并与Arduino IDE兼容。通过SenseCraft AI算法平台，可以将训练好的ML模型部署到传感器上，而不需要编码。它具有标准的CSI接口、车载数字麦克风和SD卡插槽，非常适合各种嵌入式AI视觉项目。

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
### 特点

- **强大的AI处理能力**：搭载WiseEye2 HX6538处理器，配备双核Arm Cortex-M55和集成的Arm Ethos-U55神经网络单元。
- **多样化的AI模型支持**：轻松部署SenseCraft AI提供的现成或自定义AI模型，包括Mobilenet V1、V2、Efficientnet-lite、Yolo v5 & v8等。支持TensorFlow和PyTorch框架。
- **丰富的外设设备**：包括PDM麦克风、SD卡槽、Type-C、Grove接口等其他外设，功能更加丰富。
- **高度兼容性**：兼容XIAO系列、Arduino、Raspberry Pi、ESP开发板等，便于进一步的开发和集成。
- **完全开源**：所有代码、设计文件和原理图均可进行修改和使用。

### 应用

- **工业自动化**：支持质量检测、预测性维护、语音控制等应用。
- **智慧城市**：可用于设备监控、能源管理等城市应用。
- **交通运输**：支持状态监测、位置跟踪等功能。
- **智能农业**：适用于环境监测等农业任务。
- **移动物联网设备**：适用于可穿戴设备、手持设备等移动物联网应用。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>

要充分发挥Grove Vision AI V2的功能，您可能需要单独购买CSI摄像头，我们推荐使用[**OV5647-62 FOV树莓派相机模块**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

#### 连接到CSI接口摄像头

一旦您准备好Grove Vision AI V2和摄像头，您就可以通过CSI连接电缆将它们连接起来。连接时，请注意排针的方向，不要插反。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

<!-- :::提示
在2024年2月21日之前购买Grove Vision AI V2的用户不具备对树莓派相机的支持。然而，从这个日期之后购买的用户将具有对支持图像的特定型号的支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>
::: -->

## 启动/复位/刷写驱动程序

### 启动

如果您使用了一些不寻常的方法导致Grove Vision AI完全无法正常工作（在软件级别），那么您可能需要将设备置于BootLoader模式以恢复设备。以下是如何进入BootLoader模式的方法。

**方法1**

请断开Grove Vision AI与计算机之间的连接电缆，然后按住设备上的Boot按钮而不释放。此时，请使用Type-C类型数据电缆将Grove Vision AI连接到计算机，然后再次释放。此时设备将进入BootLoader模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法2**

将Grove Vision AI连接到计算机，通过按下Boot按钮然后快速按下复位按钮即可进入BootLoader模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### 复位

如果您遇到设备数据突然无法上传或图像卡住的问题，您可以尝试使用复位按钮重新启动设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### 驱动程序

如果您连接Grove Vision AI V2到计算机后发现无法识别设备，那么您可能需要在计算机上安装CH343驱动程序。以下是一些下载和安装CH343驱动程序的链接。

- Windows供应商VCP驱动一键安装程序：[CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows供应商VCP驱动程序：[CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC驱动一键安装程序：[CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC驱动程序：[CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- macOS供应商VCP驱动程序：[CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

## 入门指南

### 使用Arduino入门

<div class="all_container">   <div class="getting_started">       <div class="start_card_wrapper">           <a href= "/grove_vision_ai_v2_software_support/#-arduino-library-introduction-" class="getting_started_label2"> Arduino（Seeed Studio XIAO）</a>           <br/>对象识别或串行通信       </div>   </div> </div>

### 使用SenseCraft AI入门

<div class="all_container">   <div class="getting_started">       <div class="start_card_wrapper">           <a href= "/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI模型助手</a>           <br/>无代码体验AI模型部署和观察       </div>   </div> </div>

### 将Grove Vision AI V2连接到Home Assistant

<div class="all_container">   <div class="getting_started">       <div class="start_card_wrapper">           <a href= "/connect_vision_ai_v2_to_ha" class="getting_started_label2"> 连接到Home Assistant</a>           <br/>将Grove Vision AI V2整合到Home Assistant中       </div>   </div> </div>

## 故障排除

### Q1：Grove Vision AI是否能在输出实时屏幕的同时看到XIAO的结果信息？

不行的。考虑到帧率或图像推理的速度，我们目前不支持同时执行这两个任务。如果连接了XIAO，则只能接收上报的识别信息，而不能接收实时帧。

### Q2：Grove Vision AI V2支持哪些摄像头？它只支持OV5647-62吗？

您可以在[此处](https://chat.openai.com/Grove-vision-ai-v2-camera-supported)查看。目前，我们已经为OV5642系列相机编写了驱动程序，因此Grove Vision AI V2支持全系列树莓派OV5647相机，例如OV5647-62、OV5647-67和OV5647-160。其他CSI摄像头理论上也受支持，但由于某些相机没有为它们编写驱动程序，或者它们本身没有颜色处理单元，所以可能存在颜色仅为绿色的问题，全彩色的丢失可能会对识别的准确性产生影响。

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI模块V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[PDF]** [电路图](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [布局图](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module

## **技术支持与产品讨论**

感谢您选择我们的产品！我们在这里提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

