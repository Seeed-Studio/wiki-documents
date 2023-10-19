---
description: Deploy AI model with Scailable on NVIDIA Jetson Devices
title: Getting Started with Scailable
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Scailable-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Getting Started with Scailable on NVIDIA® Jetson Devices

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## What is Scailable?

[Scailable](https://scailable.net) provides a platform for creating and managing Edge AI solutions at scale. With Scailable, you can simply configure any supported edge device (such as a router, gateway, or IPC) to turn it into a "smart" device. Smart devices can run advanced Artificial Intelligence (AI) and Machine Learning (ML) models on input data, such as a video stream, to turn the input into something meaningful, such as a count of the number of cars in the video.

## Why Scailable on NVIDIA Jetson?

NVIDIA Jetson platform is a great candidate to run Scailable because, as an Edge AI device including NVIDIA SoMs, it is able to give a better inference performance after deploying various AI pipelines over-the-air at scale to these devices. 

This wiki will walkthrough how you can easily install Scailable AI Manager on the NVIDIA Jetson platform and use Scailable Platform to remotely configure and manage your AI solution at scale.

## Prerequisites

- NVIDIA Jetson device running NVIDIA JetPack 5.0+ and connected to the internet

  - We have tested this wiki with [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) running [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511). If you want to explore more NVIDIA Jetson devices offered by Seeed, please visit [this page](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf).
- Host PC with Windows, Linux or Mac and connected to the internet

## Install Scailable AI Manager

**Step 1:** Execute the below command to install Scailable AI Manager on the Jetson Orin device 

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
During the installation, you need to enter "y" to the prompt which asks you to enable JetPack 5 support.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**Step 2:** You can enter the IP address of the Jetson device followed by **:8081** on a web browser or simply enter the URL that you will see on the command line as follows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Register for Scailable account

**Step 1:** Once the Scailable AI Manager shows up, register the device by giving it a name and click the **Register** button

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**Step 3:** Confirm the device name that you created before, click **Register** and click **Return to device**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

If everything went well, you will see all the status check are successful under the **Status** tab as follows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## Run AI Application

Scailable comes pre-loaded with many different AI models for you to try out. However, if you want to use your own AI model, you can import it as well.

**Step 1:** Under the **Model** tab, inside **First Model** section, click **Assign Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**Step 2:** Here you can either add your own model by clicking on **add a model** or use a pre-built model. Here we will choose **Scailable Models**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**Step 3:** As an example, we will choose **People counter within a region** model. Click **Use this model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

Now you will see the model is selected

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**Step 4:** Under **Input** tab, select **Video driver** for the Input driver

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

Here you can select either a video stream, image or example image/ video preloaded with Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**Step 5:** For example, we will choose a pre-loaded video source that comes with Scailable which is **faces**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**Step 6:** Under **output** tab, keep the settings as default

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**Step 7:** Under **Options** tab, keep the settings as default

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**Step 7:** Under **Test** tab, click **Test configuration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

You will see the following output if it is successful

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**Step 8:** Under **Run** tab, click **Run Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

You will see the following output if it is running successfully

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**Step 9:** Click **View live visualization** to preview inference results locally 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**Step 10:** Click **View output in cloud** to download the results in CSV or JSON formats

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## Deploy AI Models at Scale 

Using Scailable, you can deploy a single model to multiple devices at scale with ease

**Step 1:** Visit [this webpage](https://admin.sclbl.net/login), login to your Scailable account and you will see the dashboard as follows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**Step 2:** Once you click **DEVICES**, you will see all your devices connected with your Scailable account

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**Step 3:** Select all the devices by clicking on the check box, enter a name for the device group and click **Save new groups**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**Step 4:** Click **Assign a model to all devices in group**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**Step 5:** Choose a model as we did before and the model will be deployed to all the devices in the group remotely

Upon successfully deploying the model remotely, you will see the following output

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## Learn more 

Scailable offers very detailed and comprehensive documentation. So it is highly recommended to check them [here](https://docs.scailable.net).

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