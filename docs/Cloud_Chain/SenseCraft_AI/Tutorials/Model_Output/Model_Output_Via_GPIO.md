---
sidebar_position: 8
description: This article describes how to send the recognition results of a model over GPIO.
title: Model Output Via GPIO
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# Configuring Model Output and GPIO on SenseCraft AI for XIAO ESP32S3 Sense

This wiki article provides a step-by-step guide on how to configure model output and GPIO settings for the XIAO ESP32S3 Sense board using the SenseCraft AI platform. By following these instructions, you will learn how to trigger GPIO level changes based on specific event conditions detected by your trained model.

## Prerequisites

Before you begin, ensure that you have the following:

1. XIAO ESP32S3 Sense board
2. USB-C data cable
3. Expansion Board Base for XIAO with OLED
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>Expansion Board Base for XIAO with OLED</th>
      <th>Grove LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Step 1. Access the SenseCraft AI Vision Workspace and connect the XIAO ESP32S3 Sense

Open your web browser and navigate to the SenseCraft AI Vision Workspace page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

Select the XIAO ESP32S3 Sense board from the available devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

Using the USB-C cable, connect your XIAO ESP32S3 Sense board to your computer. Once connected, click the **Connect** button located in the top-left corner of the SenseCraft AI Vision Workspace page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Step 2. Ensure a Model is Loaded on the XIAO ESP32S3 Sense

Before proceeding, make sure that your XIAO ESP32S3 Sense board has a trained model loaded. If you haven't loaded a model yet, refer to the SenseCraft AI documentation on how to train and deploy models to your device.

- [Using a model for XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/sensecraft_ai_pretrained_models_for_xiao/)

If you want to use your own trained model, you can refer to the following two Wikis.

- [Type of training - Classification](https://wiki.seeedstudio.com/sensecraft_ai_training_classification/)
- [Type of training - Object Detection](https://wiki.seeedstudio.com/sensecraft_ai_training_object_detection/)

## Step 3. Configure GPIO Output

In the left sidebar of the Vision Workspace page, click on the **Output** option. From the available output options, select **GPIO** to access the GPIO configuration settings.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

On the right side of the page, click the **Trigger action when event conditions are met** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

A dialog box will appear, prompting you to input various parameters that will serve as the trigger conditions for changing the GPIO level. These parameters include:

- **Object**: Specify the object that your model should detect to trigger the GPIO level change. For example, "face" if you want the GPIO to change when a face is detected.

- **Condition**: Choose the condition that must be met for the trigger to occur. Options include "Greater than", "Less than", "Equal to", etc. For instance, selecting "Greater than" means the GPIO will change when the detected object's confidence level is greater than the specified value.

- **Confidence**: Set the minimum confidence level required for the object detection to trigger the GPIO change. This value ranges from 1 to 100, with 100 being the highest confidence.

- **GPIO**: Select the specific GPIO pin on the XIAO ESP32S3 Sense that you want to control. Available options include GPIO1(DO), GPIO2(D1), etc.

- **Default Status**: Choose the default state of the selected GPIO pin. Options include "Low Level" and "High Level".

- **Active Status**: Specify the state that the GPIO pin should change to when the trigger conditions are met. Options include "Low Level" and "High Level".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

After configuring the desired trigger conditions, click the **Confirm** button to save the settings. Finally, click the **Send** button to transmit the GPIO trigger command to your XIAO ESP32S3 Sense board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

The XIAO board will now execute the command, and you can observe the effect on the connected Grove LED via the Expansion Board Base for XIAO with Grove OLED.

:::caution
Keep in mind that the GPIO output functionality relies on the web-based connection between the SenseCraft AI platform and your XIAO ESP32S3 Sense board. If the connection is lost or interrupted, the GPIO level changing feature based on model detection will stop working. Ensure a stable connection throughout the process.
:::

## Conclusion

By following this step-by-step guide, you have learned how to configure model output and GPIO settings on the SenseCraft AI platform for the XIAO ESP32S3 Sense board. You can now trigger GPIO level changes based on specific event conditions detected by your trained model. This functionality opens up a wide range of possibilities for creating interactive projects and applications using the XIAO ESP32S3 Sense and SenseCraft AI. Remember to maintain a stable connection between the web platform and your device for seamless operation.

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
