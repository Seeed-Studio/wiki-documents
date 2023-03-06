---
description: SEEED IOT BUTTON FOR AWS
title: SEEED IOT BUTTON FOR AWS
keywords:
- IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SEEED-IOT-BUTTON-FOR-AWS
last_update:
  date: 1/13/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

The Seeed IoT Button For AWS is a Wi-Fi based, programmable button that is easy to configure and simple to use. You can use the Seeed IoT Button For AWS to capture quick customer feedback without burdening customers with time-consuming questionnaires. It is designed for enterprises and developers to easily integrate with existing business workflows and systems using the [AWS IoT 1-Click service](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html). And this IoT Button is fully compatible with official AWS IoT 1-Click iOS app and Android app. The battery for this device is NCR18650B chargeable Li-ion battery. Please kindly know that no battery in the package, while the battery is available in regular convenience store and customer need to prepare themselves. And what we propose is Panasonic NCR18650B 3.6V 3400mAh.There is a bracket for this IoT Button. Customer can stick it on the wall or other surface and easy to put the IoT Button  in and get out from the bracket. The Seeed IoT Button for AWS supports three types of clicks: single, double, and long press, and 3 LEDs for different indications.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Single/Double/Long Press Click Events
- Onboard Power/Event/Wi-Fi Configuration Status LED
- Equipped with Realtek RTL8720DN, dual-band 2.4Ghz / 5Ghz Wi-Fi
- Removable and Chargeable NCR18650B Battery
- Battery polarity reversed protection and indication
- USB Type-C Charging
- Stickable Bracket

## Specification

|Parameter|Value|
|---|---|
|Size|92\*32\*25mm|
|MCU|Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F|
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
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### LED Status Indications

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Power LED Status</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indication</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Battery Reversed</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Red</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Battery Charging</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Green ON</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Battery Finished Charging</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Green OFF</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Event LED Status</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indication</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Red Always</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>The certificate has not been flashed or the certificate is invalid</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>White flashes -&gt; Green</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Event sent successfully</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>White flashes -&gt; Red</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Event sent failed</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>White flashes -&gt; Orange</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi connection failed, please check router or change network configuration</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>White flashes -&gt; Purple</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>The server connection failed, please check the network environment</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Wi-Fi Configuration LED Status</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indication</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blue flashing</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>BLE network configuring</td></tr></tbody></table>

## Getting Started

### Powering Up

The first step of getting started is to power on the IoT button. There are two ways to power on the buttons:

#### Method 1 - USB Type-C

Simply plug in the USB Type-C cable to the USB port to power on the device. You should see the power indication LED is flash **Green** once.

:::note
After Green light flashed once, you should also see the LED blink a green light at a very low brightness. You can see it under darker surrounding.
:::

#### Method 2 - Using Battery

You can also use battery to power on the IoT button. Open the enclosure (please refer to the gif below) and put the battery in. Once the battery is installed, you will also need to plug the IoT button to a computer or a power adapter via USB Type-C **once** to initialize the battery circuit. You should see the power indication LED is **Green**. You may now remove the USB connection and LED will go off and everything is set.

:::note
When the Power Status LED is red, it indicates that the battery is reversed!
:::

#### How To Take Out The Enclosure

The following gif demonstrates how to take out the enclosure using the Triangle Plastic Pry Opening Tool provided in the package.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

### Setting up Wi-Fi on the Button

1.Download the latest AWS IoT 1-Click App from Apple App Store or Google Play Store

2.Launch the **AWS IoT 1-Click App** and sign up with an Amazon AWS account

:::note
Please make sure that the Bluetooth is turned on, or error will appeared as shown.
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3.Press **Claim with Device ID** in the App. Press **Scan** in the app and Scan the **DSN** from the bottom of Seeed IoT Button for AWS.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4.Press **Configure**

5.Press your **Seeed IoT Button for AWS** for 7 seconds until the blue light flashes

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6.Select a Wi-Fi network from the list of networks. This is the Wi-Fi network you want your buttons to use

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7.Input the password (if any) for the Wi-Fi network and Continue

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8.Wait until configuration succeeded is appeared in the App and press **Finish**. The configuration is done

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

Now you can start playing with your AWS 1-Click service!

Please make sure update to the latest firmware following [**this**](https://wiki.seeedstudio.com/SEEED-IOT-BUTTON-FOR-AWS/#ota-update).

### Operating Instructions

- **Single Click:** Send single click event

- **Double-Click:** Send double click event

- **Long Press(2s~5s):** Send long press event
  
- **Long Press(>7s):** Enter BLE network configuration mode. In this mode, other events are blocked. If you need to manually exit the BLE distribution mode, you can press and hold it for more than 7s again, and it will exit automatically in two minutes.

## OTA Update

Long Press **15s** to start searching for new version upgrades:

1. **Long Press(>7s)**, the Wi-Fi Configuration LED starts to blink. If released now will enter network configuration mode.

2. Continue to **press and hold >8s (total > 15s)**, Event Status LED starts to flash blue and enter OTA mode.

**When it's the latest version**, the Event Status LED blinks from **Blue** to **Green**. For more information, please refer to the table below:

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Event LED Status</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Indication</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Blue flashes -&gt; Green</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Update sent successfully</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Blue flashes -&gt; Red</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Update sent failed</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Blue flashes -&gt; Orange</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Wi-Fi connection failed, please check router or change network configuration</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Blue flashes -&gt; Purple</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>The server connection failed, please check the network environment</td></tr></tbody></table>

## FAQs

**Q1.** The outer enclosure SN (Serial Number) is rubbed off.

There is also a backup SN sticker inside the AWS button enclosure, underneath the battery.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<div>
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
</div>
