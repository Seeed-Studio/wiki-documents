---
description: Getting Started with EE03 10.3-inch E-ink Driver Board
title: Getting Started with EE03
keywords:
  - E-ink
  - Driver Board
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.webp
slug: /getting_started_with_ee03
sidebar_position: 2
sku: 100080566
last_update:
  date: 9/2/2026
  author: Nemo
createdAt: '2026-03-02'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/getting_started_with_ee03/
---

# Getting Started with XIAO ePaper Display Board - EE03

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE03</th>
        <th>10.3" Monochrome ePaper Display</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introduction

Powered by **XIAO ESP32-S3 Plus**, the ePaper driver board EE03 supports **10.3 Monochrome ePaper Display**. It features a JST 2.0 mm battery connector with power switch, built-in charging IC, and comes with one reset and three user buttons. Well-suited for low-power ePaper projects such as digital photo frames and information boards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### Features

- **Built in XIAO ESP32-S3 Plus:** Works immediately when connected to a compatible ePaper display.
- **Dedicated 10.3" Monochrome ePaper Display Support:** Specifically designed for 10.3" high-speed refresh epaper display, ensuring quick setup and stable operation.
- **High-Speed Refresh Enabled:** Integrated T-CON timing control ensures precise high-speed driving, while the onboard SHT40 provides real-time temperature sensing for waveform compensation.
- **BAT Connector with Switch:** Provides simple battery connection and integrates a switch, enabling efficient power management and energy savings.
- **User-Friendly Buttons:** Features 1 reset button and 3 user-programmable buttons, providing flexibility for project acceleration and customizable functions.
- **SenseCraft HMI Firmware Pre-Flashed:** Simply plug in and start right away with SenseCraft HMI, our AI-powered no-code UI design platform. Choose from rich templates or drag-and-drop UI building (with optional AI assistance), and deploy to the ePaper display in just a few clicks.

### Specification

| Parameter | Description |
| :--- | :--- |
| **Processor** | XIAO ESP32-S3 Plus |
| **ePaper Connector** | FPC 40 Pin 0.5mm |
| **Battery Connector** | JST 2.0mm |
| **Switch** | Battery Power ON/OFF |
| **Power Supply** | - 3.7V Li-Battery<br/>- USB Type-C |
| **Button** | - 1x Reset button<br/>- 3x User button |

### Application

- **Digital E-Book Readers:** Deliver a paper-like monochrome reading experience with 16-level grayscale and fast refresh for smoother page turns and more responsive updates.
- **Real-Time Dashboard:** Display live information such as weather updates, calendar schedules, key notifications, and data widgets like energy usage, sensor status, or KPIs.
- **Security Alerts:** Display alerts and notifications about security events, such as motion detection or door/window sensor activation.
- **Public Transit Arrival Board:** Show real-time bus/train arrival times, route status, and service alerts at a glance for daily commuting.

## Hardware Overview
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: For power supply and firmware flashing.
- **FPC Connector**: To connect the ePaper display.
- **Reset Button**: To reset the board.
- **User Buttons**: Programmable buttons for user interaction.
- **Power Switch**: Control the power of battery on/off.
- **Boot Button**: Used for entering bootloader mode.
- **LED Indicators**: Status indicators for power and charging.
- **JST Connector**: 2 pins JST 2.0mm connector to connect battery.

## Getting Started with SenseCraft HMI

This section will guide you through connecting your EE03 to the SenseCraft HMI platform, allowing you to easily update the screen content wirelessly.

### Equipment Installation

**Step 1. Connect the Screen and Board**
Carefully connect the FPC cable of your ePaper screen to the connector on the EE03 driver board. Ensure the locking mechanism is secure.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.gif" style={{width:800, height:'auto'}}/></div>

**Step 2. Power On**
Connect the EE03 board to a power source (computer or USB adapter) using a USB Type-C cable. Upon powering up, the screen will refresh and display a welcome image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300,height:'auto'}}/></div>

**Step 3. Enter Network Configuration Mode**
After the welcome image, the screen will automatically refresh to show the Network Configuration interface. This indicates the device is ready to connect to Wi-Fi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.png" style={{width:300,height:'auto'}}/></div>


### Network Configuration

**Step 4. Configure Wi-Fi via Mobile Phone**
Use your mobile phone to scan the QR code displayed on the screen. Follow the prompts on your phone to enter your local Wi-Fi SSID and password to connect the EE03 to the internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Step 5. Obtain Pair Code**
Once the network configuration is successful, the screen will refresh again and display a unique **Pair Code**. You will need this code for the next step.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Platform Binding & Update

**Step 6. Bind Device on SenseCraft HMI**
Go to the [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device). Log in to your account. Navigate to the device management section and select "New Device". Enter the Pair Code displayed on your E-ink screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Step 7. Create and Push New Interface**     
On the SenseCraft HMI platform, select the template suitable for the 10.3-inch screen to create a new interface or upload an image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.png" style={{width:500, height:'auto'}}/></div>

**Step 8. Apply your images**
Once finished, click the "Apply" button and select your EE03 device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.png" style={{width:800, height:'auto'}}/></div>

**Step 9. Display on the screen**
Finally the EE03 will receive the data and refresh the 10.3-inch screen with your new content.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.png" style={{width:300, height:'auto'}}/></div>


## Getting Started with Arduino

### Install Seeed GFX2 Library

:::tip
This library has the same function as the TFT library and is **not** compatible with it. If you have installed the TFT library or other similar display libraries, please uninstall them first.
:::

Download and install the Seeed GFX2 library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configure and burn the program

As shown in the image, navigate to the example through this menu:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE03 → 10.3 Monochrome ePaper Display → 10_3_inch_Monochrome_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/8.png" style={{width:800, height:'auto'}}/></div>

After that, go to **Tools** -> **Board** -> **XIAO ESP32S3 Plus** and **Tools** -> **Port** -> **Select the port your board is connected to**. 

Note that PSRAM must be enabled.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Then click **Upload** to upload the code.
Now you will see the feedback in your epaper screen! Following is the result of the HelloWorld example.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.png" style={{width:500, height:'auto'}}/></div>


## Troubleshooting

**Q1: The screen does not refresh after powering on.**
*   Check if the FPC cable is correctly inserted and locked.
*   Ensure the USB Type-C cable provides sufficient power.
*   Press the Reset button to restart the board.
*   For Arduino users: make sure PSRAM is enabled in **Tools** → **PSRAM** → **OPI PSRAM**.

**Q2: Wi-Fi configuration fails.**
*   Ensure your Wi-Fi network is 2.4GHz.
*   Check if the Wi-Fi password was entered correctly.

**Q3: The screen display is blurry or has ghosting.**
*   This can happen if the screen hasn't been refreshed for a long time or if the power supply is unstable. Try refreshing the screen again via the HMI platform.

**Q4: The screen makes a high-frequency buzzing sound during refresh.**
*   This is normal for ePaper displays. The high-voltage driving circuit produces an audible sound during the refresh cycle, especially with larger screens. It does not indicate a hardware fault and will stop once refresh is complete.

**Q5: SenseCraft HMI device binding fails.**
*   Double-check that the Pair Code is entered correctly (case-sensitive).
*   Make sure your phone and the device are on the same 2.4GHz Wi-Fi network during device binding.
*   If the device shows as offline, press the Reset button and try binding the device again.

## Resources
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
