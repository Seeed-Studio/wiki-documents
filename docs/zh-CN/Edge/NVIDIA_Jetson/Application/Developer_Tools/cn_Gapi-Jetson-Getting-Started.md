---
description: 本文介绍如何在 NVIDIA Jetson 设备上使用 Gapi，这是一个可嵌入的 API 网关，旨在通过低代码工作流引擎和微服务框架，快速将 Jetson AI Lab 的成果转化为实际应用。
title: Gapi 入门指南
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
---

# 在 NVIDIA® Jetson 设备上开始使用 Gapi

[Gapi](https://genainerds.com/#/Gapi) 是一个可嵌入的 API 网关，可在 AI 微服务和用户日常使用的系统之间创建流式集成。

该项目的目标是加速将 Jetson AI Lab 成果创建试点和演示并应用到真实世界环境中的速度。"设备端"生成式 AI 并不意味着它必须孤立存在！

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- 具有低代码 UI 的工作流引擎，包含数十个开放集成和可定制的移动端、Web 端和桌面端客户端。
- 用于包装 Jetson 容器的微服务框架（Ollama、Whisper、Piper TTS 等已完成，更多即将推出）。或者包装您自己的模型/代码并将其集成到工作流中。
- 实时、混合、二进制+json 消息传递可平滑服务间调用并减少延迟。
- 在利益相关者的实际环境中证明生成式 AI 价值的快速路径。

## Gapi 服务器

可嵌入的 API 网关软件，在后台运行，具有用于测试的低代码工作流 UI。服务器是与微服务对话的工作流"节点"的消息中心和状态机。可以将其视为应用程序的连接组织。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
微服务是运行一些包装器 Python 脚本的进程，这些脚本使用流式 API 将自定义代码/模型集成到工作流中。
:::

- Gapi 服务器可以在任何 Jetson Orin 或实际上任何计算机上运行，因为微服务通过安全 Web 套接字进行出站连接。它不使用任何 GPU 资源。还有一个小型演示版本可以跳过服务器安装（但您仍需要运行自己的微服务）。
- [Gapi 项目页面](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Gapi 文档](https://genainerds.com/#/Docs)
- [Gapi 托管演示](https://genaigapi.com/)

## 要求

- 任何 NVIDIA Jetson Orin
- Docker
- 充足的存储空间：1.3GB

## 在 Jetson 上安装 Gapi

**运行以下步骤在 Jetson 上安装 Gapi：**

```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**登录**

- 浏览器访问：http://[主机设备IP]:8090
- 用户名：root
- 密码：!gapi2024
- 在设置中更改密码！文档显示如何添加SSL证书。

## 工作流

工作流以可视化方式连接节点之间的执行和数据流。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

一个事务（或单次触发）具有"滚动输入"数据，当节点到节点的步骤与微服务和API通信时，它会累积这些数据。所有节点都享有变量和流控制，使用熟悉的json和javascript概念。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

每个节点都可以在做出决策的过程中追加或引用事务中的滚动数据。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

观察实时事务，它们从客户端、webhooks和微服务发布的消息开始，提供可视化反馈和调试。

## 微服务

微服务是运行包装器python脚本的进程，该脚本集成您的自定义代码/模型，使它们能够集成到Gapi工作流中。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

您可以在任何地方运行微服务，并通过流式、混合二进制+json消息协议将其连接到Gapi服务器。

有一些开箱即用的"社区微服务"，我们对其进行集成、测试并打包到Docker镜像中。当您运行它们时，它们会自动集成，正确加载NVIDIA层并向主机系统提供日志记录。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

更好的是，创建您自己的！只需实现一个on_message Python处理程序来处理请求和响应。其余的都为您处理。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

将微服务视为您拥有的某些代码或模型的简单包装器。它的工作方式与工作流内的任何其他节点相同。当轮到您的微服务节点时，将调用您的on_message函数。您的脚本获取滚动事务数据作为上下文，然后您将数据直接发布回流中。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## 运行社区微服务

**社区微服务的要求**

1. 任何NVIDIA Jetson Orin
2. 足够的存储空间：
    - 您自己的微服务实际上只需要4KB
    - 每个社区微服务需要约4GB到10GB

**步骤：**

1. 登录并转到微服务选项卡
2. 按照该页面蓝色框中的说明下载您的自定义配置
3. 然后按照下面的说明安装您想要的微服务

## 恭喜！您现在可以查看工作流提示了

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
