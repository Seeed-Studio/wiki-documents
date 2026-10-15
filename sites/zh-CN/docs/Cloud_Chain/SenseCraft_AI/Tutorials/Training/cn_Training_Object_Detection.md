---
sidebar_position: 3
description: 使用快速训练或图像采集工作流，在 SenseCraft AI 中创建、训练、测试和部署自定义目标检测模型。
title: 使用 SenseCraft AI 进行目标检测训练
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
createdAt: '2024-11-27'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/
---

# 使用 SenseCraft AI 训练目标检测模型

## 目标检测的特性

Seeed SenseCraft AI 平台是一款专为目标检测任务打造的高效 AI 训练工具。基于先进的 **YOLO - World 目标检测模型**，它提供两种便捷的训练方式：

- **快速训练**

特点：无需图像数据。只需输入目标名称，即可快速生成单类别目标检测模型。
优势：适用于简单场景，可实现快速建模与部署。

- **图像采集训练**

特点：将目标名称与上传的图像数据结合进行训练。

优势：利用多样化的图像数据显著提升生成模型的检测精度，适用于对精度要求较高的应用场景。

通过这两种方式，SenseCraft 平台能够满足多样化的目标检测模型训练需求，在保证易用性的同时简化 AI 开发的复杂度，并兼顾精度表现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>打开 SenseCraft AI Training 🖱️</font></span></strong>
    </a>
</div><br />

## 快速训练

我们将创建一个用于**识别人类**的简单示例。快速训练功能利用 YOLO – World 目标检测模型的以下核心特性：

快速训练功能利用 YOLO 的优势，高效创建单类别检测模型。通过结合预训练权重、文本语义和高效特征提取，它可以在无需图像数据的情况下，为诸如“human”这样的目标生成定制模型。

### 步骤 1. 确定目标名称

在文本框中输入目标名称。然后点击 **'Start Training'**。

:::tip
训练过程将持续 1-3 分钟，请耐心等待！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 训练并上传模型

完成模型训练后，模型将被部署，并选择 Grove Vision AI (V2) 作为部署设备。然后选择正确的串口进行连接，最后耐心等待 1-3 分钟，即可完成模型训练与部署！

:::caution
目前在目标检测中，设备选择仅支持 **Grove Vision AI (V2)**。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### 结果演示

完成以上步骤后，模型将成功部署并运行。但需要注意 **Confidence Threshold** 和 **IoU Threshold value** 的设置，它们会影响模型的识别能力。

:::tip
**Confidence Threshold：** 模型认为检测结果有效所需的最低置信度分数，用于过滤低置信度预测。

**IoU Threshold：** 将预测框判定为真正例所需的最小交并比（IoU）阈值，用于确保预测框与真实框之间重叠度测量的准确性。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## 图像采集训练

我们将制作一个**识别耳机**的示例。基于 YOLO – World 目标检测模型，你可以对文本和图像进行自定义训练，从而提升生成模型的检测精度。

### 步骤 1. 确定目标名称

首先在文本框中输入目标名称，然后选择 **Grove Vision AI (V2)** 进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果连接成功，右侧的框中会出现摄像头的实时预览画面。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 采集图像

然后将摄像头对准目标物体并点击 **'Capture'**，接着用红框框选目标物体，最后点击 **'Confirm'**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
图像素材越多，模型的识别效果越好。
:::

### 步骤 3. 训练并上传模型

点击 **'Training'**，然后耐心等待模型完成训练。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

最后就可以进行模型部署了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### 结果演示

完成以上步骤后，模型将成功训练并部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## 相关指南

- [使用 SenseCraft AI 训练分类模型](/cn/sensecraft-ai/tutorials/sensecraft-ai-training-classification/)
- [探索 SenseCraft AI 平台](/cn/sensecraft-ai/overview/)
- [浏览 SenseCraft AI 文档中心](/cn/sensecraft-ai/sensecraft-ai-main/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
