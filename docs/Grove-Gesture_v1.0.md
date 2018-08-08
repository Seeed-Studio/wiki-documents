---
title: Grove - Gesture V1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Gesture-p-2463.html
oldwikiname: Grove - Gesture V1.0
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-gesture-v1
sku: 101020083
---

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/400px-Gesture_sensor_3.png)

The sensor on Grove - Gesture is PAJ7620U2 that integrates gesture recognition function with general I2C interface into a single chip. It can recognize 9 basic gestures, and these gestures information can be simply accessed via the I2C bus.

Application: You can use Gesture as an input device to control another grove, or a computer, mobile phone, smart car, robot, and more with a simple swipe of your hand.

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Gesture-p-2463.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Built-in proximity detection
- Various main boards support : Arduino UNO/Seeeduino/Arduino Mega2560
- 9 Basic gestures
	- Up
 	- Down
 	- Left
 	- Right
 	- Forward
 	- Backward
 	- Clockwise
 	- Count Clockwise
 	- Wave

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)


## Specification

|Spec Name|Value|
|---|---|
|Sensor|PAJ7620U2|
|Power supply	 |5V|
|Ambient light immunity	 |< 100k Lux|
|Gesture speed in Normal Mode|	 60°/s to 600°/s|
|Gesture speed in Gaming Mode|	 60°/s to 1200°/s|
|Interface type	 IIC interface |up to 400 kbit/s|
|Operating Temperature	| -40°C to +85°C|
|Dimensions|	20 * 20mmv|
|Detection range	|5-10cm|
|I2C Address|0x73|

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

## Getting started

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Gesture v1.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **Step 2.** Connect Grove-Gesture_v1.0 to port I2C of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Gesture v1.0 to Seeeduino as below.

| Seeeduino   |   Grove-Gesture v1.0     |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


INT：Gesture detection interrupt flag mask. You can connect INT pad to digit 2 of Arduino by using jumper wire.

Below image shows how to plug Grove - Gesture onto the I2C port of Base shield

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/700px-Gesture_install_1.png)

Then plug Base shield onto Seeeduino

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/seeeduino_connection.jpg)

#### Software

- **Step 1.** Download the [library](https://github.com/Seeed-Studio/Gesture_PAJ7620) from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
Software Installation.
- **Step 3.** If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 4.** Start the Arduino IDE, Let's try the up/down demo.
- **Step 5.** Copy below code and paste to arduino IDE.

```c++
/*
The following simple demo will show you a very easy application: When you move up, the red led will be turned on, otherwise the red led will be turned off.
*/
#include <Wire.h>
#include "paj7620.h"

void setup()
{
  paj7620Init();
}

void loop()
{
	uint8_t data = 0;  // Read Bank_0_Reg_0x43/0x44 for gesture result.

	paj7620ReadReg(0x43, 1, &data);  // When different gestures be detected, the variable 'data' will be set to different values by paj7620ReadReg(0x43, 1, &data).

	if (data == GES_UP_FLAG) 	    // When up gesture be detected,the variable 'data' will be set to GES_UP_FLAG.
		digitalWrite(4, HIGH);      // turn the LED on (HIGH is the voltage level)
	if (data == GES_DOWN_FLAG) 	    // When down gesture be detected,the variable 'data' will be set to GES_DOWN_FLAG.
        digitalWrite(4, LOW);       // turn the LED off by making the voltage LOW
}
```

- **Step 6.** Select Seeeduino V4 in board manager and COM port.
- **Step 7.** Click upload and put the hand over the Gesture sensor up and down. You will see the led on and off as below.

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/IMG_0029.gif)

- **Step 8.** Let's try the 9 gestures by select **File->Example->Gesture_PAJ7620->paj7620_9gestures**, then select Seeeduino v4 as board manager and correct COM port. 

```c++
#include <Wire.h>
#include "paj7620.h"

/* 
Notice: When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). 
        You also can adjust the reaction time according to the actual circumstance.
*/
#define GES_REACTION_TIME		500				// You can adjust the reaction time according to the actual circumstance.
#define GES_ENTRY_TIME			800				// When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). 
#define GES_QUIT_TIME			1000

void setup()
{
	uint8_t error = 0;

	Serial.begin(9600);
	Serial.println("\nPAJ7620U2 TEST DEMO: Recognize 9 gestures.");

	error = paj7620Init();			// initialize Paj7620 registers
	if (error) 
	{
		Serial.print("INIT ERROR,CODE:");
		Serial.println(error);
	}
	else
	{
		Serial.println("INIT OK");
	}
	Serial.println("Please input your gestures:\n");
}

void loop()
{
	uint8_t data = 0, data1 = 0, error;
	
	error = paj7620ReadReg(0x43, 1, &data);				// Read Bank_0_Reg_0x43/0x44 for gesture result.
	if (!error) 
	{
		switch (data) 									// When different gestures be detected, the variable 'data' will be set to different values by paj7620ReadReg(0x43, 1, &data).
		{
			case GES_RIGHT_FLAG:
				delay(GES_ENTRY_TIME);
				paj7620ReadReg(0x43, 1, &data);
				if(data == GES_FORWARD_FLAG) 
				{
					Serial.println("Forward");
					delay(GES_QUIT_TIME);
				}
				else if(data == GES_BACKWARD_FLAG) 
				{
					Serial.println("Backward");
					delay(GES_QUIT_TIME);
				}
				else
				{
					Serial.println("Right");
				}          
				break;
			case GES_LEFT_FLAG: 
				delay(GES_ENTRY_TIME);
				paj7620ReadReg(0x43, 1, &data);
				if(data == GES_FORWARD_FLAG) 
				{
					Serial.println("Forward");
					delay(GES_QUIT_TIME);
				}
				else if(data == GES_BACKWARD_FLAG) 
				{
					Serial.println("Backward");
					delay(GES_QUIT_TIME);
				}
				else
				{
					Serial.println("Left");
				}          
				break;
			case GES_UP_FLAG:
				delay(GES_ENTRY_TIME);
				paj7620ReadReg(0x43, 1, &data);
				if(data == GES_FORWARD_FLAG) 
				{
					Serial.println("Forward");
					delay(GES_QUIT_TIME);
				}
				else if(data == GES_BACKWARD_FLAG) 
				{
					Serial.println("Backward");
					delay(GES_QUIT_TIME);
				}
				else
				{
					Serial.println("Up");
				}          
				break;
			case GES_DOWN_FLAG:
				delay(GES_ENTRY_TIME);
				paj7620ReadReg(0x43, 1, &data);
				if(data == GES_FORWARD_FLAG) 
				{
					Serial.println("Forward");
					delay(GES_QUIT_TIME);
				}
				else if(data == GES_BACKWARD_FLAG) 
				{
					Serial.println("Backward");
					delay(GES_QUIT_TIME);
				}
				else
				{
					Serial.println("Down");
				}          
				break;
			case GES_FORWARD_FLAG:
				Serial.println("Forward");
				delay(GES_QUIT_TIME);
				break;
			case GES_BACKWARD_FLAG:		  
				Serial.println("Backward");
				delay(GES_QUIT_TIME);
				break;
			case GES_CLOCKWISE_FLAG:
				Serial.println("Clockwise");
				break;
			case GES_COUNT_CLOCKWISE_FLAG:
				Serial.println("anti-clockwise");
				break;  
			default:
				paj7620ReadReg(0x44, 1, &data1);
				if (data1 == GES_WAVE_FLAG) 
				{
					Serial.println("wave");
				}
				break;
		}
	}
	delay(100);
}
```

- **Step 9.** Click upload and open the Serial Monitor port.
- **Step 10.** This example can recognize 9 gestures and output the result, including move up, move down, move left, move right, move forward, move backward, circle-clockwise, circle-counter clockwise, and wave. Let's try and see COM port output as below.

```c++
PAJ7620U2 TEST DEMO: Recognize 9 gestures.
INIT SENSOR...
Addr0 =20,  Addr1 =76
wake-up finish.
Set up gaming mode.
Paj7620 initialize register finished.
INIT OK
Please input your gestures:

Left
Left
Up
Right
Up
Up
Down
Up
Down
Down
Up
Right
Left
```

!!!Note
    When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). You also can adjust the reaction time according to the actual circumstance.

### Play with raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus |Grove-Gesture_v1.0|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Gesture_v1.0 to **I2C** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![enter image description here](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/rasp_connection.jpg)

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **Step 3.** Excute below commands to use this sensor

```bash
cd ~/GrovePi/Software/Python/grove_gesture_sensor
python3 gesture_value.py  
```

Here is the code of gesture_value.py

```Python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove - Gesture Sensor v1.0(http://www.seeedstudio.com/depot/Grove-Gesture-p-2463.html)
#		
# This example returns a value when a user does an action over the sensor
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import grove_gesture_sensor
import time

g=grove_gesture_sensor.gesture()
g.init()
while True:
	gest=g.return_gesture()
	#Match the gesture
	if gest==g.FORWARD:
		print("FORWARD")
	elif gest==g.BACKWARD:
		print("BACKWARD")
	elif gest==g.RIGHT:
		print("RIGHT")
	elif gest==g.LEFT:
		print("LEFT")
	elif gest==g.UP:
		print("UP")
	elif gest==g.DOWN:
		print("DOWN")
	elif gest==g.CLOCKWISE:
		print("CLOCKWISE")
	elif gest==g.ANTI_CLOCKWISE:
		print("ANTI_CLOCKWISE")
	elif gest==g.WAVE:
		print("WAVE")
	elif gest==0:
		print("-")
	else:
		print("Error")
	time.sleep(.1)
```

- **Step 4.** Here is the screen output.

```c++
pi@raspberrypi:~/Dexter/GrovePi/Software/Python/grove_gesture_sensor $ python3 gesture_value.py 
wake-up finish.
Paj7620 initialize register finished.

-
-
DOWN
-
-
LEFT
-
-
-
-
UP
-
-
-
-
RIGHT
-
-
UP
-
-
CLOCKWISE
-
-
CLOCKWISE
```


## References
We define some register data of gesture, refer to the following table.

|Gesture|	Register Data|	Register Address|	If Yes|	If Not|
|----|---|---|---|---|
|Up	|data==GES_UP_FLAG|	0x43	|Gesture detected	|No gesture detected|
|Down|	data==GES_DOWN_FLAG|0x43	|Gesture detected	|No gesture detected|
|Left|	data==GES_LEFT_FLAG|0x43	|Gesture detected	|No gesture detected|
|Right|	data==GES_RIGHT_FLAG|0x43	|Gesture detected	|No gesture detected|
|Forward	|data==GES_FORWARD_FLAG|0x43	|Gesture detected	|No gesture detected|
|Backward|	data==GES_BACKWARD_FLAG|0x43	|Gesture detected	|No gesture detected|
|Clockwise|	data==GES_CLOCKWISE_FLAG|0x43	|Gesture detected	|No gesture detected|
|Count Clockwise	|data==GES_COUNT_CLOCKWISE_FLAG|0x43	|Gesture detected	|No gesture detected|
|Wave|	data==GES_WAVE_FLAG|	0x44|Gesture detected	|No gesture detected|


## Resources

- **[ZIP]** [Grove - Gesture_v1.0 sch pcb.zip](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/resources/Grove_-_Gesture_v1.0_sch_pcb.zip)
- **[Datasheet]** [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/resources/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- **[Library]** [Library Grove - Guesture](https://github.com/Seeed-Studio/Gesture_PAJ7620)

## Project

**Upcycling Workshop at Seeed x.factory [Episode 1]**: Last weekend, we had an amazing upcycling hacking workshop with 20 makers, designers, and engineers from the community gathering at x.factory (I even listed it as my favorite workshop!). 

[![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/hacker.io.gif)](https://blog.hackster.io/upcycling-workshop-at-seeed-x-factory-episode-1-4f2d5a61f5ad)

**Jesty - Control your PC with Gestures**: Control a PC with a gesture sensor, associating a key or a mouse click to each gesture.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Momy93/jesty-control-your-pc-with-gestures-5d4a3e/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
