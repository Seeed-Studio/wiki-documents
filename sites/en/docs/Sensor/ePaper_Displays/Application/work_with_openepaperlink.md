---
description: Drive Seeed ePaper hardware with the OpenDisplay and OpenEPaperLink ecosystems over Bluetooth Low Energy, including reTerminal E1001, E1002, E1003, XIAO ePaper Display Board EN04, and the XIAO ePaper Breakout Board path.
title: Work with OpenEPaperLink / OpenDisplay
keywords:
  - ePaper display
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 10
last_update:
  date: 06/30/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/EN04_opendisplay/
updatedAt: '2026-06-30'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Work with OpenEPaperLink / OpenDisplay

[OpenDisplay](https://opendisplay.org/) and [OpenEPaperLink (OEPL)](https://openepaperlink.de/) are open-source ecosystems for driving ePaper displays over **Bluetooth Low Energy (BLE)**. A phone, computer, or Home Assistant host can connect to the display directly, so the basic workflow does not require an 802.15.4 access point.

This guide covers two Seeed hardware paths:

- **OpenDisplay Toolbox path** — recommended for ready-to-use OpenDisplay firmware on **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003**, and **XIAO ePaper Display Board EN04**.
- **OEPL_BLE path** — useful for a modular DIY setup with **ePaper Breakout Board for Seeed Studio XIAO** and a **XIAO nRF52840 series board**.

The user experience is similar in both paths: install firmware, configure the device over BLE, then upload an image. The tools and supported presets differ, so follow the tab that matches your hardware.

## Compatible Hardware

<Tabs groupId="oepl-hardware">
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

Use this path when you want to run OpenDisplay firmware directly on a finished reTerminal E Series device.

:::caution
Installing OpenDisplay firmware replaces the firmware currently running on the device. Keep a restore path ready by using the official reTerminal E-Series Firmware Hub or the firmware package recommended by your product Wiki.
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">Open EN04 in Toolbox</a></td>
		</tr>
	</table>
</div>

EN04 is an nRF52840-based ePaper driver board. It is the most direct DIY path for OpenDisplay when you want to pair a supported ePaper panel with a BLE-focused controller.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<div class="table-center">
	<table align="center">
		<tr>
			<th>4.26" Monochrome ePaper Display</th>
			<th>ePaper Breakout Board for Seeed Studio XIAO</th>
			<th>Seeed Studio XIAO nRF52840 Sense Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Use this path when you want a modular OEPL_BLE build. The XIAO nRF52840 series can drive this DIY kit, and the community OEPL workflow provides separate tools for configuration and image upload.

</TabItem>
</Tabs>

## Why Use OpenDisplay / OpenEPaperLink?

- **BLE-first workflow** — configure and upload images without a dedicated 802.15.4 access point.
- **Browser-based tools** — install firmware, select presets, configure devices, and upload images from a supported browser.
- **Seeed hardware presets** — OpenDisplay Toolbox includes presets for reTerminal E1001, E1002, E1003, and EN04.
- **Home Assistant support** — OpenDisplay devices can be added through Home Assistant's official OpenDisplay integration.
- **Open-source ecosystem** — firmware, tools, and integrations are developed in public repositories.

## Step 1: Hardware Setup

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

**Step 1.** Connect the reTerminal E Series device to your computer with a USB-C data cable.

**Step 2.** Turn the device on and keep it close to the computer. The browser will use USB for firmware installation and BLE for configuration.

**Step 3.** Match your hardware to the correct OpenDisplay Toolbox preset:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Device</th>
			<th>Toolbox Preset</th>
			<th>Display</th>
		</tr>
		<tr>
			<td>reTerminal E1001</td>
			<td><code>reterminal-e1001</code></td>
			<td>7.5" monochrome, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1002</td>
			<td><code>reterminal-e1002</code></td>
			<td>7.3" Spectra 6 color, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1003</td>
			<td><code>reterminal-e1003</code></td>
			<td>10.3" monochrome, 1404 × 1872</td>
		</tr>
	</table>
</div>

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Step 1.** Insert the ePaper panel FPC cable into the EN04 connector and lock the latch.

:::tip
For the 50-pin connector, align the printed `1` and `50` marks on the FPC with the matching marks on the board. On the EN04 kit shown below, the metal contact side of the FPC faces upward.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2.** Connect the battery to the JST connector. Red wire goes to **+**, black wire goes to **-**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3.** Connect the EN04 board to your computer with a USB-C data cable.

:::caution
Check battery polarity before powering the board. A battery connector with reversed polarity can damage the hardware.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**Step 1.** Mount the XIAO nRF52840 series board on the ePaper Breakout Board.

**Step 2.** Insert the ePaper panel FPC cable into the breakout board connector and lock the latch.

**Step 3.** Connect the XIAO to your computer with a USB-C data cable.

</TabItem>
</Tabs>

## Step 2: Install Firmware

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

OpenDisplay provides direct Toolbox presets for the reTerminal E Series.

**Step 1.** Open the matching Toolbox preset in Chrome or Edge:

- [reTerminal E1001 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- [reTerminal E1002 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- [reTerminal E1003 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)

**Step 2.** Confirm that the selected preset matches your device.

**Step 3.** Click **Install firmware (USB)**.

**Step 4.** In the browser pairing dialog, select the USB serial device that appears when the reTerminal is connected.

**Step 5.** Wait until the installer finishes and the device reboots.

After installation, continue with BLE configuration in the next step.

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

The current OpenDisplay flow uses the Toolbox for EN04 setup.

**Step 1.** Open [OpenDisplay Toolbox for EN04](https://opendisplay.org/firmware/toolbox/index.html?driver=en04) in Chrome or Edge.

**Step 2.** Select the panel that matches your connected ePaper display.

**Step 3.** Click **Install firmware (USB)** and follow the browser prompt.

**Step 4.** If the browser asks for bootloader mode, double-press the reset button on the EN04 board, then select the newly detected USB device.

**Step 5.** Wait for the firmware installation to finish.

The EN04 will reboot into OpenDisplay firmware and can then be configured over BLE.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

The XIAO nRF52840 + Breakout Board path uses **OEPL_BLE** firmware before the OEPL Config Builder can connect to it.

**Step 1.** Open the [OEPL_BLE release page](https://github.com/OpenEPaperLink/OEPL_BLE/releases) and download the firmware package that matches your XIAO nRF52840 board.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Download OEPL_BLE Firmware</font></span></strong>
	</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** Double-press the reset button on the XIAO. It appears as a USB drive.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** Drag the downloaded `.uf2` firmware file to the USB drive.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

The XIAO reboots and runs OEPL_BLE firmware on the next power cycle.

</TabItem>
</Tabs>

## Step 3: Configure the Device over BLE

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

**Step 1.** In the same OpenDisplay Toolbox page, click **Configure over Bluetooth**.

**Step 2.** Select your reTerminal device in the BLE pairing dialog.

**Step 3.** Wait for the Toolbox to write the selected preset to the device.

**Step 4.** Confirm that the display refreshes or shows the OpenDisplay startup/test image.

The device is now ready for image upload through OpenDisplay tools or Home Assistant.

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Step 1.** In the OpenDisplay Toolbox, keep **EN04** selected as the driver board and confirm the matching panel option.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**Step 2.** Click **Configure over Bluetooth**.

**Step 3.** Select the EN04 device in the BLE pairing dialog.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Step 4.** Wait until the Toolbox writes the configuration and the display refreshes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**Step 1.** Open the [OEPL Config Builder](https://config.openepaperlink.org/).

**Step 2.** Click **Connect** and select your XIAO nRF52840 device from the BLE pairing dialog.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** Use the builder panels to configure the host IC, power settings, display, LEDs, sensors, buses, and binary inputs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

**Step 4.** For the Seeed 4.26" monochrome ePaper setup, import the sample configuration below.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank" rel="noopener noreferrer">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" sample config (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

**Step 5.** Click **Write Config** to save the configuration to the MCU.

</TabItem>
</Tabs>

## Step 4: Upload Images

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

OpenDisplay devices can receive images through the browser display tool.

**Step 1.** Open the [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html).

**Step 2.** Click **Connect** and select your reTerminal device from the BLE pairing dialog.

**Step 3.** Click **Select Image** and choose a local image file.

**Step 4.** Click **Upload Image**.

When the transfer finishes, the ePaper display refreshes and shows the uploaded image.

:::tip
Use an image size that matches your panel for the cleanest result:

- reTerminal E1001: 800 × 480 px
- reTerminal E1002: 800 × 480 px
- reTerminal E1003: 1404 × 1872 px
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Step 1.** Open the [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html).

**Step 2.** Click **Connect** and select the EN04 device from the BLE pairing dialog.

**Step 3.** Click **Select Image** and choose a local image file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**Step 4.** Click **Upload Image**. The ePaper display refreshes after the transfer completes.

:::tip
Use an image size that matches your connected panel. For example, a 7.3" Spectra 6 panel uses 800 × 480 px.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

The OEPL Image Uploader is a separate BLE web tool for the OEPL_BLE path.

**Step 1.** Open the [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html).

**Step 2.** In **E-Paper prefix filter(s)**, enter `OEPL`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

**Step 3.** Connect to the XIAO device over BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**Step 4.** Click **Select File** and choose a local image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

**Step 5.** Click **Upload Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

When the uploader shows **Upload Complete**, the ePaper display has been refreshed.

</TabItem>
</Tabs>

## Home Assistant Integration

Home Assistant has an official **OpenDisplay** integration for OpenDisplay firmware devices. It communicates over BLE and provides the `opendisplay.upload_image` action for sending images to the display.

### Prerequisites

- Home Assistant 2026.4 or later.
- A working Bluetooth setup that supports active BLE connections.
- An OpenDisplay firmware device powered on and within Bluetooth range.

The following Bluetooth paths are suitable:

- Home Assistant Green or another Home Assistant host with supported Bluetooth hardware.
- ESPHome Bluetooth Proxy running ESPHome firmware 2022.9.3 or later.

:::info
Shelly Bluetooth proxies are useful for passive BLE sensors, but OpenDisplay image upload requires active BLE connections. Use a Home Assistant Bluetooth adapter or ESPHome Bluetooth Proxy for this workflow.
:::

### Add the Device

**Step 1.** In Home Assistant, go to **Settings > Devices & services**.

**Step 2.** If the device is discovered automatically, click **Add** on the OpenDisplay card.

**Step 3.** If it is not discovered automatically, click **Add Integration**, search for **OpenDisplay**, and follow the setup flow.

**Step 4.** Assign the device name and area.

After the device is added, Home Assistant can discover and connect to the OpenDisplay device over Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

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
Use Home Assistant automations to generate or copy a new PNG before calling `opendisplay.upload_image`. The OpenDisplay integration then handles the BLE transfer to the display.
:::

### Optional: Custom Draw Payloads

The OpenDisplay community also maintains a HACS integration with a `drawcustom` workflow for drawing text, icons, shapes, QR codes, images, plots, and progress bars directly from Home Assistant payloads.

Use this path when you specifically need draw-command layouts instead of uploading a prepared image.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay-org/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> OpenDisplay HACS Integration</font></span></strong>
	</a>
</div>

In the Home Assistant visual editor, create an automation, add a time trigger, then add the OpenDisplay draw action and select the target device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## Using ESPHome Bluetooth Proxy

An ESPHome Bluetooth Proxy extends Bluetooth coverage and improves reliability when the display is far from the Home Assistant host.

### Prerequisites

- An ESP32 device, such as XIAO ESP32S3.
- ESPHome installed in Home Assistant.
- A USB data cable for the first flash.

### Step-by-step Configuration

**Step 1.** Connect the ESP32 device to the computer or Home Assistant host used for flashing.

**Step 2.** Create a new ESPHome device and use a Bluetooth Proxy configuration similar to the example below.

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

logger:
  level: INFO

esp32_ble_tracker:
  scan_parameters:
    active: true

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

**Step 3.** Click **Install** in ESPHome and flash the firmware to the ESP32 device.

**Step 4.** After the ESP32 connects to Wi-Fi, add the discovered Bluetooth Proxy in Home Assistant.

**Step 5.** Keep the proxy close to the OpenDisplay device during image uploads.

When the proxy is working, Home Assistant shows the Bluetooth Proxy as connected and the ePaper display can be discovered through it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png" style={{width:700, height:'auto'}}/></div>

## Bonus: 3D Printed Mount

For EN04 with the 7.3" Spectra panel, this community model provides an insert for the IKEA RODALM picture frame:

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Resources

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Home Assistant]** [Official OpenDisplay Integration](https://www.home-assistant.io/integrations/opendisplay/)

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
