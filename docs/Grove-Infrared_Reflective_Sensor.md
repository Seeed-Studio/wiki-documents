---
title: Grove - Infrared Reflective Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html
oldwikiname: Grove_-_Infrared_Reflective_Sensor
prodimagename: Infrared_Reflective_Sensor-1.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/GroveInfraredReflective.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Reflective_Sensor
sku: 101020029
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-1.JPG)

**Grove - Infrared Reflective Sensor** is used to detect the presence of an object within a specific range. The sensor consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface.

When the reflected light is detected, it produces **Digital HIGH** (or Binary **1**) output on the **SIG** pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the **SIG** pin stays at **Digital LOW** (Binary **0**). The on-board LED indicator will be off as well. The detectable range of this sensor is 4–16 mm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection.

With this sensor, you can build the following (but not limited to) applications: **line following robots**, **optical encoders** and **object counting applications**.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
This product is also mildly sensitive to non-IR radiations and hence any bright light on photosensor impairs or disturbs IR light detection.
</div>


Version Tracker
---------------

| Product version              | Release date | Support status |
|------------------------------|--------------|----------------|
| Versions older than v1.2     | June 2012‎    | Not supported  |
| Version 1.2(current version) | April 2016   | Supported      |


Features
--------

-   Grove compatible and easy to use
-   Highly sensitive and reliable
-   Small footprint
-   Adjustable sensitivity for different occasions

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Specifications
--------------

| Parameter                                    | Value                                                                          |
|----------------------------------------------|--------------------------------------------------------------------------------|
| Operating voltage(V)                         | 3.3–5V                                                                       |
| Operating current(mA)                        | 14.69–15.35 mA                                                                 |
| Effective detectable distance                | 4–15 mm                                                                     |
| Response time                                | 10 μs                                                                          |
| Phototransistor: Peak sensitivity wavelength | 800 nm                                                                         |
| IR LED: Peak light emitting wavelength       | 940 nm                                                                         |
| Reflective photosensor                       | [datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/RPR-220.pdf)          |
| Output operational amplifiers                | [datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/LMV358_datasheet.pdf) |
| Weight                                       | 4 g                                                                            |

Platforms Supported
-------------------

<div class="admonition note">
<p class="admonition-title">Note</p>
If no version number is mentioned for a specific platform, it means this product supports all versions within this platform. But, you will need additional Grove Shield like Grove - Base shield v2 board.
</div>


Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg)

-   **RPR220 Reflective photosensor**, Highly sensitive reflective photosensor.
-   **LMV358**, rail-to-rail operational amplifier.
-   **LED Indicator**, The LED will switch on when the received infrared light intensity exceeds a preset level.
-   **Light sensitivity adjustment potentiometer** , adjust the sensitivity of photosensor to light.

### **Package includes**

| Parts name                                                                                                                    | Quantity |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Infrared Reflective Sensor                                                                                            | 1 piece  |
| [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

Getting Started
---------------

Let us see how to implement few basic applications with this module:

### With Arduino

#### Materials required

-   Grove - Infrared Reflective Sensor × 1
-   Arduino UNO (other compatible boards) × 1
-   [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
-   Grove - Base Shield × 1

#### Line Following

This sensor can be used to help a robotic car follow a black line.

1.Adjusting

Place the sensor such that there is 12mm between reflective photosensor and white (or light) colored surface.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-4.JPG)

2.Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light.

<div class="admonition note">
<p class="admonition-title">Note</p>
Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer.
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-5.JPG)

3.By maintaining the vertical distance, move the sensor horizontally above the black line. The indicator LED must go off over the black line. If it is still on, adjust the potentiometer until it is off.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-6.JPG)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-7.JPG)

#### Rotary Speed Detection

Let us implement simple optical encoder to detect the speed of a motor

1.Connect the Infrared Reflective Sensor to the D2 port of Grove - Base Shield like this:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-11.JPG)

2.Attach a round, white paper plate (with a black line marked on it) to the motor. Place the sensor near this rotatory encoder. Run the motor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-8.JPG)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-9.JPG)

3.Download the library [Arduino timer1 *library*](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/TimerOne-ArduinoLib.zip) and add it into the libraries file of Arduino IDE. A [guide](/Guide_to_use_demos_downloaded_from_Seeed's_Github) about how to run our demo code.

4.Upload the demo code to your Arduino/Seeeduino.

```
unsigned int counter=0;
void blink()
{
    counter++;
}
void timerIsr()
{
    Timer1.detachInterrupt();  //disable the timer1
    Serial.print("The speed of the motor: ");
    Serial.print(counter,DEC);
    Serial.println("round/s");
    counter=0;
    Timer1.attachInterrupt( timerIsr );  //enable the timer1
}
void setup()
{
    Serial.begin(9600);
    Timer1.initialize(1000000); // set a timer of length 1sec
    attachInterrupt(0, blink, RISING);  //INT0
    Timer1.attachInterrupt( timerIsr ); // attach the service routine here
}
void loop()
{

}
```

5.Open the Serial Monitor to read the data.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-10.JPG)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-12.JPG)

### With Raspberry Pi

#### Material required

-   Raspberry Pi (other models also are fine) × 1
-   [Grovepi](http://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) or [Grovepi+](http://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
-   [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Hardware Connections and Software Work

1.You should have a Raspberry Pi and a GrovePi or GrovePi+. In this demo, we use GrovePi.

2.We assume you have built the development environment successfully. If not, follow [this tutorial](/GrovePiPlus).

3.Connection: Plug Grove - Infrared Reflective Sensor into port D4 on GrovePi with [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57).

4.Navigate to the demos' directory, run the following command in a terminal.

```
    cd yourpath/GrovePi/Software/Python/
```

Run the command in a terminal.
```
    nano grove\_infrared\_reflective\_sensor.py
```

Copy and save the following code into it.

```
import time
import grovepi
 
# Connect the Grove Infrared Reflective Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns HIGH on a black surface and LOW on a white surface
        if grovepi.digitalRead(sensor) == 1:
            print "black surface detected"
        else:
            print "white surface detected"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

5.To run the demo, execute the following command in terminal:
```
    sudo python grove\_infrared\_reflective\_sensor.py
```

Resources
---------

-   [Grove-Infrared Reflective Sensor Eagle Files](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)
-   [Arduino Timer1 Library](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/TimerOne-ArduinoLib.zip)
-   [RPR220 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/RPR220_datasheet.pdf)
-   [Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/LMV358_datasheet.pdf)
-   [Schematic file of version 1.0 for this product](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->
