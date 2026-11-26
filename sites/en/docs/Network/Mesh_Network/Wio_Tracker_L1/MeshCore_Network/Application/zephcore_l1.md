---
description: Explore ZephCore, a Zephyr-based MeshCore firmware, on Seeed Studio LoRa mesh devices.
title: Zephyr Development
keywords:
  - ZephCore
  - Zephyr RTOS
  - MeshCore
  - LoRa mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png"
slug: /zephcore_getting_started
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 11/24/2026
  author: Michelle Huang
createdAt: 2026-11-24T00:00:00.000Z
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/zephcore_getting_started/
---

## How ZephCore relates to MeshCore

MeshCore lets LoRa devices exchange messages off-grid. [ZephCore project](https://github.com/liquidraver/ZephCore) is a community port of MeshCore built on the Zephyr operating system. You can try ZephCore on one device and send a message to a friend running MeshCore. Both radios need matching settings.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" alt="ZephCore GitHub project" width={800} height="auto" /></p>

| What changes for you? | MeshCore firmware | ZephCore firmware |
| --- | --- | --- |
| Firmware Platform | Arduino-based MeshCore firmware | A port built on Zephyr RTOS |
| LoRa Network | A MeshCore LoRa mesh | The same MeshCore mesh |
| Mobile APP | MeshCore app with a BLE Companion | Same app with a supported BLE Companion build |

## What is Zephyr?

Zephyr is an open-source real-time operating system for small devices. On a tracker, it can wake the processor when a button is pressed, read a GPS receiver, or update a display. ZephCore uses those services to run a mesh node.

## Choose your device

Choose **Companion** if you want to send messages from your phone over Bluetooth. Choose **Repeater** if you want the device to forward messages for nearby nodes.

| Device | Image | Board name in ZephCore |
| --- | --- | --- |
| [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="Wio Tracker L1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `wio_tracker_l1` |
| [SenseCAP MeshTracker X1](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) | <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="SenseCAP MeshTracker X1 in the MeshCore getting started guide" width={160} height="auto" /></p> | `meshtracker_x1` |
| [SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="SenseCAP T1000-E in the MeshCore getting started guide" width={160} height="auto" /></p> | `t1000_e` |
| [SenseCAP Solar Node P1 Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="SenseCAP Solar Node P1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `sensecap_solar` is the related board name |

Check which builds are available for your board in the [board list](https://github.com/liquidraver/ZephCore/blob/master/docs/supported_boards.md) and [firmware releases](https://github.com/liquidraver/ZephCore/releases).

## Flash ZephCore

Before switching firmware, save your radio settings and back up your node identity if you want to keep it. Switching firmware requires setting up the node again.

1. **Connect.** Plug the device into your computer with a USB data cable. Open the [ZephCore Web Flasher](https://zephcore.meshcore.dev/) in Chrome or Edge.
2. **Select.** Choose your exact board and role using the table above.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephcoreSeeedproduct.png" alt="Seeed Studio devices in the ZephCore Web Flasher" width={900} height="auto" /></p>

3. **Flash.** Follow the prompts to select the USB device and install the firmware. Wait for the flasher to report completion.
4. **Test.** Select the same regional radio preset as a nearby MeshCore node. For a Companion, pair in the MeshCore app, send a message, and ask for a reply. For a Repeater, check that a message reaches a second node through the relay.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorefirst.jpg" alt="ZephCore startup screen on the L1 Pro" width={550} height="auto" /></p>

## What can you try with ZephCore?

### Measure battery use

Listening for LoRa packets uses power even when nobody sends a message. On supported SX126x radios, ZephCore can listen in short windows to **reduce average current**. 

### Check the L1 Pro without taking out your phone

On the L1 Pro, use the joystick to browse the OLED status screens and check the battery level on the device. This is handy when the tracker is in your hand and your phone is packed away. On the screenless X1 and T1000-E, use the MeshCore app to view Companion status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephCore%20Menu.jpg" alt="ZephCore menu on the L1 Pro OLED" width={550} height="auto" /></p>

### Explore games on Zephyr

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcoregame.gif" alt="ZephCore game demonstration" width={480} height="auto" /></p>

## Build your first ZephCore firmware

Install Git, the Zephyr tools, and the SDK required by your ZephCore revision. [ZephCore build instructions](https://github.com/liquidraver/ZephCore)

From a new folder, download the project and its dependencies:

```bash
git clone https://github.com/liquidraver/ZephCore.git zephcore
west init -l zephcore
west update
```

From the same folder, build the L1 Pro firmware:

```bash
west build -b wio_tracker_l1 zephcore --pristine
```

Here, `west` is Zephyr’s command-line tool and `-b` selects the board. The command compiles the firmware on your computer. To try a first edit, change a label on the L1 Pro status screen, rebuild, and follow the project’s instructions to install your local build. The new label gives you a visible check that your own firmware is running.

As you explore the source, look for **Devicetree** to see how hardware is connected and **Kconfig** to see which features a build enables.

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>