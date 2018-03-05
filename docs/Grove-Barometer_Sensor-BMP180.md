---
title: Grove - Barometer Sensor (BMP180)
category: Sensor
bzurl: https://seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html
oldwikiname: Grove_-_Barometer_Sensor_(BMP180)
prodimagename: Barometer-BMP180-.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Grove Barometer Sensor BMP180.jpg
surveyurl: https://www.research.net/r/Grove-Barometer_Sensor-BMP180
sku: 101020072
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_wio, plat_pi
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Barometer-BMP180-.jpg)

This is a Grove module for the Bosch BMP180 high-precision, low-power digital barometer. The BMP180 offers a pressure measuring range of 300 to 1100 hPa with an accuracy down to 0.02 hPa in advanced resolution mode. It’s based on piezo-resistive technology for high accuracy, ruggedness and long term stability. The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification.It is designed to be connected directly to a micro-controller via the I2C bus.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)

Features
--------

-   Digital two wire (I2C) interface
-   Wide barometric pressure range
-   Flexible supply voltage range
-   Ultra-low power consumption
-   Low noise measurement
-   Factory-calibrated
-   -40 to +85°C operational range, ±2°C temperature accuracy
-   I2C address: 0x77

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Application Ideas
-----------------

-   Enhancement of GPS navigation
-   Indoor and outdoor navigation
-   Leisure and sports
-   Weather forecast
-   Vertical velocity indication (rise/sink speed)

Specifications
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td>
1.1
</td>
<td>
/
</td>
<td>
20
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Pressure Range
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
Faster I2C data transfer
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
40.1*20.2*9.7
</td>
<td>
mm
</td>
</tr>
</table>

Platforms Supported
-------------------

Usage
-----

### With [Arduino](/Arduino "Arduino")

Barometric condition is one of the criteria used to predict coming change in weather and deduce altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor (BMP180).

1.Connect it to IIC port of Seeeduino or Grove - Base Shield via a Grove cable. And connect Arduino to PC via a USB cable.

2.Download [the library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)(the barometer library is shared by Grove - Barometer Sensor (BMP180) and Grove - Barometer Sensor(BMP085));Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.

3.Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor.

```
    /* Barometer demo V1.0
    * Based largely on code by  Jim Lindblom
    * Get pressure, altitude, and temperature from the BMP085.
    * Serial.print it out at 9600 baud to serial monitor.
    *
    * By:http://www.seeedstudio.com
    */
    #include "Barometer.h"
    #include <Wire.h>
    float temperature;
    float pressure;
    float atm;
    float altitude;
    Barometer myBarometer;
    void setup(){
      Serial.begin(9600);
      myBarometer.init();

    }

    void loop()
    {
       temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
       pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
       altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
       atm = pressure / 101325;

      Serial.print("Temperature: ");
      Serial.print(temperature, 2); //display 2 decimal places
      Serial.println("deg C");

      Serial.print("Pressure: ");
      Serial.print(pressure, 0); //whole number only.
      Serial.println(" Pa");

      Serial.print("Ralated Atmosphere: ");
      Serial.println(atm, 4); //display 4 decimal places

      Serial.print("Altitude: ");
      Serial.print(altitude, 2); //display 2 decimal places
      Serial.println(" m");

      Serial.println();

      delay(1000); //wait a second and get values again.
    }
```

4.Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Barometer_Sensor.jpg)

The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Pressure_and_Altitude.jpg)

### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePiPlus).

3.Connection

-   Plug the sensor to grovepi socket i2c-x(1~3) by using a grove cable.

4.Navigate to the demos' directory:

       cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit

-   To see the code

```
    nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" to exit #
```
```
    #!/usr/bin/python

    import smbus
    import RPi.GPIO as GPIO
    #import grovepi
    from grove_i2c_barometic_sensor import BMP085

    # ===========================================================================
    # Example Code
    # ===========================================================================

    # Initialise the BMP085 and use STANDARD mode (default value)
    # bmp = BMP085(0x77, debug=True)
    bmp = BMP085(0x77, 1)

    # To specify a different operating mode, uncomment one of the following:
    # bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode
    # bmp = BMP085(0x77, 1)  # STANDARD Mode
    # bmp = BMP085(0x77, 2)  # HIRES Mode
    # bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode

    rev = GPIO.RPI_REVISION
    if rev == 2 or rev == 3:
        bus = smbus.SMBus(1)
    else:
        bus = smbus.SMBus(0)

    temp = bmp.readTemperature()

    # Read the current barometric pressure level
    pressure = bmp.readPressure()

    # To calculate altitude based on an estimated mean sea level pressure
    # (1013.25 hPa) call the function as follows, but this won't be very accurate
    # altitude = bmp.readAltitude()

    # To specify a more accurate altitude, enter the correct mean sea level
    # pressure level.  For example, if the current pressure level is 1023.50 hPa
    # enter 102350 since we include two decimal places in the integer value
    altitude = bmp.readAltitude(101560)

    print "Temperature: %.2f C" % temp
    print "Pressure:    %.2f hPa" % (pressure / 100.0)
    print "Altitude:    %.2f m" % altitude
```

5.Run the demo.
```
    sudo python grove_i2c_barometic_sensor_example.py
```

6.Result

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Grovepi_barometer_sensor_00.png)

Resources
---------

-   [Grove - Barometer Sensor(BMP180) Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/res/Barometer_Sensor-BMP180-Eagle_File.zip)
-   [Barometer\_Sensor Library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BMP180 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/res/BMP180.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor_(BMP180) -->
