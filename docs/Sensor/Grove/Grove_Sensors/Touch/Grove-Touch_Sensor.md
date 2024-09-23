---
description: Grove - Touch Sensor
title: Grove - Touch Sensor
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Touch_Sensor
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/surface.jpg)

Grove - Touch Sensor enables you to replace press with touch. It can detect the change in capacitance when a finger is near by. That means no matter your finger directly touches the pad or just stays close to the pad, Grove - Touch Sensor would outputs HIGH also.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## Specifications

- Operating Voltage: 2.0 - 5.5V
- Operating Current(Vcc=3V):1.5 - 3.0μA
- Operating Current(VDD=3V):3.5 - 7.0μA
- Output Response Time: 60 - 220mS
- Used Chipset: TTP223-BA6

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

**Option features**

| AHLB                     | TOG         | LPMB       | MOTB         | SLRFTB          | RST       | Q           | OPDO            |
|--------------------------|-------------|------------|--------------|-----------------|-----------|-------------|-----------------|
| Output Active High / Low | Toggle mode | Power Mode | Max. On Time | Sampling length | RESET PIN | CMOS Output | Open Drain Mode |
| V                        | V           | 0          | 1            | 1               | X         | V           | X               |
| Active High              | Disabled    | LOW        | Infinite     | 1.6 msec        | N/A       | Present     | N/A             |

## Getting started

### Play with Arduino

This demo is going to show you how to turn on/off an LED.

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove-Touch_Sensor |Grove-LED|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|![enter image description](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|[Get One Now](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

- **Step 2.** Connect Grove-Touch_Sensor to port **D2** of Grove-Base Shield.
- **Step 3.** Connect Grove-LED to port **D3** of Grove-Base Shield.
- **Step 4.** Plug Grove - Base Shield into Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

![with_ardu](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_ardu.jpg)

#### Software

- **Step 1.** Please copy and paste code below to a new Arduino sketch.

```c
const int TouchPin=2;
const int ledPin=3;

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

**Step 2.** Monitor the led on and off.

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Touch Sensor to port D2, and connect a Grove - Red LED to port D3 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/image/cc_Touch_Sensor.png)

Upload the program to your Arduino/Seeeduino.

:::tipsuccess
When the code finishes uploaded, the LED will goes on when you touch the Touch Sensor.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Touch Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the touch sensor to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/Touch_Hat.jpg)

:::note
For step 3 you are able to connect the touch sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software

:::cautionattention
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python3 grove_touch_sensor.py 12

```

Following is the grove_touch_sensor.py code.

```python

import time
from grove.gpio import GPIO


class GroveTouchSensor(GPIO):
    def __init__(self, pin):
        super(GroveTouchSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_press = None
        self._on_release = None

    @property
    def on_press(self):
        return self._on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_press = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if value:
            if callable(self._on_press):
                self._on_press(dt)
        else:
            if callable(self._on_release):
                self._on_release(dt)

Grove = GroveTouchSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    touch = GroveTouchSensor(int(sys.argv[1]))

    def on_press(t):
        print('Pressed')
    def on_release(t):
        print("Released.")

    touch.on_press = on_press
    touch.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tipsuccess
    If everything goes well, you will be able to see the following result
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_touch_sensor.py 12
Pressed
Released.
Pressed
Released.
Pressed
Released.
Pressed
Released.
^CTraceback (most recent call last):
  File "grove_touch_sensor.py", line 110, in <module>
    main()
  File "grove_touch_sensor.py", line 106, in main
    time.sleep(1)
KeyboardInterrupt

```

You can quit this program by simply press `ctrl`+`c`.

### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

<!--false link-->
| Raspberry pi | GrovePi_Plus | Grove-Touch_Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Touch_Sensor  to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![with_rpi](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_rpi.jpg)

#### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to use this sensor, please change the port to from D4 to D2.

```bash
python3 grove_touch_sensor.py
```

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Touch Sensor (https://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''
import time
import grovepi

# Connect the Grove Touch Sensor to digital port D2
# SIG,NC,VCC,GND
touch_sensor = 2

grovepi.pinMode(touch_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(touch_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")

```

Here is result:

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/rpi_result.jpg)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove-Touch_Sensor Schematic](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip)
- **[PDF]** [TTP223](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/TTP223.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/resource/Grove_Touch_Sensor_CDC_File.zip)

## Projects

**Using Grove Touch Sensor To Control Grove LED**: How to connect and use Grove Touch Sensor to control Grove LED socket kit.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed' width='350'></iframe>

**Touch sensor Grove module**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/VFKYYG_hNUE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vPkf4czFQsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

