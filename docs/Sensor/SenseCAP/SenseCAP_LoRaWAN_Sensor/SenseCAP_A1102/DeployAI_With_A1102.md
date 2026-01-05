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
  date: 12/31/2025
  author: Twelve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying AI Models on SenseCAP A1102 Using SenseCraft AI

## Overview

The SenseCAP A1102 is a powerful sensor device that combines advanced AI capabilities with ease of deployment. This guide will walk you through deployingofficial or custom AI models on the A1102 using the **SenseCraft AI** website, offering step-by-step instructions for configuration, deploying, and testing.

<div class="info-section">
  <div class="section-header">
      <h2>Deploy AI Models on SenseCAP A1102</h2>
      <p>Train and Deploy Your AI Models: Empower your LoRaWAN cameras with custom or official AI models for real-time analysis. SenseCAP A1102 can provide the flexibility to bring AI-driven insights into your applications.</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>Custom AI Model Deployment with LoRaWAN Cameras</h3>
              <p>With SenseCAP A1102, you can train your own AI models and deploy them directly to LoRaWAN-enabled cameras. This allows for real-time object detection. The seamless integration with LoRaWAN ensures that your AI-driven insights are accessible and actionable on-site.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21h5v-5"></path>
              </svg>
          </div>
          <div class="info-content">
              <h3>Use of Pre-trained Models or Custom Models</h3>
              <p>SenseCAP A1102 supports a wide range of pre-trained AI models, as well as the ability to train custom models using publicly available or custom datasets, such as those found on Roboflow Universe. This flexibility allows you to easily deploy models that are specifically tailored to your use cases.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
          </div>
          <div class="info-content">
              <h3>Versatile Applications</h3>
              <p>SenseCAP A1102 can be deployed in various real-world applications. Whether it's monitoring the health of plant leaves in agriculture, detecting parking space occupancy in urban environments, or tracking vessel positions in maritime areas, your AI models can adapt to your specific needs.</p>
          </div>
      </li>
  </ul>
</div>


## Prerequisites

### Required Hardware

- SenseCAP  A1102 device  
- USB Type-C data cable  
- PC  

### Required Software
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

## Official AI Model Delpying Process

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

:::note
Your device is now using the AI model you depoly to detect and upload result! Please navigate to your APP or other platform to view.
:::

## Custom AI Model Deploying Process

:::warning note
Our AI model can be trained with many classes, but since the recognition results are transmitted via **S2100**, only the **first 9 classes** are effectively supported for reporting.
:::

### Step 1. Get your dataset from Roboflow

- [Create a free Roboflow account](https://app.roboflow.com/) 

- If you need open-source dataset, please navigate to [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- If you want to use your own pictures and label them to get dataset, please navigate to [Roboflow](https://app.roboflow.com/) to create a **Project**

:::warning note
When using your own images, please pay special attention to the label order.
Only the first 9 classes (label indices 0–8) are valid and can be recognized by the A1102.
If your dataset contains more than 9 classes, you must select only the required nine classes by removing the others before exporting the model.
:::

### Step 2. Export your dataset from Roboflow

- Click Overview and Check the classes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
The order of classes displayed corresponds to the label index order. Therefore, only the first 9 classes (label indices 0–8) can be correctly uploaded as recognition results on the A1102.
If your model contains more than 9 classes, you must select the nine classes you need by cloning the dataset into your own project, removing the other labels, and then exporting the dataset again.
:::

- In the project, Click `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- Click `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- Click `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- Selct `COCO` and `Show download code`, then Click `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- Copy the **Raw URL** which would be used in AI model training process

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

### Step 3. Train your AI model with dataset

- Follow the [Model training quick start](https://wiki.seeedstudio.com/grove_vision_ai_v2_sscma#training-dataset-exported-model) to train your AI model with your prepared dataset.

- After training is complete, export the trained model in .tflite format, which will be used for deployment on the device.

### Step 4. Upload and flash the custom AI Model 

- Open our [platform](https://sensecraft.seeed.cc/ai/home) and Select A1102 in Workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

- Connect to our Platform by serial port

- Use a Type-C cable to connect the device to your PC (make sure you are connecting to the upper Type-C port, which is the Himax serial port, as shown in the image below).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Click `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Select correct serial port and click `Connect` in the pop-up window

- Click `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configure your model information

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: For detailed instructions on training and exporting a TFLite model, please refer to this [guide](https://wiki.seeedstudio.com/grove_vision_ai_v2_sscma/)

- `Object`:  The category name corresponding to the model’s label order (from 0 to 8). Only up to nine classes are supported — any additional classes will not be displayed.

- Click `Send` and wait for flashing process

## Result Analysis In [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- The first value is the data reporting timestamp

- The next nine value represent the confidence scores (measurementValue) of each class index (from 0 to 8).

- The final value carries the model information, including metadata related to the deployed AI model.

## Result Analysis In [TTN](https://eu1.cloud.thethings.network/console/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Each result contains 10 measurements, which correspond to the 10 RS485 channels.

- The first nine measurements represent the confidence scores (measurementValue) of each class index (from 0 to 8).

- The tenth measurement carries the model information, including metadata related to the deployed AI model.

## FAQ

**Q: What type of custom model can I upload?**

A: You can upload models with the .tflite file extension. You can train and export your own models by following the instructions in [Model training quick start](https://wiki.seeedstudio.com/grove_vision_ai_v2_sscma/#training-dataset-exported-model).

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
