---
sidebar_position: 5
description: How to use Training(Classification)
title: Training - Classification
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
---

# Type of training - Classification

Classification is a powerful tool in machine learning that allows you to train a model to recognize and categorize different types of data. In the SenseCraft AI platform, classification enables you to create models that can identify and distinguish between various objects, gestures, or scenes based on the images you provide during training.

By training a classification model with SenseCraft AI, you can unlock a wide range of applications, such as:

- Gesture recognition for interactive experiences

- Object detection for inventory management or quality control

- Scene classification for autonomous navigation or environmental monitoring

The SenseCraft AI platform simplifies the classification process, allowing you to create custom models tailored to your specific needs without requiring extensive machine learning expertise.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

## Getting Started

In this comprehensive guide, we will walk you through the process of training a classification model using the SenseCraft AI platform. While our primary focus will be on training a model for the XIAO ESP32S3 Sense, it's important to note that this platform is also compatible with other Seeed Studio devices, such as the Grove Vision AI and Watcher.

Don't have a Seeed Studio device? No problem! You can still follow along and experience the training process using your laptop's built-in camera. However, for optimal performance and the best results, we recommend using the target device to train and deploy your model.

## Training a model to recognize body gestures

For this tutorial, we will create a model that recognizes four distinct body gestures: crossed arms, open arms, standing at attention, and making a heart shape with hands.

:::tip
The SenseCraft AI platform supports up to 200 categories for classification, giving you ample flexibility to create models tailored to your specific needs.
:::

### Step 1. Connect your device

If you're using a Seeed Studio device like the XIAO ESP32S3 Sense, connect it to your computer via USB-C cable. Select the corresponding device from the dropdown menu and click **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

Choose the **correct serial port** for the connection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

If you're using your laptop's camera, you can skip this step. Because when you come to this page, it automatically shows the live feed of the camera. If it doesn't, please check your browser permissions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
Please use **Microsoft Edge** or **Google Chrome**.
:::

### Step 2. Create and label categories

Click the pencil button to the right of an existing class name to rename an already existing class. Click the **Add a Class** button below to create four categories for the body gestures you want to recognize.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

Label the categories as follows: "Crossed Arms," "Open Arms," "Standing at Attention," and "Heart Shape." Double-check that each category is named correctly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### Step 3. Capture training data

Select the first category (e.g., "Crossed Arms") from the list. Position yourself in front of the camera, performing the corresponding body gesture. Press and hold the **Hold to Record** button to capture images of the gesture. Release the button to stop recording. Aim to capture **at least 40 images** per category to ensure a robust and accurate model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

Repeat this process for each of the remaining categories, capturing a diverse range of images for each gesture.

:::tip
The more high-quality, relevant images you collect for each category, the better the model's performance will be. Aim for variety in lighting, angles, and backgrounds to improve the model's generalization capabilities.
:::

### Step 4. Train the model

Once you have collected a sufficient number of images for each category, click the **'Start Training'** button to initiate the model training process. The training process typically takes between 1-3 minutes, depending on the complexity of the model and the amount of training data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Please **do not** immediately web page while training the model, otherwise the content of the page may be lost.
:::

### Step 5. Deploy the trained model

:::caution
Please note that if you want to save this model permanently, please make sure to click **Save to SenseCraft** first to save the model under your account to avoid losing it.
:::

After the model training is complete, it's time to deploy it to your target device. If you're using the XIAO ESP32S3 Sense or another Seeed Studio device, select the appropriate device from the dropdown menu and click **'Deploy to device'**. If you trained the model using your laptop's camera, you can skip this step and proceed to the results demonstration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

Click **'Confirm'** and select the correct **serial port** for the device connection. The deployment process may take 1-3 minutes. Please be patient and wait for it to complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Demonstration of results

Congratulations! You have successfully trained and deployed your body gesture recognition model. It's time to put it to the test:

- Point the camera at yourself or a test subject.
- Perform each of the trained body gestures one at a time.
- Observe the model's real-time predictions and classification results.
- Verify that the model accurately recognizes and classifies each gesture.

Feel free to experiment with training models for different objects, gestures, or scenarios using the SenseCraft AI platform. The process remains largely the same, regardless of whether you're using a Seeed Studio device or your laptop's camera.

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Remember, while the platform allows you to train models using any camera, for the best results and optimal performance, we recommend using the target device (currently limited to Seeed Studio devices) to train and deploy your model.

With this comprehensive guide, you should now have a solid understanding of how to train a classification model using the SenseCraft AI platform. Happy training, and enjoy creating powerful, custom AI models for your projects!

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
