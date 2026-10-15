---
description: Use Zephyr RTOS with Seeed Studio reTerminal E Series ePaper devices, with official Zephyr board documentation links for reTerminal E1001, E1002, and E1003.
title: Work with Zephyr
keywords:
  - ePaper display
  - Zephyr
  - RTOS
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /epaper_work_with_zephyr
sidebar_position: 11
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-06-30'
url: https://wiki.seeedstudio.com/epaper_work_with_zephyr/
updatedAt: '2026-06-30'
---

# Work with Zephyr

[Zephyr](https://www.zephyrproject.org/) is an open-source real-time operating system for embedded devices. It is useful when you want a production-oriented firmware stack with a build system, device tree based hardware description, kernel services, drivers, and upstream board definitions.

Zephyr already includes official board documentation for **reTerminal E1001**, **reTerminal E1002**, and **reTerminal E1003**. This Wiki page is a Seeed ePaper entry point: use it to choose the correct board target, then follow the official Zephyr documentation for installation, build, flashing, and debugging.

## When to Use Zephyr

Use Zephyr when your project needs:

- a structured RTOS development workflow;
- upstream board support and long-term maintainable firmware;
- kernel features such as threads, timers, queues, and device drivers;
- a consistent build and flashing workflow across multiple embedded boards;
- direct access to ESP32-S3 peripherals through Zephyr APIs.

If your goal is a Home Assistant dashboard, no-code page design, or Arduino-style drawing API, start from the matching application page on the [Seeed ePaper Displays overview](/seeed_epaper_displays). Zephyr is best suited for developers who want to build custom firmware at the RTOS level.

## Supported Devices

Prepare one of the following reTerminal E Series devices before starting Zephyr development.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></a></div></td>
    </tr>
    <tr>
      <td align="center">7.5" monochrome ePaper<br/>800 x 480</td>
      <td align="center">7.3" full-color ePaper<br/>800 x 480</td>
      <td align="center">10.3" monochrome ePaper<br/>1404 x 1872, touch</td>
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
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
    <tr>
      <td align="center"><code>reterminal_e1001/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1002/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1003/esp32s3/procpu</code></td>
    </tr>
  </table>
</div>

The quick-start command examples below use the `procpu` target. For dual-core details, hardware feature tables, supported runners, and debug options, use the official board page for your device.

## Recommended Reading Path

Follow this path when setting up Zephyr for the first time:

1. Open the [Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) and install the Zephyr toolchain, Python dependencies, west, and SDK for your operating system.
2. Open the official board page for your device from the [Official Zephyr Documentation](#official-zephyr-documentation) section.
3. Read the board page overview to confirm the display size, SoC, onboard sensors, keys, LEDs, RTC, and battery-related hardware described by Zephyr.
4. Use the board page **Supported Features** section to check which peripherals are already described in Zephyr.
5. Use the board page **Programming and Debugging** section for build, flash, reset, and debug commands.

:::tip
Keep the official Zephyr board page open while developing. It is the source of truth for current board targets, supported features, runners, and build options.
:::

## Quick Command Pattern

After your Zephyr workspace is ready, build the `hello_world` sample with the board target that matches your device.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Device</th>
      <th>Build command</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>west build -b reterminal_e1001/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>west build -b reterminal_e1002/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>west build -b reterminal_e1003/esp32s3/procpu samples/hello_world</code></td>
    </tr>
  </table>
</div>

Then flash the built image:

```shell
west flash
```

If the board stays in download mode after flashing, use the reset option documented by Zephyr:

```shell
west flash --reset-type watchdog-reset
```

For MCUboot, sysbuild, faster flashing, OpenOCD debugging, and advanced runner options, follow the **Programming and Debugging** section on the official board page for your device.

## Official Zephyr Documentation

Use the links below as the main references for Zephyr-specific setup and board details:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Topic</th>
      <th>Use this when you need to</th>
      <th>Link</th>
    </tr>
    <tr>
      <td>Zephyr Getting Started</td>
      <td>Install Zephyr, west, Python dependencies, and the Zephyr SDK.</td>
      <td><a href="https://docs.zephyrproject.org/latest/develop/getting_started/index.html" target="_blank" rel="noopener noreferrer">Open Getting Started</a></td>
    </tr>
    <tr>
      <td>Zephyr Boards</td>
      <td>Search all Zephyr-supported boards and confirm current target names.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/index.html" target="_blank" rel="noopener noreferrer">Open Boards index</a></td>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td>Build, flash, and debug Zephyr applications for reTerminal E1001.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1001/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1001 docs</a></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td>Build, flash, and debug Zephyr applications for reTerminal E1002.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1002/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1002 docs</a></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td>Build, flash, and debug Zephyr applications for reTerminal E1003.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1003/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1003 docs</a></td>
    </tr>
  </table>
</div>

## Related Seeed Wiki Pages

- [Seeed ePaper Displays overview](/seeed_epaper_displays)
- [Getting Started with reTerminal E1001](/getting_started_with_reterminal_e1001)
- [Getting Started with reTerminal E1002](/getting_started_with_reterminal_e1002)
- [Getting Started with reTerminal E1003](/getting_started_with_reterminal_e1003)

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
