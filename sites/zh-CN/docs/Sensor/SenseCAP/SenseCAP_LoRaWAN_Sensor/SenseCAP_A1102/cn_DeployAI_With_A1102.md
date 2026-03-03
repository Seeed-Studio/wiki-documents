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
  date: 12/31/2025
  author: Twelve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型

## 概述

SenseCAP A1102 是一款功能强大的传感器设备，结合了先进的 AI 功能和易于部署的特性。本指南将引导您使用 **SenseCraft AI** 网站在 A1102 上部署官方或自定义 AI 模型，提供配置、部署和测试的分步说明。

<div class="info-section">
  <div class="section-header">
      <h2>在 SenseCAP A1102 上部署 AI 模型</h2>
      <p>训练和部署您的 AI 模型：为您的 LoRaWAN 摄像头配备自定义或官方 AI 模型，实现实时分析。SenseCAP A1102 提供了将 AI 驱动的洞察引入您应用程序的灵活性。</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>使用 LoRaWAN 摄像头进行自定义 AI 模型部署</h3>
              <p>使用 SenseCAP A1102，您可以训练自己的 AI 模型并将其直接部署到支持 LoRaWAN 的摄像头上。这允许实时目标检测。与 LoRaWAN 的无缝集成确保您的 AI 驱动洞察在现场可访问且可操作。</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21h5v-5"></path>
              </svg>
          </div>
          <div class="info-content">
              <h3>使用预训练模型或自定义模型</h3>
              <p>SenseCAP A1102 支持广泛的预训练 AI 模型，以及使用公开可用或自定义数据集（如 Roboflow Universe 中的数据集）训练自定义模型的能力。这种灵活性使您能够轻松部署专门针对您用例定制的模型。</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
          </div>
          <div class="info-content">
              <h3>多样化应用</h3>
              <p>SenseCAP A1102 可以部署在各种实际应用中。无论是监测农业中植物叶片的健康状况、检测城市环境中的停车位占用情况，还是跟踪海洋区域中的船只位置，您的 AI 模型都可以适应您的特定需求。</p>
          </div>
      </li>
  </ul>
</div>


## 前提条件

### 所需硬件

- SenseCAP A1102 设备  
- USB Type-C 数据线  
- PC  

### 所需软件
- [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)

## 官方 AI 模型部署流程

### 步骤 1. 打开我们的平台并在工作区中选择 A1102

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 通过串口连接到我们的平台

- 使用 Type-C 线缆将设备连接到您的 PC（确保您连接到上方的 Type-C 端口，即 Himax 串口，如下图所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- 点击 `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 在弹出窗口中选择正确的串口并点击 `Connect`

如果选择了正确的端口，您将能够通过 Invoke 查看预览视频流，并正常进行模型选择和刷写。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 选择您要部署到设备的 AI 模型

- 点击 `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- 从公共模型或您在 SenseCraft AI 中训练的模型中选择

- 点击模型后将开始刷写过程

:::note
您的设备现在正在使用您部署的 AI 模型进行检测并上传结果！请导航到您的 APP 或其他平台查看。
:::

## 自定义 AI 模型部署流程

:::warning note
我们的 AI 模型可以训练多个类别，但由于识别结果通过 **S2100** 传输，只有**前 9 个类别**能够有效支持上报。
:::

### 步骤 1. 从 Roboflow 获取您的数据集

- [创建免费的 Roboflow 账户](https://app.roboflow.com/) 

- 如果您需要开源数据集，请导航到 [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- 如果您想使用自己的图片并标注它们以获取数据集，请导航到 [Roboflow](https://app.roboflow.com/) 创建一个**项目**

:::warning note
使用自己的图片时，请特别注意标签顺序。
只有前 9 个类别（标签索引 0–8）是有效的，可以被 A1102 识别。
如果您的数据集包含超过 9 个类别，您必须在导出模型之前通过删除其他类别来仅选择所需的九个类别。
:::

### 步骤 2. 从 Roboflow 导出您的数据集

- 点击 Overview 并检查类别

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
显示的类别顺序对应于标签索引顺序。因此，只有前 9 个类别（标签索引 0–8）可以在 A1102 上正确上传为识别结果。
如果您的模型包含超过 9 个类别，您必须通过将数据集克隆到您自己的项目中、删除其他标签，然后重新导出数据集来选择您需要的九个类别。
:::

- 在项目中，点击 `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- 点击 `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- 点击 `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- 选择 `COCO` 和 `Show download code`，然后点击 `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- 复制 **Raw URL**，它将在 AI 模型训练过程中使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3. 使用数据集训练您的 AI 模型

- 按照[模型训练快速入门](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma#training-dataset-exported-model)使用您准备的数据集训练您的 AI 模型。

- 训练完成后，以 .tflite 格式导出训练好的模型，该模型将用于在设备上部署。

### 步骤 4. 上传并刷写自定义 AI 模型 

- 打开我们的[平台](https://sensecraft.seeed.cc/ai/home)并在工作区中选择 A1102

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

- 通过串口连接到我们的平台

- 使用 Type-C 线缆将设备连接到您的 PC（确保您连接到上方的 Type-C 端口，即 Himax 串口，如下图所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- 点击 `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 选择正确的串口并在弹出窗口中点击 `Connect`

- 点击 `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- 配置您的模型信息

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`：有关训练和导出 TFLite 模型的详细说明，请参考此[指南](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma/)

- `Object`：与模型标签顺序对应的类别名称（从 0 到 8）。仅支持最多九个类别——任何额外的类别将不会显示。

- 点击 `Send` 并等待刷写过程

## 在 [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard) 中的结果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- 第一个值是数据上报时间戳

- 接下来的九个值表示每个类别索引（从 0 到 8）的置信度分数（measurementValue）。

- 最后一个值包含模型信息，包括与部署的 AI 模型相关的元数据。

## 在 [TTN](https://eu1.cloud.thethings.network/console/) 中的结果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 每个结果包含 10 个测量值，对应 10 个 RS485 通道。

- 前九个测量值表示每个类别索引（从 0 到 8）的置信度分数（measurementValue）。

- 第十个测量值包含模型信息，包括与部署的 AI 模型相关的元数据。

## 常见问题

**问：我可以上传什么类型的自定义模型？**

答：您可以上传扩展名为 .tflite 的模型。您可以按照[模型训练快速入门](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma/#training-dataset-exported-model)中的说明训练和导出您自己的模型。

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
