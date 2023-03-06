---
description: Xadow - Barometer BMP180
title: Xadow - Barometer BMP180
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Barometer_BMP180
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG)

The module can measure the air pressure and temperature of the current environment, and then you can convert this signal to information of altitude. The BMP180 is the function compatible successor of the BMP085, a new generation of high precision digital pressure sensors for consumer applications. The ultra-low power, low voltage electronics, superior performance of the BMP180 is optimized for use in wearable device, mobile phones, PDAs, GPS navigation devices and outdoor equipment. The I2C interface allows for easy system integration with a microcontroller.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html)


## Specification
---
Working Voltage: 3.3v
Pressure Range:300 ~ 1100hPa(+9000m ~ -500m relating to sea level)
Low Power
Control Mode: I2C (address 0x77)
Operating Temperature：-40 ~ +85 °C
Dimensions: 25.43mm x 20.35mm


## Demonstration
---
**With Xadow Main Board**

The demo will show you how to get the air pressure and temperature of the current environment.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG)

!!!Note
    When connecting Xadow - Barometer BMP180 to Xadow - Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

## Download Library
---
- Xadow Barometer BMP180 is sharing the library with Grove - Barometer Sensor. You can download directly the [library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) from GitHub.
- Now you can open the code and upload it to Xadow Main Board. If you have not installed the Xadow Driver, You can learn the operation steps by referring to the [getting started](https://wiki.seeedstudio.com/Getting_Started_with_Seeeduino/) in wiki main page .

```
/*
* Get pressure, altitude, and temperature from the BMP180.
* Serial.print it out at 9600 baud to serial monitor.
*/
#include "Barometer.h"
#include "Wire.h";
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
  Serial.print(pressure, 0); // whole numbers only.
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

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg)

- The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---
- [Xadow - Barometer BMP180 Eagle File](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip)
- [Barometer_Sensor Library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- [BMP180 datasheet](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
