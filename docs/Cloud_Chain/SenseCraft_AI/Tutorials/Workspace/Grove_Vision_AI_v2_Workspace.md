---
description: Grove Vision AI v2 Workspace on SenseCraft AI Platform
title: Grove Vision AI v2 Workspace on SenseCraft AI Platform
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Getting Started

### Connect Grove-Vision AI v2

1. Connect Grove - Vision AI V2 to the camera via the CSI connection cable.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. Connect  Grove - Vision AI V2 to your computer via USB. and  select USB Single/serial debug unit to connect

:::note

Please use Chrome, Opera, or Edge to deploy AI models to XIAO ESP32S3 Sense and Grove Vision AI v2.

:::

3. Once connected to the device, it will read the device information, model information, and run the model for inference. Users can adjust the Confidence and IoU settings to fine-tune the accuracy of the model's inference.

- Confidence：Confidence refers to the level of certainty or probability assigned by a model to its predictions
- IoU：IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### Replace AI Model

If you need to replace the device's currently running model, the SenseCrfat AI platform offers two ways to do so

1. Select a publicly available model on the SenseCraft AI platform or a model under the user's account to replace it.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. Directly upload a model for replacement.

- Model Name：input a name
- Model File ：Upload a model in tflite format
- ID Object: Class of model recognition

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### Configration

If you need to push the inference results from the device to your own MQTT service or the Sensecraft Data platform, please configure Wi-Fi and MQTT. Next, we will use the Sensecraft Data platform as an example.

1. Enter a valid 2.4G Wi-Fi.
2. Access the [SenseCraft Data platform](https://sensecap.seeed.cc/portal/#/login) and log in.

:::note

You can use the same account to log in to both Sensecraft AI and the Sensecraft Data platform.

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. Access the Development Kit page and click the "Create Development Kit" button.
4. Enter the device name and select "Grove-Vision AI v2" as the device type.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. Once the device is created, click "connect" and then copy and paste the Host, Port, clientId, Username, and Password sequentially.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. After completing the form, click the Save button. Once the device has successfully applied the changes, go to the Process page. You will see the IP Address and Service Status: MQTT connected.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. Now you can return to the Development Kit page of the Sensecraft Data platform. Click on the device's EUI to enter the device details, where you will be able to see the inference results.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### Output

Set a condition so that when the detected target meets the criteria, the yellow LED on the XIAO ESP32S3 will light up.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

Example:If the device detects Face and the confidence is greater than 43, then light up the device's yellow led

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### Train

SenseCraft AI integrates YoLo-World to quickly generate single-class AI models based on user input class, which can be directly deployed to Grove-Vision AI v2 devices.

### Quick Generate

1. Enter the class, click the Quick Generate button, and wait for the model to be generated.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. After the model is generated, you can select the model and click the Deploy to device button to flash the generated model onto the device.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. View the inference result

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### Capture to Train

The quickly generated model may not have high accuracy. You can click Capture to Train to take and collect target images. Submit the collected images to Yolo-World for optimized training. The optimized model will have better accuracy.

1. Use the Grove-Vision AI v2 camera to aim at the target, and click the Capture button to collect images.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. Select and confirm the target in the captured images.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. Repeat steps 1-2 to collect at least 10 photos for training. After collecting the images, click the Train Model button.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. Once the model is generated, select the newly generated model, deploy it to the device, and check the inference results.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

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
