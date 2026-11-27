---
description: This guide explains why long text takes more airtime on LoRa and how to send it with OSHI Mesh on two SenseCAP T1000-E trackers.
title: Long Text Transmission
draft: true
keywords:
  - Meshtastic
  - Long Text Transmission
  - OSHI Mesh
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png
slug: /meshtastic_long_text_transmission
sku: 114993369
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/meshtastic_long_text_transmission/
---

## Introduction

### Short vs. Long Text in LoRa

*Airtime* is the time a radio spends transmitting. More packets generally use more airtime at the same radio settings. Higher spreading factors or narrower bandwidths can make each packet take longer.

| | Short text | Long text with OSHI Mesh |
| --- | --- | --- |
| **Packets sent** | One data packet| Several data packets, plus a delivery receipt and any requests or retries for missing fragments. |
| **Relay traffic** | Each relay can forward the single data packet. | Relays can forward each fragment, adding transmissions across the mesh. |
| **Impact on other traffic** | Less airtime| More airtime. On a busy channel, overlapping transmissions can cause packet loss and delays. |
| **Conditions for delivery** | One data packet needs to arrive. | All fragments need to arrive. A stable link and enough airtime for retries help. |


### Message Length Limitation in LoRa

A standard Meshtastic text message fits roughly **230 bytes** in one packet. Emoji and many non-English characters use several bytes each.

[OSHI Mesh](https://github.com/Lastoneparis/oshi-mesh-protocol) adds long-text support in three steps.

1. **Split.** The sender breaks the message into numbered fragments and carries them in Meshtastic-compatible packets.
2. **Fill in gaps.** The receiver requests missing fragments so the sender can resend those pieces.
3. **Reassemble and confirm.** The receiving node puts the fragments in order and can send a receipt for the full message.

![Long text is split into packets, the missing packet is resent over LoRa, and the message is reassembled](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Deliverylogic.png)

### OSHI Mesh

![OSHI Messenger website and app preview](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png)

- **OSHI Mesh** is OSHI's [open-source radio firmware](https://github.com/Lastoneparis/oshi-mesh-firmware). It uses Meshtastic-compatible LoRa settings, channels, and keys. Nodes running either firmware can relay the other's traffic when configured to do so. Long messages, delivery receipts, and store and forward use the OSHI Mesh Protocol.
- **When to use it.** Send occasional multi-paragraph updates, such as route directions or a field handover, when cellular service is unavailable and you want to confirm the full text arrived. With a supported app build, you can send messages of several thousand characters. The exact length depends on how many bytes the text uses.

## Flash OSHI Mesh on the T1000-E

![SenseCAP T1000-E, magnetic data cable, and OSHI Mesh flash page](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/OshiT1000-E.png)

If both trackers already run OSHI Mesh firmware `2.8.1.fda175c`, you can move on to app setup using the same firmware.

1. Download the **SenseCAP T1000-E** UF2 file from **Boards that install a different way**. [OSHI Mesh flash page](https://oshi-messenger.com/lora/flash/)
2. **Enter DFU mode manually.** Plug the USB end of the magnetic data cable into your computer. Hold down the tracker's button and, without releasing it, quickly attach the magnetic connector to the tracker twice. The green LED stays on and the **T1000-E** drive appears. [Click here](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-1-enter-dfu-mode)  to see detailed instructions for DFU mode.

   ![T1000-E magnetic data cable and DFU drive in Finder](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/T1000-EDFU.png)

3. Copy the UF2 file to the **T1000-E** drive. The tracker restarts automatically. Repeat for the second tracker.

If you already have the Meshtastic CLI installed, you can enter DFU mode with the tracker connected over USB. Replace `<YOUR_PORT>` with its serial port.

```bash
meshtastic --port <YOUR_PORT> --enter-dfu
```

## Set Up the App and Send a Long Message

**App requirement.** Use two Android phones with an OSHI build that supports long LoRa messages on OSHI Mesh.

1. On each phone, open **Settings → LoRa Node** in OSHI and pair one tracker. If prompted for the default PIN, enter `123456`.
2. Set both trackers to the same LoRa region for your location and use the default channel. 
3. Exchange a short message so each phone learns the other contact's node. This lets the sender receive a delivery receipt for the long message.
4. Send a few paragraphs. Watch the status progress from **Queued** to **Sent** to **Delivered**. On the second phone, check that all paragraphs appear together and in order.

## What to Expect

- **Delivery time in the app.** Allow about **one to two minutes** for a long message in the close-range setup above. Message size, radio settings, channel traffic, relays, and retries can affect the wait.
- **Queued messages on EU_868.** The firmware tracks long-message airtime over a rolling one-hour window to stay within the regional duty-cycle limit. After several long sends, a new message may stay **Queued** until more airtime is available. For the demo, send one long message at a time and wait a few minutes between sends.

## Store and Forward

An OSHI node can hold a message for up to **72 hours** if the offline contact's node is already known. Keep the node holding the message powered so it can forward the message when the contact's node comes back online and is reachable. [OSHI Mesh feature overview](https://oshi-messenger.com/lora/why-oshi-mesh)

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