---
description: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行形状检测
title: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行形状检测
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

使用 OpenCV 进行形状检测是一种计算机视觉技术，涉及识别和分析图像中的几何形状。**OpenCV 提供了一套全面的工具来完成这一任务，包括轮廓检测、边缘检测和多边形逼近**。该过程通常从图像预处理步骤开始，例如灰度转换、模糊处理和阈值处理，以增强形状的可见性。从处理后的图像中提取的轮廓随后会被分析，并通过计算每个轮廓的顶点数量来分类形状，例如**圆形、三角形和矩形**。OpenCV 在形状检测方面的多功能性使其成为从机器人中的目标识别到制造业中的质量控制等应用的强大工具。

## 开始

在开始这个项目之前，您需要按照以下说明提前准备好硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们推荐从官方网站安装 Raspberry Pi 64 位操作系统的 **Bullseye** 或 **Bookworm** 版本。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中的步骤操作。

:::note

我们强烈建议您查看我们之前的教程 [**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)，因为本教程是我们系列教程的延续。

:::

**接下来，让我们讨论一些关于形状检测的技术术语。**

## 轮廓

在计算机视觉中，轮廓就像是物体的轮廓或边界，帮助我们识别图像中物体的形状。可以将轮廓看作是事物的边缘——定义一个物体结束而另一个物体开始的线条。简单来说，如果你用笔描绘一个物体的轮廓，你就是在跟随它的轮廓。在计算机视觉中，我们使用算法自动找到并表示这些轮廓，从而更容易理解和分析图像中的形状。在检测轮廓之前，通常会对图像进行预处理，以增强特征并提高轮廓检测的效果。常见的预处理步骤包括：

### 灰度转换

灰度转换就像将一张彩色图片变成黑白版本。在彩色图像中，每个像素都有三个颜色通道（红、绿、蓝）。灰度转换将这些通道合并为一个单一通道，表示光的强度。图像中的亮度变化现在用灰度的阴影来表达，而不是颜色。这种转换简化了图像，但保留了许多计算机视觉任务所需的重要信息。

### 平滑/模糊处理

应用平滑或模糊滤波器以减少图像中的噪声。高斯模糊是一种常见的图像处理技术，其中图像中的每个像素与其邻近像素进行加权平均，权重更倾向于中心像素。这有助于减少高频噪声和细节，从而得到更平滑的图像。平滑的程度由**高斯**核的标准差控制。它广泛用于边缘检测和轮廓查找等任务。

### 阈值处理

阈值处理是一种关键的图像处理技术，它通过设置一个阈值值将灰度图像转换为二值图像。高于阈值的像素通常变为白色，而低于阈值的像素通常变为黑色。阈值处理广泛用于对象分割和背景区分，简化了图像的分析。自适应阈值根据局部像素变化动态调整阈值值，从而在各种图像条件下提高了其有效性，使其成为计算机视觉应用中的重要工具。

### 边缘检测

边缘检测是图像处理中一项关键技术，旨在识别图像中的边界。它突出显示了图像中强度的突然变化，表示一个物体结束而另一个物体开始的边缘。像**Canny边缘检测器**这样的流行算法利用梯度信息来精确定位这些过渡点，为对象识别和形状分析等任务提供了基础步骤。边缘检测在突出关键特征方面起着重要作用，从而增强了对视觉数据的理解和解释。

## 让我们开始编写代码

在终端中逐条执行以下命令：

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center> 

## 应用

形状检测在多个领域具有广泛的应用。一个显著的应用是**我们将要展示的硬币计数**，通过利用形状来识别和区分硬币的独特几何特征。在制造和质量控制中，形状检测用于根据产品的形状进行检查和分类，以确保一致性和符合标准。在**机器人领域，检测和识别形状有助于物体操作和导航**。医学影像依赖形状检测完成诸如肿瘤识别和器官分割等任务。此外，在**自动驾驶领域，形状检测在识别道路标志和障碍物方面发挥了关键作用**，从而促进安全导航。总的来说，形状检测是一种多功能工具，其应用范围从工业自动化到医疗保健及其他领域。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center> 

## 技术支持

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>