---
description: Getting Started with XIAO 0.96'' IPS Display (ESP32-S3).
title: Getting Started with XIAO 0.96'' IPS Display (ESP32-S3)
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Getting Started
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-20'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/getting_started_0.96_inch_display_esp32s3/
---

# Getting Started with XIAO 0.96'' IPS Display (ESP32-S3)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6993.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introduction

The 0.96'' IPS Display is a compact expansion board powered by the XIAO ESP32-S3 Plus. It combines an 80×160 IPS color LCD, an onboard PDM microphone, a 6-axis IMU, two user buttons, I2C and I2S expansion pads, and battery voltage sensing in a form factor designed for small connected devices.

The ESP32-S3 Plus adds Wi-Fi and Bluetooth connectivity, making the board suitable for compact wearables, portable sensor dashboards, keychain gadgets, and wireless IoT prototypes.

<div class="table-center">
  <table align="center">
    <tr><th>Specification</th><th>Detail</th></tr>
    <tr><td>Product Positioning</td><td>Ultra-Compact</td></tr>
    <tr><td>Core Controller</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>Processor</td><td>ESP32-S3R8, Dual-Core, up to 240 MHz</td></tr>
    <tr><td>Memory</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>Wireless Connectivity</td><td>2.4 GHz Wi-Fi + BLE 5.0</td></tr>
    <tr><td>Display Type</td><td>0.96" IPS TFT LCD</td></tr>
    <tr><td>Resolution</td><td>80 × 160</td></tr>
    <tr><td>Display Driver</td><td>ST7789</td></tr>
    <tr><td>Display Interface</td><td>SPI</td></tr>
    <tr><td>Touch Input</td><td>No</td></tr>
    <tr><td>6-Axis IMU</td><td>Yes</td></tr>
    <tr><td>PDM Digital Microphone</td><td>Yes</td></tr>
    <tr><td>MicroSD Card Slot</td><td>No</td></tr>
    <tr><td>Grove I2C Connector</td><td>No</td></tr>
    <tr><td>User Buttons</td><td>2</td></tr>
    <tr><td>Battery Connector</td><td>2-pin JST, 3.7 V LiPo</td></tr>
    <tr><td>Battery Monitoring</td><td>Battery voltage monitoring via D16 ADC; battery level can be estimated from the measured voltage. Battery status detection is not supported.</td></tr>
    <tr><td>Expansion Interfaces</td><td>1x I2C pads, 1x I2S pads</td></tr>
    <tr><td>Board Size</td><td>18.8 × 43.6 × 10.6 mm</td></tr>
    <tr><td>Best For</td><td>Tiny IoT devices, wearables, status displays</td></tr>
  </table>
</div>

:::note
This display board is designed for the **XIAO ESP32-S3 Plus**. If you are using the XIAO nRF52840 Plus version, refer to the [XIAO 0.96'' IPS Display (nRF52840)](/getting_started_0.96_inch_display_nrf52840) guide instead.
:::

:::note
The ESP32-S3 Plus version uses D16 to measure the battery divider voltage; it does not provide a charging-state indicator.
:::

## Hardware Overview

Refer to the following view to identify the connectors and onboard components before connecting expansion hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### Pin Map

The table below lists the XIAO ESP32-S3 Plus pins used by the display board and its onboard peripherals.

<div class="table-center">
  <table align="center">
    <tr><th>XIAO Pin</th><th>Net Name</th><th>Function Description</th><th>Hardware Connection Notes</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM microphone clock</td><td>Internally connected to the onboard PDM microphone</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM microphone data</td><td>Internally connected to the onboard PDM microphone</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>LCD chip select</td><td>Internally connected to the LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>LCD data/command select</td><td>Internally connected to the LCD</td></tr>
    <tr><td>D4</td><td>I2C_SDA</td><td>I2C data</td><td>Shared by the onboard IMU and back-side I2C test pad</td></tr>
    <tr><td>D5</td><td>I2C_SCL</td><td>I2C clock</td><td>Shared by the onboard IMU and back-side I2C test pad</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>User button 1</td><td>Active-low</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>User button 2</td><td>Active-low</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>Hardware SPI clock</td><td>Internally connected to the LCD</td></tr>
    <tr><td>D9</td><td>NC</td><td>Not connected</td><td>No physical connection</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>Hardware SPI data output</td><td>Internally connected to the LCD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>I2S audio data</td><td>Externally exposed to the bottom expansion pad</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>I2S bit clock</td><td>Externally exposed to the bottom expansion pad</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>I2S word select</td><td>Externally exposed to the bottom expansion pad</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU interrupt</td><td>Internally connected to the LSM6DS3 for motion and double-tap events</td></tr>
    <tr><td>D15</td><td>NC</td><td>Not connected</td><td>No physical connection</td></tr>
    <tr><td>D16</td><td>VBAT_ADC</td><td>Battery voltage sensing</td><td>Connected to the 316 kΩ / 160 kΩ divider. <strong>Do not use externally</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>LCD reset</td><td>Internally connected to the LCD</td></tr>
    <tr><td>D18</td><td>LCD_BL_PWM</td><td>LCD backlight control</td><td>Internally connected to the backlight driver circuit</td></tr>
    <tr><td>D19</td><td>NC</td><td>Not connected</td><td>No physical connection</td></tr>
  </table>
</div>


:::caution
D4 and D5 are shared with the onboard IMU. Any external I2C device connected to the test pad must use a unique address and support 3.3 V logic.
:::

## Getting Started

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_handing_tips.png" style={{width:600, height:'auto'}}/></div>
:::

This guide uploads a minimal **"Hello, XIAO"** sketch to the display board: the screen turns on its backlight, fills black, and prints **"Hello,"** and **"XIAO"** as two centered lines of large green text. It is the fastest way to confirm the screen and your development environment are working before diving into the individual peripheral demos.

### Software Preparation

You will need the following tools and libraries:

- **Arduino IDE** (version 1.8 or later)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — add the following URL to **File > Preferences > Additional Boards Manager URLs**:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Then go to **Tools > Board > Boards Manager**, search for **esp32**, and install version **3.3.11**.

- **Seeed_GFX2 (Manual Installation)** — this library is not available in the Library Manager and must be installed manually:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** Click the button above to download `Seeed_GFX2` v1.0.0 as a ZIP file (pinned to a release tag so the tutorial stays reproducible). Alternatively, clone the repository from [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Step 2.** In the Arduino IDE, go to **Sketch > Include Library > Add .ZIP Library...** and select the downloaded ZIP. The IDE reads `library.properties` and installs it into the correct `Seeed_GFX2` folder automatically — you do not need to rename the extracted folder. (To install manually instead, unzip the archive and rename the extracted folder to `Seeed_GFX2` before placing it in `Documents/Arduino/libraries/`.)

**Step 3.** Restart the Arduino IDE so the new library is detected.

:::tip
- **Seeed_GFX2** is Seeed Studio's graphics library built on a layered `Board` + `Panel Config` architecture. Each demo initializes the display with a single `display.begin<Board_..., Config_...>()` call — the **Board** template owns the pin map (CS/DC/SCK/MOSI/RST/BL), and the **Panel Config** bakes in the 80×160 resolution, color order (BGR), and orientation. No `driver.h` or manual pin setup is needed.
- On this board the sketch uses `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) with `Config_Seeed_0inch96_LCD_ST7789`.
:::

### Download the Code

The example sketch is available on GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navigate to `code_GFX2/getting_started_code/xiao_esp32s3_096_hello/` and open `xiao_esp32s3_096_hello.ino` in the Arduino IDE. **Download the complete folder** rather than copying the `.ino` source from the GitHub web view.

### Upload the Sketch

**Step 1.** Connect the XIAO ESP32-S3 Plus to your computer through USB-C.

**Step 2.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

**Step 3.** Select the correct **Port** under **Tools > Port**.

**Step 4.** Click **Upload**. The sketch will compile and upload to the board.

### Expected Output

After uploading, the screen lights up with a black background and shows two centered lines of large green text — **"Hello,"** on the first line and **"XIAO"** on the second. The greeting stays on screen without redrawing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

If the display fails to initialize, the sketch prints the library error message to the serial monitor at **115200** baud. Open **Tools > Serial Monitor** and set the baud rate to 115200 to read it.

## What's Next

The display board packs several onboard peripherals. The [Function](/function_0.96_inch_display_esp32s3) page provides a standalone demo for each one:

<div class="table-center">
  <table align="center">
    <tr><th>Peripheral</th><th>Demo</th></tr>
    <tr><td>Screen</td><td>[GraphicTest](/function_0.96_inch_display_esp32s3#screen-display--graphictest) — ten graphics primitives with timing benchmarks</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/function_0.96_inch_display_esp32s3#imu) — 6-axis motion effects and wake-on-motion</td></tr>
    <tr><td>Microphone & Speaker</td><td>[Flash Recorder](/function_0.96_inch_display_esp32s3#microphone--speaker--flash-recorder) — record and play back audio</td></tr>
    <tr><td>Buttons</td><td>[User Buttons](/function_0.96_inch_display_esp32s3#user-buttons) — read presses and debounce with interrupts</td></tr>
    <tr><td>Battery</td><td>[Battery Voltage Detection](/function_0.96_inch_display_esp32s3#battery-voltage-detection) — measure the divider voltage</td></tr>
  </table>
</div>

## FAQ

### The board does not appear in the Tools > Board menu

1. Open **File > Preferences** and add the ESP32 Boards Manager URL:

   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```

2. Open **Tools > Board > Boards Manager**, search for **esp32**, and install version **3.3.11**.
3. Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

Restart Arduino IDE if the board entry still does not appear.

### How should I hold the board?

Hold the board near the buttons, and do not touch the **XIAO** module. Grip the board by the button area instead.

### [About Factory Firmware-DashBoard]

#### Why isn't my screen bright when I plug in the USB-C cable?

The screen backlight may be off. Press the **USR2 (D7)** button to toggle the backlight back on — the display will light up normally.

## Resources

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

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
