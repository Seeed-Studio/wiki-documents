---
title: Grove - Ultrasonic Ranger
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Ultrasonic_Ranger/
slug: /Grove-Ultrasonic_Ranger
last_update:
  date: 03/01/2023
  author: gunengyu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/V2.jpg" alt="pir" width={600} height="auto" /></p>

This Grove - Ultrasonic ranger is a non-contact distance measurement module which works at 40KHz. When we provide a pulse trigger signal with more than 10uS through signal pin, the Grove_Ultrasonic_Ranger will issue 8 cycles of 40kHz cycle level and detect the echo. The pulse width of the echo signal is proportional to the measured distance. Here is the formula: Distance = echo signal high time * Sound speed (340M/S)/2. Grove_Ultrasonic_Ranger's trig and echo signal share 1 SIG pin.

:::warning
 Do not hot plug Grove-Ultrasonic-Ranger, otherwise it will damage the sensor. The measured area must be no less than 0.5 square meters and smooth.
:::
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Ultrasonic ranger V1.0 | Initial                                                                                                                                                                                    | Mar 2012      |
| Grove-Ultrasonic ranger V2.0 | Improve the power stability with low-voltage main board with below changes: 1. Added an capacitance C14 2. Redesigned the layout to make it more tidy 3. Compatible with 3.3V voltage system | July 2017     |

## Specification

|Parameter| Value/Range|
|:------|:------------------|
|Operating voltage| 3.2~5.2V|
|Operating current| 8mA|
|Ultrasonic frequency| 40kHz|
|Measuring range| 2-350cm|
|Resolution| 1cm|
|Output|PWM|
|Size|50mm X 25mm X 16mm|
|Weight|13g|
|Measurement angle|15 degree|
|Working temperature|-10~60 degree C|
|Trigger signal|10uS TTL|
|Echo signal|TTL|

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::note
    The platforms mentioned above as supported is/are an indication of the module's software or theoretical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Step 2.** Connect Ultrasonic Ranger to port D7 of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/arduino%20connection.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove_Ultrasonic_Ranger to Seeeduino as below.
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D7            | Yellow                  |

#### Software

- **Step 1.** Download the  [UltrasonicRanger Library](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)  from Github.

- **Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```cpp
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

```sh
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

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/cc_Ultrasonic_Ranger.png)

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, you will see distance displayed in Serial Monitor.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.

- **Step 3**. Connect the Grove - Ultrasonic Ranger to port D5 of the Base Hat.

- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

:::note
    For step 3 you are able to connect the ultrasonic ranger to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software

:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.

- **Step 2**. Download the source file by cloning the grove.py library.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3**. Excute below commands to run the code.

```sh
cd grove.py/grove
python3 grove_ultrasonic_ranger.py 5 6
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

:::success
    If everything goes well, you will be able to see the following result
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ultrasonic_ranger.py 5 6
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
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove-Ultrasonic ranger to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/pi%20connection.jpg)

#### Software

:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to use the ultrasonic_ranger to meansure the distance.

```
cd ~/GrovePi/Software/Python
python3 grove_ultrasonic.py
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

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_ultrasonic.py
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

### Play With Wio Terminal (ArduPy)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Wio Terminal | Grove - Ultrasonic Ranger |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Step 2.** Connect Grove - Ultrasonic Ranger to **D0** port of Wio Terminal.

- **Step 3.** Connect the Wio Terminal to PC through USB Type-C cable.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/with-WT.jpg)

#### Software

- **Step 1.** Follow [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ArduPy/) to configure the ArduPy development environment on Wio Terminal.

- **Step 2.** Make sure that the ArduPy firmware contains the ultrasonic ranger ArduPy library using the following commands. For more information, please follow [**here**](https://wiki.seeedstudio.com/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
aip build
aip flash
```

- **Step 3.** Copy the following code and save it as `ArduPy-ultrasonic.py`:

```python
from arduino import grove_ultra_ranger
from machine import LCD
from machine import Sprite
import time

Ultrasonic = grove_ultra_ranger(0)
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.RED)
        spr.drawString("Ultrasonic Sensor", 55, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Centimeters: ", 20, 50)
        spr.drawString("- Inches: ", 20, 80)
        spr.drawNumber(Ultrasonic.cm, 200,50)
        time.sleep_ms(50) # Needed for data to be read again
        spr.drawNumber(Ultrasonic.inch, 130,80)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("The distance to obstacles in front is:", Ultrasonic.cm, 'centimeter')
        print("The distance to obstacles in front is:", Ultrasonic.inch, 'inches')

if __name__ == "__main__":
    main()
```

- **Step 4.** Save the `ArduPy-ultrasonic.py` in a location that you know. Run the following command and **replace** `<YourPythonFilePath>` with your `ArduPy-ultrasonic.py` location.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
```

- **Step 5.** We will see the distance display on terminal as below, and displaying on the Wio Terminal LCD screen.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The distance to obstacles in front is: 3 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 4 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
```

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/WT-ur.jpg)

## FAQs

**Q1: How does the Grove-Ultrasonic sensor work?**

- A1: When we provide a pulse trigger signal with more than 10uS through singal pin, the Grove_Ultrasonic_Ranger will issue 8 cycles of 40kHz cycle level and detect the echo. The pulse width of the echo signal is proportional to the measured distance. Here is the formula: Distance = echo signal high time * Sound speed (340M/S)/2.

**Q2: Why Grove-Ultrasonic sensor only has 1 signal pin, comparing with other ultrasonic sensor Trig and Echo pins?**

- A2:Grove_Ultrasonic_Ranger’s trig and echo signal share 1 SIG pin through MCU.  

**Q3: Can we connect mulitule ultrasonic to one arduino?**

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

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger Schematic](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [Ceramic Ultrasonic Sensor NU40C16T/R-1](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/NU40C16T-R-1.pdf)
- **[Library]** [Grove_Ultrasonic Ranger library](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[Project]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[Project]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[Project]** [Automatic Water Level Controller](https://community.seeedstudio.com/project_detail.html?id=241)
- **[Example]** [Example_Measure_distance_and_led_display](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_distance_and_led_display.zip)
- **[Example]** [Example_Measure_and_display_the_distance](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_and_display_the_distance.zip)

## Project

**Hacking the Stairs at Seeed's New Office**: Turn the stairs at the office into an interactive installation, and even a cool way to convey the message "STAFF ONLY" to visitors.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
