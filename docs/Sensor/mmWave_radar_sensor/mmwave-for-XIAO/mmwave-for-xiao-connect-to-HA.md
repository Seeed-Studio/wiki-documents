---
description: Introduction of how the mmWave Sensor connect to HA.
title: mmWave for XIAO to Home Assistant via Bluetooth
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_for_xiao_to_ha_bt
last_update:
  date: 12/06/2023
  author: Allen
---

# mmWave for XIAO to Home Assistant via Bluetooth

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## Introduction

24GHz mmWave Sensor for XIAO - Human Static Presence is a expansion board for Seeed Studio XIAO series. It is an antenna-integrated, high-sensitivity mmwave sensor that is based on the FMCW principle. Combined with sensor signal processing and accurate human body sensing algorithms, it can identify human bodies in motion and stationary states. 

This chapter primarily introduces how the 24GHz mmWave Sensor for XIAO connects to the HA via Bluetooth. For detailed functional features of the 24GHz mmWave Sensor for XIAO, you can refer to [here](https://wiki.seeedstudio.com/mmwave_for_xiao/).

:::caution
All contents of this Wiki apply only to 24GHz mmWave for XIAO and may not be used on other millimetre wave sensors.
:::

## Getting Started

### Hardware Preparations

In this article, we will use mmWave for XIAO in conjunction with the XIAO ESP32C3 to plug it into Home Assistant for the sake of aesthetics and ease of wiring. if you want to follow this tutorial to the letter, then you will need to prepare the following modules.

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

:::tip
If you don't have an XIAO on hand at the moment, then you have the option of powering the mmwave for XIAO separately by connecting TTL to its 3.3V pin and GND pin, which can also be done using the content of this tutorial. For this tutorial, there is no need to use the RX and TX pins.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### Software Preparations

If you haven't installed HomeAssistant yet, you can refer to the official HomeAssistant tutorial by clicking [here](https://www.home-assistant.io/installation/).

## Procedures

### Step 1. Discovery Device

In Home Assistant, click the **setting** in the lower left corner, select **Devices&Services** in the center.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

In the Discovered zone, there will be a sensor icon, click **configure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

A popup window will appear, click **submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

You will see a successful configuration popup, click **finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Configurate Device

In the configured zone, click **ld2410_ble**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

Once you are in the sensor settings page, click **1 device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

Add the sensor's return value to the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

Select **ADD TO DASHBOARD** in the popup window.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

Finally, click **overview** in the upper left corner, you will see the mmwave-for-xiao sensor data successfully displayed on the dashboard. So far the mmwave for xiao sensor has been successfully connected to the Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

Next, you can get creative with your automation!

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
