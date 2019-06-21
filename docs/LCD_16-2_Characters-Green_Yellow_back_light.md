---
name: LCD 16*2 Characters- Green Yellow back light
category: MakerPro
bzurl: https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164
oldwikiname:  LCD 16*2 Characters- Green Yellow back light
prodimagename:  lcd1621n.jpg
surveyurl: https://www.research.net/r/LCD_16-2_Characters-Green_Yellow_back_light
sku:     104990001
---
![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

##   Cautions
---
1.  The LCD panel is made by glass. Any mechanical shock (eg. dropping from high place) will damage the LCD module.

2.  Do not add excessive force on the surface of the display, which may cause the Display color change abnormally.

3.  The polarizer on the LCD is easily get scratched. If possible, do not remove the lCD protective film until the last step of installation.

4.  Never attempt to disassemble or rework the LCD module.

5.  Only Clean the LCD with Isopropyl Alcohol or Ethyl Alcohol. Other solvents(eg.water) may damage the LCD.

6.  When mounting the LCD module, make sure that it is free form twisting, warping and distortion.

7.  Ensure to provide enough space(with cushion) between case and LCD panel to prevent external force adding on it, or it may cause damage to the LCD or degrade the display result.

8.  Only hold the lCD module by its side. Never hold LCD module by add force on the heat seal ot TAB.

9.  Never add force to component of the LCD module. It may cause invisible damage or degrade of the reliability.

10.  LCD module could be easily damaged by static electricity. Be careful to maintain an optimum anti-static work environment to protect the LCD module.

11.  When peeling off the protective film from LCD, static charge may cause abnormal display pattern. It is normal and will resume to nomal in a short while.

12.  Take care and prevent get hurt by the LCD panel sharp edge.

13.  Never operate the LCD module exceed the absolute maximum ratings.

14.  Keep the signal line as short as possible to prevent noisy signal applying to LCD module.

15.  Never apply signal to the LCD module without power supply.

16.  IC chip(eg. TAB or COG) is sensitive to the light. Strong lighting environment could possibly cause malfunction. Light sealing structure casing is recommend.

17.  LCD module reliability may be reduced by temperature shock.

18.  When storing the lCD module, avoid exposure to the direct sunlight, high humidity, high temperature or low temperature. They may damage or degrade the LCD module.

##   Schematic
---
###   Block Diagram

![](https://github.com/SeeedDocument/LCD_16-2_Characters-Green_Yellow_back_light/raw/master/img/LCD-wbl-block-162.JPG)

##   Specification
---
*   LCD Display Mode: STN, Positive, Transflective

*   Display Color: Deep Blue/ Yellow Green

*   Viewing Angle: 6H

*   Driving Method : 1/16 duty, 1/5 bias

*   Back Light : Yellow-Green LED backlight

*   Outline Dimension: 80*36*15.8 MAX

!!!Note
    1.  Color tone may slightly change by Temperature and Driving Condition.
    2.  The Color is defined as the inactive/background color

###   AC Characteristics

V<sub>ss</sub>=0V,V<sub>DD</sub>=5V,T<sub>OP</sub>=25℃

<table>
<tr>
<th>Item
</th>
<th>Symbol
</th>
<th>MIN
</th>
<th>TYP
</th>
<th>MAX
</th>
<th>Unit
</th></tr>
<tr>
<td width="200px">E cycle time
</td>
<td width="100px">tc
</td>
<td width="100px">1500
</td>
<td width="100px"> -
</td>
<td width="100px"> -
</td>
<td width="100px">ns
</td></tr>
<tr>
<td>E high level width
</td>
<td>twh
</td>
<td>700
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>E low level width
</td>
<td>twl
</td>
<td>700
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>E rise time
</td>
<td>tr
</td>
<td> -
</td>
<td> -
</td>
<td>18
</td>
<td>ns
</td></tr>
<tr>
<td>E fall time
</td>
<td>tf
</td>
<td> -
</td>
<td> -
</td>
<td>18
</td>
<td>ns
</td></tr>
<tr>
<td>Address set-up time
</td>
<td>tas
</td>
<td>5
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Address set-up time
</td>
<td>tasu
</td>
<td>210
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Address hold time
</td>
<td>tah
</td>
<td>15
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Data set-up time
</td>
<td>tdsw
</td>
<td>300
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Data delay time
</td>
<td>td
</td>
<td> -
</td>
<td> -
</td>
<td> 480
</td>
<td>ns
</td></tr>
<tr>
<td>Data hold time(write)
</td>
<td>tdhw
</td>
<td>15
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Data hold time(read)
</td>
<td>tdhr
</td>
<td>30
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr></table>
<table >
<tr>
<td>![](https://github.com/SeeedDocument/LCD_16-2_Characters-Green_Yellow_back_light/raw/master/img/LCD-module-WTiming.jpg)
</td>
<td>![](https://github.com/SeeedDocument/LCD_16-2_Characters-Green_Yellow_back_light/raw/master/img/LCD-module-RTiming.jpg)
</td></tr>
<tr>
<td>**Host Writing Timing Diagram**
</td>
<td>**Host Read Timing Diagram**
</td></tr></table>

##   Pin definition and Rating
---
<table>
<tr>
<th>Pin No
</th>
<th>Pin Name
</th>
<th>I/O
</th>
<th>Descriptions
</th></tr>
<tr>
<td width="100px">1
</td>
<td width="100px">VSS
</td>
<td width="100px">Power
</td>
<td width="500px">Negative Power supply, Ground(0V)
</td></tr>
<tr>
<td>2
</td>
<td>VDD
</td>
<td>Power
</td>
<td>Positive power supply
</td></tr>
<tr>
<td>3
</td>
<td>V0
</td>
<td>Power
</td>
<td>LCD contrast reference
</td></tr>
<tr>
<td>4
</td>
<td>RS
</td>
<td>Input
</td>
<td>

*   RS=HIGH:DB0-DB7=Display RAM data

*   RS=LOW:DB0-DB7=Instruction data
</td></tr>
<tr>
<td>5
</td>
<td>R/W
</td>
<td>Input
</td>
<td rowspan="2">

In read mode

R/W=HIGH

Data read form the LCD module,

data appears at DB0-DB7 and can be read by the host while, E=H and the device is being selected

In write mode

R/W=LOW;

Data write to the LCD module,

data appears at DB0-DB7 will be written into the LCD module at E=H-&gt;L and device is being selected.

</td></tr>
<tr>
<td>6
</td>
<td>E
</td>
<td>Input
</td></tr>
<tr>
<td>7
</td>
<td>DB0
</td>
<td>I/O
</td>
<td rowspan="3">Data bus;

Three state I/O terminal for display data or instruction data

</td></tr>
<tr>
<td>..
</td>
<td>..
</td>
<td>..
</td></tr>
<tr>
<td>14
</td>
<td>DB7
</td>
<td>I/O
</td></tr>
<tr>
<td>15
</td>
<td>CS1
</td>
<td>input
</td>
<td>Chip Selection,

When CS1=1(*1)

Enable access to the Left Side (64column) of the LCD module

</td></tr>
<tr>
<td>16
</td>
<td>CS2
</td>
<td>Input
</td>
<td>Chip Selection,

When CS2=1(*1)

Enable access to the Right Side (64column) of the LCD module

</td></tr>
<tr>
<td>17
</td>
<td> /RST
</td>
<td>Input
</td>
<td>Reset signal

/RST = L,

Display off

display start line register becomes 0

no command or instruction data could be accepted

/RST = H

Normal running

</td></tr>
<tr>
<td>18
</td>
<td>VOUT
</td>
<td>Output
</td>
<td>Power Booster output for V0
</td></tr>
<tr>
<td>19
</td>
<td>BLA
</td>
<td>Power
</td>
<td>Positive Power for LED backlight
</td></tr>
<tr>
<td>20
</td>
<td>BLK
</td>
<td>Power
</td>
<td>Negative Power for LED backlight
</td></tr></table>

Note:

Display or instruction data could write into the LCD mudule's driver/controllers individually or at the same time.

Only read display or instruction data form one of the driver/controller in the LCD module at a time, otherwise unexpected data collision may occur.

##   Mechanic Dimensions
---
Outline Dimension:98.0*60.0*13.7MAX
(See attached outline Drawing for details)

##   Usage
---
###   Internal Registers

There are three registers in each section of LCD module. Each of them could be controlled independently.

**Page(X) Address Register**

X address register designates pages of the internal display data RAM. Count function is not available. The address should set by instruction.

**Column(Y) Address Counter**

Y address counter designates address of the internal display data RAM. It could be set by instruction and is increased by 1 automatically by read or write display data operations.

**Display Start Line (Z) Register**

Z address register indicates of display data RAM to LCD top line. It may be used for scrolling display pattern on the LCD.

###   Programming
---
**Basic Setting**

To drive the LCD module correctly and provide normally display, please use the following setting

*   Display start line(Z address )=0

*   LCD Display = on

!!!Note
    1.  These setting/commands should issue to the LCD module while start up.
    2.  See the Display Commands section for details.

**Adjusting the LCD display contrast**

A Variable-Resistor must be connected to the LCD module for providing a reference to V0. Adjusting the VR will result the change of LCD display contrast. The recommended value of VR is 25k to 50k.

![](https://github.com/SeeedDocument/LCD_16-2_Characters-Green_Yellow_back_light/raw/master/img/VFD-lcd-module-162.JPG)

**Resetting the LCD module**

The LCD module should be initialized by setting /RST terminal at low level when turning the power on.

When /RST pull low, the LCD mudule will:

*   Display off

*   Display start line register becomes 0. (Z-address=0)

While /RST is low, no instruction can be accepted except status read. Therefore, execute other instructions after making sure that DB4=0(cleat /RST) and DB7=0(ready) by status read instruction. The conditions of power supply at initial power up are as follow:

<table >
<tr>
<th>Item
</th>
<th>Symbol
</th>
<th>Min
</th>
<th>Tpy
</th>
<th>Max
</th>
<th>Unit
</th></tr>
<tr>
<td width="200px">Reset time
</td>
<td width="100px">trs
</td>
<td width="100px">2.0
</td>
<td width="100px"> -
</td>
<td width="100px"> -
</td>
<td width="100px"> us
</td></tr>
<tr>
<td>Rise time
</td>
<td>tr
</td>
<td> -
</td>
<td> -
</td>
<td>150
</td>
<td>ns
</td></tr></table>

![](https://github.com/SeeedDocument/LCD_16-2_Characters-Green_Yellow_back_light/raw/master/img/VFD-lcd-module-trtx.jpg)


##   Resources

*   [Datasheet](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>