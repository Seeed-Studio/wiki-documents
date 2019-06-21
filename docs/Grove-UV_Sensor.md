---
name: Grove - UV Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-UV-Sensor-p-1540.html
oldwikiname: Grove_-_UV_Sensor
prodimagename: UV_Sensor_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020043 1.jpg
surveyurl: https://www.research.net/r/Grove-UV_Sensor
sku: 101020043
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit
---


![](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/img/UV_Sensor_01.jpg)

The Grove – UV Sensor is used for detecting the intensity of incident ultraviolet(UV) radiation. This form of electromagnetic radiation has shorter wavelengths than visible radiation. The Grove - UV Sensor is based on the sensor GUVA-S12D which has a wide spectral range of 200nm-400nm. The module outputs electrical signal which varies with the UV intensity, which gives your suggestion if it is a good idea to beach today.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)

Features
--------

-   High stability
-   Good sensitivity
-   Low power consumption
-   Schottky type photodiode sensor
-   Wide response range
-   Grove Interface

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

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

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Application Ideas
-----

* UV sensors are used in many different applications, include pharmaceuticals, automobiles, and robotics.
* UV sensors are also used in the printing industry for solvent handling and dyeing processes.
* In addition, UV sensors are used in the chemical industry for the production, storage, and transportation of chemicals as well.

The theory of UV sensor is: In sunlight, the UV index and Photocurrent are a linear relationship.

![](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/img/The%20theory%20of%20UV%20sensor.png)

About our Grove - UV Sensor, we have converted Photocurrent to corresponding voltage value collected by Arduino/Seeeduino. The output voltage and the UV index is linear:

**illumination intensity = 307 * Vsig**

Vsig is the value of voltage measured from the SIG pin of the Grove interface, unit V.
illumination intensity unit: mW/m<sup>2</sup> for the combination strength of UV light with wavelength range: 240nm~370nm

<div class="admonition note">
<p class="admonition-title">Note</p>
To calculate the UV index value, please refer to <a href="http://www2.epa.gov/sunwise/uv-index">US EPA</a>. It is hard to say that the measurement from this sensor can be converted to the EPA standard UV index, but can be estimated roughly.
</div>


UV Index = illumination intensity / 200

Getting Started
--------------

!!!Note
    This chapter is based on Win10 and Arduino IDE 1.6.9

We will show you how this Grove - UV Sensor works through a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - UV Sensor | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/img/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


  **Connection**

  Thanks to the benefits of Grove series modules, you don't need to make soldering or bread board, what you need to do is to connect the modules to the right port of Base Shield. For this demo, we only need one Grove module.
-   Connect Grove UV Sensor to A0 port of Grove - Base Shield.
-   Plug the Grove - Base Shield into Arduino/Seeeduino and connect them to PC by using a USB cable.
-   The demo code is shown below.

![enter image description here](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/img/connection.jpg)

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

Resources
---------

- [Grove - UV Sensor v1.1 PCB and schematics(current version) in Eagle format](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UV Sensor v1.1 PCB(current version) in PDF format](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UV Sensor v1.1 schematics(current version) in PDF format](https://github.com/SeeedDocument/Grove-UV_Sensor/raw/master/res/Grove%20-%20UV%20Sensor%20v1.1sch.pdf)
- [Grove - UV Sensor v1.1 Sensor Datasheets(current version)](https://raw.githubusercontent.com/SeeedDocument/Grove-UV_Sensor/master/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [US EPA Suggestions About UV Radiation](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UV Sensor v1.0 schematics and datasheets(older version)](https://raw.githubusercontent.com/SeeedDocument/Grove-UV_Sensor/master/res/Grove-UV_Sensor_v1.0_Datasheets.zip)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_UV_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>