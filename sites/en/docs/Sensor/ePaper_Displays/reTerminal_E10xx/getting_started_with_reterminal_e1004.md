---
description: reTerminal E1004 is a 13.3-inch open-source full-color ePaper display powered by ESP32-S3, featuring E Ink® Spectra™ 6 technology and SenseCraft HMI support.
title: Getting Started with reTerminal E1004
sidebar_position: 5
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 4/24/2026
  author: Citric
createdAt: '2026-01-29'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::tip Try demos without setting up a development environment
If you want to quickly preview project results or try the basic demo firmware before setting up a development environment, open the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. You can choose a supported reTerminal E Series device and flash demo firmware directly from a browser.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Introduction

reTerminal E1004 is a 13.3 inch open-source full color ePaper display with up to 6-month battery life. Powered by ESP32-S3, it natively supports our SenseCraft HMI no-code UI platform for effortless dashboard creation, while supporting Home Assistant, Arduino and ESP-IDF for further development. With the E Ink® Spectra™ 6 full-color ePaper Display, it's perfect for digital frame, colorful dashboard visualization.

### Features

- High-resolution, Beautiful and Ready-to-Use E Ink® Spectra™ 6 Color ePaper Display
- No-Code UI Design & Deployment with SenseCraft HMI
- Image Slideshows with Live Data Sync & Battery Lasts for Months
- Adapting to decoration and display needs in different scenarios

## Specification

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Description</th>
		</tr>
		<tr>
			<td align="center"><strong>Product Name</strong></td>
			<td align="center">reTerminal E1004</td>
		</tr>
		<tr>
			<td align="center"><strong>Processor</strong></td>
			<td align="center">ESP32-S3 with 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Storage</strong></td>
			<td align="center">32MB Flash, support Micro SD card (Up to 32GB, 16GB included)</td>
		</tr>
		<tr>
			<td align="center"><strong>Display</strong></td>
			<td align="center">13.3" Spectra™ 6 Full Color ePaper</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolution</strong></td>
			<td align="center">1200 x 1600 Pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Wireless Connectivity</strong></td>
			<td align="center">2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensors</strong></td>
			<td align="center">Temperature, Humidity sensors</td>
		</tr>
		<tr>
			<td align="center"><strong>Audio</strong></td>
			<td align="center">Buzzer (Sound alert)</td>
		</tr>
		<tr>
			<td align="center"><strong>Battery</strong></td>
			<td align="center">5000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Power Input</strong></td>
			<td align="center">USB-C 5V / 1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Working Temperature</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensions</strong></td>
			<td align="center">376mm x 311mm x 40mm</td>
		</tr>
	</table>
</div>

## Applications

- **Low-power Electronic Photo Frame:** Display high-resolution family photos or art with paper-like quality without worrying about daily charging.
- **Family Information Board:** Keep track of calendars, notifications, weather, and news in a stylish, always-on format.
- **Home Automation Dashboard:** Visualize real-time smart home data (temperature, humidity, air quality) via Home Assistant.
- **Smart Office Display:** Show meeting room schedules, availability, or directional guidance.
- **Retail & Public Signage:** Energy-efficient menus, schedules, or occupancy indicators.
- **Education & Prototyping:** An ideal platform for learning IoT, embedded systems, and UI design.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/209.png" style={{width:1000, height:'auto'}}/></div>

1. **ePaper Display:** 13.3" E Ink® Spectra™ 6 full color ePaper display area.
2. **Touch Buttons:** Capacitive touch buttons on the front bezel for screen refresh and page navigation (previous / next).
3. **Page Up / Down / Refresh Buttons:** Physical buttons on the back for page turning and manually refreshing the ePaper display.
4. **Red Charging LED:** Indicates the battery charging status.
5. **USB-C Data and Charge Port:** For charging the device and data transmission.
6. **Power Switch:** To turn the device power on or off.
7. **Green Status LED:** Indicates the current operational or system status.
8. **Reset Button:** For resetting the device.
9. **Boot Button:** Used for entering boot / firmware download mode.
10. **Expansion Port:** 2 × 4 pin header providing VDD, GND, UART, I2C, GPIO, and ADC connections for external sensors, modules, or peripherals.
11. **Stand Mounting Inserts:** Threaded inserts on the back for securing the device onto its stand.

## Getting Started

The reTerminal E1004 comes pre-loaded with firmware that supports **SenseCraft HMI**, a no-code platform that allows you to design and deploy personalized dashboards effortlessly.

### Preliminary

**Step 1.** Unbox your reTerminal E1004 and ensure all components are included:

- reTerminal E1004 device
- USB-C cable
- Quick start guide
- screwdriver
- screws
- Metal support stand (supports both portrait and landscape orientation)

**Step 2.** (Optional) Attach the metal support stand to place the device in either portrait or landscape orientation:

Locate the metal stand included in the package. The stand uses the threaded inserts on the back of the reTerminal E1004 — you can mount it vertically for portrait orientation or rotate it 90° and mount to the alternate set of inserts for landscape orientation. Use the included screwdriver and screws to secure the stand. Once attached, place the reTerminal E1004 on a flat surface; the stand will support it in the chosen orientation.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Step 3.** (Optional) Replace or remove the microSD card.

The reTerminal E1004 comes with a pre-installed 16GB microSD card, so in most cases you do not need to insert one yourself. If you want to swap it for a different card or take the card out, refer to the video below for guidance.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/214.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
The reTerminal E Series ePaper Display only supports MicroSD cards up to 32GB in Fat32 format.  
The 32GB SD card is formatted as exFAT by default. After formatting it to FAT32, it can be successfully mounted and used to store images.
:::

**Step 4.** (Optional) Install USB drivers if needed:

Depending on your operating system, you may need to install USB drivers to ensure proper communication with your reTerminal E1004:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 systems typically include the driver by default
- For Windows 10 and earlier versions, you may need to download and install the CH341 driver from [WCH official website](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

Download and install the CH34X driver from [WCH official website](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

</TabItem>

<TabItem value="Linux" label="Linux">

Most modern Linux distributions include the necessary drivers by default

</TabItem>
</Tabs>

### Power On

**Step 1.** Power on the device by sliding the power switch to the **ON** position. The power switch is located on the back of the unit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/215.gif" style={{width:600, height:'auto'}}/></div>

**Step 2.** On first boot, the device will display product information and network setup instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/212.png" style={{width:400, height:'auto'}}/></div><br />

**Step 3.** The green user LED will light up for approximately 3 seconds, indicating the device is powered on and initializing. 30 seconds of no operation of the device, in order to ensure the power, the device will automatically enter the sleep mode, the LED light will automatically turn off.

:::tip
So, we need to complete the next steps of configuring the network during this time. When the device goes to sleep, you will not be able to find the device's hotspot. If this is the case, you can wake up the device by pressing the **Refresh** touch button on the front bezel, or the **Refresh** physical button on the back of the unit.
:::

### Network Setup

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**Step 1.** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are `reTerminal E1004-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** Select your local Wi-Fi network and enter the password, then click "Connect".

:::note
The reTerminal E Series ePaper Display only supports 2.4GHz WiFi networks, not 5GHz or other bands.
:::

**Step 4.** Upon successful connection, the device will emit a confirmation beep and display a pairing code screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.png" style={{width:400, height:'auto'}}/></div>

### Connecting to SenseCraft Platform

**Step 1.** Visit [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) in your web browser and create an account or sign in.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Step 2.** In the left sidebar, click **Device** to enter the Device page, then click the **+ New Device** button in the upper-left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** Name your device and enter the pairing code displayed on your device's screen and click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 4.** Once paired, the device will display a message prompting you to create your first dashboard.

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

This method uses the SenseCraft mobile app to configure the device's network and add it to your SenseCraft account via Bluetooth.

First, download the SenseCraft App. You can find it by searching "SenseCraft" on the Google Play Store or Apple App Store. Alternatively, you can download it from this website.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Step 1.** Open the SenseCraft App, sign in to your account, and navigate to the **User** tab. Tap on **Device Bluetooth Configuration** to begin the process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Step 2.** On the "Please select the device type" screen, choose **reTerminal E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Step 3.** Follow the on-screen instructions to put your device into Bluetooth broadcast mode. Ensure your phone's Bluetooth is enabled. Tap **Scan**, and the app will discover nearby devices. Select your device from the list to connect.

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

### Firmware Update

After the device is successfully added to your SenseCraft account, the platform will automatically check the firmware version. If a newer firmware is available, you will be prompted to update.

You can also check the firmware version manually at any time:

**Step 1.** On the **Device** page, find your reTerminal E1004 to view its details, and note the **current firmware version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Step 2.** In the left sidebar, click **Tools** and open the **Firmware Flasher** tab to see the **latest firmware version** available for this device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** If the current version is older than the latest one, follow the 3-step flow on the Firmware Flasher page to update:

1. **Select your device** — plug the reTerminal E1004 into your computer via the USB-C cable, make sure the power switch is **ON**, then click **Select** and choose your device from the list.

2. **Select firmware** — choose the latest firmware from the release options dropdown.

3. **Flash** — click **Flash** and wait for the update to complete. Enable **Full Flash** only if you want to reset the device to factory state (all data, settings, and designs will be wiped).

:::note

1. Updating the firmware ensures optimal performance and access to the latest features.

2. It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, you may need to wake up the device by pressing the **Refresh** button on the unit and try again.

3. **Do a standard Flash** to keep your setup: Wi-Fi, deployed designs, and pictures are preserved. **Do a Full Flash to start fresh**: all data, settings, and designs are wiped (factory state).

:::

## Display Content on Your reTerminal E1004

Once your device is paired, you can start using it to display whatever you like. We recommend **SenseCraft HMI** — a no-code cloud platform that lets you design and deploy content to your reTerminal E1004 in just a few clicks.

SenseCraft HMI has its own dedicated Wiki with full tutorials and feature documentation. For in-depth guides (account setup, firmware flashing, advanced editor usage, deployment, etc.), please refer to:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Since this article is a product **Getting Started**, we will not repeat the same content here — the following only shows how to quickly display something on your reTerminal E1004.

### Home — Start From a Community Template

The fastest way to get something on your screen is to start from a ready-made template. On the **Home** page of SenseCraft HMI, you will find a large and continuously growing collection of templates contributed by the community — dashboards, clocks, weather panels, quote walls, calendars, photo frames, and more. Browse the gallery, pick whichever design you like, and deploy it to your reTerminal E1004 with one click.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Manage and Design Your Own Content

The **Workspace** page is where you manage all pages and content shown on the currently bound device. From here you can:

- Create and arrange your own design pages from scratch
- Upload images and organize them into slideshows
- Combine text, widgets, shapes, data, RSS feeds, web content, and more in a single drag-and-drop editor
- Deploy the final design wirelessly to your reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Once your design is saved, click **Deploy to Device**, select your paired reTerminal E1004, and the content will be transmitted wirelessly to the device. The ePaper display will update to show your design.

:::note
Due to the nature of E Ink technology, the screen refresh may take a few seconds to fully update the image and clear any ghosting.
:::

For everything else — detailed editor operations, tips, and release notes — refer to the [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Operating the Device

### Refresh Button

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/216.jpg" style={{width:700, height:'auto'}}/></div>

The refresh button is located either as the leftmost button on the lower front of the device, or on the back of the device at the position shown in the image above. It serves several functions:

- **Single Press**: Manually refreshes the display and checks for new content from the SenseCraft platform. The buzzer will beep once to confirm the action. This button is also commonly used to wake up the device. You can use this button to wake up a device when it has gone to sleep and a dashboard refresh command is usually not immediately available to the device.


### Navigation Buttons

The left and right buttons allow you to navigate between multiple pages if your dashboard contains more than one page:

- **Left Button**: Navigate to the previous page

- **Right Button**: Navigate to the next page

### Network Reset

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.jpg" style={{width:700, height:'auto'}}/></div>

If you need to connect to a different Wi-Fi network:

**Step 1.** Press and hold both navigation buttons (left and right) simultaneously for 2 seconds.

**Step 2.** The device will enter Wi-Fi configuration mode, and you can follow the [Network Setup](#network-setup) steps again to connect to a new network.

### LED Indicators

- **Red LED**:
  - Off: Fully charged or not charging
  - Always on: charging

- **Green LED**:
  - On for 3 seconds at boot: Device is powering on

### Battery Operation

When operating on battery power:

- The device will automatically enter low-power mode between refreshes

- Battery life depends on refresh frequency (up to 6 months in low-power mode with a 6-hour refresh interval)

- The device will display a low battery icon in the top-right corner when the battery level is below 20%

:::tip
If you want to write some code by yourself to read battery voltage, it will be more precise to add 10ms delay before analogRead() function.
:::

### Expansion Pins

The reTerminal E1004 features an 8-pin expansion header (J2) that provides connectivity options for adding external sensors, modules, or other hardware to extend the functionality of your device. This expansion header exposes several ESP32-S3 GPIO pins and communication interfaces, making it a versatile connection point for your DIY projects.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.png" style={{width:700, height:'auto'}}/></div>

#### Expansion Header Pinout

The expansion connector (J2) is a 2×4 header (part number **ST-FH-254-0148-2×4P**) that provides 8 pins arranged in two columns. The pin position notation below uses `Lx` for the left column and `Rx` for the right column (numbered from top to bottom, as shown in the image above):

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pin</th>
			<th>Label</th>
			<th>ESP32-S3 Pin</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>L1</td>
			<td>I2C2_SCL</td>
			<td>GPIO40</td>
			<td>GPIO / I2C SCL</td>
			<td>GPIO or I2C clock signal</td>
		</tr>
		<tr>
			<td>L2</td>
			<td>I2C1_SDA</td>
			<td>GPIO39</td>
			<td>GPIO / I2C SDA</td>
			<td>GPIO or I2C data signal</td>
		</tr>
		<tr>
			<td>L3</td>
			<td>GND</td>
			<td>-</td>
			<td>Ground</td>
			<td>Common ground reference</td>
		</tr>
		<tr>
			<td>L4</td>
			<td>3V3</td>
			<td>-</td>
			<td>Power</td>
			<td>3.3V power supply for external devices</td>
		</tr>
		<tr>
			<td>R1</td>
			<td>RX1</td>
			<td>GPIO42</td>
			<td>GPIO / UART RX</td>
			<td>GPIO or UART receive (RX) signal</td>
		</tr>
		<tr>
			<td>R2</td>
			<td>TX1</td>
			<td>GPIO41</td>
			<td>GPIO / UART TX</td>
			<td>GPIO or UART transmit (TX) signal</td>
		</tr>
		<tr>
			<td>R3</td>
			<td>ADC</td>
			<td>GPIO6</td>
			<td>GPIO / ADC</td>
			<td>General purpose I/O with analog input capability</td>
		</tr>
		<tr>
			<td>R4</td>
			<td>GND</td>
			<td>-</td>
			<td>Ground</td>
			<td>Common ground reference</td>
		</tr>
	</table>
</div>

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
- If the device still does not respond after restarting, re-flash the corresponding firmware on the SenseCraft HMI platform and check whether the device can refresh normally

### Q4: Network Connection Lost

- The device will automatically attempt to reconnect to known networks
- When reconnected, the Wi-Fi disconnection icon will disappear
- If unable to reconnect, follow the Network Reset procedure above

### Q5: Cannot Find Serial Port (COM) on macOS

If your Mac doesn't recognize the reTerminal via USB, follow this compact guide to install the CH340/CH340K driver:

**Step 1. Download and Install the Driver**
Download the driver from the [official WCH page](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) and run `CH34xVCPDriver.pkg`. 
:::tip
If macOS blocks the installation, go to **System Settings → Privacy & Security**, scroll to find the blocked WCH software, and click **Allow**.
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Step 2. Enable Driver Extension (Critical)**
Open the **CH34xVCPDriver** app from Launchpad, click **Install**, then go to **System Settings → General → Login Items & Extensions → Driver Extensions**. Toggle **CH34xVCPDriver Extensions** to **ON** (blue).
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Step 3. Connect and Verify**
Ensure the device **power switch is ON** and use a **data USB-C cable** (not charge-only). Open Terminal and run:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

If you see the device path in the output, the driver is correctly installed and your reTerminal is ready for use!

## Resources

- [reTerminal E1004 Schematic (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

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
