---
# 参见：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs
description: 本文是对 SenseCraft AI 主页的简要介绍。
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

SenseCraft AI 是一个一体化平台，旨在帮助开发者和创作者轻松构建和部署 AI 项目。该网站提供了广泛的工具和功能来简化 AI 开发流程，使不同专业水平的用户都能轻松使用。在本 wiki 中，我们将探索 SenseCraft AI 网站的主要部分，概述它们的关键特性和功能。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div>

## 主页

SenseCraft AI 的主页作为中央枢纽，为用户提供平台主要功能的概述。页面顶部的导航栏包含五个主要部分：**主页**、**预训练模型**、**训练**、**视觉工作区**和**关于 SenseCraft AI**。

主页的主要焦点是**开始您的旅程：部署预训练模型**部分，它指导用户通过分步流程使用 Seeed Studio 硬件部署预训练模型。该流程分为三个主要步骤：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/2.png" style={{width:1000, height:'auto'}}/></div>

1. 从模型库中选择一个预训练模型。
1. 使用"部署和预览视觉"功能部署并实时预览模型的结果。
1. 将模型应用到连接的 Seeed Studio 硬件并查看传感器输出。

此功能对于想要快速试验 AI 模型而无需自己完成整个训练过程的用户特别有用。

继续向下浏览页面，用户将找到"训练模型"功能的介绍。此部分对与模型训练相关的内容进行分类，使用户更容易找到使用平台资源训练自己的 AI 模型所需的信息。

最后，主页展示了"共享视觉 AI 模型"功能，鼓励 SenseCraft AI 社区中的协作和知识共享。此功能允许用户与他人分享他们训练的模型，培养社区意识并使用户能够在彼此的工作基础上进行构建。

## 用户账户

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 是一个开放平台，允许用户无需登录即可浏览所有公共 AI 模型和主页。只有当您需要部署模型或分享自己的模型时，才需要注册和登录。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 和 [SenseCraft 数据平台](https://sensecap.seeed.cc/portal/#/login)（原 SenseCAP 云平台）都是 seeed studio 为用户提供的软件服务，用户只需在任一平台上注册账户，然后就可以使用同一账户在两个平台上登录。

### 注册

1. 输入您的姓名和有效邮箱，然后点击**获取验证码**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png" style={{width:1000, height:'auto'}}/></div>

2. 从您的邮箱获取验证码并在注册页面输入

:::note
验证码有效期为10分钟，请在10分钟内完成注册
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png" style={{width:700, height:'auto'}}/></div>

3. 输入您的密码和其他用户信息以完成注册。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png" style={{width:1000, height:'auto'}}/></div>

### 登录

使用您注册的邮箱账户登录

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png" style={{width:1000, height:'auto'}}/></div>

### 忘记密码

如果您忘记了账户密码，请输入您的有效账户并获取验证码来设置新密码。

验证码的有效期为10分钟，请在10分钟内完成重置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png" style={{width:1000, height:'auto'}}/></div>

### 更改密码

1. 访问用户账户页面并点击"更改密码"按钮。

2. 输入旧密码和新密码来更改密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png" style={{width:1000, height:'auto'}}/></div>

## 预训练模型

SenseCraft AI 网站的预训练模型部分是一个全面的 AI 模型仓库，用户可以轻松访问并将其部署到他们的设备上。该模型仓库目前拥有令人印象深刻的 400+ 模型集合，并且还在持续增加更多模型。

### 模型分类

为了帮助用户找到最适合其需求的模型，页面左侧显示了模型的分类列表。用户可以根据各种标准筛选模型，例如：

- **支持的设备**：用户可以选择与他们正在使用的特定硬件兼容的模型，确保无缝集成和最佳性能。

- **任务**：模型根据其设计执行的任务进行分类，如检测、分类或分割。这使用户能够快速识别符合其项目要求的模型。

- **发布者**：用户还可以根据发布者筛选模型，便于从可信来源或特定开发者那里找到模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/3.png" style={{width:1000, height:'auto'}}/></div>

### 模型详情

预训练模型页面的中央区域展示了每个模型的基本信息，包括其名称、简要描述和视觉表示。这个快速概览帮助用户了解每个模型提供的功能以及它如何适合他们的项目。

要访问特定模型的更详细信息，用户只需点击模型卡片。这将带他们到该模型的专用页面，在那里他们可以找到深入的描述、性能指标，以及如何在其设备上安装和使用该模型的分步说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/4.png" style={{width:1000, height:'auto'}}/></div>

### 我的模型

除了仓库中可用的公共 AI 模型外，SenseCraft AI 还为已训练或上传自己模型的用户提供个性化空间。通过登录他们的 SenseCraft AI 账户，用户可以访问"我的模型"部分，在那里他们可以找到并管理他们的私有模型。

"我的模型"部分中的模型完全私有，只能由创建它们的用户访问。但是，用户可以选择将他们的模型公开，允许 SenseCraft AI 社区中的其他人从他们的工作中受益。此功能促进了用户之间的协作和知识共享，培养了一个充满活力和支持性的 AI 爱好者社区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/5.png" style={{width:1000, height:'auto'}}/></div>

## 训练

SenseCraft AI 网站的训练部分旨在帮助用户创建针对其特定用例的定制化模型。目前，训练页面提供两种类型的训练：分类和目标检测。

### 分类

分类训练基于 TensorFlow，完全基于网页，消除了任何操作系统限制。此功能允许用户使用从本地计算机摄像头或 Seeed Studio 产品捕获的图像来训练模型。要训练模型，用户只需要每个类别收集 40-50 张图像，无需手动标记。训练过程很快，只需几分钟即可生成模型。此外，网页界面提供实时预览功能，使用户能够立即看到其训练模型的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/6.png" style={{width:1000, height:'auto'}}/></div>

### 目标检测

目标检测训练基于 YOLO-World 模型，分为两个子部分：**快速训练**和**图像收集训练**。

- **快速训练**：此选项允许用户通过简单输入对象名称来生成单类识别模型。正如网站上解释的，"基于 YOLO - World 目标检测模型，您可以通过输入文本快速生成单类识别模型。"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/7.png" style={{width:1000, height:'auto'}}/></div>

目标检测训练下的快速训练选项由 YOLO-World 目标检测模型提供支持，这是一个最先进的实时目标检测系统。当用户输入对象名称时，系统利用 YOLO-World 模型的预训练知识来生成专门针对检测该对象的单类识别模型。

YOLO（You Only Look Once）模型系列以其在目标检测任务中的速度和准确性而闻名。它将输入图像分成网格，并为每个网格单元预测边界框和类别概率。特别是 YOLO-World 模型，已在涵盖广泛对象的大型数据集上进行训练，使其能够很好地泛化到各种检测任务。

通过构建在 YOLO-World 模型之上，快速训练选项继承了其强大的特征提取和对象定位能力。预训练模型作为强大的基础，允许用户快速生成单类识别模型，而无需大量训练数据或计算资源。

然而，重要的是要承认快速训练选项在适应性和精度方面可能存在限制。由于生成的模型依赖于 YOLO-World 模型的预先存在的知识，它可能无法始终捕获用户指定对象的独特特征或变化。这可能导致在某些场景中准确性降低或出现误检。

- **图像收集训练**：此选项要求用户输入对象名称并上传相关图像。网站对此功能的描述如下："基于 YOLO - World 目标检测模型，您可以自定义文本和图像的训练，这可以提高生成模型的检测准确性。"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/8.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 中的图像收集训练选项允许用户使用自己的数据集训练自定义目标检测模型，无需手动图像标注。此功能基于 YOLO-World 目标检测模型，并利用专门的训练方法，消除了边界框标记或对象分割的要求。

此训练选项背后的关键原理是弱监督学习的概念。在弱监督学习中，模型仅使用图像级标签学习检测对象，无需精确的对象定位或边界框标注。作为图像收集训练基础的 YOLO-World 模型已被设计为有效利用这种方法。

在训练过程中，用户提供一组图像以及他们想要检测的相应对象名称。然后模型学习将图像中存在的视觉模式和特征与提供的对象名称关联起来。通过让模型接触包含感兴趣对象的各种图像，它学会泛化并在新的、未见过的图像中检测这些对象。

YOLO-World 模型的架构和训练方法使其能够自动发现和定位图像中的对象，而无需明确的边界框标注。这是通过卷积神经网络（CNN）和专门的损失函数的组合实现的，这些损失函数引导模型专注于图像的最具信息性的区域。

通过消除手动图像标注的需要，图像收集训练选项显著减少了创建自定义目标检测模型所需的努力和时间。用户可以简单地收集包含他们想要检测的对象的图像数据集，提供对象名称，并让模型自动学习识别这些对象。

然而，重要的是要注意，数据集的质量和多样性仍然在结果模型的性能中起着关键作用。模型泛化和准确检测对象的能力取决于训练图像的多样性和代表性。用户应努力收集涵盖不同对象外观、姿态、背景和光照条件的数据集，以确保稳健的性能。

通过提供这两种训练选项，SenseCraft AI 使用户能够创建针对其特定需求优化的自定义目标检测模型。快速训练选项非常适合需要简单的单类识别模型并希望快速生成的用户。另一方面，图像收集训练选项适合需要更准确和定制化模型的用户，因为它允许他们以对象名称和图像的形式提供自己的训练数据。

## 发布模型

SenseCraft AI 是一个支持开发者和建模者内容共创的平台！与全球开发者社区分享您的成果。同时，通过我们的 AI 开放平台，您将有机会将您的 AI 模型与商业化需求相结合，为不同行业的企业和用户提供有价值的解决方案。我们期待您的参与和贡献，共同实现 AI 技术在商业领域的创新和应用！

1. 要添加模型，您需要完成以下信息：

- 模型名称
- 模型摘要：模型的简单描述
- 模型介绍：模型的详细描述
- 模型部署准备：模型部署的先决条件，非必需
- 支持的设备：选择模型将部署在哪个设备上，目前平台支持 Jetson 设备、XIAO ESPS3 等
- 模型推理示例图像：上传模型推理结果的图像

2. 信息完成后点击下一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png" style={{width:1000, height:'auto'}}/></div>

1. 输入有关模型参数的以下信息。
2. 默认勾选将模型发布到公共 AI 模型库，保存后模型将对所有人可见，如果取消勾选，保存后模型将仅对您可见。

|     | 内容|
| --- | --- |
| 模型格式 | 1 模型的正确格式<br />2 选项：ONNX、Tensor RT、Pytorch<br />3 平台将支持更多模型格式 |
| 任务 | 1 模型的任务类型<br />2 选项：检测、分类、分割、姿态 |
| AI 框架 | 1 模型的 AI 框架<br />2 选项：YOLOV5、YOLOV8、FOMO、ModileNetV2、PFLD<br />3 平台将支持更多 AI 框架 |
| 类别 | 1 模型为特定任务或问题分类的类别或标签<br />2 请确保类别 ID 和类别名称正确匹配。 |
| 模型文件 | 上传您选择格式的模型文件。 |
| 模型精度 | 1 模型精度<br />2 选项：Int8、Float16、Float32 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::note
为了确保我们平台的健康发展，我们将审核用户发布的模型和内容。如果发现任何非法、不合规或侵权内容，将不允许发布，并可能相应地删除。
感谢您的理解和支持，共同维护健康的平台环境！
:::

### 自定义AI模型管理

用户对自己的模型拥有所有操作权限。

**发布模型**：发布私有模型，该模型将对所有用户可用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png" style={{width:1000, height:'auto'}}/></div>

**私有化模型**：将公开模型私有化，该模型仅对自己可见。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png" style={{width:1000, height:'auto'}}/></div>

**删除模型**：删除私有模型，公开模型不允许删除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png" style={{width:1000, height:'auto'}}/></div>

**编辑模型**：允许修改模型的所有信息。

## Vision Workspace

SenseCraft AI的Vision Workspace部分专门用于设备特定操作和训练模型的部署。它为用户提供了一个无缝的界面，用于将自定义模型与各种硬件设备集成，并实时预览结果。目前，支持的设备包括Grove Vision AI V2、XIAO ESP32S3 Sense、NVIDIA Jetson和reCamera。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/9.png" style={{width:400, height:'auto'}}/></div>

### 模型部署和预览

一旦用户成功上传了训练好的模型，他们就可以导航到Vision Workspace内的设备特定页面。在"Process"部分下，用户可以观察来自连接设备的实时检测画面，从而预览模型的实际性能。

这个实时预览功能特别有价值，因为它使用户能够评估模型在检测设备视频流中物体时的准确性和有效性。用户可以直观地检查模型生成的边界框、标签和置信度分数，从而获得关于其性能的即时反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/10.png" style={{width:1000, height:'auto'}}/></div>

### 模型微调

除了实时预览外，Vision Workspace还提供了微调模型置信度阈值参数的功能。此功能允许用户调整模型对物体检测的敏感度，使他们能够在精确度和召回率之间取得平衡。

通过操作置信度阈值，用户可以控制模型在检测物体方面的行为。较高的置信度阈值将使模型更加选择性，只检测具有高度确定性的物体。相反，较低的置信度阈值将使模型更加敏感，即使在置信度分数较低的情况下也能检测到物体。

这种微调功能使用户能够根据其特定需求调整模型，基于其应用的特性和设备运行环境来优化其性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/11.png" style={{width:1000, height:'auto'}}/></div>

### 输出和应用开发

Vision Workspace超越了模型部署和预览，为用户提供了使用训练模型快速原型设计和开发应用程序的工具。"Output"部分为用户提供了一系列选项，用于与模型结果交互并将其集成到所需的应用程序中。

以XIAO ESP32S3 Sense为例，Vision Workspace支持各种通信协议和接口，如MQTT、GPIO和串口。这些选项使用户能够无缝地将模型输出传输到其他系统，基于物体检测触发动作，或对检测结果进行进一步处理。

通过提供这些输出选项，SenseCraft AI简化了将训练模型集成到实际应用中的过程。用户可以快速尝试不同的通信方法，并开发利用其模型物体检测功能的原型。

例如，用户可以利用MQTT输出将实时物体检测数据发送到远程服务器，用于监控或分析目的。或者，他们可以使用GPIO输出基于特定物体的存在触发物理动作，如开灯或激活警报。

串口输出提供了一种在设备和其他系统之间建立通信的直接方式，使用户能够传输模型结果以进行进一步处理或可视化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/12.png" style={{width:1000, height:'auto'}}/></div>

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
