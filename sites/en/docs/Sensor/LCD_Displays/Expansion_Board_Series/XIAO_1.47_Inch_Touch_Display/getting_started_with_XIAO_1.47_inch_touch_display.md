---
description: Getting started with Seeed Studio XIAO 1.47 Inch Touch Display
title: Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display
keywords:
  - XIAO
  - Display
  - Touch
  - LCD
image: TODO_IMAGE_URL.webp
slug: /getting_started_with_XIAO_1.47_inch_touch_display
sidebar_position: 1
sku: TODO
last_update:
  date: 06/09/2026
  author: Seeed Studio
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/
---

# Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display

<div style={{textAlign:'center'}}><img src="TODO_PRODUCT_IMAGE_URL" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="TODO_PRODUCT_LINK" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

Seeed Studio XIAO 1.47 Inch Touch Display is a multifunctional micro touch display expansion board designed for the Seeed Studio XIAO nRF52840 Plus. It integrates a 1.47-inch high-brightness IPS touch screen, a 6-axis IMU, a PDM digital microphone, and a lithium battery charge and discharge management system in a compact form factor.

With this expansion board, a XIAO development board can be upgraded into a compact AIoT prototyping platform with visual display, touch interaction, voice input, motion sensing, and portable power capability. It is especially useful for developers who want to build tiny smart devices, wearable interfaces, desktop AI assistants, cyberdeck modules, electronic pets, smart watches, sensor dashboards, and custom micro control panels.

:::note
The first released version of this product is designed for **Seeed Studio XIAO nRF52840 Plus**.
:::

This guide walks you through hardware connection, Arduino IDE setup, library installation, and basic examples for display, touch, and onboard peripherals.

### Specification

<table align="center">
 <tr>
     <th>Item</th>
     <th>Detail</th>
 </tr>
 <tr>
     <th>Controller</th>
     <td>Seeed Studio XIAO nRF52840 Plus</td>
 </tr>
 <tr>
     <th>Display</th>
     <td><strong>1.47-inch SPI touch display, 172 × 320</strong></td>
 </tr>
 <tr>
     <th>Microphone</th>
     <td>1 × onboard MEMS digital microphone with front-side sound inlet</td>
 </tr>
 <tr>
     <th>Motion Sensor</th>
     <td>1 × onboard 6-axis IMU for motion, gesture, and attitude sensing</td>
 </tr>
 <tr>
     <th>Battery Connector</th>
     <td>1 × 2-pin JST battery connector, marked BAT 3.7V</td>
 </tr>
 <tr>
     <th>Power Switch</th>
     <td>1 × 2-position slide switch marked ON/OFF</td>
 </tr>
 <tr>
     <th>microSD Card Slot</th>
     <td>1 × onboard low-profile microSD card slot, positioned near the board edge for enclosure access</td>
 </tr>
 <tr>
     <th>User Buttons</th>
     <td>2 × front-side user buttons, USR1 and USR2</td>
 </tr>
 <tr>
     <th>Expansion Pads</th>
     <td>I2C pads: GND, 3V3, SDA, SCL<br></br>I2S pads: VBUS, 3V3, GND, D11, D12, D13<br></br>User button pads: U1, U2<br></br>SWD pads: DIO, CLK, RST, GND</td>
 </tr>
 <tr>
     <th>Mounting Holes</th>
     <td>4 × corner mounting holes for fixing the board inside an enclosure or on a panel</td>
 </tr>
</table>

:::caution
仅供参考，具体需以商详确定后为准
:::

### Features

- **All-in-one XIAO expansion board**: Adds display, touch, microphone, motion sensing, battery management, buttons, and storage expansion to a compact XIAO-based device.
- **1.47-inch touch HMI**: The 172 × 320 IPS TFT touch screen is suitable for dashboards, menus, status panels, widgets, and interactive device controls.
- **Voice input ready**: The onboard MEMS digital microphone enables voice-triggered projects, tiny AI assistants, audio input prototypes, and sound-aware applications.
- **Motion and gesture sensing**: The onboard 6-axis IMU can be used for attitude detection, tap detection, gesture input, wearable interaction, and motion-based control.
- **Portable power design**: The 2-pin 3.7V battery connector and onboard power switch make it easier to build handheld, wearable, and always-on desktop devices.
- **microSD storage expansion**: The onboard low-profile microSD card slot provides local storage for images, logs, configuration files, audio clips, or UI resources.
- **Maker-friendly expansion pads**: I2C, I2S, user button, and SWD pads are broken out for debugging, customization, and integration into custom enclosures or control panels.
- **Designed for compact AIoT prototypes**: Ideal for electronic pets, smart watches, cyberdeck modules, server status monitors, micro control panels, and portable edge-AI interfaces.

## Hardware Overview

Before starting, refer to the pinout and hardware layout of the XIAO 1.47 Inch Touch Display. The table below describes how each XIAO pin is used by the onboard display, touch controller, microphone, IMU, microSD card slot, buttons, battery monitor, and expansion pads.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/hardware-overview2.png" style={{width:800, height:'auto'}}/></div>

### Pinout

<table align="center">
 <tr>
     <th>XIAO Pin</th>
     <th>Net Name</th>
     <th>Function</th>
 </tr>
 <tr>
     <td>D0</td>
     <td>PDM_CLK</td>
     <td>PDM digital microphone clock, connected internally to the onboard microphone.</td>
 </tr>
 <tr>
     <td>D1</td>
     <td>MIC_DATA</td>
     <td>PDM digital microphone data, connected internally to the onboard microphone.</td>
 </tr>
 <tr>
     <td>D2</td>
     <td>LCD_CS</td>
     <td>Display chip select signal.</td>
 </tr>
 <tr>
     <td>D3</td>
     <td>LCD_DC</td>
     <td>Display data/command select signal.</td>
 </tr>
 <tr>
     <td>D4</td>
     <td>SDA</td>
     <td>I2C data bus, shared by the onboard IMU and touch controller, and broken out to the I2C expansion pads.</td>
 </tr>
 <tr>
     <td>D5</td>
     <td>SCL</td>
     <td>I2C clock bus, shared by the onboard IMU and touch controller, and broken out to the I2C expansion pads.</td>
 </tr>
 <tr>
     <td>D6</td>
     <td>SD_CS</td>
     <td>microSD card chip select signal.</td>
 </tr>
 <tr>
     <td>D7</td>
     <td>TOUCH_INT</td>
     <td>Touch interrupt signal for asynchronous touch wake-up.</td>
 </tr>
 <tr>
     <td>D8</td>
     <td>SCK</td>
     <td>Hardware SPI clock shared by the display and microSD card slot.</td>
 </tr>
 <tr>
     <td>D9</td>
     <td>MISO</td>
     <td>Hardware SPI data input for the microSD card slot.</td>
 </tr>
 <tr>
     <td>D10</td>
     <td>MOSI</td>
     <td>Hardware SPI data output shared by the display and microSD card slot.</td>
 </tr>
 <tr>
     <td>D11</td>
     <td>I2S_SD</td>
     <td>I2S serial data, broken out to the bottom I2S pad group.</td>
 </tr>
 <tr>
     <td>D12</td>
     <td>I2S_SCK</td>
     <td>I2S bit clock, broken out to the bottom I2S pad group.</td>
 </tr>
 <tr>
     <td>D13</td>
     <td>I2S_WS</td>
     <td>I2S word select, broken out to the bottom I2S pad group.</td>
 </tr>
 <tr>
     <td>D14</td>
     <td>IMU_INT</td>
     <td>IMU motion interrupt for motion wake-up. On the nRF52840 version, NFC binding must be disabled before using this pin as GPIO.</td>
 </tr>
 <tr>
     <td>D15</td>
     <td>BTN_B</td>
     <td>User button 2 (USR2), also broken out to the button expansion pads. On the nRF52840 version, NFC binding must be disabled before using this pin as GPIO.</td>
 </tr>
 <tr>
     <td>D16</td>
     <td>BAT_ADC</td>
     <td>Battery voltage monitor connected to the internal voltage divider circuit. Do not reuse this pin for external circuits.</td>
 </tr>
 <tr>
     <td>D17</td>
     <td>LCD_RST</td>
     <td>Display reset signal controlled by an independent GPIO for reliable startup.</td>
 </tr>
 <tr>
     <td>D18</td>
     <td>LCD_BL</td>
     <td>Display backlight control with hardware PWM brightness adjustment.</td>
 </tr>
 <tr>
     <td>D19</td>
     <td>BTN_A</td>
     <td>User button 1 (USR1), also broken out to the button expansion pads.</td>
 </tr>
</table>

:::note
On the XIAO nRF52840 Plus version, D14 and D15 are shared with the NFC function by default. Disable the NFC binding before using them as regular GPIO pins.
:::

## Getting Started

### Hardware Preparation

<table align="center">
 <tr>
     <th>Seeed Studio XIAO 1.47 Inch Touch Display</th>
     <th>USB-C Cable</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="TODO_PRODUCT_IMAGE_URL" style={{width:300, height:'auto'}}/></div></td>
     <td></td>
 </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="TODO_PRODUCT_LINK" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td>Use a USB-C cable that supports data transfer.</td>
 </tr>
</table>

:::tip
A 3.7V lithium battery can be connected to the onboard battery connector when you want to run the device as a portable project. It is optional for programming and the basic examples in this guide.
:::


### Software Preparation

:::tip
If this is your first time using Arduino, refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### Step 1. Install Arduino IDE

Download and install the latest stable Arduino IDE for your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Step 2. Install the Seeed nRF52 Boards Package

Install **Seeed nRF52 Boards** in Arduino IDE.

After installation, select the corresponding XIAO nRF52840 Plus board and port in Arduino IDE.

:::note
Some versions of the nRF52 board package may have a USB Serial recognition issue. If `Serial` cannot be recognized or the serial port behaves abnormally, install **Adafruit TinyUSB Library** from Arduino Library Manager, or download it from GitHub:
https://github.com/adafruit/Adafruit_TinyUSB_Arduino

Then include it in your sketch:

```cpp
#include <Adafruit_TinyUSB.h>
```
:::

#### Step 3. Install Required Libraries

Install the libraries required by the display, onboard filesystem support, IMU, and examples.

1. Install **Seeed_GFX** for the display examples:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download Seeed_GFX</font></span></strong>
    </a>
</div><br />

:::caution
When using **Seeed_GFX**, remove the original **TFT_eSPI** library from your Arduino libraries folder to avoid library conflicts.
:::

2. Install **Seeed_Arduino_FS** if the compiler reports that this library is missing:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_FS" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download Seeed_Arduino_FS</font></span></strong>
    </a>
</div><br />

3. Install **Seeed_Arduino_LSM6DS3** for the onboard 6-axis IMU:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>Download Seeed_Arduino_LSM6DS3</font></span></strong>
    </a>
</div><br />


:::note
The **Seeed nRF52 Boards** package already includes an SdFat library. You do not need to download SdFat separately.
:::


## Basic Examples

### Display

This example is used to verify the 1.47-inch display, backlight, and display orientation with Seeed_GFX / TFT_eSPI.

**Step 1.** Paste the code below into your Arduino IDE sketch.

```cpp
#include "driver.h"
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <SPI.h>
#include <TFT_eSPI.h>

TFT_eSPI tft;

// Verified pins for XIAO nRF52840 Plus + 1.47 Inch Touch Display.
// The Seeed_GFX/TFT_eSPI setup itself is selected by driver.h.
static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t LCD_DC_PIN = D3;
static constexpr uint8_t LCD_SCK_PIN = D8;
static constexpr uint8_t LCD_MOSI_PIN = D10;
static constexpr uint8_t LCD_RST_PIN = D17;
static constexpr uint8_t LCD_BL_PIN = D18;

static void applyXIAO147PanelFix() {
  // The 172x320 JD9853A panel needs this MADCTL value for correct orientation.
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
}

static void setXIAO147Rotation(uint8_t rotation) {
  tft.setRotation(rotation);

  // Re-apply the panel-specific fix after rotation 0 changes TFT_eSPI state.
  if (rotation == 0) {
    applyXIAO147PanelFix();
  }
}

static void forceBacklightOn() {
  // Backlight is controlled by PWM on D18. 255 = full brightness.
  pinMode(LCD_BL_PIN, OUTPUT);
  digitalWrite(LCD_BL_PIN, HIGH);
  analogWrite(LCD_BL_PIN, 255);
}

static void hardResetPanel() {
  // A hardware reset makes the display startup deterministic after flashing.
  pinMode(LCD_RST_PIN, OUTPUT);

  digitalWrite(LCD_RST_PIN, HIGH);
  delay(20);

  digitalWrite(LCD_RST_PIN, LOW);
  delay(80);

  digitalWrite(LCD_RST_PIN, HIGH);
  delay(180);
}

static void preparePins() {
  // Put SPI/control pins in an idle state before the display driver starts.
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);

  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
}

static void flashColors() {
  // Full-screen colors make wiring/order problems obvious at a glance.
  const uint16_t colors[] = {
    TFT_RED,
    TFT_GREEN,
    TFT_BLUE,
    TFT_WHITE,
    TFT_BLACK
  };

  for (uint8_t i = 0; i < 5; i++) {
    tft.fillScreen(colors[i]);
    delay(450);
  }
}

static void drawColorBars() {
  // Draw several color bands to verify RGB color output.
  const uint16_t colors[] = {
    TFT_RED,
    TFT_GREEN,
    TFT_BLUE,
    TFT_CYAN,
    TFT_MAGENTA,
    TFT_YELLOW,
    TFT_WHITE,
    TFT_BLACK
  };

  const int w = tft.width();
  const int h = tft.height();
  const int barH = h / 8;

  for (uint8_t i = 0; i < 8; i++) {
    tft.fillRect(0, i * barH, w, barH, colors[i]);
  }

  delay(1200);
}

static void drawFinalScreen() {
  // Final static screen verifies text rendering, geometry, and panel bounds.
  const int w = tft.width();
  const int h = tft.height();

  tft.fillScreen(TFT_BLACK);

  tft.drawRoundRect(4, 4, w - 8, h - 8, 10, TFT_DARKGREY);
  tft.drawRoundRect(8, 8, w - 16, h - 16, 8, TFT_BLUE);

  tft.setTextDatum(MC_DATUM);

  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.drawString("Seeed_GFX Test", w / 2, 42, 2);

  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.drawString("Hello XIAO!", w / 2, 98, 4);

  tft.setTextColor(TFT_YELLOW, TFT_BLACK);
  tft.drawString("1.47 Inch", w / 2, 152, 2);
  tft.drawString("Touch Display", w / 2, 178, 2);

  tft.setTextColor(TFT_GREEN, TFT_BLACK);
  tft.drawString("Powered By", w / 2, 230, 2);
  tft.drawString("XIAO nRF52840 Plus", w / 2, 256, 2);

  tft.drawFastHLine(28, 292, w - 56, TFT_DARKGREY);
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println();
  Serial.println("Seeed_GFX 1.47 Inch Touch Display LCD Demo");
  Serial.println("Board: XIAO nRF52840 Plus");

  preparePins();

  // Power up the panel path before calling tft.init().
  forceBacklightOn();
  hardResetPanel();

  tft.init();
  setXIAO147Rotation(0);

  Serial.print("LCD width: ");
  Serial.println(tft.width());

  Serial.print("LCD height: ");
  Serial.println(tft.height());

  flashColors();
  drawColorBars();
  drawFinalScreen();

  Serial.println("LCD demo finished.");
}

void loop() {
  // Static display demo: all drawing is done in setup().
}
```
**Step 2.** Create a new file named `driver.h` in the same folder as your Arduino sketch by clicking on the arrow next to the example tab and selecting "New Tab".

Name the new file as `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

```cpp
// This combo selects Seeed's predefined XIAO TFT Display Board profile.
#define BOARD_SCREEN_COMBO 75
#define USE_XIAO_TFT_DISPLAY_BOARD
```
Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/display.jpg" style={{width:700, height:'auto'}}/></div>

### Touch and Interrupt

This example is used to read touch coordinates from the AXS5106L touch controller and print the X/Y data through Serial Monitor, and adds the D7 touch interrupt signal based on the touch reading example. It is used to verify whether the touch INT signal is triggered correctly.

**Step 1.** Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus touch interrupt basic.

  Touch INT is connected to D7. The interrupt is used as a wake/latch signal;
  touch coordinates are still read over I2C.
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <Wire.h>
#include "axs5106l_device.h"

static constexpr uint8_t TOUCH_RST_PIN = D17;
static constexpr uint8_t TOUCH_INT_PIN = D7;

// Latches set by the D7 interrupt handler.
volatile bool touchIrq = false;
volatile uint32_t touchIrqCount = 0;
touch_data_t touchData;

void touchIsr() {
  // Keep the ISR short; I2C is handled later in loop().
  touchIrq = true;
  touchIrqCount++;
}

void setup() {
  Serial.begin(115200);
  delay(800);

  Serial.println("=== Touch interrupt basic ===");
  Wire.begin();
  touch_init(&Wire, TOUCH_RST_PIN, TOUCH_INT_PIN);

  // AXS5106L INT is active-low in this basic interrupt example.
  pinMode(TOUCH_INT_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(TOUCH_INT_PIN), touchIsr, FALLING);
}

void loop() {
  if (touchIrq) {
    // Copy the interrupt count atomically before printing.
    noInterrupts();
    touchIrq = false;
    uint32_t count = touchIrqCount;
    interrupts();

    Serial.print("touch irq count=");
    Serial.println(count);
  }

  if (get_touch_data(&touchData)) {
    // Coordinates are still read through I2C after the interrupt latch fires.
    Serial.print("touch x=");
    Serial.print(touchData.coords[0].x);
    Serial.print(" y=");
    Serial.println(touchData.coords[0].y);
  }

  delay(20);
}
```

**Step 2.** Download and unzip the [AXS5106L touch driver file](https://files.seeedstudio.com/wiki/xiao_display_board/axs5106l_device.zip) to the same folder as your Arduino sketch.

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/touch_int.jpg" style={{width:700, height:'auto'}}/></div>

### IMU and Interrupt

This example uses Seeed_Arduino_LSM6DS3 to read accelerometer and gyroscope data from the onboard 6-axis IMU and configures the LSM6DS3 interrupt on D14. It is used to verify motion wake-up or interrupt behavior.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus LSM6DS3 INT1 wake/motion basic.

  Extracted from 0521_WakeUp_147_nRF52840.
  IMU INT1 is connected to D14.
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <Wire.h>
#include "LSM6DS3.h"

static constexpr uint8_t IMU_INT_PIN = D14;
static constexpr uint8_t LSM6DS3_ADDR = 0x6A;

// LSM6DS3 register addresses used to enable wake-up interrupt routing.
static constexpr uint8_t REG_WAKE_UP_SRC = 0x1B;
static constexpr uint8_t REG_CTRL1_XL = 0x10;
static constexpr uint8_t REG_CTRL3_C = 0x12;
static constexpr uint8_t REG_TAP_CFG = 0x58;
static constexpr uint8_t REG_WAKE_UP_THS = 0x5B;
static constexpr uint8_t REG_WAKE_UP_DUR = 0x5C;
static constexpr uint8_t REG_MD1_CFG = 0x5E;

LSM6DS3 imu(I2C_MODE, 0x6A);

// These variables are written inside the interrupt, so they must be volatile.
volatile bool imuIntFlag = false;
volatile uint32_t imuIntCount = 0;

static bool imuWriteReg(uint8_t reg, uint8_t val) {
  // Small raw-register helper for configuration not wrapped by the library.
  Wire.beginTransmission(LSM6DS3_ADDR);
  Wire.write(reg);
  Wire.write(val);
  return Wire.endTransmission() == 0;
}

static bool imuReadReg(uint8_t reg, uint8_t &val) {
  // Repeated-start read: write register address, then read one byte.
  Wire.beginTransmission(LSM6DS3_ADDR);
  Wire.write(reg);
  if (Wire.endTransmission(false) != 0) return false;
  if (Wire.requestFrom((int)LSM6DS3_ADDR, 1) != 1) return false;
  val = Wire.read();
  return true;
}

void imuIsr() {
  // Keep the ISR tiny: just latch that an event happened.
  imuIntFlag = true;
  imuIntCount++;
}

static bool initMotionInterrupt() {
  bool ok = true;

  // BDU + auto-increment.
  ok &= imuWriteReg(REG_CTRL3_C, 0x44);

  // Accelerometer 104 Hz, +/-2g. Wake detection uses accel data.
  ok &= imuWriteReg(REG_CTRL1_XL, 0x40);

  // Enable embedded function interrupts and configure wake-up detection.
  ok &= imuWriteReg(REG_TAP_CFG, 0x80);
  ok &= imuWriteReg(REG_WAKE_UP_THS, 0x05);
  ok &= imuWriteReg(REG_WAKE_UP_DUR, 0x00);
  ok &= imuWriteReg(REG_MD1_CFG, 0x20);

  uint8_t dummy = 0;
  // Reading WAKE_UP_SRC clears any stale latched wake event.
  imuReadReg(REG_WAKE_UP_SRC, dummy);

  // D14 receives INT1 from the IMU. Wake events are rising edges.
  pinMode(IMU_INT_PIN, INPUT_PULLDOWN);
  attachInterrupt(digitalPinToInterrupt(IMU_INT_PIN), imuIsr, RISING);
  return ok;
}

void setup() {
  Serial.begin(115200);
  delay(800);

  Wire.begin();
  Serial.println("=== IMU interrupt basic ===");
  Serial.print("imu.begin=");
  Serial.println(imu.begin());
  Serial.print("motion interrupt=");
  Serial.println(initMotionInterrupt() ? "OK" : "FAILED");
}

void loop() {
  if (imuIntFlag || digitalRead(IMU_INT_PIN) == HIGH) {
    // Copy volatile values with interrupts disabled so the print is consistent.
    noInterrupts();
    imuIntFlag = false;
    uint32_t count = imuIntCount;
    interrupts();

    uint8_t src = 0;
    // WAKE_UP_SRC tells which wake condition the IMU latched.
    imuReadReg(REG_WAKE_UP_SRC, src);

    Serial.print("IMU INT count=");
    Serial.print(count);
    Serial.print(" src=0x");
    Serial.println(src, HEX);
  }

  delay(10);
}
```

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/imu_int.jpg" style={{width:700, height:'auto'}}/></div>

### Microphone

This example reads audio peak values from the PDM microphone and prints `peak` through Serial Monitor. It is used to verify whether microphone sampling works.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus PDM microphone basic.

  Extracted from the dashboard/audio examples.
  PDM pins are set as CLK=D0, DIN=D1 in this BSP.
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <PDM.h>

static constexpr int SAMPLE_RATE_HZ = 16000;
static constexpr int CHANNELS = 1;
static constexpr int PDM_GAIN = 30;

// PDM callback writes into this buffer when a chunk of samples is ready.
int16_t pdmBuffer[256];

// Shared between the PDM callback and loop(), so mark as volatile.
volatile int peak = 0;
volatile bool hasSamples = false;

static void onPDMdata() {
  // This callback runs when the PDM driver has bytes available.
  int bytesAvailable = PDM.available();
  if (bytesAvailable <= 0) return;
  if (bytesAvailable > (int)sizeof(pdmBuffer)) bytesAvailable = sizeof(pdmBuffer);

  // Read signed 16-bit PCM samples from the PDM driver.
  int bytesRead = PDM.read(pdmBuffer, bytesAvailable);
  int samples = bytesRead / 2;
  int localPeak = 0;

  for (int i = 0; i < samples; ++i) {
    int v = abs((int)pdmBuffer[i]);
    if (v > localPeak) localPeak = v;
  }

  // Report peak amplitude as a simple microphone activity indicator.
  peak = localPeak;
  hasSamples = true;
}

void setup() {
  Serial.begin(115200);
  delay(800);

  Serial.println("=== PDM mic basic ===");

  // Seeed nRF52 BSP mapping used by the existing 147_nRF52840 demos.
  PDM.setPins(D1, D0, -1);
  PDM.onReceive(onPDMdata);
  PDM.setBufferSize(sizeof(pdmBuffer));
  PDM.setGain(PDM_GAIN);

  if (!PDM.begin(CHANNELS, SAMPLE_RATE_HZ)) {
    Serial.println("[MIC] PDM.begin failed");
    while (1) delay(1000);
  }

  Serial.println("[MIC] started");
}

void loop() {
  if (hasSamples) {
    // Copy and clear the callback result atomically.
    noInterrupts();
    int p = peak;
    hasSamples = false;
    interrupts();

    Serial.print("peak=");
    Serial.println(p);
  }
  delay(100);
}
```

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/mic.jpg" style={{width:700, height:'auto'}}/></div>

### microSD Card

This example uses the SdFat library included with the nRF52 board package to mount the microSD card and print the file list in the root directory.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus SD basic.

  Extracted from the SD diagnostic/BMP examples.
  SD shares SPI with LCD hardware pins; this sketch only mounts SD.

  Required library:
    - SdFat
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <SPI.h>
#include <SdFat.h>

static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t SD_CS_PIN = D6;

SdFat SD;

// Remember the first SPI frequency that successfully mounted the card.
uint32_t mountedFreq = 0;

static bool beginSd() {
  // Try fast first, then fall back to slower clocks for marginal cards/wiring.
  const uint32_t freqs[] = {8000000, 4000000, 1000000, 400000};

  // LCD and SD share SPI. Keep LCD deselected while talking to SD.
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);

  SPI.begin();

  for (size_t i = 0; i < sizeof(freqs) / sizeof(freqs[0]); ++i) {
    // SHARED_SPI tells SdFat that other devices may share this SPI bus.
    SdSpiConfig cfg(SD_CS_PIN, SHARED_SPI, freqs[i], &SPI);
    Serial.print("[SD] try ");
    Serial.print(freqs[i]);
    Serial.print(" Hz ... ");
    if (SD.begin(cfg)) {
      mountedFreq = freqs[i];
      Serial.println("OK");
      return true;
    }
    Serial.println("FAIL");
    delay(100);
  }

  return false;
}

static void listRoot() {
  // Print the SD card root directory as a simple read/write sanity check.
  File32 root;
  if (!root.open("/")) {
    Serial.println("[SD] root open failed");
    return;
  }

  File32 entry;
  while (entry.openNext(&root, O_RDONLY)) {
    char name[64];
    entry.getName(name, sizeof(name));
    Serial.print(entry.isDir() ? "DIR  " : "FILE ");
    Serial.println(name);
    entry.close();
  }
  root.close();
}

void setup() {
  Serial.begin(115200);

  // With TinyUSB, wait for the serial monitor before printing diagnostics.
  while (!Serial) {
    delay(10);
  }
  delay(300);

  Serial.println("=== SD basic ===");

  if (!beginSd()) {
    Serial.println("[SD] mount failed");
    while (1) delay(1000);
  }

  Serial.print("[SD] mounted @ ");
  Serial.print(mountedFreq);
  Serial.println(" Hz");
  listRoot();
}

void loop() {
  delay(1000);
}
```

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/sd.jpg" style={{width:700, height:'auto'}}/></div>

### Battery

This example reads VBAT ADC, battery voltage divider enable, and charging status pins. It is used to check battery voltage and charging state.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus battery basic.

  Extracted from the dashboard battery code:
    READ_BAT = P0.14, active-low divider enable
    CHG      = P0.17, active-low charging status
    VBAT ADC = PIN_VBAT
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <nrf.h>
#include <nrf_gpio.h>

static constexpr uint8_t READ_BAT_P0_PIN = 14;
static constexpr uint8_t CHG_P0_PIN = 17;

#ifndef PIN_VBAT
// Some Seeed nRF52 BSP versions define PIN_VBAT. Keep a fallback for older cores.
#define PIN_VBAT 35
#endif

// The nRF52840 ADC is configured as 12-bit. The board package maps the ADC
// reference/range so the raw reading is converted with a 3.6 V full scale.
static constexpr int ADC_BITS = 12;
static constexpr int ADC_MAX = (1 << ADC_BITS) - 1;
static constexpr float ADC_FULL_SCALE_V = 3.600f;

// Board divider: R16 = 1M, R17 = 499K. Multiply ADC voltage by this ratio
// to recover the battery-side voltage.
static constexpr float BAT_DIVIDER_RATIO = (1000.0f + 499.0f) / 499.0f;

static void enableBatteryDivider() {
  // READ_BAT is active-low: drive P0.14 low to turn on the divider.
  NRF_P0->OUTCLR = (1UL << READ_BAT_P0_PIN);
  NRF_P0->DIRSET = (1UL << READ_BAT_P0_PIN);
}

static void disableBatteryDivider() {
  // Return P0.14 to high impedance so the divider does not leak current.
  NRF_P0->DIRCLR = (1UL << READ_BAT_P0_PIN);
}

static uint16_t readBatteryRaw() {
  uint32_t sum = 0;

  // Throw away the first few readings after enabling the divider. The ADC input
  // and the high-value divider need a short settling period.
  for (int i = 0; i < 6; ++i) {
    (void)analogRead(PIN_VBAT);
    delay(2);
  }

  // Average several samples to make the serial output stable.
  for (int i = 0; i < 16; ++i) {
    sum += analogRead(PIN_VBAT);
    delay(2);
  }
  return sum / 16;
}

void setup() {
  Serial.begin(115200);
  delay(800);

  analogReadResolution(ADC_BITS);

  // CHG is an open-drain/active-low status signal, so enable an internal pull-up.
  nrf_gpio_cfg_input(CHG_P0_PIN, NRF_GPIO_PIN_PULLUP);
  disableBatteryDivider();

  Serial.println("=== Battery basic ===");
  Serial.print("PIN_VBAT=");
  Serial.println(PIN_VBAT);
}

void loop() {
  // Only enable the divider while measuring VBAT.
  enableBatteryDivider();
  delay(30);
  uint16_t raw = readBatteryRaw();
  disableBatteryDivider();

  // Convert ADC raw -> ADC pin voltage -> battery voltage.
  float vadc = ((float)raw * ADC_FULL_SCALE_V) / (float)ADC_MAX;
  float vbat = vadc * BAT_DIVIDER_RATIO;

  // CHG low means the charger IC reports charging.
  bool charging = (NRF_P0->IN & (1UL << CHG_P0_PIN)) == 0;

  Serial.print("raw=");
  Serial.print(raw);
  Serial.print(" vadc=");
  Serial.print(vadc, 3);
  Serial.print("V vbat=");
  Serial.print(vbat, 3);
  Serial.print("V chg=");
  Serial.println(charging ? "LOW/charging" : "HIGH/not charging");

  delay(1000);
}
```

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/bat.jpg" style={{width:700, height:'auto'}}/></div>

### Button

This example reads the USR1 and USR2 button states. USR1 switches the backlight brightness, and USR2 prints the button state.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus + 1.47 Inch Touch Display
  Basic USR button test extracted from the dashboard pin map.

  USR1 = D19, active low
  USR2 = D15, active low
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>

static constexpr uint8_t BTN_A_PIN = D19;
static constexpr uint8_t BTN_B_PIN = D15;
static constexpr uint8_t LCD_BL_PIN = D18;

// Store the previous sampled state so we can detect only the press edge.
bool lastA = false;
bool lastB = false;
uint8_t brightness = 255;

static bool pressed(uint8_t pin) {
  // Both user buttons are wired active-low.
  return digitalRead(pin) == LOW;
}

void setup() {
  Serial.begin(115200);
  delay(800);

  // Pull-ups keep the input HIGH while the button is released.
  pinMode(BTN_A_PIN, INPUT_PULLUP);
  pinMode(BTN_B_PIN, INPUT_PULLUP);

  // Reuse the LCD backlight as an easy visible output for USR1.
  pinMode(LCD_BL_PIN, OUTPUT);
  analogWrite(LCD_BL_PIN, brightness);

  Serial.println("=== Button basic ===");
  Serial.println("USR1(D19): cycle backlight");
  Serial.println("USR2(D15): print press state");
}

void loop() {
  // Poll the two buttons. This is enough for a simple basic test.
  bool nowA = pressed(BTN_A_PIN);
  bool nowB = pressed(BTN_B_PIN);

  if (nowA && !lastA) {
    // USR1 cycles through three brightness levels on each new press.
    brightness = (brightness == 255) ? 128 : (brightness == 128) ? 32 : 255;
    analogWrite(LCD_BL_PIN, brightness);
    Serial.print("USR1 pressed, backlight=");
    Serial.println(brightness);
  }

  if (nowB && !lastB) {
    Serial.println("USR2 pressed");
  }

  if (nowA != lastA || nowB != lastB) {
    // Print state changes only, so the serial monitor stays readable.
    Serial.print("USR1=");
    Serial.print(nowA ? "PRESSED" : "released");
    Serial.print(" USR2=");
    Serial.println(nowB ? "PRESSED" : "released");
  }

  // Save current state for the next edge-detection pass.
  lastA = nowA;
  lastB = nowB;
  delay(20);
}
```

Now you can upload the example.

**Expected Result**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_display_board/button.jpg" style={{width:700, height:'auto'}}/></div>

### I2S

This example uses the reserved I2S audio output pins to drive a MAX98357A I2S amplifier module. After wiring the amplifier, press USR1 to play a low-volume test tone for about 1 second.

Connect the MAX98357A module as follows:

| XIAO Pin | MAX98357A Pin |
| --- | --- |
| D11 | DIN |
| D12 | BCLK |
| D13 | LRC / WS |
| 3V3 | VIN |
| GND | GND |

The MAX98357A does not require an external MCLK connection. However, when the nRF52840 works as the I2S master, its internal MCK generator must still be enabled so that BCLK and LRCLK can be generated.

Paste the code below into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus + MAX98357A I2S speaker demo.

  Wiring:
    D11 -> MAX98357A DIN
    D12 -> MAX98357A BCLK
    D13 -> MAX98357A LRC / WS
    3V3 -> VIN
    GND -> GND

  Press USR1 to play a low-volume ~441 Hz test tone for 1 second.
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <nrf.h>

static constexpr uint8_t I2S_DIN_PIN = D11;
static constexpr uint8_t I2S_BCLK_PIN = D12;
static constexpr uint8_t I2S_LRCLK_PIN = D13;
static constexpr uint8_t USR1_PIN = D19;

// 32 MHz / 63 / 32 = ~15873 Hz LRCLK. 18 samples per half-cycle gives ~441 Hz.
static constexpr size_t SAMPLE_FRAMES = 128;
static constexpr int16_t TONE_AMPLITUDE = 800;
static constexpr uint32_t PLAY_DURATION_MS = 1000;
static uint32_t txBuffer[SAMPLE_FRAMES];

static bool isPlaying = false;
static bool lastUsr1State = HIGH;
static uint32_t playStartedMs = 0;

static void fillToneBuffer() {
  for (size_t frame = 0; frame < SAMPLE_FRAMES; ++frame) {
    int16_t sample = ((frame / 18) & 1) ? TONE_AMPLITUDE : -TONE_AMPLITUDE;
    txBuffer[frame] = ((uint32_t)(uint16_t)sample << 16) | (uint16_t)sample;
  }
}

static void initI2S() {
  NRF_I2S->TASKS_STOP = 1;
  NRF_I2S->ENABLE = 0;

  NRF_I2S->EVENTS_RXPTRUPD = 0;
  NRF_I2S->EVENTS_TXPTRUPD = 0;
  NRF_I2S->EVENTS_STOPPED = 0;

  NRF_I2S->CONFIG.MODE = I2S_CONFIG_MODE_MODE_Master;
  NRF_I2S->CONFIG.RXEN = I2S_CONFIG_RXEN_RXEN_Disabled;
  NRF_I2S->CONFIG.TXEN = I2S_CONFIG_TXEN_TXEN_Enabled;
  // MAX98357A does not need an MCLK pin, but nRF I2S master still needs the
  // internal master clock generator to derive BCLK and LRCLK.
  NRF_I2S->CONFIG.MCKEN = I2S_CONFIG_MCKEN_MCKEN_Enabled;
  NRF_I2S->CONFIG.MCKFREQ = I2S_CONFIG_MCKFREQ_MCKFREQ_32MDIV63;
  NRF_I2S->CONFIG.RATIO = I2S_CONFIG_RATIO_RATIO_32X;
  NRF_I2S->CONFIG.SWIDTH = I2S_CONFIG_SWIDTH_SWIDTH_16Bit;
  NRF_I2S->CONFIG.ALIGN = I2S_CONFIG_ALIGN_ALIGN_Left;
  NRF_I2S->CONFIG.FORMAT = I2S_CONFIG_FORMAT_FORMAT_I2S;
  NRF_I2S->CONFIG.CHANNELS = I2S_CONFIG_CHANNELS_CHANNELS_Stereo;

  NRF_I2S->PSEL.MCK = 0xFFFFFFFF;
  NRF_I2S->PSEL.SCK = g_ADigitalPinMap[I2S_BCLK_PIN];
  NRF_I2S->PSEL.LRCK = g_ADigitalPinMap[I2S_LRCLK_PIN];
  NRF_I2S->PSEL.SDIN = 0xFFFFFFFF;
  NRF_I2S->PSEL.SDOUT = g_ADigitalPinMap[I2S_DIN_PIN];

  NRF_I2S->TXD.PTR = (uint32_t)txBuffer;
  NRF_I2S->RXD.PTR = 0;
  NRF_I2S->RXTXD.MAXCNT = SAMPLE_FRAMES;

  NRF_I2S->ENABLE = 1;
  NRF_I2S->TASKS_START = 1;
}

static void serviceI2S() {
  if (NRF_I2S->EVENTS_TXPTRUPD) {
    NRF_I2S->EVENTS_TXPTRUPD = 0;
    NRF_I2S->TXD.PTR = (uint32_t)txBuffer;
  }
}

static void stopI2S() {
  NRF_I2S->TASKS_STOP = 1;

  uint32_t startMs = millis();
  while (!NRF_I2S->EVENTS_STOPPED && millis() - startMs < 50) {
    delay(1);
  }

  NRF_I2S->EVENTS_STOPPED = 0;
  NRF_I2S->ENABLE = 0;
  isPlaying = false;
}

static void startI2SPlayback() {
  initI2S();
  isPlaying = true;
  playStartedMs = millis();
}

static void handleUsr1Button() {
  bool usr1State = digitalRead(USR1_PIN);

  if (lastUsr1State == HIGH && usr1State == LOW && !isPlaying) {
    delay(20);
    if (digitalRead(USR1_PIN) == LOW) {
      startI2SPlayback();
    }
  }

  lastUsr1State = usr1State;
}

void setup() {
  pinMode(USR1_PIN, INPUT_PULLUP);
  fillToneBuffer();
}

void loop() {
  handleUsr1Button();

  if (!isPlaying) return;

  serviceI2S();

  if (millis() - playStartedMs >= PLAY_DURATION_MS) {
    stopI2S();
  }
}
```

Now you can upload the example.

**Expected Result**

After the sketch is uploaded, press USR1. The speaker connected to the MAX98357A should play a short low-volume test tone for about 1 second.

## Troubleshooting

### Q1: The battery cannot charge, discharge, or be detected

A: If the battery cannot be charged, discharged, or detected by the program, check whether the battery switch is turned on.

## Resources
- TODO: Product page
- TODO: Schematic
- TODO: Hardware files

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
