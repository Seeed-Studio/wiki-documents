---
description: Getting Started with XIAO ePaper Display Board(nRF52840) - EN04
title: Getting Started with XIAO ePaper Display Board(nRF52840) - EN04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
last_update:
  date: 11/25/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Getting Started with XIAO ePaper Display EN04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introduction

Powered by **XIAO nRF52840** Plus, the display board EN04 supports both **24-pin** and **50-pin** ePaper displays. It features a JST 2.0 mm battery connector with power switch, built-in charging IC, NFC function and comes with one reset and three user buttons. Well-suited for low-power ePaper projects such as digital signage, electronic labels, and portable information boards.

### Featrue

- **Powered by XIAO nRF52840 Plus:** Works immediately when connected to a compatible ePaper display.
- **Versatile Display Support:** Compatible with a wide range of ePaper screens, supporting both 24-Pin and 50-Pin interfaces with easy switching via jumper caps.
- **BAT Connector with Switch:** Provides simple battery connection and integrates a switch, enabling efficient power management and energy savings.
- **User-Friendly Buttons:** Includes 1 reset button and 3 user-programmable buttons, offering flexibility for project acceleration and customizable functions.

### Specification

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
      <th>ePaper Connector</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Battery Connector</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>Switch</th>
      <td>Battery Power ON/OFF</td>
    </tr>
    <tr>
      <th>Power Supply</th>
      <td>- 3.7V Li-Battery<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>Button</th>
      <td>- 1x Reset button<br />- 3x User button</td>
    </tr>
  </tbody>
</table>

### ePaper Board Selection Guide

<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processor</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO Series</td>
            <td>XIAO Series</td>
        </tr>
        <tr>
            <th>Compatible ePaper Displays</th>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper Connector</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>Battery Connector</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Switch</th>
            <td>Battery Power ON/OFF</td>
            <td>/</td>
            <td>Battery Power ON/OFF</td>
        </tr>
        <tr>
            <th>Button</th>
            <td>1x Reset button<br />3x User button</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Extension IO Port</th>
            <td>/</td>
            <td>connection of others controller</td>
            <td>connection of additional sensors</td>
        </tr>
    </tbody>
</table>

### Application

- **Smart Home Dashboard**: Display real-time information such as weather updates, calendar events, and notifications from various smart home devices.
- **Energy Monitoring**: Show energy consumption data from smart meters, helping homeowners track and manage their energy usage more efficiently.
- **Security Alerts**: Display alerts and notifications about security events, such as motion detection or door/window sensor activation.
- **Smart Thermostat Display**: Show temperature and humidity levels, as well as control settings for your smart thermostat.
- **Digital Photo Frame**: Create a WiFi-enabled digital photo frame that can display images from your smart home network.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

<!-- :::tip

This version XIAO ePaper Display Board(nRF52840) - EN04 does not support NFC functionality.

::: -->

### Supported ePaper

#### 24-Pin Connector

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochorm 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochorm 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochorm 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochorm 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochorm 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
When using the XIAO ePaper Display Board, make sure to set the jumper according to the ePaper display type:

- For 24 Pin ePaper displays → set the jumper to 24 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::

#### 50-Pin Connector

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.jpg" style={{width:600, height:'auto'}}/></div>
:::tip
When using the XIAO ePaper Display Board, make sure to set the jumper according to the ePaper display type:
- For 50 Pin ePaper displays → set the jumper to 50 Pin

⚠️ Using the wrong jumper setting may cause the ePaper to fail to display or show abnormal content. Always double-check the jumper position before powering on.

:::

## Software Overview

### Install Seeed GFX Library

:::tip
This library has same function as TFT library and no compatible with it. If you have installed TFT library or other similary display libraries, please uninstall it first.
:::

Download and install the Seeed GFX library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

Scroll down and open this link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Select your device type and it will generate some code. Copy those code and we will use them later.

:::tip
If you make the wrong choice, the screen will display nothing.

So please make sure your devices or components type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/6.jpg" style={{width:800, height:'auto'}}/></div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

There are 4 basic examples, open a basic example you like:

1. Bitmap: Display a bitmap image.
2. Clock: Display a clock.
3. Clock_digital: Display a digital clock.
4. Shape: Display different sizes of words and shapes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## Getting Start

Here, we use a 7.5-inch display as an example. The steps are the same for all 24-pin screens; the only difference is selecting the appropriate screen size in the driver.

Create a **new "driver.h" file** and paste those code into it. The code should be like:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN04
```

After that, go to **Tools** -> **Board** -> **XIAO ESP32S3** and **Tools** -> **Port** -> **Select the port your board is connected to**. Then click **Upload** to upload the code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/7.jpg" style={{width:1000, height:'auto'}}/></div>

Now you will see the feedback in your epaper screen! Following are the results of Helloworld examples.(If nothing appears, please click the reset button)

:::tip
⚠️ Note: ePaper Cable Orientation
When connecting the ePaper display to the XIAO ePaper Display Board, make sure the FPC cable is inserted in the correct direction.

⚠️ Do not reverse the connector! Inserting the cable upside down may cause the ePaper to fail to display or even damage the screen/board.
The image below shows the correct connection:
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.jpg" style={{width:500, height:'auto'}}/></div>

### User Buttons on XIAO ePaper Display Board(nRF52840) - EN04

The EN04 features three user-programmable buttons that can be used for various control purposes. This section demonstrates how to read button states and respond to button presses using Arduino.

On the EN04, the three buttons are connected to the XIAO nRF52840 Plus:

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
      <th>GPIO2_D1/A1</th>
      <th>GPIO3_D2/A2</th>
      <th>GPIO5_D4/A4</th>
    </tr>
  </tbody>
</table>


All buttons are active-low, meaning they read LOW when pressed and HIGH when released.

Basic Button Reading Example

This example demonstrates how to detect button presses and print messages to the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.jpg" style={{width:500, height:'auto'}}/></div>

<br></br>

```cpp
// Define button pin (GPIO2 corresponds to Arduino digital pin 2)
const int KEY_PIN = 2;

void setup() {
  // Initialize serial port (baud rate 9600, nRF52840 compatible with default Serial)
  Serial.begin(9600);
  // Wait for serial port initialization to complete (for nRF52840 Bluetooth module serial buffer)
  while (!Serial) delay(10);
  
  // Configure button pin as input mode with internal pull-up resistor enabled
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY_PIN, INPUT_PULLUP);
  
  Serial.println("nRF52840 Button Detection Program Started");
  Serial.println("Press the button connected to GPIO2 to see output...");
}

void loop() {
  // Read button state (INPUT_PULLUP mode: LOW = pressed, HIGH = not pressed)
  int keyState = digitalRead(KEY_PIN);
  
  // Detect if button is pressed (low level)
  if (keyState == LOW) {
    // 50ms delay for debounce handling (avoids false triggers from mechanical button bounce)
    delay(50);
    // Read state again to confirm (ensure stable press)
    if (digitalRead(KEY_PIN) == LOW) {
      // Print specified content via serial port
      Serial.println("Hello. This is key1");
      
      // Wait for button release (prevent repeated printing during long press)
      while (digitalRead(KEY_PIN) == LOW) {
        delay(10); // Short delay to reduce CPU usage
      }
    }
  }
  
  // Short delay in main loop for performance optimization
  delay(10);
}
```

### User Battery on XIAO ePaper Display Board(nRF52840) - EN04

When operating on battery power:

- The device will automatically enter low-power mode between refreshes

- Battery life depends on refresh frequency (typically 3-month on a full charge with default settings)

- The device will display a low battery icon in the top-right corner when the battery level is below 20%

:::tip
If you want to write some code by yourself to read battery voltage, it will be more precise to add 10ms delay before analogRead() function.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.jpg" style={{width:600, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);
  
  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```



## Resources
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


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
