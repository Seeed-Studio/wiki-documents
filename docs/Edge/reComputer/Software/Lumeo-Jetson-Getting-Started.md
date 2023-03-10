---
description: Getting Started with Lumeo on NVIDIA® Jetson Devices
title: Getting Started with Lumeo on NVIDIA® Jetson Devices
keywords:
- Software Lumeo 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Getting Started with Lumeo on NVIDIA® Jetson Devices

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) is a no-code video analytics platform that enables you to rapidly design, deploy, and monitor custom video analytics and other vision-AI enabled applications.

This wiki will walkthrough how you can easily install Lumeo on the NVIDIA Jetson platform and set it up as a gateway so that you will be able to execute pipelines and process video from Streams, IP Cameras on the same network, or attached USB cameras.

## Hardware supported

Lumeo is supported by the following platforms:

- NVIDIA Jetson
- x86 server with Nvidia GPU
- GPU instance in AWS, GCP, Azure, etc

However, we will only focus on how to deploy Lumeo on the NVIDIA Jetson platform in this wiki

## Prerequisites

- NVIDIA Jetson device running NVIDIA JetPack with all SDK components installed and connected to the internet

  - We have tested this wiki with [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) running [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- Host PC with Windows, Linux or Mac and connected to the internet

## Create a Lumeo Account

**Step 1:** Visit [this page](https://console.lumeo.com/register), enter email, password, click the checkbox to agree to the terms and click **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**Step 2:** After signing up for a new account, you can sign in to your account with the email and the password created before by visiting [this page](https://console.lumeo.com/login)

**Step 3:** Emter an **organization name** and **workspace name** and click **Start using Lumeo**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

Now you will see the Lumeo console as follows

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## Install Lumeo Gateway on NVIDIA Jetson

**Step 1:** Run the installer script inside the Jetson device

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

Respond to the prompts in the installer script according to your needs. You can keep everything to default here

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

If you see the below output, that means the installer has successfully completed

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>


**Step 2:** Type **Install** next to the prompt **Enter the command:** to install a new container which includes the gateway

```
Enter the command: 
install
```

**Note:** A free Lumeo account only allows one gateway to be deployed. So you first need to delete the default cloud gateway which comes with Lumeo before deploying your own gateway on the Jetson device. Simply enter the pre-loaded cloud gateway and click **Delete** to delete that gateway.

**Step 3:** Enter a name for the container when prompted and login with your Lumeo account credentials when prompted

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**Step 4:** After the container installation is finished, type **list** to list the container that you just installed

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**Step 5:** Type **exit** to quit the running script

Now you have successfully installed Lumeo Gateway on the NVIDIA Jetson. If you go to Lumeo console and navigate to **Gateways**, you will see the newly deployed Jetson-powered gateway.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**Step 3:** Click on the Gateway to view additional information about the gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## Add cameras to the gateway

Now we will add cameras to gateway that we have already setup on the Jetson device

**Step 1:** Connect a USB camera to one of the USB ports on the Jetson device or connect an ONVIF camera to the same network as the Jetson device

**Step 2:** Under the Gateway that we setup before, click **Add Camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**Step 3:** It will try to auto discover all the connected USB cameras and the ONVIF cameras on the same network. Click on **Link** next to a camera to add the camera to the gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

If none of the connected cameras are detected, click Discover to start the auto detect process again. If that also fails, click on **+ Manually add cameras** and confgure all your cameras

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**Step 4:** Enter a **Camera name**, provide camera credentials if it is needed by the camera and finally click **Connect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

Now you will see the camera successfully linked 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**Step 5:** Click on the linked camera to output a preview snapshot as follows

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**Step 6:** If you want to add RTSP or HTTP streams, you can navigate to **Deploy > Streams**, click **Add input stream** and configure the stream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## Build a people detection pipeline

Lumeo offers many different solutions out-of-the-box with pre-configured pipelines and pre-loaded models. We will try to create a simple people detection application using Lumeo.

**Step 1:** Select **Basics - Detect Objects** inside **Design > Solutions** section

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

Now you will see the template created for you in a block-based style which allows you to add more customizations and features to the solution. Here you can add, modify or remove blocks according to your preference

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**Step 2:** This template by default loads a **people detection** model, tracks the objects, enclode the video and stream via WebRTC. We will keep all the configured blocks to default and click **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**Step 3:** Under **Select Gateway**, choose the gateway that you have deployed on the Jetson, select the camera that you have configured before and click **Deploy** to start deploying the application to the Jetson device

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

If the deployment is successful, you will see a green icon named **running**
as follows

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**Step 4:** Click on the **play button** to view the output stream via WebRTC

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## Learn more 

Lumeo offers very detailed and comprehensive documentation. So it is highly recommended to check them [here](https://docs.lumeo.com).

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>