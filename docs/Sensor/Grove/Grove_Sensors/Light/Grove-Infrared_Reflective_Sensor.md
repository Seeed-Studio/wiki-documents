---
description: Grove - Infrared Reflective Sensor
title: Grove - Infrared Reflective Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Infrared_Reflective_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg" /></div>

Grove - Infrared Reflective Sensor is used to detect the presence of an object within a specific range. The sensor consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface.

When the reflected light is detected, it produces **Digital LOW** (or Binary **0**) output on the **SIG** pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the **SIG** pin stays at **Digital High** (Binary **1**). The on-board LED indicator will be off as well. The detectable range of this sensor is 4–16 mm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection.

With this sensor, you can build the following (but not limited to) applications: **line following robots**, **optical encoders** and **object counting applications**.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

:::caution
This product is also mildly sensitive to non-IR radiations and hence any bright light on photosensor impairs or disturbs IR light detection.
:::

## Version Tracker

| Product version              | Changes        |Release date |
|------------------------------|--------------|----------------|
| Versions older than v1.2     | Initial  |June 2012‎    |
| Version 1.2(current version) | Optimized layout  | April 2016   |

## Features

- Grove compatible and easy to use
- Highly sensitive and reliable
- Small footprint
- Adjustable sensitivity for different occasions

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

| Parameter                                    | Value                                                                          |
|----------------------------------------------|--------------------------------------------------------------------------------|
| Operating voltage(V)                         | 3.3–5V                                                                       |
| Operating current(mA)                        | 14.69–15.35 mA                                                                 |
| Effective detectable distance                | 4–15 mm                                                                     |
| Response time                                | 10 μs                                                                          |
| Phototransistor: Peak sensitivity wavelength | 800 nm                                                                         |
| IR LED: Peak light emitting wavelength       | 940 nm                                                                         |
| Reflective photosensor                       | [datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf)          |
| Output operational amplifiers                | [datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf) |
| Weight                                       | 4 g                                                                            |

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Hardware Overview

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg" /></div>

- **RPR220 Reflective photosensor** - Highly sensitive reflective photosensor.
- **LMV358** - rail-to-rail operational amplifier.
- **LED Indicator** - The LED will switch on when the received infrared light intensity exceeds a preset level.
- **Light sensitivity adjustment potentiometer** - adjust the sensitivity of photosensor to light.

## Getting Started

Let us see how to implement few basic applications with this module:

### Play With Arduino

#### Line Following

This sensor can be used to help a robotic car follow a black line.

##### Hardware

- **Step 1.** Prepare the following materials:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | White paper and black pen|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>||
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **Step 2.** Connect Grove - Infrared Reflective Sensor to any port of Grove-Base Shield via the Grove cable, we use **D2** in this demo.

- **Step 3.** Place this sensor 12mm above the white(or other bright color) paper.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG" /></div>

- **Step 4.** Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG" /></div>

:::note
Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer.
:::

- **Step 5.** Maintain the vertical distance, move the sensor horizontally towards the black line. The indicator LED should go off over the black line. If it is still on, adjust the potentiometer until it is off.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG" /></div>

#### Rotary Speed Detection

Let us implement simple optical encoder to detect the speed of a motor

##### Hardware

- **Step 1.** Prepare the following materials:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | 3V/5V DC Motor|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [Get One Now](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |

- **Step 2.** Connect the Infrared Reflective Sensor to the **D2** port of Grove - Base Shield and connect the motor to the **D6** (In fact, you can just connct VCC and GND to power the motor).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg" /></div>

- **Step 3.** Attach a round, white paper plate (with a black line marked on it) to the motor. Place the sensor near this rotatory encoder. Run the motor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG" /></div>

##### Software

- **Step 1.** Download the library [Arduino timer1 *library*](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip) and add it into the libraries file of Arduino IDE. A [guide](/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) about how to run our demo code.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

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

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the speed.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG" /></div>

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the following materials:

| Raspberry pi | GrovePi_Plus | Grove - Infrared Reflective Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove - Infrared Reflective Sensor to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC via USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg" /></div>

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

:::tip
In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.
:::

:::note
We strongly suggest you to update the firmware, or for some sensors you may get errors.
:::

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

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]**  [Grove-Infrared Reflective Sensor v1.2 Eagle Files](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Arduino Timer1 Library](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [RPR220 Datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf)
- **[Pdf]** [Datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
