---
name: Getting Started with BeagleV™ - StarLight
category: BeagleV™ - StarLight
bzurl: 
wikiurl: 
sku: 
---

# Getting Started with BeagleV™ - StarLight

 <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/DSC09915.png" alt="pir" width="600" height="auto"></p>

BeagleV™ - StarLight is the first affordable RISC-V computer designed to run Linux. It is fully open-source with open-source software, open hardware design and RISC-V open architecture. It is a joint effort by Seeed Studio, BeagleBoard.org® and StarFive.

It is powered by RISC-V SiFive U74 Dual-Core 64-bit RV64GC ISA SoC running at 1.0GHz with 4GB/ 8GB LPDDR4 RAM variants and has rich I/O peripherals such as USB 3.0 ports, 40 pin GPIO header, Gigabit Ethernet Connector, Micro-SD card slot and much more. BeagleV™ - StarLight also has rich AI features with Neural Network Engine and NVDLA Engine. It has onboard audio and video processing capabilities and has MIPI-CSI and MIPI-DSI connectors for video hardware. It has wireless capabilities with Wi-Fi and BLE and has a wide software compatibility including support for Fedora.

## Features

- Truly open-source hardware, software and RISC-V open architecture
- Powerful and rich AI features with Neural Network Engine and NVDLA Engine
- Abundant I/O peripherals
- Wireless connectivity with Wi-Fi and BLE
- Onboard video and audio processing
- Wide software compatibility including support for Fedora
- Integrated with Seeed Fusion Service for customization and mass production

## Specifications

| Specification | Details |
|-|-|
| Processor | • RISC-V SiFive U74 Dual-Core 64-bit RV64GC ISA SoC with 2MB L2 cache @ 1.0GHz<br>• Vision DSP Tensilica-VP6 for computing vision @ 600MHz<br>• NVDLA Engine (configuration 2048 MACs @ 800MHz)<br>• Neural Network Engine (1024MACs @ 500MHz) |
| Memory | • 4GB LPDDR4/ 8GB LPDDR4 |
| Wireless<br>Connectivity | • 2.4 GHz Wi-Fi (IEEE 802.11b/g/n)<br>• Bluetooth 4.2 (BLE) |
| Video<br>Processing | • 2 x MIPI-CSI (up to 4K@30fps), 1 x MIPI-DSI (up to 4K@30fps)<br>• 1 x HDMI 1.4 (up to 1080p@60fps display)<br>• Video Decoder (H264/H265) up to 4K@60FPS; Support Dual stream decoding for 2K@30FPS each<br>• Dual channels of ISP, each channel support up to 4K@30FPS<br>• Support MIPI-CSI TX for video output after ISP and AI processing<br>• JPEG encoder/decoder |
| Dedicated Audio<br>Processing DSP<br>and Sub-system | • Ultra-low power Voice Activity Detector for audio bit-stream as a Voice Trigger<br>• On-chip Audio DAC<br>• Support DMIC and AMIC, up to 4 channels |
| Peripherals | • 4 x USB 3.0 ports<br>• 40 Pin GPIO Header (28 x GPIO, I2C, I2S, SPI, UART)<br>• Gigabit Ethernet Connector<br>• 3.5mm Audio jack (4-pole stereo audio output)<br>• Micro-SD card slot for system boot and data storage<br>• Support TRNG and OTP<br>• Support DMAC, QSPI and other peripheral<br>• Reset button and Power Button |
| Power Supply | • Minimum: 5V/1.5A<br>• Recommended: 5V/3A |
| Power Connector | • USB Type-C port or 40-pin GPIO header |
| Dimensions | • 86.9 x 70 x 19mm |

## Hardware Overview

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/HW_Top_1.jpg" alt="pir" width="550" height="auto"></p>

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/HW_Bottom.jpg" alt="pir" width="550" height="auto"></p>

- **1.** RISC-V SiFive U74 Dual-Core 64-bit RV64GC ISA SoC
- **2.** 4GB LPDDR4 RAM
- **3.** 2.4GHz Wi-Fi and Bluetooth 4.2 (BLE)
- **4.** 40 Pin GPIO Header
- **5.** MIPI-DSI Connector
- **6.** PMIC
- **7.** USB Type-C Connector
- **8.** LCD to HDMI IC
- **9.** HDMI 2.0 Connector
- **10.** 2 x MIPI-CSI Connector
- **11.** Gigabit Ethernet (RJ45 Connector)
- **12.** 2 x USB 3.0 Host Type-A
- **13.** 2 x USB 3.0 Host Type-A
- **14.** 3.5mm Audio Jack (4-pole stereo audio output)
- **15.** Micro-SD SDXC Card Slot

!!!Note
        3A of current is recommended for this board due to the following. The onboard components need about 1A, the 4 USB ports can draw a total of 1A combined, one USB port alone can also draw 1A and the remaining current is for expansion header and others.

## Pinout Diagram

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/pinout.jpg" alt="pir" width="550" height="auto"></p>

!!!Note
        Each GPIO pin can safely draw a maximum current of 39mA, whereas the maximum current draw when all GPIOs are combined should be less than 100mA. Please take this into account or otherwise you will end up destroying the GPIO pins.

!!!Note
        All GPIOs can be configured to different functions including but not limited to **SDIO, Audio, SPI, I2C, UART and PWM**.   

## Getting Started - Hardware Required

You need to prepare the following hardware before getting started with the BeagleV™ - StarLight

- BeagleV™ - StarLight
- 16GB (or more) micro-SD card
- micro-SD card reader
- Computer (PC/Mac/Linux)
- USB To Serial Converter (3.3V I/O) or Ethernet Cable
- Power Adapter (5V/3A) 
- USB Type-C Cable

## Getting Started - Connecting a Fan

BeagleV™ - StarLight tends to run hot even with a heat sink installed. So it's recommended to use a fan with BeagleV™ - StarLight. You can connect a 5V fan to the board as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/Fan_connection_1.jpg" alt="pir" width="1000" height="auto"></p>

**Note:** You can also connect the red wire (+) to pin 2 (5V) and connect the black wire (-) to pin 9/14/20/25/30/34/39 (GND)

## Getting Started - Software Set Up

### Flash Fedora OS to Micro-SD Card

Now we need to burn **Fedora** (which a Linux distribution) on to a micro-SD card, so that it can run on the BeagleV™ - StarLight. Follow the steps below according to your operating system.

Start by downloading the **Fedora image** from [here](https://github.com/starfive-tech/beaglev_fedora).

#### For Windows 

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **Zstandard-CLI** software by visiting the links below:

    - [Zstandard-CLI for windows 32-bit](https://github.com/facebook/zstd/releases/download/v1.4.9/zstd-v1.4.9-win32.zip)
    - [Zstandard-CLI for windows 64-bit](https://github.com/facebook/zstd/releases/download/v1.4.9/zstd-v1.4.9-win64.zip)

> <p style="font-size:16px">[Click here](https://github.com/facebook/zstd/releases/tag/v1.4.9) to visit the github repo</p>

- **Step 3.** Extract the .ZIP file

- **Step 4.** Copy the `Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw` file and paste inside `zstd` directory that you just extracted

- **Step 5.** Open **Windows Powershell** and navigate to the `zstd` directory

```sh
Example:
cd D:\Downloads\zstd
```

- **Step 6.** Type the following command to **unzip** the **Fedora image**

```sh
./zstd.exe -d Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw.zst -o Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw
```

**Note**: Now your image file is named `Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw`

- **Step 7.** Visit [this link](https://www.balena.io/etcher/) to download **BalenaEtcher**. We will use BalenaEtcher software to flash the Fedora image to a micro-SD card

- **Step 8.** Install BalenaEtcher and open it

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/balena_start.png" alt="pir" width="700" height="auto"></p>

- **Step 9.** Click on **Flash from file** and point to the location of the image that we just unzipped: `Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw`

- **Step 10.** Click on **Select target** and select the connected micro-SD card 

- **Step 11.** Finally, click on **Flash!**

#### For Mac/Linux

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Open a **terminal window** on Mac/Linux

- **Step 3.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 4.** Type the following to install **zstd** package which we will use to unzip our Fedora image file

```sh
sudo apt-get install zstd
```

- **Step 5.** Navigate to the location of the downloaded **Fedora** image directory before

```sh
Example:
cd Downloads/
```

- **Step 6.** Run the following command to **unzip** the Fedora image 

```sh
zstd -d Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw.zst
```

- **Step 7.** **Burn** the Fedora image to the micro-SD card by running the following command

```sh
sudo dd if=Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw of=/dev/sdc bs=8M status=progress && sync
```

> <p style="font-size:16px">**Note:** <br>
  1.`of=/dev/sdc` corresponds to the location of the connected micro-SD card. You can find this by running **lsblk** command <br>
  2.The whole burning process will take about 20 minutes</p>

### Log in to Fedora OS on BeagleV™ - StarLight

#### Method 1: Using SSH over Ethernet

After installing Fedora, you can log in to Fedora using an **SSH connection** over the local network

- **Step 1.** Insert the **micro-SD card** with the **Fedora image** into the BeagleV™ - StarLight and power on

- **Step 2.** Connect one end of an Ethernet cable to the RJ45 connector on the BeagleV™ - StarLight and the other end of the cable to a router

- **Step 3.** Unplug the Ethernet cable from BeagleV™ - StarLight, plug again

**Note:** This is a [known issue](https://github.com/starfive-tech/beaglev_fedora/issues/2) and will be fixed in the future

After that, your router will assign an **IP address** to the BeagleV™ - StarLight and it will be connected to the **internet**.

##### For Windows 

- **Step 1.** Log in to your router (usually you need to enter **192.168.1.1** on the web browser to enter the router)

- **Step 2.** Go to **DHCP configuration** and find the **IP address** of the BeagleV™ - StarLight.

**Note:** You can easily find the IP address of the BeagleV™ - StarLight by referring to it's **Host Name: fedora-starfive**

- **Step 3.** Download and install **Putty** by visiting [this link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Note:** Putty is an SSH and telnet client where you can use it to connect to the Carrier Board via SSH. You can skip this step if you already have Putty installed

- **Step 4.** Open Putty to log in to Fedora

- **Step 5.** Select **SSH** under the **Connection Type**

- **Step 6.** Configure the settings as follows:

    - Host Name: `IP address of your BeagleV™ - StarLight`
    - Port: 22

- **Step 7.** Click open

- **Step 8.** Enter the credentials as follows:

```sh
Username: riscv
Password: starfive
```

Now you have connected with the BeagleV™ - StarLight via SSH using windows!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_4.jpg" alt="pir" width="650" height="auto"></p>

##### For Mac/Linux

- **Step 1.** Log in to your router (usually you need to enter **192.168.1.1** on the web browser to enter the router)

- **Step 2.** Go to **DHCP configuration** and find the **IP address** of the BeagleV™ - StarLight.

**Note:** You can easily find the IP address of the BeagleV™ - StarLight by referring to it's **Host Name: fedora-starfive**

- **Step 3.** Open a terminal window and type the following

```sh 
ssh riscv@192.168.1.xxx
```

**Note:** 192.168.1.xxx is the IP address of the BeagleV™ - StarLight

- **Step 4.** Type the password as **starfive** in the prompt

> <p style="font-size:16px">riscv@192.168.1.xxx's password: **starfive**</p>

Now you have connected with the BeagleV™ - StarLight via SSH using Mac/Linux!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_4.jpg" alt="pir" width="650" height="auto"></p>

#### Method 2: Using a USB to Serial Converter

You can log in to Fedora OS using a **USB to Serial Converter**. Please follow the guide below.

##### For Windows

- **Step 1.** Insert the micro-SD card with the Fedora image from before into BeagleV™ - StarLight

- **Step 2.** Connect one end of the USB Type-C cable to the USB Type-C port on the BeagleV™ - StarLight and connect the other end of the cable to the power adapter

- **Step 3.** Connect the jumper wires from the USB to Serial Converter to the 40-Pin GPIO header of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/connection.jpg" alt="pir" width="1000" height="auto"></p>

!!!Note
        You can use any USB to Serial Converter with 3.3V I/O

- **Step 4.** Connect the USB to Serial Converter to the PC

- **Step 5.** Open **Device Manager** by typing **Device Manager** in the windows search box

- **Step 6.** Click on the drop-down arrow from **Ports (COM & LPT)** and find the name of the connected serial port (ex: **COM4**)

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/device_manager1.png" alt="pir" width="320" height="auto"></p>

- **Step 7.** Download and install **Putty** by visiting [this link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Note:** Putty is an SSH and telnet client where you can use it to connect to the Carrier Board via SSH. You can skip this step if you already have Putty installed

- **Step 8.** Open Putty to connect the PC to the Carrier Board

- **Step 9.** Select **Serial** under the **Connection Type**

- **Step 10.** Configure the settings as follows:

    - Serial line: COM4 (choose your COM port)
    - Speed: 115200

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"></p>

- **Step 11.** Click **Open**

- **Step 12.** Turn on the power from the wall power socket to power on the BeagleV™ - StarLight

- **Step 13.** Type username and password in the prompt as follows:

```sh
Username: riscv
Password: starfive
```

Now you have connected with the BeagleV™ - StarLight via serial communication using windows!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_4.jpg" alt="pir" width="650" height="auto"></p>

##### For Mac/Linux

- **Step 1.** Insert the micro-SD card with the Fedora image from before into BeagleV™ - StarLight

- **Step 2.** Connect one end of the USB Type-C cable to the USB Type-C port on the BeagleV™ - StarLight and connect the other end of the cable to the power adapter

- **Step 3.** Connect the jumper wires from the USB to Serial Converter to the 40-Pin GPIO header of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/connection.jpg" alt="pir" width="1000" height="auto"></p>

- **Step 4.** Connect the USB to Serial Converter to the PC and turn on the power to BeagleV™ - StarLight

- **Step 5.** Open a **terminal window** on Mac/Linux

- **Step 6.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 7.** Type the following to install **minicom**

```sh
sudo apt-get install minicom
```

- **Step 8.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_1.png" alt="pir" width="850" height="auto"></p>

- **Step 9.** Connect to the serial device by typing the following

```sh 
minicom -D /dev/ttyACM0 -b 115200
```

**Note:** The baud rate is set to 115200

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_2.png" alt="pir" width="650" height="auto"></p>

- **Step 10.** Turn on the power from the wall power socket to power on the BeagleV™ - StarLight

- **Step 11.** Type username and password in the prompt as follows:

```sh
Username: riscv
Password: starfive
``` 

Now you have connected with the BeagleV™ - StarLight via serial communication using Mac/Linux!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_4.jpg" alt="pir" width="650" height="auto"></p>

## FAQ

### What is JH7100 and JH7110?

JH7100 is a beta version test chip which targets prior developers to contribute to the RISC-V community in a very early time. So when we design this SoC, we also took this chance to verify the performance and put our experience into JH7110. JH7100 has some known issues. Therefore we are ready to fix these issues on JH7110 and make JH7110 SoC ready for mass production.

### Why Ethernet speed does not reach up to 1Gbps? 

Our testing result is TX: 301Mbps, RX: 285Mbps. This is related to the design issue of JH7100 chipset, and we will fix this issue in JH7110 chipset design.

### Why USB 3.0 Host speed is lower than the specification?

When we read and write SSD via USB 3.0 Host port, the testing speeds are:

A: 67.7MB/s
B: 71.6MB/s
C: 65.8MB/s
D: 74.3MB/s

This is related to the design issue of JH7100 chipset, and we will fix this issue in JH7110 chipset design.

### Why the read speed of SD card is slower than the specification?

Our testing result is 22MB/s. This is related to the design issue of JH7100 chipset, and we will fix this issue in JH7110 chipset design.

### Why the board is very hot when running?

We did not take low power functioning into consideration when designing the JH7100 chipset. This will be improved in JH7110 chipset design. Currently we have installed a cooling fan on the board for heat dissipation.

### Why some of the displays cannot be driven via the HDMI port?

It is probable that some of the old model displays can not work with the board's HDMI port. This is because the driver is not compatible with all displays. We suggest using new displays manufactured in the last 2 years. We will keep developing software drivers to support more display models.

### How to check the temperature of CPU?

You can enter the following commands to check the CPU temperarature

```sh
cat /sys/devices/platform/soc/124a0000.tmpsensor/temp1_input
```

## Resources

- **[ZST]** [Fedora Image - 202104161415](https://rcn-ee.net/rootfs/fedora/Fedora-riscv64-vic7100-dev-raw-image-Rawhide-202104161415.n.0-sda.raw.zst)

## Tech Support
Please submit any technical issue into [StarFive GitHub repo](https://github.com/starfive-tech/beaglev_fedora/issues) or [BeagleBoard forum](https://forum.beagleboard.org/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>