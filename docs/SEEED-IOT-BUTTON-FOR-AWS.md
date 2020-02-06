---
name: Seeed IoT Button For AWS
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102991334
---


![](https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/AWS.png)

The Seeed IoT Button For AWS is a Wi-Fi based, programmable button that is easy to configure and simple to use. You can use the Seeed IoT Button For AWS to capture quick customer feedback without burdening customers with time-consuming questionnaires.  It is designed for enterprises and developers to easily integrate with existing business workflows and systems using the AWS IoT 1-Click service. And this IoT Button is fully compatible with official AWS IoT 1-Click iOS app and Android app. The battery for this device is NCR18650B chargeable Li-ion battery. It is removable and not included when you get this IoT Button. Customer can easy to buy this battery by themselves. And what we propose is Panasonic NCR18650B 3.6V 3400mAh.There is a bracket for this IoT Button. Customer can stick it on the wall or other surface and easy to put the IoT Button  in and get out from the bracket. The Seeed IoT Button for AWS supports three types of clicks: single, double, and long press, and 3 LEDs for different indications.

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
|Flash|Serial SPI Flash: 104MHz |
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
  <p style=":center"><a href="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Seeed_IOT_Button_Overview.png" target="_blank"><img src="https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Seeed_IOT_Button_Overview.png" /></a></p>
</figure>
</div>

### Power Status LED Indication

The Power Status LED is near the USB Type-C Port.

|Power LED Status|Indication|
|---|---|
|Battery reversed|Red|
|Battery Charging|Green ON|
|Battery Finished Charging|Green OFF|

## Getting Started

### Device Activation

When first time using the device, you must connect the device to a computer or a power adapter through USB Type-C. When the power indication LED is green, it indicates that it's activated(The power status LED is near the USB Type-C port).

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

### Event Status LED Indications

The Event Status LED is near the button(Above the button).

![](https://github.com/SeeedDocument/Seeed-IOT-BUTTON-FOR-AWS/raw/master/img/Seeed_IOT_Button.gif)

| LED Status   | Indication                      |
| :----------------------- | :----------------------------------------- |
| Red Always|The certificate has not been flashed or the certificate is invalid|
| White flashes -> Green|Event sent successfully|
| White flashes -> Red| Event sent failed|
| White flashes -> Orange|Wi-Fi connection failed, please check router or change network configuration|
|White flashes -> Purple|The server connection failed, please check the network environment|

### Wi-Fi Configuration LED Indications

The Wi-Fi Configuration LED is near the button(Below the button).

| LED Status   | Indication                      |
| :----------------------- | :----------------------------------------- |
| Blue flashing|BLE network configuring|

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>