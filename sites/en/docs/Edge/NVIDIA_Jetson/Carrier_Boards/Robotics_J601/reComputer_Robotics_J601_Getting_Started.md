---
description: Preliminary getting started page for the reComputer Robotics J601 carrier board designed for NVIDIA Jetson AGX Thor modules.
title: Getting Started with reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
last_update:
  date: 04/24/2026
  author: Codex
createdAt: '2026-04-24'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# Getting Started with reComputer Robotics J601

:::note
This page is a preliminary draft for the upcoming reComputer Robotics J601 carrier board for NVIDIA Jetson AGX Thor modules. Specifications, software support, accessory bundles, and mechanical details are still subject to change.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

The reComputer Robotics J601 is a robotics-focused carrier board for NVIDIA Jetson AGX Thor modules. It is intended for high-performance embodied AI and robotic control workloads that require high-speed networking, industrial I/O, GMSL camera expansion, and wide-range DC input in a compact carrier-board form factor.

## Preliminary Features

- Support for **NVIDIA Jetson AGX Thor** module
- **M.2 Key M** slot for NVMe 2280 SSD
- **M.2 Key E** slot for Wi-Fi/Bluetooth module
- **M.2 Key B** slot for 5G module and **Nano SIM** support
- High-speed Ethernet with planned **PTP** and **EtherCAT** support
- Rich robotics I/O including **CAN**, **RS-232/422/485**, **DI/DO**, **I2C**, **I2S**, **SPI**, and **GPIO**
- **GMSL expansion** for up to **8 cameras**
- Wide-range **19V to 48V DC** input through **XT30**
- Target software platform: **JetPack 7**

## Preliminary Specifications

The following table intentionally keeps only the clearer parts of the current hardware definition and leaves the unsettled items as TBD.

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Module</td>
      <td>NVIDIA Jetson AGX Thor x 1</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>1x M.2 Key M for M.2 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td>Ethernet definition in progress; preliminary plan includes high-speed RJ45 ports with PTP and EtherCAT support</td>
    </tr>
    <tr>
      <td>Wireless Expansion</td>
      <td>1x M.2 Key E for Wi-Fi/Bluetooth, 1x M.2 Key B for 5G, 1x Nano SIM</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>Up to 4x USB 3.2 Type-A (Host), 1x USB 2.0 Type-C (Debug UART / Device Mode), 1x USB 3.0 Type-C for flashing</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI</td>
    </tr>
    <tr>
      <td>Cooling</td>
      <td>1x 4-pin fan connector (12V PWM); carrier board and fan are planned to be sold separately</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td>GMSL expansion, up to 8 cameras</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x CAN via JST connectors</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>2x RS-232/422/485 via DB9, 1x RS-232/422/485 via DB9, 1x RS-485 via JST 4-pin</td>
    </tr>
    <tr>
      <td>Digital I/O</td>
      <td>4x DI and 4x DO via JST terminal connectors</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x I2S, 2x amplifier output, 1x microphone input</td>
    </tr>
    <tr>
      <td>Low-speed Expansion</td>
      <td>1x I2C, 1x SPI, GPIO via JST/pin header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td>Buttons</td>
      <td>Recovery and Reset</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>PWR, ACT, and user-defined RGB LED</td>
    </tr>
    <tr>
      <td>Power Input</td>
      <td>XT30, 19V to 48V DC</td>
    </tr>
    <tr>
      <td>Current / Power</td>
      <td>10A max current, 160W system power definition</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-10°C to +60°C</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>10% to 95% RH</td>
    </tr>
    <tr>
      <td>Certification</td>
      <td>CE, FCC, RoHS, target EMI class: Class A</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td>Target carrier board size within 150 mm x 130 mm</td>
    </tr>
  </tbody>
</table>
</div>

## LED and Button Definition

### Buttons

| Button | Pin | Signal | Type | Description |
| --- | --- | --- | --- | --- |
| RECOVERY | 240 | - | CMOS-5V | Used for system recovery / low-level configuration flow |
| RESET | 239 | SYS_RESET* | Open Drain, 1.8V | Pull low to reset the module; when module power is ready, high level can be used as carrier-board power enable |

### LED Indicators

| LED | Color | Status | Description |
| --- | --- | --- | --- |
| PWR | Green | On | The device is connected to power |
| PWR | Green | Off | The device is not connected to power |
| ACT | Green | Flashing | SSD activity |
| USER | R / G / B | TBD | User-defined behavior |

## Software

- Planned software baseline: **JetPack 7**
- Planned Ethernet capability: **EtherCAT**
- Detailed flashing guide, BSP package, and validation steps: **TBD**

## Planned Camera Adaptation

The current requirement list includes the following GMSL camera models:

- Senyun `SG3S-ISX031C-GMSL2F`
- Senyun `SG2-AR0233C-5200-G2A`
- Senyun `SG2-IMX390C-5200-G2A`
- Senyun `SG8S-AR0820C-5300-G2A`
- Orbbec `335LG`

## Thermal Design

This carrier board is intended for use inside humanoid robot enclosures, where customers may design their own thermal solution. Seeed plans to provide thermal design guidance for AGX Thor-based deployment.

Reference document:

- `Jetson_Thor_Thermal_DG_TDG12271001_v1.0.pdf`

## Preliminary Packing List

### Accessories

- XT30 to DC cable, 200 mm x 1
- JST loose wire harnesses, 100 mm x 10
- USB Type-C to Type-A cable, 1 m x 1
- Screw for Key E x 1
- Screw for Key M x 1
- Screw for Key B x 1
- Screws for AGX Thor SOM x 4
- Studs for carrier board support x 4
- Screws for studs x 4
- User manual x 1

### Packaging

- Airplane box
- Inner tray for the carrier board and accessories
- User manual on top with an additional foam layer
- Packaging style similar to the mini J501 carrier board

## Resources

- Detailed hardware layout: TBD
- Flashing guide: TBD
- BSP release notes: TBD

## Tech Support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
