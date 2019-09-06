---
name: Grove - Alcohol Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Alcohol-Sensor-p-764.html
oldwikiname: Grove_-_Alcohol_Sensor
prodimagename: Alcohol_sensor_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020044 1.jpg
surveyurl: https://www.research.net/r/Grove-Alcohol_Sensor
sku: 101020044
tags: grove_analog, io_5v, plat_duino
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/img/Alcohol_sensor_01.jpg)

Grove - Alcohol Sensor is a complete alcohol sensor module for Arduino or Seeeduino. It is built with [MQ303A](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/res/MQ303A.pdf) semiconductor alcohol sensor. It has good sensitivity and fast response to alcohol. It is suitable for making Breathalyzer. This Grove implements all the necessary circuitry for MQ303A like power conditioning and heater power supply. This sensor outputs a voltage inversely proportional to the alcohol concentration in air.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)

<div class="admonition danger">
<p class="admonition-title">Note</p>
The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor.
</div>

!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](http://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/), it will help you choose the gas sensor that best suits your needs.

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

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Usage
-----

### Hardware Installation

Grove products have a eco system and all have a same connector which can plug onto the [Grove Base Shield](/Base_Shield_V2). Connect this module to the A0 port of Base Shield, however, you can also connect Gas sensor to Arduino without Base Shield by jumper wires.

| Arduino UNO | Alcohol Sensor |
|-------------|----------------|
| 5V          | VCC            |
| GND         | GND            |
| Analog A1   | SCL            |
| Analog A0   | DAT            |

You can gain the present voltage through the DAT pin of sensor. <font color="Red">Please note the best preheat time of the sensor is above 48 hours</font>. For the detailed information about the Alcohol sensor please refer to the datasheet.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg)

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

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/img/Gas_Sensor_5.png)

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

Resources
---------

- [Grove-Alcohol Sensor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip)
- [Grove-Alcohol Sensor v1.2 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip)
- [Schematics in PDF Format](https://github.com/SeeedDocument/Grove-Alcohol_Sensor/raw/master/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf)
- [How to Choose A Gas Sensor](/How_to_Chose_A_Gas_Sensor)
- [MQ303A](https://raw.githubusercontent.com/SeeedDocument/Grove-Alcohol_Sensor/master/res/MQ303A.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Alcohol_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>