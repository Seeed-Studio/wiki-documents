---
title: Getting Started with Seeed Studio XIAO ESP32C6
description: Getting Started with Seeed Studio XIAO ESP32C6.
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
keywords:
- XIAO
- ESP32C6
slug: /xiao_esp32c6_getting_started
toc_max_heading_level: 4
sidebar_position: 0
last_update:
  date: 04/02/2024
  author: Spencer
---

# Getting Started with Seeed Studio XIAO ESP32C6

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Introduction

Seeed Studio XIAO ESP32C6 is powered by the highly-integrated [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), built on **two 32-bit RISC-V processors**, with a high-performance (HP) processor with **running up to 160 MHz**, and a low-power (LP) 32-bit RISC-V processor, which can be clocked up to 20 MHz. There are **512KB SRAM and 4 MB Flash on the chip**, allowing for more programming space, and binging more possibilities to the IoT control scenarios. 

XIAO ESP32C6 is **Matter native thanks to its enhanced wireless connectivity**. The wireless stack supports **2.4 GHz WiFi 6, Bluetooth® 5.3, Zigbee, and Thread (802.15.4)**. As the first XIAO member compatible with Thread, it's a perfect fit for building Matter-compliant projects, thus achieving interoperability in smart-home.


## Specifications comparison
<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">Products</th>
            <th class="highlight-cell">XIAO ESP32C6</th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">Processor</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>Two 32-bit RISC-V processors, with the high-performance one running up to 160 MHz, and the low-power one clocking up to 20 MHz</td>
            <td>RISC-V single-core 32-bit chip processor with a four-stage pipeline that operates at up to 160 MHz</td>
            <td>Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">Wireless</th>
            <td>Complete 2.4GHz <strong>Wi-Fi 6</strong> subsystem</td>
            <td colspan="2">Complete 2.4GHz Wi-Fi subsystem</td>
        </tr>
        <tr>
            <td>Bluetooth 5.0/ Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
        </tr>
        <tr>
            <td><strong>Zigbee,Thread,IEEE 802.15.4</strong></td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1" >On-chip Memory</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2" >Interface</th>
            <td>1x UART,1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI,11x GPIO(PWM), 7x ADC, 1xSDIO</td>
            <td>1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC</td>
            <td>1x UART, 1x IIC, 1x IIS, 1x SPI,11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED</td>
        </tr>
        <tr>
            <td colspan="3">1x Reset button, 1x Boot button</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">Dimensions</th>
            <td colspan="3">21 x 17.5 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Power</th>
            <th colspan="1">Input voltage</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>Circuit operating Voltage (ready to operate)</th>
            <td colspan="2">USB:5V@9mA<br></br>BAT:3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>Charging battery current</th>
            <td colspan="2" >350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Power Consumption Model(Supply Power: 3.8V)</th>
            <th>Modem-sleep Model</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th> Light-sleep Model</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th> Deep Sleep Model</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">Working Temperature</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

## Features

- **Enhanced Connectivity**: Integrates ***2.4*** GHz Wi-Fi 6 (802.11ax), Bluetooth 5(LE), and IEEE 802.15.4 radio connectivity, allowing for the application of **Thread** and **Zigbee** protocols.
- **Matter Native**: Supports the building of Matter-compliant smart home projects, ensuring interoperability among different smart devices.
- **Security Encrypted on Chip**: Utilizes the ESP32-C6 to provide secure boot, encryption, and Trusted Execution Environment (TEE) features, enhancing the security of smart home projects.
- **Outstanding RF Performance**: Features an on-board antenna with up to *80m* BLE/Wi-Fi range and offers an interface for connecting an external UFL antenna, ensuring reliable connectivity.
- **Leveraging Power Consumption**: Offers four working modes, including a deep sleep mode with consumption as low as *15* μA, along with support for lithium battery charge management.
- **Dual RISC-V Processors**: Incorporates two 32-bit RISC-V processors, with the high-performance processor capable of running up to 160 MHz and the low-power processor up to *20 MHz*.
- **Classic XIAO Designs**: Maintains the thumb-size form factor of 21 x 17.5mm and single-sided mount design, ideal for space-limited projects like wearable devices.

## Hardware overview

<table>
	<tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 indication diagram</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 Sense Pin List</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

## Getting started

To enable you to get started with the XIAO ESP32C6 faster, please read the hardware and software preparation below to prepare the XIAO.

### Hardware setup

You need to prepare the following:

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x Computer
- 1 x USB Type-C cable

:::tip

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

### Software Preparation

The recommended programming tool for the XIAO ESP32C6 is the Arduino IDE, so you need to complete the Arduino installation as part of the software preparation.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

And the on-board package for XIAO ESP32C6 requires at least version **2.0.8** to be available.

:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Step 2.** Launch the Arduino application.
- **[Step 3](#add-board).**  Add the XIAO ESP32C6 on-board package to the Arduino IDE and click `OK.
- **Step 4.** Close the Arduino IDE and reopen it.

#### Add the XIAO-C6 Board {#add-board}

As of April 2, 2024, the most current stable release of Arduino-ESP32 is version `2.0.14`. Unfortunately, [this version does not support](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html#supported-soc-s) the **ESP32-C6** chipset, which means it also does not support the `XIAO ESP32-C6` board. To work with XIAO-C6, you'll need to utilize the development release of [the board manager URL](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide) provided below:

```
https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
```

<Tabs>
<TabItem value="remove" label="Remove Existing Boards">

if you've install the ESP32 board package before, you''ll need to remove it first.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/remove_package.png" style={{width: 640, height: 'auto'}}/></div>

</TabItem>
<TabItem value="install" label="Install New Boards" default>

To install the XIAO ESP32C6 board, follow these steps:

1. Add the above board manager URL to your Arduino IDE preferences.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Download the XIAO ESP32C6 board package.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 640, height: 'auto'}}/></div>

Additionally, the latest development release version (3.0.0-Alpha 3) was released on December 5, 2023. However, it does not contain our [committed PR](https://github.com/espressif/arduino-esp32/pull/9330). You will need to manually set it up using the following resources:

- [⬇️Download boards.txt](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/boards.txt) for XIAO-C6 board information.
- [⬇️Download the XIAO ESP32C6 board package](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32C6.zip) for the board variant information.

Replace the `boards.txt` and `XIAO_ESP32C6` folder in the following paths based on your operating system:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Windows" label="Windows" default>
    
For Windows, the default storage path for the ESP32 onboard package is:

`C:\Users\$USERNAME$\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.0.0-alpha3`

Copy the downloaded **boards.txt** file to the above path, replacing the existing one. Then, navigate to the **variants folder** and copy the **XIAO_ESP32C6 folder** into it.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants_board.png" style={{width: 480, height: 'auto'}}/></div>

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants.png" style={{width: 480, height: 'auto'}}/></div>

</TabItem>

<TabItem value="MacOS" label="MacOS">
For MacOS, the default storage path for the ESP32 onboard package is:

`~/Library/Arduino15/packages/esp32/hardware/esp32/3.0.0-alpha3`

Follow the same steps as for Windows: replace the existing **boards.txt** file with the one you downloaded and add the **XIAO_ESP32C6 folder** to the **variants folder**.

</TabItem>

</Tabs>

</TabItem>

</Tabs>



## Run your first Blink program

- **Step 1.** Launch the Arduino application.

- **Step 2.** Navigate to **File > Examples > 01.Basics > Blink**, open the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select the board model to **XIAO ESP32C6**, and select the correct port number to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO ESP32C6 is blinking.

<table>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>


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