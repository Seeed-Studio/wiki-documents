---
description: Reference guide for driving any compatible Seeed ePaper product with ESPHome and Home Assistant - flashing paths, generic YAML skeleton, and where to find each product's cookbook.
title: Work with ESPHome
keywords:
  - ePaper display
  - ESPHome
  - Home Assistant
  - YAML
  - reTerminal
  - XIAO
  - TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_esphome
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/epaper_work_with_esphome/
updatedAt: '2026-06-15'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with ESPHome

:::tip Try demos without setting up a development environment
If you want to quickly preview project results or try the basic demo firmware before setting up a development environment, open the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. You can choose a supported reTerminal E Series device and flash demo firmware directly from a browser.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

This page is the **reference manual** for driving any compatible Seeed ePaper product through [ESPHome](https://esphome.io/) and integrating it with [Home Assistant](https://www.home-assistant.io/). It covers the parts that are identical across all hardware:

1. Why you'd choose ESPHome to drive an ePaper display.
2. The two flashing paths: **ESPHome Web Installer** (zero-config, browser-based) and **ESPHome CLI / HA Add-on** (full YAML control).
3. The generic YAML skeleton — `wifi`, `api`, `ota`, `display` — that every product specialises with its own pin map.
4. Where the per-product cookbook lives (peripherals, hardware-specific lambdas, dashboard recipes).

For an **end-to-end "flash → connect → first dashboard" walkthrough**, jump straight to the cookbook for your hardware below; those pages reuse this reference for the boilerplate and add product-specific examples.

## Compatible Hardware

Every Seeed ePaper product on the [main hub page](/seeed_epaper_displays) that has an **ESPHome** column ticked can run through this workflow:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Product</th>
      <th>MCU</th>
      <th>Cookbook</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3</td>
      <td><a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome/">Display basics, HA integration & drawing</a> · <a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_advanced/">Buttons, buzzer, LED, battery, SHT4x & deep sleep</a> · <a href="https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_rtc_sd_microphone/">RTC, SD card & microphone</a></td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/EE04_with_esphome_advanced/">EE04 ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_esphome/">XIAO Panel ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/ogdiy_kit_works_with_esphome/">TRMNL DIY Kit ESPHome cookbook</a></td>
    </tr>
  </table>
</div>


## Why ESPHome on ePaper?

- **Energy efficiency** — ePaper only consumes power when the screen is being updated, so the combo (ESP32 + ESPHome deep-sleep + ePaper) can run for weeks/months on a battery.
- **Daylight readable** — unlike LCD, the display is readable in sunlight; great for wall-mounted Home Assistant panels.
- **Native HA citizen** — once the device shows up in Home Assistant, every entity (climate, calendar, sensor, person, weather) is one Jinja template away from being on the wall.
- **Local-first** — no cloud, no vendor lock-in. Everything runs on your LAN.

## Step 1: Generate ESPHome YAML and flash your firmware

The easiest way to start is to use the **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. The hub can generate an ESPHome YAML file from your device and feature selections, so you do not need to assemble the first configuration by hand.

Recommended workflow:

1. Open the [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) in desktop Chrome or Edge.
2. Select **ESPHome** as the platform.
3. Select your device.
4. In the setup step, choose the features you want to enable, such as display, buttons, battery, sensors, RTC, SD card, microphone, or deep sleep if they are available for your device.
5. Let the page generate the matching ESPHome YAML.
6. Use **Copy to clipboard** or **Download file** to export the generated YAML.
7. Paste or import the YAML into your ESPHome dashboard.
8. Focus your manual editing on the part that matters most for your project: ePaper display content, Home Assistant entities, layout, fonts, and refresh behavior.

:::tip
The Firmware Hub is the recommended starting point for new users because it handles much of the device-specific YAML structure. Use the cookbooks when you want to understand the generated configuration, combine advanced features, or build a custom layout from smaller examples.
:::

Run the ESPHome dashboard as either:

- a Home Assistant Add-on (recommended if you already run HA OS / HA Supervised), or
- a standalone Python CLI (`pip install esphome` then `esphome dashboard config/`).

Manual cookbook workflow:

1. Open the cookbook for your hardware (see the table above) and copy the YAML example you need.
2. In the ESPHome dashboard, click + New device, enter a name, and pick the ESP variant listed in your cookbook (ESP32-S3, ESP32-C3, etc.).
3. Replace the generated starter file with your configuration. Combine cookbook sections only if you need multiple features on one device.
4. Click Install → Plug into this computer for the first USB flash. After `wifi`, `api`, and `ota` are set up, later updates can go over Wi-Fi.
5. When the device is online, it appears in Home Assistant through the ESPHome integration.

## Step 2: Generic YAML skeleton

Every Seeed ePaper ESPHome configuration follows the same outline. The cookbook for your product fills in the **product-specific bits** (substitutions, pin map, screen model) — but the overall shape is always:

```yaml
substitutions:
  device_name: my-epaper

esphome:
  name: ${device_name}
  friendly_name: ${device_name}

# Pick the right platform for your hardware.
# - reTerminal E Series & EE04 & TRMNL Kit: esp32 with framework: arduino (S3 variant)
# - XIAO 7.5" Panel: esp32 with framework: arduino (C3 variant)
esp32:
  board: seeed_xiao_esp32s3   # see your cookbook
  framework:
    type: arduino

logger:
api:
  encryption:
    key: !secret api_key
ota:
  - platform: esphome
    password: !secret ota_password
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "${device_name} Fallback"

# SPI bus that drives the ePaper - exact pins come from the cookbook
spi:
  clk_pin: GPIO13
  mosi_pin: GPIO11

# The display block - the model + pin map are the part that's
# different per product. The cookbook gives you the right values.
display:
  - platform: waveshare_epaper
    id: epaper
    cs_pin: GPIO9
    dc_pin: GPIO15
    busy_pin: GPIO12
    reset_pin: GPIO14
    model: 7.50inv2
    update_interval: never   # we'll trigger refreshes from automations
    lambda: |-
      it.print(0, 0, id(roboto_24), "Hello, ePaper!");

font:
  - file: "fonts/Roboto-Regular.ttf"
    id: roboto_24
    size: 24
```

What's product-specific (and lives in each cookbook):

- `esp32.board` — `seeed_xiao_esp32s3` for E1001/E1002/EE04/TRMNL Kit; `esp32-c3-devkitm-1` for XIAO 7.5" Panel; etc.
- The `spi` and `display` pin maps.
- The `model` value (`7.50in-bwr`, `13.3in-spectra6`, …).
- Any onboard peripherals (buttons / buzzer / battery / SHT4x) — covered in the **Advanced** sections of the relevant cookbook.

## Step 3: Connect to Home Assistant

Once the firmware boots and joins your Wi-Fi, Home Assistant auto-discovers the device:

1. **Settings → Devices & services**
2. The ESPHome integration shows a "Discovered" card for your device.
3. Click **Configure**, paste the API encryption key (from `secrets.yaml`), submit.
4. The device + all its entities (sensors, binary_sensors, the display) are now available in HA.

You can now drag the entities into a Lovelace dashboard, or — much more interesting on ePaper — use the `display.lambda` block to render any HA entity directly to the screen via the [`homeassistant`](https://esphome.io/components/homeassistant.html) component.

## Where to go next — Cookbooks

This page intentionally stops at the boilerplate. The product-specific YAML, peripheral examples, and end-to-end recipes live in each product's cookbook:

- **[reTerminal E Series — ESPHome Display](/reterminal_e10xx_with_esphome)** — first dashboard, Wi-Fi setup, pre-built firmware ZIP, and ePaper drawing examples for E1001/E1002/E1003/E1004.
- **[reTerminal E Series — ESPHome I/O, Battery & Power](/reterminal_e10xx_with_esphome_advanced)** — buttons, buzzer, onboard LED, battery monitoring, SHT4x sensor, deep sleep, and multi-page dashboards.
- **[reTerminal E1001 / E1002 — ESPHome RTC, SD & Microphone](/reterminal_e10xx_with_esphome_rtc_sd_microphone)** — PCF8563 RTC time sync, microSD card power/detect pins, and onboard PDM microphone setup.
- **[EE04 driver board — ESPHome](/EE04_with_esphome_advanced)** — full Home Assistant integration on the XIAO ESP32-S3 + EE04 + your choice of ePaper screen.
- **[XIAO 7.5" ePaper Panel — ESPHome](/xiao_075inch_epaper_panel_esphome)** — minimal ESP32-C3 dashboard.
- **[TRMNL 7.5" DIY Kit — ESPHome](/ogdiy_kit_works_with_esphome)** — using the kit hardware with ESPHome instead of the TRMNL cloud platform.

When new ePaper products ship, the corresponding cookbook is added under each product's folder; this main page is updated to link to it.

## Common Issues

### Display stays blank after flashing

- Confirm the `display.platform` and `model` strings match your screen — wrong model silently produces a blank refresh.
- Check the `busy_pin` and `reset_pin` are wired correctly; a dangling busy line will block all refreshes.
- For colour ePaper (`spectra6`, `7-color`, `bwr`), the first refresh can take 25-45 seconds; wait before debugging further.

### Device doesn't show up in Home Assistant

- Verify the device joined Wi-Fi (check the ESPHome dashboard logs).
- Make sure `api:` is present in the YAML and that the encryption key in HA matches `secrets.yaml`.
- Manually add the integration: **Settings → Devices & services → Add Integration → ESPHome**, then enter the device's IP.

### Battery drains faster than expected

ePaper only saves power when the rest of the SoC is also asleep. Add a `deep_sleep` block (see the I/O, battery, and low-power cookbook for your product) and lower the `update_interval`.

For deeper troubleshooting on a specific product, check the cookbook for that hardware.

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
