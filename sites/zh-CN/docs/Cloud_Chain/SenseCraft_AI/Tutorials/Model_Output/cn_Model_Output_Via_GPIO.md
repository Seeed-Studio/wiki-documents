---
sidebar_position: 8
description: 本文介绍如何通过 GPIO 发送模型的识别结果。
title: 通过 GPIO 输出模型结果
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-12-05'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao/
---

# 在 SenseCraft AI 上为 XIAO ESP32S3 Sense 配置模型输出和 GPIO

本 Wiki 文章提供了一个分步指南，介绍如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 开发板配置模型输出和 GPIO 设置。通过遵循这些说明，你将学会如何根据训练模型检测到的特定事件条件来触发 GPIO 电平变化。

## 前置准备

在开始之前，请确保你已经准备好以下物品：

1. XIAO ESP32S3 Sense 开发板
2. USB-C 数据线
3. 带 OLED 的 XIAO 扩展板底座
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>带 OLED 的 XIAO 扩展板底座</th>
      <th>Grove LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 步骤 1. 进入 XIAO ESP32S3 Sense 工作区并连接设备

通过 **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`** 进入 XIAO ESP32S3 Sense 工作区，或者使用[工作区的直接链接](https://sensecraft.seeed.cc/ai/device/local/32)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将 XIAO ESP32S3 Sense 开发板连接到电脑。连接完成后，点击工作区页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 XIAO ESP32S3 Sense 上已加载模型

在继续之前，请确保你的 XIAO ESP32S3 Sense 开发板上已经加载了一个训练好的模型。如果你还没有加载模型，请参考 SenseCraft AI 文档，了解如何训练模型并将其部署到设备上。

- [在 XIAO ESP32S3 Sense 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果你想使用自己训练的模型，可以参考以下两篇 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 配置 GPIO 输出

在工作区页面左侧边栏中，点击 **Output** 选项。在可用的输出选项中选择 **GPIO**，进入 GPIO 配置设置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

在页面右侧，点击 **Trigger action when event conditions are met** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

此时会弹出一个对话框，提示你输入各种参数，这些参数将作为改变 GPIO 电平的触发条件。这些参数包括：

- **Object**：指定模型需要检测到的对象，以触发 GPIO 电平变化。例如，如果你希望在检测到人脸时改变 GPIO 电平，可以填写 “face”。

- **Condition**：选择触发发生所需满足的条件。选项包括 “Greater than”、“Less than”、“Equal to” 等。例如，选择 “Greater than” 表示当检测到的对象置信度大于指定值时，GPIO 将发生变化。

- **Confidence**：设置触发 GPIO 变化所需的最小目标检测置信度。该数值范围为 1 到 100，100 表示最高置信度。

- **GPIO**：选择你希望控制的 XIAO ESP32S3 Sense 上的具体 GPIO 引脚。可用选项包括 GPIO1(DO)、GPIO2(D1) 等。

- **Default Status**：选择所选 GPIO 引脚的默认状态。选项包括 “Low Level” 和 “High Level”。

- **Active Status**：指定当触发条件满足时，GPIO 引脚应切换到的状态。选项包括 “Low Level” 和 “High Level”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

在配置好所需的触发条件后，点击 **Confirm** 按钮保存设置。最后，点击 **Send** 按钮，将 GPIO 触发命令发送到你的 XIAO ESP32S3 Sense 开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

XIAO 开发板现在会执行该命令，你可以通过带 Grove OLED 的 XIAO 扩展板底座观察连接的 Grove LED 上的效果。

:::caution
请注意，GPIO 输出功能依赖于 SenseCraft AI 平台与 XIAO ESP32S3 Sense 开发板之间的网页连接。如果连接丢失或中断，基于模型检测的 GPIO 电平变化功能将停止工作。请在整个过程中确保连接稳定。
:::

## 总结

通过完成本分步指南，你已经学会了如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 开发板配置模型输出和 GPIO 设置。现在，你可以根据训练模型检测到的特定事件条件来触发 GPIO 电平变化。该功能为使用 XIAO ESP32S3 Sense 和 SenseCraft AI 创建交互式项目和应用程序提供了广泛的可能性。请记得保持网页平台与设备之间的连接稳定，以确保系统顺畅运行。

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
