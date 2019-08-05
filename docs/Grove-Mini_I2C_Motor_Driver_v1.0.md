---
name: Grove - Mini I2C Motor Driver v1.0
category: Actuator
bzurl: https://www.seeedstudio.com/Grove - I2C Mini Motor Driver-p-2508.html
oldwikiname: Grove_-_Mini_I2C_Motor_Driver_v1.0
prodimagename: Mini_I2C_motor_2.png
bzprodimageurl: https://statics3.seeedstudio.com/images/product/105020010 2.jpg
surveyurl: https://www.research.net/r/Grove-Mini_I2C_Motor_Driver_v1_0
sku: 105020010
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_I2C_motor_2.png)

This Grove - MIni I2C motor driver includes two DRV8830. The DRV8830 provides an integrated motor driver solution for battery-powered toys, printers, and other low-voltage or battery-powered motion control applications. The module has two H-bridge drivers, and can drive two DC motors or two winding of stepper motors, as well as other loads like solenoids.It requires an onboard 5V voltage regulator which can power the I2C bus. All driver lines are diode protected from back EMF.It features two LEDs for fault indicator and four LEDs to indicate which direction each motor is running. GROVE system plug and I2C interface enables you to daisy-chain the driver with many other devices.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

Features
--------

-   Without external power supply
-   Two leds for fault indicator
-   Default maximum drive current 200 mA
-   Grove compatible
-   I2C interface
-   Motor's speed and direction can control
-   Number of channels: 2
-   Easy to use

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Application Ideas
-----------------

This motor driver can be used to drive any brushed electronic motor as long as it doesn't consume more than 1A at 5v.
Two motors can be driven simultaneously while set to a different speed and direction.
The speed can be set fully proportional and is controlled by I2C command.

-   Battery-Powered:
    -   Printers
    -   Toys
    -   Robotics
    -   Cameras
    -   Phones

-   Small Actuators, Pumps, etc.

Here are some projects for your reference.

| **Make a Mini Toy Car**                                              | **Make a Steampunk Style Award**                                       |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_toy_car.jpg)   | ![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Seeed_award2015.jpg)  |
| [Make it NOW!](https://community.seeedstudio.com/project_detail.html?id=392)       | [Make it NOW!](https://community.seeedstudio.com/project_detail.html?id=1131)        |


Specifications
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Working Voltage
</th>
<td>
2.75
</td>
<td>
5
</td>
<td>
6.8
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Max Output Current per channel
</th>
<td>
0.2(default)
</td>
<td>
-
</td>
<td>
1
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Input/output voltage on I2C bus
</th>
<td colspan="3">
3.3/5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Communication protocol
</th>
<td colspan="3">
I2C
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Default I2C Address
</th>
<td colspan="3">
0xC0, 0xC4
</td>
<td>
/
</td>
</tr>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_motor_driver.jpg)

-   **Grove Interface** - Grove products have a eco system and all have a same connector which can plug onto the **Base Shield**. Connect this module to the I<sup>2</sup>C port of Base Shield, and then it can work well with Arduino. However, you can also connect Grove - Mini I2C Motor Driver to Arduino without Base Shield by jumper wires.

<table>
<tr>
<th width="150">
Arduino UNO
</th>
<th width="150">
Base Shield
</th>
<th width="150">
Grove - Mini I2C Motor Driver
</th>
</tr>
<tr align="center">
<td>
5V
</td>
<td rowspan="4">
I2C port
</td>
<td>
VCC
</td>
</tr>
<tr align="center">
<td>
GND
</td>
<td>
GND
</td>
</tr>
<tr align="center">
<td>
SDA
</td>
<td>
SDA
</td>
</tr>
<tr align="center">
<td>
SCL
</td>
<td>
SCL
</td>
</tr>
</table>


-   **CH1 fault indicator** - Channel 1 fault indicator.
-   **CH2 fault indicator** - Channel 2 fault indicator.
-   **Direction indicator** - Motor direction indicator.
-   **CH1 Output Connector** - Motor 1 connector.
-   **CH2 Output Connector** - Motor 2 connector.

Hardware function
-----------------

### Change Default maximum drive current

The default maximum drive current of each channel is 200mA, see the front picture of the board

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/QQ20150817-3.png)

Each channel (CH1,CH2) has been added a resistor, and each value of resistor (R5,R12) is 1 Ω, so the maximum drive current is 200mA according to the following equation

<center>
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_I2C_motor_7.png)

</center>

Meantime, each channel provides a reserved solderable pad (R6 for CH1, R13 for CH2), so you can solder a resistor onto the board to change the resistor value of each channel. Following is the new equation if adding resistor to the board

<center>
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_I2C_motor_8.png) 
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_I2C_motor_9.png)
</center>

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Maximum working current of each channel must be less than 1A. So the minimum value of resistor soldered to the reserved pad should not less than 0.2 Ω.
</div>

### Change Default I<sup>2</sup>C Address

The I<sup>2</sup>C address of each channel is changeable. Please take a look at the back side of the board, you will find there are 4 jumper pads; A0_CH1 and A1_CH1 are for channel 1, A0_CH2 and A1_CH2 are for channel 2, as shown below:

<center>
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Address_mini_i2c_motor_driver.png)
</center>

You can solder or unsolder each jumper to change the I2C address:

-   1 - You need a solder iron, just solder two sides of the jumper together
-   0 - You need a solder iron, just unsolder two sides of the jumper.

<center>
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_I2C_motor_12.png)
</center>

<div class="admonition note">
<p class="admonition-title">Note</p>
The library of Grove - Mini I2C Motor driver is dependent on the default address.
</div>

Getting Started
---------------

Now, let us begin to use the Grove - Mini I2C Motor Driver.

### Preparations

Now we are making a demo for Grove - Mini I2C Motor Driver v1.0 which require following modules.

-   2 * DC Motor 2V-6V
-   [Seeeduino Lite](http://www.seeedstudio.com/depot/Seeeduino-Lite-p-1487.html)

**Seeeduino Lite is compatible with Arduino.**

If you are using an Arduino UNO or any others Arduino compatible boards that with out a Grove connect,

You will need a [Grove Base Shield](http://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134) to connect the Grove easily.

If this is your first time using Arduino or Seeeduino, Please put hand on [here](/Getting_Started_with_Seeeduino) to start your Arduino journey.

### Hardware Installation

Grove - Mini I2C Motor Driver got one Grove socket for connecting two modules above.
They are:

-   2 * DC Motor 2V-6V - connnect to CH1 & CH2 Output connector.
-   Seeeduino Lite

Connect Seeeduino's Grove I2C Interface to Mini Motor Driver's Grove Interface as shown below:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Mini_motor_driver_demo.jpg)

### Software Work

[![](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

The Grove - Mini I2C Motor Driver can control motor which is based on the chip DRV8830. The DRV8830 is not just a dual motor driver, it is a dual H-bridge. An h-bridge is basically a specific setup of transistors that allow you to switch direction of current. You can use your Arduino to make them spin at any speed.

Because the module has 2 H-bridges, you can not only make a robot go forwards and backwards, but also turn around by having each wheel spin in a different direction.

Connect Seeeduino to computer use a micro USB cable.

Now, let us use the Grove - Mini I2C Motor Driver to control two DC motors rotating in the positive or opposite direction.

Given below is an example program to be used with an Arduino. The code for this is very basic, but you can also change it and do it your own way.

```
/****************************************************************
Example code demonstrating the use of the Arduino Library for
the SparkFun MiniMoto board, which uses the TI DRV8830 IC for I2C
low-voltage DC motor control.
 
This code is beerware; if you use it, please buy me (or any other
SparkFun employee) a cold beverage next time you run into one of
us at the local.
 
17 Sep 2013- Mike Hord, SparkFun Electronics
 
Code developed in Arduino 1.0.5, on a Fio classic board.
 
**Updated for Arduino 1.6.4 5/2015**
****************************************************************/
 
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
 
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)
 
#define FAULTn  16     // Pin used for fault detection.
 
// Nothing terribly special in the setup() function- prep the
//  serial port, print a little greeting, and set up our fault
//  pin as an input.
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}
 
// The loop() function just spins the motors one way, then the
//  other, while constantly monitoring for any fault conditions
//  to occur. If a fault does occur, it will be reported over
//  the serial port, and then operation continues.
void loop()
{
    Serial.println("Forward!");
    motor0.drive(100);
    motor1.drive(100);
    delayUntil(1000);
    Serial.println("Stop!");
    motor0.stop();
    motor1.stop();
    delay(1000);
    Serial.println("Reverse!");
    motor0.drive(-100);
    motor1.drive(-100);
    delayUntil(1000);
    Serial.println("Brake!");
    motor0.brake();
    motor1.brake();
    delay(1000);
}
 
// delayUntil() is a little function to run the motor either for
//  a designated time OR until a fault occurs. Note that this is
//  a very simple demonstration; ideally, an interrupt would be
//  used to service faults rather than blocking the application
//  during motion and polling for faults.
void delayUntil(unsigned long elapsedTime)
{
    // See the "BlinkWithoutDelay" example for more details on how
    //  and why this loop works the way it does.
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // If FAULTn goes low, a fault condition *may* exist. To be
        //  sure, we'll need to check the FAULT bit.
        if (digitalRead(FAULTn) == LOW)
        {
            // We're going to check both motors; the logic is the same
            //  for each...
            byte result = motor0.getFault();
            // If result masked by FAULT is non-zero, we've got a fault
            //  condition, and we should report it.
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break; // We want to break out of the motion immediately,
                //  so we can stop motion in response to our fault.
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break;
            }
        }
    }
}
```

Now click Upload(CTRL+U) to burn testing code. Please refer to [here](/Arduino_Common_Error "Arduino Common Error") for any error prompt and you can also add comment on [community](https://community.seeedstudio.com/).

### Review Results

After upload is complete, the motors will rotate in the positive or opposite direction in cycle.

Resources
---------

-   [DRV8830 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/res/DRV8830.pdf)
-   [Grove - Mini I2C Motor Driver\_Eagle\_File](https://github.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/raw/master/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
-   [Grove - Mini I2C Motor Driver Schematic Document](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_I2C_Motor_Driver_v1.0/master/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
-   [Grove - Mini I2C Motor Driver Source Library](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>