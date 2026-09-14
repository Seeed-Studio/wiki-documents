---
description: Standalone function-level demos for each onboard peripheral of the XIAO 1.47'' IPS Display (ESP32-S3). Covers screen, SD card, IMU, touch, PDM microphone, SD audio recording and playback, buttons, and battery voltage detection.
title: Onboard Peripheral Usage
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/function_1.47_inch_touch_display_esp32s3/
---

# Onboard Peripheral Usage

This page collects standalone function-level demos for each onboard peripheral of the 1.47'' IPS Display. Each section is self-contained — you can pick the one that matches your use case without reading through the others.

:::tip
The demo GIFs on this page are sped up to keep them short.
:::

:::note
All demos in this page require **esp32 Boards by Espressif (3.3.11)** as described in [Getting Started](/getting_started_1.47_inch_touch_display_esp32s3), plus the **Seeed_GFX2** library installed manually as described below.
:::

- **Seeed_GFX2 (Manual Installation)** — this library is not available in Library Manager and must be installed manually:

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
- **Seeed_GFX2** is Seeed Studio's graphics library built on a layered `Board` + `Panel Config` architecture. Each demo initializes the display with a single `display.begin<Board_..., Config_...>()` call — the **Board** template owns the pin map (CS/DC/SCK/MOSI/RST/BL), and the **Panel Config** bakes in the resolution, color order (BGR), and orientation. No `driver.h` or manual pin setup is needed.
- On this board the demos use `Board_XIAO_1inch47_Touch_Display<13, 12>` (RST=13, BL=12) with `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, no inversion).
- The **touch controller** (AXS5106L) is handled by the `Seeed_GFX2` Touch layer (`Touch_AXS5106L`) — no extra library is needed. The **IMU** is read over bare I2C (`Wire`) in the sketches.
- The **SD BMP Reader** and **SD Recorder** examples use the ESP32 board package's built-in **`SD.h`** for SD card access.
:::

## Getting the Demo Code

Every demo on this page lives in the [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) repository, under the `code_GFX2/Function/` directory. Each demo is a folder containing a single `.ino` sketch. **Always download the complete folder** rather than copying the `.ino` source from the GitHub web view.

**Option A — Download the repository as a ZIP (recommended):**

1. Open [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) and click **Code > Download ZIP**, then extract the archive anywhere convenient.
2. Navigate into `code_GFX2/Function/` and open the folder shown in each demo's **Code location** line. For example, the GraphicTest demo for this board lives in `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`.
3. **Double-click the `.ino` file** to open it in the Arduino IDE.

**Option B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Then open the demo's `.ino` file from the cloned `code_GFX2/Function/...` folder.

## Screen Display — GraphicTest

This demo runs a full graphics benchmark on the 1.47-inch JD9853A panel, covering color bars, lines, rectangles, circles, triangles, rounded rectangles, text, and a pixel gradient. Use it to verify that the screen is wired correctly and that all draw calls work as expected.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The sketch initializes the JD9853A panel via **Seeed_GFX2**, then runs through ten graphics primitives in sequence, measuring the execution time of each one via `micros()` and printing the result to the serial monitor.

The display is initialized with a single template call:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<13, 12>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

The **Board** template owns the pin map — CS=D2, DC=D3, SCK=D8, MOSI=D10 — and its `<RST, BL>` template parameters take bare GPIO numbers, so `<13, 12>` sets RST=GPIO13 (D17) and BL=GPIO12 (D18). The **Panel Config** bakes in the 172×320 resolution, BGR color order, and no inversion — no `driver.h` or manual MADCTL write is needed.

### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_graphictest.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). You should see timing output for each test:

```
=== XIAO ESP32-S3 Plus 1.47 graphic test ===
LCD width: 172
LCD height: 320
Color bars: 162.32 ms
Lines: 4562.40 ms
Fast lines: 240.45 ms
Rectangles: 189.31 ms
Filled rectangles: 644.85 ms
Circles: 667.74 ms
Triangles: 531.25 ms
Round rectangles: 236.16 ms
Text: 1899.09 ms
Pixel gradient: 7933.69 ms
Graphic test finished.
```

On the screen, you will see each test pattern displayed for about one second before the next one starts. When all tests complete, a "Finished" screen appears with a blue rounded-rectangle border.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

After the sketch runs through all patterns, the screen shows a "Graphic Test / Finished" message. Reset the board to run the test again.

---

## Touch — Touch Circle

This demo turns the 1.47-inch touch screen into an interactive drawing pad. Tap anywhere on the screen and a white circle appears at your fingertip. Circles stay on screen, building up as you tap. Tap the **CLEAR** bar at the bottom of the screen to erase all circles and start over.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the **AXS5106L** capacitive touch controller (I2C address `0x63`) connected via I2C on D4/D5. The controller reports absolute (X, Y) coordinates in the display's pixel range. Touch is handled by the Seeed_GFX2 **Touch layer** (`Touch_AXS5106L`):

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Function</th></tr>
    <tr><td>D4 (SDA)</td><td>I2C data bus — shared with IMU</td></tr>
    <tr><td>D5 (SCL)</td><td>I2C clock bus — shared with IMU</td></tr>
    <tr><td>D7</td><td>Touch interrupt (INT)</td></tr>
    <tr><td>RST</td><td>Shared with the LCD reset (GPIO13 / D17)</td></tr>
  </table>
</div>

**Edge-triggered drawing.** The sketch uses an edge-detection approach: it only adds a circle on the falling edge of a touch (finger-down), not while the finger is held. This gives crisp, intentional tap-to-draw behavior rather than continuously painting a trail as you drag.

**X-axis mirroring.** The touch panel is physically mounted in a different orientation than the LCD, so the raw X coordinate must be mirrored. `display.getTouch()` already applies this mirroring internally and returns screen coordinates, so no manual `screenX = 172 - 1 - rawX` transform is needed.

**Circle buffer.** Up to 120 circles are stored in a circular buffer. When the buffer is full, the oldest circle is removed and the screen is redrawn to keep the display clean.

**CLEAR zone.** The bottom 36 pixels of the screen are reserved as a CLEAR bar. Tapping this area erases all circles and resets the counter instead of drawing a new circle.

**Safe drawing area.** A dim gray border outlines the area where circles are fully visible.

### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_touch_circle.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
=== XIAO ESP32-S3 Touch Circle Demo ===
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Step 4.** Tap the screen — each tap prints the mapped screen coordinates, and tapping the CLEAR bar prints an erase message:

```
Touch: (76,163)
Touch: (64,226)
Touch: (32,80)
Touch: (118,100)
Touch: (37,311)
Clear zone tapped — erasing all circles.
Touch: (72,143)
Touch: (134,61)
Touch: (61,293)
Clear zone tapped — erasing all circles.
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Each tap leaves a white circle at your fingertip. The screen title bar shows the running count. Tap the CLEAR bar and the screen resets to blank with the border and title bar redrawn.

---

## SD Card — BMP Reader

This demo reads a 24-bit uncompressed `.bmp` image from a MicroSD card and displays it on the screen. It includes a built-in SD probe test (write/read) and prints full diagnostics to the serial monitor, making it useful for verifying both SD card access and BMP decoding. Images larger than 172×320 are center-cropped; smaller images are centered on the screen.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The LCD and SD card share the same physical SPI pins (SCK = D8, MOSI = D10, MISO = D9) but use **separate SPI hosts**: the LCD runs on Seeed_GFX2's HSPI host, while the SD card runs on the default ESP32 FSPI host. The SD chip-select (D6) is held HIGH when idle so the card stays off the shared bus. The sketch **reads the SD card first, then initializes the LCD** — it mounts the SD, decodes the BMP into a RAM frame buffer, calls `SD.end()`, and only then initializes the display. This ordering keeps the two SPI hosts from fighting over the shared D8/D10 pins.

The sketch mounts the SD card at several SPI frequencies (4 MHz → 1 MHz → 400 kHz), then runs a quick write/read probe (`/SDPROBE.TXT`) to confirm the filesystem is accessible before decoding any image. It then looks for a BMP file in the SD root (preferred names: `/test.bmp`, `/TEST.BMP`, `/image.bmp`, `/IMAGE.BMP`, etc.), decodes it row by row into an RGB565 frame buffer, and draws the result with a "BMP OK" header (showing the decode time) and the file path along the bottom edge of the screen.

**Supported BMP formats:**

<div class="table-center">
  <table align="center">
    <tr><th>Format</th><th>Bit Depth</th><th>Notes</th></tr>
    <tr><td>Uncompressed BMP (BI_RGB)</td><td>24-bit (16/32-bit also accepted)</td><td>BGR888 converted to RGB565 for display</td></tr>
  </table>
</div>

Images larger than 172×320 are center-cropped; smaller images are centered. For best results, use a 24-bit uncompressed BMP sized exactly 172×320 pixels named `/test.bmp`.

### Running the Demo

**Step 1.** Format a MicroSD card as **FAT32**.

**Step 2.** Copy a 24-bit uncompressed BMP image named `test.bmp` (ideally 172×320 pixels) to the root of the SD card.

**Step 3.** Insert the SD card into the MicroSD slot on the display board.

**Step 4.** Open `xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 5.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
=== XIAO ESP32-S3 Plus 1.47 SD BMP Reader Diagnostic v0.8 ===
[PIN] SD  CS=D6 SCK=D8 MISO=D9 MOSI=D10
[IMG] Put /test.bmp in SD root
[SD] Trying 4000000 Hz...
[SD] OK card=15193 MB freq=4000000 Hz
[PROBE] write /SDPROBE.TXT
[PROBE] write OK
[PROBE] read /SDPROBE.TXT
[PROBE] read OK: XIAO ESP32-S3 SD probe OK

[IMG] open start /test.bmp
[IMG] open done  /test.bmp
[IMG] file size=117814
[BMP] header OK path=/test.bmp size=122x320 bpp=24 row=368 offset=54
[IMG] BMP loaded /test.bmp
[DONE] BMP loaded path=/test.bmp readMs=7881 totalMs=8016
```

:::note
The exact values (`card=15193 MB`, `file size=117814`, `readMs=7881`, etc.) depend on your SD card and BMP file — your output will differ.
:::

The screen then shows the decoded image with a green "BMP OK" header (displaying the decode time in milliseconds) and the file path along the bottom edge.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_bmp_reader.gif" style={{width:500, height:'auto'}}/></div>

The image appears on the screen with a green "BMP OK" header (showing the decode time) and the file path at the bottom. If no BMP file is found, the screen shows "No BMP loaded" with instructions to check the serial monitor and use `/test.bmp`.

---

## Microphone & Speaker

### Demo 1: Volume Bar

This demo turns the onboard PDM microphone into a large, responsive volume meter. A 10-segment bar fills the center of the screen — green at low levels, yellow at mid-range, red when loud. The percentage is displayed above the bar and changes color to match the level.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### How It Works

The onboard **PDM (Pulse Density Modulation) digital microphone** is sampled through the ESP32-S3's I2S peripheral configured in PDM RX mode. On ESP-IDF v5 (Arduino core 3.3.11), this uses the new driver API (`driver/i2s_pdm.h`):

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM clock output to microphone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM data input from microphone</td></tr>
  </table>
</div>

The I2S peripheral is configured at **16 kHz mono** with 4 DMA descriptors of 256 frames each. The PDM CLK drive strength is reduced after initialization to minimize electrical coupling. Samples are read via `i2s_channel_read()` with a 20 ms timeout in the main loop.

**Signal processing:**

1. **Peak extraction** — each 256-sample buffer is scanned for the largest absolute value (peak amplitude).
2. **Normalization** — the raw peak is mapped from a floor of 40 to a ceiling of 16,000, producing a 0.0–1.0 volume value. Values below the floor are treated as silence.
3. **Exponential smoothing** — the displayed volume is an exponential moving average of the raw peak (α = 0.20) to prevent jitter. When silence is detected, the displayed value decays by ×0.94 per frame.

**Bar drawing:**

<div class="table-center">
  <table align="center">
    <tr><th>Segment</th><th>Color</th><th>Volume Range</th></tr>
    <tr><td>0–4 (bottom 5)</td><td>Green</td><td>0% – 50%</td></tr>
    <tr><td>5–8 (middle 4)</td><td>Yellow</td><td>50% – 90%</td></tr>
    <tr><td>9 (top)</td><td>Red</td><td>90% – 100%</td></tr>
  </table>
</div>

The bar uses **differential rendering**: only segments whose state changed since the last frame are redrawn. Unchanged segments are left as-is, minimizing SPI traffic and preventing flicker.

#### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_mic_canvas.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
=== Volume Bar (ESP32-S3) ===
[MIC] PDM RX ready (IDF v5)
[MIC] ready — speak or blow into the mic
```

**Step 4.** Speak into the PDM microphone (located near the bottom-left corner of the display board) or blow on it. The bar fills from green to yellow to red, and the percentage updates above it.

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_mic_canvas.gif" style={{width:500, height:'auto'}}/></div>

The bar responds in real time. In a quiet room the bar stays empty. Speaking at a normal volume from ~20 cm away lights up the green segments. Blowing directly into the mic pushes into the yellow or red range.

---

### Demo 2: SD Recorder

This demo turns the board into a simple voice recorder. Press **USR1** to record 5 seconds of audio from the onboard PDM microphone, save it to the MicroSD card as a WAV file, then press **USR2** to play the recording back through an external **MAX98357A** I2S amplifier and speaker.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::note
This demo uses **Seeed_GFX2** for the on-screen status display, and the **built-in `SD.h`** from the esp32 board package for file access. **No SdFat** is required.
:::

#### Hardware Setup

**MicroSD card.** Insert a FAT32-formatted MicroSD card into the card slot on the display board **before** flashing the sketch or powering on. The onboard PDM microphone needs no external wiring.

**Speaker output.** Connect a MAX98357A I2S amplifier module to the bottom I2S breakout pads:

<div class="table-center">
  <table align="center">
    <tr><th>I2S Pad</th><th>XIAO Pin</th><th>GPIO</th><th>MAX98357A</th></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>GPIO38</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>GPIO39</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>GPIO40</td><td>LRC / WS</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>—</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>—</td><td>GND</td></tr>
  </table>
</div>

Connect the speaker to the **SPK+** and **SPK-** terminals of the MAX98357A.

#### How It Works

The demo runs through four stages, using four different peripherals in sequence:

**PDM microphone (recording).** The onboard PDM microphone is sampled through the I2S peripheral in PDM RX mode on **D0 (PDM_CLK)** and **D1 (MIC_DATA)** at 16 kHz mono. The first **300 ms** of captured data is discarded as warm-up data to avoid a click at the start of the recording.

**RAM buffer.** A 5-second recording at 16 kHz, 16-bit mono occupies **160,000 bytes** (`5 s × 16,000 samples/s × 2 bytes`). The samples are held in a RAM buffer before being written to the SD card.

**SD card (storage).** The recording is written to `/REC_RAW.WAV` on the MicroSD card using the ESP32 board package's built-in `SD.h`. The sketch mounts the card at several SPI frequencies — trying **8 MHz → 4 MHz → 1 MHz → 0.4 MHz** — until one succeeds. Each new recording overwrites the previous file.

:::caution
This demo deletes `/REC_RAW.WAV` on startup. Copy the recording to your computer before restarting the board if you want to keep it.
:::

**I2S playback.** Playback uses the I2S peripheral in master / transmit mode at **16 kHz, 16-bit, Philips stereo**. The mono samples are duplicated into both the left and right I2S channels, allowing playback regardless of the MAX98357A channel selection.

**Shared LCD/SD bus.** The LCD and SD card share the **D8** (SCK), **D9** (MISO), and **D10** (MOSI) pins. The demo keeps them from colliding by giving each its own SPI host:

- The **LCD** uses Seeed_GFX2's **HSPI** host.
- The **SD card** uses the ESP32's default **FSPI** host.
- Before writing to or reading from the SD card, the sketch calls `display.end()` to release the LCD's hold on the shared pins, then re-initializes the display once the SD transfer is finished.

This separation avoids SPI transaction conflicts between LCD refreshes and SD card access.

#### Running the Demo

**Step 1.** Insert a **FAT32** MicroSD card into the card slot on the display board.

**Step 2.** Connect the **MAX98357A** amplifier and speaker to the I2S breakout pads as described above.

**Step 3.** Open `xiao_esp32s3_147_sd_record.ino` in Arduino IDE.

**Step 4.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (with esp32 board package **3.3.11**) and the correct **Port**, then click **Upload**.

**Step 5.** Once uploaded, the screen shows **"SD Recorder"**.

**Step 6.** Press **USR1** and speak into the onboard PDM microphone for 5 seconds.

**Step 7.** Wait for the screen to show **"Saved SD WAV"** — the recording has been written to the SD card.

**Step 8.** Press **USR2** to play the recording back through the speaker.

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

- The screen shows the recording progress while capturing.
- After recording finishes, the screen shows **"Saved SD WAV"**.
- A `/REC_RAW.WAV` file is created on the SD card.
- Pressing **USR2** plays back the audio you just recorded through the speaker.

---

## IMU

The 1.47'' IPS Display features an onboard 6-axis IMU (LSM6DS3) connected via I2C on D4/D5. The motion interrupt line on **D14** supports hardware wake-up and gesture detection.

:::note
The onboard IMU is the **LSM6DS3** (confirmed from the board schematic, I2C address `0x6A`). The demo sketches additionally probe for a QMI8658-compatible sensor as a defensive fallback, but the shipped 1.47'' IPS Display uses the LSM6DS3.
:::

Both demos below read the onboard **LSM6DS3** over I2C. The sketches also probe for a QMI8658-compatible sensor as a defensive fallback, but the raise-to-wake configuration targets the LSM6DS3 registers.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

This demo turns the screen into an interactive fluid simulation — golden sand particles that flow and settle according to gravity, as measured by the onboard 6-axis IMU. Tilt the board and the sand shifts direction in real time.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The simulation uses a **24×45 occupancy grid** overlaid on the 172×320 screen, where each cell is 7×7 pixels. Around **180 particles** are placed in the grid, each with a position, velocity, and a golden color gradient.

The IMU is read via I2C (D4/D5) every **8 ms**. The sketch probes for an IMU at both known addresses — QMI8658 first, then LSM6DS3 — and uses whichever one responds. Raw acceleration values are low-pass filtered and used to derive a gravity vector. When you tilt the board:

1. **Gravity vector updates** — accelerometer data is smoothed with an exponential moving average to avoid jitter.
2. **Particle velocity** — each particle accelerates in the direction of the gravity vector, with damping and a per-particle mobility factor based on its depth in the flow.
3. **Cell occupancy** — particles deeper in the flow (closer to the "bottom" relative to gravity) have reduced mobility, creating a realistic packing effect.
4. **Differential rendering** — only cells where particles moved into or out of are redrawn, minimizing SPI traffic and keeping the animation smooth.

Particles near the surface flow freely (higher mobility); particles buried deeper pack tightly (lower mobility) — mimicking how real sand behaves.

### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_electronic_quicksand.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Once uploaded, the screen fills with golden particles at the bottom. Tilt the board in different directions — the sand flows as if pulled by gravity.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to confirm initialization:

```
=== Electronic Quicksand ESP32-S3 1.47 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

The particles flow toward the lower edge as you tilt the board. When the display lies flat, the demo retains the previous gravity direction.

---

### Demo 2: Raise to Wake

This demo implements a **screen sleep/wake system** driven by the IMU's built-in wake-up interrupt on **D14**. The screen automatically turns off (backlight off + ESP32 light sleep) after 8 seconds of inactivity, and wakes instantly when you pick up or move the device.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the IMU's **embedded wake-up event detector** — a hardware feature that monitors accelerometer data internally and asserts the INT1 pin (routed to D14 on this board) when motion exceeds a configurable threshold. This means the MCU does not need to poll the accelerometer continuously.

The raise-to-wake demo configures the onboard **LSM6DS3** for motion-triggered wake-up.

**IMU configuration (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Accelerometer @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Enable embedded interrupts</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Wake-up threshold (medium-low sensitivity)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>No duration filter (responsive wake)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Route wake-up to INT1</td></tr>
  </table>
</div>

**Sleep/wake flow:**

1. **Active state** — screen is on, backlight at PWM 160. IMU data and battery voltage refresh every 250 ms / 1000 ms respectively. A countdown timer shows seconds remaining until auto-sleep.
2. **Auto-sleep** — after 8 seconds of no activity, the sketch turns off the backlight, displays a "Sleeping... Pick up device to wake" message, configures D14 as a wake-up source via `esp_sleep_enable_gpio_wakeup()`, and enters ESP32 light sleep.
3. **Wake-up** — when the user picks up the board, the IMU detects motion and asserts D14 HIGH. The ESP32 wakes from light sleep and redraws the UI.

**Manual test buttons:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Force wake</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Force sleep</td></tr>
  </table>
</div>

### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_wakeup.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 2.** The screen shows a dashboard with power state, motion data, and a countdown timer. Let the board sit still for 8 seconds — it will automatically sleep.

**Step 3.** Pick up the board or shake it gently — the screen wakes immediately.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to observe the IMU detection and wake events:

```
=== XIAO ESP32-S3 Plus 1.47 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[IMU] wake config OK
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
```

Each motion wake prints a new `[WAKE] IMU_D14  count=N` line with an incremented count. The sleep transition is shown on the screen only — no serial line is printed when the board goes to sleep.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

The screen displays real-time accelerometer and gyroscope data while awake. After 8 seconds of stillness, the screen goes dark and the ESP32-S3 enters light sleep. Pick up the device and the screen restores within a fraction of a second, with the wake counter incremented.

---

## User Button

The 1.47'' IPS Display has **two physical push buttons** connected to the XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Active-low (pressed = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Active-low (pressed = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Reading a Button

Both buttons use the XIAO's internal pull-up resistors. A simple polled read with debounce looks like this:

```cpp
const int BTN_A = D19;
const int BTN_B = D15;

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BTN_A) == LOW) {
    Serial.println("BTN_A pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(BTN_B) == LOW) {
    Serial.println("BTN_B pressed");
    delay(200);
  }
}
```

### Debounce with Interrupts

For responsive, debounced button handling, you can use GPIO interrupts with a short settling delay:

```cpp
volatile bool btnAFlag = false;
volatile bool btnBFlag = false;

void btnAIsr() { btnAFlag = true; }
void btnBIsr() { btnBFlag = true; }

void setup() {
  pinMode(D19, INPUT_PULLUP);
  pinMode(D15, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D19), btnAIsr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D15), btnBIsr, FALLING);
}

void loop() {
  if (btnAFlag) {
    btnAFlag = false;
    delay(30); // debounce settling time
    if (digitalRead(D19) == LOW) {
      // handle BTN_A press
    }
  }
  if (btnBFlag) {
    btnBFlag = false;
    delay(30);
    if (digitalRead(D15) == LOW) {
      // handle BTN_B press
    }
  }
}
```

### Default Behavior in the Factory Dashboard

In the preloaded factory firmware, the buttons are mapped as follows (you can override these in your own code):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Action</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>Short press: cycle screen brightness <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>Short press: <strong>toggle screen off / restore to last brightness</strong></td></tr>
  </table>
</div>

The button breakout pads (labeled U1 and U2 on the board) mirror D19 and D15 respectively, allowing you to connect external buttons if desired.

## Battery Voltage Detection

This demo reads the onboard battery voltage divider on **D16** and shows two live yellow readings on the 1.47'' IPS Display: the raw D16 divider voltage and the calculated battery voltage. It displays voltage readings only; it does not estimate battery percentage or report charging status.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

**Battery circuit:**

The ESP32-S3 Plus reads the LiPo battery voltage through an onboard voltage divider connected to **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Analog input reading the divided battery voltage. Internally connected to a voltage divider circuit (316K / 160K). <strong>Do not use this pin externally.</strong></td></tr>
  </table>
</div>

**Voltage divider ratio:** R14 = 316 kΩ, R15 = 160 kΩ → **Divider ratio = (316 + 160) / 160 ≈ 2.975**

**Reading:**

The sketch initializes the display with `Board_XIAO_1inch47_Touch_Display<13, 12>` and `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, no inversion), then samples **D16** twelve times (700 µs apart) using `analogReadMilliVolts()` at 12-bit resolution with 11 dB attenuation. It averages the samples into the raw divider voltage, multiplies by the divider ratio to get the battery voltage (`Calc = D16 × 2.975`), and draws both as two centered yellow lines. The screen refreshes only when either value changes by a meaningful amount (D16 ≥ 0.02 V or Calc ≥ 0.05 V).

:::note
No charging-status signal is connected to an ESP32-S3 GPIO. This demo displays voltage readings only; it does not detect battery presence or charging status, or estimate battery percentage.
:::

### Running the Demo

**Step 1.** Open `xiao_esp32s3_147_battery_status.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Observe the screen — it shows two yellow lines: the raw D16 divider voltage and the calculated battery voltage. Connect or disconnect a LiPo battery (or the USB-C cable) to watch the values update.

### Expected Result

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Voltage reading</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong> (back)</div></td>
    </tr>
  </table>
</div>

The screen shows the raw D16 divider voltage on the top line and the calculated battery voltage (`Calc`) on the bottom line. With a LiPo battery connected, `Calc` approximates the battery terminal voltage. A reading can also appear under USB power alone, so `Calc` cannot by itself confirm whether a battery is attached.

The demo also prints a diagnostic line to the Serial Monitor every second, for example:

```
D16 1.39V | Calc 4.14V
```

---

## Resources

- **🗃️[PCB Design Files]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — all Function demos are in the `code_GFX2/Function/147_ESP32/` directory

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
