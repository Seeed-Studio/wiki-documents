---
name: Shield MaTrix V0.9
category: MakerPro
bzurl: https://www.seeedstudio.com/Shield-Matrix-p-1773.html
oldwikiname:  Shield MaTrix V0.9b
prodimagename:
surveyurl: https://www.research.net/r/DC_framework_miniature_solenoid_VL-0063
sku:  104030021
---
![](https://github.com/SeeedDocument/Shield-MaTrix-V0.9b/raw/master/img/Shield_matrix.jpg)

Shield MaTrix is a stackable Shield for Arduino, which makes it possible to learn programming using the most simple sensors on board.

![](https://github.com/SeeedDocument/Shield-MaTrix-V0.9b/raw/master/img/MFull.JPG)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](http://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

##   Feature

*   Arduino Mega compatible (recommended Freaduino Mega V1.4 (ATMega 2560 ) )

*   Support for Arduino Shield

*   Support for wireless devices based on the nRF24L01+, xBee

*   Support Matrix LED 60mm 8X8 ( bright red , bright green , yellow)

*   IR control ( remote control )

*   RGB LED ( to indicate the various parameters)

*   Clock button ( on / off various settings )

*   Buzzer ( Alarm or pressing the remote control buttons )

*   Light sensor (automatic illumination matrices )

*   RTC ( real time clock )

*   I2C- interface (optional I / O)

*   Voltage 9-24 V or USB controller (recommended 12V 2A)

##   Application Ideas

*   Digital clock (synchronization NTP) with alarm
*   Weather station (temperature-house street-cellar, pressure, humidity)
*   Marquee (reading e-mail, social networks, etc.)
*   Data transfer (on a similar device)

##   The principle of data display

To display different information on the LED matrix display uses dynamic .
At the same time information is displayed only one line ( corresponding LED lights (red and (or ) green ) ) , all other lines - repaid. The next step - the previous line is extinguished and ignited the next line ( for her current LEDs). Switching rows is very fast and eyes perceive this switch as a single image .

To minimize the number of pins involved are two different types of chips: the shift registers (used for control columns) and a demultiplexer ( control lines).

Shift registers included chain and connected via SPI ( pins involved are described below).

Demultiplexer has three address inputs (DA0, DA1, DA2) - a combination of "0" and "1" at the entrances clearly points to one of the 8 outputs, which will be active level . Additionally the demultiplexer has control inputs (E1, E2, E3) - with the first two (E1 and E2, they are connected in our scheme ) organized a complete quenching of the matrix , and with the input E3 - organized brightness adjustment (using PWM) .

##   Interfaces

*   Interface for 4 bicolor LED matrix :

    *   Set shift registers (74HC595 - 8 pcs.) To control the columns of LEDs

        *   Demultiplexer 74HC138 to control the rows of LEDs and their brightness (via PWM)

*   Built-in clock (RTC) - based on the DS1307 with battery backup battery (CR1220 or CR1226)

*   Interface for RF- module nRF24L01 +

*   Clock button (for example, to turn off the alarm sound )

*   IR receiver at 38kHz ( for remote control )

*   Wiring for connecting RGB- LED with common cathode or anode (selected by jumper )

*   Light sensor ( for example, to automatically adjust the brightness)

*   Piezo transducer " beeper "

*   I2C- interface

*   xBee- interface

*   Interface for Arduino- Shield

** Pins on the board, involved on Arduino Mega: **

*   D5 - IR receiver

*   D24 - clock button

*   xBee:

    *   D16 - DIN

        *   D17 - DOUT

*   I2C (DS1307)

    *   D20 - SDA

        *   D21 - SCL

*   RGB-LED (check):

    *   D34 - red

        *   D35 - Green

        *   D36 - Blue

*   nRF24L01 +:

    *   D19 - RF_IRQ

        *   D37 - RF_SCK

        *   D38 - RF_MISO

        *   D39 - RF_MOSI

        *   D40 - RF_NSS

        *   D41 - RF_CE

*   D45 - squeaker

*   A7 - light sensor

*   Shift Registers:

    *   D42 - SS

        *   D51 - MOSI

        *   D52 - SCK

*   Demultiplex

    *   D49 - DA0

        *   D48 - DA1

        *   D47 - DA2

        *   D44 - E3 (brightness)

        *   D43 - E1, E2 (quenching)

##   Cautions

##   Schematic

The right side of the board (when viewed from the matrix) are:

*   Clock button

*   Interface for nRF24l01 +

*   Place mounting RGB-LED

*   Select jumper type LEDs (common anode or common cathode)

*   IR receiver

*   I2C - Interface

![](https://github.com/SeeedDocument/Shield-MaTrix-V0.9b/raw/master/img/MRight.JPG)

On the left side of the board are:

*   Light sensor

*   Piezo buzzer (beeper)

![](https://github.com/SeeedDocument/Shield-MaTrix-V0.9b/raw/master/img/MLeft.JPG)

[Schematic of the device](res/SM09b_scheme.jpg)

##   Necessary libraries

To use the various components Shield MaTrix requires the following libraries:

Displays information on the matrix - MaTrix - [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip) (including a simple display test and two real time display sketches.)

*   Real-time clock (RTC) - RTClib - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

*   IR-receiver - IRremote [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip) (With this library, you can control the display using an IR remoter)

*   nRF24L01 + - iBoardRF24 - [iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip) ([DevDuino Sensor Node 2.4G nRF24L01+](http://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22) remote control library)

![](https://github.com/SeeedDocument/Shield-MaTrix-V0.9b/raw/master/img/Shield-matrix_nRF24L01Plus.jpg)

Additionally required libraries that are used during operation of libraries:

*   Wire

*   SPI

*   [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

##   Features using libraries

Only two libraries require little comment on their use:

###    IR receiver

Since the IR receiver connected to digital pin of 5 must file / IRremote / IRremoteInt.h correct code as follows:

<pre>...

// Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46

...</pre>

###   nRF24L01+

Initialize the module as follows:

<pre>...

//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);

...</pre>

#   Library functions MaTrix

To use the library in your sketch MaTrix need to declare a function void setup () to enter the following line of code:

`
`

<pre> #include &lt;SPI.h&gt;
 #include &lt;MaTrix.h&gt;	//connection library MaTrix

 MaTrix mymatrix;       //object creation mymatrix
</pre>

##   Variables

**byte array[8][8]** - main array.
The data from this array is determined that the currently displayed on the LED matrix

`
`

<pre> byte array[8][8] = { // An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
</pre>

Each bit corresponds to the corresponding LED in the matrix. 0 - LED "extinguished", 1 - LED "lit"

**byte shadow[8][8]** - additional ("shadow") array.
Library functions used for organizing various effects and scrolling text (data from the shadow of the array for a particular effect rewritten the rule of the "shadow" of the array in the main).
`
`

<pre> byte shadow[8][8] = { //An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
</pre>

##   Definitions

`
`

<pre> // Color
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
</pre>
<pre> // delay iteration in "drawing" effects (ms)
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
</pre>
<pre> // effects
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
</pre>
<pre> // hardware data
 #define BRIGHT 44    // brightness (pin 44 - PWM)
 #define LightSENS A7 // light sensor
</pre>

##   Main function

<u> **mymatrix.init();**</u>

<dl><dd>_Description_: nitialization module.
</dd></dl>

<u> **mymatrix.clearLed();**</u>

<dl><dd>_Description_:cleaning the display.
</dd></dl>

<u> **mymatrix.brightness(byte brightLevel);**</u>

<dl><dd>_Description_: sets the display brightness.
</dd><dd>_brightLevel_:brightness level (byte), a value of 255 - set to maximum brightness.
</dd></dl>

Example of use:

`
`

<pre> mymatrix.brightness(177);
</pre>

<u> **mymatrix.get Brightness();**</u>

<dl><dd>_Description_: returns the current display brightness.
</dd></dl>

Example of use:

`
`

<pre> Serial.println(mymatrix.getBrightness());
</pre>

<u> **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**</u>

<dl><dd>_Description_: displays the specified string.
</dd><dd>_pos_: starting position of the first character (byte). Counting from the right edge of the matrix, starting with 0.
</dd><dd>_color_: color (byte). Three predefined values - RED, GREEN, YELLOW
</dd><dd>_*Font_: a pointer to the font (unsigned char). Fonts available at the library: character - font5x8 (Latin), font6x8 (Latin and Cyrillic); digital - digit6x8bold, digit6x8future. Details about fonts, see the file fonts.c of the library archive MaTrix.
</dd><dd>_effect_: the effect of the inscription (char). Available predefined values: LEFT, UP, DOWN (shift in the corresponding direction), FADE (manifestation), NONE (No effect - instantly). Default value - NONE.
</dd><dd>_speed_: playback speed effect (int). Available predefined values: VSLOW, SLOW, MID,  FAST, VFAST (from "very slow" to "very quickly"), default value - MID.
</dd></dl>

Example of use:

`
`

<pre> mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
</pre>

<u> **printRunningString(String s, byte color, unsigned char *Font, int speed);**</u>

<dl><dd>_Description_: displays the defined "running" line.
</dd><dd>_color_: color (byte). Three predefined values - RED, GREEN, YELLOW
</dd><dd>_*Font_: a pointer to the font (unsigned char). Fonts available at the library: character - font5x8 (Latin), font6x8 (Latin and Cyrillic); digital - digit6x8bold, digit6x8future. Details about fonts, see the file fonts.c of the library archive MaTrix.
</dd><dd>_speed_: playback speed effect (int). Available predefined values: VSLOW, SLOW, MID,  FAST, VFAST (from "very slow" to "very quickly"), default value - MID.
</dd></dl>

Example of use:

`
`

<pre> mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
</pre>

##   Auxiliary functions

<u> **printArray();**</u>

<dl><dd>_Description_: displays the serial port the current state of the main array (array).
</dd></dl>

<u> **printShadow();**</u>

<dl><dd>_Description_: displays the serial port the current state of the "shadow" of the array (shadow).
</dd></dl>

<u> **printChar(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Description_: function changes the bulk (array)so that when displayed in the matrix in a predetermined position of the desired output color desired symbol.
</dd><dd>_pos_:starting character position (byte). Counting from the right edge of the matrix, starting with 0.
</dd><dd>_color_: color (byte). Three predefined values - RED, GREEN, YELLOW
</dd></dl>

Attention! Font that is used when calling the function must be defined using the setFont.

<u> **printCharShadow(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Description_: function similar printChar, but is subject to modification "shadow" array (shadow).
</dd></dl>

<u> **printStr(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Description_: function changes the bulk (array) so that when displayed on a matrix with a predetermined desired position of the array of characters displayed the color desired.
</dd><dd>_*s_: a pointer to an array of characters (unsigned char).
</dd><dd>_pos_: starting position of the first character (byte). Counting from the right edge of the matrix, starting with 0.
</dd><dd>_color_: color (byte). Three predefined values - RED, GREEN, YELLOW
</dd></dl>

Attention! Font that is used when calling the function must be defined using the setFont.

<u> **printStrShadow(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Description_: function similar printChar, but is subject to modification "shadow" array (shadow).
</dd></dl>

##   References

Current version of the library [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)

##   Bill of Materials (BOM) /parts list

All the components used to produce the product.

##   FAQ

Please list your question here:

##   Support

If you have questions or other better design ideas,

##   Version Tracker

<table  cellpadding="5" cellspacing="0">
<tr>
<td width="150"> **Revision**
</td>
<td width="450"> **Descriptions**
</td>
<td width="80"> **Release **
</td></tr>
<tr style="font-size: 90%">
<td> 0.9
</td>
<td> Prototype
</td>
<td> 11.04.2013
</td></tr>
<tr style="font-size: 90%">
<td> 0.9b
</td>
<td> Public version
</td>
<td> 27.10.2013
</td></tr></table>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>