---
name: Grove - Circular LED
category: Display
bzurl: https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html
oldwikiname:  Grove - Circular LED
prodimagename: Circular_LED.jpg
surveyurl: https://www.research.net/r/Grove_Circular_LED
sku:  104030013
---
![](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/img/Circular_LED.jpg)
This is a unique ring– it has a florid body with 24 controllable LEDs. Maybe it will drive the inspiration out of you to make a glowing magic ring! There is a 1*1 square hollow-out in the middle of this module, where you can place a Grove Encoder in and make it a rotary visual encoder!

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)

##   Features
---
*   Circular shape
*   24 LEDs, about 5.5 mA drive current for each channel.
*   Controllable LEDs with florid effects
*   Grove Interface.

##   Schematic
---
![](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/img/Circular_LED_schmatic.jpg)

##   Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Voltage
</th>
<td> 4.5
</td>
<td> 5
</td>
<td> 5.5
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Current
</th>
<td> /
</td>
<td> 5.5 for each LED
</td>
<td>
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Dimension
</th>
<td colspan="3"> Ring Form:4.5 diameter
</td>
<td> mm
</td></tr>
<tr>
<th scope="row"> Net Weight
</th>
<td colspan="3"> 12
</td>
<td> g
</td></tr></table>

##   Interface
---
![](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/img/Circular_LED_Interface.jpg)

##   Getting Started

**Materials required**


| Seeeduino V4.2 | Base Shield |Grove - Circular LED|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/img/Circular_LED_S.jpg)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|



>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


### Hardware Connection


- **Step 1.** Connect the Grove - Circular LED with the **D6** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.




!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Circular LED to Seeeduino as below.

| Seeeduino       | Grove - Circular LED |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D7           | White                   |
| D6           | Yellow                  |


### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

- **Step 1.** Download the  [Grove - LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar) from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Open **Arduino IDE -> File -> Examples -> Grove_LED_Bar -> BasicControl**
- **Step 4.** Uncomment the **define MY9221_LED_NUM 24** and comment **#define MY9221_LED_NUM 10** as below. 

```
//#define MY9221_LED_NUM 10
#define MY9221_LED_NUM 24
```

- **Step 5.** Upload the example to Arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 6.** You can see the led is running from .C, 23 and AB repeatly.


### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Circular LED to port D5 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Circular_LED/master/img/cc_Circular_LED.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will see the LED run in the circular.

##   Source
---
- [CircularLED Library](https://github.com/Seeed-Studio/Grove_LED_Bar)

- [Grove Circular LED schematics PDF File](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/res/Circular_LED_v0.9b.pdf)

- [Grove-circular LED eagle files](https://github.com/SeeedDocument/Grove-Circular_LED/raw/master/res/Grove-circular_LED_eagle_files.zip)

- [Codecraft CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Circular_LED/master/res/Grove_Circular_LED_CDC_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>