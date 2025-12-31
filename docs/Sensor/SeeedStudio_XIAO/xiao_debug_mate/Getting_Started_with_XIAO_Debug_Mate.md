---
description: This article provides a comprehensive introduction and usage guide for the Seeed Studio XIAO Debug Mate.
title: Getting Started with XIAO Debug Mate
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.webp
slug: /getting_started_with_xiao_debug_mate
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

The device is equipped with the following key hardware components:

* ① **User Button**: A push-button located on the top edge, used for user input like making selections or confirming actions.

* ② **XIAO Socket**: A dedicated socket composed of female headers, designed for a direct, plug-and-play connection with a Seeed Studio XIAO series board.

* ③ **Pogo pins**: A set of spring-loaded probes located within the XIAO Socket (②). Their specific function is to make reliable electrical contact with the pads on the back side of the installed XIAO mainboard.

* ④ **Outer Inner Expansion Header**: This header is specifically designed to break out the signals from the XIAO mainboard's back pins, which are connected via the Pogo Pins (③). It features a dual-interface design with female headers on the top (for Dupont wires) and male pins on the bottom. This versatile design allows the entire device to be used as a daughterboard on another system.

* ⑤ **Inner Expansion Header**: This header breaks out the pins from the left and right sides of the XIAO mainboard. Just like header ④, it features female headers on the top and male pins on the bottom, providing convenient access to the XIAO's rear-facing I/O.

* ⑥ **Rotary Encoder**: A rotary encoder wheel (roller) on the top edge, used for navigating menus, scrolling through options, and adjusting values on the display.

* ⑦ **Display**: 2.01-inch TFT LCD with a 240x296 resolution for clear data visualization and interaction.

* ⑧ **Grove Port**: For connecting external UART-based Grove modules.

* ⑨ **Baud Rate Indicator**: A visual indicator on the back of the device that clearly displays the currently selected UART baud rate.

* ⑩ **USB-C Port**: A USB-C port located on the side for providing power to the device and facilitating data communication, such as programming the XIAO board or UART passthrough.

## Getting Started

### Install Pin Stickers for the XIAO Debug Mate

Inside the package, you will find four pinout stickers. These are designed to be applied next to the expansion headers on the Debug Mate, giving you a quick and convenient reference for each pin's function.

To apply them correctly, notice the small **white triangle** on one corner of each sticker. This triangle is an alignment marker. It should be oriented to match the corresponding corner of the Debug Mate's PCB. The front and back stickers also have different text orientations to ensure they are readable from the correct side. Please refer to the image below for correct placement.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_1.jpg" style={{width:600, height:'auto'}}/></div>

Stickers use different colors to distinguish the functions of the two rows of pins. Dark blue pin labels correspond to the inner row, while light green pin labels correspond to the outer row.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_2.jpg" style={{width:600, height:'auto'}}/></div>

The markings on the front and back sides are also different. For example, on the front side, the XIAO pins are labeled with their pin numbers: D6, D7, D8, and so on. On the back side, these pins are marked with their protocols or functions: TX, RX, SCK, and so on.

### First Power-On

The XIAO Debug Mate requires a constant 5V/1A power supply via its USB-C port. Upon connecting the power, the device will boot up, display a startup animation, and then land on the main interface, ready for operation.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/first_power.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Generally speaking, all functions of XIAO on Debug Mate do not require additional power supply to XIAO, unless otherwise specified.
:::

### Operational Logic

The device's interface is controlled by a simple and intuitive two-part system:

*   **Rotary Encoder (Roller):** Scroll the roller to navigate through menus and highlight selectable options.
*   **Button:**
    *   **Single-Click:** Confirms a selection or enters a highlighted menu.
    *   **Long-Press (hold for >2s and release):** Acts as a "Back" button, returning you to the previous screen or menu.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/operational_logic.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Introduction to the Operation Menu

The XIAO Debug Mate's firmware is organized into three main functional pages, which you can navigate using the roller and button.

**1. Main Page (Dashboard)**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.jpg" style={{width:600, height:'auto'}}/></div>

This is the default screen and serves as a central dashboard. It provides a real-time overview of all key functions:
*   **Debug Status:** Indicates if the SWD `DEBUG` function is active.
*   **UART Status:** Shows the current baud rate and activity on the RX/TX lines.
*   **Power Metrics:** Displays the instantaneous Voltage (`U`), Current (`I`), and Power (`P`) being drawn by the connected XIAO.

From this page, you can access the other two main functions. Simply scroll the roller to highlight either the UART module (bottom left) or the Power module (bottom right), and then single-click the button to enter its dedicated page.

<div class="table-center">
	<table align="center">
		<tr>
			<th>UART module</th>
			<th>Power module</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/2.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/3.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

:::tip
1. The Debug function **is only effective** under the main page menu.
2. The main page cannot retrieve serial port messages. Serial port pass-through and monitoring functions require accessing the serial port settings page.
:::

**2. UART Page**

This page is dedicated to serial communication and offers two distinct modes:

*   **UART Monitor:** This mode captures and displays serial data directly on the Debug Mate's 2.01-inch LCD screen. It's perfect for quick, on-the-go debugging without a PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/5.jpg" style={{width:600, height:'auto'}}/></div>

*   **UART Passthrough:** In this mode, the Debug Mate acts as a USB-to-serial bridge. It forwards all serial data from the target device to your PC. The data is **not** displayed on the device's screen but can be viewed using any serial monitor software on your computer (e.g., Arduino IDE Serial Monitor, PuTTY, CoolTerm).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/4.jpg" style={{width:600, height:'auto'}}/></div>

Within the UART page, you can configure the following by highlighting the option with the roller and clicking the button:
*   **Source:** Choose between monitoring the onboard `XIAO` or an external device connected to the `Grove` port.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Choose XIAO</th>
			<th>Choose Grove</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/6.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/7.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

*   **Baud Rate:** Select from 9 preset baud rates, ranging from 4800 bps to 921600 bps. The LED matrix on the back will visually update to reflect your selection.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Front</th>
			<th>Back</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/8.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/9.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

**3. Power Analyzer Page**

This page provides a high-precision power analysis tool with three different UI views, which you can cycle through by scrolling the roller.

*   **View 1: Simple Digital Meter**
    This view presents a clean, large-font display of instantaneous Voltage (V), Current (A), and Power (W), measured with a precision of up to four decimal places.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

*   **View 2: Low-Power Detail View**
    Optimized for low-power applications, this view focuses on current and power. It displays the values in multiple units simultaneously (e.g., `18.234 mA` and `18234 uA`), saving you the effort of manual unit conversions when tracking microamp-level consumption.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

*   **View 3: Statistical Analysis**
    This view is ideal for project validation and battery life estimation. It tracks and displays:
    *   **Min/Max:** The minimum and maximum current and power values recorded during the session.
    *   **Total:** The cumulative energy (`Wh`) and charge (`Ah`) consumed over time.
    *   **Time:** The duration of the measurement session.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

    :::tip
    The first time you enter the View 3, the power consumption timer will start. When you press and hold the confirmation button to exit the Power Analyzer Page, the timer will reset to zero.
    :::

:::tip **Important Note on Power Measurement:**
The power analysis function measures the power supplied to the XIAO via its **5V pin**. This measurement includes the power consumed by the XIAO's onboard Power Management IC (PMIC) and other 5V-rail components. If you plan to power your final project with a LiPo battery connected directly to the XIAO's 3.3V/BAT pads, the actual power consumption will be **lower** than what is reported by the Debug Mate. Please use this data as a valuable reference, keeping this difference in mind for final battery calculations.
:::

### XIAO Debug Mate: Features and Usage

For detailed guides on how to use the DAPLink debugger, UART monitor, and power analyzer with specific IDEs and projects, please refer to our dedicated feature guides.

- [XIAO Debug Mate DAPLink Debugger](https://wiki.seeedstudio.com/xiao_debug_mate_debug)
- [XIAO Debug Mate UART Monitor](https://wiki.seeedstudio.com/xiao_debug_mate_serial)
- [XIAO Debug Mate Power Meter](https://wiki.seeedstudio.com/xiao_debug_mate_power)

## Reset

If you need to restart the XIAO Debug Mate, you have two options:
1.  Unplug and re-plug the USB-C power cable.
2.  Use the hidden **Reset button**. It is located in a small hole directly beneath the USB-C port. You can gently press it using a SIM card ejector tool or a paperclip.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/13.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Do not apply excessive force when using the reset button, as this could damage the internal switch.
:::

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

1.  Download the firmware package.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

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

1.  Download the factory firmware `.bin` file.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

2.  Put your XIAO Debug Mate into Boot Mode.
3.  Open a terminal or command prompt and run the appropriate command below.

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
esptool.exe --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
</Tabs>

### Method 3: Using PlatformIO with Open-Source Firmware

The firmware for XIAO Debug Mate is completely open-source and available on [GitHub](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate). If you want to customize the firmware or build it from source, you can use PlatformIO.

1. Clone the repository:

```bash
git clone https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate.git
```

2. Navigate to the firmware directory

3. Open the project in PlatformIO:
   - If using PlatformIO IDE (VS Code extension), open the folder containing `platformio.ini`
   - Or use PlatformIO Core CLI

4. Put your XIAO Debug Mate into **Boot Mode** as described in the Boot section above.

5. Build and upload the firmware:

<Tabs>
<TabItem value="PlatformIO IDE" label="PlatformIO IDE" default>
- Click the "Upload" button in the PlatformIO toolbar
- Or use the command palette: `PlatformIO: Upload`
</TabItem>
<TabItem value="PlatformIO CLI" label="PlatformIO CLI">

```bash
pio run --target upload
```

</TabItem>
</Tabs>

This method allows you to:
- Modify the firmware to add custom features
- Build the latest development version
- Contribute to the open-source project
- Learn from the source code implementation

:::tip
Make sure you have PlatformIO installed. You can install it as a VS Code extension or as a standalone CLI tool via pip: `pip install platformio`
:::

## Troubleshooting

### Q1: XIAO Debug Mate Pin Compatibility Guide

**Problem:** I'm having trouble with the debug function; it seems like there's a bad connection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/14.jpg" style={{width:600, height:'auto'}}/></div>

**Solution:** This can happen due to two main reasons:

1.  **Compatibility with Older XIAO Boards:**
    Some of the earlier XIAO boards, such as the **XIAO SAMD21**, **XIAO RP2040**, and **XIAO nRF52840**, were designed before a unified standard for the back-side pads was established. While the Debug Mate's pogo pins are positioned to be as compatible as possible, slight variations in these older boards may lead to imperfect contact.

    If you experience an unstable debug connection, try **slightly adjusting the position** of the XIAO board within the socket. You may not need to push it all the way down. A small shift can often ensure the pogo pins make solid contact with the SWD pads on the back of the XIAO.

2.  **Wear and Tear on Headers:**
    The female headers, like any mechanical connector, have a finite lifespan. To maximize their durability and ensure a reliable connection, please follow this best practice:
    *   When inserting or removing a XIAO board, apply force **straight up or down**.
    *   **Avoid wiggling or rocking** the XIAO board back and forth, as this can bend the pins, widen the contacts in the female header, and lead to poor connections over time.

## Special Thanks

Special thanks to **啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)** for the design inspiration for the LED matrix. The design of the Debug Mate's onboard LED indicator is a reference to their excellent open-source project. The original design is very creative and practical.

If you would like to see the original design, you can check out the demonstration video and the author's homepage through the links below.

*   [Original Design Demonstration Video](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [Author's Bilibili Homepage](https://space.bilibili.com/1155738723)

## Resources

- **[ZIP]** [Seeed Studio XIAO Debug Mate 3D Printed Case](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_3D_Printed_Case.zip)
- **[PDF]** [Seeed Studio XIAO Debug Mate SCH PDF](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH_20250926.pdf)
- **[ZIP]** [Seeed Studio XIAO Debug Mate SCH&PCB KiCAD Files](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH&PCB_20250926.zip)
- **[GITHUB]** [Seeed Studio XIAO Debug Mate Firmware Repository](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)

## Tech Support & Product Discussion

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
