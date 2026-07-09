---
description: Deploy_AI_With_A1102
title: 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型
keywords:
  - Sensor Vision_AI_V2
  - SenseCAP A1102
  - SenseCraft AI
  - Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /deploy_ai_with_a1102
sidebar_position: 3
last_update:
  date: 12/31/2025
  author: Twelve
createdAt: '2025-11-26'
updatedAt: '2025-12-31'
url: https://wiki.seeedstudio.com/cn/deploy_ai_with_a1102/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 SenseCraft AI 在 SenseCAP A1102 上部署 AI 模型

## 概述

SenseCAP A1102 是一款功能强大的传感器设备，将先进的 AI 能力与便捷的部署方式相结合。本指南将引导你通过 **SenseCraft AI** 网站在 A1102 上部署官方或自定义 AI 模型，并提供配置、部署和测试的分步说明。

<div class="info-section">
  <div class="section-header">
      <h2>在 SenseCAP A1102 上部署 AI 模型</h2>
      <p>训练并部署你的 AI 模型：为你的 LoRaWAN 摄像头加载自定义或官方 AI 模型，实现实时分析。SenseCAP A1102 能够为你的应用带来灵活的 AI 驱动洞察。</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>结合 LoRaWAN 摄像头的自定义 AI 模型部署</h3>
              <p>借助 SenseCAP A1102，你可以训练自己的 AI 模型并将其直接部署到支持 LoRaWAN 的摄像头上，从而实现实时目标检测。与 LoRaWAN 的无缝集成确保你的 AI 驱动洞察能够在现场被获取并付诸行动。</p>
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
              <p>SenseCAP A1102 支持多种预训练 AI 模型，同时也支持使用公开或自定义数据集（例如 Roboflow Universe 上的数据集）来训练自定义模型。这种灵活性使你能够轻松部署专门针对自身应用场景定制的模型。</p>
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
              <h3>多种应用场景</h3>
              <p>SenseCAP A1102 可部署在多种真实应用场景中。无论是用于农业中监测植物叶片健康状况、用于城市环境中检测停车位占用情况，还是用于海事领域中跟踪船舶位置，你的 AI 模型都可以根据具体需求进行适配。</p>
          </div>
      </li>
  </ul>
</div>


## 前置条件

### 所需硬件

- SenseCAP  A1102 设备  
- USB Type-C 数据线  
- 电脑（PC）  

### 所需软件
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

## 官方 AI 模型部署流程

**步骤 1.** 通过 **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`** 进入 SenseCAP A1102 工作空间，或使用此[工作空间直达链接](https://sensecraft.seeed.cc/ai/device/local/37)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2. 通过串口连接到我们的平台**

- 使用 Type-C 数据线将设备连接到电脑（请确保连接的是上方的 Type-C 接口，即 Himax 串口，如下图所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- 点击 `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 在弹出的窗口中选择正确的串口并点击 `Connect`

如果选择了正确的端口，你将能够通过 Invoke 查看预览视频流，并正常继续选择和烧录模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3. 选择你想要部署到设备上的 AI 模型**

- 点击 `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- 在 SenseCraft AI 中从 Public Models 或你自己训练的模型中进行选择

- 点击模型后将开始烧录流程

:::note
你的设备现在正在使用你部署的 AI 模型进行检测并上传结果！请前往你的 APP 或其他平台查看。
:::

## 自定义 AI 模型部署流程

:::warning note
我们的 AI 模型可以训练多个类别，但由于识别结果是通过 **S2100** 进行传输，因此只有**前 9 个类别**可以被有效上报。
:::

**步骤 1. 从 Roboflow 获取数据集**

- [创建一个免费的 Roboflow 账号](https://app.roboflow.com/) 

- 如果你需要开源数据集，请访问 [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- 如果你想使用自己的图片并进行标注以获取数据集，请访问 [Roboflow](https://app.roboflow.com/) 创建一个 **Project**

:::warning note
当使用你自己的图像时，请特别注意标签顺序。
只有前 9 个类别（标签索引 0–8）是有效的，并且可以被 A1102 识别。
如果你的数据集包含超过 9 个类别，你必须在导出模型前删除其他类别，仅保留所需的 9 个类别。
:::

**步骤 2. 从 Roboflow 导出数据集**

- 点击 Overview 并检查类别（classes）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
显示的类别顺序与标签索引顺序一一对应。因此，只有前 9 个类别（标签索引 0–8）才能在 A1102 上被正确上传为识别结果。
如果你的模型包含超过 9 个类别，你必须通过将数据集克隆到你自己的项目中、删除其他标签，然后重新导出数据集的方式，仅保留你需要的 9 个类别。
:::

- 在项目中，点击 `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- 点击 `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- 点击 `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- 选择 `COCO` 和 `Show download code`，然后点击 `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- 复制 **Raw URL**，该链接将在 AI 模型训练过程中使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

**步骤 3. 使用数据集训练你的 AI 模型**

- 按照[模型训练快速入门](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma#训练-数据集-导出-模型)使用你准备好的数据集来训练 AI 模型。

- 训练完成后，将训练好的模型导出为 .tflite 格式，该文件将用于在设备上进行部署。

**步骤 4. 上传并烧录自定义 AI 模型**

- 通过 **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`** 进入 SenseCAP A1102 工作空间，或使用此[工作空间直达链接](https://sensecraft.seeed.cc/ai/device/local/37)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

- 通过串口连接到我们的平台

- 使用 Type-C 数据线将设备连接到电脑（请确保连接的是上方的 Type-C 接口，即 Himax 串口，如下图所示）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- 点击 `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 选择正确的串口并在弹出窗口中点击 `Connect`

- 点击 `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- 配置你的模型信息

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: 关于训练和导出 TFLite 模型的详细说明，请参考此[指南](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma/)

- `Object`: 与模型标签顺序（从 0 到 8）对应的类别名称。最多仅支持 9 个类别——任何额外的类别都不会被显示。

- 点击 `Send` 并等待烧录过程完成

## 在 [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard) 中的结果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- 第一个数值是数据上报的时间戳

- 接下来的九个数值表示每个类别索引（从 0 到 8）的置信度分数（measurementValue）。

- 最后一个数值携带模型信息，包括与已部署 AI 模型相关的元数据。

## 在 [TTN](https://eu1.cloud.thethings.network/console/) 中的结果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 每个结果包含 10 个测量值，对应 10 个 RS485 通道。

- 前九个测量值表示每个类别索引（从 0 到 8）的置信度分数（measurementValue）。

- 第十个测量值携带模型信息，包括与已部署 AI 模型相关的元数据。

## 常见问题

**问：我可以上传什么类型的自定义模型？**

答：你可以上传扩展名为 .tflite 的模型。你可以按照 [Model training quick start](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_sscma/#training-dataset-exported-model) 中的说明来训练并导出你自己的模型。

## **技术支持与产品讨论**

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
