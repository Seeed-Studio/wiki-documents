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
updatedAt: '2026-06-04'
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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={600} height="auto" /></p>

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={600} height="auto" /></p>

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

