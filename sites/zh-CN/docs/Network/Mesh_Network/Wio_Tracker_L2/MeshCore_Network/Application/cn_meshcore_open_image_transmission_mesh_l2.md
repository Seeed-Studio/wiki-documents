---
description: 本指南介绍如何基于 Card Tracker wio tracker L2，使用超低码率图像压缩，在 MeshCore 上发送由 AI 重建的图像。
title: 图像传输
keywords:
  - MeshCore
  - MeshCore Open
  - Wio Tracker L2
  - 图像传输
  - AI 图像压缩
  - LoRa Mesh
  - AEIC-SE
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png
slug: /meshcore_ai_image_transmission_l2
sku: 100029766
sidebar_position: 1
last_update:
  date: 9/19/2026
  author: Michelle Huang
createdAt: 2026-09-19
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/cn/meshcore_ai_image_transmission_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}>

<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Project.png" style={{width:900, height:'auto'}}/>

</div>

[MeshCore](https://meshcore.io/) 专为低带宽 LoRa Mesh 通信而设计。传统图像传输较为困难，因为普通照片通常需要数百 KB 甚至更多的数据。[MeshCore Open](https://meshcoreopen.org/) 通过结合以下内容，在 MeshCore 上实现了**超低码率图像传输**：

- MeshCore Open App
- 基于 AI 的图像压缩
- MeshCore `GRP_DATA` 数据包


此图像传输功能适用于需要在没有可靠互联网或蜂窝网络的地方共享视觉信息的用户。

- **户外探索者**：徒步者、攀登者和探险队可以共享道路状况、发送远程景观图像，并在文字不足以表达时提供视觉信息。
- **应急与灾害响应团队**：团队可以共享现场情况，通过图像提供快速的视觉更新并提升团队态势感知。
- **离网通信爱好者**：适合希望探索 AI 驱动边缘通信的 MeshCore 和业余无线电用户。


## 图像传输在 MeshCore 中如何工作

图像**不会被直接传输**。发送端使用本地 AI 编码器将图像转换为一个非常小的二进制文件。接收端不会还原原始像素，而是由本地 AI 解码器使用压缩数据生成一张在视觉上相似的图像。


工作流程如下：

```text
Original Image
      ↓
AI Encoder
      ↓
Small Compressed Data
(~100–200 bytes)
      ↓
MeshCore Network
      ↓
AI Decoder
      ↓
Reconstructed Image
```

## 开始使用 MeshCore Open

### 初始设置

1. 安装 MeshCore Open App。[点击这里](https://discord.com/channels/@me/1547501987703037965/1547520066478936134) 安装支持图像传输的 APP 版本。
2. 将你的 MeshCore 节点连接到 APP。[点击这里](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#connect-via-app) 阅读 L1 连接指南。
3. 配置你的 LoRa 区域和网络设置。
4. 确保有另一台 MeshCore 节点可作为接收端。

有关 MeshCore 通用设置说明，请参考 [MeshCore Open 入门指南](https://meshcoreopen.org/docs/getting-started/)：

### 安装模型

在 APP 设置中启用图像传输并下载 ml 模型文件。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Setting.png" style={{width:600, height:'auto'}}/>
</div>

### 图像传输

从你的手机中选择一张图片。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshOpen_PhotoSelection.png" style={{width:300, height:'auto'}}/>
</div>

APP 会在传输前自动处理图像。压缩后的图像数据将通过 MeshCore 网络进行传输。传输时间取决于 Mesh 跳数、无线电配置、网络流量和信号质量。传输的数据仅包含压缩表示，而不包含原始图像。

当接收节点收到压缩数据后，解码器会执行图像重建。重建后的图像将显示在聊天界面中。
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png" style={{width:600, height:'auto'}}/>
</div>

## 理解 AI 重建图像

输出图像并不是原始图像的逐像素拷贝。解码器可能会生成一些未被传输的额外细节。因此，该功能适用于场景感知、户外通信、远程监控和视觉信息共享。不适用于证据采集、身份验证、科学图像分析以及需要精确图像复现的应用。

## 资源

- [MeshCore Open 文档](https://meshcoreopen.org/docs/getting-started/)
- [AEIC-SE 超低码率图像编解码器](https://huggingface.co/zjs81/aeic-se-onnx)
