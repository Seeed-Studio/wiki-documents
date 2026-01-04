---
description: Getting Started with EE02 13.3-inch E-ink Driver Board
title: Getting Started with EE02
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /getting_started_with_ee02
last_update:
  date: 2025-12-20
  author: Allen
---

## Introduction

The **EE02** is a high-performance E-ink screen driver board specifically designed for **13.3-inch** electronic paper displays. Powered by the ESP32-S3 chip, it supports Wi-Fi and Bluetooth connectivity, making it an ideal solution for wireless display applications.

Similar to its sibling, the EE04 (designed for smaller screens), the EE02 offers a seamless experience for developers looking to integrate large-format E-ink displays into their IoT projects. It simplifies the driving process and supports the SenseCraft HMI platform for easy content management.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### Features

- **Powerful Controller**: Built around the ESP32-S3, offering robust processing power and wireless capabilities.
- **Dedicated for Large Screens**: Specifically optimized to drive 13.3-inch E-ink displays with high stability and clarity.
- **Wireless Connectivity**: Supports Wi-Fi and Bluetooth 5.0 (LE), enabling remote data updates and cloud integration.
- **Low Power Consumption**: Designed for energy efficiency, suitable for battery-powered applications.
- **Easy Integration**: Compatible with SenseCraft HMI for drag-and-drop interface design and remote management.
- **Versatile Interfaces**: Includes Type-C for power/programming and standard connectors for E-ink screens.

### Specification

| Item | Description |
| :--- | :--- |
| **Controller** | ESP32-S3 |
| **Supported Screen Size** | 13.3-inch E-ink Display |
| **Connectivity** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **Power Supply** | 5V via USB Type-C |
| **Operating Voltage** | 3.3V |
| **Interface** | USB Type-C, FPC connector for E-ink |
| **Dimensions** | 80x40 mm |
| **Operating Temperature** | -20°C to 70°C |

### Application

- **Digital Signage**: Ideal for restaurant menus, conference room signs, and retail price tags.
- **Smart Home**: Information dashboards for weather, calendar, and home automation status.
- **Industrial HMI**: Low-power status displays for machinery and warehouse management.
- **Education**: E-books readers or classroom information boards.
- **Office**: Desk nameplates or notice boards.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: For power supply and firmware flashing.
- **FPC Connector**: To connect the 13.3-inch E-ink display.
- **Reset Button**: To reset the board.
- **Buttons**: They are "refresh the page","switch previous page" and "switch next page"
- **Switch**: Control the power of battery on/off.
- **Boot Button**: Used for entering bootloader mode.
- **LED Indicators**: Blinking means no battery connection. Green light on means battery is charging.
- **JST Connector**: 2 pins JST 2.0mm connector to connect battery.

## Getting Started with SenseCraft HMI

This section will guide you through connecting your EE02 to the SenseCraft HMI platform, allowing you to easily update the screen content wirelessly.

### Equipment Installation

**Step 1. Connect the Screen and Board**
Carefully connect the FPC cable of the 13.3-inch E-ink screen to the connector on the EE02 driver board. Ensure the locking mechanism is secure.

**Step 2. Power On**
Connect the EE02 board to a power source (computer or USB adapter) using a USB Type-C cable. Upon powering up, the screen will refresh and display a welcome image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**Step 3. Enter Network Configuration Mode**
After the welcome image, the screen will automatically refresh to show the Network Configuration interface. This indicates the device is ready to connect to Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### Network Configuration

**Step 4. Configure Wi-Fi via Mobile Phone**
Use your mobile phone to scan the QR code displayed on the screen (or connect to the hotspot indicated). Follow the prompts on your phone to enter your local Wi-Fi SSID and password to connect the EE02 to the internet.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**Step 5. Obtain Pairing Code**
Once the network configuration is successful, the screen will refresh again and display a unique **Pairing Code** (or Device ID). You will need this code for the next step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.JPG" style={{width:300,height:'auto'}}/></div>

### Platform Binding & Update

**Step 6. Bind Device on SenseCraft HMI**
Go to the [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device). Log in to your account. Navigate to the device management section and select "Add Device". Enter the Pairing Code displayed on your E-ink screen to bind the device to your account.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**Step 7. Create and Push New Interface**
On the SenseCraft HMI platform, use the editor to create a new interface (e.g., upload an image or design a dashboard). 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**Step 8. Apply your images**
Once finished, click "Apply" button at the top right corner, and then select the device you want to receive the image. The EE02 will receive the data and refresh the 13.3-inch screen with your new content.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**Step 9. Display on the screen**

Finally the EE02 will receive the data and refresh the 13.3-inch screen with your new content.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Troubleshooting

**Q1: The screen does not refresh after powering on.**
*   Check if the FPC cable is correctly inserted and locked.
*   Ensure the USB Type-C cable provides sufficient power.
*   Press the Reset button to restart the board.

**Q2: Wi-Fi configuration fails.**
*   Ensure your Wi-Fi network is 2.4GHz (5GHz is not supported).
*   Check if the Wi-Fi password was entered correctly.
*   Move closer to the router to ensure a strong signal.

**Q3: The screen display is blurry or has ghosting.**
*   This can happen if the screen hasn't been refreshed for a long time or if the power supply is unstable. Try refreshing the screen again via the HMI platform.

## Resources
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)

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