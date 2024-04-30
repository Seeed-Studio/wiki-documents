---
description: Getting Started with reTerminal
title: Getting Started with reTerminal
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# Getting Started with reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

Introducing reTerminal, a new member of our reThings family. This future-ready Human-Machine Interface (HMI) device can easily and efficiently work with IoT and cloud systems to unlock endless scenarios at the edge.

reTerminal is powered by a Raspberry Pi Compute Module 4 (CM4) which is a Quad-Core Cortex-A72 CPU running at 1.5GHz and a 5-inch IPS capacitive multi-touch screen with a resolution of 1280 x 720. It has sufficient amount of RAM (4GB) to perform multitasking and also has sufficient amount of eMMC storage (32GB) to install an operating system, enabling fast boot up times and smooth overall experience. It has wireless connectivity with dual-band 2.4GHz/5GHz Wi-Fi and Bluetooth 5.0 BLE.

reTerminal consists of a high-speed expansion interface and rich I/O for more expandability. This device has security features such as a cryptographic co-processor with secure hardware-based key storage. It also has built-in modules such as an accelerometer, light sensor and an RTC (Real-Time Clock). reTerminal has a Gigabit Ethernet Port for faster network connections and also has dual USB 2.0 Type-A ports. The 40-pin header on the reTerminal opens it for a wide range of IoT applications.


reTerminal is shipped with Raspberry Pi OS out-of-the-box. So, all you have to do is connect it to power and start building your IoT, HMI and Edge AI applications right away!

| Released Date | Pre-Installed OS | Pre-Installed STM32 Firmware | Board Version | Additional Information |
|---|---|---|---|---|
| 06/15/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | Initial |
| 08/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 09/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | Change IO Expansion Chip from MCP23008-E to PCA9554, <br />Change Encryption Microchip from ATECC608A-SSHDA-B to ATECC608A-TNGTLSS-G [More Info](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 11/02/2021 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

- Integrated modular design with high stability and expandability
- Powered by Raspberry Pi Computer Module 4 with 4GB RAM & 32GB eMMC
- 5-Inch IPS capacitive multi-touch screen at 1280 x 720 and 293 PPI
- Wireless connectivity with dual-band 2.4GHz/5GHz Wi-Fi and Bluetooth 5.0 BLE
- High-speed expansion interface and rich I/O for more expandability
- Cryptographic co-processor with secure hardware-based key storage
- Built-in modules such as accelerometer, light sensor and RTC
- Gigabit Ethernet Port and Dual USB 2.0 Type-A ports
- 40-Pin header for IoT applications

## Specifications

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>Specification</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Platform</td>
      <td>Processor</td>
      <td>Broadcom BCM2711 quad-core Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>Frequency</td>
      <td>64-bit SoC @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>Memory</td>
      <td>Capacity</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>Technology</td>
      <td>LPDDR4 with on-die ECC</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>Capacity</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>Wireless</td>
      <td>Wi-Fi</td>
      <td>2.4GHz and 5.0GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Display</td>
      <td>LCD</td>
      <td>5-inch 720x1280 LCD</td>
    </tr>
    <tr>
      <td>Touch Panel</td>
      <td>Capacitive touch panel (support multi-touch)</td>
    </tr>
    <tr>
      <td rowSpan={5}>Video</td>
      <td>HDMI</td>
      <td>1 x Micro HDMI output (up to 4Kp60 supported)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x 2-lane MIPI CSI camera interface</td>
    </tr>
    <tr>
      <td rowSpan={3}>Multimedia</td>
      <td>H.265 (4Kp60 decode)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60 decode,1080p30 encode)</td>
    </tr>
    <tr>
      <td>OpenGL ES 3.0 graphics</td>
    </tr>
    <tr>
      <td rowSpan={10}>Built-In Modules</td>
      <td rowSpan={2}>Real-Time Clock</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>Low backup current; typical 0.25μA at VDD = 3.0 V and Temperature = 25 ℃</td>
    </tr>
    <tr>
      <td rowSpan={2}>Accelerometer</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16-bit, ±2g/±4g/±8g/±16g dynamically selectable full scale</td>
    </tr>
    <tr>
      <td rowSpan={2}>Encryption</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>Secure Hardware-Based Key Storage, Asymmetric Sign, Verify, Key Agreement</td>
    </tr>
    <tr>
      <td rowSpan={2}>Light Sensor</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>Digital light sensor</td>
    </tr>
    <tr>
      <td>Internal IO<br />Expansion</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>External I/O</td>
      <td rowSpan={8}>GPIOs</td>
      <td>Up to 5 × UART</td>
    </tr>
    <tr>
      <td>Up to 5 × I2C</td>
    </tr>
    <tr>
      <td>Up to 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × SDIO interface</td>
    </tr>
    <tr>
      <td>1 × DPI (Parallel RGB Display)</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × PWM channel</td>
    </tr>
    <tr>
      <td>Up to 3× GPCLK outputs</td>
    </tr>
    <tr>
      <td rowSpan={4}>Vertical expansion<br />interface</td>
      <td>1 × PCIe 1-lane Host, Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0 port (highspeed)</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Power</td>
      <td>Voltage</td>
      <td>5V DC</td>
    </tr>
    <tr>
      <td>Current</td>
      <td>3A(Minimum)</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td>Operating Temperature</td>
      <td>0 - 70°C( For the LCD Screen: 0 - 60°C)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Mechanical</td>
      <td>Dimensions</td>
      <td>140mm x 95mm x 21mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>285g</td>
    </tr>
  </tbody>
</table>

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Block Diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/reTerminal_block_diagram-v1.3.png" alt="pir" width="1000" height="auto"/></p>

## Pinout Diagram

**Note:** Please make sure to keep the reTerminal in the orientation as illustrated below. Here the LCD is facing right side and the back is facing left side.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
Please carefully pay attention to the orientation of the reTerminal in the above diagram. The LCD and the onboard buttons are on the right side whereas the back of reTerminal is on the left side. Also the whole device is flipped upside down.
:::

## Quick Start with reTerminal

If you want to get started with the reTerminal in the most fastest and easiest way, you can follow the guide below.

### Hardware Required

You need to prepare the following hardware before getting started with reTerminal

- reTerminal
- Ethernet cable or Wi-Fi connection
- Power adapter (5V/3A)
- USB Type-C cable

### Software Set Up

#### Log in to Raspberry Pi OS

reTerminal comes with Raspberry Pi OS pre-installed out-of-the-box. So we can turn on the reTerminal and log in to Raspberry Pi OS straight away!

- **Step 1.** Connect one end of a USB Type-C cable to the reTerminal and the other end to a power adapter (5V/4A)

- **Step 2.** Once the Raspberry Pi OS is booted up, press **OK** for the **Warning** window

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** In the **Welcome to Raspberry Pi** window, press **Next** to get started with the initial set up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 4.** Choose your **country, language, timezone** and press **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 5.** To change the password, first click on **Raspberry Pi** icon, navigate to `Universal Access > Onboard` to open the on-screen keyboard

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 6.** Enter your desired password and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**Note:** If you want to keep the default password as **raspberry**, you can leave this blank and click **Next**

- **Step 7.** Click **Next** for the following

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 8.** If you want to connect to a WiFi network, you can choose a network, connect to it and press **Next**. However, if you want to set it later, you can press **Skip**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 9.** **This step is very important.** You should make sure to press **Skip** to skip updating the software. However, if you want to update the software, you can follow [this wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **Step 10.** Finally press **Done** to finish the set up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**Note:** The button on the top left corner can be used to turn on the reTerminal after shutting down using software

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**Tip:** If you want to experience the Raspberry Pi OS on a bigger screen, you can connect a display to the micro-HDMI port of the reTerminal and also connect a keyboard and a mouse to the USB ports of the reTerminal.

## Getting Started with reTerminal (Extended)

If you want to install Raspberry Pi OS by yourself, install other OS such as 64-bit Ubuntu, log in to reTerminal via SSH over WiFi, SSH over Ethernet and USB to Serial Adapter, you can follow the guide below!

### Hardware Required

You need to prepare the following hardware

- reTerminal
- Computer (Windows/Mac/Linux)
- 8GB (or more) micro-SD card (optional)
- Micro-SD card reader (optional)
- USB to serial converter (optional)
- Ethernet cable (optional)
- Wi-Fi connection (optional)
- Power adapter (5V/3A)
- USB Type-C cable

### <span id="jump2">Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC</span>

We can flash **Raspberry Pi OS/ 64-bit Ubuntu OS or other OS** on to the **eMMC storage** of the CM4 on the reTerminal. Once the necessary drivers are installed, you just have to connect the USB Type-C port of the reTerminal to your PC, and it will show as an external drive. Start by removing the reTerminal back shell.

- **Step 1.** Remove the 4 rubber covers and open the reTerminal back shell unscrewing the 4 screws underneath

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **Step 2.** Remove the 2 screws to disassemble the heatsink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **Step 3.** Flip down the **boot mode switch** according to the below diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Now let's move on to software set up. Follow the steps according to your desired operating system

##### For Windows

- **Step 1.** Download the **rpiboot setup installer** by click **[this link](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** to install the necessary drivers and the boot tool

- **Step 2.** Connect reTerminal to the PC via USB Type-C cable

Windows will now find the hardware and install the necessary drivers

- **Step 3.** Search for **rpiboot** tool that we installed before and open it

- **Step 4.** Open **file explorer** and you will see the eMMC of the Computer Module 4 shown as a **USB mass storage device**

- **Step 5.** Download **Raspberry Pi Imager** software by visiting **[this link](https://www.raspberrypi.org/software/)**

- **Step 6.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 7.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 8.** Click **CHOOSE OS** and select your preferred OS

:::note
If you are attempting to install Raspbian OS, we have conducted tests and found that both the *32-bit and 64-bit* versions of **Bullseye** work well with reTerminal without encountering any [**black screen issue**](https://wiki.seeedstudio.com/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). Additionally, we have also tested the new **Bookworm** *64-bit* version, and it functions smoothly on reTerminal.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select other OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 9.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 10.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 11.** Flip the **Boot Mode switch** back to the original position and assemble the reTerminal shell

Now you can skip to **[here](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### For MAC

:::caution
**You need to install [homebrew](https://brew.sh/) before proceed the following steps.**
Please open a terminal and type ```brew -V``` to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.
:::

- **Step 1.** Clone the **usbboot** repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 2.** Install **libusb**

```sh
brew install libusb
```

- **Step 3.** Install **pkg-config**

```sh
brew install pkg-config
```

- **Step 4.** Build using make

```sh
make
```

- **Step 5.** Run the binary

```sh
sudo ./rpiboot
```

- **Step 6.** Connect reTerminal to the your Mac computer via USB Type-C cable

- **Step 7.** Download and Install **Raspberry Pi Imager** Application by visiting [this link](https://www.raspberrypi.org/software/)

- **Step 8.** Open the **Raspberry Pi Imager** Application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 9.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 10.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 11.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 12.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 13.** Flip the **Boot Mode switch** back to the original postion and assemble the reTerminal shell

Now you can skip to **[here](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### For Linux

We will use Git to obtain the **rpiboot** source code, so make sure Git is installed

- **Step 1.** Open a **Terminal** window and type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 2.** Install **Git** by the following command

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Step 3.** Git might produce an error if the date is not set properly. Type the following to correct this

```sh
sudo date MMDDhhmm
```

**NOTE:** Where **MM** is the month, **DD** is the date, and **hh** and **mm** are hours and minutes respectively.

- **Step 4.** Clone the **usbboot** tool repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 5.** Build and install the usbboot tool

```sh
make
```

- **Step 6.** Run the usbboot tool and it will wait for a connection

```sh
sudo ./rpiboot
```

- **Step 7.** Connect reTerminal to the PC via USB Type-C cable

- **Step 8.** Download **Raspberry Pi Imager** software by visiting [this link](https://www.raspberrypi.org/software/)

- **Step 9.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 10.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 11.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 12.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 13.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 14.** Flip the **Boot Mode switch** back to the original postion and assemble the reTerminal shell

### Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet

If you want to log in to the Raspberry Pi OS using **SSH over Wi-Fi/ Ethernet**, you can follow the steps below. First set up Wi-Fi/Ethernet on the reTerminal and then SSH using Windows/Mac/Linux.

**Note:** If you have configured WiFi and enabled SSH using Raspberry Pi Imager, you can skip steps 1 - 4

- **Step 1.** If you have a **Wi-Fi connection**, click the **Wi-Fi icon** on the top right corner of the Raspberry Pi OS Desktop, select your Wi-Fi network and enter the password using the on-screen virtual keyboard

**Note:** The location of the Wi-Fi setting might be different for other OS

- **Step 2.** If you don't have a **Wi-Fi connection**, you can connect an ethernet cable from your router to the ethernet port of the reTerminal

**Note:** Make sure the reTerminal and your computer is connected to the same network

- **Step 3.** Touch on the Raspberry Pi icon at the top left corner and navigate to `Preferences > Raspberry Pi Configuration` and click on **Interfaces** tab

- **Step 4.** Select **Enable** which is next to **SSH** and click **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Now let's configure the software on the computer. Please follow according to your operating system

##### For Windows

- **Step 1.** Open **Command Prompt** and type the following

```sh
ssh pi@raspberrypi.local
```

- **Step 2.** Type **yes** for the prompt

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Step 3.** Enter the password as follows

```sh
raspberry
```

- **Step 4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### For Mac/Linux

- **Step 1.** Open **Terminal** on the computer and type the following

```sh
ssh pi@raspberrypi.local
```

- **Step 2.** Type **yes** for the following message

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Step 3.** When it asks for the password, type the following

```sh
raspberry
```

- **Step 4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">Install reTerminal drivers after flashing new Raspberry Pi OS/ Ubuntu OS or Other OS</span>

reTerminal comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers. However, if you flash new OS by yourself, you need to install the necessary drivers separately. The hardware that need drivers include the **5-inch LCD, touch panel, accelerometer, light sensor, user LEDs, user buttons, RTC, buzzer, cryptographic co-processor**.

- **Step 1.** Clone the following repo

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Step 2.** Enter the repo

```sh
cd seeed-linux-dtoverlays
```

:::note
For **32bit OS** you will need to add following step before execute `sudo ./scripts/reTerminal.sh`.After completing the installation, remember to **reboot** reTerminal for the changes to take effect.
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **Step 3.** Type the following to install the drivers

```sh
sudo ./scripts/reTerminal.sh
```

:::note

Type the following if you don't want to upgrade the kernel at the same time:

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>


- **Step 4.** Reboot the reTerminal

```sh
sudo reboot
```

### Flash Raspberry Pi OS with drivers from seeed to eMMC

- **Step 1.** As with normal mirror burning steps, you need to select the device model first:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **Step 2.** When choosing an operating system, you need to download the system you need, unzip it in the local folder, and then select it.

- **Download the Raspberry Pi OS by visiting the links below**

| Version                     | Description      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

Select the OS you downloaded, it should end in **.img**.
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

If you install the latest bookworm version of the image. Do not going to configure by clicking the advance option button. Do not enter this interface for any initial configuration.
Otherwise, unexpected driver error situations may occur!!!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

If you accidentally make an advanced configuration and get a screen flip error, you'll need to [reinstall the driver](#jump1) to fix the problem.

:::

- **Step 3.** For other operations, refer to the [preceding steps](#jump2).
After the image is installed, you do not need to install the driver to use it. (The image we provide includes the driver file)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal Disassemble Guide

Please check the video below on how to disassemble reTerminal:

<p align="center"><iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>></p>

## FAQ

For Frequently Asked Questions, [click here](https://wiki.seeedstudio.com/reTerminal-FAQ) to visit the FAQs for reTerminal Usage wiki

## Resources

- **[PDF]** [reTerminal Schematics v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [reTerminal Schematics v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [reTerminal Schematics v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal Schematics v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [reTerminal 3D Model](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 Datasheet](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi Official Documentation](https://www.raspberrypi.org/documentation/)

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
