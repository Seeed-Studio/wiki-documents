---
title: Grove - 3-Axis Compass V1.0
category: Sensor
bzurl: https://seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html
oldwikiname: Grove_-_3-Axis_Compass_V1.0
prodimagename: Grove-3-Axis_Compass_V1.0.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020034 1.jpg
surveyurl: https://www.research.net/r/Grove-3-Axis_Compass_V1_0
sku: 101020034
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/img/Grove-3-Axis_Compass_V1.0.jpg)

This 3-axis digital compass features a low field magnetic sensing multi-chip module HMC5883L, which provides up to 1° to 2° heading accuracy. HMC5883L consists of high-resolution HMC118X series magneto-resistive sensors, as well as Honeywell developed ASIC containing amplification, automatic degaussing strap drivers, offset cancellation and 12 bit ADC. With peripheral power management circuit added, this is an easy to use and reliable compass module for low cost compassing and magnetometry.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)

Specifications
--------------

-   Input Voltage: 3.3V, 5V
-   Sleep Mode Current: 2.5uA
-   Measurement Mode Current: 640uA
-   High resolution
-   Easy to control I2C interface
-   Compatible with either 3.3V or 5.0V development platform
-   Max 116Hz output rate
-   High heading accuracy

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


##Getting Started

### Play with Arduino

This demo is going to show you how to read raw data, how to calibrate the data with your local magnetic declination angle and how to get heading angle.

First off, before any action you are going to take, you need to prepare a parameter you are going to use in your demo. That's your local magnetic declination.

You can find it out in degree via [the magnetic declination webpage](http://www.magnetic-declination.com/). For example, mine is -2°37’, which is -2.617 degree.

Then transfer it from degree to radians, and there you get the "declinationAngle". For example, in my case, declinationAngle = -2.617 \* π / 180 = -0.0456752665 rad. Three significant figures are enough. So I would shorten it into -0.0456 rad. And this is the parameter you are going to replace the value of "declinationAngle" in the demo code with.

Now let's start to run your compass.

1. Plug the 3-axis compass into the I2C port of Grove - Base Shield.

2. Download the library file: [Digital Compass Library](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/res/Digital_Compass.zip). Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.

3. Open the demo by the path:File ->Example ->Digital Compass ->HMC5883L_Example.

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/img/Digital_Compass1.jpg)

4. Replace the value of variable "declinitionAngle" with the one you've figured out already.

5. Upload the Code.

6. Check the output result by opening the serial monitor.

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/img/Digital_Compass2.jpg)


### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - 3-axis compass|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the 3-axis compass to I2C port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/raw/master/img/Compass_Hat.jpg)



#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

!!!Note
    You are required to install python-mraa and python-upm, see the instruction here https://github.com/Seeed-Studio/pi_repo#mraa--upm-package-repository-for-raspberry-pi for more information.


```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_3_axis_compass_bmm150.py 

```

Following is the grove_3_axis_compass_bmm150.py code.

```python

from __future__ import print_function
import time, sys, signal, atexit, math
try:
    from upm import pyupm_bmm150 as sensorObj
except ImportError:
    print('Error: Please install python-mraa python-upm module.\r\n' 
          'See instruction here https://github.com/Seeed-Studio/pi_repo#mraa--upm-package-repository-for-raspberry-pi ')


def main():
    # Instantiate a BMP250E instance using default i2c bus and address
    sensor = sensorObj.BMM150(0, 0x13)

    # For SPI, bus 0, you would pass -1 as the address, and a valid pin for CS:
    # BMM150(0, -1, 10);

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # now output data every 250 milliseconds
    while (1):
        sensor.update()

        data = sensor.getMagnetometer()
        print("Magnetometer x: {0:.2f}".format(data[0]), end=' ')
        print(" y: {0:.2f}".format(data[1]), end=' ')
        print(" z: {0:.2f}".format(data[2]), end=' ')
        print(" uT")

        xyHeading = math.atan2(data[0], data[1])
        zxHeading = math.atan2(data[2], data[0])
        heading = xyHeading

        if heading < 0:
            heading += 2*math.pi
        if heading > 2*math.pi:
            heading -= 2*math.pi
        
        headingDegrees = heading * 180/(math.pi); 
        xyHeadingDegrees = xyHeading * 180 / (math.pi)
        zxHeadingDegrees = zxHeading * 180 / (math.pi)

        print('heading(axis_Y point to): {0:.2f} degree'.format(headingDegrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()


```

!!!success
    If everything goes well, you will be able to see the following result

```python

pi@raspberrypi:~/grove.py/grove $ python grove_3_axis_compass_bmm150.py 
Magnetometer x: -34.12  y: 36.71  z: -21.25  uT
heading(axis_Y point to): 317.10 degree
Magnetometer x: -34.49  y: 38.20  z: -16.32  uT
heading(axis_Y point to): 317.92 degree
Magnetometer x: -34.12  y: 38.20  z: -9.87  uT
heading(axis_Y point to): 318.23 degree
Magnetometer x: -32.64  y: 38.94  z: -5.69  uT
heading(axis_Y point to): 320.03 degree
Magnetometer x: -31.52  y: 38.20  z: -2.28  uT
heading(axis_Y point to): 320.47 degree
Magnetometer x: -29.67  y: 38.20  z: 0.38  uT
heading(axis_Y point to): 322.16 degree
Magnetometer x: -26.33  y: 38.20  z: 4.55  uT
heading(axis_Y point to): 325.42 degree
^CExiting


```


You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus).

3.Connection

-   Plug the sensor to grovepi socket i2c-x(1~3) by using a grove cable.

4.Navigate to the demos' directory:

       cd yourpath/GrovePi/Software/Python/

-   To see the code

```
    nano grove_compass_lib.py       
    nano grove_compass_example.py    
```
```
    import grove_compass_lib
    c=grove_compass_lib.compass()
    while True:
            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees
            c.update()
            time.sleep(.1)
```

5.Run the demo.
```
    sudo python grove_compass_example.py
```

Resources
---------

-   [Grove-3-Axis Digital Compass Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip)
-   [HMC5883.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/res/HMC5883.pdf "File:HMC5883.pdf")
-   [Digital Compass Library](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Compass_V1.0/master/res/Digital_Compass.zip)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_3-Axis_Compass_V1.0 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 