---
description: This is an open-source project / platform focused on embedded AI.
title: The AI "Blink"
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sscma
last_update:
  date: 08/26/2024
  author: Matthew
---

## Familiarize the tools that we are using

### SenseCraft AI Platform

Seeed Studio [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/#/model) is a browser-based AI Solution.

It empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with **just a few clicks**.

:::info
The core of it is an open source project and we have share it on the [GitHub](https://github.com/Seeed-Studio/ModelAssistant) and offer the [development method](/ModelAssistant_Introduce_Overview) as well.
:::

#### User Account

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) is an open platform that allows users to browse all public AI models and Home pages without logging in. You need to sign up and sign in only when you need to deploy a model, or share your own model.

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) and [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) ( original SenseCAP Cloud Platform) are both software services provided by seeed studio for users, users only need to sign up for an account on any one of the platforms, and then they can use the same account to sign in on both platforms.

#### Sign up

1. Enter your name and valid email,and then click "get capcha"<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. Get the verification code from your email and enter it on sign up page

:::note
verification code is valid for 10min, please complete the registration within 10 minutes
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. Enter your password and other user information to complete your registration. <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### Sign in

Sign in with your registered email account

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

More about SenseCraft AI platform you can refer to [here](https://wiki.seeedstudio.com/sensecraft_ai_main/).

## AI Models on SenseCraft AI Platform

### Model list

Public AI models show all published AI models；Custom AI models show all your own uploaded AI models.  The model is displayed on the list as follows

- Model inference example image
- Model Name
- Model describe
- This model task type like detection,classification,segmentation,pose, generation
- Supported Device:Device that support deployment of this model
- The username that published this model

**Search model**<br/>
Provides search feature based on various types of key information in the model like model name, model task, surpported device,model publisher

**Favorite model**<br/>
Users can favorite public models

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

More information about AI Models in SenseCraft AI platform you can refer to [here](https://wiki.seeedstudio.com/sensecraft_ai_overview/#pretrained-models).

## Device Workspace

The SenseCraft AI platform provides an AI model zoo for users to share and download AI models, and also has a device workspace where users can view the inference results of their devices in real time and manage their devices to improve the convenience and flexibility of device management.

### XIAO ESP32S3 Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

You can learn more through the [XIAO ESP32S3 Workspace documentation](https://wiki.seeedstudio.com/XIAO_ESP32S3_Workspace/).

### Grove-Vision AI v2 Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

You can learn more through the [Grove-Vision AI v2 Workspace documentation](https://wiki.seeedstudio.com/Grove_Vision_AI_v2_Workspace/).

### Nvidia Jeson Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

You can learn more through the [Nvidia Jeson Workspace documentation](https://wiki.seeedstudio.com/Nvidia_Jeson_Workspace/).

#### SenseCraft AI-Jetson

SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks!

In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

You can learn more through the [SenseCraft AI-Jetson documentation](https://wiki.seeedstudio.com/SenseCraft_AI_Jetson/).

## The AI "Blink": Quickly Using AI

### 1. Get started with Face Recognition

We first go to the [SenseCraft AI Deployment Website](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974) then simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition.

#### Step 1. Install XIAO ESP32S3 Sense expansion board

First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### Step 2. Connecting the XIAO to your PC

Connect the XIAO to your PC using a data cable with data transfer function.

#### Step 3. Go to the SenseCraft AI Platform page and connect the XIAO

Click the button below to go to the SenseCraft AI Platform homepage.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AI Platform</font></span></strong></a>
</div><br />

Once we are on the homepage of SenseCraft AI Platform, we need to first need to connect the XIAO ESPS3 for that, click **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png" style={{width:800, height:'auto'}}/></div>

The browser will then pop up a window. We need to select the correct port for XIAO here. For **Windows**, this port usually starts with **COM**, and in case of **MacOS**, this port usually starts with **/dev/tty**. And it will have the words **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png" style={{width:800, height:'auto'}}/></div>

Clicking the **Connect** button will only result in an automatically identify the board and configuration information is being read.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png" style={{width:800, height:'auto'}}/></div>

Then we can move to **Select Model** button and click it to find another pop up window. Here I selected the face recognition for demo. After selecting it, click the **Send** button and wait few second. You will see directly the results:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif" style={{width:500, height:'auto'}}/></div>

You are getting it! You have successfully deployed your first ML model!

### 2. SenseCraft Triggers - Do a simple feedback action

That is, when we recognize our face, we let XIAO's LED light up. For that, go to **Output** section and Select the "Trigger action" to setup a trigger. .

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png" style={{width:800, height:'auto'}}/></div>

Here, When the face detection have confidencet above 50% and enable a trigger.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png" style={{width:800, height:'auto'}}/></div>

And here the **Trigger Action** is "Light up the LED".  Ater that, click "Send" and you can see, whenver the face detected, you can see the onboard LED is turned on.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png" style={{width:800, height:'auto'}}/></div>

:::info
**Congratulations!** You have successfully deployed the AI automated System!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png" style={{width:800, height:'auto'}}/></div>
:::

<!-- ### 2. Key Word Spotting(KWS) to control XIAO onboard LED. 

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How it's works!

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

**Step 2.1. Download all necessary files**

Download the three binary files below.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin" target="_blank"><b>Download</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.partitions.bin" target="_blank"><b>Download</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bin" target="_blank"><b>Download</b></a></td>
    </tr>
	</table>
</div>

**Step 2. Flash all files to XIAO**

Please click the button below to come to SenseCraft AI Platform Flash Tools page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI Platform</font></span></strong></a>
</div><br />

Once you are on the web page, please click on the **Connect** button from **Deployment** and then select the port number of your XIAO. Again, it should be clearly labeled **USB JTAG**.

* **Step 2.1** Select Deployment 
* **Step 2.2** Select Deploy
* **Step 2.3** Click **Connect**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab01.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

* **Step 2.4** Select the XIAO - it should be clearly labeled **USB JTAG**.
* **Step 2.5** Finaly Click Connect.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab2.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

Once the connection is correct, we can select the file to upload. Then please follow the format below, filling in the flash address and selecting the correct file in turn.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab3.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

<div class="table-center">
	<table align="center">
		<tr>
			<td>1</td>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>2</td>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
	  <td>3</td>
      <td>0x10000</td>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
    </tr>
	</table>
</div>

Then click **Burn**, watch the progress bar for all the files and make sure each file is flashed successfully before you leave.

**Step 3.** Reboot to watch the effect

Once all the files have been uploaded successfully, you can press the reset button to allow the program to start executing. The effect of this sample program is that when the microphone of the XIAO ESP32S3 Sense detects the Hello command that you utter, the built-in LED orange light will illuminate. When the Stop command you say is monitored, the orange light goes off.

 -->
<!-- 
### 3. More Custom Prebuild Models

:::tip
In addition to the face models prepared in advance, we are also supporting more models for XIAO ESP32S3, so stay tuned!
:::

SenseCraft comes with various inbuilt models, you can try few other models and experiment. 

- Face Detection

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- Digital Meter Water

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- yolov5 Meter Water

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### Models Usage

If you want to use a custom model, follow the instructions below

**Step 1. Select the Models listed on "Ready to use AI models"**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png" style={{width:800, height:'auto'}}/></div>

Here I selected the water meter reading demo. After selecting it, click the **Send** button and wait few second.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

Finally, we come to the Preview section, click once on **Stop** in the upper right corner, and then click **Invoke**, if everything runs smoothly, you can see the real-time screen effect. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

<hr></hr> -->

# ToDo

- [ ] Load and Run **Face Recognition Model** with SenseCraft AI Platform.
- [ ] Setup a Trigger and **Control LED** with SenseCraft AI Platform.

<!-- :::tip
If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking **[here](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, unzip it and then double click to open the html file in the root directory.
::: -->
