---
description:  Train your own data set with Yolov5 and Deploy on reTerminal DM
title:  Train your own data set with Yolov5 and Deploy on reTerminal DM
keywords:
  - Edge
  - reTerminal DM Application
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Yolo5
last_update:
  date: 9/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>


## Introduction

Object detection, a fundamental aspect of computer vision, involves identifying objects within images and finds application in numerous fields such as surveillance, healthcare, and self-driving cars. Single-Stage Object Detectors are a specific category of models that simplify this task by directly predicting object categories and bounding box coordinates without requiring an initial region proposal stage. This streamlined approach is especially valuable in real-time applications. Notably, the YOLO (You Only Look Once) family of models exemplifies this efficiency, offering fast object detection with compromising accuracy.

## Getting Started
Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware preparation

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software preparation

We recommend installing the latest version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [guide](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/).

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) is a comprehensive platform for computer vision that offers a wide range of tools and services to streamline the process of developing and deploying computer vision models. One of its standout features is its robust support for custom datasets with annotations. Users can easily upload their own datasets, complete with annotations, to train and fine-tune computer vision models. So create a account with this. 

### Ultralytics
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) is a cutting-edge platform and research organization that specializes in computer vision and deep learning. They are renowned for their contributions to the field, particularly in the development of the YOLO (You Only Look Once) family of object detection models, such as YOLOv5. Ultralytics offers a range of state-of-the-art tools and open-source software for object detection, image classification, and more, making advanced computer vision accessible to researchers and developers. Their dedication to innovation and performance-driven solutions has garnered significant attention and acclaim in the computer vision community, making Ultralytics a go-to resource for those seeking to push the boundaries of what's possible in the realm of deep learning and visual recognition.

## Choose a data set from Roboflow

- **Step 1** Please access the provided website and navigate to the dataset of your choice using the search function. [Roboflow](https://universe.roboflow.com/) 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **Step 2** After you select a data set click **Download this Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **Step 3** Select YOLOv5 download format.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **Step 4** Select **show download code** and Press continue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **Step 5** In the "Jupyter" section, you'll find a code snippet. Please copy this snippet to your clipboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## Train your custom dataset 

- **Step 1** Please access the provided github link and click on **Open in Colab** [Github Link](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Before deploying a model on resource-constrained devices like the Raspberry Pi, it's often essential to conduct model conversion and quantization to ensure optimal performance. This process involves several steps: converting a PyTorch model (in .pt format) to a TensorFlow Lite (TFLite) model with quantization, specifically to the uint8 data type. You can train your custom dataset and convert it into a TFLite model using this Colab notebook. We have outlined a step-by-step process for training within the Colab environment. Please follow these instructions, obtain the **data.yaml** file and **best-int8.tflite** file, and return to this wiki for further guidance.

:::

## Prepare your reTerminal DM

- **Step 1**  On Terminal execute these commands one by one.

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```
- **Step 2** Paste Data.yaml file and best-int8.tflite file inside yolov5 folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## Inference with detect.py

- **Step 1** Open reterminal and navigate to yolov5 folder

```sh
cd yolov5
```
- **Step 2** Inference with detect.py

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```
:::note
You can explore the official Ultralytics GitHub site at [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) to learn how to use the `detect.py` script and discover the various sources you can utilize for feeding images or video streams into the YOLOv5 model.
:::

## Run on Edge TPU

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>


The deployment of the YOLOv5n model on an Edge TPU represents a dynamic synergy between state-of-the-art object detection and high-performance edge computing. This amalgamation empowers applications in edge AI, such as real-time object recognition in resource-constrained environments, making it invaluable for tasks like security surveillance, retail analytics, and autonomous systems. YOLOv5n's efficient design harmonizes seamlessly with Edge TPU's hardware acceleration, delivering rapid and accurate object detection at the edge of the network, where low latency and real-time processing are paramount. 

- Inference with detect.py

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## Resources

- **[Web Page]** [Yolov5 Official Documentation](https://github.com/ultralytics/yolov5)

- **[Web Page]** [Roboflow](https://universe.roboflow.com/)

# Tech support


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
