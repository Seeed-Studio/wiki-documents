---
description: Getting Started with XIAO ePaper Display Board(nRF52840) - EN05
sku: 100085486
title: Getting Started with EN05
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 10/20/2026
  author: Nemo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/epaper_en05/
updatedAt: '2026-10-20'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Getting Started with XIAO ePaper Display Board - EN05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introduction

Powered by **XIAO nRF52840 Plus**, the display board EN05 supports a wide range of 24-pin ePaper displays. It features extension IO port for connecting additional sensors, JST 2.0 mm battery connector with power switch, built-in charging IC, and comes with three user buttons. Well-suited for ultra-low-power ePaper projects such as smart name badges, electronic price tags, meeting room signage, and portable information boards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg" style={{width:800, height:'auto'}}/></div>

### Features

- **Powered by XIAO nRF52840 Plus:** Works immediately when connected to a compatible ePaper display, with onboard NFC interface for tap-to-configure, pairing, or triggering content updates.
- **Versatile Display Support:** Compatible with a wide range of 24-pin ePaper displays, supporting 24-Pin ePaper displays for various project requirements.
- **Extension IO Port:** Enables connection of additional sensors, such as temperature and humidity sensors, for enhanced functionality.
- **BAT Connector with Switch:** Provides simple battery connection and integrates a switch, enabling efficient power management and energy savings.
- **Wide Software Compatibility:** Whether you prefer coding with Arduino or PlatformIO, this driver board has you covered, providing maximum flexibility for your projects.

### Specifications

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Processor</th>
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>Wireless</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>ePaper Connector</th>
      <td>SPI FPC 24-Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Battery Connector</th>
      <td>JST 2.0mm (3.7V Li-Battery)</td>
    </tr>
    <tr>
      <th>Switch</th>
      <td>Hardware power slide switch</td>
    </tr>
    <tr>
      <th>Buttons</th>
      <td>1x Reset button (side-mounted)<br />3x User button (side-mounted)</td>
    </tr>
    <tr>
      <th>PCB Thickness</th>
      <td>1.2mm</td>
    </tr>
  </tbody>
</table>

### ePaper Board Selection Guide

<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>ePaper Display Board EN05</th>
<th><a href="https://wiki.seeedstudio.com/epaper_EN04/">ePaper Display Board EN04</a></th>
<th><a href="https://wiki.seeedstudio.com/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processor</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO Series</td>
            <td>XIAO Series</td>
        </tr>
        <tr>
            <th>Compatible ePaper Displays</th>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper Connector</th>
            <td>FPC 24 Pin, 0.5mm</td>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>Battery Connector</th>
            <td>JST 2.0mm</td>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Switch</th>
            <td>Battery Power ON/OFF</td>
            <td>Battery Power ON/OFF</td>
            <td>/</td>
            <td>Battery Power ON/OFF</td>
        </tr>
        <tr>
            <th>Button</th>
            <td>1x Reset button<br />3x User button</td>
            <td>1x Reset button<br />3x User button</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Extension IO Port</th>
            <td>connection of additional sensors</td>
            <td>/</td>
            <td>connection of others controller</td>
            <td>connection of additional sensors</td>
        </tr>
    </tbody>
</table>

### Application

- **Smart Name Badge**: Create an ultra-low-power conference or employee badge that displays names, schedules, or QR codes, with NFC tap-to-configure content updates.
- **Electronic Shelf Label**: Build battery-powered price tags that can run for months on a single charge and refresh only when the price changes.
- **Meeting Room Signage**: Display room status, booking information, and upcoming events outside meeting rooms with minimal power consumption.
- **Environmental Sensor Dashboard**: Combine the extension IO port with temperature and humidity sensors to show live environmental data on an always-visible ePaper screen.
- **Portable Information Board**: Carry a lightweight, battery-powered display for task lists, notes, or reference information that stays readable even when powered off.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/HardwareOverview_EN05.png" style={{width:900, height:'auto'}}/></div>

### Supported ePaper Displays

The EN05 supports the following 24-Pin SPI ePaper displays:

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple Color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### User Buttons

The EN05 features three user-programmable buttons that can be used for various control purposes. All buttons are active-low — they read LOW when pressed and HIGH when released.

On the EN05, the three buttons are connected to the XIAO nRF52840 Plus as follows:

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D9</td>
    </tr>
  </tbody>
</table>

:::note
The user buttons are programmable and can be configured for various functions such as page switching, mode selection, or triggering specific actions in your ePaper project.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/EN05_Buttons.png" style={{width:700, height:'auto'}}/></div>

### Battery Connector

The EN05 is equipped with a JST 2.0 mm battery connector and a built-in charging IC, making it suitable for battery-powered low-power ePaper projects.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/battery.png" style={{width:700, height:'auto'}}/></div>

## Getting Started with Arduino

### Install Seeed GFX2 Library

All ePaper examples for the EN05 are built on the **Seeed_GFX2** Arduino library, which supports every ePaper display listed in the [Supported ePaper Displays](#supported-epaper-displays) section. The examples below use the **7.5-inch Monochrome ePaper (800 x 480)** as an example.

**Step 1. Download the Seeed_GFX2 Library**

Visit the [Seeed_GFX2 GitHub repository](https://github.com/Seeed-Studio/Seeed_GFX2), click the green **Code** button, and select **Download ZIP** to save the library to your computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**Step 2. Add the Library to Arduino IDE**

Open the Arduino IDE, navigate to **Sketch → Include Library → Add .ZIP Library...**, and select the ZIP file you just downloaded.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### Configure and burn the program

1. Navigate to **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. In **Tools → Board**, select **Seeed XIAO nRF52840 Plus**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

3. Connect the board via USB Type-C, select the corresponding serial port, and click **Upload**. Once the upload completes, the ePaper will refresh and display the demo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.png" style={{width:300, height:'auto'}}/></div>

:::note
The example paths above use the 7.5-inch Monochrome display as an example. For other supported displays, simply pick the folder matching your screen model under **XIAO ePaper Display Board - EN05** — each screen ships with **HelloWorld**, **Bitmap_&lt;screen_model&gt;** (e.g. `Bitmap_7_5_inch_Monochrome`) and **Custom_Demo** examples.
:::

## Software Overview

#### Basic Button Reading Example

This example demonstrates how to detect all three button presses and print messages to the serial monitor.

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (from the EN05 schematic V1.11)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D9
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 9;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

## Troubleshooting

**Q1: The ePaper screen shows nothing after power-on.**

- **Check the FPC cable orientation.** Make sure the ePaper FPC cable is inserted in the correct direction. Reversing the connector can cause a blank screen and may damage the display.
- **Press the RESET button.** After uploading firmware or connecting power, press the reset button once to trigger a screen refresh.

**Q2: The display shows garbled content or partial refresh.**

- **Confirm the screen model selection.** In your Arduino example, make sure you selected the exact screen model (size and color type). Choosing the wrong model will cause incorrect rendering.
- **Wait for a full refresh.** ePaper displays use a full refresh cycle — partial or ghosting effects during the refresh are normal and will clear once the cycle completes.

**Q3: The board does not power on when using battery.**

- **Check the power switch.** Slide the battery power switch to the ON position — the board will not draw power from the battery when the switch is off.
- **Verify the JST connector polarity.** Ensure the JST 2.0 mm battery connector is plugged in with the correct polarity. Reversed battery polarity may damage the hardware. Verify the connector's +/− markings before connecting.
- **Charge the battery.** If the battery is fully drained, the board may not start. Connect USB Type-C to charge the battery and try again.

**Q4: The computer does not detect the board, or no serial port appears.**

- **Press the RESET button.** With the board connected via USB, press and release the RESET button to re-enumerate the USB port, then try again.
- **Use a data-capable USB cable.** Some USB cables only provide power and do not support data transfer. Switch to a known-good data cable.
- **Check the USB port.** Try a different USB port on your computer — some ports may have power or driver issues.

**Q5: Arduino IDE upload fails.**

- **Select the correct board.** Go to **Tools** → **Board** and make sure **Seeed XIAO nRF52840 Plus** is selected. Do not choose other XIAO board variants.
- **Select the correct port.** Go to **Tools** → **Port** and pick the serial port corresponding to your board. If no port appears, check your USB cable and connection.
- **Enter bootloader mode if needed.** If upload consistently fails, double-press the RESET button to enter bootloader mode, then re-select the port and upload again.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
