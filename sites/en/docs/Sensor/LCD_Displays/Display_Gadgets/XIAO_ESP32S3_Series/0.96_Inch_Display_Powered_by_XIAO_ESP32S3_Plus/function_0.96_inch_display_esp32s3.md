---
description: Standalone function-level demos for each onboard peripheral of the XIAO 0.96'' IPS Display (ESP32-S3). Covers screen, IMU, PDM microphone and I2S audio (flash recorder), buttons, and battery voltage detection.
title: Onboard Peripheral Usage
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 0.96
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/function_0.96_inch_display_esp32s3/
---

# Onboard Peripheral Usage

This page collects standalone function-level demos for each onboard peripheral of the 0.96'' IPS Display. Each section is self-contained — you can pick the one that matches your use case without reading through the others.

:::tip
The demo GIFs on this page are sped up to keep them short.
:::

:::note
All demos in this page require **esp32 Boards by Espressif (3.3.11)** as described in [Getting Started](/getting_started_0.96_inch_display_esp32s3), plus the **Seeed_GFX2** library installed manually as described below.
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
- **Seeed_GFX2** is Seeed Studio's graphics library built on a layered `Board` + `Panel Config` architecture. Each demo initializes the display with a single `display.begin<Board_..., Config_...>()` call — the **Board** template owns the pin map (CS/DC/SCK/MOSI/RST/BL), and the **Panel Config** bakes in the 80×160 resolution, BGR color order, and rotation. No `driver.h` or manual panel construction is needed.
- On this board the demos use `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) with `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotation 2).
- The **IMU** is read directly over I2C (`Wire`) in these demos — no external IMU library is needed. The **PDM microphone** and **I2S output** use the ESP-IDF 5 drivers (`driver/i2s_pdm.h`, `driver/i2s_std.h`) and `LittleFS`, all included with the esp32 board package.
- The 0.96'' IPS Display has **no touch controller, no SD card slot, and no Grove connector** — it only has a back-side 4-pin I2C test pad — so no touch, SD, or Grove libraries are needed.
:::

## Getting the Demo Code

Every demo on this page lives in the [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) repository, under the `code_GFX2/Function/` directory. Each demo is a folder containing a single `.ino` sketch. **Always download the complete folder** rather than copying the `.ino` source from the GitHub web view.

**Option A — Download the repository as a ZIP (recommended):**

1. Open [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) and click **Code > Download ZIP**, then extract the archive anywhere convenient.
2. Navigate into `code_GFX2/Function/` and open the folder shown in each demo's **Code location** line. For example, the GraphicTest demo for this board lives in `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`.
3. **Double-click the `.ino` file** to open it in the Arduino IDE.

**Option B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Then open the demo's `.ino` file from the cloned `code_GFX2/Function/...` folder.

## Screen Display — GraphicTest

This demo runs a full graphics benchmark on the 0.96-inch ST7789 IPS panel (80×160), covering color bars, lines, rectangles, circles, triangles, rounded rectangles, text, and a pixel gradient. Use it to verify that the screen is wired correctly and that all draw calls work as expected.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The sketch initializes the ST7789 IPS panel via **Seeed_GFX2**, then runs through ten graphics primitives in sequence, measuring the execution time of each one via `micros()` and printing the result to the serial monitor.

The display is initialized with a single template call:

```cpp
display.begin<Board_XIAO_0inch96_LCD<13, 12>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

The **Board** template owns the pin map — CS=D2, DC=D3, SCK=D8, MOSI=D10 — and its `<RST, BL>` template parameters take bare GPIO numbers, so `<13, 12>` sets RST=GPIO13 (D17) and BL=GPIO12 (D18). The **Panel Config** bakes in the 80×160 resolution, BGR color order, and rotation 2 — no `driver.h` or manual `invertDisplay()` call is needed.

### Running the Demo

**Step 1.** Open `xiao_esp32s3_096_graphictest.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). You should see the panel size followed by timing output for each test:

```
=== XIAO ESP32-S3 Plus 0.96 graphic test ===
LCD width: 80
LCD height: 160
Color bars: 56.67 ms
Lines: 1819.10 ms
Fast lines: 85.03 ms
Rectangles: 73.34 ms
Filled rects: 177.53 ms
Circles: 262.63 ms
Triangles: 235.64 ms
Round rects: 100.58 ms
Text: 635.61 ms
Pixel gradient: 1960.36 ms
Graphic test finished.
```

On the screen, you will see each test pattern displayed for about one second before the next one starts. When all tests complete, a "Done! All tests OK" screen appears.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

After the sketch runs through all patterns, the screen shows a "Done!" message. Reset the board to run the test again.

---

## IMU

The 0.96'' IPS Display features an onboard **LSM6DS3** 6-axis IMU (3-axis accelerometer + 3-axis gyroscope) connected via I2C on D4/D5 at address **0x6A**. The motion interrupt line on **D14** supports hardware wake-up and gesture detection.

:::note
The onboard IMU is the **LSM6DS3** (I2C address `0x6A`). The Electronic Quicksand demo probes for a QMI8658-compatible sensor as a defensive fallback. The Raise to Wake demo targets the onboard LSM6DS3 wake-up registers.
:::

The demos below read the IMU directly over I2C (`Wire`) — no external IMU library is required.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

This demo turns the screen into an interactive fluid simulation — golden sand particles that flow and settle according to gravity, as measured by the onboard 6-axis IMU. Tilt the board and the sand shifts direction in real time.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The simulation uses a **13×26 occupancy grid** overlaid on the 80×160 screen, where each cell is 6×6 pixels. Around **65 particles** are placed in the grid, each with a position, velocity, and a golden color gradient.

The IMU is read via I2C (D4/D5). The sketch probes for an IMU at both known addresses — QMI8658 first, then LSM6DS3 — and uses whichever one responds. Raw acceleration values are low-pass filtered and used to derive a gravity vector. When you tilt the board:

1. **Gravity vector updates** — accelerometer data is smoothed with an exponential moving average to avoid jitter.
2. **Particle velocity** — each particle accelerates in the direction of the gravity vector, with damping and a per-particle mobility factor based on its depth in the flow.
3. **Cell occupancy** — particles deeper in the flow (closer to the "bottom" relative to gravity) have reduced mobility, creating a realistic packing effect.
4. **Differential rendering** — only cells where particles moved into or out of are redrawn, minimizing SPI traffic and keeping the animation smooth on the small panel.

Particles near the surface flow freely (higher mobility); particles buried deeper pack tightly (lower mobility) — mimicking how real sand behaves.

### Running the Demo

**Step 1.** Open `xiao_esp32s3_096_electronic_quicksand.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Once uploaded, the screen fills with golden particles at the bottom. Tilt the board in different directions — the sand flows as if pulled by gravity.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to confirm initialization:

```
=== Electronic Quicksand 0.96 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

The particles flow toward the lower edge as you tilt the board. When the display lies flat, the demo retains the previous gravity direction.

---

### Demo 2: Raise to Wake

This demo implements a **screen sleep/wake system** driven by the IMU's built-in wake-up interrupt on **D14**. The screen automatically turns off (backlight off) after 8 seconds of inactivity, and wakes instantly when you pick up or move the device.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the LSM6-compatible IMU's **embedded wake-up event detector** — a hardware feature that monitors accelerometer data internally and asserts the INT1 pin (routed to D14 on this board) when motion exceeds a configurable threshold. This means the MCU does not need to poll the accelerometer continuously.

**IMU configuration (LSM6-compatible):**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Enable BDU + auto-increment for block reads</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Accelerometer @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>Gyroscope @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Enable embedded interrupts</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Wake-up threshold (medium-low sensitivity)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>No duration filter (responsive wake)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Route wake-up to INT1</td></tr>
  </table>
</div>

**Sleep/wake flow:**

1. **Active state** — screen is on with the backlight lit. IMU data and battery voltage (D16) refresh periodically, and a countdown shows seconds remaining until auto-sleep.
2. **Auto-sleep** — after 8 seconds of no activity, the sketch turns off the backlight and displays a "Sleep — Move to wake" message. By default the demo uses a **display-only sleep**: the ESP32-S3 keeps running (so the USB CDC serial port stays connected) and simply turns the panel off. The IMU wake interrupt on D14 stays armed, so motion detection remains active. (Set `ENABLE_LIGHT_SLEEP` to `true` in the sketch to use real ESP32 light sleep with GPIO wake-up — note that USB CDC can drop while the chip sleeps.)
3. **Wake-up** — when the user picks up the board, the IMU detects motion and asserts D14 HIGH. The sketch turns the backlight back on and redraws the UI — the LCD and IMU are not re-initialized.

**Manual test buttons:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Force sleep</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Force wake</td></tr>
  </table>
</div>

### Running the Demo

**Step 1.** Open `xiao_esp32s3_096_wakeup.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 2.** The screen shows a compact dashboard with power state, battery voltage/percentage, motion data, interrupt count, and a sleep countdown. Let the board sit still — it will automatically enter sleep after 8 seconds.

**Step 3.** Pick up the board or shake it gently — the screen wakes immediately.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to observe the boot and wake transitions:

```
=== XIAO ESP32-S3 Plus 0.96 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[READY] awake; USR1=sleep, USR2=manual wake, motion=IMU wake
[READY] auto sleep in 8 seconds
[READY] sleep mode: display only (USB CDC stays connected)
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
[SLEEP] USR1
[WAKE] IMU_D14  count=3
[WAKE] IMU_D14  count=4
[SLEEP] USR1
[WAKE] IMU_D14  count=5
[SLEEP] AUTO_TIMEOUT
```

After boot, three `[READY]` lines describe the controls: USR1 puts the board to sleep, USR2 wakes it manually, and motion triggers an IMU wake. Each transition is logged — `[WAKE] IMU_D14 count=N` for motion wake-ups (the count increments each time), `[SLEEP] USR1` when you press USR1, and `[SLEEP] AUTO_TIMEOUT` when it auto-sleeps after 8 seconds of no motion.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

The screen displays real-time motion and battery data while awake. After 8 seconds of stillness, the screen goes dark. Pick up the device and the screen restores instantly, with the wake counter incremented.

---

## Microphone & Speaker — Flash Recorder

This demo turns the 0.96'' IPS Display into a small voice recorder. Press USR1 to capture a 5-second clip from the onboard PDM microphone into onboard Flash, then press USR2 to play it back through an external I2S amplifier.

The 0.96'' IPS Display's PDM microphone connects to the same pins as the other XIAO display boards:

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM clock output to microphone</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM data input from microphone</td></tr>
  </table>
</div>

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Hardware Setup

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

### How It Works

**Recording (USR1)** — the onboard **PDM (Pulse Density Modulation) digital microphone** is sampled through the ESP32-S3's I2S peripheral configured in PDM RX mode. On ESP-IDF v5 (Arduino core 3.3.11), this uses the new driver API (`driver/i2s_pdm.h`). The microphone is captured at **16 kHz mono** with 4 DMA descriptors of 256 frames each. When you press USR1, the sketch samples **5 seconds** of audio into a RAM buffer, then writes it to onboard Flash as a WAV file (`/REC_RAW.WAV`) using `LittleFS`.

After the PDM microphone starts, the sketch discards the first **300 ms** of captured data as warm-up data to reduce the startup transient at the beginning of the recording.

If the sketch cannot capture all samples within **7 seconds**, it stops recording and displays **"Mic timeout"** instead of remaining blocked in the recording loop.

:::note
On this board the microphone's channel-select pin is tied to GND by `R8` (a 0 Ω resistor), while `R6` — the alternative 3V3 strap — is not populated. The onboard microphone therefore drives the **left** PDM slot, which is why the sketch sets `slot_cfg.slot_mask = I2S_PDM_SLOT_LEFT`. Keep this in mind if you adapt the code for a different microphone wiring.
:::

**Playback (USR2)** — pressing USR2 reads the WAV back from Flash and streams it out through the I2S peripheral in standard (Philips) stereo mode on D11/D12/D13 (`driver/i2s_std.h`). The mono samples are duplicated to both channels with a `0.75×` gain applied to avoid clipping. The amplifier drives a small speaker so you can hear the recording.

:::note
The ESP-IDF v5 API (`i2s_new_channel()` / `i2s_channel_read()` / `i2s_channel_write()`) is different from the nRF52840 version of this demo, which uses the nRF52 `PDM` library and the `NRF_I2S` peripheral directly. If you are porting the nRF52840 code, you must replace the audio setup entirely.
:::

**On-screen states:**

<div class="table-center">
  <table align="center">
    <tr><th>State</th><th>Description</th></tr>
    <tr><td><strong>Ready</strong></td><td>"Recorder" title with "USR1: record" and "USR2: play" (or "No recording")</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Capturing voice" with "Please speak" while capturing (no live progress)</td></tr>
    <tr><td><strong>Error</strong></td><td>"Mic timeout" with "Try again" when capture exceeds 7 seconds</td></tr>
    <tr><td><strong>Saved</strong></td><td>"Done — Saved WAV" confirmation, then returns to Ready</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playing..." while streaming, then "Finished"</td></tr>
  </table>
</div>

### Running the Demo

**Step 1.** Connect a MAX98357A amplifier and speaker to the I2S pads as described above.

**Step 2.** Open `xiao_esp32s3_096_flash_record.ino` in Arduino IDE.

**Step 3.** Select the board: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (using esp32 Boards **3.3.11**).

**Step 4.** Select **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**.

**Step 5.** Select the correct **Port**, then click **Upload**.

:::caution
The recorder stores the WAV file in `LittleFS`, which uses the **SPIFFS** partition. The board's default partition scheme (`16M Flash (2MB APP/12.5MB FATFS)`) contains no SPIFFS partition, so `LittleFS.begin()` returns `false`, the WAV file cannot be written, and the screen shows "Write failed / Check flash". You **must** select the SPIFFS partition scheme above, or recording will not work.
:::

**Step 6.** Press **USR1 (D6)** to record 5 seconds of audio from the onboard microphone. The screen shows "Capturing voice" while recording.

**Step 7.** Press **USR2 (D7)** to play the recording back through the speaker.

:::note
The recording is stored in onboard Flash (`LittleFS`), so it survives a power cycle — you can record once and play it back later. Recording again overwrites the previous file.
:::

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Press USR1 and the screen shows "Capturing voice". After 5 seconds it confirms the WAV was saved. Press USR2 and the audio plays through the connected speaker while the screen shows the playback status.

---

## User Buttons

The 0.96'' IPS Display has **two physical push buttons** connected to the XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Active-low (pressed = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Active-low (pressed = LOW)</td><td>USR2</td></tr>
  </table>
</div>

:::note
Unlike the 1.14'' IPS Display, the 0.96'' IPS Display has **no third button** (no USR3 on D19). It also has no dedicated button breakout pads.
:::

### Reading Buttons

The buttons use the XIAO's internal pull-up resistors. A simple read looks like this:

```cpp
const int USR1 = D6;
const int USR2 = D7;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(USR1) == LOW) {
    Serial.println("USR1 (D6) pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(USR2) == LOW) {
    Serial.println("USR2 (D7) pressed");
    delay(200);
  }
}
```

### Debounce with Interrupts

For responsive, debounced button handling, you can use GPIO interrupts with a short settling delay:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
}

void loop() {
  if (btn1Flag) {
    btn1Flag = false;
    delay(30); // debounce settling time
    if (digitalRead(D6) == LOW) {
      // handle USR1 press
    }
  }
  if (btn2Flag) {
    btn2Flag = false;
    delay(30);
    if (digitalRead(D7) == LOW) {
      // handle USR2 press
    }
  }
}
```

### Default Behavior in the Factory Dashboard

In the preloaded factory firmware, the buttons are mapped as follows (you can override these in your own code):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Cycle screen brightness (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Toggle screen backlight ON/OFF</td></tr>
  </table>
</div>

When the screen is off (toggled via USR2), pressing USR2 again restores it to the previous non-zero level.

---

## Battery Voltage Detection

This demo reads the onboard battery voltage divider on **D16** and shows two live yellow readings on the 0.96'' IPS Display: the raw D16 divider voltage and the calculated battery voltage. It displays voltage readings only; it does not estimate battery percentage or report charging status.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status" target="_blank" rel="noopener noreferrer">
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
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Analog input reading the divided battery voltage. Internally connected to a 316 kΩ / 160 kΩ voltage divider. <strong>Do not use this pin externally.</strong></td></tr>
  </table>
</div>

**Voltage divider ratio:** 316 kΩ / 160 kΩ → **Divider ratio = (316 + 160) / 160 ≈ 2.975**

**Reading:**

The sketch initializes the display with `Board_XIAO_0inch96_LCD<13, 12>` and `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotation 2), then samples **D16** twelve times (700 µs apart) using `analogReadMilliVolts()` at 12-bit resolution with 11 dB attenuation. It averages the samples into the raw divider voltage, multiplies by the divider ratio to get the battery voltage (`Calc = D16 × 2.975`), and draws both as two centered yellow lines. The screen refreshes only when either value changes by a meaningful amount (D16 ≥ 0.02 V or Calc ≥ 0.05 V).

:::note
No charging-status signal is connected to an ESP32-S3 GPIO. This demo displays voltage readings only; it does not detect battery presence or charging status, or estimate battery percentage.
:::

### Running the Demo

**Step 1.** Open `xiao_esp32s3_096_battery_status.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Observe the screen — it shows two yellow lines: the raw D16 divider voltage and the calculated battery voltage. Connect or disconnect a LiPo battery (or the USB-C cable) to watch the values update.

### Expected Result

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Voltage reading</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong> (back)</div></td>
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

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — all Function demos are in the `code_GFX2/Function/096_ESP32/` directory

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
