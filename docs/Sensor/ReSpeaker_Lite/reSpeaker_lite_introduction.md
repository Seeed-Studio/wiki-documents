---
description: Getting Started with ReSpeaker Lite
title: Getting Started with ReSpeaker Lite
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
last_update:
  date: 6/28/2024
  author: Jessie
---

## Introduction

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

Powered by XMOS XU316 AI Sound and Audio chipset, this dev board excels in audio processing with its integrated dual microphone array, ideal for speech recognition and voice control. Featuring advanced onboard audio front-end algorithms, the XU316 chip provides interference cancellation, echo cancellation, and noise suppression. It supports I2S and USB connections and is compatible with Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi, and PC.

## Features

- **Dual Microphone Array for Far-Field Voice Capture**: The 2 high performance digital microphones capture and extract far-field speech and voice (up to 3 meters) even in noisy environments as it cancels point noise using two microphone input.
- **Onboard AI ASR Algorithms**: Powered by XMOS XU-316 AI sound and audio chip, the kit includes Natural Language Understanding algorithms for Interference Cancellation (IC) , Acoustic Echo Cancellation, Noise Suppression, Voice-to-Noise Ratio (VNR), and Automatic Gain Control (AGC), enabling high quality voice capture.
- **Embracing Open Source**：This board is compatible with popular hardware platforms (XIAO ESP32S3 (Sense), Adafruit QT Py) via I2S, and compatible with Raspberry Pi, PC via USB (Audio Class 2.0 (UAC2)).
- **Onboard RGB LED**: the board features a programmable WS2812 RGB LED, supporting custom effects and offering a visual interface for your applications.
- **External Power Supply Support**: this board supports external 5V power supply, which can be flexibly applied in different scenarios.
- **DFU for Custom Development**: the board supports custom firmware update via DFU-Util.

## Specification

|**Core Chip**|XMOS XU316|
| :- | :- |
|**Digital Microphones**|High-Performance Digital Microphones \* 2|
|**Sensitivity**|-26 dBFS|
|**Acoustic Overload Point**|120 dBL|
|**SNR**|64 dBA|
|**Power Supply**|USB 5V, External 5V|
|**Dimensions**|35\*86 mm|
|**Audio Output**|Speaker Connector / 3.5mm Headphone Jack|
|**Maximum Sampling Rate**|16Khz|
|**Speaker**|Supports 5W Amplifier Speakers.|

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Pin Out

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

## Get Started

### Out of Box Usage

ReSpeaker Lite is a plug-and-play modular voice interface, no driver required, just plug it to your PC, you will see a voice device named 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Update firmware

#### [Firmware Download](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
There are 2 versions for the ReSpeaker Lite board:

To use it as a USB sound device, please flash the USB version firmware(default firmware).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

To use it with XIAO ESP32S3, please flash the I2S version firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### Wiring

Connect the ReSpeaker Lite Board to your PC via the USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### Install DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) is a command line tool for Device Firmware Upgrade via USB port.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- Download `dfu-util-0.11-binaries.tar.xz` and extract it to your local system,
  e.g., D:\

- Change directory to the `dfu-util.exe`<br/>
  e.g., D:\dfu-util-0.11-binaries\win64\(if you are using win32, please change win64 to win32)

- Append the path of the `dfu-util.exe` to the system environment variable Path: `My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`.
 Please note that paths in the variable Path are seperated by semicolon ;.
 This will allow dfu-util to be executed globally in command prompt.

- Open the start menu and type cmd. Press the enter key. In the terminal that comes up, check if dfu-util.exe path is set with dfu-util -V command:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Run `dfu-util -l` to check if ReSpeaker Lite is detected:

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

:::tip
If you get a "Cannot open DFU device" error like this, please keep following this step. If not, please go to Step 3 to flash firmware.
:::

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Cannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)
```

- Install [Zadig](https://zadig.akeo.ie/) and open it. Click `Options` -> `List All Devices`.

- Find `ReSpeaker 2 Mics Array` or `ReSpeaker Lite` or DFU `FACTORY (Interface 3)` from the device list, install `WINUSB v6.x.xxxx.xxxxx` driver.

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- After installation is completed(that will take a few minutes), please do power-cycle and run `dfu-util -l` again, ReSpeaker Lite should be detected right now

</TabItem>

<TabItem value="mac" label="MacOS">

- Install dfu-util with [brew](https://brew.sh/): `brew install dfu-util`

- Run `dfu-util -l` to check if ReSpeaker Lite is detected:

```
➜  ~ dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

<TabItem value="lin" label="Linux">

- Install dfu-util with apt: `sudo apt install dfu-util`

- Run `sudo dfu-util -l` to check if ReSpeaker Lite is detected:

```
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

</Tabs>

#### Flash Firmware

- Connect the ReSpeaker board to your PC.

- Run the following command `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`:
  - On Linux please run `sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`

```
C:\Users\yiping>dfu-util -R -e -a 1 -D D:\Downloads\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 2886:0019
Device DFU version 0101
Claiming USB DFU Interface...
Setting Alternate Interface #1 ...
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 0101
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%       270336 bytes
Download done.
DFU state(7) = dfuMANIFEST, status(0) = No error condition is present
DFU state(2) = dfuIDLE, status(0) = No error condition is present
Done!
Resetting USB to switch back to Run-Time mode
```

:::caution
After flashing is completed, please restart the board.
:::

- Check the firmware version:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## Comparison

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>Core Chip</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Microphones</p>|<p style={{textAlign: 'center'}}>PDM MEMS Microphones x2</p>|<p style={{textAlign: 'center'}}>PDM MEMS Microphones x4</p>|<p style={{textAlign: 'center'}}>Analog MEMS Microphones x2</p>
|<p style={{textAlign: 'center'}}>Voice Capture Distance</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>Sensitivity</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Acoustic Overload Point</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>SNR</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Onboard Audio Processing Algorithms</p>|<ul><li>Acoustic Echo Cancellation (AEC)</li><li>Automatic Gain Control (AGC)</li><li>Noise Suppression (NS)</li><li>Interference Cancellation (IC)</li><li>Voice-to-Noise Ratio (VNR)</li></ul>|<ul><li>Acoustic Echo Cancellation (AEC)</li><li>Automatic Gain Control (AGC)</li><li>Noise Suppression (NS)</li><li>Beamforming</li><li>Direction of Arrival (DoA)</li><li>De-Reverberation</li><li>Voice Activity Detection (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Compatible Hardware</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py via I2S</li><li>Raspberry Pi</li><li>Any computer or SBC running Linux, macOS, and Windows via USB</li></ul>|<ul><li>Raspberry Pi</li><li>Any computer or SBC running Linux, macOS, and Windows via USB</li></ul>|Raspberry Pi ONLY|
|<p style={{textAlign: 'center'}}>Perfect for</p>|Directional sound capture, ideal for linear or elongated setups|Omnidirectional sound capture and localization, best placed in the center of open and multi-directional environments|Directional sound capture, ideal for linear or elongated setups|

### FAQ

- **Can't find the `ReSpeaker Lite` sound device.**

 Check the firmware version, make sure the firmware is USB version and above`2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 If it's not USB version, please follow [this step](https://wiki.seeedstudio.com/reSpeaker_usb_v3/#flash-firmware) to flash the firmware.

- **Can't detect ReSpeaker Lite USB sound device on Windows after flashing USB firmware?**

- Open the start menu and type `Device manager`. Find `ReSpeaker Lite` device, right click it and select `Uninstall device`. Select   `Delete the driver software for this device` and click `Uninstall`. After that, restart the device and Windows will re-install the right sound card driver for it.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Resource

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)
