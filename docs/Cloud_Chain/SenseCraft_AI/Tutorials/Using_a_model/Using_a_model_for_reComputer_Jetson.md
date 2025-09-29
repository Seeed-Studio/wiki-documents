---
sidebar_position: 4
description: Deploy model to Jetson on Sensecraft AI Platform
title: Using a model for reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson
aliases:
  - /sensecraft_deploy_model_to_jetson
last_update:
  date: 08/22/2024
  author: Frank
---

## Getting Started

SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESPS3,etc. Enjoy seamless Edge AI model deployment now!<br />

1. Select or upload an AI model for Jetson device<br />
2. Visit the AI model detail and click "Deploy Model" button<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **Step 1  Install SenseCraft AI-Jetson**

1. If your Jetson device has installed SenseCraft AI on device,go directly to step 2

2. Connect Jetson to a display and power it on

3. Plug a mouse and keyboard into the device and type the following command on a terminal to run the application

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. SenseCraft AI-Jetson install complete, please go to step 2<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **Step 2  Select device**
1. If you have already added the device to the platform, you can directly select the device and click next to go to step 3<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. If your need add a new device, please click "Add Devic" Button and the Add Device window will appear.<br />
3. Enter the device name <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. Visit SenseCraft AI-Jetson Application on your device and go to Settings page<br />
5. Enable "Bind to SenseCraft AI platform" setting and get the bind code <br />
6. Back to SenseCraft AI platform and enter the valid bind code to complete the addition<br />

:::note
if this bind code is duplicated, you need to enter the temporary name.
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. Now select the device and click next to step 3

### **Step 3  Select Stream**
1. If you want to apply the AI model on the existing video stream of the device, please directly select the video stream and click "Send" to send the model down to the device.<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. If you want to apply the AI model to a new video stream, click the "Add Stream" button and enter the new stream's information<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

Stream info detail please check the follow table 

| **Fields** | **Content** |
| --- | --- |
| **Stream Name** | 1 custom name for this stream.<br />2 Cannot be empty |
| **Video Type** | 1 Ip camera：Access a IP camera, need input a valid rtsp url<br />2 Usb camera：Connect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path.<br />3 Video：Video built into the device,and input in video path |
| **Video Path** | Video Path, format decided by "Video Type", if wrong, default video will be used. |
| **Confidence Threshold** | 1 Object confidence threshold for detection.<br />2 Format:float [0, 1] |
| **IoU Threshold** | 1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float [0, 1] |
| **FPS** | 1 Frames per second of stream<br />2 Format: INT [1,60] |
| **Quality** | 1 Output stream quality.  Default: 50<br />2 Format: int [0,100] |
| **Maximum Detections** | 1 maximum number of detections per image.Default:3002 Format: int [0,1000] |
| **Display Frame Rate** | 1 Whether to display the frame rate of the stream<br />2 Format:Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Whether to display the time<br />2 Format:Bool [True,False]<br />● True: display time<br />● False: do not display time |

3. Click “Send” button to send the model down to the device.The model deployment will take about 5mins, please feel free to close the preview page and check it in device workspace after the deployment is complete.

4. Check the new model on device or device workspace on AI platform<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)


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