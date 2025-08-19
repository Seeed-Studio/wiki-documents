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

SenseCraft AI 是一个强大的平台，提供了与多种设备兼容的广泛 AI 模型，包括 Grove Vision AI V2。Grove Vision AI V2 是一个综合性的 AI 视觉模块，集成了摄像头、处理器和 AI 功能，使得将计算机视觉应用集成到您的项目中变得简单。在本教程中，我们将指导您如何在 Grove Vision AI V2 上使用 SenseCraft AI 模型并预览模型的输出。我们还将探讨一些关键概念和设置，帮助您理解并优化模型的性能。

## 前置条件

在开始之前，请确保您具备以下条件：

- **Grove Vision AI V2**：确保您已准备好 Grove Vision AI V2 模块，并将其正确连接到开发板或计算机。

- **OV5647-62 FOV 摄像头模块（适用于 Raspberry Pi 3B+4B）**：用于图像输入。

- **USB-C 数据线**：您需要一根 USB 数据线将 Grove Vision AI V2 模块连接到计算机，用于编程和供电。

- **访问 SenseCraft AI 模型库网页**：确保您拥有稳定的互联网连接，并能够访问 SenseCraft AI 网站。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 摄像头模块<br />适用于 Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 第 1 步：筛选适用于 Grove Vision AI V2 的模型

打开您的网页浏览器，导航到 SenseCraft AI 模型库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

模型库页面展示了适用于不同设备和应用的广泛 AI 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

在网页左侧边栏，找到 **支持的设备** 部分。从设备列表中，点击 **Grove - Vision AI V2**，以筛选与您的特定设备兼容的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

此步骤确保您只看到可以部署并运行在 Grove Vision AI V2 模块上的模型。

## 第 2 步. 选择模型

在本教程中，我们将以 **Person Detection（人检测）** 模型为例进行演示。不过，您可以根据自己的兴趣和需求探索并尝试其他模型。

点击 **Person Detection** 模型以打开其专属页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，您将看到有关该模型的详细信息，包括其描述、模型精度和模型格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

在模型页面上，点击页面顶部的 **Deploy Model（部署模型）** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

此操作将启动所选模型的部署过程，准备将其下载并运行在您的 Grove Vision AI V2 模块上。

## 第 3 步. 连接设备

部署模型后，点击部署页面下方出现的 **Connect Device（连接设备）** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

此时将打开一个新页面，请通过 USB-C 数据线将您的 Grove Vision AI V2 连接到计算机。

在设备连接页面上，您将看到模型信息的摘要，包括其名称和模型 ID。仔细检查这些信息以确保为您的 Grove Vision AI V2 选择了正确的模型。如果信息无误，点击 **Confirm（确认）** 按钮以继续部署模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

确认模型信息后，将弹出一个窗口，要求您选择 Grove Vision AI V2 模块的串口。串口是计算机与 Grove Vision AI V2 模块之间的通信通道。选择与您的 Grove Vision AI V2 对应的正确端口号。如果不确定，可以参考操作系统的设备管理器或模块的文档以确定正确的端口。

点击 **Connect（连接）** 按钮以建立计算机与 Grove Vision AI V2 模块之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## 第 4 步. 上传模型

连接建立后，所选模型将开始下载到您的 Grove Vision AI V2 模块。模型上传过程可能需要大约 3-5 分钟，具体时间取决于模型的大小和您的网络连接速度。在此步骤中，必要的模型文件和依赖项将被传输到 Grove Vision AI V2 模块，为本地运行 AI 模型做好准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## 第 5 步 模型预览

在模型上传成功后，预览功能会自动启动。预览窗口将显示来自 Grove Vision AI V2 摄像头的实时视频流，并在视频上叠加模型的检测结果。以人员检测模型为例，您将在视频流中看到围绕检测到的人员绘制的边界框。每个边界框代表模型识别出的一名人员。预览功能允许您实时查看模型的输出，提供关于其性能的即时视觉反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## 微调模型（可选）

1. 如果您希望优化模型性能或使其适应您的特定用例，可以使用预览部分下方提供的选项微调模型的设置。

2. 您可以调整的两个重要参数是“置信度阈值”和“交并比（IoU）阈值”。

   - **置信度阈值**：此值决定模型将检测视为有效所需的最低置信度水平。较高的置信度阈值会减少检测数量，但检测结果的确定性更高；而较低的阈值会允许更多的检测，但可能包括一些误报。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU 阈值**：IoU 是一种度量，用于衡量预测边界框与真实边界框之间的重叠程度。它用于确定目标检测的准确性。IoU 阈值设置了将检测视为真正正例所需的最低 IoU 值。调整此阈值可以帮助微调模型的精确度和召回率。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 尝试不同的置信度阈值和 IoU 阈值，以找到在准确检测人员和最小化误报之间的最佳平衡。最佳设置可能因您的具体应用以及图像或视频流的特性而异。

## 总结

恭喜！您已成功在 Grove Vision AI V2 模块上部署了 SenseCraft AI 人员检测模型，预览了其输出，并学习了如何微调模型性能。

通过遵循本教程中概述的步骤，您可以轻松探索和试验 SenseCraft AI 仓库中可用的各种 AI 模型，并将其应用于 Grove Vision AI V2 模块。SenseCraft AI 平台提供了用户友好的界面和广泛的模型选择，使其对初学者和经验丰富的开发者都非常友好。

请记得参考 SenseCraft AI 和 Grove Vision AI V2 模块提供的文档和资源，以获取有关支持的模型、其功能以及任何其他可用配置选项的更多信息。

欢迎探索其他模型，尝试不同的设置，并将其适配到您的特定项目或应用中。SenseCraft AI 与 Grove Vision AI V2 模块的结合为计算机视觉应用打开了无限可能的大门。

祝您在 Grove Vision AI V2 上使用 SenseCraft AI 模型时实验愉快，创作顺利！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>