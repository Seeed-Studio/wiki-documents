---
description: 查找有关预训练模型、自定义训练、模型部署、设备工作区、模型输出和应用的 SenseCraft AI 指南。
title: SenseCraft AI 文档中心
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/55.png
sidebar_class_name: hidden
slug: /sensecraft-ai/sensecraft-ai-main
aliases:
  - /sensecraft_ai_main
sidebar_position: 1
last_update:
  date: 11/27/2024
  author: Citrc
createdAt: '2024-11-27'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/sensecraft-ai-main/
---

# SenseCraft AI 文档中心

使用这个基于任务的文档中心，可以查找关于预训练模型、自定义训练、模型部署、设备工作区、模型输出和应用的指南。要了解 SenseCraft AI 的功能和工作流程，请参阅[平台概览](/cn/sensecraft-ai/overview/)。

## 概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/55.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/sensecraft-ai/overview/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI 平台概览 🖱️</font></span></strong>
    </a>
</div><br />

概览部分从高层次介绍 SenseCraft AI，说明其用途、关键特性和优势。它是用户了解平台及其能力的起点。该概览还包含指向入门指南和常见问题（FAQ）的链接，帮助用户快速开始使用 SenseCraft AI。

## 模型库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_main_page/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>模型库 🖱️</font></span></strong>
    </a>
</div><br />

模型库（可通过 SenseCraft AI 平台上的 **`Models`** > **`Model Library`** 访问）包含可在 SenseCraft AI 支持的各类设备上部署的现成预训练模型的信息。这些模型针对特定硬件进行了优化，可用于不同应用，而无需进行自定义训练。本节还根据支持的设备进一步划分为若干小节：

- **适用于 XIAO ESP32S3 Sense**：本小节列出了与 XIAO ESP32S3 Sense 开发板兼容的预训练模型，以及它们的描述和使用场景。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>适用于 XIAO ESP32S3 Sense</font></span></strong>
    </a>
</div><br />

- **适用于 Grove Vision AI V2**：在这里，你可以找到专为 Grove Vision AI V2 设备设计的预训练模型。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_grove_visionai_v2/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>适用于 Grove Vision AI V2</font></span></strong>
    </a>
</div><br />

- **适用于 SenseCAP Watcher**：本小节提供可与 SenseCAP Watcher 设备配合使用的预训练模型信息，从而实现多种监测和检测功能。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_watcher/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>适用于 SenseCAP Watcher</font></span></strong>
    </a>
</div><br />

- **适用于 reComputer Jetson**：reComputer Jetson 小节包含针对性能强大的 reComputer Jetson 平台优化的预训练模型，适用于对算力要求更高的 AI 应用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_deploy_model_to_jetson/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>适用于 reComputer Jetson</font></span></strong>
    </a>
</div><br />

## 训练

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_training_main_page/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>训练 🖱️</font></span></strong>
    </a>
</div><br />

训练部分专门用于指导用户使用 SenseCraft AI 创建自定义模型的全过程。它分为两个主要小节：

- 分类：本小节提供使用 SenseCraft AI 训练图像分类模型的分步教程和最佳实践。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>分类 🖱️</font></span></strong>
    </a>
</div><br />

- 目标检测：在这里，你可以找到使用 SenseCraft AI 训练目标检测模型的详细指南。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>目标检测 🖱️</font></span></strong>
    </a>
</div><br />

## 模型输出

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_output_main_page/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>模型输出 🖱️</font></span></strong>
    </a>
</div><br />

模型输出部分重点介绍如何在 SenseCraft AI 支持的不同设备上配置和使用已训练模型的输出。它按以下小节进行组织：

- **Grove Vision AI V2 模型输出**：本小节说明如何配置和访问部署在 Grove Vision AI V2 设备上的模型输出。内容涵盖设置触发条件、与外部系统集成以及可视化模型预测结果等主题。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_output_grove_visionai/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Grove Vision AI V2</font></span></strong>
    </a>
</div><br />

- XIAO ESP32S3 Sense 模型输出：在这里，你可以找到如何在 XIAO ESP32S3 Sense 开发板上处理模型输出的信息。本小节进一步分为：

  - **通过 GPIO**：本部分提供如何将模型输出映射到 XIAO ESP32-S3 Sense 的 GPIO 引脚的指南，从而根据模型预测结果控制外部硬件。

  <br /><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_output_gpio_xiao/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>通过 GPIO</font></span></strong>
    </a></div><br />

  - **通过 MQTT**：在这里，你可以学习如何使用 MQTT 协议，将 XIAO ESP32S3 Sense 的模型输出发送到其他设备或系统，实现无缝集成与通信。

  <br /><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_output_mqtt_xiao/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>通过 MQTT</font></span></strong>
    </a></div><br />

  - **作为传感器使用**：本部分将说明如何将已上传模型的 XIAO 作为一个传感器来使用。这可能需要你使用额外的一块 XIAO 或 Arduino 设备。

  <br /><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_output_libraries_xiao/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>作为传感器使用</font></span></strong>
    </a></div><br />

  - **使用 SSCMACore 库输出模型信息**：如果你不想使用额外的 XIAO 来接收模型的数据输出，那么这里的教程可能适合你。

  <br /><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_sscmacore_library/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>使用 SSCMACore</font></span></strong>
    </a></div><br />

- reComputer Jetson 工作区：本小节提供如何设置和使用 reComputer Jetson 工作区以处理模型输出的信息。内容涵盖配置工作区、可视化模型预测结果以及与其他软件集成等主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif" style={{width:1000, height:'auto'}}/></div>

## 应用

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_ai_applications_main_page/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>应用 🖱️</font></span></strong>
    </a>
</div><br />

应用部分展示了真实世界的示例和案例研究，演示如何使用 SenseCraft AI 来解决不同领域中的各种问题。它包含详细的项目说明、代码示例和最佳实践，以激发和引导用户使用 SenseCraft AI 开发自己的 AI 应用。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

