---
name: Xadow Barometer
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Barometer-p-1522.html
oldwikiname: Xadow Barometer
prodimagename: Baro_Meter_01.jpg
surveyurl: https://www.research.net/r/xadow_barometer
sku: 103040001
---

![](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/img/Baro_Meter_01.jpg)

The module can measure the air pressure and temperature of the current environment, and then you can convert this signal to information of altitude. If you are planning to use Xadow to do a wearable device and measure the altitude when you climb the mountain, then the module will be your perfect choice.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-p-1522.html)

## Specification
---
- Working Voltage: 1.8 ~ 3.3v
- Pressure Range: 300 ~ 1100hPa(+9000m ~ 4500m above sea level)
- Low Power
- Control Mode: I2C (address 0x77)
- Operating Temperature：-40 ~ +85 °C
- Dimensions: 25.43mm x 20.35mm


## Demonstration
---
The demo will show you how to get the air pressure and temperature of the current environment.

**Hardware Installation**

![](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/img/XadowBarometerUsage.jpg)

!!!Note
    When connect Xadow Barometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

## Download Library
----
- Xadow Barometer is sharing the library with Grove - Barometer Sensor. You can download directly the [library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) from Github.
- Now you can open the code and upload it to Xadow Main Board. If you have not installed the Xadow Driver, You can learn the operation steps by referring to the [getting started](http://wiki.seeedstudio.com/Xadow_Main_Board/) in wiki main page .

```
/*
* Get pressure, altitude, and temperature from the BMP085.
* Serial.print it out at 9600 baud to serial monitor.
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

- Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.

![](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/img/Xadow_Baremeter_Result.jpg)

- Here is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

![](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/img/Pressure_and_Altitude.jpg)

## Resources
---
- [Xadow Barometer Eagle File](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/res/Xadow_Barometer.zip)
- [Xadow Barometer Library](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/res/Xadow_Barometer_Library.zip)
- [BST-BMP085-DS000-06](https://github.com/SeeedDocument/Xadow_Barometer/raw/master/res/BST-BMP085-DS000-06.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>