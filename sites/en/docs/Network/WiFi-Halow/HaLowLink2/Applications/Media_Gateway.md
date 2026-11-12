---
description: Wi-Fi HaLow Media Gateway application — smartphone media upload via XIAO ESP32-S3 and Wio-WM6180 over a Wi-Fi HaLow link to a HaLowLink 2 gateway and PC media console
title: Wi-Fi HaLow Media Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Media Gateway
  - XIAO ESP32-S3
  - Wio-WM6180
  - Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_media_gateway
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/halowlink2_media_gateway/
---

# Wi-Fi HaLow Media Gateway

<!-- Internal note: TOP-PRIORITY application page. Content sourced from the Seeed engineering demo write-up "Wi-Fi HaLow Media Gateway Demo.docx" (received 2026-11-12) — the end-to-end path was demonstrated by Seeed engineering and the figures below come from that demonstration. Firmware files, source code, and flashing instructions must NOT be documented until officially released and verified; those parts stay as internal comments, not visible TODOs. -->

## Introduction

This application turns a HaLowLink 2 plus a XIAO ESP32-S3 node into a **media gateway**: a standard smartphone sends photos, videos, and files to a PC over a long-range **Wi-Fi HaLow link**, without any HaLow support on the phone.

The demonstrated end-to-end path:

```text
Smartphone --2.4 GHz Wi-Fi--> XIAO ESP32-S3 + Wio-WM6180 --Wi-Fi HaLow--> HaLowLink 2 --Ethernet--> PC (Media Console)
```

The smartphone only needs ordinary 2.4 GHz Wi-Fi. The XIAO node bridges the two worlds: it hosts a 2.4 GHz hotspot for the phone and holds the HaLow link to the gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-setup.jpg" alt="HaLowLink 2 with antenna beside its retail box, and the XIAO ESP32-S3 plus Wio-WM6180 gateway node in front" width={600} height="auto" /></p>

## Hardware Requirements

| Product | SKU | Role in the demo |
|:----|:----|:----|
| HaLowLink 2 Wi-Fi HaLow Gateway | 100072966 | Wi-Fi HaLow Access Point; Ethernet bridge to the PC |
| Wi-Fi HaLow Transceiver for Seeed Studio XIAO (Wio-WM6180) | 109100041 | The HaLow radio on the gateway node |
| Seeed Studio XIAO ESP32-S3 | 113991114 | Gateway controller: hosts the 2.4 GHz SoftAP and relays media |

You also need:

- A smartphone with 2.4 GHz Wi-Fi (no HaLow support required)
- A Windows PC with an Ethernet port, running the Media Console
- Power supplies and cabling for all devices

## System Architecture

Five stages, each handing media to the next:

| Stage | Link | Notes |
|:-----:|:----:|:------|
| Smartphone → XIAO node | 2.4 GHz Wi-Fi | The phone uploads to the node's SoftAP through a browser page |
| XIAO ESP32-S3 → Wio-WM6180 | SPI | The controller streams received bytes to the HaLow radio |
| Wio-WM6180 → HaLowLink 2 | Wi-Fi HaLow (sub-1 GHz) | The long-range hop; the node joins the gateway's HaLow network |
| HaLowLink 2 → Windows PC | Ethernet | The gateway delivers the traffic to the Media Console |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-architecture.png" alt="System architecture of the Wi-Fi HaLow Media Gateway demo: smartphone, XIAO ESP32-S3, Wio-WM6180 transceiver, HaLowLink 2, Windows PC" width={800} height="auto" /></p>

## Set Up the Gateway Side

1. **HaLowLink 2.** Set up the gateway — antenna, power, computer connection — following [Preparation](../HaLowLink2_Getting_Started.md#preparation), then log in via [Access the Web UI](../HaLowLink2_Getting_Started.md#access-the-web-ui). The factory-default Router configuration is sufficient for a standalone demo; use [Access Point Mode](../HaLowLink2_Getting_Started.md#access-point-mode-recommended) to integrate with an existing LAN.
2. **XIAO node.** Assemble the XIAO ESP32-S3 with the Wio-WM6180 module following the [Wi-Fi HaLow Module for XIAO guide](../../wifi-halow-module-for-xiao.md), attach its antenna, and flash the Media Gateway firmware provided by Seeed Studio.
3. **PC.** Connect the Windows PC to the gateway's **LAN port** by Ethernet (demo network `192.168.12.x`), and start the Media Console server.

<!-- Pending official release (internal): XIAO firmware binary/source, flashing procedure, and the Media Console package. Do NOT fabricate download links, repository URLs, server ports, or flashing steps — insert the official ones here when the release package arrives. -->

After power-on the node operates automatically: the ESP32-S3 initializes the Wio-WM6180, associates with the HaLowLink 2 Access Point over Wi-Fi HaLow, and starts its 2.4 GHz SoftAP for the phone.

**Verify the HaLow link before running the demo:** on the gateway's Home page, open the **Access Point (HaLow)** card — the associated node appears with signal level and RX/TX rate, and the **Local Network** / **Network → Interfaces** pages show the LAN side that carries the traffic to the PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-ap-clients.png" alt="HaLowLink 2 web UI Access Point (HaLow) dialog listing the associated gateway node with signal level and RX/TX rate" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Gateway web UI: the Access Point (HaLow) card lists the associated gateway node with signal level and RX/TX rate — the link is up before any media moves.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-lan-interface.png" alt="HaLowLink 2 web UI Network Interfaces page showing the LAN interface used for the demo network" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Gateway web UI, Network → Interfaces: the LAN interface (192.168.12.x) carries the demo traffic to the PC.</em></p>

## Run the Demo

1. **Phone:** join the XIAO node's 2.4 GHz SoftAP, open the Media Gateway web page at `192.168.4.1` in the browser, choose a photo, video, or file, and start the upload.
2. **Node:** the ESP32-S3 receives the upload and streams it over the HaLow link — no intermediate storage involved.
3. **PC:** the Media Console receives, stores, and lists the file; open it there to preview, play, save, or download.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-phone-upload.png" alt="Smartphone browser page of the Media Gateway with a photo selected and the upload in progress" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Smartphone side: the browser-based upload page served by the XIAO node's SoftAP, with a photo selected and the transfer in progress.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-console.png" alt="PC Media Console page listing received photos, videos and files with preview and download actions" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>PC side: the Media Console lists every received file — photos, videos, documents — ready to preview, play, save, or download.</em></p>

How the node moves the data:

- **Dual-network gateway:** the SoftAP serves the phone side while the HaLow interface serves the PC side; default-route management keeps outbound media on the Wi-Fi HaLow path.
- **Streaming relay:** media is forwarded in **16 KB chunks** — the ESP32-S3 never buffers a complete file in memory, and no Base64 encoding is used.
- **File types:** JPG, PNG, MP4, and general files.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-node.png" alt="XIAO ESP32-S3 stacked with the Wio-WM6180 Wi-Fi HaLow module and antenna cable, the gateway node of the demo" width={600} height="auto" /></p>

## Demo Results

The complete end-to-end transfer was demonstrated by Seeed engineering:

- **Photo upload** — JPG / PNG transfer verified
- **Video transfer** — MP4 upload and playback verified
- **Generic files** — upload and download supported
- **PC Media Console** — received files previewed, played, saved, and downloaded
- **End-to-end connectivity** — smartphone-to-PC media transfer over Wi-Fi HaLow, with no HaLow support on the phone

<!-- Pending demo verification (internal): record the exact firmware versions, HaLow channel/bandwidth, and distance used in the demonstration once the engineering write-up is finalized; add per-stage troubleshooting entries observed in real runs. -->

## Troubleshooting

For gateway and HaLow link issues — web UI access, pairing, IP addressing, throughput — see [Getting Started → Troubleshooting](../HaLowLink2_Getting_Started.md#troubleshooting).

## Resources

- [Getting Started with Wi-Fi HaLow Module for XIAO](../../wifi-halow-module-for-xiao.md)
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](../../wifi-halow-mini-pcie-module.md)
- [HaLowLink 2 Getting Started](../HaLowLink2_Getting_Started.md)

<!-- Pending official release (internal): add source code / firmware links here once released. -->

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
