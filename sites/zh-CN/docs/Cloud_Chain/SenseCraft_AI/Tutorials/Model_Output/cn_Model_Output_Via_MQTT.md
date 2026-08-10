---
sidebar_position: 9
description: 本文介绍如何通过 MQTT 发送模型的识别结果。
title: 通过 MQTT 输出模型结果
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao/
---

# 在 SenseCraft AI 上为 XIAO ESP32S3 Sense 配置通过 MQTT 输出模型结果

本 Wiki 文章提供了一个分步指南，介绍如何在 SenseCraft AI 平台上，为 XIAO ESP32S3 Sense 开发板使用 MQTT（Message Queuing Telemetry Transport，消息队列遥测传输）配置模型输出。MQTT 是一种轻量级消息协议，可实现设备之间的高效通信。通过按照本文的步骤操作，你将学会如何搭建 MQTT 通信，并从你的 XIAO ESP32S3 Sense 获取模型推理结果。

## 前置准备

在开始之前，请确保你已经具备以下条件：

1. XIAO ESP32S3 Sense 开发板
2. 用于将 XIAO 开发板连接到电脑的 USB-C 数据线
3. 安装在电脑上的第三方 MQTT 客户端，例如 MQTTX

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 步骤 1. 进入 XIAO ESP32S3 Sense 工作区并连接设备

通过 **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`** 进入 XIAO ESP32S3 Sense 工作区，或者使用[工作区的直接链接](https://sensecraft.seeed.cc/ai/device/local/32)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线，将 XIAO ESP32S3 Sense 开发板连接到电脑。连接完成后，点击工作区页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 XIAO ESP32S3 Sense 上已加载模型

在继续之前，请确保你的 XIAO ESP32S3 Sense 开发板上已经加载了一个训练好的模型。如果你还没有加载模型，请参考 SenseCraft AI 文档，了解如何在设备上训练和部署模型。

- [在 XIAO ESP32S3 Sense 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果你想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 配置 MQTT 输出

在工作区页面左侧边栏中，点击 **Output** 选项。在可用的输出选项中选择 **MQTT**，进入 MQTT 配置界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 设置 MQTT 配置

点击 MQTT 输出区域底部的 **Configuration** 按钮。此时会弹出一个配置窗口，提示你输入以下信息：

- **SSID**：输入你的 Wi-Fi 网络名称。
- **Password**：输入你的 Wi-Fi 网络密码。
- **Encryption**：选择你的 Wi-Fi 网络加密类型（例如 AUTO）。
- **MQTT**：选择 "Yes" 以启用 MQTT 通信。

填写 MQTT 配置字段：

- **Host**：输入你的 MQTT Broker 的主机名或 IP 地址（例如 broker.emqx.io）。
- **Port**：指定 MQTT 通信使用的端口号（例如 1883）。
- **Client ID**：为你的 XIAO ESP32S3 Sense 提供一个唯一的客户端 ID（例如 xiao_esp32s3）。
- **User Name**：如果 MQTT Broker 需要认证，输入你的 MQTT 用户名。
- **Password**：如果 MQTT Broker 需要认证，输入你的 MQTT 密码。
- **SSL**：选择是否启用 SSL 加密。如果你的 MQTT Broker 支持 SSL，可以选择 "Yes" 以增强通信安全性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

点击 **Apply** 按钮保存配置。

:::caution
此步骤需要网络连接，请为 XIAO ESP32S3 Sense 接上天线。
:::

如果一切配置顺利，你应该可以在网页上看到如下信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 配置 MQTT 客户端（MQTTX）

在电脑上启动 [MQTTX 应用](https://mqttx.app/)。

创建一个新连接，并进行如下设置：

- Host：输入与 SenseCraft AI 平台中相同的主机名或 IP 地址（例如 broker.emqx.io）。
- Port：指定 MQTT 通信使用的端口号（例如 1883）。
- Client ID：为你的 MQTTX 实例提供一个唯一的客户端 ID（例如 seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

点击 **Connect** 按钮，与 MQTT Broker 建立连接。

## 步骤 6. 订阅 MQTT 主题

在 MQTTX 应用中，点击 **New Subscribe** 按钮创建一个新的订阅。输入主题 `sscma/v0/#`，然后点击 **Subscribe**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

该主题将用于接收来自 XIAO ESP32S3 Sense 的模型推理信息。

## 步骤 7. 发送指令以获取模型推理结果

在 MQTTX 应用中，进入设备的主题通道。你可以在 SenseCraft AI 的 MQTT 页面上点击 **Query device's topic** 按钮来获取该主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

发送指令 `AT+INVOKE=-1,0`，以在 XIAO ESP32S3 Sense 上触发模型推理。

:::tip
请确保你发送的是正确的主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

如果你发现仍然没有任何模型识别相关的数据上报，可以尝试以 HEX 格式发送该指令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Sense 将处理该指令，并把模型推理结果发布到已订阅的主题上。在 MQTTX 应用中，你会在 `sscma/v0/#` 主题下收到推理结果。

**示例**：

假设你训练的模型用于检测图像中的物体。当你发送 `AT+INVOKE=-1,0` 指令时，XIAO ESP32S3 Sense 会捕获一张图像，运行模型推理，并通过 MQTT 发布结果。推理结果可能包含诸如检测到的物体、它们的边界框以及置信度分数等信息。例如，MQTT 消息的负载可能是：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

关于 JSON 格式的详细说明，请阅读**[此处](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**的文档。

:::tip
在设备固件中，已经定义了一套通信协议，用于规定模型结果输出的格式，以及用户可以对模型执行的操作。由于篇幅原因，我们不会在本 Wiki 中展开这些协议的具体细节，而是会通过 Github 上的文档来详细说明这一部分。如果你对更深入的开发感兴趣，请前往 **[这里](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**。
:::

要对 base64 编码的图像进行解码：

1. 从 JSON 对象中的 "image" 字段复制 base64 编码的字符串。

2. 在浏览器中访问网站 `https://base64.guru/converter/decode/image`。

3. 将复制的 base64 编码字符串粘贴到网站上的 "Base64 string" 文本区域中。

4. 点击 **Decode Base64 to Image** 按钮。

5. 解码后的图像会显示在按钮下方，你可以查看或下载它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## 总结

通过完成本分步指南，你已经学会了如何在 SenseCraft AI 平台上，为 XIAO ESP32S3 Sense 开发板配置通过 MQTT 输出模型结果。现在，你可以通过 MQTT 获取模型推理结果，并将其集成到你的应用或系统中。请记得确保 Wi-Fi 连接稳定，并正确配置 MQTT Broker 和客户端的相关设置，以实现流畅的通信。

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
