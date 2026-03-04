---
sidebar_position: 3
description: How to use Training(Object Detection)
title: Training - Object Detection
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
---

# Type of training - Object Detection

## Features of object detection

The Seeed SenseCraft AI Platform is an efficient AI training tool tailored for object detection tasks. Built on the advanced **YOLO - World object detection model**, it offers two convenient training methods:

- **Quick Training**

Features: No image data is required. Simply input the target name to quickly generate a single-class object detection model.
Advantages: Ideal for straightforward scenarios, enabling fast model creation and deployment.

- **Image Collection Training**

Features: Combines the target name with uploaded image data for training.

Advantages: Leverages diverse image data to significantly improve the detection accuracy of the generated model, making it suitable for applications requiring high precision.

With these two methods, the SenseCraft platform caters to diverse object detection model training needs, simplifying the complexities of AI development while ensuring both usability and precision.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

## Quick Training

We will create a simple demo for **recognising human**. The quick training feature leverages the following core characteristics of the YOLO – World object detection model:

The quick training feature uses YOLO’s strengths to efficiently create single-class detection models. By combining pretrained weights, text semantics, and efficient feature extraction, it generates a tailored model, such as for "human", without requiring image data.

### Step 1. Determine the object name

Enter the target name in the text box. Then click on **'Start Training'**.

:::tip
The training session will last 1-3 minutes, so please be patient!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Train and upload models

After completing the model training, the model will be deployed and Grove Vision AI (V2) will be selected for the deployment. Then choose the correct serial port to connect to, and finally wait patiently for 1-3 minutes to know that the model training is complete!

:::caution
Currently device selection in Object Detection can only support **Grove Vision AI (V2)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### Demonstration of results

After completing the above steps, the model will be successfully deployed and run, but care needs to be taken with the **Confidence Threshold** and **IoU Threshold value** settings, which will affect the model's ability to recognise.

:::tip
**Confidence Threshold:** The minimum confidence score a model must have to consider a detection valid, filtering out low-confidence predictions.

**IoU Threshold:** The minimum Intersection over Union (IoU) value required to classify a predicted bounding box as a true positive, ensuring accuracy in overlap measurement between predicted and ground truth boxes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## Image Collection Training

We'll make a demo that **recognises earphones**. Based on YOLO – World object detection model, you can customize the training for text and image, which can improve the detection accuracy of the generated model.

### Step 1. Determine the object name

First enter the target name in the text box and then select **Grove Vision AI (V2)** to connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
If the connection is successful, a live preview of the camera will appear in the box on the right.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Capture Image

Then point the camera at the target object and click **'Capture'**, then box the target object with a red box and finally click **'Confirm'**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
The more image material, the better the recognition of model.
:::

### Step 3. Train and upload models

Click on **'Training'** and then wait patiently for the model to finish training.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

And finally it's time for model deployment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### Demonstration of results

Once the above steps are completed, the model will be successfully trained and deployed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
