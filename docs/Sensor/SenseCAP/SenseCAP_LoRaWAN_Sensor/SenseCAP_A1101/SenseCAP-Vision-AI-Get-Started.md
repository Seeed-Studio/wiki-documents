---
description: Getting Started with SenseCAP Vision AI
title: Getting Started with SenseCAP Vision AI
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP-Vision-AI-Get-Started
last_update:
  date: 1/31/2023
  author: Kewei Li
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

# Introduction

SenseCAP A1101 - LoRaWAN Vision AI Sensor is a TinyML Edge AI enabled smart image sensor. It supports a variety of AI models such as image recognition, people counting, target detection, meter recoignition etc. It also supports training models with TensorFlow Lite. <br />

# Features
- Ultra-Low Power and Powerful Himax Camara: 400Mhz DSP, Maximum camera frame rate 640*480*VGA 60 FPS, Local inferencing

- Low Power and Long Range Transmission: Down to 2.3uWh sleep mode power consumption, powered by Wio-E5 LoRaWAN Modules, transfers data up to miles

- High Data Security by Edge Computing: Local image inferencing and transfers the final result data to the Cloud, suitable for applications that require limited data transmission and high data privacy.

- Easy to Visualize Data: Few clicks to display and manage data via SenseCAP Mate App and SenseCAP Dashboard, wide compatibility with other third-party tools

- High Industrial Protection Grade: -40 ~ 85℃ operating temperature and IP66 rating, suitable for indoor and outdoor deployment

- Easy for Scalable Deployment: 1min to add and configure the device by scanning the device QR code, low LoRaWAN network cost and maintenance cost ensure business scalability.

# Specification

Please direct you to [specification](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf) for more details.

# Getting Started

1. There are several built-in AI models for A1101, and users can select modelsaccording to their needs. Currently, the following algorithms and models are available:

|**Algorithm**|**AI Model**|
|---|---|
|Object Detection|Human Body Detection;User-defined|
|Object Counting|People Counting;User-defined|
|Image Classification|Person&Panda Recognition;User-defined|

Model selection and configuration is also done in the Setting interface. First select the Algorithm, different algorithms achieve different functions andshowdifferent results in the APP preview.Clicking on the drop-down triangle behindthealgorithm will bring up the selection box. Then select the AI model, click on the model, the selection box pops up, select themodel.

2. If you want to train your own AI model, there are two ways. please refer to:

**1.[One Stop Model Training with Edge Impulse](https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse)** Fsst to follow.

**2.[Train AI Model with Roboflow, YOLOv5, TensorFlow Lite](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101)** Slow to follow.

# Connect to the LoraWAN®
LoRaWAN® (Long Range Wide Area Network) is a wireless communication protocol designed for low-power, long-range communications between IoT (Internet of Things) devices and gateways. It uses unlicensed radio spectrum in the Industrial, Scientific, and Medical (ISM) band, typically at 868 MHz in Europe and 915 MHz in the United States. LoRaWAN® provides a low-cost, energy-efficient solution for connecting IoT devices over long distances. The technology allows for bi-directional communication between devices and gateways, and it supports a range of data rates to accommodate different types of applications. 

## How to Select Gateway and LoraWAN®
LoRaWAN® network coverage is required when using sensors, there are two options.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## How to use the Sensor
In addition to connecting directly to a computer to view real-time detection data, you can also transmit these data through LoraWAN® and finally upload them to the [SenseCAP cloud platform](https://sensecap.seeed.cc/) or a third-party cloud platform. On the SenseCAP cloud platform, you can view the data in a cycle and display it graphically through your mobile phone or computer. The SenseCAP cloud platform and SenseCAP Mate App use the same account system.

Since our focus here is on describing the model training process, we won't go into the details of the cloud platform data display. But if you're interested, you can always visit the SenseCAP cloud platform to try adding devices and viewing data. It's a great way to get a better understanding of the platform's capabilities!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

# Tech Support

Please do not hesitate to submit the issue into our [Discord](https://discord.com/channels/862602258452578314/956370118575804467) and our email: order@seeed.cc.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>


