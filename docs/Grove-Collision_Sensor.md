---
name: Grove - Collision Sensor
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

## Specifications


-   Voltage: 3.3/5V

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

###Play With Arduino

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

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Collision Sensor to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/img/cc_Collision_Sensor.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, the LED on the pin 13 of Arduino will goes on when Collision Sensor detects collision.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Collision Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Collision_Sensor/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - Collision Sensor to D5 port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/img/with_hat.jpg)

!!! Note
    For step 3 you are able to connect the Grove - Collision Sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_collision_sensor.py 5

```

Following is the grove_collision_sensor.py code.

```python

import time
from grove.gpio import GPIO


class GroveCollisionSensor(GPIO):
    def __init__(self, pin):
        super(GroveCollisionSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_collision = None
        self._on_NoCollision = None
        self.collisionState = False

    @property
    def on_collision(self):
        return self._on_collision

    @on_collision.setter
    def on_collision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_collision = callback

    @property
    def on_NoCollision(self):
        return self._on_NoCollision

    @on_NoCollision.setter
    def on_NoCollision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_NoCollision = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if not value:
            if callable(self._on_collision):
                self._on_collision(dt)
        else:
            if callable(self._on_NoCollision):
                self._on_NoCollision(dt)

Grove = GroveCollisionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    button = GroveCollisionSensor(int(sys.argv[1]))

    def on_collision(t):
        print('Collision')
    def on_NoCollision(t):
        print("No Collision")

    button.on_collision = on_collision
    # button.on_NoCollision = on_NoCollision

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

!!!success
    If everything goes well, you will be able to see the following result

```python

pi@raspberrypi:~/grove.py/grove $ python grove_collision_sensor.py 5
Collision
Collision
Collision
Collision
Collision
Collision
Collision
^CTraceback (most recent call last):
  File "grove_collision_sensor.py", line 112, in <module>
    main()
  File "grove_collision_sensor.py", line 108, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py/grove $ 

```


You can quit this program by simply press ++ctrl+c++.



### Play With Raspberry Pi (with GrovePi_Plus)

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus).

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

## Resources


-  **[Zip]** [Grove - Collision Sensor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/res/Grove-Collision_Sensor_eagle_file.zip)
-  **[PDF]** [MVS0608.02 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/res/DataSheet-MVS0608_02-v2_1.pdf)
-  **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Collision_Sensor/master/res/Grove_Collision_Sensor_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Collision_Sensor -->

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>