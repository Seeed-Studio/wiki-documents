---
title: ePaper Driver Board
description: The eInk expansion board For XIAO is a smart module from Seeed Studio designed to display something in epaper screen. 
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /xiao_eink_expansion_board_v2
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Allen
  date: 12/09/2024
---

# Getting Started with ePaper Driver Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

The ePaper driver board features a 24-pin FPC connector, built-in charging IC for efficient and safe battery charging, and a JST 2-pin BAT connector for easy battery connection. Ideal for creating WiFi-enabled digital photo frames.

:::note
This breakout board does not include an ePaper display; the display must be purchased separately.
:::

## Introduction

### Feature

- **Built-in Charging IC**: Ensures efficient and safe battery charging.
- **BAT Connector with Switch**: Allows for easy battery connection and includes a switch to combine the battery and switch for more efficient energy saving.
- **24-Pin PFC Connector**: Provides versatile connectivity options for various peripherals.
- **Extension IO Port**: Enables connection of additional sensors, such as temperature and humidity sensors, for enhanced functionality.
- **Compatible with Seeed Studio XIAO Ecosystem**: Seamlessly integrates with the XIAO series(Pre-Soldering Version) for versatile project development.

### Application

- **Smart Home Dashboard**: Display real-time information such as weather updates, calendar events, and notifications from various smart home devices.
- **Energy Monitoring**: Show energy consumption data from smart meters, helping homeowners track and manage their energy usage more efficiently.
- **Security Alerts**: Display alerts and notifications about security events, such as motion detection or door/window sensor activation.
- **Smart Thermostat Display**: Show temperature and humidity levels, as well as control settings for your smart thermostat.
- **Digital Photo Frame**: Create a WiFi-enabled digital photo frame that can display images from your smart home network.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. 24-pin FPC Conncctor: For the ePaper interface.
2. JST BAT Connector: For battery connection and switch.
3. XIAO Socket: For connecting the Seeed Studio XIAO development board.
4. IO Break out: For connecting Grove sensors or the others controller, such Arduino UNO or Raspberry Pi.
5. Power switch: For battery power control.

### Pinout Definitions

<div class="table-center">

|  ePaper SPI Pins |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D2   |
|      SCK       |   D8   |
|      MOSI      |   D10  |
|      3V3       |   3V3   |
|      GND      |   GND  |

</div>

### Supported eInk

1. [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9-inch e-paper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5-inch E-paper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5-inch E-paper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

## Getting Started

 To use the **XIAO eInk Expansion Board**, we need to program the XIAO series. The table of different sizes E-paper supported by XIAO is as follows:

<div class="table-center">

|      E-paper / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|1.54-inch E-paper - Dotmatix 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper - Quadruple 212x104          | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9 inch E-paper - Monocolor 128x296           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9-inch e-paper - Quadruple color 128x296     | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.2-inch E-Paper - Monocolor 400x300           | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.26-inch E-Paper - Monocolor 800x480          | RAM overflowed | ✅ | ✅ | ✅ | ✅ |
|5.65-inch E-paper -  Sevencolor 600x480        | FLASH overflowd | ✅ | ✅ | ✅ | ✅ |
|5.83-inch E-paper - Monocolor 648x480          | ✅ | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Monocolor 800x480           | RAM overflowed | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Tri-Color 800x480           | RAM overflowed | ✅ | ✅ | ✅ | ✅ |

</div>

### Hardware Preparation

**Step 1.** Material preparation

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
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
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
 </tr>
</table>

**STEP 2.** Insert the XIAO into the XIAO Socket: Align the pins and gently insert your XIAO into the XIAO socket on the board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**STEP 3.** Insert the eInk into the FPC Connector: Carefully slide your E-paper into the 24-pin FPC connector on the ePaper Breakout Board.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### Software Preparation

 The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package.
:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

## Install Seeed GFX Library

**Step 3.** Install Seeed GFX Library

:::tip
This library has same function as TFT library and no compatible with it. If you have installed TFT library or other similary display libraries, please uninstall it first.
:::

Download and install the Seeed GFX library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

Scroll down and open this link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Select your device type and it will generate some code. Copy those code and we will use them later.

:::tip
If you make the wrong choice, the screen will display nothing.

So please make sure your devices or components type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/config.jpg" style={{width:600, height:'auto'}}/></div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

There are 4 basic examples, open a basic example you like:

1. Bitmap: Display a bitmap image.
2. Clock: Display a clock.
3. Clock_digital: Display a digital clock.
4. Shape: Display different sizes of words and shape randomly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Upload the Code

Create a **new "driver.h" file** and paste those code into it. The code should be like:

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

After that, go to **Tools** -> **Board** -> **XIAO ESP32C6** and **Tools** -> **Port** -> **Select the port your board is connected to**. Then click **Upload** to upload the code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

Now you will see the feedback in your epaper screen! Following are the results of Helloworld examples.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
If you are using a 1.54-inch or 2.9-inch e-ink screen, due to their driver chips, flickering may occur when using dynamic effects such as clocks. Please be assured this is not a program issue. However, it is not recommended to run dynamic effect examples for extended periods to avoid reducing the screen's lifespan.

If you are using 5.83 and 7.5-inch screens, they have different chips, so they won't have the flickering phenomenon.
:::

## Image Extraction Software

### Usage of the Websites(recommend)

Here I'm using a 7.5-inch e-inked screen for the test

#### How to Make Picture

This [URL](https://jlamch.net/MXChipWelcome/) provides a very convenient image extraction operation, which can easily help us realize displaying a variety of images on top of the e-ink screen, let's get started!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Step 1**.Select image

First pick the image you want, try not to exceed the size of 800*480.

**Step 2**.Image Settings

- Canvas Size(s)
  - Canvas Size: Set the dimensions of the canvas. For example, 800 x 480 pixels means the canvas width is 800 pixels and the height is 480 pixels.

- Background Color
  - Background Color: Choose the background color of the canvas. Options include:

  - White: White background
  - Black: Black background

- Transparent: Transparent background
  - Invert Image Color
  - Invert Image Color: This option is used to invert the colors of the image. When selected, the colors of the image will be reversed.

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold: Set the brightness value of the pixels, ranging from 0 to 255. Higher values make the pixels brighter; pixels below this value will turn black.

- Scaling
  - Scaling: Choose the scaling method for the image. Options include:

- Original size: Maintain the original size
  - Other scaling options (specific options may need further explanation)
- Center
  - Center: Choose whether to center the image on the canvas. Note: This option only works if the image is larger than the original size.

**Step 3**.Preview

Once the settings are complete, you can see a preview of how your image will appear here

**Step 4**.Output

- Copy the converted code

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- Replace the image code in this header file
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### Display Effect

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Usage of the Image2lcd software

#### How to Make Picture

Use the build-in software **Paint** in Windows to create a picture with the **same resolution** as the screen you are using, and save it as`BMP` or  `JPG` file;

:::note
Your picture resolution must be the same as the screen you are using, for example, 4.2-inch E-paper is 400 x 300 pixels, then you can not use the size of 300 x 400, it will cause the iamge2lcd output `.h`file with an extra 200 bytes.
:::

The colors of the picture should be consistent with the standard colors of the drawing board that come with Windows.The color of the drawing board is as follows:

<div class="table-center">

|      E-paper      | Colors |
|       ---      |  ---   |
|1.54-inch E-paper - Dotmatix 200x200           | pure black and white          |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | pure black and white          |
|2.13-inch E-Paper - Quadruple 212x104          | black, white, red, and yellow |
|2.9 inch E-paper - Monocolor 128x296           | pure black and white          |
|2.9-inch e-paper - Quadruple color 128x296     | black, white, red, and yellow |
|4.2-inch E-Paper - Monocolor 400x300           | pure black and white          |
|4.26-inch E-Paper - Monocolor 800x480          | pure black and white          |
|5.65-inch E-paper -  Sevencolor 600x480        | black, white, red, yellow, blue, green, orange|
|5.83-inch E-paper - Monocolor 648x480          | pure black and white          |
|7.5-inch E-paper - Monocolor 800x480           | pure black and white          |
|7.5-inch E-paper - Tri-Color 800x480           | pure black and white          |

</div>

#### Bitmap Conversion

**Step 1.** Open [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extract it and open the application.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** Open the picture, select the "Output file type" as the "C array (*.c)", select the "Scan mode" as the "Horizon Scan", the other parameters setting is show in follows:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Max Width and Height</th>
        <th>Reverse color</th>
        <th>Display mode</th>
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">Monochrome</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">Monochrome</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper - Quadruple 212x104 </th>
        <td align="center">4 Gray</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9 inch E-paper - Monocolor 128x296</th>
         <td align="center">Monochrome</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9-inch e-paper - Quadruple color 128x296 </th>
        <td align="center">4 Gray</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>4.2-inch E-Paper - Monocolor 400x300</th>
        <td align="center">Monochrome</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>4.26-inch E-Paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>5.65-inch E-paper -  Sevencolor 600x480</th>
        <td align="center">256 colors</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>5.83-inch E-paper - Monocolor 648x480</th>
        <td align="center">Monochrome</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>7.5-inch E-paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>7.5-inch E-paper - Tri-Color 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
  </table>
</div>

:::tip

- After set the Max Width and Height, it need to click the arrow to confirm.
- Don't include head data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Step 3.** Click "Save" to save the the lcd output array as a file of `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## Resources

- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

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
