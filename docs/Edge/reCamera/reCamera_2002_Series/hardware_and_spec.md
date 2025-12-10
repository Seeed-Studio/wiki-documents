---
description: This is the overview for features, specifications, hardware interface and partlist.
title: Hardware and Specs
keywords:
  - Edge
  - reCamera
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
---

# reCamera Overview

reCamera is an open-source and tiny AI camera, programmable and customizable, powered by RISC-V SoC, delivering on-device 1 TOPS AI performance with video encoding 5MP @30 FPS. The modular hardware design and expandable interfaces offer the most verstile platform for developers building vision AI systems.

## Feature

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>

## Specifications

<table style={{width: '72.2022%'}}>
    <tbody>
        <tr></tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002 Series</span></strong></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">Processor System</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Al Performance</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">SOC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">SG2002</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">CPU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">MCU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Memory</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">256MB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Video Encode</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Camera Sensor</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">OV5647</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">Storage</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">eMMC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">(version1) 8GB (version2) 64GB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Expansion</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">removable TF card (up to 2TB, not included)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">I/O</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Ethernet</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">100Mbps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Wireless</span></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><span data-font-family="Montserrat">/</span></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">USB</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Button</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 Reset Button, 1 Boot Button</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Fill Light</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">0.3w White Light</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Status Light</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 Power Indicator, 2 IO Programmable</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">Audio</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Mic</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">On-board Mic</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Speaker</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">External Speaker</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Dimension</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Power</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="default">5V 1A</span></p>
            </td>
        </tr>
    </tbody>
</table>

## Hardware Overview

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [Core Board-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Board         | Features                           | Version |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE module <br /> - Onboard antenna <br /> - External antenna connector| 1.2 |
| C1_2002       | - eMMC <br /> - Extra SDIO to base board <br /> - Extra UART to base board | 1.2 |

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ features

<div>

<table ><tbody>
<tr >
    <td >SENSOR</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">CMOS SIZE</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">PIXELS</td>
    <td class="dbon">5MP</td>
    <td class="dbon">APERTURE</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >FOCAL LENGTL</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">FIELD OF VIEW</td>
    <td >65°</td>
</tr>
<tr >
    <td >DISTORTION</td>
    <td >&lt;1%</td>
    <td >Image</td>
    <td >2592 x 1944(still picture)</td>
</tr>
<tr >
    <td >IMAGE</td>
    <td  colspan="3">2592 x 1944 still picture resolution</td>
</tr>
<tr >
    <td >VIDEO</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x LED fill lights
- 1 x microphone
- 1 x speaker
- 3 x LED indicator

### [Base Board-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运github说明和图 -->
Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ Features

- 1 x Type-C port for power input and communication.
- 1 x Single Port Transformer Module for Ethernet communication support.
- 1 x SD card reader for data storage and exchange.

## Hardware Interface

- [Light](#jump2)
- [Mic & Speaker](#jump3)
- [WIFI](#jump4)
- [SD Card](#jump5)
- [Uart (Debug)](#jump6)
- [User Button](#jump7)

### <span id="jump2">Light</span>

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

### <span id="jump3">Mic & Speaker</span>

The recamera has a microphone and a speaker. You can invoke the microphone and speaker by following the command. The recamera can play audio files in **wav** format.

The default format of the player is: 16bit bitrate; The sampling rate is 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

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

### <span id="jump5">SD Card</span>

The SD card slot can expand the storage space of the recamera. After inserting the SD card, you can find the existence of your SD by using the `lsblk` command.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

Once you have found a storage device like mmcblk1p1, you can mount it to your system using the following command.
<br/>

Note that recamera only recognizes **ext4** filesystems.

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

Check the mount result by `lsblk`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart (Debug)</span>

The base circuit board of the recamera has three contacts tx,rx, and gnd, which serve as the debug serial port of the recamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

The device has a serial port baud rate of 115200 and can log into the recamera system.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">User Button</span>

The reCamera's usr button can be customized by the user.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## Part list

| Item | Quantity |
|--|--|
| reCamera 2002 Series | x1 |
| USB type-C Cable | x1 |
| Ethernet Cable | x1 |

<!-- ## Accessories List -->

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
