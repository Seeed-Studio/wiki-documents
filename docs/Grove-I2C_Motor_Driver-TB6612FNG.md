---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/pin_out.jpg)

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/connect1.jpg)


*Stepper Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |Stepper Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/Motor%2024BYJ48_02.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">Get One Now</a>|

- **Step 1.** Connect the stepper motor with **Stepper Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

!!!Tip
        This driver board is suitable for 4-wire stepper motors. Depending on the stepper motor you use, the wiring color is different. We use the motor 24BYJ48 , the wiring is as shown in the table below:


|Pin Name| Wire of Stepper Motor|Wire color(24BYJ48)|
|---|---|---|
|OUT1|one end of coil 1 |Orange|
|OUT2|the other end of coil 1|Blue|
|OUT3|one end of coil 2|Pink|
|OUT4|the other end of coil 2|Yellow|

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/pin-out/p%2Blogo/coil.jpg)


- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/connect2.jpg)

!!!Note
        Since the DC port and the stepper port are physically connected together, you can also use the two DC port to control your stepper motor. The connection diagram is as follows:

![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/connect3.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       |Grove - I2C Motor Driver (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the default example, we provide two examples for you

>dc_motor: Demo for DC motor  
>stepper_motor_2phase: Demo for 4-wire, 2phase stepper motor.


You can open them in the following two ways(take the dc_motor for example)：  
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**. 
    ![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/path1.jpg)  
    2. Open it in your computer by click the **dc_motor.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/img/path2.jpg)


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

!!!Success
        If every thing goes well, when you power up the external power port, the motor will run.



## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Eagle Files](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG Software Library](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [Datasheet TB6612FNG](https://github.com/SeeedDocument/Grove-I2C_Motor_Driver-TB6612FNG/raw/master/res/TB6612FNG.pdf)



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>