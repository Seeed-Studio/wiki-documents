---
description: Enable visual interface design for the XIAO EE04 ePaper Display using the SenseCraft HMI platform.
title: XIAO ePaper Display Board EE04 with the SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# SenseCraft HMI Overview

## Introduction

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is Seeed Studio's powerful cloud-based interface design platform that enables you to create professional visual interfaces for screen-based devices without coding. With an intuitive drag-and-drop editor, pre-built templates, and AI-powered design capabilities, SenseCraft HMI makes it easy to transform your hardware into beautiful information displays, dashboards, digital signage, and control panels.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi34.png" style={{width:1000, height:'auto'}}/></div>


## Hardware Overview

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Supported ePaper

#### 24-Pin Connector

- [1.54-Inch ePaper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-Inch ePaper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-Inch ePaper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 Inch ePaper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-Inch ePaper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-Inch ePaper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-Inch ePaper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-Inch ePaper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-Inch ePaper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-Inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
When using the XIAO ePaper Display Board, make sure to set the jumper according to the ePaper display type:

- For 24 Pin ePaper displays → set the jumper to 24 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::

#### 50-Pin Connector

- [7.3-Inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
When using the XIAO ePaper Display Board, make sure to set the jumper according to the ePaper display type:
- For 50 Pin ePaper displays → set the jumper to 50 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::


## Getting Started

:::tip
Currently, the XIAO ePaper Display Board(ESP32-S3) - EE04 only offers HMI firmware for the 7.5-inch and 7.3-inch models. Updates will be provided in the future.
:::

### Sense Craft HMI Visit 

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) in your web browser and create an account or `Log in`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi20.png" style={{width:1000, height:'auto'}}/></div>


### Device Flasher

Click `Tool` in the top menu bar to access our configuration page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi33.png" style={{width:1000, height:'auto'}}/></div>

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="7.3-Inch ePaper Display" default>

***Setp 1 .*** `Select` the 7.3-Inch ePaper display model

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi7.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Select the latest `firmware` and Click `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** `Scan` the QR code on the ePaper for network configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi36.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

:::note
- Updating the firmware ensures optimal performance and access to the latest features. It's recommended to perform this update before using your device for the first time.

- It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, then you may need to wake up the device by pressing the green button on the top of the unit and try again.
:::
</TabItem>

<TabItem value="7.5-Inch ePaper Display" label="7.5-Inch ePaper Display" default>

***Setp 1 .*** Select the 7.5-Inch ePaper display model

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi8.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Select the latest `firmware` and Click `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

:::note

- Updating the firmware ensures optimal performance and access to the latest features. It's recommended to perform this update before using your device for the first time.

- It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, then you may need to wake up the device by pressing the green button on the top of the unit and try again.
:::

</TabItem>

</Tabs>

### Network Setup

***Setp 1 .*** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are XIAO ePaper Display Board(ESP32-S3) - EE04 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***Setp 2 .*** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to 192.168.4.1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***Setp 3 .*** Select your local Wi-Fi network and enter the password, then click `Connect`.

:::tip
The XIAO ePaper Display Board(ESP32-S3) - EE04 only support 2.4GHz WiFi networks, not 5GHz or other bands.
:::

***Setp 4 .*** Upon successful connection, the device will emit a confirmation beep and display a pairing code screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### Connecting to SenseCraft Platform

***Setp 1 .*** Navigate to the Workspace section and click `Add Device`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***Setp 2 .*** Name your device and enter the pairing code displayed on your device's screen and click `Create`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***Setp 3 .*** After pairing is complete, the device will display your device.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:700, height:'auto'}}/></div>


## Creating Dashboard

The XIAO ePaper Display Board(ESP32-S3) - EE04 integrates seamlessly with the SenseCraft HMI platform, which provides powerful tools for creating and customizing content for your device. Instead of detailing step-by-step operations here, let's explore the platform's key features to help you understand what's possible.

:::note
This demonstration uses a 7.3-Inch screen as an example. If replacing with a different size, note the following:

- Confirm the orientation of the screen flex cable (front and back);
- Verify the number of pin headers matches;
- Use the corresponding size cover cap;
- Avoid bending or excessive folding when installing the flex cable.
:::

### SenseCraft HMI Features SenseCraft HMI

#### AI Generator

Let artificial intelligence design your dashboard! Simply describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout. This is perfect for quickly generating weather displays, calendars, to-do lists, or informational panels without manual design work.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**Dashboard Preview**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi22.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Gallery

Transform your XIAO ePaper Display Board(ESP32-S3) - EE04 into a digital photo frame with the Gallery feature. Upload your favorite images, and the platform will optimize them for the ePaper display. Create slideshows with custom transition times.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

**Dashboard Preview**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi21.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Canvas 

Design your dashboard from scratch with Canvas, a drag-and-drop interface offering various elements:

- Text blocks with customizable fonts and sizes
- Image placeholders
- Widgets for time, date, and weather
- Data visualization tools
- Shapes and dividers for layout organization

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**Dashboard Preview**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### RSS Feed Integration


Stay updated with your favorite news sources, blogs, or websites by adding RSS feeds to your dashboard. The RSS feature allows you to display headlines, summaries, or full articles from multiple sources.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**Dashboard Preview**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi23.png" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Web Content Display

Let artificial intelligence design your dashboard! Simply describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout. This is perfect for quickly generating weather displays, calendars, to-do lists, or informational panels without manual design work.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

**Dashboard Preview**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi24.png" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>


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
