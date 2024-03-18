---
description: Shape Detection with reTerminal and Pi camera with OpenCV
title: Shape Detection with reTerminal and Pi camera with OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Shape_detection
last_update:
  date: 2/5/2023
  author: Kasun Thushara
---

## Introduction 

Shape detection using OpenCV is a computer vision technique that involves identifying and analyzing geometric shapes within images. **OpenCV provides a comprehensive set of tools for this task, including contour detection, edge detection, and polygonal approximation**. The process typically begins with image preprocessing steps such as grayscale conversion, blurring, and thresholding to enhance shape visibility. The contours extracted from the processed image are then analyzed, and the number of vertices in each contour is used to classify shapes such as **circles, triangles, and rectangles**. OpenCV's versatility in shape detection makes it a powerful tool for applications ranging from object recognition in robotics to quality control in manufacturing.


## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware preparation

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

We recommend installing the **Bullesye**  or **Bookworm** version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [**guide**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). 

:::note

We highly recommend checking out our previous tutorial on [**Getting started with OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), as this tutorial serves as a continuation in our series.

:::


**Let's discuss few Technical Terms on Shape detection.**

## Contours 

Contours in computer vision are like outlines or boundaries that help us identify the shape of objects in an image. Think of contours as the edges of things – the lines that define where one object ends and another begins. In simpler terms, if you imagine tracing the outline of an object with a pen, you'd be following its contour. In computer vision, we use algorithms to automatically find and represent these contours, making it easier to understand and analyze the shapes present in an image.Before detecting contours, it's common to preprocess the image to enhance features and make the contour detection more effective.Common preprocessing steps include:

### Grayscale conversion

Grayscale conversion is like turning a colorful picture into a black-and-white version. In a colorful image, each pixel has three color channels (red, green, and blue). Grayscale conversion combines these channels into a single channel, representing the intensity of light. Brightness variations in the image are now expressed using shades of gray instead of colors. It simplifies the image but retains important information for various computer vision tasks.

### Smoothing/Blurring

Apply a smoothing or blurring filter to reduce noise in the image.Gaussian blur is a common technique in image processing where each pixel in the image is averaged with its neighboring pixels, weighted more towards the central pixel. This helps in reducing high-frequency noise and fine details, resulting in a smoother image. The amount of smoothing is controlled by the standard deviation of the **Gaussian** kernel. It's widely used in tasks like edge detection and contour finding.

### Thresholding

Thresholding is a key image processing technique that transforms a grayscale image into a binary one by setting a threshold value. Pixels above the threshold take on one color, typically white, while those below adopt another, usually black. Widely used for object segmentation and background distinction, thresholding simplifies images for analysis. Adaptive thresholding adjusts dynamically based on local pixel variations, improving its effectiveness across diverse image conditions and making it a valuable tool in computer vision applications.

### Edge detection

Edge detection is a pivotal technique in image processing aimed at identifying boundaries within an image. It highlights abrupt intensity changes, representing the edges where one object ends and another begins. Popular algorithms, such as the **Canny edge detector**, use gradient information to pinpoint these transitions, providing a foundational step for tasks like object recognition and shape analysis in computer vision applications. Edge detection is instrumental in accentuating key features, allowing for enhanced understanding and interpretation of visual data.

## Let's Jump to code 

Execute this commands one by one in the terminal. 

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center> 

## Applications

Shape detection has diverse applications across various domains. One notable application now **we are going to demostrate is coin counting**, where shapes are utilized to identify and differentiate coins based on their distinct geometric features. In manufacturing and quality control, shape detection is employed to inspect and classify products based on their shapes, ensuring consistency and adherence to standards. In **robotics, detecting and recognizing shapes aids in object manipulation and navigation**. Medical imaging relies on shape detection for tasks such as tumor identification and organ segmentation. Furthermore, in the field of **autonomous vehicles, shape detection plays a crucial role in identifying road signs and obstacles**, contributing to safe navigation. Overall, shape detection is a versatile tool with applications ranging from industrial automation to healthcare and beyond.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center> 

## Tech support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>