---
description: This guide explains how to send AI-reconstructed images over MeshCore using ultra-low bitrate image compression.
title: Image Transmission
keywords:
  - MeshCore
  - MeshCore Open
  - MeshTracker X1
  - Image Transmission
  - AI Image Compression
  - LoRa Mesh
  - AEIC-SE
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png
slug: /meshcore_ai_image_transmission_x1
sku: 100087698
sidebar_position: 1
last_update:
  date: 9/19/2026
  author: Michelle Huang
createdAt: 2026-09-19
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/meshcore_ai_image_transmission_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}>

<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Project.png" style={{width:900, height:'auto'}}/>

</div>

[MeshCore](https://meshcore.io/) is designed for low-bandwidth LoRa mesh communication. Traditional image transmission is difficult because normal photos usually require hundreds of kilobytes or more data. [MeshCore Open](https://meshcoreopen.org/) enables **ultra-low bitrate image transmission** over MeshCore by combining:

- MeshCore Open App
- AI-based image compression
- MeshCore `GRP_DATA` packets


This image transmission feature is suitable for users who need to share visual information in places without reliable Internet or cellular networks.

- **Outdoor Explorers**: Hikers, climbers, and expedition teams can share trail conditions, send remote landscape images and provide visual information when text is not enough.
- **Emergency and Disaster Response Teams**: The team can share field conditions, provide quick visual updates and improve team awareness through images
- **Off-grid Communication Enthusiasts**: Suitable for MeshCore and Ham radio users who want to explore AI-powered edge communication


## How Image Transmission Work in MeshCore

The image is **not directly transmitted**. The sender uses a local AI encoder to convert the image into a very small binary file. The receiver does not restore the original pixels. Instead, a local AI decoder uses the compressed data to generate a visually similar image.


The workflow is:

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

## Get Start with MeshCore Open

### Initial Set-up

1. Install MeshCore Open App. [Click here](https://discord.com/channels/@me/1547501987703037965/1547520066478936134) to install the APP release that support image transmission.
2. Connect your MeshCore node to the APP. [Click here](https://wiki.seeedstudio.com/sensecap_meshtracker_x1_meshcore/#app-connection) to read MeshTracker X1 connection guide.
3. Configure your LoRa region and network settings.
4. Make sure another MeshCore node is available as the receiver.

For general MeshCore setup instructions, please refer to [MeshCore Open Getting Start Guide](https://meshcoreopen.org/docs/getting-started/):

### Install the model

Enable image transmission and download the ml model files in APP setting.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Setting.png" style={{width:600, height:'auto'}}/>
</div>

### Image Transmission

Choose an image from your phone. 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshOpen_PhotoSelection.png" style={{width:300, height:'auto'}}/>
</div>

The APP will automatically process the image before transmission. The compressed image data will transmit through the MeshCore network. The transmission time depends on number of mesh hops, radio configuration, network traffic and signal quality. The transmitted data contains only the compressed representation, not the original image.

When the receiving node receives the compressed data, the decoder then performs the image reconstruction. The reconstructed image will appear in the chat interface.
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png" style={{width:600, height:'auto'}}/>
</div>

## Understanding AI-Reconstructed Images

The output image is not a pixel-perfect copy of the original image. The decoder may generate additional details that were not transmitted. Therefore, this feature is suitable for scene awareness, outdoor communication, remote monitoring and isual information sharing. It is not suitable for evidence collection, identity verification, scientific image analysis and applications requiring exact image reproduction

## Resource

- [MeshCore Open Documentation](https://meshcoreopen.org/docs/getting-started/)
- [AEIC-SE Ultra-Low Bitrate Image Codec](https://huggingface.co/zjs81/aeic-se-onnx)
