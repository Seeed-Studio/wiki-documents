---
description: 本文是对 SenseCraft AI 主页面的简要介绍。
title: 概览
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/1.webp
slug: /sensecraft-ai/overview
aliases:
  - /sensecraft_ai_overview
sidebar_position: 1
last_update:
  date: 11/28/2024
  author: Citric
createdAt: '2024-11-28'
updatedAt: '2026-03-23'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/overview/
---


# SenseCraft AI 概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 是一个一体化平台，旨在帮助开发者和创作者轻松构建和部署 AI 项目。该网站提供了丰富的工具和功能，用于简化 AI 开发流程，使不同经验水平的用户都能轻松上手。在本 Wiki 中，我们将介绍 SenseCraft AI 网站的主要板块，并概览其关键特性和功能。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div>

## 首页

SenseCraft AI 的首页是平台的中心枢纽，为用户提供平台主要功能的概览。页面顶部的导航栏包含五个主要板块：**Home**、**Pretrained Models**、**Training**、**Vision Workspace** 和 **About SenseCraft AI**。

首页的主要内容是 **Start your journey: Deploy a pretrained Model** 区域，它通过分步流程引导用户使用 Seeed Studio 硬件部署预训练模型。该流程分为三个主要步骤：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/2.png" style={{width:1000, height:'auto'}}/></div>

1. 从模型仓库中选择一个预训练模型。
1. 使用 "Deploy and Preview Vision" 功能实时部署并预览模型结果。
1. 将模型应用到已连接的 Seeed Studio 硬件上，并查看传感器输出。

此功能对希望快速体验 AI 模型、而无需亲自完成完整训练流程的用户尤其有用。

继续向下滚动页面，用户会看到对 "Training Models" 功能的介绍。该部分对与模型训练相关的内容进行了分类，方便用户查找所需信息，以利用平台资源训练自己的 AI 模型。

最后，首页展示了 "Sharing Vision AI Models" 功能，鼓励 SenseCraft AI 社区中的协作与知识共享。该功能允许用户将自己训练的模型分享给他人，促进社区成员之间的互相学习与成果复用。

## 用户账号

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 是一个开放平台，用户无需登录即可浏览所有公开的 AI 模型和首页内容。只有在需要部署模型或分享自己的模型时，才需要注册并登录账号。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 和 [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login)（原 SenseCAP Cloud Platform）都是 seeed studio 为用户提供的软件服务，用户只需在任意一个平台注册账号，即可使用同一账号登录两个平台。

### 注册

1. 输入你的姓名和有效邮箱，然后点击 **get capcha**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png" style={{width:1000, height:'auto'}}/></div>

2. 在邮箱中获取验证码，并在注册页面输入验证码。

:::note
验证码有效期为 10 分钟，请在 10 分钟内完成注册。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png" style={{width:700, height:'auto'}}/></div>

3. 输入密码和其他用户信息，完成注册。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png" style={{width:1000, height:'auto'}}/></div>

### 登录

使用你注册的邮箱账号登录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png" style={{width:1000, height:'auto'}}/></div>

### 忘记密码

如果忘记账号密码，请输入你的有效账号并获取验证码，以设置新密码。

验证码的有效期为 10 分钟，请在 10 分钟内完成重置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png" style={{width:1000, height:'auto'}}/></div>

### 修改密码

1. 访问用户账号页面并点击 "Change your password" 按钮。

2. 输入旧密码和新密码以完成密码修改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png" style={{width:1000, height:'auto'}}/></div>

## 预训练模型

SenseCraft AI 网站中的 Pretrained Models 板块是一个全面的 AI 模型仓库，用户可以轻松访问并在自己的设备上部署这些模型。当前模型仓库中已收录超过 400 个模型，并在持续增加中。

### 模型分类

为了帮助用户找到最适合自己需求的模型，页面左侧展示了按类别划分的模型列表。用户可以根据多种条件筛选模型，例如：

- **Supported Devices**：用户可以选择与自己所用硬件兼容的模型，以确保无缝集成和最佳性能。

- **Task**：模型根据其设计执行的任务进行分类，例如检测（Detection）、分类（Classification）或分割（Segmentation）。这使用户能够快速找到符合项目需求的模型。

- **Publisher**：用户还可以根据发布者筛选模型，方便查找来自可信来源或特定开发者的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/3.png" style={{width:1000, height:'auto'}}/></div>

### 模型详情

Pretrained Models 页面中部区域展示了每个模型的关键信息，包括名称、简要描述以及可视化示意。通过这一快速概览，用户可以大致了解每个模型的功能及其在项目中的适用性。

若要查看某个模型的详细信息，用户只需点击该模型的卡片，即可进入该模型的专属页面，在那里可以找到更深入的描述、性能指标，以及在设备上安装和使用该模型的分步说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/4.png" style={{width:1000, height:'auto'}}/></div>

### 我的模型

除了仓库中可用的公共 AI 模型外，SenseCraft AI 还为已训练或上传自己模型的用户提供了一个个性化空间。用户登录 SenseCraft AI 账号后，可以访问 "My Own Models" 区域，在那里查找和管理自己的私有模型。

"My Own Models" 区域中的模型完全私有，只能由创建它们的用户访问。不过，用户可以选择将自己的模型设为公开，让 SenseCraft AI 社区中的其他人也能受益于其成果。此功能促进了用户之间的协作与知识共享，营造出一个充满活力且互相支持的 AI 爱好者社区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/5.png" style={{width:1000, height:'auto'}}/></div>

## 训练

SenseCraft AI 网站中的 Training 板块旨在帮助用户创建针对特定使用场景的自定义模型。目前，Training 页面提供两种训练类型：分类（Classification）和目标检测（Object Detection）。

### Classification

Classification 训练基于 TensorFlow，完全在网页端运行，不受操作系统限制。该功能允许用户使用本地电脑摄像头或 Seeed Studio 产品采集的图像来训练模型。训练模型时，用户每个类别只需采集 40–50 张图片，无需手动标注。训练过程非常快速，只需几分钟即可生成模型。此外，网页界面提供实时预览功能，使用户能够即时查看训练后模型的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/6.png" style={{width:1000, height:'auto'}}/></div>

### Object Detection

Object Detection 训练基于 YOLO-World 模型，并分为两个子模块：**Quick Training** 和 **Image Collection Training**。

- **Quick Training**：该选项允许用户仅通过输入目标名称，就能生成单类别识别模型。正如网站所述：“Based on YOLO - World object detection model, you can quickly generate a single-class recognition model by inputting text.”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/7.png" style={{width:1000, height:'auto'}}/></div>

Object Detection 训练中的 Quick Training 选项由 YOLO-World 目标检测模型驱动，它是一种先进的实时目标检测系统。当用户输入一个目标名称时，系统会利用 YOLO-World 模型的预训练知识，生成一个专门用于检测该目标的单类别识别模型。

YOLO（You Only Look Once）模型家族以其在目标检测任务中的高速度和高精度而闻名。它将输入图像划分为网格，并为每个网格单元预测边界框和类别概率。尤其是 YOLO-World 模型，基于覆盖广泛物体的大规模数据集进行训练，使其能够很好地泛化到各种检测任务中。

通过构建在 YOLO-World 模型之上，快速训练选项继承了其强大的特征提取和目标定位能力。预训练模型作为坚实的基础，使用户无需大量训练数据或计算资源，就能快速生成单类别识别模型。

然而，需要注意的是，快速训练选项在适应性和精度方面可能存在一定局限性。由于生成的模型依赖于 YOLO-World 模型的既有知识，它可能无法始终捕捉到用户指定目标的独特特征或变化。这可能会在某些场景下导致精度下降或误检。

- **图像采集训练**：此选项要求用户输入目标名称并上传相关图像。网站对该功能的描述如下：“Based on YOLO - World object detection model, you can customize the training for text and image, which can improve the detection accuracy of the generated model.”

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/8.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 中的图像采集训练选项允许用户使用自己的数据集来训练自定义目标检测模型，而无需进行手动图像标注。该功能基于 YOLO-World 目标检测模型，并采用了一种特殊的训练方法，从而无需进行边界框标注或目标分割。

该训练选项背后的关键原理是弱监督学习的概念。在弱监督学习中，模型仅使用图像级标签来学习检测目标，而不需要精确的目标定位或边界框标注。作为图像采集训练基础的 YOLO-World 模型，正是被设计为能够有效利用这种方法。

在训练过程中，用户提供一组图像以及他们希望检测的相应目标名称。随后，模型学习将图像中存在的视觉模式和特征与给定的目标名称关联起来。通过让模型接触包含目标对象的多样化图像，它会学习泛化能力，从而在新的、未见过的图像中检测这些目标。

YOLO-World 模型的架构和训练方法使其能够在无需显式边界框标注的情况下，自动发现并定位图像中的目标。这是通过卷积神经网络（CNN）与特殊损失函数的组合实现的，这些损失函数会引导模型关注图像中信息量最高的区域。

通过消除手动图像标注的需求，图像采集训练选项大大减少了创建自定义目标检测模型所需的工作量和时间。用户只需收集包含待检测目标的图像数据集，提供目标名称，然后让模型自动学习识别这些目标。

但是，需要注意的是，数据集的质量和多样性仍然在最终模型性能中起着至关重要的作用。模型能否很好地泛化并准确检测目标，取决于训练图像的多样性和代表性。用户应尽量收集覆盖不同目标外观、姿态、背景和光照条件的数据集，以确保模型具有稳健的性能。

通过提供这两种训练选项，SenseCraft AI 使用户能够创建针对其特定需求优化的自定义目标检测模型。快速训练选项非常适合需要简单的单类别识别模型并希望快速生成的用户。另一方面，图像采集训练选项适用于需要更高精度和更高定制化模型的用户，因为它允许用户以目标名称和图像的形式提供自己的训练数据。

## 发布模型

SenseCraft AI 是一个支持开发者和建模者内容共创的平台！在这里你可以与全球开发者社区分享你的成果。同时，通过我们的 AI 开放平台，你将有机会把自己的 AI 模型与商业化需求相结合，为不同行业的企业和用户提供有价值的解决方案。我们期待你的参与和贡献，共同实现 AI 技术在商业领域的创新与应用！

1. 要添加一个模型，你需要完成以下信息：

- 模型名称
- 模型摘要：对模型的简单描述
- 模型介绍：对模型的详细描述
- 模型部署准备：模型部署的前置条件，可选填
- 支持设备：选择模型将部署到哪种设备，目前平台支持 Jetson 设备、XIAO ESP32-S3 等。
- 模型推理示例图片：上传一张模型推理结果的图片

2. 信息填写完成后点击下一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png" style={{width:1000, height:'auto'}}/></div>

1. 输入以下关于模型参数的信息。
2. “发布模型到公共 AI 模型库”默认勾选，保存后模型将对所有人可见；如果取消勾选，保存后模型仅对你自己可见。

|     | Content|
| --- | --- |
| Model Format | 1 模型的正确格式<br />2 选项：ONNX, Tensor RT, Pytorch<br />3 平台将支持更多模型格式 |
| Task | 1 模型的任务类型<br />2 选项：Detection,Classification,Segment,Pose |
| AI Framework | 1 模型所使用的 AI 框架<br />2 选项：YOLOV5,YOLOV8,FOMO,ModileNetV2,PFLD<br />3 平台将支持更多 AI 框架 |
| Classes | 1 模型针对特定任务或问题进行分类的类别或标签<br />2 请确保类别 id 与类别名称正确匹配。 |
| Model File | 上传一种你所选择格式的模型文件。 |
| Model Precision | 1 模型精度<br />2 选项：Int8,Float16,Float32 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::note
为确保平台的健康发展，我们会对用户发布的模型和内容进行审核。如发现任何违法、违规或侵权内容，将不允许发布，并可能相应删除。
感谢你为维护健康的平台环境所给予的理解与支持！
:::

### 自定义 AI 模型管理

用户对自己的模型拥有全部操作权限。

**发布模型**：发布一个私有模型，使其对所有用户可用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png" style={{width:1000, height:'auto'}}/></div>

**私有化模型**：将一个公共模型私有化，模型仅对你自己可见。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png" style={{width:1000, height:'auto'}}/></div>

**删除模型**：删除一个私有模型，公共模型不允许删除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png" style={{width:1000, height:'auto'}}/></div>

**编辑模型**：允许修改模型的所有信息。

## 视觉工作区

SenseCraft AI 的视觉工作区部分专注于设备相关操作和已训练模型的部署。它为用户提供了一个无缝界面，用于将自定义模型集成到各种硬件设备中，并实时预览结果。目前支持的设备包括 Grove Vision AI V2、XIAO ESP32S3 Sense、NVIDIA Jetson 和 reCamera。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/9.png" style={{width:400, height:'auto'}}/></div>

### 模型部署与预览

当用户成功上传一个已训练模型后，可以在视觉工作区中进入对应设备的页面。在 “Process” 部分，用户可以查看来自已连接设备的实时检测画面，从而预览模型的实际运行效果。

这一实时预览功能尤为有价值，因为它使用户能够评估模型在设备视频流中检测目标的准确性和有效性。用户可以直观地查看模型生成的边界框、标签和置信度分数，从而立即获得关于模型性能的反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/10.png" style={{width:1000, height:'auto'}}/></div>

### 模型微调

除了实时预览之外，视觉工作区还提供了微调模型置信度阈值参数的能力。该功能允许用户调整模型对目标检测的敏感度，从而在精确率与召回率之间取得平衡。

通过调节置信度阈值，用户可以控制模型在检测目标时的行为。较高的置信度阈值会使模型更加严格，只检测置信度很高的目标；相反，较低的置信度阈值会使模型更加敏感，即使置信度较低也会进行检测。

这种微调能力使用户能够根据自身的具体需求，对模型进行适配和优化，使其性能更好地契合应用特性以及设备所处的运行环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/11.png" style={{width:1000, height:'auto'}}/></div>

### 输出与应用开发

Vision Workspace 不仅支持模型部署和预览，还为用户提供了使用训练好的模型快速构建原型和开发应用的工具。"Output" 部分为用户提供了一系列选项，用于与模型结果交互并将其集成到所需的应用中。

以 XIAO ESP32S3 Sense 为例，Vision Workspace 支持多种通信协议和接口，例如 MQTT、GPIO 和 Serial Port。这些选项使用户能够将模型输出无缝传输到其他系统、基于目标检测结果触发动作，或对检测结果进行进一步处理。

通过提供这些输出选项，SenseCraft AI 简化了将训练好的模型集成到实际应用中的过程。用户可以快速尝试不同的通信方式，并开发利用其模型目标检测能力的原型。

例如，用户可以利用 MQTT 输出将实时目标检测数据发送到远程服务器，用于监控或分析。或者，他们可以使用 GPIO 输出来触发物理动作，例如根据特定目标的存在来打开灯或激活警报。

Serial Port 输出提供了一种简单直接的方式，在设备与其他系统之间建立通信，使用户能够传输模型结果以进行进一步处理或可视化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/12.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
