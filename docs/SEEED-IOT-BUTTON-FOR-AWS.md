---
name: Seeed IoT Button For AWS
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102991334
---


![](https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Side.png)

The Seeed IoT Button For AWS is a Wi-Fi based, programmable button that is easy to configure and simple to use. You can use the Seeed IoT Button For AWS to capture quick customer feedback without burdening customers with time-consuming questionnaires. It is designed for enterprises and developers to easily integrate with existing business workflows and systems using the AWS IoT 1-Click service. And this IoT Button is fully compatible with official AWS IoT 1-Click iOS app and Android app. The battery for this device is NCR18650B chargeable Li-ion battery. Please kindly know that no battery in the package, while the battery is available in regular convenience store and customer need to prepare themselves. And what we propose is Panasonic NCR18650B 3.6V 3400mAh.There is a bracket for this IoT Button. Customer can stick it on the wall or other surface and easy to put the IoT Button  in and get out from the bracket. The Seeed IoT Button for AWS supports three types of clicks: single, double, and long press, and 3 LEDs for different indications.

<p style=":center"><a href="" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Single/Double/Long Press Click Events
- Onboard Power Status LED
- Onboard Event Status LED
- Onboard Wi-Fi Configuration LED
- Removable and Chargeable NCR18650B Battery
- Battery polarity reversed protection and indication
- USB Type-C Charging
- Stickable Bracket


## Specification

|Parameter|Value|
|---|---|
|Size|92\*32\*25mm|
|MCU|Dual core: 20MHz Cortex M0; 200MHz Cortex M4F|
|Flash|4MB |
|Button| 100,000 Cycles|
|LED|RGB|
|Wi-Fi|802.11 a/b/g/n 2.4GHz & 5GHz|
|Bluetooth|BLE 5.0|
|Battery|3.6V Li-ion 18650 Rechargeable battery|
|Charging Interface|USB Type-C|
|Charging Current|500mA|
|Charging time|4-6 Hours(According to battery capacity)|
|Battery Protection|Over charge,Over current,Over discharge, Reverse polarity protection|
|Firmware Update|Support OTA|

## Hardware Overview

<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### LED Status Indications

![](https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/AWS%20Button%20LED.jpg)

## Getting Started

### Setting up Wi-Fi on the Button

1. Download the latest AWS IoT 1-Click App from Apple App Store or Google Play Store

2. Launch the AWS IoT 1-Click App

3. Press the Wi-Fi Configuration button

4. Press Configure Wi-Fi in the App

<div align=center><img width = 250 src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/04.png"/></div>

5. Press the Scan button, then scan the DSN of a button, then press the Stop Scanning button

<div align=center><img src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/05.png"/></div>

6. Press Configure

7. Press your AWS IoT Enterprise button for 6 seconds until the blue light flashes

<div align=center><img width = 250 src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/07.png"/></div>

8. Select a Wi-Fi network from the list of networks. This is the Wi-Fi network you want your buttons to use

<div align=center><img width=250 src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/08.png"/></div>

9. Input the password (if any) for the Wi-Fi network and Continue

<div align=center><img width=250 src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/09.png"/></div>

10. Wait until the device turn off and the configuration is done

<div align=center><img width = 500 src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/10.png"/></div>

### Device Activation

When first time using the device, you must put the battery inside the button, and connect the device to a computer or a power adapter through USB Type-C. When the power indication LED is green, it indicates that it's activated(The power status LED is near the USB Type-C port).

!!!Note
        When the Power Status LED is red, it indicates that the battery is reversed!

### Device Configuration

#### Network Configuration

- Long press (over 7s): Enter BLE network configuration mode

- Configure Network via mobile App (temporarily lacking, need to provide by AWS)

#### Equipment Declaration

(temporarily lacking, need to provide by AWS)

- https://aws.amazon.com/cn/iot-1-click/ 

### Operating Instructions

- **Single Click:** Send single click event

- **Double-Click:** Send double click event

- **Long Press(2s~5s):** Send long press event
  
- **Long Press(>7s):** Enter BLE network configuration mode. In this mode, other events are blocked. If you need to manually exit the BLE distribution mode, you can press and hold it for more than 7s again, and it will exit automatically in two minutes.

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>