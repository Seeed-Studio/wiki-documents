---
description: Motor_Shield_V2.0
title: Motor Shield V2.0
tags:
  - Shield
  - motor
keywords:
  - Shield
  - motor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Motor_Shield_V2.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" alt="pir" width={600} height="auto" /></p>

:::note
This document works for Motor Shield V2.0/2.1/2.2.
:::

The Motor Shield is a driver module for motors that allows you to use Arduino to control the working speed and direction of the motor. Based on the Dual Full-Bridge Drive Chip L298, it is able to drive two DC motors or a step motor. The Motor Shield can either be powered by Arduino directly or by an external 6V~15V power supply via the terminal input. This module can be used for the development of micro robots and intelligent vehicles, etc

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<table align="center">
 <caption> <h2>Version</h2> </caption>
  <tbody>
  <tr>
    <td><h3>Revision</h3></td>
    <td><h3>Descriptions</h3></td>
    <td><h3>Release</h3></td>
  </tr>
  <tr>
    <td><h4>v1.0</h4></td>
    <td><h4>Initial public release</h4></td>
    <td><h4>NA</h4></td>
  </tr>
  <tr>
    <td><h4>v2.0</h4></td>
    <td><h4>Enable +5V Pin of Arduino/Seeeduino to power motor </h4></td>
    <td><h4>2013-2</h4></td>
  </tr>  
  </tbody></table>

## Features

-------------------

- Standard Arduino UNO Shield pin out
- Based on L298 full bridge IC
- Drive 2 DC Motor or 1 Stepper
- External power input available
- Led indicators
- Heat sink for better performance
- Arduino library

## Specifications

-------------------

<table align="center">
  <tbody>
  <tr>
    <td><h3>Spec</h3></td>
    <td><h3>Value</h3></td>
  </tr>
  <tr>
    <td><h4>Operating voltage</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>External Power</h4></td>
    <td><h4>6-15V</h4></td>
  </tr>  
  <tr>
    <td><h4>Output Current</h4></td>
    <td><h4>2.0A Max @ Each Channel</h4></td>
  </tr>
    <tr>
    <td><h4>PWM Range</h4></td>
    <td><h4>0-100%</h4></td>
  </tr>
    <tr>
    <td><h4>Output</h4></td>
    <td><h4>2 Channels, 4 Ports</h4></td>
  </tr>
  </tbody></table>

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png" alt="pir" width={600} height="auto" /></p>

**1**.Channel 1 indicator, include 3 leds

- EB - channel 1 enable, high active
- IN3 - status of OUT3
- IN4 - status of OUT4

**2**.Channel 1 Sense - Please connect the left 2 pins together for normal usage.

**Note** that it's a high level application for sense the current, please refer to datasheet and schematic for more information.

**3**.OUTPUT - There're 2 channels, each channel has 2 output

- Channel 0 - OUT1, OUT2
- Channel 1 - OUT3, OUT4

**4**.Channel 0 Sense

**5**.Channel 0 indicator, include 3 leds

- EB - channel 0 enable, high active
- IN1 - status of OUT1
- IN2 - status of OUT2

**6**.External Power Input, range 6-15V

**7**.Reset indicator - turn red when Reset button is pressed

**8**.Reset button - pressed to reset the shield and Arduino

**9**.Power indicator - turn green when power in, either internal or external

**A.** Power switch

- Connect - Get power from Arduino
- Disconnect - Get power from External sources

**B.** Standard Arduino shield pin out

### Digital Pin Used

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino Pin</h3></td>
    <td><h3>Function</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>OUT1</h4></td>
  </tr>  
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>Enable of Channel0</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>Enable of Channel1</h4></td>
  </tr>  
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  </tbody></table>

:::note
D8~D13 are used by Motor Shield. Please don't use those pins to avoid conflict.
:::

### Analog Pin Used

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino Pin</h3></td>
    <td><h3>Function</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  </tbody></table>

:::note
Not Used means you can use those pins freely.
:::

## Getting Started

-------------------

### Drive a DC motor

#### Connection

Here we will show you how this Motor Shield works via a simple demo. First of all, you need to prepare the below stuffs:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>DC Motor</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
  </tr>  
  </tbody></table>

- Set **SEN_A** and **SEN_B**, connect the left 2 pins together with a jumper.
- Connect **MB_EN** together with a jumper, as we are not going use an external power.
- Connect DC motor to Chanel 0 (OUT1 and OUT2).
- Plug Motor Shield into Arduino.
- Connect Arduino to PC via a USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- Click below button to download the motor shield library.
- Please follow [how to install an arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install the library.

<p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png" /></a></p>

- Upload the code to Seeeduino V4.

```cpp
//  Demo function:The application method to drive the DC motor.
//  Author:Loovee (luweicong@seeed.cc)
//  2016-3-11

#include "MotorDriver.h"

MotorDriver motor;

void setup()
{
    // initialize
    motor.begin();
}

void loop()
{
    motor.speed(0, 100);            // set motor0 to speed 100
    delay(1000);
    motor.brake(0);                 // brake
    delay(1000);
    motor.speed(0, -100);           // set motor0 to speed -100
    delay(1000);
    motor.stop(0);                  // stop
    delay(1000);
}
// END FILE
```

- Then you will find your motor move (1s), stop (1s), move back (1s), stop (1s), and loop.

If nothing happens, please make sure:

- We have uploaded the code successfully
- The motor is connected properly
- The led indicators blink right

### Drive a Stepper

#### Connection

Here we will show you how this Motor Shield works via a simple demo.  First of all, you need to prepare the below stuffs:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>Stepper Motor</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
  </tr>  
  </tbody></table>

- Set **SEN_A** and **SEN_B**, connect the left 2 pins together with a jumper.
- Connect **MB_EN** together with a jumper, as we are not going use an external power.
- Find the pin definitions of you stepper, and connect it to the OUTPUT of the shield. As below:

<table align="center">
  <tbody>
  <tr>
    <td><h3>stepper</h3></td>
    <td><h3>OUT1</h3></td>
  </tr>
  <tr>
    <td><h4>A+</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>A-</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>B+</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  <tr>
    <td><h4>B-</h4></td>
    <td><h4>Not Used</h4></td>
  </tr>
  </tbody></table>

- Plug Motor Shield into Arduino.
- Connect Arduino to PC via a USB cable.

#### Software

Copy below code to Arduino IDE and upload it to Seeeduino V4, then you will find your stepper move.

```CPP
/*
 * Stepper test for Seeed Motor Shield V2
 * loovee @ 15 Mar, 2016
 */

#include <Stepper.h>

// change this to the number of steps on your motor
#define STEPS 200

// create an instance of the stepper class, specifying
// the number of steps of the motor and the pins it's
// attached to
Stepper stepper(STEPS, 8, 11, 12, 13);

// the previous reading from the analog input
int previous = 0;

void step(int steps)
{
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    stepper.step(steps);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
}

void setup()
{
    // set the speed of the motor to 30 RPMs
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    stepper.setSpeed(30);
}

void loop()
{
    step(1000);
    step(-1000);
}

// END FILE
```

If nothing happens, please double check if you have connected the wire right.

## Library APIs

---------

### DC Motor APIs

#### begin

**Description**

```Javascript
void begin();
```

#### speed

**Description**

```Javascript
void move(int motor_id, int speed);
```

- motor_id
  - 0 - Chanel 0
  - 1 - Chanel 1
- speed: -100~100, the larger the faster, 0 for stop

**stop**

```Javascript
void stop(unsigned char motor_id);
```

**brake**

```Javascript
void brake(unsigned char motor_id);
```

#### Stepper

**Note** that we use the library provided by Arduino IDE to drive a stepper.

There's something need to be modified, please refer to the examples.

## FAQs

**Q1: The purpose of the jumper MB_EN**

A1: You can see a power jumper(MB_EN) on the motor shield. If you move it, the Arduino can provide power to Shield, but the shield(if the shield has connected to a external power) can't provide power to Arduino.

If the jumper exists, one can provide power to the other under two situation:

- USB to Arduino: if no external power connected to Shield separately, the Arduino will provide power to Shield via VCC pin.

- External Power connected to Shield：If shield has a separate power, the voltage would through a rectifier(78M05) first, and then provide power to Arduino. At this situation, no current of Arduino could through Arduino to Shield via 78M05.

So the purpose of this jumper is a choice whether you would wanna use shield to provide power to Arduino or not.

**Q2: Is there a pin conflict between the SD card shield (103030005) and the Motor shield (105030001) on Arduino UNO? How to use them together?**

A2: There is a pin conflict between Motor shield and SD card shield in digital pins D11,D12,D13 of the Arduino Uno. So you cannot stack them together with the Arduino Uno board. Here is the solution to use them together.

- Step 1.Stack the SD card shield to the Arduino.
- Step 2.Modify the library of Motordriver.h as follows.

```CPP
/******Pins definitions*************/
#define MOTORSHIELD_IN1    8
#define MOTORSHIELD_IN2    7
#define MOTORSHIELD_IN3    6
#define MOTORSHIELD_IN4    5
#define SPEEDPIN_A        9
#define SPEEDPIN_B        10
```

**Q3.Do not stack the motor shield but make connections separately as follows from the Arduino using jumper wires.**

A3: Here is the connection.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino</h3></td>
    <td><h3>Motor shield</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>GND</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>D13</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>D12</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>D11</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>D8</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>D9</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>D10</h4></td>
  </tr>
  </tbody></table>

## Motor Shield V2.0 Eagle File Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Motor shield V2.1 Eagle File Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

-------------------

- **[Eagle]** [Motor Shield V2.0 Eagle File](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip)
- **[Eagle]** [Motor shield V2.1 Eagle File](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar)
- **[PDF]** [Motor Shield 2.0 schematics](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf)
- **[PDF]** [Motor Shield 2.1 schematics](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf)
- **[PDF]** [Motor Shield 2.2 schematics](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf)
- **[Library]** [Motor Shield Library](https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip)
- **[Datasheet]** [L298 Datasheet](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf)
- **[Datasheet]** [78M05 Datasheet](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
