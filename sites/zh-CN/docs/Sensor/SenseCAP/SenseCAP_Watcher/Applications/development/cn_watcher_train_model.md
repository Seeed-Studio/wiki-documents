---
description: 在 Watcher 上部署来自 SenseCraft 的 AI 模型
title: 为 Watcher 训练模型
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /cn/training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
---

# 为 Watcher 训练模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

本 WiKi 文章将教您如何使用我们的 SenseCraft 来训练您自己的 AI 模型并将其部署到我们的 Watcher 上。这将是一个非常有趣的过程。如果您还不知道什么是 SenseCraft，请点击[这里](https://sensecraft.seeed.cc/)。这是一个允许我们在 Seeed Studio 设备上部署各种开源 AI 模型的平台。

## SenseCraft 网站设置 AI 模型

### 步骤 1 . 打开 [SenseCraft](https://sensecraft.seeed.cc/) 网站

点击顶部菜单栏中的"Products"查看下拉选项，然后选择"SenseCraft AI"点击。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>


### 步骤 2 . 设置训练类型

:::tip
**_我们建议在这里使用 Grove Vision AI (V2) 从摄像头收集训练数据，因为 Watcher 使用与 Grove Vision AI V2 相同的芯片（Arm Cortex-M55），所以选择 Grove Vision AI V2 来训练 Watcher 的模型，用于拍照的最佳设备是要部署到的设备，这将直接影响最终的准确性。_**
:::

为了方便起见，这里使用计算机摄像头来捕获数据。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### 步骤 3 . 收集数据

**训练步骤**

- 添加类别
- 修改您的类别标签
- 在您选择的类别中点击"Hold to Record"
- 选择 Grove Vision AI(V2)
- 开始训练

在收集分类数据中，您可以添加您想要的类别，在这里，我添加了汽车和娃娃作为我的类别并修改了标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>


:::tip
获得的数据越多，像素越清晰，训练结果就越好。
:::

训练后，您需要点击"Click here"标签下的开始训练。

### 步骤 4 . 选择模型

训练完成后您可以看到您的模型文件

- 点击您的模型文件
- 点击"Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### 步骤 5 . 描述模型

请提供您的**模型名称**、**模型摘要**、**模型介绍**、**模型部署准备**。如果您将模型公开，这些信息将对每个人都非常有帮助。这只是一个测试，所以写得比较匆忙。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>


:::tip
在支持的设备中选择 SenseCAP Watcher 和 Grove-Vision AI V2。
:::

### 步骤 6 . 设置模型参数

您可以根据您的模型选择您想要的 AI 框架。

置信度阈值
- 置信度是指模型对其预测分配的确定性或概率水平。

- 置信度是模型对其预测结果的确定程度或概率。它通常以百分比表示，范围从 0% 到 100%。

IOU 阈值
- IoU 用于评估预测边界框与真实边界框相比的准确性。

- IoU 是评估目标检测模型性能的重要指标。它测量预测边界框和实际边界框之间的重叠程度。

- 0% 表示没有重叠。
- 100% 表示完全重叠。

设置完所有内容后，点击确认。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

返回预训练模型并点击我的模型以查看您训练的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft APP 设置 Watcher

### 步骤 1 . 选择您的 Watcher
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 2 . 找到手动设置任务并进入
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 3 . 勾选 '使用 TinyML 模型'
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 4 . 找到您部署的模型

输入名称或向下滚动找到您部署的 AI 模型并勾选它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 5 . 设置阈值和条件

置信度是模型对其预测结果的信心程度，通常表示为 0 到 1 之间的值，或 0% 到 100% 之间的百分比。
例如，模型输出的置信度为 80% 表示它认为预测正确的概率为 80%。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 6 . 设置任务名称

设置任务名称，这样您就可以直接将其发送到观察器来执行您的模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>


### 步骤 7 . 等待 Watcher 部署模型

一旦您选择了 AI 模型并设置了相应的参数，您就可以等待观察器下载它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>


:::tip
在此期间，由于其他外部问题，下载可能会失败。您只需要重新选择并设置参数，然后继续下载。
:::

## Watcher AI 模型展示

### 结果演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

这是我的 AI 模型在 Watcher 上的简单展示效果，期待大家的 AI 模型在 Watcher 上闪闪发光！

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
