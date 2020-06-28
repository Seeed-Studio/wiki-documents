---
name: Grove - OLED Display 1.12"
category: Display
bzurl: https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html
oldwikiname: Grove_-_OLED_Display_1.12"
prodimagename: main.jpg
surveyurl: https://www.research.net/r/F79KN2D
sku: 101020452
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit
---

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

Our new 1.12” OLED displays are perfect when you need a small display with 16 grayscale. The visible portion of the OLED measures 1.12” diagonal and contains 96x96(version 1.0) |  128x128(version 2.0) grayscale pixels. Because the display uses OLEDs, there is no backlight, and the contrast is very high.

This OLED uses the SSD1327(V1.0) or SH1107G(V2.1) driver chip, which manages the display. You can talk to the driver chip using 4-wire I2C (clock, data, power, and GND pins).


<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>

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

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)


## Platforms Supported
---

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

### Hardware

Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below.

|pin|Function  | Note   | Cable color |
|--------|------|-----|---------------|
|pin1	| SCL | I2C Clock | YELLOW |
|pin2   | SDA| I2C Data| WHITE|
|pin3   | VCC  | Power, 5V/3.3V| RED |
|pin4	| GND  | Ground | BLACK |

**Hardware Overview**

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

### Software

- **Step 1.** Connect Grove - OLED Display 1.12'' to **I2C** port of Base Shield via Grove cable.

- **Step 2.** Open Arduino IDE and the Library Manager **(Sketch > Include Library > manage Libraries)** to install the library of u8g2.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

- **Step 3.** Enter "**u8g2**" into the search field and select latest version and Cclick "Install" button.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

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

!!!Success
       There will be a "Hello World!" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

!!!Note
        If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.


### APIs of the library

Seeed Gray OLED library provides complete software interfaces to exercise the capabilities of
SSD1327Z driver with a 96x96 gray OLED. Almost all useful features are implemented and all
functions are in public scope. This makes Seeed Gray OLED Library extensible. Seeed Gray OLED
library uses Arduino Wire library. Hence initialize wire library before initializing Seeed OLED library.

#### init()

Initializes the Seeed OLED frame and sets the display to Normal mode.

Example:

    SeeedGrayOled.init();  //initialze SEEED Gray OLED display

#### clearDisplay()  

Clears the whole screen. Should be used before starting a fresh start or after scroll deactivation.
This function also sets the cursor to top left corner.

Example:

    SeeedGrayOled.clearDisplay();  //clear the screen and set start position to top left corner

#### setNormalDisplay()  

Configures the display to normal mode(non-inverse) mode.

Example:

    SeeedGrayOled.setNormalDisplay();//Set display to normal mode (i.e non-inverse mode)


#### setContrastLevel(unsigned char ContrastLevel)  
Set the contrast ratio of OLED display. ContrastLevel can be any number from 0 - 255.
Example:

    SeeedGrayOled.setContrastLevel(127); //Set display contrast ratio to half level( i.e 256/2 1 ).

#### setInverseDisplay()
Configures the display to inverse mode.
Example:

    SeeedGrayOled.setInverseDisplay();      //Set display to inverse mode

#### setHorizontalMode()  
Configures the display to horizontal addressing mode.
Example:

    SeeedGrayOled.setHorizontalMode();      //Set addressing mode to Horizontal Mode

#### setVerticalMode()  
Configures the display to vertical addressing mode. Texts are drawn in vertical mode. Please set
the display to vertical mode before printing text.
Example:

    SeeedGrayOled.setVerticalMode();      //Set addressing mode to Vertical Mode

#### setTextXY(X,Y)  
Set the text's position (cursor) to Xth Text Row, Yth Text Column.96x96 OLED is divided into 12
rows and 12 Columns of text. This row and column should not be confused with OLED Row and
Column.

* X can be any number from 0 - 11.
* Y can be any number from 0 - 11.

Example:

    SeeedGrayOled.setTextXY(0,0);  //Set the cursor to 0th Text Row, 0th Text Column

#### putChar(unsigned char c)  
Print a character to OLED display starting from current address-pointer set by setTextXY(X,Y). This
function is internally used by putString().

Example:

    SeeedGrayOled.putChar('S'); //Print the character S

#### putString(cont char *string)  

Print string to OLED display starting from current address-pointer set by setTextXY(X,Y)
Example:

    SeeedGrayOled.putString("Hello World!"); //Print the String

### putNumber(long n)  

Print numbers to OLED display starting from current address-pointer set by setTextXY(X,Y).
Number can be any char,int or long datatype. It also takes care of -ve sign.

Example:

    SeeedGrayOled.putNumber(-56123); //Print number -56123

### drawBitmap(unsigned char *bitmaparray, int bytes)  

Display a binary bitmap on the OLED matrix. The data is provided through a pointer to uni-dimensional array holding bitmap. The bitmap data is available in continuous rows of columns
as like Horizontal Addressing mode. bytes is size of bitmap in bytes.

Example:

    SeeedGrayOled.drawBitmap(SeeedLogo,96*96/8);   //  Draw binary Bitmap (96 pixels *96 pixels  / 8) bytes

### setHorizontalScrollProperties

Set the properties of horizontal scroll.

* Direction can be any of Scroll_Left and Scroll_Right.
* startRow can be 0 - 127
* endRow can be 0 - 127. It should be greater than startRow
* startColumn can be 0 - 63
* endColumn can be 0 - 63. It should be greater than startRow
* scrollSpeed can be any of defines:Scroll_2Frames, Scroll_3Frames, Scroll_4Frames, Scroll_5Frames, Scroll_25Frames,Scroll_64Frames, Scroll_128Frames,Scroll_256Frames.

Example:

    SeeedGrayOled.setHorizontalScrollProperties(Scroll_Left,72,95,0,47,Scroll_5Frames);  //Set the properties of Horizontal Scroll

### activateScroll()  
Enable scrolling. This should be used only after setting horizontal scroll properties.
Example:

    SeeedGrayOled.activateScroll();   //Enable scrolling.

### deactivateScroll()  

Disable scrolling. This should be used after activateScroll();
Example:

    SeeedGrayOled.activateScroll();   //Disable scrolling.


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources
---------
* **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
* **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
* **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
* **[Library]** [Github Repository of the Library](https://github.com/Seeed-Studio/OLED_Display_96X96)
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
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>