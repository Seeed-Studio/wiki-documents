---
sidebar_position: 7
description: 本文介绍如何使用 Grove Vision AI V2 和 SenseCraft AI 获取输出。
title: Grove Vision AI V2 的模型输出
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2025-09-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai/
---

# 在 SenseCraft AI 上为 Grove Vision AI V2 配置模型输出

本 Wiki 文章提供了一个关于如何在 SenseCraft AI 平台上为 Grove Vision AI V2 设备配置模型输出设置的完整指南。通过按照这些分步说明操作，你将学会如何根据运行在 Grove Vision AI V2 上的已训练模型的输出来设置触发条件和动作。

## 前置条件

在开始之前，请确保你具备以下条件：

1. Grove Vision AI V2 设备

2. 用于将 Grove Vision AI V2 连接到电脑的 USB-C 线缆

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

## 步骤 1. 进入 Grove Vision AI V2 工作区并连接设备

通过 **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`Grove Vision AI V2`** 进入 Grove Vision AI V2 工作区，或者使用[工作区的直接链接](https://sensecraft.seeed.cc/ai/device/local/36)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/grove_vision_ai_v2_workspace.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 线缆，将 Grove Vision AI V2 设备连接到电脑。设备连接完成后，点击工作区页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 Grove Vision AI V2 上已加载模型

在继续之前，请确保你的 Grove Vision AI V2 设备上已经部署了一个训练好的模型。如果你还没有部署模型，请参考 SenseCraft AI 文档，了解如何为设备训练和部署模型。

- [在 Grove Vision AI V2 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

如果你想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 进入输出配置设置

在工作区页面左侧边栏中，点击 **Output** 选项，进入 Grove Vision AI V2 设备的输出配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

在页面右侧，点击 **Trigger action when event conditions are met** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

此时会弹出一个对话框，提示你输入各种参数，这些参数将作为期望动作的触发条件。这些参数包括：

- **Object**：指定模型需要检测到的对象，以触发动作。例如，如果你希望在检测到人时触发动作，可以填写“person”。

- **Condition**：选择触发发生所需满足的条件。选项包括 “Greater than”、“Less than”、“Equal to” 等。例如，选择 “Greater than” 表示当检测到的对象置信度大于指定值时，将触发动作。

- **Confidence**：设置触发动作所需的最小目标检测置信度。该值范围为 1 到 100，100 表示最高置信度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

配置好所需的触发条件后，点击 **Confirm** 按钮保存设置。

## 步骤 4. 选择期望的触发动作

Grove Vision AI V2 支持两种类型的触发动作：

- **点亮 LED**：选择此选项后，当触发条件满足时，Grove Vision AI V2 板载 LED 将被点亮。

- **将图像保存到 SD 卡**：选择此选项后，当触发条件满足时，Grove Vision AI V2 会将捕获的图像保存到插入设备的 MicroSD 卡中。

勾选所需触发动作旁边的复选框以启用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 将触发配置发送到 Grove Vision AI V2

最后，点击 **Send** 按钮，将触发配置发送到 Grove Vision AI V2 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

现在，当满足指定条件时，Grove Vision AI V2 将执行已配置的触发动作，从而以可视化方式指示模型的输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
请注意，输出功能依赖于 SenseCraft AI 平台与 Grove Vision AI V2 设备之间的基于 Web 的连接。如果连接丢失或中断，已配置的触发动作将停止工作。请在整个过程中确保连接稳定。
:::

## 总结

通过完成本分步指南，你已经学会了如何在 SenseCraft AI 平台上为 Grove Vision AI V2 设备配置模型输出设置和触发动作。现在，你可以根据训练模型的输出，让设备执行特定动作，例如点亮板载 LED 或保存捕获的图像。该功能使你能够使用 Grove Vision AI V2 和 SenseCraft AI 创建交互式应用和项目。请记得保持 Web 平台与设备之间的连接稳定，以确保流畅运行。

Grove Vision AI V2 本质上仍然是一个 AI 相机传感器，因此我们不能指望它完成太多超出传感器范畴的工作。如果你有额外的 MCU，可以通过 Grove 接口或 Pin to Pin 接口实现更有趣的项目，SenseCraft AI 只是一个用于传输模型的媒介。关于 Grove Vision AI V2 模块的更多 Arduino 示例，请参考 [Grove Vision AI V2 入门](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
