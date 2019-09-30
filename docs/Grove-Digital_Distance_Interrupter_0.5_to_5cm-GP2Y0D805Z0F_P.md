---
name: Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)(P)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020578
tags: 
---


![](https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/img/main_p.JPG)


Grove - Digital Distance Interrupter 0.5 to 5cm is an infrared distance sensing module based on GP2Y0D805Z0F. Normaly the output of this sensor is 1(High), when the object enters the measurement range of the sensor, it will be triggered and output a 0(LOW).At the same time the on-board LED will light up. As the name suggests, the measurement range is from 0.5cm to 5cm.


There are two types of  Grove - Digital Distance Interrupter 0.5 to 5cm: [Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html)  and Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)(P). For the version without letter P, the lens and the grove interface are at the same side; for the version with letter P, the lens and the grove interface are at the different sides.

GP2Y0D805Z0F is a distance measuring sensor unit, composed of an integrated combination of PD(photo diode) , IRED (infrared emitting diode) and signal processing circuit. The variety of the reflectivity of the object, the environmental temperature and the operating duration are not influenced easily to the distance detection because of adopting the triangulation method. 


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Easy to use
- Integrated indicator LED  
- Digital output


## Specification

|Item|Value|
|---|---|
|Working voltage|3.3v/5v|
|Trigger Range|0.5cm - 5cm |
|Working temperature|-10℃ -- 60℃|



## Applications

- Touch-less switch (Sanitary equipment, Control of illumination, etc.)
- Robot cleaner


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - Digital Distance Interrupter 0.5 to 5cm |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/img/thumbnail_p.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Plug Grove - Digital Distance Interrupter 0.5 to 5cm to port **D2** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/img/connect.jpg)



!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Mech keycap to Seeeduino as below.


| Seeeduino     | Grove - Digital Distance Interrupter 0.5 to 5cm|
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |



#### Software

- **Step 1.** Open the Arduino IDE and create a new file, then copy the following code into the new file.

```c++
/*
 *  
 * Copyright (c) 2018 Seeed Technology Co., Ltd.
 * Website    : www.seeed.cc
 * Author     : downey
 * Create Time: May 2018
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#define SENSOR  2

void setup()
{
	Serial.begin(115200);
	pinMode(SENSOR,INPUT);
}


void loop()
{
	short val=0;
	val=digitalRead(SENSOR);
	Serial.print("val=");
	Serial.println((int)val);
	if(0==val)
	{
		Serial.println("Sensor is triggered!!");
	}
	delay(100);
}

```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 3.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Change the baud rate to **115200**.
if every thing goes well, you will get the output of this module.

The result should be something like that:

```
val=1
val=1
val=1
val=1
val=1
val=1
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=1
val=1
val=1
val=1
```

Normaly the output of this sensor is 1(High), when the object enters the measurement range of the sensor, it will be triggered and output a 0(LOW)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>



## Resources

- **[Zip]** [Grove - Digital Distance Interrupter 0.5 to 5cm eagle file](https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip)
- **[PDF]** [GP2Y0D805Z0F Datasheet](https://github.com/SeeedDocument/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/raw/master/res/GP2Y0D805Z0F.pdf)



## Tech Support
You can submit the issue into our [forum](https://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>