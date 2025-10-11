---
description: 本wiki演示了在Raspberry Pi5和Raspberry Pi Compute Module 4上使用yolov8s进行姿态估计和目标检测的基准测试。
title: 在RPi5和CM4上使用rpi ai kit运行yolov8s的基准测试
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit
last_update:
  date: 07/17/2024
  author: Jiahao

no_comments: false # for Disqus
---

# 在RPi5和CM4上使用rpi ai kit运行yolov8s的基准测试

## 介绍

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once version 8）是最受欢迎的YOLO系列实时姿态估计和目标检测模型。它在前代产品优势的基础上，在速度、精度和灵活性方面引入了多项改进。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)用于加速推理速度，配备了基于Hailo-8L芯片构建的13 TOPS神经网络推理加速器。

本wiki展示了在Raspberry Pi 5和Raspberry Pi Compute Module 4上进行YOLOv8s姿态估计和目标检测的基准测试。所有测试都使用相同的模型（YOLOv8s），量化为int8，输入尺寸为640x640分辨率，批处理大小设置为1，输入来自240 FPS的同一视频。

## 准备硬件

### 对于CM4

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 适用于 Raspberry Pi 5

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi5 8GB</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 运行此项目

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Pi5 Benchmark">

### 在 RPi5 上安装 AI kit

请参考[此文档](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

### 安装 Hailo 软件并验证安装

#### 更新系统

```
sudo apt update
sudo apt full-upgrade
```
#### 将 pcie 设置为 gen2/gen3（gen3 比 gen2 更快）

Add following text to ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
如果您想使用 gen2，请注释掉 dtparam=pciex1_gen=3
:::

#### 安装 hailo-all 并重启

在 Raspberry Pi5 上打开终端，输入以下命令来安装 Hailo 软件。

```
sudo apt install hailo-all
sudo reboot
```

#### 检查软件和硬件

在 Raspberry Pi5 上打开终端，输入以下命令检查是否已安装 hailo-all。

```
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 Raspberry Pi5 上打开终端，输入以下命令检查 hailo-8L 是否已连接。

```
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### 运行项目

<Tabs>
<TabItem value="Method 1" label="运行姿态估计">

#### 安装项目

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Run the project

```
# run pose estimation with AI kit

bash run.sh pose-estimation-hailo

# run pose estimation without AI kit

bash run.sh pose-estimation
```

#### 结果

<iframe width="800" height="400" src="https://www.youtube.com/embed/Mo7AL7AjxwA" title="Raspberry Pi AI: YOLOv8 Pose Estimation - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</TabItem>

<TabItem value="方法 2" label="运行目标检测">

#### 安装项目

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Run the project

```
# run object detection with AI kit

bash run.sh object-detection-hailo

# run object detection without AI kit

bash run.sh object-detection
```

#### 结果

<iframe width="800" height="400" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</TabItem>
</Tabs>

</TabItem>

<TabItem value="Method 2" label="CM4 基准测试">

对于目标检测，请参考以下wiki：
[yolov8_object_detection_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)

对于姿态估计，请参考以下wiki：
[yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/cn/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/)
</TabItem>

</Tabs>

## 结果

<Tabs>

<TabItem value="Method 1" label="batchsize=8">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_batch8.png" alt="pir" width={1000} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/poes_estimation_batch8.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

<TabItem value="Method 2" label="batchsize=1">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" alt="pir" width={1000} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pose-estimation-benchmark.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

</Tabs>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
