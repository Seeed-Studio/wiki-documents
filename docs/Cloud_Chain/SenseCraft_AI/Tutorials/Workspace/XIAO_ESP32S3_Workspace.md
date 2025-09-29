---
description: XIAO ESP32S3 Workspace on SenseCraft AI Platform
title: XIAO ESP32S3 Workspace on SenseCraft AI Platform
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/xiao-esp32s3-workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Getting Started

### Connect XIAO ESP32S3

1. Align the connector on the camera sensor expansion board with the B2B connector on the XIAO ESP32S3 Sense and press it to install camera sensor.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. Connect the XIAO ESP32S3 Sense to your computer via USB and  Select USB JAG/serial debug unit to connect device.

:::note

Please use Chrome, Opera, or Edge to deploy AI models to XIAO ESP32S3 Sense and Grove Vision AI v2.

:::

3. Once connected to the device, it will read the device information, model information, and run the model for inference. Users can adjust the Confidence and IoU settings to fine-tune the accuracy of the model's inference.

- Confidence：Confidence refers to the level of certainty or probability assigned by a model to its predictions
- IoU：IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### Replace AI Model

If you need to replace the device's currently running model, the SenseCrfat AI platform offers two ways to do so

1. Select a publicly available model on the SenseCraft AI platform or a model under the user's account to replace it.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. Directly upload a model for replacement.

- Model Name：input a name
- Model File ：Upload a model in tflite format
- ID Object: Class of model recognition

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### Output

Set a condition so that when the detected target meets the criteria, the yellow LED on the XIAO ESP32S3 will light up.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

Example:If the device detects Face and the confidence is greater than 43, then light up the device's yellow led

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)

## **Tech Support**

**Need help with your SenseCAP Indicator? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
