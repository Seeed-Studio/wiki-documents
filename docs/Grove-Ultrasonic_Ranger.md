---
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html
oldwikiname: Grove - Ultrasonic Ranger
prodimagename: 350px-Ultrasonic_Ranger.jpg
surveyurl: https://www.research.net/r/Grove-Ultrasonic-Ranger
sku: 101020010
tags: io_3v3, io_5v, plat_duino, plat_pi
---
![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic.jpg)

This Grove - Ultrasonic ranger is a non-contact distance measurement module which works at 40KHz. When we provide a pulse trigger signal with more than 10uS through singal pin, the Grove_Ultrasonic_Ranger will issue 8 cycles of 40kHz cycle level and detect the echo. The pulse width of the echo signal is proportional to the measured distance. Here is the formula: Distance = echo signal high time * Sound speed (340M/S)/2. Grove_Ultrasonic_Ranger's trig and echo singal share 1 SIG pin.

!!!Warning
	Do not hot plug Grove-Ultrasonic-Ranger, otherwise it will damage the sensor. The measured area must be no less than 0.5 square meters and smooth.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Ultrasonic ranger V1.0 | Initial                                                                                                                                                                                    | Mar 2012      |
| Grove-Ultrasonic ranger V2.0 | Improve the power stability with low-voltage main board with below changes: 1. Added an capacitance C14 2. Redesigned the layout to make it more tidy 3. Compatible with 3.3V voltage system | July 2017     |

## Specification

|Parameter|	Value/Range|
|:------|:------------------|
|Operating voltage|	3.2~5.2V|
|Operating current|	8mA|
|Ultrasonic frequency|	40kHz|
|Measuring range|	2-350cm|
|Resolution|	1cm|
|Output|PWM|
|Size|50mm X 25mm X 16mm|
|Weight|13g|
|Measurement angle|15 degree|
|Working temperature|-10~60 degree C|
|Trigger signal|10uS TTL|
|Echo signal|TTL|


!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Step 2.** Connect Ultrasonic Ranger to port D7 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/arduino%20connection.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove_Ultrasonic_Ranger to Seeeduino as below.

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D7            | Yellow                  |

#### Software

- **Step 1.** Download the  [ UltrasonicRanger Library](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);
void setup()
{
	Serial.begin(9600);
}
void loop()
{
	long RangeInInches;
	long RangeInCentimeters;

	Serial.println("The distance to obstacles in front is: ");
	RangeInInches = ultrasonic.MeasureInInches();
	Serial.print(RangeInInches);//0~157 inches
	Serial.println(" inch");
	delay(250);

	RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
	Serial.print(RangeInCentimeters);//0~400cm
	Serial.println(" cm");
	delay(250);
}
```

- **Step 4.** We will see the distance display on terminal as below.

```
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
```

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Ultrasonic Ranger to port D7 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Ultrasonic_Ranger/master/img/cc_Ultrasonic_Ranger.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will see distance displayed in Serial Monitor.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|



- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - Ultrasonic Ranger to port D5 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect2.jpg)


!!! Note
    For step 3 you are able to connect the ultrasonic ranger to **any GPIO Port** but make sure you change the command with the corresponding port number.


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
python grove_ultrasonic_ranger.py 5 6

```

Following is the grove_ultrasonic_ranger.py code.

```python

import sys
import time
from grove.gpio import GPIO

usleep = lambda x: time.sleep(x / 1000000.0)

_TIMEOUT1 = 1000
_TIMEOUT2 = 10000

class GroveUltrasonicRanger(object):
    def __init__(self, pin):
        self.dio =GPIO(pin)

    def _get_distance(self):
        self.dio.dir(GPIO.OUT)
        self.dio.write(0)
        usleep(2)
        self.dio.write(1)
        usleep(10)
        self.dio.write(0)

        self.dio.dir(GPIO.IN)

        t0 = time.time()
        count = 0
        while count < _TIMEOUT1:
            if self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT1:
            return None

        t1 = time.time()
        count = 0
        while count < _TIMEOUT2:
            if not self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT2:
            return None

        t2 = time.time()

        dt = int((t1 - t0) * 1000000)
        if dt > 530:
            return None

        distance = ((t2 - t1) * 1000000 / 29 / 2)    # cm

        return distance

    def get_distance(self):
        while True:
            dist = self._get_distance()
            if dist:
                return dist


Grove = GroveUltrasonicRanger


def main():
    if len(sys.argv) < 2:
        print('Usage: {} pin_number'.format(sys.argv[0]))
        sys.exit(1)

    sonar = GroveUltrasonicRanger(int(sys.argv[1]))

    print('Detecting distance...')
    while True:
        print('{} cm'.format(sonar.get_distance()))
        time.sleep(1)

if __name__ == '__main__':
    main()



```

!!!success
    If everything goes well, you will be able to see the following result
    
```python

pi@raspberrypi:~/grove.py/grove $ python grove_ultrasonic_ranger.py 5 6
Detecting distance...
121.757901948 cm
246.894770655 cm
2.60205104433 cm
0.205533257846 cm
0.657706425108 cm
247.433267791 cm
122.485489681 cm
^CTraceback (most recent call last):
  File "grove_ultrasonic_ranger.py", line 110, in <module>
    main()
  File "grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Ultrasonic ranger to **D4** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/pi%20connection.jpg)

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 3.** Excute below commands to use the ultrasonic_ranger to meansure the distance.


```
cd ~/GrovePi/Software/Python
python grove_ultrasonic.py
```

Here is the grove_ultrasonic.py code.

```python
# GrovePi + Grove Ultrasonic Ranger

from grovepi import *

# Connect the Grove Ultrasonic Ranger to digital port D4
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # Read distance value from Ultrasonic
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "Error"
    except IOError:
        print "Error"
```

- **Step 4.** We will see the distance display on terminal as below.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_ultrasonic.py
9
9
9
9
9
9
9
9
9
9
9

```

## FAQs


**Q1: How does the Grove-Ultrasonic sensor work?**

- A1: When we provide a pulse trigger signal with more than 10uS through singal pin, the Grove_Ultrasonic_Ranger will issue 8 cycles of 40kHz cycle level and detect the echo. The pulse width of the echo signal is proportional to the measured distance. Here is the formula: Distance = echo signal high time * Sound speed (340M/S)/2.




**Q2: Why Grove-Ultrasonic sensor only has 1 signal pin, comparing with other ultrasonic sensor Trig and Echo pins?**

- A2:Grove_Ultrasonic_Ranger’s trig and echo signal share 1 SIG pin through MCU.  


**Q3: Where can I find technical support if I have some other issue?**

- A3: Please send an email to techsupport@seeed.cc

**Q4: Can we connect mulitule ultrasonic to one arduino?**

- A4: Yes, Here is the example, one sensor is connected to D2 and other to D3. 

```c++
#include "Ultrasonic.h"

Ultrasonic ultrasonic1(2);
Ultrasonic ultrasonic2(3);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    long RangeInCentimeters1;
    long RangeInCentimeters2;

    RangeInCentimeters1 = ultrasonic1.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters1);//0~400cm
    Serial.println(" cm");
    
    RangeInCentimeters2 = ultrasonic2.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters2);//0~400cm
    Serial.println(" cm");
    
    delay(250);
}

```



## Resources

- **[PDF]** [Download Wiki PDF](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger Schematic](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [Ceramic Ultrasonic Sensor NU40C16T/R-1](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/blob/master/res/NU40C16T-R-1.pdf)
- **[Library]** [Grove_Ultrasonic Ranger library](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip)
- **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove_Ultrasonic_Ranger/master/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[Project]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[Project]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[Project]** [Automatic Water Level Controller](https://community.seeedstudio.com/project_detail.html?id=241)
- **[Example]** [Example_Measure_distance_and_led_display](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_distance_and_led_display.zip)
- **[Example]** [Example_Measure_and_display_the_distance](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_and_display_the_distance.zip)

## Project 

**Hacking the Stairs at Seeed's New Office**: Turn the stairs at the office into an interactive installation, and even a cool way to convey the message "STAFF ONLY" to visitors.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>