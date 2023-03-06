---
description: Grove - HCHO Sensor
title: Grove - HCHO Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-HCHO_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


The Grove - HCHO Sensor is a semiconductor VOC gas sensor. Its design is based on WSP2110 whose conductivity changes with the concentration of VOC gas in air. Through the circuit, the conductivity can be converted to output signal that corresponding to the gas concentration. This sensor can detect the gas whose concentration is up to 1ppm. It’s suitable for detecting formaldehyde, benzene, toluene and other volatile components. This product can be used to detect harmful gas in the home environment. Therefore, it’s a good assistant for you to improve indoor environment quality of life.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/depot/grove-hcho-sensor-p-1593.html)

<div class="admonition warning">
<p class="admonition-title">Warning</p>
The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor.
</div>

:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::
Specifications
-------------

-   Operating Voltage: 5.0V ± 0.3V
-   Target Gases: HCHO, Benzene,Toluene,Alcohol
-   Concentration Range: 1~50 ppm
-   Sensor Resistance Value(Rs): 10KΩ-100KΩ(in 10ppm HCHO)
-   Sensitivity: Rs(in air)/Rs(10ppm HCHO)≥5

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Platforms Supported
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Getting Started
---------------

The Grove - HCHO Sensor can be used to detect VOCs, such as HCHO,toluene, benzene, alcohol. Here we take HCHO for an example to demonstrate how to use this sensor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


```
// demo of Grove - HCHO Sensor

#define Vc 4.95

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    float R0=(1023.0/sensorValue)-1;
    Serial.print("R0 = ");
    Serial.println(R0);
    delay(500);
}
```

After uploading the code, open the serial monitor to get the R0 under normal condition(outdoor is the best).

Adjust the resistance of R1(the blue potentiometer) with a small screwer to make the number of R0 in the range of 10-100 and record that number(my R0 number here is 34.28).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png" alt="pir" width={600} height="auto" /></p>


Type your number of R0 in `#define R0 ***`, then uploading the code. Remember not to screw R1 anymore, unless you decide to detect R0 again.

```
// demo of Grove - HCHO Sensor
#include <math.h>
#define Vc 4.95
//the number of R0 you detected just now
#define R0 34.28

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    double Rs=(1023.0/sensorValue)-1;
    Serial.print("Rs = ");
    Serial.println(Rs);
    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));
    Serial.print("HCHO ppm = ");
    Serial.println(ppm);
    delay(1000);
}
```

Then move the sensor into the office, and read the HCHO ppm value:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png" alt="pir" width={600} height="auto" /></p>


From the Typical Sensitivity Curve we could know that the detection range is 1-50ppm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg" alt="pir" width={600} height="auto" /></p>


To detect other VOC gas, you could calculate Rs/R0, then refer to the sensitivity characteristic diagram and find the gas concentration. Or use the following python script to fit the typical sensitivity curve and calculate the value of a and b:

`ppm = 10 ^ ((log10(Rs/R0) + a) / b)`

```
# coding=utf-8
# calculate a and b of HCHO
import numpy as np
import matplotlib.pyplot as plt

#get the measure data from the Typical Sensitivity Curve
x = np.array([1, 5, 10, 20, 40])
y = np.array([1.21, 0.56, 0.4, 0.3, 0.21])

plt.subplot(221)
plt.loglog(x,y,lw=2)
#plt.ylim(0,1.5)  
plt.xlabel('log(x)')  
plt.ylabel('log(y)')  
plt.show()  
```


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Grove - HCHO Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip)
-   [Grove - HCHO Sensor Schematic in PDF](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf)
-   [WSP2110 Datasheet (Chinese)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf)
-   [WSP2110 Datasheet (English)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_HCHO_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


