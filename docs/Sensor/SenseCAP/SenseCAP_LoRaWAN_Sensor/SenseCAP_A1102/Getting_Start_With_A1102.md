---
description: Getting Started with SenseCAP Vision AI V2
title: Getting Started with SenseCAP Vision AI V2
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

TinyML AI models locally, transmitting only inference results via LoRaWAN® (863-928MHz) for enhanced privacy and power efficiency. Operating at 480×480 resolution with 10 FPS, it comes with three pre-deployed models for human detection, people counting, and meter reading, while offering no-code access to 300+ pre-trained models or custom model training through the [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home) platform. It also supports model deployment from [TensorFlow Lite](https://www.tensorflow.org/) and [PyTorch](https://pytorch.org/) frameworks. Users can configure the device and the frequency bands via the [SenseCraft App](https://sensecap-mate-download.seeed.cn/), and deploy the IP66-rated sensor in harsh indoor or outdoor environments. With a built-in battery,  making it ideal for various AI applications requiring long-range communication.

## Features

- Advanced Edge AI Camera: Equipped with a powerful MCU-based vision camera processor performing local inference at 480×480 resolution at 10 FPS. By transmitting only inference results, it ensures data privacy and minimizes network bandwidth usage.

- No-Code AI Model Deployment and Training: Pre-loaded with three on-device AI models (human detection, people counting, and meter reading) for out-of-box vision applications. Natively integrates with SenseCraft AI , a web-based platform offering 300+ pre-trained models for instant deployment and simple 3-step training workflow for classification and detection models. This enables rapid model training and deployment without coding expertise. Moreover, the devices also supports custom AI models converted from TensorFlow and PyTorch frameworks for edge deployment.

- LoRaWAN® Connectivity: Supports global frequency bands (863-928 MHz) with transmission range up to 10 km in optimal conditions, enabling reliable long-distance communication.

- 2 Power Options & Battery Life: Fitted with a 19Ah SOCl2 D-size battery and also compatible with external DC power supply via optional junction box.

- IP66 Rating Environmental Durability: Features IP66-rated protection against dust ingress and strong water jets. Operates reliably in temperatures from 0°C to 70°C, suitable for diverse indoor and outdoor deployments.

- SenseCraft Cloud Integration: Includes SenseCraft Mate mobile app and web portal for easy device configuration, device management and quick data visualization. Features open API support and 3-month FREE trial access, it's compatible with third-party IoT platforms.

## Specification

<table align="center">
 <tr>
     <th>Product Model</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>Microcontroller</th>
        <td align="center">
            <strong>Vision AI:</strong>Himax-6538 <br></br>
            <strong>LoRaWAN Network:</strong>Wio-E5 (STM32WLE5JC)<br></br>
            <strong>Bluetooth:</strong> XIAO ESP32C3<br></br>
        </td>
 </tr>
    <tr>
        <th>Camera</th>
        <td align="center">
            <strong>Module:</strong>OV5647<br />
            <strong>Lens size:</strong>1/4"<br />
            <strong>Focal length:</strong>3.4 mm (adjustable)<br />
            <strong>Resolution:</strong> 2592 × 1944 pixels<br />
            <strong>Pixel size:</strong> 1.4 µm × 1.4 µm<br />
            <strong>Maximum frame rate:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>Model Execution and Inference</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>LoRaWAN® Transmission</th>
        <td align="center">
        <strong>Protocol:</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>LoRaWAN® Frequency:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>Communication Distance:</strong> 2 to 10km (depending on the environment)<br />
        <strong>Max Transmitted Power:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>Power Supply</th>
        <td align="center">
        Built-in Battery or DC 12V/1A (with external junction box wiring)
        </td>
    </tr>
 <tr>
     <th>Power Consumption</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>Battery</th>
        <td align="center">
        <strong>Capacity:</strong> 19Ah (non-rechargeable)<br />
        <strong>Type:</strong> Standard D-size SOCl2 Battery<br />
        </td>
 </tr>
 <tr>
     <th>Local Storage Memory</th>
        <th>8GB MicroSD Card (Class 10) for storaging  up to 20,000 images with timestamp  and supports to export </th>
 </tr>
 <tr>
     <th>IP Rating</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Operating Temperature</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>Operating Humidity</th>
        <th>0-100% RH (non-condensing)</th>
 </tr>
 <tr>
     <th>Cable Length</th>
        <th>2 meters</th>
 </tr>
 <tr>
     <th>Device Weight</th>
        <th>719g</th>
 </tr>
 <tr>
     <th>Device Dimensions</th>
        <td align="center">
        <strong>Camera:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144.5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## Power Supply Options

- Option 1: The SenseCAP A1102 operates in cyclic mode using a built-in 19Ah D-type Li-SOCl2 battery. The battery is commercially available for easy replacement and enables standalone outdoor deployment without requiring external power.

- Option 2: The SenseCAP A1102 supports constant operation through a 12V DC power supply connection. An extra matching junction box is needed for straightforward installation and assembly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## Hardware Overview

- OnBoard Photo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## Connect to the LoraWAN®

LoRaWAN® (Long Range Wide Area Network) is a wireless communication protocol designed for low-power, long-range communications between IoT (Internet of Things) devices and gateways. It uses unlicensed radio spectrum in the Industrial, Scientific, and Medical (ISM) band, typically at 868 MHz in Europe and 915 MHz in the United States. LoRaWAN® provides a low-cost, energy-efficient solution for connecting IoT devices over long distances. The technology allows for bi-directional communication between devices and gateways, and it supports a range of data rates to accommodate different types of applications.

## How to Select Gateway and LoraWAN®

LoRaWAN® network coverage is required when using sensors, there are two options.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## How to use the Sensor

In addition to connecting directly to a computer to view real-time detection data, you can also transmit these data through LoraWAN® and finally upload them to the [SenseCAP cloud platform](https://sensecap.seeed.cc/) or a third-party cloud platform. On the SenseCAP cloud platform, you can view the data in a cycle and display it graphically through your mobile phone or computer. The SenseCAP cloud platform and SenseCAP Mate App use the same account system.

Since our focus here is on describing the model training process, we won't go into the details of the cloud platform data display. But if you're interested, you can always visit the SenseCAP cloud platform to try adding devices and viewing data. It's a great way to get a better understanding of the platform's capabilities!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## FAQ

**What are the ideal camera settings for image capture?**

- For a 5-megapixel camera, it is recommended to capture images within a range of 1m to 5m to achieve optimal image quality. During image capture, ensure that the camera is directly facing the subject, with sufficient lighting (no glare or overexposure), and avoid significant motion or vibration.

**How far can the SenseCAP Vision AI camera detect objects and achieve good results?**

- Based on our testing with a human detection model, the camera can achieve a 70% confidence level for results within a range of 1m to 5m.

**Is it possible to replace the camera or have a customized version of the SenseCAP Vision AI sensor?**

- Yes, if you have a large-volume requirement, please contact us at sensecap@seeed.cc.

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
