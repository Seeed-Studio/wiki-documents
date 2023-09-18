---
description: Introduction to SenseCraft Model Assistant.
title: SenseCraft Model Assistant
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sscma
last_update:
  date: 08/09/2023
  author: Salman
---

## SenseCraft Model Assistant

Seeed Studio [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices. With SenseCraft Model Assistant we can easily get-started with tinyML project and work on it. Let's get started. 

### 1. Get started with Face Recognition.

We flash the SenseCraft Model Assistant program in advance for all XIAO ESP32S3 Sense participating in the Workshop, and pre-set the model for face recognition. Simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition.

#### Step 1. Install XIAO ESP32S3 Sense expansion board

First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>


#### Step 2. Connecting the XIAO to your PC

Connect the XIAO to your PC using a data cable with data transfer function.

#### Step 3. Go to the SenseCraft Model Assistant page and connect the XIAO

Click the button below to go to the SenseCraft Model Assistant homepage.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process">
	<strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft Model Assistant</font></span></strong></a>
</div><br />

Once we are on the homepage of SenseCraft Model Assistant, we need to first need to connect the XIAO ESPS3 for that, click **Connect** button.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Home_Connect.png" style={{width:800, height:'auto'}}/></div>

The browser will then pop up a window. We need to select the correct port for XIAO here. For **Windows**, this port usually starts with **COM**, and in case of **MacOS**, this port usually starts with **/dev/tty**. And it will have the words **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/6.png" style={{width:700, height:'auto'}}/></div>

Clicking the **Connect** button will only result in an automatically identify the board and configuration information is being read.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model.png" style={{width:800, height:'auto'}}/></div>

Once the **Connect** button is back to Red as **Disconnect**, we can select the model from the "Ready to use AI Models" list. Here I selected the face recognition for demo. After selecting it, click the **Send** button and wait few second.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

Finally, we come to the Preview section, click once on **Stop** in the upper right corner, and then click **Invoke**, if everything runs smoothly, you can see the real-time screen effect. 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Face_demo.png" style={{width:800, height:'auto'}}/></div>


### 2. SenseCraft Triggers - Control things with tinyML 

We can also make conditions statements using the SenseCraft tool.  for example: we can control XIAO-ESP32S3 onboard LED when a face is detected. For that, go to **Output** section and Select the "Trigger action" to setup a trigger. . 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action1.png" style={{width:800, height:'auto'}}/></div>

Here, When the face detection have confidencet above 50% and enable a trigger.  

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action2.png" style={{width:800, height:'auto'}}/></div>

And here the **Trigger Action** is "Light up the LED".  Ater that, click "Send" and you can see, whenver the face detected, you can see the onboard LED is turned on. 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action3.png" style={{width:800, height:'auto'}}/></div>



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
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin"target="_blank"><b>Download</b></a></td>
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

Please click the button below to come to SenseCraft Model Assistant Flash Tools page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft Model Assistant</font></span></strong></a>
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

<hr></hr>

# ToDo
- [ ] Load and Run **Face Recognition Model** with SenseCraft Model Assistant. 
- [ ] Setup a Trigger and **Control LED** with SenseCraft Model Assistant. 

:::tip
If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking **[here](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, unzip it and then double click to open the html file in the root directory.
:::

