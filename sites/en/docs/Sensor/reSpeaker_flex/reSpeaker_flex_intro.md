---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: Getting Started with reSpeaker Flex
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/respeaker_flex_introduction/
---
# Getting Started with reSpeaker Flex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex-banner.jpg" alt="pir" width={800} height="auto" /></p>

The reSpeaker Flex is a modular, split-architecture voice processing system built around the XMOS XVF3800 processor, designed specifically for robots and intelligent interaction terminals. Unlike conventional all-in-one mic arrays, the Flex separates the core processing board from the microphone array board the two connected via a flexible FPC ribbon cable allowing the array to be embedded at any physical position within a product enclosure while keeping the processing electronics elsewhere.
The system supports two interchangeable microphone array configurations: a **circular 4-mic array** for omnidirectional 360° capture, and a **linear 4-mic array** for directional front-facing pickup with rear suppression. Both boards connect to the same core board through a standardized 24-pin FPC interface, and the system operates in either USB (UAC 2.0 plug-and-play) or I2S mode for embedded integration. An optional XIAO ESP32S3 module can be soldered onto the core board for wireless connectivity and expanded control.

### Circular mic Series

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
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

### Linear mic Series

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear</th>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
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

- **XIAO ESP32S3 support (optional)**: Solder-on module adds Wi-Fi/Bluetooth, with I2S and I2C buses wired directly to XVF3800 for wireless control and audio forwarding

- **Firmware flexibility**: Dual USB firmware variants (2-channel and 6-channel), I2S firmware, DFU upgrade via dfu-util, and configuration persistence across power cycles

- **Python SDK**: Adjustable recording format, volume, algorithm parameters, and channel routing via Python

## Main Components

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

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

### Software Preparation

### Out of Box Usage

:::note
To ensure optimal voice pickup performance and proper operation of the audio algorithms, please make sure the Microphone Port (Mic Inlet / Sound Hole) on the back side of the device is facing toward the sound source. The microphone port is located on the side with the Seeed Studio logo printed on it. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

#### Reset

The reset (RST) button provides a hardware reset for the reSpeaker Flex when pressed, it restarts the chip and reinitializes the system from the very beginning, just like a full power cycle.

#### Speaker connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

Here you can see how to connect speakers using either the 3.5mm AUX headphone jack or the onboard JST speaker interface, depending on your audio output preference.

#### FPC Connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-orientation.png" alt="pir" width={600} height="auto" /></p>

Before connecting the FPC cable, identify the contact side and stiffener side. When inserting the cable into the MIC Connector, make sure the exposed contacts are facing the metal contacts inside the connector, while the stiffener side faces outward.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-connection.png" alt="pir" width={600} height="auto" /></p>

Open the locking tab on the MIC Connector, insert the FPC cable with the correct orientation, and close the tab to secure the connection.

#### Safe Mode

**Safe Mode** is a special recovery mode on the **reSpeaker Flex** that allows you to flash firmware via **USB DFU** or I2C for devices like  **ESP32**.

If you've previously flashed the **I2S firmware** and want to switch back to the **USB firmware**, you can enter **Safe Mode** and reflash the USB firmware using **USB DFU**.

:::note

- USB firmware
  - Supports USB DFU only.
  - You can update the device through a USB connection.
  - It does not support I2C DFU.
- I2S firmware
  - Supports I2C DFU.
  - Allows firmware updates through the I2C interface.
  - It does not support USB DFU.
- Safe Mode firmware
  - Stored in the Factory partition.
  - Supports both USB DFU and I2C DFU.
  - This is the most flexible recovery firmware.

:::

**Use Safe Mode in the following situations**

- Your firmware is **not working properly** (for example, **USB is not detected**).
- You need to **re-flash new firmware**, but the current firmware is **not responding**.
- You **accidentally flashed the wrong firmware** and want to recover the device.

 **How to Enter Safe Mode**

- **Power off** the device completely.
- **Press and hold the Boot button**.
- While holding the **Boot button, reconnect the power.**
Use the DFU util command line tool to check the DFU partitions; see the **Install DFU Util** section below for more details.

### Update firmware

Three firmware versions are available in the official GitHub repository. You can choose and flash the appropriate firmware depending on your application requirements. For more details and downloads, please refer to the Github [Link](https://github.com/respeaker/reSpeaker_Flex)

:::note
Please make sure that you will need to download whole repository.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

The USB firmware is designed for use with host operating systems such as **Windows, Linux, and macOS** when communicating through the USB hardware interface.
You can explore these firmware files in this link

| Firmware                         | Channels | Notes                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 Channels | 16 kHz, 6 channels using circular mic array             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 Channels | 16 kHz, 6 channels using linear mic array               |
| respeaker_flex_ua-io16-cir.bin     | 2 Channels | 16 kHz, 2 channels output using circular mic array          |
| respeaker_flex_ua-io16-lin.bin     | 2 Channels | 16 kHz, 2 channels output using linear mic array            |
| respeaker_flex_ua-io48-cir.bin     | 2 Channels | 48 kHz, 2 channels output using circular mic array          |
| respeaker_flex_ua-io48-lin.bin     | 2 Channels | 48 kHz, 2 channels output using linear mic array            |

Connect the reSpeaker Flex to your PC via the USB cable. Note that you need to use the XMOS USB-C port(close to RST Button) to flash XMOS’s firmware.

</TabItem>

 <TabItem value="I2S" label="I2S">

The I2S firmware is intended for use when the device is connected to a microcontroller host such as the XIAO ESP32S3. In this configuration, voice data is transmitted using the I2S protocol. The firmware file **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** is available in here. This firmware supports 2-channel audio with a 32-bit depth at a 16 kHz sampling rate.

| Firmware                                      | Channels | Notes                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 Channels | 16 kHz, stereo output, circular mic array   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 Channels | 16 kHz, stereo output, linear mic array|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 Channels | 48 kHz, stereo output, circular mic array|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 Channels | 48 kHz, stereo output, linear mic array|

Connect the reSpeaker Flex to your PC via the USB cable. Note that you need to use the XMOS USB-C port(close to RST Button) to flash XMOS’s firmware.

</TabItem>
</Tabs>

### Install DFU Util

`dfu-util` is a command line tool for Device Firmware Upgrade via USB.

<Tabs>
<TabItem value="windows" label="Windows">

- Download `dfu-util-0.11-binaries.tar.xz` and extract it, e.g., `D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- Add the path to `dfu-util.exe` to your system `Path` variable:  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- Open **Command Prompt** (`cmd`) and verify installation:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- Connect the reSpeaker Flex and check device detection:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> If you get:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Proceed with the driver installation step below.

- Install [Zadig](https://zadig.akeo.ie/)  
  - Open Zadig → `Options > List All Devices`  
  - Select `reSpeaker XVF3800 Flex`  
  - Install **WinUSB** driver  
  - Power-cycle the device  
  - Run `dfu-util -l` again to confirm detection.

</TabItem>

 <TabItem value="macos" label="macOS">

- Install dfu-util with Homebrew:

```bash
brew install dfu-util
```

- Check if the device is detected:

```bash
dfu-util -l
```

**Expected Output:**

```
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

</TabItem>

<TabItem value="linux" label="Linux">

- Install dfu-util:

```bash
sudo apt install dfu-util
```

- Connect the XVF3800 and check detection:

```bash
sudo dfu-util -l
```

**Expected Output:**

```bash
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

  </TabItem>
</Tabs>

### Flash Firmware

Download the complete firmware repository from GitHub here reSpeaker Flex XVF 3800

- Run the following command to flash the firmware

  - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- On Linux, run it with sudo

  - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

## Record and playback with USB Firmware

<Tabs>
<TabItem value="windows" label="Windows">

### Setup Audacity (Windows)

1. Open **Audacity**
2. Go to **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. Set:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (for both **Project** and **Default Sample Rate**)
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. Click **OK**
2. You’re ready — start recording!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Setup Audacity (macOS)

1. Open **Audacity**
2. Go to **Audio Setup** and select **Recording Device** as **reSpeaker 3800 Flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Go to **Audio Setting** Set:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz` (for both **Project** and **Default Sample Rate**)
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Click **OK**
5. Ready to record!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Recording on Raspberry Pi (Command Line)

1. **Find sound card number**:

```bash
arecord -l
```

Example output:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 In this case, **card number is 3**

---

2. **Record audio (5 seconds)**:

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Replace `3` with your actual sound card number

---

3. **Adjusting Volume for reSpeaker XVF3800 on ALSA**

```bash
alsamixer
```

In alsamixer, use the left/right arrow keys to navigate to the correct sound device.Use the up arrow key to increase the volume.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Playback**:

```bash
aplay -D plughw:3,0 output.wav
```

### Recording on Raspberry Pi (Audacity)

1. **Install Pi-Apps (if not already installed)**

Open a terminal on your Raspberry Pi.Run the following command to install Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

Wait for the installation to complete. A new Pi-Apps icon will appear in your menu.

2. **Install Audacity via Pi-Apps**

3. **Set Up Audio Input and Output**

- Click on "Audio Setup" in the toolbar.
- Select "Audio Settings" from the dropdown menu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- In the Audio Settings window:
  - Choose the correct Recording Device  (e.g., reSpeaker XVF3800 Flex).
  - Choose the appropriate Playback Device (e.g., reSpeaker XVF3800 Flex).
  - Make sure Host is set to ALSA for best compatibility on Raspberry Pi.
- Click OK to apply the settings.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Record and Playback Audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## How to Tuning parameters?

Tuning allows users to configure parameters of the built-in audio algorithms and communicate directly with the XMOS chip.

A dedicated Python control interface is provided for parameter configuration and device interaction.


[**Python Control Directory**](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control)

Using the provided Python scripts, you can:

* Configure built-in audio algorithm parameters
* Retrieve DoA (Direction of Arrival) data
* Retrieve VAD (Voice Activity Detection) data
* Control onboard LEDs
* Control the voice processing pipeline
* Communicate directly with the XMOS device

**System Requirements**

The following dependencies are required to use the Python control interface:

* Python 3.6 or later
* `pyusb` Python library
* `libusb` system library


### Installation & Dependencies

Install the required Python dependency using:

```bash
pip install pyusb
```

Depending on your operating system, you may also need to install the `libusb` package separately.

---

### Usage

**Basic Syntax**

```bash
python xvf_host.py [options] command [value(s)...]
```

---

**Command Options**

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | List all supported commands with detailed information |
| `--vid`        | Set USB Vendor ID (default: `0x2886`)                 |
| `--pid`        | Set USB Product ID (default: `0x001A`)                |
| `--values`     | Provide values for write commands (optional)          |

---

### Usage Examples

**1. List All Available Commands**

```bash
python xvf_host.py --list
```

Displays all supported commands and their descriptions.

---

**2. Read Firmware Version Information**

```bash
python xvf_host.py VERSION
```

Reads and displays the current firmware version information from the device.

---

**3. Read DOA (Direction of Arrival) Values**

```bash
python xvf_host.py DOA_VALUE
```

Retrieves the current Direction of Arrival (DOA) value detected by the microphone array.

## Troubleshooting

### Does playback sound from speaker output not enough ?

If the speaker output volume of the **reSpeaker Flex** is too low on Linux, you may need to adjust the **ALSA mixer levels** for the XVF3800 sound card. Follow the steps below to increase the output volume.

**Step 1: Open ALSA Mixer**

1. Open a terminal.
2. Type the following command and press **Enter**:

   ```bash
   alsamixer
   ```

**Step 2: Select the XVF3800 Flex Sound Card**

1. Press **F6** to open the sound card selection menu.
2. Use the **up/down arrow keys** to highlight the **XVF3800 Flex** sound card.
3. Press **Enter** to confirm the selection.

**Step 3: Adjust the PCM-1 Volume**

1. Use the **left/right arrow keys** to navigate to **PCM-1**.
2. Use the **up arrow key** to increase the volume level up to **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Step 4: Save ALSA Settings**

1. Press **ESC** to exit `alsamixer`.
2. Before unplugging the reSpeaker Flex , run the following command to save your settings:

```bash
   sudo alsactl store
   ```

**Step 5: Additional Option (Using PulseAudio)**

If you still cannot hear sound clearly after adjusting ALSA levels, try installing **PulseAudio Volume Control** for more detailed volume adjustments:

```bash
sudo apt install pavucontrol -y
```

You can then open **pavucontrol** and increase the output volume beyond 100% if needed.

### Cannot use as sound devices in Windows after flashing firmware ?

Open the start menu and type Device manager. Find  related reSpeaker Flex devices, right click them and select Uninstall devices. After that, restart the device (usb plug and unplugged) and Windows will re-install the right sound card driver for it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>


## Resources

- [reSpeaker Flex XVF3800 Circular 2D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_2d.dxf)
- [reSpeaker Flex XVF3800 Linear 2D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear_2d.dxf)
- [reSpeaker Flex XVF3800 Core Board 2D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate_2d.dxf)
- [reSpeaker Flex XVF3800 Circular 3D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_260210.step)
- [reSpeaker Flex XVF3800 Linear 3D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear.step)
- [reSpeaker Flex XVF3800 Core Board 3D File](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate.step)



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
