---
description: The LED Driver Board for XIAO is a smart module designed to customize your spaces with smart LED lights.
title: LED Driver Board for XIAO
keywords:
- xiao
- light
- LED
image: https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO.webp
slug: /led_driver_board
last_update: 
  date: 05/21/2025
  author: Carla
---

# Getting Started with LED Driver Board for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/dimension.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

LED Driver Board for XIAO is a compact yet powerful solution supporting both 5V and 12V LED strips, including popular addressable RGB LEDs such as NeoPixel WS2812, WS2813, WS2815. Compatible with all XIAO boards, it enables smart control and automation through WLED and Home Assistant when using XIAO ESP32 Series, while offering flexible power options and comprehensive protection for safe, reliable operation in your lighting setup.

## Introduction

### Feature

- **Wide LED Compatibility**

    Versatile driver supporting both **5V/3A** and **12V/2A** LED strips with built-in power regulation. Compatible with single-color and addressable RGB LEDs including NeoPixel **WS2811, WS2812(B), WS2813, WS2815, SK6812, and other 1-wire protocol LEDs**, providing extensive lighting options.

- **XIAO-Compatibility for Smart Control**

    Designed for all [Seeed Studio XIAO boards](https://www.seeedstudio.com/xiao-series-page). When paired with XIAO ESP32 Series (ESP32-C3/S3/C6), unlock smart features through:
  - **[WLED](https://kno.wled.ge/)**  app support - Control colors, effects, brightness, and create custom animations ([XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) is highly recommended)
  - **[Home Assistant](https://www.home-assistant.io/)** integration via ESPHome - Enable remote control, automation, and smart home scenarios

- **Grove Ecosystem Compatibility**

    The onboard plug-and-play Grove interface is compatible with over 400 Seeed Studio modules, allowing you to easily enhance lighting interactivity with the environment and motion for smarter, personalized effects:
  - `For AI Vision Detection`

        [Grove - Vision AI Module V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)

        [Grove Smart IR Gesture Sensor (PAJ7660)](https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html)

  - `For Temperature & Humidity Detection`

        [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)

        [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)

        [Grove - Temp and Humi Sensor(SHT31)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)

  - `For Motion Detection`

        [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

        [Grove - 3-Axis Analog Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)

        [Grove - IMU 9DOF (ICM20600+AK09918)](https://www.seeedstudio.com/Grove-IMU-9DOF-ICM20600-AK09918.html)

  - **[`And more 400+`](https://wiki.seeedstudio.com/Grove_System/)**

### Specification

<table style={{textAlign:'center'}}>
 <tr>
        <th>Item</th>
        <th>Detail</th>
 </tr>
    <tr>
        <td>Power Input</td>
        <td>DC 12V/2A</td>
    </tr>
    <tr>
        <td>LED Power Support</td>
        <td>DC 12V / DC 5V</td>
    </tr>
    <tr>
        <td>Max Operating Current</td>
        <td>12V/2A 5V/3A</td>
    </tr>
    <tr>
        <td>LED Connector</td>
        <td>4 Pin 3.81mm Screw Terminal Block Connector: <br></br>12V | 5V | A0 | GND</td>
    </tr>
    <tr>
        <td>Grove I²C Connector</td>
        <td>D5 | D4 | 5V | GND</td>
    </tr>
    <tr>
        <td>User Button</td>
        <td>D3</td>
    </tr>
    <tr>
        <td>User Pin Header</td>
        <td>SPI x1, Uart x1, Digital x2</td>
    </tr>
</table>

### Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

#### Adapted power input

- [PowerAdapter, 12V/2A/24W, European Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html)
- [PowerAdapter, 12V/2A/24W, American Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)
- Other DC 12V Power Adapter with **5.5mm x 2.1mm x 10±0.3mm** Plug
- DC 12V Wire

#### Supported LEDs Guide

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>Product</th>
    <th>Name</th>
    <th>Operating Voltage</th>
    <th>Connect via</th>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-10-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED Stick (10-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED Stick (15-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-20-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED Stick (20-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-16-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LED Ring (16-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-20-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LED Ring (20-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-24-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LED Ring (24-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-Ultimate-RGB-LED-Ring.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Ultimate RGB LED Ring</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter-p-1665.html">Grove - WS2813B RGB LED Flexi-Strip 30 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Terminal Block</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/WS2813B-Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-2817.html">Grove - WS2813B RGB LED Flexi-Strip 60 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Terminal Block</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-30-LED-m-1m.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 30 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-60-LED-m-1m.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 60 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>  
  </table>
</div>

## Getting Started

This LED driver board is designed specifically for the Seeed Studio XIAO series. Its functionality varies depending on the paired XIAO microcontroller. For example, when used with the XIAO nRF52840, it can read onboard IMU data to dynamically change LED colors. When paired with ESP32 series boards, it can be integrated into Home Assistant for seamless smart home control. Additionally, with the XIAO ESP32-C3, it supports running WLED for advanced LED effects. Follow the tutorial below to explore these capabilities in detail.

### Play with Arduino

You need to configure the Arduino environment for the XIAO and add the on-board package.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### Software Preparation

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2350** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_rp2350_arduino/#setting-up-the-software)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C6** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO RA4M1** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO MG24** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_mg24_getting_started/#software-preparation)** to finish adding.

**Step 3.** Install libraries needed.

- Open Arduino IDE, navigate to **Sketch > Include Library > Manage Libraries...** to search the library, type the keyword "**Adafruit_NeoPixel**" library in Ardunio library Manager and install the lastest version.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" style={{width:800, height:'auto'}}/></div>

- [Download Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) as a zip file, open Arduino IDE, navigate to **Sketch > Include Library > Add .ZIP Library...** and open the downloaded zip file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" style={{width:800, height:'auto'}}/></div>

:::note

The MG24 is currently not supported by the standard NeoPixel library. However, Silicon Labs provides an alternative in the official MG24 core: the <strong>[ezWS2812](https://github.com/SiliconLabs/arduino/tree/refs/heads/main)</strong> driver, which supports WS2812 LEDs via hardware SPI or GPIO. You can find more details <strong>[here](https://forum.seeedstudio.com/t/driving-an-led-strip-with-xiao-mg24-neopixel-fastled-ezws2812/284695)</strong>.

:::

#### Simple Example

**Step 1.** Hardware preparation

<table align="center">
 <tr>
  <th>Seeed Studio XIAO RP2350</th>
        <th>LED Driver Board for XIAO</th>
        <th>Grove - RGB LED Stick (15-WS2813 Mini)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Step 2.**  Connect Seeed Studio XIAO RP2350, LED Driver Board for XIAO and Grove - RGB LED Stick (15-WS2813 Mini) as show below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Step 3.** The following sample program is control LEDs containing 3 NeoPixel so that each of the three beads displays the colors **red**, **green**, and **blue**

```cpp
#include <Adafruit_NeoPixel.h>

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN D5

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 3 

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin(); // INITIALIZE NeoPixel strip object 
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
  // The first NeoPixel in a strand is #0, second is 1, all the way up
  pixels.setPixelColor(0, pixels.Color(255, 0, 0)); 
  pixels.setPixelColor(1, pixels.Color(0, 255, 0));
  pixels.setPixelColor(2, pixels.Color(0, 0, 255));
  // pixels.setBrightness() takes brightness values, from 0 up to 255
  pixels.setBrightness(255);

  pixels.show();   // Send the updated pixel colors to the hardware.

}

```

Upload the program and power LED Driver Board, if all goes well, you can see like this:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

#### Motion-Color Sync LED

**Step 1.** Hardware preparation

<table align="center">
 <tr>
  <th>XIAO nRF52840</th>
        <th>LED Driver Board for XIAO</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010469-seeed-studio-xiao-nrf52840-sense-45font-logo.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Step 2.**  Connect Seeed Studio XIAO nRF52840, LED Driver Board for XIAO and WS2812 LED as show below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

**Step 3.** The following code works by reading the data from the XIAO nRF52840 onboard LSM6DS3 acceleration sensor and changing the color of LED strip in real time, with the color mapped from the current acceleration value.

```cpp
#include <Arduino.h>
#include "LSM6DS3.h"              
#include <Adafruit_NeoPixel.h>     
#include "Wire.h"                  
#include "math.h"                  

// Define the pin connected to the NeoPixel data input
#define PIN A0

// Total number of NeoPixel LEDs
#define NUMPIXELS 300

// Create a NeoPixel strip object
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// Variables for accelerometer data
float ax = 0;
float ay = 0;
float az = 0;

// RGB color components
uint8_t r = 0;
uint8_t g = 0;
uint8_t b = 0;

// Packed 24-bit RGB color value
uint32_t packedRGB = 0;

// Create an instance of the LSM6DS3 IMU in I2C mode at address 0x6A
LSM6DS3 myIMU(I2C_MODE, 0x6A);


void setup() {

    Serial.begin(9600);

    // Initialize the IMU sensor and check for errors
    if (myIMU.begin() != 0) {
        Serial.println("Device error"); 
    } else {
        Serial.println("Device OK!");   
    }

    // Initialize the NeoPixel strip
    pixels.begin();
}


void loop() {
    // Read acceleration values from the IMU
    ax = myIMU.readFloatAccelX();
    ay = myIMU.readFloatAccelY();
    az = myIMU.readFloatAccelZ();

    // Map acceleration (-1g to +1g) to RGB values (0 to 255)
    // Centered at 128 to allow both positive and negative variations
    r = constrain(ax * 100 + 128, 0, 255);
    g = constrain(ay * 100 + 128, 0, 255);
    b = constrain(az * 100 + 128, 0, 255);

    // Combine RGB components into a single 24-bit color value
    packedRGB = (r << 16) | (g << 8) | b;

    // Clear all existing pixels
    pixels.clear();

    // Fill all LEDs with the computed color
    pixels.fill(packedRGB, 0, NUMPIXELS);
    pixels.setBrightness(255);
    pixels.show();
    delay(100);
}

```

Upload the program and power LED Driver Board, if all goes well, you can see like this:

<div style={{textAlign:'center'}}>
<video width={225} height={400} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.webm" />
</video>
</div>

When you shake the module, the color of the light strip changes. The more violent the shaking, the brighter the color.

### Play with Home Assistant via ESPHome

#### Hardware Preparation

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Home Assistant Devices</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### Software Preparation

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) is a tool which aims to make managing your ESP boards as simple as possible. It reads in a YAML configuration file and creates custom firmware which it installs on your ESP device. Devices or sensors added in ESPHome’s configuration will automatically show up in Home Assistant’s UI. ESPHome can help you connect and send the data to Home Assistant devices.

:::note
If this is your first time using Home Assistant and ESPHome, you can follow <strong>[here](https://www.home-assistant.io/installation/)</strong> for a step-by-step guide on installing Home Assistant.
:::

ESPHome is available as a **Home Assistant Add-On** and can simply be installed via the add-on store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **Step 1.** Click **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Step 2.** Enable all the options and click **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

You will see the following window if ESPHome is successfully loaded

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### Temp-Color Sync LEDs

**Step 1.** Hardware preparation

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32S3</th>
        <th>LED Driver Board for XIAO</th>
        <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991114-xiao-esp32s3-font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Step 2.** Connect Seeed Studio XIAO ESP32S3, LED Driver Board for XIAO and WS2812 LED as show below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32s3_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Step 3.** Open ESPHome page, and click **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**Step 4.** Click CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**Step 5.** Enter a **Name** for the device and enter WiFi credentials such as **Network name** and **Password**. Then click **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

**Step 6.** Select **ESP32-S3** and click

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

**Step 7.** Click **SKIP** because we will configure this board manually

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**Step 8.** Click **EDIT** under the newly created board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

**Step 9.** Copy the follow codes to end of .yaml file, the XIAO ESP32S3 reads temperature from a DHT11 sensor and changes the color of an RGB LED based on how far the temperature is from a target value, using blue for cold, red for hot, and green for normal.

```yaml
# DHT11 temperature and humidity sensor
sensor:
  - platform: dht
    pin: GPIO6
    model: DHT11  # Change to DHT22 or AM2302 if using a different model
    temperature:
      name: "Temperature"
      id: temp_sensor
    humidity:
      name: "Humidity"
    update_interval: 3s # Read new values every 3 seconds

# RGB LED (WS2812 single LED)
light:
  - platform: neopixelbus
    variant: ws2813  # ⚠️ Adjust based on your actual LED type (e.g., ws2812, ws2813, sk6812)
    type: GRB  # Color order (Green-Red-Blue)
    pin: GPIO1
    num_leds: 50 # Total number of NeoPixel LEDs
    name: "Temperature Color LED"
    id: rgb_led
    restore_mode: ALWAYS_ON
    default_transition_length: 0s

# Adjustable center temperature threshold
number:
  - platform: template
    name: "Target Temperature" # Center temperature value
    id: target_temp
    optimistic: true 
    min_value: 0 
    max_value: 40
    step: 0.1
    initial_value: 20.0 # Default center temperature (°C)

  - platform: template
    name: "Temperature Tolerance" # Tolerance around target temperature
    id: temp_tolerance
    optimistic: true
    min_value: 0
    max_value: 10
    step: 0.1
    initial_value: 5.0 # Default tolerance value (°C)

# Every 3 seconds, the LED color is updated:
# - Blue if too cold (below center - tolerance),
# - Red if too hot (above center + tolerance),
# - Green if temperature is close to the center,
# - Gradient between blue–green–red in transitional ranges.
#- If the temperature is not available, the LED blinks purple to indicate a sensor error.

interval:
  - interval: 3s
    then:
      - lambda: |-
          float t = id(temp_sensor).state;
          float center = id(target_temp).state;
          float tolerance = id(temp_tolerance).state;
          float r = 0.0, g = 0.0, b = 0.0;
          float ratio = 0.0;

          if (isnan(t)) {
            // Flash purple to indicate missing temperature
            static bool blink = false;
            blink = !blink;
            auto call = id(rgb_led).turn_on();
            call.set_rgb(blink ? 0.5 : 0.0, 0.0, blink ? 0.5 : 0.0);
            call.perform();
            return;
          }

          // Calculate RGB values based on temperature
          if (t <= (center - tolerance)) {
            b = 1.0;
            g = 0.0;
          } else if (t >= (center + tolerance)) {
            r = 1.0;
            g = 0.0;
          } else if (t <= center) {
            ratio = (center - t) / tolerance;
            b = ratio;
            g = 1.0 - ratio;
          } else {
            ratio = (t - center) / tolerance;
            r = ratio;
            g = 1.0 - ratio;
          }
          


          // Update LED
            auto call = id(rgb_led).turn_on();
            call.set_rgb(r, g, b);
            call.perform();
```

**Step 10.** Click on the Install button in the top right hand corner. Then select the last item **Manual download**, Select **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" style={{width:500, height:'auto'}}/></div>

It will then take a long time to download and compile, so please be patient. Once everything is ready, the firmware will be automatically downloaded to your computer.

**Step 11.** Using the [ESPhome Web tool](https://web.esphome.io/?dashboard_install) to upload the firmware to XIAO ESP32S3, click **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

Select the XIAO ESP32 serial port in the popup window, click **INSTALL** and then select the .bin file downloaded from above steps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**Step 11.** Once install successfully, you can see like this:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.webm" />
</video>
</div>

When cold air is blown to the temperature and humidity sensor, the color of the light strip gradually changes from red to blue as the temperature drops.

**Step 12.** Add to Dashboard

Open **Setting** >> **Devices & Services**, you can find your ESPhome Device, click **ADD** and add it to dashboard, you can see like this:

  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led1.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led2.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led3.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led4.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led5.png"/>
  </div>

### Run WLED

#### Hardware Perparation

<table align="center">
 <tr>
  <th>XIAO ESP32C3</th>
        <th>LED Driver Board for XIAO</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

Connect Seeed Studio XIAO nRF52840, LED Driver Board for XIAO and WS2812 LED as show below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32c3_ledDriver_led.jpg" style={{width:600, height:'auto'}}/></div>

#### Install WLED

**Step 1.** Open <strong>[WLED install web](https://install.wled.me/)</strong>, and connect your XIAO ESP32C3 to your PC, click **Install**, connect your port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_install.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** After install successfully，it need you config device wifi, it is recommended to keep your XIAO ESP32C3 and your computer/mobile phone in the same LAN.

**Step 3.** Now, you can click **VISIT DEVICE** to control your LED strip.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/visit_device.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Or you can install **WLED** App on your phone APP Market, and find your LED device with the + sign in the upper right corner of the software.

If all work well, you can see like this:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.webm" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.mp4" />
</video>
</div>

## Resources

- **[PDF]**: [LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF](https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_20250417.pdf)

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
