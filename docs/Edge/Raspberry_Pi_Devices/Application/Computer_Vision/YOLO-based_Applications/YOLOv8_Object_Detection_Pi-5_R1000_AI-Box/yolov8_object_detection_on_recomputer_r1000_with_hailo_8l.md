---
description: This wiki demonstrates object detection using YOLOv8 on reComputer R1000 with Raspberry-pi-AI-kit Acceleration. 
title:  YOLOv8 Object Detection on reComputer R1000 with Hailo-8L
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 06/26/2024
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv8 Object Detection on reComputer R1000 with Hailo-8L

## Introduction

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once version 8) is the popular most YOLO series of real-time object detection models. It builds upon the strengths of its predecessors by introducing several advancements in speed, accuracy, and flexibility. The [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) is used to accelerate inference speed, featuring a 13 TOPS neural network inference accelerator built around the Hailo-8L chip.

This wiki demonstrates object detection using YOLOv8 on [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) with and without Raspberry-pi-AI-kit acceleration. The Raspberry Pi AI Kit enhances the performance of the Raspberry Pi and unlock its potential in artificial intelligence and machine learning applications, like smart retail, smart traffic and more. Although the Raspberry AI Kit is designed for Raspberry Pi 5, we have experimented it on our CM4-powered edge gateway. Excited about turning our edge device into an intelligent IoT gateway!

## Prepare Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Run this project

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Run with Hailo-8L">

### Step 1: Install AI kit

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Step 2: Update system & Set pcie to gen3

#### Updata system

Open terminal on the reComputer R1000, and input command as follows to update your system.

```
sudo apt update
sudo apt full-upgrade
```

#### Set pcie to gen3

Open terminal on the reComputer R1000, and input command as follows to config reComputer R1000.

```
sudo raspi-config
```

Select option "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

Then select option "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

Choose "Yes" to enable PCIe Gen 3 mode

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

Click "Finish" to exit

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### Step 3: Install Hailo Software & Verify Installation

#### Install Hailo Software

Open terminal on the reComputer R1000, and input command as follows to install Hailo software.

```
sudo apt install hailo-all
sudo reboot
```

#### Check Software and Hardware

Open terminal on the reComputer R1000, and input command as follows to check if hailo-all have been installed.

```
hailortcli fw-control identify
```

The right result show as bellow:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Open terminal on the reComputer R1000, and input command as follows to check if hailo-8L have been connected.

```
lspci | grep Hailo
```

The right result show as bellow:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Run YOLOv8

Open terminal on the reComputer R1000, and input command as follows to run YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### Result

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Run without Hailo-8L">

### Run YOLOv8

Open terminal on the reComputer R1000, and input command as follows to run YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```

### Result

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## Result

We compared the inference speed of YOLOv8 for object detection with input 640*640 resolution before and after acceleration using the AI kit. The results show that prior to acceleration, the inference speed was only 0.75 FPS, whereas after acceleration, it reached 29.5 FPS.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Project Outlook

In this project, we benchmark the running speed of YOLOv8 on object detection with and without AI kit. The result shows that the AI kit can greatly improve the performance of the edge device. And in the future, we will benchmark the running speed of YOLOv8 in different scenarios, including semantic segmentation and pose estimation AI kits after acceleration.

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
