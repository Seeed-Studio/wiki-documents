---
description: Reference guide for using PlatformIO with Seeed ePaper products - VS Code setup, project structure, platformio.ini configuration, Seeed_GFX setup, and per-product environment selection.
title: Work with PlatformIO
keywords:
  - ePaper display
  - PlatformIO
  - platformio.ini
  - Seeed_GFX
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_platformio
sidebar_position: 5
last_update:
  date: 06/01/2026
  author: Citric
createdAt: '2026-06-01'
url: https://wiki.seeedstudio.com/epaper_work_with_platformio/
updatedAt: '2026-06-01'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with PlatformIO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/248.png" style={{width:650, height:'auto'}}/></div>

This page is the **PlatformIO configuration reference** for Seeed ePaper products. It focuses on the parts that are different from the Arduino IDE workflow:

1. Installing PlatformIO in Visual Studio Code.
2. Understanding the project structure created by PlatformIO.
3. Editing `platformio.ini`, the main configuration file for board selection, framework selection, library dependencies, serial monitor speed, upload options, and build flags.
4. Choosing the correct PlatformIO environment for each Seeed ePaper product.
5. Adding `Seeed_GFX` and generating the matching `driver.h` with the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

If you are looking for display drawing APIs, example sketches, or hardware-specific demo code, start from [Work with Arduino](/epaper_work_with_arduino) and the product cookbooks linked at the end of this page. The C/C++ code used in PlatformIO is usually the same as the Arduino code. The main difference is how the project is configured.

## Compatible Hardware

PlatformIO can be used with the code-based workflow for Seeed ePaper products that expose an Arduino-compatible firmware path. Use this page to prepare the PlatformIO project, then select the correct `driver.h` for your board and screen.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Product line</th>
      <th>Typical MCU / board target</th>
      <th>Configuration notes</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>ESP32-S3 based reTerminal E Series</td>
      <td>Use an ESP32-S3 PlatformIO environment, then generate `driver.h` for the exact reTerminal model.</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05 driver boards</strong></td>
      <td>XIAO ESP32-S3 family</td>
      <td>Use the same PlatformIO structure across the EE0x family. The `BOARD_SCREEN_COMBO` value changes with the selected board and screen.</td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 family</td>
      <td>Use the ESP32-S3 environment when writing custom Arduino-style firmware instead of using the TRMNL cloud firmware.</td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>Use the XIAO ESP32-C3 PlatformIO environment, then use the product cookbook for the screen-specific `driver.h` configuration.</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05 and nRF52840-based ePaper boards</strong></td>
      <td>XIAO nRF52840 family</td>
      <td>Use the nRF52840 PlatformIO environment for firmware development. If an ePaper-specific cookbook is not published yet, use this page as the environment reference and the product schematic/cookbook for pins.</td>
    </tr>
  </table>
</div>

:::note
The PlatformIO project is only the build and upload environment. The display still depends on the correct `driver.h`. If `platformio.ini` is correct but `driver.h` targets the wrong board or panel, the firmware may compile and upload while the screen stays blank.
:::

## Why PlatformIO for ePaper Development?

PlatformIO is useful when your ePaper project grows beyond a single sketch:

- It keeps board, framework, libraries, upload speed, serial monitor speed, and build flags in one version-controlled `platformio.ini` file.
- It can define multiple build environments in one project, so the same codebase can target several Seeed ePaper products.
- It downloads libraries through `lib_deps`, which makes the project easier to reproduce on another computer.
- It provides build, upload, clean, and serial monitor tasks inside VS Code.

For display drawing and hardware APIs, continue using the same Arduino-style C/C++ code used in the Arduino cookbook. PlatformIO mainly changes the project layout and configuration method.

## Step 1: Install VS Code and PlatformIO

**Step 1.** Download and install [Visual Studio Code](https://code.visualstudio.com/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Open **Extensions** in VS Code, search for `PlatformIO IDE`, and install it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Restart VS Code after the extension finishes installing.

**Step 4.** Open **PlatformIO Home** from the PlatformIO icon in the VS Code activity bar.

:::tip
If you use PlatformIO IDE in VS Code, PlatformIO Core is included with the extension. You only need to install PlatformIO Core separately if you want to use the `pio` command outside VS Code.
:::

## Step 2: Create a PlatformIO Project

**Step 1.** In **PlatformIO Home**, select **New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Enter a project name.

**Step 3.** Select any temporary Arduino-compatible board that lets PlatformIO create the project. This first selection is only used to generate the project folder.

**Step 4.** Select **Arduino** as the framework.

**Step 5.** Click **Finish** and wait until PlatformIO creates the project.

**Step 6.** Open `platformio.ini` and replace the generated configuration with the Seeed configuration shown in the next sections.

:::caution
Most Seeed Studio development boards used by this ePaper product line are maintained through Seeed's PlatformIO platform package, not only through PlatformIO's default board list. If you cannot find the exact Seeed board in the PlatformIO **New Project** window, that is expected. Create a temporary project first, then set `platform = https://github.com/Seeed-Studio/platform-seeedboards.git` and the correct `board` ID in `platformio.ini`.
:::

After creation, the important files and folders are:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Path</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Main PlatformIO configuration file. This is the most important file in this guide.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Main firmware source file. Arduino-style code goes here.</td>
    </tr>
    <tr>
      <td><code>lib/</code></td>
      <td>Optional local libraries. This is also a convenient place for a local <code>driver.h</code> helper folder.</td>
    </tr>
    <tr>
      <td><code>.pio/</code></td>
      <td>PlatformIO build output and downloaded dependencies. Do not edit this folder manually.</td>
    </tr>
  </table>
</div>

## Step 3: Understand `platformio.ini`

`platformio.ini` is the center of a PlatformIO project. Each `[env:name]` section defines one build environment. The environment tells PlatformIO which board to compile for, which framework to use, which libraries to download, and how to upload or monitor the firmware.

For beginners, the easiest workflow is to copy the complete configuration for your device from [Step 4](#step-4-copy-the-configuration-for-your-device), paste it into `platformio.ini`, and then create the matching `driver.h` file. You do not need to combine a shared base section with another device section by yourself.

The most important fields are:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Field</th>
      <th>What it controls</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>platform</code></td>
      <td>The PlatformIO platform package. For Seeed boards in this guide, use Seeed's platform package URL so PlatformIO can download the board definitions.</td>
      <td><code>platform = https://github.com/Seeed-Studio/platform-seeedboards.git</code></td>
    </tr>
    <tr>
      <td><code>board</code></td>
      <td>The PlatformIO board ID. This decides the MCU, flash layout, upload tool, and default build settings.</td>
      <td><code>board = seeed-xiao-esp32-s3-sense</code></td>
    </tr>
    <tr>
      <td><code>framework</code></td>
      <td>The software framework used by the firmware. For Arduino-style examples, use <code>arduino</code>.</td>
      <td><code>framework = arduino</code></td>
    </tr>
    <tr>
      <td><code>monitor_speed</code></td>
      <td>The serial monitor baud rate. It should match <code>Serial.begin(...)</code> in the firmware.</td>
      <td><code>monitor_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>upload_speed</code></td>
      <td>The upload baud rate used when PlatformIO flashes the firmware through USB serial.</td>
      <td><code>upload_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>lib_deps</code></td>
      <td>Libraries that PlatformIO downloads automatically for this environment.</td>
      <td><code>https://github.com/Seeed-Studio/Seeed_GFX</code></td>
    </tr>
    <tr>
      <td><code>build_flags</code></td>
      <td>Extra compiler definitions. Use this only when your product cookbook or library requires it.</td>
      <td><code>-DBOARD_HAS_PSRAM</code></td>
    </tr>
    <tr>
      <td><code>upload_port</code></td>
      <td>Optional fixed serial port. Leave it unset if you prefer PlatformIO auto-detection.</td>
      <td><code>upload_port = /dev/ttyACM0</code></td>
    </tr>
  </table>
</div>

:::caution
Do not copy `platformio.ini` blindly between unrelated products. The same C/C++ source may be portable, but `board`, PSRAM settings, and `driver.h` must match the actual hardware.
:::

## Step 4: Copy the Configuration for Your Device

Pick your device tab, copy the whole `platformio.ini` block, and paste it into the `platformio.ini` file in your PlatformIO project. The configuration is intentionally repeated in each tab so you do not need to merge a shared base section with a device section.

:::tip
The first build can take longer because PlatformIO downloads Seeed's platform package, the toolchain, the Arduino framework, and the `Seeed_GFX` library.
:::

<Tabs groupId="platformio-device">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

Use this configuration for **reTerminal E1001**:

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use `driver.h` generated for **reTerminal E1001**. In existing `Seeed_GFX` examples, E1001 uses:

```cpp
#define BOARD_SCREEN_COMBO 520
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

Use this configuration for **reTerminal E1002**:

```ini
[env:reterminal_e1002]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use `driver.h` generated for **reTerminal E1002**. In existing `Seeed_GFX` examples, E1002 uses:

```cpp
#define BOARD_SCREEN_COMBO 521
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Use this configuration for **reTerminal E1003**:

```ini
[env:reterminal_e1003]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use `driver.h` generated for **reTerminal E1003**. In existing `Seeed_GFX` examples, E1003 uses:

```cpp
#define BOARD_SCREEN_COMBO 522
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

Use this configuration for **reTerminal E1004**:

```ini
[env:reterminal_e1004]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use `driver.h` generated for **reTerminal E1004**. In existing `Seeed_GFX` examples, E1004 uses:

```cpp
#define BOARD_SCREEN_COMBO 523
```

</TabItem>
<TabItem value="ee0x" label="EE02 / EE03 / EE04 / EE05">

Use this configuration for the **EE02 / EE03 / EE04 / EE05** ESP32-S3 ePaper driver boards:

```ini
[env:ee0x_epaper_driver_board]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Generate `driver.h` for your exact EE0x board and ePaper panel. For example, EE04 with a 7.5" monochrome ePaper panel uses:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Use this configuration for custom Arduino-style firmware on the **TRMNL 7.5" (OG) DIY Kit**:

```ini
[env:trmnl_diy_kit]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Generate `driver.h` for the TRMNL DIY Kit display combination before building.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Use this configuration for the **XIAO 7.5" ePaper Panel**:

```ini
[env:xiao_075_epaper_panel]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c3
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Generate `driver.h` for the XIAO 7.5" ePaper Panel before building.

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

Use this configuration as the PlatformIO starting point for **EN04 / EN05** nRF52840-based ePaper boards:

```ini
[env:en04_en05]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840-plus
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
```

The display driver, pin map, and library dependencies for EN04 / EN05 should follow the product-specific firmware or cookbook you are building from.

</TabItem>
</Tabs>

## Step 5: Add `driver.h`

`platformio.ini` selects the MCU and build environment. `driver.h` selects the ePaper board and screen combination used by `Seeed_GFX`.

**Step 1.** Open the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

**Step 2.** Select your board and screen.

**Step 3.** Copy the generated configuration.

**Step 4.** Add the configuration to a `driver.h` file that can be included by your firmware.

A typical generated file looks like this:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Common `BOARD_SCREEN_COMBO` values used in existing ePaper documentation include:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Hardware</th>
      <th>Example generated setting</th>
      <th>Source of truth</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>#define BOARD_SCREEN_COMBO 520</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>#define BOARD_SCREEN_COMBO 521</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>#define BOARD_SCREEN_COMBO 522</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>#define BOARD_SCREEN_COMBO 523</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>EE04 + 7.5" monochrome ePaper</td>
      <td><code>#define BOARD_SCREEN_COMBO 502</code><br/><code>#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>Other EE0x / screen combinations</td>
      <td>Generated per board and screen</td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
  </table>
</div>

:::caution
Always regenerate `driver.h` when you change the ePaper board, display size, display color type, or driver board. A mismatched `BOARD_SCREEN_COMBO` is one of the most common reasons for a blank screen.
:::

## Step 6: Build, Upload, and Monitor

After `platformio.ini` and `driver.h` are ready, use the PlatformIO toolbar in VS Code:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Action</th>
      <th>What it does</th>
    </tr>
    <tr>
      <td><strong>Build</strong></td>
      <td>Compiles the selected environment and checks whether the board, framework, libraries, and code are compatible.</td>
    </tr>
    <tr>
      <td><strong>Upload</strong></td>
      <td>Uploads the firmware to the connected device through the selected upload protocol.</td>
    </tr>
    <tr>
      <td><strong>Monitor</strong></td>
      <td>Opens the serial monitor using the baud rate from <code>monitor_speed</code>.</td>
    </tr>
    <tr>
      <td><strong>Clean</strong></td>
      <td>Removes previous build outputs. Use this after changing board packages, PSRAM settings, or major build flags.</td>
    </tr>
  </table>
</div>

If the project has multiple environments, select the target environment from the PlatformIO project tasks before building or uploading.

## Optional: Set a Fixed Upload Port

Most users can leave the upload port unset and let PlatformIO detect it automatically. If your computer has several serial devices connected and PlatformIO picks the wrong one, add `upload_port` to the same configuration block you copied in Step 4.

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
upload_port = /dev/ttyACM0
```

On Windows, the port usually looks like `COM3`. On macOS, it usually looks like `/dev/cu.usbmodemXXXX` or `/dev/cu.usbserial-XXXX`.

## Where to Go Next

This page intentionally focuses on PlatformIO environment configuration. Continue with the product-specific pages for wiring, screen selection, and firmware behavior:

- [Work with Arduino](/epaper_work_with_arduino) — common Arduino and `Seeed_GFX` workflow.
- [XIAO ePaper Driver Boards PlatformIO Cookbook](/ee04_with_platformio) — EE0x PlatformIO workflow with EE04 as the running example.
- [reTerminal E Series Arduino cookbook](/reterminal_e10xx_with_arduino) — display examples for E1001 / E1002 / E1003 / E1004.
- [reTerminal E Series onboard peripherals cookbook](/reterminal_e10xx_with_arduino_peripherals) — buttons, buzzer, battery monitor, SHT4x sensor, and microSD examples.
- [XIAO 7.5" ePaper Panel Arduino guide](/xiao_075inch_epaper_panel_arduino) — product-specific setup for the XIAO ESP32-C3 based panel.
- [TRMNL DIY Kit Arduino guide](/ogdiy_kit_works_with_arduino) — custom Arduino firmware path for the TRMNL kit hardware.

## Common Issues

### Q1: Why does PlatformIO not show my Seeed board in the board list?

This is expected for many Seeed development boards. The board definitions used in this guide come from Seeed's PlatformIO platform package, so they may not appear in PlatformIO's default **New Project** board search before the package is installed.

Use the Seeed package URL directly in `platformio.ini`:

```ini
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
```

Then set `board` to the Seeed board ID used by your product, such as:

```ini
board = seeed-xiao-esp32-s3-sense
```

When you build for the first time, PlatformIO downloads the platform package and then recognizes the board ID.

### Q2: Why does the build fail with `TFT_eSPI.h` or `Seeed_GFX` not found?

This usually means the display library was not installed for the selected environment.

Check that `lib_deps` is present in the same environment you are building:

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Then run **Clean** and **Build** again.

### Q3: Why does the firmware upload successfully but the ePaper display stays blank?

The most common cause is a wrong or missing `driver.h`.

- Regenerate `driver.h` with the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).
- Confirm the selected board and display match the real hardware.
- Confirm the generated `BOARD_SCREEN_COMBO` is available to the source file that includes `Seeed_GFX`.
- For ESP32-S3 products with large buffers, confirm whether the product cookbook requires PSRAM settings.

### Q4: Why does PlatformIO fail to upload to the board?

Upload failures are usually caused by the USB cable, wrong serial port, or boot mode.

- Use a USB-C cable that supports data transfer.
- Disconnect other serial devices and try again.
- Set `upload_port` only if auto-detection chooses the wrong port.
- For ESP32-based boards, hold the boot button while connecting USB if the board does not enter download mode automatically.

### Q5: Why does the serial monitor show unreadable characters?

The `monitor_speed` value does not match the firmware baud rate.

If the firmware uses:

```cpp
Serial.begin(115200);
```

then `platformio.ini` should include:

```ini
monitor_speed = 115200
```

## Resources

- **[Docs]** [PlatformIO Project Configuration File](https://docs.platformio.org/en/stable/projectconf/index.html)
- **[Docs]** [PlatformIO IDE for VS Code](https://docs.platformio.org/en/stable/integration/ide/pioide.html)
- **[GitHub]** [Seeed PlatformIO Platform Package](https://github.com/Seeed-Studio/platform-seeedboards)
- **[GitHub]** [Seeed PlatformIO Arduino Blink Example](https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/arduino-blink)
- **[GitHub]** [Seeed_GFX Library](https://github.com/Seeed-Studio/Seeed_GFX)
- **[Tool]** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
- **[Wiki]** [PlatformIO for Arduino-supported Boards](/Software-PlatformIO)

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
