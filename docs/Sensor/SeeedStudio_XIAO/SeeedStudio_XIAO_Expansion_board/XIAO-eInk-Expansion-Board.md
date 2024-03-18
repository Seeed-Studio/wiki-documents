---
description: Getting Started XIAO eInk Expansion Board
title: XIAO eInk Expansion Board
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board
last_update:
  date: 10/30/2023
  author: Peter
---

# Getting Started XIAO eInk Expansion Board

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
4. [2.13-inch E-Paper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
5. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
6. [2.9-inch e-paper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
7. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
8. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5-inch E-paper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

## Getting Started

Here is an example of using 2.13-inch eInk and a XIAO ESP32S3, If you're want to work with other eInk of different sizes, please check the supported eInk table above, you could also find the demo code specific to those on their respective example code folder.

**STEP 1:** Insert the XIAO ESP32S3 into the XIAO Socket: Align the pins and gently insert your XIAO ESP32S3 into the XIAO socket on the board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**STEP 2:** Insert the eInk into the FPC Connector: Carefully slide your 2.13-inch ePaper into the 24-pin FPC connector on the ePaper Breakout Board.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

**STEP 3:** Download the Demo Code: Navigate to the [demo code repository](https://github.com/peterpanstechland/e-ink) and open the code for your specific eInk Screen and use Arduino IDE to flash onto your XIAO ESP32S3. Follow the instructions in the repository to upload the code.

**STEP 3-1:** Once you have downloaded and unziped the demo code, please navigate and open the "2.9 inch E-paper - Monocolor 128x296" folder.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/select_2.9inch_eink_folder.png" style={{width:400, height:'auto'}}/></div>

**STEP 3-2:** Then open the "example" folder:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/enter_example.png" style={{width:400, height:'auto'}}/></div>

**STEP 3-3:** Then use Arduino to open the "example.ino" file:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/open_example_sketch.png" style={{width:400, height:'auto'}}/></div>

**STEP 3-4:** Please click the Board selection dropdown menu, and then click on "Select other board and port..."

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/select_other_board.png" style={{width:400, height:'auto'}}/></div>

**STEP 3-5:** Please select the communication port for your XIAO, then search and select "XIAO_ESP32S3"
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/find_and_select_xiaoesp32s3.png" style={{width:400, height:'auto'}}/></div>

**STEP 3-6:** Please click "upload" to flash the firmware on to XIAO
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/upload_code.png" style={{width:400, height:'auto'}}/></div>

You should see the eInk display refreahing the demo image as shown below. You're now ready to start exploring the endless possibilities with your XIAO eInk Breakout Board and XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/screen_update.gif" style={{width:400, height:'auto'}}/></div>

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








