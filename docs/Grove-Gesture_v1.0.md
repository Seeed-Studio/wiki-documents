---
title: Grove - Gesture V1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Gesture-p-2463.html
oldwikiname: Grove - Gesture V1.0
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-gesture-v1
sku: 101020083
---

---
![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/400px-Gesture_sensor_3.png)

The sensor on Grove - Gesture is PAJ7620U2 that integrates gesture recognition function with general I2C interface into a single chip. It can recognize 9 basic gestures ,and these gestures information can be simply accessed via the I2C bus.

Application: You can use Gesture as an input device to control another grove, or a computer, mobile phone, smart car, robot, and more with a simple swipe of your hand.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)

## Features
---
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
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


## Specification
---
|Spec Name|Value|
|---|---|
|Sensor|PAJ7620U2|
|Power supply	 |5V
 |Ambient light immunity	 |< 100k Lux
 |Gesture speed in Normal Mode|	 60°/s to 600°/s
 |Gesture speed in Gaming Mode|	 60°/s to 1200°/s
 |Interface type	 IIC interface |up to 400 kbit/s
 |Operating Temperature	| -40°C to +85°C
 |Dimensions|	20 * 20mm
 |Detection range	|5-10cm

## With Arduino/Seeeduino

Suggest Reading for Starter
- [Download Arduino and install Arduino driver](http://wiki.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver)
- [Getting Started with Seeeduino/Arduino](http://wiki.seeedstudio.com/wiki/Getting_Started_with_Seeeduino)

**Hardware Installation**

Grove products have a eco system and all have a same connector which can plug onto the [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html). Connect this module to the I2C port of Base Shield, however, without Base Shield, you can also connect Grove - Gesture to Arduino directly by jumper wires.

|Arduino UNO|	Base Shield	|Grove - Gesture|
|---|---|---|
|5V	|I2C port|	VCC|
|GND|I2C port	|GND|
|SDA|I2C port	|SDA|
|SCL|I2C port	|SCL|
|Digit 2	|Not connected|	INT (Reserved pad)|

INT：Gesture detection interrupt flag mask. You can connect INT pad to digit 2 of Arduino by using jumper wire.

Below image shows how to plug Grove - Gesture onto the I2C port of Base shield

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/700px-Gesture_install_1.png)

Then plug Base shield onto the Arduino UNO

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/700px-Gesture_install_2.png)


**Gesture Library**

We have created a library to help you start playing quickly with the Seeeduino/Arduino, in this section we'll show you how to set up the library and introduce some of the functions.

Setup

- [Download the library code as a zip file from the Gesture_PAJ7620 github page](https://github.com/Seeed-Studio/Gesture_PAJ7620).
- Unzip the downloaded file into your …/arduino/libraries.
- Rename the unzipped folder "Gesture"(or:"Gesture_PAJ7620")
- Start the Arduino IDE (or restart if it is open).

**Simple Demo**

The following simple demo will show you a very easy application: When you move up, the red led will be turned on, otherwise the red led will be turned off.

```c
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
```

![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/IMG_0029.gif)

**Description of functions**

These are the most important/useful function in the library, we invite you to look at the .h and .cpp files yourself to see all the functions available.

**1.Initialize the gesture sensor chip PAJ7620**

```c
void setup()
{
  paj7620Init();
}
```

This initialization code should be added to each demo.

**2.Read data from PAJ7620 register via I2C**
- paj7620ReadReg(uint8_t addr, uint8_t qty, uint8_t data[])
 - addr: Register address
 - qty: Number of data to read, addr continuously increase.
 - data[]: The starting address(a variable or array) to store data.

```c
 void loop()
 {
 	uint8_t data = 0;  // Read Bank_0_Reg_0x43/0x44 for gesture result.

 	paj7620ReadReg(0x43, 1, &data);  // When different gestures be detected, the variable 'data' will be set to different values by paj7620ReadReg(0x43, 1, &data).

 	if (data == GES_UP_FLAG) 							// When up gesture be detected,the variable 'data' will be set to GES_UP_FLAG.
 		digitalWrite(4, HIGH);   				        // turn the LED on (HIGH is the voltage level)
 	if (data == GES_DOWN_FLAG) 						// When down gesture be detected,the variable 'data' will be set to GES_DOWN_FLAG.
         digitalWrite(4, LOW);   					    // turn the LED off by making the voltage LOW
 }
```
- We define some register data of gesture, refer to the following table.

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


**Gesture Examples/Applications**

These examples are going to show you how to recognize gestures from this Grove - Gesture.]

- Open File->Examples->Gesture(or:Gesture_PAJ7620)->example->paj7620_9gestures sketch for a complete example.

**Description**: This example can recognize 9 gestures and output the result, including move up, move down, move left, move right, move forward, move backward, circle-clockwise, circle-counter clockwise, and wave. You also can use Gesture as an input device to control another grove, or a computer, mobile phone, smart car, robot, and more with a simple swipe of your hand.

!!!Note
    When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). You also can adjust the reaction time according to the actual circumstance.

```
/*
Notice: When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s).
        You also can adjust the reaction time according to the actual circumstance.
*/

#define GES_REACTION_TIME		500	// You can adjust the reaction time according to the actual circumstance.
#define GES_ENTRY_TIME			800	// When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s).
#define GES_QUIT_TIME			1000
```

Following are the main program used in the demo:

```c
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

In your own project, you may need multi-gestures instead of a single gesture to realise one function , welcome to share!

## Resources
---
- [Grove - Gesture_v1.0 sch pcb.zip](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/resources/Grove_-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/resources/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Library Grove - Guesture](https://github.com/Seeed-Studio/Gesture_PAJ7620)
