---
name: Shield Bot V1.2
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield_Bot_V1.2
prodimagename: Shield_Bot_Kit_Product_Image.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/shield bot.jpg
surveyurl: https://www.research.net/r/Shield_Bot_V1_2
sku: 110060010
---

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Shield_Bot_Kit_Product_Image.jpg)

Shield Bot is an easy to use entry level robotic platform that helps you leap to Robotics. You could build a line follower robot in few minutes by using the library & sketch provided.

Compared to the previous version, the Shield Bot V1.2 has not changed much.
<div class="admonition note">
<p class="admonition-title">Note</p>
Compatible Arduino Board is not included, get a Seeeduino or Arduino.
</div>

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Shield-Bot-p-1380.html)

Features
--------

-   **Easy to start** - The Shieldbot is plug & play. It can be run out of the box in minutes
-   **Expandable for imagination**- Solderless Grove expansion ports enable easy attachment of more sensors and actuators. It Shield headers allows use of any additional Arduino shields
-   **Open source** - Its designed to be hacked, adapted and transformed into whatever you want it to be!
-   **Arduino Based** - The Shieldbot is an Arduino shield. The extensive Arduino community and shield ecosystem can be used for endless expansion!
-   **Charging efficiency** - Can fully charge quickly. It has a high efficiency.

Specifications
--------------

### General Specification

| Item                        | Parameter                                             |
|-----------------------------|-------------------------------------------------------|
| Sensor                      | 5x IR reflectance sensors for line and edge following |
| Li-ion rechargeable battery | 900 mAh                                               |
| Gearmotor                   | Two durable 160:1 micro metal Gearmotors              |
| Grove Port                  | 6x Grove expansion ports                              |
| Shield header               | Arduino Shield Expansion Headers                      |

### Charging Specification

**Charge mode and charge efficiency as the following table:**

| Mode       | Charge Current(A) | the input power(W) | Charge power(W) | Charge Efficiency(%) | Charge time(h) |
|------------|-------------------|--------------------|-----------------|----------------------|----------------|
| USB Charge | 0.396             | 3.94               | 3.56            | 90.36                | 2.50           |
| Vin Charge | 0.7               | 6.78               | 6.30            | 92.92                | 1.41           |

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Shield_Bot_V1.2_Foto_1.JPG)

-   **Power Switch**: When ShieldBot is off, The shield bot can not run. But you can use the **USB Charge Port** to charge for battery.
-   **USB Charge Port:** USB mini-B, used for charging for battery.
-   **Grove Ports:** Grove ports access pins D0, D1, D2, D3, D4, D5, A4, A5.can connect Grove modules to these Grove ports.
-   **IR Line Finder Potentiometer**: Used for adjusting the Line Finders Sensitivity. Clockwise adjustment, the Sensitivity increases; Counter-clockwise adjustment,the Sensitivity decreases.
-   **IR Line Finders:** S1 to S5. Blue if non reflective surface is detected (ex Black tape line)
-   **Line Finder Switch:** Turn switch towards "ON" to connect line finders to I/O pins(Occupied pins are A0,A1,A2,A3,D4) of Arduino. The LineFollowingSimple demo in library is used line finders output signal to control Shield Bot run. If switch is toward "OFF", Seeeduino/Arduino cannot control Shield Bot through line finders output signal.
-   **Arduino Shield Expansion Headers**: Shield Bot can truly stack other shields.

<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li>If S5 is enabled you can not use grove ports j14 and j13.</li>
<li>You may only use ONE of the Arduino's serial line, UART grove port or j11 as they all share the D1/TX line.</li></ol>
</div> 

Status Lights
-------------

The Shield Bot has lots of LEDs to show you whats going on!
![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Shield_bot_1.2_LEDs.JPG)

| Light Numbers      | Function                | Status                                                                                    |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------|
| D22                | Power                   | Green when Shieldbot is on. When ShieldBot is off, ShieldBot can only charge for battery. |
| D23 and D24        | Charging status         | Red means charging, green means done charging.                                            |
| D18                | Reset                   | Red if reset button is pressed.                                                           |
| D11 and D12        | Right Motor Indicators  | Green means forwards, red means backwards, both means stopped.                            |
| D13 and D15        | Left Motor Indicators   | Green means forwards, red means backwards, both means stopped.                            |
| D5 D10 D14 D17 D19 | Light Sensor Indicators | Blue if non reflective surface is detected (ex Black tape line).                          |

Structure
---------

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Position_for_seeeduino.jpg)
The Part 1,Part 2 and Part 3 are made by our 3D printer. You can also see the Installation Position for Seeeduino board.

Getting Started
---------------

Getting the Shieldbot setup is quick and easy! Follow these steps to get your robotic companion up and running.

### The Preparatory Work

-   First you need plug Arduino into the buttom of Shield Bot and connect it to PC using a USB cable .

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/ShieldBot_Programming2.JPG)

-   You would better turn Power Switch towards *OFF* before upload the code. Otherwise, It runs when you are not attention and may scare you.

We've built a nice library for the Shield Bot with useful functions to control your Shield Bot and a number of examples so you can get it up and running in no time!

-   Download the library from [here](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/Shield_Bot_1.2_Library.zip) and Unzip.
-   Put ShieldBot file into the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries.

### Install the battery

The battery is needed when you want to make Shield Bot run on the ground.

<div class="admonition note">
<p class="admonition-title">Note</p>
<ol><li>
Once the battery is installed, you can charge battery with a mini-b USB cable. When the battery is charging, a red LED will be on. When it is done charging, a green LED will be lit.</li>
<li>When upload the code, you need connect the USB port of your Seeeduino to your PC. The USB port on the shield bot is only used for charging for battery.</li></ol>
</div> 

### Demo 1: Drive motors to Run

-   Open the Arduino environment and go to File->Examples->Shieldbot->drive to load the first Shield Bot example. Make sure you select the correct Arduino Board and Serial Port.
-   Then upload code onto the Arduino. Once the upload is complete, the console should show "Done Uploading".
-   You can unplug the USB cable after completing the upload.
-   Then put the Shield Bot on a spacious place and turn the power switch turn '**ON'**.
-   Now the Shield Bot will run at a certain speed.

### Demo 2: Following Black Line

The Shield Bot can detect reflective surface based on the Line finder sensors (s1,s2,s3,s4,s5). The blue indictors will lit if non reflective surface is detected (ex Black tape line). Now let us use it to make the run following the black line. 

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Make sure the dip switches are turned ON, and none of your shields are using pins A0, A1, A2, A3 or D4.
</div>

-   Reupload the new demo:LineFollowingSimple after connect Seeeduino to PC using the USB cable.
-   After completing the upload, put the Shield Bot in the pre-built black runway.

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Shield_Bot_Line_Finder.jpg)

-   You can adjust the IR Line Finder Potentiometer to change the Line Finders Sensitivity. When Clockwise adjustment, the Sensitivity increases, Counterclockwise adjustment,the Sensitivity decreases. Have a try!

### Adaptation Instances

**1. Clock**

This is a incredibly simple, working clock. The wheels turn one forward and one reverse, spinning the reflectance sensors around the wheel indicating the minutes. Upon the hour mark the bot drives forward and advances the linear slide to indicate hours. Extra credit for the free linear rails made out of laser cut scrap and cellophane tape!

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Team1_2.jpg)

**2. Shot.Bot**

It was a really gorgeous device that many people in the event remarked they'd like to buy. The line following robot would take orders then drive the track to the dispenser where it would use a servo to actuate an amount of either of 3 beverages, before driving back to the patron.

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Team7_2.jpg)

**3. Simon**

This is a beautifully designed, though not quite finished, 2 player heads up simon clone. The bot plays out a tune with lights and you use the laser cut puck, complete with braille so even the sight impaired could play, to mark the tones on the whiteboard. The Shieldbot then drives forward and uses the sensors to see if you've marked correctly. You want to get more right answers than your opponent so the bot drives towards their goal!

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Team6_2.jpg)

**4. HackPHX-Plotter**

The device is very close to knocking off the Der Kritzler 2d drawing machine which is a vertical x,y table with makerslide and had the ingenious idea of bolting the tires of the Shield bot down such that when it was put in reverse, it lifted the pen off the drawing surface :) They even worked with the designer to come up with a PC side user interface!

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/Team8.jpg)

Reference
---------

To use the Shield Bot library simply add the Shield Bot library and declare a Shieldbot object at the top of your Arduino code before your void setup()

```
#include <Shieldbot.h>  //includes the Shield Bot Library
 
Shieldbot shieldbot = Shieldbot(); //decares a Shieldbot object
```

<u> **setMaxSpeed(int both)**</u>

*Description*: set max speed of two motors.

*both*: between 0(basically off) and 255(full speed)

<u> **setMaxSpeed(int left, int right)** </u>

*Description*: Write a max speed to the left and right motor.

*left,right*: Left is the speed of the left motor. right is the speed of the right motor. between 0(basically off) and 255(full speed)

<u> **rightMotor(char mag)** </u>

*Description*: Enables the right motor, negative for backwards, positive for forwards. If you make one motor drive slower, it will turn in that direction. If you make the motors turn in opposite direction it will spin.

*mag*: the direction to spin the right motor; -128: backwards all the way, 0: donot move, 127: forwards all the way

<u> **leftMotor(char mag)** </u>

*Description*: Enables the left motor, negative for backwards, positive for forwards.

*mag*: the direction to spin the left motor; -128: backwards all the way, 0: donot move, 127: forwards all the way

<u> **forward()** </u>

*Description*: Enables the motors to send the bot straight forward at the setSpeed().

<u> **backward()** </u>

*Description*: Enables the motors to send the bot straight backward at the setSpeed().

<u> **drive(char left, char right)** </u>

*Description*: All purpose drive call. Calls leftMotor and rightMotor directly.

*left*: between -128 (left motor backwards 100% of max speed), 0 (standing still), and 127 (left motor forwards 100% of max speed) :*right*: between -128 (right motor backwards 100% of max speed), 0 (standing still), and 127 (right motor forwards 100% of max speed)

<u> **stop()** </u>

*Description*: Disables the motors. You may also use drive(0,0).

<u> **stopLeft()** </u>

*Description*: Disables the left motor. You may also use drive(0,X).

<u> **stopRight()** </u>

*Description*: Disables the right motor. You may also use drive(X,0).

<u> **fastStop()** </u>

*Description*: Disables the right motor. You may also use drive(X,0).

<u> **fastStopLeft()** </u>

*Description*: Disables the left motor quicker. This is considered possibly bad for the motor chip so use at your discretion

<u> **fastStopRight()** </u>

*Description*: Disables the right motor quicker. This is considered possibly bad for the motor chip so use at your discretion

<u>**readS1(), readS2(), readS3(), readS4(), readS5()** </u>

*Description*: Reads any of the 5 light sensors on board. NOTE you NEED to connect the sensors to the arduino ports using the dip switch block (switches TOWARDS the numbers and ON text) These switches would otherwise allow you to use those pins for other things if you didn't want to use your light sensors

*Returns*: LOW if the surface reflects (ex. white) and HIGH if the surface doesn't reflect anything (ex BLACK)

![](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/img/ShieldBot_driveLibrary.png)

Resources
---------

-   [Shield Bot 1.2 Library](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/Shield_Bot_1.2_Library.zip)
-   [Shield Bot 1.2 Eagle Files](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/Shield_Bot_1.2_eagle_files.zip)
-   [ShieldBot 1.2 Schematic](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/Shield_Bot_v1.2.pdf)
-   [IR Reflectance Sensor RPR-220 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/RPR-220.pdf)
-   [Step up regulator ISL97516 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/ISL97516.pdf)
-   [Li-ion charger BQ2057 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/BQ2057.pdf)
-   [H-Bridge Motor Driver L298 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Shield_Bot_V1.2/master/res/L298.pdf)
-   [Op-Amp LMV358 Datasheet](http://www.ti.com/product/lmv358)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Shield_Bot_V1.2 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>