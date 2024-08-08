---
description: SenseCAP Card Tracker T1000-E for Meshtastic
title: T1000-E Tracker for Meshtastic
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
last_update:
  date: 7/1/2024
  author: Jessie
---

## Introduction



<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/_/5_10.jpg" alt="pir" width={600} height="auto" /></p>

It is a high-performance tracker designed for Meshtastic, as small as a credit card, effortlessly fitting in your pocket or attaching to your assets. It embeds Semtech's LR1110, Nordic's nRF52840, and Mediatek's AG3335 GPS module, providing Meshtastic users with a high-precision, low-power positioning and communication solution.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


---

:::tip Version Comparison

||Compatible Network|Temperature|Light|Accelerometer|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

### Features



* **Multi-Protocol Support**: Featuring nRF52840 and LR1110, it supports Bluetooth 5.0, Thread, Zigbee, and LoRa, ensuring compatibility with a wide range of devices and networks.
* **Powerful Positioning Capabilities**: Integrated with the Mediatek‘s AG3335 GPS chip, it provides high-precision positioning services.
* **Expandable Interfaces**: Designed with four pogo pins, it supports USB interface for DFU (Device Firmware Upgrade), serial logging, and API interface, simplifying device management and debugging.
* **Open Source Support**: Compatible with the Meshtastic open-source mesh networking protocol, suitable for long-range and low-power communication needs.


### Specification

**General**


|**Network protocol**|LoRa, Bluetooth v5.1|
| :- | :- |
|**Temperature**|<p>Range: -20 to 60℃;</p><p>Accuracy: ± 1℃ (min ±0.5℃, max ±1℃)</p><p>Resolution: 0.1℃</p>|
|**Light**|0 to 100% (0% is dark, 100% is brightest)|
|**3-Axis Accelerometer**|3-Axis Accelerometer to detect movement|
|**LED and Buzzer**|1\*LED and 1\* buzzer to indicate status|
|**Button**|1\* Button to operate|
|**Antenna**|Internal (GNSS/LoRa/Wi-Fi/BLE)|
|**Communication Distance**|2 to 5km (depending on antenna, installation, and environments)|
|**IP Rating**|IP65|
|**Dimensions**|85 \* 55 \* 6.5 mm|
|**Device Weight**|32g|
|**Operating Temperature**|-20℃ to +60℃|
|**Operating Humidity**|5% - 95% (No condensation)|
|**Certification**|CE /FCC|

**Battery**

|**Battey Capacity**|Rechargeable lithium battery, 700mAh|
| :- | :- |
|**Battery Life Monitoring**|Periodic uplink battery level|
|<p>**Charge Cable**</p><p>**(Adapter not included)**</p>|USB magnetic charging cable, 1 meter|
|**Power Input Voltage**|4\.7 to 5.5V DC|
|**Charging Temperature Limit**|0 to +45℃|


### Hardware overview


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000-e.png" alt="pir" width={800} height="auto" /></p>



## Get Started

### Configuration


Press the button once to power on the T1000-E tracker, the Bluetooth pairing will be activated automatically.

#### Device Connection


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Download the `Meshtastic` App.<br/>

* Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* Download the `Meshtastic` App.<br/>

* Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
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



## FAQ

* **How to check the device name?**

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>
Select device: `T1000-E Tracker Card`<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name1.png" alt="pir" width={800} height="auto" /></p>

Click `Open Serial Monitor`, connect the device, and you will see the device name.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name2.png" alt="pir" width={800} height="auto" /></p>




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


