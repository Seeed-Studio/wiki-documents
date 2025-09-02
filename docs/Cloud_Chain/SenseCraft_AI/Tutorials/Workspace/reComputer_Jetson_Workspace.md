---
sidebar_position: 13
description: Nvidia Jetson Workspace on SenseCraft AI Platform
title: reComputer Jetson Workspace
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Getting Started

Before adding a Jetson device to workspace, please first install the SenseCraft AI app to the jetson.

SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks!

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

### Add Device

1. Click "Add Device" button on Device Workspace Page
2. Enter a device custom name and get the bind code from device.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. Back to device‘s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.

- Bind Code: enter the correct and valid bind code on SenseCraft AI-Model Zoo to finish binding the device.
- Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. enter the correct and valid bind code and click "Comfirm" button

5. Bind successfully,now you can manage the device

:::note

every account only add 5 free device

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### Device Information

The device information is divided into three parts, general information, video stream information and AI model.

### General Info

The device information is divided into three parts, general information, Video stream information and AI model. Please check the table below for details

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **Fields** | **Content** |
| --- | --- |
| **Device Name** | Device custom name, user can change the name |
| **Device SN** | Unique production serial number of the device |
| **Device EUI** | Device EUI |
| **Online Status** | Online: device is online<br />Offline: device is offline,user can‘t operate offline device |
| **Equipped Module** | The device's module |
| **CPU Usage** | Device CPU usage |
| **Memory** | Device RAM usage |
| **Storage** | Device disk usage |
| **IP Address** | The device network IP address |
| **MAC Address** | The device MAC address |
| **SenseCraft AI Version** | Version of the SenseCraft AI Application installed on the device |
| **Collect Time** | The time when the last information was collected from the device |

### Delete Device

If you have completed the deployment of the AI Model and do not need to manage the device remotely, you can remove the device from the platform and the device can do local inference, stream management and AI model management independently on the edge.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### Video Stream  Management

Video Stream can view the real-time inference results remote and manage device video stream. supported add stream, edit stream  view stream,and delete stream.

#### Real-time inference

If video streams have been added to the device, users can view real-time inference results for all streams on the platform. Enables real-time monitoring of inference results and exceptions

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### Add Stream

Click "Add Stream" and enter valid stream info, and then  click "Confirm" button to send the new stream to the device.   It takes time for the device to add a new stream, the platform information will be updated later. please check the below table for detail info.

:::note

The device must be online to add a new stream

:::

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

#### Stream detail

Click the stream "Eye" icon,you will view the stream  detail info

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### Edit Stream

Click the stream "Edit" icon, users can edit all configurations of the stream and click "Confirm" button to send the modified stream info to the device.  It takes time for the device to update the streaming configuration, the platform information will be updated later

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### Delete Stream

Click the stream "Delete" icon to delete the stream. It takes time for the device to delete stream, the platform information will be updated later

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### Device AI Model

Manage all AI models that have been downloaded on the device and support add model , view the model detail and delete model.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

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
