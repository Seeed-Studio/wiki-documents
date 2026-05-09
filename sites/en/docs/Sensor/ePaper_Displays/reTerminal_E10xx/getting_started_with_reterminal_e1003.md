---
description: reTerminal E1003 is a 10.3 inch open-source monochrome ePaper display featuring 16 levels of grayscale and a high-resolution of 1404×1872 pixels, with touch interaction support on HMI firmware v1.1.2.
title: Getting Started with reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
sku: 100090602
last_update:
  date: 05/09/2026
  author: dimo
createdAt: '2026-03-18'
updatedAt: '2026-05-09'
url: https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

reTerminal E1003 is a 10.3 inch touch-supported, open-source monochrome ePaper display featuring 16 levels of grayscale and a high-resolution of 1404×1872 pixels, with up to 6-month battery life (based on one refresh per day). Powered by ESP32-S3, it natively supports our [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no-code UI platform for effortless dashboard creation. Whether for smart home dashboard visualization and control, office information displays, or educational projects, this ready-to-use touch-enabled device delivers stunning visuals and flexible customization to meet all your needs.

:::tip
Touch interaction for reTerminal E1003 is supported starting from [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) firmware v1.1.2. The current latest version is v1.1.4.3 — we recommend updating to it for the best experience.
Touch-related library support is planned for future open-source release, providing greater flexibility to customize panels. More updates will be shared soon.

ESPHome support for reTerminal E1003 is under development and will be available in a future release.
:::

### Features

- 3-Second Full Refresh for Faster ePaper Responsive Dashboards
- Build Interactive Interfaces Easily with [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) and Touch Support
- Crisp Visuals with 16-Level Grayscale and High-Resolution ePaper Display
- Up to 6-Month Battery Life (Based on One Refresh per Day)
- Flexible Hardware & Software Customization


## Specification

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Description</th>
		</tr>
		<tr>
			<td align="center"><strong>Product Name</strong></td>
			<td align="center">reTerminal E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>Processor</strong></td>
			<td align="center">ESP32-S3 with 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Storage</strong></td>
			<td align="center">32 MB flash; supports a microSD card</td>
		</tr>
		<tr>
			<td align="center"><strong>Display</strong></td>
			<td align="center">10.3" Monochrome / 16-level Grayscale</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolution</strong></td>
			<td align="center">1404 x 1872 Pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Micro SD Card</strong></td>
			<td align="center">Supports microSD cards up to 32 GB (FAT32)</td>
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
			<td align="center"><strong>Audio</strong></td>
			<td align="center">Buzzer for sound alert</td>
		</tr>
		<tr>
			<td align="center"><strong>Battery</strong></td>
			<td align="center">3000mAh</td>
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
			<td align="center">224mm x 187mm x 18.6mm</td>
		</tr>
	</table>
</div>


## Applications

- **Home Automation Dashboards:** Display real-time smart home data like temperature, humidity, and air quality via Home Assistant.
- **Low-power monochrome electronic photo frame:** With [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) or the app, you can easily upload a series of photos from your album remotely. Combined with a large, high-resolution monochrome e-ink screen, it delivers ultra-low-power image display, so you no longer need to worry about battery life.
- **Smart Office Displays:** Show meeting room availability, office schedules, or directional guidance in low-power, always-on ePaper displays.
- **Retail & Public Information Displays:** Low-power ePaper signs for menus, schedules, or occupancy indicators with long battery life.


## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/221.png" style={{width:1000, height:'auto'}}/></div>

1. **Screen Refresh Button:** Located at the top of the device for manual screen refresh.
2. **Page Up and Down Buttons:** Located at the top of the device for navigating between pages.
3. **Wi-Fi Antenna Area:** Located at the bottom of the device for Wi-Fi connectivity.
4. **MicroSD Card / TF Card Slot:** For expandable storage (FAT32, up to 32GB).
5. **Power Switch:** To turn the device on or off.
6. **Red Power LED:** Indicates the battery charging status.
7. **Green Status LED:** Indicates the current operational or system status.
8. **USB-C Data and Charge Port:** For charging the device and data transmission.
9. **Expansion Port:** Pin header providing VDD, GND, I2C, and GPIO connections for external sensors, modules, or peripherals.
10. **Stand Mounting Screw Holes:** Threaded holes on the back of the device for securing the support stand.
11. **3D-Printed Support Stand:** The included stand accessory for holding the device upright on a flat surface.
12. **Stand Mounting Screws:** Screws used to fasten the support stand to the device.

## Getting Started

The reTerminal E1003 comes pre-loaded with firmware that supports **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)**, a no-code platform that allows you to design and deploy personalized dashboards effortlessly.

### Preliminary

**Step 1.** Unbox your reTerminal E1003 and ensure all components are included:

- reTerminal E1003 ePaper Display
- USB Type-C Cable
- Quick start guide
- Screwdriver
- Screws
- 3D-printed support stand

**Step 2.** (Optional) Install the 3D-printed support stand to place the device upright:

Locate the 3D-printed support stand included in the package. Position the support stand against the designated mounting area on the back of the reTerminal E1003 where the embedded nuts are located. Use a screwdriver to secure the stand to the device by tightening the screws into the embedded nuts on the back of the reTerminal E1003. Once securely attached, place the reTerminal E1003 on a flat surface where the stand will support it in an upright position.

:::note
The stand provides a fixed viewing angle and cannot be adjusted. This fixed positioning is designed to offer optimal visibility in most usage scenarios.
:::

**Step 3.** (Optional) Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

:::note
The reTerminal E Series ePaper Display only supports MicroSD cards up to 32GB in FAT32 format.  
The 32GB SD card is formatted as exFAT by default. After formatting it to FAT32, it can be successfully mounted and used to store images.
:::

**Step 4.** (Optional) Install USB drivers if needed:

Depending on your operating system, you may need to install USB drivers to ensure proper communication with your reTerminal E1003:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 systems typically include the driver by default
- For Windows 10 and earlier versions, you may need to download and install the CH341 driver from [WCH official website](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

If you are using a Mac and have not manually installed the CH34X driver before, follow the steps below to complete the installation:

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

</TabItem>

<TabItem value="Linux" label="Linux">

Ubuntu 22.04 and later versions include the necessary drivers by default.
For older distributions, if the device is not recognized, you may need to manually load the driver.


</TabItem>
</Tabs>

### Power On

**Step 1.** Power on the device by sliding the power switch to the **ON** position. The power switch is located on the back of the unit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/235.gif" style={{width:700, height:'auto'}}/></div>

**Step 2.** On first boot, the device will display product information and network setup instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/229.png" style={{width:600, height:'auto'}}/></div><br />

**Step 3.** The green status LED lights up for approximately 3 seconds and then turns off, indicating that the device is powered on and initializing. If no action is taken within 30 seconds, the device automatically enters sleep mode to save power.

:::tip
So, we need to complete the next steps of configuring the network during this time. When the device goes to sleep, you will not be able to find the device's hotspot. If this is the case, you can wake up the device by pressing the **Refresh** button on the top of the unit.
:::

### Network Setup

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**Step 1.** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are `reTerminal E1003-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/228.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If it does not, you can scan the QR code shown on the reTerminal E1003 screen with your phone, or manually open a browser and go to `192.168.4.1`.

If you enter an incorrect password, simply re-enter it and submit again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/222.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** Select your local Wi-Fi network and enter the password, then click "Connect".

:::note
The reTerminal E Series ePaper Display only supports 2.4 GHz Wi-Fi networks, not 5 GHz or other bands.
:::

**Step 4.** Upon successful connection, the device will emit a confirmation beep and display a pairing code screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/230.png" style={{width:600, height:'auto'}}/></div>

### Connecting to SenseCraft Platform

**Step 1.** Visit [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) in your web browser and create an account or sign in.



**Step 2.** In the left sidebar, click **Device** to enter the Device page, then click the **+ New Device** button in the upper-left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** Name your device and enter the pairing code displayed on your device's screen and click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Once paired, the device will display a message prompting you to create your first dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/231.png" style={{width:600, height:'auto'}}/></div>

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

**Step 2.** On the "Please select the device type" screen, choose **reTerminal E1003**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:250, height:'auto'}}/></div><br />

**Step 3.** Follow the on-screen instructions to put your device into Bluetooth broadcast mode. Ensure your phone's Bluetooth is enabled. Tap **Scan**, and the app will discover nearby devices. Select your device from the list to connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Step 4.** Once connected via Bluetooth, the app will prompt you to set up the Wi-Fi connection. Select your local 2.4GHz Wi-Fi network from the dropdown list, enter the password, and tap **Next**.

:::note
The device can only be configured via a 2.4 GHz Wi-Fi network.
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

**Step 1.** On the **Device** page, find your reTerminal E1003 to view its details, and note the **current firmware version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/227.png" style={{width:350, height:'auto'}}/></div>

**Step 2.** In the left sidebar, click **Tools** and open the **Firmware Flasher** tab to see the **latest firmware version** available for this device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** If the current version is older than the latest one, follow the 3-step flow on the Firmware Flasher page to update:

1. **Select your device** — plug the reTerminal E1003 into your computer via the USB-C cable, make sure the power switch is **ON**, then click **Select** and choose your device from the list.

2. **Select firmware** — choose the latest firmware from the release options dropdown.

3. **Flash** — click **Flash** and wait for the update to complete. Enable **Full Flash** only if you want to reset the device to factory state (all data, settings, and designs will be wiped).

:::note

1. Updating the firmware ensures optimal performance and access to the latest features. Touch interaction for reTerminal E1003 requires firmware **v1.1.2 or later**. The current latest version is v1.1.4.3 — we recommend updating to it for the best experience.

2. It is not possible to flash the firmware properly when the device is in the shutdown or sleep state. If you select the correct port for your device but never see the flash firmware progress, you may need to wake up the device by pressing the **Refresh** button on the top of the unit and try again.

3. **Do a standard Flash** to keep your setup: Wi-Fi, deployed designs, and pictures are preserved. **Do a Full Flash to start fresh**: all data, settings, and designs are wiped (factory state).

:::

## Display Content on Your reTerminal E1003

Once your device is paired, you can start using it to display whatever you like. We recommend **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** — a no-code cloud platform that lets you design and deploy content to your reTerminal E1003 in just a few clicks.

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) has its own dedicated Wiki with full tutorials and feature documentation. For in-depth guides (account setup, firmware flashing, advanced editor usage, deployment, etc.), please refer to:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Since this article is a product **Getting Started**, we will not repeat the same content here — the following only shows how to quickly display something on your reTerminal E1003.

### Home — Start From a Community Template

The fastest way to get something on your screen is to start from a ready-made template. On the **Home** page of [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), you will find a large and continuously growing collection of templates contributed by the community — dashboards, clocks, weather panels, quote walls, calendars, photo frames, and more. Browse the gallery, pick whichever design you like, and deploy it to your reTerminal E1003 with one click.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Manage and Design Your Own Content

The **Workspace** page is where you manage all pages and content shown on the currently bound device. From here you can:

- Create and arrange your own design pages from scratch
- Upload images and organize them into slideshows
- Combine text, widgets, shapes, data, RSS feeds, web content, and more in a single drag-and-drop editor
- Deploy the final design wirelessly to your reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/226.png" style={{width:1000, height:'auto'}}/></div>

Once your design is saved, click **Deploy to Device**, select your paired reTerminal E1003, and the content will be transmitted wirelessly to the device. The ePaper display will update to show your design. Touch interaction requires firmware **v1.1.2 or later** — the current latest version is **v1.1.4.3**, and we recommend updating to it for the best experience.

For everything else — detailed editor operations, tips, and release notes — refer to the [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Manual Device Controls

### Refresh Button

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/233.png" style={{width:700, height:'auto'}}/></div>

The refresh button at the top of the device serves several functions:

- **Single Press**: Manually refreshes the display and checks for new content from the SenseCraft platform. The buzzer will beep once to confirm the action. This button is also commonly used to wake up the device when it has gone to sleep and a dashboard refresh is not immediately available.

- **Long Press** (future functionality): Will activate voice input mode.

### Navigation Buttons

The left and right buttons allow you to navigate between multiple pages if your dashboard contains more than one page:

- **Left Button**: Navigate to the previous page

- **Right Button**: Navigate to the next page

### Network Reset

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/234.png" style={{width:700, height:'auto'}}/></div>

If you need to connect to a different Wi-Fi network:

**Step 1.** Press and hold both navigation buttons (left and right) simultaneously for 2 seconds.

**Step 2.** The device will enter Wi-Fi configuration mode, and you can follow the [Network Setup](#network-setup) steps again to connect to a new network.

### LED Indicators

- **All LEDs off:**
  - No USB cable connected

- **Red LED:**
  - Solid on when USB cable is connected and charging is in progress

- **Green LED:**
  - Lights up for approximately 3 seconds at each power-on, then turns off
  - Solid on when USB cable is connected and battery is fully charged


### Battery Operation

When operating on battery power:

- The device will automatically enter low-power mode between refreshes

- Battery life depends on refresh frequency (typically 6 months on a full charge with one refresh per day)

- The device will display a low battery icon in the top-right corner when the battery level is below 20%

:::tip
If you want to write some code by yourself to read battery voltage, it will be more precise to add 10ms delay before analogRead() function.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/232.png" style={{width:500, height:'auto'}}/></div>


### Expansion Pins

The reTerminal E1003 features a 6-pin expansion header (J2) that provides connectivity options for adding external sensors, modules, or other hardware to extend the functionality of your device. This expansion header exposes several ESP32-S3 GPIO pins and communication interfaces, making it a versatile connection point for your DIY projects.

#### Expansion Header Pinout

The 6-pin expansion header (J2) has the following pinout:

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
			<td>ESP_IO47</td>
			<td>GPIO47</td>
			<td>GPIO/ADC</td>
			<td>General purpose I/O with analog input capability</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO6/ADC1_CH</td>
			<td>GPIO6</td>
			<td>GPIO/ADC</td>
			<td>General purpose I/O with analog input capability</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO or I2C clock signal</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO or I2C data signal</td>
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
- If the device still does not respond after restarting, re-flash the corresponding firmware on the [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) platform and check whether normal refresh is restored

### Q4: Network Connection Lost

- The device will automatically attempt to reconnect to known networks
- When reconnected, the Wi-Fi disconnection icon will disappear
- If unable to reconnect, follow the Network Reset procedure above

## Resources

- [reTerminal E1003 Schematic (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
