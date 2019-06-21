---
name:  TFT Touch Shield V1.0‏‎
category: Discontinued
bzurl:
oldwikiname: TFT_Touch_Shield_V1.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/TFT_Touch_Shield_V1-0
sku:
tags:

---

![](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/img/Tft.jpg)

2.8" TFT Touch Shield is an Arduino / Arduino Mega compatible multicolored TFT display with a 4-wire resistive touch screen. It includes an Arduino shield compatible footprint for attachment. The TFT driver is based on professional Driver IC and with 8 bit data and 4 bit control interface.



##   Features   ##

- Arduino/Seeeduino, Arduino Mega, and Seeeduino Mega compatible

- 2.8” Size QVGA Display

- Resistive Touch Screen

##   Specification   ##

|Item|	Min|	Typical|	Max|	Unit|
|---|---|---|---|---|
|Voltage|	4.5|	5|	5.5|	VDC|
|Current	|/	|/	|250|	mA|
|LCD Panel Size	||||2.8	inch|
|View angle	|60~120	|||Deg|
|Resolution	|320x240	|||/|
|LCD color	|65k	|||/|
|Backlight Type|	LED|||	/|
|LCD driver IC	|ST7781R|||	/|
|Interface Type|	Parallel port ( 8bit Data + 4bit Control )	|||/|
|Touch Screen|	4-Wire resistive touch screen|||	/|
|Active area	|43.2*57.3|||	mm|
|ESD contact discharge	|±4	|||KV|
|ESD air discharge	|±8|||	KV|
|Dimension	|72.5x54.7x18|||	mm|
|Weight	|24±2	|||g|

##   Cautions   ##

- Do not subject the module to mechanical shock or impact by dropping it.

- Do not apply excessive force to the display surface or the adjoining areas since this may cause the color tone to vary.

###   Pins usage on Arduino   ###

![](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg) (width=undefined)

**D0** - Unused.

**D1** - Unused.

**D2** - LCD data bit 8.

**D3** - LCD data bit 9.

**D4** - LCD data bit 10.

**D5** - LCD data bit 11.

**D6** - LCD data bit 12.

**D7** - LCD data bit 13.

**D8** - LCD data bit 14.

**D9** - LCD data bit 15.

**D10** - LCD CS pin, active low.

**D11** - LCD RS pin.

**D12** - LCD WR pin.

**D13** - LCD RD pin.

**D14(A0)** - Touch Screen Y-.

**D15(A1)** - Touch Screen X-.

**D16(A2)** - Touch Screen Y+.

**D17(A3)** - Touch Screen X+.

**D18(A4)** - Unused.

**D19(A5)** - Unused.

##   Usage   ##

###   Hardware Installation   ###

- Insert the TFT Touch Shield to Seeeduino as shown below.

![](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/img/TFT_Touch_Shield_with_Seeeduino.jpg)

##   TFT Programming   ##

The **TFT** library provides the following Application Programming Interfaces(API). The library makes use of direct access to PORT registers instead of Arduino APIs. This is to increase the speed of communication between MCU and TFT. At present, the library supports Arduino, Arduino Mega (1280 or 2560) and Seeeduino ADK Main Board compatible boards. In Mega the 8bit data port of TFT is distributed to different pins belonging to different ports. This decreases the speed of graphics drawing when compared to Arduino. The choice of port pins are purely based on Arduino / Mega port pin arrangement.

###  General Functions ###

---

####  setXY(unsigned int poX, unsigned int poY) ####

Sets the cursor position to (poX,poY). This function is internally used by other graphics APIs.

####  setPixel(unsigned int poX, unsigned int poY,unsigned int color) ####

Sets the (poX,poY) pixel to color color. This function is internally used by other graphics APIs.

###  Lines ###

####  drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color) ####

Draws a line from pixel (x0,y0) to pixel (x1,y1) with color color.

####  drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color) ####

Draws a Horizontal Line of length length with color color starting from pixel (poX,poY).

####  drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color) ####

Draws a Vertical Line of length length with color color starting from pixel (poX,poY).

###  Rectangle ###

####  drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color) ####

Draws a rectangle starting from (poX,poY) of length length, width width and color color.

####  fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color) ####

Draws a filled rectangle starting from pixel (poX,poY) of length length, width width and color color.

###  Circle ###

####  drawCircle(int poX, int poY, int r,unsigned int color) ####

Draws a circle at (poX,poY) of radius radius and color color.

####  fillCircle(int poX, int poY, int r,unsigned int color) ####

Draws a filled circle at (poX,poY) of radius radius and color color.

###  Text ###

####  drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor) ####

Draws a character starting from (poX,poY) using inbuilt font of size size and with color fgcolor. This function is used by drawString() function.

####  drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor) ####

Draws a string of text starting from (poX,poY) using inbuilt font of size size and with color fgcolor.

###   TouchScreen Programming   ###

---

TFT Touch Shield uses the [Adafruit Touch Screen Library](https://github.com/adafruit/Touch-Screen-Library). To understand the principle behind resistive touch screen refer [External Links](/2.8inch-TFT_Touch_Shield_V1.0/#resources). In short, a 4-wire resistive touch screen provides two voltage divider each for X and Y axis. By applying proper voltages for each axis and scanning the ADC values the position of the touch can be detected. These values are always prone to noise. Hence a digital filter is used.

- To use the TouchScreen Library first create a TouchScreen object by

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

Where XP, YP, XM and YM are ADC port pins connected to XPlus, YPlus, XMinus and YMinus pins of Touch Screen. 300 is the resistance across X plates.

- Read the Raw ADC value using

`
Point p = ts.getPoint();
`

- The Raw ADC value has to be converted to Pixel Co-ordinates. This is done with map function. This mapping changes for v0.9 and v1.0. The demo applications already takes care of this mapping.

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- The following sketch demonstrates use of TouchScreen Library. This can also be used to calibrate the touch screen co-ordinates.

- Compile and upload the sketch.

- Open serial port monitor and touch the points displayed on the screen.

- See if the displayed X and Y values are correct. If not, we have to re-calibrate the touch screen coordinates.

####  How to calibrate the touch screen ? ####

- The parameters `TS_MINX, TS_MAXX, TS_MINY and TS_MAXY ` actually decides the extreme ends of the touch screen and actually forms the calibration parameters.

- The values assigned to these variables are measured ADC values (i.e Raw X, Raw Y) when we touch the extreme diagonal ends of touch screen.

- Touch points (0,0) and (239,319) and note down Raw X and Raw Y values. For better accuracy, try out many times and find the right value.

- **TS_MINX** corresponds to ADC value when X = 0 ;

- **TS_MINY** corresponds to ADC value when Y = 0 ;

- **TS_MAXX** corresponds to ADC value when X = 240 -1 i.e 239 ;

- **TS_MAXY** corresponds to ADC value when Y = 320 -1 i.e 319 ;

- Change these parameters in the sketch, recompile and upload to Arduino.

- Repeat the above steps if you still do not get accurate values.

####  Touch Screen Demo Sketch ####

```
// Paint application - Demonstate both TFT and Touch Screen
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 54   // can be a digital pin, this is A0
#define XP 57   // can be a digital pin, this is A3

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 18   // can be a digital pin, this is A0
#define XP 21   // can be a digital pin, this is A3

#else //168, 328, something else
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 14   // can be a digital pin, this is A0
#define XP 17   // can be a digital pin, this is A3

#endif

//Measured ADC values for (0,0) and (210-1,320-1)
//TS_MINX corresponds to ADC value when X = 0
//TS_MINY corresponds to ADC value when Y = 0
//TS_MAXX corresponds to ADC value when X = 240 -1
//TS_MAXY corresponds to ADC value when Y = 320 -1

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  //Paint brush color

// For better pressure precision, we need to know the resistance
// between X+ and X- Use any multimeter to read it
// The 2.8" TFT Touch shield has 300 ohms across the X plate

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins

void setup()
{

    Tft.init();  //init TFT library
    pinMode(0,OUTPUT);
    //Draw the pallet
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);

}

void loop()
{

    // a point object holds x y and z coordinates.
    Point p = ts.getPoint();

    //map the ADC value read to into pixel co-ordinates

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // we have some minimum pressure we consider 'valid'
    // pressure of 0 means no pressing!

    if (p.z > ts.pressureThreshhold) {


        // Detect  paint brush color change
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

###  Demo Code shown ###

- Insert the TFT Touch Shield to Seeeduino as shown below.

![](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/img/DemoShow.JPG)
TFT Touch Shield connected to Seeeduino

##   Version Tracker   ##

|Revision|	Descriptions	|Release|
|---|---|---|
|v1.1|	change pictures and demo code combination	|22 November 2011|
|v1.0	|Use of SPFD5408A based TFT instead of ST7781R driver chip based TFT|	12 September 2011|
|v0.9b	|Initial public release|	24th June 2011|

##   Support   ##

[Ask questions on Seeed forum](http://www.seeedstudio.com/forum).

##   Resources   ##

- **[Libraries]**[TFT & TouchScreen Libraries](http://seeedstudio.com/wiki/images/2/29/Tft_touch_libraries_11252011.zip)
- **[Library]**[TFT & TouchScreen Libraries for Arduino 1.0 20120628](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/res/TFT_TouchScreen_for_Arduino_1.0.zip)
- **[Demo]**[TFT BMP demo](http://seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip).
- **[Eagle]**[TFT Touch Shield v1.0 Schematic and Board Files - Eagle Format](http://seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[Eagle]**[TFT Touch Shield v0.9b Schematic and Board Files - Eagle Format](http://wiki.seeedstudio.com/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip)
- **[Datasheet]**[FGD280E3715V1 - TFT Touch Screen Datasheet](http://wiki.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
- **[Datasheet]**[ST7781R Datasheet ](http://wiki.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf)

##   How to buy   ##

Click here to buy: [2.8 TFT Touch Shield](http://www.seeedstudio.com/depot/28-tft-touch-shield-p-864.html?cPath=132_134)

##   See Also   ##

- [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)
- [Seeeduino Mega](https://seeeddoc.github.io/Seeeduino_Mega/)

##   Licensing   ##

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under various Open Source licenses. See source code files for details.

##   External Links   ##

- [ATMEL - App Notes on Four and five-wire Touch Screen](http://www.adafruit.com/datasheets/AVR341.pdf)
- [TI - Using Resistive Touch Screen](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- [SD Card library](https://github.com/adafruit/SD) .

##   Related Projects  ##

It's a pity that we don't have any demo about TFT Touch Shield V1.0 in the [Recipe](http://www.seeedstudio.com/recipe/) yet.

Post your awesome project about TFT Touch Shield V1.0 to win $100 Coupon! Please feel free to contact us: **recipe@seeed.cc**

Here we introduce some projects about [3Dpad touchless gesture controller Arduino shield](http://www.seeedstudio.com/depot/3Dpad-touchless-gesture-controller-Arduino-shield-p-2332.html)

![](https://github.com/SeeedDocument/TFT_Touch_Shield_V1.0/raw/master/img/Seeed-recipe-3Dpad_inchAir_controlinch_MIDI_controller.jpg)

This demo is a 3Dpad "Air control" MIDI controller make by Dpad touchless gesture controller Arduino shield.

[I want to make it](http://www.seeedstudio.com/recipe/229-3dpad-quot-air-control-quot-midi-controller.html).

###   Share Your Awesome Projects with Us  ###

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this, the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist or engineers.

As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.

Now share your awesome projects with us on [Recipe](http://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.

-  Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.

-  We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

Get more information about Core User please email to:**recipe@seeed.cc**

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>