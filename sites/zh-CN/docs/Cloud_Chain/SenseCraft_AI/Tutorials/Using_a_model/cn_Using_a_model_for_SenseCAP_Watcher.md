---
sidebar_position: 3
description: 如何为 SenseCAP Watcher 使用模型
title: 为 SenseCAP Watcher 使用模型
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher
aliases:
  - /cn/sensecraft_ai_pretrained_models_for_watcher
last_update:
  date: 12/03/2024
  author: Citric
---

SenseCAP Watcher 是一款功能强大的监控设备，可以配置为识别特定对象并根据用户定义的任务触发警报。为了增强 Watcher 的对象识别能力，用户可以利用 SenseCraft AI 模型库中的自定义模型。本 wiki 文章将指导您在 Watcher 监控任务中使用这些自定义模型的过程。

## 前提条件

在开始使用 SenseCraft AI 模型库中的自定义模型之前，请确保您具备以下条件：

- **SenseCAP Watcher**：您应该拥有一台已设置并准备使用的 SenseCAP Watcher 设备。如果您还没有，请按照 [SenseCAP Watcher 快速入门指南](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/) 中的说明来设置您的设备。

- **SenseCraft APP**：在您的移动设备上安装 SenseCraft APP。该应用程序适用于 iOS 和 Android 平台，可以从相应的应用商店下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **SenseCraft 账户**：要访问 SenseCraft AI 模型库并使用自定义模型，您需要拥有一个 SenseCraft AI 账户。如果您没有账户，请通过 SenseCraft APP 或官方 SenseCraft AI 网站注册一个。

- **网络连接**：确保您的 SenseCAP Watcher 设备和运行 SenseCraft APP 的移动设备都连接到互联网。需要稳定的网络连接来访问 SenseCraft AI 模型库并下载自定义模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher's Video</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github Repository</font></span></strong>
    </a>
</div>

## 步骤 1. 通过 SenseCraft APP 向 Watcher 发布监控任务

首先，打开 SenseCraft APP 并导航到您想要配置的 Watcher 设备。该应用程序提供了一个直观的界面来创建和管理监控任务。在这个示例中，让我们创建一个任务，内容是：*如果识别到键盘，播放声音"Keyboard is awesome"*。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

在创建任务时，对于您希望 Watcher 识别的对象以及检测到该对象时希望它执行的操作，必须清晰明确。这有助于确保 Watcher 准确理解并执行任务。

如果您对 Watcher 如何设置合适的任务了解不够，请阅读[任务分配指南](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

## 步骤 2. 启用自定义 TinyML 模型的使用

通过 APP 发布任务后，点击任务卡片进入**详细配置**页面。此页面允许您微调监控任务的各个方面，包括选择自定义 TinyML 模型。

在页面顶部的**场景**部分，您会找到**使用 TinyML 模型**选项。通过勾选此选项，您可以让 Watcher 使用来自 SenseCraft AI 模型库的自定义模型进行对象识别。点击模型名称字段来搜索或直接选择所需的模型，例如**键盘检测**模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 模型库托管着各种预训练模型，可用于各种对象识别任务。这些模型已针对 Watcher 的使用进行了优化，确保高精度和性能。

:::note

1. 选择模型后，Watcher 的报警词可能会被清除，需要重新输入才能点击运行任务按钮。

2. 选择模型后，请合理配置模型下方的置信度阈值。默认值为 0。如果您直接以 0 作为阈值发送任务，可能会导致任何东西都被错误识别为目标对象，请根据实际情况调整此值以达到最佳检测效果。

:::

除了 SenseCraft AI 模型库中可用的预训练模型外，您还可以使用自己的自定义训练模型。如果您有现有模型未涵盖的特定对象或场景，您可以训练自己的模型并与 SenseCraft AI 社区分享。

:::tip
Watcher 可以搜索并使用同一 SenseCraft 账户下的私有模型。如果您选择不公开您的模型，只要 Watcher 绑定到您的账户，您也可以使用您的私有模型。
:::

## 步骤 3. 确认任务并开始监控

选择自定义模型并确认其他任务配置详情后，点击"运行任务"按钮开始监控任务。此操作将任务部署到您的 Watcher 设备并开始监控过程。

收到任务后，Watcher 将自动从 SenseCraft AI 模型库下载所选模型，并将其用作触发报警操作的基础。这种无缝集成确保 Watcher 拥有最新且相关的模型，以实现准确的对象识别。

有了自定义模型，Watcher 将持续监控其环境中是否存在指定对象。在此示例中，当 Watcher 使用所选模型识别到键盘时，它将触发指定的报警操作——播放声音"Keyboard is awesome"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

自定义模型和用户定义任务的结合使 Watcher 能够适应各种监控场景。通过利用 SenseCraft AI 模型库的强大功能和 SenseCraft APP 的灵活性，用户可以根据特定需求定制 Watcher 的功能，确保可靠准确的对象识别和报警触发。

## 结论

使用来自 SenseCraft AI 模型库的自定义模型使 SenseCAP Watcher 用户能够增强设备的物体识别能力并扩展其监控和报警应用场景。SenseCraft APP 提供了一个直观的界面，用于搜索、选择和将这些自定义模型应用到 Watcher 监控任务中。通过遵循本 wiki 文章中概述的步骤，用户可以轻松配置 Watcher 来识别特定物体并根据其独特需求触发报警。无论是使用预训练模型还是与 SenseCraft AI 社区共享的自定义训练模型，Watcher 都为各种监控需求提供了强大且适应性强的解决方案。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
