---
description: Introduction
title: Wio-S3 Wireless Module Introduction
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_introduction
sku: 100020327,100079384
sidebar_position: 1
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/wio-s3_wireless_module_introduction/
---

<!-- ![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

---

:::tip SenseCAP Module Comparison
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_1.jpg" width="800" alt="appearance" />
</div>
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_2.jpg" width="800" alt="appearance" />
</div>
:::

## Product Introduction

[Wio-S3 wireless module](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) is embedded with the [ESP32-S3R8](https://www.espressif.com/en/products/socs/esp32-s3/) dual core Xtensa® LX7 MCU and the long range [SX1262 LoRa chip](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262). It supports LoRaWAN frequency plan on EU868, US915 and more, as well as **2.4GHz Wi-Fi and BLE 5.0 connectivity**. It integrates 16MB Flash and 8MB PSRAM, making it ideal for edge AI processing. 

We offer two versions (with or without an onboard IPEX connector), offering developers versatile antenna integration options. Equipped with a TCXO, it ensures stable and accurate RF performance, which is suitable for IoT applications that require long range, high performance, and reliable wireless communication.

:::info
| SKU | Name | Specification |
| :--- | :--- | :--- |
| 100020327 | Wio-S3 Wireless Module | With IPEX connector |
| 100079384 | Wio-S3-N Wireless Module | Without IPEX connector |
:::

![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module.jpg)

:::tip
If you are not quite familiar with LoRa® and LoRaWAN®, check out this article [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) for detail.
:::

## Features

- **Powerful MCU**: Based on ESP32-S3R8 dual-core Xtensa® LX7 MCU with clock speeds up to 240 MHz.
- **Large Memory Capacity**: Equipped with 16 MB external Flash and 8 MB PSRAM for complex IoT and edge AI applications.
- **Wi-Fi & Bluetooth® Connectivity**: Supports 2.4 GHz Wi-Fi (IEEE 802.11 b/g/n) and Bluetooth® 5.0 Low Energy.
- **Advanced LoRa® Transceiver & Global LoRaWAN® Support**: Based on the Semtech SX1262 chip for long-range, low-power wireless communication. Compatible with multiple LoRaWAN® frequency plans including EU868, US915, AU915, AS923, KR920, and IN865 for worldwide deployment.
- **Rich Peripheral Interfaces**: Supports UART, I2C, SPI, USB, ADC, PWM, I2S, SD/MMC, CAN (TWAI®), and GPIOs.
- **High RF Performance**:
  - Sensitivity: Up to -137 dBm @ SF12, BW125 kHz
  - RF Output Power: Up to 20.9 dBm @ 868/915 MHz
- **High Stability**: Integrated TCXO ensures stable frequency reference and reliable RF communication.
- **Ultra-low Power Consumption**: As low as 9.3 μA sleep current.
- **RF Shielding Design**: Integrated shielding cover for enhanced signal integrity and EMI protection.
- **Flexible Antenna Options**: Available with or without an onboard IPEX connector, providing versatile antenna integration choices.
- **Compact SMT Form Factor**: 21.6 × 16.5 × 3.3 mm, 38-pin SMT package for easy integration into space-constrained designs.
- **Easy to Use**: Comes with built-in command firmware and supports custom product development using an SDK.
- **Cost-effective Solution**: Optimized hardware design delivers strong performance at a competitive cost.
- **Designed for IoT Applications**: Ideal for smart agriculture, industrial IoT, environmental monitoring, asset tracking, and edge AI deployments.
- **FCC, CE, Telec Certified**


:::note
If you have a large quantity request or need any further information on Seeed IIoT products and services, please don't hesitate to contact us directly at order@seeed.cc or click [here](https://solution.seeedstudio.com/contact-us/). We'll be happy to offer you our best discount price. We are excited to see you can scale up and expand your business with our products and services.
:::

## Applications

Ideal for LoRaWAN® sensor nodes and a wide range of wireless communication applications, including environmental monitoring, smart agriculture, industrial IoT, asset tracking, smart cities, and remote sensing systems.

![applications](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/application.jpg)

- **Smart Agriculture**: Enables remote monitoring of environmental conditions, supporting precision farming and smart irrigation.
- **Industrial Automation**: Supports industrial monitoring and mesh networking, improving system efficiency and reliability in complex environments.
- **IoT Data Logging & Remote Monitoring**: Ideal for low-power data loggers and distributed sensing applications, ensuring stable long-range communication.
- **Healthcare & Wearables**: Powers health monitoring and wearable devices with reliable data transmission and low-power operation.
- **AIoT & Human-Machine Interface**: Supports edge AI applications such as voice and image recognition, as well as touch and interactive control systems.

## Hardware Pinout

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout-2.jpg" width="700" alt="appearance" />
</div>

| Pin No. | Name | Type | Description |
| :--- | :--- | :--- | :--- |
| 1 | ESP_GPIO47 | I/O/T | MCU GPIO |
| 2 | ESP_GPIO38 | I/O/T | MCU GPIO |
| 3 | ESP_GPIO39 | I/O/T | MCU GPIO |
| 4 | ESP_GPIO40 | I/O/T | MCU GPIO |
| 5 | ESP_GPIO41 | I/O/T | MCU GPIO |
| 6 | ESP_GPIO42 | I/O/T | MCU GPIO |
| 7 | ESP_GPIO43 / UART0_TX | I/O/T | MCU GPIO; UART0_TX from MCU |
| 8 | ESP_GPIO44 / UART0_RX | I/O/T | MCU GPIO; UART0_RX from MCU |
| 9 | ESP_GPIO45 | I/O/T | MCU GPIO |
| 10 | ESP_GPIO46 | I/O/T | MCU GPIO |
| 11 | ESP_GPIO3 | I/O/T | MCU GPIO |
| 12 | ESP_GPIO2 | I/O/T | MCU GPIO |
| 13 | ESP_GPIO1 | I/O/T | MCU GPIO |
| 14 | ESP_BOOT | I/O/T | MCU GPIO0, <br />Boot Mode: Pull low to enter Download Boot Mode. |
| 15 | ESP_RST | I | CHIP_PU: <br />High Level: Chip Enabled; <br />Low Level: Chip Disabled; Ensure that the CHIP_PU pin is not left floating. |
| 16 | GND | - | Ground |
| 17 | GND | - | Ground |
| 18 | WIFI / BT_ANT / NC | I/O | WiFi and BT RF Input and Output from MCU |
| 19 | GND | - | Ground |
| 20 | GND | - | Ground |
| 21 | VCC 3V3 | - | Supply voltage for the module |
| 22 | GND | - | Ground |
| 23 | GND | - | Ground |
| 24 | ESP_GPIO11 | I/O/T | MCU GPIO |
| 25 | ESP_GPIO10 | I/O/T | MCU GPIO |
| 26 | ESP_GPIO12 | I/O/T | MCU GPIO |
| 27 | ESP_GPIO13 | I/O/T | MCU GPIO |
| 28 | ESP_GPIO14 | I/O/T | MCU GPIO |
| 29 | ESP_GPIO15 | I/O/T | MCU GPIO |
| 30 | ESP_GPIO16 | I/O/T | MCU GPIO |
| 31 | ESP_GPIO17 | I/O/T | MCU GPIO |
| 32 | ESP_GPIO18 | I/O/T | MCU GPIO |
| 33 | ESP_GPIO19 / USB_DM | I/O/T | MCU GPIO; USB_D- from MCU |
| 34 | ESP_GPIO20 / USB_DP | I/O/T | MCU GPIO; USB_D+ from MCU |
| 35 | ESP_GPIO48 | I/O/T | MCU GPIO |
| 36 | GND | - | Ground |
| 37 | LORA_ANT / NC | - | LoRa RF Input and Output |
| 38 | GND | - | Ground |
| 39 | GND | - | Ground |

## Specifications

<table class="tg">
<thead>
  <tr>
    <th>Items</th>
    <th>Parameter</th>
    <th colspan="4">Specifications</th>
    <th>Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Core</td>
    <td>MCU</td>
    <td colspan="4">Xtensa® 32-bit LX7 (dual core, up to 240MHz)</td>
    <td></td>
  </tr>
  <tr>
    <td>Storage</td>
    <td colspan="4">16MB Flash, 512KB SRAM</td>
    <td></td>
  </tr>
  
  <tr>
    <td rowspan="2">Structure</td>
    <td>Size</td>
    <td colspan="4">21.6*(L) * 16.5(W) * 3.3(H)</td>
    <td>mm</td>
  </tr>
  <tr>
    <td>Package</td>
    <td colspan="4">38 pins, SMT</td>
    <td></td>
  </tr>
  
  <tr>
    <td rowspan="16">Electrical Characteristics</td>
    <td>Power Supply</td>
    <td colspan="4">3.0 - 3.6V (3.3V typical)</td>
    <td>V</td>
  </tr>
  <tr>
    <td>Minimum Sleep Current</td>
    <td colspan="4">9.3uA</td>
    <td>uA</td>
  </tr>
  <tr>
    <td>Minimum Standby Current</td>
    <td colspan="4">1.43 </td>
    <td>mA</td>
  </tr>
  <tr>
    <td rowspan="3">Operation Current (Transmitter+MCU)</td>
    <td colspan="4">113mA @16dBm in 868MHz type</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td colspan="4">125mA @22dBm in 868MHz type</td>
  </tr>
  <tr>
    <td colspan="4">127mA @22dBm in 915MHz type</td>
  </tr>
  <tr>
    <td rowspan="2">Operation Current (Receiver+MCU)</td>
    <td colspan="4">5.5mA @BW125kHz, 868MHz type</td>
    <td rowspan="2">mA</td>
  </tr>
  <tr>
    <td colspan="4">5.7mA @BW125kHz, 915MHz type</td>
  </tr>
  <tr>
    <td rowspan="2">Output power</td>
    <td colspan="4">20.9dBm max @868MHz LoRa</td>
    <td rowspan="2">dBm</td>
  </tr>
  <tr>
    <td colspan="4">20.74dBm max @915MHz LoRa</td>
  </tr>
  <tr>
    <td rowspan="4">Sensitivity</td>
    <td colspan="4">@SF12, BW125kHz</td>
    <td rowspan="4">dBm</td>
  </tr>
  <tr>
    <td>Fr(MHz)</td>
    <td colspan="2">type</td>
    <td colspan="2">max</td>
  </tr>
  <tr>
    <td>868</td>
    <td colspan="2">-137</td>
    <td colspan="2">-137</td>
  </tr>
  <tr>
    <td>915</td>
    <td colspan="2">-136.5</td>
    <td colspan="2">-136.9</td>
  </tr>
<tr>
    <td rowspan="2">Harmonics (LoRa)</td>
    <td colspan="4">&lt; -41dBm (2nd Harmonic)</td>
    <td rowspan="2">dBm</td>
</tr>
<tr>
    <td colspan="4">&lt; -49dBm (3rd Harmonic)</td>
</tr>
  
  <tr>
    <td rowspan="8">Interface</td>
    <td>RFIO</td>
    <td colspan="4">2 RF ports (Wi-Fi/BT & LoRa)</td>
    <td></td>
  </tr>
  <tr>
    <td>UART</td>
    <td colspan="4">3 groups of UART</td>
    <td></td>
  </tr>
  <tr>
    <td>I2C</td>
    <td colspan="4">2 groups of I2C</td>
    <td></td>
  </tr>
  <tr>
    <td>ADC</td>
    <td colspan="4">2 groups of ADC, 12-bit</td>
    <td></td>
  </tr>
  <tr>
    <td>SPI</td>
    <td colspan="4">1 group of SPI</td>
    <td></td>
  </tr>
  <tr>
    <td>USB</td>
    <td colspan="4">1 group of USB</td>
    <td></td>
  </tr>
  <tr>
    <td>NRST</td>
    <td colspan="4">1 Manual reset pin input</td>
    <td></td>
  </tr>
  <tr>
    <td>BOOT</td>
    <td colspan="4">1 Manual Boot pin input</td>
    <td></td>
  </tr>
  
  <tr>
    <td>Temperature</td>
    <td>Working Temperature</td>
    <td colspan="4">-40 ~ 85</td>
    <td>℃</td>
  </tr>
</tbody>
</table>

## Power Consumption

<table class="tg">
<thead>
  <tr>
    <th colspan="2">Mode</th>
    <th>Power Type</th>
    <th>Items</th>
    <th>Data (avg)</th>
    <th>Note</th>
  </tr>
</thead>
<tbody>
<tr>
    <td rowspan="6">WiFi</td>
    <td rowspan="3">WiFi Tx</td>
    <td rowspan="6">3.3V</td>
    <td>802.11B</td>
    <td>349mA</td>
    <td rowspan="6">WiFi antenna connected, LoRa sleeping</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>333mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>310mA</td>
</tr>
<tr>
    <td rowspan="3">WiFi Rx</td>
    <td>802.11B</td>
    <td>104mA</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>103mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>103mA</td>
</tr>

<tr>
    <td rowspan="8">LoRa</td>
    <td rowspan="3">LoRa Tx</td>
    <td rowspan="3">3.3V</td>
    <td>868MHz, 16dBm</td>
    <td>113mA</td>
    <td rowspan="8">LoRa antenna connected, WiFi & BLE off</td>
</tr>
<tr>
    <td>868MHz, 22dBm</td>
    <td>125mA</td>
</tr>
<tr>
    <td>915MHz, 22dBm</td>
    <td>127mA</td>
</tr>
<tr>
    <td rowspan="3">LoRa Tx</td>
    <td rowspan="3">3.0V</td>
    <td>868MHz, 16dBm</td>
    <td>109mA</td>
</tr>
<tr>
    <td>868MHz, 22dBm</td>
    <td>124mA</td>
</tr>
<tr>
    <td>915MHz, 22dBm</td>
    <td>123mA</td>
</tr>
<tr>
    <td rowspan="2">LoRa Rx</td>
    <td rowspan="2">3.3V</td>
    <td>868MHz</td>
    <td>5.5mA</td>
</tr>
<tr>
    <td>915MHz</td>
    <td>5.7mA</td>
</tr>

<tr>
    <td rowspan="2" colspan="2">WiFi + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>WiFi 11B AP + LoRa 915MHz, 22dBm</td>
    <td>201mA</td>
    <td></td>
</tr>
<tr>
    <td>WiFi 11B AP + LoRa 868MHz, 16dBm</td>
    <td>189mA</td>
    <td></td>
</tr>

<tr>
    <td rowspan="2" colspan="2">BLE + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>BLE advertising + LoRa 915MHz, 22dBm</td>
    <td>158mA</td>
    <td></td>
</tr>
<tr>
    <td>BLE advertising + LoRa 868MHz, 16dBm</td>
    <td>146mA</td>
    <td></td>
</tr>

<tr>
    <td colspan="2">Deep Sleep</td>
    <td>3.3V</td>
    <td>ESP32-S3 Deep Sleep, LoRa Sleep</td>
    <td>9.3uA</td>
    <td>ESP32-S3: all peripherals off, deep sleep</td>
</tr>

<tr>
    <td colspan="2">Standby / Light Sleep</td>
    <td>3.3V</td>
    <td>ESP32-S3 Light Sleep, LoRa Standby</td>
    <td>1.43mA</td>
    <td>ESP32-S3: light sleep, RTC/ULP active, wake on any event; LoRa standby (STDB_RC), internal RC wake; all RF off</td>
</tr>
</tbody>
</table>

:::note
The above power consumption data was measured under laboratory test conditions and is provided for reference only. Actual power consumption may vary depending on firmware, peripherals, operating mode, environmental conditions, and hardware configuration.
:::

## Typical RF performance test

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF1.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF2.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF3.jpg" width="700" alt="appearance" />
</div>

## Package information

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/appearance.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/layout.jpg" width="500" alt="layout" />
</div>

## Reference design based on Wio-S3 module

This reference design facilitates the quick development of dual-mode LoRaWAN® and Wi-Fi/Bluetooth nodes, allowing users to achieve rapid configuration simply by sending commands over the dedicated UART interface. The system integrates dual 5V USB-C inputs with 1A fuse protection, a PMOS-controlled 3.3V BUCK regulator, and dedicated U.FL RF ports, while routing essential RST, BOOT (GPIO0), and peripheral GPIO pins for easy programming and sensor expansion.

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/reference-design-of-s3.png" width="1000" alt="layout" />
</div>

## Sources

### Datasheet

- [Wio-S3 Datasheet & Specifications](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Module_Datasheet_V1.0.pdf)
- [Espressif ESP32-S3R8 Datasheet](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Espressif_ESP32-S3R8_Datasheet.pdf)
- [Semtech SX1262 Datasheet](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/SX1261_2%20V2-2.pdf)

### Library

- [Wio-S3 kicad library](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Wireless_Module_Kicad_File.zip)
- [Wio-S3 STEP 3D File](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3%20Wireless%20Module_3D.step)

### Relevant SDK

- [ESP-IDF User Guide for ESP32-S3, SDK](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)
- [ESP32-S3 Test Tools and Guidelines](https://docs.espressif.com/projects/esp-test-tools/en/latest/esp32s3/index.html)


    
## Tech Support & Product Discussion

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>