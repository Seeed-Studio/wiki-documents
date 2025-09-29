---
sidebar_position: 12
description: SenseCraft AI Jetson
title: Toolkit for reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
---

SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks!

In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## Install SenseCraft AI-Jetson

**Hardware Requirements**

- NVIDIA Jetson device
- Internet connectivity via Ethernet/ WiFi
- Display

**Software Requirements**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Quick Start**<br />

1. Connect Jetson to a display and power it on<br />
2. Plug a mouse and keyboard into the device and type the following command on a terminal to run the application

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. During application installation, you need to set the following optional configurations, so please set them according to your needs

- **[Optional] Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? [y/n] (default: y): y**<br />
provides the jetson_clocks script to maximize Jetson  performance by setting static max frequency to CPU, GPU, and EMC clocks.

- **[Optional] Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) [y/n] (default: n): n**<br />
In the case of insufficient memory (especially jetson nano), it is better to enable swap to ensure the normal operation of the program.

- **[Optional] Do you want to create or change the size of the Swap Memory? (/swapfile)?**<br />
To get better performance out of nano, turn on Swap.

- **[Optional] Use external · to store the Docker data directory? (for docker images & volumes)?**<br />

- **(Recommended if your root partition is smaller than 32 GB). [y/n] (default: n): n**<br />

The edge ai program requires a minimum of 32G of storage space to run, if not, you can choose to mount the docker data volume to an external disk.

4. Now you can experience SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **Deploy new models**

1. Visis “AI Models“ Page  and select a AI model you need<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. Click "Deploy Model" button

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. Check the read me to ensure the device have install SenseCraft AI-Jetson and the AI model adapt to the device type.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. Select a online device

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AI model need apply a video stream, if there is no stream please add a valid stream firstly. Model zoo will send the stream info to the device directly.

:::note
more stream info describe please check Streams Management
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. Send the AI model and stream info to device. AI model deployment takes a few minutes, so you can leave the current page and go to the device after a few minutes to view the deployed AI model

### **Streams management**

SenseCraft AI-Jetson supports add multiple video streams and supports add USB camera and IP camera as your needed.

The number of video streams that can be added depends on the CPU and memory resources of the device. Pay attention to the resource usage of the device.

#### **Add Stream**

1. Visit Streams page and  click + icon<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. Setup the new video stream valid message, please check the table below for details<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Fields** | **Content** |
| --- | --- |
| **Stream Name** | 1 custom name for this stream.<br />2 Cannot be empty |
| **Video Type** | 1 Ip camera：Access a IP camera, need input a valid rtsp url<br />2 Usb camera：Connect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path. |
| **Video Path** | Video Path, format decided by "Video Type", if wrong, default video will be used. |
| **Device AI Model** | 1 Select an AI model which already downloaded on the device<br />2 If there is no AI model on your device, please go to AI Models page to download the model to your device. |
| **Confidence Threshold** | 1 Object confidence threshold for detection.<br />2 Format:float [0, 1] |
| **IoU Threshold** | 1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float [0, 1] |
| **FPS** | 1 Frames per second of stream<br />2 Format: INT [1,60] |
| **Quality** | 1 Output stream quality.  Default: 50<br />2 Format: int [0,100] |
| **Maximum Detections** | 1 maximum number of detections per image.Default:3002 Format: int [0,1000] |
| **Display Frame Rate** | 1 Whether to display the frame rate of the stream<br />2 Format:Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Whether to display the time<br />2 Format:Bool [True,False]<br />● True: display time<br />● False: do not display time |

3. Click "Save" button and back to home page to check the new stream and AI detection result.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Delete Stream**

Go to the stream details and click "Delete" icon to delete the stream<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AI Model Management**

Manage all AI models that have been downloaded on the device.

- The AI model will show the name of the stream that uses the model.<br />
- AI models not used on stream can be deleted<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Settings**

#### **About**

The device info, more info please check the follow table <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Fields** | **Content** |
| --- | --- |
| **Product** | The device's module |
| **IP** | The device network IP address |
| **Serial number** | Unique production serial number of the device |
| **MAC address** | Network MAC address |
| **CPU Usage** | Device CPU usage |
| **RAM** | Device RAM |
| **Swap** | Device swap |
| **Disk usage** | Device disk usage |
| **Cuda version** | The version of Cuda installed on the device |
| **Jetpack version** | The version of jetpack installed on the device |

#### **Bind to SenseCraft AI platform**

SenseCraft AI -Jetson is designed for edge AI. AI inference and video stream processing is done locally on the device, only if you need to download more AI models you need to bind the device to the [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home), and you can remove the device from the platform once downloaded.

1. Visist [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)<br />
2. Register with a valid email address. The SenseCraft-AI Model Zoo account is the same as the SenseCAP cloud account, if you already have a SenseCAP Cloud account, you can log in directly.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. Visit "Device Workspace" and click “Add Device” button.<br />
4. Enter a device custom name and get the bind code from device.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. Back to device‘s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.

- Bind Code: enter the correct and valid bind code on [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) to finish binding the device.<br />
- Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. enter the correct and valid bind code and click "Comfirm" button<br />
7. Bind successfully,now you can add new AI models from model zoo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**

If you no need remote manage your device on AI platform you can detele the device from your AI platform's accout. You can unbind from the device or on the platform<br />

- Unbind the device from AI mode zoo, Click "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- Unbind the device by disable "Bind to SenseCraft AI platform"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **App Update**

SenseCraft AI App updates are categorized into automatic and manual updates, which you can set according to your needs.

**Automatic update**: check for updates every 5 minutes, when a new version is detected, the information will be automatically updated, no need to do it manually.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**Manual update**: manually check for updates, and click the Update button to update when a new version is detected

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

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
