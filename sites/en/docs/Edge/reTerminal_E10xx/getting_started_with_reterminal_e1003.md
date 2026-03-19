---
description: reTerminal E1003 is a 10.3 inch touch-supported, open-source monochrome ePaper display featuring 16 levels of grayscale and a high-resolution of 1404×1872 pixels, with up to 6-month battery life.
sku: 100090602
title: Getting Started with reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
---

# Getting Started with reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

## Introduction

reTerminal E1003 is a 10.3 inch touch-supported, open-source monochrome ePaper display featuring 16 levels of grayscale and a high-resolution of 1404×1872 pixels, with up to 6-month battery life. Powered by ESP32-S3, it natively supports our SenseCraft HMI no-code UI platform for effortless dashboard creation, while supporting Home Assistant (via ESPHome & Open Display), Arduino, PlatformIO for further development. Whether for smart home dashboard visualization and control, office information displays, or educational projects, this ready-to-use touch-enabled device delivers stunning visuals and flexible customization to meet all your needs.

## Features

- **Up to 16-level grayscale clarity:** Boasting 16 levels of exquisite grayscale, every detail of text and graphics is rendered with exceptional sharpness and clarity.
- **Ultra-Low Power Consumption:** The ePaper consumes power only during updates, resulting in longer battery life and greater energy efficiency.
- **SenseCraft HMI Support:** The reTerminal E Series Display supports SenseCraft HMI by default firmware.
- **Wide Range of Applications:** Supports high-speed refresh for low-latency updates with a TTL parallel interface (multi-line, high-throughput) — making it an ideal choice for smart home control panels.
- **High-Resolution Touch ePaper Display:** The 10.3-inch 1404×1872 monochrome ePaper display is paired with a built-in responsive touchscreen for intuitive full-screen interaction.
- **Adapting to Decoration Needs:** Wire-free for greater freedom; supports wall-mount and desktop placement, with flexible portrait and landscape orientation switching.

:::note
The SenseCraft HMI platform is now in the beta trial stage, and the functions will be continuously improved. At present, there is a limit to the number of AI generation and UI generation. The SenseCraft HMI canvas will gradually support touch interaction settings in the future. Stay tuned.
:::

## Specification

| Item | Description |
| :--- | :--- |
| **Product Name** | reTerminal E1003 |
| **Processor** | ESP32-S3 with 8MB PSRAM |
| **Storage** | 32MB Flash, support Micro SD card |
| **Display** | 10.3" Monochrome/ 16-level Grayscale |
| **Resolution** | 1404x1872 Pixels |
| **Micro SD Card** | Maximum support 32GB SD card, FAT32 format |
| **Wireless Connectivity** | 2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0 |
| **Sensors** | Temperature, humidity sensors |
| **Microphone** | Reserved for voice interaction application |
| **Audio** | Buzzer for sound alert |
| **Battery** | 3000mAh |
| **Power Input** | USB-C 5V/1A |
| **Software Support** | Default firmware support SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />Support Arduino/PlatformIO development platform |
| **Working Temperature** | 0-40°C |
| **Dimensions** | 224mm*187mm*18.6mm |

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Screen Refresh Button**
2. **Page Up and Down Button**
3. **Wi-Fi Antenna Area**
4. **MicroSD Card/TF Card port**
5. **Power Switch**
6. **Red Power LED**
7. **Green Status LED**
8. **USB-C Data and Charge Port**
9. **Expansion Port**
10. **Stand Mounting Screw Hole**
11. **Stand**
12. **Stand Mounting Screw**

## Applications

- **Home Automation Dashboards:** Display real-time smart home data like temperature, humidity, and air quality via Home Assistant.
- **Low-power Monochrome electronic photo frame:** With SenseCraft HMI or the App, you can easily upload a series of photos from your album remotely online. Combined with a large, high-resolution monochrome e-ink screen, it achieves ultra-low power image display, no longer have to worry about battery life.
- **Smart Office Displays:** Show meeting room availability, office schedules, or directional guidance in low-power, always-on ePaper displays.
- **Retail & Public Information Displays:** Low-power ePaper signs for menus, schedules, or occupancy indicators with long battery life.

## Getting Started with SenseCraft HMI

The reTerminal E1003 comes pre-loaded with firmware that supports **SenseCraft HMI**, a no-code platform that allows you to design and deploy personalized dashboards effortlessly.

### Step 1. Power On and Network Configuration

1. Turn on the **Power Button** to turn on the reTerminal E1003.
2. Use your smartphone to connect to the device's hotspot (AP mode) to configure the Wi-Fi credentials.
3. The screen will display a "Network Configuration" QR code or use browser open 192.168.4.1 page.
4. Once connected to the internet, the device will display a **Device Code** or **Binding QR Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### Step 2. Bind the Device

1. Visit the [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) on your computer browser.
2. Log in to your account (or create one if you haven't).
3. Navigate to the **Device Management** section and click **Add Device**.
4. Enter the **Device Code** displayed on your reTerminal E1003 screen to complete the binding process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### Step 3. Create Content on the Platform

1. Go to the **Home Page** select a template you want or **Workspace** to create your work from scratch.
2. [Click this link to learn how to use HMI Platform if you have question.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Step 4. Deploy Content to Device

1. Once your design is ready, click the **Preview** button to check how it looks.
2. Click the **Save** or **deploy** button.
3. Select your bound reTerminal E1003 from the list.
4. The platform will send the data to your device via Wi-Fi. The ePaper screen will refresh to display your new dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

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
