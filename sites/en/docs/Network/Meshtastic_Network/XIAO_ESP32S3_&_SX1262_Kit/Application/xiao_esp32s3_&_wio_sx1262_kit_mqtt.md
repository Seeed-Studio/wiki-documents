---
description: Meshtastic MQTT Gateway Setting Tutorial based on XIAO ESP32S3 & Wio-SX1262 Kit. Enables global messaging, provides a backup when mesh signals are weak, and ensures faster message delivery via the internet. 
title: Setting up a MQTT Gateway
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Why do you need Meshtastic + mqtt

Integrating MQTT with Meshtastic extends off-grid communication by bridging distant networks. This enables global messaging, provides a backup when mesh signals are weak, and ensures faster message delivery via the internet. Perfect for remote areas and emergency situations.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## Hardware Preparation

Setting up a Meshtastic Gateway requires a device that can both run LoRa and Wifi. Additionally, if you want to share your gateway's location via mqtt, you can add a GPS module.

<table align="center">
<tbody><tr>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>(Optional) L76K GNSS Module</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Hardware Installation

### Connected to battery

The XIAO ESP32S3 has a built-in power management chip that allows the XIAO ESP32S3 to be powered independently by using a battery or to charge the battery through the XIAO ESP32S3's USB port.

If you want to connect the battery for XIAO, we recommend you to purchase qualified rechargeable `3.7V lithium` battery with `protection circuit`. When soldering the battery, please be careful to distinguish between the positive and negative terminals. The negative terminal of the power supply should be the side closest to the USB port, and the positive terminal of the power supply is the side away from the USB port.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Connected to SX-1262

The SX-1262 can be connected to the Xiao ESP32-S3 via the B2B interface. The SX-1262 uses SPI to  communicate with Xiao ESP32-S3.
:::warning
The compatible SX-1262 can only be bought within the kit.
:::

### (Optional) Connected to L76K GNSS Module

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:600, height:'auto'}}/></div>

## Set Up

### Step1 Flash Firmware

**1**: Firstly, open a browser and visit https://flasher.meshtastic.org/# requires Chrome or Edge browser.

**2**: Then, use a suitable USB cable to connect the device to the PC. You may need to turn off, then **press and hold the BOOT button** while plugging in the USB cable.

**3**: Follow the following instruction provided to perform the subsequent flashing operations. Select the Device as "**Seeed XIAO S3**", Firmware as **the lastest** one, and then click "**Flash**". Don't forget to tick "**Full Erase and Install**" if you want to cover previous firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### Step2 Check your Device ID

The device ID is normally the last four digits of the MAC address. You can open the serial port monitor to check.
    
Conect the device via a USB cable. Then [click here](https://flasher.meshtastic.org/#) to go to the Meshtastic web flasher. Click `Open the serial port monitor`. Select the Device as `Seeed XIAO S3` or `Tiny USB XXX`
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>
    
Check your device ID in the serial port log. For example, the log below shows indicates that the device ID is 24c0.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### Step3 APP Connection

open the Meshtastic Android app and connect to your device via Bluetooth. The default pin code is 123456

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### Step4 Set up Xiao ESP32S3 Mesh-mqtt Gateway

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa Configuration**
- change the region from UNSET to your country/region (e.g., EU868 for Europe, US for USA, etc.).
- Choose `OK to MQTT`
- Click Send
- The device reboots and reconnects automatically. The device will automatically reboot and reconnect. This may take 30s to 2 mins.
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT Configuration**
 
- You can use the default `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) and `Password`(large4cats). 
- Choose `MQTT Enabled`
- Choose `MQTT Client Proxy Enabled`
- (Optional)If you want other mqtt users to see you on the map, please choose `Map Reporting` and `I agree`.
- Click Send
- The device reboots and reconnects automatically. The device will automatically reboot and reconnect. This may take 30s to 2 mins.
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>

    
**3. Chanel Configuration**
    
- open `Uplink enabled` and `Downlink enabled` for your primary chanel
- Click Send
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>

    
**4. Network Configuration**
    
After this configuration, your device will not be able to connect to your APP via Bluetooth. But it can connect to your APP via network.
    
- Fill in the SSID (Wifi Name) and the Wifi password. The wifi you expect to use should be 2.4G.
- Click Send
- The device reboots automatically. 
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. APP Connection**

Now your device can not be connected via Bluetooth. But you can connect via Network.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa Configuration**
- change the region from UNSET to your country/region (e.g., EU868 for Europe, US for USA, etc.).
- Choose `OK to MQTT`
- Click Send
- The device reboots and reconnects automatically. The device will automatically reboot and reconnect. This may take 30s to 2 mins.
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT Configuration**
 
- You can use the default `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) and `Password`(large4cats). 
- Choose `MQTT Enabled`
- Choose `MQTT Client Proxy Enabled`
- (Optional)If you want other mqtt users to see you on the map, please choose `Map Reporting` and `I agree`.
- Click Send
- The device reboots and reconnects automatically. The device will automatically reboot and reconnect. This may take 30s to 2 mins.
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>

    
**3. Chanel Configuration**
    
- open `Uplink enabled` and `Downlink enabled` for your primary chanel
- Click Send
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>

    
**4. Network Configuration**
    
After this configuration, your device will not be able to connect to your APP via Bluetooth. But it can connect to your APP via network.
    
- Fill in the SSID (Wifi Name) and the Wifi password. The wifi you expect to use should be 2.4G.
- Click Send
- The device reboots automatically. 
    
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. APP Connection**

Now your device can not be connected via Bluetooth. But you can connect via Network.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## Messgage Sending

Now you can communicate with other people from internet. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

If you have another Meshtastic device that is in the same frenquency band with the ESP32S3 MQTT Gateway, it can transmit message via the ESP32S3 with other people in internet too.

