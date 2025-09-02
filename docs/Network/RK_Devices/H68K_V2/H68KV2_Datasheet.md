---
description: LinkStar-V2 manual instuction
title: LinkStar-V2 Introduction
keywords:
- Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /h68kv2_datasheet
last_update:
  date: 04/18/2024
  author: Parker
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

LinkStar-H68K-V2 router equips quad-core Cortex-A55 RK3568 chip, featuring 4 Ethernet interfaces for dual-2.5G and dual-1G, along with Wi-Fi 6 technology, while providing high storage capacity and media player functionality, functioning recommended for indoor use. Compared with the first H68K generation, it not only has better communication and heat dissipation effect, but also the interface layout is more reasonable and convenient. In this wiki we will show you the hardware overview and how to quickly get started with LinkStar-V2.

## Hardware Overview

This is the hardware overview of LinkStar - H68K - V2, we here will present you the details about each component.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### Power Supply

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Operating Voltage</th>
      <th className="tg-0lax">Supports 5V-20V wide voltage DC input, power requirement >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">DC Power Adapter</td>
      <td className="tg-0lax">12V DC interface power supply canceled</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C power supply</span></td>
      <td className="tg-0lax">Support CC line PD fast charging</td>
    </tr>
  </tbody>
</table>

### Ethernet Networking

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### Chip Performace

RK3568 is a 4K flagship SoC chip with high cost performance owned by SWICK. It adopts ARM architecture and integrates a quad-core Cortex-A55 with a separate NEON coprocessor to support 4K video decoding and 3K video encoding. Many powerful embedded hardware engines provide optimized performance for high-end applications.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Supprot 1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Supprot 1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Supprot 2.5G/1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Supprot 2.5G/1G Ethernet with RTL8211F PHY Chip</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Support CC line PD fast charging and 5V-20V wide voltage DC input</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI</td>
    <td class="tg-0pky">MT7921 Module with PCIE2.0 interface</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 for 4K output, both audio and visual</td>
  </tr>
  <tr>
    <td class="tg-0pky">Infrared Receiver</td>
    <td class="tg-0pky">IRM-3638 Model</td>
  </tr>
  <tr>
    <td class="tg-0pky">TF card slot</td>
    <td class="tg-0pky">SDIO signal SDMMC0</td>
  </tr>
</tbody>
</table>

### Indicator Light

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/06.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">Power</th>
    <th class="tg-y698">Hard Disk indicator</th>
    <th class="tg-y698">ETH indicator</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Operating/Active indicator</td>
    <td class="tg-0pky">Hard Disk connection instructions</td>
    <td class="tg-0pky">Network connection indication</td>
  </tr>
</tbody>
</table>

## Quick Start

With pre-installed OpenWRT system, you can directly use LinkStar once you received the package.

### Preparative

- LinkStar-H68K-V2
- Network cable x2
- Support CC line PD fast charging power adaptor

### Installation

- **Step 1**. ETH0 is the WAN port and the other network ports are LAN ports. If you want to manage LinkStar-V2's OpenWRT via a network cable, then connect the network cable to a LAN port other than ETH0.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **Step 2**. Power it up by plugging CC line PD fast charging power adaptor

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

**Step 3.** Manage the OpenWRT backend

Use a network cable to connect to the ETH1/ETH2/ETH3 network port of the LinkStar-V2. Then enter the address: `192.168.100.1` into your browser to access the admin backend.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

The initial account and password for the system are as follows.

```text
account: root
password: password
```

## Resources

LinkStar H68K-V2 is open source hardware.Download links to relevant materials.

| Version                     | Description      | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Add Docker support| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Optional)|-| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Flash to eMMC tool & driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO Burner Tool  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | H68K schemetics  | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 Datasheet            | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi Module         | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

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
