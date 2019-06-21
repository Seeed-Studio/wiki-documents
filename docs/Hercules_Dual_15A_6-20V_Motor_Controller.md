---
name: Hercules Dual 15A 6-20V Motor Controller
category: Arduino
bzurl: https://seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html
oldwikiname: Hercules_Dual_15A_6-20V_Motor_Controller
prodimagename: Hercules_03.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Hercules controller.jpg
surveyurl: https://www.research.net/r/Hercules_Dual_15A_6-20V_Motor_Controller
sku: 105010000
---

![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/Hercules_03.jpg)

Hercules Dual 15A 6-20V Motor Controller is a high current motor drive control board. including micro controller processor, motor drive circuit, charging circuit and protection circuit. It features a complete solution to power supply, control and drive.

Compared with L298, its half bridge motor controller IR2104 and N-MOSFET take prominent advantage to drive heavy load device with output current even up to 15A. Hercules Dual motor controller is wide power supply designed, so the universal 7.4~11.1V lipo battery in the remote car and model airplane can be applied as well. Fuse will protect the board while overloaded, the correspondent LED show the protection status.

This motor controller is Arduino compatible. Best of all, it is focusing on high- expansion. The reserved standard Grove ports bring you a convenient access to abundant modules on the platform of motor car, such as Servo and Encoder, thus it embraces multi-functions that you can build up versatile masterpieces.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html)

Features
--------

-   Full bridge drive circuit based on MOSFET supports two independent channels， each channel up to 15A
-   LED shows fuse protection status
-   Several Grove ports, conveniently connect with servo, encoder and sensors
-   ATMega328 controller, Arduino compatible

Specifications
--------------

| Item                      | Min | Typical | Max  | Unit |
|---------------------------|-----|---------|------|------|
| Working Voltage           | 6.0 | -       | 20.0 | VDC  |
| Motor Current per Channel | -   | -       | 15   | A    |
| I/O Voltage               | -   | 5       | -    | VDC  |
| I/O Logic(TTL)            | -   | 5       | -    | VDC  |
| Temperature Range         | -40 |         | +125 | C    |

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/4WD_Robot_Controller_Interface_Function.jpg)

**A:** Encoder Connectors.

**B:** Grove Connectors.

**C**: Servo Connectors.

**D:** ATMega328P IC.

**E:** SPI Connector.

**F:** Programming Connector.

**G:** Reset Button.

**H:** Channel 1 Motor Blow Fuse.

**J:** Channel 2 Motor Blow Fuse.

**K:** DC Motor Channel 1 Screw Terminals.

**L:** DC Motor Channel 2 Screw Terminals.

**M:** Battery Input Screw Terminals.

Usage
-----

### Connectors Overview

**Encoder Connectors**

There are encoders in the motors of the [Hercules platform](http://wiki.seeedstudio.com/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) to measure the motor speed. These two Connectors are used to connect these encoders. The header also supplies 5VDC to power the encoder.

**Grove Connectors**

These Servo Connectors are setup for standard servo style headers GND, +5V and Signal to control the angle of servo.

**Battery Input Screw Terminals**

The battery connectors are marked with a GND and VM on the input screw terminal. VM is the positive side of the battery . The GND is the negative side of the battery. Please make sure the input voltage range in 6~20v to avoid any damage.

**Motor Screw Terminals**

The motor screw terminals are marked with M1A / M1B for channel 1 and M2A / M2B for channel 2. There is no specific polarities for the motors. If the motor runs in the opposite way that you want, you may reverse the motor wires to reverse rotation. Please note that the J21&J20,J22&J23 are parallel connected, that is, you should connect the left 2 motors of the [Hercules](http://wiki.seeedstudio.com/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) to one channel, and the right 2 motors to the other channel.

### The Usage

<div class="admonition note">
<p class="admonition-title">Note</p>
The controller cannot be powered directly from the programming connector which connect to PC for code downloading.
</div>

The controller must be powered from the Power screw J1, by batteries or a DC supply (6-20V). The controller uses 2 15A slow blow fuses to protect the “H” bridges. After connecting the power supply:

-   Connect a DC Motor to Channel 1 Screw Terminals.
-   Connect the controller to your computer with UartSBee V4 and a USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/IMG_0204-1-.JPG)

-   Load the [Motor Controller Library](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/Motor_Controller_Library.zip) and run the "motorDriverDemo" program.

```
    #include "motordriver_4wd.h"
    #include <seeed_pwm.h>

    void setup()
    {
        MOTOR.init(); //Init all pin
    }

    void loop()
    {
        MOTOR.setSpeedDir(DIRF, 80); //Set motor 1 and motor 2 direction:DIRF, Speed:80 (range:0-100).
        delay(3000);
        MOTOR.setSpeedDir(DIRR, 80); //Set motor 1 and motor 2 direction:DIRR, Speed:80 (range:0-100).
        delay(3000);
    }
```

<div class="admonition note">
<p class="admonition-title">Note</p>
The motor has two run direction: DIRF(forward) and DIRR(backward).If the motor runs in the opposite way, you may reverse the motor wires to reverse rotation.
</div>


-   Disconnect the controller from your computer.
-   Connect the controller to a battery or DC supply by the battery input screw terminals.
-   Now you can see the motor rotate at a speed.

### Reference

The "motorDriverDemo" contains some functions. To figure out how every line affects the turnout, you have to study the comments carefully. Please refer to the below functions defined in the motodriver_4wd Library.

**1. setStop1()**

Description: Stop motor 1

**2. setStop2()**

Description: Stop motor 2

**3. void setSpeedDir(int ispeed, unsigned char dir)**

Description: Set the speed and direction of motor1 and motor2

**4. void setSpeedDir1(int ispeed, unsigned char dir)**

Description: Set motor1 speed and direction

**5. void setSpeedDir2(int ispeed, unsigned char dir)**

Description: Set motor2 speed and direction

Expand Usage
------------

Based on the Hercules Dual 15A 6-20V Motor Controller, we have designed a Remote Control Car which has strong power and good effect of shock absorption.

### Remote control

**Items Required:**

- RFBee Module
- Grove - Thumb Joystick
- Grove - XBee Carrier
- Battery

RFBee module: Used for remote send data.

A Grove - Thumb Joystick: Using it to remote control car.

Grove - XBee Carrier: Offers convenience to use RFbee. We can use the MiniUSB Socket to upload code for RFBee.

<div class="admonition note">
<p class="admonition-title">Note</p>
You can connect to PC using USB cable to replace Battery.
</div>

-   Plug RFBee into Bee Socket of Grove - XBee Carrier.
-   Download the [RFBee Library](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/RFBee_Library.zip) and Unzip it into the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries.
-   Download and Upload the demo: [Remote lvc](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/Remote_lvc.zip) to one RFbee. Before uploading, you need to select Tools->Board->Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega168 and choose the correct serial port from the Tools menu.
-   Connect Grove - Thumb Joystick to IIC Grove Connector of Grove - XBee Carrier.
-   Connect battery into Battery Connector of Grove - XBee Carrier.

![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/Remote_Control.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>
You can refer the Interface function of Grove - XBee Carrier wiki for connector.
</div>


### Receiver
**Items Required:**

- RFBee Module
- Grove - XBee Carrier
- Hercules Dual 15A 6-20V Motor Controller

RFBee module: Used for remote send data.

Grove - XBee Carrier: Offers convenience to use RFbee. We can use the MiniUSB Socket to upload code for RFBee.

The 15A 6-20V Motor Controller: Drive Motor to rotate.

-   Plug RFBee into Bee Socket of Grove - XBee Carrier.
-   Connect IIC of Grove - XBee Carrier to IIC Connector of Motor Controller.
-   Connect four motor to Motor1A/Motor1B(Motor2A/Motor2B).

We use the **4WD hercules mobile robotic platform** for the motor controller as shown below:
![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/4WD_Robot_Car_Body.jpg)

-   Upload The code to another RFBee module.
```
    // demo of rfbee send and recv
    #include <Arduino.h>
    #include <EEPROM.h>
    #include <RFBeeSendRev.h>
    #include <RFBeeCore.h>
    #include <Wire.h>

    #define FRAMESTART1                 0x53                // data frame start1
    #define FRAMESTART2                 0x01                // data frame start2
    #define FRAMEEND1                   0x2f                // data frame end1
    #define FRAMEEND2                   0x45                // data frame end2

    void sendToI2C(unsigned char ilen, unsigned char *idata)
    {
        Wire.beginTransmission(4);                           // transmit to device #4
        for(int i = 0; i<ilen; i++) {Wire.write(idata[i]);}  // sends one byte
        Wire.endTransmission();                              // stop transmitting
        
    }

    void setup(){

        pinMode(10, OUTPUT);
        RFBEE.init();
        Wire.begin();
        Serial.begin(38400);
        Serial.println("ok");
    }

    unsigned char rxData1[200];               // data len
    unsigned char len1;                       // len
    unsigned char srcAddress1;
    unsigned char destAddress1;
    char rssi1;
    unsigned char lqi1;
    int result1;

    unsigned char cntGetDta = 5;

    void loop()
    {
        if(RFBEE.isDta())
        {
            result1 = receiveData(rxData1, &len1, &srcAddress1, &destAddress1, (unsigned char *)&rssi1 , &lqi1);
            Serial.println(len1);
            for(int i = 0; i< len1; i++)
            {
                Serial.print(rxData1[i]);Serial.print("\t");
            }
            
            Serial.println();
            
            sendToI2C(6, rxData1);
        }
    }
```

-   The Library [Motodriver 4wd.zip](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/Motodriver_4wd.zip) for Motor Controller. Before uploading, you need to select Tools->Board->Arduino Duemilanove w/ ATmega328.

### Result

The Remote Control Car based on the Hercules Dual 15A 6-20V Motor Controller and 4WD hercules mobile robotic platform can load a container of water whose capacity is 19L.

![](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/img/4WD_Robot.jpg)

Resources
---------

- [4WD Robot Controller Eagle File](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/Source_file.zip)
- [4WD Robot Controller Schematic.pdf](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/4WD_Robot_Controller_Schematic.pdf)
- [Motor Controller Library](https://raw.githubusercontent.com/SeeedDocument/Hercules_Dual_15A_6-20V_Motor_Controller/master/res/Motor_Controller_Library.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>