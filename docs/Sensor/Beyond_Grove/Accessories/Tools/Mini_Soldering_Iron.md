---
title: Mini Soldering Iron
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Mini_Soldering_Iron/
slug: /Mini_Soldering_Iron
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

Mini Soldering Iron is a slender, lightweight, accurate temperature-control and rapid-heating(ambient temperature to 300℃ in 10 seconds) soldering iron with an OLED display, which will be an essential tool in your development kit. It also features its sleeping mode and over-heating notification. In addition, it is easy to assemble and ESD safe (through grounding clamp). The temperature range of this iron is 100 ~ 400 ℃(212 ~ 752 ℉), and It contain two integrated(with heater) and compact soldering tips for different circumstances. You can configuration your setting by USB micro type-B interface.<sup>[1]</sup>

<sup>[1]</sup>This page only show a quicker way and main information to get started. For detailed information, please refer to the manual included.

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|For EU Edision|For US Edision|

##  Features
---
*   Accurate (temperature stability within ± 2%) temperature-control

*   Slender, lightweight iron, no fatigue for long time working

*   Rapid heating up for high efficiency

*   Separate power adapter to be safer for personal safety

*   Grounding clamp to be ESD-free

*   USB micro type-B interface for customizable system setting and firmware update

*   No manual calibration needed

*   Swtichable temperature unit(℃ or ℉)

##  Specification
---
<table>
<tr>
<td>  Screen </td>
<td> OLED
</td></tr>
<tr>
<td>  USB interface </td>
<td> USB micro type-B
</td></tr>
<tr>
<td>  Weight </td>
<td> 33g(power adapter not accounted)
</td></tr>
<tr>
<td>  Power </td>
<td> 65W
</td></tr>
<tr>
<td>  Input voltage(for power adapter) </td>
<td> 100 ~ 240 V
</td></tr>
<tr>
<td>  Temperature range </td>
<td> 100 ~ 400 ℃(212 ~ 752 ℉)
</td></tr>
<tr>
<td>  Impedance from tips to ground </td>
<td> 2 Ω
</td></tr>
<tr>
<td>  Temperatures stability </td>
<td> ± 2%
</td></tr>
<tr>
<td>  Sleep mode temperature  </td>
<td> 200℃(392℉), adjustable
</td></tr></table>

##  Parts list'
---

<table>
<tr>
<th>Parts name   </th>
<th> Quantity
</th></tr>
<tr>
<td> Mini Soldering Iron (main part)   </td>
<td> 1PC
</td></tr>
<tr>
<td> PCB soldering kit </td>
<td> 1PC
</td></tr>
<tr>
<td> Soldering iron tip type-BC2  </td>
<td> 1PC
</td></tr>
<tr>
<td> Soldering iron tip type-B2   </td>
<td> 1PC
</td></tr>
<tr>
<td> Soldering iron holder </td>
<td> 1PC
</td></tr>
<tr>
<td> PCB soldering kit  </td>
<td> 1PC
</td></tr>
<tr>
<td> DC5525 power adapter </td>
<td> 1PC
</td></tr>
<tr>
<td> Earth clamps  </td>
<td> 1PC
</td></tr>
<tr>
<td> Hex key ( and tow backup screws) </td>
<td> 1PC
</td></tr>
<tr>
<td> Manual </td>
<td> 1PC
</td></tr></table>

##  Getting Started
---
**Note:** In this case we show you a general development environmental.
This section shows you how to basic operations with this soldering iron. For more details, please refer to manual included in the package.

###  Exploded view

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
<dl><dd> ①. Solder iron tip fixing screw
</dd><dd> ②. Button A
</dd><dd> ③. Button B
</dd><dd> ④. Set screw
</dd><dd> ⑤. Power port
</dd><dd> ⑥. Micro USB
</dd><dd> ⑦. DC5525 12-24V port
</dd><dd> ⑧. Solder iron tip connection port
</dd><dd> ⑨. Solder iron connection side
</dd><dd> ⑩. Solder iron heating element
</dd></dl>

###  Assemble the soldering iron

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1.  Unscrew the tip setscrew, insert the solder tip into the connection port, and then tighten screw.

2.  Connect the ground wires with the ground set screw.

3.  Connect the DC connector to Mini Soldering Iron, plug the power cord and turn on the device accordingly.

###  Basic operations

**Adjust temperature**

Press buttons to adjust temperatures.

Press button A to enable temperatures-increasing, press button B to enable temperatures-decreasing.

**Calibration**

 1.  Press button B in standby mode (no-heating state) to enter thermometer mode.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2.  Press button B and button A simultaneously to enter thermometer mode. It will execute calibration operation automatically, no manual operation required.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3.  After around 30 seconds, press and hold either button to exit calibration mode.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4.  The left figure shows that auto-calibration succeeds and right figure shows that auto-calibration fails. If auto-calibration fails, repeat previous steps again.


###  A little practice

You can take a quiz for soldering some LEDs and resistors on a leaf-like PCB board which is included in package.

1.  Assemble a soldering iron with steps described above.
2.  Soldering all four LEDs and four resistors on PCB board.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**Note**_ that you have align LEDs in right direction since LEDs is a bipolar components:

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**Note**_ that you need to soldering a electronic component with following basic and fundamental steps:


-  Paste a little solder on soldering spot, and then paste some solder on a certain spot on pins.
-  Join the two spots together with soldering iron.


##  Resources
---
[User manual](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>