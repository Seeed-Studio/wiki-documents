---
description: Enable visual interface design for the XIAO EE04 ePaper Display using the SenseCraft HMI platform.
title: XIAO ePaper Display Board EE04 with the SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board EE04 with the SenseCraft HMI

## Introduction

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is Seeed Studio's powerful cloud-based interface design platform that enables you to create professional visual interfaces for screen-based devices without coding. With an intuitive drag-and-drop editor, pre-built templates, and AI-powered design capabilities, SenseCraft HMI makes it easy to transform your hardware into beautiful information displays, dashboards, digital signage, and control panels.

With the launch of the ***XIAO ePaper Display Board(ESP32-S3) - EE04***, this capability extends even further. Building on the power of SenseCraft HMI, the XIAO ePaper Display Board(ESP32-S3) - EE04 seamlessly integrates with the platform, allowing users to design and deploy customized visual interfaces effortlessly. With this integration, you can create elegant and low-power ePaper dashboards, information panels, or smart home displays directly from the SenseCraft HMI editor — all without writing a single line of code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>


## Hardware Overview

This tutorial uses the XIAO ePaper Display Board (ESP32-S3) - EE04 paired with the 7.3" Spectra™ 6 E-Ink display to complete the hands-on exercises.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" spectra™ 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### ePaper Display Supported Types

This XIAO ePaper Display Board(ESP32-S3) - EE04 offers two connector options — 24-pin and 50-pin — supporting various screen sizes. Choose the one that matches your display from the list below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

#### 24-Pin Connector

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
When using the XIAO ePaper Display Board(ESP32-S3) - EE04, make sure to set the jumper according to the ePaper display type:

- For 24 Pin ePaper displays → set the jumper to 24 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::

#### 50-Pin Connector

- [7.3-Inch Spectra6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
When using the XIAO ePaper Display Board(ESP32-S3) - EE04, make sure to set the jumper according to the ePaper display type:
- For 50 Pin ePaper displays → set the jumper to 50 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::


## Getting Started

Use the XIAO ePaper Display Board(ESP32-S3) - EE04 to quickly create your own interactive HMI project.
Simply connect the board, open [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), and begin designing your interface directly in the browser — no coding required.

### SenseCraft HMI Registration 

First, click the button in the upper-right corner to register for an account on the [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) platform.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>


### XIAO ePaper Display Board EE04 Firmware Flashing

After completing the registration, click **“Tools”** in the menu bar to enter the firmware flashing section.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Currently, the XIAO ePaper Display Board(ESP32-S3) - EE04 following ePaper screens are supported:
- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3-inch Spectra6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)
:::

On this page, you will find tutorial firmware for two ePaper display models: the **7.3” Full-Color Display (800×480)** 

If you’d like to use an ePaper display of a different size, simply follow the same steps below.

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="7.3 Full Color Display 800*480 "default>

***Setp 1 .*** `Select` the 7.3 "Full Color Display 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Select the latest firmware `EE04_7_3_color_1.0.5`
:::tip
The SenseCraft HMI platform is regularly updated, and new firmware versions are released from time to time.

Be sure to select and use the latest firmware version to ensure the best compatibility and performance.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** Click **Flash** to upload the **7.3” Full-Color Display (800×480)** firmware to the XIAO ePaper Display Board (ESP32-S3) - EE04.

After clicking Flash, the platform will prompt a port selection window. Choose the port corresponding to your XIAO ePaper Display Board (ESP32-S3) - EE04 to establish the connection.

- Full Flash : Enabling Full Flash clears all device stored information, including Wi-Fi networks and user panel datas.

:::tip
If no port appears, simply press the RESET button on the board to refresh the connection.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

***Setp 4 .*** Check the Display Output

After the firmware has been successfully flashed, the ePaper display will briefly flicker and then show the following screen.
You will see two QR codes, each leading to a different page when scanned.

- User Guide : Navigate to the HMI Basic Usage section in the [wiki](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/).

- Wi-Fi Setup : Under Local Network Settings, set up your device to connect with SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

The configuration is not yet complete. Please continue following the steps below to **Network Setup** finish the setup.

</TabItem>

<!-- <TabItem value="7.5-Inch ePaper Display" label="7.5 Monochrome Display 800*480 "default>

***Setp 1 .*** `Select` the 7.5 "Monochrome Display 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi91.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Select the latest firmware `EE04_7_5_mono_1.0.5`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** Click **Flash** to upload the **7.5 "Monochrome Display 800*480** firmware to the XIAO ePaper Display Board (ESP32-S3) - EE04.

After clicking Flash, the platform will prompt a port selection window. Choose the port corresponding to your XIAO ePaper Display Board (ESP32-S3) - EE04 to establish the connection.

- Full Flash : Enabling Full Flash clears all device stored information, including Wi-Fi networks and user panel datas.

:::tip
If no port appears, simply press the RESET button on the board to refresh the connection.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi66.png" style={{width:1000, height:'auto'}}/></div>


***Setp 4 .*** Check the Display Output

After the firmware has been successfully flashed, the ePaper display will briefly flicker and then show the following screen.
You will see two QR codes, each leading to a different page when scanned.

- User Guide : Navigate to the HMI Basic Usage section in the wiki (wiki)(https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

- Wi-Fi Setup : Under Local Network Settings, set up your device to connect with SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

The configuration is not yet complete. Please continue following the steps below to **Network Setup** finish the setup.


</TabItem> -->

</Tabs>

### Network Setup

***Setp 1 .*** Connect to the ePaper DIY Kit's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are XIAO ePaper Display Board(ESP32-S3) - EE04 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***Setp 2 .*** Once connected, Scan the QR code above the ink screen ,your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to 192.168.4.1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***Setp 3 .*** Select your local Wi-Fi network and enter the password, then click `Connect`.

:::tip
The XIAO ePaper Display Board(ESP32-S3) - EE04 only support 2.4GHz Wi-Fi networks, not 5GHz or other bands.
:::

***Setp 4 .*** After the connection is completed, the screen will display the corresponding pair code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### Add to SenseCraft Platform

***Setp 1 .*** Navigate to the Workspace section and click `Add Device`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***Setp 2 .*** Name your device and enter the pair code displayed on your device's screen and click `Create`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***Setp 3 .*** After completing the pair, you can see your device name under Workspace.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

Now that we've successfully connected the XIAO ePaper Display Board (ESP32-S3) - EE04 to our device, we can start exploring the basic features in SenseCraft HMI.

## Creating Dashboard

The XIAO ePaper Display Board(ESP32-S3) - EE04 integrates seamlessly with the SenseCraft HMI platform, which provides powerful tools for creating and customizing content for your device. Instead of detailing step-by-step operations here, let's explore the platform's key features to help you understand what's possible.

:::note
This demonstration uses a 7.3-Inch screen as an example. If replacing with a different size, note the following:

- Confirm the orientation of the screen flex cable (front and back).
- Verify the number of pin headers matches.
- Use the corresponding size cover cap.
- Avoid bending or excessive folding when installing the flex cable.
:::

### SenseCraft HMI Features

Next, we'll explore the five basic features of SenseCraft HMI with simple usage examples. For more in-depth information, click the [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/) below for detailed explanations of additional features.

#### AI Generator

Let artificial intelligence design your dashboard! Simply describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout. This is perfect for quickly generating weather displays, calendars, to-do lists, or informational panels without manual design work.

Learn more about [AI Generatorllery](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>



<br></br>

**ePaper Display Result**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Gallery

Transform your XIAO ePaper Display Board(ESP32-S3) - EE04 into a digital photo frame with the Gallery feature. Upload your favorite images, and the platform will optimize them for the ePaper display. Create slideshows with custom transition times.

Learn more about [Gallery](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>


<br></br>


**ePaper Display Result**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Canvas 

Design your dashboard from scratch with Canvas, a drag-and-drop interface offering various elements:

- Text blocks with customizable fonts and sizes
- Image placeholders
- Widgets for time, date, and weather
- Data visualization tools
- Shapes and dividers for layout organization

Learn more about [Canvas](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**ePaper Display Result**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### RSS Feed Integration


Stay updated with your favorite news sources, or websites by adding RSS feeds to your dashboard. The RSS feature allows you to display headlines, summaries, or full articles from multiple sources.

You need to copy the hyperlink here. Below are two recommended options:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

Learn more about [RSS Feed Integration](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**ePaper Display Result**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

#### Web Content Display

Let artificial intelligence design your dashboard! Simply describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout. This is perfect for quickly generating weather displays, calendars, to-do lists, or informational panels without manual design work.

Learn more about [Web Content Display](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

<br></br>

**ePaper Display Result**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>


## Reference & Resources

***SenseCraf HMI***

- [Getting Started with SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/): Gain a deeper understanding of how to use SenseCraft HMI to help you maximize its capabilities and enhance your projects.

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
