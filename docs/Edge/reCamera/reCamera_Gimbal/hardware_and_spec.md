---
description: This is the overview of recamera gimbal for features, specifications, hardware interface and partlist.
title: Hardware and Specs
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera Gimbal
  - blushless motor
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 03/27/2025
  author: Evelyn Chen
---

# reCamera Gimbal Overview

The reCamera Gimbal 2002 Series is the first open-source camera control system with 1TOPS AI camera (reCamera) and 2-axis gimbal. Its dual brushless motors enable 360° yaw and 180° pitch for full coverage.

## Feature

- Fully Open-Source Ecosystem on Hardware and Software
  - [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- Quick Setup & Precision Movement
  - Lego-like assemble package support
  - 360° yaw Rotation Full coverage and 180° pitch Range From floor to ceiling
  - Brushless Motor Precision: 0.01° stepping accuracy for smooth target tracking.
- AI-Powered Motion Control
  - Ready Custom AI Models: Built-in YOLO11 with commercial license, Roboflow & SenseCraft AI support.
  - Smart Tracking: AI auto-adjusts gimbal movement.
- Flexible Development for All Skill Levels
  - Built-in Node-RED for low-code flow customization on gimbal movement.
  - C++ SDK supported for deeper development.

## Specifications

### Processing System

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI Performance**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Operating System**   | Linux                                                                     |
| **Memory**             | 256 MB                                                                  |
| **Video Encoder**      | 5MP @ 30Fps                                                              |

### Basic

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Power Supply**       | 12V DC Jack to XT30 connector                                             |
| **Power Consumption**  | 12V, 185mA (static)                                                      |

### Camera

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Sensor**             | OV5647                                                                    |
| **Resolution**         | 5M (2592×1944) Pixels                                                    |
| **Chip**               | 1/4" CMOS Sensor                                                         |
| **Pixel Size**         | 1.4μm                                                                     |
| **Output Format**      | RAW 10                                                                    |
| **Max Frame Rate**     | Full size: 15fps                                                          |
| **Aperture**           | F2.8                                                                      |
| **Equivalent Focal Length** | 3.46mm                                                                 |
| **Field of View**      | 65°                                                                      |
| **Distortion**         | &lt;1%                                                                      |
| **Lens Structure**     | 5P                                                                        |

### Interface

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **Wireless**           | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **Button**             | 1 × Reboot Button, 1 × User Button                                        |
| **Fill LEDs**          | 4 × 0.3W White Light                                                      |
| **LED**                | 1 × Power Indicator, 2 × IO Programmable Indicator                        |
| **Mic**                | On-Board Mic                                                              |
| **Speaker**            | External Speaker                                                          |

### Motor Spec

| **Parameter**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **Turns**              | 54                       | 60                  |
| **Rated Voltage (V)**  | 12                       | 12                  |
| **Max Speed (rpm)**    | 2000                     | 2100                |
| **Rated Torque (N·m)** | 0.04                     | 0.05                |
| **Rated Speed (rpm)**  | 1160                     | 1250                |
| **Rated Current (A)**  | 0.64                     | 0.79                |
| **Max Power (W)**      | 4.6                      | 6.4                 |
| **Motor Poles**        | 14                       | 14                  |
| **Operating Temperature (℃)** | -25~60            | -25~60              |
| **Weight (g)**         | 49                       | 63                  |
| **Drive Input Voltage (V)** | 6~16                | 6~16                |
| **Communication**      | CAN                      | CAN                 |
| **Communication Frequency** | CAN@1Mbps:2KHz      | CAN@1Mbps:2KHz      |
| **Encoder**            | 15-bit Magnetic Encoder  | 15-bit Magnetic Encoder        |
| **CAN Baud Rate**      | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **Control Mode**       | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                |

### Gimbal Spec

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Pitch Range**        | 0～180°                                                                    |
| **Yaw Range**          | 0～360°                                                                    |

### Ambient Conditions

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Operating Temperature** | -20～50 ℃                                                                 |
| **Operating Humidity**  | 0～90%                                                                    |

### Mechanical

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Dimension (W × H × D)** | 68×112×71mm                                                              |
| **Enclosure**          | Polyamide (PA) Nylon                                                      |
| **Weight (Net)**       | 230g                                                                      |

### Others

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Warranty**           | 1 year                                                                    |

## Hardware Overview

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### Core Board-C101

[**Click to download PCBA file of 8GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**Click to download PCBA file of 64GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### Block Diagram

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### Sensor Board-S101

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### Base Board-B401

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### Block Diagram

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### Power Supply Board

This power supply board provides dual functions of stable power delivery and overvoltage protection. It supports 12V DC input to power both motors and reCamera systems.

**Overvoltage Protection Thresholds**:

- Maximum Trip Voltage: 25.66V
- Normal Operation Voltage: 25.54V
- Minimum Safe Voltage: 25.4V

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### Block Diagram

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## Hardware Interface

- [Light](#jump1)
- [Mic & Speaker](#jump2)
- [WIFI](#jump3)
- [Button](#jump4)
- [Motor](#jump5)
- [CAN](#jump6)

### <span id="jump1">Light</span>

There are 3 indicators on the recamera, **red and blue** light are programmable indicators, and the **green** indicator is the power indicator which is not programmable. **Red** is the status indicator of the CPU and **blue** is the reading status indicator of the system emmc.

**Light Indicators Status**:

| LED(color) | Status | Statement |
| ---- | ---- | ---- |
| LED1 - Green | ON | Power On |
| LED2 - Red | Flashing | CPU Working(user define) |
| LED3 - Blue | Flashing | eMMC Reading/Writing |

Example 1: Use linux command change the **red led** brightness to zero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Example 2: completely turn **red light** off

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

There are four **white** lights, which are the fill lights of the camera. The switch of the fill lights can be controlled by the following instructions.

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump2">Mic & Speaker</span>

The recamera has a microphone and a speaker. You can invoke the microphone and speaker by following the command. The recamera can play audio files in **wav** format.

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

Local mp3 audio files can be converted to wav files for playback in recamera by using [Convert audio online](https://www.aconvert.com/audio/).
The default format of the player is: 16bit bitrate; The sampling rate is 16,000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

2002w version of reCamera has the Wi-Fi module in hardware.  The Wi-Fi is AP+STA dual mode, which can be used to configure the device network or configure the device in AP mode.

The **SSID** of wifi in AP mode is: `reCamera_+ the last six bits of MAC`.

The **Passwd** of wifi in AP mode is: `12345678`.

The ssid and passwd of the WiFi_AP can be configured in the `/etc/hostapd_2g4.conf` file on the recamera system.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

The reCamera STA configuration file is in **/etc/wpa_supplicant.conf**, where you configure the Wi-Fi account and password to connect to.
In STA mode, please connect to Wi-Fi in **5G** band.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

In the terminal, you can scan and connect to Wi-Fi with the following command:

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump4">Button</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### User Button

The **10 User Button** is located on the **reCamera Gimbal** Board-B401. If you would like to reset the device such as forgetting your device's passcode, you can long pressing the User button and then connecting the device to power. When the red light of the device is constantly on instead of blinking, release the User button.

If you want to restore the firmware of your device to a specific version, please visit [os version control](https://wiki.seeedstudio.com/recamera_os_version_control).

#### Reboot Button

The **11 Reboot Button** is located on the **reCamera Gimbal** Board-B401. When the button is pressed, the system will reboot.

### <span id="jump5">Motor</span>

There is a Gimbal script in the reCamera Gimbal that can be used to debug and control the Gimbal's motors.
To see the gimbal script in action, run the following command:

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` is a bash script, you can modify to view and modify the script to achieve your secondary development needs. Script location is:

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

Use the `ifconfig` command to view the **can0** interface:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

Use the `cansend can0 can_id#9C.00.00.00.00.00.00.00` command to send can messages:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

Use the `candump can0` command to receive can messages:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## Part List

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

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
