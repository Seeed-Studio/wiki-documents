---
sidebar_position: 9
description: 本文描述了如何通过 MQTT 发送模型的识别结果。
title: 通过 MQTT 输出模型结果
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /cn/sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# 在 SenseCraft AI 上通过 MQTT 配置 XIAO ESP32S3 Sense 的模型输出

本文提供了一个逐步指南，讲解如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 板配置使用 MQTT（消息队列遥测传输）协议的模型输出。MQTT 是一种轻量级的消息传输协议，可实现设备之间的高效通信。通过以下步骤，您将学习如何设置 MQTT 通信并从 XIAO ESP32S3 Sense 获取模型推理结果。

## 前置条件

在开始之前，请确保您具备以下条件：

1. XIAO ESP32S3 Sense 板
2. 用于将 XIAO 板连接到计算机的 USB-C 数据线
3. 在计算机上安装的第三方 MQTT 客户端，例如 MQTTX

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

使用 USB-C 数据线将 XIAO ESP32S3 Sense 板连接到您的计算机。连接后，点击 SenseCraft AI Vision Workspace 页面左上角的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## 第 2 步：确保 XIAO ESP32S3 Sense 上已加载模型

在继续之前，请确保您的 XIAO ESP32S3 Sense 板上已加载训练好的模型。如果尚未加载模型，请参考 SenseCraft AI 文档，了解如何训练和部署模型到设备。

- [在 XIAO ESP32S3 Sense 上使用模型](https://wiki.seeedstudio.com/cn/sensecraft_ai_pretrained_models_for_xiao/)

如果您想使用自己训练的模型，可以参考以下两个 Wiki：

- [训练类型 - 分类](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_classification/)
- [训练类型 - 目标检测](https://wiki.seeedstudio.com/cn/sensecraft_ai_training_object_detection/)

## 第 3 步：配置 MQTT 输出

在 Vision Workspace 页面左侧边栏中，点击 **Output** 选项。从可用的输出选项中选择 **MQTT**，以访问 MQTT 配置设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## 第 4 步：设置 MQTT 配置

点击 MQTT 输出部分底部的 **Configuration** 按钮。将弹出一个配置窗口，提示您输入以下信息：

  - **SSID**：输入您的 Wi-Fi 网络名称。
  - **Password**：提供您的 Wi-Fi 网络密码。
  - **Encryption**：选择您的 Wi-Fi 网络的加密类型（例如，AUTO）。
  - **MQTT**：选择 "Yes" 以启用 MQTT 通信。

填写 MQTT 配置字段：

  - **Host**：输入您的 MQTT 代理的主机名或 IP 地址（例如，broker.emqx.io）。
  - **Port**：指定 MQTT 通信的端口号（例如，1883）。
  - **Client ID**：为您的 XIAO ESP32S3 Sense 提供一个唯一的客户端 ID（例如，xiao_esp32s3）。
  - **User Name**：输入您的 MQTT 用户名（如果您的 MQTT 代理需要）。
  - **Password**：提供您的 MQTT 密码（如果您的 MQTT 代理需要）。
  - **SSL**：选择是否启用 SSL 加密。如果您的 MQTT 代理支持 SSL，您可以选择 "Yes" 以增强通信安全性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

点击 **Apply** 按钮以保存配置。

:::caution
此步骤需要网络连接，请为 XIAO ESP32S3 Sense 连接天线。
:::

如果一切配置顺利，您应该能够在网站上看到以下信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## 第 5 步：设置 MQTT 客户端 (MQTTX)

在您的计算机上启动 [MQTTX 应用程序](https://mqttx.app/)。

创建一个新连接，并使用以下设置：

  - Host：输入与 SenseCraft AI 平台中相同的主机名或 IP 地址（例如，broker.emqx.io）。
  - Port：指定 MQTT 通信的端口号（例如，1883）。
  - Client ID：为您的 MQTTX 实例提供一个唯一的客户端 ID（例如，seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

点击 **Connect** 按钮以与 MQTT 代理建立连接。

## 第 6 步：订阅 MQTT 主题

在 MQTTX 应用程序中，点击 **New Subscribe** 按钮以创建一个新订阅。输入主题 `sscma/v0/#` 并点击 **Subscribe**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

此主题将用于接收来自您的 XIAO ESP32S3 Sense 的模型推理信息。

## 第 7 步：发送命令以获取模型推理结果

在 MQTTX 应用程序中，导航到设备的主题通道。您可以通过点击 SenseCraft AI 的 MQTT 页面上的 **查询设备主题** 按钮获取。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

发送命令 `AT+INVOKE=-1,0` 以触发 XIAO ESP32S3 Sense 上的模型推理。

:::tip
请确保您发送的是正确的主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

如果您发现仍然没有任何与模型识别相关的数据上报，请尝试以 HEX 格式发送命令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Sense 将处理该命令，并将模型推理结果发布到订阅的主题中。在 MQTTX 应用程序中，您将在 `sscma/v0/#` 主题下收到推理结果。

**示例**：

假设您训练的模型旨在检测图像中的对象。当您发送 `AT+INVOKE=-1,0` 命令时，XIAO ESP32S3 Sense 将捕获一张图像，运行模型推理，并通过 MQTT 发布结果。推理结果可能包括检测到的对象、它们的边界框以及置信度分数。例如，MQTT 消息的有效负载可能是：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

有关 JSON 格式的详细说明，请阅读文档 **[这里](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**。

:::tip
在设备的固件中，有一套已建立的通信协议，指定了模型结果输出的格式以及用户可以对模型执行的操作。由于篇幅限制，我们不会在本 Wiki 中详细说明这些协议的具体内容，我们将在 Github 的文档中详细介绍这一部分。如果您对更深入的开发感兴趣，请访问 **[这里](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**。
:::

要解码 Base64 编码的图像：

1. 从 JSON 对象的 "image" 字段中复制 Base64 编码的字符串。

2. 在浏览器中访问网站 `https://base64.guru/converter/decode/image`。

3. 将复制的 Base64 编码字符串粘贴到网站的 "Base64 string" 文本区域中。

4. 点击 **Decode Base64 to Image** 按钮。

5. 解码后的图像将显示在按钮下方，您可以查看或下载它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## 结论

通过遵循本分步指南，您已经学习了如何在 SenseCraft AI 平台上为 XIAO ESP32S3 Sense 板配置使用 MQTT 的模型输出。现在，您可以通过 MQTT 检索模型推理结果，并将其集成到您的应用程序或系统中。请记住，确保稳定的 Wi-Fi 连接，并正确配置您的 MQTT 代理和客户端设置，以实现无缝通信。

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