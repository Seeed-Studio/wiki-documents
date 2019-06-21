---
name: Rainbowduino Extension Board v0.9b
category: Discontinued
bzurl:
oldwikiname: Rainbowduino_Extension_Board_v0.9b
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Rainbowduino_Extension_Board_v0-9b
sku:
tags:

---

![](https://github.com/SeeedDocument/Rainbowduino_Extension_Board_v0.9b/raw/master/img/Rainbowshield.jpg)

Rainbowduino Extension Shield is a breakout board of Rainbowduino’s 192 separate LED driving channels. The channels are divided into three 8*8 arrays: red, green and blue for easier controlling, it is designed to ease customized LED projects based on Rainbowduino.

<font color="red" size="3">NOTE: To drive Rainbowduino Extension Board, you may also need a [Rainbowduino](http://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133) .</font>

**Model: [INT111A4M](http://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)**


##   Features  

*   60.33mm×180.61mm(3 multiple of Rainbowduino’s size)

*   Can drive 192 separate LEDs

*   No extra junctions needed

*   Direct plug in Rainbowduino

*   8×24 LED matrix

*   drive Ext LEDs

##   Application Ideas  

*   design your own pattern

*   create scroll message

##   Cautions  

Remember that the LED’s positive must be connected to the octagonal pad. The extension board’s quadrate pin should be plugged to the first pin rabbet. On the contrary, the LEDs will not shine, neither damaged.

##   Usage  

Rainbowduino Extension Shield is the breakout board of Rainbowduino, It can easily control 192(8×24) LEDs. It can also solder LEDs out of board. LED is upwards, and its back is the place to solder the pins.

###   Hardware Installation  

*   1.solder pin headers and LED correctly
*   2.plug in Rainbowduino

###   Programming  

The Demo code for details is linked **here**, please look it up if needed.

###   Example  

Rainbowduino Extension Shield is used to bright the LEDs in different patterns. The code below is able to control G10 and R31 to shine gradually as an example. You can change the style simply by modifying the parameter value of dots_color array. The first element can choose the matrix in different color; the last two parameters are used to define which one need to shine in row &amp; column value.
```
void _main(void)
{
  _init();
  unsigned char i=0;
  for(;;)
  {
    dots_color[0][0][0]=i<<4;//high 4bit G8 dot
    dots_color[1][0][3]=i&0x0f;//low 4bit R1 dot
    i++;
    delay(100);
  }
}
```
The effect is:

![](https://github.com/SeeedDocument/Rainbowduino_Extension_Board_v0.9b/raw/master/img/Rainbowduino-extension-exam1.jpg)

Actually 1 byte is used to control two LEDs, the theory for details is as follows:
```
unsigned char dots_color[3][8][4]=
{
//=====================================================
  {//green debug
    {0x00,0x00,0x00,0x00},//G8,G7,G6,G5,G4,G3,G2,G1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G16,G15,G14,G13,G12,G11,G10,G9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G24,G23,G22,G21,G20,G19,G18,G17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G32,G31,G30,G29,G28,G27,G26,G25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G40,G39,G38,G37,G36,G35,G34,G33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G48,G47,G46,G45,G44,G43,G42,G41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G56,G55,G54,G53,G52,G51,G50,G49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //G64,G63,G62,G61,G60,G59,G58,G57  every dot has 4 bit color
},
//=======================================================
  {//red debug
    {0x00,0x00,0x00,0x00},//R8,R7,R6,R5,R4,R3,R2,R1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R16,R15,R14,R13,R12,R11,R10,R9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R24,R23,R22,R21,R20,R19,R18,R17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R32,R31,R30,R29,R28,R27,R26,R25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R40,R39,R38,R37,R36,R35,R34,R33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R48,R47,R46,R45,R44,R43,R42,R41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R56,R55,R54,R53,R52,R51,R50,R49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //R64,R63,R62,R61,R60,R59,R58,R57  every dot has 4 bit color
  },
//======================================================
  {//blue debug
    {0x00,0x00,0x00,0x00},//B8,B7,B6,B5,B4,B3,B2,B1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B16,B15,B14,B13,B12,B11,B10,B9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B24,B23,B22,B21,B20,B19,B18,B17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B32,B31,B30,B29,B28,B27,B26,B25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B40,B39,B38,B37,B36,B35,B34,B33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B48,B47,B46,B45,B44,B43,B42,B41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B56,B55,B54,B53,B52,B51,B50,B49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //B64,B63,B62,B61,B60,B59,B58,B57  every dot has 4 bit color
},
};
```

Another effect picture displayed as the character RGB here, and the code for details is linked on the depot page.

![](https://github.com/SeeedDocument/Rainbowduino_Extension_Board_v0.9b/raw/master/img/Rainbowduino-extension-exam2.jpg)

##   Resources  

- **[Datasheet]** [Datasheet](http://www.seeedstudio.com/depot/datasheet/Rainbowduino_Extension_Shield_v0.9b.pdf)

##   Support  

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Version Tracker  

<table>
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td width="300px"> v0.9b
</td>
<td width="500px"> Initial public release
</td>
<td width="200px"> Sept 23, 2010
</td></tr></table>

##   Additional Idea  

The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

##   How to buy  

Click here to buy: [http://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177](http://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177).

##   See Also  

LEDs for the extension board, please check out here: **http://www.seeedstudio.com/depot/optoelectronics-discrete-led-c-93_94.html**

##   Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>