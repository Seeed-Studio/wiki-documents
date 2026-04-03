---
description: reComputer R1225 LoRaWAN Gateway Overview
title: reComputer R1225 LoRaWAN Gateway Overview
keywords:
  - SenseCAP Network
  - Edge Controller
  - reComputer R1225
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_introduction
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-01-05'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/r1225_introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

# Overview

## Description

The reComputer R1225 is a powerful and flexible industrial Raspberry Pi-based IoT LoRaWAN gateway and controller, powered by the CM4 and equipped with AI capabilities. It features 3 RS485 interfaces, dual Ethernet ports, and supports BACnet and Modbus protocols, providing all the functionality needed for a robust and reliable industrial edge IoT device. With support for AI NPU accelerators, it is an ideal solution for remote access control applications, especially in BMS, BAS, and iBMS systems.

## Features

### Designed for Building Automation Systems

- Multiple isolated RS485 channels support both high-speed and low-speed communication

- Supports BACnet, Modbus RTU, and Modbus TCP/IP protocols
- Up to 4GB of RAM supports the processing of thousands of data points
- Clear dual-sided LED indicators allow users to quickly check the operational status
- High-quality metal case, compatible with DIN-rail and wall mounting
- Open-source software including Seeed Gateway OS，ChirpStack, Basics™ Station, and a built-in packet forwarder. Supports customization and secondary development.

### Powerful Performance

- Powered by Raspberry Pi CM4

- Broadcom BCM2711 quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- Up to 4GB RAM and 32GB eMMC

### Rich Wireless Capabilities

- On-chip Wi-Fi

- On-chip BLE

- Mini-PCle1: LTE
  - 4G version pre-installed with LTE module:
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCle2: Pre-installed SPI LoRa® module
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915
  
### Rich Interfaces

- 3x RS485 (isolated)
- 1x 10M/100M/1000M Ethernet (Supports PoE)
- 1x 10M/100M Ethernet
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0 (USB console for OS update)
- 1x SIM card slot

### Safety and Reliability

- Hardware Watchdog
- UPS supercapacitor (**included**)
- Metal casing with PC side panels
- ESD: EN61000-4-2, level 3
- EFT: EN61000-4-4, level 2
- Surge: EN61000-4-5, level 2
- Production Lifetime: reComputer R1225 will remain in production until at least December 2030

## Naming Conventions

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## Specifications

<!--Power Consumption功耗待重新测试后补充-->

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Parameter</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Description</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Hardware Spec</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Quad-core Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Operating System</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>System Spec</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Input</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2-pin Terminal Block</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE(as a powered device)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af standard, 12.95W </td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Supply Voltage(AC/DC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24 V AC/9&#126;36 V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Overvoltage Protection</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Power Consumption</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}> comming soon </td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Power Switch</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reboot Switch</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Yes</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interface</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps(supports PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (For flashing OS)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3-pin Terminal Block (isolated)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM Card Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports a standard SIM card</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED indicators</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reset Button</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI (reserved)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports LCD* (on board within the enclosure)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Wireless Communication</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi: 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip Wi-Fi</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Yes</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE: 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip BLE</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Yes</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®(Occupied)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Cellular(Optional)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Standards</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD:  EN61000-4-2, Level 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT:  EN61000-4-4, Level 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Surge:  EN61000-4-5, Level 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Certification</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Ambient Conditions</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>IP Rating</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Operating Temperature</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Operating Humidity</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Storage Temperature</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Others</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Supercapacitor UPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 Module</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Hardware Watchdog</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>High Accuracy RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Security</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Encryption Chip TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Heat Dissipation</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Fanless</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Warranty</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 years</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Production Lifetime</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Until December 2030</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Component and Interface Status Statement</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reserved</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designated for future use or expansion.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Optional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Non-essential components, users can choose to include or exclude.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Occupied</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Currently in use and integral to product functionality.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Included</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Essential components provided with standard package.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Mechanical</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimension(W x H x D)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Enclosure</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 Aluminum Alloy Casing with Transparent PC Side Panels</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Mounting</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN-rail/Wall</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Weight(Net)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>750 g; R1225 with 4G module: 800 g</td>
    </tr>
  </tbody>
</table>
</div>

### Statement

**Options marked with * require additional purchase according to the accessories list.**

## Hardware Overview

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Hardware_Overview03.jpg" /></div>

## Mainboard Overview

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Mainboard_Overview02.jpg" /></div>

## Power Diagram

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Power_Diagram04.jpg" /></div>

The reComputer R1225 supports three power supply options: AC, DC terminal and PoE . By default, the reComputer R1225 is powered through the AC/DC terminal (Official regional power adapter SKU:110061505/110061506).  **A PoE module (SKU:110991925) is included**, providing additional power supply flexibility.

### 2-Pin Power Terminal

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

The reComputer R1225 supports a nominal input voltage of 12&#126;24  V or DC voltage of 9&#126;36V. The power supply is connected via the 2-pin power terminal block connector. To properly ground the device, the ground wire can be secured to the screw located at the top left corner of the power terminal.

:::note
The power solution utilizes a bridge rectifier diode for reverse polarity protection and is compatible with both AC and DC inputs. This ensures that **regardless of how the power supply's positive and negative terminals are connected**, the circuit will not be damaged. By using a bridge rectifier, the output voltage polarity remains fixed irrespective of the input DC polarity, providing effective reverse polarity protection.
:::

### POE (included)

With the PoE module installed, the ETH0 port of reComputer R1225 can support PoE power supply, providing a convenient and efficientway to power the device over Ethernet. This option simplifies the installation process and reduces the amount of cabling required, making it an ideal solution for applications with limited power sources or where power outlets are not readily available.

- PoE input: Range 44~57V; Typical 48V
- PoE output: 12V, 1.1A Max.

:::note
It's worth noting that the PoE module provided with the reComputer R1225 is compliant with the IEEE 802.3af standard and can provide a maximum power supply of 12.95W. **Therefore, if there is a need to connect high-power peripherals such as SSD or 4G modules, the PoE power supply may not be sufficient**. In this case, it's recommended to use the AC/DC terminal for power supply instead to ensure stable and reliable operation of the device.
:::

### Power Consumption

Please refer to the table below for the tested power consumption of reComputer R1225 in Seeed Studio's laboratory. Please note that this value is for reference only, as the test methods and environment can result in variations in the results.

The power consumption table will be updated shortly.

<!--
| Status   | Voltage | Current | Power Consumption | Description                                                                                                         |
|   ---    |    ---  |   ---   |         ---       |      ---                                                                                                            |
|Shutdown  |24V      |  mA     |    W              | Static power consumption test in shutdown and power-off state.                                                      |
|Idle      |24V      |  mA     |    W              | To test the input current when supplying 24V power to the reComputer R1225 device without running any test programs.|
|Full Load |24V      |  mA     |    W              | Configure CPU to run at full load using the "stress -c 4" command. No external devices connected.                   |
-->

### Power On and Power Off

The reComputer R1225 does not come with a power button by default, and the system will automatically start up once power is connect- ed. When shutting down, please select the shutdown option in the operating system and wait for the system to fully shut down before cutting off power. To restart the system, simply reconnect to the power.

:::note
Please note that after shutting down, please wait for **at least 10 seconds** before restarting the system to allow for the internal capacitors to fully discharge.
:::

## Block Diagram

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Block_Diagram05.jpg" /></div>

### IIC Diagram

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## Interface

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interface</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008(supports PoE)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (for flashing OS)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3-pin Terminal Block (isolated)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM Card Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports a standard SIM card</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED indicators</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reset Button</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports LCD*(on board within the enclosure)</td>
    </tr>
  </tbody>
</table>
</div>

To query GPIO mappings and offsets, please use following command:

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LED Indicator Status

The reComputer R1225 features 6 LED indicators that serve to signal the machine's operational status. Please refer to the table below for the specific functions and status of each LED:

| LED Indicator | Color          | Status | Description                                                                |
| ------------- | -------------- | ------ | -------------------------------------------------------------------------- |
| PWR           | Green          | On     | The device has been connected to power.                                    |
|               |                | Off    | The device is not connnected to power.                                     |
| ACT           | Green          |        | Under Linux this pin will flash to signify eMMC access.<br /> If any error occurs during booting, then this LED will flash an <br />error pattern which can be decoded using the look up [table on the Raspberry Pi website](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes).|
| USER          | Green/Red/Blue |        | Need to be defined by user.                                                |
| RS485-1       | Green          | Off    | No data transfer on RS485 channel 1.                                       |
|               |                | Blink  | RS485 channel 1 is receiveing or sending data.                             |
| RS485-2       | Green          | Off    | No data transfer on RS485 channel 2.                                       |
|               |                | Blink  | RS485 channel 2 is receiveing or sending data.                             |
| RS485-3       | Green          | Off    | No data transfer on RS485 channel 3.                                       |
|               |                | Blink  | RS485 channel 3 is receiveing or sending data.                             |

#### ACT Status table

| **Long flashes** | **Short flashes** | **Status**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | Generic failure to boot             |
| 0                | 4                 | start*.elf not found                |
| 0                | 7                 | Kernel image not found              |
| 0                | 8                 | SDRAM failure                       |
| 0                | 9                 | Insufficient SDRAM                  |
| 0                | 10                | In HALT state                       |
| 2                | 1                 | Partition not FAT                   |
| 2                | 2                 | Failed to read from partition       |
| 2                | 3                 | Extended partition not FAT          |
| 2                | 4                 | File signature/hash mismatch - Pi 4 |
| 4                | 4                 | Unsupported board type              |
| 4                | 5                 | Fatal firmware error                |
| 4                | 6                 | Power failure type A                |
| 4                | 7                 | Power failure type B                |

If the ACT LED blinks in a regular four blink pattern, it cannot find bootcode (start.elf)
If the ACT LED blinks in an irregular pattern then booting has started.
If the ACT LED doesn't blink, then the EEPROM code might be corrupted, try again without anything connected to make sure. For more detail please check the Raspberry Pi forum:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
For more detail please check the [Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

#### Customizable LED lights via the Luci interface

#### Control LED lights via commands

To control the user LEDs, we recommend using sysfs, a pseudo-filesystem provided by the Linux kernel that exposes information about various kernel subsystems, hardware devices, and their associated drivers. On the reComputer R1225, we have abstracted the user LED interface into three device files (led-red, led-blue, and led-green), enabling users to control the LED lights simply by interacting with these files. The examples are as follows:

1. To turn on the red LED, please enter following command in the Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. To turn off the red LED, please enter following command in the Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. You can turn on red and green LED at the same time, please enter following command in the Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Buzzer

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

The reComputer R1225 features an active buzzer, which can be used for various purposes such as alarm and event notifications.

For reComputer R1225 users(**R1225 is based on the R1000 v1.1 hardware platform**), the buzzer is connected to PCA9535 P15, to turn off(on) the buzzer, Please enter following command in the Terminal :

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

The reComputer R1225 is equipped with 3 sets of RS485 interface using 3-pin connector, which is isolated for both signal and power to ensure safe and reliable operation in industrial and automation applications. The RS485A and RS485B signals are isolated using capacitive isolation, which provides excellent EMI immunity and meets the high-speed communication requirements of the RS485 interface.

**By default, the 120 Ω termination resistor is not installed. However, five through-hole resistors are included in the package. If required, users may secure the resistor by clamping it between the A and B terminals of the 3-pin terminal block connector.**

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/RS485_compressed.png" alt="pir" width={500} height="auto" /></p>

:::note
The RS485 interface uses an isolated power supply, which means that the ground signal for external devices connected to the RS485 interface should be connected to the GND_ISO pin.

:::

These are the pins related to the 485 interface of reComputer for the data table.

| RS485         | RS485_POWER_EN         | OS device file | P14         | default(High) |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2   | GPIO6       | default Low   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | default Low   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | default Low   |

By default, the power enable port of the RS485 port is high. And each RS485 interface is in the accepting state. You can do a simple experiment.

The 485 port that connects the pc to the reComputer-R.

Enter in the terminal of reComputer:

```shell
cat /dev/ttyAMA2
```

Then send some data in the serial debugging tool of your computer, you can observe the data in the terminal window of reComputer.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### Boot Switch

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

The Boot Switch of the reComputer R1225 is connected to the nRPI_BOOT pin of CM4. This switch provides users with the option to select the boot source between eMMC and USB. In normal mode, the switch should be set away from the side with the "BOOT" label, enabling the system to boot from eMMC. Conversely, when users need to flash the system image, they should set the switch towards the "BOOT" label, allowing the system to boot from the Type-C USB interface.

<div class="table-center">

| Switch Position                                                                                                        | Mode        | Description    | nRPI-BOOT |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

:::note
**In Boot mode, the POE power supply function is unavailable.**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

The reComputer R1225 is equipped with one USB Type-C port and two USB Type-A ports. Please refer to the table below for their functions and descriptions.

| **Type**   | **Quantity** | **Protocol** | **Function** | **Description**                                                                    |
| ---------- | ------------ | ------------ | ------------ | ---------------------------------------------------------------------------------- |
| **Type-C** | *1           | USB2.0       | USB-Device   | Used for serial debugging and firmware flashing, etc.                              |
| **Type-A** | *2           | USB2.0       | USB-Host     | Connects various USB devices such as flash drives, USB keyboards, and mice.        |

Check if the USB hub is detected by running the **lsusb** command. This command lists all connected USB devices, including hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

Running this command should display information about the USB devices connected to your system, including any USB hubs that are present.

If the USB hub is functioning properly, you should see its details listed in the output of the **lsusb** command. If it's not listed, there may be an issue with the hub or its connection to the system. In such cases, you may need to troubleshoot the USB hub or its connections.

### SIM Slot

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
The reComputer R1225 uses a standard-size SIM card slot commonly found in industrial applications, which requires a standard SIM card with dimensions of 25mm x 15mm.
:::note
The reComputer R1225 is available in a 4G version. If you purchase the standard edition (without the 4G module), you can buy a 4G module separately for installation. Bazaar Mall currently offers two 4G modules:Europe(EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) and America(North America **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**)
:::

### SSD Slot

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
The SSD slot on the reComputer R1225 is designed to accommodate NVMe M.2 2280 SSDs for 128GB, 256GB, 512GB and 1TB in capacity. This slot allows for high-speed storage expansion, enabling users to enhance the performance and capacity of their system.

To list the disks, including the SSD, you can use the *fdisk -l* command. Here's how:

```bash
sudo fdisk -l
```

This command will display a list of all disks connected to your system, including the SSD if it's properly detected. Look for entries that represent your SSD. They typically start with /dev/sd followed by a letter (e.g., /dev/sda, /dev/sdb, etc.).
Once you identify the entry corresponding to your SSD, you can proceed with partitioning or formatting it as needed.

:::note
There are two main uses for SSD cards:<br />
1.High Capacity Storage: SSD cards can be utilized for high-capacity storage needs.<br />
2.Boot Drive with Image: Another usage involves using the SSD both as a high-capacity storage and for storing system images, allowing booting directly from the SSD card.<br />
It's important to note that not all SSD cards available in the market support the second usage. Therefore, if you intend to use it as a boot drive and are unsure about which model to purchase, we recommend opting for our recommended 1TB SSD(SKU 112990267). This model has been tested and verified for boot functionality, reducing the risk of compatibility issues and minimizing trial and error costs.
:::

### Mini-PCle Slot

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         Slot         | Supported Protocol |
| -------------------- | ------------------ |
|       Mini-PCIe 1    |       4G LTE       |
|       Mini-PCIe 2    |      SPI LoRa®     |

</div>

:::note
The reComputer R1225 comes in standard and 4G versions: For the standard version, Mini-PCIe 1 is left vacant; For the 4G version, Mini-PCIe 1 is pre-installed with 4G LTE.
:::

This device features two Mini-PCIe interfaces, namely Mini-PCIe Slot 1 and Mini-PCIe Slot 2. Slot 1 connects to SIM card slot and supports USB protocols, while Slot 2 supports both USB and SPI protocols but doesn't connect to SIM card slot. Therefore, devices such as 4G LTE can be connected through Slot 1, while SPI LoRa® devices can be connected through Slot 2.

### Reset Hole

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

There is a Mini Push Button Switch located in the reset hole of reComputer R1225. By pressing this button with a thin object, the CM4 can be reset. This pin when high signals that the CM4 has started. Driving this pin low resets the module.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| Name | Type                        | Speeds             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 native Gigabit Ethernet | 10/100/1000 Mbit/s | Pre-installed                      |
| ETH1 | Converted from USB          | 10/100 Mbit/s      | Not Supported                      |

</div>

The reComputer R1225 comes with two Ethernet RJ45 ports. ETH0 is a CM4 native Gigabit Ethernet interface that supports three different speeds: 10/100/1000 Mbit/s. An additional PoE module can be purchased to enable power-over-Ethernet (PoE) delivery through this interface, providing power to the reComputer R1225. Another one ETH1 supports 10/100 Mbit/s which is converted from USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

The reComputer R1225 features a native HDMI interface from CM4, supporting up to 4K @ 60 fps video output. It is ideal for applications that require multiple displays, allowing users to output their content to external large screens.

### RTC

The reComputer R1225 features an RTC circuit that comes pre-installed with a CR2032 battery, enabling it to maintain timekeeping functionality even in the event of power loss.

To test the Real-Time Clock (RTC) functionality, follow these steps:

1. Disable automatic time synchronization:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Set the time to 12:00 PM on March 20, 2024:

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. Synchronize the RTC time to the system:

```bash
sudo hwclock --hctosys
```

4. Check the RTC time:

```bash
sudo hwclock -r
```

This command will read and display the time stored in the RTC.
5. Disconnect the power source from the RTC, wait a few minutes, then reconnect it and check the RTC time again to see if it retained the correct time.

### Watchdog

The reComputer R1225 comes equipped with an independent hardware watchdog circuit that ensures automatic system reboot in case of abnormal system crashes. The watchdog circuit is implemented through RTC and allows for flexible feeding times from 1 to 255 seconds.

To perform a watchdog test, follow these steps:

1. Install the watchdog software:

```bash
sudo apt install watchdog 
```

2. Edit the watchdog configuration file:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modify the configuration as follows:

```bash
watchdog-device  = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.vi
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval  = 15
max-load-1  = 24
#max-load-5  = 18
#max-load-15  = 12
realtime  = yes
priority  = 1
```

You can adjust other settings as needed.
3. Ensure the watchdog service is running:

```bash
sudo systemctl start watchdog
```

4. To test the watchdog functionality, execute the following command to simulate a system hang:

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
This command triggers a kernel crash and should cause the watchdog to reboot the system.
:::

5. Monitor the system to confirm that it reboots after the specified timeout period.
These steps will help you test and ensure the functionality of the watchdog timer on your system.

## Optional Interfaces and Modules

### Wi-Fi/BLE(included)

The reComputer R1225 is powered by the CM4 with an onboard Wi-Fi/BLE version, providing the same Wi-Fi/BLE parameters as the CM4. For detailed parameter information, please refer to the Raspberry Pi official website.

:::note
It is important to note that due to the reComputer R1225's metal casing, Wi-Fi/BLE signals may have difficulty penetrating the metal exterior. Therefore, if you require this feature, we recommend installing the external antenna we have prepared for you.
:::

#### Connect Wi-Fi

##### Connect to Wi-Fi via the Luci UI

##### Command to connect to Wi-Fi
  
step1. To scan for Wi-Fi networks:

  ```bash
  nmcli dev wifi list
  ```

step2. Connect to the Wi-Fi network:

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

step3. After the device is powered on, it will automatically connect to Wi-Fi.  
  If you want to delete the saved Wi-Fi information:

  ```bash
  nmcli con del network-ssid
  ```

  After the connection is disconnected, connect to another Wi-Fi.

#### Connect bluetooth devices

Before adding a Bluetooth device, the Bluetooth service on your computer must be started and running. You can check this with the systemctl command.

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
If the Bluetooth service status is not active, you must enable it first. Then start the service so that it starts automatically when you start your device.

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

You can use the bluetoothctl tool to connect and manage Bluetooth, the following are some common commands and comments:

```bash
#Scan attachments to the device
bluetoothctl scan on

#To make your Bluetooth adapter discoverable to other devices, use the following command:
bluetoothctl discoverable on


#Replace A4:C1:38:F4:83:2E below with the Media Access Control (MAC) address you want to connect to
#Pair a new Bluetooth device
bluetoothctl pair A4:C1:38:F4:83:2E

#Connect previously paired devices
bluetoothctl connect A4:C1:38:F4:83:2E

#View the list of devices paired with the system
bluetoothctl paired-devices

#When a Bluetooth device is trusted, the system automatically connects to it after discovering it
bluetoothctl trust A4:C1:38:F4:83:2E

#Cancel trust
bluetoothctl untrust A4:C1:38:F4:83:2E

#Remove a paired Bluetooth device
bluetoothctl remove A4:C1:38:F4:83:2E

#Disconnect the Bluetooth connection, but do not remove it from the paired list
bluetoothctl disconnect A4:C1:38:F4:83:2E

#Block specific devices from connecting to your system
bluetoothctl block A4:C1:38:F4:83:2E

#Unblock device
bluetoothctl unblock A4:C1:38:F4:83:2E


#Use interactive mode and exit
bluetoothctl
exit 
```

### 4G Module(optional)

The reComputer R1225 LoRaWAN Gateway is available in Standard and 4G versions. The Mini-PCIe Slot 1 on the Standard version is vacant, while the 4G version comes with a pre-installed Mini-PCIe module tailored for Europe(EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) and America(North America **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**) respectively.

### LoRa® Module(included)

The Mini-PCIe Slot 2 on the reComputer R1225 LoRaWAN Gateway is occupied by the SPI LoRa® module.

### PoE(included)

The reComputer R1225 LoRaWAN Gateway comes equipped with a PoE module, eliminating the need for users to purchase, solder, and assemble one themselves.

### M.2 Slot(optional)

The reComputer R1225 supports 2280 NVMe SSD and AI accelerator(Hailo) through the use of a PCIe slot(J62) below two Mini-PCIe slots on board. It is important to note that the CM4's PCIe is gen2.0 with a maximum theoretical speed of 5Gbps. If you are using a Gen3.0 or higher SSD, it may not be able to achieve the SSD's maximum speed. After testing, the reTerminal DM with installed SSD can achieve a maximum write speed of 230MB/s and a maximum read speed of 370MB/s. If you are unsure which SSDs are compatible, you can purchase following the accessories list below.

[Please click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD card</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
Please note that:<br />
1- The speed test results may vary depending on the SSD model, testing method, and testing environment. The values provided here are for reference purposes only and were obtained in Seeed's laboratory.<br />

There are two main uses for SSD cards:<br />
1.High Capacity Storage: SSD cards can be utilized for high-capacity storage needs.<br />
2.Boot Drive with Image: Another usage involves using the SSD both as a highcapacity storage and for storing system images, allowing booting directly from the SSD card.<br />
It's important to note that not all SSD cards available in the market support the second usage. Therefore, if you intend to use it as a boot drive and are unsure about which model to purchase, we recommend opting for our recommended **1TB SSD(<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>)**.  This model has been tested and verified for boot functionality, reducing the risk of compatibility issues and minimizing trial and error costs.
:::

### Encryption Chip TPM 2.0(optional)

The TPM features Infineon’s OPTIGA™ TPM SLB9670 which is compliant to the Trusted Computing Group (TCG) TPM 2.0 specification is recommened as encryption chip to the reComputer R1225. The chip features an SPI interface applied for port J13 on board, to enable a root of trust for platform integrity, remote attestation, and cryptographic services.

:::note
[Please click here for assemble instruction](https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

If you connect TPM 2.0 module to device, the following code can help check TPM connection.

```bash
ls /dev | grep tpm
```

If you see **tpm0** and **tpmrm0** in the output, it means that TPM (Trusted Platform Module) devices are detected and available on your system. This indicates that the TPM hardware is recognized and accessible, which is a good sign. You can proceed with using TPM-related functionalities or applications knowing that the devices are present and accessible.

### UPS(included)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

The UPS is 7F, which operates in series. The UPS module is positioned between the DC5V and CM4 components, with a GPIO signal utilized to alert the CPU in the event of a power loss from the 5V supply. Upon receiving this signal, the CPU executes an urgent script before the super capacitor's energy is depleted, initiating a "$ shutdown" command.
<br />
The backup duration provided by the UPS heavily relies on the system load. Below are some typical scenarios tested with a CM4 module featuring 4GB RAM, 32GB eMMC storage, and a Wi-Fi module.
<br />

| Mode of Operation | Time(s) | Remark                                                            |
| ----------------- | ------- | ----------------------------------------------------------------- |
| Idle              | 37      | Testing under idle conditions with official driver program loaded |
| Full load of CPU  | 18      | stress -c 4 -t 10m -v &                                           |

:::note
For UPS function please contact us for more information, and the alarm signal is active LOW.
:::

A GPIO25 between CPU and DC/AC power in is used to alarm CPU when the 5V power supply is down. Then the CPU should do something urgent in a script before energy exhaustion of super capacitor and run a `$ shutdown`
<br />
Another way to use this function is Initiate a shutdown when GPIO pin changes. The given GPIO pin is configured as an input key that generates KEY_POWER events. This event is handled by systemd-logind by initiating a shutdown.
Use `/boot/overlays/README` as reference, then modify `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

The python code below is a demo for detecting the working mode of supercapacitor UPS through GPIO25, and automatically saving data and shut down when the system is powered off.

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
#set GPIO25 as input mode
#add 500ms jitter time for software stabilization
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...External power off...')
    print('')
    os.system('sync')
    print('...Data saving...')
    print('')
    time.sleep(3)
    os.system('sync')
    #saving two times
    while num<5:
      print('-----------')
      s = 5-num
      print('---' + str(s) + '---')
      num = num + 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```

### DSI(optional)

One DSI (J24) are reserved on board, for special usage. Users are requested to purchase plug-ins according to your own needs.

## Additional Resources

- [reComputer R1225 3D File](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1225 Schematic Desing, PCB Desing](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1225 (R1000 v1.1) Pin Assignment](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

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
