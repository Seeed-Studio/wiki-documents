---
description: Integrating ReSpeaker Lite with XIAO ESP32S3
title: ReSpeaker Lite Voice Assistant Kit
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_respeaker
last_update:
  date: 7/1/2024
  author: Jessie
---



Powered by XMOS XU316 AI Sound and Audio chipset, it is a high-performance open source voice assistant development kit. The kit integrates the ReSpeaker Lite dual-microphone array and a powerful [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) processor, offering exceptional voice recognition, noise reduction, and voice processing capabilities. This kit provides firmware integration with Home Assistant via ESPHome, making it ideal for smart voice assistants and home automation applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

### Features

- **Pre-Soldered ESP32 Controller**: A powerful XIAO ESP32S3 is pre-soldered via the I2S pins, offering a solderless experience for further development and integration.
- **Dual Microphone Array for Far-Field Voice Capture**: The 2 high performance digital microphones capture and extract far-field speech and voice (up to 3 meters) even in noisy environments as it cancells point noise using two microphone input.
- **Onboard AI ASR Algorithms**: Powered by XMOS XU-316 AI sound and audio chip, the kit includes Natural Language Understanding algorithms for Interference Cancellation (IC)​, Acoustic Echo Cancellation, Noise Suppression, and Automatic Gain Control (AGC), enabling high quality voice capture.
- **Embracing Open Source**: As an open source hardware, it's compatible with Arduino, PlatformIO, MicroPython, CircuitPython for furthur developement.
- **Compatible with Popular Voice Assistants**: This kit allows you to build your own natural language processor and connect it to Home Assitant via ESPHome, Amazon Alexa Voice Service, Google Assistant, or Cloud Speech-to-Text service, enabling you to ask questions and issue voice commands to your programs.
- **Onboard RGB LED**: The kit features a programmable WS2812 RGB LED, supporting custom effects and offering a visual interface for your applications.

### Specification

|**Dual Microphone Array**|Provides high-quality audio input.|
| :- | :- |
|**Power Indicator Light**|Illuminates when powered on.|
|**RGB Light**|Programmable WS2812, provides visual feedback.|
|**Mute Indicator Light**|Lights up red when the mute button is pressed.|
|**USR Button**|User-defined button.|
|**Mute Button**|Mutes audio input when pressed.|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|For further development and integration.|
|**XU316 Core Processor**|Responsible for audio processing and transmission.|
|**External Power Supply Solder Pad**|Supports external 5V power supply.|
|**USB Type-C Port**|Used for power and data transmission.|
|**Speaker Connector**|For audio output. Supports 5W amplifier speakers.|
|**3.5mm Headphone jack**|Output audio, We can plug active speakers or Headphones into this port.|
|**External power pad 1** |Unused IO pins on the XU316.|
|**External power pad 2**|Unused IO pins on the XIAO ESP32.|
|**JTAG**|For debugging and programming the XU316.|

### Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### Schematic

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Dual Microphone Array**|Provides high-quality audio input.|
| :- | :- | :- |
|**2**|**Power Indicator Light**|Illuminates when powered on.|
|**3**|**RGB Light**|Programmable WS2812, provides visual interface|
|**4**|**Mute Indicator Light**|Lights up red when the mute button is pressed.|
|**5**|**USR Button**|User-defined button.|
|**6**|**Mute Button**|Mutes audio input when pressed.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(optional)**|For further development and integration.|
|**8**|**XU316 Core Processor**|Responsible for audio processing and transmission.|
|**9**|**External Power Supply Solder Pad**|Supports external 5V power supply.|
|**10**|**USB Type-C Port**|Used for power and data transmission.|
|**11**|**Speaker Connector**|For audio output. Supports 5W amplifier speakers.|
|**12**|**3.5mm Headphone jack**|Output audio, We can plug active speakers or Headphones into this port.|
|**13**|**External power pad 1**|Unused IO pins on the XIAO ESP32.|
|**14**|**External power pad 2**|Unused IO pins on the XU316.|
|**15**|**JTAG**|For debugging and programming the XU316.|

### Flash the I2S firmware

To use the ReSpeaker Lite with XIAO ESP32S3, please make sure the ReSpeaker Lite's firmware is the I2S version.

Check [Firmware Flash](https://wiki.seeedstudio.com/reSpeaker_usb_v3/#update-firmware) to flash the latest I2S firmware.

### Software Preparation

#### Install Arduino IDE

 Download and Install the stable version of Arduino IDE according to your operating system.

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
 </div>

 <br></br>

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

#### Install ReSpeaker Lite Library

We provide a library for users to quickly start:

Clone this project into the Arduino libraries folder e.g. with the following command:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

Or download the library as `zip` file and add it to the library in Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### FAQ

- **Can't detect ReSpeaker Lite USB sound device on Windows after flashing USB firmware?**

- Open the start menu and type `Device manager`. Find `ReSpeaker Lite` device, right click it and select `Uninstall device`. Select   `Delete the driver software for this device` and click `Uninstall`. After that, restart the device and Windows will re-install the right sound card driver for it.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Resource

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)
