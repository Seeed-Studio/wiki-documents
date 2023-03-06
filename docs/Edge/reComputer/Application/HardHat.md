---
description: Hard Hat Detection
title: Hard Hat Detection
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /HardHat
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Hard Hat Detection Powered by Edge Impulse

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Introduction

In working environments such as industrial or construction sites, a hard hat is required and essential for people protecting their heads from injury due to falling objects, impact with other objects, debris, rain and electric shock. It improves safety but sometimes people underestimate its significance both individually and industrially. Thereby a video-based monitor to detect hard hats can be an optimized solution for this safety problem.

Hence, credit to Louis Moreau and Mihajlo Raljic, we provide this fundamental project that we are going to train an embedded Machine Learning model to detect hard hat and deploy it to the **Jetson Nano**. The **Jetson NX** and the **Jetson AGX** are both supported.

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## Getting started

Edge Impulse enables developers to create the next generation of intelligent device solutions with embedded Machine Learning. Machine Learning at the very edge will enable valuable use of the 99% of sensor data that is discarded today due to cost, bandwidth or power constraints. Here we are going to apply Edge Impulse to train an embedded Machine Learning model.

### Hardware

**Hardware Required**

In this project the required devices are shown as below:

- NVIDIA Jetson Nano or [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) or [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- USB-cable camera
- HDMI-display screen

**Hardware Setup**

Both PC and NVIDIA Jetson Nano should be powered on and connected to the internet. The NVIDIA Jetson Nano is recommended to be set up as a PC.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### Software

- [Edge Impusle](https://www.edgeimpulse.com)
- [Ubuntu System](https://www.linux.org/pages/download/) for NVIDIA Jetson Nano

Here we are going to train an embedded Machine Learning model to detect hard hat. There are several ways to contribute it.

### Preparation

Before we start our project, there are some prepration works that need to do first.

- **Step 1**. Open the [Edge Impulse website](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), and register an account.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **Step 2**. Click "Create new project" and type the name of the project.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

Here we type "Hard hat detection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **Step 3**. We are going to train a embedded ML model to detect Hard Hat, thus at here the option "image" should be selected.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **Step 4**. Set up the configuration as "Classify multiple objects (object detection)".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

Now we can get started with the project.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## Hard Hat Detection ML Model Training

### ML Model Training based on Input Public Datasets

Edge Impulse has provided several ways to collect data. First we are going to upload the pubilc data to the website and try to develop an enbedded Machine Learning.

- **Step 1**. Select the "Data acauistion" page on the left column and collect data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **Step 2**. Chose and download the datasets from the [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

Click "upload data" button on the "Data acquisition" page and upload the downloaded datasets.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

It is optional to upload existing data to the project in the Data Acquisition Format (CBOR, JSON, CSV), as WAV, JPG or PNG files.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **Step 3**. Once uploaded, the collected data are is fullfilled with labeled images. Continue by clicking "Impulse desigh" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **Step 4**. Chose the suitable the processing image blcok and the image learnning block and save the impulse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Step 5**. Click "image" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

We then are able to generate the features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Step 6**. When the "Job completed" is shown up, click the "Object detection" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Click "start training" and let Edge Impulse train a model based on the generated features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Step 7**. Once the "job done" is shown up, click "Model testing" to check how the model works.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### ML Model Training based on Custimized PC Camera Datasets

Edge Impulse has provided several ways to collect data. Here we are going to customized our own images and upload them to the website by capturing the pictures through the PC camera.

- **Step 1**. Stay on the "Dashboard" page and then click "LET'S COLLECT SOME DATA".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

There are multiply options that we can chose to collect data, here we are using our computer to proceed.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **Step 2**. After a while, the page will show that it has been connected to the computer. Click "Collecting images?" and then "Give access to the camera".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **Step 3**. Click "Capture" to take the picture of yourself or the others. The image data need to be labeled as "Hard Hat" and "Head" in the section. To quickly label the picture, it is highly recommended to finish one category data acquisition before moving on to the next, i.e. it is recommended to finish capturing the pictures of "Hard Hat" and then move on to capturing the pictures of "Head".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

The captured pictures will be stored in the "Data acquistion" automatically. For better performance to the training model, it is highly recommended to collect as much pictures as possible and collect the same amount of the data in differnt catagories.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **Step 4**. Click "Labeling queue" to label the data by circling the head with a saquare on the picture.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

Use your mouse to drag a box around an object to add a label. Then click Save labels to advance to the next item.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

Set the labels as "Head" and "Hard Hat" and fill the dialog. Please make sure the saquare frames the area of people's head.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **Step 5**. When the data have been labeled, click "Save labels" move to the "Impulse design"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **Step 6**. Chose the suitable the processing image blcok and the image learnning block and save the impulse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Step 7**. Click "image" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

We then are able to generate the features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Step 8**. When the "Job completed" is shown up, click the "Object detection" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Click "start training" and let Edge Impulse train a model based on the generated features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Step 9**. Once the "job done" is shown up, click "Model testing" to check how the model works.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### ML Model Training based on Custimized NAVDIA Jetson Camera Datasets

Edge Impulse has provided several ways to collect data. Here we are going to customized our own images and upload them to the website by capturing the pictures through the camera connected with the Nivdia Jetson Nano.

- **Step 1**. According to the hardware, set up [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) or [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) for the connection of external monitor and keyboard. Connect with Jetson Nano a screen display.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Step 2**. Ensure your Jetson Nano is connected to the internet and set up the device in Edge Impulse.

You can check your network with following commands:

```cpp
ping -c 3 www.google.com
```

If the network is working fine, the result should be like:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

The setup starts to be runned with the command below:

```cpp
edge-impulse-linux
```

Then the website will request the Edge Impulse account.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

The contents shown like belowing means the connnection is complete. All the projects we save at the Edge Impulse are selectable.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

We are capturing the photos, so here we need to select our USB-Camera to apply in the website.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Name the device we wanted to connect to the website

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

It is clearly seen that Device Jetson Nano is now connected to the project.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Step 3**. Move back to the Edge Impulse page and select the "Devices" column. The connected Jetson Nano is shown as below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **Step 4**. Select the device we connect to the Edge Impulse and move to the "Data acquisation" page. Click "Capture" to take the picture of yourself or the others. The image data need to be labeled as "Hard Hat" and "Head" in the section. To quickly label the picture, it is highly recommended to finish one category data acquisition before moving on to the next, i.e. it is recommended to finish capturing the pictures of "Hard Hat" and then move on to capturing the pictures of "Head".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

The captured pictures will be stored in the "Data acquistion" automatically. For better performance to the training model, it is highly recommended to collect as much pictures as possible and collect the same amount of the data in differnt catagories.

- **Step 5**. When the data have been done collecting, move to the "Impulse design"

- **Step 6**. Chose the suitable the processing image blcok and the image learnning block and save the impulse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Step 7**. Click "image" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

We then are able to generate the features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Step 8**. When the "Job completed" is shown up, click the "Object detection" on the left of the page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Click "start training" and let Edge Impulse train a model based on the generated features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Step 9**. Once the "job done" is shown up, click "Model testing" to check how the model works.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

It is encouraged to mix the methods we provide above and check the performance of each model to see which one is better.

## Deploy the ML model to the Jetson Nano

Now we are going to deploy the trained ML model into the Jetson Nano and apply the codes to make it ().

### Deploy the ML model through the Edge Impulse Linux CLI

- **Step 1**. According to the hardware, set up [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) or [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) for the connection of external monitor and keyboard. Connect with Jetson Nano a screen display.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Step 2**. Ensure your Jetson Nano is connected to the internet and set up the device in Edge Impulse.

!!!Note If you already connect Jetson Nano with Edge Impulse in the section "ML Model Training based on Custimized NAVDIA Jetson Camera Datasets". This step can be skipped.

You can check your network with following commands:

```cpp
ping -c 3 www.google.com
```

If the network is working fine, the result should be like:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

The setup starts to be runned with the command below:

```cpp
edge-impulse-linux
```

The website will request the Edge Impulse account.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

The contents shown like belowing means the connnection is complete. All the projects we save at the Edge Impulse are selectable.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

We are capturing the photos, so here we need to select our USB-Camera to apply in the website.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Name the device we wanted to connect to the website

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

It is clearly seen that Device Jetson Nano is now connected to the project.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Step 3**. Download the ML model to the Jetson Nano by following code.

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

The successful connection are shown as blow and the model will be activited automatically.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **Step 4**. Copy the address shown up and open it with a browser.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

The detection will be displayed on the browser.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

And the data outcome will be shown as below:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Deploy the ML model through Linux Python SDK

In this project, we are going to apply the model to display the detection of Hard Hat on the screen by showing "No entry" and "Welcome".  The Edge Impulse provides a library that makes ML models running and sensor data collection possible on Linux machines using Python. The SDK is an open source and hosted on [GitHub](https://github.com/edgeimpulse/linux-sdk-python). You can also try the [mirror image](https://github.com/Zachay-NAU/Hard-Hat-Detectation) we already set up.

- **Step 1**. Install a latest version of [Python 3](https://www.python.org/downloads/)(>=3.7) for Linux.

- **Step 2**. Install the Linux Python SDK with following command:

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **Step 3**. Install the [Edge Impulse for Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux) with following command:

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **Step 4**. Download the ML model to the Jetson Nano by the command below:

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

If this is the first time for connection between Jetson Nano and Edge Impulse, the website will require your Edge Impulse account information to log in.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!Note This downloads the file into modelfile.eim, if you want to switch projects, it can be done by adding '--clean'.

- **Step 5**. Run the [hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py) to apply the ML model with the following command. The codes might required an external [file](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py).

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **Step 6**. The result should look familiar to these:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

Or can it be an image, deploy your ML application for the PPE detection pipeline in 5 mins? Stay tuned with us!

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
