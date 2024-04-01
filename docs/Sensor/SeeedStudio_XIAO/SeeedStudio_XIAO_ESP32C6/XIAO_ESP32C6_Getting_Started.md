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
  date: 03/29/2024
  author: Spencer
---

# Getting Started with Seeed Studio XIAO ESP32C6

<div class="table-center">
	<table align="center">
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

| **Product**                                            | XIAO ESP32C6                                                 | [XIAO ESP32C3 ](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) | [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) |
| :------------------------------------------------------------: | :------------------------------------------------------------: | :------------------------------------------------------------: | :------------------------------------------------------------: |
| Processor                                                    | Espressif ESP32-C6 SoC                                       | Espressif ESP32-C3 SoC                                       | Espressif ESP32-S3R8                                         |
| two 32-bit RISC-V processors, with the high-performance one running up to 160 MHz, and the low-power one clocking up to 20 MHz | RISC-V single-core 32-bit chip processor with a four-stage pipeline that operates at up to 160 MHz | Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz |                                                              |
| Wireless                                                     | Complete 2.4GHz **Wi-Fi 6** subsystem                  | Complete 2.4GHz Wi-Fi subsystem                              | Complete 2.4GHz Wi-Fi subsystem                              |
| Bluetooth 5.0/ Bluetooth mesh                                | BLE: Bluetooth 5.0, Bluetooth mesh                           | BLE: Bluetooth 5.0, Bluetooth mesh                           |                                                              |
| On-chip Memory                                               | **512KB SRAM & 4MB Flash**                             | **400KB SRAM & 4MB Flash**                             | **8M PSRAM & 8MB Flash**                               |
| Interface                                                    | 1x UART,1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI,11x GPIO(PWM), 7x ADC, 1xSDIO | 1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC                | 1x UART, 1x IIC, 1x IIS, 1x SPI,11x GPIO(PWM), **9x ADC, 1x User LED, 1x Charge LED** |
| 1x Reset button, 1x Boot button                              | 1x Reset button, 1x Boot button                              | 1x Reset button, 1x Boot button                              |                                                              |
| Dimensions                                                   | 21 x 17.5mm                                                  | 21 x 17.5mm                                                  | 21 x 17.5mm                                                  |
| Power                                                        | Input voltage (Type-C): 5VInput voltage (BAT): 4.2V          | Input voltage (Type-C): 5VInput voltage (BAT): 4.2V          | Input voltage (Type-C): 5VInput voltage (BAT): 4.2V          |
| Circuit operating Voltage (ready to operate):- USB:5V@**9mA**- BAT:3.8V@**9mA** | Circuit operating Voltage (ready to operate):- USB:5V@**9mA**- BAT:3.8V@**9mA** | Circuit operating Voltage (ready to operate):- Type-C: 5V@**19mA**- BAT: 3.8V@**22mA** |                                                              |
| Charging battery current: **350mA**                    | Charging battery current: **350mA**                    | Charging battery current: **100mA**                    |                                                              |
| Power Consumption Model(Supply Power: 3.8V)                  | Modem-sleep Model: **~ 30 mA**Light-sleep Model: **~ 2.5 mA**Deep Sleep Model: **~** **15** **μA** | Modem-sleep Model: **~ 24 mA**Light-sleep Model: **~ 3 mA**Deep Sleep Model: **~** **44 μA** | Modem-sleep Model: **~ 25 mA**Light-sleep Model: **~ 2mA**Deep Sleep Model: **~** **14 μA** |
| Working Temperature                                          | -40°C ~ 85°C                                                 | -40°C ~ 85°C                                                 | -40°C ~ 65°C                                                 |


## Features

- **Enhanced Connectivity:** Combines4 GHz Wi-Fi 6 (802.11ax), Bluetooth 5(LE), and IEEE 802.15.4 radio connectivity, ending you to apply the Thread and Zigbee protocols.
- **Matter Native**: Supports building Matter-compliant smart home projects thanks to its enhanced connectivity, achieving interoperability 
- **Security Encrypted on Chip**: Powered by ESP32-C6, it brings enhanced encrypted on chip security to your smart home projects via secure boot, encryption, and Trusted Execution Environment (TEE)
- **Outstanding RF performance:** Has an on-board antenna with up to 80m BLE/Wi-Fi range, while reserving an interface for external UFL antenna
- **Leveraging Power Consumption:** Comes with4 working modes as low as 15 μA in the deep sleep mode, while supporting lithium battery charge management
- **Dual RISC-V Processors:** Incorporates two 32-bit RISC-V processors, with the high performance processor running up to 160 MHz, and the low-power processor clocking up to 20
- **Classic XIAO Designs:** Remains the classic XIAO designs of the thumb-size form factor of 21 x 17.5mm, and single-sided mount, making it perfect for space-limited projects such as wearables


## Hardware overview

<table align="center">
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
:::


- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

:::caution Attention
The on-board package for XIAO ESP32C6 requires at least version **2.0.8** to be available.
:::

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Step 2.** Launch the Arduino application.

:::info
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32C6 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32C6 on-board package to the Arduino directory to use it.

if you've install the ESP32 board package before, you''ll need to remove it first. You can find the ESP32 package in the following directory:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/remove_package.png" style={{width:600, height:'auto'}}/></div>
:::

- **Step 3.**  Add the XIAO ESP32C6 on-board package to the Arduino IDE and click `OK`.

Firstly, Add the boards url to the Arduino IDE preferences:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width:480, height:'auto'}}/></div>

Secondly, Ddownload the XIAO ESP32C6 on-board package:

- [Download-> boards.txt](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/boards.txt) : **boards.txt**
- [Download-> XIAO ESP32C6 on-board package](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32C6.zip) : the **`XIAO_ESP32C6` folder**

Replace the `boards.txt` file and `package_esp32_index.json` to the following path:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Windows" label="Windows PC" default>
    
The default onboard package storage path for ESP32 in Windows is:

`C:\Users\username\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.0.0-alpha3`.

We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/arduino_boards.png" style={{width:600, height:'auto'}}/></div> -->

`C:\Users\username\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.0.0-alpha3\variants`

Then go to the **variants folder** and copy the **XIAO_ESP32C6 folder** to it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants_board.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_variants.png" style={{width:480, height:'auto'}}/></div>

</TabItem>

<TabItem value="MacOS" label="MacOS PC">
The default onboard package storage path for ESP32 in MacOS is:

`~/Library/Arduino15/packages/esp32/hardware/esp32/3.0.0-alpha3`

We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

`~/Library/Arduino15/packages/esp32/hardware/esp32/3.0.0-alpha3/variants`

Then go to the **variants folder** and copy the **XIAO_ESP32C6 folder** to it.

</TabItem>

</Tabs>

- **Step 4.** Close the Arduino IDE and reopen it.

## Run your first Blink program

- **Step 1.** Launch the Arduino application.

- **Step 2.** Navigate to **File > Examples > 01.Basics > Blink**, open the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select the board model to **XIAO ESP32C6**, and select the correct port number to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO ESP32C6 is blinking.

<table align="center">
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