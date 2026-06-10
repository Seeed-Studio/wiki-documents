---
description: SenseCraft AI is a no-code/low-code AIoT platform from Seeed Studio that lets you deploy pre-trained AI models to edge devices like the reSpeaker XVF3800. With the wakeword "Lumio," this setup enables voice-controlled AI applications—no complex coding required.
title: SenseCraft AI with reSpeaker XVF3800
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - Keyword Spotting
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update:
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/respeaker_xvf3800_sensecraft/
---


## Introduction

SenseCraft AI is Seeed Studio's no-code/low-code AI platform that simplifies deploying pre-trained artificial intelligence models to edge devices such as the reSpeaker XVF3800. This guide focuses on configuring the reSpeaker XVF3800 for wakeword detection using the custom trigger "Lumio," enabling voice-activated control for your projects without writing complex code. With SenseCraft AI, you can quickly test, preview, and integrate wakeword events into your hardware workflows. The platform also allows you to create and upload your own custom models for detecting specific sound events and custom wakewords, giving you full flexibility to tailor voice interactions to your unique application needs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Deploy Existing Model

### Step 1: Update the Device Firmware

Before deploying the wakeword model, ensure your reSpeaker XVF3800 is running the correct firmware version.

The required firmware file is:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

Follow your device's standard DFU (Device Firmware Update) [procedure](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware) to flash this file to the reSpeaker XVF3800.


### Step 2: Navigate to SenseCraft AI Platform

Open your web browser and go to:
> **https://sensecraft.seeed.cc/**

### Step 3: Access the Training Section

From the main navigation menu:
1. Click on **Products**
2. Select **SenseCraft AI**
3. Choose **Training AI Models**



### Step 4: Open Your Workspace

1. Navigate to your **Workspace**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. Verify that the workspace is set to **reSpeaker** as the active device type
3. Select **reSpeaker** from the device list
4. Click the **Connect** button to establish a connection with your device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### Step 5: Replace the Running Model

Once connected, you will replace the existing model on the device:

1. Locate the **Model** section under "Replace the device running model"
2. Click **Select Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. Choose **Keyword Spotting- Lumos Keyword recognition** from the available options

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

The model you are deploying is called **Lumos**. It is a lightweight speech recognition model designed to provide efficient, low-latency voice interaction capabilities for edge devices. By analyzing audio spectral features, the model can accurately detect the specific wake word **"Lumos"** even amidst complex ambient background noise.
:::


### Step 6: Confirm Model Deployment

1. A dialog box will appear with model details
2. Click **Confirm** to proceed with flashing the model to your device
3. Wait for a moment while the model is being flashed to the reSpeaker XVF3800

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### Step 8: Test Wakeword Detection

After successful deployment, you will see:

- **Audio spectrum visualization** – displaying real-time sound input
- **Two detection classes**:
  - *Background Noise*
  - *Lumos*

To test the wakeword:
1. Speak the word **"Lumos"** clearly into the reSpeaker microphone
2. Observe the confidence level for the Lumos class increase
3. Adjust the **threshold parameter** as needed to fine-tune detection sensitivity

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## Train and deploy your own audio classifier

### Step 1: Open the Training Tab

1. Navigate to **https://sensecraft.seeed.cc/**
2. From the main menu, go to **Products** → **SenseCraft AI** → **Training AI Models**
3. Click on the **Training** tab to access the audio classification interface


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_6.jpg" alt="pir" width={800} height="auto" /></p>

### Step 2: Connect Your reSpeaker Device

Under **Audio Classification / Detection**:

1. Verify that **reSpeaker Microphone** is selected as the input device
2. Click the **Connect** button to establish a connection
3. Wait for the platform to confirm successful connection


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_7.jpg" alt="pir" width={800} height="auto" /></p>



### Step 3: Collect Background Noise Data

Before training custom sounds, you must establish a baseline for normal ambient noise.

1. Press **Collect Training Data for Background Noise**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_8.jpg" alt="pir" width={800} height="auto" /></p>

2. The platform will automatically record for approximately **20 seconds**
3. The recording will be split into **1-second samples**
4. Once complete, a preview of the background data samples will appear
5. Review the samples and press **Apply** when satisfied


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_10.jpg" alt="pir" width={600} height="auto" /></p>


### Step 4: Create a Custom Sound Class

Now you will add a new class for the specific sound you want the model to detect.

**4.1 Name Your Class**

1. Click **Add New Class**
2. Enter the class name: **Grassbreaking**
3. Press **Create** or confirm the new class

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_11.jpg" alt="pir" width={800} height="auto" /></p>

**4.2 Collect Training Data for the Custom Class**

1. Select the **Grassbreaking** class
2. Press **Collect Training Data**
3. The platform will record for approximately **2 seconds**
4. The recording will be split into **1-second samples**

**4.3 Review and Apply Samples**

1. After collection, a preview of the **2 samples** will appear
2. Listen to or review the samples
3. Press **Apply** when you are satisfied with the quality

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_9.jpg" alt="pir" width={800} height="auto" /></p>

**4.4 Repeat for More Samples**

To achieve reliable detection, repeat the data collection process until you have collected at least **8 samples** for the Grassbreaking class.

**Tips for good samples:**
- Vary the intensity of the grass breaking sound
- Collect samples from slightly different positions or angles
- Ensure the sound is clearly audible above background noise


### Step 5: Train the Model

Once you have collected sufficient data, it is time to train the model.

#### 5.1 Navigate to Training Step

Go to **Step 2: Training** in the interface.

#### 5.2 Confirm Device Selection

Verify that **reSpeaker** is selected as the target device for training.

#### 5.3 Start Training

1. Press the **Train** button
2. Wait a few minutes for the training process to complete
3. Do not close the browser or disconnect the device during training

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_12.jpg" alt="pir" width={800} height="auto" /></p>

#### 5.4 Review Training Results

After training finishes, your trained classes will appear with:
- **Animated probability bars** showing confidence levels
- Real-time predictions based on live audio input

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_13.jpg" alt="pir" width={800} height="auto" /></p>

### Step 6: Deploy the Model to reSpeaker

**6.1 Go to Deployment Step**

Navigate to **Step 3: Deploy** in the interface.

**6.2 Deploy the Model**

1. Click the **Deploy** button to push the model to your device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_14.jpg" alt="pir" width={800} height="auto" /></p>


2. A confirmation dialog will appear
3. **Confirm** the deployment to push the TFLM (TensorFlow Lite Micro) model to the reSpeaker's XIAO ESP32-S3


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_15.jpg" alt="pir" width={600} height="auto" /></p>

**6.3 Wait for Completion**

The deployment process may take a moment. Wait for the confirmation message indicating successful deployment.


### Step 7: Monitor Real-Time Detection

After successful deployment:

1. The interface will display **animated confidence bars** for each detected class
2. Speak or produce the grass breaking sound to test detection
3. Observe the confidence level for the **Grassbreaking** class increase
4. Watch the **Background Noise** confidence decrease when the custom sound is detected

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_16.jpg" alt="pir" width={600} height="auto" /></p>



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

