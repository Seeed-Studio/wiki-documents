---
description: reTerminal E1004 is a 13.3-inch open-source full-color ePaper display powered by ESP32-S3, featuring E Ink® Spectra™ 6 technology and SenseCraft HMI support.
title: Getting Started with reTerminal E1004
sidebar_position: 4
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.webp
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
---

# Getting Started with reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## Introduction

reTerminal E1004 is a 13.3 inch open-source full color ePaper display with up to 3-month battery life. Powered by ESP32-S3, it natively supports our SenseCraft HMI no-code UI platform for effortless dashboard creation, while supporting Home Assistant, Arduino and ESP-IDF for further development. With the E Ink® Spectra™ 6 full-color ePaper Display, it's perfect for digital frame, colorful dashboard visulization.

### Features

-   **High-Definition Color Display:** 13.3-inch E Ink® Spectra™ 6 Full Color ePaper Display with a high resolution of 1200x1600 pixels.
-   **Powerful Processing:** Powered by ESP32-S3 with 8MB PSRAM and 32MB Flash for robust performance.
-   **Ultra-Low Power Consumption:** Built-in 5000mAh battery supports up to 3 months of usage on a single charge (Deep sleep mode).
-   **No-Code UI Development:** Default firmware supports SenseCraft HMI for drag-and-drop dashboard creation and AI-assisted design.
-   **Wide Compatibility:** Supports Home Assistant (ESPHome), Arduino, PlatformIO, and ESP-IDF.
-   **Rich Connectivity:** Integrated 2.4GHz Wi-Fi (802.11 b/g/n) and Bluetooth 5.0.
-   **Integrated Sensors & Audio:** Built-in temperature and humidity sensors, a buzzer for alerts, and a reserved microphone for future voice applications.
-   **Ready-to-Use Storage:** Includes a 16GB Micro SD card (supports up to 32GB).

## Specification

| Item | Description |
| :--- | :--- |
| **Product Name** | reTerminal E1004 |
| **Processor** | ESP32-S3 with 8MB PSRAM |
| **Storage** | 32MB Flash, support Micro SD card (Up to 32GB, 16GB included) |
| **Display** | 13.3" Spectra™ 6 Full Color ePaper |
| **Resolution** | 1200 x 1600 Pixels |
| **Wireless Connectivity** | 2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0 |
| **Sensors** | Temperature, Humidity sensors |
| **Audio** | Buzzer (Sound alert), Microphone (Reserved) |
| **Battery** | 5000mAh |
| **Power Input** | USB-C 5V/1A |
| **Software Support** | SenseCraft HMI (Default), ESPHome, Arduino, PlatformIO, ESP-IDF |
| **Working Temperature** | 0-40°C |
| **Dimensions** | 376mm x 311mm x 40mm |

## Applications

-   **Low-power Electronic Photo Frame:** Display high-resolution family photos or art with paper-like quality without worrying about daily charging.
-   **Family Information Board:** Keep track of calendars, notifications, weather, and news in a stylish, always-on format.
-   **Home Automation Dashboard:** Visualize real-time smart home data (temperature, humidity, air quality) via Home Assistant.
-   **Smart Office Display:** Show meeting room schedules, availability, or directional guidance.
-   **Retail & Public Signage:** Energy-efficient menus, schedules, or occupancy indicators.
-   **Education & Prototyping:** An ideal platform for learning IoT, embedded systems, and UI design.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Page Up and Down Button:** Used for navigating and turning pages.
2. **Screen Refresh Button:** Used to manually refresh the E-ink display.
3. **Red Power LED:** Indicates the power status of the device.
4. **USB-C Data and Charge Port:** For charging the device and data transmission.
5. **Power Switch:** To turn the device power on or off.
6. **Green Status LED:** Indicates the current operational or system status.
7. **Boot:** Used for system booting or entering boot mode.
8. **Reset:** For resetting the hardware components.
9. **Expansion Port:** For connecting external expansion modules or peripherals.
10. **Stand Mounting Screws:** Used for securing the device onto its stand.
11. **Metal Stand:** Provides physical support and stability for the device.

## Getting Started with SenseCraft HMI

The reTerminal E1004 comes pre-loaded with firmware that supports **SenseCraft HMI**, a no-code platform that allows you to design and deploy personalized dashboards effortlessly.

### Step 1. Power On and Network Configuration

1.  Turn on the **Power Button** to turn on the reTerminal E1004.
2.  Use your smartphone to connect to the device's hotspot (AP mode) to configure the Wi-Fi credentials.
3.  The screen will display a "Network Configuration" QR code or use browser open 192.168.4.1 page.
4.  Once connected to the internet, the device will display a **Device Code** or **Binding QR Code**.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### Step 2. Bind the Device

1.  Visit the [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) on your computer browser.
2.  Log in to your account (or create one if you haven't).
3.  Navigate to the **Device Management** section and click **Add Device**.
4.  Enter the **Device Code** displayed on your reTerminal E1004 screen to complete the binding process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### Step 3. Create Content on the Platform

1.  Go to the **Home Page** select a template you want or **Wrokspace** to create your work from sratch.
2.  [Click this link to learn how to use HMI Platform if you have question.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Step 4. Deploy Content to Device

1.  Once your design is ready, click the **Preview** button to check how it looks.
2.  Click the **Save** or **deploy** button.
3.  Select your bound reTerminal E1004 from the list.
4.  The platform will send the data to your device via Wi-Fi. The ePaper screen will refresh to display your new dashboard.

:::note
Due to the nature of E Ink technology, the screen refresh may take a few seconds to fully update the image and clear any ghosting.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

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