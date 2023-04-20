---
description: XIAO Round Dislay Basic Tutorial
title: Getting Started with Seeed Studio Round Display for XIAO
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
last_update:
  date: 03/017/2023
  author: MengDu
---

# Getting Started with Seeed Studio Round Display for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Introduction

Seeed Studio Round Display for XIAO is an expansion board compatible with all XIAO development boards. It features a fully covered touch screen on one side, designed as a 39mm disc. It contains onboard RTC, charge chip, TF card slot within its compact size, perfect for interactive displays in smart home, wearables and more.

### Specification

<table align="center">
	<tr>
	    <th>Item</th>
	    <th>Detail</th>
	</tr>
	<tr>
	    <th>Power Supply</th>
	    <td>USB Type-C: 5V @35 mA <br></br> Battery Charge: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>Charge current</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>Expandable memory</th>
	    <td>TF Card Slot for up to 32GB FAT</td>
	</tr>
  <tr>
	    <th>Screen</th>
	    <td>1.28-inch touch screen <br></br> 240×240 resolution <br></br> 65K colors</td>
	</tr>
  <tr>
	    <th>Other External Equipment</th>
	    <td>JST 1.25 connector</td>
	</tr>
  <tr>
	    <th>Dimension</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>


### Features

- **Capacitive Touch Screen Expansion Board**: Display with 1.28-inch round, 240×240 resolution, 65K colors, providing clear and colorful images exhibition
- **High Compatibility**: Highly compatible with all XIAO series products, easily integrated into your current projects
- **Rich Peripheral**: Feature onboard RTC, battery charge chip, TF card slot, JST 1.25 connector, all within its compact size
- **Watch-sized Design**: Come with 39 mm circular design, suitable for wearable and space-limited projects
- **Plug and Play**: All pins are led out, no soldering is needed


## Hardware Overview

Before we start, we can refer to the following pictures to understand the pin design of the Round Display to facilitate our understanding of the function of the Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

## Getting Started

### Hardware Preparation

If you want to take advantage of the full capabilities of the Round Display and have a great experience, we highly recommend that you purchase our XIAO series as the motherboard for the Round Display.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
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

The row of pins on the back of Round Display is designed for XIAO series. If you have XIAO on hand, you don't need to prepare any additional cables, just align the pins of XIAO and plug them directly into Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
Please note that when connecting the XIAO, **the Type-C connector of the XIAO should be facing the outside of the Round Display**. If you accidentally reversed polarity, don't worry too much, the Round Display has a power protection circuit that won't be easily damaged, but we don't recommend you to stay in the reverse connection for a long time.
:::

The recommended orientation for Round Display is: when you face Round Display, the XIAO's Type-C connector faces to the right, so that the on/off button of Round Display is in the lower left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### Software Preparation

To use the Round Display, we need to program the XIAO series. The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### Step 1. Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Step 2. Launch the Arduino application.

#### Step 3. Configure the Arduino IDE for the XIAO you are using.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

#### Step 4. Add the library of Round Display to Arduino.

First, you need to search and download the latest version **TFT_eSPI** and **LVGL** libraries in the Arduino IDE.

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/52.png" style={{width:1000, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/53.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

If you want to use the RTC function on the expansion board, then you also need to search and install the **I2C BM8563 RTC** library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>

:::tip
The **TFT_eSPI** library compatible with Round Display has been submitted for merge request, so when the next version is released, you can search and download **TFT_eSPI** in Arduino IDE to use it normally. Until then, if you need to use the **TFT_eSPI** library for Round Display, please download it from here.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Maxwelltoo/TFT_eSPI">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

If you have previously installed the **TFT_eSPI** library, please remove the original library and install the new one.
:::

Then, we also need to download and import the configuration library for Round Display.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

Then, you need to take the `lv_conf.h` file and cut it to the root directory of the Arduino library.

:::caution
Note that the `lv_conf.h` file here is from **Seeed_Arduino_RoundDisplay**, not from the **LVGL** library.
:::

On Windows, the root directory of the Arduino library is:

`C:\Users\${UserName}\Documents\Arduino\libraries`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:800, height:'auto'}}/></div>

#### Step 5. (Optional) Configure the usage environment

Round Display currently adapts two different library-based displays, one **TFT_eSPI** and the other **Arduino GFX**. On the nRF52840, the Arduino GFX will have significantly better performance.

:::note
If you need to use the **TFT_eSPI** library, then proceed to **step 5**. If you are using the Arduino GFX, then you can skip this step.

For the content of Round Display, our tutorial will focus on the use of **TFT_eSPI**.
:::

Please find the **TFT_eSPI** folder in the root directory of the Arduino library, and then modify the `User_Setup_Select.h` file in the **TFT_eSPI** directory.

`C:\Users\${UserName}\Documents\Arduino\libraries\TFT_eSPI\User_Setup_Select.h`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/55.png" style={{width:800, height:'auto'}}/></div>

If you want to use the **TFT_eSPI** library for display driving, you must **comment** out the line `#include <User_Setup.h>` and **uncomment** the line `#include <User_Setups/Setup66_Seeed_XIAO_RoundDisplay.h>` in the `User_Setup_Select.h` file.

<table align="center">
	<tr>
		<td rowspan="3"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/56.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/57.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


### Arduino Library Overview

As we can probably tell from the above tutorial, Round Display mainly uses **LVGL**, **TFT_eSPI** and **Arduino GFX** libraries. For the sake of space, we will introduce the use of **LVGL** and **TFT_eSPI** libraries separately with the example of drawing a dial.

- You can learn about the interface and use of the **TFT_eSPI** library by clicking **[here](https://www.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**.

- You can learn about the interface and use of the **LVGL** library by clicking **[here](https://www.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**.

- You can learn about the interface and use of the **Arduino GFX** library by clicking **[here](https://github.com/moononournation/Arduino_GFX)**.

## Light up your Round Display

Once the hardware and software are ready, we start uploading our first example program. This sample program can be used to check if the Round Display's RTC clock, SD card and touch functions are working properly.

You can find this sample program in the Arduino IDE under **File -> Examples -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

Just select the XIAO you are using and the port number where the XIAO is located, compile and upload it.

Make sure the Round Display switch is toggled to the ON position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

If the program runs smoothly, you will see the following effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
This sample program will test all the functional items of the expansion board, including the RTC function. If you do not have the I2C BM8563 RTC library installed, then an error may be reported, you can comment out the function `lv_hardware_test()`, then the functional detection of the SD card will also be turned off.
:::

## Troubleshooting

### Q1: Why doesn't the display show anything after I upload the program?

A: Please check that the Round Display switch is turned on. If you are using the XIAO ESP32C3, you may also need to press Reset after uploading the program to make it work.

### Q2: If I want to connect Seeed Studio XIAO ESP32S3 Sense to this extension screen, will there be a conflict with two TF card slots?

A: If you connect XIAO ESP32S3 Sense with this extension screen, the data transmission of the TF card will be applied in the Seeed Studio XIAO ESP32S3 Sense. Meanwhile, the TF card on the screen will not be used.

## Resources

- **[PDF]** [Charge IC datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO SCH](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO SCH&PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[stl]** [The 3D model diagram of the shell for Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)

## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

