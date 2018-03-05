---
title: Grove - Collision Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Collision-Sensor-p-1132.html
oldwikiname: Grove_-_Collision_Sensor
prodimagename: Grove_–_Collision_Sensor_photo.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020005 1.jpg
surveyurl: https://www.research.net/r/Grove-Collision_Sensor
sku: 101020005
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/img/Grove_–_Collision_Sensor_photo.jpg)

Grove - Collision Sensor can detect whether any collision movement or vibration happens. It will output a low pulse signal when vibration is detected. To make the output signal more reliable and neat, we added a necessary exterior circuit to reduce the noise impact. So, normal shaking will not cause any output. The sensor has a high sensitivity. You can use it to apply to your project, such as automatic wake-up and power-down for battery management.

Its working voltage is 5V which makes it compatible with standard Arduino/Seeeduino 5V system.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)

Specifications
-------------

-   Voltage: 3.3/5V

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

Demonstration
-------------

### With [Arduino](/Arduino "Arduino")

Based on the output signal will change when a collision happens, we design this demo: each time the sensor detects collision, the LED will light up. Here the LED is as a managed device, and you can refer to the demo to control your device, such as bicycle light.

The procedure is as follows:

1.Connect the collision sensor to the Digital port 2 of Grove - Basic Shield using a Grove cable and connect an LED to Pin 13.

2.Plug the Grove - Basic Shield into Arduino.

3.Connect Arduino/Seeeduino to PC by using a USB cable.

4.Copy and paste code below to a new Arduino sketch. And upload it to your Arduino.

```c
// Test Grove - Collision Sensor
#define LED 13 //the onboard LED of Arduino or Seeeduino
#define COLLISION_SENSOR 2//collision sensor is connected with D2 of Arduino

void setup()
{
    pins_init();
}

void loop()
{
    if(isTriggered())
    {
        turnOnLED();
        delay(2000);
    }
    else turnOffLED();
}

void pins_init()
{
    pinMode(LED,OUTPUT);
    turnOffLED();
    pinMode(COLLISION_SENSOR,INPUT);
}

boolean isTriggered()
{
    if(!digitalRead(COLLISION_SENSOR))
    {
        delay(50);
        if(!digitalRead(COLLISION_SENSOR))
        return true;//the collision sensor triggers
    }
    return false;
}

void turnOnLED()
{
    digitalWrite(LED,HIGH);//the LED is on
}

void turnOffLED()
{
    digitalWrite(LED,LOW);//the LED is off
}
```

5.Now you can check the status of LED. The LED should light up every time you drum fingers on the table.

You can adjust the sensor sensitivity by changing the function delay(50) in code.

```c
if(!digitalRead(COLLISION_SENSOR))
{
    return true;//the collision sensor triggers
}
return false;
```
### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePiPlus).

3.Connection

-   Plug the sensor to grovepi socket D2 by using a grove cable.

4.Navigate to the demos' directory:
```
cd yourpath/GrovePi/Software/Python/
```
-   To see the code

```
nano grove_collision_sensor.py   # "Ctrl+x" to exit #
```
```
import time
import grovepi

# Connect the Grove Collision Sensor to digital port D2
# SIG,NC,VCC,GND
collision_sensor = 2

grovepi.pinMode(collision_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(collision_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

5.Run the demo.
```
sudo python grove_collision_sensor.py
```

Resources
---------

-   [Grove - Collision Sensor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/res/Grove-Collision_Sensor_eagle_file.zip)
-   [MVS0608.02 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/res/DataSheet-MVS0608_02-v2_1.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Collision_Sensor -->
