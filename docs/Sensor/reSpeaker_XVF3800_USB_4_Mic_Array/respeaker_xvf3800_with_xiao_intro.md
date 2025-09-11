---
description: The ReSpeaker XVF3800 USB 4-Mic Array is a professional circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the XIAO ESP32S3, it enables advanced voice control for smart devices, robotics, and IoT applications. Discover seamless integration and dual-mode flexibility.

title: Getting Started with reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_getting_started
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB 4 Microphone Array with XIAO ESP32S3

## Overview

**The ReSpeaker XVF3800 USB 4-Mic Array** is a professional circular 4-microphone array based on the XMOS XVF3800. It features AEC, AGC, DoA, beamforming, VAD, noise suppression, de-reverberation, and 360° voice capture (up to 5 meters). It also supports dual operation modes, making it ideal for advanced voice applications. When combined with the Xiao ESP32S3, controlling the ReSpeaker XVF3800 USB becomes even more powerful, unlocking endless possibilities.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

- **Chip upgrade** :From XVF3000 to XVF3800
  
- **Quad Microphone Array** :4 high-performance mics in circular pattern for 360° far-field voice capture up to 5 meters
  
- **Advanced Audio Processing** :Powered by XVF3800 with AEC, multi-beamforming, de-reverberation, DoA detection, dynamic noise suppression, 60dB AGC range

- **Unique Device Serial Number** :Built-in SN enables  multi-device deployments and advanced device management

- **Dual Operation Modes** :USB plug-and-play mode for instant PC connectivity and INT-Device (I2S) mode for integration with embedded systems—configurable via USB or I2C commands by switching the firmware accordingly

- **Open Source Compatible** :Works with USB hosts (Windows, macOS, Raspberry Pi OS) and I2S hosts (XIAO Series, ESP32, Arduino).

- **Visual Feedback** :Programmable RGB LEDs and status indicators show device states and voice activity

- **Equal or better audio quality** :compared to previous model

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Main Components

| **Component / Feature**       | **Description**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Main Audio Processor**      | **XMOS XVF3800**, handles audio processing including AEC, beamforming, noise suppression, etc.       |
| **Microphone Array**          | **Quad PDM MEMS microphones** in circular pattern, supporting **360° far-field voice capture (5m)**. |
| **Audio Codec**               | **TLV320AIC3104**, handles audio conversion and output.                                              |
| **RGB LEDs**                  | **12x WS2812** individually-addressable RGB LEDs for visual feedback (e.g., status, voice activity). |
| **Mute Button**               | Press to **mute/unmute** the microphone input.                                                       |
| **Mute Indicator LED**        | Lights up (typically red) to show that audio is muted.                                               |
| **Reset Button**              | Hardware reset for the board/system.                                                                 |
| **USB Type-C Port**           | Used for both **power and data** (USB Audio Class 2.0 compliant).                                    |
| **3.5mm AUX Headphone Jack**  | Audio output for headphones or active speakers.                                                      |
| **Speaker Connector**         | **JST speaker interface**, supports **5W amplified speakers**.                                       |
| **Debug Pads**                | Debug access for **XTAG4** or other programmers.                                                     |
| **I2C & I2S Headers**         | Exposed headers for **I2C and I2S communication** with external devices.                             |
| **Unused IO Pads (XIAO)**     | Additional I/O solder pads connected to XIAO module.                                                 |
| **I2S & I2C Communication**   | Supports connection to external hosts like Raspberry Pi, PC, etc. using these protocols.             |
| **USB & INT-Device Modes**    | Dual-mode operation: plug-and-play USB or internal INT device mode via I2S.                          |
| **Unique Serial Number**      | Built-in **device SN** for identification and multi-device management.                               |
| **Open Source Compatibility** | Works with **Arduino, Raspberry Pi, PC/Mac**, and compatible with **XIAO Series**.                   |
| **Advanced Audio Features**   | AEC, beamforming, dereverberation, **DoA detection**, DNN-based noise suppression, 60dB AGC.         |
| **Visual Feedback**           | Device state and audio activity shown via **RGB LED patterns** and **status indicators**.            |
| **Audio Quality**             | Equal or better than the **previous XVF3000-based designs**.                                         |

### XIAO ESP32S3 support

- Stereo I2S input/output with multiple output options; I2C interface for configuring and managing XVF3800 parameters.
- XIAO reset via IO pin
- Interface and solder pads

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### On-Board WIFI Antenna

When using the XIAO ESP32S3, no external antenna is needed—simply connect the antenna slots to use the built-in PCB antenna.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO Overview

The reSpeaker XVF3800 exposes 3 input pins (GPI) and 5 output pins (GPO) for external control. You can use these to read button states or control hardware like the mute LED, amplifier, or LEDs.

| **Pin Name** | **Direction** | **Function**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | Mute button status (high when released)              |
| X1D13        | Input (RO)    | Floating                                             |
| X1D34        | Input (RO)    | Floating                                             |
| X0D11        | Output (RW)   | Floating                                             |
| X0D30        | Output (RW)   | Mute LED + mic mute control (high = mute)            |
| X0D31        | Output (RW)   | Amplifier enable (low = enabled)                     |
| X0D33        | Output (RW)   | WS2812 LED power control (high = on)                 |
| X0D39        | Output (RW)   | Floating                                             |

## Flash the I2S firmware

To use the reSpeaker XVF3800  with XIAO ESP32S3, please make sure the reSpeaker XVF3800  firmware is the I2S version.
Check Firmware Flash to flash the latest I2S firmware. Please vist for [this section](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware).

:::note
To work with the XIAO ESP32S3, you need to flash the I2S firmware. However, it does not support USB DFU. If you are already using USB firmware, you can enter safe mode to flash the firmware. This method is more flexible because it supports both USB DFU and I2C DFU. To learn more, please visit this [section](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#safe-mode).
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
