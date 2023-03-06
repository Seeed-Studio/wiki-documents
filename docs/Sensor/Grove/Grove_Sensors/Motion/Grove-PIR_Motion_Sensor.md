---
description: Grove - PIR Motion Sensor
title: Grove - PIR Motion Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-PIR_Motion_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

This sensor allows you to sense motion, usually human movement in its range. Simply connect it to Grove - Base shield and program it, when anyone moves in its detecting range, the sensor will output HIGH on its SIG pin.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

## Features

- Grove compatible interface
- Adjustable detecting distance
- Adjustable holding time

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
## Specification

|Parameter	|Value/Range
|---|---|
|Operating Voltage|	3V–5V
|Operating Current(VCC = 3V)|	100uA
|Operating Current(VCC = 5V)|	150uA
|Measuring Range	|0.1 - 6m
|Default detecting distance|	3m
|Holding Time	|1 - 25s
|Working Wave Length	|7 - 14um
|Detecting Angle|	120 degrees

## Platforms Supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::
## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::
### Play With Arduino

#### Hardware


- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Grove - PIR Motion Sensor | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


- **Step 2.** Connect Grove - PIR Motion Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	If we don't have Grove Base Shield, We also can directly connect Grove-PIR Motion Sensor to Seeeduino as below.
:::
| Seeeduino       | Grove - PIR Motion Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |



#### Software

- Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).


```c
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module


void setup()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    Serial.begin(9600);  

}

void loop()
{
    if(digitalRead(PIR_MOTION_SENSOR))//if it detects the moving people?
        Serial.println("Hi,people is coming");
    else
        Serial.println("Watching");

 delay(200);
}

```


:::note
    The detecting distance and holding time can be adjusted by adding two extra potentiometers on board. For the details please refer to the V1.2 Eagle below. The module can also be set as retriggerable or un- retriggerable by changing the jumper hat.
:::

The result should be like:


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png" alt="pir" width={600} height="auto" /></p>

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - PIR Motion Sensor to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png" alt="pir" width={600} height="auto" /></p>

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, the LED will goes on when people is coming.
:::
### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - PIR Motion Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|


- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the PIR motion sensor to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    For step 3 you are able to connect the PIR motion sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_mini_pir_motion_sensor.py 12

```

Following is the grove_mini_pir_motion_sensor.py code.

```python

import time
from grove.gpio import GPIO


class GroveMiniPIRMotionSensor(GPIO):
    def __init__(self, pin):
        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GroveMiniPIRMotionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))

    def callback():
        print('Motion detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    If everything goes well, you will be able to see the following result
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12
Motion detected.
Motion detected.
Motion detected.
^CTraceback (most recent call last):
  File "grove_mini_pir_motion_sensor.py", line 84, in <module>
    main()
  File "grove_mini_pir_motion_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - PIR Motion Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect the sensor to **D8** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software


- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

:::tip
    In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.
:::
:::note
    We firmly suggest you to update the firmware, or for some sensors you may get errors.
:::
:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::
- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 4.** Run below commands to use the PIR Motion Sensor to monitor the movement of people.

```
cd ~/GrovePi/Software/Python
sudo python3 grove_pir_motion_sensor.py
```

Here is the grove_pir_motion_sensor.py code.

```python
import time
import grovepi

# Connect the Grove PIR Motion Sensor to digital port D8
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # Sense motion, usually human, within the target range
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # if your hold time is less than this, you might not see as many detections
        time.sleep(.2)

    except IOError:
        print "Error"
```

The result should be like:

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_pir_motion_sensor.py

-
-
-
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
-
-

```

## FAQs

**Q1: How to make the distance adjustable?**

A1: R2: used to adjust the detecting distance(the AMP coefficient, 2MΩ). R6: used to adjust the holding time(the trigger duty, 100KΩ). 

The detecting distance can be adjusted from 6 meters to only several centimeters. If the potentiometer is set to one end, the module will be too sensitive to be triggered by the atmosphere even there is no people moving before it. The holding time can also be adjusted by the Delay_time potentiometer, the value is about from  25s to 1s.

If R2 and R6 are soldered, please make sure R13 and R14 are empty.

:::note
    There is risk that the board may be destroyed. Please think it over before making this modification.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png" alt="pir" width={600} height="auto" /></p>



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources


- **[Eagle]** [Grove - PIR Motion Sensor Eagle File v1.2](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip)
- **[PDF]** [Grove - PIR Motion Sensor v1.2 Schematics](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Grove - PIR Motion Sensor Eagle V1.2 PCB](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[Library]** [Github repository for PIR Motion Sensor](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[Datasheet]** [BISS0001 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Twig_-_BISS0001.pdf)
- **[Datasheet]** [Fresnel lens 8120 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Fresnel_lens_8120.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove_PIR_Motion_Sensor_CDC_File.zip)


## Projects

**Burglar Alarm with PIR Motion Sensor**: This article explains Burglar Alarms with a PIR Motion Sensor.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
