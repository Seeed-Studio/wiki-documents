---
sidebar_position: 5
description: 如何使用训练（分类）
title: 训练 - 分类
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /cn/sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
---

# 训练类型 - 分类

分类是机器学习中的一项强大工具，它可以让您训练模型来识别和分类不同类型的数据。在 SenseCraft AI 平台中，分类使您能够创建模型，根据您在训练期间提供的图像，识别和区分各种对象、手势或场景。

通过使用 SenseCraft AI 训练分类模型，您可以解锁广泛的应用，例如：

- 用于交互体验的手势识别

- 用于库存管理或质量控制的对象检测

- 用于自主导航或环境监测的场景分类

SenseCraft AI 平台简化了分类过程，使您无需深入的机器学习专业知识即可创建适合您特定需求的自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

## 入门

在本全面指南中，我们将引导您完成使用 SenseCraft AI 平台训练分类模型的过程。虽然我们的主要重点是为 XIAO ESP32S3 Sense 训练模型，但需要注意的是，该平台也兼容其他 Seeed Studio 设备，例如 Grove Vision AI 和 Watcher。

没有 Seeed Studio 设备？没问题！您仍然可以使用笔记本电脑的内置摄像头跟随教程并体验训练过程。然而，为了获得最佳性能和效果，我们建议使用目标设备来训练和部署您的模型。

## 训练一个识别身体手势的模型

在本教程中，我们将创建一个模型，用于识别四种不同的身体手势：交叉手臂、张开手臂、立正姿势以及用手比心。

:::tip
SenseCraft AI 平台支持最多 200 个分类类别，为您提供了充足的灵活性来创建适合您特定需求的模型。
:::

### 第 1 步. 连接您的设备

如果您使用的是 Seeed Studio 设备，例如 XIAO ESP32S3 Sense，请通过 USB-C 数据线将其连接到您的计算机。从下拉菜单中选择相应的设备，然后点击 **连接**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

选择 **正确的串口** 进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

如果您使用的是笔记本电脑的摄像头，可以跳过此步骤。因为当您进入此页面时，它会自动显示摄像头的实时画面。如果没有，请检查您的浏览器权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
请使用 **Microsoft Edge** 或 **Google Chrome**。
:::

### 第 2 步. 创建并标记类别

点击现有类别名称右侧的铅笔按钮以重命名已存在的类别。点击下方的 **添加类别** 按钮，为您想要识别的身体手势创建四个类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

将类别标记为："交叉手臂"、"张开手臂"、"立正姿势" 和 "比心"。仔细检查每个类别的名称是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### 第 3 步. 捕获训练数据

从列表中选择第一个类别（例如 "交叉手臂"）。站在摄像头前，做出相应的身体手势。按住 **按住录制** 按钮以捕获手势的图像。松开按钮以停止录制。每个类别至少捕获 **40 张图像**，以确保模型的稳健性和准确性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

对其余类别重复此过程，为每个手势捕获多样化的图像。

:::tip
为每个类别收集的高质量、相关图像越多，模型的性能就会越好。通过在光照、角度和背景上的多样性，提升模型的泛化能力。
:::

### 第 4 步. 训练模型

一旦为每个类别收集了足够的图像，点击 **"开始训练"** 按钮以启动模型训练过程。训练过程通常需要 1-3 分钟，具体取决于模型的复杂性和训练数据的数量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
请在训练模型时 **不要** 立即关闭网页，否则页面内容可能会丢失。
:::

### 第 5 步. 部署训练好的模型

:::caution
请注意，如果您希望永久保存此模型，请务必先点击 **保存到 SenseCraft**，将模型保存到您的账户下，以避免丢失。
:::

在模型训练完成后，就可以将其部署到目标设备上。如果您使用的是 XIAO ESP32S3 Sense 或其他 Seeed Studio 设备，请从下拉菜单中选择相应的设备，然后点击 **“Deploy to device”**。如果您是使用笔记本电脑的摄像头训练模型，则可以跳过此步骤，直接进入结果演示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

点击 **“Confirm”** 并选择正确的 **串口** 以连接设备。部署过程可能需要 1-3 分钟。请耐心等待，直到完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 结果演示

恭喜您！您已经成功训练并部署了您的身体姿态识别模型。现在是测试它的时候了：

- 将摄像头对准自己或测试对象。
- 依次执行每个训练过的身体姿态。
- 观察模型的实时预测和分类结果。
- 验证模型是否准确识别并分类每个姿态。

您可以随意尝试使用 SenseCraft AI 平台训练不同的对象、姿态或场景的模型。无论您使用的是 Seeed Studio 设备还是笔记本电脑的摄像头，流程基本相同。

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

请记住，虽然该平台允许您使用任何摄像头训练模型，但为了获得最佳结果和性能，我们建议使用目标设备（目前仅限于 Seeed Studio 设备）来训练和部署模型。

通过这份全面的指南，您现在应该对如何使用 SenseCraft AI 平台训练分类模型有了清晰的了解。祝您训练顺利，尽情享受为您的项目创建强大、定制化 AI 模型的乐趣！

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>