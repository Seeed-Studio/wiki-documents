---
name: Grove - Multichannel Gas Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html
oldwikiname: Grove_-_Multichannel_Gas_Sensor
prodimagename: Multi_sensor1.png
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020088 1.jpg
surveyurl: https://www.research.net/r/Grove-Multichannel_Gas_Sensor
sku: 101020088
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_wio
---

<table>
    <tr>
        <td>
            <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Multi_sensor1.png">
        </td>
        <td>
            <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Multi_sensor2.png">
        </td>
    </tr>
</table>


Grove – Multichannel Gas sensor is a environment detecting sensor with a built in MiCS-6814 which can detect many unhealthful gases, and three gases can be measured simultaneously due to its multi channels, so it can help you to monitor the concentration which more than one gas.

This sensor belongs to **Grove system**, and you can plug it onto the **Base shield** and work with Arduino directly without any jumper wires. The interface of it is I2C, so plug it onto the I2C port of Base shield, then you can start to work it.

<div class="admonition caution">
<p class="admonition-title">Caution</p>
The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor.
</div>

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)

!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](http://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/), it will help you choose the gas sensor that best suits your needs.


## Before usage

### Related Reading

We suggest you to read those knowledge before using the Gas sensor, it'll help you to learn more about Arduino and our products, and also it'll let you to use open souse hardware more easier.

-   [Getting Started with Arduino](/Getting_Started_with_Seeeduino)
-   [What is Grove system](/Grove_System)
-   [Why i need a Base shield?](/Base_Shield_V2)

After reading that you will know how to use Base shield with Grove products to work well with Arduino. Let's start it !

### To be prepared

This tutorial will include some necessary products:

-   [Arduino UNO R3](http://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) or [Seeeduino v4](http://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)
-   [Base Shield](http://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
-   Grove - Multichannel Gas Sensor

Hardware Overview
-----------------

<center>
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Multi_sensor1.png)
</center>

Four pins are pointed out from the figure above

| Pin Label | Description             |
|-----------|-------------------------|
| GND       | Connect to ground       |
| VCC       | Power supply: 3.3V - 5V |
| SDA       | I2C data                |
| SCL       | I2C clock               |

The power supply is between 3.3V and 5V, so this sensor can be compatible with a micro-controller whose output voltage is 3.3V.

Features
-------

-   Three fully independent sensing elements on one package
-   Built with ATmega168PA
-   I2C interface with programmable address
-   Heating power can be shut down for low power
-   Detectable gases
    -   Carbon monoxide CO 1 – 1000ppm
    -   Nitrogen dioxide NO2 0.05 – 10ppm
    -   Ethanol C2H6OH 10 – 500ppm
    -   Hydrogen H2 1 – 1000ppm
    -   Ammonia NH3 1 – 500ppm
    -   Methane CH4 &gt;1000ppm
    -   Propane C3H8 &gt;1000ppm
    -   Iso-butane C4H10 &gt;1000ppm

Block Diagram
-------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Electrical Characteristics
--------------------------

| Item          | Condition  | Min. | Typ. | Max. | Unit |
|---------------|------------|------|------|------|------|
| Voltage       | -          | 3.1  | 3.3  | 5.25 | V    |
| Ripple        | @Max Power | -    | 80   | 100  | mV   |
| Heating Power | -          | -    | -    | 88   | mW   |
| Max Power     | -          | -    | -    | 150  | mW   |
| ADC Precision | -          | -    | 10   | -    | Bits |
| I2C Rate      | -          | -    | 100  | 400  | kHz  |
| VIL           | @I2C       | -0.5 | -    | 0.99 | V    |
| VIH           | @I2C       | 2.31 | -    | 5.25 | V    |

### Performance RED sensor

| Characteristic RED sensor  | Symbol | Typ | Min | Max  | Unit |
|----------------------------|--------|-----|-----|------|------|
| Sensing resistance in air  | R0     | -   | 100 | 1500 | kΩ   |
| Typical CO detection range | FS     | -   | 1   | 1000 | ppm  |
| Sensitivity factor         | SR     | -   | 1.2 | 50   | -    |

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Red_sensor.jpg)

### Performance OX sensor

| Characteristic OX sensor    | Symbol | Typ | Min  | Max | Unit |
|-----------------------------|--------|-----|------|-----|------|
| Sensing resistance in air   | R0     | -   | 0.8  | 20  | kΩ   |
| Typical NO2 detection range | FS     | -   | 0.05 | 10  | ppm  |
| Sensitivity factor          | SR     | -   | 2    | -   | -    |

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/OX_sensor.jpg)

### Performance NH3 sensor

| Characteristic NH3 sensor   | Symbol | Typ | Min | Max  | Unit |
|-----------------------------|--------|-----|-----|------|------|
| Sensing resistance in air   | R0     | -   | 10  | 1500 | kΩ   |
| Typical NH3 detection range | FS     | -   | 1   | 300  | ppm  |
| Sensitivity factor          | SR     | -   | 1.5 | 15   | -    |

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/NH3_sensor.jpg)


Getting Started
-------------

!!!Warning
    Then sensor need to preheat at least 10 minutes before getting a stable data.

**Hardware Installation:**

1.Connect Grove - Multichannel Gas Sensor to Seeeduino.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Grove-MultiChannelGasSensor.jpg)

**Upload Code:**

2.Download [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor/archive/master.zip) and [install](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/) it to Arduino Library.

3.Open the code directly by the path:File -> Example -> Mutichannel_Gas_Sensor-> ReadSensorValue_Grove.

The code of ReadSensorValue_Grove is given below.

```c
// Read Data from Grove - Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Serial.begin(115200);  // start serial for output
    Serial.println("power on!");
    gas.begin(0x04);//the default I2C address of the slave is 0x04
    gas.powerOn();
    Serial.print("Firmware Version = ");
    Serial.println(gas.getVersion());
}

void loop()
{
    float c;

    c = gas.measure_NH3();
    Serial.print("The concentration of NH3 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CO();
    Serial.print("The concentration of CO is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_NO2();
    Serial.print("The concentration of NO2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C3H8();
    Serial.print("The concentration of C3H8 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C4H10();
    Serial.print("The concentration of C4H10 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CH4();
    Serial.print("The concentration of CH4 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_H2();
    Serial.print("The concentration of H2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C2H5OH();
    Serial.print("The concentration of C2H5OH is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    delay(1000);
}
```

4.Upload the code. Remember to select Seeeduino Uno from the Tools | Board menu of the Arduino environment, and select the correct serial port Arduino is using.

By opening the serial monitor, you can see the raw data read from sensor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/Mutichannel_Gas_Sensor_Grove_Print.jpg)

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Update Firmware
-----------------

This grove module has an ATmega168 MCU which is flashed with a factory firmware. The version had been updated to V2 at Nov11/2016.
Upload below code to detect the versin of your sensor.

```c
// Get firmware version of Grove Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    Serial.begin(115200);
    gas.begin(SENSOR_ADDR);
    
    unsigned char version = gas.getVersion();
    Serial.print("Version = ");
    Serial.println(version);    
}

void loop()
{
    // nothing to do
}
```

If the version of your sensor is V1, we advise you to upgrade it to V2 to get a better performance.

To update the firmware, you need,

* An Arduino UNO/Seeeduino V3/
* 6 dupont wire 
* Soldering Iron

There's a ICSP pad on the back of the board, you need connect those pads to an Arduino board.

| Sensor | Arduino |
|--------|---------|
| MISO   | D12     |
| SCK    | D13     |
| NRST   | D10     |
| GND    | GND     |
| MOSI   | D11     |
| VCC    | 5V      |

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/firmware_connect.jpeg)

Then open the example **UpdateFrimware** to your Arduino, open Serial monitor and you will get some info printed.
Input a 'g' to start.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/img/firmware_done.png)


calibration
--------------

If you always get an unauthentic value, please try to calibrate the sensor. 
Open the example **calibration** and upload to your Arduino, open Serial monitor to get info when it's calibrating. 

!!!Note
    The calibration has been done before the modules leave the factory. If you want to recalibrate, please do make sure that the air condition is fresh. And the calibration may need minutes to half an hour. 

Resources
---------

-   [Grove - Multichannel Gas Sensor v1.0 sch](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/res/Grove-Multichannel_Gas_Sensor_v1.0_sch.pdf)
-   [Grove - Multichannel Gas Sensor eagle files](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip)
-   [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)
-   [MiCS-6814 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Multichannel_Gas_Sensor/master/res/MiCS-6814_Datasheet.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Multichannel_Gas_Sensor -->

FAQ
---------
* **Q1. How to change I2C address of the module**

    * *A1. Open the I2C_Address example and run it.*

* **Q2. I change the I2C address and unlucky that I forget what is it.**

    * *A2. Don't worry about it, run factory_setting example to make it default. Please note that the calibration data will factory setting as well.*

* **Q3. Does the multichannel gas sensor work with Wio GPS and Wio LTE?**

    * *A3. Yes, please refer to below code. 

Wio GPS: 

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (12)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```


Wio LTE:

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (26)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    // SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```


## Projects

**Smart Crops: Implementing IoT in Conventional Agriculture!**: Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>