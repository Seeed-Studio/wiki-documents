---
description: Introduces how to connect Grove Vision AI V2 to the SenseCAP Mate APP.
title: Connect Grove Vision AI V2 to the SenseCAP Mate APP
keywords:
- sensecap mate
- grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /connect_vision_ai_v2_to_sensecap_mate
last_update:
  date: 01/19/2024
  author: Citric
---

# Connect Grove Vision AI V2 to the SenseCAP Mate APP

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** is a powerful APP for data visualization and remote device management.

- Save time: provides a scan-and-play experience to enable users to complete the whole configuration in 4 steps
- Works for people with less or no technical background to get started with sensor data easily
- Acquire and view data on clean user interfaces
- Set time intervals: improve the battery efficiency
- Set threshold values: focus on the data you need to take action for
- Send alarms if data is out of the safe range

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/">
            <strong><span><font color={'FFFFFF'} size={"4"}>Learn More 🖱️</font></span></strong>
    </a>
</div>

This tutorial will guide you on how to access Grove Vision AI V2 and XIAO ESP32C3 to SenseCAP Mate APP.

## Getting Started

Before the tutorial content of this article begins, you may need to have the following hardware ready.

### Materials Required

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## Register for a SenseCAP account and software preparation

### Step 1. Register for a SenseCAP account

If you are using SenseCAP for the first time, then you may need to register an account on the **[SenseCAP website](https://sensecap.seeed.cc)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>

After registering, please log in to the SenseCAP website.

### Step 2. Download the SenseCAP Mate APP to your mobile phone.

If you want to check your device's messages anytime, anywhere, you may want to consider installing the SenseCAP Mate APP, a mobile device that uses SenseCAP. By clicking the button below, you can choose to install the SenseCAP Mate APP in a way that suits you.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download APP 🖱️</font></span></strong>
    </a>
</div>




## Device Configuration in SenseCAP

### Step 3. Add Device

Let's go back to the web side and start by adding a Grove Vision AI V2.

In the catalogue bar on the left side of the page, select **Development Kit** and click the **Create Development Kit** button in the middle.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

Please name your device and select the device as **Grove - Vision AI V2** and click on the **Confirm** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

After creating a new device, please click the **Connect** button on the right side of the device, and a series of pop-ups will be displayed to connect the required devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

Please keep these credentials information, we will use them later in the network configuration.

## SenseCraft AI model preparation and MQTT configuration

### Step 4. Flash Firmware for XIAO ESP32C3

Connect the XIAO ESP32C3 to your computer using a suitable USB-C cable. Ensure the device drivers are installed correctly.

Open the [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) in your web browser. This might be a service provided by the manufacturer or a third-party tool designed for flashing ESP devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>


Then select **XIAO ESP32S3** and click **Connect**.

:::caution
Note that although the XIAO ESP32S3 is selected here, we are still using the XIAO ESP32C3!
:::

Click the button below to download the firmware file and click the **Add File** button on the web page to flash the `XIAO_C3_as_AT_module.bin` firmware for the `0x0` address.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Finally, click the **Flash** button and wait for the programme to be uploaded successfully before disconnecting the XIAO ESP32C3 from the computer.

### Step 5. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant

First, we need to open the main SenseCraft AI Model Assistant page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

Please use a Type-C type cable to connect **Grove Vision AI V2** to your computer.

In the upper right corner of the SenseCraft AI Model Assistant page, you can select **Grove Vision AI (WE2)**. Then click the **Connect** button on the far right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

In the new window that pops up, select the correct COM port for the device and click the Connect button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Step 6. Upload a suitable model

Then, just select a model you want to use and click the **Send** button below. Here is an example of Gesture Detection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/18.png" style={{width:1000, height:'auto'}}/></div>

Wait for 1~2 minutes for the model to be uploaded.

### Step 7. Observations

Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/19.png" style={{width:1000, height:'auto'}}/></div>

<br />

We can see that in the Preview Settings on the right hand side, there are two setting options that can be changed to optimise the recognition accuracy of the model.

:::tip
If there is no screen displayed in Preview or there is no information in the model information, there may be a problem with the model and you need to reselect the model or upload it again.
:::

### Step 8. Configuring the network for Grove Vision AI V2 & XIAO

Connect the Grove Vision AI V2 to your computer and open the [Model Assistant's configuration page](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config).

After clicking on the top right corner to connect to Grove Vision AI V2, please turn on the MQTT button and enter the following information that you need to fill in the page.

- **SSID & Password**: The device needs to be on the same LAN as the host where the Home Asistant is installed. So please configure the network under the same LAN. XIAO only supports 2.4G WiFi, 5G network is not available.

Please fill in the network configuration according to the device information of the Grove Vision AI V2 that we have added by SenseCAP in **[Step 3](#step-3-add-device)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/8.png" style={{width:1000, height:'auto'}}/></div>

Then click the Save button below. After saving, it **does not mean that Grove Vision AI V2 has been written correctly**, please go back to **Process** in the left menu bar and check if the IP address of the device has appeared and if the status of the MQTT connection is correct.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
When IP Address is displayed, it means there is no problem with WIFI, and Service status must be the text in the figure to represent normal, note that if WIFI is not normal, MQTT is definitely not normal; when you just switch over, it may show unconnected, and you need to wait for about 10s or so, you don't need to refresh to see the status, and it will show the newest status after the change of the status automatically.
:::

When finished, click the **Stop** button to stop reasoning, and click **Disconnect** to disconnect the serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>


## PaaS Side and SenseCAP Mate APP Observations

### Step 9. View the results on the Mate APP.

Now we can open our mobile and enter our account number and password to log in. The mobile will sync the PaaS device information.

:::caution
Please select the correct site for which you are registered.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

After logging in, select your newly created device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

Once you enter the device, you can observe the screen and results.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## Troubleshooting

### Q1: Network Issue

If you keep observing IP addresses jumping in and out of display on the Process page, then the network may be unstable. You may want to consider changing networks or replacing the antenna with a stronger one.

### Q2: Why can't I see the screen in Mate APP?

Only one of the live previews in SSCMA and the preview results in SenseCAP PaaS can be active at the same time. So keep in mind that you need to turn off the real-time screen display of inference on the Process page in SenseCraft AI.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

