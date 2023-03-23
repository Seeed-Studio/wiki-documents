---
description: Getting Started with CVEDIA-RT on NVIDIA® Jetson Devices
title: Getting Started with CVEDIA-RT on NVIDIA® Jetson Devices
keywords:
- Software CVEDIA-RT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Getting Started with CVEDIA-RT on NVIDIA® Jetson Devices

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) is a modular, cross-platform AI inference engine that provides the solid foundations for building decision support systems. It's designed from the ground-up with developers and integrators in mind, providing both high and low-level interfaces.

This wiki will walkthrough how you can easily install CVEDIA-RT on the NVIDIA Jetson platform and start building exciting applications.

## Hardware Supported

CVEDIA-RT is supported by the following platforms:

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

However, in this wiki we will only focus on how to deploy CVEDIA-RT on the NVIDIA Jetson platform.

## Prerequisites

- NVIDIA Jetson device running NVIDIA JetPack with all SDK components installed and connected to the internet

  - We have tested this wiki with [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) running [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- Host PC with Windows, Linux or Mac and connected to the internet
 
## Download CVEDIA-RT Installer for NVIDIA Jetson

**Step 1:** Visit [this page](https://rt.cvedia.com/) and click **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**Step 2:** Sign up for a new CVEDIA account or sign in with your Google account

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**Step 3:** Click **Download** under **NVIDIA Jetson**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**Step 4:** Click **Docker(Recommended)** to download tar.gz file which includes the CVEDIA-RT installer 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## Install CVEDIA-RT on NVIDIA Jetson

**Step 1:** Move the file that you downloaded before to a new folder on the Jetson device and extract it by executing

```sh
tar -xzvf <filename.tar.gz>
```

**Step 2:** Inside the extracted folder on the Jetson device, run the installer script

```sh
sudo ./install.sh
```

Respond to the prompts in the installer script according to your needs

## Run CVEDIA-RT on NVIDIA Jetson

Run the application

```sh
./run.sh
```

Now you will see CVEDIA-RT application opened as follows and it already comes pre-loaded with many different applications out-of-the-box such as:

- Crowd estimation
- Drone detection
- Fall detection
- Lane occupancy
- Vehicle type counter
- Package detection and more! 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

If you want to run CVEDIA-RT locally without an internet connection, run as follows

```sh
./run.sh -U
```

However, you need to run a specific application at least once with internet so that the necessary files and models are downloaded

## Explore the pre-loaded applications 

Now we will explore a couple of application which comes out-of-the-box and how you can configure them

**Step 1:**  Click on **intelligent-transportation-systems** and click the run button next to the **lane-occupancy** solution

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

Now it will download the necessary files such as the model file, config file, example video file and start the demo. Here you will see zones drawn according to the lanes and each zone indicating how many vehicles are inside that particular zone. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**Step 2:** Change settings according to your preference inside the application such as turning ON/OFF bounding boxes and labels, changing zones, zone colors and more

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**Step 3:** STOP or PAUSE the demo using the two icons next to **lane-occupancy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**Step 4:** Click the gear icon next to **lane-occupancy**, click **Edit Source** to change the video stream according to your preference

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

Here you have multiple options to choose from

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**Step 5:** Once you select your desired video source, you can click **Save Instance** to run the application with the video source you have selected

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**Note:** Make sure to stop the application and run again for the changes to take into effect

**Step 6:** Similarly, you can navigate to another solution such as **people_walking** under **crowd-estimation** and click the play button to run the solution

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

Here you can configure further settings and change the video stream just like the previous solution mentioned

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## Learn more

CVEDIA-RT offers very detailed and comprehensive documentation. So it is highly recommended to check them [here](http://docs.cvedia.com).

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>