---
description: This is the overview for features, specifications, hardware interface and partlist.
title: Hardware and Specs
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hd_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE Overview

reCamera 2002 HQ PoE is equipped with an advanced CMOS sensor for sharper, clearer images. It has an M12 lens mount—flexible to replace the default lens with any compatible 2MP M12 lens. Also supports PoE (Power over Ethernet): no separate USB/DC power needed, just one Ethernet cable to a PoE switch for power and data.


## Feature

- High Quality: Equipped with a 1/2.9-inch GC2053 CMOS sensor, providing superior image quality.
- M12 Lens Mount: Default 90° FOV, easily replaceable with any standard M12 lens.
- Ethernet with PoE (Power over Ethernet): Supports data and power over a single cable, PoE Mode A only.
- IO/UART Extension: 6-pin header with 1×UART and 3×GPIO.

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


| Sensor                | GC2053                             |
| --------------------- | ---------------------------------- |
| Optical Format        | 1/2.9inch                          |
| Resolution            | 1920x1080                          |
| Max Frame rate        | 30fps@full size                    |
| lens mount            | M12                                |
| FOV                   | 93°                                |
| Ethernet              | 100Mbps with PoE                   |
| USB                   | USB Type-C(2.0)                    |
| Dimension             | 40x40x45.8mm40x40x53.1mm with lens |
| Operation Temperature | -20～50°C                          |
| Operation Humidity    | 95%                                |


### [Core Board-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Board         | Features                           | Version |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE module <br /> - Onboard antenna <br /> - External antenna connector| 1.2 |
| C1_2002       | - eMMC <br /> - Extra SDIO to base board <br /> - Extra UART to base board | 1.2 |

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

Top View             |  Bottom View
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ features

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Sensor</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>CMOS Size</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Pixels</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>Aperture</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Focal Length</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>Field of View</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distortion</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>Relative Illumination</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Focusing rane</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>Height of focus</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Video</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Interfaces</td>
        <td colspan="3">- 1 x microphone<br />- 1 x speaker<br />- 3 x LED indicator</td>
      </tr>
    </tbody>
  </table>
</div>

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
| reCamera 2002x HQ PoE | x1 |
| USB Type-C Wire | x1 |
| Ethernet Wire | x1 |
| User Manual | x1 |
| 6 Pin Cable | x1 |


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
