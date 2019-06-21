---
name: Xadow - Multichannel Gas Sensor
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html
oldwikiname: Xadow - Multichannel Gas Sensor
prodimagename: Xadow_-_Multichannel_Gas_Sensor_photo.jpg
surveyurl: https://www.research.net/r/Xadow_Multichannel_Gas_Sensor
sku:  101020085
---
![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Xadow_-_Multichannel_Gas_Sensor_photo.jpg)

Xadow – Multichannel Gas sensor is a very small sensor board with a compact MOS sensor, MiCS-6814.The MiCS-6814 is a robust MEMS sensor for the detection of pollution from automobile exhausts and foragricultural/industrial odors. This sensor board has two standard Xadow interfaces. It is very easy to use with [Xadow - Main Board.](http://wiki.seeedstudio.com/Xadow_Main_Board)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html)

## Feature
---
- Three fully independent sensing elements on one package
- Built with ATmega168PA
- I2C interface with programmable address
- Heating power can be shut down for low power
- Standard Xadow outline

## Block Diagram

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Xadow_-_Multichannel_Gas_Sensor_block_diagram.jpg)

## Electrical Characteristics
---
|Item |Condition	|Min.	|Typ.	|Max.	|Unit|
|---|---|---|---|---|---|
|Voltage|	-	|3.1	|3.3|	3.5|	V|
|Ripple	|@Max Power|	-	|80	|100|	mV|
|Heating Power|	-	|-	|-	|88|	mW|
|Max Power|	-|	-|	-|	150|	mW|
|ADC Precision|	-|	-|	10|	-	|Bits|
|ADC Voltage	|-	|0|	-	|3.3	|V|
|I2C Rate|	-|	-	|100	|400	|kHz|
|VIL|	@I2C|	-0.5	|-|	0.99	|V|
|VIH|	@I2C|	2.31|	-|	3.8	|V|

**Performance RED sensor**

|Characteristic RED sensor	|Symbol	|Typ|	Min	|Max	|Unit|
|---|---|---|---|---|
|Sensing resistance in air	|R0|	-	|100	|1500|	kΩ|
|Typical CO detection range	|FS|	-	|1|	1000|	ppm|
|Sensitivity factor	|SR|	-|	1.2|	50|	-|

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Red_sensor.jpg)

**Performance OX sensor**
|Characteristic OX sensor	|Symbol|	Typ	|Min	|Max	|Unit|
|---|---|---|---|---|---|
|Sensing resistance in air	|R0	|-	|0.8|	20|	kΩ|
|Typical NO2 detection range|	FS|	-	|0.05|	10|	ppm|
|Sensitivity factor	|SR	|-|	2	|-	|-|

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/OX_sensor.jpg)

**Performance NH3 sensor**
|Characteristic NH3 sensor|	Symbol	|Typ|	Min|	Max|	Unit|
|---|---|---|---|---|---|
|Sensing resistance in air	|R0|	-	|10	|1500|	kΩ|
|Typical NH3 detection range|	FS	|-	|1	|300|	ppm|
|Sensitivity factor|	SR|-	|1.5|	15|	-|

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/NH3_sensor.jpg)

## Pin Definition
---
![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Xadow_Pins.jpg)

## Demonstration

You can get start with [Xadow - Main Board](http://wiki.seeedstudio.com/Xadow_Main_Board)

**Hardware Installation: **

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Xadow_-_Mutichannel_Gas_Sensor_connect_to_Xadow.JPG)

1) Connect Xadow - Multichannel Gas Sensor to [Xadow - Main Board](http://wiki.seeedstudio.com/Xadow_Main_Board). Do not forget to install Xadow
Driver. Note: when connect Xadow - Multichannel Gas Sensor to [Xadow - Main Board](http://wiki.seeedstudio.com/Xadow_Main_Board), you should concern aboutthe connection direction. The connection method is that the unfilled corner of one xadow moduleneed to connect to the right angle of another module(see four corners of each xadow module).

Upload Code:

2) Download [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor) and install it to Arduino Library.

3) Open the code directly by the path:File -> Example ->Mutichannel_Gas_Sensor->ReadSensorValue_Xadow.

The content of ReadSensorValue_Xadow.ino please refer to below.

```
/*
    This is a demo to test MutichannelGasSensor library
    This code is running on Xadow-mainboard, and the I2C slave is Xadow-MutichannelGasSensor
    There is a ATmega168PA on Xadow-MutichannelGasSensor, it get sensors output and feed back to master.
    the data is raw ADC value, algorithm should be realized on master.

    please feel free to write email to me if there is any question

    Jacky Zhang, Embedded Software Engineer
    qi.zhang@seeed.cc
    17,mar,2015
*/

#include "xadow.h"
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Xadow.init();

    Serial.begin(9600);  // start serial for output
    Serial.println("power on!");

    mutichannelGasSensor.begin(0x04);//the default I2C address of the slave is 0x04
    //mutichannelGasSensor.changeI2cAddr(0x10);
    //mutichannelGasSensor.doCalibrate();
    //delay(8000);
    while(mutichannelGasSensor.readR0() < 0)
    {
        Serial.println("sensors init error!!");
        delay(1000);
    }
    Serial.print("Res0[0]: ");
    Serial.println(mutichannelGasSensor.res0[0]);
    Serial.print("Res0[1]: ");
    Serial.println(mutichannelGasSensor.res0[1]);
    Serial.print("Res0[2]: ");
    Serial.println(mutichannelGasSensor.res0[2]);
    mutichannelGasSensor.powerOn();
}

void loop()
{
    mutichannelGasSensor.readR();
    Serial.print("Res[0]: ");
    Serial.println(mutichannelGasSensor.res[0]);
    Serial.print("Res[1]: ");
    Serial.println(mutichannelGasSensor.res[1]);
    Serial.print("Res[2]: ");
    Serial.println(mutichannelGasSensor.res[2]);

    mutichannelGasSensor.calcGas();
    Serial.print("NH3: ");
    Serial.print(mutichannelGasSensor.density_nh3);
    Serial.println("ppm");
    Serial.print("CO: ");
    Serial.print(mutichannelGasSensor.density_co);
    Serial.println("ppm");
    Serial.print("NO2: ");
    Serial.print(mutichannelGasSensor.density_no2);
    Serial.println("ppm");

    Xadow.greenLed(LEDON);
    delay(500);
    Xadow.greenLed(LEDOFF);
    delay(500);
    Serial.println("...");
}
```

4) Upload the code. Remeber to select Seeeduino Xadow from the Tools | Board menu of the
Arduino environment, and select the correct serial port [Xadow - Main Board](http://wiki.seeedstudio.com/Xadow_Main_Board) is using. Or you could select Arduino Leonardo to instead of it.

By opening the serial monitor, you can see the raw data read from sensor.

![](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/img/Mutichannel_Gas_Sensor_XadowPrint.jpg)

## Resources
---
- [Xadow - Multichannel Gas Sensor v1.0 sch](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/res/Xadow_-_Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Xadow - Multichannel Gas Sensor eagle files](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip)
- [MiCS-6814 Datasheet](https://github.com/SeeedDocument/Xadow_Multichannel_Gas_Sensor/raw/master/res/MiCS-6814_Datasheet.pdf)
- [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>