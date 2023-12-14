---
description: Object Detection with reTerminal and Pi camera with OpenCV
title: Object Detection with reTerminal and Pi camera 
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Detection 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Object_detection
last_update:
  date: 12/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## Introduction 

Object detection on edge computers has become a pivotal field in computer vision, enabling devices to autonomously perceive and respond to their surroundings. **EfficientDet**, a state-of-the-art object detection model, takes center stage in this domain. Designed to be **resource-efficient, it strikes a balance between accuracy and computational demands, making it particularly well-suited for deployment on edge devices with limited processing power**. Object detection on edge computers, exemplified by EfficientDet, finds applications in scenarios ranging from smart surveillance cameras and autonomous vehicles to Internet of Things (IoT) devices. Its ability to identify and locate multiple objects in real-time makes it a key enabler for enhancing the autonomy and intelligence of edge computing systems.



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

We recommend installing the **Bullesye** or **Bookworm** version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [**guide**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). 

:::note

We highly recommend checking out our previous tutorial on [**Getting started with OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), as this tutorial serves as a continuation in our series. This guide is specifically for **Bulleseye OS** and **Bookworm OS**. Please take note of the installation dependencies, as there are two distinct methods outlined here.

:::

## TinyML 

TinyML revolutionizes machine learning by enabling lightweight models to run on edge devices with minimal resources. In the context of object detection, TensorFlow Lite, a key framework in TinyML, optimizes models for efficiency, allowing them to be deployed on devices like microcontrollers and embedded systems. This integration facilitates real-time, on-device processing for tasks such as object recognition, making TinyML with [**TensorFlow Lite**](https://www.tensorflow.org/lite) ideal for applications in smart sensors, wearables, and IoT devices without the need for constant cloud connectivity.

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) is a highly efficient and accurate object detection model that stands out for its performance on edge devices. Developed by Google, EfficientDet optimizes the balance between model accuracy and computational efficiency, making it well-suited for deployment on resource-constrained environments such as edge devices and mobile platforms. It leverages a compound scaling method to efficiently scale up model parameters and achieve better accuracy without compromising speed. EfficientDet's architecture includes a feature network for capturing image features effectively and a compound scaling method for balancing model accuracy and computational efficiency. Its success lies in achieving impressive performance on various object detection benchmarks while maintaining a lightweight structure, making it a go-to choice for applications requiring real-time object detection on edge devices.

## Let's run the code in Bullseye OS.

Make sure that you are in correct folder. If not 

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```
Make sure to install the dependencies and the EfficientDet model. If you've already completed this step in our [**first tutorial**](https://wiki.seeedstudio.com/Getting-start-opencv/), there's no need to worry.

 ```sh
sh setup.sh
 ```
Run the code 
 ```sh
python3 detect_mod.py
 ```
## Let's run the code in BookWorm OS.
- **Step 1** For that you need to create a Virtual environmnet. 

:::note

In earlier OS versions, Python libraries could be directly installed system-wide using pip, the Python package installer. However, in Bookworm and subsequent releases, a shift has occurred. To mitigate potential issues during installation, it is now necessary to install packages via pip into a Python virtual environment using venv. 

:::

Execute these commands one by one, and you will end up with a virtual environment.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```
 - **Step 2** Next, clone this Git repo onto your Raspberry Pi virtual environmnet like this

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Step 3** Next, utilize our script to effortlessly install the required Python packages and download the EfficientDet-Lite model. Navigate to this folder.

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```
- **Step 3** The script install the required dependencies and download the TFLite models For this tutorial series.

```sh
sh setup.sh
```

Run the code 
 ```sh
python3 detect_picam.py
 ```

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
