---
description: 在 Watcher 上从 SenseCraft 部署 AI 模型
title: 为 Watcher 训练模型
image: https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png
slug: /training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
createdAt: '2024-10-11'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/cn/training_model_for_watcher/
---

# 为 Watcher 训练模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

本 WiKi 文章将教你如何使用我们的 SenseCraft 来训练你自己的 AI 模型，并将其部署到 Watcher 上。这将是一个非常有趣的过程。如果你还不知道 SenseCraft 是什么，请点击[这里](https://sensecraft.seeed.cc/)。这是一个允许我们在 Seeed Studio 设备上部署各种开源 AI 模型的平台。

## 在 SenseCraft 网站上配置 AI 模型

### 步骤 1 . 打开 [SenseCraft AI](https://sensecraft.seeed.cc/ai)

打开 [SenseCraft AI](https://sensecraft.seeed.cc/ai) 平台，然后导航到 **`Models`** > **`Training`** 开始训练模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2 . 设置训练类型

:::tip
**_我们建议在此处使用 Grove Vision AI (V2) 从摄像头采集训练数据，因为 Watcher 使用与 Grove Vision AI V2 相同的芯片（Arm Cortex-M55），所以选择 Grove Vision AI V2 来训练 Watcher 的模型。用于拍照的最佳设备就是最终部署的设备，这将直接影响最终的准确率。_**
:::

为方便起见，这里使用电脑摄像头来采集数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### 步骤 3 . 采集数据

**训练步骤**

- 添加类别
- 修改你的类别标签
- 在你选择的类别中点击 "Hold to Record"
- 选择 Grove Vision AI(V2)
- 开始训练

在 Collect Classification Data 中，你可以添加你想要的类别，这里我添加了 car 和 doll 作为我的类别并修改了标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
获取的数据越多、像素越清晰，训练效果就会越好。
:::

训练完成后，你需要点击 Start Training 下方的 "Click here" 标签。

### 步骤 4 . 选择模型

训练完成后，你可以看到你的模型文件

- 点击你的模型文件
- 点击 "Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### 步骤 5 . 描述模型

请填写你的 **Model Name**、**Model Excerpt**、**Model Introduction**、**Model Deployment Preparation**。如果你将模型设为公开，这些信息将对所有人非常有帮助。这里只是测试，所以写得比较简单。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
在 Supported Devices 中选择 SenseCAP Watcher 和 Grove-Vision AI V2。
:::

### 步骤 6 . 设置模型参数

你可以根据你的模型选择想要使用的 AI Framework。

置信度阈值

- 置信度是指模型对其预测结果所赋予的确定性或概率水平。

- 置信度是模型对其预测结果的确定程度或概率，通常以百分比形式表示，范围从 0% 到 100%。

IoU 阈值

- IoU 用于评估预测边界框与真实边界框的准确性。

- IoU 是评估目标检测模型性能的重要指标，它衡量预测边界框与实际边界框之间的重叠程度。

- 0% 表示没有重叠。
- 100% 表示完全重叠。

完成所有设置后，点击 Confirm。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

打开 **`Models`** > **`My Models`** 查看你训练好的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## 在 SenseCraft APP 中配置 Watcher

### 步骤 1 . 选择你的 Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 2 . 找到 Manually Set Up Task 并进入

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 3 . 勾选“Use TinyML Model”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 4 . 找到你部署的模型

输入名称或向下滚动，找到你部署的 AI 模型并勾选它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 5 . 设置阈值和条件

置信度是模型对其预测结果的信心程度，通常表示为 0 到 1 之间的数值，或 0% 到 100% 之间的百分比。
例如，模型输出的置信度为 80% 表示它认为该预测正确的概率为 80%。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 6 . 设置任务名称

设置任务名称，这样你就可以直接将其发送到 Watcher 来执行你的模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 7 . 等待 Watcher 部署模型

当你选择好 AI 模型并设置好相应参数后，你就可以等待 Watcher 下载它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
在此期间，下载可能会因为其他外部问题而失败。你只需要重新选择并设置参数，然后继续下载即可。
:::

## Watcher AI 模型展示

### 结果演示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

这是我的 AI 模型在 Watcher 上的简单展示效果，期待大家的 AI 模型也能在 Watcher 上大放异彩！

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
