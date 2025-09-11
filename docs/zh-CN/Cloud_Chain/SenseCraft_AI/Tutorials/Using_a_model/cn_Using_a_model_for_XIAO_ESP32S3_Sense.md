---
sidebar_position: 1
description: 如何为 XIAO ESP32S3 Sense 使用模型
title: 为 XIAO ESP32S3 Sense 使用模型
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /cn/sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
---

# 为 XIAO ESP32S3 Sense 使用模型

SenseCraft AI 是一个强大的平台，提供了与各种设备兼容的大量 AI 模型库。它允许开发者和爱好者轻松地在他们的硬件上部署和试验不同的 AI 模型。在这个综合教程中，我们将指导您完成在 XIAO ESP32S3 Sense 开发板上使用 SenseCraft AI 模型并预览模型输出的过程。我们还将深入探讨一些关键概念和设置，帮助您理解和优化模型的性能。

## 前提条件

在开始之前，请确保您具备以下条件：

- **XIAO ESP32S3 Sense 开发板**：这是一个紧凑且多功能的开发板，结合了 ESP32-S3 微控制器的强大功能以及一系列传感器和外设。

- **USB-C 数据线**：您需要一根 USB 数据线将 XIAO ESP32S3 Sense 开发板连接到计算机进行编程和供电。

- **访问 SenseCraft AI 模型库网页**：确保您有稳定的互联网连接并能够访问 SenseCraft AI 网站。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 步骤 1. 为 XIAO ESP32S3 Sense 筛选模型

打开您的网页浏览器并导航到 SenseCraft AI 模型仓库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

模型仓库页面显示了适用于不同设备和应用的各种 AI 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

在网页的左侧边栏中，找到**支持的设备**部分。从设备列表中，点击 **XIAO ESP32S3 Sense** 来筛选与您特定设备兼容的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

此步骤确保您只看到可以在 XIAO ESP32S3 Sense 开发板上部署和运行的模型。

## 步骤 2. 选择模型

在本教程中，我们将使用**人脸检测**模型作为示例。但是，您可以根据自己的兴趣和需求自由探索和试验其他模型。

点击**人脸检测**模型以打开其专用页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，您将找到关于该模型的详细信息，包括其描述、模型精度和模型格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，点击位于页面顶部的**部署模型**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

此操作将启动所选模型的部署过程，准备将其下载并在您的 XIAO ESP32S3 Sense 开发板上运行。

## 步骤 3. 连接您的设备

点击部署模型按钮后，点击部署页面下方出现的**连接设备**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

将打开一个新页面，此时，请通过 USB-C 线缆将您的 XIAO ESP32S3 Sense 连接到计算机。

在设备连接页面上，您将看到模型信息的摘要，包括其名称和模型 ID。仔细查看详细信息，确保为您的 XIAO ESP32S3 Sense 开发板选择了正确的模型。如果信息准确，点击**确认**按钮继续进行模型部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

确认模型信息后，将弹出一个窗口，要求您为 XIAO 开发板选择串行端口。串行端口是您的计算机和 XIAO ESP32S3 Sense 开发板之间的通信通道。选择与您的 XIAO ESP32S3 Sense 对应的正确端口号。如果您不确定，可以参考操作系统的设备管理器或开发板的文档来识别正确的端口。

点击**连接**按钮以建立计算机和 XIAO 开发板之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 模型上传

一旦连接建立，所选模型将开始下载到您的 XIAO 开发板。模型上传过程可能需要大约 1-2 分钟，具体取决于模型的大小和您的网络连接速度。在此步骤中，必要的模型文件和依赖项将传输到 XIAO ESP32S3 Sense 开发板，为在本地运行 AI 模型做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 模型预览

模型上传成功后，预览功能将自动启动。预览窗口将显示来自您的 XIAO ESP32S3 Sense 摄像头的实时视频流，以及叠加在视频上的模型检测结果。在人脸检测模型的情况下，您将看到在视频流中检测到的人脸周围绘制的边界框。每个边界框代表模型识别出的一张人脸。预览功能允许您实时查看模型的输出，为您提供其性能的即时视觉反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## 微调模型（可选）

1. 如果您想优化模型的性能或使其适应您的特定用例，您可以使用预览部分下方提供的选项来微调模型的设置。

2. 您可以调整的两个重要参数是"置信度阈值"和"交并比（IoU）阈值"。

   - **置信度阈值**：此值确定模型将检测视为有效所需的最低置信度水平。较高的置信度阈值将导致检测数量较少但确定性更高，而较低的阈值将允许更多检测但可能包含一些误报。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU 阈值**：IoU 是一个衡量预测边界框与真实边界框之间重叠程度的指标。它用于确定目标检测的准确性。IoU 阈值设置检测被视为真正例所需的最小 IoU 值。调整此阈值可以帮助微调模型的精确度和召回率。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 尝试置信度阈值和 IoU 阈值的不同值，以找到准确检测人脸和最小化误报之间的最佳平衡。最佳设置可能因您的特定应用和图像或视频流的特征而异。

## 结论

恭喜！您已成功在 XIAO ESP32S3 Sense 开发板上部署了 SenseCraft AI 人脸检测模型，预览了其输出，并学会了如何微调模型的性能。

通过遵循本教程中概述的步骤，您可以轻松探索和试验 SenseCraft AI 存储库中在您的 XIAO ESP32S3 Sense 上可用的各种 AI 模型。SenseCraft AI 平台提供了用户友好的界面和广泛的模型选择，使初学者和经验丰富的开发者都能轻松使用。

请记住参考 SenseCraft AI 和 XIAO ESP32S3 Sense 开发板提供的文档和资源，以获取有关支持的模型、其功能以及任何可用的其他配置选项的更多信息。

随时探索其他模型，尝试不同的设置，并将它们适应到您的特定项目或应用中。SenseCraft AI 和 XIAO ESP32S3 Sense 开发板的结合提供了无限的可能性。

祝您在 XIAO ESP32S3 Sense 上使用 SenseCraft AI 模型进行实验和创作愉快！

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
