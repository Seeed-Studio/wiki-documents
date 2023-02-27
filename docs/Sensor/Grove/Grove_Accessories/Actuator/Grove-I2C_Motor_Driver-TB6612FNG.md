---
title: Grove - I2C Motor Driver (TB6612FNG)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /Grove-I2C_Motor_Driver-TB6612FNG
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:
:::

|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|

:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.
:::

- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*Stepper Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |Stepper Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">Get One Now</a>|

- **Step 1.** Connect the stepper motor with **Stepper Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

:::tip
        This driver board is suitable for 4-wire stepper motors. Depending on the stepper motor you use, the wiring color is different. We use the motor 24BYJ48 , the wiring is as shown in the table below:
:::

|Pin Name| Wire of Stepper Motor|Wire color(24BYJ48)|
|---|---|---|
|OUT1|one end of coil 1 |Orange|
|OUT2|the other end of coil 1|Blue|
|OUT3|one end of coil 2|Pink|
|OUT4|the other end of coil 2|Yellow|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::note
        Since the DC port and the stepper port are physically connected together, you can also use the two DC port to control your stepper motor. The connection diagram is as follows:
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       |Grove - I2C Motor Driver (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |

#### Software

:::caution
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the default example, we provide two examples for you

>dc_motor: Demo for DC motor  
>stepper_motor_2phase: Demo for 4-wire, 2phase stepper motor.

You can open them in the following two ways(take the dc_motor for example)：  
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
    2. Open it in your computer by click the **dc_motor.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::tip
        If every thing goes well, when you power up the external power port, the motor will run.
:::

### Play With Raspberry Pi 4 Computer

#### Hardware

**Materials required**

*DC Motor Demo*

| Raspberry Pi 4 Computer | Grove Base Hat for Raspberry Pi | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|

:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.
:::

- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove Base Hat for Raspberry Pi.

- **Step 3.** Plug Grove Base Hat for Raspberry Pi into Raspberry Pi 4 Computer.

- **Step 4.** Connect Raspberry Pi 4 Computer to a display.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::note
        If this is your first time use Raspberry Pi, please refer to [Getting started with Raspberry](https://wiki.seeedstudio.com/Grove_Base_Kit_for_Raspberry_Pi/#getting-started) before the start.
:::

#### Software

:::caution
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
Thanks MarkusBansky provide software library and learning resource for the Grove_Motor_Driver_TB6612FNG to Raspberry Pi 4 and python3.
This is a port of [Grove Arduino LIbrary](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) for [Grove I2C Motor Driver on TB6612FNG](https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/).
:::

#### Requirements

* RaspberryPi linux image
- Python 3.6+
- smbus library
- time library
- math library

:::note
    The library contains 6 easing functions for the smooth start of motors.
    Easing functions currently can only be used on a single motor at once.
    Containing IN and OUT functions.
:::

#### How to use the library

:::caution
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
  First of all make sure you are running the latest released version of **pip**.This library requires you to add an additional`index-url` to **pip.conf** in order to install it. You can do this by editing your config file with `sudo nano/etc/pip.conf` and inserting this line just after the `[global]` section:
:::

  ```
  index-url=https://pypi.python.org/
  ```

Now you can install the package as usual, for python3 use something for example:

```
python3 -m pip install raspberry-i2c-tb6612fng
```

After you install the library successful, please enter the raspberry-i2c-tb6612fng file use below code.

```
cd raspberry-i2c-tb6612fng
```

The last step is to run the test code.

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::tip
        If every thing goes well, when you type `python3 test.py`, the motor will run.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Eagle Files](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG Software Library](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [Datasheet TB6612FNG](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
