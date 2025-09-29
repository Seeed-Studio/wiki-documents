---
sidebar_position: 9
description: 本文介绍如何通过 MQTT 发送模型的识别结果。
title: 通过 MQTT 输出模型结果
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /cn/sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上为 XIAO ESP32S3 Sense 配置通过 MQTT 输出模型结果

本 wiki 文章提供了一个分步指南，介绍如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 开发板配置使用 MQTT（消息队列遥测传输）的模型输出。MQTT 是一种轻量级消息传递协议，可实现设备之间的高效通信。通过遵循这些说明，您将学习如何设置 MQTT 通信并从您的 XIAO ESP32S3 Sense 检索模型推理结果。

## 先决条件

在开始之前，请确保您具备以下条件：

1. XIAO ESP32S3 Sense 开发板
2. 用于将 XIAO 开发板连接到计算机的 USB-C 数据线
3. 在您的计算机上安装第三方 MQTT 客户端，例如 MQTTX

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

## 步骤 1. 访问 SenseCraft AI Vision 工作区并连接 XIAO ESP32S3 Sense

打开您的网页浏览器，导航到 SenseCraft AI Vision 工作区页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>一键直达 🖱️</font></span></strong>
    </a>
</div><br />

从可用设备中选择 XIAO ESP32S3 Sense 开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

使用 USB-C 数据线将您的 XIAO ESP32S3 Sense 开发板连接到计算机。连接后，点击位于 SenseCraft AI Vision 工作区页面左上角的**连接**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 确保 XIAO ESP32S3 Sense 已加载模型

在继续之前，请确保您的 XIAO ESP32S3 Sense 开发板已加载训练好的模型。如果您尚未加载模型，请参考 SenseCraft AI 文档了解如何训练和部署模型到您的设备。

- [为 XIAO ESP32S3 Sense 使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki。

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 步骤 3. 配置 MQTT 输出

在 Vision 工作区页面的左侧边栏中，点击**输出**选项。从可用的输出选项中，选择 **MQTT** 以访问 MQTT 配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4. 设置 MQTT 配置

点击 MQTT 输出部分底部的**配置**按钮。将出现一个配置窗口，提示您输入以下信息：

- **SSID**：输入您的 Wi-Fi 网络名称。
- **密码**：提供您的 Wi-Fi 网络密码。
- **加密**：选择您的 Wi-Fi 网络的加密类型（例如，AUTO）。
- **MQTT**：选择"是"以启用 MQTT 通信。

填写 MQTT 配置字段：

- **主机**：输入您的 MQTT 代理的主机名或 IP 地址（例如，broker.emqx.io）。
- **端口**：指定 MQTT 通信的端口号（例如，1883）。
- **客户端 ID**：为您的 XIAO ESP32S3 Sense 提供唯一的客户端 ID（例如，xiao_esp32s3）。
- **用户名**：如果您的 MQTT 代理需要，请输入您的 MQTT 用户名。
- **密码**：如果您的 MQTT 代理需要，请提供您的 MQTT 密码。
- **SSL**：选择是否启用 SSL 加密。如果您的 MQTT 代理支持 SSL，您可以选择"是"以增强通信安全性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

点击**应用**按钮保存配置。

:::caution
此步骤需要网络连接，请为 XIAO ESP32S3 Sense 连接天线。
:::

如果一切配置顺利，您应该能够在网站上看到以下信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 5. 设置 MQTT 客户端 (MQTTX)

在您的计算机上启动 [MQTTX 应用程序](https://mqttx.app/)。

使用以下设置创建新连接：

- Host：输入在 SenseCraft AI 平台中使用的相同主机名或 IP 地址（例如，broker.emqx.io）。
- Port：指定 MQTT 通信的端口号（例如，1883）。
- Client ID：为您的 MQTTX 实例提供唯一的客户端 ID（例如，seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

点击 **Connect** 按钮与 MQTT 代理建立连接。

## 步骤 6. 订阅 MQTT 主题

在 MQTTX 应用程序中，点击 **New Subscribe** 按钮创建新订阅。输入主题 `sscma/v0/#` 并点击 **Subscribe**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

此主题将用于接收来自您的 XIAO ESP32S3 Sense 的模型推理信息。

## 步骤 7. 发送命令获取模型推理结果

在 MQTTX 应用程序中，导航到设备主题频道。您可以通过点击 SenseCraft AI 的 MQTT 页面上的 **Query device's topic** 按钮来获取它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

发送命令 `AT+INVOKE=-1,0` 以触发您的 XIAO ESP32S3 Sense 上的模型推理。

:::tip
请确保您发送的是正确的主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

如果您发现仍然没有任何模型识别相关数据报告，请尝试以 HEX 格式发送命令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Sense 将处理该命令并将模型推理结果发布到订阅的主题。在 MQTTX 应用程序中，您将在 `sscma/v0/#` 主题下接收推理结果。

**示例**：

假设您训练的模型旨在检测图像中的对象。当您发送 'AT+INVOKE=-1,0' 命令时，XIAO ESP32S3 Sense 将捕获图像，运行模型推理，并通过 MQTT 发布结果。推理结果可能包括检测到的对象、它们的边界框和置信度分数等信息。例如，MQTT 消息负载可能是：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

有关 JSON 格式的详细描述，请阅读**[此处](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**的文档。

:::tip
在设备的固件中，有一套既定的通信协议，指定了模型结果输出的格式，以及用户可以对模型进行的操作。由于篇幅问题，我们不会在此 wiki 中详细展开这些协议的具体内容，我们将通过 Github 上的文档来详细说明这一部分。如果您对更深入的开发感兴趣，请前往**[此处](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**。
:::

要解码 base64 编码的图像：

1. 从 JSON 对象中的 "image" 字段复制 base64 编码字符串。

2. 在您的网络浏览器中访问网站 `https://base64.guru/converter/decode/image`。

3. 将复制的 base64 编码字符串粘贴到网站上的 "Base64 string" 文本区域中。

4. 点击 **Decode Base64 to Image** 按钮。

5. 解码后的图像将出现在按钮下方，您可以查看或下载它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## 结论

通过遵循这个分步指南，您已经学会了如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 开发板使用 MQTT 配置模型输出。您现在可以通过 MQTT 检索模型推理结果，并将它们集成到您的应用程序或系统中。请记住确保稳定的 Wi-Fi 连接，并正确配置您的 MQTT 代理和客户端设置，以实现无缝通信。

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
