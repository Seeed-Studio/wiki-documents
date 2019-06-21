---
name: Grove - Voltage Divider
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html
oldwikiname: Grove - Sunlight Sensor
prodimagename: Voltage_Divider_01.jpg
surveyurl: https://www.research.net/r/Grove_Voltage_Divider
sku: 104020000
---
![](https://github.com/SeeedDocument/Grove-Voltage_Divider/raw/master/img/Voltage_Divider_01.jpg)

The Grove – Voltage Divider provides an interface for measuring external voltage, eliminating the need to connect a resistance to input interface. Besides, the voltage gain can select by dial switch. They are easy to use.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)


## Feature
---
- Extern Voltage Interface and Grove Interface
- Easy to use
- Can adjust the gain

!!!Tip
    More details about Grove modules please refer [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
## Specification
---

|Item|	Min	|Typical	|Max	|Unit|
|---|---|---|---|---|
|Working Voltage|	4.7	|5.0|	5.3	|VDC|
|Measurement Accuracy	|/|<=1|/|	 %|
|Extern Voltage Range	(select 3)|	0.3	|/|	12.9|	V|
|Extern Voltage Range (Select 10)|1.0	|/	|43|V|
|Dimension	|/|24X20|/|	mm|

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

## Getting Started
---
When measuring the external voltage, connect the external voltage to J1 and then connect the on-board Grove connector to analog port of Arduino/Seeeduino:
- Connect the module to A0 port of [Grove - Base Shield](http://wiki.seeedstudio.com/Base_Shield_V2) with a universal Grove Cable.
- Connect [Grove - Base Shield](http://wiki.seeedstudio.com/Base_Shield_V2) to Arduino/Seeeduino.

In order to test the precision of this module, I tested some voltage inputs and get the following data:

![](https://github.com/SeeedDocument/Grove-Voltage_Divider/raw/master/img/Voltage_Divider_Test_Score.jpg)

- As you can see, when the inputs were in the measuring range, the voltage divider has a high accuracy(<1%, that i marked an "OK"). But as the inputs were not in the range, the accuracy gets low(i marked a "NO") Please see [Specification](http://wiki.seeedstudio.com/Grove-Voltage_Divider/#specification) about the specific measurement range.

And When voltage divider output voltage is higher than VCC (The Grove Operating Voltage and reference of analog read), an indicator will light up to show you the error.

- Using the serial monitor of Arduino, you can measure the input voltage value. Demo code as show below:

```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    long  sensorValue=analogRead(A0);
    long  sum=0;
    for(int i=0;i<1000;i++)
    {
        sum=sensorValue+sum;
        sensorValue=analogRead(A0);
        delay(2);
    }
    sum=sum/1000;

    Serial.print("if you set the Gain to 10,the input voltage:");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("if you set the Gain to 3,the input voltage:");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Voltage Divider to port A0 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Voltage_Divider/master/img/cc_Voltage_Divider.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will see the voltage in the Serial Monitor.

## Resource
---
- [Grove - Voltage Divider Eagle File](https://github.com/SeeedDocument/Grove-Voltage_Divider/raw/master/res/Grove-Voltage_Divider_Eagle_File.zip)
- [LMV358ID Datasheet](https://github.com/SeeedDocument/Grove-Voltage_Divider/raw/master/res/LMV358ID_Datasheet.pdf)
- [Codecraft CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Voltage_Divider/master/res/Grove_Voltage_Divider_CDC_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>