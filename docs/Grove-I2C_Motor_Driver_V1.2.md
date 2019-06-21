---
name: Grove - I2C Motor Driver V1.2
category: Actuator
bzurl: https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html
oldwikiname:  Grove - I2C Motor Driver V1.2
prodimagename: I2CMotorDriver-2.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Motor_Driver_V1-2
sku:  105020001
---
![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/img/I2CMotorDriver-2.jpg)

The Grove I2C motor driver is a new addition to the Grove series with the same easy-to-use interface. Its heart is a dual channel H-bridge driver chip（L298N）that can handle current up to 2A per channel, controlled by an Atmel ATmega8L which handles the I2C communication with for example an Arduino. Both motors can be driven simultaneously while set to a different speed and direction. It can power two brushed DC motors or one 4-wire two-phase stepper motor. It requires a 6V to 15V power supply to power the motor and has an onboard 5V voltage regulator which can power the I2C bus and the Arduino(selectable by jumper). All driver lines are diode protected from back EMF.

The easy software interface is not the only easy-to-use feature because the Grove I2C motor driver is designed to get you up and running in no time. It features a LED for power and four LED's to indicate if and to which direction each motor is running. Screw terminals facilitate motor and power connections, and the Grove system plug and I2C interface enables you to daisy-chain the driver with many other devices.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

##   Version Tracker
---
<table width="494">
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td> v1.0
</td>
<td> Initial public release
</td>
<td> May 17th, 2012
</td></tr>
<tr>
<td> v1.2
</td>
<td> I2C address set by hardware
</td>
<td> July 2th, 2012
</td></tr></table>

##  Feature
---
*   Grove Compatiple

*   I2C Interface

*   Motor's speed and direction can control

*   Number of channels: 2

*   Changeable slave address by Hardware

##   Specifications
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
<th scope="row">Working Voltage
</th>
<td> 6
</td>
<td> -
</td>
<td> 15
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Max Output Current per channel
</th>
<td colspan="3">0.5
</td>
<td> A
</td></tr>
<tr>
<th scope="row"> Maximum Total current
</th>
<td colspan="3">1.0
</td>
<td> A
</td></tr>
<tr>
<th scope="row"> Input/output voltage on I2C bus
</th>
<td colspan="3"> 5
</td>
<td> V
</td></tr>
<tr>
<th scope="row">  Communication protocol
</th>
<td colspan="3"> I2C
</td>
<td> /
</td></tr></table>

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5v voltage regulator

**L298 IC:** dual full bridge driver

**Atmega8 IC:** Control Motor Rotate.

**NOTE:** Input voltage on screw terminals is regulated to 5v and connected to I2C +5v via a jumper (J4). Remove jumper if both external power via the screw terminals and power via the I2C header is used. Use jumper if 5v should be supplied to the I2C bus.

##   Application Ideas
---
This motor driver can be used to drive any brushed electronic motor as long as it doesn't consume more than 2A at 5v. Two motors can be driven simultaneously while set to a different speed and direction. The speed can be set fully proportional and is controlled by the ATmega8 on the board using PWM. It is set by I2C commands sent from Arduino or Seeeduino.
It is perfect for applications like robots, homebuilt RC cars, case fans, high power LED illumination or any other project that involves proportional load control.

##   Cautions
---
*   The board will be very hot if while operating over 1Amps. Do keep off your hands!

*   Arduino IDE(1.0 Or higher version) are supported.

##   Usage
---
The I2C Motor Driver can control motor which is based on the chip L298, The L298 isn’t just a dual motor driver, it is a dual H-bridge. An h-bridge is basically a specific setup of transistors that allow you to switch direction of current. So hooked up to a motor, that means you can have it spin in both directions, and with PWM input, you can use your Arduino to make them spin at any speed. Because the L298 has 2 H-bridges, you can not only make a robot go forwards and backwards, but also turn around by having each wheel spin in a different direction.

Now, let's use the I2C Motor Driver to control two DC motors or a stepper rotating in the positive or opposite direction.

###  Set the address of the I2C Motor Driver

*   Set the address by dial switch as a new function added to the new I2C Motor Driver.

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/img/I2CMotorDriver-9.jpg)

*   Then keep the address setup in the program is same to the address setup on the I2C motor driver. The default address setup in the program is 0x0f.
```
#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver
```
###
How to drive 2 DC motors

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/img/I2CMotorDriver-4.jpg)

<span style="color:red">**Note:**

</span>

<dl><dd>The first thing to notice however, is that you need an external power source  your DC motors, the 5v pin on the Arduino can not source enough power to drive 2 motors, you may damage your Arduino if you do.

</dd></dl>

And then program your Arduino as below:
```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); //this delay needed
        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
        delay(500);
    }
}
```

In this program, Arduino first set the speed of the 2 DC motors with the _MotorSpeedSetAB()_command, and then set the DC motors work directions with _MotorDirectionSet()_ command. please refer to the [Function Reference](/Grove-I2C_Motor_Driver_V1.2#Function_Reference) for details, you can download all the demo code in the [Resource](/Grove-I2C_Motor_Driver_V1.2#Resources).

###  How to drive a 4-wire stepper

The I2C motor Driver can be also used to drive a 4-wire stepper. connect your stepper to the Output Pins of I2C motor driver, and then connect motor driver to your Arduino/Seeeduino with I2C bus. Program your Arduino as blows:
```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;
        delay(10);
        MotorDirectionSet(0b0001);
        delay(4);
        MotorDirectionSet(0b0011);
        delay(4);
        MotorDirectionSet(0b0010);
        delay(4);
        MotorDirectionSet(0b0110);
        delay(4);
        MotorDirectionSet(0b0100);
        delay(4);
        MotorDirectionSet(0b1100);
        delay(4);
        MotorDirectionSet(0b1000);
        delay(4);
        MotorDirectionSet(0b1001);
        delay(4);
    }
}
```

This connected 4-wire stepper will rotate, you can adjust the rotate speed or step number in your Arduino program. You can also use some other stepper libraries to control it, you can download all the demo code in the [Resource](/Grove-I2C_Motor_Driver_V1.2#Resources).

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/img/2.gif)

##  Function Reference
---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB) **

_Description: defines the speed of motor 1 and motor 2_

_MotorSpeedA: the DC motor A speed, should be 0~100;_

_MotorSpeedB: the DC motor B speed, should be 0~100;_

Usage:

```
Serial.println("sent DC speed 100");
MotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;
delay(10); //this delay needed
```
**2. void MotorPWMFrequenceSet(unsigned char Frequence)**

_Description:set the prescale frequency of PWM, 0x03 default._

_Frequence: the prescale frequency of PWM. _

**3. void MotorDirectionSet(unsigned char Direction)**

_Description: Adjust the direction of the motors._

_Direction:can be Forward/Reverse rotating._

Usage:

```
MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"
                            // make sure M+ and M- is different polarity when driving DC motors.
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_Description: Adjust the direction and speed together of Motors._



##   Resources
---
*   [Grove - I2C Motor Driver Eagle File](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/res/Grove-I2C_Motor_Driver_Source_File.zip)

*   [I2C Motor DriverV1.2 Demo Code](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/res/I2CMotorDriver12Demo.zip)

*   [L298 Datasheet ](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/res/L298datasheet.pdf)

*   [78M05 Datssheet ](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/res/ST_78M05DataSheet.pdf)

*   [File:Burn Firmware for Atmega8 using ISP](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver_V1.2/raw/master/res/Burn_firmware_for_Atmega8_using_ISP.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>