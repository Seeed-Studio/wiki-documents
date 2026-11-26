---
title: Getting Started with Wio-LR2021 Dev Kit
description: Get started with the Wio-LR2021 Dev Kit
keywords:
  - Wio-LR2021
  - Semtech LR2021
  - ESP32-S3
  - LoRa
  - FLRC
  - Dev Kit
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_getting_started
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/02/2026
  author: David Du
createdAt: '2026-11-02'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/wio_lr2021_dev_kit_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introduction

The **Wio-LR2021 Dev Kit** is a dual-band LoRa development kit that pairs Semtech's LR2021 transceiver with an **ESP32-S3**. The radio module covers from 150 ~ 960 MHz and the 2400 ~ 2500 MHz band from a single package, so one board can move between long-range links and worldwide channels in software. FLRC adds burst rates up to 2.6 Mbps for images and audio, and the ESP32-S3R8, with 8 MB PSRAM and 16 MB flash, can judge a camera frame before it reaches the air.

A detachable Media HAT carries a **2 MP GC2145 camera**, a **MEMS microphone**, an **ES8311 codec** and an **NS4150B amplifier** with a speaker connector. On the main board you also get a 128 × 64 OLED, a **PCA9535 expander** that switches four peripheral power rails, a 3.7 V Li-ion and a 5 V solar input behind a CN3165 charger, a Grove port and two 16-pin headers.

The kit ships with a factory firmware, so you can check the radio, the camera, the display, the audio path and the battery from a terminal before writing any firmware.

### Specifications

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MCU</td>
      <td>**ESP32-S3R8**, dual-core Xtensa LX7 up to 240 MHz</td>
    </tr>
    <tr>
      <td>RF transceiver</td>
      <td>Semtech LR2021, integrated in the **Wio-LR2021 module**</td>
    </tr>
    <tr>
      <td>Frequency bands</td>
      <td>150 ~ 960 MHz and 2400 ~ 2500 MHz</td>
    </tr>
    <tr>
      <td>Modulation</td>
      <td>LoRa (SF5 ~ SF12), (G)FSK, FLRC, LR-FHSS</td>
    </tr>
    <tr>
      <td>Transmit power</td>
      <td>up to `+22` dBm (sub-GHz), up to `+12` dBm (2.4 GHz)</td>
    </tr>
    <tr>
      <td>Wi-Fi and Bluetooth</td>
      <td>802.11 b/g/n 2.4 GHz, Bluetooth 5 LE</td>
    </tr>
    <tr>
      <td>Antenna connectors</td>
      <td>2 × SMA (sub-GHz, 2.4 GHz) plus 3 × U.FL</td>
    </tr>
    <tr>
      <td>Type-C Interface</td>
      <td>USB-C with native USB-Serial-JTAG, no bridge chip</td>
    </tr>
    <tr>
      <td>Grove Interface</td>
      <td>Grove port plus 2 × 16-pin 2.54 mm headers</td>
    </tr>
    <tr>
      <td>Buttons and LEDs</td>
      <td>USER, BOOT and RESET buttons; 1 power LED; 1 user LED</td>
    </tr>
    <tr>
      <td>I/O expander</td>
      <td>**PCA9535**, 16 I/O, I2C address: `0x21`</td>
    </tr>
    <tr>
      <td>OLED</td>
      <td>128 × 64 monochrome, 0.96 inch, **CH1116** driver, I2C address: `0x3D`</td>
    </tr>
    <tr>
      <td>Camera (HAT)</td>
      <td>**GC2145**, 2 MP, 8-bit DVP interface</td>
    </tr>
    <tr>
      <td>Audio (HAT)</td>
      <td>**ES8311** codec, **NS4150B** amplifier, MEMS microphone, speaker connector</td>
    </tr>
    <tr>
      <td>Power Interface</td>
      <td>USB-C 5 V, solar 5 V (JST), 3.7 V Li-ion (JST)</td>
    </tr>
    <tr>
      <td>Charging IC</td>
      <td>**CN3165**, 495 mA charge current</td>
    </tr>
    <tr>
      <td>Regulators</td>
      <td>**TPS62A03** buck (3.3 V system), **SGM2059** LDO (radio rail)</td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td>55 × 38.5 mm main board, 55 × 38.5 mm Media HAT</td>
    </tr>
    <tr>
      <td>Mounting Hole</td>
      <td>3 × M2 holes</td>
    </tr>
  </tbody>
</table>

### Features

- **Dual-band radio:** Sub-GHz and 2.4 GHz share one module, so a single design covers worldwide bands.
- **Fast bursts:** FLRC carries an image at up to 2.6 Mbps, then drops back to LoRa when range matters.
- **On-device vision:** 8 MB PSRAM buffers camera frames, so the radio sends a conclusion instead of pixels.
- **Detachable media HAT:** Camera, microphone, codec and amplifier ride two 16-pin connectors.
- **Field power:** A 5 V solar input and a 3.7 V Li-ion connector keep a node running off-grid.
- **Switchable rails:** The PCA9535 gates the camera, audio, OLED and Grove rails from software.
- **Onboard display:** A 128 × 64 OLED on the shared I2C bus shows readings or link state without extra hardware.
- **Native USB:** USB-Serial-JTAG needs no bridge chip, so flashing and the console share one cable.

## Hardware Overview

The kit has two boards that share a 55 × 38.5 mm footprint. The main board carries the radio, the display and the power path; the Media HAT adds the camera and the audio path.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/Wio-LR2021_Dev_Kit_hardware.webp" style={{width:1000, height:'auto'}}/>
</div>

### Main Board Front

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **ESP32-S3R8** with 16 MB SPI NOR flash
2. **Wio-LR2021 module** carrying the LR2021 transceiver, with a 32 MHz TCXO integrated
3. **Sub-GHz SMA connector** for the 150 ~ 960 MHz port
4. **2.4 GHz SMA connector** for the 2400 ~ 2500 MHz port
5. **Three U.FL pads:** ESP32-S3 2.4 GHz, LR2021 2.4 GHz and LR2021 sub-GHz
6. **USB-C port** with native USB-Serial-JTAG
7. **Solar input** on a 2-pin JST connector, labelled `Solar-5V`
8. **Battery input** on a 2-pin JST connector, labelled `BAT-3.7V`
9. **Two 16-pin 2.54 mm headers**, one along each long edge

:::note
The SMA connectors and U.FL pads are connected to the same two RF nets through 0 Ω links. By default, the **SMA connectors** are enabled. To use the U.FL interface instead, please resolder the 0 Ω links to the corresponding alternative pads.
:::

### Main Board Back

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_back.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **128 × 64 OLED**, driven over I2C at address `0x3D`
2. **USER button** on `GPIO46`, with a 10 kΩ pull-up and a 100 nF debounce capacitor
3. **BOOT button** on `GPIO0`, pulls the chip into the download mode if enabled at reset
4. **RESET button**, wired to the ESP32-S3 enable pin (active LOW)
5. **Grove connector**, a 4-pin 2.0 mm standard socket
6. **User LED**, controled by the `P06` of the PCA9535 (active LOW)
7. **Power LED**, lit whenever the board has a live supply

:::caution
The USER button sits on `GPIO46`, which is a strapping pin on the ESP32-S3. If the button is held while RESET is released, the chip samples a LOW level on that strap and enter the download mode instead of booting. Release the button before resetting.
:::

### Media HAT

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **GC2145 camera**, 2 MP, connected over an `8-bit DVP` bus on a 24-pin FPC
2. **MEMS microphone** with an analog output, wired to the codec
3. **ES8311 codec**, I2S audio in and out, configured over I2C
4. **NS4150B Class-D amplifier** driving the speaker connector labelled `SPK`

## Pin Map

The main board breaks out two **16-pin headers** at 2.54 mm pitch. The Media HAT breaks out two **14-pin sockets** at 2.54 mm pitch which are able to plug into both headers on the main board.

:::caution
Since the **Main Board** uses a `16‑pin header` while the **Media Hat** expansion board uses only a `14‑pin socket`, careful attention MUST be paid to orientation during installation. Ensure that the pins are correctly **ALIGNED**. Incorrect installation may cause malfunction and could result in irreversible damage to the device.
:::

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_1.webp" style={{width:1000, height:'auto'}}/>
</div>


| Index | Function | ESP32-S3 pin | Description |
| --- | --- | --- | --- |
| 1 | VSYS | — | System rail, 5 V from USB or solar, 3.0 ~ 4.2 V on battery |
| 2 | GND | — | Ground |
| 3 | IIC0_SCL | GPIO48 | Shared I2C bus: OLED, PCA9535, HAT codec |
| 4 | IIC0_SDA | GPIO47 | Shared I2C bus: OLED, PCA9535, HAT codec |
| 5 | CODEC_I2S0_MCLK | GPIO41 | Audio clock for the ES8311 |
| 6 | CODEC_I2S0_LRCK | GPIO42 | Left and right channel select |
| 7 | GROVE_DAT_2 | GPIO43 | Grove data bit 2, UART0_TXD |
| 8 | GROVE_DAT_1 | GPIO44 | Grove data bit 1, UART0_RXD |
| 9 | CODEC_I2S0_SCLK | GPIO9 | Audio bit clock |
| 10 | CODEC_I2S0_DSDIN | GPIO1 | Playback data into the codec |
| 11 | CODEC_I2S0_SDOUT | GPIO2 | Recorded data from the codec |
| 12 | EXP_PWR_AUDIO_EN | PCA9535 `P02` | Enables the audio rail on the HAT |
| 13 | EXP_CAM_RESET | PCA9535 `P07` | Camera reset pin |
| 14 | EXP_PWR_CAM_EN | PCA9535 `P01` | Enables the camera rail on the HAT |
| 15 | EXP_GPIO_P16 | PCA9535 `P16` | Spare I/O through the expander |
| 16 | EXP_GPIO_P17 | PCA9535 `P17` | Spare I/O through the expander |

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_2.webp" style={{width:1000, height:'auto'}}/>
</div>

| Index | Function | ESP32-S3 pin | Description |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | — | 3.3 V system rail |
| 2 | GND | — | Ground |
| 3 | DVP_VSYNC | GPIO38 | Camera vertical sync, `VSYNC` on the HAT |
| 4 | DVP_HSYNC | GPIO39 | Camera horizontal sync, `HSYNC` on the HAT |
| 5 | DVP_D7 | GPIO21 | Camera data bit 7 |
| 6 | DVP_D6 | GPIO18 | Camera data bit 6 |
| 7 | DVP_D5 | GPIO17 | Camera data bit 5 |
| 8 | DVP_D4 | GPIO16 | Camera data bit 4 |
| 9 | DVP_D0 | GPIO15 | Camera data bit 0 |
| 10 | DVP_D3 | GPIO14 | Camera data bit 3 |
| 11 | DVP_PCLK | GPIO13 | Camera pixel clock |
| 12 | DVP_D1 | GPIO12 | Camera data bit 1 |
| 13 | DVP_D2 | GPIO11 | Camera data bit 2 |
| 14 | DVP_XCLK | GPIO10 | Camera master clock, generated by the ESP32-S3 |
| 15 | EXP_GPIO_P14 | PCA9535 `P14` | Spare I/O through the expander |
| 16 | EXP_GPIO_P15 | PCA9535 `P15` | Spare I/O through the expander |

<br />

### I/O Expander

The **PCA9535** answers at I2C address `0x21`, and its interrupt line runs to `GPIO3`. All 16 pins come up as inputs at power-on, so every rail and reset below stays inactive until firmware drives it.

| Port | Function | Notes |
| --- | --- | --- |
| P00 | — | Not connected |
| P01 | EXP_PWR_CAM_EN | Camera rail enable |
| P02 | EXP_PWR_AUDIO_EN | Audio rail enable |
| P03 | EXP_PWR_OLED_EN | OLED rail enable |
| P04 | EXP_PWR_GROVE_EN | Grove rail enable |
| P05 | EXP_OLED_RST | OLED reset |
| P06 | EXP_User_LED | User LED (active LOW) |
| P07 | EXP_CAM_RESET | Camera reset |
| P10 | EXP_BAT_ADC_CTR | Gates the battery divider into `GPIO8` |
| P11 | EXP_Sig_CHG_Done | Charge-complete flag from the CN3165 |
| P12 | EXP_Sig_CHGING | Charge-in-progress flag from the CN3165 |
| P13 | EXP_LoRa_RST | Wio-LR2021 reset |
| P14 | EXP_GPIO_P14 | PCA9535 `P14` |
| P15 | EXP_GPIO_P15 | PCA9535 `P15` |
| P16 | EXP_GPIO_P16 | PCA9535 `P16` |
| P17 | EXP_GPIO_P17 | PCA9535 `P17` |

<br />

### Power Supply

| Rail | Range | Notes |
| --- | --- | --- |
| VSYS | 3.0 ~ 5.5 V | Follows USB or solar when present, otherwise the battery |
| VCC_3V3 | 3.3 V | Buck output, up to the regulator current limit |
| VCC_Grove | 3.3 V | Switched by `P04`, protected by a 350 mA fuse |
| Solar+ | 5.0 V nominal | Reverse-blocked and over-voltage protected |
| BAT+ | 3.0 ~ 4.2 V | Li-ion cell, charged by the CN3165 |

:::caution
`VSYS` is not a fixed 3.3 V rail. With USB or solar connected it sits near 5.0 V and will damage a 3.3 V-only peripheral.
:::

<br />

### Strapping Pins

The ESP32-S3 samples four pins at reset: `GPIO0`, `GPIO3`, `GPIO45` and `GPIO46`. Two of them are routed out on the main board.

| Pin | Reaches | Description |
| --- | --- | --- |
| GPIO0 | BOOT button | Held **LOW** with USER button, the chip enters the serial download mode instead of booting the firmware |
| GPIO46 | USER button | Held **LOW** with BOOT button, the chip enters the serial download mode instead of booting the firmware |
| GPIO3 | Not exposed | used as the `INTERRUPT` pin of PCA9535 |
| GPIO45 | Not exposed | used as the `IRQ` pin of Wio-LR2021 |

## Getting Started

### Hardware Preparation

#### Step 1 — Attach the antennas

Screw the Sub-GHz antenna onto the connector marked `SUB-1G` and the 2.4 GHz antenna onto the connector marked `LR-2.4G`. Tighten by hand only. If you use U.FL antennas instead, resolder the 0 Ω links to the corresponding pads and leave the SMA connectors empty.

:::caution
Never transmit without an antenna. The LR2021 has no protection against an open port, and a continuous wave or a long transmit run into an open load can destroy the power amplifier.
:::

#### Step 2 — Fit the Media HAT (optional)

Line up the two 14-pin sockets on the HAT with the two 16-pin headers on the main board, and press down evenly on both ends. The HAT draws its power from the main board, so no extra cable is needed. Remove it the same way, lifting both ends together.

:::note
The back side of the expansion board is marked with the positions of the corresponding USB Type‑C ports on the motherboard, which can be used to determine the correct installation orientation. Next, locate the corresponding pins according to the pin's silkscreen on the PCB.
:::

The sockets sit on the Media HAT, and the silkscreen next to each one prints the ESP32-S3 pin number, so you can check the orientation without a diagram.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_back.webp" style={{width:1000, height:'auto'}}/>
</div>

#### Step 3 — Choose a power source

Any one of the three inputs will bring the board up: USB-C at 5 V, a 5 V solar panel on the `Solar-5V` JST connector, or a 3.7 V Li-ion cell on the `BAT-3.7V` connector. USB-C is the right choice for the first boot, because it also carries the serial console.

## Resources

- 📄 [ESP32-S3 Datasheet](https://documentation.espressif.com/esp32-s3_datasheet_en.pdf)

- 📄 [Wio-LR2021 Module Datasheet](https://files.seeedstudio.com/products/100058045/Wio-LR2021%20Module%20Datasheet.pdf)

- 📄 [Wio-LR2021 Dev Kit Main Board Schematic](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Schematic.pdf)

- 📄 [Wio-LR2021 Dev Kit Media HAT Schematic](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT_Schematic.pdf)

- 📄 [Wio-LR2021 Dev Kit Main Board 3D Model](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Main_Board.step)

- 📄 [Wio-LR2021 Dev Kit Media HAT 3D Model](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT.step)

- 🗃️ [Hardware Component Documentation](https://files.seeedstudio.com/products/100038329/doc/Hardware_Component_Documentation.zip)

- 📄 [Pinout Diagram](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_diagram.webp)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>