---
description: Create a doc page with rich content.
title: Getting Started with XIAO Debug Mate
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_xiao_debug_mate
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Introduction

Seeed Studio XIAO Debug Mate is an open-source ESP32-S3 multi-tool that simplifies embedded system debugging with visual feedback. This all-in-one device features a standalone 2.01 inch TFT LCD display, LED status matrix, and native Seeed Studio XIAO support, delivering essential debugging functions: DAPLink chip-level debugging, built-in serial monitoring with UART passthrough, and accurate power consumption measurement. Plug-and-play design eliminates complex wiring for streamlined development.

### Specification

<div class="table-center">
	<table align="center">
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>Processor</td>
			<td>Espressif ESP32-S3</td>
		</tr>
		<tr>
			<td>Power Input</td>
			<td>USB-C 5V/1A</td>
		</tr>
		<tr>
			<td>Display</td>
			<td>2.01 inch TFT LCD with 240 x 296 resolution</td>
		</tr>
		<tr>
			<td>LED</td>
			<td>36-LED Matrix for Status Indication (Default: Serial Baud Rate)</td>
		</tr>
		<tr>
			<td>User Input</td>
			<td>1 x User Button/Boot Button <br /> 1 x Scroll Wheel <br /> 1 x Recessed Reset Button</td>
		</tr>
		<tr>
			<td>I/O Interface</td>
			<td>14 x XIAO Standard Pins <br /> 8 x Expansion Pins <br /> 4 x SWD Debugging Pins <br /> 1 x UART Grove Connector</td>
		</tr>
		<tr>
			<td>Product Size</td>
			<td>100x20x56 mm</td>
		</tr>
		<tr>
			<td>Product Weight</td>
			<td></td>
		</tr>
		<tr>
			<td>Software</td>
			<td>Supports DAPLink for debugging</td>
		</tr>
		<tr>
			<td>Supported OpenOCD Target Chipset</td>
			<td>SAMD21, nRF52840 (Sense), RP2040, RP2350, RA4M1, MG24 (Sense)</td>
		</tr>
		<tr>
			<td>Enclosure</td>
			<td>3D-Printed in Black PLA</td>
		</tr>
	</table>
</div>

### Feature

- DAPLink-Compatible SWD Interface for Professional Chip-Level Debugging

- Intelligent Serial Monitor & UART Passthrough

- Precision Power Profiling

- Standalone Visual Feedback System

- Open-Source Platform Designed for XIAO with Universal Compatibility


## Hardware Overview

The XIAO Debug Mate is a compact, all-in-one tool designed to streamline your embedded development workflow. Below is a detailed look at its hardware layout and components.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_front.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_back.png" style={{width:1000, height:'auto'}}/></div>

The device is equipped with the following key hardware components:

*   **Main Controller:** ESP32-S3 (240MHz Dual-Core, 8MB Flash, 8MB PSRAM)
*   **Display:** 2.01-inch TFT LCD with a 240x296 resolution for clear data visualization and interaction.
*   **User Interface:** A combination of one **Rotary Encoder** (roller) for navigation and one **Button** for selection and confirmation.
*   **Connectors:**
    *   **USB-C Port:** For power and data communication (UART passthrough).
    *   **Grove Port:** For connecting external UART-based Grove modules.
    *   **XIAO Socket:** Female headers and pogo pins for plug-and-play connection with any Seeed Studio XIAO board.
    *   **Expansion Headers:** Additional male and female pin headers to provide access to the XIAO's pins, allowing for easy connection of peripherals with DuPont wires.
*   **Indicators:** A 36-LED matrix on the back of the device, which cleverly serves as a visual indicator for the currently selected UART baud rate.

## Getting Started

### Install Pin Stickers for the XIAO Debug Mate

Inside the package, you will find four pinout stickers. These are designed to be applied next to the expansion headers on the Debug Mate, giving you a quick and convenient reference for each pin's function.

To apply them correctly, notice the small **white triangle** on one corner of each sticker. This triangle is an alignment marker. It should be oriented to match the corresponding corner of the Debug Mate's PCB. The front and back stickers also have different text orientations to ensure they are readable from the correct side. Please refer to the image below for correct placement.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.png" style={{width:1000, height:'auto'}}/></div>

### First Power-On

The XIAO Debug Mate requires a constant 5V/1A power supply via its USB-C port. Upon connecting the power, the device will boot up, display a startup animation, and then land on the main interface, ready for operation.

### Operational Logic

The device's interface is controlled by a simple and intuitive two-part system:

*   **Rotary Encoder (Roller):** Scroll the roller to navigate through menus and highlight selectable options.
*   **Button:**
    *   **Single-Click:** Confirms a selection or enters a highlighted menu.
    *   **Long-Press (hold for >2s and release):** Acts as a "Back" button, returning you to the previous screen or menu.

### Introduction to the Operation Menu

The XIAO Debug Mate's firmware is organized into three main functional pages, which you can navigate using the roller and button.

**1. Main Page (Dashboard)**

This is the default screen and serves as a central dashboard. It provides a real-time overview of all key functions:
*   **Debug Status:** Indicates if the SWD `DEBUG` function is active.
*   **UART Status:** Shows the current baud rate and activity on the RX/TX lines.
*   **Power Metrics:** Displays the instantaneous Voltage (`U`), Current (`I`), and Power (`P`) being drawn by the connected XIAO.

From this page, you can access the other two main functions. Simply scroll the roller to highlight either the UART module (bottom left) or the Power module (bottom right), and then single-click the button to enter its dedicated page.

:::tip
1. The Debug function is only effective under the main page menu.
2. The main page cannot retrieve serial port messages. Serial port pass-through and monitoring functions require accessing the serial port settings page.
:::

**2. UART Page**

This page is dedicated to serial communication and offers two distinct modes:

*   **UART Monitor:** This mode captures and displays serial data directly on the Debug Mate's 2.01-inch LCD screen. It's perfect for quick, on-the-go debugging without a PC.
*   **UART Passthrough:** In this mode, the Debug Mate acts as a USB-to-serial bridge. It forwards all serial data from the target device to your PC. The data is **not** displayed on the device's screen but can be viewed using any serial monitor software on your computer (e.g., Arduino IDE Serial Monitor, PuTTY, CoolTerm).

Within the UART page, you can configure the following by highlighting the option with the roller and clicking the button:
*   **Source:** Choose between monitoring the onboard `XIAO` or an external device connected to the `Grove` port.
*   **Baud Rate:** Select from 9 preset baud rates, ranging from 4800 bps to 921600 bps. The LED matrix on the back will visually update to reflect your selection.

**3. Power Analyzer Page**

This page provides a high-precision power analysis tool with three different UI views, which you can cycle through by scrolling the roller.

*   **View 1: Simple Digital Meter**
    This view presents a clean, large-font display of instantaneous Voltage (V), Current (A), and Power (W), measured with a precision of up to four decimal places.

*   **View 2: Low-Power Detail View**
    Optimized for low-power applications, this view focuses on current and power. It displays the values in multiple units simultaneously (e.g., `18.234 mA` and `18234 uA`), saving you the effort of manual unit conversions when tracking microamp-level consumption.

*   **View 3: Statistical Analysis**
    This view is ideal for project validation and battery life estimation. It tracks and displays:
    *   **Min/Max:** The minimum and maximum current and power values recorded during the session.
    *   **Total:** The cumulative energy (`Wh`) and charge (`Ah`) consumed over time.
    *   **Time:** The duration of the measurement session.

    :::tip
    The first time you enter the View 3, the power consumption timer will start. When you press and hold the confirmation button to exit the Power Analyzer Page, the timer will reset to zero.
    :::

:::tip **Important Note on Power Measurement:**
The power analysis function measures the power supplied to the XIAO via its **5V pin**. This measurement includes the power consumed by the XIAO's onboard Power Management IC (PMIC) and other 5V-rail components. If you plan to power your final project with a LiPo battery connected directly to the XIAO's 3.3V/BAT pads, the actual power consumption will be **lower** than what is reported by the Debug Mate. Please use this data as a valuable reference, keeping this difference in mind for final battery calculations.
:::

### XIAO Debug Mate: Features and Usage

For detailed guides on how to use the DAPLink debugger, UART monitor, and power analyzer with specific IDEs and projects, please refer to our dedicated feature guides (coming soon).

## Reset

If you need to restart the XIAO Debug Mate, you have two options:
1.  Unplug and re-plug the USB-C power cable.
2.  Use the hidden **Reset button**. It is located in a small hole directly beneath the USB-C port. You can gently press it using a SIM card ejector tool or a paperclip.

> **Caution:** Do not apply excessive force when using the reset button, as this could damage the internal switch.

## Boot

The main button on the device serves a dual purpose. During normal operation, it functions as the **Confirm/Back** button. However, it also acts as the **BOOT** button for entering the ESP32-S3's flash mode.

To enter Flash Mode:
1.  Ensure the device is powered off (unplugged).
2.  **Press and hold** the main button.
3.  While still holding the button, connect the USB-C cable to power the device.
4.  The device will now be in Flash Mode, ready to receive new firmware.

## Factory firmware

Should you need to restore the original factory firmware, you can do so using one of the methods below. First, put the device into **Boot Mode** as described in the section above.

### Method 1: Using Flash Scripts

We have prepared a package with easy-to-use flashing scripts for all major operating systems.

1.  Download the firmware package (link to be provided).
2.  Extract the contents of the zip file.
3.  Put your XIAO Debug Mate into Boot Mode.
4.  Run the appropriate script for your OS.

<Tabs>
<TabItem value="Windows" label="Windows" default>
Double-click the `flash.bat` file.
</TabItem>
<TabItem value="MacOS" label="MacOS">
Open a terminal, navigate to the extracted folder, and run the command: `sh flash.sh`
</TabItem>
<TabItem value="Linux" label="Linux">
Open a terminal, navigate to the extracted folder, and run the command: `sh flash.sh`
</TabItem>
</Tabs>

### Method 2: Using esptool

If you have `esptool` installed as part of the ESP-IDF or as a Python package, you can flash the firmware manually.

1.  Download the factory firmware `.bin` file (link to be provided).
2.  Put your XIAO Debug Mate into Boot Mode.
3.  Open a terminal or command prompt and run the appropriate command below, replacing `[PORT]` with your device's serial port name and `[FIRMWARE_FILE.bin]` with the path to the downloaded firmware.

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
# Find your port in Device Manager (e.g., COM3)
esptool.exe --chip esp32s3 --port [PORT] write_flash 0x0 [FIRMWARE_FILE.bin]
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
# Find your port with: ls /dev/tty.usbmodem*
esptool.py --chip esp32s3 --port [PORT] write_flash 0x0 [FIRMWARE_FILE.bin]
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
# Find your port with: ls /dev/ttyUSB*
esptool.py --chip esp32s3 --port [PORT] write_flash 0x0 [FIRMWARE_FILE.bin]
```

</TabItem>
</Tabs>

## Troubleshooting

### Q1: XIAO Debug Mate Pin Compatibility Guide

**Problem:** I'm having trouble with the debug function; it seems like there's a bad connection.

**Solution:** This can happen due to two main reasons:

1.  **Compatibility with Older XIAO Boards:**
    Some of the earlier XIAO boards, such as the **XIAO SAMD21**, **XIAO RP2040**, and **XIAO nRF52840**, were designed before a unified standard for the back-side pads was established. While the Debug Mate's pogo pins are positioned to be as compatible as possible, slight variations in these older boards may lead to imperfect contact.

    If you experience an unstable debug connection, try **slightly adjusting the position** of the XIAO board within the socket. You may not need to push it all the way down. A small shift can often ensure the pogo pins make solid contact with the SWD pads on the back of the XIAO.

2.  **Wear and Tear on Headers:**
    The female headers, like any mechanical connector, have a finite lifespan. To maximize their durability and ensure a reliable connection, please follow this best practice:
    *   When inserting or removing a XIAO board, apply force **straight up or down**.
    *   **Avoid wiggling or rocking** the XIAO board back and forth, as this can bend the pins, widen the contacts in the female header, and lead to poor connections over time.



## Resources







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
