---
description: Train_AI_With_A1102
title: 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /cn/train_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 3/12/2024
  author: Zeke
---

# 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型

SenseCAP A1102 是一款功能强大的传感器设备，结合了先进的 AI 功能和易于部署的特性。本指南将引导您使用 **SenseCraft AI** 应用程序在 A1102 上部署 AI 模型，提供配对、配置和测试的分步说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **SenseCAP A1102 入门**

### **什么是 SenseCAP A1102？**

SenseCAP A1102 是一款专为边缘 AI 应用设计的智能摄像头传感器。配备 8GB 内存，它可以：

- 部署自定义 AI 模型。
- 自动保存识别的图像。
- 实现高精度的实时识别。

### **要求**

开始之前，请确保您拥有：

- SenseCAP A1102 设备。
- 在您的智能手机上安装 **SenseCraft AI** 应用程序。
- 任何用于部署的预训练 AI 模型。

## **配置 SenseCAP A1102**

### 启动 Vision AI 摄像头

:::tip
如果您需要修改 AI 摄像头设置，必须按照以下步骤启动 AI 摄像头。

如果您只需要修改 LoRaWAN 传输相关设置，可以跳过此部分。
:::

按照以下说明将 Type-C 端口连接到您的计算机上的 A1102。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

如果连接正确，您可以看到两个指示灯亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **访问高级设置**

在底部导航栏中选择"用户"，然后点击"设备蓝牙配置"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

滑动到底部并选择"SenseCAP A1102"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

按住 SenseCAP A1102 上的电源按钮 **三秒钟** 以启用配对模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

配对完成后，在 SenseCraft AI 应用程序中点击 **高级设置**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

再次点击 **高级设置** 导航到其他配置选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

## **部署 AI 模型**

### **选择 AI 模型**

从设置菜单中，选择您想要部署的 AI 模型。可以从预加载的模型中选择或上传自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **配置模型参数**

设置参数，如：

- **置信度水平**：调整物体识别的阈值（例如，80% 置信度）。
- **保存识别图像**：启用或禁用将识别的图像保存到存储卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **测试和运行模型**

### **预览相机拍摄**

部署模型后，直接在应用中预览相机拍摄的图像，以确保模型按预期工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **查看设备信息**

返回应用主页查看 A1102 的设备信息，如模型状态、连接性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **查看识别结果**

查看识别数据和日志。例如，设置报告间隔（例如，每 5 分钟）来跟踪识别的物体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **访问 SD 卡**

找到 A1102 设备上的缝隙，轻轻插入螺丝刀。施加一点力将其撬开。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

找到四个螺丝孔，旋转旋钮将其打开。确保在转动时施加一致的压力，以确保它们松开。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

螺丝松开后，取下盖子以访问 SD 卡插槽。然后您可以取出 SD 卡来读取存储在其中的信息。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **自动图像保存**

A1102 配备 8GB 内部存储器，可以自动将识别的图像保存到存储卡。稍后访问和检索这些图像用于分析或报告。

:::tip
A1102 配备 8GB 存储器，能够在识别到目标时自动将图像保存到存储卡。当我们需要访问这些图像信息时，可以直接从存储卡中提取和访问所需的图像数据。
:::

## **技术支持与产品讨论**

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
