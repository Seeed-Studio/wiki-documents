---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ODYSSEY-X86J4105/
sku: 102110399
---

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

The ODYSSEY - X86J4105, is based on Intel Celeron J4105, a Quad-Core 1.5GHz CPU that bursts up to 2.5GHz. It has all the great features that a standard Computer needs, including an 8GB LPDDR4 RAM, 64GB eMMC Storage(optional), onboard Wi-Fi/BLE, Dual Gigabit Ethernet Ports, Audio Input and Output, USB Ports, HDMI, SATA Connectors, PCIe, etc.

## Key Features:

- Intel® Celeron® J4105, Quad-Core 1.5-2.5GHZ
- Dual-Band Frequency 2.5GHz/5GHz WiFi/ Bluetooth 5.0
- Intel® UHD Graphics 600
- Dual Gigabit Ethernet
- Integrated Arduino Coprocessor ATSAMD21 ARM® Cortex®-M0+
- Raspberry Pi 40-Pin Compatible
- 2 x M.2 PCIe (B Key and M Key)
- Pre-installed with Windows 10 Enterprise
- Compatible with Grove Ecosystem

<p style=":center"><a href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Hardware Specifications

| Components       | ODYSSEY - X86J4105                                                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Processor        | Intel® Celeron® J4105 (Frequency: 1.5 - 2.5GHz)                                                                                                    |
| Coprocessor      | Microchip® ATSAMD21G18 32-Bit ARM® Cortex® M0+                                                                                                        |
| Graphics         | Intel® UHD Graphics 600 (Frequency: 250 – 750MHz)                                                                                                     |
| Memory           | LPDDR4 8GB                                                                                                                                              |
| Storage          | 64GB eMMC V5.1                                                                                                                                         |
| Wireless         | Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 & Bluetooth® 5.0                                                                                          |
| Networking       | Intel® I211AT PCIe Gigabit LAN                                                                                                                          |
| Audio            | Microphone + headphone Combo Connector                                                                                                                 |
| Headers          | 28-pin header from SAMD21G18 & 40-pin header compatible with Raspberry Pi                                                                             |
| USB              | USB 2.0 Type-A x2, USB 3.1 Type-A x1, USB 3.1 Type-C x1                                                                                           |
| Video Interfaces | HDMI2.0a: Up to 4096x2160 @ 60Hz 24bpp / DP1.2a: Up to 4096x2160 @60Hz 24bpp                                                                                                                                                                 |
| Expansion Slots  | M.2(Key B, 2242/2280): SATA III, USB2.0, UIM; M.2 (Key M, 2242/2280): PCIe 2.0 ×4; Micro SD card Socket; SIM Card Socket; SATA III           |
| RTC              | JST 1.0 CR2032 3V                                                                                                                                      |
| TPM              | Built-in TPM (2.0)                                                                                                                                  |
| Power Connector           |DC Jack 5.5/2.1mm or Type-C PD                                                                 |
|Power Supply (for bare board)| DC Jack Input: Min:12V @ 300mA - 1.2A, Max:19V @ 200mA - 0.7A </br>Type-C Input: Min: 15V @ 0.27A, Max:15V @ 0.93A
|
| Dimensions       | 110x110mm                                                                                                                                               |
| Certifications   | FCC, CE                                                                                                                                                 |

!!!Note
        If you are using 3.5inch HDD drives with the ODYSSEY – X86J4105, make sure to use a DC power supply of 12V@2A or Type-C power supply of 15V@2A. 

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-08-n.png)

## Pinout Diagram

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-Pinout.png)

## Quick Start with ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Connected.png)

### Hardware Required

1. ODYSSEY - X86J4105

2. Power Adapter(provided)

3. External monitor

4. HDMI cable

5. Keyboard and Mouse

### Attaching External Storage

For 64 GB EMMC storage version of the ODYSSEY - X86J4105, you can skip this step. However, if you need more storage for your needs, feel free to follow this step.

There are 4 methods of adding storage for ODYSSEY - X86J4105, but only 3 methods support installing the operating system(M.2 SATA, M.2 PCIE and SATA), and the Micro SD card slot can only be used as external storage.

- **Method 1 - M.2 PCIE Connector**

- **Method 2 - M.2 SATA Connector**

- **Method 3 - SATA Connector**

- **Method 4 - Micro SD Card Slot**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### Installing the Operating System

ODYSSEY - X86J4105 supports both Windows and Linux operating system.

- For Non-EMMC version, attach extenal storage following previous steps, and install your desired operating system through a bootable USB drive.

- For EMMC version, Windows 10 Enterprise is pre-installed.

#### Step 1

Connect bootable USB drive into one of the USB ports on ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

**Note:** please visit Creating Bootable USB and Installing OS for more information about creating a bootable USB Drive.

#### Step 2

Press the power button and keep pressing the **F7** key on the keyboard until the Boot Manager screen appears.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### Step 3

Select the connected USB Drive as the 1st boot drive and press Enter.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### Step 4

Follow the instructions on the installation to complete installing the operating system.

**Note:** To access the BIOS setup, keep pressing **DEL** key when booting up.

### Connecting Antennas

Connect two antennas into the two sockets on the board.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

Note: One Antenna is for Wi-Fi and Bluetooth, and the other is for strong 5G Connectivity.

### Adding 4G Cellular Connectivity

For 4G Cellular connectivity, insert a standard SIM card into the SIM card slot of the board.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### Insert a PCIE 4G Module

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**Note:** This module is a must have if you want to use the connected SIM Card.

### Connecting to Display

There are 2 methods for display:

#### Method 1 - HDMI Port

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### Method 2 - DP over USB-C Port

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### Connecting to Keyboard and Mouse

Connect Keyboard and Mouse through USB ports

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## Powering up

There are two ways to power up the ODYSSEY - X86J4105:

### Method 1

The simplest way is to use the 12V/2A power adaptor included in the package, and connect to the DC jack of ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### Method 2

You can also power the ODYSSEY - X86J4105 through the USB-C port with 12V input. Furthermore, if your Monitor supports USB-PD, you are able to power and display ODYSSEY - X86J4105 using only 1 cable!

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## Performance Stats

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Wi-Fi Connecitivity

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### Bluetooth Connecitivity

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## Operating as Computer

- Browsing and watch videos on Youtube

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- Playing Google T-Rex!

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## Using the Arduino Core (ATSAMD21G18) in Windows

The ODYSSEY - X86J4105 is built with Arduino Core(ATSAMD21G18) which provides more functionality to the board, and to use it, simply download the [Arduino IDE](https://www.arduino.cc/en/main/software), and Install the Windows version.

1. Click `File`->`Preferences`->`Additional Boards Manager URL:` and Copy the following link into it `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Click `Tools`->`Board:`->`Boards Manager...`, and Boards Manager will appear. Search and install the **`Seeeduino Zero`** board library.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. Select the right Port and Board before uploading. 

- `Port` -> `COMxx(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

Feel free to explore your creativity with ODYSSEY - X86J4105!

## Using the Arduino Core (ATSAMD21G18) in Linux OS

If you have installed Linux OS, Download the Linux version of [Arduino IDE](https://www.arduino.cc/en/main/software) and install the IDE as follow:

### Installing Arduino IDE

1. Open terminal and goto Downloads

```sh
cd ~/Downloads
```

2. Use tar command to unzip the downloaded file

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

3. Move the file to opt

```sh
sudo mv arduino-1.8.10 /opt
```

4. Install Arduino IDE and make a Desktop shortcut

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

5. Allow permissions for Arduino to upload

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### Installing Board Libraries

1. Click `File`->`Preferences`->`Additional Boards Manager URL:` and Copy the following link into it `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Click `Tools`->`Board:`->`Boards Manager...`, and Boards Manager will appear. Search and install the **`Seeeduino Zero`** board library.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. Select the right Port and Board before uploading.

- `Port` -> `ttyACM0(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

## FAQs

### How can I access the BIOS setup

Press the Power Button and keep pressing DEL key until you see the BIOS Setup.

### Arduino IDE doesn't recognize the onboard microcontroller

Add a jumper wire between **RST Pin** and **GND Pin** on the 4-Pin header (to the left of SAMD21's 28 pins) to reset the AMSAMDG21.

### I cannot connect Wi-Fi and Bluetooth

Check BIOS settings and enable Wi-Fi and Bluetooth from BIOS

### ODYSSEY - X86J4105 doesn't power up

Maker sure you use the 12V/2A power adapter provided in the box and check connection.

### Different status of Power button of ODYSSEY - X86J4105

It has the same power button state as other computers:

- `Short Press(While it's off)` -> `Turn on`

- `Short Press(While it's on)` -> `Sleep`

- `Long Press(While it's on)` -> `Force shutdown`

### Is the built-in fan controllable

Currently the fan is controlled by BIOS, and not controlled by user. The fan speed is set according to the CPU temperature. Check `Chipset` -> `FAN Contorl` in the BIOS setup screen for more information.

### How to upgrade BIOS

For the instrucitons of upgrading BIOS, please check the Installing OS section.

### How to set the ODYSSEY - X86J4105 to auto power on when power plugged in

This also need to be configured in the BIOS. Enter BIOS settings by pressing DEL key. Navigate to **Chipset** -> **Restore on AC Power Loss** and change settings to **Last State**.

<div align=center><img width = 500 src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png"/></div>

## Resources

- **[ZIP]** [ODYSSEY-X86J4105 3D Model](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[PDF]** [Atmel-SAMD21-datasheet](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [ODYSSEY-X86 User Manual](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[ZIP]** [ODYSSEY-X86 Windows Driver Package](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>