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
slug: /recamera_hq_poe_hardware
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


### [Core Board-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Board         | Features                           | Version |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE module <br /> - Onboard antenna <br /> - External antenna connector| 1.2 |
| C1_2002       | - eMMC <br /> - Extra SDIO to base board <br /> - Extra UART to base board | 1.2 |

Top View             |  Bottom View
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S4_GC2053](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


Top View             |  Bottom View
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

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

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

Up             |  Bottom
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ Features:

- 1 x RJ45 port for **802.3af PSE**.
- 1 x UART port.
- 1 x Debug port.
- 3 x IO port.

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## Hardware Interface

- [Light](#jump2)
- [Mic & Speaker](#jump3)
- [POE](#jump4)
- [IO](#jump5)
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

### <span id="jump3">Mic & Speaker</span>

The recamera has a microphone and a speaker. You can invoke the microphone and speaker by following the command. The recamera can play audio files in **wav** format.

The default format of the player is: 16bit bitrate; The sampling rate is 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

The POE module is built into the hardware of the reCamera HQ POE version. The WiFi module has been removed. However, you can restore the Wi-Fi function by replacing the core board of the SG2002w.

Connect the reCamera to a switch that supports the **POE 802.3af** protocol, and the reCamera device will start up.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

You can check the device's IP address in your router to access it, or connect the reCamera via USB and access the terminal to query the wired network IP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**Using the GPIO sysfs interface to control I/O**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

In Linux, the most common way to read and write GPIO is using the GPIO sysfs interface. This is implemented by manipulating files such as `export`, `unexport`, `gpio{N}/direction`, and `gpio{N}/value` (replace `{N}` with the actual pin number) under the `/sys/class/gpio` directory, and it is often used in shell scripts.

The reCamera POE backplane has 3 available IO ports. Each port can be configured as an input or output. The IO ports are numbered as follows:

| IO Port | GPIO Number |
| ---- | ---- |
| D1 | 490 |
| CLK(Multiplexed IO pins) | 487 |
| SMD(Multiplexed IO pins) | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart (Debug)</span>

The POE baseboard of reCamera has two sets of serial ports, namely /ttyS0 (for Debug) and /ttyS3.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

The debug serial port of this device has a baud rate of 115200 and supports connection to remote monitoring systems.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

```bash
#Use the stty tool to query its communication parameters.

stty -F /dev/ttyS3
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-2.png" /></div>

```bash
# Modify the serial port baud rate, where ispeed refers to the input speed and ospeed refers to the output speed.

stty -F /dev/ttyS3 ispeed 115200 ospeed 115200
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-3.png" /></div>

The default serial port has echo enabled, and you can use the following command to disable it:

```bash
stty -F /dev/ttyS3 -echo
```

Serial communication:

```bash
#Send data
echo "hello world" > /dev/ttyS3
echo Hello! > /dev/ttyS3
#Receive data
cat /dev/ttyS3
```

Use the minicom tool to communicate via the serial port:

```bash
minicom -D /dev/ttyS3 -b 115200
```


### <span id="jump7">User Button</span>

The reCamera's usr button can be customized by the user.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

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
