---
name: Grove - Infrared Reflective Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html
oldwikiname: Grove_-_Infrared_Reflective_Sensor
prodimagename: Infrared_Reflective_Sensor-1.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/GroveInfraredReflective.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Reflective_Sensor
sku: 101020029
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_wio
---

![](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/main.jpg)

Grove - Infrared Reflective Sensor is used to detect the presence of an object within a specific range. The sensor consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface.

When the reflected light is detected, it produces **Digital LOW** (or Binary **0**) output on the **SIG** pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the **SIG** pin stays at **Digital High** (Binary **1**). The on-board LED indicator will be off as well. The detectable range of this sensor is 4–16 mm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection.

With this sensor, you can build the following (but not limited to) applications: **line following robots**, **optical encoders** and **object counting applications**.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>




<div class="admonition caution">
<p class="admonition-title">Caution</p>
This product is also mildly sensitive to non-IR radiations and hence any bright light on photosensor impairs or disturbs IR light detection.
</div>


## Version Tracker


| Product version              | Changes        |Release date | 
|------------------------------|--------------|----------------|
| Versions older than v1.2     | Initial  |June 2012‎    |
| Version 1.2(current version) | Optimized layout  | April 2016   |


## Features


-   Grove compatible and easy to use
-   Highly sensitive and reliable
-   Small footprint
-   Adjustable sensitivity for different occasions

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)



## Specifications


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



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Hardware Overview


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg)

-   **RPR220 Reflective photosensor** - Highly sensitive reflective photosensor.
-   **LMV358** - rail-to-rail operational amplifier.
-   **LED Indicator** - The LED will switch on when the received infrared light intensity exceeds a preset level.
-   **Light sensitivity adjustment potentiometer** - adjust the sensitivity of photosensor to light.



## Getting Started


Let us see how to implement few basic applications with this module:

### Play With Arduino

#### Line Following

This sensor can be used to help a robotic car follow a black line.

##### Hardware

- **Step 1.** Prepare the following materials:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | White paper and black pen|
|--------------|-------------|-----------------|-------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/thumbnail.jpg)||
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **Step 2.** Connect Grove - Infrared Reflective Sensor to any port of Grove-Base Shield via the Grove cable, we use **D2** in this demo.

- **Step 3.** Place this sensor 12mm above the white(or other bright color) paper.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-4.JPG)

- **Step 4.** Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-5.JPG)

<div class="admonition note">
<p class="admonition-title">Note</p>
Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer.
</div>


- **Step 5.** Maintain the vertical distance, move the sensor horizontally towards the black line. The indicator LED should go off over the black line. If it is still on, adjust the potentiometer until it is off.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-6.JPG)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-7.JPG)

#### Rotary Speed Detection

Let us implement simple optical encoder to detect the speed of a motor


##### Hardware


- **Step 1.** Prepare the following materials:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | 3V/5V DC Motor|
|--------------|-------------|-----------------|-------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [Get One Now](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |


- **Step 2.** Connect the Infrared Reflective Sensor to the **D2** port of Grove - Base Shield and connect the motor to the **D6** (In fact, you can just connct VCC and GND to power the motor).

![](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/connect_arduino.jpg)

- **Step 3.** Attach a round, white paper plate (with a black line marked on it) to the motor. Place the sensor near this rotatory encoder. Run the motor.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-9.JPG)



##### Software


- **Step 1.** Download the library [Arduino timer1 *library*](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/TimerOne-ArduinoLib.zip) and add it into the libraries file of Arduino IDE. A [guide](/Guide_to_use_demos_downloaded_from_Seeed-s_Github) about how to run our demo code.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Open a new sketch, and copy the following code into the sketch.


```c++
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

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the speed.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-10.JPG)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/img/Infrared_Reflective_Sensor-12.JPG)




### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the following materials:

| Raspberry pi | GrovePi_Plus | Grove - Infrared Reflective Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/thumbnail.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|



- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove - Infrared Reflective Sensor to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC via USB cable.



![](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/img/connect_pi.jpg)



#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

!!!Tip
    In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.


!!!Note
    We strongly suggest you to update the firmware, or for some sensors you may get errors.


- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 4.** Check the code.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_infrared_reflective_sensor.py

```

Then the code should be like:

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

Then tap ++ctrl+x++ to quit nano.

- **Step 5.** To run the demo, execute the following command in terminal:

```
sudo python grove_infrared_reflective_sensor.py

```

The result should be like:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
white surface detected
white surface detected
white surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected

```



## Resources


- **[Zip]**  [Grove-Infrared Reflective Sensor v1.2 Eagle Files](https://github.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/raw/master/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Arduino Timer1 Library](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [RPR220 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/RPR220_datasheet.pdf)
- **[Pdf]** [Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Reflective_Sensor/master/res/LMV358_datasheet.pdf)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>