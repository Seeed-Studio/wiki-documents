---
description: Getting Started with the OpenDisplay 7.3" Color Kit — a ready-to-use Spectra 6 color e-paper display co-developed by Seeed Studio and OpenDisplay
title: Getting Started with OpenDisplay 7.3" Color Kit
sidebar_position: 2
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp
slug: /opendisplay_73_color_kit
sku: 100091514
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/opendisplay_73_color_kit/
updatedAt: '2026-10-22'
---

# Getting Started with OpenDisplay 7.3" Color Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-7-3-Color-Kit-p-7031.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

The OpenDisplay 7.3" Color Kit is a ready-to-use e-paper display co-developed by Seeed Studio and OpenDisplay. It ships **fully assembled** with a 7.3-inch 800×480 Spectra 6 color panel, a Seeed [XIAO ePaper Display Board EN04](https://wiki.seeedstudio.com/epaper_EN04/) (XIAO nRF52840 Plus), a 2000 mAh battery, and a 3D-printed case — firmware already installed.

Use it over **Bluetooth Low Energy** from your browser or Home Assistant. No Wi-Fi is required. The radio stays in a low-power listen mode, so you can send a new image whenever the display is on and in range (no deep-sleep wake window). With roughly one update every two hours, estimate about **one year** between charges.

### What you need

- The kit, powered on and in Bluetooth range
- A phone or computer with Bluetooth
- Chrome or Edge (desktop/Android), or Bluefy on iPhone/iPad

## At a glance

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>MCU</th>
      <td>Seeed <a href="https://wiki.seeedstudio.com/epaper_EN04/">XIAO ePaper Display Board EN04</a> (XIAO nRF52840 Plus)</td>
    </tr>
    <tr>
      <th>Display</th>
      <td>7.3-inch Spectra 6 color ePaper</td>
    </tr>
    <tr>
      <th>Colors</th>
      <td>Black, white, yellow, red, blue, green (dithered; not full RGB)</td>
    </tr>
    <tr>
      <th>Resolution</th>
      <td>800 × 480</td>
    </tr>
    <tr>
      <th>Battery</th>
      <td>2000 mAh rechargeable Li-ion</td>
    </tr>
    <tr>
      <th>Connectivity</th>
      <td>Bluetooth Low Energy only (no Wi-Fi)</td>
    </tr>
    <tr>
      <th>Enclosure</th>
      <td>3D-printed case included</td>
    </tr>
  </tbody>
</table>

## Power on

1. Unbox the kit and switch it on.
2. Wait for the boot refresh — usually about **15–20 seconds** for Spectra 6. Flickering is normal.
3. When finished, the boot screen shows your device name (starts with **OD**), **KEY1:** / **KEY2:**, and a QR code.

Encryption ships **off**, so the key lines show **not set**. You do not need a key for normal use out of the box.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.png" style={{width:800, height:'auto'}}/></div>

## Send your first image

Scan the QR code on the display. It opens a personalized page at [opendisplay.org](https://opendisplay.org/l/) with shortcuts for this device:

<table>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Send an image</th>
      <td>Opens the BLE Tester to send a test image from your browser</td>
    </tr>
    <tr>
      <th>Add to Home Assistant</th>
      <td>Starts adding the device to Home Assistant</td>
    </tr>
    <tr>
      <th>Advanced → Toolbox</th>
      <td>Change settings or reflash firmware (developers / recovery)</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Landing_page.png" style={{width:600, height:'auto'}}/></div>

### Browser support

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome or Edge (desktop, Android)</th>
      <td>Supported</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>Use Bluefy (App Store id1492822055)</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Not supported</td>
    </tr>
  </tbody>
</table>

From the landing page choose **Send an image** (or open [opendisplay.org](https://opendisplay.org/firmware/display/index.html)). Click **Connect**, pick your device in the browser list (name starts with **OD** — e.g. **ODCA6020**), then choose a photo or draw and tap **Send to device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

**Done when: the image appears on the e-paper display.**

## Home Assistant (optional)

This kit uses **BLE only**. Home Assistant needs a working Bluetooth path:

- **Bluetooth on the Home Assistant host** — built-in adapter or USB dongle
- **ESPHome Bluetooth proxy** — if the display is far from the HA host (must support active / connectable connections)

:::note
Shelly BLE proxies are **not supported** — they cannot establish the active connection this display needs. Use a local adapter or an ESPHome proxy.
:::

Power on the display within Bluetooth range. Home Assistant should discover it automatically — look for a name starting with **OD** under **Settings → Devices & Services → Discovered**, then tap **Add** and **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

The device page shows battery, buttons, firmware status, and display content. More detail: [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## Going further

### Enable encryption

Encryption ships **off**. In the Toolbox → More options, set Encryption to **Locked**, then **Configure over Bluetooth**. After reboot, the key appears on **KEY1:** / **KEY2:** and on the QR landing page. Power-cycle the display to show the key again if you lose it.

### Reflash or recover

1. Open Toolbox — 7.3" Color Kit preset: [Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
2. **Install firmware (USB)** — Chrome or Edge on a desktop/laptop
3. **Configure over Bluetooth** — write settings back after flashing

### py-opendisplay

For custom Python projects, install with pip install py-opendisplay — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### Battery life

With the included 2000 mAh battery and roughly one update every two hours, estimate about **one year** between charges under typical use. Actual runtime depends on update frequency, image size, and temperature.

Model your schedule at [Battery calculator](https://opendisplay.org/firmware/battery/index.html) (select 7.3" Color Kit / nRF52840 / 2000 mAh).

## Resources

- **[Web]** [OpenDisplay website](https://opendisplay.org)
- **[Tool]** [Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [In-depth OpenDisplay guide](https://wiki.seeedstudio.com/EN04_opendisplay/)
- **[ZIP]** [3D-Printed Case Files](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Resources/OpenDisplay_7.3_Color_Kit_3D_Files.zip)
- **[UF2]** [Factory Firmware (7.3" Color Kit)](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Resources/OpenDisplay_7.3_Color_Kit_Factory_Firmware.uf2)

## Troubleshooting

**Q1: Need the boot screen or QR code again.**

*   **Power-cycle the display**: Switch off, wait 10 seconds, then switch on again. The boot screen — with device name, KEY1:/KEY2: lines, and QR code — only shows after a full power-on refresh.
*   **Wait for the refresh to finish**: A Spectra 6 color boot refresh takes about 15–20 seconds. Flickering and intermediate color patterns are normal. Do not turn off the display during refresh.
*   **Scan the QR code again** or read KEY1:/KEY2: directly from the screen if you need the encryption key.
*   **No reflash or reconfigure needed** — the boot screen always reappears after a power cycle.
*   **Note**: The display allows only one active Bluetooth connection at a time. If another device is still connected, disconnect it first.

**Q2: The display won't turn on or is unresponsive.**

*   **Charge over USB first**: A very low battery can look like the device is dead or stuck. Connect the kit to a USB power source, charge for a while, then retry.
*   **After charging**: Switch off, wait 10 seconds, switch on, and wait for the boot screen.
*   **Confirm the power switch is on**: Slide the switch firmly to the ON position.
*   **Check the battery connector**: Open the case and confirm the battery JST connector is fully seated. The red wire should face the "+" marking and the black wire should face the "−" marking. A reversed connector can damage the board.
*   **Make sure no other device is still holding an open BLE connection** — the display only supports one active connection at a time.

**Q3: Home Assistant does not discover the display.**

*   **Check the integration version**: Home Assistant 2026.4 and later include the built-in OpenDisplay integration. For older versions or the drawcustom workflow, install the HACS custom integration (copy the `opendisplay` folder into `custom_components/`), then restart Home Assistant.
*   **Disconnect other Bluetooth clients first**: Close BLE Tester, browser tabs, and Bluefy — the display allows only one active BLE connection at a time. If another device is connected, Home Assistant will not be able to discover or connect.
*   **Check the Bluetooth path**: Use a built-in or USB Bluetooth adapter on the Home Assistant host, or an ESPHome Bluetooth proxy that supports active / connectable connections. Shelly BLE proxies are not supported — they cannot establish the active connection this display needs.
*   **Still missing?** Wait a minute, move the display closer, and check Settings → Devices & Services → Discovered for a name starting with "OD".
*   **Add manually**: If the display is not discovered automatically, go to Settings → Devices & Services, click Add Integration, search for "OpenDisplay", and follow the setup flow.

**Q4: My browser cannot find or connect to the display.**

*   **Use a supported browser**: Web Bluetooth works in Chrome and Edge (desktop and Android). On iPhone or iPad, use the Bluefy browser (App Store id 1492822055). Firefox and Safari (desktop) do not support Web Bluetooth.
*   **Turn on Bluetooth**: Make sure Bluetooth is enabled on your phone or computer. On Android, also turn on Location — Chrome needs it for BLE scanning.
*   **Hold the device close to the kit**.
*   **Disconnect all other clients first**: The display allows only one active BLE connection. If Home Assistant or another browser is already connected, disconnect it before trying again.
*   **Pick the device name starting with "OD"** (e.g. OD592B4A).
*   **If it's not appearing**: Press a button on the display once, or power-cycle it (off 10 seconds → on) and retry after the boot refresh finishes.
*   **If nothing responds**: Charge the kit over USB first.

**Q5: Image upload fails or times out.**

*   **Confirm the display is on and in range**: The kit stays BLE-ready with no deep-sleep wake window, but it must be powered on and within Bluetooth range.
*   **Disconnect every other client**: Only one active BLE connection at a time. Reconnect from the BLE Tester alone and try again.
*   **If encryption is on**: Enter the key from the boot screen or the QR landing page.
*   **Try a smaller image**, or wait for the full refresh to complete before sending the next one.
*   **Device stopped responding mid-session**: Charge over USB, then power-cycle (off 10 seconds → on).

**Q6: The encryption key is rejected or shows "not set".**

*   **Factory kits ship with encryption off**: KEY1: and KEY2: show "not set" out of the box — leave the key field blank.
*   **Enabled encryption but lost the key?** Power-cycle the display (off 10 seconds → on) — the key appears on the boot screen after restart. You can also scan the QR code; the landing page shows the same key.
*   **Lost the key and cannot read the screen**: Open Toolbox → set Encryption to Unlocked → Configure over Bluetooth. This removes encryption so you can set it up again. If that doesn't work, reflash the firmware and reconfigure.

**Q7: The screen looks stuck, shows wrong colors, or stays blank after a send.**

*   **Wait for the refresh to finish**: Do not power off the display mid-update. A full Spectra 6 refresh takes about 15–20 seconds.
*   **Mind the color rendering**: Images are dithered to six colors (not full RGB) — text and simple graphics look best; photos show a grainy pattern. This is expected behavior, not a fault.
*   **Power off for 10 seconds → on** to return to the boot screen, then confirm BLE responds.
*   **Check for other connected devices**: If another device is connected at the same time, disconnect it and retry with a single client.
*   **Still won't boot or connect?** Charge over USB first, then power-cycle again.
*   **Reflash the firmware**: If the display remains stuck or blank after all of the above, reflash via USB using the Toolbox (see "Reflash or recover" in the Going further section).

## Tech Support & Product Discussion

*Co-developed by Seeed Studio and OpenDisplay.*

Thank you for choosing our products! We are here to provide you with support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
