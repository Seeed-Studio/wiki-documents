---
name: Grove - Barometer Sensor (BMP180)
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

This is a Grove module for the Bosch BMP180 high-precision, low-power digital barometer. The BMP180 offers a pressure measuring range of 300 to 1100 hPa with an accuracy down to 0.02 hPa in advanced resolution mode. It’s based on piezo-resistive technology for high accuracy, ruggedness and long term stability. The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)

## Features

-   Digital two wire (I2C) interface
-   Wide barometric pressure range
-   Flexible supply voltage range
-   Ultra-low power consumption
-   Low noise measurement
-   Factory-calibrated
-   -40 to +85°C operational range, ±2°C temperature accuracy
-   I2C address: 0x77

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Application Ideas


-   Enhancement of GPS navigation
-   Indoor and outdoor navigation
-   Leisure and sports
-   Weather forecast
-   Vertical velocity indication (rise/sink speed)

## Specifications


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

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting started


### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP180 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **Step 2.** Connect Grove-Barometer_Sensor-BMP180 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![with_ardu](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/raw/master/img/with_ardu.jpg)

!!!Note
    	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.

| Seeeduino_v4 | Grove-Barometer_Sensor-BMP180  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Step 1.** Download the [the library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) from Github.

**Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor.


Here is the code

```c++
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

 **Step 4.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Barometer_Sensor.jpg)


### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:


| Raspberry pi | GrovePi_Plus | Grove-Barometer_Sensor-BMP180 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/raw/master/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|



- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Barometer_Sensor-BMP180  to **I2C** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/raw/master/img/with_rpi.jpg)

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.


```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

-	**Step 3.** Excute below commands to use this sensor

```bash
cd ~/GrovePi/Software/Python/grove_barometer_sensors/barometric_sensor_bmp180
python grove_i2c_barometic_sensor_example.py
```

```python
#!/usr/bin/python
import time
import smbus
import RPi.GPIO as GPIO
#import grovepi
from grove_i2c_barometic_sensor_BMP180 import BMP085

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

while True :
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

  print("Temperature: %.2f C" % temp)
  print("Pressure:    %.2f hPa" % (pressure / 100.0))
  print("Altitude:    %.2f m" % altitude)
  time.sleep(.1)

```


-	**Step 4.** Here is the result:
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Grovepi_barometer_sensor_00.png)




## Resources


- **[Eagle]**  [Grove - Barometer Sensor(BMP180) Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/res/Barometer_Sensor-BMP180-Eagle_File.zip)
- **[Library]**  [Barometer\_Sensor Library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- **[Datasheet]**  [BMP180 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/res/BMP180.pdf)
- **[Altitude Vs. Pressure]** The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Barometer_Sensor-BMP180/master/img/Pressure_and_Altitude.jpg)

## Projects

**Weather and Security Station with Blynk**: Monitor weather and security remotely with Blynk and the CC32000 LaunchPad!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/rei-vilo/weather-and-security-station-with-blynk-74608b/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>