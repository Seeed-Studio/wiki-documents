---
description: A complete overview of Seeed Studio's ePaper display product matrix, from integrated reTerminal E Series terminals to driver boards, DIY kits, and the application frameworks that power them.
title: Seeed ePaper Displays
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/seeed_epaper_displays/
---

# Seeed ePaper Displays — Product Matrix Overview

## Introduction

ePaper (electronic paper) only consumes power when its content changes, which makes it the ideal display technology for **always-on information panels** — digital signage, smart-home dashboards, electronic shelf labels, meeting-room boards, photo frames, and more.

Seeed Studio offers an end-to-end ePaper portfolio organized around three product lines:

1. **reTerminal E Series** — fully integrated, ready-to-use ePaper terminals (just power them on).
2. **Driver / Expansion Boards** — pair an MCU with universal or large-format ePaper screens to build your own product.
3. **DIY Kits & Bare Panels** — designed for the maker community, optimized for specific platforms such as TRMNL or XIAO.

All three lines share the **same software ecosystem**: SenseCraft HMI (no-code), Home Assistant / ESPHome, TRMNL, Arduino / ESP-IDF / PlatformIO, plus visual UI tools like SquareLine Vision, EEZ Studio, and Lopaka. Pick a hardware family, and the rest of the toolchain stays the same.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Choose by Form-Factor

If you are not sure where to start, use this decision matrix:

<div class="table-center">
  <table align="center">
    <tr>
      <th>I want to…</th>
      <th>Recommended product line</th>
      <th>Why</th>
    </tr>
    <tr>
      <td>Power on an ePaper dashboard out of the box, no soldering, no extra wiring</td>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E Series →</strong></a></td>
      <td>Battery, enclosure, T/H sensor, buzzer, buttons, and Wi-Fi all integrated. Ships with SenseCraft HMI firmware.</td>
    </tr>
    <tr>
      <td>Pair an existing ePaper screen (24-pin, 50-pin, 13.3", 10.3", etc.) with an MCU and battery</td>
      <td><a href="https://wiki.seeedstudio.com/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>Driver / Expansion Board Series →</strong></a></td>
      <td>Driver boards (EE0x for ESP32-S3, EN0x for nRF52840) provide JST battery connector, charging IC, reset button, and user buttons.</td>
    </tr>
    <tr>
      <td>Build a TRMNL-compatible dashboard with a maker-friendly DIY kit</td>
      <td><a href="https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>TRMNL 7.5" (OG) DIY Kit →</strong></a></td>
      <td>Pre-tuned for the TRMNL platform; supports ESPHome and Arduino too.</td>
    </tr>
    <tr>
      <td>Plug a 7.5" ePaper panel directly into a Seeed Studio XIAO module</td>
      <td><a href="https://wiki.seeedstudio.com/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>XIAO 7.5" ePaper Panel →</strong></a></td>
      <td>Bare panel + breakout that mates with any XIAO board; minimal footprint.</td>
    </tr>
  </table>
</div>

## reTerminal E Series — Integrated ePaper Terminals

Four ESP32-S3 powered terminals, sharing the same enclosure family, software stack, and battery design. Differences are screen size, color vs. monochrome, touch, and battery life.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" Monochrome</strong><br/>4-level grayscale<br/>~3-month battery</td>
      <td align="center"><strong>7.3" Full Color</strong><br/>E Ink Spectra 6<br/>~3-month battery</td>
      <td align="center"><strong>10.3" Monochrome</strong><br/>16-level grayscale + Touch<br/>~6-month battery</td>
      <td align="center"><strong>13.3" Full Color</strong><br/>E Ink Spectra 6<br/>~6-month battery</td>
    </tr>
    <tr>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer"><strong>E1001 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer"><strong>E1002 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer"><strong>E1003 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer"><strong>E1004 Wiki →</strong></a></td>
    </tr>
  </table>
</div>

:::tip
For a side-by-side specification comparison (resolution, refresh time, partial-refresh support, certifications, MSRP, etc.) and detailed software-support matrix, head to the dedicated **[reTerminal E Series Overview](https://wiki.seeedstudio.com/reterminal_e10xx_main_page)**.
:::

## Driver / Expansion Board Series — BYO Screen

If you already have (or want to source separately) a 24-pin, 50-pin, 10.3", or 13.3" ePaper panel, the driver-board family gives you the carrier electronics — battery management, buttons, charging IC, and the MCU.

### ESP32-S3 driver boards (Wi-Fi / BLE, SenseCraft HMI)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Board</th>
      <th>Targeted screens</th>
      <th>Highlights</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EE02</strong></td>
      <td align="center">13.3" Spectra 6</td>
      <td>Dedicated large-format color driver; Wi-Fi + BLE; ideal for digital signage.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_ee02" target="_blank" rel="noopener noreferrer">EE02 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE03</strong></td>
      <td align="center">10.3" Monochrome (high-speed refresh)</td>
      <td>Built-in T-CON timing; onboard SHT40 for waveform compensation; XIAO ESP32-S3 Plus.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/getting_started_with_ee03" target="_blank" rel="noopener noreferrer">EE03 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE04</strong></td>
      <td align="center">24-pin / 50-pin universal</td>
      <td>Jumper-selectable pin layout; works with most off-the-shelf small ePaper screens.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24-pin / 50-pin universal (latest)</td>
      <td>Refreshed layout of EE04; same XIAO ESP32-S3 base, latest firmware support.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/epaper_ee05" target="_blank" rel="noopener noreferrer">EE05 →</a></td>
    </tr>
  </table>
</div>

### nRF52840 driver boards (BLE / NFC, ultra-low-power)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Board</th>
      <th>Targeted screens</th>
      <th>Highlights</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EN04</strong></td>
      <td align="center">24-pin / 50-pin universal</td>
      <td>Bluetooth LE + NFC; XIAO nRF52840 Plus; ideal for ESLs and offline tags.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24-pin / 50-pin universal (latest)</td>
      <td>Refreshed layout of EN04; same nRF52840 base with latest firmware support.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/epaper_en05" target="_blank" rel="noopener noreferrer">EN05 →</a></td>
    </tr>
  </table>
</div>

### Boards designed for XIAO modules

<div class="table-center">
  <table align="center">
    <tr>
      <th>Board</th>
      <th>Description</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>XIAO eInk Expansion Board v2</strong></td>
      <td>Plug-and-play expansion board for any XIAO module; supports popular small ePaper screens.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>The original breakout board for XIAO + ePaper; well documented with OpenEpaperLink (OEPL) support.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
A consolidated **[ePaper Driver Board Overview](https://wiki.seeedstudio.com/xiao_epaper_display_board_overview)** is also available, with feature lists for each board side-by-side.
:::

## DIY Kits & Bare Panels

For makers who prefer assembling everything themselves, two flexible options:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Product</th>
      <th>What is in the box / what it is</th>
      <th>Best for</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>7.5" monochrome ePaper + ESP32 driver board + acrylic stand. Pre-tuned for the TRMNL cloud platform; also runs ESPHome and Arduino.</td>
      <td>The fastest path to a TRMNL-style dashboard at the lowest BOM cost.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL Kit →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>Bare 7.5" ePaper panel with an FPC connector that mates directly to a XIAO module footprint.</td>
      <td>Compact, low-cost projects where you already have a XIAO and want to add a screen.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO Panel →</a></td>
    </tr>
  </table>
</div>

## Software Ecosystem at a Glance

Every Seeed ePaper product converges into the same software ecosystem. Pick the workflow that matches your skill level — you can mix and match:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Tool / Platform</th>
      <th>Type</th>
      <th>What it does</th>
      <th>Compatible with</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">No-code (cloud)</td>
      <td>AI Generator, Gallery, Canvas, RSS / Web Content, OTA deployment. The default firmware on reTerminal E Series.</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">YAML-based</td>
      <td>Native Home Assistant integration; build dashboards declaratively in YAML.</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">Cloud dashboard</td>
      <td>Plug-in driven dashboards (calendar, news, weather, finance, custom data).</td>
      <td>reTerminal E1001 · E1002 (mono mode) · TRMNL 7.5" DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">Code (C/C++)</td>
      <td>Full programmatic control: GPIO, sensors, network, custom rendering.</td>
      <td>All ESP32-S3 products (E1001–E1004, EE02–EE05, TRMNL Kit, XIAO Panel)</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">Visual UI design</td>
      <td>Drag-and-drop LVGL UI in the browser, then export ready-to-compile code.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">Visual UI design</td>
      <td>Design HMI screens visually and deploy through Arduino IDE.</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">Visual UI design</td>
      <td>Web-based drawing tool that exports code for monochrome and color ePaper layouts.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">Open-source firmware (BLE)</td>
      <td>BLE-driven open-source ePaper firmware. OpenDisplay targets EN04 out of the box; OEPL Config Builder targets the Breakout Board + XIAO nRF52840 DIY path.</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## Application Tutorials Index

Each tutorial below walks through one platform end-to-end:

### Smart-home & dashboard frameworks

- [Work with ESPHome](https://wiki.seeedstudio.com/epaper_work_with_esphome) — main reference: flashing paths, generic YAML skeleton, Home Assistant integration. Per-product cookbooks: [reTerminal E (Basic)](https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome), [reTerminal E (Advanced)](https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_advanced), [EE04](https://wiki.seeedstudio.com/EE04_with_esphome_advanced), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_esphome), [TRMNL DIY Kit](https://wiki.seeedstudio.com/ogdiy_kit_works_with_esphome).
- [Work with TRMNL](https://wiki.seeedstudio.com/reterminal_e10xx_trmnl) — deploy E-Ink dashboards through the TRMNL cloud platform. One single article now covers reTerminal E1001/E1002, the TRMNL DIY Kit, and the XIAO 7.5" ePaper Panel — pick your hardware in the tabs.

### No-code / visual UI design tools

- [Work with SenseCraft HMI](https://wiki.seeedstudio.com/EE04_with_hmi) — Seeed's no-code visual interface platform; covers reTerminal E Series and EE0x driver boards.
- [Work with SquareLine Vision](https://wiki.seeedstudio.com/reterminal_e10xx_with_squareline_vision)
- [Work with EEZ Studio](https://wiki.seeedstudio.com/reterminal_e10xx_with_eezstudio) — combined reTerminal E Series + EE04 LVGL workflow.
- [Work with Lopaka](https://wiki.seeedstudio.com/reterminal_e10xx_with_lopaka)

### Code-based development

- [Work with Arduino](https://wiki.seeedstudio.com/epaper_work_with_arduino) — main reference: IDE setup, `Seeed_GFX` library, `driver.h` generation. Per-product cookbooks: reTerminal E Series — [ePaper Display](https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino) & [Onboard Peripherals](https://wiki.seeedstudio.com/reterminal_e10xx_with_arduino_peripherals), [TRMNL DIY Kit](https://wiki.seeedstudio.com/ogdiy_kit_works_with_arduino), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_arduino).
- [Work with PlatformIO — EE04](https://wiki.seeedstudio.com/ee04_with_platformio)

### Open-source ESL / OEPL

- [Work with OpenEPaperLink / OpenDisplay](https://wiki.seeedstudio.com/EN04_opendisplay) — single article covers the EN04 BLE kit and the ePaper Breakout Board + XIAO nRF52840 DIY path.

## Resources

- [SenseCraft HMI Documentation](https://wiki.seeedstudio.com/sensecraft_hmi_overview/)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [XIAO Series Overview](https://wiki.seeedstudio.com/xiao_topic_page/)
- [Seeed Studio ePaper Category Store](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

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
