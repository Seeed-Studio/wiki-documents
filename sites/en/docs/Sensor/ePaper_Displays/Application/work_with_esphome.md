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
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with ESPHome

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
      <td><a href="/reterminal_e10xx_with_esphome">Basic</a> · <a href="/reterminal_e10xx_with_esphome_advanced">Advanced (peripherals)</a></td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/EE04_with_esphome_advanced">EE04 ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="/xiao_075inch_epaper_panel_esphome">XIAO Panel ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/ogdiy_kit_works_with_esphome">TRMNL DIY Kit ESPHome cookbook</a></td>
    </tr>
  </table>
</div>

:::tip
Looking for **TRMNL cloud dashboards** (no YAML, plug-in based) instead? See [Work with TRMNL](/reterminal_e10xx_trmnl). Looking for **Seeed's no-code visual HMI** instead? See [Work with SenseCraft HMI](/EE04_with_hmi).
:::

## Why ESPHome on ePaper?

- **Energy efficiency** — ePaper only consumes power when the screen is being updated, so the combo (ESP32 + ESPHome deep-sleep + ePaper) can run for weeks/months on a battery.
- **Daylight readable** — unlike LCD, the display is readable in sunlight; great for wall-mounted Home Assistant panels.
- **Native HA citizen** — once the device shows up in Home Assistant, every entity (climate, calendar, sensor, person, weather) is one Jinja template away from being on the wall.
- **Local-first** — no cloud, no vendor lock-in. Everything runs on your LAN.

## Step 1: Pick a flashing path

ESPHome firmware can be loaded onto the device in two ways. The right choice depends on whether you want to write YAML from scratch or just get a working dashboard fast.

<Tabs groupId="esphome-flash-path">
<TabItem value="web-installer" label="Path A: ESPHome Web Installer (recommended for first-time users)" default>

A pre-built firmware ZIP is hosted by Seeed and flashed to your device through the browser via WebSerial.

1. Plug the device into your computer with a USB-C cable.
2. Open the per-product flashing page (linked from the cookbook for your product) in **Chrome** or **Edge**.
3. Click **Connect**, pick the serial port, then click **Install**.
4. After flashing, the device boots into a Wi-Fi captive portal (`ESPHome-XXXX`). Connect, set Wi-Fi, and the device will appear in Home Assistant via the ESPHome integration.

This path requires **no YAML editing**. You can later "adopt" the device in the ESPHome dashboard if you want to start customising it.

</TabItem>
<TabItem value="yaml-cli" label="Path B: YAML + ESPHome dashboard (full control)">

For complete control over the firmware (custom display layouts, custom sensors, multi-page dashboards, deep sleep tuning, OTA updates), run the **ESPHome dashboard** as either:

- a Home Assistant **Add-on** (recommended if you already run HA OS / HA Supervised), or
- a standalone **Python CLI** (`pip install esphome` then `esphome dashboard config/`).

Workflow:

1. In the ESPHome dashboard, click **+ New device** → enter a name → pick the right ESP variant (ESP32-S3 / ESP32-C3 / etc. — your product cookbook will tell you which).
2. The dashboard generates a starter `<device-name>.yaml`. Replace its body with the product-specific YAML from your cookbook (see Step 2 below for the shape).
3. Click **Install** → **Plug into the computer running ESPHome** for the first flash; subsequent flashes are wireless via OTA.
4. The device joins the ESPHome integration in Home Assistant automatically.

</TabItem>
</Tabs>

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

- **[reTerminal E Series — Basic ESPHome](/reterminal_e10xx_with_esphome)** — first dashboard, Wi-Fi setup, pre-built firmware ZIP for E1001/E1002/E1003/E1004.
- **[reTerminal E Series — Advanced ESPHome](/reterminal_e10xx_with_esphome_advanced)** — buttons, buzzer, battery monitoring, SHT4x sensor, deep sleep, multi-page dashboards.
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

ePaper only saves power when the rest of the SoC is also asleep. Add a `deep_sleep` block (see the Advanced cookbook for your product) and lower the `update_interval`.

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
