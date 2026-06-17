---
description: Drive Seeed ePaper hardware over Bluetooth Low Energy with the OpenEPaperLink (OEPL) and OpenDisplay open-source ecosystems - covers the XIAO ePaper Display Board EN04 and the ePaper Breakout Board for Seeed Studio XIAO.
title: Work with OpenEPaperLink / OpenDisplay
keywords:
  - ePaper display
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/EN04_opendisplay/
updatedAt: '2026-06-03'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with OpenEPaperLink / OpenDisplay

The [OpenEPaperLink (OEPL)](https://openepaperlink.de/) ecosystem and the related [OpenDisplay](https://opendisplay.org/) project are open-source firmware/protocol stacks for driving e-paper displays. Modern releases run over **Bluetooth Low Energy** — your phone, computer, or Home Assistant talks directly to the device, no dedicated 802.15.4 access point required.

This guide covers two Seeed hardware paths into that ecosystem:

- **XIAO ePaper Display Board EN04** — an integrated kit running the OpenDisplay firmware over BLE.
- **ePaper Breakout Board for Seeed Studio XIAO** — a more modular DIY path using the OEPL Config Builder + OEPL Image Uploader together with a XIAO nRF52840 series board.

Both flows share a common philosophy (BLE configuration, web-based tooling, low-power), but the hardware and firmware/web tools differ. Pick the tab that matches your hardware throughout the article.

## Compatible Hardware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
</table>
</div>

Powered by **XIAO nRF52840 Plus**, the XIAO EN04 ePaper Display Board is the easiest way to get started with Bluetooth-enabled e-paper displays. Direct wireless control from your phone, computer, or Home Assistant — no dedicated AP needed.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<table align="center">
  <tr>
    <th>4.26" Monochrome ePaper Display</th>
    <th>ePaper Breakout Board for Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
The whole **XIAO nRF52840 series** can drive this DIY kit — not only the Sense Plus shown above. The community OEPL project supports the 4.26" screen out of the box; more screen sizes will be added over time.
:::

</TabItem>
</Tabs>

## Why use OpenEPaperLink / OpenDisplay?

- **No access point required** — uses Bluetooth Low Energy for direct communication. No 802.15.4 hardware needed.
- **Web-based tools** — install firmware, configure devices, and upload images straight from your browser.
- **Purpose-built hardware support** — XIAO nRF52840 family, EN04, EE04, etc.
- **Open source & free** — actively developed on GitHub.
- **Multiple microcontrollers** — nRF52840, ESP32-S3, ESP32-C6, ESP32-C3.
- **Simple flow** — drag-and-drop firmware install, configure via web, no complex programming.
- **Battery efficient** — optimised for low-power e-paper.
- **Active community** — [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z).

## Step 1: Hardware Setup

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

**Step 1. Connect display to the driver board**  
Align the FPC cable with the connector on the XIAO EN04 board, then secure the latch.

:::tip
The metal side of the FPC cable should face upwards, otherwise no content will be displayed. Most displays have `1` and `50` printed on the FPC; align them with the matching numbers on the board.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2. Attach the battery**  
Connect the battery cable to the JST connector on the driver board. Red wire to **+**, black to **−**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Double-check the polarity. Different batteries can have mixed wiring. Misaligned wires can be removed from the JST connector with a needle and re-inserted correctly.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

Connect the **XIAO nRF52840 (Sense Plus)** to the **ePaper Breakout Board**, then attach the **4.26" monochrome ePaper screen** to the FPC connector. Use a USB-C data cable to connect the XIAO to your computer.

</TabItem>
</Tabs>

## Step 2: Flash the Firmware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

The easiest path is the OpenDisplay web installer.

**Step 1.** Open the [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) in a browser.

**Step 2.** Choose **Seeed EN04 4.26** or **Seeed EN04 7.3** (or whichever preset matches your display) from the device list.

**Step 3.** Click **Download Firmware** and save `NRF52840.uf2` locally.

**Step 4.** Connect the EN04 board via USB-C.

**Step 5.** Press the reset button **twice** consecutively. A USB drive will appear on your computer (the EN04 in DFU mode). Copy `NRF52840.uf2` to that drive.

:::tip
If the installer fails:

- Try a different USB cable (some are power-only — use a data cable).
- Press the reset button twice on the EN04 to re-enter DFU mode.
- Try a different USB port.
:::

**Step 6.** Open the [OpenDisplay Configuration Page](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) and connect to your board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

If you selected **Seeed EN04 4.26** or **Seeed EN04 7.3**, you'll see **Auto Install to Device** — the easiest way to configure the kit.

**Step 7.** Press the **Connect** button. Select the new device in the pairing dialog and press **Pair**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Step 8.** Press **Auto Install to Device** to save the configuration to the board.

After installation and configuration, the display shows a startup screen and is ready to receive content over BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

The XIAO nRF52840 needs the **OEPL_BLE** firmware before the OEPL Config Builder can talk to it.

**Step 1.** Download the latest `OEPL_BLE` firmware from the official OEPL release page.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the firmware</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** Connect the XIAO nRF52840 + Breakout Board + screen, plug the XIAO into your computer via USB-C, then **press the reset button twice**. The XIAO appears as a USB drive on your computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** Drag-and-drop the downloaded `.uf2` firmware onto that USB drive. The XIAO will reboot and run the new firmware on the next power cycle.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Step 3: Configure the Device over BLE

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

The OpenDisplay configuration step from the previous flash workflow already handles this — your EN04 should now boot to the OpenDisplay startup screen and accept image uploads.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

Open the [OEPL Config Builder](https://config.openepaperlink.org/), then connect to your XIAO via BLE. (If no device shows up, re-flash the firmware and try again.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

When you see "Connected" in the terminal, you can use:

- **Read Config** — read the current configuration from the MCU.
- **Write Config** — write a new configuration to the MCU.
- **Reboot** — reboot the MCU.

### Builder panel

Pick variables and parameters in the panel to compose your configuration.

- **system_config** — host IC and power management pins.
- **manufacturer_data** — manufacturer identifier and board info.
- **power_option** — power supply and sleep settings.
- **display** — display / panel information (can repeat for multiple displays).
- **led** — optional LED configuration (repeatable).
- **sensor_data** — optional sensor readings / definitions (repeatable).
- **data_bus** — bus definitions (I2C / SPI / …).
- **binary_inputs** — buttons, switches.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

You can export the configuration as `.bin`, `Hex`, or `JSON`, or import a saved JSON. A ready-made configuration for the 4.26" screen is available below.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" sample config (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

After dialing in the configuration, click **Write Config** to save it to the MCU.

</TabItem>
</Tabs>

## Step 4: Upload Images

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

The OpenDisplay project has a dedicated browser-based uploader.

**Step 1.** Open the [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html).

**Step 2.** Click **Connect** and pick your OpenDisplay device from the BLE pairing dialog.

**Step 3.** Click **Select Image** and choose a file from your computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

:::tip
For best results:

- Use images that match your display resolution (the 7.3" panel is 800×480 px).
- Black-and-white images render best on monochrome displays.
- The tool automatically converts and dithers colour images.
:::

**Step 4.** Click **Upload Image**. The e-paper refreshes and your image appears.

You can also create custom content with image editors (GIMP, Photoshop), Python + Pillow scripts, web-based image generators, or a Home Assistant integration (covered below).

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

The OEPL Image Uploader is also a BLE web tool. The pin assignments differ from the Config Builder firmware, so you need to flash a slightly different image upload firmware first.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get the firmware</button></p>
</a>
</div>

In the **E-Paper prefix filter(s)** field, change the value to `OEPL` — otherwise the uploader cannot find the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

Click **Select File** to choose a local file for upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

When the file transfer is finished, click **Upload Image** to push it to the e-paper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

When you see **Upload Complete**, the e-paper has been refreshed with the new image.

</TabItem>
</Tabs>

## Home Assistant Integration (EN04 / OpenDisplay only)

:::tip
To integrate with Home Assistant, you need a Bluetooth-capable setup:

- **Home Assistant Green** (built-in Bluetooth)
- **Home Assistant OS / Supervised** on hardware with Bluetooth support
- **ESPHome Bluetooth Proxy** (recommended for better range — see below)

**Note:** Shelly devices acting as Bluetooth proxies **do not** support active connections required by OpenDisplay, so they cannot be used.
:::

**Step 1. Install the integration**

For detailed installation instructions, see the [OpenDisplay Home Assistant Integration repository](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

The easiest path is via **HACS** (Home Assistant Community Store):

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
After installing the custom integration via HACS, **restart Home Assistant** for the changes to take effect.
:::

**Step 2. Add the discovered device**

Once Home Assistant is back up:

1. Go to **Settings → Devices & services**.
2. Find your OpenDisplay device under **Discovered**.
3. Click **Add**.
4. Set the **Name** and **Area**, then click **Finish**.

A new image appears on the display, confirming Home Assistant is connected.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Automating display updates

The primary service is `open_epaper_link.drawcustom`, which lets you draw text, icons, images, and shapes. See the [drawcustom docs](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md) for the full type/parameter reference.

#### Example 1 — display sensor data (Visual Editor)

1. Go to **Settings → Automations & Scenes** and click **Create Automation**.
2. Add a **Time Pattern** trigger (e.g. every 10 minutes).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3. Add an **Action** → **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4. Pick the target device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5. In the **Payload** field, enter the layout configuration:

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution Entity IDs
The entity IDs above (e.g. `sensor.living_room_temperature`) are placeholders. Replace them with your actual Home Assistant entity IDs.
:::

#### Example 2 — countdown timer (YAML)

For advanced users, edit the automation as YAML. This example counts down to a date and renders the result on the display.

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution Device ID
The `device_id` above is a placeholder. Find your actual device ID by:

1. Creating a new automation in the Visual Editor.
2. Selecting your OpenDisplay device in the action settings.
3. Switching to **YAML mode** (three-dot menu in the action card).
4. Copying the `device_id` and pasting it into your automation.
:::

## Bonus

Looking for a stylish way to mount the display? This 3D-printed insert fits the IKEA RODÅLM picture frame and makes mounting easy:

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Troubleshooting

### Firmware installation issues

**Problem**: PC doesn't detect a new USB drive after connecting the board.

- Try a different USB cable (data cable, not power-only).
- Press the reset button twice after connecting the board.

### Configuration issues

**Problem**: The board isn't discovered.

- Verify the LED on the board blinks — confirms the device is powered.
- Try rebooting the board.
- Re-flash the firmware.

**Problem**: Display shows nothing after firmware installation.

- Verify the FPC cable orientation (metal contacts facing up).
- Confirm the cable is fully inserted and latched.
- Re-check the configuration via the configurator.

### Bluetooth connection issues

**Problem**: Cannot find the device in Bluetooth pairing.

- Ensure the device is powered on and the firmware is installed.
- Move closer (within 2–3 m).
- Confirm Bluetooth is enabled on your computer / phone.

**Problem**: Connection drops during image upload.

- Stay close to the device during upload.
- Charge the battery sufficiently or power via USB.
- Avoid uploading very large images.
- Try again in a less congested Bluetooth environment.

### Battery and power issues

**Problem**: Short battery life.

- Configure longer sleep intervals in the configurator.
- Always run the latest firmware (each release improves power use).
- Reduce display refresh frequency.
- Verify the battery is fully charged (4.2 V for Li-Po).

**Problem**: Device won't charge.

- Check polarity (red = +, black = −).
- Verify the charging cable provides ≥500 mA.
- Ensure the power switch is **ON**.
- Try a different USB power source.

### Home Assistant / Integration issues

**Problem**: "Insufficient connection slots" when adding devices via Raspberry Pi + HA.

This often happens because the Raspberry Pi's built-in Bluetooth adapter has hit its concurrent connection limit.

![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)
*Example of the "Insufficient connection slots" message.*

**Recommended fix**: use an ESP32 device (e.g. XIAO ESP32S3) as an **ESPHome Bluetooth Proxy**. This offloads the Bluetooth connection from the Pi, providing more stable "slots" for your e-paper displays.

## Using ESPHome Bluetooth Proxy

If you hit "Insufficient connection slots" using a Raspberry Pi with Home Assistant, an ESPHome Bluetooth Proxy is the most effective fix.

### Prerequisites

- An ESP32 device (e.g. XIAO ESP32S3).
- ESPHome installed in Home Assistant.
- A USB data cable to connect the ESP32 to your Pi (for the first flash).

### Step-by-step configuration

1. **Connect the device** — plug the XIAO ESP32S3 into a USB port on your Raspberry Pi.

2. **Create a new ESPHome configuration** with the YAML below:

   ![ESPHome YAML Configuration](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)

   ```yaml
   esphome:
     name: esps3-proxy
     friendly_name: ESP32S3 Bluetooth Proxy

   esp32:
     board: esp32-s3-devkitc-1
     framework:
       type: esp-idf

   # 1. Enable detailed logging (useful for debugging)
   logger:
     level: VERY_VERBOSE

   # 2. Core: Enable Bluetooth Tracker
   esp32_ble_tracker:
     scan_parameters:
       active: true

   # 3. Core: Enable Bluetooth Proxy
   bluetooth_proxy:
     active: true

   api:
     encryption:
       key: "YOUR_ENCRYPTION_KEY"

   ota:
     - platform: esphome
       password: "YOUR_OTA_PASSWORD"

   wifi:
     ssid: "YOUR_WIFI_SSID"
     password: "YOUR_WIFI_PASSWORD"

   captive_portal:
   ```

3. **Install / flash**:

   - Pick **Install → Plug into this computer** (or the device running ESPHome).

     ![ESPHome flashing process](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)

   - On first flash, ESPHome may download the `esp-idf` toolchain. Make sure your environment has stable Internet access to GitHub.
   - After compilation, the logs show "WiFi connected" and Bluetooth scan activity.

4. **Add the proxy to Home Assistant**:

   - Home Assistant will automatically discover the new Bluetooth Proxy.
   - Once added, your e-paper displays should be discoverable through the proxy without the "insufficient slots" error.

   ![Success: Bluetooth Proxy connected](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)

   ![Success: e-paper display added](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)

## Resources

- **[GitHub]** [OpenDisplay firmware](https://github.com/OpenDisplay-org/Firmware)
- **[GitHub]** [OEPL_BLE firmware](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [OpenDisplay firmware web installer](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [OpenDisplay configuration builder](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [OpenDisplay display tester](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Discord]** [OpenDisplay Community](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay Official Site](https://opendisplay.org)
- **[Website]** [OpenEPaperLink Official Site](https://openepaperlink.de/)

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
