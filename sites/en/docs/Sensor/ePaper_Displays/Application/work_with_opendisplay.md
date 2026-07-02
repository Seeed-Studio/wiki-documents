---
description: Drive Seeed ePaper hardware with OpenDisplay over Bluetooth Low Energy, including reTerminal E1001, E1002, E1003, XIAO ePaper Display Boards EN04 and EN05, and the ePaper Breakout Board with compatible XIAO modules.
title: Work with OpenDisplay
keywords:
  - ePaper display
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - EN05
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 07/02/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/EN04_opendisplay/
updatedAt: '2026-07-02'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with OpenDisplay

[OpenDisplay](https://opendisplay.org/) is an open-source ecosystem for driving ePaper displays over **Bluetooth Low Energy (BLE)**. A phone, computer, or Home Assistant host can connect to the display directly — no Wi-Fi access point is required.

This guide covers Seeed hardware that runs **OpenDisplay firmware** through the **[OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)**:

- **reTerminal E1001**, **E1002**, and **E1003**
- **XIAO ePaper Display Board EN04** and **EN05**
- **ePaper Breakout Board for Seeed Studio XIAO** with a compatible **XIAO** module (nRF52840, ESP32-S3, ESP32-C3, or ESP32-C6)

The workflow is the same for every path: **Toolbox → install and configure → upload images** with the [BLE Tester](https://opendisplay.org/firmware/display/index.html) or Home Assistant.

## Compatible Hardware

<Tabs groupId="opendisplay-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

The OpenDisplay Toolbox includes presets for **reTerminal E1001**, **reTerminal E1002**, and **reTerminal E1003**.

<div class="table-center">
	<table align="center">
		<tr>
			<th>reTerminal E1001</th>
			<th>reTerminal E1002</th>
			<th>reTerminal E1003</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
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
			<td align="center">7.5" monochrome, 800 × 480</td>
			<td align="center">7.3" Spectra 6 color, 800 × 480</td>
			<td align="center">10.3" monochrome, 1404 × 1872, touch</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001" target="_blank" rel="noopener noreferrer">Open in Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002" target="_blank" rel="noopener noreferrer">Open in Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003" target="_blank" rel="noopener noreferrer">Open in Toolbox</a></td>
		</tr>
	</table>
</div>

Use this path when you want to run OpenDisplay firmware on a finished reTerminal E Series device.

:::caution
Installing OpenDisplay firmware replaces the firmware currently running on the device. Keep a restore path ready by using the official reTerminal E-Series Firmware Hub or the firmware package recommended by your product Wiki.
:::

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
			<th>XIAO ePaper Display Board EN05</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center">24-pin / 50-pin FPC</td>
			<td align="center">24-pin FPC, power switch</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">Open EN04 in Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en05" target="_blank" rel="noopener noreferrer">Open EN05 in Toolbox</a></td>
		</tr>
	</table>
</div>

EN04 and EN05 are nRF52840-based ePaper driver boards. Pair either board with a supported panel using the matching OpenDisplay Toolbox preset.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO">

<div class="table-center">
	<table align="center">
		<tr>
			<th>ePaper Breakout Board for Seeed Studio XIAO</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Mount a compatible **XIAO** module on the breakout board, connect a supported 24-pin panel, then flash and configure through the OpenDisplay Toolbox.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO module</th>
			<th>Toolbox preset</th>
		</tr>
		<tr>
			<td>XIAO nRF52840 / nRF52840 Sense / Sense Plus</td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=nrf52840-xiao" target="_blank" rel="noopener noreferrer">nRF52840 breakout</a></td>
		</tr>
		<tr>
			<td>XIAO ESP32-S3 / ESP32-S3 Sense</td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=esp32s3-xiao" target="_blank" rel="noopener noreferrer">ESP32-S3 breakout</a></td>
		</tr>
		<tr>
			<td>XIAO ESP32-C3</td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=esp32c3-xiao" target="_blank" rel="noopener noreferrer">ESP32-C3 breakout</a></td>
		</tr>
		<tr>
			<td>XIAO ESP32-C3 with 7.5" monochrome panel</td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=xiao-75-c3" target="_blank" rel="noopener noreferrer">7.5" C3 breakout</a></td>
		</tr>
		<tr>
			<td>XIAO ESP32-C6</td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=esp32c6-xiao" target="_blank" rel="noopener noreferrer">ESP32-C6 breakout</a></td>
		</tr>
	</table>
</div>

:::info
OpenDisplay runs over **BLE**, so use a XIAO module with Bluetooth support. Other XIAO boards (for example SAMD21 or RP2040) work with the breakout board for Arduino projects, but are not supported by OpenDisplay firmware.
:::

</TabItem>
</Tabs>

## Why Use OpenDisplay?

- **BLE-first workflow** — configure and upload images without a Wi-Fi access point.
- **Browser-based Toolbox** — install firmware, select presets, configure devices, and upload test images from a supported browser.
- **Seeed hardware presets** — Toolbox includes reTerminal E1001/E1002/E1003, EN04, EN05, and breakout-board presets for XIAO nRF52840, ESP32-S3, ESP32-C3, and ESP32-C6.
- **Home Assistant** — core integration (`opendisplay.upload_image`) from HA 2026.4; optional HACS add-on for `drawcustom` layouts.
- **Open source** — [Firmware](https://github.com/OpenDisplay/Firmware), Toolbox, and [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay) Python SDK.

## Step 1: Hardware Setup

<Tabs groupId="opendisplay-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

**Step 1.** Connect the reTerminal E Series device to your computer with a USB-C data cable.

**Step 2.** Turn the device on and keep it close to the computer. The browser uses USB for firmware installation and BLE for configuration.

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

**Step 1.** Insert the ePaper panel FPC cable into the board connector and lock the latch.

:::tip
**EN04:** supports **24-pin** and **50-pin** panels. For the 50-pin connector, align the printed `1` and `50` marks on the FPC with the matching marks on the board.

**EN05:** uses a **24-pin** connector only. Align the printed pin marks on the FPC with the matching marks on the board before closing the latch.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2.** Connect the battery to the JST connector. Red wire goes to **+**, black wire goes to **-**. On **EN05**, turn the power switch **on**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3.** Connect the board to your computer with a USB-C data cable.

:::caution
Check battery polarity before powering the board. A battery connector with reversed polarity can damage the hardware.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO">

**Step 1.** Mount a compatible **XIAO** module on the ePaper Breakout Board (nRF52840, ESP32-S3, ESP32-C3, or ESP32-C6).

**Step 2.** Insert the ePaper panel FPC cable into the breakout board **24-pin** connector and lock the latch.

**Step 3.** Connect the XIAO to your computer with a USB-C data cable.

</TabItem>
</Tabs>

## Step 2: Install Firmware and Configure over BLE

:::info Browser requirements
Use **Chrome** or **Edge** on a desktop or laptop for USB firmware installation. **Firefox** does not support Web Serial or Web Bluetooth in the Toolbox.

On **iPhone or iPad**, use the [Bluefy](https://apps.apple.com/app/bluefy-web-ble-browser/id1492820575) browser for BLE configuration and image upload after firmware is installed — USB flashing is not available on iOS.
:::

**Step 1.** Open the matching Toolbox preset in Chrome or Edge:

- **reTerminal E1001** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- **reTerminal E1002** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- **reTerminal E1003** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)
- **EN04** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=en04)
- **EN05** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=en05)
- **ePaper Breakout Board + XIAO nRF52840** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=nrf52840-xiao)
- **ePaper Breakout Board + XIAO ESP32-S3** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=esp32s3-xiao)
- **ePaper Breakout Board + XIAO ESP32-C3** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=esp32c3-xiao)
- **ePaper Breakout Board + XIAO ESP32-C3 (7.5" panel)** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=xiao-75-c3)
- **ePaper Breakout Board + XIAO ESP32-C6** — [Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?driver=esp32c6-xiao)

**Step 2.** Confirm that the selected preset matches your device. On EN04, EN05, and breakout-board presets, also select the panel that matches your connected display.

**Step 3.** Click **Install firmware (USB)**.

**Step 4.** In the browser pairing dialog, select the USB serial device that appears when the display is connected.

:::tip
If the browser asks for bootloader mode on **EN04**, **EN05**, or a **XIAO** board, put the device into bootloader mode (on nRF52840 boards, double-press the reset button), then select the newly detected USB device.
:::

**Step 5.** Wait until the installer finishes and the device reboots.

**Step 6.** In the same Toolbox page, click **Configure over Bluetooth**.

**Step 7.** Select your device in the BLE pairing dialog (name starting with `OD`).

**Step 8.** Wait for the Toolbox to write the selected preset to the device.

**Step 9.** Confirm that the display refreshes and shows the OpenDisplay boot screen (device name starting with `OD`, QR code).

The device is now ready for image upload through the BLE Tester or Home Assistant.

## Step 3: Upload Images

OpenDisplay devices receive images through the [BLE Tester](https://opendisplay.org/firmware/display/index.html).

**Step 1.** Open the [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html).

**Step 2.** Click **Connect** and select your device from the BLE pairing dialog (name starting with `OD`).

**Step 3.** Click **Select Image** and choose a local image file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**Step 4.** Click **Upload Image**.

When the transfer finishes, the ePaper display refreshes and shows the uploaded image.

:::tip
Use an image size that matches your panel for the cleanest result:

- reTerminal E1001: 800 × 480 px
- reTerminal E1002: 800 × 480 px
- reTerminal E1003: 1404 × 1872 px
- 4.26" monochrome (breakout kit): 800 × 480 px
- 7.3" Spectra 6 panels: 800 × 480 px

See [Seeed panel compatibility](https://opendisplay.org/firmware/seeed_display_compatibility.html) for the full list.
:::

## Boot Screen, QR Code, and Encryption

After firmware installation and BLE configuration, the display refreshes to the **OpenDisplay boot screen**. You will see this screen again after every power-on or reboot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

The boot screen shows:

- **Device name** — starts with `OD` (this is the name you select in the BLE Tester, Toolbox, and Home Assistant)
- **KEY1** / **KEY2** — encryption key lines; when encryption is **disabled**, these show **not set**
- **QR code** — links to your device on the OpenDisplay website

### Scan the QR code

Scan the QR code on the display to open your personalized page at [opendisplay.org/l/](https://opendisplay.org/l/). From there you can jump straight to:

| Action | What it does |
| --- | --- |
| **Update display** | Opens the [BLE Tester](https://opendisplay.org/firmware/display/index.html) to send a test image |
| **Configure display** | Opens the [Toolbox](https://opendisplay.org/firmware/toolbox/index.html) to change settings or reflash firmware |
| **Add to HA** | Starts adding the device to Home Assistant |

The landing page also decodes device details from the QR code, including the **encryption key** when encryption is enabled.

### Enable BLE encryption (optional)

OpenDisplay ships with BLE encryption **disabled** by default, so you can connect from the BLE Tester or Home Assistant without entering a key. Enable encryption only if you want to require a key for configuration and image updates.

**Step 1.** Open the matching [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html) preset for your hardware and confirm the correct driver board, panel, and power options.

**Step 2.** In **More options**, move the **Encryption** slider to **Locked** (unlocked = no encryption; locked = generate a random key when you configure).

**Step 3.** Click **Configure over Bluetooth** and wait for the device to reboot.

**Step 4.** **Save your key** — after reboot, the boot screen shows the encryption key on the `KEY1:` / `KEY2:` lines. You can also scan the QR code on that screen; the [opendisplay.org/l/](https://opendisplay.org/l/) page displays the same key. **Copy setup link** under Advanced in the Toolbox is another way to keep a backup.

**Step 5.** From then on, the [BLE Tester](https://opendisplay.org/firmware/display/index.html), Toolbox, and Home Assistant will ask for this key when connecting to the display.

:::tip Lost your encryption key?
You can recover it without reconfiguring:

- **Power-cycle the display** (switch off and on, or disconnect and reconnect the battery). After the boot refresh, the key is shown again on the `KEY1:` / `KEY2:` lines.
- **Scan the QR code** on the boot screen. The [opendisplay.org/l/](https://opendisplay.org/l/) page decodes the key from the QR automatically.

If you cannot read the screen or QR code, reconfigure from the Toolbox with encryption **unlocked**, or reflash and set the device up again.
:::

## Home Assistant Integration

Home Assistant **2026.4 and later** includes a built-in **OpenDisplay** integration. It discovers OpenDisplay firmware devices over BLE and provides the `opendisplay.upload_image` action for sending images to the display.

### Prerequisites

- Home Assistant 2026.4 or later.
- A working Bluetooth path that supports **active** BLE connections.
- An OpenDisplay device powered on and within Bluetooth range.

Use either:

- **Bluetooth on the Home Assistant host** — built-in adapter (for example on Raspberry Pi with Home Assistant OS) or a USB Bluetooth dongle on the machine running Home Assistant.
- **[ESPHome Bluetooth Proxy](https://esphome.io/components/bluetooth_proxy.html)** — ESPHome firmware 2022.9.3 or later, placed near the display if the HA host is far away.

:::info
**Shelly Bluetooth proxies are not supported** for OpenDisplay image upload — they cannot maintain the active BLE connection this workflow needs. Use a local USB/built-in adapter or an ESPHome Bluetooth proxy instead.
:::

### Add the Device (core integration)

**Step 1.** Power on the display and keep it within range of your Home Assistant host or a Bluetooth proxy.

**Step 2.** In Home Assistant, go to **Settings > Devices & services**.

**Step 3.** After a short while, the display should appear automatically under **Discovered** (look for a device name starting with `OD`). Click **Add** on the OpenDisplay card and complete the setup.

**Not showing up?** Wait a minute with the display powered on, then try moving it **closer to a Bluetooth proxy** or to the HA host if you use a built-in or USB adapter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

See the [official OpenDisplay integration documentation](https://www.home-assistant.io/integrations/opendisplay/) for troubleshooting and encryption options.

### Upload an Image from Home Assistant

Store your image in Home Assistant's local media folder, then call `opendisplay.upload_image`.

```yaml
action: opendisplay.upload_image
data:
  device_id: "your_device_id"
  image:
    media_content_id: "media-source://media_source/local/photo.png"
    media_content_type: "image/png"
```

For scheduled updates, use the same action inside an automation.

```yaml
triggers:
  - trigger: time
    at: "08:00:00"
actions:
  - action: opendisplay.upload_image
    data:
      device_id: "your_device_id"
      image:
        media_content_id: "media-source://media_source/local/daily.png"
        media_content_type: "image/png"
```

:::tip
Use Home Assistant automations to generate or copy a new PNG before calling `opendisplay.upload_image`. The integration resizes and dithers the image for your panel, then sends it over BLE.
:::

### Optional: `drawcustom` layouts (HACS)

The **core** integration uploads prepared images. For dynamic dashboards built from text, icons, shapes, QR codes, plots, and progress bars, install the **[OpenDisplay HACS custom integration](https://github.com/OpenDisplay/Home_Assistant_Integration)** (version **3.0 or later**) and use the `drawcustom` service.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"3"}> OpenDisplay HACS</font></span></strong>
	</a>
</div>

In the Home Assistant visual editor, create an automation, add a time trigger, then add the OpenDisplay draw action and select the target device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## Build Your Own Integration (py-opendisplay)

Home Assistant and the browser tools are not the only way to drive a display. **[py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)** is the official Python library for talking to OpenDisplay firmware over BLE. Use it when you want to integrate a display into your own software instead of a fixed dashboard or web UI.

Typical uses:

- **Custom automations** — cron jobs, server scripts, or CI pipelines that push a new image on a schedule or when data changes
- **Dynamic content** — generate PNGs from templates, charts, calendars, or API data, then upload them programmatically
- **Prototyping** — scan for nearby `OD` devices, test connections, and debug uploads from a terminal before building a larger app
- **Bridging other systems** — connect MQTT, databases, photo libraries, or internal tools to an ePaper panel without Home Assistant

Install:

```bash
pip install py-opendisplay
```

The library handles BLE discovery, connection, image encoding for your panel type, and upload over the OpenDisplay protocol. See the [repository README](https://github.com/OpenDisplay/py-opendisplay) for Python examples and the `opendisplay` CLI (`scan`, `upload`, and other test commands).

## Bluetooth Proxy (optional)

If the display is far from your Home Assistant host, place an **ESPHome Bluetooth Proxy** near the display. A **USB Bluetooth dongle** or the **built-in adapter** on the HA host is enough when the display is nearby.

For setup instructions, use the [ESPHome Bluetooth Proxy documentation](https://esphome.io/components/bluetooth_proxy.html) with any supported ESP32 board (for example XIAO ESP32S3). Seeed also publishes a hardware-specific walkthrough for the [XIAO W5500 Ethernet Adapter](https://wiki.seeedstudio.com/esphome_xiao_w5500_ethernet_adapter/).

Keep the proxy close to the OpenDisplay device during image uploads.

## Bonus: 3D Printed Mount

For a 7.3" Spectra 6 panel, this community model provides an insert for the IKEA RODALM picture frame:

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Resources

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Compatibility]** [Seeed panel compatibility](https://opendisplay.org/firmware/seeed_display_compatibility.html)
- **[Firmware]** [OpenDisplay Firmware (GitHub)](https://github.com/OpenDisplay/Firmware)
- **[Python SDK]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[Home Assistant]** [Core OpenDisplay integration](https://www.home-assistant.io/integrations/opendisplay/)
- **[Home Assistant]** [HACS integration (`drawcustom`)](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Community]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)

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
