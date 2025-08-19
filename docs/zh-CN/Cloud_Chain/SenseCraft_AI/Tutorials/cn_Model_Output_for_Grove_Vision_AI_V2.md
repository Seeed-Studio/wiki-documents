---
sidebar_position: 7
description: 本文描述了如何使用 Grove Vision AI V2 和 SenseCraft AI 获取输出。
title: Grove Vision AI V2 的模型输出
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /cn/sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上配置 Grove Vision AI V2 的模型输出

本文提供了一个全面的指南，介绍如何使用 SenseCraft AI 平台为 Grove Vision AI V2 设备配置模型输出设置。通过遵循这些分步说明，您将学习如何根据运行在 Grove Vision AI V2 上的训练模型的输出设置触发条件和动作。

## 前置条件

在开始之前，请确保您具备以下条件：

1. Grove Vision AI V2 设备

2. 用于将 Grove Vision AI V2 连接到计算机的 USB-C 数据线

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 第 1 步：访问 SenseCraft AI Vision Workspace 并连接 Grove Vision AI V2

打开您的网页浏览器，导航到 SenseCraft AI Vision Workspace 页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备列表中选择 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将 Grove Vision AI V2 设备连接到您的计算机。一旦设备连接成功，点击 SenseCraft AI Vision Workspace 页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 第 2 步：确保 Grove Vision AI V2 上已加载模型

在继续之前，请确保您的 Grove Vision AI V2 设备上已部署了训练模型。如果尚未部署模型，请参考 SenseCraft AI 文档，了解如何将模型训练并部署到设备上。

- [使用 Grove Vision AI V2 的模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki：

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 第 3 步：访问输出配置设置

在 Vision Workspace 页面左侧边栏中，点击 **Output** 选项以访问 Grove Vision AI V2 设备的输出配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

在页面右侧，点击 **Trigger action when event conditions are met** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

一个对话框将会弹出，提示您输入各种参数，这些参数将作为触发所需动作的条件。这些参数包括：

   - **Object**：指定您的模型应检测的对象以触发动作。例如，如果您希望在检测到“人”时触发动作，可以输入“person”。

   - **Condition**：选择必须满足的条件以触发动作。选项包括“Greater than”（大于）、“Less than”（小于）、“Equal to”（等于）等。例如，选择“Greater than”表示当检测到的对象的置信度高于指定值时触发动作。

   - **Confidence**：设置触发动作所需的对象检测的最低置信度。该值范围为 1 到 100，其中 100 表示最高置信度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

配置好所需的触发条件后，点击 **Confirm** 按钮保存设置。

## 第 4 步：选择所需的触发动作

Grove Vision AI V2 支持两种类型的触发动作：

  - **点亮 LED**：选择此选项后，当触发条件满足时，Grove Vision AI V2 上的板载 LED 将会点亮。

  - **将图像保存到 SD 卡**：选择此选项后，当触发条件满足时，Grove Vision AI V2 将会将捕获的图像保存到插入设备的 MicroSD 卡中。

勾选所需触发动作旁边的复选框以启用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## 第 5 步：将触发配置发送到 Grove Vision AI V2

最后，点击 **Send** 按钮将触发配置发送到您的 Grove Vision AI V2 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 现在将根据指定条件执行配置的触发动作，并提供模型输出的视觉指示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
请注意，输出功能依赖于 SenseCraft AI 平台与您的 Grove Vision AI V2 设备之间的基于网络的连接。如果连接丢失或中断，配置的触发动作将停止工作。请确保整个过程中的连接稳定。
:::

## 结论

通过遵循本分步指南，您已经学习了如何在 SenseCraft AI 平台上为 Grove Vision AI V2 设备配置模型输出设置并触发操作。现在，您可以根据训练模型的输出设置设备执行特定操作，例如打开板载 LED 或保存捕获的图像。这一功能使您能够使用 Grove Vision AI V2 和 SenseCraft AI 创建交互式应用程序和项目。请记住，保持网络平台与设备之间的稳定连接，以确保操作顺畅。

Grove Vision AI V2 本质上仍然是一个 AI 摄像头传感器，因此我们不能期望它完成超出传感器功能范围的任务。如果您有额外的 MCU，可以通过 Grove 接口或 Pin to Pin 接口完成更有趣的项目。SenseCraft AI 只是一个传递模型的媒介，关于 Grove Vision AI V2 模型的更多 Arduino 示例，请参考 [Grove Vision AI V2 入门指南](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>