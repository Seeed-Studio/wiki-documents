---
sidebar_position: 2
description: 如何在 Grove Vision AI V2 上使用模型
title: 在 Grove Vision AI V2 上使用模型
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2/
---

# 在 Grove Vision AI V2 上使用模型

SenseCraft AI 是一个功能强大的平台，提供了广泛的 AI 模型，这些模型兼容多种设备，包括 Grove Vision AI V2。Grove Vision AI V2 是一个集成了摄像头、处理器和 AI 功能的综合视觉模块，使你可以轻松地将计算机视觉应用集成到你的项目中。在本教程中，我们将指导你在 Grove Vision AI V2 上使用 SenseCraft AI 模型并预览模型输出的整个过程。我们还将介绍一些关键概念和设置，帮助你理解并优化模型性能。

## 前置准备

在开始之前，请确保你具备以下条件：

- **Grove Vision AI V2**：请确保你已经准备好 Grove Vision AI V2 模块，并将其正确连接到开发板或电脑。

- **OV5647-62 FOV Camera Module for Raspberry Pi 3B+4B**：用于图像输入。

- **USB-C 线缆**：你需要一根 USB 线缆，将 Grove Vision AI V2 模块连接到电脑，用于编程和供电。

- **可访问 SenseCraft AI 模型仓库网页**：请确保你有稳定的网络连接，并可以访问 SenseCraft AI 网站。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
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

打开你的网页浏览器，进入 SenseCraft AI 模型仓库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

模型仓库页面展示了适用于不同设备和应用的大量 AI 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

在网页左侧边栏中，找到 **Supported Devices** 部分。在设备列表中点击 **Grove - Vision AI V2**，以筛选出与你的设备兼容的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

此步骤可以确保你只会看到能够在 Grove Vision AI V2 模块上部署和运行的模型。

## 步骤 2. 选择模型

在本教程中，我们将以 **Person Detection** 模型为例。不过，你也可以根据自己的兴趣和需求自由探索和尝试其他模型。

点击 **Person Detection** 模型，打开其专属页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

在模型页面，你可以看到关于该模型的详细信息，包括模型描述、模型精度（Model Precision）和模型格式（Model Format）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，点击页面顶部的 **Deploy Model** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

此操作将启动所选模型的部署流程，为其下载并在你的 Grove Vision AI V2 模块上运行做好准备。

## 步骤 3. 连接你的设备

模型部署完成后，点击部署页面下方出现的 **Connect Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

此时会打开一个新页面，请通过 USB-C 线缆将 Grove Vision AI V2 连接到电脑。

在设备连接页面，你会看到模型信息摘要，包括模型名称和模型 ID。请仔细检查这些信息，以确保为 Grove Vision AI V2 选择的是正确的模型。如果信息无误，点击 **Confirm** 按钮继续进行模型部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

确认模型信息后，会弹出一个窗口，要求你为 Grove Vision AI V2 模块选择串口。串口是电脑与 Grove Vision AI V2 模块之间的通信通道。请选择与你的 Grove Vision AI V2 对应的正确端口号。如果不确定，可以参考操作系统的设备管理器或模块文档来确认正确的端口。

点击 **Connect** 按钮，以建立电脑与 Grove Vision AI V2 模块之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 上传模型

连接建立后，所选模型将开始下载到 Grove Vision AI V2 模块。模型上传过程大约需要 3-5 分钟，具体时间取决于模型大小和网络速度。在此步骤中，所需的模型文件和依赖项会被传输到 Grove Vision AI V2 模块，为在本地运行 AI 模型做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 模型预览

模型上传成功后，预览功能会自动启动。预览窗口会显示来自 Grove Vision AI V2 摄像头的实时视频流，并在视频上叠加模型的检测结果。以 Person Detection 模型为例，你会看到在视频流中被检测到的人物周围绘制出的边界框。每个边界框代表一个被模型识别出的人。预览功能可以让你实时查看模型输出，为其性能提供即时的可视化反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## 微调模型（可选）

1. 如果你希望优化模型性能或让其更好地适应你的特定应用场景，可以使用预览区域下方提供的选项来微调模型设置。

2. 你可以调整的两个重要参数是 “Confidence Threshold” 和 “Intersection over Union (IoU) Threshold”。

   - **Confidence Threshold**：该数值决定模型将一次检测视为有效所需的最低置信度。较高的置信度阈值会减少检测数量，但每次检测的可靠性更高；较低的阈值会允许更多检测，但可能包含一些误报。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**：IoU 是一种度量，用于衡量预测边界框与真实边界框之间的重叠程度，用来判断目标检测的准确性。IoU 阈值设置了一个最小 IoU 数值，只有超过该数值的检测才会被视为真正的正样本。通过调整该阈值，可以帮助你在模型的精度和召回率之间进行微调。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 尝试为 Confidence Threshold 和 IoU Threshold 设置不同的数值，以在准确检测人物和减少误报之间找到最佳平衡。最佳设置可能会因你的具体应用以及图像或视频流的特性而有所不同。

## 总结

恭喜！你已经成功在 Grove Vision AI V2 模块上部署了一个 SenseCraft AI Person Detection 模型，预览了其输出，并学习了如何微调模型性能。

通过遵循本教程中的步骤，你可以在 Grove Vision AI V2 模块上轻松探索和尝试 SenseCraft AI 仓库中提供的各种 AI 模型。SenseCraft AI 平台提供了用户友好的界面和丰富的模型选择，使其对初学者和有经验的开发者都同样友好。

如需了解更多受支持模型、其功能以及可用的其他配置选项，请记得参考 SenseCraft AI 和 Grove Vision AI V2 模块提供的文档和资源。

欢迎随意探索其他模型，尝试不同的设置，并将它们适配到你的特定项目或应用中。SenseCraft AI 与 Grove Vision AI V2 模组的结合，为计算机视觉应用打开了无限可能的世界。

祝你在 Grove Vision AI V2 上使用 SenseCraft AI 模型时，玩得开心、创造出精彩成果！

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
