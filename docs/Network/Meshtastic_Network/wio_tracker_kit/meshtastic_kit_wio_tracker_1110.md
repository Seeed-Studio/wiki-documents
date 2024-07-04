---
description: Get Started with Wio Tracker Dev Kit for Meshtastic® 
title:  Get Started
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_kit_wio_tracker_1110
last_update:
  date: 6/17/2024
  author: Jessie
---

## Introduction


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit1.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


The Wio Tracker Meshtastic development kit is based on the [Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), featuring two Grove modules - GPS (Air530) and a 0.96" OLED Display, pre-loaded with Meshtastic firmware. Simply unpack and flash the firmware to start exploring Meshtastic and enjoy the fun of Mesh Networks.

### Features

* **Easy Setup**: Simply flash the firmware to experience the powerful features of the Meshtastic network.
* **Real-time Positioning**: Equipped with a GPS (Air530) module, supporting high-precision GPS positioning.
* **Information Display**: Features a Grove - OLED Display 0.96" screen for clear real-time data visualization.
* **Extensive Expansion Interfaces**: Compatible with the Grove ecosystem, allowing easy expansion with more sensors and modules.
* **Open-source Hardware and Software**: Supports secondary development and customization, providing rich development resources and Meshtastic community support.


### Specification

<table><tr><th colspan="3"><b>General</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>Voltage - supply</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">Battery Connector</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>Interface</b></td><td colspan="1">RFIO</td><td colspan="1"><p>GNSS Antenna Connector* 1</p><p>LoRa Antenna Connector* 1</p></td></tr>
<tr><td colspan="1">USB type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Grove Interface</td><td colspan="1"><p>ADC* 1I2C* 1UART* 1</p><p>Digital*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>Button</b></td><td colspan="1">USER</td><td colspan="1">Configurable button</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">Reset</td></tr>
<tr><td colspan="1"><b>Exterior FLASH Memory</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® and Positioning (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>LoRaWAN® Protocol</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>Frequency Plan</b></td><td colspan="2">863~928MHz</td></tr>
<tr><td colspan="1"><b>Sensitivity</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>Output Power</b></td><td colspan="2">20dBm max @LoRa®</td></tr>
<tr><td colspan="1"><b>Positioning Technology</b></td><td colspan="2">GNSS(GPS/BeiDou), WiFi Sniffer</td></tr>
<tr><td colspan="1"><b>Range</b></td><td colspan="2">2~10km (Depends on antenna and environment)</td></tr>
<tr><td colspan="3"><b>Bluetooth(Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>Protocol</b></td><td colspan="2">Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT and 2.4 GHz proprietary stacks</td></tr>
<tr><td colspan="1"><b>Output Power</b></td><td colspan="2">6dBm max @Bluetooth</td></tr>
<tr><td colspan="3"><b>Onboard Sensors -- TH Sensor (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>Range</b></td><td colspan="1"><b>Accuracy</b></td></tr>
<tr><td colspan="1"><b>Temperature</b></td><td colspan="1">-40~85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>Humidity</b></td><td colspan="1">0~100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>Onboard Sensors -- 3-Axis Accelerometer( Not used )</b></td></tr>
<tr><td colspan="1"><b>Range</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>Bandwidth</b></td><td colspan="2">0\.5Hz ~ 625Hz</td></tr>
<tr><td colspan="1"><b>Sensitivity (LSB/g)</b></td><td colspan="2">1000 (±2g) ~ 83 (±16g)</td></tr>
</table>



**Grove - OLED Display 0.96 inch**

|**Power Voltage (VCC)**|3\.3 / 5 V|
| :- | :- |
|**Driver IC**|SSD1308Z|
|**Display Color**|White|
|**Dot Matrix**|128×64|
|**Panel Size**|26\.7(W)×19.26(H) mm|
|**Active Area**|21\.74(W)×11.175 (H) mm|
|**Dot Pitch**|0\.17(W)×0.175 (H) mm|
|**Dot Size**|0\.15(W)×0.15 (H) mm|
|**Wide range of operating temperature**|-20~70 ℃|


## Get Started

### Hardware Connection


Connect the `Grove-GPS module` to the `UART` port, and the `Grove-OLED Display` to the `I2C` port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>


Power on the board. 


### Configuration

#### Device Connection

Different connection types, find out which client is best for your type of connection.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Download the `Meshtastic` App.<br/>

* Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* The display will show the name and PIN code


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>


* Enter the code and then click `Pair` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* Download the `Meshtastic` App.<br/>

* Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* The display will show the name and PIN code


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>


* Enter the code and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>

<TabItem value="web" label="Web Client">


Open [Web Client](https://client.meshtastic.org/), click `New Connection`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>


* **Connect via Bluetooth**

 Enable the Bluetooth of your PC, and select the `Bluetooth` tab to connect a new device.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

 Select the device and enter the PIN code on the display to connect the device.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

* **Connect via Serial**


 Connect the board to your PC and select the `Serial` tab to connect a new device.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

 You can check the port via:
 ```
 ls /dev/cu.*
 ```
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>


</TabItem>

<TabItem value="cli" label="CLI">


This library provides a command-line interface (CLI) for managing the user settings of Meshtastic nodes and provides an easy API for sending and receiving messages over mesh radios. 



</TabItem>
</Tabs>


#### Parameters Configuration



In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.



<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
<TabItem value="web" label="Web Client">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>



</TabItem>

<TabItem value="cli" label="CLI">

Run the following command, replacing `REGION-CODE` with the region code listed above according to your regional location.

```
meshtastic --set lora.region <REGION-CODE>
```

For example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>


</TabItem>
</Tabs>






**Region List**

Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.


|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902\.0 - 928.0|100|30|
|EU\_433|European Union 433MHz|433\.0 - 434.0|10|12|
|EU\_868|European Union 868MHz|869\.4 - 869.65|10|27|
|CN|China|470\.0 - 510.0|100|19|
|JP|Japan|920\.8 - 927.8|100|16|
|ANZ|Australia & New Zealand|915\.0 - 928.0|100|30|
|KR|Korea|920\.0 - 923.0|100||
|TW|Taiwan|920\.0 - 925.0|100|27|
|RU|Russia|868\.7 - 869.2|100|20|
|IN|India|865\.0 - 867.0|100|30|
|NZ\_865|New Zealand 865MHz|864\.0 - 868.0|100|36|
|TH|Thailand|920\.0 - 925.0|100|16|
|UA\_433|Ukraine 433MHz|433\.0 - 434.7|10|10|
|UA\_868|Ukraine 868MHz|868\.0 - 868.6|1|14|
|MY\_433|Malaysia 433MHz|433\.0 - 435.0|100|20|
|MY\_919|Malaysia 919MHz|919\.0 - 924.0|100|27|
|SG\_923|Singapore 923MHz|917\.0 - 925.0|100|20|
|LORA\_24|2\.4 GHz band worldwide|2400\.0 - 2483.5|100|10|

:::info
**EU_433** and **EU_868** have to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::


Now that you have set the LoRa region on your device, you can continue with configuring any [additional configs](https://meshtastic.org/docs/configuration/) to suit your needs.






## Resource

[Meshtastic Doc](https://meshtastic.org/docs/introduction/)





## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>