---
# 参见：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs
description: 本文是 SenseCraft AI 主页面的简要介绍。
title: 概述
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/1.webp
slug: /cn/sensecraft-ai/overview
aliases:
  - /cn/sensecraft_ai_overview
sidebar_position: 1
# sidebar_class_name: hidden # 有文件但是不显示在左侧目录
last_update:
  date: 11/28/2024
  author: Citric
---

# SenseCraft AI 概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 是一个一体化平台，旨在帮助开发者和创作者轻松构建和部署 AI 项目。该网站提供了广泛的工具和功能，以简化 AI 开发过程，使不同水平的用户都能轻松使用。在本 Wiki 中，我们将探索 SenseCraft AI 网站的主要部分，并概述其关键功能和特点。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div>

## 首页

SenseCraft AI 的首页是平台的核心枢纽，为用户提供平台主要功能的概览。页面顶部的导航栏包含五个主要部分：**首页**、**预训练模型**、**训练**、**视觉工作区**和**关于 SenseCraft AI**。

首页的主要内容是 **开始您的旅程：部署预训练模型** 部分，该部分通过分步流程指导用户使用 Seeed Studio 硬件部署预训练模型。该流程分为三个主要步骤：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/2.png" style={{width:1000, height:'auto'}}/></div>

1. 从模型库中选择一个预训练模型。
1. 使用“部署和预览视觉”功能实时部署并预览模型的结果。
1. 将模型应用到连接的 Seeed Studio 硬件，并查看传感器输出。

此功能特别适合希望快速试验 AI 模型的用户，无需自己经历完整的训练过程。

继续向下浏览页面，用户会看到“训练模型”功能的介绍。此部分对与模型训练相关的内容进行了分类，使用户更容易找到所需的信息，以利用平台资源训练自己的 AI 模型。

最后，首页展示了“共享视觉 AI 模型”功能，该功能鼓励 SenseCraft AI 社区之间的协作和知识共享。此功能允许用户与其他人共享他们训练的模型，促进社区感，并使用户能够基于彼此的工作进行构建。

## 用户账户

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 是一个开放平台，允许用户无需登录即可浏览所有公开的 AI 模型和主页。只有在需要部署模型或分享自己的模型时，才需要注册和登录。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 和 [SenseCraft 数据平台](https://sensecap.seeed.cc/portal/#/login)（原 SenseCAP 云平台）均为 Seeed Studio 提供的用户软件服务，用户只需在任意一个平台注册账户，即可使用同一账户登录两个平台。

### 注册

1. 输入您的姓名和有效邮箱，然后点击 **获取验证码**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png" style={{width:1000, height:'auto'}}/></div>

2. 从您的邮箱获取验证码并在注册页面输入。

:::note
验证码有效期为 10 分钟，请在 10 分钟内完成注册。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png" style={{width:700, height:'auto'}}/></div>

3. 输入您的密码和其他用户信息以完成注册。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png" style={{width:1000, height:'auto'}}/></div>

### 登录

使用您注册的邮箱账户登录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png" style={{width:1000, height:'auto'}}/></div>

### 忘记密码

如果您忘记了账户密码，请输入您的有效账户并获取验证码以设置新密码。

验证码的有效期为 10 分钟，请在 10 分钟内完成密码重置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png" style={{width:1000, height:'auto'}}/></div>

### 修改密码

1. 访问用户账户页面并点击“修改密码”按钮。

2. 输入旧密码和新密码以完成密码修改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png" style={{width:1000, height:'auto'}}/></div>

## 预训练模型

SenseCraft AI 网站的预训练模型部分是一个全面的 AI 模型库，用户可以轻松访问并在设备上部署这些模型。目前，该模型库拥有超过 30000+ 个模型，并且还在不断增加。

### 模型分类

为了帮助用户找到最适合其需求的模型，页面左侧显示了一个分类列表。用户可以根据以下标准筛选模型：

- **支持的设备**：用户可以选择与其使用的特定硬件兼容的模型，以确保无缝集成和最佳性能。

- **任务**：模型根据其设计的任务进行分类，例如检测、分类或分割。这使用户能够快速找到符合其项目需求的模型。

- **发布者**：用户还可以根据发布者筛选模型，方便找到来自可信来源或特定开发者的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/3.png" style={{width:1000, height:'auto'}}/></div>

### 模型详情

预训练模型页面的中央区域展示了每个模型的基本信息，包括名称、简要描述和视觉表示。这种快速概览帮助用户了解每个模型的功能以及它如何适配其项目。

要访问特定模型的详细信息，用户只需点击模型卡片即可。这将带用户进入该模型的专属页面，在那里可以找到详细描述、性能指标以及如何在设备上安装和使用模型的分步说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/4.png" style={{width:1000, height:'auto'}}/></div>

### 我的模型

除了模型库中的公开 AI 模型外，SenseCraft AI 还为用户提供了一个个性化空间，用于管理用户自己训练或上传的模型。通过登录 SenseCraft AI 账户，用户可以访问“我的模型”部分，在这里可以找到并管理自己的私有模型。

“我的模型”部分中的模型完全私密，仅创建者本人可以访问。然而，用户可以选择将其模型公开，让 SenseCraft AI 社区中的其他人受益于其工作。此功能促进了用户之间的协作和知识共享，营造了一个充满活力和支持的 AI 爱好者社区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/5.png" style={{width:1000, height:'auto'}}/></div>

## 训练

SenseCraft AI 网站的训练部分旨在帮助用户创建针对其特定使用场景定制的模型。目前，训练页面提供两种类型的训练：分类和目标检测。

### 分类

分类训练基于 TensorFlow，完全基于网页操作，消除了任何操作系统的限制。此功能允许用户使用从本地计算机摄像头或 Seeed Studio 产品捕获的图像来训练模型。用户只需为每个类别收集 40-50 张图像，无需手动标注即可训练模型。训练过程非常快速，仅需几分钟即可生成模型。此外，网页界面提供实时预览功能，使用户能够即时查看训练模型的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/6.png" style={{width:1000, height:'auto'}}/></div>

### 目标检测

目标检测训练基于 YOLO-World 模型，分为两个子部分：**快速训练**和**图像收集训练**。

- **快速训练**：此选项允许用户通过简单输入对象名称来生成单类别识别模型。正如网站所述，“基于 YOLO - World 目标检测模型，您可以通过输入文本快速生成单类别识别模型。”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/7.png" style={{width:1000, height:'auto'}}/></div>

目标检测训练中的快速训练选项由 YOLO-World 目标检测模型驱动，这是一个先进的实时目标检测系统。当用户输入对象名称时，系统利用 YOLO-World 模型的预训练知识生成专门用于检测该对象的单类别识别模型。

YOLO（You Only Look Once）模型系列以其在目标检测任务中的速度和准确性而闻名。它将输入图像划分为网格，并为每个网格单元预测边界框和类别概率。特别是 YOLO-World 模型，已在覆盖广泛对象的大型数据集上进行训练，使其能够很好地泛化到各种检测任务。

通过基于 YOLO-World 模型构建，快速训练选项继承了其强大的特征提取和目标定位能力。预训练模型作为坚实的基础，使用户能够快速生成单类别识别模型，而无需大量的训练数据或计算资源。

然而，需要注意的是，快速训练选项在适应性和精确度方面可能存在一定的局限性。由于生成的模型依赖于 YOLO-World 模型的现有知识，它可能无法始终捕捉用户指定对象的独特特性或变化。这可能会在某些场景中导致准确性降低或误检测。

- **图像收集训练**：此选项要求用户输入对象名称并上传相关图像。网站对该功能的描述如下：“基于 YOLO - World 目标检测模型，您可以针对文本和图像定制训练，从而提高生成模型的检测准确性。”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/8.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 的图像收集训练选项允许用户使用自己的数据集训练自定义目标检测模型，而无需手动图像标注。此功能基于 YOLO-World 目标检测模型，并采用一种特殊的训练方法，消除了对边界框标注或目标分割的需求。

该训练选项的核心原理是弱监督学习的概念。在弱监督学习中，模型仅使用图像级标签学习检测对象，而无需精确的目标定位或边界框标注。YOLO-World 模型作为图像收集训练的基础，已被设计为能够有效利用这种方法。

在训练过程中，用户提供一组图像以及他们希望检测的对象名称。模型随后学习将图像中存在的视觉模式和特征与提供的对象名称关联起来。通过向模型展示包含目标对象的多样化图像，它能够学习泛化并在新的未见图像中检测这些对象。

YOLO-World 模型的架构和训练方法使其能够自动发现并定位图像中的对象，而无需明确的边界框标注。这是通过卷积神经网络（CNN）和专门的损失函数组合实现的，这些损失函数引导模型关注图像中最具信息的区域。

通过消除手动图像标注的需求，图像收集训练选项显著减少了创建自定义目标检测模型所需的时间和精力。用户只需收集包含目标对象的图像数据集，提供对象名称，并让模型自动学习识别这些对象。

然而，需要注意的是，数据集的质量和多样性仍然对生成模型的性能起着至关重要的作用。模型准确检测对象的能力取决于训练图像的多样性和代表性。用户应努力收集涵盖不同对象外观、姿态、背景和光照条件的数据集，以确保模型性能的稳健性。

通过提供这两种训练选项，SenseCraft AI 使用户能够创建针对其特定需求优化的自定义目标检测模型。快速训练选项非常适合需要简单的单类别识别模型并希望快速生成的用户。而图像收集训练选项则适合需要更准确和定制化模型的用户，因为它允许用户以目标名称和图像的形式提供自己的训练数据。

## 发布模型

SenseCraft AI 是一个支持开发者和建模者内容共创的平台！与全球开发者社区分享您的成果。同时，通过我们的 AI 开放平台，您将有机会将您的 AI 模型与商业化需求相结合，为不同行业的企业和用户提供有价值的解决方案。我们期待您的参与和贡献，共同实现 AI 技术在商业领域的创新与应用！

1. 要添加模型，您需要完成以下信息：

- 模型名称
- 模型摘要：对模型的简单描述
- 模型介绍：对模型的详细描述
- 模型部署准备：模型部署的前置条件，可选
- 支持设备：选择模型将部署在哪些设备上，目前平台支持 Jetson 设备、XIAO ESPS3 等。
- 模型推理示例图片：上传模型推理结果的图片

2. 完成信息后点击下一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png" style={{width:1000, height:'auto'}}/></div>

1. 输入关于模型参数的以下信息。
2. 默认勾选“发布模型到公共 AI 模型库”，模型保存后将对所有人可见；如果未勾选，模型保存后仅对您可见。

|     | 内容 |
| --- | --- |
| 模型格式 | 1 模型的正确格式<br />2 选项：ONNX、Tensor RT、Pytorch<br />3 平台将支持更多模型格式 |
| 任务 | 1 模型的任务类型<br />2 选项：检测、分类、分割、姿态 |
| AI 框架 | 1 模型的 AI 框架<br />2 选项：YOLOV5、YOLOV8、FOMO、MobileNetV2、PFLD<br />3 平台将支持更多 AI 框架 |
| 类别 | 1 模型针对特定任务或问题分类的类别或标签<br />2 请确保类别 ID 和类别名称正确匹配。 |
| 模型文件 | 上传您选择格式的模型文件。 |
| 模型精度 | 1 模型精度<br />2 选项：Int8、Float16、Float32 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::note
为了确保平台的健康发展，我们将对用户发布的模型和内容进行审核。如果发现任何非法、不合规或侵权内容，将不允许发布，并可能被删除。
感谢您对维护健康平台环境的理解和支持！
:::

### 自定义 AI 模型管理

用户拥有操作自己模型的所有权限。

**发布模型**：发布一个私有模型，使其对所有用户可见。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png" style={{width:1000, height:'auto'}}/></div>

**私有化模型**：将一个公共模型私有化，模型仅对自己可见。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png" style={{width:1000, height:'auto'}}/></div>

**删除模型**：删除一个私有模型，公共模型不允许删除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png" style={{width:1000, height:'auto'}}/></div>

**编辑模型**：允许修改模型的所有信息。

## Vision Workspace

SenseCraft AI 的 Vision Workspace 部分专注于设备特定操作和训练模型的部署。它为用户提供了一个无缝界面，用于将自定义模型集成到各种硬件设备中，并实时预览结果。目前支持的设备包括 Grove Vision AI V2、XIAO ESP32S3 Sense、NVIDIA Jetson 和 reCamera。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/9.png" style={{width:400, height:'auto'}}/></div>

### 模型部署与预览

用户成功上传训练模型后，可以进入 Vision Workspace 中的设备特定页面。在“Process”部分，用户可以观察连接设备的实时检测视频流，从而预览模型的实际性能。

这一实时预览功能尤为重要，因为它使用户能够评估模型在设备视频流中检测对象的准确性和有效性。用户可以直观地检查模型生成的边界框、标签和置信度分数，从而立即获得性能反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/10.png" style={{width:1000, height:'auto'}}/></div>

### 模型微调

除了实时预览功能外，Vision Workspace 还提供了微调模型置信度阈值参数的功能。此功能允许用户调整模型对对象检测的敏感度，从而在精确度和召回率之间找到平衡。

通过调整置信度阈值，用户可以控制模型的检测行为。较高的置信度阈值会使模型更加挑剔，仅检测具有高度确定性的对象。而较低的置信度阈值则会使模型更加敏感，即使置信度较低的对象也会被检测到。

这种微调功能使用户能够根据其具体需求调整模型，优化其性能以适应应用的特性以及设备运行的环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/11.png" style={{width:1000, height:'auto'}}/></div>

### 输出与应用开发

Vision Workspace 不仅限于模型部署和预览，还为用户提供了快速原型设计和开发应用程序的工具，利用训练模型的能力。“Output”部分为用户提供了一系列选项，用于与模型的结果交互并将其集成到所需的应用程序中。

以 XIAO ESP32S3 Sense 为例，Vision Workspace 支持多种通信协议和接口，例如 MQTT、GPIO 和串口。这些选项使用户能够轻松地将模型的输出传输到其他系统，根据对象检测触发动作，或对检测结果进行进一步处理。

通过提供这些输出选项，SenseCraft AI 简化了将训练模型集成到实际应用中的过程。用户可以快速尝试不同的通信方法，并开发利用模型对象检测能力的原型。

例如，用户可以利用 MQTT 输出将实时对象检测数据发送到远程服务器进行监控或分析。或者，他们可以使用 GPIO 输出根据特定对象的存在触发物理动作，例如打开灯或激活警报。

串口输出提供了一种简单的方法来建立设备与其他系统之间的通信，使用户能够传输模型的结果以进行进一步处理或可视化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/12.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>