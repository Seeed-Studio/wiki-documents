---
title: Grove - I2C Motor Driver (L298P)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/
slug: /Grove-I2C-Motor-Driver-L298P
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - I2C Motor Driver(L298P) is a common-use motor driver for stepping motor and servo motor. It embeds an STM32 chip for burning the code to control the
motor driver. This is a 2-channel motor driver, each channel can support up to 1A current. You can also use the I2C interface to transmit data from the peripheral microcontroller. The default I2C address is 0x0f and you are able to change the address of Motor driver by connecting the I2C wire hat. The I2C address is selectable from 0x00 to 0X0f.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Features

- MCU: STM32f030f4P6 microcontroller for burning the code and control the Motor Driver.
- L298P Motor driver chip: common use for a motor driver and can drive stepping motor and servo motor.
- Selectable I2C address: change the connection of wire hat to get the I2C address from 0x00 to 0x0f, the default I2C address is 0x0f.
- 2-channel output: able to support 1A current on each channel, max 2A current; Need 6V-12V DC voltage input.
- User LED: green LED on for the clockwise direction and red LED on for the anti-clockwise direction for each channel.

## Specification

|Item|Value|
|---|---|
|MCU|STM32f030f4P6|
|Power Supply|6-12V DC|
|Interface|Grove I2C|
|I2C address|Default 0x0f, can be changed by connecting the wire hat|
|Channel|2|
|Output current|MAX 2A, 1A for each channel|
|Output voltage|5V|

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Use Arduino platform

#### Materials Requied

| Seeeduino V4.2 | Base Shield|  Grove - I2C Motor Driver (L298P)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|

#### Hardware connection

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

- **Step 1** Connect Grove - I2C Motor Driver (L298P) to port I2C of Grove-Base Shield.

- **Step 2** Plug Grove - Base Shield into Seeeduino.

- **Step 3** Connect Seeeduino to PC via a USB cable.

#### Software Code 1 - DC Motor

```C++
#include "Grove_I2C_Motor_Driver.h"

// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Set speed of MOTOR1, Clockwise, speed: -100~100
    Motor.speed(MOTOR1, 50);
    // Set speed of MOTOR2, Anticlockwise
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // Change speed and direction of MOTOR1
    Motor.speed(MOTOR1, -100);
    // Change speed and direction of MOTOR2
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // Stop MOTOR1 and MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **Step 1** Download the  [Grove_I2C_Motor_Driver_v1_3 Library](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) from Github.

- **Step 2** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

With speed() function, you are able to drive one motor at the speed you want.

- **motor_id** represents which motor to use. You can fill MOTOR1 or MOTOR2.

- **_speed** represents the speed you set to the motor. You can fill -100~100 here. When _speed>0, DC motor runs clockwise, while_speed<0, DC motor runs anticlockwise. And the bigger the absolute value of _speed, the faster the speed of DC motor.

With stop() function, you are able to stop a running DC motor.

- **motor_id** represents which motor to use. You can fill MOTOR1 or MOTOR2.

#### Software Code 2 - Stepper Motor

```C++
#include <Grove_I2C_Motor_Driver.h>

// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f


void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // Drive a stepper motor
    // _step: -1024~1024, when _step>0, stepper motor runs clockwise; _step<0, stepper
    // motor runs anticlockwise; when _step is 512, the stepper motor will run a complete
    // turn; if step is 1024, the stepper motor will run 2 turns.
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {

}
```

Take [24BYJ48 Stepper Motor](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) as an example, The hardware installation as shown below:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

The connection between [24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) Stepper Motor and I2C Motor Driver is as shown below:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- **_step** represents the steps you set to the stepper motor to run. You can fill -1024~1024. When _step>0, stepper motor runs clockwise, while_step<0, stepper motor runs anticlockwise. When _step is 512/-512, the stepper motor will run a complete turn and if_step is 1024/-1024, the stepper motor will run 2 turns. The stepper motor will stop automatically after it finishes its steps.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[PDF]** [STM32f030f4P6 Datasheet](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [L298P Datasheet](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [Motor Driver Library](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
