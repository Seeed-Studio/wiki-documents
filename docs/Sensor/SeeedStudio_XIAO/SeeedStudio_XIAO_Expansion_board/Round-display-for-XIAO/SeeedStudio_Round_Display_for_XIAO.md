---
description: XIAO Round Dislay Basic Tutorial
title: Getting Started with Seeed Studio Round Display for XIAO
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
last_update:
  date: 07/11/2024
  author: Spencer
---

# Getting Started with Seeed Studio Round Display for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

Seeed Studio Round Display for XIAO is an expansion board compatible with all XIAO development boards. It features a fully covered touch screen on one side, designed as a 39mm disc. It contains onboard RTC, charge chip, TF card slot within its compact size, perfect for interactive displays in smart home, wearables and more.

<table align="center">
 <tr>
  <th>REV</th>
  <th>Description</th>
  <th>DATE</th>
  <th>BY</th>
 </tr>
 <tr>
  <td>v1.0</td>
  <td>Initial Version</td>
  <td>2023/1/29</td>
  <td>Linus.Liao</td>
 </tr>
 <tr>
  <td>v1.1</td>
  <td>1.Change Li Battery Charge IC<br />2.Add a switch to A0 and D6</td>
  <td>2023/4/7</td>
  <td>Linus.Liao</td>
 </tr>
</table>

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

Since April 7, 2023, the revamped Round Display adds a 2-bit Switch to control the screen backlight and battery voltage readout. For the user to freely choose whether to use the pin or release it. Click [here](https://wiki.seeedstudio.com/seeedstudio_round_display_usage/#ke-button--gpio) to read more details.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## Getting Started

### Hardware Preparation

If you want to take advantage of the full capabilities of the Round Display and have a great experience, we highly recommend that you purchase our XIAO series as the motherboard for the Round Display.

:::tip
XIAO SAMD21,RP2040 and RA4M1 may **not** be compatible with circular screens due to insufficient memory.
:::

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
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

#### Step 1. Download and Install the stable version of Arduino IDE according to your operating system

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Step 2. Launch the Arduino application

#### Step 3. Configure the Arduino IDE for the XIAO you are using

- If you want to use **Seeed Studio XIAO RP2350** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/getting-started-xiao-rp2350/)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C6** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

#### Step 4. Installation of graphics libraries and screen driver libraries

To use round display, we need to install two libraries in advance. One is the round display device driver library, which is used to drive the screen and touch functions of the device. The other is the graphics display library, which provides some very common interfaces for drawing graphics.

1. Download the **Seeed_Arduino_RoundDisplay** library from GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Download the **Seeed_GFX** library from GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Install the library by adding the ZIP file in Arduino IDE. Go to **Sketch > Include Library > Add .ZIP Library** and select the downloaded ZIP file.

:::note
If you have previously installed the TFT_eSPI library, you may need to temporarily remove or rename it from your Arduino libraries folder to avoid conflicts, as Seeed_GFX is a fork of TFT_eSPI with additional features.
:::

### Arduino Library Overview

As we can probably tell from the above tutorial, Round Display mainly uses **LVGL**, **TFT_eSPI** and **Arduino GFX** libraries. For the sake of space, we will introduce the use of **LVGL** and **TFT_eSPI** libraries separately with the example of drawing a dial.

- You can learn about the interface and use of the **TFT_eSPI** library by clicking **[here](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**.

- You can learn about the interface and use of the **LVGL** library by clicking **[here](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**.

- You can learn about the interface and use of the **Arduino GFX** library by clicking **[here](https://github.com/moononournation/Arduino_GFX)**.

## Light up your Round Display

### Demo 1: Arduino Life - How to use Seeed_GFX library on round display

Open the example sketch from the Seeed_GFX library: **[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

Create a new file named `driver.h` in the same folder as your Arduino sketch by clicking on the arrow next to the example tab and selecting "New Tab".

Name the new file as `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Go to the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), and select "TRMNL 7.5" (OG) DIY Kit" as shown in the image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

Copy the generated code and paste it into the `driver.h` file you created. The code should look like this:

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

Now you can upload the example to your TRMNL DIY Kit and see the ePaper display in action!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Note that the code for all subsequent screens needs to be accompanied by a driver.h file, which is used to select the type of screen to use.
:::

### Demo 2: TFT Clock

:::caution
Please refer to Demo1, create a new `driver.h` file in the same directory as the `.ino` file, and keep the following code on it: `#define BOARD_SCREEN_COMBO 501`
:::

:::tip
We need to use the RTC function on the round display, so you also need to search and install the **I2C BM8563 RTC** library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Once the hardware and software are ready, we start uploading our first example program. This sample program can be used to check if the Round Display's RTC clock are working properly. Because this demo requires a small amount of memory, suitable for all XIAO models.

:::tip
If you want to modify this demo to implement more complex displays, please be mindful of the memory size of the XIAO you are using. The specific size can be found on the introduction page of that XIAO.
:::

You can find this sample program in the Arduino IDE under **File -> Examples -> Seeed Arduino Round display -> TFT_Clock**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

Just select the XIAO you are using and the port number where the XIAO is located, compile and upload it.

Make sure the Round Display switch is toggled to the ON position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

If the program runs smoothly, you will see the following effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### Demo 3: Hareware Test

:::caution
Please refer to Demo1, create a new `driver.h` file in the same directory as the `.ino` file, and keep the following code on it: `#define BOARD_SCREEN_COMBO 501`
:::

Because the HardwareTest demo is a bit complex and occupies a larger amount of memory, some XIAO models may fail to run successfully due to insufficient memory. We have created a test table for your reference, using TFT library and Arduino GFX library.

|         | TFT library | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

This sample program can be used to check if the Round Display's RTC clock, SD card and touch functions are working properly.

:::tip
We need to use the RTC function on the round display, so you also need to search and install the **I2C BM8563 RTC** library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

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

## Calibration Firmware Update

:::tip
If you find that the touch is sometimes unresponsive, you can follow the steps below to update the calibration firmware for the screen.
:::

1. Download codes from this [link](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. Put them in the same directory and run this firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. Open serial monitor and you will see successful message like this image below, which means update successfully and you can upload your program to try it!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## Troubleshooting

### Q1: Why doesn't the display show anything after I upload the program?

A: Please check that the Round Display switch is turned on. If you are using the XIAO ESP32C3, you may also need to press Reset after uploading the program to make it work.

### Q2: If I want to connect Seeed Studio XIAO ESP32S3 Sense to this extension screen, will there be a conflict with two TF card slots?

A: This does not create a conflict. The different SD card slots are controlled via chip select, if you want to use the microSD card slot on Sense, the chip select pin should be **21**, if you want to use the microSD card slot on Round Display, the chip select pin should be **D2**.

We have [examples](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) of using both hardware and microSD cards in the S3 Sense camera tutorial.

### Q3: Why does my XIAO RP2040 get a very strange C++ error when using the code for HardwareTest with Round Display?

A: This may be caused by you not selecting the appropriate compile option for the XIAO RP2040. Please refer to the diagram below to set and re-upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [Charge IC datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28'' a-Si TFT Liquid Crystal Display datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO SCH](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO SCH v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY Datasheet](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO SCH&PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO SCH&PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [The 3D model of the Round Display for XIAO](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [The 3D model diagram of the shell for Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense Case With Round Screen](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

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
