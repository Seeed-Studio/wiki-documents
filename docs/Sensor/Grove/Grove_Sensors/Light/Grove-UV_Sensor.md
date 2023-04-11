---
description: Grove - UV Sensor
title: Grove - UV Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-UV_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/UV_Sensor_01.jpg" /></div>

The Grove – UV Sensor is used for detecting the intensity of incident ultraviolet(UV) radiation. This form of electromagnetic radiation has shorter wavelengths than visible radiation. The Grove - UV Sensor is based on the sensor GUVA-S12D which has a wide spectral range of 200nm-400nm. The module outputs electrical signal which varies with the UV intensity, which gives your suggestion if it is a good idea to beach today.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Features
--------

- High stability
- Good sensitivity
- Low power consumption
- Schottky type photodiode sensor
- Wide response range
- Grove Interface

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
--------------

| Item                | Min | Typical | Max | Unit |
|---------------------|-----|---------|-----|------|
| Operating Voltage   | 3.0 | 5.0     | 5.1 | VDC  |
| Current             |     | 0.31    |     | mA   |
| Output Voltage      |     |         |     | mV   |
| Response wavelength | 240 | ~       | 370 | nm   |
| Working Temperature | -30 | ~       | 85  | ℃    |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Application Ideas
-----

- UV sensors are used in many different applications, include pharmaceuticals, automobiles, and robotics.
- UV sensors are also used in the printing industry for solvent handling and dyeing processes.
- In addition, UV sensors are used in the chemical industry for the production, storage, and transportation of chemicals as well.

The theory of UV sensor is: In sunlight, the UV index and Photocurrent are a linear relationship.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/The%20theory%20of%20UV%20sensor.png" /></div>

About our Grove - UV Sensor, we have converted Photocurrent to corresponding voltage value collected by Arduino/Seeeduino. The output voltage and the UV index is linear:

**illumination intensity = 307 * Vsig**

Vsig is the value of voltage measured from the SIG pin of the Grove interface, unit V.
illumination intensity unit: mW/m<sup>2</sup> for the combination strength of UV light with wavelength range: 240nm~370nm

:::note
To calculate the UV index value, please refer to <a href="http://www2.epa.gov/sunwise/uv-index">US EPA</a>. It is hard to say that the measurement from this sensor can be converted to the EPA standard UV index, but can be estimated roughly.
:::

UV Index = illumination intensity / 200

Getting Started
--------------

:::note
    This chapter is based on Win10 and Arduino IDE 1.6.9
:::

We will show you how this Grove - UV Sensor works through a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - UV Sensor | Base Shield |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

  **Connection**

  Thanks to the benefits of Grove series modules, you don't need to make soldering or bread board, what you need to do is to connect the modules to the right port of Base Shield. For this demo, we only need one Grove module.

- Connect Grove UV Sensor to A0 port of Grove - Base Shield.
- Plug the Grove - Base Shield into Arduino/Seeeduino and connect them to PC by using a USB cable.
- The demo code is shown below.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/connection.jpg" /></div>

  **Upload the sketch to Arduino and open the serial port to monitor the data**

```
// modified by Victor
// to calculate UV index directly
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// accumulate readings for 1024 times
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // get mean value
    Serial.print("The current UV index is:");
    Serial.print((meanVal*1000/4.3-83)/21);// get a detailed calculating expression for UV index in schematic files.
    Serial.print("\n");
    delay(20);

}
```

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Grove - UV Sensor v1.1 PCB and schematics(current version) in Eagle format](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UV Sensor v1.1 PCB(current version) in PDF format](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UV Sensor v1.1 schematics(current version) in PDF format](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1sch.pdf)
- [Grove - UV Sensor v1.1 Sensor Datasheets(current version)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [US EPA Suggestions About UV Radiation](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UV Sensor v1.0 schematics and datasheets(older version)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.0_Datasheets.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_UV_Sensor -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
