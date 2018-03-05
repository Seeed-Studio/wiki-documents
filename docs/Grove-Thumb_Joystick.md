---
title: Grove - Thumb Joystick
category: Sensor
bzurl: https://seeedstudio.com/Grove-Thumb-Joystick-p-935.html
oldwikiname: Grove_-_Thumb_Joystick
prodimagename: Bgjoy1.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/bgjoy1.jpg
surveyurl: https://www.research.net/r/Grove-Thumb_Joystick
sku: 101020028
tags: grove_analog, io_3v3, io_5v, plat_duino,plat_pi
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Bgjoy1.jpg)

Grove - Thumb Joystick is a Grove compatible module which is very similar to the 'analog' joystick on PS2 (PlayStation 2) controllers. The X and Y axes are two ~10k potentiometers which control 2D movement by generating analog signals. The joystick also has a push button that could be used for special applications. When the module is in working mode, it will output two analog values, representing two directions. Compared to a normal joystick, its output values are restricted to a smaller range (i.e. 200~800), only when being pressed that the X value will be set to 1023 and the MCU can detect the action of pressing.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)

Features
--------

-   Grove Interface
-   5V/3.3V Compatible
-   Analog Output

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Application Ideas
-----------------

-   Game Controller
-   Robot remote control

###[Project - 2048 Game](http://www.instructables.com/id/DIY-a-Raspberry-Game-2048/)

This is a Pi game project which is consists of Grove - Thumb Joystick. Click on the images below to get more information about this project.


[![](https://github.com/SeeedDocument/Grove-Thumb_Joystick/raw/master/img/pi_game_new.jpg)](http://www.instructables.com/id/DIY-a-Raspberry-Game-2048/)


Specifications
--------------

| Item                                | Min  | Typical | Max  | Unit |
|-------------------------------------|------|---------|------|------|
| Working Voltage                     | 4.75 | 5.0     | 5.25 | V    |
| Output Analog Value （X coordinate） | 206  | 516     | 798  | \    |
| Output Analog Value （Y coordinate） | 203  | 507     | 797  | \    |

Platforms Supported
-------------------

Usage
-----

### With [Arduino](/Arduino "Arduino")

The Grove - Thumb Joystick is an analog device that outputs analog signal ranging from 0 to 1023. That requires us to use the analog port of Arduino to take the readings.

1.Connect the module to the A0/A1 of [Grove - Base Shield](http://www.seeedstudio.com/grove-base-shield-p-754.html) by using the 4-pin grove cable.

2.Plug the Grove - Basic Shield into Arduino.

3.Connect Arduino to PC by using a USB cable.
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Grove-Thumb_Joystick.jpg)

4.Copy and paste code below to a new Arduino sketch.

```
/*
  Thumb Joystick demo v1.0
  by:http://www.seeedstudio.com
  connect the module to A0&A1 for using;
*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

5.You can check the values of the output analog signals by opening the Serial Monitor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Grove-Thumd_Joystick_Result.jpg)

The output value from the analog port of Arduino can be converted to the corresponding resistance by using the formula:R=(float)(1023-sensorValue)\*10/sensorValue.

### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development environment, otherwise please follow [here](/GrovePiPlus).

3.Connection

-   Plug the sensor to grovepi socket A0 by using a grove cable.
![](https://github.com/SeeedDocument/Grove-Thumb_Joystick/raw/master/img/Pi_Joystick%20connection.jpg)
4.Navigate to the demos' directory:
```
    cd yourpath/GrovePi/Software/Python/
```
-   To see the code
```
    nano grove_thumb_joystick.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Thumb Joystick to analog port A0

    # GrovePi Port A0 uses Arduino pins 0 and 1
    # GrovePi Port A1 uses Arduino pins 1 and 2
    # Don't plug anything into port A1 that uses pin 1
    # Most Grove sensors only use 3 of their 4 pins, which is why the GrovePi shares Arduino pins between adjacent ports
    # If the sensor has a pin definition SIG,NC,VCC,GND, the second (white) pin is not connected to anything

    # If you wish to connect two joysticks, use ports A0 and A2 (skip A1)

    # Uses two pins - one for the X axis and one for the Y axis
    # This configuration means you are using port A0
    xPin = 0
    yPin = 1
    grovepi.pinMode(xPin,"INPUT")
    grovepi.pinMode(yPin,"INPUT")

    # The Grove Thumb Joystick is an analog device that outputs analog signal ranging from 0 to 1023
    # The X and Y axes are two ~10k potentiometers and a momentary push button which shorts the x axis

    # My joystick produces slightly different results to the specifications found on the url above
    # I've listed both here:

    # Specifications
    #     Min  Typ  Max  Click
    #  X  206  516  798  1023
    #  Y  203  507  797

    # My Joystick
    #     Min  Typ  Max  Click
    #  X  253  513  766  1020-1023
    #  Y  250  505  769
    while True:
        try:
            # Get X/Y coordinates
            x = grovepi.analogRead(xPin)
            y = grovepi.analogRead(yPin)

            # Calculate X/Y resistance
            Rx = (float)(1023 - x) * 10 / x
            Ry = (float)(1023 - y) * 10 / y

            # Was a click detected on the X axis?
            click = 1 if x >= 1020 else 0

            print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.
```
    sudo python grove_thumb_joystick.py
```

Resources
---------

- [Grove-Thumb Joystick Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/res/Eagle_Design_Files.zip)
- [Analog Joystick Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/res/Analog_Joystick_Datasheet.jpg)
- [Joystick Schematic PDF File](https://github.com/SeeedDocument/Grove-Thumb_Joystick/raw/master/res/Joystick.pdf)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick -->
