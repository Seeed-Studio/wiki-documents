---
description: Train and deploy a custom classification model with YOLOv8
title: Train and deploy a custom classification model with YOLOv8
keywords: 
  - yolov8
  - custom classification model
  - classification model
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 06/11/2024
  author: Bruno
---


# Train and deploy a custom classification model with YOLOv8

## Introduction

On this guide we will explain how to train and deploy a custom classification model with YOLOv8

## Overview

We wil create a virtual environment where we will install YOLOv8, download a classification model from roboflow, train it and deploy it.

### Image Classification

Image classification is the simplest task of computer vision and involves classifying an image into one of predefined classes.
What we get as an output is single class label and a confidence score.

Image classification is useful when we don\'t need to know the location of the object in the image and we just need to know what class the image belongs to.

## Materials Requirements

### Hardware Setup

For this tutorial, we're going to need a Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

### Software Setup

- JetPack 6.0 installed in the reComputer
- a Roboflow account to download the dataset

## Preparing the reComputer

The reComputer J4012 from Seeed Studio is a Jetson Orin NX 16GB.
It's a powerfull machine, but the Tegra Linux comes with a lot of things and, boots to graphical mode. Let's change that.

:::note
I'm going to run the examples and programing remotly using VScode and a SSH terminal with X forwarding enable.
X forwarding is an option with SSH that can run some graphical applications on our side of the connection, instead of the remote computer.
:::

If you're going to connect to your reComputer with monitor, keyboard and mouse, skip the next step.

### Change boot mode

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
It's all good, but we aren't going to need graphics and, in idle mode, it's consuming around 1.5GB of memory.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

We're going to make it boot to the command line instead.

```bash
sudo systemctl set-default multi-user
```

As of now, our reComputer upon boot will boot to the CLI.
If you want you can reboot now or just we can go into CLI with one command.

```bash
sudo systemctl isolate multi-user
```

We've now passed from using 1.5GB of memory to 700MB. Every memory byte counts when using Machine Learning.

### Change power mode

By default, our reComputer should be running on level 2 - 15W .
When training, or even infering a ML model, if we can run at full power, it should be better.

Let's learn how to change it.

In the file /etc/nvpmodel.conf, we have the power modes available.

```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```

We can then use *sudo nvpmodel -m `<power model number>`* to change the power mode. And, according to [this thread post](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224), the settings are kept even after reboots.
To see what power level are we on now,

```bash
sudo nvpmodel -q
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

Let's select the max power mode for the training of our model

```bash
sudo nvpmodel -m 0
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

After a reboot, we can confirm that we're running full power

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## Training the model

For the model training, we're going to use YOLOv8. Bellow are the steps needed to install it with CUDA support.
We're also going to need a [roboflow](https://roboflow.com/) account.

### The model

I'm going to create a model to classify birds.
This is part of a project for a Smart Bird Feeder that I'm going to place at my garden and I want to know what birds are those that are feeding there.

Because this is a classification task, we don't need to know the position of the bird in the photo.

You can use another dataset of your choice, as long as it is a Classification dataset or model

I have procured 12 classes of birds that I know live in my area and are common near me and created a [classification dataset](https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) in Roboflow.

The classes of birds that I'm going to try to identify are:

- Barn Swallow
- Common Firecrest
- Common Nightingale
- Eurasian Chaffinch
- Eurasian Crag Martin
- European Goldfinch
- European Greenfinch
- European Serin
- House Sparrow
- Spanish Sparrow
- Western House Martin
- white Wagtail

Choose your dataset and download it from roboflow.
Once you've selected your dataset, select "Download Dataset". - You need an account for that.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

Next, select *Folder Structure* on the Format and select *show download code*.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

Next, select *Jupyter* if you're going to use a Jupyter Notebook or *Terminal* if your're planing on doing this in the terminal.

I've select Jupyter, to use this in a Jupyter notebook. Copy the code.
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## Creating the environment

We're going to create a virtual environment, install PyTorch and install YOLOv8.
[Per YOLOv8 documentation tip](https://docs.ultralytics.com/quickstart/#install-ultralytics), it's better to install PyTorch first and then ultralytics.

Also, I'm installing jupyterlab packages to use with VSCode. The notebook is attached to this tutorial.

Let's install some dependencies first.

**NOTE:** Because we're going to use YOLOv8, we need to do some steps that normally we wouldn't need.

Just installing Torch following the [NVIDIA deep learning documentation](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) is enough to have Torch with CUDA support.

If we install PyTorch normally with PIP, it would not have CUDA support.

### Dependencies

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```

Create the Python virtual environment

```bash
python -m venv birdClassificationModel
```

If you get an error, is because the package python3-venv is not installed. Let's install it and repeat the above command.

```bash
sudo apt install python3-venv
```

Activate the virtual environment

```bash
source birdClassificationModel/bin/activate
```

You can confirm is active because the name of it is placed before your prompt.

### YOLOv8

Before, and to [follow on the documentation tip](https://docs.ultralytics.com/quickstart/#conda-docker-image), let's first install PyTorch.

I'm using JetPack 6.0 , that comes with NVIDIA Jetson Linux  36.3 and CUDA 12.2.
Let's upgrade PIP first

```bash
pip install -U pip
```

Installing Torch to be able to use it with YOLOv8, we need to [follow the steps in the NVIDIA forums](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048).

This will be done with the virtual environment active, so that it is installed in it.
Download Torch version 2.3 from NVIDIA

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

After this, let's compile torchvision. If we install it from the wheels, it will not have CUDA support.

The branch version is for the Torch version installed. You can see more details in the forum page.

Remember, you need to have the virtual environment active so this will all be installed in it.

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```

After a while, it will be compiled and installed.
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>
After installing, let's see if Cuda is available.
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

From the command line

```bash
python -c "import torch;print (torch.cuda.is_available())"
```

This should return True

#### Install YOLOv8

Now that we have PyTorch installed with CUDA support, when we install YOLOv8, it will use the installed version instead of trying to install a new package (albeit being the same version) without the CUDA support.

```bash
pip install ultralytics
```

Let's install roboflow and jupyterlab

```bash
pip install roboflow jupyterlab
```

Now, let's download the dataset.
If you're using the notebook, just replace the code there.

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

After downloading the model, we now have a set of three directories (test, train, valid), each one with a certain number of images from each class. Each image from each class is in its own directory.
Because this is for image classification, we don't need to label the images.
YOLOv8 will know the classes, not only from the configuration file we'll create later, but also from the directories.
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### Train

Usually a dataset has the images and the labels (or annotations) with the object coordinates. Since this is a classification task, we don't need any of that. Just that the images be in each directory that's the name of the class.

#### Preparing the config file

We still need a config file for YOLOv8 to recognize the classses.  
This file should be placed inside the dataset directory, with .yaml extension. The name is not important.

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```

Insert the following text in the file

```bash
train: train/
valid: valid/
test: test/

# number of classes
nc: 12

# class names

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

For the classification, we're going to use one of [pre-trained models already available from Ultralytics](https://docs.ultralytics.com/tasks/classify/).

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

This models have been trained on ImageNet and are fine tuned for classification.
 We're going to use it and train it on our data.

This is what's know as [transfer learning](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras).

I'm going to use the model [YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt). Probably others will work fine too, but because we don't need real time, its a trade off on speed and accuracy.

Let's then train the model, using YOLOv8 CLI interface

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```

- task=classify : We're going to classify images
- mode=train : We're training the model
- model=yolov8l-cls.pt : We're using a pre-trained model on classification
- data=Bird-Classification-1 : the directory where our dataset is located
- epochs=100 : for how long we're training the model.

Now that's it's running, here's some statistics using jtop (tegra-stats)

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

After a couple of hours, the training is complete.
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

Now, let's see how the model behaves. Let's test it.

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```

This will make yolo to go into the test directories and try to predict each
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

The results are all correct. Let's try with two images that it has never seen.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

I'm going to say that these results are great

## Exporting the model

We can use the model as it is for the inference, we just need to open it and use it.
For faster inference times we can export it to TensorRT, since we're on a NVIDIA Jetson Orin NX, or even ONNX, for example.

Is not that we need faster inference times for this project - I'm not going to use this on real time video - but it's nice we can take advantage of the platform we're on.

Unfortunately, due to the virtual environment I was unable to export it to TensorRT. For some reason, I couldn't import tensorrt in Python, but outside the virtual environment, I had no problem with tensorrt libraries.

### ONNX

We can export the model to ONNX format like this

```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```

We get a best.onnx that we can use to run inference with.

To run inference using ONNX, we need to install the onnxruntime_gpu wheel.

To install onnxruntime-gpu with JetPack 6.0, we need to download it from the [Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime).

We're going to download onnxruntime_gpu 1.18.0

Download the pip wheel for our Python version (Python-3.10)

```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

and then, install it

```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

## Inference

### photo

I've used the following code to run inference with the best.pt model and see the results

```python
# running inference
from ultralytics import YOLO
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
#run inference
results = bird_model("house_sparrow.jpg")[0]
# get class names
class_names = results.names
# get top class with more probability
top1 = results.probs.top1
# print the class name with the highest probability
print (f" The detected bird is: {class_names[top1]}")
```

That the code above does is load the model, run inference in an image and save the results to the results variable.

Because results is [ultralytics.engine.results.Results](http://ultralytics.engine.results.results/) object of type list with one item, which is an instance of Results. The [0] in the results variable to hold the inference result will allow us to get to the results that we want.

```python
results = bird_model("house_sparrow.jpg")[0]
```

Next, we use the results to get the class names. Not that we don't know them, but like this will allow this code to work in other models too.

```python
class_names = results.names
```

One of the results is a top1 variable that holds the TOP 1 class with more probabilities. That TOP1 is given by the probs list.

```python
top1 = results.probs.top1
```

Next, we print the highest probability class that should be the bird species.

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### Camera

Now, let's use a camera to run inference.

Jetson can use a USB camera or a RPI camera. I'm going to connect a USB camera.

The following code will check if can display a camera feed.

```python
#Lets test if we can use a USB camera
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

This is me, on my desktop computer. Just use *ssh -X username@jetson_ip* and the X11 window will be forwarded to your desktop. This works because I'm using Linux too. I think that WSL could also work.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

Now, let's try to run inference on a video feed, displaying the class with the higher probability

Here's the code

```python
# again, save this code in a file a run it from the Jetson

import cv2
from ultralytics import YOLO
import time
#define confidence level
#only equal or above this level we say it's a class of bird
confidence = 0.95
# time when processed last frame
prev_frame = 0
# time processed current frame
cur_time = 0
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2 font
font = cv2.FONT_HERSHEY_SIMPLEX
# open camera
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # to display fps
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # inference current frame
    results = bird_model(img, verbose=False)[0]
    # get class names
    class_names = results.names
    # get top class with more probability
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # we will only show the class name if the confidence is higher than defined level
    # print the class name with the highest probability
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # color is in BGR
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- this video is also on the files -->
Here's a video showing the inference on a video feed
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ Contributor Project

- This project is supported by the Seeed Studio Contributor Project.
- Thanks **Bruno's efforts** and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

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
