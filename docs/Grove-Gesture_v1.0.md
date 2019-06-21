---
name: Grove - Gesture V1.0
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

<iframe width="800" height="450" src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Gesture-p-2463.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Gesture to I2C port, and connect a Grove - Red LED to port D4 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Gesture_V_1.0/master/img/cc_Gesture.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, the LED will lights up when you make an up gesture, and it will be blacks out when you make a down gesture.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Gesture Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/45d_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|



- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the gesture sensor to the **I^2^C** port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/Gesture_Hat.jpg)



#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python3 grove_gesture_sensor.py 

```

Following is the grove_gesture_sensor.py  code.

```python

import time,sys
import RPi.GPIO as GPIO
from grove.i2c import Bus

# use the bus that matches your raspi version
rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = Bus(1)
else:
    bus = Bus(0)

class gesture:
	#Registers and variables for the gesture sensor
	GES_REACTION_TIME		=.500				# You can adjust the reaction time according to the actual circumstance.
	GES_ENTRY_TIME			=.800				# When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). 
	GES_QUIT_TIME			=1.000
	
	BANK0 = 0
	BANK1 = 1
	
	PAJ7620_ADDR_BASE =0x00

	#REGISTER BANK SELECT
	PAJ7620_REGITER_BANK_SEL		=(PAJ7620_ADDR_BASE + 0xEF)	#W

	#DEVICE ID
	PAJ7620_ID  =0x73

	#REGISTER BANK 0
	PAJ7620_ADDR_SUSPEND_CMD		=(PAJ7620_ADDR_BASE + 0x3)	#W
	PAJ7620_ADDR_GES_PS_DET_MASK_0	=(PAJ7620_ADDR_BASE + 0x41)	#RW
	PAJ7620_ADDR_GES_PS_DET_MASK_1	=(PAJ7620_ADDR_BASE + 0x42)	#RW
	PAJ7620_ADDR_GES_PS_DET_FLAG_0	=(PAJ7620_ADDR_BASE + 0x43)	#R
	PAJ7620_ADDR_GES_PS_DET_FLAG_1	=(PAJ7620_ADDR_BASE + 0x44)	#R
	PAJ7620_ADDR_STATE_INDICATOR	=(PAJ7620_ADDR_BASE + 0x45)	#R
	PAJ7620_ADDR_PS_HIGH_THRESHOLD	=(PAJ7620_ADDR_BASE + 0x69)	#RW
	PAJ7620_ADDR_PS_LOW_THRESHOLD	=(PAJ7620_ADDR_BASE + 0x6A)	#RW
	PAJ7620_ADDR_PS_APPROACH_STATE	=(PAJ7620_ADDR_BASE + 0x6B)	#R
	PAJ7620_ADDR_PS_RAW_DATA		=(PAJ7620_ADDR_BASE + 0x6C)	#R
                                    
	#REGISTER BANK 1                
	PAJ7620_ADDR_PS_GAIN			=(PAJ7620_ADDR_BASE + 0x44)	#RW
	PAJ7620_ADDR_IDLE_S1_STEP_0		=(PAJ7620_ADDR_BASE + 0x67)	#RW
	PAJ7620_ADDR_IDLE_S1_STEP_1		=(PAJ7620_ADDR_BASE + 0x68)	#RW
	PAJ7620_ADDR_IDLE_S2_STEP_0		=(PAJ7620_ADDR_BASE + 0x69)	#RW
	PAJ7620_ADDR_IDLE_S2_STEP_1		=(PAJ7620_ADDR_BASE + 0x6A)	#RW
	PAJ7620_ADDR_OP_TO_S1_STEP_0	=(PAJ7620_ADDR_BASE + 0x6B)	#RW
	PAJ7620_ADDR_OP_TO_S1_STEP_1	=(PAJ7620_ADDR_BASE + 0x6C)	#RW
	PAJ7620_ADDR_OP_TO_S2_STEP_0	=(PAJ7620_ADDR_BASE + 0x6D)	#RW
	PAJ7620_ADDR_OP_TO_S2_STEP_1	=(PAJ7620_ADDR_BASE + 0x6E)	#RW
	PAJ7620_ADDR_OPERATION_ENABLE	=(PAJ7620_ADDR_BASE + 0x72)	#RW

	#PAJ7620_REGITER_BANK_SEL
	PAJ7620_BANK0=0
	PAJ7620_BANK1=1
	
	#PAJ7620_ADDR_SUSPEND_CMD
	PAJ7620_I2C_WAKEUP	=1
	PAJ7620_I2C_SUSPEND	=0
	
	#PAJ7620_ADDR_OPERATION_ENABLE
	PAJ7620_ENABLE=1
	PAJ7620_DISABLE=0
	
	#ADC, delete
	REG_ADDR_RESULT = 0x00
	REG_ADDR_ALERT  = 0x01
	REG_ADDR_CONFIG = 0x02
	REG_ADDR_LIMITL = 0x03
	REG_ADDR_LIMITH = 0x04
	REG_ADDR_HYST   = 0x05
	REG_ADDR_CONVL  = 0x06
	REG_ADDR_CONVH  = 0x07

	GES_RIGHT_FLAG				=1<<0
	GES_LEFT_FLAG				=1<<1
	GES_UP_FLAG					=1<<2
	GES_DOWN_FLAG				=1<<3
	GES_FORWARD_FLAG			=1<<4
	GES_BACKWARD_FLAG			=1<<5
	GES_CLOCKWISE_FLAG			=1<<6
	GES_COUNT_CLOCKWISE_FLAG	=1<<7
	GES_WAVE_FLAG				=1<<0
	
	#Gesture output
	FORWARD 		= 1
	BACKWARD 		= 2
	RIGHT			= 3
	LEFT			= 4
	UP				= 5
	DOWN			= 6
	CLOCKWISE		= 7
	ANTI_CLOCKWISE	= 8
	WAVE			= 9
	
	#Initial register state
	initRegisterArray=(	[0xEF,0x00],
						[0x32,0x29],
						[0x33,0x01],
						[0x34,0x00],
						[0x35,0x01],
						[0x36,0x00],
						[0x37,0x07],
						[0x38,0x17],
						[0x39,0x06],
						[0x3A,0x12],
						[0x3F,0x00],
						[0x40,0x02],
						[0x41,0xFF],
						[0x42,0x01],
						[0x46,0x2D],
						[0x47,0x0F],
						[0x48,0x3C],
						[0x49,0x00],
						[0x4A,0x1E],
						[0x4B,0x00],
						[0x4C,0x20],
						[0x4D,0x00],
						[0x4E,0x1A],
						[0x4F,0x14],
						[0x50,0x00],
						[0x51,0x10],
						[0x52,0x00],
						[0x5C,0x02],
						[0x5D,0x00],
						[0x5E,0x10],
						[0x5F,0x3F],
						[0x60,0x27],
						[0x61,0x28],
						[0x62,0x00],
						[0x63,0x03],
						[0x64,0xF7],
						[0x65,0x03],
						[0x66,0xD9],
						[0x67,0x03],
						[0x68,0x01],
						[0x69,0xC8],
						[0x6A,0x40],
						[0x6D,0x04],
						[0x6E,0x00],
						[0x6F,0x00],
						[0x70,0x80],
						[0x71,0x00],
						[0x72,0x00],
						[0x73,0x00],
						[0x74,0xF0],
						[0x75,0x00],
						[0x80,0x42],
						[0x81,0x44],
						[0x82,0x04],
						[0x83,0x20],
						[0x84,0x20],
						[0x85,0x00],
						[0x86,0x10],
						[0x87,0x00],
						[0x88,0x05],
						[0x89,0x18],
						[0x8A,0x10],
						[0x8B,0x01],
						[0x8C,0x37],
						[0x8D,0x00],
						[0x8E,0xF0],
						[0x8F,0x81],
						[0x90,0x06],
						[0x91,0x06],
						[0x92,0x1E],
						[0x93,0x0D],
						[0x94,0x0A],
						[0x95,0x0A],
						[0x96,0x0C],
						[0x97,0x05],
						[0x98,0x0A],
						[0x99,0x41],
						[0x9A,0x14],
						[0x9B,0x0A],
						[0x9C,0x3F],
						[0x9D,0x33],
						[0x9E,0xAE],
						[0x9F,0xF9],
						[0xA0,0x48],
						[0xA1,0x13],
						[0xA2,0x10],
						[0xA3,0x08],
						[0xA4,0x30],
						[0xA5,0x19],
						[0xA6,0x10],
						[0xA7,0x08],
						[0xA8,0x24],
						[0xA9,0x04],
						[0xAA,0x1E],
						[0xAB,0x1E],
						[0xCC,0x19],
						[0xCD,0x0B],
						[0xCE,0x13],
						[0xCF,0x64],
						[0xD0,0x21],
						[0xD1,0x0F],
						[0xD2,0x88],
						[0xE0,0x01],
						[0xE1,0x04],
						[0xE2,0x41],
						[0xE3,0xD6],
						[0xE4,0x00],
						[0xE5,0x0C],
						[0xE6,0x0A],
						[0xE7,0x00],
						[0xE8,0x00],
						[0xE9,0x00],
						[0xEE,0x07],
						[0xEF,0x01],
						[0x00,0x1E],
						[0x01,0x1E],
						[0x02,0x0F],
						[0x03,0x10],
						[0x04,0x02],
						[0x05,0x00],
						[0x06,0xB0],
						[0x07,0x04],
						[0x08,0x0D],
						[0x09,0x0E],
						[0x0A,0x9C],
						[0x0B,0x04],
						[0x0C,0x05],
						[0x0D,0x0F],
						[0x0E,0x02],
						[0x0F,0x12],
						[0x10,0x02],
						[0x11,0x02],
						[0x12,0x00],
						[0x13,0x01],
						[0x14,0x05],
						[0x15,0x07],
						[0x16,0x05],
						[0x17,0x07],
						[0x18,0x01],
						[0x19,0x04],
						[0x1A,0x05],
						[0x1B,0x0C],
						[0x1C,0x2A],
						[0x1D,0x01],
						[0x1E,0x00],
						[0x21,0x00],
						[0x22,0x00],
						[0x23,0x00],
						[0x25,0x01],
						[0x26,0x00],
						[0x27,0x39],
						[0x28,0x7F],
						[0x29,0x08],
						[0x30,0x03],
						[0x31,0x00],
						[0x32,0x1A],
						[0x33,0x1A],
						[0x34,0x07],
						[0x35,0x07],
						[0x36,0x01],
						[0x37,0xFF],
						[0x38,0x36],
						[0x39,0x07],
						[0x3A,0x00],
						[0x3E,0xFF],
						[0x3F,0x00],
						[0x40,0x77],
						[0x41,0x40],
						[0x42,0x00],
						[0x43,0x30],
						[0x44,0xA0],
						[0x45,0x5C],
						[0x46,0x00],
						[0x47,0x00],
						[0x48,0x58],
						[0x4A,0x1E],
						[0x4B,0x1E],
						[0x4C,0x00],
						[0x4D,0x00],
						[0x4E,0xA0],
						[0x4F,0x80],
						[0x50,0x00],
						[0x51,0x00],
						[0x52,0x00],
						[0x53,0x00],
						[0x54,0x00],
						[0x57,0x80],
						[0x59,0x10],
						[0x5A,0x08],
						[0x5B,0x94],
						[0x5C,0xE8],
						[0x5D,0x08],
						[0x5E,0x3D],
						[0x5F,0x99],
						[0x60,0x45],
						[0x61,0x40],
						[0x63,0x2D],
						[0x64,0x02],
						[0x65,0x96],
						[0x66,0x00],
						[0x67,0x97],
						[0x68,0x01],
						[0x69,0xCD],
						[0x6A,0x01],
						[0x6B,0xB0],
						[0x6C,0x04],
						[0x6D,0x2C],
						[0x6E,0x01],
						[0x6F,0x32],
						[0x71,0x00],
						[0x72,0x01],
						[0x73,0x35],
						[0x74,0x00],
						[0x75,0x33],
						[0x76,0x31],
						[0x77,0x01],
						[0x7C,0x84],
						[0x7D,0x03],
						[0x7E,0x01])

	#Enable debug message
	debug=0
	
	#Initialize the sensors
	def init(self):
		time.sleep(.001)
		self.paj7620SelectBank(self.BANK0)
		self.paj7620SelectBank(self.BANK0)
		
		data0 = self.paj7620ReadReg(0, 1)[0]
		data1 = self.paj7620ReadReg(1, 1)[0]
		if self.debug:
			print("data0:",data0,"data1:",data1)
		if data0 != 0x20  :#or data1 <> 0x76:
			print("Error with sensor")
			#return 0xff
		if data0 == 0x20:
			print("wake-up finish.")
			
		for i in range(len(self.initRegisterArray)):
			self.paj7620WriteReg(self.initRegisterArray[i][0],self.initRegisterArray[i][1])
		
		self.paj7620SelectBank(self.BANK0)
		
		print("Paj7620 initialize register finished.")
		
	#Write a byte to a register on the Gesture sensor
	def paj7620WriteReg(self,addr,cmd):
		bus.write_word_data(self.PAJ7620_ID, addr, cmd)
		
	#Select a register bank on the Gesture Sensor
	def paj7620SelectBank(self,bank):
		if bank==self.BANK0:
			self.paj7620WriteReg(self.PAJ7620_REGITER_BANK_SEL, self.PAJ7620_BANK0)
			
	#Read a block of bytes of length "qty" starting at address "addr" from the Gesture sensor
	def paj7620ReadReg(self,addr,qty):
		return bus.read_i2c_block_data(self.PAJ7620_ID, addr,qty)
	
	#Print the values from the gesture sensor
	def print_gesture(self):
		data=self.paj7620ReadReg(0x43,1)[0]
		if data==self.GES_RIGHT_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				print("Forward")
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				print("Backward")
				time.sleep(self.GES_QUIT_TIME)
			else:
				print("Right")
				
		elif data==self.GES_LEFT_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				print("Forward")
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				print("Backward")
				time.sleep(self.GES_QUIT_TIME)
			else:
				print("Left")		
		
		elif data==self.GES_UP_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				print("Forward")
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				print("Backward")
				time.sleep(self.GES_QUIT_TIME)
			else:
				print("Up")		
				
		elif data==self.GES_DOWN_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				print("Forward")
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				print("Backward")
				time.sleep(self.GES_QUIT_TIME)
			else:
				print("Down")
		
		elif data==self.GES_FORWARD_FLAG:
			print("Forward")
			time.sleep(self.GES_QUIT_TIME)
			
		elif data==self.GES_BACKWARD_FLAG:
			print("Backward")
			time.sleep(self.GES_QUIT_TIME)
			
		elif data==self.GES_CLOCKWISE_FLAG:
			print("Clockwise")
	
		elif data==self.GES_COUNT_CLOCKWISE_FLAG:
			print("anti-clockwise")
			
		else:
			data1=self.paj7620ReadReg(0x44, 1)[0]
			if (data1 == self.GES_WAVE_FLAG):
				print("wave")
	
	#Return a vlaue from the gestire sensor which can be used in a program
	# 	0:nothing
	# 	1:Forward
	# 	2:Backward
	# 	3:Right
	# 	4:Left
	# 	5:Up
	# 	6:Down
	# 	7:Clockwise
	# 	8:anti-clockwise
	# 	9:wave
	def return_gesture(self):

		data=self.paj7620ReadReg(0x43,1)[0]
		if data==self.GES_RIGHT_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				return 1
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				return 2
				time.sleep(self.GES_QUIT_TIME)
			else:
				return 3
				
		elif data==self.GES_LEFT_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				return 1
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				return 2
				time.sleep(self.GES_QUIT_TIME)
			else:
				return 4	
		
		elif data==self.GES_UP_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				return 1
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				return 2
				time.sleep(self.GES_QUIT_TIME)
			else:
				return 5		
				
		elif data==self.GES_DOWN_FLAG:
			time.sleep(self.GES_ENTRY_TIME)
			data=self.paj7620ReadReg(0x43, 1)[0]
			if data == self.GES_FORWARD_FLAG:
				return 1
				time.sleep(self.GES_QUIT_TIME)
			elif data == self.GES_BACKWARD_FLAG:
				return 2
				time.sleep(self.GES_QUIT_TIME)
			else:
				return 6
		
		elif data==self.GES_FORWARD_FLAG:
			return 1
			time.sleep(self.GES_QUIT_TIME)
			
		elif data==self.GES_BACKWARD_FLAG:
			return 2
			time.sleep(self.GES_QUIT_TIME)
			
		elif data==self.GES_CLOCKWISE_FLAG:
			return 7

		elif data==self.GES_COUNT_CLOCKWISE_FLAG:
			return 8
			
		else:
			data1=self.paj7620ReadReg(0x44, 1)[0]
			if (data1 == self.GES_WAVE_FLAG):
				return 9
		return 0
		
if __name__ == "__main__":
	g=gesture()
	g.init()
	while True:
		g.print_gesture()
		time.sleep(.1)
		# print g.return_gesture()
		# time.sleep(.1)
		
```

!!!success
    If everything goes well, you will be able to see the following result

	
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_gesture_sensor.py 
wake-up finish.
Paj7620 initialize register finished.
Left
Forward
Left
Backward
Right
Up
Down
^CTraceback (most recent call last):
  File "grove_gesture_sensor.py", line 555, in <module>
    time.sleep(.1)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.

!!!Note
        If you use the I2C tool to scan the I2C address of the grove module, you may find two or more address. 0x04 is the adrress of the *Grove Base Hat for Raspberry Pi*.



### Play With Raspberry Pi (with GrovePi_Plus)

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

- **[ZIP]** [Grove - Gesture_v1.0 sch pcb.zip](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/res/Grove_-_Gesture_v1.0_sch_pcb.zip)
- **[Datasheet]** [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- **[Library]** [Library Grove - Guesture](https://github.com/Seeed-Studio/Gesture_PAJ7620)
- **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove_Gesture_V_1.0/master/res/Grove_Gesture_CDC_File.zip)

## Project

**Upcycling Workshop at Seeed x.factory [Episode 1]**: Last weekend, we had an amazing upcycling hacking workshop with 20 makers, designers, and engineers from the community gathering at x.factory (I even listed it as my favorite workshop!). 

[![](https://github.com/SeeedDocument/Grove_Gesture_V_1.0/raw/master/img/hacker.io.gif)](https://blog.hackster.io/upcycling-workshop-at-seeed-x-factory-episode-1-4f2d5a61f5ad)

**Jesty - Control your PC with Gestures**: Control a PC with a gesture sensor, associating a key or a mouse click to each gesture.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Momy93/jesty-control-your-pc-with-gestures-5d4a3e/embed' width='350'></iframe>

**PHPoC - Control Pan-Tilt via Hand Gesture**: An interesting way to control your robot: via hand gesture

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Homer/phpoc-control-pan-tilt-via-hand-gesture-1daacc/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>