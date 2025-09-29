---
description: 入门指南 Grove Vision AI V2。
title: Grove Vision AI 模块 V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2
last_update:
  date: 12/12/2023
  author: Citric
---

# Grove Vision AI 模块 V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

这是一个基于 MCU 的视觉 AI 模块，采用 Arm Cortex-M55 和 Ethos-U55 提供支持。它支持 TensorFlow 和 PyTorch 框架，并兼容 Arduino IDE。通过 SenseCraft AI 算法平台，可以将训练好的机器学习模型部署到传感器上，无需编写代码。该模块配备标准 CSI 接口、板载数字麦克风和 SD 卡插槽，非常适合各种嵌入式 AI 视觉项目。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
请使用基于 Chrome 引擎的 Chrome 或 Edge 浏览器。
:::

### 特性

- **强大的 AI 处理能力**：采用 WiseEye2 HX6538 处理器，配备双核 Arm Cortex-M55 和集成的 Arm Ethos-U55 神经网络单元。
- **多样化的 AI 模型支持**：轻松部署 SenseCraft AI 提供的现成模型或自定义 AI 模型，包括 Mobilenet V1、V2、Efficientnet-lite、Yolo v5 和 v8。支持 TensorFlow 和 PyTorch 框架。
- **丰富的外设设备**：包括 PDM 麦克风、SD 卡插槽、Type-C 接口、Grove 接口及其他外设。
- **高度兼容性**：兼容 XIAO 系列、Arduino、Raspberry Pi、ESP 开发板，便于进一步开发。
- **完全开源**：所有代码、设计文件和原理图均可修改和使用。

### 应用场景

- 工业自动化：质量检测、预测性维护、语音控制等。
- 智慧城市：设备监控、能源管理等。
- 交通运输：状态监控、位置追踪等。
- 智慧农业：环境监测等。
- 移动物联网设备：可穿戴设备、手持设备等。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.png" style={{width:1000, height:'auto'}}/></div>

要充分利用 Grove Vision AI V2 的功能，您可能需要单独购买 CSI 摄像头，我们推荐 [**OV5647-62 FOV 摄像头模块（适用于 Raspberry Pi）**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html)。

#### 连接到 CSI 接口摄像头

当您准备好 Grove Vision AI V2 和摄像头后，可以通过 CSI 连接线将它们连接起来。连接时，请注意针脚排的方向，避免反向插入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## 启动 / 重置 / 驱动程序

### 启动

如果您使用了一些不寻常的方法，导致 Grove Vision AI 在软件层面完全无法正常工作，那么您可能需要将设备置于 BootLoader 模式以恢复设备。以下是进入 BootLoader 模式的方法。

**方法 1**

请断开 Grove Vision AI 与您的计算机之间的连接线，然后按住设备上的 Boot 按钮并保持不松开。此时，请使用 Type-C 数据线将 Grove Vision AI 连接到您的计算机，然后再松开按钮。此时设备将进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法 2**

在 Grove Vision AI 已连接到您的计算机的情况下，您可以通过按下 Boot 按钮，然后快速按下 Reset 按钮来进入 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### 重置

如果您遇到设备数据突然无法上传或图像卡住的问题，可以尝试使用 Reset 按钮重新启动设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### 驱动程序

如果您发现 Grove Vision AI V2 在连接到您的计算机后无法被识别，那么您可能需要在计算机上安装 CH343 驱动程序。以下是下载和安装 CH343 驱动程序的链接。

- Windows Vendor VCP 驱动程序一键安装程序：[CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows Vendor VCP 驱动程序：[CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC 驱动程序一键安装程序：[CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC 驱动程序：[CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- macOS Vendor VCP 驱动程序：[CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

:::提示
在 Linux 上使用时，您需要添加以下内容，以下是 UBUNTU 的配置，其他系统类似，但不会列出它们：
```cpp
sudo echo 'USBSYTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE:="0666"' > /etc/udev/rules.d/99-grove-vision-ai.rules
sudo udevadm control --reload-rules
sudo udevadm trigger 
```
:::

### Bootloader 恢复工具手册

本部分介绍如何恢复 Grove Vision AI (WE2) 模块的 Bootloader。恢复工具是一种软件工具，可用于在 Bootloader 损坏时恢复 Grove Vision AI (WE2) 模块的 Bootloader，或为 Grove Vision AI (WE2) 模块刷新新的固件。

#### 前置条件

- 任何支持 Arduino IDE 且具有 I2C 接口的开发板。
- Grove Vision AI V2
- 4-Pin 连接线

#### 软件安装

1. 从 [官方网站](https://www.arduino.cc/en/software) 安装 Arduino IDE。
2. 从 [GitHub 仓库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) 下载最新版本的 Seeed_Arduino_SSCMA 库。
3. 在 Arduino IDE 中选择 **Sketch > Include Library > Add .ZIP Library**，然后选择下载的文件以添加库。
4. 在 Arduino IDE 中打开 `we2_iic_bootloader_recover` 示例：**File > Examples > Seeed_Arduino_SSCMA > we2_iic_bootloader_recover**。
5. 将示例上传到您的 Arduino 开发板。

#### 硬件连接

使用 4-Pin 连接线将 Grove Vision AI (WE2) 模块连接到 Arduino 开发板的默认 I2C 接口。确保每根线连接到正确的引脚。

- SCL -> SCL (Grove Vision AI WE2)
- SDA -> SDA (Grove Vision AI WE2)
- VCC -> VCC (Grove Vision AI WE2, 3.3V)
- GND -> GND (Grove Vision AI WE2)

#### 使用方法

1. 确保您的 Arduino 开发板已连接到计算机，并且 Grove Vision AI (WE2) 模块已连接到 Arduino 开发板。
2. 在 Arduino IDE 中打开串行监视器。（或使用其他串行监视器软件，例如 minicom、PuTTY）
3. 等待检测到 Grove Vision AI (WE2) 设备。
4. 按下回车键以开始 Bootloader 恢复过程，等待过程完成。

:::注意
在将 Grove Vision AI V2 连接到您的计算机之前，请按住 BOOT 按钮，同时通过数据线连接到计算机，然后松开 BOOT 按钮。在某些情况下，您可能需要尝试 3-10 次才能成功恢复 Bootloader。
:::

## 入门指南

### Arduino 入门

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/cn/grove_vision_ai_v2_software_support/#-arduino-library-introduction-" class="getting_started_label2"> Arduino（Seeed Studio XIAO）</a>
          <br/>对象识别或串行通信
      </div>
  </div>
</div>

### SenseCraft AI 入门

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/cn/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI 模型助手</a>
          <br/>无需编码体验，部署和观察 AI 模型
      </div>
  </div>
</div>

### 将 Grove Vision AI V2 连接到 Home Assistant

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/cn/sensecraft-ai/application/application-for-homeassistant" class="getting_started_label2"> 连接到 Home Assistant</a>
          <br/>将 Grove Vision AI V2 集成到 Home Assistant
      </div>
  </div>
</div>

## 故障排除

### 问题 1：Grove Vision AI 是否可以在输出实时屏幕的同时查看 XIAO 的结果信息？

不可以。考虑到帧率或图像推理速度，我们目前不支持同时执行这两项任务。如果连接了 XIAO，则只能接收识别信息报告，而无法查看实时帧。

### 问题 2：Grove Vision AI V2 支持哪些摄像头？是否仅支持 OV5647-62？

您可以在[这里](/cn/Grove-vision-ai-v2-camera-supported)查看。目前我们已经为 OV5642 系列摄像头编写了驱动，因此 Grove Vision AI V2 支持全系列的 Raspberry Pi OV5647 摄像头，例如 OV5647-62、OV5647-67 和 OV5647-160。其他 CSI 摄像头理论上是支持的，但由于某些摄像头没有编写驱动程序或自身没有颜色处理单元，因此可能会出现颜色仅为绿色的问题，缺失全彩可能会对识别的准确性产生影响。

## 资源

- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[PDF]** [电路图](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [布局图](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip)
- **[Zip]** [物料清单](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[STP]** [Grove Vision AI V2 套件外壳 3D 模型](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/grove_vision_ai_v2_kit_case.stp)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>