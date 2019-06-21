---
name: Xadow - Motor Driver
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Motor-Driver-p-1626.html
oldwikiname: Xadow - Motor Driver
prodimagename: Xadow_Main_Board_00V1.jpg
surveyurl: https://www.research.net/r/xadow_motor_driver
sku:  108040000
---

![](https://github.com/SeeedDocument/Xadow_Motor_Driver/raw/master/img/x%20motor.jpg)

Xadow Motor can be used to control DC Motors. Its heart is a low-saturation two-channel bidirectional motor drive chip LB1836M, controlled by ATmega168 which handles the I2C communication with Xadow Main Board. Xadow Motor features a changeable I2C address. And it needs a separate low power to drive motors.

## Specification
---
- Motor Driver: LB1836M
- Battery Voltage: 2.5V ~ 9V
- Output Current per channel(Max): 300mA
- Communication Mode: I2C
- I2C Address is changeable
- Dimensions: 25.43mm x 20.35mm


## Product View
---
![](https://github.com/SeeedDocument/Xadow_Motor_Driver/raw/master/img/Xadow_Motor_Black_View.png)

- ①: LB1836 IC, a low-saturation two-channel bidirectional motor driver.
- ②： Motors Power Supply Connection.
- ③,④: DC Motors Connection.
- ⑤,⑥: used to set the IIC address. A0 and A1 are shipped connected to H. You can change them to "L" by a little modification on the board. Find details in the Reference.
- ⑦: SPI Interface, used to upload firmware for Atmega168.
- ⑧: Microcontroller Atmega168.
- ⑨: used to select power supply for Atmega168 IC. In default mode, DVCC is connected to VOUT which means the power comes from Motor power supply. When DVCC is connected to 3.3V, Xadow Main Board supplies power for Atmega168.

## Demonstration
---
Xadow Motor can drive two DC motors simultaneously. Based on our available library, it is more easily to make motors run. Now let's get started.

!!!Note
    The library is not available for controlling stepper motor.

**Hardware Installation: **

1.Connect DC Motors to J5,J6 interface. You can use the solder iron for soldering to make sure the connection are fixed. We configure a 3.7V lithium battery for you. So you cannot drive high - power motors using the battery.

2.Connect battery to Battery Interface of Xadow Motor. Without battery, Motors would not rotate.

3.Connect Xadow Motor to Xadow Main Board. Do not forget to install Xadow Driver.

!!!Note
    When connect Xadow 3-Axis Accelerometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).
Upload Code:

4.Download [Xadow Motor Library](https://github.com/Seeed-Studio/Xadow_Motor_Driver) and install it to Arduino Library.

5. Open the code directly by the path:File -> Example ->xadow_motor->motorCtrl.

```
/*
there are four motor state you can use:

-MSTOP                -> stop
-MFOR                        -> go forward
-MREV                        -> go reverse
-MHOLD                -> hold the recent state
**NOTE:
there are four addresses you can choose, it's up to the hardware,
for more information, refer to www.seeedstudio.com
-MOTORADDRESS0 0x40 // A0 LOW, A1 LOW
-MOTORADDRESS1 0x41 // A0 HIGH, A1 LOW
-MOTORADDRESS2 0x42 // A0 LOW, A1 HIGH
-MOTORADDRESS3 0x43 // A0 HIGH, A1 HIGH
use this function: setMotorRun(unsigned char sMotorA, unsigned char sMotorB);
you can contrl the both motor.
*/

#include <Wire.h>

#include "XadowMotor.h"

void setup()
{
    Serial.begin(38400);
    xadowMotor.begin(MOTORADDRESS3);
}

void loop()
{

    Serial.print("bat vol :");
    Serial.println(xadowMotor.getBatVol());

    xadowMotor.setMotorRun(MFOR, MFOR);

    delay(2000);

    xadowMotor.setMotorRun(MSTOP, MSTOP);

    delay(500);

    xadowMotor.setMotorRun(MREV, MREV);

    delay(2000);

    xadowMotor.setPwrDown();
    delay(1000);
    xadowMotor.setWakeUp();

}
```

In this code, the function xadowMotor.begin(MOTORADDRESS3) is used to set Xadow Motor I2C Address. You need to change the parameter"MOTORADDRESS3" when you change the connection of A0 pin and A1 pin. Find details in the Reference.

6. Upload the Code. Remeber to select Seeeduino Xadow from the Tools | Board menu of the Arduino environment, and select the correct serial port Xadow Main Board is using.

Now you can see your motors will run forward or backward at regular intervals. By opening the serial monitor, you can observe your battery voltage.

## Reference
---
The Xadow Motor has four I2C address which is decided by A0 pin and A1 pin. A0 and A1 are connected to H inside the board as default. But you can change it. For example, use a solder iron to break the connection between H and A0, then solder up ADR0 and L, so you make the value of A0 as L. You can find the relationship of hardware I2C address and the values of A0 and A1 in the following table.

|I2C Address	|A0  inputs state| A1 inputs state|	the corresponding parameter in code|
|---|:---:|:---:|---|
|0x40	|L|	L|	MOTORADDRESS0|
|0x41|	L|	H|	MOTORADDRESS1|
|0x42	|H|	L|	MOTORADDRESS2|
|0x43	|H	|H|	MOTORADDRESS3|

## Resources
---
- [Xadow Motor Eagle File](https://github.com/SeeedDocument/Xadow_Motor_Driver/raw/master/res/Xadow_Motor_Eagle_File.zip)
- [Xadow Motor Schematic in PDF](https://github.com/SeeedDocument/Xadow_Motor_Driver/raw/master/res/Xadow_Motor_Schematic_in_PDF.pdf)
- [Xadow Motor library](https://github.com/Seeed-Studio/Xadow_Motor_Driver)
- [LB1836 datasheet](https://github.com/SeeedDocument/Xadow_Motor_Driver/raw/master/res/LB1836M.PDF)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>