---
description: Deploy_AI_With_A1102
title: Deploying AI Models on SenseCAP A1102 Using SenseCraft AI
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
- Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /deploy_ai_with_a1102
sidebar_position: 3
# sidebar_class_name: hidden
last_update:
  date: 11/26/2025
  author: Twelve
---

# Deploying AI Models on SenseCAP A1102 Using SenseCraft AI

## Overview

The SenseCAP A1102 is a powerful sensor device that combines advanced AI capabilities with ease of deployment. This guide will walk you through deployingofficial or custom AI models on the A1102 using the **SenseCraft AI** website, offering step-by-step instructions for pairing, configuration, and testing.

## Prerequisites

### Required Hardware

- SenseCAP  A1102 device  
- USB Type-C data cable  
- PC  

### Required Software
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

## AI Model Flashing Process

### Step 1. Open our platform and Select A1102 in Workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Connect to our Platform by serial port

- Use a Type-C cable to connect the device to your PC (make sure you are connecting to the upper Type-C port, which is the Himax serial port, as shown in the image below).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Click `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Select correct serial port and click `Connect` in the pop-up window

If the correct port is selected, you will be able to view the preview video stream through Invoke and proceed with selecting and flashing the model normally.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### Step 3. Select the AI model you want to deploy to device

- Click `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Choose from Public Models or your own trained models in SenseCraft AI

- The flashing process will begin after you click the model

### Upload your own AI model and deploy it to device

:::warning note
Our AI model transmission is based on **RS485**, and it supports **up to 9 recognition classes** only.  
:::

- Click `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configure your model information

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: For detailed instructions on training and exporting a TFLite model, please refer to this [guide](https://wiki.seeedstudio.com/grove_vision_ai_v2_sscma/)

- `Object`:  The category name corresponding to the model’s label order (from 0 to 8). Only up to nine classes are supported — any additional classes will not be displayed.

- Click `Send` and wait for flashing process

## Result Analysis

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Each result contains 10 measurements, which correspond to the 10 RS485 channels:

- The first nine measurements represent the confidence scores (measurementValue) of each class index (from 0 to 8).

- The tenth measurement carries the model information, including metadata related to the deployed AI model.

## **Tech Support & Product Discussion**

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
