---
description: Getting Started with XIAO 0.96'' IPS Display (nRF52840).
title: Getting Started with XIAO 0.96'' IPS Display (nRF52840)
sidebar_label: Getting Started
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/getting_started_0.96_inch_display_nrf52840/
---

# Getting Started with XIAO 0.96'' IPS Display (nRF52840)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW096_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-nRF52840-Plus-p-6992.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introduction

The 0.96'' IPS Display is an expansion board designed for the XIAO series, powered by the XIAO nRF52840 Plus. It features a compact 80×160 IPS color LCD, onboard PDM microphone, 6-axis IMU (LSM6DS3), two user buttons, and battery power management with percentage display — all packed into a form factor even smaller than the 1.14'' IPS Display.

This combination makes it an ideal platform for ultra-compact wearables, keychain gadgets, portable sensor nodes, and IoT prototyping where every millimetre of space counts.

<div class="table-center">
  <table align="center">
    <tr><th>Specification</th><th>Detail</th></tr>
    <tr><td>Product Positioning</td><td>Ultra-Compact</td></tr>
    <tr><td>Core Controller</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>Processor</td><td>Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz</td></tr>
    <tr><td>Memory</td><td>256 KB RAM + 1 MB internal Flash + 2 MB onboard Flash</td></tr>
    <tr><td>Wireless Connectivity</td><td>BLE 5.4</td></tr>
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
    <tr><td>Battery Connector</td><td>2-pin JST 2.0 Connector for 3.7 V LiPo</td></tr>
    <tr><td>Battery Monitoring</td><td>Battery status detection supported; battery voltage can also be monitored for battery-level estimation.</td></tr>
    <tr><td>Expansion Interfaces</td><td>1x I2C pads, 1x I2S pads</td></tr>
    <tr><td>Board Size</td><td>18.8 × 43.6 × 10.6 mm</td></tr>
    <tr><td>Best For</td><td>Smart badges, tiny wearables, BLE status displays</td></tr>
  </table>
</div>

:::note
This display board is designed for the **XIAO nRF52840 Plus**. If you are using the XIAO ESP32-S3 Plus version, please refer to the XIAO 0.96'' IPS Display (ESP32-S3) guide instead.
:::

## Hardware Overview

Before we start, refer to the following image to understand the physical layout of the 0.96'' IPS Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### Pin Map

The 0.96'' IPS Display breaks out all XIAO nRF52840 Plus pins. The table below lists every pin, its net name on the display board, its function, and how it is connected to onboard peripherals.

<div class="table-center">
  <table align="center">
    <tr><th>XIAO Pin</th><th>Net Name</th><th>Function Description</th><th>Hardware Connection Notes</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM digital microphone clock</td><td>Internally connected to PDM Mic</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM digital microphone data</td><td>Internally connected to PDM Mic</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Screen chip select signal</td><td>Internally connected to LCD driver IC</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Screen data/command switch</td><td>Internally connected to LCD driver IC</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C data bus</td><td>Bus sharing: internally connected to IMU; externally exposed to the back-side 4-pin test pad</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C clock bus</td><td>Bus sharing: internally connected to IMU; externally exposed to the back-side 4-pin test pad</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>User button 1 (KEY1)</td><td>Internally connected to microswitch 1; cycles backlight brightness</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>User button 2 (KEY2)</td><td>Internally connected to microswitch 2; toggles backlight ON/OFF</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>Hardware SPI clock</td><td>Internally connected to LCD driver IC</td></tr>
    <tr><td>D9</td><td>NC</td><td>Floating (reserved)</td><td>No physical connection</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>Hardware SPI data output</td><td>Internally connected to LCD driver IC</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Audio data output</td><td>Externally exposed to the bottom audio expansion pad</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Audio bit clock</td><td>Externally exposed to the bottom audio expansion pad</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Audio word select</td><td>Externally exposed to the bottom audio expansion pad</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU motion hardware interrupt</td><td>Internally connected to 6-axis IMU (supports motion wake-up)</td></tr>
    <tr><td>D15</td><td>NC</td><td>Floating (reserved)</td><td>No physical connection</td></tr>
    <tr><td>D16</td><td>NC</td><td>Floating (reserved)</td><td>No physical connection — battery voltage is measured through the module's internal PIN_VBAT, not through D16</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Screen soft reset</td><td>Internally connected to LCD driver IC</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>Screen backlight control</td><td>Internally connected to backlight driver circuit</td></tr>
    <tr><td>D19</td><td>NC</td><td>Floating (reserved)</td><td>No physical connection</td></tr>
  </table>
</div>


## Getting Started

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_display_handing_tips.jpg" style={{width:600, height:'auto'}}/></div>
:::

This guide uploads a minimal **"Hello, XIAO"** sketch to the display board: the screen turns on its backlight, fills black, and prints **"Hello,"** and **"XIAO"** as two centered lines of large green text. It is the fastest way to confirm the screen and your development environment are working before diving into the individual peripheral demos.

### Software Preparation

You will need the following tools and libraries:

- **Arduino IDE** (version 1.8 or later)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **Seeed nRF52 Boards (1.1.13)** — add the following URL to **File > Preferences > Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

Then go to **Tools > Board > Boards Manager**, search for **Seeed nRF52** and install version **1.1.13**.

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
- On this board the sketch uses `Board_XIAO_0inch96_LCD<38, 37>` (RST=38, BL=37) with `Config_Seeed_0inch96_LCD_ST7789`.
- The **Adafruit TinyUSB** library used by the sketch is bundled with the **Seeed nRF52 Boards** package, so it needs no separate installation.
:::

### Download the Code

The example sketch is available on GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navigate to `code_GFX2/getting_started_code/xiao_nrf52840_096_hello/` and open `xiao_nrf52840_096_hello.ino` in the Arduino IDE. **Download the complete folder** rather than copying the `.ino` source from the GitHub web view.

### Upload the Sketch

**Step 1.** Connect the XIAO nRF52840 Plus to your computer via the USB-C port.

**Step 2.** In Arduino IDE, select the board: **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**.

**Step 3.** Select the correct **Port** under **Tools > Port**.

**Step 4.** Click the **Upload** button (→). The sketch will compile and upload to the board.

:::note
If you encounter upload issues, double-click the reset button to enter bootloader mode. The USR LED will breathe in red and a **NRF52BOOT** drive will appear on your computer, indicating the board is in bootloader mode.
:::

### Expected Output

After uploading, the screen lights up with a black background and shows two centered lines of large green text — **"Hello,"** on the first line and **"XIAO"** on the second. The greeting stays on screen without redrawing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

If the display fails to initialize, the sketch prints the library error message to the serial monitor at **115200** baud. Open **Tools > Serial Monitor** and set the baud rate to 115200 to read it.

## What's Next

The display board packs several onboard peripherals. The [Function](/function_0.96_inch_display_nrf52840) page provides a standalone demo for each one:

<div class="table-center">
  <table align="center">
    <tr><th>Peripheral</th><th>Demo</th></tr>
    <tr><td>Screen</td><td>[GraphicTest](/function_0.96_inch_display_nrf52840#screen-display--graphictest) — ten graphics primitives with timing benchmarks</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/function_0.96_inch_display_nrf52840#imu) — 6-axis motion effects and wake-on-motion</td></tr>
    <tr><td>Microphone & Speaker</td><td>[Flash Recorder](/function_0.96_inch_display_nrf52840#microphone--speaker--flash-recorder) — record and play back audio</td></tr>
    <tr><td>Buttons</td><td>[User Buttons](/function_0.96_inch_display_nrf52840#user-buttons) — read presses and debounce with interrupts</td></tr>
    <tr><td>Battery</td><td>[Battery Status](/function_0.96_inch_display_nrf52840#battery-status) — measure voltage and convert to a percentage</td></tr>
  </table>
</div>

## FAQ

### What if the upload fails or the board is not detected?

Double-click the reset button on the XIAO nRF52840 Plus. The USR LED will breathe in red and a drive named **NRF52BOOT** will appear on your computer. Drag the compiled `.uf2` file onto the **NRF52BOOT** drive. The board will program itself and reset automatically.

## Resources

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

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
