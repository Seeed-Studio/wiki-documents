---
sidebar_position: 7
description: This article describes how to get outputs using Grove Vision AI V2 and SenseCraft AI.
title: Model Output for Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
---

# Configuring Model Output on SenseCraft AI for Grove Vision AI V2

This wiki article provides a comprehensive guide on how to configure model output settings for the Grove Vision AI V2 device using the SenseCraft AI platform. By following these step-by-step instructions, you will learn how to set up trigger conditions and actions based on the output of your trained model running on the Grove Vision AI V2.

## Prerequisites

Before you begin, ensure that you have the following:

1. Grove Vision AI V2 device

2. USB-C cable for connecting the Grove Vision AI V2 to your computer

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Step 1. Access the SenseCraft AI Vision Workspace and connect the Grove Vision AI V2

Open your web browser and navigate to the SenseCraft AI Vision Workspace page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

From the list of available devices, select the Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

Using the USB-C cable, connect your Grove Vision AI V2 device to your computer. Once the device is connected, click the **Connect** button located in the top-left corner of the SenseCraft AI Vision Workspace page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Step 2. Ensure a Model is Loaded on the Grove Vision AI V2

Before proceeding, ensure that your Grove Vision AI V2 device has a trained model deployed on it. If you haven't deployed a model yet, refer to the SenseCraft AI documentation for instructions on how to train and deploy models to your device.

- [Using a model for Grove Vision AI V2](https://wiki.seeedstudio.com/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

If you want to use your own trained model, you can refer to the following two Wikis.

- [Type of training - Classification](https://wiki.seeedstudio.com/sensecraft_ai_training_classification/)
- [Type of training - Object Detection](https://wiki.seeedstudio.com/sensecraft_ai_training_object_detection/)

## Step 3. Access the Output Configuration Settings

In the left sidebar of the Vision Workspace page, click on the **Output** option to access the output configuration settings for your Grove Vision AI V2 device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

On the right side of the page, click the **Trigger action when event conditions are met** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

A dialog box will appear, prompting you to input various parameters that will serve as the trigger conditions for the desired actions. These parameters include:

- **Object**: Specify the object that your model should detect to trigger the action. For example, "person" if you want the action to occur when a person is detected.

- **Condition**: Choose the condition that must be met for the trigger to occur. Options include "Greater than", "Less than", "Equal to", etc. For instance, selecting "Greater than" means the action will be triggered when the detected object's confidence level is greater than the specified value.

- **Confidence**: Set the minimum confidence level required for the object detection to trigger the action. This value ranges from 1 to 100, with 100 being the highest confidence.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

After configuring the desired trigger conditions, click the **Confirm** button to save the settings.

## Step 4. Select the Desired Trigger Actions

The Grove Vision AI V2 supports two types of trigger actions:

- **Light up the LED**: When this option is selected, the onboard LED on the Grove Vision AI V2 will light up when the trigger conditions are met.

- **Save image to the SD Card**: When this option is selected, the Grove Vision AI V2 will save the captured image to the MicroSD card inserted in the device when the trigger conditions are met.

Select the checkbox next to the desired trigger action(s) to enable them.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## Step 5. Send the Trigger Configuration to Grove Vision AI V2

Finally, click the **Send** button to transmit the trigger configuration to your Grove Vision AI V2 device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

The Grove Vision AI V2 will now execute the configured trigger actions when the specified conditions are met, providing a visual indication of the model's output.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
Keep in mind that the output functionality relies on the web-based connection between the SenseCraft AI platform and your Grove Vision AI V2 device. If the connection is lost or interrupted, the configured trigger actions will stop working. Ensure a stable connection throughout the process.
:::

## Conclusion

By following this step-by-step guide, you have learned how to configure model output settings and trigger actions on the SenseCraft AI platform for the Grove Vision AI V2 device. You can now set up your device to perform specific actions, such as turning on the onboard LED or saving captured images, based on the output of your trained model. This functionality enables you to create interactive applications and projects using the Grove Vision AI V2 and SenseCraft AI. Remember to maintain a stable connection between the web platform and your device for seamless operation.

The Grove Vision AI V2 is still essentially an AI camera sensor, so we can't expect to do much more than sensor stuff with it. If you have an extra MCU, you can do more interesting projects with the Grove interface or Pin to Pin interface, SenseCraft AI is just a medium to deliver the model, for more Arduino routines on the Grove Vision AI V2 model, please refer to [Getting Started with Grove Vision AI V2](https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
