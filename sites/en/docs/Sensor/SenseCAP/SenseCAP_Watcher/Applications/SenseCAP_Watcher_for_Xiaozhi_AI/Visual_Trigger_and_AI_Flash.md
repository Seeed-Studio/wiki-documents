---
description: Guide for flashing firmware to your SenseCAP Watcher Agent
title: Visual Trigger and AI Flash
sidebar_position: 4
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
- Visual
- Activate
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flashing AI Models on the SenseCAP Watcher

## Overview

Special thanks to [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) for their open-source contributions that made this project possible.

This guide focuses on how to flash the SenseCAP Watcher with the Visual Recognition Triggered Conversation firmware and how to replace or update the AI model on the device. It is intended as a hands-on instructional guide for these operations.

For a full introduction to Watcher features, applications, and use cases, please refer to : [SenseCAP Watcher - AI Assistant that actively interacts with the world](https://wiki.seeedstudio.com/solutions/hello_watcher_llms/)

## Prerequisites

### Required Hardware

- SenseCAP Watcher device  
- USB Type-C data cable  
- Windows PC  

:::note
If you are flashing the **Visual Activation Firmware**, and your Watcher device model is **not -EN**, you will also need to manually flash the authentication file for normal usage (only required once).  
For detailed instructions, please refer to [Watcher Agent Firmware Flashing Guide](https://wiki.seeedstudio.com/flash_watcher_agent_firmware/).
:::

## Firmware Flashing Process

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

- Prerequisites

  - [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

- Step 1. Open our platform and Select SenseCAP Watcher in Workspace
  
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>
  
- Step 2. Connect to our Platform by serial port

  -  Click `Connect` 
    
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

  - Select correct serial port (ending with “A”)

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

  :::note
  If you are using macOS or Linux, please choose the port with the smaller number.
  :::

  - Click `Connect`
    
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

- Step 3. Check and Update the Device Version
  
  - Click `Update`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>
  
  - Select correct serial port (ending with "B")
  :::note
  If you are using macOS or Linux, please choose the port with the bigger number.
  :::
  
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div> 

  - Click 'Connect'

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>
  
  - Select the version you want to flash and Click `Confirm`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

  - Waiting update and reboot process

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool">

- Prerequisites

  - **Visual Trigger Firmware v2.0.4**: [Download Link](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 or later)

- Step 1. Connect to the device(Type-C port on the bottom of the device) and Open your Flash Download Tool

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

- Step 2. Configure Firmware Settings

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

- Step 3. Select COM Port and Flash Settings

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

  - If flashing doesn’t start after clicking START, click STOP and confirm you have selected the COM port ending with “B”.
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- Step 4. Erase and Flash
  - Click the `ERASE` button to clear the existing firmware
  - Wait for the erase process to complete
  - Click the `START` button to begin flashing
  - You should see progress information in the log window
  - If no progress appears or failed, try the other COM port

- Step 5. Verify Success

  - The flashing process is complete when you see the success message in the log window.

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

- Step 6. Restart the Device

  - Locate the reset hole on your Watcher device
  - Use a pin to gently press the reset button
  - The device will restart with the new firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="Command Line" default>

- Prerequisites

  - **Visual Trigger Firmware v2.0.4**: [Download Link](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

- Step 1. Extract the downloaded firmware package and use the esptool.py to perform the flash

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *(Note: Adjust the port `/dev/ttyACM0` according to your system, e.g., `COM3` on Windows)*

- Step 2. Restart the Device

  - Locate the reset hole on your Watcher device
  - Use a pin to gently press the reset button
  - The device will restart with the new firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="Compile from Source (For Developers)">
- Prerequisites

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [Open-Source Repository (Xiaozhi AI Collaboration)](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

- Step 1. Open ESP-IDF CMD and Navigate to the project folder
  ```shell
  cd xiaozhi-esp32
  ```

- Step 2. Set the target chip
  ```shell
  idf.py set-target esp32s3
  ```

- Step 3. Open the configuration menu
  ```shell
  idf.py menuconfig
  ```

- Step 4. Set Board Type as SenseCAP Watcher

  - Select the Xiaozhi Assistant

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

  - Select Board Type

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

  - Select SenseCAP Watcher

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

- Step 5. Configure Additional Settings According to Your Needs(Optional)

  - Default display language and AEC (Automatic Echo Cancellation / voice interruption handling)

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

  - Wake words and triggers

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

  - Other optional parameters specific to your application

  - After completing your configuration, save and exit the menu

- Step 7. Build and flash the firmware
  ```shell
  idf.py build flash
  ```

</TabItem>
</Tabs>

:::note
Only firmware version 1.8.8 or higher supports visual wake-up functionality.
Firmware version above v2.0.3 requires saying “Turn on the inference switch” to Xiaozhi to enable visual detection.
:::

## AI Model Flashing Process

### Prerequisites
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

### Step 1. Open our platform and Select SenseCAP Watcher in Workspace
  
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>
  
### Step 2. Connect to our Platform by serial port

- Click `Connect` 
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- Select correct serial port (ending with “A”)
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>
:::note
If you are using macOS or Linux, please choose the port with the smaller number.
:::

- Click `Connect`
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

### Step 3. View existing model and Change a new model

- View Model name and Model version

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- Click `Select Model...` and Click the model you want to flash
  
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- Click `Confirm`
  
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

### Step 4. Preview the effect and Adjust the parameter  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

The current visual wake-up function offers the following configuration options:

- **Target ID** (`target`): Specifies the target ID to detect. This ID depends on the visual model used; the default value is 0.
- **Detection Duration** (`duration`): Unit is seconds, used to adjust the sensitivity of the visual wake-up. The default is 1 second (this default does not include the 1-second debounce processing).
- **Confidence Threshold** (`threshold`): The lower confidence limit for the visual model to recognize an object, used to adjust detection sensitivity. Represented as a percentage, the default is 75%.
- **Cooldown Period** (`interval`): Unit is seconds, indicating the wait time required after one conversation ends before triggering again, used to avoid frequent interruptions by the same object. The default is 8 seconds.

For example, you can adjust the model's sensitivity by modifying the `threshold` parameter. If you find the current threshold too strict, simply say to Watcher: "Please set the confidence threshold to 60%".

## Troubleshooting

### Common Issues

1. **No COM Port Detected**
   - Ensure you're using the bottom Type-C port
   - Try a different USB cable
   - Check if USB drivers are installed properly

2. **Flashing Fails**
   - When flashing Himax, select the COM port ending with “A”.
   - When flashing ESP32-S3, select the COM port ending with “B”.

3. **Device Not Responding**
   - Use a pin to gently press the reset button
   - Try erasing before flashing

4. **Device does not wake up with visual detection**
   - Check if there are relevant log messages in the serial output.
   - Firmware version v2.0.3 requires saying “Turn on inference switch” to Xiaozhi to enable this function.

5. **Serial shows visual recognition logs but device still cannot wake up**
   - Go to the SenseCraft AI Platform and flash the Person model to the AI chip.

## FAQ

**Q: Can I flash other AI models to Himax?**

A: Currently, only Face and Person models are supported. Flashing other models is not yet supported and will be available in a future update.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>