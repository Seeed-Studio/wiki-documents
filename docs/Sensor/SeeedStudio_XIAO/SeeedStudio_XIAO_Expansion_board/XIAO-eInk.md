---
description: Getting Started XIAO eInk Expansion Board
title: XIAO eInk Expansion Board
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_eink
last_update:
  date: 10/30/2023
  author: Peter
---

# Getting Started XIAO eInk Expansion Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/x.html#">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

Meet the XIAO eInk Expansion Board, your go-to solution for driving eInk displays with XIAO family effortlessly. Designed with a 20-pin FPC connector, this board provides a seamless link to our eInk product series, if you're looking to expand your options, the 8-pin 2.54 Header allows you to easily integrate any microcontroller of your choice. Think of this board as your eInk's "Best Friend Forever," enhancing its capabilities and making your life easier.

:::note
This breakout board does not include an ePaper display; the display must be purchased separately.
:::

## Introduction

### Features

- 20-pin FPC Connector: Provides a robust and reliable connection to ePaper displays.
- XIAO Socket: Allows you to use XIAO as the processor, offering a compact yet powerful control solution.
- 8-pin 2.54 Header: Offers flexibility by letting you connect to any microcontroller, opening up a world of possibilities.
- Plug-and-Play: Designed for ease of use, making it perfect for both beginners and experts.
- Versatile Applications: Suitable for a wide range of ePaper displays, from small to large sizes.

### Applications

- Digital Signage: Use the ePaper Breakout Board to create dynamic and energy-efficient digital signs.
- E-Readers: Build your own customized e-reader with features tailored to your needs.
- Smart Home Control Panels: Integrate the board into a smart home system for a sleek and modern control panel.
- Retail Price Tags: Create electronic price tags for a more efficient and eco-friendly retail experience.
- Educational Tools: Develop interactive educational materials that can be easily updated and are energy-efficient.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>


1. 20-pin FPC Conncctor: For the 2.13 inch ePaper.
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

## Getting Started

To get you up and running quickly, we'll be using a 2.13-inch ePaper and a XIAO ESP32S3 for this guide. If you're working with ePapers of different sizes, you can find the demo code specific to those on their respective product pages.

STEP 1: Insert the ePaper into the FPC Connector: Carefully slide your 2.13-inch ePaper into the 20-pin FPC connector on the ePaper Breakout Board.

STEP 2: Insert the XIAO ESP32S3 into the XIAO Socket: Align the pins and gently insert your XIAO ESP32S3 into the XIAO socket on the board.

STEP 3: Download the Demo Code: Navigate to the [demo code repository](https://github.com/peterpanstechland/e-ink) and download the code for your specific eInk Screen and use Arduino IDE to flash onto your XIAO EESP32S3. Follow the instructions in the repository to upload the code.

And there you have it! You're now ready to start exploring the endless possibilities with your ePaper Breakout Board and XIAO ESP32S3.

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








