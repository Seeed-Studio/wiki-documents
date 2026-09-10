---
description: Standalone function-level demos for each onboard peripheral of the XIAO 1.14'' IPS Display (nRF52840). Covers screen, IMU, PDM microphone, internal Flash recording and I2S audio playback, buttons, battery, and Grove I2C.
title: Onboard Peripheral Usage
sidebar_label: Function
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 1.14
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 2
last_update:
  date: 08/12/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/function_1.14_inch_display_nrf52840/
---

# Onboard Peripheral Usage

This page collects standalone function-level demos for each onboard peripheral of the 1.14'' IPS Display. Each section is self-contained — you can pick the one that matches your use case without reading through the others.

:::tip
The demo GIFs on this page are sped up to keep them short.
:::

:::note
All demos in this page require **Seeed nRF52 Boards (1.1.13)** as described in [Getting Started](/getting_started_1.14_inch_display_nrf52840), plus the **Seeed_GFX2** library installed manually as described below.
:::

- **Library Manager** — go to **Sketch > Include Library > Manage Libraries...**, search for and install:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU demos</td></tr>
  </table>
</div>

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
- **Seeed_GFX2** is Seeed Studio's graphics library built on a layered `Board` + `Panel Config` architecture. Each demo initializes the display with a single `display.begin<Board_..., Config_...>()` call — the **Board** template owns the pin map (CS/DC/SCK/MOSI/RST/BL), and the **Panel Config** bakes in the 135×240 resolution, color order, and inversion. No `driver.h` or manual pin setup is needed.
- On this board the demos use `Board_XIAO_1inch14_LCD<38, 37>` (RST=38, BL=37) with `Config_Seeed_1inch14_LCD_ST7789` (135×240). A few demos define a sketch-local `Config_XIAO_1inch14_LCD_ST7789_BGR` override for the BGR color order.
- The **IMU** demos use the **Seeed Arduino LSM6DS3** library (installed above).
- The 1.14'' IPS Display has **no touch controller, no SD card slot**, so no touch or SD libraries are needed.
:::

:::note
The **PDM**, **Adafruit TinyUSB**, **Adafruit LittleFS**, and **InternalFileSystem** libraries used by the **Flash Recorder** tutorial are bundled with **Seeed nRF52 Boards 1.1.13** — do not install separate versions from the Library Manager.

The recording is stored in the nRF52840's **internal Flash filesystem**. This display has no SD card slot, and the tutorial does not use SdFat.
:::

## Getting the Demo Code

Every demo on this page lives in the [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) repository, under the `code_GFX2/Function/` directory. Each demo is a folder containing a single `.ino` sketch. **Always download the complete folder** rather than copying the `.ino` source from the GitHub web view.

**Option A — Download the repository as a ZIP (recommended):**

1. Open [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) and click **Code > Download ZIP**, then extract the archive anywhere convenient.
2. Navigate into `code_GFX2/Function/` and open the folder shown in each demo's **Code location** line. For example, the GraphicTest demo for this board lives in `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`.
3. **Double-click the `.ino` file** to open it in the Arduino IDE.

**Option B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Then open the demo's `.ino` file from the cloned `code_GFX2/Function/...` folder.

## Screen Display — GraphicTest

This demo runs a full graphics benchmark on the 1.14-inch ST7789 IPS panel (135×240), covering color bars, lines, rectangles, circles, triangles, rounded rectangles, text, and a pixel gradient. Use it to verify that the screen is wired correctly and that all draw calls work as expected.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The sketch initializes the ST7789 IPS panel via **Seeed_GFX2**, then runs through ten graphics primitives in sequence, measuring the execution time of each one via `micros()` and printing the result to the serial monitor.

The display is initialized with a single template call:

```cpp
display.begin<Board_XIAO_1inch14_LCD<38, 37>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

The **Board** template owns the pin map — CS=D2, DC=D3, SCK=D8, MOSI=D10 — and its `<RST, BL>` template parameters take bare GPIO numbers, so `<38, 37>` sets RST=GPIO38 and BL=GPIO37. The **Panel Config** bakes in the 135×240 resolution, color order, and inversion (`invert = true`), so no `driver.h` or manual `invertDisplay()` call is needed.

### Running the Demo

**Step 1.** Open `xiao_nrf52840_114_graphictest.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). You should see timing output for each test:

```
LCD width: 135
LCD height: 240
Color bars: 34.18 ms
Lines: 2599.61 ms
Fast lines: 57.62 ms
Rectangles: 44.92 ms
Filled rectangles: 125.98 ms
Circles: 291.02 ms
Triangles: 289.06 ms
Round rectangles: 95.70 ms
Text: 1416.02 ms
Pixel gradient: 4774.42 ms
Graphic test finished.
```

On the screen, you will see each test pattern displayed for about one second before the next one starts. When all tests complete, a "Finished" screen appears.

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

After the sketch runs through all patterns, the screen shows a "Finished" message. Reset the board to run the test again.

---

## IMU

The 1.14'' IPS Display features an onboard 6-axis IMU (LSM6DS3) connected via I2C on D4/D5. The motion interrupt line on **D14** supports hardware wake-up and gesture detection.

Both demos below use the LSM6DS3 at I2C address **0x6A**.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

This demo turns the screen into an interactive fluid simulation — golden sand particles that flow and settle according to gravity, as measured by the onboard 6-axis IMU. Tilt the board and the sand shifts direction in real time.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The simulation uses a **22×40 occupancy grid** overlaid on the 135×240 screen, where each cell is 6×6 pixels. Around **150 particles** are placed in the grid, each with a position, velocity, and a golden color gradient.

The IMU is read via I2C (D4/D5) using the Seeed Arduino LSM6DS3 library at address `0x6A`. Raw acceleration values are low-pass filtered and used to derive a gravity vector. When you tilt the board:

1. **Gravity vector updates** — accelerometer data is smoothed with an exponential moving average to avoid jitter.
2. **Particle velocity** — each particle accelerates in the direction of the gravity vector, with damping and a per-particle mobility factor based on its depth in the flow.
3. **Cell occupancy** — particles deeper in the flow (closer to the "bottom" relative to gravity) have reduced mobility, creating a realistic packing effect.
4. **Differential rendering** — only cells where particles moved into or out of are redrawn, minimizing SPI traffic and keeping the animation smooth.

Particles near the surface flow freely (higher mobility); particles buried deeper pack tightly (lower mobility) — mimicking how real sand behaves.

### Running the Demo

**Step 1.** Open `xiao_nrf52840_114_electronic_quicksand.ino` in Arduino IDE.

**Step 2.** Select the board and port, then click **Upload**.

**Step 3.** Once uploaded, the screen fills with golden particles at the bottom. Tilt the board in different directions — the sand flows as if pulled by gravity.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to confirm initialization:

```
=== Electronic Quicksand 1.14 ===
imu.begin=0
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

The golden sand particles flow smoothly as you tilt the board. When held flat, the sand settles at the bottom of the screen. Rotate the board 90 degrees and the sand flows to the new "bottom" within a second.

---

### Demo 2: Raise to Wake

This demo implements a **screen sleep/wake system** driven by the IMU's built-in motion interrupt on **D14**. The screen automatically turns off (backlight off + nRF52 system ON sleep) after a configurable idle period, and wakes instantly when you pick up or move the device.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

The demo uses the LSM6DS3's **embedded wake-up event detector** — a hardware feature that monitors accelerometer data internally and asserts the INT1 pin (routed to D14 on this board) when motion exceeds a configurable threshold. This means the MCU does not need to poll the accelerometer continuously.

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

1. **Active state** — screen is on, backlight at full brightness, UI refreshes every 250 ms with real-time IMU data. A countdown timer shows seconds remaining until auto-sleep.
2. **Auto-sleep** — after the idle timeout, the sketch turns off the backlight, displays a "Sleeping... Pick up device to wake" message, and enters nRF52 System ON sleep (low-power mode with RAM retention). The IMU wake interrupt on D14 was already configured at startup, so motion detection remains active during sleep.
3. **Wake-up** — when the user picks up the board, the IMU detects motion and asserts D14 HIGH. The nRF52840 exits System ON sleep, restores the backlight, and redraws the UI. The LCD and IMU are **not** re-initialized — System ON sleep retains RAM and peripheral configuration, so both keep the settings applied at startup.

**Manual test buttons:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Force sleep</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Force wake</td></tr>
  </table>
</div>

### Running the Demo

**Step 1.** Open `xiao_nrf52840_114_wakeup.ino` in Arduino IDE, select the board and port, and click **Upload**.

**Step 2.** The screen shows a dashboard with power state, motion data, and a countdown timer. Let the board sit still — it will automatically enter sleep after the idle period.

**Step 3.** Pick up the board or shake it gently — the screen wakes immediately.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud) to observe the sleep/wake transitions:

```
LCD: 135x240
[IMU] Seeed LSM6DS3 begin=0
[IMU] D14 wake interrupt OK
[BOOT] done. Screen should be on.
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=3568 sleepLoops=0
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=1378 sleepLoops=439
```

### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

The screen displays real-time motion data while awake. After the idle period of stillness, the screen goes dark and the nRF52840 enters low-power sleep. Pick up the device and the screen restores instantly, with the wake counter incremented.

---

## Microphone & Speaker

The 1.14'' IPS Display features the same PDM digital microphone as the 1.47" version, connected to the same pins:

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM clock output to microphone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM data input from microphone</td></tr>
  </table>
</div>

### Demo 1: Voice Bar

This demo visualizes the PDM microphone's real-time audio input as a dynamic equalizer-style waveform and a segmented volume bar. Speak, clap, or blow into the onboard microphone and watch the bars react instantly.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### How It Works

The sketch uses the nRF52840's PDM peripheral via the `PDM` library (bundled with Seeed nRF52 Boards) at 16 kHz, single channel. The ISR (`onPDMdata`) captures raw PDM samples into a 256-sample ring buffer and computes the peak amplitude.

The screen is divided into three zones:

<div class="table-center">
  <table align="center">
    <tr><th>Zone</th><th>Position</th><th>Description</th></tr>
    <tr><td><strong>Waveform</strong></td><td>Top (y=30–95)</td><td>27-bar equalizer visualizer. Raw samples are down-sampled and drawn as symmetric bars around a center baseline. Waveform color is driven by the same smoothed volume as the volume bar and percentage label — green (&lt;50%), yellow (50–90%), red (&gt;90%).</td></tr>
    <tr><td><strong>Percentage</strong></td><td>Middle</td><td>Large numeric volume percentage (0–100%), color-coded green (&lt;50%), yellow (50–90%), red (&gt;90%).</td></tr>
    <tr><td><strong>Volume Bar</strong></td><td>Bottom (y=130–225)</td><td>10-segment bar (green/yellow/red gradient). Updates with smoothed volume from the PDM peak.</td></tr>
  </table>
</div>

**Signal processing:**

1. **PDM ISR** — `onPDMdata()` fires at ~62 Hz (16000 / 256). It reads raw samples, computes the peak magnitude, and down-samples into 27 bins for the waveform visualizer.
2. **Normalization** — peak values below 10 are treated as silence. Values above 1500 saturate to 100%. In between, linear mapping produces a 0.0–1.0 volume level.
3. **Exponential smoothing** — the displayed volume is smoothed with a 20% mix factor (`SMOOTH = 0.20`) to avoid jitter. During silence, the volume decays at 6% per frame.
4. **Differential rendering** — the volume bar and percentage label are only redrawn when the value changes, minimizing SPI traffic.

#### Running the Demo

**Step 1.** Open `xiao_nrf52840_114_voice_bar.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
[MIC] ready
```

**Step 5.** Speak, clap, or blow into the microphone. The waveform and volume bar respond in real time. The percentage label changes color as the volume increases.

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

When silent, the waveform is flat and the volume bar is empty (0%). Speak into the microphone and the equalizer bars animate while the volume bar fills up from green through yellow to red. The percentage label updates in real time.

### Demo 2: Flash Recorder with I2S Playback

This demo records a short audio clip from the onboard PDM microphone into the nRF52840's **internal Flash filesystem**, then plays it back through an external I2S amplifier and speaker:

- **USR1** records from the onboard PDM microphone.
- The recording is **16 kHz, 16-bit, mono**.
- Each clip is about **0.7 seconds** — 11,200 samples (22,400 bytes of PCM).
- The clip is saved as **`/REC_RAW.WAV`** in the internal Flash filesystem.
- **USR2** plays the recording back through an external **MAX98357A** and speaker.
- This demo has been compiled, flashed, and hardware-verified on the XIAO nRF52840 Plus with **Seeed nRF52 Boards 1.1.13**.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Hardware Setup

Playback requires an external **I2S audio amplifier and speaker**. The demo is written for a **MAX98357A** breakout connected to the board's I2S output pads:

<div class="table-center">
  <table align="center">
    <tr><th>Display Board</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td></tr>
    <tr><td>D11 / I2S_SD</td><td>DIN</td></tr>
    <tr><td>D12 / I2S_SCK</td><td>BCLK</td></tr>
    <tr><td>D13 / I2S_WS</td><td>LRC / WS</td></tr>
  </table>
</div>

Connect the speaker to the **SPK+** and **SPK-** terminals of the MAX98357A. Do **not** connect one speaker wire to GND — the MAX98357A is a bridge-tied-load (BTL) amplifier, so both speaker terminals must go to the SPK outputs.

:::caution
Disconnect the USB power before wiring the amplifier and speaker.
:::

#### How It Works

- The PDM microphone uses **D0 (CLK)** and **D1 (DATA)**.
- The `PDM` library captures the microphone at **16 kHz mono**.
- The WAV file consists of a **44-byte header** plus **22,400 bytes of PCM** data.
- The internal Flash filesystem (InternalFS) is only about **28 KB**, which limits each recording to roughly **0.7 seconds**.
- Playback uses the nRF52840's **I2S hardware peripheral** in Philips I2S format, **16-bit, stereo** output.
- The mono samples are duplicated to both the left and right channels.
- The I2S pins are **D11**, **D12**, and **D13**.

#### Running the Tutorial

**Step 1.** Disconnect the USB power and wire the MAX98357A and speaker as shown above.

**Step 2.** Open `xiao_nrf52840_114_flash_record.ino` in the Arduino IDE.

**Step 3.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 4.** Compile and upload the sketch.

**Step 5.** Press **USR1** and immediately speak into the onboard microphone for about **0.7 seconds**.

:::tip
Recording starts the moment you press **USR1** — do not wait for the red progress bar to appear. The 0.7-second window is counted from the moment **USR1** is pressed, so speak immediately or you will miss the beginning of your clip.
:::

**Step 6.** Wait for the screen to show **Saved WAV**.

**Step 7.** Press **USR2** and the speaker plays back your recording.

#### Expected Result

- On startup the screen shows **Flash Recorder**.
- When no recording exists, the screen shows **No recording**.
- While recording, the screen shows a progress readout.
- When saving completes, the screen shows **Saved WAV**.
- Press **USR2** and you hear the recording through the speaker.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_flash_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

---

## Grove I2C

The 1.14'' IPS Display features a dedicated **Grove I2C connector** that exposes D4 (SDA) and D5 (SCL) on a standard 4-pin Grove socket (GND / 3V3 / SDA / SCL). Unlike the 1.47" version where D4/D5 are additionally shared with the touch controller, the 1.14" display shares D4/D5 only with the onboard IMU (it has no touch controller).

<div class="table-center">
  <table align="center">
    <tr><th>Grove Pin</th><th>XIAO Pin</th><th>Notes</th></tr>
    <tr><td>GND</td><td>GND</td><td>Common ground</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>3.3V power output</td></tr>
    <tr><td>SDA</td><td>D4</td><td>I2C data — shared with onboard IMU</td></tr>
    <tr><td>SCL</td><td>D5</td><td>I2C clock — shared with onboard IMU</td></tr>
  </table>
</div>

:::note
D4/D5 are shared between the Grove connector and the onboard IMU. The IMU is at address `0x6A`. When connecting an external I2C device, make sure it does not conflict with this address.
:::

### Demo: SHT31 Temperature & Humidity

This demo reads temperature and humidity from a **Grove SHT31** sensor plugged into the Grove I2C connector and displays the readings on the screen. The sketch talks to the sensor directly over I2C with `Wire.h` — no SHT31 library is needed — and validates each reading with the sensor's CRC.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Hardware Setup

Plug a **Grove SHT31** temperature & humidity sensor into the Grove I2C connector. The sensor is powered at 3.3V and communicates at I2C address `0x44`:

<div class="table-center">
  <table align="center">
    <tr><th>Grove Pin</th><th>XIAO Pin</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### How It Works

The sketch reads the SHT31 directly over I2C (`Wire`) at address `0x44`:

1. **I2C scan** — on startup it scans the I2C bus and reports every device found.
2. **Single-shot measurement** — it sends a high-repeatability single-shot command (`0x24 0x00`, no clock stretching), waits 20 ms, then reads 6 bytes: temperature high/low + CRC, humidity high/low + CRC.
3. **CRC check** — each 16-bit value is verified against its CRC byte; a mismatch is reported as an error (wiring or a damaged/noisy module).
4. **Conversion** — raw values are converted to temperature (`-45 + 175 × raw / 65535` °C) and relative humidity (`100 × raw / 65535` %).

The display is initialized with `Board_XIAO_1inch14_LCD<38, 37>` and a sketch-local `Config_XIAO_1inch14_LCD_ST7789_BGR` (135×240, BGR color order, inverted) so colors render correctly. The screen shows "SHT31 OK" with the live temperature and humidity, or "SHT31 ERROR" plus an error code if a read fails.

#### Running the Demo

**Step 1.** Open `xiao_nrf52840_114_sht31_temperature_humidity.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**, then click **Upload**.

**Step 3.** Open **Tools > Serial Monitor** (115200 baud). You should see:

```
=== XIAO nRF52840 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

The screen shows "SHT31 OK" with the temperature and humidity, updating once per second. If the sensor is disconnected or the CRC check fails, the screen shows "SHT31 ERROR" with an error code.

#### Expected Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

The temperature and humidity update once per second on the screen. Breathe on the sensor and the humidity reading rises.

---

## User Buttons

The 1.14'' IPS Display has **three physical push buttons** connected to the XIAO nRF52840 Plus. All three buttons have external **1 KΩ pull-up resistors** on the board, so you can configure the corresponding pins as `INPUT` (no internal pull-up needed):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th><th>Breakout Pad</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Active-low (pressed = LOW)</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Active-low (pressed = LOW)</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Active-low (pressed = LOW)</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### Reading Buttons

With the external 1 KΩ pull-up already on the board, you can read the buttons with a simple direct read:

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  // External 1K pull-up on the board — no internal pull-up needed.
  pinMode(USR1, INPUT);
  pinMode(USR2, INPUT);
  pinMode(USR3, INPUT);
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
  if (digitalRead(USR3) == LOW) {
    Serial.println("USR3 (D19) pressed");
    delay(200);
  }
}
```

### Debounce with Interrupts

For responsive, debounced button handling without blocking the main loop, you can use pin-change interrupts:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT);
  pinMode(D7, INPUT);
  pinMode(D19, INPUT);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D19), btn3Isr, FALLING);
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
  if (btn3Flag) {
    btn3Flag = false;
    delay(30);
    if (digitalRead(D19) == LOW) {
      // handle USR3 press
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
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Toggle screen off / restore to last brightness</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Toggle header title between "Hello,XIAO!" and "Seeed"</td></tr>
  </table>
</div>

The button breakout pads (labeled U1, U2, and U3 on the board) mirror D6, D7, and D19 respectively, allowing you to connect external buttons if desired.

---

## Battery Status

This demo shows the battery status — a battery icon with charge level and charging state — on the 1.14'' IPS Display. It detects whether a LiPo battery is physically connected and shows one of three states: **USB PWR** (no battery), **percentage** (battery only), or **charging** (USB + battery).

The 1.14'' IPS Display includes an onboard battery voltage measurement circuit connected to the XIAO nRF52840 Plus.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### How It Works

**Display:**

The screen is driven by **Seeed_GFX2** with `Board_XIAO_1inch14_LCD<38, 37>` and a BGR override of `Config_Seeed_1inch14_LCD_ST7789` (135×240, BGR, rotation 2) over 10 MHz hardware SPI.

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

**Step 1.** Open `xiao_nrf52840_114_battery_status.ino` in Arduino IDE.

**Step 2.** Select **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** and the correct **Port**.

**Step 3.** Click **Upload**.

**Step 4.** Observe the screen — it shows the battery icon with the current state. Plug or unplug a LiPo battery (or the USB-C cable) to watch the icon switch between the three states.

### Expected Result

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (no battery)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (battery only)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + battery)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong> (back)</div></td>
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

- **🗃️[PCB Design Files]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — all Function demos are in the `code_GFX2/Function/114_nRF52840/` directory

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
