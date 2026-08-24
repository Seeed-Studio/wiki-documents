---
sidebar_position: 1
description: 如何在 XIAO ESP32S3 Sense 上使用模型
title: 在 XIAO ESP32S3 Sense 上使用模型
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao/
---

# 在 XIAO ESP32S3 Sense 上使用模型

SenseCraft AI 是一个功能强大的平台，提供了与多种设备兼容的大量 AI 模型仓库。它允许开发者和爱好者轻松地在自己的硬件上部署和试验不同的 AI 模型。在本综合教程中，我们将指导你在 XIAO ESP32S3 Sense 开发板上使用 SenseCraft AI 模型并预览模型输出的全过程。我们还将深入介绍一些关键概念和设置，帮助你理解并优化模型性能。

## 前置准备

在开始之前，请确保你具备以下条件：

- **XIAO ESP32S3 Sense 开发板**：这是一款小巧而多功能的开发板，将 ESP32-S3 微控制器的强大性能与多种传感器和外设相结合。

- **USB-C 线缆**：你需要一根 USB 线缆将 XIAO ESP32S3 Sense 开发板连接到电脑，用于编程和供电。

- **可访问 SenseCraft AI 模型仓库网页**：请确保你拥有稳定的网络连接，并且可以访问 SenseCraft AI 网站。

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

打开你的网页浏览器并进入 SenseCraft AI 模型仓库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

模型仓库页面展示了适用于不同设备和应用的大量 AI 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

在网页左侧边栏中，找到 **Supported Devices**（支持的设备）部分。在设备列表中点击 **XIAO ESP32S3 Sense**，以筛选出与你的特定设备兼容的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

此步骤可确保你只会看到能够在 XIAO ESP32S3 Sense 开发板上部署和运行的模型。

## 步骤 2. 选择一个模型

在本教程中，我们将以 **Face Detection**（人脸检测）模型为例。不过，你也可以根据自己的兴趣和需求自由探索和试验其他模型。

点击 **Face Detection** 模型以打开其专属页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

在模型页面，你可以找到关于该模型的详细信息，包括其描述、模型精度（Model Precision）和模型格式（Model Format）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，点击页面顶部的 **Deploy Model** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

此操作将启动所选模型的部署流程，为其下载并在你的 XIAO ESP32S3 Sense 开发板上运行做好准备。

## 步骤 3. 连接你的设备

点击 Deploy Model 按钮后，在部署页面下方点击出现的 **Connect Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

此时会打开一个新页面，请将你的 XIAO ESP32S3 Sense 通过 USB-C 线缆连接到电脑。

在设备连接页面，你会看到模型信息摘要，包括其名称和模型 ID。请仔细检查这些信息，以确保为你的 XIAO ESP32S3 Sense 开发板选择了正确的模型。如果信息无误，点击 **Confirm** 按钮继续进行模型部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

在确认模型信息后，会弹出一个窗口，要求你为 XIAO 开发板选择串口。串口是你的电脑与 XIAO ESP32S3 Sense 开发板之间的通信通道。请选择与你的 XIAO ESP32S3 Sense 对应的正确端口号。如果不确定，可以参考操作系统的设备管理器或开发板文档来确认正确的端口。

点击 **Connect** 按钮，以在电脑和 XIAO 开发板之间建立连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 模型上传

连接建立后，所选模型将开始下载到你的 XIAO 开发板。模型上传过程大约需要 1–2 分钟，具体时间取决于模型大小和网络速度。在此步骤中，所需的模型文件和依赖项会被传输到 XIAO ESP32S3 Sense 开发板，为在本地运行 AI 模型做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 模型预览

模型上传成功后，预览功能会自动启动。预览窗口会显示来自 XIAO ESP32S3 Sense 摄像头的实时视频画面，并在视频上叠加模型的检测结果。以 Face Detection 模型为例，你会在视频流中看到绘制在检测到的人脸周围的边界框。每个边界框代表一个被模型识别出的人脸。预览功能可以让你实时查看模型的输出，为其性能提供即时的可视化反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## 微调模型（可选）

1. 如果你希望优化模型性能或让其更好地适配你的特定使用场景，可以使用预览区域下方提供的选项来微调模型设置。

2. 你可以调整的两个重要参数是 “Confidence Threshold”（置信度阈值）和 “Intersection over Union (IoU) Threshold”（交并比阈值）。

   - **Confidence Threshold**：该数值决定模型将一次检测视为有效所需的最低置信度。较高的置信度阈值会减少检测数量，但每次检测的可靠性更高；而较低的阈值会允许更多检测结果，但可能包含一些误报。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**：IoU 是一种度量，用于衡量预测边界框与真实边界框之间的重叠程度，用来判断目标检测的准确性。IoU 阈值设定了将一次检测视为真正例所需的最小 IoU 值。通过调整该阈值，可以帮助微调模型的精确率和召回率。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 尝试为 Confidence Threshold 和 IoU Threshold 设置不同的数值，以在准确检测人脸和减少误报之间找到最佳平衡。最佳设置可能会因你的具体应用以及图像或视频流的特性而有所不同。

## 总结

恭喜你！你已经成功在 XIAO ESP32S3 Sense 开发板上部署了一个 SenseCraft AI 人脸检测模型，完成了输出预览，并学习了如何微调模型性能。

通过遵循本教程中的步骤，你可以轻松在 XIAO ESP32S3 Sense 上探索和试验 SenseCraft AI 仓库中提供的各种 AI 模型。SenseCraft AI 平台提供了用户友好的界面和丰富的模型选择，使其对初学者和有经验的开发者都同样友好。

如需了解更多受支持模型、其功能以及可用的其他配置选项，请记得参考 SenseCraft AI 和 XIAO ESP32S3 Sense 开发板提供的文档和资源。

欢迎你探索其他模型、尝试不同设置，并将它们应用到你的具体项目或应用中。借助 SenseCraft AI 与 XIAO ESP32S3 Sense 开发板的组合，你可以实现的创意几乎是无限的。

祝你在 XIAO ESP32S3 Sense 上使用 SenseCraft AI 模型时玩得开心、创造更多精彩！

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
