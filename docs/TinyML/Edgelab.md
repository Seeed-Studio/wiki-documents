---
description: Introduction to EdgeLab.
title: EdgeLab
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /edgelab
last_update:
  date: 08/09/2023
  author: MengDu
---

## 1. EdgeLab

### 1.1 Power-on Ready Embedded AI

We flash the EdgeLab program in advance for all XIAO ESP32S3 Sense participating in the Workshop, and pre-set the model for face recognition. Simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition.

#### Step 1. Install XIAO ESP32S3 Sense expansion board

First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>


#### Step 2. Connecting the XIAO to your PC

Connect the XIAO to your PC using a data cable with data transfer function.

#### Step 3. Go to the EdgeLab page and connect the XIAO

Click the button below to go to the EdgeLab homepage.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/edgelab-web-app/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to EdgeLab</font></span></strong></a>
</div><br />

Once we are on the homepage of EdgeLab, we first need to select the interface type for the connection as **Serial** and then click the **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/5.png" style={{width:700, height:'auto'}}/></div>

The browser will then pop up a window. We need to select the correct port for XIAO here. For **Windows**, this port usually starts with **COM**, and in case of **MacOS**, this port usually starts with **/dev/tty**. And it will have the words **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/6.png" style={{width:700, height:'auto'}}/></div>

Clicking the **Connect** button will only result in an automatic refresh of the **Refresh** in the Configuration section below, where the XIAO firmware is being loaded and configuration information is being read.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/7.png" style={{width:500, height:'auto'}}/></div>

Once the **Refresh** button is back to blue, we can select the model and display the effect. The current model name for face recognition is **User-Defined 1**. After selecting it, click the **Save** button in the lower left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/8.png" style={{width:500, height:'auto'}}/></div>

Finally, we come to the Monitor section, click once on **Stop** in the upper right corner, and then click **Invoke**, if everything runs smoothly, you can see the real-time screen effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/9.png" style={{width:1000, height:'auto'}}/></div> 


### 1.2 Select & Replace Custom Models

:::tip
In addition to the face models prepared in advance, we are also supporting more models for XIAO ESP32S3, so stay tuned!
:::

#### Download Models

- [yolov5 Face Detection](https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- [yolov5 Digital Meter Water](https://files.seeedstudio.com/wiki/tinyml-topic/Digital_Meter_Seg7.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- [yolov5 Meter Water](https://files.seeedstudio.com/wiki/tinyml-topic/Meter_Water.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### Models Usage

If you want to use a custom model, follow the instructions below.

**Step 1. Download all necessary files**

Please download all the files below in order and select the model you want to use from above and download it. In general, to run a model you need to have at least **four** of the above files ready.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/bootloader.bin" target="_blank"><b>Download</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/partition-table.bin" target="_blank"><b>Download</b></a></td>
		</tr>
    <tr>
      <td>edgelab.bin</td>
      <td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/edgelab.bin" target="_blank"><b>Download</b></a></td>
    </tr>
	</table>
</div>

**Step 2. Flash all files to XIAO**

Please click the button below to come to ESPTool's Flash Tools page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://espressif.github.io/esptool-js/">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to ESP Tool</font></span></strong></a>
</div><br />

Once you are on the web page, please click on the **Connect** button and then select the port number of your XIAO. Again, it should be clearly labeled **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/12.png" style={{width:1000, height:'auto'}}/></div> 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/13.png" style={{width:1000, height:'auto'}}/></div> 

Once the connection is correct, we can select the file to upload. Then please follow the format below, filling in the flash address and selecting the correct file in turn.

<div class="table-center">
	<table align="center">
		<tr>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
      <td>0x10000</td>
      <td>edgelab.bin</td>
    </tr>
    <tr>
      <td>0x400000</td>
      <td>models_file_name.tflite</td>
    </tr>
	</table>
</div>

Take the **yolov5 Digital Meter Water** model as an example, the effect after complete filling is shown in the picture.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/11.png" style={{width:1000, height:'auto'}}/></div> 

Then click Program, watch the progress bar for all the files and make sure each file is flashed successfully before you leave.

:::tip
Since ESPTool doesn't have a reset program by default, after uploading all the files, we still need to manually re-plug the XIAO's cable to let it restart.
:::

Let's go back to EdgeLab, connect the XIAO according to the previous configuration method, start **Invoke**, and you'll see the water meter reading!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/edgelab-web-app/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to EdgeLab</font></span></strong></a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

:::tip
If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking **[here](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, unzip it and then double click to open the html file in the root directory.
:::