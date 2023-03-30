---
description: Bluetooth usage with Seeed Studio XIAO ESP32S3.
title: Bluetooth Usage with Seeed Studio XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_bluetooth
last_update:
  date: 03/27/2023
  author: MengDu
---

# Bluetooth Usage with Seeed Studio XIAO ESP32S3 (Sense)

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

The Seeed Studio XIAO ESP32S3 is a powerful development board that supports Bluetooth 5, BLE, and Mesh networking, making it an ideal choice for a wide range of IoT applications that require wireless connectivity. With its outstanding RF performance, the XIAO ESP32S3 can provide reliable and high-speed wireless communication over a variety of distances, making it a versatile solution for both short-range and long-range wireless applications. In this tutorial, we will focus on the basic features of the XIAO ESP32S3's Bluetooth capabilities, such as how to scan for nearby Bluetooth devices, how to establish a Bluetooth connection, and how to transmit and receive data over a Bluetooth connection.

## Getting Started

### Installation of antenna

On the bottom left of the front of XIAO ESP32S3, there is a separate "WiFi/BT Antenna Connector". In order to get better WiFi/Bluetooth signal, you need to take out the antenna inside the package and install it on the connector.

There is a little trick to the installation of the antenna, if you press down hard on it directly, you will find it very difficult to press and your fingers will hurt! The correct way to install the antenna is to put one side of the antenna connector into the connector block first, then press down a little on the other side, and the antenna will be installed.

Remove the antenna is also the case, do not use brute force to pull the antenna directly, one side of the force to lift, the antenna is easy to take off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>





