---
description: One Stop Model Training with Edge Impulse
title: One Stop Model Training with Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 3/31/2023
  author: Yvonne
---

## Overview

In this wiki, we will teach you how to train your own AI model for your specific application with  **Edge Imoulse** and then deploy it easily to the SenseCAP A1101 - LoRaWAN Vision AI Sensor. Let's get started!

:::tip
**What is Edge Impulse?**Edge Impulse is the edge AI platform for enterprise teams building optimized models on any edge device. Deliver value faster and achieve product innovation with advanced AI sensor features.
:::

## Hardware preparation

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **LoRaWAN Vision AI Sensor** is an image recognition AI sensor designed for developers. SenseCAP A1101 - LoRaWAN Vision AI Sensor combines TinyML AI technology and LoRaWAN long-range transmission to enable a low-power, high-performance AI device solution for both indoor and outdoor use.<br />This sensor features Himax's high-performance, low-power AI vision solution which supports the Google TensorFlow Lite framework and multiple TinyML AI platforms.<br />


It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required. SenseCAP - Vision AI Module is available for purchase directly from [Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html).

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-C cable
- Windows/ Linux/ Mac with internet access

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>




## Software praparation

To set this A1101 up in Edge Impulse, you will need to install the following software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. On Linux:
   - GNU Screen: install for example via `sudo apt install screen`.
3. Download the latest [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**Problems installing the Edge Impulse CLI?**
See the [Installation and troubleshooting guide](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Connecting to Edge Impulse

With all the software in place it's time to connect the A1101 to Edge Impulse.

### Step 1. Update BL702 chip firmware

BL702 is the USB-UART chip which enables the communication between the PC and the Himax chip. You need to update this firmware in order for the Edge Impulse firmware to work properly.

1. Get the latest bootloader firmware from [here](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases): **tinyuf2-sensecap_vision_ai_xxx.bin**.

2. Connect the A1101 to the PC via a USB Type-C cable while holding down the **Boot** button on the A1101.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. Open previously installed Bouffalo Lab Dev Cube software, select **BL702/704/706**, and then click **Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. Go to **MCU** tab. Under **Image file**, click **Browse** and select the firmware you just downloaded.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. Click **Refresh**, choose the **Port** related to the connected A1101, set **Chip Erase** to **True**, click **Open UART**, click **Creat & Download** and wait for the process to be completed .

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

You will see the output as **All Success** if it went well.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
If the flashing throws an error, try to click **Create & Download** multiple times until you see the **All Success** message.
:::

### Step 2. Update Edge Impulse firmware

The A1101 does not come with the right Edge Impulse firmware yet. To update the firmware:

1. [Download the latest Edge Impulse firmware](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip) and extract it to obtain **firmware.uf2** file.

2. Connect the A1101 again to the PC via USB Type-C cable and double-click the **Boot** button on the A1101 to enter **mass storage mode**.

3. After this you will see a new storage drive shown on your file explorer as **SENSECAP**. Drag and drop the **firmware.uf2** file to SENSECAP drive.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

Once the copying is finished **SENSECAP** drive will disapper. This is how we can check whether the copying is successful or not.

### Step 3. Setting keys

From a command prompt or terminal, run:

```
edge-impulse-daemon
```

This will start a wizard which will ask you to log in, and choose an Edge Impulse project. If you want to switch projects run the command with `--clean`.

Alternatively, recent versions of Google Chrome and Microsoft Edge can collect data directly from your A1101, without the need for the Edge Impulse CLI. See [this blog post](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) for more information.

### Step 4. Verifying that the device is connected

That's all! Your device is now connected to Edge Impulse. To verify this, go to [your Edge Impulse project](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), and click **Devices**. The device will be listed here.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## Collecting data from A1101 - Vision AI

With everything set up you can now build and run your first machine learning model with these tutorials:

- [Object detection](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Counting objects using FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Frames from the onboard camera can be directly captured from the studio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

Finally, once a model is trained, it can be easily deployed to the A1101 – Vision AI Module to start inferencing!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## Deploy model to A1101 - Vision AI
After building the machine learning model and downloading the Edge Impulse firmware from Edge Impulse Studio, deploy the model uf2 to SenseCAP - Vision AI by following **steps 1 and 2** under [Update Edge Impulse firmware section](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware).
Drag and drop the **firmware.uf2** file from EDGE IMPULSE to **SENSECAP** drive.

When you run this on your local interface:
<br />edge-impulse-daemon --debug<br />
It will ask you to click a URL, then you will see a live preview of the camera on your device.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

##  Configure your model on the SenseCap Mate

- Download [SenseCAP Mate](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback) 
   - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
   - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- Open SenseCAP Mate and login

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- Under **Config** screen, select **Vision AI Sensor**


<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- Press and hold the configuration button on the SenseCap A1101 for 3 seconds to enter bluetooth pairing mode
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>


- Click **Setup** and it will start scanning for nearby SenseCAP A1101 devices- Go to **Settings** and make sure **Object Detection** and **User Defined 1** is selected. If not, select it and click **Send**
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- Go to **General** and click **Detect**
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>



- [Click here](https://files.seeedstudio.com/grove_ai_vision/index.html) to open a preview window of the camera stream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- Click **Connect** button. Then you will see a pop up on the browser. Select **SenseCAP Vision AI - Paired** and click **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- View real-time inference results using the preview window!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

For example, as you can see above, the cat are being detected with bounding boxes around them. Here "0" corresponds to each detection of the same class. If you have multiple classes, they will be named as 0,1,2,3,4 and so on. Also the confidence score for each detected apple (0.72 in above demo) is being displayed!


## Tech Support

Please do not hesitate to submit the issue into our [Discord](https://discord.com/channels/862602258452578314/956370118575804467) and our email: order@seeed.cc.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
