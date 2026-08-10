---
sidebar_position: 5
description: 如何使用训练（分类）
title: 训练 - 分类
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2025-08-18'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-training-classification/
---

# 训练类型 - 分类

分类是机器学习中的一项强大工具，它可以让你训练一个模型来识别和归类不同类型的数据。在 SenseCraft AI 平台中，分类功能可以让你基于训练过程中提供的图像，创建能够识别并区分各种物体、手势或场景的模型。

通过使用 SenseCraft AI 训练一个分类模型，你可以解锁广泛的应用场景，例如：

- 用于交互体验的手势识别

- 用于库存管理或质量控制的目标检测

- 用于自主导航或环境监测的场景分类

SenseCraft AI 平台简化了分类流程，让你无需具备深厚的机器学习专业知识，就能创建满足特定需求的自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

## 入门指南

在本综合指南中，我们将带你一步步完成在 SenseCraft AI 平台上训练分类模型的全过程。虽然我们主要以 XIAO ESP32S3 Sense 为例进行模型训练，但需要注意的是，该平台同样兼容其他 Seeed Studio 设备，例如 Grove Vision AI 和 Watcher。

还没有 Seeed Studio 设备？也没关系！你仍然可以跟随教程，使用笔记本电脑的内置摄像头体验整个训练流程。不过，为了获得最佳性能和效果，我们建议使用目标设备来训练并部署你的模型。

## 训练一个识别身体手势的模型

在本教程中，我们将创建一个能够识别四种不同身体手势的模型：双臂交叉、双臂张开、立正站姿以及用双手比心。

:::tip
SenseCraft AI 平台最多支持 200 个分类类别，为你创建满足特定需求的模型提供了充足的灵活性。
:::

### 步骤 1. 连接你的设备

如果你正在使用 XIAO ESP32S3 Sense 等 Seeed Studio 设备，请通过 USB-C 线将其连接到电脑。从下拉菜单中选择对应的设备，然后点击 **Connect**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

选择用于连接的**正确串口**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

如果你使用的是笔记本电脑的摄像头，可以跳过此步骤。因为当你进入此页面时，会自动显示摄像头的实时画面。如果没有显示，请检查浏览器权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
请使用 **Microsoft Edge** 或 **Google Chrome**。
:::

### 步骤 2. 创建并标注类别

点击现有类别名称右侧的铅笔按钮，可以重命名已有类别。点击下方的 **Add a Class** 按钮，为你想要识别的身体手势创建四个类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

将这些类别标注为：“Crossed Arms”、“Open Arms”、“Standing at Attention” 和 “Heart Shape”。请再次确认每个类别名称是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3. 采集训练数据

从列表中选择第一个类别（例如 “Crossed Arms”）。站在摄像头前，做出对应的身体手势。按住 **Hold to Record** 按钮以采集该手势的图像，松开按钮停止录制。每个类别**至少采集 40 张图像**，以确保模型足够健壮且准确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

对其余每个类别重复上述过程，为每种手势采集多样化的图像。

:::tip
为每个类别采集的高质量、相关图像越多，模型的表现就会越好。尽量在光照、角度和背景上增加多样性，以提升模型的泛化能力。
:::

### 步骤 4. 训练模型

当你为每个类别采集到足够数量的图像后，点击 **'Start Training'** 按钮开始模型训练过程。训练通常需要 1–3 分钟，具体时间取决于模型的复杂度和训练数据量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
在训练模型时，请**不要**立即关闭或离开网页，否则页面内容可能会丢失。
:::

### 步骤 5. 部署已训练模型

:::caution
请注意，如果你希望永久保存该模型，请务必先点击 **Save to SenseCraft**，将模型保存到你的账号下，以避免丢失。
:::

模型训练完成后，就可以将其部署到目标设备上了。如果你使用的是 XIAO ESP32S3 Sense 或其他 Seeed Studio 设备，请从下拉菜单中选择合适的设备，然后点击 **'Deploy to device'**。如果你是使用笔记本电脑摄像头训练的模型，可以跳过此步骤，直接进入结果演示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

点击 **'Confirm'** 并选择正确的**串口**进行设备连接。部署过程可能需要 1–3 分钟，请耐心等待其完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 结果演示

恭喜！你已经成功训练并部署了身体手势识别模型。现在是检验成果的时候了：

- 将摄像头对准你自己或测试对象。
- 依次做出每一种已训练的身体手势。
- 观察模型的实时预测和分类结果。
- 确认模型是否能够准确识别并分类每个手势。

你可以尽情尝试在 SenseCraft AI 平台上训练用于不同物体、手势或场景的模型。无论你使用的是 Seeed Studio 设备还是笔记本电脑摄像头，整体流程基本相同。

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

请记住，虽然平台允许你使用任意摄像头来训练模型，但为了获得最佳效果和性能，我们建议使用目标设备（目前仅限 Seeed Studio 设备）来训练并部署你的模型。

通过本综合指南，你现在应该已经对如何使用 SenseCraft AI 平台训练分类模型有了扎实的理解。祝你训练顺利，尽情为你的项目打造强大且定制化的 AI 模型！

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
