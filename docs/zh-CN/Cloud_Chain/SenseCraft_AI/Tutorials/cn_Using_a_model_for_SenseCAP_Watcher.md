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

SenseCAP Watcher 是一款强大的监控设备，可以配置为识别特定对象并根据用户定义的任务触发警报。为了增强 Watcher 的对象识别能力，用户可以利用 SenseCraft AI 模型库中的自定义模型。本文将指导您如何在 Watcher 的监控任务中使用这些自定义模型。

## 前置条件

在开始使用 SenseCraft AI 模型库中的自定义模型之前，请确保您具备以下条件：

- **SenseCAP Watcher**: 您需要一台已设置并准备使用的 SenseCAP Watcher 设备。如果尚未设置，请按照 [SenseCAP Watcher 快速入门指南](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/) 中的说明进行设置。

- **SenseCraft APP**: 在您的移动设备上安装 SenseCraft APP。该应用适用于 iOS 和 Android 平台，可从各自的应用商店下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **SenseCraft 账户**: 要访问 SenseCraft AI 模型库并使用自定义模型，您需要一个 SenseCraft AI 账户。如果您还没有账户，可以通过 SenseCraft APP 或官方 SenseCraft AI 网站注册。

- **网络连接**: 确保您的 SenseCAP Watcher 设备和运行 SenseCraft APP 的移动设备已连接到互联网。稳定的网络连接是访问 SenseCraft AI 模型库和下载自定义模型的必要条件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div>

## 第一步：通过 SenseCraft APP 向 Watcher 发布监控任务

首先，打开 SenseCraft APP 并导航到您想要配置的 Watcher 设备。该应用提供了一个直观的界面，用于创建和管理监控任务。以下是一个示例任务：*如果识别到键盘，则播放声音“键盘很棒”*。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

在创建任务时，务必清晰具体地描述您希望 Watcher 识别的对象以及在检测到该对象时希望执行的操作。这有助于确保 Watcher 准确理解并执行任务。

如果您对如何为 Watcher 分配合适的任务了解不够，请阅读 [任务分配指南](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

## 第 2 步：启用使用自定义 TinyML 模型

通过 APP 发布任务后，点击任务卡片进入 **详细配置** 页面。在此页面，您可以微调监控任务的各个方面，包括选择自定义 TinyML 模型。

在页面顶部的 **场景** 部分，您会看到 **使用 TinyML 模型** 选项。勾选此选项后，您可以启用 Watcher 使用 SenseCraft AI 模型库中的自定义模型进行目标识别。点击模型名称字段以搜索或直接选择所需模型，例如 **键盘检测** 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI 模型库托管了多种预训练模型，可用于各种目标识别任务。这些模型已针对 Watcher 的使用进行了优化，确保高精度和高性能。

:::note
1. 选择模型后，Watcher 的报警词可能会被清除，需要重新输入才能点击运行任务按钮。

2. 选择模型后，请合理配置模型下方的置信度阈值。默认值为 0。如果直接以 0 作为阈值发送任务，可能导致任何物体都被错误识别，请根据实际情况调整此值以实现最佳检测效果。
:::

除了 SenseCraft AI 模型库中提供的预训练模型，您还可以使用自己训练的自定义模型。如果您有特定的目标或场景未被现有模型覆盖，可以训练自己的模型并与 SenseCraft AI 社区分享。

:::tip
Watcher 可以搜索并使用同一 SenseCraft 账户下的私有模型。如果您选择不公开您的模型，只要 Watcher 绑定到您的账户，您仍然可以使用您的私有模型。
:::

## 第 3 步：确认任务并开始监控

选择自定义模型并确认其他任务配置细节后，点击“运行任务”按钮以启动监控任务。此操作会将任务部署到您的 Watcher 设备并开始监控过程。

Watcher 接收到任务后，会自动从 SenseCraft AI 模型库下载所选模型，并以此为基础触发报警动作。这种无缝集成确保 Watcher 使用最新且相关的模型进行准确的目标识别。

启用自定义模型后，Watcher 将持续监控其环境中指定目标的存在。在此示例中，当 Watcher 使用所选模型识别到键盘时，它将触发指定的报警动作——播放声音“键盘真棒”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

自定义模型与用户定义任务的结合使 Watcher 能够适应广泛的监控场景。通过利用 SenseCraft AI 模型库的强大功能和 SenseCraft APP 的灵活性，用户可以根据具体需求定制 Watcher 的功能，确保可靠且准确的目标识别和报警触发。

## 结论

使用来自 SenseCraft AI 模型库的自定义模型，可以帮助 SenseCAP Watcher 用户增强设备的目标识别能力，并扩展其监控和报警的应用场景。SenseCraft APP 提供了一个直观的界面，用于搜索、选择和将这些自定义模型应用到 Watcher 的监控任务中。通过遵循本 Wiki 文章中概述的步骤，用户可以轻松配置 Watcher 以识别特定目标，并根据其独特需求触发报警。无论是使用预训练模型还是与 SenseCraft AI 社区共享的自定义训练模型，Watcher 都为各种监控需求提供了强大且灵活的解决方案。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>