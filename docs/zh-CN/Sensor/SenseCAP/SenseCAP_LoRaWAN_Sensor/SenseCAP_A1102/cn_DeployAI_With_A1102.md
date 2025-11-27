---
description: Deploy_AI_With_A1102
title: 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
- Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /cn/deploy_ai_with_a1102
sidebar_position: 3
# sidebar_class_name: hidden
last_update:
  date: 11/26/2025
  author: Twelve
---

# 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型

## 概述

SenseCAP A1102 是一款功能强大的传感器设备，结合了先进的 AI 功能和易于部署的特性。本指南将引导您使用 **SenseCraft AI** 网站在 A1102 上部署官方或自定义 AI 模型，提供配对、配置和测试的分步说明。

## 前提条件

### 所需硬件

- SenseCAP A1102 设备  
- USB Type-C 数据线  
- PC  

### 所需软件
- [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)

## AI 模型烧录过程

### 步骤 1. 打开我们的平台并在工作区中选择 A1102

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 通过串口连接到我们的平台

- 使用 Type-C 线缆将设备连接到您的 PC（确保连接到上方的 Type-C 端口，即 Himax 串口，如下图所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- 点击 `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 在弹出窗口中选择正确的串口并点击 `Connect`

如果选择了正确的端口，您将能够通过 Invoke 查看预览视频流，并正常进行模型选择和烧录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 选择要部署到设备的 AI 模型

- 点击 `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- 从公共模型或您在 SenseCraft AI 中训练的模型中选择

- 点击模型后烧录过程将开始

### 上传您自己的 AI 模型并部署到设备

:::warning note
我们的 AI 模型传输基于 **RS485**，仅支持 **最多 9 个识别类别**。  
:::

- 点击 `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- 配置您的模型信息

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`：有关训练和导出 TFLite 模型的详细说明，请参考此[指南](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma/)

- `Object`：与模型标签顺序对应的类别名称（从 0 到 8）。仅支持最多九个类别——任何额外的类别将不会显示。

- 点击 `Send` 并等待烧录过程

## 结果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 每个结果包含 10 个测量值，对应 10 个 RS485 通道：

- 前九个测量值表示每个类别索引（从 0 到 8）的置信度分数（measurementValue）。

- 第十个测量值携带模型信息，包括与部署的 AI 模型相关的元数据。

## **技术支持与产品讨论**

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
