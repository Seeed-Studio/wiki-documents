---
description: Introduction of how the mmWave Sensor connect to HA.
title: mmWave for XIAO connect to HA
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave-for-xiao-connect-to-HA
last_update:
  date: 12/06/2023
  author: Allen
---

# mmWave for XIAO connect to HA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## Introduction

24GHz mmWave Sensor for XIAO - Human Static Presence is a expansion board for Seeed Studio XIAO series. It is an antenna-integrated, high-sensitivity mmwave radar sensor that is based on the FMCW principle. Combined with radar signal processing and accurate human body sensing algorithms, it can identify human bodies in motion and stationary states. 

This chapter primarily introduces how the 24GHz mmWave Sensor for XIAO connects to the HA via Bluetooth. For detailed functional features of the 24GHz mmWave Sensor for XIAO, you can refer to [here](https://wiki.seeedstudio.com/mmwave_for_xiao/).

:::caution
All contents of this Wiki apply only to 24GHz mmWave for XIAO and may not be used on other millimetre wave sensors.
:::

## Getting Started

### Hardware Preparations

Before we begin the tutorial content of this article, we recommend that you purchase any of the XIAOs we currently have for sale in order to use the millimetre wave sensor.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

In the tutorials in this article, we will use the XIAO ESP32C3 and the mmWave Sensor as examples of use to guide you on how to use the sensor's Arduino libraries and related features.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

The sensor is designed for XIAO compatibility, so in general, if you want to use this sensor, you need to prepare an XIAO and install the female header row pin for the sensor. When connecting to the XIAO, please pay special attention to the installation direction of the sensor, please do not plug it in backwards, otherwise it is likely to burn the sensor or the XIAO.

:::caution
The correct direction to follow is that the antenna of the sensor should face outwards.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

After confirming that the connection direction is correct, you can connect the USB-C type cable to the computer or 3.3V power supply, and the sensor will start to work.

### Software Preparations

If you haven't installed HomeAssistant yet, you can refer to the official HomeAssistant tutorial by clicking [here](https://www.home-assistant.io/installation/).



## Connect to HA

**Step 1.** Connect the mmwave radar to the XIAO and then to a 3.3V power supply. Because mmwave-for-xiao is connected via bluetooth, try to be as close as possible to the HA system.

:::tip
Pay attention to the pins should be corresponding, don't connect on the opposite way.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/connection.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Start HA system, click the **setting** in the lower left corner, select **Devices&Services** in the center.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** In the Discovered zone, there will be a radar icon, click **configure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** A popup window will appear, click **submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** You will see a successful configuration popup, click **finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:800, height:'auto'}}/></div>

**Step 6.** In the configured zone, click **millimeter wave radar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:800, height:'auto'}}/></div>

**Step 7.** Once you are in the radar settings page, click **device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:800, height:'auto'}}/></div>

**Step 8.** Add the sensor's return value to the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:800, height:'auto'}}/></div>

**Step 9.** Select **add to dashboard** in the popup window. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:800, height:'auto'}}/></div>

**Step 10.** Finally, click **overview** in the upper left corner, you will see the mmwave-for-xiao radar data successfully displayed on the dashboard. So far the mmwave-for-xiao radar has been successfully connected to the HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:800, height:'auto'}}/></div>



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
