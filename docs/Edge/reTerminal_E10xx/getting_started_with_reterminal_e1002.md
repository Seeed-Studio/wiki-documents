---
description: This article will guide you to quickly get started with reTerminal E1002.
title: Getting Started with reTerminal E1002
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

:::caution Update Firmware Tips
We recommend that you **[complete your product's firmware update](#preliminary)** as soon as you receive it for the best experience.
:::

:::danger Screen life warning
1. If your reTerminal has been idle for a long time, you can long press the green button on the device for 5 seconds to clear the screen content (using the factory firmware), which can effectively prevent the residual shadow and increase the screen life.

2. Whenever possible, do not display a screen for a long period of time (more than 1 day), as this may create a residual image, and it is recommended that the screen's image be refreshed at least once a day. If the device is not used for a long time, it is recommended to clear the device display content.

3. Please refresh the screen as infrequently as possible when using and debugging the program. Refreshing the screen at high speed for a long period of time may also reduce the service life of the screen.
:::

## Introduction

reTerminal E1002 is a 7.3 inch open-source full color ePaper display with exceptional 3-month battery life. Powered by ESP32-S3, it natively supports our SenseCraft HMI no-code UI platform for effortless dashboard creation,  while supporting Home Assistant, TRMNL E-ink dashboard, Arduino and ESP-IDF for further development. With the E Ink® Spectra™ 6 full-color ePaper Display, it's perfect for digital frame, colorful dashboard visulization.

### Features

- **Beautiful, Ready-to-Use E Ink® Spectra™6 Color ePaper Display**
- **Ultra-Low Power with 3-Month Battery Life**
- **No-Code UI Design & Deployment with SenseCraft HMI**
- **Works with Popular Software Platforms**
- **Flexible Hardware & Software Customization**

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

The reTerminal E1002 hardware includes:

1. **7.3-inch full-Color ePaper Display**: Full-color display with 800×480 resolution
2. **Buttons**: Located at the top of the device for manual screen usage
3. **Microphone**
4. **MicroSD Card Slot**: For expandable storage
5. **Power Switch**: Located on the back for powering the device on/off
6. **Status LED**: User indicator (green)
7. **Power LED**: Charge indicator (red)
8. **USB-C Port**: For charging and firmware updates
9. **Expansion Port**: 8-pin expansion header providing VDD, GND, I2C, and GPIO connections

## Getting Started

### Preliminary

**Step 1.** Unbox your reTerminal E1002 and ensure all components are included:
- reTerminal E1002 device
- USB-C cable
- Quick start guide

**Step 2.** (Optional) Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
The reTerminal E Series ePaper Display only supports MicroSD cards up to 32GB in Fat32 format.
:::

**Step 3.** (Optional) Install USB drivers if needed:

Depending on your operating system, you may need to install USB drivers to ensure proper communication with your reTerminal E1002:

- **For Mac computers**: Download and install the CH34X driver from [WCH official website](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

- **For Windows computers**: 
  - Windows 11 systems typically include the driver by default
  - For Windows 10 and earlier versions, you may need to download and install the CH341 driver from [WCH official website](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

- **For Linux systems**: Most modern Linux distributions include the necessary drivers by default

**Step 4.** Update the firmware to ensure your device is running the latest version:

1. Connect your reTerminal E1002 to your computer using the USB-C cable

2. Power on the device using the power switch on the back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. Visit **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** and sign in to your account

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. Navigate to the **Workspace** section

5. Click on **Device Flasher** in the upper right corner

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. Select your reTerminal E1002 device from the list. According to this tutorial, you should choose **reTerminal E1002 7.3" Full Color Display**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. Choose the latest firmware version from the dropdown menu

8. Click **Flash** and wait for the update process to complete

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
1. Updating the firmware ensures optimal performance and access to the latest features. It's recommended to perform this update before using your device for the first time.

2. It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, then you may need to wake up the device by pressing the green button on the top of the unit and try again.
:::

### Power On

**Step 1.** Power on the device by sliding the power switch to the **ON** position. The power switch is located on the back of the unit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**Step 2.** On first boot, the device will display product information and network setup instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**Step 3.** The green user LED will light up for approximately 30 seconds, indicating the device is powered on and initializing. 30 seconds of no operation of the device, in order to ensure the power, the device will automatically enter the sleep mode, the LED light will automatically turn off.

:::tip
So, we need to complete the next steps of configuring the network during this time. When the device goes to sleep, you will not be able to find the device's hotspot. If this is the case, you can wake up the device by clicking once on the device's green Wake button.
:::

### Network Setup

<Tabs>
<TabItem value="Network Setup vis PC" label="Network Setup vis PC" default>

**Step 1.** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are `reTerminal E1002-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** Select your local Wi-Fi network and enter the password, then click "Connect".

:::note
The reTerminal E Series ePaper Display only supports 2.4GHz WiFi networks, not 5GHz or other bands.
:::

**Step 4.** Upon successful connection, the device will emit a confirmation beep and display a pairing code screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### Connecting to SenseCraft Platform

**Step 1.** Visit [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) in your web browser and create an account or sign in.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Step 2.** Navigate to the **Workspace** section and click **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Name your device and enter the pairing code displayed on your device's screen and click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Once paired, the device will display a message prompting you to create your first dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Network Setup vis SenseCraft APP">

This method uses the SenseCraft mobile app to configure the device's network and add it to your SenseCraft account via Bluetooth.

First, download the SenseCraft App. You can find it by searching "SenseCraft" on the Google Play Store or Apple App Store. Alternatively, you can download it from this website.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Step 1.** Open the SenseCraft App, sign in to your account, and navigate to the **User** tab. Tap on **Device Bluetooth Configuration** to begin the process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Step 2.** On the "Please select the device type" screen, choose your reTerminal model (e.g., **reTerminal E1001** or **reTerminal E1002**).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Step 3.** Follow the on-screen instructions to put your device into Bluetooth broadcast mode. This is typically done by pressing the **Up** and **Down** page buttons simultaneously. Ensure your phone's Bluetooth is enabled. Tap **Scan**, and the app will discover nearby devices. Select your device from the list to connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Step 4.** Once connected via Bluetooth, the app will prompt you to set up the Wi-Fi connection. Select your local 2.4GHz Wi-Fi network from the dropdown list, enter the password, and tap **Next**.

:::note
The device can only be configured via a 2.4G Wi-Fi network.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Step 5.** The app will send the Wi-Fi credentials to the device and add it to your SenseCraft account. A "Device added successfully" message will appear upon completion. You can now tap **Start exploring!** to proceed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Step 6.** Your reTerminal will now appear in your device list on the main **Device** tab of the app, successfully connected to your SenseCraft account.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Step 7.** You can tap on the device in the list to view its **Device Detail** page. From here, you can manage the device and upload photos. For more complex dashboard and canvas design, you will be prompted to use the web browser version of SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

## Creating a Dashboard

The reTerminal E1002 integrates seamlessly with the SenseCraft HMI platform, which provides powerful tools for creating and customizing content for your device. Instead of detailing step-by-step operations here, let's explore the platform's key features to help you understand what's possible.

### SenseCraft HMI Features

**AI Generator**

Let artificial intelligence design your dashboard! Simply describe what information you want displayed, and the AI Generator will automatically create an attractive, functional layout. This is perfect for quickly generating weather displays, calendars, to-do lists, or informational panels without manual design work.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Gallery**

Transform your reTerminal E1002 into a digital photo frame with the Gallery feature. Upload your favorite images, and the platform will optimize them for the ePaper display. Create slideshows with custom transition times.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

Design your dashboard from scratch with Canvas, a drag-and-drop interface offering various elements:
- Text blocks with customizable fonts and sizes
- Image placeholders
- Widgets for time, date, and weather
- Data visualization tools
- Shapes and dividers for layout organization

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**RSS Feed Integration**

Stay updated with your favorite news sources, blogs, or websites by adding RSS feeds to your dashboard. The RSS feature allows you to display headlines, summaries, or full articles from multiple sources.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**Web Content Display**

Capture and display specific web content on your device. The Web feature can render selected portions of websites, allowing you to display information like transit schedules, stock tickers, or other online data sources.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### Getting Started with SenseCraft HMI

After pairing your device with the SenseCraft platform as described in the previous section, you'll be ready to create your first dashboard. For detailed instructions on using each feature, please refer to the corresponding Wiki pages:

- [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/)

Once you've created and saved your dashboard in the SenseCraft platform, simply click "Deploy to Device," select your paired reTerminal E1002, and your custom content will be wirelessly transmitted to the device. The ePaper display will update to show your dashboard, and you can use the navigation buttons to switch between multiple pages if you've created them.

## Operating the Device

### Refresh Button

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

The refresh button at the top of the device serves several functions:

- **Single Press**: Manually refreshes the display and checks for new content from the SenseCraft platform. The buzzer will beep once to confirm the action. This button is also commonly used to wake up the device. You can use this button to wake up a device when it has gone to sleep and a dashboard refresh command is usually not immediately available to the device.

- **Long Press** (future functionality): Will activate voice input mode.

### Navigation Buttons

The left and right buttons allow you to navigate between multiple pages if your dashboard contains more than one page:

- **Left Button**: Navigate to the previous page

- **Right Button**: Navigate to the next page

### Network Reset

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

If you need to connect to a different Wi-Fi network:

**Step 1.** Press and hold both navigation buttons (left and right) simultaneously for 2 seconds.

**Step 2.** The device will enter Wi-Fi configuration mode, and you can follow the [Network Setup](#network-setup) steps again to connect to a new network.

### LED Indicators

- **Red LED**:
  - Off: Fully charged or not charging
  - Always on: charging

- **Green LED**:
  - On for 30 seconds at boot: Device is powering on

### Battery Operation

When operating on battery power:

- The device will automatically enter low-power mode between refreshes

- Battery life depends on refresh frequency (typically 3-month on a full charge with default settings)

- The device will display a low battery icon in the top-right corner when the battery level is below 20%

:::tip
If you want to write some code by yourself to read battery voltage, it will be more precise to add 10ms delay before analogRead() function.
:::

### Expansion Pins

The reTerminal E1002 features an 8-pin expansion header (J2) that provides connectivity options for adding external sensors, modules, or other hardware to extend the functionality of your device. This expansion header exposes several ESP32-S3 GPIO pins and communication interfaces, making it a versatile connection point for your DIY projects.

#### Expansion Header Pinout

The 8-pin expansion header (J2) has the following pinout:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pin (from top to bottom)</th>
			<th>Label</th>
			<th>ESP32-S3 Pin</th>
			<th>Function</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>1</td>
			<td>HEADER_3V3</td>
			<td>-</td>
			<td>Power</td>
			<td>3.3V power supply for external devices</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>Ground</td>
			<td>Common ground reference</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>General purpose I/O with analog input capability</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>General purpose I/O with analog input capability (ADC1 channel 4)</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIO or UART transmit (TX) signal</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIO or UART receive (RX) signal</td>
		</tr>
		<tr>
			<td>7</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO or I2C clock signal</td>
		</tr>
		<tr>
			<td>8</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO or I2C data signal</td>
		</tr>
	</table>
</div>

## Device Placement

The reTerminal E1002 comes with a 3D-printed support stand accessory that allows you to position the device upright for optimal viewing:

**Step 1.** Locate the 3D-printed support stand included in the package.

**Step 2.** Position the support stand against the designated mounting area on the bottom back of the reTerminal E1002 where the embedded nuts are located.

**Step 3.** Use a long screwdriver to secure the stand to the device by tightening the screws into the embedded nuts on the back of the reTerminal E1002.

**Step 4.** Once securely attached, place the reTerminal E1002 on a flat surface where the stand will support it in an upright position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
The stand provides a fixed viewing angle and cannot be adjusted. This fixed positioning is designed to offer optimal visibility in most usage scenarios.

The stand allows the device to be placed on desks, countertops, or shelves, making it ideal for use as an information display, control panel, or digital photo frame in various environments.
:::

## Troubleshooting

### Q1: Device Won't Power On

- Ensure the power switch is in the ON position
- Connect the USB-C cable to charge the device
- Check if the red LED is always on (indicating charging)
- If using battery power, ensure the battery is properly connected and charged

### Q2: Can't Connect to Wi-Fi

- Verify you're entering the correct Wi-Fi password
- Ensure your Wi-Fi network is operational
- Check if your Wi-Fi router supports 2.4GHz networks (5GHz is not supported)
- Try positioning the device closer to your Wi-Fi router

### Q3: Display Not Updating

- Press the refresh button to manually trigger an update
- Verify the device is connected to Wi-Fi (no disconnection icon in the corner)
- Check your SenseCraft account to ensure the dashboard is properly deployed
- If the problem persists, try restarting the device

### Q4: Network Connection Lost

- The device will automatically attempt to reconnect to known networks
- When reconnected, the Wi-Fi disconnection icon will disappear
- If unable to reconnect, follow the Network Reset procedure above

## Resources

- [reTerminal E1002 Schematic (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1.0_SCH_250805.pdf)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI Platform Documentation](https://wiki.seeedstudio.com/sensecraft_hmi_overview)
- [Exterior overall 3D model STP file](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/getting_started_with_reterminal_e1002) -->

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
