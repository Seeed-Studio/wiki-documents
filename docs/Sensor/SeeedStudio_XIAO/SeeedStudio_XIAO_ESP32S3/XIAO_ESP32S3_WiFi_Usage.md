---
description: WiFi usage with Seeed Studio XIAO ESP32S3.
title: WiFi usage with Seeed Studio XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- wifi usage
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_wifi_usage
last_update:
  date: 03/27/2023
  author: MengDu
---

# WiFi Usage with Seeed Studio XIAO ESP32S3 (Sense)

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

The Seeed Studio XIAO ESP32S3 is an embedded development board that boasts outstanding RF performance, thanks to its support for both 2.4GHz Wifi - 802.11b/g/n and Bluetooth Low Energy (BLE) dual wireless communication. This capability enables the XIAO ESP32S3 to provide reliable and high-speed wireless connectivity for a wide range of Internet of Things (IoT) applications. In addition, the board supports U.FL antenna connection, which can extend the communication range to over 100 meters, making it an ideal choice for projects that require long-range wireless connectivity. In this tutorial, we will explore how to leverage the XIAO ESP32S3's Wi-Fi capabilities to connect to a Wi-Fi network and perform basic networking tasks.

## Getting Started

### Installation of antenna

On the bottom left of the front of XIAO ESP32S3, there is a separate "WiFi/BT Antenna Connector". In order to get better WiFi/Bluetooth signal, you need to take out the antenna inside the package and install it on the connector.

There is a little trick to the installation of the antenna, if you press down hard on it directly, you will find it very difficult to press and your fingers will hurt! The correct way to install the antenna is to put one side of the antenna connector into the connector block first, then press down a little on the other side, and the antenna will be installed.

Remove the antenna is also the case, do not use brute force to pull the antenna directly, one side of the force to lift, the antenna is easy to take off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>












