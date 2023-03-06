---
description: SenseCAP M1 Overview
title: SenseCAP M1 Overview
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---

**General Information**
=======================

**SenseCAP M1** is a high-performing, ready-to-use **LoRaWAN indoor gateway** connected to the **Helium LongFi™ Network.**  
It is based on Raspberry Pi 4 and embedded with a WM1302/WM1303 (Semtech SX1302/SX1303) LoRa concentrator. It provides built-in BLE, which helps you set up the device in a few simple steps and supports connecting to the internet via Wi-Fi or Ethernet.

![SenseCAP M1 Gateway](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp)

* * *

**Features**
============

![SenseCAP M1 Features](https://www.sensecapmx.com/wp-content/uploads/2022/06/features.jpg)

*   **Handy Setup to Helium Network:** Ready to go within simple steps.
*   **Powered by Mature Hardware Solutions:** Raspberry Pi 4(2G/4G/8G RAM, 64G storage) and WM1302/WM1303 (Semtech SX1302/SX1303) baseband LoRa chip.
*   **Secure and Reliable:** Built-in ECC608 crypto chip, high-security authentication, and reliable connectivity.
*   **Automatic Online Upgrades**: Automatic OTA upgrades, without manual operation.
*   **Remote Diagnosis**: Built-in remote diagnostics mechanism, efficient online support.
*   **64GB Large Storage**: 64GB MicroSD card large storage, extending the lifetime of the gateway, fulfilling the memory requirement of potential upgrade.
*   **Efficient Cooling Solution**: Aluminum enclosure with a heatsink and cooling fan inside, ensuring long-term and stable operation.
*   **Multiple Accessories**: Fiberglass antenna, slider pad for sliding rod installation, and upcoming outdoor enclosure, etc.
*   **FCC and CE Certificated**: Available for personal and commercial use.  
    
    * * *
    

**Package Contents**
====================

*   SenseCAP M1 LoRaWAN Indoor Gateway (EU868/US915) \*1
*   Power Adapter (EU/US)\*1
*   Antenna (EU868/US915) \*1
*   64GB MicroSD Card \*1
*   Quick Start Guide \*1

![SenseCAP M1 Package Contents](https://www.sensecapmx.com/wp-content/uploads/2022/06/package-contents.png)

* * *

**General Overview**
====================

![SenseCAP M1 General Overview](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-1.webp)

![SenseCAP M1 Breakdown](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-2.webp)

![SenseCAP M1 Breakdown 2](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-3.webp)

* * *

**Interface**
=============

![SenseCAP M1 Interface](https://www.sensecapmx.com/wp-content/uploads/2022/06/interface-1.webp)

* * *

**Dimensions**
==============

![SenseCAP M1 Dimensions](https://www.sensecapmx.com/wp-content/uploads/2022/06/dimensions-1.webp)

*   **Device Size (/pcs):** 154\*100\*44 mm
*   **Device Weight (/pcs)**: 370g
*   **Package Size (/pcs)**: 274\*175\*60 mm
*   **Package Weight (/pcs)**: 675g  
    
    * * *
    

**Block Diagram**
=================

![SenseCAP M1 Block Diagram](https://www.sensecapmx.com/wp-content/uploads/2022/06/block-diagram.webp)

* * *

**System Structure**
====================

![SenseCAP M1 System Structure](https://www.sensecapmx.com/wp-content/uploads/2022/06/system-structure.webp)

* * *

**LED Status**
==============

![SenseCAP M1 LED Status](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status.webp)

* * *

**Unit Information**
====================

![SenseCAP M1 Unit Information](https://www.sensecapmx.com/wp-content/uploads/2022/06/unit-info.webp)

These two labels on the bottom indicate important information of the unit including:

*   Model
*   S/N
*   WiFi MAC
*   ETH MAC
*   CPU ID

This information will be required when registering for the **SenseCAP Dashboard**.

* * *

**Datasheet**
=============

<table style={{width: '45.6785%'}} border={0} cellSpacing={0} cellPadding={0}><tbody><tr><td style={{width: '28.2523%'}} valign="top">Processor</td><td style={{width: '71.4849%'}} valign="top">Raspberry Pi 4 (Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">RAM</td><td style={{width: '71.4849%'}} valign="top">2GB / 4GB / 8GB</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Storage</td><td style={{width: '71.4849%'}} valign="top">64GB MicroSD Card</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Frequency</td><td style={{width: '71.4849%'}} valign="top">EU868 Version: 863MHz ~ 870MHz<br />AS923 Version: 902MHz ~ 928MHz<br />US915 Version: 902MHz ~ 928MHz</td></tr><tr><td style={{width: '28.2523%'}} rowSpan={2} valign="top">Sensitivity</td><td style={{width: '71.4849%'}} valign="top">-125dBm @125KHz/SF7</td></tr><tr><td style={{width: '71.4849%'}} valign="top">-139dBm @125KHz/SF12</td></tr><tr><td style={{width: '28.2523%'}} valign="top">TX Power</td><td style={{width: '71.4849%'}} valign="top">Up to 26 dBm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Antenna Gain</td><td style={{width: '71.4849%'}} valign="top"><p>US915: 2.6 dBi</p><p>EU868: 2.8 dBi</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">Antenna Impedance</td><td style={{width: '71.4849%'}} valign="top">50 Ohm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Antenna Radiation Pattern</td><td style={{width: '71.4849%'}} valign="top">Omni-Directional</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Wi-Fi</td><td style={{width: '71.4849%'}} valign="top">2.4 GHz and 5.0 GHz IEEE 802.11ac wireless</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Bluetooth</td><td style={{width: '71.4849%'}} valign="top">Bluetooth 5.0, BLE</td></tr><tr><td style={{width: '28.2523%'}} valign="top">LoRaWAN</td><td style={{width: '71.4849%'}} valign="top">Supports Class A, C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Input Voltage</td><td style={{width: '71.4849%'}} valign="top">DC 5V - 3A</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Interfaces</td><td style={{width: '71.4849%'}} valign="top"><p>USB Type-C (Power Supply) * 1</p><p>Ethernet RJ45 * 1</p><p>RP-SMA Female Antenna Connector* 1</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">Operating Temperature</td><td style={{width: '71.4849%'}} valign="top">0°C to 50°C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Relative Humidity</td><td style={{width: '71.4849%'}} valign="top">0% - 90% (non-condensing)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Heat Dissipation</td><td style={{width: '71.4849%'}} valign="top">Aluminum enclosure, a heatsink, and a cooling fan</td></tr><tr><td style={{width: '28.2523%'}} valign="top">IP Grade</td><td style={{width: '71.4849%'}} valign="top">IP20</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Certification</td><td style={{width: '71.4849%'}} valign="top">FCC / CE / RCM / ROHS / UKCA...</td></tr></tbody></table>
