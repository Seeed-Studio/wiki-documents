---
sidebar_position: 2
description: 如何为 Grove Vision AI V2 使用模型
title: 为 Grove Vision AI V2 使用模型
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /cn/sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
---

# 为 Grove Vision AI V2 使用模型

SenseCraft AI 是一个强大的平台，提供与各种设备兼容的广泛 AI 模型，包括 Grove Vision AI V2。Grove Vision AI V2 是一个综合性的 AI 视觉模块，结合了摄像头、处理器和 AI 功能，使您能够轻松地将计算机视觉应用集成到您的项目中。在本教程中，我们将指导您完成在 Grove Vision AI V2 上使用 SenseCraft AI 模型并预览模型输出的过程。我们还将探索一些关键概念和设置，以帮助您理解和优化模型的性能。

## 先决条件

在开始之前，请确保您具备以下条件：

- **Grove Vision AI V2**：确保您已准备好 Grove Vision AI V2 模块，并正确连接到您的开发板或计算机。

- **OV5647-62 FOV 树莓派 3B+4B 摄像头模块**：用于图像输入。

- **USB-C 数据线**：您需要一根 USB 数据线将 Grove Vision AI V2 模块连接到您的计算机进行编程和供电。

- **访问 SenseCraft AI 模型仓库网页**：确保您有稳定的互联网连接并能够访问 SenseCraft AI 网站。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 摄像头模块<br />适用于树莓派 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 步骤 1. 为 Grove Vision AI V2 筛选模型

打开您的网页浏览器并导航到 SenseCraft AI 模型仓库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

模型仓库页面显示了适用于不同设备和应用的各种 AI 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

在网页的左侧边栏中，找到**支持的设备**部分。从设备列表中，点击 **Grove - Vision AI V2** 来筛选与您特定设备兼容的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

此步骤确保您只看到可以在 Grove Vision AI V2 模块上部署和运行的模型。

## 步骤 2. 选择模型

在本教程中，我们将使用**人员检测**模型作为示例。但是，请根据您的兴趣和需求随意探索和试验其他模型。

点击**人员检测**模型以打开其专用页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，您将找到关于该模型的详细信息，包括其描述、模型精度和模型格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，点击位于页面顶部的**部署模型**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

此操作将启动所选模型的部署过程，准备将其下载并在您的 Grove Vision AI V2 模块上运行。

## 步骤 3. 连接您的设备

部署模型后，点击部署页面下方出现的**连接设备**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

将打开一个新页面，此时，请通过 USB-C 线缆将您的 Grove Vision AI V2 连接到计算机。

在设备连接页面上，您将看到模型信息的摘要，包括其名称和模型 ID。仔细查看详细信息以确保为您的 Grove Vision AI V2 选择了正确的模型。如果信息准确，点击**确认**按钮继续进行模型部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

确认模型信息后，将弹出一个窗口要求您为 Grove Vision AI V2 模块选择串行端口。串行端口是您的计算机和 Grove Vision AI V2 模块之间的通信通道。选择与您的 Grove Vision AI V2 对应的正确端口号。如果您不确定，可以参考操作系统的设备管理器或模块文档来识别正确的端口。

点击**连接**按钮以建立您的计算机和 Grove Vision AI V2 模块之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 模型上传

一旦建立连接，所选模型将开始下载到您的 Grove Vision AI V2 模块。模型上传过程可能需要大约 3-5 分钟，具体取决于模型的大小和您的网络连接速度。在此步骤中，必要的模型文件和依赖项将传输到 Grove Vision AI V2 模块，为在本地运行 AI 模型做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 模型预览

模型上传成功后，预览功能将自动启动。预览窗口将显示来自您的 Grove Vision AI V2 摄像头的实时视频流，以及叠加在视频上的模型检测结果。在人员检测模型的情况下，您将看到在视频流中检测到的人员周围绘制的边界框。每个边界框代表模型识别出的一个人。预览功能允许您实时查看模型的输出，提供对其性能的即时视觉反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## 微调模型（可选）

1. 如果您想优化模型的性能或使其适应您的特定用例，您可以使用预览部分下方提供的选项来微调模型的设置。

2. 您可以调整的两个重要参数是"置信度阈值"和"交并比（IoU）阈值"。

   - **置信度阈值**：此值确定模型将检测视为有效所需的最低置信度水平。较高的置信度阈值将导致检测数量较少但确定性更高，而较低的阈值将允许更多检测但可能包含一些误报。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU 阈值**：IoU 是一个衡量预测边界框与真实边界框之间重叠度的指标。它用于确定目标检测的准确性。IoU 阈值设置检测被视为真正例所需的最小 IoU 值。调整此阈值可以帮助微调模型的精确度和召回率。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 尝试不同的置信度阈值和 IoU 阈值值，以找到准确检测人员和最小化误报之间的最佳平衡。最佳设置可能因您的特定应用和图像或视频流的特征而异。

## 结论

恭喜！您已成功在您的 Grove Vision AI V2 模块上部署了 SenseCraft AI 人员检测模型，预览了其输出，并学会了如何微调模型的性能。

通过遵循本教程中概述的步骤，您可以轻松地在您的 Grove Vision AI V2 模块上探索和试验 SenseCraft AI 存储库中提供的各种 AI 模型。SenseCraft AI 平台提供了用户友好的界面和广泛的模型选择，使初学者和经验丰富的开发者都能轻松使用。

请记住参考 SenseCraft AI 和 Grove Vision AI V2 模块提供的文档和资源，以获取有关支持的模型、其功能以及任何可用的其他配置选项的更多信息。

随时探索其他模型，尝试不同的设置，并将它们适应到您的特定项目或应用中。SenseCraft AI 和 Grove Vision AI V2 模块的结合为计算机视觉应用开启了无限可能的世界。

祝您在 Grove Vision AI V2 上使用 SenseCraft AI 模型进行实验和创作愉快！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
