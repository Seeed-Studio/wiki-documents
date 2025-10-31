---
description: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行形状检测
title: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行形状检测
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Shape_detection
last_update:
  date: 2/5/2023
  author: Kasun Thushara
---

## 介绍

使用 OpenCV 进行形状检测是一种计算机视觉技术，涉及识别和分析图像中的几何形状。**OpenCV 为此任务提供了一套全面的工具，包括轮廓检测、边缘检测和多边形近似**。该过程通常从图像预处理步骤开始，如灰度转换、模糊处理和阈值处理，以增强形状的可见性。然后分析从处理后的图像中提取的轮廓，使用每个轮廓中的顶点数量来分类形状，如**圆形、三角形和矩形**。OpenCV 在形状检测方面的多功能性使其成为从机器人技术中的物体识别到制造业质量控制等应用的强大工具。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### 软件准备

我们建议从官方网站安装 **Bullesye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中概述的步骤进行操作。

:::note

我们强烈建议查看我们之前关于[**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)的教程，因为本教程是我们系列教程的延续。

:::

**让我们讨论一些关于形状检测的技术术语。**

## 轮廓

计算机视觉中的轮廓就像轮廓线或边界，帮助我们识别图像中物体的形状。可以将轮廓想象成物体的边缘——定义一个物体结束、另一个物体开始的线条。简单来说，如果您想象用笔描绘物体的轮廓，您就是在跟随它的轮廓。在计算机视觉中，我们使用算法自动查找和表示这些轮廓，使理解和分析图像中存在的形状变得更容易。在检测轮廓之前，通常会对图像进行预处理以增强特征并使轮廓检测更加有效。常见的预处理步骤包括：

### 灰度转换

灰度转换就像将彩色图片转换为黑白版本。在彩色图像中，每个像素都有三个颜色通道（红色、绿色和蓝色）。灰度转换将这些通道合并为单个通道，表示光的强度。图像中的亮度变化现在使用灰度阴影而不是颜色来表达。它简化了图像，但保留了各种计算机视觉任务的重要信息。

### 平滑/模糊

应用平滑或模糊滤镜来减少图像中的噪声。高斯模糊是图像处理中的一种常见技术，图像中的每个像素都与其相邻像素进行平均，更多地偏向中心像素。这有助于减少高频噪声和精细细节，产生更平滑的图像。平滑程度由**高斯**核的标准差控制。它广泛用于边缘检测和轮廓查找等任务。

### 阈值处理

阈值处理是一种关键的图像处理技术，通过设置阈值将灰度图像转换为二值图像。高于阈值的像素采用一种颜色，通常是白色，而低于阈值的像素采用另一种颜色，通常是黑色。阈值处理广泛用于物体分割和背景区分，简化图像以便分析。自适应阈值处理根据局部像素变化动态调整，提高其在不同图像条件下的有效性，使其成为计算机视觉应用中的宝贵工具。

### 边缘检测

边缘检测是图像处理中的一项关键技术，旨在识别图像内的边界。它突出显示强度的突然变化，表示一个物体结束、另一个物体开始的边缘。流行的算法，如 **Canny 边缘检测器**，使用梯度信息来精确定位这些转换，为计算机视觉应用中的物体识别和形状分析等任务提供基础步骤。边缘检测在突出关键特征方面发挥重要作用，允许增强对视觉数据的理解和解释。

## 让我们开始编码

在终端中逐一执行这些命令。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center>

## 应用

形状检测在各个领域都有广泛的应用。一个值得注意的应用，也是**我们现在要演示的是硬币计数**，其中利用形状来识别和区分基于其独特几何特征的硬币。在制造和质量控制中，形状检测被用于根据产品的形状检查和分类产品，确保一致性和符合标准。在**机器人技术中，检测和识别形状有助于物体操作和导航**。医学成像依赖形状检测来完成诸如肿瘤识别和器官分割等任务。此外，在**自动驾驶汽车领域，形状检测在识别道路标志和障碍物方面发挥着关键作用**，有助于安全导航。总的来说，形状检测是一个多功能工具，其应用范围从工业自动化到医疗保健等各个领域。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center>

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
