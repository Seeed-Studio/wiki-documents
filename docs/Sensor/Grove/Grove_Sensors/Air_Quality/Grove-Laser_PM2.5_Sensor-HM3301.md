---
description: Grove - Laser PM2.5 Sensor (HM3301)
title: Grove - Laser PM2.5 Sensor (HM3301)
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Laser_PM2.5_Sensor-HM3301
last_update:
  date: 1/20/2023
  author: jianjing huang
---

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/main.jpg)

The Grove - Laser PM2.5 Sensor (HM3301) is a new generation of laser dust detection sensor, which is used for continuous and real-time detection of dust in the air.

Different from the pumping dust detection sensor, the HM-3301 innovatively uses fan blades to drive air, and the air flowing through the detection chamber is used as a test sample to perform real-time and continuous test on dust of different particle sizes in the air.

This module is suitable for dust detectors, intelligent air purifiers, intelligent air conditioners, intelligent ventilation fans, air quality testing, haze meters, environmental monitoring and relative products and applications

<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- High sensitivity on dust particles of 0.3 μm or greater
- Real-time & continuous detection of dust concentration in the air
- Based on laser light scattering technology, readings are accurate, stable, and consistent
- Low noise
- Ultra-low power consumption

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating temperature|-10～60℃|
|Operating humidity|10%～90%RH (non-condensing)|
|Partical size|3 channels-- 2.5µm, 5µm, 10µm |
|Range<br />(PM2.5 standard value)|1~500µg/ m<sup>3</sup> (Effective range)<br />1000 µg/ m<sup>3</sup> (Maximum range)|
|Resolution|Concentration: 1µg/ m<sup>3</sup> <br />Counting concentration: 1s/0.1L|
|Stability time|30 seconds after power-on|
|Interface|I2C|
|I2C address|0x40|

## Typical applications

- Air purifier / air conditioner
- Air quality testing equipment
- Industrial PM value analysis
- Dust and smoke detection and analysis
- Real-time PM2.5, PM10, TSP detector
- Multichannel particle counter
- Environmental testing equipment

## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/pin_out.jpg)

## Working Principle

The HM-3301 Dust Sensor is based on the advanced Mie scattering theory. When light passes through particles with quantity same as or larger than wavelength of the light, it will produce light scattering. The scattered light is concentrated to a highly sensitive photodiode, which is then amplified and analyzed by a circuit. With specific mathematical model and algorithm, the count concentration and mass concentration of the dust particles is obtained.

The HM-3301 dust sensor is composed of main components such as a fan, an infrared laser source, a condensing mirror, a photosensitive tube, a signal amplifying circuit and a signal sorting circuit.

![HM-3301 Module structure diagram](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/principle.jpg "HM-3301 Module structure diagram")

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Laser PM2.5 Sensor (HM3301) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Get One Now</a>|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove - Laser PM2.5 Sensor (HM3301) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/connect.jpg)

:::note
If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove - Laser PM2.5 Sensor (HM3301) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |

#### Software

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Seeed_PM2_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> PM2.5 sensor --> basic_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path1.jpg)

    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_PM2_5_sensor_HM3301-master\examples\basic_demo**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path2.jpg)

    3. Or, you can just click the icon ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```cpp

#include "Seeed_HM330X.h"

#ifdef  ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif


HM330X sensor;
u8 buf[30];


const char *str[]={"sensor num: ","PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };

err_t print_result(const char* str,u16 value)
{
    if(NULL==str)
        return ERROR_PARAM;
    SERIAL.print(str);
    SERIAL.println(value);
    return NO_ERROR;
}

/*parse buf with 29 u8-data*/
err_t parse_result(u8 *data)
{
    u16 value=0;
    err_t NO_ERROR;
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=1;i<8;i++)
    {
         value = (u16)data[i*2]<<8|data[i*2+1];
         print_result(str[i-1],value);

    }
}

err_t parse_result_value(u8 *data)
{
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=0;i<28;i++)
    {
        SERIAL.print(data[i],HEX);
        SERIAL.print("  ");
        if((0==(i)%5)||(0==i))
        {
            SERIAL.println(" ");
        }
    }
    u8 sum=0;
    for(int i=0;i<28;i++)
    {
        sum+=data[i];
    }
    if(sum!=data[28])
    {
        SERIAL.println("wrong checkSum!!!!");
    }
    SERIAL.println(" ");
    SERIAL.println(" ");
    return NO_ERROR;
}


/*30s*/
void setup()
{
    SERIAL.begin(115200);
    delay(100);
    SERIAL.println("Serial start");
    if(sensor.init())
    {
        SERIAL.println("HM330X init failed!!!");
        while(1);
    }
    
}



void loop()
{
    if(sensor.read_sensor_value(buf,29))
    {
        SERIAL.println("HM330X read result failed!!!");
    }
    parse_result_value(buf);
    parse_result(buf);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    delay(5000);
}

```

:::caution
The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the `ctrl`+`shift`+`m` key at the same time. Set the baud rate to **115200**.

:::tipsuccess
        If every thing goes well, when you open the Serial Monitor it may show as below:
:::

```c
Serial start
0   
FF  0  0  0  2D   
0  3F  0  45  0   
22  0  32  0  3B   
0  0  0  0  0   
0  0  0  0  0   
0  0   
 
sensor num: 0
PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): 45
PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): 63
PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): 69
PM1.0 concentration(Atmospheric environment,unit:ug/m3): 34
PM2.5 concentration(Atmospheric environment,unit:ug/m3): 50
PM10 concentration(Atmospheric environment,unit:ug/m3): 59
```

:::note
The **standard particulate matter mass concentration value** refers to the mass concentration value obtained by density conversion of industrial metal particles as equivalent particles, and is suitable for use in industrial production workshops and the like. The **concentration of particulate matter in the atmospheric environment** is converted by the density of the main pollutants in the air as equivalent particles, and is suitable for ordinary indoor and outdoor atmospheric environments. So you can see that there are two sets of data above.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Laser PM2.5 Sensor (HM3301) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip)

- **[Zip]** [Seeed_PM2_5_sensor_HM3301 Software Library](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301/archive/master.zip)

- **[PDF]** [Datasheet HM3301](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/HM-3300%263600_V2.1.pdf)

## Projects

**Atmospheric Pollution Visualization**：The air pollution problem attracts more and more attention. This time we tried to monitoring PM2.5 with Wio LTE and new Laser PM2.5 Sensor.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## Tech Support & Product Discussion

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
