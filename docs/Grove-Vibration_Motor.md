---
title: Grove - Vibration Motor
category: Actuator
bzurl: https://seeedstudio.com/Grove-Vibration-Motor-p-839.html
oldwikiname: Grove_-_Vibration_Motor
prodimagename: Gvib.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/gvib.jpg
surveyurl: https://www.research.net/r/Grove-Vibration_Motor
sku: 105020003
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/img/Gvib.jpg)

This is a mini vibration motor suitable as a non-audible indicator. When the input is HIGH, the motor will vibrate just like your cell phone on silent mode.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

Version Tracker
---------------

| Revision | Description                                                    | Release       |
|----------|----------------------------------------------------------------|---------------|
| v0.9b    | Initial public release                                         | May 10, 2011  |
| v1.0     | Directly uses an I/O port to drive Vibration Motor             | Nov 5, 2011   |
| v1.2     | Transistor added, uses bigger current to drive Vibration Motor | July 11, 2013 |

Features
--------

-   Grove compatible
-   Non-audible
-   Low power consumption
-   High reliability

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

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
Typ
</th>
<th scope="col">
Max
</th>
</tr>
<tr align="center">
<th scope="row">
Operating Voltage
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Control Mode
</th>
<td colspan="3" rowspan="1">
Logic Level
(When Logic HIGH, the motor is ON. When LOW, the motor is OFF.)
</td>
</tr>
<tr align="center">
<th scope="row">
Rated speed
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

Platforms Supported
-------------------

Usage
-----

### With [Arduino](/Arduino "Arduino")

To make it vibrate is just as easy as to turn on an LED. Here is an example showing how to turn on the vibration motor.

1. Plug it onto the Digital port 9 of Grove - Base Shield using a Grove cable.
2. Plug the Grove - Base Shield onto Arduino.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/img/IMG_0506.jpg)
3. Connect Arduino to PC by using a USB cable.
4. Copy and paste code below to a new Arduino sketch, and upload it to your Arduino. 

Use the demo code shown below:

```
int MoPin = 9;    // vibrator Grove connected to digital pin 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}

```

Now, feel the vibration of your motor!

### With Raspberry Pi

1.You should have a Raspberry Pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePiPlus).

3.Connection

-   Plug the sensor to grovepi socket D8 by using a grove cable.

4.Navigate to the demos' directory:
```
cd yourpath/GrovePi/Software/Python/
```
-   To see the code
```
nano grove_vibration_motor.py   # "Ctrl+x" to exit #
```
```
import time
import grovepi

# Connect the Grove Vibration Motor to digital port D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # Start vibrating for 1 second
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # Stop vibrating for 1 second, then repeat
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```
5.Run the demo.
```
sudo python grove_vibration_motor.py
```

##Project

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Lotus/master/img/gun.jpg)

Inspired by OVERWATCH, we have made a very cool Wooden Laser Gun toy for fun these day!

The Wooden Laser Gun and the Gun Target are all based on an Arduino board called Seeeduino Lotus. The laser emitter on the Laser Gun is controlled to fire laser pulse to "activate" the Gun Target. And there are 3 light sensors on the Gun Target to detect the laser pulse. It seems very simple right? If you are interested in our project, please make one for yourself or your child! It's worth to spend one day DIY it as a Xmas present.    

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/make.png)](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

Resources
---------

-   [Grove - Vibration Motor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/Grove-Vibration_Motor_Eagle_Files.zip)
-   [S9013 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/S9013.pdf)
-   [ANDA-B1020 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/ANDA-B1020_datasheet.pdf)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->
