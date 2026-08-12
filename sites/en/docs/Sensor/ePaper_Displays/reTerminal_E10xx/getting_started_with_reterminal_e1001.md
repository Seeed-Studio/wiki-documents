---
description: This article will guide you to quickly get started with reTerminal E1001.
title: Getting Started with reTerminal E1001
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.webp
slug: /getting_started_with_reterminal_e1001
sidebar_position: 2
sku: 100073581
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

:::tip Try demos without setting up a development environment
If you want to quickly preview project results or try the basic demo firmware before setting up a development environment, open the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. You can choose a supported reTerminal E Series device and flash demo firmware directly from a browser.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

:::caution Update Firmware Tips
We recommend that you **[complete your product's firmware update](#preliminary)** as soon as you receive it for the best experience.
:::

## Introduction

reTerminal E1001 is a 7.5 inch open-source monochrome ePaper display with exceptional 3-month battery life. Powered by ESP32-S3, it natively supports our SenseCraft HMI no-code UI platform for effortless dashboard creation, while supporting Home Assistant, TRMNL E-ink dashboard, Arduino and ESP-IDF for further development. Whether for smart home dashboard visualization, office displays, or educational projects, this ready-to-use HMI device delivers beautiful visuals and flexible customization in one elegant package.

### Features

- **Beautiful, Ready-to-Use ePaper Display**
- **Ultra-Low Power with 3-Month Battery Life**
- **No-Code UI Design & Deployment with SenseCraft HMI**
- **Works with Popular Software Platforms**
- **Flexible Hardware & Software Customization**

## Specification

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Description</th>
		</tr>
		<tr>
			<td align="center"><strong>Product Name</strong></td>
			<td align="center">reTerminal E1001</td>
		</tr>
		<tr>
			<td align="center"><strong>Processor</strong></td>
			<td align="center">ESP32-S3 with 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Storage</strong></td>
			<td align="center">32MB Flash, support Micro SD card</td>
		</tr>
		<tr>
			<td align="center"><strong>Display</strong></td>
			<td align="center">7.5" Monochrome</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolution</strong></td>
			<td align="center">800 x 480 Pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Micro SD Card</strong></td>
			<td align="center">Maximum support 32GB SD card, FAT32 format</td>
		</tr>
		<tr>
			<td align="center"><strong>Wireless Connectivity</strong></td>
			<td align="center">2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensors</strong></td>
			<td align="center">Temperature, humidity sensors</td>
		</tr>
		<tr>
			<td align="center"><strong>Microphone</strong></td>
			<td align="center">Reserved for voice interaction application</td>
		</tr>
		<tr>
			<td align="center"><strong>Buzzer</strong></td>
			<td align="center">Buzzer for sound alert</td>
		</tr>
		<tr>
			<td align="center"><strong>Battery</strong></td>
			<td align="center">2000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Power Input</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Working Temperature</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensions</strong></td>
			<td align="center">176mm x 120mm x 53mm (With Stand) / 17mm (Without Stand)</td>
		</tr>
	</table>
</div>

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

The reTerminal E1001 hardware includes:

1. **7.5-inch ePaper Display**: Monochrome display with 800×480 resolution
2. **Buttons**: Located at the top of the device for manual screen usage
3. **Microphone**
4. **MicroSD Card Slot**: For expandable storage
5. **Power Switch**: Located on the back for powering the device on/off
6. **Status LED**: User indicator (green)
7. **Power LED**: Charge indicator (red)
8. **USB-C Port**: For charging and firmware updates
9. **Expansion Port**: 8-pin expansion header providing VDD, GND, UART, I2C, and GPIO connections
10. **Stand Mounting Inserts**: Embedded nuts (screw holes) on the bottom back of the device for attaching the 3D-printed support stand

## Getting Started

### Preliminary

**Step 1.** Unbox your reTerminal E1001 and ensure all components are included:

- reTerminal E1001 device
- charging data cable
- Quick start guide
- long screwdriver
- screws
- 3D-printed support stand

**Step 2.** (Optional) Install the 3D-printed support stand to place the device upright:

Locate the 3D-printed support stand included in the package. Position the support stand against the designated mounting area on the bottom back of the reTerminal E1001 where the embedded nuts are located. Use a long screwdriver to secure the stand to the device by tightening the screws into the embedded nuts on the back of the reTerminal E1001. Once securely attached, place the reTerminal E1001 on a flat surface where the stand will support it in an upright position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

::::note
The stand provides a fixed viewing angle and cannot be adjusted. This fixed positioning is designed to offer optimal visibility in most usage scenarios.
::::

**Step 3.** (Optional) Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
The reTerminal E Series ePaper Display only supports MicroSD cards up to 32GB in Fat32 format.  
The 32GB SD card is formatted as exFAT by default. After formatting it to FAT32, it can be successfully mounted and used to store images.
:::

**Step 4.** (Optional) Install USB drivers if needed:

Depending on your operating system, you may need to install USB drivers to ensure proper communication with your reTerminal E1001:

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**Step 2.** On first boot, the device will display product information and network setup instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**Step 3.** The green user LED will light up for approximately 30 seconds, indicating the device is powered on and initializing. 30 seconds of no operation of the device, in order to ensure the power, the device will automatically enter the sleep mode, the LED light will automatically turn off.

:::tip
So, we need to complete the next steps of configuring the network during this time. When the device goes to sleep, you will not be able to find the device's hotspot. If this is the case, you can wake up the device by clicking once on the device's green Wake button.
:::

### Network Setup

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**Step 1.** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are `reTerminal E1001-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** Select your local Wi-Fi network and enter the password, then click "Connect".

:::note
The reTerminal E Series ePaper Display only supports 2.4GHz WiFi networks, not 5GHz or other bands.
:::

**Step 4.** Upon successful connection, the device will emit a confirmation beep and display a pairing code screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Once paired, the device will display a message prompting you to create your first dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

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

### Firmware Update

After the device is successfully added to your SenseCraft account, the platform will automatically check the firmware version. If a newer firmware is available, you will be prompted to update.

You can also check the firmware version manually at any time:

**Step 1.** On the **Device** page, find your reTerminal E1001 to view its details, and note the **current firmware version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Step 2.** In the left sidebar, click **Tools** and open the **Firmware Flasher** tab to see the **latest firmware version** available for this device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** If the current version is older than the latest one, follow the 3-step flow on the Firmware Flasher page to update:

1. **Select your device** — plug the reTerminal E1001 into your computer via the USB-C cable, make sure the power switch is **ON**, then click **Select** and choose your device from the list.

2. **Select firmware** — choose the latest firmware from the release options dropdown.

3. **Flash** — click **Flash** and wait for the update to complete. Enable **Full Flash** only if you want to reset the device to factory state (all data, settings, and designs will be wiped).

:::note

1. Updating the firmware ensures optimal performance and access to the latest features.

2. It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, you may need to wake up the device by pressing the green button on the top of the unit and try again.

3. **Do a standard Flash** to keep your setup: Wi-Fi, deployed designs, and pictures are preserved. **Do a Full Flash to start fresh**: all data, settings, and designs are wiped (factory state).

:::

## Display Content on Your reTerminal E1001

Once your device is paired, you can start using it to display whatever you like. We recommend **SenseCraft HMI** — a no-code cloud platform that lets you design and deploy content to your reTerminal E1001 in just a few clicks.

SenseCraft HMI has its own dedicated Wiki with full tutorials and feature documentation. For in-depth guides (account setup, firmware flashing, advanced editor usage, deployment, etc.), please refer to:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Since this article is a product **Getting Started**, we will not repeat the same content here — the following only shows how to quickly display something on your reTerminal E1001.

### Home — Start From a Community Template

The fastest way to get something on your screen is to start from a ready-made template. On the **Home** page of SenseCraft HMI, you will find a large and continuously growing collection of templates contributed by the community — dashboards, clocks, weather panels, quote walls, calendars, photo frames, and more. Browse the gallery, pick whichever design you like, and deploy it to your reTerminal E1001 with one click.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Manage and Design Your Own Content

The **Workspace** page is where you manage all pages and content shown on the currently bound device. From here you can:

- Create and arrange your own design pages from scratch
- Upload images and organize them into slideshows
- Combine text, widgets, shapes, data, RSS feeds, web content, and more in a single drag-and-drop editor
- Deploy the final design wirelessly to your reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Once your design is saved, click **Deploy to Device**, select your paired reTerminal E1001, and the content will be transmitted wirelessly to the device. The ePaper display will update to show your design, and you can use the left/right navigation buttons on the device to switch between multiple pages if you created them.

For everything else — detailed editor operations, tips, and release notes — refer to the [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

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

The reTerminal E1001 features an 8-pin expansion header (J2) that provides connectivity options for adding external sensors, modules, or other hardware to extend the functionality of your device. This expansion header exposes several ESP32-S3 GPIO pins and communication interfaces, making it a versatile connection point for your DIY projects.

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

<!-- ## Device Placement -->
<!--

The reTerminal E1001 comes with a 3D-printed support stand accessory that allows you to position the device upright for optimal viewing:

**Step 1.** Locate the 3D-printed support stand included in the package.

**Step 2.** Position the support stand against the designated mounting area on the bottom back of the reTerminal E1001 where the embedded nuts are located.

**Step 3.** Use a long screwdriver to secure the stand to the device by tightening the screws into the embedded nuts on the back of the reTerminal E1001.

**Step 4.** Once securely attached, place the reTerminal E1001 on a flat surface where the stand will support it in an upright position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
The stand provides a fixed viewing angle and cannot be adjusted. This fixed positioning is designed to offer optimal visibility in most usage scenarios.

The stand allows the device to be placed on desks, countertops, or shelves, making it ideal for use as an information display, control panel, or digital photo frame in various environments.
:::

-->

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

### Q6: Device Not Charging

If you find that the device is not charging, please try replacing the charging head with a non-Apple brand power adapter.

## Resources

- [reTerminal E1001 Schematic (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1_2_SCH_251120.pdf)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI Platform Documentation](https://wiki.seeedstudio.com/sensecraft_hmi_overview)
- [Exterior overall 3D model STP file](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_E1001_E1002_3D.stp)
<!-- - [GitHub Repository](/getting_started_with_reterminal_e1001) -->

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
