---
description: Overview
title: Overview
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT is a dual-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that you can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.

The board is developed based on WM8960, a low power stereo codec. There are 2 microphones on both sides of the board for collecting sounds and it also provides 3 APA102 RGB LEDs, 1 User Button and 2 on-board Grove interfaces for expanding your applications. What is more, 3.5mm Audio Jack or JST 2.0 Speaker Out are both available for audio output.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 2 Microphones
* 2 Grove Interfaces
* 1 User Button
* 3.5mm Audio Jack
* JST2.0 Speaker Out
* Max Sample Rate: 48Khz

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON: a User Button, connected to GPIO17
* MIC_Land MIC_R: 2 Microphones on both sides of the board
* RGB LED: 3 APA102 RGB LEDs, connected to SPI interface
* WM8960: a low power stereo codec
* Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B , Raspberry Pi 3 B and Raspberry Pi 3 B+
* POWER: Micro USB port for powering the ReSpeaker 2-Mics Pi HAT, please power the board for providing enough current when using the speaker.
* I2C: Grove I2C port, connected to I2C-1
* GPIO12: Grove digital port, connected to GPIO12 & GPIO13
* JST 2.0 SPEAKER OUT: for connecting speaker with JST 2.0 connector
* 3.5mm AUDIO JACK: for connecting headphone or speaker with 3.5mm Audio Plug

## Supported Platforms

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Get started with Raspberry Pi](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Get started with Nvidia Jetson Nano Series](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[Get started with NPi i.MX6ULL Dev Board Linux SBC](https://wiki.seeedstudio.com/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[Get started with ODYSSEY – STM32MP157C](https://wiki.seeedstudio.com/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## Enabling Voice Recognition at the Edge with Picovoice

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **enables enterprises to innovate and differentiate rapidly with private voice AI**. Build a unified AI strategy around your brand and products with our speech recognition and [**Natural-language understanding (NLU) technologies**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**Seeed has partnered with Picovoice to bring Speech Recognition solution at the edge using [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) for developers.**

Picovoice is an end-to-end platform for building voice products on your terms. It enables creating voice experiences similar to Alexa and Google. But it entirely runs 100% on-device. There are advantages of Picovoice:

* **Private**: Everything is processed offline. Intrinsically HIPAA and GDPR compliant.
* **Reliable**: Runs without needing constant connectivity.
* **Zero Latency**: Edge-first architecture eliminates unpredictable network delay.
* **Accurate**: Resilient to noise and reverberation. It outperforms cloud-based alternatives by wide margins.
* **Cross-Platform**: Design once, deploy anywhere. Build using familiar languages and frameworks.

## Open-source Keyword detection with Mycroft Precise

In addition to Picovoice, we provide limited support for Mycroft Precise - an open-source real-time keyword detection package. Mycroft Precise is fully open source and can be trained to recognize anything from a name to a cough. Precise is designed to run on Linux. It is known to work on a variety of Linux distributions including Debian, Ubuntu and Raspbian. According to official README file, "it probably operates on other *nx distributions."

Mycroft Precise is Apache-2.0 License project, which means you can modify and distribute it, including for commercial purposes - the only requirement being that you preserve the original license.

**You can find examples for both Picovoice products and Mycroft Precise in Getting Started documentation for corresponding platform.**

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Projects

**Build Your Own Amazon Echo Using a RPI and ReSpeaker HAT**: How to build your own Amazon Echo using a Raspberry Pi and ReSpeaker 2-Mics HAT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**Your personal home barista comes to life with this voice-enabled coffee machine**: An open-source, private-by-design coffee machine that keeps your favorite coffee and caffeination schedule private.

<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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
