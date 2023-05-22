---
description: Getting Started with Seeed Studio XIAO ESP32S3.
title: Getting Started with Seeed Studio XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_getting_started
last_update:
  date: 03/23/2023
  author: MengDu
---

# Getting Started with Seeed Studio XIAO ESP32S3 (Sense)

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Introduction

Seeed Studio XIAO Series are diminutive development boards, sharing a similar hardware structure, where the size is literally thumb-sized. The code name "XIAO" here represents its half feature "Tiny", and the other half will be "Puissant".
Seeed Studio XIAO ESP32S3 Sense integrates camera sensor, digital microphone and SD card supporting. Combining embedded ML computing power and photography capability, this development board can be your great tool to get started with intelligent voice and vision AI.

### Specification

<table align="center">
	<tr>
	    <th>Item</th>
	    <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <th>Processor</th>
	    <td align="center" colspan="2">ESP32-S3R8 <br></br> Xtensa LX7 dual-core, 32-bit processor that operates at up to 240 MHz </td>
	</tr>
	<tr>
	    <th>Wireless</th>
	    <td align="center" colspan="2">Complete 2.4GHz Wi-Fi subsystem <br></br> BLE: Bluetooth 5.0, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>Built-in Sensors</th>
	    <td align="center"> - </td>
        <td align="center">OV2640 camera sensor for 1600*1200 <br></br> Digital microphone</td>
	</tr>
    <tr>
	    <th>Memory</th>
	    <td align="center">On-chip 8M PSRAM & 8MB Flash</td>
        <td align="center">On-chip 8M PSRAM & 8MB Flash <br></br> Onboard SD Card Slot, supporting 32GB FAT</td>
	</tr>
    <tr>
	    <th>Interface</th>
	    <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED  <br></br> 1x Reset button, 1x Boot button</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x B2B Connector (with 2 additional GPIOs)  <br></br> 1x Reset button, 1x Boot button</td>
	</tr>
    <tr>
	    <th>Dimensions</th>
	    <td align="center">21 x 17.5mm</td>
        <td align="center">21 x 17.5 x 15mm (with expansion board)</td>
	</tr>
    <tr>
	    <th rowspan="5">Power</th>
	    <td colspan="2" align="center">Input voltage (Type-C): 5V <br></br> Input voltage (BAT): 4.2V</td>
	</tr>
    <tr>
	    <td>Circuit operating Voltage  (ready to operate): <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>Circuit operating Voltage  (ready to operate): <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong> (with expansion board)</td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td>Webcam Web application: <br></br> - Type-C: <br></br> - - Average power consumption: 5V/<strong>138mA</strong> <br></br> - - Photo moment: 5V/<strong>341mA</strong> <br></br> - Battery: <br></br> - - Average power consumption: 3.8V/<strong>154mA</strong> <br></br> - - Photo moment: 3.8V/<strong>304mA</strong></td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td>Microphone recording & SD card writing:  <br></br> - Type-C: <br></br> - - Average power consumption: 5V/<strong>46.5mA</strong> <br></br> - - Peak power consumption: 5V/<strong>89.6mA</strong> <br></br> - Battery: <br></br> - - Average power consumption: 3.8V/<strong>54.4mA</strong> <br></br> - - Peak power consumption: 3.8V/<strong>108mA</strong></td>
	</tr>
    <tr>
	    <td align="center">Charging battery current: <strong>50mA</strong></td>
		<td align="center">Charging battery current: <strong>100mA</strong></td>
	</tr>
    <tr>
        <th>Low Power Consumption Model</th>
        <td>Modem-sleep Model: <strong>3.8V/25 mA</strong> <br></br> Light-sleep Model: <strong>3.8V/2 mA</strong> <br></br> Deep Sleep Model: <strong>3.8V/14 μA</strong></td>
        <td>Without any peripherals: <br></br> - Modem-sleep Model: <strong>3.8V/25.5 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/2.4 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/63.768 μA</strong> <br></br> Connect the camera: <br></br> - Modem-sleep Model: <strong>3.8V/44.57 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/5.47 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/3.00 mA</strong> <br></br> Connecting an SD Card: <br></br> - Modem-sleep Model: <strong>3.8V/32.8 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/3.48 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/1.08 mA</strong><br></br> Simultaneously connect the camera and the SD card: <br></br> - Modem-sleep Model: <strong>3.8V/55.72 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/6.56 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/3.98 mA</strong></td>
    </tr>
    <tr>
        <th>Wi-Fi Enabled Power Consumption</th>
        <td align="center">Active Model: <strong>~ 100 mA</strong></td>
        <td align="center">Active Model: <strong>~ 110 mA</strong> (with expansion board)</td>
    </tr>
    <tr>
        <th>BLE Enabled Power Consumption</th>
        <td align="center">Active Model: <strong>~ 85 mA</strong></td>
        <td align="center">Active Model: <strong>~ 102 mA</strong> (with expansion board)</td>
    </tr> 
    <tr>
        <th>Working Temperature</th>
        <td colspan="2" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### Features

- **Powerful MCU Board**: Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor chip operating up to 240 MHz, mounted multiple development ports, Arduino / MicroPython supported
- **Advanced Functionality** (for Sense): Detachable OV2640 camera sensor for 1600*1200 resolution, compatible with OV5640 camera sensor, intergating additional digital microphone
- **Elaborate Power Design**: Lithium battery charge management capability, offer 4 power consumption model which allows for deep sleep mode with power consumption as low as 14μA
- **Great Memory for more Possibilities**: Offer 8MB PSRAM and 8MB FLASH, supporting SD card slot for external 32GB FAT memory 
- **Outstanding RF performance**: Support 2.4GHz Wi-Fi and BLE dual wireless communication, support 100m+ remote communication when connected with U.FL antenna
- **Thumb-sized Compact Design**: 21 x 17.5mm, adopting the classic form factor of XIAO, suitable for space limited projects like wearable devices

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Seeed Studio XIAO ESP32S3.

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense front indication diagram</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/1.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense back indication diagram</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/3.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Pin List</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V - This is 5v out from the USB port. You can also use this as a voltage input but you must have some sort of diode (schottky, signal, power) between your external power source and this pin with anode to battery, cathode to 5V pin.

- 3V3 - This is the regulated output from the onboard regulator. You can draw 700mA

- GND - Power/data/signal ground

## Getting Started

To enable you to get started with the XIAO ESP32S3 faster, please read the hardware and software preparation below to prepare the XIAO.

### Factory procedure

We pre-program each new XIAO ESP32S3 and XIAO ESP32S3 Sense with a simple factory program.

1. **XIAO ESP32S3**

The factory program preset in the regular version is the touch pin light-up program. When you power up the XIAO, touch some of its pins and the orange user indicator will light up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

The XIAO ESP32S3 Sense is shipped with the WebCam sample program pre-installed. You can use this program by giving the XIAO a good antenna installation and powering it up. For details, you can read the Wiki about this program.

- [Video Streaming](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### Hardware Preparation

#### Solder header

XIAO ESP32S3 is shipped without pin headers by default, you need to prepare your own pin headers and solder it to the corresponding pins of XIAO so that you can connect to the expansion board or sensor.

Due to the miniature size of XIAO ESP32S3, please be careful when soldering headers, do not stick different pins together, and do not stick solder to the shield or other components. Otherwise, it may cause XIAO to short circuit or not work properly, and the consequences caused by this will be borne by the user.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### Installation of antenna

On the bottom left of the front of XIAO ESP32S3, there is a separate "WiFi/BT Antenna Connector". In order to get better WiFi/Bluetooth signal, you need to take out the antenna inside the package and install it on the connector.

There is a little trick to the installation of the antenna, if you press down hard on it directly, you will find it very difficult to press and your fingers will hurt! The correct way to install the antenna is to put one side of the antenna connector into the connector block first, then press down a little on the other side, and the antenna will be installed.

Remove the antenna is also the case, do not use brute force to pull the antenna directly, one side of the force to lift, the antenna is easy to take off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### Installation of expansion boards (for Sense)

If you are shopping for the XIAO ESP32S3 Sense, then you should also include an expansion board. This expansion board has a 1600*1200 OV2640 camera sensor, Onboard SD Card Slot and digital microphone.

By installing the expansion board with XIAO ESP32S3 Sense, you can use the functions on the expansion board.

Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Software Preparation

The recommended programming tool for the XIAO ESP32S3 is the Arduino IDE, so as part of the software preparation, you will need to complete the Arduino installation.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

- **Step 2.** Launch the Arduino application.

- **Step 3.** Add ESP32 board package to your Arduino IDE.

    Navigate to **File > Preferences**, and fill **"Additional Boards Manager URLs"** with the url below:
    *<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

    Navigate to **Tools > Board > Boards Manager...**, type the keyword **esp32** in the search box, select the latest version of **esp32**, and install it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
The on-board package for XIAO ESP32S3 requires at least version **2.0.8** to be available.
:::

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.


- **Step 4.** Close the Arduino IDE and reopen it.-->

- **Step 4.** Select your board and port.

On top of the Arduino IDE, you can select the port directly. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports).

Also, search for **xiao** in the development board on the left. select **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

With this preparation, you can start writing programs for XIAO ESP32S3 to compile and upload.

### BootLoader Mode

There are times when we use the wrong program to make XIAO appear to lose ports or not work properly. The specific performance is:

- Connected to computer, but no port number found for XIAO.

- The computer is connected and the port number appears, but the upload program fails.

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:

- **Step 1**. Press and hold the BOOT button on the XIAO ESP32S3 without releasing it.

- **Step 2**. Keep the BOOT button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer.

- **Step 3**. Upload the **Blink** program to check the operation of the XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>


### Reset

When the program runs abnormally, you can press Reset once during power-up to let XIAO re-execute the uploaded program.

When you press and hold the BOOT key while powering up and then press the Reset key once, you can also enter BootLoader mode.

## Run your first Blink program

By now, I believe you have a good understanding of the features and hardware of the XIAO ESP32S3. Next, let's take the simplest Blink program as an example and perform the first blink for your XIAO ESP32S3!

- **Step 1.** Launch the Arduino application.

- **Step 2.** Navigate to **File > Examples > 01.Basics > Blink**, open the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select the board model to **XIAO ESP32S3**, and select the correct port number to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO ESP32S3 is blinking.

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

Congratulations, you've learned how to write and upload programs for the XIAO ESP32S3!

:::note
The LED will only turn off when the user LED pin on the XIAO ESP32S3 is set to a high level, and it will only turn on when the pin is set to a low level.
:::

## Battery Usage

The XIAO ESP32S3 series has a built-in power management chip that allows the XIAO ESP32S3 to be powered independently by using a battery or to charge the battery through the XIAO ESP32S3's USB port.

If you want to connect the battery for XIAO, we recommend you to purchase qualified rechargeable 3.7V lithium battery. When soldering the battery, please be careful to distinguish between the positive and negative terminals. The negative terminal of the power supply should be the side closest to the USB port, and the positive terminal of the power supply is the side away from the USB port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
Since all GPIO pins of the XIAO ESP32S3 are assigned their own functions, we do not have a GPIO configured for the battery pin. this means that we cannot get the battery voltage at the software level by reading the analog value of one of the GPIOs. If necessary, you can consider connecting the positive and negative terminals of the battery to two of the pins to measure the battery voltage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
When you use battery power, there will be no voltage on the 5V pin.
:::

At the same time, we designed a red indicator light for battery charging, through the indicator light display to inform the user of the current state of the battery in the charge.

1. When XIAO ESP32S3 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

We understand that some users are looking to flash UF2 files directly to XIAO, which will enable the process of batch flashing programs. Here we will describe this method.

:::note
Currently this method can only be used on Windows systems.
:::

**Step 1**. Download the required script zip. And extract it to your local machine.

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Step 2**. Converting BIN files into UF2 files.

Once you have compiled and saved an Arduino program, you can export the binary file BIN file directly. This file will then be generated in your Arduino project folder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

At this point, all you need to do is copy this BIN file to the **xiaos3-bin2uf2** directory that you just extracted in the first step, and then execute the **convert_uf2.bat** script to generate a UF2 file directly.

**Step 3**. Put the XIAO into UF2 BootLoader mode.

Then please connect the XIAO to the computer and then run the **boot_uf2.bat** script again, the XIAO will appear in the computer as a USB stick, which means it has successfully entered the UF2 BootLoader mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Step 4**. Copy the UF2 file to XIAO ESP32S3.

Next you can access the XIAO ESP32S3's USB stick and copy the converted UF2 to the USB stick. Once the copying is complete, the XIAO USB stick will automatically disappear and the program will start to execute.

:::tip
1. Please ensure that your program is compiled and executed without problems, otherwise the UF2 program may not run as expected.
2. The sample UF2 file for Blink is provided in the **xiaos3-bin2uf2** folder. When this program is uploaded, the orange LED on the XIAO ESP32S3 will flash and you can use this UF2 file as a test.
:::

**Step 5**. Enter the UF2 BootLoader again.

Once you have performed the above steps and you still want the XIAO ESP32S3 to access the UF2 BootLoader to upload other UF2 files, you need to quickly press the **Reset** button first and then the **Boot** button afterwards. And there is no need to execute the boot_uf2.bat script again.

:::note
Press Reset then Boot, and be quick!
:::

## Troubleshooting

### Q1: What should I do if the upload program fails/the program runs abnormally/the device port is not found?

If you encounter the above problem, it is recommended that you first try pressing the reset button on the XIAO ESP32S3 to try to get the program running again. If the problem persists, please recheck your program and read the methods provided in **[BootLoader Mode](#bootloader-mode)** to restore the device.

### Q2: Why does my XIAO have the problem of not being flush at the rounded corners? Is this a quality problem?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

First of all, it should be noted that this is not a quality issue and will not affect the normal function of XIAO.

XIAO ESP32S3 is the most complex one in all XIAO because of its high integration, and the PCB needs to be put together in factory production. Due to the high level of integration, the splicing board connection can only be placed at the four rounded corners, which will lead to the problem of uneven rounded corners on the picture. We will try to improve the process to ensure that this problem will be solved in the subsequent production.

## Resources

[PDF] **[ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### For Seeed Studio XIAO ESP32S3

- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model]() -->

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Certification files]() -->

### For Seeed Studio XIAO ESP32S3 Sense

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model]() -->

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Certification files]() -->

### Other

- **[STP]** [XIAO ESP32S3 Sense housing design (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)

- **[STP]** [XIAO ESP32S3 Sense housing design (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)


*The remaining open source material is being compiled, so stay tuned!*

## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/)

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>



