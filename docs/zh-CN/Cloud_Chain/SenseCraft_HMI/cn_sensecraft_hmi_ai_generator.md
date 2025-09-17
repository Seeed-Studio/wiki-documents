---
description: 介绍 SenseCraft HMI 平台下的 AI 生成功能的使用方法。
title: AI 生成功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft_hmi_ai_generation
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

# 在 SenseCraft HMI 中使用 AI 生成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/65.jpg" style={{width:700, height:'auto'}}/></div>

## 介绍

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 专为屏幕产品打造的交互界面设计平台。其最强大的功能之一是 AI 生成功能，它允许您通过简单地用自然语言描述您想要的内容来创建美观的显示布局和图像。

本教程将指导您使用 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 的图库和画布部分中的 AI 生成功能，使您能够：

- 基于文本描述生成自定义图像

- 创建具有正确定位组件的完整界面布局

- 通过对话优化和调整 AI 生成的内容

- 一键将您的设计直接部署到您的设备

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## AI 生成入门

AI 生成功能在 SenseCraft HMI 的图库和画布部分都可使用。每种实现方式都有不同的用途：

- **图库 AI 生成**：基于您的描述创建独立图像

- **画布 AI 生成**：设计具有功能组件（如按钮、文本字段和数据显示）的完整界面

让我们探索如何有效使用这些功能。

## 图库中的 AI 生成

图库 AI 生成允许您为显示器创建自定义图像，无需任何设计技能或外部工具。

### 访问图库 AI 生成

步骤 1. 导航到下面的 SenseCraft HMI 平台。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

步骤 2. 连接您的设备或选择已配对的设备使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/56.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 点击左侧边栏中的"Gallery"选项卡

步骤 4. 注意屏幕右侧的 AI Generator 面板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/57.png" style={{width:1000, height:'auto'}}/></div>

### 在图库中使用 AI 创建图像

步骤 1. 在 AI Generator 面板中，您会看到一个文本输入字段，提示类似"Describe the image you want to generate..."

步骤 2. 输入您想要创建的图像的详细描述。例如：

- "A beautiful mountain landscape with a sunrise and pine trees"

- "A minimalist dashboard showing temperature and humidity icons"

- "A circuit board pattern with Seeed Studio logo in the center"

步骤 3. 点击"Generate"按钮（魔法棒图标）开始图像生成过程

步骤 4. 等待 AI 处理您的请求。根据描述的复杂程度，这通常需要 10-30 秒。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/58.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 完成后，点击"Add to Gallery"按钮，AI 生成的图像将出现在您的图库中

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/59.png" style={{width:1000, height:'auto'}}/></div>

### 优化 AI 生成的图库图像

生成图像后，您可以通过与 AI 对话来优化它：

步骤 1. 如果您对结果不满意，可以直接在 AI Generator 面板中提供反馈。例如：

- "Make the colors more vibrant"

- "Add more contrast to the image"

- "Change the background to blue"

步骤 2. 再次点击"Generate"，基于您的反馈创建新版本

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/60.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 继续这个迭代过程，直到您对结果满意

## Canvas 中的 AI 生成

Canvas AI 生成功能更加强大，允许您创建完整的交互式界面和功能组件。

### 访问 Canvas AI 生成

步骤 1. 点击左侧边栏中的"Canvas"选项卡

步骤 2. 注意屏幕右侧的 AI 生成器面板，与 Gallery 中的面板类似

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/61.png" style={{width:1000, height:'auto'}}/></div>

### 在 Canvas 中使用 AI 创建界面

步骤 1. 在 AI 生成器面板中，输入您想要创建的界面描述。请具体说明您需要的组件。例如：

- "创建一个天气仪表板，包含温度显示、湿度计和天气预报图标"

- "设计一个智能家居控制面板，包含灯光、恒温器和安全系统的按钮"

- "制作一个健身追踪器界面，包含步数计数器、心率显示和活动历史"

步骤 2. 点击"Generate"按钮开始界面生成过程

步骤 3. 等待 AI 处理您的请求并创建界面布局

步骤 4. 完成后，AI 将根据您的描述在 Canvas 上放置各种组件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/62.png" style={{width:1000, height:'auto'}}/></div>

### 优化 AI 生成的界面

Canvas AI 专为迭代改进而设计：

步骤 1. 查看生成的界面并确定您想要进行的任何更改

步骤 2. 您可以在 AI 生成器面板中提供具体反馈。例如：

- "将温度显示移动到右上角"

- "使按钮更大并在下方添加标签"

- "将配色方案更改为深色模式"

- "在顶部中央添加一个时钟"

步骤 3. 再次点击"Generate"以根据您的反馈更新界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/63.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 您也可以通过选择任何组件并使用 Canvas 中的编辑工具来手动调整

### AI 生成界面中可用的组件类型

Canvas AI 可以创建和定位各种组件：

**基础组件：**

- 文本标签

- 图像

- 形状（矩形、圆形、线条）

- 按钮

- 图标

**设备数据组件：**

- 温度显示

- 湿度指示器

- 电池电量指示器

- 天气信息

- 时间和日期显示

在生成界面时，您可以在提示中具体请求这些组件。

### 使用 AI 生成的界面

当您对 AI 生成的界面满意后：

步骤 1. 对组件位置或属性进行任何最终的手动调整

步骤 2. 通过点击"Deploy"按钮将界面部署到您连接的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/64.png" style={{width:600, height:'auto'}}/></div>

## AI 生成的最佳实践

要充分利用 AI 生成功能，请遵循以下提示：

### 有效提示的技巧

1. **具体明确**：不要说"创建一个仪表板"，而是尝试"创建一个仪表板，中央显示温度，右侧显示湿度，顶部显示时钟"

2. **提及颜色和样式**："使用蓝白配色方案，所有元素都采用圆角"

3. **参考熟悉的设计**："使其看起来像智能恒温器界面"或"设计得类似健身追踪器显示屏"

### 迭代优化

最成功的设计通常来自多轮反馈：

1. 从一般描述开始

2. 生成初始设计

3. 提供关于要更改内容的具体反馈

4. 生成更新版本

5. 重复直到满意

### 结合 AI 生成与手动编辑

为了获得最佳结果：

1. 使用 AI 快速创建基本布局和组件

2. 手动微调各个元素的位置、大小和属性

3. 手动添加任何自定义功能或数据绑定

4. 如果您想添加新部分或进行重大更改，请再次使用 AI

## 结论

SenseCraft HMI 中的 AI 生成功能彻底改变了您为基于屏幕的设备创建界面的方式。通过将 AI 生成内容的强大功能与 SenseCraft HMI 的简易部署相结合，您可以快速创建专业外观的显示界面，而无需具备丰富的设计技能。

无论您是在 Gallery 中生成自定义图像，还是在 Canvas 中创建完整的交互式界面，AI 生成工具都能帮助您更快、更轻松地将创意变为现实。

## 资源

- [SenseCraft HMI 平台](https://sensecraft.seeed.cc/hmi)
- [兼容设备 - reTerminal E 系列](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
