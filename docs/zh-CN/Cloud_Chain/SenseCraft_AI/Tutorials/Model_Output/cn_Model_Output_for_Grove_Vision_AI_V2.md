---
sidebar_position: 7
description: 本文介绍如何使用 Grove Vision AI V2 和 SenseCraft AI 获取输出。
title: Grove Vision AI V2 的模型输出
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /cn/sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上为 Grove Vision AI V2 配置模型输出

本 wiki 文章提供了一个全面的指南，介绍如何使用 SenseCraft AI 平台为 Grove Vision AI V2 设备配置模型输出设置。通过遵循这些分步说明，您将学会如何基于在 Grove Vision AI V2 上运行的训练模型的输出来设置触发条件和动作。

## 前提条件

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 步骤 1. 访问 SenseCraft AI Vision 工作空间并连接 Grove Vision AI V2

打开您的网页浏览器，导航到 SenseCraft AI Vision 工作空间页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备列表中，选择 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线，将您的 Grove Vision AI V2 设备连接到计算机。设备连接后，点击位于 SenseCraft AI Vision 工作空间页面左上角的 **连接** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 Grove Vision AI V2 上已加载模型

在继续之前，请确保您的 Grove Vision AI V2 设备上已部署了训练好的模型。如果您尚未部署模型，请参考 SenseCraft AI 文档中关于如何训练和部署模型到设备的说明。

- [为 Grove Vision AI V2 使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 访问输出配置设置

在 Vision 工作空间页面的左侧边栏中，点击 **输出** 选项以访问您的 Grove Vision AI V2 设备的输出配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

在页面右侧，点击 **满足事件条件时触发动作** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

将出现一个对话框，提示您输入各种参数，这些参数将作为所需动作的触发条件。这些参数包括：

- **对象**：指定您的模型应检测的对象以触发动作。例如，如果您希望在检测到人时发生动作，则输入"person"。

- **条件**：选择触发器发生必须满足的条件。选项包括"大于"、"小于"、"等于"等。例如，选择"大于"意味着当检测到的对象置信度大于指定值时将触发动作。

- **置信度**：设置触发动作所需的对象检测最低置信度。此值范围从 1 到 100，其中 100 为最高置信度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

配置所需的触发条件后，点击 **确认** 按钮保存设置。

## 步骤 4. 选择所需的触发动作

Grove Vision AI V2 支持两种类型的触发动作：

- **点亮 LED**：当选择此选项时，当满足触发条件时，Grove Vision AI V2 上的板载 LED 将会点亮。

- **将图像保存到 SD 卡**：当选择此选项时，当满足触发条件时，Grove Vision AI V2 将把捕获的图像保存到插入设备的 MicroSD 卡中。

选择所需触发动作旁边的复选框以启用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 将触发配置发送到 Grove Vision AI V2

最后，点击 **发送** 按钮将触发配置传输到您的 Grove Vision AI V2 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 现在将在满足指定条件时执行配置的触发动作，提供模型输出的视觉指示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
请记住，输出功能依赖于 SenseCraft AI 平台和您的 Grove Vision AI V2 设备之间基于网络的连接。如果连接丢失或中断，配置的触发动作将停止工作。请确保在整个过程中保持稳定的连接。
:::

## 结论

通过遵循这个分步指南，您已经学会了如何在 SenseCraft AI 平台上为 Grove Vision AI V2 设备配置模型输出设置和触发动作。您现在可以设置您的设备根据训练模型的输出执行特定动作，例如打开板载 LED 或保存捕获的图像。此功能使您能够使用 Grove Vision AI V2 和 SenseCraft AI 创建交互式应用程序和项目。请记住在网络平台和您的设备之间保持稳定连接以确保无缝操作。

Grove Vision AI V2 本质上仍然是一个 AI 摄像头传感器，所以我们不能期望它做太多超出传感器功能的事情。如果您有额外的 MCU，您可以通过 Grove 接口或引脚对引脚接口做更有趣的项目，SenseCraft AI 只是传递模型的媒介，有关 Grove Vision AI V2 模型的更多 Arduino 例程，请参考 [Grove Vision AI V2 入门指南](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
