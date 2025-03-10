---
description: Getting Started with ePaper Breakout Board
title: ePaper Breakout Board
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board
last_update:
  date: 05/23/2023
  author: Carla
---

# Getting Started with ePaper Breakout Board

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

Meet the XIAO eInk Expansion Board, your go-to solution for driving eInk displays with XIAO family effortlessly. Designed with a 24-pin FPC connector, this board provides a seamless link to our eInk product series, if you're looking to expand your options, the 8-pin 2.54 Header allows you to easily integrate any microcontroller of your choice. Think of this board as your eInk's "Best Friend Forever," enhancing its capabilities and making your life easier.

:::note
This breakout board does not include an eInk display; the display must be purchased separately.
:::

## Introduction

### Features

- 24-pin FPC Connector: Provides a robust and reliable connection to eInk displays.
- XIAO Socket: Allows you to use XIAO as the processor, offering a compact yet powerful control solution.
- 8-pin 2.54 Header: Offers flexibility by letting you connect to any microcontroller, opening up a world of possibilities.
- Plug-and-Play: Designed for ease of use, making it perfect for both beginners and experts.
- Versatile Applications: Suitable for a wide range of eInk displays, from small to large sizes.

### Applications

- Digital Signage: Use the eInk Breakout Board to create dynamic and energy-efficient digital signs.
- E-Readers: Build your own customized e-reader with features tailored to your needs.
- Smart Home Control Panels: Integrate the board into a smart home system for a sleek and modern control panel.
- Retail Price Tags: Create electronic price tags for a more efficient and eco-friendly retail experience.
- Educational Tools: Develop interactive educational materials that can be easily updated and are energy-efficient.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>


1. 24-pin FPC Conncctor: For the 2.13 inch ePaper.
2. XIAO Socket: For connecting the Seeed Studio XIAO development board.
3. IO Break out: For connecting the others controller, such Arduino UNO or Raspberry Pi.


### Pinout Definitions

<div class="table-center">

|  eInk SPI Pins |  XIAO  | 
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

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


## Use of the Image2lcd software

### How to Make Picture

Use the build-in software **Paint** in Windows to create a picture with the **same resolution** as the screen you are using, and save it as`BMP` or  `JPG` file; 


:::note
Your picture resolution must be the same as the screen you are using, for example, 4.2-inch E-paper is 400 x 300 pixels, then you can not use the size of 300 x 400, it will cause the iamge2lcd output `.h `file with an extra 200 bytes.
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

### Bitmap Conversion

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
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.



### Function Overview

Before we get started developing a sketch, let's look at the available functions 

- `void EPD_HW_Init()`—— Full screen refresh initialization.

- `void EPD_HW_Init_180()` ——Display rotation 180 degrees initialization.

- `void EPD_WhiteScreen_ALL(const unsigned char *datas)` —— Full screen refresh display function.
  - **Input Parameters:**

    - **datas：** The image data that needs to be refreshed.
- `void EPD_WhiteScreen_White()` —— Clear screen display.
- `void EPD_WhiteScreen_Black()` —— Display all black.
- `void EPD_DeepSleep()` —— Deep sleep function, enter the sleep mode and please do not delete it, otherwise it will reduce the lifespan of the screen.
- `void EPD_Init_Part()` —— Partial refresh display.
- `void EPD_SetRAMValue_BaseMap(const unsigned char * datas)` —— Partial refresh of background display.
  - **Input Parameters:**

    - **datas：** The image data that needs to be refreshed.
- `void EPD_Dis_PartAll(const unsigned char *datas)`—— Full screen partial refresh display.
- `void EPD_Dis_Part(unsigned int x_start,unsigned int y_start,const unsigned char * datas,unsigned int PART_COLUMN,unsigned int PART_LINE)` —— Partial refresh display.
  - **Input Parameters:**

    - **unsigned int x_start:** The x value of the starting point.
    - **unsigned int y_start:** The y value of the starting point
    - **const unsigned char * datas:** Data that needs to be changed
    - **unsigned int PART_COLUMN:** The length of the area to be changed
    - **unsigned int PART_LINE:** The width of the area to be changed

- `void EPD_HW_Init_Fast()` —— Fast refresh display.
- `void EPD_WhiteScreen_ALL_Fast(const unsigned char *datas)` —— Fast refresh display function.
  - **Input Parameters:**

    - **datas：** The image data that needs to be refreshed.
- `void EPD_HW_Init_Fast2()` —— Fast refresh display function.

### Example Demo


**Step 1.** Download the Demo Code, and open the code for your specific eInk Screen. 

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Seeed_ePaper-Breakout-Board">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />




**Step 2.** Take a example of using 4.2-inch eInk and a XIAO ESP32S3, once you have downloaded and extract the demo code, please navigate and open the "4.2 inch E-paper - Monocolor 400x300" folder. Then open the "example" folder, use Arduino to open the "example.ino" file:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/3.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** Put the `.h` file outputed from image2lcd into the same folder as example, and include it:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9.png" style={{width:500, height:'auto'}}/></div>

**Step 4.** Please click the Board selection dropdown menu, and then click on "Select other board and port...", 


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/4.png" style={{width:500, height:'auto'}}/></div>

**Step 5.** Select the communication port for your XIAO, then search and select "XIAO_ESP32S3"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/5.png" style={{width:700, height:'auto'}}/></div>


**Step 6.** Please click "upload" to flash the firmware on to XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/6.png" style={{width:500, height:'auto'}}/></div>


**Step 7.** You should see the eInk display refreahing the demo image as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/8.png" style={{width:500, height:'auto'}}/></div>

## Resources

- **[ZIP]** [PCB&SCH Eagle file](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## Tech Support & Product Discussion


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








