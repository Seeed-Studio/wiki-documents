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

# Getting Started with reTerminal E1002

## Introduction

The reTerminal E1002 is a 7.3-inch full-color ePaper display terminal designed for low-power information display applications. Unlike traditional e-readers, the reTerminal E1002 is optimized for displaying vibrant text and graphical information in various environments such as desktops, walls, and retail shelves. Its power-efficient design and wireless connectivity make it an ideal solution for smart home dashboards, information displays, digital signage, and electronic photo frames, with the added benefit of full color visualization.

### Features

- **7.3-inch full-Color ePaper Display**: 800×480 resolution with ACeP (Advanced Color ePaper) technology
- **ESP32S3 Controller**: Powerful main controller with built-in Wi-Fi connectivity
- **Ultra-Low Power Consumption**: Designed for extended battery operation
- **Integrated Buzzer**: For notifications and alerts
- **Battery Support**: JST connector for 2000mAh lithium battery with charging circuit
- **USB-C Interface**: For power and firmware updates
- **Multiple Control Buttons**: Refresh button and navigation keys for user interaction
- **Temperature and Humidity Sensor**: Integrated SHT40 sensor for environmental monitoring
- **Expandable Storage**: MicroSD card slot for additional storage
- **SenseCraft HMI Compatibility**: Seamless integration with Seeed's SenseCraft platform
- **Open Hardware & Software**: Fully open source for customization and development

## Hardware Overview

The reTerminal E1002 hardware includes:

1. **7.3-inch full-Color ePaper Display**: Full-color display with 800×480 resolution
2. **Refresh Button**: Located at the top of the device for manual screen refresh
3. **Navigation Buttons**: Left and right buttons for page navigation
4. **Power Switch**: Located on the back for powering the device on/off
5. **USB-C Port**: For charging and firmware updates
6. **Battery Connector**: JST 3-pin connector for optional lithium battery
7. **Status LEDs**: 
   - Charge indicator (red)
   - User indicator (green)
8. **MicroSD Card Slot**: For expandable storage
9. **Temperature & Humidity Sensor**: Integrated SHT40 sensor located at the lower left corner on the back of the device for environmental monitoring
10. **Expansion Pins**: 8-pin expansion header providing VDD, GND, I2C, and GPIO connections

## Getting Started

### Preliminary

**Step 1.** Unbox your reTerminal E1002 and ensure all components are included:
- reTerminal E1002 device
- USB-C cable
- Quick start guide

**Step 2.** (Optional) Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

:::note
The reTerminal E10xx only supports MicroSD cards up to 64GB in Fat32 format.
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
Updating the firmware ensures optimal performance and access to the latest features. It's recommended to perform this update before using your device for the first time.
:::

### Power On

**Step 1.** Power on the device by sliding the power switch to the **ON** position. The power switch is located on the back of the unit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/4.png" style={{width:500, height:'auto'}}/></div>


**Step 2.** On first boot, the device will display product information and network setup instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**Step 3.** The green user LED will light up for approximately 30 seconds, indicating the device is powered on and initializing. 30 seconds of no operation of the device, in order to ensure the power, the device will automatically enter the sleep mode, the LED light will automatically turn off.

### Network Setup

**Step 1.** Connect to the device's Wi-Fi access point from your smartphone or computer. The AP name will appear on the screen (no password required). The network credentials are `reTerminal E1002-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** Once connected, your phone should automatically redirect to the Wi-Fi configuration page. If not, open a browser and navigate to `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** Select your local Wi-Fi network and enter the password, then click "Connect".

:::note
The reTerminal E10xx series only supports 2.4GHz WiFi networks, not 5GHz or other bands.
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

增加个Template的下载作为第一个示例。

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

- [SenseCraft HMI Overview](https://wiki.seeedstudio.com/sensecraft_hmi_overview)
- [AI Generator Guide](https://wiki.seeedstudio.com/sensecraft_hmi_ai_generation)
- [Gallery Usage Guide](https://wiki.seeedstudio.com/sensecraft_hmi_gallery)
- [Canvas Design Tools](https://wiki.seeedstudio.com/sensecraft_hmi_canvas)
- [RSS Feed Configuration](https://wiki.seeedstudio.com/sensecraft_hmi_rss)
- [Web Content Display](https://wiki.seeedstudio.com/sensecraft_hmi_web)

Once you've created and saved your dashboard in the SenseCraft platform, simply click "Deploy to Device," select your paired reTerminal E1002, and your custom content will be wirelessly transmitted to the device. The ePaper display will update to show your dashboard, and you can use the navigation buttons to switch between multiple pages if you've created them.

## Operating the Device

### Refresh Button

The refresh button at the top of the device serves several functions:

- **Single Press**: Manually refreshes the display and checks for new content from the SenseCraft platform. The buzzer will beep once to confirm the action. This button is also commonly used to wake up the device. You can use this button to wake up a device when it has gone to sleep and a dashboard refresh command is usually not immediately available to the device.

- **Long Press** (future functionality): Will activate voice input mode.

### Navigation Buttons

The left and right buttons allow you to navigate between multiple pages if your dashboard contains more than one page:

- **Left Button**: Navigate to the previous page

- **Right Button**: Navigate to the next page

### Network Reset

If you need to connect to a different Wi-Fi network:

**Step 1.** Press and hold both navigation buttons (left and right) simultaneously for 2 seconds.

**Step 2.** The device will enter Wi-Fi configuration mode, and you can follow the "Network Setup" steps again to connect to a new network.

### LED Indicators

- **Red LED**:
  - Off: Fully charged or not charging
  - Always on: charging

- **Green LED**:
  - On for 30 seconds at boot: Device is powering on

### Battery Operation

When operating on battery power:

- The device will automatically enter low-power mode between refreshes

- Battery life depends on refresh frequency (typically several weeks on a full charge with default settings)

- The device will display a low battery icon in the top-right corner when the battery level is below 20%

### Expansion Pins

The reTerminal E1002 features an 8-pin expansion header that provides:
- Power (VDD)
- Ground (GND)
- I2C interface
- GPIO pins

These expansion pins allow you to connect additional sensors, actuators, or other hardware to extend the functionality of your device. They can be accessed for custom development projects when you need to add hardware capabilities beyond those built into the reTerminal E1002.

## Device Placement

The reTerminal E1002 comes with a support stand accessory that allows you to position the device upright for optimal viewing:

**Step 1.** Locate the support stand included in the package.

**Step 2.** Insert the stand into the designated slot at the bottom back of the reTerminal E1002.

**Step 3.** Adjust the angle of the stand to achieve your preferred viewing position.

The stand allows the device to be placed on desks, countertops, or shelves, making it ideal for use as an information display or digital photo frame in various environments.

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

- [reTerminal E1002 Schematic (PDF)](/getting_started_with_reterminal_e1002)
- [ESP32S3 Datasheet](/getting_started_with_reterminal_e1002)
- [SenseCraft HMI Platform Documentation](https://wiki.seeedstudio.com/sensecraft_hmi_overview)
- [GitHub Repository](/getting_started_with_reterminal_e1002)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

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
