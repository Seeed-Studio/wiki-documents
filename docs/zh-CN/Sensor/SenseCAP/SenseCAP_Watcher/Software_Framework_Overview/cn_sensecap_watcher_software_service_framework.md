---
description: 本文提供了在三种不同处理部署流程中配置 Watcher 设备的详细设置指南，包括云端高效处理流程、混合智能处理流程和本地安全处理流程。它概述了 Watcher 软件服务框架，展示了用户、SenseCraft Mate 应用程序和 Watcher 设备之间的交互。
title: Watcher 软件服务介绍
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /cn/watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---


## 框架概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

这是 Watcher 的软件服务框架，展示了用户、SenseCraft Mate 应用程序和 Watcher 设备之间的交互和任务流程。我们提供多种配置选项，允许用户根据其数据安全和服务质量要求自定义服务部署。

该框架集成了云端 AI 服务和本地 AI 部署，结合数据服务、设备通信服务、任务编排、图像分析服务、警报通道代理和模型训练服务。
您可以选择在云端或本地基础设施中部署您的 LLM。原始数据和结果也可以选择在云端或本地设备中存储或传输。
云端与本地存储解决方案的比较，以及在支持 GPU 的虚拟机中对更高性能存储的需求。

这些组件形成了三种部署选项供用户选择：

1. **云端高效处理流程**
2. **混合智能处理流程**
3. **本地安全处理流程**

以下部分提供了框架的详细说明，并指导您配置三种部署选项中的每一种。

**数据服务**

Watcher 提供灵活的数据服务，允许您连接到 SenseCraft 数据平台以上传警报数据、设备状态和预览图像。SenseCraft 平台通过 HTTP 请求提供 MQTT 代理地址和令牌。或者，您可以选择通过应用程序上的蓝牙配置将数据上传到第三方平台，完全绕过 SenseCraft 平台。

**设备通信服务**

对于设备通信，Watcher 通过 MQTT 支持远程任务流程和固件 OTA 更新。您可以使用 SenseCraft Mate 应用程序创建任务并通过 SenseCraft 平台将其发送到设备。应用程序还会检查最新固件版本，当有可用更新时，它会通知您。确认后，平台将向设备发送更新。

**任务编排服务**

Watcher 的任务编排服务允许直接语音交互，您的对话通过 HTTP 发送到服务，经过处理后，任务流程返回到设备。SenseCraft Mate 应用程序也可以检索任务流程并远程发送到设备。

**视觉分析服务**

在视觉分析方面，Watcher 提供统一的图像分析服务。您可以通过蓝牙配置在 SenseCraft、OpenAI 或第三方 AI 代理之间进行选择，并输入相关的 API 密钥。当设备发送图像时，它将利用所选服务，无论是本地 llava 还是 OpenAI 等第三方服务。

**警报通知服务**

对于警报通知，Watcher 允许多种选项，包括来自 SenseCraft 云端的应用推送通知、与其他硬件的 UART 连接，以及与本地服务器或第三方平台的 HTTP 连接。警报也可以使用标准数据格式发送到 Discord 等平台。此外，Watcher 可以使用兼容格式将这些通知转发到其他平台，如 Home Assistant、IFTTT 或 Webhooks。有关更多详细信息，请参阅 HTTP 代理应用程序。

您可以灵活地从多种部署选项中进行选择，并轻松配置您的个性化 Watcher 助手。无论您的优先考虑是数据安全还是处理效率，我们都提供三种适应性解决方案：云端高效处理流程、混合智能处理流程和本地安全处理流程。定制您的 Watcher 助手，为您提供最佳的智能服务体验！

## 云端高效处理流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

此图表提供了云端高效处理流程的概览，展示了用户、云服务和本地应用程序之间的交互。在此设置中，所有服务都通过 SenseCraft 云执行，以提供简化且高效的工作流程。在您开始使用并完成设备绑定后，您可以根据需要选择适当的云端或本地服务。

以下部分解释了云端高效处理流程的每个部分，并提供了配置指导：

**步骤 1**. 初始设置：
完成[设置](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade)并选择 SenseCraft AI 服务后，您可以开始使用 Watcher 的云服务。

**步骤 2**. 用户交互：
有两种方式可以激活 SenseCraft 服务并为 Watcher 分配任务，详细说明如下（参考章节 XXX）：

* 选项 1：通过应用程序：用户可以通过移动应用程序启用 SenseCraft AI 服务。然后在聊天中发送任务消息。
* 选项 2：通过语音命令：用户可以直接与 Watcher 进行语音聊天来分配任务。

**步骤 3**. 任务编排：
一旦 SenseCraft 被激活，它就作为平台即服务（PaaS）提供任务编排服务。这包括三个核心要素：

* STT（语音转文本）：将语音命令转换为文本。
* TTS（文本转语音）：将基于文本的响应转换为语音输出。
* AI 服务：负责理解、处理和编排任务。基于任务内容，该服务从 SenseCraft 模型库中选择最合适的模型，包括大语言模型（LLM）和TinyML模型。

除了在手动配置中手动选择本地TinyML模型外，任务也可以根据您的输入提示自动处理。任务编排模型解释您的提示后，它可以从 SenseCraft 库中调用适当的TinyML模型。例如，如果用户请求"当您看到鸟时通知我"，任务编排服务将从TinyML库中选择鸟类识别模型以优化响应速度。

在*手动配置*中，您可以在**Vision LLM**（更高准确性）或**TinyML模型**（更快处理）之间选择。

**步骤 4**. 编排后的任务分发
任务编排完成后，分发任务的方法将取决于 SenseCraft 远程控制功能的状态：

* 如果启用了远程控制：系统将利用 PaaS 数据服务和设备通信服务，通过MQTT代理将任务结果发送到 Watcher。
* 如果禁用了远程控制：任务将通过蓝牙分发到 Watcher。如果设备超出蓝牙范围，您需要启用远程控制进行任务传输。

**步骤 5**. 视觉分析任务处理

从 SenseCraft 接收任务后，Watcher 设备将调用视觉分析服务。它将使用用户选择或任务编排服务确定的 AI 模型来分析任务。

**步骤 6**. 系统通知
Watcher 可以使用各种方法通知用户或本地系统：

* 应用推送通知
* 串口/UART 输出
* HTTP 推送通知

Watcher 还可以将数据发送到本地服务器、第三方应用程序或警报服务，如 Discord、Home Assistant 或 IFTTT。
更多详细信息，请参考 HTTP 代理应用程序章节。

## 混合智能处理流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

此图展示了混合智能处理流程，涉及用户交互、一些云服务和本地应用程序。混合方法通过结合基于云的任务编排和本地视觉模型，在数据安全、用户体验和效率之间取得平衡。

**步骤 1**. 初始设置
在[入门和设备绑定](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/#device-binding-and-ota-upgrade)之后，用户可以根据需要选择合适的本地服务，启用私有 Watcher 服务，并输入 Watcher 服务器 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**步骤 2**. 用户交互：
用户可以通过 SenseCraft 应用发送任务，这将启动平台内的任务编排服务。

**步骤 3**. 任务编排：
一旦收到任务，SenseCraft 平台作为 PaaS（平台即服务），将使用三个核心服务来编排任务：

* STT（语音转文本服务）
* TTS（文本转语音服务）
* 用于理解、处理和任务编排的 AI 服务。

任务编排服务解释任务并根据任务要求从 SenseCraft 模型库或 LLM（大语言模型）中选择合适的模型。

除了在手动配置中手动选择本地 TinyML 模型外，任务也可以根据您的输入提示自动处理。任务编排模型解释您的提示后，可以从 SenseCraft 库中调用合适的 TinyML 模型。例如，如果用户请求"看到鸟时通知我"，任务编排服务将从 TinyML 库中选择鸟类识别模型以优化响应速度。

在*手动配置*中，您可以在**视觉 LLM**（更高准确性）或**TinyML 模型**（更快处理）之间选择。

**步骤 4**. 编排后的任务分发
任务编排后，系统将根据 SenseCraft 远程控制的状态选择分发方法：

* 如果启用远程控制：系统将使用 PaaS 数据服务和设备通信服务通过 MQTT 代理将任务结果发送到 Watcher。
* 如果禁用远程控制：任务将通过蓝牙分发到 Watcher。如果设备超出蓝牙范围，必须启用远程控制才能继续操作。

**步骤 5**. 视觉分析任务处理
一旦 Watcher 收到任务，它将调用部署在本地服务器上的本地视觉分析服务。任务将使用用户选择的或由 SenseCraft 任务服务编排的 AI 模型进行分析。

**步骤 6**. 系统通知
Watcher 可以使用各种方法通知用户或本地系统：

* 应用推送通知
* 串口/UART 输出
* HTTP 推送通知

Watcher 还可以将数据发送到本地服务器、第三方应用程序或警报服务，如 Discord、Home Assistant 或 IFTTT。
更多详情，请参考 HTTP 代理应用程序部分。

## 本地安全处理流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

此图概述了"本地安全处理流程"，重点关注用户与本地部署应用程序的完整交互。为确保数据隐私，任务编排和图像分析服务完全部署在本地服务器上，提供全面的隐私保护。但是，这种方法限制了功能，因为 SenseCraft 云服务不可用。任务只能通过现场语音命令启动，用户必须配置通知服务来查看历史数据。

**步骤 1**. 初始设置
在[入门和设备绑定](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/#device-binding-and-ota-upgrade)之后，用户可以根据需要选择适当的本地服务，启用私有 Watcher 服务，并输入 Watcher 服务器 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**步骤 2**. 用户交互：
用户可以通过按下 Watcher 设备上的滚轮按钮并通过语音聊天发送命令来发出任务。

**步骤 3**. 任务编排：

托管在本地服务器上的 Watcher 服务器提供任务编排服务，类似于 SenseCraft 任务编排系统。此本地系统由三个核心服务组成：

* STT（语音转文本服务）
* TTS（文本转语音服务）
* 用于理解、处理和编排任务的 AI 服务。

在解释任务后，本地任务编排服务将任务分派给 Watcher。

**步骤 4**. 视觉分析任务处理
一旦 Watcher 接收到任务，它将调用部署在本地服务器上的本地视觉分析服务。任务将使用在任务编排期间选择的 AI 模型进行分析。

**步骤 5**. 系统通知
Watcher 可以使用以下方法通知用户或本地系统：

* 串口/UART 输出
* HTTP 推送通知

此外，Watcher 可以将数据发送到本地服务器、第三方应用程序或警报服务，如 Discord、Home Assistant 和 IFTTT。
有关更多详细信息，请参阅 HTTP 代理应用程序部分。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
