---
description: How To Flash The Default Firmware
title: How To Flash The Default Firmware
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_To_Flash_The_Default_Firmware
last_update:
  date: 5/16/2023
  author: Yvonne
---
# **How To Flash The Default Firmware**
The SenseCAP indicator has two MCUs, ESP32-S3 and RP2040. This tutorial provides detailed guide to help developer get onboard, and the first part is a toturial guide user flash the out-of-box factory default firmware, and help the early shipped devices updating to latest out-of-box firmware.
## **Preparation**
Get ready your Indicator and find a laptop, works on Windows/Mac/Linux.


<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>



## **Download Default Firmware**
SenseCAP Indicator's default shipping firmware is fully open source on both ESP32-S3 and RP2040.

**Source Code**
[ESP32-S3 Source Code, based on ESP IDF](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
[RP2040 Source Code, based on Arduino](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)


**Firmware**

[Click to download ESP32-S3 firmware](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
[Click to download RP2040 frimware](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)


## **Flash ESP32-S3 Firmware on Windows**



**Flash Download Tools** are used for programming or flashing firmware onto ESP8266 and ESP32 series of microcontrollers, which are widely used in the Internet of Things (IoT) applications. it provides a graphical user interface (GUI) for users to easily flash firmware onto the ESP microcontrollers. 

**Download:**
[Flash Download Tools (for Windows only)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

**Double-click** the .exe file to enter the main interface of the tool.

Selecting

**Chip Type**: ESP32-S3

**WorkMode**: Develop

**LoadMode**: UART


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

Then connect SenseCAP Indicator to your laptop with USB type-C cable.

In the SPI Download Tab and Click "..." 

and navigate to the firmware you just downloaded.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>


SPI Flash Configure

**SPI SPEED**: 40MHz

**SPI MODE**: DIO


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>


- **Step 6**: Download Panel Configure

**COM**:  Check the ports on your Device Manage, the USB-SERIAL is the correct one.
Here we chose **COM4**

**Baud**: 921600(recommended value）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>


Click Start Downloading

Then click "START" to start the flashing.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

When it shows "FINISH", the firmware flashing has been completed.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>





**Note**: 
In the above guide, the binary file merged there bins into one, which name is *Default_Factory_Firmware_ESP32-S3.bin*

but, when you use IDF build firmware, you will get there binary files, you have to write the correct address(you can put your own address) on the right side
- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x8000**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>



## **Flash ESP32-S3 Frimware using Espressif IDF**


**Espressif IDF**

IDF is a software development framework provided by Espressif Systems for the development of applications and firmware for their ESP32 and ESP8266 series of microcontrollers,it provides a comprehensive set of libraries, tools, and documentation that enable developers to build applications and firmware for ESP32 and ESP8266 microcontrollers. It includes libraries for communication protocols such as Wi-Fi, Bluetooth, and Ethernet, as well as drivers for various peripherals like sensors, displays, and motors.

**Download and install:**
For Windows: [Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/windows-setup.html)

For MacOS and Linux: [Standard Toolchain Setup for Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/linux-macos-setup.html)


There is "Default_Factory_Firmware_ESP32-S3.bin" firmware in the [Release](https://github.com/Seeed-Solution/sensecap_indicator_esp32/releases/tag/v1.0.0) .

**Note**:

SenseCAP ESP32 SDK uses the 120 MHz frequency , if you flash this default firmware, please add a [patch](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch).

This patch is intended to achieve the best performance of RGB LCD by using the PSRAM Octal 120 MHz feature, and it's only used for the release/v5.0 branch of ESP-IDF.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/patch.png"/></div>


Run the following command to build and flash the project:

```
cd  <your sdk path>/examples/factory/
esptool.py write_flash 0x0 default_factory_firmware_ESP32-S3.bin
```

Or the following command to build, flash and monitor the project:

```
cd  <your sdk path>/examples/default_factory_firmware/
idf.py -p PORT build flash monitor
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>




## **RP2040 Firmware Flashing**

### **Flash the .uf2 file**
- **Step 1**: Connect the device to your PC

Long press this internal button using a needle, then connect the device to your PC by the provided USB type-C cable, release the button once connected.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **Step 2**: Firmware Flash

After the connection is successful, your PC will show a disk.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

Copy the [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) file to the disk, then the disk will log out.

The upgrade will run automatically.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

### **Flash by Arduino IDE**


#### **RP2040 Development Tool**

Arduino IDE is an open-source software development environment used for programming Arduino boards, which are microcontroller-based development boards that can be used for building various electronic projects. It provides an easy-to-use graphical user interface (GUI) that allows developers to write, compile, and upload code to the Arduino board. It is based on a simplified version of the C++ programming language and provides a set of libraries and examples that make it easier for beginners to get started with programming Arduino boards.

**Download:**
[Arduino IDE](https://www.arduino.cc/en/software)


- **Step 1**: Install Arduino IDE

[Arduino IDE](https://www.arduino.cc/en/software)

- **Step 2**: Add the Raspberry Pi Pico Board

Open your Arduino IDE, click on **Arduino IDE** > **Reference**, and copy the below URL to **Additional Boards Manager URLs**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package\_rp2040\_index.json`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png"/></div>


Click on **Tools** > **Board** > **Board Manager**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

Search "indicator" and install "Raspberry Pi Pico/RP2040" in the Boards Manager

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **Step 3**: Add Libraries

Libraries for reference：

[Serial communication protocol](https://github.com/bakercp/PacketSerial)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

[AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

Navigate to **Sketch** -> **Include Library** -> **Add .ZIP Library**, then select the libraries you download.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

- **Step 4**: Connect the device to your PC with the provided USB Typc-C cable.

- **Step 5**: Select the board and port


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png"/></div>

Search "Indicator" and select "Seeed INDICATOR RP2040"board;

Select the "usbmodem" Serial Port.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png"/></div>




- **Step 6**: Open the example code file

**File** > **Open**, then select the example code file ([.ino file](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)).

We provide an example code file, you can modify the code according to your needs.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Step 7**: Verify and Upload the file.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"/></div>




## **ESP32 & RP2040 Communication Protocol**
ESP32 and RP2040 use serial port communication, using the [cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf) communication protocol. The list of commands used in the demo is as follows:

The command format consists of the packet type and packet parameters.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## **Resource**



[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## **FAQ**
**How to distinguish the serial port？**

**For Windows:**

Check the port on your Device Manage

"USB串行设备" is for RP2040
"USB-SERIAL" is for ESP32

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>

**For Mac:**

"/dev/cu.usbmodem" is for RP2040

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>


# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
if you have large order requirment, please contact iot@seeed.cc