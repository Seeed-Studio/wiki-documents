---
description: Train_AI_With_A1102
title: Deploy AI Models on SenseCAP A1102 Using SenseCraft AI
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /train_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 3/12/2024
  author: Zeke
---

# Deploying AI Models on SenseCAP A1102 Using SenseCraft AI

The SenseCAP A1102 is a powerful sensor device that combines advanced AI capabilities with ease of deployment. This guide will walk you through deploying AI models on the A1102 using the **SenseCraft AI** app, offering step-by-step instructions for pairing, configuration, and testing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **Getting Started with SenseCAP A1102**

### **What is SenseCAP A1102?**

The SenseCAP A1102 is an intelligent camera sensor designed for edge AI applications. Equipped with 8GB of memory, it can:

- Deploy custom AI models.
- Automatically save recognized images.
- Enable real-time recognition with high accuracy.

### **Requirements**

Before starting, ensure you have:

- The SenseCAP A1102 device.
- The **SenseCraft AI** app installed on your smartphone.
- Any pre-trained AI model for deployment.

## **Configuring the SenseCAP A1102**

### Power on the Vision AI camera

:::tip
If you need to modify the AI camera settings, you must follow the steps below to power up the AI camera.

If you only need to modify LoRaWAN transmission-related settings, you can skip this section.
:::

Connect the Type-C port to A1102 to your computer according to the following instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

If it is connected properly, you can see two indicators light up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **Access Advanced Settings**

Select “User” in the bottom navigation bar and click “Device Bluetooth Configuration”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

Slide to the bottom and select “SenseCAP A1102”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

Press and hold the power button on the SenseCAP A1102 for **three seconds** to enable pairing mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

Once paired, click on **Advanced Settings** in the SenseCraft AI app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

Navigate to additional configuration options by clicking **Advanced Settings** again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

## **Deploying an AI Model**

### **Selecting an AI Model**

From the settings menu, select your desired AI model for deployment. Choose from pre-loaded models or upload a custom model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **Configuring Model Parameters**

Set parameters like:

- **Confidence Level**: Adjust the threshold for object recognition (e.g., 80% confidence).
- **Save Recognized Images**: Enable or disable saving recognized images to the memory card.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **Testing and Running the Model**

### **Preview Camera Capture**

After deploying the model, preview the camera's captured images directly in the app to ensure the model is working as expected.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **View Device Information**

Return to the app's homepage to check the device information of the A1102, such as model status, connectivity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **Review Recognition Results**

View the recognition data and logs. For example, set a reporting interval (e.g., every 5 minutes) to track recognized objects.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **Accessing the SD Card**

Locate the gap in the A1102 unit and gently insert a screwdriver. Apply a little force to pry it open.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

Locate the four screw holes and rotate the knobs to open them. Make sure to apply consistent pressure while turning to ensure they come loose.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

Once the screws are loosened, remove the cover to access the SD card slot. You can then take out the SD card to read the information stored inside.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **Automatic Image Saving**

With 8GB of internal memory, the A1102 can automatically save recognized images to a memory card. Access and retrieve these images later for analysis or reporting.

:::tip
Equipped with 8GB of memory, the A1102 is able to automatically save images to the memory card when a target is recognized. When we need to access this image information, we can extract and access the required image data directly from the memory card.
:::

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
