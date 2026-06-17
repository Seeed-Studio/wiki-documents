---
description: Design professional LVGL-based interfaces for Seeed ePaper products with EEZ Studio, then deploy them with the Arduino IDE - works across the reTerminal E Series and the XIAO ePaper Display Board (EE04).
title: Work with EEZ Studio
keywords:
  - ePaper display
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-06-03'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

This guide walks you through designing a professional user interface with the visual design tool [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), generating LVGL code, and deploying it to a Seeed ePaper product through the Arduino IDE. The flow is the same for every supported board — the only differences are display resolution and the driver configuration constant, which we surface in tabs.

## Compatible Hardware

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" mono / 7.3" Spectra 6 / 10.3" mono / 13.3" Spectra 6</td>
      <td align="center">Universal driver — pair with any of our 24-pin or 50-pin Seeed ePaper screens</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## What is EEZ Studio?

EEZ Studio is a modern visual programming and UI design environment originally built for test & measurement instruments and embedded devices. It combines drag-and-drop GUI design, scripting, and device integration tools, allowing developers, engineers, and makers to quickly create professional interfaces without starting from scratch.

In short, EEZ Studio acts as a bridge between hardware and software, enabling you to design, prototype, and deploy user experiences more efficiently.

### Why use EEZ Studio?

- **Visual interface design** — create complex UIs with a WYSIWYG editor.
- **Rapid prototyping** — quickly test and validate design ideas.
- **Cross-platform** — build apps that run on multiple OSs and embedded targets.
- **Hardware integration** — directly connect lab instruments, IoT devices, and custom boards.
- **Open source** — community-driven toolset with optional premium support.

### EEZ Studio vs. SquareLine Studio

Both are GUI design tools but they target slightly different audiences:

<table>
    <thead>
        <tr><th>Aspect</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>Primary purpose</th>
            <td>Test & measurement instruments, embedded systems, hardware/software integration</td>
            <td>Embedded GUIs, especially with LVGL</td>
        </tr>
        <tr>
            <th>Target users</th>
            <td>Engineers, product developers, makers, lab/test instrument designers</td>
            <td>Embedded UI developers, hobbyists, IoT product designers</td>
        </tr>
        <tr>
            <th>Hardware integration</th>
            <td>Direct integration with instruments, measurement devices, automation</td>
            <td>UI generation focused, less external device integration</td>
        </tr>
        <tr>
            <th>Open source</th>
            <td>Community-driven, transparent, extensible (premium support available)</td>
            <td>Closed-source, commercial product with licensing</td>
        </tr>
        <tr>
            <th>Workflow</th>
            <td>Prototype, simulate, and control real devices from one environment</td>
            <td>Primarily generates UI code to be compiled into an embedded project</td>
        </tr>
    </tbody>
</table>

## Step 1: Install EEZ Studio

Download EEZ Studio for your operating system from [the official site](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Step 2: Create an LVGL Project

At the top of the EEZ Studio interface, click **CREATE**. Select the **LVGL** template on the left:

- **Name** — give your project a name (we'll use `EEZ_UI` in this article).
- **LVGL Version** — pick `9.x` from the dropdown.
- **Location** — choose where to save the project files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Project Settings

Click the ⚙️ icon on the toolbar to open Project Settings.

Under **General → Build**:

- **LVGL include**: enter `lvgl.h` so generated code references LVGL correctly during build.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

Under **General → Display**, set the resolution **for your hardware**:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(7.5" mono on E1001 and 7.3" Spectra 6 on E1002 share the same 800×480 resolution.)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(Match the values to whichever Seeed ePaper screen you have plugged into the EE04. The example below uses the 5.83" 648×480 monochrome screen.)

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

## Step 3: Design the UI

UI design directly determines the user experience. EEZ Studio lets you rapidly assemble interfaces by dragging and dropping components and using **Styles**, **Fonts**, **Bitmaps**, **Themes**, and **Groups** to control the visual result.

Recommended online resources:

- [Coolors](https://coolors.co/) — color palette generator
- [PeisekA](https://peiseka.com/) — color chart
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — icon library
- [Google Fonts](https://fonts.google.com/) — free fonts

The right-hand sidebar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- **Styles** — visual attributes for unifying and reusing interface elements.
- **Bitmaps** — backgrounds, icons, logos.
- **Fonts** — text rendering and multilingual support.
- **Themes** — light/dark and other top-level styles.
- **Groups** — layout helpers.

### Example layout (Hello World + Panel + Image + Line + Label)

For this tutorial we'll build a simple homepage from five components:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**Step 1.** Change the canvas background colour — select the canvas, check **Color**, pick a hex value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**Step 2.** Drag a **Panel** onto the canvas, adjust its width/height, and pick a colour.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**Step 3.** Add bitmaps via the right-hand **Bitmaps** panel, name them, then drag the **Image** widget to the canvas and bind your bitmap.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** Add a **Line** from the Visualiser group and configure its **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Step 5.** Add a **Label**, pick the colour, then add fonts via the right-hand **Fonts** panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Step 4: Generate Code

After the design is complete:

1. **Save** — click the floppy disk icon next to **OPEN**.
2. **Preview** — click **Run** to launch the simulator and preview the UI.
3. **Compile / Build** — click the ✓ icon to check for errors, then the wrench icon to generate UI code, image data, and font data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

A green **Build successful** message confirms code generation. The output goes to the **`src/ui`** folder of your project (you can rename it to `src/EEZ_UI` if you prefer).

## Step 5: Set up the Arduino IDE

To deploy the EEZ Studio output to your Seeed ePaper device, set up the Arduino IDE with ESP32 support.

:::tip
If this is your first time using Arduino, refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) first.
:::

1. **Install** the [Arduino IDE](https://www.arduino.cc/en/software).

   <div class="download_arduino_container" style={{textAlign: 'center'}}>
       <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
         <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
       </a>
   </div><br />

2. **Add ESP32 board support**: in **File → Preferences**, add to **Additional Boards Manager URLs**:

   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```

3. **Install the ESP32 package**: **Tools → Board → Boards Manager**, search for `esp32`, install the Espressif Systems package.

4. **Select the board** for your hardware:

   <Tabs groupId="eez-hardware">
   <TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3**

   </TabItem>
   <TabItem value="ee04" label="EE04 + 5.83&quot; mono">

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3_PLUS**

   Also enable **OPI PSRAM** under the **Tools** menu.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Connect** the device via USB-C and select the correct serial port from **Tools → Port**.

## Step 6: Install the Seeed_GFX Library

We use the Seeed_GFX library, which provides comprehensive support for Seeed display devices.

1. Download from GitHub:

   <div class="github_container" style={{textAlign: 'center'}}>
       <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
       <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
       </a>
   </div><br />

2. **Sketch → Include Library → Add .ZIP Library** and select the downloaded ZIP.

   :::note
   If you previously installed `TFT_eSPI`, temporarily remove or rename it from your Arduino libraries folder to avoid conflicts — `Seeed_GFX` is a fork of `TFT_eSPI` with additional features for Seeed displays.
   :::

3. **Open the right example sketch**:

   - For colour displays: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**
   - For monochrome displays: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**

4. **Create a `driver.h` file** in the same folder as your sketch (use the new-tab arrow in Arduino IDE).

5. Go to the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), select your hardware, copy the generated configuration, and paste it into `driver.h`. The exact contents differ per hardware:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

For **reTerminal E1001** (7.5" black & white, UC8179):

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

For **reTerminal E1002** (7.3" full colour, UC8179C):

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

For **EE04 + 5.83" monochrome (UC8179)**:

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

If you swap to a different screen size on the EE04, regenerate `driver.h` from the configuration tool and keep the `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04` line.

:::tip
If you make the wrong choice, the screen will display nothing — double-check the screen + driver-board combination.
:::

</TabItem>
</Tabs>

## Step 7: Deploy the EEZ Studio Project to Arduino

Add the EEZ Studio output and the platform driver helpers to your sketch folder, then upload.

### Required driver files (all hardware)

Download these helper files and place them next to your `.ino`:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

For EE04 you also need `lv_conf.h` and the LVGL library — see the EE04 tab below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

### Copy the EEZ_UI output

Copy the generated `EEZ_UI` folder (from your EEZ Studio project's `src/`) into the Arduino libraries folder (typically `~/Documents/Arduino/Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

### Sketch and upload

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

Reference sketch — three buttons (KEY0/KEY1/KEY2) cycle three pages: **HOME**, **Workstation**, **Plant**.

Complete reference code: [E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 3;
const int BUTTON_KEY1 = 4;
const int BUTTON_KEY2 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

e1002_driver_t e1002_driver;

void setup()
{
    String LVGL_Arduino = "Automotive Dashboard Demo - LVGL ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() +
                    "." + lv_version_patch();
    Serial.begin(115200);
    Serial.println(LVGL_Arduino);
    Serial.println("Initializing 6-color e-paper display...");
    e1002_display_init(&e1002_driver);

    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    lastKey0State = digitalRead(BUTTON_KEY0);
    lastKey1State = digitalRead(BUTTON_KEY1);
    lastKey2State = digitalRead(BUTTON_KEY2);

    ui_init();
    page_index = SCREEN_ID_HOME;
    loadScreen((ScreensEnum)page_index);
    Serial.println("Boot: Main Screen");
}

void loop()
{
    lv_timer_handler();
    ui_tick();
    delay(50);

    bool currentKey0State = digitalRead(BUTTON_KEY0);
    bool currentKey1State = digitalRead(BUTTON_KEY1);
    bool currentKey2State = digitalRead(BUTTON_KEY2);

    if (lastKey0State == HIGH && currentKey0State == LOW) {
        page_index = SCREEN_ID_HOME;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Main Screen");
        delay(50);
    }

    if (lastKey1State == HIGH && currentKey1State == LOW) {
        page_index = SCREEN_ID_WORKSTATION;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Plant Screen");
        delay(50);
    }

    if (lastKey2State == HIGH && currentKey2State == LOW) {
        page_index = SCREEN_ID_PLANT;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Setting Screen");
        delay(50);
    }

    lastKey0State = currentKey0State;
    lastKey1State = currentKey1State;
    lastKey2State = currentKey2State;

    if (e1002_display_should_refresh(&e1002_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1002_display_refresh(&e1002_driver);
        Serial.println("Display refresh complete");
    }

    delay(10);
}
```

Notes:

- `e1002_display_init()` initialises the e-ink display hardware.
- `pinMode(..., INPUT_PULLUP)` configures button pins with internal pull-ups.
- `ui_init()` and `loadScreen()` initialise LVGL and load a specific screen.
- `lv_timer_handler()` processes LVGL timers and animations.
- The `if (lastKeyXState == HIGH && currentKeyXState == LOW)` blocks debounce a HIGH→LOW edge and update the page.
- `e1002_display_should_refresh()` / `e1002_display_refresh()` manage e-ink refresh on demand.

#### Resulting screens

<div class="table-center">
  <table align="center">
    <tr>
      <th>Home Page</th>
      <th>Workstation Page</th>
      <th>Photo Page</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

For EE04 you also need:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- The LVGL library installed in Arduino IDE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

Copy the generated **EEZ_UI** folder into `~/Documents/Arduino/Libraries`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

Reference sketch — three onboard buttons (KEY1/KEY2/KEY3 = pins 2 / 3 / 5) cycle three pages: **Smart**, **Industry**, **Game**.

Complete reference code: [EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{
  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

#### Resulting screens

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>
</div>

</TabItem>
</Tabs>

## Reference & Resources

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)
- [Reference project — E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- [Reference project — EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)
- 3D enclosure for 5.83" — [front](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step) / [back](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

</TabItem>
</Tabs>

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
