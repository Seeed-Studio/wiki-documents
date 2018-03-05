---
title: Grove - Ultrasonic Ranger
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

[![Get one now](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)

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
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Platforms Supported


## Getting Started

### Play With Arduino

#### Hardware

- Step 1. Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- Step 2. Connect Ultrasonic Ranger to port D7 of Grove-Base Shield.
- Step 3. Plug Grove - Base Shield into Arduino.
- Step 4. Connect Arduino to PC through a USB cable.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/arduino%20connection.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove_Ultrasonic_Ranger to Arduino as below.

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D7            | Yellow                  |

#### Software

- Step 1. Download the  [ UltrasonicRanger Library](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip)  from Github.
- Step 2. Refer [How to install library](http://wiki.seeed.cc/How_to_install_Arduino_Library) to install library for Arduino.
- Step 3. Copy the code into Arduino IDE and upload.

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

- Step 4. We will see the distance display on terminal as below.

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

### Play With Raspberry Pi

#### Hardware

- Step 1. Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- Step 2. Plug the GrovePi_Plus into Raspberry.
- Step 3. Connect Grove-Ultrasonic ranger to D4 port of GrovePi_Plus.
- Step 4. Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/pi%20connection.jpg)

#### Software

- Step 1. Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- Step 2. Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```
- Step 3. Excute below commands to use the ultrasonic_ranger to meansure the distance.

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

- Step 4. We will see the distance display on terminal as below.

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
Please click [here](http://support.seeedstudio.com/knowledgebase/articles/1822222-grove-ultrasonic-ranger-sku-101020010) to see all Grove-Ultrasonic Ranger FAQs.

## Tech Support
Please do not hesitate to contact **techsupport@seeed.cc** if you require further information.

## Resources

- **[PDF]** [Download Wiki PDF](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger Schematic](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[Library]** [Grove_Ultrasonic Ranger library](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip)
- **[Project]**[The Color Helix](http://www.seeed.cc/project_detail.html?id=138)
- **[Project]**[Indoor Lightning Cloud](http://www.seeed.cc/project_detail.html?id=182)
- **[Project]**[Automatic Water Level Controller](http://www.seeed.cc/project_detail.html?id=241)
- **[Example]** [Example_Measure_distance_and_led_display](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_distance_and_led_display.zip)
- **[Example]** [Example_Measure_and_display_the_distance](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_and_display_the_distance.zip)
