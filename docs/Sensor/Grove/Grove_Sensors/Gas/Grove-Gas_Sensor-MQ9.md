---
description: Grove - Gas Sensor(MQ9)
title: Grove - Gas Sensor(MQ9)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Gas_Sensor-MQ9
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- <![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Grove_MQ3_Gas_Sensor.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Grove_MQ3_Gas_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


The Grove - Gas Sensor(MQ9) module is useful for gas leakage detection (in home and industry). It is suitable for detecting <font color="Blue">LPG, CO, CH4</font>. Due to its high sensitivity and fast response time, measurements can be taken as soon as possible. The sensitivity of the sensor can be adjusted by using the potentiometer.

<div class="admonition danger">
<p class="admonition-title">Note</p>
The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor.
</div>



<!-- |Sensor|Gas Type|Get One Now|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Gas Type</h4></td>
    <td><h4>Get One Now</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Combustible Gas, Smoke</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>Alcohol Vapor</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>LPG, Natural Gas, Town Gas</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>Carbon Monoxide, Coal Gas, Liquefied Gas</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::
## Features

-   Wide detecting scope
-   Stable and long life
-   Fast response and High sensitivity

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specification


| Item             | Parameter               | Min | Typical    | Max              | Unit |
|------------------|-------------------------|-----|------------|------------------|------|
| VCC              | Working Voltage         | 4.9 | 5          | 5.1              | V    |
| PH               | Heating consumption     | 0.5 | -          | 340              | mW   |
| RL               | Load resistance         |     | adjustable |                  |      |
| RH               | Heater resistance       | -   | 33Ω±5%     | -                | Ω    |
| Rs               | Sensing Resistance      | 2   | -          | 20000            | Ω    |
| CO/CH4/LPG Scope | Detecting Concentration | 200 | -          | 1000/10000/10000 | ppm  |



## Application Ideas

-   Gas leakage detection.
-   Toys.


## Hardware Overview


This is an Analog output sensor. This needs to be connected to any one Analog socket in Grove Base Shield. The examples used in this tutorial makes uses of A0 analog pin. Connect this module to the A0 port of Base Shield.

It is possible to connect the Grove module to Arduino directly by using jumper wires by using the connection as shown in the table below:

| Arduino   | Gas Sensor |
|-----------|------------|
| 5V        | VCC        |
| GND       | GND        |
| NC        | NC         |
| Analog A0 | SIG        |

The output voltage from the Gas sensor increases when the concentration of gas increases. Sensitivity can be adjusted by varying the potentiometer. <font color="Red">Please note that the best preheat time for the sensor is above 24 hours</font>. For detailed information about the MQ-9 sensor, please refer to the data-sheet provided in **Resources** section.


## Platforms Supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::


## Getting Started

### Play With Arduino



| Seeeduino V4.2 | Base Shield | Grove - Gas Sensor(MQ9) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html" target="_blank">Get One Now</a>|



<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Read_Gas_Sensor_data.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>



Connect the Grove - Gas Sensor(MQ9) to A0 port as shown in the picture above.

### Gas Detection : Basic Example

In this example, the sensor is connected to A0 pin. The voltage read from the sensor is displayed. This value can be used as a threshold to detect any increase/decrease in gas concentration.

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

### Measurement : Approximation

This examples demonstrates a way to know the approximate concentration of Gas. As per the data-sheet of the MQ9 sensors, these equations are tested for standard conditions and are not calibrated. It may vary based on change in temperature or humidity.

1. Keep the Gas Sensor in clean air environment. Upload the program below.

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float R0;  // Get the value of R0 via in LPG
    float sensorValue;

    /*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
    /*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // omit *RL
    R0 = RS_air/9.9; // The ratio of RS/R0 is 9.9 in LPG gas from Graph (Found using WebPlotDigitizer)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

2. Then, open the serial monitor of Arduino IDE. Write down the value of R0 and this needs to be used in the next program. Please node down the R0 after the reading stabilizes.

<font color="Red">Replace the R0 below with value of R0 tested above </font>. Expose the sensor to any one of the gas listed above.

```
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL

          /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

Now, we can get the concentration of gas from the figure below.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/GAS_Sensor_7.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/GAS_Sensor_7.png" alt="pir" width={600} height="auto" /></p>


According to the figure, we can see that the minimum concentration we can test is 200ppm and the maximum is 10000ppm, in a other word, we can get a concentration of gas between 0.02% and 1%. However, we can't provide a formula because the relation between ratio and concentration is nonlinear.




### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Gas Sensor(MQ9)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - Gas Sensor(MQ9) to port A0 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/With_Hat.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    For step 3 you are able to connect the Grove - Gas Sensor(MQ9) to **any Analog Port** but make sure you change the command with the corresponding port number.
:::

#### Software

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to write the code.

```
cd grove.py/grove
nano grove_gas_sensor_mq9.py

```
Then you should copy following code in this file and hit ++ctrl+x++ to quit and save.


```python

import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ9:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ9(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ9


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ9(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ9))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **Step 4**. Excute below commands to run code.

```python 

python grove_gas_sensor_mq9.py  0

```

:::success
    If everything goes well, you will be able to see the following result
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq9.py 0
Detecting...
Gas value: 345
Gas value: 348
Gas value: 351
Gas value: 354
Gas value: 357
Gas value: 360
Gas value: 363
Gas value: 365
Gas value: 368
Gas value: 370
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq9.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq9.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.

:::notice
        You may have noticed that for the analog port, the silkscreen pin number is something like **A0, A1**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.
:::

<!-- <div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Eagle_files.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" /> -->



Resources
---------

**Suggest Reading / References**

-   How to choose a Gas Sensor
-   [What's LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**Schematic**
---------

-   [Grove Gas Sensor - EAGLE (Schematic and Board) files](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Eagle_files.zip)
-   [Grove Gas Sensor - PDF Schematic](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Schematic.pdf)

**Datasheet**

-   [MQ-9 Datasheet](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/MQ-9.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ9) -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

