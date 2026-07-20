---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: Getting Started with reSpeaker Flex with Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/respeaker_flex_xiao_introduction/
---

# reSpeaker Flex with XIAO ESP32S3

## Overview

The reSpeaker Flex ESP32 version integrates a pre-soldered XIAO ESP32S3 module on the core board, providing built-in Wi-Fi and Bluetooth connectivity for wireless control and edge processing. Powered by the XMOS XVF3800 voice processor, the system maintains the same modular architecture where the microphone array board connects to the core board through a flexible 24-pin FPC cable, allowing flexible placement inside device enclosures. It supports both circular and linear 4-microphone arrays, enabling either 360° omnidirectional capture or directional front-facing pickup. The system can operate through USB (UAC 2.0) or I2S, while the integrated ESP32S3 enables IoT connectivity, local control, and easier integration with embedded applications.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>
    
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Features 

- **Split modular design**: Core board and microphone array board are physically separate, connected via FPC ribbon cable for flexible placement in any product chassis

- **Choice of microphone configurations**: Swap between circular 4-mic array (360° pickup, 44mm spacing) or linear 4-mic array (180° front directivity, 33mm spacing) using the same core board

- **XMOS XVF3800 audio processing**: Full suite of AEC, AGC, DoA, multi-channel beamforming, VAD, noise suppression, and de-reverberation

- **Dual operation modes**: USB UAC 2.0 for plug-and-play with PCs and SBCs; I2S mode for direct embedded integration

- **Dual USB connectivity**: USB-C port and PH2.0 locking port both support UAC 2.0 audio and DFU firmware upgrade

- **On-board speaker amplifier**: Supports driving 10W 4 Ohms speakers via JST connector, with 3.5mm AUX headphone output

- **XIAO ESP32S3 support**: Pre-solidered module adds Wi-Fi/Bluetooth, with I2S and I2C buses wired directly to XVF3800 for wireless control and audio forwarding

- **Firmware flexibility**: Dual USB firmware variants (2-channel and 6-channel), I2S firmware, DFU upgrade via dfu-util, and configuration persistence across power cycles

- **Python SDK**: Adjustable recording format, volume, algorithm parameters, and channel routing via Python


## Main Components 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### Core Board

| Component / Feature | Description |
|--------------------|------------|
| **Main Audio Processor** | XMOS XVF3800 (firmware v3.2.1), handles all audio DSP including AEC, beamforming, DoA, and noise suppression |
| **Audio Codec** | TLV320AIC3104, handles audio conversion and DAC output |
| **FPC Mic Array Interface** | 24-pin FPC connector with locking latch, supports up to 8-mic arrays with 2 GPIO lines |
| **USB-C Port** | UAC 2.0 audio, DFU firmware upgrade, and power |
| **PH2.0 Port** | Locking latch connector; provides the same UAC 2.0 audio and DFU support as the USB-C port |
| **3.5 mm AUX Jack** | Side-exit headphone output driven from the on-board DAC |
| **Speaker JST Connector** | Upright-mount connector that drives speakers up to 10W at 4Ω; solder pad preserved for hard-wired speaker connection |
| **External Power Terminal** | Supplies 12V to the whole system and supports 10W speaker loads (P1 priority) |
| **RST Button** | Hardware reset for the XVF3800 |
| **SafeMode (Boot) Button** | Hold during power-on to enter safe mode for firmware recovery |
| **PWR LED** | Green power-on indicator |
| **Debug Pad** | Reserved pad for XMOS XTAG4 (not soldered at the factory) |
| **XMOS 3800 IO Headers** | Exposed pin headers/pads for I2C, I2S, 5V/GND, speaker pins, and remaining XVF3800 IO |
| **Mounting Holes** | 4 × M3 mounting holes |
| **XIAO ESP32S3** | Supports soldering XIAO ESP32S3 when used as the host device |
| **XIAO ESP32S3 GPIO** | Remaining GPIO can be used for IO and peripheral expansion |

### Circular Array Board 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| Component / Feature | Description |
|--------------------|------------|
| **Microphones** | 4× PDM MEMS microphones with 44 mm spacing arranged in a circular layout |
| **Pickup Pattern** | 360° omnidirectional audio capture |
| **Interface** | FPC connector to the core board |
| **Mounting** | 3 × M3 mounting holes for enclosure or housing attachment |




### Linear Array Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| Component / Feature | Description |
|--------------------|------------|
| **Microphones** | 4× PDM MEMS microphones with 33 mm spacing arranged in a linear layout |
| **Pickup Pattern** | Front-facing pickup pattern of approximately 180°, with rear sound suppressed |
| **Interface** | FPC connector; cable can be routed from the side or rear |
| **Mounting** | 2 × M3 mounting holes |

:::note
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

### XIAO ESP32S3 Support 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


The reSpeaker Flex core board includes a dedicated footprint for soldering a Seeed Studio XIAO ESP32S3 module, enabling Wi-Fi and Bluetooth connectivity on top of the XVF3800's audio processing pipeline. The SKUs including XIAO (-C4-1 and -L4-1) ship with this module pre-populated; the base SKUs (-C4-0 and -L4-0) leave the footprint unpopulated.
When the XIAO is fitted, the following connections are wired between it and the XVF3800:

- **I2S bus** — dual-bus (playback and record) with shared BCLK, MCLK, and LRCLK for audio streaming in both directions
- **I2C bus** — for reading and writing XVF3800 configuration parameters from the XIAO
- **RST line** — XIAO can assert a hardware reset on the XVF3800 via a dedicated IO pin
- **Remaining XIAO IO** — brought out to labelled pin headers/pads for user expansion

### Pin Header 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 FPC cable 

The FPC mic array interface is a 24-pin, 0.5mm pitch connector with a locking latch, and the 20cm FPC ribbon cable included in the box is keyed to this connector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pin | Signal Name | Type | Function Description | Notes |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Power | Microphone power supply | 3.3V supply |
| 2 | MIC_VDD | Power | Microphone power supply | Dual pin for enhanced power stability |
| 3 | GND | GND | Power return ground | Power GND |
| 4 | MIC_CLK | Out | Global clock signal | Core signal, 2–4 MHz |
| 5 | GND | GND | Clock shielding ground | Dedicated ground for clock |
| 6 | MIC_D1 | In | Data line 1 | CH1 microphone |
| 7 | GND | GND | D1 isolation ground | |
| 8 | MIC_D2 | In | Data line 2 | CH2 microphone |
| 9 | GND | GND | D2 isolation ground | |
| 10 | MIC_D3 | In | Data line 3 | CH3 microphone |
| 11 | GND | GND | D3 isolation ground | |
| 12 | MIC_D4 | In | Data line 4 | CH4 microphone |
| 13 | GND | GND | D4 isolation ground | |
| 14 | MIC_D5 | In | Data line 5 | CH5 microphone |
| 15 | GND | GND | D5 isolation ground | |
| 16 | MIC_D6 | In | Data line 6 | CH6 microphone |
| 17 | GND | GND | D6 isolation ground | |
| 18 | MIC_D7 | In | Data line 7 | CH7 microphone |
| 19 | GND | GND | D7 isolation ground | |
| 20 | MIC_D8 | In | Data line 8 | CH8 microphone |
| 21 | GND | GND | D8 isolation ground | |
| 22 | GPIO_1 | I/O | General-purpose input/output | Expansion function |
| 23 | GPIO_2 | I/O | General-purpose input/output | Expansion function |
| 24 | GND | GND | GPIO shielding ground | Absorbs GPIO noise |

## Getting Started

### Hardware Preparation 

- USB Type-c Cable 
- Host Computer or Raspberry Pi 


### Flash the I2S firmware 

To use the reSpeaker Flex with XIAO ESP32S3, please make sure the reSpeaker Flex firmware is the `I2S` version. Check Firmware Flash to flash the latest `I2S` firmware. Please vist for [section](https://wiki.seeedstudio.com/respeaker_flex_introduction/#update-firmware)


:::note
Usually, the reSpeaker Flex with the XIAO ESP32S3 comes with factory firmware configured for the I2S version.
:::

## Software Preparation

### Install Arduino IDE

Download and Install the stable version of Arduino IDE according to your operating system

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Download Arduino IDE</strong>
  </a>
</div>

<br />

#### Install Arduino-ESP32

To start the installation process using the Boards Manager, follow these steps:

- Install the current upstream Arduino IDE at the 1.8 level or later. The current version is at the [arduino.cc](https://www.arduino.cc/en/Main/Software) website.

- Start Arduino and open the `Settings` window.

- Enter one of the release links above into Additional Board Manager URLs field. You can add multiple URLs, separating them with commas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Open `Boards Manager` from the sidebar, search `ESP32` and click `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Restart Arduino IDE.

### Supportive Library 

:::note
Please install the [Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) in order to run the provided examples.
:::

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


