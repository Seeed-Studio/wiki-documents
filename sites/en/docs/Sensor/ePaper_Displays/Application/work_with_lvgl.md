---
description: Build a simple LVGL status panel on Seeed reTerminal E Series ePaper devices with PlatformIO, Seeed_GFX, and LVGL.
title: Work with LVGL
keywords:
  - ePaper display
  - LVGL
  - Seeed_GFX
  - PlatformIO
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_lvgl
sidebar_position: 6
last_update:
  date: 06/30/2026
  author: Citric
---

# Work with LVGL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/262.jpg" style={{width:1000, height:'auto'}}/></div>

LVGL is an open-source graphics library for embedded devices. It provides ready-made UI components such as labels, panels, bars, and layout tools, so you can build a structured interface in C/C++ without drawing every pixel manually.

This guide creates a simple **LVGL ePaper status panel** with PlatformIO. The example uses **reTerminal E1001** as the default target, and keeps separate PlatformIO environments for reTerminal E1002, E1003, and E1004.

The project renders a static dashboard with:

- a title,
- a device status card,
- a network status card,
- a demo battery card.

For ePaper displays, this static UI workflow is a good starting point because the screen only needs to refresh when the displayed information changes.

:::tip Try demos without setting up a development environment
If you want to quickly preview project results or try the basic demo firmware before setting up a development environment, open the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. You can choose a supported reTerminal E Series device and flash demo firmware directly from a browser.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Compatible Hardware

Prepare one of the following reTerminal E Series devices. The PlatformIO project in this guide uses **reTerminal E1001** as the default environment.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" monochrome ePaper<br/>800 x 480</td>
      <td align="center">7.3" Spectra 6 color ePaper<br/>800 x 480</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" monochrome ePaper<br/>1872 x 1404</td>
      <td align="center">13.3" Spectra 6 color ePaper<br/>1200 x 1600</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## How the Project Works

This example has two main parts:

- **LVGL** creates the UI objects, such as labels, cards, and bars.
- **Seeed_GFX** initializes the ePaper display, receives the rendered pixels, and refreshes the physical panel.

The project keeps those two parts in separate files:

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Defines the PlatformIO board, libraries, build flags, and hardware environments.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Selects the correct Seeed_GFX driver file for the active hardware target.</td>
    </tr>
    <tr>
      <td><code>include/driver_e1001.h</code> to <code>include/driver_e1004.h</code></td>
      <td>Stores the Seeed_GFX board-screen combination for each reTerminal E Series model.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configures LVGL features, color depth, and fonts.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Initializes Arduino, Seeed_GFX, LVGL, the display buffer, and the ePaper refresh flow.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Creates the LVGL status panel layout.</td>
    </tr>
  </table>
</div>

## Step 1: Install PlatformIO

This guide uses PlatformIO as the project workflow. PlatformIO keeps the board configuration, libraries, and source files together in one folder, which makes the LVGL project easier to build and maintain.

If PlatformIO is not installed yet, follow the setup steps in [Work with PlatformIO](/epaper_work_with_platformio), then return to this guide.

After installation, open **Visual Studio Code**. You should see the PlatformIO icon in the left activity bar.

## Step 2: Download the Example Project

The LVGL ePaper status panel example is available in the official reTerminal E Series repository:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong>
    </a>
</div><br />

Download the repository to your computer, then open this folder:

```text
OSHW-reTerminal-Series-E-D/examples/official/LVGLePaperStatusPanel
```

The example project contains these main files:

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>What it Does</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Defines the PlatformIO environments for E1001, E1002, E1003, and E1004.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Selects the correct ePaper driver configuration for the active build environment.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configures the LVGL features and fonts used by this demo.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Initializes the display, LVGL, the render buffer, and the ePaper refresh flow.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Creates the status panel UI shown on the ePaper display.</td>
    </tr>
  </table>
</div>

## Step 3: Open the Project in PlatformIO

**Step 1.** Open **Visual Studio Code**.

**Step 2.** Click the **PlatformIO** icon in the left activity bar.

**Step 3.** Click **PIO Home > Open**.

**Step 4.** Click **Open Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/263.png" style={{width:1000, height:'auto'}}/></div>

**Step 5.** Select the `LVGLePaperStatusPanel` folder.

**Step 6.** Wait for PlatformIO to load the project and install the required libraries.

## Step 4: Select the Hardware Environment

Open `platformio.ini` in the project root. The default environment is `reterminal_e1001`.

```ini
[platformio]
default_envs = reterminal_e1001
```

For E1001, you can keep the default setting. For other devices, change `default_envs` to the matching environment:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Device</th>
      <th>PlatformIO Environment</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>reterminal_e1001</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>reterminal_e1002</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>reterminal_e1003</code></td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>reterminal_e1004</code></td>
    </tr>
  </table>
</div>

You can also build a specific environment from the PlatformIO terminal without changing `default_envs`.

## Step 5: Build and Upload the Demo

Connect the reTerminal E Series device to your computer with a USB cable.

To build the default E1001 firmware, run:

```bash
pio run
```

To build a specific target, add `-e` and the environment name. For example:

```bash
pio run -e reterminal_e1001
```

To upload the firmware to the device, run:

```bash
pio run -e reterminal_e1001 --target upload
```

After uploading, open the serial monitor:

```bash
pio device monitor -b 115200
```

When the demo starts correctly, the serial monitor shows:

```text
Seeed ePaper LVGL status panel starting.
LVGL status panel rendered.
```

The ePaper display refreshes once and shows the LVGL status panel.

## Step 6: Customize and Learn from the LVGL UI

After the demo runs successfully, you can start modifying it as a small LVGL learning project. The two most important files are:

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>Start Here When You Want To</th>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Change the values passed into the UI, such as device status, network status, and battery percentage.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Change the screen title, card layout, fonts, colors, labels, and LVGL widgets.</td>
    </tr>
  </table>
</div>

### Change the displayed values

Open `src/main.cpp` and find this line inside `setup()`:

```cpp
ui_status_panel_set_status("Ready", "Wi-Fi Standby", 76);
```

This function updates the three dynamic values on the screen:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>Meaning</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>The device status text shown in the Device card.</td>
      <td><code>"Ready"</code></td>
    </tr>
    <tr>
      <td><code>network</code></td>
      <td>The network status text shown in the Network card.</td>
      <td><code>"Wi-Fi Standby"</code></td>
    </tr>
    <tr>
      <td><code>battery_percent</code></td>
      <td>The battery bar value. The function keeps it within 0 to 100.</td>
      <td><code>76</code></td>
    </tr>
  </table>
</div>

For example, change it to:

```cpp
ui_status_panel_set_status("Online", "Wi-Fi Connected", 95);
```

Then build and upload the project again:

```bash
pio run -e reterminal_e1001 --target upload
```

### Change the title and card names

Open `src/ui_status_panel.cpp`. The main title is created in `ui_status_panel_create()`:

```cpp
lv_label_set_text(title, "Seeed ePaper LVGL Panel");
```

You can change the title text:

```cpp
lv_label_set_text(title, "My First LVGL Dashboard");
```

Each card is created with `create_card()`. For example:

```cpp
lv_obj_t *status_card = create_card(screen, "Device", status_x, status_y, status_w, status_h, lv_palette_main(LV_PALETTE_RED));
lv_obj_t *network_card = create_card(screen, "Network", network_x, network_y, network_w, network_h, lv_palette_main(LV_PALETTE_BLUE));
lv_obj_t *battery_card = create_card(screen, "Battery Demo", battery_x, battery_y, battery_w, battery_h, lv_palette_main(LV_PALETTE_GREEN));
```

The second parameter is the card title. You can change `"Device"`, `"Network"`, and `"Battery Demo"` to match your own application.

### Change the colors

The demo uses LVGL palette colors:

```cpp
lv_palette_main(LV_PALETTE_RED)
lv_palette_main(LV_PALETTE_BLUE)
lv_palette_main(LV_PALETTE_GREEN)
```

For color ePaper models such as reTerminal E1002 and reTerminal E1004, `src/main.cpp` maps LVGL colors to the ePaper color palette. The example palette includes white, black, red, yellow, green, and blue.

For monochrome ePaper models such as reTerminal E1001 and reTerminal E1003, the same UI is converted to black and white by brightness. Darker colors become black, and lighter colors become white.

This means you can use the same LVGL UI code across all four devices, while the display driver converts the final pixels for the selected hardware.

### Change the layout

The demo uses `EPAPER_LVGL_HOR_RES` and `EPAPER_LVGL_VER_RES` from `platformio.ini` to decide the screen size. In `src/ui_status_panel.cpp`, these values are used here:

```cpp
const int32_t screen_width = EPAPER_LVGL_HOR_RES;
const int32_t screen_height = EPAPER_LVGL_VER_RES;
const bool is_landscape = screen_width >= screen_height;
```

The layout then chooses a landscape layout for wider screens and a vertical layout for taller screens. This is why the same example can run on both 800 x 480 devices and larger ePaper panels.

For a simple first change, adjust the spacing values:

```cpp
const int32_t margin = max_i32(32, screen_width / 20);
const int32_t gap = max_i32(20, screen_width / 40);
```

Increasing `margin` leaves more empty space around the screen edges. Increasing `gap` leaves more space between cards.

### Add your own data

The battery value in this demo is sample UI data, so the screen shows it as a demo value. To connect real application data, keep the UI function and pass your own values into it:

```cpp
int battery_percent = 88;
ui_status_panel_set_status("Running", "Wi-Fi Connected", battery_percent);
```

For ePaper projects, a practical workflow is:

**Step 1.** Read or calculate the latest data in your application.

**Step 2.** Pass the new values into `ui_status_panel_set_status()`.

**Step 3.** Refresh the ePaper display when the content needs to change.

The demo renders once in `setup()` because the screen content is static. For applications such as a sensor dashboard, calendar, or status monitor, you can update the values and refresh the panel when the displayed data changes.

## Resources

- **[Docs]** [LVGL Documentation](https://docs.lvgl.io/)
- **[GitHub]** [LVGL](https://github.com/lvgl/lvgl)
- **[GitHub]** [Seeed_GFX Library](https://github.com/Seeed-Studio/Seeed_GFX)
- **[GitHub]** [LVGL ePaper Status Panel Example](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel)
- **[Tool]** [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)
- **[Wiki]** [Work with PlatformIO](/epaper_work_with_platformio)

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
