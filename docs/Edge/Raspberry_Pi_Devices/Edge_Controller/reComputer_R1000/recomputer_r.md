---
description: reComputer R1000 Getting Started 
title: reComputer R1000 Getting Started
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /recomputer_r
last_update:
  date: 09/15/2025
  author: Kasun Thushara
---

<!-- ---
name: The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC.
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 113991274
tags:
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC. Equipped with dual Ethernet interfaces that can be flexibly configured, it also includes 3 isolated RS485 channels supporting BACnet, Modbus RTU, Modbus TCP/IP protocols.
With robust IoT network communication capabilities, the R1000 series supports multiple wireless communication options including 4G, LoRa®, Wi-Fi/BLE, allowing for flexible configurations to serve as corresponding wireless gateways. This controller is well-suited for remote device management, energy management, and various other scenarios in the field of smart buildings.

## Feature

### Designed for Building Automation System

- Multiple isolated RS485 channels supports high and low speeds communication.

- Supports BACnet, Modbus RTU, and Modbus TCP/IP protocol
- Up to 8GB RAM supports the processing of thousands of data points, ensuring efficient performance
- Clear dual-sided LED indicators help check operational status quickly
- High-quality metal case, compatible with DIN-rail and Wall installation
- Supports Yocto and Buildroot for customized OS

### Powerful Performance

- Powered by Raspberry Pi CM4

- Broadcom BCM2711 quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- Up to 8GB RAM and 32GB eMMC

### Rich Wireless Capabilities

- On-chip Wi-Fi

- On-chip BLE
- Mini-PCIe1: LTE, USB LoRa®, USB Zigbee
- Mini-PCIe2: SPI LoRa®, USB LoRa®, USB Zigbee

### Rich Interfaces

- 3x RS485 (isolated)

- 1x 10M/100M/1000M Ethernet (Support PoE)
- 1x 10M/100M Ethernet
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0 (USB console for OS update)
- 1x SIM card slot

### Safety and Reliability

- Hardware Watchdog

- UPS Supercapacitor(optional)
- Metal casing with PC side panels
- ESD: EN61000-4-2,level 3
- EFT: EN61000-4-4, level 2
- Surge: EN61000-4-5, level 2
- Production Lifetime: reComputer R1000 will remain in production until at least December 2030

> \*4G and LoRa® modules does not come with reComputer R1000 by default, please purchase the relevant modules accordingly.

## Naming Conventions

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## Specifications

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
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Product Series</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>R10xx-10</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>R10xx-00</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1GB/2GB/4GB/8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>8GB/16GB/32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>System Spec</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Input</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2-pin Terminal Block</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE(as powered device)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af Standard 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Supply Voltage(AC/DC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12~24V AC/9~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Overvoltage Protection</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Power Consumption</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Idle:2.88W; Full Load:5.52W</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports Standard SIM Card</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(reserved)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports LCD*(on board within the enclosure)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Speaker(reserved)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports Microphone*(on board within the enclosure)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Wireless Communication</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip BLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Cellular</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zigbee</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB Zigbee*</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>Certification</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>TELEC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>REACH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Ambient Conditions</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ingress Protection</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 Module*</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Statement</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Options marked with * require additional purchase according to the accessories list.</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>
</div>

## Hardware Overview

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## Mainboard Overview

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## Power Diagram

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

The reComputer R1000 supports three power supply options: AC, DC terminal and PoE port. By default, the reComputer R1000 is powered through the AC/DC terminal (Official regional power adapter SKU:110061505/110061506), while **the PoE power supply(PoE module, SKU:110991925) is optional**. This provides flexibility in power supply selection and allows for easy integration with various power sources.

### 2-Pin Power terminal

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

The reComputer R1000 is supplied with a nominal AC voltage of 12~24 V or DC voltage of 9~36V. The power supply is connected via the 2-pin power terminal block connector. To ground the reComputer R1000, the ground wire can be secured to the screw located at the top left corner of the power terminal.

:::note
The power solution utilizes a bridge rectifier diode for reverse polarity protection and is compatible with both AC and DC inputs. This ensures that **regardless of how the power supply's positive and negative terminals are connected**, the circuit will not be damaged. By using a bridge rectifier, the output voltage polarity remains fixed irrespective of the input DC polarity, providing effective reverse polarity protection.
:::

### POE (optional)

With the PoE module installed, the ETH0 port of reComputer R1000 can support PoE power supply, providing a convenient and efficientway to power the device over Ethernet. This option simplifies the installation process and reduces the amount of cabling required, making it an ideal solution for applications with limited power sources or where power outlets are not readily available.

- PoE input: Range 44~57V; Typical 48V
- PoE output: 12V, 1.1A Max.

:::note
It's worth noting that the PoE module provided with the reComputer R1000 is compliant with the IEEE 802.3af standard and can provide a maximum power supply of 12.95W. Therefore, if there is a need to connect high-power peripherals such as SSD or 4G modules, the PoE power supply may not be sufficient. In this case, it's recommended to use the AC/DC terminal for power supply instead to ensure stable and reliable operation of the device.
:::

### Power Consumption

Please refer to the table below for the tested power consumption of reComputer R1000 in Seeed Studio's laboratory. Please note that this value is for reference only, as the test methods and environment can result in variations in the results.

| Status   | Voltage | Current | Power Consumption | Description |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|Shutdown  |24V      |  51mA  |    1.224W         | Static power consumption test in shutdown and power-off state.|
|Idle      |24V      |  120mA |    2.88W          | To test the input current when supplying 24V power to the reComputer R1000 device without running any test programs.|
|Full Load |24V      |  230mA  |    5.52W          | Configure CPU to run at full load using the "stress -c 4" command. No external devices connected. |

### Power On and Power Off

The reComputer R1000 does not come with a power button by default, and the system will automatically start up once power is connect- ed. When shutting down, please select the shutdown option in the operating system and wait for the system to fully shut down before cutting off power. To restart the system, simply reconnect to the power.

:::note
Please note that after shutting down, please wait for at least 10 seconds before restarting the system to allow for the internal capacitors to fully discharge.
:::

## Block Diagram

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008(supports PoE*)</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports Standard SIM Card</td>
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
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Speaker*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>supports Microphone*(on board within the enclosure)</td>
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

The reComputer R1000 features 6 LED indicators that serve to signal the machine's operational status. Please refer to the table below for the specific functions and status of each LED:

| LED Indicator | Color          | Status | Description                                                  |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | Green          | On     | The device has been connected to power.                      |
|               |                | Off    | The device is not connnected to power.                       |
| ACT           | Green          |        | Under Linux this pin will flash to signify eMMC access.<br /> If any error occurs during booting, then this LED will flash an <br />error pattern which can be decoded using the look up [table on the Raspberry Pi website](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes). |
| USER          | Green/Red/Blue |        | Need to be defined by user.                                  |
| RS485-1       | Green          | Off    | No data transfer on RS485 channel 1.                         |
|               |                | Blink  | RS485 channel 1 is receiveing or sending data.               |
| RS485-2       | Green          | Off    | No data transfer on RS485 channel 2.                         |
|               |                | Blink  | RS485 channel 2 is receiveing or sending data.               |
| RS485-3       | Green          | Off    | No data transfer on RS485 channel 3.                         |
|               |                | Blink  | RS485 channel 3 is receiveing or sending data.               |

**ACT Status table**

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

To control the user LEDs, we recommend using sysfs, a pseudo-filesystem provided by the Linux kernel that exposes information about various kernel subsystems, hardware devices, and their associated drivers. On the ReComputer R1000, we have abstracted the user LED interface into three device files (led-red, led-blue, and led-green), enabling users to control the LED lights simply by interacting with these files. The examples are as follows:

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

The reComputer R1000 features an active buzzer, which can be used for various purposes such as alarm and event notifications. The buzzer is controlled through GPIO21 to CM4 in reComputer R1000 v1.0, and GPIO20 to CM4 in reComputer R1000 1.1.

:::note
To distinguish between the hardware revision (v1.0 and v1.1), you can refer to [reComputer R1000 V1.1 Product change details](https://wiki.seeedstudio.com/recomputer_r1000_v1_1_description/).
:::

For reComputer R1000 v1.0 users, the buzzer is connected to GPIO-21, to turn on/off the buzzer, Please enter following command in the Terminal:

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

For reComputer R1000 v1.1 users, the buzzer is connected to PCA9535 P15, to turn off(on) the buzzer, Please enter following command in the Terminal :

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

The reComputer R1000 is equipped with 3 sets of RS485 interface using 3-pin connector, which is isolated for both signal and power to ensure safe and reliable operation in industrial and automation applications. The RS485A and RS485B signals are isolated using capacitive isolation, which provides excellent EMI immunity and meets the high-speed communication requirements of the RS485 interface.
By default, 120Ω terminal resistors is not installed. However, the packaging box includes five surface-mount resistors. If needed, users should solder the resistor onto the device themselves.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

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

The Boot Switch of the reComputer R1000 is connected to the nRPI_BOOT pin of CM4. This switch provides users with the option to select the boot source between eMMC and USB. In normal mode, the switch should be set away from the side with the "BOOT" label, enabling the system to boot from eMMC. Conversely, when users need to flash the system image, they should set the switch towards the "BOOT" label, allowing the system to boot from the Type-C USB interface.

<div class="table-center">

| Switch Position                                              | Mode        | Description    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

The reComputer R1000 is equipped with one USB Type-C port and two USB Type-A ports. Please refer to the table below for their functions and descriptions.

| **Type**   | **Quantity** | **Protocol** | **Function** | **Description**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | Used for serial port debugging, burning image, etc.          |
| **Type-A** | *2           | USB2.0       | USB-Host     | Connect different USB devices such as flash drives,<br /> USB keyboards or mouses. |

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
The reComputer R1000 uses a standard-size SIM card slot commonly found in industrial applications, which requires a standard SIM card with dimensions of 25mm x 15mm.
:::note
Please note that the standard version of reComputer R1000 does not come with a 4G module. If you require 4G functionality, an additional 4G module must be purchased separately.
:::

### SSD Slot

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
The SSD slot on the reComputer R1000 is designed to accommodate NVMe M.2 2280 SSDs for 128GB, 256GB, 512GB and 1TB in capacity. This slot allows for high-speed storage expansion, enabling users to enhance the performance and capacity of their system.

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

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| Slot        | Supported Protocol |
| ----------- | ------------------ |
| Mini-PCIe 1 | 4G LTE             |
|             | USB LoRa®          |
|             | USB Zigbee         |
| Mini-PCIe 2 | SPI LoRa®          |
|             | USB LoRa®          |
|             | USB Zigbee         |

</div>

This device features two Mini-PCIe interfaces, namely Mini-PCIe Slot 1 and Mini-PCIe Slot 2. Slot 1 connects to SIM card slot and supports USB protocols, while Slot 2 supports both USB and SPI protocols but doesn't connect to SIM card slot. Therefore, devices such as 4G LTE, USB LoRa®, and USB Zigbee can be connected through Slot 1, while SPI LoRa®, USB LoRa®, and USB Zigbee devices can be connected through Slot 2.

### Reset Hole

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

There is a Mini Push Button Switch located in the reset hole of reComputer R1000. By pressing this button with a thin object, the CM4 can be reset. This pin when high signals that the CM4 has started. Driving this pin low resets the module.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| Name | Type                        | Speeds             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 native Gigabit Ethernet | 10/100/1000 Mbit/s | Supported (with additional module) |
| ETH1 | Converted from USB          | 10/100 Mbit/s      | Not Supported                      |

</div>

The reComputer R1000 comes with two Ethernet RJ45 ports. ETH0 is a CM4 native Gigabit Ethernet interface that supports three different speeds: 10/100/1000 Mbit/s. An additional PoE module can be purchased to enable power-over-Ethernet (PoE) delivery through this interface, providing power to the reComputer R1000. Another one ETH1 supports 10/100 Mbit/s which is converted from USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

The reComputer R1000 features a native HDMI interface from CM4, supporting up to 4K @ 60 fps video output. It is ideal for applications that require multiple displays, allowing users to output their content to external large screens.

### RTC

The reComputer R1000 features an RTC circuit that comes pre-installed with a CR2032 battery, enabling it to maintain timekeeping functionality even in the event of power loss.

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

The reComputer R1000 comes equipped with an independent hardware watchdog circuit that ensures automatic system reboot in case of abnormal system crashes. The watchdog circuit is implemented through RTC and allows for flexible feeding times from 1 to 255 seconds.

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

The reComputer R1000 supports a rich selection of expansion modules and accessories, making it suitable for a wide range of scenarios and requirements. If you are interested in customizing the reComputer R1000, please contactodm@seeed.cc for more information.
Here is the accessories and optional modules list:

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Remark</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Item</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Product Name</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>Must be used together for LoRa®WAN Function</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa® Module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa® Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa Antenna Kit - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee Module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Mini-PCIe USB Zigbee Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbee Antenna Kit for reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>This accessory is required for Wi-Fi function</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 Antenna Kit</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G antenna with 4G module for 4G function, GPS antenna with 4G module for GPS function</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4G module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIe Module - for North American</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIe Module - for EMEA and Thai</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AUXGR-Mini-PCIe Module - for Australia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EFA-Mini-PCIe Module - for Thai</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EMGA-Mini-PCIe Module - for Malaysia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>4G Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4G Antenna Kit for 4G module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>GPS Antenna Kit for EC25 4G Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Encryption Chip TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>TPM 2.0 Module with infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD card</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>This module needs to be soldered onto the carrier board of the reComputer R1000</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>MQ7813T120 PoE Module Kit for reTerminal DM</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350 Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>
</div>

The reComputer R1000 mainboard features two Mini-PCIe slots. Mini-PCIe slot 1 supports 4G module, LoRa® module using the USB protocol and Zigbee module using USB protocol; while Mini-PCIe slot 2 supports LoRa® module using the USB and SPI protocol and Zigbee module using USB protocol.

:::note
Can not plug in 2 LoRa® modules on board.
:::

### Wi-Fi/BLE

The reComputer R1000-10 is powered by the CM4 with an onboard Wi-Fi/BLE version, providing the same Wi-Fi/BLE parameters as the CM4. For detailed parameter information, please refer to the Raspberry Pi official website.

:::note
It is important to note that due to the reComputer R1000's metal casing, Wi-Fi/BLE signals may have difficulty penetrating the metal exterior. If you require Wi-Fi/BLE functionality, it is recommended to purchase an external antenna and [click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna).
:::

#### Connect wifi

step1. To scan for Wi-Fi networks:

```bash
nmcli dev wifi list
```

step2. Connect to the wifi network:

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

step3. After the device is powered on, it will automatically connect to wifi. If you want to delete the saved WiFi information:

```bash
nmcli con del network-ssid
```

After the connection is disconnected, connect to another wifi.

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

### 4G Module

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

The reComputer R1000 mainboard features two Mini-PCIe slots, with Mini-PCIe slot 1 supporting a 4G module using the USB protocol. The EC25 4G module from Quectel has been fully tested to be compatible with the reComputer R1000.

:::note
Please note that if you require 4G functionality, it is necessary to purchase the corresponding 4G module and external antenna. [Please click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

#### Connect to 4G module by ECM mode

To interact with a 4G module using AT commands via minicom, follow these steps:

**Step 1.** Please put in the 4G enabled sim-card in the [sim card slot](/recomputer_r/#sim-slot), before you power up the system.

**Step 2.** Check if EC25-EUX gets detectd by using ```lsusb```

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Step 3.** Install the serial communication tool minicom.

```sh
sudo apt install minicom
```

**Step 4.** Connect EC25-EUX 4G module through minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

once the serial connection opened, Type in AT and press 'Enter', and you should see OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Step 5.** Enable 4G module to connect to 4G network

AT the same minicom serial window please type:

```sh
AT+QCFG="usbnet"
```

It will return something like ```+QCFG: "usbnet",0,``` but we need that to be set to 1 (ECM mode), so enter the following command:

```sh
AT+QCFG="usbnet",1
```

Then enter the following command to force the modem to reboot:

```sh
AT+CFUN=1,1
```

Then you could reboot or wait for a while for the moudel to get internet from your sim card carrier.

You can also use the command `ifconfig` to query the networking status of reComputer R1000.

ECM mode will create a new network interface `usb0` for you to use.


#### Connect to 4G module by QMI mode

To interact with a 4G module using QMI protocol via qmicli, follow these steps:

**Step 1.** Download the quectel-CM tool to the `/usr/bin/` directory.

```sh
# Use wget to download the compiled quectel-CM to /usr/bin/
sudo wget -O /usr/bin/quectel-CM https://files.seeedstudio.com/wiki/reComputer-R1000/network/quectel-CM
# Add execution permission
sudo chmod 777 /usr/bin/quectel-CM
```

**Step 2.** Set the 4G network card mode to QMI.

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200

# Enter the following command
AT+QCFG="usbnet",0
# Enter the following command to verify
AT+QCFG="usbnet"
# Successful configuration is indicated by the following response
AT+QCFG="usbnet",0

# Enter the command to restart and enable the module
AT+CFUN=1,1
```

**Step 3.** Test the network connection.

```sh
# Use the -s parameter to specify the APN for the data connection
sudo ./quectel-CM -s APN

# APN settings for different carriers
China Mobile: "cmnet"
China Unicom: "3gnet"
China Telecom: "ctnet"
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-1.png"/></div>

Enter ifconfig to check if an IP address has been assigned

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

After the network connection test is successful, you can create a systemd service to ensure that the 4G module is automatically connected when the system boots up.

**Step 4.** Create a systemd service file.

Create an auto-start script:

```sh
sudo vi /opt/auto_4G.sh
```

Enter the following content. The APN should be determined based on your SIM card's carrier. Here, `3gnet` is the APN for China Unicom.

```sh
#!/bin/bash
sudo quectel-CM -s 3gnet
```

Add execution permission:

```bash
sudo chmod 0755 /opt/auto_4G.sh
```

Create an auto-start service file:

```bash
sudo vi /etc/systemd/system/auto_4G.service
```

Content of the service file:

```bash
[Unit]
Description = auto_4G daemon

[Service]
ExecStart = /opt/auto_4G.sh
Restart = always
Type = simple

[Install]
WantedBy = multi-user.target
```

Enable and start the auto_4G.service:

```bash
sudo systemctl enable auto_4G
sudo systemctl start auto_4G
```

Then you could reboot or wait for a while for the moudel to get internet from your sim card carrier.

You can also use the command `ifconfig` to query the networking status of reComputer R1000.

QMI mode will create a new network interface `wwan0` for you to use.




### LoRa® Module

:::note
Both two Mini-PCIe slots supports LoRa® module using the USB protocol. Meanwhile, Mini-PCIe slot2 supports a LoRa® module using the SPI protocol. The WM1302 module from Seeed Studio has been fully tested to be compatible with the reComputer R1000. However the USB verison will need to uiltising the Mini PCIe designed for 4G Moudle which means if you want to use the both 4G Module and LoraWAN® Module Please choose SPI version of the WM1302 LoraWAN® Module.
<br />
Please note that if you require LoRa® functionality, it is necessary to purchase the corresponding LoRa® module and external antenna.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

**Step 1.** Please refer to the [LoraWAN® Module Hardware assembly](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) guide to install `WM1302 SPI LoraWAN® Module` into the `LoraWAN® Mini PCIe slot` which you should see the *`Lora`* slikscreen.

**Step 2.** type `sudo raspi-config` in command line to open Raspberry Pi Software Configuration Tool:

- Select Interface Options
- Select SPI, then select **Yes** to enable it
- Select I2C, then select **Yes** to enable it
- Select Serial Port, then select **No** for "Would you like a login shell..." and select **Yes** for "Would you like the serial port hardware..."

After this, please reboot Raspberry Pi to make sure these settings work.

**Step 3.** Download the [WM1302 code](https://github.com/Lora-net/sx1302_hal) to reComputer R1000 and compile it.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Change `#define I2C_DEVICE "/dev/i2c-1"` to `#define I2C_DEVICE "/dev/i2c-3"`.

:::important
If you are using version 1.1 reComputer R1000 please change to `#define I2C_DEVICE "/dev/i2c-6"`
:::

```bash
sudo make
```

**Step 4.** Copy the reset_lgw.sh script

```bash
vim ./tools/reset_lgw.sh
```

Modify the code:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Step 5.** Modify the content of the `global_conf.json.sx1250.EU868` configuration file:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

Change `"com_path": "/dev/spidev0.0"` to `"com_path": "/dev/spidev0.1"`

:::important
If you are using version 1.1 reComputer R1000 please change to `"com_path": "/dev/spidev1.1"`
:::

**Step 6.** Start LoraWAN® Module

Then run the following code to start LoraWAN® Module according to your WM1302 operation frequence version.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

**Step 1.** Please refer to the [LoraWAN® Module Hardware assembly](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) guide to install `WM1302 USB LoraWAN®  Module` into the `4G Mini PCIe slot` which you should see the *`4G`* slikscreen.

**Step 2.** type `sudo raspi-config` in command line to open Raspberry Pi Software Configuration Tool:

- Select Interface Options
- Select I2C, then select **Yes** to enable it
- Select Serial Port, then select **No** for "Would you like a login shell..." and select **Yes** for "Would you like the serial port hardware..."

After this, please reboot Raspberry Pi to make sure these settings work.

**Step 3.** Download the [WM1302 code](https://github.com/Lora-net/sx1302_hal) to reTerminal and compile it.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Change `#define I2C_DEVICE "/dev/i2c-1"` to `#define I2C_DEVICE "/dev/i2c-3"`.

```bash
sudo make
```

**Step 4.** Copy the reset_lgw.sh script

```bash
vim ./tools/reset_lgw.sh
```

Modify the code:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Step 5.** Load the WM1302-USB module

```bash
# Check the device
lsusb
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>

```bash
# Use the ID number to find the port number
sudo dmesg | grep 5740
# Load ACM module 
sudo modprobe cdc_acm
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/load_lora_device.png" /></div>

**Step 6.** Find the device file

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**Step 7.** Modify the content of the `global_conf.json.sx1250.EU868.USB` configuration file:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

Change `"com_path": "/dev/ttyACM0"` to `"com_path": "/dev/ttyACM4"`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**Step 8.** Start LoraWAN® Module

Then run the following code to start LoraWAN® Module according to your WM1302 operation frequence version.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

This command specifies the configuration file to be used for LoRa® USB.

</TabItem>
</Tabs>

<!-- Code END -->

### Zigbee Module

The Mini-PCIe slots offer support for Zigbee modules utilizing the USB protocol, allowing for seamless integration of Zigbee functionality into compatible devices. This feature enables efficient communication and control within Zigbee networks, enhancing the versatility and connectivity of the system. With two Mini-PCIe slots available for Zigbee modules, users have the flexibility to implement diverse applications for enhanced reliability.

:::note
Please note that if you require Zigbee functionality, it is necessary to purchase the corresponding Zigbee module and external antenna.
[Please click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

#### Set up reComputer R1000 with Zigbee module as Zigbee Coordinator

**Step 1.** Check Serial Ports:
Use the following command to check available serial ports:

```bash
cat /dev/ttyACM*
```

**Step 2.** Install Serial Communication Tool, then enter *cutecom* open the UI:

```bash
sudo apt-get install cutecom
```

**Step 3.** Configure the setting and Open communication:

- Configure the baudrate as 115200
- Tick 'Hex output' at the bottom
- Select correct Device port, for example: /dev/ttyACM0
- Then click 'Open' to set up communication

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
For more detail information, please refer to [E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894). For Hex command instruction, please refer to [Ebyte Zigbee 3.0 Module HEX Command Standard Specification](https://www.ebyte.com/pdf-down.aspx?id=2936).
:::

**Step 4.** Configure the Zigbee module as Coordinator
Follow these steps to configure the first Zigbee module after checking module is at HEX code mode:

- Set as coordinator: Send command `55 04 00 05 00 05`, expect response `55 04 00 05 00 05`.<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- Reset device: Press reset button or send command `55 07 00 04 00 FF FF 00 04`.<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- Network formation: Send command `55 03 00 02 02`.<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
For check digit calculation, can use such [Block Check Character calculator](https://bcc.beyerleinf.de/) tool; Can also use serial communication tools like SSCOM and XCOM with BCC calculate.
:::

**Step 5.** Check Device Status:
Send command `5 03 00 00 00` to check the device status. Expect a response similar to `55 2a 00 00 00 01 XX XX XX XX`, where `XX` represents device information.

**Step 6.** Enter Transparent Mode:
If network formation is successful, enter transparent mode by sending command `55 07 00 11 00 03 00 01 13`. Both modules should be in transparent mode for direct communication. Don't forget to set Input mode as *None*. To exit transparent mode, send `+++`.
 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**Step 7.** Additional Notes:

- If router configuration fails, the device may already be a coordinator. Leave the network using command `55 07 00 04 02 xx xx xx`.
- Test transmission power using commands `55 04 0D 00 00 0D` (query) and `55 04 0D 01 XX XX` (set).

Then can connect Zigbee device to reComputer R1000 via ZHA, zigbee2mqtt, Tasmota platforms,etc.

### PoE

The reComputer R1000 worked as powered devices can support the IEEE 802.3af standard by adding a PoE power supply module. Users need to disassemble the device to install the PoE module for Ethernet PoE function.

:::note
The reComputer R1000 supports PoE power supply, but the standard product does not include a PoE module by default. Seeed can provide PoE soldering and assembly services for batch customization orders. However, if a customer is testing a sample, they will need to [solder and assemble the PoE module themselves](/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

### M.2 Slot

The reComputer R1000 supports 2280 NVMe SSD and AI accelerator(Hailo) through the use of a PCIe slot(J62) below two Mini-PCIe slots on board. It is important to note that the CM4's PCIe is gen2.0 with a maximum theoretical speed of 5Gbps. If you are using a Gen3.0 or higher SSD, it may not be able to achieve the SSD's maximum speed. After testing, the reTerminal DM with installed SSD can achieve a maximum write speed of 230MB/s and a maximum read speed of 370MB/s. If you are unsure which SSDs are compatible, you can purchase following the accessories list below.

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
It's important to note that not all SSD cards available in the market support the second usage. Therefore, if you intend to use it as a boot drive and are unsure about which model to purchase, we recommend opting for our recommended **1TB SSD(SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))**. This model has been tested and verified for boot functionality, reducing the risk of compatibility issues and minimizing trial and error costs.
:::

### Encryption Chip TPM 2.0

The TPM features Infineon’s OPTIGA™ TPM SLB9670 which is compliant to the Trusted Computing Group (TCG) TPM 2.0 specification is recommened as encryption chip to the reComputer R1000. The chip features an SPI interface applied for port J13 on board, to enable a root of trust for platform integrity, remote attestation, and cryptographic services.

:::note
[Please click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

If you connect TPM 2.0 module to device, the following code can help check TPM connection.

```bash
ls /dev | grep tpm
```

If you see **tpm0** and **tpmrm0** in the output, it means that TPM (Trusted Platform Module) devices are detected and available on your system. This indicates that the TPM hardware is recognized and accessible, which is a good sign. You can proceed with using TPM-related functionalities or applications knowing that the devices are present and accessible.

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

The UPS is 7F, which operates in series. The UPS module is positioned between the DC5V and CM4 components, with a GPIO signal utilized to alert the CPU in the event of a power loss from the 5V supply. Upon receiving this signal, the CPU executes an urgent script before the super capacitor's energy is depleted, initiating a "$ shutdown" command.
<br />
The backup duration provided by the UPS heavily relies on the system load. Below are some typical scenarios tested with a CM4 module featuring 4GB RAM, 32GB eMMC storage, and a Wi-Fi module.
<br />

| Mode of Operation | Time(s) | Remark                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| Idle              | 37      | Testing under idle conditions with official driver program loaded |
| Full load of CPU  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
For UPS function please contact us for more information, and the alarm signal is active LOW.
[Please click here for assemble instruction](/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

A GPIO25 between CPU and DC/AC power in is used to alarm CPU when the 5V power supply is down. Then the CPU should do something urgent in a script before energy exhaustion of super capacitor and run a `$ shutdown`
<br />
Another way to use this function is Initiate a shutdown when GPIO pin changes. The given GPIO pin is configured as an input key that generates KEY_POWER events. This event is handled by systemd-logind by initiating a shutdown.
Use `/boot/overlays/README` as reference, then modify `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. For UPS function please contact us for more information.
2. The alarm signal is active LOW.

:::

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

### DSI & Speaker

One DSI (J24)and one 4-pin Spearker (J7)interfaces are reserved on board, for special usage. Users are requested to purchase plug-ins according to your own needs.

## Additional Resources

- [User manual-reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [User manual-reComputer R1000 in Chinese](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [reComputer R1000 3D File](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 Schematic Desing, PCB Desing](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1000 Flyer](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [reComputer R1000 Flyer in Chinese](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [reComputer R1000 v1.1 Pin Assignment](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

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
