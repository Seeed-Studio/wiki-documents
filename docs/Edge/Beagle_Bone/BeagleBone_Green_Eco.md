---
description: Getting Started With SeeedStudio BeagleBone® Green Eco
title: Seeed Studio BeagleBone® Green Eco
keywords:
- Beagle_Bone_Green_Eco
image: https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Seeed-Studio-BeagleBoneR-Green-Eco.webp
slug: /getting_started_with_seeedstudio_beaglebone_green_eco
last_update:
  date: 9/18/2025
  author: Atom Yang
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1-102111198-Seeed-Studio-BeagleBoneR-Green-Eco.jpg" /></div>

**The Seeed Studio BeagleBone® Green Eco** is an industrial-grade, open-source single-board computer, co-developed with the BeagleBoard.org® Foundation and powered by the robust **TI AM3358 SoC**. This "Eco" version is engineered for high efficiency, incorporating an advanced TI power management chip (TPS6521403) to ensure optimized energy consumption. It is well-equipped for demanding applications with a generous 16GB of onboard eMMC storage and a Gigabit Ethernet port for high-speed network connectivity. For seamless hardware prototyping, it integrates two signature Grove connectors, offering direct, solder-free access to Seeed's extensive ecosystem of Grove sensors and modules.

Boot Linux in under 10 seconds and get started on development in less than 5 minutes with just a single USB cable.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Eco-p-6540.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

**Feature 1: Powerful Core & Real-Time Processing**

- Integrates a TI AM3358 1GHz ARM® Cortex-A8 processor, featuring a NEON™ SIMD coprocessor for accelerated processing. It also includes a dual-core Programmable Real-time Unit (PRU-ICSS) for deterministic, low-latency control, critical for industrial automation and robotics.

**Feature 2: Eco-Friendly Power Management**

- Utilizes an advanced TI TPS6521403 PMIC with features like PFM mode and dynamic voltage scaling. This significantly optimizes power consumption, making it ideal for energy-sensitive and battery-powered applications.

**Feature 3: 4X Storage Capacity & 10X Network Speed**

- Leaps forward with 16GB of onboard eMMC storage (a four-fold increase) and upgrades connectivity with a Gigabit Ethernet port, offering up to 10 times the bandwidth of its predecessor for high-speed, stable network communication.

**Feature 4: Rich & Modern Connectivity**

- Features upgraded high-speed interfaces including a Gigabit Ethernet port and a modern USB Type-C port for power and data. For rapid prototyping, it also includes two built-in Grove connectors (I2C & UART)Grove - Seeed Studio, enabling easy, solder-free connection to Seeed Studio's extensive ecosystem of sensors and actuators.

**Feature 5: Ready for Development**

- Comes pre-loaded with a Debian software image designated by the BeagleBoard.org® Foundation, providing a robust and familiar Linux environment with well-established tools and libraries to streamline your development process.

## Specification

| Category   | Item                  | Seeed Studio BeagleBone® Green Eco                                                                                     | Seeed Studio BeagleBone® Green                                                                 |
|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Processor  | Core                  | TI AM3358 1GHz ARM® Cortex-A8                                                                                          | TI AM3358 1GHz ARM® Cortex-A8                                                                 |
|            | Accelerators          | NEON floating-point unit & 3D graphics accelerator                                                                     | NEON floating-point unit & 3D graphics accelerator                                            |
| Memory     | RAM                   | 512MB DDR3L, 800MHz                                                                                                    | 512MB DDR3L, 800MHz                                                                           |
|            | Flash Storage         | **16GB eMMC (Kingston EMMC16G-WW28)**                                                                                  | 4GB 8-bit eMMC                                                                                |
|            | EEPROM                | 4KB                                                                                                                    | 4KB                                                                                    |
|            | External Storage      | microSD card slot, supports up to 32GB                                                                                 | microSD card slot, supports up to 32GB                                                        |
| Power      | Power Management      | **TI TPS6521403 PMIC**                                                                                                     | TI TPS65217C PMIC                                                                             |
|            | Voltage Regulator     | TI TPS62A01DRL (3.3V Buck converter);TI TPS74501PDRV (1.8V Always-On LDO);TI TPS2117DRL (Power Mux)            | TI TL5209DR (3.3V LDO Regulator)                                                              |
|            | Input Voltage         | 5V DC (via USB Type-C)                                                                                                 | 5V DC (via micro USB)                                                                         |
| Interfaces | USB                   | 1x USB 2.0 Host Type-A;1x USB 2.0 Type-C (power & device communication)                                            | 1x USB client (power & comms);1x USB host                                                 |
|            | Network               | **Gigabit Ethernet (10/100/1000Mbps)**                                                                                 | Ethernet (10/100Mbit)                                                                         |
|            | Expansion Headers     | 2x 46 pin headers                                                                                                      | 2x 46 pin headers                                                                             |
|            | Grove                 | 1x I2C, 1x UART2                                                                                                       | 1x I2C, 1x UART2                                                                              |
|            | Buttons               | 1x Reset button;1x User(Boot) button                                                                               | 1x Reset button;1x User(Boot) button;1x Power Button                                  |
|            | Indicators            | 1x power LED, 4x user-programmable LEDs                                                                                | 4x LEDs (heartbeat, microSD, CPU, eMMC)                                                       |
| Physical   | Dimensions            | 86.4mm x 53.3mm x 18mm                                                                                                 | 86.4mm x 53.3mm x 18mm                                                                        |
|            | Weight                | 40g                                                                                                                    | 45g                                                                                           |
|            | Operating Temperature | **-40 ~ 85℃**                                                                                                              | 0 ~ 75℃                                                                                       |

## Application Ideas

- Internet of Things
- Smart House
- Industrial
- Automation & Process Control
- Human Machine Interface
- Sensor Hub
- Robot

## Hardware Overview

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Hardware-Overview.png" /></div>

**Functional Block Diagram of BeagleBone® Green Eco**
BeagleBone® Green Eco is built around Texas Instruments' AM335x ARM Cortex-A8 processor, providing a robust foundation for diverse embedded applications. Below is the functional block diagram illustrating the primary components and interconnections that make up the hardware architecture of the board. This diagram shows how the AM335x SoC interfaces with memory, storage, peripherals, and various I/O options.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Functional-Block-Diagram.png" /></div>

**Processor**
BeagleBone® Green Eco integrates the Texas Instruments AM335x 1GHz ARM® Cortex-A8 processor that combines computational processing, graphics acceleration, and real-time control functionality within a single SoC. The architecture implements ARMv7-A with NEON™ SIMD engine and VFPv3 floating-point unit for efficient execution of complex computational tasks, while maintaining power efficiency for embedded applications.
A distinctive feature is the Programmable Real-time Unit Subsystem and Industrial Communication Subsystem (PRU-ICSS), comprising dual 32-bit RISC cores operating independently from the main ARM processor. These PRUs enable deterministic real-time control with sub-microsecond response times and implementation of specialized industrial communication protocols. The AM335x supports high-level operating systems including Linux and real-time operating systems through TI's Processor SDK and development environments.

- AM335x 1GHz ARM® Cortex-A8 processor, 15.0mm x 15.0mm, NFBGA (324)
- NEON™ SIMD coprocessor and VFPv3 floating-point unit for accelerated media and signal processing
- PowerVR SGX™ Graphics Accelerator supporting OpenGL ES 2.0
- Dual 32-bit PRU-ICSS for real-time industrial communications and control
- Support for industrial interfaces including EtherCAT, PROFINET, and PROFIBUS

**Memory and Storage**
BeagleBone® Green Eco includes:

- 1x 512MB (4Gb) DDR3L RAM (Kingston D2516ECMDXGJDI-U) with 16-bit interface
- 1x 16GB eMMC onboard flash storage (Kingston EMMC16G-WW28) with MMC1 8-bit interface
- 1x 32Kbit EEPROM (FMD FT24C32A-ELRT) connected via I2C0
- MicroSD card slot with MMC0 4-bit interface for expandable storage

**Interfaces and Peripherals**
BeagleBone® Green Eco supports:

- Gigabit Ethernet connectivity
- 1x USB 2.0 Type-C port for power and communications
- 1x USB 2.0 Host Interface, Type-A

**Expansion Connectors/Headers to Support Application Specific Capes**

- 2x 46-pins headers
- 1x 6-pins UART0 headers
- Two Grove connectors (One I2C and One UART) for easy connection to the Grove ecosystem of sensors and actuators

**Header Pin Definition**

Each digital I/O pin has 8 different modes that can be selected, including GPIO.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1.png" /></div>

**65 Possible Digital I/Os**

:::note
    In GPIO mode, each digital I/O can produce interrupts.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/2.png" /></div>

**PWMs and Timers**

:::note
Up to 8 digital I/O pins can be configured with pulse-width modulators (PWM) to produce signals to control motors or create pseudo analog voltage levels, without taking up any extra CPU cycles.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/3.png" /></div>

**Analog Inputs**

:::note
Make sure you don't input more than 1.8V to the analog input pins. This is a single 12-bit analog-to-digital converter with 8 channels, 7 of which are made available on the headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/4.png" /></div>

**UART**

:::note
There is a dedicated header for getting to the UART0 pins and connecting a debug cable. Five additional serial ports are brought to the expansion headers, but one of them only has a single direction brought to the headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/5.png" /></div>

**I2C**

:::note
The first I2C bus is utilized for reading EEPROMS on cape add-on boards and can't be used for other digital I/O operations without interfering with that function, but you can still use it to add other I2C devices at available addresses. The second I2C bus is available for you to configure and use.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/6.png" /></div>

**SPI**

:::note
    For shifting out data fast, you might consider using one of the SPI ports.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/7.png" /></div>

## Getting Started

:::note
This chapter is writing under Win10. The steps are familiar for the other operate systems.
:::

**STEP1. Plug in your Seeed Studio BeagleBone® Green via USB**

Use the provided micro USB cable to plug your Seeed Studio BeagleBone® Green into your computer. This will both power the board and provide a development interface. Seeed Studio BeagleBone® Green will boot Linux from the on-board 2GB or 4GB eMMC.

Seeed Studio BeagleBone® Green will operate as a flash drive providing you with a local copy of the documentation and drivers. Note that this interface may not be used to re-configure the microSD card with a new image, but may be used to update the boot parameters using the uEnv.txt file.

You'll see the PWR LED lit steadily. Within 10 seconds, you should see the other LEDs blinking in their default configurations.

- D2 is configured at boot to blink in a heartbeat pattern
- D3 is configured at boot to light during microSD card accesses
- D4 is configured at boot to light during CPU activity
- D5 is configured at boot to light during eMMC accesses

**STEP2. Install Drivers**

Install the drivers for your operating system to give you network-over-USB access to your Beagle. Additional drivers give you serial access to your board.

|Operating System | USB Drivers | Comments |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Install both sets of drivers.|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|Driver installation isn't required, but you might find a few udev rules helpful.|

:::note
    For Windows system, please note that:

- Windows Driver Certification warning may pop up two or three times. Click "Ignore", "Install" or "Run"
- To check if you're running 32 or 64-bit Windows see [this](https://support.microsoft.com/kb/827218).
- On systems without the latest service release, you may get an error (0xc000007b). In that case, please [install](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) and retry:
- You may need to reboot Windows.
- These drivers have been tested to work up to Windows 10

:::

:::note
Additional FTDI USB to serial/JTAG information and drivers are available from [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).
:::

:::note
Additional USB to virtual Ethernet information and drivers are available from [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) and [https://joshuawise.com/horndis](https://joshuawise.com/horndis).
:::

**STEP3. Browse to your Beagle**

Using either Chrome or Firefox (Internet Explorer will NOT work), browse to the web server running on your board. It will load a presentation showing you the capabilities of the board. Use the arrow keys on your keyboard to navigate the presentation.

Click [http://192.168.7.2](http://192.168.7.2) to launch to your Seeed Studio BeagleBone® Green.
Older software images require you to EJECT the BeagleBone® drive to start the network. With the latest software image, that step is no longer required.

[![Click to view larger image](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**STEP4. Cloud9 IDE**

To begin editing programs that live on your board, you can use the Cloud9 IDE by click

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## Update to latest software

You need to update the board to latest software to keep a better performance, here we will show you how to make it step by step.

**STEP1. Download the latest software image**

First of all, you have to download the suitable image here.

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://www.beagleboard.org/distros/beaglebone-black-debian-12-11-2025-08-07-iot-vscode-v6-12-x)

:::note
Due to sizing necessities, this download may take about 30 minutes or more.
:::

The file you download will have an **.img.xz** extension. This is a compressed sector-by-sector image of the SD card.

**STEP2. Install compression utility and decompress the image**

Download and install [7-zip.](http://www.7-zip.org/download.html)

:::note
    Choose a version that suitable for your system.
:::

Use 7-zip to decompress the SD card **.img file**

**STEP3. Install SD card programming utility**

Download and install [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Be sure to download the binary distribution.

**STEP4. Write the image to your SD card**

You need a SD adapter to connect your microSD card to your computer at the first. Then use the software Image Write for Windows to write the decompressed image to your SD card.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

Click on **Write** button, then the process is started.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

- You may see a warning about damaging your device. This is fine to accept as long as you are pointing to your SD card for writing.
- You should not have your BeagleBone® connected to your computer at this time.
- This process may need up to 10 minutes.

:::

**STEP5. Boot your board off of the SD card**

Insert SD card into your (powered-down first) board. Then the board will boot from the SD card.

:::note
If you don't need to write the image to your on-board eMMC, you don't need to read the last of this chapter.  Otherwise please go ahead.
:::

If you desire to write the image to your on-board eMMC, you need to launch to the board, and modify a file.

In **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Change to:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Then you will find the 4 user led light as below

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
If you don't find the upper tracing light, please press the RESET button to reset the board.
:::

When the flashing is complete, all 4 USRx LEDs will be **off**. The latest Debian flasher images automatically power down the board upon completion. This can take up to **10 minutes**. Power-down your board, remove the SD card and apply power again to be complete.

## Grove for Seeed Studio BeagleBone® Green

Grove is a modular, standardized connecter prototyping system. Grove takes a building block approach to assembling electronics. Compared to the jumper or solder based system, it is easier to connect, experiment and build and simplifies the learning system, but not to the point where it becomes dumbed down.  Some of the other prototype systems out there takes the level down to building blocks.   Good stuff to be learned that way, but the Grove system allows you to build real systems.   It requires some learning and expertise to hook things up.

Below listed the Grove modules that work well with Seeed Studio BeagleBone® Green.

|SKU        |Name|Interface|link|
|-----------|-----|-----|----------|
|101020054  |Grove - 3-Axis Digital Accelerometer(+16g)     | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3-Axis Digital Accelerometer(+400g)    | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3-Axis Digital Compass                 | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3-Axis Digital Gyro                    | Analog| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - 6-Axis Accelerometer&Compass v2.0      | I2C| [link](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Barometer Sensor(BMP180)              | I2C| [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - Blue LED                               | I/O| [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Button                                 |I/O| [link](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Button(P)                             |I/O| [link](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Buzzer                                 |I/O| [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - Chainable RGB LED                     |I2C| [link](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Digital Light Sensor                 |I2C| [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Finger-clip Heart Rate Sensor         |I2C| [link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Finger-clip Heart Rate Sensor with shell |I2C|[link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [link](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - Green LED |I/O| [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [link](https://wiki.seeedstudio.com/Grove-I2C_ADC/)|
|103020006 |Grove - I2C Hub |I2C| [link](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [link](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [link](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - IR Distance Interrupter |I/O| [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - OLED Display 0.96'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - OLED Display 1.12'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - Red LED |I/O| [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - Relay |I/O| [link](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - Servo |I/O| [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - Sound Sensor |Analog| [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - Switch(P) |I/O| [link](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - Temperature Sensor |Analog| [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - Temperature&Humidity Sensor Pro |Analog| [link](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Cape for Seeed Studio BeagleBone® Green

You will need some expansion board when you start a project. There're many cape for Seeed Studio BeagleBone® Green already, they include LCD display, motor driver as well as HDMI expansion etc. Below is some of them recommend.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 Inch LCD|7 Inch LCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## References

There're many references to help you to get more information about the board.

- [BeagleBoard Main Page](https://beagleboard.org/)
- [BeagleBoard Getting Started](https://beagleboard.org/getting-started)
- [Troubleshooting](https://beagleboard.org/getting-started#troubleshooting)
- [Hardware documentation](https://beagleboard.org/getting-started#hardware)
- [Projects of BeagleBoard](https://beagleboard.org/project)
- [CE certification of Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-CE.pdf)
- [FCC certification of Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-FCC.pdf)

## Resources

- **[PDF]** [AM335X Datasheet](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
- **[PDF]** [Seeed Studio BeagleBone Green Eco Schematic](https://files.seeedstudio.com/products/102111198/res/BeagleBone%20Green%20Eco_V1.0_SCH_250814.pdf)
- **[PDF]** [Seeed Studio BeagleBone Green Eco Structure Reference](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.pdf)
- **[DXF]** [Seeed Studio BeagleBone Green Eco Structure Reference](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.dxf)


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
