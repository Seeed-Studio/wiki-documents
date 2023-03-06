---
description: Grove - OLED Display 1.12&#34
title: Grove - OLED Display 1.12&#34
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED_Display_1.12inch
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>


Our new 1.12” OLED displays are perfect when you need a small display with 16 grayscale. The visible portion of the OLED measures 1.12” diagonal and contains 96x96(version 1.0) |  128x128(version 2.0) grayscale pixels. Because the display uses OLEDs, there is no backlight, and the contrast is very high.

This OLED uses the SSD1327(V1.0) or SH1107G(V2.1) driver chip, which manages the display. You can talk to the driver chip using 4-wire I2C (clock, data, power, and GND pins).


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)
## Specification

* Communicate Mode: I2C
* Grayscale Display: 16 Gray shades.
* Supports both Normal and Inverse Color Display.
* Supports Continuous Horizontal Scrolling.
* Grove compatible Interface


## Version
  ---
  | Product Version              | Changes                                                                                                                                                                                    | Released Date |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Initial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Change the driver IC from SSD1327 to SH1107G, upgrade the grayscale pixels from 96X96 to 128X128 | Nov 2015     |


## Specifications
---
|Item|Value|
|-----|------|
|Operating Voltage | 3.3/5 V|
|Dot Matrix | 96x96 |
| Display Color| 16 Grayscale |
| OLED Display | LY120-96096 |
| Driver Chip | SSD1327Z |
| Dot Size | 0.15(W)mm x 0.15(H)mm |
| Dot Pitch | 0.75(W)mm x 0.175(H)mm|
| Operating Temperature | -40~70 oC|

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported
<!-- ---

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Hardware

Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below.

|pin|Function  | Note   | Cable color |
|--------|------|-----|---------------|
|pin1	| SCL | I2C Clock | YELLOW |
|pin2   | SDA| I2C Data| WHITE|
|pin3   | VCC  | Power, 5V/3.3V| RED |
|pin4	| GND  | Ground | BLACK |

**Hardware Overview**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>


### Software

- **Step 1.** Connect Grove - OLED Display 1.12'' to **I2C** port of Base Shield via Grove cable.

- **Step 2.** Open Arduino IDE and the Library Manager **(Sketch > Include Library > manage Libraries)** to install the library of u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **Step 3.** Enter "**u8g2**" into the search field and select latest version and Cclick "Install" button.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **Step 4.** Upload the demo code below in your Arduino IDE.

```C++
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::success
       There will be a "Hello World!" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>


:::note
        If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.
:::

## U8g2 Library Introduction

U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1327/SH1107G.

The Arduino library U8g2 can be installed from the library manager of the Arduino IDE. U8g2 also includes U8x8 library:

**U8g2**

- Includes all graphics procedures (line/box/circle draw).
- Supports many fonts. (Almost) no restriction on the font height.
- Requires some memory in the microcontroller to render the display.

**U8x8**

- Text output only (character) device.
- Only fonts allowed with fit into a 8x8 pixel grid.
- Writes directly to the display. No buffer in the microcontroller required.

Here provides the [**U8g2 Library wiki**](https://github.com/olikraus/u8g2/wiki) as well as the [U8g2 API Reference](https://github.com/olikraus/u8g2/wiki/u8g2reference) page.



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---------
* **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
* **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
* **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
* **[Datasheet]** [SSD1327 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
*  **[Datasheet]** [LY120 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
* **[Datasheet]** [SH1107G_datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
* **[Tool]** [Reference for Make a 96x96 Image](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## Project

**Smart Crops: Implementing IoT in Conventional Agriculture!** Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**Automated Plant Watering System** A device that waters plants and monitors temprature using an ESP8266 and Android app.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**Flying BeagleBone Green** BBBmini is a state of the art Linux autopilot / flightcontroller Cape for the BeagleBone. It can be used for Copter, Planes or Rovers.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
