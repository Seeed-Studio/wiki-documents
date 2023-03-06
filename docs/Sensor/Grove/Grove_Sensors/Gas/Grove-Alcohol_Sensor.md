---
description: Grove - Alcohol Sensor
title: Grove - Alcohol Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Alcohol_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


Grove - Alcohol Sensor is a complete alcohol sensor module for Arduino or Seeeduino. It is built with [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf) semiconductor alcohol sensor. It has good sensitivity and fast response to alcohol. It is suitable for making Breathalyzer. This Grove implements all the necessary circuitry for MQ303A like power conditioning and heater power supply. This sensor outputs a voltage inversely proportional to the alcohol concentration in air.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)

<div class="admonition danger">
<p class="admonition-title">Note</p>
The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor.
</div>

:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::
Features
--------

-   Input Voltage: 5V
-   Working Current: 120mA
-   Detectable Concentration: 20-1000ppm
-   Grove Compatible connector
-   Highly sensitive to alcohol.
-   Fast response and resumes quickly after alcohol exposure.
-   Long life.
-   Compact form factor.

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::


Usage
-----

### Hardware Installation

Grove products have a eco system and all have a same connector which can plug onto the Grove Base Shield. Connect this module to the A0 port of Base Shield, however, you can also connect Gas sensor to Arduino without Base Shield by jumper wires.

| Arduino UNO | Alcohol Sensor |
|-------------|----------------|
| 5V          | VCC            |
| GND         | GND            |
| Analog A1   | SCL            |
| Analog A0   | DAT            |

You can gain the present voltage through the DAT pin of sensor. <font color="Red">Please note the best preheat time of the sensor is above 48 hours</font>. For the detailed information about the Alcohol sensor please refer to the datasheet.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg" alt="pir" width={600} height="auto" /></p>


### Download Code and Upload

There are two steps you need to do before getting the concentration of gas.

First, connect the module with Grove Shield using A0 like the picture above. And put the sensor in a clear air and use the program below.

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float sensorValue = 0;

/*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
/*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = sensor_volt/(5.0-sensor_volt); // omit *R16
    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    Serial.print("RS_air = ");
    Serial.println(RS_air);
    delay(1000);
}
```

Then, open the monitor of Arduino IDE, you can see some data are printed, write down the value of RS_air and you need to use it in the following program. During this step, you may pay a while time to test the value of RS_air.

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = sensor_volt/(5.0-sensor_volt); // omit *R16

  /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/RS_air;  // ratio = RS/R0
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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png" alt="pir" width={600} height="auto" /></p>


According to the figure, we can see that the minimum concentration we can test is 20ppm and the maximum is 10000ppm, in a other word, we can get a concentration of gas between 0.002% and 1%. However, we can't provide a formula because the relation between ratio and concentration is nonlinear.

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p> a. The value varies between 500 - 905. Hence any value above 650 indicates alcohol vapor in the vicinity.</p>
<p> b. Once exposed to alcohol vapor, it takes some time for the sensor value to decrease completely.</p>
<p> c. Yet, any new exposure will show instant increase in sensor value.</p>
</div>


<div class="admonition danger">
<p class="admonition-title">Caution</p>
<p> a. Alcohol sensor is very sensitive semiconductor device. Handle with care.</p>
<p> b. Do not expose to organic silicon steam, alkali or corrosive gases.</p>
<p> c. Do not use freeze or spill water.</p>
<p> d. Maintain proper working voltage.</p>
</div>

# Grove-Alcohol Sensor
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove-Alcohol Sensor v1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



# Resources
---------

- [Grove-Alcohol Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip)
- [Grove-Alcohol Sensor v1.2 Eagle File](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip)
- [Schematics in PDF Format](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf)
- [How to Choose A Gas Sensor](#/How_to_Chose_A_Gas_Sensor)
- [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Alcohol_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

