---
description: Meshtastic MQTT Gateway Setting Tutorial based on Wio-Trcker L2. Enables global messaging, provides a backup when mesh signals are weak, and ensures faster message delivery via the internet.
title: MQTT Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png
slug: /set_up_mqtt_gateway_l2
sku: 100029766
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/set_up_mqtt_gateway_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Why do you need Meshtastic + mqtt

Integrating MQTT with Meshtastic extends off-grid communication by bridging distant networks. This enables global messaging, provides a backup when mesh signals are weak, and ensures faster message delivery via the internet. Perfect for remote areas and emergency situations.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png" style={{width:900, height:'auto'}}/></div>

## Hardware Preparation

Setting up a Meshtastic Gateway requires a device that can both run LoRa and Wifi. Additionally, if you want to share your gateway's location via mqtt, you can add a GPS module.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
</a>
</div>

## Set Up

### Step1 Flash Firmware

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Select the target device to `Seeed Wio Tracker L2` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

Switch on the device, click `Enter DFU Mode`, there will be a serial port named `Tracker L2`, click and connect it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

And then click "Flash". Don't forget to tick "Full Erase and Install" if you want to cover previous firmware.

### Step2 Check your Device ID

<Tabs>
<TabItem value="23" label="Check the device back">
The `last four digit` of the MAC address is the device ID

For example, the device ID of the device below would be `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="Via Serial Tool">
Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Click `Open Serial Monitor`, connect the device to your PC, check the serial log, keyword `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### Step3 APP Connection

<Tabs>

<TabItem value="3" label="MUI">

Go to `Setting` page, click `Reboot/Shutdown`, then click the `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

The device will then reboot in Bluetooth mode. The Bluetooth pairing code will be shown on the screen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

The device is always in Bluetooth pairing mode, requiring no special operation.

</TabItem>
</Tabs>

[Click here](https://meshtastic.org/downloads/) to download Meshtastic APP.

Pair your device with your phone APP.

<Tabs>

<TabItem value="5" label="IOS">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code shown on the screen and then click `Pair` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Enter the code shown on the screen and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

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

If you have another Meshtastic device that is in the same frenquency band with the MQTT Gateway, it can transmit message via the L2 gateway with other people in internet too.

