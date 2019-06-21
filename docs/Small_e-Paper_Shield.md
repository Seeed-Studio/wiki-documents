---
name:  Small e-Paper Shield‏‎
category: Discontinued
bzurl:
oldwikiname:  Small_e-Paper_Shield‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Small_e-Paper_Shield
sku:
tags:
---

<center>![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/E_shield_01.jpg) ![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/E_shield_02.jpg)</center>

e-Paper might be the most comfortable material to read. It reflects light instead of emitting light to mimic the experience of conventional paper reading. And in this way much less power is consumed. The Small e-paper shield is a driver shield for e-paper of small sizes. It's capable of driving e-papers of 1.44 inch, 2.0 inch and 2.7 inch and supports more than 170 languages. The upper surface of this shield is left flat and clean to give great support to the e-paper attached to it. If you are considering a lightweight and comfortable to read display, e-paper would be a good choice.

**Attention:** Since this driver board supports e-papers of different sizes. e-paper is not included in this product. We have e-paper of 2.0 inch and 2.7 inch on sale simultaneously. Go and add the most suitable one to your cart now!

**Model:** [SLD00200P](http://www.seeedstudio.com/depot/small-epaper-shield-p-1597.html)



###  Choose the library

In order to choose the correct library you should know the version of your panel.

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Definition_of_Model_Labels.jpg)

**Pay attention to your panel's label**:

*   if the model name is 'EG020AS012' or 'EM027AS011',then you should choose the old library, please click here [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield).

*   if the model name is 'EG020BS011' or 'EM027BS013',then you should choose the new library,please click here [New Panel Library【EPD_V230】](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/EPDV230.zip).

##  Specifications

*   Compatible board: Arduino Uno/Leonardo/Arduino Mega

*   Operating Voltage: 3.3/5VDC

*   Operating Current(refresh screen):40mA

*   Interface Type: SPI

<font color="Green">
</font>

###  PINs on Arduino

<table >
<tr>
<th> Arduino
</th>
<th> E-paper
</th></tr>
<tr>
<td width="150px"> D2
</td>
<td width="250px"> M_EPD_PANEL_ON﻿
</td></tr>
<tr>
<td> D3
</td>
<td> M_EPD_BORDER﻿
</td></tr>
<tr>
<td> D4
</td>
<td> M_/SD_CS﻿
</td></tr>
<tr>
<td> D5
</td>
<td> M_EPD_PWM﻿
</td></tr>
<tr>
<td> D6
</td>
<td> M_EPD_/RESET﻿
</td></tr>
<tr>
<td> D7
</td>
<td> M_EPD_BUSY﻿
</td></tr>
<tr>
<td> D8
</td>
<td> M_EPD_DISCHARGE﻿
</td></tr>
<tr>
<td> D9
</td>
<td> M_/WORD_STOCK_CS﻿
</td></tr>
<tr>
<td> D10
</td>
<td> M_/EPD_CS﻿
</td></tr>
<tr>
<td> ICSP PORT
</td>
<td> M_MOSI , M_SCK , M_MISO﻿
</td></tr>
<tr>
<td> A0
</td>
<td> M_TEMP_SEN﻿
</td></tr>
<tr>
<td> A1
</td>
<td> M_OE123﻿﻿
</td></tr>
<tr>
<td> A2
</td>
<td> M_CKV﻿
</td></tr>
<tr>
<td> A3
</td>
<td> M_STV_IN﻿
</td></tr>
<tr>
<td> 3.3V
</td>
<td> M_VCC_3V3﻿
</td></tr>
<tr>
<td> 5V
</td>
<td> M_VCC_5V
</td></tr></table>

##  Demonstration

Small e-Paper Shield can display image, a variety of graphics and texts. There are plenty of examples in library that give you some ideas on how to use the module. Now let us experience the strong library and wide viewing angle of e-Paper.

###  Hardware Installation

*   Connect e-Paper to the FFC interface of Small e-Paper Shield.
*   Plug Small e-Paper Shield to Arduino/Seeeduino and connect it to PC using a USB cable.

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/E-Paper_Screen.jpg)

Now it is time to show demos using the library which needs download from [here](https://github.com/Seeed-Studio/ePaper). After downloading, you need put it into the library file of Arduino IDE by the path:...\arduino-1.0.1\libraries.

###  Demo Showing

Here we select the 2.0 inch screen as an example to show its display functions.

####  Demo 1: Display texts

*   Open the code: File -&gt; Examples -&gt; ePaper -&gt; text as show below:

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Text_Code.jpg)

<dl><dd><font color="red">We need to re-emphasize this note:</font>
</dd></dl>
<dl><dd>If you use Arduino UNO, Seeeduino 3.0 and any board that uses Atmega 328P or Atmega32U4 as controller, you should insert an SD card using this demo. The SD card is used to store temporary data because of the little storage space of Atmega328p and Atmega32U4.
</dd><dd>If you use an Arduino Mega, or any other board that uses Atmega1280 or Atmega2560, you don't need to insert an SD card.
</dd></dl>

*   Change the parameter to match your screen size. You need to change 200 to 270 if your screen is 2.7 inch. And you need to do this change when usisng other examples.
<pre>#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270</pre>

*   Upload the code to your microcontroller. Please click [here](https://seeeddoc.github.io/Upload_Code/) if you do not know how to.

*   Now you can see this:

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Display_text.jpg)

*   Try to change the display text and display location. You may learn every function usage.

####  Demo 2: Display graphic

The example: _draw_ will be a good example to display a variety of graphics. You need to open this code: _draw_ like demo 1. Remember the note about whether you need a SD card to complete the demo. Please make sure the SD card is needed or not, depending on your microcontroller type. And change the parameter to match your screen size.

After completing modifications and uploading the code, a beautiful pattern will display on the screen:

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Display_graphic.jpg)

The picture is created by calling the draw graphic functions. You can make your pattern and try it on the screen. Every draw function has a specific description in the reference.

####  Demo 3: Display image

Similar to TFT displays and OLED displays, the small e-Paper Shield supports displaying images.

Now you need to open the image example: File -&gt; Examples -&gt; ePaper -&gt; image.

You need to upload the code to see the result.

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Dispaly_image.jpg)

**Note：As you can see, the default screen size in this "image" sketch is set as 2.7 inch. Please modify the screen size setting in case of improper display.**

<pre>  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 </pre>

Of course, you can change the display image by changing the image's lattice data.

For example, if your e-Paper screen is 2.7 inch, you need to provide the lattice data of 264 X 176 pixel and copy the code to ‘’’static unsigned char image_270[] PROGMEM ={}’’’ in picture.h.
You need to copy the code for a lattice data of a 200x96 pixel to ‘’’static unsigned char image_200[] PROGMEM ={}’’’  when using a 2.0 inch screen.

####  How to Display an Image

Thanks to a contribution by Muchiri John, we got a very useful and easy-to-use tool. With this tool, displaying an image is no longer difficult.

You can download the tool [here](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/EpdImageKit.zip)

![](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/img/Snapshot_epaper_shied_tools.jpg)

##  Reference

Small e-Paper library provides complete software interfaces to exercise the capabilities of e-Paper display. There are  specific description about functions.

###  Function Description

<u>1. void begin(EPD_size sz);</u>

_This function is setup screen size._

*   sz: can be EPD_1_44, EPD_2_0, EPD_2_7.

<u>2. void setDirection(EPD_DIR dir);</u>

_This function is used to set the display direction._

*   dir: can be DIRLEFT,DIRRIGHT,DIRNORMAL,DIRDOWN

<u>3. int drawChar(char c, int x, int y);</u>

_This function can be used to display char._

*   c: the char you want to display.

*   x: the starting X-coordinate of char.

*   y: the starting Y-coordinate of char.

<u>4. int drawString(char *string, int poX, int poY);</u>

_This function can be used to display char._

*   *string: the string you want to display.

*   poX: the starting X-coordinate of string.

*   poY: the starting Y-coordinate of string.

<u>5. int drawNumber(long long_num,int poX, int poY);</u>

_This function can be used to display char._

*   long_num: the long integer data you want to display. The max is

*   poX: the starting X-coordinate of data

*   poY: the starting Y-coordinate of data

<u>6. int drawFloat(float floatNumber,int decimal,int poX, int poY);</u>

_This function can be used to display float number. The display float data is rounding according to the setting decimal place._

*   floatNumber: the float number you want to display.

*   decimal: set the decimal place.

*   poX: the starting X-coordinate of data.

*   poY: the starting Y-coordinate of data.

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_This function can be used to display a Character or a Chinese using unicode. See the page 18 to 24 of the [GT20L16P1Y datasheet](res/GT20L16P1Y_Datasheet.pdf) to find the Char unicode, the characters include Latin、Hebrew、 Thai、Greek、 Kirill and Arabic. The Chinese unicode  can see [GB2312 (Simplified Chinese) character code table](res/Character_code_table.pdf). _

*   uniCode:the machine code according to a character or a chinese.

*   x: the starting X-coordinate.

*   y: the starting Y-coordinate.

Note: the character unicode between 0x0020 to 0x007E can directly input via the keyboard. Such as the display of the character 'G' ,the function can be drawUnicode(0x0047, 3,10) or displayChar ('s',3,10);

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_This function can be used to display several characters and chinese. _

*   *uniCode: a unicode array.

*   len: string length.

*   x: the starting X-coordinate of string.

*   y: the starting Y-coordinate of string.

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_This function can be used to display a line. _

*   x0: the starting X-coordinate of line

*   y0: the starting Y-coordinate of line

*   x1: the end X-coordinate of line

*   y1: the end Y-coordinate of line

<u>10. void drawCircle(int poX, int poY, int r);</u>

_This function can be used to draw a circle. _

*   poX: the X-coordinate of the center

*   poY: the Y-coordinate of the center
*   r: the radius of center

<u>11. void drawHorizontalLine( int poX, int poY, int len);</u>

_This function can be used to draw a horizontal line._

*   poX: the starting X-coordinate of the line.

*   poY: the starting Y-coordinate of the line.

*   len: the length of the line

<u>12. void drawVerticalLine( int poX, int poY, int len);</u>

_This function can be used to draw a vertical line._

*   poX: the starting X-coordinate of the Line.

*   poY: the starting Y-coordinate of the Line.

*   len: the length of the line.

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_This function can be used to draw a rectangle._

*   poX: the starting X-coordinate of the rectangle.

*   poY: the starting Y-coordinate of the rectangle.

*   len: the length of the rectangle.

*   width: the width of the rectangle.

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_This function can be used to draw a fill rectangle._

*   poX: the starting X-coordinate of the rectangle.

*   poY: the starting Y-coordinate of the rectangle.

*   len: the length of the rectangle.

*   width: the width of the rectangle.

<u>15. void fillCircle(int poX, int poY, int r);</u>

_This function can be used to draw a fill circle. _

*   poX: the X-coordinate of the center.

*   poY: the Y-coordinate of the center.

*   r: the radius of center

**Example:**

<pre>
    EPAPER.drawRectangle(10, 10, 100, 80);
    EPAPER.fillCircle(50, 50, 30);
    EPAPER.fillRectangle(50, 65, 50, 20);
    EPAPER.drawCircle(150, 50, 10);
    EPAPER.fillCircle(150, 50, 5);
    EPAPER.drawHorizontalLine(120, 50, 60);
    EPAPER.drawVerticalLine(150, 20, 60);</pre>

<u>16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_This function can be used to draw a triangle. It is formed by three points._

*   poX1(poX2,poX3): the X-coordinate of the triangle one point.

*   poY1(poY2,poY3): the Y-coordinate of the triangle one point.

##  Resources

- **[Eagle]** [Small e-Paper Shield Eagle File](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/Small_e-Paper_Shield_V2.1.zip)
- **[PDF]**[Small e-PaperShield v2.1 pdf](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/Small%20e-PaperShield%20v2.1.pdf)
- **[EAGLE]**[Small e-PaperShield v2.1 SCH](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/Small%20e-PaperShield%20v2.1.sch)
- **[Library]**  [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield)
-  **[Datasheet]** [e-Paper panels Datasheet](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)
-  **[Tool]** [epdImageKit Tool](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/EpdImageKit.zip)
-  **[Library]** [New Panel Library【EPD_V230】](https://github.com/SeeedDocument/Small_e-Paper_Shield/raw/master/res/EPDV230.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>