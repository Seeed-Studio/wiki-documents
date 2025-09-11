---
description: Getting with RS485 Vision AI Camera
title: RS485 Vision AI Camera
keywords:
- RS485 Vision
- Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## Supported Software Overview

- [**No code getting started with SenseCraft AI**](#jump1)
  - [What is SenseCraft AI?](#jump2)
  - [Getting Started with SenseCraft AI Model Assistant](#jump3)
- [**Program on Arduino connecting with Seeed Studio XIAO Board**](#jump4)
  - [Arduino Library Introduction](#jump5)
  - [Getting Started with Seeed Studio XIAO](#jump6)

## Hadware Overview

### Introduction

The Seeed Studio RS485 Vision AI Camera is an intelligent device that combines an ESP32-C3 MCU (Seeed Studio XIAO) with a Himax WiseEye2 HX6538 processor, featuring dual-core Arm Cortex-M55 and an integrated Ethos-U55 neural processor. This advanced camera delivers high-performance AI recognition at 480×480 resolution and 10 FPS, while maintaining low power consumption through flexible options for transmitting inference results. With its standard Modbus RS485 interface, it seamlessly integrates with industrial systems and supports both LoRaWAN and 4G connectivity through SenseCAP DTUs or other standard RS485 DTU devices. Protected by an IP66-rated enclosure, it withstands harsh environmental conditions, making it ideal for both indoor and outdoor applications. The camera excels in various computer vision tasks including headcount, object detection, and classification. Users can deploy models from over 300 pre-trained models or train custom models on the no-code SenseCraft AI platform, while AI models in TensorFlow and PyTorch frameworks are supported. Privacy concerns are addressed through its design to transmit only inference results, with optional Wi-Fi keyframe transmission when needed.

### Equipment Preparation

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI Camera </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Feature

- Powerful Visual AI Processing Capability: local inference up to 480*480 10FPS with WiseEye2 HX6538 processor featuring dual-core Arm Cortex-M55 and integrated Arm Ethos-U55 neural network uni.

- Edge Computing for High Data Security: local image inference, send only the final result, suitable for applications requiring limited data transmission and high data privacy.  

- Multi-Functional AI Models: shipped with 3 built-in models of human detection, people  count, and meter reading, and it also easy to deploy public AI models or train customized AI models on SenseCraft AI with a few clicks. Support TensorFlow and PyTorch frameworks.

- Multi-Transmission Protocols: Supports transmitting inference results via standard RS485 protocol; connect with SenseCAP S2100/ 4G Sensor Hub DTU to get the results via LoRaWAN or 4G. Also supports transmiting keyframes via Wi-Fi.

- Dust and Water Resistance: IP66-rated protection ensures stable long-term deployment in indoor and outdoor environments.

- Model Management via SenseCraft App: Configure and switch between pre-installed AI models with just a few taps. Easily adjust Model Confidence Thresholds to optimize performance for your specific use case.

### Specification

<table align="center">
 <tr>
     <th>Product Model</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>Current Input</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>Voltage Input</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>Microcontroller</th>
        <td align="center">Vision AI: <strong>Himax-6538</strong> <br></br> Network: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>Camera</th>
        <td align="center">
            Lens size: <strong>“1/4"</strong><br />
            Focal length: <strong>3.4 mm (adjustable)</strong><br />
            Resolution: <strong>2592 × 1944 pixels</strong><br />
            Pixel size: <strong>1.4 µm × 1.4 µm</strong><br />
            Maximum frame rate: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            FOV: <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>Model Execution and Inference</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            Chip:<strong>TP8485E, half-duplex transceiver
            RS485 Modbus-RTU Protocol</strong><br />
            Terminal Connection: <strong>Terminal Connection: 3-pin terminal for signal wire and 3-pin terminal for power</strong><br />
            Transmission Range:<strong>Transmission Range: up to 1200 meters (varies on environment)</strong><br />
            Transmission Speed: <strong>Transmission Speed: 250k bps (Max)</strong>
        </td>
    </tr>
    <tr>
        <th>Compatibility</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>Memory</th>
        <th>8GB MicroSD card (Class 10)</th>
 </tr>
 <tr>
     <th>IP Rating</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Operating Temperature</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>Operating Humidity</th>
        <th>0 - 100 %RH (non-condensing)</th>
 </tr>
 <tr>
     <th>Device Size</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>Device Weight</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>Cable Length</th>
        <th>2 meters</th>
 </tr>
</table>

### Pinouts Diagram

According to the picture below, the different wire colors of A1102 correspond to different pin functions. The specific pin functions are as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

Find the function that corresponds to datalogger to connect

:::tip
If you access 5v, you don't need to access 12v, 12v and 5v choose one of the voltage supply, remember not to use together!
:::

## Software Overview

### Deployment of factory AI models

#### Software Workflow

**Step 1 :** After logging into the app, click on “User” in the box below, and then find the settings of the Bluetooth-connected device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Step 2 :** Check the device “RS485 Vision AI Camera”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Step 3 :** Scanning after powering up the RS485 Vision AI Camera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Step 4 :** Click “AI Model” to view the factory-set AI model and deploy the type you want.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Step 5 :** If you need to bind the “DataLogger”, please enter the corresponding SN number, if you do not set the “confidence” you need, click on “Preview”, you can go to the image sensor to collect the picture.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Step 6 :** Show picture

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

Congratulations on successfully using the RS485 Vision AI V2 device on the SenseCraft APP!🎉

### Custom AI Models with SenseCraft AI

If you want to customize your model, we'll walk you through how to use SenseCraft AI to deploy your favorite machine learning model on the RS485 Vision AI Camera device to personalize features and applications.

#### Hardware Workflow

Connect the Type-C port to the Vision AI V2 to your computer according to the following instructions

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### Software Workflow

**Step 1 .** First, Click [SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home) and find **“Pretrained Models”** in the menu bar at the top of the SenseCraft AI website and click on it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Step 2 .** Find the **“SenseCAP A1102”** in the Supported Devices section. Here you need to find the device model that corresponds to the adapted model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Step 3 .** Here we choose the model of **“Face Detection”** on page 31 as an example demo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Step 4 .** Once inside the model, find the **“Deploy Model”** option.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Step 5 .** Find the Connect Device and the corresponding option **“SenseCAP A1102”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**Step 6 .** Once inside, plug in your A1102 device and find the corresponding serial port to connect to.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**Step 7 .** Finally we can see the model burned in and display the corresponding results

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - Confidence refers to the level of certainty or probability assigned by a model to its predictions.

`IoU:`
    - IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes.

At this point, we have successfully deployed the model we need on the RS485 Vision AI Camera device Next, we proceed to the next step of the operation！

### XIAO Reading Data

To read data from burn-in models via XIAO, please go to this [wiki](https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/), which explains in detail how to read Vision AI V2 data via XIAO.

### Transmission Data RS485

#### Connection Schematic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
If you access 5v, you don't need to access 12v, 12v and 5v choose one of the voltage supply, remember not to use together!
:::

Once you have successfully connected according to the diagram above, click on this      [wiki](https://wiki.seeedstudio.com/grove_vision_ai_v2_rs485/) link for a more detailed explanation of how to use the code to drive the

## Resources

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera Schematic](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

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
