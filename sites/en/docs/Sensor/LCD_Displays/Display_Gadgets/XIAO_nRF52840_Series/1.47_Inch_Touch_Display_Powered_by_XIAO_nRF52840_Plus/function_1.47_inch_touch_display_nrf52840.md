---
description: Standalone function-level demos for each onboard peripheral of the XIAO 1.47'' IPS Display (nRF52840). Covers screen, touch, SD card, microphone, IMU, buttons, and battery voltage detection.
title: Onboard Peripheral Usage
sidebar_label: Function
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/20/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/function_1.47_inch_touch_display_nrf52840/
---

# Onboard Peripheral Usage

This page collects standalone function-level demos for each onboard peripheral of the 1.47'' IPS Display. Each section is self-contained — you can pick the one that matches your use case without reading through the others.

:::tip
The demo GIFs on this page are sped up to keep them short.
:::

:::note
All demos in this page require **Seeed nRF52 Boards (1.1.13)** as described in [Getting Started](/getting_started_1.47_inch_touch_display_nrf52840), plus the **Seeed_GFX2** library installed manually as described below.
:::

- **Library Manager** — go to **Sketch > Include Library > Manage Libraries...**, search for and install:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU demos</td></tr>
  </table>
</div>

:::note
**SdFat** is bundled with the **Seeed nRF52 Boards (1.1.13)** board package, so the **SD Image Reader** and **Record to SD** demos need no separate SdFat install. Do not install SdFat from the Library Manager, as it may override the bundled version and cause library or API conflicts.
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
- **Seeed_GFX2** is Seeed Studio's graphics library built on a layered `Board` + `Panel Config` architecture. Each demo initializes the display with a single `display.begin<Board_..., Config_...>()` call — the **Board** template owns the pin map (CS/DC/SCK/MOSI/RST/BL), and the **Panel Config** bakes in the 172×320 resolution, color order (BGR), and orientation. No `driver.h` or manual pin setup is needed.
- On this board the demos use `Board_XIAO_1inch47_Touch_Display<38, 37>` (RST=38, BL=37) with `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, no inversion).
- The **touch controller** (AXS5106L) is handled by the `Seeed_GFX2` Touch layer (`Touch_AXS5106L`) — no extra library is needed. The **IMU** demos use the **Seeed Arduino LSM6DS3** library (installed above).
:::

## Getting the Demo Code

Every demo on this page lives in the [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) repository, under the `code_GFX2/Function/` directory. Each demo is a folder containing a single `.ino` sketch. **Always download the complete folder** rather than copying the `.ino` source from the GitHub web view.

**Option A — Download the repository as a ZIP (recommended):**

1. Open [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) and click **Code > Download ZIP**, then extract the archive anywhere convenient.
2. Navigate into `code_GFX2/Function/` and open the folder shown in each demo's **Code location** line. For example, the GraphicTest demo for this board lives in `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`.
3. **Double-click the `.ino` file** to open it in the Arduino IDE.

**Option B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Then open the demo's `.ino` file from the cloned `code_GFX2/Function/...` folder.

## Screen Display — GraphicTest

This demo runs a full graphics benchmark on the 1.47-inch JD9853A panel, covering color bars, lines, rectangles, circles, triangles, rounded rectangles, text, and a pixel gradient. Use it to verify that the screen is wired correctly and that all draw calls work as expected.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The sketch initializes the JD9853A panel via **Seeed_GFX2**, then runs through ten graphics primitives in sequence, measuring the execution time of each one via `micros()` and printing the result to the serial monitor.

The display is initialized with a single template call:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<38, 37>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

The **Board** template owns the pin map — CS=D2, DC=D3, SCK=D8, MOSI=D10 — and its `<RST, BL>` template parameters take bare GPIO numbers, so `<38, 37>` sets RST=GPIO38 and BL=GPIO37. The **Panel Config** bakes in the 172×320 resolution, BGR color order, and no inversion — no `driver.h` or manual MADCTL write is needed.

### Running the Demo

**Step 1.** Open `xiao_nrf52840_147_graphictest.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). You should see timing output for each test:

```
LCD width: 172
LCD height: 320
Color bars: 57.62 ms
Lines: 4859.38 ms
Fast lines: 95.70 ms
Rectangles: 74.22 ms
Filled rectangles: 236.33 ms
Circles: 588.87 ms
Triangles: 413.09 ms
Round rectangles: 125.98 ms
Text: 1961.91 ms
Pixel gradient: 8716.80 ms
Graphic test finished.
```

On the screen, you will see each test pattern displayed for about one second before the next one starts. When all tests complete, a "Finished" screen appears with a blue rounded-rectangle border.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

After the sketch runs through all patterns, the screen shows a "Graphic Test / Finished" message. Reset the board to run the test again.

---

## Touch — Touch Circle

This demo turns the 1.47-inch touch screen into an interactive drawing pad. Tap anywhere on the screen and a white circle appears at your fingertip. Circles stay on screen, building up as you tap. Tap the **CLEAR** bar at the bottom of the screen to erase all circles and start over.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the **AXS5106L** capacitive touch controller (I2C address `0x63`) connected via I2C on D4/D5. The touch interrupt line on **D7** fires on the falling edge whenever a finger touches or releases the screen. Touch is handled by the Seeed_GFX2 **Touch layer** (`Touch_AXS5106L`):

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
    <tr><td>D7</td><td>Touch interrupt (active-low, falling edge)</td></tr>
    <tr><td>RST</td><td>Shared with the LCD reset (GPIO38)</td></tr>
  </table>
</div>

**Edge-triggered drawing.** The sketch uses an edge-detection approach: it only adds a circle on the falling edge of a touch (finger-down), not while the finger is held. This gives crisp, intentional tap-to-draw behavior rather than continuously painting a trail as you drag.

**X-axis mirroring.** The touch panel is physically mounted in a different orientation than the LCD, so the raw X coordinate must be mirrored. `display.getTouch()` already applies this mirroring internally and returns screen coordinates, so no manual `screenX = 172 - 1 - rawX` transform is needed.

**Circle buffer.** Up to 120 circles are stored in a circular buffer. When the buffer is full, the oldest circle is removed and the screen is redrawn to keep the display clean.

**CLEAR zone.** The bottom 36 pixels of the screen are reserved as a CLEAR bar. Tapping this area erases all circles and resets the counter instead of drawing a new circle.

**Safe drawing area.** A dim gray border outlines the area where circles are fully visible.

### Running the Demo

**Step 1.** Open `xiao_nrf52840_147_touch_circle.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Step 4.** Tap the screen — each tap prints the mapped screen coordinates:

```
Touch: screen=(144,124)
Touch: screen=(166,210)
Touch: screen=(121,250)
Touch: screen=(37,231)
Touch: screen=(122,44)
```

Tap the CLEAR bar at the bottom to erase all circles.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Each tap leaves a white circle at your fingertip. The screen title bar shows the running count. Tap the CLEAR bar and the screen resets to blank with the border and title bar redrawn.

---

## SD Card — Image Reader

This demo reads `.bmp` image files from a MicroSD card and displays them on the screen. It supports 24-bit uncompressed BMP images and center-crops them to fit the 172×320 display.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_image_reader/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The LCD and SD card share the same hardware SPI bus (SCK = D8, MOSI = D10, MISO = D9). To avoid bus contention, the sketch de-asserts the SD card chip-select (D6) before any LCD operation and re-asserts it before SD access. The SD card is driven by SdFat in `SHARED_SPI` mode on the default `SPI` instance, while the LCD runs on Seeed_GFX2's SPI host — both share the same physical D8/D9/D10 pins.

The sketch scans the SD card root directory for `.bmp` files (up to 24), then displays them in a loop with a 2-second interval between images.

**Supported BMP formats:**

<div class="table-center">
  <table align="center">
    <tr><th>Format</th><th>Bit Depth</th><th>Notes</th></tr>
    <tr><td>Uncompressed BMP</td><td>24-bit</td><td>BGR888 converted to RGB565 for display</td></tr>
  </table>
</div>

Images larger than 172×320 are center-cropped.

### Running the Demo

**Step 1.** Format a MicroSD card as **FAT32**.

**Step 2.** Copy one or more `.bmp` images to the root of the SD card.

**Step 3.** Insert the SD card into the MicroSD slot on the display board.

**Step 4.** Open `xiao_nrf52840_147_sd_image_reader.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 5.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
[IMAGE] /Atest.bmp
[IMAGE] /Another test.bmp
[IMAGE] /test.bmp
[SD] mounted @ 8000000
```

:::note
The filenames listed reflect the `.bmp` files you placed on the SD card. Your output will vary depending on the files you copy to the card.
:::

The screen displays each image for 2 seconds, then advances to the next one in a continuous loop.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_sd_reader.gif" style={{width:500, height:'auto'}}/></div>

If no BMP files are found, the screen shows "No BMP found". If an image fails to decode, the screen briefly shows the file path with "BMP decode failed" and moves to the next file.

---

## Microphone & Speaker

The 1.47'' IPS Display has an onboard **PDM (Pulse Density Modulation) digital microphone** for audio input, plus I2S output pads for driving an external speaker/amplifier. This section shows two demos: a real-time **Volume Bar** visualization of the microphone input (no extra hardware), and a **Record to SD** demo that records 5 seconds of audio to a MicroSD card and plays it back through an external I2S amplifier.

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM clock output to microphone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM data input from microphone</td></tr>
  </table>
</div>

### Demo 1: Volume Bar

This demo turns the onboard PDM microphone into a large, responsive volume meter. A 10-segment bar fills the center of the screen — green at low levels, yellow at mid-range, red when loud. The percentage is displayed above the bar and changes color to match the level.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### How It Works

The onboard **PDM (Pulse Density Modulation) digital microphone** is connected to the nRF52840's PDM peripheral via **D0 (PDM_CLK)** and **D1 (MIC_DATA)** as shown in the pin table above.

The Arduino **PDM library** handles the low-level PDM-to-PCM conversion in hardware. The sketch configures the PDM peripheral at **16 kHz mono** with a gain of **30**, then registers an interrupt-driven callback (`onPDMdata`) that fires whenever a 256-sample buffer is ready.

**Signal processing:**

1. **Peak extraction** — each callback scans the 256-sample buffer for the largest absolute value (peak amplitude).
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

**Step 1.** Open `xiao_nrf52840_147_mic_canvas.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
[MIC] ready
```

**Step 4.** Speak into the PDM microphone (located near the bottom-left corner of the display board) or blow on it. The bar fills from green to yellow to red, and the percentage updates above it.

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_mic_bar.gif" style={{width:500, height:'auto'}}/></div>

The bar responds in real time. In a quiet room the bar stays empty. Speaking at a normal volume from ~20 cm away lights up the green segments. Blowing directly into the mic pushes into the yellow or red range.

---

### Demo 2: Record to SD

This demo records **5 seconds** of audio from the onboard PDM microphone into RAM, saves it to a MicroSD card as a WAV file, then plays it back through an external I2S amplifier. Press one button to record, another to play.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_unline_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Hardware Setup

Playback requires an external **I2S audio amplifier and speaker**. The demo is written for a **MAX98357A** breakout connected to the board's I2S output pads:

<div class="table-center">
  <table align="center">
    <tr><th>I2S Pad</th><th>XIAO Pin</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

The I2S pads (3V3, GND, D11, D12, D13) are exposed on the bottom expansion pad group of the display board.

#### How It Works

**Recording.** The onboard PDM microphone is captured at **16 kHz mono, 16-bit** through the nRF52840's PDM peripheral, using the same **D0 (PDM_CLK)** / **D1 (MIC_DATA)** pins as Demo 1. When you press **USR1**, the sketch samples 5 seconds of audio directly into a static RAM buffer, then writes it to the SD card as a WAV file (`/REC_001_RAW.WAV`) using the SdFat library bundled with Seeed nRF52 Boards 1.1.13.

The recording is buffered in RAM because the nRF52840 has only **256 KB of RAM**. At 16 kHz × 16-bit mono, 5 seconds needs 160,000 bytes — which fits. 10 seconds would need 320,000 bytes and would not fit, so the demo is fixed at 5 seconds.

**Playback.** Pressing **USR2** reads the WAV back from the SD card (skipping the 44-byte WAV header) and streams it out through the nRF52840's I2S peripheral in Philips stereo mode on **D11/D12/D13**. The mono samples are duplicated to both channels with a `0.75×` gain applied to avoid clipping. The amplifier drives a small speaker so you can hear the recording.

**State machine.** The recorder runs through a deterministic sequence of states, printing each transition to the serial monitor:

```
IDLE → PREPARE_SYSTEM → QUIET_RADIO → PREPARE_PERIPHERALS → START_HFCLK → START_PDM
     → DISCARD_WARMUP → CAPTURE_RAM → STOP_PDM → SAVE_RAW → DONE
```

- **QUIET_RADIO** disables the RADIO peripheral (this sketch never initializes BLE) to keep the timing-sensitive capture section stable.
- **START_HFCLK** switches the high-frequency clock to the external 32 MHz crystal, which the PDM peripheral needs for accurate sampling.
- **DISCARD_WARMUP** drops the first 300 ms of PDM output while the microphone settles.
- **CAPTURE_RAM** fills the buffer until 80,000 samples (5 s) are collected, drawing a live progress bar on screen.

**On-screen states:**

<div class="table-center">
  <table align="center">
    <tr><th>State</th><th>Description</th></tr>
    <tr><td><strong>Ready</strong></td><td>"RAM Recorder" title with "USR1: record" and "USR2: play last"</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Recording" label, an elapsed timer ("2.3s / 5s"), and a red progress bar</td></tr>
    <tr><td><strong>Done</strong></td><td>"Done" title with the saved filename and "Saved raw WAV", plus "USR1: record" / "USR2: play raw"</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playback" title showing "Loading RAW audio..." then "Playing RAW audio", ending on "Finished"</td></tr>
  </table>
</div>

#### Running the Demo

**Step 1.** Format a MicroSD card as **FAT32** and insert it into the MicroSD slot on the display board.

**Step 2.** Connect a MAX98357A amplifier and speaker to the I2S pads as described above.

**Step 3.** Open `xiao_nrf52840_147_sd_unline_record.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). On boot you should see:

```
=== XIAO nRF52840 Plus RAM PDM recorder ===
[RAM] record buffer bytes=160000
[RADIO] BLE is not initialized by this sketch
[PDM] library uses EasyDMA double buffering
[STATE] IDLE
```

**Step 5.** Press **USR1 (D19)** to record 5 seconds of audio from the onboard microphone. The progress bar fills as it records, and the state machine prints each transition:

```
[STATE] PREPARE_SYSTEM
[STATE] QUIET_RADIO
[STATE] PREPARE_PERIPHERALS
[STATE] START_HFCLK
[STATE] START_PDM
[STATE] DISCARD_WARMUP
[STATE] CAPTURE_RAM
[STATE] STOP_PDM
[STATE] SAVE_RAW
[STATE] DONE
[SAVE] /REC_001_RAW.WAV
```

**Step 6.** Press **USR2 (D15)** to play the recording back through the speaker:

```
[PLAY] latest RAW audio
[PLAY] finished
```

:::note
Each new recording is saved as a numbered WAV file (`REC_001_RAW.WAV`, `REC_002_RAW.WAV`, …), so previous recordings are kept. The "Done" screen shows the filename of the most recent recording.
:::

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_record.gif" style={{width:500, height:'auto'}}/></div>

Press USR1 and the screen shows a recording progress bar. After 5 seconds it confirms the WAV was saved to the SD card. Press USR2 and the audio plays through the connected speaker while the screen shows the playback status.

---

## IMU

### Demo 1: Electronic Quicksand

This demo turns the screen into an interactive fluid simulation — golden sand particles that flow and settle according to gravity, as measured by the onboard LSM6DS3 6-axis IMU. Tilt the board and the sand shifts direction in real time.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The simulation uses a **24×45 occupancy grid** overlaid on the 172×320 screen, where each cell is 7×7 pixels. Around **180 particles** are placed in the grid, each with a position, velocity, and a golden color gradient.

The LSM6DS3 accelerometer is read via I2C (D4/D5) every **8 ms**. The raw acceleration values are low-pass filtered and used to derive a gravity vector. When you tilt the board:

1. **Gravity vector updates** — accelerometer data is smoothed with an exponential moving average to avoid jitter.
2. **Particle velocity** — each particle accelerates in the direction of the gravity vector, with damping and a per-particle mobility factor based on its depth in the flow.
3. **Cell occupancy** — particles deeper in the flow (closer to the "bottom" relative to gravity) have reduced mobility, creating a realistic packing effect.
4. **Differential rendering** — only cells where particles moved into or out of are redrawn, minimizing SPI traffic and keeping the animation smooth.

Particles near the surface flow freely (higher mobility); particles buried deeper pack tightly (lower mobility) — mimicking how real sand behaves.

### Running the Demo

**Step 1.** Open `xiao_nrf52840_147_electronic_quicksand.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Once uploaded, the screen fills with golden particles at the bottom. Tilt the board in different directions — the sand flows as if pulled by gravity.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to confirm initialization:

```
=== Electronic Quicksand ===
imu.begin=0
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

The golden sand particles flow smoothly as you tilt the board. When held flat, the sand settles at the bottom of the screen. Rotate the board 90 degrees and the sand flows to the new "bottom" within a second.

---

### Demo 2: Raise to Wake

This demo implements a **screen sleep/wake system** driven by the LSM6DS3 IMU's built-in wake-up interrupt on **D14**. The screen automatically turns off (backlight off + CPU enters System ON sleep) after 8 seconds of inactivity, and wakes instantly when you pick up or move the device.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the LSM6DS3's **embedded wake-up event detector** — a hardware feature that monitors accelerometer data internally and asserts the INT1 pin (routed to D14 on this board) when motion exceeds a configurable threshold. This means the MCU does not need to poll the accelerometer continuously.

**IMU configuration:**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Accelerometer @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Block data update + auto-increment</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Enable embedded interrupts</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Wake-up threshold (medium-low sensitivity)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>No duration filter (responsive wake)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Route wake-up to INT1</td></tr>
  </table>
</div>

**Sleep/wake flow:**

1. **Active state** — screen is on, backlight at PWM 120. IMU data and battery status refresh every 250 ms / 1000 ms respectively. A countdown timer shows seconds remaining until auto-sleep.
2. **Auto-sleep** — after 8 seconds of no activity, the sketch turns off the backlight, draws a "Sleeping... Pick up device to wake" message, and enters nRF52840 **System ON sleep** via WFE (Wait For Event).
3. **Wake-up** — when the user picks up the board, the LSM6DS3 detects motion and asserts D14 HIGH. The GPIO interrupt fires, the CPU wakes from WFE, the backlight turns on, and the UI is fully redrawn.

In System ON sleep, all RAM and peripheral states are preserved — wake-up is nearly instant (under 1 ms from interrupt to backlight on).

**Manual test buttons:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Force sleep</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Force wake</td></tr>
  </table>
</div>

### Running the Demo

**Step 1.** Open `xiao_nrf52840_147_wakeup.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 2.** The screen shows a dashboard with power state, motion data, and a countdown timer. Let the board sit still for 8 seconds — it will automatically sleep.

**Step 3.** Pick up the board or shake it gently — the screen wakes immediately.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to observe the sleep/wake transitions:

```
[SLEEP] screen backlight off, waiting for IMU D14 wake
[SYS_ON_SLEEP] waiting, sleepLoops=26625 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=27649 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=28673 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=29697 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=58776 sleepLoops=29705
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=60110 sleepLoops=29705
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

The screen displays real-time accelerometer and gyroscope data while awake. After 8 seconds of stillness, the screen goes dark and the nRF52840 enters low-power sleep. Pick up the device and the screen restores within a fraction of a second, with the wake counter incremented.

---

## User Button

The 1.47'' IPS Display has **two physical push buttons** connected to the XIAO nRF52840 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Active-low (pressed = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Active-low (pressed = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Reading a Button

Both buttons use the XIAO's internal pull-up resistors. A simple non-blocking read looks like this:

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

For responsive, debounced button handling without blocking the main loop, you can use pin-change interrupts:

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

---

## Battery Status

This demo shows the battery status — a battery icon with charge level and charging state — on the 1.47'' IPS Display. It detects whether a LiPo battery is physically connected and shows one of three states: **USB PWR** (no battery), **percentage** (battery only), or **charging** (USB + battery).

The 1.47'' IPS Display includes an onboard battery voltage measurement circuit. The nRF52840 Plus reads the LiPo battery voltage through a voltage divider and can display the remaining capacity as a percentage.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

**Display:**

The screen is driven by **Seeed_GFX2** with `Board_XIAO_1inch47_Touch_Display<38, 37>` and `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, rotation 2) over 10 MHz hardware SPI.

**Battery circuit:**

The nRF52840 Plus uses **three GPIO pins** to form a complete battery monitoring system:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Battery voltage divider enable. Active-low — set LOW to enable the divider, then release to HIGH (high-impedance) to save power.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Analog input reading the divided battery voltage.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Charging status indicator. Active-low — reads LOW when a charger is connected and the battery is charging.</td></tr>
  </table>
</div>

**Detection:**

Under USB-C, a static VBAT voltage cannot tell whether a battery is present — the charger's BAT node can look like a real Li-ion cell even with no battery attached. So the demo first learns a **USB-only baseline**, then confirms battery insertion only after a sustained downward VBAT shift, and confirms removal after a noisy/jumped reading combined with `~CHG` going HIGH. This mirrors the factory Dashboard's detection logic.

**Icon states:**

- **No battery** — grey outline battery with a red cross, labelled **USB PWR**.
- **Battery present** — white outline battery with a coloured fill (green / yellow / red by percentage), labelled with the **percentage** and **voltage**.
- **Charging** — cyan fill with a lightning-bolt icon, labelled with the percentage and voltage.

:::note
The `~CHG` pin is read through the nRF52840's **raw GPIO registers** (`nrf_gpio_cfg_input()` and `NRF_P0->IN`) instead of `digitalRead()`. In the Arduino API, pin numbers follow the board package's mapping, where `digitalRead(17)` actually reads **P0.07** (the 6D IMU's I2C data line) rather than P0.17. The constants `14` and `17` here are **raw Nordic P0.x pin numbers** (P0.14 and P0.17), which is exactly what the register calls expect.
:::

:::note
The demo uses the factory-calibrated **499 kΩ** low-side resistor (divider ratio ≈ 3.004), not the 510 kΩ nominal value. The divider is built into the XIAO nRF52840 Plus module itself, not the display board. The P0.14 enable pin is **active-low**: drive it LOW to enable the divider, then release it to high-impedance (INPUT) to minimize quiescent current drain when the battery is not being measured.
:::

### Running the Demo

**Step 1.** Open `xiao_nrf52840_147_battery_status.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Observe the screen — it shows the battery icon with the current state. Plug or unplug a LiPo battery (or the USB-C cable) to watch the icon switch between the three states.

### Expected Result

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (no battery)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (battery only)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + battery)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong> (back)</div></td>
    </tr>
  </table>
</div>

Without a battery, the screen shows a grey battery with a red cross and the label **USB PWR**. Insert a LiPo battery and the icon switches to a coloured fill with the percentage and voltage. Plug in USB-C while a battery is present and the fill turns cyan with a lightning bolt, indicating charging.

The demo also prints a diagnostic line to the Serial Monitor every 500 ms, for example:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Resources

- **🗃️[PCB Design Files]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **🏠[3D Enclosure]** [XIAO 1.47'' IPS Display Enclosure (Design by gokul)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/enclosure/XIAO%201.47%27%27%20IPS%20Display%20Enclosure.zip)
- **💾[Factory Firmware]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — all Function demos are in the `code_GFX2/Function/147_nRF52840/` directory

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
