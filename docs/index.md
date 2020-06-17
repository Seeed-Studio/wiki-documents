
# Weekly Wiki
![](https://files.seeedstudio.com/wiki/IMAGE/June%20Week%202/June-Week-2.png)

Hello everyone! We hope everyone is staying safe from COVID-19 and wishing you all good health!
It's the second week of June and we are back with "Seeed Weekly Wiki Updates" as promised. This week was also filled with a lot of fun stuff at Seeed and we are happy to update you all with what we have done at Seeed Wiki. 
As you all know, Seeed Wiki is a dedicated platform where we provide the proper guidance and support you need when getting started with our products. We put a lot of effort to make this platform more user friendly because we want to enable the learning of electronics in a more systematic approach.  
We will bring you all these wiki updates in a weekly basis. So stay tuned with us and don't forget to visit this page again next week!

## New Wiki Added

### 1. Grove Shield for Seeeduino XIAO - with embedded battery management chip

[Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) has become more and more popular in our community since the day it was released! As we have Grove Shields for many mainstream boards for easy testing and better use of our Grove modules, many fans of Seeeduino XIAO have been asking whether we will have a Grove Shield for it. The much-anticipated [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) is now released and we have prepared a [wiki page](https://wiki.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/) to help you get started with it quickly and easily.

<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir"  width="470" height="auto"></a></p>

It’s a plug-and-play grove extension board for Seeeduino XIAO. This Shield helps you get rid of jumper wires and soldering work by pulling out the pins of the Seeeduino XIAO and expanding to 8 Grove connectors, including two Grove IIC and one UART. It acts as a bridge for Seeeduino XIAO and Seeed's Grove system, which provides 300+ of different Grove modules including sensors, actuators, communication, displays, etc. 

Check the video below to explore the Grove Shield for Seeeduino XIAO along with other exciting products in our Seeed Weekly Show No.008.


<p style="text-align:center;"><iframe width="720" height="480" src="https://www.youtube.com/embed/6AILF0BSPzc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Also, don't forget to subscribe to our [YouTube Channel](http://www.youtube.com/c/SeeedStudioSZ) to stay updated with our Seeed Weekly Show and many other exciting videos.

<p style="text-align:center;"><a href="http://www.youtube.com/c/SeeedStudioSZ"><img src="https://files.seeedstudio.com/wiki/IMAGE/Youtube%20Subs.png" alt="pir"  width="180" height="auto"></a></p>

### 2. Grove - Thermal Imaging Camera - MLX90641 16x12 IR Array with 110° FOV

We are super excited to release the [Grove - Thermal Imaging Camera - MLX90641 16x12 IR Array with 110° FOV](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html) and we have prepared the [wiki page](https://wiki.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641/) for it.

<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641/"><img src="https://files.seeedstudio.com/wiki/IMAGE/June%20Week%202/grove-thermal-imaging-camera_-ir-array-mlx90641-55-front.jpg" alt="pir"  width="300" height="auto"></a></p>

This IR thermal camera carries a 16x12 array of thermal sensors (MLX90641) and it can detect the temperature of objects from far away with a center area accuracy of ±1℃ and average accuracy of ±1.5℃. In order to obtain the thermal images easily, the I2C protocol is used to get the low-resolution images from the camera. The FOV (Field of View) of this camera is 110°x75°, and the temperature measurement range is -40℃ to 300℃. In order to obtain the thermal image easily, I2C protocol is used to get the low-resolution image from the camera.


### 3. One Wire Temperature Sensor DS18B20

[One Wire Temperature Sensor DS18B20](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html) has been there on Bazaar for quite a while and now we have prepared the [wiki](https://wiki.seeedstudio.com/One-Wire-Temperature-Sensor-DS18B20/) page for it.

<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/One-Wire-Temperature-Sensor-DS18B20/"><img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" alt="pir"  width="500" height="auto"></a></p>


This 2m long One Wire Temperature Sensor has a waterproof probe and long wire shape, suitable for immersive temperature detection. The chip inside this sensor is DS18B20 which is widely adopted.The original one includes three wires inside, you need to add an extra resistance to get it working. For this sensor, we adjusted it into a Grove port and has a resistor pre-assembled inside so that you can use it as a regular Grove sensor. 

### 4. How to use FreeRTOS to multi-task on Arduino?

One of the most important components of today's embedded systems is the RTOS also known as Real-Time Operating System, which is responsible for everything from task scheduling to running applications.
However, FreeRTOS is a class of RTOS that is designed to be small enough to run on a microcontroller – although its use is not limited to microcontroller applications. FreeRTOS includes a kernel and a growing set of software libraries suitable for use across industry sectors and applications. With the help of FreeRTOS, you can do multitasking on a microcontroller based hardware!

<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/Software-FreeRTOS/"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/full.gif" alt="pir"  width="750" height="auto"></a></p>



So here at Seeed we have ported FreeRTOS into the Arduino framework so that you are able to use FreeRTOS with your favorite Arduino boards with ease!
Check our detailed tutorial [here.](https://wiki.seeedstudio.com/Software-FreeRTOS/) 


### 5. How to debug Arduino boards using SWD interface?

SWD, also known as Serial Wire Debug is a 2-pin interface (SWDIO/SWCLK) of which it's also an alternative JTAG interface that has the same JTAG protocol. SWD uses an ARM CPU standard bi-directional wire protocol, defined in the ARM Debug programmer.
So we have prepared a [wiki](https://wiki.seeedstudio.com/Software-SWD/) to help you learn how to use the SWD Interface to debug your Arduino boards via the J-Link Debug Programmer.


<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/Software-SWD/"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png" alt="pir"  width="900" height="auto"></a></p>

### 6. Arduino Software Serial User Guide

The Arduino hardware has the built-in support for Serial communications on pins 0 and 1 (Hardware Serial) but in some circumstances such as when these pins are already in-use or you need more Serial ports for debugging, Software Serial may seem to be the solution.
We have prepared a [tutorial](https://wiki.seeedstudio.com/Software-Serial/) to demonstrate how to use Software Serial with Arduino.


### 7. Arduino Software API User Guide

Similar to I2C and Serial communications, SPI can be virtualized using software to overcome the physical limitations. 
Here we have prepared a [guide](https://wiki.seeedstudio.com/Software-SPI/) on how to use software SPI with Arduino.


### 8. How to Use Static (Pre-compiled) Libraries in Arduino

To improve compile time of big projects in Arduino, you can use one of the newer features introduced in Arduino IDE (>=1.8.6), static (pre-compiled) libraries for your Arduino Sketches.
We have written a [tutorial](https://wiki.seeedstudio.com/Software-Static-Library/) on getting started with static libraries.


## Existing Wiki Updated

### 1. Raspberry Pi support for Grove - Sunlight Sensor

We have had the [Grove - Sunlight Sensor](https://wiki.seeedstudio.com/Grove-Sunlight_Sensor/) for a while and also had a getting started tutorial, but only with Arduino. This week we bring you it's support to the Raspeberry Pi. This [wiki](https://wiki.seeedstudio.com/Grove-Sunlight_Sensor/) will give you a step-by-step guide on how to use the Grove - Sunlight Sensor with a Rasperry Pi.

<p style="text-align:center;"><a href="https://wiki.seeedstudio.com/Grove-Sunlight_Sensor/"><img src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" alt="pir"  width="320" height="auto"></a></p>

Grove - Sunlight Sensor is a multi-channel digital light sensor, which has the ability to detect UV-light, visible light and infrared light.
This device is based on SI1145, a new sensor from SiLabs. The Si1145 is a low-power, reflectance-based, infrared proximity, UV index and ambient light sensor with I2C digital interface and programmable-event interrupt output. This device offers excellent performance under a wide dynamic range and a variety of light sources including direct sunlight.


<hr style="border-bottom" />

If you have any questions or comments, please don't hesistate to hop on to our [forum](https://forum.seeedstudio.com/latest) and discuss with us directly!
We greatly value your feedback and opinions because we always grow and prosper together with our users and the community!
See you next week!
