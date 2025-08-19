---
sidebar_position: 8
description: 本文描述了如何通过 GPIO 发送模型的识别结果。
title: 通过 GPIO 输出模型结果
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /cn/sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上配置 XIAO ESP32S3 Sense 的模型输出和 GPIO

本文提供了一个逐步指南，教您如何使用 SenseCraft AI 平台为 XIAO ESP32S3 Sense 板配置模型输出和 GPIO 设置。通过遵循这些说明，您将学习如何根据训练模型检测到的特定事件条件触发 GPIO 电平变化。

## 前置条件

在开始之前，请确保您具备以下设备：

1. XIAO ESP32S3 Sense 板
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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 第 1 步：访问 SenseCraft AI Vision Workspace 并连接 XIAO ESP32S3 Sense

打开您的网页浏览器，导航到 SenseCraft AI Vision Workspace 页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备中选择 XIAO ESP32S3 Sense 板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将您的 XIAO ESP32S3 Sense 板连接到计算机。连接后，点击 SenseCraft AI Vision Workspace 页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 第 2 步：确保 XIAO ESP32S3 Sense 上加载了模型

在继续之前，请确保您的 XIAO ESP32S3 Sense 板上已加载了训练好的模型。如果尚未加载模型，请参考 SenseCraft AI 文档，了解如何训练和部署模型到设备。

- [在 XIAO ESP32S3 Sense 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki：

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 第 3 步：配置 GPIO 输出

在 Vision Workspace 页面左侧边栏中，点击 **Output** 选项。从可用的输出选项中选择 **GPIO**，以访问 GPIO 配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

在页面右侧，点击 **Trigger action when event conditions are met** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

将弹出一个对话框，提示您输入各种参数，这些参数将作为触发条件，用于更改 GPIO 电平。这些参数包括：

   - **Object（对象）**：指定模型应检测的对象，以触发 GPIO 电平更改。例如，如果希望在检测到“人脸”时更改 GPIO，则输入“face”。

   - **Condition（条件）**：选择触发发生时必须满足的条件。选项包括“Greater than（大于）”、“Less than（小于）”、“Equal to（等于）”等。例如，选择“Greater than”表示当检测到的对象置信度高于指定值时，GPIO 将发生变化。

   - **Confidence（置信度）**：设置触发 GPIO 更改所需的最低置信度水平。该值范围为 1 到 100，100 表示最高置信度。

   - **GPIO**：选择 XIAO ESP32S3 Sense 上您希望控制的具体 GPIO 引脚。可用选项包括 GPIO1(DO)、GPIO2(D1) 等。

   - **Default Status（默认状态）**：选择所选 GPIO 引脚的默认状态。选项包括“Low Level（低电平）”和“High Level（高电平）”。

   - **Active Status（活动状态）**：指定当触发条件满足时，GPIO 引脚应更改为的状态。选项包括“Low Level（低电平）”和“High Level（高电平）”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

配置好所需的触发条件后，点击 **Confirm** 按钮保存设置。最后，点击 **Send** 按钮，将 GPIO 触发命令发送到您的 XIAO ESP32S3 Sense 板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

XIAO 板现在将执行命令，您可以通过 XIAO 扩展板基座上的 Grove OLED 观察连接的 Grove LED 的效果。

:::caution
请注意，GPIO 输出功能依赖于 SenseCraft AI 平台与您的 XIAO ESP32S3 Sense 板之间的网络连接。如果连接丢失或中断，基于模型检测的 GPIO 电平更改功能将停止工作。请确保整个过程中的连接稳定。
:::

## 结论

通过遵循本分步指南，您已经学习了如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 板配置模型输出和 GPIO 设置。现在，您可以根据训练模型检测到的特定事件条件触发 GPIO 电平变化。这一功能为使用 XIAO ESP32S3 Sense 和 SenseCraft AI 创建交互式项目和应用程序打开了广阔的可能性。请记住，保持网页平台与设备之间的稳定连接，以确保操作的流畅性。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>