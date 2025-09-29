---
sidebar_position: 8
description: 本文介绍如何通过 GPIO 发送模型的识别结果。
title: 通过 GPIO 输出模型结果
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /cn/sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上为 XIAO ESP32S3 Sense 配置模型输出和 GPIO

本 wiki 文章提供了一个分步指南，介绍如何使用 SenseCraft AI 平台为 XIAO ESP32S3 Sense 开发板配置模型输出和 GPIO 设置。通过遵循这些说明，您将学会如何根据训练模型检测到的特定事件条件触发 GPIO 电平变化。

## 先决条件

在开始之前，请确保您具备以下条件：

1. XIAO ESP32S3 Sense 开发板
2. USB-C 数据线
3. XIAO 扩展板底座（带 OLED）
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>XIAO 扩展板底座（带 OLED）</th>
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

## 步骤 1. 访问 SenseCraft AI Vision 工作区并连接 XIAO ESP32S3 Sense

打开您的网页浏览器，导航到 SenseCraft AI Vision 工作区页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备中选择 XIAO ESP32S3 Sense 开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将您的 XIAO ESP32S3 Sense 开发板连接到计算机。连接后，点击 SenseCraft AI Vision 工作区页面左上角的**连接**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 XIAO ESP32S3 Sense 已加载模型

在继续之前，请确保您的 XIAO ESP32S3 Sense 开发板已加载训练好的模型。如果您尚未加载模型，请参考 SenseCraft AI 文档了解如何训练和部署模型到您的设备。

- [为 XIAO ESP32S3 Sense 使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 配置 GPIO 输出

在 Vision 工作区页面的左侧边栏中，点击**输出**选项。从可用的输出选项中，选择 **GPIO** 以访问 GPIO 配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

在页面右侧，点击**满足事件条件时触发动作**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

将出现一个对话框，提示您输入各种参数，这些参数将作为改变 GPIO 电平的触发条件。这些参数包括：

- **对象**：指定您的模型应检测的对象以触发 GPIO 电平变化。例如，如果您希望在检测到人脸时 GPIO 发生变化，则输入"face"。

- **条件**：选择触发器发生必须满足的条件。选项包括"大于"、"小于"、"等于"等。例如，选择"大于"意味着当检测到的对象置信度大于指定值时 GPIO 将发生变化。

- **置信度**：设置对象检测触发 GPIO 变化所需的最小置信度。此值范围从 1 到 100，100 为最高置信度。

- **GPIO**：选择您想要控制的 XIAO ESP32S3 Sense 上的特定 GPIO 引脚。可用选项包括 GPIO1(DO)、GPIO2(D1) 等。

- **默认状态**：选择所选 GPIO 引脚的默认状态。选项包括"低电平"和"高电平"。

- **激活状态**：指定当满足触发条件时 GPIO 引脚应变化到的状态。选项包括"低电平"和"高电平"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

配置所需的触发条件后，点击**确认**按钮保存设置。最后，点击**发送**按钮将 GPIO 触发命令传输到您的 XIAO ESP32S3 Sense 开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

XIAO 开发板现在将执行该命令，您可以通过 XIAO 扩展板底座和 Grove OLED 观察连接的 Grove LED 的效果。

:::caution
请记住，GPIO 输出功能依赖于 SenseCraft AI 平台与您的 XIAO ESP32S3 Sense 开发板之间基于网络的连接。如果连接丢失或中断，基于模型检测的 GPIO 电平变化功能将停止工作。请确保在整个过程中保持稳定的连接。
:::

## 结论

通过遵循这个分步指南，您已经学会了如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 开发板配置模型输出和 GPIO 设置。现在您可以根据训练模型检测到的特定事件条件触发 GPIO 电平变化。此功能为使用 XIAO ESP32S3 Sense 和 SenseCraft AI 创建交互式项目和应用程序开辟了广泛的可能性。请记住保持网络平台和您的设备之间的稳定连接，以确保无缝操作。

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
