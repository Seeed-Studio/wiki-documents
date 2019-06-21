---
name: Motor Bridge Cape v1.0
category: BeagleBone
bzurl: https://seeedstudio.com/Motor-Bridge-Cape-p-2569.html
oldwikiname: Motor_Bridge_Cape_v1.0
prodimagename: Motor_bridge_driver.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/105030006 1.jpg
surveyurl: https://www.research.net/r/Motor_Bridge_Cape_v1_0
sku: 105030006
---

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/Motor_bridge_driver.jpg)

The Motor Bridge Cape features bi-directional motor control using two TB6612FNG integrated dual H-bridge, so it can control two stepper motors or four brushed DC motors with 6 ~15V DC  ower and about 1A current draw per motor. The cape provides 5V regulated power to BBG or BBB with a max input voltage of 15V. It also has six servo control interfaces and six expand I\O.  All the features are provided by the on board STM32F0 coprocessor. The MCU can communicate with BeagleBone by I<sup>2</sup>C or UART interface. 

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

Features
--------

-   Can drive 4 DC Motors or 2 Stepper Motors
-   Can drive 6 Servos
-   Mbed Platform
-   STM32F0 coprocessor
-   Two TB6612FNG
-   6 expand I\Os
-   Communicate with BBG by I<sup>2</sup>C or UART interface

Specifications
--------------

-   Battery Input Voltage: 6~15V
-   H-bridge Working Voltage: 6~15V
-   DC/DC 5V output current: 2A max
-   3V3 output current: 350mA max
-   4 H-bridge driver,each rated current:1.2A, peak current:3.2A
-   6 Servo driver, working voltage: 5V, total current is not more than 1.5A
-   Input reverse connect protection
-   Over current protection: 3A one-off quick fuse

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/Motor_Bridge_Hardware_overview.jpg)

-   **3A one time Fuse**: Over-current protection
-   **Reset Button**: Reset the coprocessor
-   **SWD Interface**: Debug interface
-   **Prototype board**: Extend other circuits
-   **GPIOs**: Extend other circuits
-   **Servos**: Servo motor interface
-   **STM32F030R8**: The coprocessor
-   **DC/DC**: Voltage conversion circuit
-   **TB6612FNG**: H-bridge IC
-   **Indicator**: Indicating lamp for motor direction
-   **Working Mode Switch**: Standby or Working
-   **Input Reverse Protection**: Protect circuit
-   **Motor4/Motor3**: Drive 2 DC motors or 1 Stepper motor
-   **Motor2/Motor1**: Drive 2 DC motors or 1 Stepper motor
-   **Battery**: Supply power for motor

Getting Started
---------------

After this section, I will show you how to use the Motor Bridge Cape on BBG. Before you get started, please download the Motor Bridge Cape Driver library code from the [Github](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB).

To use the Motor Bridge Cape Library simply add the MotorBridge.py file to your project. And import the python file to your project, and create a object of the Motor Bridge Cape.

```
import MotorBridge
motor = MotorBridge.MotorBridgeCape()
```

### Install the dependencies


```
sudo apt-get update
sudo apt-get install build-essential python-pip python-dev python-smbus git
sudo pip install Adafruit-GPIO
```


### Stepper Motor

The Stepper Motor Interface of Motor Bridge Cape just as the picture below shows.

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/StepperMotor.jpg)

#### The functions of Stepper Motor

Here is the brief description about the function of stepper motor.

<u> **StepperMotorAInit()**</u>

*Description*: Init the Stepper Motor A port.

<u> **StepperMotorAMove(MoveSteps,StepDelayTime)** </u>

*Description*: Drive the Stepper Motor A.

*MoveSteps*: How many steps the stepper motor will move. **Positive** stands for clock wise direction. **Negative** stands for counter-clock wise direction.

*StepDelayTime*: The dead time for every step. unit: us.

<u> **StepperMotorBInit()**</u>

*Description*: Init the Stepper Motor B port.

<u> **StepperMotorBMove(MoveSteps,StepDelayTime)** </u>

*Description*: Drive the Stepper Motor B.

*MoveSteps*: How many steps the stepper motor will move. **Positive** stands for clock wise direction. **Negative** stands for counter-clock wise direction.

*StepDelayTime*: The dead time for every step. unit: us.

#### Example of Stepper Motor

Copy the following code to your project and save it as a python file.

```
import MotorBridge
import time
 
def StepperMotorATest():
    print 'Hello From MotorBridge'
    motor.StepperMotorAInit()
    motor.StepperMotorAMove(1000,1000) # 1000 steppers  1000us every step
    time.sleep(1)
    motor.StepperMotorAMove(-1000,1000) #1000 steppers  1000us every step
    time.sleep(1)
 
def StepperMotorBTest():
    print 'Hello From MotorBridge'
    motor.StepperMotorBInit()
    motor.StepperMotorBMove(1000,1000) # 1000steppers  1000us every step
    time.sleep(1)
    motor.StepperMotorBMove(-1000,1000) # 1000 steppers  1000us every step
    time.sleep(1)
 
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    StepperMotorATest()
    StepperMotorBTest()
```

### DC Motor

The DC Motor Interface of Motor Bridge Cape just as the picture below shows.

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/DCMotorBBG.jpg)

#### The functions of DC Motor

Here is the brief description about the functions of DC motor.

<u> **DCMotorInit(MotorName,Frequency)**</u>

*Description*: Init the DC Motor ant set the frequency.

*MotorName*: 1 ~ 4 stands for Motor1 ~ Motor4.

*Frequency*: Set the frequency of the DC motor.

<div class="admonition note">
<p class="admonition-title">Note</p>
If you change the DC motor frequency, the other DC Motors's frequency will change too.
</div>

<u> **DCMotorMove(MotorName,Direction,PWMDuty)** </u>

*Description*: Drive the DC Motor. Set the direction and PWMDuty.

*MotorName*: 1 ~ 4 stands for Motor1 ~ Motor4.

*Direction*: 1 stands for clock wise. 2 stands for counter-clock wise. 3 Stop the motor.

*PWMDuty*: 0 ~ 100 stands for 0%~ 100% of the pwm duty.

<u> **motor.DCMotorStop(MotorName)** </u>

*Description*: Stop the DC Motor.

*MotorName*: 1 ~ 4 stands for Motor1 ~ Motor4.

#### Example of DC Motor

Copy the following code to your project and save it as a python file.

```
import MotorBridge
import time
 
MotorName        = 1
ClockWise        = 1
CounterClockWise = 2
PwmDuty          = 90
Frequency        = 1000
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.DCMotorInit(MotorName,Frequency)
    while True:
        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)
        time.sleep(2)
        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)
        time.sleep(2)
        print "hello"
        motor.DCMotorStop(MotorName)
        time.sleep(2)
```

### Servo

The Servo Interface of Motor Bridge Cape just as the picture below shows.

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/ServoBBG.jpg)

#### The functions of Servo

Here is the brief description about the functions of Servo.

<u> **ServoInit(ServoName,Frequency)**</u>

*Description*: Init the Servo and set the frequency.

*ServoName*: 1 ~ 6 stands for Servo1 ~ Servo6.

*Frequency*: Set the frequency of the Servo, the default value is 50 Hz.

<u> **ServoMoveAngle(ServoName,Angle)** </u>

*Description*: Drive the Servo. Set the Servo angle.

*ServoName*: 1 ~ 6 stands for Servo1 ~ Servo6.

*Angle*: 0 ~ 180 stands for 0 degrees to 180 degrees.

#### Example of Servo

Copy the following code to your project and save it as a python file.

```
import MotorBridge
import time
ServoName   =  2
Frequency   =  50
Angle1      =  20
Angle2      =  160
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.ServoInit(ServoName,Frequency)
 
    while True:
        print 'Servo Test'
        motor.ServoMoveAngle(ServoName,Angle1)
        time.sleep(2)
        motor.ServoMoveAngle(ServoName,Angle2)
        time.sleep(2)
```

Upgrade the Firmware
--------------------

If there is something wrong with your cape, try to upgrade it. This section show how to upgrade the Motor Bridge Cape Firmware using BeagleBone Green. It also works on BBGW and BBB.

1.Insert the Motor Bridge Cape to BBG/BBGW/BBB, and connect BBG to your computer via USB cable.

2.Let your BBG connect to the internet, and access it via SSH as the picture below shows.

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/BBG1.PNG)

3.Download the code from Github by execute following commands

```
git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware
```

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/BBG2.PNG)

4.Navigate to "MotorBridgeCapeFirmware" and execute "make flash" command to flash the firmware.

```
cd MotorBridgeCapeFirmware/ && make flash
```

After a few seconds, you can see "Verification OK" information from the terminal

5.Check if the firmware is flash well by execute following command

```
i2cdetect -y -r 1
```

![](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/img/BBG3.PNG)

If you find the I2C address 0x4b,it means you have already refreshed the firmware successfully.

### Known issues

#### Can't find the I2C address

Q: I have already updated the firmware, but can't detect the i2c address?

A：Be sure that the P9_23 Pin is High, since the P9_23 is connect to Reset pin of STM32, I set the P9_23 pin to high level in the initialization function of MotorBridgeCape class.

#### Can't update the firmware

Q: When I update the firmware, the error information says that can't find the UART2?

A: You should enable the BB-UART2, since the BBG flash the firmware to Motor Bridge Cape by UART2..

    vi /boot/uEnv.txt

Then uncomment "cape_enable=capemgr.enable_partno=BB-UART2". Save and exit the editor, at last reboot your board.

#### The Cape is still not working

Q: I have already updated the firmware successfully and can detect the I2C address, but why I still can't get the cape working?

A: Please mention that there's a working mode switch on the board, be sure the switch is turn to working. If you still have other questions, please come to our forum.

#### fail to run make flash

Q: Can't run make flash with error code "Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device"

A: Please follow below steps to solve the issue. 

- Step 1: Run sudo nano /boot/uEnv.txt and then add below 2 lines at bottom of the uEnv.txt.

```
uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo
enable_uboot_cape_universal=1  
```

- Step 2. Restart the BBGW
- Step 3. Run the Sudo make flash again.

Resources
---------

-   [Schematic in PDF](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/res/Motor_Bridge_Cape_v1.0_sch.pdf)
-   [PCB in Eagle File](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/res/Motor_Bridge_Cape_v1.0brd.rar)
-   [Schematic in Eagle File](https://raw.githubusercontent.com/SeeedDocument/Motor_Bridge_Cape_v1.0/master/res/Motor_Bridge_Cape_v1.0sch.rar)
-   [Motor Bridge Cape Library](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)
-   [Motor Bridge Cape Firmware Source Code](https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>