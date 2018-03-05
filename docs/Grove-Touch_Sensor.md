---
title: Grove - Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Touch-Sensor-p-747.html
oldwikiname: Grove_-_Touch_Sensor
prodimagename: Grove-Touch_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020037 1.jpg
surveyurl: https://www.research.net/r/Grove-Touch_Sensor
sku: 101020037
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/img/Grove-Touch_Sensor.jpg)

Grove - Touch Sensor enables you to replace press with touch. It can detect the change in capacitance when a finger is near by. That means no matter your finger directly touches the pad or just stays close to the pad, Grove - Touch Sensor would outputs HIGH also.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

Specifications
--------------

- Operating Voltage: 2.0 - 5.5V
- Operating Current(Vcc=3V):1.5 - 3.0μA
- Operating Current(VDD=3V):3.5 - 7.0μA
- Output Response Time: 60 - 220mS
- Used Chipset: TTP223-BA6

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

**Option features**

| AHLB                     | TOG         | LPMB       | MOTB         | SLRFTB          | RST       | Q           | OPDO            |
|--------------------------|-------------|------------|--------------|-----------------|-----------|-------------|-----------------|
| Output Active High / Low | Toggle mode | Power Mode | Max. On Time | Sampling length | RESET PIN | CMOS Output | Open Drain Mode |
| V                        | V           | 0          | 1            | 1               | X         | V           | X               |
| Active High              | Disabled    | LOW        | Infinite     | 1.6 msec        | N/A       | Present     | N/A             |

Demonstration
-------------

### With [Arduino](/Arduino)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/img/Touch_LED.jpg)
This demo is going to show you how to turn on/off an LED.

**Demo Code:**

```
const int TouchPin=9;
const int ledPin=12;

void setup() {
    pinMode(TouchPin, INPUT);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorValue = digitalRead(TouchPin);
    if(sensorValue==1)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

### With Raspberry Pi

1.  You should have a raspberry pi and a grovepi or grovepi+.
2.  You should have completed configuring the development environment, otherwise follow [here](/GrovePiPlus).
3.  Connection

    -   Plug the sensor to grovepi socket D4 by using a grove cable.

4.  Navigate to the demos' directory:

```
    cd yourpath/GrovePi/Software/Python/
```

   - To see the code


```
    nano grove_touch_sensor.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Touch Sensor to digital port D4
    # SIG,NC,VCC,GND
    touch_sensor = 4

    grovepi.pinMode(touch_sensor,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(touch_sensor)
            time.sleep(.5)

        except IOError:
            print "Error"

```

5.Run the demo.

        sudo python grove_touch_sensor.py


Resources
---------

-   [Eagle Files](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/res/Touch_sensor_Eagle_File.zip)
-   [TTP223pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/res/TTP223.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor -->
