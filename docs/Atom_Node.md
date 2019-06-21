---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node_View1.jpg)![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

- Sensor/Actuator connector

- XBee compatible socket

- Micro USB cable for programming and power

- Low consumption design

** Block Diagram**

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Beacon_ATOM_hardware.jpg)

** Hardware design instruction**

[http://www.seeedstudio.com/wiki/images/1/1b/Beacon_Atom_Hardware_Design_Analysis_.pdf](https://github.com/SeeedDocument/Atom_Node/raw/master/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

**Atom Node Overview**

Now let’s see what Atom Node looks like.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Hardware_View.jpg)

##   The firmware and software
---
###  The firmware

The firmware which have uploaded to Atom Node can driving  sensors and actuators.
Sensors available for Atom Node:

<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> ID
</th>
<th scope="col"> Name
</th>
<th scope="col"> Type
</th>
<th scope="col"> Control Mode
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> Grove - Button
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> Grove - Tilt Switch
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> Grove - Line Finder
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> Grove - PIR Motion Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> Grove - Infrared Reflective Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> Grove - Magnetic switch
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> Grove - Touch Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> Grove - IR Distance Interrupter
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> Grove - Hall Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 11
</th>
<td> Grove - Collision Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 12
</th>
<td> Grove - Moisture sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 13
</th>
<td> Grove - Light Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 14
</th>
<td> Grove - Rotary Angle Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 44
</th>
<td> Grove - Temprature Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 45
</th>
<td> Grove - Water Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 46
</th>
<td> Grove - 80cm Infrared Proximity Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row">47
</th>
<td> Grove - Infrared Temperature Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 48
</th>
<td> Grove - Slide Potentiometer
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 59
</th>
<td> Grove - Air quality sensor 1.0
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 50
</th>
<td> Grove - Electricity Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 51
</th>
<td> Grove - Alcohol Sensor
</td>
<td> Sensor
</td>
<td> Analog
</td></tr>
<tr>
<th scope="row"> 53
</th>
<td> Grove - Sound Sensor
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 54
</th>
<td> Grove – Ultrasonic Ranger
</td>
<td> Sensor
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 81
</th>
<td> Grove - Digital Light Sensor
</td>
<td> Sensor
</td>
<td> IIC
</td></tr>
<tr>
<th scope="row"> 82
</th>
<td> Grove - Barometer Sensor
</td>
<td> Sensor
</td>
<td> IIC
</td></tr>
<tr>
<th scope="row"> 102
</th>
<td> Grove - Temperature&amp;Humidity Sensor Pro –T
</td>
<td> Sensor
</td>
<td> ONE-Wire
</td></tr>
<tr>
<th scope="row"> 103
</th>
<td> Grove - Temperature&amp;Humidity Sensor Pro –H
</td>
<td> Sensor
</td>
<td> ONE-Wire
</td></tr>
<tr>
<th scope="row"> 110
</th>
<td> Grove - Infrared Receiver
</td>
<td> Sensor
</td>
<td> IR
</td></tr></table>

Current it can drive almost all of sensors. It is visible that the firmware is powerful.
Actuators available for Atom Node:

<table  cellspacing="0" width="40%">
<tr>
<th scope="col"> ID
</th>
<th scope="col"> Name
</th>
<th scope="col"> Type
</th>
<th scope="col"> Control Mode
</th></tr>
<tr>
<th scope="row"> 128
</th>
<td> Grove - Relay
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 129
</th>
<td> Grove - LED
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 135
</th>
<td> Grove - Multi Color Flash LED (5mm)
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 136
</th>
<td> Grove - Variable Color LED
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 137
</th>
<td> Grove - Buzzer
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 138
</th>
<td> Grove - Vibrator
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 201
</th>
<td> Grove - OLED Display 128*64
</td>
<td> Actuator
</td>
<td> IIC
</td></tr>
<tr>
<th scope="row"> 202
</th>
<td> Grove - OLED 96x96
</td>
<td>  Actuator
</td>
<td>  IIC
</td></tr>
<tr>
<th scope="row"> 223
</th>
<td> Grove - LED Bar
</td>
<td> Actuator
</td>
<td> IO
</td></tr>
<tr>
<th scope="row"> 224
</th>
<td> Grove - Infrared Emitter
</td>
<td> Actuator
</td>
<td> IR
</td></tr></table>

###   The software

There is an application program for configuring Atom Node modules. The program is running on Android devices. During the configuration process, the screen area of Android device will flash to transmit encoded parameters to the Atom Node via a light-sensitive transistor. The configuration interface is shown below:

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Configuration_Interface_.png)

##  Usage
---
Atom Node is an open-source hardware solution for the Internet of Things, which can support several Grove sensors and actuators to gather physical data and perform certain actions. The Atom Node needs to be configured before being put in use. After configuration, several modules can gather and transmit data wirelessly through RFBee.

We would like to take the temperature sensor as an example to illustrate the use of the Atom Node. Let's try to make this happen: when the temperature exceeds 28 ℃, a buzzer will sound.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Effect_diagram.jpg)

**Preparatory work:**
Using the device, you need at least an RFBee/Xbee (when using only one Atom Node, it is not necessary) and an Android device (the Atom Node does not include it). If you want the Atom Node to work, they are essential. And please make sure the baud rate of the RFBee/XBee is set at 57,600. If not, you need to modify the configuration, using your own method or upload the demo of [the Library file:RFBee](https://github.com/SeeedDocument/Atom_Node/raw/master/res/RFBee.zip) to RFBee. Then download [the application program package:BeaconUI](https://github.com/SeeedDocument/Atom_Node/raw/master/res/BeaconUI.zip) and install on an Android device.

###   Demo 1: Use one Atom Node

Now using an Atom Node working in IFTTT mode, follow the steps below:

*   Connect a Grove - Temperature to ADC port and Grove - Buzzer to PWM port using [Grove - Universal 4 Pin cables](/Grove_System/#grove-cables).

*   Plug RFBee in the Bee Socket.
*   Press the button on one side of the Atom Node to turn it on. The LED on the other side will light up. Then press the button again to make the Atom Node enter the configuration mode. Meanwhile, the user indicator is red.

*   Open the Atom Node app; you can see the following interface:

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Interface1.jpg)

*   Click the plus sign at the upper right corner to add a device, a selection panel will pop up.
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface2.jpg)

Let’s pause for a while to briefly introduce the interface.

1) Device Name: this can be any word. Such as “Sensor-temperature” or any word you like.

2) Sensor: choose a sensor.

3) The rest of the configuration is for the Actuator. If you don’t need one, choose NULL and the rest of the options are automatically ignored.


Now let's configure it and set the device name as "temp".

*   Refer to the picture below, Input "temp" as the device name. Choose "Grove - Temperature" in "Sensor" and choose "Grove - Buzzer" in Actuator. Choose any other options besides "Null" in "Sensor Radio Frequency", Input the "if" value and choose on in "then":
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface9.png)

<font color="red">In indie mode, the trigger source should choose the device itself, therefore you should choose "temp" in the drop-down box of "Trigger from". But now there's only a "Null" option. Just ignore this problem. After you see the device name in the device list, you can reconfigure when the device name appears in  "Trigger from".</font>

*   Place it on the Android device screen. Note that the light sensor is facing the screen. It is better that the brightness of the screen is set to about 35%.
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface3.jpg)

*   Click "Submit". It will start configuring. <font color="red">After successful configuration, the user indicator lights green and blinks.</font>If the configuration fails, click Again. If it keeps failing, you can refer to [FAQ](/Atom_Node).

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface4.jpg)

*   We have completed the configuration, you can see it in the device list now.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface5.jpg)

<font color="red">Remember that you have just selected trigger source as Null. You need to reconfigure it.</font>

*   Once the temperature sensor reads a value exceeding 28 ℃, the buzzer will sound.

###   Demo 2: Use two Atom Node

Using two Atom Nodes working in IFTTT mode, you may follow the steps below:

*   Connect a Grove - Temperature to the ADC port of Atom Node and plug an RFBee (Baud rate 57,600) to the Bee socket.

*   Connect a Grove - Buzzer to the PWM port of another Atom Node and plug an RFBee to the bee Socket.

*   Open the Atom Node app. Click the plus sign on the upper right corner. We set the device name as “temp” and choose Grove - Temperature in "sensor" as follows:
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface6.jpg)

*   Turn on the Atom Node and enter configuration mode by pressing the button, then place it on the Android screen. Click Submit. It will start configuring.

*   After completing the configuration of one Atom Node, you can see it in the device list.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface5.jpg)

*   Then configure the other Atom Node, connecting a Grove - Buzzer in a similar fashion.
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface7.jpg)

When configuring the actuator, set the actuator's name. Then choose the trigger source of the actuator in “Trigger from”. We would like to use the previously configured device "temp" to trigger the actuator: therefore we should choose "temp" in the drop-down box of “Trigger from”. There are some other trigger conditions and actions, like “If” and “then” which help you to build a link between a certain condition and corresponding actions. By the way, the “If” values should always follow the data type of the Sensor you used.

*   When the two Nodes have been configured, it will start working. Then you can see the user LED is green.
![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Node_Interface8.jpg)

##   Work Status Description
---
<table  cellspacing="0">
<tr>
<th scope="col"> **Operate**
</th>
<th scope="col"> **Status**
</th>
<th scope="col"> **Function**
</th></tr>
<tr>
<th> Press the power button
</th>
<td> Power LED will light(Blue)
</td>
<td> Turn on the atom node
</td></tr>
<tr>
<th> Press the power button after turn on Atom Node
</th>
<td> Power LED is light(Blue),User LED will light(if unpair, User LED is red;After successfully paired,User LED is green and blink)
</td>
<td> Enter configuration mode
</td></tr>
<tr>
<th> Press the power button when in configuration mode
</th>
<td> Power LED is light(Blue),User LED will off
</td>
<td> Exit configuration mode
</td></tr>
<tr>
<th> Long Press the power button
</th>
<td> All LED will off and Buzzer will Sound
</td>
<td> Turn off Atom Node
</td></tr>
<tr>
<th> Double-click the power button
</th>
<td> User Indicator will off or on
</td>
<td> Turn on/off User Indicator
</td></tr>
<tr>
<th> Four-click the power button
</th>
<td> all indicators keep states
</td>
<td> Clear data
</td></tr>
<tr>
<th> Connect Atom Node to PC using  USB cable
</th>
<td> Charge LED will light(Charge LED is red in charge, After charging complete,Charge LED is Green), Power LED will light
</td>
<td> Charge for Battery or update the firmware
</td></tr></table>

##  Upgrade the firmware
---
###  Connect device and install the driver

*   Download [the Atom Node Driver File](https://github.com/SeeedDocument/Atom_Node/raw/master/res/Atom_Node_Driver.zip) and save it.
*   Connect the Micro-USB cable to the Atom Node and connect the other side of the Micro-USB connector to the computer's USB port.
*   Wait for the new found hardware prompt.If the installer does not launch automatically, Navigate to the Windows Device Manager  and find the Seeeduino Lite listing.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/A_Unknow_Device.jpg)

*   Right click and choose Update driver. When asked to install automatically or from a specific location, select "Browse my computer for driver software".

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Update_Driver.jpg)

*   Choose "Search for the best driver in these locations", and check the box "incude this location in the search". Click the Browse button and navigate to drive you have downloaded. Select the drivers folder an click **OK**.

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Browse_the_Driver.jpg)

![](https://github.com/SeeedDocument/Atom_Node/raw/master/img/Update_the_Driver.jpg)

###  Modify File: boards.txt and  USBCore.cpp

*   Open up Arduino-1.0.1/hardware/arduino/cohttps://github.com/SeeedDocument/Atom_Node/raw/master/res/arduino directory, replace the file:USBCore.cpp with [the new USBCore.cpp](https://github.com/SeeedDocument/Atom_Node/raw/master/res/USBCore.zip).

*   And replace file：boards.txt with [the new boards.txt](https://github.com/SeeedDocument/Atom_Node/raw/master/res/Boards-Atom_Node-.txt) in the path:Arduino-1.0.1/hardware/arduino.

###  Download the required library files and Atom.Node firmware

*   The latest Atom.Node firmware: [https://github.com/reeedstudio/Atom_Node](https://github.com/reeedstudio/Atom_Node)

*   The latest Atom.Node Library:  [https://github.com/reeedstudio/Atom_Node_Libraries](https://github.com/reeedstudio/Atom_Node_Libraries)

###  Upload program using Arduino IDE

*   Open the Atom_Node.ino of Atom.Node firmware file

*   Select Seeeduino Node from the Tools | Board menu of the Arduino environment. And select the correct port.
*   Compile and uplaod the code.

Now you have completed the firmware upgrade.

##  Resources
---
- [Atom_Node_Eagle_File.zip](https://github.com/SeeedDocument/Atom_Node/raw/master/res/Atom_Node_Eagle_File.zip)

- [Atom Node Library](https://github.com/reeedstudio/Atom_Node_Libraries)

- [Atom Node firmware](https://github.com/reeedstudio/Atom_Node)

- [the application program:BeaconUI](https://github.com/SeeedDocument/Atom_Node/raw/master/res/BeaconUI.zip)

- [Hardware design instruction](https://github.com/SeeedDocument/Atom_Node/raw/master/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>