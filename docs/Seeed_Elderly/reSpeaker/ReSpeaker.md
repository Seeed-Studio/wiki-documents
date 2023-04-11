---
description: ReSpeaker Introduction
title: ReSpeaker Introduction
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


ReSpeaker is an open modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices or any other things in your daily life, all by your voice. The ReSpeaker project provides hardware components and software libraries to build voice enabled device.

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/vui.png)

## Hardware

The hardware components include I2S microphone array for Raspberry Pi, USB microphone array for Linux/Windows/macOS, standalone ReSpeaker Core v1.0 & v2.0.

### Microphone Array

|              |  USB 6+1 Mic Array  | 4 Mic Array for Pi | 2 Mic Array for Pi | USB 4 Mic Array |
|:------------:|:-------------------:|:------------------:|:------------------:|:---------------:|
|  Microphones |          7          |          4         |          2         |        4        |
|     Shape    |       circular      |       square       |      rectangle     |     circular    |
|   Interface  |         USB         |         I2S        |         I2S        |       USB       |
|   RGB LEDs   |          12         |         12         |          3         |        12       |
| Audio Output |         Mono        |         NA         |       Stereo       |       Mono      |
|     Note     | built-In algorithms |                    |                    |   coming soon   |

### Standalone ReSpeaker Core

|             | ReSpeaker Core v1 (MT7688)  | ReSpeaker Core v2 (RK3229)                    |
|-------------|-----------------------------|-----------------------------------------------|
| CPU         | MT7688 (MIPS24KEc, 580 MHz) | RK3229 (4 ARM Cortex A7 cores, 1.5GHz)        |
| RAM         | 256 MB                      | 1 GB                                          |
| Microphones | 1                           | 6                                             |
| Shape       | circular                    | hexagon                                       |
| Interfaces  | WiFi, USB device            | WiFi, Bluetooth, Ethernet, HDMI, USB otg/host |
| loopback    | NA                          | 2 channels                                    |

## Software

Audio processing algorithms including VAD, DOA, Beamforming, NS, AEC and KWS are available and are evolving rapidly.

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/mic_array.png)

## Product  List

---
Here is the list of the ReSpeaker Boards you can find in the Seeed WiKi. The list will be constantly updated.

- [ReSpeaker 2-Mics Pi HAT](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/)
- [ReSpeaker 4-Mic Array for Raspberry Pi](https://wiki.seeedstudio.com/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)
- [ReSpeaker Core](https://wiki.seeedstudio.com/ReSpeaker_Core/)
- [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/)
- [ReSpeaker Drive Unit](https://wiki.seeedstudio.com/ReSpeaker_Drive_Unit/)
- [ReSpeaker Mic Array](https://wiki.seeedstudio.com/ReSpeaker_Mic_Array/)
- [ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/ReSpeaker_Mic_Array_v2.0/)
- [ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi](https://wiki.seeedstudio.com/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)
- [ReSpeaker 6-Mic Circular Array kit for Raspberry Pi](https://wiki.seeedstudio.com/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)

## The ReSpeaker Project

Please refer to [ReSpeaker.io](https://respeaker.io/) for more info.
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
