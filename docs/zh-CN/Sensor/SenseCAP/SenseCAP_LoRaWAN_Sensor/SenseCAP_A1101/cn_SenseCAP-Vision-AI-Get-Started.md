---
description: SenseCAP Vision AI 入门指南
title: SenseCAP Vision AI 入门指南
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP-Vision-AI-Get-Started
last_update:
  date: 1/31/2023
  author: Kewei Li
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

# 介绍

SenseCAP A1101 - LoRaWAN Vision AI 传感器是一款支持 TinyML 边缘 AI 的智能图像传感器。它支持多种 AI 模型，如图像识别、人员计数、目标检测、仪表识别等。它还支持使用 TensorFlow Lite 训练模型。<br />

# 特性
- 超低功耗且强大的 Himax 摄像头：400Mhz DSP，最大摄像头帧率 640*480*VGA 60 FPS，本地推理

- 低功耗和长距离传输：睡眠模式功耗低至 2.3uWh，由 Wio-E5 LoRaWAN 模块供电，数据传输距离可达数英里

- 边缘计算实现高数据安全性：本地图像推理并将最终结果数据传输到云端，适用于需要限制数据传输和高数据隐私的应用

- 易于数据可视化：通过 SenseCAP Mate App 和 SenseCAP Dashboard 几次点击即可显示和管理数据，与其他第三方工具广泛兼容

- 高工业防护等级：-40 ~ 85℃ 工作温度和 IP66 防护等级，适用于室内外部署

- 易于规模化部署：通过扫描设备二维码 1 分钟即可添加和配置设备，低 LoRaWAN 网络成本和维护成本确保业务可扩展性。

# 规格参数

请参考[规格参数](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)了解更多详情。

# 入门指南

1. A1101 有几个内置的 AI 模型，用户可以根据需要选择模型。目前，提供以下算法和模型：

|**算法**|**AI 模型**|
|---|---|
|目标检测|人体检测；用户自定义|
|目标计数|人员计数；用户自定义|
|图像分类|人员和熊猫识别；用户自定义|

模型选择和配置也在设置界面中完成。首先选择算法，不同的算法实现不同的功能并在 APP 预览中显示不同的结果。点击算法后面的下拉三角形将弹出选择框。然后选择 AI 模型，点击模型，弹出选择框，选择模型。

2. 如果您想训练自己的 AI 模型，有两种方法。请参考：

**1.[使用 Edge Impulse 进行一站式模型训练](https://wiki.seeedstudio.com/cn/One-Stop-Model-Training-with-Edge-Impulse)** 快速上手。

**2.[使用 Roboflow、YOLOv5、TensorFlow Lite 训练 AI 模型](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101)** 详细教程。

# 连接到 LoraWAN®
LoRaWAN®（长距离广域网）是一种无线通信协议，专为物联网（IoT）设备和网关之间的低功耗、长距离通信而设计。它使用工业、科学和医疗（ISM）频段的免许可无线电频谱，通常在欧洲为 868 MHz，在美国为 915 MHz。LoRaWAN® 为长距离连接物联网设备提供了低成本、节能的解决方案。该技术允许设备和网关之间进行双向通信，并支持一系列数据速率以适应不同类型的应用。

## 如何选择网关和 LoraWAN®
使用传感器时需要 LoRaWAN® 网络覆盖，有两个选项。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## 如何使用传感器
除了直接连接到计算机查看实时检测数据外，您还可以通过 LoraWAN® 传输这些数据，最终上传到 [SenseCAP 云平台](https://sensecap.seeed.cc/) 或第三方云平台。在 SenseCAP 云平台上，您可以循环查看数据，并通过手机或计算机以图形方式显示。SenseCAP 云平台和 SenseCAP Mate App 使用相同的账户系统。

由于我们这里的重点是描述模型训练过程，我们不会详细介绍云平台数据显示的细节。但如果您感兴趣，您可以随时访问 SenseCAP 云平台尝试添加设备和查看数据。这是更好地了解平台功能的好方法！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## 技术支持


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>