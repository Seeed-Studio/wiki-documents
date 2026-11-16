---
description: Get started with Ripple UI on the Wio Tracker L2 Pro. Learn how to flash firmware, configure MeshCore networks, send messages, use maps and GPS tracks, and unlock premium features.
title: Get Started with Ripple
keywords:
  - Ripple
  - Ripple UI
  - MeshCore
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png
slug: /get_started_with_ripple_l2_pro
sidebar_position: 2
last_update:
  date: 11/10/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## What Is Ripple?

Ripple UI is touchscreen firmware for the L2 Pro. It lets you add contacts, send and receive messages, view maps, and record your GPS tracks directly on the device, without using a phone for these tasks.

### How Does Ripple Relate to MeshCore?

MeshCore handles mesh communication. Ripple UI lets you use it directly on the L2 Pro touchscreen.

| Name | Purpose |
| --- | --- |
| MeshCore | LoRa mesh communication |
| Ripple UI firmware | Standalone touchscreen operation |
| MeshCore Companion firmware | Operation through a phone or other client |

Flash Ripple UI directly; no Companion installation is needed first.

:::note

The updated firmware uses MeshCore profiles and no longer offers Ripple in the New Network screen.

:::

### Who Is Ripple For?

- Users who want to chat directly on the device without keeping a phone connected.

- Outdoor users who want offline maps and a record of their own route.

- Users who want to switch between different MeshCore network profiles.

- Advanced users who need to manage MeshCore repeaters, Room Servers, or sensor nodes. Some management features require a paid unlock code.

## Features

- **Standalone messaging:** Send direct and group messages from the touchscreen.

- **Multiple network profiles:** Keep separate radio settings, identities, contacts, and preferences.

- **Customizable home screen:** Add shortcuts to contacts, channels, and settings.

- **Maps:** Load maps from microSD, drag to pan, and tap buttons to zoom.

- **GPS tracks:** Record your position and timestamps, then view your route on the map.

- **Screenshots:** Long-press the top-left corner of the screen to capture the current view.

- **Remote administration:** Unlock node management features with the target node's authorization.

## Flash Firmware

If your device already has the Ripple UI version described here, skip to **First-Time Setup**.

Two firmware variants are available:

- **Ripple GUI: data on SD card (-SD):** Stores configuration and data on a microSD card. Insert a FAT32-formatted card of 32 GB or less before use.

- **Ripple GUI (Internal):** Stores configuration and data in the device's internal flash.

**Step 1: Open the web flasher**

Visit the [Wio Tracker L2 Web Flasher](https://flasher.meshcore.io/wio-tracker-l2/) and select the Ripple UI firmware and storage variant for the L2. Use a desktop browser that supports serial access, such as Chrome or Edge.

Select `Seeed Studio Wio Tracker L2 Pro`, choose a Ripple GUI variant, and select the firmware version. The screenshot below shows v12.3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_flasher.png" alt="Select the L2 Pro, Ripple GUI variant, and firmware version in the web flasher" width={1000} height="auto" /></p>

**Step 2: Enter download mode manually**

Hold the `U/B` button while plugging in the USB data cable, then press `RST` to enter firmware download mode.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_enterdfu.gif" alt="Entering download mode using the U/B and RST buttons" width={400} height="auto" /></p>

**Step 3: Select the port and flash**

Click `Flash!`, select your device in the serial port dialog, and connect. Follow the on-screen instructions to complete flashing.

:::warning

The `Erase device` option shown above clears data and settings in internal flash, including the unlock state. Back up important data and keep your Unlock Code before erasing.

:::

**Step 4: Restart**

After flashing finishes, press `RST` to start Ripple UI.

:::tip

If you cannot proceed after clicking `Flash`, confirm that the device is in download mode. Also check the USB data cable, browser serial permissions, and whether another application is using the port.

:::

## First-Time Setup

Follow the touchscreen and button tutorials at first startup.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png" alt="Seeed Studio and MeshCore Ripple UI startup screens" width={700} height="auto" /></p>

### Hardware Buttons

Ripple UI combines touchscreen input with two hardware buttons:

- **Screen on/off (top button):** Press to wake the screen or turn it off. Turning off the screen does not power off the device.
- **ENTER (side U/B button):** Press to confirm a selection, save changes, or submit input when prompted.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_Button_Indication.webp" alt="L2 Pro hardware buttons: top button for screen on/off and side U/B button for ENTER" width={700} height="auto" /></p>

### Create a Network Profile

1. Complete the touchscreen and Select button tutorials shown at first startup.

2. Choose a radio preset appropriate for your region, or enter the frequency, spreading factor (SF), and other parameters used by your local network.

3. Name the profile using letters and numbers, without spaces.

4. Save the profile. If prompted, restart the device to apply the settings.

For a two-device test, use matching radio settings on both devices. Selecting the same preset is the simplest option. With custom settings, also check bandwidth, coding rate, and other parameters, rather than matching only frequency and SF.

### Set Your Name

1. Tap `L` on the left, open the current network profile, and select `Identity`.

2. Change the default name to something recognizable, such as `micha` or `michb`. Names can contain up to 31 characters.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ChangeDeviceName.png" alt="Open the network profile, select Identity, and change the device name" width={1000} height="auto" /></p>

## Explore the Interface

Tap `G`, `L`, or `M` on the left side of the screen to switch between the three home pages.

<Tabs>

<TabItem value="grid" label="G: Grid" default>

`G` is a customizable home screen with a 3 × 4 grid.

- Long-press an empty cell to add a shortcut to a contact, group channel, or setting.

- Long-press an existing shortcut to remove it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_G.jpg" alt="Ripple UI Grid home page" width={500} height="auto" /></p>

</TabItem>

<TabItem value="list" label="L: List">

`L` lists your network profiles, contacts, group channels, and `Discover`. Use this page to add contacts, edit your Identity, and open conversations.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_L.png" alt="Ripple UI List page" width={500} height="auto" /></p>

The screenshot shows names used during testing. Your list will depend on your profiles and contacts.

</TabItem>

<TabItem value="map" label="M: Map">

`M` displays the map, positions, and any loaded GPS track.

- Drag the screen to pan.

- Tap `+` or `−` to zoom. Pinch-to-zoom is not supported.

- Tap the location-follow button to keep the map centered on your position. The button turns orange when enabled, and the screen stays on.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_M.jpg" alt="Ripple UI map and zoom controls" width={500} height="auto" /></p>

</TabItem>

<TabItem value="extra" label="Extra">

Open the bottom-left home screen menu to access `Extra`, which contains device settings and tools.

- **Display:** Adjust font size, theme, animations, and accent color.

- **Wi-Fi:** Configure your connection and map downloads. Map downloading requires an unlock code.

- **Networks:** Create and manage network profiles.

- **GPS Config:** Configure GPS communication settings; defaults normally work for the L2 Pro.

- **Timezone:** Set the local UTC offset.

- **SX1262:** Check LoRa radio initialization status. `code=0` means success.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_Extra.jpg" alt="Ripple UI Extra system settings" width={500} height="auto" /></p>

</TabItem>

</Tabs>

### Title Bar and System Menu

| Area | Function |
| --- | --- |
| Tap the left side of the title bar | Opens `Switch To` to change network profiles |
| Long-press the top-left corner | Captures a screenshot |
| Middle of the title bar | Opens quick switches |
| Right side of the title bar | Opens GPS information |
| Bottom-left menu on the home screen | Opens system settings, including Display, Wi-Fi, Networks, and Timezone |

### Take a Screenshot

**Long-press the top-left corner of the screen** to capture the current view. You can use screenshots to share settings or report an issue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_screenshot.gif" alt="Long-pressing the top-left corner to take a screenshot" width={500} height="auto" /></p>

Captured screenshots are BMP files with date-and-time filenames, as shown below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_bmp_screenshot.png" alt="Captured BMP screenshots with date-and-time filenames" width={800} height="auto" /></p>

## Send Your First Message

### Make Your Devices Discoverable

1. Configure both devices with matching MeshCore radio settings.

2. Give each device a different `Identity` name.

3. Set `Advert` to `On` to allow identity advertisements.

4. Open `Discover` from the `L` page and wait for nearby nodes to appear.

To send an identity advertisement immediately, open the `Discover` menu:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_discover.bmp" alt="Discover menu with Scan Local, Send ID Local, and Send ID Broadcast" width={400} height="auto" /></p>

| Option | Function |
| --- | --- |
| `Send ID Local` | Sends a zero-hop identity advertisement to nearby devices |
| `Send ID Broadcast` | Broadcasts your identity to the mesh |
| `Scan Local` | Requests replies from nearby nodes that support discovery responses; commonly used to discover repeaters |

`Scan Local` does not list every device. A node must be within range and configured to respond.

### Add Contacts

1. Select the target node in `Discover`.

2. Open the top-right menu and select `Add to Contacts`.

3. Return to `L` and confirm that the contact is listed.

4. Repeat on the other device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_contact.png" alt="Discover nearby nodes, add a node to contacts, and view it in the contact list" width={1100} height="auto" /></p>

### Send a Direct Message

1. Open the contact.

2. Tap the input field and type a message.

3. Press `ENTER` to send and wait for acknowledgment.

4. Open the conversation on the other device and reply.

Direct messages wait for an acknowledgment (ACK) from the recipient. If sending fails, check radio settings and distance, then retry. If the previous route is no longer usable, select `Flood (reset)` under `Path` to find a new route.

## Maps and GPS Tracks

### Prepare Offline Maps

1. Prepare a FAT32-formatted microSD card of 32 GB or less.

2. Save raster map tiles using this folder structure on the card:

```text

/tiles/{zoom}/{x}/{y}.png

```

3. Insert the card, start the device, and open `M`. The device will need a reboot if the SD card is mounted or unmounted.

4. Pan to an area covered by your tiles and select an available zoom level.

`zoom` is the zoom level; `x` and `y` are tile coordinates. Locked devices render only **zoom levels 1–9**. More detailed zoom levels require an unlock code.

### Download Maps over Wi-Fi (Unlock Required)

1. Unlock the device using the instructions below.

2. Open `Wi-Fi` from the home screen system menu.

3. Enter your network name and password, and enable map downloading.

4. Press `ENTER` to save and restart when prompted.

5. Confirm that the Wi-Fi menu shows an orange connection indicator.

6. Open the map and pan or zoom to the required area. Tiles download on demand and are cached on the SD card.

### Set the Location Used in Advertisements

| Advert Location setting | Location used |
| --- | --- |
| `GPS` | The position obtained by the device's GPS |
| `Manual` | A fixed position selected with `Advert Loc` on the map |

To use a point selected on the map, first set `Advert Location` to `Manual`. In GPS mode, advertisements continue to use the GPS position.

## Unlock Premium Features

You can try basic messaging before purchasing an unlock code. Unlock the device when you need detailed maps, Wi-Fi map downloads, longer tracks, or advanced administration features.

### Find Your Device Serial Number

Find and open `Unlock` in the device menus. Record the **Serial number** shown on that screen. Use this complete serial number for your purchase, rather than the last few characters of a MAC address or a Pair Device PIN.

### Obtain an Unlock Code

Open Scott's [Ripple Ultra Unlock Code page](https://buymeacoffee.com/ripplebiz/e/249834), follow the purchase instructions, and provide the serial number shown on your device. Licenses are issued per device; enter only one device serial number for each license.

If your device came with an applicable unlock code, proceed to the next step.

### Enter the Code on Your Device

1. Once you receive the Unlock Code for your serial number, open `Unlock` again.

2. Enter the complete code and submit it.

3. After successful activation, the `Unlock` option disappears.

4. Open the premium feature you want to use and confirm that it is available.

Keep the code together with its device serial number. In our test, erasing flash with `erase_flash` and reinstalling firmware required entering the device's unlock code again.

### Premium Features

- **Automatic Telemetry:** Requests telemetry when you open a conversation with a direct path. Shows location, direction, and distance if the other node allows GPS telemetry.

- **Room Admin CLI:** Access the Room Server command line with its administrator password.

- **Repeater Admin:** Check repeater status and manage the node remotely.

- **Sensor Admin:** Access sensor commands, telemetry, and permission management.

- **More detailed map zoom:** Display map tiles above zoom level 9.

- **Wi-Fi Download:** Download map tiles on demand and cache them on the SD card.

- **Longer GPS tracks:** Record more than the 64 GPS points allowed on locked devices.

## Advanced Usage

### Create and Switch Network Profiles

1. Open the home screen system menu and select `Networks`.

2. Select `New Network`, configure the radio settings, and name the profile.

3. Save and restart if prompted.

4. Tap the left side of the title bar and select a profile in `Switch To`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_new_network.jpg" alt="Creating a MeshCore network profile in Networks" width={500} height="auto" /></p>

Each profile has its own identity, contacts, and preferences. Opening a contact belonging to another profile can prompt you to switch profiles. This prompt does not indicate that the device has detected which network the other node is currently using.

## FAQ

### SX1262 status code

This screen shows the RadioLib return code from LoRa radio initialization. `0` means initialization succeeded. The screen is intended for radio diagnostics.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_lora_normal.jpg" alt="SX1262 initialization code=0 indicates success" width={500} height="auto" /></p>

### Discover Other device

- Confirm that both devices use compatible MeshCore profiles with matching radio settings.

- Enable Advert on the other device, or ask it to send `Send ID Local`.

- Start with a short-distance test in an open area.

- `Scan Local` only lists nodes that respond to discovery requests; it does not replace identity advertisements from all devices.

### Why is the map blank

Check the SD card format, tile paths, and whether tiles exist for the displayed area. On a locked device, also check that the zoom level is within 1–9. A valid GPS position does not mean map tiles have been downloaded.

## Resources

- [Ripple Project and Developer Updates](https://buymeacoffee.com/ripplebiz)

- [Ripple Ultra Unlock Code](https://buymeacoffee.com/ripplebiz/e/249834)

- [MeshCore Project and Documentation](https://github.com/meshcore-dev/MeshCore)

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
