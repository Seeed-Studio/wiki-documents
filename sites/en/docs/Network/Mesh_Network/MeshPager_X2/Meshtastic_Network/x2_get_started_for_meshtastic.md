---
description: Get started with SenseCAP MeshPager X2 using physical buttons, MUI and Base UI, Bluetooth pairing, messaging, GNSS, and microSD maps.
title: Get Started with MeshPager X2
keywords:
  - MeshPager X2
  - Meshtastic
slug: /x2_get_started_for_meshtastic
sidebar_position: 1
last_update:
  date: 11/03/2026
  author: Yves
createdAt: '2026-08-28'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/x2_get_started_for_meshtastic/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SenseCAP MeshPager X2 uses physical buttons to operate two Meshtastic interfaces: **MUI**, with graphical pages and maps, and **Base UI**, with information screens and menus.

For specifications, connectors, and pin assignments, see [SenseCAP MeshPager X2 Introduction](../x2_intro.md).

## Preparation

- MeshPager X2 with its specified battery and antennas installed.
- A regulated 5 V USB supply and a USB-C **data** cable.
- A phone with the [Meshtastic app](https://meshtastic.org/docs/software/) for Bluetooth setup.
- A computer if firmware installation or an update is needed.
- Optional: a microSD card and card reader for offline maps.

:::caution Before powering on
Connect a LoRa antenna matched to the operating band. Use the specified X2 battery, rated for **4.4 V charging**; a cell rated for a maximum charge voltage of 4.2 V is unsuitable.
:::

## Power On and Navigate

1. Connect USB-C power to charge the battery.
2. Use the **Power** key to start X2. To leave the charge-only screen, release Power, then hold it for approximately **5 seconds**.
3. Wait for Base UI or MUI to load.

With USB connected, shutting down may return X2 to the charge-only screen.

### Button Controls

| Key | Base UI | MUI |
| --- | --- | --- |
| Up / Down | Browse menu items, nodes, or message threads. From Home, open the message composer. | Highlight navigation icons or controls. |
| Left / Right | Switch information screens or move between keyboard keys. | Right enters a highlighted page. Within a page, switch tabs, adjust sliders, or move between keyboard keys. |
| Confirm (left orange key) | Open a screen's menu or select an item. | Activate the highlighted item. |
| Hold Confirm | Run the selected control's long-press action, where supported. | Run the selected control's long-press action, where supported. |
| Return | Cancel input or close a menu. | Close a keyboard, list, or dialog, or go back one level. |
| Power | Short press: screen off/wake. Hold approximately 4 seconds: shutdown. | Short press: screen off/wake. Hold approximately 4 seconds: shutdown. |

In this guide, **select** means highlight an item with the direction keys and press **Confirm**. **Confirm** is the orange key below the screen on the left, marked with a horizontal line. **Left/Right** refer to the direction pad.

## Flash Firmware

If firmware is already installed, continue to [Get Started](#get-started).

### Web Flasher

1. Connect X2 to a computer using a USB data cable.
2. Open the [Meshtastic Web Flasher](https://flasher.meshtastic.org/) in a browser that supports Web Serial, such as desktop Chrome or Edge.
3. Select **Seeed MeshPager X2** and choose the firmware version to install.
4. Follow the flasher prompts and keep USB connected until programming completes.

To force X2 into firmware flashing mode, press and hold **Power** and **Return** at the same time.

To flash a downloaded X2 `.factory.bin`, follow [Manual Firmware Installation with esptool](#manual-firmware-installation).

:::caution Use X2 firmware only
Use firmware for **Seeed MeshPager X2** (`seeed_meshpager_x2`) and follow the instructions supplied with the image. Enable full erase only when required, and back up your settings first.
:::

### Linux USB Access

Compare the serial ports before and after connecting X2:

```bash
ls /dev/ttyACM* /dev/ttyUSB* 2>/dev/null
```

If access is denied, check the detected port's permissions (replace `/dev/ttyACM0` as needed):

```bash
ls -l /dev/ttyACM0
```

On Ubuntu/Debian, if the port belongs to `dialout`, add your user to that group:

```bash
sudo usermod -aG dialout "$USER"
```

Log out and back in, then retry. Close other applications using the port. Recheck the port name after entering download mode.

## Get Started

### UI Switching

Choose the switching direction below. Reflashing is not required.

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142916.png" alt="Close-up of MeshPager X2 Base UI showing battery, node, satellite, and channel-utilization information" width={1276} height={1010} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Base UI</strong> — information screens and menus.</figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142835.png" alt="Close-up of MeshPager X2 MUI showing the Home page and navigation icons along the left edge" width={1546} height={1172} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>MUI</strong> — graphical pages and maps.</figcaption>
  </figure>
</div>

<Tabs groupId="x2-ui-switch">
<TabItem value="base-to-mui" label="Base UI to MUI">

1. Use Left/Right to reach **System**, then press Confirm.
2. Select **Reboot/Shutdown → Switch to MUI → Yes**.
3. Wait for X2 to restart into MUI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: select Switch to MUI in Base UI and confirm the restart">
    <source src="/img/meshpager-x2/x2-base-to-mui.mp4" type="video/mp4" />
    <a href="/img/meshpager-x2/x2-base-to-mui.mp4">Download the Base UI to MUI demonstration.</a>
  </video>
  <figcaption>Base UI to MUI. Video ends during restart.</figcaption>
</figure>

</TabItem>
<TabItem value="mui-to-base" label="MUI to Base UI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Open the menu.</strong> Highlight Settings on the navigation bar and press Right to enter it. Select Reboot / Shutdown and press Confirm.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key used to switch to Base UI" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Hold Confirm to switch UI.</strong> Use Left/Right to highlight the Bluetooth icon. <strong>Hold Confirm (the left orange key)</strong> until the <strong>Reboot into BaseUI?</strong> dialog appears, then release the key.</figcaption>
  </figure>
</div>

**3. Confirm the restart.** Select **OK** and wait for X2 to restart into Base UI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: hold Confirm on the MUI Bluetooth icon and confirm the switch to Base UI">
    <source src="/img/meshpager-x2/x2-mui-to-base.mp4" type="video/mp4" />
    <a href="/img/meshpager-x2/x2-mui-to-base.mp4">Download the MUI to Base UI demonstration.</a>
  </video>
  <figcaption>MUI to Base UI. Video ends during restart.</figcaption>
</figure>

</TabItem>
</Tabs>

### Phone Connection

**Step 1. Enable Bluetooth on X2.**

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Bluetooth is enabled after switching from MUI. To enable it manually, open **System**, press Confirm, and select **Bluetooth Toggle**. Restart if prompted. If Wi-Fi prevents Bluetooth pairing, disable Wi-Fi first.

</TabItem>
<TabItem value="mui" label="MUI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Open the menu.</strong> Enter Settings, select Reboot / Shutdown, and press Confirm.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Enter Bluetooth connection mode.</strong> Use Left/Right to highlight the Bluetooth icon, then short-press Confirm (the left orange key).</figcaption>
  </figure>
</div>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-145102.png" alt="MeshPager X2 MUI Bluetooth connection screen showing the Bluetooth icon, Programming mode label, and a six-digit pairing PIN" width={480} height={341} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption><strong>3. Wait for the pairing PIN.</strong> The Bluetooth connection screen displays Programming mode and a six-digit PIN.</figcaption>
</figure>

:::caution Return to MUI
After configuration, press **Confirm** to return to MUI.
:::

</TabItem>
</Tabs>

**Step 2. Pair in the Meshtastic app.**

1. Open the Meshtastic app with phone Bluetooth enabled and grant the requested Bluetooth or Nearby Devices permissions.
2. Select your X2 from the device list.
3. Enter the PIN shown on X2 or your configured fixed PIN.
4. Wait for the device configuration to load.

### Configure LoRa and Channels

Set the [LoRa region for your location](https://meshtastic.org/docs/configuration/region-by-country/) before messaging. The region must also match your device's RF hardware and antenna.

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

1. Use Left/Right to reach **LoRa**, then press Confirm.
2. Select **LoRa Region**, choose your region, and confirm any prompts.

</TabItem>
<TabItem value="mui" label="MUI">

1. Enter **Settings → Region**.
2. Choose your region and select **OK**. Restart if prompted.

</TabItem>
</Tabs>

To communicate with other nodes, match their **modem preset, frequency slot, channel name, and pre-shared key**. You can configure these settings or import your group's channel configuration in the phone app.

Transmit power and duty-cycle settings must comply with local regulations. See [Meshtastic LoRa configuration](https://meshtastic.org/docs/configuration/radio/lora/) for details.

### Send and Read Messages

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

**Compose a message**

1. Use Left/Right to reach the **Home** information screen.
2. Press Up or Down to open the message composer.
3. Select **[Select Destination]**, then choose a channel or node.
4. Select a canned message to send it, or **[-- Free Text --]** to open the keyboard.
5. Use the direction keys and Confirm to enter characters. Use the keyboard's backspace key to delete.
6. Select the keyboard's **Enter** key to send. **Return** cancels input.

If the composer is unavailable, enable the **Canned Message** module in the phone app and use firmware with on-screen keyboard support.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151656.png" alt="MeshPager X2 Base UI showing the Message sent to LongFast confirmation" width={480} height={390} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI: message sent to the LongFast channel.</figcaption>
</figure>

**Read messages**

Use Left/Right to reach the message screen, Up/Down to browse threads, and Confirm to open conversation actions.

</TabItem>
<TabItem value="mui" label="MUI">

**Start a direct message from the node list**

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-node-select.png" alt="X2 node list with red outlines around the Nodes icon, selected node 9028, direction Right, and the left orange Confirm key" width={940} height={1270} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Select a node.</strong> Highlight Nodes on the navigation bar and press Right to enter the list. Use Up/Down to select a node, then hold Confirm (the left orange key) until its conversation opens.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-open-keyboard.png" alt="X2 conversation with red outlines around recipient Meshtastic 9028, the keyboard icon, and the orange Confirm key" width={925} height={1215} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Open the keyboard.</strong> Check the recipient’s name at the top. Move focus to the text input, press Right to highlight the keyboard icon, then press Confirm to open it.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-type-send.png" alt="X2 on-screen keyboard with red outlines around the typed letter w, the keyboard, and the lower-right submit checkmark" width={825} height={1085} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Type and send.</strong> Use the direction keys to select characters and press Confirm to enter them. Select the lower-right checkmark and press Confirm to send.</figcaption>
  </figure>
</div>

<figure style={{maxWidth: 320, margin: '1.5rem auto', textAlign: 'center'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-message-sent.png" alt="X2 conversation after submission, with red outlines around recipient Meshtastic 9028 and the outgoing message w" width={770} height={1065} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>4. View the outgoing message.</strong> The keyboard closes and the outgoing message appears in the conversation. This example sends <code>w</code> to Meshtastic 9028.</figcaption>
</figure>

For a channel conversation, open **Channels** and select a channel. To return to an existing conversation, open **Messages** and select the chat.

**Return** closes the keyboard without sending; press it again to return to the chat list.

<h4 id="mute-and-unmute-a-channel">Mute and Unmute a Channel</h4>

1. Highlight **Channels** on the navigation bar and press **Right** to enter the channel list. Use Up/Down to highlight a configured channel, such as **LongTurbo** in this example.
2. **Hold Confirm** (the left orange key) until the bell icon changes to an **orange crossed-out bell**, then release the key. Channel notifications are now muted.
3. To unmute the same channel, **hold Confirm again** until the **white bell** returns, then release the key.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-select.png" alt="X2 Group Channels page with red outlines around the Channels icon, selected LongTurbo channel, and left orange Confirm key" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Select the channel.</strong> Hold the left orange Confirm key to change its mute state.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-muted.png" alt="Selected LongTurbo channel with an orange crossed-out bell outlined in red after holding Confirm" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Muted.</strong> The orange crossed-out bell indicates that channel notifications are muted.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-unmuted.png" alt="Selected LongTurbo channel with a white bell outlined in red after holding Confirm again" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Unmuted.</strong> Hold Confirm again to restore the white bell and enable channel notifications.</figcaption>
  </figure>
</div>

</TabItem>
</Tabs>

Direct messaging requires the devices to exchange node information and public keys first.

## Advanced Tutorial

### GNSS Positioning

Use X2 outdoors with a clear view of the sky and wait for a satellite fix.

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Use Left/Right to reach **Position**, press Confirm, and select **On/Off Toggle → Enabled**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151648.png" alt="MeshPager X2 Base UI Position screen showing satellite count, latitude, longitude, and altitude" width={480} height={407} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI position screen.</figcaption>
</figure>

</TabItem>
<TabItem value="mui" label="MUI">

Enter **Home** and highlight the **location/GPS control**. If GNSS is disabled, hold Confirm to enable it. Restart if prompted.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151629.png" alt="MeshPager X2 MUI Home page with the location control selected and coordinates, satellite count, and altitude displayed" width={480} height={385} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>MUI location status on the Home page.</figcaption>
</figure>

</TabItem>
</Tabs>

Use the phone app's **Position** settings to adjust update and broadcast intervals.

### Connect via Web Client

Use the [Meshtastic Web Client](https://client.meshtastic.org/) to read messages, send text, and configure your node from a browser. Use desktop **Chrome or Edge** with firmware that supports the selected connection method. Browser support varies; see the [Web Client compatibility guide](https://meshtastic.org/docs/software/web-client/).

Open the client and select **New Connection**, then choose a connection method:

<Tabs groupId="x2-web-connection">
<TabItem value="bluetooth" label="Bluetooth">

1. Enable Bluetooth on X2. In MUI, enter the Bluetooth connection mode described in [Phone Connection](#phone-connection).
2. Disconnect the phone app from X2 so the browser can connect.
3. Select **Bluetooth** in the Web Client and choose X2 in the browser's device picker. Complete pairing if prompted.
4. Wait for the node configuration to load, then open a channel or conversation.

</TabItem>
<TabItem value="serial" label="USB Serial">

1. Start X2 with Meshtastic running and connect it using a USB **data** cable. Firmware download mode is for flashing, not for using the Web Client.
2. Close the Web Flasher, serial monitors, and other applications using X2's serial port.
3. Select **Serial** in the Web Client and choose X2's USB port in the browser's device picker.
4. Wait for the node configuration to load, then open a channel or conversation.

The USB device may appear as **USB JTAG/serial debug unit**. If you reconnect X2 or change USB sockets, select its current port again.

</TabItem>
</Tabs>

### microSD and Offline Maps

Offline maps require **MUI** and a microSD card.

**Step 1. Prepare the card.**

1. Back up the card before formatting; formatting erases its contents. Prepare the card with **MBR partitioning and FAT32**.
2. Download a style ZIP from the [Meshtastic UI map starter kit](https://github.com/meshtastic/device-ui/tree/master/maps), such as `osm.zip` or `atlas.zip`.
3. Extract the archive to the card's root, preserving the folders inside it. Check the resulting path rather than adding another `maps` folder around the extracted files:

```text
microSD root/
└── maps/
    └── <style>/
        └── <zoom>/
            └── <x>/
                └── <y>.png
```

For example, a style named `osm` belongs under `/maps/osm/`. Avoid an extra folder level such as `/maps/maps/osm/`.

4. Safely eject the card after copying finishes.

:::tip Start with an overview map
The official starter-kit archives contain worldwide tiles at **zoom levels 1–6**. Zoom out to level 6 or lower to check that the map loads. For street-level detail, download tiles covering your area at higher zoom levels; the starter kit alone does not include those details. See the [map download instructions](https://github.com/meshtastic/device-ui/tree/master/maps#downloading-tiles).
:::

**Step 2. Insert the card and open the map.**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="MeshPager X2 microSD card slot with the outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>X2 microSD card slot.</figcaption>
</figure>

1. Shut down X2 and disconnect USB before inserting or removing the card.
2. Insert the microSD card fully, then start X2 and enter MUI.
3. For your current location, enable GNSS and wait for a fix outdoors.
4. Enter **Map** and select the style matching your tiles.

Downloaded tiles work without Wi-Fi or cellular service.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151638.png" alt="MeshPager X2 MUI Locations Map showing street tiles, location markers, zoom buttons, and navigation controls" width={600} height={455} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>MUI map with location markers, zoom, and navigation controls.</figcaption>
</figure>

**Step 3. Navigate with the buttons.**

| Map state | Operation |
| --- | --- |
| Browse | Use the direction keys to pan. |
| Open controls | Press Confirm. |
| Zoom or position | Use Up/Down to highlight a control, then Confirm. |
| Back to map | Press Return. |
| Back to navigation bar | Press Return again. |

### Wi-Fi

In MUI, open **Settings → Wi-Fi**, enter a **2.4 GHz** network's SSID and password, and apply the settings. An internet connection is required for online maps.

Bluetooth connection mode disables Wi-Fi. Re-enable it after returning to MUI if needed.

### Sensors, Display, and Audio

- **Display:** Adjust brightness and screen timeout in MUI Settings.
- **Sensors:** Enable supported sensor readings in the phone app's **Telemetry** settings.
- **Audio:** Adjust the notification and sound options available in your firmware. The microphone and speaker provide hardware for future voice-messaging updates.

## FAQ

### X2 Is Not Listed in the Phone App

1. In MUI, enter Bluetooth connection mode as described in [Phone Connection](#phone-connection). In Base UI, check that Bluetooth is enabled.
2. Enable Bluetooth on the phone and grant the Meshtastic app its Bluetooth or Nearby Devices permissions.
3. Disconnect another phone or browser that may already be connected to X2, then scan again.
4. If Wi-Fi prevents Bluetooth pairing, disable Wi-Fi and retry. Use the pairing PIN displayed on X2 or your configured fixed PIN.

### Wi-Fi Does Not Connect or Turns Off

- Use a **2.4 GHz** network and check the SSID and password, including capitalization.
- Apply the settings and check whether X2 obtains an IP address.
- Entering Bluetooth connection mode disables Wi-Fi. Re-enable Wi-Fi after returning to MUI when you need online maps.
- A connected Wi-Fi network also needs internet access for online map downloads.

### The Computer Cannot Find X2 or Connect to Its Serial Port

1. Use a USB **data** cable and check the computer's port list before and after connecting X2. A charging screen alone does not confirm a USB data connection.
2. Recheck the port after reconnecting X2, changing USB sockets, or entering download mode. On macOS, the `/dev/cu.usbmodem...` suffix can change.
3. Close other flashers, serial monitors, or browser connections using the port. On Linux, also check [USB access permissions](#linux-usb-access).
4. If the device is absent from the port list, try another data cable or connect directly to the computer to check the USB connection.
5. For firmware installation, enter flashing mode as described in [Flash Firmware](#flash-firmware). For the Web Client, run Meshtastic normally.

If a flasher reports **No serial data received**, it has not established communication with the bootloader. The message alone does not identify a Flash capacity problem or a defective device.

### GNSS Does Not Show a Position

- Enable GNSS using [GNSS Positioning](#gnss-positioning).
- Move outdoors with a clear view of the sky and allow time to acquire a fix. A first fix after a long period of inactivity can take longer than a subsequent fix.
- Check the satellite and location status on X2 before expecting its position to appear on the map.
- If the position stays fixed while you move, check the phone app's **Fixed Position** setting and the GNSS update interval. See [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/).

### The Offline Map Is Blank

1. Check the card's **MBR/FAT32** format and the `/maps/<style>/<zoom>/<x>/<y>.png` folder structure.
2. Select the same style in MUI as the style copied to the card.
3. Check that the downloaded tiles cover the location and zoom level being viewed. With only the official starter kit installed, zoom out to level **6 or lower**.
4. For your current location, wait for a GNSS fix. If the card is not detected, shut down X2 and disconnect USB before reseating it.

See [microSD and Offline Maps](#microsd-and-offline-maps) for preparation steps.

### Direct Messages Fail

1. Check that both nodes use compatible LoRa settings and are within radio range, directly or through the mesh. Try a shared channel message first.
2. Allow both nodes to exchange current node information and **public keys**, especially after a reset or firmware change. If available in your app, request or send the node's user information again.
3. Check the message's delivery status. A message appearing in the sender's conversation does not by itself confirm receipt by the other node.

Private keys stay on their own devices; they are not exchanged between users. See [Meshtastic Security configuration](https://meshtastic.org/docs/configuration/radio/security/) for public-key and private-key behavior.

### Manual Firmware Installation

Use [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32s3/) to flash the X2 **`.factory.bin`** at **`0x0`**. This combined image contains the bootloader, partition table, and application. An application-only `.bin` is not suitable for this procedure.

:::caution Full erase
The flashing command below erases all internal flash, including settings, channels, and saved data. Back up anything you need before continuing.
:::

1. Download the [X2 factory firmware 2.8.1.0046b50](https://files.seeedstudio.com/wiki/MeshPagerX2/firmware-seeed_meshpager_x2-2.8.1.0046b50.factory%20copy.bin). Rename the downloaded file from **`firmware-seeed_meshpager_x2-2.8.1.0046b50.factory copy.bin`** to **`x2.factory.bin`** and place it in a folder on your computer.
2. Install [Python 3.10 or later](https://www.python.org/downloads/).
3. Connect X2 to the computer using a USB data cable. Press and hold **Power** and **Return** at the same time to force X2 into firmware flashing mode.
4. Close other flashers and serial monitors. Open a terminal in the folder containing `x2.factory.bin` and follow the commands for your system.

<Tabs groupId="x2-manual-flash-os">
<TabItem value="windows" label="Windows">

In **PowerShell**, install esptool and list the serial ports:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade "esptool>=5,<6"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

Replace `COM5` with X2's port, then flash:

```powershell
.\.venv\Scripts\python.exe -m esptool --chip esp32s3 --port COM5 --baud 460800 write-flash --erase-all 0x0 x2.factory.bin
```

</TabItem>
<TabItem value="linux-macos" label="Linux / macOS">

Install esptool and list the serial ports:

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install --upgrade "esptool>=5,<6"
./.venv/bin/python -m serial.tools.list_ports
```

On Ubuntu/Debian, install `python3-venv` with `sudo apt install python3-venv` if the first command reports it is missing.

Replace `/dev/ttyACM0` with X2's port from the list. On macOS, use the matching `/dev/cu.usbmodem...` port.

```bash
./.venv/bin/python -m esptool --chip esp32s3 --port /dev/ttyACM0 --baud 460800 write-flash --erase-all 0x0 x2.factory.bin
```

If Linux reports a permission error, follow [Linux USB Access](#linux-usb-access).

</TabItem>
</Tabs>

Keep USB connected until esptool reports **`Hash of data verified`** and finishes. Restart X2 with both Power and Return released, then configure the LoRa region and channels again.

If connection fails, repeat step 3 and recheck the port. If writing repeatedly fails, retry with `--baud 115200`.

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Join the Seeed Studio Meshtastic community on Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio technical forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed Studio support"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio Discord community"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki discussion"></a>
</div>
